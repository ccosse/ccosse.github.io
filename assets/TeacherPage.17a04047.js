import{_ as P,r as f,o as n,c as b,w as s,a as t,ai as $,K as w,Q as h,aN as q,e as l,ag as a,am as B,ah as c,ak as v,aj as k,al as m,a1 as _,aO as x}from"./index.ef5ad98b.js";import{Q as A}from"./use-form.ab992e8a.js";import{a as E,r as N,d as K,Q,C as T}from"./ClosePopup.97715157.js";import{Q as S}from"./QCard.011d213b.js";import{Q as z}from"./QInput.54ed77f8.js";import{Q as p}from"./QTooltip.ecfae46a.js";import{b as D,Q as F,a as I}from"./QList.f97c50ac.js";import{Q as U}from"./QImg.ceb0a342.js";import{Q as j}from"./QPage.f1869cca.js";import{u as H}from"./re-store.311fa712.js";import"./use-prevent-scroll.f90af3f7.js";import"./scroll.ed6bd3a8.js";import"./use-portal.94d8f53a.js";import"./use-dark.70f1cd48.js";import"./use-key-composition.1a96287b.js";import"./selection.8201e6f7.js";import"./firebase.0eb8f378.js";import"./transform.aea72fbe.js";import"./index.2cf0d985.js";function L(o){const e=document.createElement("textarea");e.value=o,e.contentEditable="true",e.style.position="fixed";const y=()=>{};E(y),document.body.appendChild(e),e.focus(),e.select();const d=document.execCommand("copy");return e.remove(),N(y),d}function M(o){return navigator.clipboard!==void 0?navigator.clipboard.writeText(o):new Promise((e,y)=>{const d=L(o);d?e(!0):y(d)})}const O=H(),R={components:{},setup(){return{reStore:O,mval:f(!0),label:f("howdy"),courseKey:f(null),courseTitle:f(null),prompt:f(!1),confirm:f(!1),targetCK:f(null),targetAID:f(null)}},mounted(){console.log("TeacherPage mounted ",this.reStore.courses),this.reStore.unloadCurrent()},methods:{selectAssignment(o,e){this.reStore.courses.ck===o&&this.reStore.courses.aid===e?this.reStore.unloadCurrent():(this.reStore.courses.ck=o,this.reStore.courses.aid=e,this.reStore.courses.trigger+=1)},copyCK(o){M(o).then(()=>{console.log("ck copied to clipboard",o)}).catch(e=>{console.log(e)})},newCourseCB(){console.log("courseCB"),this.reStore.newCourse()},newAssignmentCB(o){console.log("assignmentCB: ",o),this.reStore.newAssignment(o)},editAssignmentCB(o,e){console.log("editAssignmentCB: ",o,e),this.reStore.loadAssignment(o,e),this.reStore.mode="editor",this.reStore.router.push("/teacher/editor")},changeTitleCB(){console.log("TeacherPage.titleCB",this.courseKey,this.courseTitle),this.reStore.setCourseTitle(this.courseKey,this.courseTitle)},deleteCourseCB(o){this.targetCK=o,this.targetAID=null,this.confirm=!0},deleteAssignmentCB(o,e){this.targetCK=o,this.targetAID=e,this.confirm=!0},deleteForSure(){this.confirm=!1,console.log("delete current targets ",this.targetCK,this.targetAID),this.targetAID&&this.targetCK?this.reStore.deleteAssignment(this.targetCK,this.targetAID):this.targetCK&&this.targetAID===null&&this.reStore.deleteCourse(this.targetCK),this.targetCK=null,this.targetAID=null},takeAssignmentCB(o,e){console.log("TeacherPage.takeAssignment ",o,e),this.reStore.loadAssignment(o,e),this.reStore.mode="assignment",this.reStore.router.push("/teacher/assignment")},shareToDemo(o,e){console.log(o,e),this.reStore.shareToDemo(o,e)}}},G=l("span",{class:"q-ml-sm"},"Confirm delete object?",-1),J=l("div",{class:"text-h6"},"Change course title",-1),W={class:"q-pa-md"},X={class:"flex flex-center"},Y={class:"q-pa-md"},Z=l("br",null,null,-1),ee=l("br",null,null,-1),te=l("br",null,null,-1),se={class:"flex flex-row justify-center"},oe={class:"absolute-top text-center"},le={class:"text-h6"},re={class:"text-subtitle2"},ne={key:0},ie={key:1},ae={style:{"font-size":"22pt",width:"100%"},class:"text-center absolute-bottom"},ue=l("br",null,null,-1),de={class:"hidden"},ce={width:"100%"},he=l("tr",null,[l("th",{colSpan:"100"},"Course Score Sheet")],-1),me=l("th",null,"Student",-1),pe={style:{"text-align":"center"}},fe={key:0},ge={key:1};function Ce(o,e,y,d,_e,Se){return n(),b(j,{class:"q-gutter-md"},{default:s(()=>[t(Q,{modelValue:d.confirm,"onUpdate:modelValue":e[1]||(e[1]=u=>d.confirm=u),persistent:"",class:"z-max"},{default:s(()=>[t(S,null,{default:s(()=>[t(A,{class:"row items-center"},{default:s(()=>[t($,{icon:"delete",color:"primary","text-color":"white"}),G]),_:1}),t(K,{align:"right",class:"text-white"},{default:s(()=>[w(t(h,{flat:"",label:"Cancel"},null,512),[[T]]),t(h,{flat:"",label:"Delete",onClick:e[0]||(e[0]=u=>this.deleteForSure())})]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(Q,{modelValue:d.prompt,"onUpdate:modelValue":e[5]||(e[5]=u=>d.prompt=u),persistent:"",class:"z-max"},{default:s(()=>[t(S,{style:{"min-width":"350px"}},{default:s(()=>[t(A,null,{default:s(()=>[J]),_:1}),t(A,{class:"q-pt-none"},{default:s(()=>[t(z,{dense:"",modelValue:d.courseTitle,"onUpdate:modelValue":e[2]||(e[2]=u=>d.courseTitle=u),autofocus:"",onKeyup:e[3]||(e[3]=q(u=>{d.prompt=!1,this.changeTitleCB()},["enter"])),onHide:this.dck},null,8,["modelValue","onHide"])]),_:1}),t(K,{align:"right",class:"text-white"},{default:s(()=>[w(t(h,{outline:"",label:"Cancel"},null,512),[[T]]),w(t(h,{outline:"",label:"Save",onClick:e[4]||(e[4]=u=>this.changeTitleCB())},null,512),[[T]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l("div",W,[t(D,{bordered:"",class:"rounded-borders"},{default:s(()=>[t(S,{flat:""},{default:s(()=>[l("div",X,[l("div",null,[t(h,{class:"on-left",icon:"list_alt",onClick:e[6]||(e[6]=u=>this.newCourseCB())},{default:s(()=>[t(p,null,{default:s(()=>[a("Create a new course")]),_:1})]),_:1}),t(h,{flat:"","no-caps":"",style:{fontSize:"18pt"}},{default:s(()=>[a("Teacher Dashboard")]),_:1}),this.reStore.authenticated?(n(),b(h,{key:0,class:"on-right",onClick:e[7]||(e[7]=u=>this.reStore.router.push("/student")),icon:"switch_account"},{default:s(()=>[t(p,null,{default:s(()=>[a(" Switch to Student-role ")]),_:1})]),_:1})):B("",!0)])])]),_:1})]),_:1})]),(n(!0),c(k,null,v(this.reStore.userSnapshot.teaching,(u,i,V)=>(n(),b(S,{flat:"",key:V,style:{opacity:"1.0"}},{default:s(()=>[l("div",Y,[t(D,{bordered:"",class:"rounded-borders"},{default:s(()=>[t(F,null,{header:s(()=>[t(I),t(I,null,{default:s(()=>[a(" Course: "+m(this.reStore.courses[u.ck].title),1)]),_:2},1024)]),default:s(()=>[t(S,{flat:""},{default:s(()=>[t(A,{class:"text-center",style:{fontSize:"12pt"}},{default:s(()=>[a(" Title: "+m(this.reStore.courses[i].title)+" \xA0",1),t(_,{class:"ptr",name:"edit",onClick:r=>{d.prompt=!0,this.courseTitle=this.reStore.courses[i].title,this.courseKey=i}},null,8,["onClick"]),Z,a(" Key: "+m(i)+" ",1),t(_,{class:"ptr",name:"content_copy",onClick:r=>this.copyCK(i)},null,8,["onClick"]),l("div",null,[t(h,{icon:"delete",onClick:r=>this.deleteCourseCB(u.ck)},{default:s(()=>[t(p,null,{default:s(()=>[a("Delete Course")]),_:1})]),_:2},1032,["onClick"]),t(h,{icon:"post_add",onClick:r=>this.newAssignmentCB(u.ck)},{default:s(()=>[t(p,null,{default:s(()=>[a("New Assignment")]),_:1})]),_:2},1032,["onClick"]),t(h,{icon:"content_copy",onClick:r=>this.copyCK(i)},{default:s(()=>[t(p,null,{default:s(()=>[a("Copy this course-key to clipboard. Enroll "),ee,a("in this course using this course-key from "),te,a("the Student Page.")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1024),l("div",se,[(n(!0),c(k,null,v(this.reStore.courses[i].assignments,(r,g)=>(n(),c("div",{key:r},[t(S,{bordered:"",flat:"",class:"ccard q-mx-sm q-my-md"},{default:s(()=>[t(U,{fit:o.cover,src:r.coverUrl,height:"100%",onClick:C=>this.selectAssignment(i,r.id)},{default:s(()=>[l("div",oe,[l("div",le,m(r.title.slice(0,18)),1),l("div",re,[r.pages?(n(),c("span",ne,"Pages: "+m(r.pages.length),1)):(n(),c("span",ie,"Pages: None"))])]),l("div",ae,[t(_,{onClick:[C=>this.takeAssignmentCB(i,r.id),e[8]||(e[8]=x(()=>{},["stop","prevent"]))],name:"play_circle",class:"ptr"},{default:s(()=>[t(p,null,{default:s(()=>[a("Take Assignment")]),_:1})]),_:2},1032,["onClick"]),t(_,{onClick:[C=>this.editAssignmentCB(i,r.id),e[9]||(e[9]=x(()=>{},["stop","prevent"]))],name:"edit",class:"ptr on-right"},{default:s(()=>[t(p,null,{default:s(()=>[a("Edit Assignment"),ue,a(m(r.id),1)]),_:2},1024)]),_:2},1032,["onClick"]),t(_,{onClick:[C=>this.deleteAssignmentCB(i,r.id),e[10]||(e[10]=x(()=>{},["stop","prevent"]))],name:"delete",class:"ptr on-right"},{default:s(()=>[t(p,null,{default:s(()=>[a("Delete Assignment")]),_:1})]),_:2},1032,["onClick"]),i!==this.reStore.demoCK&&this.reStore.userSnapshot.profile.email==="charlie@readingedge.org"?(n(),b(_,{key:0,onClick:[C=>this.shareToDemo(i,r.id),e[11]||(e[11]=x(()=>{},["stop","prevent"]))],name:"share",class:"ptr on-right"},{default:s(()=>[t(p,null,{default:s(()=>[a("Share Assignment")]),_:1})]),_:2},1032,["onClick"])):B("",!0)])]),_:2},1032,["fit","src","onClick"])]),_:2},1024),l("span",de,m(g),1)]))),128))]),t(A,null,{default:s(()=>[l("table",ce,[he,l("tr",null,[me,(n(!0),c(k,null,v(this.reStore.courses[i].assignments,(r,g)=>(n(),c("th",{key:g},[l("span",null,m(r.title),1)]))),128))]),(n(!0),c(k,null,v(this.reStore.courses[i].enrollment,r=>(n(),c("tr",{key:r.name},[l("td",pe,m(r.name),1),(n(!0),c(k,null,v(this.reStore.courses[i].assignments,(g,C)=>(n(),c("td",{style:{"text-align":"center"},key:C},[g.scores&&g.scores[r.emailKey]?(n(),c("span",fe,m(g.scores[r.emailKey]),1)):(n(),c("span",ge," -- "))]))),128))]))),128))])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)])]),_:2},1024))),128))]),_:1})}var ze=P(R,[["render",Ce]]);export{ze as default};
