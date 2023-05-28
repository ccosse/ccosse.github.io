import{d as i,c as b,a as l,y as B,e as h,r as q,w as s,o as H,at as O,f as S,g as _,l as $}from"./index.9db577c8.js";import{Q as C}from"./QLayout.569f1750.js";const F=i("div",{class:"q-space"});var I=b({name:"QSpace",setup(){return()=>F}}),N=b({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:f}){const c=l(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>i("div",{class:c.value,role:"toolbar"},B(f.default))}}),T=b({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:f,emit:c}){const{proxy:{$q:v}}=_(),a=S($,h);if(a===h)return console.error("QHeader needs to be child of QLayout"),h;const d=q(parseInt(t.heightHint,10)),o=q(!0),m=l(()=>t.reveal===!0||a.view.value.indexOf("H")>-1||v.platform.is.ios&&a.isContainer.value===!0),y=l(()=>{if(t.modelValue!==!0)return 0;if(m.value===!0)return o.value===!0?d.value:0;const e=d.value-a.scroll.value.position;return e>0?e:0}),p=l(()=>t.modelValue!==!0||m.value===!0&&o.value!==!0),Q=l(()=>t.modelValue===!0&&p.value===!0&&t.reveal===!0),w=l(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(p.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),V=l(()=>{const e=a.rows.value.top,u={};return e[0]==="l"&&a.left.space===!0&&(u[v.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),e[2]==="r"&&a.right.space===!0&&(u[v.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),u});function r(e,u){a.update("header",e,u)}function n(e,u){e.value!==u&&(e.value=u)}function z({height:e}){n(d,e),r("size",e)}function x(e){Q.value===!0&&n(o,!0),c("focusin",e)}s(()=>t.modelValue,e=>{r("space",e),n(o,!0),a.animate()}),s(y,e=>{r("offset",e)}),s(()=>t.reveal,e=>{e===!1&&n(o,t.modelValue)}),s(o,e=>{a.animate(),c("reveal",e)}),s(a.scroll,e=>{t.reveal===!0&&n(o,e.direction==="up"||e.position<=t.revealOffset||e.position-e.inflectionPoint<100)});const g={};return a.instances.header=g,t.modelValue===!0&&r("size",d.value),r("space",t.modelValue),r("offset",y.value),H(()=>{a.instances.header===g&&(a.instances.header=void 0,r("size",0),r("offset",0),r("space",!1))}),()=>{const e=O(f.default,[]);return t.elevated===!0&&e.push(i("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(i(C,{debounce:0,onResize:z})),i("header",{class:w.value,style:V.value,onFocusin:x},e)}}});export{I as Q,T as a,N as b};
