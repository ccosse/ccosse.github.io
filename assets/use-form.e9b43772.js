import{g as s,h as n,i as r,j as u}from"./index.cf3bcb77.js";var i=s({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const a=n(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>r(e.tag,{class:a.value},u(t.default))}});const m={name:String};function l(e){return n(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function d(e={}){return(t,a,o)=>{t[a](r("input",{class:"hidden"+(o||""),...e.value}))}}function h(e){return n(()=>e.name||e.for)}export{i as Q,l as a,d as b,h as c,m as u};
