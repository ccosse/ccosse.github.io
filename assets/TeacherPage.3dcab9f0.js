import{d as K,r as $,a as S,Q as k,i as P,h as q,C as T}from"./ClosePopup.d0dc1c15.js";import{Q as V}from"./QInput.f68bf466.js";import{_ as E,r as A,o as n,c as B,w as t,a as e,aK as D,p as w,Q as f,e as o,af as i,aJ as b,au as a,av as g,aL as y,ag as d,x as C}from"./index.33ff1a9e.js";import{Q as p}from"./QTooltip.49307636.js";import{Q as N}from"./QExpansionItem.f21c8de1.js";import{Q as I}from"./QImg.f9d2d3fb.js";import{Q as F}from"./QScrollArea.96a25371.js";import{Q as U}from"./QPage.68a5feb9.js";import{u as H}from"./re-store.0adccb1e.js";import"./use-dark.29afdc89.js";import"./use-portal.86f7f721.js";import"./use-key-composition.7f4d7585.js";import"./position-engine.0eef44fa.js";import"./selection.23b14a57.js";import"./QSlideTransition.7860bf87.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";function L(l){const s=document.createElement("textarea");s.value=l,s.contentEditable="true",s.style.position="fixed";const v=()=>{};K(v),document.body.appendChild(s),s.focus(),s.select();const u=document.execCommand("copy");return s.remove(),$(v),u}function z(l){return navigator.clipboard!==void 0?navigator.clipboard.writeText(l):new Promise((s,v)=>{const u=L(l);u?s(!0):v(u)})}const J=H(),M={components:{},setup(){return{reStore:J,courseKey:A(null),courseTitle:A(null),prompt:A(!1)}},mounted(){console.log("TeacherPage mounted ",this.reStore.courses)},methods:{copyCK(l){z(l).then(()=>{console.log("ck copied to clipboard",l)}).catch(s=>{console.log(s)})},newCourseCB(){console.log("courseCB"),this.reStore.newCourse()},newAssignmentCB(l){console.log("assignmentCB: ",l),this.reStore.newAssignment(l)},editAssignmentCB(l,s){console.log("editAssignmentCB: ",l,s),this.reStore.editAssignment(l,s)},changeTitleCB(){console.log("TeacherPage.titleCB",this.courseKey,this.courseTitle),this.reStore.setCourseTitle(this.courseKey,this.courseTitle)},deleteCourseCB(l){this.reStore.deleteCourse(l)},deleteAssignmentCB(l,s){this.reStore.deleteAssignment(l,s)},takeAssignmentCB(l,s){console.log("TeacherPage.takeAssignment ",l,s),this.reStore.takeAssignmentAsTeacher(l,s)}}},R=o("div",{class:"text-h6"},"Change course title",-1),j={class:"flex-center q-mt-xl q-mb-xl row q-gutter-md"},G=o("div",{class:"text-h6"},"My Teacher Page",-1),O={key:0,class:"flex-center q-pa-md"},W=o("br",null,null,-1),X=o("br",null,null,-1),Y=o("br",null,null,-1),Z={class:"course_table"},ee=o("tr",null,[o("th"),o("th",{colSpan:"100"}," Assignments ")],-1),te={key:0},se=o("th",{class:"float-left on-right"},"Student",-1),oe={class:"hidden"},le={class:"float-left on-right"},ne={class:"hidden"},ie={key:0},re={key:1},ae={class:"hidden"},ce={class:"hidden"},de={colSpan:"10"},ue={class:"q-pa-md"},he={class:"row no-wrap"},_e={id:"icons_ul"},me={class:"absolute-top"},pe={class:"text-h6"},Ce={class:"text-subtitle2"},fe={key:0},ge={key:1},ye={style:{"font-size":"22pt",width:"100%"},class:"text-center absolute-bottom"},ve={class:"hidden"};function ke(l,s,v,u,Se,Ae){return n(),B(U,{class:"q-gutter-md"},{default:t(()=>[e(q,{modelValue:u.prompt,"onUpdate:modelValue":s[3]||(s[3]=h=>u.prompt=h),persistent:""},{default:t(()=>[e(S,{style:{"min-width":"350px"}},{default:t(()=>[e(k,null,{default:t(()=>[R]),_:1}),e(k,{class:"q-pt-none"},{default:t(()=>[e(V,{dense:"",modelValue:u.courseTitle,"onUpdate:modelValue":s[0]||(s[0]=h=>u.courseTitle=h),autofocus:"",onKeyup:s[1]||(s[1]=D(h=>{u.prompt=!1,this.changeTitleCB()},["enter"])),onHide:this.dck},null,8,["modelValue","onHide"])]),_:1}),e(P,{align:"right",class:"text-white"},{default:t(()=>[w(e(f,{outline:"",label:"Cancel"},null,512),[[T]]),w(e(f,{outline:"",label:"Save",onClick:s[2]||(s[2]=h=>this.changeTitleCB())},null,512),[[T]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),o("div",j,[G,o("div",null,[e(f,{icon:"list_alt",onClick:s[4]||(s[4]=h=>this.newCourseCB())},{default:t(()=>[e(p,null,{default:t(()=>[i("Add a course")]),_:1})]),_:1}),this.reStore.authenticated?(n(),B(f,{key:0,onClick:s[5]||(s[5]=h=>this.reStore.router.push("/student")),icon:"switch_account"},{default:t(()=>[e(p,null,{default:t(()=>[i(" Switch to Student role ")]),_:1})]),_:1})):b("",!0)])]),this.reStore.userSnapshot.teaching?(n(),a("div",O,[(n(!0),a(g,null,y(this.reStore.userSnapshot.teaching,(h,c)=>(n(),B(S,{key:h.ck,class:"course-card q-mt-md q-mb-md",style:{opacity:"1.0"}},{default:t(()=>[e(k,null,{default:t(()=>[i(" Title: "+d(this.reStore.courses[c].title)+" \xA0",1),e(C,{class:"ptr",name:"edit",onClick:r=>{u.prompt=!0,this.courseTitle=this.reStore.courses[c].title,this.courseKey=c}},null,8,["onClick"]),W,i(" Key: "+d(c)+" ",1),e(C,{class:"ptr",name:"content_copy",onClick:r=>this.copyCK(c)},null,8,["onClick"]),o("div",null,[e(f,{icon:"delete",onClick:r=>this.deleteCourseCB(h.ck)},{default:t(()=>[e(p,null,{default:t(()=>[i("Delete Course")]),_:1})]),_:2},1032,["onClick"]),e(f,{icon:"post_add",onClick:r=>this.newAssignmentCB(h.ck)},{default:t(()=>[e(p,null,{default:t(()=>[i("New Assignment")]),_:1})]),_:2},1032,["onClick"]),e(f,{icon:"content_copy",onClick:r=>this.copyCK(c)},{default:t(()=>[e(p,null,{default:t(()=>[i("Copy this course-key to clipboard. Enroll "),X,i("in this course using this course-key from "),Y,i("the Student Page.")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1024),e(k,null,{default:t(()=>[o("table",Z,[ee,this.reStore.courses[c]?(n(),a("tr",te,[se,(n(!0),a(g,null,y(this.reStore.courses[c].assignments,(r,_)=>(n(),a("th",{key:r},[o("span",null,d(r.title.slice(0,10)),1),o("span",null,[e(C,{onClick:m=>this.takeAssignmentCB(c,r.id),name:"play_circle",class:"ptr on-right"},null,8,["onClick"]),e(p,null,{default:t(()=>[i("Take Assignment")]),_:1})]),o("span",null,[e(C,{onClick:m=>this.editAssignmentCB(c,r.id),name:"edit",class:"ptr on-right"},null,8,["onClick"]),e(p,null,{default:t(()=>[i("Edit Assignment")]),_:1})]),o("span",null,[e(C,{onClick:m=>this.deleteAssignmentCB(c,r.id),name:"delete",class:"ptr on-right"},null,8,["onClick"]),e(p,null,{default:t(()=>[i("Delete Assignment")]),_:1})]),o("span",oe,d(_),1)]))),128))])):b("",!0),(n(!0),a(g,null,y(this.reStore.courses[c].enrollment,r=>(n(),a("tr",{key:r.name},[o("td",le,[i(d(r.name)+" ",1),o("span",ne,d(l.sidx),1)]),(n(!0),a(g,null,y(this.reStore.courses[c].assignments,_=>(n(),a("td",{style:{"text-align":"center"},key:_},[_.scores&&_.scores[r.emailKey]?(n(),a("span",ie,d(_.scores[r.emailKey]),1)):(n(),a("span",re,"-")),i(),o("span",ae,d(l.aidx),1)]))),128))]))),128)),o("tr",ce,[o("td",de,[e(N,{label:"raw"},{default:t(()=>[i(d(this.reStore.courses[c]),1)]),_:2},1024)])])])]),_:2},1024),e(k,null,{default:t(()=>[o("div",ue,[e(F,{style:{height:"300px",width:"100%"}},{default:t(()=>[o("div",he,[(n(!0),a(g,null,y(this.reStore.userSnapshot.teaching,(r,_)=>(n(),a("div",{id:"iconbar",key:r.ck},[o("ul",_e,[(n(!0),a(g,null,y(this.reStore.courses[_].assignments,(m,Q)=>(n(),a("li",{key:m},[e(S,{flat:"",bordered:"",class:"ccard q-mx-sm"},{default:t(()=>[e(I,{fit:l.cover,src:m.coverUrl,height:"100%"},{default:t(()=>[o("div",me,[o("div",pe,d(m.title.slice(0,18)),1),o("div",Ce,[m.pages?(n(),a("span",fe,"Pages: "+d(m.pages.length),1)):(n(),a("span",ge,"Pages: None"))])]),o("div",ye,[e(C,{onClick:x=>this.takeAssignmentCB(_,m.id),name:"play_circle",class:"ptr"},{default:t(()=>[e(p,null,{default:t(()=>[i("Take Assignment")]),_:1})]),_:2},1032,["onClick"]),e(C,{onClick:x=>this.editAssignmentCB(_,m.id),name:"edit",class:"ptr on-right"},{default:t(()=>[e(p,null,{default:t(()=>[i("Edit Assignment")]),_:1})]),_:2},1032,["onClick"]),e(C,{onClick:x=>this.deleteAssignmentCB(_,m.id),name:"delete",class:"ptr on-right"},{default:t(()=>[e(p,null,{default:t(()=>[i("Delete Assignment")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["fit","src"])]),_:2},1024),o("span",ve,d(Q),1)]))),128))])]))),128))])]),_:2},1024)])]),_:2},1024)]),_:2},1024))),128))])):b("",!0)]),_:1})}var He=E(M,[["render",ke]]);export{He as default};
