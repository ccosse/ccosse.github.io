import{o as T,ax as m,W as c,y as s,Y as E,ay as S}from"./index.a39a3bc7.js";import{b as P,a as H,h as q}from"./scroll.2850d4c7.js";function X(o,e,r){let t;function l(){t!==void 0&&(m.remove(t),t=void 0)}return T(()=>{o.value===!0&&l()}),{removeFromHistory:l,addToHistory(){t={condition:()=>r.value===!0,handler:e},m.add(t)}}}let d=0,p,v,a,w=!1,h,y,g,n=null;function x(o){C(o)&&E(o)}function C(o){if(o.target===document.body||o.target.classList.contains("q-layout__backdrop"))return!0;const e=S(o),r=o.shiftKey&&!o.deltaX,t=!r&&Math.abs(o.deltaX)<=Math.abs(o.deltaY),l=r||t?o.deltaY:o.deltaX;for(let f=0;f<e.length;f++){const i=e[f];if(q(i,t))return t?l<0&&i.scrollTop===0?!0:l>0&&i.scrollTop+i.clientHeight===i.scrollHeight:l<0&&i.scrollLeft===0?!0:l>0&&i.scrollLeft+i.clientWidth===i.scrollWidth}return!0}function b(o){o.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function u(o){w!==!0&&(w=!0,requestAnimationFrame(()=>{w=!1;const{height:e}=o.target,{clientHeight:r,scrollTop:t}=document.scrollingElement;(a===void 0||e!==window.innerHeight)&&(a=r-e,document.scrollingElement.scrollTop=t),t>a&&(document.scrollingElement.scrollTop-=Math.ceil((t-a)/8))}))}function L(o){const e=document.body,r=window.visualViewport!==void 0;if(o==="add"){const{overflowY:t,overflowX:l}=window.getComputedStyle(e);p=P(window),v=H(window),h=e.style.left,y=e.style.top,g=window.location.href,e.style.left=`-${p}px`,e.style.top=`-${v}px`,l!=="hidden"&&(l==="scroll"||e.scrollWidth>window.innerWidth)&&e.classList.add("q-body--force-scrollbar-x"),t!=="hidden"&&(t==="scroll"||e.scrollHeight>window.innerHeight)&&e.classList.add("q-body--force-scrollbar-y"),e.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,c.is.ios===!0&&(r===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",u,s.passiveCapture),window.visualViewport.addEventListener("scroll",u,s.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",b,s.passiveCapture))}c.is.desktop===!0&&c.is.mac===!0&&window[`${o}EventListener`]("wheel",x,s.notPassive),o==="remove"&&(c.is.ios===!0&&(r===!0?(window.visualViewport.removeEventListener("resize",u,s.passiveCapture),window.visualViewport.removeEventListener("scroll",u,s.passiveCapture)):window.removeEventListener("scroll",b,s.passiveCapture)),e.classList.remove("q-body--prevent-scroll"),e.classList.remove("q-body--force-scrollbar-x"),e.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,e.style.left=h,e.style.top=y,window.location.href===g&&window.scrollTo(p,v),a=void 0)}function V(o){let e="add";if(o===!0){if(d++,n!==null){clearTimeout(n),n=null;return}if(d>1)return}else{if(d===0||(d--,d>0))return;if(e="remove",c.is.ios===!0&&c.is.nativeMobile===!0){n!==null&&clearTimeout(n),n=setTimeout(()=>{L(e),n=null},100);return}}L(e)}function z(){let o;return{preventBodyScroll(e){e!==o&&(o!==void 0||e===!0)&&(o=e,V(e))}}}export{z as a,X as u};
