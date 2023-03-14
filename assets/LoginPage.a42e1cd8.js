import{_ as r,o as c,f as d,w as g,k as o,g as s,Q as n}from"./index.08dbdff3.js";import{Q as u}from"./QPage.cf77e136.js";import{u as h}from"./re-store.1379c3fd.js";import{G as f,f as p,a as l}from"./firebase.0eb8f378.js";import"./transform.aea72fbe.js";import"./index.2cf0d985.js";const _={name:"LoginPage",setup(){return{reStore:h()}},mounted(){},methods:{signInWithGoogle(){const t=new f;p(l,t).then(async e=>{console.log("result: ",l.currentUser.email),this.reStore.authenticated=!0,console.log("calling checkUser"),await this.reStore.checkUser("google"),console.log("okay")}).catch(e=>{console.log(JSON.stringify(e)),this.reStore.router.push("/")})},signin(){this.reStore.router.push("/signin")}}},x={class:"fixed-center"},k={class:"q-px-xs"},m={class:"q-px-xs"},b={class:"q-px-xs"},w={class:"q-px-xs text-center"},v=o("tr",null,[o("th",{colSpan:"10"},[o("h6",null,"Please Login to Reading Edge")])],-1);function y(t,e,L,S,C,i){return c(),d(u,{class:"col justify-center"},{default:g(()=>[o("table",x,[o("tr",null,[o("td",k,[s(n,{disabled:"",color:"secondary",icon:"fa-brands fa-facebook",alt:"Login with Facebook",size:"xl",onClick:e[0]||(e[0]=a=>t.auth("facebook"))})]),o("td",m,[s(n,{disabled:"",color:"secondary",icon:"fa-brands fa-windows",alt:"Login with Windows Live",size:"xl",onClick:e[1]||(e[1]=a=>t.auth("windows"))})]),o("td",b,[s(n,{disabled:"",color:"secondary",icon:"fa-brands fa-github",alt:"Login with Github",size:"xl",onClick:e[2]||(e[2]=a=>t.auth("github"))})]),o("td",w,[s(n,{color:"positive",icon:"fa-brands fa-google",alt:"Login with Google",size:"xl",onClick:i.signInWithGoogle,round:""},null,8,["onClick"])]),o("td",null,[s(n,{disabled:"",color:"secondary",icon:"fa-solid fa-envelope",alt:"Login with Email",size:"xl",onClick:i.signin},null,8,["onClick"])])]),v])]),_:1})}var Q=r(_,[["render",y]]);export{Q as default};
