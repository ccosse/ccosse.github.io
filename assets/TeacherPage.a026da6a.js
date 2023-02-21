import{Q as b}from"./use-form.12680db8.js";import{Q as K}from"./QInput.36f0a250.js";import{_ as P,r as g,o as n,c as B,w as s,a as t,aM as $,K as x,Q as p,e as l,af as a,ak as V,ag as u,ai as y,ah as v,aj as h,a1 as S,aN as w}from"./index.f8b450a7.js";import{a as N,r as q,d as z,Q as D,C as T}from"./ClosePopup.b96afa78.js";import{Q as k}from"./QCard.45f525cb.js";import{Q as m}from"./QTooltip.c0a9bcce.js";import{Q as A}from"./QList.839b0a8b.js";import{Q as E}from"./QImg.dd2f8b26.js";import{Q as F}from"./QPage.39ac68a6.js";import{u as I}from"./re-store.eb1c8086.js";import"./use-key-composition.933ae1d8.js";import"./use-dark.0a08b69e.js";import"./use-prevent-scroll.ecb1410a.js";import"./scroll.942cf804.js";import"./use-portal.16c4f851.js";import"./selection.ed78409a.js";import"./firebase.0eb8f378.js";import"./transform.aea72fbe.js";import"./index.2cf0d985.js";function U(o){const e=document.createElement("textarea");e.value=o,e.contentEditable="true",e.style.position="fixed";const f=()=>{};N(f),document.body.appendChild(e),e.focus(),e.select();const d=document.execCommand("copy");return e.remove(),q(f),d}function j(o){return navigator.clipboard!==void 0?navigator.clipboard.writeText(o):new Promise((e,f)=>{const d=U(o);d?e(!0):f(d)})}const H=I(),L={components:{},setup(){return{reStore:H,mval:g(!0),label:g("howdy"),courseKey:g(null),courseTitle:g(null),prompt:g(!1)}},mounted(){console.log("TeacherPage mounted ",this.reStore.courses),this.reStore.unloadCurrent()},methods:{selectAssignment(o,e){this.reStore.courses.ck===o&&this.reStore.courses.aid===e?this.reStore.unloadCurrent():(this.reStore.courses.ck=o,this.reStore.courses.aid=e,this.reStore.courses.trigger+=1)},copyCK(o){j(o).then(()=>{console.log("ck copied to clipboard",o)}).catch(e=>{console.log(e)})},newCourseCB(){console.log("courseCB"),this.reStore.newCourse()},newAssignmentCB(o){console.log("assignmentCB: ",o),this.reStore.newAssignment(o)},editAssignmentCB(o,e){console.log("editAssignmentCB: ",o,e),this.reStore.loadAssignment(o,e),this.reStore.router.push("/teacher/editor")},changeTitleCB(){console.log("TeacherPage.titleCB",this.courseKey,this.courseTitle),this.reStore.setCourseTitle(this.courseKey,this.courseTitle)},deleteCourseCB(o){this.reStore.deleteCourse(o)},deleteAssignmentCB(o,e){this.reStore.deleteAssignment(o,e)},takeAssignmentCB(o,e){console.log("TeacherPage.takeAssignment ",o,e),this.reStore.loadAssignment(o,e),this.reStore.router.push("/teacher/assignment")}}},M=l("div",{class:"text-h6"},"Change course title",-1),R={class:"q-pa-md"},G={class:"flex flex-center"},J={class:"q-pa-md"},O=l("br",null,null,-1),W=l("br",null,null,-1),X=l("br",null,null,-1),Y={class:"flex flex-row justify-center"},Z={class:"absolute-top text-center"},ee={class:"text-h6"},te={class:"text-subtitle2"},se={key:0},oe={key:1},le={style:{"font-size":"22pt",width:"100%"},class:"text-center absolute-bottom"},re=l("br",null,null,-1),ne={class:"hidden"},ie={width:"100%"},ae=l("tr",null,[l("th",{colSpan:"100"},"Course Score Sheet")],-1),ue=l("th",null,"Student",-1),de={style:{"text-align":"center"}},ce={key:0},he={key:1};function pe(o,e,f,d,me,_e){return n(),B(F,{class:"q-gutter-md"},{default:s(()=>[t(D,{modelValue:d.prompt,"onUpdate:modelValue":e[3]||(e[3]=c=>d.prompt=c),persistent:""},{default:s(()=>[t(k,{style:{"min-width":"350px"}},{default:s(()=>[t(b,null,{default:s(()=>[M]),_:1}),t(b,{class:"q-pt-none"},{default:s(()=>[t(K,{dense:"",modelValue:d.courseTitle,"onUpdate:modelValue":e[0]||(e[0]=c=>d.courseTitle=c),autofocus:"",onKeyup:e[1]||(e[1]=$(c=>{d.prompt=!1,this.changeTitleCB()},["enter"])),onHide:this.dck},null,8,["modelValue","onHide"])]),_:1}),t(z,{align:"right",class:"text-white"},{default:s(()=>[x(t(p,{outline:"",label:"Cancel"},null,512),[[T]]),x(t(p,{outline:"",label:"Save",onClick:e[2]||(e[2]=c=>this.changeTitleCB())},null,512),[[T]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l("div",R,[t(A,{bordered:"",class:"rounded-borders"},{default:s(()=>[t(k,{flat:""},{default:s(()=>[l("div",G,[l("div",null,[t(p,{class:"on-left",icon:"list_alt",onClick:e[4]||(e[4]=c=>this.newCourseCB())},{default:s(()=>[t(m,null,{default:s(()=>[a("Create a new course")]),_:1})]),_:1}),t(p,{flat:"","no-caps":"",style:{fontSize:"18pt"}},{default:s(()=>[a("Teacher Dashboard")]),_:1}),this.reStore.authenticated?(n(),B(p,{key:0,class:"on-right",onClick:e[5]||(e[5]=c=>this.reStore.router.push("/student")),icon:"switch_account"},{default:s(()=>[t(m,null,{default:s(()=>[a(" Switch to Student-role ")]),_:1})]),_:1})):V("",!0)])])]),_:1})]),_:1})]),(n(!0),u(v,null,y(this.reStore.userSnapshot.teaching,(c,i,Q)=>(n(),B(k,{flat:"",key:Q,style:{opacity:"1.0"}},{default:s(()=>[l("div",J,[t(A,{bordered:"",class:"rounded-borders"},{default:s(()=>[t(k,{flat:""},{default:s(()=>[t(b,{class:"text-center",style:{fontSize:"12pt"}},{default:s(()=>[a(" Title: "+h(this.reStore.courses[i].title)+" \xA0",1),t(S,{class:"ptr",name:"edit",onClick:r=>{d.prompt=!0,this.courseTitle=this.reStore.courses[i].title,this.courseKey=i}},null,8,["onClick"]),O,a(" Key: "+h(i)+" ",1),t(S,{class:"ptr",name:"content_copy",onClick:r=>this.copyCK(i)},null,8,["onClick"]),l("div",null,[t(p,{icon:"delete",onClick:r=>this.deleteCourseCB(c.ck)},{default:s(()=>[t(m,null,{default:s(()=>[a("Delete Course")]),_:1})]),_:2},1032,["onClick"]),t(p,{icon:"post_add",onClick:r=>this.newAssignmentCB(c.ck)},{default:s(()=>[t(m,null,{default:s(()=>[a("New Assignment")]),_:1})]),_:2},1032,["onClick"]),t(p,{icon:"content_copy",onClick:r=>this.copyCK(i)},{default:s(()=>[t(m,null,{default:s(()=>[a("Copy this course-key to clipboard. Enroll "),W,a("in this course using this course-key from "),X,a("the Student Page.")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1024),l("div",Y,[(n(!0),u(v,null,y(this.reStore.courses[i].assignments,(r,_)=>(n(),u("div",{key:r},[t(k,{bordered:"",flat:"",class:"ccard q-mx-sm q-my-md"},{default:s(()=>[t(E,{fit:o.cover,src:r.coverUrl,height:"100%",onClick:C=>this.selectAssignment(i,r.id)},{default:s(()=>[l("div",Z,[l("div",ee,h(r.title.slice(0,18)),1),l("div",te,[r.pages?(n(),u("span",se,"Pages: "+h(r.pages.length),1)):(n(),u("span",oe,"Pages: None"))])]),l("div",le,[t(S,{onClick:[C=>this.takeAssignmentCB(i,r.id),e[6]||(e[6]=w(()=>{},["stop","prevent"]))],name:"play_circle",class:"ptr z-top"},{default:s(()=>[t(m,null,{default:s(()=>[a("Take Assignment")]),_:1})]),_:2},1032,["onClick"]),t(S,{onClick:[C=>this.editAssignmentCB(i,r.id),e[7]||(e[7]=w(()=>{},["stop","prevent"]))],name:"edit",class:"ptr on-right z-top"},{default:s(()=>[t(m,null,{default:s(()=>[a("Edit Assignment"),re,a(h(r.id),1)]),_:2},1024)]),_:2},1032,["onClick"]),t(S,{onClick:[C=>this.deleteAssignmentCB(i,r.id),e[8]||(e[8]=w(()=>{},["stop","prevent"]))],name:"delete",class:"ptr on-right z-top"},{default:s(()=>[t(m,null,{default:s(()=>[a("Delete Assignment")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["fit","src","onClick"])]),_:2},1024),l("span",ne,h(_),1)]))),128))]),t(b,null,{default:s(()=>[l("table",ie,[ae,l("tr",null,[ue,(n(!0),u(v,null,y(this.reStore.courses[i].assignments,(r,_)=>(n(),u("th",{key:_},[l("span",null,h(r.title),1)]))),128))]),(n(!0),u(v,null,y(this.reStore.courses[i].enrollment,r=>(n(),u("tr",{key:r.name},[l("td",de,h(r.name),1),(n(!0),u(v,null,y(this.reStore.courses[i].assignments,(_,C)=>(n(),u("td",{style:{"text-align":"center"},key:C},[_.scores&&_.scores[r.emailKey]?(n(),u("span",ce,h(_.scores[r.emailKey]),1)):(n(),u("span",he," -- "))]))),128))]))),128))])]),_:2},1024)]),_:2},1024)]),_:2},1024)])]),_:2},1024))),128))]),_:1})}var qe=P(L,[["render",pe]]);export{qe as default};
