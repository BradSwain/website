(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{225:function(t,s,e){"use strict";e.r(s);var a=e(0),i=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"installation-on-unix-linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation-on-unix-linux","aria-hidden":"true"}},[t._v("#")]),t._v(" Installation on Unix/Linux "),e("seo")],1),t._v(" "),t._m(0),t._v(" "),e("p"),t._m(1),e("p"),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("Once all prerequisites installed - install Oat++:")]),t._v(" "),t._m(6),t._m(7),t._v(" "),e("table",[t._m(8),t._v(" "),e("tbody",[t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),e("tr",[t._m(12),t._v(" "),t._m(13),t._v(" "),e("td",[t._v("Build without "),e("code",[t._v("thread_local")]),t._v(" feature. See "),e("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/81",target:"_blank",rel:"noopener noreferrer"}},[t._v("#81"),e("OutboundLink")],1),t._v(".")])])])]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),e("p",[t._v("Install prerequisites:")]),t._v(" "),t._m(16),t._m(17),t._v(" "),e("p",[t._v("Install prerequisites:")]),t._v(" "),t._m(18),t._m(19),t._v(" "),e("p",[t._v("Install prerequisites:")]),t._v(" "),t._m(20),t._m(21),t._v(" "),e("p",[t._v("Install prerequisites:")]),t._v(" "),t._m(22)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The installation process of Oat++ is simple and straightforward.\nIf you have all "),s("a",{attrs:{href:"#prerequisites"}},[this._v("prerequisites")]),this._v(" installed, jump straight to "),s("a",{attrs:{href:"#install-oat"}},[this._v("Install Oat++")]),this._v(".")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#prerequisites"}},[t._v("Prerequisites")])]),e("li",[e("a",{attrs:{href:"#install-oat"}},[t._v("Install Oat++")]),e("ul",[e("li",[e("a",{attrs:{href:"#installation-cmake-options"}},[t._v("Installation CMake options:")])])])]),e("li",[e("a",{attrs:{href:"#installing-prerequisites"}},[t._v("Installing Prerequisites")]),e("ul",[e("li",[e("a",{attrs:{href:"#ubuntu"}},[t._v("Ubuntu")])]),e("li",[e("a",{attrs:{href:"#centos"}},[t._v("CentOS")])]),e("li",[e("a",{attrs:{href:"#fedora"}},[t._v("Fedora")])]),e("li",[e("a",{attrs:{href:"#alpine"}},[t._v("Alpine")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Git")]),this._v(" "),s("li",[this._v("C++ compiler supporting C++ version >= 11.")]),this._v(" "),s("li",[this._v("Make")]),this._v(" "),s("li",[this._v("CMake version >= 3.1")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("For details see "),s("a",{attrs:{href:"#installing-prerequisites"}},[this._v("Installing Prerequisites")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"install-oat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-oat","aria-hidden":"true"}},[this._v("#")]),this._v(" Install Oat++")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/oatpp/oatpp.git\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" oatpp/\n\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" build "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" build\n\n$ cmake "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"installation-cmake-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation-cmake-options","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation CMake options:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",[this._v("Option")]),this._v(" "),s("th",[this._v("Default")]),this._v(" "),s("th",[this._v("Description")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[s("code",[this._v("CMAKE_BUILD_TYPE")])]),this._v(" "),s("td",[s("code",[this._v("Debug")])]),this._v(" "),s("td",[this._v("Build type.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("tr",[e("td",[e("code",[t._v("OATPP_DISABLE_ENV_OBJECT_COUNTERS")])]),t._v(" "),e("td",[e("code",[t._v("OFF")])]),t._v(" "),e("td",[t._v("If "),e("code",[t._v("ON")]),t._v(", do not count oatpp objects (do not detect memory-leaks). This will increase performance. "),e("br"),t._v(" "),e("strong",[t._v("Note:")]),t._v(" DO NOT use this flags to build/run application tests, as tests won't detect memory-leaks.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[s("code",[this._v("OATPP_DISABLE_POOL_ALLOCATIONS")])]),this._v(" "),s("td",[s("code",[this._v("OFF")])]),this._v(" "),s("td",[this._v("If "),s("code",[this._v("ON")]),this._v(", do not use oatpp memory-pools.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",[s("code",[this._v("OATPP_COMPAT_BUILD_NO_THREAD_LOCAL")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",[s("code",[this._v("OFF")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"installing-prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing Prerequisites")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"ubuntu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu","aria-hidden":"true"}},[this._v("#")]),this._v(" Ubuntu")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" cmake\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" build-essential\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"centos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos","aria-hidden":"true"}},[this._v("#")]),this._v(" CentOS")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[this._v("$ yum install git\n$ yum install cmake\n$ yum install gcc gcc"),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("-")]),this._v("c"),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("++")]),this._v(" make\n$ yum install libatomic\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"fedora"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fedora","aria-hidden":"true"}},[this._v("#")]),this._v(" Fedora")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[this._v("$ yum install git\n$ yum install cmake\n$ yum install gcc gcc"),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("-")]),this._v("c"),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("++")]),this._v(" make\n$ yum install libatomic\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"alpine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alpine","aria-hidden":"true"}},[this._v("#")]),this._v(" Alpine")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[this._v("$ apk add git\n$ apk add cmake\n$ apk add g"),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("++")]),this._v("\n$ apk add make\n")])])])}],!1,null,null,null);s.default=i.exports}}]);