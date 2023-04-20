import{e as P,r as g,u as T,_ as B,o as i,an as m,g as t,w as r,ao as U,j as u,ap as l,f as b,k as o,aq as f,ar as E,as as q,i as G,at as w,Q as C,P as y,s as k,l as _}from"./index.0593ff5d.js";import{Q as S}from"./QTooltip.f87d82fb.js";import{A as N,D as H,Q as K}from"./DocumentationComponent.e29e55e0.js";import{Q as j,a as z,b as v,c as D,d as F,e as I}from"./QLayout.9fbc9104.js";import{Q as A}from"./QRouteTab.d047739d.js";import{Q as M}from"./QTabs.ae392e2c.js";import{u as O}from"./re-store.18599349.js";import{P as W}from"./PreferencesComponent.1f77666b.js";import{Q as J,a as Q}from"./QExpansionItem.f1c43f19.js";import{Q as V}from"./QCard.08d12015.js";import{Q as X}from"./QList.61034403.js";import{Q as Y}from"./QImg.1f3e2eaf.js";import"./scroll.93d34c24.js";import"./QCardSection.f1c1c46f.js";import"./transform.aea72fbe.js";import"./QCheckbox.5012ce81.js";import"./use-dark.247fe131.js";import"./use-form.bbc6f152.js";import"./use-prevent-scroll.9391e725.js";import"./uid.42677368.js";import"./firebase.79bf92f9.js";import"./index.2cf0d985.js";import"./ClosePopup.7de35dad.js";import"./use-key-composition.c27381be.js";const Z=P({name:"DemoAssignmentPager",setup(){return{reStore:O(),course:g(null),defaultOpen:g(!0)}},mounted(){console.log("      DemoAssignmentPager: The purpose of this component is to present       available Demo assignments (from Demo Course) available to try    "),T(this.reStore.courses,async(e,s)=>{console.log("DemoAssignmentPager watcher");const n=e.ck;e.aid;try{console.log("AP setcourse 0",n),n!=="undefined"&&n!==null?this.course=this.reStore.courses[n]:console.log("did not set AP course")}catch(h){console.log("ERROR AssignmentPager ",h)}!this.course&&n?(console.log("AP setcourse 1"),this.course=this.reStore.courses[n]):this.course&&this.course.courseKey!==e.ck&&(console.log("AP setcourse 2"),this.course=this.reStore.courses[n]),console.log("AssignmentPager watcher COURSE",this.course)},{immediate:!0,deep:!0})},methods:{editAssignmentCB(e){console.log("AP editAssigmentCB ",e);const s=this.reStore.courses.ck;this.reStore.loadAssignment(s,e),this.reStore.courses.trigger+=1},newAssignmentCB(){const e=this.reStore.courses.ck;console.log("assignmentCB: ",e),this.reStore.newAssignment(e)},removeAssignmentCB(e){const s=this.reStore.courses.ck;console.log("removeAssignmentCB",s,e),this.reStore.deleteAssignment(s,e),console.log("done")},loadAssignmentCB(e){console.log("AssignmentPager loadAssignmentCB",e);const s=this.reStore.courses.ck;this.reStore.loadAssignment(s,e),this.reStore.courses.trigger+=1,this.reStore.authenticated?this.reStore.router.push("/teacher/assignmenteditor"):this.reStore.router.push("/demo")},autoAwesomeCB(){this.reStore.autoAwesomeCB(this.reStore.ck,this.autoAwesomeGuideWords)}}}),ee={key:0,class:"q-pa-md",style:{"max-width":"350px"}},te=o("td",null,"Course",-1),se={class:"hidden"},oe=o("td",null,"Key",-1),re=o("td",null,"Enrollment",-1),ne=o("td",null,"Assignments",-1),ie={key:0},le=o("td",null,"Loaded",-1),ae={key:0},ue={key:1},de={class:"flex flex-center text-bold q-my-md"},me={key:0},ce={class:"absolute-top text-center"},pe={class:"text-h6"},ge={class:"text-subtitle2"},he={style:{"font-size":"22pt",width:"100%"},class:"text-center absolute-bottom"},fe={key:0};function _e(e,s,n,h,$,L){return this.course?(i(),m("div",ee,[t(X,{bordered:"",class:"rounded-borders"},{default:r(()=>[t(J,{modelValue:e.defaultOpen,"onUpdate:modelValue":s[0]||(s[0]=d=>e.defaultOpen=d)},{header:r(()=>[t(Q,{avatar:""},{default:r(()=>[t(U,{size:"md",color:"positive",icon:"collections"})]),_:1}),t(Q,null,{default:r(()=>[u(l(this.course.title),1)]),_:1})]),default:r(()=>[this.course?(i(),b(V,{key:0,class:"q-pa-md"},{default:r(()=>[o("table",null,[o("tr",null,[te,u(),o("td",null,l(this.course.title),1)]),o("tr",se,[oe,u(),o("td",null,l(this.course.courseKey),1)]),o("tr",null,[re,u(),o("td",null,l(Object.keys(this.course.enrollment).length),1)]),o("tr",null,[ne,u(),o("td",null,[this.course.assignments?(i(),m("span",ie,l(Object.keys(this.course.assignments).length),1)):f("",!0)])]),o("tr",null,[le,o("td",null,[this.reStore.courses.aid&&this.course.assignments[this.reStore.courses.aid]?(i(),m("span",ae,l(this.course.assignments[this.reStore.courses.aid].title),1)):(i(),m("span",ue,"None"))])])])]),_:1})):f("",!0)]),_:1},8,["modelValue"])]),_:1}),o("span",de,l(this.course.title)+": Assignments",1),this.course&&this.course.assignments!=="undefined"?(i(),m("span",me,[(i(!0),m(E,null,q(this.course.assignments,(d,c)=>(i(),b(V,{class:"otdcard bg-primary q-pa-xs q-ma-sm",flat:"",bordered:"",modelValue:this.course.assignments,"onUpdate:modelValue":s[3]||(s[3]=p=>this.course.assignments=p),key:c},{default:r(()=>[t(Y,{height:"250px",width:"100%",src:d.coverUrl,onClick:p=>this.loadAssignmentCB(c)},{default:r(()=>[o("div",ce,[o("div",pe,l(d.title.slice(0,18)),1),o("div",ge,[o("span",null,"Pages: "+l(d.pages.length),1)])]),o("div",he,[o("div",null,[this.reStore.authenticated?(i(),m("span",fe,[t(G,{color:"red",class:"ptr",name:"delete",onClick:[s[1]||(s[1]=w(()=>{},["stop","prevent"])),p=>this.deleteAssignmentCB(c)]},{default:r(()=>[t(S,null,{default:r(()=>[u("Delete Assignment")]),_:1})]),_:2},1032,["onClick"]),t(C,{icon:"edit",onClick:[s[2]||(s[2]=w(()=>{},["stop","prevent"])),p=>this.editAssignmentCB(c)]},{default:r(()=>[t(S,null,{default:r(()=>[u("Edit Assignment")]),_:1})]),_:2},1032,["onClick"])])):f("",!0)])])]),_:2},1032,["src","onClick"])]),_:2},1032,["modelValue"]))),128))])):f("",!0)])):f("",!0)}var ve=B(Z,[["render",_e]]);const Ae=P({name:"GuestLayout",components:{DemoAssignmentPager:ve,AssignmentStatus:N,DocumentationComponent:H,PreferencesComponent:W},setup(){const e=g(!1),s=g(!1),n=O(),h=n.preferences;return{step:g(1),reStore:n,initialValues:g(h),leftDrawerOpen:e,rightDrawerOpen:s,toggleLeftDrawer(){e.value=!e.value},toggleRightDrawer(){s.value=!s.value}}},mounted(){this.reStore.role="demo",y.isActive||(y.toggle(),k("primary","#333"),k("secondary",this.reStore.preferences.secondaryColor),k("accent",this.reStore.preferences.accentColor))}}),Ce={class:"dashboard-wrapper"};function ke(e,s,n,h,$,L){const d=_("DocumentationComponent"),c=_("PreferencesComponent"),p=_("DemoAssignmentPager"),R=_("AssignmentStatus"),x=_("router-view");return i(),b(I,{view:"hHh LpR fFf"},{default:r(()=>[t(z,{flat:"",bordered:"",class:"bg-primary text-white","height-hint":"98"},{default:r(()=>[t(j,null,{default:r(()=>[t(C,{icon:"menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),t(C,{onClick:s[0]||(s[0]=a=>this.reStore.router.push("/")),icon:"home"},{default:r(()=>[t(S,null,{default:r(()=>[u("Home")]),_:1})]),_:1}),t(K),t(C,{icon:"menu",onClick:e.toggleRightDrawer},null,8,["onClick"])]),_:1}),t(M,{align:"left",class:"hidden"},{default:r(()=>[t(A,{to:"/logo",label:"Logo"}),t(A,{to:"/teaching",label:"Teaching"}),t(A,{to:"/taking",label:"Taking"}),t(A,{to:"/gradebook",label:"Gradebook"})]),_:1})]),_:1}),t(v,{"show-if-above":"",modelValue:e.leftDrawerOpen,"onUpdate:modelValue":s[1]||(s[1]=a=>e.leftDrawerOpen=a),side:"left",bordered:""},null,8,["modelValue"]),t(v,{"show-if-above":"",modelValue:e.rightDrawerOpen,"onUpdate:modelValue":s[2]||(s[2]=a=>e.rightDrawerOpen=a),side:"right",bordered:""},null,8,["modelValue"]),t(F,{class:"container-fluid"},{default:r(()=>[t(v,{bordered:"","show-if-above":"",modelValue:e.leftDrawerOpen,"onUpdate:modelValue":s[3]||(s[3]=a=>e.leftDrawerOpen=a),side:"left"},{default:r(()=>[t(D,{visible:e.visible,style:{height:"95vh","max-width":"350px"}},{default:r(()=>[t(d),t(c,{initialValues:this.initialValues},null,8,["initialValues"]),t(p)]),_:1},8,["visible"])]),_:1},8,["modelValue"]),t(v,{bordered:"","show-if-above":"",modelValue:e.rightDrawerOpen,"onUpdate:modelValue":s[4]||(s[4]=a=>e.rightDrawerOpen=a),side:"right"},{default:r(()=>[t(D,{visible:e.visible,style:{height:"95vh","max-width":"350px"}},{default:r(()=>[t(R)]),_:1},8,["visible"])]),_:1},8,["modelValue"]),o("div",Ce,[t(x)])]),_:1})]),_:1})}var Fe=B(Ae,[["render",ke]]);export{Fe as default};