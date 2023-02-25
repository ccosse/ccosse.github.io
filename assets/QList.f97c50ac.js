import{g as _,W as H,X as ne,r as B,h as a,i,q as C,$ as ae,J as M,x as ie,j as $,m as U,aw as le,aF as oe,v as O,K as ue,as as se,a1 as D}from"./index.ef5ad98b.js";import{u as E,a as Q}from"./use-dark.70f1cd48.js";import{u as re,a as ce,c as de}from"./scroll.ed6bd3a8.js";import{b as P}from"./use-prevent-scroll.f90af3f7.js";var ve=_({name:"QItem",props:{...E,...H,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:g,emit:s}){const{proxy:{$q:l}}=C(),r=Q(e,l),{hasLink:o,linkAttrs:m,linkClass:f,linkTag:c,navigateOnClick:S}=ne(),d=B(null),v=B(null),h=a(()=>e.clickable===!0||o.value===!0||e.tag==="label"),y=a(()=>e.disable!==!0&&h.value===!0),L=a(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(r.value===!0?" q-item--dark":"")+(o.value===!0&&e.active===null?f.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(y.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),n=a(()=>{if(e.insetLevel===void 0)return null;const u=l.lang.rtl===!0?"Right":"Left";return{["padding"+u]:16+e.insetLevel*56+"px"}});function b(u){y.value===!0&&(v.value!==null&&(u.qKeyEvent!==!0&&document.activeElement===d.value?v.value.focus():document.activeElement===v.value&&d.value.focus()),S(u))}function x(u){if(y.value===!0&&ae(u,13)===!0){M(u),u.qKeyEvent=!0;const w=new MouseEvent("click",u);w.qKeyEvent=!0,d.value.dispatchEvent(w)}s("keyup",u)}function q(){const u=ie(g.default,[]);return y.value===!0&&u.unshift(i("div",{class:"q-focus-helper",tabindex:-1,ref:v})),u}return()=>{const u={ref:d,class:L.value,style:n.value,role:"listitem",onClick:b,onKeyup:x};return y.value===!0?(u.tabindex=e.tabindex||"0",Object.assign(u,m.value)):h.value===!0&&(u["aria-disabled"]="true"),i(c.value,u,q())}}}),j=_({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:g}){const s=a(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>i("div",{class:s.value},$(g.default))}}),z=_({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:g}){const s=a(()=>parseInt(e.lines,10)),l=a(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(s.value===1?" ellipsis":"")),r=a(()=>e.lines!==void 0&&s.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":s.value}:null);return()=>i("div",{style:r.value,class:l.value},$(g.default))}}),ge=_({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:g,emit:s}){let l=!1,r,o,m=null,f=null,c,S;function d(){r&&r(),r=null,l=!1,m!==null&&(clearTimeout(m),m=null),f!==null&&(clearTimeout(f),f=null),o!==void 0&&o.removeEventListener("transitionend",c),c=null}function v(n,b,x){n.style.overflowY="hidden",b!==void 0&&(n.style.height=`${b}px`),n.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,l=!0,r=x}function h(n,b){n.style.overflowY=null,n.style.height=null,n.style.transition=null,d(),b!==S&&s(b)}function y(n,b){let x=0;o=n,l===!0?(d(),x=n.offsetHeight===n.scrollHeight?0:void 0):S="hide",v(n,x,b),m=setTimeout(()=>{m=null,n.style.height=`${n.scrollHeight}px`,c=q=>{f=null,(Object(q)!==q||q.target===n)&&h(n,"show")},n.addEventListener("transitionend",c),f=setTimeout(c,e.duration*1.1)},100)}function L(n,b){let x;o=n,l===!0?d():(S="show",x=n.scrollHeight),v(n,x,b),m=setTimeout(()=>{m=null,n.style.height=0,c=q=>{f=null,(Object(q)!==q||q.target===n)&&h(n,"hide")},n.addEventListener("transitionend",c),f=setTimeout(c,e.duration*1.1)},100)}return U(()=>{l===!0&&d()}),()=>i(le,{css:!1,appear:e.appear,onEnter:y,onLeave:L},g.default)}});const me={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},A={xs:2,sm:4,md:8,lg:16,xl:24};var F=_({name:"QSeparator",props:{...E,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const g=C(),s=Q(e,g.proxy.$q),l=a(()=>e.vertical===!0?"vertical":"horizontal"),r=a(()=>` q-separator--${l.value}`),o=a(()=>e.inset!==!1?`${r.value}-${me[e.inset]}`:""),m=a(()=>`q-separator${r.value}${o.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(s.value===!0?" q-separator--dark":"")),f=a(()=>{const c={};if(e.size!==void 0&&(c[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const S=e.spaced===!0?`${A.md}px`:e.spaced in A?`${A[e.spaced]}px`:e.spaced,d=e.vertical===!0?["Left","Right"]:["Top","Bottom"];c[`margin${d[0]}`]=c[`margin${d[1]}`]=S}return c});return()=>i("hr",{class:m.value,style:f.value,"aria-orientation":l.value})}});const I=oe({}),fe=Object.keys(H);var Se=_({name:"QExpansionItem",props:{...H,...re,...E,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...ce,"click","afterShow","afterHide"],setup(e,{slots:g,emit:s}){const{proxy:{$q:l}}=C(),r=Q(e,l),o=B(e.modelValue!==null?e.modelValue:e.defaultOpened),m=B(null),f=P(),{show:c,hide:S,toggle:d}=de({showing:o});let v,h;const y=a(()=>`q-expansion-item q-item-type q-expansion-item--${o.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),L=a(()=>{if(e.contentInsetLevel===void 0)return null;const t=l.lang.rtl===!0?"Right":"Left";return{["padding"+t]:e.contentInsetLevel*56+"px"}}),n=a(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),b=a(()=>{const t={};return fe.forEach(k=>{t[k]=e[k]}),t}),x=a(()=>n.value===!0||e.expandIconToggle!==!0),q=a(()=>e.expandedIcon!==void 0&&o.value===!0?e.expandedIcon:e.expandIcon||l.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),u=a(()=>e.disable!==!0&&(n.value===!0||e.expandIconToggle===!0)),w=a(()=>({expanded:o.value===!0,detailsId:e.targetUid,toggle:d,show:c,hide:S})),N=a(()=>{const t=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:l.lang.label[o.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":o.value===!0?"true":"false","aria-controls":f,"aria-label":t}});O(()=>e.group,t=>{h!==void 0&&h(),t!==void 0&&K()});function G(t){n.value!==!0&&d(t),s("click",t)}function W(t){t.keyCode===13&&R(t,!0)}function R(t,k){k!==!0&&m.value!==null&&m.value.focus(),d(t),M(t)}function V(){s("afterShow")}function Y(){s("afterHide")}function K(){v===void 0&&(v=P()),o.value===!0&&(I[e.group]=v);const t=O(o,T=>{T===!0?I[e.group]=v:I[e.group]===v&&delete I[e.group]}),k=O(()=>I[e.group],(T,te)=>{te===v&&T!==void 0&&T!==v&&S()});h=()=>{t(),k(),I[e.group]===v&&delete I[e.group],h=void 0}}function J(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},k=[i(D,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&o.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:q.value})];return u.value===!0&&(Object.assign(t,{tabindex:0,...N.value,onClick:R,onKeyup:W}),k.unshift(i("div",{ref:m,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),i(j,t,()=>k)}function X(){let t;return g.header!==void 0?t=[].concat(g.header(w.value)):(t=[i(j,()=>[i(z,{lines:e.labelLines},()=>e.label||""),e.caption?i(z,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](i(j,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>i(D,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&t[e.switchToggleSide===!0?"unshift":"push"](J()),t}function Z(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:r.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return x.value===!0&&(t.clickable=!0,t.onClick=G,Object.assign(t,n.value===!0?b.value:N.value)),i(ve,t,X)}function p(){return ue(i("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:L.value,id:f},$(g.default)),[[se,o.value]])}function ee(){const t=[Z(),i(ge,{duration:e.duration,onShow:V,onHide:Y},p)];return e.expandSeparator===!0&&t.push(i(F,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:r.value}),i(F,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:r.value})),t}return e.group!==void 0&&K(),U(()=>{h!==void 0&&h()}),()=>i("div",{class:y.value},[i("div",{class:"q-expansion-item__container relative-position"},ee())])}}),ye=_({name:"QList",props:{...E,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:g}){const s=C(),l=Q(e,s.proxy.$q),r=a(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>i(e.tag,{class:r.value},$(g.default))}});export{Se as Q,j as a,ye as b,ge as c,z as d,ve as e,F as f};
