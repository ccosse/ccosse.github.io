import{Q as r}from"./QPage.a5c3e535.js";import{u as s}from"./re-store.861aa502.js";import{S as n}from"./StepperComponent.45022620.js";import{_ as p,e as m,r as i,o as a,f as c,w as u,g as f,l as S}from"./index.95bb4c97.js";import"./firebase.0eb8f378.js";import"./transform.aea72fbe.js";import"./index.2cf0d985.js";import"./use-form.1cb84069.js";import"./use-dark.c7b69132.js";import"./QCheckbox.f388ab15.js";import"./QToggle.359d46f1.js";import"./ClosePopup.734320af.js";import"./use-prevent-scroll.0d6e8908.js";import"./scroll.63c2128a.js";import"./QCard.7020e53d.js";import"./QImg.7a491717.js";import"./QPageSticky.697370ce.js";const _=m({name:"AssignmentPage",components:{StepperComponent:n},props:{},setup(e){return{reStore:s(),assignmentObject:i(null)}},mounted(){const e=this.reStore.courses.ck,t=this.reStore.courses.aid;this.assignmentObject=JSON.parse(JSON.stringify(this.reStore.courses[e].assignments[t]))}});function d(e,t,g,l,h,C){const o=S("StepperComponent");return a(),c(r,null,{default:u(()=>[f(o)]),_:1})}var V=p(_,[["render",d]]);export{V as default};
