import{c as u,a0 as n,a1 as i,a as m,u as b}from"./index.c828c6c3.js";import{u as c,a as l,b as T}from"./QTabs.776992bb.js";var R=u({name:"QRouteTab",props:{...n,...c},emits:l,setup(e,{slots:t,emit:s}){const a=i({useDisableForRouterLinkProps:!1}),{renderTab:o,$tabs:r}=T(e,t,s,{exact:m(()=>e.exact),...a});return b(()=>`${e.name} | ${e.exact} | ${(a.resolvedLink.value||{}).href}`,()=>{r.verifyRouteModel()}),()=>o(a.linkTag.value,a.linkAttrs.value)}});export{R as Q};
