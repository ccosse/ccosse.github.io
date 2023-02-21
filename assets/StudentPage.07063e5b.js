import{Q as f}from"./use-form.afe28f44.js";import{Q as V}from"./QInput.5282582c.js";import{_ as A,r as C,o as n,c as v,w as t,a as e,aL as B,K as k,Q as p,e as s,af as r,ak as x,ag as a,ah as y,ai as g,aj as m,a1 as Q,aM as P}from"./index.0e64f230.js";import{d as E,Q as q,C as b}from"./ClosePopup.90d498a6.js";import{Q as S}from"./QCard.6a86a38e.js";import{Q as _}from"./QTooltip.0a9cd0ea.js";import{Q as N}from"./QImg.905b6be7.js";import{a as $,Q as z}from"./QList.7a7c9afe.js";import{Q as D}from"./QPage.1c8cc5ba.js";import{u as T}from"./re-store.ead18405.js";import"./use-key-composition.324363be.js";import"./use-dark.cbbcd9f3.js";import"./use-prevent-scroll.e5616504.js";import"./scroll.69de0f44.js";import"./use-portal.37024928.js";import"./selection.34524589.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";const I=T(),U={setup(){return{prompt:C(!1),courseKey:C(null),reStore:I,mval:C(!0)}},mounted(){this.reStore.unloadCurrent()},methods:{selectAssignment(d,o){console.log("StudentPage selectAssignment ",d,o)},takeAssignment(d,o){console.log("takeAssignment: ",d,o),this.reStore.loadAssignment(d,o),this.reStore.router.push("/student/assignment")},enrollCB(){console.log("StudentPage.enrollCB",this.courseKey);const d=this.reStore.enroll(this.courseKey);console.log(d)}}},j=s("div",{class:"text-h6"},"Enter a course-key",-1),L={class:"flex flex-center row q-gutter-md"},M=s("br",null,null,-1),F={key:0},H={class:"q-pa-md"},R={class:"hidden"},G=s("br",null,null,-1),J=s("br",null,null,-1),O={class:"flex flex-row justify-center"},W={class:"absolute-top text-center"},X={class:"text-h6"},Y={class:"text-subtitle2"},Z={key:0},ee={key:1},te={style:{"font-size":"22pt",width:"100%"},class:"text-center absolute-bottom"},se={class:"hidden"},oe={width:"100%"},le=s("tr",null,[s("th",{colSpan:"100"},"My Score Sheet")],-1),ne=s("th",null,"Student",-1),re={style:{"text-align":"center"}},ae={key:0},ie={key:1};function ue(d,o,de,c,ce,pe){return n(),v(D,{class:"q-gutter-md"},{default:t(()=>[e(q,{modelValue:c.prompt,"onUpdate:modelValue":o[3]||(o[3]=i=>c.prompt=i),persistent:""},{default:t(()=>[e(S,{style:{"min-width":"350px"}},{default:t(()=>[e(f,null,{default:t(()=>[j]),_:1}),e(f,{class:"q-pt-none"},{default:t(()=>[e(V,{dense:"",modelValue:c.courseKey,"onUpdate:modelValue":o[0]||(o[0]=i=>c.courseKey=i),autofocus:"",onKeyup:o[1]||(o[1]=B(i=>{c.prompt=!1,this.enrollCB()},["enter"]))},null,8,["modelValue"])]),_:1}),e(E,{align:"right",class:"text-white"},{default:t(()=>[k(e(p,{flat:"",label:"Cancel"},null,512),[[b]]),k(e(p,{flat:"",label:"Enroll",onClick:o[2]||(o[2]=i=>this.enrollCB())},null,512),[[b]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),s("div",L,[s("div",null,[e(p,{class:"on-left",icon:"group_add",onClick:o[4]||(o[4]=i=>c.prompt=!0)},{default:t(()=>[e(_,null,{default:t(()=>[r("Have a course-key? Enter it here"),M,r("to join your course.")]),_:1})]),_:1}),e(p,{flat:"","no-caps":"",style:{fontSize:"18pt"}},{default:t(()=>[r("Student Dashboard")]),_:1}),this.reStore.authenticated?(n(),v(p,{key:0,class:"on-right",onClick:o[5]||(o[5]=i=>this.reStore.router.push("/teacher")),icon:"switch_account"},{default:t(()=>[e(_,null,{default:t(()=>[r(" Switch to Teacher role ")]),_:1})]),_:1})):x("",!0)])]),this.reStore.userSnapshot.taking?(n(),a("div",F,[(n(!0),a(y,null,g(this.reStore.userSnapshot.teaching,(i,u,w)=>(n(),v(S,{flat:"",key:w,style:{opacity:"1.0"}},{default:t(()=>[s("div",H,[e($,{bordered:"",class:"rounded-borders"},{default:t(()=>[e(z,{label:"Course",modelValue:c.mval,"onUpdate:modelValue":o[7]||(o[7]=l=>c.mval=l),"header-style":{fontSize:"16pt"}},{default:t(()=>[e(S,{flat:""},{default:t(()=>[e(f,{class:"text-center",style:{fontSize:"12pt"}},{default:t(()=>[r(" Title: "+m(this.reStore.courses[u].title)+" ",1),s("span",R,[r(" Course-Key: "+m(u)+" ",1),e(Q,{class:"ptr",name:"content_copy",onClick:l=>this.copyCK(u)},null,8,["onClick"]),s("div",null,[e(p,{icon:"delete",onClick:l=>this.deleteCourseCB(i.ck)},{default:t(()=>[e(_,null,{default:t(()=>[r("Delete Course")]),_:1})]),_:2},1032,["onClick"]),e(p,{icon:"post_add",onClick:l=>this.newAssignmentCB(i.ck)},{default:t(()=>[e(_,null,{default:t(()=>[r("New Assignment")]),_:1})]),_:2},1032,["onClick"]),e(p,{icon:"content_copy",onClick:l=>this.copyCK(u)},{default:t(()=>[e(_,null,{default:t(()=>[r("Copy this course-key to clipboard. Enroll "),G,r("in this course using this course-key from "),J,r("the Student Page.")]),_:1})]),_:2},1032,["onClick"])])])]),_:2},1024),s("div",O,[(n(!0),a(y,null,g(this.reStore.courses[u].assignments,(l,h)=>(n(),a("div",{key:l},[e(S,{bordered:"",flat:"",class:"ccard q-mx-sm q-my-md"},{default:t(()=>[e(N,{fit:d.cover,src:l.coverUrl,height:"100%",onClick:K=>this.selectAssignment(u,l.id)},{default:t(()=>[s("div",W,[s("div",X,m(l.title.slice(0,18)),1),s("div",Y,[l.pages?(n(),a("span",Z,"Pages: "+m(l.pages.length),1)):(n(),a("span",ee,"Pages: None"))])]),s("div",te,[e(Q,{onClick:[K=>this.takeAssignment(u,l.id),o[6]||(o[6]=P(()=>{},["stop","prevent"]))],name:"play_circle",class:"ptr z-top"},{default:t(()=>[e(_,null,{default:t(()=>[r("Take Assignment")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["fit","src","onClick"])]),_:2},1024),s("span",se,m(h),1)]))),128))]),e(f,null,{default:t(()=>[s("table",oe,[le,s("tr",null,[ne,(n(!0),a(y,null,g(this.reStore.courses[u].assignments,(l,h)=>(n(),a("th",{key:h},[s("span",null,m(l.title),1)]))),128))]),s("tr",null,[s("td",re,m(this.reStore.userSnapshot.profile.name),1),(n(!0),a(y,null,g(this.reStore.courses[u].assignments,(l,h)=>(n(),a("td",{style:{"text-align":"center"},key:h},[l.scores&&l.scores[this.reStore.userSnapshot.profile.emailKey]?(n(),a("span",ae,m(l.scores[this.reStore.userSnapshot.profile.emailKey]),1)):(n(),a("span",ie," -- "))]))),128))])])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"])]),_:2},1024)])]),_:2},1024))),128))])):x("",!0)]),_:1})}var Pe=A(U,[["render",ue]]);export{Pe as default};