import{Q as _}from"./QPage.2f098c14.js";import{u as c}from"./re-store.2bd62d9f.js";import{Q as S}from"./QImg.9626816b.js";import{d as p,r as s,D as x,_ as m,o as g,au as f,a as d,w as u,e as a,ag as n,av as C,c as E,f as v}from"./index.b954bc3d.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";const $=p({name:"EditorComponent",setup(){return{reStore:c(),imgCap:s(""),imgSrc:s(""),imgFit:s(""),pageText:s("")}},mounted(){console.log("EditorComponent.mounted"),x(this.reStore.courses,async(t,o)=>{this.reStore.courses.ck,this.reStore.courses.aid,this.reStore.courses.pgIdx;const r=this.reStore.courses.imgIdx;try{this.imgSrc=this.reStore.page.imgs[r].url,this.imgCap=this.reStore.page.imgs[r].cap,this.imgFit=this.reStore.page.imgFit,this.pageText=this.reStore.page.pageText}catch{}},{immediate:!0,deep:!0}),this.reStore.courses.ck,this.reStore.courses.aid,this.reStore.courses.pgIdx;const e=0;try{this.imgSrc=this.reStore.page.imgs[e].url,this.imgCap=this.reStore.page.imgs[e].cap,this.imgFit=this.reStore.page.imgFit,this.pageText=this.reStore.page.pageText}catch{}}}),y={id:"slideCaptionDiv",class:"absolute-top text-subtitle1 text-center q-my-xl",contentEditable:"true"},b={id:"slideTextDiv",class:"text-panel text-center absolute-center",contentEditable:"true"};function F(e,t,o,r,i,h){return g(),f(C,null,[d(S,{class:"fixed-center",src:this.imgSrc,fit:this.imgFit,height:"100%"},{default:u(()=>[a("div",y,n(this.imgCap),1)]),_:1},8,["src","fit"]),a("div",b,n(this.pageText),1)],64)}var T=m($,[["render",F]]);const I=p({name:"EditorPage",components:{EditorComponent:T},setup(e){const t=c();return{props:e,reStore:t}}});function k(e,t,o,r,i,h){const l=v("EditorComponent");return g(),E(_,{id:"QPage",class:"row justify-center"},{default:u(()=>[d(l)]),_:1})}var N=m(I,[["render",k]]);export{N as default};
