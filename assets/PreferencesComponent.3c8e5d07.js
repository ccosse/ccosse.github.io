import{Q as v}from"./QToggle.aaaaf485.js";import{a as z,Q as F}from"./QMenu.1ecf20d8.js";import{u as b}from"./store.6a90bec8.js";import{Q as B}from"./QImg.ff12756f.js";import{Q as C}from"./QCard.f91d5d12.js";import{j as w,_ as T,k as i,m as V,n as d,X as a,G as e,F as n,W as r,p as q,s as I,q as l,H as S,U as N,r as x,P as k,a5 as $,a0 as D,Q as m}from"./index.c24fbd40.js";import{Q as y,c as Q,d as U,C as P}from"./ClosePopup.fb60b388.js";import{Q as A,a as L}from"./QSelect.89e2dce5.js";import{Q as j}from"./QExpansionItem.f5358e2c.js";import{Q as E}from"./QList.5e732847.js";import"./transform.9aa67f3e.js";import{s as u}from"./selectAll.be636dd1.js";const K=w({name:"TileComponent",props:["tileName","tileData","tileType","imgUrl","targetUrl","ck","aid","pgIdx","imgIdx"],setup(){return{store:b()}},methods:{clickCB(s,t,h,f,c,p,o,g){if(console.log("clickCB",s,t,h,f,c,p,o,g),this.store.ck=s,this.store.aid=t,this.store.pgIdx=h,o==="course")console.log("setting aid -1"),this.store.aid=null;else if(o==="assignment"){this.store.pgIdx=0,this.store.router.push("/courses/assignments");return}else if(o==="page"){this.store.pgIdx=h,this.store.router.push("/courses/assignments/pages");return}try{this.store.imgIdx=this.imgIdx,this.store.currentPage.imgIdx=this.imgIdx}catch(_){console.log(_)}c!==null?this.store.router.push(c):p!==null&&o==="image"&&(this.store.imgIdx=this.imgIdx)}}}),O={class:"text-h6 absolute-center full-width text-center"},M={key:0},R={key:1},W={key:2},G={key:3},H={key:4},X={key:5},J={key:6},Y={class:"hidden"},Z=e("tr",null,[e("th",{align:"left"},"prop"),e("th",{align:"center"},[e("b",null,"val")])],-1),ee={key:0},te=e("td",null,"ck",-1),se={key:1},oe=e("td",null,"aid",-1),le={key:2},ie=e("td",null,"pgIdx",-1),ne={key:3},re=e("td",null,"imgIdx",-1),ae={key:4},de=e("td",null,"imgUrl",-1),ue={key:5},he=e("td",null,"targetUrl",-1);function ce(s,t,h,f,c,p){return i(),V(C,{flat:"",bordered:"",class:"q-ma-md q-pa-xs cursor-pointer tile-component",onClick:t[0]||(t[0]=o=>this.clickCB(this.ck,this.aid,this.pgIdx,this.imgIdx,this.targetUrl,this.imgUrl,this.tileType,this.tileName))},{default:d(()=>[this.imgUrl?(i(),V(B,{key:0,class:"absolute-center tile-component",src:this.imgUrl,style:{opacity:"1"}},null,8,["src"])):a("",!0),e("div",O,[this.tileData.pageTitle!==null?(i(),n("div",M,r(this.tileData.pageTitle),1)):a("",!0),this.tileType=="section"?(i(),n("div",R,r(this.tileName),1)):a("",!0),this.tileType=="course"?(i(),n("div",W,[e("div",null,r(this.tileData.title),1),e("div",null,r(Object.keys(this.tileData.assignments).length)+" assignments ",1),e("div",null,r(Object.keys(this.tileData.enrollment).length)+" students",1)])):a("",!0),this.tileType=="assignment"?(i(),n("div",G,[e("div",null,r(this.tileData.title),1),e("div",null,r(this.tileData.pages.length)+" pgs",1)])):a("",!0),this.tileType==="page"?(i(),n("div",H,"Page "+r(this.pgIdx+1),1)):a("",!0),this.store.currentPage&&this.tileType=="page"?(i(),n("div",X,r(this.store.currentAssignment.pages[this.pgIdx].imgs.length)+" imgs ",1)):a("",!0),this.tileType=="image"?(i(),n("div",J,"Image "+r(this.imgIdx+1),1)):a("",!0)]),e("table",Y,[Z,this.ck?(i(),n("tr",ee,[te,e("td",null,r(this.ck),1)])):a("",!0),this.aid?(i(),n("tr",se,[oe,e("td",null,r(this.aid),1)])):a("",!0),this.pgIdx!==null?(i(),n("tr",le,[ie,e("td",null,r(this.pgIdx),1)])):a("",!0),this.imgIdx!==null?(i(),n("tr",ne,[re,e("td",null,r(this.imgIdx),1)])):a("",!0),this.imgUrl?(i(),n("tr",ae,[de,e("td",null,"..."+r(this.imgUrl.slice(-20)),1)])):a("",!0),this.targetUrl?(i(),n("tr",ue,[he,e("td",null,"..."+r(this.targetUrl.slice(-20)),1)])):a("",!0)])]),_:1})}var ge=T(K,[["render",ce]]);const me=w({name:"ImagePager",components:{TileComponent:ge},props:[],setup(){return{store:b()}},methods:{}}),pe={class:"text-panel q-ma-md text-center text-h6"},fe={key:0},_e={key:0};function xe(s,t,h,f,c,p){const o=q("TileComponent");return i(),n(S,null,[e("div",pe,[I("Images: "),this.store.currentPage?(i(),n("span",fe,r(this.store.currentPage.imgs.length),1)):a("",!0)]),l(z,{class:"hidden"},{default:d(()=>[l(v,{label:"Image Fit",modelValue:this.store.imgFit,"onUpdate:modelValue":t[0]||(t[0]=g=>this.store.imgFit=g)},null,8,["modelValue"])]),_:1}),this.store.currentPage?(i(),n("span",_e,[(i(!0),n(S,null,N(this.store.currentPage.imgs,(g,_)=>(i(),n("span",{key:_},[l(o,{tileData:g,imgUrl:g.url,targetUrl:null,ck:this.store.ck,aid:this.store.aid,pgIdx:this.store.pgIdx,imgIdx:_,tileType:"image"},null,8,["tileData","imgUrl","ck","aid","pgIdx","imgIdx"])]))),128))])):a("",!0)],64)}var Oe=T(me,[["render",xe]]);const ke=w({name:"PreferencesComponent",setup(){return{store:b(),dark:x(k.isActive),promptFontSize:x(!1),promptLanguage:x(!1),showText:x(!0)}},mounted(){},methods:{langChangeCB(s){console.log(s);const t=this.flagName;u("#sfi").classed(t,!1),console.log(this.store.langVoices),this.flagName=this.store.langVoices[s].flagName,console.log("langChangeCB",s,this.flagName),u("#sfi").classed(this.flagName,!0)},populateDemo(){console.log("populateDemo"),Object.keys(this.store.currentCourse.assignments).forEach(s=>{console.log(s),Object.keys(this.store.currentCourse.enrollment).forEach(t=>{this.store.currentCourse.assignments[s].scores||(this.store.currentCourse.assignments[s].scores={}),this.store.currentCourse.assignments[s].scores[t]=parseInt(Math.random()*100)})})},toggleText(){console.log("toggleText",this.showText),this.showText===!0?(console.log("showing text"),u(".assignment").classed("hidden",!1),u(".q-carousel__thumbnail").classed("hidden",!1)):(console.log("hiding text"),u(".assignment").classed("hidden",!0),u(".q-carousel__thumbnail").classed("hidden",!0))},toggleDark(){k.toggle(),console.log(k.isActive,this.dark),k.isActive},fontSizeCB(s){u("#sampleFontSwatch").style("font-size",s+"pt"),u("#slideTextDiv").style("font-size",s+"pt"),this.store.userSnapshot.preferences.pageFontSize=s},fsCB(){$.isActive?$.exit().then(()=>{}).catch(s=>{console.log(s)}):$.request().then(()=>{}).catch(s=>{console.log(s)})}}}),ye=e("div",{class:"text-h6"},"Reconstruct Paragraph Font Size",-1),ve=e("td",{style:{width:"60%"}},[e("div",{id:"sampleFontSwatch"},"Reading Edge!")],-1),Ce=e("div",{class:"text-h6"},"Set Language For WP",-1),$e=e("span",{class:"on-right",id:"sfi"},null,-1),Ve={width:"100%",class:"z-max"},Ie={class:"q-pa-md",style:{"max-width":"350px"}},Se={class:"text-center",style:{width:"100%"}},be={class:"text-center",style:{width:"100%"}},we={class:"text-center",style:{width:"100%"}},Te={class:"text-center",style:{width:"100%"}},De={class:"text-center q-mb-md",style:{width:"100%"}};function Qe(s,t,h,f,c,p){return i(),n(S,null,[l(U,{modelValue:s.promptFontSize,"onUpdate:modelValue":t[1]||(t[1]=o=>s.promptFontSize=o),persistent:""},{default:d(()=>[l(C,{style:{"min-width":"350px"}},{default:d(()=>[l(y,{align:"center"},{default:d(()=>[ye]),_:1}),l(y,{class:"q-pt-none",align:"center"},{default:d(()=>[e("table",null,[e("tr",null,[e("td",null,[l(A,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",modelValue:this.store.userSnapshot.preferences.pageFontSize,"onUpdate:modelValue":t[0]||(t[0]=o=>this.store.userSnapshot.preferences.pageFontSize=o),min:"0",max:"50",onDragValue:this.fontSizeCB},null,8,["thickness","modelValue","onDragValue"])]),ve])])]),_:1}),l(Q,{align:"center",class:"text-white"},{default:d(()=>[D(l(m,{outline:"",flat:"",label:"Done"},null,512),[[P]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(U,{modelValue:s.promptLanguage,"onUpdate:modelValue":t[3]||(t[3]=o=>s.promptLanguage=o),persistent:""},{default:d(()=>[l(C,{style:{"min-width":"350px"}},{default:d(()=>[l(y,null,{default:d(()=>[Ce,I(),$e]),_:1}),l(y,{class:"q-pt-none"},{default:d(()=>[e("table",Ve,[e("tr",null,[e("td",null,[l(L,{class:"z-max",outlined:"",modelValue:this.store.userSnapshot.preferences.langVoiceKey,"onUpdate:modelValue":[t[2]||(t[2]=o=>this.store.userSnapshot.preferences.langVoiceKey=o),this.langChangeCB],options:this.store.userSnapshot.preferences.langVoices},null,8,["modelValue","options","onUpdate:modelValue"])])])])]),_:1}),l(Q,{align:"right",class:"text-white"},{default:d(()=>[D(l(m,{outline:"",flat:"",label:"Done"},null,512),[[P]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e("div",Ie,[l(E,{bordered:"",class:"rounded-borders",icon:"gear"},{default:d(()=>[l(j,{label:"Preferences"},{default:d(()=>[e("div",Se,[l(v,{modelValue:s.dark,"onUpdate:modelValue":t[4]||(t[4]=o=>s.dark=o),"keep-color":"",color:"primary","unchecked-icon":"light_mode","checked-icon":"dark_mode",onClick:t[5]||(t[5]=o=>this.toggleDark()),label:"Dark Mode"},null,8,["modelValue"])]),e("div",be,[l(v,{label:"Auto-Play",modelValue:this.store.autoplay,"onUpdate:modelValue":t[6]||(t[6]=o=>this.store.autoplay=o),"keep-color":"",color:"primary"},null,8,["modelValue"])]),e("div",we,[l(v,{label:"Show Text",modelValue:this.showText,"onUpdate:modelValue":t[7]||(t[7]=o=>this.showText=o),"keep-color":"",color:"primary",onClick:t[8]||(t[8]=o=>this.toggleText())},null,8,["modelValue"])]),e("div",Te,[e("span",{class:"on-right cursor-pointer text-h6",id:"sfi",onClick:t[9]||(t[9]=o=>s.promptLanguage=!0)},[l(F,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:d(()=>[l(C,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:d(()=>[I(" Set preferred language ")]),_:1})]),_:1})])]),e("div",De,[l(m,{icon:"fullscreen",onClick:t[10]||(t[10]=o=>this.fsCB())}),l(m,{"no-caps":"",icon:"format_size",onClick:t[11]||(t[11]=o=>this.promptFontSize=!0)}),this.store.emailKey==="charlie_at_readingedge_dot_org"?(i(),V(m,{key:0,icon:"manage_accounts",onClick:t[12]||(t[12]=o=>this.populateDemo())})):a("",!0),l(m,{icon:"save",onClick:t[13]||(t[13]=o=>this.store.updateSnapshot("save-preferences",null))})])]),_:1})]),_:1})])],64)}var Me=T(ke,[["render",Qe]]);export{Oe as I,Me as P,ge as T};
