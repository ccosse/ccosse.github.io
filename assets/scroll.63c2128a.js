import{u as q,ac as N,v as Q,y as V,q as T,ad as g,r as H,$ as j,ae as z,h as G,af as I,ag as X,ah as Y,a as C,U as A,x as O,ai as W,aj as x,ak as L}from"./index.95bb4c97.js";const oe={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},ne=["beforeShow","show","beforeHide","hide"];function ie({showing:e,canShow:t,hideOnRouteChange:o,handleShow:i,handleHide:l,processOnMount:r}){const a=V(),{props:s,emit:u,proxy:h}=a;let c;function m(n){e.value===!0?P(n):p(n)}function p(n){if(s.disable===!0||n!==void 0&&n.qAnchorHandled===!0||t!==void 0&&t(n)!==!0)return;const d=s["onUpdate:modelValue"]!==void 0;d===!0&&(u("update:modelValue",!0),c=n,T(()=>{c===n&&(c=void 0)})),(s.modelValue===null||d===!1)&&$(n)}function $(n){e.value!==!0&&(e.value=!0,u("beforeShow",n),i!==void 0?i(n):u("show",n))}function P(n){if(s.disable===!0)return;const d=s["onUpdate:modelValue"]!==void 0;d===!0&&(u("update:modelValue",!1),c=n,T(()=>{c===n&&(c=void 0)})),(s.modelValue===null||d===!1)&&E(n)}function E(n){e.value!==!1&&(e.value=!1,u("beforeHide",n),l!==void 0?l(n):u("hide",n))}function y(n){s.disable===!0&&n===!0?s["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):n===!0!==e.value&&(n===!0?$:E)(c)}q(()=>s.modelValue,y),o!==void 0&&N(a)===!0&&q(()=>h.$route.fullPath,()=>{o.value===!0&&e.value===!0&&P()}),r===!0&&Q(()=>{y(s.modelValue)});const M={show:p,hide:P,toggle:m};return Object.assign(h,M),M}let f=[],w=[];function k(e){w=w.filter(t=>t!==e)}function B(e){k(e),w.push(e)}function D(e){k(e),w.length===0&&f.length>0&&(f[f.length-1](),f=[])}function le(e){w.length===0?e():f.push(e)}function se(e){f=f.filter(t=>t!==e)}const b=[];function ae(e){return b.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function J(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return g(e)}else if(e.__qPortal===!0){const o=g(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(t),o):e}e=g(e)}while(e!=null)}function re(e,t,o){for(;o!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(o--,e.$options.name==="QMenu"){e=J(e,t);continue}e.hide(t)}e=g(e)}}function K(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function ue(e,t,o,i){const l=H(!1),r=H(!1);let a=null;const s={},u=i==="dialog"&&K(e);function h(m){if(m===!0){D(s),r.value=!0;return}r.value=!1,l.value===!1&&(u===!1&&a===null&&(a=X(!1,i)),l.value=!0,b.push(e.proxy),B(s))}function c(m){if(r.value=!1,m!==!0)return;D(s),l.value=!1;const p=b.indexOf(e.proxy);p!==-1&&b.splice(p,1),a!==null&&(Y(a),a=null)}return j(()=>{c(!0)}),e.proxy.__qPortal=!0,z(e.proxy,"contentEl",()=>t.value),{showPortal:h,hidePortal:c,portalIsActive:l,portalIsAccessible:r,renderPortal:()=>u===!0?o():l.value===!0?[G(I,{to:a},o())]:void 0}}const ce={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function fe(e,t=()=>{},o=()=>{}){return{transitionProps:C(()=>{const i=`q-transition--${e.transitionShow||t()}`,l=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${i}-enter-from`,enterActiveClass:`${i}-enter-active`,enterToClass:`${i}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:C(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function de(){let e;const t=V();function o(){e=void 0}return A(o),O(o),{removeTick:o,registerTick(i){e=i,T(()=>{e===i&&(W(t)===!1&&e(),e=void 0)})}}}function me(){let e=null;const t=V();function o(){e!==null&&(clearTimeout(e),e=null)}return A(o),O(o),{removeTimeout:o,registerTimeout(i,l){o(),W(t)===!1&&(e=setTimeout(i,l))}}}const R=[null,document,document.body,document.scrollingElement,document.documentElement];function pe(e,t){let o=x(t);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return R.includes(o)?window:o}function Z(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ee(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function U(e,t,o=0){const i=arguments[3]===void 0?performance.now():arguments[3],l=Z(e);if(o<=0){l!==t&&S(e,t);return}requestAnimationFrame(r=>{const a=r-i,s=l+(t-l)/Math.max(a,o)*a;S(e,s),s!==t&&U(e,t,o-a,r)})}function _(e,t,o=0){const i=arguments[3]===void 0?performance.now():arguments[3],l=ee(e);if(o<=0){l!==t&&F(e,t);return}requestAnimationFrame(r=>{const a=r-i,s=l+(t-l)/Math.max(a,o)*a;F(e,s),s!==t&&_(e,t,o-a,r)})}function S(e,t){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,t);return}e.scrollTop=t}function F(e,t){if(e===window){window.scrollTo(t,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=t}function we(e,t,o){if(o){U(e,t,o);return}S(e,t)}function he(e,t,o){if(o){_(e,t,o);return}F(e,t)}let v;function ve(){if(v!==void 0)return v;const e=document.createElement("p"),t=document.createElement("div");L(e,{width:"100%",height:"200px"}),L(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let i=e.offsetWidth;return o===i&&(i=t.clientWidth),t.remove(),v=o-i,v}function ge(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}export{ce as a,ne as b,de as c,me as d,fe as e,ie as f,ve as g,ue as h,pe as i,Z as j,ee as k,he as l,ge as m,J as n,le as o,b as p,ae as q,re as r,we as s,se as t,oe as u};
