import{u as ae,a as ne,b as le,c as ie,f as G,d as re}from"./rtl.a6fd2bff.js";import{r as X,w as I,C as L,ao as ue,a as A,c as oe,o as se,x as fe,d as U,a1 as de,g as ce,ap as J}from"./index.80d80d4a.js";import{u as ge,e as me}from"./ClosePopup.64d14126.js";import{d as ve}from"./use-tick.824a77db.js";const p={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},H={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},te=Object.keys(H);te.forEach(e=>{H[e].regex=new RegExp(H[e].pattern)});const he=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+te.join("")+"])|(.)","g"),ee=/[.*+?^${}()|[\]\\]/g,k=String.fromCharCode(1),ke={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Me(e,h,E,S){let c,g,T,V,j,w;const x=X(null),f=X(b());function Y(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}I(()=>e.type+e.autogrow,D),I(()=>e.mask,l=>{if(l!==void 0)K(f.value,!0);else{const a=F(f.value);D(),e.modelValue!==a&&h("update:modelValue",a)}}),I(()=>e.fillMask+e.reverseFillMask,()=>{x.value===!0&&K(f.value,!0)}),I(()=>e.unmaskedValue,()=>{x.value===!0&&K(f.value)});function b(){if(D(),x.value===!0){const l=q(F(e.modelValue));return e.fillMask!==!1?$(l):l}return e.modelValue}function N(l){if(l<c.length)return c.slice(-l);let a="",i=c;const n=i.indexOf(k);if(n>-1){for(let u=l-i.length;u>0;u--)a+=k;i=i.slice(0,n)+a+i.slice(n)}return i}function D(){if(x.value=e.mask!==void 0&&e.mask.length>0&&Y(),x.value===!1){V=void 0,c="",g="";return}const l=p[e.mask]===void 0?e.mask:p[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",i=a.replace(ee,"\\$&"),n=[],u=[],r=[];let v=e.reverseFillMask===!0,o="",s="";l.replace(he,(M,t,m,O,R)=>{if(O!==void 0){const y=H[O];r.push(y),s=y.negate,v===!0&&(u.push("(?:"+s+"+)?("+y.pattern+"+)?(?:"+s+"+)?("+y.pattern+"+)?"),v=!1),u.push("(?:"+s+"+)?("+y.pattern+")?")}else if(m!==void 0)o="\\"+(m==="\\"?"":m),r.push(m),n.push("([^"+o+"]+)?"+o+"?");else{const y=t!==void 0?t:R;o=y==="\\"?"\\\\\\\\":y.replace(ee,"\\\\$&"),r.push(y),n.push("([^"+o+"]+)?"+o+"?")}});const Z=new RegExp("^"+n.join("")+"("+(o===""?".":"[^"+o+"]")+"+)?"+(o===""?"":"["+o+"]*")+"$"),B=u.length-1,d=u.map((M,t)=>t===0&&e.reverseFillMask===!0?new RegExp("^"+i+"*"+M):t===B?new RegExp("^"+M+"("+(s===""?".":s)+"+)?"+(e.reverseFillMask===!0?"$":i+"*")):new RegExp("^"+M));T=r,V=M=>{const t=Z.exec(e.reverseFillMask===!0?M:M.slice(0,r.length+1));t!==null&&(M=t.slice(1).join(""));const m=[],O=d.length;for(let R=0,y=M;R<O;R++){const z=d[R].exec(y);if(z===null)break;y=y.slice(z.shift().length),m.push(...z)}return m.length>0?m.join(""):M},c=r.map(M=>typeof M=="string"?M:k).join(""),g=c.split(k).join(a)}function K(l,a,i){const n=S.value,u=n.selectionEnd,r=n.value.length-u,v=F(l);a===!0&&D();const o=q(v),s=e.fillMask!==!1?$(o):o,Z=f.value!==s;n.value!==s&&(n.value=s),Z===!0&&(f.value=s),document.activeElement===n&&L(()=>{if(s===g){const d=e.reverseFillMask===!0?g.length:0;n.setSelectionRange(d,d,"forward");return}if(i==="insertFromPaste"&&e.reverseFillMask!==!0){const d=n.selectionEnd;let M=u-1;for(let t=j;t<=M&&t<d;t++)c[t]!==k&&M++;C.right(n,M);return}if(["deleteContentBackward","deleteContentForward"].indexOf(i)>-1){const d=e.reverseFillMask===!0?u===0?s.length>o.length?1:0:Math.max(0,s.length-(s===g?0:Math.min(o.length,r)+1))+1:u;n.setSelectionRange(d,d,"forward");return}if(e.reverseFillMask===!0)if(Z===!0){const d=Math.max(0,s.length-(s===g?0:Math.min(o.length,r+1)));d===1&&u===1?n.setSelectionRange(d,d,"forward"):C.rightReverse(n,d)}else{const d=s.length-r;n.setSelectionRange(d,d,"backward")}else if(Z===!0){const d=Math.max(0,c.indexOf(k),Math.min(o.length,u)-1);C.right(n,d)}else{const d=u-1;C.right(n,d)}});const B=e.unmaskedValue===!0?F(s):s;String(e.modelValue)!==B&&E(B,!0)}function Q(l,a,i){const n=q(F(l.value));a=Math.max(0,c.indexOf(k),Math.min(n.length,a)),j=a,l.setSelectionRange(a,i,"forward")}const C={left(l,a){const i=c.slice(a-1).indexOf(k)===-1;let n=Math.max(0,a-1);for(;n>=0;n--)if(c[n]===k){a=n,i===!0&&a++;break}if(n<0&&c[a]!==void 0&&c[a]!==k)return C.right(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},right(l,a){const i=l.value.length;let n=Math.min(i,a+1);for(;n<=i;n++)if(c[n]===k){a=n;break}else c[n-1]===k&&(a=n);if(n>i&&c[a-1]!==void 0&&c[a-1]!==k)return C.left(l,i);l.setSelectionRange(a,a,"forward")},leftReverse(l,a){const i=N(l.value.length);let n=Math.max(0,a-1);for(;n>=0;n--)if(i[n-1]===k){a=n;break}else if(i[n]===k&&(a=n,n===0))break;if(n<0&&i[a]!==void 0&&i[a]!==k)return C.rightReverse(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},rightReverse(l,a){const i=l.value.length,n=N(i),u=n.slice(0,a+1).indexOf(k)===-1;let r=Math.min(i,a+1);for(;r<=i;r++)if(n[r-1]===k){a=r,a>0&&u===!0&&a--;break}if(r>i&&n[a-1]!==void 0&&n[a-1]!==k)return C.leftReverse(l,i);l.setSelectionRange(a,a,"forward")}};function W(l){h("click",l),w=void 0}function _(l){if(h("keydown",l),ue(l)===!0)return;const a=S.value,i=a.selectionStart,n=a.selectionEnd;if(l.shiftKey||(w=void 0),l.keyCode===37||l.keyCode===39){l.shiftKey&&w===void 0&&(w=a.selectionDirection==="forward"?i:n);const u=C[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(l.preventDefault(),u(a,w===i?n:i),l.shiftKey){const r=a.selectionStart;a.setSelectionRange(Math.min(w,r),Math.max(w,r),"forward")}}else l.keyCode===8&&e.reverseFillMask!==!0&&i===n?(C.left(a,i),a.setSelectionRange(a.selectionStart,n,"backward")):l.keyCode===46&&e.reverseFillMask===!0&&i===n&&(C.rightReverse(a,n),a.setSelectionRange(i,a.selectionEnd,"forward"))}function q(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return P(l);const a=T;let i=0,n="";for(let u=0;u<a.length;u++){const r=l[i],v=a[u];if(typeof v=="string")n+=v,r===v&&i++;else if(r!==void 0&&v.regex.test(r))n+=v.transform!==void 0?v.transform(r):r,i++;else return n}return n}function P(l){const a=T,i=c.indexOf(k);let n=l.length-1,u="";for(let r=a.length-1;r>=0&&n>-1;r--){const v=a[r];let o=l[n];if(typeof v=="string")u=v+u,o===v&&n--;else if(o!==void 0&&v.regex.test(o))do u=(v.transform!==void 0?v.transform(o):o)+u,n--,o=l[n];while(i===r&&o!==void 0&&v.regex.test(o));else return u}return u}function F(l){return typeof l!="string"||V===void 0?typeof l=="number"?V(""+l):l:V(l)}function $(l){return g.length-l.length<=0?l:e.reverseFillMask===!0&&l.length>0?g.slice(0,-l.length)+l:l+g.slice(l.length)}return{innerValue:f,hasMask:x,moveCursorForPaste:Q,updateMaskValue:K,onMaskedKeydown:_,onMaskedClick:W}}function we(e,h){function E(){const S=e.modelValue;try{const c="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(S)===S&&("length"in S?Array.from(S):[S]).forEach(g=>{c.items.add(g)}),{files:c.files}}catch{return{files:void 0}}}return h===!0?A(()=>{if(e.type==="file")return E()}):A(E)}var be=oe({name:"QInput",inheritAttrs:!1,props:{...ae,...ke,...ge,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ne,"paste","change","keydown","click","animationend"],setup(e,{emit:h,attrs:E}){const{proxy:S}=ce(),{$q:c}=S,g={};let T=NaN,V,j,w=null,x;const f=X(null),Y=me(e),{innerValue:b,hasMask:N,moveCursorForPaste:D,updateMaskValue:K,onMaskedKeydown:Q,onMaskedClick:C}=Me(e,h,o,f),W=we(e,!0),_=A(()=>G(b.value)),q=re(r),P=le(),F=A(()=>e.type==="textarea"||e.autogrow===!0),$=A(()=>F.value===!0||["text","search","url","tel","password"].includes(e.type)),l=A(()=>{const t={...P.splitAttrs.listeners.value,onInput:r,onPaste:u,onChange:Z,onBlur:B,onFocus:J};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=q,N.value===!0&&(t.onKeydown=Q,t.onClick=C),e.autogrow===!0&&(t.onAnimationend=v),t}),a=A(()=>{const t={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:Y.value,...P.splitAttrs.attributes.value,id:P.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return F.value===!1&&(t.type=e.type),e.autogrow===!0&&(t.rows=1),t});I(()=>e.type,()=>{f.value&&(f.value.value=e.modelValue)}),I(()=>e.modelValue,t=>{if(N.value===!0){if(j===!0&&(j=!1,String(t)===T))return;K(t)}else b.value!==t&&(b.value=t,e.type==="number"&&g.hasOwnProperty("value")===!0&&(V===!0?V=!1:delete g.value));e.autogrow===!0&&L(s)}),I(()=>e.autogrow,t=>{t===!0?L(s):f.value!==null&&E.rows>0&&(f.value.style.height="auto")}),I(()=>e.dense,()=>{e.autogrow===!0&&L(s)});function i(){ve(()=>{const t=document.activeElement;f.value!==null&&f.value!==t&&(t===null||t.id!==P.targetUid.value)&&f.value.focus({preventScroll:!0})})}function n(){f.value!==null&&f.value.select()}function u(t){if(N.value===!0&&e.reverseFillMask!==!0){const m=t.target;D(m,m.selectionStart,m.selectionEnd)}h("paste",t)}function r(t){if(!t||!t.target)return;if(e.type==="file"){h("update:modelValue",t.target.files);return}const m=t.target.value;if(t.target.qComposing===!0){g.value=m;return}if(N.value===!0)K(m,!1,t.inputType);else if(o(m),$.value===!0&&t.target===document.activeElement){const{selectionStart:O,selectionEnd:R}=t.target;O!==void 0&&R!==void 0&&L(()=>{t.target===document.activeElement&&m.indexOf(t.target.value)===0&&t.target.setSelectionRange(O,R)})}e.autogrow===!0&&s()}function v(t){h("animationend",t),s()}function o(t,m){x=()=>{w=null,e.type!=="number"&&g.hasOwnProperty("value")===!0&&delete g.value,e.modelValue!==t&&T!==t&&(T=t,m===!0&&(j=!0),h("update:modelValue",t),L(()=>{T===t&&(T=NaN)})),x=void 0},e.type==="number"&&(V=!0,g.value=t),e.debounce!==void 0?(w!==null&&clearTimeout(w),g.value=t,w=setTimeout(x,e.debounce)):x()}function s(){requestAnimationFrame(()=>{const t=f.value;if(t!==null){const m=t.parentNode.style,{scrollTop:O}=t,{overflowY:R,maxHeight:y}=c.platform.is.firefox===!0?{}:window.getComputedStyle(t),z=R!==void 0&&R!=="scroll";z===!0&&(t.style.overflowY="hidden"),m.marginBottom=t.scrollHeight-1+"px",t.style.height="1px",t.style.height=t.scrollHeight+"px",z===!0&&(t.style.overflowY=parseInt(y,10)<t.scrollHeight?"auto":"hidden"),m.marginBottom="",t.scrollTop=O}})}function Z(t){q(t),w!==null&&(clearTimeout(w),w=null),x!==void 0&&x(),h("change",t.target.value)}function B(t){t!==void 0&&J(t),w!==null&&(clearTimeout(w),w=null),x!==void 0&&x(),V=!1,j=!1,delete g.value,e.type!=="file"&&setTimeout(()=>{f.value!==null&&(f.value.value=b.value!==void 0?b.value:"")})}function d(){return g.hasOwnProperty("value")===!0?g.value:b.value!==void 0?b.value:""}se(()=>{B()}),fe(()=>{e.autogrow===!0&&s()}),Object.assign(P,{innerValue:b,fieldClass:A(()=>`q-${F.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:A(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:f,emitValue:o,hasValue:_,floatingLabel:A(()=>_.value===!0&&(e.type!=="number"||isNaN(b.value)===!1)||G(e.displayValue)),getControl:()=>U(F.value===!0?"textarea":"input",{ref:f,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...l.value,...e.type!=="file"?{value:d()}:W.value}),getShadowControl:()=>U("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(F.value===!0?"":" text-no-wrap")},[U("span",{class:"invisible"},d()),U("span",e.shadowText)])});const M=ie(P);return Object.assign(S,{focus:i,select:n,getNativeElement:()=>f.value}),de(S,"nativeEl",()=>f.value),M}});function Fe(){const e=new Map;return{getCache:function(h,E){return e[h]===void 0?e[h]=E:e[h]},getCacheWithFn:function(h,E){return e[h]===void 0?e[h]=E():e[h]}}}export{be as Q,Fe as u};
