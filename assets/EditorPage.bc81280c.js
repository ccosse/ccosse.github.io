import{Q as f}from"./QPage.b7f64a1e.js";import{u as r}from"./re-store.a80ca20a.js";import{Q as h}from"./QImg.491fb9dd.js";import{d as n,r as o,D as x,_ as c,o as p,au as C,a as m,w as g,e as a,ad as i,av as v,c as E,f as $}from"./index.6aaa5d48.js";import"./firebase.8ff914f0.js";const S=n({name:"EditorComponent",setup(){const t=r();return{reStore:t,imgCap:o(t.page.imgs[0].cap),imgSrc:o(t.page.imgs[0].url),imgFit:o(t.page.imgFit),pageText:o(t.page.pageText)}},mounted(){console.log("EditorComponent.mounted"),x(this.reStore.page,async(t,e)=>{console.log("watcher ",t,e);try{this.imgCap=t.imgs[t.imgIdx].cap,this.imgSrc=t.imgs[t.imgIdx].url,this.imgFit=t.imgFit,this.pageText=t.pageText}catch(s){console.log(s)}console.log("watcher ",this.imgSrc)})}}),y={id:"slideCaptionDiv",class:"absolute-top text-subtitle1 text-center q-my-xl"},F={id:"slideTextDiv",class:"text-panel text-center absolute-center",contentEditable:"false"};function T(t,e,s,d,l,_){return p(),C(v,null,[m(h,{class:"fixed-center",src:this.imgSrc,fit:this.imgFit,height:"100%"},{default:g(()=>[a("div",y,i(this.imgCap),1)]),_:1},8,["src","fit"]),a("div",F,i(this.pageText),1)],64)}var Q=c(S,[["render",T]]);const B=n({name:"EditorPage",components:{EditorComponent:Q},setup(t){const e=r();return{props:t,reStore:e}}});function D(t,e,s,d,l,_){const u=$("EditorComponent");return p(),E(f,{id:"QPage",class:"row justify-center"},{default:g(()=>[m(u)]),_:1})}var q=c(B,[["render",D]]);export{q as default};