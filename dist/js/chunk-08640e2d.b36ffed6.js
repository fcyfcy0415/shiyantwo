(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08640e2d"],{1454:function(t,e,s){"use strict";var i=s("245e"),a=s.n(i);a.a},"245e":function(t,e,s){},"37b1":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.list,(function(t){return s("div",{key:t.id,staticClass:"list"},[s("MyFinance",{attrs:{item:t}})],1)})),0)},a=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"listitem"},[s("div",{staticClass:"title"},[t._v(t._s(t.item.title))]),s("div",{staticClass:"type"},[t._v(t._s(t.item.typex))]),s("div",{staticClass:"finance"},[s("div",{staticClass:"finBox"},[s("div",{staticClass:"dataNum"},[t._v(t._s(t.item.numberone))]),s("div",{staticClass:"dataTle"},[t._v(t._s(t.item.dataTleOne))])]),s("div",{staticClass:"finBox"},[s("div",{staticClass:"dataNum"},[t._v(t._s(t.item.numbertwo))]),s("div",{staticClass:"dataTle"},[t._v(t._s(t.item.dataTleTwo))])]),s("div",{staticClass:"finBox"},[s("div",{staticClass:"dataNum"},[t._v(t._s(t.item.date))]),s("div",{staticClass:"dataTle"},[t._v(t._s(t.item.dataTleThree))])])])])},c=[],o={name:"",components:{},props:{item:{type:Object,default:function(){return[]}}},data:function(){return{}},watch:{},computed:{},created:function(){},mounted:function(){},destoryed:function(){},methods:{}},d=o,l=(s("1454"),s("2877")),u=Object(l["a"])(d,n,c,!1,null,"50623724",null),r=u.exports,f={name:"",components:{MyFinance:r},props:{},data:function(){return{list:"",res:""}},watch:{},computed:{},created:function(){},mounted:function(){this.getData()},destoryed:function(){},methods:{getData:function(){window.console.log("卧槽泥马，我执行了");var t=this;this.axios.get("/financeposts").then((function(e){window.console.log("卧槽泥马，我执行了",e),t.list=e.data.posts,t.res=e}))}}},v=f,m=(s("f6fd"),Object(l["a"])(v,i,a,!1,null,"19cdd3c3",null));e["default"]=m.exports},"76f1":function(t,e,s){},f6fd:function(t,e,s){"use strict";var i=s("76f1"),a=s.n(i);a.a}}]);
//# sourceMappingURL=chunk-08640e2d.b36ffed6.js.map