import{_ as m,j as p,r as n,P as i,k as f,m as d,n as a,p as g,q as o,Q as l}from"./index.755db7c1.js";import{b as w,Q as v,a as D}from"./QHeader.8e335dc9.js";import{Q as s}from"./QDrawer.320bc07f.js";import{a as C,b as Q}from"./QLayout.a9ac2aa3.js";import{u as b}from"./store.27a88b83.js";import"./use-prevent-scroll.4d2f7cc5.js";import"./scroll.e197106c.js";import"./use-model-toggle.fdaba528.js";import"./use-timeout.63ff842c.js";import"./use-dark.3dbfdb2f.js";import"./TouchPan.ff87097b.js";import"./touch.70a9dd44.js";import"./selection.15c6a32b.js";import"./firebase.dc843dde.js";import"./axios.84ae42e4.js";const h=p({name:"DemoLayout",components:{},setup(){const r=n(!1),e=n(!1);return{store:b(),leftDrawerOpen:r,toggleLeftDrawer(){r.value=!r.value},rightDrawerOpen:e,toggleRightDrawer(){e.value=!e.value}}},mounted(){i.isActive||i.toggle(),this.store.goDemo()}});function k(r,e,c,V,O,$){const u=g("router-view");return f(),d(C,{view:"hHh lpR fFf"},{default:a(()=>[o(D,{bordered:"",class:"bg-positive text-white"},{default:a(()=>[o(w,null,{default:a(()=>[o(l,{flat:"",round:"",icon:"menu",onClick:r.toggleLeftDrawer},null,8,["onClick"]),o(l,{flat:"",round:"",icon:"home",onClick:e[0]||(e[0]=t=>this.store.goHome())}),o(v),o(l,{flat:"",round:"",icon:"logout",onClick:e[1]||(e[1]=t=>this.store.logout())}),o(l,{flat:"",round:"",icon:"menu",onClick:r.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),o(s,{"show-if-above":"",modelValue:r.leftDrawerOpen,"onUpdate:modelValue":e[2]||(e[2]=t=>r.leftDrawerOpen=t),side:"left",bordered:""},null,8,["modelValue"]),o(s,{"show-if-above":"",modelValue:r.rightDrawerOpen,"onUpdate:modelValue":e[3]||(e[3]=t=>r.rightDrawerOpen=t),side:"right",bordered:""},null,8,["modelValue"]),o(Q,null,{default:a(()=>[o(u)]),_:1})]),_:1})}var z=m(h,[["render",k]]);export{z as default};
