import{Q as r}from"./QPage.39ac68a6.js";import{u as s}from"./re-store.eb1c8086.js";import{S as n}from"./StepperComponent.a5008490.js";import{_ as p,d as m,r as i,o as a,c,w as u,a as f,f as S}from"./index.f8b450a7.js";import"./firebase.0eb8f378.js";import"./transform.aea72fbe.js";import"./index.2cf0d985.js";import"./use-form.12680db8.js";import"./use-dark.0a08b69e.js";import"./QCheckbox.f3a8e94b.js";import"./QToggle.83e5539c.js";import"./ClosePopup.b96afa78.js";import"./use-prevent-scroll.ecb1410a.js";import"./scroll.942cf804.js";import"./use-portal.16c4f851.js";import"./QCard.45f525cb.js";import"./QImg.dd2f8b26.js";import"./QPageSticky.5f422a3f.js";const _=m({name:"AssignmentPage",components:{StepperComponent:n},props:{},setup(t){return{reStore:s(),assignmentObject:i(null)}},mounted(){const t=this.reStore.courses.ck,e=this.reStore.courses.aid;this.assignmentObject=JSON.parse(JSON.stringify(this.reStore.courses[t].assignments[e]))}});function d(t,e,g,l,h,C){const o=S("StepperComponent");return a(),c(r,null,{default:u(()=>[f(o)]),_:1})}var q=p(_,[["render",d]]);export{q as default};
