import{Q as f}from"./QBadge.7a47f4a9.js";import{_ as g,j as Q,k as i,m as l,n as e,s as d,q as t,G as s,aa as r,Q as m,F as u,a8 as c,H as p}from"./index.8e5f9338.js";import{Q as h}from"./QCard.82f88944.js";import{Q as _}from"./QExpansionItem.9fd7f2e9.js";import{Q as x}from"./QPage.6a7384ae.js";import{u as y}from"./store.e480c74b.js";import"./use-dark.e174b86d.js";import"./QItemLabel.bed71aa2.js";import"./use-model-toggle.72188a3e.js";import"./firebase.dc843dde.js";import"./axios.84ae42e4.js";const k=Q({name:"AdMin",components:{},setup(){return{store:y()}},mounted(){},methods:{refreshLPs(){this.store.refreshLPs()},refreshVisitors(){this.store.refreshVisitors()}}}),v={class:"flex flex-center text-h6"},V={class:"full-width bg-grey"},b={class:"full-width bg-grey"};function B(L,n,$,C,P,j){return i(),l(x,null,{default:e(()=>[d("div",v,[t(m,{outline:"",class:"q-ma-md",onClick:n[0]||(n[0]=o=>this.refreshLPs()),icon:"replay"},{default:e(()=>[s("LP "),t(f,{class:"on-right"},{default:e(()=>[s(r(Object.keys(this.store.landings).length),1)]),_:1})]),_:1}),t(m,{outline:"",class:"q-ma-md",onClick:n[1]||(n[1]=o=>this.refreshVisitors()),icon:"replay"},{default:e(()=>[s("VS "),t(f,{class:"on-right"},{default:e(()=>[s(r(Object.keys(this.store.visitors).length),1)]),_:1})]),_:1})]),t(_,{label:"Landings"},{default:e(()=>[d("div",V,[(i(!0),u(p,null,c(this.store.landings,(o,a)=>(i(),l(h,{key:a},{default:e(()=>[s(r(a)+" "+r(o),1)]),_:2},1024))),128))])]),_:1}),t(_,{label:"Visitors"},{default:e(()=>[d("div",b,[(i(!0),u(p,null,c(this.store.visitors,(o,a)=>(i(),l(h,{key:a},{default:e(()=>[s(r(a)+" "+r(o),1)]),_:2},1024))),128))])]),_:1})]),_:1})}var H=g(k,[["render",B]]);export{H as default};
