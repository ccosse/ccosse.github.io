import{Q as r}from"./QPage.c343e3b5.js";import{u as s}from"./re-store.84ce131d.js";import{S as n}from"./StepperComponent.b8ce4d4f.js";import{_ as p,d as m,r as i,o as a,c,w as u,a as f,f as S}from"./index.589793f5.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";import"./use-form.40a366a1.js";import"./use-dark.dd1c7729.js";import"./scroll.6e8133d8.js";import"./QCheckbox.949adace.js";import"./QToggle.d678dbd4.js";import"./ClosePopup.1b49aa5b.js";import"./use-portal.448d6786.js";import"./QImg.59600fc1.js";import"./QPageSticky.2137ce71.js";const _=m({name:"AssignmentPage",components:{StepperComponent:n},props:{},setup(e){return{reStore:s(),assignmentObject:i(null)}},mounted(){const e=this.reStore.courses.ck,t=this.reStore.courses.aid;this.assignmentObject=JSON.parse(JSON.stringify(this.reStore.courses[e].assignments[t]))}});function d(e,t,g,l,h,C){const o=S("StepperComponent");return a(),c(r,null,{default:u(()=>[f(o)]),_:1})}var E=p(_,[["render",d]]);export{E as default};