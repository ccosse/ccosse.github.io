import{Q as b}from"./QPage.b647c848.js";import{u as v,s as y,a as S}from"./re-store.c9ac0f42.js";import{Q as k}from"./QImg.ec78ab4f.js";import{g as E,h as w,i as B,j as T,d as C,r as d,v as Q,_ as I,o as p,ag as f,a as s,w as r,e as a,aj as l,af as o,Q as n,ak as $,ah as F,c as q,f as D}from"./index.a4963e4e.js";import{Q as x}from"./QPageSticky.7a17a447.js";import{Q as h}from"./QTooltip.3e48b6ef.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";import"./selection.dc000e83.js";import"./scroll.4b3904bd.js";import"./use-portal.5ff5cfe5.js";var _=E({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(t,{slots:e}){const c=w(()=>{const g=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(i=>t[i]===!0).map(i=>`q-btn-group--${i}`).join(" ");return`q-btn-group row no-wrap${g.length>0?" "+g:""}`+(t.spread===!0?" q-btn-group--spread":" inline")});return()=>B("div",{class:c.value},T(e.default))}});const P=C({name:"EditorComponent",props:{},setup(t){const e=v();return{props:t,reStore:e,imgCap:d(""),imgSrc:d(""),imgFit:d(""),pageText:d("")}},mounted(){console.log("EditorComponent.mounted"),Q(this.reStore.courses,async(c,g)=>{console.log("Editor.watch"),this.reStore.courses.ck,this.reStore.courses.aid,this.reStore.courses.pgIdx;const i=this.reStore.courses.imgIdx;try{this.imgFit=this.reStore.page.imgFit,this.pageText=this.reStore.page.pageText,this.reStore.page.imgs.length&&(this.imgSrc=this.reStore.page.imgs[i].url,this.imgCap=this.reStore.page.imgs[i].cap)}catch(m){console.log("ERROR Editor watch ",m,i,this.reStore.page.imgs),this.imgSrc=this.reStore.page.imgs[0].url,this.imgCap=this.reStore.page.imgs[0].cap}},{immediate:!0,deep:!0});const t=this.reStore.courses.ck;this.reStore.courses.aid,this.reStore.courses.pgIdx;const e=this.reStore.courses.imgIdx;try{this.imgFit=this.reStore.page.imgFit,this.pageText=this.reStore.page.pageText,this.imgSrc=this.reStore.page.imgs[e].url,this.imgCap=this.reStore.page.imgs[e].cap}catch(c){console.log("ERROR Editor mounted",c)}t&&this.reStore.loadCover()},methods:{prevImg(){this.reStore.page.imgIdx=this.reStore.page.imgIdx-1<0?this.reStore.page.imgs.length-1:this.reStore.page.imgIdx-1,this.reStore.courses.imgIdx=this.reStore.page.imgIdx,this.reStore.setStatus("imgIdx",this.imgIdx),this.imgSrc=this.reStore.page.imgs[this.reStore.courses.imgIdx].url,this.imgCap=this.reStore.page.imgs[this.reStore.courses.imgIdx].cap},nextImg(){this.reStore.page.imgIdx=this.reStore.page.imgIdx+1>this.reStore.page.imgs.length-1?0:this.reStore.page.imgIdx+1,this.reStore.courses.imgIdx=this.reStore.page.imgIdx,this.reStore.setStatus("imgIdx",this.reStore.courses.imgIdx),this.imgSrc=this.reStore.page.imgs[this.reStore.courses.imgIdx].url,this.imgCap=this.reStore.page.imgs[this.reStore.courses.imgIdx].cap},toggleText(){y("#slideTextDiv").classed("hidden")?S("#slideTextDiv").classed("hidden",!1):S("#slideTextDiv").classed("hidden",!0)},cycleFitMode(){const t=["scale-down","cover"];let e=t.indexOf(this.imgFit);e+=1,e>t.length-1&&(e=0),this.reStore.page.imgFit=t[e],this.reStore.courses.trigger+=1},setCover(){this.reStore.courses.ck,this.reStore.courses.aid,this.reStore.courses.pgIdx;const t=this.reStore.courses.imgIdx,e=this.reStore.page.imgs[t].url;this.reStore.setCover(this.reStore.page.imgs[t]),console.log("coverUrl ",e)}}}),R={id:"slideCaptionDiv",class:"absolute-top text-subtitle1 text-center q-my-xl assignment",contentEditable:"true"},j={id:"slideTextDiv",class:"text-panel text-center absolute-center assignment",contentEditable:"true"},O={key:0},V={id:"coverSlideDiv",class:"flex flex-center cover-panel absolute-center coverslide",contentEditable:"false"},N={class:"q-ma-md"},z=a("br",null,null,-1),A=a("br",null,null,-1),G={class:"q-ma-md"},M=a("br",null,null,-1),U=a("br",null,null,-1);function H(t,e,c,g,i,m){return p(),f(F,null,[s(k,{class:"fixed-center",src:this.imgSrc,fit:this.imgFit,height:"100%"},{default:r(()=>[a("div",R,l(this.imgCap),1)]),_:1},8,["src","fit"]),a("div",j,l(this.pageText),1),this.reStore.courses.aid?(p(),f("span",O,[a("div",V,[a("div",N,[s(n,{style:{width:"200px",height:"200px","font-size":"12pt"},color:"primary"},{default:r(()=>[o(l(this.reStore.courses[this.reStore.courses.ck].assignments[this.reStore.courses.aid].title)+" ",1),z,o(" "+l(this.reStore.courses[this.reStore.courses.ck].assignments[this.reStore.courses.aid].pages.length)+" Pages ",1),A,o(" "+l(this.reStore.courses[this.reStore.courses.ck].assignments[this.reStore.courses.aid].goal)+" Points ",1)]),_:1})]),a("div",G,[s(n,{style:{width:"200px",height:"200px","font-size":"24pt"},stack:"",size:"xl","icon-right":"play_circle","text-color":"white",color:"primary",onClick:e[0]||(e[0]=u=>this.reStore.startAssignment())},{default:r(()=>[o("Start")]),_:1})])])])):$("",!0),s(x,{position:"bottom",offset:[0,10],class:"assignment"},{default:r(()=>[s(_,null,{default:r(()=>[s(n,{fab:"","label-position":"left",color:"primary",icon:"arrow_left",onClick:this.prevImg,padding:"sm"},null,8,["onClick"]),s(n,{color:"primary"},{default:r(()=>[o(l(this.reStore.courses.imgIdx+1)+"/"+l(this.reStore.page.imgs.length),1)]),_:1}),s(n,{fab:"","label-position":"right",color:"primary",icon:"arrow_right",onClick:this.nextImg,padding:"sm"},null,8,["onClick"])]),_:1})]),_:1}),s(x,{position:"bottom",offset:[0,60],class:"assignment"},{default:r(()=>[s(_,null,{default:r(()=>[s(n,{fab:"","label-position":"right",color:"primary",icon:"fit_screen",onClick:this.cycleFitMode,padding:"sm"},{default:r(()=>[s(h,null,{default:r(()=>[o("Cycle through image-fit modes")]),_:1})]),_:1},8,["onClick"]),s(n,{fab:"","label-position":"right",color:"primary",icon:"article",onClick:this.toggleText,padding:"sm"},{default:r(()=>[s(h,null,{default:r(()=>[o("Show/Hide paragraph text in order to get"),M,o("better view of image.")]),_:1})]),_:1},8,["onClick"]),s(n,{fab:"","label-position":"right",color:"primary",icon:"title",onClick:this.setCover,padding:"sm"},{default:r(()=>[s(h,null,{default:r(()=>[o("Set current image as Cover Image for current assignment,"),U,o("if there is an assignment currently loaded.")]),_:1})]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}var J=I(P,[["render",H]]);const K=C({name:"EditorPage",components:{EditorComponent:J},setup(t){const e=v();return{props:t,reStore:e}}});function L(t,e,c,g,i,m){const u=D("EditorComponent");return p(),q(b,{id:"QPage",class:"row justify-center"},{default:r(()=>[s(u)]),_:1})}var ne=I(K,[["render",L]]);export{ne as default};