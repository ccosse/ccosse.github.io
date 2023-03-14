import{Q as k}from"./QPage.9c246829.js";import{u as _,s as u}from"./re-store.f5ffde0d.js";import{Q as y}from"./QImg.0e00d62b.js";import{c as b,a as E,h as B,d as T,e as v,r as p,u as $,_ as I,o as h,aq as S,g as t,w as i,k as a,ar as d,j as o,Q as r,aG as w,at as F,f as Q,l as P}from"./index.68e41f27.js";import{Q as n}from"./QTooltip.fcc777c8.js";import{Q as f}from"./QPageSticky.25ea257c.js";import{s as q}from"./transform.aea72fbe.js";import"./firebase.79bf92f9.js";import"./index.2cf0d985.js";import"./scroll.aa1add39.js";var x=b({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(s,{slots:e}){const m=E(()=>{const l=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(g=>s[g]===!0).map(g=>`q-btn-group--${g}`).join(" ");return`q-btn-group row no-wrap${l.length>0?" "+l:""}`+(s.spread===!0?" q-btn-group--spread":" inline")});return()=>B("div",{class:m.value},T(e.default))}});const R=v({name:"EditorComponent",props:{},setup(s){const e=_();return{props:s,reStore:e,imgCap:p(""),imgSrc:p(""),imgFit:p(""),pageText:p("")}},mounted(){console.log("EditorComponent.mounted"),$(this.reStore.courses,async(e,m)=>{console.log("Editor.watch"),e.ck,e.aid,e.pgIdx,e.imgIdx>this.reStore.page.imgs.length-1&&(e.imgIdx=0);const l=e.imgIdx;try{this.imgFit=this.reStore.page.imgFit,this.pageText=this.reStore.page.pageText,this.reStore.page.imgs.length>0?(console.log("try set editor img ",l,this.reStore.page.imgs),this.imgSrc=this.reStore.page.imgs[l].url,this.imgCap=this.reStore.page.imgs[l].cap):console.log("page doesnt have images YET")}catch(g){console.log("ERROR Editor watch ",g,l,this.reStore.page.imgs),this.imgSrc=this.reStore.page.imgs[0].url,this.imgCap=this.reStore.page.imgs[0].cap}},{immediate:!0,deep:!0}),this.reStore.courses.ck,this.reStore.courses.aid,this.reStore.courses.pgIdx;const s=this.reStore.courses.imgIdx;try{this.imgFit=this.reStore.page.imgFit,this.pageText=this.reStore.page.pageText,this.imgSrc=this.reStore.page.imgs[s].url,this.imgCap=this.reStore.page.imgs[s].cap}catch(e){console.log("ERROR Editor mounted",e)}},methods:{async reloadPage(){console.log("Editor calling reloadPage"),await this.reStore.reloadPage(),console.log("Editor page.imgs ",this.reStore.page.imgs),this.imgFit=this.reStore.page.imgFit,this.pageText=this.reStore.page.pageText,this.imgSrc=this.reStore.page.imgs[0].url,this.imgCap=this.reStore.page.imgs[0].cap},saveImageCB(){const s=this.reStore.courses.imgIdx;this.reStore.saveImage(null,this.reStore.page.imgs[s]),this.notify("Image saved to MyImages")},prevImg(){this.reStore.page.imgIdx=this.reStore.page.imgIdx-1<0?this.reStore.page.imgs.length-1:this.reStore.page.imgIdx-1,this.reStore.courses.imgIdx=this.reStore.page.imgIdx,this.reStore.setStatus("imgIdx",this.imgIdx),this.imgSrc=this.reStore.page.imgs[this.reStore.courses.imgIdx].url,this.imgCap=this.reStore.page.imgs[this.reStore.courses.imgIdx].cap},nextImg(){this.reStore.page.imgIdx=this.reStore.page.imgIdx+1>this.reStore.page.imgs.length-1?0:this.reStore.page.imgIdx+1,this.reStore.courses.imgIdx=this.reStore.page.imgIdx,this.reStore.setStatus("imgIdx",this.reStore.courses.imgIdx),this.imgSrc=this.reStore.page.imgs[this.reStore.courses.imgIdx].url,this.imgCap=this.reStore.page.imgs[this.reStore.courses.imgIdx].cap},toggleText(){q("#slideTextDiv").classed("hidden")?u("#slideTextDiv").classed("hidden",!1):u("#slideTextDiv").classed("hidden",!0)},cycleFitMode(){const s=["scale-down","cover"];let e=s.indexOf(this.imgFit);e+=1,e>s.length-1&&(e=0),this.reStore.page.imgFit=s[e],this.reStore.courses.trigger+=1},setCover(){this.reStore.courses.ck,this.reStore.courses.aid,this.reStore.courses.pgIdx;const s=this.reStore.courses.imgIdx,e=this.reStore.page.imgs[s].url;this.reStore.setCover(this.reStore.page.imgs[s]),console.log("coverUrl ",e)}}}),D={id:"slideCaptionDiv",class:"absolute-top text-subtitle1 text-center q-my-xl assignment",contentEditable:"true"},N={id:"slideTextDiv",class:"text-panel text-center absolute-center assignment",contentEditable:"true"},V={key:0},z={id:"coverSlideDiv",class:"flex flex-center cover-panel absolute-center coverslide hidden",contentEditable:"false"},G={class:"q-ma-md"},M=a("br",null,null,-1),A=a("br",null,null,-1),U={class:"q-ma-md"},W=a("br",null,null,-1),H=a("br",null,null,-1),Y=a("br",null,null,-1),J=a("br",null,null,-1);function K(s,e,m,l,g,C){return h(),S(F,null,[t(y,{class:"fixed-center",src:this.imgSrc,fit:this.imgFit,height:"100%"},{default:i(()=>[a("div",D,d(this.imgCap),1)]),_:1},8,["src","fit"]),a("div",N,d(this.pageText),1),this.reStore.courses.aid?(h(),S("span",V,[a("div",z,[a("div",G,[t(r,{style:{width:"200px",height:"200px","font-size":"12pt"},color:"primary"},{default:i(()=>[o(d(this.reStore.courses[this.reStore.courses.ck].assignments[this.reStore.courses.aid].title)+" ",1),M,o(" "+d(this.reStore.courses[this.reStore.courses.ck].assignments[this.reStore.courses.aid].pages.length)+" Pages ",1),A,o(" "+d(this.reStore.courses[this.reStore.courses.ck].assignments[this.reStore.courses.aid].goal)+" Points ",1)]),_:1})]),a("div",U,[t(r,{style:{width:"200px",height:"200px","font-size":"24pt"},stack:"",size:"xl","icon-right":"play_circle","text-color":"white",color:"primary",onClick:e[0]||(e[0]=c=>this.reStore.startAssignment())},{default:i(()=>[o("Start")]),_:1})])])])):w("",!0),t(f,{position:"bottom",offset:[0,10],class:"assignment"},{default:i(()=>[t(x,null,{default:i(()=>[t(r,{fab:"","label-position":"left",color:"primary",icon:"arrow_left",onClick:this.prevImg,padding:"sm"},{default:i(()=>[t(n,null,{default:i(()=>[o(" Previous image (same Wikipedia page) ")]),_:1})]),_:1},8,["onClick"]),t(r,{color:"primary"},{default:i(()=>[o(d(this.reStore.courses.imgIdx+1)+"/"+d(this.reStore.page.imgs.length),1)]),_:1}),t(r,{fab:"","label-position":"right",color:"primary",icon:"arrow_right",onClick:this.nextImg,padding:"sm"},null,8,["onClick"]),t(n,null,{default:i(()=>[o(" Next image (same Wikipedia page) ")]),_:1})]),_:1})]),_:1}),t(f,{position:"bottom",offset:[0,60],class:"assignment"},{default:i(()=>[t(x,null,{default:i(()=>[t(r,{fab:"","label-position":"right",color:"primary",icon:"add_photo_alternate",onClick:e[1]||(e[1]=c=>this.saveImageCB()),padding:"sm"},{default:i(()=>[t(n,null,{default:i(()=>[o("Bookmark this image")]),_:1})]),_:1}),t(r,{fab:"","label-position":"right",color:"primary",icon:"bookmark_add",onClick:e[2]||(e[2]=c=>this.reStore.saveBookmark()),padding:"sm"},{default:i(()=>[t(n,null,{default:i(()=>[o("Bookmark this page")]),_:1})]),_:1}),t(r,{fab:"","label-position":"right",color:"primary",icon:"fit_screen",onClick:this.cycleFitMode,padding:"sm"},{default:i(()=>[t(n,null,{default:i(()=>[o("Cycle through image-fit modes")]),_:1})]),_:1},8,["onClick"]),t(r,{fab:"","label-position":"right",color:"primary",icon:"article",onClick:this.toggleText,padding:"sm"},{default:i(()=>[t(n,null,{default:i(()=>[o("Show/Hide paragraph text in order to get"),W,o("better view of image.")]),_:1})]),_:1},8,["onClick"]),t(r,{fab:"","label-position":"right",color:"primary",icon:"title",onClick:this.setCover,padding:"sm"},{default:i(()=>[t(n,null,{default:i(()=>[o("Set current image as Cover Image for current assignment,"),H,o("if there is an assignment currently loaded.")]),_:1})]),_:1},8,["onClick"]),t(r,{fab:"","label-position":"right",color:"primary",icon:"volume_up",onClick:e[3]||(e[3]=c=>this.reStore.speak()),padding:"sm"},{default:i(()=>[t(n,null,{default:i(()=>[o("Speak current text")]),_:1})]),_:1}),t(r,{fab:"","label-position":"right",color:"primary",icon:"arrow_right",onClick:this.reloadPage,padding:"xs"},{default:i(()=>[t(n,null,{default:i(()=>[o(" Reload page content. If Custom then no changes."),Y,o(" If pageid, then only saved imgIdx applies."),J,o(" Else, reloads random with guid-words, if any. ")]),_:1})]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}var L=I(R,[["render",K]]);const X=v({name:"EditorPage",components:{EditorComponent:L},setup(s){const e=_();return{props:s,reStore:e}}});function Z(s,e,m,l,g,C){const c=P("EditorComponent");return h(),Q(k,{id:"QPage",class:"row justify-center"},{default:i(()=>[t(c)]),_:1})}var ne=I(X,[["render",Z]]);export{ne as default};
