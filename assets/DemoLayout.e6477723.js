import{_ as m,j as p,r as n,P as i,k as f,m as d,n as a,p as g,q as o,Q as l}from"./index.94f37b33.js";import{Q as w}from"./QSpace.48130241.js";import{a as v,Q as D,b as s}from"./QDrawer.50184d34.js";import{a as C,b as Q}from"./QLayout.cf236465.js";import{u as b}from"./store.7ea10a67.js";import"./use-prevent-scroll.58349ca5.js";import"./scroll.6d597e53.js";import"./use-model-toggle.bfa68399.js";import"./use-timeout.ff5d1f30.js";import"./use-dark.24a1bebd.js";import"./TouchPan.0bbcfd77.js";import"./touch.70a9dd44.js";import"./selection.198a0e6c.js";import"./firebase.dc843dde.js";import"./axios.84ae42e4.js";const h=p({name:"DemoLayout",components:{},setup(){const r=n(!1),e=n(!1);return{store:b(),leftDrawerOpen:r,toggleLeftDrawer(){r.value=!r.value},rightDrawerOpen:e,toggleRightDrawer(){e.value=!e.value}}},mounted(){i.isActive||i.toggle(),this.store.goDemo()}});function k(r,e,c,V,O,$){const u=g("router-view");return f(),d(C,{view:"hHh lpR fFf"},{default:a(()=>[o(D,{bordered:"",class:"bg-positive text-white"},{default:a(()=>[o(v,null,{default:a(()=>[o(l,{flat:"",round:"",icon:"menu",onClick:r.toggleLeftDrawer},null,8,["onClick"]),o(l,{flat:"",round:"",icon:"home",onClick:e[0]||(e[0]=t=>this.store.goHome())}),o(w),o(l,{flat:"",round:"",icon:"logout",onClick:e[1]||(e[1]=t=>this.store.logout())}),o(l,{flat:"",round:"",icon:"menu",onClick:r.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),o(s,{"show-if-above":"",modelValue:r.leftDrawerOpen,"onUpdate:modelValue":e[2]||(e[2]=t=>r.leftDrawerOpen=t),side:"left",bordered:""},null,8,["modelValue"]),o(s,{"show-if-above":"",modelValue:r.rightDrawerOpen,"onUpdate:modelValue":e[3]||(e[3]=t=>r.rightDrawerOpen=t),side:"right",bordered:""},null,8,["modelValue"]),o(Q,null,{default:a(()=>[o(u)]),_:1})]),_:1})}var z=m(h,[["render",k]]);export{z as default};