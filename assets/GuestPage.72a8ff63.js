import{Q as tt}from"./QPage.b491c13c.js";import{u as ke,s as I,a as U}from"./re-store.28b2c3bc.js";import{a as it,Q as me}from"./QCard.468e4224.js";import{r as m,h as s,i as n,g as E,ad as Se,ae as _e,ah as R,x as K,y as Y,j as A,z as Q,q as X,ai as at,aj as ot,u as Ce,S as we,D as le,l as qe,ak as re,al as st,am as nt,Q as B,n as Ie,F as lt,an as Be,K as rt,k as ne,M as ut,O as ct,d as $e,_ as Te,o as Pe,ao as dt,a as y,w as F,e as J,p as gt,ag as fe,ap as mt,c as ft,f as ht}from"./index.ce5f8797.js";import{d as ue,f as ce,c as Fe,e as Ee,b as vt,a as pt,g as De,h as bt,i as xt,u as yt}from"./use-dark.071e8543.js";import{u as kt,a as St,b as _t,c as Ct,g as wt,d as qt}from"./use-portal.77dc9793.js";import"./firebase.8ff914f0.js";function Ve(e,t){const i=m(null),a=s(()=>e.disable===!0?null:n("span",{ref:i,class:"no-outline",tabindex:-1}));function r(u){const o=t.value;u!==void 0&&u.type.indexOf("key")===0?o!==null&&document.activeElement!==o&&o.contains(document.activeElement)===!0&&o.focus():i.value!==null&&(u===void 0||o!==null&&o.contains(u.target)===!0)&&i.value.focus()}return{refocusTargetEl:a,refocusTarget:r}}const je={name:String};function Re(e={}){return(t,i,a)=>{t[i](n("input",{class:"hidden"+(a||""),...e.value}))}}var Oe={xs:30,sm:35,md:40,lg:50,xl:60};const It=n("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[n("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),n("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]);var Bt=E({name:"QRadio",props:{...ue,...Se,...je,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:t,emit:i}){const{proxy:a}=Q(),r=ce(e,a.$q),u=_e(e,Oe),o=m(null),{refocusTargetEl:d,refocusTarget:b}=Ve(e,o),h=s(()=>R(e.modelValue)===R(e.val)),l=s(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(r.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),c=s(()=>{const p=e.color!==void 0&&(e.keepColor===!0||h.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${h.value===!0?"truthy":"falsy"}${p}`}),x=s(()=>(h.value===!0?e.checkedIcon:e.uncheckedIcon)||null),_=s(()=>e.disable===!0?-1:e.tabindex||0),k=s(()=>{const p={type:"radio"};return e.name!==void 0&&Object.assign(p,{".checked":h.value===!0,"^checked":h.value===!0?"checked":void 0,name:e.name,value:e.val}),p}),S=Re(k);function q(p){p!==void 0&&(X(p),b(p)),e.disable!==!0&&h.value!==!0&&i("update:modelValue",e.val,p)}function P(p){(p.keyCode===13||p.keyCode===32)&&X(p)}function C(p){(p.keyCode===13||p.keyCode===32)&&q(p)}return Object.assign(a,{set:q}),()=>{const p=x.value!==null?[n("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[n(K,{class:"q-radio__icon",name:x.value})])]:[It];e.disable!==!0&&S(p,"unshift"," q-radio__native q-ma-none q-pa-none");const $=[n("div",{class:c.value,style:u.value,"aria-hidden":"true"},p)];d.value!==null&&$.push(d.value);const T=e.label!==void 0?Y(t.default,[e.label]):A(t.default);return T!==void 0&&$.push(n("div",{class:"q-radio__label q-anchor--skip"},T)),n("div",{ref:o,class:l.value,tabindex:_.value,role:"radio","aria-label":e.label,"aria-checked":h.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:q,onKeydown:P,onKeyup:C},$)}}});const ze={...ue,...Se,...je,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Le=["update:modelValue"];function Ae(e,t){const{props:i,slots:a,emit:r,proxy:u}=Q(),{$q:o}=u,d=ce(i,o),b=m(null),{refocusTargetEl:h,refocusTarget:l}=Ve(i,b),c=_e(i,Oe),x=s(()=>i.val!==void 0&&Array.isArray(i.modelValue)),_=s(()=>{const f=R(i.val);return x.value===!0?i.modelValue.findIndex(D=>R(D)===f):-1}),k=s(()=>x.value===!0?_.value>-1:R(i.modelValue)===R(i.trueValue)),S=s(()=>x.value===!0?_.value===-1:R(i.modelValue)===R(i.falseValue)),q=s(()=>k.value===!1&&S.value===!1),P=s(()=>i.disable===!0?-1:i.tabindex||0),C=s(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(i.disable===!0?" disabled":"")+(d.value===!0?` q-${e}--dark`:"")+(i.dense===!0?` q-${e}--dense`:"")+(i.leftLabel===!0?" reverse":"")),p=s(()=>{const f=k.value===!0?"truthy":S.value===!0?"falsy":"indet",D=i.color!==void 0&&(i.keepColor===!0||(e==="toggle"?k.value===!0:S.value!==!0))?` text-${i.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${f}${D}`}),$=s(()=>{const f={type:"checkbox"};return i.name!==void 0&&Object.assign(f,{".checked":k.value,"^checked":k.value===!0?"checked":void 0,name:i.name,value:x.value===!0?i.val:i.trueValue}),f}),T=Re($),M=s(()=>{const f={tabindex:P.value,role:e==="toggle"?"switch":"checkbox","aria-label":i.label,"aria-checked":q.value===!0?"mixed":k.value===!0?"true":"false"};return i.disable===!0&&(f["aria-disabled"]="true"),f});function O(f){f!==void 0&&(X(f),l(f)),i.disable!==!0&&r("update:modelValue",g(),f)}function g(){if(x.value===!0){if(k.value===!0){const f=i.modelValue.slice();return f.splice(_.value,1),f}return i.modelValue.concat([i.val])}if(k.value===!0){if(i.toggleOrder!=="ft"||i.toggleIndeterminate===!1)return i.falseValue}else if(S.value===!0){if(i.toggleOrder==="ft"||i.toggleIndeterminate===!1)return i.trueValue}else return i.toggleOrder!=="ft"?i.trueValue:i.falseValue;return i.indeterminateValue}function V(f){(f.keyCode===13||f.keyCode===32)&&X(f)}function j(f){(f.keyCode===13||f.keyCode===32)&&O(f)}const Z=t(k,q);return Object.assign(u,{toggle:O}),()=>{const f=Z();i.disable!==!0&&T(f,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const D=[n("div",{class:p.value,style:c.value,"aria-hidden":"true"},f)];h.value!==null&&D.push(h.value);const H=i.label!==void 0?Y(a.default,[i.label]):A(a.default);return H!==void 0&&D.push(n("div",{class:`q-${e}__label q-anchor--skip`},H)),n("div",{ref:b,class:C.value,...M.value,onClick:O,onKeydown:V,onKeyup:j},D)}}const $t=n("div",{key:"svg",class:"q-checkbox__bg absolute"},[n("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[n("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),n("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var Tt=E({name:"QCheckbox",props:ze,emits:Le,setup(e){function t(i,a){const r=s(()=>(i.value===!0?e.checkedIcon:a.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>r.value!==null?[n("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[n(K,{class:"q-checkbox__icon",name:r.value})])]:[$t]}return Ae("checkbox",t)}}),Pt=E({name:"QToggle",props:{...ze,icon:String,iconColor:String},emits:Le,setup(e){function t(i,a){const r=s(()=>(i.value===!0?e.checkedIcon:a.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),u=s(()=>i.value===!0?e.iconColor:null);return()=>[n("div",{class:"q-toggle__track"}),n("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},r.value!==void 0?[n(K,{name:r.value,color:u.value})]:void 0)]}return Ae("toggle",t)}});const Qe={radio:Bt,checkbox:Tt,toggle:Pt},Ft=Object.keys(Qe);var Et=E({name:"QOptionGroup",props:{...ue,modelValue:{required:!0},options:{type:Array,validator:e=>e.every(t=>"value"in t&&"label"in t)},name:String,type:{default:"radio",validator:e=>Ft.includes(e)},color:String,keepColor:Boolean,dense:Boolean,size:String,leftLabel:Boolean,inline:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{emit:t,slots:i}){const{proxy:{$q:a}}=Q(),r=Array.isArray(e.modelValue);e.type==="radio"?r===!0&&console.error("q-option-group: model should not be array"):r===!1&&console.error("q-option-group: model should be array in your case");const u=ce(e,a),o=s(()=>Qe[e.type]),d=s(()=>"q-option-group q-gutter-x-sm"+(e.inline===!0?" q-option-group--inline":"")),b=s(()=>{const l={role:"group"};return e.type==="radio"&&(l.role="radiogroup",e.disable===!0&&(l["aria-disabled"]="true")),l});function h(l){t("update:modelValue",l)}return()=>n("div",{class:d.value,...b.value},e.options.map((l,c)=>{const x=i["label-"+c]!==void 0?()=>i["label-"+c](l):i.label!==void 0?()=>i.label(l):void 0;return n("div",[n(o.value,{modelValue:e.modelValue,val:l.value,name:l.name===void 0?e.name:l.name,disable:e.disable||l.disable,label:x===void 0?l.label:null,leftLabel:l.leftLabel===void 0?e.leftLabel:l.leftLabel,color:l.color===void 0?e.color:l.color,checkedIcon:l.checkedIcon,uncheckedIcon:l.uncheckedIcon,dark:l.dark||u.value,size:l.size===void 0?e.size:l.size,dense:e.dense,keepColor:l.keepColor===void 0?e.keepColor:l.keepColor,"onUpdate:modelValue":h},x)])}))}}),Dt=E({name:"QCardActions",props:{...at,vertical:Boolean},setup(e,{slots:t}){const i=ot(e),a=s(()=>`q-card__actions ${i.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>n("div",{class:a.value},A(t.default))}});const z=[];let W;function Vt(e){W=e.keyCode===27}function jt(){W===!0&&(W=!1)}function Rt(e){W===!0&&(W=!1,Ce(e,27)===!0&&z[z.length-1](e))}function Me(e){window[e]("keydown",Vt),window[e]("blur",jt),window[e]("keyup",Rt),W=!1}function Ot(e){we.is.desktop===!0&&(z.push(e),z.length===1&&Me("addEventListener"))}function he(e){const t=z.indexOf(e);t>-1&&(z.splice(t,1),z.length===0&&Me("removeEventListener"))}const L=[];function We(e){L[L.length-1](e)}function zt(e){we.is.desktop===!0&&(L.push(e),L.length===1&&document.body.addEventListener("focusin",We))}function ve(e){const t=L.indexOf(e);t>-1&&(L.splice(t,1),L.length===0&&document.body.removeEventListener("focusin",We))}let G=0;const Lt={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},pe={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var At=E({name:"QDialog",inheritAttrs:!1,props:{...Fe,...kt,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...Ee,"shake","click","escapeKey"],setup(e,{slots:t,emit:i,attrs:a}){const r=Q(),{proxy:{$q:u}}=r,o=m(null),d=m(!1),b=m(!1);let h=null,l=null,c,x;const _=s(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:k}=xt(),{registerTimeout:S}=vt(),{registerTick:q,removeTick:P}=pt(),{transitionProps:C,transitionStyle:p}=St(e,()=>pe[e.position][0],()=>pe[e.position][1]),{showPortal:$,hidePortal:T,portalIsAccessible:M,renderPortal:O}=_t(r,o,et,"dialog"),{hide:g}=De({showing:d,hideOnRouteChange:_,handleShow:Ge,handleHide:Je,processOnMount:!0}),{addToHistory:V,removeFromHistory:j}=bt(d,g,_),Z=s(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Lt[e.position]}`+(b.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),f=s(()=>d.value===!0&&e.seamless!==!0),D=s(()=>e.autoClose===!0?{onClick:Xe}:{}),H=s(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${f.value===!0?"modal":"seamless"}`,a.class]);le(()=>e.maximized,v=>{d.value===!0&&ie(v)}),le(f,v=>{k(v),v===!0?(zt(ae),Ot(te)):(ve(ae),he(te))});function Ge(v){V(),l=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,ie(e.maximized),$(),b.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),q(N)):P(),S(()=>{if(r.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:w,bottom:oe}=document.activeElement.getBoundingClientRect(),{innerHeight:ge}=window,se=window.visualViewport!==void 0?window.visualViewport.height:ge;w>0&&oe>se/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-se,oe>=ge?1/0:Math.ceil(document.scrollingElement.scrollTop+oe-se/2))),document.activeElement.scrollIntoView()}x=!0,o.value.click(),x=!1}$(!0),b.value=!1,i("show",v)},e.transitionDuration)}function Je(v){P(),j(),de(!0),b.value=!0,T(),l!==null&&(((v&&v.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),S(()=>{T(!0),b.value=!1,i("hide",v)},e.transitionDuration)}function N(v){Ct(()=>{let w=o.value;w===null||w.contains(document.activeElement)===!0||(w=(v!==""?w.querySelector(v):null)||w.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||w.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||w.querySelector("[autofocus], [data-autofocus]")||w,w.focus({preventScroll:!0}))})}function ee(v){v&&typeof v.focus=="function"?v.focus({preventScroll:!0}):N(),i("shake");const w=o.value;w!==null&&(w.classList.remove("q-animate--scale"),w.classList.add("q-animate--scale"),h!==null&&clearTimeout(h),h=setTimeout(()=>{h=null,o.value!==null&&(w.classList.remove("q-animate--scale"),N())},170))}function te(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&ee():(i("escapeKey"),g()))}function de(v){h!==null&&(clearTimeout(h),h=null),(v===!0||d.value===!0)&&(ie(!1),e.seamless!==!0&&(k(!1),ve(ae),he(te))),v!==!0&&(l=null)}function ie(v){v===!0?c!==!0&&(G<1&&document.body.classList.add("q-body--dialog"),G++,c=!0):c===!0&&(G<2&&document.body.classList.remove("q-body--dialog"),G--,c=!1)}function Xe(v){x!==!0&&(g(v),i("click",v))}function Ye(v){e.persistent!==!0&&e.noBackdropDismiss!==!0?g(v):e.noShake!==!0&&ee(v.relatedTarget)}function ae(v){e.allowFocusOutside!==!0&&M.value===!0&&st(o.value,v.target)!==!0&&N('[tabindex]:not([tabindex="-1"])')}Object.assign(r.proxy,{focus:N,shake:ee,__updateRefocusTarget(v){l=v||null}}),qe(de);const Ze=u.platform.is.ios===!0||u.platform.is.safari?"onClick":"onFocusin";function et(){return n("div",{role:"dialog","aria-modal":f.value===!0?"true":"false",...a,class:H.value},[n(re,{name:"q-transition--fade",appear:!0},()=>f.value===!0?n("div",{class:"q-dialog__backdrop fixed-full",style:p.value,"aria-hidden":"true",tabindex:-1,[Ze]:Ye}):null),n(re,C.value,()=>d.value===!0?n("div",{ref:o,class:Z.value,style:p.value,tabindex:-1,...D.value},A(t.default)):null)])}return O}});const Qt={ratio:[String,Number]};function Mt(e,t){return s(()=>{const i=Number(e.ratio||(t!==void 0?t.value:void 0));return isNaN(i)!==!0&&i>0?{paddingBottom:`${100/i}%`}:null})}const Wt=16/9;var Nt=E({name:"QImg",props:{...Qt,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Wt},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:i}){const a=m(e.initialRatio),r=Mt(e,a);let u=null,o=!1;const d=[m(null),m(q())],b=m(0),h=m(!1),l=m(!1),c=s(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),x=s(()=>({width:e.width,height:e.height})),_=s(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),k=s(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));le(()=>S(),P);function S(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function q(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function P(g){u!==null&&(clearTimeout(u),u=null),l.value=!1,g===null?(h.value=!1,d[b.value^1].value=q()):h.value=!0,d[b.value].value=g}function C({target:g}){o!==!0&&(u!==null&&(clearTimeout(u),u=null),a.value=g.naturalHeight===0?.5:g.naturalWidth/g.naturalHeight,p(g,1))}function p(g,V){o===!0||V===1e3||(g.complete===!0?$(g):u=setTimeout(()=>{u=null,p(g,V+1)},50))}function $(g){o!==!0&&(b.value=b.value^1,d[b.value].value=null,h.value=!1,l.value=!1,i("load",g.currentSrc||g.src))}function T(g){u!==null&&(clearTimeout(u),u=null),h.value=!1,l.value=!0,d[b.value].value=null,d[b.value^1].value=q(),i("error",g)}function M(g){const V=d[g].value,j={key:"img_"+g,class:_.value,style:k.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...V};return b.value===g?(j.class+=" q-img__image--waiting",Object.assign(j,{onLoad:C,onError:T})):j.class+=" q-img__image--loaded",n("div",{class:"q-img__container absolute-full",key:"img"+g},n("img",j))}function O(){return h.value!==!0?n("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},A(t[l.value===!0?"error":"default"])):n("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():e.noSpinner===!0?void 0:[n(nt,{color:e.spinnerColor,size:e.spinnerSize})])}return P(S()),qe(()=>{o=!0,u!==null&&(clearTimeout(u),u=null)}),()=>{const g=[];return r.value!==null&&g.push(n("div",{key:"filler",style:r.value})),l.value!==!0&&(d[0].value!==null&&g.push(M(0)),d[1].value!==null&&g.push(M(1))),g.push(n(re,{name:"q-transition--fade"},O)),n("div",{class:c.value,style:x.value,role:"img","aria-label":e.alt},g)}}});const Kt=["top","right","bottom","left"],Ne={type:{type:String,default:"a"},outline:Boolean,push:Boolean,flat:Boolean,unelevated:Boolean,color:String,textColor:String,glossy:Boolean,square:Boolean,padding:String,label:{type:[String,Number],default:""},labelPosition:{type:String,default:"right",validator:e=>Kt.includes(e)},externalLabel:Boolean,hideLabel:{type:Boolean},labelClass:[Array,String,Object],labelStyle:[Array,String,Object],disable:Boolean,tabindex:[Number,String]};function Ke(e,t){return{formClass:s(()=>`q-fab--form-${e.square===!0?"square":"rounded"}`),stacked:s(()=>e.externalLabel===!1&&["top","bottom"].includes(e.labelPosition)),labelProps:s(()=>{if(e.externalLabel===!0){const i=e.hideLabel===null?t.value===!1:e.hideLabel;return{action:"push",data:{class:[e.labelClass,`q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}`+(i===!0?" q-fab__label--external-hidden":"")],style:e.labelStyle}}}return{action:["left","top"].includes(e.labelPosition)?"unshift":"push",data:{class:[e.labelClass,`q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}`+(e.hideLabel===!0?" q-fab__label--internal-hidden":"")],style:e.labelStyle}}})}}const He={start:"self-end",center:"self-center",end:"self-start"},Ht=Object.keys(He);var be=E({name:"QFabAction",props:{...Ne,icon:{type:String,default:""},anchor:{type:String,validator:e=>Ht.includes(e)},to:[String,Object],replace:Boolean},emits:["click"],setup(e,{slots:t,emit:i}){const a=Ie(Be,()=>({showing:{value:!0},onChildClick:lt})),{formClass:r,labelProps:u}=Ke(e,a.showing),o=s(()=>{const c=He[e.anchor];return r.value+(c!==void 0?` ${c}`:"")}),d=s(()=>e.disable===!0||a.showing.value!==!0);function b(c){a.onChildClick(c),i("click",c)}function h(){const c=[];return t.icon!==void 0?c.push(t.icon()):e.icon!==""&&c.push(n(K,{name:e.icon})),(e.label!==""||t.label!==void 0)&&c[u.value.action](n("div",u.value.data,t.label!==void 0?t.label():[e.label])),Y(t.default,c)}const l=Q();return Object.assign(l.proxy,{click:b}),()=>n(B,{class:o.value,...e,noWrap:!0,stack:e.stacked,icon:void 0,label:void 0,noCaps:!0,fabMini:!0,disable:d.value,onClick:b},h)}});const Ut=["up","right","down","left"],Gt=["left","center","right"];var Jt=E({name:"QFab",props:{...Ne,...Fe,icon:String,activeIcon:String,hideIcon:Boolean,hideLabel:{default:null},direction:{type:String,default:"right",validator:e=>Ut.includes(e)},persistent:Boolean,verticalActionsAlign:{type:String,default:"center",validator:e=>Gt.includes(e)}},emits:Ee,setup(e,{slots:t}){const i=m(null),a=m(e.modelValue===!0),r=yt(),{proxy:{$q:u}}=Q(),{formClass:o,labelProps:d}=Ke(e,a),b=s(()=>e.persistent!==!0),{hide:h,toggle:l}=De({showing:a,hideOnRouteChange:b}),c=s(()=>({opened:a.value})),x=s(()=>`q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${o.value}`+(a.value===!0?" q-fab--opened":" q-fab--closed")),_=s(()=>`q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${a.value===!0?"opened":"closed"}`),k=s(()=>{const C={id:r,role:"menu"};return a.value!==!0&&(C["aria-hidden"]="true"),C}),S=s(()=>`q-fab__icon-holder  q-fab__icon-holder--${a.value===!0?"opened":"closed"}`);function q(C,p){const $=t[C],T=`q-fab__${C} absolute-full`;return $===void 0?n(K,{class:T,name:e[p]||u.iconSet.fab[p]}):n("div",{class:T},$(c.value))}function P(){const C=[];return e.hideIcon!==!0&&C.push(n("div",{class:S.value},[q("icon","icon"),q("active-icon","activeIcon")])),(e.label!==""||t.label!==void 0)&&C[d.value.action](n("div",d.value.data,t.label!==void 0?t.label(c.value):[e.label])),Y(t.tooltip,C)}return rt(Be,{showing:a,onChildClick(C){h(C),i.value!==null&&i.value.$el.focus()}}),()=>n("div",{class:x.value},[n(B,{ref:i,class:o.value,...e,noWrap:!0,stack:e.stacked,align:void 0,icon:void 0,label:void 0,noCaps:!0,fab:!0,"aria-expanded":a.value===!0?"true":"false","aria-haspopup":"true","aria-controls":r,onClick:l},P),n("div",{class:_.value,...k.value},A(t.default))])}});const Xt={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function Yt(){const{props:e,proxy:{$q:t}}=Q(),i=Ie(ut,ne);if(i===ne)return console.error("QPageSticky needs to be child of QLayout"),ne;const a=s(()=>{const c=e.position;return{top:c.indexOf("top")>-1,right:c.indexOf("right")>-1,bottom:c.indexOf("bottom")>-1,left:c.indexOf("left")>-1,vertical:c==="top"||c==="bottom",horizontal:c==="left"||c==="right"}}),r=s(()=>i.header.offset),u=s(()=>i.right.offset),o=s(()=>i.footer.offset),d=s(()=>i.left.offset),b=s(()=>{let c=0,x=0;const _=a.value,k=t.lang.rtl===!0?-1:1;_.top===!0&&r.value!==0?x=`${r.value}px`:_.bottom===!0&&o.value!==0&&(x=`${-o.value}px`),_.left===!0&&d.value!==0?c=`${k*d.value}px`:_.right===!0&&u.value!==0&&(c=`${-k*u.value}px`);const S={transform:`translate(${c}, ${x})`};return e.offset&&(S.margin=`${e.offset[1]}px ${e.offset[0]}px`),_.vertical===!0?(d.value!==0&&(S[t.lang.rtl===!0?"right":"left"]=`${d.value}px`),u.value!==0&&(S[t.lang.rtl===!0?"left":"right"]=`${u.value}px`)):_.horizontal===!0&&(r.value!==0&&(S.top=`${r.value}px`),o.value!==0&&(S.bottom=`${o.value}px`)),S}),h=s(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function l(c){const x=A(c.default);return n("div",{class:h.value,style:b.value},e.expand===!0?x:[n("div",x)])}return{$layout:i,getStickyContent:l}}var xe=E({name:"QPageSticky",props:Xt,setup(e,{slots:t}){const{getStickyContent:i}=Yt();return()=>i(t)}});function ye(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var Zt=ct({name:"close-popup",beforeMount(e,{value:t}){const i={depth:ye(t),handler(a){i.depth!==0&&setTimeout(()=>{const r=wt(e);r!==void 0&&qt(r,a,i.depth)})},handlerKey(a){Ce(a,13)===!0&&i.handler(a)}};e.__qclosepopup=i,e.addEventListener("click",i.handler),e.addEventListener("keyup",i.handlerKey)},updated(e,{value:t,oldValue:i}){t!==i&&(e.__qclosepopup.depth=ye(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});const ei=$e({name:"StepperComponent",props:{initialImgSrc:{type:String,required:!0},initialImgFit:{type:String},initialPageText:{type:String,required:!1,default:"This is the paragraph to be reconstructed."},initialPageObj:{type:Object,required:!1,default:m({imgIdx:0,imgs:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Douglas_DC-3%2C_SE-CFP.jpg/1024px-Douglas_DC-3%2C_SE-CFP.jpg",cap:"Doublas DC-3"}],pageText:"This is the paragraph to be reconstructed (default text)",imgFit:"cover",pctReplace:25})},assignmentObj:{type:Object,required:!0}},setup(e){const t=ke();return{props:e,reStore:t,group:m(""),imgs:m([]),imgIdx:m(0),imgSrc:m(""),imgCap:m(""),imgFit:m(""),pgIdx:m(0),pageText:m(""),pctReplace:m(15),assignment:m(e.assignmentObj),step:m(1),words:m([]),options:m([]),answers:m([]),targetIdx:m(0),showWordChoices:m(!1),slideShowInterval:m(null)}},mounted(){console.log("Stepper.mounted ",this.props),this.reStore.setStatus("points",this.assignment.points),this.reStore.setStatus("goal",this.assignment.goal),this.reStore.setStatus("title",this.assignment.title),this.reStore.setStatus("pgIdx",this.assignment.pgIdx),this.reStore.setStatus("pgTot",this.assignment.pages.length),this.reStore.setStatus("courseid",this.assignment.courseid),this.step1()},methods:{stringify(){const e=JSON.stringify(this.assignment);console.log(e)},prevImg(){this.imgIdx=this.imgIdx-1<0?this.imgs.length-1:0,this.imgSrc=this.imgs[this.imgIdx].url,this.imgCap=this.imgs[this.imgIdx].cap,console.log("stepper nextImg",this.imgIdx),this.reStore.setStatus("imgIdx",this.imgIdx)},nextImg(){this.imgIdx=this.imgIdx+1>this.imgs.length-1?0:this.imgIdx+1,this.imgSrc=this.imgs[this.imgIdx].url,this.imgCap=this.imgs[this.imgIdx].cap,console.log("stepper nextImg",this.imgIdx,this.imgs),this.reStore.setStatus("imgIdx",this.imgIdx)},cycleFit(){const e=["scale-down","cover"];let t=e.indexOf(this.imgFit);this.imgFit=t+1>=e.length?e[0]:e[t+1],this.reStore.setStatus("imgFit",this.imgFit)},loadPage(e){this.imgs=e.imgs,this.imgIdx=e.imgIdx,this.imgSrc=e.imgs.length?e.imgs[0].url:null,this.imgCap=e.imgs.length?e.imgs[0].cap:null,this.imgFit=e.imgFit,this.pageText=e.pageText,this.pctReplace=e.pctReplace,I("#slideTextDiv").html(this.pageText),this.reStore.setStatus("imgIdx",this.imgIdx),this.reStore.setStatus("imgTot",this.imgs.length),this.reStore.setStatus("guideWords",this.assignment.pages[this.pgIdx].guideWords),this.reStore.setStatus("imgFit",this.imgFit),this.reStore.setStatus("pageid",this.assignment.pages[this.pgIdx].pageid),this.reStore.setStatus("pctReplace",this.pctReplace),this.reStore.setStatus("lang",this.assignment.pages[this.pgIdx].lang)},step1(){this.step=1,console.log("step",this.step),U(".stepB").classed("readyBorder",!1),I("#slideTextDiv").classed("border-red",!1),I("#slideTextDiv").classed("border-green",!1),I("#step1B").classed("readyBorder",!0);let e;if(this.assignment.pages[this.pgIdx].isCustom===!0)e=this.assignment.pages[this.pgIdx],this.loadPage(e);else if(this.assignment.pages[this.pgIdx].pageid){if(this.assignment.pages[this.pgIdx].pageid){const t="",i=this.assignment.pages[this.pgIdx].pageid,a=this.reStore.getPage(t,i);console.log("received promise ",a),a.then(r=>{this.loadPage(r)})}}else{const t=this.assignment.pages[this.pgIdx].guideWords,i=this.assignment.pages[this.pgIdx].pageid;console.log("guideWords",t,"pageid ",i);const a=this.reStore.getPage(t,i);console.log("received promise ",a),a.then(r=>{this.loadPage(r)})}},step2(){if(U(".stepB").classed("readyBorder",!1),this.step===2)return;for(this.step=2,I("#step2B").classed("readyBorder",!0),console.log("step",this.step),I("#slideTextDiv").classed("border-red",!1),I("#slideTextDiv").classed("border-green",!1);this.words.length>0;)this.words.pop();for(;this.answers.length>0;)this.answers.pop();for(;this.options.length>0;)this.options.pop();const e=this.pageText.replaceAll("  "," ").split(" ");console.log("rtext: ",e);let t="";for(const a in e){let r;try{r=this.pctReplace}catch{r=10}if(Math.random()*100<=r){if(e[a]===" "){t+=e[a]+" ";continue}t+=' <b class="choose" id="pop_'+this.words.length+'">[choose]</b> ',this.words.push(e[a]),this.answers.push("")}else t+=e[a]+" "}console.log(t),I("#slideTextDiv").html(t);const i=5;for(const a in this.words){const r="#pop_"+a;I(r).on("click",u=>{for(;this.options.length>0;)this.options.pop();const o=[];this.targetIdx=a,console.log("onclick: targetIdx = ",this.targetIdx,this.targetIdx.value,a,this.words.length),this.options.push({label:this.words[a],value:this.words[a]}),o.push(this.words[a]);for(let d=0;d<Math.min(i,this.words.length);d++)o.indexOf(this.words[d])>-1||(this.options.push({label:this.words[d],value:this.words[d]}),o.push(this.words[d]));console.log(o),this.showWordChoices=!0})}},step3(){if(U(".stepB").classed("readyBorder",!1),this.step===3)return;this.step=3,I("#step3B").classed("readyBorder",!0),console.log("step",this.step);let e=!0;for(const t in this.words)this.words[t]!==this.answers[t]&&(e=!1);e===!0?(I("#slideTextDiv").classed("border-green",!0),this.assignment.score+=this.words.length,this.reStore.assignmentStatus.points+=this.words.length,this.step=4):I("#slideTextDiv").classed("border-red",!0)},step4(){U(".stepB").classed("readyBorder",!1),console.log("step ",this.step),this.step===4&&(I("#step4B").classed("readyBorder",!0),this.pgIdx===this.assignment.pages.length-1&&this.assignment.pages[this.pgIdx].isCustom===!1?console.log("Pages array ended with random. pgIdx "):this.pgIdx=this.pgIdx+1<=this.assignment.pages.length-1?this.pgIdx+1:0,console.log("Proceeding to next page",this.pgIdx),this.reStore.setStatus("pgIdx",this.pgIdx),this.step1())},update(e){console.log("targetIdx: ",this.targetIdx,"val: ",e),this.answers[this.targetIdx]=e;const t="#pop_"+this.targetIdx;I(t).html(e),console.log(this.answers),this.showWordChoices=!1,this.group=""},toggleSlideShow(){this.slideShowInterval?(window.clearInterval(this.slideShowInterval),this.slideShowInterval=null):this.slideShowInterval=window.setInterval(()=>{console.log("tick"),this.nextImg()},5e3)},saveImage(){console.log("saveImage")},saveBookmark(){console.log("saveBookmark")}}}),ti=J("div",{class:"text-h6"},"Choose correct word:",-1),ii={class:"q-pa-lg"},ai={id:"slideCaptionDiv",class:"absolute-top text-subtitle1 text-center q-my-xl"},oi={id:"slideTextDiv",class:"text-panel text-center absolute-center",contentEditable:"false"};function si(e,t,i,a,r,u){return Pe(),dt(mt,null,[y(At,{modelValue:this.showWordChoices,"onUpdate:modelValue":t[1]||(t[1]=o=>this.showWordChoices=o)},{default:F(()=>[y(it,null,{default:F(()=>[y(me,null,{default:F(()=>[ti]),_:1}),y(me,{class:"q-pt-none"},{default:F(()=>[J("div",ii,[y(Et,{modelValue:e.group,"onUpdate:modelValue":[t[0]||(t[0]=o=>e.group=o),this.update],options:this.options,color:"primary"},null,8,["modelValue","options","onUpdate:modelValue"])])]),_:1}),y(Dt,{align:"right"},{default:F(()=>[gt(y(B,{flat:"",label:"OK",color:"primary"},null,512),[[Zt]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),y(Nt,{class:"fixed-center",src:this.imgSrc,fit:this.imgFit,height:"100%"},{default:F(()=>[J("div",ai,fe(this.imgCap),1)]),_:1},8,["src","fit"]),J("div",oi,fe(this.pageText),1),y(xe,{position:"bottom",offset:[0,30]},{default:F(()=>[y(B,{color:"accent",onClick:t[2]||(t[2]=o=>this.prevImg()),icon:"start",class:"rotate-180 q-pa-sm q-mx-sm"}),y(Jt,{square:"",color:"accent",icon:"keyboard_arrow_up",direction:"up",padding:"sm",class:"q-pa-sm q-mx-sm"},{default:F(()=>[y(be,{color:"accent",onClick:t[3]||(t[3]=o=>this.saveImage()),icon:"bookmark"}),y(be,{color:"accent",onClick:t[4]||(t[4]=o=>this.toggleSlideShow()),icon:"slideshow"})]),_:1}),y(B,{color:"accent",onClick:t[5]||(t[5]=o=>this.saveImage()),icon:"photo_album",class:"q-pa-sm q-mx-sm"}),y(B,{color:"accent",onClick:t[6]||(t[6]=o=>this.saveBookmark()),icon:"bookmark_border",class:"q-pa-sm q-mx-sm"}),y(B,{color:"accent",onClick:t[7]||(t[7]=o=>this.toggleSlideShow()),icon:"slideshow",class:"q-pa-sm q-mx-sm"}),y(B,{color:"accent",onClick:t[8]||(t[8]=o=>this.cycleFit()),icon:"fit_screen",class:"q-pa-sm q-mx-sm"}),y(B,{color:"accent",onClick:t[9]||(t[9]=o=>this.stringify()),icon:"star",class:"q-pa-sm q-mx-sm"}),y(B,{color:"accent",onClick:t[10]||(t[10]=o=>this.nextImg()),icon:"start",class:"q-pa-sm q-mx-sm"})]),_:1}),y(xe,{position:"bottom",offset:[0,100]},{default:F(()=>[y(B,{id:"step1B",round:"",color:"secondary",class:"stepB q-mx-sm readyBorder",onClick:t[11]||(t[11]=o=>this.step1()),icon:"local_library",stack:"","no-caps":"",label:"Read",padding:"sm md"}),y(B,{id:"step2B",round:"",color:"secondary",class:"stepB q-mx-sm",onClick:t[12]||(t[12]=o=>this.step2()),icon:"handyman",stack:"","no-caps":"",label:"Fix it",padding:"sm md"}),y(B,{id:"step3B",round:"",color:"secondary",class:"stepB q-mx-sm",onClick:t[13]||(t[13]=o=>this.step3()),icon:"spellcheck",stack:"","no-caps":"",label:"Check",padding:"sm md"}),y(B,{id:"step4B",round:"",color:"secondary",class:"stepB q-mx-sm",onClick:t[14]||(t[14]=o=>this.step4()),icon:"navigate_next",stack:"","no-caps":"",label:"Next",padding:"sm md"})]),_:1})],64)}var ni=Te(ei,[["render",si]]);const Ue={isCustom:!0,lang:"English",pageid:null,guideWords:"",imgIdx:0,imgs:[{url:"https://readingedgeca.s3.us-west-1.amazonaws.com/static/pub/img/readingedge_cover.png",cap:"Welcome to Reading Edge"},{url:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Cataratas.jpg",cap:"Iguazu Falls, Brazil"},{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Douglas_DC-3%2C_SE-CFP.jpg/1024px-Douglas_DC-3%2C_SE-CFP.jpg",cap:"Doublas DC-3"},{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Rainforest_-_Ituri_%2820874628148%29.jpg/1920px-Rainforest_-_Ituri_%2820874628148%29.jpg",cap:"Ituri Forest, Congo Basin"}],imgFit:"cover",pctReplace:15,pageText:"Welcome to Reading Edge! Read this paragraph carefully, then proceed to Step 2 where you will be asked to reconstruct this same paragraph in order to earn points. The following pages will provide an overview of how everything works.  "},li={isCustom:!0,lang:"English",pageid:null,guideWords:"",imgIdx:0,imgs:[{url:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Cataratas.jpg",cap:"Iguazu Falls, Brazil"},{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Rainforest_-_Ituri_%2820874628148%29.jpg/1920px-Rainforest_-_Ituri_%2820874628148%29.jpg",cap:"Ituri Forest, Congo Basin"},{url:"https://readingedgeca.s3.us-west-1.amazonaws.com/static/pub/img/readingedge_cover.png",cap:"Welcome to Reading Edge"},{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Douglas_DC-3%2C_SE-CFP.jpg/1024px-Douglas_DC-3%2C_SE-CFP.jpg",cap:"Doublas DC-3"}],imgFit:"cover",pctReplace:15,pageText:"By default Reading Edge gets content from Wikipedia. Each page can be completely random, semi-random (based on guidewords), a specific Wikipedia page, or your own custom composition of text and images. The only caveat with images is that they must have a valid url on the internet.  Reading Edge does not store images, just links to the target content. The following slides will continue indefinitely guided by the current guideWords, which you can modify from the control on the right sidebar (TBD).  "},ri={isCustom:!1,lang:"English",pageid:null,guideWords:"commercial airliner, boeing airliner, airline",imgIdx:0,imgs:[],imgFit:"cover",pctReplace:15,pageText:""},ui={courseid:"---",title:"Demo Assignment",lang:"English",goal:100,points:0,pgIdx:0,pages:[Ue,li,ri]},ci=$e({name:"GuestPage",components:{StepperComponent:ni},setup(e){const t=ke();return{props:e,reStore:t,demoPage:m(Ue),demoAssignment:m(ui)}}});function di(e,t,i,a,r,u){const o=ht("StepperComponent");return Pe(),ft(tt,{id:"QPage",class:"row justify-center"},{default:F(()=>[y(o,{"initial-img-src":this.imgSrc,"initial-img-fit":this.imgFit,"initial-page-obj":this.demoPage,"assignment-obj":this.demoAssignment},null,8,["initial-img-src","initial-img-fit","initial-page-obj","assignment-obj"])]),_:1})}var xi=Te(ci,[["render",di]]);export{xi as default};
