(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{273:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"connection-hpp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connection-hpp","aria-hidden":"true"}},[t._v("#")]),t._v(" Connection.hpp"),a("seo")],1),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/oatpp/oatpp-mbedtls/blob/master/src/oatpp-mbedtls/Connection.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/oatpp/oatpp-mbedtls/issues/new?title=API%20question&body=In%20file:%20oatpp-mbedtls/Connection.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),a("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("TLS Connection implementation based on Mbed TLS. Extends "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/base/Countable/#countable"}},[t._v("oatpp::base::Countable")]),t._v(" and "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#iostream"}},[t._v("oatpp::data::stream::IOStream")]),t._v(".")],1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("Constructor. "),a("ul",[t._m(6),a("li",[a("strong",[t._v("@param")]),t._v(" stream - underlying transport stream. "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#iostream"}},[t._v("oatpp::data::stream::IOStream")]),t._v(". ")],1),t._m(7)])]),t._v(" "),t._m(8),t._m(9),t._v(" "),a("p",[t._v("Virtual destructor.")]),t._v(" "),t._m(10),t._m(11),t._v(" "),a("p",[t._v("Write operation callback. "),a("ul",[t._m(12),t._m(13),a("li",[a("strong",[t._v("@param")]),t._v(" action - async specific action. If action is NOT "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#action-type-none"}},[t._v("oatpp::async::Action::TYPE_NONE")]),t._v(", then caller MUST return this action on coroutine iteration. ")],1),t._m(14)])]),t._v(" "),t._m(15),t._m(16),t._v(" "),a("p",[t._v("Read operation callback. "),a("ul",[t._m(17),t._m(18),a("li",[a("strong",[t._v("@param")]),t._v(" action - async specific action. If action is NOT "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#action-type-none"}},[t._v("oatpp::async::Action::TYPE_NONE")]),t._v(", then caller MUST return this action on coroutine iteration. ")],1),t._m(19)])]),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._m(27),t._v(" "),a("p",[t._v("Get output stream context. "),a("ul",[a("li",[a("strong",[t._v("@return")]),t._v(" - "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#context"}},[t._v("oatpp::data::stream::Context")]),t._v(". ")],1)])]),t._v(" "),t._m(28),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._m(35),t._v(" "),a("p",[t._v("Get input stream context. "),a("br"),t._v(" "),a("ul",[a("li",[a("strong",[t._v("@return")]),t._v(" - "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#context"}},[t._v("oatpp::data::stream::Context")]),t._v(". ")],1)])]),t._v(" "),t._m(36),t._m(37),t._v(" "),a("p",[t._v("Close all handles.")]),t._v(" "),t._m(38),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._m(42),t._v(" "),a("p",[t._v("Get socket handle. "),a("ul",[a("li",[a("strong",[t._v("@return")]),t._v(" - underlying transport stream. "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#iostream"}},[t._v("oatpp::data::stream::IOStream")]),t._v(". ")],1)])]),t._v(" "),t._m(43)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("API: latest")]),e("br"),this._v(" "),e("code",[this._v("module: oatpp-mbedtls")]),e("br"),this._v(" "),e("code",[this._v('#include "oatpp-mbedtls/Connection.hpp"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"connection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" mbedtls "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connection")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("base"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Countable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("IOStream "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Return Type")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Summary")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("[none]")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#connection-connection"}},[t._v("Connection")])]),t._v(" "),a("td",[t._v("Constructor.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("[none]")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#connection-~connection"}},[t._v("~Connection")])]),t._v(" "),a("td",[t._v("Virtual destructor.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("v_io_size")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#connection-write"}},[t._v("write")])]),t._v(" "),a("td",[t._v("Write operation callback.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::v_io_size")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#connection-read"}},[t._v("read")])]),t._v(" "),a("td",[t._v("Read operation callback.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#connection-setoutputstreamiomode"}},[t._v("setOutputStreamIOMode")])]),t._v(" "),a("td",[t._v("Set OutputStream I/O mode.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::data::stream::IOMode")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#connection-getoutputstreamiomode"}},[t._v("getOutputStreamIOMode")])]),t._v(" "),a("td",[t._v("Set OutputStream I/O mode.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::data::stream::Context&")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#connection-getoutputstreamcontext"}},[t._v("getOutputStreamContext")])]),t._v(" "),a("td",[t._v("Get output stream context.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#connection-setinputstreamiomode"}},[t._v("setInputStreamIOMode")])]),t._v(" "),a("td",[t._v("Set InputStream I/O mode.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::data::stream::IOMode")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#connection-getinputstreamiomode"}},[t._v("getInputStreamIOMode")])]),t._v(" "),a("td",[t._v("Get InputStream I/O mode.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::data::stream::Context&")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#connection-getinputstreamcontext"}},[t._v("getInputStreamContext")])]),t._v(" "),a("td",[t._v("Get input stream context. "),a("br")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#connection-close"}},[t._v("close")])]),t._v(" "),a("td",[t._v("Close all handles.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("mbedtls_ssl_context*")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#connection-gettlshandle"}},[t._v("getTlsHandle")])]),t._v(" "),a("td",[t._v("Get TLS handle.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("std::shared_ptr<oatpp::data::stream::IOStream>")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#connection-getstream"}},[t._v("getStream")])]),t._v(" "),a("td",[t._v("Get socket handle.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-connection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-connection","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::Connection")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" tlsHandle - "),e("code",[this._v("mbedtls_ssl_context*")]),this._v(". ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" initialized - is stream initialized (do we have handshake already). ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Connection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mbedtls_ssl_context"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" tlsHandle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("IOStream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" initialized"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-connection-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-connection-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::~Connection")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("~")]),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("Connection")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-write"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-write","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::write")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" data - pointer to data. ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" count - size of the data in bytes. ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@return")]),this._v(" - actual number of bytes written. 0 - to indicate end-of-file. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("v_io_size "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v_buff_size count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" async"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Action"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-read"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-read","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::read")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" buffer - pointer to buffer. ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" count - size of the buffer in bytes. ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@return")]),this._v(" - actual number of bytes written to buffer. 0 - to indicate end-of-file. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("v_io_size "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("buff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v_buff_size count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" async"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Action"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-setoutputstreamiomode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-setoutputstreamiomode","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::setOutputStreamIOMode")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Set OutputStream I/O mode. "),e("ul",[e("li",[e("strong",[this._v("@param")]),this._v(" ioMode ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setOutputStreamIOMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("IOMode ioMode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-getoutputstreamiomode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-getoutputstreamiomode","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::getOutputStreamIOMode")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Set OutputStream I/O mode. "),e("ul",[e("li",[e("strong",[this._v("@return")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("IOMode "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOutputStreamIOMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-getoutputstreamcontext"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-getoutputstreamcontext","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::getOutputStreamContext")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Context"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOutputStreamContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-setinputstreamiomode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-setinputstreamiomode","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::setInputStreamIOMode")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Set InputStream I/O mode. "),e("ul",[e("li",[e("strong",[this._v("@param")]),this._v(" ioMode ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInputStreamIOMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("IOMode ioMode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-getinputstreamiomode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-getinputstreamiomode","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::getInputStreamIOMode")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Get InputStream I/O mode. "),e("ul",[e("li",[e("strong",[this._v("@return")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("IOMode "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInputStreamIOMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-getinputstreamcontext"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-getinputstreamcontext","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::getInputStreamContext")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Context"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInputStreamContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-close"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-close","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::close")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("void")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("close")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-gettlshandle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-gettlshandle","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::getTlsHandle")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Get TLS handle. "),e("ul",[e("li",[e("strong",[this._v("@return")]),this._v(" - "),e("code",[this._v("mbedtls_ssl_context*")]),this._v(". ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[this._v("mbedtls_ssl_context"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("*")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("getTlsHandle")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-getstream"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-getstream","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::getStream")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("IOStream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);