import{s as Y,at as q,W as $,a6 as B,k,n as M,au as F,q as D,y as x,ad as p,u as d,ai as I,av as _}from"./index.89ecb77b.js";import{b as j,a as K,h as O}from"./scroll.6be757cb.js";function Z(e,o,r){let l;function i(){l!==void 0&&(q.remove(l),l=void 0)}return Y(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){l={condition:()=>r.value===!0,handler:o},q.add(l)}}}function ee(){let e=null;const o=k();function r(){e!==null&&(clearTimeout(e),e=null)}return $(r),Y(r),{removeTimeout:r,registerTimeout(l,i){r(),B(o)===!1&&(e=setTimeout(l,i))}}}const oe={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},te=["beforeShow","show","beforeHide","hide"];function le({showing:e,canShow:o,hideOnRouteChange:r,handleShow:l,handleHide:i,processOnMount:m}){const s=k(),{props:n,emit:u,proxy:V}=s;let a;function z(t){e.value===!0?h(t):L(t)}function L(t){if(n.disable===!0||t!==void 0&&t.qAnchorHandled===!0||o!==void 0&&o(t)!==!0)return;const f=n["onUpdate:modelValue"]!==void 0;f===!0&&(u("update:modelValue",!0),a=t,x(()=>{a===t&&(a=void 0)})),(n.modelValue===null||f===!1)&&E(t)}function E(t){e.value!==!0&&(e.value=!0,u("beforeShow",t),l!==void 0?l(t):u("show",t))}function h(t){if(n.disable===!0)return;const f=n["onUpdate:modelValue"]!==void 0;f===!0&&(u("update:modelValue",!1),a=t,x(()=>{a===t&&(a=void 0)})),(n.modelValue===null||f===!1)&&H(t)}function H(t){e.value!==!1&&(e.value=!1,u("beforeHide",t),i!==void 0?i(t):u("hide",t))}function P(t){n.disable===!0&&t===!0?n["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):t===!0!==e.value&&(t===!0?E:H)(a)}M(()=>n.modelValue,P),r!==void 0&&F(s)===!0&&M(()=>V.$route.fullPath,()=>{r.value===!0&&e.value===!0&&h()}),m===!0&&D(()=>{P(n.modelValue)});const S={show:L,hide:h,toggle:z};return Object.assign(V,S),S}let v=0,b,g,w,T=!1,C,A,U,c=null;function R(e){G(e)&&I(e)}function G(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=_(e),r=e.shiftKey&&!e.deltaX,l=!r&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=r||l?e.deltaY:e.deltaX;for(let m=0;m<o.length;m++){const s=o[m];if(O(s,l))return l?i<0&&s.scrollTop===0?!0:i>0&&s.scrollTop+s.clientHeight===s.scrollHeight:i<0&&s.scrollLeft===0?!0:i>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function W(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function y(e){T!==!0&&(T=!0,requestAnimationFrame(()=>{T=!1;const{height:o}=e.target,{clientHeight:r,scrollTop:l}=document.scrollingElement;(w===void 0||o!==window.innerHeight)&&(w=r-o,document.scrollingElement.scrollTop=l),l>w&&(document.scrollingElement.scrollTop-=Math.ceil((l-w)/8))}))}function X(e){const o=document.body,r=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:i}=window.getComputedStyle(o);b=j(window),g=K(window),C=o.style.left,A=o.style.top,U=window.location.href,o.style.left=`-${b}px`,o.style.top=`-${g}px`,i!=="hidden"&&(i==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,p.is.ios===!0&&(r===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",y,d.passiveCapture),window.visualViewport.addEventListener("scroll",y,d.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",W,d.passiveCapture))}p.is.desktop===!0&&p.is.mac===!0&&window[`${e}EventListener`]("wheel",R,d.notPassive),e==="remove"&&(p.is.ios===!0&&(r===!0?(window.visualViewport.removeEventListener("resize",y,d.passiveCapture),window.visualViewport.removeEventListener("scroll",y,d.passiveCapture)):window.removeEventListener("scroll",W,d.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=C,o.style.top=A,window.location.href===U&&window.scrollTo(b,g),w=void 0)}function J(e){let o="add";if(e===!0){if(v++,c!==null){clearTimeout(c),c=null;return}if(v>1)return}else{if(v===0||(v--,v>0))return;if(o="remove",p.is.ios===!0&&p.is.nativeMobile===!0){c!==null&&clearTimeout(c),c=setTimeout(()=>{X(o),c=null},100);return}}X(o)}function re(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,J(o))}}}export{te as a,ee as b,le as c,Z as d,re as e,oe as u};