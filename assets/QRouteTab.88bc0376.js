import{g as u,W as n,X as i,h as m,v as b}from"./index.e34dbe1b.js";import{u as l,a as c,b as v}from"./QTabs.eb64984f.js";var R=u({name:"QRouteTab",props:{...n,...l},emits:c,setup(e,{slots:t,emit:s}){const a=i({useDisableForRouterLinkProps:!1}),{renderTab:o,$tabs:r}=v(e,t,s,{exact:m(()=>e.exact),...a});return b(()=>`${e.name} | ${e.exact} | ${(a.resolvedLink.value||{}).href}`,()=>{r.verifyRouteModel()}),()=>o(a.linkTag.value,a.linkAttrs.value)}});export{R as Q};
