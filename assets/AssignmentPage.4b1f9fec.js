import{Q as r}from"./QPage.d6c9b12a.js";import{u as s}from"./re-store.01657044.js";import{S as n}from"./StepperComponent.742a4ca7.js";import{_ as p,d as m,r as i,o as a,c,w as u,a as f,f as S}from"./index.8acc1f94.js";import"./firebase.0eb8f378.js";import"./transform.aea72fbe.js";import"./index.2cf0d985.js";import"./use-form.30a6179d.js";import"./use-dark.d64486ff.js";import"./QCheckbox.f54a2775.js";import"./QToggle.30f48d8a.js";import"./ClosePopup.aa626cd0.js";import"./use-prevent-scroll.b67e557f.js";import"./scroll.db1356ae.js";import"./use-portal.20071395.js";import"./QCard.0487b603.js";import"./QImg.c5580537.js";import"./QPageSticky.b195a439.js";const _=m({name:"AssignmentPage",components:{StepperComponent:n},props:{},setup(t){return{reStore:s(),assignmentObject:i(null)}},mounted(){const t=this.reStore.courses.ck,e=this.reStore.courses.aid;this.assignmentObject=JSON.parse(JSON.stringify(this.reStore.courses[t].assignments[e]))}});function d(t,e,g,l,h,C){const o=S("StepperComponent");return a(),c(r,null,{default:u(()=>[f(o)]),_:1})}var q=p(_,[["render",d]]);export{q as default};
