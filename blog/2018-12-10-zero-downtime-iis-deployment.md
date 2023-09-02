---
title:  "Poor Man's Zero Downtime Deployment in IIS"
authors: flom
tags: [IIS, Windows, DevOps]
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

```text
edrinks-webapp
+-- release_0
|   +-- index.html
|   +-- app.js
```

In each deployment I'm creating a new folder called *release_x* where a simple task is copying the application into it
while increasing a counter (handled by TeamCity variables):

```text
edrinks-webapp
+-- release_0
|   +-- index.html
|   +-- app.js
+-- release_1
|   +-- index.html
|   +--app.js
```

After the files have been copied I call AppCmd.exe to change the folder from where the IIS page is served from:

```shell

C:\Windows\System32\inetsrv\appcmd.exe set vdir "E-Drinks/" -physicalPath:"edrinks-webapp\release_1"

```

```vdir "E-Drinks/"``` identifies the application name given in IIS and ```-physicalPath:"..."``` is the actual location
on the hard drive.


This process goes on for each each deployment:

```text
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
```

In order to prevent having too many old application versions I execute a small cleanup task which keeps the last *x* 
versions and deletes the remaining old versions.
In my case this is done with following python script:

```python
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
```

```shell
python cleanup.py 10 # number of old versions to keep
```
