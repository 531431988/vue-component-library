(function(t){function n(n){for(var a,u,i=n[0],l=n[1],o=n[2],d=0,f=[];d<i.length;d++)u=i[d],r[u]&&f.push(r[u][0]),r[u]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(n);while(f.length)f.shift()();return s.push.apply(s,o||[]),e()}function e(){for(var t,n=0;n<s.length;n++){for(var e=s[n],a=!0,i=1;i<e.length;i++){var l=e[i];0!==r[l]&&(a=!1)}a&&(s.splice(n--,1),t=u(u.s=e[0]))}return t}var a={},r={app:0},s=[];function u(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=t,u.c=a,u.d=function(t,n,e){u.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,n){if(1&n&&(t=u(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)u.d(e,a,function(n){return t[n]}.bind(null,a));return e},u.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(n,"a",n),n},u.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},u.p="../";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var o=0;o<i.length;o++)n(i[o]);var c=l;s.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"10c0":function(t,n,e){"use strict";var a=e("ed8c"),r=e.n(a);r.a},2464:function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);var a=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[t._m(0),e("a-row",{attrs:{gutter:14}},[e("a-col",{attrs:{span:"8"}},[e("a-card",{attrs:{title:"count-up组件基础用法"}},[e("count-up",{attrs:{end:2534.368,decimals:2}})],1)],1),e("a-col",{attrs:{span:"8"}},[e("a-card",{attrs:{title:"可添加左右文字"}},[e("count-up",{attrs:{end:2534,useGrouping:!0}},[e("span",{attrs:{slot:"left"},slot:"left"},[t._v("总金额: ")]),e("span",{attrs:{slot:"right"},slot:"right"},[t._v(" 元")])])],1)],1),e("a-col",{staticClass:"padding-left-10",attrs:{span:"8"}},[e("a-card",{attrs:{title:"自定义样式"}},[e("count-up",{attrs:{end:2534,"count-class":"count-text","unit-class":"unit-class"}},[e("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("共计: ")]),e("span",{staticClass:"slot-text",attrs:{slot:"right"},slot:"right"},[t._v(" 秒")])])],1)],1)],1),e("a-row",{staticStyle:{"margin-top":"14px"},attrs:{gutter:14}},[e("a-col",{staticClass:"padding-left-10",attrs:{span:"8"}},[e("a-card",{attrs:{title:"设置数据格式"}},[e("count-up",{attrs:{end:2534,"count-class":"count-text","unit-class":"unit-class",decimals:2}},[e("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("Total: ")]),e("span",{staticClass:"slot-text",attrs:{slot:"right"},slot:"right"},[t._v(" times")])])],1)],1),e("a-col",{staticClass:"padding-left-10",attrs:{span:"8"}},[e("a-card",{attrs:{title:" 可异步更新数据"}},[e("count-up",{attrs:{end:t.asynEndVal,"count-class":"count-text","unit-class":"unit-class"}},[e("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("Total: ")]),e("span",{staticClass:"slot-text",attrs:{slot:"right"},slot:"right"},[t._v(" times")])])],1)],1),e("a-col",{attrs:{span:"8"}},[e("a-card",{attrs:{title:"转换单位简化数据"}},[e("count-up",{attrs:{simplify:!0,end:2534,"count-class":"count-text","unit-class":"unit-class"}},[e("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("Total: ")]),e("span",{staticClass:"slot-text",attrs:{slot:"right"},slot:"right"},[t._v(" times")])])],1)],1)],1),e("a-row",{staticStyle:{"margin-top":"14px"},attrs:{gutter:14}},[e("a-col",{staticClass:"padding-left-10",attrs:{span:"18"}},[e("a-card",{attrs:{title:"自定义单位"}},[e("count-up",{attrs:{simplify:!0,unit:t.unit,end:253,"count-class":"count-text","unit-class":"unit-class"}},[e("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("原始数据：253 => ")])]),e("count-up",{attrs:{simplify:!0,unit:t.unit,end:2534,"count-class":"count-text","unit-class":"unit-class"}},[e("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("原始数据：2534 => ")])]),e("count-up",{attrs:{simplify:!0,unit:t.unit,end:257678,"count-class":"count-text","unit-class":"unit-class"}},[e("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("原始数据：257678 => ")])])],1)],1),e("a-col",{attrs:{span:"6"}},[e("a-card",{attrs:{title:"综合实例"}},[e("count-up",{attrs:{delay:500,simplify:!0,unit:t.unit2,end:t.integratedEndVal,"count-class":"count-text","unit-class":"unit-class"}},[e("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("原始数据: "+t._s(t.integratedEndVal)+" => ")]),e("span",{staticClass:"slot-text",attrs:{slot:"right"},slot:"right"},[t._v(" times")])])],1)],1)],1)],1)},s=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h3",[t._v("\n    基于countUp.js\n    "),e("a",{attrs:{href:"https://github.com/inorganik/countUp.js"}},[t._v("API请查看")])])}],u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vui-count-to-wrapper"},[t._t("left"),e("span",{staticClass:"content-outer"},[e("span",{class:["count-to-count-text",t.countClass],attrs:{id:t.counterId}},[t._v(t._s(t.init))]),e("i",{class:["count-to-unit-text",t.unitClass]},[t._v(t._s(t.unitText))])]),t._t("right")],2)},i=[],l=e("57f2"),o=e.n(l),c={name:"CountTo",props:{init:{type:Number,default:0},startVal:{type:Number,default:0},end:{type:Number,required:!0},decimals:{type:Number,default:0},decimal:{type:String,default:"."},duration:{type:Number,default:2},delay:{type:Number,default:0},useEasing:{type:Boolean,default:!1},useGrouping:{type:Boolean,default:!1},separator:{type:String,default:","},simplify:{type:Boolean,default:!1},unit:{type:Array,default:function(){return[[3,"K+"],[6,"M+"],[9,"B+"]]}},countClass:{type:String,default:""},unitClass:{type:String,default:""}},data:function(){return{counter:null,unitText:""}},computed:{counterId:function(){return"count_to_".concat(this._uid)}},methods:{getHandleVal:function(t,n){return{endVal:parseInt(t/Math.pow(10,this.unit[n-1][0])),unitText:this.unit[n-1][1]}},transformValue:function(t){var n=this.unit.length,e={endVal:0,unitText:""};if(t<Math.pow(10,this.unit[0][0]))e.endVal=t;else for(var a=1;a<n;a++)t>=Math.pow(10,this.unit[a-1][0])&&t<Math.pow(10,this.unit[a][0])&&(e=this.getHandleVal(t,a));return t>Math.pow(10,this.unit[n-1][0])&&(e=this.getHandleVal(t,n)),e},getValue:function(t){var n=0;if(this.simplify){var e=this.transformValue(t),a=e.endVal,r=e.unitText;this.unitText=r,n=a}else n=t;return n}},mounted:function(){var t=this;this.$nextTick(function(){var n=t.getValue(t.end);t.counter=new o.a(t.counterId,t.startVal,n,t.decimals,t.duration,{useEasing:t.useEasing,useGrouping:t.useGrouping,separator:t.separator,decimal:t.decimal}),setTimeout(function(){t.counter.error||t.counter.start()},t.delay)})},watch:{end:function(t){var n=this.getValue(t);this.counter.update(n)}}},d=c,f=(e("10c0"),e("2877")),p=Object(f["a"])(d,u,i,!1,null,"5631a3e9",null),v=p.exports,h={components:{CountUp:v},data:function(){return{end:0,unit:[[3,"千多"],[4,"万多"],[5,"十万多"]],unit2:[[1,"十多"],[2,"百多"],[3,"千多"],[4,"万多"],[5,"十万多"],[6,"百万多"],[7,"千万多"],[8,"亿多"]],asynEndVal:487,integratedEndVal:3}},methods:{init:function(){var t=this;setInterval(function(){t.asynEndVal+=parseInt(20*Math.random()),t.integratedEndVal+=parseInt(30*Math.random())},2e3)}},mounted:function(){this.init()}},g=h,m=(e("7c55"),Object(f["a"])(g,r,s,!1,null,null,null)),y=m.exports,C=(e("6ba6"),e("5efb")),b=(e("288f"),e("cdeb")),O=(e("0032"),e("e32c")),x=(e("de6a"),e("9a63")),_={Row:x["a"],Col:O["a"],Card:b["a"],Button:C["a"]};Object.keys(_).forEach(function(t){a["a"].component(_[t].name,_[t])}),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(y)}}).$mount("#app")},"7c55":function(t,n,e){"use strict";var a=e("2464"),r=e.n(a);r.a},ec8c:function(t,n,e){"use strict";e.r(n);var a=e("462e"),r=e.n(a);e.d(n,"SmileOutline",function(){return r.a});var s=e("b62d"),u=e.n(s);e.d(n,"MehOutline",function(){return u.a});var i=e("bb89"),l=e.n(i);e.d(n,"UserOutline",function(){return l.a});var o=e("d2dc"),c=e.n(o);e.d(n,"LockOutline",function(){return c.a});var d=e("e190"),f=e.n(d);e.d(n,"CloseOutline",function(){return f.a});var p=e("a002"),v=e.n(p);e.d(n,"CheckOutline",function(){return v.a});var h=e("96a4"),g=e.n(h);e.d(n,"LoadingOutline",function(){return g.a});var m=e("5745"),y=e.n(m);e.d(n,"CheckCircleOutline",function(){return y.a});var C=e("bff2"),b=e.n(C);e.d(n,"InfoCircleOutline",function(){return b.a});var O=e("e2b6"),x=e.n(O);e.d(n,"CloseCircleOutline",function(){return x.a});var _=e("bea9"),w=e.n(_);e.d(n,"ExclamationCircleOutline",function(){return w.a});var V=e("18be"),E=e.n(V);e.d(n,"CheckCircleFill",function(){return E.a});var T=e("b3e1"),S=e.n(T);e.d(n,"InfoCircleFill",function(){return S.a});var j=e("f942"),M=e.n(j);e.d(n,"CloseCircleFill",function(){return M.a});var k=e("0887"),I=e.n(k);e.d(n,"ExclamationCircleFill",function(){return I.a});var P=e("1de7"),F=e.n(P);e.d(n,"UpOutline",function(){return F.a});var B=e("a877"),N=e.n(B);e.d(n,"DownOutline",function(){return N.a});var U=e("7c63"),$=e.n(U);e.d(n,"LeftOutline",function(){return $.a});var G=e("c5c6"),D=e.n(G);e.d(n,"RightOutline",function(){return D.a});var H=e("2b31"),L=e.n(H);e.d(n,"RedoOutline",function(){return L.a});var R=e("ef32"),A=e.n(R);e.d(n,"CalendarOutline",function(){return A.a});var J=e("7386"),q=e.n(J);e.d(n,"SearchOutline",function(){return q.a});var K=e("4684"),z=e.n(K);e.d(n,"BarsOutline",function(){return z.a});var Q=e("7067"),W=e.n(Q);e.d(n,"StarFill",function(){return W.a});var X=e("befd"),Y=e.n(X);e.d(n,"FilterOutline",function(){return Y.a});var Z=e("1964"),tt=e.n(Z);e.d(n,"CaretUpOutline",function(){return tt.a});var nt=e("b4a1"),et=e.n(nt);e.d(n,"CaretDownOutline",function(){return et.a});var at=e("dede"),rt=e.n(at);e.d(n,"PlusOutline",function(){return rt.a});var st=e("3950"),ut=e.n(st);e.d(n,"FileOutline",function(){return ut.a});var it=e("a40d"),lt=e.n(it);e.d(n,"FolderOpenOutline",function(){return lt.a});var ot=e("4372"),ct=e.n(ot);e.d(n,"FolderOutline",function(){return ct.a});var dt=e("2064"),ft=e.n(dt);e.d(n,"PaperClipOutline",function(){return ft.a});var pt=e("138c"),vt=e.n(pt);e.d(n,"PictureOutline",function(){return vt.a});var ht=e("29ac"),gt=e.n(ht);e.d(n,"EyeOutline",function(){return gt.a});var mt=e("8b66"),yt=e.n(mt);e.d(n,"DeleteOutline",function(){return yt.a})},ed8c:function(t,n,e){}});