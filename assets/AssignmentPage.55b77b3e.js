import{Q as r}from"./QPage.70ae6c84.js";import{u as s}from"./re-store.48e9fd27.js";import{S as n}from"./StepperComponent.62096923.js";import{_ as p,d as a,r as m,o as i,c,w as u,a as f,f as S}from"./index.929bd027.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";import"./ClosePopup.db49514c.js";import"./use-dark.c91131ec.js";import"./use-portal.cb729528.js";import"./QCheckbox.7e4cc9fe.js";import"./QToggle.b1eb11ff.js";import"./QImg.f5bb3c7a.js";import"./QPageSticky.b2d7130b.js";const _=a({name:"AssignmentPage",components:{StepperComponent:n},props:{},setup(e){return{reStore:s(),assignmentObject:m(null)}},mounted(){const e=this.reStore.courses.ck,t=this.reStore.courses.aid;this.assignmentObject=JSON.parse(JSON.stringify(this.reStore.courses[e].assignments[t]))}});function d(e,t,g,l,h,C){const o=S("StepperComponent");return i(),c(r,null,{default:u(()=>[f(o)]),_:1})}var Q=p(_,[["render",d]]);export{Q as default};
