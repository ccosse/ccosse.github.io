import{Q as r}from"./QPage.07b30735.js";import{u as s}from"./re-store.344dba25.js";import{S as n}from"./StepperComponent.2d3343bb.js";import{_ as p,d as m,r as i,o as a,c,w as u,a as f,f as S}from"./index.8c1d1a0a.js";import"./firebase.0eb8f378.js";import"./transform.aea72fbe.js";import"./index.2cf0d985.js";import"./use-form.75726ccc.js";import"./use-dark.26be618d.js";import"./QCheckbox.2e07ce9a.js";import"./QToggle.06034ba7.js";import"./ClosePopup.bd4216fc.js";import"./use-prevent-scroll.0a350e15.js";import"./scroll.8804baae.js";import"./use-portal.fa932fb2.js";import"./QCard.f38dacf4.js";import"./QImg.17080a52.js";import"./QPageSticky.b5dc60a9.js";const _=m({name:"AssignmentPage",components:{StepperComponent:n},props:{},setup(t){return{reStore:s(),assignmentObject:i(null)}},mounted(){const t=this.reStore.courses.ck,e=this.reStore.courses.aid;this.assignmentObject=JSON.parse(JSON.stringify(this.reStore.courses[t].assignments[e]))}});function d(t,e,g,l,h,C){const o=S("StepperComponent");return a(),c(r,null,{default:u(()=>[f(o)]),_:1})}var q=p(_,[["render",d]]);export{q as default};