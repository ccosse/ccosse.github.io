import{Q as f}from"./QPage.578d1f6d.js";import{j as l,_ as r,k as c,F as u,s as e,q as t,Q as s,m as h,n as m,p as _}from"./index.1c85ca81.js";import{j as x,G as k,k as b}from"./firebase.dc843dde.js";import{u as C}from"./store.adda8f67.js";import"./axios.84ae42e4.js";const w=x(),$=C(),v=l({name:"LoginComponent",setup(){return{}},mounted(){},methods:{signInWithGoogle(){const n=new k;b(w,n).then(async o=>{await $.checkUser("google",o).then(i=>{})}).catch(o=>{console.log(JSON.stringify(o))})}}}),L={class:"fixed-center"},y={class:"q-px-xs"},G={class:"q-px-xs"},P={class:"q-px-xs text-center"},q={class:"q-px-xs"},z={class:"hidden"},B=e("tr",null,[e("td",{colSpan:"10",class:"text-center"},[e("span",{class:"text-h6"},"Please Login to Reading Edge")])],-1);function I(n,o,i,d,p,g){return c(),u("table",L,[e("tr",null,[e("td",y,[t(s,{disabled:"",color:"secondary",icon:"fa-brands fa-facebook",alt:"Login with Facebook",size:"xl",onClick:o[0]||(o[0]=a=>n.auth("facebook"))})]),e("td",G,[t(s,{disabled:"",color:"secondary",icon:"fa-brands fa-windows",alt:"Login with Windows Live",size:"xl",onClick:o[1]||(o[1]=a=>n.auth("windows"))})]),e("td",P,[t(s,{color:"positive",icon:"fa-brands fa-google",alt:"Login with Google",size:"xl",onClick:n.signInWithGoogle,round:""},null,8,["onClick"])]),e("td",q,[t(s,{disabled:"",color:"secondary",icon:"fa-brands fa-github",alt:"Login with Github",size:"xl",onClick:o[2]||(o[2]=a=>n.auth("github"))})]),e("td",z,[t(s,{disabled:"",color:"secondary",icon:"fa-solid fa-envelope",alt:"Login with Email",size:"xl",onClick:n.signin},null,8,["onClick"])])]),B])}var Q=r(v,[["render",I]]);const W=l({name:"IndexPage",components:{LoginComponent:Q},mounted(){}});function E(n,o,i,d,p,g){const a=_("LoginComponent");return c(),h(f,{class:"flex flex-center"},{default:m(()=>[t(a)]),_:1})}var V=r(W,[["render",E]]);export{V as default};
