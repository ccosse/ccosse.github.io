import{c as o,a as d,d as n,u as l,g as u}from"./index.972ee228.js";import{u as i,a as c}from"./use-dark.233a09c9.js";var p=o({name:"QList",props:{...i,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const t=u(),s=c(e,t.proxy.$q),r=d(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(s.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>n(e.tag,{class:r.value},l(a.default))}});export{p as Q};
