import{_ as V,d as _,r as i,P as g,s as d,o as u,c as p,w as a,a as e,Q as l,aI as k,af as D,aJ as m,e as b,f as h}from"./index.f35e6011.js";import{Q,a as y,b as C,c as n,d as S,e as s,f as w,g as O,h as T}from"./QLayout.09590287.js";import{Q as L}from"./QTooltip.c9d6af0b.js";import{u as $}from"./re-store.a5d13456.js";import"./use-dark.2a7c74b8.js";import"./selection.8a8dfc81.js";import"./position-engine.f4fd536d.js";import"./use-portal.19fd0095.js";import"./firebase.ea708b63.js";const R=_({name:"GuestLayout",setup(){const t=i(!1),o=i(!1),f=$();return{step:i(1),reStore:f,leftDrawerOpen:t,rightDrawerOpen:o,toggleLeftDrawer(){t.value=!t.value},toggleRightDrawer(){o.value=!o.value}}},mounted(){g.isActive||(g.toggle(),d("primary","#333"),d("secondary",this.reStore.preferences.secondaryColor),d("accent",this.reStore.preferences.accentColor))}}),B=b("img",{src:"https://readingedgeca.s3.us-west-1.amazonaws.com/static/pub/img/reading_edge_200x200.png"},null,-1),N={class:"dashboard-wrapper"};function U(t,o,f,A,P,z){const c=h("router-link"),v=h("router-view");return u(),p(T,{view:"hHh LpR fFf"},{default:a(()=>[e(S,{flat:"",bordered:"",class:"bg-primary text-white","height-hint":"98"},{default:a(()=>[e(Q,null,{default:a(()=>[e(l,{dense:"",flat:"",round:"",icon:"menu",onClick:t.toggleLeftDrawer},null,8,["onClick"]),e(y,null,{default:a(()=>[e(c,{to:"/"},{default:a(()=>[e(k,{size:"25px"},{default:a(()=>[B]),_:1})]),_:1})]),_:1}),this.reStore.authenticated?(u(),p(l,{key:0,onClick:o[0]||(o[0]=r=>this.reStore.router.push("/teacher")),icon:"switch_account"},{default:a(()=>[e(L,null,{default:a(()=>[D(" Switch between Teacher or Student role ")]),_:1})]),_:1})):m("",!0),this.reStore.authenticated?(u(),p(l,{key:1,icon:"logout",onClick:o[1]||(o[1]=r=>this.reStore.logout())})):m("",!0),e(l,{dense:"",flat:"",round:"",icon:"menu",onClick:t.toggleRightDrawer},null,8,["onClick"])]),_:1}),e(C,{align:"left",class:"hidden"},{default:a(()=>[e(n,{to:"/logo",label:"Logo"}),e(n,{to:"/teaching",label:"Teaching"}),e(n,{to:"/taking",label:"Taking"}),e(n,{to:"/gradebook",label:"Gradebook"})]),_:1})]),_:1}),e(s,{"show-if-above":"",modelValue:t.leftDrawerOpen,"onUpdate:modelValue":o[2]||(o[2]=r=>t.leftDrawerOpen=r),side:"left",bordered:""},null,8,["modelValue"]),e(s,{"show-if-above":"",modelValue:t.rightDrawerOpen,"onUpdate:modelValue":o[3]||(o[3]=r=>t.rightDrawerOpen=r),side:"right",bordered:""},null,8,["modelValue"]),e(O,{class:"container-fluid"},{default:a(()=>[e(s,{bordered:"","show-if-above":"",modelValue:t.leftDrawerOpen,"onUpdate:modelValue":o[4]||(o[4]=r=>t.leftDrawerOpen=r),side:"left"},{default:a(()=>[e(w,{visible:t.visible,style:{height:"95vh","max-width":"350px"}},null,8,["visible"])]),_:1},8,["modelValue"]),e(s,{bordered:"","show-if-above":"",modelValue:t.rightDrawerOpen,"onUpdate:modelValue":o[5]||(o[5]=r=>t.rightDrawerOpen=r),side:"right"},{default:a(()=>[e(w,{visible:t.visible,style:{height:"95vh","max-width":"350px"}},null,8,["visible"])]),_:1},8,["modelValue"]),b("div",N,[e(v)])]),_:1})]),_:1})}var K=V(R,[["render",U]]);export{K as default};
