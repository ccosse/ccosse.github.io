import{d as y,r as i,D as P,_ as T,o as w,c as k,w as a,a as s,e,ag as l,Q as c,x as r,af as u,P as C,s as _,f as p}from"./index.28bfd79f.js";import{Q as R,a as $,b as L,c as h,d as A,e as m,f as x,g as U,h as B}from"./QLayout.30a18695.js";import{u as S,s as v}from"./re-store.48839778.js";import{Q as W,D as G,P as q}from"./DocumentationComponent.0388695e.js";import{Q as M,a as N}from"./ClosePopup.a57bf30a.js";import"./use-dark.d110bb63.js";import"./selection.1f925cf3.js";import"./firebase.ea708b63.js";import"./use-key-composition.fc341f9d.js";import"./use-portal.81e30091.js";import"./position-engine.cd1b565f.js";import"./QCheckbox.56a8cfeb.js";const H=y({name:"AssignmentStatus",props:{},setup(t){return{reStore:S(),assignmentTitle:i("---"),pageTitle:i("---"),lang:i("---"),pctComplete:i(0),points:i(0),goal:i(100),pgIdx:i(0),pgTot:i(0),imgIdx:i(0),imgTot:i(0),imgFit:i("---"),guideWords:i("---"),mapCoords:i("36.11,-115.17"),pageid:i("---"),courseid:i("---"),pctReplace:i("---"),props:t}},mounted(){console.log(this.props),P(this.reStore.assignmentStatus,async(t,o)=>{console.log("watcher ",t,o),this.pctComplete=parseInt(parseFloat(t.points)/parseFloat(t.goal)*100),this.assignmentTitle=t.assignmentTitle,this.pageTitle=t.pageTitle,this.points=t.points,this.goal=t.goal,this.pgIdx=t.pgIdx,this.pgTot=t.pgTot,this.imgIdx=t.imgIdx,this.imgTot=t.imgTot,this.imgFit=t.imgFit,this.guideWords=t.guideWords,this.mapCoords=t.mapCoords,this.pageid=t.pageid,this.courseid=t.courseid,this.lang=t.lang,this.pctReplace=t.pctReplace})},methods:{speak(){console.log("AssignmentStatus.speak",this.reStore),this.reStore.speak()},mapCB(){const t="https://maps.google.com/?ll="+this.mapCoords.split(",")[0]+","+this.mapCoords.split(",")[1];window.open(t,"_blank")},cycleFitMode(){const t=["scale-down","cover"];let o=t.indexOf(this.imgFit);o+=1,o>t.length-1&&(o=0),this.imgFit=t[o],this.reStore.page.imgFit=this.imgFit,this.reStore.assignmentStatus.imgFit=this.imgFit,console.log("fit: ",this.imgFit)},nextImg(){this.imgIdx=this.imgIdx+1>this.imgTot-1?0:this.imgIdx+1,console.log("AssignmentStatus nextImg",this.imgIdx,this.imgTot),this.reStore.setStatus("imgIdx",this.imgIdx)},toggleText(){v("#slideTextDiv").classed("hidden")===!0?v("#slideTextDiv").classed("hidden",!1):v("#slideTextDiv").classed("hidden",!0)},loadURL(t){console.log("loadURL ",t),window.open(t,"_blank")}}}),z={class:"text-weight-bolder text-center q-pa-md"},E={style:{border:"1px solid gray","border-radius":"5px"}},J={width:"100%"},K={style:{width:"50%"}},X=e("tr",null,[e("td",null,"% Complete"),e("td",null,"Speak Text")],-1),Y={style:{border:"1px solid gray","border-radius":"5px"},class:"q-my-md"},Z={width:"100%"},O=e("td",null,"Page Title",-1),j={style:{width:"50%"}},tt=e("td",null,"Course Id",-1),et={style:{width:"50%"}},st=e("td",null,"WP Page Id",-1),ot={style:{width:"50%"}},it=e("td",null,"Language",-1),lt={style:{width:"50%"}},at=e("td",null,"Current Page",-1),nt=e("td",null,"Current Image",-1),rt={class:"float-left"},dt=e("td",null,"Image Fit",-1),pt={class:"align-left"},gt=e("td",null,"Guide Words",-1),ut={style:{width:"50%"}},ht=e("td",null,"Percent Replace",-1),mt=e("td",null,"Map Coords",-1),ct={class:"float-left"};function ft(t,o,g,f,D,I){return w(),k(N,{flat:""},{default:a(()=>[s(M,null,{default:a(()=>[e("div",z,l(this.assignmentTitle)+": "+l(this.points)+"/"+l(this.goal),1),e("div",E,[e("table",J,[e("tr",null,[e("td",K,[s(W,{"show-value":"","instant-feedback":"",value:this.pctComplete,size:"55px",thickness:.4,color:"secondary","track-color":"grey-3","center-color":"grey-8",class:"q-ma-md"},null,8,["value","thickness"])]),e("td",null,[s(c,{round:"",class:"q-pa-md",icon:"volume_up",color:"secondary",onClick:o[0]||(o[0]=n=>this.speak())})])]),X])]),e("div",Y,[e("table",Z,[e("tr",null,[O,e("td",j,l(this.pageTitle),1)]),e("tr",null,[tt,e("td",et,l(this.courseid),1)]),e("tr",null,[st,e("td",ot,[e("a",{class:"bold_ptr float-left",onClick:o[1]||(o[1]=n=>this.loadURL(this.canonicalUrl))},l(this.pageid),1),s(r,{name:"link",class:"float-right"})])]),e("tr",null,[it,e("td",lt,[u(l(this.lang)+" ",1),s(r,{class:"float-right",name:"translate"})])]),e("tr",null,[at,e("td",{style:{width:"50%"},class:"ptr",onClick:o[2]||(o[2]=(...n)=>this.toggleText&&this.toggleText(...n))},[u(l(this.pgIdx+1)+" / "+l(this.pgTot)+" ",1),s(r,{name:"article",class:"float-right"})])]),e("tr",null,[nt,e("td",{style:{width:"50%"},class:"ptr",onClick:o[3]||(o[3]=(...n)=>this.nextImg&&this.nextImg(...n))},[e("span",rt,l(this.imgIdx+1)+" / "+l(this.imgTot),1),s(r,{name:"image",class:"float-right"})])]),e("tr",{class:"ptr",onClick:o[4]||(o[4]=(...n)=>this.cycleFitMode&&this.cycleFitMode(...n))},[dt,e("td",null,[e("span",pt,l(this.imgFit),1),s(r,{class:"float-right",name:"fit_screen"})])]),e("tr",null,[gt,e("td",ut,[u(l(this.guideWords.replaceAll(",",", "))+" ",1),s(r,{name:"tune",class:"float-right"})])]),e("tr",null,[ht,e("td",null,[u(l(this.pctReplace)+" % ",1),s(r,{name:"tune",class:"float-right"})])]),e("tr",null,[mt,e("td",{onClick:o[5]||(o[5]=(...n)=>this.mapCB&&this.mapCB(...n)),class:"ptr"},[e("span",ct,l(this.mapCoords.slice(0,13)),1),s(r,{class:"float-right",name:"place"})])])])])]),_:1})]),_:1})}var _t=T(H,[["render",ft]]);const vt=y({name:"GuestLayout",components:{AssignmentStatus:_t,DocumentationComponent:G,PreferencesComponent:q},setup(){const t=i(!1),o=i(!1),g=S(),f=g.preferences;return{step:i(1),reStore:g,initialValues:i(f),leftDrawerOpen:t,rightDrawerOpen:o,toggleLeftDrawer(){t.value=!t.value},toggleRightDrawer(){o.value=!o.value}}},mounted(){C.isActive||(C.toggle(),_("primary","#333"),_("secondary",this.reStore.preferences.secondaryColor),_("accent",this.reStore.preferences.accentColor))}}),Ct={class:"dashboard-wrapper"};function xt(t,o,g,f,D,I){const n=p("router-link"),b=p("DocumentationComponent"),V=p("AssignmentStatus"),F=p("PreferencesComponent"),Q=p("router-view");return w(),k(B,{view:"hHh LpR fFf"},{default:a(()=>[s(A,{flat:"",bordered:"",class:"bg-primary text-white","height-hint":"98"},{default:a(()=>[s(R,null,{default:a(()=>[s(c,{dense:"",flat:"",round:"",icon:"menu",onClick:t.toggleLeftDrawer},null,8,["onClick"]),s($,null,{default:a(()=>[s(n,{to:"/"},{default:a(()=>[s(c,{dense:"",flat:"",round:"",icon:"home",color:"white"})]),_:1})]),_:1}),s(c,{dense:"",flat:"",round:"",icon:"menu",onClick:t.toggleRightDrawer},null,8,["onClick"])]),_:1}),s(L,{align:"left",class:"hidden"},{default:a(()=>[s(h,{to:"/logo",label:"Logo"}),s(h,{to:"/teaching",label:"Teaching"}),s(h,{to:"/taking",label:"Taking"}),s(h,{to:"/gradebook",label:"Gradebook"})]),_:1})]),_:1}),s(m,{"show-if-above":"",modelValue:t.leftDrawerOpen,"onUpdate:modelValue":o[0]||(o[0]=d=>t.leftDrawerOpen=d),side:"left",bordered:""},null,8,["modelValue"]),s(m,{"show-if-above":"",modelValue:t.rightDrawerOpen,"onUpdate:modelValue":o[1]||(o[1]=d=>t.rightDrawerOpen=d),side:"right",bordered:""},null,8,["modelValue"]),s(U,{class:"container-fluid"},{default:a(()=>[s(m,{bordered:"","show-if-above":"",modelValue:t.leftDrawerOpen,"onUpdate:modelValue":o[2]||(o[2]=d=>t.leftDrawerOpen=d),side:"left"},{default:a(()=>[s(x,{visible:t.visible,style:{height:"95vh","max-width":"350px"}},{default:a(()=>[s(b)]),_:1},8,["visible"])]),_:1},8,["modelValue"]),s(m,{bordered:"","show-if-above":"",modelValue:t.rightDrawerOpen,"onUpdate:modelValue":o[3]||(o[3]=d=>t.rightDrawerOpen=d),side:"right"},{default:a(()=>[s(x,{visible:t.visible,style:{height:"95vh","max-width":"350px"}},{default:a(()=>[s(V),s(F,{initialValues:this.initialValues},null,8,["initialValues"])]),_:1},8,["visible"])]),_:1},8,["modelValue"]),e("div",Ct,[s(Q)])]),_:1})]),_:1})}var Rt=T(vt,[["render",xt]]);export{Rt as default};
