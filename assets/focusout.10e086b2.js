import{a0 as T,s as q,y,ak as Q,k as S,g as w,al as d,v as F,A as _,Y as A,h as G,am as K,an as L,ao as O,ac as I,a6 as k}from"./index.a75cd14a.js";let a=[],f=[];function b(e){f=f.filter(n=>n!==e)}function M(e){b(e),f.push(e)}function $(e){b(e),f.length===0&&a.length>0&&(a[a.length-1](),a=[])}function Y(e){f.length===0?e():a.push(e)}function z(e){a=a.filter(n=>n!==e)}function J(){let e;const n=S();function t(){e=void 0}return T(t),q(t),{removeTick:t,registerTick(i){e=i,y(()=>{e===i&&(Q(n)===!1&&e(),e=void 0)})}}}const R={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function V(e,n=()=>{},t=()=>{}){return{transitionProps:w(()=>{const i=`q-transition--${e.transitionShow||n()}`,o=`q-transition--${e.transitionHide||t()}`;return{appear:!0,enterFromClass:`${i}-enter-from`,enterActiveClass:`${i}-enter-active`,enterToClass:`${i}-enter-to`,leaveFromClass:`${o}-leave-from`,leaveActiveClass:`${o}-leave-active`,leaveToClass:`${o}-leave-to`}}),transitionStyle:w(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}const h=[];function X(e){return h.find(n=>n.contentEl!==null&&n.contentEl.contains(e))}function j(e,n){do{if(e.$options.name==="QMenu"){if(e.hide(n),e.$props.separateClosePopup===!0)return d(e)}else if(e.__qPortal===!0){const t=d(e);return t!==void 0&&t.$options.name==="QPopupProxy"?(e.hide(n),t):e}e=d(e)}while(e!=null)}function Z(e,n,t){for(;t!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(t--,e.$options.name==="QMenu"){e=j(e,n);continue}e.hide(n)}e=d(e)}}function N(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function x(e,n,t,i){const o=F(!1),c=F(!1);let u=null;const g={},p=i==="dialog"&&N(e);function D(v){if(v===!0){$(g),c.value=!0;return}c.value=!1,o.value===!1&&(p===!1&&u===null&&(u=L(!1,i)),o.value=!0,h.push(e.proxy),M(g))}function P(v){if(c.value=!1,v!==!0)return;$(g),o.value=!1;const m=h.indexOf(e.proxy);m!==-1&&h.splice(m,1),u!==null&&(O(u),u=null)}return _(()=>{P(!0)}),e.proxy.__qPortal=!0,A(e.proxy,"contentEl",()=>n.value),{showPortal:D,hidePortal:P,portalIsActive:o,portalIsAccessible:c,renderPortal:()=>p===!0?t():o.value===!0?[G(K,{to:u},t())]:void 0}}const s=[];let r;function B(e){r=e.keyCode===27}function H(){r===!0&&(r=!1)}function U(e){r===!0&&(r=!1,I(e,27)===!0&&s[s.length-1](e))}function E(e){window[e]("keydown",B),window[e]("blur",H),window[e]("keyup",U),r=!1}function ee(e){k.is.desktop===!0&&(s.push(e),s.length===1&&E("addEventListener"))}function ne(e){const n=s.indexOf(e);n>-1&&(s.splice(n,1),s.length===0&&E("removeEventListener"))}const l=[];function C(e){l[l.length-1](e)}function te(e){k.is.desktop===!0&&(l.push(e),l.length===1&&document.body.addEventListener("focusin",C))}function ie(e){const n=l.indexOf(e);n>-1&&(l.splice(n,1),l.length===0&&document.body.removeEventListener("focusin",C))}export{Y as a,J as b,V as c,x as d,ie as e,ne as f,te as g,ee as h,X as i,Z as j,j as k,h as p,z as r,R as u};
