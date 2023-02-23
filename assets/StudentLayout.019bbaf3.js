import{_ as D,d as C,r as i,P as f,s as u,o as d,c as m,w as r,a as e,Q as n,a1 as S,ag as V,al as h,e as _,f as l}from"./index.8acc1f94.js";import{Q as y,a as Q,b as k,c as s,d as g,e as O,f as L}from"./QLayout.26192d97.js";import{Q as A}from"./QTooltip.f25d7c81.js";import{u as T}from"./re-store.01657044.js";import{A as $,D as B}from"./DocumentationComponent.1eea84a9.js";import"./use-prevent-scroll.b67e557f.js";import"./scroll.db1356ae.js";import"./use-dark.d64486ff.js";import"./selection.2619952a.js";import"./use-portal.20071395.js";import"./firebase.0eb8f378.js";import"./transform.aea72fbe.js";import"./index.2cf0d985.js";import"./use-form.30a6179d.js";import"./QCard.0487b603.js";import"./QExpansionItem.6abc0c89.js";import"./QCheckbox.f54a2775.js";import"./QList.d78494aa.js";const N=C({components:{AssignmentStatus:$,DocumentationComponent:B},name:"GuestLayout",setup(){const t=i(!1),o=i(!1),p=T();return{step:i(1),reStore:p,leftDrawerOpen:t,rightDrawerOpen:o,toggleLeftDrawer(){t.value=!t.value},toggleRightDrawer(){o.value=!o.value}}},mounted(){this.reStore.role="student",f.isActive||(f.toggle(),u("primary","#333"),u("secondary",this.reStore.preferences.secondaryColor),u("accent",this.reStore.preferences.accentColor))}}),R={class:"dashboard-wrapper"};function U(t,o,p,P,H,E){const w=l("router-link"),c=l("DocumentationComponent"),v=l("AssignmentStatus"),b=l("router-view");return d(),m(L,{view:"hHh LpR fFf"},{default:r(()=>[e(k,{flat:"",bordered:"",class:"bg-primary text-white","height-hint":"98"},{default:r(()=>[e(y,null,{default:r(()=>[e(n,{dense:"",flat:"",round:"",icon:"menu",onClick:t.toggleLeftDrawer},null,8,["onClick"]),e(Q,null,{default:r(()=>[e(w,{to:"/student",class:"text-white"},{default:r(()=>[e(S,{name:"home"})]),_:1})]),_:1}),this.reStore.authenticated?(d(),m(n,{key:0,onClick:o[0]||(o[0]=a=>this.reStore.router.push("/teacher")),icon:"switch_account"},{default:r(()=>[e(A,null,{default:r(()=>[V(" Switch between Teacher or Student role ")]),_:1})]),_:1})):h("",!0),this.reStore.authenticated?(d(),m(n,{key:1,icon:"logout",onClick:o[1]||(o[1]=a=>this.reStore.logout())})):h("",!0),e(n,{dense:"",flat:"",round:"",icon:"menu",onClick:t.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),e(s,{"show-if-above":"",modelValue:t.leftDrawerOpen,"onUpdate:modelValue":o[2]||(o[2]=a=>t.leftDrawerOpen=a),side:"left",bordered:""},null,8,["modelValue"]),e(s,{"show-if-above":"",modelValue:t.rightDrawerOpen,"onUpdate:modelValue":o[3]||(o[3]=a=>t.rightDrawerOpen=a),side:"right",bordered:""},null,8,["modelValue"]),e(O,{class:"container-fluid"},{default:r(()=>[e(s,{bordered:"","show-if-above":"",modelValue:t.leftDrawerOpen,"onUpdate:modelValue":o[4]||(o[4]=a=>t.leftDrawerOpen=a),side:"left"},{default:r(()=>[e(g,{visible:t.visible,style:{height:"95vh","max-width":"350px"}},{default:r(()=>[e(c)]),_:1},8,["visible"])]),_:1},8,["modelValue"]),e(s,{bordered:"","show-if-above":"",modelValue:t.rightDrawerOpen,"onUpdate:modelValue":o[5]||(o[5]=a=>t.rightDrawerOpen=a),side:"right"},{default:r(()=>[e(g,{visible:t.visible,style:{height:"95vh","max-width":"350px"}},{default:r(()=>[e(v)]),_:1},8,["visible"])]),_:1},8,["modelValue"]),_("div",R,[e(b)])]),_:1})]),_:1})}var ae=D(N,[["render",U]]);export{ae as default};
