import{Q as d}from"./QCardSection.ec128f6d.js";import{Q as p}from"./QCard.1958fbd9.js";import{Q as m}from"./QImg.fd8c3e05.js";import{_ as u,d as f,v as g,o as e,c as n,w as t,E as i,a as s,G as c,V as a,F as o,ai as l,S as h,Q as _}from"./index.a75cd14a.js";import{Q as x}from"./QPage.71c951c0.js";import{u as v}from"./store.cfec8d35.js";import"./use-dark.66025dda.js";import"./firebase.f7873474.js";import"./axios.84ae42e4.js";const Q=f({name:"PageDashboard",components:{},setup(){return{store:v(),slide:g(1)}},mounted(){console.log("PageDashboard mounted",this.pageData)}}),b={key:0,class:"text-center"},k={class:"full-width text-center absolute-top"},C={key:1,id:"slideCaptionDiv",contentEditable:"true",class:"caption absolute-top q-pt-xl no-margins text-center assignment"},D={id:"slideTextDiv",class:"fixed-center text-panel text-center assignment",contenteditable:"true"},I={class:"on-right",style:{width:"100px"}};function P(y,r,B,V,$,w){return e(),n(x,{class:"flex flex-center"},{default:t(()=>[this.pgIdx?a("",!0):(e(),i("div",b,[s(p,{flat:"",bordered:"",class:"text-panel"},{default:t(()=>[s(d,null,{default:t(()=>[c(" Please select or create a page ")]),_:1})]),_:1})])),o("div",k,[this.store.currentImage!==null?(e(),n(m,{key:0,class:"fixed-center",src:this.store.currentImage.url,fit:"cover",height:"100%"},null,8,["src"])):a("",!0),this.store.currentImage.cap?(e(),i("div",C,l(this.store.currentImage.cap),1)):a("",!0),o("div",D,[c(l(this.store.currentPage.pageText)+" ",1),o("span",I,[s(_,{dense:"",round:"",class:"speak-button float-right",onClick:r[0]||(r[0]=N=>this.store.speakText())},{default:t(()=>[s(h,{name:"volume_up",size:"md"})]),_:1})])])])]),_:1})}var H=u(Q,[["render",P]]);export{H as default};
