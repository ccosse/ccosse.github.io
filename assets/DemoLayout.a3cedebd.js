import{_ as m,j as p,r as n,P as i,k as d,m as f,n as a,p as g,q as o,Q as l}from"./index.737945c7.js";import{b as w,Q as v,a as D,c as s}from"./QDrawer.dd5764f5.js";import{a as C,b}from"./QLayout.37857a3f.js";import{u as c}from"./store.7b8e96c1.js";import"./use-prevent-scroll.3abeb51b.js";import"./scroll.e371da39.js";import"./use-model-toggle.205c6281.js";import"./use-timeout.56a2cb41.js";import"./use-dark.526159b9.js";import"./TouchPan.7fdeac7d.js";import"./touch.70a9dd44.js";import"./selection.9112c3ba.js";import"./firebase.dc843dde.js";import"./axios.84ae42e4.js";const h=p({name:"DemoLayout",components:{},setup(){const r=n(!1),e=n(!1);return{store:c(),leftDrawerOpen:r,toggleLeftDrawer(){r.value=!r.value},rightDrawerOpen:e,toggleRightDrawer(){e.value=!e.value}}},mounted(){i.isActive||i.toggle(),this.store.goDemo()}});function k(r,e,Q,V,O,$){const u=g("router-view");return d(),f(C,{view:"hHh lpR fFf"},{default:a(()=>[o(D,{bordered:"",class:"bg-positive text-white"},{default:a(()=>[o(w,null,{default:a(()=>[o(l,{flat:"",round:"",icon:"menu",onClick:r.toggleLeftDrawer},null,8,["onClick"]),o(l,{flat:"",round:"",icon:"home",onClick:e[0]||(e[0]=t=>this.store.goHome())}),o(v),o(l,{flat:"",round:"",icon:"logout",onClick:e[1]||(e[1]=t=>this.store.logout())}),o(l,{flat:"",round:"",icon:"menu",onClick:r.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),o(s,{"show-if-above":"",modelValue:r.leftDrawerOpen,"onUpdate:modelValue":e[2]||(e[2]=t=>r.leftDrawerOpen=t),side:"left",bordered:""},null,8,["modelValue"]),o(s,{"show-if-above":"",modelValue:r.rightDrawerOpen,"onUpdate:modelValue":e[3]||(e[3]=t=>r.rightDrawerOpen=t),side:"right",bordered:""},null,8,["modelValue"]),o(b,null,{default:a(()=>[o(u)]),_:1})]),_:1})}var T=m(h,[["render",k]]);export{T as default};
