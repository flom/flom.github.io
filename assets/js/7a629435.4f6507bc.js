"use strict";(self.webpackChunkflom_github_io=self.webpackChunkflom_github_io||[]).push([[792],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={title:"Open API",authors:"flom",tags:["OpenAPI"]},i=void 0,s={permalink:"/blog/2019/07/30/open-api",source:"@site/blog/2019-07-30-open-api/index.md",title:"Open API",description:"Designing REST-APIs",date:"2019-07-30T00:00:00.000Z",formattedDate:"July 30, 2019",tags:[{label:"OpenAPI",permalink:"/blog/tags/open-api"}],readingTime:6.925,hasTruncateMarker:!1,authors:[{name:"Florian Mladitsch",title:"Software Developer",url:"https://github.com/flom",imageURL:"https://github.com/flom.png",key:"flom"}],frontMatter:{title:"Open API",authors:"flom",tags:["OpenAPI"]},nextItem:{title:"Poor Man's Zero Downtime Deployment in IIS",permalink:"/blog/2018/12/10/zero-downtime-iis-deployment"}},l={authorsImageUrls:[void 0]},p=[{value:"Designing REST-APIs",id:"designing-rest-apis",level:2},{value:"OpenAPI Initiative (OAI)",id:"openapi-initiative-oai",level:2},{value:"Example &#39;Project Management App&#39;",id:"example-project-management-app",level:2},{value:"Writing the API specification on SwaggerHub",id:"writing-the-api-specification-on-swaggerhub",level:2},{value:"Downloading client code for Angular",id:"downloading-client-code-for-angular",level:2},{value:"Download code via <em>Export -&gt; ClientSDK -&gt; typescript-angular</em>",id:"download-code-via-export---clientsdk---typescript-angular",level:3},{value:"Add the client to you project",id:"add-the-client-to-you-project",level:3},{value:"Using the services",id:"using-the-services",level:3},{value:"Downloading server code for Python Flask",id:"downloading-server-code-for-python-flask",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"designing-rest-apis"},"Designing REST-APIs"),(0,a.kt)("p",null,"Over the years there has been many approaches to expose your service/business-layer to the outside world in a (programming) language agnostic way via APIs.\nThe APIs could be as low-level as direct TCP/IP socket connections or more standardized (and complex) as the SOAP standard.\nBut with on-going rise of the web the most common API approach you will find is that of a REST-API.\nMost single page application are accessing the backend services via REST-APIs but they are also used for 'standalone' services like weather data,\ngithub, or even for a database (CouchDB)."),(0,a.kt)("p",null,"But one disadvantage of building a REST-API is that the consumer must know all the endpoints, which methods are allowed on them,\nand what data structure the API expects.\nTo get this information you have more or less three possibilities:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You wrote the API yourself"),(0,a.kt)("li",{parentName:"ol"},"You ask the person who wrote it"),(0,a.kt)("li",{parentName:"ol"},"You resort to the documentation ")),(0,a.kt)("p",null,"But when multiple people are relying on the REST-API the first two options are no longer working so having a documentation is the only solution.\nBut relying on documentation brings its own problems along, for example being out of date, simply wrong or incomplete.\nAdditionally on how the documentation is presented might vary from API to API. "),(0,a.kt)("h2",{id:"openapi-initiative-oai"},"OpenAPI Initiative (OAI)"),(0,a.kt)("p",null,"The OpenAPI Initiative defines a specification on how REST-APIs are described and documented as described on their about page:"),(0,a.kt)("a",{href:"https://www.openapis.org/about",target:"_blank"},"https://www.openapis.org/about"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The OpenAPI Initiative (OAI) was created by a consortium of forward-looking industry experts who recognize the immense value of standardizing on how REST APIs are described. As an open governance structure under the Linux Foundation, the OAI is focused on creating, evolving and promoting a vendor neutral description format. SmartBear Software is donating the Swagger Specification directly to the OAI as the basis of this Open Specification. ")),(0,a.kt)("p",null,"Before the OAI there was (and still is) the tool ecosystem Swagger (",(0,a.kt)("a",{href:"https://swagger.io/",target:"_blank"},(0,a.kt)("a",{parentName:"p",href:"https://swagger.io"},"https://swagger.io")),").\nSwagger had its own specification language to specify and document REST-APIs and additionally tooling to generate documentation pages and even code stubs.\nSwagger was taken into the OAI and it's Swagger specification 2.0 was renamed to the OpenAPI Specification.\nBy now the OpenAPI Specification is at version 3."),(0,a.kt)("p",null,"The cool thing about having a standard language on how to describe the API is that it is possible to provide standardized/generated documentation and generate code for the client and server.\nBecause I have never tried the complete workflow (write specification -> generate code -> implement business logic) with\nthe OpenAPI Specification I wanted to do a small example project with this approach."),(0,a.kt)("h2",{id:"example-project-management-app"},"Example 'Project Management App'"),(0,a.kt)("p",null,"For the small example project I'm doing a shitty little project management application with following features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create projects with name and deadline"),(0,a.kt)("li",{parentName:"ul"},"Add tasks to a project"),(0,a.kt)("li",{parentName:"ul"},"Delete tasks from a project"),(0,a.kt)("li",{parentName:"ul"},"Set tasks to finished")),(0,a.kt)("h2",{id:"writing-the-api-specification-on-swaggerhub"},"Writing the API specification on SwaggerHub"),(0,a.kt)("p",null,"The first step is to visit ",(0,a.kt)("a",{href:"https://swagger.io/",target:"_blank"},(0,a.kt)("a",{parentName:"p",href:"https://swagger.io"},"https://swagger.io"))," and sign in into ",(0,a.kt)("em",{parentName:"p"},"SwaggerHub"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"SwaggerHub Login",src:n(34).Z,width:"2360",height:"1458"})),(0,a.kt)("p",null,"After the login you will see your personal Hub where you can create a new API:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hub Create API",src:n(352).Z,width:"2448",height:"1010"})),(0,a.kt)("p",null,"With the option ",(0,a.kt)("strong",{parentName:"p"},"Auto Mock API")," Swagger will generate static mock data based on your defined endpoints and data structures.\nUsing ",(0,a.kt)("strong",{parentName:"p"},"Simple API")," as a template gives a quick starting point for the API without having to know the OpenAPI specification."),(0,a.kt)("p",null,"To get a good overview of the specification language you can visit ",(0,a.kt)("a",{href:"https://app.swaggerhub.com/help/tutorials/openapi-3-tutorial",target:"_blank"},"OpenAPI 3.0 Tutorial"),".\nFor quickly looking up the syntax of single elements the ",(0,a.kt)("a",{href:"https://swagger.io/docs/specification/basic-structure/",target:"_blank"},"Specification")," is a good starting point."),(0,a.kt)("p",null,"After adding the endpoints for my Project Management App my endpoints look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project Management API",src:n(1795).Z,width:"1276",height:"1230"})),(0,a.kt)("p",null,"And the data structures are as following:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Datastructures",src:n(1073).Z,width:"1254",height:"974"})),(0,a.kt)("p",null,"The same example data you enter into your specification will be used for the ",(0,a.kt)("strong",{parentName:"p"},"Auto Mock API"),".\nIf enabled, the Mock API is available under ",(0,a.kt)("inlineCode",{parentName:"p"},"https://virtserver.swaggerhub.com/[username]/[ProjectName]/[version]/"),".\nFor the client side code generation this url is taken as well as a fallback URL if you don't provide one yourself."),(0,a.kt)("p",null,"Before generating the code for client and server you should give a quick glance at the tags you defined in your specification."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Specification Tags",src:n(5280).Z,width:"1352",height:"642"})),(0,a.kt)("p",null,"For the generated documentation page all they seem to do is put your endpoints into sections (in my case ",(0,a.kt)("em",{parentName:"p"},"project")," and ",(0,a.kt)("em",{parentName:"p"},"task"),").\nBut later for code generation the generator will put the sections/tags into different files/classes.\nFor Angular this ends up being two services (project.service.ts and task.service.ts) and for the Python Flask server code two files are generated (project_controller.py and task_controller.py)."),(0,a.kt)("p",null,"Another important setting is the ",(0,a.kt)("em",{parentName:"p"},"operationId"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Specification Operation ID",src:n(3023).Z,width:"1120",height:"342"})),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"operationId")," is used to generate the specific method names for your client/server code."),(0,a.kt)("h2",{id:"downloading-client-code-for-angular"},"Downloading client code for Angular"),(0,a.kt)("p",null,"After the specification is done you can now generate the code for your front- and backend.\nFor angular the process looks like this:"),(0,a.kt)("h3",{id:"download-code-via-export---clientsdk---typescript-angular"},"Download code via ",(0,a.kt)("em",{parentName:"h3"},"Export -> ClientSDK -> typescript-angular")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Download Angular Client Code",src:n(8112).Z,width:"1052",height:"832"})),(0,a.kt)("p",null,"In my case the files look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"api\n+-- api.ts\n+-- project.service.ts\n+-- task.service.ts\nmodel\n+-- models.ts\n+-- project.ts\n+-- task.ts\napi.module.ts\nconfiguration.ts\n...\n")),(0,a.kt)("p",null,"Under ",(0,a.kt)("inlineCode",{parentName:"p"},"api")," you will find the injectable services.\nThe folder ",(0,a.kt)("inlineCode",{parentName:"p"},"model")," contains the defined data structures.\n",(0,a.kt)("inlineCode",{parentName:"p"},"api.module.ts")," defines the module which can be imported into your application and ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration.ts")," contains the settings like ",(0,a.kt)("em",{parentName:"p"},"API base URL"),"."),(0,a.kt)("h3",{id:"add-the-client-to-you-project"},"Add the client to you project"),(0,a.kt)("p",null,"After you copied the generated files into your project you have to import it into your app module.\nAlso you have to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpClientModule")," in order to use the services."),(0,a.kt)("p",null,"app.module.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@NgModule({\n  ...\n  imports: [\n    ...\n    HttpClientModule, // required by ApiModule\n    ApiModule // generated code from SwaggerHub\n  ],\n  ...\n  bootstrap: [AppComponent]\n})\nexport class AppModule {\n}\n")),(0,a.kt)("p",null,"Normally it shouldn't be necessary to edit the generated client code.\nBut after running the project you might see following error when running the project:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Angular Compile Error",src:n(4422).Z,width:"2092",height:"136"})),(0,a.kt)("p",null,"The solution for this error I found on Stackoverflow (",(0,a.kt)("a",{href:"https://stackoverflow.com/questions/49840152/angular-has-no-exported-member-observable",target:"_blank"},(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/49840152/angular-has-no-exported-member-observable"},"https://stackoverflow.com/questions/49840152/angular-has-no-exported-member-observable")),")\nTurns out beginning with ",(0,a.kt)("em",{parentName:"p"},"rxjs 6+")," the import lines for ",(0,a.kt)("inlineCode",{parentName:"p"},"Observable")," changed a little bit.\nSo one solution is to go into your ",(0,a.kt)("inlineCode",{parentName:"p"},"*.service.ts")," files and change the lines"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Observable } from 'rxjs/Observable'; // wrong\nimport { Observable } from 'rxjs'; // works\n")),(0,a.kt)("p",null,"or install the package ",(0,a.kt)("em",{parentName:"p"},"rxjs-compat")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install rxjs-compat --save\n")),(0,a.kt)("p",null,"The last thing you might want to change is the ",(0,a.kt)("em",{parentName:"p"},"API base URL"),".\nRunning the application as it is the service will send the requests against the Swagger Mock Server.\nTo quickly overwrite the URL you can add a new entry into your ",(0,a.kt)("inlineCode",{parentName:"p"},"environment.ts")," file and provide ",(0,a.kt)("inlineCode",{parentName:"p"},"BASE_PATH")," with this value:"),(0,a.kt)("p",null,"environment.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export const environment = {\n  production: false,\n  base_path: 'http://localhost:8888'\n};\n")),(0,a.kt)("p",null,"app.module.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { environment } from '../environments/environment';\n\n@NgModule({\n  ...\n  providers: [{\n    provide: BASE_PATH,\n    useValue: environment.base_path\n  }],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {\n}\n")),(0,a.kt)("h3",{id:"using-the-services"},"Using the services"),(0,a.kt)("p",null,"The usage of the generated services is more or less the same as if you would have written them yourself.\nSimply inject them into your component and call the methods as defined in your specification via the ",(0,a.kt)("em",{parentName:"p"},"operationId"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Component, OnInit } from '@angular/core';\nimport { Project, ProjectService } from '../api';\n\n@Component({\n  selector: 'app-project-overview',\n  templateUrl: './project-overview.component.html'\n})\nexport class ProjectOverviewComponent implements OnInit {\n\n  projects: Project[] = [];\n\n  constructor(private projectService: ProjectService) {\n  }\n\n  ngOnInit(): void {\n    this.projectService.listProjects()\n      .subscribe((projects: Project[]) => {\n        this.projects = projects;\n      }, (error) => {\n        console.log('error', error);\n      });\n  }\n}\n")),(0,a.kt)("h2",{id:"downloading-server-code-for-python-flask"},"Downloading server code for Python Flask"),(0,a.kt)("p",null,"For the server code I won't go much into detail.\nTo download it simply go to SwaggerHub and click on ",(0,a.kt)("em",{parentName:"p"},"Export -> Server Stub -> python-flask"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Python Flask Server Stub Download",src:n(899).Z,width:"910",height:"898"})),(0,a.kt)("p",null,"As opposed to the client code the generated server code is not ready to use out of the box.\nWhat it does is generate a ready-to-run application with the endpoints but with placeholders for the implementation:"),(0,a.kt)("p",null,"project_controller.py"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import connexion\nimport six\n\nfrom swagger_server.models.project import Project  # noqa: E501\nfrom swagger_server import util\n\nimport connexion\nimport six\n\nfrom swagger_server.models.project import Project  # noqa: E501\nfrom swagger_server import util\n\n\ndef add_project(body=None):  # noqa: E501\n    """adds an project\n\n    Adds a project # noqa: E501\n\n    :param body: The added project\n    :type body: dict | bytes\n\n    :rtype: None\n    """\n    if connexion.request.is_json:\n        body = Project.from_dict(connexion.request.get_json())  # noqa: E501\n    return \'do some magic!\'\n\n# ...remaining endpoints...\n')))}u.isMDXComponent=!0},4422:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/angular_compile_error-73060bbad1248812ac800a6e1245c5a2.png"},1073:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/api_datastructures-b0d66c22f2f585c7581afb131c0b256e.png"},8112:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/download_angular_client-c4fd02e24e3e545fd29539428bdcfc27.png"},899:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/download_flask_stub-7ad45c88c14b4b5099d766f4c04dc6b9.png"},352:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/hub_create_api-e635bb3c0e690581f120f705dbe5d789.png"},1795:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/project_mgmt_api-d49bc7f78ba053d7ebc16cb9f1819b0e.png"},3023:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/specification_operation_id-6aa2f4c4cda4ea5ab7a8660dd18e44e4.png"},5280:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/specification_tags-c481d17bdd25c4d00b394455a14b66b0.png"},34:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/swagger_hub_login-30a3eaa2ab9ba06b534fbdd34eeaca5d.png"}}]);