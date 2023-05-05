import{_ as z,j as K,r as m,w as D,k as u,F as c,q as e,n as o,H as I,p as G,aM as R,ae as f,Q as r,s as a,G as n,m as y,aa as x,ai as A,aN as S,ab as _,a8 as Q}from"./index.a106e176.js";import{d as w,Q as g,c as k,C as v}from"./ClosePopup.ce879e7e.js";import{Q as i}from"./QCard.66f2fb50.js";import{Q as T,a as L}from"./QSelect.3cfb8f80.js";import{Q as V}from"./use-cache.de55b9d7.js";import{c as j,Q as q,a as N,b as O,d as B}from"./copy-to-clipboard.a4385bdf.js";import{Q as E}from"./QBar.0bf1a4d5.js";import{Q as p}from"./QTooltip.274994a5.js";import{Q as F}from"./QPage.dc2ed18f.js";import{u as J}from"./store.cc10ef94.js";import"./transform.9aa67f3e.js";import{s as U}from"./selectAll.be636dd1.js";import"./use-prevent-scroll.58fe0662.js";import"./scroll.d4757ed6.js";import"./use-timeout.913f0604.js";import"./use-tick.f45ab339.js";import"./use-model-toggle.79514b13.js";import"./use-dark.3fd686e6.js";import"./TouchPan.7881c2ab.js";import"./touch.70a9dd44.js";import"./selection.4eb6edca.js";import"./QItemLabel.76ca7cb6.js";import"./firebase.dc843dde.js";import"./axios.84ae42e4.js";const W=K({name:"AssignmentsDashboard",setup(){return{store:J(),slide:m(-1),showText:m(!1),showCap:m(!1),showGoal:m(!1),showPct:m(!1),showLanguage:m(!1),showAddImage:m(!1),confirm:m(!1),carousel:m(""),flagName:m(""),newImageUrl:m(""),langNames:m(["en","th","es","fr","it","de","zh","ja","sw","pt","ru","id","ke"])}},mounted(){console.log("AssignmentsDashboard mounted"),this.slide=this.store.aid,this.store.pgIdx=null,this.store.carousel=this.carousel,U("#slideTextDiv").style("font-size",this.store.userSnapshot.preferences.pageFontSize+"pt"),D(this.store.currentPage,async(s,t)=>{console.log("A-Dash watcher pgIdx ",this.store.pgIdx),this.slide=this.store.pgIdx,this.store.imgIdx=this.store.currentPage.imgIdx})},methods:{removeAssignment(){this.store.deleteAssignment(this.store.ck,this.store.aid)},bookmarkImage(){this.store.saveImage()},bookmarkPage(){this.store.saveBookmark()},addImageCB(){const s={url:this.newImageUrl,cap:"Caption"};this.store.courses[this.store.ck].assignments[this.store.aid].pages[this.store.pgIdx].imgs.push(s);const t=this.store.courses[this.store.ck].assignments[this.store.aid].pages[this.store.pgIdx].imgs.length;this.store.courses[this.store.ck].assignments[this.store.aid].pages[this.store.pgIdx].imgIdx=t-1},copyImageUrl(s){j(s),this.store.notify("Current image url copied to clipboard")},langLinkCB(s){console.log(s.url),window.open(s.url,"_blank")},wpCB(s){const t=this.store.langVoices[this.store.currentPage.langVoiceKey].langName,C="https://"+t+".wikipedia.org/wiki?curid="+s;window.open(C,"_blank")},mapCB(){const s="https://maps.google.com/?ll="+this.store.currentPage.mapCoords.split(",")[0]+","+this.store.currentPage.mapCoords.split(",")[1];window.open(s,"_blank")},viewerCB(){console.log("AssignmentDash viewerCB setting pgIdx 0 before /viewwer"),this.store.pgIdx=0,this.store.router.replace("/viewer")},langChangeCB(s){console.log("langChangeCB",s);const t=this.flagName;console.log("turning off ",t),U(".pfi").classed(t,!1),console.log(this.store.langVoices),this.flagName=this.store.langVoices[s].flagName,console.log("turning on ",this.flagName),U(".pfi").classed(this.flagName,!0)},setCourseCoverURL(){try{this.store.currentCourse.coverUrl=this.store.currentAssignment.pages[this.store.pgIdx].imgs[this.store.imgIdx].url}catch(s){console.log(s)}},editPageText(s){this.store.pgIdx=s,this.showText=!0},editImageCaption(){this.showCap=!0},incImgIdx(s){s.imgIdx+1>s.imgs.length-1?s.imgIdx=0:s.imgIdx+=1,this.store.imgIdx=s.imgIdx},decImgIdx(s){s.imgIdx-1<0?s.imgIdx=s.imgs.length-1:s.imgIdx-=1,this.store.imgIdx=s.imgIdx},test(s,t){console.log("test set ",s,t);const C=this.store.currentAssignment.pages[s];try{C.imgIdx=t}catch(P){console.log(P)}},insertPage(){const s=JSON.parse(JSON.stringify(this.store.pageTemplate));s.langVoiceKey=this.store.userSnapshot.preferences.langVoiceKey,s.pctReplace=this.store.userSnapshot.preferences.pctReplace,this.store.currentAssignment.pages.splice(this.store.pgIdx,0,s)},appendPage(){const s=JSON.parse(JSON.stringify(this.store.pageTemplate));s.langVoiceKey=this.store.userSnapshot.preferences.langVoiceKey,s.pctReplace=this.store.userSnapshot.preferences.pctReplace,this.store.currentAssignment.pages.push(s),this.carousel.goTo(this.store.currentAssignment.pages.length-1)},removePage(){this.store.currentAssignment.pages.splice(this.store.pgIdx,1),this.store.currentAssignment.pages.length<=this.store.pgIdx&&(this.store.pgIdx-=1,this.slide=this.store.pgIdx)},slideChanged(s){this.store.aid=s,this.store.pgIdx=null},slideTransitioned(s,t){console.log(s,t)}}}),H=a("span",{class:"q-ml-sm"},"Confirm delete current page?",-1),M=a("div",{class:"text-h6"},"Points Goal of Assignment",-1),X=a("div",{class:"text-h6"},"Set Lang-Voice This Page",-1),Y=a("div",null," Play with this but don't save as a different language, CHANGE IT BACK to whatever it originally was. This is because the Wikipedia page link is coupled to the language. By changing this you can speak English with a French accent, for example, but saving the page with a different language will prevent the page from displaying in the future because there will be a mis-match and it takes 2 variables to specify a Wikipedia page request. It is left on the user to ensure the original language is ultimately saved. ",-1),Z=a("span",{class:"on-right pfi"},null,-1),ee={width:"100%",class:"z-max"},te=a("div",{class:"text-h6"},"Percent Replace",-1),se={key:0},oe={style:{"background-color":"#333"}},le=a("td",{class:"key q-px-md"},"Course:",-1),ae={class:"val q-px-md"},ne=a("tr",null,[a("td",{class:"key q-px-md"},"Assignment:"),a("td",{class:"val q-px-md"})],-1),re={key:1,class:"justify-center absolute-top"},ie={class:"text-panel justify-center q-mx-md q-mb-xs q-mt-md text-h6"},de={class:"cursor-pointer"},ue={class:"q-px-md row content-center"},me={class:"embed-panel assignment",style:{"z-index":"5",height:"30vh","max-height":"30vh"}},ge={class:"q-px-lg row content-start"},he={class:"meta-table"},pe=a("th",{class:"key"},"Title",-1),ce={class:"val"},fe={class:"cursor-pointer"},xe=a("th",{class:"key"},"Cover Url",-1),we={class:"val"},ve={class:"cursor-pointer"},ye=a("th",{class:"key"},"Pages",-1),Ve={class:"val"},Ce={class:"hidden"},_e=a("th",{class:"key"},"Goal",-1),ke={class:"val cursor-pointer"},be=a("th",{class:"key"},"Created",-1),Ie={class:"val"},Ae=a("th",{class:"key"},"Updated",-1),qe={class:"val"},Ue={class:"control-panel q-pa-sm row no-wrap flex flex-center",style:{overflow:"auto"}},Pe={key:1},Se=a("br",null,null,-1),Qe={key:1,class:"on-right flex flex-center"};function Te(s,t,C,P,Ne,Be){const $=G("router-link");return u(),c(I,null,[e(w,{modelValue:s.confirm,"onUpdate:modelValue":t[1]||(t[1]=l=>s.confirm=l),persistent:"",class:"z-max"},{default:o(()=>[e(i,null,{default:o(()=>[e(g,{class:"row items-center"},{default:o(()=>[e(R,{icon:"delete",color:"primary","text-color":"white"}),H]),_:1}),e(k,{align:"right",class:"text-white"},{default:o(()=>[f(e(r,{flat:"",label:"Cancel"},null,512),[[v]]),f(e(r,{flat:"",label:"Delete",onClick:t[0]||(t[0]=l=>this.removePage())},null,512),[[v]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(w,{modelValue:s.showGoal,"onUpdate:modelValue":t[3]||(t[3]=l=>s.showGoal=l),persistent:""},{default:o(()=>[e(i,{style:{"min-width":"350px"}},{default:o(()=>[e(g,{align:"center"},{default:o(()=>[M]),_:1}),e(g,{class:"q-pt-none",align:"center"},{default:o(()=>[e(T,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",modelValue:this.store.currentAssignment.goal,"onUpdate:modelValue":t[2]||(t[2]=l=>this.store.currentAssignment.goal=l)},null,8,["thickness","modelValue"])]),_:1}),e(k,{align:"center",class:"text-white"},{default:o(()=>[f(e(r,{flat:"",label:"Done"},null,512),[[v]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(w,{modelValue:s.showLanguage,"onUpdate:modelValue":t[5]||(t[5]=l=>s.showLanguage=l),persistent:""},{default:o(()=>[e(i,{style:{"min-width":"350px"}},{default:o(()=>[e(g,null,{default:o(()=>[X,Y,Z]),_:1}),e(g,{class:"q-pt-none"},{default:o(()=>[a("table",ee,[a("tr",null,[a("td",null,[e(L,{class:"z-max",outlined:"",modelValue:this.store.currentPage.langVoiceKey,"onUpdate:modelValue":[t[4]||(t[4]=l=>this.store.currentPage.langVoiceKey=l),this.langChangeCB],options:this.store.userSnapshot.preferences.langVoices},null,8,["modelValue","options","onUpdate:modelValue"])])])])]),_:1}),e(k,{align:"right",class:"text-white"},{default:o(()=>[f(e(r,{outline:"",flat:"",label:"Done"},null,512),[[v]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(w,{modelValue:s.showPct,"onUpdate:modelValue":t[7]||(t[7]=l=>s.showPct=l),persistent:""},{default:o(()=>[e(i,{style:{"min-width":"350px"}},{default:o(()=>[e(g,{align:"center"},{default:o(()=>[te]),_:1}),e(g,{class:"q-pt-none",align:"center"},{default:o(()=>[e(T,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",modelValue:this.store.currentPage.pctReplace,"onUpdate:modelValue":t[6]||(t[6]=l=>this.store.currentPage.pctReplace=l)},null,8,["thickness","modelValue"])]),_:1}),e(k,{align:"center",class:"text-white"},{default:o(()=>[f(e(r,{flat:"",label:"Done"},null,512),[[v]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(w,{modelValue:s.showText,"onUpdate:modelValue":t[10]||(t[10]=l=>s.showText=l)},{default:o(()=>[a("div",null,[e(i,{class:"q-pa-md outlined q-ma-lg text-white text-center",style:{width:"400px"}},{default:o(()=>[e(V,{modelValue:this.store.currentPage.pageText,"onUpdate:modelValue":t[8]||(t[8]=l=>this.store.currentPage.pageText=l),type:"textarea",clearable:"",dense:"",autofocus:"",filled:"",autogrow:"",counter:""},null,8,["modelValue"]),e(r,{onClick:t[9]||(t[9]=l=>s.showText=!1)},{default:o(()=>[n("Close")]),_:1})]),_:1})])]),_:1},8,["modelValue"]),e(w,{modelValue:s.showCap,"onUpdate:modelValue":t[13]||(t[13]=l=>s.showCap=l)},{default:o(()=>[a("div",null,[e(i,{class:"q-pa-md outlined q-ma-lg text-white text-center",style:{width:"400px",height:"200px"}},{default:o(()=>[e(V,{modelValue:this.store.currentPage.imgs[this.store.currentPage.imgIdx].cap,"onUpdate:modelValue":t[11]||(t[11]=l=>this.store.currentPage.imgs[this.store.currentPage.imgIdx].cap=l),type:"textarea",clearable:"",dense:"",autofocus:"",counter:""},null,8,["modelValue"]),e(r,{onClick:t[12]||(t[12]=l=>s.showCap=!1)},{default:o(()=>[n("Close")]),_:1})]),_:1})])]),_:1},8,["modelValue"]),e(w,{modelValue:s.showAddImage,"onUpdate:modelValue":t[15]||(t[15]=l=>s.showAddImage=l)},{default:o(()=>[a("div",null,[e(i,{class:"q-pa-md outlined q-ma-lg text-white text-center",style:{width:"400px",height:"200px"}},{default:o(()=>[e(g,null,{default:o(()=>[n("Enter image url")]),_:1}),e(V,{modelValue:this.newImageUrl,"onUpdate:modelValue":t[14]||(t[14]=l=>this.newImageUrl=l),type:"input",clearable:"",dense:"",autofocus:"",counter:""},null,8,["modelValue"]),f((u(),y(r,null,{default:o(()=>[n("Close")]),_:1})),[[v]]),f((u(),y(r,{onClick:s.addImageCB},{default:o(()=>[n("Add")]),_:1},8,["onClick"])),[[v]])]),_:1})])]),_:1},8,["modelValue"]),e(F,{class:"flex flex-center"},{default:o(()=>[!this.store.aid||this.store.aid===-1?(u(),c("div",se,[e(i,{flat:"",bordered:"",class:"text-panel q-ma-md"},{default:o(()=>[e(g,null,{default:o(()=>[a("table",oe,[a("tr",null,[le,a("td",ae,[e($,{to:"/courses",class:"text-white"},{default:o(()=>{var l;return[n(x((l=this.store.currentCourse)==null?void 0:l.title),1)]}),_:1})])]),ne])]),_:1}),e(g,{class:"text-center"},{default:o(()=>[n(" Please select an assignment ")]),_:1})]),_:1})])):(u(),c("div",re,[a("div",ie,[n(" Assignment: "),a("span",de,[n(x(this.store.currentAssignment.title)+" ",1),e(q,{modelValue:this.store.currentAssignment.title,"onUpdate:modelValue":t[16]||(t[16]=l=>this.store.currentAssignment.title=l),"auto-save":"",style:{maxWidth:"320px"}},{default:o(l=>[e(V,{modelValue:l.value,"onUpdate:modelValue":h=>l.value=h,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:A(l.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["modelValue"])])]),a("div",ue,[e(N,{class:"q-mx-md q-mt-md full-width",animated:"",modelValue:s.slide,"onUpdate:modelValue":[t[29]||(t[29]=l=>s.slide=l),this.slideChanged],infinite:"","control-type":"arrows",ref:"carousel",height:"82vh",onTransition:this.slideTransitioned},{control:o(()=>[e(O,{position:"bottom",offset:[0,0]},{default:o(()=>[a("div",Ue,[e(r,{push:"",round:"",class:"dash-button","text-color":"white",icon:"arrow_left",style:S({height:"33.5px",width:"33.5px"}),onClick:t[20]||(t[20]=l=>s.$refs.carousel.previous())},{default:o(()=>[e(p,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:o(()=>[e(i,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:o(()=>[n(" Previous assignment ")]),_:1})]),_:1})]),_:1},8,["style"]),this.store.currentAssignment.pages.length>0?(u(),y(r,{key:0,"no-caps":"",class:"dash-button on-right",onClick:t[21]||(t[21]=l=>this.viewerCB()),icon:"smart_display"},{default:o(()=>[e(p,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:o(()=>[e(i,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:o(()=>[n(" Test assignment in Viewer ")]),_:1})]),_:1})]),_:1})):_("",!0),this.store.role==="teacher"?(u(),c("span",Pe,[e(r,{"no-caps":"",class:"dash-button on-right",onClick:t[22]||(t[22]=l=>this.setAssignmentCoverURL()),icon:"wallpaper"},{default:o(()=>[e(p,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:o(()=>[e(i,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:o(()=>[n(" Use the image currently showing as"),Se,n("the cover image for the course ")]),_:1})]),_:1})]),_:1}),e(r,{"no-caps":"",icon:"add",class:"dash-button on-right",onClick:t[23]||(t[23]=l=>this.store.newAssignment())},{default:o(()=>[e(p,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:o(()=>[e(i,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:o(()=>[n(" New assignment ")]),_:1})]),_:1})]),_:1}),this.store.currentAssignment.pages.length>0?(u(),y(r,{key:0,"no-caps":"",icon:"edit",class:"dash-button on-right",onClick:t[24]||(t[24]=l=>{this.store.pgIdx=0,this.store.router.push("/courses/assignments/pages")})},{default:o(()=>[e(p,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:o(()=>[e(i,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:o(()=>[n(" Go to pages of this assignment ")]),_:1})]),_:1})]),_:1})):_("",!0),e(r,{"no-caps":"",icon:"save",class:"dash-button on-right",onClick:t[25]||(t[25]=l=>this.store.commitCurrentAssignment())},{default:o(()=>[e(p,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:o(()=>[e(i,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:o(()=>[n(" Save assignment to cloud database ")]),_:1})]),_:1})]),_:1}),e(r,{"no-caps":"",icon:"delete",class:"dash-button on-right",onClick:t[26]||(t[26]=l=>this.removeAssignment())},{default:o(()=>[e(p,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:o(()=>[e(i,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:o(()=>[n(" Delete the current assignment ")]),_:1})]),_:1})]),_:1}),this.store.currentPage?(u(),c("span",Qe,[e(N,{class:"hidden",infinite:"",autoplay:this.store.autoplay,style:{height:"44px",width:"95px",backgroundColor:"#3330"},modelValue:this.store.currentPage.imgIdx,"onUpdate:modelValue":t[27]||(t[27]=l=>this.store.currentPage.imgIdx=l)},{default:o(()=>[(u(!0),c(I,null,Q(this.store.currentPage.imgs,(l,h)=>(u(),y(B,{key:h,name:h,"img-src":this.store.currentPage.imgs[h].url,onClick:d=>this.test(s.pidx,h)},null,8,["name","img-src","onClick"]))),128))]),_:1},8,["autoplay","modelValue"])])):_("",!0)])):_("",!0),e(r,{push:"",round:"",class:"on-right dash-button","text-color":"white",icon:"arrow_right",style:S({height:"33.5px",width:"33.5px"}),onClick:t[28]||(t[28]=l=>s.$refs.carousel.next())},{default:o(()=>[e(p,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:o(()=>[e(i,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:o(()=>[n(" Next assignment ")]),_:1})]),_:1})]),_:1},8,["style"])])]),_:1})]),default:o(()=>[(u(!0),c(I,null,Q(this.store.currentCourse.assignments,(l,h)=>(u(),y(B,{class:"text-panel row content-center justify-center",key:h,name:h,"img-src":l.coverUrl},{default:o(()=>[a("table",me,[e(E,null,{default:o(()=>[n("Assignment")]),_:1}),a("tr",null,[a("td",ge,[a("table",he,[a("tr",null,[pe,a("td",ce,[a("div",fe,[n(x(this.store.currentAssignment.title)+" ",1),e(q,{modelValue:this.store.courses[this.store.ck].assignments[this.store.aid].title,"onUpdate:modelValue":t[17]||(t[17]=d=>this.store.courses[this.store.ck].assignments[this.store.aid].title=d),"auto-save":""},{default:o(d=>[e(V,{modelValue:d.value,"onUpdate:modelValue":b=>d.value=b,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:A(d.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["modelValue"])])])]),a("tr",null,[xe,a("td",we,[a("div",ve,[n(" Change "),e(q,{modelValue:this.store.currentAssignment.coverUrl,"onUpdate:modelValue":t[18]||(t[18]=d=>this.store.currentAssignment.coverUrl=d),"auto-save":""},{default:o(d=>[e(V,{modelValue:d.value,"onUpdate:modelValue":b=>d.value=b,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:A(d.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["modelValue"])])])]),a("tr",null,[ye,a("td",Ve,x(this.store.currentAssignment.pages.length),1)]),a("tr",Ce,[_e,a("td",ke,[a("span",{onClick:t[19]||(t[19]=d=>this.showGoal=!0)},x(this.store.currentAssignment.goal),1)])]),a("tr",null,[be,a("td",Ie,x(this.store.currentAssignment.created),1)]),a("tr",null,[Ae,a("td",qe,x(this.store.currentAssignment.updated),1)])])])])])]),_:2},1032,["name","img-src"]))),128))]),_:1},8,["modelValue","onUpdate:modelValue","onTransition"])])]))]),_:1})],64)}var nt=z(W,[["render",Te]]);export{nt as default};
