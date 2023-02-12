import{g as ee,r as O,h as f,D as C,l as k,Y as E,T as x,i as H,am as te,z as oe,j as ae,q as ne}from"./index.4ee0ab97.js";import{u as ie,v as j,a as le,p as q,b as se,c as re,r as A,s as ue,d as ce}from"./position-engine.3df5ece9.js";import{c as de,e as fe,a as ve,b as he,g as me,j as ge}from"./use-dark.6e80a5bd.js";import{u as Te,a as ye,b as pe}from"./use-portal.827a1d02.js";import{c as D}from"./selection.de6f0c0c.js";var Ce=ee({name:"QTooltip",inheritAttrs:!1,props:{...ie,...de,...Te,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:j},self:{type:String,default:"top middle",validator:j},offset:{type:Array,default:()=>[14,14],validator:le},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...fe],setup(e,{slots:M,emit:T,attrs:v}){let i,l;const h=oe(),{proxy:{$q:a}}=h,s=O(null),c=O(!1),L=f(()=>q(e.anchor,a.lang.rtl)),Q=f(()=>q(e.self,a.lang.rtl)),W=f(()=>e.persistent!==!0),{registerTick:N,removeTick:R}=ve(),{registerTimeout:d}=he(),{transitionProps:_,transitionStyle:z}=ye(e),{localScrollTarget:y,changeScrollEvent:B,unconfigureScrollTarget:I}=se(e,P),{anchorEl:o,canShow:U,anchorEvents:r}=re({showing:c,configureAnchorEl:K}),{show:V,hide:m}=me({showing:c,canShow:U,handleShow:$,handleHide:F,hideOnRouteChange:W,processOnMount:!0});Object.assign(r,{delayShow:G,delayHide:J});const{showPortal:p,hidePortal:b,renderPortal:Y}=pe(h,s,Z,"tooltip");if(a.platform.is.mobile===!0){const t={anchorEl:o,innerRef:s,onClickOutside(n){return m(n),n.target.classList.contains("q-dialog__backdrop")&&ne(n),!0}},g=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);C(g,n=>{(n===!0?ce:A)(t)}),k(()=>{A(t)})}function $(t){p(),N(()=>{l=new MutationObserver(()=>u()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),P()}),i===void 0&&(i=C(()=>a.screen.width+"|"+a.screen.height+"|"+e.self+"|"+e.anchor+"|"+a.lang.rtl,u)),d(()=>{p(!0),T("show",t)},e.transitionDuration)}function F(t){R(),b(),S(),d(()=>{b(!0),T("hide",t)},e.transitionDuration)}function S(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),I(),E(r,"tooltipTemp")}function u(){const t=s.value;o.value===null||!t||ue({el:t,offset:e.offset,anchorEl:o.value,anchorOrigin:L.value,selfOrigin:Q.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function G(t){if(a.platform.is.mobile===!0){D(),document.body.classList.add("non-selectable");const g=o.value,n=["touchmove","touchcancel","touchend","click"].map(w=>[g,w,"delayHide","passiveCapture"]);x(r,"tooltipTemp",n)}d(()=>{V(t)},e.delay)}function J(t){a.platform.is.mobile===!0&&(E(r,"tooltipTemp"),D(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{m(t)},e.hideDelay)}function K(){if(e.noParentEvent===!0||o.value===null)return;const t=a.platform.is.mobile===!0?[[o.value,"touchstart","delayShow","passive"]]:[[o.value,"mouseenter","delayShow","passive"],[o.value,"mouseleave","delayHide","passive"]];x(r,"anchor",t)}function P(){if(o.value!==null||e.scrollTarget!==void 0){y.value=ge(o.value,e.scrollTarget);const t=e.noParentEvent===!0?u:m;B(y.value,t)}}function X(){return c.value===!0?H("div",{...v,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",v.class],style:[v.style,z.value],role:"tooltip"},ae(M.default)):null}function Z(){return H(te,_.value,X)}return k(S),Object.assign(h.proxy,{updatePosition:u}),Y}});export{Ce as Q};
