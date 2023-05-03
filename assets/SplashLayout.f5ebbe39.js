import{c as L,e as v,r as h,i as R,a as l,w as i,o as P,h as S,d as m,f as k,g as I,l as N,_ as O,j,P as V,k as A,m as K,n as g,p as M,q as _,s as U}from"./index.80d80d4a.js";import{Q as D}from"./QResizeObserver.ecbfd009.js";import{Q as E,a as G}from"./QLayout.048c7c01.js";import"./scroll.c5b932c5.js";var J=L({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(a,{slots:y,emit:d}){const{proxy:{$q:c}}=I(),t=k(N,v);if(t===v)return console.error("QFooter needs to be child of QLayout"),v;const u=h(parseInt(a.heightHint,10)),n=h(!0),p=h(R.value===!0||t.isContainer.value===!0?0:window.innerHeight),f=l(()=>a.reveal===!0||t.view.value.indexOf("F")>-1||c.platform.is.ios&&t.isContainer.value===!0),w=l(()=>t.isContainer.value===!0?t.containerHeight.value:p.value),x=l(()=>{if(a.modelValue!==!0)return 0;if(f.value===!0)return n.value===!0?u.value:0;const e=t.scroll.value.position+w.value+u.value-t.height.value;return e>0?e:0}),b=l(()=>a.modelValue!==!0||f.value===!0&&n.value!==!0),Q=l(()=>a.modelValue===!0&&b.value===!0&&a.reveal===!0),q=l(()=>"q-footer q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-bottom"+(a.bordered===!0?" q-footer--bordered":"")+(b.value===!0?" q-footer--hidden":"")+(a.modelValue!==!0?" q-layout--prevent-focus"+(f.value!==!0?" hidden":""):"")),z=l(()=>{const e=t.rows.value.bottom,o={};return e[0]==="l"&&t.left.space===!0&&(o[c.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),e[2]==="r"&&t.right.space===!0&&(o[c.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),o});function r(e,o){t.update("footer",e,o)}function s(e,o){e.value!==o&&(e.value=o)}function B({height:e}){s(u,e),r("size",e)}function F(){if(a.reveal!==!0)return;const{direction:e,position:o,inflectionPoint:$}=t.scroll.value;s(n,e==="up"||o-$<100||t.height.value-w.value-o-u.value<300)}function H(e){Q.value===!0&&s(n,!0),d("focusin",e)}i(()=>a.modelValue,e=>{r("space",e),s(n,!0),t.animate()}),i(x,e=>{r("offset",e)}),i(()=>a.reveal,e=>{e===!1&&s(n,a.modelValue)}),i(n,e=>{t.animate(),d("reveal",e)}),i([u,t.scroll,t.height],F),i(()=>c.screen.height,e=>{t.isContainer.value!==!0&&s(p,e)});const C={};return t.instances.footer=C,a.modelValue===!0&&r("size",u.value),r("space",a.modelValue),r("offset",x.value),P(()=>{t.instances.footer===C&&(t.instances.footer=void 0,r("size",0),r("offset",0),r("space",!1))}),()=>{const e=S(y.default,[m(D,{debounce:0,onResize:B})]);return a.elevated===!0&&e.push(m("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),m("footer",{class:q.value,style:z.value,onFocusin:H},e)}}});const T=j({name:"SplashLayout",components:{},setup(){return{}},mounted(){V.isActive||V.toggle()}}),W=U("a",{class:"text-grey",href:"mailto:charlie@readingedge.org"},"Questions? Contact Info",-1);function X(a,y,d,c,t,u){const n=M("router-view");return A(),K(E,{view:"hHh lpR fFf"},{default:g(()=>[_(J,{class:"bg-dark text-grey text-center"},{default:g(()=>[W]),_:1}),_(G,null,{default:g(()=>[_(n)]),_:1})]),_:1})}var ae=O(T,[["render",X]]);export{ae as default};
