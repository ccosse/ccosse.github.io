import{g as u,h as c,i as o,a1 as i}from"./index.6a266d43.js";import{a as s,b as g,c as m}from"./QCheckbox.c1b46556.js";var h=u({name:"QToggle",props:{...s,icon:String,iconColor:String},emits:g,setup(e){function a(n,l){const t=c(()=>(n.value===!0?e.checkedIcon:l.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),r=c(()=>n.value===!0?e.iconColor:null);return()=>[o("div",{class:"q-toggle__track"}),o("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},t.value!==void 0?[o(i,{name:t.value,color:r.value})]:void 0)]}return m("toggle",a)}});export{h as Q};
