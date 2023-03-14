import{d as b,r as Q,a as A,Q as f,i as K,h as P,C as w}from"./ClosePopup.9845a6dd.js";import{Q as V}from"./QInput.481f88b5.js";import{_ as $,r as S,o as a,c as k,w as o,a as t,aK as q,p as x,Q as p,e as n,af as i,aJ as B,au as d,av as y,aL as v,ag as h,x as g}from"./index.3514c2c5.js";import{Q as m}from"./QTooltip.9c2b3f8a.js";import{Q as E}from"./QExpansionItem.a14577f0.js";import{Q as D}from"./QPage.2648dda8.js";import{u as N}from"./re-store.dc7846ac.js";import"./use-dark.c66bf10b.js";import"./use-portal.b7590e5f.js";import"./use-key-composition.d2f87e93.js";import"./position-engine.f8d7b8d6.js";import"./selection.3558de9c.js";import"./QSlideTransition.4eb4ff94.js";import"./firebase.ea708b63.js";function F(s){const e=document.createElement("textarea");e.value=s,e.contentEditable="true",e.style.position="fixed";const C=()=>{};b(C),document.body.appendChild(e),e.focus(),e.select();const u=document.execCommand("copy");return e.remove(),Q(C),u}function I(s){return navigator.clipboard!==void 0?navigator.clipboard.writeText(s):new Promise((e,C)=>{const u=F(s);u?e(!0):C(u)})}const H=N(),L={components:{},setup(){return{reStore:H,courseKey:S(null),courseTitle:S(null),prompt:S(!1)}},mounted(){console.log("TeacherPage mounted ",this.reStore.courses)},methods:{copyCK(s){I(s).then(()=>{console.log("ck copied to clipboard",s)}).catch(e=>{console.log(e)})},newCourseCB(){console.log("courseCB"),this.reStore.newCourse()},newAssignmentCB(s){console.log("assignmentCB: ",s),this.reStore.newAssignment(s)},editAssignmentCB(s,e){console.log("editAssignmentCB: ",s,e),this.reStore.editAssignment(s,e)},changeTitleCB(){console.log("TeacherPage.titleCB",this.courseKey,this.courseTitle),this.reStore.setCourseTitle(this.courseKey,this.courseTitle)},deleteCourseCB(s){this.reStore.deleteCourse(s)},deleteAssignmentCB(s,e){this.reStore.deleteAssignment(s,e)},takeAssignmentCB(s,e){console.log("TeacherPage.takeAssignment ",s,e),this.reStore.takeAssignmentAsTeacher(s,e)}}},U=n("div",{class:"text-h6"},"Change course title",-1),J={class:"flex-center q-mt-xl q-mb-xl row q-gutter-md"},M=n("div",{class:"text-h6"},"My Teacher Page",-1),R={key:0,class:"flex-center q-pa-md"},j=n("br",null,null,-1),z=n("br",null,null,-1),G=n("br",null,null,-1),O={width:"100%",class:"course_table"},W=n("tr",null,[n("th"),n("th",{colSpan:"100"}," Assignments ")],-1),X={key:0},Y=n("th",{class:"float-left on-right"},"Student",-1),Z={class:"hidden"},ee={class:"float-left on-right"},te={class:"hidden"},se={key:0},oe={key:1},ne={class:"hidden"},le={class:"hidden"},ie={colSpan:"10"};function re(s,e,C,u,ae,ue){return a(),k(D,{class:"q-gutter-md"},{default:o(()=>[t(P,{modelValue:u.prompt,"onUpdate:modelValue":e[3]||(e[3]=c=>u.prompt=c),persistent:""},{default:o(()=>[t(A,{style:{"min-width":"350px"}},{default:o(()=>[t(f,null,{default:o(()=>[U]),_:1}),t(f,{class:"q-pt-none"},{default:o(()=>[t(V,{dense:"",modelValue:u.courseTitle,"onUpdate:modelValue":e[0]||(e[0]=c=>u.courseTitle=c),autofocus:"",onKeyup:e[1]||(e[1]=q(c=>{u.prompt=!1,this.changeTitleCB()},["enter"])),onHide:this.dck},null,8,["modelValue","onHide"])]),_:1}),t(K,{align:"right",class:"text-white"},{default:o(()=>[x(t(p,{outline:"",label:"Cancel"},null,512),[[w]]),x(t(p,{outline:"",label:"Save",onClick:e[2]||(e[2]=c=>this.changeTitleCB())},null,512),[[w]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),n("div",J,[M,n("div",null,[t(p,{icon:"list_alt",onClick:e[4]||(e[4]=c=>this.newCourseCB())},{default:o(()=>[t(m,null,{default:o(()=>[i("Add a course")]),_:1})]),_:1}),this.reStore.authenticated?(a(),k(p,{key:0,onClick:e[5]||(e[5]=c=>this.reStore.router.push("/student")),icon:"switch_account"},{default:o(()=>[t(m,null,{default:o(()=>[i(" Switch to Student role ")]),_:1})]),_:1})):B("",!0)])]),this.reStore.userSnapshot.teaching?(a(),d("div",R,[(a(!0),d(y,null,v(this.reStore.userSnapshot.teaching,(c,r)=>(a(),k(A,{key:c.ck,class:"course-card q-mt-md q-mb-md",style:{opacity:"0.8"}},{default:o(()=>[t(f,null,{default:o(()=>[i(" Title: "+h(r)+" \xA0",1),t(g,{class:"ptr",name:"edit",onClick:l=>{u.prompt=!0,this.courseTitle=this.reStore.courses[r].title,this.courseKey=r}},null,8,["onClick"]),j,i(" Key: "+h(r)+" ",1),t(g,{class:"ptr",name:"content_copy",onClick:l=>this.copyCK(r)},null,8,["onClick"]),n("div",null,[t(p,{icon:"delete",onClick:l=>this.deleteCourseCB(c.ck)},{default:o(()=>[t(m,null,{default:o(()=>[i("Delete Course")]),_:1})]),_:2},1032,["onClick"]),t(p,{icon:"post_add",onClick:l=>this.newAssignmentCB(c.ck)},{default:o(()=>[t(m,null,{default:o(()=>[i("New Assignment")]),_:1})]),_:2},1032,["onClick"]),t(p,{icon:"content_copy",onClick:l=>this.copyCK(r)},{default:o(()=>[t(m,null,{default:o(()=>[i("Copy this course-key to clipboard. Enroll "),z,i("in this course using this course-key from "),G,i("the Student Page.")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1024),t(f,null,{default:o(()=>[n("table",O,[W,this.reStore.courses[r]?(a(),d("tr",X,[Y,(a(!0),d(y,null,v(this.reStore.courses[r].assignments,(l,_)=>(a(),d("th",{key:l},[n("span",null,h(l.title.slice(0,10)),1),n("span",null,[t(g,{onClick:T=>this.takeAssignmentCB(r,l.id),name:"play_circle",class:"ptr on-right"},null,8,["onClick"]),t(m,null,{default:o(()=>[i("Take Assignment")]),_:1})]),n("span",null,[t(g,{onClick:T=>this.editAssignmentCB(r,l.id),name:"edit",class:"ptr on-right"},null,8,["onClick"]),t(m,null,{default:o(()=>[i("Edit Assignment")]),_:1})]),n("span",null,[t(g,{onClick:T=>this.deleteAssignmentCB(r,l.id),name:"delete",class:"ptr on-right"},null,8,["onClick"]),t(m,null,{default:o(()=>[i("Delete Assignment")]),_:1})]),n("span",Z,h(_),1)]))),128))])):B("",!0),(a(!0),d(y,null,v(this.reStore.courses[r].enrollment,l=>(a(),d("tr",{key:l.name},[n("td",ee,[i(h(l.name)+" ",1),n("span",te,h(s.sidx),1)]),(a(!0),d(y,null,v(this.reStore.courses[r].assignments,_=>(a(),d("td",{style:{"text-align":"center"},key:_},[_.scores&&_.scores[l.emailKey]?(a(),d("span",se,h(_.scores[l.emailKey]),1)):(a(),d("span",oe,"-")),i(),n("span",ne,h(s.aidx),1)]))),128))]))),128)),n("tr",le,[n("td",ie,[t(E,{label:"raw"},{default:o(()=>[i(h(this.reStore.courses[r]),1)]),_:2},1024)])])])]),_:2},1024)]),_:2},1024))),128))])):B("",!0)]),_:1})}var Te=$(L,[["render",re]]);export{Te as default};
