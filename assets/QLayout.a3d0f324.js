import{c as L,e as $,a as c,d,t as A,f as j,u as M,g as R,l as O,v as K,w as P,x as N,o as U,y as V,z as D,r as m,i as I,A as x,B as _,h as k}from"./index.858df8a5.js";import{g as G,a as J,b as X,c as C}from"./scroll.3f3a2adb.js";import{Q as E}from"./QResizeObserver.264e9fc0.js";var ne=L({name:"QPageContainer",setup(e,{slots:p}){const{proxy:{$q:n}}=R(),o=j(O,$);if(o===$)return console.error("QPageContainer needs to be child of QLayout"),$;M(K,!0);const r=c(()=>{const a={};return o.header.space===!0&&(a.paddingTop=`${o.header.size}px`),o.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(a.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),a});return()=>d("div",{class:"q-page-container",style:r.value},A(p.default))}});const{passive:F}=D,Y=["both","horizontal","vertical"];var Z=L({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Y.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:p}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,r,a;P(()=>e.scrollTarget,()=>{f(),y()});function u(){o!==null&&o();const v=Math.max(0,J(r)),h=X(r),s={top:v-n.position.top,left:h-n.position.left};if(e.axis==="vertical"&&s.top===0||e.axis==="horizontal"&&s.left===0)return;const w=Math.abs(s.top)>=Math.abs(s.left)?s.top<0?"up":"down":s.left<0?"left":"right";n.position={top:v,left:h},n.directionChanged=n.direction!==w,n.delta=s,n.directionChanged===!0&&(n.direction=w,n.inflectionPoint=n.position),p("scroll",{...n})}function y(){r=G(a,e.scrollTarget),r.addEventListener("scroll",l,F),l(!0)}function f(){r!==void 0&&(r.removeEventListener("scroll",l,F),r=void 0)}function l(v){if(v===!0||e.debounce===0||e.debounce==="0")u();else if(o===null){const[h,s]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];o=()=>{s(h),o=null}}}const{proxy:b}=R();return P(()=>b.$q.lang.rtl,u),N(()=>{a=b.$el.parentNode,y()}),U(()=>{o!==null&&o(),f()}),Object.assign(b,{trigger:l,getPosition:()=>n}),V}}),ie=L({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:p,emit:n}){const{proxy:{$q:o}}=R(),r=m(null),a=m(o.screen.height),u=m(e.container===!0?0:o.screen.width),y=m({position:0,direction:"down",inflectionPoint:0}),f=m(0),l=m(I.value===!0?0:C()),b=c(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),v=c(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),h=c(()=>l.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),s=c(()=>l.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function w(t){if(e.container===!0||document.qScrollPrevented!==!0){const i={position:t.position.top,direction:t.direction,directionChanged:t.directionChanged,inflectionPoint:t.inflectionPoint.top,delta:t.delta.top};y.value=i,e.onScroll!==void 0&&n("scroll",i)}}function W(t){const{height:i,width:g}=t;let S=!1;a.value!==i&&(S=!0,a.value=i,e.onScrollHeight!==void 0&&n("scrollHeight",i),q()),u.value!==g&&(S=!0,u.value=g),S===!0&&e.onResize!==void 0&&n("resize",t)}function B({height:t}){f.value!==t&&(f.value=t,q())}function q(){if(e.container===!0){const t=a.value>f.value?C():0;l.value!==t&&(l.value=t)}}let z=null;const Q={instances:{},view:c(()=>e.view),isContainer:c(()=>e.container),rootRef:r,height:a,containerHeight:f,scrollbarWidth:l,totalWidth:c(()=>u.value+l.value),rows:c(()=>{const t=e.view.toLowerCase().split(" ");return{top:t[0].split(""),middle:t[1].split(""),bottom:t[2].split("")}}),header:x({size:0,offset:0,space:!1}),right:x({size:300,offset:0,space:!1}),footer:x({size:0,offset:0,space:!1}),left:x({size:300,offset:0,space:!1}),scroll:y,animate(){z!==null?clearTimeout(z):document.body.classList.add("q-body--layout-animate"),z=setTimeout(()=>{z=null,document.body.classList.remove("q-body--layout-animate")},155)},update(t,i,g){Q[t][i]=g}};if(M(O,Q),C()>0){let g=function(){t=null,i.classList.remove("hide-scrollbar")},S=function(){if(t===null){if(i.scrollHeight>o.screen.height)return;i.classList.add("hide-scrollbar")}else clearTimeout(t);t=setTimeout(g,300)},T=function(H){t!==null&&H==="remove"&&(clearTimeout(t),g()),window[`${H}EventListener`]("resize",S)},t=null;const i=document.body;P(()=>e.container!==!0?"add":"remove",T),e.container!==!0&&T("add"),_(()=>{T("remove")})}return()=>{const t=k(p.default,[d(Z,{onScroll:w}),d(E,{onResize:W})]),i=d("div",{class:b.value,style:v.value,ref:e.container===!0?void 0:r,tabindex:-1},t);return e.container===!0?d("div",{class:"q-layout-container overflow-hidden",ref:r},[d(E,{onResize:B}),d("div",{class:"absolute-full",style:h.value},[d("div",{class:"scroll",style:s.value},[i])])]):i}}});export{ie as Q,ne as a,Z as b};
