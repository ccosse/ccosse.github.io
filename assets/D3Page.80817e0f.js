import{_ as i,d as l,o as c,c as d,w as e,e as a,a as s,Q as r,ag as n,f as p}from"./index.52f1596d.js";import{Q as f}from"./QPage.d63c6a29.js";import{s as m}from"./transform.aea72fbe.js";const g=l({name:"D3Page",components:{},setup(){return{}},mounted(){console.log("D3Page.mounted");var t=m("#logo_container").append("svg").attr("width",400).attr("height",400);t.append("path").attr("id","circ").attr("d","M 50,200 A 150,150 0 1,1 50,201z").style("fill","#0000"),t.append("text").append("textPath").attr("xlink:href","#circ").style("text-anchor","start").style("font-size","38pt").style("font-weight","bold").style("stroke","white").style("fill","seagreen").attr("startOffset","1%").text("Reading Proficiency"),t.append("path").attr("id","circ2").attr("d","M 380,200 A 180,180 0 1,0 380,201z").style("fill","#0000"),t.append("text").append("textPath").attr("xlink:href","#circ2").style("text-anchor","start").style("font-size","25pt").style("font-weight","bold").style("fill","seagreen").attr("startOffset","51.5%").text("Through Paragraph Reconstruction")}}),h={class:"flex fit column no-wrap justify-center items-center content-start fixed-center"},_=a("div",{id:"logo_container",class:"flex-center q-mt-sm q-gutter-sm"},null,-1),u={style:{position:"fixed",top:"55vh"},class:""};function x(t,y,v,w,P,k){const o=p("router-link");return c(),d(f,{class:"col justify-center"},{default:e(()=>[a("div",h,[_,a("div",u,[s(o,{to:"/demo",class:"q-mx-md"},{default:e(()=>[s(r,{size:"lg",outline:"",class:"bg-primary text-white"},{default:e(()=>[n("Try It")]),_:1})]),_:1}),s(o,{to:"/login",class:"q-mx-md"},{default:e(()=>[s(r,{size:"lg",outline:"",class:"bg-primary text-white"},{default:e(()=>[n("Log In")]),_:1})]),_:1})])])]),_:1})}var B=i(g,[["render",x]]);export{B as default};
