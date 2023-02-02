import{g as h,h as n,i as l,j as k,z as C,r as I,ae as R,am as f,y as M,ad as N,q as V,x as H}from"./index.e6f62602.js";import{d as S,f as y}from"./use-dark.2392976e.js";var te=h({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(t,{slots:r}){const e=n(()=>`q-card__section q-card__section--${t.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>l(t.tag,{class:e.value},k(r.default))}}),ae=h({name:"QCard",props:{...S,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(t,{slots:r}){const{proxy:{$q:e}}=C(),o=y(t,e),s=n(()=>"q-card"+(o.value===!0?" q-card--dark q-dark":"")+(t.bordered===!0?" q-card--bordered":"")+(t.square===!0?" q-card--square no-border-radius":"")+(t.flat===!0?" q-card--flat no-shadow":""));return()=>l(t.tag,{class:s.value},k(r.default))}});function K(t,r){const e=I(null),o=n(()=>t.disable===!0?null:l("span",{ref:e,class:"no-outline",tabindex:-1}));function s(i){const c=r.value;i!==void 0&&i.type.indexOf("key")===0?c!==null&&document.activeElement!==c&&c.contains(document.activeElement)===!0&&c.focus():e.value!==null&&(i===void 0||c!==null&&c.contains(i.target)===!0)&&e.value.focus()}return{refocusTargetEl:o,refocusTarget:s}}const L={name:String};function G(t={}){return(r,e,o)=>{r[e](l("input",{class:"hidden"+(o||""),...t.value}))}}var J={xs:30,sm:35,md:40,lg:50,xl:60};const U={...S,...N,...L,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:t=>t==="tf"||t==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},W=["update:modelValue"];function X(t,r){const{props:e,slots:o,emit:s,proxy:i}=C(),{$q:c}=i,$=y(e,c),x=I(null),{refocusTargetEl:q,refocusTarget:w}=K(e,x),B=R(e,J),v=n(()=>e.val!==void 0&&Array.isArray(e.modelValue)),b=n(()=>{const a=f(e.val);return v.value===!0?e.modelValue.findIndex(d=>f(d)===a):-1}),u=n(()=>v.value===!0?b.value>-1:f(e.modelValue)===f(e.trueValue)),g=n(()=>v.value===!0?b.value===-1:f(e.modelValue)===f(e.falseValue)),p=n(()=>u.value===!1&&g.value===!1),z=n(()=>e.disable===!0?-1:e.tabindex||0),Q=n(()=>`q-${t} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+($.value===!0?` q-${t}--dark`:"")+(e.dense===!0?` q-${t}--dense`:"")+(e.leftLabel===!0?" reverse":"")),O=n(()=>{const a=u.value===!0?"truthy":g.value===!0?"falsy":"indet",d=e.color!==void 0&&(e.keepColor===!0||(t==="toggle"?u.value===!0:g.value!==!0))?` text-${e.color}`:"";return`q-${t}__inner relative-position non-selectable q-${t}__inner--${a}${d}`}),T=n(()=>{const a={type:"checkbox"};return e.name!==void 0&&Object.assign(a,{".checked":u.value,"^checked":u.value===!0?"checked":void 0,name:e.name,value:v.value===!0?e.val:e.trueValue}),a}),j=G(T),A=n(()=>{const a={tabindex:z.value,role:t==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":p.value===!0?"mixed":u.value===!0?"true":"false"};return e.disable===!0&&(a["aria-disabled"]="true"),a});function m(a){a!==void 0&&(V(a),w(a)),e.disable!==!0&&s("update:modelValue",E(),a)}function E(){if(v.value===!0){if(u.value===!0){const a=e.modelValue.slice();return a.splice(b.value,1),a}return e.modelValue.concat([e.val])}if(u.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(g.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function P(a){(a.keyCode===13||a.keyCode===32)&&V(a)}function D(a){(a.keyCode===13||a.keyCode===32)&&m(a)}const F=r(u,p);return Object.assign(i,{toggle:m}),()=>{const a=F();e.disable!==!0&&j(a,"unshift",` q-${t}__native absolute q-ma-none q-pa-none`);const d=[l("div",{class:O.value,style:B.value,"aria-hidden":"true"},a)];q.value!==null&&d.push(q.value);const _=e.label!==void 0?M(o.default,[e.label]):k(o.default);return _!==void 0&&d.push(l("div",{class:`q-${t}__label q-anchor--skip`},_)),l("div",{ref:x,class:Q.value,...A.value,onClick:m,onKeydown:P,onKeyup:D},d)}}const Y=l("div",{key:"svg",class:"q-checkbox__bg absolute"},[l("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[l("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),l("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var ne=h({name:"QCheckbox",props:U,emits:W,setup(t){function r(e,o){const s=n(()=>(e.value===!0?t.checkedIcon:o.value===!0?t.indeterminateIcon:t.uncheckedIcon)||null);return()=>s.value!==null?[l("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[l(H,{class:"q-checkbox__icon",name:s.value})])]:[Y]}return X("checkbox",r)}});export{te as Q,ae as a,ne as b,K as c,G as d,U as e,W as f,X as g,J as o,L as u};
