(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{208:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"starter-project-async-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#starter-project-async-api","aria-hidden":"true"}},[t._v("#")]),t._v(" Starter Project - Async API"),s("seo")],1),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/oatpp/oatpp-starter-async",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Repository"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Starter project for Oat++ (AKA oatpp) application. Based on oatpp Async API.")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("Read:")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/docs/simple-vs-async/"}},[t._v("Simple API vs Async API")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/docs/async/"}},[t._v("Async")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/docs/oatpp-coroutines/"}},[t._v("Oatpp-Coroutines")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/docs/components/api-controller/#endpoint-async-specifics"}},[t._v("ENDPOINT_ASYNC")])],1)]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),s("hr"),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11)])},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Async API suits best for services dedicated to a single type of tasks that run at high concurrency levels."),s("br"),t._v("\nExample:")]),t._v(" "),s("ul",[s("li",[t._v("Simultanious download of multiple files.")]),t._v(" "),s("li",[t._v("Streaming to large number of clients (1K or more).")]),t._v(" "),s("li",[t._v("Chats.")])]),t._v(" "),s("p",[s("strong",[t._v("For all other purposes use simple API")]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"before-you-start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#before-you-start","aria-hidden":"true"}},[this._v("#")]),this._v(" Before you start")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"project-layout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#project-layout","aria-hidden":"true"}},[this._v("#")]),this._v(" Project layout")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("|- CMakeLists.txt                        // projects CMakeLists.txt\n|- src/\n|    |\n|    |- controller/                      // Folder containing UserController where all endpoints are declared\n|    |- dto/                             // DTOs are declared here\n|    |- AppComponent.hpp                 // Service config\n|    |- App.cpp                          // main() is here\n|    \n|- test/                                 // test folder\n|- utility/install-oatpp-modules.sh      // utility script to install required oatpp-modules.\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"build-and-run"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-and-run","aria-hidden":"true"}},[this._v("#")]),this._v(" Build and Run")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"using-cmake"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-cmake","aria-hidden":"true"}},[this._v("#")]),this._v(" Using CMake")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Requires")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("oatpp")]),this._v(" module installed. You may run "),e("code",[this._v("utility/install-oatpp-modules.sh")]),this._v("\nscript to install required oatpp modules.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" build "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" build\n$ cmake "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" \n$ ./my-project-exe                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# - run application.")]),t._v("\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"in-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#in-docker","aria-hidden":"true"}},[this._v("#")]),this._v(" In Docker")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ docker build -t oatpp-starter-async "),e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v(".")]),this._v("\n$ docker run -p 8000:8000 -t oatpp-starter-async\n")])])])}],!1,null,null,null);e.default=r.exports}}]);