import{d as Q,r as b,a as w,Q as _,i as K,h as V,C as A}from"./ClosePopup.137c441e.js";import{Q as $}from"./QInput.e52303fe.js";import{_ as q,r as v,o as r,c as B,w as n,a as s,aK as P,p as x,Q as p,e as o,af as h,aJ as k,au as c,av as g,aL as f,ag as d,x as S}from"./index.28025b9b.js";import{Q as y}from"./QTooltip.48e47eb2.js";import{Q as N}from"./QPage.4dcadd91.js";import{u as D}from"./re-store.f55b317a.js";import"./use-dark.e7261c3c.js";import"./use-portal.eba292b8.js";import"./use-key-composition.6de547ae.js";import"./position-engine.120c5387.js";import"./selection.32faee2d.js";import"./firebase.ea708b63.js";function E(t){const e=document.createElement("textarea");e.value=t,e.contentEditable="true",e.style.position="fixed";const C=()=>{};Q(C),document.body.appendChild(e),e.focus(),e.select();const a=document.execCommand("copy");return e.remove(),b(C),a}function F(t){return navigator.clipboard!==void 0?navigator.clipboard.writeText(t):new Promise((e,C)=>{const a=E(t);a?e(!0):C(a)})}const H=D(),I={components:{},setup(){return{reStore:H,courseKey:v(null),courseTitle:v(null),prompt:v(!1)}},mounted(){console.log("TeacherPage mounted ",this.reStore.courses)},methods:{copyCK(t){F(t).then(()=>{console.log("ck copied to clipboard",t)}).catch(e=>{console.log(e)})},newCourseCB(){console.log("courseCB"),this.reStore.newCourse()},newAssignmentCB(t){console.log("assignmentCB: ",t),this.reStore.newAssignment(t)},editAssignmentCB(t,e){console.log("editAssignmentCB: ",t,e),this.reStore.editAssignment(t,e)},changeTitleCB(){console.log("TeacherPage.titleCB",this.courseKey,this.courseTitle),this.reStore.setCourseTitle(this.courseKey,this.courseTitle)},deleteCourseCB(t){this.reStore.deleteCourse(t)},deleteAssignmentCB(t,e){this.reStore.deleteAssignment(t,e)},takeAssignmentCB(t,e){console.log("TeacherPage.takeAssignment ",t,e),this.reStore.takeAssignment(t,e)}}},L=o("div",{class:"text-h6"},"Change course title",-1),U={class:"flex-center q-mt-xl q-mb-xl row q-gutter-md"},j=o("div",{class:"text-h6"},"My Teacher Page",-1),J={key:0,class:"flex-center q-pa-md"},M=o("br",null,null,-1),R={width:"100%"},z=o("tr",null,[o("th"),o("th",{colSpan:"100"}," Assignments ")],-1),G={key:0},O=o("th",null,"Student",-1),W={class:"justify-left"},X=["onClick"],Y={class:"hidden"},Z={colSpan:"10"},ee={class:"hidden"},te={key:0},se={key:1},oe={class:"hidden"};function ne(t,e,C,a,le,re){return r(),B(N,{class:"q-gutter-md"},{default:n(()=>[s(V,{modelValue:a.prompt,"onUpdate:modelValue":e[3]||(e[3]=u=>a.prompt=u),persistent:""},{default:n(()=>[s(w,{style:{"min-width":"350px"}},{default:n(()=>[s(_,null,{default:n(()=>[L]),_:1}),s(_,{class:"q-pt-none"},{default:n(()=>[s($,{dense:"",modelValue:a.courseTitle,"onUpdate:modelValue":e[0]||(e[0]=u=>a.courseTitle=u),autofocus:"",onKeyup:e[1]||(e[1]=P(u=>{a.prompt=!1,this.changeTitleCB()},["enter"])),onHide:this.dck},null,8,["modelValue","onHide"])]),_:1}),s(K,{align:"right",class:"text-white"},{default:n(()=>[x(s(p,{outline:"",label:"Cancel"},null,512),[[A]]),x(s(p,{outline:"",label:"Save",onClick:e[2]||(e[2]=u=>this.changeTitleCB())},null,512),[[A]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),o("div",U,[j,o("div",null,[s(p,{icon:"list_alt",onClick:e[4]||(e[4]=u=>this.newCourseCB())},{default:n(()=>[s(y,null,{default:n(()=>[h("Add a course")]),_:1})]),_:1}),this.reStore.authenticated?(r(),B(p,{key:0,onClick:e[5]||(e[5]=u=>this.reStore.router.push("/student")),icon:"switch_account"},{default:n(()=>[s(y,null,{default:n(()=>[h(" Switch to Student role ")]),_:1})]),_:1})):k("",!0)])]),this.reStore.userSnapshot.teaching?(r(),c("div",J,[(r(!0),c(g,null,f(this.reStore.userSnapshot.teaching,(u,i)=>(r(),B(w,{key:u.ck,class:"course-card q-mt-md q-mb-md"},{default:n(()=>[s(_,null,{default:n(()=>[h(" Title: "+d(i)+" \xA0",1),s(S,{class:"ptr",name:"edit",onClick:l=>{a.prompt=!0,this.courseTitle=this.reStore.courses[i].title,this.courseKey=i}},null,8,["onClick"]),M,h(" Key: "+d(i)+" ",1),s(S,{class:"ptr",name:"content_copy",onClick:l=>this.copyCK(i)},null,8,["onClick"]),o("div",null,[s(p,{icon:"delete",onClick:l=>this.deleteCourseCB(u.ck)},{default:n(()=>[s(y,null,{default:n(()=>[h("Delete Course")]),_:1})]),_:2},1032,["onClick"]),s(p,{icon:"assignment",onClick:l=>this.newAssignmentCB(u.ck)},{default:n(()=>[s(y,null,{default:n(()=>[h("New Assignment")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1024),s(_,null,{default:n(()=>[o("table",R,[z,this.reStore.courses[i]?(r(),c("tr",G,[O,(r(!0),c(g,null,f(this.reStore.courses[i].assignments,(l,m)=>(r(),c("th",{key:l},[o("span",W,[o("span",{onClick:T=>this.takeAssignmentCB(i,l.id),class:"ptr"},d(l.title.slice(0,10)),9,X),o("span",null,[s(S,{onClick:T=>this.editAssignmentCB(i,l.id),name:"edit",class:"ptr on-right"},null,8,["onClick"])]),o("span",null,[s(S,{onClick:T=>this.deleteAssignmentCB(i,l.id),name:"delete",class:"ptr on-right"},null,8,["onClick"])]),o("span",Y,d(m),1)])]))),128))])):k("",!0),o("tr",null,[o("td",Z,d(this.reStore.courses[i]),1)]),(r(!0),c(g,null,f(this.reStore.courses[i].enrollment,l=>(r(),c("tr",{key:l.name},[o("td",null,[h(d(l.name)+" ",1),o("span",ee,d(t.sidx),1)]),(r(!0),c(g,null,f(this.reStore.courses[i].assignments,m=>(r(),c("td",{key:m},[m.scores&&m.scores[l.emailKey]?(r(),c("span",te,d(m.scores[l.emailKey]),1)):(r(),c("span",se,"-")),h(),o("span",oe,d(t.aidx),1)]))),128))]))),128))])]),_:2},1024)]),_:2},1024))),128))])):k("",!0)]),_:1})}var Se=q(I,[["render",ne]]);export{Se as default};
