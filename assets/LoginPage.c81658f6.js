import{_ as n,o as a,c as i,w as c,e,a as l,Q as g}from"./index.fcfa7bad.js";import{Q as u}from"./QPage.053aabb9.js";import{u as h}from"./re-store.db15598f.js";import{G as _,f as d,a as r}from"./firebase.0eb8f378.js";import"./transform.aea72fbe.js";import"./index.2cf0d985.js";const p={name:"LoginPage",setup(){return{reStore:h()}},mounted(){},methods:{signInWithGoogle(){const o=new _;d(r,o).then(async t=>{console.log("result: ",r.currentUser.email),this.reStore.authenticated=!0,console.log("calling checkUser"),await this.reStore.checkUser("google"),console.log("okay")}).catch(t=>{console.log(JSON.stringify(t)),this.reStore.router.push("/")})},signin(){this.reStore.router.push("/signin")}}},f={class:"fixed-center"},m={class:"q-px-xs text-center"},x=e("tr",null,[e("th",{colSpan:"10"},[e("h6",null,"Please Login to Reading Edge")])],-1);function S(o,t,k,P,v,s){return a(),i(u,{class:"col justify-center"},{default:c(()=>[e("table",f,[e("tr",null,[e("td",m,[l(g,{color:"orange-8",icon:"fa-brands fa-google",alt:"Login with Google",size:"xl",onClick:s.signInWithGoogle,round:""},null,8,["onClick"])])]),x])]),_:1})}var C=n(p,[["render",S]]);export{C as default};
