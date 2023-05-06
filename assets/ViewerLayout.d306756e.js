import{j as x,_ as v,p as u,k as n,F as a,s,G as p,aa as g,ab as $,q as e,n as o,H as _,a8 as S,r as b,P as I,m as q,Q as d}from"./index.e18f05ee.js";import{b as B,Q as P,a as T,c as V}from"./QDrawer.b7ee6645.js";import{Q as h}from"./QCard.44fbf586.js";import{Q as L}from"./QTooltip.aa53ee2d.js";import{a as U,b as A}from"./QLayout.82471d48.js";import{u as C}from"./store.fb7ddaff.js";import{Q as F}from"./QToggle.8dded177.js";import{Q as O}from"./QBar.225d9e3c.js";import{T as H,P as N}from"./PreferencesComponent.dbf79d14.js";import{Q as G}from"./QList.68f6646a.js";import{Q as f}from"./ClosePopup.e3e55076.js";import{b as R}from"./QSelect.d1f356be.js";import"./use-prevent-scroll.64fb7775.js";import"./scroll.d8e09647.js";import"./use-model-toggle.d083611f.js";import"./use-timeout.bcdfaf26.js";import"./use-dark.17157aa0.js";import"./TouchPan.f012f7e8.js";import"./touch.70a9dd44.js";import"./selection.92f5f5da.js";import"./use-tick.17f949cf.js";import"./firebase.dc843dde.js";import"./axios.84ae42e4.js";import"./use-checkbox.d5f270e4.js";import"./QItemLabel.3688ec7d.js";import"./QImg.535fd823.js";import"./QExpansionItem.6bd0ac46.js";import"./transform.9aa67f3e.js";import"./selectAll.be636dd1.js";const j=x({name:"ImagePager",components:{TileComponent:H},props:[],setup(){return{store:C()}},methods:{}}),z={class:"text-panel q-ma-md text-center text-h6"},E={key:0},M={key:0};function J(r,t,y,w,k,Q){const m=u("TileComponent");return n(),a(_,null,[s("div",z,[p("Images: "),this.store.currentPage?(n(),a("span",E,g(this.store.currentPage.imgs.length),1)):$("",!0)]),e(O,{class:"hidden"},{default:o(()=>[e(F,{label:"Image Fit",modelValue:this.store.imgFit,"onUpdate:modelValue":t[0]||(t[0]=i=>this.store.imgFit=i)},null,8,["modelValue"])]),_:1}),this.store.currentPage?(n(),a("span",M,[(n(!0),a(_,null,S(this.store.currentPage.imgs,(i,c)=>(n(),a("span",{key:c},[e(m,{tileData:i,imgUrl:i.url,targetUrl:null,ck:this.store.ck,aid:this.store.aid,pgIdx:this.store.pgIdx,imgIdx:c,tileType:"image"},null,8,["tileData","imgUrl","ck","aid","pgIdx","imgIdx"])]))),128))])):$("",!0)],64)}var K=v(j,[["render",J]]);const W=x({name:"ScoreCard",setup(){return{store:C()}},mounted(){console.log("ScoreCard mounted")},methods:{dummy(){console.log("dummy")}}}),X={class:"q-pa-md",style:{"max-width":"350px"}},Y={class:"flex justify-center atit q-ma-sm q-pa-sm"},Z={class:"text-h6"},ee={key:0},te={key:1},oe=s("div",{class:"text-h6"},"Current Score",-1),re={width:"100%",class:"text-h6 hidden"},se=s("tr",null,[s("th",{style:{"text-align":"center"}},"Points"),p(),s("th",{style:{"text-align":"center"}},"Goal")],-1),ne={style:{"text-align":"center"}},ae={style:{"text-align":"center"}};function ie(r,t,y,w,k,Q){return n(),a(_,null,[s("div",X,[e(G,{bordered:"",class:"rounded-borders"},{default:o(()=>[s("span",Y,[s("div",Z,[p("My Points Balance: "),this.store.authenticated?(n(),a("span",ee,g(this.store.userSnapshot.profile.points),1)):(n(),a("span",te,"0"))])])]),_:1})]),e(h,{flat:""},{default:o(()=>[e(f,null,{default:o(()=>[e(h,{flat:"",style:{"max-width":"300px",border:"1px solid gray","border-radius":"5px"}},{default:o(()=>[e(f,{align:"center"},{default:o(()=>[oe]),_:1}),e(f,{class:"q-pt-none",align:"center"},{default:o(()=>[e(R,{"show-value":"",size:"140px",thickness:.5,color:"positive","track-color":"green-3","center-color":"grey-8",class:"text-white col q-ma-md",value:this.store.currentAssignment.points,min:0,max:this.goal,modelValue:this.store.currentAssignment.points,"onUpdate:modelValue":t[0]||(t[0]=m=>this.store.currentAssignment.points=m)},null,8,["value","max","modelValue"]),s("table",re,[se,s("tr",null,[s("td",ne,g(this.store.currentAssignment.points),1),p(),s("td",ae,g(this.store.currentAssignment.goal),1)])])]),_:1})]),_:1})]),_:1})]),_:1})],64)}var le=v(W,[["render",ie]]);const me=x({name:"ViewerLayout",components:{ImagePager:K,ScoreCard:le,PreferencesComponent:N},setup(){const r=b(!1),t=b(!1);return{store:C(),leftDrawerOpen:r,toggleLeftDrawer(){r.value=!r.value},rightDrawerOpen:t,toggleRightDrawer(){t.value=!t.value}}},mounted(){I.isActive},methods:{goBack(){this.store.router.push("/courses/assignments")}}});function de(r,t,y,w,k,Q){const m=u("ImagePager"),i=u("ScoreCard"),c=u("PreferencesComponent"),D=u("router-view");return n(),q(U,{view:"hHh lpR fFf"},{default:o(()=>[e(T,{bordered:"",class:"bg-positive text-white"},{default:o(()=>[e(B,null,{default:o(()=>[e(d,{flat:"",round:"",icon:"menu",onClick:r.toggleLeftDrawer},null,8,["onClick"]),e(d,{flat:"",round:"",icon:"home",onClick:t[0]||(t[0]=l=>this.store.goHome())}),e(P),e(d,{flat:"",round:"",icon:"north",onClick:t[1]||(t[1]=l=>this.goBack())},{default:o(()=>[e(L,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:o(()=>[e(h,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:o(()=>[p(" Go back to assignment summary page ")]),_:1})]),_:1})]),_:1}),e(P),e(d,{flat:"",round:"",icon:"logout",onClick:t[2]||(t[2]=l=>this.store.logout())}),e(d,{flat:"",round:"",icon:"menu",onClick:r.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),e(V,{"show-if-above":"",modelValue:r.leftDrawerOpen,"onUpdate:modelValue":t[3]||(t[3]=l=>r.leftDrawerOpen=l),side:"left",bordered:""},{default:o(()=>[e(m)]),_:1},8,["modelValue"]),e(V,{"show-if-above":"",modelValue:r.rightDrawerOpen,"onUpdate:modelValue":t[4]||(t[4]=l=>r.rightDrawerOpen=l),side:"right",bordered:""},{default:o(()=>[e(i),e(c)]),_:1},8,["modelValue"]),e(A,null,{default:o(()=>[e(D)]),_:1})]),_:1})}var He=v(me,[["render",de]]);export{He as default};
