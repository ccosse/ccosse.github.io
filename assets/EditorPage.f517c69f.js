import{Q as b}from"./QPage.123dba2b.js";import{u as C,s as k,a as S}from"./re-store.d4331609.js";import{Q as y}from"./QImg.d781b1cb.js";import{g as E,h as w,i as B,j as T,d as v,r as d,v as Q,_ as I,o as u,ag as f,a as t,w as r,e as i,aj as n,af as o,Q as g,ak as $,ah as F,c as D,f as R}from"./index.b48f1b2b.js";import{Q as _}from"./QPageSticky.1c3980c6.js";import{Q as h}from"./QTooltip.e9dc233a.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";import"./selection.c2947f01.js";import"./scroll.3f86a34c.js";import"./use-portal.5cfce4c0.js";var x=E({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(s,{slots:e}){const l=w(()=>{const c=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(a=>s[a]===!0).map(a=>`q-btn-group--${a}`).join(" ");return`q-btn-group row no-wrap${c.length>0?" "+c:""}`+(s.spread===!0?" q-btn-group--spread":" inline")});return()=>B("div",{class:l.value},T(e.default))}});const j=v({name:"EditorComponent",setup(){return{reStore:C(),imgCap:d(""),imgSrc:d(""),imgFit:d(""),pageText:d("")}},mounted(){console.log("EditorComponent.mounted"),Q(this.reStore.courses,async(l,c)=>{console.log("Editor.watch"),this.reStore.courses.ck,this.reStore.courses.aid,this.reStore.courses.pgIdx;const a=this.reStore.courses.imgIdx;try{this.imgFit=this.reStore.page.imgFit,this.pageText=this.reStore.page.pageText,this.reStore.page.imgs.length&&(this.imgSrc=this.reStore.page.imgs[a].url,this.imgCap=this.reStore.page.imgs[a].cap)}catch(m){console.log("ERROR Editor watch ",m,a,this.reStore.page.imgs),this.imgSrc=this.reStore.page.imgs[0].url,this.imgCap=this.reStore.page.imgs[0].cap}},{immediate:!0,deep:!0});const s=this.reStore.courses.ck;this.reStore.courses.aid,this.reStore.courses.pgIdx;const e=this.reStore.courses.imgIdx;try{this.imgFit=this.reStore.page.imgFit,this.pageText=this.reStore.page.pageText,this.imgSrc=this.reStore.page.imgs[e].url,this.imgCap=this.reStore.page.imgs[e].cap}catch(l){console.log("ERROR Editor mounted",l)}s&&this.reStore.loadCover()},methods:{prevImg(){this.reStore.page.imgIdx=this.reStore.page.imgIdx-1<0?this.reStore.page.imgs.length-1:this.reStore.page.imgIdx-1,this.reStore.courses.imgIdx=this.reStore.page.imgIdx,this.reStore.setStatus("imgIdx",this.imgIdx),this.imgSrc=this.reStore.page.imgs[this.reStore.courses.imgIdx].url,this.imgCap=this.reStore.page.imgs[this.reStore.courses.imgIdx].cap},nextImg(){this.reStore.page.imgIdx=this.reStore.page.imgIdx+1>this.reStore.page.imgs.length-1?0:this.reStore.page.imgIdx+1,this.reStore.courses.imgIdx=this.reStore.page.imgIdx,this.reStore.setStatus("imgIdx",this.reStore.courses.imgIdx),this.imgSrc=this.reStore.page.imgs[this.reStore.courses.imgIdx].url,this.imgCap=this.reStore.page.imgs[this.reStore.courses.imgIdx].cap},toggleText(){k("#slideTextDiv").classed("hidden")?S("#slideTextDiv").classed("hidden",!1):S("#slideTextDiv").classed("hidden",!0)},cycleFitMode(){const s=["scale-down","cover"];let e=s.indexOf(this.imgFit);e+=1,e>s.length-1&&(e=0),this.reStore.page.imgFit=s[e],this.reStore.courses.trigger+=1},setCover(){const s=this.reStore.courses.ck,e=this.reStore.courses.aid;this.reStore.courses.pgIdx;const l=this.reStore.courses.imgIdx,c=this.reStore.page.imgs[l].url;this.reStore.courses[s].assignments[e].coverUrl=c,console.log("coverUrl ",c)}}}),q={id:"slideCaptionDiv",class:"absolute-top text-subtitle1 text-center q-my-xl assignment",contentEditable:"true"},O={id:"slideTextDiv",class:"text-panel text-center absolute-center assignment",contentEditable:"true"},P={key:0},V={id:"coverSlideDiv",class:"text-panel text-center absolute-center coverslide",contentEditable:"true"},N=i("br",null,null,-1),A=i("br",null,null,-1),G=i("br",null,null,-1),U=i("br",null,null,-1),M=i("br",null,null,-1),H=i("br",null,null,-1),z=i("br",null,null,-1);function J(s,e,l,c,a,m){return u(),f(F,null,[t(y,{class:"fixed-center",src:this.imgSrc,fit:this.imgFit,height:"100%"},{default:r(()=>[i("div",q,n(this.imgCap),1)]),_:1},8,["src","fit"]),i("div",O,n(this.pageText),1),this.reStore.courses.aid?(u(),f("span",P,[i("div",V,[o(" Course: "+n(this.reStore.courses[this.reStore.courses.ck].title)+" ",1),N,o(" Assignment: "+n(this.reStore.courses[this.reStore.courses.ck].assignments[this.reStore.courses.aid].title)+" ",1),A,o(" Created: "+n(this.reStore.courses[this.reStore.courses.ck].assignments[this.reStore.courses.aid].created)+" ",1),G,o(" Owner: "+n(this.reStore.courses[this.reStore.courses.ck].assignments[this.reStore.courses.aid].owner)+" ",1),U,o(" Goal: "+n(this.reStore.courses[this.reStore.courses.ck].assignments[this.reStore.courses.aid].goal)+" ",1),M,t(g,{"icon-right":"play_circle","text-color":"white",color:"primary",onClick:e[0]||(e[0]=p=>this.reStore.startAssignment())},{default:r(()=>[o("Start")]),_:1})])])):$("",!0),t(_,{position:"bottom",offset:[0,10],class:"assignment"},{default:r(()=>[t(x,null,{default:r(()=>[t(g,{fab:"","label-position":"left",color:"primary",icon:"arrow_left",onClick:this.prevImg,padding:"sm"},null,8,["onClick"]),t(g,{color:"primary"},{default:r(()=>[o(n(this.reStore.courses.imgIdx+1)+"/"+n(this.reStore.page.imgs.length),1)]),_:1}),t(g,{fab:"","label-position":"right",color:"primary",icon:"arrow_right",onClick:this.nextImg,padding:"sm"},null,8,["onClick"])]),_:1})]),_:1}),t(_,{position:"bottom",offset:[0,60],class:"assignment"},{default:r(()=>[t(x,null,{default:r(()=>[t(g,{fab:"","label-position":"right",color:"primary",icon:"fit_screen",onClick:this.cycleFitMode,padding:"sm"},{default:r(()=>[t(h,null,{default:r(()=>[o("Cycle through image-fit modes")]),_:1})]),_:1},8,["onClick"]),t(g,{fab:"","label-position":"right",color:"primary",icon:"article",onClick:this.toggleText,padding:"sm"},{default:r(()=>[t(h,null,{default:r(()=>[o("Show/Hide paragraph text in order to get"),H,o("better view of image.")]),_:1})]),_:1},8,["onClick"]),t(g,{fab:"","label-position":"right",color:"primary",icon:"title",onClick:this.setCover,padding:"sm"},{default:r(()=>[t(h,null,{default:r(()=>[o("Set current image as Cover Image for current assignment,"),z,o("if there is an assignment currently loaded.")]),_:1})]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}var K=I(j,[["render",J]]);const L=v({name:"EditorPage",components:{EditorComponent:K},setup(s){const e=C();return{props:s,reStore:e}}});function W(s,e,l,c,a,m){const p=R("EditorComponent");return u(),D(b,{id:"QPage",class:"row justify-center"},{default:r(()=>[t(p)]),_:1})}var le=I(L,[["render",W]]);export{le as default};
