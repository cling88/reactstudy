!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=6)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("fs")},function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(4),a=n.n(o),i=n(2),l=n.n(i),u=n(1),s=function(){return c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(u.Link,{to:"/red"},"Red")),c.a.createElement("li",null,c.a.createElement(u.Link,{to:"/blue"},"Blue")))};var f=function(){return c.a.createElement("div",{class:"Red"},"Red")};var p=function(){return c.a.createElement(f,null)};var d=function(){return c.a.createElement("div",{class:"Blue"},"Blue")};var m=function(){return c.a.createElement(d,null)};var v=function(){return c.a.createElement("div",null,c.a.createElement(s,null),c.a.createElement("hr",null),c.a.createElement(u.Route,{path:"/red",component:p}),c.a.createElement(u.Route,{path:"/blue",component:m}))},b=n(3),h=n.n(b),y=n(5),E=n.n(y),x=JSON.parse(E.a.readFileSync(h.a.resolve("./build/asset-manifest.json"),"utf8")),j=Object.keys(x.files).filter((function(e){return/chunk\.js$/.exec(e)})).map((function(e){return'<script src="'.concat(x.files[e],'"><\/script>')})).join("");var g=l()(),O=l.a.static(h.a.resolve("./build"),{index:!1});g.use(O),g.use((function(e,t,n){var r=c.a.createElement(u.StaticRouter,{location:e.url,context:{}},c.a.createElement(v,null)),o=a.a.renderToString(r);t.send(function(e){return'\n        <!DOCTYPE html>\n        <html lang="en">\n        <head>\n            <meta charset="utf-8" />\n            <link rel="shortcut icon" href="/favicon.ico" />\n            <meta name="viewport" content="width=device-width, initial-scale=1" />\n            <meta name="theme-color" content="#000000" />\n            <meta\n            name="description"\n            content="Web site created using create-react-app"\n            />\n            <title>React App</title>\n            <link href="'.concat(x.files["main.css"],'" rel="stylesheet" />\n        </head>\n        <body>\n            <noscript>You need to enable JavaScript to run this app.</noscript>\n            <div id="root">\n                ').concat(e,'\n            </div>\n            <script src="').concat(x.files["runtime-main.js"],'"><\/script>\n            ').concat(j,'\n            <script src="').concat(x.files["main.js"],'"><\/script>\n        </body>\n        </html>\n    ')}(o))})),g.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]);