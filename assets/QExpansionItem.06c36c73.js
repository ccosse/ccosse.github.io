import{e as _,aD as Q,aE as ne,v as B,g as a,h as i,a7 as ae,ae as M,al as ie,k as O,i as A,s as U,a9 as le,aF as oe,n as C,U as ue,aG as se,W as D}from"./index.e70c2e77.js";import{u as j,a as H}from"./use-dark.be8d095a.js";import{u as re,a as ce,c as de}from"./use-prevent-scroll.31fdb8c0.js";import{u as P}from"./uid.42677368.js";var ve=_({name:"QItem",props:{...j,...Q,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:f,emit:d}){const{proxy:{$q:u}}=O(),v=H(e,u),{hasLink:l,linkAttrs:g,linkClass:m,linkTag:s,navigateOnClick:S}=ne(),r=B(null),c=B(null),h=a(()=>e.clickable===!0||l.value===!0||e.tag==="label"),y=a(()=>e.disable!==!0&&h.value===!0),w=a(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(v.value===!0?" q-item--dark":"")+(l.value===!0&&e.active===null?m.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(y.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),n=a(()=>{if(e.insetLevel===void 0)return null;const o=u.lang.rtl===!0?"Right":"Left";return{["padding"+o]:16+e.insetLevel*56+"px"}});function b(o){y.value===!0&&(c.value!==null&&(o.qKeyEvent!==!0&&document.activeElement===r.value?c.value.focus():document.activeElement===c.value&&r.value.focus()),S(o))}function x(o){if(y.value===!0&&ae(o,13)===!0){M(o),o.qKeyEvent=!0;const L=new MouseEvent("click",o);L.qKeyEvent=!0,r.value.dispatchEvent(L)}d("keyup",o)}function q(){const o=ie(f.default,[]);return y.value===!0&&o.unshift(i("div",{class:"q-focus-helper",tabindex:-1,ref:c})),o}return()=>{const o={ref:r,class:w.value,style:n.value,role:"listitem",onClick:b,onKeyup:x};return y.value===!0?(o.tabindex=e.tabindex||"0",Object.assign(o,g.value)):h.value===!0&&(o["aria-disabled"]="true"),i(s.value,o,q())}}}),$=_({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:f}){const d=a(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>i("div",{class:d.value},A(f.default))}}),z=_({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:f}){const d=a(()=>parseInt(e.lines,10)),u=a(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(d.value===1?" ellipsis":"")),v=a(()=>e.lines!==void 0&&d.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":d.value}:null);return()=>i("div",{style:v.value,class:u.value},A(f.default))}}),ge=_({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:f,emit:d}){let u=!1,v,l,g=null,m=null,s,S;function r(){v&&v(),v=null,u=!1,g!==null&&(clearTimeout(g),g=null),m!==null&&(clearTimeout(m),m=null),l!==void 0&&l.removeEventListener("transitionend",s),s=null}function c(n,b,x){b!==void 0&&(n.style.height=`${b}px`),n.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,u=!0,v=x}function h(n,b){n.style.overflowY=null,n.style.height=null,n.style.transition=null,r(),b!==S&&d(b)}function y(n,b){let x=0;l=n,u===!0?(r(),x=n.offsetHeight===n.scrollHeight?0:void 0):(S="hide",n.style.overflowY="hidden"),c(n,x,b),g=setTimeout(()=>{g=null,n.style.height=`${n.scrollHeight}px`,s=q=>{m=null,(Object(q)!==q||q.target===n)&&h(n,"show")},n.addEventListener("transitionend",s),m=setTimeout(s,e.duration*1.1)},100)}function w(n,b){let x;l=n,u===!0?r():(S="show",n.style.overflowY="hidden",x=n.scrollHeight),c(n,x,b),g=setTimeout(()=>{g=null,n.style.height=0,s=q=>{m=null,(Object(q)!==q||q.target===n)&&h(n,"hide")},n.addEventListener("transitionend",s),m=setTimeout(s,e.duration*1.1)},100)}return U(()=>{u===!0&&r()}),()=>i(le,{css:!1,appear:e.appear,onEnter:y,onLeave:w},f.default)}});const me={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},E={xs:2,sm:4,md:8,lg:16,xl:24};var F=_({name:"QSeparator",props:{...j,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const f=O(),d=H(e,f.proxy.$q),u=a(()=>e.vertical===!0?"vertical":"horizontal"),v=a(()=>` q-separator--${u.value}`),l=a(()=>e.inset!==!1?`${v.value}-${me[e.inset]}`:""),g=a(()=>`q-separator${v.value}${l.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(d.value===!0?" q-separator--dark":"")),m=a(()=>{const s={};if(e.size!==void 0&&(s[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const S=e.spaced===!0?`${E.md}px`:e.spaced in E?`${E[e.spaced]}px`:e.spaced,r=e.vertical===!0?["Left","Right"]:["Top","Bottom"];s[`margin${r[0]}`]=s[`margin${r[1]}`]=S}return s});return()=>i("hr",{class:g.value,style:m.value,"aria-orientation":u.value})}});const I=oe({}),fe=Object.keys(Q);var Se=_({name:"QExpansionItem",props:{...Q,...re,...j,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...ce,"click","afterShow","afterHide"],setup(e,{slots:f,emit:d}){const{proxy:{$q:u}}=O(),v=H(e,u),l=B(e.modelValue!==null?e.modelValue:e.defaultOpened),g=B(null),m=P(),{show:s,hide:S,toggle:r}=de({showing:l});let c,h;const y=a(()=>`q-expansion-item q-item-type q-expansion-item--${l.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),w=a(()=>{if(e.contentInsetLevel===void 0)return null;const t=u.lang.rtl===!0?"Right":"Left";return{["padding"+t]:e.contentInsetLevel*56+"px"}}),n=a(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),b=a(()=>{const t={};return fe.forEach(k=>{t[k]=e[k]}),t}),x=a(()=>n.value===!0||e.expandIconToggle!==!0),q=a(()=>e.expandedIcon!==void 0&&l.value===!0?e.expandedIcon:e.expandIcon||u.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),o=a(()=>e.disable!==!0&&(n.value===!0||e.expandIconToggle===!0)),L=a(()=>({expanded:l.value===!0,detailsId:e.targetUid,toggle:r,show:s,hide:S})),N=a(()=>{const t=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:u.lang.label[l.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":l.value===!0?"true":"false","aria-controls":m,"aria-label":t}});C(()=>e.group,t=>{h!==void 0&&h(),t!==void 0&&K()});function G(t){n.value!==!0&&r(t),d("click",t)}function W(t){t.keyCode===13&&R(t,!0)}function R(t,k){k!==!0&&g.value!==null&&g.value.focus(),r(t),M(t)}function Y(){d("afterShow")}function V(){d("afterHide")}function K(){c===void 0&&(c=P()),l.value===!0&&(I[e.group]=c);const t=C(l,T=>{T===!0?I[e.group]=c:I[e.group]===c&&delete I[e.group]}),k=C(()=>I[e.group],(T,te)=>{te===c&&T!==void 0&&T!==c&&S()});h=()=>{t(),k(),I[e.group]===c&&delete I[e.group],h=void 0}}function J(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},k=[i(D,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&l.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:q.value})];return o.value===!0&&(Object.assign(t,{tabindex:0,...N.value,onClick:R,onKeyup:W}),k.unshift(i("div",{ref:g,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),i($,t,()=>k)}function X(){let t;return f.header!==void 0?t=[].concat(f.header(L.value)):(t=[i($,()=>[i(z,{lines:e.labelLines},()=>e.label||""),e.caption?i(z,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](i($,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>i(D,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&t[e.switchToggleSide===!0?"unshift":"push"](J()),t}function Z(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:v.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return x.value===!0&&(t.clickable=!0,t.onClick=G,Object.assign(t,n.value===!0?b.value:N.value)),i(ve,t,X)}function p(){return ue(i("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:w.value,id:m},A(f.default)),[[se,l.value]])}function ee(){const t=[Z(),i(ge,{duration:e.duration,onShow:Y,onHide:V},p)];return e.expandSeparator===!0&&t.push(i(F,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:v.value}),i(F,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:v.value})),t}return e.group!==void 0&&K(),U(()=>{h!==void 0&&h()}),()=>i("div",{class:y.value},[i("div",{class:"q-expansion-item__container relative-position"},ee())])}});export{Se as Q,$ as a,z as b,ve as c};
