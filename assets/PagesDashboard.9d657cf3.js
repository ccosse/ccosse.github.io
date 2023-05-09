import{c as G,a as O,d as F,y as J,_ as W,j as M,r as p,w as H,k as u,F as m,q as e,n as t,H as T,p as z,aM as X,aa as w,Q as i,s as a,G as n,m as C,ae as c,ai as Q,aN as S,af as v,ac as $}from"./index.737945c7.js";import{d as k,Q as h,c as P,C as y}from"./ClosePopup.00810bb0.js";import{Q as r}from"./QCard.fb3f54b9.js";import{Q as D,a as Y}from"./QSelect.29d438f5.js";import{Q as V,a as Z}from"./QMenu.8f33888b.js";import{c as ee,Q as N,a as K,b as te,d as L}from"./copy-to-clipboard.4b51c021.js";import{Q as g}from"./QTooltip.45ff6551.js";import{b as se,Q as R}from"./QExpansionItem.e42741a1.js";import{Q as oe}from"./QPage.0c4301a4.js";import{u as le}from"./store.7b8e96c1.js";import"./transform.9aa67f3e.js";import{s as _}from"./selectAll.be636dd1.js";import{s as b}from"./select.9628a1e9.js";import"./use-prevent-scroll.3abeb51b.js";import"./scroll.e371da39.js";import"./use-timeout.56a2cb41.js";import"./use-tick.8cc6b8b2.js";import"./use-model-toggle.205c6281.js";import"./use-dark.526159b9.js";import"./TouchPan.7fdeac7d.js";import"./touch.70a9dd44.js";import"./selection.9112c3ba.js";import"./QItemLabel.f3cb10c9.js";import"./use-cache.b0833c75.js";import"./firebase.dc843dde.js";import"./axios.84ae42e4.js";var j=G({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(o,{slots:s}){const x=O(()=>{const I=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(q=>o[q]===!0).map(q=>`q-btn-group--${q}`).join(" ");return`q-btn-group row no-wrap${I.length>0?" "+I:""}`+(o.spread===!0?" q-btn-group--spread":" inline")});return()=>F("div",{class:x.value},J(s.default))}});function ae(o){return o===null||o===""?!1:(o=o.toString(),o=o.replaceAll("&nbsp;",""),o.replace(/(<([^>]+)>)/ig,""))}const ne=M({name:"PagesDashboard",setup(){return{store:le(),slide:p(0),showText:p(!1),showCap:p(!1),showGoal:p(!1),showPct:p(!1),showLanguage:p(!1),showAddImage:p(!1),confirm:p(!1),carousel:p(""),flagName:p(""),newImageUrl:p(""),langNames:p(["en","th","es","fr","it","de","zh","ja","sw","pt","ru","id","ke","pl","hi","nl"])}},mounted(){this.store.pgIdx||this.store.currentAssignment.pages.length>0&&(this.store.pgIdx=this.store.currentAssignment.pages.length-1,console.log("PagesDashboard.mounted set pgIdx",this.store.pgIdx)),this.store.carousel=this.carousel,console.log("PagesDashboard mounted setting slide ",this.store.pgIdx),this.slide=this.store.pgIdx,_("#slideTextDiv").style("font-size",this.store.userSnapshot.preferences.pageFontSize+"pt"),H(this.store.pgIdx,async(o,s)=>{console.log("PagesDashboard.watcher pgIdx ",this.store.pgIdx),this.slide=this.store.pgIdx,this.store.imgIdx=this.store.currentPage.imgIdx},{immediate:!0})},methods:{keepPage(){this.store.showPreview=!1},clearCB(){b("#pageEditTextDiv").html("")},saveTextCB(){this.store.currentPage.pageText=ae(b("#pageEditTextDiv").html())},pageTypeCB(){console.log("pageTypeCB",this.store.currentPage.pageType),this.store.currentPage.pageType===1?(console.log(this.store.currentPage.pageType),b("#textSection").classed("hidden",!0),b("#imgsSection").classed("hidden",!0),_(".guide-words").classed("hidden",!0)):this.store.currentPage.pageType===2?(console.log(this.store.currentPage.pageType),b("#textSection").classed("hidden",!0),b("#imgsSection").classed("hidden",!0),_(".guide-words").classed("hidden",!1)):this.store.currentPage.pageType===3?(console.log(this.store.currentPage.pageType),_("#slideTextDiv").attr("contenteditable",!1),_(".addImgB").classed("hidden",!0)):this.store.currentPage.pageType===4&&(console.log(this.store.currentPage.pageType),_("#slideTextDiv").attr("contenteditable",!0),_(".addImgB").classed("hidden",!1))},bookmarkImage(){this.store.saveImage()},bookmarkPage(){this.store.saveBookmark()},addImageCB(){const o={url:this.newImageUrl,cap:"Caption"};this.store.courses[this.store.ck].assignments[this.store.aid].pages[this.store.pgIdx].imgs.push(o);const s=this.store.courses[this.store.ck].assignments[this.store.aid].pages[this.store.pgIdx].imgs.length;this.store.courses[this.store.ck].assignments[this.store.aid].pages[this.store.pgIdx].imgIdx=s-1},copyImageUrl(o){ee(o),this.store.notify({msg:"Current image url copied to clipboard"})},langLinkCB(o){console.log(o.url),window.open(o.url,"_blank")},wpCB(o){const s=this.store.langVoices[this.store.currentPage.langVoiceKey].langName,x="https://"+s+".wikipedia.org/wiki?curid="+o;window.open(x,"_blank")},mapCB(){const o="https://maps.google.com/?ll="+this.store.currentPage.mapCoords.split(",")[0]+","+this.store.currentPage.mapCoords.split(",")[1];window.open(o,"_blank")},viewerCB(){console.log("AssignmentDash viewerCB setting pgIdx 0 before /viewwer"),this.store.pgIdx=0,this.store.router.replace("/viewer")},langChangeCB(o){const s=this.flagName;_(".pfi").classed(s,!1),this.flagName=this.store.langVoices[o].flagName,_(".pfi").classed(this.flagName,!0)},setAssignmentCoverURL(){try{this.store.currentAssignment.coverUrl=this.store.currentAssignment.pages[this.store.pgIdx].imgs[this.store.imgIdx].url}catch(o){console.log(o)}},editPageText(o){this.store.pgIdx=o,this.showText=!0},editImageCaption(){this.showCap=!0},incImgIdx(o){o.imgIdx+1>o.imgs.length-1?o.imgIdx=0:o.imgIdx+=1,this.store.imgIdx=o.imgIdx},decImgIdx(o){o.imgIdx-1<0?o.imgIdx=o.imgs.length-1:o.imgIdx-=1,this.store.imgIdx=o.imgIdx},test(o,s){console.log("test set ",o,s);const x=this.store.currentAssignment.pages[o];try{x.imgIdx=s}catch(I){console.log(I)}},insertPage(){const o=JSON.parse(JSON.stringify(this.store.pageTemplate));o.langVoiceKey=this.store.userSnapshot.preferences.langVoiceKey,o.pctReplace=this.store.userSnapshot.preferences.pctReplace,this.store.currentAssignment.pages.splice(this.store.pgIdx,0,o)},appendPage(){const o=JSON.parse(JSON.stringify(this.store.pageTemplate));o.langVoiceKey=this.store.userSnapshot.preferences.langVoiceKey,o.pctReplace=this.store.userSnapshot.preferences.pctReplace,this.store.currentAssignment.pages.push(o),this.carousel.goTo(this.store.currentAssignment.pages.length-1)},removePage(){this.store.currentAssignment.pages.splice(this.store.pgIdx,1),this.store.currentAssignment.pages.length===0?(this.store.pgIdx=null,console.log("this.slide ",this.slide)):this.store.currentAssignment.pages.length<=this.store.pgIdx&&(this.store.pgIdx-=1,this.slide=this.store.pgIdx)},slideChanged(o){this.store.pgIdx=o},slideTransitioned(o,s){console.log(o,s);const x=this.store.currentAssignment.pages[this.store.pgIdx].langVoiceKey;console.log("slideChanged calling langChangeCB with ",x),this.langChangeCB(x)}}}),ie=a("span",{class:"q-ml-sm"},"Confirm delete current page?",-1),re=a("div",{class:"text-h6"},"Points Goal of Assignment",-1),de=a("div",{class:"text-h6"},"Set Lang-Voice This Page",-1),ue=a("div",null," Play with this but don't save as a different language, ie change it back to whatever it originally was. This is because the Wikipedia page link is coupled to the language. By changing this you can speak English with a French accent, for example, but saving the page with a different language will prevent the page from displaying. It is left on the user to ensure the original language is ultimately saved. ",-1),ge=a("span",{class:"on-right pfi"},null,-1),ce={width:"100%",class:"z-max"},pe=a("div",{class:"text-h6"},"Percent Replace",-1),me={key:0},he={style:{"background-color":"#333"}},fe=a("td",{class:"key q-px-md"},"Course:",-1),xe={class:"val q-px-md"},_e=a("td",{class:"key q-px-md"},"Assignment:",-1),we={class:"val q-px-md"},ke=a("td",{class:"key q-px-md"},"Page:",-1),ye={class:"val q-px-md"},Ce={key:1,class:"justify-center absolute-top"},ve={class:"text-panel justify-center q-mx-md q-mb-xs q-mt-md text-h6"},be={class:"cursor-pointer"},Ie={class:"q-px-md row content-center"},Pe={key:0,id:"wpIframeDiv",class:"flex col-12 col-md-8"},Ve={class:"text-h6"},qe={key:1,class:"embed-panel col-12 col-md-10 assignment",style:{"z-index":"5",height:"10vh"}},Te={id:"pageEditTextDiv",contenteditable:"true",class:"text-white q-px-md",style:{"max-height":"25vh, overflow: 'hidden', fontSize: `${this.store.userSnapshot.preferences.pageFontSize}pt`"}},Se={style:{"text-align":"center"}},Be={class:"q-px-sm"},Ae={dense:"","no-padding":"",class:"meta-table",align:"center"},Ue=a("td",{class:"key"},"Title",-1),$e={class:"val cursor-pointer"},ze={class:"no-wrap"},Qe={class:"pageid"},De=a("td",{class:"key"},"WP id",-1),Ne={class:"val cursor-pointer"},Ke=a("td",{class:"key"},"Replace %",-1),Le={class:"val cursor-pointer"},Re=a("td",{class:"key"},"Images",-1),je={class:"val"},Ee=a("td",{class:"key"},"Language",-1),Ge={class:"pfi"},Oe=a("tr",null,[a("td",{class:"key",colSpan:"2"},"More Page Actions")],-1),Fe={colSpan:"2"},Je={class:"text-center"},We=a("br",null,null,-1),Me={class:"text-primary",colSpan:"2"},He=["onClick"],Xe={key:0,style:{cursor:"pointer"}},Ye={colSpan:"2"},Ze={style:{"text-align":"center"}},et=a("br",null,null,-1),tt={class:"control-panel q-pa-sm row no-wrap flex flex-center",style:{overflow:"auto"}},st={key:1},ot={key:2,class:"on-right flex flex-center"};function lt(o,s,x,I,q,at){const B=z("router-link"),E=z("nobr");return u(),m(T,null,[e(k,{modelValue:o.confirm,"onUpdate:modelValue":s[1]||(s[1]=l=>o.confirm=l),persistent:"",class:"z-max"},{default:t(()=>[e(r,null,{default:t(()=>[e(h,{class:"row items-center"},{default:t(()=>[e(X,{icon:"delete",color:"primary","text-color":"white"}),ie]),_:1}),e(P,{align:"right",class:"text-white"},{default:t(()=>[w(e(i,{flat:"",label:"Cancel"},null,512),[[y]]),w(e(i,{flat:"",label:"Delete",onClick:s[0]||(s[0]=l=>this.removePage())},null,512),[[y]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(k,{modelValue:o.showGoal,"onUpdate:modelValue":s[3]||(s[3]=l=>o.showGoal=l),persistent:""},{default:t(()=>[e(r,{style:{"min-width":"350px"}},{default:t(()=>[e(h,{align:"center"},{default:t(()=>[re]),_:1}),e(h,{class:"q-pt-none",align:"center"},{default:t(()=>[e(D,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",modelValue:this.store.currentAssignment.goal,"onUpdate:modelValue":s[2]||(s[2]=l=>this.store.currentAssignment.goal=l)},null,8,["thickness","modelValue"])]),_:1}),e(P,{align:"center",class:"text-white"},{default:t(()=>[w(e(i,{flat:"",label:"Done"},null,512),[[y]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(k,{modelValue:o.showLanguage,"onUpdate:modelValue":s[5]||(s[5]=l=>o.showLanguage=l),persistent:""},{default:t(()=>[e(r,{style:{"min-width":"350px"}},{default:t(()=>[e(h,null,{default:t(()=>[de,ue,ge]),_:1}),e(h,{class:"q-pt-none"},{default:t(()=>[a("table",ce,[a("tr",null,[a("td",null,[e(Y,{class:"z-max",outlined:"",modelValue:this.store.currentPage.langVoiceKey,"onUpdate:modelValue":[s[4]||(s[4]=l=>this.store.currentPage.langVoiceKey=l),this.langChangeCB],options:this.store.userSnapshot.preferences.langVoices},null,8,["modelValue","options","onUpdate:modelValue"])])])])]),_:1}),e(P,{align:"right",class:"text-white"},{default:t(()=>[w(e(i,{outline:"",flat:"",label:"Done"},null,512),[[y]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(k,{modelValue:o.showPct,"onUpdate:modelValue":s[7]||(s[7]=l=>o.showPct=l),persistent:""},{default:t(()=>[e(r,{style:{"min-width":"350px"}},{default:t(()=>[e(h,{align:"center"},{default:t(()=>[pe]),_:1}),e(h,{class:"q-pt-none",align:"center"},{default:t(()=>[e(D,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",modelValue:this.store.currentPage.pctReplace,"onUpdate:modelValue":s[6]||(s[6]=l=>this.store.currentPage.pctReplace=l)},null,8,["thickness","modelValue"])]),_:1}),e(P,{align:"center",class:"text-white"},{default:t(()=>[w(e(i,{flat:"",label:"Done"},null,512),[[y]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(k,{modelValue:o.showText,"onUpdate:modelValue":s[10]||(s[10]=l=>o.showText=l)},{default:t(()=>[a("div",null,[e(r,{class:"q-pa-md outlined q-ma-lg text-white text-center",style:{width:"400px"}},{default:t(()=>[e(V,{modelValue:this.store.currentPage.pageText,"onUpdate:modelValue":s[8]||(s[8]=l=>this.store.currentPage.pageText=l),type:"textarea",clearable:"",dense:"",autofocus:"",filled:"",autogrow:"",counter:""},null,8,["modelValue"]),e(i,{onClick:s[9]||(s[9]=l=>o.showText=!1)},{default:t(()=>[n("Close")]),_:1})]),_:1})])]),_:1},8,["modelValue"]),e(k,{modelValue:o.showCap,"onUpdate:modelValue":s[13]||(s[13]=l=>o.showCap=l)},{default:t(()=>[a("div",null,[e(r,{class:"q-pa-md outlined q-ma-lg text-white text-center",style:{width:"400px",height:"200px"}},{default:t(()=>[e(V,{modelValue:this.store.currentPage.imgs[this.store.currentPage.imgIdx].cap,"onUpdate:modelValue":s[11]||(s[11]=l=>this.store.currentPage.imgs[this.store.currentPage.imgIdx].cap=l),type:"textarea",clearable:"",dense:"",autofocus:"",counter:""},null,8,["modelValue"]),e(i,{onClick:s[12]||(s[12]=l=>o.showCap=!1)},{default:t(()=>[n("Close")]),_:1})]),_:1})])]),_:1},8,["modelValue"]),e(k,{modelValue:o.showAddImage,"onUpdate:modelValue":s[15]||(s[15]=l=>o.showAddImage=l)},{default:t(()=>[a("div",null,[e(r,{class:"q-pa-md outlined q-ma-lg text-white text-center",style:{width:"400px",height:"200px"}},{default:t(()=>[e(h,null,{default:t(()=>[n("Enter image url")]),_:1}),e(V,{modelValue:this.newImageUrl,"onUpdate:modelValue":s[14]||(s[14]=l=>this.newImageUrl=l),type:"input",clearable:"",dense:"",autofocus:"",counter:""},null,8,["modelValue"]),w((u(),C(i,null,{default:t(()=>[n("Close")]),_:1})),[[y]]),w((u(),C(i,{onClick:o.addImageCB},{default:t(()=>[n("Add")]),_:1},8,["onClick"])),[[y]])]),_:1})])]),_:1},8,["modelValue"]),e(oe,{class:"flex flex-center"},{default:t(()=>[this.store.pgIdx===null||this.store.pgIdx===-1?(u(),m("div",me,[e(r,{flat:"",bordered:"",class:"text-panel q-ma-md"},{default:t(()=>[e(h,null,{default:t(()=>[a("table",he,[a("tr",null,[fe,a("td",xe,[e(B,{to:"/courses",class:"text-white"},{default:t(()=>{var l;return[n(c((l=this.store.currentCourse)==null?void 0:l.title),1)]}),_:1})])]),a("tr",null,[_e,a("td",we,[e(B,{to:"/courses/assignments",class:"text-white"},{default:t(()=>{var l;return[n(c((l=this.store.currentAssignment)==null?void 0:l.title),1)]}),_:1})])]),a("tr",null,[ke,a("td",ye,[e(B,{to:"/courses/assignments/pages",class:"text-white"},{default:t(()=>{var l;return[n(c((l=this.store.currentPage)==null?void 0:l.pageTitle),1)]}),_:1})])])])]),_:1}),e(h,{class:"text-center"},{default:t(()=>[n(" Please select a page ")]),_:1})]),_:1})])):this.store.currentPage?(u(),m("div",Ce,[a("div",ve,[n(" Page "+c(this.store.pgIdx+1)+": ",1),a("span",be,[n(c(this.store.currentPage.pageTitle)+" ",1),e(N,{modelValue:this.store.currentPage.pageTitle,"onUpdate:modelValue":s[16]||(s[16]=l=>this.store.currentPage.pageTitle=l),"auto-save":"",style:{maxWidth:"320px"}},{default:t(l=>[e(V,{modelValue:l.value,"onUpdate:modelValue":f=>l.value=f,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:Q(l.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["modelValue"])])]),a("div",Ie,[e(K,{class:"q-mx-md q-mt-md full-width",animated:"","control-type":"arrows",ref:"carousel",modelValue:o.slide,"onUpdate:modelValue":[s[35]||(s[35]=l=>o.slide=l),this.slideChanged],infinite:"",height:"82vh",onTransition:this.slideTransitioned},{control:t(()=>[e(te,{position:"bottom",offset:[0,0]},{default:t(()=>[a("div",tt,[e(i,{push:"",round:"",class:"dash-button","text-color":"white",icon:"arrow_left",style:S({height:"33.5px",width:"33.5px"}),onClick:s[28]||(s[28]=l=>o.$refs.carousel.previous())},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Previous page ")]),_:1})]),_:1})]),_:1},8,["style"]),e(i,{push:"",round:"",class:"on-right dash-button","text-color":"white",icon:"arrow_right",style:S({height:"33.5px",width:"33.5px"}),onClick:s[29]||(s[29]=l=>o.$refs.carousel.next())},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Next page ")]),_:1})]),_:1})]),_:1},8,["style"]),this.store.currentAssignment.pages.length>0?(u(),C(i,{key:0,"no-caps":"",class:"dash-button on-right",onClick:s[30]||(s[30]=l=>this.viewerCB()),icon:"play_circle_outline"},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Test assignment in Viewer ")]),_:1})]),_:1})]),_:1})):v("",!0),this.store.role==="teacher"?(u(),m("span",st,[e(i,{"no-caps":"",icon:"add",class:"dash-button on-right",onClick:s[31]||(s[31]=l=>this.appendPage())},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Append a new page ")]),_:1})]),_:1})]),_:1})])):v("",!0),this.store.currentPage?(u(),m("span",ot,[e(K,{class:"hidden",infinite:"",thumbnails:"","navigation-position":"top",style:{backgroundColor:"#3330",height:"44px",width:"95px"},modelValue:this.store.currentPage.imgIdx,"onUpdate:modelValue":s[32]||(s[32]=l=>this.store.currentPage.imgIdx=l)},{default:t(()=>[(u(!0),m(T,null,$(this.store.currentPage.imgs,(l,f)=>(u(),C(L,{key:f,name:f,"img-src":this.store.currentPage.imgs[f].url,onClick:A=>this.test(o.pidx,f)},null,8,["name","img-src","onClick"]))),128))]),_:1},8,["modelValue"])])):v("",!0),e(i,{push:"",round:"",class:"dash-button","text-color":"white",icon:"arrow_left",style:S({height:"33.5px",width:"33.5px"}),onClick:s[33]||(s[33]=l=>this.decImgIdx(this.store.currentPage))},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Previous image ")]),_:1})]),_:1})]),_:1},8,["style"]),e(i,{push:"",round:"",class:"dash-button","text-color":"white",icon:"arrow_right",style:S({height:"33.5px",width:"33.5px"}),onClick:s[34]||(s[34]=l=>this.incImgIdx(this.store.currentPage))},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Next image ")]),_:1})]),_:1})]),_:1},8,["style"])])]),_:1})]),default:t(()=>[(u(!0),m(T,null,$(this.store.currentAssignment.pages,(l,f)=>{var A;return u(),C(L,{class:"text-panel items-top justify-center row",key:f,name:f,"img-src":(A=l==null?void 0:l.imgs[l==null?void 0:l.imgIdx])==null?void 0:A.url},{default:t(()=>[this.store.showPreview?(u(),m("div",Pe,[e(r,{"no-padding":"",class:"full-width",style:{height:"67vh"}},{default:t(()=>[e(h,null,{default:t(()=>[a("div",Ve,[n("Page Preview "),e(i,{round:"",class:"float-right",icon:"close",onClick:s[17]||(s[17]=d=>this.store.showPreview=!1)})])]),_:1}),e(h,{class:"full-width",id:"wpIframeContainer",style:{padding:"0px 0px"}}),e(P,{align:"right"},{default:t(()=>[e(i,{outline:"",label:"Cancel",onClick:s[18]||(s[18]=d=>this.store.showPreview=!1)}),e(i,{id:"keepB",outline:"",label:"Append Page",onClick:s[19]||(s[19]=d=>this.keepPage())},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" A new Page will be appended ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])):(u(),m("table",qe,[e(Z,null,{default:t(()=>[n("Page "+c(f+1)+" / "+c(this.store.currentAssignment.pages.length),1)]),_:2},1024),a("tr",null,[a("td",null,[a("div",null,[a("div",Te,c(l.pageText),1),a("div",Se,[e(i,{round:"",flat:"",size:"md",class:"q-ma-sm",icon:"volume_up",onClick:d=>this.store.speakText(l.pageText)},null,8,["onClick"]),e(i,{round:"",flat:"",size:"md",class:"q-ma-sm",icon:"clear",onClick:s[20]||(s[20]=d=>this.clearCB())}),e(i,{round:"",flat:"",size:"md",class:"q-ma-sm",icon:"save",onClick:s[21]||(s[21]=d=>this.saveTextCB())})])]),e(se)])]),a("tr",null,[a("td",Be,[e(R,{label:"Page Config"},{default:t(()=>[a("table",Ae,[a("tr",null,[Ue,a("td",$e,[a("div",ze,[e(E,null,{default:t(()=>[n(c(l.pageTitle.slice(0,25))+" ...",1)]),_:2},1024)]),e(N,{modelValue:l.pageTitle,"onUpdate:modelValue":d=>l.pageTitle=d,"auto-save":""},{default:t(d=>[e(V,{modelValue:d.value,"onUpdate:modelValue":U=>d.value=U,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:Q(d.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])]),a("tr",Qe,[De,a("td",Ne,c(l.pageid),1)]),a("tr",null,[Ke,a("td",Le,[this.store.currentPage?(u(),C(i,{key:0,dense:"",round:"",flat:"",onClick:s[22]||(s[22]=d=>this.showPct=!0)},{default:t(()=>[n(c(this.store.currentPage.pctReplace)+"% ",1),e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Percentage of words to replace on this page ")]),_:1})]),_:1})]),_:1})):v("",!0)])]),a("tr",null,[Re,a("td",je,[e(j,{flat:""},{default:t(()=>[e(i,{flat:"",dense:""},{default:t(()=>[n(c(l.imgIdx+1)+"/"+c(l.imgs.length),1)]),_:2},1024),e(i,{flat:"",round:"",dense:"",icon:"add",onClick:s[23]||(s[23]=d=>o.showAddImage=!0),class:"addImgB"},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Add an image to this page ")]),_:1})]),_:1})]),_:1})]),_:2},1024)])]),a("tr",null,[Ee,a("td",{class:"val cursor-pointer",onClick:s[24]||(s[24]=d=>this.showLanguage=!0)},[a("span",Ge,[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(c(l.langVoiceKey),1)]),_:2},1024)]),_:2},1024)])])]),Oe,a("tr",null,[a("td",Fe,[a("div",Je,[e(j,null,{default:t(()=>[e(i,{icon:"content_copy",onClick:d=>this.copyImageUrl(l.imgs[l.imgIdx].url)},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Copy the url of image currently"),We,n(" displayed to the clipboard. ")]),_:1})]),_:1})]),_:2},1032,["onClick"]),e(i,{icon:"link",onClick:d=>this.wpCB(l.pageid)},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" View the full Wikipedia article in a new tab ")]),_:1})]),_:1})]),_:2},1032,["onClick"]),e(i,{icon:"place",onClick:this.mapCB},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" View associated location on Google Maps, if applicable ")]),_:1})]),_:1})]),_:1},8,["onClick"]),e(i,{icon:"bookmark",onClick:this.bookmarkImage},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Bookmark the current image ")]),_:1})]),_:1})]),_:1},8,["onClick"]),e(i,{icon:"bookmark",onClick:this.bookmarkPage},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Bookmark the current page ")]),_:1})]),_:1})]),_:1},8,["onClick"])]),_:2},1024)])])]),a("tr",null,[a("td",Me,[e(R,{label:"Alternate Languages","header-style":{color:"seagreen",padding:"0px 0px"}},{default:t(()=>[(u(!0),m(T,null,$(l.currentLangLinks,(d,U)=>(u(),m("span",{key:U,onClick:nt=>this.langLinkCB(d)},[this.langNames.indexOf(d.lang)>-1?(u(),m("span",Xe,[a("u",null,c(d.lang),1),n(",\xA0 ")])):v("",!0)],8,He))),128))]),_:2},1024)])]),a("tr",null,[a("td",Ye,[a("div",Ze,[e(i,{"no-caps":"",icon:"delete",class:"dash-button on-right",onClick:s[25]||(s[25]=d=>this.removePage())},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Delete the current page ")]),_:1})]),_:1})]),_:1}),e(i,{"no-caps":"",class:"dash-button on-right",onClick:s[26]||(s[26]=d=>this.setAssignmentCoverURL()),icon:"wallpaper"},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Use the image currently showing as"),et,n("the cover image for the assignment ")]),_:1})]),_:1})]),_:1}),e(i,{"no-caps":"",icon:"save",class:"dash-button on-right",onClick:s[27]||(s[27]=d=>this.store.commitCurrentAssignment())},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Save assignment to cloud database ")]),_:1})]),_:1})]),_:1})])])])])]),_:2},1024)])])]))]),_:2},1032,["name","img-src"])}),128))]),_:1},8,["modelValue","onUpdate:modelValue","onTransition"])])])):v("",!0)]),_:1})],64)}var Ut=W(ne,[["render",lt]]);export{Ut as default};
