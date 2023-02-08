import{d as y,r as i,D as P,_ as T,o as w,c as k,w as a,a as o,e,ag as l,Q as h,x as d,af as f,P as C,s as _,f as p}from"./index.397ca9ad.js";import{Q as R,a as $,b as L,c as u,d as A,e as m,f as x,g as U,h as B}from"./QLayout.f3cebcf5.js";import{u as S,s as v}from"./re-store.25c9546d.js";import{Q as W,D as G,P as q}from"./DocumentationComponent.e9d22f8a.js";import{Q as M,a as N}from"./ClosePopup.0b034046.js";import"./use-dark.8b7abc5a.js";import"./selection.d52e4756.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";import"./use-key-composition.ed61037c.js";import"./use-portal.35c839d0.js";import"./QSlideTransition.64c99f18.js";import"./position-engine.81c73d86.js";import"./QCheckbox.8f7bdb56.js";const H=y({name:"AssignmentStatus",props:{},setup(t){return{reStore:S(),assignmentTitle:i("---"),pageTitle:i("---"),pctComplete:i(0),points:i(0),goal:i(100),pgIdx:i(0),pgTot:i(0),imgIdx:i(0),imgTot:i(0),imgFit:i("---"),guideWords:i("---"),mapCoords:i("36.11,-115.17"),pageid:i("---"),courseid:i("---"),pctReplace:i("---"),props:t}},mounted(){console.log(this.props),P(this.reStore.assignmentStatus,async(t,s)=>{console.log("watcher ",t,s),this.pctComplete=parseInt(parseFloat(t.points)/parseFloat(t.goal)*100),this.assignmentTitle=t.assignmentTitle,this.pageTitle=t.pageTitle,this.points=t.points,this.goal=t.goal,this.pgIdx=t.pgIdx,this.pgTot=t.pgTot,this.imgIdx=t.imgIdx,this.imgTot=t.imgTot,this.imgFit=t.imgFit,this.guideWords=t.guideWords,this.mapCoords=t.mapCoords,this.pageid=t.pageid,this.courseid=t.courseid,this.pctReplace=t.pctReplace})},methods:{speak(){console.log("AssignmentStatus.speak",this.reStore),this.reStore.speak()},mapCB(){const t="https://maps.google.com/?ll="+this.mapCoords.split(",")[0]+","+this.mapCoords.split(",")[1];window.open(t,"_blank")},cycleFitMode(){const t=["scale-down","cover"];let s=t.indexOf(this.imgFit);s+=1,s>t.length-1&&(s=0),this.imgFit=t[s],this.reStore.page.imgFit=this.imgFit,this.reStore.assignmentStatus.imgFit=this.imgFit,console.log("fit: ",this.imgFit)},nextImg(){this.imgIdx=this.imgIdx+1>this.imgTot-1?0:this.imgIdx+1,console.log("AssignmentStatus nextImg",this.imgIdx,this.imgTot),this.reStore.setStatus("imgIdx",this.imgIdx)},toggleText(){v("#slideTextDiv").classed("hidden")===!0?v("#slideTextDiv").classed("hidden",!1):v("#slideTextDiv").classed("hidden",!0)},loadURL(t){console.log("loadURL ",t),window.open(t,"_blank")}}}),z={class:"text-weight-bolder text-center q-pa-md"},E={style:{border:"1px solid gray","border-radius":"5px"}},J={width:"100%"},K={style:{width:"50%"}},X=e("tr",null,[e("td",null,"% Complete"),e("td",null,"Speak Text")],-1),Y={style:{border:"1px solid gray","border-radius":"5px"},class:"q-my-md"},Z={width:"100%"},O=e("td",null,"Page Title",-1),j={style:{width:"50%"}},tt=e("td",null,"Course Id",-1),et={style:{width:"50%"}},st=e("td",null,"WP Page Id",-1),ot={style:{width:"50%"}},it=e("td",null,"Current Page",-1),lt=e("td",null,"Current Image",-1),at={class:"float-left"},nt=e("td",null,"Image Fit",-1),rt={class:"align-left"},dt=e("td",null,"Guide Words",-1),pt={style:{width:"50%"}},gt=e("td",null,"Percent Replace",-1),ut=e("td",null,"Map Coords",-1),mt={class:"float-left"};function ht(t,s,g,c,D,I){return w(),k(N,{flat:""},{default:a(()=>[o(M,null,{default:a(()=>[e("div",z,l(this.assignmentTitle)+": "+l(this.points)+"/"+l(this.goal),1),e("div",E,[e("table",J,[e("tr",null,[e("td",K,[o(W,{"show-value":"","instant-feedback":"",value:this.pctComplete,size:"55px",thickness:.4,color:"secondary","track-color":"grey-3","center-color":"grey-8",class:"q-ma-md"},null,8,["value","thickness"])]),e("td",null,[o(h,{round:"",class:"q-pa-md",icon:"volume_up",color:"secondary",onClick:s[0]||(s[0]=n=>this.speak())})])]),X])]),e("div",Y,[e("table",Z,[e("tr",null,[O,e("td",j,l(this.pageTitle),1)]),e("tr",null,[tt,e("td",et,l(this.courseid),1)]),e("tr",null,[st,e("td",ot,[e("a",{class:"bold_ptr float-left",onClick:s[1]||(s[1]=n=>this.loadURL(this.canonicalUrl))},l(this.pageid),1),o(d,{name:"link",class:"float-right"})])]),e("tr",null,[it,e("td",{style:{width:"50%"},class:"ptr",onClick:s[2]||(s[2]=(...n)=>this.toggleText&&this.toggleText(...n))},[f(l(this.pgIdx+1)+" / "+l(this.pgTot)+" ",1),o(d,{name:"article",class:"float-right"})])]),e("tr",null,[lt,e("td",{style:{width:"50%"},class:"ptr",onClick:s[3]||(s[3]=(...n)=>this.nextImg&&this.nextImg(...n))},[e("span",at,l(this.imgIdx+1)+" / "+l(this.imgTot),1),o(d,{name:"image",class:"float-right"})])]),e("tr",{class:"ptr",onClick:s[4]||(s[4]=(...n)=>this.cycleFitMode&&this.cycleFitMode(...n))},[nt,e("td",null,[e("span",rt,l(this.imgFit),1),o(d,{class:"float-right",name:"fit_screen"})])]),e("tr",null,[dt,e("td",pt,[f(l(this.guideWords.replaceAll(",",", "))+" ",1),o(d,{name:"tune",class:"float-right"})])]),e("tr",null,[gt,e("td",null,[f(l(this.pctReplace)+" % ",1),o(d,{name:"tune",class:"float-right"})])]),e("tr",null,[ut,e("td",{onClick:s[5]||(s[5]=(...n)=>this.mapCB&&this.mapCB(...n)),class:"ptr"},[e("span",mt,l(this.mapCoords.slice(0,13)),1),o(d,{class:"float-right",name:"place"})])])])])]),_:1})]),_:1})}var ct=T(H,[["render",ht]]);const ft=y({name:"GuestLayout",components:{AssignmentStatus:ct,DocumentationComponent:G,PreferencesComponent:q},setup(){const t=i(!1),s=i(!1),g=S(),c=g.preferences;return{step:i(1),reStore:g,initialValues:i(c),leftDrawerOpen:t,rightDrawerOpen:s,toggleLeftDrawer(){t.value=!t.value},toggleRightDrawer(){s.value=!s.value}}},mounted(){C.isActive||(C.toggle(),_("primary","#333"),_("secondary",this.reStore.preferences.secondaryColor),_("accent",this.reStore.preferences.accentColor))}}),_t={class:"dashboard-wrapper"};function vt(t,s,g,c,D,I){const n=p("router-link"),b=p("DocumentationComponent"),V=p("AssignmentStatus"),F=p("PreferencesComponent"),Q=p("router-view");return w(),k(B,{view:"hHh LpR fFf"},{default:a(()=>[o(A,{flat:"",bordered:"",class:"bg-primary text-white","height-hint":"98"},{default:a(()=>[o(R,null,{default:a(()=>[o(h,{dense:"",flat:"",round:"",icon:"menu",onClick:t.toggleLeftDrawer},null,8,["onClick"]),o($,null,{default:a(()=>[o(n,{to:"/"},{default:a(()=>[o(h,{dense:"",flat:"",round:"",icon:"home",color:"white"})]),_:1})]),_:1}),o(h,{dense:"",flat:"",round:"",icon:"menu",onClick:t.toggleRightDrawer},null,8,["onClick"])]),_:1}),o(L,{align:"left",class:"hidden"},{default:a(()=>[o(u,{to:"/logo",label:"Logo"}),o(u,{to:"/teaching",label:"Teaching"}),o(u,{to:"/taking",label:"Taking"}),o(u,{to:"/gradebook",label:"Gradebook"})]),_:1})]),_:1}),o(m,{"show-if-above":"",modelValue:t.leftDrawerOpen,"onUpdate:modelValue":s[0]||(s[0]=r=>t.leftDrawerOpen=r),side:"left",bordered:""},null,8,["modelValue"]),o(m,{"show-if-above":"",modelValue:t.rightDrawerOpen,"onUpdate:modelValue":s[1]||(s[1]=r=>t.rightDrawerOpen=r),side:"right",bordered:""},null,8,["modelValue"]),o(U,{class:"container-fluid"},{default:a(()=>[o(m,{bordered:"","show-if-above":"",modelValue:t.leftDrawerOpen,"onUpdate:modelValue":s[2]||(s[2]=r=>t.leftDrawerOpen=r),side:"left"},{default:a(()=>[o(x,{visible:t.visible,style:{height:"95vh","max-width":"350px"}},{default:a(()=>[o(b)]),_:1},8,["visible"])]),_:1},8,["modelValue"]),o(m,{bordered:"","show-if-above":"",modelValue:t.rightDrawerOpen,"onUpdate:modelValue":s[3]||(s[3]=r=>t.rightDrawerOpen=r),side:"right"},{default:a(()=>[o(x,{visible:t.visible,style:{height:"95vh","max-width":"350px"}},{default:a(()=>[o(V),o(F,{initialValues:this.initialValues},null,8,["initialValues"])]),_:1},8,["visible"])]),_:1},8,["modelValue"]),e("div",_t,[o(Q)])]),_:1})]),_:1})}var Rt=T(ft,[["render",vt]]);export{Rt as default};
