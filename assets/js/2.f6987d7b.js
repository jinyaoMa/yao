(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{417:function(t,i,e){},418:function(t,i,e){"use strict";e(417)},419:function(t,i,e){"use strict";e(88),e(40),e(27),e(89),e(69);var s={name:"Title",computed:{title:function(){var t=/^(zh)/i.test(this.yui$Lang)?0:1,i=this.$title.split(" | ")[t].trim();if(this.$currentCategory||this.$currentTag){var e=this.$title.indexOf(" "),s=this.$title.substring(0,e).trim(),n=this.$title.substring(e,this.$title.length).split(" | ")[t].trim();i="".concat(n," | ").concat(s)}else"archive"===this.$page.id&&(i=this.$title.split(" | ")[0].trim());return i}}},n=(e(418),e(12)),c=Object(n.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"Title",class:{"align-center":"archive"===this.$page.id}},[this._v("\n  "+this._s(this.title)+"\n")])}),[],!1,null,"31cc4cfe",null);i.a=c.exports},420:function(t,i,e){},421:function(t,i,e){"use strict";e(420)},422:function(t,i,e){"use strict";var s={name:"Post"},n=(e(421),e(12)),c=Object(n.a)(s,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"Article"},[i("Content",{staticClass:"markdown-body"})],1)}),[],!1,null,"3fcf2c04",null);i.a=c.exports},441:function(t,i,e){"use strict";e.r(i);var s=e(419),n=e(422),c={name:"Layout",components:{Title:s.a,Article:n.a}},a=e(12),r=Object(a.a)(c,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"Layout"},[i("Title"),this._v(" "),i("Article")],1)}),[],!1,null,"7ec020b1",null);i.default=r.exports}}]);