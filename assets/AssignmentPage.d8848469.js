import{Q as r}from"./QPage.13ea1f3b.js";import{u as s}from"./re-store.7a033c6e.js";import{S as n}from"./StepperComponent.bd81b609.js";import{_ as p,d as a,r as m,o as i,c,w as u,a as f,f as S}from"./index.79af6c58.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";import"./use-portal.3323630c.js";import"./use-dark.69021e55.js";import"./QCheckbox.18087306.js";import"./QToggle.4a6b8927.js";import"./ClosePopup.edf55b4d.js";import"./QImg.083416c6.js";import"./QPageSticky.c456d0f1.js";const _=a({name:"AssignmentPage",components:{StepperComponent:n},props:{},setup(e){return{reStore:s(),assignmentObject:m(null)}},mounted(){const e=this.reStore.courses.ck,t=this.reStore.courses.aid;this.assignmentObject=JSON.parse(JSON.stringify(this.reStore.courses[e].assignments[t]))}});function d(e,t,g,l,h,C){const o=S("StepperComponent");return i(),c(r,null,{default:u(()=>[f(o)]),_:1})}var Q=p(_,[["render",d]]);export{Q as default};
