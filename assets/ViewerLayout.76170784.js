import{d as v,_ as w,o as d,E as m,F as r,a as e,w as o,G as a,W as c,H as P,v as _,P as S,c as D,r as l,Q as i}from"./index.18233e7a.js";import{Q as g}from"./QSpace.b15eb053.js";import{Q as f}from"./QCard.66f4a21f.js";import{a as B}from"./QBar.0d12d6d7.js";import{a as q,Q as A,b as h}from"./QDrawer.c25a496b.js";import{Q as L,a as O}from"./QLayout.76785e29.js";import{u as C}from"./store.7ad4d182.js";import{I,P as F}from"./PreferencesComponent.d59bdb24.js";import{Q as G}from"./QList.69f71817.js";import{Q as p}from"./ClosePopup.1dc84c7d.js";import{d as H}from"./QItemLabel.116f83ea.js";import"./use-dark.14d6c418.js";import"./touch.892ad767.js";import"./use-prevent-scroll.91ecd2ee.js";import"./scroll.606ee12f.js";import"./TouchPan.6484e643.js";import"./firebase.84a31673.js";import"./axios.84ae42e4.js";import"./QToggle.c348e3b7.js";import"./QImg.babf3075.js";import"./QExpansionItem.4d14ffc1.js";import"./transform.9aa67f3e.js";import"./selectAll.be636dd1.js";const N=v({name:"ScoreCard",setup(){return{store:C()}},mounted(){console.log("ScoreCard mounted")},methods:{dummy(){console.log("dummy")}}}),R={class:"q-pa-md",style:{"max-width":"350px"}},T={class:"flex justify-center atit q-ma-sm q-pa-sm"},U={class:"text-h6"},z={key:0},E={key:1},j=r("div",{class:"text-h6"},"Current Score",-1),M={width:"100%",class:"text-h6"},W=r("tr",null,[r("th",{style:{"text-align":"center"}},"Points"),a(),r("th",{style:{"text-align":"center"}},"Goal")],-1),J={style:{"text-align":"center"}},K={style:{"text-align":"center"}};function X(s,t,y,x,Q,b){return d(),m(P,null,[r("div",R,[e(G,{bordered:"",class:"rounded-borders"},{default:o(()=>[r("span",T,[r("div",U,[a("My Points Balance: "),this.store.authenticated?(d(),m("span",z,c(this.store.userSnapshot.profile.points),1)):(d(),m("span",E,"0"))])])]),_:1})]),e(f,{flat:""},{default:o(()=>[e(p,null,{default:o(()=>[e(f,{flat:"",style:{"max-width":"300px",border:"1px solid gray","border-radius":"5px"}},{default:o(()=>[e(p,{align:"center"},{default:o(()=>[j]),_:1}),e(p,{class:"q-pt-none",align:"center"},{default:o(()=>[e(H,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",value:this.store.currentAssignment.points,min:0,max:this.goal,modelValue:this.store.currentAssignment.points,"onUpdate:modelValue":t[0]||(t[0]=u=>this.store.currentAssignment.points=u)},null,8,["value","max","modelValue"]),r("table",M,[W,r("tr",null,[r("td",J,c(this.store.currentAssignment.points),1),a(),r("td",K,c(this.store.currentAssignment.goal),1)])])]),_:1})]),_:1})]),_:1})]),_:1})],64)}var Y=w(N,[["render",X]]);const Z=v({name:"ViewerLayout",components:{ImagePager:I,ScoreCard:Y,PreferencesComponent:F},setup(){const s=_(!1),t=_(!1);return{store:C(),leftDrawerOpen:s,toggleLeftDrawer(){s.value=!s.value},rightDrawerOpen:t,toggleRightDrawer(){t.value=!t.value}}},mounted(){S.isActive},methods:{goBack(){this.store.router.push("/courses/assignments")}}}),ee=r("br",null,null,-1),te=r("br",null,null,-1);function oe(s,t,y,x,Q,b){const u=l("ImagePager"),k=l("ScoreCard"),V=l("PreferencesComponent"),$=l("router-view");return d(),D(L,{view:"hHh lpR fFf"},{default:o(()=>[e(A,{bordered:"",class:"bg-positive text-white"},{default:o(()=>[e(q,null,{default:o(()=>[e(i,{flat:"",round:"",icon:"menu",onClick:s.toggleLeftDrawer},null,8,["onClick"]),e(g),e(i,{flat:"",round:"",icon:"north",onClick:t[0]||(t[0]=n=>this.goBack())},{default:o(()=>[e(B,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:o(()=>[e(f,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:o(()=>[a(" Go back / up a level in the "),ee,a("course-assignment-page "),te,a("hierarchy ")]),_:1})]),_:1})]),_:1}),e(g),e(i,{flat:"",round:"",icon:"logout",onClick:t[1]||(t[1]=n=>this.store.logout())}),e(i,{flat:"",round:"",icon:"menu",onClick:s.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),e(h,{"show-if-above":"",modelValue:s.leftDrawerOpen,"onUpdate:modelValue":t[2]||(t[2]=n=>s.leftDrawerOpen=n),side:"left",bordered:""},{default:o(()=>[e(u)]),_:1},8,["modelValue"]),e(h,{"show-if-above":"",modelValue:s.rightDrawerOpen,"onUpdate:modelValue":t[3]||(t[3]=n=>s.rightDrawerOpen=n),side:"right",bordered:""},{default:o(()=>[e(k),e(V)]),_:1},8,["modelValue"]),e(O,null,{default:o(()=>[e($)]),_:1})]),_:1})}var Ve=w(Z,[["render",oe]]);export{Ve as default};