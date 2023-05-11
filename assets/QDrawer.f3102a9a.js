import{d as q,c as F,a as r,y as le,e as L,r as B,w as s,o as re,at as Te,f as oe,g as ne,l as ie,t as Ce,v as te,aa as Oe,au as ae,ab as A}from"./index.4eff1e3a.js";import{Q as $e}from"./QLayout.c0292a16.js";import{u as ze,a as Le}from"./use-prevent-scroll.64da04b0.js";import{u as Qe,a as De,b as Me}from"./use-model-toggle.19856819.js";import{u as Ve}from"./use-timeout.54bccf92.js";import{u as We,a as _e}from"./use-dark.67fb0f26.js";import{T as X}from"./TouchPan.5cd5fa08.js";const Pe=q("div",{class:"q-space"});var je=F({name:"QSpace",setup(){return()=>Pe}}),Ee=F({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:S}){const m=r(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>q("div",{class:m.value,role:"toolbar"},le(S.default))}}),Ke=F({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:S,emit:m}){const{proxy:{$q:O}}=ne(),o=oe(ie,L);if(o===L)return console.error("QHeader needs to be child of QLayout"),L;const v=B(parseInt(t.heightHint,10)),y=B(!0),T=r(()=>t.reveal===!0||o.view.value.indexOf("H")>-1||O.platform.is.ios&&o.isContainer.value===!0),Q=r(()=>{if(t.modelValue!==!0)return 0;if(T.value===!0)return y.value===!0?v.value:0;const u=v.value-o.scroll.value.position;return u>0?u:0}),W=r(()=>t.modelValue!==!0||T.value===!0&&y.value!==!0),a=r(()=>t.modelValue===!0&&W.value===!0&&t.reveal===!0),D=r(()=>"q-header q-layout__section--marginal "+(T.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(W.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),w=r(()=>{const u=o.rows.value.top,b={};return u[0]==="l"&&o.left.space===!0&&(b[O.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),u[2]==="r"&&o.right.space===!0&&(b[O.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),b});function d(u,b){o.update("header",u,b)}function i(u,b){u.value!==b&&(u.value=b)}function C({height:u}){i(v,u),d("size",u)}function c(u){a.value===!0&&i(y,!0),m("focusin",u)}s(()=>t.modelValue,u=>{d("space",u),i(y,!0),o.animate()}),s(Q,u=>{d("offset",u)}),s(()=>t.reveal,u=>{u===!1&&i(y,t.modelValue)}),s(y,u=>{o.animate(),m("reveal",u)}),s(o.scroll,u=>{t.reveal===!0&&i(y,u.direction==="up"||u.position<=t.revealOffset||u.position-u.inflectionPoint<100)});const n={};return o.instances.header=n,t.modelValue===!0&&d("size",v.value),d("space",t.modelValue),d("offset",Q.value),re(()=>{o.instances.header===n&&(o.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const u=Te(S.default,[]);return t.elevated===!0&&u.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(q($e,{debounce:0,onResize:C})),q("header",{class:D.value,style:w.value,onFocusin:c},u)}}});const ue=150;var Xe=F({name:"QDrawer",inheritAttrs:!1,props:{...Qe,...We,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...De,"onLayout","miniState"],setup(t,{slots:S,emit:m,attrs:O}){const o=ne(),{proxy:{$q:v}}=o,y=_e(t,v),{preventBodyScroll:T}=Le(),{registerTimeout:Q,removeTimeout:W}=Ve(),a=oe(ie,L);if(a===L)return console.error("QDrawer needs to be child of QLayout"),L;let D,w=null,d;const i=B(t.behavior==="mobile"||t.behavior!=="desktop"&&a.totalWidth.value<=t.breakpoint),C=r(()=>t.mini===!0&&i.value!==!0),c=r(()=>C.value===!0?t.miniWidth:t.width),n=B(t.showIfAbove===!0&&i.value===!1?!0:t.modelValue===!0),u=r(()=>t.persistent!==!0&&(i.value===!0||ve.value===!0));function b(e,l){if(se(),e!==!1&&a.animate(),h(0),i.value===!0){const f=a.instances[P.value];f!==void 0&&f.belowBreakpoint===!0&&f.hide(!1),k(1),a.isContainer.value!==!0&&T(!0)}else k(0),e!==!1&&j(!1);Q(()=>{e!==!1&&j(!0),l!==!0&&m("show",e)},ue)}function G(e,l){de(),e!==!1&&a.animate(),k(0),h($.value*c.value),E(),l!==!0?Q(()=>{m("hide",e)},ue):W()}const{show:I,hide:M}=Me({showing:n,hideOnRouteChange:u,handleShow:b,handleHide:G}),{addToHistory:se,removeFromHistory:de}=ze(n,M,u),_={belowBreakpoint:i,hide:M},g=r(()=>t.side==="right"),$=r(()=>(v.lang.rtl===!0?-1:1)*(g.value===!0?1:-1)),J=B(0),z=B(!1),p=B(!1),Y=B(c.value*$.value),P=r(()=>g.value===!0?"left":"right"),N=r(()=>n.value===!0&&i.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:c.value:0),R=r(()=>t.overlay===!0||t.miniToOverlay===!0||a.view.value.indexOf(g.value?"R":"L")>-1||v.platform.is.ios===!0&&a.isContainer.value===!0),V=r(()=>t.overlay===!1&&n.value===!0&&i.value===!1),ve=r(()=>t.overlay===!0&&n.value===!0&&i.value===!1),ce=r(()=>"fullscreen q-drawer__backdrop"+(n.value===!1&&z.value===!1?" hidden":"")),fe=r(()=>({backgroundColor:`rgba(0,0,0,${J.value*.4})`})),Z=r(()=>g.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),me=r(()=>g.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),he=r(()=>{const e={};return a.header.space===!0&&Z.value===!1&&(R.value===!0?e.top=`${a.header.offset}px`:a.header.space===!0&&(e.top=`${a.header.size}px`)),a.footer.space===!0&&me.value===!1&&(R.value===!0?e.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(e.bottom=`${a.footer.size}px`)),e}),be=r(()=>{const e={width:`${c.value}px`,transform:`translateX(${Y.value}px)`};return i.value===!0?e:Object.assign(e,he.value)}),ye=r(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),we=r(()=>`q-drawer q-drawer--${t.side}`+(p.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(y.value===!0?" q-drawer--dark q-dark":"")+(z.value===!0?" no-transition":n.value===!0?"":" q-layout--prevent-focus")+(i.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${C.value===!0?"mini":"standard"}`+(R.value===!0||V.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(Z.value===!0?" q-drawer--top-padding":""))),ge=r(()=>{const e=v.lang.rtl===!0?t.side:P.value;return[[X,Be,void 0,{[e]:!0,mouse:!0}]]}),qe=r(()=>{const e=v.lang.rtl===!0?P.value:t.side;return[[X,ee,void 0,{[e]:!0,mouse:!0}]]}),ke=r(()=>{const e=v.lang.rtl===!0?P.value:t.side;return[[X,ee,void 0,{[e]:!0,mouse:!0,mouseAllDir:!0}]]});function U(){Se(i,t.behavior==="mobile"||t.behavior!=="desktop"&&a.totalWidth.value<=t.breakpoint)}s(i,e=>{e===!0?(D=n.value,n.value===!0&&M(!1)):t.overlay===!1&&t.behavior!=="mobile"&&D!==!1&&(n.value===!0?(h(0),k(0),E()):I(!1))}),s(()=>t.side,(e,l)=>{a.instances[l]===_&&(a.instances[l]=void 0,a[l].space=!1,a[l].offset=0),a.instances[e]=_,a[e].size=c.value,a[e].space=V.value,a[e].offset=N.value}),s(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&U()}),s(()=>t.behavior+t.breakpoint,U),s(a.isContainer,e=>{n.value===!0&&T(e!==!0),e===!0&&U()}),s(a.scrollbarWidth,()=>{h(n.value===!0?0:void 0)}),s(N,e=>{x("offset",e)}),s(V,e=>{m("onLayout",e),x("space",e)}),s(g,()=>{h()}),s(c,e=>{h(),K(t.miniToOverlay,e)}),s(()=>t.miniToOverlay,e=>{K(e,c.value)}),s(()=>v.lang.rtl,()=>{h()}),s(()=>t.mini,()=>{t.modelValue===!0&&(xe(),a.animate())}),s(C,e=>{m("miniState",e)});function h(e){e===void 0?te(()=>{e=n.value===!0?0:c.value,h($.value*e)}):(a.isContainer.value===!0&&g.value===!0&&(i.value===!0||Math.abs(e)===c.value)&&(e+=$.value*a.scrollbarWidth.value),Y.value=e)}function k(e){J.value=e}function j(e){const l=e===!0?"remove":a.isContainer.value!==!0?"add":"";l!==""&&document.body.classList[l]("q-body--drawer-toggle")}function xe(){w!==null&&clearTimeout(w),o.proxy&&o.proxy.$el&&o.proxy.$el.classList.add("q-drawer--mini-animate"),p.value=!0,w=setTimeout(()=>{w=null,p.value=!1,o&&o.proxy&&o.proxy.$el&&o.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Be(e){if(n.value!==!1)return;const l=c.value,f=A(e.distance.x,0,l);if(e.isFinal===!0){f>=Math.min(75,l)===!0?I():(a.animate(),k(0),h($.value*l)),z.value=!1;return}h((v.lang.rtl===!0?g.value!==!0:g.value)?Math.max(l-f,0):Math.min(0,f-l)),k(A(f/l,0,1)),e.isFirst===!0&&(z.value=!0)}function ee(e){if(n.value!==!0)return;const l=c.value,f=e.direction===t.side,H=(v.lang.rtl===!0?f!==!0:f)?A(e.distance.x,0,l):0;if(e.isFinal===!0){Math.abs(H)<Math.min(75,l)===!0?(a.animate(),k(1),h(0)):M(),z.value=!1;return}h($.value*H),k(A(1-H/l,0,1)),e.isFirst===!0&&(z.value=!0)}function E(){T(!1),j(!0)}function x(e,l){a.update(t.side,e,l)}function Se(e,l){e.value!==l&&(e.value=l)}function K(e,l){x("size",e===!0?t.miniWidth:l)}return a.instances[t.side]=_,K(t.miniToOverlay,c.value),x("space",V.value),x("offset",N.value),t.showIfAbove===!0&&t.modelValue!==!0&&n.value===!0&&t["onUpdate:modelValue"]!==void 0&&m("update:modelValue",!0),Ce(()=>{m("onLayout",V.value),m("miniState",C.value),D=t.showIfAbove===!0;const e=()=>{(n.value===!0?b:G)(!1,!0)};if(a.totalWidth.value!==0){te(e);return}d=s(a.totalWidth,()=>{d(),d=void 0,n.value===!1&&t.showIfAbove===!0&&i.value===!1?I(!1):e()})}),re(()=>{d!==void 0&&d(),w!==null&&(clearTimeout(w),w=null),n.value===!0&&E(),a.instances[t.side]===_&&(a.instances[t.side]=void 0,x("size",0),x("offset",0),x("space",!1))}),()=>{const e=[];i.value===!0&&(t.noSwipeOpen===!1&&e.push(Oe(q("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),ge.value)),e.push(ae("div",{ref:"backdrop",class:ce.value,style:fe.value,"aria-hidden":"true",onClick:M},void 0,"backdrop",t.noSwipeBackdrop!==!0&&n.value===!0,()=>ke.value)));const l=C.value===!0&&S.mini!==void 0,f=[q("div",{...O,key:""+l,class:[ye.value,O.class]},l===!0?S.mini():le(S.default))];return t.elevated===!0&&n.value===!0&&f.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(ae("aside",{ref:"content",class:we.value,style:be.value},f,"contentclose",t.noSwipeClose!==!0&&i.value===!0,()=>qe.value)),q("div",{class:"q-drawer-container"},e)}}});export{je as Q,Ke as a,Ee as b,Xe as c};
