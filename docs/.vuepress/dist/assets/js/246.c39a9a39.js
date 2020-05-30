(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{236:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"tls-libressl-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tls-libressl-example","aria-hidden":"true"}},[t._v("#")]),t._v(" TLS-LibreSSL Example "),a("seo")],1),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/oatpp/example-libressl",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Repository"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Example project how-to use "),a("router-link",{attrs:{to:"/docs/modules/oatpp-libressl/"}},[t._v("oatpp-libressl")]),t._v(" module.")],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("This project is using "),a("a",{attrs:{href:"https://github.com/oatpp/oatpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("oatpp"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/oatpp/oatpp-libressl",target:"_blank",rel:"noopener noreferrer"}},[t._v("oatpp-libressl"),a("OutboundLink")],1),t._v(" modules.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),a("hr"),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("ul",[a("li",[a("p",[t._v("LibreSSL installed. You may refer to this sh script - how to install libressl -\n"),a("a",{attrs:{href:"https://github.com/oatpp/oatpp-libressl/blob/master/utility/install-deps/install-libressl.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("install-libressl.sh"),a("OutboundLink")],1),t._v("."),a("br"),t._v("\nOr try something like "),a("code",[t._v("$ apk add libressl-dev")])])]),t._v(" "),t._m(7)]),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),a("hr"),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("Configure server secure connection provider")]),t._v(" "),t._m(12),a("p",[t._v("Configure client secure connection provider")]),t._v(" "),t._m(13),t._m(14),t._v(" "),a("hr"),t._v(" "),a("p",[t._v('"Hello Async" root endpoint with json response')]),t._v(" "),t._m(15),a("p",[t._v("result:")]),t._v(" "),t._m(16),a("hr"),t._v(" "),t._m(17),t._v(" "),t._m(18),a("p",[t._v("result:")]),t._v(" "),t._m(19)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Serve via HTTPS")]),this._v(" "),s("li",[this._v("Make client calls via HTTPS.")]),this._v(" "),s("li",[this._v("Using oatpp Async API.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"project-layout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#project-layout","aria-hidden":"true"}},[this._v("#")]),this._v(" Project layout")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('|- CMakeLists.txt                        // projects CMakeLists.txt\n|- src/\n|    |\n|    |- controller/                      // Folder containing Controller where all endpoints are declared\n|    |- client/                          // HTTP client is here. Used in "proxy" endpoint /api/get\n|    |- dto/                             // DTOs are declared here\n|    |- AppComponent.hpp                 // Service config\n|    |- App.cpp                          // main() is here\n|    \n|- test/                                 // test folder\n|- utility/install-oatpp-modules.sh      // utility script to install required oatpp-modules.\n|- cert/                                 // folder with test certificates \n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"build-and-run"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-and-run","aria-hidden":"true"}},[this._v("#")]),this._v(" Build and Run")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"using-cmake"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-cmake","aria-hidden":"true"}},[this._v("#")]),this._v(" Using CMake")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Requires")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[s("code",[this._v("oatpp")]),this._v(" and "),s("code",[this._v("oatpp-libressl")]),this._v(" modules installed. You may run "),s("code",[this._v("utility/install-oatpp-modules.sh")]),this._v("\nscript to install required oatpp modules.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" build "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" build\n$ cmake "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" \n$ ././example-libressl-exe  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# - run application.")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"in-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#in-docker","aria-hidden":"true"}},[this._v("#")]),this._v(" In Docker")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ docker build -t example-libressl "),s("span",{pre:!0,attrs:{class:"token keyword"}},[this._v(".")]),this._v("\n$ docker run -p 8443:8443 -t example-libressl\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"configure-appcomponent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-appcomponent","aria-hidden":"true"}},[this._v("#")]),this._v(" Configure AppComponent")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n *  Create ConnectionProvider component which listens on the port\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("OATPP_CREATE_COMPONENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("network"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ServerConnectionProvider"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" serverConnectionProvider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* non_blocking connections should be used with AsyncHttpConnectionHandler for AsyncIO */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("libressl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDefaultServerConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cert/test_key.pem"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cert/test_cert.crt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("libressl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ConnectionProvider"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShared")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8443")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* true for non_blocking */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("OATPP_CREATE_COMPONENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("network"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ClientConnectionProvider"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sslClientConnectionProvider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("libressl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShared")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tls_config_insecure_noverifycert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTLSConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tls_config_insecure_noverifyname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTLSConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("libressl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("client"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ConnectionProvider"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShared")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"httpbin.org"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"endpoints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#endpoints","aria-hidden":"true"}},[this._v("#")]),this._v(" Endpoints")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ENDPOINT_ASYNC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ENDPOINT_ASYNC_INIT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n  Action "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("act")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" dto "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HelloDto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShared")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    dto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello Async!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    dto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("server "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Header"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("SERVER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    dto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("userAgent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Header"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("USER_AGENT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("controller"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDtoResponse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CODE_200"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X GET "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://localhost:8443/"')]),t._v(" --insecure\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user-agent"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"curl\\/7.54.0"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello Async!"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"server"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oatpp\\/0.19.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Async proxy endpoint to "),s("code",[this._v("https://httpbin.org/get")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ENDPOINT_ASYNC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api/get"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TestApiGet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ENDPOINT_ASYNC_INIT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TestApiGet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  Action "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("act")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" controller"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("myApiClient"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apiGetAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callbackTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("TestApiGet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("onResponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  Action "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onResponse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IncomingResponse"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readBodyToStringAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callbackTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("TestApiGet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("returnResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  Action "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("returnResult")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("controller"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createResponse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CODE_200"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X GET "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://localhost:8443/api/get"')]),t._v(" --insecure\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"args"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", \n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"headers"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Connection"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"close"')]),t._v(", \n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Host"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"httpbin.org"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", \n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"origin"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"176.37.47.230"')]),t._v(", \n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://httpbin.org/get"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);