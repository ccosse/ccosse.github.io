import{v as I,g as l,h as s,az as P,B as j,i as F,aA as Q,k as R,aB as d,ak as V,e as D,V as K}from"./index.18233e7a.js";import{a as L,u as N}from"./use-dark.14d6c418.js";import{u as M,b as G}from"./ClosePopup.1dc84c7d.js";function H(a,v){const e=I(null),i=l(()=>a.disable===!0?null:s("span",{ref:e,class:"no-outline",tabindex:-1}));function c(n){const r=v.value;n!==void 0&&n.type.indexOf("key")===0?r!==null&&document.activeElement!==r&&r.contains(document.activeElement)===!0&&r.focus():e.value!==null&&(n===void 0||r!==null&&r.contains(n.target)===!0)&&e.value.focus()}return{refocusTargetEl:i,refocusTarget:c}}var J={xs:30,sm:35,md:40,lg:50,xl:60};const U={...N,...Q,...M,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:a=>a==="tf"||a==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},W=["update:modelValue"];function X(a,v){const{props:e,slots:i,emit:c,proxy:n}=R(),{$q:r}=n,C=L(e,r),k=I(null),{refocusTargetEl:h,refocusTarget:S}=H(e,k),q=P(e,J),f=l(()=>e.val!==void 0&&Array.isArray(e.modelValue)),m=l(()=>{const t=d(e.val);return f.value===!0?e.modelValue.findIndex(u=>d(u)===t):-1}),o=l(()=>f.value===!0?m.value>-1:d(e.modelValue)===d(e.trueValue)),g=l(()=>f.value===!0?m.value===-1:d(e.modelValue)===d(e.falseValue)),p=l(()=>o.value===!1&&g.value===!1),_=l(()=>e.disable===!0?-1:e.tabindex||0),$=l(()=>`q-${a} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(C.value===!0?` q-${a}--dark`:"")+(e.dense===!0?` q-${a}--dense`:"")+(e.leftLabel===!0?" reverse":"")),y=l(()=>{const t=o.value===!0?"truthy":g.value===!0?"falsy":"indet",u=e.color!==void 0&&(e.keepColor===!0||(a==="toggle"?o.value===!0:g.value!==!0))?` text-${e.color}`:"";return`q-${a}__inner relative-position non-selectable q-${a}__inner--${t}${u}`}),B=l(()=>{const t={type:"checkbox"};return e.name!==void 0&&Object.assign(t,{".checked":o.value,"^checked":o.value===!0?"checked":void 0,name:e.name,value:f.value===!0?e.val:e.trueValue}),t}),O=G(B),T=l(()=>{const t={tabindex:_.value,role:a==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":p.value===!0?"mixed":o.value===!0?"true":"false"};return e.disable===!0&&(t["aria-disabled"]="true"),t});function b(t){t!==void 0&&(V(t),S(t)),e.disable!==!0&&c("update:modelValue",w(),t)}function w(){if(f.value===!0){if(o.value===!0){const t=e.modelValue.slice();return t.splice(m.value,1),t}return e.modelValue.concat([e.val])}if(o.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(g.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function A(t){(t.keyCode===13||t.keyCode===32)&&V(t)}function z(t){(t.keyCode===13||t.keyCode===32)&&b(t)}const E=v(o,p);return Object.assign(n,{toggle:b}),()=>{const t=E();e.disable!==!0&&O(t,"unshift",` q-${a}__native absolute q-ma-none q-pa-none`);const u=[s("div",{class:y.value,style:q.value,"aria-hidden":"true"},t)];h.value!==null&&u.push(h.value);const x=e.label!==void 0?j(i.default,[e.label]):F(i.default);return x!==void 0&&u.push(s("div",{class:`q-${a}__label q-anchor--skip`},x)),s("div",{ref:k,class:$.value,...T.value,onClick:b,onKeydown:A,onKeyup:z},u)}}var te=D({name:"QToggle",props:{...U,icon:String,iconColor:String},emits:W,setup(a){function v(e,i){const c=l(()=>(e.value===!0?a.checkedIcon:i.value===!0?a.indeterminateIcon:a.uncheckedIcon)||a.icon),n=l(()=>e.value===!0?a.iconColor:null);return()=>[s("div",{class:"q-toggle__track"}),s("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},c.value!==void 0?[s(K,{name:c.value,color:n.value})]:void 0)]}return X("toggle",v)}});export{te as Q,U as a,W as b,X as c,J as o,H as u};
