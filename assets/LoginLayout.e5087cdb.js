import{_ as w,d as b,r as i,P as f,s,o as v,c,w as r,a as e,Q as d,e as D,f as p}from"./index.f86b1bd9.js";import{Q as V,a as _,b as k,c as t,d as y,e as n,f as g,g as Q,h as C}from"./QLayout.358f95d7.js";import{u as L}from"./re-store.4f0e7c79.js";import"./use-dark.ce2d357f.js";import"./selection.e068733e.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";const O=b({name:"GuestLayout",setup(){const o=i(!1),a=i(!1),u=L();return{step:i(1),reStore:u,leftDrawerOpen:o,rightDrawerOpen:a,toggleLeftDrawer(){o.value=!o.value},toggleRightDrawer(){a.value=!a.value}}},mounted(){f.isActive||(f.toggle(),s("primary","#333"),s("secondary",this.reStore.preferences.secondaryColor),s("accent",this.reStore.preferences.accentColor)),this.reStore.initSpeech()}}),S={class:"dashboard-wrapper"};function T(o,a,u,R,B,U){const m=p("router-link"),h=p("router-view");return v(),c(C,{view:"hHh LpR fFf"},{default:r(()=>[e(y,{flat:"",bordered:"",class:"bg-primary text-white","height-hint":"98"},{default:r(()=>[e(V,null,{default:r(()=>[e(d,{dense:"",flat:"",round:"",icon:"menu",onClick:o.toggleLeftDrawer},null,8,["onClick"]),e(_,null,{default:r(()=>[e(m,{to:"/"},{default:r(()=>[e(d,{dense:"",flat:"",round:"",icon:"home",color:"white"})]),_:1})]),_:1}),e(d,{dense:"",flat:"",round:"",icon:"menu",onClick:o.toggleRightDrawer},null,8,["onClick"])]),_:1}),e(k,{align:"left",class:"hidden"},{default:r(()=>[e(t,{to:"/logo",label:"Logo"}),e(t,{to:"/teaching",label:"Teaching"}),e(t,{to:"/taking",label:"Taking"}),e(t,{to:"/gradebook",label:"Gradebook"})]),_:1})]),_:1}),e(n,{"show-if-above":"",modelValue:o.leftDrawerOpen,"onUpdate:modelValue":a[0]||(a[0]=l=>o.leftDrawerOpen=l),side:"left",bordered:""},null,8,["modelValue"]),e(n,{"show-if-above":"",modelValue:o.rightDrawerOpen,"onUpdate:modelValue":a[1]||(a[1]=l=>o.rightDrawerOpen=l),side:"right",bordered:""},null,8,["modelValue"]),e(Q,{class:"container-fluid"},{default:r(()=>[e(n,{bordered:"","show-if-above":"",modelValue:o.leftDrawerOpen,"onUpdate:modelValue":a[2]||(a[2]=l=>o.leftDrawerOpen=l),side:"left"},{default:r(()=>[e(g,{visible:o.visible,style:{height:"95vh","max-width":"350px"}},null,8,["visible"])]),_:1},8,["modelValue"]),e(n,{bordered:"","show-if-above":"",modelValue:o.rightDrawerOpen,"onUpdate:modelValue":a[3]||(a[3]=l=>o.rightDrawerOpen=l),side:"right"},{default:r(()=>[e(g,{visible:o.visible,style:{height:"95vh","max-width":"350px"}},null,8,["visible"])]),_:1},8,["modelValue"]),D("div",S,[e(h)])]),_:1})]),_:1})}var F=w(O,[["render",T]]);export{F as default};
