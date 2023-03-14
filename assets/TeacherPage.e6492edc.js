import{_ as U,r as m,o as u,f as T,w as s,g as t,ao as $,O as k,Q as c,aN as I,k as r,j as d,as as P,an as h,aq as b,ap as x,ar as g,i as w,aO as Q}from"./index.d41949e8.js";import{Q as S}from"./use-form.9307e729.js";import{a as O,r as z,d as V,Q as D,C as B}from"./ClosePopup.4bd02fd2.js";import{Q as y}from"./QCard.2a5a8db4.js";import{Q as N}from"./QInput.01edd5d9.js";import{Q as p}from"./QTooltip.92ef24cd.js";import{b as E,Q as F,a as q}from"./QList.91bdd8ef.js";import{Q as G}from"./QImg.8d2d0d99.js";import{Q as W}from"./QPage.8e96c628.js";import{u as J}from"./re-store.9b813dbf.js";import"./use-prevent-scroll.b7a6f442.js";import"./scroll.a7c4301e.js";import"./use-dark.2220006b.js";import"./use-key-composition.405041e0.js";import"./firebase.0eb8f378.js";import"./transform.aea72fbe.js";import"./index.2cf0d985.js";function R(o){const e=document.createElement("textarea");e.value=o,e.contentEditable="true",e.style.position="fixed";const v=()=>{};O(v),document.body.appendChild(e),e.focus(),e.select();const i=document.execCommand("copy");return e.remove(),z(v),i}function j(o){return navigator.clipboard!==void 0?navigator.clipboard.writeText(o):new Promise((e,v)=>{const i=R(o);i?e(!0):v(i)})}const L=J(),H={components:{},setup(){return{reStore:L,mval:m(!0),label:m("howdy"),courseKey:m(null),courseTitle:m(null),prompt:m(!1),confirm:m(!1),promptAwesome:m(!1),targetCK:m(null),targetAID:m(null),autoAwesomeGuideWords:m("")}},mounted(){console.log("TeacherPage mounted ",this.reStore.courses),this.reStore.unloadCurrent()},methods:{selectAssignment(o,e){this.reStore.courses.ck===o&&this.reStore.courses.aid===e?this.reStore.unloadCurrent():(this.reStore.courses.ck=o,this.reStore.courses.aid=e,this.reStore.courses.trigger+=1)},autoAwesomeCB(o){console.log("autoAwesomeCB ",this.autoAwesomeGuideWords);const e=this.autoAwesomeGuideWords.split(","),i=30/e.length;let K=parseInt(i/6);K<1&&(K=1);const f=JSON.parse(JSON.stringify(this.reStore.assignmentTemplate));if(f.ck=this.targetCK,f.id=(Math.random()*1e9).toString().replace(".",""),e.forEach(async n=>{const a=this.reStore.langVoices[this.reStore.preferences.langVoiceKey];console.log("doSearch ",a,this.searchTerms),this.reStore.wiki.setLang(a.langName);const A=await this.reStore.wiki.search(n,{suggestion:!1,limit:K});console.log("res.results.length: ",A.results.length),console.log(A.results),A.results.forEach(async l=>{console.log(l.pageid),await this.reStore.getPage(null,l.pageid,this.reStore.preferences.langVoiceKey).then(C=>{console.log("getPage returned rval ",C);const _=JSON.parse(JSON.stringify(this.reStore.page));f.pages.push(_),console.log("a.pages.length ",f.pages.length)})})}),!f.coverUrl)try{this.reStore.setCover(f.pages[0].imgs[0])}catch(n){console.log("ERROR setting coverUrl ",n)}this.reStore.courses[this.targetCK].assignments[f.id]=f,this.reStore.courses.trigger+=1},copyCK(o){j(o).then(()=>{console.log("ck copied to clipboard",o)}).catch(e=>{console.log(e)})},newCourseCB(){console.log("courseCB"),this.reStore.newCourse()},newAssignmentCB(o){console.log("assignmentCB: ",o),this.reStore.newAssignment(o)},editAssignmentCB(o,e){console.log("editAssignmentCB: ",o,e),this.reStore.loadAssignment(o,e),this.reStore.mode="editor",this.reStore.router.push("/teacher/editor")},changeTitleCB(){console.log("TeacherPage.titleCB",this.courseKey,this.courseTitle),this.reStore.setCourseTitle(this.courseKey,this.courseTitle)},deleteCourseCB(o){this.targetCK=o,this.targetAID=null,this.confirm=!0},deleteAssignmentCB(o,e){this.targetCK=o,this.targetAID=e,this.confirm=!0},deleteForSure(){this.confirm=!1,console.log("delete current targets ",this.targetCK,this.targetAID),this.targetAID&&this.targetCK?this.reStore.deleteAssignment(this.targetCK,this.targetAID):this.targetCK&&this.targetAID===null&&this.reStore.deleteCourse(this.targetCK),this.targetCK=null,this.targetAID=null},takeAssignmentCB(o,e){console.log("TeacherPage.takeAssignment ",o,e),this.reStore.loadAssignment(o,e),this.reStore.mode="assignment",this.reStore.router.push("/teacher/assignment")},shareToDemo(o,e){console.log(o,e),this.reStore.shareToDemo(o,e)}}},M=r("span",{class:"q-ml-sm"},"Confirm delete object?",-1),X=r("div",{class:"text-h6"},"Change course title",-1),Y=r("div",{class:"text-h6"},"Provide guide-words, percent-replace and points-goal",-1),Z={class:"q-pa-md"},ee={class:"flex flex-center"},te={class:"q-pa-md"},se=r("br",null,null,-1),oe=r("br",null,null,-1),le=r("br",null,null,-1),re={class:"flex flex-row justify-center"},ne={class:"absolute-top text-center"},ie={class:"text-h6"},ae={class:"text-subtitle2"},ue={key:0},de={key:1},ce={style:{"font-size":"22pt",width:"100%"},class:"text-center absolute-bottom"},he=r("br",null,null,-1),me={class:"hidden"},ge={width:"100%"},pe=r("tr",null,[r("th",{colSpan:"100"},"Course Score Sheet")],-1),fe=r("th",null,"Student",-1),Ce={style:{"text-align":"center"}},_e={key:0},Se={key:1};function ye(o,e,v,i,K,f){return u(),T(W,{class:"q-gutter-md"},{default:s(()=>[t(D,{modelValue:i.confirm,"onUpdate:modelValue":e[1]||(e[1]=n=>i.confirm=n),persistent:"",class:"z-max"},{default:s(()=>[t(y,null,{default:s(()=>[t(S,{class:"row items-center"},{default:s(()=>[t($,{icon:"delete",color:"primary","text-color":"white"}),M]),_:1}),t(V,{align:"right",class:"text-white"},{default:s(()=>[k(t(c,{flat:"",label:"Cancel"},null,512),[[B]]),t(c,{flat:"",label:"Delete",onClick:e[0]||(e[0]=n=>this.deleteForSure())})]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(D,{modelValue:i.prompt,"onUpdate:modelValue":e[5]||(e[5]=n=>i.prompt=n),persistent:"",class:"z-max"},{default:s(()=>[t(y,{style:{"min-width":"350px"}},{default:s(()=>[t(S,null,{default:s(()=>[X]),_:1}),t(S,{class:"q-pt-none"},{default:s(()=>[t(N,{dense:"",modelValue:i.courseTitle,"onUpdate:modelValue":e[2]||(e[2]=n=>i.courseTitle=n),autofocus:"",onKeyup:e[3]||(e[3]=I(n=>{i.prompt=!1,this.changeTitleCB()},["enter"])),onHide:this.dck},null,8,["modelValue","onHide"])]),_:1}),t(V,{align:"right",class:"text-white"},{default:s(()=>[k(t(c,{outline:"",label:"Cancel"},null,512),[[B]]),k(t(c,{outline:"",label:"Save",onClick:e[4]||(e[4]=n=>this.changeTitleCB())},null,512),[[B]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(D,{modelValue:i.promptAwesome,"onUpdate:modelValue":e[9]||(e[9]=n=>i.promptAwesome=n),persistent:"",class:"z-max"},{default:s(()=>[t(y,{style:{"min-width":"350px"}},{default:s(()=>[t(S,null,{default:s(()=>[Y]),_:1}),t(S,{class:"q-pt-none"},{default:s(()=>[t(N,{dense:"",modelValue:i.autoAwesomeGuideWords,"onUpdate:modelValue":e[6]||(e[6]=n=>i.autoAwesomeGuideWords=n),autofocus:"",onKeyup:e[7]||(e[7]=I(n=>{i.promptAwesome=!1,this.autoAwesomeCB()},["enter"]))},null,8,["modelValue"])]),_:1}),t(V,{align:"right",class:"text-white"},{default:s(()=>[k(t(c,{outline:"",label:"Cancel"},null,512),[[B]]),k(t(c,{outline:"",label:"Save",onClick:e[8]||(e[8]=n=>this.autoAwesomeCB())},null,512),[[B]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),r("div",Z,[t(E,{bordered:"",class:"rounded-borders"},{default:s(()=>[t(y,{flat:""},{default:s(()=>[r("div",ee,[r("div",null,[t(c,{class:"on-left",icon:"list_alt",onClick:e[10]||(e[10]=n=>this.newCourseCB())},{default:s(()=>[t(p,null,{default:s(()=>[d("Create a new course")]),_:1})]),_:1}),t(c,{flat:"","no-caps":"",style:{fontSize:"18pt"}},{default:s(()=>[d("Teacher Dashboard")]),_:1}),this.reStore.authenticated?(u(),T(c,{key:0,class:"on-right",onClick:e[11]||(e[11]=n=>this.reStore.router.push("/student")),icon:"switch_account"},{default:s(()=>[t(p,null,{default:s(()=>[d(" Switch to Student-role ")]),_:1})]),_:1})):P("",!0)])])]),_:1})]),_:1})]),(u(!0),h(x,null,b(this.reStore.userSnapshot.teaching,(n,a,A)=>(u(),T(y,{flat:"",key:A,style:{opacity:"1.0"}},{default:s(()=>[r("div",te,[t(E,{bordered:"",class:"rounded-borders"},{default:s(()=>[t(F,null,{header:s(()=>[t(q),t(q,null,{default:s(()=>[d(" Course: "+g(this.reStore.courses[n.ck].title),1)]),_:2},1024)]),default:s(()=>[t(y,{flat:""},{default:s(()=>[t(S,{class:"text-center",style:{fontSize:"12pt"}},{default:s(()=>[d(" Title: "+g(this.reStore.courses[a].title)+" \xA0",1),t(w,{class:"ptr",name:"edit",onClick:l=>{i.prompt=!0,this.courseTitle=this.reStore.courses[a].title,this.courseKey=a}},null,8,["onClick"]),se,d(" Key: "+g(a)+" ",1),t(w,{class:"ptr",name:"content_copy",onClick:l=>this.copyCK(a)},null,8,["onClick"]),r("div",null,[t(c,{icon:"delete",onClick:l=>this.deleteCourseCB(n.ck)},{default:s(()=>[t(p,null,{default:s(()=>[d("Delete Course")]),_:1})]),_:2},1032,["onClick"]),t(c,{icon:"post_add",onClick:l=>this.newAssignmentCB(n.ck)},{default:s(()=>[t(p,null,{default:s(()=>[d("New Assignment")]),_:1})]),_:2},1032,["onClick"]),t(c,{icon:"auto_awesome",onClick:l=>{this.targetCK=a,i.promptAwesome=!0}},{default:s(()=>[t(p,null,{default:s(()=>[d("1-Step Custom Assignment Create")]),_:1})]),_:2},1032,["onClick"]),t(c,{icon:"content_copy",onClick:l=>this.copyCK(a)},{default:s(()=>[t(p,null,{default:s(()=>[d("Copy this course-key to clipboard. Enroll "),oe,d("in this course using this course-key from "),le,d("the Student Page.")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1024),r("div",re,[(u(!0),h(x,null,b(this.reStore.courses[a].assignments,(l,C)=>(u(),h("div",{key:l},[t(y,{bordered:"",flat:"",class:"ccard q-mx-sm q-my-md"},{default:s(()=>[t(G,{fit:o.cover,src:l.coverUrl,height:"100%",onClick:_=>this.selectAssignment(a,l.id)},{default:s(()=>[r("div",ne,[r("div",ie,g(l.title.slice(0,18)),1),r("div",ae,[l.pages?(u(),h("span",ue,"Pages: "+g(l.pages.length),1)):(u(),h("span",de,"Pages: None"))])]),r("div",ce,[t(w,{onClick:[_=>this.takeAssignmentCB(a,l.id),e[12]||(e[12]=Q(()=>{},["stop","prevent"]))],name:"play_circle",class:"ptr"},{default:s(()=>[t(p,null,{default:s(()=>[d("Take Assignment")]),_:1})]),_:2},1032,["onClick"]),t(w,{onClick:[_=>this.editAssignmentCB(a,l.id),e[13]||(e[13]=Q(()=>{},["stop","prevent"]))],name:"edit",class:"ptr on-right"},{default:s(()=>[t(p,null,{default:s(()=>[d("Edit Assignment"),he,d(g(l.id),1)]),_:2},1024)]),_:2},1032,["onClick"]),t(w,{onClick:[_=>this.deleteAssignmentCB(a,l.id),e[14]||(e[14]=Q(()=>{},["stop","prevent"]))],name:"delete",class:"ptr on-right"},{default:s(()=>[t(p,null,{default:s(()=>[d("Delete Assignment")]),_:1})]),_:2},1032,["onClick"]),a!==this.reStore.demoCK&&this.reStore.userSnapshot.profile.email==="charlie@readingedge.org"?(u(),T(w,{key:0,onClick:[_=>this.shareToDemo(a,l.id),e[15]||(e[15]=Q(()=>{},["stop","prevent"]))],name:"share",class:"ptr on-right"},{default:s(()=>[t(p,null,{default:s(()=>[d("Share Assignment")]),_:1})]),_:2},1032,["onClick"])):P("",!0)])]),_:2},1032,["fit","src","onClick"])]),_:2},1024),r("span",me,g(C),1)]))),128))]),t(S,null,{default:s(()=>[r("table",ge,[pe,r("tr",null,[fe,(u(!0),h(x,null,b(this.reStore.courses[a].assignments,(l,C)=>(u(),h("th",{key:C},[r("span",null,g(l.title),1)]))),128))]),(u(!0),h(x,null,b(this.reStore.courses[a].enrollment,l=>(u(),h("tr",{key:l.name},[r("td",Ce,g(l.name),1),(u(!0),h(x,null,b(this.reStore.courses[a].assignments,(C,_)=>(u(),h("td",{style:{"text-align":"center"},key:_},[C.scores&&C.scores[l.emailKey]?(u(),h("span",_e,g(C.scores[l.emailKey]),1)):(u(),h("span",Se," -- "))]))),128))]))),128))])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)])]),_:2},1024))),128))]),_:1})}var Ue=U(H,[["render",ye]]);export{Ue as default};
