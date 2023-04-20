import{Q as Wr,a as Le}from"./QToggle.e2183978.js";import{Q as zt}from"./QCard.bd55a907.js";import{u as Gt}from"./store.7484bf0f.js";import{d as Kt,_ as Jt,o as y,c as gt,w as T,Z as w,F as f,E,ao as _,v as xe,P as de,X as Be,a as v,U as qr,Q,G as mt,I as zr}from"./index.e70c2e77.js";import{a as _t,b as Gr,Q as Kr,C as Jr}from"./ClosePopup.03ded20c.js";import{Q as Qr}from"./QKnob.1bb24903.js";import{Q as Yr}from"./QExpansionItem.06c36c73.js";import{Q as Xr}from"./QList.fccc5dca.js";import"./transform.9aa67f3e.js";import{o as Zr,m as en,n as et,w as tt,i as H,p as tn,q as Qt,v as ze,J as Ge,_ as _e,E as rn,h as ve,t as te,l as nn,f as sn,j as vt}from"./firebase.8c8e307e.js";import{s as q}from"./selectAll.be636dd1.js";const on=Kt({name:"TileComponent",props:["tileName","tileData","tileType","imgUrl","targetUrl","ck","aid","pgIdx","imgIdx"],setup(){return{store:Gt()}},methods:{clickCB(r,e,t,n,i,s,o,a){console.log("clickCB",r,e,t,n,i,s,o,a),this.store.ck=r,this.store.aid=e,this.store.pgIdx=t,o==="course"?(console.log("setting aid -1"),this.store.aid=-1):o==="assignment"&&(this.store.pgIdx=-1);try{this.store.imgIdx=this.imgIdx}catch(c){console.log(c)}i!==null?this.store.router.push(i):s!==null&&o==="image"&&(this.store.imgIdx=this.imgIdx)}}}),an={class:"text-h6 absolute-center full-width text-center"},cn={key:0},ln={key:1},un={key:2},dn={key:3},hn={key:4},fn={key:5},pn={key:6},gn={class:"hidden"},mn=f("tr",null,[f("th",{align:"left"},"prop"),f("th",{align:"center"},[f("b",null,"val")])],-1),_n={key:0},vn=f("td",null,"ck",-1),yn={key:1},bn=f("td",null,"aid",-1),In={key:2},wn=f("td",null,"pgIdx",-1),En={key:3},Sn=f("td",null,"imgIdx",-1),Tn={key:4},Cn=f("td",null,"imgUrl",-1),On={key:5},Rn=f("td",null,"targetUrl",-1);function An(r,e,t,n,i,s){return y(),gt(zt,{flat:"",bordered:"",class:"q-ma-md q-pa-xs cursor-pointer tile-component",onClick:e[0]||(e[0]=o=>this.clickCB(this.ck,this.aid,this.pgIdx,this.imgIdx,this.targetUrl,this.imgUrl,this.tileType,this.tileName))},{default:T(()=>[this.imgUrl?(y(),gt(Wr,{key:0,class:"absolute-center tile-component",src:this.imgUrl,style:{opacity:"1"}},null,8,["src"])):w("",!0),f("div",an,[this.tileData.pageTitle!==null?(y(),E("div",cn,_(this.tileData.pageTitle),1)):w("",!0),this.tileType=="section"?(y(),E("div",ln,_(this.tileName),1)):w("",!0),this.tileType=="course"?(y(),E("div",un,[f("div",null,_(this.tileData.title),1),f("div",null,_(Object.keys(this.tileData.assignments).length)+" assignments ",1),f("div",null,_(Object.keys(this.tileData.enrollment).length)+" students",1)])):w("",!0),this.tileType=="assignment"?(y(),E("div",dn,[f("div",null,_(this.tileData.title),1),f("div",null,_(this.tileData.pages.length)+" pgs",1)])):w("",!0),this.tileType==="page"?(y(),E("div",hn,"Page "+_(this.pgIdx+1),1)):w("",!0),this.store.currentPage&&this.tileType=="page"?(y(),E("div",fn,_(this.store.currentAssignment.pages[this.pgIdx].imgs.length)+" imgs ",1)):w("",!0),this.tileType=="image"?(y(),E("div",pn,"Image "+_(this.imgIdx+1),1)):w("",!0)]),f("table",gn,[mn,this.ck?(y(),E("tr",_n,[vn,f("td",null,_(this.ck),1)])):w("",!0),this.aid?(y(),E("tr",yn,[bn,f("td",null,_(this.aid),1)])):w("",!0),this.pgIdx!==null?(y(),E("tr",In,[wn,f("td",null,_(this.pgIdx),1)])):w("",!0),this.imgIdx!==null?(y(),E("tr",En,[Sn,f("td",null,_(this.imgIdx),1)])):w("",!0),this.imgUrl?(y(),E("tr",Tn,[Cn,f("td",null,"..."+_(this.imgUrl.slice(-20)),1)])):w("",!0),this.targetUrl?(y(),E("tr",On,[Rn,f("td",null,"..."+_(this.targetUrl.slice(-20)),1)])):w("",!0)])]),_:1})}var Ha=Jt(on,[["render",An]]),Yt="https://js.stripe.com/v3",kn=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,yt="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",Nn=function(){for(var e=document.querySelectorAll('script[src^="'.concat(Yt,'"]')),t=0;t<e.length;t++){var n=e[t];if(!!kn.test(n.src))return n}return null},Pn=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(Yt).concat(t);var i=document.head||document.body;if(!i)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return i.appendChild(n),n},Dn=function(e,t){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"1.52.1",startTime:t})},he=null,Mn=function(e){return he!==null||(he=new Promise(function(t,n){if(typeof window=="undefined"||typeof document=="undefined"){t(null);return}if(window.Stripe&&e&&console.warn(yt),window.Stripe){t(window.Stripe);return}try{var i=Nn();i&&e?console.warn(yt):i||(i=Pn(e)),i.addEventListener("load",function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))}),i.addEventListener("error",function(){n(new Error("Failed to load Stripe.js"))})}catch(s){n(s);return}})),he},Un=function(e,t,n){if(e===null)return null;var i=e.apply(void 0,t);return Dn(i,n),i},Xt=Promise.resolve().then(function(){return Mn(null)}),Zt=!1;Xt.catch(function(r){Zt||console.warn(r)});var Ln=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];Zt=!0;var i=Date.now();return Xt.then(function(s){return Un(s,t,i)})};/**
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
 */const er=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},xn=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],o=r[t++],a=r[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const s=r[t++],o=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Bn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],o=i+1<r.length,a=o?r[i+1]:0,c=i+2<r.length,l=c?r[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let m=(a&15)<<2|l>>6,I=l&63;c||(I=64,o||(m=64)),n.push(t[u],t[h],t[m],t[I])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(er(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):xn(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],a=i<r.length?t[r.charAt(i)]:0;++i;const l=i<r.length?t[r.charAt(i)]:64;++i;const h=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const m=s<<2|a>>4;if(n.push(m),l!==64){const I=a<<4&240|l>>2;if(n.push(I),h!==64){const M=l<<6&192|h;n.push(M)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}},Fn=function(r){const e=er(r);return Bn.encodeByteArray(e,!0)},tr=function(r){return Fn(r).replace(/\./g,"")};function $n(){return typeof indexedDB=="object"}function Vn(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const Hn="FirebaseError";class oe extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Hn,Object.setPrototypeOf(this,oe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rr.prototype.create)}}class rr{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?jn(s,n):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new oe(i,a,n)}}function jn(r,e){return r.replace(Wn,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const Wn=/\{\$([^}]+)}/g;class Ke{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var g;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(g||(g={}));const qn={debug:g.DEBUG,verbose:g.VERBOSE,info:g.INFO,warn:g.WARN,error:g.ERROR,silent:g.SILENT},zn=g.INFO,Gn={[g.DEBUG]:"log",[g.VERBOSE]:"log",[g.INFO]:"info",[g.WARN]:"warn",[g.ERROR]:"error"},Kn=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=Gn[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jn{constructor(e){this.name=e,this._logLevel=zn,this._logHandler=Kn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in g))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,g.DEBUG,...e),this._logHandler(this,g.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,g.VERBOSE,...e),this._logHandler(this,g.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,g.INFO,...e),this._logHandler(this,g.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,g.WARN,...e),this._logHandler(this,g.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,g.ERROR,...e),this._logHandler(this,g.ERROR,...e)}}/**
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
 */class Qn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Yn(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Yn(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Je="@firebase/app",bt="0.7.33";/**
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
 */const j=new Jn("@firebase/app"),Xn="@firebase/app-compat",Zn="@firebase/analytics-compat",ei="@firebase/analytics",ti="@firebase/app-check-compat",ri="@firebase/app-check",ni="@firebase/auth",ii="@firebase/auth-compat",si="@firebase/database",oi="@firebase/database-compat",ai="@firebase/functions",ci="@firebase/functions-compat",li="@firebase/installations",ui="@firebase/installations-compat",di="@firebase/messaging",hi="@firebase/messaging-compat",fi="@firebase/performance",pi="@firebase/performance-compat",gi="@firebase/remote-config",mi="@firebase/remote-config-compat",_i="@firebase/storage",vi="@firebase/storage-compat",yi="@firebase/firestore",bi="@firebase/firestore-compat",Ii="firebase",wi="9.10.0";/**
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
 */const Ei="[DEFAULT]",Si={[Je]:"fire-core",[Xn]:"fire-core-compat",[ei]:"fire-analytics",[Zn]:"fire-analytics-compat",[ri]:"fire-app-check",[ti]:"fire-app-check-compat",[ni]:"fire-auth",[ii]:"fire-auth-compat",[si]:"fire-rtdb",[oi]:"fire-rtdb-compat",[ai]:"fire-fn",[ci]:"fire-fn-compat",[li]:"fire-iid",[ui]:"fire-iid-compat",[di]:"fire-fcm",[hi]:"fire-fcm-compat",[fi]:"fire-perf",[pi]:"fire-perf-compat",[gi]:"fire-rc",[mi]:"fire-rc-compat",[_i]:"fire-gcs",[vi]:"fire-gcs-compat",[yi]:"fire-fst",[bi]:"fire-fst-compat","fire-js":"fire-js",[Ii]:"fire-js-all"};/**
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
 */const nr=new Map,It=new Map;function Ti(r,e){try{r.container.addComponent(e)}catch(t){j.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function re(r){const e=r.name;if(It.has(e))return j.debug(`There were multiple attempts to register component ${e}.`),!1;It.set(e,r);for(const t of nr.values())Ti(t,r);return!0}function ir(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}/**
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
 */const Ci={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ee=new rr("app","Firebase",Ci);/**
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
 */const Se=wi;function Oi(r=Ei){const e=nr.get(r);if(!e)throw Ee.create("no-app",{appName:r});return e}function Z(r,e,t){var n;let i=(n=Si[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),j.warn(a.join(" "));return}re(new Ke(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Ri="firebase-heartbeat-database",Ai=1,ne="firebase-heartbeat-store";let Fe=null;function sr(){return Fe||(Fe=Zr(Ri,Ai,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(ne)}}}).catch(r=>{throw Ee.create("idb-open",{originalErrorMessage:r.message})})),Fe}async function ki(r){var e;try{return(await sr()).transaction(ne).objectStore(ne).get(or(r))}catch(t){if(t instanceof oe)j.warn(t.message);else{const n=Ee.create("idb-get",{originalErrorMessage:(e=t)===null||e===void 0?void 0:e.message});j.warn(n.message)}}}async function wt(r,e){var t;try{const i=(await sr()).transaction(ne,"readwrite");return await i.objectStore(ne).put(e,or(r)),i.done}catch(n){if(n instanceof oe)j.warn(n.message);else{const i=Ee.create("idb-set",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});j.warn(i.message)}}}function or(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Ni=1024,Pi=30*24*60*60*1e3;class Di{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ui(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Et();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Pi}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Et(),{heartbeatsToSend:t,unsentEntries:n}=Mi(this._heartbeatsCache.heartbeats),i=tr(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Et(){return new Date().toISOString().substring(0,10)}function Mi(r,e=Ni){const t=[];let n=r.slice();for(const i of r){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),St(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),St(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Ui{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $n()?Vn().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ki(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return wt(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return wt(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function St(r){return tr(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function Li(r){re(new Ke("platform-logger",e=>new Qn(e),"PRIVATE")),re(new Ke("heartbeat",e=>new Di(e),"PRIVATE")),Z(Je,bt,r),Z(Je,bt,"esm2017"),Z("fire-js","")}Li("");Z("firestore-stripe-payments","0.0.6");function xi(r,e){return rt.create(r,e)}class rt{constructor(e,t){this.app=e,this.options=t,this.components={}}static create(e,t){return new rt(e,t)}get customersCollection(){return this.options.customersCollection}get productsCollection(){return this.options.productsCollection}getComponent(e){let t=this.components[e];return t||null}setComponent(e,t){this.components[e]=t}}class O extends Error{constructor(e,t,n){super(t),this.code=e,this.message=t,this.cause=n}}/**
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
 */var Bi=function(r){for(var e=[],t=0,n=0;n<r.length;n++){var i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Fi=function(r){for(var e=[],t=0,n=0;t<r.length;){var i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){var s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){var s=r[t++],o=r[t++],a=r[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{var s=r[t++],o=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},$i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray:function(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],i=0;i<r.length;i+=3){var s=r[i],o=i+1<r.length,a=o?r[i+1]:0,c=i+2<r.length,l=c?r[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4,m=(a&15)<<2|l>>6,I=l&63;c||(I=64,o||(m=64)),n.push(t[u],t[h],t[m],t[I])}return n.join("")},encodeString:function(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Bi(r),e)},decodeString:function(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Fi(this.decodeStringToByteArray(r,e))},decodeStringToByteArray:function(r,e){this.init_();for(var t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],i=0;i<r.length;){var s=t[r.charAt(i++)],o=i<r.length,a=o?t[r.charAt(i)]:0;++i;var c=i<r.length,l=c?t[r.charAt(i)]:64;++i;var u=i<r.length,h=u?t[r.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();var m=s<<2|a>>4;if(n.push(m),l!==64){var I=a<<4&240|l>>2;if(n.push(I),h!==64){var M=l<<6&192|h;n.push(M)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}},Vi=function(r){try{return $i.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function b(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hi(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function ji(){var r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Wi(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qi(){var r=b();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}/**
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
 */var zi="FirebaseError",Te=function(r){en(e,r);function e(t,n,i){var s=r.call(this,n)||this;return s.code=t,s.customData=i,s.name=zi,Object.setPrototypeOf(s,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,Ce.prototype.create),s}return e}(Error),Ce=function(){function r(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return r.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=t[0]||{},s=this.service+"/"+e,o=this.errors[e],a=o?Gi(o,i):"Error",c=this.serviceName+": "+a+" ("+s+").",l=new Te(s,c,i);return l},r}();function Gi(r,e){return r.replace(Ki,function(t,n){var i=e[n];return i!=null?String(i):"<"+n+"?>"})}var Ki=/\{\$([^}]+)}/g;function Ji(r){for(var e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ar(r,e){if(r===e)return!0;for(var t=Object.keys(r),n=Object.keys(e),i=0,s=t;i<s.length;i++){var o=s[i];if(!n.includes(o))return!1;var a=r[o],c=e[o];if(Tt(a)&&Tt(c)){if(!ar(a,c))return!1}else if(a!==c)return!1}for(var l=0,u=n;l<u.length;l++){var o=u[l];if(!t.includes(o))return!1}return!0}function Tt(r){return r!==null&&typeof r=="object"}/**
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
 */function ae(r){for(var e=[],t=function(c,l){Array.isArray(l)?l.forEach(function(u){e.push(encodeURIComponent(c)+"="+encodeURIComponent(u))}):e.push(encodeURIComponent(c)+"="+encodeURIComponent(l))},n=0,i=Object.entries(r);n<i.length;n++){var s=i[n],o=s[0],a=s[1];t(o,a)}return e.length?"&"+e.join("&"):""}function Qi(r,e){var t=new Yi(r,e);return t.subscribe.bind(t)}var Yi=function(){function r(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(function(){e(n)}).catch(function(i){n.error(i)})}return r.prototype.next=function(e){this.forEachObserver(function(t){t.next(e)})},r.prototype.error=function(e){this.forEachObserver(function(t){t.error(e)}),this.close(e)},r.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},r.prototype.subscribe=function(e,t,n){var i=this,s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Xi(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=$e),s.error===void 0&&(s.error=$e),s.complete===void 0&&(s.complete=$e);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{i.finalError?s.error(i.finalError):s.complete()}catch{}}),this.observers.push(s),o},r.prototype.unsubscribeOne=function(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))},r.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},r.prototype.sendOne=function(e,t){var n=this;this.task.then(function(){if(n.observers!==void 0&&n.observers[e]!==void 0)try{t(n.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})},r.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(function(){t.observers=void 0,t.onNoObservers=void 0}))},r}();function Xi(r,e){if(typeof r!="object"||r===null)return!1;for(var t=0,n=e;t<n.length;t++){var i=n[t];if(i in r&&typeof r[i]=="function")return!0}return!1}function $e(){}/**
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
 */function Oe(r){return r&&r._delegate?r._delegate:r}/*! *****************************************************************************
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
***************************************************************************** */function S(){for(var r=0,e=0,t=arguments.length;e<t;e++)r+=arguments[e].length;for(var n=Array(r),i=0,e=0;e<t;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)n[i]=s[o];return n}/**
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
 */var $,p;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(p||(p={}));var Zi={debug:p.DEBUG,verbose:p.VERBOSE,info:p.INFO,warn:p.WARN,error:p.ERROR,silent:p.SILENT},es=p.INFO,ts=($={},$[p.DEBUG]="log",$[p.VERBOSE]="log",$[p.INFO]="info",$[p.WARN]="warn",$[p.ERROR]="error",$),rs=function(r,e){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];if(!(e<r.logLevel)){var i=new Date().toISOString(),s=ts[e];if(s)console[s].apply(console,S(["["+i+"]  "+r.name+":"],t));else throw new Error("Attempted to log a message with an invalid logType (value: "+e+")")}},ns=function(){function r(e){this.name=e,this._logLevel=es,this._logHandler=rs,this._userLogHandler=null}return Object.defineProperty(r.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in p))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),r.prototype.setLogLevel=function(e){this._logLevel=typeof e=="string"?Zi[e]:e},Object.defineProperty(r.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),r.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,S([this,p.DEBUG],e)),this._logHandler.apply(this,S([this,p.DEBUG],e))},r.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,S([this,p.VERBOSE],e)),this._logHandler.apply(this,S([this,p.VERBOSE],e))},r.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,S([this,p.INFO],e)),this._logHandler.apply(this,S([this,p.INFO],e))},r.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,S([this,p.WARN],e)),this._logHandler.apply(this,S([this,p.WARN],e))},r.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,S([this,p.ERROR],e)),this._logHandler.apply(this,S([this,p.ERROR],e))},r}(),Ct=function(){function r(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return r.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},r.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},r.prototype.setServiceProps=function(e){return this.serviceProps=e,this},r.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},r}();function cr(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const is=cr,lr=new Ce("auth","Firebase",cr());/**
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
 */const Ot=new ns("@firebase/auth");function fe(r,...e){Ot.logLevel<=p.ERROR&&Ot.error(`Auth (${Se}): ${r}`,...e)}/**
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
 */function P(r,...e){throw nt(r,...e)}function R(r,...e){return nt(r,...e)}function ss(r,e,t){const n=Object.assign(Object.assign({},is()),{[e]:t});return new Ce("auth","Firebase",n).create(e,{appName:r.name})}function nt(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return lr.create(r,...e)}function d(r,e,...t){if(!r)throw nt(e,...t)}function k(r){const e="INTERNAL ASSERTION FAILED: "+r;throw fe(e),new Error(e)}function D(r,e){r||k(e)}/**
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
 */const Rt=new Map;function N(r){D(r instanceof Function,"Expected a class definition");let e=Rt.get(r);return e?(D(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Rt.set(r,e),e)}/**
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
 */function os(r,e){const t=ir(r,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(ar(s,e!=null?e:{}))return i;P(i,"already-initialized")}return t.initialize({options:e})}function as(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(N);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Qe(){var r;return typeof self!="undefined"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function cs(){return At()==="http:"||At()==="https:"}function At(){var r;return typeof self!="undefined"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function ls(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cs()||ji()||"connection"in navigator)?navigator.onLine:!0}function us(){if(typeof navigator=="undefined")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class ce{constructor(e,t){this.shortDelay=e,this.longDelay=t,D(t>e,"Short delay should be less than long delay!"),this.isMobile=Hi()||Wi()}get(){return ls()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function it(r,e){D(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ye{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;k("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;k("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;k("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ds={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const hs=new ce(3e4,6e4);function fs(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Re(r,e,t,n,i={}){return ur(r,i,()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});const a=ae(Object.assign({key:r.config.apiKey},o)).slice(1),c=new(Ye.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",r._getSdkClientVersion()),r.languageCode&&c.set("X-Firebase-Locale",r.languageCode),Ye.fetch()(dr(r,r.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function ur(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},ds),e);try{const i=new gs(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ve(r,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ve(r,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ve(r,"email-already-in-use",o);const u=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ss(r,u,l);P(r,u)}}catch(i){if(i instanceof Te)throw i;P(r,"network-request-failed")}}async function ps(r,e,t,n,i={}){const s=await Re(r,e,t,n,i);return"mfaPendingCredential"in s&&P(r,"multi-factor-auth-required",{serverResponse:s}),s}function dr(r,e,t,n){const i=`${e}${t}?${n}`;return r.config.emulator?it(r.config,i):`${r.config.apiScheme}://${i}`}class gs{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(R(this.auth,"timeout")),hs.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ve(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=R(r,e,n);return i.customData._tokenResponse=t,i}/**
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
 */async function ms(r,e){return Re(r,"POST","/v1/accounts:delete",e)}async function _s(r,e){return Re(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function ee(r){if(!!r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vs(r,e=!1){const t=Oe(r),n=await t.getIdToken(e),i=st(n);d(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:ee(He(i.auth_time)),issuedAtTime:ee(He(i.iat)),expirationTime:ee(He(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function He(r){return Number(r)*1e3}function st(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return fe("JWT malformed, contained fewer than 3 sections"),null;try{const i=Vi(t);return i?JSON.parse(i):(fe("Failed to decode base64 JWT payload"),null)}catch(i){return fe("Caught error parsing JWT payload as JSON",i),null}}function ys(r){const e=st(r);return d(e,"internal-error"),d(typeof e.exp!="undefined","internal-error"),d(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ie(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Te&&bs(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function bs({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class Is{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class hr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ee(this.lastLoginAt),this.creationTime=ee(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ye(r){var e;const t=r.auth,n=await r.getIdToken(),i=await ie(r,_s(t,{idToken:n}));d(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ss(s.providerUserInfo):[],a=Es(r.providerData,o),c=r.isAnonymous,l=!(r.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new hr(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(r,h)}async function ws(r){const e=Oe(r);await ye(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Es(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Ss(r){return r.map(e=>{var{providerId:t}=e,n=et(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function Ts(r,e){const t=await ur(r,{},()=>{const n=ae({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,o=dr(r,i,"/v1/token",`key=${s}`);return Ye.fetch()(o,{method:"POST",headers:{"X-Client-Version":r._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class se{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){d(e.idToken,"internal-error"),d(typeof e.idToken!="undefined","internal-error"),d(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):ys(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return d(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await Ts(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,o=new se;return n&&(d(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(d(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(d(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new se,this.toJSON())}_performRefresh(){return k("not implemented")}}/**
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
 */function U(r,e){d(typeof r=="string"||typeof r=="undefined","internal-error",{appName:e})}class V{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=et(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Is(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.metadata=new hr(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ie(this,this.stsTokenManager.getToken(this.auth,e));return d(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return vs(this,e)}reload(){return ws(this)}_assign(e){this!==e&&(d(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new V(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){d(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ye(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ie(this,ms(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,o,a,c,l,u;const h=(n=t.displayName)!==null&&n!==void 0?n:void 0,m=(i=t.email)!==null&&i!==void 0?i:void 0,I=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,M=(o=t.photoURL)!==null&&o!==void 0?o:void 0,lt=(a=t.tenantId)!==null&&a!==void 0?a:void 0,Pe=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,ut=(l=t.createdAt)!==null&&l!==void 0?l:void 0,dt=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:De,emailVerified:ht,isAnonymous:ft,providerData:Me,stsTokenManager:pt}=t;d(De&&pt,e,"internal-error");const Hr=se.fromJSON(this.name,pt);d(typeof De=="string",e,"internal-error"),U(h,e.name),U(m,e.name),d(typeof ht=="boolean",e,"internal-error"),d(typeof ft=="boolean",e,"internal-error"),U(I,e.name),U(M,e.name),U(lt,e.name),U(Pe,e.name),U(ut,e.name),U(dt,e.name);const Ue=new V({uid:De,auth:e,email:m,emailVerified:ht,displayName:h,isAnonymous:ft,photoURL:M,phoneNumber:I,tenantId:lt,stsTokenManager:Hr,createdAt:ut,lastLoginAt:dt});return Me&&Array.isArray(Me)&&(Ue.providerData=Me.map(jr=>Object.assign({},jr))),Pe&&(Ue._redirectEventId=Pe),Ue}static async _fromIdTokenResponse(e,t,n=!1){const i=new se;i.updateFromServerResponse(t);const s=new V({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ye(s),s}}/**
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
 */class fr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fr.type="NONE";const kt=fr;/**
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
 */function pe(r,e,t){return`firebase:${r}:${e}:${t}`}class G{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=pe(this.userKey,i.apiKey,s),this.fullPersistenceKey=pe("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?V._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new G(N(kt),e,n);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||N(kt);const o=pe(n,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const h=V._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new G(s,e,n):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new G(s,e,n))}}/**
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
 */function Nt(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vr(e))return"Blackberry";if(yr(e))return"Webos";if(ot(e))return"Safari";if((e.includes("chrome/")||gr(e))&&!e.includes("edge/"))return"Chrome";if(_r(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function pr(r=b()){return/firefox\//i.test(r)}function ot(r=b()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gr(r=b()){return/crios\//i.test(r)}function mr(r=b()){return/iemobile/i.test(r)}function _r(r=b()){return/android/i.test(r)}function vr(r=b()){return/blackberry/i.test(r)}function yr(r=b()){return/webos/i.test(r)}function Ae(r=b()){return/iphone|ipad|ipod/i.test(r)}function Cs(r=b()){var e;return Ae(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Os(){return qi()&&document.documentMode===10}function br(r=b()){return Ae(r)||_r(r)||yr(r)||vr(r)||/windows phone/i.test(r)||mr(r)}function Rs(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ir(r,e=[]){let t;switch(r){case"Browser":t=Nt(b());break;case"Worker":t=`${Nt(b())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Se}/${n}`}/**
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
 */class As{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pt(this),this.idTokenSubscription=new Pt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lr,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=N(t)),this._initializationPromise=this.queue(async()=>{var n;this._deleted||(this.persistenceManager=await G.create(this,e),!this._deleted&&(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,s=n==null?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(n=o.user)}return n?n._redirectEventId?(d(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ye(e)}catch(t){if(t.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=us()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Oe(e):null;return t&&d(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&d(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(N(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ce("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&N(e)||this._popupRedirectResolver;d(t,this,"argument-error"),this.redirectPersistenceManager=await G.create(this,[N(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return d(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return d(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ir(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function wr(r){return Oe(r)}class Pt{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qi(t=>this.observer=t)}get next(){return d(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Er{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return k("not implemented")}_getIdTokenResponse(e){return k("not implemented")}_linkToIdToken(e,t){return k("not implemented")}_getReauthenticationResolver(e){return k("not implemented")}}/**
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
 */async function K(r,e){return ps(r,"POST","/v1/accounts:signInWithIdp",fs(r,e))}/**
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
 */const ks="http://localhost";class W extends Er{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new W(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):P("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=et(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new W(n,i);return Object.assign(o,s),o}_getIdTokenResponse(e){const t=this.buildRequest();return K(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,K(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,K(e,t)}buildRequest(){const e={requestUri:ks,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ae(t)}return e}}/**
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
 */class Sr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class le extends Sr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class L extends le{constructor(){super("facebook.com")}static credential(e){return W._fromParams({providerId:L.PROVIDER_ID,signInMethod:L.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return L.credentialFromTaggedObject(e)}static credentialFromError(e){return L.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return L.credential(e.oauthAccessToken)}catch{return null}}}L.FACEBOOK_SIGN_IN_METHOD="facebook.com";L.PROVIDER_ID="facebook.com";/**
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
 */class x extends le{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return W._fromParams({providerId:x.PROVIDER_ID,signInMethod:x.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return x.credentialFromTaggedObject(e)}static credentialFromError(e){return x.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return x.credential(t,n)}catch{return null}}}x.GOOGLE_SIGN_IN_METHOD="google.com";x.PROVIDER_ID="google.com";/**
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
 */class B extends le{constructor(){super("github.com")}static credential(e){return W._fromParams({providerId:B.PROVIDER_ID,signInMethod:B.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return B.credentialFromTaggedObject(e)}static credentialFromError(e){return B.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return B.credential(e.oauthAccessToken)}catch{return null}}}B.GITHUB_SIGN_IN_METHOD="github.com";B.PROVIDER_ID="github.com";/**
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
 */class F extends le{constructor(){super("twitter.com")}static credential(e,t){return W._fromParams({providerId:F.PROVIDER_ID,signInMethod:F.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return F.credentialFromTaggedObject(e)}static credentialFromError(e){return F.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return F.credential(t,n)}catch{return null}}}F.TWITTER_SIGN_IN_METHOD="twitter.com";F.PROVIDER_ID="twitter.com";/**
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
 */class J{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await V._fromIdTokenResponse(e,n,i),o=Dt(n);return new J({user:s,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Dt(n);return new J({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Dt(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class be extends Te{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,this.name="FirebaseError",Object.setPrototypeOf(this,be.prototype),this.appName=e.name,this.code=t.code,this.tenantId=(s=e.tenantId)!==null&&s!==void 0?s:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,i){return new be(e,t,n,i)}}function Tr(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?be._fromErrorAndOperation(r,s,e,n):s})}async function Ns(r,e,t=!1){const n=await ie(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return J._forOperation(r,"link",n)}/**
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
 */async function Ps(r,e,t=!1){const{auth:n}=r,i="reauthenticate";try{const s=await ie(r,Tr(n,i,e,r),t);d(s.idToken,n,"internal-error");const o=st(s.idToken);d(o,n,"internal-error");const{sub:a}=o;return d(r.uid===a,n,"user-mismatch"),J._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&P(n,"user-mismatch"),s}}/**
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
 */async function Ds(r,e,t=!1){const n="signIn",i=await Tr(r,n,e),s=await J._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}const Ie="__sak";/**
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
 */class Cr{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ie,"1"),this.storage.removeItem(Ie),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}/**
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
 */function Ms(){const r=b();return ot(r)||Ae(r)}const Us=1e3,Ls=10;class Or extends Cr{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ms()&&Rs(),this.fallbackToPolling=br(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(n);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);Os()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ls):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Us)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Or.type="LOCAL";const xs=Or;/**
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
 */class Rr extends Cr{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rr.type="SESSION";const Ar=Rr;/**
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
 */function Bs(r){return Promise.all(r.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ke{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new ke(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,s)),c=await Bs(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ke.receivers=[];/**
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
 */function at(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class Fs{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=at("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(h){const m=h;if(m.data.eventId===l)switch(m.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function A(){return window}function $s(r){A().location.href=r}/**
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
 */function kr(){return typeof A().WorkerGlobalScope!="undefined"&&typeof A().importScripts=="function"}async function Vs(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hs(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function js(){return kr()?self:null}/**
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
 */const Nr="firebaseLocalStorageDb",Ws=1,we="firebaseLocalStorage",Pr="fbase_key";class ue{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ne(r,e){return r.transaction([we],e?"readwrite":"readonly").objectStore(we)}function qs(){const r=indexedDB.deleteDatabase(Nr);return new ue(r).toPromise()}function Xe(){const r=indexedDB.open(Nr,Ws);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(we,{keyPath:Pr})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(we)?e(n):(n.close(),await qs(),e(await Xe()))})})}async function Mt(r,e,t){const n=Ne(r,!0).put({[Pr]:e,value:t});return new ue(n).toPromise()}async function zs(r,e){const t=Ne(r,!1).get(e),n=await new ue(t).toPromise();return n===void 0?null:n.value}function Ut(r,e){const t=Ne(r,!0).delete(e);return new ue(t).toPromise()}const Gs=800,Ks=3;class Dr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xe(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Ks)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ke._getInstance(js()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Vs(),!this.activeServiceWorker)return;this.sender=new Fs(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);!n||((e=n[0])===null||e===void 0?void 0:e.fulfilled)&&((t=n[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hs()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xe();return await Mt(e,Ie,"1"),await Ut(e,Ie),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mt(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>zs(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ut(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ne(i,!1).getAll();return new ue(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Gs)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dr.type="LOCAL";const Js=Dr;/**
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
 */function Qs(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}function Ys(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=R("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",Qs().appendChild(n)})}function Xs(r){return`__${r}${Math.floor(Math.random()*1e6)}`}new ce(3e4,6e4);/**
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
 */function Zs(r,e){return e?N(e):(d(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class ct extends Er{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return K(e,this._buildIdpRequest())}_linkToIdToken(e,t){return K(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return K(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function eo(r){return Ds(r.auth,new ct(r),r.bypassAuthState)}function to(r){const{auth:e,user:t}=r;return d(t,e,"internal-error"),Ps(t,new ct(r),r.bypassAuthState)}async function ro(r){const{auth:e,user:t}=r;return d(t,e,"internal-error"),Ns(t,new ct(r),r.bypassAuthState)}/**
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
 */class Mr{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eo;case"linkViaPopup":case"linkViaRedirect":return ro;case"reauthViaPopup":case"reauthViaRedirect":return to;default:P(this.auth,"internal-error")}}resolve(e){D(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){D(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const no=new ce(2e3,1e4);class z extends Mr{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,z.currentPopupAction&&z.currentPopupAction.cancel(),z.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return d(e,this.auth,"internal-error"),e}async onExecution(){D(this.filter.length===1,"Popup operations only handle one event");const e=at();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(R(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(R(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,z.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(R(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,no.get())};e()}}z.currentPopupAction=null;/**
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
 */const io="pendingRedirect",Lt=new Map;class so extends Mr{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Lt.get(this.auth._key());if(!e){try{const n=await oo(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Lt.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oo(r,e){const t=ao(e),n=await xt(r)._get(t)==="true";return await xt(r)._remove(t),n}function xt(r){return N(r._redirectPersistence)}function ao(r){return pe(io,r.config.apiKey,r.name)}async function co(r,e,t=!1){const n=wr(r),i=Zs(n,e),o=await new so(n,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
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
 */const lo=10*60*1e3;class uo{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ho(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ur(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(R(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lo&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bt(e))}saveEventToCache(e){this.cachedEventUids.add(Bt(e)),this.lastProcessedEventTime=Date.now()}}function Bt(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Ur({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ho(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ur(r);default:return!1}}/**
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
 */async function fo(r,e={}){return Re(r,"GET","/v1/projects",e)}/**
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
 */const po=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,go=/^https?/;async function mo(r){if(r.config.emulator)return;const{authorizedDomains:e}=await fo(r);for(const t of e)try{if(_o(t))return}catch{}P(r,"unauthorized-domain")}function _o(r){const e=Qe(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!go.test(t))return!1;if(po.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const vo=new ce(3e4,6e4);function Ft(){const r=A().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function yo(r){return new Promise((e,t)=>{var n,i,s;function o(){Ft(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ft(),t(R(r,"network-request-failed"))},timeout:vo.get()})}if(!((i=(n=A().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=A().gapi)===null||s===void 0)&&s.load)o();else{const a=Xs("iframefcb");return A()[a]=()=>{gapi.load?o():t(R(r,"network-request-failed"))},Ys(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw ge=null,e})}let ge=null;function bo(r){return ge=ge||yo(r),ge}/**
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
 */const Io=new ce(5e3,15e3),wo="__/auth/iframe",Eo="emulator/auth/iframe",So={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},To=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Co(r){const e=r.config;d(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?it(e,Eo):`https://${r.config.authDomain}/${wo}`,n={apiKey:e.apiKey,appName:r.name,v:Se},i=To.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${ae(n).slice(1)}`}async function Oo(r){const e=await bo(r),t=A().gapi;return d(t,r,"internal-error"),e.open({where:document.body,url:Co(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:So,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const o=R(r,"network-request-failed"),a=A().setTimeout(()=>{s(o)},Io.get());function c(){A().clearTimeout(a),i(n)}n.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const Ro={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ao=500,ko=600,No="_blank",Po="http://localhost";class $t{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Do(r,e,t,n=Ao,i=ko){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Ro),{width:n.toString(),height:i.toString(),top:s,left:o}),l=b().toLowerCase();t&&(a=gr(l)?No:t),pr(l)&&(e=e||Po,c.scrollbars="yes");const u=Object.entries(c).reduce((m,[I,M])=>`${m}${I}=${M},`,"");if(Cs(l)&&a!=="_self")return Mo(e||"",a),new $t(null);const h=window.open(e||"",a,u);d(h,r,"popup-blocked");try{h.focus()}catch{}return new $t(h)}function Mo(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const Uo="__/auth/handler",Lo="emulator/auth/handler";function Vt(r,e,t,n,i,s){d(r.config.authDomain,r,"auth-domain-config-required"),d(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Se,eventId:i};if(e instanceof Sr){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",Ji(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(e instanceof le){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}r.tenantId&&(o.tid=r.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${xo(r)}?${ae(a).slice(1)}`}function xo({config:r}){return r.emulator?it(r,Lo):`https://${r.authDomain}/${Uo}`}/**
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
 */const je="webStorageSupport";class Bo{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ar,this._completeRedirectFn=co}async _openPopup(e,t,n,i){var s;D((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Vt(e,t,n,Qe(),i);return Do(e,o,at())}async _openRedirect(e,t,n,i){return await this._originValidation(e),$s(Vt(e,t,n,Qe(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(D(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await Oo(e),n=new uo(e);return t.register("authEvent",i=>(d(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(je,{type:je},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[je];o!==void 0&&t(!!o),P(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mo(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return br()||ot()||Ae()}}const Fo=Bo;var $o="@firebase/auth",Vo="0.17.2";/**
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
 */class Ho{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{var i;e(((i=n)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){d(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jo(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Wo(r){re(new Ct("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=n.options;return(o=>{d(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),d(!(s!=null&&s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ir(r)},c=new As(o,a);return as(c,t),c})(n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),re(new Ct("auth-internal",e=>{const t=wr(e.getProvider("auth").getImmediate());return(n=>new Ho(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Z($o,Vo,jo(r))}/**
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
 */function qo(r=Oi()){const e=ir(r,"auth");return e.isInitialized()?e.getImmediate():os(r,{popupRedirectResolver:Fo,persistence:[Js,xs,Ar]})}Wo("Browser");function zo(r){try{const e=Lr(r);return Promise.resolve(e)}catch(e){return Promise.reject(e)}}function Lr(r){return Ko(r).getCurrentUser()}class Go{constructor(e){this.auth=qo(e)}getCurrentUser(){var e;const t=(e=this.auth.currentUser)===null||e===void 0?void 0:e.uid;if(!t)throw new O("unauthenticated","Failed to determine currently signed in user. User not signed in.");return t}}const xr="user-dao";function Ko(r){let e=r.getComponent(xr);return e||(e=new Go(r.app),Jo(r,e)),e}function Jo(r,e){r.setComponent(xr,e)}function Ze(r,e){if(typeof r!="string"||r==="")throw new Error(e!=null?e:"arg must be a non-empty string.")}function Br(r,e){if(typeof r!="number"||isNaN(r)||r<=0)throw new Error(e!=null?e:"arg must be positive number.")}function Qo(r,e){if(!Array.isArray(r)||r.length===0)throw new Error(e!=null?e:"arg must be a non-empty array.")}var Ht=globalThis&&globalThis.__awaiter||function(r,e,t,n){function i(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?s(u.value):i(u.value).then(a,c)}l((n=n.apply(r,e||[])).next())})},Yo=globalThis&&globalThis.__rest||function(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t};function Xo(r){return"line_items"in r}const Zo=30*1e3;function ea(r,e,t){e=Object.assign({},e),ta(e),Xo(e)?ra(e):na(e);const n=ia(t==null?void 0:t.timeoutMillis);return zo(r).then(i=>la(r).createCheckoutSession(i,e,n))}function ta(r){var e;typeof r.cancel_url!="undefined"?Ze(r.cancel_url,"cancel_url must be a non-empty string."):r.cancel_url=window.location.href,(e=r.mode)!==null&&e!==void 0||(r.mode="subscription"),typeof r.success_url!="undefined"?Ze(r.success_url,"success_url must be a non-empty string."):r.success_url=window.location.href}function ra(r){Qo(r.line_items,"line_items must be a non-empty array.")}function na(r){Ze(r.price,"price must be a non-empty string."),typeof r.quantity!="undefined"&&Br(r.quantity,"quantity must be a positive integer.")}function ia(r){return typeof r!="undefined"?(Br(r,"timeoutMillis must be a positive number."),r):Zo}class sa{constructor(e,t){this.customersCollection=t,this.firestore=tt(e)}createCheckoutSession(e,t,n){return Ht(this,void 0,void 0,function*(){const i=yield this.addSessionDoc(e,t);return this.waitForSessionId(i,n)})}addSessionDoc(e,t){return Ht(this,void 0,void 0,function*(){const n=H(this.firestore,this.customersCollection,e,"checkout_sessions");try{return yield tn(n,t)}catch(i){throw new O("internal","Error while querying Firestore.",i)}})}waitForSessionId(e,t){let n;return new Promise((i,s)=>{const o=setTimeout(()=>{s(new O("deadline-exceeded","Timeout while waiting for session response."))},t);n=Qt(e.withConverter(aa),a=>{const c=a.data();oa(c)&&(clearTimeout(o),i(c))},a=>{clearTimeout(o),s(new O("internal","Error while querying Firestore.",a))})}).finally(()=>n())}}function oa(r){return typeof(r==null?void 0:r.id)!="undefined"}const aa={toFirestore:()=>{throw new Error("Not implemented for readonly Session type.")},fromFirestore:r=>{const e=r.data(),{created:t,sessionId:n}=e,i=Yo(e,["created","sessionId"]);return typeof n!="undefined"?Object.assign(Object.assign({},i),{id:n,created_at:ca(t)}):Object.assign({},i)}};function ca(r){return r.toDate().toUTCString()}const Fr="checkout-session-dao";function la(r){let e=r.getComponent(Fr);return e||(e=new sa(r.app,r.customersCollection),ua(r,e)),e}function ua(r,e){r.setComponent(Fr,e)}globalThis&&globalThis.__awaiter;var C=globalThis&&globalThis.__awaiter||function(r,e,t,n){function i(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?s(u.value):i(u.value).then(a,c)}l((n=n.apply(r,e||[])).next())})},da=globalThis&&globalThis.__rest||function(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t};function ha(r,e){const t=ga(r),n=e!=null?e:{},{includePrices:i}=n,s=da(n,["includePrices"]);return t.getProducts(s).then(o=>{if(i){const a=o.map(c=>fa(t,c));return Promise.all(a)}return o})}function fa(r,e){return C(this,void 0,void 0,function*(){const t=yield r.getPrices(e.id);return Object.assign(Object.assign({},e),{prices:t})})}const jt={toFirestore:()=>{throw new Error("Not implemented for readonly Product type.")},fromFirestore:r=>Object.assign(Object.assign({},r.data()),{id:r.id,prices:[]})},Wt={toFirestore:()=>{throw new Error("Not implemented for readonly Price type.")},fromFirestore:r=>{const e=r.data();return Object.assign(Object.assign({},e),{id:r.id,product:r.ref.parent.parent.id})}};class pa{constructor(e,t){this.productsCollection=t,this.firestore=tt(e)}getProduct(e){return C(this,void 0,void 0,function*(){return(yield this.getProductSnapshotIfExists(e)).data()})}getProducts(e){return C(this,void 0,void 0,function*(){const t=yield this.getProductSnapshots(e),n=[];return t.forEach(i=>{n.push(i.data())}),n})}getPrice(e,t){return C(this,void 0,void 0,function*(){return(yield this.getPriceSnapshotIfExists(e,t)).data()})}getPrices(e,t){return C(this,void 0,void 0,function*(){t!=null&&t.assertProduct&&(yield this.getProductSnapshotIfExists(e));const n=yield this.getPriceSnapshots(e),i=[];return n.forEach(s=>{i.push(s.data())}),i})}getProductSnapshotIfExists(e){return C(this,void 0,void 0,function*(){const t=ze(this.firestore,this.productsCollection,e).withConverter(jt),n=yield this.queryFirestore(()=>Ge(t));if(!n.exists())throw new O("not-found",`No product found with the ID: ${e}`);return n})}getProductSnapshots(e){return C(this,void 0,void 0,function*(){let t=H(this.firestore,this.productsCollection).withConverter(jt);const n=[];if(e!=null&&e.activeOnly&&n.push(_e("active","==",!0)),e!=null&&e.where)for(const i of e.where)n.push(_e(...i));return typeof(e==null?void 0:e.limit)!="undefined"&&n.push(rn(e.limit)),yield this.queryFirestore(()=>(n.length>0&&(t=ve(t,...n)),te(t)))})}getPriceSnapshotIfExists(e,t){return C(this,void 0,void 0,function*(){const n=ze(this.firestore,this.productsCollection,e,"prices",t).withConverter(Wt),i=yield this.queryFirestore(()=>Ge(n));if(!i.exists())throw new O("not-found",`No price found with the product ID: ${e} and price ID: ${t}`);return i})}getPriceSnapshots(e){return C(this,void 0,void 0,function*(){const t=H(this.firestore,this.productsCollection,e,"prices").withConverter(Wt);return yield this.queryFirestore(()=>te(t))})}queryFirestore(e){return C(this,void 0,void 0,function*(){try{return yield e()}catch(t){throw new O("internal","Unexpected error while querying Firestore",t)}})}}const $r="product-dao";function ga(r){let e=r.getComponent($r);return e||(e=new pa(r.app,r.productsCollection),ma(r,e)),e}function ma(r,e){r.setComponent($r,e)}var Y=globalThis&&globalThis.__awaiter||function(r,e,t,n){function i(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?s(u.value):i(u.value).then(a,c)}l((n=n.apply(r,e||[])).next())})};function _a(r,e,t){const n=Lr(r);return ya(r).onSubscriptionUpdate(n,e,t)}const We={toFirestore:()=>{throw new Error("Not implemented for readonly Subscription type.")},fromFirestore:r=>{var e,t,n;const i=r.data(),o=i.prices.map(a=>({product:a.parent.parent.id,price:a.id}));return{cancel_at:X(i.cancel_at),cancel_at_period_end:i.cancel_at_period_end,canceled_at:X(i.canceled_at),created:me(i.created),current_period_start:me(i.current_period_start),current_period_end:me(i.current_period_end),ended_at:X(i.ended_at),id:r.id,metadata:(e=i.metadata)!==null&&e!==void 0?e:{},price:i.price.id,prices:o,product:i.product.id,quantity:(t=i.quantity)!==null&&t!==void 0?t:null,role:(n=i.role)!==null&&n!==void 0?n:null,status:i.status,stripe_link:i.stripeLink,trial_end:X(i.trial_end),trial_start:X(i.trial_start),uid:r.ref.parent.parent.id}}},qe="subscriptions";function X(r){return r===null?null:me(r)}function me(r){return r.toDate().toUTCString()}class va{constructor(e,t){this.customersCollection=t,this.firestore=tt(e)}getSubscription(e,t){return Y(this,void 0,void 0,function*(){return(yield this.getSubscriptionSnapshotIfExists(e,t)).data()})}getSubscriptions(e,t){return Y(this,void 0,void 0,function*(){const n=yield this.getSubscriptionSnapshots(e,t==null?void 0:t.status),i=[];return n.forEach(s=>{i.push(s.data())}),i})}onSubscriptionUpdate(e,t,n){const i=H(this.firestore,this.customersCollection,e,qe).withConverter(We);return Qt(i,s=>{const o={subscriptions:[],changes:[],size:s.size,empty:s.empty};s.forEach(a=>{o.subscriptions.push(a.data())}),s.docChanges().forEach(a=>{o.changes.push({type:a.type,subscription:a.doc.data()})}),t(o)},s=>{if(n){const o=new O("internal",`Error while listening to database updates: ${s.message}`,s);n(o)}})}getSubscriptionSnapshotIfExists(e,t){return Y(this,void 0,void 0,function*(){const n=ze(this.firestore,this.customersCollection,e,qe,t).withConverter(We),i=yield this.queryFirestore(()=>Ge(n));if(!i.exists())throw new O("not-found",`No subscription found with the ID: ${t} for user: ${e}`);return i})}getSubscriptionSnapshots(e,t){return Y(this,void 0,void 0,function*(){let n=H(this.firestore,this.customersCollection,e,qe).withConverter(We);return t&&(n=ve(n,_e("status","in",t))),yield this.queryFirestore(()=>te(n))})}queryFirestore(e){return Y(this,void 0,void 0,function*(){try{return yield e()}catch(t){throw new O("internal","Unexpected error while querying Firestore",t)}})}}const Vr="subscription-dao";function ya(r){let e=r.getComponent(Vr);return e||(e=new va(r.app,r.customersCollection),ba(r,e)),e}function ba(r,e){r.setComponent(Vr,e)}let qt;const Ia=Kt({name:"PreferencesComponent",setup(){return{store:Gt(),dark:xe(de.isActive),promptFontSize:xe(!1),showText:xe(!0)}},mounted(){this.loadStripe()},methods:{async subscribeCB(){const r=nn(),e=xi(r,{productsCollection:"products",customersCollection:"customers"});console.log("payments",e);const t=await ha(e,{includePrices:!0,activeOnly:!0});for(const s of t)console.log("product",s);const i=await ea(e,{line_items:[{price:"price_1Mym16CCcfiyKH9aa6ZQZvQx",quantity:"1"}],api_key:"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",fooey:"kablooey",success_url:"http://localhost:9001/#/thankyou",cancel_url:"https://www.readingedge.org"});console.log("session",i),console.log(i.url),_a(e,s=>{for(const o in s.changes)o.type==="added"&&console.log(`New subscription added with ID: ${o.subscription.id}`)}),window.location.assign(i.url)},async loadStripe(){qt=await Ln("pk_live_51Myi4CCCcfiyKH9aWeeCgtfqmR7HpOnLE9oDJn1lRbOSkfwxNsnLEfTRS8lHzdM8UNJ9O0IshKAThgnBdjcZosyC00oSLNm68T"),console.log("stripe",qt)},async portalCB(){const r="https://billing.stripe.com/p/login/eVa6qm5sSahl7tudQQ";console.log(r),window.open(r,"_blank");const e=ve(H(vt,"customers"),_e("email","==",sn.currentUser.email)),t=await te(e);console.log(t),t.forEach(async n=>{console.log(`${n.id} => ${Object.keys(n.data())}`);const i=ve(H(vt,`customers/${n.id}/subscriptions`));(await te(i)).forEach(o=>{console.log(o.data()),o.data().current_period_end.seconds>Date.now()/1e6?(console.log("This user is SUBSCRIBED!!"),this.store.subscribed=1):console.log("Ehh",o.data().current_period_end.seconds,Date.now()/1e6)})})},toggleText(){console.log("toggleText",this.showText),this.showText===!0?(console.log("showing text"),q(".assignment").classed("hidden",!1),q(".q-carousel__thumbnail").classed("hidden",!1)):(console.log("hiding text"),q(".assignment").classed("hidden",!0),q(".q-carousel__thumbnail").classed("hidden",!0))},toggleDark(){de.toggle(),console.log(de.isActive,this.dark),de.isActive},fontSizeCB(r){q("#sampleFontSwatch").style("font-size",r+"pt"),q("#slideTextDiv").style("font-size",r+"pt"),this.store.userSnapshot.preferences.textFontSize=r},fsCB(){Be.isActive?Be.exit().then(()=>{}).catch(r=>{console.log(r)}):Be.request().then(()=>{}).catch(r=>{console.log(r)})}}}),wa=f("div",{class:"text-h6"},"Reconstruct Paragraph Font Size",-1),Ea=f("td",{style:{width:"60%"}},[f("div",{id:"sampleFontSwatch"},"Reading Edge!")],-1),Sa={class:"q-pa-md",style:{"max-width":"350px"}},Ta={class:"text-center",style:{width:"100%"}},Ca={class:"text-center",style:{width:"100%"}},Oa={class:"text-center",style:{width:"100%"}},Ra={class:"text-center q-mb-md",style:{width:"100%"}},Aa={class:"text-center q-mb-md",style:{width:"100%"}};function ka(r,e,t,n,i,s){return y(),E(zr,null,[v(Kr,{modelValue:r.promptFontSize,"onUpdate:modelValue":e[1]||(e[1]=o=>r.promptFontSize=o),persistent:""},{default:T(()=>[v(zt,{style:{"min-width":"350px"}},{default:T(()=>[v(_t,{align:"center"},{default:T(()=>[wa]),_:1}),v(_t,{class:"q-pt-none",align:"center"},{default:T(()=>[f("table",null,[f("tr",null,[f("td",null,[v(Qr,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",modelValue:this.store.userSnapshot.preferences.pageFontSize,"onUpdate:modelValue":e[0]||(e[0]=o=>this.store.userSnapshot.preferences.pageFontSize=o),min:"0",max:"50",onDragValue:this.fontSizeCB},null,8,["thickness","modelValue","onDragValue"])]),Ea])])]),_:1}),v(Gr,{align:"center",class:"text-white"},{default:T(()=>[qr(v(Q,{outline:"",flat:"",label:"Done"},null,512),[[Jr]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),f("div",Sa,[v(Xr,{bordered:"",class:"rounded-borders",icon:"gear"},{default:T(()=>[v(Yr,{label:"Preferences"},{default:T(()=>[f("div",Ta,[v(Le,{modelValue:r.dark,"onUpdate:modelValue":e[2]||(e[2]=o=>r.dark=o),"keep-color":"",color:"primary","unchecked-icon":"light_mode","checked-icon":"dark_mode",onClick:e[3]||(e[3]=o=>this.toggleDark()),label:"Dark Mode"},null,8,["modelValue"])]),f("div",Ca,[v(Le,{label:"Auto-Play",modelValue:this.store.autoplay,"onUpdate:modelValue":e[4]||(e[4]=o=>this.store.autoplay=o),"keep-color":"",color:"primary"},null,8,["modelValue"])]),f("div",Oa,[v(Le,{label:"Show Text",modelValue:this.showText,"onUpdate:modelValue":e[5]||(e[5]=o=>this.showText=o),"keep-color":"",color:"primary",onClick:e[6]||(e[6]=o=>this.toggleText())},null,8,["modelValue"])]),f("div",Ra,[v(Q,{icon:"fullscreen",onClick:e[7]||(e[7]=o=>this.fsCB())}),v(Q,{"no-caps":"",icon:"format_size",onClick:e[8]||(e[8]=o=>this.promptFontSize=!0)})]),f("div",Aa,[v(Q,{onClick:e[9]||(e[9]=o=>this.subscribeCB())},{default:T(()=>[mt("Subscribe")]),_:1}),v(Q,{onClick:e[10]||(e[10]=o=>this.portalCB())},{default:T(()=>[mt("Manage")]),_:1})])]),_:1})]),_:1})])],64)}var ja=Jt(Ia,[["render",ka]]);export{ja as P,Ha as T,xi as a,ea as c,ha as g,Ln as l,_a as o};
