import{N as H,m as L,p,a8 as M,q as g,v as x,a9 as z,l as C,aa as O,ab as E}from"./index.2b48d3fb.js";function N(){let e;const o=g();function t(){e=void 0}return H(t),L(t),{removeTick:t,registerTick(l){e=l,p(()=>{e===l&&(M(o)===!1&&e(),e=void 0)})}}}function X(){let e=null;const o=g();function t(){e!==null&&(clearTimeout(e),e=null)}return H(t),L(t),{removeTimeout:t,registerTimeout(l,s){t(),M(o)===!1&&(e=setTimeout(l,s))}}}const Y={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},D=["beforeShow","show","beforeHide","hide"];function j({showing:e,canShow:o,hideOnRouteChange:t,handleShow:l,handleHide:s,processOnMount:u}){const r=g(),{props:i,emit:c,proxy:h}=r;let a;function k(n){e.value===!0?m(n):b(n)}function b(n){if(i.disable===!0||n!==void 0&&n.qAnchorHandled===!0||o!==void 0&&o(n)!==!0)return;const d=i["onUpdate:modelValue"]!==void 0;d===!0&&(c("update:modelValue",!0),a=n,p(()=>{a===n&&(a=void 0)})),(i.modelValue===null||d===!1)&&T(n)}function T(n){e.value!==!0&&(e.value=!0,c("beforeShow",n),l!==void 0?l(n):c("show",n))}function m(n){if(i.disable===!0)return;const d=i["onUpdate:modelValue"]!==void 0;d===!0&&(c("update:modelValue",!1),a=n,p(()=>{a===n&&(a=void 0)})),(i.modelValue===null||d===!1)&&y(n)}function y(n){e.value!==!1&&(e.value=!1,c("beforeHide",n),s!==void 0?s(n):c("hide",n))}function V(n){i.disable===!0&&n===!0?i["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):n===!0!==e.value&&(n===!0?T:y)(a)}x(()=>i.modelValue,V),t!==void 0&&z(r)===!0&&x(()=>h.$route.fullPath,()=>{t.value===!0&&e.value===!0&&m()}),u===!0&&C(()=>{V(i.modelValue)});const S={show:b,hide:m,toggle:k};return Object.assign(h,S),S}const U=[null,document,document.body,document.scrollingElement,document.documentElement];function B(e,o){let t=O(o);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return U.includes(t)?window:t}function q(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function A(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function P(e,o,t=0){const l=arguments[3]===void 0?performance.now():arguments[3],s=q(e);if(t<=0){s!==o&&w(e,o);return}requestAnimationFrame(u=>{const r=u-l,i=s+(o-s)/Math.max(r,t)*r;w(e,i),i!==o&&P(e,o,t-r,u)})}function W(e,o,t=0){const l=arguments[3]===void 0?performance.now():arguments[3],s=A(e);if(t<=0){s!==o&&v(e,o);return}requestAnimationFrame(u=>{const r=u-l,i=s+(o-s)/Math.max(r,t)*r;v(e,i),i!==o&&W(e,o,t-r,u)})}function w(e,o){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,o);return}e.scrollTop=o}function v(e,o){if(e===window){window.scrollTo(o,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=o}function I(e,o,t){if(t){P(e,o,t);return}w(e,o)}function _(e,o,t){if(t){W(e,o,t);return}v(e,o)}let f;function $(){if(f!==void 0)return f;const e=document.createElement("p"),o=document.createElement("div");E(e,{width:"100%",height:"200px"}),E(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const t=e.offsetWidth;o.style.overflow="scroll";let l=e.offsetWidth;return t===l&&(l=o.clientWidth),o.remove(),f=t-l,f}function G(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}export{D as a,X as b,j as c,q as d,A as e,_ as f,B as g,$ as h,N as i,G as j,I as s,Y as u};
