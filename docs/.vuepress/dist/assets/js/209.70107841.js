(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{262:function(t,e,r){"use strict";r.r(e);var n=r(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"benchmark-oatpp-aws-cloud"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#benchmark-oatpp-aws-cloud","aria-hidden":"true"}},[t._v("#")]),t._v(" Benchmark oatpp - AWS cloud "),r("seo")],1),t._v(" "),t._m(0),t._v(" "),r("p",[t._v('Performance test of "Hello World" endpoint.')]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),r("p",[t._v('Performance test of "Hello World" endpoint.')]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"aws-t2-micro-instance-1vcpu-1gb-ubuntu-18-04-free-tier"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aws-t2-micro-instance-1vcpu-1gb-ubuntu-18-04-free-tier","aria-hidden":"true"}},[this._v("#")]),this._v(" AWS t2.micro instance. 1vCPU 1GB Ubuntu 18.04 - free tier")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Machine")]),this._v(" - AWS t2.micro instance. 1vCPU 1GB Ubuntu 18.04 - free tier"),e("br"),this._v(" "),e("strong",[this._v("Tool")]),this._v(" - wrk")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("oatpp-async compiled with: "),e("code",[this._v("-D OATPP_ASYNC_HTTP_CONNECTION_HANDLER_THREAD_NUM_DEFAULT=1")]),this._v(" option.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://github.com/lganzzzo/oatpp-website-res/blob/master/aws-1.png?raw=true",alt:"benchmark aws t2.micro"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("strong",[t._v("go net/http")]),t._v(' service performs clearly till 10 concurrent connection. At higher concurrency levels performs with "timeout" errors. Down at concurrency level > 15K.')]),t._v(" "),r("li",[r("strong",[t._v("oatpp-async")]),t._v(" service performs clearly and stays available up till 20K concurrent connections load. At higher loads no response. Service available if load drops.")]),t._v(" "),r("li",[r("strong",[t._v("oatpp-multithreaded")]),t._v(" service shows very high performance and works clearly up to 2.5K concurrent connections. Then down at load 5K concurrent connections.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"aws-t3-xlarge-instance-4vcpus-16gb-ubuntu-18-04-121-81-month"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aws-t3-xlarge-instance-4vcpus-16gb-ubuntu-18-04-121-81-month","aria-hidden":"true"}},[this._v("#")]),this._v(" AWS t3.xlarge instance. 4vCPUs 16GB Ubuntu 18.04 - $121.81/Month")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Machine")]),this._v(" - AWS t3.xlarge instance. 4vCPUs 16GB Ubuntu 18.04 - $121.81/Month"),e("br"),this._v(" "),e("strong",[this._v("Tool")]),this._v(" - wrk")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("oatpp-async compiled with:\n"),e("code",[this._v("-D OATPP_ASYNC_HTTP_CONNECTION_HANDLER_THREAD_NUM_DEFAULT=3")]),this._v(" option.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://github.com/lganzzzo/oatpp-website-res/blob/master/aws-2.png?raw=true",alt:"benchmark aws t3.xlarge"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("strong",[t._v("go net/http")]),t._v(' service performs clearly till 10 concurrent connection. At higher concurrency levels (till 25K connections) performs with "timeout" errors. At 30K load no response. Service available if load drops.')]),t._v(" "),r("li",[r("strong",[t._v("oatpp-async")]),t._v(" service performs clearly and stays available up till 25K concurrent connections load. At 30K load no response. Service available if load drops.")]),t._v(" "),r("li",[r("strong",[t._v("oatpp-multithreaded")]),t._v(' service shows very high performance and works clearly up to 2.5K concurrent connections. At higher concurrency levels (till 20K connections) performs with "timeout" errors. Down at higher load.')])])}],!1,null,null,null);e.default=s.exports}}]);