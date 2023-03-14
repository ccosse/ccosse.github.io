import{g as R,h as v,i as q,j as ne,r as C,k as Re,l as ee,m as Y,n as Te,p as ie,q as X,t as we,u as Q,v as _,x as ot,y as _e,z as ue,A as rt,B as J,C as it,D as oe,E as me,F as Pe,G as be,H as qe,I as ge,J as nt,K as Ce,L as Oe,M as ut,N as st,O as ct,R as Fe,S as Ve,T as dt,U as re,V as vt}from"./index.b48f1b2b.js";import{u as ft,a as ht}from"./use-prevent-scroll.d39605cc.js";import{u as mt,a as bt,b as gt,c as yt,g as pt,d as zt,e as St,s as ke,f as ye,h as pe}from"./scroll.3f86a34c.js";import{u as We,a as je}from"./use-dark.78a7e6c5.js";import{b as N}from"./re-store.d4331609.js";import{c as wt}from"./selection.c2947f01.js";var Bt=R({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:n}){const i=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>q("div",{class:i.value},ne(n.default))}}),Et=R({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:n}){const i=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>q("div",{class:i.value,role:"toolbar"},ne(n.default))}});function qt(){const e=C(!Re.value);return e.value===!1&&ee(()=>{e.value=!0}),e}const Ne=typeof ResizeObserver!="undefined",Me=Ne===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var te=R({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let i=null,c,t={width:-1,height:-1};function l(f){f===!0||e.debounce===0||e.debounce==="0"?r():i===null&&(i=setTimeout(r,e.debounce))}function r(){if(i!==null&&(clearTimeout(i),i=null),c){const{offsetWidth:f,offsetHeight:d}=c;(f!==t.width||d!==t.height)&&(t={width:f,height:d},n("resize",t))}}const{proxy:a}=X();if(Ne===!0){let f;const d=u=>{c=a.$el.parentNode,c?(f=new ResizeObserver(l),f.observe(c),r()):u!==!0&&ie(()=>{d(!0)})};return ee(()=>{d()}),Y(()=>{i!==null&&clearTimeout(i),f!==void 0&&(f.disconnect!==void 0?f.disconnect():c&&f.unobserve(c))}),Te}else{let u=function(){i!==null&&(clearTimeout(i),i=null),d!==void 0&&(d.removeEventListener!==void 0&&d.removeEventListener("resize",l,we.passive),d=void 0)},T=function(){u(),c&&c.contentDocument&&(d=c.contentDocument.defaultView,d.addEventListener("resize",l,we.passive),r())};const f=qt();let d;return ee(()=>{ie(()=>{c=a.$el,c&&T()})}),Y(u),a.trigger=l,()=>{if(f.value===!0)return q("object",{style:Me.style,tabindex:-1,type:"text/html",data:Me.url,"aria-hidden":"true",onLoad:T})}}}}),Ht=R({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:i}){const{proxy:{$q:c}}=X(),t=_e(ue,Q);if(t===Q)return console.error("QHeader needs to be child of QLayout"),Q;const l=C(parseInt(e.heightHint,10)),r=C(!0),a=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||c.platform.is.ios&&t.isContainer.value===!0),f=v(()=>{if(e.modelValue!==!0)return 0;if(a.value===!0)return r.value===!0?l.value:0;const h=l.value-t.scroll.value.position;return h>0?h:0}),d=v(()=>e.modelValue!==!0||a.value===!0&&r.value!==!0),u=v(()=>e.modelValue===!0&&d.value===!0&&e.reveal===!0),T=v(()=>"q-header q-layout__section--marginal "+(a.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),z=v(()=>{const h=t.rows.value.top,P={};return h[0]==="l"&&t.left.space===!0&&(P[c.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),h[2]==="r"&&t.right.space===!0&&(P[c.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),P});function b(h,P){t.update("header",h,P)}function g(h,P){h.value!==P&&(h.value=P)}function k({height:h}){g(l,h),b("size",h)}function $(h){u.value===!0&&g(r,!0),i("focusin",h)}_(()=>e.modelValue,h=>{b("space",h),g(r,!0),t.animate()}),_(f,h=>{b("offset",h)}),_(()=>e.reveal,h=>{h===!1&&g(r,e.modelValue)}),_(r,h=>{t.animate(),i("reveal",h)}),_(t.scroll,h=>{e.reveal===!0&&g(r,h.direction==="up"||h.position<=e.revealOffset||h.position-h.inflectionPoint<100)});const S={};return t.instances.header=S,e.modelValue===!0&&b("size",l.value),b("space",e.modelValue),b("offset",f.value),Y(()=>{t.instances.header===S&&(t.instances.header=void 0,b("size",0),b("offset",0),b("space",!1))}),()=>{const h=ot(n.default,[]);return e.elevated===!0&&h.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),h.push(q(te,{debounce:0,onResize:k})),q("header",{class:T.value,style:z.value,onFocusin:$},h)}}});const xe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Ct=Object.keys(xe);xe.all=!0;function Le(e){const n={};for(const i of Ct)e[i]===!0&&(n[i]=!0);return Object.keys(n).length===0?xe:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}function Be(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function ze(e,n,i){const c=qe(e);let t,l=c.left-n.event.x,r=c.top-n.event.y,a=Math.abs(l),f=Math.abs(r);const d=n.direction;d.horizontal===!0&&d.vertical!==!0?t=l<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?t=r<0?"up":"down":d.up===!0&&r<0?(t="up",a>f&&(d.left===!0&&l<0?t="left":d.right===!0&&l>0&&(t="right"))):d.down===!0&&r>0?(t="down",a>f&&(d.left===!0&&l<0?t="left":d.right===!0&&l>0&&(t="right"))):d.left===!0&&l<0?(t="left",a<f&&(d.up===!0&&r<0?t="up":d.down===!0&&r>0&&(t="down"))):d.right===!0&&l>0&&(t="right",a<f&&(d.up===!0&&r<0?t="up":d.down===!0&&r>0&&(t="down")));let u=!1;if(t===void 0&&i===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,u=!0,t==="left"||t==="right"?(c.left-=l,a=0,l=0):(c.top-=r,f=0,r=0)}return{synthetic:u,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:c,direction:t,isFirst:n.event.isFirst,isFinal:i===!0,duration:Date.now()-n.event.time,distance:{x:a,y:f},offset:{x:l,y:r},delta:{x:c.left-n.event.lastX,y:c.top-n.event.lastY}}}}let Tt=0;var Z=rt({name:"touch-pan",beforeMount(e,{value:n,modifiers:i}){if(i.mouse!==!0&&J.has.touch!==!0)return;function c(l,r){i.mouse===!0&&r===!0?nt(l):(i.stop===!0&&be(l),i.prevent===!0&&Pe(l))}const t={uid:"qvtp_"+Tt++,handler:n,modifiers:i,direction:Le(i),noop:Te,mouseStart(l){Be(l,t)&&it(l)&&(oe(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(Be(l,t)){const r=l.target;oe(t,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","passiveCapture"],[r,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,r){if(J.is.firefox===!0&&me(e,!0),t.lastEvt=l,r===!0||i.stop===!0){if(t.direction.all!==!0&&(r!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const d=l.type.indexOf("mouse")>-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&Pe(d),l.cancelBubble===!0&&be(d),Object.assign(d,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:d}}be(l)}const{left:a,top:f}=qe(l);t.event={x:a,y:f,time:Date.now(),mouse:r===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:f}},move(l){if(t.event===void 0)return;const r=qe(l),a=r.left-t.event.x,f=r.top-t.event.y;if(a===0&&f===0)return;t.lastEvt=l;const d=t.event.mouse===!0,u=()=>{c(l,d);let b;i.preserveCursor!==!0&&i.preservecursor!==!0&&(b=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),wt(),t.styleCleanup=g=>{if(t.styleCleanup=void 0,b!==void 0&&(document.documentElement.style.cursor=b),document.body.classList.remove("non-selectable"),d===!0){const k=()=>{document.body.classList.remove("no-pointer-events--children")};g!==void 0?setTimeout(()=>{k(),g()},50):k()}else g!==void 0&&g()}};if(t.event.detected===!0){t.event.isFirst!==!0&&c(l,t.event.mouse);const{payload:b,synthetic:g}=ze(l,t,!1);b!==void 0&&(t.handler(b)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&u(),t.event.lastX=b.position.left,t.event.lastY=b.position.top,t.event.lastDir=g===!0?void 0:b.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||d===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){u(),t.event.detected=!0,t.move(l);return}const T=Math.abs(a),z=Math.abs(f);T!==z&&(t.direction.horizontal===!0&&T>z||t.direction.vertical===!0&&T<z||t.direction.up===!0&&T<z&&f<0||t.direction.down===!0&&T<z&&f>0||t.direction.left===!0&&T>z&&a<0||t.direction.right===!0&&T>z&&a>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,r){if(t.event!==void 0){if(ge(t,"temp"),J.is.firefox===!0&&me(e,!1),r===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(ze(l===void 0?t.lastEvt:l,t).payload);const{payload:a}=ze(l===void 0?t.lastEvt:l,t,!0),f=()=>{t.handler(a)};t.styleCleanup!==void 0?t.styleCleanup(f):f()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,i.mouse===!0){const l=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";oe(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}J.has.touch===!0&&oe(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const i=e.__qtouchpan;i!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&i.end(),i.handler=n.value),i.direction=Le(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),ge(n,"main"),ge(n,"temp"),J.is.firefox===!0&&me(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});const Ee=150;var Dt=R({name:"QDrawer",inheritAttrs:!1,props:{...mt,...We,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...bt,"onLayout","miniState"],setup(e,{slots:n,emit:i,attrs:c}){const t=X(),{proxy:{$q:l}}=t,r=je(e,l),{preventBodyScroll:a}=ht(),{registerTimeout:f,removeTimeout:d}=gt(),u=_e(ue,Q);if(u===Q)return console.error("QDrawer needs to be child of QLayout"),Q;let T,z=null,b;const g=C(e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint),k=v(()=>e.mini===!0&&g.value!==!0),$=v(()=>k.value===!0?e.miniWidth:e.width),S=C(e.showIfAbove===!0&&g.value===!1?!0:e.modelValue===!0),h=v(()=>e.persistent!==!0&&(g.value===!0||U.value===!0));function P(o,p){if(D(),o!==!1&&u.animate(),B(0),g.value===!0){const M=u.instances[s.value];M!==void 0&&M.belowBreakpoint===!0&&M.hide(!1),W(1),u.isContainer.value!==!0&&a(!0)}else W(0),o!==!1&&ve(!1);f(()=>{o!==!1&&ve(!0),p!==!0&&i("show",o)},Ee)}function y(o,p){F(),o!==!1&&u.animate(),W(0),B(H.value*$.value),fe(),p!==!0?f(()=>{i("hide",o)},Ee):d()}const{show:x,hide:O}=yt({showing:S,hideOnRouteChange:h,handleShow:P,handleHide:y}),{addToHistory:D,removeFromHistory:F}=ft(S,O,h),A={belowBreakpoint:g,hide:O},E=v(()=>e.side==="right"),H=v(()=>(l.lang.rtl===!0?-1:1)*(E.value===!0?1:-1)),K=C(0),V=C(!1),G=C(!1),I=C($.value*H.value),s=v(()=>E.value===!0?"left":"right"),m=v(()=>S.value===!0&&g.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:$.value:0),w=v(()=>e.overlay===!0||e.miniToOverlay===!0||u.view.value.indexOf(E.value?"R":"L")>-1||l.platform.is.ios===!0&&u.isContainer.value===!0),L=v(()=>e.overlay===!1&&S.value===!0&&g.value===!1),U=v(()=>e.overlay===!0&&S.value===!0&&g.value===!1),se=v(()=>"fullscreen q-drawer__backdrop"+(S.value===!1&&V.value===!1?" hidden":"")),ce=v(()=>({backgroundColor:`rgba(0,0,0,${K.value*.4})`})),ae=v(()=>E.value===!0?u.rows.value.top[2]==="r":u.rows.value.top[0]==="l"),Xe=v(()=>E.value===!0?u.rows.value.bottom[2]==="r":u.rows.value.bottom[0]==="l"),Ue=v(()=>{const o={};return u.header.space===!0&&ae.value===!1&&(w.value===!0?o.top=`${u.header.offset}px`:u.header.space===!0&&(o.top=`${u.header.size}px`)),u.footer.space===!0&&Xe.value===!1&&(w.value===!0?o.bottom=`${u.footer.offset}px`:u.footer.space===!0&&(o.bottom=`${u.footer.size}px`)),o}),Ye=v(()=>{const o={width:`${$.value}px`,transform:`translateX(${I.value}px)`};return g.value===!0?o:Object.assign(o,Ue.value)}),Ke=v(()=>"q-drawer__content fit "+(u.isContainer.value!==!0?"scroll":"overflow-auto")),Ge=v(()=>`q-drawer q-drawer--${e.side}`+(G.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(r.value===!0?" q-drawer--dark q-dark":"")+(V.value===!0?" no-transition":S.value===!0?"":" q-layout--prevent-focus")+(g.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${k.value===!0?"mini":"standard"}`+(w.value===!0||L.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ae.value===!0?" q-drawer--top-padding":""))),Je=v(()=>{const o=l.lang.rtl===!0?e.side:s.value;return[[Z,at,void 0,{[o]:!0,mouse:!0}]]}),Ze=v(()=>{const o=l.lang.rtl===!0?s.value:e.side;return[[Z,$e,void 0,{[o]:!0,mouse:!0}]]}),et=v(()=>{const o=l.lang.rtl===!0?s.value:e.side;return[[Z,$e,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function de(){lt(g,e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint)}_(g,o=>{o===!0?(T=S.value,S.value===!0&&O(!1)):e.overlay===!1&&e.behavior!=="mobile"&&T!==!1&&(S.value===!0?(B(0),W(0),fe()):x(!1))}),_(()=>e.side,(o,p)=>{u.instances[p]===A&&(u.instances[p]=void 0,u[p].space=!1,u[p].offset=0),u.instances[o]=A,u[o].size=$.value,u[o].space=L.value,u[o].offset=m.value}),_(u.totalWidth,()=>{(u.isContainer.value===!0||document.qScrollPrevented!==!0)&&de()}),_(()=>e.behavior+e.breakpoint,de),_(u.isContainer,o=>{S.value===!0&&a(o!==!0),o===!0&&de()}),_(u.scrollbarWidth,()=>{B(S.value===!0?0:void 0)}),_(m,o=>{j("offset",o)}),_(L,o=>{i("onLayout",o),j("space",o)}),_(E,()=>{B()}),_($,o=>{B(),he(e.miniToOverlay,o)}),_(()=>e.miniToOverlay,o=>{he(o,$.value)}),_(()=>l.lang.rtl,()=>{B()}),_(()=>e.mini,()=>{e.modelValue===!0&&(tt(),u.animate())}),_(k,o=>{i("miniState",o)});function B(o){o===void 0?ie(()=>{o=S.value===!0?0:$.value,B(H.value*o)}):(u.isContainer.value===!0&&E.value===!0&&(g.value===!0||Math.abs(o)===$.value)&&(o+=H.value*u.scrollbarWidth.value),I.value=o)}function W(o){K.value=o}function ve(o){const p=o===!0?"remove":u.isContainer.value!==!0?"add":"";p!==""&&document.body.classList[p]("q-body--drawer-toggle")}function tt(){z!==null&&clearTimeout(z),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),G.value=!0,z=setTimeout(()=>{z=null,G.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function at(o){if(S.value!==!1)return;const p=$.value,M=N(o.distance.x,0,p);if(o.isFinal===!0){M>=Math.min(75,p)===!0?x():(u.animate(),W(0),B(H.value*p)),V.value=!1;return}B((l.lang.rtl===!0?E.value!==!0:E.value)?Math.max(p-M,0):Math.min(0,M-p)),W(N(M/p,0,1)),o.isFirst===!0&&(V.value=!0)}function $e(o){if(S.value!==!0)return;const p=$.value,M=o.direction===e.side,le=(l.lang.rtl===!0?M!==!0:M)?N(o.distance.x,0,p):0;if(o.isFinal===!0){Math.abs(le)<Math.min(75,p)===!0?(u.animate(),W(1),B(0)):O(),V.value=!1;return}B(H.value*le),W(N(1-le/p,0,1)),o.isFirst===!0&&(V.value=!0)}function fe(){a(!1),ve(!0)}function j(o,p){u.update(e.side,o,p)}function lt(o,p){o.value!==p&&(o.value=p)}function he(o,p){j("size",o===!0?e.miniWidth:p)}return u.instances[e.side]=A,he(e.miniToOverlay,$.value),j("space",L.value),j("offset",m.value),e.showIfAbove===!0&&e.modelValue!==!0&&S.value===!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),ee(()=>{i("onLayout",L.value),i("miniState",k.value),T=e.showIfAbove===!0;const o=()=>{(S.value===!0?P:y)(!1,!0)};if(u.totalWidth.value!==0){ie(o);return}b=_(u.totalWidth,()=>{b(),b=void 0,S.value===!1&&e.showIfAbove===!0&&g.value===!1?x(!1):o()})}),Y(()=>{b!==void 0&&b(),z!==null&&(clearTimeout(z),z=null),S.value===!0&&fe(),u.instances[e.side]===A&&(u.instances[e.side]=void 0,j("size",0),j("offset",0),j("space",!1))}),()=>{const o=[];g.value===!0&&(e.noSwipeOpen===!1&&o.push(Ce(q("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Je.value)),o.push(Oe("div",{ref:"backdrop",class:se.value,style:ce.value,"aria-hidden":"true",onClick:O},void 0,"backdrop",e.noSwipeBackdrop!==!0&&S.value===!0,()=>et.value)));const p=k.value===!0&&n.mini!==void 0,M=[q("div",{...c,key:""+p,class:[Ke.value,c.class]},p===!0?n.mini():ne(n.default))];return e.elevated===!0&&S.value===!0&&M.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(Oe("aside",{ref:"content",class:Ge.value,style:Ye.value},M,"contentclose",e.noSwipeClose!==!0&&g.value===!0,()=>Ze.value)),q("div",{class:"q-drawer-container"},o)}}});const{passive:He}=we,_t=["both","horizontal","vertical"];var Ie=R({name:"QScrollObserver",props:{axis:{type:String,validator:e=>_t.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:n}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let c=null,t,l;_(()=>e.scrollTarget,()=>{f(),a()});function r(){c!==null&&c();const T=Math.max(0,zt(t)),z=St(t),b={top:T-i.position.top,left:z-i.position.left};if(e.axis==="vertical"&&b.top===0||e.axis==="horizontal"&&b.left===0)return;const g=Math.abs(b.top)>=Math.abs(b.left)?b.top<0?"up":"down":b.left<0?"left":"right";i.position={top:T,left:z},i.directionChanged=i.direction!==g,i.delta=b,i.directionChanged===!0&&(i.direction=g,i.inflectionPoint=i.position),n("scroll",{...i})}function a(){t=pt(l,e.scrollTarget),t.addEventListener("scroll",d,He),d(!0)}function f(){t!==void 0&&(t.removeEventListener("scroll",d,He),t=void 0)}function d(T){if(T===!0||e.debounce===0||e.debounce==="0")r();else if(c===null){const[z,b]=e.debounce?[setTimeout(r,e.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];c=()=>{b(z),c=null}}}const{proxy:u}=X();return _(()=>u.$q.lang.rtl,r),ee(()=>{l=u.$el.parentNode,a()}),Y(()=>{c!==null&&c(),f()}),Object.assign(u,{trigger:d,getPosition:()=>i}),Te}});const De=["vertical","horizontal"],Se={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Ae={prevent:!0,mouse:!0,mouseAllDir:!0},Qe=e=>e>=250?50:Math.ceil(e/5);var At=R({name:"QScrollArea",props:{...We,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:n,emit:i}){const c=C(!1),t=C(!1),l=C(!1),r={vertical:C(0),horizontal:C(0)},a={vertical:{ref:C(null),position:C(0),size:C(0)},horizontal:{ref:C(null),position:C(0),size:C(0)}},{proxy:f}=X(),d=je(e,f.$q);let u=null,T;const z=C(null),b=v(()=>"q-scrollarea"+(d.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=v(()=>{const s=a.vertical.size.value-r.vertical.value;if(s<=0)return 0;const m=N(a.vertical.position.value/s,0,1);return Math.round(m*1e4)/1e4}),a.vertical.thumbHidden=v(()=>(e.visible===null?l.value:e.visible)!==!0&&c.value===!1&&t.value===!1||a.vertical.size.value<=r.vertical.value+1),a.vertical.thumbStart=v(()=>a.vertical.percentage.value*(r.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=v(()=>Math.round(N(r.vertical.value*r.vertical.value/a.vertical.size.value,Qe(r.vertical.value),r.vertical.value))),a.vertical.style=v(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=v(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=v(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=v(()=>{const s=a.horizontal.size.value-r.horizontal.value;if(s<=0)return 0;const m=N(Math.abs(a.horizontal.position.value)/s,0,1);return Math.round(m*1e4)/1e4}),a.horizontal.thumbHidden=v(()=>(e.visible===null?l.value:e.visible)!==!0&&c.value===!1&&t.value===!1||a.horizontal.size.value<=r.horizontal.value+1),a.horizontal.thumbStart=v(()=>a.horizontal.percentage.value*(r.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=v(()=>Math.round(N(r.horizontal.value*r.horizontal.value/a.horizontal.size.value,Qe(r.horizontal.value),r.horizontal.value))),a.horizontal.style=v(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[f.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=v(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=v(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const g=v(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),k=[[Z,s=>{D(s,"vertical")},void 0,{vertical:!0,...Ae}]],$=[[Z,s=>{D(s,"horizontal")},void 0,{horizontal:!0,...Ae}]];function S(){const s={};return De.forEach(m=>{const w=a[m];s[m+"Position"]=w.position.value,s[m+"Percentage"]=w.percentage.value,s[m+"Size"]=w.size.value,s[m+"ContainerSize"]=r[m].value}),s}const h=ut(()=>{const s=S();s.ref=f,i("scroll",s)},0);function P(s,m,w){if(De.includes(s)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(s==="vertical"?ke:ye)(z.value,m,w)}function y({height:s,width:m}){let w=!1;r.vertical.value!==s&&(r.vertical.value=s,w=!0),r.horizontal.value!==m&&(r.horizontal.value=m,w=!0),w===!0&&H()}function x({position:s}){let m=!1;a.vertical.position.value!==s.top&&(a.vertical.position.value=s.top,m=!0),a.horizontal.position.value!==s.left&&(a.horizontal.position.value=s.left,m=!0),m===!0&&H()}function O({height:s,width:m}){a.horizontal.size.value!==m&&(a.horizontal.size.value=m,H()),a.vertical.size.value!==s&&(a.vertical.size.value=s,H())}function D(s,m){const w=a[m];if(s.isFirst===!0){if(w.thumbHidden.value===!0)return;T=w.position.value,t.value=!0}else if(t.value!==!0)return;s.isFinal===!0&&(t.value=!1);const L=Se[m],U=r[m].value,se=(w.size.value-U)/(U-w.thumbSize.value),ce=s.distance[L.dist],ae=T+(s.direction===L.dir?1:-1)*ce*se;K(ae,m)}function F(s,m){const w=a[m];if(w.thumbHidden.value!==!0){const L=s[Se[m].offset];if(L<w.thumbStart.value||L>w.thumbStart.value+w.thumbSize.value){const U=L-w.thumbSize.value/2;K(U/r[m].value*w.size.value,m)}w.ref.value!==null&&w.ref.value.dispatchEvent(new MouseEvent(s.type,s))}}function A(s){F(s,"vertical")}function E(s){F(s,"horizontal")}function H(){c.value=!0,u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,c.value=!1},e.delay),e.onScroll!==void 0&&h()}function K(s,m){z.value[Se[m].scroll]=s}function V(){l.value=!0}function G(){l.value=!1}let I=null;return _(()=>f.$q.lang.rtl,s=>{z.value!==null&&ye(z.value,Math.abs(a.horizontal.position.value)*(s===!0?-1:1))}),st(()=>{I={top:a.vertical.position.value,left:a.horizontal.position.value}}),ct(()=>{if(I===null)return;const s=z.value;s!==null&&(ye(s,I.left),ke(s,I.top))}),Y(h.cancel),Object.assign(f,{getScrollTarget:()=>z.value,getScroll:S,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:P,setScrollPercentage(s,m,w){P(s,m*(a[s].size.value-r[s].value)*(s==="horizontal"&&f.$q.lang.rtl===!0?-1:1),w)}}),()=>q("div",{class:b.value,onMouseenter:V,onMouseleave:G},[q("div",{ref:z,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[q("div",{class:"q-scrollarea__content absolute",style:g.value},Fe(n.default,[q(te,{debounce:0,onResize:O})])),q(Ie,{axis:"both",onScroll:x})]),q(te,{debounce:0,onResize:y}),q("div",{class:a.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:A}),q("div",{class:a.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:E}),Ce(q("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),k),Ce(q("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),$)])}}),Qt=R({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:i}}=X(),c=_e(ue,Q);if(c===Q)return console.error("QPageContainer needs to be child of QLayout"),Q;Ve(dt,!0);const t=v(()=>{const l={};return c.header.space===!0&&(l.paddingTop=`${c.header.size}px`),c.right.space===!0&&(l[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${c.right.size}px`),c.footer.space===!0&&(l.paddingBottom=`${c.footer.size}px`),c.left.space===!0&&(l[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${c.left.size}px`),l});return()=>q("div",{class:"q-page-container",style:t.value},ne(n.default))}}),Rt=R({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:i}){const{proxy:{$q:c}}=X(),t=C(null),l=C(c.screen.height),r=C(e.container===!0?0:c.screen.width),a=C({position:0,direction:"down",inflectionPoint:0}),f=C(0),d=C(Re.value===!0?0:pe()),u=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),T=v(()=>e.container===!1?{minHeight:c.screen.height+"px"}:null),z=v(()=>d.value!==0?{[c.lang.rtl===!0?"left":"right"]:`${d.value}px`}:null),b=v(()=>d.value!==0?{[c.lang.rtl===!0?"right":"left"]:0,[c.lang.rtl===!0?"left":"right"]:`-${d.value}px`,width:`calc(100% + ${d.value}px)`}:null);function g(y){if(e.container===!0||document.qScrollPrevented!==!0){const x={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};a.value=x,e.onScroll!==void 0&&i("scroll",x)}}function k(y){const{height:x,width:O}=y;let D=!1;l.value!==x&&(D=!0,l.value=x,e.onScrollHeight!==void 0&&i("scrollHeight",x),S()),r.value!==O&&(D=!0,r.value=O),D===!0&&e.onResize!==void 0&&i("resize",y)}function $({height:y}){f.value!==y&&(f.value=y,S())}function S(){if(e.container===!0){const y=l.value>f.value?pe():0;d.value!==y&&(d.value=y)}}let h=null;const P={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:l,containerHeight:f,scrollbarWidth:d,totalWidth:v(()=>r.value+d.value),rows:v(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:re({size:0,offset:0,space:!1}),right:re({size:300,offset:0,space:!1}),footer:re({size:0,offset:0,space:!1}),left:re({size:300,offset:0,space:!1}),scroll:a,animate(){h!==null?clearTimeout(h):document.body.classList.add("q-body--layout-animate"),h=setTimeout(()=>{h=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,x,O){P[y][x]=O}};if(Ve(ue,P),pe()>0){let O=function(){y=null,x.classList.remove("hide-scrollbar")},D=function(){if(y===null){if(x.scrollHeight>c.screen.height)return;x.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(O,300)},F=function(A){y!==null&&A==="remove"&&(clearTimeout(y),O()),window[`${A}EventListener`]("resize",D)},y=null;const x=document.body;_(()=>e.container!==!0?"add":"remove",F),e.container!==!0&&F("add"),vt(()=>{F("remove")})}return()=>{const y=Fe(n.default,[q(Ie,{onScroll:g}),q(te,{onResize:k})]),x=q("div",{class:u.value,style:T.value,ref:e.container===!0?void 0:t,tabindex:-1},y);return e.container===!0?q("div",{class:"q-layout-container overflow-hidden",ref:t},[q(te,{onResize:$}),q("div",{class:"absolute-full",style:z.value},[q("div",{class:"scroll",style:b.value},[x])])]):x}}});export{Et as Q,Z as T,Bt as a,Ht as b,Dt as c,At as d,Qt as e,Rt as f,te as g,Le as h,Be as s};
