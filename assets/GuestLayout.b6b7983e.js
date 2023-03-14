import{d as Q,r as n,_ as V,o as l,ag as b,a as e,w as r,c as _,ah as $,ai as L,e as D,aj as B,ak as T,P as v,s as g,Q as h,f as a}from"./index.f8b450a7.js";import{Q as U,a as N,b as R,c as p,d as w,e as G,f as q}from"./QLayout.2d214c72.js";import{Q as c}from"./QRouteTab.8145c1ab.js";import{Q as x}from"./QTabs.e6884b16.js";import{u as k}from"./re-store.eb1c8086.js";import{A as E}from"./AssignmentStatus.52bef623.js";import{P as F}from"./PreferencesComponent.08fb0dfa.js";import{D as H}from"./DocumentationComponent.85e52dea.js";import{Q as J}from"./QImg.dd2f8b26.js";import{Q as C}from"./QCard.45f525cb.js";import{Q as j}from"./use-form.12680db8.js";import{Q as I}from"./QExpansionItem.9a9c7403.js";import{Q as z}from"./QList.839b0a8b.js";import"./use-prevent-scroll.ecb1410a.js";import"./scroll.942cf804.js";import"./use-dark.0a08b69e.js";import"./selection.ed78409a.js";import"./firebase.0eb8f378.js";import"./transform.aea72fbe.js";import"./index.2cf0d985.js";import"./ClosePopup.b96afa78.js";import"./use-portal.16c4f851.js";import"./use-key-composition.933ae1d8.js";import"./QTooltip.c0a9bcce.js";import"./QCheckbox.f3a8e94b.js";const K=Q({name:"AssignmentPager",setup(){return{reStore:k(),title:n("Available Assignments"),course:n(null)}},mounted(){console.log("      AssignmentPager: The purpose of this component is to present       available Demo assignments (from Demo Course) available to try    ");const t=this.reStore.courses.ck;this.course=JSON.parse(JSON.stringify(this.reStore.courses[t]))},methods:{loadAssignmentCB(t){console.log("AssignmentPager loadAssignmentCB",t);const o=this.reStore.courses.ck;this.reStore.loadAssignment(o,t),this.reStore.courses.trigger+=1}}}),M={class:"q-pa-md",style:{"max-width":"350px"}},W={class:"float-left"};function X(t,o,i,f,y,A){return l(),b("div",M,[e(z,{bordered:"",class:"rounded-borders"},{default:r(()=>[e(I,{icon:"collections",label:"Demo Assignments"},{default:r(()=>[e(C,{flat:""},{default:r(()=>[this.course?(l(),_(j,{key:0},{default:r(()=>[(l(!0),b($,null,L(this.course.assignments,(m,u)=>(l(),_(C,{class:"bg-primary otdcard q-pa-xs q-my-md",flat:"",bordered:"",modelValue:this.course.assignments,"onUpdate:modelValue":o[0]||(o[0]=d=>this.course.assignments=d),key:u},{default:r(()=>[D("span",W,B(m.title),1),e(J,{height:"200px",src:m.coverUrl,onClick:d=>t.loadAssignmentCB(u)},null,8,["src","onClick"])]),_:2},1032,["modelValue"]))),128))]),_:1})):T("",!0)]),_:1})]),_:1})]),_:1})])}var Y=V(K,[["render",X]]);const Z=Q({name:"GuestLayout",components:{AssignmentPager:Y,AssignmentStatus:E,DocumentationComponent:H,PreferencesComponent:F},setup(){const t=n(!1),o=n(!1),i=k(),f=i.preferences;return{step:n(1),reStore:i,initialValues:n(f),leftDrawerOpen:t,rightDrawerOpen:o,toggleLeftDrawer(){t.value=!t.value},toggleRightDrawer(){o.value=!o.value}}},mounted(){this.reStore.role="demo",v.isActive||(v.toggle(),g("primary","#333"),g("secondary",this.reStore.preferences.secondaryColor),g("accent",this.reStore.preferences.accentColor))}}),ee={class:"dashboard-wrapper"};function te(t,o,i,f,y,A){const m=a("router-link"),u=a("DocumentationComponent"),d=a("AssignmentPager"),S=a("PreferencesComponent"),P=a("AssignmentStatus"),O=a("router-view");return l(),_(q,{view:"hHh LpR fFf"},{default:r(()=>[e(R,{flat:"",bordered:"",class:"bg-primary text-white","height-hint":"98"},{default:r(()=>[e(U,null,{default:r(()=>[e(h,{dense:"",flat:"",round:"",icon:"menu",onClick:t.toggleLeftDrawer},null,8,["onClick"]),e(N,null,{default:r(()=>[e(m,{to:"/"},{default:r(()=>[e(h,{dense:"",flat:"",round:"",icon:"home",color:"white"})]),_:1})]),_:1}),e(h,{dense:"",flat:"",round:"",icon:"menu",onClick:t.toggleRightDrawer},null,8,["onClick"])]),_:1}),e(x,{align:"left",class:"hidden"},{default:r(()=>[e(c,{to:"/logo",label:"Logo"}),e(c,{to:"/teaching",label:"Teaching"}),e(c,{to:"/taking",label:"Taking"}),e(c,{to:"/gradebook",label:"Gradebook"})]),_:1})]),_:1}),e(p,{"show-if-above":"",modelValue:t.leftDrawerOpen,"onUpdate:modelValue":o[0]||(o[0]=s=>t.leftDrawerOpen=s),side:"left",bordered:""},null,8,["modelValue"]),e(p,{"show-if-above":"",modelValue:t.rightDrawerOpen,"onUpdate:modelValue":o[1]||(o[1]=s=>t.rightDrawerOpen=s),side:"right",bordered:""},null,8,["modelValue"]),e(G,{class:"container-fluid"},{default:r(()=>[e(p,{bordered:"","show-if-above":"",modelValue:t.leftDrawerOpen,"onUpdate:modelValue":o[2]||(o[2]=s=>t.leftDrawerOpen=s),side:"left"},{default:r(()=>[e(w,{visible:t.visible,style:{height:"95vh","max-width":"350px"}},{default:r(()=>[e(u),e(d),e(S,{initialValues:this.initialValues},null,8,["initialValues"])]),_:1},8,["visible"])]),_:1},8,["modelValue"]),e(p,{bordered:"","show-if-above":"",modelValue:t.rightDrawerOpen,"onUpdate:modelValue":o[3]||(o[3]=s=>t.rightDrawerOpen=s),side:"right"},{default:r(()=>[e(w,{visible:t.visible,style:{height:"95vh","max-width":"350px"}},{default:r(()=>[e(P)]),_:1},8,["visible"])]),_:1},8,["modelValue"]),D("div",ee,[e(O)])]),_:1})]),_:1})}var Ae=V(Z,[["render",te]]);export{Ae as default};
