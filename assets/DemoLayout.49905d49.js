import{_ as m,j as p,r as n,P as i,k as d,m as f,n as a,p as g,q as o,Q as l}from"./index.7db28fce.js";import{b as w,Q as v,a as D,c as s}from"./QDrawer.808bcb72.js";import{a as C,b}from"./QLayout.b80fb14e.js";import{u as c}from"./store.8b1c2da5.js";import"./use-prevent-scroll.712aff44.js";import"./scroll.ee6583bd.js";import"./use-model-toggle.5c93bc39.js";import"./use-timeout.eb3a4efd.js";import"./use-dark.cb44b59c.js";import"./TouchPan.059f9732.js";import"./touch.70a9dd44.js";import"./selection.8210495f.js";import"./firebase.dc843dde.js";import"./axios.84ae42e4.js";const h=p({name:"DemoLayout",components:{},setup(){const r=n(!1),e=n(!1);return{store:c(),leftDrawerOpen:r,toggleLeftDrawer(){r.value=!r.value},rightDrawerOpen:e,toggleRightDrawer(){e.value=!e.value}}},mounted(){i.isActive||i.toggle(),this.store.goDemo()}});function k(r,e,Q,V,O,$){const u=g("router-view");return d(),f(C,{view:"hHh lpR fFf"},{default:a(()=>[o(D,{bordered:"",class:"bg-positive text-white"},{default:a(()=>[o(w,null,{default:a(()=>[o(l,{flat:"",round:"",icon:"menu",onClick:r.toggleLeftDrawer},null,8,["onClick"]),o(l,{flat:"",round:"",icon:"home",onClick:e[0]||(e[0]=t=>this.store.goHome())}),o(v),o(l,{flat:"",round:"",icon:"logout",onClick:e[1]||(e[1]=t=>this.store.logout())}),o(l,{flat:"",round:"",icon:"menu",onClick:r.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),o(s,{"show-if-above":"",modelValue:r.leftDrawerOpen,"onUpdate:modelValue":e[2]||(e[2]=t=>r.leftDrawerOpen=t),side:"left",bordered:""},null,8,["modelValue"]),o(s,{"show-if-above":"",modelValue:r.rightDrawerOpen,"onUpdate:modelValue":e[3]||(e[3]=t=>r.rightDrawerOpen=t),side:"right",bordered:""},null,8,["modelValue"]),o(b,null,{default:a(()=>[o(u)]),_:1})]),_:1})}var T=m(h,[["render",k]]);export{T as default};
