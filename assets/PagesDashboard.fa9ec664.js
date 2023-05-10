import{c as E,a as G,d as F,y as J,_ as M,j as W,r as c,w as H,k as u,F as m,q as e,n as t,H as T,p as z,aM as X,aa as k,Q as i,s as a,G as n,m as y,af as p,ai as Q,aN as S,ae as b,ac as U}from"./index.1651428c.js";import{d as _,Q as h,c as I,C}from"./ClosePopup.d61bc382.js";import{Q as d}from"./QCard.14f6ee49.js";import{Q as D,a as Y}from"./QSelect.67165789.js";import{Q as P,a as Z}from"./QMenu.22cfd076.js";import{c as ee,Q as N,a as K,b as te,d as L}from"./copy-to-clipboard.3004d229.js";import{Q as g}from"./QTooltip.876be3df.js";import{b as se,Q as R}from"./QExpansionItem.7e7a43ed.js";import{Q as oe}from"./QPage.c36b8ade.js";import{u as le,s as f}from"./store.0ba3863e.js";import{s as v}from"./select.3030612d.js";import"./use-prevent-scroll.27a6ce62.js";import"./scroll.df5dfb67.js";import"./use-timeout.0eb07b3c.js";import"./use-tick.8c2f2d74.js";import"./use-model-toggle.077888c7.js";import"./use-dark.632839c5.js";import"./TouchPan.3b38cd8c.js";import"./touch.70a9dd44.js";import"./selection.73395501.js";import"./QItemLabel.3da93cb7.js";import"./use-cache.b0833c75.js";import"./firebase.dc843dde.js";import"./axios.84ae42e4.js";var O=E({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(o,{slots:s}){const w=G(()=>{const V=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(q=>o[q]===!0).map(q=>`q-btn-group--${q}`).join(" ");return`q-btn-group row no-wrap${V.length>0?" "+V:""}`+(o.spread===!0?" q-btn-group--spread":" inline")});return()=>F("div",{class:w.value},J(s.default))}});function ae(o){return o===null||o===""?!1:(o=o.toString(),o=o.replaceAll("&nbsp;",""),o.replace(/(<([^>]+)>)/ig,""))}const ne=W({name:"PagesDashboard",setup(){return{store:le(),slide:c(0),showText:c(!1),showCap:c(!1),showGoal:c(!1),showPct:c(!1),showLanguage:c(!1),showAddImage:c(!1),showDetails:c(!0),confirm:c(!1),carousel:c(""),flagName:c(""),newImageUrl:c(""),langNames:c(["en","th","es","fr","it","de","zh","ja","sw","pt","ru","id","ke","pl","hi","nl"])}},mounted(){this.store.pgIdx||this.store.currentAssignment.pages.length>0&&(this.store.pgIdx=this.store.currentAssignment.pages.length-1,console.log("PagesDashboard.mounted set pgIdx",this.store.pgIdx)),this.store.carousel=this.carousel,console.log("PagesDashboard mounted setting slide ",this.store.pgIdx),this.slide=this.store.pgIdx,f("#slideTextDiv").style("font-size",this.store.userSnapshot.preferences.pageFontSize+"pt"),v("#pageB").classed("selectedBorder",!0),H(this.store.pgIdx,async(o,s)=>{console.log("PagesDashboard.watcher pgIdx ",this.store.pgIdx),this.slide=this.store.pgIdx,this.store.imgIdx=this.store.currentPage.imgIdx},{immediate:!0})},methods:{textOn(){this.store.showText=!0,f(".assignment").classed("hidden",!1),f(".q-carousel__thumbnail").classed("hidden",!1)},keepPage(){this.store.showPreview=!1},clearCB(){v("#pageEditTextDiv").html("")},saveTextCB(){this.store.currentPage.pageText=ae(v("#pageEditTextDiv").html())},pageTypeCB(){console.log("pageTypeCB",this.store.currentPage.pageType),this.store.currentPage.pageType===1?(console.log(this.store.currentPage.pageType),v("#textSection").classed("hidden",!0),v("#imgsSection").classed("hidden",!0),f(".guide-words").classed("hidden",!0)):this.store.currentPage.pageType===2?(console.log(this.store.currentPage.pageType),v("#textSection").classed("hidden",!0),v("#imgsSection").classed("hidden",!0),f(".guide-words").classed("hidden",!1)):this.store.currentPage.pageType===3?(console.log(this.store.currentPage.pageType),f("#slideTextDiv").attr("contenteditable",!1),f(".addImgB").classed("hidden",!0)):this.store.currentPage.pageType===4&&(console.log(this.store.currentPage.pageType),f("#slideTextDiv").attr("contenteditable",!0),f(".addImgB").classed("hidden",!1))},bookmarkImage(){this.store.saveImage()},bookmarkPage(){this.store.saveBookmark()},addImageCB(){const o={url:this.newImageUrl,cap:"Caption"};this.store.courses[this.store.ck].assignments[this.store.aid].pages[this.store.pgIdx].imgs.push(o);const s=this.store.courses[this.store.ck].assignments[this.store.aid].pages[this.store.pgIdx].imgs.length;this.store.courses[this.store.ck].assignments[this.store.aid].pages[this.store.pgIdx].imgIdx=s-1},copyImageUrl(o){ee(o),this.store.notify({msg:"Current image url copied to clipboard"})},langLinkCB(o){console.log(o.url),window.open(o.url,"_blank")},wpCB(o){const s=this.store.langVoices[this.store.currentPage.langVoiceKey].langName,w="https://"+s+".wikipedia.org/wiki?curid="+o;window.open(w,"_blank")},mapCB(){const o="https://maps.google.com/?ll="+this.store.currentPage.mapCoords.split(",")[0]+","+this.store.currentPage.mapCoords.split(",")[1];window.open(o,"_blank")},viewerCB(){console.log("AssignmentDash viewerCB setting pgIdx 0 before /viewwer"),this.store.pgIdx=0,this.store.router.replace("/viewer")},langChangeCB(o){const s=this.flagName;f(".pfi").classed(s,!1),this.flagName=this.store.langVoices[o].flagName,f(".pfi").classed(this.flagName,!0)},setAssignmentCoverURL(){try{this.store.currentAssignment.coverUrl=this.store.currentAssignment.pages[this.store.pgIdx].imgs[this.store.imgIdx].url}catch(o){console.log(o)}},editPageText(o){this.store.pgIdx=o,this.showText=!0},editImageCaption(){this.showCap=!0},incImgIdx(o){o.imgIdx+1>o.imgs.length-1?o.imgIdx=0:o.imgIdx+=1,this.store.imgIdx=o.imgIdx},decImgIdx(o){o.imgIdx-1<0?o.imgIdx=o.imgs.length-1:o.imgIdx-=1,this.store.imgIdx=o.imgIdx},test(o,s){console.log("test set ",o,s);const w=this.store.currentAssignment.pages[o];try{w.imgIdx=s}catch(V){console.log(V)}},insertPage(){const o=JSON.parse(JSON.stringify(this.store.pageTemplate));o.langVoiceKey=this.store.userSnapshot.preferences.langVoiceKey,o.pctReplace=this.store.userSnapshot.preferences.pctReplace,this.store.currentAssignment.pages.splice(this.store.pgIdx,0,o)},appendPage(){const o=JSON.parse(JSON.stringify(this.store.pageTemplate));o.langVoiceKey=this.store.userSnapshot.preferences.langVoiceKey,o.pctReplace=this.store.userSnapshot.preferences.pctReplace,this.store.currentAssignment.pages.push(o),this.carousel.goTo(this.store.currentAssignment.pages.length-1)},removePage(){this.store.currentAssignment.pages.splice(this.store.pgIdx,1),this.store.currentAssignment.pages.length===0?(this.store.pgIdx=null,console.log("this.slide ",this.slide)):this.store.currentAssignment.pages.length<=this.store.pgIdx&&(this.store.pgIdx-=1,this.slide=this.store.pgIdx)},slideChanged(o){this.store.pgIdx=o},slideTransitioned(o,s){console.log(o,s);const w=this.store.currentAssignment.pages[this.store.pgIdx].langVoiceKey;console.log("slideChanged calling langChangeCB with ",w),this.langChangeCB(w)}}}),ie=a("span",{class:"q-ml-sm"},"Confirm delete current page?",-1),re=a("div",{class:"text-h6"},"Points Goal of Assignment",-1),de=a("div",{class:"text-h6"},"Set Lang-Voice This Page",-1),ue=a("div",null," Play with this but don't save as a different language, ie change it back to whatever it originally was. This is because the Wikipedia page link is coupled to the language. By changing this you can speak English with a French accent, for example, but saving the page with a different language will prevent the page from displaying. It is left on the user to ensure the original language is ultimately saved. ",-1),ge=a("span",{class:"on-right pfi"},null,-1),pe={width:"100%",class:"z-max"},ce=a("div",{class:"text-h6"},"Percent Replace",-1),me={key:0},he={style:{"background-color":"#333"}},fe=a("td",{class:"key q-px-md"},"Course:",-1),xe={class:"val q-px-md"},we=a("td",{class:"key q-px-md"},"Assignment:",-1),ye={class:"val q-px-md"},ke=a("td",{class:"key q-px-md"},"Page:",-1),_e={class:"val q-px-md"},Ce={key:1,class:"justify-center absolute-top"},ve={class:"text-panel justify-center q-mx-md q-mb-xs q-mt-md text-h6"},be={class:"cursor-pointer"},Ve={class:"q-px-md row content-center"},Ie={key:2,id:"wpIframeDiv",class:"flex col-12 col-md-8"},Pe={class:"text-h6"},qe={key:3,class:"embed-panel col-12 col-md-10 assignment",style:{"z-index":"5",height:"10vh"}},Te={id:"pageEditTextDiv",contenteditable:"true",class:"text-white q-px-md",style:{"max-height":"25vh, overflow: 'hidden', fontSize: `${this.store.userSnapshot.preferences.pageFontSize}pt`"}},Se={style:{"text-align":"center"}},Be={class:"q-px-sm"},Ae={dense:"","no-padding":"",class:"meta-table",align:"center"},$e=a("td",{class:"key"},"Title",-1),Ue={class:"val cursor-pointer"},ze={class:"no-wrap"},Qe={class:"pageid"},De=a("td",{class:"key"},"WP id",-1),Ne={class:"val cursor-pointer"},Ke=a("td",{class:"key"},"Replace %",-1),Le={class:"val cursor-pointer"},Re=a("td",{class:"key"},"Images",-1),Oe={class:"val"},je=a("td",{class:"key"},"Language",-1),Ee={class:"pfi"},Ge=a("tr",null,[a("td",{class:"key",colSpan:"2"},"More Page Actions")],-1),Fe={colSpan:"2"},Je={class:"text-center"},Me=a("br",null,null,-1),We={class:"text-primary",colSpan:"2"},He=["onClick"],Xe={key:0,style:{cursor:"pointer"}},Ye={colSpan:"2"},Ze={style:{"text-align":"center"}},et=a("br",null,null,-1),tt={class:"control-panel q-pa-sm row no-wrap flex flex-center",style:{overflow:"auto"}},st={key:1},ot={key:2,class:"on-right flex flex-center"};function lt(o,s,w,V,q,at){const B=z("router-link"),j=z("nobr");return u(),m(T,null,[e(_,{modelValue:o.confirm,"onUpdate:modelValue":s[1]||(s[1]=l=>o.confirm=l),persistent:"",class:"z-max"},{default:t(()=>[e(d,null,{default:t(()=>[e(h,{class:"row items-center"},{default:t(()=>[e(X,{icon:"delete",color:"primary","text-color":"white"}),ie]),_:1}),e(I,{align:"right",class:"text-white"},{default:t(()=>[k(e(i,{flat:"",label:"Cancel"},null,512),[[C]]),k(e(i,{flat:"",label:"Delete",onClick:s[0]||(s[0]=l=>this.removePage())},null,512),[[C]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(_,{modelValue:o.showGoal,"onUpdate:modelValue":s[3]||(s[3]=l=>o.showGoal=l),persistent:""},{default:t(()=>[e(d,{style:{"min-width":"350px"}},{default:t(()=>[e(h,{align:"center"},{default:t(()=>[re]),_:1}),e(h,{class:"q-pt-none",align:"center"},{default:t(()=>[e(D,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",modelValue:this.store.currentAssignment.goal,"onUpdate:modelValue":s[2]||(s[2]=l=>this.store.currentAssignment.goal=l)},null,8,["thickness","modelValue"])]),_:1}),e(I,{align:"center",class:"text-white"},{default:t(()=>[k(e(i,{flat:"",label:"Done"},null,512),[[C]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(_,{modelValue:o.showLanguage,"onUpdate:modelValue":s[5]||(s[5]=l=>o.showLanguage=l),persistent:""},{default:t(()=>[e(d,{style:{"min-width":"350px"}},{default:t(()=>[e(h,null,{default:t(()=>[de,ue,ge]),_:1}),e(h,{class:"q-pt-none"},{default:t(()=>[a("table",pe,[a("tr",null,[a("td",null,[e(Y,{class:"z-max",outlined:"",modelValue:this.store.currentPage.langVoiceKey,"onUpdate:modelValue":[s[4]||(s[4]=l=>this.store.currentPage.langVoiceKey=l),this.langChangeCB],options:this.store.userSnapshot.preferences.langVoices},null,8,["modelValue","options","onUpdate:modelValue"])])])])]),_:1}),e(I,{align:"right",class:"text-white"},{default:t(()=>[k(e(i,{outline:"",flat:"",label:"Done"},null,512),[[C]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(_,{modelValue:o.showPct,"onUpdate:modelValue":s[7]||(s[7]=l=>o.showPct=l),persistent:""},{default:t(()=>[e(d,{style:{"min-width":"350px"}},{default:t(()=>[e(h,{align:"center"},{default:t(()=>[ce]),_:1}),e(h,{class:"q-pt-none",align:"center"},{default:t(()=>[e(D,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",modelValue:this.store.currentPage.pctReplace,"onUpdate:modelValue":s[6]||(s[6]=l=>this.store.currentPage.pctReplace=l)},null,8,["thickness","modelValue"])]),_:1}),e(I,{align:"center",class:"text-white"},{default:t(()=>[k(e(i,{flat:"",label:"Done"},null,512),[[C]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(_,{modelValue:o.showText,"onUpdate:modelValue":s[10]||(s[10]=l=>o.showText=l)},{default:t(()=>[a("div",null,[e(d,{class:"q-pa-md outlined q-ma-lg text-white text-center",style:{width:"400px"}},{default:t(()=>[e(P,{modelValue:this.store.currentPage.pageText,"onUpdate:modelValue":s[8]||(s[8]=l=>this.store.currentPage.pageText=l),type:"textarea",clearable:"",dense:"",autofocus:"",filled:"",autogrow:"",counter:""},null,8,["modelValue"]),e(i,{onClick:s[9]||(s[9]=l=>o.showText=!1)},{default:t(()=>[n("Close")]),_:1})]),_:1})])]),_:1},8,["modelValue"]),e(_,{modelValue:o.showCap,"onUpdate:modelValue":s[13]||(s[13]=l=>o.showCap=l)},{default:t(()=>[a("div",null,[e(d,{class:"q-pa-md outlined q-ma-lg text-white text-center",style:{width:"400px",height:"200px"}},{default:t(()=>[e(P,{modelValue:this.store.currentPage.imgs[this.store.currentPage.imgIdx].cap,"onUpdate:modelValue":s[11]||(s[11]=l=>this.store.currentPage.imgs[this.store.currentPage.imgIdx].cap=l),type:"textarea",clearable:"",dense:"",autofocus:"",counter:""},null,8,["modelValue"]),e(i,{onClick:s[12]||(s[12]=l=>o.showCap=!1)},{default:t(()=>[n("Close")]),_:1})]),_:1})])]),_:1},8,["modelValue"]),e(_,{modelValue:o.showAddImage,"onUpdate:modelValue":s[15]||(s[15]=l=>o.showAddImage=l)},{default:t(()=>[a("div",null,[e(d,{class:"q-pa-md outlined q-ma-lg text-white text-center",style:{width:"400px",height:"200px"}},{default:t(()=>[e(h,null,{default:t(()=>[n("Enter image url")]),_:1}),e(P,{modelValue:this.newImageUrl,"onUpdate:modelValue":s[14]||(s[14]=l=>this.newImageUrl=l),type:"input",clearable:"",dense:"",autofocus:"",counter:""},null,8,["modelValue"]),k((u(),y(i,null,{default:t(()=>[n("Close")]),_:1})),[[C]]),k((u(),y(i,{onClick:o.addImageCB},{default:t(()=>[n("Add")]),_:1},8,["onClick"])),[[C]])]),_:1})])]),_:1},8,["modelValue"]),e(oe,{class:"flex flex-center"},{default:t(()=>[this.store.pgIdx===null||this.store.pgIdx===-1?(u(),m("div",me,[e(d,{flat:"",bordered:"",class:"text-panel q-ma-md"},{default:t(()=>[e(h,null,{default:t(()=>[a("table",he,[a("tr",null,[fe,a("td",xe,[e(B,{to:"/courses",class:"text-white"},{default:t(()=>{var l;return[n(p((l=this.store.currentCourse)==null?void 0:l.title),1)]}),_:1})])]),a("tr",null,[we,a("td",ye,[e(B,{to:"/courses/assignments",class:"text-white"},{default:t(()=>{var l;return[n(p((l=this.store.currentAssignment)==null?void 0:l.title),1)]}),_:1})])]),a("tr",null,[ke,a("td",_e,[e(B,{to:"/courses/assignments/pages",class:"text-white"},{default:t(()=>{var l;return[n(p((l=this.store.currentPage)==null?void 0:l.pageTitle),1)]}),_:1})])])])]),_:1}),e(h,{class:"text-center"},{default:t(()=>[n(" Please select a page ")]),_:1})]),_:1})])):this.store.currentPage?(u(),m("div",Ce,[a("div",ve,[n(" Page "+p(this.store.pgIdx+1)+": ",1),a("span",be,[n(p(this.store.currentPage.pageTitle)+" ",1),e(N,{modelValue:this.store.currentPage.pageTitle,"onUpdate:modelValue":s[16]||(s[16]=l=>this.store.currentPage.pageTitle=l),"auto-save":"",style:{maxWidth:"320px"}},{default:t(l=>[e(P,{modelValue:l.value,"onUpdate:modelValue":x=>l.value=x,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:Q(l.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["modelValue"])])]),a("div",Ve,[e(K,{class:"q-mx-md q-mt-md full-width",animated:"","control-type":"arrows",ref:"carousel",modelValue:o.slide,"onUpdate:modelValue":[s[38]||(s[38]=l=>o.slide=l),this.slideChanged],infinite:"",height:"82vh",onTransition:this.slideTransitioned},{control:t(()=>[e(te,{position:"bottom",offset:[0,0]},{default:t(()=>[a("div",tt,[e(i,{push:"",round:"",class:"dash-button","text-color":"white",icon:"arrow_left",style:S({height:"33.5px",width:"33.5px"}),onClick:s[31]||(s[31]=l=>{this.textOn(),o.$refs.carousel.previous()})},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Previous page ")]),_:1})]),_:1})]),_:1},8,["style"]),e(i,{push:"",round:"",class:"on-right dash-button","text-color":"white",icon:"arrow_right",style:S({height:"33.5px",width:"33.5px"}),onClick:s[32]||(s[32]=l=>{this.textOn(),o.$refs.carousel.next()})},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Next page ")]),_:1})]),_:1})]),_:1},8,["style"]),this.store.currentAssignment.pages.length>0?(u(),y(i,{key:0,"no-caps":"",class:"dash-button on-right",onClick:s[33]||(s[33]=l=>this.viewerCB()),icon:"play_circle_outline"},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Test assignment in Viewer ")]),_:1})]),_:1})]),_:1})):b("",!0),this.store.role==="teacher"?(u(),m("span",st,[e(i,{"no-caps":"",icon:"add",class:"dash-button on-right",onClick:s[34]||(s[34]=l=>this.appendPage())},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Append a new page ")]),_:1})]),_:1})]),_:1})])):b("",!0),this.store.currentPage?(u(),m("span",ot,[e(K,{class:"hidden",infinite:"",thumbnails:"","navigation-position":"top",style:{backgroundColor:"#3330",height:"44px",width:"95px"},modelValue:this.store.currentPage.imgIdx,"onUpdate:modelValue":s[35]||(s[35]=l=>this.store.currentPage.imgIdx=l)},{default:t(()=>[(u(!0),m(T,null,U(this.store.currentPage.imgs,(l,x)=>(u(),y(L,{key:x,name:x,"img-src":this.store.currentPage.imgs[x].url,onClick:A=>this.test(o.pidx,x)},null,8,["name","img-src","onClick"]))),128))]),_:1},8,["modelValue"])])):b("",!0),e(i,{push:"",round:"",class:"dash-button","text-color":"white",icon:"arrow_left",style:S({height:"33.5px",width:"33.5px"}),onClick:s[36]||(s[36]=l=>this.decImgIdx(this.store.currentPage))},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Previous image ")]),_:1})]),_:1})]),_:1},8,["style"]),e(i,{push:"",round:"",class:"dash-button","text-color":"white",icon:"arrow_right",style:S({height:"33.5px",width:"33.5px"}),onClick:s[37]||(s[37]=l=>this.incImgIdx(this.store.currentPage))},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Next image ")]),_:1})]),_:1})]),_:1},8,["style"])])]),_:1})]),default:t(()=>[(u(!0),m(T,null,U(this.store.currentAssignment.pages,(l,x)=>{var A;return u(),y(L,{class:"text-panel items-top justify-center row",key:x,name:x,"img-src":(A=l==null?void 0:l.imgs[l==null?void 0:l.imgIdx])==null?void 0:A.url},{default:t(()=>[this.store.showText?(u(),y(i,{key:0,round:"",class:"absolute-top-right bg-grey text-primary",icon:"visibility",onClick:s[17]||(s[17]=r=>this.store.toggleText())})):(u(),y(i,{key:1,round:"",class:"absolute-top-right bg-grey text-dark",icon:"visibility_off",onClick:s[18]||(s[18]=r=>this.store.toggleText())})),this.store.showPreview?(u(),m("div",Ie,[e(d,{"no-padding":"",class:"full-width",style:{height:"67vh"}},{default:t(()=>[e(h,null,{default:t(()=>[a("div",Pe,[n("Page Preview "),e(i,{round:"",class:"float-right",icon:"close",onClick:s[19]||(s[19]=r=>this.store.showPreview=!1)})])]),_:1}),e(h,{class:"full-width",id:"wpIframeContainer",style:{padding:"0px 0px"}}),e(I,{align:"right"},{default:t(()=>[e(i,{outline:"",label:"Cancel",onClick:s[20]||(s[20]=r=>this.store.showPreview=!1)}),e(i,{id:"keepB",outline:"",label:"Append Page",onClick:s[21]||(s[21]=r=>this.keepPage())},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" A new Page will be appended ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])):(u(),m("table",qe,[e(Z,null,{default:t(()=>[n("Page "+p(x+1)+" / "+p(this.store.currentAssignment.pages.length),1)]),_:2},1024),a("tr",null,[a("td",null,[a("div",Te,p(l.pageText),1),a("div",Se,[e(i,{round:"",flat:"",size:"md",class:"q-ma-sm",icon:"volume_up",onClick:r=>this.store.speakText(l.pageText)},null,8,["onClick"]),e(i,{round:"",flat:"",size:"md",class:"q-ma-sm",icon:"clear",onClick:s[22]||(s[22]=r=>this.clearCB())}),e(i,{round:"",flat:"",size:"md",class:"q-ma-sm",icon:"save",onClick:s[23]||(s[23]=r=>this.saveTextCB())})]),e(se)])]),a("tr",null,[a("td",Be,[e(R,{label:"Page Meta Info",modelValue:o.showDetails,"onUpdate:modelValue":s[30]||(s[30]=r=>o.showDetails=r)},{default:t(()=>[a("table",Ae,[a("tr",null,[$e,a("td",Ue,[a("div",ze,[e(j,null,{default:t(()=>[n(p(l.pageTitle.slice(0,25))+" ...",1)]),_:2},1024)]),e(N,{modelValue:l.pageTitle,"onUpdate:modelValue":r=>l.pageTitle=r,"auto-save":""},{default:t(r=>[e(P,{modelValue:r.value,"onUpdate:modelValue":$=>r.value=$,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:Q(r.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])]),a("tr",Qe,[De,a("td",Ne,p(l.pageid),1)]),a("tr",null,[Ke,a("td",Le,[this.store.currentPage?(u(),y(i,{key:0,dense:"",round:"",flat:"",onClick:s[24]||(s[24]=r=>this.showPct=!0)},{default:t(()=>[n(p(this.store.currentPage.pctReplace)+"% ",1),e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Percentage of words to replace on this page ")]),_:1})]),_:1})]),_:1})):b("",!0)])]),a("tr",null,[Re,a("td",Oe,[e(O,{flat:""},{default:t(()=>[e(i,{flat:"",dense:""},{default:t(()=>[n(p(l.imgIdx+1)+"/"+p(l.imgs.length),1)]),_:2},1024),e(i,{flat:"",round:"",dense:"",icon:"add",onClick:s[25]||(s[25]=r=>o.showAddImage=!0),class:"addImgB"},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Add an image to this page ")]),_:1})]),_:1})]),_:1})]),_:2},1024)])]),a("tr",null,[je,a("td",{class:"val cursor-pointer",onClick:s[26]||(s[26]=r=>this.showLanguage=!0)},[a("span",Ee,[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(p(l.langVoiceKey),1)]),_:2},1024)]),_:2},1024)])])]),Ge,a("tr",null,[a("td",Fe,[a("div",Je,[e(O,null,{default:t(()=>[e(i,{icon:"content_copy",onClick:r=>this.copyImageUrl(l.imgs[l.imgIdx].url)},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Copy the url of image currently"),Me,n(" displayed to the clipboard. ")]),_:1})]),_:1})]),_:2},1032,["onClick"]),e(i,{icon:"link",onClick:r=>this.wpCB(l.pageid)},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" View the full Wikipedia article in a new tab ")]),_:1})]),_:1})]),_:2},1032,["onClick"]),e(i,{icon:"place",onClick:this.mapCB},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" View associated location on Google Maps, if applicable ")]),_:1})]),_:1})]),_:1},8,["onClick"]),e(i,{icon:"bookmark",onClick:this.bookmarkImage},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Bookmark the current image ")]),_:1})]),_:1})]),_:1},8,["onClick"]),e(i,{icon:"bookmark",onClick:this.bookmarkPage},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Bookmark the current page ")]),_:1})]),_:1})]),_:1},8,["onClick"])]),_:2},1024)])])]),a("tr",null,[a("td",We,[e(R,{label:"Alternate Languages","header-style":{color:"seagreen",padding:"0px 0px"}},{default:t(()=>[(u(!0),m(T,null,U(l.currentLangLinks,(r,$)=>(u(),m("span",{key:$,onClick:nt=>this.langLinkCB(r)},[this.langNames.indexOf(r.lang)>-1?(u(),m("span",Xe,[a("u",null,p(r.lang),1),n(",\xA0 ")])):b("",!0)],8,He))),128))]),_:2},1024)])]),a("tr",null,[a("td",Ye,[a("div",Ze,[e(i,{"no-caps":"",icon:"delete",class:"dash-button on-right",onClick:s[27]||(s[27]=r=>this.removePage())},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Delete the current page ")]),_:1})]),_:1})]),_:1}),e(i,{"no-caps":"",class:"dash-button on-right",onClick:s[28]||(s[28]=r=>this.setAssignmentCoverURL()),icon:"wallpaper"},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Use the image currently showing as"),et,n("the cover image for the assignment ")]),_:1})]),_:1})]),_:1}),e(i,{"no-caps":"",icon:"save",class:"dash-button on-right",onClick:s[29]||(s[29]=r=>this.store.commitCurrentAssignment())},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Save assignment to cloud database ")]),_:1})]),_:1})]),_:1})])])])])]),_:2},1032,["modelValue"])])])]))]),_:2},1032,["name","img-src"])}),128))]),_:1},8,["modelValue","onUpdate:modelValue","onTransition"])])])):b("",!0)]),_:1})],64)}var Bt=M(ne,[["render",lt]]);export{Bt as default};
