import{_ as $,j as G,r as g,k as o,F as r,q as t,n as s,H as f,aM as K,a0 as V,Q as h,s as n,G as e,W as u,a4 as C,X as y,aN as q,m as v,U as _}from"./index.fd48161f.js";import{d as z,Q,c as B,C as S}from"./ClosePopup.bac8eb07.js";import{Q as m}from"./QCard.c3b9eba3.js";import{Q as x}from"./use-cache.4bdd5029.js";import{c as j,Q as w,a as D,b as A,d as T}from"./copy-to-clipboard.fd8a722d.js";import{Q as p,a as U}from"./QMenu.3fe99909.js";import{Q as I}from"./QPage.5bc1fc6e.js";import{u as N}from"./store.84bda557.js";import"./use-prevent-scroll.69bab20e.js";import"./scroll.72b78344.js";import"./use-dark.4d06f5aa.js";import"./touch.6b7af297.js";import"./firebase.84a31673.js";import"./axios.84ae42e4.js";const O=G({name:"CoursesDashboard",setup(){return{store:N(),slide:g(null),confirm:g(!1),showGradebook:g(!1)}},mounted(){console.log("CoursesDashboard mounted"),this.store.aid=null},methods:{toggleGradebook(){console.log("toggleGradebook"),this.showGradebook?this.showGradebook=!1:this.showGradebook=!0},deleteSelectedObject(){this.store.aid!==null&&this.store.aid>-1?this.store.deleteAssignment(this.store.ck,this.store.aid):this.store.ck!==null&&this.store.deleteCourse(this.store.ck)},editCB(){if(this.store.aid!==null)this.store.pgIdx=-1;else{const i=Object.keys(this.store.currentCourse.assignments);i.length>0&&(this.store.aid=i[0],this.store.pgIdx=0)}this.store.router.push("/courses/assignments")},slideChanged(i){console.log("CourseDashboard.slideChanged ck = ",i),this.store.ck=i},viewerCB(){if(console.log("CourseDash viewerCB setting pgIdx 0 before /viewer"),this.store.currentAssignment.pages.length===0){this.store.notify("The requested assignment has no pages!");return}this.store.pgIdx=0,this.store.router.replace("/viewer")},copyCourseKeyCB(){j(this.store.ck).then(()=>{console.log("ck copied to clipboard",this.store.ck);const i=`The course-key ${this.store.ck} was copied to clipboard`;this.store.notify(i)}).catch(i=>{console.log(i)})}}}),E={key:0,class:"q-ml-sm"},P={key:1,class:"q-ml-sm"},W={key:0},F=e("br",null,null,-1),H={key:1,class:"justify-center absolute-top"},L={class:"text-panel justify-center q-mx-md q-mb-xs q-mt-md text-h6"},M={key:0,class:"cursor-pointer"},R={class:"q-px-md row content-center"},X={key:0,class:"embed-panel col-12 col-md-11 assignment",style:{"z-index":"5","max-height":"30vh",height:"30vh"}},J={class:"q-px-lg row content-start"},Y={key:0},Z={width:"100%",class:"meta-table"},ee=e("tr",null,[e("th",{colSpan:"100"},[e("div",{class:"text-center val"},"Assignments")])],-1),te=e("th",{class:"val"},"Student",-1),se={class:"hidden"},oe={class:"key"},le={class:"hidden"},re={key:0},ae={key:1},ne={class:"hidden"},ie={key:1},de={width:"100%",class:"meta-table"},ue=e("tr",null,[e("th",{colSpan:"100"},[e("div",{class:"text-center val"},"Assignments")])],-1),ce=e("th",{class:"val"},"Student",-1),he={class:"hidden"},me={class:"key"},pe={key:0},fe={key:1,class:"embed-panel col-12 col-md-5 assignment",style:{"z-index":"5","max-height":"30vh",height:"30vh"}},_e={class:"q-px-lg row content-start"},ke={class:"meta-table"},ye=e("th",{class:"key"},"Title",-1),be={class:"val"},ge={class:"cursor-pointer"},Ce=e("td",{class:"key"},"Cover Url",-1),ve={class:"cursor-pointer val"},xe=e("td",{class:"key"},"Assignments",-1),we={class:"val"},Ve=e("td",{class:"key"},"Enrollment",-1),qe={class:"val"},Qe=e("td",{class:"key"},"Created",-1),Se={class:"val"},Ue=e("td",{class:"key"},"Updated",-1),$e={class:"val"},Ge={class:"control-panel q-pa-sm row justify-center no-wrap flex flex-center",style:{overflow:"auto"}},Ke={key:0},ze=e("br",null,null,-1),Be=e("br",null,null,-1);function je(i,a,De,Ae,Te,Ie){return o(),r(f,null,[t(z,{modelValue:i.confirm,"onUpdate:modelValue":a[1]||(a[1]=k=>i.confirm=k),persistent:"",class:"z-max confirm-delete-obj"},{default:s(()=>[t(m,null,{default:s(()=>[t(Q,{class:"row items-center"},{default:s(()=>[t(K,{icon:"delete",color:"primary","text-color":"white"}),this.store.aid!==null&&this.store.aid>-1?(o(),r("span",E,"Confirm delete assignment?")):(o(),r("span",P,"Confirm delete entire course?"))]),_:1}),t(B,{align:"right",class:"text-white"},{default:s(()=>[V(t(h,{flat:"",label:"Cancel"},null,512),[[S]]),V(t(h,{flat:"",label:"Delete",onClick:a[0]||(a[0]=k=>this.deleteSelectedObject())},null,512),[[S]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(I,{class:"flex flex-center"},{default:s(()=>{var k;return[this.store?(o(),r("div",H,[e("div",L,[n(" Course: "),this.store.currentCourse?(o(),r("span",M,[n(u((k=this.store.currentCourse)==null?void 0:k.title)+" ",1),t(w,{modelValue:this.store.currentCourse.title,"onUpdate:modelValue":a[2]||(a[2]=d=>this.store.currentCourse.title=d),"auto-save":"",style:{maxWidth:"320px"}},{default:s(d=>[t(x,{modelValue:d.value,"onUpdate:modelValue":b=>d.value=b,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:C(d.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["modelValue"])])):y("",!0)]),e("div",R,[t(D,{class:"q-ma-md full-width",animated:"",swipeable:"",thumbnails:"",autoplay:this.store.autoplay,"navigation-position":"top",modelValue:this.store.ck,"onUpdate:modelValue":[a[11]||(a[11]=d=>this.store.ck=d),this.slideChanged],infinite:"","control-type":"arrows",ref:"carousel",height:"82vh"},{control:s(()=>[t(A,{position:"bottom",offset:[0,0]},{default:s(()=>[e("div",Ge,[t(h,{push:"",round:"",class:"dash-button","text-color":"white",icon:"arrow_left",style:q({height:"33.5px",width:"33.5px"}),onClick:a[3]||(a[3]=d=>i.$refs.carousel.previous())},{default:s(()=>[t(p,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:s(()=>[t(m,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:s(()=>[n(" Go to previous course ")]),_:1})]),_:1})]),_:1},8,["style"]),t(h,{"no-caps":"",class:"on-right dash-button",icon:"table_chart",onClick:a[4]||(a[4]=d=>this.toggleGradebook())},{default:s(()=>[t(p,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:s(()=>[t(m,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:s(()=>[n(" View course gradebook ")]),_:1})]),_:1})]),_:1}),this.store.role==="teacher"?(o(),r("span",Ke,[this.store.ck!==null&&(this.store.aid===null||this.store.aid===-1)?(o(),v(h,{key:0,"no-caps":"",class:"dash-button on-right",onClick:a[5]||(a[5]=d=>this.copyCourseKeyCB()),icon:"key"},{default:s(()=>[t(p,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:s(()=>[t(m,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:s(()=>[n(" Copy the course-key to clipboard, then"),ze,n(" share the course-key with whoever you"),Be,n(" want to enroll. ")]),_:1})]),_:1})]),_:1})):y("",!0),t(h,{"no-caps":"",icon:"add",class:"on-right dash-button",onClick:a[6]||(a[6]=d=>this.store.newCourse())},{default:s(()=>[t(p,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:s(()=>[t(m,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:s(()=>[n(" Create a new course ")]),_:1})]),_:1})]),_:1}),this.store.ck!==null?(o(),v(h,{key:1,"no-caps":"",icon:"edit",class:"on-right dash-button",onClick:a[7]||(a[7]=d=>this.editCB())},{default:s(()=>[t(p,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:s(()=>[t(m,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:s(()=>[n(" Go to the assignments for selected course ")]),_:1})]),_:1})]),_:1})):y("",!0),t(h,{"no-caps":"",icon:"save",class:"on-right dash-button",onClick:a[8]||(a[8]=d=>this.store.commitCourse(this.store.ck))},{default:s(()=>[t(p,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:s(()=>[t(m,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:s(()=>[n(" Save current course to cloud ")]),_:1})]),_:1})]),_:1}),t(h,{"no-caps":"",icon:"delete",class:"on-right dash-button",onClick:a[9]||(a[9]=d=>i.confirm=!0)},{default:s(()=>[t(p,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:s(()=>[t(m,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:s(()=>[n(" Delete the selected course ")]),_:1})]),_:1})]),_:1})])):y("",!0),t(h,{push:"",round:"",class:"on-right dash-button","text-color":"white",icon:"arrow_right",style:q({height:"33.5px",width:"33.5px"}),onClick:a[10]||(a[10]=d=>i.$refs.carousel.next())},{default:s(()=>[t(p,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:s(()=>[t(m,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:s(()=>[n(" Go to next course ")]),_:1})]),_:1})]),_:1},8,["style"])])]),_:1})]),default:s(()=>[(o(!0),r(f,null,_(this.store.courses,(d,b)=>(o(),v(T,{class:"text-panel row content-center justify-center",key:b,name:b,"img-src":d.coverUrl},{default:s(()=>[this.showGradebook?(o(),r("table",X,[t(U,null,{default:s(()=>[n("Course Gradebook")]),_:1}),e("tr",null,[e("td",J,[this.store.role==="teacher"?(o(),r("span",Y,[e("table",Z,[ee,e("tr",null,[te,(o(!0),r(f,null,_(this.store.courses[this.store.ck].assignments,(l,c)=>(o(),r("th",{key:l,class:"key"},[n(u(l.title)+" ",1),e("span",se,u(c),1)]))),128))]),(o(!0),r(f,null,_(this.store.courses[this.store.ck].enrollment,l=>(o(),r("tr",{key:l.name},[e("td",oe,[n(u(l.name)+" ",1),e("span",le,u(i.sidx),1)]),(o(!0),r(f,null,_(this.store.courses[this.store.ck].assignments,c=>(o(),r("td",{style:{"text-align":"center"},class:"val",key:c},[c.scores&&c.scores[l.emailKey]?(o(),r("span",re,u(c.scores[l.emailKey]),1)):(o(),r("span",ae,"-")),n(),e("span",ne,u(i.aidx),1)]))),128))]))),128))])])):(o(),r("span",ie,[e("table",de,[ue,e("tr",null,[ce,(o(!0),r(f,null,_(this.store.courses[this.store.ck].assignments,(l,c)=>(o(),r("th",{key:l,class:"key"},[n(u(l.title)+" ",1),e("span",he,u(c),1)]))),128))]),e("tr",null,[e("td",me,u(this.store.userSnapshot.profile.name),1),(o(!0),r(f,null,_(this.store.courses[this.store.ck].assignments,l=>(o(),r("td",{class:"val",key:l},[l.scores&&l.scores[this.store.emailKey]?(o(),r("span",pe,u(l.scores[this.store.emailKey]),1)):y("",!0)]))),128))])])]))])])])):(o(),r("table",fe,[t(U,null,{default:s(()=>[n("Course")]),_:1}),e("tr",null,[e("td",_e,[e("table",ke,[e("tr",null,[ye,e("td",be,[e("div",ge,[n(u(this.store.currentCourse.title)+" ",1),t(w,{modelValue:this.store.courses[this.store.ck].title,"onUpdate:modelValue":l=>this.store.courses[this.store.ck].title=l,"auto-save":""},{default:s(l=>[t(x,{modelValue:l.value,"onUpdate:modelValue":c=>l.value=c,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:C(l.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])])]),e("tr",null,[Ce,e("td",null,[e("div",ve,[n(" Change "),t(w,{modelValue:this.store.courses[this.store.ck].coverUrl,"onUpdate:modelValue":l=>this.store.courses[this.store.ck].coverUrl=l,"auto-save":""},{default:s(l=>[t(x,{modelValue:l.value,"onUpdate:modelValue":c=>l.value=c,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:C(l.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])])]),e("tr",null,[xe,e("td",we,u(Object.keys(this.store.currentCourse.assignments).length),1)]),e("tr",null,[Ve,e("td",qe,u(Object.keys(this.store.currentCourse.enrollment).length),1)]),e("tr",null,[Qe,e("td",Se,u(this.store.currentCourse.created),1)]),e("tr",null,[Ue,e("td",$e,u(this.store.currentCourse.updated),1)])])])])]))]),_:2},1032,["name","img-src"]))),128))]),_:1},8,["autoplay","modelValue","onUpdate:modelValue"])])])):(o(),r("div",W,[t(m,{flat:"",bordered:"",class:"text-panel"},{default:s(()=>[t(Q,{class:"text-center"},{default:s(()=>[n(" Welcome to Reading Edge! "),F,n(" Please select or create a course ")]),_:1})]),_:1})]))]}),_:1})],64)}var et=$(O,[["render",je]]);export{et as default};
