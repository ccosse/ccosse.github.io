import{c as k,e as v,r as h,i as L,a as s,w as i,o as P,h as N,d as m,f as O,g as j,l as A,_ as I,j as M,P as C,k as T,m as E,n as g,p as K,q as _,s as q,t as z}from"./index.6c22e3f7.js";import{Q as U,a as D,b as G}from"./QLayout.2c74afd6.js";import"./scroll.2d543e3c.js";var J=k({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(a,{slots:y,emit:d}){const{proxy:{$q:c}}=j(),t=O(A,v);if(t===v)return console.error("QFooter needs to be child of QLayout"),v;const u=h(parseInt(a.heightHint,10)),r=h(!0),p=h(L.value===!0||t.isContainer.value===!0?0:window.innerHeight),f=s(()=>a.reveal===!0||t.view.value.indexOf("F")>-1||c.platform.is.ios&&t.isContainer.value===!0),b=s(()=>t.isContainer.value===!0?t.containerHeight.value:p.value),w=s(()=>{if(a.modelValue!==!0)return 0;if(f.value===!0)return r.value===!0?u.value:0;const e=t.scroll.value.position+b.value+u.value-t.height.value;return e>0?e:0}),x=s(()=>a.modelValue!==!0||f.value===!0&&r.value!==!0),B=s(()=>a.modelValue===!0&&x.value===!0&&a.reveal===!0),F=s(()=>"q-footer q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-bottom"+(a.bordered===!0?" q-footer--bordered":"")+(x.value===!0?" q-footer--hidden":"")+(a.modelValue!==!0?" q-layout--prevent-focus"+(f.value!==!0?" hidden":""):"")),H=s(()=>{const e=t.rows.value.bottom,o={};return e[0]==="l"&&t.left.space===!0&&(o[c.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),e[2]==="r"&&t.right.space===!0&&(o[c.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),o});function n(e,o){t.update("footer",e,o)}function l(e,o){e.value!==o&&(e.value=o)}function Q({height:e}){l(u,e),n("size",e)}function $(){if(a.reveal!==!0)return;const{direction:e,position:o,inflectionPoint:S}=t.scroll.value;l(r,e==="up"||o-S<100||t.height.value-b.value-o-u.value<300)}function R(e){B.value===!0&&l(r,!0),d("focusin",e)}i(()=>a.modelValue,e=>{n("space",e),l(r,!0),t.animate()}),i(w,e=>{n("offset",e)}),i(()=>a.reveal,e=>{e===!1&&l(r,a.modelValue)}),i(r,e=>{t.animate(),d("reveal",e)}),i([u,t.scroll,t.height],$),i(()=>c.screen.height,e=>{t.isContainer.value!==!0&&l(p,e)});const V={};return t.instances.footer=V,a.modelValue===!0&&n("size",u.value),n("space",a.modelValue),n("offset",w.value),P(()=>{t.instances.footer===V&&(t.instances.footer=void 0,n("size",0),n("offset",0),n("space",!1))}),()=>{const e=N(y.default,[m(U,{debounce:0,onResize:Q})]);return a.elevated===!0&&e.push(m("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),m("footer",{class:F.value,style:H.value,onFocusin:R},e)}}});const W=M({name:"SplashLayout",components:{},setup(){return{}},mounted(){C.isActive||C.toggle()}}),X=z("a",{class:"text-grey",target:"_blank",href:"https://ccosse.github.io/TuxMathScrabble-2015"},"Asymptopia",-1),Y=z("a",{class:"text-grey",target:"_blank",href:"https://ccosse.github.io/colormyworld"},"Software",-1);function Z(a,y,d,c,t,u){const r=K("router-view");return T(),E(D,{view:"hHh lpR fFf"},{default:g(()=>[_(J,{class:"bg-dark text-grey text-center"},{default:g(()=>[q(" Reading Edge by "),X,q(),Y]),_:1}),_(G,null,{default:g(()=>[_(r)]),_:1})]),_:1})}var oe=I(W,[["render",Z]]);export{oe as default};
