import{r as p,i as B,u as T,c as L,o as q,v as N,x as W,d as g,g as $,y as E,e as R,a as h,z as I,f as _,A as V,l as k,B as G,w as Q,C as x,D as J,h as X}from"./index.4bce0168.js";import{g as Y,a as Z,b as ee,c as P}from"./scroll.435a7637.js";function te(){const t=p(!B.value);return t.value===!1&&T(()=>{t.value=!0}),t}const A=typeof ResizeObserver!="undefined",D=A===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var M=L({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(t,{emit:m}){let n=null,e,r={width:-1,height:-1};function a(l){l===!0||t.debounce===0||t.debounce==="0"?c():n===null&&(n=setTimeout(c,t.debounce))}function c(){if(n!==null&&(clearTimeout(n),n=null),e){const{offsetWidth:l,offsetHeight:o}=e;(l!==r.width||o!==r.height)&&(r={width:l,height:o},m("resize",r))}}const{proxy:f}=$();if(A===!0){let l;const o=d=>{e=f.$el.parentNode,e?(l=new ResizeObserver(a),l.observe(e),c()):d!==!0&&W(()=>{o(!0)})};return T(()=>{o()}),q(()=>{n!==null&&clearTimeout(n),l!==void 0&&(l.disconnect!==void 0?l.disconnect():e&&l.unobserve(e))}),N}else{let d=function(){n!==null&&(clearTimeout(n),n=null),o!==void 0&&(o.removeEventListener!==void 0&&o.removeEventListener("resize",a,E.passive),o=void 0)},v=function(){d(),e&&e.contentDocument&&(o=e.contentDocument.defaultView,o.addEventListener("resize",a,E.passive),c())};const l=te();let o;return T(()=>{W(()=>{e=f.$el,e&&v()})}),q(d),f.trigger=a,()=>{if(l.value===!0)return g("object",{style:D.style,tabindex:-1,type:"text/html",data:D.url,"aria-hidden":"true",onLoad:v})}}}}),re=L({name:"QPageContainer",setup(t,{slots:m}){const{proxy:{$q:n}}=$(),e=_(k,R);if(e===R)return console.error("QPageContainer needs to be child of QLayout"),R;V(G,!0);const r=h(()=>{const a={};return e.header.space===!0&&(a.paddingTop=`${e.header.size}px`),e.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${e.right.size}px`),e.footer.space===!0&&(a.paddingBottom=`${e.footer.size}px`),e.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${e.left.size}px`),a});return()=>g("div",{class:"q-page-container",style:r.value},I(m.default))}});const{passive:j}=E,ne=["both","horizontal","vertical"];var ie=L({name:"QScrollObserver",props:{axis:{type:String,validator:t=>ne.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(t,{emit:m}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let e=null,r,a;Q(()=>t.scrollTarget,()=>{l(),f()});function c(){e!==null&&e();const v=Math.max(0,Z(r)),y=ee(r),u={top:v-n.position.top,left:y-n.position.left};if(t.axis==="vertical"&&u.top===0||t.axis==="horizontal"&&u.left===0)return;const w=Math.abs(u.top)>=Math.abs(u.left)?u.top<0?"up":"down":u.left<0?"left":"right";n.position={top:v,left:y},n.directionChanged=n.direction!==w,n.delta=u,n.directionChanged===!0&&(n.direction=w,n.inflectionPoint=n.position),m("scroll",{...n})}function f(){r=Y(a,t.scrollTarget),r.addEventListener("scroll",o,j),o(!0)}function l(){r!==void 0&&(r.removeEventListener("scroll",o,j),r=void 0)}function o(v){if(v===!0||t.debounce===0||t.debounce==="0")c();else if(e===null){const[y,u]=t.debounce?[setTimeout(c,t.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];e=()=>{u(y),e=null}}}const{proxy:d}=$();return Q(()=>d.$q.lang.rtl,c),T(()=>{a=d.$el.parentNode,f()}),q(()=>{e!==null&&e(),l()}),Object.assign(d,{trigger:o,getPosition:()=>n}),N}}),ae=L({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:m,emit:n}){const{proxy:{$q:e}}=$(),r=p(null),a=p(e.screen.height),c=p(t.container===!0?0:e.screen.width),f=p({position:0,direction:"down",inflectionPoint:0}),l=p(0),o=p(B.value===!0?0:P()),d=h(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),v=h(()=>t.container===!1?{minHeight:e.screen.height+"px"}:null),y=h(()=>o.value!==0?{[e.lang.rtl===!0?"left":"right"]:`${o.value}px`}:null),u=h(()=>o.value!==0?{[e.lang.rtl===!0?"right":"left"]:0,[e.lang.rtl===!0?"left":"right"]:`-${o.value}px`,width:`calc(100% + ${o.value}px)`}:null);function w(i){if(t.container===!0||document.qScrollPrevented!==!0){const s={position:i.position.top,direction:i.direction,directionChanged:i.directionChanged,inflectionPoint:i.inflectionPoint.top,delta:i.delta.top};f.value=s,t.onScroll!==void 0&&n("scroll",s)}}function K(i){const{height:s,width:b}=i;let z=!1;a.value!==s&&(z=!0,a.value=s,t.onScrollHeight!==void 0&&n("scrollHeight",s),H()),c.value!==b&&(z=!0,c.value=b),z===!0&&t.onResize!==void 0&&n("resize",i)}function U({height:i}){l.value!==i&&(l.value=i,H())}function H(){if(t.container===!0){const i=a.value>l.value?P():0;o.value!==i&&(o.value=i)}}let S=null;const O={instances:{},view:h(()=>t.view),isContainer:h(()=>t.container),rootRef:r,height:a,containerHeight:l,scrollbarWidth:o,totalWidth:h(()=>c.value+o.value),rows:h(()=>{const i=t.view.toLowerCase().split(" ");return{top:i[0].split(""),middle:i[1].split(""),bottom:i[2].split("")}}),header:x({size:0,offset:0,space:!1}),right:x({size:300,offset:0,space:!1}),footer:x({size:0,offset:0,space:!1}),left:x({size:300,offset:0,space:!1}),scroll:f,animate(){S!==null?clearTimeout(S):document.body.classList.add("q-body--layout-animate"),S=setTimeout(()=>{S=null,document.body.classList.remove("q-body--layout-animate")},155)},update(i,s,b){O[i][s]=b}};if(V(k,O),P()>0){let b=function(){i=null,s.classList.remove("hide-scrollbar")},z=function(){if(i===null){if(s.scrollHeight>e.screen.height)return;s.classList.add("hide-scrollbar")}else clearTimeout(i);i=setTimeout(b,300)},C=function(F){i!==null&&F==="remove"&&(clearTimeout(i),b()),window[`${F}EventListener`]("resize",z)},i=null;const s=document.body;Q(()=>t.container!==!0?"add":"remove",C),t.container!==!0&&C("add"),J(()=>{C("remove")})}return()=>{const i=X(m.default,[g(ie,{onScroll:w}),g(M,{onResize:K})]),s=g("div",{class:d.value,style:v.value,ref:t.container===!0?void 0:r,tabindex:-1},i);return t.container===!0?g("div",{class:"q-layout-container overflow-hidden",ref:r},[g(M,{onResize:U}),g("div",{class:"absolute-full",style:y.value},[g("div",{class:"scroll",style:u.value},[s])])]):s}}});export{M as Q,ae as a,re as b,ie as c};
