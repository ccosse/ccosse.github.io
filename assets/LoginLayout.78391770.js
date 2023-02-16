import{_ as w,d as b,r as i,P as f,s,o as v,c,w as a,a as e,Q as d,e as D,f as p}from"./index.a59af852.js";import{Q as V,a as Q,b as _,c as k,d as t,e as m,f as y,g as C}from"./QLayout.eb2443c6.js";import{Q as n}from"./QRouteTab.9ae82b78.js";import{u as L}from"./re-store.fb3b18c5.js";import"./use-dark.558ba38e.js";import"./selection.61dc086d.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";const O=b({name:"GuestLayout",setup(){const o=i(!1),r=i(!1),u=L();return{step:i(1),reStore:u,leftDrawerOpen:o,rightDrawerOpen:r,toggleLeftDrawer(){o.value=!o.value},toggleRightDrawer(){r.value=!r.value}}},mounted(){f.isActive||(f.toggle(),s("primary","#333"),s("secondary",this.reStore.preferences.secondaryColor),s("accent",this.reStore.preferences.accentColor)),this.reStore.initSpeech(),this.reStore.loadDemo()}}),S={class:"dashboard-wrapper"};function T(o,r,u,R,B,U){const g=p("router-link"),h=p("router-view");return v(),c(C,{view:"hHh LpR fFf"},{default:a(()=>[e(k,{flat:"",bordered:"",class:"bg-primary text-white","height-hint":"98"},{default:a(()=>[e(V,null,{default:a(()=>[e(d,{dense:"",flat:"",round:"",icon:"menu",onClick:o.toggleLeftDrawer},null,8,["onClick"]),e(Q,null,{default:a(()=>[e(g,{to:"/"},{default:a(()=>[e(d,{dense:"",flat:"",round:"",icon:"home",color:"white"})]),_:1})]),_:1}),e(d,{dense:"",flat:"",round:"",icon:"menu",onClick:o.toggleRightDrawer},null,8,["onClick"])]),_:1}),e(_,{align:"left",class:"hidden"},{default:a(()=>[e(n,{to:"/logo",label:"Logo"}),e(n,{to:"/teaching",label:"Teaching"}),e(n,{to:"/taking",label:"Taking"}),e(n,{to:"/gradebook",label:"Gradebook"})]),_:1})]),_:1}),e(t,{"show-if-above":"",modelValue:o.leftDrawerOpen,"onUpdate:modelValue":r[0]||(r[0]=l=>o.leftDrawerOpen=l),side:"left",bordered:""},null,8,["modelValue"]),e(t,{"show-if-above":"",modelValue:o.rightDrawerOpen,"onUpdate:modelValue":r[1]||(r[1]=l=>o.rightDrawerOpen=l),side:"right",bordered:""},null,8,["modelValue"]),e(y,{class:"container-fluid"},{default:a(()=>[e(t,{bordered:"","show-if-above":"",modelValue:o.leftDrawerOpen,"onUpdate:modelValue":r[2]||(r[2]=l=>o.leftDrawerOpen=l),side:"left"},{default:a(()=>[e(m,{visible:o.visible,style:{height:"95vh","max-width":"350px"}},null,8,["visible"])]),_:1},8,["modelValue"]),e(t,{bordered:"","show-if-above":"",modelValue:o.rightDrawerOpen,"onUpdate:modelValue":r[3]||(r[3]=l=>o.rightDrawerOpen=l),side:"right"},{default:a(()=>[e(m,{visible:o.visible,style:{height:"95vh","max-width":"350px"}},null,8,["visible"])]),_:1},8,["modelValue"]),D("div",S,[e(h)])]),_:1})]),_:1})}var j=w(O,[["render",T]]);export{j as default};
