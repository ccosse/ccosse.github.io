import{_ as w,d as b,r as s,P as f,s as i,o as v,c,w as r,a as e,Q as d,e as D,f as p}from"./index.94357c4d.js";import{Q as V,a as _,b as k,c as t,d as y,e as n,f as g,g as Q,h as C}from"./QLayout.436b51e6.js";import{u as L}from"./re-store.550ad3fd.js";import"./use-dark.471278b4.js";import"./selection.bcba79b2.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";const O=b({name:"GuestLayout",setup(){const o=s(!1),a=s(!1),u=L();return{step:s(1),reStore:u,leftDrawerOpen:o,rightDrawerOpen:a,toggleLeftDrawer(){o.value=!o.value},toggleRightDrawer(){a.value=!a.value}}},mounted(){f.isActive||(f.toggle(),i("primary","#333"),i("secondary",this.reStore.preferences.secondaryColor),i("accent",this.reStore.preferences.accentColor))}}),T={class:"dashboard-wrapper"};function R(o,a,u,S,B,U){const m=p("router-link"),h=p("router-view");return v(),c(C,{view:"hHh LpR fFf"},{default:r(()=>[e(y,{flat:"",bordered:"",class:"bg-primary text-white","height-hint":"98"},{default:r(()=>[e(V,null,{default:r(()=>[e(d,{dense:"",flat:"",round:"",icon:"menu",onClick:o.toggleLeftDrawer},null,8,["onClick"]),e(_,null,{default:r(()=>[e(m,{to:"/"},{default:r(()=>[e(d,{dense:"",flat:"",round:"",icon:"home",color:"white"})]),_:1})]),_:1}),e(d,{dense:"",flat:"",round:"",icon:"menu",onClick:o.toggleRightDrawer},null,8,["onClick"])]),_:1}),e(k,{align:"left",class:"hidden"},{default:r(()=>[e(t,{to:"/logo",label:"Logo"}),e(t,{to:"/teaching",label:"Teaching"}),e(t,{to:"/taking",label:"Taking"}),e(t,{to:"/gradebook",label:"Gradebook"})]),_:1})]),_:1}),e(n,{"show-if-above":"",modelValue:o.leftDrawerOpen,"onUpdate:modelValue":a[0]||(a[0]=l=>o.leftDrawerOpen=l),side:"left",bordered:""},null,8,["modelValue"]),e(n,{"show-if-above":"",modelValue:o.rightDrawerOpen,"onUpdate:modelValue":a[1]||(a[1]=l=>o.rightDrawerOpen=l),side:"right",bordered:""},null,8,["modelValue"]),e(Q,{class:"container-fluid"},{default:r(()=>[e(n,{bordered:"","show-if-above":"",modelValue:o.leftDrawerOpen,"onUpdate:modelValue":a[2]||(a[2]=l=>o.leftDrawerOpen=l),side:"left"},{default:r(()=>[e(g,{visible:o.visible,style:{height:"95vh","max-width":"350px"}},null,8,["visible"])]),_:1},8,["modelValue"]),e(n,{bordered:"","show-if-above":"",modelValue:o.rightDrawerOpen,"onUpdate:modelValue":a[3]||(a[3]=l=>o.rightDrawerOpen=l),side:"right"},{default:r(()=>[e(g,{visible:o.visible,style:{height:"95vh","max-width":"350px"}},null,8,["visible"])]),_:1},8,["modelValue"]),D("div",T,[e(h)])]),_:1})]),_:1})}var F=w(O,[["render",R]]);export{F as default};
