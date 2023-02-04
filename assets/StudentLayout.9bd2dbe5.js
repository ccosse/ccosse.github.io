import{_ as v,d as c,r as s,o as d,c as u,w as a,a as e,Q as l,aF as _,ac as k,aG as f,e as h,f as m}from"./index.af049c7a.js";import{Q as V,a as D,b as Q,c as n,d as y,e as i,f as g,g as C,h as S}from"./QLayout.0e9569c1.js";import{Q as O}from"./QTooltip.71dc52f0.js";import{u as T}from"./re-store.cbc016e6.js";import"./use-dark.6b21344a.js";import"./selection.a28b4668.js";import"./position-engine.fa922ea5.js";import"./use-portal.5659de27.js";import"./firebase.ea708b63.js";const L=c({name:"GuestLayout",setup(){const t=s(!1),o=s(!1),p=T();return{step:s(1),reStore:p,leftDrawerOpen:t,rightDrawerOpen:o,toggleLeftDrawer(){t.value=!t.value},toggleRightDrawer(){o.value=!o.value}}}}),$=h("img",{src:"https://readingedgeca.s3.us-west-1.amazonaws.com/static/pub/img/reading_edge_200x200.png"},null,-1),R={class:"dashboard-wrapper"};function B(t,o,p,N,U,G){const w=m("router-link"),b=m("router-view");return d(),u(S,{view:"hHh lpR fFf"},{default:a(()=>[e(y,{flat:"",bordered:"",class:"bg-primary text-white","height-hint":"98"},{default:a(()=>[e(V,null,{default:a(()=>[e(l,{dense:"",flat:"",round:"",icon:"menu",onClick:t.toggleLeftDrawer},null,8,["onClick"]),e(D,null,{default:a(()=>[e(w,{to:"/"},{default:a(()=>[e(_,{size:"25px"},{default:a(()=>[$]),_:1})]),_:1})]),_:1}),this.reStore.authenticated?(d(),u(l,{key:0,onClick:o[0]||(o[0]=r=>this.reStore.router.push("/teacher")),icon:"switch_account"},{default:a(()=>[e(O,null,{default:a(()=>[k(" Switch between Teacher or Student role ")]),_:1})]),_:1})):f("",!0),this.reStore.authenticated?(d(),u(l,{key:1,icon:"logout",onClick:o[1]||(o[1]=r=>this.reStore.logout())})):f("",!0),e(l,{dense:"",flat:"",round:"",icon:"menu",onClick:t.toggleRightDrawer},null,8,["onClick"])]),_:1}),e(Q,{align:"left",class:"hidden"},{default:a(()=>[e(n,{to:"/logo",label:"Logo"}),e(n,{to:"/teaching",label:"Teaching"}),e(n,{to:"/taking",label:"Taking"}),e(n,{to:"/gradebook",label:"Gradebook"})]),_:1})]),_:1}),e(i,{"show-if-above":"",modelValue:t.leftDrawerOpen,"onUpdate:modelValue":o[2]||(o[2]=r=>t.leftDrawerOpen=r),side:"left",bordered:""},null,8,["modelValue"]),e(i,{"show-if-above":"",modelValue:t.rightDrawerOpen,"onUpdate:modelValue":o[3]||(o[3]=r=>t.rightDrawerOpen=r),side:"right",bordered:""},null,8,["modelValue"]),e(C,{class:"container-fluid"},{default:a(()=>[e(i,{bordered:"","show-if-above":"",modelValue:t.leftDrawerOpen,"onUpdate:modelValue":o[4]||(o[4]=r=>t.leftDrawerOpen=r),side:"left"},{default:a(()=>[e(g,{visible:t.visible,style:{height:"95vh","max-width":"350px"}},null,8,["visible"])]),_:1},8,["modelValue"]),e(i,{bordered:"","show-if-above":"",modelValue:t.rightDrawerOpen,"onUpdate:modelValue":o[5]||(o[5]=r=>t.rightDrawerOpen=r),side:"right"},{default:a(()=>[e(g,{visible:t.visible,style:{height:"95vh","max-width":"350px"}},null,8,["visible"])]),_:1},8,["modelValue"]),h("div",R,[e(b)])]),_:1})]),_:1})}var I=v(L,[["render",B]]);export{I as default};
