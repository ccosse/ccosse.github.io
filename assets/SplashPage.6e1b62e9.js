import{d as c,_ as i,r as l,o as d,E as m,F as t,a as e,w as o,Q as r,G as n,H as x,c as y}from"./index.43a60eba.js";import{Q as $}from"./QPage.00962f8c.js";import"./transform.9aa67f3e.js";import{s as k}from"./select.9628a1e9.js";var v="/assets/readingedge_nowords.25566d29.png";const w=c({name:"LogoComponent",mounted(){console.log("D3Page.mounted");const a=k("#logo_container").append("svg").attr("width",400).attr("height",400);a.append("path").attr("id","circ").attr("d","M 50,200 A 150,150 0 1,1 50,201z").style("fill","#0000"),a.append("text").append("textPath").attr("xlink:href","#circ").style("text-anchor","start").style("font-size","38pt").style("font-weight","bold").style("stroke","white").style("fill","seagreen").attr("startOffset","1%").text("Reading Proficiency"),a.append("path").attr("id","circ2").attr("d","M 380,200 A 180,180 0 1,0 380,201z").style("fill","#0000"),a.append("text").append("textPath").attr("xlink:href","#circ2").style("text-anchor","start").style("font-size","25pt").style("font-weight","bold").style("fill","seagreen").attr("startOffset","51.5%").text("Through Paragraph Reconstruction")}}),b=t("img",{class:"fixed-center",alt:"Reading Edge logo",src:v,style:{width:"360px",height:"275px",opacity:"0.8"}},null,-1),P=t("div",{class:"fixed-center",id:"logo_container"},null,-1),C={class:"fixed-center",style:{position:"fixed",top:"55vh"}};function z(a,p,_,g,f,h){const s=l("router-link");return d(),m(x,null,[b,P,t("div",C,[t("table",null,[t("tr",null,[t("td",null,[e(s,{to:"/demo",style:{textDecoration:"none",opacity:"1"}},{default:o(()=>[e(r,{size:"lg",outline:"",class:"bg-primary text-white"},{default:o(()=>[n("Try\xA0It")]),_:1})]),_:1})]),t("td",null,[e(s,{to:"/login",style:{textDecoration:"none",opacity:"1"}},{default:o(()=>[e(r,{size:"lg",outline:"",class:"bg-primary text-white"},{default:o(()=>[n("Log\xA0In")]),_:1})]),_:1})])])])])],64)}var B=i(w,[["render",z]]);const L=c({name:"SplashPage",components:{LogoComponent:B},mounted(){console.log("SplashPage mounted")}}),Q={style:{position:"absolute",top:"70vh"}},R={target:"_blank",href:"https://github.com/ccosse/ccosse.github.io#readme"};function D(a,p,_,g,f,h){const s=l("LogoComponent"),u=l("router-link");return d(),y($,{class:"flex flex-center"},{default:o(()=>[e(s),t("div",Q,[e(u,{to:"/gallery"},{default:o(()=>[e(r,{"no-caps":"",class:"text-grey"},{default:o(()=>[n(" Gallery ")]),_:1})]),_:1}),n(" \xA0 "),t("a",R,[e(r,{"no-caps":"",class:"text-grey"},{default:o(()=>[n(" ReadMe ")]),_:1})])])]),_:1})}var T=i(L,[["render",D]]);export{T as default};
