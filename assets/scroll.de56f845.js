import{D as m,E as a}from"./index.ec3b7c2a.js";const p=[null,document,document.body,document.scrollingElement,document.documentElement];function y(o,n){let t=m(n);if(t===void 0){if(o==null)return window;t=o.closest(".scroll,.scroll-y,.overflow-auto")}return p.includes(t)?window:t}function h(o){return o===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:o.scrollTop}function g(o){return o===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:o.scrollLeft}function f(o,n,t=0){const e=arguments[3]===void 0?performance.now():arguments[3],i=h(o);if(t<=0){i!==n&&d(o,n);return}requestAnimationFrame(r=>{const s=r-e,c=i+(n-i)/Math.max(s,t)*s;d(o,c),c!==n&&f(o,n,t-s,r)})}function w(o,n,t=0){const e=arguments[3]===void 0?performance.now():arguments[3],i=g(o);if(t<=0){i!==n&&u(o,n);return}requestAnimationFrame(r=>{const s=r-e,c=i+(n-i)/Math.max(s,t)*s;u(o,c),c!==n&&w(o,n,t-s,r)})}function d(o,n){if(o===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,n);return}o.scrollTop=n}function u(o,n){if(o===window){window.scrollTo(n,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}o.scrollLeft=n}function S(o,n,t){if(t){f(o,n,t);return}d(o,n)}function b(o,n,t){if(t){w(o,n,t);return}u(o,n)}let l;function E(){if(l!==void 0)return l;const o=document.createElement("p"),n=document.createElement("div");a(o,{width:"100%",height:"200px"}),a(n,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),n.appendChild(o),document.body.appendChild(n);const t=o.offsetWidth;n.style.overflow="scroll";let e=o.offsetWidth;return t===e&&(e=n.clientWidth),n.remove(),l=t-e,l}function x(o,n=!0){return!o||o.nodeType!==Node.ELEMENT_NODE?!1:n?o.scrollHeight>o.clientHeight&&(o.classList.contains("scroll")||o.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(o)["overflow-y"])):o.scrollWidth>o.clientWidth&&(o.classList.contains("scroll")||o.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(o)["overflow-x"]))}export{h as a,g as b,E as c,b as d,y as g,x as h,S as s};
