import{Q as f}from"./QPage.d89f3145.js";import{u as r}from"./re-store.c16341ab.js";import{Q as h}from"./QImg.c484a4f4.js";import{d as n,r as o,D as x,_ as c,o as p,ar as C,a as m,w as g,e as a,ad as i,as as E,c as v,f as $}from"./index.f4f9efa2.js";import"./firebase.ea708b63.js";const S=n({name:"EditorComponent",setup(){const t=r();return{reStore:t,imgCap:o(t.page.imgs[0].cap),imgSrc:o(t.page.imgs[0].url),imgFit:o(t.page.imgFit),pageText:o(t.page.pageText)}},mounted(){console.log("EditorComponent.mounted"),x(this.reStore.page,async(t,e)=>{console.log("watcher ",t,e);try{this.imgCap=t.imgs[t.imgIdx].cap,this.imgSrc=t.imgs[t.imgIdx].url,this.imgFit=t.imgFit,this.pageText=t.pageText}catch(s){console.log(s)}console.log("watcher ",this.imgSrc)})}}),y={id:"slideCaptionDiv",class:"absolute-top text-subtitle1 text-center q-my-xl",contentEditable:"true"},F={id:"slideTextDiv",class:"text-panel text-center absolute-center",contentEditable:"true"};function T(t,e,s,d,l,_){return p(),C(E,null,[m(h,{class:"fixed-center",src:this.imgSrc,fit:this.imgFit,height:"100%"},{default:g(()=>[a("div",y,i(this.imgCap),1)]),_:1},8,["src","fit"]),a("div",F,i(this.pageText),1)],64)}var Q=c(S,[["render",T]]);const B=n({name:"EditorPage",components:{EditorComponent:Q},setup(t){const e=r();return{props:t,reStore:e}}});function D(t,e,s,d,l,_){const u=$("EditorComponent");return p(),v(f,{id:"QPage",class:"row justify-center"},{default:g(()=>[m(u)]),_:1})}var q=c(B,[["render",D]]);export{q as default};
