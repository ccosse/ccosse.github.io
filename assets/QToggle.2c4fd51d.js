import{c as u,a as c,d as o,a9 as s}from"./index.b5df373a.js";import{u as i,a as g,b as m}from"./use-checkbox.32414a83.js";var h=u({name:"QToggle",props:{...i,icon:String,iconColor:String},emits:g,setup(e){function a(n,l){const t=c(()=>(n.value===!0?e.checkedIcon:l.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),r=c(()=>n.value===!0?e.iconColor:null);return()=>[o("div",{class:"q-toggle__track"}),o("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},t.value!==void 0?[o(s,{name:t.value,color:r.value})]:void 0)]}return m("toggle",a)}});export{h as Q};
