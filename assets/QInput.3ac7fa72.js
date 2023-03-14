import{u as p,a as ee,f as W,c as te,b as ae,d as ne}from"./use-key-composition.484f64ac.js";import{r as Q,u as Z,q as z,a4 as le,a as T,c as re,M as X,x as ue,v as ie,h as _,ae as oe,y as se}from"./index.95bb4c97.js";import{u as ce,c as fe}from"./use-form.1cb84069.js";import{o as de}from"./scroll.63c2128a.js";const Y={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},$={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},J=Object.keys($);J.forEach(e=>{$[e].regex=new RegExp($[e].pattern)});const ge=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+J.join("")+"])|(.)","g"),G=/[.*+?^${}()|[\]\\]/g,h=String.fromCharCode(1),me={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function ve(e,b,q,C){let c,d,O,R;const F=Q(null),k=Q(m());function E(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}Z(()=>e.type+e.autogrow,y),Z(()=>e.mask,t=>{if(t!==void 0)P(k.value,!0);else{const n=N(k.value);y(),e.modelValue!==n&&b("update:modelValue",n)}}),Z(()=>e.fillMask+e.reverseFillMask,()=>{F.value===!0&&P(k.value,!0)}),Z(()=>e.unmaskedValue,()=>{F.value===!0&&P(k.value)});function m(){if(y(),F.value===!0){const t=D(N(e.modelValue));return e.fillMask!==!1?I(t):t}return e.modelValue}function K(t){if(t<c.length)return c.slice(-t);let n="",r=c;const u=r.indexOf(h);if(u>-1){for(let i=t-r.length;i>0;i--)n+=h;r=r.slice(0,u)+n+r.slice(u)}return r}function y(){if(F.value=e.mask!==void 0&&e.mask.length>0&&E(),F.value===!1){R=void 0,c="",d="";return}const t=Y[e.mask]===void 0?e.mask:Y[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",r=n.replace(G,"\\$&"),u=[],i=[],l=[];let f=e.reverseFillMask===!0,o="",g="";t.replace(ge,(x,V,A,a,v)=>{if(a!==void 0){const M=$[a];l.push(M),g=M.negate,f===!0&&(i.push("(?:"+g+"+)?("+M.pattern+"+)?(?:"+g+"+)?("+M.pattern+"+)?"),f=!1),i.push("(?:"+g+"+)?("+M.pattern+")?")}else if(A!==void 0)o="\\"+(A==="\\"?"":A),l.push(A),u.push("([^"+o+"]+)?"+o+"?");else{const M=V!==void 0?V:v;o=M==="\\"?"\\\\\\\\":M.replace(G,"\\\\$&"),l.push(M),u.push("([^"+o+"]+)?"+o+"?")}});const j=new RegExp("^"+u.join("")+"("+(o===""?".":"[^"+o+"]")+"+)?"+(o===""?"":"["+o+"]*")+"$"),S=i.length-1,s=i.map((x,V)=>V===0&&e.reverseFillMask===!0?new RegExp("^"+r+"*"+x):V===S?new RegExp("^"+x+"("+(g===""?".":g)+"+)?"+(e.reverseFillMask===!0?"$":r+"*")):new RegExp("^"+x));O=l,R=x=>{const V=j.exec(e.reverseFillMask===!0?x:x.slice(0,l.length));V!==null&&(x=V.slice(1).join(""));const A=[],a=s.length;for(let v=0,M=x;v<a;v++){const B=s[v].exec(M);if(B===null)break;M=M.slice(B.shift().length),A.push(...B)}return A.length>0?A.join(""):x},c=l.map(x=>typeof x=="string"?x:h).join(""),d=c.split(h).join(n)}function P(t,n,r){const u=C.value,i=u.selectionEnd,l=u.value.length-i,f=N(t);n===!0&&y();const o=D(f),g=e.fillMask!==!1?I(o):o,j=k.value!==g;u.value!==g&&(u.value=g),j===!0&&(k.value=g),document.activeElement===u&&z(()=>{if(g===d){const s=e.reverseFillMask===!0?d.length:0;u.setSelectionRange(s,s,"forward");return}if(r==="insertFromPaste"&&e.reverseFillMask!==!0){const s=i-1;w.right(u,s,s);return}if(["deleteContentBackward","deleteContentForward"].indexOf(r)>-1){const s=e.reverseFillMask===!0?i===0?g.length>o.length?1:0:Math.max(0,g.length-(g===d?0:Math.min(o.length,l)+1))+1:i;u.setSelectionRange(s,s,"forward");return}if(e.reverseFillMask===!0)if(j===!0){const s=Math.max(0,g.length-(g===d?0:Math.min(o.length,l+1)));s===1&&i===1?u.setSelectionRange(s,s,"forward"):w.rightReverse(u,s,s)}else{const s=g.length-l;u.setSelectionRange(s,s,"backward")}else if(j===!0){const s=Math.max(0,c.indexOf(h),Math.min(o.length,i)-1);w.right(u,s,s)}else{const s=i-1;w.right(u,s,s)}});const S=e.unmaskedValue===!0?N(g):g;String(e.modelValue)!==S&&q(S,!0)}function U(t,n,r){const u=D(N(t.value));n=Math.max(0,c.indexOf(h),Math.min(u.length,n)),t.setSelectionRange(n,r,"forward")}const w={left(t,n,r,u){const i=c.slice(n-1).indexOf(h)===-1;let l=Math.max(0,n-1);for(;l>=0;l--)if(c[l]===h){n=l,i===!0&&n++;break}if(l<0&&c[n]!==void 0&&c[n]!==h)return w.right(t,0,0);n>=0&&t.setSelectionRange(n,u===!0?r:n,"backward")},right(t,n,r,u){const i=t.value.length;let l=Math.min(i,r+1);for(;l<=i;l++)if(c[l]===h){r=l;break}else c[l-1]===h&&(r=l);if(l>i&&c[r-1]!==void 0&&c[r-1]!==h)return w.left(t,i,i);t.setSelectionRange(u?n:r,r,"forward")},leftReverse(t,n,r,u){const i=K(t.value.length);let l=Math.max(0,n-1);for(;l>=0;l--)if(i[l-1]===h){n=l;break}else if(i[l]===h&&(n=l,l===0))break;if(l<0&&i[n]!==void 0&&i[n]!==h)return w.rightReverse(t,0,0);n>=0&&t.setSelectionRange(n,u===!0?r:n,"backward")},rightReverse(t,n,r,u){const i=t.value.length,l=K(i),f=l.slice(0,r+1).indexOf(h)===-1;let o=Math.min(i,r+1);for(;o<=i;o++)if(l[o-1]===h){r=o,r>0&&f===!0&&r--;break}if(o>i&&l[r-1]!==void 0&&l[r-1]!==h)return w.leftReverse(t,i,i);t.setSelectionRange(u===!0?n:r,r,"forward")}};function H(t){if(b("keydown",t),le(t)===!0)return;const n=C.value,r=n.selectionStart,u=n.selectionEnd;if(t.keyCode===37||t.keyCode===39){const i=w[(t.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];t.preventDefault(),i(n,r,u,t.shiftKey)}else t.keyCode===8&&e.reverseFillMask!==!0&&r===u?w.left(n,r,u,!0):t.keyCode===46&&e.reverseFillMask===!0&&r===u&&w.rightReverse(n,r,u,!0)}function D(t){if(t==null||t==="")return"";if(e.reverseFillMask===!0)return L(t);const n=O;let r=0,u="";for(let i=0;i<n.length;i++){const l=t[r],f=n[i];if(typeof f=="string")u+=f,l===f&&r++;else if(l!==void 0&&f.regex.test(l))u+=f.transform!==void 0?f.transform(l):l,r++;else return u}return u}function L(t){const n=O,r=c.indexOf(h);let u=t.length-1,i="";for(let l=n.length-1;l>=0&&u>-1;l--){const f=n[l];let o=t[u];if(typeof f=="string")i=f+i,o===f&&u--;else if(o!==void 0&&f.regex.test(o))do i=(f.transform!==void 0?f.transform(o):o)+i,u--,o=t[u];while(r===l&&o!==void 0&&f.regex.test(o));else return i}return i}function N(t){return typeof t!="string"||R===void 0?typeof t=="number"?R(""+t):t:R(t)}function I(t){return d.length-t.length<=0?t:e.reverseFillMask===!0&&t.length>0?d.slice(0,-t.length)+t:t+d.slice(t.length)}return{innerValue:k,hasMask:F,moveCursorForPaste:U,updateMaskValue:P,onMaskedKeydown:H}}function he(e,b){function q(){const C=e.modelValue;try{const c="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(C)===C&&("length"in C?Array.from(C):[C]).forEach(d=>{c.items.add(d)}),{files:c.files}}catch{return{files:void 0}}}return b===!0?T(()=>{if(e.type==="file")return q()}):T(q)}var ye=re({name:"QInput",inheritAttrs:!1,props:{...p,...me,...ce,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ee,"paste","change","keydown","animationend"],setup(e,{emit:b,attrs:q}){const{proxy:C}=se(),{$q:c}=C,d={};let O=NaN,R,F,k=null,E;const m=Q(null),K=fe(e),{innerValue:y,hasMask:P,moveCursorForPaste:U,updateMaskValue:w,onMaskedKeydown:H}=ve(e,b,j,m),D=he(e,!0),L=T(()=>W(y.value)),N=ne(o),I=te(),t=T(()=>e.type==="textarea"||e.autogrow===!0),n=T(()=>t.value===!0||["text","search","url","tel","password"].includes(e.type)),r=T(()=>{const a={...I.splitAttrs.listeners.value,onInput:o,onPaste:f,onChange:s,onBlur:x,onFocus:X};return a.onCompositionstart=a.onCompositionupdate=a.onCompositionend=N,P.value===!0&&(a.onKeydown=H),e.autogrow===!0&&(a.onAnimationend=g),a}),u=T(()=>{const a={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:K.value,...I.splitAttrs.attributes.value,id:I.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return t.value===!1&&(a.type=e.type),e.autogrow===!0&&(a.rows=1),a});Z(()=>e.type,()=>{m.value&&(m.value.value=e.modelValue)}),Z(()=>e.modelValue,a=>{if(P.value===!0){if(F===!0&&(F=!1,String(a)===O))return;w(a)}else y.value!==a&&(y.value=a,e.type==="number"&&d.hasOwnProperty("value")===!0&&(R===!0?R=!1:delete d.value));e.autogrow===!0&&z(S)}),Z(()=>e.autogrow,a=>{a===!0?z(S):m.value!==null&&q.rows>0&&(m.value.style.height="auto")}),Z(()=>e.dense,()=>{e.autogrow===!0&&z(S)});function i(){de(()=>{const a=document.activeElement;m.value!==null&&m.value!==a&&(a===null||a.id!==I.targetUid.value)&&m.value.focus({preventScroll:!0})})}function l(){m.value!==null&&m.value.select()}function f(a){if(P.value===!0&&e.reverseFillMask!==!0){const v=a.target;U(v,v.selectionStart,v.selectionEnd)}b("paste",a)}function o(a){if(!a||!a.target)return;if(e.type==="file"){b("update:modelValue",a.target.files);return}const v=a.target.value;if(a.target.qComposing===!0){d.value=v;return}if(P.value===!0)w(v,!1,a.inputType);else if(j(v),n.value===!0&&a.target===document.activeElement){const{selectionStart:M,selectionEnd:B}=a.target;M!==void 0&&B!==void 0&&z(()=>{a.target===document.activeElement&&v.indexOf(a.target.value)===0&&a.target.setSelectionRange(M,B)})}e.autogrow===!0&&S()}function g(a){b("animationend",a),S()}function j(a,v){E=()=>{k=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==a&&O!==a&&(O=a,v===!0&&(F=!0),b("update:modelValue",a),z(()=>{O===a&&(O=NaN)})),E=void 0},e.type==="number"&&(R=!0,d.value=a),e.debounce!==void 0?(k!==null&&clearTimeout(k),d.value=a,k=setTimeout(E,e.debounce)):E()}function S(){requestAnimationFrame(()=>{const a=m.value;if(a!==null){const v=a.parentNode.style,{overflow:M}=a.style;c.platform.is.firefox!==!0&&(a.style.overflow="hidden"),v.marginBottom=a.scrollHeight-1+"px",a.style.height="1px",a.style.height=a.scrollHeight+"px",a.style.overflow=M,v.marginBottom=""}})}function s(a){N(a),k!==null&&(clearTimeout(k),k=null),E!==void 0&&E(),b("change",a.target.value)}function x(a){a!==void 0&&X(a),k!==null&&(clearTimeout(k),k=null),E!==void 0&&E(),R=!1,F=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{m.value!==null&&(m.value.value=y.value!==void 0?y.value:"")})}function V(){return d.hasOwnProperty("value")===!0?d.value:y.value!==void 0?y.value:""}ue(()=>{x()}),ie(()=>{e.autogrow===!0&&S()}),Object.assign(I,{innerValue:y,fieldClass:T(()=>`q-${t.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:T(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:m,emitValue:j,hasValue:L,floatingLabel:T(()=>L.value===!0||W(e.displayValue)),getControl:()=>_(t.value===!0?"textarea":"input",{ref:m,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...u.value,...r.value,...e.type!=="file"?{value:V()}:D.value}),getShadowControl:()=>_("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(t.value===!0?"":" text-no-wrap")},[_("span",{class:"invisible"},V()),_("span",e.shadowText)])});const A=ae(I);return Object.assign(C,{focus:i,select:l,getNativeElement:()=>m.value}),oe(C,"nativeEl",()=>m.value),A}});export{ye as Q};
