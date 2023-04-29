import{Q as ee}from"./QPage.563f3f7f.js";import{u as te}from"./store.ff3289a2.js";import{u as be,b as xe,Q as K,c as ye,d as _e,C as ke}from"./ClosePopup.3b8443bd.js";import{d as f,c as H,aC as Ce,aB as we,r as k,a as b,a9 as j,h as Be,u as Ie,g as se,aD as Z,Y as G,aS as Se,y as Ae,k as w,G as E,H as Te,a8 as $e,t as v,aO as Y,ab as P,j as oe,_ as ne,p as ae,m as U,n as C,q as h,ae as qe,Q as $,aa as N,s as z}from"./index.c3bac22e.js";import{u as ie,a as re}from"./use-dark.f2d1a442.js";import{o as Me,u as Ee,a as Ve,b as Pe,c as Oe,Q as Ne}from"./QToggle.4a215cf5.js";import{Q as ze}from"./QCard.9d74397e.js";import{Q as De}from"./QImg.b2bffca3.js";import{u as Re,r as Qe,d as Fe}from"./firebase.8769ab52.js";import"./transform.9aa67f3e.js";import{s as _}from"./selectAll.be636dd1.js";import{s as u}from"./select.9628a1e9.js";import"./axios.84ae42e4.js";import"./use-prevent-scroll.cc041f85.js";import"./scroll.e55f51a5.js";import"./use-timeout.5826207e.js";import"./use-tick.9e7b294e.js";const Le=f("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[f("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),f("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]);var Ue=H({name:"QRadio",props:{...ie,...Ce,...be,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:s,emit:c}){const{proxy:o}=se(),r=re(e,o.$q),B=we(e,Me),d=k(null),{refocusTargetEl:i,refocusTarget:g}=Ee(e,d),p=b(()=>Z(e.modelValue)===Z(e.val)),n=b(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(r.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),q=b(()=>{const t=e.color!==void 0&&(e.keepColor===!0||p.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${p.value===!0?"truthy":"falsy"}${t}`}),A=b(()=>(p.value===!0?e.checkedIcon:e.uncheckedIcon)||null),O=b(()=>e.disable===!0?-1:e.tabindex||0),D=b(()=>{const t={type:"radio"};return e.name!==void 0&&Object.assign(t,{".checked":p.value===!0,"^checked":p.value===!0?"checked":void 0,name:e.name,value:e.val}),t}),I=xe(D);function x(t){t!==void 0&&(G(t),g(t)),e.disable!==!0&&p.value!==!0&&c("update:modelValue",e.val,t)}function R(t){(t.keyCode===13||t.keyCode===32)&&G(t)}function Q(t){(t.keyCode===13||t.keyCode===32)&&x(t)}return Object.assign(o,{set:x}),()=>{const t=A.value!==null?[f("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[f(j,{class:"q-radio__icon",name:A.value})])]:[Le];e.disable!==!0&&I(t,"unshift"," q-radio__native q-ma-none q-pa-none");const a=[f("div",{class:q.value,style:B.value,"aria-hidden":"true"},t)];i.value!==null&&a.push(i.value);const l=e.label!==void 0?Be(s.default,[e.label]):Ie(s.default);return l!==void 0&&a.push(f("div",{class:"q-radio__label q-anchor--skip"},l)),f("div",{ref:d,class:n.value,tabindex:O.value,role:"radio","aria-label":e.label,"aria-checked":p.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:x,onKeydown:R,onKeyup:Q},a)}}});const He=f("div",{key:"svg",class:"q-checkbox__bg absolute"},[f("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[f("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),f("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var je=H({name:"QCheckbox",props:Ve,emits:Pe,setup(e){function s(c,o){const r=b(()=>(c.value===!0?e.checkedIcon:o.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>r.value!==null?[f("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[f(j,{class:"q-checkbox__icon",name:r.value})])]:[He]}return Oe("checkbox",s)}});const le={radio:Ue,checkbox:je,toggle:Ne},We=Object.keys(le);var Ke=H({name:"QOptionGroup",props:{...ie,modelValue:{required:!0},options:{type:Array,validator:e=>e.every(s=>"value"in s&&"label"in s)},name:String,type:{default:"radio",validator:e=>We.includes(e)},color:String,keepColor:Boolean,dense:Boolean,size:String,leftLabel:Boolean,inline:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{emit:s,slots:c}){const{proxy:{$q:o}}=se(),r=Array.isArray(e.modelValue);e.type==="radio"?r===!0&&console.error("q-option-group: model should not be array"):r===!1&&console.error("q-option-group: model should be array in your case");const B=re(e,o),d=b(()=>le[e.type]),i=b(()=>"q-option-group q-gutter-x-sm"+(e.inline===!0?" q-option-group--inline":"")),g=b(()=>{const n={role:"group"};return e.type==="radio"&&(n.role="radiogroup",e.disable===!0&&(n["aria-disabled"]="true")),n});function p(n){s("update:modelValue",n)}return()=>f("div",{class:i.value,...g.value},e.options.map((n,q)=>{const A=c["label-"+q]!==void 0?()=>c["label-"+q](n):c.label!==void 0?()=>c.label(n):void 0;return f("div",[f(d.value,{modelValue:e.modelValue,val:n.value,name:n.name===void 0?e.name:n.name,disable:e.disable||n.disable,label:A===void 0?n.label:null,leftLabel:n.leftLabel===void 0?e.leftLabel:n.leftLabel,color:n.color===void 0?e.color:n.color,checkedIcon:n.checkedIcon,uncheckedIcon:n.uncheckedIcon,dark:n.dark||B.value,size:n.size===void 0?e.size:n.size,dense:e.dense,keepColor:n.keepColor===void 0?e.keepColor:n.keepColor,"onUpdate:modelValue":p},A)])}))}});const X=200,Ze=800,Ge=.1,Ye=.3,J=.5,Xe=.5,Je=12,et=800,tt=1600,st=150,ot=3500,nt=["#FFC700","#FF0000","#2E3191","#41BBC7"];var W={props:{particleCount:{type:Number,default:st},particleSize:{type:Number,default:Je},duration:{type:Number,default:ot},colors:{type:Array,default:nt},force:{type:Number,default:Xe},stageHeight:{type:Number,default:et},stageWidth:{type:Number,default:tt},shouldDestroyAfterDone:{type:Boolean,default:!0}},setup(e){const s=k(!0),c=(t,a)=>{Q(t,{degree:a})},o=b(()=>B(e.particleCount,e.colors));Se(()=>{e.particleCount>300&&console.log("[VUE-CONFETTI-EXPLOSION] That's a lot of confetti, you sure about that? A lesser number like 200 will still give off the party vibes while still not bricking the device \u{1F609}")});const r=b(()=>R(e.particleCount,e.duration,e.colors,e.particleSize,e.force,e.stageHeight,e.stageWidth));Ae(async()=>{await d(e.duration),e.shouldDestroyAfterDone&&(s.value=!1)});const B=(t,a)=>{const l=360/t;return Array.from({length:t},(S,y)=>({color:a[y%a.length],degree:y*l}))},d=t=>new Promise(a=>setTimeout(a,t));function i(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;return Math.round((t+Number.EPSILON)*10**a)/10**a}function g(t,a){if(t===a)return!0;if(t==null||a==null||t.length!==a.length)return!1;for(let l=0;l<t.length;l++)if(t[l]!==a[l])return!1;return!0}const p=(t,a,l,S,y)=>(t-a)*(y-S)/(l-a)+S,n=(t,a)=>{const l=t+a;return l>360?l-360:l},q=()=>Math.random()>.5,A=[0,0,1],O=[[1,1,0],[1,0,1],[0,1,1],[1,0,0],[0,1,0],A],D=t=>!g(O[t],A)&&q(),I=t=>typeof t=="undefined",x=t=>{console.error(t)};function R(t,a,l,S,y,M,V){const T=Number.isSafeInteger;return!I(t)&&T(t)&&t<0?(x("particleCount must be a positive integer"),!1):!I(a)&&T(a)&&a<0?(x("duration must be a positive integer"),!1):!I(l)&&!Array.isArray(l)?(x("colors must be an array of strings"),!1):!I(S)&&T(S)&&S<0?(x("particleSize must be a positive integer"),!1):!I(y)&&T(y)&&(y<0||y>1)?(x("force must be a positive integer and should be within 0 and 1"),!1):!I(M)&&typeof M=="number"&&T(M)&&M<0?(x("floorHeight must be a positive integer"),!1):!I(V)&&typeof V=="number"&&T(V)&&V<0?(x("floorWidth must be a positive integer"),!1):!0}function Q(t,a){let{degree:l}=a;const S=p(Math.abs(n(l,90)-180),0,180,-e.stageWidth/2,e.stageWidth/2),y=Math.random()*(Ze-X)+X,M=Math.round(Math.random()*(O.length-1)),V=e.duration-Math.round(Math.random()*1e3),T=Math.random()<Ge,F=D(M),L=T?i(Math.random()*Ye,2):0,de=L*-1,ce=L,ue=i(Math.abs(p(Math.abs(n(l,90)-180),0,180,-1,1)),4),he=i(Math.random()*J,4),fe=i(Math.random()*e.force*(q()?1:-1),4),pe=J,me=i(Math.max(p(Math.abs(l-180),0,180,e.force,-e.force),0),4),m=(ge,ve)=>t==null?void 0:t.style.setProperty(ge,ve+"");m("--x-landing-point",`${S}px`),m("--duration-chaos",`${V}ms`),m("--x1",`${L}`),m("--x2",`${de}`),m("--x3",`${ce}`),m("--x4",`${ue}`),m("--y1",`${he}`),m("--y2",`${fe}`),m("--y3",`${pe}`),m("--y4",`${me}`),m("--width",`${F?e.particleSize:Math.round(Math.random()*4)+e.particleSize/2}px`),m("--height",(F?e.particleSize:Math.round(Math.random()*2)+e.particleSize)+"px"),m("--rotation",`${O[M].join()}`),m("--rotation-duration",`${y}ms`),m("--border-radius",`${F?"50%":"0"}`)}return{isVisible:s,isValid:r,stageHeight:e.stageHeight,particles:o,setItemRef:c}}};function at(e,s,c,o,r,B){return o.isVisible&&o.isValid?(w(),E("div",{key:0,class:"confetti-container",style:Y(`--floor-height: ${o.stageHeight}px;`)},[(w(!0),E(Te,null,$e(o.particles,d=>{let{color:i,degree:g}=d;return w(),E("div",{key:g,class:"particle",ref:p=>o.setItemRef(p,g)},[v("div",{style:Y(`--bgcolor: ${i};`)},null,4)],512)}),128))],4)):P("",!0)}function it(e,s){s===void 0&&(s={});var c=s.insertAt;if(!(!e||typeof document=="undefined")){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",c==="top"&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var rt=`
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
`;it(rt);W.render=at;W.__scopeId="data-v-4ff796ae";var lt=(()=>{const e=W;return e.install=s=>{s.component("ConfettiExplosion",e)},e})();const dt=oe({name:"ComponentTemplate",components:{ConfettiExplosion:lt},setup(){return{store:te(),started:k(!1),group:k(""),step:k(1),words:k([]),options:k([]),answers:k([]),targetIdx:k(0),showWordChoices:k(!1),confettiOn:k(!1)}},mounted(){console.log("StepperComponent mounted"),console.log("StepperComponent showing Start Page"),_(".assignment").classed("hidden",!0),_(".coverslide").classed("hidden",!1),_("#slideTextDiv").style("font-size",this.store.userSnapshot.preferences.pageFontSize+"pt")},methods:{speakCB(){console.log("speakCB",u("#slideTextDiv").html()),this.store.speakText(u("#slideTextDiv").html())},resetButtons(){_(".stepB").classed("readyBorder",!1),_(".stepB").classed("notreadyBorder",!1),_(".stepB").classed("bg-negative",!1),_(".stepB").classed("bg-positive",!1)},update(e){console.log("targetIdx: ",this.targetIdx,"val: ",e),this.answers[this.targetIdx]=e;const s="#pop_"+this.targetIdx;u(s).html(e),console.log(this.answers),this.showWordChoices=!1,this.group=""},step1(){console.log("step1"),this.step=1,this.resetButtons(),u("#step1B").classed("bg-positive",!0),u("#step1B").classed("readyBorder",!0),this.store.loadPage(this.store.pgIdx),_("#slideTextDiv").html(this.store.currentPage.pageText),console.log("step1 done")},step2(){for(console.log("step2"),this.step=2,this.resetButtons(),u("#step2B").classed("bg-positive",!0),u("#step2B").classed("readyBorder",!0);this.words.length>0;)this.words.pop();for(;this.answers.length>0;)this.answers.pop();for(;this.options.length>0;)this.options.pop();const e=this.store.currentPage.pageText.replaceAll("  "," ").split(" ");console.log("rtext: ",e);let s="";for(const o in e)if(Math.random()*100<=this.store.currentPage.pctReplace){if(e[o]===" "){s+=e[o]+" ";continue}if(e[o]==="")continue;s+=' <b class="choose" id="pop_'+this.words.length+'">[choose]</b> ',this.words.push(e[o]),this.answers.push("")}else s+=e[o]+" ";console.log(s),u("#slideTextDiv").html(s);const c=5;for(const o in this.words){const r="#pop_"+o;u(r).on("click",B=>{for(;this.options.length>0;)this.options.pop();const d=[];this.targetIdx=o,console.log("onclick: targetIdx = ",this.targetIdx,this.targetIdx.value,o,this.words.length);for(let i=0;i<Math.min(c,this.words.length-1);i++){const g=parseInt(Math.random()*this.words.length);this.words[g]!==this.words[o]&&(d.indexOf(this.words[g])>-1||(this.options.push({label:this.words[g],value:this.words[g]}),d.push(this.words[g])))}if(this.store.role==="teacher")this.options.push({label:this.words[o],value:this.words[o]}),d.push(this.words[o]);else{const i=parseInt(Math.random()*(this.options.length+1));this.options.splice(i,0,{label:this.words[o],value:this.words[o]}),d.splice(i,0,this.words[o])}console.log(d),this.showWordChoices=!0})}},step3(){console.log("step3"),this.step=3,this.resetButtons();let e=!0;for(const s in this.words)this.words[s]!==this.answers[s]&&(e=!1);e?(u("#step3B").classed("bg-positive",!0),u("#step3B").classed("readyBorder",!0),this.store.courses[this.store.ck].assignments[this.store.aid].points+=this.words.length,this.explode()):(u("#step3B").classed("bg-negative",!0),u("#step3B").classed("notreadyBorder",!0))},step4(){if(this.step=4,console.log("step4"),this.resetButtons(),u("#step4B").classed("bg-positive",!0),u("#step4B").classed("readyBorder",!0),this.store.pgIdx<this.store.currentAssignment.pages.length-1)this.store.pgIdx+=1,this.store.imgIdx=this.store.currentAssignment.pages[this.store.pgIdx].imgIdx,this.step1();else{this.store.currentAssignment.scores||(this.store.currentAssignment.scores={},this.store.courses[this.store.ck].assignments[this.store.aid].scores={}),this.store.courses[this.store.ck].assignments[this.store.aid].scores[this.store.emailKey]||(this.store.courses[this.store.ck].assignments[this.store.aid].scores[this.store.emailKey]=0),this.store.courses[this.store.ck].assignments[this.store.aid].scores[this.store.emailKey]+=this.words.length,this.store.userSnapshot.profile.points+=this.store.currentAssignment.points,this.store.updateSnapshot("save-profile",null);const e=`courses/${this.store.ck}/assignments/${this.store.aid}/scores`;console.log(e);const s=this.store.currentAssignment.scores;console.log(s),Re(Qe(Fe,e),s),this.store.notify("Points updated, your balance is "+this.store.userSnapshot.profile.points),_("#slideTextDiv").html("<h3> Congratulations! </h3>"),this.explode()}},startAssignment(){this.store.pgIdx=0,this.store.imgIdx=this.store.currentAssignment.pages[this.store.pgIdx].imgIdx,this.started=!0,this.store.currentAssignment.points=0,this.store.currentPage.pageType<4&&(console.log("Calling step1 b/c pageType < 4"),this.step1()),this.step1(),_(".assignment").classed("hidden",!1),_(".coverslide").classed("hidden",!0)},async explode(){u(".confetti").classed("hidden",!1).classed("z-max",!0),this.confettiOn=!0,window.setTimeout(()=>{this.confettiOn=!1,u(".confetti").classed("hidden",!0)},5e3)}}}),ct=v("div",{class:"text-h6"},"Choose correct word:",-1),ut={class:"q-pa-lg"},ht={id:"slideCaptionDiv",class:"caption absolute-top q-pt-xl no-margins text-center assignment"},ft={key:0},pt={key:0,class:"flex flex-center"},mt={id:"coverSlideDiv",class:"flex flex-center cover-panel absolute-center coverslide hidden",contentEditable:"false"},gt={class:"q-ma-md"},vt=v("br",null,null,-1),bt=v("br",null,null,-1),xt={class:"q-ma-md"},yt={class:"confetti hidden fixed-center"},_t={class:"fixed-center text-panel text-center assignment",contenteditable:"false"},kt={id:"slideTextDiv"},Ct={key:0},wt={key:0,class:"on-right",style:{width:"100px"}},Bt={class:"text-center fixed-bottom q-my-sm assignment"};function It(e,s,c,o,r,B){const d=ae("ConfettiExplosion");return w(),U(ee,{id:"stepper",class:"flex flex-center",style:{overflow:"hidden",width:"100%"}},{default:C(()=>[h(_e,{modelValue:this.showWordChoices,"onUpdate:modelValue":s[1]||(s[1]=i=>this.showWordChoices=i)},{default:C(()=>[h(ze,null,{default:C(()=>[h(K,null,{default:C(()=>[ct]),_:1}),h(K,{class:"q-pt-none"},{default:C(()=>[v("div",ut,[h(Ke,{modelValue:e.group,"onUpdate:modelValue":[s[0]||(s[0]=i=>e.group=i),this.update],options:this.options,color:"primary"},null,8,["modelValue","options","onUpdate:modelValue"])])]),_:1}),h(ye,{align:"right"},{default:C(()=>[qe(h($,{flat:"",label:"OK",color:"primary"},null,512),[[ke]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),h(De,{class:"fixed-center",fit:this.store.imgFit?"cover":"scale-down",src:this.started?this.store.currentPage.imgs[this.store.imgIdx].url:this.store.currentAssignment.coverUrl,height:"100%"},null,8,["fit","src"]),v("div",ht,[this.started&&this.store.currentImage?(w(),E("span",ft,N(this.store.currentImage.cap),1)):P("",!0)]),this.store.currentAssignment&&this.store.currentAssignment.pages?(w(),E("span",pt,[v("div",mt,[v("div",gt,[h($,{style:{width:"200px",height:"200px","font-size":"12pt"},class:"dash-button"},{default:C(()=>[z(N(this.store.currentAssignment.title)+" ",1),vt,z(" "+N(this.store.currentAssignment.pages.length)+" Pages ",1),bt,z(" "+N(this.store.currentAssignment.goal)+" Points ",1)]),_:1})]),v("div",xt,[h($,{style:{width:"200px",height:"200px","font-size":"24pt"},stack:"",size:"xl","icon-right":"play_circle","text-color":"white",class:"dash-button",onClick:s[2]||(s[2]=i=>this.startAssignment())},{default:C(()=>[z("Start")]),_:1})])])])):P("",!0),v("span",yt,[e.confettiOn?(w(),U(d,{key:0,stageHeight:800,style:{position:"relative",top:"-200px",left:"40px"}})):P("",!0)]),v("div",_t,[v("div",kt,[this.store.pgIdx!==-1?(w(),E("span",Ct,N(this.store.currentPage.pageText),1)):P("",!0)]),this.step===1?(w(),E("span",wt,[h($,{dense:"",round:"",class:"speak-button float-right",onClick:s[3]||(s[3]=i=>this.speakCB())},{default:C(()=>[h(j,{name:"volume_up",size:"md"})]),_:1})])):P("",!0)]),v("div",Bt,[h($,{id:"step1B",class:"stepB clearBorder readyBorder",round:"",stack:"","no-caps":"",unelevated:"",color:"secondary",icon:"local_library",label:"Step 1",onClick:s[4]||(s[4]=i=>this.step1())}),h($,{id:"step2B",class:"stepB clearBorder",round:"",stack:"","no-caps":"",unelevated:"",color:"secondary",icon:"handyman",label:"Step 2",onClick:s[5]||(s[5]=i=>this.step2())}),h($,{id:"step3B",class:"stepB clearBorder",round:"",stack:"","no-caps":"",unelevated:"",color:"secondary",icon:"spellcheck",label:"Step 3",onClick:s[6]||(s[6]=i=>this.step3())}),h($,{id:"step4B",class:"stepB clearBorder",round:"",stack:"","no-caps":"",unelevated:"",color:"secondary",icon:"local_library",label:"\xA0Next\xA0",onClick:s[7]||(s[7]=i=>this.step4())})])]),_:1})}var St=ne(dt,[["render",It]]);const At=oe({name:"ViewerPage",components:{StepperComponent:St},setup(){return{store:te()}},mounted(){}}),Tt={class:"flex flex-center"};function $t(e,s,c,o,r,B){const d=ae("StepperComponent");return w(),U(ee,{style:{overflow:"hidden"}},{default:C(()=>[v("span",Tt,[h(d)])]),_:1})}var Kt=ne(At,[["render",$t]]);export{Kt as default};
