import{Q as x}from"./QPage.fbfee5e7.js";import{u as g,s as _,a as l}from"./re-store.804d2bd3.js";import{Q as v}from"./QImg.efdb90f4.js";import{g as C,h as b,i as y,j as B,d as u,r as a,D as k,_ as m,o as h,au as E,a as s,w as n,e as d,ag as p,Q as c,av as T,c as $,f as F}from"./index.ceece9e7.js";import{Q}from"./QPageSticky.b46a33c7.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";var I=C({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const r=b(()=>{const o=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(i=>e[i]===!0).map(i=>`q-btn-group--${i}`).join(" ");return`q-btn-group row no-wrap${o.length>0?" "+o:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>y("div",{class:r.value},B(t.default))}});const w=u({name:"EditorComponent",setup(){return{reStore:g(),imgCap:a(""),imgSrc:a(""),imgFit:a(""),pageText:a("")}},mounted(){console.log("EditorComponent.mounted"),k(this.reStore.courses,async(t,r)=>{this.reStore.courses.ck,this.reStore.courses.aid,this.reStore.courses.pgIdx;const o=this.reStore.courses.imgIdx;try{this.imgFit=this.reStore.page.imgFit,this.pageText=this.reStore.page.pageText,this.imgSrc=this.reStore.page.imgs[o].url,this.imgCap=this.reStore.page.imgs[o].cap}catch{}},{immediate:!0,deep:!0}),this.reStore.courses.ck,this.reStore.courses.aid,this.reStore.courses.pgIdx;const e=this.reStore.courses.imgIdx;try{this.imgFit=this.reStore.page.imgFit,this.pageText=this.reStore.page.pageText,this.imgSrc=this.reStore.page.imgs[e].url,this.imgCap=this.reStore.page.imgs[e].cap}catch{}},methods:{toggleText(){_("#slideTextDiv").classed("hidden")?l("#slideTextDiv").classed("hidden",!1):l("#slideTextDiv").classed("hidden",!0)},cycleFitMode(){const e=["scale-down","cover"];let t=e.indexOf(this.imgFit);t+=1,t>e.length-1&&(t=0),this.reStore.page.imgFit=e[t],this.reStore.courses.trigger+=1},setCover(){const e=this.reStore.courses.ck,t=this.reStore.courses.aid;this.reStore.courses.pgIdx;const r=this.reStore.courses.imgIdx,o=this.reStore.page.imgs[r].url;this.reStore.courses[e].assignments[t].coverUrl=o,console.log("coverUrl ",o)}}}),D={id:"slideCaptionDiv",class:"absolute-top text-subtitle1 text-center q-my-xl",contentEditable:"true"},q={id:"slideTextDiv",class:"text-panel text-center absolute-center",contentEditable:"true"};function j(e,t,r,o,i,f){return h(),E(T,null,[s(v,{class:"fixed-center",src:this.imgSrc,fit:this.imgFit,height:"100%"},{default:n(()=>[d("div",D,p(this.imgCap),1)]),_:1},8,["src","fit"]),d("div",q,p(this.pageText),1),s(Q,{position:"bottom-right"},{default:n(()=>[s(I,null,{default:n(()=>[s(c,{fab:"","label-position":"right",color:"primary",icon:"title",onClick:this.setCover,padding:"sm"},null,8,["onClick"]),s(c,{fab:"","label-position":"right",color:"primary",icon:"article",onClick:this.toggleText,padding:"sm"},null,8,["onClick"]),s(c,{fab:"","label-position":"right",color:"primary",icon:"fit_screen",onClick:this.cycleFitMode,padding:"sm"},null,8,["onClick"])]),_:1})]),_:1})],64)}var P=m(w,[["render",j]]);const O=u({name:"EditorPage",components:{EditorComponent:P},setup(e){const t=g();return{props:e,reStore:t}}});function U(e,t,r,o,i,f){const S=F("EditorComponent");return h(),$(x,{id:"QPage",class:"row justify-center"},{default:n(()=>[s(S)]),_:1})}var H=m(O,[["render",U]]);export{H as default};
