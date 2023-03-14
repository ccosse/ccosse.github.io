import{_ as h,d as w,r as i,P as u,s as b,o as v,c as D,w as l,a as e,Q as s,e as V,f}from"./index.05026f7e.js";import{Q as _,a as c,b as k,c as t,d as Q,e as n,f as p,g as y,h as O}from"./QLayout.4c5dc0b2.js";import{u as C}from"./re-store.4ea84c31.js";import"./use-dark.e3e3556b.js";import"./firebase.8ff914f0.js";const L=w({name:"GuestLayout",setup(){const a=i(!1),o=i(!1),d=C();return{step:i(1),reStore:d,leftDrawerOpen:a,rightDrawerOpen:o,toggleLeftDrawer(){a.value=!a.value},toggleRightDrawer(){o.value=!o.value}}},mounted(){u.isActive||(u.toggle(),b("primary","#333"))}}),T={class:"dashboard-wrapper"};function R(a,o,d,B,U,$){const g=f("router-link"),m=f("router-view");return v(),D(O,{view:"hHh lpR fFf"},{default:l(()=>[e(Q,{flat:"",bordered:"",class:"bg-primary text-white","height-hint":"98"},{default:l(()=>[e(_,null,{default:l(()=>[e(s,{dense:"",flat:"",round:"",icon:"menu",onClick:a.toggleLeftDrawer},null,8,["onClick"]),e(c,null,{default:l(()=>[e(g,{to:"/"},{default:l(()=>[e(s,{dense:"",flat:"",round:"",icon:"home",color:"white"})]),_:1})]),_:1}),e(s,{dense:"",flat:"",round:"",icon:"menu",onClick:a.toggleRightDrawer},null,8,["onClick"])]),_:1}),e(k,{align:"left",class:"hidden"},{default:l(()=>[e(t,{to:"/logo",label:"Logo"}),e(t,{to:"/teaching",label:"Teaching"}),e(t,{to:"/taking",label:"Taking"}),e(t,{to:"/gradebook",label:"Gradebook"})]),_:1})]),_:1}),e(n,{"show-if-above":"",modelValue:a.leftDrawerOpen,"onUpdate:modelValue":o[0]||(o[0]=r=>a.leftDrawerOpen=r),side:"left",bordered:""},null,8,["modelValue"]),e(n,{"show-if-above":"",modelValue:a.rightDrawerOpen,"onUpdate:modelValue":o[1]||(o[1]=r=>a.rightDrawerOpen=r),side:"right",bordered:""},null,8,["modelValue"]),e(y,{class:"container-fluid"},{default:l(()=>[e(n,{bordered:"","show-if-above":"",modelValue:a.leftDrawerOpen,"onUpdate:modelValue":o[2]||(o[2]=r=>a.leftDrawerOpen=r),side:"left"},{default:l(()=>[e(p,{visible:a.visible,style:{height:"95vh","max-width":"350px"}},null,8,["visible"])]),_:1},8,["modelValue"]),e(n,{bordered:"","show-if-above":"",modelValue:a.rightDrawerOpen,"onUpdate:modelValue":o[3]||(o[3]=r=>a.rightDrawerOpen=r),side:"right"},{default:l(()=>[e(p,{visible:a.visible,style:{height:"95vh","max-width":"350px"}},null,8,["visible"])]),_:1},8,["modelValue"]),V("div",T,[e(m)])]),_:1})]),_:1})}var N=h(L,[["render",R]]);export{N as default};
