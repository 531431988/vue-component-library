(function(t){function n(n){for(var r,i,u=n[0],s=n[1],p=n[2],c=0,f=[];c<u.length;c++)i=u[c],o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(n);while(f.length)f.shift()();return a.push.apply(a,p||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],r=!0,u=1;u<e.length;u++){var s=e[u];0!==o[s]&&(r=!1)}r&&(a.splice(n--,1),t=i(i.s=e[0]))}return t}var r={},o={app:0},a=[];function i(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)i.d(e,r,function(n){return t[n]}.bind(null,r));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="../";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var p=0;p<u.length;p++)n(u[p]);var l=s;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0438":function(t,n,e){},1685:function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);var r=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("Row",{attrs:{gutter:24}},[e("Col",{attrs:{span:"8"}},[e("Loading",{attrs:{type:"1"}})],1),e("Col",{attrs:{span:"8"}},[e("Loading",{attrs:{type:"2"}})],1),e("Col",{attrs:{span:"8"}},[e("Loading",{attrs:{type:"3"}})],1)],1),e("br"),e("br"),e("Row",{attrs:{gutter:24}},[e("Col",{attrs:{span:"8"}},[e("Loading",{attrs:{type:"4"}})],1),e("Col",{attrs:{span:"8"}},[e("Loading",{attrs:{type:"5"}})],1),e("Col",{attrs:{span:"8"}},[e("Loading",{attrs:{type:"6"}})],1)],1),e("br"),e("br"),e("Card",{attrs:{title:"配合Spin组件使用效果"}},[e("h3",[t._v("登金陵凤凰台")]),e("address",[t._v("李白")]),e("article",[e("p",[t._v("凤凰台上凤凰游，凤去台空江自流。")]),e("p",[t._v("吴宫花草埋幽径，晋代衣冠成古丘。")]),e("p",[t._v("三山半落青天外，二水中分白鹭洲。")]),e("p",[t._v("总为浮云能蔽日，长安不见使人愁。")])]),t.spinShow?e("Spin",{attrs:{fix:""}},[e("Loading",{attrs:{type:"6"}})],1):t._e()],1),e("br"),t._v("切换显示状态：\n  "),e("i-switch",{on:{"on-change":function(n){t.spinShow=!t.spinShow}}})],1)},a=[],i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vui-loading"},[t._l(t.element,function(n,r){return r+1===parseInt(t.type)?e("div",{key:r,class:"container animation-"+(r+1)},t._l(n,function(t,n){return e("div",{key:n,class:"shape shape"+(n+1)})}),0):t._e()}),e("div",[t._v(t._s(t.text))])],2)},u=[],s={props:{type:{type:[Number,String],default:4},text:{type:String,default:"玩命加载中"}},components:{},data:function(){return{element:new Array(6).fill(4)}},methods:{}},p=s,l=(e("b643"),e("2877")),c=Object(l["a"])(p,i,u,!1,null,"49341087",null),f=c.exports,d={components:{Loading:f},data:function(){return{spinShow:!0}},methods:{}},v=d,b=(e("f031"),Object(l["a"])(v,o,a,!1,null,"9d8ece1c",null)),y=b.exports,h=e("e069"),g=e.n(h);e("1685");r["default"].use(g.a),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(y)}}).$mount("#app")},"76bf":function(t,n,e){},b643:function(t,n,e){"use strict";var r=e("0438"),o=e.n(r);o.a},f031:function(t,n,e){"use strict";var r=e("76bf"),o=e.n(r);o.a}});