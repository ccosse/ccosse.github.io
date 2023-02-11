import{g as b,h as i,i as u,j as _,z as W,az as ve,aA as he,u as G,O as J,r as z,D as R,l as ge,am as I,aq as ye,N as pe}from"./index.2230bdf1.js";import{d as qe,f as xe,c as ke,e as be,b as _e,a as we,g as Be,h as Ee,i as Ce}from"./use-dark.508914ec.js";import{u as Se,a as Te,b as De,d as ze,g as Fe,e as Pe}from"./use-portal.2db3f8de.js";var Ie=b({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:n}){const o=i(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>u(e.tag,{class:o.value},_(n.default))}}),je=b({name:"QCard",props:{...qe,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:n}){const{proxy:{$q:o}}=W(),s=xe(e,o),l=i(()=>"q-card"+(s.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>u(e.tag,{class:l.value},_(n.default))}});const Ne={name:String};function Ve(e){return i(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function Ue(e={}){return(n,o,s)=>{n[o](u("input",{class:"hidden"+(s||""),...e.value}))}}function We(e){return i(()=>e.name||e.for)}var Ge=b({name:"QCardActions",props:{...ve,vertical:Boolean},setup(e,{slots:n}){const o=he(e),s=i(()=>`q-card__actions ${o.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>u("div",{class:s.value},_(n.default))}});const f=[];let h;function Le(e){h=e.keyCode===27}function Ae(){h===!0&&(h=!1)}function Ke(e){h===!0&&(h=!1,G(e,27)===!0&&f[f.length-1](e))}function X(e){window[e]("keydown",Le),window[e]("blur",Ae),window[e]("keyup",Ke),h=!1}function $e(e){J.is.desktop===!0&&(f.push(e),f.length===1&&X("addEventListener"))}function j(e){const n=f.indexOf(e);n>-1&&(f.splice(n,1),f.length===0&&X("removeEventListener"))}const m=[];function Y(e){m[m.length-1](e)}function He(e){J.is.desktop===!0&&(m.push(e),m.length===1&&document.body.addEventListener("focusin",Y))}function N(e){const n=m.indexOf(e);n>-1&&(m.splice(n,1),m.length===0&&document.body.removeEventListener("focusin",Y))}let k=0;const Me={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},V={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Je=b({name:"QDialog",inheritAttrs:!1,props:{...ke,...Se,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...be,"shake","click","escapeKey"],setup(e,{slots:n,emit:o,attrs:s}){const l=W(),{proxy:{$q:F}}=l,r=z(null),v=z(!1),g=z(!1);let c=null,d=null,p,w;const P=i(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:L}=Ce(),{registerTimeout:A}=_e(),{registerTick:Z,removeTick:K}=we(),{transitionProps:ee,transitionStyle:$}=Te(e,()=>V[e.position][0],()=>V[e.position][1]),{showPortal:H,hidePortal:M,portalIsAccessible:te,renderPortal:ne}=De(l,r,me,"dialog"),{hide:q}=Be({showing:v,hideOnRouteChange:P,handleShow:ue,handleHide:re,processOnMount:!0}),{addToHistory:oe,removeFromHistory:ae}=Ee(v,q,P),se=i(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Me[e.position]}`+(g.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),x=i(()=>v.value===!0&&e.seamless!==!0),ie=i(()=>e.autoClose===!0?{onClick:ce}:{}),le=i(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${x.value===!0?"modal":"seamless"}`,s.class]);R(()=>e.maximized,t=>{v.value===!0&&C(t)}),R(x,t=>{L(t),t===!0?(He(S),$e(E)):(N(S),j(E))});function ue(t){oe(),d=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,C(e.maximized),H(),g.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),Z(y)):K(),A(()=>{if(l.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:a,bottom:T}=document.activeElement.getBoundingClientRect(),{innerHeight:Q}=window,D=window.visualViewport!==void 0?window.visualViewport.height:Q;a>0&&T>D/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-D,T>=Q?1/0:Math.ceil(document.scrollingElement.scrollTop+T-D/2))),document.activeElement.scrollIntoView()}w=!0,r.value.click(),w=!1}H(!0),g.value=!1,o("show",t)},e.transitionDuration)}function re(t){K(),ae(),O(!0),g.value=!0,M(),d!==null&&(((t&&t.type.indexOf("key")===0?d.closest('[tabindex]:not([tabindex^="-"])'):void 0)||d).focus(),d=null),A(()=>{M(!0),g.value=!1,o("hide",t)},e.transitionDuration)}function y(t){ze(()=>{let a=r.value;a===null||a.contains(document.activeElement)===!0||(a=(t!==""?a.querySelector(t):null)||a.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||a.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||a.querySelector("[autofocus], [data-autofocus]")||a,a.focus({preventScroll:!0}))})}function B(t){t&&typeof t.focus=="function"?t.focus({preventScroll:!0}):y(),o("shake");const a=r.value;a!==null&&(a.classList.remove("q-animate--scale"),a.classList.add("q-animate--scale"),c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,r.value!==null&&(a.classList.remove("q-animate--scale"),y())},170))}function E(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&B():(o("escapeKey"),q()))}function O(t){c!==null&&(clearTimeout(c),c=null),(t===!0||v.value===!0)&&(C(!1),e.seamless!==!0&&(L(!1),N(S),j(E))),t!==!0&&(d=null)}function C(t){t===!0?p!==!0&&(k<1&&document.body.classList.add("q-body--dialog"),k++,p=!0):p===!0&&(k<2&&document.body.classList.remove("q-body--dialog"),k--,p=!1)}function ce(t){w!==!0&&(q(t),o("click",t))}function de(t){e.persistent!==!0&&e.noBackdropDismiss!==!0?q(t):e.noShake!==!0&&B(t.relatedTarget)}function S(t){e.allowFocusOutside!==!0&&te.value===!0&&ye(r.value,t.target)!==!0&&y('[tabindex]:not([tabindex="-1"])')}Object.assign(l.proxy,{focus:y,shake:B,__updateRefocusTarget(t){d=t||null}}),ge(O);const fe=F.platform.is.ios===!0||F.platform.is.safari?"onClick":"onFocusin";function me(){return u("div",{role:"dialog","aria-modal":x.value===!0?"true":"false",...s,class:le.value},[u(I,{name:"q-transition--fade",appear:!0},()=>x.value===!0?u("div",{class:"q-dialog__backdrop fixed-full",style:$.value,"aria-hidden":"true",tabindex:-1,[fe]:de}):null),u(I,ee.value,()=>v.value===!0?u("div",{ref:r,class:se.value,style:$.value,tabindex:-1,...ie.value},_(n.default)):null)])}return ne}});function U(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const n=parseInt(e,10);return isNaN(n)?0:n}var Xe=pe({name:"close-popup",beforeMount(e,{value:n}){const o={depth:U(n),handler(s){o.depth!==0&&setTimeout(()=>{const l=Fe(e);l!==void 0&&Pe(l,s,o.depth)})},handlerKey(s){G(s,13)===!0&&o.handler(s)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:n,oldValue:o}){n!==o&&(e.__qclosepopup.depth=U(n))},beforeUnmount(e){const n=e.__qclosepopup;e.removeEventListener("click",n.handler),e.removeEventListener("keyup",n.handlerKey),delete e.__qclosepopup}});export{Xe as C,Ie as Q,je as a,Ve as b,Ue as c,He as d,j as e,$e as f,We as g,Je as h,Ge as i,N as r,Ne as u};
