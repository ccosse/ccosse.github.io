import{_ as m,j as p,r as n,P as i,k as f,m as d,n as a,p as g,q as o,Q as l}from"./index.b5df373a.js";import{Q as w}from"./QSpace.246b460d.js";import{a as v,Q as D,b as s}from"./QDrawer.e8011900.js";import{Q,a as C}from"./QLayout.964b0e17.js";import{u as h}from"./store.dba521d1.js";import"./QResizeObserver.97b8d018.js";import"./use-prevent-scroll.6cde96e3.js";import"./scroll.5fe65746.js";import"./use-model-toggle.c458b7f2.js";import"./use-timeout.1e4729d6.js";import"./use-dark.8f35300a.js";import"./TouchPan.52479ca6.js";import"./selection.1045c170.js";import"./firebase.dc843dde.js";import"./axios.84ae42e4.js";const k=p({name:"DemoLayout",components:{},setup(){const r=n(!1),e=n(!1);return{store:h(),leftDrawerOpen:r,toggleLeftDrawer(){r.value=!r.value},rightDrawerOpen:e,toggleRightDrawer(){e.value=!e.value}}},mounted(){i.isActive||i.toggle(),this.store.goDemo()}});function b(r,e,c,V,O,$){const u=g("router-view");return f(),d(Q,{view:"hHh lpR fFf"},{default:a(()=>[o(D,{bordered:"",class:"bg-positive text-white"},{default:a(()=>[o(v,null,{default:a(()=>[o(l,{flat:"",round:"",icon:"menu",onClick:r.toggleLeftDrawer},null,8,["onClick"]),o(l,{flat:"",round:"",icon:"home",onClick:e[0]||(e[0]=t=>this.store.goHome())}),o(w),o(l,{flat:"",round:"",icon:"logout",onClick:e[1]||(e[1]=t=>this.store.logout())}),o(l,{flat:"",round:"",icon:"menu",onClick:r.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),o(s,{"show-if-above":"",modelValue:r.leftDrawerOpen,"onUpdate:modelValue":e[2]||(e[2]=t=>r.leftDrawerOpen=t),side:"left",bordered:""},null,8,["modelValue"]),o(s,{"show-if-above":"",modelValue:r.rightDrawerOpen,"onUpdate:modelValue":e[3]||(e[3]=t=>r.rightDrawerOpen=t),side:"right",bordered:""},null,8,["modelValue"]),o(C,null,{default:a(()=>[o(u)]),_:1})]),_:1})}var z=m(k,[["render",b]]);export{z as default};
