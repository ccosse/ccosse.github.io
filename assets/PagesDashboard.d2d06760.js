import{c as E,a as G,d as O,y as F,_ as J,j as W,r as p,w as M,k as u,F as m,q as e,n as t,H as S,p as z,aM as H,ae as w,Q as i,s as a,G as n,m as C,aa as c,ai as Q,aN as P,ab as v,a8 as $}from"./index.e0bd828b.js";import{d as k,Q as h,c as I,C as y}from"./ClosePopup.4890aa5f.js";import{Q as r}from"./QCard.e87baca2.js";import{Q as N,a as X}from"./QSelect.52401ddd.js";import{Q as q,a as Y}from"./QMenu.4ab71fce.js";import{c as Z,Q as D,a as K,b as ee,d as L}from"./copy-to-clipboard.13c181a8.js";import{Q as g}from"./QTooltip.459d8417.js";import{b as te,Q as se}from"./QExpansionItem.fceb560c.js";import{Q as le}from"./QPage.577b6c6e.js";import{u as oe}from"./store.a20c3a40.js";import"./transform.9aa67f3e.js";import{s as b}from"./select.9628a1e9.js";import{s as _}from"./selectAll.be636dd1.js";import"./use-prevent-scroll.5f6f2394.js";import"./scroll.2026ff8a.js";import"./use-timeout.291892b6.js";import"./use-tick.202037e8.js";import"./use-model-toggle.478b244e.js";import"./use-dark.0ab08fa9.js";import"./TouchPan.34cc0c4a.js";import"./touch.70a9dd44.js";import"./selection.70942947.js";import"./QItemLabel.aaa91e3a.js";import"./use-cache.b0833c75.js";import"./firebase.dc843dde.js";import"./axios.84ae42e4.js";var R=E({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(l,{slots:s}){const x=G(()=>{const V=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(T=>l[T]===!0).map(T=>`q-btn-group--${T}`).join(" ");return`q-btn-group row no-wrap${V.length>0?" "+V:""}`+(l.spread===!0?" q-btn-group--spread":" inline")});return()=>O("div",{class:x.value},F(s.default))}});function ae(l){return l===null||l===""?!1:(l=l.toString(),l=l.replaceAll("&nbsp;",""),l.replace(/(<([^>]+)>)/ig,""))}const ne=W({name:"PagesDashboard",setup(){return{store:oe(),slide:p(0),showText:p(!1),showCap:p(!1),showGoal:p(!1),showPct:p(!1),showLanguage:p(!1),showAddImage:p(!1),confirm:p(!1),carousel:p(""),flagName:p(""),newImageUrl:p(""),langNames:p(["en","th","es","fr","it","de","zh","ja","sw","pt","ru","id","ke","pl","hi","nl"])}},mounted(){this.store.carousel=this.carousel,M(this.store.pgIdx,async(l,s)=>{console.log("PagesDashboard.watcher pgIdx ",this.store.pgIdx),this.slide=this.store.pgIdx,this.store.imgIdx=this.store.currentPage.imgIdx},{immediate:!0})},methods:{keepPage(){this.store.showPreview=!1},clearCB(){b("#pageEditTextDiv").html("")},saveTextCB(){this.store.currentPage.pageText=ae(b("#pageEditTextDiv").html())},pageTypeCB(){console.log("pageTypeCB",this.store.currentPage.pageType),this.store.currentPage.pageType===1?(console.log(this.store.currentPage.pageType),b("#textSection").classed("hidden",!0),b("#imgsSection").classed("hidden",!0),_(".guide-words").classed("hidden",!0)):this.store.currentPage.pageType===2?(console.log(this.store.currentPage.pageType),b("#textSection").classed("hidden",!0),b("#imgsSection").classed("hidden",!0),_(".guide-words").classed("hidden",!1)):this.store.currentPage.pageType===3?(console.log(this.store.currentPage.pageType),_("#slideTextDiv").attr("contenteditable",!1),_(".addImgB").classed("hidden",!0)):this.store.currentPage.pageType===4&&(console.log(this.store.currentPage.pageType),_("#slideTextDiv").attr("contenteditable",!0),_(".addImgB").classed("hidden",!1))},bookmarkImage(){this.store.saveImage()},bookmarkPage(){this.store.saveBookmark()},addImageCB(){const l={url:this.newImageUrl,cap:"Caption"};this.store.courses[this.store.ck].assignments[this.store.aid].pages[this.store.pgIdx].imgs.push(l);const s=this.store.courses[this.store.ck].assignments[this.store.aid].pages[this.store.pgIdx].imgs.length;this.store.courses[this.store.ck].assignments[this.store.aid].pages[this.store.pgIdx].imgIdx=s-1},copyImageUrl(l){Z(l),this.store.notify({msg:"Current image url copied to clipboard"})},langLinkCB(l){console.log(l.url),window.open(l.url,"_blank")},wpCB(l){const s=this.store.langVoices[this.store.currentPage.langVoiceKey].langName,x="https://"+s+".wikipedia.org/wiki?curid="+l;window.open(x,"_blank")},mapCB(){const l="https://maps.google.com/?ll="+this.store.currentPage.mapCoords.split(",")[0]+","+this.store.currentPage.mapCoords.split(",")[1];window.open(l,"_blank")},viewerCB(){console.log("AssignmentDash viewerCB setting pgIdx 0 before /viewwer"),this.store.pgIdx=0,this.store.router.replace("/viewer")},langChangeCB(l){const s=this.flagName;_(".pfi").classed(s,!1),this.flagName=this.store.langVoices[l].flagName,_(".pfi").classed(this.flagName,!0)},setAssignmentCoverURL(){try{this.store.currentAssignment.coverUrl=this.store.currentAssignment.pages[this.store.pgIdx].imgs[this.store.imgIdx].url}catch(l){console.log(l)}},editPageText(l){this.store.pgIdx=l,this.showText=!0},editImageCaption(){this.showCap=!0},incImgIdx(l){l.imgIdx+1>l.imgs.length-1?l.imgIdx=0:l.imgIdx+=1,this.store.imgIdx=l.imgIdx},decImgIdx(l){l.imgIdx-1<0?l.imgIdx=l.imgs.length-1:l.imgIdx-=1,this.store.imgIdx=l.imgIdx},test(l,s){console.log("test set ",l,s);const x=this.store.currentAssignment.pages[l];try{x.imgIdx=s}catch(V){console.log(V)}},insertPage(){const l=JSON.parse(JSON.stringify(this.store.pageTemplate));l.langVoiceKey=this.store.userSnapshot.preferences.langVoiceKey,l.pctReplace=this.store.userSnapshot.preferences.pctReplace,this.store.currentAssignment.pages.splice(this.store.pgIdx,0,l)},appendPage(){const l=JSON.parse(JSON.stringify(this.store.pageTemplate));l.langVoiceKey=this.store.userSnapshot.preferences.langVoiceKey,l.pctReplace=this.store.userSnapshot.preferences.pctReplace,this.store.currentAssignment.pages.push(l),this.carousel.goTo(this.store.currentAssignment.pages.length-1)},removePage(){this.store.currentAssignment.pages.splice(this.store.pgIdx,1),this.store.currentAssignment.pages.length<=this.store.pgIdx&&(this.store.pgIdx-=1,this.slide=this.store.pgIdx)},slideChanged(l){this.store.pgIdx=l},slideTransitioned(l,s){console.log(l,s);const x=this.store.currentAssignment.pages[this.store.pgIdx].langVoiceKey;console.log("slideChanged calling langChangeCB with ",x),this.langChangeCB(x)}}}),ie=a("span",{class:"q-ml-sm"},"Confirm delete current page?",-1),re=a("div",{class:"text-h6"},"Points Goal of Assignment",-1),de=a("div",{class:"text-h6"},"Set Lang-Voice This Page",-1),ue=a("div",null," Play with this but don't save as a different language, ie change it back to whatever it originally was. This is because the Wikipedia page link is coupled to the language. By changing this you can speak English with a French accent, for example, but saving the page with a different language will prevent the page from displaying. It is left on the user to ensure the original language is ultimately saved. ",-1),ge=a("span",{class:"on-right pfi"},null,-1),ce={width:"100%",class:"z-max"},pe=a("div",{class:"text-h6"},"Percent Replace",-1),me={key:0},he={style:{"background-color":"#333"}},fe=a("td",{class:"key q-px-md"},"Course:",-1),xe={class:"val q-px-md"},_e=a("td",{class:"key q-px-md"},"Assignment:",-1),we={class:"val q-px-md"},ke=a("td",{class:"key q-px-md"},"Page:",-1),ye={class:"val q-px-md"},Ce={key:1,class:"justify-center absolute-top"},ve={class:"text-panel justify-center q-mx-md q-mb-xs q-mt-md text-h6"},be={class:"cursor-pointer"},Ve={class:"q-px-md row content-center"},Pe={key:0,id:"wpIframeDiv",class:"flex flex-center col-12 col-md-8"},Ie={class:"text-h6"},qe={key:1,class:"embed-panel col-12 col-md-10 assignment",style:{"z-index":"5",height:"50vh","max-height":"50vh"}},Te={style:{"text-align":"center"}},Se={class:"q-px-sm"},Be={dense:"",class:"meta-table",align:"center"},Ae=a("td",{class:"key"},"Title",-1),Ue={class:"val cursor-pointer"},$e={class:"no-wrap"},ze={class:"pageid"},Qe=a("td",{class:"key"},"WP id",-1),Ne={class:"val cursor-pointer"},De=a("td",{class:"key"},"Replace %",-1),Ke={class:"val cursor-pointer"},Le=a("td",{class:"key"},"Images",-1),Re={class:"val"},je=a("td",{class:"key"},"Language",-1),Ee={class:"pfi"},Ge=a("tr",null,[a("td",{class:"key",colSpan:"2"},"More Page Actions")],-1),Oe={colSpan:"2"},Fe={class:"text-center"},Je=a("br",null,null,-1),We={class:"text-primary",colSpan:"2"},Me=["onClick"],He={key:0,style:{cursor:"pointer"}},Xe={colSpan:"2"},Ye={style:{"text-align":"center"}},Ze=a("br",null,null,-1),et={class:"control-panel q-pa-sm row no-wrap flex flex-center",style:{overflow:"auto"}},tt={key:1},st={key:2,class:"on-right flex flex-center"};function lt(l,s,x,V,T,ot){const B=z("router-link"),j=z("nobr");return u(),m(S,null,[e(k,{modelValue:l.confirm,"onUpdate:modelValue":s[1]||(s[1]=o=>l.confirm=o),persistent:"",class:"z-max"},{default:t(()=>[e(r,null,{default:t(()=>[e(h,{class:"row items-center"},{default:t(()=>[e(H,{icon:"delete",color:"primary","text-color":"white"}),ie]),_:1}),e(I,{align:"right",class:"text-white"},{default:t(()=>[w(e(i,{flat:"",label:"Cancel"},null,512),[[y]]),w(e(i,{flat:"",label:"Delete",onClick:s[0]||(s[0]=o=>this.removePage())},null,512),[[y]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(k,{modelValue:l.showGoal,"onUpdate:modelValue":s[3]||(s[3]=o=>l.showGoal=o),persistent:""},{default:t(()=>[e(r,{style:{"min-width":"350px"}},{default:t(()=>[e(h,{align:"center"},{default:t(()=>[re]),_:1}),e(h,{class:"q-pt-none",align:"center"},{default:t(()=>[e(N,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",modelValue:this.store.currentAssignment.goal,"onUpdate:modelValue":s[2]||(s[2]=o=>this.store.currentAssignment.goal=o)},null,8,["thickness","modelValue"])]),_:1}),e(I,{align:"center",class:"text-white"},{default:t(()=>[w(e(i,{flat:"",label:"Done"},null,512),[[y]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(k,{modelValue:l.showLanguage,"onUpdate:modelValue":s[5]||(s[5]=o=>l.showLanguage=o),persistent:""},{default:t(()=>[e(r,{style:{"min-width":"350px"}},{default:t(()=>[e(h,null,{default:t(()=>[de,ue,ge]),_:1}),e(h,{class:"q-pt-none"},{default:t(()=>[a("table",ce,[a("tr",null,[a("td",null,[e(X,{class:"z-max",outlined:"",modelValue:this.store.currentPage.langVoiceKey,"onUpdate:modelValue":[s[4]||(s[4]=o=>this.store.currentPage.langVoiceKey=o),this.langChangeCB],options:this.store.userSnapshot.preferences.langVoices},null,8,["modelValue","options","onUpdate:modelValue"])])])])]),_:1}),e(I,{align:"right",class:"text-white"},{default:t(()=>[w(e(i,{outline:"",flat:"",label:"Done"},null,512),[[y]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(k,{modelValue:l.showPct,"onUpdate:modelValue":s[7]||(s[7]=o=>l.showPct=o),persistent:""},{default:t(()=>[e(r,{style:{"min-width":"350px"}},{default:t(()=>[e(h,{align:"center"},{default:t(()=>[pe]),_:1}),e(h,{class:"q-pt-none",align:"center"},{default:t(()=>[e(N,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",modelValue:this.store.currentPage.pctReplace,"onUpdate:modelValue":s[6]||(s[6]=o=>this.store.currentPage.pctReplace=o)},null,8,["thickness","modelValue"])]),_:1}),e(I,{align:"center",class:"text-white"},{default:t(()=>[w(e(i,{flat:"",label:"Done"},null,512),[[y]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(k,{modelValue:l.showText,"onUpdate:modelValue":s[10]||(s[10]=o=>l.showText=o)},{default:t(()=>[a("div",null,[e(r,{class:"q-pa-md outlined q-ma-lg text-white text-center",style:{width:"400px"}},{default:t(()=>[e(q,{modelValue:this.store.currentPage.pageText,"onUpdate:modelValue":s[8]||(s[8]=o=>this.store.currentPage.pageText=o),type:"textarea",clearable:"",dense:"",autofocus:"",filled:"",autogrow:"",counter:""},null,8,["modelValue"]),e(i,{onClick:s[9]||(s[9]=o=>l.showText=!1)},{default:t(()=>[n("Close")]),_:1})]),_:1})])]),_:1},8,["modelValue"]),e(k,{modelValue:l.showCap,"onUpdate:modelValue":s[13]||(s[13]=o=>l.showCap=o)},{default:t(()=>[a("div",null,[e(r,{class:"q-pa-md outlined q-ma-lg text-white text-center",style:{width:"400px",height:"200px"}},{default:t(()=>[e(q,{modelValue:this.store.currentPage.imgs[this.store.currentPage.imgIdx].cap,"onUpdate:modelValue":s[11]||(s[11]=o=>this.store.currentPage.imgs[this.store.currentPage.imgIdx].cap=o),type:"textarea",clearable:"",dense:"",autofocus:"",counter:""},null,8,["modelValue"]),e(i,{onClick:s[12]||(s[12]=o=>l.showCap=!1)},{default:t(()=>[n("Close")]),_:1})]),_:1})])]),_:1},8,["modelValue"]),e(k,{modelValue:l.showAddImage,"onUpdate:modelValue":s[15]||(s[15]=o=>l.showAddImage=o)},{default:t(()=>[a("div",null,[e(r,{class:"q-pa-md outlined q-ma-lg text-white text-center",style:{width:"400px",height:"200px"}},{default:t(()=>[e(h,null,{default:t(()=>[n("Enter image url")]),_:1}),e(q,{modelValue:this.newImageUrl,"onUpdate:modelValue":s[14]||(s[14]=o=>this.newImageUrl=o),type:"input",clearable:"",dense:"",autofocus:"",counter:""},null,8,["modelValue"]),w((u(),C(i,null,{default:t(()=>[n("Close")]),_:1})),[[y]]),w((u(),C(i,{onClick:l.addImageCB},{default:t(()=>[n("Add")]),_:1},8,["onClick"])),[[y]])]),_:1})])]),_:1},8,["modelValue"]),e(le,{class:"flex flex-center"},{default:t(()=>[this.store.pgIdx===null||this.store.pgIdx===-1?(u(),m("div",me,[e(r,{flat:"",bordered:"",class:"text-panel q-ma-md"},{default:t(()=>[e(h,null,{default:t(()=>[a("table",he,[a("tr",null,[fe,a("td",xe,[e(B,{to:"/courses",class:"text-white"},{default:t(()=>{var o;return[n(c((o=this.store.currentCourse)==null?void 0:o.title),1)]}),_:1})])]),a("tr",null,[_e,a("td",we,[e(B,{to:"/courses/assignments",class:"text-white"},{default:t(()=>{var o;return[n(c((o=this.store.currentAssignment)==null?void 0:o.title),1)]}),_:1})])]),a("tr",null,[ke,a("td",ye,[e(B,{to:"/courses/assignments/pages",class:"text-white"},{default:t(()=>{var o;return[n(c((o=this.store.currentPage)==null?void 0:o.pageTitle),1)]}),_:1})])])])]),_:1}),e(h,{class:"text-center"},{default:t(()=>[n(" Please select a page ")]),_:1})]),_:1})])):this.store.currentPage?(u(),m("div",Ce,[a("div",ve,[n(" Page "+c(this.store.pgIdx+1)+": ",1),a("span",be,[n(c(this.store.currentPage.pageTitle)+" ",1),e(D,{modelValue:this.store.currentPage.pageTitle,"onUpdate:modelValue":s[16]||(s[16]=o=>this.store.currentPage.pageTitle=o),"auto-save":"",style:{maxWidth:"320px"}},{default:t(o=>[e(q,{modelValue:o.value,"onUpdate:modelValue":f=>o.value=f,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:Q(o.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["modelValue"])])]),a("div",Ve,[e(K,{class:"q-mx-md q-mt-md full-width",animated:"","control-type":"arrows",ref:"carousel",modelValue:l.slide,"onUpdate:modelValue":[s[35]||(s[35]=o=>l.slide=o),this.slideChanged],infinite:"",height:"82vh",onTransition:this.slideTransitioned},{control:t(()=>[e(ee,{position:"bottom",offset:[0,0]},{default:t(()=>[a("div",et,[e(i,{push:"",round:"",class:"dash-button","text-color":"white",icon:"arrow_left",style:P({height:"33.5px",width:"33.5px"}),onClick:s[28]||(s[28]=o=>l.$refs.carousel.previous())},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Previous page ")]),_:1})]),_:1})]),_:1},8,["style"]),e(i,{push:"",round:"",class:"on-right dash-button","text-color":"white",icon:"arrow_right",style:P({height:"33.5px",width:"33.5px"}),onClick:s[29]||(s[29]=o=>l.$refs.carousel.next())},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Next page ")]),_:1})]),_:1})]),_:1},8,["style"]),this.store.currentAssignment.pages.length>0?(u(),C(i,{key:0,"no-caps":"",class:"dash-button on-right",onClick:s[30]||(s[30]=o=>this.viewerCB()),icon:"play_circle_outline"},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Test assignment in Viewer ")]),_:1})]),_:1})]),_:1})):v("",!0),this.store.role==="teacher"?(u(),m("span",tt,[e(i,{"no-caps":"",icon:"add",class:"dash-button on-right",onClick:s[31]||(s[31]=o=>this.appendPage())},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Append a new page ")]),_:1})]),_:1})]),_:1})])):v("",!0),this.store.currentPage?(u(),m("span",st,[e(K,{class:"hidden",infinite:"",thumbnails:"","navigation-position":"top",style:{backgroundColor:"#3330",height:"44px",width:"95px"},modelValue:this.store.currentPage.imgIdx,"onUpdate:modelValue":s[32]||(s[32]=o=>this.store.currentPage.imgIdx=o)},{default:t(()=>[(u(!0),m(S,null,$(this.store.currentPage.imgs,(o,f)=>(u(),C(L,{key:f,name:f,"img-src":this.store.currentPage.imgs[f].url,onClick:A=>this.test(l.pidx,f)},null,8,["name","img-src","onClick"]))),128))]),_:1},8,["modelValue"])])):v("",!0),e(i,{push:"",round:"",class:"dash-button","text-color":"white",icon:"arrow_left",style:P({height:"33.5px",width:"33.5px"}),onClick:s[33]||(s[33]=o=>this.decImgIdx(this.store.currentPage))},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Previous image ")]),_:1})]),_:1})]),_:1},8,["style"]),e(i,{push:"",round:"",class:"dash-button","text-color":"white",icon:"arrow_right",style:P({height:"33.5px",width:"33.5px"}),onClick:s[34]||(s[34]=o=>this.incImgIdx(this.store.currentPage))},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Next image ")]),_:1})]),_:1})]),_:1},8,["style"])])]),_:1})]),default:t(()=>[(u(!0),m(S,null,$(this.store.currentAssignment.pages,(o,f)=>{var A;return u(),C(L,{class:"text-panel items-center justify-center row",key:f,name:f,"img-src":(A=o==null?void 0:o.imgs[o==null?void 0:o.imgIdx])==null?void 0:A.url},{default:t(()=>[this.store.showPreview?(u(),m("div",Pe,[e(r,{"no-padding":"",class:"full-width",style:{height:"63vh"}},{default:t(()=>[e(h,null,{default:t(()=>[a("div",Ie,[n("Page Preview "),e(i,{round:"",class:"float-right",icon:"close",onClick:s[17]||(s[17]=d=>this.store.showPreview=!1)})])]),_:1}),e(h,{class:"full-width",id:"wpIframeContainer",style:{padding:"0px 0px"}}),e(I,{align:"right"},{default:t(()=>[e(i,{outline:"",label:"Cancel",onClick:s[18]||(s[18]=d=>this.store.showPreview=!1)}),e(i,{id:"keepB",outline:"",label:"Append Page",onClick:s[19]||(s[19]=d=>this.keepPage())},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" A new Page will be appended ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])):(u(),m("table",qe,[e(Y,null,{default:t(()=>[n("Page "+c(f+1)+" / "+c(this.store.currentAssignment.pages.length),1)]),_:2},1024),a("tr",null,[a("td",null,[a("div",null,[a("div",{id:"pageEditTextDiv",contenteditable:"true",class:"text-white q-px-md",style:P({overflow:"hidden",fontSize:`${this.store.userSnapshot.preferences.pageFontSize}pt`})},c(o.pageText),5),a("div",Te,[e(i,{round:"",flat:"",size:"md",class:"q-ma-sm",icon:"volume_up",onClick:d=>this.store.speakText(o.pageText)},null,8,["onClick"]),e(i,{round:"",flat:"",size:"md",class:"q-ma-sm",icon:"clear",onClick:s[20]||(s[20]=d=>this.clearCB())}),e(i,{round:"",flat:"",size:"md",class:"q-ma-sm",icon:"save",onClick:s[21]||(s[21]=d=>this.saveTextCB())})])]),e(te)])]),a("tr",null,[a("td",Se,[a("table",Be,[a("tr",null,[Ae,a("td",Ue,[a("div",$e,[e(j,null,{default:t(()=>[n(c(o.pageTitle.slice(0,25))+" ...",1)]),_:2},1024)]),e(D,{modelValue:o.pageTitle,"onUpdate:modelValue":d=>o.pageTitle=d,"auto-save":""},{default:t(d=>[e(q,{modelValue:d.value,"onUpdate:modelValue":U=>d.value=U,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:Q(d.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])]),a("tr",ze,[Qe,a("td",Ne,c(o.pageid),1)]),a("tr",null,[De,a("td",Ke,[this.store.currentPage?(u(),C(i,{key:0,dense:"",round:"",flat:"",onClick:s[22]||(s[22]=d=>this.showPct=!0)},{default:t(()=>[n(c(this.store.currentPage.pctReplace)+"% ",1),e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Percentage of words to replace on this page ")]),_:1})]),_:1})]),_:1})):v("",!0)])]),a("tr",null,[Le,a("td",Re,[e(R,{flat:""},{default:t(()=>[e(i,{flat:"",dense:""},{default:t(()=>[n(c(o.imgIdx+1)+"/"+c(o.imgs.length),1)]),_:2},1024),e(i,{flat:"",round:"",dense:"",icon:"add",onClick:s[23]||(s[23]=d=>l.showAddImage=!0),class:"addImgB"},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Add an image to this page ")]),_:1})]),_:1})]),_:1})]),_:2},1024)])]),a("tr",null,[je,a("td",{class:"val cursor-pointer",onClick:s[24]||(s[24]=d=>this.showLanguage=!0)},[a("span",Ee,[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(c(o.langVoiceKey),1)]),_:2},1024)]),_:2},1024)])])]),Ge,a("tr",null,[a("td",Oe,[a("div",Fe,[e(R,null,{default:t(()=>[e(i,{icon:"content_copy",onClick:d=>this.copyImageUrl(o.imgs[o.imgIdx].url)},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Copy the url of image currently"),Je,n(" displayed to the clipboard. ")]),_:1})]),_:1})]),_:2},1032,["onClick"]),e(i,{icon:"link",onClick:d=>this.wpCB(o.pageid)},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" View the full Wikipedia article in a new tab ")]),_:1})]),_:1})]),_:2},1032,["onClick"]),e(i,{icon:"place",onClick:this.mapCB},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" View associated location on Google Maps, if applicable ")]),_:1})]),_:1})]),_:1},8,["onClick"]),e(i,{icon:"bookmark",onClick:this.bookmarkImage},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Bookmark the current image ")]),_:1})]),_:1})]),_:1},8,["onClick"]),e(i,{icon:"bookmark",onClick:this.bookmarkPage},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Bookmark the current page ")]),_:1})]),_:1})]),_:1},8,["onClick"])]),_:2},1024)])])]),a("tr",null,[a("td",We,[e(se,{label:"Alternate Languages","header-style":{color:"seagreen",padding:"0px 0px"}},{default:t(()=>[(u(!0),m(S,null,$(o.currentLangLinks,(d,U)=>(u(),m("span",{key:U,onClick:at=>this.langLinkCB(d)},[this.langNames.indexOf(d.lang)>-1?(u(),m("span",He,[a("u",null,c(d.lang),1),n(",\xA0 ")])):v("",!0)],8,Me))),128))]),_:2},1024)])]),a("tr",null,[a("td",Xe,[a("div",Ye,[e(i,{"no-caps":"",icon:"delete",class:"dash-button on-right",onClick:s[25]||(s[25]=d=>this.removePage())},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Delete the current page ")]),_:1})]),_:1})]),_:1}),e(i,{"no-caps":"",class:"dash-button on-right",onClick:s[26]||(s[26]=d=>this.setAssignmentCoverURL()),icon:"wallpaper"},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Use the image currently showing as"),Ze,n("the cover image for the assignment ")]),_:1})]),_:1})]),_:1}),e(i,{"no-caps":"",icon:"save",class:"dash-button on-right",onClick:s[27]||(s[27]=d=>this.store.commitCurrentAssignment())},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(r,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Save assignment to cloud database ")]),_:1})]),_:1})]),_:1})])])])])])])]))]),_:2},1032,["name","img-src"])}),128))]),_:1},8,["modelValue","onUpdate:modelValue","onTransition"])])])):v("",!0)]),_:1})],64)}var At=J(ne,[["render",lt]]);export{At as default};
