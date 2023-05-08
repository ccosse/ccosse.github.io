import{u as R,a as Q}from"./use-dark.e174b86d.js";import{c as f,aI as p,aK as A,r as k,a as i,d as v,S as K,Y as F,at as $,g as j,y as _}from"./index.8e5f9338.js";let m,c=0;const a=new Array(256);for(let e=0;e<256;e++)a[e]=(e+256).toString(16).substring(1);const D=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return l=>{const n=new Uint8Array(l);return e.getRandomValues(n),n}}return l=>{const n=[];for(let u=l;u>0;u--)n.push(Math.floor(Math.random()*256));return n}})(),h=4096;function P(){(m===void 0||c+16>h)&&(c=0,m=D(h));const e=Array.prototype.slice.call(m,c,c+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,a[e[0]]+a[e[1]]+a[e[2]]+a[e[3]]+"-"+a[e[4]]+a[e[5]]+"-"+a[e[6]]+a[e[7]]+"-"+a[e[8]]+a[e[9]]+"-"+a[e[10]]+a[e[11]]+a[e[12]]+a[e[13]]+a[e[14]]+a[e[15]]}var U=f({name:"QItem",props:{...R,...p,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:l,emit:n}){const{proxy:{$q:u}}=j(),d=Q(e,u),{hasLink:b,linkAttrs:g,linkClass:x,linkTag:B,navigateOnClick:w}=A(),r=k(null),s=k(null),y=i(()=>e.clickable===!0||b.value===!0||e.tag==="label"),o=i(()=>e.disable!==!0&&y.value===!0),C=i(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(d.value===!0?" q-item--dark":"")+(b.value===!0&&e.active===null?x.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(o.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),I=i(()=>{if(e.insetLevel===void 0)return null;const t=u.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function L(t){o.value===!0&&(s.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===r.value?s.value.focus():document.activeElement===s.value&&r.value.focus()),w(t))}function S(t){if(o.value===!0&&K(t,13)===!0){F(t),t.qKeyEvent=!0;const q=new MouseEvent("click",t);q.qKeyEvent=!0,r.value.dispatchEvent(q)}n("keyup",t)}function E(){const t=$(l.default,[]);return o.value===!0&&t.unshift(v("div",{class:"q-focus-helper",tabindex:-1,ref:s})),t}return()=>{const t={ref:r,class:C.value,style:I.value,role:"listitem",onClick:L,onKeyup:S};return o.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,g.value)):y.value===!0&&(t["aria-disabled"]="true"),v(B.value,t,E())}}}),O=f({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:l}){const n=i(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>v("div",{class:n.value},_(l.default))}}),T=f({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:l}){const n=i(()=>parseInt(e.lines,10)),u=i(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),d=i(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>v("div",{style:d.value,class:u.value},_(l.default))}});export{O as Q,T as a,U as b,P as u};
