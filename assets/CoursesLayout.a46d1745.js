import{Q as In,a as xt,b as En,C as Bt}from"./ClosePopup.3e8b7d30.js";import{Q as Tn}from"./QMenu.0eae9f81.js";import{d as Ge,_ as Ke,r as P,o as E,E as O,H as Fe,U as br,a as p,w as y,V as wr,F as q,e as Cn,v as S,g as T,W as On,n as Sr,X as An,Y as Rn,s as kn,h as R,B as Pn,Z as He,k as Nn,$ as De,c as te,a0 as Le,P as fe,a1 as ot,G as H,Q as N,a2 as Dn}from"./index.fb8c9c73.js";import{Q as ze}from"./QCard.8c09a937.js";import{Q as $t}from"./QSpace.fce1261d.js";import{Q as at}from"./QBar.d2c6d207.js";import{Q as Mn,a as Ln,b as Ft}from"./QDrawer.a762e7d8.js";import{b as Ht,c as Un,Q as xn,a as Bn}from"./QLayout.dedb3d33.js";import{u as Je}from"./store.0939f58b.js";import{T as Ir,P as $n}from"./PreferencesComponent.0420aa85.js";import{W as Fn,A as Hn}from"./WPComponent.39aa1604.js";import{u as zn,a as Vn}from"./use-dark.644ac635.js";import{T as zt}from"./TouchPan.8e81a53d.js";import{s as Vt,d as ct}from"./scroll.dff248f3.js";import{I as jn}from"./ImagePager.31e42b0e.js";import{Q as Wn}from"./QExpansionItem.2f37fcb9.js";import{Q as qn}from"./QList.acbbda16.js";import"./transform.9aa67f3e.js";import{o as Gn,l as Kn,m as Ot,w as At,i as me,n as Jn,p as Er,q as vt,J as _t,_ as yt,E as Qn,h as Tr,t as bt,v as Yn}from"./firebase.84a31673.js";import{s as Z}from"./selectAll.be636dd1.js";import"./use-prevent-scroll.94b8e8c1.js";import"./touch.6b3a5d84.js";import"./axios.84ae42e4.js";import"./QImg.a58818f4.js";import"./QItemLabel.ed646ca6.js";import"./QToggle.6892f496.js";import"./QSelect.0fd35234.js";const Xn=Ge({name:"CoursePager",components:{TileComponent:Ir},props:[],setup(){return{store:Je()}},methods:{}}),Zn=q("div",{class:"text-panel q-ma-md text-center text-h6"},"My Courses",-1);function ei(t,e,r,n,i,s){const o=P("TileComponent");return E(),O(Fe,null,[Zn,(E(!0),O(Fe,null,br(this.store.courses,(a,c)=>(E(),O("span",{key:c},[p(o,{tileData:a,imgUrl:a.coverUrl,targetUrl:null,ck:c,aid:null,pgIdx:null,imgIdx:null,tileType:"course"},null,8,["tileData","imgUrl","ck"])]))),128)),p(ze,{flat:"",bordered:"",class:"q-ma-md q-pa-md cursor-pointer tile-component flex flex-center",onClick:e[0]||(e[0]=a=>this.store.newCourse())},{default:y(()=>[p(wr,{name:"add",class:"text-h1"})]),_:1})],64)}var ti=Ke(Xn,[["render",ei]]);const jt=["vertical","horizontal"],lt={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Wt={prevent:!0,mouse:!0,mouseAllDir:!0},qt=t=>t>=250?50:Math.ceil(t/5);var ri=Cn({name:"QScrollArea",props:{...zn,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(t,{slots:e,emit:r}){const n=S(!1),i=S(!1),s=S(!1),o={vertical:S(0),horizontal:S(0)},a={vertical:{ref:S(null),position:S(0),size:S(0)},horizontal:{ref:S(null),position:S(0),size:S(0)}},{proxy:c}=Nn(),l=Vn(t,c.$q);let u=null,h;const m=S(null),I=T(()=>"q-scrollarea"+(l.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=T(()=>{const d=a.vertical.size.value-o.vertical.value;if(d<=0)return 0;const g=De(a.vertical.position.value/d,0,1);return Math.round(g*1e4)/1e4}),a.vertical.thumbHidden=T(()=>(t.visible===null?s.value:t.visible)!==!0&&n.value===!1&&i.value===!1||a.vertical.size.value<=o.vertical.value+1),a.vertical.thumbStart=T(()=>a.vertical.percentage.value*(o.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=T(()=>Math.round(De(o.vertical.value*o.vertical.value/a.vertical.size.value,qt(o.vertical.value),o.vertical.value))),a.vertical.style=T(()=>({...t.thumbStyle,...t.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=T(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=T(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=T(()=>{const d=a.horizontal.size.value-o.horizontal.value;if(d<=0)return 0;const g=De(Math.abs(a.horizontal.position.value)/d,0,1);return Math.round(g*1e4)/1e4}),a.horizontal.thumbHidden=T(()=>(t.visible===null?s.value:t.visible)!==!0&&n.value===!1&&i.value===!1||a.horizontal.size.value<=o.horizontal.value+1),a.horizontal.thumbStart=T(()=>a.horizontal.percentage.value*(o.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=T(()=>Math.round(De(o.horizontal.value*o.horizontal.value/a.horizontal.size.value,qt(o.horizontal.value),o.horizontal.value))),a.horizontal.style=T(()=>({...t.thumbStyle,...t.horizontalThumbStyle,[c.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=T(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=T(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const w=T(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?t.contentStyle:t.contentActiveStyle),Ce=[[zt,d=>{le(d,"vertical")},void 0,{vertical:!0,...Wt}]],se=[[zt,d=>{le(d,"horizontal")},void 0,{horizontal:!0,...Wt}]];function oe(){const d={};return jt.forEach(g=>{const _=a[g];d[g+"Position"]=_.position.value,d[g+"Percentage"]=_.percentage.value,d[g+"Size"]=_.size.value,d[g+"ContainerSize"]=o[g].value}),d}const ae=On(()=>{const d=oe();d.ref=c,r("scroll",d)},0);function X(d,g,_){if(jt.includes(d)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(d==="vertical"?Vt:ct)(m.value,g,_)}function Oe({height:d,width:g}){let _=!1;o.vertical.value!==d&&(o.vertical.value=d,_=!0),o.horizontal.value!==g&&(o.horizontal.value=g,_=!0),_===!0&&ke()}function Ae({position:d}){let g=!1;a.vertical.position.value!==d.top&&(a.vertical.position.value=d.top,g=!0),a.horizontal.position.value!==d.left&&(a.horizontal.position.value=d.left,g=!0),g===!0&&ke()}function ce({height:d,width:g}){a.horizontal.size.value!==g&&(a.horizontal.size.value=g,ke()),a.vertical.size.value!==d&&(a.vertical.size.value=d,ke())}function le(d,g){const _=a[g];if(d.isFirst===!0){if(_.thumbHidden.value===!0)return;h=_.position.value,i.value=!0}else if(i.value!==!0)return;d.isFinal===!0&&(i.value=!1);const G=lt[g],Ne=o[g].value,bn=(_.size.value-Ne)/(Ne-_.thumbSize.value),wn=d.distance[G.dist],Sn=h+(d.direction===G.dir?1:-1)*wn*bn;Ut(Sn,g)}function Re(d,g){const _=a[g];if(_.thumbHidden.value!==!0){const G=d[lt[g].offset];if(G<_.thumbStart.value||G>_.thumbStart.value+_.thumbSize.value){const Ne=G-_.thumbSize.value/2;Ut(Ne/o[g].value*_.size.value,g)}_.ref.value!==null&&_.ref.value.dispatchEvent(new MouseEvent(d.type,d))}}function ue(d){Re(d,"vertical")}function st(d){Re(d,"horizontal")}function ke(){n.value=!0,u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,n.value=!1},t.delay),t.onScroll!==void 0&&ae()}function Ut(d,g){m.value[lt[g].scroll]=d}function _n(){s.value=!0}function yn(){s.value=!1}let Pe=null;return Sr(()=>c.$q.lang.rtl,d=>{m.value!==null&&ct(m.value,Math.abs(a.horizontal.position.value)*(d===!0?-1:1))}),An(()=>{Pe={top:a.vertical.position.value,left:a.horizontal.position.value}}),Rn(()=>{if(Pe===null)return;const d=m.value;d!==null&&(ct(d,Pe.left),Vt(d,Pe.top))}),kn(ae.cancel),Object.assign(c,{getScrollTarget:()=>m.value,getScroll:oe,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:X,setScrollPercentage(d,g,_){X(d,g*(a[d].size.value-o[d].value)*(d==="horizontal"&&c.$q.lang.rtl===!0?-1:1),_)}}),()=>R("div",{class:I.value,onMouseenter:_n,onMouseleave:yn},[R("div",{ref:m,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:t.tabindex!==void 0?t.tabindex:void 0},[R("div",{class:"q-scrollarea__content absolute",style:w.value},Pn(e.default,[R(Ht,{debounce:0,onResize:ce})])),R(Un,{axis:"both",onScroll:Ae})]),R(Ht,{debounce:0,onResize:Oe}),R("div",{class:a.vertical.barClass.value,style:[t.barStyle,t.verticalBarStyle],"aria-hidden":"true",onMousedown:ue}),R("div",{class:a.horizontal.barClass.value,style:[t.barStyle,t.horizontalBarStyle],"aria-hidden":"true",onMousedown:st}),He(R("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),Ce),He(R("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),se)])}});const ni=Ge({name:"PagePager",components:{TileComponent:Ir},props:[],setup(){const t=S(null);return{store:Je(),pagePagerScrollArea:t}},mounted(){Sr(this.store.currentAssignment.pages,async(t,e)=>{console.log("newPage detected, scrolling to 1.0"),this.pagePagerScrollArea.setScrollPercentage("vertical",1)})},methods:{newPageCB(){this.store.newPage(),this.pagePagerScrollArea.setScrollPercentage("vertical",1)}}}),ii=q("div",{class:"text-panel q-ma-md text-center text-h6"},"Assignment Pages",-1),si={key:0};function oi(t,e,r,n,i,s){const o=P("TileComponent");return E(),te(ri,{style:{height:"95vh"},ref:"pagePagerScrollArea"},{default:y(()=>[ii,this.store.currentCourse?(E(),O("span",si,[(E(!0),O(Fe,null,br(this.store.currentAssignment.pages,(a,c)=>(E(),O("span",{key:c},[p(o,{tileData:a,imgUrl:a.imgs&&a.imgs.length>0?a.imgs[0].url:"",targetUrl:null,ck:this.store.ck,aid:this.store.aid,pgIdx:c,imgIdx:a.imgIdx,tileType:"page"},null,8,["tileData","imgUrl","ck","aid","pgIdx","imgIdx"])]))),128))])):Le("",!0),p(ze,{flat:"",bordered:"",class:"q-ma-md q-pa-md cursor-pointer tile-component flex flex-center",onClick:e[0]||(e[0]=a=>this.newPageCB())},{default:y(()=>[p(wr,{name:"add",class:"text-h1"})]),_:1})]),_:1},512)}var ai=Ke(ni,[["render",oi]]),Cr="https://js.stripe.com/v3",ci=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,Gt="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",li=function(){for(var e=document.querySelectorAll('script[src^="'.concat(Cr,'"]')),r=0;r<e.length;r++){var n=e[r];if(!!ci.test(n.src))return n}return null},ui=function(e){var r=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(Cr).concat(r);var i=document.head||document.body;if(!i)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return i.appendChild(n),n},di=function(e,r){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"1.52.1",startTime:r})},Me=null,hi=function(e){return Me!==null||(Me=new Promise(function(r,n){if(typeof window=="undefined"||typeof document=="undefined"){r(null);return}if(window.Stripe&&e&&console.warn(Gt),window.Stripe){r(window.Stripe);return}try{var i=li();i&&e?console.warn(Gt):i||(i=ui(e)),i.addEventListener("load",function(){window.Stripe?r(window.Stripe):n(new Error("Stripe.js not available"))}),i.addEventListener("error",function(){n(new Error("Failed to load Stripe.js"))})}catch(s){n(s);return}})),Me},fi=function(e,r,n){if(e===null)return null;var i=e.apply(void 0,r);return di(i,n),i},Or=Promise.resolve().then(function(){return hi(null)}),Ar=!1;Or.catch(function(t){Ar||console.warn(t)});var pi=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];Ar=!0;var i=Date.now();return Or.then(function(s){return fi(s,r,i)})};/**
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
 */const Rr=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=i&63|128):(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=i&63|128)}return e},gi=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const i=t[r++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[r++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[r++],o=t[r++],a=t[r++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const s=t[r++],o=t[r++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},mi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let m=(a&15)<<2|l>>6,I=l&63;c||(I=64,o||(m=64)),n.push(r[u],r[h],r[m],r[I])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Rr(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gi(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const s=r[t.charAt(i++)],a=i<t.length?r[t.charAt(i)]:0;++i;const l=i<t.length?r[t.charAt(i)]:64;++i;const h=i<t.length?r[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const m=s<<2|a>>4;if(n.push(m),l!==64){const I=a<<4&240|l>>2;if(n.push(I),h!==64){const w=l<<6&192|h;n.push(w)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},vi=function(t){const e=Rr(t);return mi.encodeByteArray(e,!0)},kr=function(t){return vi(t).replace(/\./g,"")};function _i(){return typeof indexedDB=="object"}function yi(){return new Promise((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(r){e(r)}})}/**
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
 */const bi="FirebaseError";class we extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=bi,Object.setPrototypeOf(this,we.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pr.prototype.create)}}class Pr{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?wi(s,n):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new we(i,a,n)}}function wi(t,e){return t.replace(Si,(r,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const Si=/\{\$([^}]+)}/g;class wt{constructor(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var b;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(b||(b={}));const Ii={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},Ei=b.INFO,Ti={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},Ci=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=Ti[e];if(i)console[i](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oi{constructor(e){this.name=e,this._logLevel=Ei,this._logHandler=Ci,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in b))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ii[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...e),this._logHandler(this,b.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...e),this._logHandler(this,b.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,b.INFO,...e),this._logHandler(this,b.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,b.WARN,...e),this._logHandler(this,b.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...e),this._logHandler(this,b.ERROR,...e)}}/**
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
 */class Ai{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(Ri(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function Ri(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const St="@firebase/app",Kt="0.7.33";/**
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
 */const Q=new Oi("@firebase/app"),ki="@firebase/app-compat",Pi="@firebase/analytics-compat",Ni="@firebase/analytics",Di="@firebase/app-check-compat",Mi="@firebase/app-check",Li="@firebase/auth",Ui="@firebase/auth-compat",xi="@firebase/database",Bi="@firebase/database-compat",$i="@firebase/functions",Fi="@firebase/functions-compat",Hi="@firebase/installations",zi="@firebase/installations-compat",Vi="@firebase/messaging",ji="@firebase/messaging-compat",Wi="@firebase/performance",qi="@firebase/performance-compat",Gi="@firebase/remote-config",Ki="@firebase/remote-config-compat",Ji="@firebase/storage",Qi="@firebase/storage-compat",Yi="@firebase/firestore",Xi="@firebase/firestore-compat",Zi="firebase",es="9.10.0";/**
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
 */const ts="[DEFAULT]",rs={[St]:"fire-core",[ki]:"fire-core-compat",[Ni]:"fire-analytics",[Pi]:"fire-analytics-compat",[Mi]:"fire-app-check",[Di]:"fire-app-check-compat",[Li]:"fire-auth",[Ui]:"fire-auth-compat",[xi]:"fire-rtdb",[Bi]:"fire-rtdb-compat",[$i]:"fire-fn",[Fi]:"fire-fn-compat",[Hi]:"fire-iid",[zi]:"fire-iid-compat",[Vi]:"fire-fcm",[ji]:"fire-fcm-compat",[Wi]:"fire-perf",[qi]:"fire-perf-compat",[Gi]:"fire-rc",[Ki]:"fire-rc-compat",[Ji]:"fire-gcs",[Qi]:"fire-gcs-compat",[Yi]:"fire-fst",[Xi]:"fire-fst-compat","fire-js":"fire-js",[Zi]:"fire-js-all"};/**
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
 */const Nr=new Map,Jt=new Map;function ns(t,e){try{t.container.addComponent(e)}catch(r){Q.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function ve(t){const e=t.name;if(Jt.has(e))return Q.debug(`There were multiple attempts to register component ${e}.`),!1;Jt.set(e,t);for(const r of Nr.values())ns(r,t);return!0}function Dr(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const is={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qe=new Pr("app","Firebase",is);/**
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
 */const Ye=es;function ss(t=ts){const e=Nr.get(t);if(!e)throw Qe.create("no-app",{appName:t});return e}function pe(t,e,r){var n;let i=(n=rs[t])!==null&&n!==void 0?n:t;r&&(i+=`-${r}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Q.warn(a.join(" "));return}ve(new wt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const os="firebase-heartbeat-database",as=1,_e="firebase-heartbeat-store";let ut=null;function Mr(){return ut||(ut=Gn(os,as,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_e)}}}).catch(t=>{throw Qe.create("idb-open",{originalErrorMessage:t.message})})),ut}async function cs(t){var e;try{return(await Mr()).transaction(_e).objectStore(_e).get(Lr(t))}catch(r){if(r instanceof we)Q.warn(r.message);else{const n=Qe.create("idb-get",{originalErrorMessage:(e=r)===null||e===void 0?void 0:e.message});Q.warn(n.message)}}}async function Qt(t,e){var r;try{const i=(await Mr()).transaction(_e,"readwrite");return await i.objectStore(_e).put(e,Lr(t)),i.done}catch(n){if(n instanceof we)Q.warn(n.message);else{const i=Qe.create("idb-set",{originalErrorMessage:(r=n)===null||r===void 0?void 0:r.message});Q.warn(i.message)}}}function Lr(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ls=1024,us=30*24*60*60*1e3;class ds{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new fs(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Yt();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=us}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Yt(),{heartbeatsToSend:r,unsentEntries:n}=hs(this._heartbeatsCache.heartbeats),i=kr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Yt(){return new Date().toISOString().substring(0,10)}function hs(t,e=ls){const r=[];let n=t.slice();for(const i of t){const s=r.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Xt(r)>e){s.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),Xt(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class fs{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _i()?yi().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cs(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qt(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qt(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xt(t){return kr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ps(t){ve(new wt("platform-logger",e=>new Ai(e),"PRIVATE")),ve(new wt("heartbeat",e=>new ds(e),"PRIVATE")),pe(St,Kt,t),pe(St,Kt,"esm2017"),pe("fire-js","")}ps("");pe("firestore-stripe-payments","0.0.6");function gs(t,e){return Rt.create(t,e)}class Rt{constructor(e,r){this.app=e,this.options=r,this.components={}}static create(e,r){return new Rt(e,r)}get customersCollection(){return this.options.customersCollection}get productsCollection(){return this.options.productsCollection}getComponent(e){let r=this.components[e];return r||null}setComponent(e,r){this.components[e]=r}}class D extends Error{constructor(e,r,n){super(r),this.code=e,this.message=r,this.cause=n}}/**
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
 */var ms=function(t){for(var e=[],r=0,n=0;n<t.length;n++){var i=t.charCodeAt(n);i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=i&63|128):(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=i&63|128)}return e},vs=function(t){for(var e=[],r=0,n=0;r<t.length;){var i=t[r++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){var s=t[r++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){var s=t[r++],o=t[r++],a=t[r++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{var s=t[r++],o=t[r++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},_s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],i=0;i<t.length;i+=3){var s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4,m=(a&15)<<2|l>>6,I=l&63;c||(I=64,o||(m=64)),n.push(r[u],r[h],r[m],r[I])}return n.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ms(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vs(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],i=0;i<t.length;){var s=r[t.charAt(i++)],o=i<t.length,a=o?r[t.charAt(i)]:0;++i;var c=i<t.length,l=c?r[t.charAt(i)]:64;++i;var u=i<t.length,h=u?r[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();var m=s<<2|a>>4;if(n.push(m),l!==64){var I=a<<4&240|l>>2;if(n.push(I),h!==64){var w=l<<6&192|h;n.push(w)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ys=function(t){try{return _s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function C(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bs(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(C())}function ws(){var t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ss(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Is(){var t=C();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}/**
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
 */var Es="FirebaseError",Xe=function(t){Kn(e,t);function e(r,n,i){var s=t.call(this,n)||this;return s.code=r,s.customData=i,s.name=Es,Object.setPrototypeOf(s,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,Ze.prototype.create),s}return e}(Error),Ze=function(){function t(e,r,n){this.service=e,this.serviceName=r,this.errors=n}return t.prototype.create=function(e){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];var i=r[0]||{},s=this.service+"/"+e,o=this.errors[e],a=o?Ts(o,i):"Error",c=this.serviceName+": "+a+" ("+s+").",l=new Xe(s,c,i);return l},t}();function Ts(t,e){return t.replace(Cs,function(r,n){var i=e[n];return i!=null?String(i):"<"+n+"?>"})}var Cs=/\{\$([^}]+)}/g;function Os(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ur(t,e){if(t===e)return!0;for(var r=Object.keys(t),n=Object.keys(e),i=0,s=r;i<s.length;i++){var o=s[i];if(!n.includes(o))return!1;var a=t[o],c=e[o];if(Zt(a)&&Zt(c)){if(!Ur(a,c))return!1}else if(a!==c)return!1}for(var l=0,u=n;l<u.length;l++){var o=u[l];if(!r.includes(o))return!1}return!0}function Zt(t){return t!==null&&typeof t=="object"}/**
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
 */function Se(t){for(var e=[],r=function(c,l){Array.isArray(l)?l.forEach(function(u){e.push(encodeURIComponent(c)+"="+encodeURIComponent(u))}):e.push(encodeURIComponent(c)+"="+encodeURIComponent(l))},n=0,i=Object.entries(t);n<i.length;n++){var s=i[n],o=s[0],a=s[1];r(o,a)}return e.length?"&"+e.join("&"):""}function As(t,e){var r=new Rs(t,e);return r.subscribe.bind(r)}var Rs=function(){function t(e,r){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(function(){e(n)}).catch(function(i){n.error(i)})}return t.prototype.next=function(e){this.forEachObserver(function(r){r.next(e)})},t.prototype.error=function(e){this.forEachObserver(function(r){r.error(e)}),this.close(e)},t.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},t.prototype.subscribe=function(e,r,n){var i=this,s;if(e===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");ks(e,["next","error","complete"])?s=e:s={next:e,error:r,complete:n},s.next===void 0&&(s.next=dt),s.error===void 0&&(s.error=dt),s.complete===void 0&&(s.complete=dt);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{i.finalError?s.error(i.finalError):s.complete()}catch{}}),this.observers.push(s),o},t.prototype.unsubscribeOne=function(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))},t.prototype.forEachObserver=function(e){if(!this.finalized)for(var r=0;r<this.observers.length;r++)this.sendOne(r,e)},t.prototype.sendOne=function(e,r){var n=this;this.task.then(function(){if(n.observers!==void 0&&n.observers[e]!==void 0)try{r(n.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})},t.prototype.close=function(e){var r=this;this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(function(){r.observers=void 0,r.onNoObservers=void 0}))},t}();function ks(t,e){if(typeof t!="object"||t===null)return!1;for(var r=0,n=e;r<n.length;r++){var i=n[r];if(i in t&&typeof t[i]=="function")return!0}return!1}function dt(){}/**
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
 */function et(t){return t&&t._delegate?t._delegate:t}/*! *****************************************************************************
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
***************************************************************************** */function A(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var n=Array(t),i=0,e=0;e<r;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)n[i]=s[o];return n}/**
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
 */var K,v;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(v||(v={}));var Ps={debug:v.DEBUG,verbose:v.VERBOSE,info:v.INFO,warn:v.WARN,error:v.ERROR,silent:v.SILENT},Ns=v.INFO,Ds=(K={},K[v.DEBUG]="log",K[v.VERBOSE]="log",K[v.INFO]="info",K[v.WARN]="warn",K[v.ERROR]="error",K),Ms=function(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];if(!(e<t.logLevel)){var i=new Date().toISOString(),s=Ds[e];if(s)console[s].apply(console,A(["["+i+"]  "+t.name+":"],r));else throw new Error("Attempted to log a message with an invalid logType (value: "+e+")")}},Ls=function(){function t(e){this.name=e,this._logLevel=Ns,this._logHandler=Ms,this._userLogHandler=null}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in v))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(e){this._logLevel=typeof e=="string"?Ps[e]:e},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,A([this,v.DEBUG],e)),this._logHandler.apply(this,A([this,v.DEBUG],e))},t.prototype.log=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,A([this,v.VERBOSE],e)),this._logHandler.apply(this,A([this,v.VERBOSE],e))},t.prototype.info=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,A([this,v.INFO],e)),this._logHandler.apply(this,A([this,v.INFO],e))},t.prototype.warn=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,A([this,v.WARN],e)),this._logHandler.apply(this,A([this,v.WARN],e))},t.prototype.error=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,A([this,v.ERROR],e)),this._logHandler.apply(this,A([this,v.ERROR],e))},t}(),er=function(){function t(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();function xr(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Us=xr,Br=new Ze("auth","Firebase",xr());/**
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
 */const tr=new Ls("@firebase/auth");function Ue(t,...e){tr.logLevel<=v.ERROR&&tr.error(`Auth (${Ye}): ${t}`,...e)}/**
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
 */function B(t,...e){throw kt(t,...e)}function M(t,...e){return kt(t,...e)}function xs(t,e,r){const n=Object.assign(Object.assign({},Us()),{[e]:r});return new Ze("auth","Firebase",n).create(e,{appName:t.name})}function kt(t,...e){if(typeof t!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(r,...n)}return Br.create(t,...e)}function f(t,e,...r){if(!t)throw kt(e,...r)}function U(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ue(e),new Error(e)}function $(t,e){t||U(e)}/**
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
 */const rr=new Map;function x(t){$(t instanceof Function,"Expected a class definition");let e=rr.get(t);return e?($(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rr.set(t,e),e)}/**
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
 */function Bs(t,e){const r=Dr(t,"auth");if(r.isInitialized()){const i=r.getImmediate(),s=r.getOptions();if(Ur(s,e!=null?e:{}))return i;B(i,"already-initialized")}return r.initialize({options:e})}function $s(t,e){const r=(e==null?void 0:e.persistence)||[],n=(Array.isArray(r)?r:[r]).map(x);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function It(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Fs(){return nr()==="http:"||nr()==="https:"}function nr(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Hs(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fs()||ws()||"connection"in navigator)?navigator.onLine:!0}function zs(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ie{constructor(e,r){this.shortDelay=e,this.longDelay=r,$(r>e,"Short delay should be less than long delay!"),this.isMobile=bs()||Ss()}get(){return Hs()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Pt(t,e){$(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
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
 */class Et{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;U("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;U("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;U("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Vs={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const js=new Ie(3e4,6e4);function Ws(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tt(t,e,r,n,i={}){return $r(t,i,()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});const a=Se(Object.assign({key:t.config.apiKey},o)).slice(1),c=new(Et.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),Et.fetch()(Fr(t,t.config.apiHost,r,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function $r(t,e,r){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},Vs),e);try{const i=new Gs(t),s=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ht(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ht(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ht(t,"email-already-in-use",o);const u=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw xs(t,u,l);B(t,u)}}catch(i){if(i instanceof Xe)throw i;B(t,"network-request-failed")}}async function qs(t,e,r,n,i={}){const s=await tt(t,e,r,n,i);return"mfaPendingCredential"in s&&B(t,"multi-factor-auth-required",{serverResponse:s}),s}function Fr(t,e,r,n){const i=`${e}${r}?${n}`;return t.config.emulator?Pt(t.config,i):`${t.config.apiScheme}://${i}`}class Gs{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(M(this.auth,"timeout")),js.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ht(t,e,r){const n={appName:t.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=M(t,e,n);return i.customData._tokenResponse=r,i}/**
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
 */async function Ks(t,e){return tt(t,"POST","/v1/accounts:delete",e)}async function Js(t,e){return tt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ge(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qs(t,e=!1){const r=et(t),n=await r.getIdToken(e),i=Nt(n);f(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:ge(ft(i.auth_time)),issuedAtTime:ge(ft(i.iat)),expirationTime:ge(ft(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ft(t){return Number(t)*1e3}function Nt(t){const[e,r,n]=t.split(".");if(e===void 0||r===void 0||n===void 0)return Ue("JWT malformed, contained fewer than 3 sections"),null;try{const i=ys(r);return i?JSON.parse(i):(Ue("Failed to decode base64 JWT payload"),null)}catch(i){return Ue("Caught error parsing JWT payload as JSON",i),null}}function Ys(t){const e=Nt(t);return f(e,"internal-error"),f(typeof e.exp!="undefined","internal-error"),f(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ye(t,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof Xe&&Xs(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function Xs({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Zs{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Hr{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=ge(this.lastLoginAt),this.creationTime=ge(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ve(t){var e;const r=t.auth,n=await t.getIdToken(),i=await ye(t,Js(r,{idToken:n}));f(i==null?void 0:i.users.length,r,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ro(s.providerUserInfo):[],a=to(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Hr(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function eo(t){const e=et(t);await Ve(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function to(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function ro(t){return t.map(e=>{var{providerId:r}=e,n=Ot(e,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function no(t,e){const r=await $r(t,{},()=>{const n=Se({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Fr(t,i,"/v1/token",`key=${s}`);return Et.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
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
 */class be{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){f(e.idToken,"internal-error"),f(typeof e.idToken!="undefined","internal-error"),f(typeof e.refreshToken!="undefined","internal-error");const r="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Ys(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}async getToken(e,r=!1){return f(!this.accessToken||this.refreshToken,e,"user-token-expired"),!r&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:i,expiresIn:s}=await no(e,r);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:i,expirationTime:s}=r,o=new be;return n&&(f(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(f(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(f(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new be,this.toJSON())}_performRefresh(){return U("not implemented")}}/**
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
 */function F(t,e){f(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class J{constructor(e){var{uid:r,auth:n,stsTokenManager:i}=e,s=Ot(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Zs(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.metadata=new Hr(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const r=await ye(this,this.stsTokenManager.getToken(this.auth,e));return f(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return Qs(this,e)}reload(){return eo(this)}_assign(e){this!==e&&(f(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new J(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){f(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await Ve(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ye(this,Ks(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var n,i,s,o,a,c,l,u;const h=(n=r.displayName)!==null&&n!==void 0?n:void 0,m=(i=r.email)!==null&&i!==void 0?i:void 0,I=(s=r.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=r.photoURL)!==null&&o!==void 0?o:void 0,Ce=(a=r.tenantId)!==null&&a!==void 0?a:void 0,se=(c=r._redirectEventId)!==null&&c!==void 0?c:void 0,oe=(l=r.createdAt)!==null&&l!==void 0?l:void 0,ae=(u=r.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:X,emailVerified:Oe,isAnonymous:Ae,providerData:ce,stsTokenManager:le}=r;f(X&&le,e,"internal-error");const Re=be.fromJSON(this.name,le);f(typeof X=="string",e,"internal-error"),F(h,e.name),F(m,e.name),f(typeof Oe=="boolean",e,"internal-error"),f(typeof Ae=="boolean",e,"internal-error"),F(I,e.name),F(w,e.name),F(Ce,e.name),F(se,e.name),F(oe,e.name),F(ae,e.name);const ue=new J({uid:X,auth:e,email:m,emailVerified:Oe,displayName:h,isAnonymous:Ae,photoURL:w,phoneNumber:I,tenantId:Ce,stsTokenManager:Re,createdAt:oe,lastLoginAt:ae});return ce&&Array.isArray(ce)&&(ue.providerData=ce.map(st=>Object.assign({},st))),se&&(ue._redirectEventId=se),ue}static async _fromIdTokenResponse(e,r,n=!1){const i=new be;i.updateFromServerResponse(r);const s=new J({uid:r.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Ve(s),s}}/**
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
 */class zr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}zr.type="NONE";const ir=zr;/**
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
 */function xe(t,e,r){return`firebase:${t}:${e}:${r}`}class re{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=xe(this.userKey,i.apiKey,s),this.fullPersistenceKey=xe("persistence",i.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?J._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new re(x(ir),e,n);const i=(await Promise.all(r.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||x(ir);const o=xe(n,e.config.apiKey,e.name);let a=null;for(const l of r)try{const u=await l._get(o);if(u){const h=J._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new re(s,e,n):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(r.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new re(s,e,n))}}/**
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
 */function sr(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gr(e))return"Blackberry";if(Kr(e))return"Webos";if(Dt(e))return"Safari";if((e.includes("chrome/")||jr(e))&&!e.includes("edge/"))return"Chrome";if(qr(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Vr(t=C()){return/firefox\//i.test(t)}function Dt(t=C()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jr(t=C()){return/crios\//i.test(t)}function Wr(t=C()){return/iemobile/i.test(t)}function qr(t=C()){return/android/i.test(t)}function Gr(t=C()){return/blackberry/i.test(t)}function Kr(t=C()){return/webos/i.test(t)}function rt(t=C()){return/iphone|ipad|ipod/i.test(t)}function io(t=C()){var e;return rt(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function so(){return Is()&&document.documentMode===10}function Jr(t=C()){return rt(t)||qr(t)||Kr(t)||Gr(t)||/windows phone/i.test(t)||Wr(t)}function oo(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Qr(t,e=[]){let r;switch(t){case"Browser":r=sr(C());break;case"Worker":r=`${sr(C())}-${t}`;break;default:r=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${Ye}/${n}`}/**
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
 */class ao{constructor(e,r){this.app=e,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new or(this),this.idTokenSubscription=new or(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Br,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=x(r)),this._initializationPromise=this.queue(async()=>{var n;this._deleted||(this.persistenceManager=await re.create(this,e),!this._deleted&&(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(r),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var r;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,s=n==null?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(n=o.user)}return n?n._redirectEventId?(f(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await Ve(e)}catch(r){if(r.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zs()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const r=e?et(e):null;return r&&f(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&f(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(x(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ze("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&x(e)||this._popupRedirectResolver;f(r,this,"argument-error"),this.redirectPersistenceManager=await re.create(this,[x(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,i){if(this._deleted)return()=>{};const s=typeof r=="function"?r:r.next.bind(r),o=this._isInitialized?Promise.resolve():this._initializationPromise;return f(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof r=="function"?e.addObserver(r,n,i):e.addObserver(r)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return f(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Yr(t){return et(t)}class or{constructor(e){this.auth=e,this.observer=null,this.addObserver=As(r=>this.observer=r)}get next(){return f(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Xr{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return U("not implemented")}_getIdTokenResponse(e){return U("not implemented")}_linkToIdToken(e,r){return U("not implemented")}_getReauthenticationResolver(e){return U("not implemented")}}/**
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
 */async function ne(t,e){return qs(t,"POST","/v1/accounts:signInWithIdp",Ws(t,e))}/**
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
 */const co="http://localhost";class Y extends Xr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new Y(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):B("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=r,s=Ot(r,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Y(n,i);return Object.assign(o,s),o}_getIdTokenResponse(e){const r=this.buildRequest();return ne(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,ne(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,ne(e,r)}buildRequest(){const e={requestUri:co,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=Se(r)}return e}}/**
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
 */class Zr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ee extends Zr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class z extends Ee{constructor(){super("facebook.com")}static credential(e){return Y._fromParams({providerId:z.PROVIDER_ID,signInMethod:z.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return z.credentialFromTaggedObject(e)}static credentialFromError(e){return z.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return z.credential(e.oauthAccessToken)}catch{return null}}}z.FACEBOOK_SIGN_IN_METHOD="facebook.com";z.PROVIDER_ID="facebook.com";/**
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
 */class V extends Ee{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return Y._fromParams({providerId:V.PROVIDER_ID,signInMethod:V.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return V.credentialFromTaggedObject(e)}static credentialFromError(e){return V.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n}=e;if(!r&&!n)return null;try{return V.credential(r,n)}catch{return null}}}V.GOOGLE_SIGN_IN_METHOD="google.com";V.PROVIDER_ID="google.com";/**
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
 */class j extends Ee{constructor(){super("github.com")}static credential(e){return Y._fromParams({providerId:j.PROVIDER_ID,signInMethod:j.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return j.credentialFromTaggedObject(e)}static credentialFromError(e){return j.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return j.credential(e.oauthAccessToken)}catch{return null}}}j.GITHUB_SIGN_IN_METHOD="github.com";j.PROVIDER_ID="github.com";/**
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
 */class W extends Ee{constructor(){super("twitter.com")}static credential(e,r){return Y._fromParams({providerId:W.PROVIDER_ID,signInMethod:W.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return W.credentialFromTaggedObject(e)}static credentialFromError(e){return W.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=e;if(!r||!n)return null;try{return W.credential(r,n)}catch{return null}}}W.TWITTER_SIGN_IN_METHOD="twitter.com";W.PROVIDER_ID="twitter.com";/**
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
 */class ie{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,n,i=!1){const s=await J._fromIdTokenResponse(e,n,i),o=ar(n);return new ie({user:s,providerId:o,_tokenResponse:n,operationType:r})}static async _forOperation(e,r,n){await e._updateTokensIfNecessary(n,!0);const i=ar(n);return new ie({user:e,providerId:i,_tokenResponse:n,operationType:r})}}function ar(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class je extends Xe{constructor(e,r,n,i){var s;super(r.code,r.message),this.operationType=n,this.user=i,this.name="FirebaseError",Object.setPrototypeOf(this,je.prototype),this.appName=e.name,this.code=r.code,this.tenantId=(s=e.tenantId)!==null&&s!==void 0?s:void 0,this.serverResponse=r.customData.serverResponse}static _fromErrorAndOperation(e,r,n,i){return new je(e,r,n,i)}}function en(t,e,r,n){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?je._fromErrorAndOperation(t,s,e,n):s})}async function lo(t,e,r=!1){const n=await ye(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return ie._forOperation(t,"link",n)}/**
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
 */async function uo(t,e,r=!1){const{auth:n}=t,i="reauthenticate";try{const s=await ye(t,en(n,i,e,t),r);f(s.idToken,n,"internal-error");const o=Nt(s.idToken);f(o,n,"internal-error");const{sub:a}=o;return f(t.uid===a,n,"user-mismatch"),ie._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&B(n,"user-mismatch"),s}}/**
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
 */async function ho(t,e,r=!1){const n="signIn",i=await en(t,n,e),s=await ie._fromIdTokenResponse(t,n,i);return r||await t._updateCurrentUser(s.user),s}const We="__sak";/**
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
 */class tn{constructor(e,r){this.storage=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(We,"1"),this.storage.removeItem(We),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}/**
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
 */function fo(){const t=C();return Dt(t)||rt(t)}const po=1e3,go=10;class rn extends tn{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fo()&&oo(),this.fallbackToPolling=Jr(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&e(r,i,n)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const n=e.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(n);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!r)return}const i=()=>{const o=this.storage.getItem(n);!r&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);so()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,go):i()}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)})},po)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}rn.type="LOCAL";const mo=rn;/**
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
 */class nn extends tn{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}nn.type="SESSION";const sn=nn;/**
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
 */function vo(t){return Promise.all(t.map(async e=>{try{const r=await e;return{fulfilled:!0,value:r}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class nt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(i=>i.isListeningto(e));if(r)return r;const n=new nt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:n,eventType:i,data:s}=r.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const a=Array.from(o).map(async l=>l(r.origin,s)),c=await vo(a);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nt.receivers=[];/**
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
 */class _o{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,n=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Mt("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(h){const m=h;if(m.data.eventId===l)switch(m.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:r},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function L(){return window}function yo(t){L().location.href=t}/**
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
 */function on(){return typeof L().WorkerGlobalScope!="undefined"&&typeof L().importScripts=="function"}async function bo(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wo(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function So(){return on()?self:null}/**
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
 */const an="firebaseLocalStorageDb",Io=1,qe="firebaseLocalStorage",cn="fbase_key";class Te{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function it(t,e){return t.transaction([qe],e?"readwrite":"readonly").objectStore(qe)}function Eo(){const t=indexedDB.deleteDatabase(an);return new Te(t).toPromise()}function Tt(){const t=indexedDB.open(an,Io);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(qe,{keyPath:cn})}catch(i){r(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(qe)?e(n):(n.close(),await Eo(),e(await Tt()))})})}async function cr(t,e,r){const n=it(t,!0).put({[cn]:e,value:r});return new Te(n).toPromise()}async function To(t,e){const r=it(t,!1).get(e),n=await new Te(r).toPromise();return n===void 0?null:n.value}function lr(t,e){const r=it(t,!0).delete(e);return new Te(r).toPromise()}const Co=800,Oo=3;class ln{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tt(),this.db)}async _withRetries(e){let r=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(r++>Oo)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return on()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nt._getInstance(So()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await bo(),!this.activeServiceWorker)return;this.sender=new _o(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);!n||((e=n[0])===null||e===void 0?void 0:e.fulfilled)&&((r=n[0])===null||r===void 0?void 0:r.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wo()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tt();return await cr(e,We,"1"),await lr(e,We),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>cr(n,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(n=>To(n,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>lr(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=it(i,!1).getAll();return new Te(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Co)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ln.type="LOCAL";const Ao=ln;/**
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
 */function Ro(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ko(t){return new Promise((e,r)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=i=>{const s=M("internal-error");s.customData=i,r(s)},n.type="text/javascript",n.charset="UTF-8",Ro().appendChild(n)})}function Po(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ie(3e4,6e4);/**
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
 */function No(t,e){return e?x(e):(f(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Lt extends Xr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ne(e,this._buildIdpRequest())}_linkToIdToken(e,r){return ne(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return ne(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function Do(t){return ho(t.auth,new Lt(t),t.bypassAuthState)}function Mo(t){const{auth:e,user:r}=t;return f(r,e,"internal-error"),uo(r,new Lt(t),t.bypassAuthState)}async function Lo(t){const{auth:e,user:r}=t;return f(r,e,"internal-error"),lo(r,new Lt(t),t.bypassAuthState)}/**
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
 */class un{constructor(e,r,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:n,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:r,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Do;case"linkViaPopup":case"linkViaRedirect":return Lo;case"reauthViaPopup":case"reauthViaRedirect":return Mo;default:B(this.auth,"internal-error")}}resolve(e){$(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Uo=new Ie(2e3,1e4);class ee extends un{constructor(e,r,n,i,s){super(e,r,i,s),this.provider=n,this.authWindow=null,this.pollId=null,ee.currentPopupAction&&ee.currentPopupAction.cancel(),ee.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return f(e,this.auth,"internal-error"),e}async onExecution(){$(this.filter.length===1,"Popup operations only handle one event");const e=Mt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(M(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(M(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ee.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(M(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Uo.get())};e()}}ee.currentPopupAction=null;/**
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
 */const xo="pendingRedirect",ur=new Map;class Bo extends un{constructor(e,r,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let e=ur.get(this.auth._key());if(!e){try{const n=await $o(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}ur.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $o(t,e){const r=Fo(e),n=await dr(t)._get(r)==="true";return await dr(t)._remove(r),n}function dr(t){return x(t._redirectPersistence)}function Fo(t){return xe(xo,t.config.apiKey,t.name)}async function Ho(t,e,r=!1){const n=Yr(t),i=No(n,e),o=await new Bo(n,i,r).execute();return o&&!r&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
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
 */const zo=10*60*1e3;class Vo{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(r=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jo(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var n;if(e.error&&!dn(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(M(this.auth,i))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const n=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zo&&this.cachedEventUids.clear(),this.cachedEventUids.has(hr(e))}saveEventToCache(e){this.cachedEventUids.add(hr(e)),this.lastProcessedEventTime=Date.now()}}function hr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dn({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jo(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dn(t);default:return!1}}/**
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
 */async function Wo(t,e={}){return tt(t,"GET","/v1/projects",e)}/**
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
 */const qo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Go=/^https?/;async function Ko(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Wo(t);for(const r of e)try{if(Jo(r))return}catch{}B(t,"unauthorized-domain")}function Jo(t){const e=It(),{protocol:r,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&n===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&o.hostname===n}if(!Go.test(r))return!1;if(qo.test(t))return n===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const Qo=new Ie(3e4,6e4);function fr(){const t=L().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function Yo(t){return new Promise((e,r)=>{var n,i,s;function o(){fr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fr(),r(M(t,"network-request-failed"))},timeout:Qo.get()})}if(!((i=(n=L().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=L().gapi)===null||s===void 0)&&s.load)o();else{const a=Po("iframefcb");return L()[a]=()=>{gapi.load?o():r(M(t,"network-request-failed"))},ko(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw Be=null,e})}let Be=null;function Xo(t){return Be=Be||Yo(t),Be}/**
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
 */const Zo=new Ie(5e3,15e3),ea="__/auth/iframe",ta="emulator/auth/iframe",ra={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},na=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ia(t){const e=t.config;f(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?Pt(e,ta):`https://${t.config.authDomain}/${ea}`,n={apiKey:e.apiKey,appName:t.name,v:Ye},i=na.get(t.config.apiHost);i&&(n.eid=i);const s=t._getFrameworks();return s.length&&(n.fw=s.join(",")),`${r}?${Se(n).slice(1)}`}async function sa(t){const e=await Xo(t),r=L().gapi;return f(r,t,"internal-error"),e.open({where:document.body,url:ia(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ra,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const o=M(t,"network-request-failed"),a=L().setTimeout(()=>{s(o)},Zo.get());function c(){L().clearTimeout(a),i(n)}n.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const oa={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aa=500,ca=600,la="_blank",ua="http://localhost";class pr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function da(t,e,r,n=aa,i=ca){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const c=Object.assign(Object.assign({},oa),{width:n.toString(),height:i.toString(),top:s,left:o}),l=C().toLowerCase();r&&(a=jr(l)?la:r),Vr(l)&&(e=e||ua,c.scrollbars="yes");const u=Object.entries(c).reduce((m,[I,w])=>`${m}${I}=${w},`,"");if(io(l)&&a!=="_self")return ha(e||"",a),new pr(null);const h=window.open(e||"",a,u);f(h,t,"popup-blocked");try{h.focus()}catch{}return new pr(h)}function ha(t,e){const r=document.createElement("a");r.href=t,r.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const fa="__/auth/handler",pa="emulator/auth/handler";function gr(t,e,r,n,i,s){f(t.config.authDomain,t,"auth-domain-config-required"),f(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:n,v:Ye,eventId:i};if(e instanceof Zr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Os(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(e instanceof Ee){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${ga(t)}?${Se(a).slice(1)}`}function ga({config:t}){return t.emulator?Pt(t,pa):`https://${t.authDomain}/${fa}`}/**
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
 */const pt="webStorageSupport";class ma{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sn,this._completeRedirectFn=Ho}async _openPopup(e,r,n,i){var s;$((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=gr(e,r,n,It(),i);return da(e,o,Mt())}async _openRedirect(e,r,n,i){return await this._originValidation(e),yo(gr(e,r,n,It(),i)),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:i,promise:s}=this.eventManagers[r];return i?Promise.resolve(i):($(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[r]={promise:n},n}async initAndGetManager(e){const r=await sa(e),n=new Vo(e);return r.register("authEvent",i=>(f(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=r,n}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(pt,{type:pt},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[pt];o!==void 0&&r(!!o),B(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=Ko(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return Jr()||Dt()||rt()}}const va=ma;var _a="@firebase/auth",ya="0.17.2";/**
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
 */class ba{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(n=>{var i;e(((i=n)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);!r||(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){f(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wa(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Sa(t){ve(new er("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=n.options;return(o=>{f(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),f(!(s!=null&&s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qr(t)},c=new ao(o,a);return $s(c,r),c})(n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),ve(new er("auth-internal",e=>{const r=Yr(e.getProvider("auth").getImmediate());return(n=>new ba(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),pe(_a,ya,wa(t))}/**
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
 */function Ia(t=ss()){const e=Dr(t,"auth");return e.isInitialized()?e.getImmediate():Bs(t,{popupRedirectResolver:va,persistence:[Ao,mo,sn]})}Sa("Browser");function Ea(t){try{const e=hn(t);return Promise.resolve(e)}catch(e){return Promise.reject(e)}}function hn(t){return Ca(t).getCurrentUser()}class Ta{constructor(e){this.auth=Ia(e)}getCurrentUser(){var e;const r=(e=this.auth.currentUser)===null||e===void 0?void 0:e.uid;if(!r)throw new D("unauthenticated","Failed to determine currently signed in user. User not signed in.");return r}}const fn="user-dao";function Ca(t){let e=t.getComponent(fn);return e||(e=new Ta(t.app),Oa(t,e)),e}function Oa(t,e){t.setComponent(fn,e)}function Ct(t,e){if(typeof t!="string"||t==="")throw new Error(e!=null?e:"arg must be a non-empty string.")}function pn(t,e){if(typeof t!="number"||isNaN(t)||t<=0)throw new Error(e!=null?e:"arg must be positive number.")}function Aa(t,e){if(!Array.isArray(t)||t.length===0)throw new Error(e!=null?e:"arg must be a non-empty array.")}var mr=globalThis&&globalThis.__awaiter||function(t,e,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?s(u.value):i(u.value).then(a,c)}l((n=n.apply(t,e||[])).next())})},Ra=globalThis&&globalThis.__rest||function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r};function ka(t){return"line_items"in t}const Pa=30*1e3;function Na(t,e,r){e=Object.assign({},e),Da(e),ka(e)?Ma(e):La(e);const n=Ua(r==null?void 0:r.timeoutMillis);return Ea(t).then(i=>Ha(t).createCheckoutSession(i,e,n))}function Da(t){var e;typeof t.cancel_url!="undefined"?Ct(t.cancel_url,"cancel_url must be a non-empty string."):t.cancel_url=window.location.href,(e=t.mode)!==null&&e!==void 0||(t.mode="subscription"),typeof t.success_url!="undefined"?Ct(t.success_url,"success_url must be a non-empty string."):t.success_url=window.location.href}function Ma(t){Aa(t.line_items,"line_items must be a non-empty array.")}function La(t){Ct(t.price,"price must be a non-empty string."),typeof t.quantity!="undefined"&&pn(t.quantity,"quantity must be a positive integer.")}function Ua(t){return typeof t!="undefined"?(pn(t,"timeoutMillis must be a positive number."),t):Pa}class xa{constructor(e,r){this.customersCollection=r,this.firestore=At(e)}createCheckoutSession(e,r,n){return mr(this,void 0,void 0,function*(){const i=yield this.addSessionDoc(e,r);return this.waitForSessionId(i,n)})}addSessionDoc(e,r){return mr(this,void 0,void 0,function*(){const n=me(this.firestore,this.customersCollection,e,"checkout_sessions");try{return yield Jn(n,r)}catch(i){throw new D("internal","Error while querying Firestore.",i)}})}waitForSessionId(e,r){let n;return new Promise((i,s)=>{const o=setTimeout(()=>{s(new D("deadline-exceeded","Timeout while waiting for session response."))},r);n=Er(e.withConverter($a),a=>{const c=a.data();Ba(c)&&(clearTimeout(o),i(c))},a=>{clearTimeout(o),s(new D("internal","Error while querying Firestore.",a))})}).finally(()=>n())}}function Ba(t){return typeof(t==null?void 0:t.id)!="undefined"}const $a={toFirestore:()=>{throw new Error("Not implemented for readonly Session type.")},fromFirestore:t=>{const e=t.data(),{created:r,sessionId:n}=e,i=Ra(e,["created","sessionId"]);return typeof n!="undefined"?Object.assign(Object.assign({},i),{id:n,created_at:Fa(r)}):Object.assign({},i)}};function Fa(t){return t.toDate().toUTCString()}const gn="checkout-session-dao";function Ha(t){let e=t.getComponent(gn);return e||(e=new xa(t.app,t.customersCollection),za(t,e)),e}function za(t,e){t.setComponent(gn,e)}globalThis&&globalThis.__awaiter;var k=globalThis&&globalThis.__awaiter||function(t,e,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?s(u.value):i(u.value).then(a,c)}l((n=n.apply(t,e||[])).next())})},Va=globalThis&&globalThis.__rest||function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r};function ja(t,e){const r=Ga(t),n=e!=null?e:{},{includePrices:i}=n,s=Va(n,["includePrices"]);return r.getProducts(s).then(o=>{if(i){const a=o.map(c=>Wa(r,c));return Promise.all(a)}return o})}function Wa(t,e){return k(this,void 0,void 0,function*(){const r=yield t.getPrices(e.id);return Object.assign(Object.assign({},e),{prices:r})})}const vr={toFirestore:()=>{throw new Error("Not implemented for readonly Product type.")},fromFirestore:t=>Object.assign(Object.assign({},t.data()),{id:t.id,prices:[]})},_r={toFirestore:()=>{throw new Error("Not implemented for readonly Price type.")},fromFirestore:t=>{const e=t.data();return Object.assign(Object.assign({},e),{id:t.id,product:t.ref.parent.parent.id})}};class qa{constructor(e,r){this.productsCollection=r,this.firestore=At(e)}getProduct(e){return k(this,void 0,void 0,function*(){return(yield this.getProductSnapshotIfExists(e)).data()})}getProducts(e){return k(this,void 0,void 0,function*(){const r=yield this.getProductSnapshots(e),n=[];return r.forEach(i=>{n.push(i.data())}),n})}getPrice(e,r){return k(this,void 0,void 0,function*(){return(yield this.getPriceSnapshotIfExists(e,r)).data()})}getPrices(e,r){return k(this,void 0,void 0,function*(){r!=null&&r.assertProduct&&(yield this.getProductSnapshotIfExists(e));const n=yield this.getPriceSnapshots(e),i=[];return n.forEach(s=>{i.push(s.data())}),i})}getProductSnapshotIfExists(e){return k(this,void 0,void 0,function*(){const r=vt(this.firestore,this.productsCollection,e).withConverter(vr),n=yield this.queryFirestore(()=>_t(r));if(!n.exists())throw new D("not-found",`No product found with the ID: ${e}`);return n})}getProductSnapshots(e){return k(this,void 0,void 0,function*(){let r=me(this.firestore,this.productsCollection).withConverter(vr);const n=[];if(e!=null&&e.activeOnly&&n.push(yt("active","==",!0)),e!=null&&e.where)for(const i of e.where)n.push(yt(...i));return typeof(e==null?void 0:e.limit)!="undefined"&&n.push(Qn(e.limit)),yield this.queryFirestore(()=>(n.length>0&&(r=Tr(r,...n)),bt(r)))})}getPriceSnapshotIfExists(e,r){return k(this,void 0,void 0,function*(){const n=vt(this.firestore,this.productsCollection,e,"prices",r).withConverter(_r),i=yield this.queryFirestore(()=>_t(n));if(!i.exists())throw new D("not-found",`No price found with the product ID: ${e} and price ID: ${r}`);return i})}getPriceSnapshots(e){return k(this,void 0,void 0,function*(){const r=me(this.firestore,this.productsCollection,e,"prices").withConverter(_r);return yield this.queryFirestore(()=>bt(r))})}queryFirestore(e){return k(this,void 0,void 0,function*(){try{return yield e()}catch(r){throw new D("internal","Unexpected error while querying Firestore",r)}})}}const mn="product-dao";function Ga(t){let e=t.getComponent(mn);return e||(e=new qa(t.app,t.productsCollection),Ka(t,e)),e}function Ka(t,e){t.setComponent(mn,e)}var de=globalThis&&globalThis.__awaiter||function(t,e,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?s(u.value):i(u.value).then(a,c)}l((n=n.apply(t,e||[])).next())})};function Ja(t,e,r){const n=hn(t);return Ya(t).onSubscriptionUpdate(n,e,r)}const gt={toFirestore:()=>{throw new Error("Not implemented for readonly Subscription type.")},fromFirestore:t=>{var e,r,n;const i=t.data(),o=i.prices.map(a=>({product:a.parent.parent.id,price:a.id}));return{cancel_at:he(i.cancel_at),cancel_at_period_end:i.cancel_at_period_end,canceled_at:he(i.canceled_at),created:$e(i.created),current_period_start:$e(i.current_period_start),current_period_end:$e(i.current_period_end),ended_at:he(i.ended_at),id:t.id,metadata:(e=i.metadata)!==null&&e!==void 0?e:{},price:i.price.id,prices:o,product:i.product.id,quantity:(r=i.quantity)!==null&&r!==void 0?r:null,role:(n=i.role)!==null&&n!==void 0?n:null,status:i.status,stripe_link:i.stripeLink,trial_end:he(i.trial_end),trial_start:he(i.trial_start),uid:t.ref.parent.parent.id}}},mt="subscriptions";function he(t){return t===null?null:$e(t)}function $e(t){return t.toDate().toUTCString()}class Qa{constructor(e,r){this.customersCollection=r,this.firestore=At(e)}getSubscription(e,r){return de(this,void 0,void 0,function*(){return(yield this.getSubscriptionSnapshotIfExists(e,r)).data()})}getSubscriptions(e,r){return de(this,void 0,void 0,function*(){const n=yield this.getSubscriptionSnapshots(e,r==null?void 0:r.status),i=[];return n.forEach(s=>{i.push(s.data())}),i})}onSubscriptionUpdate(e,r,n){const i=me(this.firestore,this.customersCollection,e,mt).withConverter(gt);return Er(i,s=>{const o={subscriptions:[],changes:[],size:s.size,empty:s.empty};s.forEach(a=>{o.subscriptions.push(a.data())}),s.docChanges().forEach(a=>{o.changes.push({type:a.type,subscription:a.doc.data()})}),r(o)},s=>{if(n){const o=new D("internal",`Error while listening to database updates: ${s.message}`,s);n(o)}})}getSubscriptionSnapshotIfExists(e,r){return de(this,void 0,void 0,function*(){const n=vt(this.firestore,this.customersCollection,e,mt,r).withConverter(gt),i=yield this.queryFirestore(()=>_t(n));if(!i.exists())throw new D("not-found",`No subscription found with the ID: ${r} for user: ${e}`);return i})}getSubscriptionSnapshots(e,r){return de(this,void 0,void 0,function*(){let n=me(this.firestore,this.customersCollection,e,mt).withConverter(gt);return r&&(n=Tr(n,yt("status","in",r))),yield this.queryFirestore(()=>bt(n))})}queryFirestore(e){return de(this,void 0,void 0,function*(){try{return yield e()}catch(r){throw new D("internal","Unexpected error while querying Firestore",r)}})}}const vn="subscription-dao";function Ya(t){let e=t.getComponent(vn);return e||(e=new Qa(t.app,t.customersCollection),Xa(t,e)),e}function Xa(t,e){t.setComponent(vn,e)}let yr;const Za=Ge({name:"PreferencesComponent",setup(){return{store:Je(),dark:S(fe.isActive),promptFontSize:S(!1),showText:S(!0)}},mounted(){this.loadStripe()},methods:{async portalCB(){const t="https://billing.stripe.com/p/login/eVa6qm5sSahl7tudQQ";console.log(t),window.open(t,"_blank")},async subscribeCB(){const t=Yn(),e=gs(t,{productsCollection:"products",customersCollection:"customers"});console.log("payments",e);const r=await ja(e,{includePrices:!0,activeOnly:!0});for(const s of r)console.log("product",s);const i=await Na(e,{line_items:[{price:"price_1Mym16CCcfiyKH9aa6ZQZvQx",quantity:"1"}],api_key:"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",fooey:"kablooey",success_url:"https://www.readingedge.org/thankyou",cancel_url:"https://www.readingedge.org"});console.log("session",i),console.log(i.url),Ja(e,s=>{for(const o in s.changes)o.type==="added"&&console.log(`New subscription added with ID: ${o.subscription.id}`)}),window.location.assign(i.url)},async loadStripe(){yr=await pi("pk_live_51Myi4CCCcfiyKH9aWeeCgtfqmR7HpOnLE9oDJn1lRbOSkfwxNsnLEfTRS8lHzdM8UNJ9O0IshKAThgnBdjcZosyC00oSLNm68T"),console.log("stripe",yr)},toggleText(){console.log("toggleText",this.showText),this.showText===!0?(console.log("showing text"),Z(".assignment").classed("hidden",!1),Z(".q-carousel__thumbnail").classed("hidden",!1)):(console.log("hiding text"),Z(".assignment").classed("hidden",!0),Z(".q-carousel__thumbnail").classed("hidden",!0))},toggleDark(){fe.toggle(),console.log(fe.isActive,this.dark),fe.isActive},fontSizeCB(t){Z("#sampleFontSwatch").style("font-size",t+"pt"),Z("#slideTextDiv").style("font-size",t+"pt"),this.store.userSnapshot.preferences.textFontSize=t},fsCB(){ot.isActive?ot.exit().then(()=>{}).catch(t=>{console.log(t)}):ot.request().then(()=>{}).catch(t=>{console.log(t)})}}}),ec={class:"q-pa-md",style:{"max-width":"350px"}},tc={class:"text-center",style:{width:"100%"}};function rc(t,e,r,n,i,s){return E(),O("div",ec,[p(qn,{bordered:"",class:"rounded-borders",icon:"gear"},{default:y(()=>[p(Wn,{label:"Profile"},{default:y(()=>[q("div",tc,[this.store.subscribed===1?(E(),te(N,{key:0,"no-caps":"",onClick:e[0]||(e[0]=o=>this.portalCB())},{default:y(()=>[H("Manage Subscription")]),_:1})):(E(),te(N,{key:1,"no-caps":"",onClick:e[1]||(e[1]=o=>this.subscribeCB())},{default:y(()=>[H("Subscribe")]),_:1}))])]),_:1})]),_:1})])}var nc=Ke(Za,[["render",rc]]);const ic=Ge({name:"CoursesLayout",components:{CoursePager:ti,WPComponent:Fn,PreferencesComponent:$n,ProfileComponent:nc,AssignmentPager:Hn,PagePager:ai,ImagePager:jn},setup(){const t=S(!1),e=S(!1);return{store:Je(),courseKey:S(null),promptEnroll:S(!1),leftDrawerOpen:t,toggleLeftDrawer(){t.value=!t.value},rightDrawerOpen:e,toggleRightDrawer(){e.value=!e.value}}},mounted(){fe.isActive,this.store.initSpeech()},methods:{goBack(){if(this.store.pgIdx!==null&&this.store.pgIdx>-1){this.store.pgIdx=null,this.store.imgIdx=null,this.store.router.replace("/courses/assignments");return}else if(this.store.aid!==null&&this.store.aid!==-1){this.store.aid=null,this.store.imgIdx=null,this.store.router.replace("/courses");return}else this.store.ck!==null&&(this.store.ck=null,this.store.aid=null,this.store.pgIdx=null,this.store.imgIdx=null);this.store.router.replace("/courses")},enrollCB(){const t=this.store.enroll(this.courseKey);console.log(t)}}}),sc=q("div",{class:"text-h6"},"Enter a course-key",-1),oc=q("br",null,null,-1),ac=q("br",null,null,-1),cc=q("br",null,null,-1),lc=q("div",{class:"text-panel q-ma-md text-center text-h6"},"App Sections",-1),uc={key:0},dc={key:1},hc={key:2},fc={key:3};function pc(t,e,r,n,i,s){const o=P("WPComponent"),a=P("PreferencesComponent"),c=P("ProfileComponent"),l=P("ImagePager"),u=P("PagePager"),h=P("AssignmentPager"),m=P("CoursePager"),I=P("router-view");return E(),O(Fe,null,[p(In,{modelValue:t.promptEnroll,"onUpdate:modelValue":e[3]||(e[3]=w=>t.promptEnroll=w),persistent:""},{default:y(()=>[p(ze,{style:{"min-width":"350px"}},{default:y(()=>[p(xt,null,{default:y(()=>[sc]),_:1}),p(xt,{class:"q-pt-none"},{default:y(()=>[p(Tn,{dense:"",modelValue:t.courseKey,"onUpdate:modelValue":e[0]||(e[0]=w=>t.courseKey=w),autofocus:"",onKeyup:e[1]||(e[1]=Dn(w=>{t.prompt=!1,this.enrollCB()},["enter"]))},null,8,["modelValue"])]),_:1}),p(En,{align:"right",class:"text-white"},{default:y(()=>[He(p(N,{flat:"",label:"Cancel"},null,512),[[Bt]]),He(p(N,{flat:"",label:"Enroll",onClick:e[2]||(e[2]=w=>this.enrollCB())},null,512),[[Bt]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),p(xn,{view:"hHh lpR fFf"},{default:y(()=>[p(Mn,{bordered:"",class:"bg-positive text-white"},{default:y(()=>[p(Ln,null,{default:y(()=>[p(N,{flat:"",round:"",icon:"menu",onClick:t.toggleLeftDrawer},null,8,["onClick"]),p($t),this.store.ck!==null?(E(),te(N,{key:0,flat:"",round:"",icon:"north",onClick:e[4]||(e[4]=w=>this.goBack())},{default:y(()=>[p(at,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:y(()=>[p(ze,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:y(()=>[H(" Go back / up a level in the "),oc,H("course-assignment-page "),ac,H("hierarchy ")]),_:1})]),_:1})]),_:1})):Le("",!0),p($t),this.store.role==="student"?(E(),te(N,{key:1,flat:"",round:"",class:"on-left",icon:"group_add",onClick:e[5]||(e[5]=w=>t.promptEnroll=!0)},{default:y(()=>[p(at,null,{default:y(()=>[H("Have a course-key? Enter it here"),cc,H("to join your course.")]),_:1})]),_:1})):Le("",!0),this.store.authenticated?(E(),te(N,{key:2,flat:"",round:"",icon:"switch_account",onClick:e[6]||(e[6]=w=>this.store.switchRole())},{default:y(()=>[p(at,null,{default:y(()=>[H(" Switch between Teacher or Student role ")]),_:1})]),_:1})):Le("",!0),p(N,{flat:"",round:"",icon:"logout",onClick:e[7]||(e[7]=w=>this.store.logout())}),p(N,{flat:"",round:"",icon:"menu",onClick:t.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),p(Ft,{"show-if-above":"",modelValue:t.leftDrawerOpen,"onUpdate:modelValue":e[8]||(e[8]=w=>t.leftDrawerOpen=w),side:"left",bordered:""},{default:y(()=>[lc,p(o),p(a),p(c)]),_:1},8,["modelValue"]),p(Ft,{"show-if-above":"",modelValue:t.rightDrawerOpen,"onUpdate:modelValue":e[9]||(e[9]=w=>t.rightDrawerOpen=w),side:"right",bordered:""},{default:y(()=>[this.store.pgIdx!==null&&this.store.pgIdx!==-1?(E(),O("span",uc,[p(l)])):this.store.aid!==null&&this.store.aid!==-1?(E(),O("span",dc,[p(u)])):this.store.ck!==null?(E(),O("span",hc,[p(h)])):(E(),O("span",fc,[p(m)]))]),_:1},8,["modelValue"]),p(Bn,null,{default:y(()=>[p(I)]),_:1})]),_:1})],64)}var zc=Ke(ic,[["render",pc]]);export{zc as default};
