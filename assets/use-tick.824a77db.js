import{a0 as u,r as P,B as b,a1 as T,d as w,a2 as C,a3 as D,a4 as q,a as p,a5 as Q,o as S,C as _,a6 as k,g as G}from"./index.80d80d4a.js";let o=[],l=[];function $(e){l=l.filter(t=>t!==e)}function A(e){$(e),l.push(e)}function F(e){$(e),l.length===0&&o.length>0&&(o[o.length-1](),o=[])}function N(e){l.length===0?e():o.push(e)}function O(e){o=o.filter(t=>t!==e)}const c=[];function j(e){return c.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function E(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return u(e)}else if(e.__qPortal===!0){const n=u(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=u(e)}while(e!=null)}function B(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=E(e,t);continue}e.hide(t)}e=u(e)}}function I(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function H(e,t,n,a){const i=P(!1),r=P(!1);let s=null;const f={},g=a==="dialog"&&I(e);function m(d){if(d===!0){F(f),r.value=!0;return}r.value=!1,i.value===!1&&(g===!1&&s===null&&(s=D(!1,a)),i.value=!0,c.push(e.proxy),A(f))}function h(d){if(r.value=!1,d!==!0)return;F(f),i.value=!1;const v=c.indexOf(e.proxy);v!==-1&&c.splice(v,1),s!==null&&(q(s),s=null)}return b(()=>{h(!0)}),e.proxy.__qPortal=!0,T(e.proxy,"contentEl",()=>t.value),{showPortal:m,hidePortal:h,portalIsActive:i,portalIsAccessible:r,renderPortal:()=>g===!0?n():i.value===!0?[w(C,{to:s},n())]:void 0}}const U={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function W(e,t=()=>{},n=()=>{}){return{transitionProps:p(()=>{const a=`q-transition--${e.transitionShow||t()}`,i=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${a}-enter-from`,enterActiveClass:`${a}-enter-active`,enterToClass:`${a}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:p(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function L(){let e;const t=G();function n(){e=void 0}return Q(n),S(n),{removeTick:n,registerTick(a){e=a,_(()=>{e===a&&(k(t)===!1&&e(),e=void 0)})}}}export{L as a,W as b,H as c,N as d,B as e,E as f,j as g,c as p,O as r,U as u};
