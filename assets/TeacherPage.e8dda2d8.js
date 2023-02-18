import{Q as v,a as y}from"./use-form.aef221b0.js";import{Q as V}from"./QInput.1187f198.js";import{_ as K,r as _,o as d,c as S,w as o,a as t,aL as P,K as B,Q as p,e as n,af as i,ak as x,ag as m,ai as w,ah as T,aj as h,a1 as f,aM as k}from"./index.97368e41.js";import{a as $,r as E,d as z,Q as D,C as b}from"./ClosePopup.feb2d61c.js";import{Q as c}from"./QTooltip.710f1927.js";import{Q as N}from"./QImg.f55f9642.js";import{Q as q,e as I}from"./QExpansionItem.c6ed340c.js";import{Q as U}from"./QPage.51c6b854.js";import{u as F}from"./re-store.8e1f257b.js";import"./use-dark.2c32762b.js";import"./scroll.2db3cf32.js";import"./use-key-composition.8db05892.js";import"./use-portal.9c00c606.js";import"./selection.6bfe97d1.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";function j(s){const e=document.createElement("textarea");e.value=s,e.contentEditable="true",e.style.position="fixed";const C=()=>{};$(C),document.body.appendChild(e),e.focus(),e.select();const r=document.execCommand("copy");return e.remove(),E(C),r}function H(s){return navigator.clipboard!==void 0?navigator.clipboard.writeText(s):new Promise((e,C)=>{const r=j(s);r?e(!0):C(r)})}const L=F(),M={components:{},setup(){return{reStore:L,mval:_(!0),courseKey:_(null),courseTitle:_(null),prompt:_(!1)}},mounted(){console.log("TeacherPage mounted ",this.reStore.courses),this.reStore.unloadCurrent()},methods:{selectAssignment(s,e){this.reStore.courses.ck===s&&this.reStore.courses.aid===e?this.reStore.unloadCurrent():(this.reStore.courses.ck=s,this.reStore.courses.aid=e,this.reStore.courses.trigger+=1)},copyCK(s){H(s).then(()=>{console.log("ck copied to clipboard",s)}).catch(e=>{console.log(e)})},newCourseCB(){console.log("courseCB"),this.reStore.newCourse()},newAssignmentCB(s){console.log("assignmentCB: ",s),this.reStore.newAssignment(s)},editAssignmentCB(s,e){console.log("editAssignmentCB: ",s,e),this.reStore.loadAssignment(s,e),this.reStore.router.push("/teacher/editor")},changeTitleCB(){console.log("TeacherPage.titleCB",this.courseKey,this.courseTitle),this.reStore.setCourseTitle(this.courseKey,this.courseTitle)},deleteCourseCB(s){this.reStore.deleteCourse(s)},deleteAssignmentCB(s,e){this.reStore.deleteAssignment(s,e)},takeAssignmentCB(s,e){console.log("TeacherPage.takeAssignment ",s,e),this.reStore.loadAssignment(s,e),this.reStore.router.push("/teacher/assignment")}}},R=n("div",{class:"text-h6"},"Change course title",-1),G={class:"flex-center row q-gutter-md"},J=n("div",{style:{fontSize:"18pt"}},"Teacher Dashboard",-1),O=n("br",null,null,-1),W=n("br",null,null,-1),X=n("br",null,null,-1),Y={class:"flex flex-row justify-center"},Z={class:"absolute-top text-center"},ee={class:"text-h6"},te={class:"text-subtitle2"},oe={key:0},se={key:1},le={style:{"font-size":"22pt",width:"100%"},class:"text-center absolute-bottom"},ne=n("br",null,null,-1),re={class:"hidden"},ie={key:0,class:"flex-center"};function ae(s,e,C,r,ue,de){return d(),S(U,{class:"q-gutter-md"},{default:o(()=>[t(D,{modelValue:r.prompt,"onUpdate:modelValue":e[3]||(e[3]=u=>r.prompt=u),persistent:""},{default:o(()=>[t(v,{style:{"min-width":"350px"}},{default:o(()=>[t(y,null,{default:o(()=>[R]),_:1}),t(y,{class:"q-pt-none"},{default:o(()=>[t(V,{dense:"",modelValue:r.courseTitle,"onUpdate:modelValue":e[0]||(e[0]=u=>r.courseTitle=u),autofocus:"",onKeyup:e[1]||(e[1]=P(u=>{r.prompt=!1,this.changeTitleCB()},["enter"])),onHide:this.dck},null,8,["modelValue","onHide"])]),_:1}),t(z,{align:"right",class:"text-white"},{default:o(()=>[B(t(p,{outline:"",label:"Cancel"},null,512),[[b]]),B(t(p,{outline:"",label:"Save",onClick:e[2]||(e[2]=u=>this.changeTitleCB())},null,512),[[b]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),n("div",G,[J,n("div",null,[t(p,{icon:"list_alt",onClick:e[4]||(e[4]=u=>this.newCourseCB())},{default:o(()=>[t(c,null,{default:o(()=>[i("Create a new course")]),_:1})]),_:1}),this.reStore.authenticated?(d(),S(p,{key:0,onClick:e[5]||(e[5]=u=>this.reStore.router.push("/student")),icon:"switch_account"},{default:o(()=>[t(c,null,{default:o(()=>[i(" Switch to Student-role ")]),_:1})]),_:1})):x("",!0)])]),(d(!0),m(T,null,w(this.reStore.userSnapshot.teaching,(u,a,A)=>(d(),S(v,{flat:"",key:A,style:{opacity:"1.0"}},{default:o(()=>[t(q,{label:"Expand Course",modelValue:r.mval,"onUpdate:modelValue":e[9]||(e[9]=l=>r.mval=l),"header-style":{fontSize:"16pt"}},{default:o(()=>[t(y,{class:"text-center",style:{fontSize:"12pt"}},{default:o(()=>[i(" Course Title: "+h(this.reStore.courses[a].title)+" \xA0",1),t(f,{class:"ptr",name:"edit",onClick:l=>{r.prompt=!0,this.courseTitle=this.reStore.courses[a].title,this.courseKey=a}},null,8,["onClick"]),O,i(" Course-Key: "+h(a)+" ",1),t(f,{class:"ptr",name:"content_copy",onClick:l=>this.copyCK(a)},null,8,["onClick"]),n("div",null,[t(p,{icon:"delete",onClick:l=>this.deleteCourseCB(u.ck)},{default:o(()=>[t(c,null,{default:o(()=>[i("Delete Course")]),_:1})]),_:2},1032,["onClick"]),t(p,{icon:"post_add",onClick:l=>this.newAssignmentCB(u.ck)},{default:o(()=>[t(c,null,{default:o(()=>[i("New Assignment")]),_:1})]),_:2},1032,["onClick"]),t(p,{icon:"content_copy",onClick:l=>this.copyCK(a)},{default:o(()=>[t(c,null,{default:o(()=>[i("Copy this course-key to clipboard. Enroll "),W,i("in this course using this course-key from "),X,i("the Student Page.")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1024),n("div",Y,[(d(!0),m(T,null,w(this.reStore.courses[a].assignments,(l,Q)=>(d(),m("div",{key:l},[t(v,{bordered:"",flat:"",class:"ccard q-mx-sm q-my-md"},{default:o(()=>[t(N,{fit:s.cover,src:l.coverUrl,height:"100%",onClick:g=>this.selectAssignment(a,l.id)},{default:o(()=>[n("div",Z,[n("div",ee,h(l.title.slice(0,18)),1),n("div",te,[l.pages?(d(),m("span",oe,"Pages: "+h(l.pages.length),1)):(d(),m("span",se,"Pages: None"))])]),n("div",le,[t(f,{onClick:[g=>this.takeAssignmentCB(a,l.id),e[6]||(e[6]=k(()=>{},["stop","prevent"]))],name:"play_circle",class:"ptr z-top"},{default:o(()=>[t(c,null,{default:o(()=>[i("Take Assignment")]),_:1})]),_:2},1032,["onClick"]),t(f,{onClick:[g=>this.editAssignmentCB(a,l.id),e[7]||(e[7]=k(()=>{},["stop","prevent"]))],name:"edit",class:"ptr on-right z-top"},{default:o(()=>[t(c,null,{default:o(()=>[i("Edit Assignment"),ne,i(h(l.id),1)]),_:2},1024)]),_:2},1032,["onClick"]),t(f,{onClick:[g=>this.deleteAssignmentCB(a,l.id),e[8]||(e[8]=k(()=>{},["stop","prevent"]))],name:"delete",class:"ptr on-right z-top"},{default:o(()=>[t(c,null,{default:o(()=>[i("Delete Assignment")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["fit","src","onClick"])]),_:2},1024),n("span",re,h(Q),1)]))),128))])]),_:2},1032,["modelValue"]),t(I)]),_:2},1024))),128)),this.reStore.userSnapshot.teaching?(d(),m("div",ie)):x("",!0)]),_:1})}var be=K(M,[["render",ae]]);export{be as default};
