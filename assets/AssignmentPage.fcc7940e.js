import{Q as r}from"./QPage.647631ac.js";import{u as s}from"./re-store.3e76f3df.js";import{S as n}from"./StepperComponent.7263ec2c.js";import{_ as p,d as m,r as i,o as a,c,w as u,a as f,f as S}from"./index.90deb7ad.js";import"./firebase.0eb8f378.js";import"./transform.aea72fbe.js";import"./index.2cf0d985.js";import"./use-form.aad39763.js";import"./use-dark.101a37d7.js";import"./QCheckbox.0c1dcaa1.js";import"./QToggle.e3fbfc5f.js";import"./ClosePopup.44f44f9d.js";import"./use-prevent-scroll.9a33fee1.js";import"./scroll.e70fbf40.js";import"./use-portal.10b310ea.js";import"./QCard.c410c875.js";import"./QImg.93b39287.js";import"./QPageSticky.5b01c1d0.js";const _=m({name:"AssignmentPage",components:{StepperComponent:n},props:{},setup(t){return{reStore:s(),assignmentObject:i(null)}},mounted(){const t=this.reStore.courses.ck,e=this.reStore.courses.aid;this.assignmentObject=JSON.parse(JSON.stringify(this.reStore.courses[t].assignments[e]))}});function d(t,e,g,l,h,C){const o=S("StepperComponent");return a(),c(r,null,{default:u(()=>[f(o)]),_:1})}var q=p(_,[["render",d]]);export{q as default};