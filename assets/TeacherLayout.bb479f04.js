import{g as Ee,h as y,i as m,j as yt,z as pt,d as te,r as v,D as Q,_ as ae,o as b,au as O,a as n,w as d,p as $e,Q as $,e as s,af as N,ag as C,aK as At,c as I,x as D,av as K,aL as fe,aJ as ve,al as Nt,am as he,G as ut,P as dt,s as Le,f as P}from"./index.c84103d7.js";import{Q as Ne}from"./QTooltip.7503fa9a.js";import{Q as We,a as Et,b as Wt,c as De,d as jt,e as ct,f as mt,g as Jt,h as Kt}from"./QLayout.6f011429.js";import{u as oe,s as Gt,a as ht,p as ee,t as Xt,c as vt,f as Zt,g as ea,j as ze,_ as ta,d as ft}from"./re-store.a2b4fc96.js";import{a as B,Q as U,i as _t,C as Ve,h as Ct,u as aa,b as oa,c as la}from"./ClosePopup.29d157a7.js";import{a as na,u as sa,b as ra,D as ia,P as ua}from"./DocumentationComponent.2d55fb1a.js";import{Q as da}from"./QInput.a37399de.js";import{Q as ge}from"./QExpansionItem.e6a04dd6.js";import{d as kt,f as St}from"./use-dark.62b050fa.js";import{Q as je}from"./QImg.bd7a1723.js";import"./position-engine.6c141e5c.js";import"./selection.2249d72b.js";import"./use-portal.3b4ec98a.js";import"./firebase.ea708b63.js";import"./use-key-composition.1fe55d27.js";import"./QSlideTransition.2fd61234.js";import"./QCheckbox.f254aca4.js";var ye=Ee({name:"QList",props:{...kt,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(t,{slots:o}){const k=pt(),x=St(t,k.proxy.$q),V=y(()=>"q-list"+(t.bordered===!0?" q-list--bordered":"")+(t.dense===!0?" q-list--dense":"")+(t.separator===!0?" q-list--separator":"")+(x.value===!0?" q-list--dark":"")+(t.padding===!0?" q-list--padding":""));return()=>m(t.tag,{class:V.value},yt(o.default))}});const ca=te({name:"SearchComponent",setup(){const t=oe(),o=v("");return{reStore:t,searchTerms:o,searchSize:v(t.preferences.resLimit),searchResults:v([]),promptSearchSize:v(!1)}},mounted(){Q(this.reStore.preferences,async(t,o)=>{console.log("watcher ",t,o),this.searchSize=t.resLimit})},methods:{updateSearchSize(){},update(){this.searchTerms=this.searchTerms},remove(t){this.searchResults.splice(t,1)},load(t){console.log(t),console.log(this.searchResults[t]);const o=this.reStore.langVoices[this.reStore.preferences.langVoice];console.log("calling loadPageId ",this.searchResults[t].pageid,o),this.reStore.loadPageId(this.searchResults[t].pageid,o)},async doSearch(){const t=this.reStore.langVoices[this.reStore.preferences.langVoice];this.reStore.wiki.setLang(t.langName);const o=await this.reStore.wiki.search(this.searchTerms,{suggestion:!1,limit:this.searchSize});console.log("res.results.length: ",o.results.length),this.searchResults=o.results},clearSearchResults(){for(;this.searchResults.length;)this.searchResults.pop()}}}),ma=s("div",{class:"text-h6"},"Search Results Size",-1),ha={class:"q-gutter-y-sm column"},va={key:0},fa={class:"row cardheader ptr justify-between"},ga=["onClick"],ya={class:"history-remove"};function pa(t,o,k,x,V,Y){return b(),O(K,null,[n(Ct,{modelValue:t.promptSearchSize,"onUpdate:modelValue":o[2]||(o[2]=i=>t.promptSearchSize=i),persistent:""},{default:d(()=>[n(B,{style:{"min-width":"350px"}},{default:d(()=>[n(U,{align:"center"},{default:d(()=>[ma]),_:1}),n(U,{class:"q-pt-none",align:"center"},{default:d(()=>[n(na,{"show-value":"",size:"140px",thickness:.5,color:"green","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",modelValue:t.searchSize,"onUpdate:modelValue":o[0]||(o[0]=i=>t.searchSize=i)},null,8,["modelValue"])]),_:1}),n(_t,{align:"center",class:"text-primary"},{default:d(()=>[$e(n($,{flat:"",label:"Cancel"},null,512),[[Ve]]),$e(n($,{flat:"",label:"Update results size",onClick:o[1]||(o[1]=i=>this.updateSearchSize())},null,512),[[Ve]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),n(B,{flat:""},{default:d(()=>[n(U,null,{default:d(()=>[n(ye,{padding:"",class:"rounded-borders"},{default:d(()=>[n(ge,{"header-style":{border:"1px solid gray"},label:"Search & Results"},{default:d(()=>[s("div",ha,[n(We,{class:"bg-primary text-white rounded-borders q-my-md"},{default:d(()=>[n($,{dark:"",standout:"",onClick:o[3]||(o[3]=i=>t.promptSearchSize=!0)},{default:d(()=>[N(C(this.searchResults.length)+" ",1),n(Ne,null,{default:d(()=>[N("Change results limit ("+C(this.searchSize)+")",1)]),_:1})]),_:1}),n(da,{dark:"",dense:"",standout:"",modelValue:t.searchTerms,"onUpdate:modelValue":o[6]||(o[6]=i=>t.searchTerms=i),"input-class":"text-right",class:"q-ml-md",onKeyup:[o[7]||(o[7]=i=>this.update()),o[8]||(o[8]=At(i=>this.doSearch(),["enter"]))]},{append:d(()=>[t.searchTerms===""?(b(),I(D,{key:0,name:"search",onClick:o[4]||(o[4]=i=>this.doSearch())})):(b(),I(D,{key:1,name:"clear",class:"cursor-pointer",onClick:o[5]||(o[5]=i=>{this.searchTerms="",this.clearSearchResults()})}))]),_:1},8,["modelValue"])]),_:1})]),this.searchResults.length?(b(),O("div",va,[(b(!0),O(K,null,fe(this.searchResults,(i,f)=>(b(),I(B,{class:"q-ma-sm",flat:"",bordered:"",modelValue:this.searchResults,"onUpdate:modelValue":o[9]||(o[9]=_=>this.searchResults=_),key:f},{default:d(()=>[s("div",fa,[s("span",{class:"history-title col-grow",onClick:_=>this.load(f)},C(f)+". "+C(i.title.slice(0,25)),9,ga),s("span",ya,[n(D,{class:"primary",size:t.xl,color:t.primary,name:"close",onClick:_=>this.remove(f)},null,8,["size","color","onClick"])])])]),_:2},1032,["modelValue"]))),128))])):ve("",!0)]),_:1})]),_:1})]),_:1})]),_:1})],64)}var _a=ae(ca,[["render",pa]]);const Ca=te({name:"CurrentPage",props:{},setup(t){const o=oe();return{reStore:o,courseid:v("-"),pageTitle:v(o.page.pageTitle),lang:v(o.page.langVoice),imgIdx:v(0),imgs:v([]),imgTot:v(0),imgFit:v("-"),guideWords:v("-"),mapCoords:v("-"),pageid:v("-"),pctReplace:v(o.page.pctReplace),canonicalUrl:v(o.page.canonicalUrl),props:t}},mounted(){console.log(this.props),Q(this.reStore.page,async(t,o)=>{console.log("CurrentPage watcher ",t,o),this.pageTitle=t.pageTitle,this.imgIdx=t.imgIdx,this.imgs=t.imgs,this.imgTot=t.imgs.length,this.imgFit=t.imgFit,this.guideWords=t.guideWords,this.mapCoords=t.mapCoords,this.pageid=t.pageid,this.lang=t.langVoice.longName,this.pctReplace=t.pctReplace,this.canonicalUrl=t.canonicalUrl})},methods:{speak(){console.log("CurrentPage.speak",this.reStore),this.reStore.speak()},cycleFitMode(){const t=["scale-down","cover"];let o=t.indexOf(this.imgFit);o+=1,o>t.length-1&&(o=0),this.imgFit=t[o],this.reStore.page.imgFit=this.imgFit,console.log("fit: ",this.imgFit)},nextImg(){this.imgIdx=this.imgIdx+1>this.imgs.length-1?0:this.imgIdx+1,this.reStore.page.imgIdx=this.imgIdx},imgCB(t,o){console.log(t,o),this.reStore.page.imgIdx=t},loadURL(t){console.log("loadURL ",t),window.open(t,"_blank")},mapCB(){const t="https://maps.google.com/?ll="+this.mapCoords.split(",")[0]+","+this.mapCoords.split(",")[1];window.open(t,"_blank")},saveImage(t,o){console.log("saveImage: ",t,o),this.reStore.saveImage(o)},saveCurrentImage(){const t=this.imgs[this.imgIdx];console.log("saveCurrentImage: ",t),this.reStore.saveImage(t)},remove(t,o){console.log("remove: ",t,o),this.imgs.splice(t,1),this.reStore.page.imgs.splice(t,1)},toggleText(){Gt("#slideTextDiv").classed("hidden")?ht("#slideTextDiv").classed("hidden",!1):ht("#slideTextDiv").classed("hidden",!0)},addBookmark(){console.log("addBookmark"),this.reStore.saveBookmark()}}}),ka={class:"text-weight-bolder text-center q-pa-md"},Sa={style:{border:"1px solid gray","border-radius":"5px"}},ba={width:"100%"},wa=s("td",{style:{width:"50%"}},null,-1),Da=s("tr",null,[s("td"),s("td",null,"Speak Text")],-1),$a={style:{border:"1px solid gray","border-radius":"5px"},class:"q-my-md"},Va={width:"100%"},xa=s("td",null,"WP Page Id",-1),qa={style:{width:"50%"}},Ta=s("td",null,"Language",-1),Ma={style:{width:"50%"}},Ia={class:"float-left"},Ba=s("td",null,"Current Image",-1),Ra={class:"float-left"},Ha={class:"float-right"},Fa=s("td",null,"Image Fit",-1),Qa={class:"align-left"},Ya=s("td",null,"Guide Words",-1),Pa={style:{width:"50%"}},Oa=s("td",null,"Percent Replace",-1),Ua={class:"float-left"},La=s("td",null,"Map Coords",-1),za={class:"float-left"},Aa=s("td",null,"Toggle Text",-1),Na={key:0},Ea={class:"row cardheader justify-between"},Wa={class:"history-remove"},ja={class:"history-remove ptr"};function Ja(t,o,k,x,V,Y){return b(),O(K,null,[n(B,{flat:""},{default:d(()=>[n(U,null,{default:d(()=>[s("div",ka,C(this.pageTitle),1),s("div",Sa,[s("table",ba,[s("tr",null,[wa,s("td",null,[n($,{round:"",class:"q-pa-md",icon:"volume_up",color:"secondary",onClick:o[0]||(o[0]=i=>this.speak())})])]),Da])]),s("div",$a,[s("table",Va,[s("tr",null,[xa,s("td",qa,[s("a",{class:"ptr float-left",onClick:o[1]||(o[1]=i=>this.loadURL(this.canonicalUrl))},C(this.pageid),1),n(D,{name:"bookmark",onClick:this.addBookmark,class:"float-right"},null,8,["onClick"])])]),s("tr",null,[Ta,s("td",Ma,[s("span",Ia,C(this.lang),1),n(D,{class:"float-right",name:"translate"})])]),s("tr",null,[Ba,s("td",{style:{width:"50%"},onClick:o[2]||(o[2]=(...i)=>this.nextImg&&this.nextImg(...i)),class:"ptr"},[s("span",Ra,C(this.imgIdx)+" / "+C(this.imgTot),1),s("span",Ha,[n(D,{name:"bookmark",onClick:this.saveCurrentImage},null,8,["onClick"])])])]),s("tr",{class:"ptr",onClick:o[3]||(o[3]=(...i)=>this.cycleFitMode&&this.cycleFitMode(...i))},[Fa,s("td",null,[s("span",Qa,C(this.imgFit),1),n(D,{class:"float-right",name:"fit_screen"})])]),s("tr",null,[Ya,s("td",Pa,[N(C(this.guideWords.replaceAll(",",", "))+" ",1),n(D,{class:"float-right",name:"tune"})])]),s("tr",null,[Oa,s("td",null,[s("span",Ua,C(this.pctReplace)+" %",1),n(D,{class:"float-right",name:"tune"})])]),s("tr",null,[La,s("td",{onClick:o[4]||(o[4]=(...i)=>this.mapCB&&this.mapCB(...i)),class:"ptr"},[s("span",za,C(this.mapCoords),1),n(D,{class:"float-right",name:"place"})])]),s("tr",null,[Aa,s("td",{onClick:o[5]||(o[5]=(...i)=>this.toggleText&&this.toggleText(...i)),class:"ptr"},[n(D,{class:"float-right",name:"article"})])])])])]),_:1})]),_:1}),n(B,{flat:""},{default:d(()=>[n(U,null,{default:d(()=>[n(ye,{padding:"",class:"rounded-borders"},{default:d(()=>[n(ge,{"header-style":{border:"1px solid gray"},label:"Page Images"},{default:d(()=>[this.imgs.length?(b(),O("div",Na,[(b(!0),O(K,null,fe(this.imgs,(i,f)=>(b(),I(B,{bordered:"",class:"q-ma-sm",flat:"",modelValue:this.imgs,"onUpdate:modelValue":o[6]||(o[6]=_=>this.imgs=_),key:f},{default:d(()=>[s("div",Ea,[s("span",Wa,[n(D,{name:"bookmark",onClick:_=>this.saveImage(f,i)},null,8,["onClick"]),n(D,{name:"article",onClick:this.toggleText},null,8,["onClick"]),n(D,{name:"fit_screen",onClick:this.cycleFitMode},null,8,["onClick"])]),s("span",null,C(i.cap.slice(0,25)),1),s("span",ja,[n(D,{name:"close",onClick:_=>this.remove(f,i)},null,8,["onClick"])])]),n(je,{class:"cardimage",onClick:_=>this.imgCB(f,i),src:i.url},null,8,["onClick","src"])]),_:2},1032,["modelValue"]))),128))])):ve("",!0)]),_:1})]),_:1})]),_:1})]),_:1})],64)}var Ka=ae(Ca,[["render",Ja]]);const Ga=te({name:"ImagesComponent",setup(){return{reStore:oe()}},mounted(){Q(this.reStore.userSnapshot.images,async(t,o)=>{console.log("watcher ",t,o)})},methods:{imgCB(t,o){this.reStore.router.push("/teacher/editor"),console.log(t,o);const k={url:o.url,cap:o.desc};this.reStore.page.imgs.push(k),this.reStore.page.imgIdx=this.reStore.page.imgs.length-1},remove(t,o){console.log(t,o),this.reStore.removeImage(t)}}}),Xa={class:"row cardheader justify-between"},Za={class:"history-remove hidden"},eo={class:"history-remove ptr"};function to(t,o,k,x,V,Y){return b(),I(B,{flat:""},{default:d(()=>[n(U,null,{default:d(()=>[n(ye,{padding:"",class:"rounded-borders"},{default:d(()=>[this.reStore.userSnapshot.images?(b(),I(ge,{key:0,"header-style":{border:"1px solid gray"},label:"My Images"},{default:d(()=>[s("div",null,[(b(!0),O(K,null,fe(this.reStore.userSnapshot.images,(i,f)=>(b(),I(B,{bordered:"",class:"q-ma-md",flat:"",modelValue:this.reStore.userSnapshot.images,"onUpdate:modelValue":o[0]||(o[0]=_=>this.reStore.userSnapshot.images=_),key:f},{default:d(()=>[s("div",Xa,[s("span",Za,[n(D)]),N(" "+C(i.desc.slice(0,25))+" ",1),s("span",eo,[n(D,{name:"close",onClick:_=>this.remove(f,i)},null,8,["onClick"])])]),n(je,{class:"cardimage",onClick:_=>this.imgCB(f,i),src:i.url},null,8,["onClick","src"])]),_:2},1032,["modelValue"]))),128))])]),_:1})):ve("",!0)]),_:1})]),_:1})]),_:1})}var ao=ae(Ga,[["render",to]]);const oo=te({name:"BookmarksComponent",setup(){return{reStore:oe()}},mounted(){Q(this.reStore.userSnapshot.bookmarks,async(t,o)=>{console.log("watcher ",t,o)})},methods:{imgCB(t,o){this.reStore.page.imgs=JSON.parse(JSON.stringify(o.imgs)),this.reStore.router.push("/teacher/editor")},remove(t,o){console.log(t,o),this.reStore.removeBookmark(t)}}}),lo={class:"row cardheader justify-between"},no={class:"history-remove hidden"},so={class:"history-remove ptr"};function ro(t,o,k,x,V,Y){return b(),I(B,{flat:""},{default:d(()=>[n(U,null,{default:d(()=>[n(ye,{padding:"",class:"rounded-borders"},{default:d(()=>[n(ge,{"header-style":{border:"1px solid gray"},label:"My bookmarks"},{default:d(()=>[s("div",null,[(b(!0),O(K,null,fe(this.reStore.userSnapshot.bookmarks,(i,f)=>(b(),I(B,{class:"q-ma-md",flat:"",bordered:"",modelValue:this.reStore.userSnapshot.bookmarks,"onUpdate:modelValue":o[0]||(o[0]=_=>this.reStore.userSnapshot.bookmarks=_),key:f},{default:d(()=>[s("div",lo,[s("span",no,[n(D)]),N(" "+C(i.pageTitle.slice(0,25))+" ",1),s("span",so,[n(D,{name:"close",onClick:_=>this.remove(f,i)},null,8,["onClick"])])]),n(je,{class:"cardimage",onClick:_=>this.imgCB(f,i),src:i.imgs[0].url},null,8,["onClick","src"])]),_:2},1032,["modelValue"]))),128))])]),_:1})]),_:1})]),_:1})]),_:1})}var io=ae(oo,[["render",ro]]);const uo=["gregorian","persian"],co={modelValue:{required:!0},mask:{type:String},locale:Object,calendar:{type:String,validator:t=>uo.includes(t),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},mo=["update:modelValue"];function j(t){return t.year+"/"+ee(t.month)+"/"+ee(t.day)}function ho(t,o){const k=y(()=>t.disable!==!0&&t.readonly!==!0),x=y(()=>t.editable===!0?0:-1),V=y(()=>{const f=[];return t.color!==void 0&&f.push(`bg-${t.color}`),t.textColor!==void 0&&f.push(`text-${t.textColor}`),f.join(" ")});function Y(){return t.locale!==void 0?{...o.lang.date,...t.locale}:o.lang.date}function i(f){const _=new Date,L=f===!0?null:0;if(t.calendar==="persian"){const E=Xt(_);return{year:E.jy,month:E.jm,day:E.jd}}return{year:_.getFullYear(),month:_.getMonth()+1,day:_.getDate(),hour:L,minute:L,second:L,millisecond:L}}return{editable:k,tabindex:x,headerClass:V,getLocale:Y,getCurrentDate:i}}const Z=20,vo=["Calendar","Years","Months"],gt=t=>vo.includes(t),Ae=t=>/^-?[\d]+\/[0-1]\d$/.test(t),ue=" \u2014 ";function J(t){return t.year+"/"+ee(t.month)}var fo=Ee({name:"QDate",props:{...co,...aa,...kt,multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:Ae},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:Ae},navigationMaxYearMonth:{type:String,validator:Ae},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:gt}},emits:[...mo,"rangeStart","rangeEnd","navigation"],setup(t,{slots:o,emit:k}){const{proxy:x}=pt(),{$q:V}=x,Y=St(t,V),{getCache:i}=sa(),{tabindex:f,headerClass:_,getLocale:L,getCurrentDate:E}=ho(t,V);let le;const xe=oa(t),qe=la(xe),de=v(null),z=v(at()),S=v(L()),bt=y(()=>at()),wt=y(()=>L()),A=y(()=>E()),h=v(ot(z.value,S.value)),R=v(t.defaultView),Je=V.lang.rtl===!0?"right":"left",pe=v(Je.value),Te=v(Je.value),Me=h.value.year,_e=v(Me-Me%Z-(Me<0?Z:0)),q=v(null),Dt=y(()=>{const e=t.landscape===!0?"landscape":"portrait";return`q-date q-date--${e} q-date--${e}-${t.minimal===!0?"minimal":"standard"}`+(Y.value===!0?" q-date--dark q-dark":"")+(t.bordered===!0?" q-date--bordered":"")+(t.square===!0?" q-date--square no-border-radius":"")+(t.flat===!0?" q-date--flat no-shadow":"")+(t.disable===!0?" disabled":t.readonly===!0?" q-date--readonly":"")}),G=y(()=>t.color||"primary"),ne=y(()=>t.textColor||"white"),Ce=y(()=>t.emitImmediately===!0&&t.multiple!==!0&&t.range!==!0),Ie=y(()=>Array.isArray(t.modelValue)===!0?t.modelValue:t.modelValue!==null&&t.modelValue!==void 0?[t.modelValue]:[]),F=y(()=>Ie.value.filter(e=>typeof e=="string").map(e=>Fe(e,z.value,S.value)).filter(e=>e.dateHash!==null&&e.day!==null&&e.month!==null&&e.year!==null)),se=y(()=>{const e=a=>Fe(a,z.value,S.value);return Ie.value.filter(a=>Nt(a)===!0&&a.from!==void 0&&a.to!==void 0).map(a=>({from:e(a.from),to:e(a.to)})).filter(a=>a.from.dateHash!==null&&a.to.dateHash!==null&&a.from.dateHash<a.to.dateHash)}),ke=y(()=>t.calendar!=="persian"?e=>new Date(e.year,e.month-1,e.day):e=>{const a=vt(e.year,e.month,e.day);return new Date(a.gy,a.gm-1,a.gd)}),Be=y(()=>t.calendar==="persian"?j:(e,a,l)=>Zt(new Date(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond),a===void 0?z.value:a,l===void 0?S.value:l,e.year,e.timezoneOffset)),ce=y(()=>F.value.length+se.value.reduce((e,a)=>e+1+ea(ke.value(a.to),ke.value(a.from)),0)),Ke=y(()=>{if(t.title!==void 0&&t.title!==null&&t.title.length>0)return t.title;if(q.value!==null){const l=q.value.init,u=ke.value(l);return S.value.daysShort[u.getDay()]+", "+S.value.monthsShort[l.month-1]+" "+l.day+ue+"?"}if(ce.value===0)return ue;if(ce.value>1)return`${ce.value} ${S.value.pluralDay}`;const e=F.value[0],a=ke.value(e);return isNaN(a.valueOf())===!0?ue:S.value.headerTitle!==void 0?S.value.headerTitle(a,e):S.value.daysShort[a.getDay()]+", "+S.value.monthsShort[e.month-1]+" "+e.day}),$t=y(()=>F.value.concat(se.value.map(a=>a.from)).sort((a,l)=>a.year-l.year||a.month-l.month)[0]),Vt=y(()=>F.value.concat(se.value.map(a=>a.to)).sort((a,l)=>l.year-a.year||l.month-a.month)[0]),Ge=y(()=>{if(t.subtitle!==void 0&&t.subtitle!==null&&t.subtitle.length>0)return t.subtitle;if(ce.value===0)return ue;if(ce.value>1){const e=$t.value,a=Vt.value,l=S.value.monthsShort;return l[e.month-1]+(e.year!==a.year?" "+e.year+ue+l[a.month-1]+" ":e.month!==a.month?ue+l[a.month-1]:"")+" "+a.year}return F.value[0].year}),Se=y(()=>{const e=[V.iconSet.datetime.arrowLeft,V.iconSet.datetime.arrowRight];return V.lang.rtl===!0?e.reverse():e}),Xe=y(()=>t.firstDayOfWeek!==void 0?Number(t.firstDayOfWeek):S.value.firstDayOfWeek),xt=y(()=>{const e=S.value.daysShort,a=Xe.value;return a>0?e.slice(a,7).concat(e.slice(0,a)):e}),W=y(()=>{const e=h.value;return t.calendar!=="persian"?new Date(e.year,e.month,0).getDate():ze(e.year,e.month)}),qt=y(()=>typeof t.eventColor=="function"?t.eventColor:()=>t.eventColor),T=y(()=>{if(t.navigationMinYearMonth===void 0)return null;const e=t.navigationMinYearMonth.split("/");return{year:parseInt(e[0],10),month:parseInt(e[1],10)}}),M=y(()=>{if(t.navigationMaxYearMonth===void 0)return null;const e=t.navigationMaxYearMonth.split("/");return{year:parseInt(e[0],10),month:parseInt(e[1],10)}}),Re=y(()=>{const e={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return T.value!==null&&T.value.year>=h.value.year&&(e.year.prev=!1,T.value.year===h.value.year&&T.value.month>=h.value.month&&(e.month.prev=!1)),M.value!==null&&M.value.year<=h.value.year&&(e.year.next=!1,M.value.year===h.value.year&&M.value.month<=h.value.month&&(e.month.next=!1)),e}),be=y(()=>{const e={};return F.value.forEach(a=>{const l=J(a);e[l]===void 0&&(e[l]=[]),e[l].push(a.day)}),e}),Ze=y(()=>{const e={};return se.value.forEach(a=>{const l=J(a.from),u=J(a.to);if(e[l]===void 0&&(e[l]=[]),e[l].push({from:a.from.day,to:l===u?a.to.day:void 0,range:a}),l<u){let r;const{year:p,month:c}=a.from,g=c<12?{year:p,month:c+1}:{year:p+1,month:1};for(;(r=J(g))<=u;)e[r]===void 0&&(e[r]=[]),e[r].push({from:void 0,to:r===u?a.to.day:void 0,range:a}),g.month++,g.month>12&&(g.year++,g.month=1)}}),e}),me=y(()=>{if(q.value===null)return;const{init:e,initHash:a,final:l,finalHash:u}=q.value,[r,p]=a<=u?[e,l]:[l,e],c=J(r),g=J(p);if(c!==H.value&&g!==H.value)return;const w={};return c===H.value?(w.from=r.day,w.includeFrom=!0):w.from=1,g===H.value?(w.to=p.day,w.includeTo=!0):w.to=W.value,w}),H=y(()=>J(h.value)),Tt=y(()=>{const e={};if(t.options===void 0){for(let l=1;l<=W.value;l++)e[l]=!0;return e}const a=typeof t.options=="function"?t.options:l=>t.options.includes(l);for(let l=1;l<=W.value;l++){const u=H.value+"/"+ee(l);e[l]=a(u)}return e}),Mt=y(()=>{const e={};if(t.events===void 0)for(let a=1;a<=W.value;a++)e[a]=!1;else{const a=typeof t.events=="function"?t.events:l=>t.events.includes(l);for(let l=1;l<=W.value;l++){const u=H.value+"/"+ee(l);e[l]=a(u)===!0&&qt.value(u)}}return e}),It=y(()=>{let e,a;const{year:l,month:u}=h.value;if(t.calendar!=="persian")e=new Date(l,u-1,1),a=new Date(l,u-1,0).getDate();else{const r=vt(l,u,1);e=new Date(r.gy,r.gm-1,r.gd);let p=u-1,c=l;p===0&&(p=12,c--),a=ze(c,p)}return{days:e.getDay()-Xe.value-1,endDay:a}}),et=y(()=>{const e=[],{days:a,endDay:l}=It.value,u=a<0?a+7:a;if(u<6)for(let c=l-u;c<=l;c++)e.push({i:c,fill:!0});const r=e.length;for(let c=1;c<=W.value;c++){const g={i:c,event:Mt.value[c],classes:[]};Tt.value[c]===!0&&(g.in=!0,g.flat=!0),e.push(g)}if(be.value[H.value]!==void 0&&be.value[H.value].forEach(c=>{const g=r+c-1;Object.assign(e[g],{selected:!0,unelevated:!0,flat:!1,color:G.value,textColor:ne.value})}),Ze.value[H.value]!==void 0&&Ze.value[H.value].forEach(c=>{if(c.from!==void 0){const g=r+c.from-1,w=r+(c.to||W.value)-1;for(let Ue=g;Ue<=w;Ue++)Object.assign(e[Ue],{range:c.range,unelevated:!0,color:G.value,textColor:ne.value});Object.assign(e[g],{rangeFrom:!0,flat:!1}),c.to!==void 0&&Object.assign(e[w],{rangeTo:!0,flat:!1})}else if(c.to!==void 0){const g=r+c.to-1;for(let w=r;w<=g;w++)Object.assign(e[w],{range:c.range,unelevated:!0,color:G.value,textColor:ne.value});Object.assign(e[g],{flat:!1,rangeTo:!0})}else{const g=r+W.value-1;for(let w=r;w<=g;w++)Object.assign(e[w],{range:c.range,unelevated:!0,color:G.value,textColor:ne.value})}}),me.value!==void 0){const c=r+me.value.from-1,g=r+me.value.to-1;for(let w=c;w<=g;w++)e[w].color=G.value,e[w].editRange=!0;me.value.includeFrom===!0&&(e[c].editRangeFrom=!0),me.value.includeTo===!0&&(e[g].editRangeTo=!0)}h.value.year===A.value.year&&h.value.month===A.value.month&&(e[r+A.value.day-1].today=!0);const p=e.length%7;if(p>0){const c=7-p;for(let g=1;g<=c;g++)e.push({i:g,fill:!0})}return e.forEach(c=>{let g="q-date__calendar-item ";c.fill===!0?g+="q-date__calendar-item--fill":(g+=`q-date__calendar-item--${c.in===!0?"in":"out"}`,c.range!==void 0&&(g+=` q-date__range${c.rangeTo===!0?"-to":c.rangeFrom===!0?"-from":""}`),c.editRange===!0&&(g+=` q-date__edit-range${c.editRangeFrom===!0?"-from":""}${c.editRangeTo===!0?"-to":""}`),(c.range!==void 0||c.editRange===!0)&&(g+=` text-${c.color}`)),c.classes=g}),e}),Bt=y(()=>t.disable===!0?{"aria-disabled":"true"}:t.readonly===!0?{"aria-readonly":"true"}:{});Q(()=>t.modelValue,e=>{if(le===e)le=0;else{const{year:a,month:l}=ot(z.value,S.value);re(a,l)}}),Q(R,()=>{de.value!==null&&x.$el.contains(document.activeElement)===!0&&de.value.focus()}),Q(()=>h.value.year,e=>{k("navigation",{year:e,month:h.value.month})}),Q(()=>h.value.month,e=>{k("navigation",{year:h.value.year,month:e})}),Q(bt,e=>{it(e,S.value,"mask"),z.value=e}),Q(wt,e=>{it(z.value,e,"locale"),S.value=e});function tt(){const e=A.value,a=be.value[J(e)];(a===void 0||a.includes(e.day)===!1)&&Ye(e),He(e.year,e.month)}function Rt(e){gt(e)===!0&&(R.value=e)}function Ht(e,a){["month","year"].includes(e)&&(e==="month"?nt:Qe)(a===!0?-1:1)}function He(e,a){R.value="Calendar",re(e,a)}function Ft(e,a){if(t.range===!1||!e){q.value=null;return}const l=Object.assign({...h.value},e),u=a!==void 0?Object.assign({...h.value},a):l;q.value={init:l,initHash:j(l),final:u,finalHash:j(u)},He(l.year,l.month)}function at(){return t.calendar==="persian"?"YYYY/MM/DD":t.mask}function Fe(e,a,l){return ta(e,a,l,t.calendar,{hour:0,minute:0,second:0,millisecond:0})}function ot(e,a){const l=Array.isArray(t.modelValue)===!0?t.modelValue:t.modelValue?[t.modelValue]:[];if(l.length===0)return lt();const u=l[l.length-1],r=Fe(u.from!==void 0?u.from:u,e,a);return r.dateHash===null?lt():r}function lt(){let e,a;if(t.defaultYearMonth!==void 0){const l=t.defaultYearMonth.split("/");e=parseInt(l[0],10),a=parseInt(l[1],10)}else{const l=A.value!==void 0?A.value:E();e=l.year,a=l.month}return{year:e,month:a,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:e+"/"+ee(a)+"/01"}}function nt(e){let a=h.value.year,l=Number(h.value.month)+e;l===13?(l=1,a++):l===0&&(l=12,a--),re(a,l),Ce.value===!0&&we("month")}function Qe(e){const a=Number(h.value.year)+e;re(a,h.value.month),Ce.value===!0&&we("year")}function Qt(e){re(e,h.value.month),R.value=t.defaultView==="Years"?"Months":"Calendar",Ce.value===!0&&we("year")}function Yt(e){re(h.value.year,e),R.value="Calendar",Ce.value===!0&&we("month")}function Pt(e,a){const l=be.value[a];(l!==void 0&&l.includes(e.day)===!0?Pe:Ye)(e)}function X(e){return{year:e.year,month:e.month,day:e.day}}function re(e,a){T.value!==null&&e<=T.value.year&&(e=T.value.year,a<T.value.month&&(a=T.value.month)),M.value!==null&&e>=M.value.year&&(e=M.value.year,a>M.value.month&&(a=M.value.month));const l=e+"/"+ee(a)+"/01";l!==h.value.dateHash&&(pe.value=h.value.dateHash<l==(V.lang.rtl!==!0)?"left":"right",e!==h.value.year&&(Te.value=pe.value),ut(()=>{_e.value=e-e%Z-(e<0?Z:0),Object.assign(h.value,{year:e,month:a,day:1,dateHash:l})}))}function st(e,a,l){const u=e!==null&&e.length===1&&t.multiple===!1?e[0]:e;le=u;const{reason:r,details:p}=rt(a,l);k("update:modelValue",u,r,p)}function we(e){const a=F.value[0]!==void 0&&F.value[0].dateHash!==null?{...F.value[0]}:{...h.value};ut(()=>{a.year=h.value.year,a.month=h.value.month;const l=t.calendar!=="persian"?new Date(a.year,a.month,0).getDate():ze(a.year,a.month);a.day=Math.min(Math.max(1,a.day),l);const u=ie(a);le=u;const{details:r}=rt("",a);k("update:modelValue",u,e,r)})}function rt(e,a){return a.from!==void 0?{reason:`${e}-range`,details:{...X(a.target),from:X(a.from),to:X(a.to)}}:{reason:`${e}-day`,details:X(a)}}function ie(e,a,l){return e.from!==void 0?{from:Be.value(e.from,a,l),to:Be.value(e.to,a,l)}:Be.value(e,a,l)}function Ye(e){let a;if(t.multiple===!0)if(e.from!==void 0){const l=j(e.from),u=j(e.to),r=F.value.filter(c=>c.dateHash<l||c.dateHash>u),p=se.value.filter(({from:c,to:g})=>g.dateHash<l||c.dateHash>u);a=r.concat(p).concat(e).map(c=>ie(c))}else{const l=Ie.value.slice();l.push(ie(e)),a=l}else a=ie(e);st(a,"add",e)}function Pe(e){if(t.noUnset===!0)return;let a=null;if(t.multiple===!0&&Array.isArray(t.modelValue)===!0){const l=ie(e);e.from!==void 0?a=t.modelValue.filter(u=>u.from!==void 0?u.from!==l.from&&u.to!==l.to:!0):a=t.modelValue.filter(u=>u!==l),a.length===0&&(a=null)}st(a,"remove",e)}function it(e,a,l){const u=F.value.concat(se.value).map(r=>ie(r,e,a)).filter(r=>r.from!==void 0?r.from.dateHash!==null&&r.to.dateHash!==null:r.dateHash!==null);k("update:modelValue",(t.multiple===!0?u:u[0])||null,l)}function Ot(){if(t.minimal!==!0)return m("div",{class:"q-date__header "+_.value},[m("div",{class:"relative-position"},[m(he,{name:"q-transition--fade"},()=>m("div",{key:"h-yr-"+Ge.value,class:"q-date__header-subtitle q-date__header-link "+(R.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:f.value,...i("vY",{onClick(){R.value="Years"},onKeyup(e){e.keyCode===13&&(R.value="Years")}})},[Ge.value]))]),m("div",{class:"q-date__header-title relative-position flex no-wrap"},[m("div",{class:"relative-position col"},[m(he,{name:"q-transition--fade"},()=>m("div",{key:"h-sub"+Ke.value,class:"q-date__header-title-label q-date__header-link "+(R.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:f.value,...i("vC",{onClick(){R.value="Calendar"},onKeyup(e){e.keyCode===13&&(R.value="Calendar")}})},[Ke.value]))]),t.todayBtn===!0?m($,{class:"q-date__header-today self-start",icon:V.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:f.value,onClick:tt}):null])])}function Oe({label:e,type:a,key:l,dir:u,goTo:r,boundaries:p,cls:c}){return[m("div",{class:"row items-center q-date__arrow"},[m($,{round:!0,dense:!0,size:"sm",flat:!0,icon:Se.value[0],tabindex:f.value,disable:p.prev===!1,...i("go-#"+a,{onClick(){r(-1)}})})]),m("div",{class:"relative-position overflow-hidden flex flex-center"+c},[m(he,{name:"q-transition--jump-"+u},()=>m("div",{key:l},[m($,{flat:!0,dense:!0,noCaps:!0,label:e,tabindex:f.value,...i("view#"+a,{onClick:()=>{R.value=a}})})]))]),m("div",{class:"row items-center q-date__arrow"},[m($,{round:!0,dense:!0,size:"sm",flat:!0,icon:Se.value[1],tabindex:f.value,disable:p.next===!1,...i("go+#"+a,{onClick(){r(1)}})})])]}const Ut={Calendar:()=>[m("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[m("div",{class:"q-date__navigation row items-center no-wrap"},Oe({label:S.value.months[h.value.month-1],type:"Months",key:h.value.month,dir:pe.value,goTo:nt,boundaries:Re.value.month,cls:" col"}).concat(Oe({label:h.value.year,type:"Years",key:h.value.year,dir:Te.value,goTo:Qe,boundaries:Re.value.year,cls:""}))),m("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},xt.value.map(e=>m("div",{class:"q-date__calendar-item"},[m("div",e)]))),m("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[m(he,{name:"q-transition--slide-"+pe.value},()=>m("div",{key:H.value,class:"q-date__calendar-days fit"},et.value.map(e=>m("div",{class:e.classes},[e.in===!0?m($,{class:e.today===!0?"q-date__today":"",dense:!0,flat:e.flat,unelevated:e.unelevated,color:e.color,textColor:e.textColor,label:e.i,tabindex:f.value,...i("day#"+e.i,{onClick:()=>{Lt(e.i)},onMouseover:()=>{zt(e.i)}})},e.event!==!1?()=>m("div",{class:"q-date__event bg-"+e.event}):null):m("div",""+e.i)]))))])])],Months(){const e=h.value.year===A.value.year,a=u=>T.value!==null&&h.value.year===T.value.year&&T.value.month>u||M.value!==null&&h.value.year===M.value.year&&M.value.month<u,l=S.value.monthsShort.map((u,r)=>{const p=h.value.month===r+1;return m("div",{class:"q-date__months-item flex flex-center"},[m($,{class:e===!0&&A.value.month===r+1?"q-date__today":null,flat:p!==!0,label:u,unelevated:p,color:p===!0?G.value:null,textColor:p===!0?ne.value:null,tabindex:f.value,disable:a(r+1),...i("month#"+r,{onClick:()=>{Yt(r+1)}})})])});return t.yearsInMonthView===!0&&l.unshift(m("div",{class:"row no-wrap full-width"},[Oe({label:h.value.year,type:"Years",key:h.value.year,dir:Te.value,goTo:Qe,boundaries:Re.value.year,cls:" col"})])),m("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},l)},Years(){const e=_e.value,a=e+Z,l=[],u=r=>T.value!==null&&T.value.year>r||M.value!==null&&M.value.year<r;for(let r=e;r<=a;r++){const p=h.value.year===r;l.push(m("div",{class:"q-date__years-item flex flex-center"},[m($,{key:"yr"+r,class:A.value.year===r?"q-date__today":null,flat:!p,label:r,dense:!0,unelevated:p,color:p===!0?G.value:null,textColor:p===!0?ne.value:null,tabindex:f.value,disable:u(r),...i("yr#"+r,{onClick:()=>{Qt(r)}})})]))}return m("div",{class:"q-date__view q-date__years flex flex-center"},[m("div",{class:"col-auto"},[m($,{round:!0,dense:!0,flat:!0,icon:Se.value[0],tabindex:f.value,disable:u(e),...i("y-",{onClick:()=>{_e.value-=Z}})})]),m("div",{class:"q-date__years-content col self-stretch row items-center"},l),m("div",{class:"col-auto"},[m($,{round:!0,dense:!0,flat:!0,icon:Se.value[1],tabindex:f.value,disable:u(a),...i("y+",{onClick:()=>{_e.value+=Z}})})])])}};function Lt(e){const a={...h.value,day:e};if(t.range===!1){Pt(a,H.value);return}if(q.value===null){const l=et.value.find(r=>r.fill!==!0&&r.i===e);if(t.noUnset!==!0&&l.range!==void 0){Pe({target:a,from:l.range.from,to:l.range.to});return}if(l.selected===!0){Pe(a);return}const u=j(a);q.value={init:a,initHash:u,final:a,finalHash:u},k("rangeStart",X(a))}else{const l=q.value.initHash,u=j(a),r=l<=u?{from:q.value.init,to:a}:{from:a,to:q.value.init};q.value=null,Ye(l===u?a:{target:a,...r}),k("rangeEnd",{from:X(r.from),to:X(r.to)})}}function zt(e){if(q.value!==null){const a={...h.value,day:e};Object.assign(q.value,{final:a,finalHash:j(a)})}}return Object.assign(x,{setToday:tt,setView:Rt,offsetCalendar:Ht,setCalendarTo:He,setEditingRange:Ft}),()=>{const e=[m("div",{class:"q-date__content col relative-position"},[m(he,{name:"q-transition--fade"},Ut[R.value])])],a=yt(o.default);return a!==void 0&&e.push(m("div",{class:"q-date__actions"},a)),t.name!==void 0&&t.disable!==!0&&qe(e,"push"),m("div",{class:Dt.value,...Bt.value},[Ot(),m("div",{ref:de,class:"q-date__main col column",tabindex:-1},e)])}}});const go=m("div",{class:"q-space"});var yo=Ee({name:"QSpace",setup(){return()=>go}});const po=te({name:"OTDComponent",setup(){const t=oe(),o=Date.now(),k=ft.formatDate(o,"MM/DD");return{reStore:t,otditems:v([]),promptOTDDate:v(!1),otddate:v(Date.now()),otdlabel:v(k),otdtype:v("selected")}},mounted(){this.init()},methods:{async init(){const t=await this.reStore.wiki.onThisDay({type:this.otdtype});this.otditems=t[this.otdtype],console.log(this.otditems)},async load(t){console.log("load",this.otditems[t].text),console.log("load",this.otditems[t]);const o=this.reStore.langVoices[this.reStore.preferences.langVoice];this.reStore.loadPageId(this.otditems[t].pages[0].pageid,o),this.reStore.router.push("/teacher/editor")},async updateOTDDate(){console.log("updateOTDDate: ",this.otddate);const t=await this.reStore.wiki.onThisDay({type:"selected",month:this.otddate.split("/")[1],day:this.otddate.split("/")[2]});this.otditems=t.selected,console.log(this.otditems),this.otdtype="selected",this.otdlabel=ft.formatDate(this.otddate,"MM/DD")},async otdOptionsCB(t){console.log("otdOptionsCB",this.otdtype);const o=await this.reStore.wiki.onThisDay({type:this.otdtype});this.otditems=o[this.otdtype]}}}),_o=s("div",{class:"text-h6"},"Select Date",-1),Co={class:"q-gutter-y-sm column"},ko={class:""};function So(t,o,k,x,V,Y){return b(),O(K,null,[n(Ct,{modelValue:t.promptOTDDate,"onUpdate:modelValue":o[2]||(o[2]=i=>t.promptOTDDate=i),persistent:""},{default:d(()=>[n(B,{style:{"min-width":"350px"}},{default:d(()=>[n(U,{align:"center"},{default:d(()=>[_o]),_:1}),n(fo,{modelValue:t.otddate,"onUpdate:modelValue":o[0]||(o[0]=i=>t.otddate=i),minimal:""},null,8,["modelValue"]),n(_t,{align:"center",class:"text-white"},{default:d(()=>[$e(n($,{flat:"",label:"Cancel"},null,512),[[Ve]]),$e(n($,{flat:"",label:"Update OTD date",onClick:o[1]||(o[1]=i=>this.updateOTDDate())},null,512),[[Ve]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),n(B,{flat:""},{default:d(()=>[n(U,null,{default:d(()=>[n(ye,{padding:"",class:"rounded-borders"},{default:d(()=>[n(ge,{"header-style":{border:"1px solid gray"},label:"On This Day"},{default:d(()=>[s("div",Co,[n(We,{class:"bg-primary text-white rounded-borders q-my-md"},{default:d(()=>[n($,{dark:"",standout:"",onClick:o[3]||(o[3]=i=>t.promptOTDDate=!0)},{default:d(()=>[N(C(t.otdlabel),1)]),_:1}),n(yo),n(ra,{dark:"",outlined:"",dense:"",modelValue:this.otdtype,"onUpdate:modelValue":o[4]||(o[4]=i=>this.otdtype=i),options:["events","holidays","births","deaths","selected"],"emit-value":"",onPopupHide:o[5]||(o[5]=i=>this.otdOptionsCB())},null,8,["modelValue"])]),_:1})]),s("div",ko,[(b(!0),O(K,null,fe(t.otditems,(i,f)=>(b(),I(B,{class:"bg-primary otdcard q-pa-sm q-ma-md",flat:"",bordered:"",modelValue:t.otditems,"onUpdate:modelValue":o[6]||(o[6]=_=>t.otditems=_),key:f,onClick:_=>this.load(f)},{default:d(()=>[N(C(f)+". "+C(i.year)+" "+C(i.text),1)]),_:2},1032,["modelValue","onClick"]))),128))])]),_:1})]),_:1})]),_:1})]),_:1})],64)}var bo=ae(po,[["render",So]]);const wo=te({name:"CurrentAssignment",setup(){const t=oe();return{reStore:t,assignmentid:v("-"),courseid:v("-"),goal:v("-"),created:v("-"),id:v("-"),points:v("-"),pages:v([]),pgIdx:v(0),title:v(t.assignment.title)}},mounted(){console.log("mounted"),Q(this.reStore.assignment,async(t,o)=>{console.log("watcher ",t,o),this.courseid=t.courseid,this.goal=t.goal,this.created=t.created,this.id=t.id,this.points=t.points,this.pages=t.pages,this.pgIdx=t.pgIdx,this.title=t.title})},methods:{dummy(){console.log("dummy")}}}),Do={class:"text-weight-bolder text-center q-pa-md"},$o={style:{border:"1px solid gray","border-radius":"5px"},class:"q-my-md"},Vo={width:"100%"},xo=s("td",null,"Course Id",-1),qo={style:{width:"50%"}},To=s("td",null,"Assignmnet Id",-1),Mo={style:{width:"50%"}},Io=s("td",null,"Created",-1),Bo={style:{width:"50%"}},Ro=s("td",null,"Goal",-1),Ho={style:{width:"50%"}},Fo=s("td",null,"Pages",-1),Qo={style:{width:"50%"}};function Yo(t,o,k,x,V,Y){return b(),I(B,{flat:""},{default:d(()=>[n(U,null,{default:d(()=>[s("div",Do,C(this.title),1),s("div",$o,[s("table",Vo,[s("tr",null,[xo,s("td",qo,C(this.courseid),1)]),s("tr",null,[To,s("td",Mo,C(this.id),1)]),s("tr",null,[Io,s("td",Bo,C(this.created),1)]),s("tr",null,[Ro,s("td",Ho,C(this.goal),1)]),s("tr",null,[Fo,s("td",Qo,C(this.pgIdx)+" / "+C(this.pages.length),1)])])])]),_:1})]),_:1})}var Po=ae(wo,[["render",Yo]]);const Oo=te({name:"TeacherLayout",components:{CurrentAssignment:Po,DocumentationComponent:ia,SearchComponent:_a,PreferencesComponent:ua,CurrentPage:Ka,ImagesComponent:ao,BookmarksComponent:io,OTDComponent:bo},setup(){const t=v(!1),o=v(!1),k=oe(),x=k.preferences;return{step:v(1),reStore:k,initialValues:v(x),leftDrawerOpen:t,rightDrawerOpen:o,toggleLeftDrawer(){t.value=!t.value},toggleRightDrawer(){o.value=!o.value}}},mounted(){dt.isActive||(dt.toggle(),Le("primary","#333"),Le("secondary",this.reStore.preferences.secondaryColor),Le("accent",this.reStore.preferences.accentColor))}}),Uo={class:"dashboard-wrapper"};function Lo(t,o,k,x,V,Y){const i=P("router-link"),f=P("router-view"),_=P("DocumentationComponent"),L=P("SearchComponent"),E=P("ImagesComponent"),le=P("BookmarksComponent"),xe=P("OTDComponent"),qe=P("PreferencesComponent"),de=P("CurrentAssignment"),z=P("CurrentPage");return b(),I(Kt,{view:"hHh LpR fFf"},{default:d(()=>[n(jt,{flat:"",bordered:"",class:"bg-primary text-white","height-hint":"98"},{default:d(()=>[n(We,null,{default:d(()=>[n($,{dense:"",flat:"",round:"",icon:"menu",onClick:t.toggleLeftDrawer},null,8,["onClick"]),n(Et,null,{default:d(()=>[n(i,{to:"/teacher"},{default:d(()=>[n(D,{name:"home",color:"white"},{default:d(()=>[n(Ne,null,{default:d(()=>[N("Return to My Teacher Page")]),_:1})]),_:1})]),_:1})]),_:1}),this.reStore.authenticated?(b(),I($,{key:0,onClick:o[0]||(o[0]=S=>this.reStore.router.push("/student")),icon:"switch_account"},{default:d(()=>[n(Ne,null,{default:d(()=>[N(" Switch between Teacher or Student role ")]),_:1})]),_:1})):ve("",!0),this.reStore.authenticated?(b(),I($,{key:1,icon:"logout",onClick:o[1]||(o[1]=S=>this.reStore.logout())})):ve("",!0),n($,{dense:"",flat:"",round:"",icon:"menu",onClick:t.toggleRightDrawer},null,8,["onClick"])]),_:1}),n(Wt,{align:"left",class:"hidden"},{default:d(()=>[n(De,{to:"/logo",label:"Logo"}),n(De,{to:"/teaching",label:"Teaching"}),n(De,{to:"/taking",label:"Taking"}),n(De,{to:"/gradebook",label:"Gradebook"})]),_:1})]),_:1}),n(Jt,{class:"container-fluid"},{default:d(()=>[s("div",Uo,[n(f)]),n(ct,{bordered:"","show-if-above":"",modelValue:t.leftDrawerOpen,"onUpdate:modelValue":o[2]||(o[2]=S=>t.leftDrawerOpen=S),side:"left"},{default:d(()=>[n(mt,{visible:t.visible,style:{height:"95vh","max-width":"350px"}},{default:d(()=>[n(_),n(L),n(E),n(le),n(xe)]),_:1},8,["visible"])]),_:1},8,["modelValue"]),n(ct,{bordered:"","show-if-above":"",modelValue:t.rightDrawerOpen,"onUpdate:modelValue":o[3]||(o[3]=S=>t.rightDrawerOpen=S),side:"right"},{default:d(()=>[n(mt,{visible:t.visible,style:{height:"95vh","max-width":"350px"}},{default:d(()=>[n(qe,{initialValues:this.initialValues},null,8,["initialValues"]),n(de),n(z)]),_:1},8,["visible"])]),_:1},8,["modelValue"])]),_:1})]),_:1})}var sl=ae(Oo,[["render",Lo]]);export{sl as default};