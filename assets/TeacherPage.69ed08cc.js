import{_ as q,r as C,o as c,f as O,w as l,g as t,ao as L,O as k,Q as f,aN as P,k as i,j as h,as as E,an as p,aq as b,ap as B,ar as _,i as x,aO as V}from"./index.95bb4c97.js";import{Q as v}from"./use-form.1cb84069.js";import{a as F,r as z,d as I,Q as D,C as T}from"./ClosePopup.734320af.js";import{Q as y}from"./QCard.7020e53d.js";import{Q as N}from"./QInput.3ac7fa72.js";import{Q as S}from"./QTooltip.12a2bdd3.js";import{b as U,Q as W,a as G}from"./QList.48f83aba.js";import{Q as j}from"./QImg.7a491717.js";import{Q as R}from"./QPage.a5c3e535.js";import{u as M}from"./re-store.861aa502.js";import"./use-prevent-scroll.0d6e8908.js";import"./scroll.63c2128a.js";import"./use-dark.c7b69132.js";import"./use-key-composition.484f64ac.js";import"./firebase.0eb8f378.js";import"./transform.aea72fbe.js";import"./index.2cf0d985.js";function H(s){const e=document.createElement("textarea");e.value=s,e.contentEditable="true",e.style.position="fixed";const w=()=>{};F(w),document.body.appendChild(e),e.focus(),e.select();const a=document.execCommand("copy");return e.remove(),z(w),a}function J(s){return navigator.clipboard!==void 0?navigator.clipboard.writeText(s):new Promise((e,w)=>{const a=H(s);a?e(!0):w(a)})}const X=M(),Y={components:{},setup(){return{reStore:X,mval:C(!0),label:C("howdy"),courseKey:C(null),courseTitle:C(null),prompt:C(!1),confirm:C(!1),promptAwesome:C(!1),targetCK:C(null),targetAID:C(null),autoAwesomeGuideWords:C("")}},mounted(){console.log("TeacherPage mounted ",this.reStore.courses),this.reStore.unloadCurrent()},methods:{selectAssignment(s,e){this.reStore.courses.ck===s&&this.reStore.courses.aid===e?this.reStore.unloadCurrent():(this.reStore.courses.ck=s,this.reStore.courses.aid=e,this.reStore.courses.trigger+=1)},autoAwesomeCB(s){console.log("autoAwesomeCB ",this.autoAwesomeGuideWords);const e=this.autoAwesomeGuideWords.split(","),a=30/e.length;let K=parseInt(a/6);K<1&&(K=1);const g=JSON.parse(JSON.stringify(this.reStore.assignmentTemplate));g.ck=this.targetCK,g.id=this.reStore.mkId(),g.pgIdx=0,g.coverUrl=null,e.forEach(async r=>{const u=this.reStore.langVoices[this.reStore.preferences.langVoiceKey];console.log("doSearch ",u,this.searchTerms),this.reStore.wiki.setLang(u.langName);const A=await this.reStore.wiki.search(r,{suggestion:!1,limit:K});console.log("res.results.length: ",A.results.length),console.log(A.results),A.results.forEach(async n=>{console.log(n.pageid),await this.reStore.getPage2(null,n.pageid,this.reStore.preferences.langVoiceKey).then(async d=>{console.log("getPage returned rval ",d),d.pageTitle=n.title;const m=await this.reStore.wiki.page(n.pageid),Q=await m.summary();if(Q.type!=="disambiguation"){if(await m.coordinates().then(o=>{console.log("resolved coords ",o),o!==null?d.mapCoords=`${o.lat}, ${o.lon}`:d.mapCoords="-999, -999"}),await m.images({limit:this.reStore.preferences.imgLimit}).then(o=>{for(const $ in o)console.log($),o[0].title.indexOf(".svg")>1?console.log("SVG ",o[0].title):o[0].title.indexOf("airytale")>0?console.log("Fairytale warning ",o[0].title):o[0].title.indexOf("kguitar")>1?console.log("kguitar ",o[0].title):o[0].title.indexOf("Blank.png")>-1?console.log("Blank.png ",o[0].title):o[0].title.indexOf(".oga")>1?console.log("OGA ",o[0].title):o[0].title.indexOf(".webm")>1?console.log("WEBM ",o[0].title):o[0].title.indexOf(".ogg")>1?console.log("OGG ",o[0].title):o[0].title.indexOf(".tif")>1?console.log("TIF ",o[0].title):o[0].title.indexOf(".mid")>1?console.log("MID ",o[0].title):o[0].title.indexOf(".ogv")>1?console.log("OGV ",o[0].title):o[0].title.indexOf("Icon")>1?console.log("ICON ",o[0].title):o[0].title.indexOf("icon")>1?console.log("icon ",o[0].title):o[0].title.indexOf("podagraria1")>0?console.log("podagraria1 ",o[0].title):o[0].title.indexOf("Bluetank")>1||o[0].title.indexOf("rab Nebula.jpg")>0?console.log("BLUETANK ",o[0].title):o[0].title.indexOf("viacionavion")>1||o[0].title.indexOf("input-microphone")>1?console.log("viacionavion",o[0].title):o[0].title.indexOf("clouds in fair weather")>0||o[0].title.indexOf("in pacifica 1")>0?console.log("clouds in fair weather",o[0].title):d.imgs.push({url:o[0].url,cap:o[0].title}),o.push(o.shift());d.imgs.length>1&&d.imgs.shift()}),d.pageText=Q.extract,d.currentLangLinks=[],d.imgIdx=0,!g.coverUrl)try{g.coverUrl=g.pages[0].imgs[0].url}catch(o){console.log("ERROR setting coverUrl ",o)}g.pages.push(d),console.log("a.pages.length ",g.pages.length)}else console.log("SKIPPED ",Q.type)})})}),this.reStore.courses[this.targetCK].assignments[g.id]=g,this.reStore.courses.trigger+=1},copyCK(s){J(s).then(()=>{console.log("ck copied to clipboard",s)}).catch(e=>{console.log(e)})},newCourseCB(){console.log("courseCB"),this.reStore.newCourse()},newAssignmentCB(s){console.log("assignmentCB: ",s),this.reStore.newAssignment(s)},editAssignmentCB(s,e){console.log("editAssignmentCB: ",s,e),this.reStore.loadAssignment(s,e),this.reStore.mode="editor",this.reStore.router.push("/teacher/editor")},changeTitleCB(){console.log("TeacherPage.titleCB",this.courseKey,this.courseTitle),this.reStore.setCourseTitle(this.courseKey,this.courseTitle)},deleteCourseCB(s){this.targetCK=s,this.targetAID=null,this.confirm=!0},deleteAssignmentCB(s,e){this.targetCK=s,this.targetAID=e,this.confirm=!0},deleteForSure(){this.confirm=!1,console.log("delete current targets ",this.targetCK,this.targetAID),this.targetAID&&this.targetCK?this.reStore.deleteAssignment(this.targetCK,this.targetAID):this.targetCK&&this.targetAID===null&&this.reStore.deleteCourse(this.targetCK),this.targetCK=null,this.targetAID=null},takeAssignmentCB(s,e){console.log("TeacherPage.takeAssignment ",s,e),this.reStore.loadAssignment(s,e),this.reStore.mode="assignment",this.reStore.router.push("/teacher/assignment")},shareToDemo(s,e){console.log(s,e),this.reStore.shareToDemo(s,e)}}},Z=i("span",{class:"q-ml-sm"},"Confirm delete object?",-1),ee=i("div",{class:"text-h6"},"Change course title",-1),te=i("div",{class:"text-h6"},"Provide guide-words, percent-replace and points-goal",-1),oe={class:"q-pa-md"},le={class:"flex flex-center"},se={class:"q-pa-md"},ne=i("br",null,null,-1),ie=i("br",null,null,-1),re=i("br",null,null,-1),ae={class:"flex flex-row justify-center"},ue={class:"absolute-top text-center"},de={class:"text-h6"},ce={class:"text-subtitle2"},he={key:0},fe={key:1},pe={style:{"font-size":"22pt",width:"100%"},class:"text-center absolute-bottom"},ge=i("br",null,null,-1),me={class:"hidden"},Ce={width:"100%"},_e=i("tr",null,[i("th",{colSpan:"100"},"Course Score Sheet")],-1),Se=i("th",null,"Student",-1),ve={style:{"text-align":"center"}},ye={key:0},we={key:1};function xe(s,e,w,a,K,g){return c(),O(R,{class:"q-gutter-md"},{default:l(()=>[t(D,{modelValue:a.confirm,"onUpdate:modelValue":e[1]||(e[1]=r=>a.confirm=r),persistent:"",class:"z-max"},{default:l(()=>[t(y,null,{default:l(()=>[t(v,{class:"row items-center"},{default:l(()=>[t(L,{icon:"delete",color:"primary","text-color":"white"}),Z]),_:1}),t(I,{align:"right",class:"text-white"},{default:l(()=>[k(t(f,{flat:"",label:"Cancel"},null,512),[[T]]),t(f,{flat:"",label:"Delete",onClick:e[0]||(e[0]=r=>this.deleteForSure())})]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(D,{modelValue:a.prompt,"onUpdate:modelValue":e[5]||(e[5]=r=>a.prompt=r),persistent:"",class:"z-max"},{default:l(()=>[t(y,{style:{"min-width":"350px"}},{default:l(()=>[t(v,null,{default:l(()=>[ee]),_:1}),t(v,{class:"q-pt-none"},{default:l(()=>[t(N,{dense:"",modelValue:a.courseTitle,"onUpdate:modelValue":e[2]||(e[2]=r=>a.courseTitle=r),autofocus:"",onKeyup:e[3]||(e[3]=P(r=>{a.prompt=!1,this.changeTitleCB()},["enter"])),onHide:this.dck},null,8,["modelValue","onHide"])]),_:1}),t(I,{align:"right",class:"text-white"},{default:l(()=>[k(t(f,{outline:"",label:"Cancel"},null,512),[[T]]),k(t(f,{outline:"",label:"Save",onClick:e[4]||(e[4]=r=>this.changeTitleCB())},null,512),[[T]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(D,{modelValue:a.promptAwesome,"onUpdate:modelValue":e[9]||(e[9]=r=>a.promptAwesome=r),persistent:"",class:"z-max"},{default:l(()=>[t(y,{style:{"min-width":"350px"}},{default:l(()=>[t(v,null,{default:l(()=>[te]),_:1}),t(v,{class:"q-pt-none"},{default:l(()=>[t(N,{dense:"",modelValue:a.autoAwesomeGuideWords,"onUpdate:modelValue":e[6]||(e[6]=r=>a.autoAwesomeGuideWords=r),autofocus:"",onKeyup:e[7]||(e[7]=P(r=>{a.promptAwesome=!1,this.autoAwesomeCB()},["enter"]))},null,8,["modelValue"])]),_:1}),t(I,{align:"right",class:"text-white"},{default:l(()=>[k(t(f,{outline:"",label:"Cancel"},null,512),[[T]]),k(t(f,{outline:"",label:"Save",onClick:e[8]||(e[8]=r=>this.autoAwesomeCB())},null,512),[[T]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),i("div",oe,[t(U,{bordered:"",class:"rounded-borders"},{default:l(()=>[t(y,{flat:""},{default:l(()=>[i("div",le,[i("div",null,[t(f,{class:"on-left",icon:"list_alt",onClick:e[10]||(e[10]=r=>this.newCourseCB())},{default:l(()=>[t(S,null,{default:l(()=>[h("Create a new course")]),_:1})]),_:1}),t(f,{flat:"","no-caps":"",style:{fontSize:"18pt"}},{default:l(()=>[h("Teacher")]),_:1}),this.reStore.authenticated?(c(),O(f,{key:0,class:"on-right",onClick:e[11]||(e[11]=r=>this.reStore.router.push("/student")),icon:"switch_account"},{default:l(()=>[t(S,null,{default:l(()=>[h(" Switch to Student-role ")]),_:1})]),_:1})):E("",!0)])])]),_:1})]),_:1})]),(c(!0),p(B,null,b(this.reStore.userSnapshot.teaching,(r,u,A)=>(c(),O(y,{flat:"",key:A,style:{opacity:"1.0"}},{default:l(()=>[i("div",se,[t(U,{bordered:"",class:"rounded-borders"},{default:l(()=>[t(W,null,{header:l(()=>[t(G),t(G,null,{default:l(()=>[h(" Course: "+_(this.reStore.courses[r.ck].title),1)]),_:2},1024)]),default:l(()=>[t(y,{flat:""},{default:l(()=>[t(v,{class:"text-center",style:{fontSize:"12pt"}},{default:l(()=>[h(" Title: "+_(this.reStore.courses[u].title)+" \xA0",1),t(x,{class:"ptr",name:"edit",onClick:n=>{a.prompt=!0,this.courseTitle=this.reStore.courses[u].title,this.courseKey=u}},null,8,["onClick"]),ne,h(" Key: "+_(u)+" ",1),t(x,{class:"ptr",name:"content_copy",onClick:n=>this.copyCK(u)},null,8,["onClick"]),i("div",null,[t(f,{icon:"delete",onClick:n=>this.deleteCourseCB(r.ck)},{default:l(()=>[t(S,null,{default:l(()=>[h("Delete Course")]),_:1})]),_:2},1032,["onClick"]),t(f,{icon:"post_add",onClick:n=>this.newAssignmentCB(r.ck)},{default:l(()=>[t(S,null,{default:l(()=>[h("New Assignment")]),_:1})]),_:2},1032,["onClick"]),t(f,{icon:"auto_awesome",onClick:n=>{this.targetCK=u,a.promptAwesome=!0}},{default:l(()=>[t(S,null,{default:l(()=>[h("1-Step Custom Assignment Create")]),_:1})]),_:2},1032,["onClick"]),t(f,{icon:"content_copy",onClick:n=>this.copyCK(u)},{default:l(()=>[t(S,null,{default:l(()=>[h("Copy this course-key to clipboard. Enroll "),ie,h("in this course using this course-key from "),re,h("the Student Page.")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1024),i("div",ae,[(c(!0),p(B,null,b(this.reStore.courses[u].assignments,(n,d)=>(c(),p("div",{key:n},[t(y,{bordered:"",flat:"",class:"ccard q-mx-sm q-my-md"},{default:l(()=>[t(j,{fit:s.cover,src:n.coverUrl,height:"100%",onClick:m=>this.selectAssignment(u,n.id)},{default:l(()=>[i("div",ue,[i("div",de,_(n.title.slice(0,18)),1),i("div",ce,[n.pages?(c(),p("span",he,"Pages: "+_(n.pages.length),1)):(c(),p("span",fe,"Pages: None"))])]),i("div",pe,[t(x,{onClick:[m=>this.takeAssignmentCB(u,n.id),e[12]||(e[12]=V(()=>{},["stop","prevent"]))],name:"play_circle",class:"ptr"},{default:l(()=>[t(S,null,{default:l(()=>[h("Take Assignment")]),_:1})]),_:2},1032,["onClick"]),t(x,{onClick:[m=>this.editAssignmentCB(u,n.id),e[13]||(e[13]=V(()=>{},["stop","prevent"]))],name:"edit",class:"ptr on-right"},{default:l(()=>[t(S,null,{default:l(()=>[h("Edit Assignment"),ge,h(_(n.id),1)]),_:2},1024)]),_:2},1032,["onClick"]),t(x,{onClick:[m=>this.deleteAssignmentCB(u,n.id),e[14]||(e[14]=V(()=>{},["stop","prevent"]))],name:"delete",class:"ptr on-right"},{default:l(()=>[t(S,null,{default:l(()=>[h("Delete Assignment")]),_:1})]),_:2},1032,["onClick"]),u!==this.reStore.demoCK&&this.reStore.userSnapshot.profile.email==="charlie@readingedge.org"?(c(),O(x,{key:0,onClick:[m=>this.shareToDemo(u,n.id),e[15]||(e[15]=V(()=>{},["stop","prevent"]))],name:"share",class:"ptr on-right"},{default:l(()=>[t(S,null,{default:l(()=>[h("Share Assignment")]),_:1})]),_:2},1032,["onClick"])):E("",!0)])]),_:2},1032,["fit","src","onClick"])]),_:2},1024),i("span",me,_(d),1)]))),128))]),t(v,null,{default:l(()=>[i("table",Ce,[_e,i("tr",null,[Se,(c(!0),p(B,null,b(this.reStore.courses[u].assignments,(n,d)=>(c(),p("th",{key:d},[i("span",null,_(n.title),1)]))),128))]),(c(!0),p(B,null,b(this.reStore.courses[u].enrollment,n=>(c(),p("tr",{key:n.name},[i("td",ve,_(n.name),1),(c(!0),p(B,null,b(this.reStore.courses[u].assignments,(d,m)=>(c(),p("td",{style:{"text-align":"center"},key:m},[d.scores&&d.scores[n.emailKey]?(c(),p("span",ye,_(d.scores[n.emailKey]),1)):(c(),p("span",we," -- "))]))),128))]))),128))])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)])]),_:2},1024))),128))]),_:1})}var qe=q(Y,[["render",xe]]);export{qe as default};