import{t as D,ab as U,u as _,x as F,n as T,ac as h,r as w,M as E,ad as G,h as j,ae as I,af as N,ag as O,a as C,X as k,v as A,ah as H}from"./index.0238fd39.js";const z={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},J=["beforeShow","show","beforeHide","hide"];function K({showing:e,canShow:n,hideOnRouteChange:a,handleShow:o,handleHide:l,processOnMount:c}){const r=F(),{props:i,emit:u,proxy:g}=r;let s;function m(t){e.value===!0?b(t):p(t)}function p(t){if(i.disable===!0||t!==void 0&&t.qAnchorHandled===!0||n!==void 0&&n(t)!==!0)return;const d=i["onUpdate:modelValue"]!==void 0;d===!0&&(u("update:modelValue",!0),s=t,T(()=>{s===t&&(s=void 0)})),(i.modelValue===null||d===!1)&&$(t)}function $(t){e.value!==!0&&(e.value=!0,u("beforeShow",t),o!==void 0?o(t):u("show",t))}function b(t){if(i.disable===!0)return;const d=i["onUpdate:modelValue"]!==void 0;d===!0&&(u("update:modelValue",!1),s=t,T(()=>{s===t&&(s=void 0)})),(i.modelValue===null||d===!1)&&V(t)}function V(t){e.value!==!1&&(e.value=!1,u("beforeHide",t),l!==void 0?l(t):u("hide",t))}function M(t){i.disable===!0&&t===!0?i["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):t===!0!==e.value&&(t===!0?$:V)(s)}D(()=>i.modelValue,M),a!==void 0&&U(r)===!0&&D(()=>g.$route.fullPath,()=>{a.value===!0&&e.value===!0&&b()}),c===!0&&_(()=>{M(i.modelValue)});const q={show:p,hide:b,toggle:m};return Object.assign(g,q),q}let f=[],v=[];function Q(e){v=v.filter(n=>n!==e)}function B(e){Q(e),v.push(e)}function S(e){Q(e),v.length===0&&f.length>0&&(f[f.length-1](),f=[])}function R(e){v.length===0?e():f.push(e)}function Y(e){f=f.filter(n=>n!==e)}const P=[];function Z(e){return P.find(n=>n.contentEl!==null&&n.contentEl.contains(e))}function W(e,n){do{if(e.$options.name==="QMenu"){if(e.hide(n),e.$props.separateClosePopup===!0)return h(e)}else if(e.__qPortal===!0){const a=h(e);return a!==void 0&&a.$options.name==="QPopupProxy"?(e.hide(n),a):e}e=h(e)}while(e!=null)}function y(e,n,a){for(;a!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(a--,e.$options.name==="QMenu"){e=W(e,n);continue}e.hide(n)}e=h(e)}}function L(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function x(e,n,a,o){const l=w(!1),c=w(!1);let r=null;const i={},u=o==="dialog"&&L(e);function g(m){if(m===!0){S(i),c.value=!0;return}c.value=!1,l.value===!1&&(u===!1&&r===null&&(r=N(!1,o)),l.value=!0,P.push(e.proxy),B(i))}function s(m){if(c.value=!1,m!==!0)return;S(i),l.value=!1;const p=P.indexOf(e.proxy);p!==-1&&P.splice(p,1),r!==null&&(O(r),r=null)}return E(()=>{s(!0)}),e.proxy.__qPortal=!0,G(e.proxy,"contentEl",()=>n.value),{showPortal:g,hidePortal:s,portalIsActive:l,portalIsAccessible:c,renderPortal:()=>u===!0?a():l.value===!0?[j(I,{to:r},a())]:void 0}}const ee={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function te(e,n=()=>{},a=()=>{}){return{transitionProps:C(()=>{const o=`q-transition--${e.transitionShow||n()}`,l=`q-transition--${e.transitionHide||a()}`;return{appear:!0,enterFromClass:`${o}-enter-from`,enterActiveClass:`${o}-enter-active`,enterToClass:`${o}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:C(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function ne(){let e;const n=F();function a(){e=void 0}return k(a),A(a),{removeTick:a,registerTick(o){e=o,T(()=>{e===o&&(H(n)===!1&&e(),e=void 0)})}}}function ae(){let e=null;const n=F();function a(){e!==null&&(clearTimeout(e),e=null)}return k(a),A(a),{removeTimeout:a,registerTimeout(o,l){a(),H(n)===!1&&(e=setTimeout(o,l))}}}export{ee as a,J as b,ne as c,ae as d,te as e,K as f,x as g,W as h,R as i,Z as j,y as k,P as p,Y as r,z as u};
