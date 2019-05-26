(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{235:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"async-api-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async-api-example","aria-hidden":"true"}},[e._v("#")]),e._v(" Async API Example "),a("seo")],1),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/oatpp/example-async-api",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github Repository"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Example project how-to use oatpp asynchronous API.")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._m(3),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._m(7),e._v(" "),e._m(8)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"project-layout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#project-layout","aria-hidden":"true"}},[this._v("#")]),this._v(" Project layout")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("\n- CMakeLists.txt               // project loader script. load and build dependencies\n- main/                        // main project directory\n    |\n    |- CMakeLists.txt          // projects CMakeLists.txt\n    |- src/                    // source folder\n    |- test/                   // test folder\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("- src/\n    |\n    |- controller/              // Folder containing controller where all endpoints are declared\n    |- dto/                     // DTOs are declared here\n    |- AppComponent.hpp         // Service config\n    |- Logger.hpp               // Application Logger\n    |- App.cpp                  // main() is here\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"build-and-run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-and-run","aria-hidden":"true"}},[this._v("#")]),this._v(" Build and Run")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"using-cmake"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-cmake","aria-hidden":"true"}},[this._v("#")]),this._v(" Using CMake")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" build "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" build\n$ cmake "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" run        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## Download, build, and install all dependencies. Run project")]),e._v("\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"in-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#in-docker","aria-hidden":"true"}},[this._v("#")]),this._v(" In Docker")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ docker build -t example-async-api "),t("span",{pre:!0,attrs:{class:"token keyword"}},[this._v(".")]),this._v("\n$ docker run -p 8000:8000 -t example-async-api\n")])])])}],!1,null,null,null);t.default=r.exports}}]);