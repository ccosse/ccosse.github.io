import{N as _,m as M,p as V,a8 as $,q as k,a9 as Y,v as z,aa as Q,l as ee,ab as oe,ac as F,B as w,t as f,J as te,ad as ne,h as re}from"./index.0a1c6404.js";let E,h=0;const s=new Array(256);for(let e=0;e<256;e++)s[e]=(e+256).toString(16).substring(1);const ie=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return o=>{const t=new Uint8Array(o);return e.getRandomValues(t),t}}return o=>{const t=[];for(let n=o;n>0;n--)t.push(Math.floor(Math.random()*256));return t}})(),U=4096;function fe(){(E===void 0||h+16>U)&&(h=0,E=ie(U));const e=Array.prototype.slice.call(E,h,h+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,s[e[0]]+s[e[1]]+s[e[2]]+s[e[3]]+"-"+s[e[4]]+s[e[5]]+"-"+s[e[6]]+s[e[7]]+"-"+s[e[8]]+s[e[9]]+"-"+s[e[10]]+s[e[11]]+s[e[12]]+s[e[13]]+s[e[14]]+s[e[15]]}function me(){let e;const o=k();function t(){e=void 0}return _(t),M(t),{removeTick:t,registerTick(n){e=n,V(()=>{e===n&&($(o)===!1&&e(),e=void 0)})}}}function pe(){let e=null;const o=k();function t(){e!==null&&(clearTimeout(e),e=null)}return _(t),M(t),{removeTimeout:t,registerTimeout(n,i){t(),$(o)===!1&&(e=setTimeout(n,i))}}}function we(e,o,t){let n;function i(){n!==void 0&&(Y.remove(n),n=void 0)}return M(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){n={condition:()=>t.value===!0,handler:o},Y.add(n)}}}const ve={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},ye=["beforeShow","show","beforeHide","hide"];function he({showing:e,canShow:o,hideOnRouteChange:t,handleShow:n,handleHide:i,processOnMount:c}){const l=k(),{props:u,emit:d,proxy:q}=l;let a;function G(r){e.value===!0?T(r):C(r)}function C(r){if(u.disable===!0||r!==void 0&&r.qAnchorHandled===!0||o!==void 0&&o(r)!==!0)return;const p=u["onUpdate:modelValue"]!==void 0;p===!0&&(d("update:modelValue",!0),a=r,V(()=>{a===r&&(a=void 0)})),(u.modelValue===null||p===!1)&&A(r)}function A(r){e.value!==!0&&(e.value=!0,d("beforeShow",r),n!==void 0?n(r):d("show",r))}function T(r){if(u.disable===!0)return;const p=u["onUpdate:modelValue"]!==void 0;p===!0&&(d("update:modelValue",!1),a=r,V(()=>{a===r&&(a=void 0)})),(u.modelValue===null||p===!1)&&W(r)}function W(r){e.value!==!1&&(e.value=!1,d("beforeHide",r),i!==void 0?i(r):d("hide",r))}function B(r){u.disable===!0&&r===!0?u["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):r===!0!==e.value&&(r===!0?A:W)(a)}z(()=>u.modelValue,B),t!==void 0&&Q(l)===!0&&z(()=>q.$route.fullPath,()=>{t.value===!0&&e.value===!0&&T()}),c===!0&&ee(()=>{B(u.modelValue)});const X={show:C,hide:T,toggle:G};return Object.assign(q,X),X}const le=[null,document,document.body,document.scrollingElement,document.documentElement];function ge(e,o){let t=oe(o);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return le.includes(t)?window:t}function j(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function J(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function K(e,o,t=0){const n=arguments[3]===void 0?performance.now():arguments[3],i=j(e);if(t<=0){i!==o&&H(e,o);return}requestAnimationFrame(c=>{const l=c-n,u=i+(o-i)/Math.max(l,t)*l;H(e,u),u!==o&&K(e,o,t-l,c)})}function Z(e,o,t=0){const n=arguments[3]===void 0?performance.now():arguments[3],i=J(e);if(t<=0){i!==o&&P(e,o);return}requestAnimationFrame(c=>{const l=c-n,u=i+(o-i)/Math.max(l,t)*l;P(e,u),u!==o&&Z(e,o,t-l,c)})}function H(e,o){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,o);return}e.scrollTop=o}function P(e,o){if(e===window){window.scrollTo(o,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=o}function be(e,o,t){if(t){K(e,o,t);return}H(e,o)}function Te(e,o,t){if(t){Z(e,o,t);return}P(e,o)}let g;function Ee(){if(g!==void 0)return g;const e=document.createElement("p"),o=document.createElement("div");F(e,{width:"100%",height:"200px"}),F(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const t=e.offsetWidth;o.style.overflow="scroll";let n=e.offsetWidth;return t===n&&(n=o.clientWidth),o.remove(),g=t-n,g}function se(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let v=0,L,S,y,x=!1,O,D,I,m=null;function ue(e){ce(e)&&te(e)}function ce(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=ne(e),t=e.shiftKey&&!e.deltaX,n=!t&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=t||n?e.deltaY:e.deltaX;for(let c=0;c<o.length;c++){const l=o[c];if(se(l,n))return n?i<0&&l.scrollTop===0?!0:i>0&&l.scrollTop+l.clientHeight===l.scrollHeight:i<0&&l.scrollLeft===0?!0:i>0&&l.scrollLeft+l.clientWidth===l.scrollWidth}return!0}function N(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function b(e){x!==!0&&(x=!0,requestAnimationFrame(()=>{x=!1;const{height:o}=e.target,{clientHeight:t,scrollTop:n}=document.scrollingElement;(y===void 0||o!==window.innerHeight)&&(y=t-o,document.scrollingElement.scrollTop=n),n>y&&(document.scrollingElement.scrollTop-=Math.ceil((n-y)/8))}))}function R(e){const o=document.body,t=window.visualViewport!==void 0;if(e==="add"){const{overflowY:n,overflowX:i}=window.getComputedStyle(o);L=J(window),S=j(window),O=o.style.left,D=o.style.top,I=window.location.href,o.style.left=`-${L}px`,o.style.top=`-${S}px`,i!=="hidden"&&(i==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),n!=="hidden"&&(n==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,w.is.ios===!0&&(t===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",b,f.passiveCapture),window.visualViewport.addEventListener("scroll",b,f.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",N,f.passiveCapture))}w.is.desktop===!0&&w.is.mac===!0&&window[`${e}EventListener`]("wheel",ue,f.notPassive),e==="remove"&&(w.is.ios===!0&&(t===!0?(window.visualViewport.removeEventListener("resize",b,f.passiveCapture),window.visualViewport.removeEventListener("scroll",b,f.passiveCapture)):window.removeEventListener("scroll",N,f.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=O,o.style.top=D,window.location.href===I&&window.scrollTo(L,S),y=void 0)}function de(e){let o="add";if(e===!0){if(v++,m!==null){clearTimeout(m),m=null;return}if(v>1)return}else{if(v===0||(v--,v>0))return;if(o="remove",w.is.ios===!0&&w.is.nativeMobile===!0){m!==null&&clearTimeout(m),m=setTimeout(()=>{R(o),m=null},100);return}}R(o)}function Le(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,de(o))}}}const Se={dark:{type:Boolean,default:null}};function xe(e,o){return re(()=>e.dark===null?o.dark.isActive:e.dark)}export{Se as a,ye as b,xe as c,pe as d,he as e,we as f,Le as g,ge as h,j as i,J as j,Te as k,Ee as l,fe as m,me as n,be as s,ve as u};