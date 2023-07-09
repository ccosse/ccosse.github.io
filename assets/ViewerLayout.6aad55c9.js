import{j as v,_ as w,k as l,G as u,t as s,q as e,n as o,s as d,ag as p,H as S,r as g,P as $,m as D,p as i,Q as n}from"./index.ebbf5c97.js";import{b as q,Q as _,a as B}from"./QHeader.5f0016c5.js";import{Q as f}from"./QCard.2f39dd1e.js";import{Q as A}from"./QTooltip.c7780921.js";import{Q as h}from"./QDrawer.dd0c8326.js";import{a as L,b as O}from"./QLayout.9b516855.js";import{u as C}from"./store.d45d0467.js";import{I as H,P as I}from"./PreferencesComponent.e80de4e8.js";import{Q as G}from"./QList.2234371e.js";import{Q as c}from"./ClosePopup.d4917561.js";import{b as N}from"./QSelect.11b52ac2.js";import"./use-dark.2cb50c45.js";import"./selection.1698149b.js";import"./use-model-toggle.679fcc69.js";import"./use-tick.c4e50127.js";import"./use-timeout.ef342405.js";import"./scroll.5b1865fa.js";import"./use-prevent-scroll.87e15500.js";import"./TouchPan.c27fb718.js";import"./touch.70a9dd44.js";import"./firebase.a225ab3e.js";import"./axios.84ae42e4.js";import"./QMenu.2e8600d5.js";import"./QItemLabel.93f485cb.js";import"./QToggle.88eb4540.js";import"./use-checkbox.e78cae7d.js";import"./QImg.b963022c.js";import"./QExpansionItem.024e7ec7.js";const R=v({name:"ScoreCard",setup(){return{store:C()}},mounted(){console.log("ScoreCard mounted")},methods:{dummy(){console.log("dummy")}}}),T={class:"q-pa-md",style:{"max-width":"350px"}},U={class:"flex justify-center atit q-ma-sm q-pa-sm"},j={class:"text-h6"},z={key:0},F={key:1},E=s("div",{class:"text-h6"},"Current Score",-1),M={width:"100%",class:"text-h6 hidden"},J=s("tr",null,[s("th",{style:{"text-align":"center"}},"Points"),d(),s("th",{style:{"text-align":"center"}},"Goal")],-1),K={style:{"text-align":"center"}},W={style:{"text-align":"center"}};function X(r,t,y,x,k,Q){return l(),u(S,null,[s("div",T,[e(G,{bordered:"",class:"rounded-borders"},{default:o(()=>[s("span",U,[s("div",j,[d("My Points Balance: "),this.store.authenticated?(l(),u("span",z,p(this.store.userSnapshot.profile.points),1)):(l(),u("span",F,"0"))])])]),_:1})]),e(f,{flat:""},{default:o(()=>[e(c,null,{default:o(()=>[e(f,{flat:"",style:{"max-width":"300px",border:"1px solid gray","border-radius":"5px"}},{default:o(()=>[e(c,{align:"center"},{default:o(()=>[E]),_:1}),e(c,{class:"q-pt-none",align:"center"},{default:o(()=>[e(N,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",value:this.store.currentAssignment.points,min:0,max:this.goal,modelValue:this.store.currentAssignment.points,"onUpdate:modelValue":t[0]||(t[0]=m=>this.store.currentAssignment.points=m)},null,8,["value","max","modelValue"]),s("table",M,[J,s("tr",null,[s("td",K,p(this.store.currentAssignment.points),1),d(),s("td",W,p(this.store.currentAssignment.goal),1)])])]),_:1})]),_:1})]),_:1})]),_:1})],64)}var Y=w(R,[["render",X]]);const Z=v({name:"ViewerLayout",components:{ImagePager:H,ScoreCard:Y,PreferencesComponent:I},setup(){const r=g(!1),t=g(!1);return{store:C(),leftDrawerOpen:r,toggleLeftDrawer(){r.value=!r.value},rightDrawerOpen:t,toggleRightDrawer(){t.value=!t.value}}},mounted(){$.isActive},methods:{goBack(){this.store.router.push("/courses/assignments")}}});function ee(r,t,y,x,k,Q){const m=i("ImagePager"),b=i("ScoreCard"),V=i("PreferencesComponent"),P=i("router-view");return l(),D(L,{view:"hHh lpR fFf"},{default:o(()=>[e(B,{bordered:"",class:"bg-positive text-white"},{default:o(()=>[e(q,null,{default:o(()=>[e(n,{flat:"",round:"",icon:"menu",onClick:r.toggleLeftDrawer},null,8,["onClick"]),e(n,{flat:"",round:"",icon:"home",onClick:t[0]||(t[0]=a=>this.store.goHome())}),e(_),e(n,{flat:"",round:"",icon:"north",onClick:t[1]||(t[1]=a=>this.goBack())},{default:o(()=>[e(A,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:o(()=>[e(f,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:o(()=>[d(" Go back to assignment summary page ")]),_:1})]),_:1})]),_:1}),e(_),e(n,{flat:"",round:"",icon:"logout",onClick:t[2]||(t[2]=a=>this.store.logout())}),e(n,{flat:"",round:"",icon:"menu",onClick:r.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),e(h,{"show-if-above":"",modelValue:r.leftDrawerOpen,"onUpdate:modelValue":t[3]||(t[3]=a=>r.leftDrawerOpen=a),side:"left",bordered:""},{default:o(()=>[e(m)]),_:1},8,["modelValue"]),e(h,{"show-if-above":"",modelValue:r.rightDrawerOpen,"onUpdate:modelValue":t[4]||(t[4]=a=>r.rightDrawerOpen=a),side:"right",bordered:""},{default:o(()=>[e(b),e(V)]),_:1},8,["modelValue"]),e(O,null,{default:o(()=>[e(P)]),_:1})]),_:1})}var $e=w(Z,[["render",ee]]);export{$e as default};
