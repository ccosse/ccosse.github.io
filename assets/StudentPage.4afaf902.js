import{Q as y}from"./use-form.0a3d7bea.js";import{Q as A}from"./QInput.49598023.js";import{_ as B,r as C,o as n,c as v,w as t,a as e,aM as P,K as k,Q as p,e as s,ag as r,al as Q,ah as a,ai as g,aj as S,ak as m,a1 as x,aN as E}from"./index.4f44843a.js";import{d as N,Q as q,C as b}from"./ClosePopup.87cc016a.js";import{Q as f}from"./QCard.5b017063.js";import{Q as _}from"./QTooltip.8efd83ab.js";import{Q as w}from"./QList.c9613f86.js";import{Q as $}from"./QImg.4e60df0b.js";import{Q as z}from"./QExpansionItem.ad0151f4.js";import{Q as D}from"./QPage.26a17fe3.js";import{u as T}from"./re-store.8a49872d.js";import"./use-key-composition.151ea193.js";import"./use-dark.9d9919a4.js";import"./use-prevent-scroll.5ea2bc82.js";import"./scroll.dd361da0.js";import"./use-portal.8ee34304.js";import"./selection.6d8b05cd.js";import"./firebase.0eb8f378.js";import"./transform.aea72fbe.js";import"./index.2cf0d985.js";const I=T(),U={setup(){return{prompt:C(!1),courseKey:C(null),reStore:I,mval:C(!0)}},mounted(){this.reStore.unloadCurrent()},methods:{selectAssignment(u,o){console.log("StudentPage selectAssignment ",u,o)},takeAssignment(u,o){console.log("takeAssignment: ",u,o),this.reStore.loadAssignment(u,o),this.reStore.router.push("/student/assignment")},enrollCB(){console.log("StudentPage.enrollCB",this.courseKey);const u=this.reStore.enroll(this.courseKey);console.log(u)}}},j=s("div",{class:"text-h6"},"Enter a course-key",-1),M={class:"q-pa-md"},L={class:"flex flex-center"},F=s("br",null,null,-1),H={key:0},R={class:"q-pa-md"},G={class:"hidden"},J=s("br",null,null,-1),O=s("br",null,null,-1),W={class:"flex flex-row justify-center"},X={class:"absolute-top text-center"},Y={class:"text-h6"},Z={class:"text-subtitle2"},ee={key:0},te={key:1},se={style:{"font-size":"22pt",width:"100%"},class:"text-center absolute-bottom"},oe={class:"hidden"},le={width:"100%"},ne=s("tr",null,[s("th",{colSpan:"100"},"My Score Sheet")],-1),re=s("th",null,"Student",-1),ae={style:{"text-align":"center"}},ie={key:0},de={key:1};function ue(u,o,ce,c,pe,me){return n(),v(D,{class:"q-gutter-md"},{default:t(()=>[e(q,{modelValue:c.prompt,"onUpdate:modelValue":o[3]||(o[3]=i=>c.prompt=i),persistent:""},{default:t(()=>[e(f,{style:{"min-width":"350px"}},{default:t(()=>[e(y,null,{default:t(()=>[j]),_:1}),e(y,{class:"q-pt-none"},{default:t(()=>[e(A,{dense:"",modelValue:c.courseKey,"onUpdate:modelValue":o[0]||(o[0]=i=>c.courseKey=i),autofocus:"",onKeyup:o[1]||(o[1]=P(i=>{c.prompt=!1,this.enrollCB()},["enter"]))},null,8,["modelValue"])]),_:1}),e(N,{align:"right",class:"text-white"},{default:t(()=>[k(e(p,{flat:"",label:"Cancel"},null,512),[[b]]),k(e(p,{flat:"",label:"Enroll",onClick:o[2]||(o[2]=i=>this.enrollCB())},null,512),[[b]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),s("div",M,[e(w,{bordered:"",class:"rounded-borders"},{default:t(()=>[e(f,{flat:""},{default:t(()=>[s("div",L,[s("div",null,[e(p,{class:"on-left",icon:"group_add",onClick:o[4]||(o[4]=i=>c.prompt=!0)},{default:t(()=>[e(_,null,{default:t(()=>[r("Have a course-key? Enter it here"),F,r("to join your course.")]),_:1})]),_:1}),e(p,{flat:"","no-caps":"",style:{fontSize:"18pt"}},{default:t(()=>[r("Student Dashboard")]),_:1}),this.reStore.authenticated?(n(),v(p,{key:0,class:"on-right",onClick:o[5]||(o[5]=i=>this.reStore.router.push("/teacher")),icon:"switch_account"},{default:t(()=>[e(_,null,{default:t(()=>[r(" Switch to Teacher role ")]),_:1})]),_:1})):Q("",!0)])])]),_:1})]),_:1})]),this.reStore.userSnapshot.taking?(n(),a("div",H,[(n(!0),a(g,null,S(this.reStore.userSnapshot.taking,(i,d,K)=>(n(),v(f,{flat:"",key:K,style:{opacity:"1.0"}},{default:t(()=>[s("div",R,[e(w,{bordered:"",class:"rounded-borders"},{default:t(()=>[e(z,{label:"Course",modelValue:c.mval,"onUpdate:modelValue":o[7]||(o[7]=l=>c.mval=l),"header-style":{fontSize:"16pt"}},{default:t(()=>[e(f,{flat:""},{default:t(()=>[e(y,{class:"text-center",style:{fontSize:"12pt"}},{default:t(()=>[r(" Title: "+m(this.reStore.courses[d].title)+" ",1),s("span",G,[r(" Course-Key: "+m(d)+" ",1),e(x,{class:"ptr",name:"content_copy",onClick:l=>this.copyCK(d)},null,8,["onClick"]),s("div",null,[e(p,{icon:"delete",onClick:l=>this.deleteCourseCB(i.ck)},{default:t(()=>[e(_,null,{default:t(()=>[r("Delete Course")]),_:1})]),_:2},1032,["onClick"]),e(p,{icon:"post_add",onClick:l=>this.newAssignmentCB(i.ck)},{default:t(()=>[e(_,null,{default:t(()=>[r("New Assignment")]),_:1})]),_:2},1032,["onClick"]),e(p,{icon:"content_copy",onClick:l=>this.copyCK(d)},{default:t(()=>[e(_,null,{default:t(()=>[r("Copy this course-key to clipboard. Enroll "),J,r("in this course using this course-key from "),O,r("the Student Page.")]),_:1})]),_:2},1032,["onClick"])])])]),_:2},1024),s("div",W,[(n(!0),a(g,null,S(this.reStore.courses[d].assignments,(l,h)=>(n(),a("div",{key:l},[e(f,{bordered:"",flat:"",class:"ccard q-mx-sm q-my-md"},{default:t(()=>[e($,{fit:u.cover,src:l.coverUrl,height:"100%",onClick:V=>this.selectAssignment(d,l.id)},{default:t(()=>[s("div",X,[s("div",Y,m(l.title.slice(0,18)),1),s("div",Z,[l.pages?(n(),a("span",ee,"Pages: "+m(l.pages.length),1)):(n(),a("span",te,"Pages: None"))])]),s("div",se,[e(x,{onClick:[V=>this.takeAssignment(d,l.id),o[6]||(o[6]=E(()=>{},["stop","prevent"]))],name:"play_circle",class:"ptr z-top"},{default:t(()=>[e(_,null,{default:t(()=>[r("Take Assignment")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["fit","src","onClick"])]),_:2},1024),s("span",oe,m(h),1)]))),128))]),e(y,null,{default:t(()=>[s("table",le,[ne,s("tr",null,[re,(n(!0),a(g,null,S(this.reStore.courses[d].assignments,(l,h)=>(n(),a("th",{key:h},[s("span",null,m(l.title),1)]))),128))]),s("tr",null,[s("td",ae,m(this.reStore.userSnapshot.profile.name),1),(n(!0),a(g,null,S(this.reStore.courses[d].assignments,(l,h)=>(n(),a("td",{style:{"text-align":"center"},key:h},[l.scores&&l.scores[this.reStore.userSnapshot.profile.emailKey]?(n(),a("span",ie,m(l.scores[this.reStore.userSnapshot.profile.emailKey]),1)):(n(),a("span",de," -- "))]))),128))])])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"])]),_:2},1024)])]),_:2},1024))),128))])):Q("",!0)]),_:1})}var qe=B(U,[["render",ue]]);export{qe as default};
