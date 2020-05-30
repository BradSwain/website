(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{413:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"objectmapper-hpp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objectmapper-hpp","aria-hidden":"true"}},[t._v("#")]),t._v(" ObjectMapper.hpp"),a("seo")],1),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/core/data/mapping/ObjectMapper.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/core/data/mapping/ObjectMapper.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),a("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Abstract ObjectMapper class.")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),a("p",[t._v("Serialize object to stream. Implement this method. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" stream - "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#consistentoutputstream"}},[t._v("oatpp::data::stream::ConsistentOutputStream")]),t._v(" to serialize object to. ")],1),t._m(12)])]),t._v(" "),t._m(13),t._m(14),t._v(" "),a("p",[t._v("Deserialize object. Implement this method. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" caret - "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/parser/Caret/#caret"}},[t._v("oatpp::parser::Caret")]),t._v(" over serialized buffer. ")],1),a("li",[a("strong",[t._v("@param")]),t._v(" type - pointer to object type. See "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/mapping/type/Type/#type"}},[t._v("oatpp::data::mapping::type::Type")]),t._v(". ")],1),a("li",[a("strong",[t._v("@return")]),t._v(" - deserialized object wrapped in "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/Types/#void"}},[t._v("oatpp::Void")]),t._v(". ")],1)])]),t._v(" "),t._m(15),t._m(16),t._v(" "),a("p",[t._v("Serialize object to String. "),a("ul",[t._m(17),a("li",[a("strong",[t._v("@return")]),t._v(" - serialized object as "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/Types/#string"}},[t._v("oatpp::String")]),t._v(". ")],1)])]),t._v(" "),t._m(18),t._m(19),t._v(" "),a("p",[t._v("Deserialize object. If nullptr is returned - check caret.getError() "),a("ul",[t._m(20),a("li",[a("strong",[t._v("@param")]),t._v(" caret - "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/parser/Caret/#caret"}},[t._v("oatpp::parser::Caret")]),t._v(" over serialized buffer. ")],1),t._m(21),t._m(22)])]),t._v(" "),t._m(23),t._m(24),t._v(" "),a("p",[t._v("Deserialize object. "),a("ul",[t._m(25),t._m(26),t._m(27),a("li",[a("strong",[t._v("@throws")]),t._v(" - "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/parser/ParsingError/#parsingerror"}},[t._v("oatpp::parser::ParsingError")])],1),t._m(28)])]),t._v(" "),t._m(29),t._m(30),t._v(" "),a("p",[t._v("Metadata for ObjectMapper.")]),t._v(" "),t._m(31),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),a("p",[t._v("Value for Content-Type http header when DTO is serialized via specified ObjectMapper.")]),t._v(" "),t._m(37),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("API: latest")]),e("br"),this._v(" "),e("code",[this._v("module: oatpp")]),e("br"),this._v(" "),e("code",[this._v('#include "oatpp/core/data/mapping/ObjectMapper.hpp"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"objectmapper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#objectmapper","aria-hidden":"true"}},[this._v("#")]),this._v(" ObjectMapper")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" mapping "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ObjectMapper")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Return Type")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Summary")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("[none]")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#objectmapper-objectmapper"}},[t._v("ObjectMapper")])]),t._v(" "),a("td",[t._v("Constructor.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("const Info&")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#objectmapper-getinfo"}},[t._v("getInfo")])]),t._v(" "),a("td",[t._v("Get ObjectMapper metadata.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#objectmapper-write"}},[t._v("write")])]),t._v(" "),a("td",[t._v("Serialize object to stream. Implement this method.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("mapping::type::Void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#objectmapper-read"}},[t._v("read")])]),t._v(" "),a("td",[t._v("Deserialize object. Implement this method.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::String")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#objectmapper-writetostring"}},[t._v("writeToString")])]),t._v(" "),a("td",[t._v("Serialize object to String.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("Wrapper")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#objectmapper-readfromcaret"}},[t._v("readFromCaret")])]),t._v(" "),a("td",[t._v("Deserialize object.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("Wrapper")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#objectmapper-readfromstring"}},[t._v("readFromString")])]),t._v(" "),a("td",[t._v("Deserialize object.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"objectmapper-objectmapper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#objectmapper-objectmapper","aria-hidden":"true"}},[this._v("#")]),this._v(" ObjectMapper::ObjectMapper")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Constructor. "),e("ul",[e("li",[e("strong",[this._v("@param")]),this._v(" info - Metadata for ObjectMapper. ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ObjectMapper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"objectmapper-getinfo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#objectmapper-getinfo","aria-hidden":"true"}},[this._v("#")]),this._v(" ObjectMapper::getInfo")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Get ObjectMapper metadata. "),e("ul",[e("li",[e("strong",[this._v("@return")]),this._v(" - ObjectMapper metadata. ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"objectmapper-write"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#objectmapper-write","aria-hidden":"true"}},[this._v("#")]),this._v(" ObjectMapper::write")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" variant - Object to serialize. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ConsistentOutputStream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Void"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" variant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"objectmapper-read"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#objectmapper-read","aria-hidden":"true"}},[this._v("#")]),this._v(" ObjectMapper::read")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" mapping"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Void "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("parser"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Caret"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" caret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mapping"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"objectmapper-writetostring"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#objectmapper-writetostring","aria-hidden":"true"}},[this._v("#")]),this._v(" ObjectMapper::writeToString")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" variant - Object to serialize. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeToString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Void"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" variant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"objectmapper-readfromcaret"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#objectmapper-readfromcaret","aria-hidden":"true"}},[this._v("#")]),this._v(" ObjectMapper::readFromCaret")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@tparam")]),this._v(" Wrapper - ObjectWrapper type. ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@return")]),this._v(" - deserialized Object. ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@throws")]),this._v(" - depends on implementation. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Wrapper")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nWrapper "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFromCaret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("parser"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Caret"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" caret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"objectmapper-readfromstring"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#objectmapper-readfromstring","aria-hidden":"true"}},[this._v("#")]),this._v(" ObjectMapper::readFromString")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@tparam")]),this._v(" Wrapper - ObjectWrapper type. ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" str - serialized data. ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@return")]),this._v(" - deserialized Object. ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@throws")]),this._v(" - depends on implementation. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Wrapper")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nWrapper "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFromString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"objectmapper-info"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#objectmapper-info","aria-hidden":"true"}},[this._v("#")]),this._v(" ObjectMapper::Info")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" mapping "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ObjectMapper")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Info")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fields","aria-hidden":"true"}},[this._v("#")]),this._v(" Fields")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Summary")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("const char* const")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#objectmapper-info-http-content-type"}},[t._v("http_content_type")])]),t._v(" "),a("td",[t._v("Value for Content-Type http header when DTO is serialized via specified ObjectMapper.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"methods-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Return Type")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Summary")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("[none]")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#objectmapper-info-info"}},[t._v("Info")])]),t._v(" "),a("td",[t._v("Constructor.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"objectmapper-info-http-content-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#objectmapper-info-http-content-type","aria-hidden":"true"}},[this._v("#")]),this._v(" ObjectMapper::Info::http_content_type")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("const")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("char")]),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("*")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("const")]),this._v(" http_content_type\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"objectmapper-info-info"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#objectmapper-info-info","aria-hidden":"true"}},[this._v("#")]),this._v(" ObjectMapper::Info::Info")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Constructor. "),e("ul",[e("li",[e("strong",[this._v("@param")]),this._v(" _http_content_type ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" _http_content_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("http_content_type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_http_content_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);e.default=s.exports}}]);