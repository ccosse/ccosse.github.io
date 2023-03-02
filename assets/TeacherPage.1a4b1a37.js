import{_ as q,r as C,o as c,f as O,w as l,g as t,ao as L,O as k,Q as m,aN as P,k as n,j as h,as as E,an as g,aq as b,ap as B,ar as _,i as x,aO as V}from"./index.844ed79f.js";import{Q as y}from"./use-form.29746cb3.js";import{a as F,r as z,d as I,Q as D,C as T}from"./ClosePopup.09103dea.js";import{Q as w}from"./QCard.957408dd.js";import{Q as N}from"./QInput.4ce2d387.js";import{Q as S}from"./QTooltip.3a659099.js";import{b as U,Q as W,a as G}from"./QList.ad431b66.js";import{Q as j}from"./QImg.660f3113.js";import{Q as R}from"./QPage.8bc2b0c5.js";import{u as M}from"./re-store.8565acff.js";import"./use-prevent-scroll.abc495b2.js";import"./scroll.ec76bd17.js";import"./use-dark.58427217.js";import"./use-key-composition.9325f536.js";import"./firebase.0eb8f378.js";import"./transform.aea72fbe.js";import"./index.2cf0d985.js";function H(s){const e=document.createElement("textarea");e.value=s,e.contentEditable="true",e.style.position="fixed";const v=()=>{};F(v),document.body.appendChild(e),e.focus(),e.select();const a=document.execCommand("copy");return e.remove(),z(v),a}function J(s){return navigator.clipboard!==void 0?navigator.clipboard.writeText(s):new Promise((e,v)=>{const a=H(s);a?e(!0):v(a)})}const X=M(),Y={components:{},setup(){return{reStore:X,mval:C(!0),label:C("howdy"),courseKey:C(null),courseTitle:C(null),prompt:C(!1),confirm:C(!1),promptAwesome:C(!1),targetCK:C(null),targetAID:C(null),autoAwesomeGuideWords:C("")}},mounted(){console.log("TeacherPage mounted ",this.reStore.courses),this.reStore.unloadCurrent()},methods:{selectAssignment(s,e){this.reStore.courses.ck===s&&this.reStore.courses.aid===e?this.reStore.unloadCurrent():(this.reStore.courses.ck=s,this.reStore.courses.aid=e,this.reStore.courses.trigger+=1)},autoAwesomeCB(s){console.log("autoAwesomeCB ",this.autoAwesomeGuideWords);const e=this.autoAwesomeGuideWords.split(","),v=200,a=v/e.length;let K=parseInt(a/6);K<1&&(K=1);const f=JSON.parse(JSON.stringify(this.reStore.assignmentTemplate));f.ck=this.targetCK,f.id=this.reStore.mkId(),f.pgIdx=0,f.coverUrl=null,f.title=e[0],f.goal=v,e.forEach(async r=>{const u=this.reStore.langVoices[this.reStore.preferences.langVoiceKey];console.log("doSearch ",u,this.searchTerms),this.reStore.wiki.setLang(u.langName);const A=await this.reStore.wiki.search(r,{suggestion:!1,limit:K});console.log("res.results.length: ",A.results.length),console.log(A.results),A.results.forEach(async i=>{console.log(i.pageid),await this.reStore.getPage2(null,i.pageid,this.reStore.preferences.langVoiceKey).then(async d=>{console.log("getPage returned rval ",d),d.pageTitle=i.title;const p=await this.reStore.wiki.page(i.pageid);d.canonicalUrl=p.canonicalurl;const Q=await p.summary();if(Q.type!=="disambiguation"){if(await p.coordinates().then(o=>{console.log("resolved coords ",o),o!==null?d.mapCoords=`${o.lat}, ${o.lon}`:d.mapCoords="-999, -999"}),await p.images({limit:this.reStore.preferences.imgLimit}).then(o=>{for(const $ in o)console.log($),o[0].title.indexOf(".svg")>1?console.log("SVG ",o[0].title):o[0].title.indexOf("airytale")>0?console.log("Fairytale warning ",o[0].title):o[0].title.indexOf("kguitar")>1?console.log("kguitar ",o[0].title):o[0].title.indexOf("Blank.png")>-1?console.log("Blank.png ",o[0].title):o[0].title.indexOf(".oga")>1?console.log("OGA ",o[0].title):o[0].title.indexOf(".webm")>1?console.log("WEBM ",o[0].title):o[0].title.indexOf(".ogg")>1?console.log("OGG ",o[0].title):o[0].title.indexOf(".tif")>1?console.log("TIF ",o[0].title):o[0].title.indexOf(".mid")>1?console.log("MID ",o[0].title):o[0].title.indexOf(".ogv")>1?console.log("OGV ",o[0].title):o[0].title.indexOf("Icon")>1?console.log("ICON ",o[0].title):o[0].title.indexOf("icon")>1?console.log("icon ",o[0].title):o[0].title.indexOf("podagraria1")>0?console.log("podagraria1 ",o[0].title):o[0].title.indexOf("Bluetank")>1||o[0].title.indexOf("rab Nebula.jpg")>0?console.log("BLUETANK ",o[0].title):o[0].title.indexOf("viacionavion")>1||o[0].title.indexOf("input-microphone")>1?console.log("viacionavion",o[0].title):o[0].title.indexOf("clouds in fair weather")>0||o[0].title.indexOf("in pacifica 1")>0?console.log("clouds in fair weather",o[0].title):d.imgs.push({url:o[0].url,cap:o[0].title}),o.push(o.shift());d.imgs.length>1&&d.imgs.shift()}),d.pageText=Q.extract,d.currentLangLinks=[],d.imgIdx=0,!f.coverUrl)try{f.coverUrl=f.pages[0].imgs[0].url}catch(o){console.log("ERROR setting coverUrl ",o)}f.pages.push(d),console.log("a.pages.length ",f.pages.length)}else console.log("SKIPPED ",Q.type)})})}),this.reStore.courses[this.targetCK].assignments[f.id]=f,this.reStore.courses.trigger+=1},copyCK(s){J(s).then(()=>{console.log("ck copied to clipboard",s)}).catch(e=>{console.log(e)})},newCourseCB(){console.log("courseCB"),this.reStore.newCourse()},newAssignmentCB(s){console.log("assignmentCB: ",s),this.reStore.newAssignment(s)},editAssignmentCB(s,e){console.log("editAssignmentCB: ",s,e),this.reStore.loadAssignment(s,e),this.reStore.mode="editor",this.reStore.router.push("/teacher/editor")},changeTitleCB(){console.log("TeacherPage.titleCB",this.courseKey,this.courseTitle),this.reStore.setCourseTitle(this.courseKey,this.courseTitle)},deleteCourseCB(s){this.targetCK=s,this.targetAID=null,this.confirm=!0},deleteAssignmentCB(s,e){this.targetCK=s,this.targetAID=e,this.confirm=!0},deleteForSure(){this.confirm=!1,console.log("delete current targets ",this.targetCK,this.targetAID),this.targetAID&&this.targetCK?this.reStore.deleteAssignment(this.targetCK,this.targetAID):this.targetCK&&this.targetAID===null&&this.reStore.deleteCourse(this.targetCK),this.targetCK=null,this.targetAID=null},takeAssignmentCB(s,e){console.log("TeacherPage.takeAssignment ",s,e),this.reStore.loadAssignment(s,e),this.reStore.mode="assignment",this.reStore.router.push("/teacher/assignment")},shareToDemo(s,e){console.log(s,e),this.reStore.shareToDemo(s,e)}}},Z=n("span",{class:"q-ml-sm"},"Confirm delete object?",-1),ee=n("div",{class:"text-h6"},"Change course title",-1),te=n("div",{class:"text-h6"},"Provide guide-words",-1),oe={class:"q-pa-md"},le={class:"flex flex-center"},se={class:"q-pa-md"},ie=n("br",null,null,-1),ne=n("br",null,null,-1),re=n("br",null,null,-1),ae={class:"flex flex-row justify-center"},ue={class:"absolute-top text-center"},de={class:"text-h6"},ce={class:"text-subtitle2"},he={key:0},fe={key:1},me={style:{"font-size":"22pt",width:"100%"},class:"text-center absolute-bottom"},ge=n("br",null,null,-1),pe={class:"hidden"},Ce={width:"100%"},_e=n("tr",null,[n("th",{colSpan:"100"},"Course Score Sheet")],-1),Se=n("th",null,"Student",-1),ve={style:{"text-align":"center"}},ye={key:0},we={key:1};function xe(s,e,v,a,K,f){return c(),O(R,{class:"q-gutter-md"},{default:l(()=>[t(D,{modelValue:a.confirm,"onUpdate:modelValue":e[1]||(e[1]=r=>a.confirm=r),persistent:"",class:"z-max"},{default:l(()=>[t(w,null,{default:l(()=>[t(y,{class:"row items-center"},{default:l(()=>[t(L,{icon:"delete",color:"primary","text-color":"white"}),Z]),_:1}),t(I,{align:"right",class:"text-white"},{default:l(()=>[k(t(m,{flat:"",label:"Cancel"},null,512),[[T]]),t(m,{flat:"",label:"Delete",onClick:e[0]||(e[0]=r=>this.deleteForSure())})]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(D,{modelValue:a.prompt,"onUpdate:modelValue":e[5]||(e[5]=r=>a.prompt=r),persistent:"",class:"z-max"},{default:l(()=>[t(w,{style:{"min-width":"350px"}},{default:l(()=>[t(y,null,{default:l(()=>[ee]),_:1}),t(y,{class:"q-pt-none"},{default:l(()=>[t(N,{dense:"",modelValue:a.courseTitle,"onUpdate:modelValue":e[2]||(e[2]=r=>a.courseTitle=r),autofocus:"",onKeyup:e[3]||(e[3]=P(r=>{a.prompt=!1,this.changeTitleCB()},["enter"])),onHide:this.dck},null,8,["modelValue","onHide"])]),_:1}),t(I,{align:"right",class:"text-white"},{default:l(()=>[k(t(m,{outline:"",label:"Cancel"},null,512),[[T]]),k(t(m,{outline:"",label:"Save",onClick:e[4]||(e[4]=r=>this.changeTitleCB())},null,512),[[T]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(D,{modelValue:a.promptAwesome,"onUpdate:modelValue":e[9]||(e[9]=r=>a.promptAwesome=r),persistent:"",class:"z-max"},{default:l(()=>[t(w,{style:{"min-width":"350px"}},{default:l(()=>[t(y,null,{default:l(()=>[te]),_:1}),t(y,{class:"q-pt-none"},{default:l(()=>[t(N,{dense:"",modelValue:a.autoAwesomeGuideWords,"onUpdate:modelValue":e[6]||(e[6]=r=>a.autoAwesomeGuideWords=r),autofocus:"",onKeyup:e[7]||(e[7]=P(r=>{a.promptAwesome=!1,this.autoAwesomeCB()},["enter"]))},null,8,["modelValue"])]),_:1}),t(I,{align:"right",class:"text-white"},{default:l(()=>[k(t(m,{outline:"",label:"Cancel"},null,512),[[T]]),k(t(m,{outline:"",label:"Save",onClick:e[8]||(e[8]=r=>this.autoAwesomeCB())},null,512),[[T]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),n("div",oe,[t(U,{bordered:"",class:"rounded-borders"},{default:l(()=>[t(w,{flat:""},{default:l(()=>[n("div",le,[n("div",null,[t(m,{class:"on-left",icon:"list_alt",onClick:e[10]||(e[10]=r=>this.newCourseCB())},{default:l(()=>[t(S,null,{default:l(()=>[h("Create a new course")]),_:1})]),_:1}),t(m,{flat:"","no-caps":"",style:{fontSize:"18pt"}},{default:l(()=>[h("Teacher")]),_:1}),this.reStore.authenticated?(c(),O(m,{key:0,class:"on-right",onClick:e[11]||(e[11]=r=>this.reStore.router.push("/student")),icon:"switch_account"},{default:l(()=>[t(S,null,{default:l(()=>[h(" Switch to Student-role ")]),_:1})]),_:1})):E("",!0)])])]),_:1})]),_:1})]),(c(!0),g(B,null,b(this.reStore.userSnapshot.teaching,(r,u,A)=>(c(),O(w,{flat:"",key:A,style:{opacity:"1.0"}},{default:l(()=>[n("div",se,[t(U,{bordered:"",class:"rounded-borders"},{default:l(()=>[t(W,null,{header:l(()=>[t(G),t(G,null,{default:l(()=>[h(" Course: "+_(this.reStore.courses[r.ck].title),1)]),_:2},1024)]),default:l(()=>[t(w,{flat:""},{default:l(()=>[t(y,{class:"text-center",style:{fontSize:"12pt"}},{default:l(()=>[h(" Title: "+_(this.reStore.courses[u].title)+" \xA0",1),t(x,{class:"ptr",name:"edit",onClick:i=>{a.prompt=!0,this.courseTitle=this.reStore.courses[u].title,this.courseKey=u}},null,8,["onClick"]),ie,h(" Key: "+_(u)+" ",1),t(x,{class:"ptr",name:"content_copy",onClick:i=>this.copyCK(u)},null,8,["onClick"]),n("div",null,[t(m,{icon:"delete",onClick:i=>this.deleteCourseCB(r.ck)},{default:l(()=>[t(S,null,{default:l(()=>[h("Delete Course")]),_:1})]),_:2},1032,["onClick"]),t(m,{icon:"post_add",onClick:i=>this.newAssignmentCB(r.ck)},{default:l(()=>[t(S,null,{default:l(()=>[h("New Assignment")]),_:1})]),_:2},1032,["onClick"]),t(m,{icon:"auto_awesome",onClick:i=>{this.targetCK=u,a.promptAwesome=!0}},{default:l(()=>[t(S,null,{default:l(()=>[h("1-Step Custom Assignment Create")]),_:1})]),_:2},1032,["onClick"]),t(m,{icon:"content_copy",onClick:i=>this.copyCK(u)},{default:l(()=>[t(S,null,{default:l(()=>[h("Copy this course-key to clipboard. Enroll "),ne,h("in this course using this course-key from "),re,h("the Student Page.")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1024),n("div",ae,[(c(!0),g(B,null,b(this.reStore.courses[u].assignments,(i,d)=>(c(),g("div",{key:i},[t(w,{bordered:"",flat:"",class:"ccard q-mx-sm q-my-md"},{default:l(()=>[t(j,{fit:s.cover,src:i.coverUrl,height:"100%",onClick:p=>this.selectAssignment(u,i.id)},{default:l(()=>[n("div",ue,[n("div",de,_(i.title.slice(0,18)),1),n("div",ce,[i.pages?(c(),g("span",he,"Pages: "+_(i.pages.length),1)):(c(),g("span",fe,"Pages: None"))])]),n("div",me,[t(x,{onClick:[p=>this.takeAssignmentCB(u,i.id),e[12]||(e[12]=V(()=>{},["stop","prevent"]))],name:"play_circle",class:"ptr"},{default:l(()=>[t(S,null,{default:l(()=>[h("Take Assignment")]),_:1})]),_:2},1032,["onClick"]),t(x,{onClick:[p=>this.editAssignmentCB(u,i.id),e[13]||(e[13]=V(()=>{},["stop","prevent"]))],name:"edit",class:"ptr on-right"},{default:l(()=>[t(S,null,{default:l(()=>[h("Edit Assignment"),ge,h(_(i.id),1)]),_:2},1024)]),_:2},1032,["onClick"]),t(x,{onClick:[p=>this.deleteAssignmentCB(u,i.id),e[14]||(e[14]=V(()=>{},["stop","prevent"]))],name:"delete",class:"ptr on-right"},{default:l(()=>[t(S,null,{default:l(()=>[h("Delete Assignment")]),_:1})]),_:2},1032,["onClick"]),u!==this.reStore.demoCK&&this.reStore.userSnapshot.profile.email==="charlie@readingedge.org"?(c(),O(x,{key:0,onClick:[p=>this.shareToDemo(u,i.id),e[15]||(e[15]=V(()=>{},["stop","prevent"]))],name:"share",class:"ptr on-right"},{default:l(()=>[t(S,null,{default:l(()=>[h("Share Assignment")]),_:1})]),_:2},1032,["onClick"])):E("",!0)])]),_:2},1032,["fit","src","onClick"])]),_:2},1024),n("span",pe,_(d),1)]))),128))]),t(y,null,{default:l(()=>[n("table",Ce,[_e,n("tr",null,[Se,(c(!0),g(B,null,b(this.reStore.courses[u].assignments,(i,d)=>(c(),g("th",{key:d},[n("span",null,_(i.title),1)]))),128))]),(c(!0),g(B,null,b(this.reStore.courses[u].enrollment,i=>(c(),g("tr",{key:i.name},[n("td",ve,_(i.name),1),(c(!0),g(B,null,b(this.reStore.courses[u].assignments,(d,p)=>(c(),g("td",{style:{"text-align":"center"},key:p},[d.scores&&d.scores[i.emailKey]?(c(),g("span",ye,_(d.scores[i.emailKey]),1)):(c(),g("span",we," -- "))]))),128))]))),128))])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)])]),_:2},1024))),128))]),_:1})}var qe=q(Y,[["render",xe]]);export{qe as default};