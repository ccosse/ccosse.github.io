import{w as j,t as ie,o as ee,f as _e,g as X,ao as Be,r as I,a as y,ac as Te,a1 as Me,ap as Oe,Y as qe,v as Y,a5 as Pe,ad as $e,i as De,d as S,T as G,a9 as ve,Z as Ie,y as J,X as Re,aq as je,W as Ke,c as se,ar as ge,as as ze,am as He}from"./index.8153b809.js";import{u as de,a as fe}from"./use-dark.4939a3a9.js";import{u as Le}from"./QItemLabel.f37519a8.js";import{d as ce,r as Ne,u as Ze,a as Ue,b as Qe,c as We,f as Ye}from"./use-tick.52205986.js";import{u as Xe,e as Je,f as Ge,r as et,g as me,h as tt}from"./ClosePopup.9ea05955.js";import{u as lt,v as he,a as nt,b as ot,c as at,r as be,s as rt,p as ke,d as ut}from"./QTooltip.a516395d.js";import{u as it,a as st,b as dt}from"./use-model-toggle.667ae379.js";import{u as ft}from"./use-timeout.d0ad7d57.js";import{g as ct}from"./scroll.756d8f01.js";function vt({validate:e,resetValidation:t,requiresQForm:u}){const i=_e(Be,!1);if(i!==!1){const{props:d,proxy:f}=X();Object.assign(f,{validate:e,resetValidation:t}),j(()=>d.disable,c=>{c===!0?(typeof t=="function"&&t(),i.unbindComponent(f)):i.bindComponent(f)}),ie(()=>{d.disable!==!0&&i.bindComponent(f)}),ee(()=>{d.disable!==!0&&i.unbindComponent(f)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const pe=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ye=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,xe=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,te=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,le=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ae={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>pe.test(e),hexaColor:e=>ye.test(e),hexOrHexaColor:e=>xe.test(e),rgbColor:e=>te.test(e),rgbaColor:e=>le.test(e),rgbOrRgbaColor:e=>te.test(e)||le.test(e),hexOrRgbColor:e=>pe.test(e)||te.test(e),hexaOrRgbaColor:e=>ye.test(e)||le.test(e),anyColor:e=>xe.test(e)||te.test(e)||le.test(e)},gt=[!0,!1,"ondemand"],mt={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>gt.includes(e)}};function ht(e,t){const{props:u,proxy:i}=X(),d=I(!1),f=I(null),c=I(null);vt({validate:P,resetValidation:_});let C=0,E;const q=y(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length>0),p=y(()=>u.disable!==!0&&q.value===!0),v=y(()=>u.error===!0||d.value===!0),H=y(()=>typeof u.errorMessage=="string"&&u.errorMessage.length>0?u.errorMessage:f.value);j(()=>u.modelValue,()=>{Z()}),j(()=>u.reactiveRules,$=>{$===!0?E===void 0&&(E=j(()=>u.rules,()=>{Z(!0)})):E!==void 0&&(E(),E=void 0)},{immediate:!0}),j(e,$=>{$===!0?c.value===null&&(c.value=!1):c.value===!1&&(c.value=!0,p.value===!0&&u.lazyRules!=="ondemand"&&t.value===!1&&D())});function _(){C++,t.value=!1,c.value=null,d.value=!1,f.value=null,D.cancel()}function P($=u.modelValue){if(p.value!==!0)return!0;const A=++C,W=t.value!==!0?()=>{c.value=!0}:()=>{},K=(R,x)=>{R===!0&&W(),d.value=R,f.value=x||null,t.value=!1},z=[];for(let R=0;R<u.rules.length;R++){const x=u.rules[R];let B;if(typeof x=="function"?B=x($,ae):typeof x=="string"&&ae[x]!==void 0&&(B=ae[x]($)),B===!1||typeof B=="string")return K(!0,B),!1;B!==!0&&B!==void 0&&z.push(B)}return z.length===0?(K(!1),!0):(t.value=!0,Promise.all(z).then(R=>{if(R===void 0||Array.isArray(R)===!1||R.length===0)return A===C&&K(!1),!0;const x=R.find(B=>B===!1||typeof B=="string");return A===C&&K(x!==void 0,x),x===void 0},R=>(A===C&&(console.error(R),K(!0)),!1)))}function Z($){p.value===!0&&u.lazyRules!=="ondemand"&&(c.value===!0||u.lazyRules!==!0&&$!==!0)&&D()}const D=Te(P,0);return ee(()=>{E!==void 0&&E(),D.cancel()}),Object.assign(i,{resetValidation:_,validate:P}),Me(i,"hasError",()=>v.value),{isDirtyModel:c,hasRules:q,hasError:v,errorMessage:H,validate:P,resetValidation:_}}const Ce=/^on[A-Z]/;function bt(e,t){const u={listeners:I({}),attributes:I({})};function i(){const d={},f={};for(const c in e)c!=="class"&&c!=="style"&&Ce.test(c)===!1&&(d[c]=e[c]);for(const c in t.props)Ce.test(c)===!0&&(f[c]=t.props[c]);u.attributes.value=d,u.listeners.value=f}return Oe(i),i(),u}function re(e){return e===void 0?`f_${Le()}`:e}function ue(e){return e!=null&&(""+e).length>0}const kt={...de,...mt,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},pt=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function yt(){const{props:e,attrs:t,proxy:u,vnode:i}=X();return{isDark:fe(e,u.$q),editable:y(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:I(!1),focused:I(!1),hasPopupOpen:!1,splitAttrs:bt(t,i),targetUid:I(re(e.for)),rootRef:I(null),targetRef:I(null),controlRef:I(null)}}function xt(e){const{props:t,emit:u,slots:i,attrs:d,proxy:f}=X(),{$q:c}=f;let C=null;e.hasValue===void 0&&(e.hasValue=y(()=>ue(t.modelValue))),e.emitValue===void 0&&(e.emitValue=n=>{u("update:modelValue",n)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:a,onFocusout:o}),Object.assign(e,{clearValue:s,onControlFocusin:a,onControlFocusout:o,focus:x}),e.computedCounter===void 0&&(e.computedCounter=y(()=>{if(t.counter!==!1){const n=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,b=t.maxlength!==void 0?t.maxlength:t.maxValues;return n+(b!==void 0?" / "+b:"")}}));const{isDirtyModel:E,hasRules:q,hasError:p,errorMessage:v,resetValidation:H}=ht(e.focused,e.innerLoading),_=e.floatingLabel!==void 0?y(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):y(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),P=y(()=>t.bottomSlots===!0||t.hint!==void 0||q.value===!0||t.counter===!0||t.error!==null),Z=y(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),D=y(()=>`q-field row no-wrap items-start q-field--${Z.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(_.value===!0?" q-field--float":"")+(A.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(p.value===!0?" q-field--error":"")+(p.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&P.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),$=y(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(p.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),A=y(()=>t.labelSlot===!0||t.label!==void 0),W=y(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&p.value!==!0?` text-${t.labelColor}`:"")),K=y(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:_.value,modelValue:t.modelValue,emitValue:e.emitValue})),z=y(()=>{const n={for:e.targetUid.value};return t.disable===!0?n["aria-disabled"]="true":t.readonly===!0&&(n["aria-readonly"]="true"),n});j(()=>t.for,n=>{e.targetUid.value=re(n)});function R(){const n=document.activeElement;let b=e.targetRef!==void 0&&e.targetRef.value;b&&(n===null||n.id!==e.targetUid.value)&&(b.hasAttribute("tabindex")===!0||(b=b.querySelector("[tabindex]")),b&&b!==n&&b.focus({preventScroll:!0}))}function x(){ce(R)}function B(){Ne(R);const n=document.activeElement;n!==null&&e.rootRef.value.contains(n)&&n.blur()}function a(n){C!==null&&(clearTimeout(C),C=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",n))}function o(n,b){C!==null&&clearTimeout(C),C=setTimeout(()=>{C=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",n)),b!==void 0&&b())})}function s(n){qe(n),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),Y(()=>{H(),c.platform.is.mobile!==!0&&(E.value=!1)})}function r(){const n=[];return i.prepend!==void 0&&n.push(S("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:G},i.prepend())),n.push(S("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),p.value===!0&&t.noErrorIcon===!1&&n.push(M("error",[S(ve,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?n.push(M("inner-loading-append",i.loading!==void 0?i.loading():[S(Ie,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&n.push(M("inner-clearable-append",[S(ve,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),i.append!==void 0&&n.push(S("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:G},i.append())),e.getInnerAppend!==void 0&&n.push(M("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&n.push(e.getControlChild()),n}function g(){const n=[];return t.prefix!==void 0&&t.prefix!==null&&n.push(S("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&n.push(e.getShadowControl()),e.getControl!==void 0?n.push(e.getControl()):i.rawControl!==void 0?n.push(i.rawControl()):i.control!==void 0&&n.push(S("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(K.value))),A.value===!0&&n.push(S("div",{class:W.value},J(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&n.push(S("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),n.concat(J(i.default))}function m(){let n,b;p.value===!0?v.value!==null?(n=[S("div",{role:"alert"},v.value)],b=`q--slot-error-${v.value}`):(n=J(i.error),b="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(n=[S("div",t.hint)],b=`q--slot-hint-${t.hint}`):(n=J(i.hint),b="q--slot-hint"));const L=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&L===!1&&n===void 0)return;const w=S("div",{key:b,class:"q-field__messages col"},n);return S("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:G},[t.hideBottomSpace===!0?w:S(Re,{name:"q-transition--field-message"},()=>w),L===!0?S("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function M(n,b){return b===null?null:S("div",{key:n,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},b)}let k=!1;return Pe(()=>{k=!0}),$e(()=>{k===!0&&t.autofocus===!0&&f.focus()}),ie(()=>{De.value===!0&&t.for===void 0&&(e.targetUid.value=re()),t.autofocus===!0&&f.focus()}),ee(()=>{C!==null&&clearTimeout(C)}),Object.assign(f,{focus:x,blur:B}),function(){const b=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...z.value}:z.value;return S("label",{ref:e.rootRef,class:[D.value,d.class],style:d.style,...b},[i.before!==void 0?S("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:G},i.before()):null,S("div",{class:"q-field__inner relative-position col self-stretch"},[S("div",{ref:e.controlRef,class:$.value,tabindex:-1,...e.controlEvents},r()),P.value===!0?m():null]),i.after!==void 0?S("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:G},i.after()):null])}}const we={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ne={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Fe=Object.keys(ne);Fe.forEach(e=>{ne[e].regex=new RegExp(ne[e].pattern)});const Ct=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Fe.join("")+"])|(.)","g"),Se=/[.*+?^${}()|[\]\\]/g,T=String.fromCharCode(1),wt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function St(e,t,u,i){let d,f,c,C,E,q;const p=I(null),v=I(_());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}j(()=>e.type+e.autogrow,Z),j(()=>e.mask,a=>{if(a!==void 0)D(v.value,!0);else{const o=x(v.value);Z(),e.modelValue!==o&&t("update:modelValue",o)}}),j(()=>e.fillMask+e.reverseFillMask,()=>{p.value===!0&&D(v.value,!0)}),j(()=>e.unmaskedValue,()=>{p.value===!0&&D(v.value)});function _(){if(Z(),p.value===!0){const a=z(x(e.modelValue));return e.fillMask!==!1?B(a):a}return e.modelValue}function P(a){if(a<d.length)return d.slice(-a);let o="",s=d;const r=s.indexOf(T);if(r>-1){for(let g=a-s.length;g>0;g--)o+=T;s=s.slice(0,r)+o+s.slice(r)}return s}function Z(){if(p.value=e.mask!==void 0&&e.mask.length>0&&H(),p.value===!1){C=void 0,d="",f="";return}const a=we[e.mask]===void 0?e.mask:we[e.mask],o=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",s=o.replace(Se,"\\$&"),r=[],g=[],m=[];let M=e.reverseFillMask===!0,k="",n="";a.replace(Ct,(V,l,F,Q,N)=>{if(Q!==void 0){const O=ne[Q];m.push(O),n=O.negate,M===!0&&(g.push("(?:"+n+"+)?("+O.pattern+"+)?(?:"+n+"+)?("+O.pattern+"+)?"),M=!1),g.push("(?:"+n+"+)?("+O.pattern+")?")}else if(F!==void 0)k="\\"+(F==="\\"?"":F),m.push(F),r.push("([^"+k+"]+)?"+k+"?");else{const O=l!==void 0?l:N;k=O==="\\"?"\\\\\\\\":O.replace(Se,"\\\\$&"),m.push(O),r.push("([^"+k+"]+)?"+k+"?")}});const b=new RegExp("^"+r.join("")+"("+(k===""?".":"[^"+k+"]")+"+)?"+(k===""?"":"["+k+"]*")+"$"),L=g.length-1,w=g.map((V,l)=>l===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+V):l===L?new RegExp("^"+V+"("+(n===""?".":n)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+V));c=m,C=V=>{const l=b.exec(e.reverseFillMask===!0?V:V.slice(0,m.length+1));l!==null&&(V=l.slice(1).join(""));const F=[],Q=w.length;for(let N=0,O=V;N<Q;N++){const U=w[N].exec(O);if(U===null)break;O=O.slice(U.shift().length),F.push(...U)}return F.length>0?F.join(""):V},d=m.map(V=>typeof V=="string"?V:T).join(""),f=d.split(T).join(o)}function D(a,o,s){const r=i.value,g=r.selectionEnd,m=r.value.length-g,M=x(a);o===!0&&Z();const k=z(M),n=e.fillMask!==!1?B(k):k,b=v.value!==n;r.value!==n&&(r.value=n),b===!0&&(v.value=n),document.activeElement===r&&Y(()=>{if(n===f){const w=e.reverseFillMask===!0?f.length:0;r.setSelectionRange(w,w,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const w=r.selectionEnd;let V=g-1;for(let l=E;l<=V&&l<w;l++)d[l]!==T&&V++;A.right(r,V);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)>-1){const w=e.reverseFillMask===!0?g===0?n.length>k.length?1:0:Math.max(0,n.length-(n===f?0:Math.min(k.length,m)+1))+1:g;r.setSelectionRange(w,w,"forward");return}if(e.reverseFillMask===!0)if(b===!0){const w=Math.max(0,n.length-(n===f?0:Math.min(k.length,m+1)));w===1&&g===1?r.setSelectionRange(w,w,"forward"):A.rightReverse(r,w)}else{const w=n.length-m;r.setSelectionRange(w,w,"backward")}else if(b===!0){const w=Math.max(0,d.indexOf(T),Math.min(k.length,g)-1);A.right(r,w)}else{const w=g-1;A.right(r,w)}});const L=e.unmaskedValue===!0?x(n):n;String(e.modelValue)!==L&&u(L,!0)}function $(a,o,s){const r=z(x(a.value));o=Math.max(0,d.indexOf(T),Math.min(r.length,o)),E=o,a.setSelectionRange(o,s,"forward")}const A={left(a,o){const s=d.slice(o-1).indexOf(T)===-1;let r=Math.max(0,o-1);for(;r>=0;r--)if(d[r]===T){o=r,s===!0&&o++;break}if(r<0&&d[o]!==void 0&&d[o]!==T)return A.right(a,0);o>=0&&a.setSelectionRange(o,o,"backward")},right(a,o){const s=a.value.length;let r=Math.min(s,o+1);for(;r<=s;r++)if(d[r]===T){o=r;break}else d[r-1]===T&&(o=r);if(r>s&&d[o-1]!==void 0&&d[o-1]!==T)return A.left(a,s);a.setSelectionRange(o,o,"forward")},leftReverse(a,o){const s=P(a.value.length);let r=Math.max(0,o-1);for(;r>=0;r--)if(s[r-1]===T){o=r;break}else if(s[r]===T&&(o=r,r===0))break;if(r<0&&s[o]!==void 0&&s[o]!==T)return A.rightReverse(a,0);o>=0&&a.setSelectionRange(o,o,"backward")},rightReverse(a,o){const s=a.value.length,r=P(s),g=r.slice(0,o+1).indexOf(T)===-1;let m=Math.min(s,o+1);for(;m<=s;m++)if(r[m-1]===T){o=m,o>0&&g===!0&&o--;break}if(m>s&&r[o-1]!==void 0&&r[o-1]!==T)return A.leftReverse(a,s);a.setSelectionRange(o,o,"forward")}};function W(a){t("click",a),q=void 0}function K(a){if(t("keydown",a),je(a)===!0)return;const o=i.value,s=o.selectionStart,r=o.selectionEnd;if(a.shiftKey||(q=void 0),a.keyCode===37||a.keyCode===39){a.shiftKey&&q===void 0&&(q=o.selectionDirection==="forward"?s:r);const g=A[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(a.preventDefault(),g(o,q===s?r:s),a.shiftKey){const m=o.selectionStart;o.setSelectionRange(Math.min(q,m),Math.max(q,m),"forward")}}else a.keyCode===8&&e.reverseFillMask!==!0&&s===r?(A.left(o,s),o.setSelectionRange(o.selectionStart,r,"backward")):a.keyCode===46&&e.reverseFillMask===!0&&s===r&&(A.rightReverse(o,r),o.setSelectionRange(s,o.selectionEnd,"forward"))}function z(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return R(a);const o=c;let s=0,r="";for(let g=0;g<o.length;g++){const m=a[s],M=o[g];if(typeof M=="string")r+=M,m===M&&s++;else if(m!==void 0&&M.regex.test(m))r+=M.transform!==void 0?M.transform(m):m,s++;else return r}return r}function R(a){const o=c,s=d.indexOf(T);let r=a.length-1,g="";for(let m=o.length-1;m>=0&&r>-1;m--){const M=o[m];let k=a[r];if(typeof M=="string")g=M+g,k===M&&r--;else if(k!==void 0&&M.regex.test(k))do g=(M.transform!==void 0?M.transform(k):k)+g,r--,k=a[r];while(s===m&&k!==void 0&&M.regex.test(k));else return g}return g}function x(a){return typeof a!="string"||C===void 0?typeof a=="number"?C(""+a):a:C(a)}function B(a){return f.length-a.length<=0?a:e.reverseFillMask===!0&&a.length>0?f.slice(0,-a.length)+a:a+f.slice(a.length)}return{innerValue:v,hasMask:p,moveCursorForPaste:$,updateMaskValue:D,onMaskedKeydown:K,onMaskedClick:W}}function Mt(e,t){function u(){const i=e.modelValue;try{const d="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(f=>{d.items.add(f)}),{files:d.files}}catch{return{files:void 0}}}return t===!0?y(()=>{if(e.type==="file")return u()}):y(u)}const qt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Rt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Ft=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,At=/[a-z0-9_ -]$/i;function Vt(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(Ke.is.firefox===!0?At.test(u.data)===!1:qt.test(u.data)===!0||Rt.test(u.data)===!0||Ft.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}var jt=se({name:"QInput",inheritAttrs:!1,props:{...kt,...wt,...Xe,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...pt,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:i}=X(),{$q:d}=i,f={};let c=NaN,C,E,q=null,p;const v=I(null),H=Je(e),{innerValue:_,hasMask:P,moveCursorForPaste:Z,updateMaskValue:D,onMaskedKeydown:$,onMaskedClick:A}=St(e,t,k,v),W=Mt(e,!0),K=y(()=>ue(_.value)),z=Vt(m),R=yt(),x=y(()=>e.type==="textarea"||e.autogrow===!0),B=y(()=>x.value===!0||["text","search","url","tel","password"].includes(e.type)),a=y(()=>{const l={...R.splitAttrs.listeners.value,onInput:m,onPaste:g,onChange:b,onBlur:L,onFocus:ge};return l.onCompositionstart=l.onCompositionupdate=l.onCompositionend=z,P.value===!0&&(l.onKeydown=$,l.onClick=A),e.autogrow===!0&&(l.onAnimationend=M),l}),o=y(()=>{const l={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...R.splitAttrs.attributes.value,id:R.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return x.value===!1&&(l.type=e.type),e.autogrow===!0&&(l.rows=1),l});j(()=>e.type,()=>{v.value&&(v.value.value=e.modelValue)}),j(()=>e.modelValue,l=>{if(P.value===!0){if(E===!0&&(E=!1,String(l)===c))return;D(l)}else _.value!==l&&(_.value=l,e.type==="number"&&f.hasOwnProperty("value")===!0&&(C===!0?C=!1:delete f.value));e.autogrow===!0&&Y(n)}),j(()=>e.autogrow,l=>{l===!0?Y(n):v.value!==null&&u.rows>0&&(v.value.style.height="auto")}),j(()=>e.dense,()=>{e.autogrow===!0&&Y(n)});function s(){ce(()=>{const l=document.activeElement;v.value!==null&&v.value!==l&&(l===null||l.id!==R.targetUid.value)&&v.value.focus({preventScroll:!0})})}function r(){v.value!==null&&v.value.select()}function g(l){if(P.value===!0&&e.reverseFillMask!==!0){const F=l.target;Z(F,F.selectionStart,F.selectionEnd)}t("paste",l)}function m(l){if(!l||!l.target)return;if(e.type==="file"){t("update:modelValue",l.target.files);return}const F=l.target.value;if(l.target.qComposing===!0){f.value=F;return}if(P.value===!0)D(F,!1,l.inputType);else if(k(F),B.value===!0&&l.target===document.activeElement){const{selectionStart:Q,selectionEnd:N}=l.target;Q!==void 0&&N!==void 0&&Y(()=>{l.target===document.activeElement&&F.indexOf(l.target.value)===0&&l.target.setSelectionRange(Q,N)})}e.autogrow===!0&&n()}function M(l){t("animationend",l),n()}function k(l,F){p=()=>{q=null,e.type!=="number"&&f.hasOwnProperty("value")===!0&&delete f.value,e.modelValue!==l&&c!==l&&(c=l,F===!0&&(E=!0),t("update:modelValue",l),Y(()=>{c===l&&(c=NaN)})),p=void 0},e.type==="number"&&(C=!0,f.value=l),e.debounce!==void 0?(q!==null&&clearTimeout(q),f.value=l,q=setTimeout(p,e.debounce)):p()}function n(){requestAnimationFrame(()=>{const l=v.value;if(l!==null){const F=l.parentNode.style,{scrollTop:Q}=l,{overflowY:N,maxHeight:O}=d.platform.is.firefox===!0?{}:window.getComputedStyle(l),U=N!==void 0&&N!=="scroll";U===!0&&(l.style.overflowY="hidden"),F.marginBottom=l.scrollHeight-1+"px",l.style.height="1px",l.style.height=l.scrollHeight+"px",U===!0&&(l.style.overflowY=parseInt(O,10)<l.scrollHeight?"auto":"hidden"),F.marginBottom="",l.scrollTop=Q}})}function b(l){z(l),q!==null&&(clearTimeout(q),q=null),p!==void 0&&p(),t("change",l.target.value)}function L(l){l!==void 0&&ge(l),q!==null&&(clearTimeout(q),q=null),p!==void 0&&p(),C=!1,E=!1,delete f.value,e.type!=="file"&&setTimeout(()=>{v.value!==null&&(v.value.value=_.value!==void 0?_.value:"")})}function w(){return f.hasOwnProperty("value")===!0?f.value:_.value!==void 0?_.value:""}ee(()=>{L()}),ie(()=>{e.autogrow===!0&&n()}),Object.assign(R,{innerValue:_,fieldClass:y(()=>`q-${x.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:y(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:v,emitValue:k,hasValue:K,floatingLabel:y(()=>K.value===!0&&(e.type!=="number"||isNaN(_.value)===!1)||ue(e.displayValue)),getControl:()=>S(x.value===!0?"textarea":"input",{ref:v,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...o.value,...a.value,...e.type!=="file"?{value:w()}:W.value}),getShadowControl:()=>S("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(x.value===!0?"":" text-no-wrap")},[S("span",{class:"invisible"},w()),S("span",e.shadowText)])});const V=xt(R);return Object.assign(i,{focus:s,select:r,getNativeElement:()=>v.value}),Me(i,"nativeEl",()=>v.value),V}}),Kt=se({name:"QBar",props:{...de,dense:Boolean},setup(e,{slots:t}){const{proxy:{$q:u}}=X(),i=fe(e,u),d=y(()=>`q-bar row no-wrap items-center q-bar--${e.dense===!0?"dense":"standard"}  q-bar--${i.value===!0?"dark":"light"}`);return()=>S("div",{class:d.value,role:"toolbar"},J(t.default))}}),zt=se({name:"QMenu",inheritAttrs:!1,props:{...lt,...it,...de,...Ze,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:he},self:{type:String,validator:he},offset:{type:Array,validator:nt},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...st,"click","escapeKey"],setup(e,{slots:t,emit:u,attrs:i}){let d=null,f,c,C;const E=X(),{proxy:q}=E,{$q:p}=q,v=I(null),H=I(!1),_=y(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),P=fe(e,p),{registerTick:Z,removeTick:D}=Ue(),{registerTimeout:$}=ft(),{transitionProps:A,transitionStyle:W}=Qe(e),{localScrollTarget:K,changeScrollEvent:z,unconfigureScrollTarget:R}=ot(e,F),{anchorEl:x,canShow:B}=at({showing:H}),{hide:a}=dt({showing:H,canShow:B,handleShow:w,handleHide:V,hideOnRouteChange:_,processOnMount:!0}),{showPortal:o,hidePortal:s,renderPortal:r}=We(E,v,Ae,"menu"),g={anchorEl:x,innerRef:v,onClickOutside(h){if(e.persistent!==!0&&H.value===!0)return a(h),(h.type==="touchstart"||h.target.classList.contains("q-dialog__backdrop"))&&qe(h),!0}},m=y(()=>ke(e.anchor||(e.cover===!0?"center middle":"bottom start"),p.lang.rtl)),M=y(()=>e.cover===!0?m.value:ke(e.self||"top start",p.lang.rtl)),k=y(()=>(e.square===!0?" q-menu--square":"")+(P.value===!0?" q-menu--dark q-dark":"")),n=y(()=>e.autoClose===!0?{onClick:Q}:{}),b=y(()=>H.value===!0&&e.persistent!==!0);j(b,h=>{h===!0?(tt(O),ut(g)):(me(O),be(g))});function L(){ce(()=>{let h=v.value;h&&h.contains(document.activeElement)!==!0&&(h=h.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||h.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||h.querySelector("[autofocus], [data-autofocus]")||h,h.focus({preventScroll:!0}))})}function w(h){if(d=e.noRefocus===!1?document.activeElement:null,Ge(N),o(),F(),f=void 0,h!==void 0&&(e.touchPosition||e.contextMenu)){const oe=ze(h);if(oe.left!==void 0){const{top:Ve,left:Ee}=x.value.getBoundingClientRect();f={left:oe.left-Ee,top:oe.top-Ve}}}c===void 0&&(c=j(()=>p.screen.width+"|"+p.screen.height+"|"+e.self+"|"+e.anchor+"|"+p.lang.rtl,U)),e.noFocus!==!0&&document.activeElement.blur(),Z(()=>{U(),e.noFocus!==!0&&L()}),$(()=>{p.platform.is.ios===!0&&(C=e.autoClose,v.value.click()),U(),o(!0),u("show",h)},e.transitionDuration)}function V(h){D(),s(),l(!0),d!==null&&(h===void 0||h.qClickOutside!==!0)&&(((h&&h.type.indexOf("key")===0?d.closest('[tabindex]:not([tabindex^="-"])'):void 0)||d).focus(),d=null),$(()=>{s(!0),u("hide",h)},e.transitionDuration)}function l(h){f=void 0,c!==void 0&&(c(),c=void 0),(h===!0||H.value===!0)&&(et(N),R(),be(g),me(O)),h!==!0&&(d=null)}function F(){(x.value!==null||e.scrollTarget!==void 0)&&(K.value=ct(x.value,e.scrollTarget),z(K.value,U))}function Q(h){C!==!0?(Ye(q,h),u("click",h)):C=!1}function N(h){b.value===!0&&e.noFocus!==!0&&He(v.value,h.target)!==!0&&L()}function O(h){u("escapeKey"),a(h)}function U(){const h=v.value;h===null||x.value===null||rt({el:h,offset:e.offset,anchorEl:x.value,anchorOrigin:m.value,selfOrigin:M.value,absoluteOffset:f,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Ae(){return S(Re,A.value,()=>H.value===!0?S("div",{role:"menu",...i,ref:v,tabindex:-1,class:["q-menu q-position-engine scroll"+k.value,i.class],style:[i.style,W.value],...n.value},J(t.default)):null)}return ee(l),Object.assign(q,{focus:L,updatePosition:U}),r}});export{jt as Q,Kt as a,pt as b,xt as c,yt as d,zt as e,ue as f,Vt as g,kt as u};
