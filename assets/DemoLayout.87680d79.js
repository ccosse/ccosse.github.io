import{_ as m,j as p,r as n,P as i,k as f,m as d,n as a,p as g,q as o,Q as l}from"./index.d4bce792.js";import{Q as w}from"./QSpace.ade92697.js";import{a as v,Q as D,b as s}from"./QDrawer.ef96324b.js";import{a as C,b as Q}from"./QLayout.340ec27f.js";import{u as b}from"./store.dd29ed04.js";import"./use-prevent-scroll.fc875166.js";import"./scroll.355754f0.js";import"./use-model-toggle.008f7731.js";import"./use-timeout.7bd39ff2.js";import"./use-dark.4501b55c.js";import"./TouchPan.1671637c.js";import"./touch.70a9dd44.js";import"./selection.d07f3277.js";import"./firebase.dc843dde.js";import"./axios.84ae42e4.js";const h=p({name:"DemoLayout",components:{},setup(){const r=n(!1),e=n(!1);return{store:b(),leftDrawerOpen:r,toggleLeftDrawer(){r.value=!r.value},rightDrawerOpen:e,toggleRightDrawer(){e.value=!e.value}}},mounted(){i.isActive||i.toggle(),this.store.goDemo()}});function k(r,e,c,V,O,$){const u=g("router-view");return f(),d(C,{view:"hHh lpR fFf"},{default:a(()=>[o(D,{bordered:"",class:"bg-positive text-white"},{default:a(()=>[o(v,null,{default:a(()=>[o(l,{flat:"",round:"",icon:"menu",onClick:r.toggleLeftDrawer},null,8,["onClick"]),o(l,{flat:"",round:"",icon:"home",onClick:e[0]||(e[0]=t=>this.store.goHome())}),o(w),o(l,{flat:"",round:"",icon:"logout",onClick:e[1]||(e[1]=t=>this.store.logout())}),o(l,{flat:"",round:"",icon:"menu",onClick:r.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),o(s,{"show-if-above":"",modelValue:r.leftDrawerOpen,"onUpdate:modelValue":e[2]||(e[2]=t=>r.leftDrawerOpen=t),side:"left",bordered:""},null,8,["modelValue"]),o(s,{"show-if-above":"",modelValue:r.rightDrawerOpen,"onUpdate:modelValue":e[3]||(e[3]=t=>r.rightDrawerOpen=t),side:"right",bordered:""},null,8,["modelValue"]),o(Q,null,{default:a(()=>[o(u)]),_:1})]),_:1})}var z=m(h,[["render",k]]);export{z as default};