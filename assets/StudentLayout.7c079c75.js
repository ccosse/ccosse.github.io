import{_ as D,d as C,r as i,P as f,s as u,o as d,c as m,w as r,a as e,Q as n,a1 as S,af as V,ak as h,e as _,f as l}from"./index.d067ac3a.js";import{Q as y,a as k,b as Q,c as s,d as w,e as O,f as L}from"./QLayout.9375956f.js";import{Q as A}from"./QTooltip.471cec36.js";import{u as T}from"./re-store.75b2b742.js";import{A as $}from"./AssignmentStatus.e80161ce.js";import{D as B}from"./DocumentationComponent.d1ff7e4b.js";import"./use-dark.63fdf5e5.js";import"./scroll.d54d2eab.js";import"./selection.09349c2c.js";import"./use-portal.de7e06d5.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";import"./use-form.8ef0da8e.js";import"./QCheckbox.bf13aaf2.js";import"./QList.601a2cce.js";const N=C({components:{AssignmentStatus:$,DocumentationComponent:B},name:"GuestLayout",setup(){const t=i(!1),o=i(!1),p=T();return{step:i(1),reStore:p,leftDrawerOpen:t,rightDrawerOpen:o,toggleLeftDrawer(){t.value=!t.value},toggleRightDrawer(){o.value=!o.value}}},mounted(){this.reStore.role="student",f.isActive||(f.toggle(),u("primary","#333"),u("secondary",this.reStore.preferences.secondaryColor),u("accent",this.reStore.preferences.accentColor))}}),R={class:"dashboard-wrapper"};function U(t,o,p,P,H,E){const c=l("router-link"),g=l("DocumentationComponent"),v=l("AssignmentStatus"),b=l("router-view");return d(),m(L,{view:"hHh LpR fFf"},{default:r(()=>[e(Q,{flat:"",bordered:"",class:"bg-primary text-white","height-hint":"98"},{default:r(()=>[e(y,null,{default:r(()=>[e(n,{dense:"",flat:"",round:"",icon:"menu",onClick:t.toggleLeftDrawer},null,8,["onClick"]),e(k,null,{default:r(()=>[e(c,{to:"/student",class:"text-white"},{default:r(()=>[e(S,{name:"home"})]),_:1})]),_:1}),this.reStore.authenticated?(d(),m(n,{key:0,onClick:o[0]||(o[0]=a=>this.reStore.router.push("/teacher")),icon:"switch_account"},{default:r(()=>[e(A,null,{default:r(()=>[V(" Switch between Teacher or Student role ")]),_:1})]),_:1})):h("",!0),this.reStore.authenticated?(d(),m(n,{key:1,icon:"logout",onClick:o[1]||(o[1]=a=>this.reStore.logout())})):h("",!0),e(n,{dense:"",flat:"",round:"",icon:"menu",onClick:t.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),e(s,{"show-if-above":"",modelValue:t.leftDrawerOpen,"onUpdate:modelValue":o[2]||(o[2]=a=>t.leftDrawerOpen=a),side:"left",bordered:""},null,8,["modelValue"]),e(s,{"show-if-above":"",modelValue:t.rightDrawerOpen,"onUpdate:modelValue":o[3]||(o[3]=a=>t.rightDrawerOpen=a),side:"right",bordered:""},null,8,["modelValue"]),e(O,{class:"container-fluid"},{default:r(()=>[e(s,{bordered:"","show-if-above":"",modelValue:t.leftDrawerOpen,"onUpdate:modelValue":o[4]||(o[4]=a=>t.leftDrawerOpen=a),side:"left"},{default:r(()=>[e(w,{visible:t.visible,style:{height:"95vh","max-width":"350px"}},{default:r(()=>[e(g)]),_:1},8,["visible"])]),_:1},8,["modelValue"]),e(s,{bordered:"","show-if-above":"",modelValue:t.rightDrawerOpen,"onUpdate:modelValue":o[5]||(o[5]=a=>t.rightDrawerOpen=a),side:"right"},{default:r(()=>[e(w,{visible:t.visible,style:{height:"95vh","max-width":"350px"}},{default:r(()=>[e(v)]),_:1},8,["visible"])]),_:1},8,["modelValue"]),_("div",R,[e(b)])]),_:1})]),_:1})}var te=D(N,[["render",U]]);export{te as default};
