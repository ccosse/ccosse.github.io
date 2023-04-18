/**
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
 */const Ba={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const f=function(t,e){if(!t)throw Tt(e)},Tt=function(t){return new Error("Firebase Database ("+Ba.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Wa=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},qh=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Qs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),i.push(n[h],n[u],n[d],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw new Kh;const d=r<<2|a>>4;if(i.push(d),c!==64){const p=a<<4&240|c>>2;if(i.push(p),u!==64){const g=c<<6&192|u;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Kh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ha=function(t){const e=Wa(t);return Qs.encodeByteArray(e,!0)},Hn=function(t){return Ha(t).replace(/\./g,"")},jn=function(t){try{return Qs.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Yh(t){return ja(void 0,t)}function ja(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Xh(n)||(t[n]=ja(t[n],e[n]));return t}function Xh(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function Qh(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const Jh=()=>Qh().__FIREBASE_DEFAULTS__,Zh=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},eu=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&jn(t[1]);return e&&JSON.parse(e)},Js=()=>{try{return Jh()||Zh()||eu()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$a=t=>{var e,n;return(n=(e=Js())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Va=t=>{const e=$a(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},tu=()=>{var t;return(t=Js())===null||t===void 0?void 0:t.config},Ga=t=>{var e;return(e=Js())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class hn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function za(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Hn(JSON.stringify(n)),Hn(JSON.stringify(o)),a].join(".")}/**
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
 */function q(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zs(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(q())}function nu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iu(){const t=q();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ka(){return Ba.NODE_ADMIN===!0}function su(){try{return typeof indexedDB=="object"}catch{return!1}}function ru(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const ou="FirebaseError";class Te extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=ou,Object.setPrototypeOf(this,Te.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,un.prototype.create)}}class un{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?au(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Te(s,a,i)}}function au(t,e){return t.replace(lu,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const lu=/\{\$([^}]+)}/g;/**
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
 */function Gt(t){return JSON.parse(t)}function L(t){return JSON.stringify(t)}/**
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
 */const Ya=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=Gt(jn(r[0])||""),n=Gt(jn(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},cu=function(t){const e=Ya(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},hu=function(t){const e=Ya(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function fe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function gt(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ms(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $n(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Vn(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Io(r)&&Io(o)){if(!Vn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Io(t){return t!==null&&typeof t=="object"}/**
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
 */function Ct(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class uu{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)i[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const d=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const d=(s<<5|s>>>27)+c+l+h+i[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function du(t,e){const n=new fu(t,e);return n.subscribe.bind(n)}class fu{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");pu(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Yi),s.error===void 0&&(s.error=Yi),s.complete===void 0&&(s.complete=Yi);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pu(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yi(){}function gi(t,e){return`${t} failed: ${e} argument `}/**
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
 */const gu=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,f(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},_i=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function se(t){return t&&t._delegate?t._delegate:t}class Me{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $e="[DEFAULT]";/**
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
 */class _u{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new hn;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yu(e))try{this.getOrInitializeService({instanceIdentifier:$e})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=$e){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$e){return this.instances.has(e)}getOptions(e=$e){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:mu(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=$e){return this.component?this.component.multipleInstances?e:$e:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mu(t){return t===$e?void 0:t}function yu(t){return t.instantiationMode==="EAGER"}/**
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
 */class vu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _u(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var b;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(b||(b={}));const Eu={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},Iu=b.INFO,wu={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},Tu=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=wu[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mi{constructor(e){this.name=e,this._logLevel=Iu,this._logHandler=Tu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in b))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Eu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...e),this._logHandler(this,b.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...e),this._logHandler(this,b.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,b.INFO,...e),this._logHandler(this,b.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,b.WARN,...e),this._logHandler(this,b.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...e),this._logHandler(this,b.ERROR,...e)}}const Cu=(t,e)=>e.some(n=>t instanceof n);let wo,To;function Su(){return wo||(wo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bu(){return To||(To=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xa=new WeakMap,ys=new WeakMap,Qa=new WeakMap,Xi=new WeakMap,er=new WeakMap;function Ru(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Pe(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xa.set(n,t)}).catch(()=>{}),er.set(e,t),e}function Au(t){if(ys.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ys.set(t,e)}let vs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ys.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ku(t){vs=t(vs)}function Nu(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Qi(this),e,...n);return Qa.set(i,e.sort?e.sort():[e]),Pe(i)}:bu().includes(t)?function(...e){return t.apply(Qi(this),e),Pe(Xa.get(this))}:function(...e){return Pe(t.apply(Qi(this),e))}}function Pu(t){return typeof t=="function"?Nu(t):(t instanceof IDBTransaction&&Au(t),Cu(t,Su())?new Proxy(t,vs):t)}function Pe(t){if(t instanceof IDBRequest)return Ru(t);if(Xi.has(t))return Xi.get(t);const e=Pu(t);return e!==t&&(Xi.set(t,e),er.set(e,t)),e}const Qi=t=>er.get(t);function Du(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Pe(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Pe(o.result),l.oldVersion,l.newVersion,Pe(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Ou=["get","getKey","getAll","getAllKeys","count"],xu=["put","add","delete","clear"],Ji=new Map;function Co(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ji.get(e))return Ji.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=xu.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Ou.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Ji.set(e,r),r}ku(t=>({...t,get:(e,n,i)=>Co(e,n)||t.get(e,n,i),has:(e,n)=>!!Co(e,n)||t.has(e,n)}));/**
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
 */class Mu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Lu(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Lu(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Es="@firebase/app",So="0.9.7";/**
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
 */const Je=new mi("@firebase/app"),Fu="@firebase/app-compat",Uu="@firebase/analytics-compat",Bu="@firebase/analytics",Wu="@firebase/app-check-compat",Hu="@firebase/app-check",ju="@firebase/auth",$u="@firebase/auth-compat",Vu="@firebase/database",Gu="@firebase/database-compat",zu="@firebase/functions",qu="@firebase/functions-compat",Ku="@firebase/installations",Yu="@firebase/installations-compat",Xu="@firebase/messaging",Qu="@firebase/messaging-compat",Ju="@firebase/performance",Zu="@firebase/performance-compat",ed="@firebase/remote-config",td="@firebase/remote-config-compat",nd="@firebase/storage",id="@firebase/storage-compat",sd="@firebase/firestore",rd="@firebase/firestore-compat",od="firebase",ad="9.19.1";/**
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
 */const Is="[DEFAULT]",ld={[Es]:"fire-core",[Fu]:"fire-core-compat",[Bu]:"fire-analytics",[Uu]:"fire-analytics-compat",[Hu]:"fire-app-check",[Wu]:"fire-app-check-compat",[ju]:"fire-auth",[$u]:"fire-auth-compat",[Vu]:"fire-rtdb",[Gu]:"fire-rtdb-compat",[zu]:"fire-fn",[qu]:"fire-fn-compat",[Ku]:"fire-iid",[Yu]:"fire-iid-compat",[Xu]:"fire-fcm",[Qu]:"fire-fcm-compat",[Ju]:"fire-perf",[Zu]:"fire-perf-compat",[ed]:"fire-rc",[td]:"fire-rc-compat",[nd]:"fire-gcs",[id]:"fire-gcs-compat",[sd]:"fire-fst",[rd]:"fire-fst-compat","fire-js":"fire-js",[od]:"fire-js-all"};/**
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
 */const Gn=new Map,ws=new Map;function cd(t,e){try{t.container.addComponent(e)}catch(n){Je.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ze(t){const e=t.name;if(ws.has(e))return Je.debug(`There were multiple attempts to register component ${e}.`),!1;ws.set(e,t);for(const n of Gn.values())cd(n,t);return!0}function yi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const hd={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},De=new un("app","Firebase",hd);/**
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
 */class ud{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Me("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw De.create("app-deleted",{appName:this._name})}}/**
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
 */const St=ad;function Ja(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Is,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw De.create("bad-app-name",{appName:String(s)});if(n||(n=tu()),!n)throw De.create("no-options");const r=Gn.get(s);if(r){if(Vn(n,r.options)&&Vn(i,r.config))return r;throw De.create("duplicate-app",{appName:s})}const o=new vu(s);for(const l of ws.values())o.addComponent(l);const a=new ud(n,i,o);return Gn.set(s,a),a}function tr(t=Is){const e=Gn.get(t);if(!e&&t===Is)return Ja();if(!e)throw De.create("no-app",{appName:t});return e}function ce(t,e,n){var i;let s=(i=ld[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Je.warn(a.join(" "));return}Ze(new Me(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const dd="firebase-heartbeat-database",fd=1,zt="firebase-heartbeat-store";let Zi=null;function Za(){return Zi||(Zi=Du(dd,fd,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zt)}}}).catch(t=>{throw De.create("idb-open",{originalErrorMessage:t.message})})),Zi}async function pd(t){try{return(await Za()).transaction(zt).objectStore(zt).get(el(t))}catch(e){if(e instanceof Te)Je.warn(e.message);else{const n=De.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Je.warn(n.message)}}}async function bo(t,e){try{const i=(await Za()).transaction(zt,"readwrite");return await i.objectStore(zt).put(e,el(t)),i.done}catch(n){if(n instanceof Te)Je.warn(n.message);else{const i=De.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Je.warn(i.message)}}}function el(t){return`${t.name}!${t.options.appId}`}/**
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
 */const gd=1024,_d=30*24*60*60*1e3;class md{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vd(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ro();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=_d}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ro(),{heartbeatsToSend:n,unsentEntries:i}=yd(this._heartbeatsCache.heartbeats),s=Hn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ro(){return new Date().toISOString().substring(0,10)}function yd(t,e=gd){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Ao(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ao(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class vd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return su()?ru().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return bo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return bo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ao(t){return Hn(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ed(t){Ze(new Me("platform-logger",e=>new Mu(e),"PRIVATE")),Ze(new Me("heartbeat",e=>new md(e),"PRIVATE")),ce(Es,So,t),ce(Es,So,"esm2017"),ce("fire-js","")}Ed("");function nr(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function tl(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Id=tl,nl=new un("auth","Firebase",tl());/**
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
 */const ko=new mi("@firebase/auth");function Fn(t,...e){ko.logLevel<=b.ERROR&&ko.error(`Auth (${St}): ${t}`,...e)}/**
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
 */function de(t,...e){throw ir(t,...e)}function he(t,...e){return ir(t,...e)}function il(t,e,n){const i=Object.assign(Object.assign({},Id()),{[e]:n});return new un("auth","Firebase",i).create(e,{appName:t.name})}function wd(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&de(t,"argument-error"),il(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ir(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return nl.create(t,...e)}function y(t,e,...n){if(!t)throw ir(e,...n)}function ge(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fn(e),new Error(e)}function Ee(t,e){t||ge(e)}/**
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
 */const No=new Map;function _e(t){Ee(t instanceof Function,"Expected a class definition");let e=No.get(t);return e?(Ee(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,No.set(t,e),e)}/**
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
 */function Td(t,e){const n=yi(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Vn(r,e!=null?e:{}))return s;de(s,"already-initialized")}return n.initialize({options:e})}function Cd(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(_e);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Ts(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Sd(){return Po()==="http:"||Po()==="https:"}function Po(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function bd(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sd()||nu()||"connection"in navigator)?navigator.onLine:!0}function Rd(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class dn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ee(n>e,"Short delay should be less than long delay!"),this.isMobile=Zs()||qa()}get(){return bd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function sr(t,e){Ee(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class sl{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;ge("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;ge("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;ge("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ad={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const kd=new dn(3e4,6e4);function Nd(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vi(t,e,n,i,s={}){return rl(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Ct(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),sl.fetch()(ol(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function rl(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ad),e);try{const s=new Dd(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Pn(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pn(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Pn(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Pn(t,"user-disabled",o);const h=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw il(t,h,c);de(t,h)}}catch(s){if(s instanceof Te)throw s;de(t,"network-request-failed",{message:String(s)})}}async function Pd(t,e,n,i,s={}){const r=await vi(t,e,n,i,s);return"mfaPendingCredential"in r&&de(t,"multi-factor-auth-required",{_serverResponse:r}),r}function ol(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?sr(t.config,s):`${t.config.apiScheme}://${s}`}class Dd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(he(this.auth,"network-request-failed")),kd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pn(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=he(t,e,i);return s.customData._tokenResponse=n,s}/**
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
 */async function Od(t,e){return vi(t,"POST","/v1/accounts:delete",e)}async function xd(t,e){return vi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Bt(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Md(t,e=!1){const n=se(t),i=await n.getIdToken(e),s=rr(i);y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Bt(es(s.auth_time)),issuedAtTime:Bt(es(s.iat)),expirationTime:Bt(es(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function es(t){return Number(t)*1e3}function rr(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Fn("JWT malformed, contained fewer than 3 sections"),null;try{const s=jn(n);return s?JSON.parse(s):(Fn("Failed to decode base64 JWT payload"),null)}catch(s){return Fn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ld(t){const e=rr(t);return y(e,"internal-error"),y(typeof e.exp!="undefined","internal-error"),y(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qt(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Te&&Fd(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Fd({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Ud{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class al{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bt(this.lastLoginAt),this.creationTime=Bt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zn(t){var e;const n=t.auth,i=await t.getIdToken(),s=await qt(t,xd(n,{idToken:i}));y(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Hd(r.providerUserInfo):[],a=Wd(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new al(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,u)}async function Bd(t){const e=se(t);await zn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wd(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Hd(t){return t.map(e=>{var{providerId:n}=e,i=nr(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function jd(t,e){const n=await rl(t,{},async()=>{const i=Ct({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=ol(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sl.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Kt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(typeof e.idToken!="undefined","internal-error"),y(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Ld(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await jd(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Kt;return i&&(y(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(y(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(y(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kt,this.toJSON())}_performRefresh(){return ge("not implemented")}}/**
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
 */function Se(t,e){y(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Ye{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=nr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ud(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new al(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await qt(this,this.stsTokenManager.getToken(this.auth,e));return y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Md(this,e)}reload(){return Bd(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ye(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await zn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qt(this,Od(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,h;const u=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,pe=(c=n.createdAt)!==null&&c!==void 0?c:void 0,He=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:je,emailVerified:Nn,isAnonymous:vo,providerData:qi,stsTokenManager:Eo}=n;y(je&&Eo,e,"internal-error");const Gh=Kt.fromJSON(this.name,Eo);y(typeof je=="string",e,"internal-error"),Se(u,e.name),Se(d,e.name),y(typeof Nn=="boolean",e,"internal-error"),y(typeof vo=="boolean",e,"internal-error"),Se(p,e.name),Se(g,e.name),Se(T,e.name),Se(x,e.name),Se(pe,e.name),Se(He,e.name);const Ki=new Ye({uid:je,auth:e,email:d,emailVerified:Nn,displayName:u,isAnonymous:vo,photoURL:g,phoneNumber:p,tenantId:T,stsTokenManager:Gh,createdAt:pe,lastLoginAt:He});return qi&&Array.isArray(qi)&&(Ki.providerData=qi.map(zh=>Object.assign({},zh))),x&&(Ki._redirectEventId=x),Ki}static async _fromIdTokenResponse(e,n,i=!1){const s=new Kt;s.updateFromServerResponse(n);const r=new Ye({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await zn(r),r}}/**
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
 */class ll{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ll.type="NONE";const Do=ll;/**
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
 */function Un(t,e,n){return`firebase:${t}:${e}:${n}`}class ct{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Un(this.userKey,s.apiKey,r),this.fullPersistenceKey=Un("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ye._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new ct(_e(Do),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||_e(Do);const o=Un(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const u=Ye._fromJSON(e,h);c!==r&&(a=u),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ct(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ct(r,e,i))}}/**
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
 */function Oo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ul(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fl(e))return"Blackberry";if(pl(e))return"Webos";if(or(e))return"Safari";if((e.includes("chrome/")||hl(e))&&!e.includes("edge/"))return"Chrome";if(dl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function cl(t=q()){return/firefox\//i.test(t)}function or(t=q()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hl(t=q()){return/crios\//i.test(t)}function ul(t=q()){return/iemobile/i.test(t)}function dl(t=q()){return/android/i.test(t)}function fl(t=q()){return/blackberry/i.test(t)}function pl(t=q()){return/webos/i.test(t)}function Ei(t=q()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $d(t=q()){var e;return Ei(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Vd(){return iu()&&document.documentMode===10}function gl(t=q()){return Ei(t)||dl(t)||pl(t)||fl(t)||/windows phone/i.test(t)||ul(t)}function Gd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function _l(t,e=[]){let n;switch(t){case"Browser":n=Oo(q());break;case"Worker":n=`${Oo(q())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${St}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class zd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */class qd{constructor(e,n,i){this.app=e,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xo(this),this.idTokenSubscription=new xo(this),this.beforeStateQueue=new zd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nl,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_e(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await ct.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?se(e):null;return n&&y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_e(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new un("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_e(e)||this._popupRedirectResolver;y(n,this,"argument-error"),this.redirectPersistenceManager=await ct.create(this,[_e(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return y(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_l(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(n["X-Firebase-Client"]=i),n}}function Ii(t){return se(t)}class xo{constructor(e){this.auth=e,this.observer=null,this.addObserver=du(n=>this.observer=n)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Kd(t,e,n){const i=Ii(t);y(i._canInitEmulator,i,"emulator-config-failed"),y(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=ml(e),{host:o,port:a}=Yd(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Xd()}function ml(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Yd(t){const e=ml(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Mo(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Mo(o)}}}function Mo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Xd(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class yl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ge("not implemented")}_getIdTokenResponse(e){return ge("not implemented")}_linkToIdToken(e,n){return ge("not implemented")}_getReauthenticationResolver(e){return ge("not implemented")}}/**
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
 */async function ht(t,e){return Pd(t,"POST","/v1/accounts:signInWithIdp",Nd(t,e))}/**
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
 */const Qd="http://localhost";class et extends yl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new et(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):de("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=nr(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new et(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ht(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,ht(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ht(e,n)}buildRequest(){const e={requestUri:Qd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ct(n)}return e}}/**
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
 */class ar{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fn extends ar{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class be extends fn{constructor(){super("facebook.com")}static credential(e){return et._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return be.credential(e.oauthAccessToken)}catch{return null}}}be.FACEBOOK_SIGN_IN_METHOD="facebook.com";be.PROVIDER_ID="facebook.com";/**
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
 */class Re extends fn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return et._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Re.credential(n,i)}catch{return null}}}Re.GOOGLE_SIGN_IN_METHOD="google.com";Re.PROVIDER_ID="google.com";/**
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
 */class Ae extends fn{constructor(){super("github.com")}static credential(e){return et._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ae.credential(e.oauthAccessToken)}catch{return null}}}Ae.GITHUB_SIGN_IN_METHOD="github.com";Ae.PROVIDER_ID="github.com";/**
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
 */class ke extends fn{constructor(){super("twitter.com")}static credential(e,n){return et._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return ke.credential(n,i)}catch{return null}}}ke.TWITTER_SIGN_IN_METHOD="twitter.com";ke.PROVIDER_ID="twitter.com";/**
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
 */class _t{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await Ye._fromIdTokenResponse(e,i,s),o=Lo(i);return new _t({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Lo(i);return new _t({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Lo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class qn extends Te{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,qn.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new qn(e,n,i,s)}}function vl(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?qn._fromErrorAndOperation(t,r,e,i):r})}async function Jd(t,e,n=!1){const i=await qt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _t._forOperation(t,"link",i)}/**
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
 */async function Zd(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await qt(t,vl(i,s,e,t),n);y(r.idToken,i,"internal-error");const o=rr(r.idToken);y(o,i,"internal-error");const{sub:a}=o;return y(t.uid===a,i,"user-mismatch"),_t._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&de(i,"user-mismatch"),r}}/**
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
 */async function ef(t,e,n=!1){const i="signIn",s=await vl(t,i,e),r=await _t._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function tf(t,e,n,i){return se(t).onIdTokenChanged(e,n,i)}function nf(t,e,n){return se(t).beforeAuthStateChanged(e,n)}const Kn="__sak";/**
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
 */class El{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Kn,"1"),this.storage.removeItem(Kn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function sf(){const t=q();return or(t)||Ei(t)}const rf=1e3,of=10;class Il extends El{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sf()&&Gd(),this.fallbackToPolling=gl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Vd()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,of):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},rf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Il.type="LOCAL";const af=Il;/**
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
 */class wl extends El{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wl.type="SESSION";const Tl=wl;/**
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
 */function lf(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class wi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new wi(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await lf(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wi.receivers=[];/**
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
 */function lr(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class cf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=lr("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(u){const d=u;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ue(){return window}function hf(t){ue().location.href=t}/**
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
 */function Cl(){return typeof ue().WorkerGlobalScope!="undefined"&&typeof ue().importScripts=="function"}async function uf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function df(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ff(){return Cl()?self:null}/**
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
 */const Sl="firebaseLocalStorageDb",pf=1,Yn="firebaseLocalStorage",bl="fbase_key";class pn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ti(t,e){return t.transaction([Yn],e?"readwrite":"readonly").objectStore(Yn)}function gf(){const t=indexedDB.deleteDatabase(Sl);return new pn(t).toPromise()}function Cs(){const t=indexedDB.open(Sl,pf);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Yn,{keyPath:bl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Yn)?e(i):(i.close(),await gf(),e(await Cs()))})})}async function Fo(t,e,n){const i=Ti(t,!0).put({[bl]:e,value:n});return new pn(i).toPromise()}async function _f(t,e){const n=Ti(t,!1).get(e),i=await new pn(n).toPromise();return i===void 0?null:i.value}function Uo(t,e){const n=Ti(t,!0).delete(e);return new pn(n).toPromise()}const mf=800,yf=3;class Rl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>yf)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wi._getInstance(ff()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uf(),!this.activeServiceWorker)return;this.sender=new cf(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||df()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cs();return await Fo(e,Kn,"1"),await Uo(e,Kn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Fo(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>_f(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Ti(s,!1).getAll();return new pn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rl.type="LOCAL";const vf=Rl;/**
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
 */function Ef(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function If(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=he("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",Ef().appendChild(i)})}function wf(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new dn(3e4,6e4);/**
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
 */function Al(t,e){return e?_e(e):(y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class cr extends yl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ht(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ht(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ht(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Tf(t){return ef(t.auth,new cr(t),t.bypassAuthState)}function Cf(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),Zd(n,new cr(t),t.bypassAuthState)}async function Sf(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),Jd(n,new cr(t),t.bypassAuthState)}/**
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
 */class kl{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Tf;case"linkViaPopup":case"linkViaRedirect":return Sf;case"reauthViaPopup":case"reauthViaRedirect":return Cf;default:de(this.auth,"internal-error")}}resolve(e){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const bf=new dn(2e3,1e4);async function tv(t,e,n){const i=Ii(t);wd(t,e,ar);const s=Al(i,n);return new Ge(i,"signInViaPopup",e,s).executeNotNull()}class Ge extends kl{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Ge.currentPopupAction&&Ge.currentPopupAction.cancel(),Ge.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){Ee(this.filter.length===1,"Popup operations only handle one event");const e=lr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(he(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(he(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ge.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(he(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,bf.get())};e()}}Ge.currentPopupAction=null;/**
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
 */const Rf="pendingRedirect",Bn=new Map;class Af extends kl{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Bn.get(this.auth._key());if(!e){try{const i=await kf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Bn.set(this.auth._key(),e)}return this.bypassAuthState||Bn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kf(t,e){const n=Df(e),i=Pf(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function Nf(t,e){Bn.set(t._key(),e)}function Pf(t){return _e(t._redirectPersistence)}function Df(t){return Un(Rf,t.config.apiKey,t.name)}async function Of(t,e,n=!1){const i=Ii(t),s=Al(i,e),o=await new Af(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const xf=10*60*1e3;class Mf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Lf(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Nl(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(he(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xf&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bo(e))}saveEventToCache(e){this.cachedEventUids.add(Bo(e)),this.lastProcessedEventTime=Date.now()}}function Bo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Nl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Lf(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nl(t);default:return!1}}/**
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
 */async function Ff(t,e={}){return vi(t,"GET","/v1/projects",e)}/**
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
 */const Uf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Bf=/^https?/;async function Wf(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ff(t);for(const n of e)try{if(Hf(n))return}catch{}de(t,"unauthorized-domain")}function Hf(t){const e=Ts(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!Bf.test(n))return!1;if(Uf.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const jf=new dn(3e4,6e4);function Wo(){const t=ue().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $f(t){return new Promise((e,n)=>{var i,s,r;function o(){Wo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wo(),n(he(t,"network-request-failed"))},timeout:jf.get()})}if(!((s=(i=ue().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=ue().gapi)===null||r===void 0)&&r.load)o();else{const a=wf("iframefcb");return ue()[a]=()=>{gapi.load?o():n(he(t,"network-request-failed"))},If(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Wn=null,e})}let Wn=null;function Vf(t){return Wn=Wn||$f(t),Wn}/**
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
 */const Gf=new dn(5e3,15e3),zf="__/auth/iframe",qf="emulator/auth/iframe",Kf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Yf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xf(t){const e=t.config;y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?sr(e,qf):`https://${t.config.authDomain}/${zf}`,i={apiKey:e.apiKey,appName:t.name,v:St},s=Yf.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Ct(i).slice(1)}`}async function Qf(t){const e=await Vf(t),n=ue().gapi;return y(n,t,"internal-error"),e.open({where:document.body,url:Xf(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kf,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=he(t,"network-request-failed"),a=ue().setTimeout(()=>{r(o)},Gf.get());function l(){ue().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Jf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zf=500,ep=600,tp="_blank",np="http://localhost";class Ho{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ip(t,e,n,i=Zf,s=ep){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Jf),{width:i.toString(),height:s.toString(),top:r,left:o}),c=q().toLowerCase();n&&(a=hl(c)?tp:n),cl(c)&&(e=e||np,l.scrollbars="yes");const h=Object.entries(l).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if($d(c)&&a!=="_self")return sp(e||"",a),new Ho(null);const u=window.open(e||"",a,h);y(u,t,"popup-blocked");try{u.focus()}catch{}return new Ho(u)}function sp(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const rp="__/auth/handler",op="emulator/auth/handler";function jo(t,e,n,i,s,r){y(t.config.authDomain,t,"auth-domain-config-required"),y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:St,eventId:s};if(e instanceof ar){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ms(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof fn){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${ap(t)}?${Ct(a).slice(1)}`}function ap({config:t}){return t.emulator?sr(t,op):`https://${t.authDomain}/${rp}`}/**
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
 */const ts="webStorageSupport";class lp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tl,this._completeRedirectFn=Of,this._overrideRedirectResult=Nf}async _openPopup(e,n,i,s){var r;Ee((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=jo(e,n,i,Ts(),s);return ip(e,o,lr())}async _openRedirect(e,n,i,s){return await this._originValidation(e),hf(jo(e,n,i,Ts(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Ee(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await Qf(e),i=new Mf(e);return n.register("authEvent",s=>(y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ts,{type:ts},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[ts];o!==void 0&&n(!!o),de(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Wf(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gl()||or()||Ei()}}const cp=lp;var $o="@firebase/auth",Vo="0.22.0";/**
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
 */class hp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function up(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function dp(t){Ze(new Me("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=i.options;return((a,l)=>{y(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),y(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_l(t)},h=new qd(a,l,c);return Cd(h,n),h})(i,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Ze(new Me("auth-internal",e=>{const n=Ii(e.getProvider("auth").getImmediate());return(i=>new hp(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ce($o,Vo,up(t)),ce($o,Vo,"esm2017")}/**
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
 */const fp=5*60,pp=Ga("authIdTokenMaxAge")||fp;let Go=null;const gp=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>pp)return;const s=n==null?void 0:n.token;Go!==s&&(Go=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _p(t=tr()){const e=yi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Td(t,{popupRedirectResolver:cp,persistence:[vf,af,Tl]}),i=Ga("authTokenSyncURL");if(i){const r=gp(i);nf(n,r,()=>r(n.currentUser)),tf(n,o=>r(o))}const s=$a("auth");return s&&Kd(n,`http://${s}`),n}dp("Browser");var mp="firebase",yp="9.19.1";/**
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
 */ce(mp,yp,"app");const zo="@firebase/database",qo="0.14.4";/**
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
 */let Pl="";function vp(t){Pl=t}/**
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
 */class Ep{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),L(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Gt(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Ip{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return fe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Dl=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ep(e)}}catch{}return new Ip},ze=Dl("localStorage"),Ss=Dl("sessionStorage");/**
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
 */const ut=new mi("@firebase/database"),wp=function(){let t=1;return function(){return t++}}(),Ol=function(t){const e=gu(t),n=new uu;n.update(e);const i=n.digest();return Qs.encodeByteArray(i)},gn=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=gn.apply(null,i):typeof i=="object"?e+=L(i):e+=i,e+=" "}return e};let Xe=null,Ko=!0;const Tp=function(t,e){f(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ut.logLevel=b.VERBOSE,Xe=ut.log.bind(ut),e&&Ss.set("logging_enabled",!0)):typeof t=="function"?Xe=t:(Xe=null,Ss.remove("logging_enabled"))},W=function(...t){if(Ko===!0&&(Ko=!1,Xe===null&&Ss.get("logging_enabled")===!0&&Tp(!0)),Xe){const e=gn.apply(null,t);Xe(e)}},_n=function(t){return function(...e){W(t,...e)}},bs=function(...t){const e="FIREBASE INTERNAL ERROR: "+gn(...t);ut.error(e)},Ie=function(...t){const e=`FIREBASE FATAL ERROR: ${gn(...t)}`;throw ut.error(e),new Error(e)},X=function(...t){const e="FIREBASE WARNING: "+gn(...t);ut.warn(e)},Cp=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&X("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},hr=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Sp=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},mt="[MIN_NAME]",tt="[MAX_NAME]",st=function(t,e){if(t===e)return 0;if(t===mt||e===tt)return-1;if(e===mt||t===tt)return 1;{const n=Yo(t),i=Yo(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},bp=function(t,e){return t===e?0:t<e?-1:1},Dt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+L(e))},ur=function(t){if(typeof t!="object"||t===null)return L(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=L(e[i]),n+=":",n+=ur(t[e[i]]);return n+="}",n},xl=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function j(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ml=function(t){f(!hr(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},Rp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ap=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function kp(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const Np=new RegExp("^-?(0*)\\d{1,10}$"),Pp=-2147483648,Dp=2147483647,Yo=function(t){if(Np.test(t)){const e=Number(t);if(e>=Pp&&e<=Dp)return e}return null},bt=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw X("Exception was thrown by user callback.",n),e},Math.floor(0))}},Op=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wt=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class xp{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){X(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Mp{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(W("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',X(e)}}class dt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}dt.OWNER="owner";/**
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
 */const dr="5",Ll="v",Fl="s",Ul="r",Bl="f",Wl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Hl="ls",jl="p",Rs="ac",$l="websocket",Vl="long_polling";/**
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
 */class Gl{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ze.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ze.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Lp(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function zl(t,e,n){f(typeof e=="string","typeof type must == string"),f(typeof n=="object","typeof params must == object");let i;if(e===$l)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Vl)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Lp(t)&&(n.ns=t.namespace);const s=[];return j(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class Fp{constructor(){this.counters_={}}incrementCounter(e,n=1){fe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Yh(this.counters_)}}/**
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
 */const ns={},is={};function fr(t){const e=t.toString();return ns[e]||(ns[e]=new Fp),ns[e]}function Up(t,e){const n=t.toString();return is[n]||(is[n]=e()),is[n]}/**
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
 */class Bp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&bt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Xo="start",Wp="close",Hp="pLPCommand",jp="pRTLPCB",ql="id",Kl="pw",Yl="ser",$p="cb",Vp="seg",Gp="ts",zp="d",qp="dframe",Xl=1870,Ql=30,Kp=Xl-Ql,Yp=25e3,Xp=3e4;class at{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_n(e),this.stats_=fr(n),this.urlFn=l=>(this.appCheckToken&&(l[Rs]=this.appCheckToken),zl(n,Vl,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Bp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Xp)),Sp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new pr((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Xo)this.id=a,this.password=l;else if(o===Wp)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Xo]="t",i[Yl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[$p]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Ll]=dr,this.transportSessionId&&(i[Fl]=this.transportSessionId),this.lastSessionId&&(i[Hl]=this.lastSessionId),this.applicationId&&(i[jl]=this.applicationId),this.appCheckToken&&(i[Rs]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Wl.test(location.hostname)&&(i[Ul]=Bl);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){at.forceAllow_=!0}static forceDisallow(){at.forceDisallow_=!0}static isAvailable(){return at.forceAllow_?!0:!at.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!Rp()&&!Ap()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=L(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Ha(n),s=xl(i,Kp);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[qp]="t",i[ql]=e,i[Kl]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=L(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class pr{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=wp(),window[Hp+this.uniqueCallbackIdentifier]=e,window[jp+this.uniqueCallbackIdentifier]=n,this.myIFrame=pr.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){W("frame writing exception"),a.stack&&W(a.stack),W(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||W("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ql]=this.myID,e[Kl]=this.myPW,e[Yl]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ql+i.length<=Xl;){const o=this.pendingSegs.shift();i=i+"&"+Vp+s+"="+o.seg+"&"+Gp+s+"="+o.ts+"&"+zp+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(Yp)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{W("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const Qp=16384,Jp=45e3;let Xn=null;typeof MozWebSocket!="undefined"?Xn=MozWebSocket:typeof WebSocket!="undefined"&&(Xn=WebSocket);class re{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_n(this.connId),this.stats_=fr(n),this.connURL=re.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Ll]=dr,typeof location!="undefined"&&location.hostname&&Wl.test(location.hostname)&&(o[Ul]=Bl),n&&(o[Fl]=n),i&&(o[Hl]=i),s&&(o[Rs]=s),r&&(o[jl]=r),zl(e,$l,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ze.set("previous_websocket_failure",!0);try{let i;Ka(),this.mySock=new Xn(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){re.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Xn!==null&&!re.forceDisallow_}static previouslyFailed(){return ze.isInMemoryStorage||ze.get("previous_websocket_failure")===!0}markConnectionHealthy(){ze.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Gt(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=L(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=xl(n,Qp);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Jp))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}re.responsesRequiredToBeHealthy=2;re.healthyTimeout=3e4;/**
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
 */class Yt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[at,re]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=re&&re.isAvailable();let i=n&&!re.previouslyFailed();if(e.webSocketOnly&&(n||X("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[re];else{const s=this.transports_=[];for(const r of Yt.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Yt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Yt.globalTransportInitialized_=!1;/**
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
 */const Zp=6e4,eg=5e3,tg=10*1024,ng=100*1024,ss="t",Qo="d",ig="s",Jo="r",sg="e",Zo="o",ea="a",ta="n",na="p",rg="h";class og{constructor(e,n,i,s,r,o,a,l,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_n("c:"+this.id+":"),this.transportManager_=new Yt(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Wt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ng?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>tg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ss in e){const n=e[ss];n===ea?this.upgradeIfSecondaryHealthy_():n===Jo?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Zo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Dt("t",e),i=Dt("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:na,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ea,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ta,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Dt("t",e),i=Dt("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Dt(ss,e);if(Qo in e){const i=e[Qo];if(n===rg){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===ta){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ig?this.onConnectionShutdown_(i):n===Jo?this.onReset_(i):n===sg?bs("Server Error: "+i):n===Zo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):bs("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),dr!==i&&X("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Wt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Zp))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(eg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:na,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ze.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Jl{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Zl{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){f(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Qn extends Zl{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Zs()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Qn}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ia=32,sa=768;class R{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function S(){return new R("")}function w(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Le(t){return t.pieces_.length-t.pieceNum_}function k(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new R(t.pieces_,e)}function gr(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ag(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Xt(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ec(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new R(e,0)}function P(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof R)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new R(n,0)}function I(t){return t.pieceNum_>=t.pieces_.length}function K(t,e){const n=w(t),i=w(e);if(n===null)return e;if(n===i)return K(k(t),k(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function lg(t,e){const n=Xt(t,0),i=Xt(e,0);for(let s=0;s<n.length&&s<i.length;s++){const r=st(n[s],i[s]);if(r!==0)return r}return n.length===i.length?0:n.length<i.length?-1:1}function tc(t,e){if(Le(t)!==Le(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function te(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Le(t)>Le(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class cg{constructor(e,n){this.errorPrefix_=n,this.parts_=Xt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=_i(this.parts_[i]);nc(this)}}function hg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=_i(e),nc(t)}function ug(t){const e=t.parts_.pop();t.byteLength_-=_i(e),t.parts_.length>0&&(t.byteLength_-=1)}function nc(t){if(t.byteLength_>sa)throw new Error(t.errorPrefix_+"has a key path longer than "+sa+" bytes ("+t.byteLength_+").");if(t.parts_.length>ia)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ia+") or object contains a cycle "+Ve(t))}function Ve(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class _r extends Zl{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new _r}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ot=1e3,dg=60*5*1e3,ra=30*1e3,fg=1.3,pg=3e4,gg="server_kill",oa=3;class ve extends Jl{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ve.nextPersistentConnectionId_++,this.log_=_n("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ot,this.maxReconnectDelay_=dg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Ka())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");_r.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Qn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(L(r)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new hn,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ve.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&fe(e,"w")){const i=gt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();X(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||hu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ra)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=cu(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+L(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):bs("Unrecognized action received from server: "+L(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ot,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ot,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>pg&&(this.reconnectDelay_=Ot),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*fg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ve.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(u){f(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?W("getToken() completed but was canceled"):(W("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new og(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,p=>{X(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(gg)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&X(u),l())}}}interrupt(e){W("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){W("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ms(this.interruptReasons_)&&(this.reconnectDelay_=Ot,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>ur(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new R(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){W("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=oa&&(this.reconnectDelay_=ra,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){W("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=oa&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Pl.replace(/\./g,"-")]=1,Zs()?e["framework.cordova"]=1:qa()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Qn.getInstance().currentlyOnline();return ms(this.interruptReasons_)&&e}}ve.nextPersistentConnectionId_=0;ve.nextConnectionId_=0;/**
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
 */class E{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new E(e,n)}}/**
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
 */class Ci{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new E(mt,e),s=new E(mt,n);return this.compare(i,s)!==0}minPost(){return E.MIN}}/**
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
 */let Dn;class ic extends Ci{static get __EMPTY_NODE(){return Dn}static set __EMPTY_NODE(e){Dn=e}compare(e,n){return st(e.name,n.name)}isDefinedOn(e){throw Tt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return E.MIN}maxPost(){return new E(tt,Dn)}makePost(e,n){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new E(e,Dn)}toString(){return".key"}}const ft=new ic;/**
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
 */class On{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class U{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i!=null?i:U.RED,this.left=s!=null?s:Q.EMPTY_NODE,this.right=r!=null?r:Q.EMPTY_NODE}copy(e,n,i,s,r){return new U(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Q.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Q.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,U.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,U.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}U.RED=!0;U.BLACK=!1;class _g{copy(e,n,i,s,r){return this}insert(e,n,i){return new U(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Q{constructor(e,n=Q.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Q(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,U.BLACK,null,null))}remove(e){return new Q(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,U.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new On(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new On(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new On(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new On(this.root_,null,this.comparator_,!0,e)}}Q.EMPTY_NODE=new _g;/**
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
 */function mg(t,e){return st(t.name,e.name)}function mr(t,e){return st(t,e)}/**
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
 */let As;function yg(t){As=t}const sc=function(t){return typeof t=="number"?"number:"+Ml(t):"string:"+t},rc=function(t){if(t.isLeafNode()){const e=t.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&fe(e,".sv"),"Priority must be a string or number.")}else f(t===As||t.isEmpty(),"priority of unexpected type.");f(t===As||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let aa;class F{constructor(e,n=F.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),rc(this.priorityNode_)}static set __childrenNodeConstructor(e){aa=e}static get __childrenNodeConstructor(){return aa}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new F(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:F.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return I(e)?this:w(e)===".priority"?this.priorityNode_:F.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:F.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=w(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(f(i!==".priority"||Le(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,F.__childrenNodeConstructor.EMPTY_NODE.updateChild(k(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+sc(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ml(this.value_):e+=this.value_,this.lazyHash_=Ol(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===F.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof F.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=F.VALUE_TYPE_ORDER.indexOf(n),r=F.VALUE_TYPE_ORDER.indexOf(i);return f(s>=0,"Unknown leaf type: "+n),f(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}F.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let oc,ac;function vg(t){oc=t}function Eg(t){ac=t}class Ig extends Ci{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?st(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return E.MIN}maxPost(){return new E(tt,new F("[PRIORITY-POST]",ac))}makePost(e,n){const i=oc(e);return new E(n,new F("[PRIORITY-POST]",i))}toString(){return".priority"}}const D=new Ig;/**
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
 */const wg=Math.log(2);class Tg{constructor(e){const n=r=>parseInt(Math.log(r)/wg,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Jn=function(t,e,n,i){t.sort(e);const s=function(l,c){const h=c-l;let u,d;if(h===0)return null;if(h===1)return u=t[l],d=n?n(u):u,new U(d,u.node,U.BLACK,null,null);{const p=parseInt(h/2,10)+l,g=s(l,p),T=s(p+1,c);return u=t[p],d=n?n(u):u,new U(d,u.node,U.BLACK,g,T)}},r=function(l){let c=null,h=null,u=t.length;const d=function(g,T){const x=u-g,pe=u;u-=g;const He=s(x+1,pe),je=t[x],Nn=n?n(je):je;p(new U(Nn,je.node,T,null,He))},p=function(g){c?(c.left=g,c=g):(h=g,c=g)};for(let g=0;g<l.count;++g){const T=l.nextBitIsOne(),x=Math.pow(2,l.count-(g+1));T?d(x,U.BLACK):(d(x,U.BLACK),d(x,U.RED))}return h},o=new Tg(t.length),a=r(o);return new Q(i||e,a)};/**
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
 */let rs;const ot={};class me{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return f(ot&&D,"ChildrenNode.ts has not been loaded"),rs=rs||new me({".priority":ot},{".priority":D}),rs}get(e){const n=gt(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Q?n:null}hasIndex(e){return fe(this.indexSet_,e.toString())}addIndex(e,n){f(e!==ft,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(E.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Jn(i,e.getCompare()):a=ot;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new me(h,c)}addToIndexes(e,n){const i=$n(this.indexes_,(s,r)=>{const o=gt(this.indexSet_,r);if(f(o,"Missing index implementation for "+r),s===ot)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(E.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Jn(a,o.getCompare())}else return ot;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new E(e.name,a))),l.insert(e,e.node)}});return new me(i,this.indexSet_)}removeFromIndexes(e,n){const i=$n(this.indexes_,s=>{if(s===ot)return s;{const r=n.get(e.name);return r?s.remove(new E(e.name,r)):s}});return new me(i,this.indexSet_)}}/**
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
 */let xt;class m{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&rc(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return xt||(xt=new m(new Q(mr),null,me.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||xt}updatePriority(e){return this.children_.isEmpty()?this:new m(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?xt:n}}getChild(e){const n=w(e);return n===null?this:this.getImmediateChild(n).getChild(k(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(f(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new E(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?xt:this.priorityNode_;return new m(s,o,r)}}updateChild(e,n){const i=w(e);if(i===null)return n;{f(w(e)!==".priority"||Le(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(k(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(D,(o,a)=>{n[o]=a.val(e),i++,r&&m.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+sc(this.getPriority().val())+":"),this.forEachChild(D,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Ol(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new E(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new E(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new E(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,E.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,E.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mn?-1:0}withIndex(e){if(e===ft||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new m(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ft||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(D),s=n.getIterator(D);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ft?null:this.indexMap_.get(e.toString())}}m.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Cg extends m{constructor(){super(new Q(mr),m.EMPTY_NODE,me.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return m.EMPTY_NODE}isEmpty(){return!1}}const mn=new Cg;Object.defineProperties(E,{MIN:{value:new E(mt,m.EMPTY_NODE)},MAX:{value:new E(tt,mn)}});ic.__EMPTY_NODE=m.EMPTY_NODE;F.__childrenNodeConstructor=m;yg(mn);Eg(mn);/**
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
 */const Sg=!0;function M(t,e=null){if(t===null)return m.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new F(n,M(e))}if(!(t instanceof Array)&&Sg){const n=[];let i=!1;if(j(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=M(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new E(o,l)))}}),n.length===0)return m.EMPTY_NODE;const r=Jn(n,mg,o=>o.name,mr);if(i){const o=Jn(n,D.getCompare());return new m(r,M(e),new me({".priority":o},{".priority":D}))}else return new m(r,M(e),me.Default)}else{let n=m.EMPTY_NODE;return j(t,(i,s)=>{if(fe(t,i)&&i.substring(0,1)!=="."){const r=M(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(M(e))}}vg(M);/**
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
 */class bg extends Ci{constructor(e){super(),this.indexPath_=e,f(!I(e)&&w(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?st(e.name,n.name):r}makePost(e,n){const i=M(e),s=m.EMPTY_NODE.updateChild(this.indexPath_,i);return new E(n,s)}maxPost(){const e=m.EMPTY_NODE.updateChild(this.indexPath_,mn);return new E(tt,e)}toString(){return Xt(this.indexPath_,0).join("/")}}/**
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
 */class Rg extends Ci{compare(e,n){const i=e.node.compareTo(n.node);return i===0?st(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return E.MIN}maxPost(){return E.MAX}makePost(e,n){const i=M(e);return new E(n,i)}toString(){return".value"}}const Ag=new Rg;/**
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
 */function lc(t){return{type:"value",snapshotNode:t}}function yt(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Qt(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Jt(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function kg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class yr{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){f(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(Qt(n,a)):f(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(yt(n,i)):o.trackChildChange(Jt(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(D,(s,r)=>{n.hasChild(s)||i.trackChildChange(Qt(s,r))}),n.isLeafNode()||n.forEachChild(D,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Jt(s,r,o))}else i.trackChildChange(yt(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?m.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Zt{constructor(e){this.indexedFilter_=new yr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Zt.getStartPost_(e),this.endPost_=Zt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new E(n,i))||(i=m.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=m.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(m.EMPTY_NODE);const r=this;return n.forEachChild(D,(o,a)=>{r.matches(new E(o,a))||(s=s.updateImmediateChild(o,m.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Ng{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Zt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new E(n,i))||(i=m.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=m.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=m.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(m.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,m.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,p)=>u(p,d)}else o=this.index_.getCompare();const a=e;f(a.numChildren()===this.limit_,"");const l=new E(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(h&&!i.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Jt(n,i,u)),a.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(Qt(n,u));const T=a.updateImmediateChild(n,m.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(yt(d.name,d.node)),T.updateImmediateChild(d.name,d.node)):T}}else return i.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Qt(c.name,c.node)),r.trackChildChange(yt(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,m.EMPTY_NODE)):e}}/**
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
 */class vr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=D}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:mt}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:tt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===D}copy(){const e=new vr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Pg(t){return t.loadsAllData()?new yr(t.getIndex()):t.hasLimit()?new Ng(t):new Zt(t)}function la(t){const e={};if(t.isDefault())return e;let n;if(t.index_===D?n="$priority":t.index_===Ag?n="$value":t.index_===ft?n="$key":(f(t.index_ instanceof bg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=L(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=L(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+L(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=L(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+L(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ca(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==D&&(e.i=t.index_.toString()),e}/**
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
 */class Zn extends Jl{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=_n("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Zn.getListenId_(e,i),a={};this.listens_[o]=a;const l=la(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,i),gt(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const i=Zn.getListenId_(e,n);delete this.listens_[i]}get(e){const n=la(e._queryParams),i=e._path.toString(),s=new hn;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ct(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Gt(a.responseText)}catch{X("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&X("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Dg{constructor(){this.rootNode_=m.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ei(){return{value:null,children:new Map}}function cc(t,e,n){if(I(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=w(e);t.children.has(i)||t.children.set(i,ei());const s=t.children.get(i);e=k(e),cc(s,e,n)}}function ks(t,e,n){t.value!==null?n(e,t.value):Og(t,(i,s)=>{const r=new R(e.toString()+"/"+i);ks(s,r,n)})}function Og(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class xg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&j(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
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
 */const ha=10*1e3,Mg=30*1e3,Lg=5*60*1e3;class Fg{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new xg(e);const i=ha+(Mg-ha)*Math.random();Wt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;j(e,(s,r)=>{r>0&&fe(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Wt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Lg))}}/**
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
 */var oe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(oe||(oe={}));function Er(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ir(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wr(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class ti{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=oe.ACK_USER_WRITE,this.source=Er()}operationForChild(e){if(I(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new R(e));return new ti(S(),n,this.revert)}}else return f(w(this.path)===e,"operationForChild called for unrelated child."),new ti(k(this.path),this.affectedTree,this.revert)}}/**
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
 */class en{constructor(e,n){this.source=e,this.path=n,this.type=oe.LISTEN_COMPLETE}operationForChild(e){return I(this.path)?new en(this.source,S()):new en(this.source,k(this.path))}}/**
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
 */class nt{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=oe.OVERWRITE}operationForChild(e){return I(this.path)?new nt(this.source,S(),this.snap.getImmediateChild(e)):new nt(this.source,k(this.path),this.snap)}}/**
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
 */class vt{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=oe.MERGE}operationForChild(e){if(I(this.path)){const n=this.children.subtree(new R(e));return n.isEmpty()?null:n.value?new nt(this.source,S(),n.value):new vt(this.source,S(),n)}else return f(w(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vt(this.source,k(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Fe{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(I(e))return this.isFullyInitialized()&&!this.filtered_;const n=w(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Ug{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Bg(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(kg(o.childName,o.snapshotNode))}),Mt(t,s,"child_removed",e,i,n),Mt(t,s,"child_added",e,i,n),Mt(t,s,"child_moved",r,i,n),Mt(t,s,"child_changed",e,i,n),Mt(t,s,"value",e,i,n),s}function Mt(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>Hg(t,a,l)),o.forEach(a=>{const l=Wg(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Wg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Hg(t,e,n){if(e.childName==null||n.childName==null)throw Tt("Should only compare child_ events.");const i=new E(e.childName,e.snapshotNode),s=new E(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
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
 */function Si(t,e){return{eventCache:t,serverCache:e}}function Ht(t,e,n,i){return Si(new Fe(e,n,i),t.serverCache)}function hc(t,e,n,i){return Si(t.eventCache,new Fe(e,n,i))}function ni(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function it(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let os;const jg=()=>(os||(os=new Q(bp)),os);class A{constructor(e,n=jg()){this.value=e,this.children=n}static fromObject(e){let n=new A(null);return j(e,(i,s)=>{n=n.set(new R(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:S(),value:this.value};if(I(e))return null;{const i=w(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(k(e),n);return r!=null?{path:P(new R(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(I(e))return this;{const n=w(e),i=this.children.get(n);return i!==null?i.subtree(k(e)):new A(null)}}set(e,n){if(I(e))return new A(n,this.children);{const i=w(e),r=(this.children.get(i)||new A(null)).set(k(e),n),o=this.children.insert(i,r);return new A(this.value,o)}}remove(e){if(I(e))return this.children.isEmpty()?new A(null):new A(null,this.children);{const n=w(e),i=this.children.get(n);if(i){const s=i.remove(k(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new A(null):new A(this.value,r)}else return this}}get(e){if(I(e))return this.value;{const n=w(e),i=this.children.get(n);return i?i.get(k(e)):null}}setTree(e,n){if(I(e))return n;{const i=w(e),r=(this.children.get(i)||new A(null)).setTree(k(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new A(this.value,o)}}fold(e){return this.fold_(S(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(P(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,S(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(I(e))return null;{const r=w(e),o=this.children.get(r);return o?o.findOnPath_(k(e),P(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,S(),n)}foreachOnPath_(e,n,i){if(I(e))return this;{this.value&&i(n,this.value);const s=w(e),r=this.children.get(s);return r?r.foreachOnPath_(k(e),P(n,s),i):new A(null)}}foreach(e){this.foreach_(S(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(P(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class ae{constructor(e){this.writeTree_=e}static empty(){return new ae(new A(null))}}function jt(t,e,n){if(I(e))return new ae(new A(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=K(s,e);return r=r.updateChild(o,n),new ae(t.writeTree_.set(s,r))}else{const s=new A(n),r=t.writeTree_.setTree(e,s);return new ae(r)}}}function Ns(t,e,n){let i=t;return j(n,(s,r)=>{i=jt(i,P(e,s),r)}),i}function ua(t,e){if(I(e))return ae.empty();{const n=t.writeTree_.setTree(e,new A(null));return new ae(n)}}function Ps(t,e){return rt(t,e)!=null}function rt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(K(n.path,e)):null}function da(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(D,(i,s)=>{e.push(new E(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new E(i,s.value))}),e}function Oe(t,e){if(I(e))return t;{const n=rt(t,e);return n!=null?new ae(new A(n)):new ae(t.writeTree_.subtree(e))}}function Ds(t){return t.writeTree_.isEmpty()}function Et(t,e){return uc(S(),t.writeTree_,e)}function uc(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(f(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=uc(P(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(P(t,".priority"),i)),n}}/**
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
 */function bi(t,e){return gc(e,t)}function $g(t,e,n,i,s){f(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=jt(t.visibleWrites,e,n)),t.lastWriteId=i}function Vg(t,e,n,i){f(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=Ns(t.visibleWrites,e,n),t.lastWriteId=i}function Gg(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function zg(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);f(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&qg(a,i.path)?s=!1:te(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Kg(t),!0;if(i.snap)t.visibleWrites=ua(t.visibleWrites,i.path);else{const a=i.children;j(a,l=>{t.visibleWrites=ua(t.visibleWrites,P(i.path,l))})}return!0}else return!1}function qg(t,e){if(t.snap)return te(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&te(P(t.path,n),e))return!0;return!1}function Kg(t){t.visibleWrites=dc(t.allWrites,Yg,S()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Yg(t){return t.visible}function dc(t,e,n){let i=ae.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)te(n,o)?(a=K(n,o),i=jt(i,a,r.snap)):te(o,n)&&(a=K(o,n),i=jt(i,S(),r.snap.getChild(a)));else if(r.children){if(te(n,o))a=K(n,o),i=Ns(i,a,r.children);else if(te(o,n))if(a=K(o,n),I(a))i=Ns(i,S(),r.children);else{const l=gt(r.children,w(a));if(l){const c=l.getChild(k(a));i=jt(i,S(),c)}}}else throw Tt("WriteRecord should have .snap or .children")}}return i}function fc(t,e,n,i,s){if(!i&&!s){const r=rt(t.visibleWrites,e);if(r!=null)return r;{const o=Oe(t.visibleWrites,e);if(Ds(o))return n;if(n==null&&!Ps(o,S()))return null;{const a=n||m.EMPTY_NODE;return Et(o,a)}}}else{const r=Oe(t.visibleWrites,e);if(!s&&Ds(r))return n;if(!s&&n==null&&!Ps(r,S()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(te(c.path,e)||te(e,c.path))},a=dc(t.allWrites,o,e),l=n||m.EMPTY_NODE;return Et(a,l)}}}function Xg(t,e,n){let i=m.EMPTY_NODE;const s=rt(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(D,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Oe(t.visibleWrites,e);return n.forEachChild(D,(o,a)=>{const l=Et(Oe(r,new R(o)),a);i=i.updateImmediateChild(o,l)}),da(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Oe(t.visibleWrites,e);return da(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Qg(t,e,n,i,s){f(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=P(e,n);if(Ps(t.visibleWrites,r))return null;{const o=Oe(t.visibleWrites,r);return Ds(o)?s.getChild(n):Et(o,s.getChild(n))}}function Jg(t,e,n,i){const s=P(e,n),r=rt(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Oe(t.visibleWrites,s);return Et(o,i.getNode().getImmediateChild(n))}else return null}function Zg(t,e){return rt(t.visibleWrites,e)}function e_(t,e,n,i,s,r,o){let a;const l=Oe(t.visibleWrites,e),c=rt(l,S());if(c!=null)a=c;else if(n!=null)a=Et(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=d.getNext();for(;p&&h.length<s;)u(p,i)!==0&&h.push(p),p=d.getNext();return h}else return[]}function t_(){return{visibleWrites:ae.empty(),allWrites:[],lastWriteId:-1}}function ii(t,e,n,i){return fc(t.writeTree,t.treePath,e,n,i)}function Tr(t,e){return Xg(t.writeTree,t.treePath,e)}function fa(t,e,n,i){return Qg(t.writeTree,t.treePath,e,n,i)}function si(t,e){return Zg(t.writeTree,P(t.treePath,e))}function n_(t,e,n,i,s,r){return e_(t.writeTree,t.treePath,e,n,i,s,r)}function Cr(t,e,n){return Jg(t.writeTree,t.treePath,e,n)}function pc(t,e){return gc(P(t.treePath,e),t.writeTree)}function gc(t,e){return{treePath:t,writeTree:e}}/**
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
 */class i_{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;f(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),f(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Jt(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,Qt(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,yt(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Jt(i,e.snapshotNode,s.oldSnap));else throw Tt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class s_{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const _c=new s_;class Sr{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Fe(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Cr(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:it(this.viewCache_),r=n_(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function r_(t){return{filter:t}}function o_(t,e){f(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function a_(t,e,n,i,s){const r=new i_;let o,a;if(n.type===oe.OVERWRITE){const c=n;c.source.fromUser?o=Os(t,e,c.path,c.snap,i,s,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!I(c.path),o=ri(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===oe.MERGE){const c=n;c.source.fromUser?o=c_(t,e,c.path,c.children,i,s,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=xs(t,e,c.path,c.children,i,s,a,r))}else if(n.type===oe.ACK_USER_WRITE){const c=n;c.revert?o=d_(t,e,c.path,i,s,r):o=h_(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===oe.LISTEN_COMPLETE)o=u_(t,e,n.path,i,r);else throw Tt("Unknown operation type: "+n.type);const l=r.getChanges();return l_(e,o,l),{viewCache:o,changes:l}}function l_(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=ni(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(lc(ni(e)))}}function mc(t,e,n,i,s,r){const o=e.eventCache;if(si(i,n)!=null)return e;{let a,l;if(I(n))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=it(e),h=c instanceof m?c:m.EMPTY_NODE,u=Tr(i,h);a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=ii(i,it(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=w(n);if(c===".priority"){f(Le(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=fa(i,n,h,l);u!=null?a=t.filter.updatePriority(h,u):a=o.getNode()}else{const h=k(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=fa(i,n,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=Cr(i,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,h,s,r):a=o.getNode()}}return Ht(e,a,o.isFullyInitialized()||I(n),t.filter.filtersNodes())}}function ri(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(I(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),p,null)}else{const p=w(n);if(!l.isCompleteForPath(n)&&Le(n)>1)return e;const g=k(n),x=l.getNode().getImmediateChild(p).updateChild(g,i);p===".priority"?c=h.updatePriority(l.getNode(),x):c=h.updateChild(l.getNode(),p,x,g,_c,null)}const u=hc(e,c,l.isFullyInitialized()||I(n),h.filtersNodes()),d=new Sr(s,u,r);return mc(t,u,n,s,d,a)}function Os(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const h=new Sr(s,e,r);if(I(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Ht(e,c,!0,t.filter.filtersNodes());else{const u=w(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Ht(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=k(n),p=a.getNode().getImmediateChild(u);let g;if(I(d))g=i;else{const T=h.getCompleteChild(u);T!=null?gr(d)===".priority"&&T.getChild(ec(d)).isEmpty()?g=T:g=T.updateChild(d,i):g=m.EMPTY_NODE}if(p.equals(g))l=e;else{const T=t.filter.updateChild(a.getNode(),u,g,d,h,o);l=Ht(e,T,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function pa(t,e){return t.eventCache.isCompleteForChild(e)}function c_(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const h=P(n,l);pa(e,w(h))&&(a=Os(t,a,h,c,s,r,o))}),i.foreach((l,c)=>{const h=P(n,l);pa(e,w(h))||(a=Os(t,a,h,c,s,r,o))}),a}function ga(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function xs(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;I(n)?c=i:c=new A(null).setTree(n,i);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),g=ga(t,p,d);l=ri(t,l,new R(u),g,s,r,o,a)}}),c.children.inorderTraversal((u,d)=>{const p=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!p){const g=e.serverCache.getNode().getImmediateChild(u),T=ga(t,g,d);l=ri(t,l,new R(u),T,s,r,o,a)}}),l}function h_(t,e,n,i,s,r,o){if(si(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(I(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ri(t,e,n,l.getNode().getChild(n),s,r,a,o);if(I(n)){let c=new A(null);return l.getNode().forEachChild(ft,(h,u)=>{c=c.set(new R(h),u)}),xs(t,e,n,c,s,r,a,o)}else return e}else{let c=new A(null);return i.foreach((h,u)=>{const d=P(n,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),xs(t,e,n,c,s,r,a,o)}}function u_(t,e,n,i,s){const r=e.serverCache,o=hc(e,r.getNode(),r.isFullyInitialized()||I(n),r.isFiltered());return mc(t,o,n,i,_c,s)}function d_(t,e,n,i,s,r){let o;if(si(i,n)!=null)return e;{const a=new Sr(i,e,s),l=e.eventCache.getNode();let c;if(I(n)||w(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=ii(i,it(e));else{const u=e.serverCache.getNode();f(u instanceof m,"serverChildren would be complete if leaf node"),h=Tr(i,u)}h=h,c=t.filter.updateFullNode(l,h,r)}else{const h=w(n);let u=Cr(i,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=t.filter.updateChild(l,h,u,k(n),a,r):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(l,h,m.EMPTY_NODE,k(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ii(i,it(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||si(i,S())!=null,Ht(e,c,o,t.filter.filtersNodes())}}/**
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
 */class f_{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new yr(i.getIndex()),r=Pg(i);this.processor_=r_(r);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(m.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(m.EMPTY_NODE,a.getNode(),null),h=new Fe(l,o.isFullyInitialized(),s.filtersNodes()),u=new Fe(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Si(u,h),this.eventGenerator_=new Ug(this.query_)}get query(){return this.query_}}function p_(t){return t.viewCache_.serverCache.getNode()}function g_(t){return ni(t.viewCache_)}function __(t,e){const n=it(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!I(e)&&!n.getImmediateChild(w(e)).isEmpty())?n.getChild(e):null}function _a(t){return t.eventRegistrations_.length===0}function m_(t,e){t.eventRegistrations_.push(e)}function ma(t,e,n){const i=[];if(n){f(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function ya(t,e,n,i){e.type===oe.MERGE&&e.source.queryId!==null&&(f(it(t.viewCache_),"We should always have a full cache before handling merges"),f(ni(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=a_(t.processor_,s,e,n,i);return o_(t.processor_,r.viewCache),f(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,yc(t,r.changes,r.viewCache.eventCache.getNode(),null)}function y_(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(D,(r,o)=>{i.push(yt(r,o))}),n.isFullyInitialized()&&i.push(lc(n.getNode())),yc(t,i,n.getNode(),e)}function yc(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return Bg(t.eventGenerator_,e,n,s)}/**
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
 */let oi;class vc{constructor(){this.views=new Map}}function v_(t){f(!oi,"__referenceConstructor has already been defined"),oi=t}function E_(){return f(oi,"Reference.ts has not been loaded"),oi}function I_(t){return t.views.size===0}function br(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return f(r!=null,"SyncTree gave us an op for an invalid query."),ya(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(ya(o,e,n,i));return r}}function Ec(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=ii(n,s?i:null),l=!1;a?l=!0:i instanceof m?(a=Tr(n,i),l=!1):(a=m.EMPTY_NODE,l=!1);const c=Si(new Fe(a,l,!1),new Fe(i,s,!1));return new f_(e,c)}return o}function w_(t,e,n,i,s,r){const o=Ec(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),m_(o,n),y_(o,n)}function T_(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const a=Ue(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(ma(c,n,i)),_a(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(ma(l,n,i)),_a(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Ue(t)&&r.push(new(E_())(e._repo,e._path)),{removed:r,events:o}}function Ic(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function xe(t,e){let n=null;for(const i of t.views.values())n=n||__(i,e);return n}function wc(t,e){if(e._queryParams.loadsAllData())return Ri(t);{const i=e._queryIdentifier;return t.views.get(i)}}function Tc(t,e){return wc(t,e)!=null}function Ue(t){return Ri(t)!=null}function Ri(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ai;function C_(t){f(!ai,"__referenceConstructor has already been defined"),ai=t}function S_(){return f(ai,"Reference.ts has not been loaded"),ai}let b_=1;class va{constructor(e){this.listenProvider_=e,this.syncPointTree_=new A(null),this.pendingWriteTree_=t_(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Cc(t,e,n,i,s){return $g(t.pendingWriteTree_,e,n,i,s),s?Rt(t,new nt(Er(),e,n)):[]}function R_(t,e,n,i){Vg(t.pendingWriteTree_,e,n,i);const s=A.fromObject(n);return Rt(t,new vt(Er(),e,s))}function Ne(t,e,n=!1){const i=Gg(t.pendingWriteTree_,e);if(zg(t.pendingWriteTree_,e)){let r=new A(null);return i.snap!=null?r=r.set(S(),!0):j(i.children,o=>{r=r.set(new R(o),!0)}),Rt(t,new ti(i.path,r,n))}else return[]}function yn(t,e,n){return Rt(t,new nt(Ir(),e,n))}function A_(t,e,n){const i=A.fromObject(n);return Rt(t,new vt(Ir(),e,i))}function k_(t,e){return Rt(t,new en(Ir(),e))}function N_(t,e,n){const i=Ar(t,n);if(i){const s=kr(i),r=s.path,o=s.queryId,a=K(r,e),l=new en(wr(o),a);return Nr(t,r,l)}else return[]}function Sc(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Tc(o,e))){const l=T_(o,e,n,i);I_(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(d,p)=>Ue(p));if(h&&!u){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const p=x_(d);for(let g=0;g<p.length;++g){const T=p[g],x=T.query,pe=kc(t,T);t.listenProvider_.startListening($t(x),tn(t,x),pe.hashFn,pe.onComplete)}}}!u&&c.length>0&&!i&&(h?t.listenProvider_.stopListening($t(e),null):c.forEach(d=>{const p=t.queryToTagMap.get(Ai(d));t.listenProvider_.stopListening($t(d),p)}))}M_(t,c)}return a}function bc(t,e,n,i){const s=Ar(t,i);if(s!=null){const r=kr(s),o=r.path,a=r.queryId,l=K(o,e),c=new nt(wr(a),l,n);return Nr(t,o,c)}else return[]}function P_(t,e,n,i){const s=Ar(t,i);if(s){const r=kr(s),o=r.path,a=r.queryId,l=K(o,e),c=A.fromObject(n),h=new vt(wr(a),l,c);return Nr(t,o,h)}else return[]}function D_(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(d,p)=>{const g=K(d,s);r=r||xe(p,g),o=o||Ue(p)});let a=t.syncPointTree_.get(s);a?(o=o||Ue(a),r=r||xe(a,S())):(a=new vc,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=m.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((p,g)=>{const T=xe(g,S());T&&(r=r.updateImmediateChild(p,T))}));const c=Tc(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Ai(e);f(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=L_();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const h=bi(t.pendingWriteTree_,s);let u=w_(a,e,n,h,r,l);if(!c&&!o&&!i){const d=wc(a,e);u=u.concat(F_(t,e,d))}return u}function Rr(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=K(o,e),c=xe(a,l);if(c)return c});return fc(s,e,r,n,!0)}function O_(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const u=K(c,n);i=i||xe(h,u)});let s=t.syncPointTree_.get(n);s?i=i||xe(s,S()):(s=new vc,t.syncPointTree_=t.syncPointTree_.set(n,s));const r=i!=null,o=r?new Fe(i,!0,!1):null,a=bi(t.pendingWriteTree_,e._path),l=Ec(s,e,a,r?o.getNode():m.EMPTY_NODE,r);return g_(l)}function Rt(t,e){return Rc(e,t.syncPointTree_,null,bi(t.pendingWriteTree_,S()))}function Rc(t,e,n,i){if(I(t.path))return Ac(t,e,n,i);{const s=e.get(S());n==null&&s!=null&&(n=xe(s,S()));let r=[];const o=w(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,h=pc(i,o);r=r.concat(Rc(a,l,c,h))}return s&&(r=r.concat(br(s,t,i,n))),r}}function Ac(t,e,n,i){const s=e.get(S());n==null&&s!=null&&(n=xe(s,S()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=pc(i,o),h=t.operationForChild(o);h&&(r=r.concat(Ac(h,a,l,c)))}),s&&(r=r.concat(br(s,t,i,n))),r}function kc(t,e){const n=e.query,i=tn(t,n);return{hashFn:()=>(p_(e)||m.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?N_(t,n._path,i):k_(t,n._path);{const r=kp(s,n);return Sc(t,n,null,r)}}}}function tn(t,e){const n=Ai(e);return t.queryToTagMap.get(n)}function Ai(t){return t._path.toString()+"$"+t._queryIdentifier}function Ar(t,e){return t.tagToQueryMap.get(e)}function kr(t){const e=t.indexOf("$");return f(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new R(t.substr(0,e))}}function Nr(t,e,n){const i=t.syncPointTree_.get(e);f(i,"Missing sync point for query tag that we're tracking");const s=bi(t.pendingWriteTree_,e);return br(i,n,s,null)}function x_(t){return t.fold((e,n,i)=>{if(n&&Ue(n))return[Ri(n)];{let s=[];return n&&(s=Ic(n)),j(i,(r,o)=>{s=s.concat(o)}),s}})}function $t(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(S_())(t._repo,t._path):t}function M_(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=Ai(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function L_(){return b_++}function F_(t,e,n){const i=e._path,s=tn(t,e),r=kc(t,n),o=t.listenProvider_.startListening($t(e),s,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(i);if(s)f(!Ue(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,u)=>{if(!I(c)&&h&&Ue(h))return[Ri(h).query];{let d=[];return h&&(d=d.concat(Ic(h).map(p=>p.query))),j(u,(p,g)=>{d=d.concat(g)}),d}});for(let c=0;c<l.length;++c){const h=l[c];t.listenProvider_.stopListening($t(h),tn(t,h))}}return o}/**
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
 */class Pr{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Pr(n)}node(){return this.node_}}class Dr{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=P(this.path_,e);return new Dr(this.syncTree_,n)}node(){return Rr(this.syncTree_,this.path_)}}const U_=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ea=function(t,e,n){if(!t||typeof t!="object")return t;if(f(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return B_(t[".sv"],e,n);if(typeof t[".sv"]=="object")return W_(t[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},B_=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:f(!1,"Unexpected server value: "+t)}},W_=function(t,e,n){t.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&f(!1,"Unexpected increment value: "+i);const s=e.node();if(f(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Nc=function(t,e,n,i){return Or(e,new Dr(n,t),i)},Pc=function(t,e,n){return Or(t,new Pr(e),n)};function Or(t,e,n){const i=t.getPriority().val(),s=Ea(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Ea(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new F(a,M(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new F(s))),o.forEachChild(D,(a,l)=>{const c=Or(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class xr{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Mr(t,e){let n=e instanceof R?e:new R(e),i=t,s=w(n);for(;s!==null;){const r=gt(i.node.children,s)||{children:{},childCount:0};i=new xr(s,i,r),n=k(n),s=w(n)}return i}function At(t){return t.node.value}function Dc(t,e){t.node.value=e,Ms(t)}function Oc(t){return t.node.childCount>0}function H_(t){return At(t)===void 0&&!Oc(t)}function ki(t,e){j(t.node.children,(n,i)=>{e(new xr(n,t,i))})}function xc(t,e,n,i){n&&!i&&e(t),ki(t,s=>{xc(s,e,!0,i)}),n&&i&&e(t)}function j_(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function vn(t){return new R(t.parent===null?t.name:vn(t.parent)+"/"+t.name)}function Ms(t){t.parent!==null&&$_(t.parent,t.name,t)}function $_(t,e,n){const i=H_(n),s=fe(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Ms(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Ms(t))}/**
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
 */const V_=/[\[\].#$\/\u0000-\u001F\u007F]/,G_=/[\[\].#$\u0000-\u001F\u007F]/,as=10*1024*1024,Lr=function(t){return typeof t=="string"&&t.length!==0&&!V_.test(t)},Mc=function(t){return typeof t=="string"&&t.length!==0&&!G_.test(t)},z_=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Mc(t)},q_=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!hr(t)||t&&typeof t=="object"&&fe(t,".sv")},K_=function(t,e,n,i){i&&e===void 0||Ni(gi(t,"value"),e,n)},Ni=function(t,e,n){const i=n instanceof R?new cg(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ve(i));if(typeof e=="function")throw new Error(t+"contains a function "+Ve(i)+" with contents = "+e.toString());if(hr(e))throw new Error(t+"contains "+e.toString()+" "+Ve(i));if(typeof e=="string"&&e.length>as/3&&_i(e)>as)throw new Error(t+"contains a string greater than "+as+" utf8 bytes "+Ve(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(j(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Lr(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ve(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);hg(i,o),Ni(t,a,i),ug(i)}),s&&r)throw new Error(t+' contains ".value" child '+Ve(i)+" in addition to actual children.")}},Y_=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const r=Xt(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Lr(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(lg);let s=null;for(n=0;n<e.length;n++){if(i=e[n],s!==null&&te(s,i))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},X_=function(t,e,n,i){if(i&&e===void 0)return;const s=gi(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];j(e,(o,a)=>{const l=new R(o);if(Ni(s,a,P(n,l)),gr(l)===".priority"&&!q_(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),Y_(s,r)},Lc=function(t,e,n,i){if(!(i&&n===void 0)&&!Mc(n))throw new Error(gi(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Q_=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Lc(t,e,n,i)},Fc=function(t,e){if(w(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},J_=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Lr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!z_(n))throw new Error(gi(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Z_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Fr(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!tc(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function ne(t,e,n){Fr(t,n),em(t,i=>te(i,e)||te(e,i))}function em(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(tm(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function tm(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Xe&&W("event: "+n.toString()),bt(i)}}}/**
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
 */const nm="repo_interrupt",im=25;class sm{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Z_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ei(),this.transactionQueueTree_=new xr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rm(t,e,n){if(t.stats_=fr(t.repoInfo_),t.forceRestClient_||Op())t.server_=new Zn(t.repoInfo_,(i,s,r,o)=>{Ia(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>wa(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{L(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new ve(t.repoInfo_,e,(i,s,r,o)=>{Ia(t,i,s,r,o)},i=>{wa(t,i)},i=>{am(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Up(t.repoInfo_,()=>new Fg(t.stats_,t.server_)),t.infoData_=new Dg,t.infoSyncTree_=new va({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=yn(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ur(t,"connected",!1),t.serverSyncTree_=new va({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);ne(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function om(t){const n=t.infoData_.getNode(new R(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Pi(t){return U_({timestamp:om(t)})}function Ia(t,e,n,i,s){t.dataUpdateCount++;const r=new R(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=$n(n,c=>M(c));o=P_(t.serverSyncTree_,r,l,s)}else{const l=M(n);o=bc(t.serverSyncTree_,r,l,s)}else if(i){const l=$n(n,c=>M(c));o=A_(t.serverSyncTree_,r,l)}else{const l=M(n);o=yn(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=It(t,r)),ne(t.eventQueue_,a,o)}function wa(t,e){Ur(t,"connected",e),e===!1&&um(t)}function am(t,e){j(e,(n,i)=>{Ur(t,n,i)})}function Ur(t,e,n){const i=new R("/.info/"+e),s=M(n);t.infoData_.updateSnapshot(i,s);const r=yn(t.infoSyncTree_,i,s);ne(t.eventQueue_,i,r)}function Br(t){return t.nextWriteId_++}function lm(t,e,n){const i=O_(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(s=>{const r=M(s).withIndex(e._queryParams.getIndex());D_(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=yn(t.serverSyncTree_,e._path,r);else{const a=tn(t.serverSyncTree_,e);o=bc(t.serverSyncTree_,e._path,r,a)}return ne(t.eventQueue_,e._path,o),Sc(t.serverSyncTree_,e,n,null,!0),r},s=>(En(t,"get for query "+L(e)+" failed: "+s),Promise.reject(new Error(s))))}function cm(t,e,n,i,s){En(t,"set",{path:e.toString(),value:n,priority:i});const r=Pi(t),o=M(n,i),a=Rr(t.serverSyncTree_,e),l=Pc(o,a,r),c=Br(t),h=Cc(t.serverSyncTree_,e,l,c,!0);Fr(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(d,p)=>{const g=d==="ok";g||X("set at "+e+" failed: "+d);const T=Ne(t.serverSyncTree_,c,!g);ne(t.eventQueue_,e,T),Ls(t,s,d,p)});const u=Hr(t,e);It(t,u),ne(t.eventQueue_,u,[])}function hm(t,e,n,i){En(t,"update",{path:e.toString(),value:n});let s=!0;const r=Pi(t),o={};if(j(n,(a,l)=>{s=!1,o[a]=Nc(P(e,a),M(l),t.serverSyncTree_,r)}),s)W("update() called with empty data.  Don't do anything."),Ls(t,i,"ok",void 0);else{const a=Br(t),l=R_(t.serverSyncTree_,e,o,a);Fr(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,h)=>{const u=c==="ok";u||X("update at "+e+" failed: "+c);const d=Ne(t.serverSyncTree_,a,!u),p=d.length>0?It(t,e):e;ne(t.eventQueue_,p,d),Ls(t,i,c,h)}),j(n,c=>{const h=Hr(t,P(e,c));It(t,h)}),ne(t.eventQueue_,e,[])}}function um(t){En(t,"onDisconnectEvents");const e=Pi(t),n=ei();ks(t.onDisconnect_,S(),(s,r)=>{const o=Nc(s,r,t.serverSyncTree_,e);cc(n,s,o)});let i=[];ks(n,S(),(s,r)=>{i=i.concat(yn(t.serverSyncTree_,s,r));const o=Hr(t,s);It(t,o)}),t.onDisconnect_=ei(),ne(t.eventQueue_,S(),i)}function dm(t){t.persistentConnection_&&t.persistentConnection_.interrupt(nm)}function En(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),W(n,...e)}function Ls(t,e,n,i){e&&bt(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Uc(t,e,n){return Rr(t.serverSyncTree_,e,n)||m.EMPTY_NODE}function Wr(t,e=t.transactionQueueTree_){if(e||Di(t,e),At(e)){const n=Wc(t,e);f(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&fm(t,vn(e),n)}else Oc(e)&&ki(e,n=>{Wr(t,n)})}function fm(t,e,n){const i=n.map(c=>c.currentWriteId),s=Uc(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const h=n[c];f(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=K(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{En(t,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(Ne(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&u.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Di(t,Mr(t.transactionQueueTree_,e)),Wr(t,t.transactionQueueTree_),ne(t.eventQueue_,e,h);for(let d=0;d<u.length;d++)bt(u[d])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{X("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}It(t,e)}},o)}function It(t,e){const n=Bc(t,e),i=vn(n),s=Wc(t,n);return pm(t,s,i),i}function pm(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=K(n,l.path);let h=!1,u;if(f(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,s=s.concat(Ne(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=im)h=!0,u="maxretry",s=s.concat(Ne(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Uc(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){Ni("transaction failed: Data returned ",p,l.path);let g=M(p);typeof p=="object"&&p!=null&&fe(p,".priority")||(g=g.updatePriority(d.getPriority()));const x=l.currentWriteId,pe=Pi(t),He=Pc(g,d,pe);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=He,l.currentWriteId=Br(t),o.splice(o.indexOf(x),1),s=s.concat(Cc(t.serverSyncTree_,l.path,He,l.currentWriteId,l.applyLocally)),s=s.concat(Ne(t.serverSyncTree_,x,!0))}else h=!0,u="nodata",s=s.concat(Ne(t.serverSyncTree_,l.currentWriteId,!0))}ne(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}Di(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)bt(i[a]);Wr(t,t.transactionQueueTree_)}function Bc(t,e){let n,i=t.transactionQueueTree_;for(n=w(e);n!==null&&At(i)===void 0;)i=Mr(i,n),e=k(e),n=w(e);return i}function Wc(t,e){const n=[];return Hc(t,e,n),n.sort((i,s)=>i.order-s.order),n}function Hc(t,e,n){const i=At(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);ki(e,s=>{Hc(t,s,n)})}function Di(t,e){const n=At(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,Dc(e,n.length>0?n:void 0)}ki(e,i=>{Di(t,i)})}function Hr(t,e){const n=vn(Bc(t,e)),i=Mr(t.transactionQueueTree_,e);return j_(i,s=>{ls(t,s)}),ls(t,i),xc(i,s=>{ls(t,s)}),n}function ls(t,e){const n=At(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(f(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(f(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Ne(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Dc(e,void 0):n.length=r+1,ne(t.eventQueue_,vn(e),s);for(let o=0;o<i.length;o++)bt(i[o])}}/**
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
 */function gm(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function _m(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):X(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ta=function(t,e){const n=mm(t),i=n.namespace;n.domain==="firebase.com"&&Ie(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Ie("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Cp();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Gl(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new R(n.pathString)}},mm=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(s=gm(t.substring(h,u)));const d=_m(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class ym{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+L(this.snapshot.exportVal())}}class vm{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Em{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return f(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class jr{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return I(this._path)?null:gr(this._path)}get ref(){return new Ce(this._repo,this._path)}get _queryIdentifier(){const e=ca(this._queryParams),n=ur(e);return n==="{}"?"default":n}get _queryObject(){return ca(this._queryParams)}isEqual(e){if(e=se(e),!(e instanceof jr))return!1;const n=this._repo===e._repo,i=tc(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+ag(this._path)}}class Ce extends jr{constructor(e,n){super(e,n,new vr,!1)}get parent(){const e=ec(this._path);return e===null?null:new Ce(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class nn{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new R(e),i=Fs(this.ref,e);return new nn(this._node.getChild(n),i,D)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new nn(s,Fs(this.ref,i),D)))}hasChild(e){const n=new R(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function nv(t,e){return t=se(t),t._checkNotDeleted("ref"),e!==void 0?Fs(t._root,e):t._root}function Fs(t,e){return t=se(t),w(t._path)===null?Q_("child","path",e,!1):Lc("child","path",e,!1),new Ce(t._repo,P(t._path,e))}function iv(t){return Fc("remove",t._path),Im(t,null)}function Im(t,e){t=se(t),Fc("set",t._path),K_("set",e,t._path,!1);const n=new hn;return cm(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function sv(t,e){X_("update",e,t._path,!1);const n=new hn;return hm(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function rv(t){t=se(t);const e=new Em(()=>{}),n=new $r(e);return lm(t._repo,t,n).then(i=>new nn(i,new Ce(t._repo,t._path),t._queryParams.getIndex()))}class $r{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new ym("value",this,new nn(e.snapshotNode,new Ce(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new vm(this,e,n):null}matches(e){return e instanceof $r?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}v_(Ce);C_(Ce);/**
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
 */const wm="FIREBASE_DATABASE_EMULATOR_HOST",Us={};let Tm=!1;function Cm(t,e,n,i){t.repoInfo_=new Gl(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}function Sm(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Ie("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),W("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ta(r,s),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[wm]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Ta(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const h=s&&l?new dt(dt.OWNER):new Mp(t.name,t.options,e);J_("Invalid Firebase Database URL",o),I(o.path)||Ie("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Rm(a,t,h,new xp(t.name,n));return new Am(u,t)}function bm(t,e){const n=Us[e];(!n||n[t.key]!==t)&&Ie(`Database ${e}(${t.repoInfo_}) has already been deleted.`),dm(t),delete n[t.key]}function Rm(t,e,n,i){let s=Us[e.name];s||(s={},Us[e.name]=s);let r=s[t.toURLString()];return r&&Ie("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new sm(t,Tm,n,i),s[t.toURLString()]=r,r}class Am{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(rm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ce(this._repo,S())),this._rootInternal}_delete(){return this._rootInternal!==null&&(bm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ie("Cannot call "+e+" on a deleted database.")}}function km(t=tr(),e){const n=yi(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=Va("database");i&&Nm(n,...i)}return n}function Nm(t,e,n,i={}){t=se(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ie("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Ie('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new dt(dt.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:za(i.mockUserToken,t.app.options.projectId);r=new dt(o)}Cm(s,e,n,r)}/**
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
 */function Pm(t){vp(St),Ze(new Me("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Sm(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),ce(zo,qo,t),ce(zo,qo,"esm2017")}ve.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ve.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Pm();var Dm=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},_,Vr=Vr||{},v=Dm||self;function li(){}function Oi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function In(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Om(t){return Object.prototype.hasOwnProperty.call(t,cs)&&t[cs]||(t[cs]=++xm)}var cs="closure_uid_"+(1e9*Math.random()>>>0),xm=0;function Mm(t,e,n){return t.call.apply(t.bind,arguments)}function Lm(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function G(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?G=Mm:G=Lm,G.apply(null,arguments)}function xn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function $(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Be(){this.s=this.s,this.o=this.o}var Fm=0;Be.prototype.s=!1;Be.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Fm!=0)&&Om(this)};Be.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const jc=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Gr(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Ca(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Oi(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function z(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}z.prototype.h=function(){this.defaultPrevented=!0};var Um=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{v.addEventListener("test",li,e),v.removeEventListener("test",li,e)}catch{}return t}();function ci(t){return/^[\s\xa0]*$/.test(t)}var Sa=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function hs(t,e){return t<e?-1:t>e?1:0}function xi(){var t=v.navigator;return t&&(t=t.userAgent)?t:""}function le(t){return xi().indexOf(t)!=-1}function zr(t){return zr[" "](t),t}zr[" "]=li;function Bm(t){var e=jm;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Wm=le("Opera"),sn=le("Trident")||le("MSIE"),$c=le("Edge"),Bs=$c||sn,Vc=le("Gecko")&&!(xi().toLowerCase().indexOf("webkit")!=-1&&!le("Edge"))&&!(le("Trident")||le("MSIE"))&&!le("Edge"),Hm=xi().toLowerCase().indexOf("webkit")!=-1&&!le("Edge");function Gc(){var t=v.document;return t?t.documentMode:void 0}var Ws;e:{var us="",ds=function(){var t=xi();if(Vc)return/rv:([^\);]+)(\)|;)/.exec(t);if($c)return/Edge\/([\d\.]+)/.exec(t);if(sn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Hm)return/WebKit\/(\S+)/.exec(t);if(Wm)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ds&&(us=ds?ds[1]:""),sn){var fs=Gc();if(fs!=null&&fs>parseFloat(us)){Ws=String(fs);break e}}Ws=us}var jm={};function $m(){return Bm(function(){let t=0;const e=Sa(String(Ws)).split("."),n=Sa("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=hs(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||hs(s[2].length==0,r[2].length==0)||hs(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}v.document&&sn&&Gc();function rn(t,e){if(z.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Vc){e:{try{zr(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Vm[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&rn.X.h.call(this)}}$(rn,z);var Vm={2:"touch",3:"pen",4:"mouse"};rn.prototype.h=function(){rn.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var wn="closure_listenable_"+(1e6*Math.random()|0),Gm=0;function zm(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++Gm,this.ba=this.ea=!1}function Mi(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function qr(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function zc(t){const e={};for(const n in t)e[n]=t[n];return e}const ba="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qc(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<ba.length;r++)n=ba[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Li(t){this.src=t,this.g={},this.h=0}Li.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=js(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new zm(e,this.src,r,!!i,s),e.ea=n,t.push(e)),e};function Hs(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=jc(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Mi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function js(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}var Kr="closure_lm_"+(1e6*Math.random()|0),ps={};function Kc(t,e,n,i,s){if(i&&i.once)return Xc(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Kc(t,e[r],n,i,s);return null}return n=Qr(n),t&&t[wn]?t.N(e,n,In(i)?!!i.capture:!!i,s):Yc(t,e,n,!1,i,s)}function Yc(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=In(s)?!!s.capture:!!s,a=Xr(t);if(a||(t[Kr]=a=new Li(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=qm(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Um||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Jc(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function qm(){function t(n){return e.call(t.src,t.listener,n)}const e=Km;return t}function Xc(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Xc(t,e[r],n,i,s);return null}return n=Qr(n),t&&t[wn]?t.O(e,n,In(i)?!!i.capture:!!i,s):Yc(t,e,n,!0,i,s)}function Qc(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Qc(t,e[r],n,i,s);else i=In(i)?!!i.capture:!!i,n=Qr(n),t&&t[wn]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=js(r,n,i,s),-1<n&&(Mi(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Xr(t))&&(e=t.g[e.toString()],t=-1,e&&(t=js(e,n,i,s)),(n=-1<t?e[t]:null)&&Yr(n))}function Yr(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[wn])Hs(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Jc(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Xr(e))?(Hs(n,t),n.h==0&&(n.src=null,e[Kr]=null)):Mi(t)}}}function Jc(t){return t in ps?ps[t]:ps[t]="on"+t}function Km(t,e){if(t.ba)t=!0;else{e=new rn(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&Yr(t),t=n.call(i,e)}return t}function Xr(t){return t=t[Kr],t instanceof Li?t:null}var gs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qr(t){return typeof t=="function"?t:(t[gs]||(t[gs]=function(e){return t.handleEvent(e)}),t[gs])}function B(){Be.call(this),this.i=new Li(this),this.P=this,this.I=null}$(B,Be);B.prototype[wn]=!0;B.prototype.removeEventListener=function(t,e,n,i){Qc(this,t,e,n,i)};function H(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new z(e,t);else if(e instanceof z)e.target=e.target||t;else{var s=e;e=new z(i,t),qc(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Mn(o,i,!0,e)&&s}if(o=e.g=t,s=Mn(o,i,!0,e)&&s,s=Mn(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Mn(o,i,!1,e)&&s}B.prototype.M=function(){if(B.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Mi(n[i]);delete t.g[e],t.h--}}this.I=null};B.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};B.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Mn(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Hs(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Jr=v.JSON.stringify;function Ym(){var t=th;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Xm{constructor(){this.h=this.g=null}add(e,n){const i=Zc.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Zc=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Qm,t=>t.reset());class Qm{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Jm(t){v.setTimeout(()=>{throw t},0)}function eh(t,e){$s||Zm(),Vs||($s(),Vs=!0),th.add(t,e)}var $s;function Zm(){var t=v.Promise.resolve(void 0);$s=function(){t.then(ey)}}var Vs=!1,th=new Xm;function ey(){for(var t;t=Ym();){try{t.h.call(t.g)}catch(n){Jm(n)}var e=Zc;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Vs=!1}function Fi(t,e){B.call(this),this.h=t||1,this.g=e||v,this.j=G(this.lb,this),this.l=Date.now()}$(Fi,B);_=Fi.prototype;_.ca=!1;_.R=null;_.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),H(this,"tick"),this.ca&&(Zr(this),this.start()))}};_.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Zr(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}_.M=function(){Fi.X.M.call(this),Zr(this),delete this.g};function eo(t,e,n){if(typeof t=="function")n&&(t=G(t,n));else if(t&&typeof t.handleEvent=="function")t=G(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:v.setTimeout(t,e||0)}function nh(t){t.g=eo(()=>{t.g=null,t.i&&(t.i=!1,nh(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ty extends Be{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:nh(this)}M(){super.M(),this.g&&(v.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function on(t){Be.call(this),this.h=t,this.g={}}$(on,Be);var Ra=[];function ih(t,e,n,i){Array.isArray(n)||(n&&(Ra[0]=n.toString()),n=Ra);for(var s=0;s<n.length;s++){var r=Kc(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function sh(t){qr(t.g,function(e,n){this.g.hasOwnProperty(n)&&Yr(e)},t),t.g={}}on.prototype.M=function(){on.X.M.call(this),sh(this)};on.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ui(){this.g=!0}Ui.prototype.Aa=function(){this.g=!1};function ny(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var u=h.split("_");o=2<=u.length&&u[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function iy(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function lt(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ry(t,n)+(i?" "+i:"")})}function sy(t,e){t.info(function(){return"TIMEOUT: "+e})}Ui.prototype.info=function(){};function ry(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Jr(n)}catch{return e}}var kt={},Aa=null;function to(){return Aa=Aa||new B}kt.Pa="serverreachability";function rh(t){z.call(this,kt.Pa,t)}$(rh,z);function an(t){const e=to();H(e,new rh(e))}kt.STAT_EVENT="statevent";function oh(t,e){z.call(this,kt.STAT_EVENT,t),this.stat=e}$(oh,z);function Y(t){const e=to();H(e,new oh(e,t))}kt.Qa="timingevent";function ah(t,e){z.call(this,kt.Qa,t),this.size=e}$(ah,z);function Tn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return v.setTimeout(function(){t()},e)}var no={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},oy={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function io(){}io.prototype.h=null;function ka(t){return t.h||(t.h=t.i())}function ay(){}var Cn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function so(){z.call(this,"d")}$(so,z);function ro(){z.call(this,"c")}$(ro,z);var Gs;function Bi(){}$(Bi,io);Bi.prototype.g=function(){return new XMLHttpRequest};Bi.prototype.i=function(){return{}};Gs=new Bi;function Sn(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new on(this),this.O=ly,t=Bs?125:void 0,this.T=new Fi(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new lh}function lh(){this.i=null,this.g="",this.h=!1}var ly=45e3,zs={},hi={};_=Sn.prototype;_.setTimeout=function(t){this.O=t};function qs(t,e,n){t.K=1,t.v=Hi(we(e)),t.s=n,t.P=!0,ch(t,null)}function ch(t,e){t.F=Date.now(),bn(t),t.A=we(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),mh(n.i,"t",i),t.C=0,n=t.l.H,t.h=new lh,t.g=Uh(t.l,n?e:null,!t.s),0<t.N&&(t.L=new ty(G(t.La,t,t.g),t.N)),ih(t.S,t.g,"readystatechange",t.ib),e=t.H?zc(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),an(),ny(t.j,t.u,t.A,t.m,t.U,t.s)}_.ib=function(t){t=t.target;const e=this.L;e&&ye(t)==3?e.l():this.La(t)};_.La=function(t){try{if(t==this.g)e:{const h=ye(this.g);var e=this.g.Ea();const u=this.g.aa();if(!(3>h)&&(h!=3||Bs||this.g&&(this.h.h||this.g.fa()||Oa(this.g)))){this.I||h!=4||e==7||(e==8||0>=u?an(3):an(2)),Wi(this);var n=this.g.aa();this.Y=n;t:if(hh(this)){var i=Oa(this.g);t="";var s=i.length,r=ye(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){qe(this),Vt(this);var o="";break t}this.h.i=new v.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,iy(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ci(a)){var c=a;break t}}c=null}if(n=c)lt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ks(this,n);else{this.i=!1,this.o=3,Y(12),qe(this),Vt(this);break e}}this.P?(uh(this,h,o),Bs&&this.i&&h==3&&(ih(this.S,this.T,"tick",this.hb),this.T.start())):(lt(this.j,this.m,o,null),Ks(this,o)),h==4&&qe(this),this.i&&!this.I&&(h==4?xh(this.l,this):(this.i=!1,bn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Y(12)):(this.o=0,Y(13)),qe(this),Vt(this)}}}catch{}finally{}};function hh(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function uh(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=cy(t,n),s==hi){e==4&&(t.o=4,Y(14),i=!1),lt(t.j,t.m,null,"[Incomplete Response]");break}else if(s==zs){t.o=4,Y(15),lt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else lt(t.j,t.m,s,null),Ks(t,s);hh(t)&&s!=hi&&s!=zs&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Y(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),fo(e),e.K=!0,Y(11))):(lt(t.j,t.m,n,"[Invalid Chunked Response]"),qe(t),Vt(t))}_.hb=function(){if(this.g){var t=ye(this.g),e=this.g.fa();this.C<e.length&&(Wi(this),uh(this,t,e),this.i&&t!=4&&bn(this))}};function cy(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?hi:(n=Number(e.substring(n,i)),isNaN(n)?zs:(i+=1,i+n>e.length?hi:(e=e.substr(i,n),t.C=i+n,e)))}_.cancel=function(){this.I=!0,qe(this)};function bn(t){t.V=Date.now()+t.O,dh(t,t.O)}function dh(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Tn(G(t.gb,t),e)}function Wi(t){t.B&&(v.clearTimeout(t.B),t.B=null)}_.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(sy(this.j,this.A),this.K!=2&&(an(),Y(17)),qe(this),this.o=2,Vt(this)):dh(this,this.V-t)};function Vt(t){t.l.G==0||t.I||xh(t.l,t)}function qe(t){Wi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Zr(t.T),sh(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ks(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ys(n.h,t))){if(!t.J&&Ys(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)fi(n),Gi(n);else break e;uo(n),Y(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=Tn(G(n.cb,n),6e3));if(1>=Eh(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ke(n,11)}else if((t.J||n.g==t)&&fi(n),!ci(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const h=c[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const u=c[4];u!=null&&(n.Ca=u,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=i.h;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(oo(r,r.h),r.h=null))}if(i.D){const T=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(i.za=T,N(i.F,i.D,T))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=Fh(i,i.H?i.ka:null,i.V),o.J){Ih(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(Wi(a),bn(a)),i.g=o}else Dh(i);0<n.i.length&&zi(n)}else c[0]!="stop"&&c[0]!="close"||Ke(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ke(n,7):ho(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}an(4)}catch{}}function hy(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map!="undefined"&&t instanceof Map||typeof Set!="undefined"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Oi(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function uy(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map!="undefined"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set!="undefined"&&t instanceof Set)){if(Oi(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function fh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Oi(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=uy(t),i=hy(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var ph=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dy(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Qe(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Qe){this.h=e!==void 0?e:t.h,ui(this,t.j),this.s=t.s,this.g=t.g,di(this,t.m),this.l=t.l,e=t.i;var n=new ln;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Na(this,n),this.o=t.o}else t&&(n=String(t).match(ph))?(this.h=!!e,ui(this,n[1]||"",!0),this.s=Ft(n[2]||""),this.g=Ft(n[3]||"",!0),di(this,n[4]),this.l=Ft(n[5]||"",!0),Na(this,n[6]||"",!0),this.o=Ft(n[7]||"")):(this.h=!!e,this.i=new ln(null,this.h))}Qe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ut(e,Pa,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ut(e,Pa,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ut(n,n.charAt(0)=="/"?gy:py,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ut(n,my)),t.join("")};function we(t){return new Qe(t)}function ui(t,e,n){t.j=n?Ft(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function di(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Na(t,e,n){e instanceof ln?(t.i=e,yy(t.i,t.h)):(n||(e=Ut(e,_y)),t.i=new ln(e,t.h))}function N(t,e,n){t.i.set(e,n)}function Hi(t){return N(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ft(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ut(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,fy),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function fy(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Pa=/[#\/\?@]/g,py=/[#\?:]/g,gy=/[#\?]/g,_y=/[#\?@]/g,my=/#/g;function ln(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function We(t){t.g||(t.g=new Map,t.h=0,t.i&&dy(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}_=ln.prototype;_.add=function(t,e){We(this),this.i=null,t=Nt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function gh(t,e){We(t),e=Nt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function _h(t,e){return We(t),e=Nt(t,e),t.g.has(e)}_.forEach=function(t,e){We(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};_.oa=function(){We(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};_.W=function(t){We(this);let e=[];if(typeof t=="string")_h(this,t)&&(e=e.concat(this.g.get(Nt(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};_.set=function(t,e){return We(this),this.i=null,t=Nt(this,t),_h(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};_.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function mh(t,e,n){gh(t,e),0<n.length&&(t.i=null,t.g.set(Nt(t,e),Gr(n)),t.h+=n.length)}_.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function Nt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function yy(t,e){e&&!t.j&&(We(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(gh(this,i),mh(this,s,n))},t)),t.j=e}var vy=class{constructor(t,e){this.h=t,this.g=e}};function yh(t){this.l=t||Ey,v.PerformanceNavigationTiming?(t=v.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(v.g&&v.g.Ga&&v.g.Ga()&&v.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ey=10;function vh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Eh(t){return t.h?1:t.g?t.g.size:0}function Ys(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function oo(t,e){t.g?t.g.add(e):t.h=e}function Ih(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}yh.prototype.cancel=function(){if(this.i=wh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function wh(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Gr(t.i)}function ao(){}ao.prototype.stringify=function(t){return v.JSON.stringify(t,void 0)};ao.prototype.parse=function(t){return v.JSON.parse(t,void 0)};function Iy(){this.g=new ao}function wy(t,e,n){const i=n||"";try{fh(t,function(s,r){let o=s;In(s)&&(o=Jr(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function Ty(t,e){const n=new Ui;if(v.Image){const i=new Image;i.onload=xn(Ln,n,i,"TestLoadImage: loaded",!0,e),i.onerror=xn(Ln,n,i,"TestLoadImage: error",!1,e),i.onabort=xn(Ln,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=xn(Ln,n,i,"TestLoadImage: timeout",!1,e),v.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Ln(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function ji(t){this.l=t.ac||null,this.j=t.jb||!1}$(ji,io);ji.prototype.g=function(){return new $i(this.l,this.j)};ji.prototype.i=function(t){return function(){return t}}({});function $i(t,e){B.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=lo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$($i,B);var lo=0;_=$i.prototype;_.open=function(t,e){if(this.readyState!=lo)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,cn(this)};_.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||v).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};_.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rn(this)),this.readyState=lo};_.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,cn(this)),this.g&&(this.readyState=3,cn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof v.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Th(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Th(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}_.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Rn(this):cn(this),this.readyState==3&&Th(this)}};_.Va=function(t){this.g&&(this.response=this.responseText=t,Rn(this))};_.Ua=function(t){this.g&&(this.response=t,Rn(this))};_.ga=function(){this.g&&Rn(this)};function Rn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,cn(t)}_.setRequestHeader=function(t,e){this.v.append(t,e)};_.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};_.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function cn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty($i.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Cy=v.JSON.parse;function O(t){B.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ch,this.K=this.L=!1}$(O,B);var Ch="",Sy=/^https?$/i,by=["POST","PUT"];_=O.prototype;_.Ka=function(t){this.L=t};_.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Gs.g(),this.C=this.u?ka(this.u):ka(Gs),this.g.onreadystatechange=G(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Da(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=v.FormData&&t instanceof v.FormData,!(0<=jc(by,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Rh(this),0<this.B&&((this.K=Ry(this.g))?(this.g.timeout=this.B,this.g.ontimeout=G(this.qa,this)):this.A=eo(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Da(this,r)}};function Ry(t){return sn&&$m()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}_.qa=function(){typeof Vr!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,H(this,"timeout"),this.abort(8))};function Da(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Sh(t),Vi(t)}function Sh(t){t.D||(t.D=!0,H(t,"complete"),H(t,"error"))}_.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,H(this,"complete"),H(this,"abort"),Vi(this))};_.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vi(this,!0)),O.X.M.call(this)};_.Ha=function(){this.s||(this.F||this.v||this.l?bh(this):this.fb())};_.fb=function(){bh(this)};function bh(t){if(t.h&&typeof Vr!="undefined"&&(!t.C[1]||ye(t)!=4||t.aa()!=2)){if(t.v&&ye(t)==4)eo(t.Ha,0,t);else if(H(t,"readystatechange"),ye(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.H).match(ph)[1]||null;if(!s&&v.self&&v.self.location){var r=v.self.location.protocol;s=r.substr(0,r.length-1)}i=!Sy.test(s?s.toLowerCase():"")}n=i}if(n)H(t,"complete"),H(t,"success");else{t.m=6;try{var o=2<ye(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Sh(t)}}finally{Vi(t)}}}}function Vi(t,e){if(t.g){Rh(t);const n=t.g,i=t.C[0]?li:null;t.g=null,t.C=null,e||H(t,"ready");try{n.onreadystatechange=i}catch{}}}function Rh(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(v.clearTimeout(t.A),t.A=null)}function ye(t){return t.g?t.g.readyState:0}_.aa=function(){try{return 2<ye(this)?this.g.status:-1}catch{return-1}};_.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};_.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Cy(e)}};function Oa(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ch:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}_.Ea=function(){return this.m};_.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ah(t){let e="";return qr(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function co(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Ah(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):N(t,e,n))}function Lt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function kh(t){this.Ca=0,this.i=[],this.j=new Ui,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Lt("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Lt("baseRetryDelayMs",5e3,t),this.bb=Lt("retryDelaySeedMs",1e4,t),this.$a=Lt("forwardChannelMaxRetries",2,t),this.ta=Lt("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new yh(t&&t.concurrentRequestLimit),this.Fa=new Iy,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}_=kh.prototype;_.ma=8;_.G=1;function ho(t){if(Nh(t),t.G==3){var e=t.U++,n=we(t.F);N(n,"SID",t.I),N(n,"RID",e),N(n,"TYPE","terminate"),An(t,n),e=new Sn(t,t.j,e,void 0),e.K=2,e.v=Hi(we(n)),n=!1,v.navigator&&v.navigator.sendBeacon&&(n=v.navigator.sendBeacon(e.v.toString(),"")),!n&&v.Image&&(new Image().src=e.v,n=!0),n||(e.g=Uh(e.l,null),e.g.da(e.v)),e.F=Date.now(),bn(e)}Lh(t)}function Gi(t){t.g&&(fo(t),t.g.cancel(),t.g=null)}function Nh(t){Gi(t),t.u&&(v.clearTimeout(t.u),t.u=null),fi(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&v.clearTimeout(t.m),t.m=null)}function zi(t){vh(t.h)||t.m||(t.m=!0,eh(t.Ja,t),t.C=0)}function Ay(t,e){return Eh(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Tn(G(t.Ja,t,e),Mh(t,t.C)),t.C++,!0)}_.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Sn(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=zc(r),qc(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ph(this,s,e),n=we(this.F),N(n,"RID",t),N(n,"CVER",22),this.D&&N(n,"X-HTTP-Session-Id",this.D),An(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Ah(r)))+"&"+e:this.o&&co(n,this.o,r)),oo(this.h,s),this.Ya&&N(n,"TYPE","init"),this.O?(N(n,"$req",e),N(n,"SID","null"),s.Z=!0,qs(s,n,null)):qs(s,n,e),this.G=2}}else this.G==3&&(t?xa(this,t):this.i.length==0||vh(this.h)||xa(this))};function xa(t,e){var n;e?n=e.m:n=t.U++;const i=we(t.F);N(i,"SID",t.I),N(i,"RID",n),N(i,"AID",t.T),An(t,i),t.o&&t.s&&co(i,t.o,t.s),n=new Sn(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Ph(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),oo(t.h,n),qs(n,i,e)}function An(t,e){t.ia&&qr(t.ia,function(n,i){N(e,i,n)}),t.l&&fh({},function(n,i){N(e,i,n)})}function Ph(t,e,n){n=Math.min(t.i.length,n);var i=t.l?G(t.l.Ra,t.l,t):null;e:{var s=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const h=s[l].g;if(c-=r,0>c)r=Math.max(0,s[l].h-100),a=!1;else try{wy(h,o,"req"+c+"_")}catch{i&&i(h)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,i}function Dh(t){t.g||t.u||(t.Z=1,eh(t.Ia,t),t.A=0)}function uo(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Tn(G(t.Ia,t),Mh(t,t.A)),t.A++,!0)}_.Ia=function(){if(this.u=null,Oh(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Tn(G(this.eb,this),t)}};_.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Y(10),Gi(this),Oh(this))};function fo(t){t.B!=null&&(v.clearTimeout(t.B),t.B=null)}function Oh(t){t.g=new Sn(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=we(t.sa);N(e,"RID","rpc"),N(e,"SID",t.I),N(e,"CI",t.L?"0":"1"),N(e,"AID",t.T),N(e,"TYPE","xmlhttp"),An(t,e),t.o&&t.s&&co(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Hi(we(e)),n.s=null,n.P=!0,ch(n,t)}_.cb=function(){this.v!=null&&(this.v=null,Gi(this),uo(this),Y(19))};function fi(t){t.v!=null&&(v.clearTimeout(t.v),t.v=null)}function xh(t,e){var n=null;if(t.g==e){fi(t),fo(t),t.g=null;var i=2}else if(Ys(t.h,e))n=e.D,Ih(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=to(),H(i,new ah(i,n)),zi(t)}else Dh(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(i==1&&Ay(t,e)||i==2&&uo(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:Ke(t,5);break;case 4:Ke(t,10);break;case 3:Ke(t,6);break;default:Ke(t,2)}}}function Mh(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ke(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=G(t.kb,t);n||(n=new Qe("//www.google.com/images/cleardot.gif"),v.location&&v.location.protocol=="http"||ui(n,"https"),Hi(n)),Ty(n.toString(),i)}else Y(2);t.G=0,t.l&&t.l.va(e),Lh(t),Nh(t)}_.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Y(2)):(this.j.info("Failed to ping google.com"),Y(1))};function Lh(t){if(t.G=0,t.la=[],t.l){const e=wh(t.h);(e.length!=0||t.i.length!=0)&&(Ca(t.la,e),Ca(t.la,t.i),t.h.i.length=0,Gr(t.i),t.i.length=0),t.l.ua()}}function Fh(t,e,n){var i=n instanceof Qe?we(n):new Qe(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),di(i,i.m);else{var s=v.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new Qe(null,void 0);i&&ui(r,i),e&&(r.g=e),s&&di(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&N(i,n,e),N(i,"VER",t.ma),An(t,i),i}function Uh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new O(new ji({jb:!0})):new O(t.ra),e.Ka(t.H),e}function Bh(){}_=Bh.prototype;_.xa=function(){};_.wa=function(){};_.va=function(){};_.ua=function(){};_.Ra=function(){};function ie(t,e){B.call(this),this.g=new kh(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!ci(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ci(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Pt(this)}$(ie,B);ie.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Y(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Fh(t,null,t.V),zi(t)};ie.prototype.close=function(){ho(this.g)};ie.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Jr(t),t=n);e.i.push(new vy(e.ab++,t)),e.G==3&&zi(e)};ie.prototype.M=function(){this.g.l=null,delete this.j,ho(this.g),delete this.g,ie.X.M.call(this)};function Wh(t){so.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$(Wh,so);function Hh(){ro.call(this),this.status=1}$(Hh,ro);function Pt(t){this.g=t}$(Pt,Bh);Pt.prototype.xa=function(){H(this.g,"a")};Pt.prototype.wa=function(t){H(this.g,new Wh(t))};Pt.prototype.va=function(t){H(this.g,new Hh)};Pt.prototype.ua=function(){H(this.g,"b")};ie.prototype.send=ie.prototype.u;ie.prototype.open=ie.prototype.m;ie.prototype.close=ie.prototype.close;no.NO_ERROR=0;no.TIMEOUT=8;no.HTTP_ERROR=6;oy.COMPLETE="complete";ay.EventType=Cn;Cn.OPEN="a";Cn.CLOSE="b";Cn.ERROR="c";Cn.MESSAGE="d";B.prototype.listen=B.prototype.N;O.prototype.listenOnce=O.prototype.O;O.prototype.getLastError=O.prototype.Oa;O.prototype.getLastErrorCode=O.prototype.Ea;O.prototype.getStatus=O.prototype.aa;O.prototype.getResponseJson=O.prototype.Sa;O.prototype.getResponseText=O.prototype.fa;O.prototype.send=O.prototype.da;O.prototype.setWithCredentials=O.prototype.Ka;const Ma="@firebase/firestore";/**
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
 */class V{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}V.UNAUTHENTICATED=new V(null),V.GOOGLE_CREDENTIALS=new V("google-credentials-uid"),V.FIRST_PARTY=new V("first-party-uid"),V.MOCK_USER=new V("mock-user");/**
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
 */let kn="9.19.0";/**
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
 */const wt=new mi("@firebase/firestore");function J(t,...e){if(wt.logLevel<=b.DEBUG){const n=e.map(go);wt.debug(`Firestore (${kn}): ${t}`,...n)}}function po(t,...e){if(wt.logLevel<=b.ERROR){const n=e.map(go);wt.error(`Firestore (${kn}): ${t}`,...n)}}function ky(t,...e){if(wt.logLevel<=b.WARN){const n=e.map(go);wt.warn(`Firestore (${kn}): ${t}`,...n)}}function go(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function _o(t="Unexpected state"){const e=`FIRESTORE (${kn}) INTERNAL ASSERTION FAILED: `+t;throw po(e),new Error(e)}function Xs(t,e){t||_o()}/**
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
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends Te{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class pt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class jh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ny{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(V.UNAUTHENTICATED))}shutdown(){}}class Py{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Dy{constructor(e){this.t=e,this.currentUser=V.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new pt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new pt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new pt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Xs(typeof i.accessToken=="string"),new jh(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Xs(e===null||typeof e=="string"),new V(e)}}class Oy{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=V.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class xy{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new Oy(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(V.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class My{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ly{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=r=>{r.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Xs(typeof n.token=="string"),this.T=n.token,new My(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Fy(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class Uy{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=Fy(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function $h(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class By{constructor(e,n,i,s,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class pi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new pi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof pi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var La,C;(C=La||(La={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";function _s(){return typeof document!="undefined"?document:null}/**
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
 */class Wy{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=i,this.mo=s,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),i=Math.max(0,Date.now()-this.To),s=Math.max(0,n-i);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,s,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class mo{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new mo(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hy(t,e){if(po("AsyncQueue",`${e}: ${t}`),$h(t))return new ee(Z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class jy{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=V.UNAUTHENTICATED,this.clientId=Uy.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{J("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(J("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ee(Z.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Hy(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}/**
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
 */const Fa=new Map;function $y(t,e,n,i){if(e===!0&&i===!0)throw new ee(Z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vy(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_o()}function Gy(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ee(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vy(t);throw new ee(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Ua{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ee(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ee(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,$y("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Vh{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ua({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ee(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ee(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ua(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ny;switch(n.type){case"firstParty":return new xy(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ee(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Fa.get(e);n&&(J("ComponentProvider","Removing Datastore"),Fa.delete(e),n.terminate())}(this),Promise.resolve()}}function zy(t,e,n,i={}){var s;const r=(t=Gy(t,Vh))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&ky("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=V.MOCK_USER;else{o=za(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new ee(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new V(l)}t._authCredentials=new Py(new jh(o,a))}}/**
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
 */class qy{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Wy(this,"async_queue_retry"),this.qc=()=>{const n=_s();n&&J("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=_s();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=_s();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new pt;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!$h(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(i=>{this.Mc=i,this.Fc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw po("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Fc=!1,i))));return this.Nc=n,n}enqueueAfterDelay(e,n,i){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const s=mo.createAndSchedule(this,e,n,i,r=>this.Qc(r));return this.$c.push(s),s}Uc(){this.Mc&&_o()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Ky extends Vh{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new qy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Xy(this),this._firestoreClient.terminate()}}function Yy(t,e){const n=typeof t=="object"?t:tr(),i=typeof t=="string"?t:e||"(default)",s=yi(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Va("firestore");r&&zy(s,...r)}return s}function Xy(t){var e,n,i;const s=t._freezeSettings(),r=function(o,a,l,c){return new By(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new jy(t._authCredentials,t._appCheckCredentials,t._queue,r),((n=s.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((i=s.cache)===null||i===void 0?void 0:i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}(function(t,e=!0){(function(n){kn=n})(St),Ze(new Me("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new Ky(new Dy(n.getProvider("auth-internal")),new Ly(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new ee(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pi(a.options.projectId,l)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),ce(Ma,"3.10.0",t),ce(Ma,"3.10.0","esm2017")})();const Qy={apiKey:"AIzaSyDkb39XAcPYKYhnXPQ5QnwbS5lZRzBF5DU",authDomain:"reading-edge.firebaseapp.com",databaseURL:"https://reading-edge-default-rtdb.firebaseio.com",projectId:"reading-edge",storageBucket:"reading-edge.appspot.com",messagingSenderId:"745479127305",appId:"1:745479127305:web:191e39892c3e6f324c93d8"},yo=Ja(Qy),Jy=km(yo),Zy=Yy(yo),ev=_p(yo);var ov=Object.freeze(Object.defineProperty({__proto__:null,dbFS:Zy,dbRT:Jy,auth:ev},Symbol.toStringTag,{value:"Module"}));export{Re as G,km as a,rv as b,Fs as c,Jy as d,Im as e,ev as f,_p as g,iv as h,ov as i,nv as r,tv as s,sv as u};
