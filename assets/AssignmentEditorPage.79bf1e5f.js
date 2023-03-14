import{Q as C}from"./QPage.a6f1a6c1.js";import{u as P,s as g}from"./re-store.b0427d37.js";import{Q as $}from"./QBanner.c355382e.js";import{Q as m}from"./QTooltip.964104bb.js";import{e as x,r as A,u as N,_ as Q,o as a,f as k,w as t,k as o,g as i,an as c,ap as u,aq as f,j as l,Q as S,ar as V,as as w,i as J,at as v,l as b}from"./index.d600388f.js";import{Q as q}from"./QBtnGroup.71242921.js";import{a as I,Q as y}from"./QCardSection.cf481c09.js";import{Q as _}from"./QCard.7b650bf7.js";import{Q as T}from"./QExpansionItem.6d0615e7.js";import"./transform.aea72fbe.js";import"./firebase.79bf92f9.js";import"./index.2cf0d985.js";import"./use-dark.03719e33.js";import"./uid.667792d6.js";const U=x({name:"AssignmentEditor",setup(){return{reStore:P(),assignment:A(null)}},mounted(){console.log("AE mounted"),N(this.reStore.courses,async(e,s)=>{if(console.log("AE watcher ",e,s),this.assignment&&e.aid&&e.ck&&this.assignment.pages.length!=e[e.ck].assignments[e.aid].pages.length&&(this.assignment=JSON.parse(JSON.stringify(this.reStore.courses[e.ck].assignments[e.aid])),console.log("AE reloading assignment b/c pages.length changed")),!this.assignment||this.assignment.id!==e.aid){const h=this.reStore.courses.ck,p=this.reStore.courses.aid;this.assignment=JSON.parse(JSON.stringify(this.reStore.courses[h].assignments[p]))}});try{if(!this.assignment||this.assignment.id!==newObj.aid){const e=this.reStore.courses.ck,s=this.reStore.courses.aid;this.assignment=JSON.parse(JSON.stringify(this.reStore.courses[e].assignments[s]))}}catch(e){console.log(e)}},methods:{deletePageCB(e){},newPageCB(){console.log("AE newPageCB"),this.reStore.newPage()},async loadPageCB(e){console.log("Pager loadPageCB ",e),this.reStore.page=JSON.parse(JSON.stringify(this.assignment.pages[e])),this.reStore.courses.pgIdx=e,this.reStore.page.imgIdx=this.assignment.pages[e].imgIdx,this.reStore.courses.imgIdx=this.assignment.pages[e].imgIdx,g(".assignment").classed("hidden",!1),g(".coverslide").classed("hidden",!0),this.reStore.courses.trigger+=1},async editPageCB(e){this.reStore.page=JSON.parse(JSON.stringify(this.assignment.pages[e])),this.reStore.courses.pgIdx=e,this.reStore.page.imgIdx=this.assignment.pages[e].imgIdx,this.reStore.courses.imgIdx=this.assignment.pages[e].imgIdx,g(".assignment").classed("hidden",!1),g(".coverslide").classed("hidden",!0),this.reStore.courses.trigger+=1,this.reStore.page.isCustom||(console.log("calling restore.reloadPage"),await this.reStore.reloadPage(),this.reStore.courses.trigger+=1),this.reStore.mode==="editor"?this.reStore.router.push("/teacher/editor"):this.reStore.router.push("/teacher/assignment")},dummy(){console.log("dummy")}}}),D={class:"q-pa-md"},O={key:0,class:"text-weight-bolder text-center text-h4 q-pa-md"},z={key:0},F={class:"q-ma-sm"},G={key:0,class:"flex flex-row justify-center"},L=o("div",{class:"absolute-top text-center",style:{"background-color":"#2228",height:"100%"}},[o("div",{class:"atit"},"p00. Cover")],-1),M={class:"absolute-top text-center",style:{"background-color":"#2228",height:"100%"}},R={class:"atit"},H={style:{"font-size":"22pt",width:"100%"},class:"text-center absolute-bottom"};function K(e,s,h,p,B,E){return a(),k(C,{class:"q-gutter-md bg-primary",style:{width:"100%"}},{default:t(()=>[o("div",D,[i(T,{class:"bg-positive",modelValue:e.defaultExpanded,"onUpdate:modelValue":s[2]||(s[2]=r=>e.defaultExpanded=r)},{header:t(()=>[i($,{class:"bg-positive text-white",style:{width:"100%"}},{default:t(()=>[this.reStore.courses.ck?(a(),c("div",O," Assignment: "+u(this.reStore.courses[this.reStore.courses.ck].assignments[this.reStore.courses.aid].title),1)):f("",!0)]),_:1})]),default:t(()=>[i(_,{flat:""},{default:t(()=>[i(I,{class:"text-center",style:{fontSize:"12pt"}},{default:t(()=>[l(" Title: "),this.reStore.aid?(a(),c("span",z,u(this.reStore.courses[this.reStore.ck].assignments[this.reStore.aid].title),1)):f("",!0),o("div",F,[i(q,null,{default:t(()=>[i(S,{icon:"delete",onClick:s[0]||(s[0]=r=>this.deleteAssignmentCB(this.reStore.courses.ck))},{default:t(()=>[i(m,null,{default:t(()=>[l("Delete Assignment")]),_:1})]),_:1}),i(S,{icon:"post_add",onClick:s[1]||(s[1]=r=>this.newPageCB(this.reStore.courses.ck))},{default:t(()=>[i(m,null,{default:t(()=>[l("New Page")]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),this.assignment?(a(),c("div",G,[i(_,{class:"acard bg-primary q-ma-sm",flat:"",bordered:"",modelValue:this.assignment.pages,"onUpdate:modelValue":s[4]||(s[4]=r=>this.assignment.pages=r)},{default:t(()=>[i(y,{class:"aimg",src:this.assignment.coverUrl,onClick:s[3]||(s[3]=r=>this.reStore.loadCover())},{default:t(()=>[L]),_:1},8,["src"])]),_:1},8,["modelValue"]),(a(!0),c(V,null,w(this.assignment.pages,(r,n)=>(a(),k(_,{class:"acard bg-primary q-ma-sm",flat:"",bordered:"",modelValue:this.assignment.pages,"onUpdate:modelValue":s[7]||(s[7]=d=>this.assignment.pages=d),key:n},{default:t(()=>[i(y,{class:"aimg",src:r.imgs[r.imgIdx].url,onClick:d=>this.loadPageCB(n)},{default:t(()=>[o("div",M,[o("div",R,"p"+u(n+1)+". "+u(r.pageTitle.slice(0,10)),1)]),o("div",H,[o("div",null,[i(J,{class:"ptr",name:"delete",onClick:[s[5]||(s[5]=v(()=>{},["stop","prevent"])),d=>this.deletePageCB(n)]},{default:t(()=>[i(m,null,{default:t(()=>[l("Delete Page")]),_:1})]),_:2},1032,["onClick"]),i(S,{icon:"edit",onClick:[s[6]||(s[6]=v(()=>{},["stop","prevent"])),d=>this.editPageCB(n)]},{default:t(()=>[i(m,null,{default:t(()=>[l("Edit Page")]),_:1})]),_:2},1032,["onClick"])])])]),_:2},1032,["src","onClick"])]),_:2},1032,["modelValue"]))),128))])):f("",!0)]),_:1})}var W=Q(U,[["render",K]]);const X=x({name:"AssignmentEditorPage",components:{AssignmentEditor:W},setup(e){const s=P();return{props:e,reStore:s}}});function Y(e,s,h,p,B,E){const r=b("AssignmentEditor");return a(),k(C,{id:"QPage",class:"row justify-center"},{default:t(()=>[i(r)]),_:1})}var ce=Q(X,[["render",Y]]);export{ce as default};
