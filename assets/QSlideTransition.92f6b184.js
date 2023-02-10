import{d as E,f as C}from"./use-dark.56b0b7f7.js";import{g as _,B as T,C as Q,r as w,h as m,i as k,z as S,u as I,q as $,L as j,j as x,l as p,am as K}from"./index.253a3b1c.js";var H=_({name:"QItem",props:{...E,...T,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:f,emit:u}){const{proxy:{$q:i}}=S(),v=C(e,i),{hasLink:b,linkAttrs:s,linkClass:o,linkTag:l,navigateOnClick:g}=Q(),r=w(null),h=w(null),y=m(()=>e.clickable===!0||b.value===!0||e.tag==="label"),q=m(()=>e.disable!==!0&&y.value===!0),B=m(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(v.value===!0?" q-item--dark":"")+(b.value===!0&&e.active===null?o.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(q.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),t=m(()=>{if(e.insetLevel===void 0)return null;const a=i.lang.rtl===!0?"Right":"Left";return{["padding"+a]:16+e.insetLevel*56+"px"}});function n(a){q.value===!0&&(h.value!==null&&(a.qKeyEvent!==!0&&document.activeElement===r.value?h.value.focus():document.activeElement===h.value&&r.value.focus()),g(a))}function c(a){if(q.value===!0&&I(a,13)===!0){$(a),a.qKeyEvent=!0;const L=new MouseEvent("click",a);L.qKeyEvent=!0,r.value.dispatchEvent(L)}u("keyup",a)}function d(){const a=j(f.default,[]);return q.value===!0&&a.unshift(k("div",{class:"q-focus-helper",tabindex:-1,ref:h})),a}return()=>{const a={ref:r,class:B.value,style:t.value,role:"listitem",onClick:n,onKeyup:c};return q.value===!0?(a.tabindex=e.tabindex||"0",Object.assign(a,s.value)):y.value===!0&&(a["aria-disabled"]="true"),k(l.value,a,d())}}}),N=_({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:f}){const u=m(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>k("div",{class:u.value},x(f.default))}}),O=_({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:f}){const u=m(()=>parseInt(e.lines,10)),i=m(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(u.value===1?" ellipsis":"")),v=m(()=>e.lines!==void 0&&u.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":u.value}:null);return()=>k("div",{style:v.value,class:i.value},x(f.default))}}),A=_({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:f,emit:u}){let i=!1,v,b,s=null,o=null,l,g;function r(){v&&v(),v=null,i=!1,s!==null&&(clearTimeout(s),s=null),o!==null&&(clearTimeout(o),o=null),b!==void 0&&b.removeEventListener("transitionend",l),l=null}function h(t,n,c){t.style.overflowY="hidden",n!==void 0&&(t.style.height=`${n}px`),t.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,i=!0,v=c}function y(t,n){t.style.overflowY=null,t.style.height=null,t.style.transition=null,r(),n!==g&&u(n)}function q(t,n){let c=0;b=t,i===!0?(r(),c=t.offsetHeight===t.scrollHeight?0:void 0):g="hide",h(t,c,n),s=setTimeout(()=>{s=null,t.style.height=`${t.scrollHeight}px`,l=d=>{o=null,(Object(d)!==d||d.target===t)&&y(t,"show")},t.addEventListener("transitionend",l),o=setTimeout(l,e.duration*1.1)},100)}function B(t,n){let c;b=t,i===!0?r():(g="show",c=t.scrollHeight),h(t,c,n),s=setTimeout(()=>{s=null,t.style.height=0,l=d=>{o=null,(Object(d)!==d||d.target===t)&&y(t,"hide")},t.addEventListener("transitionend",l),o=setTimeout(l,e.duration*1.1)},100)}return p(()=>{i===!0&&r()}),()=>k(K,{css:!1,appear:e.appear,onEnter:q,onLeave:B},f.default)}});export{N as Q,O as a,H as b,A as c};
