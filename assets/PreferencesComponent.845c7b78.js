import{Q as F}from"./QImg.65023761.js";import{Q as g}from"./QCard.c0eb94b6.js";import{u as T}from"./store.57ad48ec.js";import{j as D,_ as z,k as n,m as v,n as i,ab as r,s as t,F as d,aa as a,r as _,P as k,aj as b,q as s,ae as S,Q as u,G as p,H as U}from"./index.3876e0d9.js";import{Q as x,c as $,d as w,C as I}from"./ClosePopup.00294cca.js";import{Q as B,a as P}from"./QSelect.f468bc23.js";import{Q as y}from"./QToggle.e8bc90b2.js";import{Q as C}from"./QTooltip.2bc8c602.js";import{Q as N}from"./QExpansionItem.faa68882.js";import{Q as A}from"./QList.574e31b2.js";import"./transform.9aa67f3e.js";import{s as h}from"./selectAll.be636dd1.js";const j=D({name:"TileComponent",props:["tileName","tileData","tileType","imgUrl","targetUrl","ck","aid","pgIdx","imgIdx"],setup(){return{store:T()}},methods:{clickCB(l,e,c,V,m,f,o,Q){if(console.log("clickCB",l,e,c,V,m,f,o,Q),this.store.ck=l,this.store.aid=e,this.store.pgIdx=c,o==="course")console.log("setting aid -1"),this.store.aid=null,this.store.ck=l;else if(o==="assignment"){this.store.pgIdx=null,this.store.aid=e,console.log("aid",e),this.store.carousel.goTo(e),this.store.router.push("/courses/assignments");return}else if(o==="page"){this.store.pgIdx=c,this.store.carousel.goTo(c),this.store.router.push("/courses/assignments/pages");return}try{this.store.imgIdx=this.imgIdx,this.store.currentPage.imgIdx=this.imgIdx}catch(q){console.log(q)}m!==null?(console.log("pushing targetUrl",m),this.store.router.push(m)):f!==null&&o==="image"&&(this.store.imgIdx=this.imgIdx)}}}),L={class:"text-h6 absolute-center full-width text-center"},E={key:0},K={key:1},O={key:2},M={key:3},R={key:4},G={key:5},H={key:6},W={class:"hidden"},J=t("tr",null,[t("th",{align:"left"},"prop"),t("th",{align:"center"},[t("b",null,"val")])],-1),X={key:0},Y=t("td",null,"ck",-1),Z={key:1},ee=t("td",null,"aid",-1),te={key:2},se=t("td",null,"pgIdx",-1),oe={key:3},le=t("td",null,"imgIdx",-1),ie={key:4},ne=t("td",null,"imgUrl",-1),ae={key:5},re=t("td",null,"targetUrl",-1);function de(l,e,c,V,m,f){return n(),v(g,{flat:"",bordered:"",class:"q-ma-md q-pa-xs cursor-pointer tile-component",onClick:e[0]||(e[0]=o=>this.clickCB(this.ck,this.aid,this.pgIdx,this.imgIdx,this.targetUrl,this.imgUrl,this.tileType,this.tileName))},{default:i(()=>[this.imgUrl?(n(),v(F,{key:0,class:"absolute-center tile-component",src:this.imgUrl,style:{opacity:"1"}},null,8,["src"])):r("",!0),t("div",L,[this.tileData.pageTitle!==null?(n(),d("div",E,a(this.tileData.pageTitle),1)):r("",!0),this.tileType=="section"?(n(),d("div",K,a(this.tileName),1)):r("",!0),this.tileType=="course"?(n(),d("div",O,[t("div",null,a(this.tileData.title),1),t("div",null,a(Object.keys(this.tileData.assignments).length)+" assignments ",1),t("div",null,a(Object.keys(this.tileData.enrollment).length)+" students",1)])):r("",!0),this.tileType=="assignment"?(n(),d("div",M,[t("div",null,a(this.tileData.title),1),t("div",null,a(this.tileData.pages.length)+" pgs",1)])):r("",!0),this.tileType==="page"?(n(),d("div",R,"Page "+a(this.pgIdx+1),1)):r("",!0),this.store.currentPage&&this.tileType=="page"?(n(),d("div",G,a(this.store.currentAssignment.pages[this.pgIdx].imgs.length)+" imgs ",1)):r("",!0),this.tileType=="image"?(n(),d("div",H,"Image "+a(this.imgIdx+1),1)):r("",!0)]),t("table",W,[J,this.ck?(n(),d("tr",X,[Y,t("td",null,a(this.ck),1)])):r("",!0),this.aid?(n(),d("tr",Z,[ee,t("td",null,a(this.aid),1)])):r("",!0),this.pgIdx!==null?(n(),d("tr",te,[se,t("td",null,a(this.pgIdx),1)])):r("",!0),this.imgIdx!==null?(n(),d("tr",oe,[le,t("td",null,a(this.imgIdx),1)])):r("",!0),this.imgUrl?(n(),d("tr",ie,[ne,t("td",null,"..."+a(this.imgUrl.slice(-20)),1)])):r("",!0),this.targetUrl?(n(),d("tr",ae,[re,t("td",null,"..."+a(this.targetUrl.slice(-20)),1)])):r("",!0)])]),_:1})}var Be=z(j,[["render",de]]);const ue=D({name:"PreferencesComponent",setup(){return{store:T(),dark:_(k.isActive),promptFontSize:_(!1),promptLanguage:_(!1),showText:_(!0)}},mounted(){},methods:{goAdmin(){console.log("goAdmin"),this.store.router.push("/admin")},langChangeCB(l){console.log(l);const e=this.flagName;h("#sfi").classed(e,!1),console.log(this.store.langVoices),this.flagName=this.store.langVoices[l].flagName,console.log("langChangeCB",l,this.flagName),h("#sfi").classed(this.flagName,!0)},populateDemo(){console.log("populateDemo"),Object.keys(this.store.currentCourse.assignments).forEach(l=>{console.log(l),Object.keys(this.store.currentCourse.enrollment).forEach(e=>{this.store.currentCourse.assignments[l].scores||(this.store.currentCourse.assignments[l].scores={}),this.store.currentCourse.assignments[l].scores[e]=parseInt(Math.random()*100)})})},toggleText(){console.log("toggleText",this.showText),this.showText===!0?(console.log("showing text"),h(".assignment").classed("hidden",!1),h(".q-carousel__thumbnail").classed("hidden",!1)):(console.log("hiding text"),h(".assignment").classed("hidden",!0),h(".q-carousel__thumbnail").classed("hidden",!0))},toggleDark(){k.toggle(),console.log(k.isActive,this.dark),k.isActive},fontSizeCB(l){h("#sampleFontSwatch").style("font-size",l+"pt"),h("#slideTextDiv").style("font-size",l+"pt"),this.store.userSnapshot.preferences.pageFontSize=l},fsCB(){b.isActive?b.exit().then(()=>{}).catch(l=>{console.log(l)}):b.request().then(()=>{}).catch(l=>{console.log(l)})}}}),he=t("div",{class:"text-h6"},"Reconstruct Paragraph Font Size",-1),ge=t("td",{style:{width:"60%"}},[t("div",{id:"sampleFontSwatch"},"Reading Edge!")],-1),ce=t("div",{class:"text-h6"},"Set Language For WP",-1),me=t("span",{class:"on-right",id:"sfi"},null,-1),pe={width:"100%",class:"z-max"},fe={class:"q-pa-md",style:{"max-width":"350px"}},_e={class:"text-center",style:{width:"100%"}},ke={class:"text-center hidden",style:{width:"100%"}},xe={class:"text-center",style:{width:"100%"}},ye={class:"text-center",style:{width:"100%"}},Ce={class:"text-center q-mb-md",style:{width:"100%"}},ve=t("br",null,null,-1);function Ve(l,e,c,V,m,f){return n(),d(U,null,[s(w,{modelValue:l.promptFontSize,"onUpdate:modelValue":e[1]||(e[1]=o=>l.promptFontSize=o),persistent:""},{default:i(()=>[s(g,{style:{"min-width":"350px"}},{default:i(()=>[s(x,{align:"center"},{default:i(()=>[he]),_:1}),s(x,{class:"q-pt-none",align:"center"},{default:i(()=>[t("table",null,[t("tr",null,[t("td",null,[s(B,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",modelValue:this.store.userSnapshot.preferences.pageFontSize,"onUpdate:modelValue":e[0]||(e[0]=o=>this.store.userSnapshot.preferences.pageFontSize=o),min:"0",max:"50",onDragValue:this.fontSizeCB},null,8,["thickness","modelValue","onDragValue"])]),ge])])]),_:1}),s($,{align:"center",class:"text-white"},{default:i(()=>[S(s(u,{outline:"",flat:"",label:"Done"},null,512),[[I]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(w,{modelValue:l.promptLanguage,"onUpdate:modelValue":e[3]||(e[3]=o=>l.promptLanguage=o),persistent:""},{default:i(()=>[s(g,{style:{"min-width":"350px"}},{default:i(()=>[s(x,null,{default:i(()=>[ce,p(),me]),_:1}),s(x,{class:"q-pt-none"},{default:i(()=>[t("table",pe,[t("tr",null,[t("td",null,[s(P,{class:"z-max",outlined:"",modelValue:this.store.userSnapshot.preferences.langVoiceKey,"onUpdate:modelValue":[e[2]||(e[2]=o=>this.store.userSnapshot.preferences.langVoiceKey=o),this.langChangeCB],options:this.store.userSnapshot.preferences.langVoices},null,8,["modelValue","options","onUpdate:modelValue"])])])])]),_:1}),s($,{align:"right",class:"text-white"},{default:i(()=>[S(s(u,{outline:"",flat:"",label:"Done"},null,512),[[I]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t("div",fe,[s(A,{bordered:"",class:"rounded-borders",icon:"gear"},{default:i(()=>[s(N,{label:"Preferences"},{default:i(()=>[t("div",_e,[s(y,{modelValue:l.dark,"onUpdate:modelValue":e[4]||(e[4]=o=>l.dark=o),"keep-color":"",color:"primary","unchecked-icon":"light_mode","checked-icon":"dark_mode",onClick:e[5]||(e[5]=o=>this.toggleDark()),label:"Dark Mode"},null,8,["modelValue"])]),t("div",ke,[s(y,{label:"Auto-Play",modelValue:this.store.autoplay,"onUpdate:modelValue":e[6]||(e[6]=o=>this.store.autoplay=o),"keep-color":"",color:"primary"},null,8,["modelValue"])]),t("div",xe,[s(y,{label:"Image  Fit ",modelValue:this.store.imgFit,"onUpdate:modelValue":e[7]||(e[7]=o=>this.store.imgFit=o),"keep-color":"",color:"primary"},null,8,["modelValue"])]),t("div",ye,[s(y,{label:"Show Text",modelValue:this.showText,"onUpdate:modelValue":e[8]||(e[8]=o=>this.showText=o),"keep-color":"",color:"primary",onClick:e[9]||(e[9]=o=>this.toggleText())},null,8,["modelValue"])]),t("div",Ce,[s(u,{"no-padding":""},{default:i(()=>[t("span",{id:"sfi",onClick:e[10]||(e[10]=o=>l.promptLanguage=!0)}),s(C,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:i(()=>[s(g,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:i(()=>[p(" Set preferred language ")]),_:1})]),_:1})]),_:1}),s(u,{icon:"fullscreen",onClick:e[11]||(e[11]=o=>this.fsCB())},{default:i(()=>[s(C,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:i(()=>[s(g,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:i(()=>[p(" Fullscreen ")]),_:1})]),_:1})]),_:1}),s(u,{"no-caps":"",icon:"format_size",onClick:e[12]||(e[12]=o=>this.promptFontSize=!0)},{default:i(()=>[s(C,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:i(()=>[s(g,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:i(()=>[p(" Set preferred default font size"),ve,p("Can be overridden per-page, also ")]),_:1})]),_:1})]),_:1}),this.store.emailKey==="charlie_at_readingedge_dot_org"?(n(),v(u,{key:0,icon:"manage_accounts",onClick:e[13]||(e[13]=o=>this.populateDemo())})):r("",!0),this.store.emailKey==="charlie_at_readingedge_dot_org"?(n(),v(u,{key:1,icon:"settings",onClick:e[14]||(e[14]=o=>this.goAdmin())})):r("",!0),s(u,{icon:"save",onClick:e[15]||(e[15]=o=>this.store.updateSnapshot("save-preferences",null))},{default:i(()=>[s(C,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:i(()=>[s(g,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:i(()=>[p(" Save preferences ")]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})])],64)}var Pe=z(ue,[["render",Ve]]);export{Pe as P,Be as T};
