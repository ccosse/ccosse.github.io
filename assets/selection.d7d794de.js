import{v as D,l as R,m as W,n as F}from"./QBtn.cc342797.js";import{p as j,o as S,l as E,g as V,S as A,j as z,a as $,x as m,m as a,s as I,U as _,c as K,V as G}from"./index.8661e3d9.js";function se(){let e;const t=V();function o(){e=void 0}return j(o),S(o),{removeTick:o,registerTick(l){e=l,E(()=>{e===l&&(D(t)===!1&&e(),e=void 0)})}}}function ue(){let e=null;const t=V();function o(){e!==null&&(clearTimeout(e),e=null)}return j(o),S(o),{removeTimeout:o,registerTimeout(l,r){o(),D(t)===!1&&(e=setTimeout(l,r))}}}function de(e,t,o){let l;function r(){l!==void 0&&(A.remove(l),l=void 0)}return S(()=>{e.value===!0&&r()}),{removeFromHistory:r,addToHistory(){l={condition:()=>o.value===!0,handler:t},A.add(l)}}}const ae={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},ce=["beforeShow","show","beforeHide","hide"];function fe({showing:e,canShow:t,hideOnRouteChange:o,handleShow:l,handleHide:r,processOnMount:p}){const n=V(),{props:s,emit:u,proxy:P}=n;let d;function N(i){e.value===!0?y(i):k(i)}function k(i){if(s.disable===!0||i!==void 0&&i.qAnchorHandled===!0||t!==void 0&&t(i)!==!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(u("update:modelValue",!0),d=i,E(()=>{d===i&&(d=void 0)})),(s.modelValue===null||f===!1)&&x(i)}function x(i){e.value!==!0&&(e.value=!0,u("beforeShow",i),l!==void 0?l(i):u("show",i))}function y(i){if(s.disable===!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(u("update:modelValue",!1),d=i,E(()=>{d===i&&(d=void 0)})),(s.modelValue===null||f===!1)&&C(i)}function C(i){e.value!==!1&&(e.value=!1,u("beforeHide",i),r!==void 0?r(i):u("hide",i))}function q(i){s.disable===!0&&i===!0?s["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):i===!0!==e.value&&(i===!0?x:C)(d)}z(()=>s.modelValue,q),o!==void 0&&R(n)===!0&&z(()=>P.$route.fullPath,()=>{o.value===!0&&e.value===!0&&y()}),p===!0&&$(()=>{q(s.modelValue)});const M={show:k,hide:y,toggle:N};return Object.assign(P,M),M}const J=[null,document,document.body,document.scrollingElement,document.documentElement];function me(e,t){let o=F(t);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return J.includes(o)?window:o}function Q(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Z(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let h;function pe(){if(h!==void 0)return h;const e=document.createElement("p"),t=document.createElement("div");W(e,{width:"100%",height:"200px"}),W(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let l=e.offsetWidth;return o===l&&(l=t.clientWidth),t.remove(),h=o-l,h}function ee(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let v=0,b,T,w,L=!1,U,O,X,c=null;function te(e){oe(e)&&I(e)}function oe(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=_(e),o=e.shiftKey&&!e.deltaX,l=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),r=o||l?e.deltaY:e.deltaX;for(let p=0;p<t.length;p++){const n=t[p];if(ee(n,l))return l?r<0&&n.scrollTop===0?!0:r>0&&n.scrollTop+n.clientHeight===n.scrollHeight:r<0&&n.scrollLeft===0?!0:r>0&&n.scrollLeft+n.clientWidth===n.scrollWidth}return!0}function Y(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function g(e){L!==!0&&(L=!0,requestAnimationFrame(()=>{L=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:l}=document.scrollingElement;(w===void 0||t!==window.innerHeight)&&(w=o-t,document.scrollingElement.scrollTop=l),l>w&&(document.scrollingElement.scrollTop-=Math.ceil((l-w)/8))}))}function B(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:r}=window.getComputedStyle(t);b=Z(window),T=Q(window),U=t.style.left,O=t.style.top,X=window.location.href,t.style.left=`-${b}px`,t.style.top=`-${T}px`,r!=="hidden"&&(r==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,m.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",g,a.passiveCapture),window.visualViewport.addEventListener("scroll",g,a.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Y,a.passiveCapture))}m.is.desktop===!0&&m.is.mac===!0&&window[`${e}EventListener`]("wheel",te,a.notPassive),e==="remove"&&(m.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",g,a.passiveCapture),window.visualViewport.removeEventListener("scroll",g,a.passiveCapture)):window.removeEventListener("scroll",Y,a.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=U,t.style.top=O,window.location.href===X&&window.scrollTo(b,T),w=void 0)}function le(e){let t="add";if(e===!0){if(v++,c!==null){clearTimeout(c),c=null;return}if(v>1)return}else{if(v===0||(v--,v>0))return;if(t="remove",m.is.ios===!0&&m.is.nativeMobile===!0){c!==null&&clearTimeout(c),c=setTimeout(()=>{B(t),c=null},100);return}}B(t)}function ve(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,le(t))}}}const we={dark:{type:Boolean,default:null}};function he(e,t){return K(()=>e.dark===null?t.dark.isActive:e.dark)}const H={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},ie=Object.keys(H);H.all=!0;function ge(e){const t={};for(const o of ie)e[o]===!0&&(t[o]=!0);return Object.keys(t).length===0?H:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}function ye(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function be(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),G.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}export{ue as a,ae as b,be as c,we as d,ce as e,he as f,ge as g,fe as h,de as i,ve as j,me as k,Q as l,Z as m,pe as n,ye as s,se as u};
