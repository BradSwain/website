(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{385:function(t,e,r){"use strict";r.r(e);var s=r(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"worker-hpp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#worker-hpp","aria-hidden":"true"}},[t._v("#")]),t._v(" Worker.hpp"),r("seo")],1),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/core/async/worker/Worker.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),r("OutboundLink")],1),r("br"),t._v(" "),r("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/core/async/worker/Worker.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),r("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("Worker base class. Workers are used by "),r("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Executor/#executor"}},[t._v("oatpp::async::Executor")]),t._v(" to reschedule worker-specific tasks from "),r("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Processor/#processor"}},[t._v("oatpp::async::Processor")]),t._v(".")],1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),r("p",[t._v("Default virtual destructor.")]),t._v(" "),t._m(9),t._m(10),t._v(" "),r("p",[t._v("Push list of tasks to worker. "),r("ul",[r("li",[r("strong",[t._v("@param")]),t._v(" tasks - oatpp::collection::FastQueue of "),r("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#coroutinehandle"}},[t._v("oatpp::async::CoroutineHandle")]),t._v(". ")],1)])]),t._v(" "),t._m(11),t._m(12),t._v(" "),r("p",[t._v("Push one task to worker. "),r("ul",[r("li",[r("strong",[t._v("@param")]),t._v(" task - "),r("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#coroutinehandle"}},[t._v("oatpp::async::CoroutineHandle")]),t._v(". ")],1)])]),t._v(" "),t._m(13),t._m(14),t._v(" "),r("p",[t._v("Break run loop.")]),t._v(" "),t._m(15),t._m(16),t._v(" "),r("p",[t._v("Join all worker-threads.")]),t._v(" "),t._m(17),t._m(18),t._v(" "),r("p",[t._v("Detach all worker-threads.")]),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),r("p",[t._v("Worker type")]),t._v(" "),t._m(24),t._m(25),t._v(" "),r("p",[t._v("Worker type - general processor.")]),t._v(" "),t._m(26),t._m(27),t._v(" "),r("p",[t._v("Worker type - timer processor.")]),t._v(" "),t._m(28),t._m(29),t._v(" "),r("p",[t._v("Worker type - I/O processor.")]),t._v(" "),t._m(30),t._m(31),t._v(" "),r("p",[t._v("Number of types in this enum.")]),t._v(" "),t._m(32)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("API: latest")]),e("br"),this._v(" "),e("code",[this._v("module: oatpp")]),e("br"),this._v(" "),e("code",[this._v('#include "oatpp/core/async/worker/Worker.hpp"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"worker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#worker","aria-hidden":"true"}},[this._v("#")]),this._v(" Worker")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" async "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" worker "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Worker")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("Return Type")]),t._v(" "),r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Summary")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("[none]")])]),t._v(" "),r("td",[r("a",{attrs:{href:"#worker-worker"}},[t._v("Worker")])]),t._v(" "),r("td",[t._v("Constructor.")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("[none]")])]),t._v(" "),r("td",[r("a",{attrs:{href:"#worker-~worker"}},[t._v("~Worker")])]),t._v(" "),r("td",[t._v("Default virtual destructor.")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("void")])]),t._v(" "),r("td",[r("a",{attrs:{href:"#worker-pushtasks"}},[t._v("pushTasks")])]),t._v(" "),r("td",[t._v("Push list of tasks to worker.")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("void")])]),t._v(" "),r("td",[r("a",{attrs:{href:"#worker-pushonetask"}},[t._v("pushOneTask")])]),t._v(" "),r("td",[t._v("Push one task to worker.")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("void")])]),t._v(" "),r("td",[r("a",{attrs:{href:"#worker-stop"}},[t._v("stop")])]),t._v(" "),r("td",[t._v("Break run loop.")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("void")])]),t._v(" "),r("td",[r("a",{attrs:{href:"#worker-join"}},[t._v("join")])]),t._v(" "),r("td",[t._v("Join all worker-threads.")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("void")])]),t._v(" "),r("td",[r("a",{attrs:{href:"#worker-detach"}},[t._v("detach")])]),t._v(" "),r("td",[t._v("Detach all worker-threads.")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("Type")])]),t._v(" "),r("td",[r("a",{attrs:{href:"#worker-gettype"}},[t._v("getType")])]),t._v(" "),r("td",[t._v("Get worker type.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"worker-worker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#worker-worker","aria-hidden":"true"}},[this._v("#")]),this._v(" Worker::Worker")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Constructor. "),e("ul",[e("li",[e("strong",[this._v("@param")]),this._v(" type - worker type - one of "),e("a",{attrs:{href:"#worker-type"}},[this._v("Worker::Type")]),this._v(" values. ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("Worker")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),this._v("Type type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"worker-worker-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#worker-worker-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Worker::~Worker")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("Worker")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"worker-pushtasks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#worker-pushtasks","aria-hidden":"true"}},[this._v("#")]),this._v(" Worker::pushTasks")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushTasks")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oatpp"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("collection"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("FastQueue"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("CoroutineHandle"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" tasks"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"worker-pushonetask"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#worker-pushonetask","aria-hidden":"true"}},[this._v("#")]),this._v(" Worker::pushOneTask")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushOneTask")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CoroutineHandle"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" task"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"worker-stop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#worker-stop","aria-hidden":"true"}},[this._v("#")]),this._v(" Worker::stop")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("stop")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"worker-join"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#worker-join","aria-hidden":"true"}},[this._v("#")]),this._v(" Worker::join")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"worker-detach"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#worker-detach","aria-hidden":"true"}},[this._v("#")]),this._v(" Worker::detach")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("detach")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"worker-gettype"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#worker-gettype","aria-hidden":"true"}},[this._v("#")]),this._v(" Worker::getType")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Get worker type. "),e("ul",[e("li",[e("strong",[this._v("@return")]),this._v(" - one of "),e("a",{attrs:{href:"#worker-type"}},[this._v("Worker::Type")]),this._v(" values. ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[this._v("Type "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("getType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"worker-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#worker-type","aria-hidden":"true"}},[this._v("#")]),this._v(" Worker::Type")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" async "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" worker "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Worker")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"worker-type-processor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#worker-type-processor","aria-hidden":"true"}},[this._v("#")]),this._v(" Worker::Type::PROCESSOR")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[this._v("PROCESSOR "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[this._v("0")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"worker-type-timer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#worker-type-timer","aria-hidden":"true"}},[this._v("#")]),this._v(" Worker::Type::TIMER")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[this._v("TIMER "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[this._v("1")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"worker-type-io"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#worker-type-io","aria-hidden":"true"}},[this._v("#")]),this._v(" Worker::Type::IO")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[this._v("IO "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[this._v("2")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"worker-type-types-count"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#worker-type-types-count","aria-hidden":"true"}},[this._v("#")]),this._v(" Worker::Type::TYPES_COUNT")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[this._v("TYPES_COUNT "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[this._v("3")]),this._v("\n")])])])}],!1,null,null,null);e.default=a.exports}}]);