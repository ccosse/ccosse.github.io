import{_ as l,j as i,k as u,m as p,n as t,p as f,q as o,Q as r}from"./index.ebbf5c97.js";import{b as m,Q as d,a as c}from"./QHeader.5f0016c5.js";import{a as C,b as _}from"./QLayout.9b516855.js";import{u as g}from"./store.d45d0467.js";import"./scroll.5b1865fa.js";import"./firebase.a225ab3e.js";import"./axios.84ae42e4.js";const h=i({name:"ThreeLayout",setup(){return{store:g()}},methods:{}});function k(n,e,v,Q,w,$){const a=f("router-view");return u(),p(C,{view:"hHh lpR fFf"},{default:t(()=>[o(c,{bordered:"",class:"bg-positive text-white"},{default:t(()=>[o(m,null,{default:t(()=>[o(r,{flat:"",round:"",icon:"menu",onClick:n.toggleLeftDrawer},null,8,["onClick"]),o(r,{flat:"",round:"",icon:"home",onClick:e[0]||(e[0]=s=>this.store.router.push("/"))}),o(d),o(r,{flat:"",round:"",icon:"logout",onClick:e[1]||(e[1]=s=>this.store.logout())}),o(r,{flat:"",round:"",icon:"menu",onClick:n.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),o(_,null,{default:t(()=>[o(a)]),_:1})]),_:1})}var H=l(h,[["render",k]]);export{H as default};
