import{_ as m,j as p,r as n,P as i,k as f,m as d,n as a,p as g,q as r,Q as l}from"./index.35040526.js";import{Q as w}from"./QSpace.02903370.js";import{a as v,Q as D,b as s}from"./QDrawer.2802aef9.js";import{Q,a as c}from"./QLayout.069b59e3.js";import{u as h}from"./store.2d87b0a3.js";import"./QResizeObserver.9bd0163f.js";import"./use-prevent-scroll.10b46c17.js";import"./scroll.48f4cef5.js";import"./use-timeout.bbe4dec2.js";import"./use-dark.b0ad4c8a.js";import"./TouchPan.81b66151.js";import"./selection.1660419c.js";import"./firebase.8769ab52.js";import"./axios.84ae42e4.js";const C=p({name:"DemoLayout",components:{},setup(){const e=n(!1),o=n(!1);return{store:h(),leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value},rightDrawerOpen:o,toggleRightDrawer(){o.value=!o.value}}},mounted(){i.isActive||i.toggle(),this.store.goDemo()}});function b(e,o,k,V,O,L){const u=g("router-view");return f(),d(Q,{view:"hHh lpR fFf"},{default:a(()=>[r(D,{bordered:"",class:"bg-positive text-white"},{default:a(()=>[r(v,null,{default:a(()=>[r(l,{flat:"",round:"",icon:"menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),r(w),r(l,{flat:"",round:"",icon:"logout",onClick:o[0]||(o[0]=t=>this.store.logout())}),r(l,{flat:"",round:"",icon:"menu",onClick:e.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),r(s,{"show-if-above":"",modelValue:e.leftDrawerOpen,"onUpdate:modelValue":o[1]||(o[1]=t=>e.leftDrawerOpen=t),side:"left",bordered:""},null,8,["modelValue"]),r(s,{"show-if-above":"",modelValue:e.rightDrawerOpen,"onUpdate:modelValue":o[2]||(o[2]=t=>e.rightDrawerOpen=t),side:"right",bordered:""},null,8,["modelValue"]),r(c,null,{default:a(()=>[r(u)]),_:1})]),_:1})}var T=m(C,[["render",b]]);export{T as default};
