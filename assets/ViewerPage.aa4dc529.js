import{Q as X}from"./QPage.1ae582f2.js";import{u as J,s as b}from"./store.55ab64c2.js";import{u as ye,b as be,Q as j,c as xe,d as _e,C as ke}from"./ClosePopup.b28c8b80.js";import{d as k,c as ee,az as Ce,aA as we,r as x,a as _,ad as te,h as Be,y as Ie,g as se,aL as W,Y as K,aR as Se,t as Ae,k as w,F as V,H as Te,ac as $e,s as g,aN as Z,ae as P,j as oe,_ as ne,p as ae,m as U,n as C,q as u,aa as Me,Q as $,af as N,G as O}from"./index.c01dc44a.js";import{u as ie,a as re}from"./use-dark.bbecd0b7.js";import{o as Ee,c as Ve}from"./use-checkbox.e77476f3.js";import{Q as qe}from"./QCheckbox.8aebcd7d.js";import{Q as Pe}from"./QToggle.a200658a.js";import{Q as ze}from"./QCard.0da0c55d.js";import{Q as Ne}from"./QImg.5c2396ca.js";import{u as Oe,r as Re,d as De}from"./firebase.dc843dde.js";import{s as c}from"./select.dbe2f47a.js";import"./axios.84ae42e4.js";import"./use-prevent-scroll.993193ad.js";import"./scroll.520370d5.js";import"./use-timeout.62fadcfb.js";import"./use-tick.61765c13.js";import"./use-model-toggle.e67fd8d3.js";const Qe=k("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[k("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),k("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]);var Fe=ee({name:"QRadio",props:{...ie,...Ce,...ye,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:s,emit:h}){const{proxy:o}=se(),l=re(e,o.$q),B=we(e,Ee),d=x(null),{refocusTargetEl:i,refocusTarget:m}=Ve(e,d),f=_(()=>W(e.modelValue)===W(e.val)),n=_(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(l.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),M=_(()=>{const t=e.color!==void 0&&(e.keepColor===!0||f.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${f.value===!0?"truthy":"falsy"}${t}`}),A=_(()=>(f.value===!0?e.checkedIcon:e.uncheckedIcon)||null),z=_(()=>e.disable===!0?-1:e.tabindex||0),R=_(()=>{const t={type:"radio"};return e.name!==void 0&&Object.assign(t,{".checked":f.value===!0,"^checked":f.value===!0?"checked":void 0,name:e.name,value:e.val}),t}),I=be(R);function v(t){t!==void 0&&(K(t),m(t)),e.disable!==!0&&f.value!==!0&&h("update:modelValue",e.val,t)}function D(t){(t.keyCode===13||t.keyCode===32)&&K(t)}function Q(t){(t.keyCode===13||t.keyCode===32)&&v(t)}return Object.assign(o,{set:v}),()=>{const t=A.value!==null?[k("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[k(te,{class:"q-radio__icon",name:A.value})])]:[Qe];e.disable!==!0&&I(t,"unshift"," q-radio__native q-ma-none q-pa-none");const a=[k("div",{class:M.value,style:B.value,"aria-hidden":"true"},t)];i.value!==null&&a.push(i.value);const r=e.label!==void 0?Be(s.default,[e.label]):Ie(s.default);return r!==void 0&&a.push(k("div",{class:"q-radio__label q-anchor--skip"},r)),k("div",{ref:d,class:n.value,tabindex:z.value,role:"radio","aria-label":e.label,"aria-checked":f.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:v,onKeydown:D,onKeyup:Q},a)}}});const le={radio:Fe,checkbox:qe,toggle:Pe},Le=Object.keys(le);var Ue=ee({name:"QOptionGroup",props:{...ie,modelValue:{required:!0},options:{type:Array,validator:e=>e.every(s=>"value"in s&&"label"in s)},name:String,type:{default:"radio",validator:e=>Le.includes(e)},color:String,keepColor:Boolean,dense:Boolean,size:String,leftLabel:Boolean,inline:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{emit:s,slots:h}){const{proxy:{$q:o}}=se(),l=Array.isArray(e.modelValue);e.type==="radio"?l===!0&&console.error("q-option-group: model should not be array"):l===!1&&console.error("q-option-group: model should be array in your case");const B=re(e,o),d=_(()=>le[e.type]),i=_(()=>"q-option-group q-gutter-x-sm"+(e.inline===!0?" q-option-group--inline":"")),m=_(()=>{const n={role:"group"};return e.type==="radio"&&(n.role="radiogroup",e.disable===!0&&(n["aria-disabled"]="true")),n});function f(n){s("update:modelValue",n)}return()=>k("div",{class:i.value,...m.value},e.options.map((n,M)=>{const A=h["label-"+M]!==void 0?()=>h["label-"+M](n):h.label!==void 0?()=>h.label(n):void 0;return k("div",[k(d.value,{modelValue:e.modelValue,val:n.value,name:n.name===void 0?e.name:n.name,disable:e.disable||n.disable,label:A===void 0?n.label:null,leftLabel:n.leftLabel===void 0?e.leftLabel:n.leftLabel,color:n.color===void 0?e.color:n.color,checkedIcon:n.checkedIcon,uncheckedIcon:n.uncheckedIcon,dark:n.dark||B.value,size:n.size===void 0?e.size:n.size,dense:e.dense,keepColor:n.keepColor===void 0?e.keepColor:n.keepColor,"onUpdate:modelValue":f},A)])}))}});const G=200,He=800,je=.1,We=.3,Y=.5,Ke=.5,Ze=12,Ge=800,Ye=1600,Xe=150,Je=3500,et=["#FFC700","#FF0000","#2E3191","#41BBC7"];var H={props:{particleCount:{type:Number,default:Xe},particleSize:{type:Number,default:Ze},duration:{type:Number,default:Je},colors:{type:Array,default:et},force:{type:Number,default:Ke},stageHeight:{type:Number,default:Ge},stageWidth:{type:Number,default:Ye},shouldDestroyAfterDone:{type:Boolean,default:!0}},setup(e){const s=x(!0),h=(t,a)=>{Q(t,{degree:a})},o=_(()=>B(e.particleCount,e.colors));Se(()=>{e.particleCount>300&&console.log("[VUE-CONFETTI-EXPLOSION] That's a lot of confetti, you sure about that? A lesser number like 200 will still give off the party vibes while still not bricking the device \u{1F609}")});const l=_(()=>D(e.particleCount,e.duration,e.colors,e.particleSize,e.force,e.stageHeight,e.stageWidth));Ae(async()=>{await d(e.duration),e.shouldDestroyAfterDone&&(s.value=!1)});const B=(t,a)=>{const r=360/t;return Array.from({length:t},(S,y)=>({color:a[y%a.length],degree:y*r}))},d=t=>new Promise(a=>setTimeout(a,t));function i(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;return Math.round((t+Number.EPSILON)*10**a)/10**a}function m(t,a){if(t===a)return!0;if(t==null||a==null||t.length!==a.length)return!1;for(let r=0;r<t.length;r++)if(t[r]!==a[r])return!1;return!0}const f=(t,a,r,S,y)=>(t-a)*(y-S)/(r-a)+S,n=(t,a)=>{const r=t+a;return r>360?r-360:r},M=()=>Math.random()>.5,A=[0,0,1],z=[[1,1,0],[1,0,1],[0,1,1],[1,0,0],[0,1,0],A],R=t=>!m(z[t],A)&&M(),I=t=>typeof t=="undefined",v=t=>{console.error(t)};function D(t,a,r,S,y,E,q){const T=Number.isSafeInteger;return!I(t)&&T(t)&&t<0?(v("particleCount must be a positive integer"),!1):!I(a)&&T(a)&&a<0?(v("duration must be a positive integer"),!1):!I(r)&&!Array.isArray(r)?(v("colors must be an array of strings"),!1):!I(S)&&T(S)&&S<0?(v("particleSize must be a positive integer"),!1):!I(y)&&T(y)&&(y<0||y>1)?(v("force must be a positive integer and should be within 0 and 1"),!1):!I(E)&&typeof E=="number"&&T(E)&&E<0?(v("floorHeight must be a positive integer"),!1):!I(q)&&typeof q=="number"&&T(q)&&q<0?(v("floorWidth must be a positive integer"),!1):!0}function Q(t,a){let{degree:r}=a;const S=f(Math.abs(n(r,90)-180),0,180,-e.stageWidth/2,e.stageWidth/2),y=Math.random()*(He-G)+G,E=Math.round(Math.random()*(z.length-1)),q=e.duration-Math.round(Math.random()*1e3),T=Math.random()<je,F=R(E),L=T?i(Math.random()*We,2):0,de=L*-1,ce=L,ue=i(Math.abs(f(Math.abs(n(r,90)-180),0,180,-1,1)),4),he=i(Math.random()*Y,4),fe=i(Math.random()*e.force*(M()?1:-1),4),pe=Y,me=i(Math.max(f(Math.abs(r-180),0,180,e.force,-e.force),0),4),p=(ge,ve)=>t==null?void 0:t.style.setProperty(ge,ve+"");p("--x-landing-point",`${S}px`),p("--duration-chaos",`${q}ms`),p("--x1",`${L}`),p("--x2",`${de}`),p("--x3",`${ce}`),p("--x4",`${ue}`),p("--y1",`${he}`),p("--y2",`${fe}`),p("--y3",`${pe}`),p("--y4",`${me}`),p("--width",`${F?e.particleSize:Math.round(Math.random()*4)+e.particleSize/2}px`),p("--height",(F?e.particleSize:Math.round(Math.random()*2)+e.particleSize)+"px"),p("--rotation",`${z[E].join()}`),p("--rotation-duration",`${y}ms`),p("--border-radius",`${F?"50%":"0"}`)}return{isVisible:s,isValid:l,stageHeight:e.stageHeight,particles:o,setItemRef:h}}};function tt(e,s,h,o,l,B){return o.isVisible&&o.isValid?(w(),V("div",{key:0,class:"confetti-container",style:Z(`--floor-height: ${o.stageHeight}px;`)},[(w(!0),V(Te,null,$e(o.particles,d=>{let{color:i,degree:m}=d;return w(),V("div",{key:m,class:"particle",ref:f=>o.setItemRef(f,m)},[g("div",{style:Z(`--bgcolor: ${i};`)},null,4)],512)}),128))],4)):P("",!0)}function st(e,s){s===void 0&&(s={});var h=s.insertAt;if(!(!e||typeof document=="undefined")){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",h==="top"&&o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var ot=`
@keyframes y-axis-4ff796ae {
to {
    transform: translate3d(0, var(--floor-height), 0);
}
}
@keyframes x-axis-4ff796ae {
to {
    transform: translate3d(var(--x-landing-point), 0, 0);
}
}
@keyframes rotation-4ff796ae {
to {
    transform: rotate3d(var(--rotation), 360deg);
}
}
.confetti-container[data-v-4ff796ae] {
  width: 0;
  height: 0;
  overflow: visible;
  position: relative;
  transform: translate3d(var(--x, 0), var(--y, 0), 0);
  z-index: 1200;
}
.confetti-container > .particle[data-v-4ff796ae] {
  animation: x-axis-4ff796ae var(--duration-chaos) forwards cubic-bezier(var(--x1), var(--x2), var(--x3), var(--x4));
}
.confetti-container > .particle div[data-v-4ff796ae] {
  position: absolute;
  top: 0;
  left: 0;
  animation: y-axis-4ff796ae var(--duration-chaos) forwards cubic-bezier(var(--y1), var(--y2), var(--y3), var(--y4));
  width: var(--width);
  height: var(--height);
}
.confetti-container > .particle div[data-v-4ff796ae]:before {
  display: block;
  height: 100%;
  width: 100%;
  content: "";
  background-color: var(--bgcolor);
  animation: rotation-4ff796ae var(--rotation-duration) infinite linear;
  border-radius: var(--border-radius);
}
`;st(ot);H.render=tt;H.__scopeId="data-v-4ff796ae";var nt=(()=>{const e=H;return e.install=s=>{s.component("ConfettiExplosion",e)},e})();const at=oe({name:"ComponentTemplate",components:{ConfettiExplosion:nt},setup(){return{store:J(),started:x(!1),group:x(""),step:x(1),words:x([]),options:x([]),answers:x([]),targetIdx:x(0),showWordChoices:x(!1),confettiOn:x(!1)}},mounted(){console.log("StepperComponent mounted"),console.log("StepperComponent showing Start Page"),b(".assignment").classed("hidden",!0),b(".coverslide").classed("hidden",!1);let e;this.store.userSnapshot?e=this.store.userSnapshot.preferences.pageFontSize+"pt":e="14pt",b("#slideTextDiv").style("font-size",e)},methods:{speakCB(){console.log("speakCB",c("#slideTextDiv").html()),this.store.speakText(c("#slideTextDiv").html())},resetButtons(){b(".stepB").classed("readyBorder",!1),b(".stepB").classed("notreadyBorder",!1),b(".stepB").classed("bg-negative",!1),b(".stepB").classed("bg-positive",!1)},update(e){console.log("targetIdx: ",this.targetIdx,"val: ",e),this.answers[this.targetIdx]=e;const s="#pop_"+this.targetIdx;c(s).html(e),console.log(this.answers),this.showWordChoices=!1,this.group=""},step1(){console.log("step1"),this.step=1,this.resetButtons(),c("#step1B").classed("bg-positive",!0),c("#step1B").classed("readyBorder",!0),this.store.loadPage(this.store.pgIdx),b("#slideTextDiv").html(this.store.currentPage.pageText),console.log("step1 done")},step2(){for(console.log("step2"),this.step=2,this.resetButtons(),c("#step2B").classed("bg-positive",!0),c("#step2B").classed("readyBorder",!0);this.words.length>0;)this.words.pop();for(;this.answers.length>0;)this.answers.pop();for(;this.options.length>0;)this.options.pop();const e=this.store.currentPage.pageText.replaceAll("  "," ").split(" ");console.log("rtext: ",e);let s="";for(const o in e)if(Math.random()*100<=this.store.currentPage.pctReplace){if(e[o]===" "){s+=e[o]+" ";continue}if(e[o]==="")continue;s+=' <b class="choose" id="pop_'+this.words.length+'">[choose]</b> ',this.words.push(e[o]),this.answers.push("")}else s+=e[o]+" ";console.log(s),c("#slideTextDiv").html(s);const h=5;for(const o in this.words){const l="#pop_"+o;c(l).on("click",B=>{for(;this.options.length>0;)this.options.pop();const d=[];this.targetIdx=o,console.log("onclick: targetIdx = ",this.targetIdx,this.targetIdx.value,o,this.words.length);for(let i=0;i<Math.min(h,this.words.length-1);i++){const m=parseInt(Math.random()*this.words.length);this.words[m]!==this.words[o]&&(d.indexOf(this.words[m])>-1||(this.options.push({label:this.words[m],value:this.words[m]}),d.push(this.words[m])))}if(this.store.role==="teacher")this.options.push({label:this.words[o],value:this.words[o]}),d.push(this.words[o]);else{const i=parseInt(Math.random()*(this.options.length+1));this.options.splice(i,0,{label:this.words[o],value:this.words[o]}),d.splice(i,0,this.words[o])}console.log(d),this.showWordChoices=!0})}},step3(){console.log("step3"),this.step=3,this.resetButtons();let e=!0;for(const s in this.words)this.words[s]!==this.answers[s]&&(e=!1);e?(c("#step3B").classed("bg-positive",!0),c("#step3B").classed("readyBorder",!0),this.store.courses[this.store.ck].assignments[this.store.aid].points+=this.words.length,this.explode()):(c("#step3B").classed("bg-negative",!0),c("#step3B").classed("notreadyBorder",!0))},step4(){if(this.step=4,console.log("step4"),this.resetButtons(),c("#step4B").classed("bg-positive",!0),c("#step4B").classed("readyBorder",!0),this.store.pgIdx<this.store.currentAssignment.pages.length-1)this.store.pgIdx+=1,this.store.imgIdx=this.store.currentAssignment.pages[this.store.pgIdx].imgIdx,this.step1();else{this.store.currentAssignment.scores||(this.store.currentAssignment.scores={},this.store.courses[this.store.ck].assignments[this.store.aid].scores={}),this.store.courses[this.store.ck].assignments[this.store.aid].scores[this.store.emailKey]||(this.store.courses[this.store.ck].assignments[this.store.aid].scores[this.store.emailKey]=0),this.store.courses[this.store.ck].assignments[this.store.aid].scores[this.store.emailKey]+=this.words.length,this.store.userSnapshot.profile.points+=this.store.currentAssignment.points,this.store.updateSnapshot("save-profile",null);const e=`courses/${this.store.ck}/assignments/${this.store.aid}/scores`;console.log(e);const s=this.store.currentAssignment.scores;console.log(s),Oe(Re(De,e),s),this.store.notify({msg:"Points updated, your balance is "+this.store.userSnapshot.profile.points}),b("#slideTextDiv").html("<h3> Congratulations! </h3>"),this.explode()}},startAssignment(){this.store.pgIdx=0,this.store.imgIdx=this.store.currentAssignment.pages[this.store.pgIdx].imgIdx,this.started=!0,this.store.currentAssignment.points=0,this.store.currentPage.pageType<4&&(console.log("Calling step1 b/c pageType < 4"),this.step1()),this.step1(),b(".assignment").classed("hidden",!1),b(".coverslide").classed("hidden",!0)},async explode(){c(".confetti").classed("hidden",!1).classed("z-max",!0),this.confettiOn=!0,window.setTimeout(()=>{this.confettiOn=!1,c(".confetti").classed("hidden",!0)},5e3)}}}),it=g("div",{class:"text-h6"},"Choose correct word:",-1),rt={class:"q-pa-lg"},lt={id:"slideCaptionDiv",class:"caption absolute-top q-pt-xl no-margins text-center assignment"},dt={key:0},ct={key:0,class:"flex flex-center"},ut={id:"coverSlideDiv",class:"flex flex-center cover-panel absolute-center coverslide hidden",contentEditable:"false"},ht={class:"q-ma-md"},ft=g("br",null,null,-1),pt=g("br",null,null,-1),mt={class:"confetti hidden fixed-center"},gt={class:"fixed-center text-panel text-center assignment",contenteditable:"false"},vt={id:"slideTextDiv"},yt={key:0},bt={key:0,class:"on-right",style:{width:"100px"}},xt={class:"text-center fixed-bottom q-my-sm assignment"};function _t(e,s,h,o,l,B){const d=ae("ConfettiExplosion");return w(),U(X,{id:"stepper",class:"flex flex-center",style:{overflow:"hidden",width:"100%"}},{default:C(()=>[u(_e,{modelValue:this.showWordChoices,"onUpdate:modelValue":s[1]||(s[1]=i=>this.showWordChoices=i)},{default:C(()=>[u(ze,null,{default:C(()=>[u(j,null,{default:C(()=>[it]),_:1}),u(j,{class:"q-pt-none"},{default:C(()=>[g("div",rt,[u(Ue,{modelValue:e.group,"onUpdate:modelValue":[s[0]||(s[0]=i=>e.group=i),this.update],options:this.options,color:"primary"},null,8,["modelValue","options","onUpdate:modelValue"])])]),_:1}),u(xe,{align:"right"},{default:C(()=>[Me(u($,{flat:"",label:"OK",color:"primary"},null,512),[[ke]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),u(Ne,{class:"fixed-center",fit:this.store.imgFit?"cover":"scale-down",src:this.started?this.store.currentPage.imgs[this.store.imgIdx].url:this.store.currentAssignment.coverUrl,height:"100%"},null,8,["fit","src"]),g("div",lt,[this.started&&this.store.currentImage?(w(),V("span",dt,N(this.store.currentImage.cap),1)):P("",!0)]),this.store.currentAssignment&&this.store.currentAssignment.pages?(w(),V("span",ct,[g("div",ut,[g("div",ht,[u($,{style:{width:"200px",height:"200px","font-size":"12pt"},class:"dash-button hidden"},{default:C(()=>[O(N(this.store.currentAssignment.title)+" ",1),ft,O(" "+N(this.store.currentAssignment.pages.length)+" Pages ",1),pt,O(" "+N(this.store.currentAssignment.goal)+" Points ",1)]),_:1}),u($,{style:{width:"200px",height:"200px","font-size":"24pt"},stack:"",size:"xl","icon-right":"play_circle_outline","text-color":"white",class:"dash-button",onClick:s[2]||(s[2]=i=>this.startAssignment())},{default:C(()=>[O("Start")]),_:1})])])])):P("",!0),g("span",mt,[e.confettiOn?(w(),U(d,{key:0,stageHeight:800,style:{position:"relative",top:"-200px",left:"40px"}})):P("",!0)]),g("div",gt,[g("div",vt,[this.store.pgIdx!==-1?(w(),V("span",yt,N(this.store.currentPage.pageText),1)):P("",!0)]),this.step===1?(w(),V("span",bt,[u($,{dense:"",round:"",class:"speak-button float-right",onClick:s[3]||(s[3]=i=>this.speakCB())},{default:C(()=>[u(te,{name:"volume_up",size:"md"})]),_:1})])):P("",!0)]),g("div",xt,[u($,{id:"step1B",class:"stepB clearBorder readyBorder",round:"",stack:"","no-caps":"",unelevated:"",color:"secondary",icon:"local_library",label:"Step 1",onClick:s[4]||(s[4]=i=>this.step1())}),u($,{id:"step2B",class:"stepB clearBorder",round:"",stack:"","no-caps":"",unelevated:"",color:"secondary",icon:"handyman",label:"Step 2",onClick:s[5]||(s[5]=i=>this.step2())}),u($,{id:"step3B",class:"stepB clearBorder",round:"",stack:"","no-caps":"",unelevated:"",color:"secondary",icon:"spellcheck",label:"Step 3",onClick:s[6]||(s[6]=i=>this.step3())}),u($,{id:"step4B",class:"stepB clearBorder",round:"",stack:"","no-caps":"",unelevated:"",color:"secondary",icon:"local_library",label:"\xA0Next\xA0",onClick:s[7]||(s[7]=i=>this.step4())})])]),_:1})}var kt=ne(at,[["render",_t]]);const Ct=oe({name:"ViewerPage",components:{StepperComponent:kt},setup(){return{store:J()}},mounted(){}}),wt={class:"flex flex-center"};function Bt(e,s,h,o,l,B){const d=ae("StepperComponent");return w(),U(X,{style:{overflow:"hidden"}},{default:C(()=>[g("span",wt,[u(d)])]),_:1})}var Ut=ne(Ct,[["render",Bt]]);export{Ut as default};
