import{ar as be,g as te,as as me,h,i as o,at as xe,q as le,r as P,aw as _e,v as G,p as Se,a0 as Ce,ay as qe,a1 as X,J as Z,K as Te,az as we,aA as p,d as Ke,_ as $e,o as Ae,ag as Ee,a as m,w as q,aB as ze,af as Be}from"./index.bfda73c0.js";import{b as Qe,u as Ne}from"./re-store.f5907093.js";import{d as Pe,Q as Fe,a as ee}from"./QExpansionItem.7e12895b.js";import{Q as De}from"./QCheckbox.e8b315c0.js";import{u as Le,a as Me}from"./use-dark.1951f157.js";import{Q as Ie}from"./use-form.5df6b910.js";import{Q as Oe}from"./QCard.e9cf6e46.js";import{Q as Re}from"./QList.0e77bfbf.js";const Ue={...be,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},R=50,re=2*R,ae=re*Math.PI,Ve=Math.round(ae*1e3)/1e3;var at=te({name:"QCircularProgress",props:{...Ue,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:v}){const{proxy:{$q:k}}=le(),T=me(e),x=h(()=>{const g=(k.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(k.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-g}deg)`:`rotate3d(0, 0, 1, ${g-90}deg)`}}),w=h(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),s=h(()=>re/(1-e.thickness/2)),_=h(()=>`${s.value/2} ${s.value/2} ${s.value} ${s.value}`),y=h(()=>Qe(e.value,e.min,e.max)),A=h(()=>ae*(1-(y.value-e.min)/(e.max-e.min))),E=h(()=>e.thickness/2*s.value);function z({thickness:g,offset:S,color:C,cls:F,rounded:D}){return o("circle",{class:"q-circular-progress__"+F+(C!==void 0?` text-${C}`:""),style:w.value,fill:"transparent",stroke:"currentColor","stroke-width":g,"stroke-dasharray":Ve,"stroke-dashoffset":S,"stroke-linecap":D,cx:s.value,cy:s.value,r:R})}return()=>{const g=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&g.push(o("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:R-E.value/2,cx:s.value,cy:s.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&g.push(z({cls:"track",thickness:E.value,offset:0,color:e.trackColor})),g.push(z({cls:"circle",thickness:E.value,offset:A.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const S=[o("svg",{class:"q-circular-progress__svg",style:x.value,viewBox:_.value,"aria-hidden":"true"},g)];return e.showValue===!0&&S.push(o("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},v.default!==void 0?v.default():[o("div",y.value)])),o("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:T.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:y.value},xe(v.internal,S))}}});const He=["none","strict","leaf","leaf-filtered"];var We=te({name:"QTree",props:{...Le,nodes:{type:Array,required:!0},nodeKey:{type:String,required:!0},labelKey:{type:String,default:"label"},childrenKey:{type:String,default:"children"},dense:Boolean,color:String,controlColor:String,textColor:String,selectedColor:String,icon:String,tickStrategy:{type:String,default:"none",validator:e=>He.includes(e)},ticked:Array,expanded:Array,selected:{},noSelectionUnset:Boolean,defaultExpandAll:Boolean,accordion:Boolean,filter:String,filterMethod:Function,duration:Number,noConnectors:Boolean,noTransition:Boolean,noNodesLabel:String,noResultsLabel:String},emits:["update:expanded","update:ticked","update:selected","lazyLoad","afterShow","afterHide"],setup(e,{slots:v,emit:k}){const{proxy:T}=le(),{$q:x}=T,w=Me(e,x),s=P({}),_=P(e.ticked||[]),y=P(e.expanded||[]);let A={};_e(()=>{A={}});const E=h(()=>`q-tree q-tree--${e.dense===!0?"dense":"standard"}`+(e.noConnectors===!0?" q-tree--no-connectors":"")+(w.value===!0?" q-tree--dark":"")+(e.color!==void 0?` text-${e.color}`:"")),z=h(()=>e.selected!==void 0),g=h(()=>e.icon||x.iconSet.tree.icon),S=h(()=>e.controlColor||e.color),C=h(()=>e.textColor!==void 0?` text-${e.textColor}`:""),F=h(()=>{const l=e.selectedColor||e.color;return l?` text-${l}`:""}),D=h(()=>e.filterMethod!==void 0?e.filterMethod:(l,r)=>{const t=r.toLowerCase();return l[e.labelKey]&&l[e.labelKey].toLowerCase().indexOf(t)>-1}),b=h(()=>{const l={},r=(t,n)=>{const a=t.tickStrategy||(n?n.tickStrategy:e.tickStrategy),c=t[e.nodeKey],d=t[e.childrenKey]&&t[e.childrenKey].length>0,K=t.disabled!==!0&&z.value===!0&&t.selectable!==!1,f=t.disabled!==!0&&t.expandable!==!1,ye=a!=="none",N=a==="strict",J=a==="leaf-filtered",I=a==="leaf"||a==="leaf-filtered";let O=t.disabled!==!0&&t.tickable!==!1;I===!0&&O===!0&&n&&n.tickable!==!0&&(O=!1);let $=t.lazy;$===!0&&s.value[c]!==void 0&&Array.isArray(t[e.childrenKey])===!0&&($=s.value[c]);const i={key:c,parent:n,isParent:d,lazy:$,disabled:t.disabled,link:t.disabled!==!0&&(K===!0||f===!0&&(d===!0||$===!0)),children:[],matchesFilter:e.filter?D.value(t,e.filter):!0,selected:c===e.selected&&K===!0,selectable:K,expanded:d===!0?y.value.includes(c):!1,expandable:f,noTick:t.noTick===!0||N!==!0&&$&&$!=="loaded",tickable:O,tickStrategy:a,hasTicking:ye,strictTicking:N,leafFilteredTicking:J,leafTicking:I,ticked:N===!0?_.value.includes(c):d===!0?!1:_.value.includes(c)};if(l[c]=i,d===!0&&(i.children=t[e.childrenKey].map(u=>r(u,i)),e.filter&&(i.matchesFilter!==!0?i.matchesFilter=i.children.some(u=>u.matchesFilter):i.noTick!==!0&&i.disabled!==!0&&i.tickable===!0&&J===!0&&i.children.every(u=>u.matchesFilter!==!0||u.noTick===!0||u.tickable!==!0)===!0&&(i.tickable=!1)),i.matchesFilter===!0&&(i.noTick!==!0&&N!==!0&&i.children.every(u=>u.noTick)===!0&&(i.noTick=!0),I))){if(i.ticked=!1,i.indeterminate=i.children.some(u=>u.indeterminate===!0),i.tickable=i.tickable===!0&&i.children.some(u=>u.tickable),i.indeterminate!==!0){const u=i.children.reduce((Y,ge)=>ge.ticked===!0?Y+1:Y,0);u===i.children.length?i.ticked=!0:u>0&&(i.indeterminate=!0)}i.indeterminate===!0&&(i.indeterminateNextState=i.children.every(u=>u.tickable!==!0||u.ticked!==!0))}return i};return e.nodes.forEach(t=>r(t,null)),l});G(()=>e.ticked,l=>{_.value=l}),G(()=>e.expanded,l=>{y.value=l});function B(l){const r=[].reduce,t=(n,a)=>{if(n||!a)return n;if(Array.isArray(a)===!0)return r.call(Object(a),t,n);if(a[e.nodeKey]===l)return a;if(a[e.childrenKey])return t(null,a[e.childrenKey])};return t(null,e.nodes)}function ne(){return _.value.map(l=>B(l))}function ie(){return y.value.map(l=>B(l))}function ce(l){return l&&b.value[l]?b.value[l].expanded:!1}function oe(){e.expanded!==void 0?k("update:expanded",[]):y.value=[]}function U(){const l=y.value,r=t=>{t[e.childrenKey]&&t[e.childrenKey].length>0&&t.expandable!==!1&&t.disabled!==!0&&(l.push(t[e.nodeKey]),t[e.childrenKey].forEach(r))};e.nodes.forEach(r),e.expanded!==void 0?k("update:expanded",l):y.value=l}function L(l,r,t=B(l),n=b.value[l]){if(n.lazy&&n.lazy!=="loaded"){if(n.lazy==="loading")return;s.value[l]="loading",Array.isArray(t[e.childrenKey])!==!0&&(t[e.childrenKey]=[]),k("lazyLoad",{node:t,key:l,done:a=>{s.value[l]="loaded",t[e.childrenKey]=Array.isArray(a)===!0?a:[],Se(()=>{const c=b.value[l];c&&c.isParent===!0&&V(l,!0)})},fail:()=>{delete s.value[l],t[e.childrenKey].length===0&&delete t[e.childrenKey]}})}else n.isParent===!0&&n.expandable===!0&&V(l,r)}function V(l,r){let t=y.value;const n=e.expanded!==void 0;if(n===!0&&(t=t.slice()),r){if(e.accordion&&b.value[l]){const a=[];b.value[l].parent?b.value[l].parent.children.forEach(c=>{c.key!==l&&c.expandable===!0&&a.push(c.key)}):e.nodes.forEach(c=>{const d=c[e.nodeKey];d!==l&&a.push(d)}),a.length>0&&(t=t.filter(c=>a.includes(c)===!1))}t=t.concat([l]).filter((a,c,d)=>d.indexOf(a)===c)}else t=t.filter(a=>a!==l);n===!0?k("update:expanded",t):y.value=t}function de(l){return l&&b.value[l]?b.value[l].ticked:!1}function Q(l,r){let t=_.value;const n=e.ticked!==void 0;n===!0&&(t=t.slice()),r?t=t.concat(l).filter((a,c,d)=>d.indexOf(a)===c):t=t.filter(a=>l.includes(a)===!1),n===!0&&k("update:ticked",t)}function ue(l,r,t){const n={tree:T,node:l,key:t,color:e.color,dark:w.value};return p(n,"expanded",()=>r.expanded,a=>{a!==r.expanded&&L(t,a)}),p(n,"ticked",()=>r.ticked,a=>{a!==r.ticked&&Q([t],a)}),n}function H(l){return(e.filter?l.filter(r=>b.value[r[e.nodeKey]].matchesFilter):l).map(r=>ve(r))}function se(l){if(l.icon!==void 0)return o(X,{class:"q-tree__icon q-mr-sm",name:l.icon,color:l.iconColor});const r=l.img||l.avatar;if(r)return o("img",{class:`q-tree__${l.img?"img":"avatar"} q-mr-sm`,src:r})}function fe(){k("afterShow")}function he(){k("afterHide")}function ve(l){const r=l[e.nodeKey],t=b.value[r],n=l.header&&v[`header-${l.header}`]||v["default-header"],a=t.isParent===!0?H(l[e.childrenKey]):[],c=a.length>0||t.lazy&&t.lazy!=="loaded";let d=l.body&&v[`body-${l.body}`]||v["default-body"];const K=n!==void 0||d!==void 0?ue(l,t,r):null;return d!==void 0&&(d=o("div",{class:"q-tree__node-body relative-position"},[o("div",{class:C.value},[d(K)])])),o("div",{key:r,class:`q-tree__node relative-position q-tree__node--${c===!0?"parent":"child"}`},[o("div",{class:"q-tree__node-header relative-position row no-wrap items-center"+(t.link===!0?" q-tree__node--link q-hoverable q-focusable":"")+(t.selected===!0?" q-tree__node--selected":"")+(t.disabled===!0?" q-tree__node--disabled":""),tabindex:t.link===!0?0:-1,onClick:f=>{j(l,t,f)},onKeypress(f){Ce(f)!==!0&&(f.keyCode===13?j(l,t,f,!0):f.keyCode===32&&M(l,t,f,!0))}},[o("div",{class:"q-focus-helper",tabindex:-1,ref:f=>{A[t.key]=f}}),t.lazy==="loading"?o(qe,{class:"q-tree__spinner",color:S.value}):c===!0?o(X,{class:"q-tree__arrow"+(t.expanded===!0?" q-tree__arrow--rotate":""),name:g.value,onClick(f){M(l,t,f)}}):null,t.hasTicking===!0&&t.noTick!==!0?o(De,{class:"q-tree__tickbox",modelValue:t.indeterminate===!0?null:t.ticked,color:S.value,dark:w.value,dense:!0,keepColor:!0,disable:t.tickable!==!0,onKeydown:Z,"onUpdate:modelValue":f=>{ke(t,f)}}):null,o("div",{class:"q-tree__node-header-content col row no-wrap items-center"+(t.selected===!0?F.value:C.value)},[n?n(K):[se(l),o("div",l[e.labelKey])]])]),c===!0?e.noTransition===!0?o("div",{class:"q-tree__node-collapsible"+C.value,key:`${r}__q`},[d,o("div",{class:"q-tree__children"+(t.disabled===!0?" q-tree__node--disabled":"")},t.expanded?a:null)]):o(Pe,{duration:e.duration,onShow:fe,onHide:he},()=>Te(o("div",{class:"q-tree__node-collapsible"+C.value,key:`${r}__q`},[d,o("div",{class:"q-tree__children"+(t.disabled===!0?" q-tree__node--disabled":"")},a)]),[[we,t.expanded]])):d])}function W(l){const r=A[l];r&&r.focus()}function j(l,r,t,n){n!==!0&&W(r.key),z.value&&r.selectable?e.noSelectionUnset===!1?k("update:selected",r.key!==e.selected?r.key:null):r.key!==e.selected&&k("update:selected",r.key===void 0?null:r.key):M(l,r,t,n),typeof l.handler=="function"&&l.handler(l)}function M(l,r,t,n){t!==void 0&&Z(t),n!==!0&&W(r.key),L(r.key,!r.expanded,l,r)}function ke(l,r){if(l.indeterminate===!0&&(r=l.indeterminateNextState),l.strictTicking)Q([l.key],r);else if(l.leafTicking){const t=[],n=a=>{a.isParent?(r!==!0&&a.noTick!==!0&&a.tickable===!0&&t.push(a.key),a.leafTicking===!0&&a.children.forEach(n)):a.noTick!==!0&&a.tickable===!0&&(a.leafFilteredTicking!==!0||a.matchesFilter===!0)&&t.push(a.key)};n(l),Q(t,r)}}return e.defaultExpandAll===!0&&U(),Object.assign(T,{getNodeByKey:B,getTickedNodes:ne,getExpandedNodes:ie,isExpanded:ce,collapseAll:oe,expandAll:U,setExpanded:L,isTicked:de,setTicked:Q}),()=>{const l=H(e.nodes);return o("div",{class:E.value},l.length===0?e.filter?e.noResultsLabel||x.lang.tree.noResults:e.noNodesLabel||x.lang.tree.noNodes:l)}}});const je=Ke({name:"DocumentationComponent",setup(){return{reStore:Ne(),selected:P(null),docTree:[{label:"Welcome",icon:"waving_hand",children:[{label:"What is Reading Edge?"},{label:"Important concepts"}]},{label:"Demo Assignments",icon:"collections_bookmark",children:[{label:"Things to point out"}]},{label:"Your Account",icon:"person",children:[{label:"Why login?"},{label:"Teacher and Student"},{label:"Courses and Assignments"},{label:"Preferences"}]},{label:"Assignment Builder",icon:"build",children:[{label:"Assignment Pieces"},{label:"Assignment Flow"}]},{label:"History of Reading Edge",icon:"history",children:[{label:"Previous incarnations"}]}]}},methods:{updateSelected(e){console.log("updateSelected ",e),e?(e=e.toLowerCase().replace("?","").replaceAll(" ","_"),this.reStore.router.push(`/${this.reStore.role}/doc/${e}`)):this.reStore.router.push(`/${this.reStore.role}/doc/welcome`)}}}),Je={class:"q-pa-md",style:{"max-width":"350px"}};function Ye(e,v,k,T,x,w){return Ae(),Ee("div",Je,[m(Re,{bordered:"",class:"rounded-borders"},{default:q(()=>[m(Fe,null,{header:q(()=>[m(ee,{avatar:""},{default:q(()=>[m(ze,{icon:"article",color:"primary","text-color":"white"})]),_:1}),m(ee,null,{default:q(()=>[Be(" Documentation ")]),_:1})]),default:q(()=>[m(Oe,null,{default:q(()=>[m(Ie,null,{default:q(()=>[m(We,{nodes:this.docTree,selected:e.selected,"onUpdate:selected":[v[0]||(v[0]=s=>e.selected=s),this.updateSelected],"node-key":"label","no-connectors":""},null,8,["nodes","selected","onUpdate:selected"])]),_:1})]),_:1})]),_:1})]),_:1})])}var nt=$e(je,[["render",Ye]]);export{nt as D,at as Q,Ue as u};