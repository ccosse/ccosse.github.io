import{Q as f}from"./QCardSection.f9d46400.js";import{Q as B}from"./QInput.1fa4f977.js";import{_ as K,r as S,o as n,f as v,w as t,g as e,aO as A,O as k,Q as m,k as s,j as r,aq as Q,an as i,ar as y,as as g,ap as p,i as x,at as P}from"./index.c828c6c3.js";import{d as q,Q as E,C as b}from"./ClosePopup.6dc627a5.js";import{Q as C}from"./QCard.5d6afa29.js";import{Q as _}from"./QTooltip.18034685.js";import{Q as N}from"./QBanner.54f4fd09.js";import{Q as $}from"./QImg.3e1e341c.js";import{Q as T}from"./QExpansionItem.dea6ae11.js";import{Q as z}from"./QList.9392daa0.js";import{Q as D}from"./QPage.5792ec7b.js";import{u as I}from"./re-store.cd501dae.js";import"./use-key-composition.d7dab9a1.js";import"./use-dark.98cfec29.js";import"./uid.42677368.js";import"./scroll.91926555.js";import"./use-form.3bbfefaa.js";import"./use-prevent-scroll.dc91eccf.js";import"./firebase.79bf92f9.js";import"./transform.aea72fbe.js";import"./index.2cf0d985.js";const U=I(),j={setup(){return{prompt:S(!1),courseKey:S(null),reStore:U,mval:S(!0)}},mounted(){this.reStore.unloadCurrent()},methods:{selectAssignment(u,o){console.log("StudentPage selectAssignment ",u,o)},takeAssignment(u,o){console.log("takeAssignment: ",u,o),this.reStore.loadAssignment(u,o),this.reStore.router.push("/student/assignment")},enrollCB(){console.log("StudentPage.enrollCB",this.courseKey);const u=this.reStore.enroll(this.courseKey);console.log(u)}}},L=s("div",{class:"text-h6"},"Enter a course-key",-1),M={class:"q-pa-md"},O={class:"text-weight-bolder text-center text-h4 q-pa-md"},F=s("br",null,null,-1),H={key:0},R={class:"q-pa-md"},G={class:"hidden"},J=s("br",null,null,-1),W=s("br",null,null,-1),X={class:"flex flex-row justify-center"},Y={class:"absolute-top text-center"},Z={class:"text-h6"},ee={class:"text-subtitle2"},te={key:0},se={key:1},oe={style:{"font-size":"22pt",width:"100%"},class:"text-center absolute-bottom"},le={class:"hidden"},ne={width:"100%"},re=s("tr",null,[s("th",{colSpan:"100"},"My Score Sheet")],-1),ie=s("th",null,"Student",-1),ae={style:{"text-align":"center"}},de={key:0},ue={key:1};function ce(u,o,pe,c,me,_e){return n(),v(D,{class:"q-gutter-md"},{default:t(()=>[e(E,{modelValue:c.prompt,"onUpdate:modelValue":o[3]||(o[3]=a=>c.prompt=a),persistent:""},{default:t(()=>[e(C,{style:{"min-width":"350px"}},{default:t(()=>[e(f,null,{default:t(()=>[L]),_:1}),e(f,{class:"q-pt-none"},{default:t(()=>[e(B,{dense:"",modelValue:c.courseKey,"onUpdate:modelValue":o[0]||(o[0]=a=>c.courseKey=a),autofocus:"",onKeyup:o[1]||(o[1]=A(a=>{c.prompt=!1,this.enrollCB()},["enter"]))},null,8,["modelValue"])]),_:1}),e(q,{align:"right",class:"text-white"},{default:t(()=>[k(e(m,{flat:"",label:"Cancel"},null,512),[[b]]),k(e(m,{flat:"",label:"Enroll",onClick:o[2]||(o[2]=a=>this.enrollCB())},null,512),[[b]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),s("div",M,[e(N,{class:"bg-positive text-white"},{default:t(()=>[s("div",O,[e(m,{class:"on-left",icon:"group_add",onClick:o[4]||(o[4]=a=>c.prompt=!0)},{default:t(()=>[e(_,null,{default:t(()=>[r("Have a course-key? Enter it here"),F,r("to join your course.")]),_:1})]),_:1}),r(" Student "),this.reStore.authenticated?(n(),v(m,{key:0,class:"on-right",onClick:o[5]||(o[5]=a=>this.reStore.router.push("/teacher")),icon:"switch_account"},{default:t(()=>[e(_,null,{default:t(()=>[r(" Switch to Teacher-role ")]),_:1})]),_:1})):Q("",!0)])]),_:1})]),this.reStore.userSnapshot.taking?(n(),i("div",H,[(n(!0),i(y,null,g(this.reStore.userSnapshot.taking,(a,d,w)=>(n(),v(C,{flat:"",key:w,style:{opacity:"1.0"}},{default:t(()=>[s("div",R,[e(z,{bordered:"",class:"rounded-borders"},{default:t(()=>[e(T,{label:"Course",modelValue:c.mval,"onUpdate:modelValue":o[7]||(o[7]=l=>c.mval=l),"header-style":{fontSize:"16pt"}},{default:t(()=>[e(C,{flat:""},{default:t(()=>[e(f,{class:"text-center",style:{fontSize:"12pt"}},{default:t(()=>[r(" Title: "+p(this.reStore.courses[d].title)+" ",1),s("span",G,[r(" Course-Key: "+p(d)+" ",1),e(x,{class:"ptr",name:"content_copy",onClick:l=>this.copyCK(d)},null,8,["onClick"]),s("div",null,[e(m,{icon:"delete",onClick:l=>this.deleteCourseCB(a.ck)},{default:t(()=>[e(_,null,{default:t(()=>[r("Delete Course")]),_:1})]),_:2},1032,["onClick"]),e(m,{icon:"post_add",onClick:l=>this.newAssignmentCB(a.ck)},{default:t(()=>[e(_,null,{default:t(()=>[r("New Assignment")]),_:1})]),_:2},1032,["onClick"]),e(m,{icon:"content_copy",onClick:l=>this.copyCK(d)},{default:t(()=>[e(_,null,{default:t(()=>[r("Copy this course-key to clipboard. Enroll "),J,r("in this course using this course-key from "),W,r("the Student Page.")]),_:1})]),_:2},1032,["onClick"])])])]),_:2},1024),s("div",X,[(n(!0),i(y,null,g(this.reStore.courses[d].assignments,(l,h)=>(n(),i("div",{key:l},[e(C,{bordered:"",flat:"",class:"ccard q-mx-sm q-my-md"},{default:t(()=>[e($,{fit:u.cover,src:l.coverUrl,height:"100%",onClick:V=>this.selectAssignment(d,l.id)},{default:t(()=>[s("div",Y,[s("div",Z,p(l.title.slice(0,18)),1),s("div",ee,[l.pages?(n(),i("span",te,"Pages: "+p(l.pages.length),1)):(n(),i("span",se,"Pages: None"))])]),s("div",oe,[e(x,{onClick:[V=>this.takeAssignment(d,l.id),o[6]||(o[6]=P(()=>{},["stop","prevent"]))],name:"play_circle",class:"ptr z-top"},{default:t(()=>[e(_,null,{default:t(()=>[r("Take Assignment")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["fit","src","onClick"])]),_:2},1024),s("span",le,p(h),1)]))),128))]),e(f,null,{default:t(()=>[s("table",ne,[re,s("tr",null,[ie,(n(!0),i(y,null,g(this.reStore.courses[d].assignments,(l,h)=>(n(),i("th",{key:h},[s("span",null,p(l.title),1)]))),128))]),s("tr",null,[s("td",ae,p(this.reStore.userSnapshot.profile.name),1),(n(!0),i(y,null,g(this.reStore.courses[d].assignments,(l,h)=>(n(),i("td",{style:{"text-align":"center"},key:h},[l.scores&&l.scores[this.reStore.userSnapshot.profile.emailKey]?(n(),i("span",de,p(l.scores[this.reStore.userSnapshot.profile.emailKey]),1)):(n(),i("span",ue," -- "))]))),128))])])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"])]),_:2},1024)])]),_:2},1024))),128))])):Q("",!0)]),_:1})}var Te=K(j,[["render",ce]]);export{Te as default};