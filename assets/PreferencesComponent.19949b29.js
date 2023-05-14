import{Q as x,d as U,C as b,c as F}from"./ClosePopup.b28c8b80.js";import{Q as P,a as B}from"./QMenu.52a0ed21.js";import{j as q,_ as D,k as n,m as _,n as l,ae as r,s as t,F as a,af as d,r as f,p as A,q as s,G as m,aa as S,Q as g,H as Q,ac as T,ad as N,P as v,aj as w}from"./index.c01dc44a.js";import{Q as p}from"./QCard.0da0c55d.js";import{Q as $}from"./QToggle.a200658a.js";import{Q as y}from"./QTooltip.f2386087.js";import{u as z,s as V}from"./store.55ab64c2.js";import{Q as L}from"./QImg.5c2396ca.js";import{Q as j,a as E}from"./QSelect.60134800.js";import{Q as K}from"./QExpansionItem.7f7aa66b.js";import{Q as O}from"./QList.a7755b6c.js";const M=q({name:"TileComponent",props:["tileName","tileData","tileType","imgUrl","targetUrl","ck","aid","pgIdx","imgIdx"],setup(){return{store:z()}},methods:{clickCB(o,e,c,C,h,k,i,u){if(console.log("clickCB",o,e,c,C,h,k,i,u),this.store.ck=o,this.store.aid=e,this.store.pgIdx=c,i==="course")console.log("setting aid -1"),this.store.aid=null,this.store.ck=o;else if(i==="assignment"){this.store.pgIdx=null,this.store.aid=e,console.log("aid",e),this.store.router.push("/courses/assignments");return}else if(i==="page"){this.store.pgIdx=c,this.store.router.push("/courses/assignments/pages");return}try{this.store.imgIdx=this.imgIdx,this.store.currentPage.imgIdx=this.imgIdx}catch(I){console.log(I)}h!==null?(console.log("pushing targetUrl",h),this.store.router.push(h)):k!==null&&i==="image"&&(this.store.imgIdx=this.imgIdx)}}}),R={class:"text-h6 absolute-center full-width text-center"},G={key:0},H={key:1},W={key:2},J={key:3},X={key:4},Y={key:5},Z={key:6},ee={class:"hidden"},te=t("tr",null,[t("th",{align:"left"},"prop"),t("th",{align:"center"},[t("b",null,"val")])],-1),se={key:0},oe=t("td",null,"ck",-1),le={key:1},ie=t("td",null,"aid",-1),ne={key:2},ae=t("td",null,"pgIdx",-1),re={key:3},de=t("td",null,"imgIdx",-1),ue={key:4},me=t("td",null,"imgUrl",-1),ge={key:5},pe=t("td",null,"targetUrl",-1);function he(o,e,c,C,h,k){return n(),_(p,{flat:"",bordered:"",class:"q-ma-md q-pa-xs cursor-pointer tile-component",onClick:e[0]||(e[0]=i=>this.clickCB(this.ck,this.aid,this.pgIdx,this.imgIdx,this.targetUrl,this.imgUrl,this.tileType,this.tileName))},{default:l(()=>[this.imgUrl?(n(),_(L,{key:0,class:"absolute-center tile-component",src:this.imgUrl,style:{opacity:"1"}},null,8,["src"])):r("",!0),t("div",R,[this.tileData.pageTitle!==null?(n(),a("div",G,d(this.tileData.pageTitle),1)):r("",!0),this.tileType=="section"?(n(),a("div",H,d(this.tileName),1)):r("",!0),this.tileType=="course"?(n(),a("div",W,[t("div",null,d(this.tileData.title),1),t("div",null,d(Object.keys(this.tileData.assignments).length)+" assignments ",1),t("div",null,d(Object.keys(this.tileData.enrollment).length)+" students",1)])):r("",!0),this.tileType=="assignment"?(n(),a("div",J,[t("div",null,d(this.tileData.title),1),t("div",null,d(this.tileData.pages.length)+" pgs",1)])):r("",!0),this.tileType==="page"?(n(),a("div",X,"Page "+d(this.pgIdx+1),1)):r("",!0),this.store.currentPage&&this.tileType=="page"?(n(),a("div",Y,d(this.store.currentAssignment.pages[this.pgIdx].imgs.length)+" imgs ",1)):r("",!0),this.tileType=="image"?(n(),a("div",Z,"Image "+d(this.imgIdx+1),1)):r("",!0)]),t("table",ee,[te,this.ck?(n(),a("tr",se,[oe,t("td",null,d(this.ck),1)])):r("",!0),this.aid?(n(),a("tr",le,[ie,t("td",null,d(this.aid),1)])):r("",!0),this.pgIdx!==null?(n(),a("tr",ne,[ae,t("td",null,d(this.pgIdx),1)])):r("",!0),this.imgIdx!==null?(n(),a("tr",re,[de,t("td",null,d(this.imgIdx),1)])):r("",!0),this.imgUrl?(n(),a("tr",ue,[me,t("td",null,"..."+d(this.imgUrl.slice(-20)),1)])):r("",!0),this.targetUrl?(n(),a("tr",ge,[pe,t("td",null,"..."+d(this.targetUrl.slice(-20)),1)])):r("",!0)])]),_:1})}var ce=D(M,[["render",he]]);const fe=q({name:"ImagePager",components:{TileComponent:ce},props:[],setup(){return{store:z(),showAddImage:f(!1),newImageUrl:f(null)}},methods:{addImageCB(){const o={url:this.newImageUrl,cap:"Caption"};this.store.courses[this.store.ck].assignments[this.store.aid].pages[this.store.pgIdx].imgs.push(o);const e=this.store.courses[this.store.ck].assignments[this.store.aid].pages[this.store.pgIdx].imgs.length;this.store.courses[this.store.ck].assignments[this.store.aid].pages[this.store.pgIdx].imgIdx=e-1}}}),_e={class:"text-panel q-ma-md text-center text-h6"},ke={key:0},xe={key:0};function ye(o,e,c,C,h,k){const i=A("TileComponent");return n(),a(Q,null,[s(U,{modelValue:o.showAddImage,"onUpdate:modelValue":e[1]||(e[1]=u=>o.showAddImage=u)},{default:l(()=>[t("div",null,[s(p,{class:"q-pa-md outlined q-ma-lg text-white text-center",style:{width:"400px",height:"200px"}},{default:l(()=>[s(x,null,{default:l(()=>[m("Enter image url")]),_:1}),s(P,{modelValue:this.newImageUrl,"onUpdate:modelValue":e[0]||(e[0]=u=>this.newImageUrl=u),type:"input",clearable:"",dense:"",autofocus:"",counter:""},null,8,["modelValue"]),S((n(),_(g,null,{default:l(()=>[m("Close")]),_:1})),[[b]]),S((n(),_(g,{onClick:o.addImageCB},{default:l(()=>[m("Add")]),_:1},8,["onClick"])),[[b]])]),_:1})])]),_:1},8,["modelValue"]),t("div",_e,[m("Images: "),this.store.currentPage?(n(),a("span",ke,d(this.store.currentPage.imgs.length),1)):r("",!0)]),s(B,{class:"hidden"},{default:l(()=>[s($,{label:"Image Fit",modelValue:this.store.imgFit,"onUpdate:modelValue":e[2]||(e[2]=u=>this.store.imgFit=u)},null,8,["modelValue"])]),_:1}),this.store.currentPage?(n(),a("span",xe,[(n(!0),a(Q,null,T(this.store.currentPage.imgs,(u,I)=>(n(),a("span",{key:I},[s(i,{tileData:u,imgUrl:u.url,targetUrl:null,ck:this.store.ck,aid:this.store.aid,pgIdx:this.store.pgIdx,imgIdx:I,tileType:"image"},null,8,["tileData","imgUrl","ck","aid","pgIdx","imgIdx"])]))),128))])):r("",!0),s(p,{flat:"",bordered:"",class:"q-ma-md q-pa-md cursor-pointer tile-component flex flex-center",onClick:e[3]||(e[3]=u=>this.showAddImage=!0)},{default:l(()=>[s(N,{name:"add",class:"text-h1"}),s(y,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[s(p,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[m(" Add new image ")]),_:1})]),_:1})]),_:1})],64)}var Me=D(fe,[["render",ye]]);const Ce=q({name:"PreferencesComponent",setup(){return{store:z(),dark:f(v.isActive),promptFontSize:f(!1),promptLanguage:f(!1),showText:f(!0)}},mounted(){},methods:{goAdmin(){console.log("goAdmin"),this.store.router.push("/admin")},langChangeCB(o){console.log(o);const e=this.flagName;V("#sfi").classed(e,!1),console.log(this.store.langVoices),this.flagName=this.store.langVoices[o].flagName,console.log("langChangeCB",o,this.flagName),V("#sfi").classed(this.flagName,!0)},populateDemo(){console.log("populateDemo"),Object.keys(this.store.currentCourse.assignments).forEach(o=>{console.log(o),Object.keys(this.store.currentCourse.enrollment).forEach(e=>{this.store.currentCourse.assignments[o].scores||(this.store.currentCourse.assignments[o].scores={}),this.store.currentCourse.assignments[o].scores[e]=parseInt(Math.random()*100)})})},toggleDark(){v.toggle(),console.log(v.isActive,this.dark),v.isActive},fontSizeCB(o){V("#sampleFontSwatch").style("font-size",o+"pt"),V("#slideTextDiv").style("font-size",o+"pt"),this.store.userSnapshot.preferences.pageFontSize=o},fsCB(){w.isActive?w.exit().then(()=>{}).catch(o=>{console.log(o)}):w.request().then(()=>{}).catch(o=>{console.log(o)})}}}),Ie=t("div",{class:"text-h6"},"Reconstruct Paragraph Font Size",-1),ve=t("td",{style:{width:"60%"}},[t("div",{id:"sampleFontSwatch"},"Reading Edge!")],-1),Ve=t("div",{class:"text-h6"},"Set Language For WP",-1),$e=t("span",{class:"on-right",id:"sfi"},null,-1),be={width:"100%",class:"z-max"},Se={class:"q-pa-md",style:{"max-width":"350px"}},we={class:"text-center",style:{width:"100%"}},Ue={class:"text-center hidden",style:{width:"100%"}},Qe={class:"text-center",style:{width:"100%"}},qe={class:"text-center q-mb-md",style:{width:"100%"}},De=t("br",null,null,-1);function ze(o,e,c,C,h,k){return n(),a(Q,null,[s(U,{modelValue:o.promptFontSize,"onUpdate:modelValue":e[1]||(e[1]=i=>o.promptFontSize=i),persistent:""},{default:l(()=>[s(p,{style:{"min-width":"350px"}},{default:l(()=>[s(x,{align:"center"},{default:l(()=>[Ie]),_:1}),s(x,{class:"q-pt-none",align:"center"},{default:l(()=>[t("table",null,[t("tr",null,[t("td",null,[s(j,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",modelValue:this.store.userSnapshot.preferences.pageFontSize,"onUpdate:modelValue":e[0]||(e[0]=i=>this.store.userSnapshot.preferences.pageFontSize=i),min:"0",max:"50",onDragValue:this.fontSizeCB},null,8,["thickness","modelValue","onDragValue"])]),ve])])]),_:1}),s(F,{align:"center",class:"text-white"},{default:l(()=>[S(s(g,{outline:"",flat:"",label:"Done"},null,512),[[b]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(U,{modelValue:o.promptLanguage,"onUpdate:modelValue":e[3]||(e[3]=i=>o.promptLanguage=i),persistent:""},{default:l(()=>[s(p,{style:{"min-width":"350px"}},{default:l(()=>[s(x,null,{default:l(()=>[Ve,m(),$e]),_:1}),s(x,{class:"q-pt-none"},{default:l(()=>[t("table",be,[t("tr",null,[t("td",null,[s(E,{class:"z-max",outlined:"",modelValue:this.store.userSnapshot.preferences.langVoiceKey,"onUpdate:modelValue":[e[2]||(e[2]=i=>this.store.userSnapshot.preferences.langVoiceKey=i),this.langChangeCB],options:this.store.userSnapshot.preferences.langVoices},null,8,["modelValue","options","onUpdate:modelValue"])])])])]),_:1}),s(F,{align:"right",class:"text-white"},{default:l(()=>[S(s(g,{outline:"",flat:"",label:"Done"},null,512),[[b]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t("div",Se,[s(O,{bordered:"",class:"rounded-borders",icon:"gear"},{default:l(()=>[s(K,{label:"Preferences"},{default:l(()=>[t("div",we,[s($,{modelValue:o.dark,"onUpdate:modelValue":e[4]||(e[4]=i=>o.dark=i),"keep-color":"",color:"primary","unchecked-icon":"light_mode","checked-icon":"dark_mode",onClick:e[5]||(e[5]=i=>this.toggleDark()),label:"Dark Mode"},null,8,["modelValue"])]),t("div",Ue,[s($,{label:"Auto-Play",modelValue:this.store.autoplay,"onUpdate:modelValue":e[6]||(e[6]=i=>this.store.autoplay=i),"keep-color":"",color:"primary"},null,8,["modelValue"])]),t("div",Qe,[s($,{label:"Image Fit ",modelValue:this.store.imgFit,"onUpdate:modelValue":e[7]||(e[7]=i=>this.store.imgFit=i),"keep-color":"",color:"primary"},null,8,["modelValue"])]),t("div",qe,[s(g,{"no-padding":""},{default:l(()=>[t("span",{id:"sfi",onClick:e[8]||(e[8]=i=>o.promptLanguage=!0)}),s(y,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[s(p,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[m(" Set preferred language ")]),_:1})]),_:1})]),_:1}),s(g,{icon:"fullscreen",onClick:e[9]||(e[9]=i=>this.fsCB())},{default:l(()=>[s(y,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[s(p,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[m(" Fullscreen ")]),_:1})]),_:1})]),_:1}),s(g,{"no-caps":"",icon:"format_size",onClick:e[10]||(e[10]=i=>this.promptFontSize=!0)},{default:l(()=>[s(y,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[s(p,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[m(" Set preferred default font size"),De,m("Can be overridden per-page, also ")]),_:1})]),_:1})]),_:1}),this.store.emailKey==="charlie_at_readingedge_dot_org"?(n(),_(g,{key:0,icon:"manage_accounts",onClick:e[11]||(e[11]=i=>this.populateDemo())})):r("",!0),this.store.emailKey==="charlie_at_readingedge_dot_org"?(n(),_(g,{key:1,icon:"settings",onClick:e[12]||(e[12]=i=>this.goAdmin())})):r("",!0),s(g,{icon:"save",onClick:e[13]||(e[13]=i=>this.store.updateSnapshot("save-preferences",null))},{default:l(()=>[s(y,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[s(p,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[m(" Save preferences ")]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})])],64)}var Re=D(Ce,[["render",ze]]);export{Me as I,Re as P,ce as T};
