import{_ as U,r as p,o as f,f as O,w as l,g as e,as as G,G as k,Q as h,aN as I,k as i,j as d,aF as q,aq as g,aG as A,at as b,ar as S,i as D}from"./index.11470d9d.js";import{Q as w}from"./QCardSection.bf708843.js";import{a as L,r as $,d as Q,Q as V,C as B}from"./ClosePopup.d152a21f.js";import{Q as x}from"./QCard.76af4faa.js";import{Q as P}from"./QInput.d7bb13f2.js";import{Q as C}from"./QTooltip.5c17c2ba.js";import{Q as F}from"./QBanner.547ebcb6.js";import{Q as z}from"./QImg.de690fb9.js";import{b as W,Q as R,a as N}from"./QList.5d137e19.js";import{Q as j}from"./QPage.d9013054.js";import{u as H}from"./re-store.5caa898e.js";import"./use-prevent-scroll.7dc49ca0.js";import"./scroll.47d9b2c2.js";import"./use-timeout.6ba4c3fd.js";import"./use-dark.75ee71be.js";import"./use-key-composition.8c97f84f.js";import"./use-form.1bd908d6.js";import"./selection.7892d536.js";import"./firebase.0eb8f378.js";import"./transform.aea72fbe.js";import"./index.2cf0d985.js";function J(s){const t=document.createElement("textarea");t.value=s,t.contentEditable="true",t.style.position="fixed";const _=()=>{};L(_),document.body.appendChild(t),t.focus(),t.select();const r=document.execCommand("copy");return t.remove(),$(_),r}function M(s){return navigator.clipboard!==void 0?navigator.clipboard.writeText(s):new Promise((t,_)=>{const r=J(s);r?t(!0):_(r)})}const X=H(),Y={components:{},setup(){return{reStore:X,mval:p(!0),label:p("howdy"),courseKey:p(null),courseTitle:p(null),prompt:p(!1),confirm:p(!1),promptAwesome:p(!1),targetCK:p(null),targetAID:p(null),autoAwesomeGuideWords:p("")}},mounted(){console.log("TeacherPage mounted ",this.reStore.courses),this.reStore.unloadCurrent()},methods:{selectAssignment(s,t){this.reStore.courses.ck===s&&this.reStore.courses.aid===t?this.reStore.unloadCurrent():(this.reStore.courses.ck=s,this.reStore.courses.aid=t,this.reStore.courses.trigger+=1)},autoAwesomeCB(s){console.log("autoAwesomeCB ",this.autoAwesomeGuideWords);const t=this.autoAwesomeGuideWords.split(","),_=200,r=_/t.length;let K=parseInt(r/6);K<1&&(K=1);const m=JSON.parse(JSON.stringify(this.reStore.assignmentTemplate));m.ck=this.targetCK,m.id=this.reStore.mkId(),m.pgIdx=0,m.coverUrl=null,m.title=t[0],m.goal=_,t.forEach(async n=>{const u=this.reStore.langVoices[this.reStore.preferences.langVoiceKey];console.log("doSearch ",u,this.searchTerms),this.reStore.wiki.setLang(u.langName);const y=await this.reStore.wiki.search(n,{suggestion:!1,limit:K});console.log("res.results.length: ",y.results.length),console.log(y.results),y.results.forEach(async a=>{console.log(a.pageid),await this.reStore.getPage2(null,a.pageid,this.reStore.preferences.langVoiceKey).then(async c=>{console.log("getPage returned rval ",c),c.pageTitle=a.title;const v=await this.reStore.wiki.page(a.pageid);c.canonicalUrl=v.canonicalurl;const T=await v.summary();if(T.type!=="disambiguation"){if(await v.coordinates().then(o=>{console.log("resolved coords ",o),o!==null?c.mapCoords=`${o.lat}, ${o.lon}`:c.mapCoords="-999, -999"}),await v.images({limit:this.reStore.preferences.imgLimit}).then(o=>{for(const E in o)console.log(E),o[0].title.indexOf(".svg")>1?console.log("SVG ",o[0].title):o[0].title.indexOf("airytale")>0?console.log("Fairytale warning ",o[0].title):o[0].title.indexOf("kguitar")>1?console.log("kguitar ",o[0].title):o[0].title.indexOf("Blank.png")>-1?console.log("Blank.png ",o[0].title):o[0].title.indexOf(".oga")>1?console.log("OGA ",o[0].title):o[0].title.indexOf(".webm")>1?console.log("WEBM ",o[0].title):o[0].title.indexOf(".ogg")>1?console.log("OGG ",o[0].title):o[0].title.indexOf(".tif")>1?console.log("TIF ",o[0].title):o[0].title.indexOf(".mid")>1?console.log("MID ",o[0].title):o[0].title.indexOf(".ogv")>1?console.log("OGV ",o[0].title):o[0].title.indexOf("Icon")>1?console.log("ICON ",o[0].title):o[0].title.indexOf("icon")>1?console.log("icon ",o[0].title):o[0].title.indexOf("podagraria1")>0?console.log("podagraria1 ",o[0].title):o[0].title.indexOf("Bluetank")>1||o[0].title.indexOf("rab Nebula.jpg")>0?console.log("BLUETANK ",o[0].title):o[0].title.indexOf("viacionavion")>1||o[0].title.indexOf("input-microphone")>1?console.log("viacionavion",o[0].title):o[0].title.indexOf("clouds in fair weather")>0||o[0].title.indexOf("in pacifica 1")>0?console.log("clouds in fair weather",o[0].title):c.imgs.push({url:o[0].url,cap:o[0].title}),o.push(o.shift());c.imgs.length>1&&c.imgs.shift()}),c.pageText=T.extract,c.currentLangLinks=[],c.imgIdx=0,!m.coverUrl)try{m.coverUrl=m.pages[0].imgs[0].url}catch(o){console.log("ERROR setting coverUrl ",o)}m.pages.push(c),console.log("a.pages.length ",m.pages.length)}else console.log("SKIPPED ",T.type)})})}),this.reStore.courses[this.targetCK].assignments[m.id]=m,this.reStore.courses.trigger+=1},copyCK(s){M(s).then(()=>{console.log("ck copied to clipboard",s)}).catch(t=>{console.log(t)})},newCourseCB(){console.log("courseCB"),this.reStore.newCourse()},newAssignmentCB(s){console.log("assignmentCB: ",s),this.reStore.newAssignment(s)},editAssignmentCB(s,t){console.log("editAssignmentCB: ",s,t),this.reStore.loadAssignment(s,t),this.reStore.mode="editor",this.reStore.router.push("/teacher/editor")},changeTitleCB(){console.log("TeacherPage.titleCB",this.courseKey,this.courseTitle),this.reStore.setCourseTitle(this.courseKey,this.courseTitle)},deleteCourseCB(s){this.targetCK=s,this.targetAID=null,this.confirm=!0},deleteAssignmentCB(s,t){this.targetCK=s,this.targetAID=t,this.confirm=!0},deleteForSure(){this.confirm=!1,console.log("delete current targets ",this.targetCK,this.targetAID),this.targetAID&&this.targetCK?this.reStore.deleteAssignment(this.targetCK,this.targetAID):this.targetCK&&this.targetAID===null&&this.reStore.deleteCourse(this.targetCK),this.targetCK=null,this.targetAID=null},takeAssignmentCB(s,t){console.log("TeacherPage.takeAssignment ",s,t),this.reStore.loadAssignment(s,t),this.reStore.mode="assignment",this.reStore.router.push("/teacher/assignment")},shareToDemo(s,t){console.log(s,t),this.reStore.shareToDemo(s,t)},loadCourse(s){console.log("loadCourse ",s),this.reStore.loadCourse(s)}}},Z=i("span",{class:"q-ml-sm"},"Confirm delete object?",-1),ee=i("div",{class:"text-h6"},"Change course title",-1),te=i("div",{class:"text-h6"},"Provide guide-words",-1),oe={class:"q-pa-md"},le={class:"text-weight-bolder text-center text-h4 q-pa-md"},se={class:"flex flex-row justify-center"},ne={class:"absolute-top text-center"},ie={class:"text-h6"},re={class:"text-subtitle2"},ae={key:0},ue={key:1},ce={style:{"font-size":"22pt",width:"100%"},class:"text-center absolute-bottom"},de=i("br",null,null,-1),he=i("br",null,null,-1),fe={class:"q-pa-md"},me=i("br",null,null,-1),ge=i("br",null,null,-1),pe=i("br",null,null,-1),Ce={width:"100%"},_e=i("tr",null,[i("th",{colSpan:"100"},"Course Score Sheet")],-1),Se=i("th",null,"Student",-1),ye={style:{"text-align":"center"}},we={key:0},ve={key:1};function xe(s,t,_,r,K,m){return f(),O(j,{class:"q-gutter-md bg-primary"},{default:l(()=>[e(V,{modelValue:r.confirm,"onUpdate:modelValue":t[1]||(t[1]=n=>r.confirm=n),persistent:"",class:"z-max"},{default:l(()=>[e(x,null,{default:l(()=>[e(w,{class:"row items-center"},{default:l(()=>[e(G,{icon:"delete",color:"primary","text-color":"white"}),Z]),_:1}),e(Q,{align:"right",class:"text-white"},{default:l(()=>[k(e(h,{flat:"",label:"Cancel"},null,512),[[B]]),e(h,{flat:"",label:"Delete",onClick:t[0]||(t[0]=n=>this.deleteForSure())})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(V,{modelValue:r.prompt,"onUpdate:modelValue":t[5]||(t[5]=n=>r.prompt=n),persistent:"",class:"z-max"},{default:l(()=>[e(x,{style:{"min-width":"350px"}},{default:l(()=>[e(w,null,{default:l(()=>[ee]),_:1}),e(w,{class:"q-pt-none"},{default:l(()=>[e(P,{dense:"",modelValue:r.courseTitle,"onUpdate:modelValue":t[2]||(t[2]=n=>r.courseTitle=n),autofocus:"",onKeyup:t[3]||(t[3]=I(n=>{r.prompt=!1,this.changeTitleCB()},["enter"])),onHide:this.dck},null,8,["modelValue","onHide"])]),_:1}),e(Q,{align:"right",class:"text-white"},{default:l(()=>[k(e(h,{outline:"",label:"Cancel"},null,512),[[B]]),k(e(h,{outline:"",label:"Save",onClick:t[4]||(t[4]=n=>this.changeTitleCB())},null,512),[[B]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(V,{modelValue:r.promptAwesome,"onUpdate:modelValue":t[9]||(t[9]=n=>r.promptAwesome=n),persistent:"",class:"z-max"},{default:l(()=>[e(x,{style:{"min-width":"350px"}},{default:l(()=>[e(w,null,{default:l(()=>[te]),_:1}),e(w,{class:"q-pt-none"},{default:l(()=>[e(P,{dense:"",modelValue:r.autoAwesomeGuideWords,"onUpdate:modelValue":t[6]||(t[6]=n=>r.autoAwesomeGuideWords=n),autofocus:"",onKeyup:t[7]||(t[7]=I(n=>{r.promptAwesome=!1,this.autoAwesomeCB()},["enter"]))},null,8,["modelValue"])]),_:1}),e(Q,{align:"right",class:"text-white"},{default:l(()=>[k(e(h,{outline:"",label:"Cancel"},null,512),[[B]]),k(e(h,{outline:"",label:"Save",onClick:t[8]||(t[8]=n=>this.autoAwesomeCB())},null,512),[[B]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),i("div",oe,[e(F,{class:"bg-positive text-white"},{default:l(()=>[i("div",le,[e(h,{class:"on-left",icon:"list_alt",onClick:t[10]||(t[10]=n=>this.newCourseCB())},{default:l(()=>[e(C,null,{default:l(()=>[d("Create a new course")]),_:1})]),_:1}),e(h,{flat:"","no-caps":"",style:{fontSize:"18pt"}},{default:l(()=>[d("Teacher")]),_:1}),this.reStore.authenticated?(f(),O(h,{key:0,class:"on-right",onClick:t[11]||(t[11]=n=>this.reStore.router.push("/student")),icon:"switch_account"},{default:l(()=>[e(C,null,{default:l(()=>[d(" Switch to Student-role ")]),_:1})]),_:1})):q("",!0)])]),_:1})]),i("div",se,[(f(!0),g(b,null,A(this.reStore.userSnapshot.teaching,(n,u,y)=>(f(),g("div",{key:y},[e(x,{bordered:"",flat:"",class:"ccard q-mx-sm q-my-md"},{default:l(()=>[e(z,{fit:s.cover,src:this.reStore.logoURL,height:"100%",onClick:a=>this.loadCourse(u)},{default:l(()=>[i("div",ne,[i("div",ie,S(this.reStore.courses[u].title.slice(0,18)),1),i("div",re,[n.assignments?(f(),g("span",ae,"Assignments: "+S(n.assignments.length),1)):(f(),g("span",ue,"Assignments: None"))])]),i("div",ce,[i("div",null,[e(h,{icon:"delete",onClick:a=>this.deleteCourseCB(n.ck)},{default:l(()=>[e(C,null,{default:l(()=>[d("Delete Course")]),_:1})]),_:2},1032,["onClick"]),e(h,{icon:"post_add",onClick:a=>this.newAssignmentCB(n.ck)},{default:l(()=>[e(C,null,{default:l(()=>[d("New Assignment")]),_:1})]),_:2},1032,["onClick"]),e(h,{icon:"auto_awesome",onClick:a=>{this.targetCK=u,r.promptAwesome=!0}},{default:l(()=>[e(C,null,{default:l(()=>[d("1-Step Custom Assignment Create")]),_:1})]),_:2},1032,["onClick"]),e(h,{icon:"content_copy",onClick:a=>this.copyCK(u)},{default:l(()=>[e(C,null,{default:l(()=>[d("Copy this course-key to clipboard. Enroll "),de,d("in this course using this course-key from "),he,d("the Student Page.")]),_:1})]),_:2},1032,["onClick"])])])]),_:2},1032,["fit","src","onClick"])]),_:2},1024)]))),128))]),(f(!0),g(b,null,A(this.reStore.userSnapshot.teaching,(n,u,y)=>(f(),O(x,{flat:"",key:y,style:{opacity:"1.0"},class:"hidden"},{default:l(()=>[i("div",fe,[e(W,{bordered:"",class:"rounded-borders"},{default:l(()=>[e(R,null,{header:l(()=>[e(N),e(N,null,{default:l(()=>[d(" Course: "+S(this.reStore.courses[n.ck].title),1)]),_:2},1024)]),default:l(()=>[e(x,{flat:""},{default:l(()=>[e(w,{class:"text-center",style:{fontSize:"12pt"}},{default:l(()=>[d(" Title: "+S(this.reStore.courses[u].title)+" \xA0",1),e(D,{class:"ptr",name:"edit",onClick:a=>{r.prompt=!0,this.courseTitle=this.reStore.courses[u].title,this.courseKey=u}},null,8,["onClick"]),me,d(" Key: "+S(u)+" ",1),e(D,{class:"ptr",name:"content_copy",onClick:a=>this.copyCK(u)},null,8,["onClick"]),i("div",null,[e(h,{icon:"delete",onClick:a=>this.deleteCourseCB(n.ck)},{default:l(()=>[e(C,null,{default:l(()=>[d("Delete Course")]),_:1})]),_:2},1032,["onClick"]),e(h,{icon:"post_add",onClick:a=>this.newAssignmentCB(n.ck)},{default:l(()=>[e(C,null,{default:l(()=>[d("New Assignment")]),_:1})]),_:2},1032,["onClick"]),e(h,{icon:"auto_awesome",onClick:a=>{this.targetCK=u,r.promptAwesome=!0}},{default:l(()=>[e(C,null,{default:l(()=>[d("1-Step Custom Assignment Create")]),_:1})]),_:2},1032,["onClick"]),e(h,{icon:"content_copy",onClick:a=>this.copyCK(u)},{default:l(()=>[e(C,null,{default:l(()=>[d("Copy this course-key to clipboard. Enroll "),ge,d("in this course using this course-key from "),pe,d("the Student Page.")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1024),e(w,null,{default:l(()=>[i("table",Ce,[_e,i("tr",null,[Se,(f(!0),g(b,null,A(this.reStore.courses[u].assignments,(a,c)=>(f(),g("th",{key:c},[i("span",null,S(a.title),1)]))),128))]),(f(!0),g(b,null,A(this.reStore.courses[u].enrollment,a=>(f(),g("tr",{key:a.name},[i("td",ye,S(a.name),1),(f(!0),g(b,null,A(this.reStore.courses[u].assignments,(c,v)=>(f(),g("td",{style:{"text-align":"center"},key:v},[c.scores&&c.scores[a.emailKey]?(f(),g("span",we,S(c.scores[a.emailKey]),1)):(f(),g("span",ve," -- "))]))),128))]))),128))])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)])]),_:2},1024))),128))]),_:1})}var We=U(Y,[["render",xe]]);export{We as default};