import{j as v,_ as w,k as l,F as p,s,q as e,n as o,G as d,aa as u,H as S,r as g,P as D,m as $,p as n,Q as i}from"./index.4fb2c75d.js";import{Q as _}from"./QSpace.58179027.js";import{Q as f}from"./QCard.2744bf71.js";import{Q as q}from"./QTooltip.18c3b375.js";import{a as B,Q as A,b as h}from"./QDrawer.4a703e1e.js";import{Q as L,a as O}from"./QLayout.db1f88e6.js";import{u as C}from"./store.aa797fd0.js";import{I,P as F}from"./PreferencesComponent.18e6d8ca.js";import{Q as G}from"./QList.5bea0b73.js";import{Q as c}from"./ClosePopup.a36b2b86.js";import{c as H}from"./QSelect.67f051b7.js";import"./use-dark.6187ef81.js";import"./selection.2aca6e4c.js";import"./use-timeout.7aad3c67.js";import"./use-tick.e11badca.js";import"./scroll.972f1339.js";import"./QResizeObserver.236bfaac.js";import"./use-prevent-scroll.4d04fbe7.js";import"./TouchPan.05d2cb30.js";import"./firebase.dc843dde.js";import"./axios.84ae42e4.js";import"./QToggle.381f6544.js";import"./use-checkbox.db92c453.js";import"./rtl.0204ae27.js";import"./QImg.62392e73.js";import"./QExpansionItem.89b9a29e.js";import"./QSlideTransition.ae13b016.js";import"./transform.9aa67f3e.js";import"./selectAll.be636dd1.js";const N=v({name:"ScoreCard",setup(){return{store:C()}},mounted(){console.log("ScoreCard mounted")},methods:{dummy(){console.log("dummy")}}}),R={class:"q-pa-md",style:{"max-width":"350px"}},T={class:"flex justify-center atit q-ma-sm q-pa-sm"},U={class:"text-h6"},j={key:0},z={key:1},E=s("div",{class:"text-h6"},"Current Score",-1),M={width:"100%",class:"text-h6 hidden"},J=s("tr",null,[s("th",{style:{"text-align":"center"}},"Points"),d(),s("th",{style:{"text-align":"center"}},"Goal")],-1),K={style:{"text-align":"center"}},W={style:{"text-align":"center"}};function X(r,t,y,x,Q,k){return l(),p(S,null,[s("div",R,[e(G,{bordered:"",class:"rounded-borders"},{default:o(()=>[s("span",T,[s("div",U,[d("My Points Balance: "),this.store.authenticated?(l(),p("span",j,u(this.store.userSnapshot.profile.points),1)):(l(),p("span",z,"0"))])])]),_:1})]),e(f,{flat:""},{default:o(()=>[e(c,null,{default:o(()=>[e(f,{flat:"",style:{"max-width":"300px",border:"1px solid gray","border-radius":"5px"}},{default:o(()=>[e(c,{align:"center"},{default:o(()=>[E]),_:1}),e(c,{class:"q-pt-none",align:"center"},{default:o(()=>[e(H,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",value:this.store.currentAssignment.points,min:0,max:this.goal,modelValue:this.store.currentAssignment.points,"onUpdate:modelValue":t[0]||(t[0]=m=>this.store.currentAssignment.points=m)},null,8,["value","max","modelValue"]),s("table",M,[J,s("tr",null,[s("td",K,u(this.store.currentAssignment.points),1),d(),s("td",W,u(this.store.currentAssignment.goal),1)])])]),_:1})]),_:1})]),_:1})]),_:1})],64)}var Y=w(N,[["render",X]]);const Z=v({name:"ViewerLayout",components:{ImagePager:I,ScoreCard:Y,PreferencesComponent:F},setup(){const r=g(!1),t=g(!1);return{store:C(),leftDrawerOpen:r,toggleLeftDrawer(){r.value=!r.value},rightDrawerOpen:t,toggleRightDrawer(){t.value=!t.value}}},mounted(){D.isActive},methods:{goBack(){this.store.router.push("/courses/assignments")}}});function ee(r,t,y,x,Q,k){const m=n("ImagePager"),b=n("ScoreCard"),V=n("PreferencesComponent"),P=n("router-view");return l(),$(L,{view:"hHh lpR fFf"},{default:o(()=>[e(A,{bordered:"",class:"bg-positive text-white"},{default:o(()=>[e(B,null,{default:o(()=>[e(i,{flat:"",round:"",icon:"menu",onClick:r.toggleLeftDrawer},null,8,["onClick"]),e(_),e(i,{flat:"",round:"",icon:"north",onClick:t[0]||(t[0]=a=>this.goBack())},{default:o(()=>[e(q,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:o(()=>[e(f,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:o(()=>[d(" Go back to assignment summary page ")]),_:1})]),_:1})]),_:1}),e(_),e(i,{flat:"",round:"",icon:"logout",onClick:t[1]||(t[1]=a=>this.store.logout())}),e(i,{flat:"",round:"",icon:"menu",onClick:r.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),e(h,{"show-if-above":"",modelValue:r.leftDrawerOpen,"onUpdate:modelValue":t[2]||(t[2]=a=>r.leftDrawerOpen=a),side:"left",bordered:""},{default:o(()=>[e(m)]),_:1},8,["modelValue"]),e(h,{"show-if-above":"",modelValue:r.rightDrawerOpen,"onUpdate:modelValue":t[3]||(t[3]=a=>r.rightDrawerOpen=a),side:"right",bordered:""},{default:o(()=>[e(b),e(V)]),_:1},8,["modelValue"]),e(O,null,{default:o(()=>[e(P)]),_:1})]),_:1})}var $e=w(Z,[["render",ee]]);export{$e as default};