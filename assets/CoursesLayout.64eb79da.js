import{Q as bn,a as xt,b as wn,C as Bt}from"./ClosePopup.1215200b.js";import{Q as Sn}from"./QInput.c96d059c.js";import{e as En,v as w,g as E,V as In,n as Tn,W as Cn,X as On,s as Rn,h as O,B as An,Y as $e,k as kn,Z as De,d as It,_ as Tt,r as X,o as k,E as he,I as ht,$ as Pn,a as g,w as y,a0 as Nn,F as J,P as de,a1 as et,c as fe,G as $,Q as A,a2 as Dn,a3 as tt}from"./index.89ecb77b.js";import{Q as ft}from"./QCard.9c4b1f49.js";import{Q as $t}from"./QSpace.2bffdfce.js";import{Q as rt}from"./QBar.bf6dddfe.js";import{Q as Mn,a as Ln,b as Ft}from"./QDrawer.dca111a5.js";import{u as Un,a as xn}from"./use-dark.6ea80c57.js";import{b as Ht,c as Bn,Q as $n,a as Fn}from"./QLayout.03e9d4d2.js";import{T as zt}from"./TouchPan.85f359cb.js";import{s as Vt,d as nt}from"./scroll.6be757cb.js";import{u as Ct}from"./store.ce5b3eea.js";import{T as Hn,P as zn}from"./PreferencesComponent.343c179e.js";import{W as Vn}from"./WPComponent.c2c8ec34.js";import{Q as jn}from"./QExpansionItem.39d1d6c9.js";import{Q as Wn}from"./QList.a9cf3a71.js";import"./transform.9aa67f3e.js";import{o as qn,l as Gn,m as Ot,w as Rt,i as me,n as Kn,p as wr,q as pt,J as gt,_ as mt,E as Jn,h as Sr,t as vt,v as Qn}from"./firebase.84a31673.js";import{s as Y}from"./selectAll.be636dd1.js";import"./use-prevent-scroll.dfd0406b.js";import"./uid.42677368.js";import"./touch.497300e2.js";import"./axios.84ae42e4.js";import"./QImg.76cbca42.js";import"./QKnob.f91eaad9.js";import"./QToggle.4b6630a7.js";import"./QMenu.76705f48.js";import"./QSelect.37153212.js";const jt=["vertical","horizontal"],it={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Wt={prevent:!0,mouse:!0,mouseAllDir:!0},qt=t=>t>=250?50:Math.ceil(t/5);var Gt=En({name:"QScrollArea",props:{...Un,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(t,{slots:e,emit:r}){const n=w(!1),i=w(!1),s=w(!1),o={vertical:w(0),horizontal:w(0)},a={vertical:{ref:w(null),position:w(0),size:w(0)},horizontal:{ref:w(null),position:w(0),size:w(0)}},{proxy:c}=kn(),l=xn(t,c.$q);let u=null,h;const m=w(null),S=E(()=>"q-scrollarea"+(l.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=E(()=>{const d=a.vertical.size.value-o.vertical.value;if(d<=0)return 0;const p=De(a.vertical.position.value/d,0,1);return Math.round(p*1e4)/1e4}),a.vertical.thumbHidden=E(()=>(t.visible===null?s.value:t.visible)!==!0&&n.value===!1&&i.value===!1||a.vertical.size.value<=o.vertical.value+1),a.vertical.thumbStart=E(()=>a.vertical.percentage.value*(o.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=E(()=>Math.round(De(o.vertical.value*o.vertical.value/a.vertical.size.value,qt(o.vertical.value),o.vertical.value))),a.vertical.style=E(()=>({...t.thumbStyle,...t.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=E(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=E(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=E(()=>{const d=a.horizontal.size.value-o.horizontal.value;if(d<=0)return 0;const p=De(Math.abs(a.horizontal.position.value)/d,0,1);return Math.round(p*1e4)/1e4}),a.horizontal.thumbHidden=E(()=>(t.visible===null?s.value:t.visible)!==!0&&n.value===!1&&i.value===!1||a.horizontal.size.value<=o.horizontal.value+1),a.horizontal.thumbStart=E(()=>a.horizontal.percentage.value*(o.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=E(()=>Math.round(De(o.horizontal.value*o.horizontal.value/a.horizontal.size.value,qt(o.horizontal.value),o.horizontal.value))),a.horizontal.style=E(()=>({...t.thumbStyle,...t.horizontalThumbStyle,[c.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=E(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=E(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const C=E(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?t.contentStyle:t.contentActiveStyle),Ce=[[zt,d=>{ae(d,"vertical")},void 0,{vertical:!0,...Wt}]],ne=[[zt,d=>{ae(d,"horizontal")},void 0,{horizontal:!0,...Wt}]];function ie(){const d={};return jt.forEach(p=>{const _=a[p];d[p+"Position"]=_.position.value,d[p+"Percentage"]=_.percentage.value,d[p+"Size"]=_.size.value,d[p+"ContainerSize"]=o[p].value}),d}const se=In(()=>{const d=ie();d.ref=c,r("scroll",d)},0);function Q(d,p,_){if(jt.includes(d)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(d==="vertical"?Vt:nt)(m.value,p,_)}function Oe({height:d,width:p}){let _=!1;o.vertical.value!==d&&(o.vertical.value=d,_=!0),o.horizontal.value!==p&&(o.horizontal.value=p,_=!0),_===!0&&ke()}function Re({position:d}){let p=!1;a.vertical.position.value!==d.top&&(a.vertical.position.value=d.top,p=!0),a.horizontal.position.value!==d.left&&(a.horizontal.position.value=d.left,p=!0),p===!0&&ke()}function oe({height:d,width:p}){a.horizontal.size.value!==p&&(a.horizontal.size.value=p,ke()),a.vertical.size.value!==d&&(a.vertical.size.value=d,ke())}function ae(d,p){const _=a[p];if(d.isFirst===!0){if(_.thumbHidden.value===!0)return;h=_.position.value,i.value=!0}else if(i.value!==!0)return;d.isFinal===!0&&(i.value=!1);const j=it[p],Ne=o[p].value,vn=(_.size.value-Ne)/(Ne-_.thumbSize.value),_n=d.distance[j.dist],yn=h+(d.direction===j.dir?1:-1)*_n*vn;Ut(yn,p)}function Ae(d,p){const _=a[p];if(_.thumbHidden.value!==!0){const j=d[it[p].offset];if(j<_.thumbStart.value||j>_.thumbStart.value+_.thumbSize.value){const Ne=j-_.thumbSize.value/2;Ut(Ne/o[p].value*_.size.value,p)}_.ref.value!==null&&_.ref.value.dispatchEvent(new MouseEvent(d.type,d))}}function ce(d){Ae(d,"vertical")}function Ze(d){Ae(d,"horizontal")}function ke(){n.value=!0,u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,n.value=!1},t.delay),t.onScroll!==void 0&&se()}function Ut(d,p){m.value[it[p].scroll]=d}function gn(){s.value=!0}function mn(){s.value=!1}let Pe=null;return Tn(()=>c.$q.lang.rtl,d=>{m.value!==null&&nt(m.value,Math.abs(a.horizontal.position.value)*(d===!0?-1:1))}),Cn(()=>{Pe={top:a.vertical.position.value,left:a.horizontal.position.value}}),On(()=>{if(Pe===null)return;const d=m.value;d!==null&&(nt(d,Pe.left),Vt(d,Pe.top))}),Rn(se.cancel),Object.assign(c,{getScrollTarget:()=>m.value,getScroll:ie,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:Q,setScrollPercentage(d,p,_){Q(d,p*(a[d].size.value-o[d].value)*(d==="horizontal"&&c.$q.lang.rtl===!0?-1:1),_)}}),()=>O("div",{class:S.value,onMouseenter:gn,onMouseleave:mn},[O("div",{ref:m,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:t.tabindex!==void 0?t.tabindex:void 0},[O("div",{class:"q-scrollarea__content absolute",style:C.value},An(e.default,[O(Ht,{debounce:0,onResize:oe})])),O(Bn,{axis:"both",onScroll:Re})]),O(Ht,{debounce:0,onResize:Oe}),O("div",{class:a.vertical.barClass.value,style:[t.barStyle,t.verticalBarStyle],"aria-hidden":"true",onMousedown:ce}),O("div",{class:a.horizontal.barClass.value,style:[t.barStyle,t.horizontalBarStyle],"aria-hidden":"true",onMousedown:Ze}),$e(O("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),Ce),$e(O("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),ne)])}});const Yn=It({name:"CoursePager",components:{TileComponent:Hn},props:[],setup(){return{store:Ct()}},methods:{}}),Xn=J("div",{class:"text-panel q-ma-md text-center text-h6"},"My Courses",-1);function Zn(t,e,r,n,i,s){const o=X("TileComponent");return k(),he(ht,null,[Xn,(k(!0),he(ht,null,Pn(this.store.courses,(a,c)=>(k(),he("span",{key:c},[g(o,{tileData:a,imgUrl:a.coverUrl,targetUrl:null,ck:c,aid:null,pgIdx:null,imgIdx:null,tileType:"course"},null,8,["tileData","imgUrl","ck"])]))),128)),g(ft,{flat:"",bordered:"",class:"q-ma-md q-pa-md cursor-pointer tile-component flex flex-center",onClick:e[0]||(e[0]=a=>this.store.newCourse())},{default:y(()=>[g(Nn,{name:"add",class:"text-h1"})]),_:1})],64)}var ei=Tt(Yn,[["render",Zn]]),Er="https://js.stripe.com/v3",ti=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,Kt="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",ri=function(){for(var e=document.querySelectorAll('script[src^="'.concat(Er,'"]')),r=0;r<e.length;r++){var n=e[r];if(!!ti.test(n.src))return n}return null},ni=function(e){var r=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(Er).concat(r);var i=document.head||document.body;if(!i)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return i.appendChild(n),n},ii=function(e,r){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"1.52.1",startTime:r})},Me=null,si=function(e){return Me!==null||(Me=new Promise(function(r,n){if(typeof window=="undefined"||typeof document=="undefined"){r(null);return}if(window.Stripe&&e&&console.warn(Kt),window.Stripe){r(window.Stripe);return}try{var i=ri();i&&e?console.warn(Kt):i||(i=ni(e)),i.addEventListener("load",function(){window.Stripe?r(window.Stripe):n(new Error("Stripe.js not available"))}),i.addEventListener("error",function(){n(new Error("Failed to load Stripe.js"))})}catch(s){n(s);return}})),Me},oi=function(e,r,n){if(e===null)return null;var i=e.apply(void 0,r);return ii(i,n),i},Ir=Promise.resolve().then(function(){return si(null)}),Tr=!1;Ir.catch(function(t){Tr||console.warn(t)});var ai=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];Tr=!0;var i=Date.now();return Ir.then(function(s){return oi(s,r,i)})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=i&63|128):(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=i&63|128)}return e},ci=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const i=t[r++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[r++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[r++],o=t[r++],a=t[r++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const s=t[r++],o=t[r++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},li={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let m=(a&15)<<2|l>>6,S=l&63;c||(S=64,o||(m=64)),n.push(r[u],r[h],r[m],r[S])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cr(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ci(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const s=r[t.charAt(i++)],a=i<t.length?r[t.charAt(i)]:0;++i;const l=i<t.length?r[t.charAt(i)]:64;++i;const h=i<t.length?r[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const m=s<<2|a>>4;if(n.push(m),l!==64){const S=a<<4&240|l>>2;if(n.push(S),h!==64){const C=l<<6&192|h;n.push(C)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ui=function(t){const e=Cr(t);return li.encodeByteArray(e,!0)},Or=function(t){return ui(t).replace(/\./g,"")};function di(){return typeof indexedDB=="object"}function hi(){return new Promise((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(r){e(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi="FirebaseError";class we extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=fi,Object.setPrototypeOf(this,we.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rr.prototype.create)}}class Rr{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?pi(s,n):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new we(i,a,n)}}function pi(t,e){return t.replace(gi,(r,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const gi=/\{\$([^}]+)}/g;class _t{constructor(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(b||(b={}));const mi={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},vi=b.INFO,_i={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},yi=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=_i[e];if(i)console[i](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bi{constructor(e){this.name=e,this._logLevel=vi,this._logHandler=yi,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in b))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mi[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...e),this._logHandler(this,b.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...e),this._logHandler(this,b.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,b.INFO,...e),this._logHandler(this,b.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,b.WARN,...e),this._logHandler(this,b.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...e),this._logHandler(this,b.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(Si(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function Si(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yt="@firebase/app",Jt="0.7.33";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=new bi("@firebase/app"),Ei="@firebase/app-compat",Ii="@firebase/analytics-compat",Ti="@firebase/analytics",Ci="@firebase/app-check-compat",Oi="@firebase/app-check",Ri="@firebase/auth",Ai="@firebase/auth-compat",ki="@firebase/database",Pi="@firebase/database-compat",Ni="@firebase/functions",Di="@firebase/functions-compat",Mi="@firebase/installations",Li="@firebase/installations-compat",Ui="@firebase/messaging",xi="@firebase/messaging-compat",Bi="@firebase/performance",$i="@firebase/performance-compat",Fi="@firebase/remote-config",Hi="@firebase/remote-config-compat",zi="@firebase/storage",Vi="@firebase/storage-compat",ji="@firebase/firestore",Wi="@firebase/firestore-compat",qi="firebase",Gi="9.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki="[DEFAULT]",Ji={[yt]:"fire-core",[Ei]:"fire-core-compat",[Ti]:"fire-analytics",[Ii]:"fire-analytics-compat",[Oi]:"fire-app-check",[Ci]:"fire-app-check-compat",[Ri]:"fire-auth",[Ai]:"fire-auth-compat",[ki]:"fire-rtdb",[Pi]:"fire-rtdb-compat",[Ni]:"fire-fn",[Di]:"fire-fn-compat",[Mi]:"fire-iid",[Li]:"fire-iid-compat",[Ui]:"fire-fcm",[xi]:"fire-fcm-compat",[Bi]:"fire-perf",[$i]:"fire-perf-compat",[Fi]:"fire-rc",[Hi]:"fire-rc-compat",[zi]:"fire-gcs",[Vi]:"fire-gcs-compat",[ji]:"fire-fst",[Wi]:"fire-fst-compat","fire-js":"fire-js",[qi]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Map,Qt=new Map;function Qi(t,e){try{t.container.addComponent(e)}catch(r){G.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function ve(t){const e=t.name;if(Qt.has(e))return G.debug(`There were multiple attempts to register component ${e}.`),!1;Qt.set(e,t);for(const r of Ar.values())Qi(r,t);return!0}function kr(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},je=new Rr("app","Firebase",Yi);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We=Gi;function Xi(t=Ki){const e=Ar.get(t);if(!e)throw je.create("no-app",{appName:t});return e}function pe(t,e,r){var n;let i=(n=Ji[t])!==null&&n!==void 0?n:t;r&&(i+=`-${r}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),G.warn(a.join(" "));return}ve(new _t(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi="firebase-heartbeat-database",es=1,_e="firebase-heartbeat-store";let st=null;function Pr(){return st||(st=qn(Zi,es,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_e)}}}).catch(t=>{throw je.create("idb-open",{originalErrorMessage:t.message})})),st}async function ts(t){var e;try{return(await Pr()).transaction(_e).objectStore(_e).get(Nr(t))}catch(r){if(r instanceof we)G.warn(r.message);else{const n=je.create("idb-get",{originalErrorMessage:(e=r)===null||e===void 0?void 0:e.message});G.warn(n.message)}}}async function Yt(t,e){var r;try{const i=(await Pr()).transaction(_e,"readwrite");return await i.objectStore(_e).put(e,Nr(t)),i.done}catch(n){if(n instanceof we)G.warn(n.message);else{const i=je.create("idb-set",{originalErrorMessage:(r=n)===null||r===void 0?void 0:r.message});G.warn(i.message)}}}function Nr(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=1024,ns=30*24*60*60*1e3;class is{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new os(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Xt();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=ns}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xt(),{heartbeatsToSend:r,unsentEntries:n}=ss(this._heartbeatsCache.heartbeats),i=Or(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Xt(){return new Date().toISOString().substring(0,10)}function ss(t,e=rs){const r=[];let n=t.slice();for(const i of t){const s=r.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Zt(r)>e){s.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),Zt(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class os{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return di()?hi().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ts(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yt(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yt(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Zt(t){return Or(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t){ve(new _t("platform-logger",e=>new wi(e),"PRIVATE")),ve(new _t("heartbeat",e=>new is(e),"PRIVATE")),pe(yt,Jt,t),pe(yt,Jt,"esm2017"),pe("fire-js","")}as("");pe("firestore-stripe-payments","0.0.6");function cs(t,e){return At.create(t,e)}class At{constructor(e,r){this.app=e,this.options=r,this.components={}}static create(e,r){return new At(e,r)}get customersCollection(){return this.options.customersCollection}get productsCollection(){return this.options.productsCollection}getComponent(e){let r=this.components[e];return r||null}setComponent(e,r){this.components[e]=r}}class P extends Error{constructor(e,r,n){super(r),this.code=e,this.message=r,this.cause=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ls=function(t){for(var e=[],r=0,n=0;n<t.length;n++){var i=t.charCodeAt(n);i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=i&63|128):(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=i&63|128)}return e},us=function(t){for(var e=[],r=0,n=0;r<t.length;){var i=t[r++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){var s=t[r++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){var s=t[r++],o=t[r++],a=t[r++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{var s=t[r++],o=t[r++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ds={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],i=0;i<t.length;i+=3){var s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4,m=(a&15)<<2|l>>6,S=l&63;c||(S=64,o||(m=64)),n.push(r[u],r[h],r[m],r[S])}return n.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ls(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):us(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],i=0;i<t.length;){var s=r[t.charAt(i++)],o=i<t.length,a=o?r[t.charAt(i)]:0;++i;var c=i<t.length,l=c?r[t.charAt(i)]:64;++i;var u=i<t.length,h=u?r[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();var m=s<<2|a>>4;if(n.push(m),l!==64){var S=a<<4&240|l>>2;if(n.push(S),h!==64){var C=l<<6&192|h;n.push(C)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},hs=function(t){try{return ds.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fs(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(I())}function ps(){var t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gs(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ms(){var t=I();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vs="FirebaseError",qe=function(t){Gn(e,t);function e(r,n,i){var s=t.call(this,n)||this;return s.code=r,s.customData=i,s.name=vs,Object.setPrototypeOf(s,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,Ge.prototype.create),s}return e}(Error),Ge=function(){function t(e,r,n){this.service=e,this.serviceName=r,this.errors=n}return t.prototype.create=function(e){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];var i=r[0]||{},s=this.service+"/"+e,o=this.errors[e],a=o?_s(o,i):"Error",c=this.serviceName+": "+a+" ("+s+").",l=new qe(s,c,i);return l},t}();function _s(t,e){return t.replace(ys,function(r,n){var i=e[n];return i!=null?String(i):"<"+n+"?>"})}var ys=/\{\$([^}]+)}/g;function bs(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dr(t,e){if(t===e)return!0;for(var r=Object.keys(t),n=Object.keys(e),i=0,s=r;i<s.length;i++){var o=s[i];if(!n.includes(o))return!1;var a=t[o],c=e[o];if(er(a)&&er(c)){if(!Dr(a,c))return!1}else if(a!==c)return!1}for(var l=0,u=n;l<u.length;l++){var o=u[l];if(!r.includes(o))return!1}return!0}function er(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t){for(var e=[],r=function(c,l){Array.isArray(l)?l.forEach(function(u){e.push(encodeURIComponent(c)+"="+encodeURIComponent(u))}):e.push(encodeURIComponent(c)+"="+encodeURIComponent(l))},n=0,i=Object.entries(t);n<i.length;n++){var s=i[n],o=s[0],a=s[1];r(o,a)}return e.length?"&"+e.join("&"):""}function ws(t,e){var r=new Ss(t,e);return r.subscribe.bind(r)}var Ss=function(){function t(e,r){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(function(){e(n)}).catch(function(i){n.error(i)})}return t.prototype.next=function(e){this.forEachObserver(function(r){r.next(e)})},t.prototype.error=function(e){this.forEachObserver(function(r){r.error(e)}),this.close(e)},t.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},t.prototype.subscribe=function(e,r,n){var i=this,s;if(e===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");Es(e,["next","error","complete"])?s=e:s={next:e,error:r,complete:n},s.next===void 0&&(s.next=ot),s.error===void 0&&(s.error=ot),s.complete===void 0&&(s.complete=ot);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{i.finalError?s.error(i.finalError):s.complete()}catch{}}),this.observers.push(s),o},t.prototype.unsubscribeOne=function(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))},t.prototype.forEachObserver=function(e){if(!this.finalized)for(var r=0;r<this.observers.length;r++)this.sendOne(r,e)},t.prototype.sendOne=function(e,r){var n=this;this.task.then(function(){if(n.observers!==void 0&&n.observers[e]!==void 0)try{r(n.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})},t.prototype.close=function(e){var r=this;this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(function(){r.observers=void 0,r.onNoObservers=void 0}))},t}();function Es(t,e){if(typeof t!="object"||t===null)return!1;for(var r=0,n=e;r<n.length;r++){var i=n[r];if(i in t&&typeof t[i]=="function")return!0}return!1}function ot(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t){return t&&t._delegate?t._delegate:t}/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function T(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var n=Array(t),i=0,e=0;e<r;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)n[i]=s[o];return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W,v;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(v||(v={}));var Is={debug:v.DEBUG,verbose:v.VERBOSE,info:v.INFO,warn:v.WARN,error:v.ERROR,silent:v.SILENT},Ts=v.INFO,Cs=(W={},W[v.DEBUG]="log",W[v.VERBOSE]="log",W[v.INFO]="info",W[v.WARN]="warn",W[v.ERROR]="error",W),Os=function(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];if(!(e<t.logLevel)){var i=new Date().toISOString(),s=Cs[e];if(s)console[s].apply(console,T(["["+i+"]  "+t.name+":"],r));else throw new Error("Attempted to log a message with an invalid logType (value: "+e+")")}},Rs=function(){function t(e){this.name=e,this._logLevel=Ts,this._logHandler=Os,this._userLogHandler=null}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in v))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(e){this._logLevel=typeof e=="string"?Is[e]:e},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,T([this,v.DEBUG],e)),this._logHandler.apply(this,T([this,v.DEBUG],e))},t.prototype.log=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,T([this,v.VERBOSE],e)),this._logHandler.apply(this,T([this,v.VERBOSE],e))},t.prototype.info=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,T([this,v.INFO],e)),this._logHandler.apply(this,T([this,v.INFO],e))},t.prototype.warn=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,T([this,v.WARN],e)),this._logHandler.apply(this,T([this,v.WARN],e))},t.prototype.error=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,T([this,v.ERROR],e)),this._logHandler.apply(this,T([this,v.ERROR],e))},t}(),tr=function(){function t(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();function Mr(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const As=Mr,Lr=new Ge("auth","Firebase",Mr());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new Rs("@firebase/auth");function Le(t,...e){rr.logLevel<=v.ERROR&&rr.error(`Auth (${We}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t,...e){throw kt(t,...e)}function N(t,...e){return kt(t,...e)}function ks(t,e,r){const n=Object.assign(Object.assign({},As()),{[e]:r});return new Ge("auth","Firebase",n).create(e,{appName:t.name})}function kt(t,...e){if(typeof t!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(r,...n)}return Lr.create(t,...e)}function f(t,e,...r){if(!t)throw kt(e,...r)}function M(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Le(e),new Error(e)}function x(t,e){t||M(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new Map;function L(t){x(t instanceof Function,"Expected a class definition");let e=nr.get(t);return e?(x(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,nr.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(t,e){const r=kr(t,"auth");if(r.isInitialized()){const i=r.getImmediate(),s=r.getOptions();if(Dr(s,e!=null?e:{}))return i;U(i,"already-initialized")}return r.initialize({options:e})}function Ns(t,e){const r=(e==null?void 0:e.persistence)||[],n=(Array.isArray(r)?r:[r]).map(L);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ds(){return ir()==="http:"||ir()==="https:"}function ir(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ds()||ps()||"connection"in navigator)?navigator.onLine:!0}function Ls(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,r){this.shortDelay=e,this.longDelay=r,x(r>e,"Short delay should be less than long delay!"),this.isMobile=fs()||gs()}get(){return Ms()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t,e){x(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;M("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;M("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;M("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=new Ee(3e4,6e4);function Bs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Je(t,e,r,n,i={}){return Ur(t,i,()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});const a=Se(Object.assign({key:t.config.apiKey},o)).slice(1),c=new(wt.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),wt.fetch()(xr(t,t.config.apiHost,r,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Ur(t,e,r){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},Us),e);try{const i=new Fs(t),s=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw at(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw at(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw at(t,"email-already-in-use",o);const u=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ks(t,u,l);U(t,u)}}catch(i){if(i instanceof qe)throw i;U(t,"network-request-failed")}}async function $s(t,e,r,n,i={}){const s=await Je(t,e,r,n,i);return"mfaPendingCredential"in s&&U(t,"multi-factor-auth-required",{serverResponse:s}),s}function xr(t,e,r,n){const i=`${e}${r}?${n}`;return t.config.emulator?Pt(t.config,i):`${t.config.apiScheme}://${i}`}class Fs{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(N(this.auth,"timeout")),xs.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function at(t,e,r){const n={appName:t.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=N(t,e,n);return i.customData._tokenResponse=r,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(t,e){return Je(t,"POST","/v1/accounts:delete",e)}async function zs(t,e){return Je(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vs(t,e=!1){const r=Ke(t),n=await r.getIdToken(e),i=Nt(n);f(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:ge(ct(i.auth_time)),issuedAtTime:ge(ct(i.iat)),expirationTime:ge(ct(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ct(t){return Number(t)*1e3}function Nt(t){const[e,r,n]=t.split(".");if(e===void 0||r===void 0||n===void 0)return Le("JWT malformed, contained fewer than 3 sections"),null;try{const i=hs(r);return i?JSON.parse(i):(Le("Failed to decode base64 JWT payload"),null)}catch(i){return Le("Caught error parsing JWT payload as JSON",i),null}}function js(t){const e=Nt(t);return f(e,"internal-error"),f(typeof e.exp!="undefined","internal-error"),f(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ye(t,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof qe&&Ws(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function Ws({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=ge(this.lastLoginAt),this.creationTime=ge(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fe(t){var e;const r=t.auth,n=await t.getIdToken(),i=await ye(t,zs(r,{idToken:n}));f(i==null?void 0:i.users.length,r,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Js(s.providerUserInfo):[],a=Ks(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Br(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Gs(t){const e=Ke(t);await Fe(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ks(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Js(t){return t.map(e=>{var{providerId:r}=e,n=Ot(e,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qs(t,e){const r=await Ur(t,{},()=>{const n=Se({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=xr(t,i,"/v1/token",`key=${s}`);return wt.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){f(e.idToken,"internal-error"),f(typeof e.idToken!="undefined","internal-error"),f(typeof e.refreshToken!="undefined","internal-error");const r="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):js(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}async getToken(e,r=!1){return f(!this.accessToken||this.refreshToken,e,"user-token-expired"),!r&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:i,expiresIn:s}=await Qs(e,r);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:i,expirationTime:s}=r,o=new be;return n&&(f(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(f(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(f(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new be,this.toJSON())}_performRefresh(){return M("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t,e){f(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class q{constructor(e){var{uid:r,auth:n,stsTokenManager:i}=e,s=Ot(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new qs(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.metadata=new Br(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const r=await ye(this,this.stsTokenManager.getToken(this.auth,e));return f(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return Vs(this,e)}reload(){return Gs(this)}_assign(e){this!==e&&(f(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new q(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){f(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await Fe(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ye(this,Hs(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var n,i,s,o,a,c,l,u;const h=(n=r.displayName)!==null&&n!==void 0?n:void 0,m=(i=r.email)!==null&&i!==void 0?i:void 0,S=(s=r.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=r.photoURL)!==null&&o!==void 0?o:void 0,Ce=(a=r.tenantId)!==null&&a!==void 0?a:void 0,ne=(c=r._redirectEventId)!==null&&c!==void 0?c:void 0,ie=(l=r.createdAt)!==null&&l!==void 0?l:void 0,se=(u=r.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:Q,emailVerified:Oe,isAnonymous:Re,providerData:oe,stsTokenManager:ae}=r;f(Q&&ae,e,"internal-error");const Ae=be.fromJSON(this.name,ae);f(typeof Q=="string",e,"internal-error"),B(h,e.name),B(m,e.name),f(typeof Oe=="boolean",e,"internal-error"),f(typeof Re=="boolean",e,"internal-error"),B(S,e.name),B(C,e.name),B(Ce,e.name),B(ne,e.name),B(ie,e.name),B(se,e.name);const ce=new q({uid:Q,auth:e,email:m,emailVerified:Oe,displayName:h,isAnonymous:Re,photoURL:C,phoneNumber:S,tenantId:Ce,stsTokenManager:Ae,createdAt:ie,lastLoginAt:se});return oe&&Array.isArray(oe)&&(ce.providerData=oe.map(Ze=>Object.assign({},Ze))),ne&&(ce._redirectEventId=ne),ce}static async _fromIdTokenResponse(e,r,n=!1){const i=new be;i.updateFromServerResponse(r);const s=new q({uid:r.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Fe(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}$r.type="NONE";const sr=$r;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t,e,r){return`firebase:${t}:${e}:${r}`}class ee{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=Ue(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ue("persistence",i.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?q._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new ee(L(sr),e,n);const i=(await Promise.all(r.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||L(sr);const o=Ue(n,e.config.apiKey,e.name);let a=null;for(const l of r)try{const u=await l._get(o);if(u){const h=q._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new ee(s,e,n):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(r.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new ee(s,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jr(e))return"Blackberry";if(Wr(e))return"Webos";if(Dt(e))return"Safari";if((e.includes("chrome/")||Hr(e))&&!e.includes("edge/"))return"Chrome";if(Vr(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Fr(t=I()){return/firefox\//i.test(t)}function Dt(t=I()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hr(t=I()){return/crios\//i.test(t)}function zr(t=I()){return/iemobile/i.test(t)}function Vr(t=I()){return/android/i.test(t)}function jr(t=I()){return/blackberry/i.test(t)}function Wr(t=I()){return/webos/i.test(t)}function Qe(t=I()){return/iphone|ipad|ipod/i.test(t)}function Ys(t=I()){var e;return Qe(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Xs(){return ms()&&document.documentMode===10}function qr(t=I()){return Qe(t)||Vr(t)||Wr(t)||jr(t)||/windows phone/i.test(t)||zr(t)}function Zs(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t,e=[]){let r;switch(t){case"Browser":r=or(I());break;case"Worker":r=`${or(I())}-${t}`;break;default:r=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${We}/${n}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,r){this.app=e,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ar(this),this.idTokenSubscription=new ar(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lr,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=L(r)),this._initializationPromise=this.queue(async()=>{var n;this._deleted||(this.persistenceManager=await ee.create(this,e),!this._deleted&&(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(r),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var r;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,s=n==null?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(n=o.user)}return n?n._redirectEventId?(f(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await Fe(e)}catch(r){if(r.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ls()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const r=e?Ke(e):null;return r&&f(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&f(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(L(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ge("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&L(e)||this._popupRedirectResolver;f(r,this,"argument-error"),this.redirectPersistenceManager=await ee.create(this,[L(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,i){if(this._deleted)return()=>{};const s=typeof r=="function"?r:r.next.bind(r),o=this._isInitialized?Promise.resolve():this._initializationPromise;return f(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof r=="function"?e.addObserver(r,n,i):e.addObserver(r)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return f(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Kr(t){return Ke(t)}class ar{constructor(e){this.auth=e,this.observer=null,this.addObserver=ws(r=>this.observer=r)}get next(){return f(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return M("not implemented")}_getIdTokenResponse(e){return M("not implemented")}_linkToIdToken(e,r){return M("not implemented")}_getReauthenticationResolver(e){return M("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(t,e){return $s(t,"POST","/v1/accounts:signInWithIdp",Bs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to="http://localhost";class K extends Jr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new K(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):U("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=r,s=Ot(r,["providerId","signInMethod"]);if(!n||!i)return null;const o=new K(n,i);return Object.assign(o,s),o}_getIdTokenResponse(e){const r=this.buildRequest();return te(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,te(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,te(e,r)}buildRequest(){const e={requestUri:to,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=Se(r)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends Qr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F extends Ie{constructor(){super("facebook.com")}static credential(e){return K._fromParams({providerId:F.PROVIDER_ID,signInMethod:F.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return F.credentialFromTaggedObject(e)}static credentialFromError(e){return F.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return F.credential(e.oauthAccessToken)}catch{return null}}}F.FACEBOOK_SIGN_IN_METHOD="facebook.com";F.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H extends Ie{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return K._fromParams({providerId:H.PROVIDER_ID,signInMethod:H.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return H.credentialFromTaggedObject(e)}static credentialFromError(e){return H.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n}=e;if(!r&&!n)return null;try{return H.credential(r,n)}catch{return null}}}H.GOOGLE_SIGN_IN_METHOD="google.com";H.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z extends Ie{constructor(){super("github.com")}static credential(e){return K._fromParams({providerId:z.PROVIDER_ID,signInMethod:z.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return z.credentialFromTaggedObject(e)}static credentialFromError(e){return z.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return z.credential(e.oauthAccessToken)}catch{return null}}}z.GITHUB_SIGN_IN_METHOD="github.com";z.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V extends Ie{constructor(){super("twitter.com")}static credential(e,r){return K._fromParams({providerId:V.PROVIDER_ID,signInMethod:V.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return V.credentialFromTaggedObject(e)}static credentialFromError(e){return V.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=e;if(!r||!n)return null;try{return V.credential(r,n)}catch{return null}}}V.TWITTER_SIGN_IN_METHOD="twitter.com";V.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,n,i=!1){const s=await q._fromIdTokenResponse(e,n,i),o=cr(n);return new re({user:s,providerId:o,_tokenResponse:n,operationType:r})}static async _forOperation(e,r,n){await e._updateTokensIfNecessary(n,!0);const i=cr(n);return new re({user:e,providerId:i,_tokenResponse:n,operationType:r})}}function cr(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends qe{constructor(e,r,n,i){var s;super(r.code,r.message),this.operationType=n,this.user=i,this.name="FirebaseError",Object.setPrototypeOf(this,He.prototype),this.appName=e.name,this.code=r.code,this.tenantId=(s=e.tenantId)!==null&&s!==void 0?s:void 0,this.serverResponse=r.customData.serverResponse}static _fromErrorAndOperation(e,r,n,i){return new He(e,r,n,i)}}function Yr(t,e,r,n){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?He._fromErrorAndOperation(t,s,e,n):s})}async function ro(t,e,r=!1){const n=await ye(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return re._forOperation(t,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(t,e,r=!1){const{auth:n}=t,i="reauthenticate";try{const s=await ye(t,Yr(n,i,e,t),r);f(s.idToken,n,"internal-error");const o=Nt(s.idToken);f(o,n,"internal-error");const{sub:a}=o;return f(t.uid===a,n,"user-mismatch"),re._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&U(n,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(t,e,r=!1){const n="signIn",i=await Yr(t,n,e),s=await re._fromIdTokenResponse(t,n,i);return r||await t._updateCurrentUser(s.user),s}const ze="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,r){this.storage=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(ze,"1"),this.storage.removeItem(ze),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(){const t=I();return Dt(t)||Qe(t)}const oo=1e3,ao=10;class Zr extends Xr{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=so()&&Zs(),this.fallbackToPolling=qr(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&e(r,i,n)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const n=e.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(n);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!r)return}const i=()=>{const o=this.storage.getItem(n);!r&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);Xs()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ao):i()}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)})},oo)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zr.type="LOCAL";const co=Zr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Xr{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}en.type="SESSION";const tn=en;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t){return Promise.all(t.map(async e=>{try{const r=await e;return{fulfilled:!0,value:r}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(i=>i.isListeningto(e));if(r)return r;const n=new Ye(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:n,eventType:i,data:s}=r.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const a=Array.from(o).map(async l=>l(r.origin,s)),c=await lo(a);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ye.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t="",e=10){let r="";for(let n=0;n<e;n++)r+=Math.floor(Math.random()*10);return t+r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,n=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Mt("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(h){const m=h;if(m.data.eventId===l)switch(m.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:r},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(){return window}function ho(t){D().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return typeof D().WorkerGlobalScope!="undefined"&&typeof D().importScripts=="function"}async function fo(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function po(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function go(){return rn()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="firebaseLocalStorageDb",mo=1,Ve="firebaseLocalStorage",sn="fbase_key";class Te{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Xe(t,e){return t.transaction([Ve],e?"readwrite":"readonly").objectStore(Ve)}function vo(){const t=indexedDB.deleteDatabase(nn);return new Te(t).toPromise()}function St(){const t=indexedDB.open(nn,mo);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(Ve,{keyPath:sn})}catch(i){r(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Ve)?e(n):(n.close(),await vo(),e(await St()))})})}async function lr(t,e,r){const n=Xe(t,!0).put({[sn]:e,value:r});return new Te(n).toPromise()}async function _o(t,e){const r=Xe(t,!1).get(e),n=await new Te(r).toPromise();return n===void 0?null:n.value}function ur(t,e){const r=Xe(t,!0).delete(e);return new Te(r).toPromise()}const yo=800,bo=3;class on{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await St(),this.db)}async _withRetries(e){let r=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(r++>bo)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ye._getInstance(go()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await fo(),!this.activeServiceWorker)return;this.sender=new uo(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);!n||((e=n[0])===null||e===void 0?void 0:e.fulfilled)&&((r=n[0])===null||r===void 0?void 0:r.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||po()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await St();return await lr(e,ze,"1"),await ur(e,ze),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>lr(n,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(n=>_o(n,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>ur(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Xe(i,!1).getAll();return new Te(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yo)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}on.type="LOCAL";const wo=on;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Eo(t){return new Promise((e,r)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=i=>{const s=N("internal-error");s.customData=i,r(s)},n.type="text/javascript",n.charset="UTF-8",So().appendChild(n)})}function Io(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ee(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t,e){return e?L(e):(f(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends Jr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return te(e,this._buildIdpRequest())}_linkToIdToken(e,r){return te(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return te(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function Co(t){return io(t.auth,new Lt(t),t.bypassAuthState)}function Oo(t){const{auth:e,user:r}=t;return f(r,e,"internal-error"),no(r,new Lt(t),t.bypassAuthState)}async function Ro(t){const{auth:e,user:r}=t;return f(r,e,"internal-error"),ro(r,new Lt(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,r,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:n,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:r,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Co;case"linkViaPopup":case"linkViaRedirect":return Ro;case"reauthViaPopup":case"reauthViaRedirect":return Oo;default:U(this.auth,"internal-error")}}resolve(e){x(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){x(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=new Ee(2e3,1e4);class Z extends an{constructor(e,r,n,i,s){super(e,r,i,s),this.provider=n,this.authWindow=null,this.pollId=null,Z.currentPopupAction&&Z.currentPopupAction.cancel(),Z.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return f(e,this.auth,"internal-error"),e}async onExecution(){x(this.filter.length===1,"Popup operations only handle one event");const e=Mt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(N(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(N(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Z.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(N(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Ao.get())};e()}}Z.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko="pendingRedirect",dr=new Map;class Po extends an{constructor(e,r,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let e=dr.get(this.auth._key());if(!e){try{const n=await No(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}dr.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function No(t,e){const r=Do(e),n=await hr(t)._get(r)==="true";return await hr(t)._remove(r),n}function hr(t){return L(t._redirectPersistence)}function Do(t){return Ue(ko,t.config.apiKey,t.name)}async function Mo(t,e,r=!1){const n=Kr(t),i=To(n,e),o=await new Po(n,i,r).execute();return o&&!r&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=10*60*1e3;class Uo{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(r=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xo(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var n;if(e.error&&!cn(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(N(this.auth,i))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const n=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Lo&&this.cachedEventUids.clear(),this.cachedEventUids.has(fr(e))}saveEventToCache(e){this.cachedEventUids.add(fr(e)),this.lastProcessedEventTime=Date.now()}}function fr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function cn({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xo(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cn(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(t,e={}){return Je(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fo=/^https?/;async function Ho(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Bo(t);for(const r of e)try{if(zo(r))return}catch{}U(t,"unauthorized-domain")}function zo(t){const e=bt(),{protocol:r,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&n===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&o.hostname===n}if(!Fo.test(r))return!1;if($o.test(t))return n===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=new Ee(3e4,6e4);function pr(){const t=D().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function jo(t){return new Promise((e,r)=>{var n,i,s;function o(){pr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pr(),r(N(t,"network-request-failed"))},timeout:Vo.get()})}if(!((i=(n=D().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=D().gapi)===null||s===void 0)&&s.load)o();else{const a=Io("iframefcb");return D()[a]=()=>{gapi.load?o():r(N(t,"network-request-failed"))},Eo(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw xe=null,e})}let xe=null;function Wo(t){return xe=xe||jo(t),xe}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=new Ee(5e3,15e3),Go="__/auth/iframe",Ko="emulator/auth/iframe",Jo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Qo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yo(t){const e=t.config;f(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?Pt(e,Ko):`https://${t.config.authDomain}/${Go}`,n={apiKey:e.apiKey,appName:t.name,v:We},i=Qo.get(t.config.apiHost);i&&(n.eid=i);const s=t._getFrameworks();return s.length&&(n.fw=s.join(",")),`${r}?${Se(n).slice(1)}`}async function Xo(t){const e=await Wo(t),r=D().gapi;return f(r,t,"internal-error"),e.open({where:document.body,url:Yo(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jo,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const o=N(t,"network-request-failed"),a=D().setTimeout(()=>{s(o)},qo.get());function c(){D().clearTimeout(a),i(n)}n.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ea=500,ta=600,ra="_blank",na="http://localhost";class gr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ia(t,e,r,n=ea,i=ta){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Zo),{width:n.toString(),height:i.toString(),top:s,left:o}),l=I().toLowerCase();r&&(a=Hr(l)?ra:r),Fr(l)&&(e=e||na,c.scrollbars="yes");const u=Object.entries(c).reduce((m,[S,C])=>`${m}${S}=${C},`,"");if(Ys(l)&&a!=="_self")return sa(e||"",a),new gr(null);const h=window.open(e||"",a,u);f(h,t,"popup-blocked");try{h.focus()}catch{}return new gr(h)}function sa(t,e){const r=document.createElement("a");r.href=t,r.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="__/auth/handler",aa="emulator/auth/handler";function mr(t,e,r,n,i,s){f(t.config.authDomain,t,"auth-domain-config-required"),f(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:n,v:We,eventId:i};if(e instanceof Qr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bs(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(e instanceof Ie){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${ca(t)}?${Se(a).slice(1)}`}function ca({config:t}){return t.emulator?Pt(t,aa):`https://${t.authDomain}/${oa}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="webStorageSupport";class la{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tn,this._completeRedirectFn=Mo}async _openPopup(e,r,n,i){var s;x((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=mr(e,r,n,bt(),i);return ia(e,o,Mt())}async _openRedirect(e,r,n,i){return await this._originValidation(e),ho(mr(e,r,n,bt(),i)),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:i,promise:s}=this.eventManagers[r];return i?Promise.resolve(i):(x(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[r]={promise:n},n}async initAndGetManager(e){const r=await Xo(e),n=new Uo(e);return r.register("authEvent",i=>(f(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=r,n}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(lt,{type:lt},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[lt];o!==void 0&&r(!!o),U(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=Ho(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return qr()||Dt()||Qe()}}const ua=la;var da="@firebase/auth",ha="0.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(n=>{var i;e(((i=n)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);!r||(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){f(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ga(t){ve(new tr("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=n.options;return(o=>{f(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),f(!(s!=null&&s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gr(t)},c=new eo(o,a);return Ns(c,r),c})(n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),ve(new tr("auth-internal",e=>{const r=Kr(e.getProvider("auth").getImmediate());return(n=>new fa(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),pe(da,ha,pa(t))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t=Xi()){const e=kr(t,"auth");return e.isInitialized()?e.getImmediate():Ps(t,{popupRedirectResolver:ua,persistence:[wo,co,tn]})}ga("Browser");function va(t){try{const e=ln(t);return Promise.resolve(e)}catch(e){return Promise.reject(e)}}function ln(t){return ya(t).getCurrentUser()}class _a{constructor(e){this.auth=ma(e)}getCurrentUser(){var e;const r=(e=this.auth.currentUser)===null||e===void 0?void 0:e.uid;if(!r)throw new P("unauthenticated","Failed to determine currently signed in user. User not signed in.");return r}}const un="user-dao";function ya(t){let e=t.getComponent(un);return e||(e=new _a(t.app),ba(t,e)),e}function ba(t,e){t.setComponent(un,e)}function Et(t,e){if(typeof t!="string"||t==="")throw new Error(e!=null?e:"arg must be a non-empty string.")}function dn(t,e){if(typeof t!="number"||isNaN(t)||t<=0)throw new Error(e!=null?e:"arg must be positive number.")}function wa(t,e){if(!Array.isArray(t)||t.length===0)throw new Error(e!=null?e:"arg must be a non-empty array.")}var vr=globalThis&&globalThis.__awaiter||function(t,e,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?s(u.value):i(u.value).then(a,c)}l((n=n.apply(t,e||[])).next())})},Sa=globalThis&&globalThis.__rest||function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r};function Ea(t){return"line_items"in t}const Ia=30*1e3;function Ta(t,e,r){e=Object.assign({},e),Ca(e),Ea(e)?Oa(e):Ra(e);const n=Aa(r==null?void 0:r.timeoutMillis);return va(t).then(i=>Ma(t).createCheckoutSession(i,e,n))}function Ca(t){var e;typeof t.cancel_url!="undefined"?Et(t.cancel_url,"cancel_url must be a non-empty string."):t.cancel_url=window.location.href,(e=t.mode)!==null&&e!==void 0||(t.mode="subscription"),typeof t.success_url!="undefined"?Et(t.success_url,"success_url must be a non-empty string."):t.success_url=window.location.href}function Oa(t){wa(t.line_items,"line_items must be a non-empty array.")}function Ra(t){Et(t.price,"price must be a non-empty string."),typeof t.quantity!="undefined"&&dn(t.quantity,"quantity must be a positive integer.")}function Aa(t){return typeof t!="undefined"?(dn(t,"timeoutMillis must be a positive number."),t):Ia}class ka{constructor(e,r){this.customersCollection=r,this.firestore=Rt(e)}createCheckoutSession(e,r,n){return vr(this,void 0,void 0,function*(){const i=yield this.addSessionDoc(e,r);return this.waitForSessionId(i,n)})}addSessionDoc(e,r){return vr(this,void 0,void 0,function*(){const n=me(this.firestore,this.customersCollection,e,"checkout_sessions");try{return yield Kn(n,r)}catch(i){throw new P("internal","Error while querying Firestore.",i)}})}waitForSessionId(e,r){let n;return new Promise((i,s)=>{const o=setTimeout(()=>{s(new P("deadline-exceeded","Timeout while waiting for session response."))},r);n=wr(e.withConverter(Na),a=>{const c=a.data();Pa(c)&&(clearTimeout(o),i(c))},a=>{clearTimeout(o),s(new P("internal","Error while querying Firestore.",a))})}).finally(()=>n())}}function Pa(t){return typeof(t==null?void 0:t.id)!="undefined"}const Na={toFirestore:()=>{throw new Error("Not implemented for readonly Session type.")},fromFirestore:t=>{const e=t.data(),{created:r,sessionId:n}=e,i=Sa(e,["created","sessionId"]);return typeof n!="undefined"?Object.assign(Object.assign({},i),{id:n,created_at:Da(r)}):Object.assign({},i)}};function Da(t){return t.toDate().toUTCString()}const hn="checkout-session-dao";function Ma(t){let e=t.getComponent(hn);return e||(e=new ka(t.app,t.customersCollection),La(t,e)),e}function La(t,e){t.setComponent(hn,e)}globalThis&&globalThis.__awaiter;var R=globalThis&&globalThis.__awaiter||function(t,e,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?s(u.value):i(u.value).then(a,c)}l((n=n.apply(t,e||[])).next())})},Ua=globalThis&&globalThis.__rest||function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r};function xa(t,e){const r=Fa(t),n=e!=null?e:{},{includePrices:i}=n,s=Ua(n,["includePrices"]);return r.getProducts(s).then(o=>{if(i){const a=o.map(c=>Ba(r,c));return Promise.all(a)}return o})}function Ba(t,e){return R(this,void 0,void 0,function*(){const r=yield t.getPrices(e.id);return Object.assign(Object.assign({},e),{prices:r})})}const _r={toFirestore:()=>{throw new Error("Not implemented for readonly Product type.")},fromFirestore:t=>Object.assign(Object.assign({},t.data()),{id:t.id,prices:[]})},yr={toFirestore:()=>{throw new Error("Not implemented for readonly Price type.")},fromFirestore:t=>{const e=t.data();return Object.assign(Object.assign({},e),{id:t.id,product:t.ref.parent.parent.id})}};class $a{constructor(e,r){this.productsCollection=r,this.firestore=Rt(e)}getProduct(e){return R(this,void 0,void 0,function*(){return(yield this.getProductSnapshotIfExists(e)).data()})}getProducts(e){return R(this,void 0,void 0,function*(){const r=yield this.getProductSnapshots(e),n=[];return r.forEach(i=>{n.push(i.data())}),n})}getPrice(e,r){return R(this,void 0,void 0,function*(){return(yield this.getPriceSnapshotIfExists(e,r)).data()})}getPrices(e,r){return R(this,void 0,void 0,function*(){r!=null&&r.assertProduct&&(yield this.getProductSnapshotIfExists(e));const n=yield this.getPriceSnapshots(e),i=[];return n.forEach(s=>{i.push(s.data())}),i})}getProductSnapshotIfExists(e){return R(this,void 0,void 0,function*(){const r=pt(this.firestore,this.productsCollection,e).withConverter(_r),n=yield this.queryFirestore(()=>gt(r));if(!n.exists())throw new P("not-found",`No product found with the ID: ${e}`);return n})}getProductSnapshots(e){return R(this,void 0,void 0,function*(){let r=me(this.firestore,this.productsCollection).withConverter(_r);const n=[];if(e!=null&&e.activeOnly&&n.push(mt("active","==",!0)),e!=null&&e.where)for(const i of e.where)n.push(mt(...i));return typeof(e==null?void 0:e.limit)!="undefined"&&n.push(Jn(e.limit)),yield this.queryFirestore(()=>(n.length>0&&(r=Sr(r,...n)),vt(r)))})}getPriceSnapshotIfExists(e,r){return R(this,void 0,void 0,function*(){const n=pt(this.firestore,this.productsCollection,e,"prices",r).withConverter(yr),i=yield this.queryFirestore(()=>gt(n));if(!i.exists())throw new P("not-found",`No price found with the product ID: ${e} and price ID: ${r}`);return i})}getPriceSnapshots(e){return R(this,void 0,void 0,function*(){const r=me(this.firestore,this.productsCollection,e,"prices").withConverter(yr);return yield this.queryFirestore(()=>vt(r))})}queryFirestore(e){return R(this,void 0,void 0,function*(){try{return yield e()}catch(r){throw new P("internal","Unexpected error while querying Firestore",r)}})}}const fn="product-dao";function Fa(t){let e=t.getComponent(fn);return e||(e=new $a(t.app,t.productsCollection),Ha(t,e)),e}function Ha(t,e){t.setComponent(fn,e)}var le=globalThis&&globalThis.__awaiter||function(t,e,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?s(u.value):i(u.value).then(a,c)}l((n=n.apply(t,e||[])).next())})};function za(t,e,r){const n=ln(t);return ja(t).onSubscriptionUpdate(n,e,r)}const ut={toFirestore:()=>{throw new Error("Not implemented for readonly Subscription type.")},fromFirestore:t=>{var e,r,n;const i=t.data(),o=i.prices.map(a=>({product:a.parent.parent.id,price:a.id}));return{cancel_at:ue(i.cancel_at),cancel_at_period_end:i.cancel_at_period_end,canceled_at:ue(i.canceled_at),created:Be(i.created),current_period_start:Be(i.current_period_start),current_period_end:Be(i.current_period_end),ended_at:ue(i.ended_at),id:t.id,metadata:(e=i.metadata)!==null&&e!==void 0?e:{},price:i.price.id,prices:o,product:i.product.id,quantity:(r=i.quantity)!==null&&r!==void 0?r:null,role:(n=i.role)!==null&&n!==void 0?n:null,status:i.status,stripe_link:i.stripeLink,trial_end:ue(i.trial_end),trial_start:ue(i.trial_start),uid:t.ref.parent.parent.id}}},dt="subscriptions";function ue(t){return t===null?null:Be(t)}function Be(t){return t.toDate().toUTCString()}class Va{constructor(e,r){this.customersCollection=r,this.firestore=Rt(e)}getSubscription(e,r){return le(this,void 0,void 0,function*(){return(yield this.getSubscriptionSnapshotIfExists(e,r)).data()})}getSubscriptions(e,r){return le(this,void 0,void 0,function*(){const n=yield this.getSubscriptionSnapshots(e,r==null?void 0:r.status),i=[];return n.forEach(s=>{i.push(s.data())}),i})}onSubscriptionUpdate(e,r,n){const i=me(this.firestore,this.customersCollection,e,dt).withConverter(ut);return wr(i,s=>{const o={subscriptions:[],changes:[],size:s.size,empty:s.empty};s.forEach(a=>{o.subscriptions.push(a.data())}),s.docChanges().forEach(a=>{o.changes.push({type:a.type,subscription:a.doc.data()})}),r(o)},s=>{if(n){const o=new P("internal",`Error while listening to database updates: ${s.message}`,s);n(o)}})}getSubscriptionSnapshotIfExists(e,r){return le(this,void 0,void 0,function*(){const n=pt(this.firestore,this.customersCollection,e,dt,r).withConverter(ut),i=yield this.queryFirestore(()=>gt(n));if(!i.exists())throw new P("not-found",`No subscription found with the ID: ${r} for user: ${e}`);return i})}getSubscriptionSnapshots(e,r){return le(this,void 0,void 0,function*(){let n=me(this.firestore,this.customersCollection,e,dt).withConverter(ut);return r&&(n=Sr(n,mt("status","in",r))),yield this.queryFirestore(()=>vt(n))})}queryFirestore(e){return le(this,void 0,void 0,function*(){try{return yield e()}catch(r){throw new P("internal","Unexpected error while querying Firestore",r)}})}}const pn="subscription-dao";function ja(t){let e=t.getComponent(pn);return e||(e=new Va(t.app,t.customersCollection),Wa(t,e)),e}function Wa(t,e){t.setComponent(pn,e)}let br;const qa=It({name:"PreferencesComponent",setup(){return{store:Ct(),dark:w(de.isActive),promptFontSize:w(!1),showText:w(!0)}},mounted(){this.loadStripe()},methods:{async portalCB(){const t="https://billing.stripe.com/p/login/eVa6qm5sSahl7tudQQ";console.log(t),window.open(t,"_blank")},async subscribeCB(){const t=Qn(),e=cs(t,{productsCollection:"products",customersCollection:"customers"});console.log("payments",e);const r=await xa(e,{includePrices:!0,activeOnly:!0});for(const s of r)console.log("product",s);const i=await Ta(e,{line_items:[{price:"price_1Mym16CCcfiyKH9aa6ZQZvQx",quantity:"1"}],api_key:"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",fooey:"kablooey",success_url:"https://www.readingedge.org/thankyou",cancel_url:"https://www.readingedge.org"});console.log("session",i),console.log(i.url),za(e,s=>{for(const o in s.changes)o.type==="added"&&console.log(`New subscription added with ID: ${o.subscription.id}`)}),window.location.assign(i.url)},async loadStripe(){br=await ai("pk_live_51Myi4CCCcfiyKH9aWeeCgtfqmR7HpOnLE9oDJn1lRbOSkfwxNsnLEfTRS8lHzdM8UNJ9O0IshKAThgnBdjcZosyC00oSLNm68T"),console.log("stripe",br)},toggleText(){console.log("toggleText",this.showText),this.showText===!0?(console.log("showing text"),Y(".assignment").classed("hidden",!1),Y(".q-carousel__thumbnail").classed("hidden",!1)):(console.log("hiding text"),Y(".assignment").classed("hidden",!0),Y(".q-carousel__thumbnail").classed("hidden",!0))},toggleDark(){de.toggle(),console.log(de.isActive,this.dark),de.isActive},fontSizeCB(t){Y("#sampleFontSwatch").style("font-size",t+"pt"),Y("#slideTextDiv").style("font-size",t+"pt"),this.store.userSnapshot.preferences.textFontSize=t},fsCB(){et.isActive?et.exit().then(()=>{}).catch(t=>{console.log(t)}):et.request().then(()=>{}).catch(t=>{console.log(t)})}}}),Ga={class:"q-pa-md",style:{"max-width":"350px"}},Ka={class:"text-center",style:{width:"100%"}};function Ja(t,e,r,n,i,s){return k(),he("div",Ga,[g(Wn,{bordered:"",class:"rounded-borders",icon:"gear"},{default:y(()=>[g(jn,{label:"Profile"},{default:y(()=>[J("div",Ka,[this.store.subscribed===1?(k(),fe(A,{key:0,"no-caps":"",onClick:e[0]||(e[0]=o=>this.portalCB())},{default:y(()=>[$("Manage Subscription")]),_:1})):(k(),fe(A,{key:1,"no-caps":"",onClick:e[1]||(e[1]=o=>this.subscribeCB())},{default:y(()=>[$("Subscribe")]),_:1}))])]),_:1})]),_:1})])}var Qa=Tt(qa,[["render",Ja]]);const Ya=It({name:"CoursesLayout",components:{CoursePager:ei,WPComponent:Vn,PreferencesComponent:zn,ProfileComponent:Qa},setup(){const t=w(!1),e=w(!1);return{store:Ct(),courseKey:w(null),promptEnroll:w(!1),leftDrawerOpen:t,toggleLeftDrawer(){t.value=!t.value},rightDrawerOpen:e,toggleRightDrawer(){e.value=!e.value}}},mounted(){de.isActive,this.store.initSpeech()},methods:{goBack(){this.store.ck!==null&&(this.store.ck=null,this.store.aid=null,this.store.pgIdx=null,this.store.imgIdx=null),this.store.router.replace("/courses")},enrollCB(){const t=this.store.enroll(this.courseKey);console.log(t)}}}),Xa=J("div",{class:"text-h6"},"Enter a course-key",-1),Za=J("br",null,null,-1),ec=J("br",null,null,-1),tc=J("br",null,null,-1),rc=J("div",{class:"text-panel q-ma-md text-center text-h6"},"App Sections",-1);function nc(t,e,r,n,i,s){const o=X("WPComponent"),a=X("PreferencesComponent"),c=X("ProfileComponent"),l=X("CoursePager"),u=X("router-view");return k(),he(ht,null,[g(bn,{modelValue:t.promptEnroll,"onUpdate:modelValue":e[3]||(e[3]=h=>t.promptEnroll=h),persistent:""},{default:y(()=>[g(ft,{style:{"min-width":"350px"}},{default:y(()=>[g(xt,null,{default:y(()=>[Xa]),_:1}),g(xt,{class:"q-pt-none"},{default:y(()=>[g(Sn,{dense:"",modelValue:t.courseKey,"onUpdate:modelValue":e[0]||(e[0]=h=>t.courseKey=h),autofocus:"",onKeyup:e[1]||(e[1]=Dn(h=>{t.prompt=!1,this.enrollCB()},["enter"]))},null,8,["modelValue"])]),_:1}),g(wn,{align:"right",class:"text-white"},{default:y(()=>[$e(g(A,{flat:"",label:"Cancel"},null,512),[[Bt]]),$e(g(A,{flat:"",label:"Enroll",onClick:e[2]||(e[2]=h=>this.enrollCB())},null,512),[[Bt]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),g($n,{view:"hHh lpR fFf"},{default:y(()=>[g(Mn,{bordered:"",class:"bg-positive text-white"},{default:y(()=>[g(Ln,null,{default:y(()=>[g(A,{flat:"",round:"",icon:"menu",onClick:t.toggleLeftDrawer},null,8,["onClick"]),g($t),this.store.ck!==null?(k(),fe(A,{key:0,flat:"",round:"",icon:"north",onClick:e[4]||(e[4]=h=>this.goBack())},{default:y(()=>[g(rt,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:y(()=>[g(ft,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:y(()=>[$(" Go back / up a level in the "),Za,$("course-assignment-page "),ec,$("hierarchy ")]),_:1})]),_:1})]),_:1})):tt("",!0),g($t),this.store.role==="student"?(k(),fe(A,{key:1,flat:"",round:"",class:"on-left",icon:"group_add",onClick:e[5]||(e[5]=h=>t.promptEnroll=!0)},{default:y(()=>[g(rt,null,{default:y(()=>[$("Have a course-key? Enter it here"),tc,$("to join your course.")]),_:1})]),_:1})):tt("",!0),this.store.authenticated?(k(),fe(A,{key:2,flat:"",round:"",icon:"switch_account",onClick:e[6]||(e[6]=h=>this.store.switchRole())},{default:y(()=>[g(rt,null,{default:y(()=>[$(" Switch between Teacher or Student role ")]),_:1})]),_:1})):tt("",!0),g(A,{flat:"",round:"",icon:"logout",onClick:e[7]||(e[7]=h=>this.store.logout())}),g(A,{flat:"",round:"",icon:"menu",onClick:t.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),g(Ft,{"show-if-above":"",modelValue:t.leftDrawerOpen,"onUpdate:modelValue":e[8]||(e[8]=h=>t.leftDrawerOpen=h),side:"left",bordered:""},{default:y(()=>[g(Gt,{style:{height:"94vh"}},{default:y(()=>[rc,g(o),g(a),g(c)]),_:1})]),_:1},8,["modelValue"]),g(Ft,{"show-if-above":"",modelValue:t.rightDrawerOpen,"onUpdate:modelValue":e[9]||(e[9]=h=>t.rightDrawerOpen=h),side:"right",bordered:""},{default:y(()=>[g(Gt,{style:{height:"94vh"}},{default:y(()=>[g(l)]),_:1})]),_:1},8,["modelValue"]),g(Fn,null,{default:y(()=>[g(u)]),_:1})]),_:1})],64)}var Nc=Tt(Ya,[["render",nc]]);export{Nc as default};
