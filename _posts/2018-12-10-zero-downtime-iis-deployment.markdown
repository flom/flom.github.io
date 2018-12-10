---
layout: post
title:  "Poor Man's Zero Downtime Deployment in IIS"
date:   2018-12-10
comments: true
---

For my side project I'm deploying two projects (Angular Frontend and ASP.NET Core API) to a Windows Server with IIS installed.
In my current setup each project is deployed automatically via [TeamCity](https://www.jetbrains.com/teamcity/) whenever I check
something into the master branch. 

One way to do such a deployment is to use an build server tasks that handles the deployment to IIS (e.g. via Web Deploy).
What those tasks are basically doing is copying files (latest binaries of the application) to the physical path of the IIS site.
If you enable more fancy options on those deployment tasks then this step might include taking the IIS site offline and/or deleting 
all old files prior to deployment.

The problem I had with this approach is that the application is either offline during deployment or in an inconsistent state while
files are being copied to the IIS sites physical location.
For my small side project I wanted to have a (nearly) zero downtime deployment in IIS.

So what I wanted to do is to copy my application binaries (that I want to serve via IIS) to an 'arbitrary' folder and then tell
IIS to serve the application from this new folder after the copy job is done.

Thanks to **AppCmd.exe** this is actually pretty easy to achieve. 
**AppCmd.exe** allows you to manage your IIS Server via command line.
A introduction and more complete documentation can be found here: <https://docs.microsoft.com/en-us/iis/get-started/getting-started-with-iis/getting-started-with-appcmdexe>.

The initial state of the folder structure looked something like this:

{% highlight configfile %}
edrinks-webapp
+-- release_0
|   +-- index.html
|   +-- app.js
{% endhighlight %}

In each deployment I'm creating a new folder called *release_x* where a simple task is copying the application into it
while increasing a counter (handled by TeamCity variables):

{% highlight configfile %}
edrinks-webapp
+-- release_0
|   +-- index.html
|   +-- app.js
+-- release_1
|   +-- index.html
|   +--app.js
{% endhighlight %}

After the files have been copied I call AppCmd.exe to change the folder from where the IIS page is served from:

{% highlight powershell %}

C:\Windows\System32\inetsrv\appcmd.exe set vdir "E-Drinks/" -physicalPath:"edrinks-webapp\release_1"

{% endhighlight %}

```vdir "E-Drinks/"``` identifies the application name given in IIS and ```-physicalPath:"..."``` is the actual location
on the hard drive.


This process goes on for each each deployment:

{% highlight configfile %}
edrinks-webapp
+-- release_0
|   +-- index.html
|   +-- app.js
+-- release_1
|   +-- index.html
|   +--app.js
+-- release_2
|   +-- index.html
|   +-- app.js
|   +-- new_app.css
+-- release_x
|   +-- index.html
|   +-- ...
{% endhighlight %}

In order to prevent having too many old application versions I execute a small cleanup task which keeps the last *x* 
versions and deletes the remaining old versions.
In my case this is done with following python script:

{% highlight python %}
import os, sys, shutil

def cleanup(keep):
    print('keep last {} versions'.format(keep))
    releases = []
    for item in os.listdir():
        if item.startswith('release_'):
            releases.append((item, os.path.getctime(item)))
    releases.sort(key=lambda tup: tup[1], reverse=True)
    for release in releases[keep:]:
        print('removing {}'.format(release[0]))
        shutil.rmtree(release[0])

if __name__ == '__main__':
    if len(sys.argv) >= 2:
        try:
            keep = int(sys.argv[1])
            cleanup(keep)
        except ValueError:
            print('invalid parameter: {}'.format(sys.argv[1]))
{% endhighlight %}

{% highlight powershell %}
python cleanup.py 10 # number of old versions to keep
{% endhighlight %}

---

{% if page.comments %}
<div id="disqus_thread"></div>
<script>

var disqus_config = function () {
this.page.url = 'https://flom.github.io/2018/12/10/zero-downtime-iis-deployment.html';  
this.page.identifier = '2018-12-10-zero-downtime-iis-deployment.markdown'; 
};

(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://flom-github-io.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
{% endif %}
