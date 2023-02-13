import{d as P,r as K,a as v,Q as y,i as V,h as $,C as A}from"./ClosePopup.59e46980.js";import{Q as q}from"./QInput.279f3aa7.js";import{_ as E,r as k,o as a,c as S,w as s,a as t,aK as N,p as w,Q as h,e as l,af as n,aJ as b,au as u,aL as x,av as B,ag as C,x as f}from"./index.ceece9e7.js";import{Q as d}from"./QTooltip.78d12ddd.js";import{Q as D}from"./QImg.efdb90f4.js";import{Q as F}from"./QPage.fbfee5e7.js";import{u as I}from"./re-store.804d2bd3.js";import"./use-dark.bb5c2a85.js";import"./use-portal.f6dc05cc.js";import"./use-key-composition.9980f1cc.js";import"./selection.745b9f7d.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";function U(o){const e=document.createElement("textarea");e.value=o,e.contentEditable="true",e.style.position="fixed";const _=()=>{};P(_),document.body.appendChild(e),e.focus(),e.select();const i=document.execCommand("copy");return e.remove(),K(_),i}function H(o){return navigator.clipboard!==void 0?navigator.clipboard.writeText(o):new Promise((e,_)=>{const i=U(o);i?e(!0):_(i)})}const L=I(),j={components:{},setup(){return{reStore:L,courseKey:k(null),courseTitle:k(null),prompt:k(!1)}},mounted(){console.log("TeacherPage mounted ",this.reStore.courses)},methods:{copyCK(o){H(o).then(()=>{console.log("ck copied to clipboard",o)}).catch(e=>{console.log(e)})},newCourseCB(){console.log("courseCB"),this.reStore.newCourse()},newAssignmentCB(o){console.log("assignmentCB: ",o),this.reStore.newAssignment(o)},editAssignmentCB(o,e){console.log("editAssignmentCB: ",o,e),this.reStore.editAssignment(o,e)},changeTitleCB(){console.log("TeacherPage.titleCB",this.courseKey,this.courseTitle),this.reStore.setCourseTitle(this.courseKey,this.courseTitle)},deleteCourseCB(o){this.reStore.deleteCourse(o)},deleteAssignmentCB(o,e){this.reStore.deleteAssignment(o,e)},takeAssignmentCB(o,e){console.log("TeacherPage.takeAssignment ",o,e),this.reStore.takeAssignmentAsTeacher(o,e)}}},z=l("div",{class:"text-h6"},"Change course title",-1),J={class:"flex-center q-mt-xl q-mb-xl row q-gutter-md"},M=l("div",{class:"text-h6"},"My Teacher Page",-1),R=l("br",null,null,-1),G=l("br",null,null,-1),O=l("br",null,null,-1),W={class:"absolute-top text-center"},X={class:"text-h6"},Y={class:"text-subtitle2"},Z={key:0},ee={key:1},te={style:{"font-size":"22pt",width:"100%"},class:"text-center absolute-bottom"},se={class:"hidden"},oe={key:0,class:"flex-center"};function le(o,e,_,i,ne,ie){return a(),S(F,{class:"q-gutter-md"},{default:s(()=>[t($,{modelValue:i.prompt,"onUpdate:modelValue":e[3]||(e[3]=r=>i.prompt=r),persistent:""},{default:s(()=>[t(v,{style:{"min-width":"350px"}},{default:s(()=>[t(y,null,{default:s(()=>[z]),_:1}),t(y,{class:"q-pt-none"},{default:s(()=>[t(q,{dense:"",modelValue:i.courseTitle,"onUpdate:modelValue":e[0]||(e[0]=r=>i.courseTitle=r),autofocus:"",onKeyup:e[1]||(e[1]=N(r=>{i.prompt=!1,this.changeTitleCB()},["enter"])),onHide:this.dck},null,8,["modelValue","onHide"])]),_:1}),t(V,{align:"right",class:"text-white"},{default:s(()=>[w(t(h,{outline:"",label:"Cancel"},null,512),[[A]]),w(t(h,{outline:"",label:"Save",onClick:e[2]||(e[2]=r=>this.changeTitleCB())},null,512),[[A]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l("div",J,[M,l("div",null,[t(h,{icon:"list_alt",onClick:e[4]||(e[4]=r=>this.newCourseCB())},{default:s(()=>[t(d,null,{default:s(()=>[n("Add a course")]),_:1})]),_:1}),this.reStore.authenticated?(a(),S(h,{key:0,onClick:e[5]||(e[5]=r=>this.reStore.router.push("/student")),icon:"switch_account"},{default:s(()=>[t(d,null,{default:s(()=>[n(" Switch to Student role ")]),_:1})]),_:1})):b("",!0)])]),(a(!0),u(B,null,x(this.reStore.userSnapshot.teaching,(r,m)=>(a(),S(v,{flat:"",key:r.ck,style:{opacity:"1.0"}},{default:s(()=>[t(y,{class:"text-center"},{default:s(()=>[n(" Title: "+C(this.reStore.courses[m].title)+" \xA0",1),t(f,{class:"ptr",name:"edit",onClick:p=>{i.prompt=!0,this.courseTitle=this.reStore.courses[m].title,this.courseKey=m}},null,8,["onClick"]),R,n(" Key: "+C(m)+" ",1),t(f,{class:"ptr",name:"content_copy",onClick:p=>this.copyCK(m)},null,8,["onClick"]),l("div",null,[t(h,{icon:"delete",onClick:p=>this.deleteCourseCB(r.ck)},{default:s(()=>[t(d,null,{default:s(()=>[n("Delete Course")]),_:1})]),_:2},1032,["onClick"]),t(h,{icon:"post_add",onClick:p=>this.newAssignmentCB(r.ck)},{default:s(()=>[t(d,null,{default:s(()=>[n("New Assignment")]),_:1})]),_:2},1032,["onClick"]),t(h,{icon:"content_copy",onClick:p=>this.copyCK(m)},{default:s(()=>[t(d,null,{default:s(()=>[n("Copy this course-key to clipboard. Enroll "),G,n("in this course using this course-key from "),O,n("the Student Page.")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1024),(a(!0),u(B,null,x(this.reStore.userSnapshot.teaching,(p,g)=>(a(),u("div",{class:"flex flex-row justify-center",key:p.ck},[(a(!0),u(B,null,x(this.reStore.courses[g].assignments,(c,Q)=>(a(),u("div",{key:c},[t(v,{bordered:"",flat:"",class:"ccard q-mx-sm q-my-md"},{default:s(()=>[t(D,{fit:o.cover,src:c.coverUrl,height:"100%"},{default:s(()=>[l("div",W,[l("div",X,C(c.title.slice(0,18)),1),l("div",Y,[c.pages?(a(),u("span",Z,"Pages: "+C(c.pages.length),1)):(a(),u("span",ee,"Pages: None"))])]),l("div",te,[t(f,{onClick:T=>this.takeAssignmentCB(g,c.id),name:"play_circle",class:"ptr"},{default:s(()=>[t(d,null,{default:s(()=>[n("Take Assignment")]),_:1})]),_:2},1032,["onClick"]),t(f,{onClick:T=>this.editAssignmentCB(g,c.id),name:"edit",class:"ptr on-right"},{default:s(()=>[t(d,null,{default:s(()=>[n("Edit Assignment")]),_:1})]),_:2},1032,["onClick"]),t(f,{onClick:T=>this.deleteAssignmentCB(g,c.id),name:"delete",class:"ptr on-right"},{default:s(()=>[t(d,null,{default:s(()=>[n("Delete Assignment")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["fit","src"])]),_:2},1024),l("span",se,C(Q),1)]))),128))]))),128))]),_:2},1024))),128)),this.reStore.userSnapshot.teaching?(a(),u("div",oe)):b("",!0)]),_:1})}var ye=E(j,[["render",le]]);export{ye as default};
