import{am as se,g as Z,an as oe,h as g,i as c,ao as ce,q as X,d as de,r as v,v as G,_ as ue,o as he,c as Fe,w as I,a as y,e as n,ak as S,Q as Pe,a1 as T,ag as D,L as Qe,Z as ze,J,ap as Ne,p as Ee,a0 as Re,aq as Le,K as De,ar as Me,as as ne,ah as Ve}from"./index.d7e4ee9f.js";import{b as Ue,u as fe}from"./re-store.944dee6d.js";import{Q as ge}from"./use-form.9438ddc0.js";import{Q as me}from"./QCard.b3fb0f63.js";import{s as H}from"./transform.aea72fbe.js";import{u as ve,a as ke}from"./use-dark.e487103c.js";import{a as We,Q as He,b as re}from"./QExpansionItem.0f6a0364.js";import{Q as Ge}from"./QCheckbox.84756a69.js";import{Q as Je}from"./QList.4944e915.js";const Ye={...se,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},Y=50,ye=2*Y,_e=ye*Math.PI,Ze=Math.round(_e*1e3)/1e3;var Xe=Z({name:"QCircularProgress",props:{...Ye,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:r}){const{proxy:{$q:f}}=X(),q=oe(e),p=g(()=>{const C=(f.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(f.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-C}deg)`:`rotate3d(0, 0, 1, ${C-90}deg)`}}),K=g(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),d=g(()=>ye/(1-e.thickness/2)),A=g(()=>`${d.value/2} ${d.value/2} ${d.value} ${d.value}`),x=g(()=>Ue(e.value,e.min,e.max)),B=g(()=>_e*(1-(x.value-e.min)/(e.max-e.min))),P=g(()=>e.thickness/2*d.value);function F({thickness:C,offset:$,color:w,cls:N,rounded:u}){return c("circle",{class:"q-circular-progress__"+N+(w!==void 0?` text-${w}`:""),style:K.value,fill:"transparent",stroke:"currentColor","stroke-width":C,"stroke-dasharray":Ze,"stroke-dashoffset":$,"stroke-linecap":u,cx:d.value,cy:d.value,r:Y})}return()=>{const C=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&C.push(c("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:Y-P.value/2,cx:d.value,cy:d.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&C.push(F({cls:"track",thickness:P.value,offset:0,color:e.trackColor})),C.push(F({cls:"circle",thickness:P.value,offset:B.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const $=[c("svg",{class:"q-circular-progress__svg",style:p.value,viewBox:A.value,"aria-hidden":"true"},C)];return e.showValue===!0&&$.push(c("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},r.default!==void 0?r.default():[c("div",x.value)])),c("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:q.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:x.value},ce(r.internal,$))}}});const Oe=de({name:"AssignmentStatus",props:{},setup(e){return{reStore:fe(),aid:v("-"),ck:v("-"),assignmentTitle:v("-"),pageTitle:v("-"),pctComplete:v(0),points:v(0),goal:v(283),pgIdx:v(0),pgTot:v(0),imgIdx:v(0),imgTot:v(0),imgFit:v("-"),guideWords:v("-"),mapCoords:v("36.11,-115.17"),pageid:v("-"),pctReplace:v("-"),props:e}},mounted(){console.log(this.props);try{const e=this.reStore.courses.aid,r=this.reStore.courses.ck,f=this.reStore.courses[r].assignments[e];this.goal=f.goal,this.assignmentTitle=f.title,this.pgTot=f.pages.length,this.points=f.points}catch{}G(this.reStore.assignmentStatus,async(e,r)=>{console.log("watcher ",e,r),this.pctComplete=parseInt(parseFloat(e.points)/parseFloat(e.goal)*100),this.assignmentTitle=e.assignmentTitle,this.pageTitle=e.pageTitle,this.points=e.points,this.goal=e.goal,this.pgIdx=e.pgIdx,this.pgTot=e.pgTot,this.imgIdx=e.imgIdx,this.imgTot=e.imgTot,this.imgFit=e.imgFit,this.guideWords=e.guideWords,this.mapCoords=e.mapCoords,this.pageid=e.pageid,this.ck=e.ck,this.aid=e.aid,this.pctReplace=e.pctReplace})},methods:{speak(){console.log("AssignmentStatus.speak"),this.reStore.speak()},mapCB(){const e="https://maps.google.com/?ll="+this.mapCoords.split(",")[0]+","+this.mapCoords.split(",")[1];window.open(e,"_blank")},cycleFitMode(){const e=["scale-down","cover"];let r=e.indexOf(this.imgFit);r+=1,r>e.length-1&&(r=0),this.imgFit=e[r],this.reStore.page.imgFit=this.imgFit,this.reStore.assignmentStatus.imgFit=this.imgFit,console.log("fit: ",this.imgFit)},nextImg(){this.imgIdx=this.imgIdx+1>this.imgTot-1?0:this.imgIdx+1,console.log("AssignmentStatus nextImg",this.imgIdx,this.imgTot),this.reStore.setStatus("imgIdx",this.imgIdx)},toggleText(){H("#slideTextDiv").classed("hidden")===!0?H("#slideTextDiv").classed("hidden",!1):H("#slideTextDiv").classed("hidden",!0)},loadURL(e){console.log("loadURL ",e),window.open(e,"_blank")}}}),je={class:"text-weight-bolder text-center q-pa-md"},et={style:{border:"1px solid gray","border-radius":"5px"}},tt={width:"100%"},lt={style:{width:"50%","text-align":"center"}},it={style:{"text-align":"center"}},at=n("tr",null,[n("td",{style:{"text-align":"center"}},"% Complete"),n("td",{style:{"text-align":"center"}},"Speak Text")],-1),nt={style:{border:"1px solid gray","border-radius":"5px"},class:"q-my-md hidden"},rt={width:"100%"},st=n("td",null,"Page Title",-1),ot={style:{width:"50%"}},ct=n("td",null,"Course-Key",-1),dt={style:{width:"50%"}},ut=n("td",null,"Assgnmt Id",-1),ht={style:{width:"50%"}},ft=n("td",null,"WP Page Id",-1),gt={style:{width:"50%"}},mt=n("td",null,"Current Page",-1),vt=n("td",null,"Current Image",-1),kt={class:"float-left"},yt=n("td",null,"Image Fit",-1),_t={class:"align-left"},bt=n("td",null,"Guide Words",-1),xt={style:{width:"50%"}},St=n("td",null,"Percent Replace",-1),Ct=n("td",null,"Map Coords",-1),qt={class:"float-left"};function Tt(e,r,f,q,p,K){return he(),Fe(me,{flat:""},{default:I(()=>[y(ge,null,{default:I(()=>[n("div",je,"Points/Goal: "+S(this.points)+"/"+S(this.goal),1),n("div",et,[n("table",tt,[n("tr",null,[n("td",lt,[y(Xe,{"show-value":"","instant-feedback":"",value:this.pctComplete,size:"55px",thickness:.4,color:"grey-5","track-color":"secondary","center-color":"positive",class:"q-ma-md"},null,8,["value","thickness"])]),n("td",it,[y(Pe,{round:"",class:"q-pa-md",icon:"volume_up",color:"secondary",onClick:r[0]||(r[0]=d=>this.speak())})])]),at])]),n("div",nt,[n("table",rt,[n("tr",null,[st,n("td",ot,S(this.pageTitle),1)]),n("tr",null,[ct,n("td",dt,S(this.ck),1)]),n("tr",null,[ut,n("td",ht,S(this.aid),1)]),n("tr",null,[ft,n("td",gt,[n("a",{class:"bold_ptr float-left",onClick:r[1]||(r[1]=d=>this.loadURL(this.canonicalUrl))},S(this.pageid),1),y(T,{name:"link",class:"float-right"})])]),n("tr",null,[mt,n("td",{style:{width:"50%"},class:"ptr",onClick:r[2]||(r[2]=(...d)=>this.toggleText&&this.toggleText(...d))},[D(S(this.pgIdx+1)+" / "+S(this.pgTot)+" ",1),y(T,{name:"article",class:"float-right"})])]),n("tr",null,[vt,n("td",{style:{width:"50%"},class:"ptr",onClick:r[3]||(r[3]=(...d)=>this.nextImg&&this.nextImg(...d))},[n("span",kt,S(this.imgIdx+1)+" / "+S(this.imgTot),1),y(T,{name:"image",class:"float-right"})])]),n("tr",{class:"ptr",onClick:r[4]||(r[4]=(...d)=>this.cycleFitMode&&this.cycleFitMode(...d))},[yt,n("td",null,[n("span",_t,S(this.imgFit),1),y(T,{class:"float-right",name:"fit_screen"})])]),n("tr",null,[bt,n("td",xt,[D(S(this.guideWords.replaceAll(",",", "))+" ",1),y(T,{name:"tune",class:"float-right"})])]),n("tr",null,[St,n("td",null,[D(S(this.pctReplace)+" % ",1),y(T,{name:"tune",class:"float-right"})])]),n("tr",null,[Ct,n("td",{onClick:r[5]||(r[5]=(...d)=>this.mapCB&&this.mapCB(...d)),class:"ptr"},[n("span",qt,S(this.mapCoords.slice(0,13)),1),y(T,{class:"float-right",name:"place"})])])])])]),_:1})]),_:1})}var Mt=ue(Oe,[["render",Tt]]);const pt={xs:8,sm:10,md:14,lg:20,xl:24};var $t=Z({name:"QChip",props:{...ve,...se,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:r,emit:f}){const{proxy:{$q:q}}=X(),p=ke(e,q),K=oe(e,pt),d=g(()=>e.selected===!0||e.icon!==void 0),A=g(()=>e.selected===!0?e.iconSelected||q.iconSet.chip.selected:e.icon),x=g(()=>e.iconRemove||q.iconSet.chip.remove),B=g(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),P=g(()=>{const u=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(u?` text-${u} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(B.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(p.value===!0?" q-chip--dark q-dark":"")}),F=g(()=>{const u=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},b={...u,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||q.lang.label.remove};return{chip:u,remove:b}});function C(u){u.keyCode===13&&$(u)}function $(u){e.disable||(f("update:selected",!e.selected),f("click",u))}function w(u){(u.keyCode===void 0||u.keyCode===13)&&(J(u),e.disable===!1&&(f("update:modelValue",!1),f("remove")))}function N(){const u=[];B.value===!0&&u.push(c("div",{class:"q-focus-helper"})),d.value===!0&&u.push(c(T,{class:"q-chip__icon q-chip__icon--left",name:A.value}));const b=e.label!==void 0?[c("div",{class:"ellipsis"},[e.label])]:void 0;return u.push(c("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},ce(r.default,b))),e.iconRight&&u.push(c(T,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&u.push(c(T,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:x.value,...F.value.remove,onClick:w,onKeyup:w})),u}return()=>{if(e.modelValue===!1)return;const u={class:P.value,style:K.value};return B.value===!0&&Object.assign(u,F.value.chip,{onClick:$,onKeyup:C}),Qe("div",u,N(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[ze,e.ripple]])}}});const wt=["none","strict","leaf","leaf-filtered"];var Kt=Z({name:"QTree",props:{...ve,nodes:{type:Array,required:!0},nodeKey:{type:String,required:!0},labelKey:{type:String,default:"label"},childrenKey:{type:String,default:"children"},dense:Boolean,color:String,controlColor:String,textColor:String,selectedColor:String,icon:String,tickStrategy:{type:String,default:"none",validator:e=>wt.includes(e)},ticked:Array,expanded:Array,selected:{},noSelectionUnset:Boolean,defaultExpandAll:Boolean,accordion:Boolean,filter:String,filterMethod:Function,duration:Number,noConnectors:Boolean,noTransition:Boolean,noNodesLabel:String,noResultsLabel:String},emits:["update:expanded","update:ticked","update:selected","lazyLoad","afterShow","afterHide"],setup(e,{slots:r,emit:f}){const{proxy:q}=X(),{$q:p}=q,K=ke(e,p),d=v({}),A=v(e.ticked||[]),x=v(e.expanded||[]);let B={};Ne(()=>{B={}});const P=g(()=>`q-tree q-tree--${e.dense===!0?"dense":"standard"}`+(e.noConnectors===!0?" q-tree--no-connectors":"")+(K.value===!0?" q-tree--dark":"")+(e.color!==void 0?` text-${e.color}`:"")),F=g(()=>e.selected!==void 0),C=g(()=>e.icon||p.iconSet.tree.icon),$=g(()=>e.controlColor||e.color),w=g(()=>e.textColor!==void 0?` text-${e.textColor}`:""),N=g(()=>{const l=e.selectedColor||e.color;return l?` text-${l}`:""}),u=g(()=>e.filterMethod!==void 0?e.filterMethod:(l,i)=>{const t=i.toLowerCase();return l[e.labelKey]&&l[e.labelKey].toLowerCase().indexOf(t)>-1}),b=g(()=>{const l={},i=(t,s)=>{const a=t.tickStrategy||(s?s.tickStrategy:e.tickStrategy),h=t[e.nodeKey],m=t[e.childrenKey]&&t[e.childrenKey].length>0,Q=t.disabled!==!0&&F.value===!0&&t.selectable!==!1,_=t.disabled!==!0&&t.expandable!==!1,Be=a!=="none",L=a==="strict",ie=a==="leaf-filtered",U=a==="leaf"||a==="leaf-filtered";let W=t.disabled!==!0&&t.tickable!==!1;U===!0&&W===!0&&s&&s.tickable!==!0&&(W=!1);let z=t.lazy;z===!0&&d.value[h]!==void 0&&Array.isArray(t[e.childrenKey])===!0&&(z=d.value[h]);const o={key:h,parent:s,isParent:m,lazy:z,disabled:t.disabled,link:t.disabled!==!0&&(Q===!0||_===!0&&(m===!0||z===!0)),children:[],matchesFilter:e.filter?u.value(t,e.filter):!0,selected:h===e.selected&&Q===!0,selectable:Q,expanded:m===!0?x.value.includes(h):!1,expandable:_,noTick:t.noTick===!0||L!==!0&&z&&z!=="loaded",tickable:W,tickStrategy:a,hasTicking:Be,strictTicking:L,leafFilteredTicking:ie,leafTicking:U,ticked:L===!0?A.value.includes(h):m===!0?!1:A.value.includes(h)};if(l[h]=o,m===!0&&(o.children=t[e.childrenKey].map(k=>i(k,o)),e.filter&&(o.matchesFilter!==!0?o.matchesFilter=o.children.some(k=>k.matchesFilter):o.noTick!==!0&&o.disabled!==!0&&o.tickable===!0&&ie===!0&&o.children.every(k=>k.matchesFilter!==!0||k.noTick===!0||k.tickable!==!0)===!0&&(o.tickable=!1)),o.matchesFilter===!0&&(o.noTick!==!0&&L!==!0&&o.children.every(k=>k.noTick)===!0&&(o.noTick=!0),U))){if(o.ticked=!1,o.indeterminate=o.children.some(k=>k.indeterminate===!0),o.tickable=o.tickable===!0&&o.children.some(k=>k.tickable),o.indeterminate!==!0){const k=o.children.reduce((ae,Ie)=>Ie.ticked===!0?ae+1:ae,0);k===o.children.length?o.ticked=!0:k>0&&(o.indeterminate=!0)}o.indeterminate===!0&&(o.indeterminateNextState=o.children.every(k=>k.tickable!==!0||k.ticked!==!0))}return o};return e.nodes.forEach(t=>i(t,null)),l});G(()=>e.ticked,l=>{A.value=l}),G(()=>e.expanded,l=>{x.value=l});function E(l){const i=[].reduce,t=(s,a)=>{if(s||!a)return s;if(Array.isArray(a)===!0)return i.call(Object(a),t,s);if(a[e.nodeKey]===l)return a;if(a[e.childrenKey])return t(null,a[e.childrenKey])};return t(null,e.nodes)}function be(){return A.value.map(l=>E(l))}function xe(){return x.value.map(l=>E(l))}function Se(l){return l&&b.value[l]?b.value[l].expanded:!1}function Ce(){e.expanded!==void 0?f("update:expanded",[]):x.value=[]}function O(){const l=x.value,i=t=>{t[e.childrenKey]&&t[e.childrenKey].length>0&&t.expandable!==!1&&t.disabled!==!0&&(l.push(t[e.nodeKey]),t[e.childrenKey].forEach(i))};e.nodes.forEach(i),e.expanded!==void 0?f("update:expanded",l):x.value=l}function M(l,i,t=E(l),s=b.value[l]){if(s.lazy&&s.lazy!=="loaded"){if(s.lazy==="loading")return;d.value[l]="loading",Array.isArray(t[e.childrenKey])!==!0&&(t[e.childrenKey]=[]),f("lazyLoad",{node:t,key:l,done:a=>{d.value[l]="loaded",t[e.childrenKey]=Array.isArray(a)===!0?a:[],Ee(()=>{const h=b.value[l];h&&h.isParent===!0&&j(l,!0)})},fail:()=>{delete d.value[l],t[e.childrenKey].length===0&&delete t[e.childrenKey]}})}else s.isParent===!0&&s.expandable===!0&&j(l,i)}function j(l,i){let t=x.value;const s=e.expanded!==void 0;if(s===!0&&(t=t.slice()),i){if(e.accordion&&b.value[l]){const a=[];b.value[l].parent?b.value[l].parent.children.forEach(h=>{h.key!==l&&h.expandable===!0&&a.push(h.key)}):e.nodes.forEach(h=>{const m=h[e.nodeKey];m!==l&&a.push(m)}),a.length>0&&(t=t.filter(h=>a.includes(h)===!1))}t=t.concat([l]).filter((a,h,m)=>m.indexOf(a)===h)}else t=t.filter(a=>a!==l);s===!0?f("update:expanded",t):x.value=t}function qe(l){return l&&b.value[l]?b.value[l].ticked:!1}function R(l,i){let t=A.value;const s=e.ticked!==void 0;s===!0&&(t=t.slice()),i?t=t.concat(l).filter((a,h,m)=>m.indexOf(a)===h):t=t.filter(a=>l.includes(a)===!1),s===!0&&f("update:ticked",t)}function Te(l,i,t){const s={tree:q,node:l,key:t,color:e.color,dark:K.value};return ne(s,"expanded",()=>i.expanded,a=>{a!==i.expanded&&M(t,a)}),ne(s,"ticked",()=>i.ticked,a=>{a!==i.ticked&&R([t],a)}),s}function ee(l){return(e.filter?l.filter(i=>b.value[i[e.nodeKey]].matchesFilter):l).map(i=>Ke(i))}function pe(l){if(l.icon!==void 0)return c(T,{class:"q-tree__icon q-mr-sm",name:l.icon,color:l.iconColor});const i=l.img||l.avatar;if(i)return c("img",{class:`q-tree__${l.img?"img":"avatar"} q-mr-sm`,src:i})}function $e(){f("afterShow")}function we(){f("afterHide")}function Ke(l){const i=l[e.nodeKey],t=b.value[i],s=l.header&&r[`header-${l.header}`]||r["default-header"],a=t.isParent===!0?ee(l[e.childrenKey]):[],h=a.length>0||t.lazy&&t.lazy!=="loaded";let m=l.body&&r[`body-${l.body}`]||r["default-body"];const Q=s!==void 0||m!==void 0?Te(l,t,i):null;return m!==void 0&&(m=c("div",{class:"q-tree__node-body relative-position"},[c("div",{class:w.value},[m(Q)])])),c("div",{key:i,class:`q-tree__node relative-position q-tree__node--${h===!0?"parent":"child"}`},[c("div",{class:"q-tree__node-header relative-position row no-wrap items-center"+(t.link===!0?" q-tree__node--link q-hoverable q-focusable":"")+(t.selected===!0?" q-tree__node--selected":"")+(t.disabled===!0?" q-tree__node--disabled":""),tabindex:t.link===!0?0:-1,onClick:_=>{le(l,t,_)},onKeypress(_){Re(_)!==!0&&(_.keyCode===13?le(l,t,_,!0):_.keyCode===32&&V(l,t,_,!0))}},[c("div",{class:"q-focus-helper",tabindex:-1,ref:_=>{B[t.key]=_}}),t.lazy==="loading"?c(Le,{class:"q-tree__spinner",color:$.value}):h===!0?c(T,{class:"q-tree__arrow"+(t.expanded===!0?" q-tree__arrow--rotate":""),name:C.value,onClick(_){V(l,t,_)}}):null,t.hasTicking===!0&&t.noTick!==!0?c(Ge,{class:"q-tree__tickbox",modelValue:t.indeterminate===!0?null:t.ticked,color:$.value,dark:K.value,dense:!0,keepColor:!0,disable:t.tickable!==!0,onKeydown:J,"onUpdate:modelValue":_=>{Ae(t,_)}}):null,c("div",{class:"q-tree__node-header-content col row no-wrap items-center"+(t.selected===!0?N.value:w.value)},[s?s(Q):[pe(l),c("div",l[e.labelKey])]])]),h===!0?e.noTransition===!0?c("div",{class:"q-tree__node-collapsible"+w.value,key:`${i}__q`},[m,c("div",{class:"q-tree__children"+(t.disabled===!0?" q-tree__node--disabled":"")},t.expanded?a:null)]):c(We,{duration:e.duration,onShow:$e,onHide:we},()=>De(c("div",{class:"q-tree__node-collapsible"+w.value,key:`${i}__q`},[m,c("div",{class:"q-tree__children"+(t.disabled===!0?" q-tree__node--disabled":"")},a)]),[[Me,t.expanded]])):m])}function te(l){const i=B[l];i&&i.focus()}function le(l,i,t,s){s!==!0&&te(i.key),F.value&&i.selectable?e.noSelectionUnset===!1?f("update:selected",i.key!==e.selected?i.key:null):i.key!==e.selected&&f("update:selected",i.key===void 0?null:i.key):V(l,i,t,s),typeof l.handler=="function"&&l.handler(l)}function V(l,i,t,s){t!==void 0&&J(t),s!==!0&&te(i.key),M(i.key,!i.expanded,l,i)}function Ae(l,i){if(l.indeterminate===!0&&(i=l.indeterminateNextState),l.strictTicking)R([l.key],i);else if(l.leafTicking){const t=[],s=a=>{a.isParent?(i!==!0&&a.noTick!==!0&&a.tickable===!0&&t.push(a.key),a.leafTicking===!0&&a.children.forEach(s)):a.noTick!==!0&&a.tickable===!0&&(a.leafFilteredTicking!==!0||a.matchesFilter===!0)&&t.push(a.key)};s(l),R(t,i)}}return e.defaultExpandAll===!0&&O(),Object.assign(q,{getNodeByKey:E,getTickedNodes:be,getExpandedNodes:xe,isExpanded:Se,collapseAll:Ce,expandAll:O,setExpanded:M,isTicked:qe,setTicked:R}),()=>{const l=ee(e.nodes);return c("div",{class:P.value},l.length===0?e.filter?e.noResultsLabel||p.lang.tree.noResults:e.noNodesLabel||p.lang.tree.noNodes:l)}}});const At=de({name:"DocumentationComponent",setup(){return{reStore:fe(),selected:v(null),docTree:[{label:"Welcome",icon:"waving_hand",children:[{label:"What is Reading Edge?"},{label:"Important concepts"}]},{label:"Demo Assignments",icon:"collections_bookmark",children:[{label:"Things to point out"}]},{label:"Your Account",icon:"person",children:[{label:"Why login?"},{label:"Teacher and Student"},{label:"Courses and Assignments"},{label:"Preferences"}]},{label:"Assignment Builder",icon:"build",children:[{label:"Assignment Pieces"},{label:"Assignment Flow"}]},{label:"History of Reading Edge",icon:"history",children:[{label:"Previous incarnations"}]}]}},methods:{updateSelected(e){console.log("updateSelected ",e),e?(e=e.toLowerCase().replace("?","").replaceAll(" ","_"),this.reStore.router.push(`/${this.reStore.role}/doc/${e}`)):this.reStore.router.push(`/${this.reStore.role}/doc/welcome`)}}}),Bt={class:"q-pa-md",style:{"max-width":"350px"}};function It(e,r,f,q,p,K){return he(),Ve("div",Bt,[y(Je,{bordered:"",class:"rounded-borders"},{default:I(()=>[y(He,null,{header:I(()=>[y(re,{avatar:""},{default:I(()=>[y($t,{icon:"article",color:"primary","text-color":"white"})]),_:1}),y(re,null,{default:I(()=>[D(" Documentation ")]),_:1})]),default:I(()=>[y(me,null,{default:I(()=>[y(ge,null,{default:I(()=>[y(Kt,{nodes:this.docTree,selected:e.selected,"onUpdate:selected":[r[0]||(r[0]=d=>e.selected=d),this.updateSelected],"node-key":"label","no-connectors":""},null,8,["nodes","selected","onUpdate:selected"])]),_:1})]),_:1})]),_:1})]),_:1})])}var Vt=ue(At,[["render",It]]);export{Mt as A,Vt as D,Xe as Q,$t as a,Ye as u};
