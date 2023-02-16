import{_ as c,d as V,r as i,P as m,s as d,o as u,c as f,w as r,a as e,Q as l,x as k,af as Q,aI as g,e as D,f as h}from"./index.929bd027.js";import{Q as y,a as C,b as S,c as _,d as n,e as w,f as O,g as T}from"./QLayout.2ff12ecd.js";import{Q as L}from"./QTooltip.6ac76b93.js";import{Q as s}from"./QRouteTab.b59a63fd.js";import{u as $}from"./re-store.48e9fd27.js";import"./use-dark.c91131ec.js";import"./selection.639d4fb7.js";import"./use-portal.cb729528.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";const R=V({name:"GuestLayout",setup(){const t=i(!1),o=i(!1),p=$();return{step:i(1),reStore:p,leftDrawerOpen:t,rightDrawerOpen:o,toggleLeftDrawer(){t.value=!t.value},toggleRightDrawer(){o.value=!o.value}}},mounted(){m.isActive||(m.toggle(),d("primary","#333"),d("secondary",this.reStore.preferences.secondaryColor),d("accent",this.reStore.preferences.accentColor))}}),B={class:"dashboard-wrapper"};function N(t,o,p,U,P,A){const b=h("router-link"),v=h("router-view");return u(),f(T,{view:"hHh LpR fFf"},{default:r(()=>[e(_,{flat:"",bordered:"",class:"bg-primary text-white","height-hint":"98"},{default:r(()=>[e(y,null,{default:r(()=>[e(l,{dense:"",flat:"",round:"",icon:"menu",onClick:t.toggleLeftDrawer},null,8,["onClick"]),e(C,null,{default:r(()=>[e(b,{to:"/student",class:"text-white"},{default:r(()=>[e(k,{name:"home"})]),_:1})]),_:1}),this.reStore.authenticated?(u(),f(l,{key:0,onClick:o[0]||(o[0]=a=>this.reStore.router.push("/teacher")),icon:"switch_account"},{default:r(()=>[e(L,null,{default:r(()=>[Q(" Switch between Teacher or Student role ")]),_:1})]),_:1})):g("",!0),this.reStore.authenticated?(u(),f(l,{key:1,icon:"logout",onClick:o[1]||(o[1]=a=>this.reStore.logout())})):g("",!0),e(l,{dense:"",flat:"",round:"",icon:"menu",onClick:t.toggleRightDrawer},null,8,["onClick"])]),_:1}),e(S,{align:"left",class:"hidden"},{default:r(()=>[e(s,{to:"/logo",label:"Logo"}),e(s,{to:"/teaching",label:"Teaching"}),e(s,{to:"/taking",label:"Taking"}),e(s,{to:"/gradebook",label:"Gradebook"})]),_:1})]),_:1}),e(n,{"show-if-above":"",modelValue:t.leftDrawerOpen,"onUpdate:modelValue":o[2]||(o[2]=a=>t.leftDrawerOpen=a),side:"left",bordered:""},null,8,["modelValue"]),e(n,{"show-if-above":"",modelValue:t.rightDrawerOpen,"onUpdate:modelValue":o[3]||(o[3]=a=>t.rightDrawerOpen=a),side:"right",bordered:""},null,8,["modelValue"]),e(O,{class:"container-fluid"},{default:r(()=>[e(n,{bordered:"","show-if-above":"",modelValue:t.leftDrawerOpen,"onUpdate:modelValue":o[4]||(o[4]=a=>t.leftDrawerOpen=a),side:"left"},{default:r(()=>[e(w,{visible:t.visible,style:{height:"95vh","max-width":"350px"}},null,8,["visible"])]),_:1},8,["modelValue"]),e(n,{bordered:"","show-if-above":"",modelValue:t.rightDrawerOpen,"onUpdate:modelValue":o[5]||(o[5]=a=>t.rightDrawerOpen=a),side:"right"},{default:r(()=>[e(w,{visible:t.visible,style:{height:"95vh","max-width":"350px"}},null,8,["visible"])]),_:1},8,["modelValue"]),D("div",B,[e(v)])]),_:1})]),_:1})}var K=c(R,[["render",N]]);export{K as default};
