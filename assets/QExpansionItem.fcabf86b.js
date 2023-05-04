import{c as Q,a,d as n,g as A,aH as p,aI as O,r as _,w as I,o as ee,ae as te,aJ as ne,t as ae,a9 as y,Y as ie}from"./index.b5df373a.js";import{u as C,a as oe,Q as q}from"./QItemSection.4209cf15.js";import{Q as $}from"./QItemLabel.dd35d688.js";import{Q as le}from"./QSlideTransition.9830b262.js";import{u as H,a as P}from"./use-dark.8f35300a.js";import{u as re,a as ue,b as ce}from"./use-model-toggle.c458b7f2.js";const se={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},T={xs:2,sm:4,md:8,lg:16,xl:24};var B=Q({name:"QSeparator",props:{...H,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const v=A(),m=P(e,v.proxy.$q),r=a(()=>e.vertical===!0?"vertical":"horizontal"),c=a(()=>` q-separator--${r.value}`),i=a(()=>e.inset!==!1?`${c.value}-${se[e.inset]}`:""),f=a(()=>`q-separator${c.value}${i.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(m.value===!0?" q-separator--dark":"")),h=a(()=>{const s={};if(e.size!==void 0&&(s[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const b=e.spaced===!0?`${T.md}px`:e.spaced in T?`${T[e.spaced]}px`:e.spaced,d=e.vertical===!0?["Left","Right"]:["Top","Bottom"];s[`margin${d[0]}`]=s[`margin${d[1]}`]=b}return s});return()=>n("hr",{class:f.value,style:h.value,"aria-orientation":r.value})}});const u=p({}),de=Object.keys(O);var xe=Q({name:"QExpansionItem",props:{...O,...re,...H,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...ue,"click","afterShow","afterHide"],setup(e,{slots:v,emit:m}){const{proxy:{$q:r}}=A(),c=P(e,r),i=_(e.modelValue!==null?e.modelValue:e.defaultOpened),f=_(null),h=C(),{show:s,hide:b,toggle:d}=ce({showing:i});let l,g;const j=a(()=>`q-expansion-item q-item-type q-expansion-item--${i.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),E=a(()=>{if(e.contentInsetLevel===void 0)return null;const t=r.lang.rtl===!0?"Right":"Left";return{["padding"+t]:e.contentInsetLevel*56+"px"}}),x=a(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),N=a(()=>{const t={};return de.forEach(o=>{t[o]=e[o]}),t}),R=a(()=>x.value===!0||e.expandIconToggle!==!0),z=a(()=>e.expandedIcon!==void 0&&i.value===!0?e.expandedIcon:e.expandIcon||r.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),D=a(()=>e.disable!==!0&&(x.value===!0||e.expandIconToggle===!0)),M=a(()=>({expanded:i.value===!0,detailsId:e.targetUid,toggle:d,show:s,hide:b})),k=a(()=>{const t=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:r.lang.label[i.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":i.value===!0?"true":"false","aria-controls":h,"aria-label":t}});I(()=>e.group,t=>{g!==void 0&&g(),t!==void 0&&L()});function G(t){x.value!==!0&&d(t),m("click",t)}function K(t){t.keyCode===13&&w(t,!0)}function w(t,o){o!==!0&&f.value!==null&&f.value.focus(),d(t),ie(t)}function U(){m("afterShow")}function V(){m("afterHide")}function L(){l===void 0&&(l=C()),i.value===!0&&(u[e.group]=l);const t=I(i,S=>{S===!0?u[e.group]=l:u[e.group]===l&&delete u[e.group]}),o=I(()=>u[e.group],(S,Z)=>{Z===l&&S!==void 0&&S!==l&&b()});g=()=>{t(),o(),u[e.group]===l&&delete u[e.group],g=void 0}}function J(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},o=[n(y,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&i.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:z.value})];return D.value===!0&&(Object.assign(t,{tabindex:0,...k.value,onClick:w,onKeyup:K}),o.unshift(n("div",{ref:f,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),n(q,t,()=>o)}function Y(){let t;return v.header!==void 0?t=[].concat(v.header(M.value)):(t=[n(q,()=>[n($,{lines:e.labelLines},()=>e.label||""),e.caption?n($,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](n(q,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>n(y,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&t[e.switchToggleSide===!0?"unshift":"push"](J()),t}function F(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:c.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return R.value===!0&&(t.clickable=!0,t.onClick=G,Object.assign(t,x.value===!0?N.value:k.value)),n(oe,t,Y)}function W(){return te(n("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:E.value,id:h},ae(v.default)),[[ne,i.value]])}function X(){const t=[F(),n(le,{duration:e.duration,onShow:U,onHide:V},W)];return e.expandSeparator===!0&&t.push(n(B,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:c.value}),n(B,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:c.value})),t}return e.group!==void 0&&L(),ee(()=>{g!==void 0&&g()}),()=>n("div",{class:j.value},[n("div",{class:"q-expansion-item__container relative-position"},X())])}});export{xe as Q};
