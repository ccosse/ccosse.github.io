import{g as Q,h as a,i as n,z as A,aM as p,B as O,r as _,D as I,l as ee,p as te,ax as ne,j as ae,x as y,q as ie}from"./index.c84103d7.js";import{c as oe,b as le,a as C,Q as q}from"./QSlideTransition.2fd61234.js";import{d as j,f as P,c as ue,e as ce,u as $,g as re}from"./use-dark.62b050fa.js";const se={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},T={xs:2,sm:4,md:8,lg:16,xl:24};var B=Q({name:"QSeparator",props:{...j,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const v=A(),m=P(e,v.proxy.$q),u=a(()=>e.vertical===!0?"vertical":"horizontal"),r=a(()=>` q-separator--${u.value}`),i=a(()=>e.inset!==!1?`${r.value}-${se[e.inset]}`:""),h=a(()=>`q-separator${r.value}${i.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(m.value===!0?" q-separator--dark":"")),f=a(()=>{const s={};if(e.size!==void 0&&(s[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const b=e.spaced===!0?`${T.md}px`:e.spaced in T?`${T[e.spaced]}px`:e.spaced,d=e.vertical===!0?["Left","Right"]:["Top","Bottom"];s[`margin${d[0]}`]=s[`margin${d[1]}`]=b}return s});return()=>n("hr",{class:h.value,style:f.value,"aria-orientation":u.value})}});const c=p({}),de=Object.keys(O);var he=Q({name:"QExpansionItem",props:{...O,...ue,...j,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...ce,"click","afterShow","afterHide"],setup(e,{slots:v,emit:m}){const{proxy:{$q:u}}=A(),r=P(e,u),i=_(e.modelValue!==null?e.modelValue:e.defaultOpened),h=_(null),f=$(),{show:s,hide:b,toggle:d}=re({showing:i});let l,g;const z=a(()=>`q-expansion-item q-item-type q-expansion-item--${i.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),D=a(()=>{if(e.contentInsetLevel===void 0)return null;const t=u.lang.rtl===!0?"Right":"Left";return{["padding"+t]:e.contentInsetLevel*56+"px"}}),x=a(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),E=a(()=>{const t={};return de.forEach(o=>{t[o]=e[o]}),t}),H=a(()=>x.value===!0||e.expandIconToggle!==!0),N=a(()=>e.expandedIcon!==void 0&&i.value===!0?e.expandedIcon:e.expandIcon||u.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),R=a(()=>e.disable!==!0&&(x.value===!0||e.expandIconToggle===!0)),M=a(()=>({expanded:i.value===!0,detailsId:e.targetUid,toggle:d,show:s,hide:b})),k=a(()=>{const t=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:u.lang.label[i.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":i.value===!0?"true":"false","aria-controls":f,"aria-label":t}});I(()=>e.group,t=>{g!==void 0&&g(),t!==void 0&&w()});function G(t){x.value!==!0&&d(t),m("click",t)}function K(t){t.keyCode===13&&L(t,!0)}function L(t,o){o!==!0&&h.value!==null&&h.value.focus(),d(t),ie(t)}function U(){m("afterShow")}function V(){m("afterHide")}function w(){l===void 0&&(l=$()),i.value===!0&&(c[e.group]=l);const t=I(i,S=>{S===!0?c[e.group]=l:c[e.group]===l&&delete c[e.group]}),o=I(()=>c[e.group],(S,Z)=>{Z===l&&S!==void 0&&S!==l&&b()});g=()=>{t(),o(),c[e.group]===l&&delete c[e.group],g=void 0}}function F(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},o=[n(y,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&i.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:N.value})];return R.value===!0&&(Object.assign(t,{tabindex:0,...k.value,onClick:L,onKeyup:K}),o.unshift(n("div",{ref:h,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),n(q,t,()=>o)}function J(){let t;return v.header!==void 0?t=[].concat(v.header(M.value)):(t=[n(q,()=>[n(C,{lines:e.labelLines},()=>e.label||""),e.caption?n(C,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](n(q,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>n(y,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&t[e.switchToggleSide===!0?"unshift":"push"](F()),t}function W(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:r.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return H.value===!0&&(t.clickable=!0,t.onClick=G,Object.assign(t,x.value===!0?E.value:k.value)),n(le,t,J)}function X(){return te(n("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:D.value,id:f},ae(v.default)),[[ne,i.value]])}function Y(){const t=[W(),n(oe,{duration:e.duration,onShow:U,onHide:V},X)];return e.expandSeparator===!0&&t.push(n(B,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:r.value}),n(B,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:r.value})),t}return e.group!==void 0&&w(),ee(()=>{g!==void 0&&g()}),()=>n("div",{class:z.value},[n("div",{class:"q-expansion-item__container relative-position"},Y())])}});export{he as Q};
