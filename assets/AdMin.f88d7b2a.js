import{Q as m}from"./QBadge.03a46453.js";import{_ as g,j as Q,k as a,m as l,n as e,s as d,q as t,G as s,aa as r,Q as f,F as u,a8 as p,H as c}from"./index.e39d480d.js";import{Q as h}from"./QCard.6e562317.js";import{Q as _}from"./QExpansionItem.b21c2350.js";import{Q as x}from"./QPage.9ef30f31.js";import{u as y}from"./store.8daf600d.js";import"./use-dark.d6466f11.js";import"./QItemSection.e4433213.js";import"./QItemLabel.ae2610d2.js";import"./QSlideTransition.6ebf146e.js";import"./use-model-toggle.2a376f46.js";import"./firebase.dc843dde.js";import"./axios.84ae42e4.js";const k=Q({name:"AdMin",components:{},setup(){return{store:y()}},mounted(){},methods:{refreshLPs(){this.store.refreshLPs()},refreshVisitors(){this.store.refreshVisitors()}}}),v={class:"flex flex-center text-h6"},V={class:"full-width bg-grey"},b={class:"full-width bg-grey"};function B(L,n,$,C,P,j){return a(),l(x,null,{default:e(()=>[d("div",v,[t(f,{outline:"",class:"q-ma-md",onClick:n[0]||(n[0]=o=>this.refreshLPs()),icon:"replay"},{default:e(()=>[s("LP "),t(m,{class:"on-right"},{default:e(()=>[s(r(Object.keys(this.store.landings).length),1)]),_:1})]),_:1}),t(f,{outline:"",class:"q-ma-md",onClick:n[1]||(n[1]=o=>this.refreshVisitors()),icon:"replay"},{default:e(()=>[s("VS "),t(m,{class:"on-right"},{default:e(()=>[s(r(Object.keys(this.store.visitors).length),1)]),_:1})]),_:1})]),t(_,{label:"Landings"},{default:e(()=>[d("div",V,[(a(!0),u(c,null,p(this.store.landings,(o,i)=>(a(),l(h,{key:i},{default:e(()=>[s(r(i)+" "+r(o),1)]),_:2},1024))),128))])]),_:1}),t(_,{label:"Visitors"},{default:e(()=>[d("div",b,[(a(!0),u(c,null,p(this.store.visitors,(o,i)=>(a(),l(h,{key:i},{default:e(()=>[s(r(i)+" "+r(o),1)]),_:2},1024))),128))])]),_:1})]),_:1})}var T=g(k,[["render",B]]);export{T as default};