(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b996264"],{"1e4b":function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[t._m(0),n("Card",{staticClass:"tags",attrs:{shadow:""}},t._l(t.tags,function(a,s){return n("Button",{key:s,attrs:{type:a.checked?"primary":"dashed",shape:"circle"},on:{click:function(n){return t.onClick(a,s)}}},[t._v(t._s(a.label)+" "+t._s(a.number))])}),1),n("div",{staticClass:"pd20"},[n("Row",{attrs:{gutter:24}},t._l(t.list,function(a,s){return n("Col",{key:s,attrs:{xs:24,sm:12,md:8,lg:6}},[n("Card",{staticClass:"list-card mb20",attrs:{shadow:"",padding:0}},[n("div",{staticClass:"tc"},[n("img",{staticStyle:{height:"200px"},attrs:{width:"100%",src:"https://531431988.github.io/vue-component-library/components/"+a.info.name+"/thumbnail.png"}}),n("Divider"),n("div",{staticClass:"pb10"},[t._v(t._s(a.info.title))]),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg"}},[n("line",{staticClass:"top",attrs:{x1:"100%",y1:"0",x2:"200%",y2:"0"}}),n("line",{staticClass:"right",attrs:{x1:"100%",y1:"100%",x2:"100%",y2:"200%"}}),n("line",{staticClass:"bottom",attrs:{x1:"0",y1:"100%",x2:"-100%",y2:"100%"}}),n("line",{staticClass:"left",attrs:{x1:"0",y1:"0",x2:"0",y2:"-100%"}})])],1),n("div",{staticClass:"toolbar tc"},[n("a",{attrs:{href:"https://531431988.github.io/vue-component-library/components/"+a.info.name+"/dist/index.html",target:"_blank"}},[n("Button",{staticClass:"mr20",attrs:{type:"dashed",ghost:""}},[t._v("预览")])],1),n("a",{attrs:{href:"https://github.com/531431988/vue-component-library/tree/master/components/"+a.info.name,target:"_blank"}},[n("Button",{attrs:{type:"primary"}},[t._v("查看代码")])],1)])])],1)}),1)],1),n("BackTop")],1)},e=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"banner tc"},[n("h1",[t._v("一个基于IVIEW UI框架的海量组件库")]),n("p",{staticClass:"mt10"},[t._v("快速组合搭建应用，减少重复的开发，提升效率")])])}];function i(t){return o(t)||c(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function o(t){if(Array.isArray(t)){for(var a=0,n=new Array(t.length);a<t.length;a++)n[a]=t[a];return n}}var l={components:{},data:function(){return{allData:[],list:[],tags:[]}},created:function(){var t=this,a=[],n=null;this.$get("componentsTree.json").then(function(s){for(var e in t.allData=s,t.list=s,s.forEach(function(t){a=[].concat(i(a),i(t.info.tags))}),n=a.reduce(function(t,a){return t[a]?t[a]++:t[a]=1,t},{}),n)t.tags.push({label:e,number:n[e],checked:!1});t.tags.unshift({label:"全部",checked:!0,number:t.allData.length})})},methods:{onClick:function(t,a){var n=this;this.tags.map(function(t){t.checked=!1}),t.checked=!t.checked,a?(this.list=[],this.allData.forEach(function(a){a.info.tags.indexOf(t.label)>-1&&n.list.push(a)})):this.list=this.allData}}},u=l,h=(n("9de6"),n("2152"),n("2877")),f=Object(h["a"])(u,s,e,!1,null,"479cfd35",null);a["default"]=f.exports},2152:function(t,a,n){"use strict";var s=n("f8e8"),e=n.n(s);e.a},"57da":function(t,a,n){},"9de6":function(t,a,n){"use strict";var s=n("57da"),e=n.n(s);e.a},f8e8:function(t,a,n){}}]);