import{j as v,_ as w,k as l,F as u,s,q as e,n as o,G as d,af as p,H as S,r as g,P as $,m as D,p as i,Q as n}from"./index.1651428c.js";import{b as q,Q as _,a as B,c as h}from"./QDrawer.d381249f.js";import{Q as f}from"./QCard.14f6ee49.js";import{Q as A}from"./QTooltip.876be3df.js";import{a as L,b as O}from"./QLayout.3df5a6d3.js";import{u as C}from"./store.0ba3863e.js";import{I as H,P as I}from"./PreferencesComponent.483b46ef.js";import{Q as F}from"./QList.8eecee81.js";import{Q as c}from"./ClosePopup.d61bc382.js";import{b as G}from"./QSelect.67165789.js";import"./use-prevent-scroll.27a6ce62.js";import"./scroll.df5dfb67.js";import"./use-model-toggle.077888c7.js";import"./use-timeout.0eb07b3c.js";import"./use-dark.632839c5.js";import"./TouchPan.3b38cd8c.js";import"./touch.70a9dd44.js";import"./selection.73395501.js";import"./use-tick.8c2f2d74.js";import"./firebase.dc843dde.js";import"./axios.84ae42e4.js";import"./QMenu.22cfd076.js";import"./QItemLabel.3da93cb7.js";import"./QToggle.88af08ae.js";import"./use-checkbox.311937fd.js";import"./QImg.32cc6a3f.js";import"./QExpansionItem.7e7a43ed.js";const N=v({name:"ScoreCard",setup(){return{store:C()}},mounted(){console.log("ScoreCard mounted")},methods:{dummy(){console.log("dummy")}}}),R={class:"q-pa-md",style:{"max-width":"350px"}},T={class:"flex justify-center atit q-ma-sm q-pa-sm"},U={class:"text-h6"},j={key:0},z={key:1},E=s("div",{class:"text-h6"},"Current Score",-1),M={width:"100%",class:"text-h6 hidden"},J=s("tr",null,[s("th",{style:{"text-align":"center"}},"Points"),d(),s("th",{style:{"text-align":"center"}},"Goal")],-1),K={style:{"text-align":"center"}},W={style:{"text-align":"center"}};function X(r,t,y,x,k,b){return l(),u(S,null,[s("div",R,[e(F,{bordered:"",class:"rounded-borders"},{default:o(()=>[s("span",T,[s("div",U,[d("My Points Balance: "),this.store.authenticated?(l(),u("span",j,p(this.store.userSnapshot.profile.points),1)):(l(),u("span",z,"0"))])])]),_:1})]),e(f,{flat:""},{default:o(()=>[e(c,null,{default:o(()=>[e(f,{flat:"",style:{"max-width":"300px",border:"1px solid gray","border-radius":"5px"}},{default:o(()=>[e(c,{align:"center"},{default:o(()=>[E]),_:1}),e(c,{class:"q-pt-none",align:"center"},{default:o(()=>[e(G,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",value:this.store.currentAssignment.points,min:0,max:this.goal,modelValue:this.store.currentAssignment.points,"onUpdate:modelValue":t[0]||(t[0]=m=>this.store.currentAssignment.points=m)},null,8,["value","max","modelValue"]),s("table",M,[J,s("tr",null,[s("td",K,p(this.store.currentAssignment.points),1),d(),s("td",W,p(this.store.currentAssignment.goal),1)])])]),_:1})]),_:1})]),_:1})]),_:1})],64)}var Y=w(N,[["render",X]]);const Z=v({name:"ViewerLayout",components:{ImagePager:H,ScoreCard:Y,PreferencesComponent:I},setup(){const r=g(!1),t=g(!1);return{store:C(),leftDrawerOpen:r,toggleLeftDrawer(){r.value=!r.value},rightDrawerOpen:t,toggleRightDrawer(){t.value=!t.value}}},mounted(){$.isActive},methods:{goBack(){this.store.router.push("/courses/assignments")}}});function ee(r,t,y,x,k,b){const m=i("ImagePager"),Q=i("ScoreCard"),V=i("PreferencesComponent"),P=i("router-view");return l(),D(L,{view:"hHh lpR fFf"},{default:o(()=>[e(B,{bordered:"",class:"bg-positive text-white"},{default:o(()=>[e(q,null,{default:o(()=>[e(n,{flat:"",round:"",icon:"menu",onClick:r.toggleLeftDrawer},null,8,["onClick"]),e(n,{flat:"",round:"",icon:"home",onClick:t[0]||(t[0]=a=>this.store.goHome())}),e(_),e(n,{flat:"",round:"",icon:"north",onClick:t[1]||(t[1]=a=>this.goBack())},{default:o(()=>[e(A,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:o(()=>[e(f,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:o(()=>[d(" Go back to assignment summary page ")]),_:1})]),_:1})]),_:1}),e(_),e(n,{flat:"",round:"",icon:"logout",onClick:t[2]||(t[2]=a=>this.store.logout())}),e(n,{flat:"",round:"",icon:"menu",onClick:r.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),e(h,{"show-if-above":"",modelValue:r.leftDrawerOpen,"onUpdate:modelValue":t[3]||(t[3]=a=>r.leftDrawerOpen=a),side:"left",bordered:""},{default:o(()=>[e(m)]),_:1},8,["modelValue"]),e(h,{"show-if-above":"",modelValue:r.rightDrawerOpen,"onUpdate:modelValue":t[4]||(t[4]=a=>r.rightDrawerOpen=a),side:"right",bordered:""},{default:o(()=>[e(Q),e(V)]),_:1},8,["modelValue"]),e(O,null,{default:o(()=>[e(P)]),_:1})]),_:1})}var Se=w(Z,[["render",ee]]);export{Se as default};
