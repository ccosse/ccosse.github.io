import{_ as B,j as z,r as g,w as D,k as u,F as h,q as e,n as s,H as I,aM as K,ae as f,Q as r,s as l,G as i,m as v,a9 as G,aa as y,ai as P,aN as S,ab as _,a8 as Q}from"./index.8e5f9338.js";import{d as w,Q as m,c as V,C as x}from"./ClosePopup.796160d5.js";import{Q as d}from"./QCard.82f88944.js";import{Q as T,a as R}from"./QSelect.940e338b.js";import{Q as C,a as L}from"./QMenu.82897c6f.js";import{Q as p}from"./QTooltip.ee180eb8.js";import{c as j,Q as A,a as $,b as O,d as N}from"./copy-to-clipboard.3504b126.js";import{Q as E}from"./QPage.6a7384ae.js";import{u as F}from"./store.e480c74b.js";import"./transform.9aa67f3e.js";import{s as q}from"./selectAll.be636dd1.js";import"./use-prevent-scroll.632b9a30.js";import"./scroll.e9c7857f.js";import"./use-timeout.759c6395.js";import"./use-tick.be27c786.js";import"./use-model-toggle.72188a3e.js";import"./use-dark.e174b86d.js";import"./TouchPan.5369ac5c.js";import"./touch.70a9dd44.js";import"./selection.1dfdd0d2.js";import"./QItemLabel.bed71aa2.js";import"./use-cache.b0833c75.js";import"./firebase.dc843dde.js";import"./axios.84ae42e4.js";const J=z({name:"AssignmentsDashboard",setup(){return{store:F(),slide:g(-1),showText:g(!1),showCap:g(!1),showGoal:g(!1),showPct:g(!1),showLanguage:g(!1),showAddImage:g(!1),confirm:g(!1),carousel:g(""),flagName:g(""),newImageUrl:g(""),langNames:g(["en","th","es","fr","it","de","zh","ja","sw","pt","ru","id","ke"])}},mounted(){console.log("AssignmentsDashboard mounted"),this.slide=this.store.aid,this.store.pgIdx=null,this.store.carousel=this.carousel,q("#slideTextDiv").style("font-size",this.store.userSnapshot.preferences.pageFontSize+"pt"),D(this.store.currentPage,async(o,t)=>{console.log("A-Dash watcher pgIdx ",this.store.pgIdx),this.slide=this.store.pgIdx,this.store.imgIdx=this.store.currentPage.imgIdx})},methods:{keepPage(){this.store.showPreview=!1},removeAssignment(){this.store.deleteAssignment(this.store.ck,this.store.aid)},bookmarkImage(){this.store.saveImage()},bookmarkPage(){this.store.saveBookmark()},addImageCB(){const o={url:this.newImageUrl,cap:"Caption"};this.store.courses[this.store.ck].assignments[this.store.aid].pages[this.store.pgIdx].imgs.push(o);const t=this.store.courses[this.store.ck].assignments[this.store.aid].pages[this.store.pgIdx].imgs.length;this.store.courses[this.store.ck].assignments[this.store.aid].pages[this.store.pgIdx].imgIdx=t-1},copyImageUrl(o){j(o),this.store.notify({msg:"Current image url copied to clipboard"})},langLinkCB(o){console.log(o.url),window.open(o.url,"_blank")},wpCB(o){const t=this.store.langVoices[this.store.currentPage.langVoiceKey].langName,k="https://"+t+".wikipedia.org/wiki?curid="+o;window.open(k,"_blank")},mapCB(){const o="https://maps.google.com/?ll="+this.store.currentPage.mapCoords.split(",")[0]+","+this.store.currentPage.mapCoords.split(",")[1];window.open(o,"_blank")},viewerCB(){console.log("AssignmentDash viewerCB setting pgIdx 0 before /viewwer"),this.store.pgIdx=0,this.store.router.replace("/viewer")},langChangeCB(o){console.log("langChangeCB",o);const t=this.flagName;console.log("turning off ",t),q(".pfi").classed(t,!1),console.log(this.store.langVoices),this.flagName=this.store.langVoices[o].flagName,console.log("turning on ",this.flagName),q(".pfi").classed(this.flagName,!0)},setCourseCoverURL(){try{this.store.currentCourse.coverUrl=this.store.currentAssignment.pages[this.store.pgIdx].imgs[this.store.imgIdx].url}catch(o){console.log(o)}},editPageText(o){this.store.pgIdx=o,this.showText=!0},editImageCaption(){this.showCap=!0},incImgIdx(o){o.imgIdx+1>o.imgs.length-1?o.imgIdx=0:o.imgIdx+=1,this.store.imgIdx=o.imgIdx},decImgIdx(o){o.imgIdx-1<0?o.imgIdx=o.imgs.length-1:o.imgIdx-=1,this.store.imgIdx=o.imgIdx},test(o,t){console.log("test set ",o,t);const k=this.store.currentAssignment.pages[o];try{k.imgIdx=t}catch(U){console.log(U)}},insertPage(){const o=JSON.parse(JSON.stringify(this.store.pageTemplate));o.langVoiceKey=this.store.userSnapshot.preferences.langVoiceKey,o.pctReplace=this.store.userSnapshot.preferences.pctReplace,this.store.currentAssignment.pages.splice(this.store.pgIdx,0,o)},appendPage(){const o=JSON.parse(JSON.stringify(this.store.pageTemplate));o.langVoiceKey=this.store.userSnapshot.preferences.langVoiceKey,o.pctReplace=this.store.userSnapshot.preferences.pctReplace,this.store.currentAssignment.pages.push(o),this.carousel.goTo(this.store.currentAssignment.pages.length-1)},removePage(){this.store.currentAssignment.pages.splice(this.store.pgIdx,1),this.store.currentAssignment.pages.length<=this.store.pgIdx&&(this.store.pgIdx-=1,this.slide=this.store.pgIdx)},slideChanged(o){this.store.aid=o,this.store.pgIdx=null},slideTransitioned(o,t){console.log(o,t)}}}),W=l("span",{class:"q-ml-sm"},"Confirm delete current page?",-1),H=l("div",{class:"text-h6"},"Points Goal of Assignment",-1),M=l("div",{class:"text-h6"},"Set Lang-Voice This Page",-1),X=l("div",null," Play with this but don't save as a different language, CHANGE IT BACK to whatever it originally was. This is because the Wikipedia page link is coupled to the language. By changing this you can speak English with a French accent, for example, but saving the page with a different language will prevent the page from displaying in the future because there will be a mis-match and it takes 2 variables to specify a Wikipedia page request. It is left on the user to ensure the original language is ultimately saved. ",-1),Y=l("span",{class:"on-right pfi"},null,-1),Z={width:"100%",class:"z-max"},ee=l("div",{class:"text-h6"},"Percent Replace",-1),te={key:0},se={key:1,class:"justify-center absolute-top"},oe={class:"text-panel justify-center q-mx-md q-mb-xs q-mt-md text-h6"},le={class:"cursor-pointer"},ae={class:"q-px-md row content-center"},ne={key:0,id:"wpIframeDiv",class:"flex flex-center col-12 col-md-8"},ie={class:"text-h6"},re={key:1,class:"embed-panel assignment",style:{"z-index":"5",height:"30vh","max-height":"30vh"}},de={class:"q-px-lg row content-start"},ue={class:"meta-table"},ge=l("th",{class:"key"},"Title",-1),me={class:"val"},pe={class:"cursor-pointer"},he=l("th",{class:"key"},"Cover Url",-1),ce={class:"val"},fe={class:"cursor-pointer"},we=l("th",{class:"key"},"Pages",-1),xe={class:"val"},ve={class:"hidden"},ye=l("th",{class:"key"},"Goal",-1),Ce={class:"val cursor-pointer"},Ve=l("th",{class:"key"},"Created",-1),ke={class:"val"},be=l("th",{class:"key"},"Updated",-1),_e={class:"val"},Ie={key:0,style:{"text-align":"center"}},Pe=l("br",null,null,-1),Ae={key:1,class:"on-right flex flex-center"},qe={class:"control-panel q-pa-sm row no-wrap flex flex-center",style:{overflow:"auto"}};function Ue(o,t,k,U,Se,Qe){return u(),h(I,null,[e(w,{modelValue:o.confirm,"onUpdate:modelValue":t[1]||(t[1]=a=>o.confirm=a),persistent:"",class:"z-max"},{default:s(()=>[e(d,null,{default:s(()=>[e(m,{class:"row items-center"},{default:s(()=>[e(K,{icon:"delete",color:"primary","text-color":"white"}),W]),_:1}),e(V,{align:"right",class:"text-white"},{default:s(()=>[f(e(r,{flat:"",label:"Cancel"},null,512),[[x]]),f(e(r,{flat:"",label:"Delete",onClick:t[0]||(t[0]=a=>this.removePage())},null,512),[[x]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(w,{modelValue:o.showGoal,"onUpdate:modelValue":t[3]||(t[3]=a=>o.showGoal=a),persistent:""},{default:s(()=>[e(d,{style:{"min-width":"350px"}},{default:s(()=>[e(m,{align:"center"},{default:s(()=>[H]),_:1}),e(m,{class:"q-pt-none",align:"center"},{default:s(()=>[e(T,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",modelValue:this.store.currentAssignment.goal,"onUpdate:modelValue":t[2]||(t[2]=a=>this.store.currentAssignment.goal=a)},null,8,["thickness","modelValue"])]),_:1}),e(V,{align:"center",class:"text-white"},{default:s(()=>[f(e(r,{flat:"",label:"Done"},null,512),[[x]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(w,{modelValue:o.showLanguage,"onUpdate:modelValue":t[5]||(t[5]=a=>o.showLanguage=a),persistent:""},{default:s(()=>[e(d,{style:{"min-width":"350px"}},{default:s(()=>[e(m,null,{default:s(()=>[M,X,Y]),_:1}),e(m,{class:"q-pt-none"},{default:s(()=>[l("table",Z,[l("tr",null,[l("td",null,[e(R,{class:"z-max",outlined:"",modelValue:this.store.currentPage.langVoiceKey,"onUpdate:modelValue":[t[4]||(t[4]=a=>this.store.currentPage.langVoiceKey=a),this.langChangeCB],options:this.store.userSnapshot.preferences.langVoices},null,8,["modelValue","options","onUpdate:modelValue"])])])])]),_:1}),e(V,{align:"right",class:"text-white"},{default:s(()=>[f(e(r,{outline:"",flat:"",label:"Done"},null,512),[[x]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(w,{modelValue:o.showPct,"onUpdate:modelValue":t[7]||(t[7]=a=>o.showPct=a),persistent:""},{default:s(()=>[e(d,{style:{"min-width":"350px"}},{default:s(()=>[e(m,{align:"center"},{default:s(()=>[ee]),_:1}),e(m,{class:"q-pt-none",align:"center"},{default:s(()=>[e(T,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",modelValue:this.store.currentPage.pctReplace,"onUpdate:modelValue":t[6]||(t[6]=a=>this.store.currentPage.pctReplace=a)},null,8,["thickness","modelValue"])]),_:1}),e(V,{align:"center",class:"text-white"},{default:s(()=>[f(e(r,{flat:"",label:"Done"},null,512),[[x]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(w,{modelValue:o.showText,"onUpdate:modelValue":t[10]||(t[10]=a=>o.showText=a)},{default:s(()=>[l("div",null,[e(d,{class:"q-pa-md outlined q-ma-lg text-white text-center",style:{width:"400px"}},{default:s(()=>[e(C,{modelValue:this.store.currentPage.pageText,"onUpdate:modelValue":t[8]||(t[8]=a=>this.store.currentPage.pageText=a),type:"textarea",clearable:"",dense:"",autofocus:"",filled:"",autogrow:"",counter:""},null,8,["modelValue"]),e(r,{onClick:t[9]||(t[9]=a=>o.showText=!1)},{default:s(()=>[i("Close")]),_:1})]),_:1})])]),_:1},8,["modelValue"]),e(w,{modelValue:o.showCap,"onUpdate:modelValue":t[13]||(t[13]=a=>o.showCap=a)},{default:s(()=>[l("div",null,[e(d,{class:"q-pa-md outlined q-ma-lg text-white text-center",style:{width:"400px",height:"200px"}},{default:s(()=>[e(C,{modelValue:this.store.currentPage.imgs[this.store.currentPage.imgIdx].cap,"onUpdate:modelValue":t[11]||(t[11]=a=>this.store.currentPage.imgs[this.store.currentPage.imgIdx].cap=a),type:"textarea",clearable:"",dense:"",autofocus:"",counter:""},null,8,["modelValue"]),e(r,{onClick:t[12]||(t[12]=a=>o.showCap=!1)},{default:s(()=>[i("Close")]),_:1})]),_:1})])]),_:1},8,["modelValue"]),e(w,{modelValue:o.showAddImage,"onUpdate:modelValue":t[15]||(t[15]=a=>o.showAddImage=a)},{default:s(()=>[l("div",null,[e(d,{class:"q-pa-md outlined q-ma-lg text-white text-center",style:{width:"400px",height:"200px"}},{default:s(()=>[e(m,null,{default:s(()=>[i("Enter image url")]),_:1}),e(C,{modelValue:this.newImageUrl,"onUpdate:modelValue":t[14]||(t[14]=a=>this.newImageUrl=a),type:"input",clearable:"",dense:"",autofocus:"",counter:""},null,8,["modelValue"]),f((u(),v(r,null,{default:s(()=>[i("Close")]),_:1})),[[x]]),f((u(),v(r,{onClick:o.addImageCB},{default:s(()=>[i("Add")]),_:1},8,["onClick"])),[[x]])]),_:1})])]),_:1},8,["modelValue"]),e(E,{class:"flex flex-center"},{default:s(()=>[!this.store.aid||this.store.aid===-1?(u(),h("div",te,[e(d,{flat:"",bordered:"",class:"q-ma-md q-pa-md cursor-pointer tile-component flex flex-center",onClick:t[16]||(t[16]=a=>this.store.newAssignment()),style:{width:"200px"}},{default:s(()=>[e(G,{name:"add",class:"text-h1"}),e(p,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:s(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:s(()=>[i(" Create a new assignment ")]),_:1})]),_:1})]),_:1})])):(u(),h("div",se,[l("div",oe,[i(" Assignment: "),l("span",le,[i(y(this.store.currentAssignment.title)+" ",1),e(A,{modelValue:this.store.currentAssignment.title,"onUpdate:modelValue":t[17]||(t[17]=a=>this.store.currentAssignment.title=a),"auto-save":"",style:{maxWidth:"320px"}},{default:s(a=>[e(C,{modelValue:a.value,"onUpdate:modelValue":b=>a.value=b,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:P(a.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["modelValue"])])]),l("div",ae,[e($,{class:"q-mx-md q-mt-md full-width",animated:"",modelValue:o.slide,"onUpdate:modelValue":[t[33]||(t[33]=a=>o.slide=a),this.slideChanged],infinite:"","control-type":"arrows",ref:"carousel",height:"82vh",onTransition:this.slideTransitioned},{control:s(()=>[e(O,{position:"bottom",offset:[0,0]},{default:s(()=>[l("div",qe,[e(r,{push:"",round:"",class:"dash-button","text-color":"white",icon:"arrow_left",style:S({height:"33.5px",width:"33.5px"}),onClick:t[29]||(t[29]=a=>o.$refs.carousel.previous())},{default:s(()=>[e(p,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:s(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:s(()=>[i(" Previous assignment ")]),_:1})]),_:1})]),_:1},8,["style"]),this.store.currentAssignment.pages.length>0?(u(),v(r,{key:0,"no-caps":"",class:"dash-button on-right",onClick:t[30]||(t[30]=a=>this.viewerCB()),icon:"play_circle_outline"},{default:s(()=>[e(p,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:s(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:s(()=>[i(" Test assignment in Viewer ")]),_:1})]),_:1})]),_:1})):_("",!0),e(r,{"no-caps":"",icon:"add",class:"dash-button on-right",onClick:t[31]||(t[31]=a=>this.store.newAssignment())},{default:s(()=>[e(p,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:s(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:s(()=>[i(" New assignment ")]),_:1})]),_:1})]),_:1}),e(r,{push:"",round:"",class:"on-right dash-button","text-color":"white",icon:"arrow_right",style:S({height:"33.5px",width:"33.5px"}),onClick:t[32]||(t[32]=a=>o.$refs.carousel.next())},{default:s(()=>[e(p,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:s(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:s(()=>[i(" Next assignment ")]),_:1})]),_:1})]),_:1},8,["style"])])]),_:1})]),default:s(()=>[(u(!0),h(I,null,Q(this.store.currentCourse.assignments,(a,b)=>(u(),v(N,{class:"text-panel row content-center justify-center",key:b,name:b,"img-src":a.coverUrl},{default:s(()=>[this.store.showPreview?(u(),h("div",ne,[e(d,{"no-padding":"",class:"full-width",style:{height:"63vh"}},{default:s(()=>[e(m,null,{default:s(()=>[l("div",ie,[i("Page Preview "),e(r,{round:"",class:"float-right",icon:"close",onClick:t[18]||(t[18]=n=>this.store.showPreview=!1)})])]),_:1}),e(m,{class:"full-width",id:"wpIframeContainer",style:{padding:"0px 0px"}}),e(V,{align:"right"},{default:s(()=>[e(r,{outline:"",label:"Cancel",onClick:t[19]||(t[19]=n=>this.store.showPreview=!1)}),e(r,{id:"keepB",outline:"",label:"Append Page",onClick:t[20]||(t[20]=n=>this.keepPage())},{default:s(()=>[e(p,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:s(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:s(()=>[i(" A new Page will be appended ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])):(u(),h("table",re,[e(L,null,{default:s(()=>[i("Assignment")]),_:1}),l("tr",null,[l("td",de,[l("table",ue,[l("tr",null,[ge,l("td",me,[l("div",pe,[i(y(this.store.currentAssignment.title)+" ",1),e(A,{modelValue:this.store.courses[this.store.ck].assignments[this.store.aid].title,"onUpdate:modelValue":t[21]||(t[21]=n=>this.store.courses[this.store.ck].assignments[this.store.aid].title=n),"auto-save":""},{default:s(n=>[e(C,{modelValue:n.value,"onUpdate:modelValue":c=>n.value=c,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:P(n.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["modelValue"])])])]),l("tr",null,[he,l("td",ce,[l("div",fe,[i(" Change "),e(A,{modelValue:this.store.currentAssignment.coverUrl,"onUpdate:modelValue":t[22]||(t[22]=n=>this.store.currentAssignment.coverUrl=n),"auto-save":""},{default:s(n=>[e(C,{modelValue:n.value,"onUpdate:modelValue":c=>n.value=c,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:P(n.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["modelValue"])])])]),l("tr",null,[we,l("td",xe,y(this.store.currentAssignment.pages.length),1)]),l("tr",ve,[ye,l("td",Ce,[l("span",{onClick:t[23]||(t[23]=n=>this.showGoal=!0)},y(this.store.currentAssignment.goal),1)])]),l("tr",null,[Ve,l("td",ke,y(this.store.currentAssignment.created),1)]),l("tr",null,[be,l("td",_e,y(this.store.currentAssignment.updated),1)])])])]),l("tr",null,[l("td",null,[this.store.role==="teacher"?(u(),h("div",Ie,[e(r,{"no-caps":"",icon:"delete",class:"dash-button on-right",onClick:t[24]||(t[24]=n=>this.removeAssignment())},{default:s(()=>[e(p,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:s(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:s(()=>[i(" Delete the current assignment ")]),_:1})]),_:1})]),_:1}),e(r,{"no-caps":"",class:"dash-button on-left",onClick:t[25]||(t[25]=n=>this.setAssignmentCoverURL()),icon:"wallpaper"},{default:s(()=>[e(p,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:s(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:s(()=>[i(" Use the image currently showing as"),Pe,i("the cover image for the course ")]),_:1})]),_:1})]),_:1}),e(r,{"no-caps":"",icon:"save",class:"dash-button on-right",onClick:t[26]||(t[26]=n=>this.store.commitCurrentAssignment())},{default:s(()=>[e(p,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:s(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:s(()=>[i(" Save assignment to cloud database ")]),_:1})]),_:1})]),_:1}),this.store.currentAssignment.pages.length>0?(u(),v(r,{key:0,"no-caps":"",icon:"east",class:"dash-button on-right",onClick:t[27]||(t[27]=n=>{this.store.pgIdx=0,this.store.router.push("/courses/assignments/pages")})},{default:s(()=>[e(p,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:s(()=>[e(d,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:s(()=>[i(" Go to pages of this assignment ")]),_:1})]),_:1})]),_:1})):_("",!0),this.store.currentPage?(u(),h("span",Ae,[e($,{class:"hidden",infinite:"",autoplay:this.store.autoplay,style:{height:"44px",width:"95px",backgroundColor:"#3330"},modelValue:this.store.currentPage.imgIdx,"onUpdate:modelValue":t[28]||(t[28]=n=>this.store.currentPage.imgIdx=n)},{default:s(()=>[(u(!0),h(I,null,Q(this.store.currentPage.imgs,(n,c)=>(u(),v(N,{key:c,name:c,"img-src":this.store.currentPage.imgs[c].url,onClick:Te=>this.test(o.pidx,c)},null,8,["name","img-src","onClick"]))),128))]),_:1},8,["autoplay","modelValue"])])):_("",!0)])):_("",!0)])])]))]),_:2},1032,["name","img-src"]))),128))]),_:1},8,["modelValue","onUpdate:modelValue","onTransition"])])]))]),_:1})],64)}var lt=B(J,[["render",Ue]]);export{lt as default};
