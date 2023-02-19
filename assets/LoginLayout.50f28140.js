import{_ as w,d as b,r as n,P as f,s,o as v,c,w as a,a as e,Q as d,e as D,f as p}from"./index.0e64f230.js";import{Q as V,a as Q,b as _,c as l,d as m,e as k,f as y}from"./QLayout.b333829e.js";import{Q as i}from"./QRouteTab.a323f86b.js";import{Q as C}from"./QTabs.718ba220.js";import{u as L}from"./re-store.ead18405.js";import"./use-prevent-scroll.e5616504.js";import"./scroll.69de0f44.js";import"./use-dark.cbbcd9f3.js";import"./selection.34524589.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";const O=b({name:"GuestLayout",setup(){const o=n(!1),r=n(!1),u=L();return{step:n(1),reStore:u,leftDrawerOpen:o,rightDrawerOpen:r,toggleLeftDrawer(){o.value=!o.value},toggleRightDrawer(){r.value=!r.value}}},mounted(){f.isActive||(f.toggle(),s("primary","#333"),s("secondary",this.reStore.preferences.secondaryColor),s("accent",this.reStore.preferences.accentColor)),this.reStore.initSpeech(),this.reStore.loadDemo()}}),S={class:"dashboard-wrapper"};function T(o,r,u,R,B,U){const g=p("router-link"),h=p("router-view");return v(),c(y,{view:"hHh LpR fFf"},{default:a(()=>[e(_,{flat:"",bordered:"",class:"bg-primary text-white","height-hint":"98"},{default:a(()=>[e(V,null,{default:a(()=>[e(d,{dense:"",flat:"",round:"",icon:"menu",onClick:o.toggleLeftDrawer},null,8,["onClick"]),e(Q,null,{default:a(()=>[e(g,{to:"/"},{default:a(()=>[e(d,{dense:"",flat:"",round:"",icon:"home",color:"white"})]),_:1})]),_:1}),e(d,{dense:"",flat:"",round:"",icon:"menu",onClick:o.toggleRightDrawer},null,8,["onClick"])]),_:1}),e(C,{align:"left",class:"hidden"},{default:a(()=>[e(i,{to:"/logo",label:"Logo"}),e(i,{to:"/teaching",label:"Teaching"}),e(i,{to:"/taking",label:"Taking"}),e(i,{to:"/gradebook",label:"Gradebook"})]),_:1})]),_:1}),e(l,{"show-if-above":"",modelValue:o.leftDrawerOpen,"onUpdate:modelValue":r[0]||(r[0]=t=>o.leftDrawerOpen=t),side:"left",bordered:""},null,8,["modelValue"]),e(l,{"show-if-above":"",modelValue:o.rightDrawerOpen,"onUpdate:modelValue":r[1]||(r[1]=t=>o.rightDrawerOpen=t),side:"right",bordered:""},null,8,["modelValue"]),e(k,{class:"container-fluid"},{default:a(()=>[e(l,{bordered:"","show-if-above":"",modelValue:o.leftDrawerOpen,"onUpdate:modelValue":r[2]||(r[2]=t=>o.leftDrawerOpen=t),side:"left"},{default:a(()=>[e(m,{visible:o.visible,style:{height:"95vh","max-width":"350px"}},null,8,["visible"])]),_:1},8,["modelValue"]),e(l,{bordered:"","show-if-above":"",modelValue:o.rightDrawerOpen,"onUpdate:modelValue":r[3]||(r[3]=t=>o.rightDrawerOpen=t),side:"right"},{default:a(()=>[e(m,{visible:o.visible,style:{height:"95vh","max-width":"350px"}},null,8,["visible"])]),_:1},8,["modelValue"]),D("div",S,[e(h)])]),_:1})]),_:1})}var I=w(O,[["render",T]]);export{I as default};
