import{_ as m,j as p,r as n,P as i,k as f,m as d,n as a,p as g,q as o,Q as l}from"./index.94717430.js";import{Q as w}from"./QSpace.9bc75734.js";import{a as v,Q as D,b as s}from"./QDrawer.d883d59b.js";import{a as C,b as Q}from"./QLayout.c174bf07.js";import{u as b}from"./store.9b45356d.js";import"./use-prevent-scroll.b2f9c257.js";import"./scroll.79c351be.js";import"./use-model-toggle.c9ed7fd3.js";import"./use-timeout.47edfbbe.js";import"./use-dark.c4121bb0.js";import"./TouchPan.56d70336.js";import"./touch.70a9dd44.js";import"./selection.e4da06e5.js";import"./firebase.dc843dde.js";import"./axios.84ae42e4.js";const h=p({name:"DemoLayout",components:{},setup(){const r=n(!1),e=n(!1);return{store:b(),leftDrawerOpen:r,toggleLeftDrawer(){r.value=!r.value},rightDrawerOpen:e,toggleRightDrawer(){e.value=!e.value}}},mounted(){i.isActive||i.toggle(),this.store.goDemo()}});function k(r,e,c,V,O,$){const u=g("router-view");return f(),d(C,{view:"hHh lpR fFf"},{default:a(()=>[o(D,{bordered:"",class:"bg-positive text-white"},{default:a(()=>[o(v,null,{default:a(()=>[o(l,{flat:"",round:"",icon:"menu",onClick:r.toggleLeftDrawer},null,8,["onClick"]),o(l,{flat:"",round:"",icon:"home",onClick:e[0]||(e[0]=t=>this.store.goHome())}),o(w),o(l,{flat:"",round:"",icon:"logout",onClick:e[1]||(e[1]=t=>this.store.logout())}),o(l,{flat:"",round:"",icon:"menu",onClick:r.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),o(s,{"show-if-above":"",modelValue:r.leftDrawerOpen,"onUpdate:modelValue":e[2]||(e[2]=t=>r.leftDrawerOpen=t),side:"left",bordered:""},null,8,["modelValue"]),o(s,{"show-if-above":"",modelValue:r.rightDrawerOpen,"onUpdate:modelValue":e[3]||(e[3]=t=>r.rightDrawerOpen=t),side:"right",bordered:""},null,8,["modelValue"]),o(Q,null,{default:a(()=>[o(u)]),_:1})]),_:1})}var z=m(h,[["render",k]]);export{z as default};
