import{Q as b}from"./QPage.ce3e4303.js";import{u as x,s as k,a as p}from"./re-store.8a5c24af.js";import{Q as y}from"./QImg.1316cb28.js";import{g as E,h as w,i as B,j as T,d as C,r as d,v as Q,_ as v,o as h,ag as S,a as s,w as r,e as a,aj as n,af as o,Q as c,ak as $,ah as F,c as D,f as R}from"./index.3f6579f0.js";import{Q as f}from"./QPageSticky.b50ea789.js";import{Q as m}from"./QTooltip.53876bb4.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";import"./selection.731667a9.js";import"./scroll.e963c8b7.js";import"./use-portal.281a4db0.js";var _=E({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(t,{slots:e}){const g=w(()=>{const i=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(l=>t[l]===!0).map(l=>`q-btn-group--${l}`).join(" ");return`q-btn-group row no-wrap${i.length>0?" "+i:""}`+(t.spread===!0?" q-btn-group--spread":" inline")});return()=>B("div",{class:g.value},T(e.default))}});const j=C({name:"EditorComponent",setup(){return{reStore:x(),imgCap:d(""),imgSrc:d(""),imgFit:d(""),pageText:d("")}},mounted(){console.log("EditorComponent.mounted"),Q(this.reStore.courses,async(e,g)=>{console.log("Editor.watch"),this.reStore.courses.ck,this.reStore.courses.aid,this.reStore.courses.pgIdx;const i=this.reStore.courses.imgIdx;try{this.imgFit=this.reStore.page.imgFit,this.pageText=this.reStore.page.pageText,this.imgSrc=this.reStore.page.imgs[i].url,this.imgCap=this.reStore.page.imgs[i].cap}catch(l){console.log("ERROR Editor watch ",l,i,this.reStore.page.imgs),this.imgSrc=this.reStore.page.imgs[0].url,this.imgCap=this.reStore.page.imgs[0].cap}},{immediate:!0,deep:!0}),this.reStore.courses.ck,this.reStore.courses.aid,this.reStore.courses.pgIdx;const t=this.reStore.courses.imgIdx;try{this.imgFit=this.reStore.page.imgFit,this.pageText=this.reStore.page.pageText,this.imgSrc=this.reStore.page.imgs[t].url,this.imgCap=this.reStore.page.imgs[t].cap}catch(e){console.log("ERROR Editor mounted",e)}this.reStore.loadCover()},methods:{prevImg(){this.reStore.page.imgIdx=this.reStore.page.imgIdx-1<0?this.reStore.page.imgs.length-1:this.reStore.page.imgIdx-1,this.reStore.courses.imgIdx=this.reStore.page.imgIdx,this.reStore.setStatus("imgIdx",this.imgIdx),this.imgSrc=this.reStore.page.imgs[this.reStore.courses.imgIdx].url,this.imgCap=this.reStore.page.imgs[this.reStore.courses.imgIdx].cap},nextImg(){this.reStore.page.imgIdx=this.reStore.page.imgIdx+1>this.reStore.page.imgs.length-1?0:this.reStore.page.imgIdx+1,this.reStore.courses.imgIdx=this.reStore.page.imgIdx,this.reStore.setStatus("imgIdx",this.reStore.courses.imgIdx),this.imgSrc=this.reStore.page.imgs[this.reStore.courses.imgIdx].url,this.imgCap=this.reStore.page.imgs[this.reStore.courses.imgIdx].cap},toggleText(){k("#slideTextDiv").classed("hidden")?p("#slideTextDiv").classed("hidden",!1):p("#slideTextDiv").classed("hidden",!0)},cycleFitMode(){const t=["scale-down","cover"];let e=t.indexOf(this.imgFit);e+=1,e>t.length-1&&(e=0),this.reStore.page.imgFit=t[e],this.reStore.courses.trigger+=1},setCover(){const t=this.reStore.courses.ck,e=this.reStore.courses.aid;this.reStore.courses.pgIdx;const g=this.reStore.courses.imgIdx,i=this.reStore.page.imgs[g].url;this.reStore.courses[t].assignments[e].coverUrl=i,console.log("coverUrl ",i)}}}),q={id:"slideCaptionDiv",class:"absolute-top text-subtitle1 text-center q-my-xl assignment",contentEditable:"true"},O={id:"slideTextDiv",class:"text-panel text-center absolute-center assignment",contentEditable:"true"},P={key:0},V={id:"coverSlideDiv",class:"text-panel text-center absolute-center coverslide",contentEditable:"true"},N=a("br",null,null,-1),A=a("br",null,null,-1),G=a("br",null,null,-1),U=a("br",null,null,-1),M=a("br",null,null,-1),H=a("br",null,null,-1),z=a("br",null,null,-1);function J(t,e,g,i,l,I){return h(),S(F,null,[s(y,{class:"fixed-center",src:this.imgSrc,fit:this.imgFit,height:"100%"},{default:r(()=>[a("div",q,n(this.imgCap),1)]),_:1},8,["src","fit"]),a("div",O,n(this.pageText),1),this.reStore.courses.aid?(h(),S("span",P,[a("div",V,[o(" Course: "+n(this.reStore.courses[this.reStore.courses.ck].title)+" ",1),N,o(" Assignment: "+n(this.reStore.courses[this.reStore.courses.ck].assignments[this.reStore.courses.aid].title)+" ",1),A,o(" Created: "+n(this.reStore.courses[this.reStore.courses.ck].assignments[this.reStore.courses.aid].created)+" ",1),G,o(" Owner: "+n(this.reStore.courses[this.reStore.courses.ck].assignments[this.reStore.courses.aid].owner)+" ",1),U,o(" Goal: "+n(this.reStore.courses[this.reStore.courses.ck].assignments[this.reStore.courses.aid].goal)+" ",1),M,s(c,{"icon-right":"play_circle","text-color":"white",color:"primary",onClick:e[0]||(e[0]=u=>this.reStore.startAssignment())},{default:r(()=>[o("Start")]),_:1})])])):$("",!0),s(f,{position:"bottom",offset:[0,10],class:"assignment"},{default:r(()=>[s(_,null,{default:r(()=>[s(c,{fab:"","label-position":"left",color:"primary",icon:"arrow_left",onClick:this.prevImg,padding:"sm"},null,8,["onClick"]),s(c,{color:"primary"},{default:r(()=>[o(n(this.reStore.courses.imgIdx+1)+"/"+n(this.reStore.page.imgs.length),1)]),_:1}),s(c,{fab:"","label-position":"right",color:"primary",icon:"arrow_right",onClick:this.nextImg,padding:"sm"},null,8,["onClick"])]),_:1})]),_:1}),s(f,{position:"bottom",offset:[0,60],class:"assignment"},{default:r(()=>[s(_,null,{default:r(()=>[s(c,{fab:"","label-position":"right",color:"primary",icon:"fit_screen",onClick:this.cycleFitMode,padding:"sm"},{default:r(()=>[s(m,null,{default:r(()=>[o("Cycle through image-fit modes")]),_:1})]),_:1},8,["onClick"]),s(c,{fab:"","label-position":"right",color:"primary",icon:"article",onClick:this.toggleText,padding:"sm"},{default:r(()=>[s(m,null,{default:r(()=>[o("Show/Hide paragraph text in order to get"),H,o("better view of image.")]),_:1})]),_:1},8,["onClick"]),s(c,{fab:"","label-position":"right",color:"primary",icon:"title",onClick:this.setCover,padding:"sm"},{default:r(()=>[s(m,null,{default:r(()=>[o("Set current image as Cover Image for current assignment,"),z,o("if there is an assignment currently loaded.")]),_:1})]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}var K=v(j,[["render",J]]);const L=C({name:"EditorPage",components:{EditorComponent:K},setup(t){const e=x();return{props:t,reStore:e}}});function W(t,e,g,i,l,I){const u=R("EditorComponent");return h(),D(b,{id:"QPage",class:"row justify-center"},{default:r(()=>[s(u)]),_:1})}var le=v(L,[["render",W]]);export{le as default};
