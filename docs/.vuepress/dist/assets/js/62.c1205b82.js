(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{325:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"handshaker-hpp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#handshaker-hpp","aria-hidden":"true"}},[e._v("#")]),e._v(" Handshaker.hpp"),s("seo")],1),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/oatpp/oatpp-websocket/blob/master/src/oatpp-websocket/Handshaker.hpp",target:"_blank",rel:"noopener noreferrer"}},[e._v("This File On Github"),s("OutboundLink")],1),s("br"),e._v(" "),s("a",{attrs:{href:"https://github.com/oatpp/oatpp-websocket/issues/new?title=API%20question&body=In%20file:%20oatpp-websocket/Handshaker.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ask A Question"),s("OutboundLink")],1)]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("Helper class providing WebSocket handshake functionality.")]),e._v(" "),e._m(2),e._m(3),e._v(" "),s("table",[e._m(4),e._v(" "),s("tbody",[s("tr",[e._m(5),e._v(" "),e._m(6),e._v(" "),s("td",[e._v("Convenience typedef for "),s("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/outgoing/Response/#response"}},[e._v("oatpp::web::protocol::http::outgoing::Response")]),e._v(".")],1)]),e._v(" "),s("tr",[e._m(7),e._v(" "),e._m(8),e._v(" "),s("td",[e._v("Convenience typedef for "),s("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/incoming/Response/#response"}},[e._v("oatpp::web::protocol::http::incoming::Response")]),e._v(".")],1)])])]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),s("p",[e._v("Convenience typedef for "),s("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/outgoing/Response/#response"}},[e._v("oatpp::web::protocol::http::outgoing::Response")]),e._v(".")],1),e._v(" "),e._m(14),e._m(15),e._v(" "),s("p",[e._v("Convenience typedef for "),s("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/incoming/Response/#response"}},[e._v("oatpp::web::protocol::http::incoming::Response")]),e._v(".")],1),e._v(" "),e._m(16),e._m(17),e._v(" "),s("p",[e._v("Handshake OK.")]),e._v(" "),e._m(18),e._m(19),e._v(" "),s("p",[e._v("Server response-code != 101.")]),e._v(" "),e._m(20),e._m(21),e._v(" "),s("p",[e._v('Server response "Sec-WebSocket-Accept" header is wrong.')]),e._v(" "),e._m(22),e._m(23),e._v(" "),s("p",[e._v("Server's response contains unexpected headers values")]),e._v(" "),e._m(24),e._m(25),e._v(" "),s("p",[e._v("Prepare OutgoingResponse as for websocket-handshake based on requestHeaders. "),s("ul",[s("li",[s("strong",[e._v("@param")]),e._v(" requestHeaders - request headers. "),s("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#headers"}},[e._v("oatpp::web::protocol::http::Headers")]),e._v(". ")],1),s("li",[s("strong",[e._v("@param")]),e._v(" connectionUpgradeHandler - "),s("router-link",{attrs:{to:"/api/latest/oatpp/network/server/ConnectionHandler/#connectionhandler"}},[e._v("oatpp::network::server::ConnectionHandler")]),e._v(". ")],1),s("li",[s("strong",[e._v("@return")]),e._v(" - "),s("code",[e._v("std::shared_ptr")]),e._v(" to "),s("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/outgoing/Response/#response"}},[e._v("oatpp::web::protocol::http::outgoing::Response")]),e._v(". ")],1)])]),e._v(" "),e._m(26),e._m(27),e._v(" "),s("p",[e._v("Set client request headers as for websocket-handshake. "),s("ul",[s("li",[s("strong",[e._v("@param")]),e._v(" requestHeaders - headers map. "),s("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#headers"}},[e._v("oatpp::web::protocol::http::Headers")]),e._v(". ")],1)])]),e._v(" "),e._m(28),e._m(29),e._v(" "),s("p",[e._v("Check if client's handshake corresponds to server's handshake "),s("ul",[s("li",[s("strong",[e._v("@param")]),e._v(" clientHandshakeHeaders - previously prepared headers which were sent to server. "),s("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#headers"}},[e._v("oatpp::web::protocol::http::Headers")]),e._v(". See "),s("a",{attrs:{href:"#handshaker-clientsidehandshake"}},[e._v("Handshaker::clientsideHandshake()")]),e._v(". ")],1),s("li",[s("strong",[e._v("@param")]),e._v(" serverResponse - "),s("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/incoming/Response/#response"}},[e._v("oatpp::web::protocol::http::incoming::Response")]),e._v(". ")],1),e._m(30)])]),e._v(" "),e._m(31)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("API: latest")]),t("br"),this._v(" "),t("code",[this._v("module: oatpp-websocket")]),t("br"),this._v(" "),t("code",[this._v('#include "oatpp-websocket/Handshaker.hpp"')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"handshaker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#handshaker","aria-hidden":"true"}},[this._v("#")]),this._v(" Handshaker")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" oatpp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" websocket "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Handshaker")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"typedefs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#typedefs","aria-hidden":"true"}},[this._v("#")]),this._v(" Typedefs")])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("Type")]),this._v(" "),t("th",[this._v("Name")]),this._v(" "),t("th",[this._v("Summary")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[t("code",[this._v("oatpp::web::protocol::http::outgoing::Response")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[t("a",{attrs:{href:"#handshaker-outgoingresponse"}},[this._v("OutgoingResponse")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[t("code",[this._v("oatpp::web::protocol::http::incoming::Response")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[t("a",{attrs:{href:"#handshaker-incomingresponse"}},[this._v("IncomingResponse")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"fields"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fields","aria-hidden":"true"}},[this._v("#")]),this._v(" Fields")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Type")]),e._v(" "),s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Summary")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("code",[e._v("v_int32")])]),e._v(" "),s("td",[s("a",{attrs:{href:"#handshaker-status-ok"}},[e._v("STATUS_OK")])]),e._v(" "),s("td",[e._v("Handshake OK.")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("v_int32")])]),e._v(" "),s("td",[s("a",{attrs:{href:"#handshaker-status-server-error"}},[e._v("STATUS_SERVER_ERROR")])]),e._v(" "),s("td",[e._v("Server response-code != 101.")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("v_int32")])]),e._v(" "),s("td",[s("a",{attrs:{href:"#handshaker-status-server-wrong-key"}},[e._v("STATUS_SERVER_WRONG_KEY")])]),e._v(" "),s("td",[e._v('Server response "Sec-WebSocket-Accept" header is wrong.')])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("v_int32")])]),e._v(" "),s("td",[s("a",{attrs:{href:"#handshaker-status-unknown-protocol-suggested"}},[e._v("STATUS_UNKNOWN_PROTOCOL_SUGGESTED")])]),e._v(" "),s("td",[e._v("Server's response contains unexpected headers values")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Return Type")]),e._v(" "),s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Summary")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("code",[e._v("std::shared_ptr<OutgoingResponse>")])]),e._v(" "),s("td",[s("a",{attrs:{href:"#handshaker-serversidehandshake"}},[e._v("serversideHandshake")])]),e._v(" "),s("td",[e._v("Prepare OutgoingResponse as for websocket-handshake based on requestHeaders.")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("void")])]),e._v(" "),s("td",[s("a",{attrs:{href:"#handshaker-clientsidehandshake"}},[e._v("clientsideHandshake")])]),e._v(" "),s("td",[e._v("Set client request headers as for websocket-handshake.")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("v_int32")])]),e._v(" "),s("td",[s("a",{attrs:{href:"#handshaker-clientsideconfirmhandshake"}},[e._v("clientsideConfirmHandshake")])]),e._v(" "),s("td",[e._v("Check if client's handshake corresponds to server's handshake")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"handshaker-outgoingresponse"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#handshaker-outgoingresponse","aria-hidden":"true"}},[this._v("#")]),this._v(" Handshaker::OutgoingResponse")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("typedef")]),e._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("web"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("protocol"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("http"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("outgoing"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("Response OutgoingResponse\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"handshaker-incomingresponse"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#handshaker-incomingresponse","aria-hidden":"true"}},[this._v("#")]),this._v(" Handshaker::IncomingResponse")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("typedef")]),e._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("web"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("protocol"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("http"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("incoming"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("Response IncomingResponse\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"handshaker-status-ok"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#handshaker-status-ok","aria-hidden":"true"}},[this._v("#")]),this._v(" Handshaker::STATUS_OK")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("constexpr")]),e._v(" v_int32 STATUS_OK "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"handshaker-status-server-error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#handshaker-status-server-error","aria-hidden":"true"}},[this._v("#")]),this._v(" Handshaker::STATUS_SERVER_ERROR")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("constexpr")]),e._v(" v_int32 STATUS_SERVER_ERROR "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"handshaker-status-server-wrong-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#handshaker-status-server-wrong-key","aria-hidden":"true"}},[this._v("#")]),this._v(" Handshaker::STATUS_SERVER_WRONG_KEY")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("constexpr")]),e._v(" v_int32 STATUS_SERVER_WRONG_KEY "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"handshaker-status-unknown-protocol-suggested"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#handshaker-status-unknown-protocol-suggested","aria-hidden":"true"}},[this._v("#")]),this._v(" Handshaker::STATUS_UNKNOWN_PROTOCOL_SUGGESTED")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("constexpr")]),e._v(" v_int32 STATUS_UNKNOWN_PROTOCOL_SUGGESTED "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"handshaker-serversidehandshake"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#handshaker-serversidehandshake","aria-hidden":"true"}},[this._v("#")]),this._v(" Handshaker::serversideHandshake")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("shared_ptr"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("OutgoingResponse"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("serversideHandshake")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" Headers"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v(" requestHeaders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("shared_ptr"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("ConnectionHandler"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v(" connectionUpgradeHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"handshaker-clientsidehandshake"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#handshaker-clientsidehandshake","aria-hidden":"true"}},[this._v("#")]),this._v(" Handshaker::clientsideHandshake")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("clientsideHandshake")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Headers"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v(" requestHeaders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"handshaker-clientsideconfirmhandshake"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#handshaker-clientsideconfirmhandshake","aria-hidden":"true"}},[this._v("#")]),this._v(" Handshaker::clientsideConfirmHandshake")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("strong",[e._v("@return")]),e._v(" - one of: "),s("ul",[s("li",[s("a",{attrs:{href:"#handshaker-status-ok"}},[e._v("Handshaker::STATUS_OK")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#handshaker-status-server-error"}},[e._v("Handshaker::STATUS_SERVER_ERROR")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#handshaker-status-server-wrong-key"}},[e._v("Handshaker::STATUS_SERVER_WRONG_KEY")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#handshaker-status-unknown-protocol-suggested"}},[e._v("Handshaker::STATUS_UNKNOWN_PROTOCOL_SUGGESTED")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" v_int32 "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("clientsideConfirmHandshake")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" Headers"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v(" clientHandshakeHeaders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("shared_ptr"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("IncomingResponse"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v(" serverResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])}],!1,null,null,null);t.default=r.exports}}]);