import{h as p,ay as u,r as v,a2 as w,av as m,i as q,az as C,aA as D,aB as Q}from"./index.6573be25.js";const T={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function E(e,t=()=>{},n=()=>{}){return{transitionProps:p(()=>{const i=`q-transition--${e.transitionShow||t()}`,a=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${i}-enter-from`,enterActiveClass:`${i}-enter-active`,enterToClass:`${i}-enter-to`,leaveFromClass:`${a}-leave-from`,leaveActiveClass:`${a}-leave-active`,leaveToClass:`${a}-leave-to`}}),transitionStyle:p(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}let l=[],s=[];function F(e){s=s.filter(t=>t!==e)}function S(e){F(e),s.push(e)}function $(e){F(e),s.length===0&&l.length>0&&(l[l.length-1](),l=[])}function M(e){s.length===0?e():l.push(e)}function N(e){l=l.filter(t=>t!==e)}const f=[];function O(e){return f.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function _(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return u(e)}else if(e.__qPortal===!0){const n=u(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=u(e)}while(e!=null)}function j(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=_(e,t);continue}e.hide(t)}e=u(e)}}function A(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function H(e,t,n,i){const a=v(!1),r=v(!1);let o=null;const c={},h=i==="dialog"&&A(e);function b(d){if(d===!0){$(c),r.value=!0;return}r.value=!1,a.value===!1&&(h===!1&&o===null&&(o=D(!1,i)),a.value=!0,f.push(e.proxy),S(c))}function P(d){if(r.value=!1,d!==!0)return;$(c),a.value=!1;const g=f.indexOf(e.proxy);g!==-1&&f.splice(g,1),o!==null&&(Q(o),o=null)}return w(()=>{P(!0)}),e.proxy.__qPortal=!0,m(e.proxy,"contentEl",()=>t.value),{showPortal:b,hidePortal:P,portalIsActive:a,portalIsAccessible:r,renderPortal:()=>h===!0?n():a.value===!0?[q(C,{to:o},n())]:void 0}}export{E as a,H as b,_ as c,M as d,j as e,O as g,f as p,N as r,T as u};
