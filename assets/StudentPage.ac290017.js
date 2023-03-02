import{Q as y}from"./QCardSection.c8861a2f.js";import{Q as A}from"./QInput.07e7b0f7.js";import{_ as B,r as C,o as n,f as v,w as t,g as e,aF as P,O as k,Q as p,k as s,j as r,aG as x,aq as a,at as g,aH as S,ar as _,i as Q,aI as q}from"./index.68e41f27.js";import{d as E,Q as N,C as b}from"./ClosePopup.fde4cf5d.js";import{Q as h}from"./QCard.07deebd8.js";import{Q as m}from"./QTooltip.fcc777c8.js";import{b as w,Q as $}from"./QList.af6844b7.js";import{Q as z}from"./QImg.0e00d62b.js";import{Q as I}from"./QPage.9c246829.js";import{u as T}from"./re-store.f5ffde0d.js";import"./use-dark.c931a06d.js";import"./use-prevent-scroll.e10f56a0.js";import"./scroll.aa1add39.js";import"./use-form.0f96e925.js";import"./firebase.79bf92f9.js";import"./transform.aea72fbe.js";import"./index.2cf0d985.js";const D=T(),U={setup(){return{prompt:C(!1),courseKey:C(null),reStore:D,mval:C(!0)}},mounted(){this.reStore.unloadCurrent()},methods:{selectAssignment(u,o){console.log("StudentPage selectAssignment ",u,o)},takeAssignment(u,o){console.log("takeAssignment: ",u,o),this.reStore.loadAssignment(u,o),this.reStore.router.push("/student/assignment")},enrollCB(){console.log("StudentPage.enrollCB",this.courseKey);const u=this.reStore.enroll(this.courseKey);console.log(u)}}},j=s("div",{class:"text-h6"},"Enter a course-key",-1),F={class:"q-pa-md"},H={class:"flex flex-center"},L=s("br",null,null,-1),M={key:0},G={class:"q-pa-md"},O={class:"hidden"},R=s("br",null,null,-1),J=s("br",null,null,-1),W={class:"flex flex-row justify-center"},X={class:"absolute-top text-center"},Y={class:"text-h6"},Z={class:"text-subtitle2"},ee={key:0},te={key:1},se={style:{"font-size":"22pt",width:"100%"},class:"text-center absolute-bottom"},oe={class:"hidden"},le={width:"100%"},ne=s("tr",null,[s("th",{colSpan:"100"},"My Score Sheet")],-1),re=s("th",null,"Student",-1),ae={style:{"text-align":"center"}},ie={key:0},de={key:1};function ue(u,o,ce,c,pe,_e){return n(),v(I,{class:"q-gutter-md"},{default:t(()=>[e(N,{modelValue:c.prompt,"onUpdate:modelValue":o[3]||(o[3]=i=>c.prompt=i),persistent:""},{default:t(()=>[e(h,{style:{"min-width":"350px"}},{default:t(()=>[e(y,null,{default:t(()=>[j]),_:1}),e(y,{class:"q-pt-none"},{default:t(()=>[e(A,{dense:"",modelValue:c.courseKey,"onUpdate:modelValue":o[0]||(o[0]=i=>c.courseKey=i),autofocus:"",onKeyup:o[1]||(o[1]=P(i=>{c.prompt=!1,this.enrollCB()},["enter"]))},null,8,["modelValue"])]),_:1}),e(E,{align:"right",class:"text-white"},{default:t(()=>[k(e(p,{flat:"",label:"Cancel"},null,512),[[b]]),k(e(p,{flat:"",label:"Enroll",onClick:o[2]||(o[2]=i=>this.enrollCB())},null,512),[[b]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),s("div",F,[e(w,{bordered:"",class:"rounded-borders"},{default:t(()=>[e(h,{flat:""},{default:t(()=>[s("div",H,[s("div",null,[e(p,{class:"on-left",icon:"group_add",onClick:o[4]||(o[4]=i=>c.prompt=!0)},{default:t(()=>[e(m,null,{default:t(()=>[r("Have a course-key? Enter it here"),L,r("to join your course.")]),_:1})]),_:1}),e(p,{flat:"","no-caps":"",style:{fontSize:"18pt"}},{default:t(()=>[r("Student")]),_:1}),this.reStore.authenticated?(n(),v(p,{key:0,class:"on-right",onClick:o[5]||(o[5]=i=>this.reStore.router.push("/teacher")),icon:"switch_account"},{default:t(()=>[e(m,null,{default:t(()=>[r(" Switch to Teacher role ")]),_:1})]),_:1})):x("",!0)])])]),_:1})]),_:1})]),this.reStore.userSnapshot.taking?(n(),a("div",M,[(n(!0),a(g,null,S(this.reStore.userSnapshot.taking,(i,d,V)=>(n(),v(h,{flat:"",key:V,style:{opacity:"1.0"}},{default:t(()=>[s("div",G,[e(w,{bordered:"",class:"rounded-borders"},{default:t(()=>[e($,{label:"Course",modelValue:c.mval,"onUpdate:modelValue":o[7]||(o[7]=l=>c.mval=l),"header-style":{fontSize:"16pt"}},{default:t(()=>[e(h,{flat:""},{default:t(()=>[e(y,{class:"text-center",style:{fontSize:"12pt"}},{default:t(()=>[r(" Title: "+_(this.reStore.courses[d].title)+" ",1),s("span",O,[r(" Course-Key: "+_(d)+" ",1),e(Q,{class:"ptr",name:"content_copy",onClick:l=>this.copyCK(d)},null,8,["onClick"]),s("div",null,[e(p,{icon:"delete",onClick:l=>this.deleteCourseCB(i.ck)},{default:t(()=>[e(m,null,{default:t(()=>[r("Delete Course")]),_:1})]),_:2},1032,["onClick"]),e(p,{icon:"post_add",onClick:l=>this.newAssignmentCB(i.ck)},{default:t(()=>[e(m,null,{default:t(()=>[r("New Assignment")]),_:1})]),_:2},1032,["onClick"]),e(p,{icon:"content_copy",onClick:l=>this.copyCK(d)},{default:t(()=>[e(m,null,{default:t(()=>[r("Copy this course-key to clipboard. Enroll "),R,r("in this course using this course-key from "),J,r("the Student Page.")]),_:1})]),_:2},1032,["onClick"])])])]),_:2},1024),s("div",W,[(n(!0),a(g,null,S(this.reStore.courses[d].assignments,(l,f)=>(n(),a("div",{key:l},[e(h,{bordered:"",flat:"",class:"ccard q-mx-sm q-my-md"},{default:t(()=>[e(z,{fit:u.cover,src:l.coverUrl,height:"100%",onClick:K=>this.selectAssignment(d,l.id)},{default:t(()=>[s("div",X,[s("div",Y,_(l.title.slice(0,18)),1),s("div",Z,[l.pages?(n(),a("span",ee,"Pages: "+_(l.pages.length),1)):(n(),a("span",te,"Pages: None"))])]),s("div",se,[e(Q,{onClick:[K=>this.takeAssignment(d,l.id),o[6]||(o[6]=q(()=>{},["stop","prevent"]))],name:"play_circle",class:"ptr z-top"},{default:t(()=>[e(m,null,{default:t(()=>[r("Take Assignment")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["fit","src","onClick"])]),_:2},1024),s("span",oe,_(f),1)]))),128))]),e(y,null,{default:t(()=>[s("table",le,[ne,s("tr",null,[re,(n(!0),a(g,null,S(this.reStore.courses[d].assignments,(l,f)=>(n(),a("th",{key:f},[s("span",null,_(l.title),1)]))),128))]),s("tr",null,[s("td",ae,_(this.reStore.userSnapshot.profile.name),1),(n(!0),a(g,null,S(this.reStore.courses[d].assignments,(l,f)=>(n(),a("td",{style:{"text-align":"center"},key:f},[l.scores&&l.scores[this.reStore.userSnapshot.profile.emailKey]?(n(),a("span",ie,_(l.scores[this.reStore.userSnapshot.profile.emailKey]),1)):(n(),a("span",de," -- "))]))),128))])])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"])]),_:2},1024)])]),_:2},1024))),128))])):x("",!0)]),_:1})}var Pe=B(U,[["render",ue]]);export{Pe as default};
