(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],u=0,h=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&h.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0a87":function(t,e,a){},3255:function(t,e,a){"use strict";a("5679")},"38c8":function(t,e,a){},5463:function(t,e,a){"use strict";a("0a87")},5679:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},r=[],i=a("2877"),o={},c=Object(i["a"])(o,n,r,!1,null,null,null),l=c.exports,d=a("8c4f"),u=a("58ca"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-container"},[a("div",{staticClass:"login-container1"},[a("h1",{staticClass:"login-text"},[t._v("Log in")]),a("div",{staticClass:"login-container2"},[a("input",{staticClass:"login-textinput input",staticStyle:{width:"40%"},attrs:{type:"text",id:"email",placeholder:"Email"}}),a("input",{staticClass:"login-textinput1 input",staticStyle:{width:"40%"},attrs:{id:"password",type:"password",placeholder:"Wachtwoord"}}),a("a",{staticStyle:{"margin-bottom":"5%"}},[t._v(t._s(t.errormessage))]),a("button",{staticClass:"login-button button",on:{click:function(e){return t.login()}}},[t._v("Inloggen")])])]),a("app-footer",{attrs:{rootClassName:"footer-root-class-name1"}})],1)},p=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-header",class:t.rootClassName,attrs:{"data-role":"Header"}},[a("img",{staticClass:"header-image",attrs:{alt:t.image_alt,src:t.image_src}}),a("div",{staticClass:"header-container"},[a("h1",{staticClass:"header-heading textSM"},[t._v(t._s(t.heading1))]),a("router-link",{staticClass:"header-navlink",attrs:{to:"/"}},[a("div",{staticClass:"header-container1"},[a("svg",{staticClass:"header-icon",attrs:{viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"}})]),a("span",{staticClass:"header-text textSM"},[t._v("Login")])])]),a("router-link",{staticClass:"header-navlink1",attrs:{to:"/sound"}},[a("div",{staticClass:"header-container2"},[a("span",{staticClass:"header-text1 textSM"},[t._v("Geluidsdetectie")])])]),a("router-link",{staticClass:"header-navlink2",attrs:{to:"/map"}},[a("div",{staticClass:"header-container3"},[a("svg",{staticClass:"header-icon02",attrs:{viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"}}),a("path",{attrs:{d:"M736 832h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"}}),a("path",{attrs:{d:"M736 704h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"}}),a("path",{attrs:{d:"M736 576h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"}})]),a("span",{staticClass:"header-text2 textSM"},[t._v("Maps")])])])],1),a("div",{staticClass:"header-burger-menu",attrs:{"data-type":"BurgerMenu"}},[a("svg",{staticClass:"header-icon07",attrs:{viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"}})])]),a("div",{staticClass:"header-mobile-menu",attrs:{"data-type":"MobileMenu"}},[a("div",{staticClass:"header-top"},[a("h1",{staticClass:"header-heading1 textSM"},[t._v(t._s(t.heading11))]),a("div",{staticClass:"header-close-menu",attrs:{"data-type":"CloseMobileMenu"}},[a("svg",{staticClass:"header-icon09",attrs:{viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"}})])])]),a("div",{staticClass:"header-mid"},[a("router-link",{staticClass:"header-navlink3",attrs:{to:"/"}},[a("div",{staticClass:"header-container4"},[a("svg",{staticClass:"header-icon11",attrs:{viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"}})]),a("span",{staticClass:"header-text3 textSM"},[t._v("PROFILE")])])]),a("div",{staticClass:"header-container5"},[a("svg",{staticClass:"header-icon13",attrs:{viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"}}),a("path",{attrs:{d:"M736 832h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"}}),a("path",{attrs:{d:"M736 704h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"}}),a("path",{attrs:{d:"M736 576h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"}})]),a("span",{staticClass:"header-text4 textSM"},[t._v("BLOG")])])],1),a("div",{staticClass:"header-bot"},[a("svg",{staticClass:"header-icon18",attrs:{viewBox:"0 0 877.7142857142857 1024"}},[a("path",{attrs:{d:"M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"}})]),a("svg",{staticClass:"header-icon20",attrs:{viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M1024 226.4c-37.6 16.8-78.2 28-120.6 33 43.4-26 76.6-67.2 92.4-116.2-40.6 24-85.6 41.6-133.4 51-38.4-40.8-93-66.2-153.4-66.2-116 0-210 94-210 210 0 16.4 1.8 32.4 5.4 47.8-174.6-8.8-329.4-92.4-433-219.6-18 31-28.4 67.2-28.4 105.6 0 72.8 37 137.2 93.4 174.8-34.4-1-66.8-10.6-95.2-26.2 0 0.8 0 1.8 0 2.6 0 101.8 72.4 186.8 168.6 206-17.6 4.8-36.2 7.4-55.4 7.4-13.6 0-26.6-1.4-39.6-3.8 26.8 83.4 104.4 144.2 196.2 146-72 56.4-162.4 90-261 90-17 0-33.6-1-50.2-3 93.2 59.8 203.6 94.4 322.2 94.4 386.4 0 597.8-320.2 597.8-597.8 0-9.2-0.2-18.2-0.6-27.2 41-29.4 76.6-66.4 104.8-108.6z"}})]),a("svg",{staticClass:"header-icon22",attrs:{viewBox:"0 0 877.7142857142857 1024"}},[a("path",{attrs:{d:"M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"}})])])])])},g=[],m={name:"Header",props:{image_src:{type:String,default:"/playground_assets/217332412_177488101085809_6155924843160933349_n-1500h.jpg"},rootClassName:String,image_alt:{type:String,default:"image"},heading11:{type:String,default:"NOTUS PRO"},heading1:String}},f=m,_=(a("7f06"),Object(i["a"])(f,v,g,!1,null,"06902758",null)),C=_.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-container",class:t.rootClassName},[a("span",{staticClass:"footer-text textSM"},[t._v("\n    Copyright © 2022 Hogeschool Rotterdam Project-D\n  ")])])},y=[],w={name:"Footer",props:{rootClassName:String}},M=w,x=(a("fb07"),Object(i["a"])(M,b,y,!1,null,"2533ddd8",null)),k=x.exports,S=a("bc3a"),z=a.n(S),L=(a("00e7"),{name:"Login",components:{AppHeader:C,AppFooter:k},data:function(){return{LoggedIn:!1,errormessage:"",message_email:"",message_password:""}},methods:{validateEmail:function(){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(String(document.getElementById("email").value).toLowerCase())},login:function(){var t=this;if(this.validateEmail())if(""!=document.getElementById("password").value){var e=new FormData;e.append("email",document.getElementById("email").value),e.append("password",document.getElementById("password").value),z.a.post("/api/auth/login",e).then((function(e){t.errormessage=e.data.message,1==e.data.success&&(t.$cookie.set("token",decodeURI(e.data.token),{expire:"2h"}),t.$cookie.set("superUser",!0,{expire:"2h"}),ft.push({name:"dashboard",params:{LoggedIn:!0,superUser:t.$cookie.get("superUser")}}))}))}else this.errormessage="Voer een wachtwoord in";else this.errormessage="Voer een geldig e-mail adres in"}},metaInfo:{title:"Log in - Chengeta wildlife",meta:[{property:"og:title",content:"Log in - Chengeta wildlife"}]}}),I=L,E=(a("3255"),Object(i["a"])(I,h,p,!1,null,"02adcfa1",null)),B=E.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isLoggedIn()?a("div",{staticClass:"container"},[a("aside",[t._m(0),a("div",{staticClass:"sidebar"},[a("a",{on:{click:function(e){return t.router.push({name:"dashboard"})}}},[a("span",{staticClass:"material-icons-sharp"},[t._v("grid_view")]),a("h3",[t._v("Dashboard")])]),a("a",{on:{click:function(e){return t.fullScreenView()}}},[a("span",{staticClass:"material-icons-sharp"},[t._v("fullscreen")]),a("h3",[t._v("Fullscreen")])]),a("a",{on:{click:function(e){return t.printMapHtml()}}},[a("span",{staticClass:"material-icons-sharp"},[t._v("print")]),a("h3",[t._v("Print map")])]),a("a",{on:{click:function(e){return t.historyData()}}},[a("span",{staticClass:"material-icons-sharp"},[t._v("work_history")]),a("h3",[t._v("Historische data")])]),this.superUser?a("a",{on:{click:function(e){return t.Account()}}},[a("span",{staticClass:"material-icons-sharp"},[t._v("person_add")]),a("h3",[t._v("Nieuw account")])]):t._e(),a("a",{on:{click:function(e){return t.Logout()}}},[a("span",{staticClass:"material-icons-sharp"},[t._v("logout")]),a("h3",[t._v("Uitloggen")])])])]),a("main",[a("div",{staticClass:"dashboard-map",attrs:{id:"map"}},[a("l-map",{staticStyle:{height:"100%",width:"100%"},attrs:{zoom:t.zoom,center:t.center,bounds:t.bounds,"max-bounds":t.maxBounds}},[a("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._l(t.Markers,(function(e){return a("l-marker",{key:e.id,attrs:{"lat-lng":[e.latitude,e.longitude]}},[a("l-popup",[a("h3",[t._v(t._s(e.id))]),a("p",[t._v(t._s(e.latitude))]),a("p",[t._v(t._s(e.longitude))]),a("p",[t._v(t._s(e.soundtype))]),a("p",[t._v(t._s(e.probability))]),a("p",[t._v(t._s(e.time))])])],1)}))],2)],1),a("div",{staticClass:"dashboard-geluidendata"},[a("h2",{staticStyle:{color:"black"}},[t._v("Livedata")]),a("table",{staticClass:"flat-table flat-table-1"},[t._m(1),t._l(t.sounds,(function(e){return a("tbody",{key:e.id},[a("tr",[a("td",[t._v(t._s(new Date(1e3*e.time).toISOString().slice(0,10)))]),a("td",[t._v(t._s(new Date(1e3*e.time).toISOString().slice(-13,-5)))]),a("td",[t._v(t._s(e.id))]),a("td",[t._v(t._s(e.latitude))]),a("td",[t._v(t._s(e.longitude))]),a("td",{class:"gunshot"==e.soundtype?"red":"vehicle"==e.soundtype?"yellow":"animal"==e.soundtype?"orange":"unknown"==e.soundtype?"black":"white"},[t._v(t._s(e.soundtype))]),a("td",[a("Progress",{attrs:{transitionDuration:4e3,strokeColor:"white",value:e.probability}})],1),a("td",[a("audio",{attrs:{controls:""}},[a("source",{attrs:{options:t.options,src:e.sound}})])])])])}))],2)])]),a("div",{staticClass:"top"},[a("button",{attrs:{id:"menu-btn"},on:{click:function(e){return t.Sidebaropen()}}},[a("span",{staticClass:"material-icons-sharp"},[t._v("menu")])])])]):a("div",{staticStyle:{color:"black","text-align":"center"}},[a("h1",[t._v("Error")]),a("h2",[t._v("404 Page not found")])])},U=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"top"},[s("div",{staticClass:"logo"},[s("img",{attrs:{src:a("db27")}}),s("h2",[t._v("Chengeta")])]),s("div",{staticClass:"close",attrs:{id:"closee-btn"}},[s("span",{staticClass:"material-icons-sharp"},[t._v("close")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("Date")]),a("th",[t._v("Time")]),a("th",[t._v("ID")]),a("th",[t._v("Latitude")]),a("th",[t._v("Longitude")]),a("th",[t._v("Soundtype")]),a("th",[t._v("Probability")]),a("th",[t._v("Sound")])])}],$=(a("96cf"),a("1da1")),j=a("1227"),D=a.n(j),P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header1-header",class:t.rootClassName,attrs:{"data-role":"Header"}},[a("img",{staticClass:"header1-image",attrs:{alt:t.image_alt,src:t.image_src}}),a("div",{staticClass:"header1-container"},[a("h1",{staticClass:"header1-heading textSM"},[t._v(t._s(t.heading1))])]),a("div",{staticClass:"header1-burger-menu",attrs:{"data-type":"BurgerMenu"}},[a("svg",{staticClass:"header1-icon",attrs:{viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"}})])]),a("div",{staticClass:"header1-mobile-menu",attrs:{"data-type":"MobileMenu"}},[a("div",{staticClass:"header1-top"},[a("h1",{staticClass:"header1-heading1 textSM"},[t._v(t._s(t.heading11))]),a("div",{staticClass:"header1-close-menu",attrs:{"data-type":"CloseMobileMenu"}},[a("svg",{staticClass:"header1-icon02",attrs:{viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"}})])])]),a("div",{staticClass:"header1-mid"},[a("router-link",{staticClass:"header1-navlink",attrs:{to:"/"}},[a("div",{staticClass:"header1-container1"},[a("svg",{staticClass:"header1-icon04",attrs:{viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"}})]),a("span",{staticClass:"header1-text textSM"},[t._v("PROFILE")])])]),a("div",{staticClass:"header1-container2"},[a("svg",{staticClass:"header1-icon06",attrs:{viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"}}),a("path",{attrs:{d:"M736 832h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"}}),a("path",{attrs:{d:"M736 704h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"}}),a("path",{attrs:{d:"M736 576h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"}})]),a("span",{staticClass:"header1-text1 textSM"},[t._v("BLOG")])])],1),a("div",{staticClass:"header1-bot"},[a("svg",{staticClass:"header1-icon11",attrs:{viewBox:"0 0 877.7142857142857 1024"}},[a("path",{attrs:{d:"M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"}})]),a("svg",{staticClass:"header1-icon13",attrs:{viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M1024 226.4c-37.6 16.8-78.2 28-120.6 33 43.4-26 76.6-67.2 92.4-116.2-40.6 24-85.6 41.6-133.4 51-38.4-40.8-93-66.2-153.4-66.2-116 0-210 94-210 210 0 16.4 1.8 32.4 5.4 47.8-174.6-8.8-329.4-92.4-433-219.6-18 31-28.4 67.2-28.4 105.6 0 72.8 37 137.2 93.4 174.8-34.4-1-66.8-10.6-95.2-26.2 0 0.8 0 1.8 0 2.6 0 101.8 72.4 186.8 168.6 206-17.6 4.8-36.2 7.4-55.4 7.4-13.6 0-26.6-1.4-39.6-3.8 26.8 83.4 104.4 144.2 196.2 146-72 56.4-162.4 90-261 90-17 0-33.6-1-50.2-3 93.2 59.8 203.6 94.4 322.2 94.4 386.4 0 597.8-320.2 597.8-597.8 0-9.2-0.2-18.2-0.6-27.2 41-29.4 76.6-66.4 104.8-108.6z"}})]),a("svg",{staticClass:"header1-icon15",attrs:{viewBox:"0 0 877.7142857142857 1024"}},[a("path",{attrs:{d:"M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"}})])])])])},A=[],N={name:"Header1",props:{image_alt:{type:String,default:"image"},heading11:{type:String,default:"NOTUS PRO"},heading1:String,image_src:{type:String,default:"/playground_assets/217332412_177488101085809_6155924843160933349_n-1500h.jpg"},rootClassName:String}},H=N,F=(a("c133"),Object(i["a"])(H,P,A,!1,null,"cf827cf8",null)),R=F.exports,T=a("e11e"),V=a("2699"),G=a("a40a"),Z=a("4e2b"),q=a("0dbd"),J=a("f60f"),W=a("c0e9"),K=a.n(W),Q=(a("6397"),a("00e7")),X={name:"Dashboard",components:{AppHeader1:R,AppFooter:k,LMap:V["a"],LTileLayer:G["a"],LMarker:Z["a"],LCircle:q["a"],LPopup:J["a"],Progress:D.a},props:["LoggedIn","superUser"],data:function(){return{sounds:[],id:0,latitude:"",longitude:"",soundtype:"",probability:0,sound:"",time:0,url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",attribution:'&copy; <a target="_blank" href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors',zoom:16,center:[51.505,-.159],bounds:Object(T["latLngBounds"])([[-2.30081290280357,23.16963806152345],[-2.82991732677597,23.58716201782228]]),maxBounds:Object(T["latLngBounds"])([[-2.30081290280357,23.16963806152345],[-2.82991732677597,23.58716201782228]]),Markers:{id:13,latitude:"-1.5911952104643539",longitude:"23.40987496105848",soundtype:"gunshot"}}},methods:{CheckValidSession:function(){var t=this,e=Q.get("token"),a=new FormData;a.append("oauth",e),z.a.post("api/auth/session",a).then((function(e){e.data.success&&(t.LoggedIn=!0),t.LoggedIn=!1}))},historyData:function(){this.$router.push("historyData")},Account:function(){ft.push({name:"newUser",params:{LoggedIn:this.LoggedIn,superUser:this.superUser}})},Logout:function(){this.$cookie.delete("token"),this.$cookie.delete("superUser"),ft.push({name:"Log in"})},isLoggedIn:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.LoggedIn);case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),Sidebaropen:function(){var t=document.getElementById(menu-btn);t.style.display="block"},Sidebarclose:function(){var t=document.getElementById(closee-btn);t.style.display="none"},GetSounds:function(){var t=this;z.a.get("api/auth/mqttdata",{params:{limit:10}}).then((function(e){t.sounds=e.data,t.Markers=e.data,console.log(t.Markers)})).catch((function(t){console.log(t),alert(t)}))},fullScreenView:function(){var t=document.getElementById("map");t.requestFullscreen()},printMapHtml:function(){var t=document.getElementById("map");K()(t,{useCORS:!0,allowTaint:!0}).then((function(t){var e=t.toDataURL("image/png"),a=document.createElement("a");a.href=e,a.download="map.png",a.click()}))}},metaInfo:{title:"dashboard - Chengeta wildlife",meta:[{property:"og:title",content:"dashboard - Chengeta wildlife"}]},mounted:function(){this.CheckValidSession(),this.GetSounds(),CheckValidSession()}},Y=X,tt=(a("99f1"),a("5463"),Object(i["a"])(Y,O,U,!1,null,"f846f63c",null)),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isLoggedIn()?a("div",{staticClass:"container"},[a("aside",[t._m(0),a("div",{staticClass:"sidebar"},[a("a",{on:{click:function(e){return t.dashboard()}}},[a("span",{staticClass:"material-icons-sharp"},[t._v("grid_view")]),a("h3",[t._v("Dashboard")])]),t._m(1),this.superUser?a("a",{on:{click:function(e){return t.Account()}}},[a("span",{staticClass:"material-icons-sharp"},[t._v("person_add")]),a("h3",[t._v("Nieuw account")])]):t._e(),a("a",{on:{click:function(e){return t.Logout()}}},[a("span",{staticClass:"material-icons-sharp"},[t._v("logout")]),a("h3",[t._v("Uitloggen")])])])]),a("div",{staticClass:"dashboard-geluidendata"},[a("h2",{staticStyle:{color:"black"}},[t._v("Historische data")]),a("div",{attrs:{id:"app"}},[a("div",{staticStyle:{margin:"20px auto 0",width:"250px"},attrs:{id:"container"}},[a("br"),a("ejs-dropdownlist",{attrs:{id:"dropdownlist",placeholder:"Select a country",allowFiltering:t.allowFiltering,filtering:t.filtering,dataSource:t.dataSource,fields:t.fields}})],1)]),a("table",{staticClass:"flat-table flat-table-1"},[t._m(2),t._l(t.sounds,(function(e){return a("tbody",{key:e.id},[a("tr",[a("td",[t._v(t._s(new Date(1e3*e.time).toISOString().slice(0,10)))]),a("td",[t._v(t._s(new Date(1e3*e.time).toISOString().slice(-13,-5)))]),a("td",[t._v(t._s(e.id))]),a("td",[t._v(t._s(e.latitude))]),a("td",[t._v(t._s(e.longitude))]),a("td",{class:"gunshot"==e.soundtype?"red":"vehicle"==e.soundtype?"yellow":"animal"==e.soundtype?"orange":"unknown"==e.soundtype?"black":"white"},[t._v("\n                        "+t._s(e.soundtype)+"\n                    ")]),a("td",[a("Progress",{attrs:{transitionDuration:1,strokeColor:"white",value:e.probability}})],1),a("td",[a("audio",{attrs:{controls:""}},[a("source",{attrs:{options:t.options,src:e.sound}})])])])])}))],2)])]):t._e()},st=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"top"},[s("div",{staticClass:"logo"},[s("img",{attrs:{src:a("db27")}}),s("h2",[t._v("Chengeta")])]),s("div",{staticClass:"close",attrs:{id:"closee-btn"}},[s("span",{staticClass:"material-icons-sharp"},[t._v("close")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"#"}},[a("span",{staticClass:"material-icons-sharp"},[t._v("work_history")]),a("h3",[t._v("Historische data")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("Date")]),a("th",[t._v("Time")]),a("th",[t._v("ID")]),a("th",[t._v("Latitude")]),a("th",[t._v("Longitude")]),a("th",[t._v("Soundtype")]),a("th",[t._v("Probability")]),a("th",[t._v("Sound")])])}],nt=a("eda0"),rt=a("2d85");Vue.use(nt["a"]);var it={name:"HistoryData",components:{Progress:D.a},data:function(){return{sounds:[],id:0,latitude:"",longitude:"",soundtype:"",probability:0,sound:"",time:0}},methods:{GetSounds:function(){var t=this;z.a.get("api/auth/mqttdata",{params:{limit:0}}).then((function(e){t.sounds=e.data})).catch((function(t){console.log(t),alert(t)}))},dashboard:function(){this.$router.push("dashboard")},Logout:function(){this.$cookie.delete("token"),this.$cookie.delete("superUser"),this.$router.push("/")},isLoggedIn:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.LoggedIn);case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),filtering:function(t){var e=[{Index:"s1",Country:"Alaska"},{Index:"s2",Country:"California"},{Index:"s3",Country:"Florida"},{Index:"s4",Country:"Georgia"}],a=new rt["b"];a=""!=t.text?a.where("Country","startswith",t.text,!0):a,t.updateData(e,a)}},mounted:function(){this.GetSounds()}},ot=it,ct=(a("a716"),Object(i["a"])(ot,at,st,!1,null,"e45d4e42",null)),lt=ct.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-container"},[a("div",{staticClass:"login-container1"},[a("h1",{staticClass:"login-text"},[t._v("Nieuw account aanmaken")]),a("div",{staticClass:"login-container2"},[a("input",{staticClass:"login-textinput input",staticStyle:{width:"40%"},attrs:{type:"text",id:"name",placeholder:"Voornaam"}}),a("input",{staticClass:"login-textinput input",staticStyle:{width:"40%"},attrs:{type:"text",id:"email",placeholder:"Email"}}),a("input",{staticClass:"login-textinput1 input",staticStyle:{width:"40%"},attrs:{id:"password",type:"password",placeholder:"Wachtwoord"}}),a("input",{staticClass:"login-textinput1 input",staticStyle:{width:"40%"},attrs:{id:"password1",type:"password",placeholder:"Wachtwoord"}}),a("select",{directives:[{name:"model",rawName:"v-model",value:t.issuperUser,expression:"issuperUser"}],staticClass:"login-textinput1 input",staticStyle:{width:"40%"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.issuperUser=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"false"},on:{click:function(e){t.issuperUser="false"}}},[t._v("Nee")]),a("option",{attrs:{value:"true"},on:{click:function(e){t.issuperUser="true"}}},[t._v("Ja")])]),a("a",{staticStyle:{"margin-bottom":"5%"}},[t._v(t._s(t.errormessage))]),a("button",{staticClass:"login-button button",on:{click:function(e){return t.sendToServer()}}},[t._v("Account aanmaken")])])]),a("app-footer",{attrs:{rootClassName:"footer-root-class-name1"}})],1)},ut=[],ht={name:"Login",components:{AppHeader:C,AppFooter:k},props:["LoggedIn","superUser"],data:function(){return{created:!1,issuperUser:"",isLoggedIn:!1,errormessage:"",message_email:"",message_password:""}},methods:{passwordCheck:function(){return document.getElementById("password").value==document.getElementById("password1").value||(this.errormessage="De ingevoerde wachtwoorden komen niet overeen",!1)},nameCheck:function(){return""!=document.getElementById("name").value||(this.errormessage="U heeft geen naam ingevuld",!1)},isSuperUser:function(){return""!=this.issuperUser},validateEmail:function(){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!!t.test(String(document.getElementById("email").value).toLowerCase())||(this.errormessage="Het ingevoerde email adress is niet geldig",!1)},sendToServer:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(){var e,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.nameCheck()&&this.passwordCheck()&&this.validateEmail()&&this.isSuperUser())){t.next=10;break}return e=new FormData,e.append("Name",document.getElementById("name").value),e.append("Email",document.getElementById("email").value),e.append("Superuser",this.superUser),e.append("Password",document.getElementById("password").value),e.append("oauth",this.$cookie.get("token")),t.next=9,z.a.post("/api/auth/createNewUser",e).then((function(t){return a.created=t.data.userCreated}));case 9:this.created?(alert("Account is succesvol aangemaakt!"),ft.push({name:"test",params:{LoggedIn:!0,superUser:this.$cookie.get("superUser")}})):this.errormessage="U heeft geen rechten om een nieuw account aan te maken.";case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},metaInfo:{title:"Log in - Chengeta wildlife",meta:[{property:"og:title",content:"Log in - Chengeta wildlife"}]}},pt=ht,vt=(a("6f35"),Object(i["a"])(pt,dt,ut,!1,null,"3f38f9bf",null)),gt=vt.exports,mt=(a("38c8"),a("00e7"));s["default"].use(d["a"]),s["default"].use(u["a"]),s["default"].use(mt);var ft=new d["a"]({mode:"history",routes:[{name:"Log in",path:"/",component:B,props:!0},{name:"dashboard",path:"/dashboard",component:et,props:!0},{name:"newUser",path:"/newUser",component:gt,props:!0},{name:"historyData",path:"/historyData",component:lt,props:!0}]}),_t=a("00e7");s["default"].config.productionTip=!1,s["default"].use(_t),new s["default"]({render:function(t){return t(l)},router:ft}).$mount("#app")},"6f35":function(t,e,a){"use strict";a("a112")},"7f06":function(t,e,a){"use strict";a("ed18")},"99f1":function(t,e,a){"use strict";a("b28a")},a112:function(t,e,a){},a716:function(t,e,a){"use strict";a("cf71")},a8c9:function(t,e,a){},b28a:function(t,e,a){},c133:function(t,e,a){"use strict";a("d5f4")},cf71:function(t,e,a){},d5f4:function(t,e,a){},db27:function(t,e,a){t.exports=a.p+"img/217332412_177488101085809_6155924843160933349_n-1500h.c2e60eec.jpg"},ed18:function(t,e,a){},fb07:function(t,e,a){"use strict";a("a8c9")}});
//# sourceMappingURL=app.3acc8b13.js.map