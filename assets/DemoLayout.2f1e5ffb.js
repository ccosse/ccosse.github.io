import{_ as m,j as p,r as n,P as i,k as f,m as d,n as a,p as g,q as r,Q as l}from"./index.a39a3bc7.js";import{Q as w}from"./QSpace.d0464193.js";import{a as v,Q as D,b as s}from"./QDrawer.a15d2b9b.js";import{a as c,b as Q}from"./QLayout.f46c15e0.js";import{u as b}from"./store.f8e04343.js";import"./use-prevent-scroll.39f65783.js";import"./scroll.2850d4c7.js";import"./use-timeout.52cafccb.js";import"./use-dark.a32dcea4.js";import"./TouchPan.26d8aeb8.js";import"./touch.70a9dd44.js";import"./selection.f7fd9620.js";import"./firebase.8769ab52.js";import"./axios.84ae42e4.js";const h=p({name:"DemoLayout",components:{},setup(){const e=n(!1),o=n(!1);return{store:b(),leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value},rightDrawerOpen:o,toggleRightDrawer(){o.value=!o.value}}},mounted(){i.isActive||i.toggle(),this.store.goDemo()}});function C(e,o,k,V,O,L){const u=g("router-view");return f(),d(c,{view:"hHh lpR fFf"},{default:a(()=>[r(D,{bordered:"",class:"bg-positive text-white"},{default:a(()=>[r(v,null,{default:a(()=>[r(l,{flat:"",round:"",icon:"menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),r(w),r(l,{flat:"",round:"",icon:"logout",onClick:o[0]||(o[0]=t=>this.store.logout())}),r(l,{flat:"",round:"",icon:"menu",onClick:e.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),r(s,{"show-if-above":"",modelValue:e.leftDrawerOpen,"onUpdate:modelValue":o[1]||(o[1]=t=>e.leftDrawerOpen=t),side:"left",bordered:""},null,8,["modelValue"]),r(s,{"show-if-above":"",modelValue:e.rightDrawerOpen,"onUpdate:modelValue":o[2]||(o[2]=t=>e.rightDrawerOpen=t),side:"right",bordered:""},null,8,["modelValue"]),r(Q,null,{default:a(()=>[r(u)]),_:1})]),_:1})}var T=m(h,[["render",C]]);export{T as default};
