import{_ as d,d as f,v as n,P as i,o as g,c as w,w as t,r as s,a as o,Q as l,S as v}from"./index.75ce3f9e.js";import{Q as c}from"./QSpace.8bf19bf0.js";import{a as Q,Q as h,b as m}from"./QDrawer.53439135.js";import{Q as k}from"./QCard.3be6014c.js";import{Q as C,a as D}from"./QLayout.3b92d25c.js";import{u as b}from"./store.eabfb0c8.js";import{I as P}from"./ImagePager.fdd634df.js";import"./use-prevent-scroll.2fa1ab15.js";import"./scroll.42015229.js";import"./use-model-toggle.bb69684b.js";import"./use-dark.f6f8b257.js";import"./TouchPan.7e30e1dc.js";import"./touch.b059422d.js";import"./firebase.f7873474.js";import"./axios.84ae42e4.js";import"./QToggle.18d1b7ed.js";import"./use-form.a034d4ea.js";import"./QBar.5424d63d.js";import"./TileComponent.4e170472.js";import"./QImg.a7c6a41d.js";const V=f({name:"PageLayout",components:{ImagePager:P},setup(){const r=n(!1),e=n(!1);return{store:b(),leftDrawerOpen:r,toggleLeftDrawer(){r.value=!r.value},rightDrawerOpen:e,toggleRightDrawer(){e.value=!e.value}}},mounted(){i.isActive||i.toggle()},methods:{goBack(){this.store.imgIdx=null,this.store.router.push("/pages")}}});function _(r,e,$,I,O,B){const p=s("ImagePager"),u=s("router-view");return g(),w(C,{view:"hHh lpR fFf"},{default:t(()=>[o(h,{bordered:"",class:"bg-positive text-white"},{default:t(()=>[o(Q,null,{default:t(()=>[o(l,{flat:"",round:"",icon:"menu",onClick:r.toggleLeftDrawer},null,8,["onClick"]),o(l,{flat:"",round:"",icon:"arrow_back",onClick:e[0]||(e[0]=a=>this.goBack())}),o(c),o(l,{flat:"",round:"",icon:"logout",onClick:e[1]||(e[1]=a=>this.store.logout())}),o(l,{flat:"",round:"",icon:"menu",onClick:r.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),o(m,{"show-if-above":"",modelValue:r.leftDrawerOpen,"onUpdate:modelValue":e[2]||(e[2]=a=>r.leftDrawerOpen=a),side:"left",bordered:""},{default:t(()=>[o(p)]),_:1},8,["modelValue"]),o(m,{"show-if-above":"",modelValue:r.rightDrawerOpen,"onUpdate:modelValue":e[4]||(e[4]=a=>r.rightDrawerOpen=a),side:"right",bordered:""},{default:t(()=>[o(k,{flat:"",bordered:"",class:"q-ma-md q-pa-md cursor-pointer tile-component flex flex-center",onClick:e[3]||(e[3]=a=>this.store.router.push("/viewer"))},{default:t(()=>[o(v,{name:"play_arrow",class:"text-h1"})]),_:1})]),_:1},8,["modelValue"]),o(D,null,{default:t(()=>[o(u)]),_:1})]),_:1})}var X=d(V,[["render",_]]);export{X as default};