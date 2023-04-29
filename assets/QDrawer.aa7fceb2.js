import{c as X,a as r,d as B,z as le,e as L,r as x,w as s,o as re,aq as Se,f as oe,g as ne,l as ie,u as Ce,x as te,ae as Oe,ar as ae,af as A}from"./index.933893db.js";import{Q as $e}from"./QLayout.5ea4a9f9.js";import{u as ze,a as Le}from"./use-prevent-scroll.5f8af89f.js";import{u as De,a as Me,b as Ve,c as Qe}from"./use-timeout.145f93a4.js";import{u as We,a as _e}from"./use-dark.9938d360.js";import{T as K}from"./TouchPan.c8bcaa86.js";var Ue=X({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:T}){const m=r(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>B("div",{class:m.value,role:"toolbar"},le(T.default))}}),je=X({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:T,emit:m}){const{proxy:{$q:O}}=ne(),o=oe(ie,L);if(o===L)return console.error("QHeader needs to be child of QLayout"),L;const v=x(parseInt(t.heightHint,10)),y=x(!0),S=r(()=>t.reveal===!0||o.view.value.indexOf("H")>-1||O.platform.is.ios&&o.isContainer.value===!0),D=r(()=>{if(t.modelValue!==!0)return 0;if(S.value===!0)return y.value===!0?v.value:0;const u=v.value-o.scroll.value.position;return u>0?u:0}),W=r(()=>t.modelValue!==!0||S.value===!0&&y.value!==!0),a=r(()=>t.modelValue===!0&&W.value===!0&&t.reveal===!0),M=r(()=>"q-header q-layout__section--marginal "+(S.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(W.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),w=r(()=>{const u=o.rows.value.top,b={};return u[0]==="l"&&o.left.space===!0&&(b[O.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),u[2]==="r"&&o.right.space===!0&&(b[O.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),b});function d(u,b){o.update("header",u,b)}function i(u,b){u.value!==b&&(u.value=b)}function C({height:u}){i(v,u),d("size",u)}function c(u){a.value===!0&&i(y,!0),m("focusin",u)}s(()=>t.modelValue,u=>{d("space",u),i(y,!0),o.animate()}),s(D,u=>{d("offset",u)}),s(()=>t.reveal,u=>{u===!1&&i(y,t.modelValue)}),s(y,u=>{o.animate(),m("reveal",u)}),s(o.scroll,u=>{t.reveal===!0&&i(y,u.direction==="up"||u.position<=t.revealOffset||u.position-u.inflectionPoint<100)});const n={};return o.instances.header=n,t.modelValue===!0&&d("size",v.value),d("space",t.modelValue),d("offset",D.value),re(()=>{o.instances.header===n&&(o.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const u=Se(T.default,[]);return t.elevated===!0&&u.push(B("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(B($e,{debounce:0,onResize:C})),B("header",{class:M.value,style:w.value,onFocusin:c},u)}}});const ue=150;var pe=X({name:"QDrawer",inheritAttrs:!1,props:{...De,...We,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Me,"onLayout","miniState"],setup(t,{slots:T,emit:m,attrs:O}){const o=ne(),{proxy:{$q:v}}=o,y=_e(t,v),{preventBodyScroll:S}=Le(),{registerTimeout:D,removeTimeout:W}=Ve(),a=oe(ie,L);if(a===L)return console.error("QDrawer needs to be child of QLayout"),L;let M,w=null,d;const i=x(t.behavior==="mobile"||t.behavior!=="desktop"&&a.totalWidth.value<=t.breakpoint),C=r(()=>t.mini===!0&&i.value!==!0),c=r(()=>C.value===!0?t.miniWidth:t.width),n=x(t.showIfAbove===!0&&i.value===!1?!0:t.modelValue===!0),u=r(()=>t.persistent!==!0&&(i.value===!0||ve.value===!0));function b(e,l){if(se(),e!==!1&&a.animate(),h(0),i.value===!0){const f=a.instances[P.value];f!==void 0&&f.belowBreakpoint===!0&&f.hide(!1),q(1),a.isContainer.value!==!0&&S(!0)}else q(0),e!==!1&&j(!1);D(()=>{e!==!1&&j(!0),l!==!0&&m("show",e)},ue)}function G(e,l){de(),e!==!1&&a.animate(),q(0),h($.value*c.value),p(),l!==!0?D(()=>{m("hide",e)},ue):W()}const{show:F,hide:V}=Qe({showing:n,hideOnRouteChange:u,handleShow:b,handleHide:G}),{addToHistory:se,removeFromHistory:de}=ze(n,V,u),_={belowBreakpoint:i,hide:V},g=r(()=>t.side==="right"),$=r(()=>(v.lang.rtl===!0?-1:1)*(g.value===!0?1:-1)),J=x(0),z=x(!1),I=x(!1),Y=x(c.value*$.value),P=r(()=>g.value===!0?"left":"right"),N=r(()=>n.value===!0&&i.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:c.value:0),R=r(()=>t.overlay===!0||t.miniToOverlay===!0||a.view.value.indexOf(g.value?"R":"L")>-1||v.platform.is.ios===!0&&a.isContainer.value===!0),Q=r(()=>t.overlay===!1&&n.value===!0&&i.value===!1),ve=r(()=>t.overlay===!0&&n.value===!0&&i.value===!1),ce=r(()=>"fullscreen q-drawer__backdrop"+(n.value===!1&&z.value===!1?" hidden":"")),fe=r(()=>({backgroundColor:`rgba(0,0,0,${J.value*.4})`})),Z=r(()=>g.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),me=r(()=>g.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),he=r(()=>{const e={};return a.header.space===!0&&Z.value===!1&&(R.value===!0?e.top=`${a.header.offset}px`:a.header.space===!0&&(e.top=`${a.header.size}px`)),a.footer.space===!0&&me.value===!1&&(R.value===!0?e.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(e.bottom=`${a.footer.size}px`)),e}),be=r(()=>{const e={width:`${c.value}px`,transform:`translateX(${Y.value}px)`};return i.value===!0?e:Object.assign(e,he.value)}),ye=r(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),we=r(()=>`q-drawer q-drawer--${t.side}`+(I.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(y.value===!0?" q-drawer--dark q-dark":"")+(z.value===!0?" no-transition":n.value===!0?"":" q-layout--prevent-focus")+(i.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${C.value===!0?"mini":"standard"}`+(R.value===!0||Q.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(Z.value===!0?" q-drawer--top-padding":""))),ge=r(()=>{const e=v.lang.rtl===!0?t.side:P.value;return[[K,Be,void 0,{[e]:!0,mouse:!0}]]}),qe=r(()=>{const e=v.lang.rtl===!0?P.value:t.side;return[[K,ee,void 0,{[e]:!0,mouse:!0}]]}),ke=r(()=>{const e=v.lang.rtl===!0?P.value:t.side;return[[K,ee,void 0,{[e]:!0,mouse:!0,mouseAllDir:!0}]]});function U(){Te(i,t.behavior==="mobile"||t.behavior!=="desktop"&&a.totalWidth.value<=t.breakpoint)}s(i,e=>{e===!0?(M=n.value,n.value===!0&&V(!1)):t.overlay===!1&&t.behavior!=="mobile"&&M!==!1&&(n.value===!0?(h(0),q(0),p()):F(!1))}),s(()=>t.side,(e,l)=>{a.instances[l]===_&&(a.instances[l]=void 0,a[l].space=!1,a[l].offset=0),a.instances[e]=_,a[e].size=c.value,a[e].space=Q.value,a[e].offset=N.value}),s(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&U()}),s(()=>t.behavior+t.breakpoint,U),s(a.isContainer,e=>{n.value===!0&&S(e!==!0),e===!0&&U()}),s(a.scrollbarWidth,()=>{h(n.value===!0?0:void 0)}),s(N,e=>{k("offset",e)}),s(Q,e=>{m("onLayout",e),k("space",e)}),s(g,()=>{h()}),s(c,e=>{h(),E(t.miniToOverlay,e)}),s(()=>t.miniToOverlay,e=>{E(e,c.value)}),s(()=>v.lang.rtl,()=>{h()}),s(()=>t.mini,()=>{t.modelValue===!0&&(xe(),a.animate())}),s(C,e=>{m("miniState",e)});function h(e){e===void 0?te(()=>{e=n.value===!0?0:c.value,h($.value*e)}):(a.isContainer.value===!0&&g.value===!0&&(i.value===!0||Math.abs(e)===c.value)&&(e+=$.value*a.scrollbarWidth.value),Y.value=e)}function q(e){J.value=e}function j(e){const l=e===!0?"remove":a.isContainer.value!==!0?"add":"";l!==""&&document.body.classList[l]("q-body--drawer-toggle")}function xe(){w!==null&&clearTimeout(w),o.proxy&&o.proxy.$el&&o.proxy.$el.classList.add("q-drawer--mini-animate"),I.value=!0,w=setTimeout(()=>{w=null,I.value=!1,o&&o.proxy&&o.proxy.$el&&o.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Be(e){if(n.value!==!1)return;const l=c.value,f=A(e.distance.x,0,l);if(e.isFinal===!0){f>=Math.min(75,l)===!0?F():(a.animate(),q(0),h($.value*l)),z.value=!1;return}h((v.lang.rtl===!0?g.value!==!0:g.value)?Math.max(l-f,0):Math.min(0,f-l)),q(A(f/l,0,1)),e.isFirst===!0&&(z.value=!0)}function ee(e){if(n.value!==!0)return;const l=c.value,f=e.direction===t.side,H=(v.lang.rtl===!0?f!==!0:f)?A(e.distance.x,0,l):0;if(e.isFinal===!0){Math.abs(H)<Math.min(75,l)===!0?(a.animate(),q(1),h(0)):V(),z.value=!1;return}h($.value*H),q(A(1-H/l,0,1)),e.isFirst===!0&&(z.value=!0)}function p(){S(!1),j(!0)}function k(e,l){a.update(t.side,e,l)}function Te(e,l){e.value!==l&&(e.value=l)}function E(e,l){k("size",e===!0?t.miniWidth:l)}return a.instances[t.side]=_,E(t.miniToOverlay,c.value),k("space",Q.value),k("offset",N.value),t.showIfAbove===!0&&t.modelValue!==!0&&n.value===!0&&t["onUpdate:modelValue"]!==void 0&&m("update:modelValue",!0),Ce(()=>{m("onLayout",Q.value),m("miniState",C.value),M=t.showIfAbove===!0;const e=()=>{(n.value===!0?b:G)(!1,!0)};if(a.totalWidth.value!==0){te(e);return}d=s(a.totalWidth,()=>{d(),d=void 0,n.value===!1&&t.showIfAbove===!0&&i.value===!1?F(!1):e()})}),re(()=>{d!==void 0&&d(),w!==null&&(clearTimeout(w),w=null),n.value===!0&&p(),a.instances[t.side]===_&&(a.instances[t.side]=void 0,k("size",0),k("offset",0),k("space",!1))}),()=>{const e=[];i.value===!0&&(t.noSwipeOpen===!1&&e.push(Oe(B("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),ge.value)),e.push(ae("div",{ref:"backdrop",class:ce.value,style:fe.value,"aria-hidden":"true",onClick:V},void 0,"backdrop",t.noSwipeBackdrop!==!0&&n.value===!0,()=>ke.value)));const l=C.value===!0&&T.mini!==void 0,f=[B("div",{...O,key:""+l,class:[ye.value,O.class]},l===!0?T.mini():le(T.default))];return t.elevated===!0&&n.value===!0&&f.push(B("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(ae("aside",{ref:"content",class:we.value,style:be.value},f,"contentclose",t.noSwipeClose!==!0&&i.value===!0,()=>qe.value)),B("div",{class:"q-drawer-container"},e)}}});export{je as Q,Ue as a,pe as b};
