import{Q as v}from"./QPage.d9013054.js";import{u as S}from"./re-store.5caa898e.js";import{Q}from"./QBanner.547ebcb6.js";import{Q as h}from"./QImg.de690fb9.js";import{Q as p}from"./QCard.76af4faa.js";import{Q as C}from"./QCardSection.bf708843.js";import{Q as E}from"./QScrollArea.df132909.js";import{e as y,r as A,t as $,_ as k,o as i,f as m,w as r,g as a,k as o,ar as n,aq as f,j as c,at as b,aG as V,aF as _,l as B}from"./index.11470d9d.js";import"./firebase.0eb8f378.js";import"./transform.aea72fbe.js";import"./index.2cf0d985.js";import"./use-dark.75ee71be.js";import"./scroll.47d9b2c2.js";import"./selection.7892d536.js";const N=y({name:"AssignmentEditor",setup(){return{reStore:S(),assignment:A(null)}},mounted(){console.log("AE mounted"),$(this.reStore.courses,async(s,e)=>{if(console.log("AE watcher ",s,e),!this.assignment||this.assignment.id!==s.aid){const l=this.reStore.courses.ck,d=this.reStore.courses.aid;this.assignment=JSON.parse(JSON.stringify(this.reStore.courses[l].assignments[d]))}});try{if(!this.assignment||this.assignment.id!==newObj.aid){const s=this.reStore.courses.ck,e=this.reStore.courses.aid;this.assignment=JSON.parse(JSON.stringify(this.reStore.courses[s].assignments[e]))}}catch(s){console.log(s)}},methods:{pgCB(s){console.log("AE pgCB ",s),this.reStore.courses.selectedRHSTab="pagerTab"},dummy(){console.log("dummy")}}}),q={class:"text-weight-bolder text-center text-h4 q-pa-md"},j={key:0,class:"flex flex-row justify-center"},P=o("span",{class:"justify-between"},"p 00",-1),J=o("span",{class:"on-right"},"Cover Page",-1),O=o("span",{class:"float-right"},"1 img",-1),T={class:"justify-between"},U={class:"on-right"},F={class:"float-right"};function R(s,e,l,d,x,w){return i(),m(p,{flat:"",class:"q-pa-sm"},{default:r(()=>[a(E,{style:{height:"90vh","min-width":"76vw"}},{default:r(()=>[this.reStore.courses.ck&&this.reStore.courses.aid?(i(),m(C,{key:0},{default:r(()=>[a(Q,{class:"bg-positive text-white"},{default:r(()=>[o("div",q,n(this.reStore.courses[this.reStore.courses.ck].title)+"."+n(this.reStore.courses[this.reStore.courses.ck].assignments[this.reStore.courses.aid].title),1)]),_:1}),this.assignment?(i(),f("div",j,[a(p,{class:"ccard bg-primary q-pa-xs q-ma-sm",flat:"",bordered:"",modelValue:this.assignment.pages,"onUpdate:modelValue":e[0]||(e[0]=t=>this.assignment.pages=t)},{default:r(()=>[P,c(),J,c(),O,a(h,{fit:"cover",height:"230px",width:"100%",src:this.assignment.coverUrl},null,8,["src"])]),_:1},8,["modelValue"]),(i(!0),f(b,null,V(this.assignment.pages,(t,g)=>(i(),m(p,{class:"ccard bg-primary q-pa-xs q-ma-sm",flat:"",bordered:"",modelValue:this.assignment.pages,"onUpdate:modelValue":e[1]||(e[1]=u=>this.assignment.pages=u),key:g},{default:r(()=>[o("span",T,"p "+n(g),1),c(),o("span",U,n(t.pageTitle.slice(0,10)),1),c(),o("span",F,n(t.imgs.length)+" imgs",1),a(h,{fit:"cover",height:"230px",width:"100%",src:t.imgs[t.imgIdx].url,onClick:u=>this.pgCB(g)},null,8,["src","onClick"])]),_:2},1032,["modelValue"]))),128))])):_("",!0)]),_:1})):_("",!0)]),_:1})]),_:1})}var D=k(N,[["render",R]]);const G=y({name:"AssignmentEditorPage",components:{AssignmentEditor:D},setup(s){const e=S();return{props:s,reStore:e}}});function H(s,e,l,d,x,w){const t=B("AssignmentEditor");return i(),m(v,{id:"QPage",class:"row justify-center"},{default:r(()=>[a(t)]),_:1})}var is=k(G,[["render",H]]);export{is as default};
