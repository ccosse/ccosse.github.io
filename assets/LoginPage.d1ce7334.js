import{Q as m}from"./QPage.f6660f7e.js";import{j as r,_ as g,k as h,G as k,t as e,q as t,Q as i,m as _,n as b,p as w}from"./index.05c7627d.js";import{j as x,G as v,k as c,l as C,F as L,O as y}from"./firebase.a225ab3e.js";import{u as G}from"./store.ec8203da.js";import"./axios.84ae42e4.js";const l=x(),a=G(),W=r({name:"LoginComponent",setup(){return{}},mounted(){},methods:{signInWithGoogle(){const o=new v;console.log(o),c(l,o).then(async n=>{await a.checkUser("google",n).then(s=>{})}).catch(n=>{console.log(JSON.stringify(n))})},signInWithGithub(){const o=new C;console.log(o),c(l,o).then(async n=>{console.log("calling checkUser for github"),await a.checkUser("github",n).then(s=>{console.log(s)})}).catch(n=>{console.log(JSON.stringify(n))})},signInWithFacebook(){const o=new L;console.log(o),c(l,o).then(async n=>{console.log("calling checkUser for facebook"),await a.checkUser("github",n).then(s=>{console.log(s)})}).catch(n=>{console.log(JSON.stringify(n))})},signInWithMicrosoft(){const o=new y("microsoft.com");console.log(o),c(l,o).then(async n=>{console.log("calling checkUser for microsoft"),await a.checkUser("windows",n).then(s=>{console.log(s)})}).catch(n=>{console.log(JSON.stringify(n))})}}}),$={class:"fixed-center"},I={class:"q-px-xs"},P={class:"q-px-xs"},U={class:"q-px-xs text-center"},N={class:"q-px-xs"},O={class:"hidden"},S=e("tr",null,[e("td",{colSpan:"10",class:"text-center"},[e("span",{class:"text-h6"},"Please Login to Reading Edge")])],-1);function q(o,n,s,d,p,f){return h(),k("table",$,[e("tr",null,[e("td",I,[t(i,{color:"positive",icon:"fa-brands fa-facebook",alt:"Login with Facebook",size:"xl",onClick:o.signInWithFacebook},null,8,["onClick"])]),e("td",P,[t(i,{disabled:"",color:"secondary",icon:"fa-brands fa-windows",alt:"Login with Windows Live",size:"xl",onClick:o.signInWithMicrosoft},null,8,["onClick"])]),e("td",U,[t(i,{color:"positive",icon:"fa-brands fa-google",alt:"Login with Google",size:"xl",onClick:o.signInWithGoogle,round:""},null,8,["onClick"])]),e("td",N,[t(i,{color:"positive",icon:"fa-brands fa-github",alt:"Login with Github",size:"xl",onClick:o.signInWithGithub},null,8,["onClick"])]),e("td",O,[t(i,{disabled:"",color:"secondary",icon:"fa-solid fa-envelope",alt:"Login with Email",size:"xl",onClick:o.signin},null,8,["onClick"])])]),S])}var z=g(W,[["render",q]]);const A=r({name:"LoginPage",components:{LoginComponent:z},mounted(){}});function B(o,n,s,d,p,f){const u=w("LoginComponent");return h(),_(m,{class:"flex flex-center"},{default:b(()=>[t(u)]),_:1})}var M=g(A,[["render",B]]);export{M as default};
