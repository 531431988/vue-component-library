(function(t){function s(s){for(var e,r,u=s[0],i=s[1],o=s[2],p=0,d=[];p<u.length;p++)r=u[p],a[r]&&d.push(a[r][0]),a[r]=0;for(e in i)Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e]);c&&c(s);while(d.length)d.shift()();return l.push.apply(l,o||[]),n()}function n(){for(var t,s=0;s<l.length;s++){for(var n=l[s],e=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(e=!1)}e&&(l.splice(s--,1),t=r(r.s=n[0]))}return t}var e={},a={app:0},l=[];function r(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,s,n){r.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,s){if(1&s&&(t=r(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)r.d(n,e,function(s){return t[s]}.bind(null,e));return n},r.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="../";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=s,u=u.slice();for(var o=0;o<u.length;o++)s(u[o]);var c=i;l.push([0,"chunk-vendors"]),n()})({0:function(t,s,n){t.exports=n("56d7")},"10c0":function(t,s,n){"use strict";var e=n("2d7a"),a=n.n(e);a.a},1685:function(t,s,n){},"2d7a":function(t,s,n){},"56d7":function(t,s,n){"use strict";n.r(s);var e=n("2b0e"),a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{attrs:{id:"app"}},[t._m(0),n("Row",{attrs:{gutter:14}},[n("Col",{attrs:{span:"8"}},[n("Card",{attrs:{title:"count-up组件基础用法"}},[n("count-up",{attrs:{end:2534.368,decimals:2}})],1)],1),n("Col",{attrs:{span:"8"}},[n("Card",{attrs:{title:"可添加左右文字"}},[n("count-up",{attrs:{end:2534,useGrouping:!0}},[n("span",{attrs:{slot:"left"},slot:"left"},[t._v("总金额: ")]),n("span",{attrs:{slot:"right"},slot:"right"},[t._v(" 元")])])],1)],1),n("Col",{staticClass:"padding-left-10",attrs:{span:"8"}},[n("Card",{attrs:{title:"自定义样式"}},[n("count-up",{attrs:{end:2534,"count-class":"count-text","unit-class":"unit-class"}},[n("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("共计: ")]),n("span",{staticClass:"slot-text",attrs:{slot:"right"},slot:"right"},[t._v(" 秒")])])],1)],1)],1),n("Row",{staticStyle:{"margin-top":"14px"},attrs:{gutter:14}},[n("Col",{staticClass:"padding-left-10",attrs:{span:"8"}},[n("Card",{attrs:{title:"设置数据格式"}},[n("count-up",{attrs:{end:2534,"count-class":"count-text","unit-class":"unit-class",decimals:2}},[n("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("Total: ")]),n("span",{staticClass:"slot-text",attrs:{slot:"right"},slot:"right"},[t._v(" times")])])],1)],1),n("Col",{staticClass:"padding-left-10",attrs:{span:"8"}},[n("Card",{attrs:{title:" 可异步更新数据"}},[n("count-up",{attrs:{end:t.asynEndVal,"count-class":"count-text","unit-class":"unit-class"}},[n("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("Total: ")]),n("span",{staticClass:"slot-text",attrs:{slot:"right"},slot:"right"},[t._v(" times")])])],1)],1),n("Col",{attrs:{span:"8"}},[n("Card",{attrs:{title:"转换单位简化数据"}},[n("count-up",{attrs:{simplify:!0,end:2534,"count-class":"count-text","unit-class":"unit-class"}},[n("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("Total: ")]),n("span",{staticClass:"slot-text",attrs:{slot:"right"},slot:"right"},[t._v(" times")])])],1)],1)],1),n("Row",{staticStyle:{"margin-top":"14px"},attrs:{gutter:14}},[n("Col",{staticClass:"padding-left-10",attrs:{span:"18"}},[n("Card",{attrs:{title:"自定义单位"}},[n("count-up",{attrs:{simplify:!0,unit:t.unit,end:253,"count-class":"count-text","unit-class":"unit-class"}},[n("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("原始数据：253 => ")])]),n("count-up",{attrs:{simplify:!0,unit:t.unit,end:2534,"count-class":"count-text","unit-class":"unit-class"}},[n("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("原始数据：2534 => ")])]),n("count-up",{attrs:{simplify:!0,unit:t.unit,end:257678,"count-class":"count-text","unit-class":"unit-class"}},[n("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("原始数据：257678 => ")])])],1)],1),n("Col",{attrs:{span:"6"}},[n("Card",{attrs:{title:"综合实例"}},[n("count-up",{attrs:{delay:500,simplify:!0,unit:t.unit2,end:t.integratedEndVal,"count-class":"count-text","unit-class":"unit-class"}},[n("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("原始数据: "+t._s(t.integratedEndVal)+" => ")]),n("span",{staticClass:"slot-text",attrs:{slot:"right"},slot:"right"},[t._v(" times")])])],1)],1)],1)],1)},l=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("h3",[t._v("\n    基于countUp.js\n    "),n("a",{attrs:{href:"https://github.com/inorganik/countUp.js"}},[t._v("API请查看")])])}],r=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"vui-count-to-wrapper"},[t._t("left"),n("span",{staticClass:"content-outer"},[n("span",{class:["count-to-count-text",t.countClass],attrs:{id:t.counterId}},[t._v(t._s(t.init))]),n("i",{class:["count-to-unit-text",t.unitClass]},[t._v(t._s(t.unitText))])]),t._t("right")],2)},u=[],i=n("57f2"),o=n.n(i),c={name:"CountTo",props:{init:{type:Number,default:0},startVal:{type:Number,default:0},end:{type:Number,required:!0},decimals:{type:Number,default:0},decimal:{type:String,default:"."},duration:{type:Number,default:2},delay:{type:Number,default:0},useEasing:{type:Boolean,default:!1},useGrouping:{type:Boolean,default:!1},separator:{type:String,default:","},simplify:{type:Boolean,default:!1},unit:{type:Array,default:function(){return[[3,"K+"],[6,"M+"],[9,"B+"]]}},countClass:{type:String,default:""},unitClass:{type:String,default:""}},data:function(){return{counter:null,unitText:""}},computed:{counterId:function(){return"count_to_".concat(this._uid)}},methods:{getHandleVal:function(t,s){return{endVal:parseInt(t/Math.pow(10,this.unit[s-1][0])),unitText:this.unit[s-1][1]}},transformValue:function(t){var s=this.unit.length,n={endVal:0,unitText:""};if(t<Math.pow(10,this.unit[0][0]))n.endVal=t;else for(var e=1;e<s;e++)t>=Math.pow(10,this.unit[e-1][0])&&t<Math.pow(10,this.unit[e][0])&&(n=this.getHandleVal(t,e));return t>Math.pow(10,this.unit[s-1][0])&&(n=this.getHandleVal(t,s)),n},getValue:function(t){var s=0;if(this.simplify){var n=this.transformValue(t),e=n.endVal,a=n.unitText;this.unitText=a,s=e}else s=t;return s}},mounted:function(){var t=this;this.$nextTick(function(){var s=t.getValue(t.end);t.counter=new o.a(t.counterId,t.startVal,s,t.decimals,t.duration,{useEasing:t.useEasing,useGrouping:t.useGrouping,separator:t.separator,decimal:t.decimal}),setTimeout(function(){t.counter.error||t.counter.start()},t.delay)})},watch:{end:function(t){var s=this.getValue(t);this.counter.update(s)}}},p=c,d=(n("10c0"),n("2877")),f=Object(d["a"])(p,r,u,!1,null,"5631a3e9",null),h=f.exports,g={components:{CountUp:h},data:function(){return{end:0,unit:[[3,"千多"],[4,"万多"],[5,"十万多"]],unit2:[[1,"十多"],[2,"百多"],[3,"千多"],[4,"万多"],[5,"十万多"],[6,"百万多"],[7,"千万多"],[8,"亿多"]],asynEndVal:487,integratedEndVal:3}},methods:{init:function(){var t=this;setInterval(function(){t.asynEndVal+=parseInt(20*Math.random()),t.integratedEndVal+=parseInt(30*Math.random())},2e3)}},mounted:function(){this.init()}},v=g,m=(n("7c55"),Object(d["a"])(v,a,l,!1,null,null,null)),y=m.exports,C=n("e069"),x=n.n(C);n("1685");e["default"].use(x.a),e["default"].config.productionTip=!1,new e["default"]({render:function(t){return t(y)}}).$mount("#app")},"5ba3":function(t,s,n){},"7c55":function(t,s,n){"use strict";var e=n("5ba3"),a=n.n(e);a.a}});