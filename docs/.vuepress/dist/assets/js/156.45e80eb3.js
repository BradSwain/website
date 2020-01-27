(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{316:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"simplebodydecoder-hpp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simplebodydecoder-hpp","aria-hidden":"true"}},[t._v("#")]),t._v(" SimpleBodyDecoder.hpp"),a("seo")],1),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/web/protocol/http/incoming/SimpleBodyDecoder.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/web/protocol/http/incoming/SimpleBodyDecoder.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),a("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Default implementation of "),a("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/incoming/BodyDecoder/#bodydecoder"}},[t._v("oatpp::web::protocol::http::incoming::BodyDecoder")]),t._v(".")],1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),a("p",[t._v("Decode bodyStream and write decoded data to toStream. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" headers - Headers map. "),a("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#headers"}},[t._v("oatpp::web::protocol::http::Headers")]),t._v(". ")],1),a("li",[a("strong",[t._v("@param")]),t._v(" bodyStream - pointer to "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#inputstream"}},[t._v("oatpp::data::stream::InputStream")]),t._v(". ")],1),a("li",[a("strong",[t._v("@param")]),t._v(" writeCallback - "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#writecallback"}},[t._v("oatpp::data::stream::WriteCallback")]),t._v(". ")],1)])]),t._v(" "),t._m(9),t._m(10),t._v(" "),a("p",[t._v("Same as "),a("a",{attrs:{href:"#simplebodydecoder-decode"}},[t._v("SimpleBodyDecoder::decode()")]),t._v(" but Async. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" headers - Headers map. "),a("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#headers"}},[t._v("oatpp::web::protocol::http::Headers")]),t._v(". ")],1),a("li",[a("strong",[t._v("@param")]),t._v(" bodyStream - "),a("code",[t._v("std::shared_ptr")]),t._v(" to "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#inputstream"}},[t._v("oatpp::data::stream::InputStream")]),t._v(". ")],1),a("li",[a("strong",[t._v("@param")]),t._v(" writeCallback - "),a("code",[t._v("std::shared_ptr")]),t._v(" to "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#writecallback"}},[t._v("oatpp::data::stream::WriteCallback")]),t._v(". ")],1),a("li",[a("strong",[t._v("@return")]),t._v(" - "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#coroutinestarter"}},[t._v("oatpp::async::CoroutineStarter")]),t._v(". ")],1)])]),t._v(" "),t._m(11)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("API: latest")]),e("br"),this._v(" "),e("code",[this._v("module: oatpp")]),e("br"),this._v(" "),e("code",[this._v('#include "oatpp/web/protocol/http/incoming/SimpleBodyDecoder.hpp"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"simplebodydecoder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simplebodydecoder","aria-hidden":"true"}},[this._v("#")]),this._v(" SimpleBodyDecoder")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" web "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" protocol "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" http "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" incoming "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleBodyDecoder")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" BodyDecoder "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Return Type")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Summary")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("[none]")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#simplebodydecoder-simplebodydecoder"}},[t._v("SimpleBodyDecoder")])]),t._v(" "),a("td",[t._v("Constructor.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#simplebodydecoder-decode"}},[t._v("decode")])]),t._v(" "),a("td",[t._v("Decode bodyStream and write decoded data to toStream.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::async::CoroutineStarter")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#simplebodydecoder-decodeasync"}},[t._v("decodeAsync")])]),t._v(" "),a("td",[t._v("Same as "),a("a",{attrs:{href:"#simplebodydecoder-decode"}},[t._v("SimpleBodyDecoder::decode()")]),t._v(" but Async.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"simplebodydecoder-simplebodydecoder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simplebodydecoder-simplebodydecoder","aria-hidden":"true"}},[this._v("#")]),this._v(" SimpleBodyDecoder::SimpleBodyDecoder")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Constructor. "),e("ul",[e("li",[e("strong",[this._v("@param")]),this._v(" decoders - collection content decoders. ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SimpleBodyDecoder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ProviderCollection"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" contentDecoders "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nullptr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"simplebodydecoder-decode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simplebodydecoder-decode","aria-hidden":"true"}},[this._v("#")]),this._v(" SimpleBodyDecoder::decode")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("InputStream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" bodyStream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("WriteCallback"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" writeCallback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"simplebodydecoder-decodeasync"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simplebodydecoder-decodeasync","aria-hidden":"true"}},[this._v("#")]),this._v(" SimpleBodyDecoder::decodeAsync")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("async"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CoroutineStarter "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                           "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("InputStream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" bodyStream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                           "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("WriteCallback"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" writeCallback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" override\n")])])])}],!1,null,null,null);e.default=s.exports}}]);