import{u as d,a as s}from"./use-dark.1f9ef394.js";import{c as u,a as n,h as c,d as l,y as q}from"./index.503ca5c1.js";var i=u({name:"QCard",props:{...d,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:r}){const{proxy:{$q:e}}=q(),t=s(a,e),o=n(()=>"q-card"+(t.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>c(a.tag,{class:o.value},l(r.default))}});export{i as Q};
