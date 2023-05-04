import{j as v,_ as w,k as l,F as p,s,q as e,n as o,G as m,aa as u,H as S,r as g,P as $,m as D,p as i,Q as n}from"./index.273e1465.js";import{Q as _}from"./QSpace.b3f920c1.js";import{Q as f}from"./QCard.787c64b4.js";import{Q as q}from"./QTooltip.5866170e.js";import{a as B,Q as A,b as h}from"./QDrawer.31d5c393.js";import{Q as L,a as O}from"./QLayout.2684899c.js";import{u as C}from"./store.02d85a1f.js";import{I as H,P as I}from"./PreferencesComponent.2bfc5b2f.js";import{Q as F}from"./QList.726b14a4.js";import{Q as c}from"./ClosePopup.ca1bb4ce.js";import{b as G}from"./QSelect.e29c341d.js";import"./use-dark.df902f15.js";import"./selection.95e55d70.js";import"./use-model-toggle.d38afaa7.js";import"./use-tick.6ba2c232.js";import"./use-timeout.091eec27.js";import"./scroll.ab208bd6.js";import"./QResizeObserver.3ea3a6cd.js";import"./use-prevent-scroll.e4012618.js";import"./TouchPan.88e56eb7.js";import"./firebase.dc843dde.js";import"./axios.84ae42e4.js";import"./QToggle.e91d52f4.js";import"./use-checkbox.779f7bf8.js";import"./rtl.d11901f7.js";import"./QItemSection.b49ce59f.js";import"./QImg.724b6690.js";import"./QExpansionItem.57893e1a.js";import"./QItemLabel.33ffb604.js";import"./QSlideTransition.1009dd81.js";import"./transform.9aa67f3e.js";import"./selectAll.be636dd1.js";const N=v({name:"ScoreCard",setup(){return{store:C()}},mounted(){console.log("ScoreCard mounted")},methods:{dummy(){console.log("dummy")}}}),R={class:"q-pa-md",style:{"max-width":"350px"}},T={class:"flex justify-center atit q-ma-sm q-pa-sm"},U={class:"text-h6"},j={key:0},z={key:1},E=s("div",{class:"text-h6"},"Current Score",-1),M={width:"100%",class:"text-h6 hidden"},J=s("tr",null,[s("th",{style:{"text-align":"center"}},"Points"),m(),s("th",{style:{"text-align":"center"}},"Goal")],-1),K={style:{"text-align":"center"}},W={style:{"text-align":"center"}};function X(r,t,y,x,Q,k){return l(),p(S,null,[s("div",R,[e(F,{bordered:"",class:"rounded-borders"},{default:o(()=>[s("span",T,[s("div",U,[m("My Points Balance: "),this.store.authenticated?(l(),p("span",j,u(this.store.userSnapshot.profile.points),1)):(l(),p("span",z,"0"))])])]),_:1})]),e(f,{flat:""},{default:o(()=>[e(c,null,{default:o(()=>[e(f,{flat:"",style:{"max-width":"300px",border:"1px solid gray","border-radius":"5px"}},{default:o(()=>[e(c,{align:"center"},{default:o(()=>[E]),_:1}),e(c,{class:"q-pt-none",align:"center"},{default:o(()=>[e(G,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",value:this.store.currentAssignment.points,min:0,max:this.goal,modelValue:this.store.currentAssignment.points,"onUpdate:modelValue":t[0]||(t[0]=d=>this.store.currentAssignment.points=d)},null,8,["value","max","modelValue"]),s("table",M,[J,s("tr",null,[s("td",K,u(this.store.currentAssignment.points),1),m(),s("td",W,u(this.store.currentAssignment.goal),1)])])]),_:1})]),_:1})]),_:1})]),_:1})],64)}var Y=w(N,[["render",X]]);const Z=v({name:"ViewerLayout",components:{ImagePager:H,ScoreCard:Y,PreferencesComponent:I},setup(){const r=g(!1),t=g(!1);return{store:C(),leftDrawerOpen:r,toggleLeftDrawer(){r.value=!r.value},rightDrawerOpen:t,toggleRightDrawer(){t.value=!t.value}}},mounted(){$.isActive},methods:{goBack(){this.store.router.push("/courses/assignments")}}});function ee(r,t,y,x,Q,k){const d=i("ImagePager"),b=i("ScoreCard"),V=i("PreferencesComponent"),P=i("router-view");return l(),D(L,{view:"hHh lpR fFf"},{default:o(()=>[e(A,{bordered:"",class:"bg-positive text-white"},{default:o(()=>[e(B,null,{default:o(()=>[e(n,{flat:"",round:"",icon:"menu",onClick:r.toggleLeftDrawer},null,8,["onClick"]),e(n,{flat:"",round:"",icon:"home",onClick:t[0]||(t[0]=a=>this.store.goHome())}),e(_),e(n,{flat:"",round:"",icon:"north",onClick:t[1]||(t[1]=a=>this.goBack())},{default:o(()=>[e(q,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:o(()=>[e(f,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:o(()=>[m(" Go back to assignment summary page ")]),_:1})]),_:1})]),_:1}),e(_),e(n,{flat:"",round:"",icon:"logout",onClick:t[2]||(t[2]=a=>this.store.logout())}),e(n,{flat:"",round:"",icon:"menu",onClick:r.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),e(h,{"show-if-above":"",modelValue:r.leftDrawerOpen,"onUpdate:modelValue":t[3]||(t[3]=a=>r.leftDrawerOpen=a),side:"left",bordered:""},{default:o(()=>[e(d)]),_:1},8,["modelValue"]),e(h,{"show-if-above":"",modelValue:r.rightDrawerOpen,"onUpdate:modelValue":t[4]||(t[4]=a=>r.rightDrawerOpen=a),side:"right",bordered:""},{default:o(()=>[e(b),e(V)]),_:1},8,["modelValue"]),e(O,null,{default:o(()=>[e(P)]),_:1})]),_:1})}var Ae=w(Z,[["render",ee]]);export{Ae as default};
