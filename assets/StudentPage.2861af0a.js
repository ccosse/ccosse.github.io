import{a as i,Q as a,i as f,h as _,C as d}from"./ClosePopup.600c741b.js";import{Q as g}from"./QInput.61adfc43.js";import{_ as x,r as m,o as h,ar as y,a as t,w as o,aH as C,p as c,Q as u,e as l,ac as p,as as v}from"./index.d3f01255.js";import{Q}from"./QTooltip.33132c6c.js";import{Q as k}from"./QPage.fc427e52.js";import{u as b}from"./re-store.81b03dae.js";import"./use-dark.29e1c0ef.js";import"./use-portal.63bf47c9.js";import"./use-key-composition.c50a00e6.js";import"./position-engine.ea38340c.js";import"./selection.350be2f5.js";import"./firebase.ea708b63.js";const q=b(),w={setup(){return{prompt:m(!1),courseKey:m(null),reStore:q}},mounted(){},methods:{takeAssignment(s,e){console.log("takeAssignment: ",s,e),this.fbStore.takeAssignment(s,e)},dck(s){console.log("delta-course-key: ",this.courseKey)},enrollCB(){console.log("StudentPage.enrollCB",this.courseKey);const s=this.fbStore.enroll(this.courseKey);console.log(s)}}},K=l("div",{class:"text-h6"},"Enter a course-key",-1),V=l("div",{class:"flex-center q-ma-md row q-gutter-md text-h6"},"Courses I'm Taking",-1),B=l("div",{class:"flex-center q-mt-xs q-mb-xs row q-gutter-xs"},[l("b",null," You are currently enrolled in 0 Courses ")],-1),S={class:"flex-center q-mt-xs q-mb-xs row q-gutter-xs"},E=l("br",null,null,-1),P=l("br",null,null,-1);function A(s,e,H,r,N,T){return h(),y(v,null,[t(_,{modelValue:r.prompt,"onUpdate:modelValue":e[3]||(e[3]=n=>r.prompt=n),persistent:""},{default:o(()=>[t(i,{style:{"min-width":"350px"}},{default:o(()=>[t(a,null,{default:o(()=>[K]),_:1}),t(a,{class:"q-pt-none"},{default:o(()=>[t(g,{dense:"",modelValue:r.courseKey,"onUpdate:modelValue":e[0]||(e[0]=n=>r.courseKey=n),autofocus:"",onKeyup:e[1]||(e[1]=C(n=>{r.prompt=!1,this.enrollCB()},["enter"])),onHide:this.dck},null,8,["modelValue","onHide"])]),_:1}),t(f,{align:"right",class:"text-white"},{default:o(()=>[c(t(u,{outline:"",flat:"",label:"Cancel"},null,512),[[d]]),c(t(u,{outline:"",flat:"",label:"Enroll",onClick:e[2]||(e[2]=n=>this.enrollCB())},null,512),[[d]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(k,{class:"q-gutter-md"},{default:o(()=>[t(i,{class:"fixed-center blah"},{default:o(()=>[t(a,null,{default:o(()=>[V,B,l("div",S,[t(u,{icon:"group_add",onClick:e[4]||(e[4]=n=>r.prompt=!0)},{default:o(()=>[t(Q,null,{default:o(()=>[p("Have a course-key?")]),_:1})]),_:1})]),E,p(" Enter a CourseKey to enroll in a new course"),P]),_:1})]),_:1})]),_:1})],64)}var M=x(w,[["render",A]]);export{M as default};
