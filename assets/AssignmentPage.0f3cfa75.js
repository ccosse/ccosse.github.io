import{Q as r}from"./QPage.01a4b3f0.js";import{u as s}from"./re-store.a49171aa.js";import{S as n}from"./StepperComponent.00667353.js";import{_ as p,d as m,r as i,o as a,c,w as u,a as f,f as S}from"./index.af139916.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";import"./use-form.ced11809.js";import"./use-dark.1987b08d.js";import"./QCheckbox.dc8e55c1.js";import"./QToggle.3d356ec4.js";import"./ClosePopup.8d70a925.js";import"./use-prevent-scroll.945c3f77.js";import"./scroll.1cb35a8a.js";import"./use-portal.f1ec7395.js";import"./QCard.145de680.js";import"./QImg.dddd5338.js";import"./QPageSticky.c1a39716.js";const _=m({name:"AssignmentPage",components:{StepperComponent:n},props:{},setup(t){return{reStore:s(),assignmentObject:i(null)}},mounted(){const t=this.reStore.courses.ck,e=this.reStore.courses.aid;this.assignmentObject=JSON.parse(JSON.stringify(this.reStore.courses[t].assignments[e]))}});function d(t,e,g,l,h,C){const o=S("StepperComponent");return a(),c(r,null,{default:u(()=>[f(o)]),_:1})}var V=p(_,[["render",d]]);export{V as default};
