import{_ as m,j as p,r as n,P as i,k as f,m as d,n as a,p as g,q as o,Q as l}from"./index.c36dfe81.js";import{Q as w}from"./QSpace.6bbf52b0.js";import{a as v,Q as D,b as s}from"./QDrawer.c59f8c97.js";import{Q,a as C}from"./QLayout.ec848361.js";import{u as h}from"./store.c211c04e.js";import"./QResizeObserver.98ce103f.js";import"./use-prevent-scroll.4a6462cc.js";import"./scroll.1ad3befa.js";import"./use-model-toggle.abdfe5c8.js";import"./use-timeout.830333af.js";import"./use-dark.decb69bf.js";import"./TouchPan.b000e846.js";import"./selection.fdd1bbc2.js";import"./firebase.dc843dde.js";import"./axios.84ae42e4.js";const k=p({name:"DemoLayout",components:{},setup(){const r=n(!1),e=n(!1);return{store:h(),leftDrawerOpen:r,toggleLeftDrawer(){r.value=!r.value},rightDrawerOpen:e,toggleRightDrawer(){e.value=!e.value}}},mounted(){i.isActive||i.toggle(),this.store.goDemo()}});function b(r,e,c,V,O,$){const u=g("router-view");return f(),d(Q,{view:"hHh lpR fFf"},{default:a(()=>[o(D,{bordered:"",class:"bg-positive text-white"},{default:a(()=>[o(v,null,{default:a(()=>[o(l,{flat:"",round:"",icon:"menu",onClick:r.toggleLeftDrawer},null,8,["onClick"]),o(l,{flat:"",round:"",icon:"home",onClick:e[0]||(e[0]=t=>this.store.goHome())}),o(w),o(l,{flat:"",round:"",icon:"logout",onClick:e[1]||(e[1]=t=>this.store.logout())}),o(l,{flat:"",round:"",icon:"menu",onClick:r.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),o(s,{"show-if-above":"",modelValue:r.leftDrawerOpen,"onUpdate:modelValue":e[2]||(e[2]=t=>r.leftDrawerOpen=t),side:"left",bordered:""},null,8,["modelValue"]),o(s,{"show-if-above":"",modelValue:r.rightDrawerOpen,"onUpdate:modelValue":e[3]||(e[3]=t=>r.rightDrawerOpen=t),side:"right",bordered:""},null,8,["modelValue"]),o(C,null,{default:a(()=>[o(u)]),_:1})]),_:1})}var z=m(k,[["render",b]]);export{z as default};