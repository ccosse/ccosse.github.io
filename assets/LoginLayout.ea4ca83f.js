import{c as h,a as g,h as b,d as v,_ as w,e as c,r as n,P as p,s as d,o as Q,f as D,w as a,g as e,Q as u,i as V,j as k,k as C,l as y}from"./index.d600388f.js";import{Q as _}from"./QTooltip.964104bb.js";import{Q as T,a as L,b as s,c as m,d as O,e as S}from"./QLayout.94128589.js";import{Q as i}from"./QRouteTab.2d03cfef.js";import{Q as B}from"./QTabs.045c29fb.js";import{u as R}from"./re-store.b0427d37.js";import"./uid.667792d6.js";import"./use-prevent-scroll.a1a3b042.js";import"./use-dark.03719e33.js";import"./TouchPan.5d90484b.js";import"./firebase.79bf92f9.js";import"./transform.aea72fbe.js";import"./index.2cf0d985.js";var $=h({name:"QToolbarTitle",props:{shrink:Boolean},setup(o,{slots:r}){const l=g(()=>"q-toolbar__title ellipsis"+(o.shrink===!0?" col-shrink":""));return()=>b("div",{class:l.value},v(r.default))}});const U=c({name:"GuestLayout",setup(){const o=n(!1),r=n(!1),l=R();return{step:n(1),reStore:l,leftDrawerOpen:o,rightDrawerOpen:r,toggleLeftDrawer(){o.value=!o.value},toggleRightDrawer(){r.value=!r.value}}},mounted(){p.isActive||(p.toggle(),d("primary","#333"),d("secondary",this.reStore.preferences.secondaryColor),d("accent",this.reStore.preferences.accentColor)),this.reStore.initSpeech(),this.reStore.loadDemo()}}),H={class:"dashboard-wrapper"};function N(o,r,l,P,A,G){const f=y("router-view");return Q(),D(S,{view:"hHh LpR fFf"},{default:a(()=>[e(L,{flat:"",bordered:"",class:"bg-primary text-white","height-hint":"98"},{default:a(()=>[e(T,null,{default:a(()=>[e(u,{icon:"menu",onClick:o.toggleLeftDrawer},null,8,["onClick"]),e($,null,{default:a(()=>[e(u,{onClick:r[0]||(r[0]=t=>this.reStore.router.push("/"))},{default:a(()=>[e(V,{name:"home",color:"white"},{default:a(()=>[e(_,null,{default:a(()=>[k("Home")]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{icon:"menu",onClick:o.toggleRightDrawer},null,8,["onClick"])]),_:1}),e(B,{align:"left",class:"hidden"},{default:a(()=>[e(i,{to:"/logo",label:"Logo"}),e(i,{to:"/teaching",label:"Teaching"}),e(i,{to:"/taking",label:"Taking"}),e(i,{to:"/gradebook",label:"Gradebook"})]),_:1})]),_:1}),e(s,{"show-if-above":"",modelValue:o.leftDrawerOpen,"onUpdate:modelValue":r[1]||(r[1]=t=>o.leftDrawerOpen=t),side:"left",bordered:""},null,8,["modelValue"]),e(s,{"show-if-above":"",modelValue:o.rightDrawerOpen,"onUpdate:modelValue":r[2]||(r[2]=t=>o.rightDrawerOpen=t),side:"right",bordered:""},null,8,["modelValue"]),e(O,{class:"container-fluid"},{default:a(()=>[e(s,{bordered:"","show-if-above":"",modelValue:o.leftDrawerOpen,"onUpdate:modelValue":r[3]||(r[3]=t=>o.leftDrawerOpen=t),side:"left"},{default:a(()=>[e(m,{visible:o.visible,style:{height:"95vh","max-width":"350px"}},null,8,["visible"])]),_:1},8,["modelValue"]),e(s,{bordered:"","show-if-above":"",modelValue:o.rightDrawerOpen,"onUpdate:modelValue":r[4]||(r[4]=t=>o.rightDrawerOpen=t),side:"right"},{default:a(()=>[e(m,{visible:o.visible,style:{height:"95vh","max-width":"350px"}},null,8,["visible"])]),_:1},8,["modelValue"]),C("div",H,[e(f)])]),_:1})]),_:1})}var x=w(U,[["render",N]]);export{x as default};
