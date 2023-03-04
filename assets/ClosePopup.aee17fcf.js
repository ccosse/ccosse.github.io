import{c as N,aJ as me,aK as he,a as m,h,d as U,n as W,B as J,r as S,u as O,x as ve,T as R,y as ge,aF as ye,ai as pe}from"./index.d600388f.js";import{u as xe,a as ke}from"./use-prevent-scroll.a1a3b042.js";import{u as qe,a as be,b as we,d as _e,c as Ee,e as Be,h as Ce,f as Te,q as Se,r as Pe,t as De}from"./uid.667792d6.js";var Re=N({name:"QCardActions",props:{...me,vertical:Boolean},setup(e,{slots:n}){const o=he(e),s=m(()=>`q-card__actions ${o.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>h("div",{class:s.value},U(n.default))}});const c=[];let v;function Fe(e){v=e.keyCode===27}function Le(){v===!0&&(v=!1)}function Ke(e){v===!0&&(v=!1,W(e,27)===!0&&c[c.length-1](e))}function G(e){window[e]("keydown",Fe),window[e]("blur",Le),window[e]("keyup",Ke),v=!1}function ze(e){J.is.desktop===!0&&(c.push(e),c.length===1&&G("addEventListener"))}function I(e){const n=c.indexOf(e);n>-1&&(c.splice(n,1),c.length===0&&G("removeEventListener"))}const d=[];function X(e){d[d.length-1](e)}function He(e){J.is.desktop===!0&&(d.push(e),d.length===1&&document.body.addEventListener("focusin",X))}function Q(e){const n=d.indexOf(e);n>-1&&(d.splice(n,1),d.length===0&&document.body.removeEventListener("focusin",X))}let q=0;const Me={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},j={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Ie=N({name:"QDialog",inheritAttrs:!1,props:{...qe,...be,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...we,"shake","click","escapeKey"],setup(e,{slots:n,emit:o,attrs:s}){const a=ge(),{proxy:{$q:P}}=a,l=S(null),f=S(!1),g=S(!1);let u=null,r=null,p,b;const D=m(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:F}=ke(),{registerTimeout:L}=_e(),{registerTick:Y,removeTick:K}=Ee(),{transitionProps:Z,transitionStyle:z}=Be(e,()=>j[e.position][0],()=>j[e.position][1]),{showPortal:H,hidePortal:M,portalIsAccessible:ee,renderPortal:te}=Ce(a,l,fe,"dialog"),{hide:x}=Te({showing:f,hideOnRouteChange:D,handleShow:le,handleHide:ue,processOnMount:!0}),{addToHistory:ne,removeFromHistory:oe}=xe(f,x,D),ie=m(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Me[e.position]}`+(g.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),k=m(()=>f.value===!0&&e.seamless!==!0),se=m(()=>e.autoClose===!0?{onClick:re}:{}),ae=m(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${k.value===!0?"modal":"seamless"}`,s.class]);O(()=>e.maximized,t=>{f.value===!0&&E(t)}),O(k,t=>{F(t),t===!0?(He(B),ze(_)):(Q(B),I(_))});function le(t){ne(),r=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,E(e.maximized),H(),g.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),Y(y)):K(),L(()=>{if(a.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:i,bottom:C}=document.activeElement.getBoundingClientRect(),{innerHeight:A}=window,T=window.visualViewport!==void 0?window.visualViewport.height:A;i>0&&C>T/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-T,C>=A?1/0:Math.ceil(document.scrollingElement.scrollTop+C-T/2))),document.activeElement.scrollIntoView()}b=!0,l.value.click(),b=!1}H(!0),g.value=!1,o("show",t)},e.transitionDuration)}function ue(t){K(),oe(),$(!0),g.value=!0,M(),r!==null&&(((t&&t.type.indexOf("key")===0?r.closest('[tabindex]:not([tabindex^="-"])'):void 0)||r).focus(),r=null),L(()=>{M(!0),g.value=!1,o("hide",t)},e.transitionDuration)}function y(t){Se(()=>{let i=l.value;i===null||i.contains(document.activeElement)===!0||(i=(t!==""?i.querySelector(t):null)||i.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||i.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||i.querySelector("[autofocus], [data-autofocus]")||i,i.focus({preventScroll:!0}))})}function w(t){t&&typeof t.focus=="function"?t.focus({preventScroll:!0}):y(),o("shake");const i=l.value;i!==null&&(i.classList.remove("q-animate--scale"),i.classList.add("q-animate--scale"),u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,l.value!==null&&(i.classList.remove("q-animate--scale"),y())},170))}function _(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&w():(o("escapeKey"),x()))}function $(t){u!==null&&(clearTimeout(u),u=null),(t===!0||f.value===!0)&&(E(!1),e.seamless!==!0&&(F(!1),Q(B),I(_))),t!==!0&&(r=null)}function E(t){t===!0?p!==!0&&(q<1&&document.body.classList.add("q-body--dialog"),q++,p=!0):p===!0&&(q<2&&document.body.classList.remove("q-body--dialog"),q--,p=!1)}function re(t){b!==!0&&(x(t),o("click",t))}function ce(t){e.persistent!==!0&&e.noBackdropDismiss!==!0?x(t):e.noShake!==!0&&w(t.relatedTarget)}function B(t){e.allowFocusOutside!==!0&&ee.value===!0&&ye(l.value,t.target)!==!0&&y('[tabindex]:not([tabindex="-1"])')}Object.assign(a.proxy,{focus:y,shake:w,__updateRefocusTarget(t){r=t||null}}),ve($);const de=P.platform.is.ios===!0||P.platform.is.safari?"onClick":"onFocusin";function fe(){return h("div",{role:"dialog","aria-modal":k.value===!0?"true":"false",...s,class:ae.value},[h(R,{name:"q-transition--fade",appear:!0},()=>k.value===!0?h("div",{class:"q-dialog__backdrop fixed-full",style:z.value,"aria-hidden":"true",tabindex:-1,[de]:ce}):null),h(R,Z.value,()=>f.value===!0?h("div",{ref:l,class:ie.value,style:z.value,tabindex:-1,...se.value},U(n.default)):null)])}return te}});function V(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const n=parseInt(e,10);return isNaN(n)?0:n}var Qe=pe({name:"close-popup",beforeMount(e,{value:n}){const o={depth:V(n),handler(s){o.depth!==0&&setTimeout(()=>{const a=Pe(e);a!==void 0&&De(a,s,o.depth)})},handlerKey(s){W(s,13)===!0&&o.handler(s)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:n,oldValue:o}){n!==o&&(e.__qclosepopup.depth=V(n))},beforeUnmount(e){const n=e.__qclosepopup;e.removeEventListener("click",n.handler),e.removeEventListener("keyup",n.handlerKey),delete e.__qclosepopup}});export{Qe as C,Ie as Q,He as a,I as b,ze as c,Re as d,Q as r};
