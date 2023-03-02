import{_ as C,e as D,r as s,P as g,s as i,o as u,f as d,w as r,g as t,Q as n,j as p,as as w,k as V,l as m}from"./index.d41949e8.js";import{Q as f}from"./QTooltip.92ef24cd.js";import{A as y,D as k,Q}from"./DocumentationComponent.7dccc934.js";import{Q as _,a as O,b as l,c as v,d as $,e as L}from"./QLayout.567fe0ea.js";import{u as A}from"./re-store.9b813dbf.js";import"./scroll.a7c4301e.js";import"./use-form.9307e729.js";import"./QCard.2a5a8db4.js";import"./use-dark.2220006b.js";import"./QList.91bdd8ef.js";import"./use-prevent-scroll.b7a6f442.js";import"./transform.aea72fbe.js";import"./QCheckbox.ce0b632c.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";const R=D({components:{AssignmentStatus:y,DocumentationComponent:k},name:"GuestLayout",setup(){const o=s(!1),e=s(!1),h=A();return{step:s(1),reStore:h,leftDrawerOpen:o,rightDrawerOpen:e,toggleLeftDrawer(){o.value=!o.value},toggleRightDrawer(){e.value=!e.value}}},mounted(){this.reStore.role="student",g.isActive||(g.toggle(),i("primary","#333"),i("secondary",this.reStore.preferences.secondaryColor),i("accent",this.reStore.preferences.accentColor))}}),P={class:"dashboard-wrapper"};function B(o,e,h,N,T,U){const c=m("DocumentationComponent"),S=m("AssignmentStatus"),b=m("router-view");return u(),d(L,{view:"hHh LpR fFf"},{default:r(()=>[t(O,{flat:"",bordered:"",class:"bg-primary text-white","height-hint":"98"},{default:r(()=>[t(_,null,{default:r(()=>[t(n,{icon:"menu",onClick:o.toggleLeftDrawer},null,8,["onClick"]),t(n,{onClick:e[0]||(e[0]=a=>this.reStore.router.push("/student")),icon:"home"},{default:r(()=>[t(f,null,{default:r(()=>[p("Return to My Student Page")]),_:1})]),_:1}),t(Q),t(n,{onClick:e[1]||(e[1]=a=>this.reStore.router.push("/student")),icon:"home"},{default:r(()=>[t(f,null,{default:r(()=>[p("Return to My Student Page")]),_:1})]),_:1}),this.reStore.authenticated?(u(),d(n,{key:0,onClick:e[2]||(e[2]=a=>this.reStore.router.push("/teacher")),icon:"switch_account"},{default:r(()=>[t(f,null,{default:r(()=>[p(" Switch between Teacher or Student role ")]),_:1})]),_:1})):w("",!0),this.reStore.authenticated?(u(),d(n,{key:1,icon:"logout",onClick:e[3]||(e[3]=a=>this.reStore.logout())})):w("",!0),t(n,{icon:"menu",onClick:o.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),t(l,{"show-if-above":"",modelValue:o.leftDrawerOpen,"onUpdate:modelValue":e[4]||(e[4]=a=>o.leftDrawerOpen=a),side:"left",bordered:""},null,8,["modelValue"]),t(l,{"show-if-above":"",modelValue:o.rightDrawerOpen,"onUpdate:modelValue":e[5]||(e[5]=a=>o.rightDrawerOpen=a),side:"right",bordered:""},null,8,["modelValue"]),t($,{class:"container-fluid"},{default:r(()=>[t(l,{bordered:"","show-if-above":"",modelValue:o.leftDrawerOpen,"onUpdate:modelValue":e[6]||(e[6]=a=>o.leftDrawerOpen=a),side:"left"},{default:r(()=>[t(v,{visible:o.visible,style:{height:"95vh","max-width":"350px"}},{default:r(()=>[t(c)]),_:1},8,["visible"])]),_:1},8,["modelValue"]),t(l,{bordered:"","show-if-above":"",modelValue:o.rightDrawerOpen,"onUpdate:modelValue":e[7]||(e[7]=a=>o.rightDrawerOpen=a),side:"right"},{default:r(()=>[t(v,{visible:o.visible,style:{height:"95vh","max-width":"350px"}},{default:r(()=>[t(S)]),_:1},8,["visible"])]),_:1},8,["modelValue"]),V("div",P,[t(b)])]),_:1})]),_:1})}var x=C(R,[["render",B]]);export{x as default};