import{w as P,y as ye,o as Z,f as we,g as V,as as Re,r as C,a as r,ac as Ae,a3 as Fe,at as Ee,Y as ae,D as Pe,a0 as Te,ad as Ve,i as Oe,d as s,T as K,a9 as se,Z as $e,u as T,X as qe,W as Me,c as J,au as Ie,av as De,S as Le,aq as He,aw as Ke,am as je}from"./index.c3bac22e.js";import{u as X,a as Y}from"./use-dark.f2d1a442.js";import{d as Ce,r as Qe,u as Ue,a as ze,b as We,c as Ne,f as Ze}from"./use-tick.9e7b294e.js";import{u as Je,v as ce,a as Xe,b as Ye,c as Ge,r as de,s as et,p as fe,d as tt}from"./QTooltip.24ab23de.js";import{u as ot,a as lt,b as nt,c as at}from"./use-timeout.5826207e.js";import{g as ut}from"./scroll.e55f51a5.js";import{f as rt,r as it,g as ve,h as st}from"./ClosePopup.3b8443bd.js";function ct({validate:e,resetValidation:t,requiresQForm:o}){const n=we(Re,!1);if(n!==!1){const{props:c,proxy:d}=V();Object.assign(d,{validate:e,resetValidation:t}),P(()=>c.disable,u=>{u===!0?(typeof t=="function"&&t(),n.unbindComponent(d)):n.bindComponent(d)}),ye(()=>{c.disable!==!0&&n.bindComponent(d)}),Z(()=>{c.disable!==!0&&n.unbindComponent(d)})}else o===!0&&console.error("Parent QForm not found on useFormChild()!")}const me=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ge=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,be=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,z=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,W=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,oe={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>me.test(e),hexaColor:e=>ge.test(e),hexOrHexaColor:e=>be.test(e),rgbColor:e=>z.test(e),rgbaColor:e=>W.test(e),rgbOrRgbaColor:e=>z.test(e)||W.test(e),hexOrRgbColor:e=>me.test(e)||z.test(e),hexaOrRgbaColor:e=>ge.test(e)||W.test(e),anyColor:e=>be.test(e)||z.test(e)||W.test(e)},dt=[!0,!1,"ondemand"],ft={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>dt.includes(e)}};function vt(e,t){const{props:o,proxy:n}=V(),c=C(!1),d=C(null),u=C(null);ct({validate:_,resetValidation:S});let m=0,x;const w=r(()=>o.rules!==void 0&&o.rules!==null&&o.rules.length>0),v=r(()=>o.disable!==!0&&w.value===!0),b=r(()=>o.error===!0||c.value===!0),B=r(()=>typeof o.errorMessage=="string"&&o.errorMessage.length>0?o.errorMessage:d.value);P(()=>o.modelValue,()=>{F()}),P(()=>o.reactiveRules,y=>{y===!0?x===void 0&&(x=P(()=>o.rules,()=>{F(!0)})):x!==void 0&&(x(),x=void 0)},{immediate:!0}),P(e,y=>{y===!0?u.value===null&&(u.value=!1):u.value===!1&&(u.value=!0,v.value===!0&&o.lazyRules!=="ondemand"&&t.value===!1&&R())});function S(){m++,t.value=!1,u.value=null,c.value=!1,d.value=null,R.cancel()}function _(y=o.modelValue){if(v.value!==!0)return!0;const A=++m,f=t.value!==!0?()=>{u.value=!0}:()=>{},k=(p,g)=>{p===!0&&f(),c.value=p,d.value=g||null,t.value=!1},E=[];for(let p=0;p<o.rules.length;p++){const g=o.rules[p];let q;if(typeof g=="function"?q=g(y,oe):typeof g=="string"&&oe[g]!==void 0&&(q=oe[g](y)),q===!1||typeof q=="string")return k(!0,q),!1;q!==!0&&q!==void 0&&E.push(q)}return E.length===0?(k(!1),!0):(t.value=!0,Promise.all(E).then(p=>{if(p===void 0||Array.isArray(p)===!1||p.length===0)return A===m&&k(!1),!0;const g=p.find(q=>q===!1||typeof q=="string");return A===m&&k(g!==void 0,g),g===void 0},p=>(A===m&&(console.error(p),k(!0)),!1)))}function F(y){v.value===!0&&o.lazyRules!=="ondemand"&&(u.value===!0||o.lazyRules!==!0&&y!==!0)&&R()}const R=Ae(_,0);return Z(()=>{x!==void 0&&x(),R.cancel()}),Object.assign(n,{resetValidation:S,validate:_}),Fe(n,"hasError",()=>b.value),{isDirtyModel:u,hasRules:w,hasError:b,errorMessage:B,validate:_,resetValidation:S}}const pe=/^on[A-Z]/;function mt(e,t){const o={listeners:C({}),attributes:C({})};function n(){const c={},d={};for(const u in e)u!=="class"&&u!=="style"&&pe.test(u)===!1&&(c[u]=e[u]);for(const u in t.props)pe.test(u)===!0&&(d[u]=t.props[u]);o.attributes.value=c,o.listeners.value=d}return Ee(n),n(),o}let le,N=0;const h=new Array(256);for(let e=0;e<256;e++)h[e]=(e+256).toString(16).substring(1);const gt=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const o=new Uint8Array(t);return e.getRandomValues(o),o}}return t=>{const o=[];for(let n=t;n>0;n--)o.push(Math.floor(Math.random()*256));return o}})(),he=4096;function bt(){(le===void 0||N+16>he)&&(N=0,le=gt(he));const e=Array.prototype.slice.call(le,N,N+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,h[e[0]]+h[e[1]]+h[e[2]]+h[e[3]]+"-"+h[e[4]]+h[e[5]]+"-"+h[e[6]]+h[e[7]]+"-"+h[e[8]]+h[e[9]]+"-"+h[e[10]]+h[e[11]]+h[e[12]]+h[e[13]]+h[e[14]]+h[e[15]]}function ne(e){return e===void 0?`f_${bt()}`:e}function pt(e){return e!=null&&(""+e).length>0}const Ft={...X,...ft,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Et=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Pt(){const{props:e,attrs:t,proxy:o,vnode:n}=V();return{isDark:Y(e,o.$q),editable:r(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:C(!1),focused:C(!1),hasPopupOpen:!1,splitAttrs:mt(t,n),targetUid:C(ne(e.for)),rootRef:C(null),targetRef:C(null),controlRef:C(null)}}function Tt(e){const{props:t,emit:o,slots:n,attrs:c,proxy:d}=V(),{$q:u}=d;let m=null;e.hasValue===void 0&&(e.hasValue=r(()=>pt(t.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{o("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:M,onFocusout:I}),Object.assign(e,{clearValue:D,onControlFocusin:M,onControlFocusout:I,focus:g}),e.computedCounter===void 0&&(e.computedCounter=r(()=>{if(t.counter!==!1){const l=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,i=t.maxlength!==void 0?t.maxlength:t.maxValues;return l+(i!==void 0?" / "+i:"")}}));const{isDirtyModel:x,hasRules:w,hasError:v,errorMessage:b,resetValidation:B}=vt(e.focused,e.innerLoading),S=e.floatingLabel!==void 0?r(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):r(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),_=r(()=>t.bottomSlots===!0||t.hint!==void 0||w.value===!0||t.counter===!0||t.error!==null),F=r(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),R=r(()=>`q-field row no-wrap items-start q-field--${F.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(S.value===!0?" q-field--float":"")+(A.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(v.value===!0?" q-field--error":"")+(v.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&_.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),y=r(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(v.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),A=r(()=>t.labelSlot===!0||t.label!==void 0),f=r(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&v.value!==!0?` text-${t.labelColor}`:"")),k=r(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:S.value,modelValue:t.modelValue,emitValue:e.emitValue})),E=r(()=>{const l={for:e.targetUid.value};return t.disable===!0?l["aria-disabled"]="true":t.readonly===!0&&(l["aria-readonly"]="true"),l});P(()=>t.for,l=>{e.targetUid.value=ne(l)});function p(){const l=document.activeElement;let i=e.targetRef!==void 0&&e.targetRef.value;i&&(l===null||l.id!==e.targetUid.value)&&(i.hasAttribute("tabindex")===!0||(i=i.querySelector("[tabindex]")),i&&i!==l&&i.focus({preventScroll:!0}))}function g(){Ce(p)}function q(){Qe(p);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function M(l){m!==null&&(clearTimeout(m),m=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,o("focus",l))}function I(l,i){m!==null&&clearTimeout(m),m=setTimeout(()=>{m=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,o("blur",l)),i!==void 0&&i())})}function D(l){ae(l),u.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),o("update:modelValue",null),o("clear",t.modelValue),Pe(()=>{B(),u.platform.is.mobile!==!0&&(x.value=!1)})}function G(){const l=[];return n.prepend!==void 0&&l.push(s("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:K},n.prepend())),l.push(s("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},L())),v.value===!0&&t.noErrorIcon===!1&&l.push(O("error",[s(se,{name:u.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?l.push(O("inner-loading-append",n.loading!==void 0?n.loading():[s($e,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(O("inner-clearable-append",[s(se,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||u.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:D})])),n.append!==void 0&&l.push(s("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:K},n.append())),e.getInnerAppend!==void 0&&l.push(O("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function L(){const l=[];return t.prefix!==void 0&&t.prefix!==null&&l.push(s("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):n.rawControl!==void 0?l.push(n.rawControl()):n.control!==void 0&&l.push(s("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},n.control(k.value))),A.value===!0&&l.push(s("div",{class:f.value},T(n.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&l.push(s("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),l.concat(T(n.default))}function j(){let l,i;v.value===!0?b.value!==null?(l=[s("div",{role:"alert"},b.value)],i=`q--slot-error-${b.value}`):(l=T(n.error),i="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(l=[s("div",t.hint)],i=`q--slot-hint-${t.hint}`):(l=T(n.hint),i="q--slot-hint"));const $=t.counter===!0||n.counter!==void 0;if(t.hideBottomSpace===!0&&$===!1&&l===void 0)return;const U=s("div",{key:i,class:"q-field__messages col"},l);return s("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:K},[t.hideBottomSpace===!0?U:s(qe,{name:"q-transition--field-message"},()=>U),$===!0?s("div",{class:"q-field__counter"},n.counter!==void 0?n.counter():e.computedCounter.value):null])}function O(l,i){return i===null?null:s("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},i)}let Q=!1;return Te(()=>{Q=!0}),Ve(()=>{Q===!0&&t.autofocus===!0&&d.focus()}),ye(()=>{Oe.value===!0&&t.for===void 0&&(e.targetUid.value=ne()),t.autofocus===!0&&d.focus()}),Z(()=>{m!==null&&clearTimeout(m)}),Object.assign(d,{focus:g,blur:q}),function(){const i=e.getControl===void 0&&n.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...E.value}:E.value;return s("label",{ref:e.rootRef,class:[R.value,c.class],style:c.style,...i},[n.before!==void 0?s("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:K},n.before()):null,s("div",{class:"q-field__inner relative-position col self-stretch"},[s("div",{ref:e.controlRef,class:y.value,tabindex:-1,...e.controlEvents},G()),_.value===!0?j():null]),n.after!==void 0?s("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:K},n.after()):null])}}const ht=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,yt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,qt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Ct=/[a-z0-9_ -]$/i;function Vt(e){return function(o){if(o.type==="compositionend"||o.type==="change"){if(o.target.qComposing!==!0)return;o.target.qComposing=!1,e(o)}else o.type==="compositionupdate"&&o.target.qComposing!==!0&&typeof o.data=="string"&&(Me.is.firefox===!0?Ct.test(o.data)===!1:ht.test(o.data)===!0||yt.test(o.data)===!0||qt.test(o.data)===!0)===!0&&(o.target.qComposing=!0)}}var Ot=J({name:"QBar",props:{...X,dense:Boolean},setup(e,{slots:t}){const{proxy:{$q:o}}=V(),n=Y(e,o),c=r(()=>`q-bar row no-wrap items-center q-bar--${e.dense===!0?"dense":"standard"}  q-bar--${n.value===!0?"dark":"light"}`);return()=>s("div",{class:c.value,role:"toolbar"},T(t.default))}}),$t=J({name:"QItem",props:{...X,...Ie,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:o}){const{proxy:{$q:n}}=V(),c=Y(e,n),{hasLink:d,linkAttrs:u,linkClass:m,linkTag:x,navigateOnClick:w}=De(),v=C(null),b=C(null),B=r(()=>e.clickable===!0||d.value===!0||e.tag==="label"),S=r(()=>e.disable!==!0&&B.value===!0),_=r(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(c.value===!0?" q-item--dark":"")+(d.value===!0&&e.active===null?m.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(S.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),F=r(()=>{if(e.insetLevel===void 0)return null;const f=n.lang.rtl===!0?"Right":"Left";return{["padding"+f]:16+e.insetLevel*56+"px"}});function R(f){S.value===!0&&(b.value!==null&&(f.qKeyEvent!==!0&&document.activeElement===v.value?b.value.focus():document.activeElement===b.value&&v.value.focus()),w(f))}function y(f){if(S.value===!0&&Le(f,13)===!0){ae(f),f.qKeyEvent=!0;const k=new MouseEvent("click",f);k.qKeyEvent=!0,v.value.dispatchEvent(k)}o("keyup",f)}function A(){const f=He(t.default,[]);return S.value===!0&&f.unshift(s("div",{class:"q-focus-helper",tabindex:-1,ref:b})),f}return()=>{const f={ref:v,class:_.value,style:F.value,role:"listitem",onClick:R,onKeyup:y};return S.value===!0?(f.tabindex=e.tabindex||"0",Object.assign(f,u.value)):B.value===!0&&(f["aria-disabled"]="true"),s(x.value,f,A())}}}),Mt=J({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const o=r(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>s("div",{class:o.value},T(t.default))}}),It=J({name:"QMenu",inheritAttrs:!1,props:{...Je,...ot,...X,...Ue,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:ce},self:{type:String,validator:ce},offset:{type:Array,validator:Xe},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...lt,"click","escapeKey"],setup(e,{slots:t,emit:o,attrs:n}){let c=null,d,u,m;const x=V(),{proxy:w}=x,{$q:v}=w,b=C(null),B=C(!1),S=r(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),_=Y(e,v),{registerTick:F,removeTick:R}=ze(),{registerTimeout:y}=nt(),{transitionProps:A,transitionStyle:f}=We(e),{localScrollTarget:k,changeScrollEvent:E,unconfigureScrollTarget:p}=Ye(e,re),{anchorEl:g,canShow:q}=Ge({showing:B}),{hide:M}=at({showing:B,canShow:q,handleShow:U,handleHide:xe,hideOnRouteChange:S,processOnMount:!0}),{showPortal:I,hidePortal:D,renderPortal:G}=Ne(x,b,Be,"menu"),L={anchorEl:g,innerRef:b,onClickOutside(a){if(e.persistent!==!0&&B.value===!0)return M(a),(a.type==="touchstart"||a.target.classList.contains("q-dialog__backdrop"))&&ae(a),!0}},j=r(()=>fe(e.anchor||(e.cover===!0?"center middle":"bottom start"),v.lang.rtl)),O=r(()=>e.cover===!0?j.value:fe(e.self||"top start",v.lang.rtl)),Q=r(()=>(e.square===!0?" q-menu--square":"")+(_.value===!0?" q-menu--dark q-dark":"")),l=r(()=>e.autoClose===!0?{onClick:Se}:{}),i=r(()=>B.value===!0&&e.persistent!==!0);P(i,a=>{a===!0?(st(ee),tt(L)):(ve(ee),de(L))});function $(){Ce(()=>{let a=b.value;a&&a.contains(document.activeElement)!==!0&&(a=a.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||a.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||a.querySelector("[autofocus], [data-autofocus]")||a,a.focus({preventScroll:!0}))})}function U(a){if(c=e.noRefocus===!1?document.activeElement:null,rt(ie),I(),re(),d=void 0,a!==void 0&&(e.touchPosition||e.contextMenu)){const te=Ke(a);if(te.left!==void 0){const{top:ke,left:_e}=g.value.getBoundingClientRect();d={left:te.left-_e,top:te.top-ke}}}u===void 0&&(u=P(()=>v.screen.width+"|"+v.screen.height+"|"+e.self+"|"+e.anchor+"|"+v.lang.rtl,H)),e.noFocus!==!0&&document.activeElement.blur(),F(()=>{H(),e.noFocus!==!0&&$()}),y(()=>{v.platform.is.ios===!0&&(m=e.autoClose,b.value.click()),H(),I(!0),o("show",a)},e.transitionDuration)}function xe(a){R(),D(),ue(!0),c!==null&&(a===void 0||a.qClickOutside!==!0)&&(((a&&a.type.indexOf("key")===0?c.closest('[tabindex]:not([tabindex^="-"])'):void 0)||c).focus(),c=null),y(()=>{D(!0),o("hide",a)},e.transitionDuration)}function ue(a){d=void 0,u!==void 0&&(u(),u=void 0),(a===!0||B.value===!0)&&(it(ie),p(),de(L),ve(ee)),a!==!0&&(c=null)}function re(){(g.value!==null||e.scrollTarget!==void 0)&&(k.value=ut(g.value,e.scrollTarget),E(k.value,H))}function Se(a){m!==!0?(Ze(w,a),o("click",a)):m=!1}function ie(a){i.value===!0&&e.noFocus!==!0&&je(b.value,a.target)!==!0&&$()}function ee(a){o("escapeKey"),M(a)}function H(){const a=b.value;a===null||g.value===null||et({el:a,offset:e.offset,anchorEl:g.value,anchorOrigin:j.value,selfOrigin:O.value,absoluteOffset:d,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Be(){return s(qe,A.value,()=>B.value===!0?s("div",{role:"menu",...n,ref:b,tabindex:-1,class:["q-menu q-position-engine scroll"+Q.value,n.class],style:[n.style,f.value],...l.value},T(t.default)):null)}return Z(ue),Object.assign(w,{focus:$,updatePosition:H}),G}});let xt=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const t=document.createElement("div");Object.assign(t.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,xt=e.scrollLeft>=0,e.remove()}export{Ot as Q,Et as a,Pt as b,Tt as c,Vt as d,It as e,pt as f,Mt as g,$t as h,bt as i,xt as r,Ft as u};
