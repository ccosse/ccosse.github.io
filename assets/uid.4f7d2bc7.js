import{u as A,a7 as Q,v as z,y as M,q as F,a8 as y,r as L,V as G,a9 as j,h as X,aa as Y,ab as R,ac as Z,a as x,M as W,x as _,ad as B,ae as J,af as D}from"./index.89842271.js";const re={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},ae=["beforeShow","show","beforeHide","hide"];function ue({showing:e,canShow:t,hideOnRouteChange:o,handleShow:n,handleHide:l,processOnMount:u}){const r=M(),{props:s,emit:c,proxy:h}=r;let f;function p(i){e.value===!0?T(i):w(i)}function w(i){if(s.disable===!0||i!==void 0&&i.qAnchorHandled===!0||t!==void 0&&t(i)!==!0)return;const m=s["onUpdate:modelValue"]!==void 0;m===!0&&(c("update:modelValue",!0),f=i,F(()=>{f===i&&(f=void 0)})),(s.modelValue===null||m===!1)&&$(i)}function $(i){e.value!==!0&&(e.value=!0,c("beforeShow",i),n!==void 0?n(i):c("show",i))}function T(i){if(s.disable===!0)return;const m=s["onUpdate:modelValue"]!==void 0;m===!0&&(c("update:modelValue",!1),f=i,F(()=>{f===i&&(f=void 0)})),(s.modelValue===null||m===!1)&&q(i)}function q(i){e.value!==!1&&(e.value=!1,c("beforeHide",i),l!==void 0?l(i):c("hide",i))}function C(i){s.disable===!0&&i===!0?s["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):i===!0!==e.value&&(i===!0?$:q)(f)}A(()=>s.modelValue,C),o!==void 0&&Q(r)===!0&&A(()=>h.$route.fullPath,()=>{o.value===!0&&e.value===!0&&T()}),u===!0&&z(()=>{C(s.modelValue)});const H={show:w,hide:T,toggle:p};return Object.assign(h,H),H}let d=[],v=[];function k(e){v=v.filter(t=>t!==e)}function K(e){k(e),v.push(e)}function O(e){k(e),v.length===0&&d.length>0&&(d[d.length-1](),d=[])}function ce(e){v.length===0?e():d.push(e)}function fe(e){d=d.filter(t=>t!==e)}const P=[];function de(e){return P.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function ee(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return y(e)}else if(e.__qPortal===!0){const o=y(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(t),o):e}e=y(e)}while(e!=null)}function me(e,t,o){for(;o!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(o--,e.$options.name==="QMenu"){e=ee(e,t);continue}e.hide(t)}e=y(e)}}function te(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function pe(e,t,o,n){const l=L(!1),u=L(!1);let r=null;const s={},c=n==="dialog"&&te(e);function h(p){if(p===!0){O(s),u.value=!0;return}u.value=!1,l.value===!1&&(c===!1&&r===null&&(r=R(!1,n)),l.value=!0,P.push(e.proxy),K(s))}function f(p){if(u.value=!1,p!==!0)return;O(s),l.value=!1;const w=P.indexOf(e.proxy);w!==-1&&P.splice(w,1),r!==null&&(Z(r),r=null)}return G(()=>{f(!0)}),e.proxy.__qPortal=!0,j(e.proxy,"contentEl",()=>t.value),{showPortal:h,hidePortal:f,portalIsActive:l,portalIsAccessible:u,renderPortal:()=>c===!0?o():l.value===!0?[X(Y,{to:r},o())]:void 0}}const we={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function ve(e,t=()=>{},o=()=>{}){return{transitionProps:x(()=>{const n=`q-transition--${e.transitionShow||t()}`,l=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:x(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function he(){let e;const t=M();function o(){e=void 0}return W(o),_(o),{removeTick:o,registerTick(n){e=n,F(()=>{e===n&&(B(t)===!1&&e(),e=void 0)})}}}function ge(){let e=null;const t=M();function o(){e!==null&&(clearTimeout(e),e=null)}return W(o),_(o),{removeTimeout:o,registerTimeout(n,l){o(),B(t)===!1&&(e=setTimeout(n,l))}}}const oe=[null,document,document.body,document.scrollingElement,document.documentElement];function be(e,t){let o=J(t);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return oe.includes(o)?window:o}function ne(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ie(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function I(e,t,o=0){const n=arguments[3]===void 0?performance.now():arguments[3],l=ne(e);if(o<=0){l!==t&&V(e,t);return}requestAnimationFrame(u=>{const r=u-n,s=l+(t-l)/Math.max(r,o)*r;V(e,s),s!==t&&I(e,t,o-r,u)})}function N(e,t,o=0){const n=arguments[3]===void 0?performance.now():arguments[3],l=ie(e);if(o<=0){l!==t&&E(e,t);return}requestAnimationFrame(u=>{const r=u-n,s=l+(t-l)/Math.max(r,o)*r;E(e,s),s!==t&&N(e,t,o-r,u)})}function V(e,t){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,t);return}e.scrollTop=t}function E(e,t){if(e===window){window.scrollTo(t,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=t}function ye(e,t,o){if(o){I(e,t,o);return}V(e,t)}function Pe(e,t,o){if(o){N(e,t,o);return}E(e,t)}let g;function Te(){if(g!==void 0)return g;const e=document.createElement("p"),t=document.createElement("div");D(e,{width:"100%",height:"200px"}),D(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let n=e.offsetWidth;return o===n&&(n=t.clientWidth),t.remove(),g=o-n,g}function Se(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let S,b=0;const a=new Array(256);for(let e=0;e<256;e++)a[e]=(e+256).toString(16).substring(1);const le=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const o=new Uint8Array(t);return e.getRandomValues(o),o}}return t=>{const o=[];for(let n=t;n>0;n--)o.push(Math.floor(Math.random()*256));return o}})(),U=4096;function Fe(){(S===void 0||b+16>U)&&(b=0,S=le(U));const e=Array.prototype.slice.call(S,b,b+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,a[e[0]]+a[e[1]]+a[e[2]]+a[e[3]]+"-"+a[e[4]]+a[e[5]]+"-"+a[e[6]]+a[e[7]]+"-"+a[e[8]]+a[e[9]]+"-"+a[e[10]]+a[e[11]]+a[e[12]]+a[e[13]]+a[e[14]]+a[e[15]]}export{we as a,ae as b,he as c,ge as d,ve as e,ue as f,Te as g,pe as h,be as i,ne as j,ie as k,Pe as l,Fe as m,Se as n,ee as o,P as p,ce as q,de as r,ye as s,me as t,re as u,fe as v};
