import{Q as r}from"./QPage.053aabb9.js";import{u as s}from"./re-store.db15598f.js";import{S as n}from"./StepperComponent.3e329662.js";import{_ as p,d as m,r as i,o as a,c,w as u,a as f,f as S}from"./index.fcfa7bad.js";import"./firebase.0eb8f378.js";import"./transform.aea72fbe.js";import"./index.2cf0d985.js";import"./use-form.fa643408.js";import"./use-dark.52d039bb.js";import"./QCheckbox.2e2665a5.js";import"./QToggle.24c45092.js";import"./ClosePopup.ed1b3c2d.js";import"./use-prevent-scroll.711ab5b8.js";import"./scroll.d97c0f91.js";import"./use-portal.39f7ff93.js";import"./QCard.ea104468.js";import"./QImg.d35757c3.js";import"./QPageSticky.64a37b7d.js";const _=m({name:"AssignmentPage",components:{StepperComponent:n},props:{},setup(t){return{reStore:s(),assignmentObject:i(null)}},mounted(){const t=this.reStore.courses.ck,e=this.reStore.courses.aid;this.assignmentObject=JSON.parse(JSON.stringify(this.reStore.courses[t].assignments[e]))}});function d(t,e,g,l,h,C){const o=S("StepperComponent");return a(),c(r,null,{default:u(()=>[f(o)]),_:1})}var q=p(_,[["render",d]]);export{q as default};
