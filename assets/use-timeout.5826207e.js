import{w as T,$ as H,y as x,g as y,D as g,a0 as D,o as h,a1 as A}from"./index.c3bac22e.js";const I={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},P=["beforeShow","show","beforeHide","hide"];function $({showing:o,canShow:s,hideOnRouteChange:l,handleShow:i,handleHide:n,processOnMount:M}){const d=y(),{props:u,emit:t,proxy:c}=d;let a;function U(e){o.value===!0?f(e):m(e)}function m(e){if(u.disable===!0||e!==void 0&&e.qAnchorHandled===!0||s!==void 0&&s(e)!==!0)return;const r=u["onUpdate:modelValue"]!==void 0;r===!0&&(t("update:modelValue",!0),a=e,g(()=>{a===e&&(a=void 0)})),(u.modelValue===null||r===!1)&&p(e)}function p(e){o.value!==!0&&(o.value=!0,t("beforeShow",e),i!==void 0?i(e):t("show",e))}function f(e){if(u.disable===!0)return;const r=u["onUpdate:modelValue"]!==void 0;r===!0&&(t("update:modelValue",!1),a=e,g(()=>{a===e&&(a=void 0)})),(u.modelValue===null||r===!1)&&V(e)}function V(e){o.value!==!1&&(o.value=!1,t("beforeHide",e),n!==void 0?n(e):t("hide",e))}function b(e){u.disable===!0&&e===!0?u["onUpdate:modelValue"]!==void 0&&t("update:modelValue",!1):e===!0!==o.value&&(e===!0?p:V)(a)}T(()=>u.modelValue,b),l!==void 0&&H(d)===!0&&T(()=>c.$route.fullPath,()=>{l.value===!0&&o.value===!0&&f()}),M===!0&&x(()=>{b(u.modelValue)});const v={show:m,hide:f,toggle:U};return Object.assign(c,v),v}function j(){let o=null;const s=y();function l(){o!==null&&(clearTimeout(o),o=null)}return D(l),h(l),{removeTimeout:l,registerTimeout(i,n){l(),A(s)===!1&&(o=setTimeout(i,n))}}}export{P as a,j as b,$ as c,I as u};
