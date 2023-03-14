import{a as k,Q as h,i as w,h as V,C}from"./ClosePopup.785cc761.js";import{Q as A}from"./QInput.d8d3ef9e.js";import{_ as B,r as v,o as l,c as f,w as o,a as s,aK as q,p as x,Q as _,e,af as c,aJ as Q,au as n,av as g,aL as S,ag as m,x as b}from"./index.693a4c46.js";import{Q as y}from"./QTooltip.78d22692.js";import{Q as P}from"./QPage.f8b287e5.js";import{u as T}from"./re-store.ecc7c19e.js";import"./use-dark.d16b76e3.js";import"./use-portal.b6e67c57.js";import"./use-key-composition.99e9025c.js";import"./position-engine.9f8888bb.js";import"./selection.3f215fbd.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";const E=T(),N={setup(){return{prompt:v(!1),courseKey:v(null),reStore:E}},methods:{takeAssignment(i,t){console.log("takeAssignment: ",i,t),this.reStore.takeAssignmentAsStudent(i,t)},dck(i){console.log("delta-course-key: ",this.courseKey)},enrollCB(){console.log("StudentPage.enrollCB",this.courseKey);const i=this.reStore.enroll(this.courseKey);console.log(i)}}},$=e("div",{class:"text-h6"},"Enter a course-key",-1),D={class:"flex-center q-mt-xl q-mb-xl row q-gutter-md"},H=e("div",{class:"text-h6"},"My Student Page",-1),I={key:0,class:"flex-center q-pa-md"},L=e("br",null,null,-1),U={width:"100%"},F=e("tr",null,[e("th",null,"\xA0"),e("th",{colSpan:"100"},"Assignments")],-1),J=e("th",null,"Student",-1),M={key:0},R=["onClick"],j={key:1};function z(i,t,G,u,O,W){return l(),f(P,{class:"q-gutter-md"},{default:o(()=>[s(V,{modelValue:u.prompt,"onUpdate:modelValue":t[3]||(t[3]=r=>u.prompt=r),persistent:""},{default:o(()=>[s(k,{style:{"min-width":"350px"}},{default:o(()=>[s(h,null,{default:o(()=>[$]),_:1}),s(h,{class:"q-pt-none"},{default:o(()=>[s(A,{dense:"",modelValue:u.courseKey,"onUpdate:modelValue":t[0]||(t[0]=r=>u.courseKey=r),autofocus:"",onKeyup:t[1]||(t[1]=q(r=>{u.prompt=!1,this.enrollCB()},["enter"])),onHide:this.dck},null,8,["modelValue","onHide"])]),_:1}),s(w,{align:"right",class:"text-white"},{default:o(()=>[x(s(_,{flat:"",label:"Cancel"},null,512),[[C]]),x(s(_,{flat:"",label:"Enroll",onClick:t[2]||(t[2]=r=>this.enrollCB())},null,512),[[C]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e("div",D,[H,e("div",null,[s(_,{icon:"group_add",onClick:t[4]||(t[4]=r=>u.prompt=!0)},{default:o(()=>[s(y,{class:"bg-info"},{default:o(()=>[c("Have a course-key?")]),_:1})]),_:1}),this.reStore.authenticated?(l(),f(_,{key:0,onClick:t[5]||(t[5]=r=>this.reStore.router.push("/teacher")),icon:"switch_account"},{default:o(()=>[s(y,null,{default:o(()=>[c(" Switch to Teacher role ")]),_:1})]),_:1})):Q("",!0)])]),this.reStore.userSnapshot.taking?(l(),n("div",I,[(l(!0),n(g,null,S(this.reStore.userSnapshot.taking,(r,d)=>(l(),f(k,{key:d,class:"course-card q-mt-md q-mb-md"},{default:o(()=>[s(h,null,{default:o(()=>[c(" Title: "+m(this.reStore.courses[d].title),1),L,c(" Key: "+m(d),1)]),_:2},1024),s(h,null,{default:o(()=>[e("table",U,[F,e("tr",null,[J,(l(!0),n(g,null,S(this.reStore.courses[d].assignments,(a,p)=>(l(),n("th",{key:p},[e("span",null,m(a.title),1),e("span",null,[s(b,{onClick:K=>this.takeAssignment(d,a.id),name:"play_circle",class:"ptr on-right"},null,8,["onClick"]),s(y,null,{default:o(()=>[c("Take Assignment")]),_:1})])]))),128))]),e("tr",null,[e("th",null,m(this.reStore.userSnapshot.profile.name),1),(l(!0),n(g,null,S(this.reStore.courses[d].assignments,(a,p)=>(l(),n("th",{key:p},[a.scores&&a.scores[this.reStore.userSnapshot.profile.emailKey]?(l(),n("span",M,[e("a",{onClick:K=>this.takeAssignment(p,a.id)},m(a.scores[this.reStore.userSnapshot.profile.emailKey]),9,R)])):(l(),n("span",j," -- "))]))),128))])])]),_:2},1024)]),_:2},1024))),128))])):Q("",!0)]),_:1})}var de=B(N,[["render",z]]);export{de as default};
