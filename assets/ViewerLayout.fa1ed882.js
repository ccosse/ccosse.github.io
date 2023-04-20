import{d as v,_ as w,o as d,E as u,F as r,a as e,w as o,G as a,ai as p,I as P,v as _,P as S,c as D,r as l,Q as i}from"./index.75ce3f9e.js";import{Q as g}from"./QSpace.8bf19bf0.js";import{Q as f}from"./QCard.3be6014c.js";import{Q as B}from"./QTooltip.7a24e53e.js";import{a as q,Q as A,b as h}from"./QDrawer.53439135.js";import{Q as L,a as O}from"./QLayout.3b92d25c.js";import{u as C}from"./store.eabfb0c8.js";import{I}from"./ImagePager.fdd634df.js";import{Q as F}from"./QList.a73a0ee7.js";import{Q as c}from"./QCardSection.862a8d6a.js";import{a as G}from"./QKnob.b39ef241.js";import{P as N}from"./PreferencesComponent.6b4836fc.js";import"./use-dark.f6f8b257.js";import"./position-engine.dd15efb9.js";import"./touch.b059422d.js";import"./focusout.755806d2.js";import"./scroll.42015229.js";import"./use-model-toggle.bb69684b.js";import"./use-prevent-scroll.2fa1ab15.js";import"./TouchPan.7e30e1dc.js";import"./firebase.f7873474.js";import"./axios.84ae42e4.js";import"./QToggle.18d1b7ed.js";import"./use-form.a034d4ea.js";import"./QBar.5424d63d.js";import"./TileComponent.4e170472.js";import"./QImg.a7c6a41d.js";import"./ClosePopup.11a1f1ad.js";import"./QExpansionItem.11d30c92.js";import"./uid.42677368.js";import"./transform.9aa67f3e.js";import"./selectAll.be636dd1.js";const R=v({name:"ScoreCard",setup(){return{store:C()}},mounted(){console.log("ScoreCard mounted")},methods:{dummy(){console.log("dummy")}}}),T={class:"q-pa-md",style:{"max-width":"350px"}},U={class:"flex justify-center atit q-ma-sm q-pa-sm"},z={class:"text-h6"},E={key:0},H={key:1},j=r("div",{class:"text-h6"},"Current Score",-1),M={width:"100%",class:"text-h6"},J=r("tr",null,[r("th",{style:{"text-align":"center"}},"Points"),a(),r("th",{style:{"text-align":"center"}},"Goal")],-1),K={style:{"text-align":"center"}},W={style:{"text-align":"center"}};function X(s,t,y,x,Q,b){return d(),u(P,null,[r("div",T,[e(F,{bordered:"",class:"rounded-borders"},{default:o(()=>[r("span",U,[r("div",z,[a("My Points Balance: "),this.store.authenticated?(d(),u("span",E,p(this.store.userSnapshot.profile.points),1)):(d(),u("span",H,"0"))])])]),_:1})]),e(f,{flat:""},{default:o(()=>[e(c,null,{default:o(()=>[e(f,{flat:"",style:{"max-width":"300px",border:"1px solid gray","border-radius":"5px"}},{default:o(()=>[e(c,{align:"center"},{default:o(()=>[j]),_:1}),e(c,{class:"q-pt-none",align:"center"},{default:o(()=>[e(G,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",value:this.store.currentAssignment.points,min:0,max:this.goal,modelValue:this.store.currentAssignment.points,"onUpdate:modelValue":t[0]||(t[0]=m=>this.store.currentAssignment.points=m)},null,8,["value","max","modelValue"]),r("table",M,[J,r("tr",null,[r("td",K,p(this.store.currentAssignment.points),1),a(),r("td",W,p(this.store.currentAssignment.goal),1)])])]),_:1})]),_:1})]),_:1})]),_:1})],64)}var Y=w(R,[["render",X]]);const Z=v({name:"ViewerLayout",components:{ImagePager:I,ScoreCard:Y,PreferencesComponent:N},setup(){const s=_(!1),t=_(!1);return{store:C(),leftDrawerOpen:s,toggleLeftDrawer(){s.value=!s.value},rightDrawerOpen:t,toggleRightDrawer(){t.value=!t.value}}},mounted(){S.isActive},methods:{goBack(){this.store.role==="student"?this.store.router.push("/courses"):this.store.router.push("/assignments")}}}),ee=r("br",null,null,-1),te=r("br",null,null,-1);function oe(s,t,y,x,Q,b){const m=l("ImagePager"),k=l("ScoreCard"),V=l("PreferencesComponent"),$=l("router-view");return d(),D(L,{view:"hHh lpR fFf"},{default:o(()=>[e(A,{bordered:"",class:"bg-positive text-white"},{default:o(()=>[e(q,null,{default:o(()=>[e(i,{flat:"",round:"",icon:"menu",onClick:s.toggleLeftDrawer},null,8,["onClick"]),e(g),e(i,{flat:"",round:"",icon:"north",onClick:t[0]||(t[0]=n=>this.goBack())},{default:o(()=>[e(B,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:o(()=>[e(f,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:o(()=>[a(" Go back / up a level in the "),ee,a("course-assignment-page "),te,a("hierarchy ")]),_:1})]),_:1})]),_:1}),e(g),e(i,{flat:"",round:"",icon:"logout",onClick:t[1]||(t[1]=n=>this.store.logout())}),e(i,{flat:"",round:"",icon:"menu",onClick:s.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),e(h,{"show-if-above":"",modelValue:s.leftDrawerOpen,"onUpdate:modelValue":t[2]||(t[2]=n=>s.leftDrawerOpen=n),side:"left",bordered:""},{default:o(()=>[e(m)]),_:1},8,["modelValue"]),e(h,{"show-if-above":"",modelValue:s.rightDrawerOpen,"onUpdate:modelValue":t[3]||(t[3]=n=>s.rightDrawerOpen=n),side:"right",bordered:""},{default:o(()=>[e(k),e(V)]),_:1},8,["modelValue"]),e(O,null,{default:o(()=>[e($)]),_:1})]),_:1})}var Oe=w(Z,[["render",oe]]);export{Oe as default};