import{_ as V,e as D,r as s,P as f,s as p,o as C,f as _,w as r,g as e,Q as u,j as Q,k,l as n}from"./index.600d8139.js";import{Q as y}from"./QTooltip.8a722276.js";import{A as S,D as A,Q as O}from"./DocumentationComponent.a8f50459.js";import{Q as P,a as L,b as i,c as g,d as T,e as R}from"./QLayout.34981f01.js";import{Q as l}from"./QRouteTab.a23ed81e.js";import{Q as $}from"./QTabs.c17a7c84.js";import{u as B}from"./re-store.89a69545.js";import{A as G,P as U}from"./AssignmentPager.811fd343.js";import"./scroll.88eb214a.js";import"./QCardSection.9a644ae0.js";import"./QCard.48f74f10.js";import"./use-dark.6b8e3cc1.js";import"./QList.08417c6a.js";import"./use-prevent-scroll.f961c476.js";import"./transform.aea72fbe.js";import"./QCheckbox.7c94c9f2.js";import"./use-form.50910338.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";import"./ClosePopup.017ff876.js";import"./use-key-composition.d803eec0.js";import"./QImg.7099fc15.js";const H=D({name:"GuestLayout",components:{AssignmentPager:G,AssignmentStatus:S,DocumentationComponent:A,PreferencesComponent:U},setup(){const o=s(!1),t=s(!1),m=B(),d=m.preferences;return{step:s(1),reStore:m,initialValues:s(d),leftDrawerOpen:o,rightDrawerOpen:t,toggleLeftDrawer(){o.value=!o.value},toggleRightDrawer(){t.value=!t.value}}},mounted(){this.reStore.role="demo",f.isActive||(f.toggle(),p("primary","#333"),p("secondary",this.reStore.preferences.secondaryColor),p("accent",this.reStore.preferences.accentColor))}}),N={class:"dashboard-wrapper"};function j(o,t,m,d,E,F){const c=n("DocumentationComponent"),h=n("PreferencesComponent"),w=n("AssignmentPager"),b=n("AssignmentStatus"),v=n("router-view");return C(),_(R,{view:"hHh LpR fFf"},{default:r(()=>[e(L,{flat:"",bordered:"",class:"bg-primary text-white","height-hint":"98"},{default:r(()=>[e(P,null,{default:r(()=>[e(u,{icon:"menu",onClick:o.toggleLeftDrawer},null,8,["onClick"]),e(u,{onClick:t[0]||(t[0]=a=>this.reStore.router.push("/")),icon:"home"},{default:r(()=>[e(y,null,{default:r(()=>[Q("Home")]),_:1})]),_:1}),e(O),e(u,{icon:"menu",onClick:o.toggleRightDrawer},null,8,["onClick"])]),_:1}),e($,{align:"left",class:"hidden"},{default:r(()=>[e(l,{to:"/logo",label:"Logo"}),e(l,{to:"/teaching",label:"Teaching"}),e(l,{to:"/taking",label:"Taking"}),e(l,{to:"/gradebook",label:"Gradebook"})]),_:1})]),_:1}),e(i,{"show-if-above":"",modelValue:o.leftDrawerOpen,"onUpdate:modelValue":t[1]||(t[1]=a=>o.leftDrawerOpen=a),side:"left",bordered:""},null,8,["modelValue"]),e(i,{"show-if-above":"",modelValue:o.rightDrawerOpen,"onUpdate:modelValue":t[2]||(t[2]=a=>o.rightDrawerOpen=a),side:"right",bordered:""},null,8,["modelValue"]),e(T,{class:"container-fluid"},{default:r(()=>[e(i,{bordered:"","show-if-above":"",modelValue:o.leftDrawerOpen,"onUpdate:modelValue":t[3]||(t[3]=a=>o.leftDrawerOpen=a),side:"left"},{default:r(()=>[e(g,{visible:o.visible,style:{height:"95vh","max-width":"350px"}},{default:r(()=>[e(c),e(h,{initialValues:this.initialValues},null,8,["initialValues"]),e(w)]),_:1},8,["visible"])]),_:1},8,["modelValue"]),e(i,{bordered:"","show-if-above":"",modelValue:o.rightDrawerOpen,"onUpdate:modelValue":t[4]||(t[4]=a=>o.rightDrawerOpen=a),side:"right"},{default:r(()=>[e(g,{visible:o.visible,style:{height:"95vh","max-width":"350px"}},{default:r(()=>[e(b)]),_:1},8,["visible"])]),_:1},8,["modelValue"]),k("div",N,[e(v)])]),_:1})]),_:1})}var ue=V(H,[["render",j]]);export{ue as default};