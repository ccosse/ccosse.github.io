import{e as o,g as n,h as d,i,k as l}from"./index.4cb229f2.js";import{u,a as c}from"./use-dark.99e1a271.js";var p=o({name:"QList",props:{...u,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const t=l(),r=c(e,t.proxy.$q),s=n(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>d(e.tag,{class:s.value},i(a.default))}});export{p as Q};
