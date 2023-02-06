import{d as f,r as l,D as Q,_ as v,o as C,c as y,w as a,a as s,e as t,ad as i,Q as g,x,P as c,s as I,f as r}from"./index.be27dd10.js";import{Q as P,a as $,b as R,c as u,d as A,e as h,f as _,g as F,h as L}from"./QLayout.1268c062.js";import{u as w}from"./re-store.1013e472.js";import{Q as B,D as W,P as G}from"./DocumentationComponent.2b30737d.js";import{Q as q,a as U}from"./ClosePopup.84441126.js";import"./use-dark.242070d9.js";import"./selection.bf73dd62.js";import"./firebase.ea708b63.js";import"./use-key-composition.080affd2.js";import"./use-portal.761c8595.js";import"./position-engine.f4fa9e10.js";import"./QCheckbox.626e7c5c.js";const H=f({name:"AssignmentStatus",props:{},setup(e){return{reStore:w(),assignmentTitle:l("---"),pageTitle:l("---"),lang:l("---"),pctComplete:l(0),points:l(0),goal:l(100),pgIdx:l(0),pgTot:l(0),imgIdx:l(0),imgTot:l(0),imgFit:l("---"),guideWords:l("---"),mapCoords:l("36.11,-115.17"),pageid:l("---"),courseid:l("---"),pctReplace:l("---"),props:e}},mounted(){console.log(this.props),Q(this.reStore.assignmentStatus,async(e,o)=>{console.log("watcher ",e,o),this.pctComplete=parseInt(parseFloat(e.points)/parseFloat(e.goal)*100),this.assignmentTitle=e.assignmentTitle,this.pageTitle=e.pageTitle,this.points=e.points,this.goal=e.goal,this.pgIdx=e.pgIdx,this.pgTot=e.pgTot,this.imgIdx=e.imgIdx,this.imgTot=e.imgTot,this.imgFit=e.imgFit,this.guideWords=e.guideWords,this.mapCoords=e.mapCoords,this.pageid=e.pageid,this.courseid=e.courseid,this.lang=e.lang,this.pctReplace=e.pctReplace})},methods:{speak(){console.log("AssignmentStatus.speak",this.reStore),this.reStore.speak()},mapCB(){const e="https://maps.google.com/?ll="+this.mapCoords.split(",")[0]+","+this.mapCoords.split(",")[1];window.open(e,"_blank")}}}),N={class:"text-weight-bolder text-center q-pa-md"},z={style:{border:"1px solid gray","border-radius":"5px"}},E={width:"100%"},M={style:{width:"50%"}},J=t("tr",null,[t("td",null,"% Complete"),t("td",null,"Speak Text")],-1),K={style:{border:"1px solid gray","border-radius":"5px"},class:"q-my-md"},X={width:"100%"},Y=t("td",null,"Page Title",-1),Z={style:{width:"50%"}},O=t("td",null,"Course Id",-1),j={style:{width:"50%"}},tt=t("td",null,"WP Page Id",-1),et={style:{width:"50%"}},st=t("td",null,"Language",-1),ot={style:{width:"50%"}},lt=t("td",null,"Current Page",-1),it={style:{width:"50%"}},at=t("td",null,"Current Image",-1),nt={style:{width:"50%"}},rt=t("td",null,"Image Fit",-1),dt=t("td",null,"Guide Words",-1),pt={style:{width:"50%"}},ut=t("td",null,"Percent Replace",-1),ht=t("td",null,"Map Coords",-1),gt={class:"float-left"};function mt(e,o,d,m,T,k){return C(),y(U,{flat:""},{default:a(()=>[s(q,null,{default:a(()=>[t("div",N,i(this.assignmentTitle)+": "+i(this.points)+"/"+i(this.goal),1),t("div",z,[t("table",E,[t("tr",null,[t("td",M,[s(B,{"show-value":"","instant-feedback":"",value:this.pctComplete,size:"55px",thickness:.4,color:"secondary","track-color":"grey-3","center-color":"grey-8",class:"q-ma-md"},null,8,["value","thickness"])]),t("td",null,[s(g,{round:"",class:"q-pa-md",icon:"volume_up",color:"secondary",onClick:o[0]||(o[0]=p=>this.speak())})])]),J])]),t("div",K,[t("table",X,[t("tr",null,[Y,t("td",Z,i(this.pageTitle),1)]),t("tr",null,[O,t("td",j,i(this.courseid),1)]),t("tr",null,[tt,t("td",et,i(this.pageid),1)]),t("tr",null,[st,t("td",ot,i(this.lang),1)]),t("tr",null,[lt,t("td",it,i(this.pgIdx+1)+" / "+i(this.pgTot),1)]),t("tr",null,[at,t("td",nt,i(this.imgIdx+1)+" / "+i(this.imgTot),1)]),t("tr",null,[rt,t("td",null,i(this.imgFit),1)]),t("tr",null,[dt,t("td",pt,i(this.guideWords.replaceAll(",",", ")),1)]),t("tr",null,[ut,t("td",null,i(this.pctReplace)+" %",1)]),t("tr",null,[ht,t("td",{onClick:o[1]||(o[1]=(...p)=>this.mapCB&&this.mapCB(...p)),class:"ptr"},[t("span",gt,i(this.mapCoords.slice(0,13)),1),s(x,{class:"float-right",name:"place"})])])])])]),_:1})]),_:1})}var ct=v(H,[["render",mt]]);const _t=f({name:"GuestLayout",components:{AssignmentStatus:ct,DocumentationComponent:W,PreferencesComponent:G},setup(){const e=l(!1),o=l(!1),d=w(),m=d.preferences;return{step:l(1),reStore:d,initialValues:l(m),leftDrawerOpen:e,rightDrawerOpen:o,toggleLeftDrawer(){e.value=!e.value},toggleRightDrawer(){o.value=!o.value}}},mounted(){c.isActive||(c.toggle(),I("primary","#333"))}}),ft={class:"dashboard-wrapper"};function vt(e,o,d,m,T,k){const p=r("router-link"),D=r("DocumentationComponent"),b=r("AssignmentStatus"),V=r("PreferencesComponent"),S=r("router-view");return C(),y(L,{view:"hHh lpR fFf"},{default:a(()=>[s(A,{flat:"",bordered:"",class:"bg-primary text-white","height-hint":"98"},{default:a(()=>[s(P,null,{default:a(()=>[s(g,{dense:"",flat:"",round:"",icon:"menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),s($,null,{default:a(()=>[s(p,{to:"/"},{default:a(()=>[s(g,{dense:"",flat:"",round:"",icon:"home",color:"white"})]),_:1})]),_:1}),s(g,{dense:"",flat:"",round:"",icon:"menu",onClick:e.toggleRightDrawer},null,8,["onClick"])]),_:1}),s(R,{align:"left",class:"hidden"},{default:a(()=>[s(u,{to:"/logo",label:"Logo"}),s(u,{to:"/teaching",label:"Teaching"}),s(u,{to:"/taking",label:"Taking"}),s(u,{to:"/gradebook",label:"Gradebook"})]),_:1})]),_:1}),s(h,{"show-if-above":"",modelValue:e.leftDrawerOpen,"onUpdate:modelValue":o[0]||(o[0]=n=>e.leftDrawerOpen=n),side:"left",bordered:""},null,8,["modelValue"]),s(h,{"show-if-above":"",modelValue:e.rightDrawerOpen,"onUpdate:modelValue":o[1]||(o[1]=n=>e.rightDrawerOpen=n),side:"right",bordered:""},null,8,["modelValue"]),s(F,{class:"container-fluid"},{default:a(()=>[s(h,{bordered:"","show-if-above":"",modelValue:e.leftDrawerOpen,"onUpdate:modelValue":o[2]||(o[2]=n=>e.leftDrawerOpen=n),side:"left"},{default:a(()=>[s(_,{visible:e.visible,style:{height:"95vh","max-width":"350px"}},{default:a(()=>[s(D)]),_:1},8,["visible"])]),_:1},8,["modelValue"]),s(h,{bordered:"","show-if-above":"",modelValue:e.rightDrawerOpen,"onUpdate:modelValue":o[3]||(o[3]=n=>e.rightDrawerOpen=n),side:"right"},{default:a(()=>[s(_,{visible:e.visible,style:{height:"95vh","max-width":"350px"}},{default:a(()=>[s(b),s(V,{initialValues:this.initialValues},null,8,["initialValues"])]),_:1},8,["visible"])]),_:1},8,["modelValue"]),t("div",ft,[s(S)])]),_:1})]),_:1})}var Pt=v(_t,[["render",vt]]);export{Pt as default};