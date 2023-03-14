import{d as V,r as n,_ as Q,o as l,ag as b,a as e,w as s,c as _,ah as $,ai as L,e as k,aj as B,ak as T,P as v,s as g,Q as h,f as a}from"./index.97368e41.js";import{Q as U,a as N,b as R,c as p,d as w,e as G,f as q}from"./QLayout.c3ce11a6.js";import{Q as f}from"./QRouteTab.b32809e7.js";import{Q as x}from"./QTabs.d96d8c86.js";import{u as y}from"./re-store.8e1f257b.js";import{A as E}from"./AssignmentStatus.a5cf86f4.js";import{P as F}from"./PreferencesComponent.0750b269.js";import{Q as H,D as J}from"./DocumentationComponent.3dd9fb30.js";import{Q as j}from"./QImg.f55f9642.js";import{Q as C,a as I}from"./use-form.aef221b0.js";import{Q as z}from"./QExpansionItem.c6ed340c.js";import"./use-dark.2c32762b.js";import"./scroll.2db3cf32.js";import"./selection.6bfe97d1.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";import"./ClosePopup.feb2d61c.js";import"./use-portal.9c00c606.js";import"./use-key-composition.8db05892.js";import"./QTooltip.710f1927.js";import"./QCheckbox.569a7898.js";const K=V({name:"AssignmentPager",setup(){return{reStore:y(),title:n("Available Assignments"),course:n(null)}},mounted(){console.log("      AssignmentPager: The purpose of this component is to present       available Demo assignments (from Demo Course) available to try    ");const t=this.reStore.courses.ck;this.course=JSON.parse(JSON.stringify(this.reStore.courses[t]))},methods:{loadAssignmentCB(t){console.log("AssignmentPager loadAssignmentCB",t);const o=this.reStore.courses.ck;this.reStore.loadAssignment(o,t),this.reStore.courses.trigger+=1}}}),M={class:"q-pa-md",style:{"max-width":"350px"}},W={class:"float-left"};function X(t,o,i,c,D,A){return l(),b("div",M,[e(H,{bordered:"",class:"rounded-borders"},{default:s(()=>[e(z,{label:"Available Assignments"},{default:s(()=>[e(C,{flat:""},{default:s(()=>[this.course?(l(),_(I,{key:0},{default:s(()=>[(l(!0),b($,null,L(this.course.assignments,(m,u)=>(l(),_(C,{class:"bg-primary otdcard q-pa-xs q-my-md",flat:"",bordered:"",modelValue:this.course.assignments,"onUpdate:modelValue":o[0]||(o[0]=d=>this.course.assignments=d),key:u},{default:s(()=>[k("span",W,B(m.title),1),e(j,{height:"200px",src:m.coverUrl,onClick:d=>t.loadAssignmentCB(u)},null,8,["src","onClick"])]),_:2},1032,["modelValue"]))),128))]),_:1})):T("",!0)]),_:1})]),_:1})]),_:1})])}var Y=Q(K,[["render",X]]);const Z=V({name:"GuestLayout",components:{AssignmentPager:Y,AssignmentStatus:E,DocumentationComponent:J,PreferencesComponent:F},setup(){const t=n(!1),o=n(!1),i=y(),c=i.preferences;return{step:n(1),reStore:i,initialValues:n(c),leftDrawerOpen:t,rightDrawerOpen:o,toggleLeftDrawer(){t.value=!t.value},toggleRightDrawer(){o.value=!o.value}}},mounted(){this.reStore.role="demo",v.isActive||(v.toggle(),g("primary","#333"),g("secondary",this.reStore.preferences.secondaryColor),g("accent",this.reStore.preferences.accentColor))}}),ee={class:"dashboard-wrapper"};function te(t,o,i,c,D,A){const m=a("router-link"),u=a("DocumentationComponent"),d=a("AssignmentPager"),S=a("AssignmentStatus"),P=a("PreferencesComponent"),O=a("router-view");return l(),_(q,{view:"hHh LpR fFf"},{default:s(()=>[e(R,{flat:"",bordered:"",class:"bg-primary text-white","height-hint":"98"},{default:s(()=>[e(U,null,{default:s(()=>[e(h,{dense:"",flat:"",round:"",icon:"menu",onClick:t.toggleLeftDrawer},null,8,["onClick"]),e(N,null,{default:s(()=>[e(m,{to:"/"},{default:s(()=>[e(h,{dense:"",flat:"",round:"",icon:"home",color:"white"})]),_:1})]),_:1}),e(h,{dense:"",flat:"",round:"",icon:"menu",onClick:t.toggleRightDrawer},null,8,["onClick"])]),_:1}),e(x,{align:"left",class:"hidden"},{default:s(()=>[e(f,{to:"/logo",label:"Logo"}),e(f,{to:"/teaching",label:"Teaching"}),e(f,{to:"/taking",label:"Taking"}),e(f,{to:"/gradebook",label:"Gradebook"})]),_:1})]),_:1}),e(p,{"show-if-above":"",modelValue:t.leftDrawerOpen,"onUpdate:modelValue":o[0]||(o[0]=r=>t.leftDrawerOpen=r),side:"left",bordered:""},null,8,["modelValue"]),e(p,{"show-if-above":"",modelValue:t.rightDrawerOpen,"onUpdate:modelValue":o[1]||(o[1]=r=>t.rightDrawerOpen=r),side:"right",bordered:""},null,8,["modelValue"]),e(G,{class:"container-fluid"},{default:s(()=>[e(p,{bordered:"","show-if-above":"",modelValue:t.leftDrawerOpen,"onUpdate:modelValue":o[2]||(o[2]=r=>t.leftDrawerOpen=r),side:"left"},{default:s(()=>[e(w,{visible:t.visible,style:{height:"95vh","max-width":"350px"}},{default:s(()=>[e(u),e(d)]),_:1},8,["visible"])]),_:1},8,["modelValue"]),e(p,{bordered:"","show-if-above":"",modelValue:t.rightDrawerOpen,"onUpdate:modelValue":o[3]||(o[3]=r=>t.rightDrawerOpen=r),side:"right"},{default:s(()=>[e(w,{visible:t.visible,style:{height:"95vh","max-width":"350px"}},{default:s(()=>[e(S),e(P,{initialValues:this.initialValues},null,8,["initialValues"])]),_:1},8,["visible"])]),_:1},8,["modelValue"]),k("div",ee,[e(O)])]),_:1})]),_:1})}var Qe=Q(Z,[["render",te]]);export{Qe as default};
