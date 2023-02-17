import{g as F,h as l,i as f,j as $,q as S,aC as c,r as q,V as w,aA as Q,aD as D,aE as _,aF as A}from"./index.79af6c58.js";import{a as k,c as j}from"./use-dark.69021e55.js";var M=F({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const a=l(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>f(e.tag,{class:a.value},$(t.default))}}),N=F({name:"QCard",props:{...k,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=S(),r=j(e,a),n=l(()=>"q-card"+(r.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>f(e.tag,{class:n.value},$(t.default))}});const z={name:String};function O(e){return l(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function H(e={}){return(t,a,r)=>{t[a](f("input",{class:"hidden"+(r||""),...e.value}))}}function V(e){return l(()=>e.name||e.for)}const W={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function L(e,t=()=>{},a=()=>{}){return{transitionProps:l(()=>{const r=`q-transition--${e.transitionShow||t()}`,n=`q-transition--${e.transitionHide||a()}`;return{appear:!0,enterFromClass:`${r}-enter-from`,enterActiveClass:`${r}-enter-active`,enterToClass:`${r}-enter-to`,leaveFromClass:`${n}-leave-from`,leaveActiveClass:`${n}-leave-active`,leaveToClass:`${n}-leave-to`}}),transitionStyle:l(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}let o=[],i=[];function b(e){i=i.filter(t=>t!==e)}function E(e){b(e),i.push(e)}function p(e){b(e),i.length===0&&o.length>0&&(o[o.length-1](),o=[])}function U(e){i.length===0?e():o.push(e)}function J(e){o=o.filter(t=>t!==e)}const d=[];function K(e){return d.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function G(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return c(e)}else if(e.__qPortal===!0){const a=c(e);return a!==void 0&&a.$options.name==="QPopupProxy"?(e.hide(t),a):e}e=c(e)}while(e!=null)}function R(e,t,a){for(;a!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(a--,e.$options.name==="QMenu"){e=G(e,t);continue}e.hide(t)}e=c(e)}}function I(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function X(e,t,a,r){const n=q(!1),u=q(!1);let s=null;const h={},v=r==="dialog"&&I(e);function C(g){if(g===!0){p(h),u.value=!0;return}u.value=!1,n.value===!1&&(v===!1&&s===null&&(s=_(!1,r)),n.value=!0,d.push(e.proxy),E(h))}function m(g){if(u.value=!1,g!==!0)return;p(h),n.value=!1;const P=d.indexOf(e.proxy);P!==-1&&d.splice(P,1),s!==null&&(A(s),s=null)}return w(()=>{m(!0)}),e.proxy.__qPortal=!0,Q(e.proxy,"contentEl",()=>t.value),{showPortal:C,hidePortal:m,portalIsActive:n,portalIsAccessible:u,renderPortal:()=>v===!0?a():n.value===!0?[f(D,{to:s},a())]:void 0}}export{N as Q,M as a,O as b,H as c,W as d,L as e,X as f,G as g,U as h,V as i,K as j,R as k,d as p,J as r,z as u};
