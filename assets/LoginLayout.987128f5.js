import{_ as h,d as w,r as s,s as b,P as u,a as v,o as D,c as V,w as l,e,Q as i,f as _,g as f}from"./index.f2d2d2f5.js";import{Q as c,a as k,b as Q,c as t,d as y,e as n,f as p,g as O,h as C}from"./QLayout.ad393e93.js";import{u as L}from"./re-store.1698d1bd.js";import"./use-dark.a29c6b32.js";import"./firebase.8ff914f0.js";const T=w({name:"GuestLayout",setup(){const a=s(!1),o=s(!1),d=L(b());return{step:s(1),reStore:d,leftDrawerOpen:a,rightDrawerOpen:o,toggleLeftDrawer(){a.value=!a.value},toggleRightDrawer(){o.value=!o.value}}},mounted(){u.isActive||(u.toggle(),v("primary","#333"))}}),R={class:"dashboard-wrapper"};function B(a,o,d,U,$,P){const g=f("router-link"),m=f("router-view");return D(),V(C,{view:"hHh lpR fFf"},{default:l(()=>[e(y,{flat:"",bordered:"",class:"bg-primary text-white","height-hint":"98"},{default:l(()=>[e(c,null,{default:l(()=>[e(i,{dense:"",flat:"",round:"",icon:"menu",onClick:a.toggleLeftDrawer},null,8,["onClick"]),e(k,null,{default:l(()=>[e(g,{to:"/"},{default:l(()=>[e(i,{dense:"",flat:"",round:"",icon:"home",color:"white"})]),_:1})]),_:1}),e(i,{dense:"",flat:"",round:"",icon:"menu",onClick:a.toggleRightDrawer},null,8,["onClick"])]),_:1}),e(Q,{align:"left",class:"hidden"},{default:l(()=>[e(t,{to:"/logo",label:"Logo"}),e(t,{to:"/teaching",label:"Teaching"}),e(t,{to:"/taking",label:"Taking"}),e(t,{to:"/gradebook",label:"Gradebook"})]),_:1})]),_:1}),e(n,{"show-if-above":"",modelValue:a.leftDrawerOpen,"onUpdate:modelValue":o[0]||(o[0]=r=>a.leftDrawerOpen=r),side:"left",bordered:""},null,8,["modelValue"]),e(n,{"show-if-above":"",modelValue:a.rightDrawerOpen,"onUpdate:modelValue":o[1]||(o[1]=r=>a.rightDrawerOpen=r),side:"right",bordered:""},null,8,["modelValue"]),e(O,{class:"container-fluid"},{default:l(()=>[e(n,{bordered:"","show-if-above":"",modelValue:a.leftDrawerOpen,"onUpdate:modelValue":o[2]||(o[2]=r=>a.leftDrawerOpen=r),side:"left"},{default:l(()=>[e(p,{visible:a.visible,style:{height:"95vh","max-width":"350px"}},null,8,["visible"])]),_:1},8,["modelValue"]),e(n,{bordered:"","show-if-above":"",modelValue:a.rightDrawerOpen,"onUpdate:modelValue":o[3]||(o[3]=r=>a.rightDrawerOpen=r),side:"right"},{default:l(()=>[e(p,{visible:a.visible,style:{height:"95vh","max-width":"350px"}},null,8,["visible"])]),_:1},8,["modelValue"]),_("div",R,[e(m)])]),_:1})]),_:1})}var E=h(T,[["render",B]]);export{E as default};
