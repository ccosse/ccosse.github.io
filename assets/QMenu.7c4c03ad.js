import{n as E,q as ye,s as W,j as lt,k as z,ak as nt,v as k,g as h,Y as it,aa as rt,al as at,am as xe,y as Fe,Z as ut,$ as st,x as dt,h as p,an as K,V as ke,S as ct,i as Q,T as Ce,af as Me,ae as ft,ao as le,ap as me,u as he,e as qe,aq as vt,ag as mt}from"./index.4cb229f2.js";import{u as we,a as Se}from"./use-dark.99e1a271.js";import{f as Ve,r as ht,p as Te,g as Le,h as We,i as ze,j as De,k as gt,l as pt,m as Be,n as bt,o as yt}from"./ClosePopup.8642f4d8.js";import{u as je,a as Ie,b as Ke,c as Qe}from"./use-prevent-scroll.66b4ba05.js";import{c as xt,g as Ue}from"./scroll.fa5583fb.js";import{c as ge}from"./touch.0da06364.js";function Ct({validate:e,resetValidation:t,requiresQForm:l}){const o=lt(nt,!1);if(o!==!1){const{props:i,proxy:u}=z();Object.assign(u,{validate:e,resetValidation:t}),E(()=>i.disable,n=>{n===!0?(typeof t=="function"&&t(),o.unbindComponent(u)):o.bindComponent(u)}),ye(()=>{i.disable!==!0&&o.bindComponent(u)}),W(()=>{i.disable!==!0&&o.unbindComponent(u)})}else l===!0&&console.error("Parent QForm not found on useFormChild()!")}const Ee=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,_e=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,Ae=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,ee=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,te=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ce={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>Ee.test(e),hexaColor:e=>_e.test(e),hexOrHexaColor:e=>Ae.test(e),rgbColor:e=>ee.test(e),rgbaColor:e=>te.test(e),rgbOrRgbaColor:e=>ee.test(e)||te.test(e),hexOrRgbColor:e=>Ee.test(e)||ee.test(e),hexaOrRgbaColor:e=>_e.test(e)||te.test(e),anyColor:e=>Ae.test(e)||ee.test(e)||te.test(e)},qt=[!0,!1,"ondemand"],wt={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>qt.includes(e)}};function St(e,t){const{props:l,proxy:o}=z(),i=k(!1),u=k(null),n=k(null);Ct({validate:b,resetValidation:a});let s=0,d;const c=h(()=>l.rules!==void 0&&l.rules!==null&&l.rules.length>0),f=h(()=>l.disable!==!0&&c.value===!0),q=h(()=>l.error===!0||i.value===!0),T=h(()=>typeof l.errorMessage=="string"&&l.errorMessage.length>0?l.errorMessage:u.value);E(()=>l.modelValue,()=>{A()}),E(()=>l.reactiveRules,B=>{B===!0?d===void 0&&(d=E(()=>l.rules,()=>{A(!0)})):d!==void 0&&(d(),d=void 0)},{immediate:!0}),E(e,B=>{B===!0?n.value===null&&(n.value=!1):n.value===!1&&(n.value=!0,f.value===!0&&l.lazyRules!=="ondemand"&&t.value===!1&&H())});function a(){s++,t.value=!1,n.value=null,i.value=!1,u.value=null,H.cancel()}function b(B=l.modelValue){if(f.value!==!0)return!0;const R=++s,D=t.value!==!0?()=>{n.value=!0}:()=>{},_=(y,g)=>{y===!0&&D(),i.value=y,u.value=g||null,t.value=!1},C=[];for(let y=0;y<l.rules.length;y++){const g=l.rules[y];let w;if(typeof g=="function"?w=g(B,ce):typeof g=="string"&&ce[g]!==void 0&&(w=ce[g](B)),w===!1||typeof w=="string")return _(!0,w),!1;w!==!0&&w!==void 0&&C.push(w)}return C.length===0?(_(!1),!0):(t.value=!0,Promise.all(C).then(y=>{if(y===void 0||Array.isArray(y)===!1||y.length===0)return R===s&&_(!1),!0;const g=y.find(w=>w===!1||typeof w=="string");return R===s&&_(g!==void 0,g),g===void 0},y=>(R===s&&(console.error(y),_(!0)),!1)))}function A(B){f.value===!0&&l.lazyRules!=="ondemand"&&(n.value===!0||l.lazyRules!==!0&&B!==!0)&&H()}const H=it(b,0);return W(()=>{d!==void 0&&d(),H.cancel()}),Object.assign(o,{resetValidation:a,validate:b}),rt(o,"hasError",()=>q.value),{isDirtyModel:n,hasRules:c,hasError:q,errorMessage:T,validate:b,resetValidation:a}}const Re=/^on[A-Z]/;function kt(e,t){const l={listeners:k({}),attributes:k({})};function o(){const i={},u={};for(const n in e)n!=="class"&&n!=="style"&&Re.test(n)===!1&&(i[n]=e[n]);for(const n in t.props)Re.test(n)===!0&&(u[n]=t.props[n]);l.attributes.value=i,l.listeners.value=u}return at(o),o(),l}let fe,oe=0;const S=new Array(256);for(let e=0;e<256;e++)S[e]=(e+256).toString(16).substring(1);const Tt=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const l=new Uint8Array(t);return e.getRandomValues(l),l}}return t=>{const l=[];for(let o=t;o>0;o--)l.push(Math.floor(Math.random()*256));return l}})(),He=4096;function Bt(){(fe===void 0||oe+16>He)&&(oe=0,fe=Tt(He));const e=Array.prototype.slice.call(fe,oe,oe+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,S[e[0]]+S[e[1]]+S[e[2]]+S[e[3]]+"-"+S[e[4]]+S[e[5]]+"-"+S[e[6]]+S[e[7]]+"-"+S[e[8]]+S[e[9]]+"-"+S[e[10]]+S[e[11]]+S[e[12]]+S[e[13]]+S[e[14]]+S[e[15]]}function pe(e){return e===void 0?`f_${Bt()}`:e}function Et(e){return e!=null&&(""+e).length>0}const Dt={...we,...wt,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},jt=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function It(){const{props:e,attrs:t,proxy:l,vnode:o}=z();return{isDark:Se(e,l.$q),editable:h(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:k(!1),focused:k(!1),hasPopupOpen:!1,splitAttrs:kt(t,o),targetUid:k(pe(e.for)),rootRef:k(null),targetRef:k(null),controlRef:k(null)}}function Kt(e){const{props:t,emit:l,slots:o,attrs:i,proxy:u}=z(),{$q:n}=u;let s=null;e.hasValue===void 0&&(e.hasValue=h(()=>Et(t.modelValue))),e.emitValue===void 0&&(e.emitValue=r=>{l("update:modelValue",r)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:$,onFocusout:M}),Object.assign(e,{clearValue:V,onControlFocusin:$,onControlFocusout:M,focus:g}),e.computedCounter===void 0&&(e.computedCounter=h(()=>{if(t.counter!==!1){const r=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,m=t.maxlength!==void 0?t.maxlength:t.maxValues;return r+(m!==void 0?" / "+m:"")}}));const{isDirtyModel:d,hasRules:c,hasError:f,errorMessage:q,resetValidation:T}=St(e.focused,e.innerLoading),a=e.floatingLabel!==void 0?h(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):h(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),b=h(()=>t.bottomSlots===!0||t.hint!==void 0||c.value===!0||t.counter===!0||t.error!==null),A=h(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),H=h(()=>`q-field row no-wrap items-start q-field--${A.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(a.value===!0?" q-field--float":"")+(R.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(f.value===!0?" q-field--error":"")+(f.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&b.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),B=h(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(f.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),R=h(()=>t.labelSlot===!0||t.label!==void 0),D=h(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&f.value!==!0?` text-${t.labelColor}`:"")),_=h(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:a.value,modelValue:t.modelValue,emitValue:e.emitValue})),C=h(()=>{const r={for:e.targetUid.value};return t.disable===!0?r["aria-disabled"]="true":t.readonly===!0&&(r["aria-readonly"]="true"),r});E(()=>t.for,r=>{e.targetUid.value=pe(r)});function y(){const r=document.activeElement;let m=e.targetRef!==void 0&&e.targetRef.value;m&&(r===null||r.id!==e.targetUid.value)&&(m.hasAttribute("tabindex")===!0||(m=m.querySelector("[tabindex]")),m&&m!==r&&m.focus({preventScroll:!0}))}function g(){Ve(y)}function w(){ht(y);const r=document.activeElement;r!==null&&e.rootRef.value.contains(r)&&r.blur()}function $(r){s!==null&&(clearTimeout(s),s=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,l("focus",r))}function M(r,m){s!==null&&clearTimeout(s),s=setTimeout(()=>{s=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,l("blur",r)),m!==void 0&&m())})}function V(r){xe(r),n.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),l("update:modelValue",null),l("clear",t.modelValue),Fe(()=>{T(),n.platform.is.mobile!==!0&&(d.value=!1)})}function Y(){const r=[];return o.prepend!==void 0&&r.push(p("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:K},o.prepend())),r.push(p("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},j())),f.value===!0&&t.noErrorIcon===!1&&r.push(F("error",[p(ke,{name:n.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?r.push(F("inner-loading-append",o.loading!==void 0?o.loading():[p(ct,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&r.push(F("inner-clearable-append",[p(ke,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||n.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:V})])),o.append!==void 0&&r.push(p("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:K},o.append())),e.getInnerAppend!==void 0&&r.push(F("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&r.push(e.getControlChild()),r}function j(){const r=[];return t.prefix!==void 0&&t.prefix!==null&&r.push(p("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&r.push(e.getShadowControl()),e.getControl!==void 0?r.push(e.getControl()):o.rawControl!==void 0?r.push(o.rawControl()):o.control!==void 0&&r.push(p("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},o.control(_.value))),R.value===!0&&r.push(p("div",{class:D.value},Q(o.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&r.push(p("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),r.concat(Q(o.default))}function N(){let r,m;f.value===!0?q.value!==null?(r=[p("div",{role:"alert"},q.value)],m=`q--slot-error-${q.value}`):(r=Q(o.error),m="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(r=[p("div",t.hint)],m=`q--slot-hint-${t.hint}`):(r=Q(o.hint),m="q--slot-hint"));const L=t.counter===!0||o.counter!==void 0;if(t.hideBottomSpace===!0&&L===!1&&r===void 0)return;const I=p("div",{key:m,class:"q-field__messages col"},r);return p("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:K},[t.hideBottomSpace===!0?I:p(Ce,{name:"q-transition--field-message"},()=>I),L===!0?p("div",{class:"q-field__counter"},o.counter!==void 0?o.counter():e.computedCounter.value):null])}function F(r,m){return m===null?null:p("div",{key:r,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},m)}let P=!1;return ut(()=>{P=!0}),st(()=>{P===!0&&t.autofocus===!0&&u.focus()}),ye(()=>{dt.value===!0&&t.for===void 0&&(e.targetUid.value=pe()),t.autofocus===!0&&u.focus()}),W(()=>{s!==null&&clearTimeout(s)}),Object.assign(u,{focus:g,blur:w}),function(){const m=e.getControl===void 0&&o.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...C.value}:C.value;return p("label",{ref:e.rootRef,class:[H.value,i.class],style:i.style,...m},[o.before!==void 0?p("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:K},o.before()):null,p("div",{class:"q-field__inner relative-position col self-stretch"},[p("div",{ref:e.controlRef,class:B.value,tabindex:-1,...e.controlEvents},Y()),b.value===!0?N():null]),o.after!==void 0?p("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:K},o.after()):null])}}const _t=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,At=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Rt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Ht=/[a-z0-9_ -]$/i;function Qt(e){return function(l){if(l.type==="compositionend"||l.type==="change"){if(l.target.qComposing!==!0)return;l.target.qComposing=!1,e(l)}else l.type==="compositionupdate"&&l.target.qComposing!==!0&&typeof l.data=="string"&&(Me.is.firefox===!0?Ht.test(l.data)===!1:_t.test(l.data)===!0||At.test(l.data)===!0||Rt.test(l.data)===!0)===!0&&(l.target.qComposing=!0)}}const Ne={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Ze({showing:e,avoidEmit:t,configureAnchorEl:l}){const{props:o,proxy:i,emit:u}=z(),n=k(null);let s=null;function d(a){return n.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const c={};l===void 0&&(Object.assign(c,{hide(a){i.hide(a)},toggle(a){i.toggle(a),a.qAnchorHandled=!0},toggleKey(a){ft(a,13)===!0&&c.toggle(a)},contextClick(a){i.hide(a),K(a),Fe(()=>{i.show(a),a.qAnchorHandled=!0})},prevent:K,mobileTouch(a){if(c.mobileCleanup(a),d(a)!==!0)return;i.hide(a),n.value.classList.add("non-selectable");const b=a.target;le(c,"anchor",[[b,"touchmove","mobileCleanup","passive"],[b,"touchend","mobileCleanup","passive"],[b,"touchcancel","mobileCleanup","passive"],[n.value,"contextmenu","prevent","notPassive"]]),s=setTimeout(()=>{s=null,i.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){n.value.classList.remove("non-selectable"),s!==null&&(clearTimeout(s),s=null),e.value===!0&&a!==void 0&&ge()}}),l=function(a=o.contextMenu){if(o.noParentEvent===!0||n.value===null)return;let b;a===!0?i.$q.platform.is.mobile===!0?b=[[n.value,"touchstart","mobileTouch","passive"]]:b=[[n.value,"mousedown","hide","passive"],[n.value,"contextmenu","contextClick","notPassive"]]:b=[[n.value,"click","toggle","passive"],[n.value,"keyup","toggleKey","passive"]],le(c,"anchor",b)});function f(){me(c,"anchor")}function q(a){for(n.value=a;n.value.classList.contains("q-anchor--skip");)n.value=n.value.parentNode;l()}function T(){if(o.target===!1||o.target===""||i.$el.parentNode===null)n.value=null;else if(o.target===!0)q(i.$el.parentNode);else{let a=o.target;if(typeof o.target=="string")try{a=document.querySelector(o.target)}catch{a=void 0}a!=null?(n.value=a.$el||a,l()):(n.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return E(()=>o.contextMenu,a=>{n.value!==null&&(f(),l(a))}),E(()=>o.target,()=>{n.value!==null&&f(),T()}),E(()=>o.noParentEvent,a=>{n.value!==null&&(a===!0?f():l())}),ye(()=>{T(),t!==!0&&o.modelValue===!0&&n.value===null&&u("update:modelValue",!1)}),W(()=>{s!==null&&clearTimeout(s),f()}),{anchorEl:n,canShow:d,anchorEvents:c}}function Ye(e,t){const l=k(null);let o;function i(s,d){const c=`${d!==void 0?"add":"remove"}EventListener`,f=d!==void 0?d:o;s!==window&&s[c]("scroll",f,he.passive),window[c]("scroll",f,he.passive),o=d}function u(){l.value!==null&&(i(l.value),l.value=null)}const n=E(()=>e.noParentEvent,()=>{l.value!==null&&(u(),t())});return W(n),{localScrollTarget:l,unconfigureScrollTarget:u,changeScrollEvent:i}}const{notPassiveCapture:ne}=he,U=[];function ie(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let l=Te.length-1;for(;l>=0;){const o=Te[l].$;if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;l--}for(let o=U.length-1;o>=0;o--){const i=U[o];if((i.anchorEl.value===null||i.anchorEl.value.contains(t)===!1)&&(t===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(t)===!1))e.qClickOutside=!0,i.onClickOutside(e);else return}}function Xe(e){U.push(e),U.length===1&&(document.addEventListener("mousedown",ie,ne),document.addEventListener("touchstart",ie,ne))}function re(e){const t=U.findIndex(l=>l===e);t>-1&&(U.splice(t,1),U.length===0&&(document.removeEventListener("mousedown",ie,ne),document.removeEventListener("touchstart",ie,ne)))}let Pe,Oe;function ae(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Je(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const be={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{be[`${e}#ltr`]=e,be[`${e}#rtl`]=e});function ue(e,t){const l=e.split(" ");return{vertical:l[0],horizontal:be[`${l[1]}#${t===!0?"rtl":"ltr"}`]}}function Pt(e,t){let{top:l,left:o,right:i,bottom:u,width:n,height:s}=e.getBoundingClientRect();return t!==void 0&&(l-=t[1],o-=t[0],u+=t[1],i+=t[0],n+=t[0],s+=t[1]),{top:l,bottom:u,height:s,left:o,right:i,width:n,middle:o+(i-o)/2,center:l+(u-l)/2}}function Ot(e,t,l){let{top:o,left:i}=e.getBoundingClientRect();return o+=t.top,i+=t.left,l!==void 0&&(o+=l[1],i+=l[0]),{top:o,bottom:o+1,height:1,left:i,right:i+1,width:1,middle:i,center:o}}function $t(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function $e(e,t,l){return{top:e[l.anchorOrigin.vertical]-t[l.selfOrigin.vertical],left:e[l.anchorOrigin.horizontal]-t[l.selfOrigin.horizontal]}}function Ge(e){if(Me.is.ios===!0&&window.visualViewport!==void 0){const s=document.body.style,{offsetLeft:d,offsetTop:c}=window.visualViewport;d!==Pe&&(s.setProperty("--q-pe-left",d+"px"),Pe=d),c!==Oe&&(s.setProperty("--q-pe-top",c+"px"),Oe=c)}const{scrollLeft:t,scrollTop:l}=e.el,o=e.absoluteOffset===void 0?Pt(e.anchorEl,e.cover===!0?[0,0]:e.offset):Ot(e.anchorEl,e.absoluteOffset,e.offset);let i={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(i.minWidth=o.width+"px",e.cover===!0&&(i.minHeight=o.height+"px")),Object.assign(e.el.style,i);const u=$t(e.el);let n=$e(o,u,e);if(e.absoluteOffset===void 0||e.offset===void 0)ve(n,o,u,e.anchorOrigin,e.selfOrigin);else{const{top:s,left:d}=n;ve(n,o,u,e.anchorOrigin,e.selfOrigin);let c=!1;if(n.top!==s){c=!0;const f=2*e.offset[1];o.center=o.top-=f,o.bottom-=f+2}if(n.left!==d){c=!0;const f=2*e.offset[0];o.middle=o.left-=f,o.right-=f+2}c===!0&&(n=$e(o,u,e),ve(n,o,u,e.anchorOrigin,e.selfOrigin))}i={top:n.top+"px",left:n.left+"px"},n.maxHeight!==void 0&&(i.maxHeight=n.maxHeight+"px",o.height>n.maxHeight&&(i.minHeight=i.maxHeight)),n.maxWidth!==void 0&&(i.maxWidth=n.maxWidth+"px",o.width>n.maxWidth&&(i.minWidth=i.maxWidth)),Object.assign(e.el.style,i),e.el.scrollTop!==l&&(e.el.scrollTop=l),e.el.scrollLeft!==t&&(e.el.scrollLeft=t)}function ve(e,t,l,o,i){const u=l.bottom,n=l.right,s=xt(),d=window.innerHeight-s,c=document.body.clientWidth;if(e.top<0||e.top+u>d)if(i.vertical==="center")e.top=t[o.vertical]>d/2?Math.max(0,d-u):0,e.maxHeight=Math.min(u,d);else if(t[o.vertical]>d/2){const f=Math.min(d,o.vertical==="center"?t.center:o.vertical===i.vertical?t.bottom:t.top);e.maxHeight=Math.min(u,f),e.top=Math.max(0,f-u)}else e.top=Math.max(0,o.vertical==="center"?t.center:o.vertical===i.vertical?t.top:t.bottom),e.maxHeight=Math.min(u,d-e.top);if(e.left<0||e.left+n>c)if(e.maxWidth=Math.min(n,c),i.horizontal==="middle")e.left=t[o.horizontal]>c/2?Math.max(0,c-n):0;else if(t[o.horizontal]>c/2){const f=Math.min(c,o.horizontal==="middle"?t.middle:o.horizontal===i.horizontal?t.right:t.left);e.maxWidth=Math.min(n,f),e.left=Math.max(0,f-e.maxWidth)}else e.left=Math.max(0,o.horizontal==="middle"?t.middle:o.horizontal===i.horizontal?t.left:t.right),e.maxWidth=Math.min(n,c-e.left)}var Ut=qe({name:"QTooltip",inheritAttrs:!1,props:{...Ne,...je,...Le,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:ae},self:{type:String,default:"top middle",validator:ae},offset:{type:Array,default:()=>[14,14],validator:Je},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...Ie],setup(e,{slots:t,emit:l,attrs:o}){let i,u;const n=z(),{proxy:{$q:s}}=n,d=k(null),c=k(!1),f=h(()=>ue(e.anchor,s.lang.rtl)),q=h(()=>ue(e.self,s.lang.rtl)),T=h(()=>e.persistent!==!0),{registerTick:a,removeTick:b}=We(),{registerTimeout:A}=Ke(),{transitionProps:H,transitionStyle:B}=ze(e),{localScrollTarget:R,changeScrollEvent:D,unconfigureScrollTarget:_}=Ye(e,I),{anchorEl:C,canShow:y,anchorEvents:g}=Ze({showing:c,configureAnchorEl:L}),{show:w,hide:$}=Qe({showing:c,canShow:y,handleShow:j,handleHide:N,hideOnRouteChange:T,processOnMount:!0});Object.assign(g,{delayShow:r,delayHide:m});const{showPortal:M,hidePortal:V,renderPortal:Y}=De(n,d,G,"tooltip");if(s.platform.is.mobile===!0){const x={anchorEl:C,innerRef:d,onClickOutside(O){return $(O),O.target.classList.contains("q-dialog__backdrop")&&xe(O),!0}},X=h(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);E(X,O=>{(O===!0?Xe:re)(x)}),W(()=>{re(x)})}function j(x){M(),a(()=>{u=new MutationObserver(()=>P()),u.observe(d.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),P(),I()}),i===void 0&&(i=E(()=>s.screen.width+"|"+s.screen.height+"|"+e.self+"|"+e.anchor+"|"+s.lang.rtl,P)),A(()=>{M(!0),l("show",x)},e.transitionDuration)}function N(x){b(),V(),F(),A(()=>{V(!0),l("hide",x)},e.transitionDuration)}function F(){u!==void 0&&(u.disconnect(),u=void 0),i!==void 0&&(i(),i=void 0),_(),me(g,"tooltipTemp")}function P(){const x=d.value;C.value===null||!x||Ge({el:x,offset:e.offset,anchorEl:C.value,anchorOrigin:f.value,selfOrigin:q.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function r(x){if(s.platform.is.mobile===!0){ge(),document.body.classList.add("non-selectable");const X=C.value,O=["touchmove","touchcancel","touchend","click"].map(Z=>[X,Z,"delayHide","passiveCapture"]);le(g,"tooltipTemp",O)}A(()=>{w(x)},e.delay)}function m(x){s.platform.is.mobile===!0&&(me(g,"tooltipTemp"),ge(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),A(()=>{$(x)},e.hideDelay)}function L(){if(e.noParentEvent===!0||C.value===null)return;const x=s.platform.is.mobile===!0?[[C.value,"touchstart","delayShow","passive"]]:[[C.value,"mouseenter","delayShow","passive"],[C.value,"mouseleave","delayHide","passive"]];le(g,"anchor",x)}function I(){if(C.value!==null||e.scrollTarget!==void 0){R.value=Ue(C.value,e.scrollTarget);const x=e.noParentEvent===!0?P:$;D(R.value,x)}}function se(){return c.value===!0?p("div",{...o,ref:d,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",o.class],style:[o.style,B.value],role:"tooltip"},Q(t.default)):null}function G(){return p(Ce,H.value,se)}return W(F),Object.assign(n.proxy,{updatePosition:P}),Y}}),Nt=qe({name:"QBar",props:{...we,dense:Boolean},setup(e,{slots:t}){const{proxy:{$q:l}}=z(),o=Se(e,l),i=h(()=>`q-bar row no-wrap items-center q-bar--${e.dense===!0?"dense":"standard"}  q-bar--${o.value===!0?"dark":"light"}`);return()=>p("div",{class:i.value,role:"toolbar"},Q(t.default))}}),Zt=qe({name:"QMenu",inheritAttrs:!1,props:{...Ne,...je,...we,...Le,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:ae},self:{type:String,validator:ae},offset:{type:Array,validator:Je},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Ie,"click","escapeKey"],setup(e,{slots:t,emit:l,attrs:o}){let i=null,u,n,s;const d=z(),{proxy:c}=d,{$q:f}=c,q=k(null),T=k(!1),a=h(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),b=Se(e,f),{registerTick:A,removeTick:H}=We(),{registerTimeout:B}=Ke(),{transitionProps:R,transitionStyle:D}=ze(e),{localScrollTarget:_,changeScrollEvent:C,unconfigureScrollTarget:y}=Ye(e,x),{anchorEl:g,canShow:w}=Ze({showing:T}),{hide:$}=Qe({showing:T,canShow:w,handleShow:I,handleHide:se,hideOnRouteChange:a,processOnMount:!0}),{showPortal:M,hidePortal:V,renderPortal:Y}=De(d,q,et,"menu"),j={anchorEl:g,innerRef:q,onClickOutside(v){if(e.persistent!==!0&&T.value===!0)return $(v),(v.type==="touchstart"||v.target.classList.contains("q-dialog__backdrop"))&&xe(v),!0}},N=h(()=>ue(e.anchor||(e.cover===!0?"center middle":"bottom start"),f.lang.rtl)),F=h(()=>e.cover===!0?N.value:ue(e.self||"top start",f.lang.rtl)),P=h(()=>(e.square===!0?" q-menu--square":"")+(b.value===!0?" q-menu--dark q-dark":"")),r=h(()=>e.autoClose===!0?{onClick:X}:{}),m=h(()=>T.value===!0&&e.persistent!==!0);E(m,v=>{v===!0?(yt(Z),Xe(j)):(Be(Z),re(j))});function L(){Ve(()=>{let v=q.value;v&&v.contains(document.activeElement)!==!0&&(v=v.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||v.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||v.querySelector("[autofocus], [data-autofocus]")||v,v.focus({preventScroll:!0}))})}function I(v){if(i=e.noRefocus===!1?document.activeElement:null,gt(O),M(),x(),u=void 0,v!==void 0&&(e.touchPosition||e.contextMenu)){const de=vt(v);if(de.left!==void 0){const{top:tt,left:ot}=g.value.getBoundingClientRect();u={left:de.left-ot,top:de.top-tt}}}n===void 0&&(n=E(()=>f.screen.width+"|"+f.screen.height+"|"+e.self+"|"+e.anchor+"|"+f.lang.rtl,J)),e.noFocus!==!0&&document.activeElement.blur(),A(()=>{J(),e.noFocus!==!0&&L()}),B(()=>{f.platform.is.ios===!0&&(s=e.autoClose,q.value.click()),J(),M(!0),l("show",v)},e.transitionDuration)}function se(v){H(),V(),G(!0),i!==null&&(v===void 0||v.qClickOutside!==!0)&&(((v&&v.type.indexOf("key")===0?i.closest('[tabindex]:not([tabindex^="-"])'):void 0)||i).focus(),i=null),B(()=>{V(!0),l("hide",v)},e.transitionDuration)}function G(v){u=void 0,n!==void 0&&(n(),n=void 0),(v===!0||T.value===!0)&&(pt(O),y(),re(j),Be(Z)),v!==!0&&(i=null)}function x(){(g.value!==null||e.scrollTarget!==void 0)&&(_.value=Ue(g.value,e.scrollTarget),C(_.value,J))}function X(v){s!==!0?(bt(c,v),l("click",v)):s=!1}function O(v){m.value===!0&&e.noFocus!==!0&&mt(q.value,v.target)!==!0&&L()}function Z(v){l("escapeKey"),$(v)}function J(){const v=q.value;v===null||g.value===null||Ge({el:v,offset:e.offset,anchorEl:g.value,anchorOrigin:N.value,selfOrigin:F.value,absoluteOffset:u,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function et(){return p(Ce,R.value,()=>T.value===!0?p("div",{role:"menu",...o,ref:q,tabindex:-1,class:["q-menu q-position-engine scroll"+P.value,o.class],style:[o.style,D.value],...r.value},Q(t.default)):null)}return W(G),Object.assign(c,{focus:L,updatePosition:J}),Y}});export{Ut as Q,Nt as a,jt as b,It as c,Kt as d,Qt as e,Et as f,Zt as g,Bt as h,Dt as u};
