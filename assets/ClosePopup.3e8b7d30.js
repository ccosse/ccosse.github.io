import{e as z,g as r,h as m,i as L,a3 as we,a4 as _e,X as be,s as Y,y as qe,a5 as ke,k as Z,a6 as P,v as q,A as Ce,a7 as Ee,a8 as xe,a9 as Pe,aa as Se,ab as ee,ac as te,n as N,T as G,ad as Te,ae as Fe}from"./index.fb8c9c73.js";import{u as Be,a as $e,b as De,c as Ae,d as ze,e as Le}from"./use-prevent-scroll.94b8e8c1.js";var tt=z({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const n=r(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>m(e.tag,{class:n.value},L(t.default))}});let g=[],k=[];function ne(e){k=k.filter(t=>t!==e)}function Me(e){ne(e),k.push(e)}function V(e){ne(e),k.length===0&&g.length>0&&(g[g.length-1](),g=[])}function Qe(e){k.length===0?e():g.push(e)}function nt(e){g=g.filter(t=>t!==e)}const ot={name:String};function it(e){return r(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function at(e={}){return(t,n,i)=>{t[n](m("input",{class:"hidden"+(i||""),...e.value}))}}function st(e){return r(()=>e.name||e.for)}var lt=z({name:"QCardActions",props:{...we,vertical:Boolean},setup(e,{slots:t}){const n=_e(e),i=r(()=>`q-card__actions ${n.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>m("div",{class:i.value},L(t.default))}});function He(){let e;const t=Z();function n(){e=void 0}return be(n),Y(n),{removeTick:n,registerTick(i){e=i,qe(()=>{e===i&&(ke(t)===!1&&e(),e=void 0)})}}}const Ke={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Oe(e,t=()=>{},n=()=>{}){return{transitionProps:r(()=>{const i=`q-transition--${e.transitionShow||t()}`,a=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${i}-enter-from`,enterActiveClass:`${i}-enter-active`,enterToClass:`${i}-enter-to`,leaveFromClass:`${a}-leave-from`,leaveActiveClass:`${a}-leave-active`,leaveToClass:`${a}-leave-to`}}),transitionStyle:r(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}const S=[];function Ie(e){return S.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function Re(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return P(e)}else if(e.__qPortal===!0){const n=P(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=P(e)}while(e!=null)}function je(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=Re(e,t);continue}e.hide(t)}e=P(e)}}function Ne(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Ge(e,t,n,i){const a=q(!1),u=q(!1);let l=null;const d={},c=i==="dialog"&&Ne(e);function f(h){if(h===!0){V(d),u.value=!0;return}u.value=!1,a.value===!1&&(c===!1&&l===null&&(l=Pe(!1,i)),a.value=!0,S.push(e.proxy),Me(d))}function v(h){if(u.value=!1,h!==!0)return;V(d),a.value=!1;const _=S.indexOf(e.proxy);_!==-1&&S.splice(_,1),l!==null&&(Se(l),l=null)}return Ce(()=>{v(!0)}),e.proxy.__qPortal=!0,Ee(e.proxy,"contentEl",()=>t.value),{showPortal:f,hidePortal:v,portalIsActive:a,portalIsAccessible:u,renderPortal:()=>c===!0?n():a.value===!0?[m(xe,{to:l},n())]:void 0}}const p=[];let w;function Ve(e){w=e.keyCode===27}function We(){w===!0&&(w=!1)}function Ue(e){w===!0&&(w=!1,ee(e,27)===!0&&p[p.length-1](e))}function oe(e){window[e]("keydown",Ve),window[e]("blur",We),window[e]("keyup",Ue),w=!1}function Xe(e){te.is.desktop===!0&&(p.push(e),p.length===1&&oe("addEventListener"))}function W(e){const t=p.indexOf(e);t>-1&&(p.splice(t,1),p.length===0&&oe("removeEventListener"))}const y=[];function ie(e){y[y.length-1](e)}function Je(e){te.is.desktop===!0&&(y.push(e),y.length===1&&document.body.addEventListener("focusin",ie))}function U(e){const t=y.indexOf(e);t>-1&&(y.splice(t,1),y.length===0&&document.body.removeEventListener("focusin",ie))}let x=0;const Ye={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},X={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var ut=z({name:"QDialog",inheritAttrs:!1,props:{...Be,...Ke,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...$e,"shake","click","escapeKey"],setup(e,{slots:t,emit:n,attrs:i}){const a=Z(),u=q(null),l=q(!1),d=q(!1);let c=null,f=null,v,h;const _=r(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:M}=Le(),{registerTimeout:Q}=De(),{registerTick:ae,removeTick:H}=He(),{transitionProps:se,transitionStyle:K}=Oe(e,()=>X[e.position][0],()=>X[e.position][1]),{showPortal:O,hidePortal:I,portalIsAccessible:le,renderPortal:ue}=Ge(a,u,ye,"dialog"),{hide:C}=Ae({showing:l,hideOnRouteChange:_,handleShow:ve,handleHide:he,processOnMount:!0}),{addToHistory:re,removeFromHistory:ce}=ze(l,C,_),de=r(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Ye[e.position]}`+(d.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),E=r(()=>l.value===!0&&e.seamless!==!0),fe=r(()=>e.autoClose===!0?{onClick:ge}:{}),me=r(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${E.value===!0?"modal":"seamless"}`,i.class]);N(()=>e.maximized,o=>{l.value===!0&&B(o)}),N(E,o=>{M(o),o===!0?(Je($),Xe(F)):(U($),W(F))});function ve(o){re(),f=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,B(e.maximized),O(),d.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),ae(b)):H(),Q(()=>{if(a.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:s,bottom:D}=document.activeElement.getBoundingClientRect(),{innerHeight:j}=window,A=window.visualViewport!==void 0?window.visualViewport.height:j;s>0&&D>A/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-A,D>=j?1/0:Math.ceil(document.scrollingElement.scrollTop+D-A/2))),document.activeElement.scrollIntoView()}h=!0,u.value.click(),h=!1}O(!0),d.value=!1,n("show",o)},e.transitionDuration)}function he(o){H(),ce(),R(!0),d.value=!0,I(),f!==null&&(((o&&o.type.indexOf("key")===0?f.closest('[tabindex]:not([tabindex^="-"])'):void 0)||f).focus(),f=null),Q(()=>{I(!0),d.value=!1,n("hide",o)},e.transitionDuration)}function b(o){Qe(()=>{let s=u.value;s===null||s.contains(document.activeElement)===!0||(s=(o!==""?s.querySelector(o):null)||s.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||s.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||s.querySelector("[autofocus], [data-autofocus]")||s,s.focus({preventScroll:!0}))})}function T(o){o&&typeof o.focus=="function"?o.focus({preventScroll:!0}):b(),n("shake");const s=u.value;s!==null&&(s.classList.remove("q-animate--scale"),s.classList.add("q-animate--scale"),c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,u.value!==null&&(s.classList.remove("q-animate--scale"),b())},170))}function F(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&T():(n("escapeKey"),C()))}function R(o){c!==null&&(clearTimeout(c),c=null),(o===!0||l.value===!0)&&(B(!1),e.seamless!==!0&&(M(!1),U($),W(F))),o!==!0&&(f=null)}function B(o){o===!0?v!==!0&&(x<1&&document.body.classList.add("q-body--dialog"),x++,v=!0):v===!0&&(x<2&&document.body.classList.remove("q-body--dialog"),x--,v=!1)}function ge(o){h!==!0&&(C(o),n("click",o))}function pe(o){e.persistent!==!0&&e.noBackdropDismiss!==!0?C(o):e.noShake!==!0&&T()}function $(o){e.allowFocusOutside!==!0&&le.value===!0&&Te(u.value,o.target)!==!0&&b('[tabindex]:not([tabindex="-1"])')}Object.assign(a.proxy,{focus:b,shake:T,__updateRefocusTarget(o){f=o||null}}),Y(R);function ye(){return m("div",{role:"dialog","aria-modal":E.value===!0?"true":"false",...i,class:me.value},[m(G,{name:"q-transition--fade",appear:!0},()=>E.value===!0?m("div",{class:"q-dialog__backdrop fixed-full",style:K.value,"aria-hidden":"true",tabindex:-1,onClick:pe}):null),m(G,se.value,()=>l.value===!0?m("div",{ref:u,class:de.value,style:K.value,tabindex:-1,...fe.value},L(t.default)):null)])}return ue}});function J(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var rt=Fe({name:"close-popup",beforeMount(e,{value:t}){const n={depth:J(t),handler(i){n.depth!==0&&setTimeout(()=>{const a=Ie(e);a!==void 0&&je(a,i,n.depth)})},handlerKey(i){ee(i,13)===!0&&n.handler(i)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:t,oldValue:n}){t!==n&&(e.__qclosepopup.depth=J(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});export{rt as C,ut as Q,tt as a,lt as b,Qe as c,st as d,Ke as e,He as f,Oe as g,Ge as h,Je as i,U as j,W as k,Re as l,Xe as m,it as n,at as o,S as p,nt as r,ot as u};
