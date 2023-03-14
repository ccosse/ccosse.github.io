import{Q as y}from"./use-form.88d728d6.js";import{Q as A}from"./QInput.67c384a1.js";import{_ as B,r as C,o as n,f as v,w as t,g as e,aN as P,O as k,Q as p,k as s,j as r,as as x,an as a,ap as g,aq as S,ar as _,i as Q,aO as q}from"./index.f130aff0.js";import{d as E,Q as N,C as b}from"./ClosePopup.0e7f024e.js";import{Q as f}from"./QCard.13815f11.js";import{Q as m}from"./QTooltip.fd27b739.js";import{b as w,Q as $}from"./QList.6dd39e58.js";import{Q as z}from"./QImg.ab984abc.js";import{Q as D}from"./QPage.2ad9d176.js";import{u as T}from"./re-store.f71f11e9.js";import"./use-key-composition.0ddf752b.js";import"./use-dark.b7510c6e.js";import"./use-prevent-scroll.b15e3ff1.js";import"./scroll.67f362b7.js";import"./firebase.0eb8f378.js";import"./transform.aea72fbe.js";import"./index.2cf0d985.js";const I=T(),U={setup(){return{prompt:C(!1),courseKey:C(null),reStore:I,mval:C(!0)}},mounted(){this.reStore.unloadCurrent()},methods:{selectAssignment(u,o){console.log("StudentPage selectAssignment ",u,o)},takeAssignment(u,o){console.log("takeAssignment: ",u,o),this.reStore.loadAssignment(u,o),this.reStore.router.push("/student/assignment")},enrollCB(){console.log("StudentPage.enrollCB",this.courseKey);const u=this.reStore.enroll(this.courseKey);console.log(u)}}},j=s("div",{class:"text-h6"},"Enter a course-key",-1),L={class:"q-pa-md"},M={class:"flex flex-center"},O=s("br",null,null,-1),F={key:0},H={class:"q-pa-md"},R={class:"hidden"},G=s("br",null,null,-1),J=s("br",null,null,-1),W={class:"flex flex-row justify-center"},X={class:"absolute-top text-center"},Y={class:"text-h6"},Z={class:"text-subtitle2"},ee={key:0},te={key:1},se={style:{"font-size":"22pt",width:"100%"},class:"text-center absolute-bottom"},oe={class:"hidden"},le={width:"100%"},ne=s("tr",null,[s("th",{colSpan:"100"},"My Score Sheet")],-1),re=s("th",null,"Student",-1),ae={style:{"text-align":"center"}},ie={key:0},de={key:1};function ue(u,o,ce,c,pe,_e){return n(),v(D,{class:"q-gutter-md"},{default:t(()=>[e(N,{modelValue:c.prompt,"onUpdate:modelValue":o[3]||(o[3]=i=>c.prompt=i),persistent:""},{default:t(()=>[e(f,{style:{"min-width":"350px"}},{default:t(()=>[e(y,null,{default:t(()=>[j]),_:1}),e(y,{class:"q-pt-none"},{default:t(()=>[e(A,{dense:"",modelValue:c.courseKey,"onUpdate:modelValue":o[0]||(o[0]=i=>c.courseKey=i),autofocus:"",onKeyup:o[1]||(o[1]=P(i=>{c.prompt=!1,this.enrollCB()},["enter"]))},null,8,["modelValue"])]),_:1}),e(E,{align:"right",class:"text-white"},{default:t(()=>[k(e(p,{flat:"",label:"Cancel"},null,512),[[b]]),k(e(p,{flat:"",label:"Enroll",onClick:o[2]||(o[2]=i=>this.enrollCB())},null,512),[[b]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),s("div",L,[e(w,{bordered:"",class:"rounded-borders"},{default:t(()=>[e(f,{flat:""},{default:t(()=>[s("div",M,[s("div",null,[e(p,{class:"on-left",icon:"group_add",onClick:o[4]||(o[4]=i=>c.prompt=!0)},{default:t(()=>[e(m,null,{default:t(()=>[r("Have a course-key? Enter it here"),O,r("to join your course.")]),_:1})]),_:1}),e(p,{flat:"","no-caps":"",style:{fontSize:"18pt"}},{default:t(()=>[r("Student Dashboard")]),_:1}),this.reStore.authenticated?(n(),v(p,{key:0,class:"on-right",onClick:o[5]||(o[5]=i=>this.reStore.router.push("/teacher")),icon:"switch_account"},{default:t(()=>[e(m,null,{default:t(()=>[r(" Switch to Teacher role ")]),_:1})]),_:1})):x("",!0)])])]),_:1})]),_:1})]),this.reStore.userSnapshot.taking?(n(),a("div",F,[(n(!0),a(g,null,S(this.reStore.userSnapshot.taking,(i,d,V)=>(n(),v(f,{flat:"",key:V,style:{opacity:"1.0"}},{default:t(()=>[s("div",H,[e(w,{bordered:"",class:"rounded-borders"},{default:t(()=>[e($,{label:"Course",modelValue:c.mval,"onUpdate:modelValue":o[7]||(o[7]=l=>c.mval=l),"header-style":{fontSize:"16pt"}},{default:t(()=>[e(f,{flat:""},{default:t(()=>[e(y,{class:"text-center",style:{fontSize:"12pt"}},{default:t(()=>[r(" Title: "+_(this.reStore.courses[d].title)+" ",1),s("span",R,[r(" Course-Key: "+_(d)+" ",1),e(Q,{class:"ptr",name:"content_copy",onClick:l=>this.copyCK(d)},null,8,["onClick"]),s("div",null,[e(p,{icon:"delete",onClick:l=>this.deleteCourseCB(i.ck)},{default:t(()=>[e(m,null,{default:t(()=>[r("Delete Course")]),_:1})]),_:2},1032,["onClick"]),e(p,{icon:"post_add",onClick:l=>this.newAssignmentCB(i.ck)},{default:t(()=>[e(m,null,{default:t(()=>[r("New Assignment")]),_:1})]),_:2},1032,["onClick"]),e(p,{icon:"content_copy",onClick:l=>this.copyCK(d)},{default:t(()=>[e(m,null,{default:t(()=>[r("Copy this course-key to clipboard. Enroll "),G,r("in this course using this course-key from "),J,r("the Student Page.")]),_:1})]),_:2},1032,["onClick"])])])]),_:2},1024),s("div",W,[(n(!0),a(g,null,S(this.reStore.courses[d].assignments,(l,h)=>(n(),a("div",{key:l},[e(f,{bordered:"",flat:"",class:"ccard q-mx-sm q-my-md"},{default:t(()=>[e(z,{fit:u.cover,src:l.coverUrl,height:"100%",onClick:K=>this.selectAssignment(d,l.id)},{default:t(()=>[s("div",X,[s("div",Y,_(l.title.slice(0,18)),1),s("div",Z,[l.pages?(n(),a("span",ee,"Pages: "+_(l.pages.length),1)):(n(),a("span",te,"Pages: None"))])]),s("div",se,[e(Q,{onClick:[K=>this.takeAssignment(d,l.id),o[6]||(o[6]=q(()=>{},["stop","prevent"]))],name:"play_circle",class:"ptr z-top"},{default:t(()=>[e(m,null,{default:t(()=>[r("Take Assignment")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["fit","src","onClick"])]),_:2},1024),s("span",oe,_(h),1)]))),128))]),e(y,null,{default:t(()=>[s("table",le,[ne,s("tr",null,[re,(n(!0),a(g,null,S(this.reStore.courses[d].assignments,(l,h)=>(n(),a("th",{key:h},[s("span",null,_(l.title),1)]))),128))]),s("tr",null,[s("td",ae,_(this.reStore.userSnapshot.profile.name),1),(n(!0),a(g,null,S(this.reStore.courses[d].assignments,(l,h)=>(n(),a("td",{style:{"text-align":"center"},key:h},[l.scores&&l.scores[this.reStore.userSnapshot.profile.emailKey]?(n(),a("span",ie,_(l.scores[this.reStore.userSnapshot.profile.emailKey]),1)):(n(),a("span",de," -- "))]))),128))])])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"])]),_:2},1024)])]),_:2},1024))),128))])):x("",!0)]),_:1})}var Pe=B(U,[["render",ue]]);export{Pe as default};
