import{c as $,o as N,d as i,X as ee,a as l,g as P,aK as te,au as z,r as O,w as q,ae as ne,aL as ae,t as ie,a9 as Q,Y as oe}from"./index.7c1968b5.js";import{i as A,h as le,g as k}from"./rtl.c6758db3.js";import{b as H}from"./QSelect.69e731dc.js";import{u as R,a as D}from"./use-dark.2f64fbd7.js";import{u as ue,a as re,c as se}from"./use-timeout.6cff0d3e.js";var ce=$({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:S,emit:I}){let u=!1,c,a,r=null,s=null,o,x;function d(){c&&c(),c=null,u=!1,r!==null&&(clearTimeout(r),r=null),s!==null&&(clearTimeout(s),s=null),a!==void 0&&a.removeEventListener("transitionend",o),o=null}function g(n,v,m){v!==void 0&&(n.style.height=`${v}px`),n.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,u=!0,c=m}function f(n,v){n.style.overflowY=null,n.style.height=null,n.style.transition=null,d(),v!==x&&I(v)}function w(n,v){let m=0;a=n,u===!0?(d(),m=n.offsetHeight===n.scrollHeight?0:void 0):(x="hide",n.style.overflowY="hidden"),g(n,m,v),r=setTimeout(()=>{r=null,n.style.height=`${n.scrollHeight}px`,o=h=>{s=null,(Object(h)!==h||h.target===n)&&f(n,"show")},n.addEventListener("transitionend",o),s=setTimeout(o,e.duration*1.1)},100)}function L(n,v){let m;a=n,u===!0?d():(x="show",n.style.overflowY="hidden",m=n.scrollHeight),g(n,m,v),r=setTimeout(()=>{r=null,n.style.height=0,o=h=>{s=null,(Object(h)!==h||h.target===n)&&f(n,"hide")},n.addEventListener("transitionend",o),s=setTimeout(o,e.duration*1.1)},100)}return N(()=>{u===!0&&d()}),()=>i(ee,{css:!1,appear:e.appear,onEnter:w,onLeave:L},S.default)}});const de={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},_={xs:2,sm:4,md:8,lg:16,xl:24};var j=$({name:"QSeparator",props:{...R,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const S=P(),I=D(e,S.proxy.$q),u=l(()=>e.vertical===!0?"vertical":"horizontal"),c=l(()=>` q-separator--${u.value}`),a=l(()=>e.inset!==!1?`${c.value}-${de[e.inset]}`:""),r=l(()=>`q-separator${c.value}${a.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(I.value===!0?" q-separator--dark":"")),s=l(()=>{const o={};if(e.size!==void 0&&(o[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const x=e.spaced===!0?`${_.md}px`:e.spaced in _?`${_[e.spaced]}px`:e.spaced,d=e.vertical===!0?["Left","Right"]:["Top","Bottom"];o[`margin${d[0]}`]=o[`margin${d[1]}`]=x}return o});return()=>i("hr",{class:r.value,style:s.value,"aria-orientation":u.value})}});const T=te({}),ge=Object.keys(z);var xe=$({name:"QExpansionItem",props:{...z,...ue,...R,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...re,"click","afterShow","afterHide"],setup(e,{slots:S,emit:I}){const{proxy:{$q:u}}=P(),c=D(e,u),a=O(e.modelValue!==null?e.modelValue:e.defaultOpened),r=O(null),s=A(),{show:o,hide:x,toggle:d}=se({showing:a});let g,f;const w=l(()=>`q-expansion-item q-item-type q-expansion-item--${a.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),L=l(()=>{if(e.contentInsetLevel===void 0)return null;const t=u.lang.rtl===!0?"Right":"Left";return{["padding"+t]:e.contentInsetLevel*56+"px"}}),n=l(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),v=l(()=>{const t={};return ge.forEach(b=>{t[b]=e[b]}),t}),m=l(()=>n.value===!0||e.expandIconToggle!==!0),h=l(()=>e.expandedIcon!==void 0&&a.value===!0?e.expandedIcon:e.expandIcon||u.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),K=l(()=>e.disable!==!0&&(n.value===!0||e.expandIconToggle===!0)),M=l(()=>({expanded:a.value===!0,detailsId:e.targetUid,toggle:d,show:o,hide:x})),C=l(()=>{const t=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:u.lang.label[a.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":a.value===!0?"true":"false","aria-controls":s,"aria-label":t}});q(()=>e.group,t=>{f!==void 0&&f(),t!==void 0&&E()});function Y(t){n.value!==!0&&d(t),I("click",t)}function G(t){t.keyCode===13&&B(t,!0)}function B(t,b){b!==!0&&r.value!==null&&r.value.focus(),d(t),oe(t)}function U(){I("afterShow")}function F(){I("afterHide")}function E(){g===void 0&&(g=A()),a.value===!0&&(T[e.group]=g);const t=q(a,y=>{y===!0?T[e.group]=g:T[e.group]===g&&delete T[e.group]}),b=q(()=>T[e.group],(y,p)=>{p===g&&y!==void 0&&y!==g&&x()});f=()=>{t(),b(),T[e.group]===g&&delete T[e.group],f=void 0}}function V(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},b=[i(Q,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&a.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:h.value})];return K.value===!0&&(Object.assign(t,{tabindex:0,...C.value,onClick:B,onKeyup:G}),b.unshift(i("div",{ref:r,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),i(k,t,()=>b)}function X(){let t;return S.header!==void 0?t=[].concat(S.header(M.value)):(t=[i(k,()=>[i(H,{lines:e.labelLines},()=>e.label||""),e.caption?i(H,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](i(k,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>i(Q,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&t[e.switchToggleSide===!0?"unshift":"push"](V()),t}function J(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:c.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return m.value===!0&&(t.clickable=!0,t.onClick=Y,Object.assign(t,n.value===!0?v.value:C.value)),i(le,t,X)}function W(){return ne(i("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:L.value,id:s},ie(S.default)),[[ae,a.value]])}function Z(){const t=[J(),i(ce,{duration:e.duration,onShow:U,onHide:F},W)];return e.expandSeparator===!0&&t.push(i(j,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:c.value}),i(j,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:c.value})),t}return e.group!==void 0&&E(),N(()=>{f!==void 0&&f()}),()=>i("div",{class:w.value},[i("div",{class:"q-expansion-item__container relative-position"},Z())])}});export{xe as Q};
