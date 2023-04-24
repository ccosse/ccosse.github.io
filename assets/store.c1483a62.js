import{I as ue,J as m,K as le,L as ke,M as _e,N as be,O as Ne,v as _,R as Ie}from"./index.43a60eba.js";import{u as N,r as f,d as y,a as P,b as Y,c as K,e as Q,f as $,h as W,_ as $e,i as ee,j as te,t as se,k as O}from"./firebase.84a31673.js";import{a as Oe}from"./axios.84ae42e4.js";const I=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function _t(e,t,s){return Object.prototype.toString.call(e)==="[object Date]"&&(s=e.getDate(),t=e.getMonth()+1,e=e.getFullYear()),Le(V(e,t,s))}function bt(e,t,s){return ge(Ee(e,t,s))}function Ye(e){return xe(e)===0}function Ke(e,t){return t<=6?31:t<=11||Ye(e)?30:29}function xe(e){const t=I.length;let s=I[0],n,i,a,c,r;if(e<s||e>=I[t-1])throw new Error("Invalid Jalaali year "+e);for(r=1;r<t&&(n=I[r],i=n-s,!(e<n));r+=1)s=n;return c=e-s,i-c<6&&(c=c-i+h(i+4,33)*33),a=M(M(c+1,33)-1,4),a===-1&&(a=4),a}function he(e,t){const s=I.length,n=e+621;let i=-14,a=I[0],c,r,u,p,o;if(e<a||e>=I[s-1])throw new Error("Invalid Jalaali year "+e);for(o=1;o<s&&(c=I[o],r=c-a,!(e<c));o+=1)i=i+h(r,33)*8+h(M(r,33),4),a=c;p=e-a,i=i+h(p,33)*8+h(M(p,33)+3,4),M(r,33)===4&&r-p===4&&(i+=1);const l=h(n,4)-h((h(n,100)+1)*3,4)-150,S=20+i-l;return t||(r-p<6&&(p=p-r+h(r+4,33)*33),u=M(M(p+1,33)-1,4),u===-1&&(u=4)),{leap:u,gy:n,march:S}}function Ee(e,t,s){const n=he(e,!0);return V(n.gy,3,n.march)+(t-1)*31-h(t,7)*(t-7)+s-1}function Le(e){const t=ge(e).gy;let s=t-621,n,i,a;const c=he(s,!1),r=V(t,3,c.march);if(a=e-r,a>=0){if(a<=185)return i=1+h(a,31),n=M(a,31)+1,{jy:s,jm:i,jd:n};a-=186}else s-=1,a+=179,c.leap===1&&(a+=1);return i=7+h(a,30),n=M(a,30)+1,{jy:s,jm:i,jd:n}}function V(e,t,s){let n=h((e+h(t-8,6)+100100)*1461,4)+h(153*M(t+9,12)+2,5)+s-34840408;return n=n-h(h(e+100100+h(t-8,6),100)*3,4)+752,n}function ge(e){let t=4*e+139361631;t=t+h(h(4*e+183187720,146097)*3,4)*4-3908;const s=h(M(t,1461),4)*5+308,n=h(M(s,153),5)+1,i=M(h(s,153),12)+1;return{gy:h(t,1461)-100100+h(8-i,6),gm:i,gd:n}}function h(e,t){return~~(e/t)}function M(e,t){return e-~~(e/t)*t}const de=864e5,Pe=36e5,j=6e4,fe="YYYY-MM-DDTHH:mm:ss.SSSZ",Te=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,ze=/(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,U={};function Ue(e,t){const s="("+t.days.join("|")+")",n=e+s;if(U[n]!==void 0)return U[n];const i="("+t.daysShort.join("|")+")",a="("+t.months.join("|")+")",c="("+t.monthsShort.join("|")+")",r={};let u=0;const p=e.replace(ze,l=>{switch(u++,l){case"YY":return r.YY=u,"(-?\\d{1,2})";case"YYYY":return r.YYYY=u,"(-?\\d{1,4})";case"M":return r.M=u,"(\\d{1,2})";case"MM":return r.M=u,"(\\d{2})";case"MMM":return r.MMM=u,c;case"MMMM":return r.MMMM=u,a;case"D":return r.D=u,"(\\d{1,2})";case"Do":return r.D=u++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return r.D=u,"(\\d{2})";case"H":return r.H=u,"(\\d{1,2})";case"HH":return r.H=u,"(\\d{2})";case"h":return r.h=u,"(\\d{1,2})";case"hh":return r.h=u,"(\\d{2})";case"m":return r.m=u,"(\\d{1,2})";case"mm":return r.m=u,"(\\d{2})";case"s":return r.s=u,"(\\d{1,2})";case"ss":return r.s=u,"(\\d{2})";case"S":return r.S=u,"(\\d{1})";case"SS":return r.S=u,"(\\d{2})";case"SSS":return r.S=u,"(\\d{3})";case"A":return r.A=u,"(AM|PM)";case"a":return r.a=u,"(am|pm)";case"aa":return r.aa=u,"(a\\.m\\.|p\\.m\\.)";case"ddd":return i;case"dddd":return s;case"Q":case"d":case"E":return"(\\d{1})";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"w":return"(\\d{1,2})";case"ww":return"(\\d{2})";case"Z":return r.Z=u,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return r.ZZ=u,"(Z|[+-]\\d{2}\\d{2})";case"X":return r.X=u,"(-?\\d+)";case"x":return r.x=u,"(-?\\d{4,})";default:return u--,l[0]==="["&&(l=l.substring(1,l.length-1)),l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),o={map:r,regex:new RegExp("^"+p)};return U[n]=o,o}function me(e,t){return e!==void 0?e:t!==void 0?t.date:ke.date}function ne(e,t=""){const s=e>0?"-":"+",n=Math.abs(e),i=Math.floor(n/60),a=n%60;return s+m(i)+t+m(a)}function Ce(e,t,s){let n=e.getFullYear(),i=e.getMonth();const a=e.getDate();return t.year!==void 0&&(n+=s*t.year,delete t.year),t.month!==void 0&&(i+=s*t.month,delete t.month),e.setDate(1),e.setMonth(2),e.setFullYear(n),e.setMonth(i),e.setDate(Math.min(a,R(e))),t.date!==void 0&&(e.setDate(e.getDate()+s*t.date),delete t.date),e}function je(e,t,s){const n=t.year!==void 0?t.year:e[`get${s}FullYear`](),i=t.month!==void 0?t.month-1:e[`get${s}Month`](),a=new Date(n,i+1,0).getDate(),c=Math.min(a,t.date!==void 0?t.date:e[`get${s}Date`]());return e[`set${s}Date`](1),e[`set${s}Month`](2),e[`set${s}FullYear`](n),e[`set${s}Month`](i),e[`set${s}Date`](c),delete t.year,delete t.month,delete t.date,e}function A(e,t,s){const n=pe(t),i=new Date(e),a=n.year!==void 0||n.month!==void 0||n.date!==void 0?Ce(i,n,s):i;for(const c in n){const r=_e(c);a[`set${r}`](a[`get${r}`]()+s*n[c])}return a}function pe(e){const t={...e};return e.years!==void 0&&(t.year=e.years,delete t.years),e.months!==void 0&&(t.month=e.months,delete t.months),e.days!==void 0&&(t.date=e.days,delete t.days),e.day!==void 0&&(t.date=e.day,delete t.day),e.hour!==void 0&&(t.hours=e.hour,delete t.hour),e.minute!==void 0&&(t.minutes=e.minute,delete t.minute),e.second!==void 0&&(t.seconds=e.second,delete t.second),e.millisecond!==void 0&&(t.milliseconds=e.millisecond,delete t.millisecond),t}function ye(e,t,s){const n=pe(t),i=s===!0?"UTC":"",a=new Date(e),c=n.year!==void 0||n.month!==void 0||n.date!==void 0?je(a,n,i):a;for(const r in n){const u=r.charAt(0).toUpperCase()+r.slice(1);c[`set${i}${u}`](n[r])}return c}function Fe(e,t,s){const n=He(e,t,s),i=new Date(n.year,n.month===null?null:n.month-1,n.day===null?1:n.day,n.hour,n.minute,n.second,n.millisecond),a=i.getTimezoneOffset();return n.timezoneOffset===null||n.timezoneOffset===a?i:A(i,{minutes:n.timezoneOffset-a},1)}function He(e,t,s,n,i){const a={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(i!==void 0&&Object.assign(a,i),e==null||e===""||typeof e!="string")return a;t===void 0&&(t=fe);const c=me(s,ue.props),r=c.months,u=c.monthsShort,{regex:p,map:o}=Ue(t,c),l=e.match(p);if(l===null)return a;let S="";if(o.X!==void 0||o.x!==void 0){const d=parseInt(l[o.X!==void 0?o.X:o.x],10);if(isNaN(d)===!0||d<0)return a;const k=new Date(d*(o.X!==void 0?1e3:1));a.year=k.getFullYear(),a.month=k.getMonth()+1,a.day=k.getDate(),a.hour=k.getHours(),a.minute=k.getMinutes(),a.second=k.getSeconds(),a.millisecond=k.getMilliseconds()}else{if(o.YYYY!==void 0)a.year=parseInt(l[o.YYYY],10);else if(o.YY!==void 0){const d=parseInt(l[o.YY],10);a.year=d<0?d:2e3+d}if(o.M!==void 0){if(a.month=parseInt(l[o.M],10),a.month<1||a.month>12)return a}else o.MMM!==void 0?a.month=u.indexOf(l[o.MMM])+1:o.MMMM!==void 0&&(a.month=r.indexOf(l[o.MMMM])+1);if(o.D!==void 0){if(a.day=parseInt(l[o.D],10),a.year===null||a.month===null||a.day<1)return a;const d=n!=="persian"?new Date(a.year,a.month,0).getDate():Ke(a.year,a.month);if(a.day>d)return a}o.H!==void 0?a.hour=parseInt(l[o.H],10)%24:o.h!==void 0&&(a.hour=parseInt(l[o.h],10)%12,(o.A&&l[o.A]==="PM"||o.a&&l[o.a]==="pm"||o.aa&&l[o.aa]==="p.m.")&&(a.hour+=12),a.hour=a.hour%24),o.m!==void 0&&(a.minute=parseInt(l[o.m],10)%60),o.s!==void 0&&(a.second=parseInt(l[o.s],10)%60),o.S!==void 0&&(a.millisecond=parseInt(l[o.S],10)*10**(3-l[o.S].length)),(o.Z!==void 0||o.ZZ!==void 0)&&(S=o.Z!==void 0?l[o.Z].replace(":",""):l[o.ZZ],a.timezoneOffset=(S[0]==="+"?-1:1)*(60*S.slice(1,3)+1*S.slice(3,5)))}return a.dateHash=m(a.year,6)+"/"+m(a.month)+"/"+m(a.day),a.timeHash=m(a.hour)+":"+m(a.minute)+":"+m(a.second)+S,a}function Ve(e){return typeof e=="number"?!0:isNaN(Date.parse(e))===!1}function Ae(e,t){return ye(new Date,e,t)}function Re(e){const t=new Date(e).getDay();return t===0?7:t}function F(e){const t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);const s=new Date(t.getFullYear(),0,4);s.setDate(s.getDate()-(s.getDay()+6)%7+3);const n=t.getTimezoneOffset()-s.getTimezoneOffset();t.setHours(t.getHours()-n);const i=(t-s)/(de*7);return 1+Math.floor(i)}function Ge(e){return e.getFullYear()*1e4+e.getMonth()*100+e.getDate()}function C(e,t){const s=new Date(e);return t===!0?Ge(s):s.getTime()}function Be(e,t,s,n={}){const i=C(t,n.onlyDate),a=C(s,n.onlyDate),c=C(e,n.onlyDate);return(c>i||n.inclusiveFrom===!0&&c===i)&&(c<a||n.inclusiveTo===!0&&c===a)}function Ze(e,t){return A(e,t,1)}function Je(e,t){return A(e,t,-1)}function b(e,t,s){const n=new Date(e),i=`set${s===!0?"UTC":""}`;switch(t){case"year":case"years":n[`${i}Month`](0);case"month":case"months":n[`${i}Date`](1);case"day":case"days":case"date":n[`${i}Hours`](0);case"hour":case"hours":n[`${i}Minutes`](0);case"minute":case"minutes":n[`${i}Seconds`](0);case"second":case"seconds":n[`${i}Milliseconds`](0)}return n}function Xe(e,t,s){const n=new Date(e),i=`set${s===!0?"UTC":""}`;switch(t){case"year":case"years":n[`${i}Month`](11);case"month":case"months":n[`${i}Date`](R(n));case"day":case"days":case"date":n[`${i}Hours`](23);case"hour":case"hours":n[`${i}Minutes`](59);case"minute":case"minutes":n[`${i}Seconds`](59);case"second":case"seconds":n[`${i}Milliseconds`](999)}return n}function qe(e){let t=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(s=>{t=Math.max(t,new Date(s))}),t}function Qe(e){let t=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(s=>{t=Math.min(t,new Date(s))}),t}function T(e,t,s){return(e.getTime()-e.getTimezoneOffset()*j-(t.getTime()-t.getTimezoneOffset()*j))/s}function ve(e,t,s="days"){const n=new Date(e),i=new Date(t);switch(s){case"years":case"year":return n.getFullYear()-i.getFullYear();case"months":case"month":return(n.getFullYear()-i.getFullYear())*12+n.getMonth()-i.getMonth();case"days":case"day":case"date":return T(b(n,"day"),b(i,"day"),de);case"hours":case"hour":return T(b(n,"hour"),b(i,"hour"),Pe);case"minutes":case"minute":return T(b(n,"minute"),b(i,"minute"),j);case"seconds":case"second":return T(b(n,"second"),b(i,"second"),1e3)}}function H(e){return ve(e,b(e,"year"),"days")+1}function We(e){return le(e)===!0?"date":typeof e=="number"?"number":"string"}function et(e,t,s){const n=new Date(e);if(t){const i=new Date(t);if(n<i)return i}if(s){const i=new Date(s);if(n>i)return i}return n}function tt(e,t,s){const n=new Date(e),i=new Date(t);if(s===void 0)return n.getTime()===i.getTime();switch(s){case"second":case"seconds":if(n.getSeconds()!==i.getSeconds())return!1;case"minute":case"minutes":if(n.getMinutes()!==i.getMinutes())return!1;case"hour":case"hours":if(n.getHours()!==i.getHours())return!1;case"day":case"days":case"date":if(n.getDate()!==i.getDate())return!1;case"month":case"months":if(n.getMonth()!==i.getMonth())return!1;case"year":case"years":if(n.getFullYear()!==i.getFullYear())return!1;break;default:throw new Error(`date isSameDate unknown unit ${s}`)}return!0}function R(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function ie(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const ae={YY(e,t,s){const n=this.YYYY(e,t,s)%100;return n>=0?m(n):"-"+m(Math.abs(n))},YYYY(e,t,s){return s!=null?s:e.getFullYear()},M(e){return e.getMonth()+1},MM(e){return m(e.getMonth()+1)},MMM(e,t){return t.monthsShort[e.getMonth()]},MMMM(e,t){return t.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return ie(this.Q(e))},D(e){return e.getDate()},Do(e){return ie(e.getDate())},DD(e){return m(e.getDate())},DDD(e){return H(e)},DDDD(e){return m(H(e),3)},d(e){return e.getDay()},dd(e,t){return this.dddd(e,t).slice(0,2)},ddd(e,t){return t.daysShort[e.getDay()]},dddd(e,t){return t.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return F(e)},ww(e){return m(F(e))},H(e){return e.getHours()},HH(e){return m(e.getHours())},h(e){const t=e.getHours();return t===0?12:t>12?t%12:t},hh(e){return m(this.h(e))},m(e){return e.getMinutes()},mm(e){return m(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return m(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return m(Math.floor(e.getMilliseconds()/10))},SSS(e){return m(e.getMilliseconds(),3)},A(e){return this.H(e)<12?"AM":"PM"},a(e){return this.H(e)<12?"am":"pm"},aa(e){return this.H(e)<12?"a.m.":"p.m."},Z(e,t,s,n){const i=n==null?e.getTimezoneOffset():n;return ne(i,":")},ZZ(e,t,s,n){const i=n==null?e.getTimezoneOffset():n;return ne(i)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function st(e,t,s,n,i){if(e!==0&&!e||e===1/0||e===-1/0)return;const a=new Date(e);if(isNaN(a))return;t===void 0&&(t=fe);const c=me(s,ue.props);return t.replace(Te,(r,u)=>r in ae?ae[r](a,c,n,i):u===void 0?r:u.split("\\]").join("]"))}function nt(e){return le(e)===!0?new Date(e.getTime()):e}var it={isValid:Ve,extractDate:Fe,buildDate:Ae,getDayOfWeek:Re,getWeekOfYear:F,isBetweenDates:Be,addToDate:Ze,subtractFromDate:Je,adjustDate:ye,startOfDate:b,endOfDate:Xe,getMaxDate:qe,getMinDate:Qe,getDateDiff:ve,getDayOfYear:H,inferDateFormat:We,getDateBetween:et,isSameDate:tt,daysInMonth:R,formatDate:st,clone:nt},G={},v={};Object.defineProperty(v,"__esModule",{value:!0});v.trim=v.isObject=v.isNil=v.isNan=v.size=v.isString=v.validateLocale=v.splitSentences=void 0;var at=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return t.replace(/\.+/g,".|").replace(/\?/g,"?|").replace(/\!/g,"!|").split("|").map(function(s){return De(s)}).filter(Boolean)};v.splitSentences=at;var rt=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i,ot=function(t){return typeof t!="string"?!1:rt.test(t)};v.validateLocale=ot;var Se=function(t){return typeof t=="string"||t instanceof String};v.isString=Se;var ct=function(t){return t&&Array.isArray(t)&&t.length?t.length:0};v.size=ct;var ut=function(t){return typeof t=="number"&&isNaN(t)};v.isNan=ut;var lt=function(t){return t==null};v.isNil=lt;var ht=function(t){return Object.prototype.toString.call(t)==="[object Object]"};v.isObject=ht;var De=function(t){return Se(t)?t.trim():""};v.trim=De;Object.defineProperty(G,"__esModule",{value:!0});var we=G.default=void 0,g=v;function gt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function re(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function dt(e,t,s){return t&&re(e.prototype,t),s&&re(e,s),e}var ft=function(){function e(){gt(this,e),this.browserSupport="speechSynthesis"in window&&"SpeechSynthesisUtterance"in window,this.synthesisVoice=null}return dt(e,[{key:"init",value:function(){var s=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(function(i,a){s.browserSupport||a("Your browser does not support Speech Synthesis");var c=(0,g.isNil)(n.listeners)?{}:n.listeners,r=(0,g.isNil)(n.splitSentences)?!0:n.splitSentences,u=(0,g.isNil)(n.lang)?void 0:n.lang,p=(0,g.isNil)(n.volume)?1:n.volume,o=(0,g.isNil)(n.rate)?1:n.rate,l=(0,g.isNil)(n.pitch)?1:n.pitch,S=(0,g.isNil)(n.voice)?void 0:n.voice;Object.keys(c).forEach(function(d){var k=c[d],z=function(w){k&&k(w)};d!=="onvoiceschanged"&&(speechSynthesis[d]=z)}),s._loadVoices().then(function(d){c.onvoiceschanged&&c.onvoiceschanged(d),!(0,g.isNil)(u)&&s.setLanguage(u),!(0,g.isNil)(S)&&s.setVoice(S),!(0,g.isNil)(p)&&s.setVolume(p),!(0,g.isNil)(o)&&s.setRate(o),!(0,g.isNil)(l)&&s.setPitch(l),!(0,g.isNil)(r)&&s.setSplitSentences(r),i({voices:d,lang:s.lang,voice:s.voice,volume:s.volume,rate:s.rate,pitch:s.pitch,splitSentences:s.splitSentences,browserSupport:s.browserSupport})}).catch(function(d){a(d)})})}},{key:"_fetchVoices",value:function(){return new Promise(function(s,n){setTimeout(function(){var i=speechSynthesis.getVoices();return(0,g.size)(i)>0?s(i):n("Could not fetch voices")},100)})}},{key:"_loadVoices",value:function(){var s=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10;return this._fetchVoices().catch(function(i){if(n===0)throw i;return s._loadVoices(n-1)})}},{key:"hasBrowserSupport",value:function(){return this.browserSupport}},{key:"setVoice",value:function(s){var n,i=speechSynthesis.getVoices();if((0,g.isString)(s)&&(n=i.find(function(a){return a.name===s})),(0,g.isObject)(s)&&(n=s),n)this.synthesisVoice=n;else throw"Error setting voice. The voice you passed is not valid or the voices have not been loaded yet."}},{key:"setLanguage",value:function(s){if(s=s.replace("_","-"),(0,g.validateLocale)(s))this.lang=s;else throw"Error setting language. Please verify your locale is BCP47 format (http://schneegans.de/lv/?tags=es-FR&format=text)"}},{key:"setVolume",value:function(s){if(s=parseFloat(s),!(0,g.isNan)(s)&&s>=0&&s<=1)this.volume=s;else throw"Error setting volume. Please verify your volume value is a number between 0 and 1."}},{key:"setRate",value:function(s){if(s=parseFloat(s),!(0,g.isNan)(s)&&s>=0&&s<=10)this.rate=s;else throw"Error setting rate. Please verify your volume value is a number between 0 and 10."}},{key:"setPitch",value:function(s){if(s=parseFloat(s),!(0,g.isNan)(s)&&s>=0&&s<=2)this.pitch=s;else throw"Error setting pitch. Please verify your pitch value is a number between 0 and 2."}},{key:"setSplitSentences",value:function(s){this.splitSentences=s}},{key:"speak",value:function(s){var n=this;return new Promise(function(i,a){var c=s.text,r=s.listeners,u=r===void 0?{}:r,p=s.queue,o=p===void 0?!0:p,l=(0,g.trim)(c);(0,g.isNil)(l)&&i(),!o&&n.cancel();var S=[],d=n.splitSentences?(0,g.splitSentences)(l):[l];d.forEach(function(k,z){var J=z===(0,g.size)(d)-1,w=new SpeechSynthesisUtterance;n.synthesisVoice&&(w.voice=n.synthesisVoice),n.lang&&(w.lang=n.lang),n.volume&&(w.volume=n.volume),n.rate&&(w.rate=n.rate),n.pitch&&(w.pitch=n.pitch),w.text=k,Object.keys(u).forEach(function(L){var X=u[L],Me=function(q){X&&X(q),L==="onerror"&&a({utterances:S,lastUtterance:w,error:q}),L==="onend"&&J&&i({utterances:S,lastUtterance:w})};w[L]=Me}),S.push(w),speechSynthesis.speak(w)})})}},{key:"pending",value:function(){return speechSynthesis.pending}},{key:"paused",value:function(){return speechSynthesis.paused}},{key:"speaking",value:function(){return speechSynthesis.speaking}},{key:"pause",value:function(){speechSynthesis.pause()}},{key:"resume",value:function(){speechSynthesis.resume()}},{key:"cancel",value:function(){speechSynthesis.cancel()}}]),e}(),mt=ft;we=G.default=mt;const B="https://readingedgeca.s3.us-west-1.amazonaws.com/static/pub/img/readingedge_nowords.png",Z="https://readingedgeca.s3.us-west-1.amazonaws.com/static/pub/img/reading_edge_200x200.png",D="4610197597210819",oe=()=>Math.random().toString().slice(2,20),x=()=>{const e=Date.now();return it.formatDate(e,"MMDDYY-HH:mm:ss")},E={"Eng-US":{flagName:"fi fi-us",langName:"en",speechLang:"en-US",longName:"English",voice:"Google English US"},"Eng-UK-Fem":{flagName:"fi fi-gb",langName:"en",speechLang:"en-GB",longName:"English",voice:"Google UK English Female"},espa\u00F1ol:{flagName:"fi fi-mx",langName:"es",speechLang:"es-MX",longName:"espa\xF1ol",voice:"Google espa\xF1ol"},fran\u00E7ais:{flagName:"fi fi-fr",langName:"fr",speechLang:"fr-FR",longName:"fran\xE7ais",voice:"Google fran\xE7ais"},Deutsch:{flagName:"fi fi-de",langName:"de",speechLang:"de-DE",longName:"Deutsch",voice:"Google Deutsch"},italiano:{flagName:"fi fi-it",langName:"it",speechLang:"it-IT",longName:"italiano",voice:"Google italiano"},"portugu\xEAs do Brasil":{flagName:"fi fi-br",langName:"pt",speechLang:"pt-BR",longName:"portugu\xEAs",voice:"Google portugu\xEAs do Brasil"},Kiswahili:{flagName:"fi fi-ke",langName:"sw",speechLang:"en-GB",longName:"Kiswahili",voice:"Google UK English Female"},\u0440\u0443\u0441\u0441\u043A\u0438\u0439:{flagName:"fi fi-ru",langName:"ru",speechLang:"ru-RU",longName:"\u0440\u0443\u0441\u0441\u043A\u0438\u0439",voice:"Google \u0440\u0443\u0441\u0441\u043A\u0438\u0439"},\u0E44\u0E17\u0E22:{flagName:"fi fi-th",langName:"th",speechLang:"th-TH",longName:"\u0E44\u0E17\u0E22:",voice:"Google Bahasa Indonesia"},"\u4E2D\u6587 \uFF08\u4E2D\u56FD\u5927\u9646\uFF09":{flagName:"fi fi-cn",langName:"zh",speechLang:"zh-CN",longName:"\u4E2D\u6587",voice:"Google \u666E\u901A\u8BDD\uFF08\u4E2D\u56FD\u5927\u9646\uFF09"},"\u4E2D\u6587 \uFF08\u9999\u6E2F\uFF09":{flagName:"fi fi-hk",langName:"zh",speechLang:"zh-HK",longName:"\u4E2D\u6587",voice:"Google \u7CA4\u8A9E\uFF08\u9999\u6E2F\uFF09"},"\u4E2D\u6587 \uFF08\u81FA\u7063\uFF09":{flagName:"fi fi-tw",langName:"zh",speechLang:"zh-TW",longName:"\u4E2D\u6587",voice:"Google \u570B\u8A9E\uFF08\u81FA\u7063\uFF09"},\uD55C\uAD6D\uC758:{flagName:"fi fi-kr",langName:"ko",speechLang:"ko-KR",longName:"\uD55C\uAD6D\uC758",voice:"Google \uD55C\uAD6D\uC758"},\u65E5\u672C\u8A9E:{flagName:"fi fi-jp",langName:"ja",longName:"\u65E5\u672C\u8A9E",voice:"Google \u65E5\u672C\u8A9E"},"Bahasa Indonesia":{flagName:"fi fi-id",langName:"id",longName:"Bahasa Indonesia",voice:"Google Bahasa Indonesia"}},pt={title:"New Course",assignments:[],courseKey:"-",created:"",updated:"",enrollment:[],coverUrl:Z,owner:"-"},yt={id:null,title:"My Assignment",goal:100,points:0,pages:[],created:null,updated:null,coverUrl:Z,scores:{}},ce={dummyId:null,langVoiceKey:"Eng-UK-Fem",currentLangLinks:[],pageType:4,pageid:null,pageTitle:"Page Template",guideWords:"",imgIdx:0,imgs:[{url:B,cap:"Welcome to Reading Edge!"}],pctReplace:15,pageText:"At the heart of Reading Edge is a simple paragraph reconstruction activity in which the student first reads a short paragraph and is then asked to reconstruct it by replacing a random handful of words in their correct spots.",pageFontSize:14,canonicalUrl:Z,mapCoords:"36.11,-115.17"},vt={resLimit:50,imgLimit:20,pctReplace:15,pageFontSize:14,textColor:"#CCE6FF",secondaryColor:"#666666",accentColor:"#7f7f7f",positiveColor:"#2E8A57",langVoiceKey:"Eng-UK-Fem",langVoices:Object.keys(E)},St={url:B,cap:"Welcome to Reading Edge!"},Nt=be("store",{state:()=>({router:Ne(),authenticated:_(!1),subscribed:_(!1),role:_(null),ck:_(null),aid:_(null),pgIdx:_(null),imgIdx:_(null),imgFit:_(!0),autoplay:_(!1),courses:_({}),userSnapshot:_(null),speech:new we,speechInitialized:_(!1)}),getters:{currentCourse(e){return this.ck?this.courses[this.ck]:null},currentAssignment(e){return this.ck&&this.aid?this.courses[this.ck].assignments[this.aid]:null},currentPage(e){return this.ck!==null&&this.aid!==null&&this.pgIdx!==null&&this.pgIdx>-1?this.courses[this.ck].assignments[this.aid].pages[this.pgIdx]:null},currentImage(e){if(this.ck!==null&&this.aid!==null&&this.aid>-1&&this.pgIdx!==null&&this.pgIdx>-1&&this.imgIdx!==null)try{return this.courses[this.ck].assignments[this.aid].pages[this.pgIdx].imgs[this.imgIdx]}catch(t){console.log(t,"returning null")}return null},emailKey(e){try{return e.userSnapshot.profile.emailKey}catch{return null}},teaching(e){try{return e.userSnapshot.teaching}catch{}return[]},taking(e){try{return e.userSnapshot.taking}catch{}return[]},logo2(e){return B},langVoices(e){return E},pageTemplate(e){return ce},pageid(e){try{return this.currentPage.pageId}catch{return null}}},actions:{logout(){this.userSnapshot=null,this.authenticated=!1,this.subscribed=!1,this.role=null,this.courses={},this.ck=this.aid=this.pgIdx=this.imgIdx=null,this.router.push("/")},newImage(){if(this.ck===D&&this.emailKey!=="charlie_at_readingedge_dot_org"){this.notify("Insufficient permissions");return}const e=JSON.parse(JSON.stringify(St));this.currentPage.imgs.push(e)},newCourse(){if(this.ck===D&&this.emailKey!=="charlie_at_readingedge_dot_org"){this.notify("Insufficient permissions");return}console.log("newCourse");const e=JSON.parse(JSON.stringify(pt)),t=x();let s=0;for(const[i,a]of Object.entries(this.courses))console.log(s,i,a),a.title.indexOf("My Course")>-1&&(s+=1);if(e.title="My Course "+s,e.created=t,e.updated=t,e.courseKey=Math.random().toString().slice(2,20),this.ck=e.courseKey,this.aid=-1,e.enrollment={},e.assignments={},e.owner=this.userSnapshot.profile.emailKey,this.updateSnapshot("add-teaching",e),this.courses[e.courseKey]=e,this.emailKey!=="charlie_at_readingedge_dot_org"){this.notify("Insufficient permissions to save");return}const n=`courses/${e.courseKey}`;return N(f(y,n),this.courses[e.courseKey]),e.courseKey},loadPage(e){this.pgIdx=e},async loadCourses(e){console.log("loadCourses ",e);const t=f(P());for(const[s,n]of Object.entries(this.courses))delete this.courses[s],console.log(n.title);if(this.courses={},this.role==="teacher"){this.teaching||(this.teaching={});for(const[s,n]of Object.entries(this.teaching)){console.log("k, v ",s,n);const i=`courses/${s}`;await Y(K(t,i)).then(a=>{if(a.exists()){const c=a.val();c.enrollment||(c.enrollment={}),c.assignments||(c.assignments={}),this.courses[s]=c;for(const[r,u]of Object.entries(c.assignments))(!u.pages||u.pages==="undefined")&&(console.log("checking for pages ",r),u.pages=[])}else console.log("failed to load course",s,n)})}this.ck=D,this.aid=-1}else if(this.role==="student"){this.taking||(this.taking={});for(const[s,n]of Object.entries(this.taking)){console.log("k, v ",s,n);const i=`courses/${s}`;await Y(K(t,i)).then(a=>{a.exists()?this.courses[s]=a.val():console.log("failed to load course",s,n)})}}else console.log("No courses loaded b/c no role")},newAssignment(){const e=JSON.parse(JSON.stringify(yt));e.pages=[],e.id=oe();let t=0;for(const[n,i]of Object.entries(this.currentCourse.assignments)){try{i.title.indexOf("My Assignment")>-1&&(t+=1)}catch(a){console.log(a)}console.log(t,n,i)}e.title="My Assignment "+t;const s=x();return e.created=s,e.updated=s,this.courses[this.ck].assignments[e.id]=e,this.aid=e.id,e.id},newPage(){const e=JSON.parse(JSON.stringify(ce));e.dummyId=Math.random(),e.langVoiceKey=this.userSnapshot.preferences.langVoiceKey,e.pctReplace=this.userSnapshot.preferences.pctReplace,this.currentAssignment.pages||(this.currentAssignment.pages=[]),this.currentAssignment.pages.push(e)},createUser(e,t){console.log("createUser",t.currentUser.uid);const s=t.currentUser.email.replace("@","_at_").replace(".","_dot_"),n={uid:t.currentUser.uid,email:t.currentUser.email,emailKey:s,name:t.currentUser.displayName?t.currentUser.displayName:t.currentUser.email,picture:t.currentUser.photoURL,points:0},i={uid:t.currentUser.uid,type:"free",renewalDate:null,verified:t.currentUser.emailVerified,network:e,ip:"0.0.0.0"},a=JSON.parse(JSON.stringify(vt));return this.userSnapshot={account:i,profile:n,teaching:{},taking:{},preferences:a},Q(f(y,`users/${s}`),this.userSnapshot),this.role="teacher",this.router.push("/courses"),!0},async goDemo(){const e=f(P());await Y(K(e,"users/demo_at_readingedge_dot_org")).then(s=>{if(s.exists())return console.log("checkUser would like to return TRUE now"),this.authenticated=!0,this.role="teacher",this.userSnapshot=s.val(),this.userSnapshot.teaching||(this.userSnapshot.teaching={}),this.userSnapshot.taking||(this.userSnapshot.taking={}),this.loadCourses("demo_at_readingedge_dot_org"),this.router.push("/courses"),!0})},async checkUser(e){console.log(e,y,$),$.currentUser.email==="ccosse2023@gmail.com"&&($.currentUser.email="demo@readingedge.org");const t=$.currentUser.email.replace("@","_at_").replace(".","_dot_");console.log("emailKey: ",t);const s=f(P()),n=`users/${t}`;await Y(K(s,n)).then(async i=>{if(i.exists()){console.log("checkUser would like to return TRUE now"),this.authenticated=!0,this.role="teacher",this.userSnapshot=i.val(),this.userSnapshot.teaching||(this.userSnapshot.teaching={}),this.userSnapshot.taking||(this.userSnapshot.taking={}),this.userSnapshot.bookmarks||(this.userSnapshot.bookmarks={}),this.userSnapshot.images||(this.userSnapshot.images={}),Object.keys(this.userSnapshot.taking).indexOf(D)>-1?console.log("already have demo taking"):this.enroll(D),Object.keys(this.userSnapshot.teaching).indexOf(D)>-1?console.log("already have demo teaching"):this.updateSnapshot("add-teaching",{courseKey:D});const a=W(ee(te,"customers"),$e("email","==",$.currentUser.email)),c=await se(a);return console.log(c),c.forEach(async r=>{console.log(`${r.id} => ${Object.keys(r.data())}`);const u=W(ee(te,`customers/${r.id}/subscriptions`));(await se(u)).forEach(o=>{console.log(o.data()),o.data().current_period_end.seconds>Date.now()/1e6?(console.log("This user is SUBSCRIBED!!"),this.subscribed=1):console.log("Ehh",o.data().current_period_end.seconds,Date.now()/1e6)})}),this.loadCourses(t),this.router.push("/courses"),!0}else return console.log("checkUser would like to return FALSE now"),this.createUser(e,$)}).catch(i=>(console.log(i),!1))},logIP(){Oe("https://jsonip.com/").then(e=>{console.log(e.data.ip);const t=e.data.ip;Q(f(y,`visitors/${x()}`),t),console.log("ip logged to dbRT")})},updateSnapshot(e,t){if(this.emailKey==="demo_at_readingedge_dot_org"){this.notify("Insufficient permissions to save");return}if(console.log("updateSnapshot",e,t),e==="add-teaching"){const s=t;if(s.owner=this.userSnapshot.profile.emailKey,this.userSnapshot.teaching||(this.userSnapshot.teaching={}),this.userSnapshot.teaching[s.courseKey]={ck:s.courseKey},s.courseKey===D&&this.emailKey!=="charlie_at_readingedge_dot_org"){this.notify("Insufficient permissions to save");return}const n=`users/${this.userSnapshot.profile.emailKey}/teaching/${s.courseKey}`;N(f(y,n),this.userSnapshot.teaching[s.courseKey]);const i=`courses/${s.courseKey}`;N(f(y,i),s)}},async enroll(e){if(this.ck===D&&this.emailKey!=="charlie_at_readingedge_dot_org"){this.notify("Insufficient permissions");return}console.log("store.getOrCreateEnrollment: ",e);const t={name:this.userSnapshot.profile.name,emailKey:this.emailKey};this.courses||(this.courses={});const s=f(P()),n=`courses/${e}`;await Y(K(s,n)).then(i=>{if(i.exists()){console.log("Got course:",i.key),this.courses[e]=i.val(),this.courses[e].enrollment||(this.courses[e].enrollment={}),this.courses[e].enrollment[this.emailKey]=t;const a=`courses/${e}/enrollment/${this.emailKey}`;N(f(y,a),t);const c={ck:e};this.userSnapshot.taking||(this.userSnapshot.taking={}),this.userSnapshot.taking[e]=c;const r=`users/${this.emailKey}/taking/${e}`;N(f(y,r),c)}else console.log("Course not found: ",e)}).catch(i=>{console.log(i)})},commitCourse(e){if(this.ck===D&&this.emailKey!=="charlie_at_readingedge_dot_org"){this.notify("Insufficient permissions");return}this.courses[e].updated=x();const t=`courses/${e}`;N(f(y,t),this.courses[e]),this.notify("The current course was saved to the cloud.")},commitCurrentAssignment(){if(this.ck===D&&this.emailKey!=="charlie_at_readingedge_dot_org"){this.notify("Insufficient permissions to save");return}this.courses[this.ck].assignments[this.aid].updated=x();for(const t of this.courses[this.ck].assignments[this.aid].pages)t.currentLangLinks||(t.currentLangLinks=[]);const e=`courses/${this.ck}/assignments/${this.aid}`;N(f(y,e),this.courses[this.ck].assignments[this.aid]),this.notify("The current assignment was saved to the cloud")},async initSpeech(){this.speechInitialized||(await this.speech.init({voice:"Google UK English Female"}).then(e=>{console.log(e.voices)}),this.speechInitialized=!0)},async speakText(e){console.log("speakText"),this.speechInitialized||await this.initSpeech(),this.speech.setLanguage(E[this.currentPage.langVoiceKey].langName),console.log("speak setVoice ",E[this.currentPage.langVoiceKey].voice),this.speech.setVoice(E[this.currentPage.langVoiceKey].voice),await this.speech.speak({text:e,queue:!1}).then(()=>{console.log("Success!")}).catch(t=>{console.error("Error in speech",t)})},notify(e){Ie.create({message:e,color:"positive",textColor:"gold",icon:"info",position:"bottom",html:!0})},deleteCourse(e){if(e===D&&this.emailKey!=="charlie_at_readingedge_dot_org"){this.notify("Insufficient permissions to save");return}if(this.userSnapshot.teaching[e]){const s=`users/${this.userSnapshot.profile.emailKey}/teaching/${e}`;O(f(y,s),this.userSnapshot.teaching[e]),delete this.userSnapshot.teaching[e]}if(this.userSnapshot.taking[e]){const s=`users/${this.userSnapshot.profile.emailKey}/taking/${e}`;O(f(y,s),this.userSnapshot.taking[e]),delete this.userSnapshot.taking[e]}const t=`courses/${e}`;O(f(y,t),this.courses[e]),delete this.courses[e],this.aid=null,this.ck=null,this.notify("course deleted, changes saved")},deleteAssignment(e,t){if(this.ck===D&&this.emailKey!=="charlie_at_readingedge_dot_org"){this.notify("Insufficient permissions to delete");return}e===D&&this.notify("Cannot delete Assignments from DEMO course (safety)"),console.log("store deleteAssignment ",e,t);const s=`courses/${e}/assignments/${t}`;O(f(y,s)),delete this.courses[e].assignments[t],this.aid=-1,this.notify("assignment deleted, changes saved")},saveImage(){if(this.emailKey==="demo_at_readingedge_dot_org"){this.notify("Insufficient permissions to save");return}this.userSnapshot.images||(this.userSnapshot.images={});const e=JSON.parse(JSON.stringify(this.currentPage.imgs[this.imgIdx]));e.tags=[],this.userSnapshot.images[oe()]=e;const t=`users/${this.userSnapshot.profile.emailKey}/images`;N(f(y,t),this.userSnapshot.images),this.notify("Image saved")},saveBookmark(){if(this.emailKey==="demo_at_readingedge_dot_org"){this.notify("Insufficient permissions to save");return}this.userSnapshot.bookmarks||(this.userSnapshot.bookmarks={}),this.userSnapshot.bookmarks[this.currentPage.pageTitle]={pageid:this.currentPage.pageid,title:this.currentPage.pageTitle,langVoiceKey:this.currentPage.langVoiceKey,tags:[]};const e=`users/${this.userSnapshot.profile.emailKey}/bookmarks`;N(f(y,e),this.userSnapshot.bookmarks),this.notify("Bookmark saved")},removeBookmark(e){if(this.emailKey==="demo_at_readingedge_dot_org"){this.notify("Insufficient permissions to save");return}const t=`users/${this.userSnapshot.profile.emailKey}/bookmarks/${e}`;O(f(y,t),this.userSnapshot.bookmarks[e]),delete this.userSnapshot.bookmarks[e],this.notify("Bookmark deleted")},removeImage(e){if(this.emailKey==="demo_at_readingedge_dot_org"){this.notify("Insufficient permissions to save");return}console.log("removeImage: ",e);const t=`users/${this.userSnapshot.profile.emailKey}/images/${e}`;O(f(y,t),this.userSnapshot.images[e]),delete this.userSnapshot.images[e],this.notify("Image deleted")},switchRole(){this.authenticated&&(this.role==="teacher"?this.role="student":this.role="teacher"),this.loadCourses(this.emailKey),this.notify("Your role changed to "+this.role)}}});export{He as _,bt as a,it as d,st as f,ve as g,Ke as j,_t as t,Nt as u};
