import{w as M,$ as H,x as T,g as U,C as g}from"./index.c36dfe81.js";const A={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},C=["beforeShow","show","beforeHide","hide"];function P({showing:o,canShow:s,hideOnRouteChange:i,handleShow:d,handleHide:f,processOnMount:x}){const n=U(),{props:l,emit:u,proxy:c}=n;let t;function y(e){o.value===!0?r(e):p(e)}function p(e){if(l.disable===!0||e!==void 0&&e.qAnchorHandled===!0||s!==void 0&&s(e)!==!0)return;const a=l["onUpdate:modelValue"]!==void 0;a===!0&&(u("update:modelValue",!0),t=e,g(()=>{t===e&&(t=void 0)})),(l.modelValue===null||a===!1)&&m(e)}function m(e){o.value!==!0&&(o.value=!0,u("beforeShow",e),d!==void 0?d(e):u("show",e))}function r(e){if(l.disable===!0)return;const a=l["onUpdate:modelValue"]!==void 0;a===!0&&(u("update:modelValue",!1),t=e,g(()=>{t===e&&(t=void 0)})),(l.modelValue===null||a===!1)&&V(e)}function V(e){o.value!==!1&&(o.value=!1,u("beforeHide",e),f!==void 0?f(e):u("hide",e))}function b(e){l.disable===!0&&e===!0?l["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):e===!0!==o.value&&(e===!0?m:V)(t)}M(()=>l.modelValue,b),i!==void 0&&H(n)===!0&&M(()=>c.$route.fullPath,()=>{i.value===!0&&o.value===!0&&r()}),x===!0&&T(()=>{b(l.modelValue)});const v={show:p,hide:r,toggle:y};return Object.assign(c,v),v}export{C as a,P as b,A as u};