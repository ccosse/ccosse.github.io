import{g as o,h as n,i as d,j as i,q as l}from"./index.d7e4ee9f.js";import{u,a as c}from"./use-dark.e487103c.js";var q=o({name:"QList",props:{...u,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const t=l(),s=c(e,t.proxy.$q),r=n(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(s.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>d(e.tag,{class:r.value},i(a.default))}});export{q as Q};
