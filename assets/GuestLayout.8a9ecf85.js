import{ae as z,h as N,af as R,i as s,j as u,ag as G,A as I,d as Q,r as c,_ as V,o as B,c as A,w as o,e as t,Q as v,f as C,s as M,P as x,a as U,g as _}from"./index.f2d2d2f5.js";import{i as F,Q as W,a as H,b as j,c as g,d as E,e as f,f as D,g as J,h as K}from"./QLayout.ad393e93.js";import{u as O}from"./re-store.1698d1bd.js";import{Q as X,a as Y}from"./QCard.060a151c.js";import"./use-dark.a29c6b32.js";import"./firebase.8ff914f0.js";const Z={...z,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},y=50,T=2*y,q=T*Math.PI,ee=Math.round(q*1e3)/1e3;var te=N({name:"QCircularProgress",props:{...Z,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:a}){const{proxy:{$q:i}}=I(),h=R(e),k=s(()=>{const n=(i.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(i.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-n}deg)`:`rotate3d(0, 0, 1, ${n-90}deg)`}}),p=s(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),r=s(()=>T/(1-e.thickness/2)),b=s(()=>`${r.value/2} ${r.value/2} ${r.value} ${r.value}`),d=s(()=>F(e.value,e.min,e.max)),l=s(()=>q*(1-(d.value-e.min)/(e.max-e.min))),w=s(()=>e.thickness/2*r.value);function S({thickness:n,offset:m,color:$,cls:L,rounded:P}){return u("circle",{class:"q-circular-progress__"+L+($!==void 0?` text-${$}`:""),style:p.value,fill:"transparent",stroke:"currentColor","stroke-width":n,"stroke-dasharray":ee,"stroke-dashoffset":m,"stroke-linecap":P,cx:r.value,cy:r.value,r:y})}return()=>{const n=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&n.push(u("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:y-w.value/2,cx:r.value,cy:r.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&n.push(S({cls:"track",thickness:w.value,offset:0,color:e.trackColor})),n.push(S({cls:"circle",thickness:w.value,offset:l.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const m=[u("svg",{class:"q-circular-progress__svg",style:k.value,viewBox:b.value,"aria-hidden":"true"},n)];return e.showValue===!0&&m.push(u("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},a.default!==void 0?a.default():[u("div",d.value)])),u("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:h.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:d.value},G(a.internal,m))}}});const ae=Q({name:"AssignmentStatus",props:{},setup(e){const a=O();return{value:c(0),reStore:c(a),props:e}},mounted(){console.log(this.props)},methods:{speak(){console.log("AssignmentStatus.speak",this.reStore),this.reStore.speak()}}}),re=C("div",{class:"text-weight-bolder"},"Demo Assignment",-1),oe=C("div",null," Title, pgIdx/pgTot, imgIdx/imgTot, points/goal, pctReplace, guideWords, MapCoords, LangTranslations, WP Link, ",-1);function le(e,a,i,h,k,p){return B(),A(Y,null,{default:o(()=>[t(X,null,{default:o(()=>[re,t(te,{"show-value":"",value:this.value,size:"55px",thickness:.4,color:"secondary","track-color":"grey-3","center-color":"grey-8",class:"q-ma-md"},null,8,["value","thickness"]),t(v,{round:"",class:"q-pa-md",icon:"volume_up",color:"secondary",onClick:a[0]||(a[0]=r=>this.speak())}),oe]),_:1})]),_:1})}var ne=V(ae,[["render",le]]);const se=Q({name:"GuestLayout",components:{AssignmentStatus:ne},setup(){const e=c(!1),a=c(!1),i=O(M());return{step:c(1),reStore:i,leftDrawerOpen:e,rightDrawerOpen:a,toggleLeftDrawer(){e.value=!e.value},toggleRightDrawer(){a.value=!a.value}}},mounted(){x.isActive||(x.toggle(),U("primary","#333"))}}),ie={class:"dashboard-wrapper"};function ue(e,a,i,h,k,p){const r=_("router-link"),b=_("AssignmentStatus"),d=_("router-view");return B(),A(K,{view:"hHh lpR fFf"},{default:o(()=>[t(E,{flat:"",bordered:"",class:"bg-primary text-white","height-hint":"98"},{default:o(()=>[t(W,null,{default:o(()=>[t(v,{dense:"",flat:"",round:"",icon:"menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),t(H,null,{default:o(()=>[t(r,{to:"/"},{default:o(()=>[t(v,{dense:"",flat:"",round:"",icon:"home",color:"white"})]),_:1})]),_:1}),t(v,{dense:"",flat:"",round:"",icon:"menu",onClick:e.toggleRightDrawer},null,8,["onClick"])]),_:1}),t(j,{align:"left",class:"hidden"},{default:o(()=>[t(g,{to:"/logo",label:"Logo"}),t(g,{to:"/teaching",label:"Teaching"}),t(g,{to:"/taking",label:"Taking"}),t(g,{to:"/gradebook",label:"Gradebook"})]),_:1})]),_:1}),t(f,{"show-if-above":"",modelValue:e.leftDrawerOpen,"onUpdate:modelValue":a[0]||(a[0]=l=>e.leftDrawerOpen=l),side:"left",bordered:""},null,8,["modelValue"]),t(f,{"show-if-above":"",modelValue:e.rightDrawerOpen,"onUpdate:modelValue":a[1]||(a[1]=l=>e.rightDrawerOpen=l),side:"right",bordered:""},null,8,["modelValue"]),t(J,{class:"container-fluid"},{default:o(()=>[t(f,{bordered:"","show-if-above":"",modelValue:e.leftDrawerOpen,"onUpdate:modelValue":a[2]||(a[2]=l=>e.leftDrawerOpen=l),side:"left"},{default:o(()=>[t(D,{visible:e.visible,style:{height:"95vh","max-width":"350px"}},null,8,["visible"])]),_:1},8,["modelValue"]),t(f,{bordered:"","show-if-above":"",modelValue:e.rightDrawerOpen,"onUpdate:modelValue":a[3]||(a[3]=l=>e.rightDrawerOpen=l),side:"right"},{default:o(()=>[t(D,{visible:e.visible,style:{height:"95vh","max-width":"350px"}},{default:o(()=>[t(b)]),_:1},8,["visible"])]),_:1},8,["modelValue"]),C("div",ie,[t(d)])]),_:1})]),_:1})}var he=V(se,[["render",ue]]);export{he as default};
