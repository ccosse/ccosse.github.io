import{r as H,S as fe,T as N,v as he,U as S,w as p,t as me,o as E,g as G,V as O,x as q,W as ve,c as ge,a as w,d as Q,X as pe,y as xe,Y as be}from"./index.ff5b8f17.js";import{c as z}from"./selection.55dd30f8.js";import{u as ye,a as Te,b as we}from"./use-model-toggle.08c2e0d2.js";import{p as I,u as He,a as Se,b as Ee,c as Ce}from"./use-tick.5b18708d.js";import{u as We}from"./use-timeout.40e1dc52.js";import{c as Me,g as Le}from"./scroll.fa97f955.js";const ke={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Pe({showing:e,avoidEmit:n,configureAnchorEl:o}){const{props:t,proxy:l,emit:u}=G(),i=H(null);let s=null;function c(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const r={};o===void 0&&(Object.assign(r,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){fe(a,13)===!0&&r.toggle(a)},contextClick(a){l.hide(a),N(a),he(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:N,mobileTouch(a){if(r.mobileCleanup(a),c(a)!==!0)return;l.hide(a),i.value.classList.add("non-selectable");const h=a.target;S(r,"anchor",[[h,"touchmove","mobileCleanup","passive"],[h,"touchend","mobileCleanup","passive"],[h,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),s=setTimeout(()=>{s=null,l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),s!==null&&(clearTimeout(s),s=null),e.value===!0&&a!==void 0&&z()}}),o=function(a=t.contextMenu){if(t.noParentEvent===!0||i.value===null)return;let h;a===!0?l.$q.platform.is.mobile===!0?h=[[i.value,"touchstart","mobileTouch","passive"]]:h=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:h=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],S(r,"anchor",h)});function d(){O(r,"anchor")}function M(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;o()}function y(){if(t.target===!1||t.target===""||l.$el.parentNode===null)i.value=null;else if(t.target===!0)M(l.$el.parentNode);else{let a=t.target;if(typeof t.target=="string")try{a=document.querySelector(t.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,o()):(i.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return p(()=>t.contextMenu,a=>{i.value!==null&&(d(),o(a))}),p(()=>t.target,()=>{i.value!==null&&d(),y()}),p(()=>t.noParentEvent,a=>{i.value!==null&&(a===!0?d():o())}),me(()=>{y(),n!==!0&&t.modelValue===!0&&i.value===null&&u("update:modelValue",!1)}),E(()=>{s!==null&&clearTimeout(s),d()}),{anchorEl:i,canShow:c,anchorEvents:r}}function Oe(e,n){const o=H(null);let t;function l(s,c){const r=`${c!==void 0?"add":"remove"}EventListener`,d=c!==void 0?c:t;s!==window&&s[r]("scroll",d,q.passive),window[r]("scroll",d,q.passive),t=c}function u(){o.value!==null&&(l(o.value),o.value=null)}const i=p(()=>e.noParentEvent,()=>{o.value!==null&&(u(),n())});return E(i),{localScrollTarget:o,unconfigureScrollTarget:u,changeScrollEvent:l}}const{notPassiveCapture:C}=q,g=[];function W(e){const n=e.target;if(n===void 0||n.nodeType===8||n.classList.contains("no-pointer-events")===!0)return;let o=I.length-1;for(;o>=0;){const t=I[o].$;if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;o--}for(let t=g.length-1;t>=0;t--){const l=g[t];if((l.anchorEl.value===null||l.anchorEl.value.contains(n)===!1)&&(n===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(n)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function qe(e){g.push(e),g.length===1&&(document.addEventListener("mousedown",W,C),document.addEventListener("touchstart",W,C))}function K(e){const n=g.findIndex(o=>o===e);n>-1&&(g.splice(n,1),g.length===0&&(document.removeEventListener("mousedown",W,C),document.removeEventListener("touchstart",W,C)))}let X,Y;function U(e){const n=e.split(" ");return n.length!==2?!1:["top","center","bottom"].includes(n[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(n[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function ze(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const A={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{A[`${e}#ltr`]=e,A[`${e}#rtl`]=e});function _(e,n){const o=e.split(" ");return{vertical:o[0],horizontal:A[`${o[1]}#${n===!0?"rtl":"ltr"}`]}}function Ae(e,n){let{top:o,left:t,right:l,bottom:u,width:i,height:s}=e.getBoundingClientRect();return n!==void 0&&(o-=n[1],t-=n[0],u+=n[1],l+=n[0],i+=n[0],s+=n[1]),{top:o,bottom:u,height:s,left:t,right:l,width:i,middle:t+(l-t)/2,center:o+(u-o)/2}}function $e(e,n,o){let{top:t,left:l}=e.getBoundingClientRect();return t+=n.top,l+=n.left,o!==void 0&&(t+=o[1],l+=o[0]),{top:t,bottom:t+1,height:1,left:l,right:l+1,width:1,middle:l,center:t}}function je(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function F(e,n,o){return{top:e[o.anchorOrigin.vertical]-n[o.selfOrigin.vertical],left:e[o.anchorOrigin.horizontal]-n[o.selfOrigin.horizontal]}}function Be(e){if(ve.is.ios===!0&&window.visualViewport!==void 0){const s=document.body.style,{offsetLeft:c,offsetTop:r}=window.visualViewport;c!==X&&(s.setProperty("--q-pe-left",c+"px"),X=c),r!==Y&&(s.setProperty("--q-pe-top",r+"px"),Y=r)}const{scrollLeft:n,scrollTop:o}=e.el,t=e.absoluteOffset===void 0?Ae(e.anchorEl,e.cover===!0?[0,0]:e.offset):$e(e.anchorEl,e.absoluteOffset,e.offset);let l={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(l.minWidth=t.width+"px",e.cover===!0&&(l.minHeight=t.height+"px")),Object.assign(e.el.style,l);const u=je(e.el);let i=F(t,u,e);if(e.absoluteOffset===void 0||e.offset===void 0)P(i,t,u,e.anchorOrigin,e.selfOrigin);else{const{top:s,left:c}=i;P(i,t,u,e.anchorOrigin,e.selfOrigin);let r=!1;if(i.top!==s){r=!0;const d=2*e.offset[1];t.center=t.top-=d,t.bottom-=d+2}if(i.left!==c){r=!0;const d=2*e.offset[0];t.middle=t.left-=d,t.right-=d+2}r===!0&&(i=F(t,u,e),P(i,t,u,e.anchorOrigin,e.selfOrigin))}l={top:i.top+"px",left:i.left+"px"},i.maxHeight!==void 0&&(l.maxHeight=i.maxHeight+"px",t.height>i.maxHeight&&(l.minHeight=l.maxHeight)),i.maxWidth!==void 0&&(l.maxWidth=i.maxWidth+"px",t.width>i.maxWidth&&(l.minWidth=l.maxWidth)),Object.assign(e.el.style,l),e.el.scrollTop!==o&&(e.el.scrollTop=o),e.el.scrollLeft!==n&&(e.el.scrollLeft=n)}function P(e,n,o,t,l){const u=o.bottom,i=o.right,s=Me(),c=window.innerHeight-s,r=document.body.clientWidth;if(e.top<0||e.top+u>c)if(l.vertical==="center")e.top=n[t.vertical]>c/2?Math.max(0,c-u):0,e.maxHeight=Math.min(u,c);else if(n[t.vertical]>c/2){const d=Math.min(c,t.vertical==="center"?n.center:t.vertical===l.vertical?n.bottom:n.top);e.maxHeight=Math.min(u,d),e.top=Math.max(0,d-u)}else e.top=Math.max(0,t.vertical==="center"?n.center:t.vertical===l.vertical?n.top:n.bottom),e.maxHeight=Math.min(u,c-e.top);if(e.left<0||e.left+i>r)if(e.maxWidth=Math.min(i,r),l.horizontal==="middle")e.left=n[t.horizontal]>r/2?Math.max(0,r-i):0;else if(n[t.horizontal]>r/2){const d=Math.min(r,t.horizontal==="middle"?n.middle:t.horizontal===l.horizontal?n.right:n.left);e.maxWidth=Math.min(i,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?n.middle:t.horizontal===l.horizontal?n.left:n.right),e.maxWidth=Math.min(i,r-e.left)}var Ke=ge({name:"QTooltip",inheritAttrs:!1,props:{...ke,...ye,...He,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:U},self:{type:String,default:"top middle",validator:U},offset:{type:Array,default:()=>[14,14],validator:ze},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...Te],setup(e,{slots:n,emit:o,attrs:t}){let l,u;const i=G(),{proxy:{$q:s}}=i,c=H(null),r=H(!1),d=w(()=>_(e.anchor,s.lang.rtl)),M=w(()=>_(e.self,s.lang.rtl)),y=w(()=>e.persistent!==!0),{registerTick:a,removeTick:h}=Se(),{registerTimeout:T}=We(),{transitionProps:J,transitionStyle:Z}=Ee(e),{localScrollTarget:$,changeScrollEvent:ee,unconfigureScrollTarget:te}=Oe(e,R),{anchorEl:m,canShow:ne,anchorEvents:x}=Pe({showing:r,configureAnchorEl:ue}),{show:le,hide:L}=we({showing:r,canShow:ne,handleShow:oe,handleHide:ae,hideOnRouteChange:y,processOnMount:!0});Object.assign(x,{delayShow:re,delayHide:se});const{showPortal:j,hidePortal:B,renderPortal:ie}=Ce(i,c,de,"tooltip");if(s.platform.is.mobile===!0){const f={anchorEl:m,innerRef:c,onClickOutside(v){return L(v),v.target.classList.contains("q-dialog__backdrop")&&be(v),!0}},k=w(()=>e.modelValue===null&&e.persistent!==!0&&r.value===!0);p(k,v=>{(v===!0?qe:K)(f)}),E(()=>{K(f)})}function oe(f){j(),a(()=>{u=new MutationObserver(()=>b()),u.observe(c.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),b(),R()}),l===void 0&&(l=p(()=>s.screen.width+"|"+s.screen.height+"|"+e.self+"|"+e.anchor+"|"+s.lang.rtl,b)),T(()=>{j(!0),o("show",f)},e.transitionDuration)}function ae(f){h(),B(),D(),T(()=>{B(!0),o("hide",f)},e.transitionDuration)}function D(){u!==void 0&&(u.disconnect(),u=void 0),l!==void 0&&(l(),l=void 0),te(),O(x,"tooltipTemp")}function b(){const f=c.value;m.value===null||!f||Be({el:f,offset:e.offset,anchorEl:m.value,anchorOrigin:d.value,selfOrigin:M.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function re(f){if(s.platform.is.mobile===!0){z(),document.body.classList.add("non-selectable");const k=m.value,v=["touchmove","touchcancel","touchend","click"].map(V=>[k,V,"delayHide","passiveCapture"]);S(x,"tooltipTemp",v)}T(()=>{le(f)},e.delay)}function se(f){s.platform.is.mobile===!0&&(O(x,"tooltipTemp"),z(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),T(()=>{L(f)},e.hideDelay)}function ue(){if(e.noParentEvent===!0||m.value===null)return;const f=s.platform.is.mobile===!0?[[m.value,"touchstart","delayShow","passive"]]:[[m.value,"mouseenter","delayShow","passive"],[m.value,"mouseleave","delayHide","passive"]];S(x,"anchor",f)}function R(){if(m.value!==null||e.scrollTarget!==void 0){$.value=Le(m.value,e.scrollTarget);const f=e.noParentEvent===!0?b:L;ee($.value,f)}}function ce(){return r.value===!0?Q("div",{...t,ref:c,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",t.class],style:[t.style,Z.value],role:"tooltip"},xe(n.default)):null}function de(){return Q(pe,J.value,ce)}return E(D),Object.assign(i.proxy,{updatePosition:b}),ie}});export{Ke as Q,ze as a,Oe as b,Pe as c,qe as d,_ as p,K as r,Be as s,ke as u,U as v};
