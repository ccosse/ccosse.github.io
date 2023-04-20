import{Q as f}from"./QCardSection.80507a04.js";import{Q as B}from"./QInput.30104352.js";import{_ as K,r as S,o as n,f as v,w as t,g as e,aF as A,O as k,Q as m,k as s,j as r,aG as x,aq as a,at as y,aH as g,ar as p,i as Q,aI as P}from"./index.8cba108b.js";import{d as q,Q as E,C as b}from"./ClosePopup.84aa0d11.js";import{Q as C}from"./QCard.24cd4721.js";import{Q as _}from"./QTooltip.0a15b80a.js";import{Q as N}from"./QBanner.a581b95a.js";import{Q as $}from"./QImg.a8f49500.js";import{Q as I,a as T}from"./QExpansionItem.a5313ae6.js";import{Q as z}from"./QPage.b2d64fba.js";import{u as D}from"./re-store.93599b2f.js";import"./use-dark.89370604.js";import"./use-prevent-scroll.88cb2f6f.js";import"./scroll.c24c3931.js";import"./use-form.7ad84da5.js";import"./firebase.79bf92f9.js";import"./transform.aea72fbe.js";import"./index.2cf0d985.js";const U=D(),j={setup(){return{prompt:S(!1),courseKey:S(null),reStore:U,mval:S(!0)}},mounted(){this.reStore.unloadCurrent()},methods:{selectAssignment(u,o){console.log("StudentPage selectAssignment ",u,o)},takeAssignment(u,o){console.log("takeAssignment: ",u,o),this.reStore.loadAssignment(u,o),this.reStore.router.push("/student/assignment")},enrollCB(){console.log("StudentPage.enrollCB",this.courseKey);const u=this.reStore.enroll(this.courseKey);console.log(u)}}},F=s("div",{class:"text-h6"},"Enter a course-key",-1),H={class:"q-pa-md"},L={class:"text-weight-bolder text-center text-h4 q-pa-md"},M=s("br",null,null,-1),G={key:0},O={class:"q-pa-md"},R={class:"hidden"},J=s("br",null,null,-1),W=s("br",null,null,-1),X={class:"flex flex-row justify-center"},Y={class:"absolute-top text-center"},Z={class:"text-h6"},ee={class:"text-subtitle2"},te={key:0},se={key:1},oe={style:{"font-size":"22pt",width:"100%"},class:"text-center absolute-bottom"},le={class:"hidden"},ne={width:"100%"},re=s("tr",null,[s("th",{colSpan:"100"},"My Score Sheet")],-1),ae=s("th",null,"Student",-1),ie={style:{"text-align":"center"}},de={key:0},ue={key:1};function ce(u,o,pe,c,me,_e){return n(),v(z,{class:"q-gutter-md"},{default:t(()=>[e(E,{modelValue:c.prompt,"onUpdate:modelValue":o[3]||(o[3]=i=>c.prompt=i),persistent:""},{default:t(()=>[e(C,{style:{"min-width":"350px"}},{default:t(()=>[e(f,null,{default:t(()=>[F]),_:1}),e(f,{class:"q-pt-none"},{default:t(()=>[e(B,{dense:"",modelValue:c.courseKey,"onUpdate:modelValue":o[0]||(o[0]=i=>c.courseKey=i),autofocus:"",onKeyup:o[1]||(o[1]=A(i=>{c.prompt=!1,this.enrollCB()},["enter"]))},null,8,["modelValue"])]),_:1}),e(q,{align:"right",class:"text-white"},{default:t(()=>[k(e(m,{flat:"",label:"Cancel"},null,512),[[b]]),k(e(m,{flat:"",label:"Enroll",onClick:o[2]||(o[2]=i=>this.enrollCB())},null,512),[[b]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),s("div",H,[e(N,{class:"bg-positive text-white"},{default:t(()=>[s("div",L,[e(m,{class:"on-left",icon:"group_add",onClick:o[4]||(o[4]=i=>c.prompt=!0)},{default:t(()=>[e(_,null,{default:t(()=>[r("Have a course-key? Enter it here"),M,r("to join your course.")]),_:1})]),_:1}),r(" Student "),this.reStore.authenticated?(n(),v(m,{key:0,class:"on-right",onClick:o[5]||(o[5]=i=>this.reStore.router.push("/teacher")),icon:"switch_account"},{default:t(()=>[e(_,null,{default:t(()=>[r(" Switch to Teacher-role ")]),_:1})]),_:1})):x("",!0)])]),_:1})]),this.reStore.userSnapshot.taking?(n(),a("div",G,[(n(!0),a(y,null,g(this.reStore.userSnapshot.taking,(i,d,w)=>(n(),v(C,{flat:"",key:w,style:{opacity:"1.0"}},{default:t(()=>[s("div",O,[e(I,{bordered:"",class:"rounded-borders"},{default:t(()=>[e(T,{label:"Course",modelValue:c.mval,"onUpdate:modelValue":o[7]||(o[7]=l=>c.mval=l),"header-style":{fontSize:"16pt"}},{default:t(()=>[e(C,{flat:""},{default:t(()=>[e(f,{class:"text-center",style:{fontSize:"12pt"}},{default:t(()=>[r(" Title: "+p(this.reStore.courses[d].title)+" ",1),s("span",R,[r(" Course-Key: "+p(d)+" ",1),e(Q,{class:"ptr",name:"content_copy",onClick:l=>this.copyCK(d)},null,8,["onClick"]),s("div",null,[e(m,{icon:"delete",onClick:l=>this.deleteCourseCB(i.ck)},{default:t(()=>[e(_,null,{default:t(()=>[r("Delete Course")]),_:1})]),_:2},1032,["onClick"]),e(m,{icon:"post_add",onClick:l=>this.newAssignmentCB(i.ck)},{default:t(()=>[e(_,null,{default:t(()=>[r("New Assignment")]),_:1})]),_:2},1032,["onClick"]),e(m,{icon:"content_copy",onClick:l=>this.copyCK(d)},{default:t(()=>[e(_,null,{default:t(()=>[r("Copy this course-key to clipboard. Enroll "),J,r("in this course using this course-key from "),W,r("the Student Page.")]),_:1})]),_:2},1032,["onClick"])])])]),_:2},1024),s("div",X,[(n(!0),a(y,null,g(this.reStore.courses[d].assignments,(l,h)=>(n(),a("div",{key:l},[e(C,{bordered:"",flat:"",class:"ccard q-mx-sm q-my-md"},{default:t(()=>[e($,{fit:u.cover,src:l.coverUrl,height:"100%",onClick:V=>this.selectAssignment(d,l.id)},{default:t(()=>[s("div",Y,[s("div",Z,p(l.title.slice(0,18)),1),s("div",ee,[l.pages?(n(),a("span",te,"Pages: "+p(l.pages.length),1)):(n(),a("span",se,"Pages: None"))])]),s("div",oe,[e(Q,{onClick:[V=>this.takeAssignment(d,l.id),o[6]||(o[6]=P(()=>{},["stop","prevent"]))],name:"play_circle",class:"ptr z-top"},{default:t(()=>[e(_,null,{default:t(()=>[r("Take Assignment")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["fit","src","onClick"])]),_:2},1024),s("span",le,p(h),1)]))),128))]),e(f,null,{default:t(()=>[s("table",ne,[re,s("tr",null,[ae,(n(!0),a(y,null,g(this.reStore.courses[d].assignments,(l,h)=>(n(),a("th",{key:h},[s("span",null,p(l.title),1)]))),128))]),s("tr",null,[s("td",ie,p(this.reStore.userSnapshot.profile.name),1),(n(!0),a(y,null,g(this.reStore.courses[d].assignments,(l,h)=>(n(),a("td",{style:{"text-align":"center"},key:h},[l.scores&&l.scores[this.reStore.userSnapshot.profile.emailKey]?(n(),a("span",de,p(l.scores[this.reStore.userSnapshot.profile.emailKey]),1)):(n(),a("span",ue," -- "))]))),128))])])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"])]),_:2},1024)])]),_:2},1024))),128))])):x("",!0)]),_:1})}var Ee=K(j,[["render",ce]]);export{Ee as default};