import{j as v,_ as w,k as i,G as u,t as s,q as e,n as o,s as d,aa as p,H as S,r as g,P as D,m as $,p as n,Q as l}from"./index.427dcfe3.js";import{Q as _}from"./QSpace.cfd642cc.js";import{Q as f}from"./QCard.d5900cae.js";import{Q as q}from"./QTooltip.54cee36c.js";import{a as B,Q as A,b as h}from"./QDrawer.2c7fe023.js";import{a as L,b as O}from"./QLayout.8f4d8794.js";import{u as C}from"./store.a6046365.js";import{I,P as G}from"./PreferencesComponent.f8a124c8.js";import{Q as H}from"./QList.31d272f2.js";import{Q as c}from"./ClosePopup.ef78bb5f.js";import{e as N}from"./QSelect.382e8bf8.js";import"./use-dark.549bbe6b.js";import"./selection.e96fcc90.js";import"./use-timeout.645f012e.js";import"./use-tick.15ad77d9.js";import"./scroll.d1598ae7.js";import"./use-prevent-scroll.de3b6de2.js";import"./TouchPan.2b4cc655.js";import"./touch.70a9dd44.js";import"./firebase.8769ab52.js";import"./axios.84ae42e4.js";import"./QToggle.d60d45b8.js";import"./QMenu.d537da15.js";import"./QImg.be826779.js";import"./QExpansionItem.6521deda.js";import"./transform.9aa67f3e.js";import"./selectAll.be636dd1.js";const R=v({name:"ScoreCard",setup(){return{store:C()}},mounted(){console.log("ScoreCard mounted")},methods:{dummy(){console.log("dummy")}}}),T={class:"q-pa-md",style:{"max-width":"350px"}},U={class:"flex justify-center atit q-ma-sm q-pa-sm"},j={class:"text-h6"},z={key:0},F={key:1},E=s("div",{class:"text-h6"},"Current Score",-1),M={width:"100%",class:"text-h6"},J=s("tr",null,[s("th",{style:{"text-align":"center"}},"Points"),d(),s("th",{style:{"text-align":"center"}},"Goal")],-1),K={style:{"text-align":"center"}},W={style:{"text-align":"center"}};function X(r,t,y,x,Q,k){return i(),u(S,null,[s("div",T,[e(H,{bordered:"",class:"rounded-borders"},{default:o(()=>[s("span",U,[s("div",j,[d("My Points Balance: "),this.store.authenticated?(i(),u("span",z,p(this.store.userSnapshot.profile.points),1)):(i(),u("span",F,"0"))])])]),_:1})]),e(f,{flat:""},{default:o(()=>[e(c,null,{default:o(()=>[e(f,{flat:"",style:{"max-width":"300px",border:"1px solid gray","border-radius":"5px"}},{default:o(()=>[e(c,{align:"center"},{default:o(()=>[E]),_:1}),e(c,{class:"q-pt-none",align:"center"},{default:o(()=>[e(N,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",value:this.store.currentAssignment.points,min:0,max:this.goal,modelValue:this.store.currentAssignment.points,"onUpdate:modelValue":t[0]||(t[0]=m=>this.store.currentAssignment.points=m)},null,8,["value","max","modelValue"]),s("table",M,[J,s("tr",null,[s("td",K,p(this.store.currentAssignment.points),1),d(),s("td",W,p(this.store.currentAssignment.goal),1)])])]),_:1})]),_:1})]),_:1})]),_:1})],64)}var Y=w(R,[["render",X]]);const Z=v({name:"ViewerLayout",components:{ImagePager:I,ScoreCard:Y,PreferencesComponent:G},setup(){const r=g(!1),t=g(!1);return{store:C(),leftDrawerOpen:r,toggleLeftDrawer(){r.value=!r.value},rightDrawerOpen:t,toggleRightDrawer(){t.value=!t.value}}},mounted(){D.isActive},methods:{goBack(){this.store.router.push("/courses/assignments")}}});function ee(r,t,y,x,Q,k){const m=n("ImagePager"),b=n("ScoreCard"),V=n("PreferencesComponent"),P=n("router-view");return i(),$(L,{view:"hHh lpR fFf"},{default:o(()=>[e(A,{bordered:"",class:"bg-positive text-white"},{default:o(()=>[e(B,null,{default:o(()=>[e(l,{flat:"",round:"",icon:"menu",onClick:r.toggleLeftDrawer},null,8,["onClick"]),e(_),e(l,{flat:"",round:"",icon:"north",onClick:t[0]||(t[0]=a=>this.goBack())},{default:o(()=>[e(q,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:o(()=>[e(f,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:o(()=>[d(" Go back to assignment summary page ")]),_:1})]),_:1})]),_:1}),e(_),e(l,{flat:"",round:"",icon:"logout",onClick:t[1]||(t[1]=a=>this.store.logout())}),e(l,{flat:"",round:"",icon:"menu",onClick:r.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),e(h,{"show-if-above":"",modelValue:r.leftDrawerOpen,"onUpdate:modelValue":t[2]||(t[2]=a=>r.leftDrawerOpen=a),side:"left",bordered:""},{default:o(()=>[e(m)]),_:1},8,["modelValue"]),e(h,{"show-if-above":"",modelValue:r.rightDrawerOpen,"onUpdate:modelValue":t[3]||(t[3]=a=>r.rightDrawerOpen=a),side:"right",bordered:""},{default:o(()=>[e(b),e(V)]),_:1},8,["modelValue"]),e(O,null,{default:o(()=>[e(P)]),_:1})]),_:1})}var Se=w(Z,[["render",ee]]);export{Se as default};
