(function(t){function e(e){for(var r,n,i=e[0],o=e[1],c=e[2],d=0,v=[];d<i.length;d++)n=i[d],a[n]&&v.push(a[n][0]),a[n]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,c||[]),l()}function l(){for(var t,e=0;e<s.length;e++){for(var l=s[e],r=!0,i=1;i<l.length;i++){var o=l[i];0!==a[o]&&(r=!1)}r&&(s.splice(e--,1),t=n(n.s=l[0]))}return t}var r={},a={app:0},s=[];function n(e){if(r[e])return r[e].exports;var l=r[e]={i:e,l:!1,exports:{}};return t[e].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=t,n.c=r,n.d=function(t,e,l){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:l})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(l,r,function(e){return t[e]}.bind(null,r));return l},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="../";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=o;s.push([0,"chunk-vendors"]),l()})({0:function(t,e,l){t.exports=l("56d7")},1685:function(t,e,l){},3959:function(t,e,l){"use strict";var r=l("9bb0"),a=l.n(r);a.a},"56d7":function(t,e,l){"use strict";l.r(e);var r=l("2b0e"),a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{attrs:{id:"app"}},[l("Row",{attrs:{gutter:24}},[l("Col",{staticClass:"mb10",attrs:{span:"12"}},[l("Card",{attrs:{title:"默认标题"}},[l("Title",[t._v("h1 - 标题 文本的基本格式")]),l("Title",{attrs:{level:2}},[t._v("h2 - 标题 文本的基本格式")]),l("Title",{attrs:{level:3}},[t._v("h3 - 标题 文本的基本格式")]),l("Title",{attrs:{level:4}},[t._v("h4 - 标题 文本的基本格式")]),l("Title",{attrs:{level:5}},[t._v("h5 - 标题 文本的基本格式")]),l("Title",{attrs:{level:6}},[t._v("h6 - 标题 文本的基本格式")])],1)],1),l("Col",{staticClass:"mb10",attrs:{span:"12"}},[l("Card",{attrs:{title:"无加粗标题"}},[l("Title",{attrs:{bold:!1}},[t._v("h1 - 标题 文本的基本格式")]),l("Title",{attrs:{bold:!1,level:2}},[t._v("h2 - 标题 文本的基本格式")]),l("Title",{attrs:{bold:!1,level:3}},[t._v("h3 - 标题 文本的基本格式")]),l("Title",{attrs:{bold:!1,level:4}},[t._v("h4 - 标题 文本的基本格式")]),l("Title",{attrs:{bold:!1,level:5}},[t._v("h5 - 标题 文本的基本格式")]),l("Title",{attrs:{bold:!1,level:6}},[t._v("h6 - 标题 文本的基本格式")])],1)],1),l("Col",{staticClass:"mb10",attrs:{span:"12"}},[l("Card",{attrs:{title:"自定义大小与颜色"}},[l("Title",{attrs:{size:"12"}},[t._v("12号 加粗 标题")]),l("Title",{attrs:{bold:!1,size:"18",color:"#2d8cf0"}},[t._v("无加粗18号标题 蓝色")]),l("Title",{attrs:{bold:!1,size:"24",color:"#19be6b"}},[t._v("无加粗18号标题 绿色")]),l("Title",{attrs:{bold:!1,size:"26",color:"#ed4014"}},[t._v("无加粗18号标题 红色")])],1)],1),l("Col",{staticClass:"mb10",attrs:{span:"12"}},[l("Card",{attrs:{title:"卡片类型标题"}},[l("div",{staticStyle:{background:"#f8f8f8",padding:"10px"}},[l("Title",{attrs:{level:"4",bold:!1,card:"line"}},[t._v("线型标题")]),l("br"),l("Title",{attrs:{level:"4",card:"dot"}},[t._v("点型标题")]),l("br"),l("Title",{attrs:{level:"4",bold:!1,card:!0}},[l("Icon",{attrs:{type:"md-happy"}}),t._v(" 自定义图标\n            "),l("Button",{attrs:{slot:"extra",type:"error"},slot:"extra"},[t._v("更多")])],1)],1)])],1)],1)],1)},s=[],n=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"vui-typography"},[t.card?[l("div",{class:"vui-title-card "+t.classNameTitle,style:t.style},["line"===t.card?l("div",{class:"vui-title vui-title-line"},[t._t("default")],2):t._e(),"dot"===t.card?l("div",{class:"vui-title vui-title-dot"},[t._t("default")],2):t._e(),"line"!==t.card&&"dot"!==t.card?l("div",{class:"vui-title"},[t._t("default")],2):t._e(),l("div",{staticClass:"vui-title-extra"},[t._t("extra")],2)])]:[1===t.level?l("h1",{class:t.classNameTitle,style:t.style},[t._t("default")],2):t._e(),2===t.level?l("h2",{class:t.classNameTitle,style:t.style},[t._t("default")],2):t._e(),3===t.level?l("h3",{class:t.classNameTitle,style:t.style},[t._t("default")],2):t._e(),4===t.level?l("h4",{class:t.classNameTitle,style:t.style},[t._t("default")],2):t._e(),5===t.level?l("h5",{class:t.classNameTitle,style:t.style},[t._t("default")],2):t._e(),6===t.level?l("h6",{class:t.classNameTitle,style:t.style},[t._t("default")],2):t._e()]],2)},i=[],o={props:{level:{type:[Number,String],default:1},bold:{type:Boolean,default:!0},size:{type:[Number,String],default:null},color:{type:String,default:null},card:{type:[String,Boolean],default:null}},data:function(){return{}},computed:{style:function(){var t=this.size,e=this.color;return{"font-size":"".concat(t,"px"),color:e}},classNameTitle:function(){var t=this.bold,e=this.level;return"".concat(t?"vui-title-b":""," vui-title-").concat(e)}},methods:{}},c=o,u=(l("3959"),l("2877")),d=Object(u["a"])(c,n,i,!1,null,null,null),v=d.exports,f={components:{Title:v},data:function(){return{}},methods:{}},p=f,b=(l("bd3c"),Object(u["a"])(p,a,s,!1,null,"1cfee49a",null)),_=b.exports,h=l("e069"),y=l.n(h);l("1685");r["default"].use(y.a),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(_)}}).$mount("#app")},"9bb0":function(t,e,l){},bd3c:function(t,e,l){"use strict";var r=l("c88b"),a=l.n(r);a.a},c88b:function(t,e,l){}});