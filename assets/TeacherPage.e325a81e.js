import{_ as U,r as p,o as h,f as O,w as s,g as t,as as G,O as k,Q as m,aF as D,k as n,j as d,aG as q,aq as g,aH as A,at as b,ar as S,i as Q}from"./index.1d356e18.js";import{Q as w}from"./use-form.3bfb60ac.js";import{a as L,r as $,d as V,Q as I,C as B}from"./ClosePopup.677203e0.js";import{Q as x}from"./QCard.b91a836c.js";import{Q as P}from"./QInput.d2de1b9b.js";import{Q as C}from"./QTooltip.0ecd756a.js";import{Q as F}from"./QBanner.97f76202.js";import{Q as W}from"./QImg.6e72f900.js";import{Q as R,a as j,b as E}from"./QExpansionItem.ff5318c8.js";import{Q as z}from"./QPage.700ad262.js";import{u as H}from"./re-store.b87a5479.js";import"./use-prevent-scroll.1a106aea.js";import"./scroll.f4960302.js";import"./use-dark.04fe2716.js";import"./firebase.79bf92f9.js";import"./transform.aea72fbe.js";import"./index.2cf0d985.js";function J(l){const e=document.createElement("textarea");e.value=l,e.contentEditable="true",e.style.position="fixed";const _=()=>{};L(_),document.body.appendChild(e),e.focus(),e.select();const r=document.execCommand("copy");return e.remove(),$(_),r}function M(l){return navigator.clipboard!==void 0?navigator.clipboard.writeText(l):new Promise((e,_)=>{const r=J(l);r?e(!0):_(r)})}const X=H(),Y={components:{},setup(){return{reStore:X,mval:p(!0),label:p("howdy"),courseKey:p(null),courseTitle:p(null),prompt:p(!1),confirm:p(!1),promptAwesome:p(!1),targetCK:p(null),targetAID:p(null),autoAwesomeGuideWords:p("")}},mounted(){console.log("TeacherPage mounted ",this.reStore.courses),this.reStore.unloadCurrent()},methods:{loadCourse(l){console.log("loadCourse ",l),this.reStore.loadCourse(l),this.reStore.courses.selectedRHSTab="assignmentsTab"},editCourseCB(l){this.loadCourse(l),this.reStore.router.push("/teacher/courseeditor")},selectAssignment(l,e){this.reStore.courses.ck===l&&this.reStore.courses.aid===e?this.reStore.unloadCurrent():(this.reStore.courses.ck=l,this.reStore.courses.aid=e,this.reStore.courses.trigger+=1)},autoAwesomeCB(l){console.log("autoAwesomeCB ",this.autoAwesomeGuideWords),this.reStore.autoAwesomeCB(l,this.autoAwesomeGuideWords)},unused(l){const e=this.autoAwesomeGuideWords.split(","),_=200,r=_/e.length;let T=parseInt(r/6);T<1&&(T=1);const f=JSON.parse(JSON.stringify(this.reStore.assignmentTemplate));f.ck=this.targetCK,f.id=this.reStore.mkId(),f.pgIdx=0,f.coverUrl=null,f.title=e[0],f.goal=_,e.forEach(async i=>{const u=this.reStore.langVoices[this.reStore.preferences.langVoiceKey];console.log("doSearch ",u,this.searchTerms),this.reStore.wiki.setLang(u.langName);const y=await this.reStore.wiki.search(i,{suggestion:!1,limit:T});console.log("res.results.length: ",y.results.length),console.log(y.results),y.results.forEach(async a=>{console.log(a.pageid),await this.reStore.getPage2(null,a.pageid,this.reStore.preferences.langVoiceKey).then(async c=>{console.log("getPage returned rval ",c),c.pageTitle=a.title;const v=await this.reStore.wiki.page(a.pageid);c.canonicalUrl=v.canonicalurl;const K=await v.summary();if(K.type!=="disambiguation"){if(await v.coordinates().then(o=>{console.log("resolved coords ",o),o!==null?c.mapCoords=`${o.lat}, ${o.lon}`:c.mapCoords="-999, -999"}),await v.images({limit:this.reStore.preferences.imgLimit}).then(o=>{for(const N in o)console.log(N),o[0].title.indexOf(".svg")>1?console.log("SVG ",o[0].title):o[0].title.indexOf("airytale")>0?console.log("Fairytale warning ",o[0].title):o[0].title.indexOf("kguitar")>1?console.log("kguitar ",o[0].title):o[0].title.indexOf("Blank.png")>-1?console.log("Blank.png ",o[0].title):o[0].title.indexOf(".oga")>1?console.log("OGA ",o[0].title):o[0].title.indexOf(".webm")>1?console.log("WEBM ",o[0].title):o[0].title.indexOf(".ogg")>1?console.log("OGG ",o[0].title):o[0].title.indexOf(".tif")>1?console.log("TIF ",o[0].title):o[0].title.indexOf(".mid")>1?console.log("MID ",o[0].title):o[0].title.indexOf(".ogv")>1?console.log("OGV ",o[0].title):o[0].title.indexOf("Icon")>1?console.log("ICON ",o[0].title):o[0].title.indexOf("icon")>1?console.log("icon ",o[0].title):o[0].title.indexOf("podagraria1")>0?console.log("podagraria1 ",o[0].title):o[0].title.indexOf("Bluetank")>1||o[0].title.indexOf("rab Nebula.jpg")>0?console.log("BLUETANK ",o[0].title):o[0].title.indexOf("viacionavion")>1||o[0].title.indexOf("input-microphone")>1?console.log("viacionavion",o[0].title):o[0].title.indexOf("clouds in fair weather")>0||o[0].title.indexOf("in pacifica 1")>0?console.log("clouds in fair weather",o[0].title):c.imgs.push({url:o[0].url,cap:o[0].title}),o.push(o.shift());c.imgs.length>1&&c.imgs.shift()}),c.pageText=K.extract,c.currentLangLinks=[],c.imgIdx=0,!f.coverUrl)try{f.coverUrl=f.pages[0].imgs[0].url}catch(o){console.log("ERROR setting coverUrl ",o)}f.pages.push(c),console.log("a.pages.length ",f.pages.length)}else console.log("SKIPPED ",K.type)})})}),this.reStore.courses[this.targetCK].assignments[f.id]=f,this.reStore.courses.trigger+=1},copyCK(l){M(l).then(()=>{console.log("ck copied to clipboard",l)}).catch(e=>{console.log(e)})},newCourseCB(){console.log("courseCB"),this.reStore.newCourse()},newAssignmentCB(l){console.log("assignmentCB: ",l),this.reStore.newAssignment(l)},editAssignmentCB(l,e){console.log("editAssignmentCB: ",l,e),this.reStore.loadAssignment(l,e),this.reStore.mode="editor",this.reStore.router.push("/teacher/editor")},changeTitleCB(){console.log("TeacherPage.titleCB",this.courseKey,this.courseTitle),this.reStore.setCourseTitle(this.courseKey,this.courseTitle)},deleteCourseCB(l){this.targetCK=l,this.targetAID=null,this.confirm=!0},deleteAssignmentCB(l,e){this.targetCK=l,this.targetAID=e,this.confirm=!0},deleteForSure(){this.confirm=!1,console.log("delete current targets ",this.targetCK,this.targetAID),this.targetAID&&this.targetCK?this.reStore.deleteAssignment(this.targetCK,this.targetAID):this.targetCK&&this.targetAID===null&&this.reStore.deleteCourse(this.targetCK),this.targetCK=null,this.targetAID=null},takeAssignmentCB(l,e){console.log("TeacherPage.takeAssignment ",l,e),this.reStore.loadAssignment(l,e),this.reStore.mode="assignment",this.reStore.router.push("/teacher/assignment")},shareToDemo(l,e){console.log(l,e),this.reStore.shareToDemo(l,e)}}},Z=n("span",{class:"q-ml-sm"},"Confirm delete object?",-1),ee=n("div",{class:"text-h6"},"Change course title",-1),te=n("div",{class:"text-h6"},"Provide guide-words",-1),oe={class:"q-pa-md"},se={class:"text-weight-bolder text-center text-h4 q-pa-md"},le={class:"flex flex-row justify-center"},ie={class:"absolute-top text-center"},ne={class:"text-h6"},re={class:"text-subtitle2"},ae={key:0},ue={key:1},ce={style:{"font-size":"22pt",width:"100%"},class:"text-center absolute-bottom"},de=n("br",null,null,-1),he=n("br",null,null,-1),fe={class:"q-pa-md"},me=n("br",null,null,-1),ge=n("br",null,null,-1),pe=n("br",null,null,-1),Ce={width:"100%"},_e=n("tr",null,[n("th",{colSpan:"100"},"Course Score Sheet")],-1),Se=n("th",null,"Student",-1),ye={style:{"text-align":"center"}},we={key:0},ve={key:1};function xe(l,e,_,r,T,f){return h(),O(z,{class:"q-gutter-md bg-primary"},{default:s(()=>[t(I,{modelValue:r.confirm,"onUpdate:modelValue":e[1]||(e[1]=i=>r.confirm=i),persistent:"",class:"z-max"},{default:s(()=>[t(x,null,{default:s(()=>[t(w,{class:"row items-center"},{default:s(()=>[t(G,{icon:"delete",color:"primary","text-color":"white"}),Z]),_:1}),t(V,{align:"right",class:"text-white"},{default:s(()=>[k(t(m,{flat:"",label:"Cancel"},null,512),[[B]]),t(m,{flat:"",label:"Delete",onClick:e[0]||(e[0]=i=>this.deleteForSure())})]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(I,{modelValue:r.prompt,"onUpdate:modelValue":e[5]||(e[5]=i=>r.prompt=i),persistent:"",class:"z-max"},{default:s(()=>[t(x,{style:{"min-width":"350px"}},{default:s(()=>[t(w,null,{default:s(()=>[ee]),_:1}),t(w,{class:"q-pt-none"},{default:s(()=>[t(P,{dense:"",modelValue:r.courseTitle,"onUpdate:modelValue":e[2]||(e[2]=i=>r.courseTitle=i),autofocus:"",onKeyup:e[3]||(e[3]=D(i=>{r.prompt=!1,this.changeTitleCB()},["enter"])),onHide:this.dck},null,8,["modelValue","onHide"])]),_:1}),t(V,{align:"right",class:"text-white"},{default:s(()=>[k(t(m,{outline:"",label:"Cancel"},null,512),[[B]]),k(t(m,{outline:"",label:"Save",onClick:e[4]||(e[4]=i=>this.changeTitleCB())},null,512),[[B]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(I,{modelValue:r.promptAwesome,"onUpdate:modelValue":e[9]||(e[9]=i=>r.promptAwesome=i),persistent:"",class:"z-max"},{default:s(()=>[t(x,{style:{"min-width":"350px"}},{default:s(()=>[t(w,null,{default:s(()=>[te]),_:1}),t(w,{class:"q-pt-none"},{default:s(()=>[t(P,{dense:"",modelValue:r.autoAwesomeGuideWords,"onUpdate:modelValue":e[6]||(e[6]=i=>r.autoAwesomeGuideWords=i),autofocus:"",onKeyup:e[7]||(e[7]=D(i=>{r.promptAwesome=!1,this.autoAwesomeCB()},["enter"]))},null,8,["modelValue"])]),_:1}),t(V,{align:"right",class:"text-white"},{default:s(()=>[k(t(m,{outline:"",label:"Cancel"},null,512),[[B]]),k(t(m,{outline:"",label:"Save",onClick:e[8]||(e[8]=i=>this.autoAwesomeCB())},null,512),[[B]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),n("div",oe,[t(F,{class:"bg-positive text-white"},{default:s(()=>[n("div",se,[t(m,{class:"on-left",icon:"post_add",onClick:e[10]||(e[10]=i=>this.newCourseCB())},{default:s(()=>[t(C,null,{default:s(()=>[d("Create a new course")]),_:1})]),_:1}),d(" Teacher "),this.reStore.authenticated?(h(),O(m,{key:0,class:"on-right",onClick:e[11]||(e[11]=i=>this.reStore.router.push("/student")),icon:"switch_account"},{default:s(()=>[t(C,null,{default:s(()=>[d(" Switch to Student-role ")]),_:1})]),_:1})):q("",!0)])]),_:1})]),n("div",le,[(h(!0),g(b,null,A(this.reStore.userSnapshot.teaching,(i,u,y)=>(h(),g("div",{key:y},[t(x,{bordered:"",flat:"",class:"ccard q-mx-sm q-my-md"},{default:s(()=>[t(W,{fit:l.cover,src:this.reStore.logoURL,height:"100%",onClick:a=>this.loadCourse(u)},{default:s(()=>[n("div",ie,[n("div",ne,S(this.reStore.courses[u].title.slice(0,18)),1),n("div",re,[this.reStore.courses[u].assignments?(h(),g("span",ae,"Assignments: "+S(Object.keys(this.reStore.courses[u].assignments).length),1)):(h(),g("span",ue,"Assignments: None"))])]),n("div",ce,[n("div",null,[t(Q,{color:"red",class:"ptr",name:"delete",onClick:a=>this.deleteCourseCB(i.ck)},{default:s(()=>[t(C,null,{default:s(()=>[d("Delete Course")]),_:1})]),_:2},1032,["onClick"]),t(m,{icon:"content_copy",onClick:a=>this.copyCK(u)},{default:s(()=>[t(C,null,{default:s(()=>[d("Copy this course-key to clipboard. Enroll "),de,d("in this course using this course-key from "),he,d("the Student Page.")]),_:1})]),_:2},1032,["onClick"]),t(m,{icon:"edit",onClick:a=>this.editCourseCB(i.ck)},{default:s(()=>[t(C,null,{default:s(()=>[d("Edit Course")]),_:1})]),_:2},1032,["onClick"])])])]),_:2},1032,["fit","src","onClick"])]),_:2},1024)]))),128))]),(h(!0),g(b,null,A(this.reStore.userSnapshot.teaching,(i,u,y)=>(h(),O(x,{class:"hidden",flat:"",key:y,style:{opacity:"1.0"}},{default:s(()=>[n("div",fe,[t(R,{bordered:"",class:"rounded-borders"},{default:s(()=>[t(j,null,{header:s(()=>[t(E),t(E,null,{default:s(()=>[d(" Course: "+S(this.reStore.courses[i.ck].title),1)]),_:2},1024)]),default:s(()=>[t(x,{flat:""},{default:s(()=>[t(w,{class:"text-center",style:{fontSize:"12pt"}},{default:s(()=>[d(" Title: "+S(this.reStore.courses[u].title)+" \xA0",1),t(Q,{class:"ptr",name:"edit",onClick:a=>{r.prompt=!0,this.courseTitle=this.reStore.courses[u].title,this.courseKey=u}},null,8,["onClick"]),me,d(" Key: "+S(u)+" ",1),t(Q,{class:"ptr",name:"content_copy",onClick:a=>this.copyCK(u)},null,8,["onClick"]),n("div",null,[t(m,{icon:"delete",onClick:a=>this.deleteCourseCB(i.ck)},{default:s(()=>[t(C,null,{default:s(()=>[d("Delete Course")]),_:1})]),_:2},1032,["onClick"]),t(m,{icon:"post_add",onClick:a=>this.newAssignmentCB(i.ck)},{default:s(()=>[t(C,null,{default:s(()=>[d("New Assignment")]),_:1})]),_:2},1032,["onClick"]),t(m,{icon:"auto_awesome",onClick:a=>{this.targetCK=u,r.promptAwesome=!0}},{default:s(()=>[t(C,null,{default:s(()=>[d("1-Step Custom Assignment Create")]),_:1})]),_:2},1032,["onClick"]),t(m,{icon:"content_copy",onClick:a=>this.copyCK(u)},{default:s(()=>[t(C,null,{default:s(()=>[d("Copy this course-key to clipboard. Enroll "),ge,d("in this course using this course-key from "),pe,d("the Student Page.")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1024),t(w,null,{default:s(()=>[n("table",Ce,[_e,n("tr",null,[Se,(h(!0),g(b,null,A(this.reStore.courses[u].assignments,(a,c)=>(h(),g("th",{key:c},[n("span",null,S(a.title),1)]))),128))]),(h(!0),g(b,null,A(this.reStore.courses[u].enrollment,a=>(h(),g("tr",{key:a.name},[n("td",ye,S(a.name),1),(h(!0),g(b,null,A(this.reStore.courses[u].assignments,(c,v)=>(h(),g("td",{style:{"text-align":"center"},key:v},[c.scores&&c.scores[a.emailKey]?(h(),g("span",we,S(c.scores[a.emailKey]),1)):(h(),g("span",ve," -- "))]))),128))]))),128))])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)])]),_:2},1024))),128))]),_:1})}var Le=U(Y,[["render",xe]]);export{Le as default};
