import{u as H,c as J,a as X,Q,i as Y,C as Z,h as ee}from"./ClosePopup.84b5cc27.js";import{i as g,g as q,ah as te,ai as se,r as d,h as u,aG as A,x as P,y as j,j as z,z as _,q as L,Q as x,n as ie,F as ae,aH as M,K as oe,d as le,D as ne,_ as re,o as de,au as ce,a as c,w as b,e as B,p as ge,ag as R,av as ue}from"./index.01ec4205.js";import{d as W,f as K,c as he,e as pe,u as me,g as fe}from"./use-dark.6acd13bb.js";import{o as ve,u as be,Q as xe}from"./QCheckbox.bc5760d5.js";import{Q as Se}from"./QToggle.2a969efd.js";import{Q as Ie}from"./QImg.1fd61dd4.js";import{Q as F}from"./QPageSticky.50897f08.js";import{u as ye,s as a,a as I}from"./re-store.49ff5f07.js";const Ce=g("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[g("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),g("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]);var ke=q({name:"QRadio",props:{...W,...te,...H,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:t,emit:o}){const{proxy:s}=_(),n=K(e,s.$q),m=se(e,ve),l=d(null),{refocusTargetEl:p,refocusTarget:S}=be(e,l),f=u(()=>A(e.modelValue)===A(e.val)),i=u(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(n.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),h=u(()=>{const r=e.color!==void 0&&(e.keepColor===!0||f.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${f.value===!0?"truthy":"falsy"}${r}`}),y=u(()=>(f.value===!0?e.checkedIcon:e.uncheckedIcon)||null),T=u(()=>e.disable===!0?-1:e.tabindex||0),V=u(()=>{const r={type:"radio"};return e.name!==void 0&&Object.assign(r,{".checked":f.value===!0,"^checked":f.value===!0?"checked":void 0,name:e.name,value:e.val}),r}),D=J(V);function C(r){r!==void 0&&(L(r),S(r)),e.disable!==!0&&f.value!==!0&&o("update:modelValue",e.val,r)}function $(r){(r.keyCode===13||r.keyCode===32)&&L(r)}function v(r){(r.keyCode===13||r.keyCode===32)&&C(r)}return Object.assign(s,{set:C}),()=>{const r=y.value!==null?[g("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[g(P,{class:"q-radio__icon",name:y.value})])]:[Ce];e.disable!==!0&&D(r,"unshift"," q-radio__native q-ma-none q-pa-none");const k=[g("div",{class:h.value,style:m.value,"aria-hidden":"true"},r)];p.value!==null&&k.push(p.value);const w=e.label!==void 0?j(t.default,[e.label]):z(t.default);return w!==void 0&&k.push(g("div",{class:"q-radio__label q-anchor--skip"},w)),g("div",{ref:l,class:i.value,tabindex:T.value,role:"radio","aria-label":e.label,"aria-checked":f.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:C,onKeydown:$,onKeyup:v},k)}}});const N={radio:ke,checkbox:xe,toggle:Se},we=Object.keys(N);var Be=q({name:"QOptionGroup",props:{...W,modelValue:{required:!0},options:{type:Array,validator:e=>e.every(t=>"value"in t&&"label"in t)},name:String,type:{default:"radio",validator:e=>we.includes(e)},color:String,keepColor:Boolean,dense:Boolean,size:String,leftLabel:Boolean,inline:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{emit:t,slots:o}){const{proxy:{$q:s}}=_(),n=Array.isArray(e.modelValue);e.type==="radio"?n===!0&&console.error("q-option-group: model should not be array"):n===!1&&console.error("q-option-group: model should be array in your case");const m=K(e,s),l=u(()=>N[e.type]),p=u(()=>"q-option-group q-gutter-x-sm"+(e.inline===!0?" q-option-group--inline":"")),S=u(()=>{const i={role:"group"};return e.type==="radio"&&(i.role="radiogroup",e.disable===!0&&(i["aria-disabled"]="true")),i});function f(i){t("update:modelValue",i)}return()=>g("div",{class:p.value,...S.value},e.options.map((i,h)=>{const y=o["label-"+h]!==void 0?()=>o["label-"+h](i):o.label!==void 0?()=>o.label(i):void 0;return g("div",[g(l.value,{modelValue:e.modelValue,val:i.value,name:i.name===void 0?e.name:i.name,disable:e.disable||i.disable,label:y===void 0?i.label:null,leftLabel:i.leftLabel===void 0?e.leftLabel:i.leftLabel,color:i.color===void 0?e.color:i.color,checkedIcon:i.checkedIcon,uncheckedIcon:i.uncheckedIcon,dark:i.dark||m.value,size:i.size===void 0?e.size:i.size,dense:e.dense,keepColor:i.keepColor===void 0?e.keepColor:i.keepColor,"onUpdate:modelValue":f},y)])}))}});const qe=["top","right","bottom","left"],E={type:{type:String,default:"a"},outline:Boolean,push:Boolean,flat:Boolean,unelevated:Boolean,color:String,textColor:String,glossy:Boolean,square:Boolean,padding:String,label:{type:[String,Number],default:""},labelPosition:{type:String,default:"right",validator:e=>qe.includes(e)},externalLabel:Boolean,hideLabel:{type:Boolean},labelClass:[Array,String,Object],labelStyle:[Array,String,Object],disable:Boolean,tabindex:[Number,String]};function U(e,t){return{formClass:u(()=>`q-fab--form-${e.square===!0?"square":"rounded"}`),stacked:u(()=>e.externalLabel===!1&&["top","bottom"].includes(e.labelPosition)),labelProps:u(()=>{if(e.externalLabel===!0){const o=e.hideLabel===null?t.value===!1:e.hideLabel;return{action:"push",data:{class:[e.labelClass,`q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}`+(o===!0?" q-fab__label--external-hidden":"")],style:e.labelStyle}}}return{action:["left","top"].includes(e.labelPosition)?"unshift":"push",data:{class:[e.labelClass,`q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}`+(e.hideLabel===!0?" q-fab__label--internal-hidden":"")],style:e.labelStyle}}})}}const G={start:"self-end",center:"self-center",end:"self-start"},_e=Object.keys(G);var O=q({name:"QFabAction",props:{...E,icon:{type:String,default:""},anchor:{type:String,validator:e=>_e.includes(e)},to:[String,Object],replace:Boolean},emits:["click"],setup(e,{slots:t,emit:o}){const s=ie(M,()=>({showing:{value:!0},onChildClick:ae})),{formClass:n,labelProps:m}=U(e,s.showing),l=u(()=>{const h=G[e.anchor];return n.value+(h!==void 0?` ${h}`:"")}),p=u(()=>e.disable===!0||s.showing.value!==!0);function S(h){s.onChildClick(h),o("click",h)}function f(){const h=[];return t.icon!==void 0?h.push(t.icon()):e.icon!==""&&h.push(g(P,{name:e.icon})),(e.label!==""||t.label!==void 0)&&h[m.value.action](g("div",m.value.data,t.label!==void 0?t.label():[e.label])),j(t.default,h)}const i=_();return Object.assign(i.proxy,{click:S}),()=>g(x,{class:l.value,...e,noWrap:!0,stack:e.stacked,icon:void 0,label:void 0,noCaps:!0,fabMini:!0,disable:p.value,onClick:S},f)}});const Te=["up","right","down","left"],Ve=["left","center","right"];var De=q({name:"QFab",props:{...E,...he,icon:String,activeIcon:String,hideIcon:Boolean,hideLabel:{default:null},direction:{type:String,default:"right",validator:e=>Te.includes(e)},persistent:Boolean,verticalActionsAlign:{type:String,default:"center",validator:e=>Ve.includes(e)}},emits:pe,setup(e,{slots:t}){const o=d(null),s=d(e.modelValue===!0),n=me(),{proxy:{$q:m}}=_(),{formClass:l,labelProps:p}=U(e,s),S=u(()=>e.persistent!==!0),{hide:f,toggle:i}=fe({showing:s,hideOnRouteChange:S}),h=u(()=>({opened:s.value})),y=u(()=>`q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${l.value}`+(s.value===!0?" q-fab--opened":" q-fab--closed")),T=u(()=>`q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${s.value===!0?"opened":"closed"}`),V=u(()=>{const v={id:n,role:"menu"};return s.value!==!0&&(v["aria-hidden"]="true"),v}),D=u(()=>`q-fab__icon-holder  q-fab__icon-holder--${s.value===!0?"opened":"closed"}`);function C(v,r){const k=t[v],w=`q-fab__${v} absolute-full`;return k===void 0?g(P,{class:w,name:e[r]||m.iconSet.fab[r]}):g("div",{class:w},k(h.value))}function $(){const v=[];return e.hideIcon!==!0&&v.push(g("div",{class:D.value},[C("icon","icon"),C("active-icon","activeIcon")])),(e.label!==""||t.label!==void 0)&&v[p.value.action](g("div",p.value.data,t.label!==void 0?t.label(h.value):[e.label])),j(t.tooltip,v)}return oe(M,{showing:s,onChildClick(v){f(v),o.value!==null&&o.value.$el.focus()}}),()=>g("div",{class:y.value},[g(x,{ref:o,class:l.value,...e,noWrap:!0,stack:e.stacked,align:void 0,icon:void 0,label:void 0,noCaps:!0,fab:!0,"aria-expanded":s.value===!0?"true":"false","aria-haspopup":"true","aria-controls":n,onClick:i},$),g("div",{class:T.value,...V.value},z(t.default))])}});const $e=le({name:"StepperComponent",props:{initialImgSrc:{type:String,required:!0},initialImgFit:{type:String},initialPageText:{type:String,required:!1,default:"This is the paragraph to be reconstructed."},initialPageObj:{type:Object,required:!1,default:d({imgIdx:0,imgs:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Douglas_DC-3%2C_SE-CFP.jpg/1024px-Douglas_DC-3%2C_SE-CFP.jpg",cap:"Doublas DC-3"}],pageText:"This is the paragraph to be reconstructed (default text)",imgFit:"cover",pctReplace:25})},assignmentObj:{type:Object,required:!1}},setup(e){const t=ye();return{props:e,reStore:t,group:d(""),visIcon:d("article"),imgs:d([]),imgIdx:d(0),imgSrc:d(""),imgCap:d(""),imgFit:d(""),pgIdx:d(0),pageText:d(""),pctReplace:d(15),assignment:d(null),step:d(1),words:d([]),options:d([]),answers:d([]),targetIdx:d(0),showWordChoices:d(!1),slideShowInterval:d(null)}},mounted(){ne(this.reStore.courses,async(s,n)=>{console.log("Stepper watcher"),this.imgFit=this.reStore.page.imgFit,this.imgIdx=this.reStore.courses.imgIdx,this.pgIdx=this.reStore.page.pgIdx,this.imgSrc=this.reStore.page.imgs[this.imgIdx].url,this.imgCap=this.reStore.page.imgs[this.imgIdx].cap,console.log("Stepper watcher",this.imgSrc)}),console.log("Stepper.mounted ",this.props);const e=this.reStore.courses.ck,t=this.reStore.courses.aid,o=this.reStore.courses.pgIdx;this.props.assignmentObj?(this.assignment=this.props.assignmentObj,this.imgSrc=this.assignment.pages[o].url,this.imgCap=this.assignment.pages[o].cap):(console.log("Stepper assignment ",this.assignment),this.imgSrc=this.reStore.courses[e].assignments[t].pages[o].url,this.imgCap=this.reStore.courses[e].assignments[t].pages[o].cap),this.props.assignmentObj?(console.log("Stepper using assignmentObj from props"),this.assignment=this.props.assignmentObj):(console.log("Stepper using fresh copy from master"),this.assignment=JSON.parse(JSON.stringify(this.reStore.courses[e].assignments[t]))),this.reStore.setStatus("points",this.assignment.points),this.reStore.setStatus("goal",this.assignment.goal),this.reStore.setStatus("title",this.assignment.title),this.reStore.setStatus("pgIdx",this.assignment.pgIdx),this.reStore.setStatus("pgTot",this.assignment.pages.length),this.reStore.setStatus("ck",this.assignment.ck),this.reStore.setStatus("mapCoords",this.assignment.pages[this.assignment.pgIdx].mapCoords),this.step1()},methods:{stringify(){const e=JSON.stringify(this.assignment);console.log(e)},prevImg(){this.imgIdx=this.imgIdx-1<0?this.imgs.length-1:0,this.imgSrc=this.imgs[this.imgIdx].url,this.imgCap=this.imgs[this.imgIdx].cap,console.log("stepper nextImg",this.imgIdx),this.reStore.setStatus("imgIdx",this.imgIdx)},nextImg(){this.imgIdx=this.imgIdx+1>this.imgs.length-1?0:this.imgIdx+1,this.imgSrc=this.imgs[this.imgIdx].url,this.imgCap=this.imgs[this.imgIdx].cap,console.log("stepper nextImg",this.imgIdx,this.imgs),this.reStore.setStatus("imgIdx",this.imgIdx)},cycleFit(){const e=["scale-down","cover"];let t=e.indexOf(this.imgFit);this.imgFit=t+1>=e.length?e[0]:e[t+1],this.reStore.setStatus("imgFit",this.imgFit)},loadPage(e){this.imgs=e.imgs,this.imgIdx=e.imgIdx,this.imgSrc=e.imgs[this.imgIdx].url,this.imgCap=e.imgs[this.imgIdx].cap,this.imgFit=e.imgFit,this.pageText=e.pageText,this.pctReplace=e.pctReplace,this.mapCoords=e.mapCoords,a("#slideTextDiv").html(this.pageText),this.reStore.setStatus("imgIdx",this.imgIdx),this.reStore.setStatus("imgTot",this.imgs.length),this.reStore.setStatus("guideWords",e.guideWords),this.reStore.setStatus("imgFit",this.imgFit),this.reStore.setStatus("pageid",e.pageid),this.reStore.setStatus("pctReplace",this.pctReplace),this.reStore.setStatus("pageTitle",e.pageTitle),this.reStore.setStatus("mapCoords",e.mapCoords)},step1(){this.step=1,console.log("step",this.step),a("#slideTextDiv").classed("hidden",!1),a("#step3B").classed("hidden",!1),a("#step4B").classed("hidden",!0),I(".stepB").classed("readyBorder",!1),I(".stepB").classed("notreadyBorder",!1),a("#slideTextDiv").classed("border-red",!1),a("#slideTextDiv").classed("border-green",!1),a("#step1B").classed("readyBorder",!0);let e;if(this.assignment.pages[this.pgIdx].isCustom===!0)e=this.assignment.pages[this.pgIdx],console.log("step1a ",e),this.loadPage(e);else if(this.assignment.pages[this.pgIdx].pageid){if(this.assignment.pages[this.pgIdx].pageid){const t="",o=this.assignment.pages[this.pgIdx].pageid,s=this.assignment.pages[this.pgIdx].langVoiceKey;this.reStore.preferences.langVoiceKey=s,this.reStore.preferences.langVoice=this.reStore.langVoices[s];const n=this.reStore.getPage(t,o,s);console.log("received promise ",n),n.then(m=>{console.log("step1c ",this.reStore.page),this.reStore.page.imgIdx=this.assignment.pages[this.pgIdx].imgIdx,this.loadPage(this.reStore.page)})}}else{const t=this.assignment.pages[this.pgIdx].guideWords,o=this.assignment.pages[this.pgIdx].pageid,s=this.assignment.pages[this.pgIdx].langVoiceKey;console.log("guideWords",t,"pageid ",o);const n=this.reStore.getPage(t,o,s);console.log("received promise ",n),n.then(m=>{console.log("step1b ",this.reStore.page),this.loadPage(this.reStore.page)})}},step2(){if(a("#slideTextDiv").classed("hidden",!1),I(".stepB").classed("readyBorder",!1),I(".stepB").classed("notreadyBorder",!1),this.step===2)return;for(this.step=2,a("#step2B").classed("readyBorder",!0),console.log("step",this.step),a("#slideTextDiv").classed("border-red",!1),a("#slideTextDiv").classed("border-green",!1);this.words.length>0;)this.words.pop();for(;this.answers.length>0;)this.answers.pop();for(;this.options.length>0;)this.options.pop();const e=this.pageText.replaceAll("  "," ").split(" ");console.log("rtext: ",e);let t="";for(const s in e){let n;try{n=this.pctReplace}catch{n=10}if(Math.random()*100<=n){if(e[s]===" "){t+=e[s]+" ";continue}if(e[s]==="")continue;t+=' <b class="choose" id="pop_'+this.words.length+'">[choose]</b> ',this.words.push(e[s]),this.answers.push("")}else t+=e[s]+" "}console.log(t),a("#slideTextDiv").html(t);const o=5;for(const s in this.words){const n="#pop_"+s;a(n).on("click",m=>{for(;this.options.length>0;)this.options.pop();const l=[];this.targetIdx=s,console.log("onclick: targetIdx = ",this.targetIdx,this.targetIdx.value,s,this.words.length),this.options.push({label:this.words[s],value:this.words[s]}),l.push(this.words[s]);for(let p=0;p<Math.min(o,this.words.length);p++)l.indexOf(this.words[p])>-1||(this.options.push({label:this.words[p],value:this.words[p]}),l.push(this.words[p]));console.log(l),this.showWordChoices=!0})}},step3(){if(a("#slideTextDiv").classed("hidden",!1),I(".stepB").classed("readyBorder",!1),I(".stepB").classed("notreadyBorder",!1),this.step===3)return;this.step=3,console.log("step",this.step);let e=!0;for(const t in this.words)this.words[t]!==this.answers[t]&&(e=!1);e===!0?(a("#slideTextDiv").classed("border-green",!0),a("#step3B").classed("hidden",!0),this.assignment.score+=this.words.length,this.reStore.assignmentStatus.points+=this.words.length,this.step=4,a("#step4B").classed("hidden",!1),a("#step4B").classed("readyBorder",!0)):(a("#slideTextDiv").classed("border-red",!0),a("#step3B").classed("notreadyBorder",!0))},step4(){a("#slideTextDiv").classed("hidden",!1),I(".stepB").classed("readyBorder",!1),I(".stepB").classed("notreadyBorder",!1),console.log("step ",this.step),this.step===4&&(a("#step4B").classed("readyBorder",!0),this.pgIdx===this.assignment.pages.length-1&&this.assignment.pages[this.pgIdx].isCustom===!1?console.log("Pages array ended with random. pgIdx "):this.pgIdx=this.pgIdx+1<=this.assignment.pages.length-1?this.pgIdx+1:0,console.log("Proceeding to next page",this.pgIdx),this.reStore.setStatus("pgIdx",this.pgIdx),a("#step3B").classed("hidden",!1),a("#step4B").classed("hidden",!0),this.step1())},update(e){console.log("targetIdx: ",this.targetIdx,"val: ",e),this.answers[this.targetIdx]=e;const t="#pop_"+this.targetIdx;a(t).html(e),console.log(this.answers),this.showWordChoices=!1,this.group=""},toggleSlideShow(){this.slideShowInterval?(window.clearInterval(this.slideShowInterval),this.slideShowInterval=null):this.slideShowInterval=window.setInterval(()=>{console.log("tick"),this.nextImg()},5e3)},toggleText(){a("#slideTextDiv").classed("hidden")===!0?(a("#slideTextDiv").classed("hidden",!1),this.visIcon="article"):(a("#slideTextDiv").classed("hidden",!0),this.visIcon="visibility_off")},saveImage(){console.log("saveImage")},saveBookmark(){console.log("saveBookmark")}}}),Fe=B("div",{class:"text-h6"},"Choose correct word:",-1),Oe={class:"q-pa-lg"},Pe={id:"slideCaptionDiv",class:"absolute-top text-subtitle1 text-center q-my-xl"},je={id:"slideTextDiv",class:"text-panel text-center absolute-center",contentEditable:"false"},Qe=B("div",{style:{height:"2px","background-color":"gray",width:"200px"}},null,-1);function Ae(e,t,o,s,n,m){return de(),ce(ue,null,[c(ee,{modelValue:this.showWordChoices,"onUpdate:modelValue":t[1]||(t[1]=l=>this.showWordChoices=l)},{default:b(()=>[c(X,null,{default:b(()=>[c(Q,null,{default:b(()=>[Fe]),_:1}),c(Q,{class:"q-pt-none"},{default:b(()=>[B("div",Oe,[c(Be,{modelValue:e.group,"onUpdate:modelValue":[t[0]||(t[0]=l=>e.group=l),this.update],options:this.options,color:"primary"},null,8,["modelValue","options","onUpdate:modelValue"])])]),_:1}),c(Y,{align:"right"},{default:b(()=>[ge(c(x,{flat:"",label:"OK",color:"primary"},null,512),[[Z]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),c(Ie,{class:"fixed-center",src:this.imgSrc,fit:this.imgFit,height:"100%"},{default:b(()=>[B("div",Pe,R(this.imgCap),1)]),_:1},8,["src","fit"]),B("div",je,R(this.pageText),1),c(F,{position:"top",offset:[0,60]},{default:b(()=>[c(x,{color:"accent",onClick:t[2]||(t[2]=l=>this.prevImg()),icon:"start",class:"rotate-180 q-pa-sm q-mx-sm"}),c(De,{square:"",color:"accent",icon:"keyboard_arrow_down",direction:"down",padding:"sm",class:"q-pa-sm q-mx-sm"},{default:b(()=>[c(O,{color:"accent",onClick:t[3]||(t[3]=l=>this.toggleSlideShow()),icon:"slideshow"}),c(O,{color:"accent",onClick:t[4]||(t[4]=l=>this.toggleText()),icon:e.visIcon,class:"q-pa-sm q-mx-sm"},null,8,["icon"]),c(O,{color:"accent",onClick:t[5]||(t[5]=l=>this.cycleFit()),icon:"fit_screen",class:"q-pa-sm q-mx-sm"})]),_:1}),c(x,{color:"accent",onClick:t[6]||(t[6]=l=>this.nextImg()),icon:"start",class:"q-pa-sm q-mx-sm"})]),_:1}),c(F,{position:"bottom",offset:[0,75]},{default:b(()=>[Qe]),_:1}),c(F,{position:"bottom",offset:[0,40]},{default:b(()=>[c(x,{id:"step1B",round:"",unelevated:"",color:"secondary",size:"15px",class:"clearBorder stepB q-mx-md readyBorder",onClick:t[7]||(t[7]=l=>this.step1()),icon:"local_library",stack:"","no-caps":"",label:"Step 1",padding:"sm md"}),c(x,{id:"step2B",round:"",unelevated:"",color:"secondary",size:"15px",class:"clearBorder stepB q-mx-md",onClick:t[8]||(t[8]=l=>this.step2()),icon:"handyman",stack:"","no-caps":"",label:"Step 2",padding:"sm md"}),c(x,{id:"step3B",round:"",unelevated:"",color:"secondary",size:"15px",class:"clearBorder stepB q-mx-md",onClick:t[9]||(t[9]=l=>this.step3()),icon:"spellcheck",stack:"","no-caps":"",label:"Step 3",padding:"sm md"}),c(x,{id:"step4B",round:"",unelevated:"",color:"secondary",size:"15px",class:"hidden clearBorder stepB q-mx-md",onClick:t[10]||(t[10]=l=>this.step4()),icon:"local_library",stack:"","no-caps":"",label:"Repeat",padding:"sm md"})]),_:1})],64)}var Ue=re($e,[["render",Ae]]);export{Ue as S};