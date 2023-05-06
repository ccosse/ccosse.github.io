import{c as R,e as v,r as h,i as L,a as l,w as i,o as S,h as P,d as m,f as k,g as N,l as O,_ as j,j as A,P as C,k as I,m as E,n as g,p as K,q as y,s as M}from"./index.94f37b33.js";import{Q as U,a as D,b as G}from"./QLayout.cf236465.js";import"./scroll.6d597e53.js";var J=R({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(a,{slots:_,emit:d}){const{proxy:{$q:c}}=N(),t=k(O,v);if(t===v)return console.error("QFooter needs to be child of QLayout"),v;const u=h(parseInt(a.heightHint,10)),n=h(!0),p=h(L.value===!0||t.isContainer.value===!0?0:window.innerHeight),f=l(()=>a.reveal===!0||t.view.value.indexOf("F")>-1||c.platform.is.ios&&t.isContainer.value===!0),w=l(()=>t.isContainer.value===!0?t.containerHeight.value:p.value),b=l(()=>{if(a.modelValue!==!0)return 0;if(f.value===!0)return n.value===!0?u.value:0;const e=t.scroll.value.position+w.value+u.value-t.height.value;return e>0?e:0}),x=l(()=>a.modelValue!==!0||f.value===!0&&n.value!==!0),q=l(()=>a.modelValue===!0&&x.value===!0&&a.reveal===!0),z=l(()=>"q-footer q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-bottom"+(a.bordered===!0?" q-footer--bordered":"")+(x.value===!0?" q-footer--hidden":"")+(a.modelValue!==!0?" q-layout--prevent-focus"+(f.value!==!0?" hidden":""):"")),B=l(()=>{const e=t.rows.value.bottom,o={};return e[0]==="l"&&t.left.space===!0&&(o[c.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),e[2]==="r"&&t.right.space===!0&&(o[c.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),o});function r(e,o){t.update("footer",e,o)}function s(e,o){e.value!==o&&(e.value=o)}function F({height:e}){s(u,e),r("size",e)}function H(){if(a.reveal!==!0)return;const{direction:e,position:o,inflectionPoint:$}=t.scroll.value;s(n,e==="up"||o-$<100||t.height.value-w.value-o-u.value<300)}function Q(e){q.value===!0&&s(n,!0),d("focusin",e)}i(()=>a.modelValue,e=>{r("space",e),s(n,!0),t.animate()}),i(b,e=>{r("offset",e)}),i(()=>a.reveal,e=>{e===!1&&s(n,a.modelValue)}),i(n,e=>{t.animate(),d("reveal",e)}),i([u,t.scroll,t.height],H),i(()=>c.screen.height,e=>{t.isContainer.value!==!0&&s(p,e)});const V={};return t.instances.footer=V,a.modelValue===!0&&r("size",u.value),r("space",a.modelValue),r("offset",b.value),S(()=>{t.instances.footer===V&&(t.instances.footer=void 0,r("size",0),r("offset",0),r("space",!1))}),()=>{const e=P(_.default,[m(U,{debounce:0,onResize:F})]);return a.elevated===!0&&e.push(m("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),m("footer",{class:z.value,style:B.value,onFocusin:Q},e)}}});const T=A({name:"SplashLayout",components:{},setup(){return{}},mounted(){C.isActive||C.toggle()}}),W=M("a",{class:"text-grey",href:"mailto:charlie@readingedge.org"},"\xA9 2023 Reading Edge by Asymptopia Software",-1);function X(a,_,d,c,t,u){const n=K("router-view");return I(),E(D,{view:"hHh lpR fFf"},{default:g(()=>[y(J,{class:"bg-dark text-grey text-center"},{default:g(()=>[W]),_:1}),y(G,null,{default:g(()=>[y(n)]),_:1})]),_:1})}var te=j(T,[["render",X]]);export{te as default};
