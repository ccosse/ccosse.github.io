import{c as z,a as s,d as l,z as F,ak as de,al as fe,S as W,W as U,r as T,w as R,o as me,X as I,g as he,am as ve,an as ge}from"./index.5667ff15.js";import{u as ye,a as pe}from"./use-prevent-scroll.bf5fbae0.js";import{u as xe,a as _e,b as we,c as ke}from"./use-timeout.36e064a8.js";import{u as qe,a as be,b as Ee,c as Be,d as Ce,g as Se,e as Te}from"./use-tick.7a61361c.js";var Oe=z({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:n}){const o=s(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>l(e.tag,{class:o.value},F(n.default))}});const Re={name:String};function Ie(e){return s(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function Qe(e={}){return(n,o,a)=>{n[o](l("input",{class:"hidden"+(a||""),...e.value}))}}function je(e){return s(()=>e.name||e.for)}var Ve=z({name:"QCardActions",props:{...de,vertical:Boolean},setup(e,{slots:n}){const o=fe(e),a=s(()=>`q-card__actions ${o.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>l("div",{class:a.value},F(n.default))}});const d=[];let v;function ze(e){v=e.keyCode===27}function Fe(){v===!0&&(v=!1)}function Pe(e){v===!0&&(v=!1,W(e,27)===!0&&d[d.length-1](e))}function X(e){window[e]("keydown",ze),window[e]("blur",Fe),window[e]("keyup",Pe),v=!1}function De(e){U.is.desktop===!0&&(d.push(e),d.length===1&&X("addEventListener"))}function Q(e){const n=d.indexOf(e);n>-1&&(d.splice(n,1),d.length===0&&X("removeEventListener"))}const f=[];function G(e){f[f.length-1](e)}function Le(e){U.is.desktop===!0&&(f.push(e),f.length===1&&document.body.addEventListener("focusin",G))}function j(e){const n=f.indexOf(e);n>-1&&(f.splice(n,1),f.length===0&&document.body.removeEventListener("focusin",G))}let w=0;const Ke={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},V={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Ne=z({name:"QDialog",inheritAttrs:!1,props:{...xe,...qe,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[..._e,"shake","click","escapeKey"],setup(e,{slots:n,emit:o,attrs:a}){const m=he(),u=T(null),h=T(!1),g=T(!1);let r=null,c=null,p,k;const P=s(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:D}=pe(),{registerTimeout:L}=we(),{registerTick:J,removeTick:K}=be(),{transitionProps:Y,transitionStyle:A}=Ee(e,()=>V[e.position][0],()=>V[e.position][1]),{showPortal:H,hidePortal:M,portalIsAccessible:Z,renderPortal:ee}=Be(m,u,ce,"dialog"),{hide:x}=ke({showing:h,hideOnRouteChange:P,handleShow:se,handleHide:le,processOnMount:!0}),{addToHistory:te,removeFromHistory:ne}=ye(h,x,P),oe=s(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Ke[e.position]}`+(g.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),_=s(()=>h.value===!0&&e.seamless!==!0),ie=s(()=>e.autoClose===!0?{onClick:ue}:{}),ae=s(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${_.value===!0?"modal":"seamless"}`,a.class]);R(()=>e.maximized,t=>{h.value===!0&&E(t)}),R(_,t=>{D(t),t===!0?(Le(B),De(b)):(j(B),Q(b))});function se(t){te(),c=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,E(e.maximized),H(),g.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),J(y)):K(),L(()=>{if(m.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:i,bottom:C}=document.activeElement.getBoundingClientRect(),{innerHeight:O}=window,S=window.visualViewport!==void 0?window.visualViewport.height:O;i>0&&C>S/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-S,C>=O?1/0:Math.ceil(document.scrollingElement.scrollTop+C-S/2))),document.activeElement.scrollIntoView()}k=!0,u.value.click(),k=!1}H(!0),g.value=!1,o("show",t)},e.transitionDuration)}function le(t){K(),ne(),$(!0),g.value=!0,M(),c!==null&&(((t&&t.type.indexOf("key")===0?c.closest('[tabindex]:not([tabindex^="-"])'):void 0)||c).focus(),c=null),L(()=>{M(!0),g.value=!1,o("hide",t)},e.transitionDuration)}function y(t){Ce(()=>{let i=u.value;i===null||i.contains(document.activeElement)===!0||(i=(t!==""?i.querySelector(t):null)||i.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||i.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||i.querySelector("[autofocus], [data-autofocus]")||i,i.focus({preventScroll:!0}))})}function q(t){t&&typeof t.focus=="function"?t.focus({preventScroll:!0}):y(),o("shake");const i=u.value;i!==null&&(i.classList.remove("q-animate--scale"),i.classList.add("q-animate--scale"),r!==null&&clearTimeout(r),r=setTimeout(()=>{r=null,u.value!==null&&(i.classList.remove("q-animate--scale"),y())},170))}function b(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&q():(o("escapeKey"),x()))}function $(t){r!==null&&(clearTimeout(r),r=null),(t===!0||h.value===!0)&&(E(!1),e.seamless!==!0&&(D(!1),j(B),Q(b))),t!==!0&&(c=null)}function E(t){t===!0?p!==!0&&(w<1&&document.body.classList.add("q-body--dialog"),w++,p=!0):p===!0&&(w<2&&document.body.classList.remove("q-body--dialog"),w--,p=!1)}function ue(t){k!==!0&&(x(t),o("click",t))}function re(t){e.persistent!==!0&&e.noBackdropDismiss!==!0?x(t):e.noShake!==!0&&q()}function B(t){e.allowFocusOutside!==!0&&Z.value===!0&&ve(u.value,t.target)!==!0&&y('[tabindex]:not([tabindex="-1"])')}Object.assign(m.proxy,{focus:y,shake:q,__updateRefocusTarget(t){c=t||null}}),me($);function ce(){return l("div",{role:"dialog","aria-modal":_.value===!0?"true":"false",...a,class:ae.value},[l(I,{name:"q-transition--fade",appear:!0},()=>_.value===!0?l("div",{class:"q-dialog__backdrop fixed-full",style:A.value,"aria-hidden":"true",tabindex:-1,onClick:re}):null),l(I,Y.value,()=>h.value===!0?l("div",{ref:u,class:oe.value,style:A.value,tabindex:-1,...ie.value},F(n.default)):null)])}return ee}});function N(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const n=parseInt(e,10);return isNaN(n)?0:n}var We=ge({name:"close-popup",beforeMount(e,{value:n}){const o={depth:N(n),handler(a){o.depth!==0&&setTimeout(()=>{const m=Se(e);m!==void 0&&Te(m,a,o.depth)})},handlerKey(a){W(a,13)===!0&&o.handler(a)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:n,oldValue:o}){n!==o&&(e.__qclosepopup.depth=N(n))},beforeUnmount(e){const n=e.__qclosepopup;e.removeEventListener("click",n.handler),e.removeEventListener("keyup",n.handlerKey),delete e.__qclosepopup}});export{We as C,Oe as Q,Ie as a,Qe as b,Ve as c,Ne as d,je as e,Le as f,Q as g,De as h,j as r,Re as u};
