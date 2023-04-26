import{w as F,u as he,o as N,f as Re,g as O,as as ke,r as C,a as s,ac as Ae,a3 as Fe,at as Ve,Y as be,x as Pe,a0 as Ee,ad as Te,i as Oe,d as i,T as z,a9 as ae,Z as $e,z as T,X as ye,W as Me,c as Ce,au as De,am as Ie}from"./index.427dcfe3.js";import{u as te,a as le}from"./use-dark.549bbe6b.js";import{d as qe,r as He,u as Ue,a as ze,b as Ke,c as Le,f as Qe}from"./use-tick.15ad77d9.js";import{u as je,v as ie,a as Ze,b as We,c as Ne,r as se,s as Je,p as de,d as Xe}from"./QTooltip.54cee36c.js";import{u as Ye,a as Ge,b as eo,c as oo}from"./use-timeout.645f012e.js";import{g as to}from"./scroll.d1598ae7.js";import{f as lo,r as no,g as ce,h as ro}from"./ClosePopup.ef78bb5f.js";function uo({validate:e,resetValidation:o,requiresQForm:t}){const n=Re(ke,!1);if(n!==!1){const{props:d,proxy:c}=O();Object.assign(c,{validate:e,resetValidation:o}),F(()=>d.disable,u=>{u===!0?(typeof o=="function"&&o(),n.unbindComponent(c)):n.bindComponent(c)}),he(()=>{d.disable!==!0&&n.bindComponent(c)}),N(()=>{d.disable!==!0&&n.unbindComponent(c)})}else t===!0&&console.error("Parent QForm not found on useFormChild()!")}const fe=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ve=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,me=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,j=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,Z=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,G={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>fe.test(e),hexaColor:e=>ve.test(e),hexOrHexaColor:e=>me.test(e),rgbColor:e=>j.test(e),rgbaColor:e=>Z.test(e),rgbOrRgbaColor:e=>j.test(e)||Z.test(e),hexOrRgbColor:e=>fe.test(e)||j.test(e),hexaOrRgbaColor:e=>ve.test(e)||Z.test(e),anyColor:e=>me.test(e)||j.test(e)||Z.test(e)},ao=[!0,!1,"ondemand"],io={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>ao.includes(e)}};function so(e,o){const{props:t,proxy:n}=O(),d=C(!1),c=C(null),u=C(null);uo({validate:B,resetValidation:w});let v=0,q;const _=s(()=>t.rules!==void 0&&t.rules!==null&&t.rules.length>0),m=s(()=>t.disable!==!0&&_.value===!0),b=s(()=>t.error===!0||d.value===!0),x=s(()=>typeof t.errorMessage=="string"&&t.errorMessage.length>0?t.errorMessage:c.value);F(()=>t.modelValue,()=>{V()}),F(()=>t.reactiveRules,y=>{y===!0?q===void 0&&(q=F(()=>t.rules,()=>{V(!0)})):q!==void 0&&(q(),q=void 0)},{immediate:!0}),F(e,y=>{y===!0?u.value===null&&(u.value=!1):u.value===!1&&(u.value=!0,m.value===!0&&t.lazyRules!=="ondemand"&&o.value===!1&&R())});function w(){v++,o.value=!1,u.value=null,d.value=!1,c.value=null,R.cancel()}function B(y=t.modelValue){if(m.value!==!0)return!0;const k=++v,$=o.value!==!0?()=>{u.value=!0}:()=>{},S=(g,f)=>{g===!0&&$(),d.value=g,c.value=f||null,o.value=!1},A=[];for(let g=0;g<t.rules.length;g++){const f=t.rules[g];let h;if(typeof f=="function"?h=f(y,G):typeof f=="string"&&G[f]!==void 0&&(h=G[f](y)),h===!1||typeof h=="string")return S(!0,h),!1;h!==!0&&h!==void 0&&A.push(h)}return A.length===0?(S(!1),!0):(o.value=!0,Promise.all(A).then(g=>{if(g===void 0||Array.isArray(g)===!1||g.length===0)return k===v&&S(!1),!0;const f=g.find(h=>h===!1||typeof h=="string");return k===v&&S(f!==void 0,f),f===void 0},g=>(k===v&&(console.error(g),S(!0)),!1)))}function V(y){m.value===!0&&t.lazyRules!=="ondemand"&&(u.value===!0||t.lazyRules!==!0&&y!==!0)&&R()}const R=Ae(B,0);return N(()=>{q!==void 0&&q(),R.cancel()}),Object.assign(n,{resetValidation:w,validate:B}),Fe(n,"hasError",()=>b.value),{isDirtyModel:u,hasRules:_,hasError:b,errorMessage:x,validate:B,resetValidation:w}}const ge=/^on[A-Z]/;function co(e,o){const t={listeners:C({}),attributes:C({})};function n(){const d={},c={};for(const u in e)u!=="class"&&u!=="style"&&ge.test(u)===!1&&(d[u]=e[u]);for(const u in o.props)ge.test(u)===!0&&(c[u]=o.props[u]);t.attributes.value=d,t.listeners.value=c}return Ve(n),n(),t}let ee,W=0;const p=new Array(256);for(let e=0;e<256;e++)p[e]=(e+256).toString(16).substring(1);const fo=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return o=>{const t=new Uint8Array(o);return e.getRandomValues(t),t}}return o=>{const t=[];for(let n=o;n>0;n--)t.push(Math.floor(Math.random()*256));return t}})(),pe=4096;function vo(){(ee===void 0||W+16>pe)&&(W=0,ee=fo(pe));const e=Array.prototype.slice.call(ee,W,W+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,p[e[0]]+p[e[1]]+p[e[2]]+p[e[3]]+"-"+p[e[4]]+p[e[5]]+"-"+p[e[6]]+p[e[7]]+"-"+p[e[8]]+p[e[9]]+"-"+p[e[10]]+p[e[11]]+p[e[12]]+p[e[13]]+p[e[14]]+p[e[15]]}function oe(e){return e===void 0?`f_${vo()}`:e}function mo(e){return e!=null&&(""+e).length>0}const wo={...te,...io,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Ro=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function ko(){const{props:e,attrs:o,proxy:t,vnode:n}=O();return{isDark:le(e,t.$q),editable:s(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:C(!1),focused:C(!1),hasPopupOpen:!1,splitAttrs:co(o,n),targetUid:C(oe(e.for)),rootRef:C(null),targetRef:C(null),controlRef:C(null)}}function Ao(e){const{props:o,emit:t,slots:n,attrs:d,proxy:c}=O(),{$q:u}=c;let v=null;e.hasValue===void 0&&(e.hasValue=s(()=>mo(o.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{t("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:M,onFocusout:D}),Object.assign(e,{clearValue:I,onControlFocusin:M,onControlFocusout:D,focus:f}),e.computedCounter===void 0&&(e.computedCounter=s(()=>{if(o.counter!==!1){const l=typeof o.modelValue=="string"||typeof o.modelValue=="number"?(""+o.modelValue).length:Array.isArray(o.modelValue)===!0?o.modelValue.length:0,a=o.maxlength!==void 0?o.maxlength:o.maxValues;return l+(a!==void 0?" / "+a:"")}}));const{isDirtyModel:q,hasRules:_,hasError:m,errorMessage:b,resetValidation:x}=so(e.focused,e.innerLoading),w=e.floatingLabel!==void 0?s(()=>o.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):s(()=>o.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),B=s(()=>o.bottomSlots===!0||o.hint!==void 0||_.value===!0||o.counter===!0||o.error!==null),V=s(()=>o.filled===!0?"filled":o.outlined===!0?"outlined":o.borderless===!0?"borderless":o.standout?"standout":"standard"),R=s(()=>`q-field row no-wrap items-start q-field--${V.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(o.rounded===!0?" q-field--rounded":"")+(o.square===!0?" q-field--square":"")+(w.value===!0?" q-field--float":"")+(k.value===!0?" q-field--labeled":"")+(o.dense===!0?" q-field--dense":"")+(o.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(m.value===!0?" q-field--error":"")+(m.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(o.hideBottomSpace!==!0&&B.value===!0?" q-field--with-bottom":"")+(o.disable===!0?" q-field--disabled":o.readonly===!0?" q-field--readonly":"")),y=s(()=>"q-field__control relative-position row no-wrap"+(o.bgColor!==void 0?` bg-${o.bgColor}`:"")+(m.value===!0?" text-negative":typeof o.standout=="string"&&o.standout.length>0&&e.focused.value===!0?` ${o.standout}`:o.color!==void 0?` text-${o.color}`:"")),k=s(()=>o.labelSlot===!0||o.label!==void 0),$=s(()=>"q-field__label no-pointer-events absolute ellipsis"+(o.labelColor!==void 0&&m.value!==!0?` text-${o.labelColor}`:"")),S=s(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:w.value,modelValue:o.modelValue,emitValue:e.emitValue})),A=s(()=>{const l={for:e.targetUid.value};return o.disable===!0?l["aria-disabled"]="true":o.readonly===!0&&(l["aria-readonly"]="true"),l});F(()=>o.for,l=>{e.targetUid.value=oe(l)});function g(){const l=document.activeElement;let a=e.targetRef!==void 0&&e.targetRef.value;a&&(l===null||l.id!==e.targetUid.value)&&(a.hasAttribute("tabindex")===!0||(a=a.querySelector("[tabindex]")),a&&a!==l&&a.focus({preventScroll:!0}))}function f(){qe(g)}function h(){He(g);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function M(l){v!==null&&(clearTimeout(v),v=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,t("focus",l))}function D(l,a){v!==null&&clearTimeout(v),v=setTimeout(()=>{v=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,t("blur",l)),a!==void 0&&a())})}function I(l){be(l),u.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),o.type==="file"&&(e.inputRef.value.value=null),t("update:modelValue",null),t("clear",o.modelValue),Pe(()=>{x(),u.platform.is.mobile!==!0&&(q.value=!1)})}function J(){const l=[];return n.prepend!==void 0&&l.push(i("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:z},n.prepend())),l.push(i("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},H())),m.value===!0&&o.noErrorIcon===!1&&l.push(P("error",[i(ae,{name:u.iconSet.field.error,color:"negative"})])),o.loading===!0||e.innerLoading.value===!0?l.push(P("inner-loading-append",n.loading!==void 0?n.loading():[i($e,{color:o.color})])):o.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(P("inner-clearable-append",[i(ae,{class:"q-field__focusable-action",tag:"button",name:o.clearIcon||u.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:I})])),n.append!==void 0&&l.push(i("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:z},n.append())),e.getInnerAppend!==void 0&&l.push(P("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function H(){const l=[];return o.prefix!==void 0&&o.prefix!==null&&l.push(i("div",{class:"q-field__prefix no-pointer-events row items-center"},o.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):n.rawControl!==void 0?l.push(n.rawControl()):n.control!==void 0&&l.push(i("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0},n.control(S.value))),k.value===!0&&l.push(i("div",{class:$.value},T(n.label,o.label))),o.suffix!==void 0&&o.suffix!==null&&l.push(i("div",{class:"q-field__suffix no-pointer-events row items-center"},o.suffix)),l.concat(T(n.default))}function K(){let l,a;m.value===!0?b.value!==null?(l=[i("div",{role:"alert"},b.value)],a=`q--slot-error-${b.value}`):(l=T(n.error),a="q--slot-error"):(o.hideHint!==!0||e.focused.value===!0)&&(o.hint!==void 0?(l=[i("div",o.hint)],a=`q--slot-hint-${o.hint}`):(l=T(n.hint),a="q--slot-hint"));const E=o.counter===!0||n.counter!==void 0;if(o.hideBottomSpace===!0&&E===!1&&l===void 0)return;const Q=i("div",{key:a,class:"q-field__messages col"},l);return i("div",{class:"q-field__bottom row items-start q-field__bottom--"+(o.hideBottomSpace!==!0?"animated":"stale"),onClick:z},[o.hideBottomSpace===!0?Q:i(ye,{name:"q-transition--field-message"},()=>Q),E===!0?i("div",{class:"q-field__counter"},n.counter!==void 0?n.counter():e.computedCounter.value):null])}function P(l,a){return a===null?null:i("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},a)}let L=!1;return Ee(()=>{L=!0}),Te(()=>{L===!0&&o.autofocus===!0&&c.focus()}),he(()=>{Oe.value===!0&&o.for===void 0&&(e.targetUid.value=oe()),o.autofocus===!0&&c.focus()}),N(()=>{v!==null&&clearTimeout(v)}),Object.assign(c,{focus:f,blur:h}),function(){const a=e.getControl===void 0&&n.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0,...A.value}:A.value;return i("label",{ref:e.rootRef,class:[R.value,d.class],style:d.style,...a},[n.before!==void 0?i("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:z},n.before()):null,i("div",{class:"q-field__inner relative-position col self-stretch"},[i("div",{ref:e.controlRef,class:y.value,tabindex:-1,...e.controlEvents},J()),B.value===!0?K():null]),n.after!==void 0?i("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:z},n.after()):null])}}const go=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,po=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,ho=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,bo=/[a-z0-9_ -]$/i;function Fo(e){return function(t){if(t.type==="compositionend"||t.type==="change"){if(t.target.qComposing!==!0)return;t.target.qComposing=!1,e(t)}else t.type==="compositionupdate"&&t.target.qComposing!==!0&&typeof t.data=="string"&&(Me.is.firefox===!0?bo.test(t.data)===!1:go.test(t.data)===!0||po.test(t.data)===!0||ho.test(t.data)===!0)===!0&&(t.target.qComposing=!0)}}var Vo=Ce({name:"QBar",props:{...te,dense:Boolean},setup(e,{slots:o}){const{proxy:{$q:t}}=O(),n=le(e,t),d=s(()=>`q-bar row no-wrap items-center q-bar--${e.dense===!0?"dense":"standard"}  q-bar--${n.value===!0?"dark":"light"}`);return()=>i("div",{class:d.value,role:"toolbar"},T(o.default))}}),Po=Ce({name:"QMenu",inheritAttrs:!1,props:{...je,...Ye,...te,...Ue,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:ie},self:{type:String,validator:ie},offset:{type:Array,validator:Ze},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Ge,"click","escapeKey"],setup(e,{slots:o,emit:t,attrs:n}){let d=null,c,u,v;const q=O(),{proxy:_}=q,{$q:m}=_,b=C(null),x=C(!1),w=s(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),B=le(e,m),{registerTick:V,removeTick:R}=ze(),{registerTimeout:y}=eo(),{transitionProps:k,transitionStyle:$}=Ke(e),{localScrollTarget:S,changeScrollEvent:A,unconfigureScrollTarget:g}=We(e,re),{anchorEl:f,canShow:h}=Ne({showing:x}),{hide:M}=oo({showing:x,canShow:h,handleShow:Q,handleHide:xe,hideOnRouteChange:w,processOnMount:!0}),{showPortal:D,hidePortal:I,renderPortal:J}=Le(q,b,Be,"menu"),H={anchorEl:f,innerRef:b,onClickOutside(r){if(e.persistent!==!0&&x.value===!0)return M(r),(r.type==="touchstart"||r.target.classList.contains("q-dialog__backdrop"))&&be(r),!0}},K=s(()=>de(e.anchor||(e.cover===!0?"center middle":"bottom start"),m.lang.rtl)),P=s(()=>e.cover===!0?K.value:de(e.self||"top start",m.lang.rtl)),L=s(()=>(e.square===!0?" q-menu--square":"")+(B.value===!0?" q-menu--dark q-dark":"")),l=s(()=>e.autoClose===!0?{onClick:Se}:{}),a=s(()=>x.value===!0&&e.persistent!==!0);F(a,r=>{r===!0?(ro(X),Xe(H)):(ce(X),se(H))});function E(){qe(()=>{let r=b.value;r&&r.contains(document.activeElement)!==!0&&(r=r.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||r.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||r.querySelector("[autofocus], [data-autofocus]")||r,r.focus({preventScroll:!0}))})}function Q(r){if(d=e.noRefocus===!1?document.activeElement:null,lo(ue),D(),re(),c=void 0,r!==void 0&&(e.touchPosition||e.contextMenu)){const Y=De(r);if(Y.left!==void 0){const{top:_e,left:we}=f.value.getBoundingClientRect();c={left:Y.left-we,top:Y.top-_e}}}u===void 0&&(u=F(()=>m.screen.width+"|"+m.screen.height+"|"+e.self+"|"+e.anchor+"|"+m.lang.rtl,U)),e.noFocus!==!0&&document.activeElement.blur(),V(()=>{U(),e.noFocus!==!0&&E()}),y(()=>{m.platform.is.ios===!0&&(v=e.autoClose,b.value.click()),U(),D(!0),t("show",r)},e.transitionDuration)}function xe(r){R(),I(),ne(!0),d!==null&&(r===void 0||r.qClickOutside!==!0)&&(((r&&r.type.indexOf("key")===0?d.closest('[tabindex]:not([tabindex^="-"])'):void 0)||d).focus(),d=null),y(()=>{I(!0),t("hide",r)},e.transitionDuration)}function ne(r){c=void 0,u!==void 0&&(u(),u=void 0),(r===!0||x.value===!0)&&(no(ue),g(),se(H),ce(X)),r!==!0&&(d=null)}function re(){(f.value!==null||e.scrollTarget!==void 0)&&(S.value=to(f.value,e.scrollTarget),A(S.value,U))}function Se(r){v!==!0?(Qe(_,r),t("click",r)):v=!1}function ue(r){a.value===!0&&e.noFocus!==!0&&Ie(b.value,r.target)!==!0&&E()}function X(r){t("escapeKey"),M(r)}function U(){const r=b.value;r===null||f.value===null||Je({el:r,offset:e.offset,anchorEl:f.value,anchorOrigin:K.value,selfOrigin:P.value,absoluteOffset:c,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Be(){return i(ye,k.value,()=>x.value===!0?i("div",{role:"menu",...n,ref:b,tabindex:-1,class:["q-menu q-position-engine scroll"+L.value,n.class],style:[n.style,$.value],...l.value},T(o.default)):null)}return N(ne),Object.assign(_,{focus:E,updatePosition:U}),J}});export{Vo as Q,Ro as a,ko as b,Ao as c,Fo as d,Po as e,mo as f,vo as g,wo as u};
