import{Q as b}from"./QPage.1c8cc5ba.js";import{u as v,s as y,a as S}from"./re-store.ead18405.js";import{Q as k}from"./QImg.905b6be7.js";import{g as E,h as w,i as B,j as T,d as C,r as d,v as Q,_ as I,o as p,ag as f,a as t,w as r,e as a,aj as g,af as o,Q as c,ak as $,ah as F,c as q,f as D}from"./index.0e64f230.js";import{Q as x}from"./QPageSticky.a67e389d.js";import{Q as h}from"./QTooltip.0a9cd0ea.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";import"./selection.34524589.js";import"./scroll.69de0f44.js";import"./use-portal.37024928.js";var _=E({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(s,{slots:e}){const n=w(()=>{const l=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(i=>s[i]===!0).map(i=>`q-btn-group--${i}`).join(" ");return`q-btn-group row no-wrap${l.length>0?" "+l:""}`+(s.spread===!0?" q-btn-group--spread":" inline")});return()=>B("div",{class:n.value},T(e.default))}});const P=C({name:"EditorComponent",props:{},setup(s){const e=v();return{props:s,reStore:e,imgCap:d(""),imgSrc:d(""),imgFit:d(""),pageText:d("")}},mounted(){console.log("EditorComponent.mounted"),Q(this.reStore.courses,async(n,l)=>{console.log("Editor.watch"),this.reStore.courses.ck,this.reStore.courses.aid,this.reStore.courses.pgIdx;const i=this.reStore.courses.imgIdx;try{this.imgFit=this.reStore.page.imgFit,this.pageText=this.reStore.page.pageText,this.reStore.page.imgs.length&&(this.imgSrc=this.reStore.page.imgs[i].url,this.imgCap=this.reStore.page.imgs[i].cap)}catch(m){console.log("ERROR Editor watch ",m,i,this.reStore.page.imgs),this.imgSrc=this.reStore.page.imgs[0].url,this.imgCap=this.reStore.page.imgs[0].cap}},{immediate:!0,deep:!0});const s=this.reStore.courses.ck;this.reStore.courses.aid,this.reStore.courses.pgIdx;const e=this.reStore.courses.imgIdx;try{this.imgFit=this.reStore.page.imgFit,this.pageText=this.reStore.page.pageText,this.imgSrc=this.reStore.page.imgs[e].url,this.imgCap=this.reStore.page.imgs[e].cap}catch(n){console.log("ERROR Editor mounted",n)}s&&this.reStore.loadCover()},methods:{prevImg(){this.reStore.page.imgIdx=this.reStore.page.imgIdx-1<0?this.reStore.page.imgs.length-1:this.reStore.page.imgIdx-1,this.reStore.courses.imgIdx=this.reStore.page.imgIdx,this.reStore.setStatus("imgIdx",this.imgIdx),this.imgSrc=this.reStore.page.imgs[this.reStore.courses.imgIdx].url,this.imgCap=this.reStore.page.imgs[this.reStore.courses.imgIdx].cap},nextImg(){this.reStore.page.imgIdx=this.reStore.page.imgIdx+1>this.reStore.page.imgs.length-1?0:this.reStore.page.imgIdx+1,this.reStore.courses.imgIdx=this.reStore.page.imgIdx,this.reStore.setStatus("imgIdx",this.reStore.courses.imgIdx),this.imgSrc=this.reStore.page.imgs[this.reStore.courses.imgIdx].url,this.imgCap=this.reStore.page.imgs[this.reStore.courses.imgIdx].cap},toggleText(){y("#slideTextDiv").classed("hidden")?S("#slideTextDiv").classed("hidden",!1):S("#slideTextDiv").classed("hidden",!0)},cycleFitMode(){const s=["scale-down","cover"];let e=s.indexOf(this.imgFit);e+=1,e>s.length-1&&(e=0),this.reStore.page.imgFit=s[e],this.reStore.courses.trigger+=1},setCover(){const s=this.reStore.courses.ck,e=this.reStore.courses.aid;this.reStore.courses.pgIdx;const n=this.reStore.courses.imgIdx,l=this.reStore.page.imgs[n].url;this.reStore.courses[s].assignments[e].coverUrl=l,console.log("coverUrl ",l)}}}),R={id:"slideCaptionDiv",class:"absolute-top text-subtitle1 text-center q-my-xl assignment",contentEditable:"true"},j={id:"slideTextDiv",class:"text-panel text-center absolute-center assignment",contentEditable:"true"},O={key:0},V={id:"coverSlideDiv",class:"flex flex-center cover-panel absolute-center coverslide",contentEditable:"false"},N={class:"q-ma-md"},z=a("br",null,null,-1),U=a("br",null,null,-1),A={class:"q-ma-md"},G=a("br",null,null,-1),M=a("br",null,null,-1);function H(s,e,n,l,i,m){return p(),f(F,null,[t(k,{class:"fixed-center",src:this.imgSrc,fit:this.imgFit,height:"100%"},{default:r(()=>[a("div",R,g(this.imgCap),1)]),_:1},8,["src","fit"]),a("div",j,g(this.pageText),1),this.reStore.courses.aid?(p(),f("span",O,[a("div",V,[a("div",N,[t(c,{style:{width:"200px",height:"200px","font-size":"12pt"},color:"primary"},{default:r(()=>[o(g(this.reStore.courses[this.reStore.courses.ck].assignments[this.reStore.courses.aid].title)+" ",1),z,o(" "+g(this.reStore.courses[this.reStore.courses.ck].assignments[this.reStore.courses.aid].pages.length)+" Pages ",1),U,o(" "+g(this.reStore.courses[this.reStore.courses.ck].assignments[this.reStore.courses.aid].goal)+" Points ",1)]),_:1})]),a("div",A,[t(c,{style:{width:"200px",height:"200px","font-size":"24pt"},stack:"",size:"xl","icon-right":"play_circle","text-color":"white",color:"primary",onClick:e[0]||(e[0]=u=>this.reStore.startAssignment())},{default:r(()=>[o("Start")]),_:1})])])])):$("",!0),t(x,{position:"bottom",offset:[0,10],class:"assignment"},{default:r(()=>[t(_,null,{default:r(()=>[t(c,{fab:"","label-position":"left",color:"primary",icon:"arrow_left",onClick:this.prevImg,padding:"sm"},null,8,["onClick"]),t(c,{color:"primary"},{default:r(()=>[o(g(this.reStore.courses.imgIdx+1)+"/"+g(this.reStore.page.imgs.length),1)]),_:1}),t(c,{fab:"","label-position":"right",color:"primary",icon:"arrow_right",onClick:this.nextImg,padding:"sm"},null,8,["onClick"])]),_:1})]),_:1}),t(x,{position:"bottom",offset:[0,60],class:"assignment"},{default:r(()=>[t(_,null,{default:r(()=>[t(c,{fab:"","label-position":"right",color:"primary",icon:"fit_screen",onClick:this.cycleFitMode,padding:"sm"},{default:r(()=>[t(h,null,{default:r(()=>[o("Cycle through image-fit modes")]),_:1})]),_:1},8,["onClick"]),t(c,{fab:"","label-position":"right",color:"primary",icon:"article",onClick:this.toggleText,padding:"sm"},{default:r(()=>[t(h,null,{default:r(()=>[o("Show/Hide paragraph text in order to get"),G,o("better view of image.")]),_:1})]),_:1},8,["onClick"]),t(c,{fab:"","label-position":"right",color:"primary",icon:"title",onClick:this.setCover,padding:"sm"},{default:r(()=>[t(h,null,{default:r(()=>[o("Set current image as Cover Image for current assignment,"),M,o("if there is an assignment currently loaded.")]),_:1})]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}var J=I(P,[["render",H]]);const K=C({name:"EditorPage",components:{EditorComponent:J},setup(s){const e=v();return{props:s,reStore:e}}});function L(s,e,n,l,i,m){const u=D("EditorComponent");return p(),q(b,{id:"QPage",class:"row justify-center"},{default:r(()=>[t(u)]),_:1})}var ne=I(K,[["render",L]]);export{ne as default};
