import{_ as V,r as f,o as n,c as x,w as s,a as t,aO as I,K as w,Q as h,aM as P,e as l,ag as a,al as $,ah as c,aj as v,ai as k,ak as m,a1 as _,aN as b}from"./index.4f44843a.js";import{Q as A}from"./use-form.0a3d7bea.js";import{a as q,r as N,d as B,Q as K,C as T}from"./ClosePopup.87cc016a.js";import{Q as y}from"./QCard.5b017063.js";import{Q as E}from"./QInput.49598023.js";import{Q as p}from"./QTooltip.8efd83ab.js";import{Q}from"./QList.c9613f86.js";import{Q as z}from"./QImg.4e60df0b.js";import{Q as F}from"./QPage.26a17fe3.js";import{u as U}from"./re-store.8a49872d.js";import"./use-prevent-scroll.5ea2bc82.js";import"./scroll.dd361da0.js";import"./use-portal.8ee34304.js";import"./use-dark.9d9919a4.js";import"./use-key-composition.151ea193.js";import"./selection.6d8b05cd.js";import"./firebase.0eb8f378.js";import"./transform.aea72fbe.js";import"./index.2cf0d985.js";function j(o){const e=document.createElement("textarea");e.value=o,e.contentEditable="true",e.style.position="fixed";const S=()=>{};q(S),document.body.appendChild(e),e.focus(),e.select();const u=document.execCommand("copy");return e.remove(),N(S),u}function H(o){return navigator.clipboard!==void 0?navigator.clipboard.writeText(o):new Promise((e,S)=>{const u=j(o);u?e(!0):S(u)})}const L=U(),M={components:{},setup(){return{reStore:L,mval:f(!0),label:f("howdy"),courseKey:f(null),courseTitle:f(null),prompt:f(!1),confirm:f(!1),targetCK:f(null),targetAID:f(null)}},mounted(){console.log("TeacherPage mounted ",this.reStore.courses),this.reStore.unloadCurrent()},methods:{selectAssignment(o,e){this.reStore.courses.ck===o&&this.reStore.courses.aid===e?this.reStore.unloadCurrent():(this.reStore.courses.ck=o,this.reStore.courses.aid=e,this.reStore.courses.trigger+=1)},copyCK(o){H(o).then(()=>{console.log("ck copied to clipboard",o)}).catch(e=>{console.log(e)})},newCourseCB(){console.log("courseCB"),this.reStore.newCourse()},newAssignmentCB(o){console.log("assignmentCB: ",o),this.reStore.newAssignment(o)},editAssignmentCB(o,e){console.log("editAssignmentCB: ",o,e),this.reStore.loadAssignment(o,e),this.reStore.mode="editor",this.reStore.router.push("/teacher/editor")},changeTitleCB(){console.log("TeacherPage.titleCB",this.courseKey,this.courseTitle),this.reStore.setCourseTitle(this.courseKey,this.courseTitle)},deleteCourseCB(o){this.targetCK=o,this.targetAID=null,this.confirm=!0},deleteAssignmentCB(o,e){this.targetCK=o,this.targetAID=e,this.confirm=!0},deleteForSure(){this.confirm=!1,console.log("delete current targets ",this.targetCK,this.targetAID),this.targetAID&&this.targetCK?this.reStore.deleteAssignment(this.targetCK,this.targetAID):this.targetCK&&this.targetAID===null&&this.reStore.deleteCourse(this.targetCK),this.targetCK=null,this.targetAID=null},takeAssignmentCB(o,e){console.log("TeacherPage.takeAssignment ",o,e),this.reStore.loadAssignment(o,e),this.reStore.mode="assignment",this.reStore.router.push("/teacher/assignment")},shareToDemo(o,e){console.log(o,e),this.reStore.shareToDemo(o,e)}}},O=l("span",{class:"q-ml-sm"},"Confirm delete object?",-1),R=l("div",{class:"text-h6"},"Change course title",-1),G={class:"q-pa-md"},J={class:"flex flex-center"},W={class:"q-pa-md"},X=l("br",null,null,-1),Y=l("br",null,null,-1),Z=l("br",null,null,-1),ee={class:"flex flex-row justify-center"},te={class:"absolute-top text-center"},se={class:"text-h6"},oe={class:"text-subtitle2"},le={key:0},re={key:1},ne={style:{"font-size":"22pt",width:"100%"},class:"text-center absolute-bottom"},ie=l("br",null,null,-1),ae={class:"hidden"},ue={width:"100%"},de=l("tr",null,[l("th",{colSpan:"100"},"Course Score Sheet")],-1),ce=l("th",null,"Student",-1),he={style:{"text-align":"center"}},me={key:0},pe={key:1};function fe(o,e,S,u,ge,Ce){return n(),x(F,{class:"q-gutter-md"},{default:s(()=>[t(K,{modelValue:u.confirm,"onUpdate:modelValue":e[1]||(e[1]=d=>u.confirm=d),persistent:"",class:"z-max"},{default:s(()=>[t(y,null,{default:s(()=>[t(A,{class:"row items-center"},{default:s(()=>[t(I,{icon:"delete",color:"primary","text-color":"white"}),O]),_:1}),t(B,{align:"right",class:"text-white"},{default:s(()=>[w(t(h,{flat:"",label:"Cancel"},null,512),[[T]]),t(h,{flat:"",label:"Delete",onClick:e[0]||(e[0]=d=>this.deleteForSure())})]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(K,{modelValue:u.prompt,"onUpdate:modelValue":e[5]||(e[5]=d=>u.prompt=d),persistent:"",class:"z-max"},{default:s(()=>[t(y,{style:{"min-width":"350px"}},{default:s(()=>[t(A,null,{default:s(()=>[R]),_:1}),t(A,{class:"q-pt-none"},{default:s(()=>[t(E,{dense:"",modelValue:u.courseTitle,"onUpdate:modelValue":e[2]||(e[2]=d=>u.courseTitle=d),autofocus:"",onKeyup:e[3]||(e[3]=P(d=>{u.prompt=!1,this.changeTitleCB()},["enter"])),onHide:this.dck},null,8,["modelValue","onHide"])]),_:1}),t(B,{align:"right",class:"text-white"},{default:s(()=>[w(t(h,{outline:"",label:"Cancel"},null,512),[[T]]),w(t(h,{outline:"",label:"Save",onClick:e[4]||(e[4]=d=>this.changeTitleCB())},null,512),[[T]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l("div",G,[t(Q,{bordered:"",class:"rounded-borders"},{default:s(()=>[t(y,{flat:""},{default:s(()=>[l("div",J,[l("div",null,[t(h,{class:"on-left",icon:"list_alt",onClick:e[6]||(e[6]=d=>this.newCourseCB())},{default:s(()=>[t(p,null,{default:s(()=>[a("Create a new course")]),_:1})]),_:1}),t(h,{flat:"","no-caps":"",style:{fontSize:"18pt"}},{default:s(()=>[a("Teacher Dashboard")]),_:1}),this.reStore.authenticated?(n(),x(h,{key:0,class:"on-right",onClick:e[7]||(e[7]=d=>this.reStore.router.push("/student")),icon:"switch_account"},{default:s(()=>[t(p,null,{default:s(()=>[a(" Switch to Student-role ")]),_:1})]),_:1})):$("",!0)])])]),_:1})]),_:1})]),(n(!0),c(k,null,v(this.reStore.userSnapshot.teaching,(d,i,D)=>(n(),x(y,{flat:"",key:D,style:{opacity:"1.0"}},{default:s(()=>[l("div",W,[t(Q,{bordered:"",class:"rounded-borders"},{default:s(()=>[t(y,{flat:""},{default:s(()=>[t(A,{class:"text-center",style:{fontSize:"12pt"}},{default:s(()=>[a(" Title: "+m(this.reStore.courses[i].title)+" \xA0",1),t(_,{class:"ptr",name:"edit",onClick:r=>{u.prompt=!0,this.courseTitle=this.reStore.courses[i].title,this.courseKey=i}},null,8,["onClick"]),X,a(" Key: "+m(i)+" ",1),t(_,{class:"ptr",name:"content_copy",onClick:r=>this.copyCK(i)},null,8,["onClick"]),l("div",null,[t(h,{icon:"delete",onClick:r=>this.deleteCourseCB(d.ck)},{default:s(()=>[t(p,null,{default:s(()=>[a("Delete Course")]),_:1})]),_:2},1032,["onClick"]),t(h,{icon:"post_add",onClick:r=>this.newAssignmentCB(d.ck)},{default:s(()=>[t(p,null,{default:s(()=>[a("New Assignment")]),_:1})]),_:2},1032,["onClick"]),t(h,{icon:"content_copy",onClick:r=>this.copyCK(i)},{default:s(()=>[t(p,null,{default:s(()=>[a("Copy this course-key to clipboard. Enroll "),Y,a("in this course using this course-key from "),Z,a("the Student Page.")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1024),l("div",ee,[(n(!0),c(k,null,v(this.reStore.courses[i].assignments,(r,g)=>(n(),c("div",{key:r},[t(y,{bordered:"",flat:"",class:"ccard q-mx-sm q-my-md"},{default:s(()=>[t(z,{fit:o.cover,src:r.coverUrl,height:"100%",onClick:C=>this.selectAssignment(i,r.id)},{default:s(()=>[l("div",te,[l("div",se,m(r.title.slice(0,18)),1),l("div",oe,[r.pages?(n(),c("span",le,"Pages: "+m(r.pages.length),1)):(n(),c("span",re,"Pages: None"))])]),l("div",ne,[t(_,{onClick:[C=>this.takeAssignmentCB(i,r.id),e[8]||(e[8]=b(()=>{},["stop","prevent"]))],name:"play_circle",class:"ptr"},{default:s(()=>[t(p,null,{default:s(()=>[a("Take Assignment")]),_:1})]),_:2},1032,["onClick"]),t(_,{onClick:[C=>this.editAssignmentCB(i,r.id),e[9]||(e[9]=b(()=>{},["stop","prevent"]))],name:"edit",class:"ptr on-right"},{default:s(()=>[t(p,null,{default:s(()=>[a("Edit Assignment"),ie,a(m(r.id),1)]),_:2},1024)]),_:2},1032,["onClick"]),t(_,{onClick:[C=>this.deleteAssignmentCB(i,r.id),e[10]||(e[10]=b(()=>{},["stop","prevent"]))],name:"delete",class:"ptr on-right"},{default:s(()=>[t(p,null,{default:s(()=>[a("Delete Assignment")]),_:1})]),_:2},1032,["onClick"]),t(_,{onClick:[C=>this.shareToDemo(i,r.id),e[11]||(e[11]=b(()=>{},["stop","prevent"]))],name:"share",class:"ptr on-right"},{default:s(()=>[t(p,null,{default:s(()=>[a("Share Assignment")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["fit","src","onClick"])]),_:2},1024),l("span",ae,m(g),1)]))),128))]),t(A,null,{default:s(()=>[l("table",ue,[de,l("tr",null,[ce,(n(!0),c(k,null,v(this.reStore.courses[i].assignments,(r,g)=>(n(),c("th",{key:g},[l("span",null,m(r.title),1)]))),128))]),(n(!0),c(k,null,v(this.reStore.courses[i].enrollment,r=>(n(),c("tr",{key:r.name},[l("td",he,m(r.name),1),(n(!0),c(k,null,v(this.reStore.courses[i].assignments,(g,C)=>(n(),c("td",{style:{"text-align":"center"},key:C},[g.scores&&g.scores[r.emailKey]?(n(),c("span",me,m(g.scores[r.emailKey]),1)):(n(),c("span",pe," -- "))]))),128))]))),128))])]),_:2},1024)]),_:2},1024)]),_:2},1024)])]),_:2},1024))),128))]),_:1})}var Ne=V(M,[["render",fe]]);export{Ne as default};
