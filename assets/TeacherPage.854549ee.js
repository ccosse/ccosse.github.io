import{a as u,Q as n,i as f,h as _,C as d}from"./ClosePopup.3cd40fb7.js";import{Q as g}from"./QInput.3e0486e3.js";import{_ as h,r as m,o as x,au as C,a as t,w as o,aH as v,p as c,Q as i,e as s,ac as p,av as y}from"./index.6aaa5d48.js";import{Q}from"./QTooltip.27f85518.js";import{Q as k}from"./QPage.b7f64a1e.js";import{u as w}from"./re-store.a80ca20a.js";import"./use-dark.bdeded94.js";import"./use-portal.3ed96418.js";import"./use-key-composition.20ab45ba.js";import"./position-engine.d6256345.js";import"./selection.f2cbefe1.js";import"./firebase.8ff914f0.js";const b=w(),q={setup(){return{prompt:m(!1),courseKey:m(null),reStore:b}},mounted(){},methods:{takeAssignment(l,e){console.log("takeAssignment: ",l,e),this.fbStore.takeAssignment(l,e)},dck(l){console.log("delta-course-key: ",this.courseKey)},enrollCB(){console.log("StudentPage.enrollCB",this.courseKey);const l=this.fbStore.enroll(this.courseKey);console.log(l)}}},V=s("div",{class:"text-h6"},"Set the title",-1),B=s("div",{class:"flex-center q-ma-md row q-gutter-md text-h6"},"Courses I'm Teaching",-1),K=s("div",{class:"flex-center q-mt-xs q-mb-xs row q-gutter-xs"},[s("b",null," You are currently teaching 0 Courses ")],-1),S={class:"flex-center q-mt-xs q-mb-xs row q-gutter-xs"},P=s("br",null,null,-1),T=s("br",null,null,-1);function A(l,e,E,r,H,N){return x(),C(y,null,[t(_,{modelValue:r.prompt,"onUpdate:modelValue":e[3]||(e[3]=a=>r.prompt=a),persistent:""},{default:o(()=>[t(u,{style:{"min-width":"350px"}},{default:o(()=>[t(n,null,{default:o(()=>[V]),_:1}),t(n,{class:"q-pt-none"},{default:o(()=>[t(g,{dense:"",modelValue:r.courseKey,"onUpdate:modelValue":e[0]||(e[0]=a=>r.courseKey=a),autofocus:"",onKeyup:e[1]||(e[1]=v(a=>{r.prompt=!1,this.mkCourseCB()},["enter"])),onHide:this.dck},null,8,["modelValue","onHide"])]),_:1}),t(f,{align:"right",class:"text-white"},{default:o(()=>[c(t(i,{outline:"",flat:"",label:"Cancel"},null,512),[[d]]),c(t(i,{outline:"",flat:"",label:"Create",onClick:e[2]||(e[2]=a=>this.mkCourseCB())},null,512),[[d]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(k,{class:"q-gutter-md"},{default:o(()=>[t(u,{class:"fixed-center blah"},{default:o(()=>[t(n,null,{default:o(()=>[B,K,s("div",S,[t(i,{icon:"group_add",onClick:e[4]||(e[4]=a=>r.prompt=!0)},{default:o(()=>[t(Q,null,{default:o(()=>[p("Create a new course?")]),_:1})]),_:1})]),P,p(" Enter a title for new course"),T]),_:1})]),_:1})]),_:1})],64)}var M=h(q,[["render",A]]);export{M as default};
