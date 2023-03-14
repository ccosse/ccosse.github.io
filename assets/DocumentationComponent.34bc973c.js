import{ar as Ke,g as N,as as Ee,h as o,i,at as Ae,q as H,W as he,X as Ne,r as z,$ as ze,J as te,x as Qe,j as ae,m as _e,an as Pe,aw as Oe,v as V,p as Fe,a0 as Re,ay as je,a1 as ne,K as qe,az as Ce,aA as ye,aB as De,d as He,_ as Me,o as Ue,ag as Ve,a as U,w as ee}from"./index.5d510624.js";import{b as We,u as Ge}from"./re-store.98289c03.js";import{Q as Ye}from"./QCheckbox.7a663749.js";import{u as W,a as G,d as ke}from"./use-dark.0597b58a.js";import{Q as Je,a as Xe}from"./use-form.d67bad88.js";import{u as Ze,a as pe,c as et}from"./scroll.cf55cad8.js";const tt={...Ke,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},ge=50,Te=2*ge,we=Te*Math.PI,nt=Math.round(we*1e3)/1e3;var kt=N({name:"QCircularProgress",props:{...tt,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:g}){const{proxy:{$q:d}}=H(),h=Ee(e),y=o(()=>{const k=(d.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(d.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-k}deg)`:`rotate3d(0, 0, 1, ${k-90}deg)`}}),b=o(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),s=o(()=>Te/(1-e.thickness/2)),S=o(()=>`${s.value/2} ${s.value/2} ${s.value} ${s.value}`),f=o(()=>We(e.value,e.min,e.max)),L=o(()=>we*(1-(f.value-e.min)/(e.max-e.min))),_=o(()=>e.thickness/2*s.value);function q({thickness:k,offset:$,color:E,cls:c,rounded:B}){return i("circle",{class:"q-circular-progress__"+c+(E!==void 0?` text-${E}`:""),style:b.value,fill:"transparent",stroke:"currentColor","stroke-width":k,"stroke-dasharray":nt,"stroke-dashoffset":$,"stroke-linecap":B,cx:s.value,cy:s.value,r:ge})}return()=>{const k=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&k.push(i("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:ge-_.value/2,cx:s.value,cy:s.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&k.push(q({cls:"track",thickness:_.value,offset:0,color:e.trackColor})),k.push(q({cls:"circle",thickness:_.value,offset:L.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const $=[i("svg",{class:"q-circular-progress__svg",style:y.value,viewBox:S.value,"aria-hidden":"true"},k)];return e.showValue===!0&&$.push(i("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},g.default!==void 0?g.default():[i("div",f.value)])),i("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:h.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:f.value},Ae(g.internal,$))}}}),at=N({name:"QItem",props:{...W,...he,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:g,emit:d}){const{proxy:{$q:h}}=H(),y=G(e,h),{hasLink:b,linkAttrs:s,linkClass:S,linkTag:f,navigateOnClick:L}=Ne(),_=z(null),q=z(null),k=o(()=>e.clickable===!0||b.value===!0||e.tag==="label"),$=o(()=>e.disable!==!0&&k.value===!0),E=o(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(y.value===!0?" q-item--dark":"")+(b.value===!0&&e.active===null?S.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+($.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),c=o(()=>{if(e.insetLevel===void 0)return null;const C=h.lang.rtl===!0?"Right":"Left";return{["padding"+C]:16+e.insetLevel*56+"px"}});function B(C){$.value===!0&&(q.value!==null&&(C.qKeyEvent!==!0&&document.activeElement===_.value?q.value.focus():document.activeElement===q.value&&_.value.focus()),L(C))}function x(C){if($.value===!0&&ze(C,13)===!0){te(C),C.qKeyEvent=!0;const F=new MouseEvent("click",C);F.qKeyEvent=!0,_.value.dispatchEvent(F)}d("keyup",C)}function I(){const C=Qe(g.default,[]);return $.value===!0&&C.unshift(i("div",{class:"q-focus-helper",tabindex:-1,ref:q})),C}return()=>{const C={ref:_,class:E.value,style:c.value,role:"listitem",onClick:B,onKeyup:x};return $.value===!0?(C.tabindex=e.tabindex||"0",Object.assign(C,s.value)):k.value===!0&&(C["aria-disabled"]="true"),i(f.value,C,I())}}}),fe=N({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:g}){const d=o(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>i("div",{class:d.value},ae(g.default))}}),xe=N({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:g}){const d=o(()=>parseInt(e.lines,10)),h=o(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(d.value===1?" ellipsis":"")),y=o(()=>e.lines!==void 0&&d.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":d.value}:null);return()=>i("div",{style:y.value,class:h.value},ae(g.default))}}),$e=N({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:g,emit:d}){let h=!1,y,b,s=null,S=null,f,L;function _(){y&&y(),y=null,h=!1,s!==null&&(clearTimeout(s),s=null),S!==null&&(clearTimeout(S),S=null),b!==void 0&&b.removeEventListener("transitionend",f),f=null}function q(c,B,x){c.style.overflowY="hidden",B!==void 0&&(c.style.height=`${B}px`),c.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,h=!0,y=x}function k(c,B){c.style.overflowY=null,c.style.height=null,c.style.transition=null,_(),B!==L&&d(B)}function $(c,B){let x=0;b=c,h===!0?(_(),x=c.offsetHeight===c.scrollHeight?0:void 0):L="hide",q(c,x,B),s=setTimeout(()=>{s=null,c.style.height=`${c.scrollHeight}px`,f=I=>{S=null,(Object(I)!==I||I.target===c)&&k(c,"show")},c.addEventListener("transitionend",f),S=setTimeout(f,e.duration*1.1)},100)}function E(c,B){let x;b=c,h===!0?_():(L="show",x=c.scrollHeight),q(c,x,B),s=setTimeout(()=>{s=null,c.style.height=0,f=I=>{S=null,(Object(I)!==I||I.target===c)&&k(c,"hide")},c.addEventListener("transitionend",f),S=setTimeout(f,e.duration*1.1)},100)}return _e(()=>{h===!0&&_()}),()=>i(Pe,{css:!1,appear:e.appear,onEnter:$,onLeave:E},g.default)}});const lt=["none","strict","leaf","leaf-filtered"];var it=N({name:"QTree",props:{...W,nodes:{type:Array,required:!0},nodeKey:{type:String,required:!0},labelKey:{type:String,default:"label"},childrenKey:{type:String,default:"children"},dense:Boolean,color:String,controlColor:String,textColor:String,selectedColor:String,icon:String,tickStrategy:{type:String,default:"none",validator:e=>lt.includes(e)},ticked:Array,expanded:Array,selected:{},noSelectionUnset:Boolean,defaultExpandAll:Boolean,accordion:Boolean,filter:String,filterMethod:Function,duration:Number,noConnectors:Boolean,noTransition:Boolean,noNodesLabel:String,noResultsLabel:String},emits:["update:expanded","update:ticked","update:selected","lazyLoad","afterShow","afterHide"],setup(e,{slots:g,emit:d}){const{proxy:h}=H(),{$q:y}=h,b=G(e,y),s=z({}),S=z(e.ticked||[]),f=z(e.expanded||[]);let L={};Oe(()=>{L={}});const _=o(()=>`q-tree q-tree--${e.dense===!0?"dense":"standard"}`+(e.noConnectors===!0?" q-tree--no-connectors":"")+(b.value===!0?" q-tree--dark":"")+(e.color!==void 0?` text-${e.color}`:"")),q=o(()=>e.selected!==void 0),k=o(()=>e.icon||y.iconSet.tree.icon),$=o(()=>e.controlColor||e.color),E=o(()=>e.textColor!==void 0?` text-${e.textColor}`:""),c=o(()=>{const n=e.selectedColor||e.color;return n?` text-${n}`:""}),B=o(()=>e.filterMethod!==void 0?e.filterMethod:(n,a)=>{const t=a.toLowerCase();return n[e.labelKey]&&n[e.labelKey].toLowerCase().indexOf(t)>-1}),x=o(()=>{const n={},a=(t,u)=>{const l=t.tickStrategy||(u?u.tickStrategy:e.tickStrategy),m=t[e.nodeKey],T=t[e.childrenKey]&&t[e.childrenKey].length>0,j=t.disabled!==!0&&q.value===!0&&t.selectable!==!1,K=t.disabled!==!0&&t.expandable!==!1,Le=l!=="none",p=l==="strict",be=l==="leaf-filtered",se=l==="leaf"||l==="leaf-filtered";let de=t.disabled!==!0&&t.tickable!==!1;se===!0&&de===!0&&u&&u.tickable!==!0&&(de=!1);let D=t.lazy;D===!0&&s.value[m]!==void 0&&Array.isArray(t[e.childrenKey])===!0&&(D=s.value[m]);const v={key:m,parent:u,isParent:T,lazy:D,disabled:t.disabled,link:t.disabled!==!0&&(j===!0||K===!0&&(T===!0||D===!0)),children:[],matchesFilter:e.filter?B.value(t,e.filter):!0,selected:m===e.selected&&j===!0,selectable:j,expanded:T===!0?f.value.includes(m):!1,expandable:K,noTick:t.noTick===!0||p!==!0&&D&&D!=="loaded",tickable:de,tickStrategy:l,hasTicking:Le,strictTicking:p,leafFilteredTicking:be,leafTicking:se,ticked:p===!0?S.value.includes(m):T===!0?!1:S.value.includes(m)};if(n[m]=v,T===!0&&(v.children=t[e.childrenKey].map(w=>a(w,v)),e.filter&&(v.matchesFilter!==!0?v.matchesFilter=v.children.some(w=>w.matchesFilter):v.noTick!==!0&&v.disabled!==!0&&v.tickable===!0&&be===!0&&v.children.every(w=>w.matchesFilter!==!0||w.noTick===!0||w.tickable!==!0)===!0&&(v.tickable=!1)),v.matchesFilter===!0&&(v.noTick!==!0&&p!==!0&&v.children.every(w=>w.noTick)===!0&&(v.noTick=!0),se))){if(v.ticked=!1,v.indeterminate=v.children.some(w=>w.indeterminate===!0),v.tickable=v.tickable===!0&&v.children.some(w=>w.tickable),v.indeterminate!==!0){const w=v.children.reduce((me,Ie)=>Ie.ticked===!0?me+1:me,0);w===v.children.length?v.ticked=!0:w>0&&(v.indeterminate=!0)}v.indeterminate===!0&&(v.indeterminateNextState=v.children.every(w=>w.tickable!==!0||w.ticked!==!0))}return v};return e.nodes.forEach(t=>a(t,null)),n});V(()=>e.ticked,n=>{S.value=n}),V(()=>e.expanded,n=>{f.value=n});function I(n){const a=[].reduce,t=(u,l)=>{if(u||!l)return u;if(Array.isArray(l)===!0)return a.call(Object(l),t,u);if(l[e.nodeKey]===n)return l;if(l[e.childrenKey])return t(null,l[e.childrenKey])};return t(null,e.nodes)}function C(){return S.value.map(n=>I(n))}function F(){return f.value.map(n=>I(n))}function Y(n){return n&&x.value[n]?x.value[n].expanded:!1}function le(){e.expanded!==void 0?d("update:expanded",[]):f.value=[]}function J(){const n=f.value,a=t=>{t[e.childrenKey]&&t[e.childrenKey].length>0&&t.expandable!==!1&&t.disabled!==!0&&(n.push(t[e.nodeKey]),t[e.childrenKey].forEach(a))};e.nodes.forEach(a),e.expanded!==void 0?d("update:expanded",n):f.value=n}function R(n,a,t=I(n),u=x.value[n]){if(u.lazy&&u.lazy!=="loaded"){if(u.lazy==="loading")return;s.value[n]="loading",Array.isArray(t[e.childrenKey])!==!0&&(t[e.childrenKey]=[]),d("lazyLoad",{node:t,key:n,done:l=>{s.value[n]="loaded",t[e.childrenKey]=Array.isArray(l)===!0?l:[],Fe(()=>{const m=x.value[n];m&&m.isParent===!0&&X(n,!0)})},fail:()=>{delete s.value[n],t[e.childrenKey].length===0&&delete t[e.childrenKey]}})}else u.isParent===!0&&u.expandable===!0&&X(n,a)}function X(n,a){let t=f.value;const u=e.expanded!==void 0;if(u===!0&&(t=t.slice()),a){if(e.accordion&&x.value[n]){const l=[];x.value[n].parent?x.value[n].parent.children.forEach(m=>{m.key!==n&&m.expandable===!0&&l.push(m.key)}):e.nodes.forEach(m=>{const T=m[e.nodeKey];T!==n&&l.push(T)}),l.length>0&&(t=t.filter(m=>l.includes(m)===!1))}t=t.concat([n]).filter((l,m,T)=>T.indexOf(l)===m)}else t=t.filter(l=>l!==n);u===!0?d("update:expanded",t):f.value=t}function ie(n){return n&&x.value[n]?x.value[n].ticked:!1}function Q(n,a){let t=S.value;const u=e.ticked!==void 0;u===!0&&(t=t.slice()),a?t=t.concat(n).filter((l,m,T)=>T.indexOf(l)===m):t=t.filter(l=>n.includes(l)===!1),u===!0&&d("update:ticked",t)}function re(n,a,t){const u={tree:h,node:n,key:t,color:e.color,dark:b.value};return ye(u,"expanded",()=>a.expanded,l=>{l!==a.expanded&&R(t,l)}),ye(u,"ticked",()=>a.ticked,l=>{l!==a.ticked&&Q([t],l)}),u}function Z(n){return(e.filter?n.filter(a=>x.value[a[e.nodeKey]].matchesFilter):n).map(a=>r(a))}function oe(n){if(n.icon!==void 0)return i(ne,{class:"q-tree__icon q-mr-sm",name:n.icon,color:n.iconColor});const a=n.img||n.avatar;if(a)return i("img",{class:`q-tree__${n.img?"img":"avatar"} q-mr-sm`,src:a})}function ue(){d("afterShow")}function ce(){d("afterHide")}function r(n){const a=n[e.nodeKey],t=x.value[a],u=n.header&&g[`header-${n.header}`]||g["default-header"],l=t.isParent===!0?Z(n[e.childrenKey]):[],m=l.length>0||t.lazy&&t.lazy!=="loaded";let T=n.body&&g[`body-${n.body}`]||g["default-body"];const j=u!==void 0||T!==void 0?re(n,t,a):null;return T!==void 0&&(T=i("div",{class:"q-tree__node-body relative-position"},[i("div",{class:E.value},[T(j)])])),i("div",{key:a,class:`q-tree__node relative-position q-tree__node--${m===!0?"parent":"child"}`},[i("div",{class:"q-tree__node-header relative-position row no-wrap items-center"+(t.link===!0?" q-tree__node--link q-hoverable q-focusable":"")+(t.selected===!0?" q-tree__node--selected":"")+(t.disabled===!0?" q-tree__node--disabled":""),tabindex:t.link===!0?0:-1,onClick:K=>{P(n,t,K)},onKeypress(K){Re(K)!==!0&&(K.keyCode===13?P(n,t,K,!0):K.keyCode===32&&M(n,t,K,!0))}},[i("div",{class:"q-focus-helper",tabindex:-1,ref:K=>{L[t.key]=K}}),t.lazy==="loading"?i(je,{class:"q-tree__spinner",color:$.value}):m===!0?i(ne,{class:"q-tree__arrow"+(t.expanded===!0?" q-tree__arrow--rotate":""),name:k.value,onClick(K){M(n,t,K)}}):null,t.hasTicking===!0&&t.noTick!==!0?i(Ye,{class:"q-tree__tickbox",modelValue:t.indeterminate===!0?null:t.ticked,color:$.value,dark:b.value,dense:!0,keepColor:!0,disable:t.tickable!==!0,onKeydown:te,"onUpdate:modelValue":K=>{Be(t,K)}}):null,i("div",{class:"q-tree__node-header-content col row no-wrap items-center"+(t.selected===!0?c.value:E.value)},[u?u(j):[oe(n),i("div",n[e.labelKey])]])]),m===!0?e.noTransition===!0?i("div",{class:"q-tree__node-collapsible"+E.value,key:`${a}__q`},[T,i("div",{class:"q-tree__children"+(t.disabled===!0?" q-tree__node--disabled":"")},t.expanded?l:null)]):i($e,{duration:e.duration,onShow:ue,onHide:ce},()=>qe(i("div",{class:"q-tree__node-collapsible"+E.value,key:`${a}__q`},[T,i("div",{class:"q-tree__children"+(t.disabled===!0?" q-tree__node--disabled":"")},l)]),[[Ce,t.expanded]])):T])}function A(n){const a=L[n];a&&a.focus()}function P(n,a,t,u){u!==!0&&A(a.key),q.value&&a.selectable?e.noSelectionUnset===!1?d("update:selected",a.key!==e.selected?a.key:null):a.key!==e.selected&&d("update:selected",a.key===void 0?null:a.key):M(n,a,t,u),typeof n.handler=="function"&&n.handler(n)}function M(n,a,t,u){t!==void 0&&te(t),u!==!0&&A(a.key),R(a.key,!a.expanded,n,a)}function Be(n,a){if(n.indeterminate===!0&&(a=n.indeterminateNextState),n.strictTicking)Q([n.key],a);else if(n.leafTicking){const t=[],u=l=>{l.isParent?(a!==!0&&l.noTick!==!0&&l.tickable===!0&&t.push(l.key),l.leafTicking===!0&&l.children.forEach(u)):l.noTick!==!0&&l.tickable===!0&&(l.leafFilteredTicking!==!0||l.matchesFilter===!0)&&t.push(l.key)};u(n),Q(t,a)}}return e.defaultExpandAll===!0&&J(),Object.assign(h,{getNodeByKey:I,getTickedNodes:C,getExpandedNodes:F,isExpanded:Y,collapseAll:le,expandAll:J,setExpanded:R,isTicked:ie,setTicked:Q}),()=>{const n=Z(e.nodes);return i("div",{class:_.value},n.length===0?e.filter?e.noResultsLabel||y.lang.tree.noResults:e.noNodesLabel||y.lang.tree.noNodes:n)}}});const rt={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},ve={xs:2,sm:4,md:8,lg:16,xl:24};var Se=N({name:"QSeparator",props:{...W,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const g=H(),d=G(e,g.proxy.$q),h=o(()=>e.vertical===!0?"vertical":"horizontal"),y=o(()=>` q-separator--${h.value}`),b=o(()=>e.inset!==!1?`${y.value}-${rt[e.inset]}`:""),s=o(()=>`q-separator${y.value}${b.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(d.value===!0?" q-separator--dark":"")),S=o(()=>{const f={};if(e.size!==void 0&&(f[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const L=e.spaced===!0?`${ve.md}px`:e.spaced in ve?`${ve[e.spaced]}px`:e.spaced,_=e.vertical===!0?["Left","Right"]:["Top","Bottom"];f[`margin${_[0]}`]=f[`margin${_[1]}`]=L}return f});return()=>i("hr",{class:s.value,style:S.value,"aria-orientation":h.value})}});const O=De({}),ot=Object.keys(he);var ut=N({name:"QExpansionItem",props:{...he,...Ze,...W,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...pe,"click","afterShow","afterHide"],setup(e,{slots:g,emit:d}){const{proxy:{$q:h}}=H(),y=G(e,h),b=z(e.modelValue!==null?e.modelValue:e.defaultOpened),s=z(null),S=ke(),{show:f,hide:L,toggle:_}=et({showing:b});let q,k;const $=o(()=>`q-expansion-item q-item-type q-expansion-item--${b.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),E=o(()=>{if(e.contentInsetLevel===void 0)return null;const r=h.lang.rtl===!0?"Right":"Left";return{["padding"+r]:e.contentInsetLevel*56+"px"}}),c=o(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),B=o(()=>{const r={};return ot.forEach(A=>{r[A]=e[A]}),r}),x=o(()=>c.value===!0||e.expandIconToggle!==!0),I=o(()=>e.expandedIcon!==void 0&&b.value===!0?e.expandedIcon:e.expandIcon||h.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),C=o(()=>e.disable!==!0&&(c.value===!0||e.expandIconToggle===!0)),F=o(()=>({expanded:b.value===!0,detailsId:e.targetUid,toggle:_,show:f,hide:L})),Y=o(()=>{const r=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:h.lang.label[b.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":b.value===!0?"true":"false","aria-controls":S,"aria-label":r}});V(()=>e.group,r=>{k!==void 0&&k(),r!==void 0&&Q()});function le(r){c.value!==!0&&_(r),d("click",r)}function J(r){r.keyCode===13&&R(r,!0)}function R(r,A){A!==!0&&s.value!==null&&s.value.focus(),_(r),te(r)}function X(){d("afterShow")}function ie(){d("afterHide")}function Q(){q===void 0&&(q=ke()),b.value===!0&&(O[e.group]=q);const r=V(b,P=>{P===!0?O[e.group]=q:O[e.group]===q&&delete O[e.group]}),A=V(()=>O[e.group],(P,M)=>{M===q&&P!==void 0&&P!==q&&L()});k=()=>{r(),A(),O[e.group]===q&&delete O[e.group],k=void 0}}function re(){const r={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},A=[i(ne,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&b.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:I.value})];return C.value===!0&&(Object.assign(r,{tabindex:0,...Y.value,onClick:R,onKeyup:J}),A.unshift(i("div",{ref:s,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),i(fe,r,()=>A)}function Z(){let r;return g.header!==void 0?r=[].concat(g.header(F.value)):(r=[i(fe,()=>[i(xe,{lines:e.labelLines},()=>e.label||""),e.caption?i(xe,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&r[e.switchToggleSide===!0?"push":"unshift"](i(fe,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>i(ne,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&r[e.switchToggleSide===!0?"unshift":"push"](re()),r}function oe(){const r={ref:"item",style:e.headerStyle,class:e.headerClass,dark:y.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return x.value===!0&&(r.clickable=!0,r.onClick=le,Object.assign(r,c.value===!0?B.value:Y.value)),i(at,r,Z)}function ue(){return qe(i("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:E.value,id:S},ae(g.default)),[[Ce,b.value]])}function ce(){const r=[oe(),i($e,{duration:e.duration,onShow:X,onHide:ie},ue)];return e.expandSeparator===!0&&r.push(i(Se,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:y.value}),i(Se,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:y.value})),r}return e.group!==void 0&&Q(),_e(()=>{k!==void 0&&k()}),()=>i("div",{class:$.value},[i("div",{class:"q-expansion-item__container relative-position"},ce())])}}),ct=N({name:"QList",props:{...W,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:g}){const d=H(),h=G(e,d.proxy.$q),y=o(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(h.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>i(e.tag,{class:y.value},ae(g.default))}});const st=He({name:"DocumentationComponent",setup(){return{reStore:Ge(),selected:z(null),docTree:[{label:"Welcome",icon:"waving_hand",children:[{label:"What is Reading Edge?"},{label:"Important concepts"}]},{label:"Demo Assignments",icon:"collections_bookmark",children:[{label:"Things to point out"}]},{label:"Your Account",icon:"person",children:[{label:"Why login?"},{label:"Teacher and Student"},{label:"Courses and Assignments"},{label:"Preferences"}]},{label:"Assignment Builder",icon:"build",children:[{label:"Assignment Pieces"},{label:"Assignment Flow"}]},{label:"History of Reading Edge",icon:"history",children:[{label:"Previous incarnations"}]}]}},methods:{updateSelected(e){console.log("updateSelected ",e),e?(e=e.toLowerCase().replace("?","").replaceAll(" ","_"),this.reStore.router.push(`/${this.reStore.role}/doc/${e}`)):this.reStore.router.push(`/${this.reStore.role}/doc/welcome`)}}}),dt={class:"q-pa-md",style:{"max-width":"350px"}};function ft(e,g,d,h,y,b){return Ue(),Ve("div",dt,[U(ct,{bordered:"",class:"rounded-borders"},{default:ee(()=>[U(ut,{label:"Documentation"},{default:ee(()=>[U(Je,null,{default:ee(()=>[U(Xe,null,{default:ee(()=>[U(it,{nodes:this.docTree,selected:e.selected,"onUpdate:selected":[g[0]||(g[0]=s=>e.selected=s),this.updateSelected],"node-key":"label","no-connectors":""},null,8,["nodes","selected","onUpdate:selected"])]),_:1})]),_:1})]),_:1})]),_:1})])}var xt=Me(st,[["render",ft]]);export{xt as D,ut as Q,ct as a,kt as b,fe as c,xe as d,at as e,Se as f,tt as u};
