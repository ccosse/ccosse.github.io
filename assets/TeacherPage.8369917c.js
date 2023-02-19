import{Q as k}from"./use-form.afe28f44.js";import{Q}from"./QInput.5282582c.js";import{_ as K,r as g,o as r,c as w,w as s,a as t,aL as V,K as B,Q as h,e as n,af as a,ak as P,ag as d,ai as y,ah as v,aj as m,a1 as S,aM as x}from"./index.0e64f230.js";import{a as $,r as z,d as E,Q as q,C as T}from"./ClosePopup.90d498a6.js";import{Q as b}from"./QCard.6a86a38e.js";import{Q as p}from"./QTooltip.0a9cd0ea.js";import{Q as D}from"./QImg.905b6be7.js";import{a as N,Q as I}from"./QList.7a7c9afe.js";import{Q as U}from"./QPage.1c8cc5ba.js";import{u as F}from"./re-store.ead18405.js";import"./use-key-composition.324363be.js";import"./use-dark.cbbcd9f3.js";import"./use-prevent-scroll.e5616504.js";import"./scroll.69de0f44.js";import"./use-portal.37024928.js";import"./selection.34524589.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";function L(o){const e=document.createElement("textarea");e.value=o,e.contentEditable="true",e.style.position="fixed";const _=()=>{};$(_),document.body.appendChild(e),e.focus(),e.select();const u=document.execCommand("copy");return e.remove(),z(_),u}function j(o){return navigator.clipboard!==void 0?navigator.clipboard.writeText(o):new Promise((e,_)=>{const u=L(o);u?e(!0):_(u)})}const H=F(),M={components:{},setup(){return{reStore:H,mval:g(!0),label:g("howdy"),courseKey:g(null),courseTitle:g(null),prompt:g(!1)}},mounted(){console.log("TeacherPage mounted ",this.reStore.courses),this.reStore.unloadCurrent()},methods:{selectAssignment(o,e){this.reStore.courses.ck===o&&this.reStore.courses.aid===e?this.reStore.unloadCurrent():(this.reStore.courses.ck=o,this.reStore.courses.aid=e,this.reStore.courses.trigger+=1)},copyCK(o){j(o).then(()=>{console.log("ck copied to clipboard",o)}).catch(e=>{console.log(e)})},newCourseCB(){console.log("courseCB"),this.reStore.newCourse()},newAssignmentCB(o){console.log("assignmentCB: ",o),this.reStore.newAssignment(o)},editAssignmentCB(o,e){console.log("editAssignmentCB: ",o,e),this.reStore.loadAssignment(o,e),this.reStore.router.push("/teacher/editor")},changeTitleCB(){console.log("TeacherPage.titleCB",this.courseKey,this.courseTitle),this.reStore.setCourseTitle(this.courseKey,this.courseTitle)},deleteCourseCB(o){this.reStore.deleteCourse(o)},deleteAssignmentCB(o,e){this.reStore.deleteAssignment(o,e)},takeAssignmentCB(o,e){console.log("TeacherPage.takeAssignment ",o,e),this.reStore.loadAssignment(o,e),this.reStore.router.push("/teacher/assignment")}}},R=n("div",{class:"text-h6"},"Change course title",-1),G={class:"flex flex-center row q-gutter-md"},J={class:"q-pa-md"},O=n("br",null,null,-1),W=n("br",null,null,-1),X=n("br",null,null,-1),Y={class:"flex flex-row justify-center"},Z={class:"absolute-top text-center"},ee={class:"text-h6"},te={class:"text-subtitle2"},se={key:0},oe={key:1},le={style:{"font-size":"22pt",width:"100%"},class:"text-center absolute-bottom"},ne=n("br",null,null,-1),re={class:"hidden"},ie={width:"100%"},ae=n("tr",null,[n("th",{colSpan:"100"},"Course Score Sheet")],-1),ue=n("th",null,"Student",-1),de={style:{"text-align":"center"}},ce={key:0},me={key:1};function he(o,e,_,u,pe,fe){return r(),w(U,{class:"q-gutter-md"},{default:s(()=>[t(q,{modelValue:u.prompt,"onUpdate:modelValue":e[3]||(e[3]=c=>u.prompt=c),persistent:""},{default:s(()=>[t(b,{style:{"min-width":"350px"}},{default:s(()=>[t(k,null,{default:s(()=>[R]),_:1}),t(k,{class:"q-pt-none"},{default:s(()=>[t(Q,{dense:"",modelValue:u.courseTitle,"onUpdate:modelValue":e[0]||(e[0]=c=>u.courseTitle=c),autofocus:"",onKeyup:e[1]||(e[1]=V(c=>{u.prompt=!1,this.changeTitleCB()},["enter"])),onHide:this.dck},null,8,["modelValue","onHide"])]),_:1}),t(E,{align:"right",class:"text-white"},{default:s(()=>[B(t(h,{outline:"",label:"Cancel"},null,512),[[T]]),B(t(h,{outline:"",label:"Save",onClick:e[2]||(e[2]=c=>this.changeTitleCB())},null,512),[[T]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),n("div",G,[n("div",null,[t(h,{class:"on-left",icon:"list_alt",onClick:e[4]||(e[4]=c=>this.newCourseCB())},{default:s(()=>[t(p,null,{default:s(()=>[a("Create a new course")]),_:1})]),_:1}),t(h,{flat:"","no-caps":"",style:{fontSize:"18pt"}},{default:s(()=>[a("Teacher Dashboard")]),_:1}),this.reStore.authenticated?(r(),w(h,{key:0,class:"on-right",onClick:e[5]||(e[5]=c=>this.reStore.router.push("/student")),icon:"switch_account"},{default:s(()=>[t(p,null,{default:s(()=>[a(" Switch to Student-role ")]),_:1})]),_:1})):P("",!0)])]),(r(!0),d(v,null,y(this.reStore.userSnapshot.teaching,(c,i,A)=>(r(),w(b,{flat:"",key:A,style:{opacity:"1.0"}},{default:s(()=>[n("div",J,[t(N,{bordered:"",class:"rounded-borders"},{default:s(()=>[t(I,{label:"Course",modelValue:u.mval,"onUpdate:modelValue":e[9]||(e[9]=l=>u.mval=l),"header-style":{fontSize:"16pt"}},{default:s(()=>[t(b,{flat:""},{default:s(()=>[t(k,{class:"text-center",style:{fontSize:"12pt"}},{default:s(()=>[a(" Title: "+m(this.reStore.courses[i].title)+" \xA0",1),t(S,{class:"ptr",name:"edit",onClick:l=>{u.prompt=!0,this.courseTitle=this.reStore.courses[i].title,this.courseKey=i}},null,8,["onClick"]),O,a(" Key: "+m(i)+" ",1),t(S,{class:"ptr",name:"content_copy",onClick:l=>this.copyCK(i)},null,8,["onClick"]),n("div",null,[t(h,{icon:"delete",onClick:l=>this.deleteCourseCB(c.ck)},{default:s(()=>[t(p,null,{default:s(()=>[a("Delete Course")]),_:1})]),_:2},1032,["onClick"]),t(h,{icon:"post_add",onClick:l=>this.newAssignmentCB(c.ck)},{default:s(()=>[t(p,null,{default:s(()=>[a("New Assignment")]),_:1})]),_:2},1032,["onClick"]),t(h,{icon:"content_copy",onClick:l=>this.copyCK(i)},{default:s(()=>[t(p,null,{default:s(()=>[a("Copy this course-key to clipboard. Enroll "),W,a("in this course using this course-key from "),X,a("the Student Page.")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1024),n("div",Y,[(r(!0),d(v,null,y(this.reStore.courses[i].assignments,(l,f)=>(r(),d("div",{key:l},[t(b,{bordered:"",flat:"",class:"ccard q-mx-sm q-my-md"},{default:s(()=>[t(D,{fit:o.cover,src:l.coverUrl,height:"100%",onClick:C=>this.selectAssignment(i,l.id)},{default:s(()=>[n("div",Z,[n("div",ee,m(l.title.slice(0,18)),1),n("div",te,[l.pages?(r(),d("span",se,"Pages: "+m(l.pages.length),1)):(r(),d("span",oe,"Pages: None"))])]),n("div",le,[t(S,{onClick:[C=>this.takeAssignmentCB(i,l.id),e[6]||(e[6]=x(()=>{},["stop","prevent"]))],name:"play_circle",class:"ptr z-top"},{default:s(()=>[t(p,null,{default:s(()=>[a("Take Assignment")]),_:1})]),_:2},1032,["onClick"]),t(S,{onClick:[C=>this.editAssignmentCB(i,l.id),e[7]||(e[7]=x(()=>{},["stop","prevent"]))],name:"edit",class:"ptr on-right z-top"},{default:s(()=>[t(p,null,{default:s(()=>[a("Edit Assignment"),ne,a(m(l.id),1)]),_:2},1024)]),_:2},1032,["onClick"]),t(S,{onClick:[C=>this.deleteAssignmentCB(i,l.id),e[8]||(e[8]=x(()=>{},["stop","prevent"]))],name:"delete",class:"ptr on-right z-top"},{default:s(()=>[t(p,null,{default:s(()=>[a("Delete Assignment")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["fit","src","onClick"])]),_:2},1024),n("span",re,m(f),1)]))),128))]),t(k,null,{default:s(()=>[n("table",ie,[ae,n("tr",null,[ue,(r(!0),d(v,null,y(this.reStore.courses[i].assignments,(l,f)=>(r(),d("th",{key:f},[n("span",null,m(l.title),1)]))),128))]),(r(!0),d(v,null,y(this.reStore.courses[i].enrollment,l=>(r(),d("tr",{key:l.name},[n("td",de,m(l.name),1),(r(!0),d(v,null,y(this.reStore.courses[i].assignments,(f,C)=>(r(),d("td",{style:{"text-align":"center"},key:C},[f.scores&&f.scores[l.emailKey]?(r(),d("span",ce,m(f.scores[l.emailKey]),1)):(r(),d("span",me," -- "))]))),128))]))),128))])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"])]),_:2},1024)])]),_:2},1024))),128))]),_:1})}var ze=K(M,[["render",he]]);export{ze as default};
