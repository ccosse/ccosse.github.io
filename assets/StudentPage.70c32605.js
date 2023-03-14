import{Q as k,a as h}from"./use-portal.d6649e5a.js";import{Q as w}from"./QInput.457055fa.js";import{_ as V,r as C,o as r,c as f,w as o,a as s,aL as B,K as v,Q as _,e,af as c,ak as Q,ag as n,ah as g,ai as S,aj as m,a1 as q}from"./index.0a1c6404.js";import{d as A,Q as b,C as x}from"./ClosePopup.faf0db1e.js";import{Q as y}from"./QTooltip.8e0578aa.js";import{Q as P}from"./QPage.ea46e215.js";import{u as T}from"./re-store.1e839653.js";import"./use-dark.b240003d.js";import"./use-key-composition.34337781.js";import"./selection.6055faa9.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";const E=T(),N={setup(){return{prompt:C(!1),courseKey:C(null),reStore:E}},mounted(){this.reStore.unloadCurrent()},methods:{takeAssignment(d,t){console.log("takeAssignment: ",d,t),this.reStore.loadAssignment(d,t),this.reStore.router.push("/student/assignment")},enrollCB(){console.log("StudentPage.enrollCB",this.courseKey);const d=this.reStore.enroll(this.courseKey);console.log(d)}}},$=e("div",{class:"text-h6"},"Enter a course-key",-1),D={class:"flex-center q-mt-xl q-mb-xl row q-gutter-md"},I=e("div",{class:"text-h6"},"My Student Page",-1),L={key:0,class:"flex-center q-pa-md"},U=e("br",null,null,-1),j={width:"100%"},F=e("tr",null,[e("th",null,"\xA0"),e("th",{colSpan:"100"},"Assignments")],-1),H=e("th",null,"Student",-1),M={key:0},R=["onClick"],z={key:1};function G(d,t,J,i,O,W){return r(),f(P,{class:"q-gutter-md"},{default:o(()=>[s(b,{modelValue:i.prompt,"onUpdate:modelValue":t[3]||(t[3]=l=>i.prompt=l),persistent:""},{default:o(()=>[s(k,{style:{"min-width":"350px"}},{default:o(()=>[s(h,null,{default:o(()=>[$]),_:1}),s(h,{class:"q-pt-none"},{default:o(()=>[s(w,{dense:"",modelValue:i.courseKey,"onUpdate:modelValue":t[0]||(t[0]=l=>i.courseKey=l),autofocus:"",onKeyup:t[1]||(t[1]=B(l=>{i.prompt=!1,this.enrollCB()},["enter"]))},null,8,["modelValue"])]),_:1}),s(A,{align:"right",class:"text-white"},{default:o(()=>[v(s(_,{flat:"",label:"Cancel"},null,512),[[x]]),v(s(_,{flat:"",label:"Enroll",onClick:t[2]||(t[2]=l=>this.enrollCB())},null,512),[[x]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e("div",D,[I,e("div",null,[s(_,{icon:"group_add",onClick:t[4]||(t[4]=l=>i.prompt=!0)},{default:o(()=>[s(y,{class:"bg-info"},{default:o(()=>[c("Have a course-key?")]),_:1})]),_:1}),this.reStore.authenticated?(r(),f(_,{key:0,onClick:t[5]||(t[5]=l=>this.reStore.router.push("/teacher")),icon:"switch_account"},{default:o(()=>[s(y,null,{default:o(()=>[c(" Switch to Teacher role ")]),_:1})]),_:1})):Q("",!0)])]),this.reStore.userSnapshot.taking?(r(),n("div",L,[(r(!0),n(g,null,S(this.reStore.userSnapshot.taking,(l,u)=>(r(),f(k,{key:u,class:"course-card q-mt-md q-mb-md"},{default:o(()=>[s(h,null,{default:o(()=>[c(" Title: "+m(this.reStore.courses[u].title),1),U,c(" Key: "+m(u),1)]),_:2},1024),s(h,null,{default:o(()=>[e("table",j,[F,e("tr",null,[H,(r(!0),n(g,null,S(this.reStore.courses[u].assignments,(a,p)=>(r(),n("th",{key:p},[e("span",null,m(a.title),1),e("span",null,[s(q,{onClick:K=>this.takeAssignment(u,a.id),name:"play_circle",class:"ptr on-right"},null,8,["onClick"]),s(y,null,{default:o(()=>[c("Take Assignment")]),_:1})])]))),128))]),e("tr",null,[e("th",null,m(this.reStore.userSnapshot.profile.name),1),(r(!0),n(g,null,S(this.reStore.courses[u].assignments,(a,p)=>(r(),n("th",{key:p},[a.scores&&a.scores[this.reStore.userSnapshot.profile.emailKey]?(r(),n("span",M,[e("a",{onClick:K=>this.takeAssignment(p,a.id)},m(a.scores[this.reStore.userSnapshot.profile.emailKey]),9,R)])):(r(),n("span",z," -- "))]))),128))])])]),_:2},1024)]),_:2},1024))),128))])):Q("",!0)]),_:1})}var ue=V(N,[["render",G]]);export{ue as default};
