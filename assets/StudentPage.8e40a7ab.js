import{Q as f}from"./use-form.fecff63d.js";import{Q as V}from"./QInput.df766282.js";import{_ as A,r as S,o as n,c as v,w as t,a as e,aL as B,K as k,Q as m,e as s,af as a,ak as x,ag as r,ah as y,ai as g,aj as p,a1 as Q,aM as P}from"./index.f854b5d6.js";import{d as E,Q as q,C as b}from"./ClosePopup.b623aa77.js";import{Q as C}from"./QCard.f32cdbd2.js";import{Q as _}from"./QTooltip.2b6c03fd.js";import{Q as N}from"./QImg.887d3698.js";import{a as $,Q as z}from"./QList.cdb4e7a0.js";import{Q as D}from"./QPage.ea90ebcf.js";import{u as T}from"./re-store.4364324c.js";import"./use-key-composition.5d97f554.js";import"./use-dark.1d598596.js";import"./use-prevent-scroll.62197e54.js";import"./scroll.d9ba8e54.js";import"./use-portal.bbd63ba4.js";import"./selection.ae7c1dcc.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";const I=T(),U={setup(){return{prompt:S(!1),courseKey:S(null),reStore:I,mval:S(!0)}},mounted(){this.reStore.unloadCurrent()},methods:{selectAssignment(u,o){console.log("StudentPage selectAssignment ",u,o)},takeAssignment(u,o){console.log("takeAssignment: ",u,o),this.reStore.loadAssignment(u,o),this.reStore.router.push("/student/assignment")},enrollCB(){console.log("StudentPage.enrollCB",this.courseKey);const u=this.reStore.enroll(this.courseKey);console.log(u)}}},j=s("div",{class:"text-h6"},"Enter a course-key",-1),L={class:"flex-center row q-gutter-md"},M=s("div",{style:{fontSize:"18pt"}},"Student Dashboard",-1),F=s("br",null,null,-1),H={key:0},R={class:"q-pa-md"},G={class:"hidden"},J=s("br",null,null,-1),O=s("br",null,null,-1),W={class:"flex flex-row justify-center"},X={class:"absolute-top text-center"},Y={class:"text-h6"},Z={class:"text-subtitle2"},ee={key:0},te={key:1},se={style:{"font-size":"22pt",width:"100%"},class:"text-center absolute-bottom"},oe={class:"hidden"},le={width:"100%"},ne=s("tr",null,[s("th",{colSpan:"100"},"My Score Sheet")],-1),re=s("th",null,"Student",-1),ae={style:{"text-align":"center"}},ie={key:0},de={key:1};function ue(u,o,ce,c,pe,me){return n(),v(D,{class:"q-gutter-md"},{default:t(()=>[e(q,{modelValue:c.prompt,"onUpdate:modelValue":o[3]||(o[3]=i=>c.prompt=i),persistent:""},{default:t(()=>[e(C,{style:{"min-width":"350px"}},{default:t(()=>[e(f,null,{default:t(()=>[j]),_:1}),e(f,{class:"q-pt-none"},{default:t(()=>[e(V,{dense:"",modelValue:c.courseKey,"onUpdate:modelValue":o[0]||(o[0]=i=>c.courseKey=i),autofocus:"",onKeyup:o[1]||(o[1]=B(i=>{c.prompt=!1,this.enrollCB()},["enter"]))},null,8,["modelValue"])]),_:1}),e(E,{align:"right",class:"text-white"},{default:t(()=>[k(e(m,{flat:"",label:"Cancel"},null,512),[[b]]),k(e(m,{flat:"",label:"Enroll",onClick:o[2]||(o[2]=i=>this.enrollCB())},null,512),[[b]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),s("div",L,[M,s("div",null,[e(m,{icon:"group_add",onClick:o[4]||(o[4]=i=>c.prompt=!0)},{default:t(()=>[e(_,null,{default:t(()=>[a("Have a course-key? Enter it here"),F,a("to join your course.")]),_:1})]),_:1}),this.reStore.authenticated?(n(),v(m,{key:0,onClick:o[5]||(o[5]=i=>this.reStore.router.push("/teacher")),icon:"switch_account"},{default:t(()=>[e(_,null,{default:t(()=>[a(" Switch to Teacher role ")]),_:1})]),_:1})):x("",!0)])]),this.reStore.userSnapshot.taking?(n(),r("div",H,[(n(!0),r(y,null,g(this.reStore.userSnapshot.teaching,(i,d,w)=>(n(),v(C,{flat:"",key:w,style:{opacity:"1.0"}},{default:t(()=>[s("div",R,[e($,{bordered:"",class:"rounded-borders"},{default:t(()=>[e(z,{label:"Expand Course",modelValue:c.mval,"onUpdate:modelValue":o[7]||(o[7]=l=>c.mval=l),"header-style":{fontSize:"16pt"}},{default:t(()=>[e(C,{flat:""},{default:t(()=>[e(f,{class:"text-center",style:{fontSize:"12pt"}},{default:t(()=>[a(" Course Title: "+p(this.reStore.courses[d].title)+" ",1),s("span",G,[a(" Course-Key: "+p(d)+" ",1),e(Q,{class:"ptr",name:"content_copy",onClick:l=>this.copyCK(d)},null,8,["onClick"]),s("div",null,[e(m,{icon:"delete",onClick:l=>this.deleteCourseCB(i.ck)},{default:t(()=>[e(_,null,{default:t(()=>[a("Delete Course")]),_:1})]),_:2},1032,["onClick"]),e(m,{icon:"post_add",onClick:l=>this.newAssignmentCB(i.ck)},{default:t(()=>[e(_,null,{default:t(()=>[a("New Assignment")]),_:1})]),_:2},1032,["onClick"]),e(m,{icon:"content_copy",onClick:l=>this.copyCK(d)},{default:t(()=>[e(_,null,{default:t(()=>[a("Copy this course-key to clipboard. Enroll "),J,a("in this course using this course-key from "),O,a("the Student Page.")]),_:1})]),_:2},1032,["onClick"])])])]),_:2},1024),s("div",W,[(n(!0),r(y,null,g(this.reStore.courses[d].assignments,(l,h)=>(n(),r("div",{key:l},[e(C,{bordered:"",flat:"",class:"ccard q-mx-sm q-my-md"},{default:t(()=>[e(N,{fit:u.cover,src:l.coverUrl,height:"100%",onClick:K=>this.selectAssignment(d,l.id)},{default:t(()=>[s("div",X,[s("div",Y,p(l.title.slice(0,18)),1),s("div",Z,[l.pages?(n(),r("span",ee,"Pages: "+p(l.pages.length),1)):(n(),r("span",te,"Pages: None"))])]),s("div",se,[e(Q,{onClick:[K=>this.takeAssignment(d,l.id),o[6]||(o[6]=P(()=>{},["stop","prevent"]))],name:"play_circle",class:"ptr z-top"},{default:t(()=>[e(_,null,{default:t(()=>[a("Take Assignment")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["fit","src","onClick"])]),_:2},1024),s("span",oe,p(h),1)]))),128))]),e(f,null,{default:t(()=>[s("table",le,[ne,s("tr",null,[re,(n(!0),r(y,null,g(this.reStore.courses[d].assignments,(l,h)=>(n(),r("th",{key:h},[s("span",null,p(l.title),1)]))),128))]),s("tr",null,[s("td",ae,p(this.reStore.userSnapshot.profile.name),1),(n(!0),r(y,null,g(this.reStore.courses[d].assignments,(l,h)=>(n(),r("td",{style:{"text-align":"center"},key:h},[l.scores&&l.scores[this.reStore.userSnapshot.profile.emailKey]?(n(),r("span",ie,p(l.scores[this.reStore.userSnapshot.profile.emailKey]),1)):(n(),r("span",de," -- "))]))),128))])])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"])]),_:2},1024)])]),_:2},1024))),128))])):x("",!0)]),_:1})}var Ee=A(U,[["render",ue]]);export{Ee as default};