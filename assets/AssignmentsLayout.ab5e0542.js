import{d as $,_ as b,r as m,o as s,E as u,I as _,V as A,Z as x,a as e,w as r,W as B,F as c,v as C,P as T,c as w,Q as l,G as d}from"./index.e70c2e77.js";import{Q as v}from"./QSpace.c4ebbb2c.js";import{Q as P}from"./QCard.bd55a907.js";import{Q as k}from"./QBar.fe8d42cc.js";import{a as I,Q as q,b as Q}from"./QDrawer.6bd605f6.js";import{Q as L,a as O}from"./QLayout.35edb17e.js";import{u as D}from"./store.7484bf0f.js";import{T as R,P as S}from"./PreferencesComponent.78d689cc.js";import{W}from"./WPComponent.bf4c132f.js";import"./use-dark.be8d095a.js";import"./touch.190992d1.js";import"./use-prevent-scroll.31fdb8c0.js";import"./scroll.1cf5a8e4.js";import"./ClosePopup.03ded20c.js";import"./TouchPan.b4519cd0.js";import"./firebase.8c8e307e.js";import"./axios.84ae42e4.js";import"./QToggle.e2183978.js";import"./QKnob.1bb24903.js";import"./QExpansionItem.06c36c73.js";import"./uid.42677368.js";import"./QList.fccc5dca.js";import"./transform.9aa67f3e.js";import"./selectAll.be636dd1.js";import"./QMenu.83fefad0.js";import"./QSelect.d20bf44f.js";import"./QInput.56deb150.js";const N=$({name:"AssignmentPager",components:{TileComponent:R},props:[],setup(){return{store:D()}},methods:{clickCB(o,t,f,g,a){console.log("clickCB",o,a),this.store.ck=o,this.store.aid=t,this.store.pgIdx=f,this.store.imgIdx=g,a&&this.store.router.push(a)}}}),U=c("div",{class:"text-panel q-ma-md text-center text-h6"},"My Assignments",-1),E={key:0};function F(o,t,f,g,a,V){const h=m("TileComponent");return s(),u(_,null,[U,this.store.currentCourse?(s(),u("span",E,[(s(!0),u(_,null,A(this.store.currentCourse.assignments,(i,p)=>(s(),u("span",{key:p},[e(h,{tileData:i,imgUrl:i.coverUrl,targetUrl:null,ck:this.store.ck,aid:p,pgIdx:null,imgIdx:null,tileType:"assignment"},null,8,["tileData","imgUrl","ck","aid"])]))),128))])):x("",!0),e(P,{flat:"",bordered:"",class:"q-ma-md q-pa-md cursor-pointer tile-component flex flex-center",onClick:t[0]||(t[0]=i=>this.store.newAssignment())},{default:r(()=>[e(B,{name:"add",class:"text-h1"})]),_:1})],64)}var G=b(N,[["render",F]]);const H=$({name:"AssignmentsLayout",components:{AssignmentPager:G,WPComponent:W,PreferencesComponent:S},setup(){const o=C(!1),t=C(!1);return{store:D(),leftDrawerOpen:o,toggleLeftDrawer(){o.value=!o.value},rightDrawerOpen:t,toggleRightDrawer(){t.value=!t.value}}},mounted(){T.isActive},methods:{goBack(){this.store.aid=-1,this.store.pgIdx=null,this.store.imgIdx=null,this.store.router.push("/courses")}}}),z=c("br",null,null,-1),M=c("br",null,null,-1),Z=c("div",{class:"text-panel q-ma-md"}," Reading Edge! ",-1);function j(o,t,f,g,a,V){const h=m("WPComponent"),i=m("PreferencesComponent"),p=m("AssignmentPager"),y=m("router-view");return s(),w(L,{view:"hHh lpR fFf"},{default:r(()=>[e(q,{bordered:"",class:"bg-positive text-white"},{default:r(()=>[e(I,null,{default:r(()=>[e(l,{flat:"",round:"",icon:"menu",onClick:o.toggleLeftDrawer},null,8,["onClick"]),e(v),e(l,{flat:"",round:"",icon:"north",onClick:t[0]||(t[0]=n=>this.goBack())},{default:r(()=>[e(k,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:r(()=>[e(P,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:r(()=>[d(" Go back / up a level in the "),z,d("course-assignment-page "),M,d("hierarchy ")]),_:1})]),_:1})]),_:1}),e(v),this.store.authenticated?(s(),w(l,{key:0,flat:"",round:"",icon:"switch_account",onClick:t[1]||(t[1]=n=>this.store.switchRole())},{default:r(()=>[e(k,null,{default:r(()=>[d(" Switch between Teacher or Student role ")]),_:1})]),_:1})):x("",!0),e(l,{flat:"",round:"",icon:"logout",onClick:t[2]||(t[2]=n=>this.store.logout())}),e(l,{flat:"",round:"",icon:"menu",onClick:o.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),e(Q,{"show-if-above":"",modelValue:o.leftDrawerOpen,"onUpdate:modelValue":t[3]||(t[3]=n=>o.leftDrawerOpen=n),side:"left",bordered:""},{default:r(()=>[Z,e(h),e(i)]),_:1},8,["modelValue"]),e(Q,{"show-if-above":"",modelValue:o.rightDrawerOpen,"onUpdate:modelValue":t[4]||(t[4]=n=>o.rightDrawerOpen=n),side:"right",bordered:""},{default:r(()=>[e(p)]),_:1},8,["modelValue"]),e(O,null,{default:r(()=>[e(y)]),_:1})]),_:1})}var $e=b(H,[["render",j]]);export{$e as default};