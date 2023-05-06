import{c as E,a as G,d as O,y as F,_ as J,j as W,r as p,w as M,k as u,F as h,q as e,n as t,H as T,p as Q,aM as H,ae as y,Q as r,s as l,G as n,m as C,aa as c,ai as $,aN as I,ab as b,a8 as z}from"./index.78fc386f.js";import{d as w,Q as f,c as S,C as k}from"./ClosePopup.9ff1e3de.js";import{Q as i}from"./QCard.9003f13c.js";import{Q as N,a as X}from"./QSelect.d84cf815.js";import{Q as P}from"./use-cache.4444c58c.js";import{c as Y,Q as D,a as K,b as Z,d as L}from"./copy-to-clipboard.5a9c6e4e.js";import{Q as ee}from"./QBar.38b2e32c.js";import{b as te,Q as se}from"./QExpansionItem.5e7060dd.js";import{Q as g}from"./QTooltip.277dc110.js";import{Q as oe}from"./QPage.68a91b50.js";import{u as ae}from"./store.ac093571.js";import"./transform.9aa67f3e.js";import{s as _}from"./selectAll.be636dd1.js";import{s as v}from"./select.9628a1e9.js";import"./use-prevent-scroll.7295ca19.js";import"./scroll.3e753f5f.js";import"./use-timeout.b85bac3e.js";import"./use-tick.904c8dc6.js";import"./use-model-toggle.48cd7ed8.js";import"./use-dark.5aa31aa2.js";import"./TouchPan.63072f08.js";import"./touch.70a9dd44.js";import"./selection.469c7e42.js";import"./QItemLabel.ebfcd204.js";import"./firebase.dc843dde.js";import"./axios.84ae42e4.js";var R=E({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(s,{slots:o}){const x=G(()=>{const V=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(q=>s[q]===!0).map(q=>`q-btn-group--${q}`).join(" ");return`q-btn-group row no-wrap${V.length>0?" "+V:""}`+(s.spread===!0?" q-btn-group--spread":" inline")});return()=>O("div",{class:x.value},F(o.default))}});function le(s){return s===null||s===""?!1:(s=s.toString(),s=s.replaceAll("&nbsp;",""),s.replace(/(<([^>]+)>)/ig,""))}const ne=W({name:"PagesDashboard",setup(){return{store:ae(),slide:p(0),showText:p(!1),showCap:p(!1),showGoal:p(!1),showPct:p(!1),showLanguage:p(!1),showAddImage:p(!1),confirm:p(!1),carousel:p(""),flagName:p(""),newImageUrl:p(""),langNames:p(["en","th","es","fr","it","de","zh","ja","sw","pt","ru","id","ke","pl","hi","nl"])}},mounted(){this.store.pgIdx||this.store.currentAssignment.pages.length>0&&(this.store.pgIdx=this.store.currentAssignment.pages.length-1,console.log("PagesDashboard.mounted set pgIdx",this.store.pgIdx)),this.store.carousel=this.carousel,console.log("PagesDashboard mounted setting slide ",this.store.pgIdx),this.slide=this.store.pgIdx,_("#slideTextDiv").style("font-size",this.store.userSnapshot.preferences.pageFontSize+"pt"),M(this.store.pgIdx,async(s,o)=>{console.log("PagesDashboard.watcher pgIdx ",this.store.pgIdx),this.slide=this.store.pgIdx,this.store.imgIdx=this.store.currentPage.imgIdx},{immediate:!0})},methods:{clearCB(){v("#pageEditTextDiv").html("")},saveTextCB(){this.store.currentPage.pageText=le(v("#pageEditTextDiv").html())},pageTypeCB(){console.log("pageTypeCB",this.store.currentPage.pageType),this.store.currentPage.pageType===1?(console.log(this.store.currentPage.pageType),v("#textSection").classed("hidden",!0),v("#imgsSection").classed("hidden",!0),_(".guide-words").classed("hidden",!0)):this.store.currentPage.pageType===2?(console.log(this.store.currentPage.pageType),v("#textSection").classed("hidden",!0),v("#imgsSection").classed("hidden",!0),_(".guide-words").classed("hidden",!1)):this.store.currentPage.pageType===3?(console.log(this.store.currentPage.pageType),_("#slideTextDiv").attr("contenteditable",!1),_(".addImgB").classed("hidden",!0)):this.store.currentPage.pageType===4&&(console.log(this.store.currentPage.pageType),_("#slideTextDiv").attr("contenteditable",!0),_(".addImgB").classed("hidden",!1))},bookmarkImage(){this.store.saveImage()},bookmarkPage(){this.store.saveBookmark()},addImageCB(){const s={url:this.newImageUrl,cap:"Caption"};this.store.courses[this.store.ck].assignments[this.store.aid].pages[this.store.pgIdx].imgs.push(s);const o=this.store.courses[this.store.ck].assignments[this.store.aid].pages[this.store.pgIdx].imgs.length;this.store.courses[this.store.ck].assignments[this.store.aid].pages[this.store.pgIdx].imgIdx=o-1},copyImageUrl(s){Y(s),this.store.notify({msg:"Current image url copied to clipboard"})},langLinkCB(s){console.log(s.url),window.open(s.url,"_blank")},wpCB(s){const o=this.store.langVoices[this.store.currentPage.langVoiceKey].langName,x="https://"+o+".wikipedia.org/wiki?curid="+s;window.open(x,"_blank")},mapCB(){const s="https://maps.google.com/?ll="+this.store.currentPage.mapCoords.split(",")[0]+","+this.store.currentPage.mapCoords.split(",")[1];window.open(s,"_blank")},viewerCB(){console.log("AssignmentDash viewerCB setting pgIdx 0 before /viewwer"),this.store.pgIdx=0,this.store.router.replace("/viewer")},langChangeCB(s){const o=this.flagName;_(".pfi").classed(o,!1),this.flagName=this.store.langVoices[s].flagName,_(".pfi").classed(this.flagName,!0)},setAssignmentCoverURL(){try{this.store.currentAssignment.coverUrl=this.store.currentAssignment.pages[this.store.pgIdx].imgs[this.store.imgIdx].url}catch(s){console.log(s)}},editPageText(s){this.store.pgIdx=s,this.showText=!0},editImageCaption(){this.showCap=!0},incImgIdx(s){s.imgIdx+1>s.imgs.length-1?s.imgIdx=0:s.imgIdx+=1,this.store.imgIdx=s.imgIdx},decImgIdx(s){s.imgIdx-1<0?s.imgIdx=s.imgs.length-1:s.imgIdx-=1,this.store.imgIdx=s.imgIdx},test(s,o){console.log("test set ",s,o);const x=this.store.currentAssignment.pages[s];try{x.imgIdx=o}catch(V){console.log(V)}},insertPage(){const s=JSON.parse(JSON.stringify(this.store.pageTemplate));s.langVoiceKey=this.store.userSnapshot.preferences.langVoiceKey,s.pctReplace=this.store.userSnapshot.preferences.pctReplace,this.store.currentAssignment.pages.splice(this.store.pgIdx,0,s)},appendPage(){const s=JSON.parse(JSON.stringify(this.store.pageTemplate));s.langVoiceKey=this.store.userSnapshot.preferences.langVoiceKey,s.pctReplace=this.store.userSnapshot.preferences.pctReplace,this.store.currentAssignment.pages.push(s),this.carousel.goTo(this.store.currentAssignment.pages.length-1)},removePage(){this.store.currentAssignment.pages.splice(this.store.pgIdx,1),this.store.currentAssignment.pages.length<=this.store.pgIdx&&(this.store.pgIdx-=1,this.slide=this.store.pgIdx)},slideChanged(s){this.store.pgIdx=s},slideTransitioned(s,o){console.log(s,o);const x=this.store.currentAssignment.pages[this.store.pgIdx].langVoiceKey;console.log("slideChanged calling langChangeCB with ",x),this.langChangeCB(x)}}}),re=l("span",{class:"q-ml-sm"},"Confirm delete current page?",-1),ie=l("div",{class:"text-h6"},"Points Goal of Assignment",-1),de=l("div",{class:"text-h6"},"Set Lang-Voice This Page",-1),ue=l("div",null," Play with this but don't save as a different language, ie change it back to whatever it originally was. This is because the Wikipedia page link is coupled to the language. By changing this you can speak English with a French accent, for example, but saving the page with a different language will prevent the page from displaying. It is left on the user to ensure the original language is ultimately saved. ",-1),ge=l("span",{class:"on-right pfi"},null,-1),ce={width:"100%",class:"z-max"},pe=l("div",{class:"text-h6"},"Percent Replace",-1),me={key:0},he={style:{"background-color":"#333"}},fe=l("td",{class:"key q-px-md"},"Course:",-1),xe={class:"val q-px-md"},_e=l("td",{class:"key q-px-md"},"Assignment:",-1),ye={class:"val q-px-md"},we=l("td",{class:"key q-px-md"},"Page:",-1),ke={class:"val q-px-md"},Ce={key:1,class:"justify-center absolute-top"},be={class:"text-panel justify-center q-mx-md q-mb-xs q-mt-md text-h6"},ve={class:"cursor-pointer"},Ve={class:"q-px-md row content-center"},Ie={class:"embed-panel col-12 col-md-10 assignment",style:{"z-index":"5",height:"50vh","max-height":"50vh"}},Pe={style:{"text-align":"center"}},qe={class:"q-px-sm row content-start"},Te={dense:"",class:"meta-table",width:"100%"},Se=l("td",{class:"key"},"Title",-1),Be={class:"val cursor-pointer"},Ae={class:"no-wrap"},Ue={class:"pageid"},ze=l("td",{class:"key"},"WP id",-1),Qe={class:"val cursor-pointer"},$e=l("td",{class:"key"},"Replace %",-1),Ne={class:"val cursor-pointer"},De=l("td",{class:"key"},"Images",-1),Ke={class:"val"},Le=l("td",{class:"key"},"Language",-1),Re={class:"pfi"},je=l("tr",null,[l("td",{class:"key",colSpan:"2"},"More Page Actions")],-1),Ee={colSpan:"2"},Ge={class:"text-center"},Oe=l("br",null,null,-1),Fe={class:"text-primary",colSpan:"2"},Je=["onClick"],We={key:0,style:{cursor:"pointer"}},Me=l("tr",null,[l("td",{style:{"vertical-align":"top"}})],-1),He={class:"control-panel q-pa-sm row no-wrap flex flex-center",style:{overflow:"auto"}},Xe={key:1},Ye=l("br",null,null,-1),Ze={key:2,class:"on-right flex flex-center"};function et(s,o,x,V,q,tt){const B=Q("router-link"),j=Q("nobr");return u(),h(T,null,[e(w,{modelValue:s.confirm,"onUpdate:modelValue":o[1]||(o[1]=a=>s.confirm=a),persistent:"",class:"z-max"},{default:t(()=>[e(i,null,{default:t(()=>[e(f,{class:"row items-center"},{default:t(()=>[e(H,{icon:"delete",color:"primary","text-color":"white"}),re]),_:1}),e(S,{align:"right",class:"text-white"},{default:t(()=>[y(e(r,{flat:"",label:"Cancel"},null,512),[[k]]),y(e(r,{flat:"",label:"Delete",onClick:o[0]||(o[0]=a=>this.removePage())},null,512),[[k]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(w,{modelValue:s.showGoal,"onUpdate:modelValue":o[3]||(o[3]=a=>s.showGoal=a),persistent:""},{default:t(()=>[e(i,{style:{"min-width":"350px"}},{default:t(()=>[e(f,{align:"center"},{default:t(()=>[ie]),_:1}),e(f,{class:"q-pt-none",align:"center"},{default:t(()=>[e(N,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",modelValue:this.store.currentAssignment.goal,"onUpdate:modelValue":o[2]||(o[2]=a=>this.store.currentAssignment.goal=a)},null,8,["thickness","modelValue"])]),_:1}),e(S,{align:"center",class:"text-white"},{default:t(()=>[y(e(r,{flat:"",label:"Done"},null,512),[[k]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(w,{modelValue:s.showLanguage,"onUpdate:modelValue":o[5]||(o[5]=a=>s.showLanguage=a),persistent:""},{default:t(()=>[e(i,{style:{"min-width":"350px"}},{default:t(()=>[e(f,null,{default:t(()=>[de,ue,ge]),_:1}),e(f,{class:"q-pt-none"},{default:t(()=>[l("table",ce,[l("tr",null,[l("td",null,[e(X,{class:"z-max",outlined:"",modelValue:this.store.currentPage.langVoiceKey,"onUpdate:modelValue":[o[4]||(o[4]=a=>this.store.currentPage.langVoiceKey=a),this.langChangeCB],options:this.store.userSnapshot.preferences.langVoices},null,8,["modelValue","options","onUpdate:modelValue"])])])])]),_:1}),e(S,{align:"right",class:"text-white"},{default:t(()=>[y(e(r,{outline:"",flat:"",label:"Done"},null,512),[[k]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(w,{modelValue:s.showPct,"onUpdate:modelValue":o[7]||(o[7]=a=>s.showPct=a),persistent:""},{default:t(()=>[e(i,{style:{"min-width":"350px"}},{default:t(()=>[e(f,{align:"center"},{default:t(()=>[pe]),_:1}),e(f,{class:"q-pt-none",align:"center"},{default:t(()=>[e(N,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",modelValue:this.store.currentPage.pctReplace,"onUpdate:modelValue":o[6]||(o[6]=a=>this.store.currentPage.pctReplace=a)},null,8,["thickness","modelValue"])]),_:1}),e(S,{align:"center",class:"text-white"},{default:t(()=>[y(e(r,{flat:"",label:"Done"},null,512),[[k]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(w,{modelValue:s.showText,"onUpdate:modelValue":o[10]||(o[10]=a=>s.showText=a)},{default:t(()=>[l("div",null,[e(i,{class:"q-pa-md outlined q-ma-lg text-white text-center",style:{width:"400px"}},{default:t(()=>[e(P,{modelValue:this.store.currentPage.pageText,"onUpdate:modelValue":o[8]||(o[8]=a=>this.store.currentPage.pageText=a),type:"textarea",clearable:"",dense:"",autofocus:"",filled:"",autogrow:"",counter:""},null,8,["modelValue"]),e(r,{onClick:o[9]||(o[9]=a=>s.showText=!1)},{default:t(()=>[n("Close")]),_:1})]),_:1})])]),_:1},8,["modelValue"]),e(w,{modelValue:s.showCap,"onUpdate:modelValue":o[13]||(o[13]=a=>s.showCap=a)},{default:t(()=>[l("div",null,[e(i,{class:"q-pa-md outlined q-ma-lg text-white text-center",style:{width:"400px",height:"200px"}},{default:t(()=>[e(P,{modelValue:this.store.currentPage.imgs[this.store.currentPage.imgIdx].cap,"onUpdate:modelValue":o[11]||(o[11]=a=>this.store.currentPage.imgs[this.store.currentPage.imgIdx].cap=a),type:"textarea",clearable:"",dense:"",autofocus:"",counter:""},null,8,["modelValue"]),e(r,{onClick:o[12]||(o[12]=a=>s.showCap=!1)},{default:t(()=>[n("Close")]),_:1})]),_:1})])]),_:1},8,["modelValue"]),e(w,{modelValue:s.showAddImage,"onUpdate:modelValue":o[15]||(o[15]=a=>s.showAddImage=a)},{default:t(()=>[l("div",null,[e(i,{class:"q-pa-md outlined q-ma-lg text-white text-center",style:{width:"400px",height:"200px"}},{default:t(()=>[e(f,null,{default:t(()=>[n("Enter image url")]),_:1}),e(P,{modelValue:this.newImageUrl,"onUpdate:modelValue":o[14]||(o[14]=a=>this.newImageUrl=a),type:"input",clearable:"",dense:"",autofocus:"",counter:""},null,8,["modelValue"]),y((u(),C(r,null,{default:t(()=>[n("Close")]),_:1})),[[k]]),y((u(),C(r,{onClick:s.addImageCB},{default:t(()=>[n("Add")]),_:1},8,["onClick"])),[[k]])]),_:1})])]),_:1},8,["modelValue"]),e(oe,{class:"flex flex-center"},{default:t(()=>[this.store.pgIdx===null||this.store.pgIdx===-1?(u(),h("div",me,[e(i,{flat:"",bordered:"",class:"text-panel q-ma-md"},{default:t(()=>[e(f,null,{default:t(()=>[l("table",he,[l("tr",null,[fe,l("td",xe,[e(B,{to:"/courses",class:"text-white"},{default:t(()=>{var a;return[n(c((a=this.store.currentCourse)==null?void 0:a.title),1)]}),_:1})])]),l("tr",null,[_e,l("td",ye,[e(B,{to:"/courses/assignments",class:"text-white"},{default:t(()=>{var a;return[n(c((a=this.store.currentAssignment)==null?void 0:a.title),1)]}),_:1})])]),l("tr",null,[we,l("td",ke,[e(B,{to:"/courses/assignments/pages",class:"text-white"},{default:t(()=>{var a;return[n(c((a=this.store.currentPage)==null?void 0:a.pageTitle),1)]}),_:1})])])])]),_:1}),e(f,{class:"text-center"},{default:t(()=>[n(" Please select a page ")]),_:1})]),_:1})])):this.store.currentPage?(u(),h("div",Ce,[l("div",be,[n(" Page "+c(this.store.pgIdx+1)+": ",1),l("span",ve,[n(c(this.store.currentPage.pageTitle)+" ",1),e(D,{modelValue:this.store.currentPage.pageTitle,"onUpdate:modelValue":o[16]||(o[16]=a=>this.store.currentPage.pageTitle=a),"auto-save":"",style:{maxWidth:"320px"}},{default:t(a=>[e(P,{modelValue:a.value,"onUpdate:modelValue":m=>a.value=m,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:$(a.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["modelValue"])])]),l("div",Ve,[e(K,{class:"q-mx-md q-mt-md full-width",animated:"","control-type":"arrows",ref:"carousel",modelValue:s.slide,"onUpdate:modelValue":[o[31]||(o[31]=a=>s.slide=a),this.slideChanged],infinite:"",height:"82vh",onTransition:this.slideTransitioned},{control:t(()=>[e(Z,{position:"bottom",offset:[0,0]},{default:t(()=>[l("div",He,[e(r,{push:"",round:"",class:"dash-button","text-color":"white",icon:"arrow_left",style:I({height:"33.5px",width:"33.5px"}),onClick:o[22]||(o[22]=a=>s.$refs.carousel.previous())},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(i,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Previous page ")]),_:1})]),_:1})]),_:1},8,["style"]),e(r,{push:"",round:"",class:"on-right dash-button","text-color":"white",icon:"arrow_right",style:I({height:"33.5px",width:"33.5px"}),onClick:o[23]||(o[23]=a=>s.$refs.carousel.next())},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(i,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Next page ")]),_:1})]),_:1})]),_:1},8,["style"]),this.store.currentAssignment.pages.length>0?(u(),C(r,{key:0,"no-caps":"",class:"dash-button on-right",onClick:o[24]||(o[24]=a=>this.viewerCB()),icon:"play_circle_outline"},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(i,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Test assignment in Viewer ")]),_:1})]),_:1})]),_:1})):b("",!0),this.store.role==="teacher"?(u(),h("span",Xe,[e(r,{"no-caps":"",class:"dash-button on-right",onClick:o[25]||(o[25]=a=>this.setAssignmentCoverURL()),icon:"wallpaper"},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(i,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Use the image currently showing as"),Ye,n("the cover image for the assignment ")]),_:1})]),_:1})]),_:1}),e(r,{"no-caps":"",icon:"add",class:"dash-button on-right",onClick:o[26]||(o[26]=a=>this.appendPage())},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(i,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Append a new page ")]),_:1})]),_:1})]),_:1}),e(r,{"no-caps":"",icon:"delete",class:"dash-button on-right",onClick:o[27]||(o[27]=a=>this.removePage())},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(i,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Delete the current page ")]),_:1})]),_:1})]),_:1})])):b("",!0),this.store.currentPage?(u(),h("span",Ze,[e(K,{class:"hidden",infinite:"",thumbnails:"","navigation-position":"top",style:{backgroundColor:"#3330",height:"44px",width:"95px"},modelValue:this.store.currentPage.imgIdx,"onUpdate:modelValue":o[28]||(o[28]=a=>this.store.currentPage.imgIdx=a)},{default:t(()=>[(u(!0),h(T,null,z(this.store.currentPage.imgs,(a,m)=>(u(),C(L,{key:m,name:m,"img-src":this.store.currentPage.imgs[m].url,onClick:A=>this.test(s.pidx,m)},null,8,["name","img-src","onClick"]))),128))]),_:1},8,["modelValue"])])):b("",!0),e(r,{push:"",round:"",class:"dash-button","text-color":"white",icon:"arrow_left",style:I({height:"33.5px",width:"33.5px"}),onClick:o[29]||(o[29]=a=>this.decImgIdx(this.store.currentPage))},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(i,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Previous image ")]),_:1})]),_:1})]),_:1},8,["style"]),e(r,{push:"",round:"",class:"dash-button","text-color":"white",icon:"arrow_right",style:I({height:"33.5px",width:"33.5px"}),onClick:o[30]||(o[30]=a=>this.incImgIdx(this.store.currentPage))},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(i,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Next image ")]),_:1})]),_:1})]),_:1},8,["style"])])]),_:1})]),default:t(()=>[(u(!0),h(T,null,z(this.store.currentAssignment.pages,(a,m)=>{var A;return u(),C(L,{class:"text-panel items-center justify-center row",key:m,name:m,"img-src":(A=a==null?void 0:a.imgs[a==null?void 0:a.imgIdx])==null?void 0:A.url},{default:t(()=>[l("table",Ie,[e(ee,null,{default:t(()=>[n("Page "+c(m+1)+" / "+c(this.store.currentAssignment.pages.length),1)]),_:2},1024),l("tr",null,[l("td",null,[l("div",null,[l("div",{id:"pageEditTextDiv",contenteditable:"true",class:"text-white q-px-md",style:I({overflow:"hidden",fontSize:`${this.store.userSnapshot.preferences.pageFontSize}pt`})},c(a.pageText),5),l("div",Pe,[e(r,{round:"",flat:"",size:"md",class:"q-ma-sm",icon:"volume_up",onClick:d=>this.store.speakText(a.pageText)},null,8,["onClick"]),e(r,{round:"",flat:"",size:"md",class:"q-ma-sm",icon:"clear",onClick:o[17]||(o[17]=d=>this.clearCB())}),e(r,{round:"",flat:"",size:"md",class:"q-ma-sm",icon:"save",onClick:o[18]||(o[18]=d=>this.saveTextCB())})])]),e(te)])]),l("tr",null,[l("td",qe,[l("table",Te,[l("tr",null,[Se,l("td",Be,[l("div",Ae,[e(j,null,{default:t(()=>[n(c(a.pageTitle.slice(0,25))+" ...",1)]),_:2},1024)]),e(D,{modelValue:a.pageTitle,"onUpdate:modelValue":d=>a.pageTitle=d,"auto-save":""},{default:t(d=>[e(P,{modelValue:d.value,"onUpdate:modelValue":U=>d.value=U,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:$(d.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])]),l("tr",Ue,[ze,l("td",Qe,c(a.pageid),1)]),l("tr",null,[$e,l("td",Ne,[this.store.currentPage?(u(),C(r,{key:0,dense:"",round:"",flat:"",onClick:o[19]||(o[19]=d=>this.showPct=!0)},{default:t(()=>[n(c(this.store.currentPage.pctReplace)+"% ",1),e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(i,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Percentage of words to replace on this page ")]),_:1})]),_:1})]),_:1})):b("",!0)])]),l("tr",null,[De,l("td",Ke,[e(R,{flat:""},{default:t(()=>[e(r,{flat:"",dense:""},{default:t(()=>[n(c(a.imgIdx+1)+"/"+c(a.imgs.length),1)]),_:2},1024),e(r,{flat:"",round:"",dense:"",icon:"add",onClick:o[20]||(o[20]=d=>s.showAddImage=!0),class:"addImgB"},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(i,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Add an image to this page ")]),_:1})]),_:1})]),_:1})]),_:2},1024)])]),l("tr",null,[Le,l("td",{class:"val cursor-pointer",onClick:o[21]||(o[21]=d=>this.showLanguage=!0)},[l("span",Re,[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(i,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(c(a.langVoiceKey),1)]),_:2},1024)]),_:2},1024)])])]),je,l("tr",null,[l("td",Ee,[l("div",Ge,[e(R,null,{default:t(()=>[e(r,{icon:"content_copy",onClick:d=>this.copyImageUrl(a.imgs[a.imgIdx].url)},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(i,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Copy the url of image currently"),Oe,n(" displayed to the clipboard. ")]),_:1})]),_:1})]),_:2},1032,["onClick"]),e(r,{icon:"link",onClick:d=>this.wpCB(a.pageid)},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(i,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" View the full Wikipedia article in a new tab ")]),_:1})]),_:1})]),_:2},1032,["onClick"]),e(r,{icon:"place",onClick:this.mapCB},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(i,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" View associated location on Google Maps, if applicable ")]),_:1})]),_:1})]),_:1},8,["onClick"]),e(r,{icon:"bookmark",onClick:this.bookmarkImage},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(i,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Bookmark the current image ")]),_:1})]),_:1})]),_:1},8,["onClick"]),e(r,{icon:"bookmark",onClick:this.bookmarkPage},{default:t(()=>[e(g,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[e(i,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[n(" Bookmark the current page ")]),_:1})]),_:1})]),_:1},8,["onClick"])]),_:2},1024)])])]),l("tr",null,[l("td",Fe,[e(se,{label:"Alternate Languages","header-style":{color:"seagreen",padding:"0px 0px"}},{default:t(()=>[(u(!0),h(T,null,z(a.currentLangLinks,(d,U)=>(u(),h("span",{key:U,onClick:st=>this.langLinkCB(d)},[this.langNames.indexOf(d.lang)>-1?(u(),h("span",We,[l("u",null,c(d.lang),1),n(",\xA0 ")])):b("",!0)],8,Je))),128))]),_:2},1024)])])])])]),Me])]),_:2},1032,["name","img-src"])}),128))]),_:1},8,["modelValue","onUpdate:modelValue","onTransition"])])])):b("",!0)]),_:1})],64)}var Tt=J(ne,[["render",et]]);export{Tt as default};
