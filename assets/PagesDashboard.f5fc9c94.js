import{c as G,a as O,d as F,t as W,_ as J,j as M,r as p,w as H,k as u,F as m,q as e,n as t,H as S,p as N,aN as X,ae as w,Q as i,s as l,G as n,m as V,aa as c,ai as B,aO as P,ab as y,a8 as Q}from"./index.342f3572.js";import{d as C,Q as f,c as U,C as v}from"./ClosePopup.68b987b2.js";import{Q as d}from"./QCard.a3f34de7.js";import{Q as D,a as Y}from"./QSelect.7fa44d2a.js";import{Q as b}from"./use-cache.2273ed5e.js";import{d as Z,Q as A,e as K,f as ee,g as L}from"./copy-to-clipboard.82f51483.js";import{Q as R}from"./rtl.b9454dd8.js";import{Q as g}from"./QTooltip.9ded9cb1.js";import{Q as te}from"./QExpansionItem.5505bedb.js";import{Q as se}from"./QSpace.9eb43dba.js";import{Q as oe}from"./QPage.c8bec82e.js";import{u as ae}from"./store.9a66c75c.js";import"./transform.9aa67f3e.js";import{s as _}from"./selectAll.be636dd1.js";import{s as I}from"./select.9628a1e9.js";import"./use-prevent-scroll.9c6701c4.js";import"./scroll.45ea15aa.js";import"./use-timeout.a4db89ca.js";import"./use-tick.b541be11.js";import"./use-model-toggle.c043ee8a.js";import"./use-dark.daa978e7.js";import"./TouchPan.ffd05c79.js";import"./selection.6fcc016b.js";import"./QItemSection.4d7b7529.js";import"./QItemLabel.9fbd623c.js";import"./QSlideTransition.80d0b1ec.js";import"./firebase.dc843dde.js";import"./axios.84ae42e4.js";var j=G({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(a,{slots:o}){const x=O(()=>{const q=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(T=>a[T]===!0).map(T=>`q-btn-group--${T}`).join(" ");return`q-btn-group row no-wrap${q.length>0?" "+q:""}`+(a.spread===!0?" q-btn-group--spread":" inline")});return()=>F("div",{class:x.value},W(o.default))}});function le(a){return a===null||a===""?!1:(a=a.toString(),a=a.replaceAll("&nbsp;",""),a.replace(/(<([^>]+)>)/ig,""))}const ne=M({name:"PagesDashboard",setup(){return{store:ae(),slide:p(0),showText:p(!1),showCap:p(!1),showGoal:p(!1),showPct:p(!1),showLanguage:p(!1),showAddImage:p(!1),confirm:p(!1),carousel:p(""),flagName:p(""),newImageUrl:p(""),langNames:p(["en","th","es","fr","it","de","zh","ja","sw","pt","ru","id","ke","pl","hi","nl"])}},mounted(){this.store.pgIdx||this.store.currentAssignment.pages.length>0&&(this.store.pgIdx=this.store.currentAssignment.pages.length-1,console.log("PagesDashboard.mounted set pgIdx",this.store.pgIdx)),this.store.carousel=this.carousel,console.log("PagesDashboard mounted setting slide ",this.store.pgIdx),this.slide=this.store.pgIdx,_("#slideTextDiv").style("font-size",this.store.userSnapshot.preferences.pageFontSize+"pt"),H(this.store.pgIdx,async(a,o)=>{console.log("PagesDashboard.watcher pgIdx ",this.store.pgIdx),this.slide=this.store.pgIdx,this.store.imgIdx=this.store.currentPage.imgIdx},{immediate:!0})},methods:{clearCB(){I("#pageEditTextDiv").html("")},saveTextCB(){this.store.currentPage.pageText=le(I("#pageEditTextDiv").html())},pageTypeCB(){console.log("pageTypeCB",this.store.currentPage.pageType),this.store.currentPage.pageType===1?(console.log(this.store.currentPage.pageType),I("#textSection").classed("hidden",!0),I("#imgsSection").classed("hidden",!0),_(".guide-words").classed("hidden",!0)):this.store.currentPage.pageType===2?(console.log(this.store.currentPage.pageType),I("#textSection").classed("hidden",!0),I("#imgsSection").classed("hidden",!0),_(".guide-words").classed("hidden",!1)):this.store.currentPage.pageType===3?(console.log(this.store.currentPage.pageType),_("#slideTextDiv").attr("contenteditable",!1),_(".addImgB").classed("hidden",!0)):this.store.currentPage.pageType===4&&(console.log(this.store.currentPage.pageType),_("#slideTextDiv").attr("contenteditable",!0),_(".addImgB").classed("hidden",!1))},bookmarkImage(){this.store.saveImage()},bookmarkPage(){this.store.saveBookmark()},addImageCB(){const a={url:this.newImageUrl,cap:"Caption"};this.store.courses[this.store.ck].assignments[this.store.aid].pages[this.store.pgIdx].imgs.push(a);const o=this.store.courses[this.store.ck].assignments[this.store.aid].pages[this.store.pgIdx].imgs.length;this.store.courses[this.store.ck].assignments[this.store.aid].pages[this.store.pgIdx].imgIdx=o-1},copyImageUrl(a){Z(a),this.store.notify("Current image url copied to clipboard")},langLinkCB(a){console.log(a.url),window.open(a.url,"_blank")},wpCB(a){const o=this.store.langVoices[this.store.currentPage.langVoiceKey].langName,x="https://"+o+".wikipedia.org/wiki?curid="+a;window.open(x,"_blank")},mapCB(){const a="https://maps.google.com/?ll="+this.store.currentPage.mapCoords.split(",")[0]+","+this.store.currentPage.mapCoords.split(",")[1];window.open(a,"_blank")},viewerCB(){console.log("AssignmentDash viewerCB setting pgIdx 0 before /viewwer"),this.store.pgIdx=0,this.store.router.replace("/viewer")},langChangeCB(a){const o=this.flagName;_(".pfi").classed(o,!1),this.flagName=this.store.langVoices[a].flagName,_(".pfi").classed(this.flagName,!0)},setAssignmentCoverURL(){try{this.store.currentAssignment.coverUrl=this.store.currentAssignment.pages[this.store.pgIdx].imgs[this.store.imgIdx].url}catch(a){console.log(a)}},editPageText(a){this.store.pgIdx=a,this.showText=!0},editImageCaption(){this.showCap=!0},incImgIdx(a){a.imgIdx+1>a.imgs.length-1?a.imgIdx=0:a.imgIdx+=1,this.store.imgIdx=a.imgIdx},decImgIdx(a){a.imgIdx-1<0?a.imgIdx=a.imgs.length-1:a.imgIdx-=1,this.store.imgIdx=a.imgIdx},test(a,o){console.log("test set ",a,o);const x=this.store.currentAssignment.pages[a];try{x.imgIdx=o}catch(q){console.log(q)}},insertPage(){const a=JSON.parse(JSON.stringify(this.store.pageTemplate));a.langVoiceKey=this.store.userSnapshot.preferences.langVoiceKey,a.pctReplace=this.store.userSnapshot.preferences.pctReplace,this.store.currentAssignment.pages.splice(this.store.pgIdx,0,a)},appendPage(){const a=JSON.parse(JSON.stringify(this.store.pageTemplate));a.langVoiceKey=this.store.userSnapshot.preferences.langVoiceKey,a.pctReplace=this.store.userSnapshot.preferences.pctReplace,this.store.currentAssignment.pages.push(a),this.carousel.goTo(this.store.currentAssignment.pages.length-1)},removePage(){this.store.currentAssignment.pages.splice(this.store.pgIdx,1),this.store.currentAssignment.pages.length<=this.store.pgIdx&&(this.store.pgIdx-=1,this.slide=this.store.pgIdx)},slideChanged(a){this.store.pgIdx=a},slideTransitioned(a,o){console.log(a,o);const x=this.store.currentAssignment.pages[this.store.pgIdx].langVoiceKey;console.log("slideChanged calling langChangeCB with ",x),this.langChangeCB(x)}}}),ie=l("span",{class:"q-ml-sm"},"Confirm delete current page?",-1),re=l("div",{class:"text-h6"},"Points Goal of Assignment",-1),de=l("div",{class:"text-h6"},"Set Lang-Voice This Page",-1),ue=l("div",null," Play with this but don't save as a different language, ie change it back to whatever it originally was. This is because the Wikipedia page link is coupled to the language. By changing this you can speak English with a French accent, for example, but saving the page with a different language will prevent the page from displaying. It is left on the user to ensure the original language is ultimately saved. ",-1),ge=l("span",{class:"on-right pfi"},null,-1),ce={width:"100%",class:"z-max"},pe=l("div",{class:"text-h6"},"Percent Replace",-1),me={key:0},he={style:{"background-color":"#333"}},fe=l("td",{class:"key q-px-md"},"Course:",-1),xe={class:"val q-px-md"},_e=l("td",{class:"key q-px-md"},"Assignment:",-1),ye={class:"val q-px-md"},ke=l("td",{class:"key q-px-md"},"Page:",-1),we={class:"val q-px-md"},Ce={key:1,class:"justify-center absolute-top"},ve={class:"text-panel justify-center q-mx-md q-mb-xs q-mt-md text-h6"},be={class:"cursor-pointer"},Ve={class:"q-px-md row content-center"},Ie={class:"embed-panel col-12 col-md-4 assignment",style:{"z-index":"5",height:"50vh","max-height":"50vh"}},qe={class:"q-px-sm row content-start"},Pe={dense:"",class:"meta-table",width:"100%"},Te=l("td",{class:"key"},"Title",-1),Se={class:"val cursor-pointer"},Be={class:"no-wrap"},Ue={class:"pageid"},Ae=l("td",{class:"key"},"WP id",-1),ze={class:"val cursor-pointer"},$e=l("td",{class:"key"},"Replace %",-1),Qe={class:"val cursor-pointer"},Ne=l("td",{class:"key"},"Images",-1),De={class:"val"},Ke=l("td",{class:"key"},"Language",-1),Le={class:"pfi"},Re=l("tr",null,[l("td",{class:"key",colSpan:"2"},"More Page Actions")],-1),je={colSpan:"2"},Ee={class:"text-center"},Ge=l("br",null,null,-1),Oe={class:"text-primary",colSpan:"2"},Fe=["onClick"],We={key:0,style:{cursor:"pointer"}},Je={dense:"",class:"embed-panel col-12 col-md-6 on-right assignment",style:{"z-index":"5",height:"50vh","max-height":"50vh"}},Me={style:{height:"30px"}},He={key:0,class:"ellipsis"},Xe={key:1,class:"ellipsis"},Ye={class:"ellipsis"},Ze={style:{"vertical-align":"top"}},et={style:{"text-align":"center"}},tt={class:"control-panel q-pa-sm row no-wrap flex flex-center",style:{overflow:"auto"}},st={key:1},ot=l("br",null,null,-1),at={key:2,class:"on-right flex flex-center"};function lt(a,o,x,q,T,nt){const z=N("router-link"),E=N("nobr");return u(),m(S,null,[e(C,{modelValue:a.confirm,"onUpdate:modelValue":o[1]||(o[1]=s=>a.confirm=s),persistent:"",class:"z-max"},{default:t(()=>[e(d,null,{default:t(()=>[e(f,{class:"row items-center"},{default:t(()=>[e(X,{icon:"delete",color:"primary","text-color":"white"}),ie]),_:1}),e(U,{align:"right",class:"text-white"},{default:t(()=>[w(e(i,{flat:"",label:"Cancel"},null,512),[[v]]),w(e(i,{flat:"",label:"Delete",onClick:o[0]||(o[0]=s=>this.removePage())},null,512),[[v]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(C,{modelValue:a.showGoal,"onUpdate:modelValue":o[3]||(o[3]=s=>a.showGoal=s),persistent:""},{default:t(()=>[e(d,{style:{"min-width":"350px"}},{default:t(()=>[e(f,{align:"center"},{default:t(()=>[re]),_:1}),e(f,{class:"q-pt-none",align:"center"},{default:t(()=>[e(D,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",modelValue:this.store.currentAssignment.goal,"onUpdate:modelValue":o[2]||(o[2]=s=>this.store.currentAssignment.goal=s)},null,8,["thickness","modelValue"])]),_:1}),e(U,{align:"center",class:"text-white"},{default:t(()=>[w(e(i,{flat:"",label:"Done"},null,512),[[v]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(C,{modelValue:a.showLanguage,"onUpdate:modelValue":o[5]||(o[5]=s=>a.showLanguage=s),persistent:""},{default:t(()=>[e(d,{style:{"min-width":"350px"}},{default:t(()=>[e(f,null,{default:t(()=>[de,ue,ge]),_:1}),e(f,{class:"q-pt-none"},{default:t(()=>[l("table",ce,[l("tr",null,[l("td",null,[e(Y,{class:"z-max",outlined:"",modelValue:this.store.currentPage.langVoiceKey,"onUpdate:modelValue":[o[4]||(o[4]=s=>this.store.currentPage.langVoiceKey=s),this.langChangeCB],options:this.store.userSnapshot.preferences.langVoices},null,8,["modelValue","options","onUpdate:modelValue"])])])])]),_:1}),e(U,{align:"right",class:"text-white"},{default:t(()=>[w(e(i,{outline:"",flat:"",label:"Done"},null,512),[[v]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(C,{modelValue:a.showPct,"onUpdate:modelValue":o[7]||(o[7]=s=>a.showPct=s),persistent:""},{default:t(()=>[e(d,{style:{"min-width":"350px"}},{default:t(()=>[e(f,{align:"center"},{default:t(()=>[pe]),_:1}),e(f,{class:"q-pt-none",align:"center"},{default:t(()=>[e(D,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",modelValue:this.store.currentPage.pctReplace,"onUpdate:modelValue":o[6]||(o[6]=s=>this.store.currentPage.pctReplace=s)},null,8,["thickness","modelValue"])]),_:1}),e(U,{align:"center",class:"text-white"},{default:t(()=>[w(e(i,{flat:"",label:"Done"},null,512),[[v]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(C,{modelValue:a.showText,"onUpdate:modelValue":o[10]||(o[10]=s=>a.showText=s)},{default:t(()=>[l("div",null,[e(d,{class:"q-pa-md outlined q-ma-lg text-white text-center",style:{width:"400px"}},{default:t(()=>[e(b,{modelValue:this.store.currentPage.pageText,"onUpdate:modelValue":o[8]||(o[8]=s=>this.store.currentPage.pageText=s),type:"textarea",clearable:"",dense:"",autofocus:"",filled:"",autogrow:"",counter:""},null,8,["modelValue"]),e(i,{onClick:o[9]||(o[9]=s=>a.showText=!1)},{default:t(()=>[n("Close")]),_:1})]),_:1})])]),_:1},8,["modelValue"]),e(C,{modelValue:a.showCap,"onUpdate:modelValue":o[13]||(o[13]=s=>a.showCap=s)},{default:t(()=>[l("div",null,[e(d,{class:"q-pa-md outlined q-ma-lg text-white text-center",style:{width:"400px",height:"200px"}},{default:t(()=>[e(b,{modelValue:this.store.currentPage.imgs[this.store.currentPage.imgIdx].cap,"onUpdate:modelValue":o[11]||(o[11]=s=>this.store.currentPage.imgs[this.store.currentPage.imgIdx].cap=s),type:"textarea",clearable:"",dense:"",autofocus:"",counter:""},null,8,["modelValue"]),e(i,{onClick:o[12]||(o[12]=s=>a.showCap=!1)},{default:t(()=>[n("Close")]),_:1})]),_:1})])]),_:1},8,["modelValue"]),e(C,{modelValue:a.showAddImage,"onUpdate:modelValue":o[15]||(o[15]=s=>a.showAddImage=s)},{default:t(()=>[l("div",null,[e(d,{class:"q-pa-md outlined q-ma-lg text-white text-center",style:{width:"400px",height:"200px"}},{default:t(()=>[e(f,null,{default:t(()=>[n("Enter image url")]),_:1}),e(b,{modelValue:this.newImageUrl,"onUpdate:modelValue":o[14]||(o[14]=s=>this.newImageUrl=s),type:"input",clearable:"",dense:"",autofocus:"",counter:""},null,8,["modelValue"]),w((u(),V(i,null,{default:t(()=>[n("Close")]),_:1})),[[v]]),w((u(),V(i,{onClick:a.addImageCB},{default:t(()=>[n("Add")]),_:1},8,["onClick"])),[[v]])]),_:1})])]),_:1},8,["modelValue"]),e(oe,{class:"flex flex-center"},{default:t(()=>[this.store.pgIdx===null||this.store.pgIdx===-1?(u(),m("div",me,[e(d,{flat:"",bordered:"",class:"text-panel q-ma-md"},{default:t(()=>[e(f,null,{default:t(()=>[l("table",he,[l("tr",null,[fe,l("td",xe,[e(z,{to:"/courses",class:"text-white"},{default:t(()=>{var s;return[n(c((s=this.store.currentCourse)==null?void 0:s.title),1)]}),_:1})])]),l("tr",null,[_e,l("td",ye,[e(z,{to:"/courses/assignments",class:"text-white"},{default:t(()=>{var s;return[n(c((s=this.store.currentAssignment)==null?void 0:s.title),1)]}),_:1})])]),l("tr",null,[ke,l("td",we,[e(z,{to:"/courses/assignments/pages",class:"text-white"},{default:t(()=>{var s;return[n(c((s=this.store.currentPage)==null?void 0:s.pageTitle),1)]}),_:1})])])])]),_:1}),e(f,{class:"text-center"},{default:t(()=>[n(" Please select a page ")]),_:1})]),_:1})])):this.store.currentPage?(u(),m("div",Ce,[l("div",ve,[n(" Page "+c(this.store.pgIdx+1)+": ",1),l("span",be,[n(c(this.store.currentPage.pageTitle)+" ",1),e(A,{modelValue:this.store.currentPage.pageTitle,"onUpdate:modelValue":o[16]||(o[16]=s=>this.store.currentPage.pageTitle=s),"auto-save":"",style:{maxWidth:"320px"}},{default:t(s=>[e(b,{modelValue:s.value,"onUpdate:modelValue":h=>s.value=h,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:B(s.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["modelValue"])])]),l("div",Ve,[e(K,{class:"q-mx-md q-mt-md full-width",animated:"",thumbnails:"","navigation-position":"top",modelValue:a.slide,"onUpdate:modelValue":[o[33]||(o[33]=s=>a.slide=s),this.slideChanged],infinite:"","control-type":"arrows",ref:"carousel",height:"82vh",onTransition:this.slideTransitioned},{control:t(()=>[e(ee,{position:"bottom",offset:[0,0]},{default:t(()=>[l("div",tt,[e(i,{push:"",round:"",class:"dash-button","text-color":"white",icon:"arrow_left",style:P({height:"33.5px",width:"33.5px"}),onClick:o[22]||(o[22]=s=>a.$refs.carousel.previous())},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Previous page ")]),_:1})]),_:1})]),_:1},8,["style"]),e(i,{push:"",round:"",class:"on-right dash-button","text-color":"white",icon:"arrow_right",style:P({height:"33.5px",width:"33.5px"}),onClick:o[23]||(o[23]=s=>a.$refs.carousel.next())},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Next page ")]),_:1})]),_:1})]),_:1},8,["style"]),this.store.currentAssignment.pages.length>0?(u(),V(i,{key:0,"no-caps":"",class:"dash-button on-right",onClick:o[24]||(o[24]=s=>this.viewerCB()),icon:"smart_display"},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Test assignment in Viewer ")]),_:1})]),_:1})]),_:1})):y("",!0),this.store.role==="teacher"?(u(),m("span",st,[e(i,{"no-caps":"",class:"dash-button on-right",onClick:o[25]||(o[25]=s=>this.setAssignmentCoverURL()),icon:"wallpaper"},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Use the image currently showing as"),ot,n("the cover image for the assignment ")]),_:1})]),_:1})]),_:1}),e(i,{"no-caps":"",class:"dash-button on-right",onClick:o[26]||(o[26]=s=>this.insertPage())},{default:t(()=>[n("| "),e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Insert new page at current position ")]),_:1})]),_:1})]),_:1}),e(i,{"no-caps":"",icon:"add",class:"dash-button on-right",onClick:o[27]||(o[27]=s=>this.appendPage())},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Append a new page ")]),_:1})]),_:1})]),_:1}),e(i,{"no-caps":"",icon:"save",class:"dash-button on-right",onClick:o[28]||(o[28]=s=>this.store.commitCurrentAssignment())},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Save assignment to cloud database ")]),_:1})]),_:1})]),_:1}),e(i,{"no-caps":"",icon:"delete",class:"dash-button on-right",onClick:o[29]||(o[29]=s=>this.removePage())},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Delete the current page ")]),_:1})]),_:1})]),_:1})])):y("",!0),this.store.currentPage?(u(),m("span",at,[e(K,{class:"hidden",infinite:"",autoplay:this.store.autoplay,style:{height:"44px",width:"95px",backgroundColor:"#3330"},modelValue:this.store.currentPage.imgIdx,"onUpdate:modelValue":o[30]||(o[30]=s=>this.store.currentPage.imgIdx=s)},{default:t(()=>[(u(!0),m(S,null,Q(this.store.currentPage.imgs,(s,h)=>(u(),V(L,{key:h,name:h,"img-src":this.store.currentPage.imgs[h].url,onClick:$=>this.test(a.pidx,h)},null,8,["name","img-src","onClick"]))),128))]),_:1},8,["autoplay","modelValue"])])):y("",!0),e(i,{push:"",round:"",class:"dash-button","text-color":"white",icon:"arrow_left",style:P({height:"33.5px",width:"33.5px"}),onClick:o[31]||(o[31]=s=>this.decImgIdx(this.store.currentPage))},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Previous image ")]),_:1})]),_:1})]),_:1},8,["style"]),e(i,{push:"",round:"",class:"dash-button","text-color":"white",icon:"arrow_right",style:P({height:"33.5px",width:"33.5px"}),onClick:o[32]||(o[32]=s=>this.incImgIdx(this.store.currentPage))},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Next image ")]),_:1})]),_:1})]),_:1},8,["style"])])]),_:1})]),default:t(()=>[(u(!0),m(S,null,Q(this.store.currentAssignment.pages,(s,h)=>{var $;return u(),V(L,{class:"text-panel items-center justify-center row",key:h,name:h,"img-src":($=s==null?void 0:s.imgs[s==null?void 0:s.imgIdx])==null?void 0:$.url},{default:t(()=>[l("table",Ie,[e(R,null,{default:t(()=>[n("Page "+c(h+1)+" / "+c(this.store.currentAssignment.pages.length),1)]),_:2},1024),l("tr",null,[l("td",qe,[l("table",Pe,[l("tr",null,[Te,l("td",Se,[l("div",Be,[e(E,null,{default:t(()=>[n(c(s.pageTitle.slice(0,25))+" ...",1)]),_:2},1024)]),e(A,{modelValue:s.pageTitle,"onUpdate:modelValue":r=>s.pageTitle=r,"auto-save":""},{default:t(r=>[e(b,{modelValue:r.value,"onUpdate:modelValue":k=>r.value=k,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:B(r.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])]),l("tr",Ue,[Ae,l("td",ze,c(s.pageid),1)]),l("tr",null,[$e,l("td",Qe,[this.store.currentPage?(u(),V(i,{key:0,dense:"",round:"",flat:"",onClick:o[17]||(o[17]=r=>this.showPct=!0)},{default:t(()=>[n(c(this.store.currentPage.pctReplace)+"% ",1),e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Percentage of words to replace on this page ")]),_:1})]),_:1})]),_:1})):y("",!0)])]),l("tr",null,[Ne,l("td",De,[e(j,{flat:""},{default:t(()=>[e(i,{flat:"",dense:""},{default:t(()=>[n(c(s.imgIdx+1)+"/"+c(s.imgs.length),1)]),_:2},1024),e(i,{flat:"",round:"",dense:"",icon:"add",onClick:o[18]||(o[18]=r=>a.showAddImage=!0),class:"addImgB"},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Add an image to this page ")]),_:1})]),_:1})]),_:1})]),_:2},1024)])]),l("tr",null,[Ke,l("td",{class:"val cursor-pointer",onClick:o[19]||(o[19]=r=>this.showLanguage=!0)},[l("span",Le,[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(c(s.langVoiceKey),1)]),_:2},1024)]),_:2},1024)])])]),Re,l("tr",null,[l("td",je,[l("div",Ee,[e(j,null,{default:t(()=>[e(i,{dense:"",icon:"content_copy",onClick:r=>this.copyImageUrl(s.imgs[s.imgIdx].url)},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Copy the url of image currently"),Ge,n(" displayed to the clipboard. ")]),_:1})]),_:1})]),_:2},1032,["onClick"]),e(i,{icon:"link",onClick:r=>this.wpCB(s.pageid)},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" View the full Wikipedia article in a new tab ")]),_:1})]),_:1})]),_:2},1032,["onClick"]),e(i,{icon:"place",onClick:this.mapCB},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" View associated location on Google Maps, if applicable ")]),_:1})]),_:1})]),_:1},8,["onClick"]),e(i,{icon:"bookmark",onClick:this.bookmarkImage},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Bookmark the current image ")]),_:1})]),_:1})]),_:1},8,["onClick"]),e(i,{dense:"",icon:"bookmark",onClick:this.bookmarkPage},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Bookmark the current page ")]),_:1})]),_:1})]),_:1},8,["onClick"])]),_:2},1024)])])]),l("tr",null,[l("td",Oe,[e(te,{label:"Alternate Languages","header-style":{color:"seagreen",padding:"0px 0px"}},{default:t(()=>[(u(!0),m(S,null,Q(s.currentLangLinks,(r,k)=>(u(),m("span",{key:k,onClick:it=>this.langLinkCB(r)},[this.langNames.indexOf(r.lang)>-1?(u(),m("span",We,[l("u",null,c(r.lang),1),n(",\xA0 ")])):y("",!0)],8,Fe))),128))]),_:2},1024)])])])])])]),l("table",Je,[l("tr",Me,[l("td",null,[e(R,null,{default:t(()=>[this.store.currentAssignment?(u(),m("span",He,[n(c(s.pageTitle.slice(0,20))+" ",1),e(A,{modelValue:s.pageTitle,"onUpdate:modelValue":r=>s.pageTitle=r,"auto-save":"",style:{maxWidth:"320px"}},{default:t(r=>[e(b,{modelValue:r.value,"onUpdate:modelValue":k=>r.value=k,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:B(r.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])):y("",!0),e(se),s.imgs[this.store.imgIdx]&&s.imgs[this.store.imgIdx].cap?(u(),m("span",Xe,[l("span",Ye,[n(c(s.imgs[this.store.imgIdx].cap.slice(0,30))+" ",1),e(A,{modelValue:s.imgs[this.store.imgIdx].cap,"onUpdate:modelValue":r=>s.imgs[this.store.imgIdx].cap=r,"auto-save":"",style:{maxWidth:"320px"}},{default:t(r=>[e(b,{modelValue:r.value,"onUpdate:modelValue":k=>r.value=k,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:B(r.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])])):y("",!0)]),_:2},1024)])]),l("tr",null,[l("td",Ze,[l("div",null,[l("div",{id:"pageEditTextDiv",contenteditable:"true",class:"text-white q-pa-md",style:P({overflow:"hidden",fontSize:`${this.store.userSnapshot.preferences.pageFontSize}pt`})},c(s.pageText),5),l("div",et,[e(i,{round:"",flat:"",size:"md",class:"q-ma-sm",icon:"volume_up",onClick:r=>this.store.speakText(s.pageText)},null,8,["onClick"]),e(i,{round:"",flat:"",size:"md",class:"q-ma-sm",icon:"clear",onClick:o[20]||(o[20]=r=>this.clearCB())}),e(i,{round:"",flat:"",size:"md",class:"q-ma-sm",icon:"save",onClick:o[21]||(o[21]=r=>this.saveTextCB())})])])])])])]),_:2},1032,["name","img-src"])}),128))]),_:1},8,["modelValue","onUpdate:modelValue","onTransition"])])])):y("",!0)]),_:1})],64)}var Qt=J(ne,[["render",lt]]);export{Qt as default};
