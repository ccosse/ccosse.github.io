import{n as j,q as ie,s as ee,j as _e,k as J,ai as Be,v as D,g as x,Y as Te,aa as Ce,aj as Oe,ak as we,y as Y,Z as Pe,$ as $e,x as Ie,h as M,al as X,V as de,S as De,i as G,T as Se,am as je,af as Ke,e as Me,an as ce,ao as ze,ag as He}from"./index.1b8c9d2e.js";import{u as qe,a as Re}from"./use-dark.7249b04a.js";import{u as Le,b as Ne,v as fe,c as Ze,d as Ue,e as Qe,r as ve,s as We,p as ge,f as Ye}from"./QBar.b507785a.js";import{e as se,r as Je,u as Xe,f as Ge,g as et,h as tt,i as nt,j as lt,k as ot,l as at,m as me,n as rt,o as ut}from"./ClosePopup.4c41ec04.js";import{u as it,a as st,b as dt,c as ct}from"./use-prevent-scroll.0890b6a1.js";import{g as ft}from"./scroll.4f958157.js";function vt({validate:e,resetValidation:t,requiresQForm:u}){const i=_e(Be,!1);if(i!==!1){const{props:d,proxy:c}=J();Object.assign(c,{validate:e,resetValidation:t}),j(()=>d.disable,f=>{f===!0?(typeof t=="function"&&t(),i.unbindComponent(c)):i.bindComponent(c)}),ie(()=>{d.disable!==!0&&i.bindComponent(c)}),ee(()=>{d.disable!==!0&&i.unbindComponent(c)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const he=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,be=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ke=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,te=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ne=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ae={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>he.test(e),hexaColor:e=>be.test(e),hexOrHexaColor:e=>ke.test(e),rgbColor:e=>te.test(e),rgbaColor:e=>ne.test(e),rgbOrRgbaColor:e=>te.test(e)||ne.test(e),hexOrRgbColor:e=>he.test(e)||te.test(e),hexaOrRgbaColor:e=>be.test(e)||ne.test(e),anyColor:e=>ke.test(e)||te.test(e)||ne.test(e)},gt=[!0,!1,"ondemand"],mt={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>gt.includes(e)}};function ht(e,t){const{props:u,proxy:i}=J(),d=D(!1),c=D(null),f=D(null);vt({validate:P,resetValidation:_});let C=0,E;const q=x(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length>0),y=x(()=>u.disable!==!0&&q.value===!0),v=x(()=>u.error===!0||d.value===!0),H=x(()=>typeof u.errorMessage=="string"&&u.errorMessage.length>0?u.errorMessage:c.value);j(()=>u.modelValue,()=>{Z()}),j(()=>u.reactiveRules,$=>{$===!0?E===void 0&&(E=j(()=>u.rules,()=>{Z(!0)})):E!==void 0&&(E(),E=void 0)},{immediate:!0}),j(e,$=>{$===!0?f.value===null&&(f.value=!1):f.value===!1&&(f.value=!0,y.value===!0&&u.lazyRules!=="ondemand"&&t.value===!1&&I())});function _(){C++,t.value=!1,f.value=null,d.value=!1,c.value=null,I.cancel()}function P($=u.modelValue){if(y.value!==!0)return!0;const A=++C,W=t.value!==!0?()=>{f.value=!0}:()=>{},K=(R,p)=>{R===!0&&W(),d.value=R,c.value=p||null,t.value=!1},z=[];for(let R=0;R<u.rules.length;R++){const p=u.rules[R];let B;if(typeof p=="function"?B=p($,ae):typeof p=="string"&&ae[p]!==void 0&&(B=ae[p]($)),B===!1||typeof B=="string")return K(!0,B),!1;B!==!0&&B!==void 0&&z.push(B)}return z.length===0?(K(!1),!0):(t.value=!0,Promise.all(z).then(R=>{if(R===void 0||Array.isArray(R)===!1||R.length===0)return A===C&&K(!1),!0;const p=R.find(B=>B===!1||typeof B=="string");return A===C&&K(p!==void 0,p),p===void 0},R=>(A===C&&(console.error(R),K(!0)),!1)))}function Z($){y.value===!0&&u.lazyRules!=="ondemand"&&(f.value===!0||u.lazyRules!==!0&&$!==!0)&&I()}const I=Te(P,0);return ee(()=>{E!==void 0&&E(),I.cancel()}),Object.assign(i,{resetValidation:_,validate:P}),Ce(i,"hasError",()=>v.value),{isDirtyModel:f,hasRules:q,hasError:v,errorMessage:H,validate:P,resetValidation:_}}const ye=/^on[A-Z]/;function bt(e,t){const u={listeners:D({}),attributes:D({})};function i(){const d={},c={};for(const f in e)f!=="class"&&f!=="style"&&ye.test(f)===!1&&(d[f]=e[f]);for(const f in t.props)ye.test(f)===!0&&(c[f]=t.props[f]);u.attributes.value=d,u.listeners.value=c}return Oe(i),i(),u}function re(e){return e===void 0?`f_${Le()}`:e}function ue(e){return e!=null&&(""+e).length>0}const kt={...qe,...mt,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},yt=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function pt(){const{props:e,attrs:t,proxy:u,vnode:i}=J();return{isDark:Re(e,u.$q),editable:x(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:D(!1),focused:D(!1),hasPopupOpen:!1,splitAttrs:bt(t,i),targetUid:D(re(e.for)),rootRef:D(null),targetRef:D(null),controlRef:D(null)}}function xt(e){const{props:t,emit:u,slots:i,attrs:d,proxy:c}=J(),{$q:f}=c;let C=null;e.hasValue===void 0&&(e.hasValue=x(()=>ue(t.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{u("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:a,onFocusout:o}),Object.assign(e,{clearValue:s,onControlFocusin:a,onControlFocusout:o,focus:p}),e.computedCounter===void 0&&(e.computedCounter=x(()=>{if(t.counter!==!1){const l=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,b=t.maxlength!==void 0?t.maxlength:t.maxValues;return l+(b!==void 0?" / "+b:"")}}));const{isDirtyModel:E,hasRules:q,hasError:y,errorMessage:v,resetValidation:H}=ht(e.focused,e.innerLoading),_=e.floatingLabel!==void 0?x(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):x(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),P=x(()=>t.bottomSlots===!0||t.hint!==void 0||q.value===!0||t.counter===!0||t.error!==null),Z=x(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),I=x(()=>`q-field row no-wrap items-start q-field--${Z.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(_.value===!0?" q-field--float":"")+(A.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(y.value===!0?" q-field--error":"")+(y.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&P.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),$=x(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(y.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),A=x(()=>t.labelSlot===!0||t.label!==void 0),W=x(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&y.value!==!0?` text-${t.labelColor}`:"")),K=x(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:_.value,modelValue:t.modelValue,emitValue:e.emitValue})),z=x(()=>{const l={for:e.targetUid.value};return t.disable===!0?l["aria-disabled"]="true":t.readonly===!0&&(l["aria-readonly"]="true"),l});j(()=>t.for,l=>{e.targetUid.value=re(l)});function R(){const l=document.activeElement;let b=e.targetRef!==void 0&&e.targetRef.value;b&&(l===null||l.id!==e.targetUid.value)&&(b.hasAttribute("tabindex")===!0||(b=b.querySelector("[tabindex]")),b&&b!==l&&b.focus({preventScroll:!0}))}function p(){se(R)}function B(){Je(R);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function a(l){C!==null&&(clearTimeout(C),C=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",l))}function o(l,b){C!==null&&clearTimeout(C),C=setTimeout(()=>{C=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",l)),b!==void 0&&b())})}function s(l){we(l),f.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),Y(()=>{H(),f.platform.is.mobile!==!0&&(E.value=!1)})}function r(){const l=[];return i.prepend!==void 0&&l.push(M("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:X},i.prepend())),l.push(M("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),y.value===!0&&t.noErrorIcon===!1&&l.push(S("error",[M(de,{name:f.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?l.push(S("inner-loading-append",i.loading!==void 0?i.loading():[M(De,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(S("inner-clearable-append",[M(de,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||f.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),i.append!==void 0&&l.push(M("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:X},i.append())),e.getInnerAppend!==void 0&&l.push(S("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function g(){const l=[];return t.prefix!==void 0&&t.prefix!==null&&l.push(M("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):i.rawControl!==void 0?l.push(i.rawControl()):i.control!==void 0&&l.push(M("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(K.value))),A.value===!0&&l.push(M("div",{class:W.value},G(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&l.push(M("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),l.concat(G(i.default))}function m(){let l,b;y.value===!0?v.value!==null?(l=[M("div",{role:"alert"},v.value)],b=`q--slot-error-${v.value}`):(l=G(i.error),b="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(l=[M("div",t.hint)],b=`q--slot-hint-${t.hint}`):(l=G(i.hint),b="q--slot-hint"));const L=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&L===!1&&l===void 0)return;const w=M("div",{key:b,class:"q-field__messages col"},l);return M("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:X},[t.hideBottomSpace===!0?w:M(Se,{name:"q-transition--field-message"},()=>w),L===!0?M("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function S(l,b){return b===null?null:M("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},b)}let k=!1;return Pe(()=>{k=!0}),$e(()=>{k===!0&&t.autofocus===!0&&c.focus()}),ie(()=>{Ie.value===!0&&t.for===void 0&&(e.targetUid.value=re()),t.autofocus===!0&&c.focus()}),ee(()=>{C!==null&&clearTimeout(C)}),Object.assign(c,{focus:p,blur:B}),function(){const b=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...z.value}:z.value;return M("label",{ref:e.rootRef,class:[I.value,d.class],style:d.style,...b},[i.before!==void 0?M("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:X},i.before()):null,M("div",{class:"q-field__inner relative-position col self-stretch"},[M("div",{ref:e.controlRef,class:$.value,tabindex:-1,...e.controlEvents},r()),P.value===!0?m():null]),i.after!==void 0?M("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:X},i.after()):null])}}const pe={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},le={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Fe=Object.keys(le);Fe.forEach(e=>{le[e].regex=new RegExp(le[e].pattern)});const Ct=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Fe.join("")+"])|(.)","g"),xe=/[.*+?^${}()|[\]\\]/g,T=String.fromCharCode(1),wt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function St(e,t,u,i){let d,c,f,C,E,q;const y=D(null),v=D(_());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}j(()=>e.type+e.autogrow,Z),j(()=>e.mask,a=>{if(a!==void 0)I(v.value,!0);else{const o=p(v.value);Z(),e.modelValue!==o&&t("update:modelValue",o)}}),j(()=>e.fillMask+e.reverseFillMask,()=>{y.value===!0&&I(v.value,!0)}),j(()=>e.unmaskedValue,()=>{y.value===!0&&I(v.value)});function _(){if(Z(),y.value===!0){const a=z(p(e.modelValue));return e.fillMask!==!1?B(a):a}return e.modelValue}function P(a){if(a<d.length)return d.slice(-a);let o="",s=d;const r=s.indexOf(T);if(r>-1){for(let g=a-s.length;g>0;g--)o+=T;s=s.slice(0,r)+o+s.slice(r)}return s}function Z(){if(y.value=e.mask!==void 0&&e.mask.length>0&&H(),y.value===!1){C=void 0,d="",c="";return}const a=pe[e.mask]===void 0?e.mask:pe[e.mask],o=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",s=o.replace(xe,"\\$&"),r=[],g=[],m=[];let S=e.reverseFillMask===!0,k="",l="";a.replace(Ct,(V,n,F,Q,N)=>{if(Q!==void 0){const O=le[Q];m.push(O),l=O.negate,S===!0&&(g.push("(?:"+l+"+)?("+O.pattern+"+)?(?:"+l+"+)?("+O.pattern+"+)?"),S=!1),g.push("(?:"+l+"+)?("+O.pattern+")?")}else if(F!==void 0)k="\\"+(F==="\\"?"":F),m.push(F),r.push("([^"+k+"]+)?"+k+"?");else{const O=n!==void 0?n:N;k=O==="\\"?"\\\\\\\\":O.replace(xe,"\\\\$&"),m.push(O),r.push("([^"+k+"]+)?"+k+"?")}});const b=new RegExp("^"+r.join("")+"("+(k===""?".":"[^"+k+"]")+"+)?"+(k===""?"":"["+k+"]*")+"$"),L=g.length-1,w=g.map((V,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+V):n===L?new RegExp("^"+V+"("+(l===""?".":l)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+V));f=m,C=V=>{const n=b.exec(e.reverseFillMask===!0?V:V.slice(0,m.length+1));n!==null&&(V=n.slice(1).join(""));const F=[],Q=w.length;for(let N=0,O=V;N<Q;N++){const U=w[N].exec(O);if(U===null)break;O=O.slice(U.shift().length),F.push(...U)}return F.length>0?F.join(""):V},d=m.map(V=>typeof V=="string"?V:T).join(""),c=d.split(T).join(o)}function I(a,o,s){const r=i.value,g=r.selectionEnd,m=r.value.length-g,S=p(a);o===!0&&Z();const k=z(S),l=e.fillMask!==!1?B(k):k,b=v.value!==l;r.value!==l&&(r.value=l),b===!0&&(v.value=l),document.activeElement===r&&Y(()=>{if(l===c){const w=e.reverseFillMask===!0?c.length:0;r.setSelectionRange(w,w,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const w=r.selectionEnd;let V=g-1;for(let n=E;n<=V&&n<w;n++)d[n]!==T&&V++;A.right(r,V);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)>-1){const w=e.reverseFillMask===!0?g===0?l.length>k.length?1:0:Math.max(0,l.length-(l===c?0:Math.min(k.length,m)+1))+1:g;r.setSelectionRange(w,w,"forward");return}if(e.reverseFillMask===!0)if(b===!0){const w=Math.max(0,l.length-(l===c?0:Math.min(k.length,m+1)));w===1&&g===1?r.setSelectionRange(w,w,"forward"):A.rightReverse(r,w)}else{const w=l.length-m;r.setSelectionRange(w,w,"backward")}else if(b===!0){const w=Math.max(0,d.indexOf(T),Math.min(k.length,g)-1);A.right(r,w)}else{const w=g-1;A.right(r,w)}});const L=e.unmaskedValue===!0?p(l):l;String(e.modelValue)!==L&&u(L,!0)}function $(a,o,s){const r=z(p(a.value));o=Math.max(0,d.indexOf(T),Math.min(r.length,o)),E=o,a.setSelectionRange(o,s,"forward")}const A={left(a,o){const s=d.slice(o-1).indexOf(T)===-1;let r=Math.max(0,o-1);for(;r>=0;r--)if(d[r]===T){o=r,s===!0&&o++;break}if(r<0&&d[o]!==void 0&&d[o]!==T)return A.right(a,0);o>=0&&a.setSelectionRange(o,o,"backward")},right(a,o){const s=a.value.length;let r=Math.min(s,o+1);for(;r<=s;r++)if(d[r]===T){o=r;break}else d[r-1]===T&&(o=r);if(r>s&&d[o-1]!==void 0&&d[o-1]!==T)return A.left(a,s);a.setSelectionRange(o,o,"forward")},leftReverse(a,o){const s=P(a.value.length);let r=Math.max(0,o-1);for(;r>=0;r--)if(s[r-1]===T){o=r;break}else if(s[r]===T&&(o=r,r===0))break;if(r<0&&s[o]!==void 0&&s[o]!==T)return A.rightReverse(a,0);o>=0&&a.setSelectionRange(o,o,"backward")},rightReverse(a,o){const s=a.value.length,r=P(s),g=r.slice(0,o+1).indexOf(T)===-1;let m=Math.min(s,o+1);for(;m<=s;m++)if(r[m-1]===T){o=m,o>0&&g===!0&&o--;break}if(m>s&&r[o-1]!==void 0&&r[o-1]!==T)return A.leftReverse(a,s);a.setSelectionRange(o,o,"forward")}};function W(a){t("click",a),q=void 0}function K(a){if(t("keydown",a),je(a)===!0)return;const o=i.value,s=o.selectionStart,r=o.selectionEnd;if(a.shiftKey||(q=void 0),a.keyCode===37||a.keyCode===39){a.shiftKey&&q===void 0&&(q=o.selectionDirection==="forward"?s:r);const g=A[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(a.preventDefault(),g(o,q===s?r:s),a.shiftKey){const m=o.selectionStart;o.setSelectionRange(Math.min(q,m),Math.max(q,m),"forward")}}else a.keyCode===8&&e.reverseFillMask!==!0&&s===r?(A.left(o,s),o.setSelectionRange(o.selectionStart,r,"backward")):a.keyCode===46&&e.reverseFillMask===!0&&s===r&&(A.rightReverse(o,r),o.setSelectionRange(s,o.selectionEnd,"forward"))}function z(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return R(a);const o=f;let s=0,r="";for(let g=0;g<o.length;g++){const m=a[s],S=o[g];if(typeof S=="string")r+=S,m===S&&s++;else if(m!==void 0&&S.regex.test(m))r+=S.transform!==void 0?S.transform(m):m,s++;else return r}return r}function R(a){const o=f,s=d.indexOf(T);let r=a.length-1,g="";for(let m=o.length-1;m>=0&&r>-1;m--){const S=o[m];let k=a[r];if(typeof S=="string")g=S+g,k===S&&r--;else if(k!==void 0&&S.regex.test(k))do g=(S.transform!==void 0?S.transform(k):k)+g,r--,k=a[r];while(s===m&&k!==void 0&&S.regex.test(k));else return g}return g}function p(a){return typeof a!="string"||C===void 0?typeof a=="number"?C(""+a):a:C(a)}function B(a){return c.length-a.length<=0?a:e.reverseFillMask===!0&&a.length>0?c.slice(0,-a.length)+a:a+c.slice(a.length)}return{innerValue:v,hasMask:y,moveCursorForPaste:$,updateMaskValue:I,onMaskedKeydown:K,onMaskedClick:W}}function Mt(e,t){function u(){const i=e.modelValue;try{const d="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(c=>{d.items.add(c)}),{files:d.files}}catch{return{files:void 0}}}return t===!0?x(()=>{if(e.type==="file")return u()}):x(u)}const qt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Rt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Ft=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,At=/[a-z0-9_ -]$/i;function Vt(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(Ke.is.firefox===!0?At.test(u.data)===!1:qt.test(u.data)===!0||Rt.test(u.data)===!0||Ft.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}var $t=Me({name:"QInput",inheritAttrs:!1,props:{...kt,...wt,...Xe,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...yt,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:i}=J(),{$q:d}=i,c={};let f=NaN,C,E,q=null,y;const v=D(null),H=Ge(e),{innerValue:_,hasMask:P,moveCursorForPaste:Z,updateMaskValue:I,onMaskedKeydown:$,onMaskedClick:A}=St(e,t,k,v),W=Mt(e,!0),K=x(()=>ue(_.value)),z=Vt(m),R=pt(),p=x(()=>e.type==="textarea"||e.autogrow===!0),B=x(()=>p.value===!0||["text","search","url","tel","password"].includes(e.type)),a=x(()=>{const n={...R.splitAttrs.listeners.value,onInput:m,onPaste:g,onChange:b,onBlur:L,onFocus:ce};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=z,P.value===!0&&(n.onKeydown=$,n.onClick=A),e.autogrow===!0&&(n.onAnimationend=S),n}),o=x(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...R.splitAttrs.attributes.value,id:R.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return p.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});j(()=>e.type,()=>{v.value&&(v.value.value=e.modelValue)}),j(()=>e.modelValue,n=>{if(P.value===!0){if(E===!0&&(E=!1,String(n)===f))return;I(n)}else _.value!==n&&(_.value=n,e.type==="number"&&c.hasOwnProperty("value")===!0&&(C===!0?C=!1:delete c.value));e.autogrow===!0&&Y(l)}),j(()=>e.autogrow,n=>{n===!0?Y(l):v.value!==null&&u.rows>0&&(v.value.style.height="auto")}),j(()=>e.dense,()=>{e.autogrow===!0&&Y(l)});function s(){se(()=>{const n=document.activeElement;v.value!==null&&v.value!==n&&(n===null||n.id!==R.targetUid.value)&&v.value.focus({preventScroll:!0})})}function r(){v.value!==null&&v.value.select()}function g(n){if(P.value===!0&&e.reverseFillMask!==!0){const F=n.target;Z(F,F.selectionStart,F.selectionEnd)}t("paste",n)}function m(n){if(!n||!n.target)return;if(e.type==="file"){t("update:modelValue",n.target.files);return}const F=n.target.value;if(n.target.qComposing===!0){c.value=F;return}if(P.value===!0)I(F,!1,n.inputType);else if(k(F),B.value===!0&&n.target===document.activeElement){const{selectionStart:Q,selectionEnd:N}=n.target;Q!==void 0&&N!==void 0&&Y(()=>{n.target===document.activeElement&&F.indexOf(n.target.value)===0&&n.target.setSelectionRange(Q,N)})}e.autogrow===!0&&l()}function S(n){t("animationend",n),l()}function k(n,F){y=()=>{q=null,e.type!=="number"&&c.hasOwnProperty("value")===!0&&delete c.value,e.modelValue!==n&&f!==n&&(f=n,F===!0&&(E=!0),t("update:modelValue",n),Y(()=>{f===n&&(f=NaN)})),y=void 0},e.type==="number"&&(C=!0,c.value=n),e.debounce!==void 0?(q!==null&&clearTimeout(q),c.value=n,q=setTimeout(y,e.debounce)):y()}function l(){requestAnimationFrame(()=>{const n=v.value;if(n!==null){const F=n.parentNode.style,{scrollTop:Q}=n,{overflowY:N,maxHeight:O}=d.platform.is.firefox===!0?{}:window.getComputedStyle(n),U=N!==void 0&&N!=="scroll";U===!0&&(n.style.overflowY="hidden"),F.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.height=n.scrollHeight+"px",U===!0&&(n.style.overflowY=parseInt(O,10)<n.scrollHeight?"auto":"hidden"),F.marginBottom="",n.scrollTop=Q}})}function b(n){z(n),q!==null&&(clearTimeout(q),q=null),y!==void 0&&y(),t("change",n.target.value)}function L(n){n!==void 0&&ce(n),q!==null&&(clearTimeout(q),q=null),y!==void 0&&y(),C=!1,E=!1,delete c.value,e.type!=="file"&&setTimeout(()=>{v.value!==null&&(v.value.value=_.value!==void 0?_.value:"")})}function w(){return c.hasOwnProperty("value")===!0?c.value:_.value!==void 0?_.value:""}ee(()=>{L()}),ie(()=>{e.autogrow===!0&&l()}),Object.assign(R,{innerValue:_,fieldClass:x(()=>`q-${p.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:x(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:v,emitValue:k,hasValue:K,floatingLabel:x(()=>K.value===!0&&(e.type!=="number"||isNaN(_.value)===!1)||ue(e.displayValue)),getControl:()=>M(p.value===!0?"textarea":"input",{ref:v,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...o.value,...a.value,...e.type!=="file"?{value:w()}:W.value}),getShadowControl:()=>M("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(p.value===!0?"":" text-no-wrap")},[M("span",{class:"invisible"},w()),M("span",e.shadowText)])});const V=xt(R);return Object.assign(i,{focus:s,select:r,getNativeElement:()=>v.value}),Ce(i,"nativeEl",()=>v.value),V}});function It(){const e=new Map;return{getCache:function(t,u){return e[t]===void 0?e[t]=u:e[t]},getCacheWithFn:function(t,u){return e[t]===void 0?e[t]=u():e[t]}}}var Dt=Me({name:"QMenu",inheritAttrs:!1,props:{...Ne,...it,...qe,...et,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:fe},self:{type:String,validator:fe},offset:{type:Array,validator:Ze},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...st,"click","escapeKey"],setup(e,{slots:t,emit:u,attrs:i}){let d=null,c,f,C;const E=J(),{proxy:q}=E,{$q:y}=q,v=D(null),H=D(!1),_=x(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),P=Re(e,y),{registerTick:Z,removeTick:I}=tt(),{registerTimeout:$}=dt(),{transitionProps:A,transitionStyle:W}=nt(e),{localScrollTarget:K,changeScrollEvent:z,unconfigureScrollTarget:R}=Ue(e,F),{anchorEl:p,canShow:B}=Qe({showing:H}),{hide:a}=ct({showing:H,canShow:B,handleShow:w,handleHide:V,hideOnRouteChange:_,processOnMount:!0}),{showPortal:o,hidePortal:s,renderPortal:r}=lt(E,v,Ae,"menu"),g={anchorEl:p,innerRef:v,onClickOutside(h){if(e.persistent!==!0&&H.value===!0)return a(h),(h.type==="touchstart"||h.target.classList.contains("q-dialog__backdrop"))&&we(h),!0}},m=x(()=>ge(e.anchor||(e.cover===!0?"center middle":"bottom start"),y.lang.rtl)),S=x(()=>e.cover===!0?m.value:ge(e.self||"top start",y.lang.rtl)),k=x(()=>(e.square===!0?" q-menu--square":"")+(P.value===!0?" q-menu--dark q-dark":"")),l=x(()=>e.autoClose===!0?{onClick:Q}:{}),b=x(()=>H.value===!0&&e.persistent!==!0);j(b,h=>{h===!0?(ut(O),Ye(g)):(me(O),ve(g))});function L(){se(()=>{let h=v.value;h&&h.contains(document.activeElement)!==!0&&(h=h.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||h.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||h.querySelector("[autofocus], [data-autofocus]")||h,h.focus({preventScroll:!0}))})}function w(h){if(d=e.noRefocus===!1?document.activeElement:null,ot(N),o(),F(),c=void 0,h!==void 0&&(e.touchPosition||e.contextMenu)){const oe=ze(h);if(oe.left!==void 0){const{top:Ve,left:Ee}=p.value.getBoundingClientRect();c={left:oe.left-Ee,top:oe.top-Ve}}}f===void 0&&(f=j(()=>y.screen.width+"|"+y.screen.height+"|"+e.self+"|"+e.anchor+"|"+y.lang.rtl,U)),e.noFocus!==!0&&document.activeElement.blur(),Z(()=>{U(),e.noFocus!==!0&&L()}),$(()=>{y.platform.is.ios===!0&&(C=e.autoClose,v.value.click()),U(),o(!0),u("show",h)},e.transitionDuration)}function V(h){I(),s(),n(!0),d!==null&&(h===void 0||h.qClickOutside!==!0)&&(((h&&h.type.indexOf("key")===0?d.closest('[tabindex]:not([tabindex^="-"])'):void 0)||d).focus(),d=null),$(()=>{s(!0),u("hide",h)},e.transitionDuration)}function n(h){c=void 0,f!==void 0&&(f(),f=void 0),(h===!0||H.value===!0)&&(at(N),R(),ve(g),me(O)),h!==!0&&(d=null)}function F(){(p.value!==null||e.scrollTarget!==void 0)&&(K.value=ft(p.value,e.scrollTarget),z(K.value,U))}function Q(h){C!==!0?(rt(q,h),u("click",h)):C=!1}function N(h){b.value===!0&&e.noFocus!==!0&&He(v.value,h.target)!==!0&&L()}function O(h){u("escapeKey"),a(h)}function U(){const h=v.value;h===null||p.value===null||We({el:h,offset:e.offset,anchorEl:p.value,anchorOrigin:m.value,selfOrigin:S.value,absoluteOffset:c,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Ae(){return M(Se,A.value,()=>H.value===!0?M("div",{role:"menu",...i,ref:v,tabindex:-1,class:["q-menu q-position-engine scroll"+k.value,i.class],style:[i.style,W.value],...l.value},G(t.default)):null)}return ee(n),Object.assign(q,{focus:L,updatePosition:U}),r}});export{$t as Q,kt as a,yt as b,xt as c,pt as d,Dt as e,ue as f,Vt as g,It as u};
