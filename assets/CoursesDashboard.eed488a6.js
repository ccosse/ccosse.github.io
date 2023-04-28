import{_ as D,j as G,r as q,k as o,G as n,q as t,n as e,H as k,aM as T,ae as d,Q as g,t as s,s as l,m as i,ab as v,aa as f,ai as V,aN as A,a8 as C,aG as h}from"./index.a39a3bc7.js";import{d as j,Q as B,c as K,C as $}from"./ClosePopup.f0dab97a.js";import{Q as y}from"./QCard.3cef2207.js";import{Q as b}from"./QTooltip.3b44ec67.js";import{g as m,h as p,Q as z}from"./QMenu.8783aaaa.js";import{Q as S}from"./QList.6d20693b.js";import{Q}from"./use-cache.1175832d.js";import{c as O,Q as U,a as I,b as P,d as E}from"./copy-to-clipboard.236a0ec4.js";import{Q as N}from"./QPage.a346c6d7.js";import{u as W}from"./store.f8e04343.js";import"./use-prevent-scroll.39f65783.js";import"./scroll.2850d4c7.js";import"./use-timeout.52cafccb.js";import"./use-tick.c7449db5.js";import"./use-dark.a32dcea4.js";import"./selection.f7fd9620.js";import"./touch.70a9dd44.js";import"./firebase.8769ab52.js";import"./axios.84ae42e4.js";const F=G({name:"CoursesDashboard",setup(){return{store:W(),slide:q(null),confirm:q(!1),showGradebook:q(!1),showOverview:q(!1)}},mounted(){console.log("CoursesDashboard mounted"),this.store.aid=null},methods:{toggleOverviewDiv(){console.log("toggleOverviewDiv"),this.showOverview?this.showOverview=!1:this.showOverview=!0},toggleGradebook(){console.log("toggleGradebook"),this.showGradebook?this.showGradebook=!1:this.showGradebook=!0},deleteSelectedObject(){this.store.aid!==null&&this.store.aid>-1?this.store.deleteAssignment(this.store.ck,this.store.aid):this.store.ck!==null&&this.store.deleteCourse(this.store.ck)},editCB(){if(this.store.aid!==null)this.store.pgIdx=-1;else{const u=Object.keys(this.store.currentCourse.assignments);u.length>0&&(this.store.aid=u[0],this.store.pgIdx=0)}this.store.router.push("/courses/assignments")},slideChanged(u){console.log("CourseDashboard.slideChanged ck = ",u),this.store.ck=u},viewerCB(){if(console.log("CourseDash viewerCB setting pgIdx 0 before /viewer"),this.store.currentAssignment.pages.length===0){this.store.notify("The requested assignment has no pages!");return}this.store.pgIdx=0,this.store.router.replace("/viewer")},copyCourseKeyCB(){O(this.store.ck).then(()=>{console.log("ck copied to clipboard",this.store.ck);const u=`The course-key ${this.store.ck} was copied to clipboard`;this.store.notify(u)}).catch(u=>{console.log(u)})}}}),H={key:0,class:"q-ml-sm"},L={key:1,class:"q-ml-sm"},M={key:0,class:"full-width"},R=s("div",{class:"justify-center"},[s("div",{class:"text-panel q-mx-md q-mb-xs q-mt-md text-h6",style:{"text-align":"center"}}," Welcome to Reading Edge! ")],-1),Y={class:"text-panel q-ma-md bg-dark",style:{"max-height":"90%"}},J={class:"text-center text-h6"},X=s("br",null,null,-1),Z={class:"text-white",href:"https://www.youtube.com/embed/-ATGbQFpa4I",target:"_blank"},ee={key:0,id:"overviewDiv"},te=s("div",{class:"key text-h6"},"Main Concepts",-1),se=s("div",{class:"key text-h6"},"Assignment Builder",-1),oe=s("br",null,null,-1),le=s("br",null,null,-1),ae=s("br",null,null,-1),ne=s("br",null,null,-1),re=s("div",{class:"key text-h6"},"Accounts & Subscriptions",-1),ie=s("br",null,null,-1),de=s("br",null,null,-1),ue=s("br",null,null,-1),ce={key:1,class:"justify-center absolute-top"},he={class:"text-panel justify-center q-mx-md q-mb-xs q-mt-md text-h6"},me={key:0,class:"cursor-pointer"},pe={key:0,class:"q-px-md row content-center"},fe={key:0,class:"embed-panel col-12 col-md-11 assignment",style:{"z-index":"5","max-height":"30vh",height:"30vh"}},_e={class:"q-px-lg row content-start"},ge={key:0},ye={width:"100%",class:"meta-table"},be=s("tr",null,[s("th",{colSpan:"100"},[s("div",{class:"text-center val"},"Assignments")])],-1),ke=s("th",{class:"val"},"Student",-1),ve={class:"hidden"},Ce={class:"key"},we={class:"hidden"},xe={key:0},qe={key:1},Ve={class:"hidden"},Se={key:1},Qe={width:"100%",class:"meta-table"},Ue=s("tr",null,[s("th",{colSpan:"100"},[s("div",{class:"text-center val"},"Assignments")])],-1),Ae=s("th",{class:"val"},"Student",-1),$e={class:"hidden"},ze={class:"key"},De={key:0},Ge={key:1,class:"embed-panel col-12 col-md-5 assignment",style:{"z-index":"5","max-height":"30vh",height:"30vh"}},Te={class:"q-px-lg row content-start"},je={class:"meta-table"},Be=s("th",{class:"key"},"Title",-1),Ke={class:"val"},Oe={class:"cursor-pointer"},Ie=s("td",{class:"key"},"Cover Url",-1),Pe={class:"cursor-pointer val"},Ee=s("td",{class:"key"},"Assignments",-1),Ne={class:"val"},We=s("td",{class:"key"},"Enrollment",-1),Fe={class:"val"},He=s("td",{class:"key"},"Created",-1),Le={class:"val"},Me=s("td",{class:"key"},"Updated",-1),Re={class:"val"},Ye={class:"control-panel q-pa-sm row justify-center no-wrap flex flex-center",style:{overflow:"auto"}},Je={key:0},Xe=s("br",null,null,-1),Ze=s("br",null,null,-1);function et(u,r,tt,st,ot,lt){return o(),n(k,null,[t(j,{modelValue:u.confirm,"onUpdate:modelValue":r[1]||(r[1]=w=>u.confirm=w),persistent:"",class:"z-max confirm-delete-obj"},{default:e(()=>[t(y,null,{default:e(()=>[t(B,{class:"row items-center"},{default:e(()=>[t(T,{icon:"delete",color:"primary","text-color":"white"}),this.store.aid!==null&&this.store.aid>-1?(o(),n("span",H,"Confirm delete assignment?")):(o(),n("span",L,"Confirm delete entire course?"))]),_:1}),t(K,{align:"right",class:"text-white"},{default:e(()=>[d(t(g,{flat:"",label:"Cancel"},null,512),[[$]]),d(t(g,{flat:"",label:"Delete",onClick:r[0]||(r[0]=w=>this.deleteSelectedObject())},null,512),[[$]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(N,{class:"flex col"},{default:e(()=>{var w;return[this.store.ck?(o(),n("div",ce,[s("div",he,[l(" Course: "),this.store.currentCourse?(o(),n("span",me,[l(f((w=this.store.currentCourse)==null?void 0:w.title)+" ",1),t(U,{modelValue:this.store.currentCourse.title,"onUpdate:modelValue":r[3]||(r[3]=c=>this.store.currentCourse.title=c),"auto-save":"",style:{maxWidth:"320px"}},{default:e(c=>[t(Q,{modelValue:c.value,"onUpdate:modelValue":x=>c.value=x,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:V(c.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["modelValue"])])):v("",!0)]),this.store.ck?(o(),n("div",pe,[t(I,{class:"q-ma-md full-width",animated:"",swipeable:"",thumbnails:"",autoplay:this.store.autoplay,"navigation-position":"top",modelValue:this.store.ck,"onUpdate:modelValue":[r[12]||(r[12]=c=>this.store.ck=c),this.slideChanged],infinite:"","control-type":"arrows",ref:"carousel",height:"82vh"},{control:e(()=>[t(P,{position:"bottom",offset:[0,0]},{default:e(()=>[s("div",Ye,[t(g,{push:"",round:"",class:"dash-button","text-color":"white",icon:"arrow_left",style:A({height:"33.5px",width:"33.5px"}),onClick:r[4]||(r[4]=c=>u.$refs.carousel.previous())},{default:e(()=>[t(b,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:e(()=>[t(y,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:e(()=>[l(" Go to previous course ")]),_:1})]),_:1})]),_:1},8,["style"]),t(g,{"no-caps":"",class:"on-right dash-button",icon:"table_chart",onClick:r[5]||(r[5]=c=>this.toggleGradebook())},{default:e(()=>[t(b,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:e(()=>[t(y,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:e(()=>[l(" View course gradebook ")]),_:1})]),_:1})]),_:1}),this.store.role==="teacher"?(o(),n("span",Je,[this.store.ck!==null&&(this.store.aid===null||this.store.aid===-1)?(o(),i(g,{key:0,"no-caps":"",class:"dash-button on-right",onClick:r[6]||(r[6]=c=>this.copyCourseKeyCB()),icon:"key"},{default:e(()=>[t(b,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:e(()=>[t(y,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:e(()=>[l(" Copy the course-key to clipboard, then"),Xe,l(" share the course-key with whoever you"),Ze,l(" want to enroll. ")]),_:1})]),_:1})]),_:1})):v("",!0),t(g,{"no-caps":"",icon:"add",class:"on-right dash-button",onClick:r[7]||(r[7]=c=>this.store.newCourse())},{default:e(()=>[t(b,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:e(()=>[t(y,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:e(()=>[l(" Create a new course ")]),_:1})]),_:1})]),_:1}),this.store.ck!==null?(o(),i(g,{key:1,"no-caps":"",icon:"edit",class:"on-right dash-button",onClick:r[8]||(r[8]=c=>this.editCB())},{default:e(()=>[t(b,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:e(()=>[t(y,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:e(()=>[l(" Go to the assignments for selected course ")]),_:1})]),_:1})]),_:1})):v("",!0),t(g,{"no-caps":"",icon:"save",class:"on-right dash-button",onClick:r[9]||(r[9]=c=>this.store.commitCourse(this.store.ck))},{default:e(()=>[t(b,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:e(()=>[t(y,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:e(()=>[l(" Save current course to cloud ")]),_:1})]),_:1})]),_:1}),t(g,{"no-caps":"",icon:"delete",class:"on-right dash-button",onClick:r[10]||(r[10]=c=>u.confirm=!0)},{default:e(()=>[t(b,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:e(()=>[t(y,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:e(()=>[l(" Delete the selected course ")]),_:1})]),_:1})]),_:1})])):v("",!0),t(g,{push:"",round:"",class:"on-right dash-button","text-color":"white",icon:"arrow_right",style:A({height:"33.5px",width:"33.5px"}),onClick:r[11]||(r[11]=c=>u.$refs.carousel.next())},{default:e(()=>[t(b,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:e(()=>[t(y,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:e(()=>[l(" Go to next course ")]),_:1})]),_:1})]),_:1},8,["style"])])]),_:1})]),default:e(()=>[(o(!0),n(k,null,C(this.store.courses,(c,x)=>(o(),i(E,{class:"text-panel row content-center justify-center",key:x,name:x,"img-src":c.coverUrl},{default:e(()=>[this.showGradebook?(o(),n("table",fe,[t(z,null,{default:e(()=>[l("Course Gradebook")]),_:1}),s("tr",null,[s("td",_e,[this.store.role==="teacher"?(o(),n("span",ge,[s("table",ye,[be,s("tr",null,[ke,(o(!0),n(k,null,C(this.store.courses[this.store.ck].assignments,(a,_)=>(o(),n("th",{key:a,class:"key"},[l(f(a.title)+" ",1),s("span",ve,f(_),1)]))),128))]),(o(!0),n(k,null,C(this.store.courses[this.store.ck].enrollment,a=>(o(),n("tr",{key:a.name},[s("td",Ce,[l(f(a.name)+" ",1),s("span",we,f(u.sidx),1)]),(o(!0),n(k,null,C(this.store.courses[this.store.ck].assignments,_=>(o(),n("td",{style:{"text-align":"center"},class:"val",key:_},[_.scores&&_.scores[a.emailKey]?(o(),n("span",xe,f(_.scores[a.emailKey]),1)):(o(),n("span",qe,"-")),l(),s("span",Ve,f(u.aidx),1)]))),128))]))),128))])])):(o(),n("span",Se,[s("table",Qe,[Ue,s("tr",null,[Ae,(o(!0),n(k,null,C(this.store.courses[this.store.ck].assignments,(a,_)=>(o(),n("th",{key:a,class:"key"},[l(f(a.title)+" ",1),s("span",$e,f(_),1)]))),128))]),s("tr",null,[s("td",ze,f(this.store.userSnapshot.profile.name),1),(o(!0),n(k,null,C(this.store.courses[this.store.ck].assignments,a=>(o(),n("td",{class:"val",key:a},[a.scores&&a.scores[this.store.emailKey]?(o(),n("span",De,f(a.scores[this.store.emailKey]),1)):v("",!0)]))),128))])])]))])])])):(o(),n("table",Ge,[t(z,null,{default:e(()=>[l("Course")]),_:1}),s("tr",null,[s("td",Te,[s("table",je,[s("tr",null,[Be,s("td",Ke,[s("div",Oe,[l(f(this.store.currentCourse.title)+" ",1),t(U,{modelValue:this.store.courses[this.store.ck].title,"onUpdate:modelValue":a=>this.store.courses[this.store.ck].title=a,"auto-save":""},{default:e(a=>[t(Q,{modelValue:a.value,"onUpdate:modelValue":_=>a.value=_,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:V(a.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])])]),s("tr",null,[Ie,s("td",null,[s("div",Pe,[l(" Change "),t(U,{modelValue:this.store.courses[this.store.ck].coverUrl,"onUpdate:modelValue":a=>this.store.courses[this.store.ck].coverUrl=a,"auto-save":""},{default:e(a=>[t(Q,{modelValue:a.value,"onUpdate:modelValue":_=>a.value=_,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:V(a.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])])]),s("tr",null,[Ee,s("td",Ne,f(Object.keys(this.store.currentCourse.assignments).length),1)]),s("tr",null,[We,s("td",Fe,f(Object.keys(this.store.currentCourse.enrollment).length),1)]),s("tr",null,[He,s("td",Le,f(this.store.currentCourse.created),1)]),s("tr",null,[Me,s("td",Re,f(this.store.currentCourse.updated),1)])])])])]))]),_:2},1032,["name","img-src"]))),128))]),_:1},8,["autoplay","modelValue","onUpdate:modelValue"])])):v("",!0)])):(o(),n("div",M,[R,s("div",Y,[s("div",J,[l(" Please select or create a course "),X,s("a",Z,[t(g,{class:"bg-primary",icon:"ondemand_video",size:"xl"}),t(b,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:e(()=>[t(y,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:e(()=>[l(" This video will be updated regularly ")]),_:1})]),_:1})]),s("a",{class:"text-white on-right",onClick:r[2]||(r[2]=c=>this.toggleOverviewDiv())},[t(g,{class:"bg-primary",icon:"info_outline",size:"xl"}),t(b,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:e(()=>[t(y,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:e(()=>[l(" Show quick-start instructions ")]),_:1})]),_:1})])]),u.showOverview?(o(),n("div",ee,[te,t(S,{dense:"",padding:""},{default:e(()=>[d((o(),i(p,{clickable:""},{default:e(()=>[t(m,null,{default:e(()=>[l(" Hierarchy: Course, Assignment, Page, Image ")]),_:1})]),_:1})),[[h]]),d((o(),i(p,{clickable:""},{default:e(()=>[t(m,null,{default:e(()=>[l(" Page = one paragraph, many images, config and meta info ")]),_:1})]),_:1})),[[h]]),d((o(),i(p,{clickable:""},{default:e(()=>[t(m,null,{default:e(()=>[l(" Assignment = list of Pages and Scores ")]),_:1})]),_:1})),[[h]]),d((o(),i(p,{clickable:""},{default:e(()=>[t(m,null,{default:e(()=>[l(" Course = many Assignments and an enrollment list ")]),_:1})]),_:1})),[[h]]),d((o(),i(p,{clickable:""},{default:e(()=>[t(m,null,{default:e(()=>[l(" Every account has 2 roles -- Teacher and Student ")]),_:1})]),_:1})),[[h]]),d((o(),i(p,{clickable:""},{default:e(()=>[t(m,null,{default:e(()=>[l(" Toggle between Teacher and Student located at top-right ")]),_:1})]),_:1})),[[h]]),d((o(),i(p,{clickable:""},{default:e(()=>[t(m,null,{default:e(()=>[l(" Share course-key with anyone you want to enroll. Then they can enroll themselves. ")]),_:1})]),_:1})),[[h]]),d((o(),i(p,{clickable:""},{default:e(()=>[t(m,null,{default:e(()=>[l(" You can enroll yourself just by toggling and enrolling with one of your own course-keys! ")]),_:1})]),_:1})),[[h]]),d((o(),i(p,{clickable:""},{default:e(()=>[t(m,null,{default:e(()=>[l(" There is no goal, only points. It is intended that you provide further incentive based on points ")]),_:1})]),_:1})),[[h]]),d((o(),i(p,{clickable:""},{default:e(()=>[t(m,null,{default:e(()=>[l(" Currently cannot drag-n-drop to reorder things, also can't edit gradebook yet ")]),_:1})]),_:1})),[[h]])]),_:1}),se,t(S,{dense:"",padding:""},{default:e(()=>[d((o(),i(p,{clickable:""},{default:e(()=>[t(m,null,{default:e(()=>[l(" Design goal = 30 seconds to make, 30 minutes to take ")]),_:1})]),_:1})),[[h]]),d((o(),i(p,{clickable:""},{default:e(()=>[t(m,null,{default:e(()=>[l(" Typically create Course, create Assignment, then add pages. Each item selected on left "),oe,l(" sidebar creates a new page at current location ")]),_:1})]),_:1})),[[h]]),d((o(),i(p,{clickable:""},{default:e(()=>[t(m,null,{default:e(()=>[l(" When generating complete assignment from guidewords just delete any unwanted pages (see video) ")]),_:1})]),_:1})),[[h]]),d((o(),i(p,{clickable:""},{default:e(()=>[t(m,null,{default:e(()=>[l(" As you work on pages you will be directly manipulating the page stored in memory."),le,l(" Saving your changes permanently to the database is a separate, manual action."),ae,l(" As an example: you could edit 5 different pages, change text and default images, then "),ne,l(' save all changes at once with the "Save Assignment" button. ')]),_:1})]),_:1})),[[h]])]),_:1}),re,t(S,{dense:"",padding:""},{default:e(()=>[d((o(),i(p,{clickable:""},{default:e(()=>[t(m,null,{default:e(()=>[l(" Subscriptions are enabled during current testing and your support is truly appreciated."),ie,l(" Please understand that this is brand new and you are one of the first people to use, "),de,l(" so thank you for being a tester. A support system is coming (forum or email). If you "),ue,l(" are not completely satisfied you can be refunded. Subscriber satisfaction is goal #1. ")]),_:1})]),_:1})),[[h]]),d((o(),i(p,{clickable:""},{default:e(()=>[t(m,null,{default:e(()=>[l(" Eventually your account might need to be reset or deleted as we are still testing. ")]),_:1})]),_:1})),[[h]]),d((o(),i(p,{clickable:""},{default:e(()=>[t(m,null,{default:e(()=>[l(" Thank you for your patience and feedback! ")]),_:1})]),_:1})),[[h]])]),_:1})])):v("",!0)])]))]}),_:1})],64)}var xt=D(F,[["render",et]]);export{xt as default};
