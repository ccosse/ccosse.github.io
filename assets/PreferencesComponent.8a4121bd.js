import{Q as x}from"./QToggle.75a270b8.js";import{Q as q}from"./rtl.befd9f38.js";import{u as w}from"./store.7d453701.js";import{Q as P}from"./QImg.d81d5723.js";import{Q as c}from"./QCard.3ac0a95a.js";import{j as T,_ as D,k as n,m as I,n as i,ab as d,s as t,F as a,aa as r,p as B,G as h,q as s,H as S,a8 as N,r as C,P as v,aj as b,ae as Q,Q as m}from"./index.b1c6928e.js";import{Q as $,c as U,d as z,C as F}from"./ClosePopup.672cdd7f.js";import{Q as A,a as L}from"./QSelect.02a8b29d.js";import{Q as V}from"./QTooltip.f5608c6e.js";import{Q as j}from"./QExpansionItem.bbdfccc0.js";import{Q as E}from"./QList.8665ea87.js";import"./transform.9aa67f3e.js";import{s as u}from"./selectAll.be636dd1.js";const K=T({name:"TileComponent",props:["tileName","tileData","tileType","imgUrl","targetUrl","ck","aid","pgIdx","imgIdx"],setup(){return{store:w()}},methods:{clickCB(l,e,g,k,p,_,o,f){if(console.log("clickCB",l,e,g,k,p,_,o,f),this.store.ck=l,this.store.aid=e,this.store.pgIdx=g,o==="course")console.log("setting aid -1"),this.store.aid=null;else if(o==="assignment"){this.store.pgIdx=0,this.store.router.push("/courses/assignments");return}else if(o==="page"){this.store.pgIdx=g,this.store.router.push("/courses/assignments/pages");return}try{this.store.imgIdx=this.imgIdx,this.store.currentPage.imgIdx=this.imgIdx}catch(y){console.log(y)}p!==null?this.store.router.push(p):_!==null&&o==="image"&&(this.store.imgIdx=this.imgIdx)}}}),O={class:"text-h6 absolute-center full-width text-center"},M={key:0},R={key:1},G={key:2},H={key:3},W={key:4},J={key:5},X={key:6},Y={class:"hidden"},Z=t("tr",null,[t("th",{align:"left"},"prop"),t("th",{align:"center"},[t("b",null,"val")])],-1),ee={key:0},te=t("td",null,"ck",-1),se={key:1},oe=t("td",null,"aid",-1),le={key:2},ie=t("td",null,"pgIdx",-1),ne={key:3},ae=t("td",null,"imgIdx",-1),re={key:4},de=t("td",null,"imgUrl",-1),ue={key:5},me=t("td",null,"targetUrl",-1);function ce(l,e,g,k,p,_){return n(),I(c,{flat:"",bordered:"",class:"q-ma-md q-pa-xs cursor-pointer tile-component",onClick:e[0]||(e[0]=o=>this.clickCB(this.ck,this.aid,this.pgIdx,this.imgIdx,this.targetUrl,this.imgUrl,this.tileType,this.tileName))},{default:i(()=>[this.imgUrl?(n(),I(P,{key:0,class:"absolute-center tile-component",src:this.imgUrl,style:{opacity:"1"}},null,8,["src"])):d("",!0),t("div",O,[this.tileData.pageTitle!==null?(n(),a("div",M,r(this.tileData.pageTitle),1)):d("",!0),this.tileType=="section"?(n(),a("div",R,r(this.tileName),1)):d("",!0),this.tileType=="course"?(n(),a("div",G,[t("div",null,r(this.tileData.title),1),t("div",null,r(Object.keys(this.tileData.assignments).length)+" assignments ",1),t("div",null,r(Object.keys(this.tileData.enrollment).length)+" students",1)])):d("",!0),this.tileType=="assignment"?(n(),a("div",H,[t("div",null,r(this.tileData.title),1),t("div",null,r(this.tileData.pages.length)+" pgs",1)])):d("",!0),this.tileType==="page"?(n(),a("div",W,"Page "+r(this.pgIdx+1),1)):d("",!0),this.store.currentPage&&this.tileType=="page"?(n(),a("div",J,r(this.store.currentAssignment.pages[this.pgIdx].imgs.length)+" imgs ",1)):d("",!0),this.tileType=="image"?(n(),a("div",X,"Image "+r(this.imgIdx+1),1)):d("",!0)]),t("table",Y,[Z,this.ck?(n(),a("tr",ee,[te,t("td",null,r(this.ck),1)])):d("",!0),this.aid?(n(),a("tr",se,[oe,t("td",null,r(this.aid),1)])):d("",!0),this.pgIdx!==null?(n(),a("tr",le,[ie,t("td",null,r(this.pgIdx),1)])):d("",!0),this.imgIdx!==null?(n(),a("tr",ne,[ae,t("td",null,r(this.imgIdx),1)])):d("",!0),this.imgUrl?(n(),a("tr",re,[de,t("td",null,"..."+r(this.imgUrl.slice(-20)),1)])):d("",!0),this.targetUrl?(n(),a("tr",ue,[me,t("td",null,"..."+r(this.targetUrl.slice(-20)),1)])):d("",!0)])]),_:1})}var he=D(K,[["render",ce]]);const ge=T({name:"ImagePager",components:{TileComponent:he},props:[],setup(){return{store:w()}},methods:{}}),pe={class:"text-panel q-ma-md text-center text-h6"},fe={key:0},_e={key:0};function xe(l,e,g,k,p,_){const o=B("TileComponent");return n(),a(S,null,[t("div",pe,[h("Images: "),this.store.currentPage?(n(),a("span",fe,r(this.store.currentPage.imgs.length),1)):d("",!0)]),s(q,{class:"hidden"},{default:i(()=>[s(x,{label:"Image Fit",modelValue:this.store.imgFit,"onUpdate:modelValue":e[0]||(e[0]=f=>this.store.imgFit=f)},null,8,["modelValue"])]),_:1}),this.store.currentPage?(n(),a("span",_e,[(n(!0),a(S,null,N(this.store.currentPage.imgs,(f,y)=>(n(),a("span",{key:y},[s(o,{tileData:f,imgUrl:f.url,targetUrl:null,ck:this.store.ck,aid:this.store.aid,pgIdx:this.store.pgIdx,imgIdx:y,tileType:"image"},null,8,["tileData","imgUrl","ck","aid","pgIdx","imgIdx"])]))),128))])):d("",!0)],64)}var Re=D(ge,[["render",xe]]);const ke=T({name:"PreferencesComponent",setup(){return{store:w(),dark:C(v.isActive),promptFontSize:C(!1),promptLanguage:C(!1),showText:C(!0)}},mounted(){},methods:{langChangeCB(l){console.log(l);const e=this.flagName;u("#sfi").classed(e,!1),console.log(this.store.langVoices),this.flagName=this.store.langVoices[l].flagName,console.log("langChangeCB",l,this.flagName),u("#sfi").classed(this.flagName,!0)},populateDemo(){console.log("populateDemo"),Object.keys(this.store.currentCourse.assignments).forEach(l=>{console.log(l),Object.keys(this.store.currentCourse.enrollment).forEach(e=>{this.store.currentCourse.assignments[l].scores||(this.store.currentCourse.assignments[l].scores={}),this.store.currentCourse.assignments[l].scores[e]=parseInt(Math.random()*100)})})},toggleText(){console.log("toggleText",this.showText),this.showText===!0?(console.log("showing text"),u(".assignment").classed("hidden",!1),u(".q-carousel__thumbnail").classed("hidden",!1)):(console.log("hiding text"),u(".assignment").classed("hidden",!0),u(".q-carousel__thumbnail").classed("hidden",!0))},toggleDark(){v.toggle(),console.log(v.isActive,this.dark),v.isActive},fontSizeCB(l){u("#sampleFontSwatch").style("font-size",l+"pt"),u("#slideTextDiv").style("font-size",l+"pt"),this.store.userSnapshot.preferences.pageFontSize=l},fsCB(){b.isActive?b.exit().then(()=>{}).catch(l=>{console.log(l)}):b.request().then(()=>{}).catch(l=>{console.log(l)})}}}),ye=t("div",{class:"text-h6"},"Reconstruct Paragraph Font Size",-1),Ce=t("td",{style:{width:"60%"}},[t("div",{id:"sampleFontSwatch"},"Reading Edge!")],-1),ve=t("div",{class:"text-h6"},"Set Language For WP",-1),$e=t("span",{class:"on-right",id:"sfi"},null,-1),Ve={width:"100%",class:"z-max"},be={class:"q-pa-md",style:{"max-width":"350px"}},Ie={class:"text-center",style:{width:"100%"}},Se={class:"text-center hidden",style:{width:"100%"}},we={class:"text-center",style:{width:"100%"}},Te={class:"text-center",style:{width:"100%"}},De={class:"text-center q-mb-md",style:{width:"100%"}},Qe=t("br",null,null,-1);function Ue(l,e,g,k,p,_){return n(),a(S,null,[s(z,{modelValue:l.promptFontSize,"onUpdate:modelValue":e[1]||(e[1]=o=>l.promptFontSize=o),persistent:""},{default:i(()=>[s(c,{style:{"min-width":"350px"}},{default:i(()=>[s($,{align:"center"},{default:i(()=>[ye]),_:1}),s($,{class:"q-pt-none",align:"center"},{default:i(()=>[t("table",null,[t("tr",null,[t("td",null,[s(A,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",modelValue:this.store.userSnapshot.preferences.pageFontSize,"onUpdate:modelValue":e[0]||(e[0]=o=>this.store.userSnapshot.preferences.pageFontSize=o),min:"0",max:"50",onDragValue:this.fontSizeCB},null,8,["thickness","modelValue","onDragValue"])]),Ce])])]),_:1}),s(U,{align:"center",class:"text-white"},{default:i(()=>[Q(s(m,{outline:"",flat:"",label:"Done"},null,512),[[F]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(z,{modelValue:l.promptLanguage,"onUpdate:modelValue":e[3]||(e[3]=o=>l.promptLanguage=o),persistent:""},{default:i(()=>[s(c,{style:{"min-width":"350px"}},{default:i(()=>[s($,null,{default:i(()=>[ve,h(),$e]),_:1}),s($,{class:"q-pt-none"},{default:i(()=>[t("table",Ve,[t("tr",null,[t("td",null,[s(L,{class:"z-max",outlined:"",modelValue:this.store.userSnapshot.preferences.langVoiceKey,"onUpdate:modelValue":[e[2]||(e[2]=o=>this.store.userSnapshot.preferences.langVoiceKey=o),this.langChangeCB],options:this.store.userSnapshot.preferences.langVoices},null,8,["modelValue","options","onUpdate:modelValue"])])])])]),_:1}),s(U,{align:"right",class:"text-white"},{default:i(()=>[Q(s(m,{outline:"",flat:"",label:"Done"},null,512),[[F]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t("div",be,[s(E,{bordered:"",class:"rounded-borders",icon:"gear"},{default:i(()=>[s(j,{label:"Preferences"},{default:i(()=>[t("div",Ie,[s(x,{modelValue:l.dark,"onUpdate:modelValue":e[4]||(e[4]=o=>l.dark=o),"keep-color":"",color:"primary","unchecked-icon":"light_mode","checked-icon":"dark_mode",onClick:e[5]||(e[5]=o=>this.toggleDark()),label:"Dark Mode"},null,8,["modelValue"])]),t("div",Se,[s(x,{label:"Auto-Play",modelValue:this.store.autoplay,"onUpdate:modelValue":e[6]||(e[6]=o=>this.store.autoplay=o),"keep-color":"",color:"primary"},null,8,["modelValue"])]),t("div",we,[s(x,{label:"Image  Fit ",modelValue:this.store.imgFit,"onUpdate:modelValue":e[7]||(e[7]=o=>this.store.imgFit=o),"keep-color":"",color:"primary"},null,8,["modelValue"])]),t("div",Te,[s(x,{label:"Show Text",modelValue:this.showText,"onUpdate:modelValue":e[8]||(e[8]=o=>this.showText=o),"keep-color":"",color:"primary",onClick:e[9]||(e[9]=o=>this.toggleText())},null,8,["modelValue"])]),t("div",De,[s(m,{"no-padding":""},{default:i(()=>[t("span",{id:"sfi",onClick:e[10]||(e[10]=o=>l.promptLanguage=!0)}),s(V,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:i(()=>[s(c,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:i(()=>[h(" Set preferred language ")]),_:1})]),_:1})]),_:1}),s(m,{icon:"fullscreen",onClick:e[11]||(e[11]=o=>this.fsCB())},{default:i(()=>[s(V,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:i(()=>[s(c,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:i(()=>[h(" Fullscreen ")]),_:1})]),_:1})]),_:1}),s(m,{"no-caps":"",icon:"format_size",onClick:e[12]||(e[12]=o=>this.promptFontSize=!0)},{default:i(()=>[s(V,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:i(()=>[s(c,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:i(()=>[h(" Set preferred default font size"),Qe,h("Can be overridden per-page, also ")]),_:1})]),_:1})]),_:1}),this.store.emailKey==="charlie_at_readingedge_dot_org"?(n(),I(m,{key:0,icon:"manage_accounts",onClick:e[13]||(e[13]=o=>this.populateDemo())})):d("",!0),s(m,{icon:"save",onClick:e[14]||(e[14]=o=>this.store.updateSnapshot("save-preferences",null))},{default:i(()=>[s(V,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:i(()=>[s(c,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:i(()=>[h(" Save preferences ")]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})])],64)}var Ge=D(ke,[["render",Ue]]);export{Re as I,Ge as P,he as T};
