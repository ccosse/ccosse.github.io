import{d as e,c as t,a as l,ad as u}from"./index.ec3b7c2a.js";import{u as r,a as b,b as h}from"./use-checkbox.4f03d282.js";const i=e("div",{key:"svg",class:"q-checkbox__bg absolute"},[e("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[e("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),e("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var d=t({name:"QCheckbox",props:r,emits:b,setup(c){function s(a,n){const o=l(()=>(a.value===!0?c.checkedIcon:n.value===!0?c.indeterminateIcon:c.uncheckedIcon)||null);return()=>o.value!==null?[e("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[e(u,{class:"q-checkbox__icon",name:o.value})])]:[i]}return h("checkbox",s)}});export{d as Q};