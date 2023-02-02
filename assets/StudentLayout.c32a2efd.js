import{_ as v,d as c,r as s,o as d,c as u,w as o,a as e,Q as l,av as _,ac as k,aw as p,e as h,f as g}from"./index.65b17516.js";import{Q as V,a as D,b as Q,c as n,d as y,e as i,f as m,g as C,h as S}from"./QLayout.4d997391.js";import{Q as O}from"./QTooltip.53009d40.js";import{u as T}from"./re-store.fffddec5.js";import"./use-dark.8ca60e02.js";import"./use-portal.7d62749e.js";import"./firebase.8ff914f0.js";const L=c({name:"GuestLayout",setup(){const t=s(!1),a=s(!1),f=T();return{step:s(1),reStore:f,leftDrawerOpen:t,rightDrawerOpen:a,toggleLeftDrawer(){t.value=!t.value},toggleRightDrawer(){a.value=!a.value}}}}),$=h("img",{src:"https://readingedgeca.s3.us-west-1.amazonaws.com/static/pub/img/reading_edge_200x200.png"},null,-1),R={class:"dashboard-wrapper"};function B(t,a,f,N,U,z){const w=g("router-link"),b=g("router-view");return d(),u(S,{view:"hHh lpR fFf"},{default:o(()=>[e(y,{flat:"",bordered:"",class:"bg-primary text-white","height-hint":"98"},{default:o(()=>[e(V,null,{default:o(()=>[e(l,{dense:"",flat:"",round:"",icon:"menu",onClick:t.toggleLeftDrawer},null,8,["onClick"]),e(D,null,{default:o(()=>[e(w,{to:"/"},{default:o(()=>[e(_,{size:"25px"},{default:o(()=>[$]),_:1})]),_:1})]),_:1}),this.reStore.authenticated?(d(),u(l,{key:0,onClick:a[0]||(a[0]=r=>this.reStore.router.push("/teacher")),icon:"switch_account"},{default:o(()=>[e(O,null,{default:o(()=>[k(" Switch between Teacher or Student role ")]),_:1})]),_:1})):p("",!0),this.reStore.authenticated?(d(),u(l,{key:1,icon:"logout",onClick:a[1]||(a[1]=r=>this.reStore.logout())})):p("",!0),e(l,{dense:"",flat:"",round:"",icon:"menu",onClick:t.toggleRightDrawer},null,8,["onClick"])]),_:1}),e(Q,{align:"left",class:"hidden"},{default:o(()=>[e(n,{to:"/logo",label:"Logo"}),e(n,{to:"/teaching",label:"Teaching"}),e(n,{to:"/taking",label:"Taking"}),e(n,{to:"/gradebook",label:"Gradebook"})]),_:1})]),_:1}),e(i,{"show-if-above":"",modelValue:t.leftDrawerOpen,"onUpdate:modelValue":a[2]||(a[2]=r=>t.leftDrawerOpen=r),side:"left",bordered:""},null,8,["modelValue"]),e(i,{"show-if-above":"",modelValue:t.rightDrawerOpen,"onUpdate:modelValue":a[3]||(a[3]=r=>t.rightDrawerOpen=r),side:"right",bordered:""},null,8,["modelValue"]),e(C,{class:"container-fluid"},{default:o(()=>[e(i,{bordered:"","show-if-above":"",modelValue:t.leftDrawerOpen,"onUpdate:modelValue":a[4]||(a[4]=r=>t.leftDrawerOpen=r),side:"left"},{default:o(()=>[e(m,{visible:t.visible,style:{height:"95vh","max-width":"350px"}},null,8,["visible"])]),_:1},8,["modelValue"]),e(i,{bordered:"","show-if-above":"",modelValue:t.rightDrawerOpen,"onUpdate:modelValue":a[5]||(a[5]=r=>t.rightDrawerOpen=r),side:"right"},{default:o(()=>[e(m,{visible:t.visible,style:{height:"95vh","max-width":"350px"}},null,8,["visible"])]),_:1},8,["modelValue"]),h("div",R,[e(b)])]),_:1})]),_:1})}var j=v(L,[["render",B]]);export{j as default};
