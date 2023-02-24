import{g as _,W as Q,X as ne,r as B,h as a,i,q as O,$ as ae,J as F,x as ie,j,m as U,av as le,aE as oe,v as C,K as ue,ar as se,a1 as P}from"./index.4f44843a.js";import{u as A,a as H}from"./use-dark.9d9919a4.js";import{u as re,a as ce,c as de}from"./scroll.dd361da0.js";import{b as z}from"./use-prevent-scroll.5ea2bc82.js";var ve=_({name:"QItem",props:{...A,...Q,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:f,emit:d}){const{proxy:{$q:u}}=O(),v=H(e,u),{hasLink:l,linkAttrs:g,linkClass:m,linkTag:s,navigateOnClick:S}=ne(),r=B(null),c=B(null),h=a(()=>e.clickable===!0||l.value===!0||e.tag==="label"),y=a(()=>e.disable!==!0&&h.value===!0),L=a(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(v.value===!0?" q-item--dark":"")+(l.value===!0&&e.active===null?m.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(y.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),n=a(()=>{if(e.insetLevel===void 0)return null;const o=u.lang.rtl===!0?"Right":"Left";return{["padding"+o]:16+e.insetLevel*56+"px"}});function b(o){y.value===!0&&(c.value!==null&&(o.qKeyEvent!==!0&&document.activeElement===r.value?c.value.focus():document.activeElement===c.value&&r.value.focus()),S(o))}function x(o){if(y.value===!0&&ae(o,13)===!0){F(o),o.qKeyEvent=!0;const T=new MouseEvent("click",o);T.qKeyEvent=!0,r.value.dispatchEvent(T)}d("keyup",o)}function q(){const o=ie(f.default,[]);return y.value===!0&&o.unshift(i("div",{class:"q-focus-helper",tabindex:-1,ref:c})),o}return()=>{const o={ref:r,class:L.value,style:n.value,role:"listitem",onClick:b,onKeyup:x};return y.value===!0?(o.tabindex=e.tabindex||"0",Object.assign(o,g.value)):h.value===!0&&(o["aria-disabled"]="true"),i(s.value,o,q())}}}),$=_({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:f}){const d=a(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>i("div",{class:d.value},j(f.default))}}),D=_({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:f}){const d=a(()=>parseInt(e.lines,10)),u=a(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(d.value===1?" ellipsis":"")),v=a(()=>e.lines!==void 0&&d.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":d.value}:null);return()=>i("div",{style:v.value,class:u.value},j(f.default))}}),ge=_({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:f,emit:d}){let u=!1,v,l,g=null,m=null,s,S;function r(){v&&v(),v=null,u=!1,g!==null&&(clearTimeout(g),g=null),m!==null&&(clearTimeout(m),m=null),l!==void 0&&l.removeEventListener("transitionend",s),s=null}function c(n,b,x){n.style.overflowY="hidden",b!==void 0&&(n.style.height=`${b}px`),n.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,u=!0,v=x}function h(n,b){n.style.overflowY=null,n.style.height=null,n.style.transition=null,r(),b!==S&&d(b)}function y(n,b){let x=0;l=n,u===!0?(r(),x=n.offsetHeight===n.scrollHeight?0:void 0):S="hide",c(n,x,b),g=setTimeout(()=>{g=null,n.style.height=`${n.scrollHeight}px`,s=q=>{m=null,(Object(q)!==q||q.target===n)&&h(n,"show")},n.addEventListener("transitionend",s),m=setTimeout(s,e.duration*1.1)},100)}function L(n,b){let x;l=n,u===!0?r():(S="show",x=n.scrollHeight),c(n,x,b),g=setTimeout(()=>{g=null,n.style.height=0,s=q=>{m=null,(Object(q)!==q||q.target===n)&&h(n,"hide")},n.addEventListener("transitionend",s),m=setTimeout(s,e.duration*1.1)},100)}return U(()=>{u===!0&&r()}),()=>i(le,{css:!1,appear:e.appear,onEnter:y,onLeave:L},f.default)}});const me={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},E={xs:2,sm:4,md:8,lg:16,xl:24};var M=_({name:"QSeparator",props:{...A,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const f=O(),d=H(e,f.proxy.$q),u=a(()=>e.vertical===!0?"vertical":"horizontal"),v=a(()=>` q-separator--${u.value}`),l=a(()=>e.inset!==!1?`${v.value}-${me[e.inset]}`:""),g=a(()=>`q-separator${v.value}${l.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(d.value===!0?" q-separator--dark":"")),m=a(()=>{const s={};if(e.size!==void 0&&(s[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const S=e.spaced===!0?`${E.md}px`:e.spaced in E?`${E[e.spaced]}px`:e.spaced,r=e.vertical===!0?["Left","Right"]:["Top","Bottom"];s[`margin${r[0]}`]=s[`margin${r[1]}`]=S}return s});return()=>i("hr",{class:g.value,style:m.value,"aria-orientation":u.value})}});const I=oe({}),fe=Object.keys(Q);var Se=_({name:"QExpansionItem",props:{...Q,...re,...A,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...ce,"click","afterShow","afterHide"],setup(e,{slots:f,emit:d}){const{proxy:{$q:u}}=O(),v=H(e,u),l=B(e.modelValue!==null?e.modelValue:e.defaultOpened),g=B(null),m=z(),{show:s,hide:S,toggle:r}=de({showing:l});let c,h;const y=a(()=>`q-expansion-item q-item-type q-expansion-item--${l.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),L=a(()=>{if(e.contentInsetLevel===void 0)return null;const t=u.lang.rtl===!0?"Right":"Left";return{["padding"+t]:e.contentInsetLevel*56+"px"}}),n=a(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),b=a(()=>{const t={};return fe.forEach(k=>{t[k]=e[k]}),t}),x=a(()=>n.value===!0||e.expandIconToggle!==!0),q=a(()=>e.expandedIcon!==void 0&&l.value===!0?e.expandedIcon:e.expandIcon||u.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),o=a(()=>e.disable!==!0&&(n.value===!0||e.expandIconToggle===!0)),T=a(()=>({expanded:l.value===!0,detailsId:e.targetUid,toggle:r,show:s,hide:S})),N=a(()=>{const t=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:u.lang.label[l.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":l.value===!0?"true":"false","aria-controls":m,"aria-label":t}});C(()=>e.group,t=>{h!==void 0&&h(),t!==void 0&&K()});function G(t){n.value!==!0&&r(t),d("click",t)}function W(t){t.keyCode===13&&R(t,!0)}function R(t,k){k!==!0&&g.value!==null&&g.value.focus(),r(t),F(t)}function V(){d("afterShow")}function Y(){d("afterHide")}function K(){c===void 0&&(c=z()),l.value===!0&&(I[e.group]=c);const t=C(l,w=>{w===!0?I[e.group]=c:I[e.group]===c&&delete I[e.group]}),k=C(()=>I[e.group],(w,te)=>{te===c&&w!==void 0&&w!==c&&S()});h=()=>{t(),k(),I[e.group]===c&&delete I[e.group],h=void 0}}function J(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},k=[i(P,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&l.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:q.value})];return o.value===!0&&(Object.assign(t,{tabindex:0,...N.value,onClick:R,onKeyup:W}),k.unshift(i("div",{ref:g,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),i($,t,()=>k)}function X(){let t;return f.header!==void 0?t=[].concat(f.header(T.value)):(t=[i($,()=>[i(D,{lines:e.labelLines},()=>e.label||""),e.caption?i(D,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](i($,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>i(P,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&t[e.switchToggleSide===!0?"unshift":"push"](J()),t}function Z(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:v.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return x.value===!0&&(t.clickable=!0,t.onClick=G,Object.assign(t,n.value===!0?b.value:N.value)),i(ve,t,X)}function p(){return ue(i("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:L.value,id:m},j(f.default)),[[se,l.value]])}function ee(){const t=[Z(),i(ge,{duration:e.duration,onShow:V,onHide:Y},p)];return e.expandSeparator===!0&&t.push(i(M,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:v.value}),i(M,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:v.value})),t}return e.group!==void 0&&K(),U(()=>{h!==void 0&&h()}),()=>i("div",{class:y.value},[i("div",{class:"q-expansion-item__container relative-position"},ee())])}});export{Se as Q,ge as a,$ as b,D as c,ve as d,M as e};
