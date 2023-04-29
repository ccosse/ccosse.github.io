import{Q as k}from"./QToggle.bdc57a8b.js";import{Q as b}from"./QBar.612da1c8.js";import{u as C}from"./store.c1483a62.js";import{Q}from"./QImg.9e541e50.js";import{Q as D}from"./QCard.070a0b22.js";import{d as $,_ as T,o as i,c as V,w as d,X as a,F as e,E as l,W as r,r as P,G as S,a as n,H as I,U,v as y,P as f,a5 as v,a0 as F,Q as x}from"./index.43a60eba.js";import{Q as w,c as z,d as B,C as q}from"./ClosePopup.e12524c9.js";import{Q as A}from"./QItemLabel.7c0e2f95.js";import{Q as N}from"./QExpansionItem.e24863a6.js";import{Q as E}from"./QList.f94978fa.js";import"./transform.9aa67f3e.js";import{s as m}from"./selectAll.be636dd1.js";const j=$({name:"TileComponent",props:["tileName","tileData","tileType","imgUrl","targetUrl","ck","aid","pgIdx","imgIdx"],setup(){return{store:C()}},methods:{clickCB(o,t,u,p,c,g,s,h){if(console.log("clickCB",o,t,u,p,c,g,s,h),this.store.ck=o,this.store.aid=t,this.store.pgIdx=u,s==="course")console.log("setting aid -1"),this.store.aid=-1;else if(s==="assignment"){this.store.pgIdx=0,this.store.router.push("/courses/assignments");return}else if(s==="page"){this.store.pgIdx=u,this.store.router.push("/courses/assignments/pages");return}try{this.store.imgIdx=this.imgIdx,this.store.currentPage.imgIdx=this.imgIdx}catch(_){console.log(_)}c!==null?this.store.router.push(c):g!==null&&s==="image"&&(this.store.imgIdx=this.imgIdx)}}}),O={class:"text-h6 absolute-center full-width text-center"},L={key:0},M={key:1},R={key:2},G={key:3},H={key:4},K={key:5},W={key:6},X={class:"hidden"},J=e("tr",null,[e("th",{align:"left"},"prop"),e("th",{align:"center"},[e("b",null,"val")])],-1),Y={key:0},Z=e("td",null,"ck",-1),ee={key:1},te=e("td",null,"aid",-1),se={key:2},oe=e("td",null,"pgIdx",-1),ie={key:3},le=e("td",null,"imgIdx",-1),ne={key:4},re=e("td",null,"imgUrl",-1),ae={key:5},de=e("td",null,"targetUrl",-1);function ue(o,t,u,p,c,g){return i(),V(D,{flat:"",bordered:"",class:"q-ma-md q-pa-xs cursor-pointer tile-component",onClick:t[0]||(t[0]=s=>this.clickCB(this.ck,this.aid,this.pgIdx,this.imgIdx,this.targetUrl,this.imgUrl,this.tileType,this.tileName))},{default:d(()=>[this.imgUrl?(i(),V(Q,{key:0,class:"absolute-center tile-component",src:this.imgUrl,style:{opacity:"1"}},null,8,["src"])):a("",!0),e("div",O,[this.tileData.pageTitle!==null?(i(),l("div",L,r(this.tileData.pageTitle),1)):a("",!0),this.tileType=="section"?(i(),l("div",M,r(this.tileName),1)):a("",!0),this.tileType=="course"?(i(),l("div",R,[e("div",null,r(this.tileData.title),1),e("div",null,r(Object.keys(this.tileData.assignments).length)+" assignments ",1),e("div",null,r(Object.keys(this.tileData.enrollment).length)+" students",1)])):a("",!0),this.tileType=="assignment"?(i(),l("div",G,[e("div",null,r(this.tileData.title),1),e("div",null,r(this.tileData.pages.length)+" pgs",1)])):a("",!0),this.tileType==="page"?(i(),l("div",H,"Page "+r(this.pgIdx+1),1)):a("",!0),this.store.currentPage&&this.tileType=="page"?(i(),l("div",K,r(this.store.currentAssignment.pages[this.pgIdx].imgs.length)+" imgs ",1)):a("",!0),this.tileType=="image"?(i(),l("div",W,"Image "+r(this.imgIdx+1),1)):a("",!0)]),e("table",X,[J,this.ck?(i(),l("tr",Y,[Z,e("td",null,r(this.ck),1)])):a("",!0),this.aid?(i(),l("tr",ee,[te,e("td",null,r(this.aid),1)])):a("",!0),this.pgIdx!==null?(i(),l("tr",se,[oe,e("td",null,r(this.pgIdx),1)])):a("",!0),this.imgIdx!==null?(i(),l("tr",ie,[le,e("td",null,r(this.imgIdx),1)])):a("",!0),this.imgUrl?(i(),l("tr",ne,[re,e("td",null,"..."+r(this.imgUrl.slice(-20)),1)])):a("",!0),this.targetUrl?(i(),l("tr",ae,[de,e("td",null,"..."+r(this.targetUrl.slice(-20)),1)])):a("",!0)])]),_:1})}var ce=T(j,[["render",ue]]);const he=$({name:"ImagePager",components:{TileComponent:ce},props:[],setup(){return{store:C()}},methods:{}}),me={class:"text-panel q-ma-md text-center text-h6"},ge={key:0},pe={key:0};function _e(o,t,u,p,c,g){const s=P("TileComponent");return i(),l(I,null,[e("div",me,[S("Images: "),this.store.currentPage?(i(),l("span",ge,r(this.store.currentPage.imgs.length),1)):a("",!0)]),n(b,{class:"hidden"},{default:d(()=>[n(k,{label:"Image Fit",modelValue:this.store.imgFit,"onUpdate:modelValue":t[0]||(t[0]=h=>this.store.imgFit=h)},null,8,["modelValue"])]),_:1}),this.store.currentPage?(i(),l("span",pe,[(i(!0),l(I,null,U(this.store.currentPage.imgs,(h,_)=>(i(),l("span",{key:_},[n(s,{tileData:h,imgUrl:h.url,targetUrl:null,ck:this.store.ck,aid:this.store.aid,pgIdx:this.store.pgIdx,imgIdx:_,tileType:"image"},null,8,["tileData","imgUrl","ck","aid","pgIdx","imgIdx"])]))),128))])):a("",!0)],64)}var Ae=T(he,[["render",_e]]);const fe=$({name:"PreferencesComponent",setup(){return{store:C(),dark:y(f.isActive),promptFontSize:y(!1),showText:y(!0)}},mounted(){},methods:{populateDemo(){console.log("populateDemo"),Object.keys(this.store.currentCourse.assignments).forEach(o=>{console.log(o),Object.keys(this.store.currentCourse.enrollment).forEach(t=>{this.store.currentCourse.assignments[o].scores||(this.store.currentCourse.assignments[o].scores={}),this.store.currentCourse.assignments[o].scores[t]=parseInt(Math.random()*100)})})},toggleText(){console.log("toggleText",this.showText),this.showText===!0?(console.log("showing text"),m(".assignment").classed("hidden",!1),m(".q-carousel__thumbnail").classed("hidden",!1)):(console.log("hiding text"),m(".assignment").classed("hidden",!0),m(".q-carousel__thumbnail").classed("hidden",!0))},toggleDark(){f.toggle(),console.log(f.isActive,this.dark),f.isActive},fontSizeCB(o){m("#sampleFontSwatch").style("font-size",o+"pt"),m("#slideTextDiv").style("font-size",o+"pt"),this.store.userSnapshot.preferences.textFontSize=o},fsCB(){v.isActive?v.exit().then(()=>{}).catch(o=>{console.log(o)}):v.request().then(()=>{}).catch(o=>{console.log(o)})}}}),xe=e("div",{class:"text-h6"},"Reconstruct Paragraph Font Size",-1),ke=e("td",{style:{width:"60%"}},[e("div",{id:"sampleFontSwatch"},"Reading Edge!")],-1),ye={class:"q-pa-md",style:{"max-width":"350px"}},ve={class:"text-center",style:{width:"100%"}},Ie={class:"text-center",style:{width:"100%"}},Ce={class:"text-center",style:{width:"100%"}},$e={class:"text-center q-mb-md",style:{width:"100%"}};function Te(o,t,u,p,c,g){return i(),l(I,null,[n(B,{modelValue:o.promptFontSize,"onUpdate:modelValue":t[1]||(t[1]=s=>o.promptFontSize=s),persistent:""},{default:d(()=>[n(D,{style:{"min-width":"350px"}},{default:d(()=>[n(w,{align:"center"},{default:d(()=>[xe]),_:1}),n(w,{class:"q-pt-none",align:"center"},{default:d(()=>[e("table",null,[e("tr",null,[e("td",null,[n(A,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",modelValue:this.store.userSnapshot.preferences.pageFontSize,"onUpdate:modelValue":t[0]||(t[0]=s=>this.store.userSnapshot.preferences.pageFontSize=s),min:"0",max:"50",onDragValue:this.fontSizeCB},null,8,["thickness","modelValue","onDragValue"])]),ke])])]),_:1}),n(z,{align:"center",class:"text-white"},{default:d(()=>[F(n(x,{outline:"",flat:"",label:"Done"},null,512),[[q]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e("div",ye,[n(E,{bordered:"",class:"rounded-borders",icon:"gear"},{default:d(()=>[n(N,{label:"Preferences"},{default:d(()=>[e("div",ve,[n(k,{modelValue:o.dark,"onUpdate:modelValue":t[2]||(t[2]=s=>o.dark=s),"keep-color":"",color:"primary","unchecked-icon":"light_mode","checked-icon":"dark_mode",onClick:t[3]||(t[3]=s=>this.toggleDark()),label:"Dark Mode"},null,8,["modelValue"])]),e("div",Ie,[n(k,{label:"Auto-Play",modelValue:this.store.autoplay,"onUpdate:modelValue":t[4]||(t[4]=s=>this.store.autoplay=s),"keep-color":"",color:"primary"},null,8,["modelValue"])]),e("div",Ce,[n(k,{label:"Show Text",modelValue:this.showText,"onUpdate:modelValue":t[5]||(t[5]=s=>this.showText=s),"keep-color":"",color:"primary",onClick:t[6]||(t[6]=s=>this.toggleText())},null,8,["modelValue"])]),e("div",$e,[n(x,{icon:"fullscreen",onClick:t[7]||(t[7]=s=>this.fsCB())}),n(x,{"no-caps":"",icon:"format_size",onClick:t[8]||(t[8]=s=>this.promptFontSize=!0)}),n(x,{icon:"manage_accounts",onClick:t[9]||(t[9]=s=>this.populateDemo())})])]),_:1})]),_:1})])],64)}var Ne=T(fe,[["render",Te]]);export{Ae as I,Ne as P,ce as T};