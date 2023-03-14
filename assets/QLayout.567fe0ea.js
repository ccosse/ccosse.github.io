import{c as N,a as v,h as C,d as Ce,r as q,D as Qe,v as ee,x as U,E as Te,q as re,y as X,A as Se,F as R,u as _,G as ot,H as _e,I as ne,J as it,B as J,K as rt,t as oe,L as he,p as Pe,M as me,N as we,z as be,C as nt,O as qe,R as Oe,S as ut,U as st,V as ct,W as Fe,X as Ve,Y as dt,Z as ie,$ as vt}from"./index.d41949e8.js";import{u as ft,a as ht}from"./use-prevent-scroll.b7a6f442.js";import{u as mt,b as bt,d as gt,f as yt,i as pt,j as zt,k as St,s as Me,l as ge,g as ye}from"./scroll.a7c4301e.js";import{u as We,a as je}from"./use-dark.2220006b.js";import{b as j}from"./re-store.9b813dbf.js";import{c as wt}from"./QTooltip.92ef24cd.js";var Bt=N({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:u}){const r=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>C("div",{class:r.value,role:"toolbar"},Ce(u.default))}});function qt(){const e=q(!Qe.value);return e.value===!1&&ee(()=>{e.value=!0}),e}const Ne=typeof ResizeObserver!="undefined",Le=Ne===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var te=N({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:u}){let r=null,c,t={width:-1,height:-1};function l(f){f===!0||e.debounce===0||e.debounce==="0"?i():r===null&&(r=setTimeout(i,e.debounce))}function i(){if(r!==null&&(clearTimeout(r),r=null),c){const{offsetWidth:f,offsetHeight:d}=c;(f!==t.width||d!==t.height)&&(t={width:f,height:d},u("resize",t))}}const{proxy:a}=X();if(Ne===!0){let f;const d=n=>{c=a.$el.parentNode,c?(f=new ResizeObserver(l),f.observe(c),i()):n!==!0&&re(()=>{d(!0)})};return ee(()=>{d()}),U(()=>{r!==null&&clearTimeout(r),f!==void 0&&(f.disconnect!==void 0?f.disconnect():c&&f.unobserve(c))}),Te}else{let n=function(){r!==null&&(clearTimeout(r),r=null),d!==void 0&&(d.removeEventListener!==void 0&&d.removeEventListener("resize",l,Se.passive),d=void 0)},T=function(){n(),c&&c.contentDocument&&(d=c.contentDocument.defaultView,d.addEventListener("resize",l,Se.passive),i())};const f=qt();let d;return ee(()=>{re(()=>{c=a.$el,c&&T()})}),U(n),a.trigger=l,()=>{if(f.value===!0)return C("object",{style:Le.style,tabindex:-1,type:"text/html",data:Le.url,"aria-hidden":"true",onLoad:T})}}}}),Et=N({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:u,emit:r}){const{proxy:{$q:c}}=X(),t=_e(ne,R);if(t===R)return console.error("QHeader needs to be child of QLayout"),R;const l=q(parseInt(e.heightHint,10)),i=q(!0),a=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||c.platform.is.ios&&t.isContainer.value===!0),f=v(()=>{if(e.modelValue!==!0)return 0;if(a.value===!0)return i.value===!0?l.value:0;const h=l.value-t.scroll.value.position;return h>0?h:0}),d=v(()=>e.modelValue!==!0||a.value===!0&&i.value!==!0),n=v(()=>e.modelValue===!0&&d.value===!0&&e.reveal===!0),T=v(()=>"q-header q-layout__section--marginal "+(a.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),z=v(()=>{const h=t.rows.value.top,P={};return h[0]==="l"&&t.left.space===!0&&(P[c.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),h[2]==="r"&&t.right.space===!0&&(P[c.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),P});function b(h,P){t.update("header",h,P)}function g(h,P){h.value!==P&&(h.value=P)}function M({height:h}){g(l,h),b("size",h)}function x(h){n.value===!0&&g(i,!0),r("focusin",h)}_(()=>e.modelValue,h=>{b("space",h),g(i,!0),t.animate()}),_(f,h=>{b("offset",h)}),_(()=>e.reveal,h=>{h===!1&&g(i,e.modelValue)}),_(i,h=>{t.animate(),r("reveal",h)}),_(t.scroll,h=>{e.reveal===!0&&g(i,h.direction==="up"||h.position<=e.revealOffset||h.position-h.inflectionPoint<100)});const S={};return t.instances.header=S,e.modelValue===!0&&b("size",l.value),b("space",e.modelValue),b("offset",f.value),U(()=>{t.instances.header===S&&(t.instances.header=void 0,b("size",0),b("offset",0),b("space",!1))}),()=>{const h=ot(u.default,[]);return e.elevated===!0&&h.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),h.push(C(te,{debounce:0,onResize:M})),C("header",{class:T.value,style:z.value,onFocusin:x},h)}}});const $e={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Ct=Object.keys($e);$e.all=!0;function ke(e){const u={};for(const r of Ct)e[r]===!0&&(u[r]=!0);return Object.keys(u).length===0?$e:(u.horizontal===!0?u.left=u.right=!0:u.left===!0&&u.right===!0&&(u.horizontal=!0),u.vertical===!0?u.up=u.down=!0:u.up===!0&&u.down===!0&&(u.vertical=!0),u.horizontal===!0&&u.vertical===!0&&(u.all=!0),u)}function Be(e,u){return u.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof u.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(u.uid)===-1)}function pe(e,u,r){const c=we(e);let t,l=c.left-u.event.x,i=c.top-u.event.y,a=Math.abs(l),f=Math.abs(i);const d=u.direction;d.horizontal===!0&&d.vertical!==!0?t=l<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?t=i<0?"up":"down":d.up===!0&&i<0?(t="up",a>f&&(d.left===!0&&l<0?t="left":d.right===!0&&l>0&&(t="right"))):d.down===!0&&i>0?(t="down",a>f&&(d.left===!0&&l<0?t="left":d.right===!0&&l>0&&(t="right"))):d.left===!0&&l<0?(t="left",a<f&&(d.up===!0&&i<0?t="up":d.down===!0&&i>0&&(t="down"))):d.right===!0&&l>0&&(t="right",a<f&&(d.up===!0&&i<0?t="up":d.down===!0&&i>0&&(t="down")));let n=!1;if(t===void 0&&r===!1){if(u.event.isFirst===!0||u.event.lastDir===void 0)return{};t=u.event.lastDir,n=!0,t==="left"||t==="right"?(c.left-=l,a=0,l=0):(c.top-=i,f=0,i=0)}return{synthetic:n,payload:{evt:e,touch:u.event.mouse!==!0,mouse:u.event.mouse===!0,position:c,direction:t,isFirst:u.event.isFirst,isFinal:r===!0,duration:Date.now()-u.event.time,distance:{x:a,y:f},offset:{x:l,y:i},delta:{x:c.left-u.event.lastX,y:c.top-u.event.lastY}}}}let Tt=0;var Z=it({name:"touch-pan",beforeMount(e,{value:u,modifiers:r}){if(r.mouse!==!0&&J.has.touch!==!0)return;function c(l,i){r.mouse===!0&&i===!0?nt(l):(r.stop===!0&&me(l),r.prevent===!0&&Pe(l))}const t={uid:"qvtp_"+Tt++,handler:u,modifiers:r,direction:ke(r),noop:Te,mouseStart(l){Be(l,t)&&rt(l)&&(oe(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(Be(l,t)){const i=l.target;oe(t,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,i){if(J.is.firefox===!0&&he(e,!0),t.lastEvt=l,i===!0||r.stop===!0){if(t.direction.all!==!0&&(i!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const d=l.type.indexOf("mouse")>-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&Pe(d),l.cancelBubble===!0&&me(d),Object.assign(d,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:d}}me(l)}const{left:a,top:f}=we(l);t.event={x:a,y:f,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:f}},move(l){if(t.event===void 0)return;const i=we(l),a=i.left-t.event.x,f=i.top-t.event.y;if(a===0&&f===0)return;t.lastEvt=l;const d=t.event.mouse===!0,n=()=>{c(l,d);let b;r.preserveCursor!==!0&&r.preservecursor!==!0&&(b=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),wt(),t.styleCleanup=g=>{if(t.styleCleanup=void 0,b!==void 0&&(document.documentElement.style.cursor=b),document.body.classList.remove("non-selectable"),d===!0){const M=()=>{document.body.classList.remove("no-pointer-events--children")};g!==void 0?setTimeout(()=>{M(),g()},50):M()}else g!==void 0&&g()}};if(t.event.detected===!0){t.event.isFirst!==!0&&c(l,t.event.mouse);const{payload:b,synthetic:g}=pe(l,t,!1);b!==void 0&&(t.handler(b)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&n(),t.event.lastX=b.position.left,t.event.lastY=b.position.top,t.event.lastDir=g===!0?void 0:b.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||d===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){n(),t.event.detected=!0,t.move(l);return}const T=Math.abs(a),z=Math.abs(f);T!==z&&(t.direction.horizontal===!0&&T>z||t.direction.vertical===!0&&T<z||t.direction.up===!0&&T<z&&f<0||t.direction.down===!0&&T<z&&f>0||t.direction.left===!0&&T>z&&a<0||t.direction.right===!0&&T>z&&a>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,i){if(t.event!==void 0){if(be(t,"temp"),J.is.firefox===!0&&he(e,!1),i===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(pe(l===void 0?t.lastEvt:l,t).payload);const{payload:a}=pe(l===void 0?t.lastEvt:l,t,!0),f=()=>{t.handler(a)};t.styleCleanup!==void 0?t.styleCleanup(f):f()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,r.mouse===!0){const l=r.mouseCapture===!0||r.mousecapture===!0?"Capture":"";oe(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}J.has.touch===!0&&oe(t,"main",[[e,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,u){const r=e.__qtouchpan;r!==void 0&&(u.oldValue!==u.value&&(typeof value!="function"&&r.end(),r.handler=u.value),r.direction=ke(u.modifiers))},beforeUnmount(e){const u=e.__qtouchpan;u!==void 0&&(u.event!==void 0&&u.end(),be(u,"main"),be(u,"temp"),J.is.firefox===!0&&he(e,!1),u.styleCleanup!==void 0&&u.styleCleanup(),delete e.__qtouchpan)}});const Ee=150;var Ht=N({name:"QDrawer",inheritAttrs:!1,props:{...mt,...We,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...bt,"onLayout","miniState"],setup(e,{slots:u,emit:r,attrs:c}){const t=X(),{proxy:{$q:l}}=t,i=je(e,l),{preventBodyScroll:a}=ht(),{registerTimeout:f,removeTimeout:d}=gt(),n=_e(ne,R);if(n===R)return console.error("QDrawer needs to be child of QLayout"),R;let T,z=null,b;const g=q(e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint),M=v(()=>e.mini===!0&&g.value!==!0),x=v(()=>M.value===!0?e.miniWidth:e.width),S=q(e.showIfAbove===!0&&g.value===!1?!0:e.modelValue===!0),h=v(()=>e.persistent!==!0&&(g.value===!0||Y.value===!0));function P(o,p){if(D(),o!==!1&&n.animate(),B(0),g.value===!0){const L=n.instances[s.value];L!==void 0&&L.belowBreakpoint===!0&&L.hide(!1),V(1),n.isContainer.value!==!0&&a(!0)}else V(0),o!==!1&&de(!1);f(()=>{o!==!1&&de(!0),p!==!0&&r("show",o)},Ee)}function y(o,p){Q(),o!==!1&&n.animate(),V(0),B(H.value*x.value),ve(),p!==!0?f(()=>{r("hide",o)},Ee):d()}const{show:$,hide:O}=yt({showing:S,hideOnRouteChange:h,handleShow:P,handleHide:y}),{addToHistory:D,removeFromHistory:Q}=ft(S,O,h),A={belowBreakpoint:g,hide:O},E=v(()=>e.side==="right"),H=v(()=>(l.lang.rtl===!0?-1:1)*(E.value===!0?1:-1)),K=q(0),F=q(!1),G=q(!1),I=q(x.value*H.value),s=v(()=>E.value===!0?"left":"right"),m=v(()=>S.value===!0&&g.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:x.value:0),w=v(()=>e.overlay===!0||e.miniToOverlay===!0||n.view.value.indexOf(E.value?"R":"L")>-1||l.platform.is.ios===!0&&n.isContainer.value===!0),k=v(()=>e.overlay===!1&&S.value===!0&&g.value===!1),Y=v(()=>e.overlay===!0&&S.value===!0&&g.value===!1),ue=v(()=>"fullscreen q-drawer__backdrop"+(S.value===!1&&F.value===!1?" hidden":"")),se=v(()=>({backgroundColor:`rgba(0,0,0,${K.value*.4})`})),ae=v(()=>E.value===!0?n.rows.value.top[2]==="r":n.rows.value.top[0]==="l"),Xe=v(()=>E.value===!0?n.rows.value.bottom[2]==="r":n.rows.value.bottom[0]==="l"),Ye=v(()=>{const o={};return n.header.space===!0&&ae.value===!1&&(w.value===!0?o.top=`${n.header.offset}px`:n.header.space===!0&&(o.top=`${n.header.size}px`)),n.footer.space===!0&&Xe.value===!1&&(w.value===!0?o.bottom=`${n.footer.offset}px`:n.footer.space===!0&&(o.bottom=`${n.footer.size}px`)),o}),Ue=v(()=>{const o={width:`${x.value}px`,transform:`translateX(${I.value}px)`};return g.value===!0?o:Object.assign(o,Ye.value)}),Ke=v(()=>"q-drawer__content fit "+(n.isContainer.value!==!0?"scroll":"overflow-auto")),Ge=v(()=>`q-drawer q-drawer--${e.side}`+(G.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(i.value===!0?" q-drawer--dark q-dark":"")+(F.value===!0?" no-transition":S.value===!0?"":" q-layout--prevent-focus")+(g.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${M.value===!0?"mini":"standard"}`+(w.value===!0||k.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ae.value===!0?" q-drawer--top-padding":""))),Je=v(()=>{const o=l.lang.rtl===!0?e.side:s.value;return[[Z,at,void 0,{[o]:!0,mouse:!0}]]}),Ze=v(()=>{const o=l.lang.rtl===!0?s.value:e.side;return[[Z,xe,void 0,{[o]:!0,mouse:!0}]]}),et=v(()=>{const o=l.lang.rtl===!0?s.value:e.side;return[[Z,xe,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function ce(){lt(g,e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint)}_(g,o=>{o===!0?(T=S.value,S.value===!0&&O(!1)):e.overlay===!1&&e.behavior!=="mobile"&&T!==!1&&(S.value===!0?(B(0),V(0),ve()):$(!1))}),_(()=>e.side,(o,p)=>{n.instances[p]===A&&(n.instances[p]=void 0,n[p].space=!1,n[p].offset=0),n.instances[o]=A,n[o].size=x.value,n[o].space=k.value,n[o].offset=m.value}),_(n.totalWidth,()=>{(n.isContainer.value===!0||document.qScrollPrevented!==!0)&&ce()}),_(()=>e.behavior+e.breakpoint,ce),_(n.isContainer,o=>{S.value===!0&&a(o!==!0),o===!0&&ce()}),_(n.scrollbarWidth,()=>{B(S.value===!0?0:void 0)}),_(m,o=>{W("offset",o)}),_(k,o=>{r("onLayout",o),W("space",o)}),_(E,()=>{B()}),_(x,o=>{B(),fe(e.miniToOverlay,o)}),_(()=>e.miniToOverlay,o=>{fe(o,x.value)}),_(()=>l.lang.rtl,()=>{B()}),_(()=>e.mini,()=>{e.modelValue===!0&&(tt(),n.animate())}),_(M,o=>{r("miniState",o)});function B(o){o===void 0?re(()=>{o=S.value===!0?0:x.value,B(H.value*o)}):(n.isContainer.value===!0&&E.value===!0&&(g.value===!0||Math.abs(o)===x.value)&&(o+=H.value*n.scrollbarWidth.value),I.value=o)}function V(o){K.value=o}function de(o){const p=o===!0?"remove":n.isContainer.value!==!0?"add":"";p!==""&&document.body.classList[p]("q-body--drawer-toggle")}function tt(){z!==null&&clearTimeout(z),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),G.value=!0,z=setTimeout(()=>{z=null,G.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function at(o){if(S.value!==!1)return;const p=x.value,L=j(o.distance.x,0,p);if(o.isFinal===!0){L>=Math.min(75,p)===!0?$():(n.animate(),V(0),B(H.value*p)),F.value=!1;return}B((l.lang.rtl===!0?E.value!==!0:E.value)?Math.max(p-L,0):Math.min(0,L-p)),V(j(L/p,0,1)),o.isFirst===!0&&(F.value=!0)}function xe(o){if(S.value!==!0)return;const p=x.value,L=o.direction===e.side,le=(l.lang.rtl===!0?L!==!0:L)?j(o.distance.x,0,p):0;if(o.isFinal===!0){Math.abs(le)<Math.min(75,p)===!0?(n.animate(),V(1),B(0)):O(),F.value=!1;return}B(H.value*le),V(j(1-le/p,0,1)),o.isFirst===!0&&(F.value=!0)}function ve(){a(!1),de(!0)}function W(o,p){n.update(e.side,o,p)}function lt(o,p){o.value!==p&&(o.value=p)}function fe(o,p){W("size",o===!0?e.miniWidth:p)}return n.instances[e.side]=A,fe(e.miniToOverlay,x.value),W("space",k.value),W("offset",m.value),e.showIfAbove===!0&&e.modelValue!==!0&&S.value===!0&&e["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!0),ee(()=>{r("onLayout",k.value),r("miniState",M.value),T=e.showIfAbove===!0;const o=()=>{(S.value===!0?P:y)(!1,!0)};if(n.totalWidth.value!==0){re(o);return}b=_(n.totalWidth,()=>{b(),b=void 0,S.value===!1&&e.showIfAbove===!0&&g.value===!1?$(!1):o()})}),U(()=>{b!==void 0&&b(),z!==null&&(clearTimeout(z),z=null),S.value===!0&&ve(),n.instances[e.side]===A&&(n.instances[e.side]=void 0,W("size",0),W("offset",0),W("space",!1))}),()=>{const o=[];g.value===!0&&(e.noSwipeOpen===!1&&o.push(qe(C("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Je.value)),o.push(Oe("div",{ref:"backdrop",class:ue.value,style:se.value,"aria-hidden":"true",onClick:O},void 0,"backdrop",e.noSwipeBackdrop!==!0&&S.value===!0,()=>et.value)));const p=M.value===!0&&u.mini!==void 0,L=[C("div",{...c,key:""+p,class:[Ke.value,c.class]},p===!0?u.mini():Ce(u.default))];return e.elevated===!0&&S.value===!0&&L.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(Oe("aside",{ref:"content",class:Ge.value,style:Ue.value},L,"contentclose",e.noSwipeClose!==!0&&g.value===!0,()=>Ze.value)),C("div",{class:"q-drawer-container"},o)}}});const{passive:He}=Se,_t=["both","horizontal","vertical"];var Ie=N({name:"QScrollObserver",props:{axis:{type:String,validator:e=>_t.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:u}){const r={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let c=null,t,l;_(()=>e.scrollTarget,()=>{f(),a()});function i(){c!==null&&c();const T=Math.max(0,zt(t)),z=St(t),b={top:T-r.position.top,left:z-r.position.left};if(e.axis==="vertical"&&b.top===0||e.axis==="horizontal"&&b.left===0)return;const g=Math.abs(b.top)>=Math.abs(b.left)?b.top<0?"up":"down":b.left<0?"left":"right";r.position={top:T,left:z},r.directionChanged=r.direction!==g,r.delta=b,r.directionChanged===!0&&(r.direction=g,r.inflectionPoint=r.position),u("scroll",{...r})}function a(){t=pt(l,e.scrollTarget),t.addEventListener("scroll",d,He),d(!0)}function f(){t!==void 0&&(t.removeEventListener("scroll",d,He),t=void 0)}function d(T){if(T===!0||e.debounce===0||e.debounce==="0")i();else if(c===null){const[z,b]=e.debounce?[setTimeout(i,e.debounce),clearTimeout]:[requestAnimationFrame(i),cancelAnimationFrame];c=()=>{b(z),c=null}}}const{proxy:n}=X();return _(()=>n.$q.lang.rtl,i),ee(()=>{l=n.$el.parentNode,a()}),U(()=>{c!==null&&c(),f()}),Object.assign(n,{trigger:d,getPosition:()=>r}),Te}});const De=["vertical","horizontal"],ze={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Ae={prevent:!0,mouse:!0,mouseAllDir:!0},Re=e=>e>=250?50:Math.ceil(e/5);var Dt=N({name:"QScrollArea",props:{...We,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:u,emit:r}){const c=q(!1),t=q(!1),l=q(!1),i={vertical:q(0),horizontal:q(0)},a={vertical:{ref:q(null),position:q(0),size:q(0)},horizontal:{ref:q(null),position:q(0),size:q(0)}},{proxy:f}=X(),d=je(e,f.$q);let n=null,T;const z=q(null),b=v(()=>"q-scrollarea"+(d.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=v(()=>{const s=a.vertical.size.value-i.vertical.value;if(s<=0)return 0;const m=j(a.vertical.position.value/s,0,1);return Math.round(m*1e4)/1e4}),a.vertical.thumbHidden=v(()=>(e.visible===null?l.value:e.visible)!==!0&&c.value===!1&&t.value===!1||a.vertical.size.value<=i.vertical.value+1),a.vertical.thumbStart=v(()=>a.vertical.percentage.value*(i.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=v(()=>Math.round(j(i.vertical.value*i.vertical.value/a.vertical.size.value,Re(i.vertical.value),i.vertical.value))),a.vertical.style=v(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=v(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=v(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=v(()=>{const s=a.horizontal.size.value-i.horizontal.value;if(s<=0)return 0;const m=j(Math.abs(a.horizontal.position.value)/s,0,1);return Math.round(m*1e4)/1e4}),a.horizontal.thumbHidden=v(()=>(e.visible===null?l.value:e.visible)!==!0&&c.value===!1&&t.value===!1||a.horizontal.size.value<=i.horizontal.value+1),a.horizontal.thumbStart=v(()=>a.horizontal.percentage.value*(i.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=v(()=>Math.round(j(i.horizontal.value*i.horizontal.value/a.horizontal.size.value,Re(i.horizontal.value),i.horizontal.value))),a.horizontal.style=v(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[f.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=v(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=v(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const g=v(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),M=[[Z,s=>{D(s,"vertical")},void 0,{vertical:!0,...Ae}]],x=[[Z,s=>{D(s,"horizontal")},void 0,{horizontal:!0,...Ae}]];function S(){const s={};return De.forEach(m=>{const w=a[m];s[m+"Position"]=w.position.value,s[m+"Percentage"]=w.percentage.value,s[m+"Size"]=w.size.value,s[m+"ContainerSize"]=i[m].value}),s}const h=ut(()=>{const s=S();s.ref=f,r("scroll",s)},0);function P(s,m,w){if(De.includes(s)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(s==="vertical"?Me:ge)(z.value,m,w)}function y({height:s,width:m}){let w=!1;i.vertical.value!==s&&(i.vertical.value=s,w=!0),i.horizontal.value!==m&&(i.horizontal.value=m,w=!0),w===!0&&H()}function $({position:s}){let m=!1;a.vertical.position.value!==s.top&&(a.vertical.position.value=s.top,m=!0),a.horizontal.position.value!==s.left&&(a.horizontal.position.value=s.left,m=!0),m===!0&&H()}function O({height:s,width:m}){a.horizontal.size.value!==m&&(a.horizontal.size.value=m,H()),a.vertical.size.value!==s&&(a.vertical.size.value=s,H())}function D(s,m){const w=a[m];if(s.isFirst===!0){if(w.thumbHidden.value===!0)return;T=w.position.value,t.value=!0}else if(t.value!==!0)return;s.isFinal===!0&&(t.value=!1);const k=ze[m],Y=i[m].value,ue=(w.size.value-Y)/(Y-w.thumbSize.value),se=s.distance[k.dist],ae=T+(s.direction===k.dir?1:-1)*se*ue;K(ae,m)}function Q(s,m){const w=a[m];if(w.thumbHidden.value!==!0){const k=s[ze[m].offset];if(k<w.thumbStart.value||k>w.thumbStart.value+w.thumbSize.value){const Y=k-w.thumbSize.value/2;K(Y/i[m].value*w.size.value,m)}w.ref.value!==null&&w.ref.value.dispatchEvent(new MouseEvent(s.type,s))}}function A(s){Q(s,"vertical")}function E(s){Q(s,"horizontal")}function H(){c.value=!0,n!==null&&clearTimeout(n),n=setTimeout(()=>{n=null,c.value=!1},e.delay),e.onScroll!==void 0&&h()}function K(s,m){z.value[ze[m].scroll]=s}function F(){l.value=!0}function G(){l.value=!1}let I=null;return _(()=>f.$q.lang.rtl,s=>{z.value!==null&&ge(z.value,Math.abs(a.horizontal.position.value)*(s===!0?-1:1))}),st(()=>{I={top:a.vertical.position.value,left:a.horizontal.position.value}}),ct(()=>{if(I===null)return;const s=z.value;s!==null&&(ge(s,I.left),Me(s,I.top))}),U(h.cancel),Object.assign(f,{getScrollTarget:()=>z.value,getScroll:S,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:P,setScrollPercentage(s,m,w){P(s,m*(a[s].size.value-i[s].value)*(s==="horizontal"&&f.$q.lang.rtl===!0?-1:1),w)}}),()=>C("div",{class:b.value,onMouseenter:F,onMouseleave:G},[C("div",{ref:z,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[C("div",{class:"q-scrollarea__content absolute",style:g.value},Fe(u.default,[C(te,{debounce:0,onResize:O})])),C(Ie,{axis:"both",onScroll:$})]),C(te,{debounce:0,onResize:y}),C("div",{class:a.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:A}),C("div",{class:a.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:E}),qe(C("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),M),qe(C("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),x)])}}),At=N({name:"QPageContainer",setup(e,{slots:u}){const{proxy:{$q:r}}=X(),c=_e(ne,R);if(c===R)return console.error("QPageContainer needs to be child of QLayout"),R;Ve(dt,!0);const t=v(()=>{const l={};return c.header.space===!0&&(l.paddingTop=`${c.header.size}px`),c.right.space===!0&&(l[`padding${r.lang.rtl===!0?"Left":"Right"}`]=`${c.right.size}px`),c.footer.space===!0&&(l.paddingBottom=`${c.footer.size}px`),c.left.space===!0&&(l[`padding${r.lang.rtl===!0?"Right":"Left"}`]=`${c.left.size}px`),l});return()=>C("div",{class:"q-page-container",style:t.value},Ce(u.default))}}),Rt=N({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:u,emit:r}){const{proxy:{$q:c}}=X(),t=q(null),l=q(c.screen.height),i=q(e.container===!0?0:c.screen.width),a=q({position:0,direction:"down",inflectionPoint:0}),f=q(0),d=q(Qe.value===!0?0:ye()),n=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),T=v(()=>e.container===!1?{minHeight:c.screen.height+"px"}:null),z=v(()=>d.value!==0?{[c.lang.rtl===!0?"left":"right"]:`${d.value}px`}:null),b=v(()=>d.value!==0?{[c.lang.rtl===!0?"right":"left"]:0,[c.lang.rtl===!0?"left":"right"]:`-${d.value}px`,width:`calc(100% + ${d.value}px)`}:null);function g(y){if(e.container===!0||document.qScrollPrevented!==!0){const $={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};a.value=$,e.onScroll!==void 0&&r("scroll",$)}}function M(y){const{height:$,width:O}=y;let D=!1;l.value!==$&&(D=!0,l.value=$,e.onScrollHeight!==void 0&&r("scrollHeight",$),S()),i.value!==O&&(D=!0,i.value=O),D===!0&&e.onResize!==void 0&&r("resize",y)}function x({height:y}){f.value!==y&&(f.value=y,S())}function S(){if(e.container===!0){const y=l.value>f.value?ye():0;d.value!==y&&(d.value=y)}}let h=null;const P={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:l,containerHeight:f,scrollbarWidth:d,totalWidth:v(()=>i.value+d.value),rows:v(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:ie({size:0,offset:0,space:!1}),right:ie({size:300,offset:0,space:!1}),footer:ie({size:0,offset:0,space:!1}),left:ie({size:300,offset:0,space:!1}),scroll:a,animate(){h!==null?clearTimeout(h):document.body.classList.add("q-body--layout-animate"),h=setTimeout(()=>{h=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,$,O){P[y][$]=O}};if(Ve(ne,P),ye()>0){let O=function(){y=null,$.classList.remove("hide-scrollbar")},D=function(){if(y===null){if($.scrollHeight>c.screen.height)return;$.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(O,300)},Q=function(A){y!==null&&A==="remove"&&(clearTimeout(y),O()),window[`${A}EventListener`]("resize",D)},y=null;const $=document.body;_(()=>e.container!==!0?"add":"remove",Q),e.container!==!0&&Q("add"),vt(()=>{Q("remove")})}return()=>{const y=Fe(u.default,[C(Ie,{onScroll:g}),C(te,{onResize:M})]),$=C("div",{class:n.value,style:T.value,ref:e.container===!0?void 0:t,tabindex:-1},y);return e.container===!0?C("div",{class:"q-layout-container overflow-hidden",ref:t},[C(te,{onResize:x}),C("div",{class:"absolute-full",style:z.value},[C("div",{class:"scroll",style:b.value},[$])])]):$}}});export{Bt as Q,Z as T,Et as a,Ht as b,Dt as c,At as d,Rt as e,te as f,ke as g,Be as s};
