import{h as p,aq as u,r as $,a3 as q,ar as w,i as m,as as C,at as D,au as Q}from"./index.65b17516.js";const A={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function E(e,t=()=>{},n=()=>{}){return{transitionProps:p(()=>{const l=`q-transition--${e.transitionShow||t()}`,a=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${l}-enter-from`,enterActiveClass:`${l}-enter-active`,enterToClass:`${l}-enter-to`,leaveFromClass:`${a}-leave-from`,leaveActiveClass:`${a}-leave-active`,leaveToClass:`${a}-leave-to`}}),transitionStyle:p(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}let o=[],s=[];function F(e){s=s.filter(t=>t!==e)}function S(e){F(e),s.push(e)}function v(e){F(e),s.length===0&&o.length>0&&(o[o.length-1](),o=[])}function M(e){s.length===0?e():o.push(e)}const f=[];function N(e){return f.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function _(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return u(e)}else if(e.__qPortal===!0){const n=u(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=u(e)}while(e!=null)}function O(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=_(e,t);continue}e.hide(t)}e=u(e)}}function G(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function j(e,t,n,l){const a=$(!1),r=$(!1);let i=null;const c={},h=l==="dialog"&&G(e);function b(d){if(d===!0){v(c),r.value=!0;return}r.value=!1,a.value===!1&&(h===!1&&i===null&&(i=D(!1,l)),a.value=!0,f.push(e.proxy),S(c))}function P(d){if(r.value=!1,d!==!0)return;v(c),a.value=!1;const g=f.indexOf(e.proxy);g!==-1&&f.splice(g,1),i!==null&&(Q(i),i=null)}return q(()=>{P(!0)}),e.proxy.__qPortal=!0,w(e.proxy,"contentEl",()=>t.value),{showPortal:b,hidePortal:P,portalIsActive:a,portalIsAccessible:r,renderPortal:()=>h===!0?n():a.value===!0?[m(C,{to:i},n())]:void 0}}export{E as a,j as b,M as c,O as d,N as g,f as p,A as u};
