import{a as k,Q as C,i as A,h as Q,C as T}from"./ClosePopup.a57bf30a.js";import{Q as K}from"./QInput.a3cc228a.js";import{_ as V,r as y,o as n,c as B,w as s,a as e,aK as b,p as w,Q as p,e as o,af as d,aJ as v,au as u,av as _,aL as f,ag as c,x as g}from"./index.28bfd79f.js";import{Q as S}from"./QTooltip.55a41d06.js";import{Q as q}from"./QPage.1a384a12.js";import{u as $}from"./re-store.48839778.js";import{c as P}from"./copy-to-clipboard.a0a076d6.js";import"./use-dark.d110bb63.js";import"./use-portal.81e30091.js";import"./use-key-composition.fc341f9d.js";import"./position-engine.cd1b565f.js";import"./selection.1f925cf3.js";import"./firebase.ea708b63.js";const N=$(),D={components:{},setup(){return{reStore:N,courseKey:y(null),courseTitle:y(null),prompt:y(!1)}},mounted(){console.log("TeacherPage mounted ",this.reStore.courses)},methods:{copyCK(l){P(l).then(()=>{console.log("ck copied to clipboard",l)}).catch(t=>{console.log(t)})},newCourseCB(){console.log("courseCB"),this.reStore.newCourse()},newAssignmentCB(l){console.log("assignmentCB: ",l),this.reStore.newAssignment(l)},editAssignmentCB(l,t){console.log("editAssignmentCB: ",l,t),this.reStore.editAssignment(l,t)},changeTitleCB(){console.log("TeacherPage.titleCB",this.courseKey,this.courseTitle),this.reStore.setCourseTitle(this.courseKey,this.courseTitle)},deleteCourseCB(l){this.reStore.deleteCourse(l)},deleteAssignmentCB(l,t){this.reStore.deleteAssignment(l,t)}}},E=o("div",{class:"text-h6"},"Change course title",-1),H={class:"flex-center q-mt-xl q-mb-xl row q-gutter-md"},I=o("div",{class:"text-h6"},"My Teacher Page",-1),L={key:0,class:"flex-center q-pa-md"},U=o("br",null,null,-1),F={width:"100%"},J=o("tr",null,[o("th"),o("th",{colSpan:"100"}," Assignments ")],-1),M={key:0},R=o("th",null,"Student",-1),j={class:"hidden"},z={colSpan:"10"},G={class:"hidden"},O={key:0},W={key:1},X={class:"hidden"};function Y(l,t,Z,h,ee,te){return n(),B(q,{class:"q-gutter-md"},{default:s(()=>[e(Q,{modelValue:h.prompt,"onUpdate:modelValue":t[3]||(t[3]=a=>h.prompt=a),persistent:""},{default:s(()=>[e(k,{style:{"min-width":"350px"}},{default:s(()=>[e(C,null,{default:s(()=>[E]),_:1}),e(C,{class:"q-pt-none"},{default:s(()=>[e(K,{dense:"",modelValue:h.courseTitle,"onUpdate:modelValue":t[0]||(t[0]=a=>h.courseTitle=a),autofocus:"",onKeyup:t[1]||(t[1]=b(a=>{h.prompt=!1,this.changeTitleCB()},["enter"])),onHide:this.dck},null,8,["modelValue","onHide"])]),_:1}),e(A,{align:"right",class:"text-white"},{default:s(()=>[w(e(p,{outline:"",label:"Cancel"},null,512),[[T]]),w(e(p,{outline:"",label:"Save",onClick:t[2]||(t[2]=a=>this.changeTitleCB())},null,512),[[T]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),o("div",H,[I,o("div",null,[e(p,{icon:"list_alt",onClick:t[4]||(t[4]=a=>this.newCourseCB())},{default:s(()=>[e(S,null,{default:s(()=>[d("Add a course")]),_:1})]),_:1}),this.reStore.authenticated?(n(),B(p,{key:0,onClick:t[5]||(t[5]=a=>this.reStore.router.push("/student")),icon:"switch_account"},{default:s(()=>[e(S,null,{default:s(()=>[d(" Switch to Student role ")]),_:1})]),_:1})):v("",!0)])]),this.reStore.userSnapshot.teaching?(n(),u("div",L,[(n(!0),u(_,null,f(this.reStore.userSnapshot.teaching,(a,i)=>(n(),B(k,{key:a.ck,class:"course-card q-mt-md q-mb-md"},{default:s(()=>[e(C,null,{default:s(()=>[d(" Title: "+c(i)+" \xA0",1),e(g,{class:"ptr",name:"edit",onClick:r=>{h.prompt=!0,this.courseTitle=this.reStore.courses[i].title,this.courseKey=i}},null,8,["onClick"]),U,d(" Key: "+c(i)+" ",1),e(g,{class:"ptr",name:"content_copy",onClick:r=>this.copyCK(i)},null,8,["onClick"]),o("div",null,[e(p,{icon:"delete",onClick:r=>this.deleteCourseCB(a.ck)},{default:s(()=>[e(S,null,{default:s(()=>[d("Delete Course")]),_:1})]),_:2},1032,["onClick"]),e(p,{icon:"assignment",onClick:r=>this.newAssignmentCB(a.ck)},{default:s(()=>[e(S,null,{default:s(()=>[d("New Assignment")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1024),e(C,null,{default:s(()=>[o("table",F,[J,this.reStore.courses[i]?(n(),u("tr",M,[R,(n(!0),u(_,null,f(this.reStore.courses[i].assignments,(r,m)=>(n(),u("th",{key:r},[d(c(r.title)+" ",1),e(g,{onClick:x=>this.editAssignmentCB(i,r.id),name:"edit"},null,8,["onClick"]),e(g,{onClick:x=>this.deleteAssignmentCB(i,r.id),name:"delete"},null,8,["onClick"]),o("span",j,c(m),1)]))),128))])):v("",!0),o("tr",null,[o("td",z,c(this.reStore.courses[i]),1)]),(n(!0),u(_,null,f(this.reStore.courses[i].enrollment,r=>(n(),u("tr",{key:r.name},[o("td",null,[d(c(r.name)+" ",1),o("span",G,c(l.sidx),1)]),(n(!0),u(_,null,f(this.reStore.courses[i].assignments,m=>(n(),u("td",{key:m},[m.scores&&m.scores[r.emailKey]?(n(),u("span",O,c(m.scores[r.emailKey]),1)):(n(),u("span",W,"-")),d(),o("span",X,c(l.aidx),1)]))),128))]))),128))])]),_:2},1024)]),_:2},1024))),128))])):v("",!0)]),_:1})}var Ce=V(D,[["render",Y]]);export{Ce as default};
