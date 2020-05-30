(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{263:function(e,t,r){"use strict";r.r(t);var a=r(0),s=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"curlheadersreader-hpp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#curlheadersreader-hpp","aria-hidden":"true"}},[e._v("#")]),e._v(" CurlHeadersReader.hpp"),r("seo")],1),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/oatpp/oatpp-curl/blob/master/src/oatpp-curl/io/CurlHeadersReader.hpp",target:"_blank",rel:"noopener noreferrer"}},[e._v("This File On Github"),r("OutboundLink")],1),r("br"),e._v(" "),r("a",{attrs:{href:"https://github.com/oatpp/oatpp-curl/issues/new?title=API%20question&body=In%20file:%20oatpp-curl/io/CurlHeadersReader.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ask A Question"),r("OutboundLink")],1)]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("Curl headers reader is responsible for reading response headers. "),r("br"),e._v(" It implements "),r("code",[e._v("CURLOPT_HEADERFUNCTION")]),e._v(" and stores headers in "),r("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#headers"}},[e._v("oatpp::web::protocol::http::Headers")]),e._v(". It also captures response "),r("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#responsestartingline"}},[e._v("oatpp::web::protocol::http::ResponseStartingLine")]),e._v(".")],1),e._v(" "),e._m(2),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),r("p",[e._v("STATE_INITIALIZED state of CurlHeadersReader.")]),e._v(" "),e._m(8),e._m(9),e._v(" "),r("p",[e._v("STATE_STARTED state of CurlHeadersReader.")]),e._v(" "),e._m(10),e._m(11),e._v(" "),r("p",[e._v("STATE_FINISHED state of CurlHeadersReader.")]),e._v(" "),e._m(12),e._m(13),e._v(" "),r("p",[e._v("Constructor. "),r("ul",[r("li",[r("strong",[e._v("@param")]),e._v(" curlHandles - "),r("router-link",{attrs:{to:"/api/latest/oatpp-curl/io/Curl/#curlhandles"}},[e._v("oatpp::curl::io::CurlHandles")]),e._v(". ")],1)])]),e._v(" "),e._m(14),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._m(18),e._v(" "),r("p",[e._v("Get response starting line. "),r("ul",[r("li",[r("strong",[e._v("@return")]),e._v(" - "),r("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#responsestartingline"}},[e._v("oatpp::web::protocol::http::ResponseStartingLine")]),e._v(". ")],1)])]),e._v(" "),e._m(19),e._m(20),e._v(" "),r("p",[e._v("Get headers map. "),r("ul",[r("li",[r("strong",[e._v("@return")]),e._v(" - "),r("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#headers"}},[e._v("oatpp::web::protocol::http::Headers")]),e._v(". ")],1)])]),e._v(" "),e._m(21)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("API: latest")]),t("br"),this._v(" "),t("code",[this._v("module: oatpp-curl")]),t("br"),this._v(" "),t("code",[this._v('#include "oatpp-curl/io/CurlHeadersReader.hpp"')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"curlheadersreader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#curlheadersreader","aria-hidden":"true"}},[this._v("#")]),this._v(" CurlHeadersReader")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" oatpp "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" curl "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" io "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" \n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("CurlHeadersReader")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"fields"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fields","aria-hidden":"true"}},[this._v("#")]),this._v(" Fields")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("Type")]),e._v(" "),r("th",[e._v("Name")]),e._v(" "),r("th",[e._v("Summary")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("code",[e._v("v_int32")])]),e._v(" "),r("td",[r("a",{attrs:{href:"#curlheadersreader-state-initialized"}},[e._v("STATE_INITIALIZED")])]),e._v(" "),r("td",[e._v("STATE_INITIALIZED state of CurlHeadersReader.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("v_int32")])]),e._v(" "),r("td",[r("a",{attrs:{href:"#curlheadersreader-state-started"}},[e._v("STATE_STARTED")])]),e._v(" "),r("td",[e._v("STATE_STARTED state of CurlHeadersReader.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("v_int32")])]),e._v(" "),r("td",[r("a",{attrs:{href:"#curlheadersreader-state-finished"}},[e._v("STATE_FINISHED")])]),e._v(" "),r("td",[e._v("STATE_FINISHED state of CurlHeadersReader.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("Return Type")]),e._v(" "),r("th",[e._v("Name")]),e._v(" "),r("th",[e._v("Summary")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("code",[e._v("[none]")])]),e._v(" "),r("td",[r("a",{attrs:{href:"#curlheadersreader-curlheadersreader"}},[e._v("CurlHeadersReader")])]),e._v(" "),r("td",[e._v("Constructor.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("v_int32")])]),e._v(" "),r("td",[r("a",{attrs:{href:"#curlheadersreader-getstate"}},[e._v("getState")])]),e._v(" "),r("td",[e._v("State of CurlHeadersReader.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("const oatpp::web::protocol::http::ResponseStartingLine&")])]),e._v(" "),r("td",[r("a",{attrs:{href:"#curlheadersreader-getstartingline"}},[e._v("getStartingLine")])]),e._v(" "),r("td",[e._v("Get response starting line.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("const oatpp::web::protocol::http::Headers&")])]),e._v(" "),r("td",[r("a",{attrs:{href:"#curlheadersreader-getheaders"}},[e._v("getHeaders")])]),e._v(" "),r("td",[e._v("Get headers map.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"curlheadersreader-state-initialized"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#curlheadersreader-state-initialized","aria-hidden":"true"}},[this._v("#")]),this._v(" CurlHeadersReader::STATE_INITIALIZED")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("constexpr")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" v_int32 STATE_INITIALIZED "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"curlheadersreader-state-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#curlheadersreader-state-started","aria-hidden":"true"}},[this._v("#")]),this._v(" CurlHeadersReader::STATE_STARTED")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("constexpr")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" v_int32 STATE_STARTED "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"curlheadersreader-state-finished"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#curlheadersreader-state-finished","aria-hidden":"true"}},[this._v("#")]),this._v(" CurlHeadersReader::STATE_FINISHED")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("constexpr")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" v_int32 STATE_FINISHED "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"curlheadersreader-curlheadersreader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#curlheadersreader-curlheadersreader","aria-hidden":"true"}},[this._v("#")]),this._v(" CurlHeadersReader::CurlHeadersReader")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("CurlHeadersReader")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" std"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("shared_ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("CurlHandles"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v(" curlHandles"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"curlheadersreader-getstate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#curlheadersreader-getstate","aria-hidden":"true"}},[this._v("#")]),this._v(" CurlHeadersReader::getState")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("State of CurlHeadersReader. "),r("ul",[r("li",[r("strong",[e._v("@return")]),e._v(" - one of: "),r("ul",[r("li",[r("a",{attrs:{href:"#curlheadersreader-state-initialized"}},[e._v("CurlHeadersReader::STATE_INITIALIZED")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#curlheadersreader-state-started"}},[e._v("CurlHeadersReader::STATE_STARTED")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#curlheadersreader-state-finished"}},[e._v("CurlHeadersReader::STATE_FINISHED")])])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-cpp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[this._v("v_int32 "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("getState")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("const")]),this._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"curlheadersreader-getstartingline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#curlheadersreader-getstartingline","aria-hidden":"true"}},[this._v("#")]),this._v(" CurlHeadersReader::getStartingLine")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" oatpp"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("web"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("protocol"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("http"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("ResponseStartingLine"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("getStartingLine")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"curlheadersreader-getheaders"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#curlheadersreader-getheaders","aria-hidden":"true"}},[this._v("#")]),this._v(" CurlHeadersReader::getHeaders")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" oatpp"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("web"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("protocol"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("http"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("Headers"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("getHeaders")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v("\n")])])])}],!1,null,null,null);t.default=s.exports}}]);