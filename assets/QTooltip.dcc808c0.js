import{g as ee,r as O,h as f,D as k,l as C,a1 as E,X as x,i as H,am as te,z as oe,j as ae,q as ne}from"./index.b1b5193b.js";import{u as ie,v as q,a as le,p as A,b as se,c as re,r as D,s as ue,d as ce}from"./position-engine.17b12f2c.js";import{c as de,e as fe,a as ve,b as he,g as me,k as ge}from"./use-dark.d7d8326b.js";import{u as ye,a as Te,b as pe}from"./use-portal.bf1b573e.js";import{c as j}from"./selection.24e63d94.js";var ke=ee({name:"QTooltip",inheritAttrs:!1,props:{...ie,...de,...ye,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:q},self:{type:String,default:"top middle",validator:q},offset:{type:Array,default:()=>[14,14],validator:le},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...fe],setup(e,{slots:M,emit:y,attrs:v}){let i,l;const h=oe(),{proxy:{$q:a}}=h,s=O(null),c=O(!1),L=f(()=>A(e.anchor,a.lang.rtl)),Q=f(()=>A(e.self,a.lang.rtl)),W=f(()=>e.persistent!==!0),{registerTick:N,removeTick:R}=ve(),{registerTimeout:d}=he(),{transitionProps:_,transitionStyle:z}=Te(e),{localScrollTarget:T,changeScrollEvent:B,unconfigureScrollTarget:I}=se(e,P),{anchorEl:o,canShow:U,anchorEvents:r}=re({showing:c,configureAnchorEl:K}),{show:V,hide:m}=me({showing:c,canShow:U,handleShow:$,handleHide:F,hideOnRouteChange:W,processOnMount:!0});Object.assign(r,{delayShow:G,delayHide:J});const{showPortal:p,hidePortal:b,renderPortal:X}=pe(h,s,Z,"tooltip");if(a.platform.is.mobile===!0){const t={anchorEl:o,innerRef:s,onClickOutside(n){return m(n),n.target.classList.contains("q-dialog__backdrop")&&ne(n),!0}},g=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);k(g,n=>{(n===!0?ce:D)(t)}),C(()=>{D(t)})}function $(t){p(),N(()=>{l=new MutationObserver(()=>u()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),P()}),i===void 0&&(i=k(()=>a.screen.width+"|"+a.screen.height+"|"+e.self+"|"+e.anchor+"|"+a.lang.rtl,u)),d(()=>{p(!0),y("show",t)},e.transitionDuration)}function F(t){R(),b(),S(),d(()=>{b(!0),y("hide",t)},e.transitionDuration)}function S(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),I(),E(r,"tooltipTemp")}function u(){const t=s.value;o.value===null||!t||ue({el:t,offset:e.offset,anchorEl:o.value,anchorOrigin:L.value,selfOrigin:Q.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function G(t){if(a.platform.is.mobile===!0){j(),document.body.classList.add("non-selectable");const g=o.value,n=["touchmove","touchcancel","touchend","click"].map(w=>[g,w,"delayHide","passiveCapture"]);x(r,"tooltipTemp",n)}d(()=>{V(t)},e.delay)}function J(t){a.platform.is.mobile===!0&&(E(r,"tooltipTemp"),j(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{m(t)},e.hideDelay)}function K(){if(e.noParentEvent===!0||o.value===null)return;const t=a.platform.is.mobile===!0?[[o.value,"touchstart","delayShow","passive"]]:[[o.value,"mouseenter","delayShow","passive"],[o.value,"mouseleave","delayHide","passive"]];x(r,"anchor",t)}function P(){if(o.value!==null||e.scrollTarget!==void 0){T.value=ge(o.value,e.scrollTarget);const t=e.noParentEvent===!0?u:m;B(T.value,t)}}function Y(){return c.value===!0?H("div",{...v,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",v.class],style:[v.style,z.value],role:"tooltip"},ae(M.default)):null}function Z(){return H(te,_.value,Y)}return C(S),Object.assign(h.proxy,{updatePosition:u}),X}});export{ke as Q};
