import{_ as r,o as c,c as d,w as g,e as o,a as t,Q as n}from"./index.589793f5.js";import{Q as u}from"./QPage.c343e3b5.js";import{u as h}from"./re-store.84ce131d.js";import{G as f,f as p,a as l}from"./firebase.0eb8f378.js";import"./index.2cf0d985.js";const _={name:"LoginPage",setup(){return{reStore:h()}},mounted(){},methods:{signInWithGoogle(){const s=new f;p(l,s).then(async e=>{console.log("result: ",l.currentUser.email),this.reStore.authenticated=!0,console.log("calling checkUser"),await this.reStore.checkUser("google"),console.log("okay")}).catch(e=>{console.log(JSON.stringify(e)),this.reStore.router.push("/")})},signin(){this.reStore.router.push("/signin")}}},x={class:"fixed-center"},b={class:"q-px-xs"},k={class:"q-px-xs"},m={class:"q-px-xs"},w={class:"q-px-xs"},v={class:"q-px-xs"},y=o("tr",null,[o("th",{colSpan:"10"},[o("h6",null,"Please Login to Reading Edge")])],-1);function L(s,e,S,C,P,i){return c(),d(u,{class:"col justify-center"},{default:g(()=>[o("table",x,[o("tr",null,[o("td",b,[t(n,{disabled:"",color:"secondary",icon:"fa-brands fa-facebook",alt:"Login with Facebook",size:"xl",onClick:e[0]||(e[0]=a=>s.auth("facebook"))})]),o("td",k,[t(n,{disabled:"",color:"secondary",icon:"fa-brands fa-github",alt:"Login with Github",size:"xl",onClick:e[1]||(e[1]=a=>s.auth("github"))})]),o("td",m,[t(n,{disabled:"",color:"secondary",icon:"fa-brands fa-windows",alt:"Login with Windows Live",size:"xl",onClick:e[2]||(e[2]=a=>s.auth("windows"))})]),o("td",w,[t(n,{color:"secondary",icon:"fa-brands fa-google",alt:"Login with Google",size:"xl",onClick:i.signInWithGoogle},null,8,["onClick"])]),o("td",v,[t(n,{disabled:"",color:"secondary",icon:"fa-solid fa-envelope",alt:"Login with Email",size:"xl",onClick:i.signin},null,8,["onClick"])])]),y])]),_:1})}var Q=r(_,[["render",L]]);export{Q as default};
