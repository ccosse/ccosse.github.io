import{h,c as ee,au as Qe,av as Pe,a as _,aw as Be,y as he,e as fe,r as g,u as Z,_ as ge,o as E,an as z,k as n,g as u,w as f,ao as me,j as K,ap as S,aq as Ee,Q as oe,ar as ze,ax as Ne,q as De,a4 as Ve,ay as Le,i as de,C as ce,O as Me,az as Re,ae as ue}from"./index.0593ff5d.js";import{Q as ve,a as R,b as Ue}from"./QExpansionItem.f1c43f19.js";import{Q as We}from"./QImg.1f3e2eaf.js";import{Q as He}from"./QTooltip.f87d82fb.js";import{Q as N}from"./QCardSection.f1c1c46f.js";import{Q as M}from"./QCard.08d12015.js";import{Q as O}from"./QList.61034403.js";import{b as Ge,u as ye}from"./re-store.18599349.js";import{s as X}from"./transform.aea72fbe.js";import{Q as Ye}from"./QCheckbox.5012ce81.js";import{u as Je,a as Xe}from"./use-dark.247fe131.js";const Ze=h("div",{class:"q-space"});var Wt=ee({name:"QSpace",setup(){return()=>Ze}});const Oe={...Qe,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},j=50,ke=2*j,_e=ke*Math.PI,je=Math.round(_e*1e3)/1e3;var et=ee({name:"QCircularProgress",props:{...Oe,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:s}){const{proxy:{$q:v}}=he(),T=Pe(e),C=_(()=>{const b=(v.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(v.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-b}deg)`:`rotate3d(0, 0, 1, ${b-90}deg)`}}),q=_(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),c=_(()=>ke/(1-e.thickness/2)),w=_(()=>`${c.value/2} ${c.value/2} ${c.value} ${c.value}`),x=_(()=>Ge(e.value,e.min,e.max)),Q=_(()=>_e*(1-(x.value-e.min)/(e.max-e.min))),P=_(()=>e.thickness/2*c.value);function B({thickness:b,offset:$,color:I,cls:U,rounded:W}){return h("circle",{class:"q-circular-progress__"+U+(I!==void 0?` text-${I}`:""),style:q.value,fill:"transparent",stroke:"currentColor","stroke-width":b,"stroke-dasharray":je,"stroke-dashoffset":$,"stroke-linecap":W,cx:c.value,cy:c.value,r:j})}return()=>{const b=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&b.push(h("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:j-P.value/2,cx:c.value,cy:c.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&b.push(B({cls:"track",thickness:P.value,offset:0,color:e.trackColor})),b.push(B({cls:"circle",thickness:P.value,offset:Q.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const $=[h("svg",{class:"q-circular-progress__svg",style:C.value,viewBox:w.value,"aria-hidden":"true"},b)];return e.showValue===!0&&$.push(h("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},s.default!==void 0?s.default():[h("div",x.value)])),h("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:T.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:x.value},Be(s.internal,$))}}});const tt=fe({name:"AssignmentStatus",props:{},setup(e){return{reStore:ye(),aid:g("-"),ck:g("-"),defaultExpanded:g(!0),assignmentTitle:g("-"),pageTitle:g("-"),pctComplete:g(0),points:g(0),goal:g(283),pgIdx:g(0),pgTot:g(0),imgIdx:g(0),imgTot:g(0),imgFit:g("-"),guideWords:g("-"),mapCoords:g("36.11,-115.17"),pageid:g("-"),pctReplace:g("-"),props:e}},mounted(){console.log(this.props);try{const e=this.reStore.courses.aid,s=this.reStore.courses.ck,v=this.reStore.courses[s].assignments[e];this.goal=v.goal,this.assignmentTitle=v.title,this.pgTot=v.pages.length,this.points=v.points}catch{}Z(this.reStore.assignmentStatus,async(e,s)=>{console.log("watcher ",e,s),this.ck!=e.ck?(this.points=0,this.goal=e.goal):(this.points=e.points,this.goal=e.goal),this.pctComplete=parseInt(parseFloat(e.points)/parseFloat(e.goal)*100),this.assignmentTitle=e.assignmentTitle,this.pageTitle=e.pageTitle,this.pgIdx=e.pgIdx,this.imgIdx=e.imgIdx,this.imgTot=this.reStore.page.imgs.length,this.imgFit=e.imgFit,this.guideWords=e.guideWords,this.mapCoords=e.mapCoords,this.pageid=e.pageid,this.ck=e.ck,this.aid=e.aid,this.pctReplace=e.pctReplace})},methods:{speak(){console.log("AssignmentStatus.speak"),this.reStore.speak()},mapCB(){const e="https://maps.google.com/?ll="+this.mapCoords.split(",")[0]+","+this.mapCoords.split(",")[1];window.open(e,"_blank")},cycleFitMode(){const e=["scale-down","cover"];let s=e.indexOf(this.imgFit);s+=1,s>e.length-1&&(s=0),this.imgFit=e[s],this.reStore.page.imgFit=this.imgFit,this.reStore.assignmentStatus.imgFit=this.imgFit,console.log("fit: ",this.imgFit)},nextImg(){this.imgIdx=this.imgIdx+1>this.imgTot-1?0:this.imgIdx+1,console.log("AssignmentStatus nextImg",this.imgIdx,this.imgTot),this.reStore.setStatus("imgIdx",this.imgIdx)},toggleText(){X("#slideTextDiv").classed("hidden")===!0?X("#slideTextDiv").classed("hidden",!1):X("#slideTextDiv").classed("hidden",!0)},loadURL(e){console.log("loadURL ",e),window.open(e,"_blank")}}}),lt={class:"q-pa-md",style:{"max-width":"350px"}},it={style:{border:"0px solid gray","border-radius":"5px"},class:"q-my-md"},at={width:"100%"},rt=n("td",null,"Page Title",-1),nt={style:{width:"50%"}},st=n("td",null,"WP Page ID",-1),ot={style:{width:"50%"}},dt={key:0},ct=n("td",null,"Page Language",-1),ut={style:{width:"50%"}},ht=n("td",null,"Current Page",-1),ft=n("td",null,"Current Image",-1),gt={class:"float-left"},mt=n("td",null,"Location",-1),vt={style:{width:"50%"},class:""},yt=n("td",null,"Speak Text",-1),kt={class:"q-pa-md",style:{"max-width":"350px"}},_t={class:"flex justify-center atit q-ma-sm q-pa-sm"},xt={class:"text-h6"},St={key:0},bt={key:1},pt=n("div",{class:"text-h6"},"Current Score",-1),Ct={width:"100%",class:"text-h6"},Tt=n("tr",null,[n("th",{style:{"text-align":"center"}},"Points"),K(),n("th",{style:{"text-align":"center"}},"Goal")],-1),qt={style:{"text-align":"center"}},wt={style:{"text-align":"center"}};function $t(e,s,v,T,C,q){return E(),z(ze,null,[n("div",lt,[u(O,{bordered:"",class:"rounded-borders"},{default:f(()=>[u(ve,{modelValue:e.defaultExpanded,"onUpdate:modelValue":s[3]||(s[3]=c=>e.defaultExpanded=c)},{header:f(()=>[u(R,{avatar:""},{default:f(()=>[u(me,{size:"md",icon:"info",color:"positive","text-color":"white"})]),_:1}),u(R,null,{default:f(()=>[K(" Page Info ")]),_:1})]),default:f(()=>[u(We,{src:this.reStore.page.imgs[this.reStore.courses.imgIdx].url},null,8,["src"]),u(M,{flat:""},{default:f(()=>[u(N,null,{default:f(()=>[n("div",it,[n("table",at,[n("tr",null,[rt,n("td",nt,S(this.reStore.page.pageTitle),1)]),n("tr",null,[st,n("td",ot,[K(S(this.reStore.page.pageid)+" ",1),this.reStore.page.type?(E(),z("span",dt,"["+S(this.reStore.page.type)+"]",1)):Ee("",!0)])]),n("tr",null,[ct,n("td",ut,S(this.reStore.page.langVoiceKey),1)]),n("tr",null,[ht,n("td",{style:{width:"50%"},class:"ptr",onClick:s[0]||(s[0]=(...c)=>this.toggleText&&this.toggleText(...c))},S(this.pgIdx+1)+" / "+S(this.pgTot),1)]),n("tr",null,[ft,n("td",{style:{width:"50%"},class:"ptr",onClick:s[1]||(s[1]=(...c)=>this.nextImg&&this.nextImg(...c))},[n("span",gt,S(this.reStore.page.imgIdx+1)+" / "+S(this.reStore.page.imgs.length),1)])]),n("tr",null,[mt,n("td",vt,[u(oe,{round:"",color:"secondary",class:"ptr",icon:"place",onClick:this.mapCB},{default:f(()=>[u(He,null,{default:f(()=>[K(S(this.mapCoords.slice(0,13)),1)]),_:1})]),_:1},8,["onClick"])])]),n("tr",null,[yt,n("td",null,[u(oe,{round:"",color:"secondary",class:"",icon:"volume_up",onClick:s[2]||(s[2]=c=>this.speak())})])])])])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),n("div",kt,[u(O,{bordered:"",class:"rounded-borders"},{default:f(()=>[n("span",_t,[n("div",xt,[K("My Points Balance: "),this.reStore.authenticated?(E(),z("span",St,S(this.reStore.userSnapshot.profile.points),1)):(E(),z("span",bt,"0"))])])]),_:1})]),u(M,{flat:""},{default:f(()=>[u(N,null,{default:f(()=>[u(M,{flat:"",style:{"max-width":"300px",border:"1px solid gray","border-radius":"5px"}},{default:f(()=>[u(N,{align:"center"},{default:f(()=>[pt]),_:1}),u(N,{class:"q-pt-none",align:"center"},{default:f(()=>[u(et,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",value:this.points,min:0,max:this.goal,modelValue:e.points,"onUpdate:modelValue":s[4]||(s[4]=c=>e.points=c)},null,8,["value","max","modelValue"]),n("table",Ct,[Tt,n("tr",null,[n("td",qt,S(this.points),1),K(),n("td",wt,S(this.goal),1)])])]),_:1})]),_:1})]),_:1})]),_:1})],64)}var Ht=ge(tt,[["render",$t]]);const It=["none","strict","leaf","leaf-filtered"];var Kt=ee({name:"QTree",props:{...Je,nodes:{type:Array,required:!0},nodeKey:{type:String,required:!0},labelKey:{type:String,default:"label"},childrenKey:{type:String,default:"children"},dense:Boolean,color:String,controlColor:String,textColor:String,selectedColor:String,icon:String,tickStrategy:{type:String,default:"none",validator:e=>It.includes(e)},ticked:Array,expanded:Array,selected:{},noSelectionUnset:Boolean,defaultExpandAll:Boolean,accordion:Boolean,filter:String,filterMethod:Function,duration:Number,noConnectors:Boolean,noTransition:Boolean,noNodesLabel:String,noResultsLabel:String},emits:["update:expanded","update:ticked","update:selected","lazyLoad","afterShow","afterHide"],setup(e,{slots:s,emit:v}){const{proxy:T}=he(),{$q:C}=T,q=Xe(e,C),c=g({}),w=g(e.ticked||[]),x=g(e.expanded||[]);let Q={};Ne(()=>{Q={}});const P=_(()=>`q-tree q-tree--${e.dense===!0?"dense":"standard"}`+(e.noConnectors===!0?" q-tree--no-connectors":"")+(q.value===!0?" q-tree--dark":"")+(e.color!==void 0?` text-${e.color}`:"")),B=_(()=>e.selected!==void 0),b=_(()=>e.icon||C.iconSet.tree.icon),$=_(()=>e.controlColor||e.color),I=_(()=>e.textColor!==void 0?` text-${e.textColor}`:""),U=_(()=>{const l=e.selectedColor||e.color;return l?` text-${l}`:""}),W=_(()=>e.filterMethod!==void 0?e.filterMethod:(l,i)=>{const t=i.toLowerCase();return l[e.labelKey]&&l[e.labelKey].toLowerCase().indexOf(t)>-1}),p=_(()=>{const l={},i=(t,r)=>{const a=t.tickStrategy||(r?r.tickStrategy:e.tickStrategy),d=t[e.nodeKey],m=t[e.childrenKey]&&t[e.childrenKey].length>0,A=t.disabled!==!0&&B.value===!0&&t.selectable!==!1,k=t.disabled!==!0&&t.expandable!==!1,Ae=a!=="none",L=a==="strict",ne=a==="leaf-filtered",Y=a==="leaf"||a==="leaf-filtered";let J=t.disabled!==!0&&t.tickable!==!1;Y===!0&&J===!0&&r&&r.tickable!==!0&&(J=!1);let F=t.lazy;F===!0&&c.value[d]!==void 0&&Array.isArray(t[e.childrenKey])===!0&&(F=c.value[d]);const o={key:d,parent:r,isParent:m,lazy:F,disabled:t.disabled,link:t.disabled!==!0&&(A===!0||k===!0&&(m===!0||F===!0)),children:[],matchesFilter:e.filter?W.value(t,e.filter):!0,selected:d===e.selected&&A===!0,selectable:A,expanded:m===!0?x.value.includes(d):!1,expandable:k,noTick:t.noTick===!0||L!==!0&&F&&F!=="loaded",tickable:J,tickStrategy:a,hasTicking:Ae,strictTicking:L,leafFilteredTicking:ne,leafTicking:Y,ticked:L===!0?w.value.includes(d):m===!0?!1:w.value.includes(d)};if(l[d]=o,m===!0&&(o.children=t[e.childrenKey].map(y=>i(y,o)),e.filter&&(o.matchesFilter!==!0?o.matchesFilter=o.children.some(y=>y.matchesFilter):o.noTick!==!0&&o.disabled!==!0&&o.tickable===!0&&ne===!0&&o.children.every(y=>y.matchesFilter!==!0||y.noTick===!0||y.tickable!==!0)===!0&&(o.tickable=!1)),o.matchesFilter===!0&&(o.noTick!==!0&&L!==!0&&o.children.every(y=>y.noTick)===!0&&(o.noTick=!0),Y))){if(o.ticked=!1,o.indeterminate=o.children.some(y=>y.indeterminate===!0),o.tickable=o.tickable===!0&&o.children.some(y=>y.tickable),o.indeterminate!==!0){const y=o.children.reduce((se,Fe)=>Fe.ticked===!0?se+1:se,0);y===o.children.length?o.ticked=!0:y>0&&(o.indeterminate=!0)}o.indeterminate===!0&&(o.indeterminateNextState=o.children.every(y=>y.tickable!==!0||y.ticked!==!0))}return o};return e.nodes.forEach(t=>i(t,null)),l});Z(()=>e.ticked,l=>{w.value=l}),Z(()=>e.expanded,l=>{x.value=l});function D(l){const i=[].reduce,t=(r,a)=>{if(r||!a)return r;if(Array.isArray(a)===!0)return i.call(Object(a),t,r);if(a[e.nodeKey]===l)return a;if(a[e.childrenKey])return t(null,a[e.childrenKey])};return t(null,e.nodes)}function xe(){return w.value.map(l=>D(l))}function Se(){return x.value.map(l=>D(l))}function be(l){return l&&p.value[l]?p.value[l].expanded:!1}function pe(){e.expanded!==void 0?v("update:expanded",[]):x.value=[]}function te(){const l=x.value,i=t=>{t[e.childrenKey]&&t[e.childrenKey].length>0&&t.expandable!==!1&&t.disabled!==!0&&(l.push(t[e.nodeKey]),t[e.childrenKey].forEach(i))};e.nodes.forEach(i),e.expanded!==void 0?v("update:expanded",l):x.value=l}function H(l,i,t=D(l),r=p.value[l]){if(r.lazy&&r.lazy!=="loaded"){if(r.lazy==="loading")return;c.value[l]="loading",Array.isArray(t[e.childrenKey])!==!0&&(t[e.childrenKey]=[]),v("lazyLoad",{node:t,key:l,done:a=>{c.value[l]="loaded",t[e.childrenKey]=Array.isArray(a)===!0?a:[],De(()=>{const d=p.value[l];d&&d.isParent===!0&&le(l,!0)})},fail:()=>{delete c.value[l],t[e.childrenKey].length===0&&delete t[e.childrenKey]}})}else r.isParent===!0&&r.expandable===!0&&le(l,i)}function le(l,i){let t=x.value;const r=e.expanded!==void 0;if(r===!0&&(t=t.slice()),i){if(e.accordion&&p.value[l]){const a=[];p.value[l].parent?p.value[l].parent.children.forEach(d=>{d.key!==l&&d.expandable===!0&&a.push(d.key)}):e.nodes.forEach(d=>{const m=d[e.nodeKey];m!==l&&a.push(m)}),a.length>0&&(t=t.filter(d=>a.includes(d)===!1))}t=t.concat([l]).filter((a,d,m)=>m.indexOf(a)===d)}else t=t.filter(a=>a!==l);r===!0?v("update:expanded",t):x.value=t}function Ce(l){return l&&p.value[l]?p.value[l].ticked:!1}function V(l,i){let t=w.value;const r=e.ticked!==void 0;r===!0&&(t=t.slice()),i?t=t.concat(l).filter((a,d,m)=>m.indexOf(a)===d):t=t.filter(a=>l.includes(a)===!1),r===!0&&v("update:ticked",t)}function Te(l,i,t){const r={tree:T,node:l,key:t,color:e.color,dark:q.value};return ue(r,"expanded",()=>i.expanded,a=>{a!==i.expanded&&H(t,a)}),ue(r,"ticked",()=>i.ticked,a=>{a!==i.ticked&&V([t],a)}),r}function ie(l){return(e.filter?l.filter(i=>p.value[i[e.nodeKey]].matchesFilter):l).map(i=>Ie(i))}function qe(l){if(l.icon!==void 0)return h(de,{class:"q-tree__icon q-mr-sm",name:l.icon,color:l.iconColor});const i=l.img||l.avatar;if(i)return h("img",{class:`q-tree__${l.img?"img":"avatar"} q-mr-sm`,src:i})}function we(){v("afterShow")}function $e(){v("afterHide")}function Ie(l){const i=l[e.nodeKey],t=p.value[i],r=l.header&&s[`header-${l.header}`]||s["default-header"],a=t.isParent===!0?ie(l[e.childrenKey]):[],d=a.length>0||t.lazy&&t.lazy!=="loaded";let m=l.body&&s[`body-${l.body}`]||s["default-body"];const A=r!==void 0||m!==void 0?Te(l,t,i):null;return m!==void 0&&(m=h("div",{class:"q-tree__node-body relative-position"},[h("div",{class:I.value},[m(A)])])),h("div",{key:i,class:`q-tree__node relative-position q-tree__node--${d===!0?"parent":"child"}`},[h("div",{class:"q-tree__node-header relative-position row no-wrap items-center"+(t.link===!0?" q-tree__node--link q-hoverable q-focusable":"")+(t.selected===!0?" q-tree__node--selected":"")+(t.disabled===!0?" q-tree__node--disabled":""),tabindex:t.link===!0?0:-1,onClick:k=>{re(l,t,k)},onKeypress(k){Ve(k)!==!0&&(k.keyCode===13?re(l,t,k,!0):k.keyCode===32&&G(l,t,k,!0))}},[h("div",{class:"q-focus-helper",tabindex:-1,ref:k=>{Q[t.key]=k}}),t.lazy==="loading"?h(Le,{class:"q-tree__spinner",color:$.value}):d===!0?h(de,{class:"q-tree__arrow"+(t.expanded===!0?" q-tree__arrow--rotate":""),name:b.value,onClick(k){G(l,t,k)}}):null,t.hasTicking===!0&&t.noTick!==!0?h(Ye,{class:"q-tree__tickbox",modelValue:t.indeterminate===!0?null:t.ticked,color:$.value,dark:q.value,dense:!0,keepColor:!0,disable:t.tickable!==!0,onKeydown:ce,"onUpdate:modelValue":k=>{Ke(t,k)}}):null,h("div",{class:"q-tree__node-header-content col row no-wrap items-center"+(t.selected===!0?U.value:I.value)},[r?r(A):[qe(l),h("div",l[e.labelKey])]])]),d===!0?e.noTransition===!0?h("div",{class:"q-tree__node-collapsible"+I.value,key:`${i}__q`},[m,h("div",{class:"q-tree__children"+(t.disabled===!0?" q-tree__node--disabled":"")},t.expanded?a:null)]):h(Ue,{duration:e.duration,onShow:we,onHide:$e},()=>Me(h("div",{class:"q-tree__node-collapsible"+I.value,key:`${i}__q`},[m,h("div",{class:"q-tree__children"+(t.disabled===!0?" q-tree__node--disabled":"")},a)]),[[Re,t.expanded]])):m])}function ae(l){const i=Q[l];i&&i.focus()}function re(l,i,t,r){r!==!0&&ae(i.key),B.value&&i.selectable?e.noSelectionUnset===!1?v("update:selected",i.key!==e.selected?i.key:null):i.key!==e.selected&&v("update:selected",i.key===void 0?null:i.key):G(l,i,t,r),typeof l.handler=="function"&&l.handler(l)}function G(l,i,t,r){t!==void 0&&ce(t),r!==!0&&ae(i.key),H(i.key,!i.expanded,l,i)}function Ke(l,i){if(l.indeterminate===!0&&(i=l.indeterminateNextState),l.strictTicking)V([l.key],i);else if(l.leafTicking){const t=[],r=a=>{a.isParent?(i!==!0&&a.noTick!==!0&&a.tickable===!0&&t.push(a.key),a.leafTicking===!0&&a.children.forEach(r)):a.noTick!==!0&&a.tickable===!0&&(a.leafFilteredTicking!==!0||a.matchesFilter===!0)&&t.push(a.key)};r(l),V(t,i)}}return e.defaultExpandAll===!0&&te(),Object.assign(T,{getNodeByKey:D,getTickedNodes:xe,getExpandedNodes:Se,isExpanded:be,collapseAll:pe,expandAll:te,setExpanded:H,isTicked:Ce,setTicked:V}),()=>{const l=ie(e.nodes);return h("div",{class:P.value},l.length===0?e.filter?e.noResultsLabel||C.lang.tree.noResults:e.noNodesLabel||C.lang.tree.noNodes:l)}}});const At=fe({name:"DocumentationComponent",setup(){return{reStore:ye(),selected:g(null),docTree:[{label:"Welcome",icon:"waving_hand",children:[{label:"What is Reading Edge?"},{label:"Important concepts"}]},{label:"Demo Assignments",icon:"collections_bookmark",children:[{label:"Things to point out"}]},{label:"Your Account",icon:"person",children:[{label:"Why login?"},{label:"Teacher and Student"},{label:"Courses and Assignments"},{label:"Preferences"}]},{label:"Assignment Builder",icon:"build",children:[{label:"Assignment Pieces"},{label:"Assignment Flow"}]},{label:"History of Reading Edge",icon:"history",children:[{label:"Previous incarnations"}]}]}},methods:{updateSelected(e){console.log("updateSelected ",e),e?(e=e.toLowerCase().replace("?","").replaceAll(" ","_"),this.reStore.router.push(`/doc/${e}`)):this.reStore.router.push("/doc/welcome")}}}),Ft={class:"q-pa-md",style:{"max-width":"350px"}};function Qt(e,s,v,T,C,q){return E(),z("div",Ft,[u(O,{bordered:"",class:"rounded-borders"},{default:f(()=>[u(ve,null,{header:f(()=>[u(R,{avatar:""},{default:f(()=>[u(me,{size:"md",icon:"article",color:"positive","text-color":"white"})]),_:1}),u(R,null,{default:f(()=>[K(" Documentation ")]),_:1})]),default:f(()=>[u(M,null,{default:f(()=>[u(N,null,{default:f(()=>[u(Kt,{nodes:this.docTree,selected:e.selected,"onUpdate:selected":[s[0]||(s[0]=c=>e.selected=c),this.updateSelected],"node-key":"label","no-connectors":""},null,8,["nodes","selected","onUpdate:selected"])]),_:1})]),_:1})]),_:1})]),_:1})])}var Gt=ge(At,[["render",Qt]]);export{Ht as A,Gt as D,Wt as Q,et as a,Oe as u};