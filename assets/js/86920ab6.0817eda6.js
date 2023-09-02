"use strict";(self.webpackChunkflom_github_io=self.webpackChunkflom_github_io||[]).push([[622],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Angular: Synchronize component properties with URL query parameters",authors:"flom",tags:["angular","typescript"]},i=void 0,s={permalink:"/blog/2018/07/09/angular-synchronize-properties-with-url-parameters",source:"@site/blog/2018-07-09-angular-synchronize-properties-with-url-parameters/index.md",title:"Angular: Synchronize component properties with URL query parameters",description:"In some Angular applications the current route (or component if you will) holds an internal state of the application.",date:"2018-07-09T00:00:00.000Z",formattedDate:"July 9, 2018",tags:[{label:"angular",permalink:"/blog/tags/angular"},{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:3.83,hasTruncateMarker:!1,authors:[{name:"Florian Mladitsch",title:"Software Developer",url:"https://github.com/flom",imageURL:"https://github.com/flom.png",key:"flom"}],frontMatter:{title:"Angular: Synchronize component properties with URL query parameters",authors:"flom",tags:["angular","typescript"]},prevItem:{title:"Poor Man's Zero Downtime Deployment in IIS",permalink:"/blog/2018/12/10/zero-downtime-iis-deployment"}},l={authorsImageUrls:[void 0]},p=[],c={toc:p},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In some Angular applications the current route (or component if you will) holds an internal state of the application.\nFor example a entered search term and/or selected item in a list."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Internal State",src:n(9067).Z,width:"807",height:"222"})),(0,a.kt)("p",null,"With a Angular component looking something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example-one',\n  templateUrl: './example-one.component.html',\n  styleUrls: ['./example-one.component.css']\n})\nexport class ExampleOneComponent {\n  searchTerm = '';\n  searchOption = 1;\n}\n")),(0,a.kt)("p",null,"In order to not lose the state when the user refreshes the page (or wants to bookmark/share it) the current state must be persisted somewhere.\nWhile we could persist it in local storage (or session storage or cookie) this approach breaks when the user wants to share the link with another person.\nInstead what some applications are doing is to store the state in the URL.\nThe URL route/query parameters are updated as you change the state of a page.\nOn good example for this is Google Maps where the current view is encoded into the URL automatically after you change the current view."),(0,a.kt)("p",null,"[",(0,a.kt)("img",{alt:"Google Maps Example",src:n(5875).Z,width:"1098",height:"467"})),(0,a.kt)("p",null,"In Angular what I'm doing most of the time is to use the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{href:"https://angular.io/api/router/ActivatedRoute",target:"_blank"},"ActivatedRoute"))," service and update query parameters in the URL more less manually after the internal state changes.\nAdditionally during component initialization I have to read the current query parameters in order to set my internal properties (states) at startup."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Component, OnInit } from '@angular/core';\nimport { ActivatedRoute, Router } from '@angular/router';\n\n@Component({\n  selector: 'app-example-one',\n  templateUrl: './example-one.component.html',\n  styleUrls: ['./example-one.component.css']\n})\nexport class ExampleOneComponent implements OnInit {\n  searchTerm = '';\n  searchOption = 1;\n\n  constructor(private activatedRoute: ActivatedRoute, private router: Router) {\n  }\n\n  ngOnInit() {\n    if (this.activatedRoute.snapshot.queryParams['searchTerm']) {\n      this.searchTerm = this.activatedRoute.snapshot.queryParams['searchTerm'];\n    }\n\n    if (this.activatedRoute.snapshot.queryParams['searchOption']) {\n      this.searchOption = parseInt(this.activatedRoute.snapshot.queryParams['searchOption'], 10);\n    }\n  }\n\n  syncQueryParams() {\n    this.router.navigate(['.'], {\n      relativeTo: this.activatedRoute,\n      queryParams: {\n        searchTerm: this.searchTerm,\n        searchOption: this.searchOption\n      }\n    });\n  }\n}\n")),(0,a.kt)("p",null,"Component template:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'<div class="form-group">\n  <label class="input-label">Search Term</label>\n  <input type="text" [(ngModel)]="searchTerm" (ngModelChange)="syncQueryParams()">\n</div>\n\n<div class="form-group">\n  <label>\n    Option 1\n    <input type="radio" name="searchOption" [value]="1" [(ngModel)]="searchOption" (ngModelChange)="syncQueryParams()">\n  </label>\n  <label>\n    Option 2\n    <input type="radio" name="searchOption" [value]="2" [(ngModel)]="searchOption" (ngModelChange)="syncQueryParams()">\n  </label>\n</div>\n')),(0,a.kt)("p",null,"This got me thinking if it possible and easier to use Typescript property decorators to mark those properties (that represent my internal state) and automatically synchronize the values with the URL."),(0,a.kt)("p",null,"Documentation about Typescript Decorator can be found here: ",(0,a.kt)("a",{href:"http://www.typescriptlang.org/docs/handbook/decorators.html",target:"_blank"},"TypeScript Decorator")),(0,a.kt)("p",null,"I was hoping I could end up with something like the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class ExampleTwoComponent {\n  @UrlState() searchTerm = '';\n  @UrlState() searchOption = 1;\n}\n")),(0,a.kt)("p",null,"So, whenever this component is initialized those two properties would be set when the URL contains ",(0,a.kt)("inlineCode",{parentName:"p"},"?searchTerm=someSearch&searchOption=2")," and when I update the properties in the view it would reflect in the URL automatically."),(0,a.kt)("p",null,"But at this point I ran into the problem that it is not possible to directly inject (Angular) services into my decorator because they are, after all, just exported functions.\nWhile it is completely possible to implement query parameter updates without ",(0,a.kt)("em",{parentName:"p"},"Router")," and ",(0,a.kt)("em",{parentName:"p"},"ActivatedRoute")," I opted for a different solution/hack I found on Stackoverflow","[1]"," in order to inject services into a decorator."),(0,a.kt)("p",null,"Basically what it does is to inject the service ",(0,a.kt)("inlineCode",{parentName:"p"},"Injector")," into your component and then your decorator function taps into the ",(0,a.kt)("inlineCode",{parentName:"p"},"ngOnInit")," method of the component to inject its required services.\nThe complete implementations looks something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class ExampleTwoComponent implements OnInit {\n  @UrlState() searchTerm = '';\n  @UrlState({\n    parseFct: val => parseInt(val, 10)\n  }) searchOption = 1;\n\n  constructor(public injector: Injector) {\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export function UrlState(settings = {\n  parseFct: val => val\n}): PropertyDecorator {\n  return function (target, propertyKey) {\n    let propertyValue;\n    let activatedRoute: ActivatedRoute;\n    let router: Router;\n\n    const ngOnInitUnpatched = target['ngOnInit'];\n    target['ngOnInit'] = function (this) {\n      activatedRoute = this.injector.get(ActivatedRoute);\n      router = this.injector.get(Router);\n\n      activatedRoute.queryParams\n        .subscribe((params) => {\n          if (params[propertyKey]) {\n            target[propertyKey] = settings.parseFct(params[propertyKey]);\n          }\n        });\n\n      if (ngOnInitUnpatched) {\n        return ngOnInitUnpatched.call(this);\n      }\n    };\n\n    function getter() {\n      return propertyValue;\n    }\n\n    function setter(value: any) {\n      propertyValue = value;\n      if (activatedRoute) {\n        const newQueryParam = {};\n        newQueryParam[propertyKey] = value;\n\n        router.navigate(['.'], {\n          relativeTo: activatedRoute,\n          queryParams: newQueryParam,\n          queryParamsHandling: 'merge',\n          replaceUrl: true\n        });\n      }\n    }\n\n    Object.defineProperty(target, propertyKey, {\n      get: getter,\n      set: setter,\n      enumerable: true,\n      configurable: true\n    });\n  };\n}\n")),(0,a.kt)("p",null,"Additionally, the decorator takes a (parser) function as parameter because when retrieving the value from the route it is returned as a string.\nThe serialization/deserialization from and to query parameters could probably be done automatically in the decorator for primitive data types but this is just a quick and dirty proof of concept.\nIt would be even possible to encode properties of type object into query parameters with those converter functions."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"[1]"," ",(0,a.kt)("a",{href:"https://stackoverflow.com/questions/48873883/angular-aot-custom-decorator-error-encountered-resolving-symbol-values-staticall/48875749#48875749",target:"_blank"},(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/48873883/angular-aot-custom-decorator-error-encountered-resolving-symbol-values-staticall/48875749#48875749"},"https://stackoverflow.com/questions/48873883/angular-aot-custom-decorator-error-encountered-resolving-symbol-values-staticall/48875749#48875749"))),(0,a.kt)("a",{href:"https://toddmotto.com/angular-decorators#creating-a-decorator",target:"_blank"},"https://toddmotto.com/angular-decorators#creating-a-decorator"))}m.isMDXComponent=!0},5875:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/google_maps_example-e19fee56a3d560082549756dd4625bee.PNG"},9067:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/internal_state-646b976a3382a12189ac98c1aa073f59.PNG"}}]);