import{u as s,a as d}from"./use-dark.3fd686e6.js";import{c as u,a as n,d as c,y as l,g as q}from"./index.a106e176.js";var i=u({name:"QCard",props:{...s,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:r}){const{proxy:{$q:e}}=q(),t=d(a,e),o=n(()=>"q-card"+(t.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>c(a.tag,{class:o.value},l(r.default))}});export{i as Q};