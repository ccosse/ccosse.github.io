import{m as P,ad as b,B as c,t as s,J as H,ae as q}from"./index.8c1d1a0a.js";import{e as V,d as B,j as C}from"./scroll.8804baae.js";let w,f=0;const r=new Array(256);for(let e=0;e<256;e++)r[e]=(e+256).toString(16).substring(1);const A=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const i=new Uint8Array(t);return e.getRandomValues(i),i}}return t=>{const i=[];for(let o=t;o>0;o--)i.push(Math.floor(Math.random()*256));return i}})(),g=4096;function F(){(w===void 0||f+16>g)&&(f=0,w=A(g));const e=Array.prototype.slice.call(w,f,f+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,r[e[0]]+r[e[1]]+r[e[2]]+r[e[3]]+"-"+r[e[4]]+r[e[5]]+"-"+r[e[6]]+r[e[7]]+"-"+r[e[8]]+r[e[9]]+"-"+r[e[10]]+r[e[11]]+r[e[12]]+r[e[13]]+r[e[14]]+r[e[15]]}function R(e,t,i){let o;function l(){o!==void 0&&(b.remove(o),o=void 0)}return P(()=>{e.value===!0&&l()}),{removeFromHistory:l,addToHistory(){o={condition:()=>i.value===!0,handler:t},b.add(o)}}}let a=0,m,y,u,h=!1,L,T,E,d=null;function M(e){W(e)&&H(e)}function W(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=q(e),i=e.shiftKey&&!e.deltaX,o=!i&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),l=i||o?e.deltaY:e.deltaX;for(let v=0;v<t.length;v++){const n=t[v];if(C(n,o))return o?l<0&&n.scrollTop===0?!0:l>0&&n.scrollTop+n.clientHeight===n.scrollHeight:l<0&&n.scrollLeft===0?!0:l>0&&n.scrollLeft+n.clientWidth===n.scrollWidth}return!0}function S(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function p(e){h!==!0&&(h=!0,requestAnimationFrame(()=>{h=!1;const{height:t}=e.target,{clientHeight:i,scrollTop:o}=document.scrollingElement;(u===void 0||t!==window.innerHeight)&&(u=i-t,document.scrollingElement.scrollTop=o),o>u&&(document.scrollingElement.scrollTop-=Math.ceil((o-u)/8))}))}function x(e){const t=document.body,i=window.visualViewport!==void 0;if(e==="add"){const{overflowY:o,overflowX:l}=window.getComputedStyle(t);m=V(window),y=B(window),L=t.style.left,T=t.style.top,E=window.location.href,t.style.left=`-${m}px`,t.style.top=`-${y}px`,l!=="hidden"&&(l==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),o!=="hidden"&&(o==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,c.is.ios===!0&&(i===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",p,s.passiveCapture),window.visualViewport.addEventListener("scroll",p,s.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",S,s.passiveCapture))}c.is.desktop===!0&&c.is.mac===!0&&window[`${e}EventListener`]("wheel",M,s.notPassive),e==="remove"&&(c.is.ios===!0&&(i===!0?(window.visualViewport.removeEventListener("resize",p,s.passiveCapture),window.visualViewport.removeEventListener("scroll",p,s.passiveCapture)):window.removeEventListener("scroll",S,s.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=L,t.style.top=T,window.location.href===E&&window.scrollTo(m,y),u=void 0)}function X(e){let t="add";if(e===!0){if(a++,d!==null){clearTimeout(d),d=null;return}if(a>1)return}else{if(a===0||(a--,a>0))return;if(t="remove",c.is.ios===!0&&c.is.nativeMobile===!0){d!==null&&clearTimeout(d),d=setTimeout(()=>{x(t),d=null},100);return}}x(t)}function U(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,X(t))}}}export{U as a,F as b,R as u};
