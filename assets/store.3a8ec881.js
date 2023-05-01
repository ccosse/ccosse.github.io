import{I as le,J as p,K as he,L as Me,M as _e,N as Ne,r as D,O as Oe,R as Ye}from"./index.7833be67.js";import{u as _,r as h,d,g as I,a as Y,c as $,s as E,b as K,e as ee,_ as $e,f as te,h as se,t as ne,i as x}from"./firebase.dc843dde.js";import{a as j}from"./axios.84ae42e4.js";const O=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function Mt(e,t,s){return Object.prototype.toString.call(e)==="[object Date]"&&(s=e.getDate(),t=e.getMonth()+1,e=e.getFullYear()),Le(A(e,t,s))}function _t(e,t,s){return fe(Pe(e,t,s))}function Ie(e){return xe(e)===0}function Ke(e,t){return t<=6?31:t<=11||Ie(e)?30:29}function xe(e){const t=O.length;let s=O[0],n,i,a,o,r;if(e<s||e>=O[t-1])throw new Error("Invalid Jalaali year "+e);for(r=1;r<t&&(n=O[r],i=n-s,!(e<n));r+=1)s=n;return o=e-s,i-o<6&&(o=o-i+g(i+4,33)*33),a=w(w(o+1,33)-1,4),a===-1&&(a=4),a}function ge(e,t){const s=O.length,n=e+621;let i=-14,a=O[0],o,r,u,y,c;if(e<a||e>=O[s-1])throw new Error("Invalid Jalaali year "+e);for(c=1;c<s&&(o=O[c],r=o-a,!(e<o));c+=1)i=i+g(r,33)*8+g(w(r,33),4),a=o;y=e-a,i=i+g(y,33)*8+g(w(y,33)+3,4),w(r,33)===4&&r-y===4&&(i+=1);const l=g(n,4)-g((g(n,100)+1)*3,4)-150,k=20+i-l;return t||(r-y<6&&(y=y-r+g(r+4,33)*33),u=w(w(y+1,33)-1,4),u===-1&&(u=4)),{leap:u,gy:n,march:k}}function Pe(e,t,s){const n=ge(e,!0);return A(n.gy,3,n.march)+(t-1)*31-g(t,7)*(t-7)+s-1}function Le(e){const t=fe(e).gy;let s=t-621,n,i,a;const o=ge(s,!1),r=A(t,3,o.march);if(a=e-r,a>=0){if(a<=185)return i=1+g(a,31),n=w(a,31)+1,{jy:s,jm:i,jd:n};a-=186}else s-=1,a+=179,o.leap===1&&(a+=1);return i=7+g(a,30),n=w(a,30)+1,{jy:s,jm:i,jd:n}}function A(e,t,s){let n=g((e+g(t-8,6)+100100)*1461,4)+g(153*w(t+9,12)+2,5)+s-34840408;return n=n-g(g(e+100100+g(t-8,6),100)*3,4)+752,n}function fe(e){let t=4*e+139361631;t=t+g(g(4*e+183187720,146097)*3,4)*4-3908;const s=g(w(t,1461),4)*5+308,n=g(w(s,153),5)+1,i=w(g(s,153),12)+1;return{gy:g(t,1461)-100100+g(8-i,6),gm:i,gd:n}}function g(e,t){return~~(e/t)}function w(e,t){return e-~~(e/t)*t}const de=864e5,Te=36e5,V=6e4,me="YYYY-MM-DDTHH:mm:ss.SSSZ",Ee=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,ze=/(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,C={};function Ue(e,t){const s="("+t.days.join("|")+")",n=e+s;if(C[n]!==void 0)return C[n];const i="("+t.daysShort.join("|")+")",a="("+t.months.join("|")+")",o="("+t.monthsShort.join("|")+")",r={};let u=0;const y=e.replace(ze,l=>{switch(u++,l){case"YY":return r.YY=u,"(-?\\d{1,2})";case"YYYY":return r.YYYY=u,"(-?\\d{1,4})";case"M":return r.M=u,"(\\d{1,2})";case"MM":return r.M=u,"(\\d{2})";case"MMM":return r.MMM=u,o;case"MMMM":return r.MMMM=u,a;case"D":return r.D=u,"(\\d{1,2})";case"Do":return r.D=u++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return r.D=u,"(\\d{2})";case"H":return r.H=u,"(\\d{1,2})";case"HH":return r.H=u,"(\\d{2})";case"h":return r.h=u,"(\\d{1,2})";case"hh":return r.h=u,"(\\d{2})";case"m":return r.m=u,"(\\d{1,2})";case"mm":return r.m=u,"(\\d{2})";case"s":return r.s=u,"(\\d{1,2})";case"ss":return r.s=u,"(\\d{2})";case"S":return r.S=u,"(\\d{1})";case"SS":return r.S=u,"(\\d{2})";case"SSS":return r.S=u,"(\\d{3})";case"A":return r.A=u,"(AM|PM)";case"a":return r.a=u,"(am|pm)";case"aa":return r.aa=u,"(a\\.m\\.|p\\.m\\.)";case"ddd":return i;case"dddd":return s;case"Q":case"d":case"E":return"(\\d{1})";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"w":return"(\\d{1,2})";case"ww":return"(\\d{2})";case"Z":return r.Z=u,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return r.ZZ=u,"(Z|[+-]\\d{2}\\d{2})";case"X":return r.X=u,"(-?\\d+)";case"x":return r.x=u,"(-?\\d{4,})";default:return u--,l[0]==="["&&(l=l.substring(1,l.length-1)),l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),c={map:r,regex:new RegExp("^"+y)};return C[n]=c,c}function pe(e,t){return e!==void 0?e:t!==void 0?t.date:Me.date}function ie(e,t=""){const s=e>0?"-":"+",n=Math.abs(e),i=Math.floor(n/60),a=n%60;return s+p(i)+t+p(a)}function je(e,t,s){let n=e.getFullYear(),i=e.getMonth();const a=e.getDate();return t.year!==void 0&&(n+=s*t.year,delete t.year),t.month!==void 0&&(i+=s*t.month,delete t.month),e.setDate(1),e.setMonth(2),e.setFullYear(n),e.setMonth(i),e.setDate(Math.min(a,B(e))),t.date!==void 0&&(e.setDate(e.getDate()+s*t.date),delete t.date),e}function Ce(e,t,s){const n=t.year!==void 0?t.year:e[`get${s}FullYear`](),i=t.month!==void 0?t.month-1:e[`get${s}Month`](),a=new Date(n,i+1,0).getDate(),o=Math.min(a,t.date!==void 0?t.date:e[`get${s}Date`]());return e[`set${s}Date`](1),e[`set${s}Month`](2),e[`set${s}FullYear`](n),e[`set${s}Month`](i),e[`set${s}Date`](o),delete t.year,delete t.month,delete t.date,e}function G(e,t,s){const n=ye(t),i=new Date(e),a=n.year!==void 0||n.month!==void 0||n.date!==void 0?je(i,n,s):i;for(const o in n){const r=_e(o);a[`set${r}`](a[`get${r}`]()+s*n[o])}return a}function ye(e){const t={...e};return e.years!==void 0&&(t.year=e.years,delete t.years),e.months!==void 0&&(t.month=e.months,delete t.months),e.days!==void 0&&(t.date=e.days,delete t.days),e.day!==void 0&&(t.date=e.day,delete t.day),e.hour!==void 0&&(t.hours=e.hour,delete t.hour),e.minute!==void 0&&(t.minutes=e.minute,delete t.minute),e.second!==void 0&&(t.seconds=e.second,delete t.second),e.millisecond!==void 0&&(t.milliseconds=e.millisecond,delete t.millisecond),t}function ve(e,t,s){const n=ye(t),i=s===!0?"UTC":"",a=new Date(e),o=n.year!==void 0||n.month!==void 0||n.date!==void 0?Ce(a,n,i):a;for(const r in n){const u=r.charAt(0).toUpperCase()+r.slice(1);o[`set${i}${u}`](n[r])}return o}function Fe(e,t,s){const n=Ve(e,t,s),i=new Date(n.year,n.month===null?null:n.month-1,n.day===null?1:n.day,n.hour,n.minute,n.second,n.millisecond),a=i.getTimezoneOffset();return n.timezoneOffset===null||n.timezoneOffset===a?i:G(i,{minutes:n.timezoneOffset-a},1)}function Ve(e,t,s,n,i){const a={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(i!==void 0&&Object.assign(a,i),e==null||e===""||typeof e!="string")return a;t===void 0&&(t=me);const o=pe(s,le.props),r=o.months,u=o.monthsShort,{regex:y,map:c}=Ue(t,o),l=e.match(y);if(l===null)return a;let k="";if(c.X!==void 0||c.x!==void 0){const m=parseInt(l[c.X!==void 0?c.X:c.x],10);if(isNaN(m)===!0||m<0)return a;const M=new Date(m*(c.X!==void 0?1e3:1));a.year=M.getFullYear(),a.month=M.getMonth()+1,a.day=M.getDate(),a.hour=M.getHours(),a.minute=M.getMinutes(),a.second=M.getSeconds(),a.millisecond=M.getMilliseconds()}else{if(c.YYYY!==void 0)a.year=parseInt(l[c.YYYY],10);else if(c.YY!==void 0){const m=parseInt(l[c.YY],10);a.year=m<0?m:2e3+m}if(c.M!==void 0){if(a.month=parseInt(l[c.M],10),a.month<1||a.month>12)return a}else c.MMM!==void 0?a.month=u.indexOf(l[c.MMM])+1:c.MMMM!==void 0&&(a.month=r.indexOf(l[c.MMMM])+1);if(c.D!==void 0){if(a.day=parseInt(l[c.D],10),a.year===null||a.month===null||a.day<1)return a;const m=n!=="persian"?new Date(a.year,a.month,0).getDate():Ke(a.year,a.month);if(a.day>m)return a}c.H!==void 0?a.hour=parseInt(l[c.H],10)%24:c.h!==void 0&&(a.hour=parseInt(l[c.h],10)%12,(c.A&&l[c.A]==="PM"||c.a&&l[c.a]==="pm"||c.aa&&l[c.aa]==="p.m.")&&(a.hour+=12),a.hour=a.hour%24),c.m!==void 0&&(a.minute=parseInt(l[c.m],10)%60),c.s!==void 0&&(a.second=parseInt(l[c.s],10)%60),c.S!==void 0&&(a.millisecond=parseInt(l[c.S],10)*10**(3-l[c.S].length)),(c.Z!==void 0||c.ZZ!==void 0)&&(k=c.Z!==void 0?l[c.Z].replace(":",""):l[c.ZZ],a.timezoneOffset=(k[0]==="+"?-1:1)*(60*k.slice(1,3)+1*k.slice(3,5)))}return a.dateHash=p(a.year,6)+"/"+p(a.month)+"/"+p(a.day),a.timeHash=p(a.hour)+":"+p(a.minute)+":"+p(a.second)+k,a}function He(e){return typeof e=="number"?!0:isNaN(Date.parse(e))===!1}function Re(e,t){return ve(new Date,e,t)}function Ae(e){const t=new Date(e).getDay();return t===0?7:t}function H(e){const t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);const s=new Date(t.getFullYear(),0,4);s.setDate(s.getDate()-(s.getDay()+6)%7+3);const n=t.getTimezoneOffset()-s.getTimezoneOffset();t.setHours(t.getHours()-n);const i=(t-s)/(de*7);return 1+Math.floor(i)}function Ge(e){return e.getFullYear()*1e4+e.getMonth()*100+e.getDate()}function F(e,t){const s=new Date(e);return t===!0?Ge(s):s.getTime()}function Be(e,t,s,n={}){const i=F(t,n.onlyDate),a=F(s,n.onlyDate),o=F(e,n.onlyDate);return(o>i||n.inclusiveFrom===!0&&o===i)&&(o<a||n.inclusiveTo===!0&&o===a)}function Qe(e,t){return G(e,t,1)}function Ze(e,t){return G(e,t,-1)}function N(e,t,s){const n=new Date(e),i=`set${s===!0?"UTC":""}`;switch(t){case"year":case"years":n[`${i}Month`](0);case"month":case"months":n[`${i}Date`](1);case"day":case"days":case"date":n[`${i}Hours`](0);case"hour":case"hours":n[`${i}Minutes`](0);case"minute":case"minutes":n[`${i}Seconds`](0);case"second":case"seconds":n[`${i}Milliseconds`](0)}return n}function Je(e,t,s){const n=new Date(e),i=`set${s===!0?"UTC":""}`;switch(t){case"year":case"years":n[`${i}Month`](11);case"month":case"months":n[`${i}Date`](B(n));case"day":case"days":case"date":n[`${i}Hours`](23);case"hour":case"hours":n[`${i}Minutes`](59);case"minute":case"minutes":n[`${i}Seconds`](59);case"second":case"seconds":n[`${i}Milliseconds`](999)}return n}function qe(e){let t=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(s=>{t=Math.max(t,new Date(s))}),t}function Xe(e){let t=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(s=>{t=Math.min(t,new Date(s))}),t}function z(e,t,s){return(e.getTime()-e.getTimezoneOffset()*V-(t.getTime()-t.getTimezoneOffset()*V))/s}function Se(e,t,s="days"){const n=new Date(e),i=new Date(t);switch(s){case"years":case"year":return n.getFullYear()-i.getFullYear();case"months":case"month":return(n.getFullYear()-i.getFullYear())*12+n.getMonth()-i.getMonth();case"days":case"day":case"date":return z(N(n,"day"),N(i,"day"),de);case"hours":case"hour":return z(N(n,"hour"),N(i,"hour"),Te);case"minutes":case"minute":return z(N(n,"minute"),N(i,"minute"),V);case"seconds":case"second":return z(N(n,"second"),N(i,"second"),1e3)}}function R(e){return Se(e,N(e,"year"),"days")+1}function We(e){return he(e)===!0?"date":typeof e=="number"?"number":"string"}function et(e,t,s){const n=new Date(e);if(t){const i=new Date(t);if(n<i)return i}if(s){const i=new Date(s);if(n>i)return i}return n}function tt(e,t,s){const n=new Date(e),i=new Date(t);if(s===void 0)return n.getTime()===i.getTime();switch(s){case"second":case"seconds":if(n.getSeconds()!==i.getSeconds())return!1;case"minute":case"minutes":if(n.getMinutes()!==i.getMinutes())return!1;case"hour":case"hours":if(n.getHours()!==i.getHours())return!1;case"day":case"days":case"date":if(n.getDate()!==i.getDate())return!1;case"month":case"months":if(n.getMonth()!==i.getMonth())return!1;case"year":case"years":if(n.getFullYear()!==i.getFullYear())return!1;break;default:throw new Error(`date isSameDate unknown unit ${s}`)}return!0}function B(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function ae(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const re={YY(e,t,s){const n=this.YYYY(e,t,s)%100;return n>=0?p(n):"-"+p(Math.abs(n))},YYYY(e,t,s){return s!=null?s:e.getFullYear()},M(e){return e.getMonth()+1},MM(e){return p(e.getMonth()+1)},MMM(e,t){return t.monthsShort[e.getMonth()]},MMMM(e,t){return t.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return ae(this.Q(e))},D(e){return e.getDate()},Do(e){return ae(e.getDate())},DD(e){return p(e.getDate())},DDD(e){return R(e)},DDDD(e){return p(R(e),3)},d(e){return e.getDay()},dd(e,t){return this.dddd(e,t).slice(0,2)},ddd(e,t){return t.daysShort[e.getDay()]},dddd(e,t){return t.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return H(e)},ww(e){return p(H(e))},H(e){return e.getHours()},HH(e){return p(e.getHours())},h(e){const t=e.getHours();return t===0?12:t>12?t%12:t},hh(e){return p(this.h(e))},m(e){return e.getMinutes()},mm(e){return p(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return p(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return p(Math.floor(e.getMilliseconds()/10))},SSS(e){return p(e.getMilliseconds(),3)},A(e){return this.H(e)<12?"AM":"PM"},a(e){return this.H(e)<12?"am":"pm"},aa(e){return this.H(e)<12?"a.m.":"p.m."},Z(e,t,s,n){const i=n==null?e.getTimezoneOffset():n;return ie(i,":")},ZZ(e,t,s,n){const i=n==null?e.getTimezoneOffset():n;return ie(i)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function st(e,t,s,n,i){if(e!==0&&!e||e===1/0||e===-1/0)return;const a=new Date(e);if(isNaN(a))return;t===void 0&&(t=me);const o=pe(s,le.props);return t.replace(Ee,(r,u)=>r in re?re[r](a,o,n,i):u===void 0?r:u.split("\\]").join("]"))}function nt(e){return he(e)===!0?new Date(e.getTime()):e}var it={isValid:He,extractDate:Fe,buildDate:Re,getDayOfWeek:Ae,getWeekOfYear:H,isBetweenDates:Be,addToDate:Qe,subtractFromDate:Ze,adjustDate:ve,startOfDate:N,endOfDate:Je,getMaxDate:qe,getMinDate:Xe,getDateDiff:Se,getDayOfYear:R,inferDateFormat:We,getDateBetween:et,isSameDate:tt,daysInMonth:B,formatDate:st,clone:nt},Q={},v={};Object.defineProperty(v,"__esModule",{value:!0});v.trim=v.isObject=v.isNil=v.isNan=v.size=v.isString=v.validateLocale=v.splitSentences=void 0;var at=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return t.replace(/\.+/g,".|").replace(/\?/g,"?|").replace(/\!/g,"!|").split("|").map(function(s){return De(s)}).filter(Boolean)};v.splitSentences=at;var rt=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i,ot=function(t){return typeof t!="string"?!1:rt.test(t)};v.validateLocale=ot;var ke=function(t){return typeof t=="string"||t instanceof String};v.isString=ke;var ct=function(t){return t&&Array.isArray(t)&&t.length?t.length:0};v.size=ct;var ut=function(t){return typeof t=="number"&&isNaN(t)};v.isNan=ut;var lt=function(t){return t==null};v.isNil=lt;var ht=function(t){return Object.prototype.toString.call(t)==="[object Object]"};v.isObject=ht;var De=function(t){return ke(t)?t.trim():""};v.trim=De;Object.defineProperty(Q,"__esModule",{value:!0});var be=Q.default=void 0,f=v;function gt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function oe(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ft(e,t,s){return t&&oe(e.prototype,t),s&&oe(e,s),e}var dt=function(){function e(){gt(this,e),this.browserSupport="speechSynthesis"in window&&"SpeechSynthesisUtterance"in window,this.synthesisVoice=null}return ft(e,[{key:"init",value:function(){var s=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(function(i,a){s.browserSupport||a("Your browser does not support Speech Synthesis");var o=(0,f.isNil)(n.listeners)?{}:n.listeners,r=(0,f.isNil)(n.splitSentences)?!0:n.splitSentences,u=(0,f.isNil)(n.lang)?void 0:n.lang,y=(0,f.isNil)(n.volume)?1:n.volume,c=(0,f.isNil)(n.rate)?1:n.rate,l=(0,f.isNil)(n.pitch)?1:n.pitch,k=(0,f.isNil)(n.voice)?void 0:n.voice;Object.keys(o).forEach(function(m){var M=o[m],U=function(b){M&&M(b)};m!=="onvoiceschanged"&&(speechSynthesis[m]=U)}),s._loadVoices().then(function(m){o.onvoiceschanged&&o.onvoiceschanged(m),!(0,f.isNil)(u)&&s.setLanguage(u),!(0,f.isNil)(k)&&s.setVoice(k),!(0,f.isNil)(y)&&s.setVolume(y),!(0,f.isNil)(c)&&s.setRate(c),!(0,f.isNil)(l)&&s.setPitch(l),!(0,f.isNil)(r)&&s.setSplitSentences(r),i({voices:m,lang:s.lang,voice:s.voice,volume:s.volume,rate:s.rate,pitch:s.pitch,splitSentences:s.splitSentences,browserSupport:s.browserSupport})}).catch(function(m){a(m)})})}},{key:"_fetchVoices",value:function(){return new Promise(function(s,n){setTimeout(function(){var i=speechSynthesis.getVoices();return(0,f.size)(i)>0?s(i):n("Could not fetch voices")},100)})}},{key:"_loadVoices",value:function(){var s=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10;return this._fetchVoices().catch(function(i){if(n===0)throw i;return s._loadVoices(n-1)})}},{key:"hasBrowserSupport",value:function(){return this.browserSupport}},{key:"setVoice",value:function(s){var n,i=speechSynthesis.getVoices();if((0,f.isString)(s)&&(n=i.find(function(a){return a.name===s})),(0,f.isObject)(s)&&(n=s),n)this.synthesisVoice=n;else throw"Error setting voice. The voice you passed is not valid or the voices have not been loaded yet."}},{key:"setLanguage",value:function(s){if(s=s.replace("_","-"),(0,f.validateLocale)(s))this.lang=s;else throw"Error setting language. Please verify your locale is BCP47 format (http://schneegans.de/lv/?tags=es-FR&format=text)"}},{key:"setVolume",value:function(s){if(s=parseFloat(s),!(0,f.isNan)(s)&&s>=0&&s<=1)this.volume=s;else throw"Error setting volume. Please verify your volume value is a number between 0 and 1."}},{key:"setRate",value:function(s){if(s=parseFloat(s),!(0,f.isNan)(s)&&s>=0&&s<=10)this.rate=s;else throw"Error setting rate. Please verify your volume value is a number between 0 and 10."}},{key:"setPitch",value:function(s){if(s=parseFloat(s),!(0,f.isNan)(s)&&s>=0&&s<=2)this.pitch=s;else throw"Error setting pitch. Please verify your pitch value is a number between 0 and 2."}},{key:"setSplitSentences",value:function(s){this.splitSentences=s}},{key:"speak",value:function(s){var n=this;return new Promise(function(i,a){var o=s.text,r=s.listeners,u=r===void 0?{}:r,y=s.queue,c=y===void 0?!0:y,l=(0,f.trim)(o);(0,f.isNil)(l)&&i(),!c&&n.cancel();var k=[],m=n.splitSentences?(0,f.splitSentences)(l):[l];m.forEach(function(M,U){var q=U===(0,f.size)(m)-1,b=new SpeechSynthesisUtterance;n.synthesisVoice&&(b.voice=n.synthesisVoice),n.lang&&(b.lang=n.lang),n.volume&&(b.volume=n.volume),n.rate&&(b.rate=n.rate),n.pitch&&(b.pitch=n.pitch),b.text=M,Object.keys(u).forEach(function(T){var X=u[T],we=function(W){X&&X(W),T==="onerror"&&a({utterances:k,lastUtterance:b,error:W}),T==="onend"&&q&&i({utterances:k,lastUtterance:b})};b[T]=we}),k.push(b),speechSynthesis.speak(b)})})}},{key:"pending",value:function(){return speechSynthesis.pending}},{key:"paused",value:function(){return speechSynthesis.paused}},{key:"speaking",value:function(){return speechSynthesis.speaking}},{key:"pause",value:function(){speechSynthesis.pause()}},{key:"resume",value:function(){speechSynthesis.resume()}},{key:"cancel",value:function(){speechSynthesis.cancel()}}]),e}(),mt=dt;be=Q.default=mt;const Z="https://readingedgeca.s3.us-west-1.amazonaws.com/static/pub/img/readingedge_nowords.png",J="https://readingedgeca.s3.us-west-1.amazonaws.com/static/pub/img/reading_edge_200x200.png",S="4610197597210819",ce=()=>Math.random().toString().slice(2,20),P=()=>{const e=Date.now();return it.formatDate(e,"MMDDYY-HH:mm:ss")},L={"Eng-US":{flagName:"fi fi-us",langName:"en",speechLang:"en-US",longName:"English",voice:"Google English US"},"Eng-UK-Fem":{flagName:"fi fi-gb",langName:"en",speechLang:"en-GB",longName:"English",voice:"Google UK English Female"},espa\u00F1ol:{flagName:"fi fi-mx",langName:"es",speechLang:"es-MX",longName:"espa\xF1ol",voice:"Google espa\xF1ol"},fran\u00E7ais:{flagName:"fi fi-fr",langName:"fr",speechLang:"fr-FR",longName:"fran\xE7ais",voice:"Google fran\xE7ais"},Deutsch:{flagName:"fi fi-de",langName:"de",speechLang:"de-DE",longName:"Deutsch",voice:"Google Deutsch"},italiano:{flagName:"fi fi-it",langName:"it",speechLang:"it-IT",longName:"italiano",voice:"Google italiano"},"portugu\xEAs do Brasil":{flagName:"fi fi-br",langName:"pt",speechLang:"pt-BR",longName:"portugu\xEAs",voice:"Google portugu\xEAs do Brasil"},Kiswahili:{flagName:"fi fi-ke",langName:"sw",speechLang:"en-GB",longName:"Kiswahili",voice:"Google UK English Female"},\u0440\u0443\u0441\u0441\u043A\u0438\u0439:{flagName:"fi fi-ru",langName:"ru",speechLang:"ru-RU",longName:"\u0440\u0443\u0441\u0441\u043A\u0438\u0439",voice:"Google \u0440\u0443\u0441\u0441\u043A\u0438\u0439"},\u0E44\u0E17\u0E22:{flagName:"fi fi-th",langName:"th",speechLang:"th-TH",longName:"\u0E44\u0E17\u0E22:",voice:"Google Bahasa Indonesia"},"\u4E2D\u6587 \uFF08\u4E2D\u56FD\u5927\u9646\uFF09":{flagName:"fi fi-cn",langName:"zh",speechLang:"zh-CN",longName:"\u4E2D\u6587",voice:"Google \u666E\u901A\u8BDD\uFF08\u4E2D\u56FD\u5927\u9646\uFF09"},"\u4E2D\u6587 \uFF08\u9999\u6E2F\uFF09":{flagName:"fi fi-hk",langName:"zh",speechLang:"zh-HK",longName:"\u4E2D\u6587",voice:"Google \u7CA4\u8A9E\uFF08\u9999\u6E2F\uFF09"},"\u4E2D\u6587 \uFF08\u81FA\u7063\uFF09":{flagName:"fi fi-tw",langName:"zh",speechLang:"zh-TW",longName:"\u4E2D\u6587",voice:"Google \u570B\u8A9E\uFF08\u81FA\u7063\uFF09"},\uD55C\uAD6D\uC758:{flagName:"fi fi-kr",langName:"ko",speechLang:"ko-KR",longName:"\uD55C\uAD6D\uC758",voice:"Google \uD55C\uAD6D\uC758"},\u65E5\u672C\u8A9E:{flagName:"fi fi-jp",langName:"ja",longName:"\u65E5\u672C\u8A9E",voice:"Google \u65E5\u672C\u8A9E"},"Bahasa Indonesia":{flagName:"fi fi-id",langName:"id",longName:"Bahasa Indonesia",voice:"Google Bahasa Indonesia"}},pt={title:"New Course",assignments:[],courseKey:"-",created:"",updated:"",enrollment:[],coverUrl:J,owner:"-"},yt={id:null,title:"My Assignment",goal:100,points:0,pages:[],created:null,updated:null,coverUrl:J,scores:{}},ue={dummyId:null,langVoiceKey:"Eng-UK-Fem",currentLangLinks:[],pageType:4,pageid:null,pageTitle:"Page Template",guideWords:"",imgIdx:0,imgs:[{url:Z,cap:"Welcome to Reading Edge!"}],pctReplace:15,pageText:"At the heart of Reading Edge is a simple paragraph reconstruction activity in which the student first reads a short paragraph and is then asked to reconstruct it by replacing a random handful of words in their correct places.",pageFontSize:14,canonicalUrl:J,mapCoords:"36.11,-115.17"},vt={resLimit:50,imgLimit:20,pctReplace:15,pageFontSize:14,textColor:"#CCE6FF",secondaryColor:"#666666",accentColor:"#7f7f7f",positiveColor:"#2E8A57",langVoiceKey:"Eng-UK-Fem",langVoices:Object.keys(L)},St={url:Z,cap:"Welcome to Reading Edge!"},Nt=Ne("store",{state:()=>({prod:D(!0),router:Oe(),authenticated:D(!1),subscribed:D(!1),role:D(null),ck:D(null),aid:D(null),pgIdx:D(null),imgIdx:D(null),imgFit:D(!0),autoplay:D(!1),courses:D({}),userSnapshot:D(null),speech:new be,speechInitialized:D(!1),carousel:D(null)}),getters:{currentCourse(e){return this.ck?this.courses[this.ck]:null},currentAssignment(e){return this.ck&&this.aid?this.courses[this.ck].assignments[this.aid]:null},currentPage(e){return this.ck!==null&&this.aid!==null&&this.pgIdx!==null&&this.pgIdx>-1?this.courses[this.ck].assignments[this.aid].pages[this.pgIdx]:null},currentImage(e){if(this.ck!==null&&this.aid!==null&&this.aid>-1&&this.pgIdx!==null&&this.pgIdx>-1&&this.imgIdx!==null)try{return this.courses[this.ck].assignments[this.aid].pages[this.pgIdx].imgs[this.imgIdx]}catch(t){console.log(t,"returning null")}return null},emailKey(e){try{return e.userSnapshot.profile.emailKey}catch{return null}},teaching(e){try{return e.userSnapshot.teaching}catch{}return[]},taking(e){try{return e.userSnapshot.taking}catch{}return[]},logo2(e){return Z},langVoices(e){return L},pageTemplate(e){return ue},pageid(e){try{return this.currentPage.pageId}catch{return null}}},actions:{logout(){this.userSnapshot=null,this.authenticated=!1,this.subscribed=!1,this.role=null,this.courses={},this.ck=this.aid=this.pgIdx=this.imgIdx=null,this.router.push("/")},newImage(){if(this.ck===S&&this.emailKey!=="charlie_at_readingedge_dot_org"){this.notify("Insufficient permissions");return}if(this.checkQuota("image")>=Object.keys(this.userSnapshot.images).length){this.notify("You have reached your quota of images: "+this.checkQuota("image"));return}const e=JSON.parse(JSON.stringify(St));this.currentPage.imgs.push(e)},newCourse(){if(this.ck===S&&this.emailKey!=="charlie_at_readingedge_dot_org"){this.notify("Insufficient permissions");return}if(Object.keys(this.courses).length>=this.checkQuota("course")){this.notify("You have reached your quota of courses: "+this.checkQuota("course"));return}console.log("newCourse");const e=JSON.parse(JSON.stringify(pt)),t=P();let s=0;for(const[i,a]of Object.entries(this.courses))console.log(s,i,a),a.title.indexOf("My Course")>-1&&(s+=1);if(e.title="C-"+s,e.created=t,e.updated=t,e.courseKey=Math.random().toString().slice(2,20),this.ck=e.courseKey,this.aid=null,e.enrollment={},e.assignments={},e.owner=this.userSnapshot.profile.emailKey,this.updateSnapshot("add-teaching",e),this.courses[e.courseKey]=e,this.emailKey!=="charlie_at_readingedge_dot_org"){this.notify("Insufficient permissions to save");return}const n=`courses/${e.courseKey}`;return _(h(d,n),this.courses[e.courseKey]),e.courseKey},loadPage(e){this.pgIdx=e},async refreshVisitors(){console.log("store.refreshVisitors");const e="visitors/",t=h(I());console.log(t),await Y($(t,e)).then(s=>{console.log(s.val())})},async refreshLPs(){console.log("store.refreshLPs");const e="landings/",t=h(I());console.log(t),await Y($(t,e)).then(s=>{console.log(s.val());for(const[n,i]of Object.entries(s.val()))console.log(n,i)})},async loadCourses(e){console.log("loadCourses ",e);const t=h(I());for(const[s,n]of Object.entries(this.courses))delete this.courses[s],console.log(n.title);if(this.courses={},this.role==="teacher"){this.teaching||(this.teaching={});for(const[s,n]of Object.entries(this.teaching)){console.log("k, v ",s,n);const i=`courses/${s}`;await Y($(t,i)).then(a=>{if(a.exists()){const o=a.val();o.enrollment||(o.enrollment={}),o.assignments||(o.assignments={}),this.courses[s]=o;for(const[r,u]of Object.entries(o.assignments))(!u.pages||u.pages==="undefined")&&(console.log("checking for pages ",r),u.pages=[])}else console.log("failed to load course",s,n)})}this.ck=null,this.aid=null}else if(this.role==="student"){this.taking||(this.taking={});for(const[s,n]of Object.entries(this.taking)){console.log("k, v ",s,n);const i=`courses/${s}`;await Y($(t,i)).then(a=>{a.exists()?this.courses[s]=a.val():console.log("failed to load course",s,n)})}}else console.log("No courses loaded b/c no role")},newAssignment(){const e=JSON.parse(JSON.stringify(yt));e.pages=[],e.id=ce();let t=0;for(const[n,i]of Object.entries(this.currentCourse.assignments)){try{i.title.indexOf("My Assignment")>-1&&(t+=1)}catch(a){console.log(a)}console.log(t,n,i)}e.title="A-"+t;const s=P();if(e.created=s,e.updated=s,Object.keys(this.currentCourse.assignments).length>=this.checkQuota("assignment")){this.notify("You have reached your quota of assignments: "+this.checkQuota("assignment"));return}return this.courses[this.ck].assignments[e.id]=e,e.id},newPage(){const e=JSON.parse(JSON.stringify(ue));if(e.dummyId=Math.random(),e.langVoiceKey=this.userSnapshot.preferences.langVoiceKey,e.pctReplace=this.userSnapshot.preferences.pctReplace,this.currentAssignment.pages||(this.currentAssignment.pages=[]),this.currentAssignment.pages.length>=this.checkQuota("page")){this.notify("You have reached your quota of pages: "+this.checkQuota("page"));return}this.currentAssignment.pages.push(e)},createUser(e,t){console.log("createUser",t.currentUser.uid);const s=t.currentUser.email.replace("@","_at_").replace(".","_dot_"),n={uid:t.currentUser.uid,email:t.currentUser.email,emailKey:s,name:t.currentUser.displayName?t.currentUser.displayName:t.currentUser.email,picture:t.currentUser.photoURL,points:0},i={uid:t.currentUser.uid,type:"free",renewalDate:null,verified:t.currentUser.emailVerified,network:e,ip:"0.0.0.0"},a=JSON.parse(JSON.stringify(vt));return this.userSnapshot={account:i,profile:n,teaching:{},taking:{},preferences:a},j("https://jsonip.com/").then(o=>{console.log(o.data.ip),i.ip=o.data.ip,E(h(d,`users/${s}`),this.userSnapshot),console.log("okay done")}),E(h(d,`users/${s}`),this.userSnapshot),this.role="teacher",Object.keys(this.userSnapshot.taking).indexOf(S)>-1?console.log("already have demo taking"):this.enroll(S),Object.keys(this.userSnapshot.teaching).indexOf(S)>-1?console.log("already have demo teaching"):this.updateSnapshot("add-teaching",{courseKey:S}),this.loadCourses(s),this.router.push("/courses"),!0},async goDemo(){const e=h(I());await Y($(e,"users/demo_at_readingedge_dot_org")).then(s=>{if(s.exists())return console.log("checkUser would like to return TRUE now"),this.authenticated=!0,this.role="teacher",this.userSnapshot=s.val(),this.userSnapshot.teaching||(this.userSnapshot.teaching={}),this.userSnapshot.taking||(this.userSnapshot.taking={}),this.loadCourses("demo_at_readingedge_dot_org"),this.router.push("/courses"),!0})},async checkUser(e){console.log(e,d,K),K.currentUser.email==="ccosse2023@gmail.com"&&(K.currentUser.email="demo@readingedge.org");const t=K.currentUser.email.replace("@","_at_").replace(".","_dot_");console.log("emailKey: ",t);const s=h(I()),n=`users/${t}`;await Y($(s,n)).then(async i=>{if(i.exists()){console.log("checkUser would like to return TRUE now"),this.authenticated=!0,this.role="teacher",this.userSnapshot=i.val(),this.userSnapshot.teaching||(this.userSnapshot.teaching={}),this.userSnapshot.taking||(this.userSnapshot.taking={}),this.userSnapshot.bookmarks||(this.userSnapshot.bookmarks={}),this.userSnapshot.images||(this.userSnapshot.images={}),Object.keys(this.userSnapshot.taking).indexOf(S)>-1?console.log("already have demo taking"):this.enroll(S),Object.keys(this.userSnapshot.teaching).indexOf(S)>-1?console.log("already have demo teaching"):this.updateSnapshot("add-teaching",{courseKey:S});const a=ee(te(se,"customers"),$e("email","==",K.currentUser.email)),o=await ne(a);return console.log(o),o.forEach(async r=>{console.log(`${r.id} => ${Object.keys(r.data())}`);const u=ee(te(se,`customers/${r.id}/subscriptions`));(await ne(u)).forEach(c=>{console.log(c.data()),c.data().current_period_end.seconds>Date.now()/1e6?(console.log("This user is SUBSCRIBED!!"),this.subscribed=1):console.log("Ehh",c.data().current_period_end.seconds,Date.now()/1e6)})}),this.loadCourses(t),this.router.push("/courses"),!0}else return console.log("checkUser would like to return FALSE now"),this.createUser(e,K)}).catch(i=>(console.log(i),!1))},logLanding(e){j("https://jsonip.com/").then(t=>{console.log(t.data.ip);const s=t.data.ip,n={pg:e,ip:s};E(h(d,`landings/${P()}-${e}`),n),console.log("landing logged to dbRT")})},logIP(){j("https://jsonip.com/").then(e=>{console.log(e.data.ip);const t=e.data.ip;t!=="2600:8801:2e8f:9800:f9df:31a7:8022:9e9e"&&(E(h(d,`visitors/${P()}`),t),console.log("ip logged to dbRT"))})},updateSnapshot(e,t){if(this.emailKey==="demo_at_readingedge_dot_org"){this.notify("Demo account cannot save");return}if(console.log("updateSnapshot",e,t),e==="save-preferences"){const s=`users/${this.userSnapshot.profile.emailKey}/preferences`;_(h(d,s),this.userSnapshot.preferences),this.notify("preferences saved")}else if(e==="save-profile"){const s=`users/${this.emailKey}/profile`;_(h(d,s),this.userSnapshot.profile),this.notify("profile saved")}else if(e==="add-teaching"){const s=t;if(s.owner=this.userSnapshot.profile.emailKey,this.userSnapshot.teaching||(this.userSnapshot.teaching={}),this.userSnapshot.teaching[s.courseKey]={ck:s.courseKey},s.courseKey===S&&this.emailKey!=="charlie_at_readingedge_dot_org"){this.notify("Insufficient permissions to save");return}const n=`users/${this.userSnapshot.profile.emailKey}/teaching/${s.courseKey}`;_(h(d,n),this.userSnapshot.teaching[s.courseKey]);const i=`courses/${s.courseKey}`;_(h(d,i),s)}},async enroll(e){if(this.ck===S&&this.emailKey!=="charlie_at_readingedge_dot_org"){this.notify("Insufficient permissions");return}console.log("store.getOrCreateEnrollment: ",e);const t={name:this.userSnapshot.profile.name,emailKey:this.emailKey};this.courses||(this.courses={});const s=h(I()),n=`courses/${e}`;await Y($(s,n)).then(i=>{if(i.exists()){if(console.log("Got course:",i.key),this.courses[e]=i.val(),this.courses[e].enrollment||(this.courses[e].enrollment={}),Object.keys(this.courses[e].enrollment)>=this.checkQuota("enrollment")){this.notify("You have reached your enrollment quota for this course "+this.checkQuota("enrollment"));return}this.courses[e].enrollment[this.emailKey]=t;const a=`courses/${e}/enrollment/${this.emailKey}`;_(h(d,a),t);const o={ck:e};this.userSnapshot.taking||(this.userSnapshot.taking={}),this.userSnapshot.taking[e]=o;const r=`users/${this.emailKey}/taking/${e}`;_(h(d,r),o)}else console.log("Course not found: ",e)}).catch(i=>{console.log(i)})},commitCourse(e){if(this.ck===S&&this.emailKey!=="charlie_at_readingedge_dot_org"){this.notify("Insufficient permissions");return}this.courses[e].updated=P();const t=`courses/${e}`;_(h(d,t),this.courses[e]),this.notify("The current course was saved to the cloud.")},commitCurrentAssignment(){if(this.ck===S&&this.emailKey!=="charlie_at_readingedge_dot_org"){this.notify("Insufficient permissions to save");return}this.courses[this.ck].assignments[this.aid].updated=P();for(const t of this.courses[this.ck].assignments[this.aid].pages)t.currentLangLinks||(t.currentLangLinks=[]);const e=`courses/${this.ck}/assignments/${this.aid}`;_(h(d,e),this.courses[this.ck].assignments[this.aid]),this.notify("The current assignment was saved to the cloud")},async initSpeech(){this.speechInitialized||(await this.speech.init({voice:"Google UK English Female"}).then(e=>{console.log(e.voices)}),this.speechInitialized=!0)},async speakText(e){console.log("speakText"),this.speechInitialized||await this.initSpeech(),this.speech.setLanguage(L[this.currentPage.langVoiceKey].langName),console.log("speak setVoice ",L[this.currentPage.langVoiceKey].voice),this.speech.setVoice(L[this.currentPage.langVoiceKey].voice),await this.speech.speak({text:e,queue:!1}).then(()=>{console.log("Success!")}).catch(t=>{console.error("Error in speech",t)})},notify(e){Ye.create({message:e,color:"positive",textColor:"gold",icon:"info",position:"bottom",html:!0})},deleteCourse(e){if(e===S&&this.emailKey!=="charlie_at_readingedge_dot_org"){this.notify("Cannot delete Demo");return}if(this.userSnapshot.teaching[e]){const s=`users/${this.userSnapshot.profile.emailKey}/teaching/${e}`;x(h(d,s),this.userSnapshot.teaching[e]),delete this.userSnapshot.teaching[e]}if(this.userSnapshot.taking[e]){const s=`users/${this.userSnapshot.profile.emailKey}/taking/${e}`;x(h(d,s),this.userSnapshot.taking[e]),delete this.userSnapshot.taking[e]}const t=`courses/${e}`;x(h(d,t),this.courses[e]),delete this.courses[e],this.aid=null,this.ck=null,this.notify("course deleted, changes saved")},deleteAssignment(e,t){this.ck===S&&this.emailKey!=="charlie_at_readingedge_dot_org"&&this.notify("Cannot delete from Demo"),console.log("store deleteAssignment ",e,t);const s=`courses/${e}/assignments/${t}`;x(h(d,s)),delete this.courses[e].assignments[t],this.aid=null,this.notify("assignment deleted, changes saved")},saveImage(){if(this.emailKey==="demo_at_readingedge_dot_org"){this.notify("Insufficient permissions to save");return}if(this.userSnapshot.images||(this.userSnapshot.images={}),Object.keys(this.userSnapshot.images).length>this.checkQuota("image")){this.notify("You have reached your quota<br>for number of images: "+this.checkQuota("image"));return}const e=JSON.parse(JSON.stringify(this.currentPage.imgs[this.imgIdx]));e.tags=[],this.userSnapshot.images[ce()]=e;const t=`users/${this.userSnapshot.profile.emailKey}/images`;_(h(d,t),this.userSnapshot.images),this.notify("Image saved")},checkQuota(e){const t={subscribed:{bookmark:100,image:100,page:50,assignment:30,course:10,enrollment:30},free:{bookmark:10,image:10,page:10,assignment:2,course:2,enrollment:2}};return this.subscribed?t.subscribed[e]:t.free[e]},saveBookmark(){if(this.emailKey==="demo_at_readingedge_dot_org"){this.notify("Insufficient permissions to save");return}if(this.userSnapshot.bookmarks||(this.userSnapshot.bookmarks={}),Object.keys(this.userSnapshot.bookmarks).length>this.checkQuota("bookmark")){this.notify("You have reached your quota<br>for number of bookmarks: "+this.checkQuota("bookmark"));return}this.userSnapshot.bookmarks[this.currentPage.pageTitle]={pageid:this.currentPage.pageid,title:this.currentPage.pageTitle,langVoiceKey:this.currentPage.langVoiceKey,tags:[]};const e=`users/${this.userSnapshot.profile.emailKey}/bookmarks`;_(h(d,e),this.userSnapshot.bookmarks),this.notify("Bookmark saved")},removeBookmark(e){if(this.emailKey==="demo_at_readingedge_dot_org"){this.notify("Insufficient permissions to save");return}const t=`users/${this.userSnapshot.profile.emailKey}/bookmarks/${e}`;x(h(d,t),this.userSnapshot.bookmarks[e]),delete this.userSnapshot.bookmarks[e],this.notify("Bookmark deleted")},removeImage(e){if(this.emailKey==="demo_at_readingedge_dot_org"){this.notify("Insufficient permissions to save");return}console.log("removeImage: ",e);const t=`users/${this.userSnapshot.profile.emailKey}/images/${e}`;x(h(d,t),this.userSnapshot.images[e]),delete this.userSnapshot.images[e],this.notify("Image deleted")},switchRole(){this.authenticated&&(this.role==="teacher"?this.role="student":this.role="teacher"),this.loadCourses(this.emailKey),this.notify("Your role changed to "+this.role)}}});export{Ve as _,_t as a,it as d,st as f,Se as g,Ke as j,Mt as t,Nt as u};
