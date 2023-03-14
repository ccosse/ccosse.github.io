import{u as Y,b as Z,Q as N}from"./use-form.fecff63d.js";import{i as g,g as T,ar as ee,as as se,r as c,h,aJ as R,a1 as j,R as A,j as M,q as P,J as z,Q as x,y as te,n as ie,aK as K,S as ae,d as oe,v as le,_ as ne,o as L,ag as E,a as d,w as b,e as y,K as re,aj as q,af as B,ak as de,ah as ce}from"./index.f854b5d6.js";import{u as W,a as J}from"./use-dark.1d598596.js";import{o as ge,u as he,Q as ue}from"./QCheckbox.30261fe3.js";import{Q as me}from"./QToggle.7b6b81b9.js";import{d as pe,C as fe,Q as ve}from"./ClosePopup.b623aa77.js";import{Q as be}from"./QCard.f32cdbd2.js";import{Q as xe}from"./QImg.887d3698.js";import{u as Se,a as ye,c as Ie}from"./scroll.d9ba8e54.js";import{b as Ce}from"./use-prevent-scroll.62197e54.js";import{Q as F}from"./QPageSticky.e6bc3bb7.js";import{u as ke,s as n,a as S}from"./re-store.4364324c.js";import{u as we,r as _e,d as qe}from"./firebase.0eb8f378.js";const Be=g("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[g("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),g("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]);var Te=T({name:"QRadio",props:{...W,...ee,...Y,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:s,emit:i}){const{proxy:t}=P(),o=J(e,t.$q),m=se(e,ge),a=c(null),{refocusTargetEl:p,refocusTarget:I}=he(e,a),f=h(()=>R(e.modelValue)===R(e.val)),l=h(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(o.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),u=h(()=>{const r=e.color!==void 0&&(e.keepColor===!0||f.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${f.value===!0?"truthy":"falsy"}${r}`}),C=h(()=>(f.value===!0?e.checkedIcon:e.uncheckedIcon)||null),V=h(()=>e.disable===!0?-1:e.tabindex||0),$=h(()=>{const r={type:"radio"};return e.name!==void 0&&Object.assign(r,{".checked":f.value===!0,"^checked":f.value===!0?"checked":void 0,name:e.name,value:e.val}),r}),D=Z($);function k(r){r!==void 0&&(z(r),I(r)),e.disable!==!0&&f.value!==!0&&i("update:modelValue",e.val,r)}function O(r){(r.keyCode===13||r.keyCode===32)&&z(r)}function v(r){(r.keyCode===13||r.keyCode===32)&&k(r)}return Object.assign(t,{set:k}),()=>{const r=C.value!==null?[g("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[g(j,{class:"q-radio__icon",name:C.value})])]:[Be];e.disable!==!0&&D(r,"unshift"," q-radio__native q-ma-none q-pa-none");const w=[g("div",{class:u.value,style:m.value,"aria-hidden":"true"},r)];p.value!==null&&w.push(p.value);const _=e.label!==void 0?A(s.default,[e.label]):M(s.default);return _!==void 0&&w.push(g("div",{class:"q-radio__label q-anchor--skip"},_)),g("div",{ref:a,class:l.value,tabindex:V.value,role:"radio","aria-label":e.label,"aria-checked":f.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:k,onKeydown:O,onKeyup:v},w)}}});const U={radio:Te,checkbox:ue,toggle:me},Pe=Object.keys(U);var Ve=T({name:"QOptionGroup",props:{...W,modelValue:{required:!0},options:{type:Array,validator:e=>e.every(s=>"value"in s&&"label"in s)},name:String,type:{default:"radio",validator:e=>Pe.includes(e)},color:String,keepColor:Boolean,dense:Boolean,size:String,leftLabel:Boolean,inline:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{emit:s,slots:i}){const{proxy:{$q:t}}=P(),o=Array.isArray(e.modelValue);e.type==="radio"?o===!0&&console.error("q-option-group: model should not be array"):o===!1&&console.error("q-option-group: model should be array in your case");const m=J(e,t),a=h(()=>U[e.type]),p=h(()=>"q-option-group q-gutter-x-sm"+(e.inline===!0?" q-option-group--inline":"")),I=h(()=>{const l={role:"group"};return e.type==="radio"&&(l.role="radiogroup",e.disable===!0&&(l["aria-disabled"]="true")),l});function f(l){s("update:modelValue",l)}return()=>g("div",{class:p.value,...I.value},e.options.map((l,u)=>{const C=i["label-"+u]!==void 0?()=>i["label-"+u](l):i.label!==void 0?()=>i.label(l):void 0;return g("div",[g(a.value,{modelValue:e.modelValue,val:l.value,name:l.name===void 0?e.name:l.name,disable:e.disable||l.disable,label:C===void 0?l.label:null,leftLabel:l.leftLabel===void 0?e.leftLabel:l.leftLabel,color:l.color===void 0?e.color:l.color,checkedIcon:l.checkedIcon,uncheckedIcon:l.uncheckedIcon,dark:l.dark||m.value,size:l.size===void 0?e.size:l.size,dense:e.dense,keepColor:l.keepColor===void 0?e.keepColor:l.keepColor,"onUpdate:modelValue":f},C)])}))}});const $e=["top","right","bottom","left"],G={type:{type:String,default:"a"},outline:Boolean,push:Boolean,flat:Boolean,unelevated:Boolean,color:String,textColor:String,glossy:Boolean,square:Boolean,padding:String,label:{type:[String,Number],default:""},labelPosition:{type:String,default:"right",validator:e=>$e.includes(e)},externalLabel:Boolean,hideLabel:{type:Boolean},labelClass:[Array,String,Object],labelStyle:[Array,String,Object],disable:Boolean,tabindex:[Number,String]};function H(e,s){return{formClass:h(()=>`q-fab--form-${e.square===!0?"square":"rounded"}`),stacked:h(()=>e.externalLabel===!1&&["top","bottom"].includes(e.labelPosition)),labelProps:h(()=>{if(e.externalLabel===!0){const i=e.hideLabel===null?s.value===!1:e.hideLabel;return{action:"push",data:{class:[e.labelClass,`q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}`+(i===!0?" q-fab__label--external-hidden":"")],style:e.labelStyle}}}return{action:["left","top"].includes(e.labelPosition)?"unshift":"push",data:{class:[e.labelClass,`q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}`+(e.hideLabel===!0?" q-fab__label--internal-hidden":"")],style:e.labelStyle}}})}}const X={start:"self-end",center:"self-center",end:"self-start"},De=Object.keys(X);var Q=T({name:"QFabAction",props:{...G,icon:{type:String,default:""},anchor:{type:String,validator:e=>De.includes(e)},to:[String,Object],replace:Boolean},emits:["click"],setup(e,{slots:s,emit:i}){const t=te(K,()=>({showing:{value:!0},onChildClick:ie})),{formClass:o,labelProps:m}=H(e,t.showing),a=h(()=>{const u=X[e.anchor];return o.value+(u!==void 0?` ${u}`:"")}),p=h(()=>e.disable===!0||t.showing.value!==!0);function I(u){t.onChildClick(u),i("click",u)}function f(){const u=[];return s.icon!==void 0?u.push(s.icon()):e.icon!==""&&u.push(g(j,{name:e.icon})),(e.label!==""||s.label!==void 0)&&u[m.value.action](g("div",m.value.data,s.label!==void 0?s.label():[e.label])),A(s.default,u)}const l=P();return Object.assign(l.proxy,{click:I}),()=>g(x,{class:a.value,...e,noWrap:!0,stack:e.stacked,icon:void 0,label:void 0,noCaps:!0,fabMini:!0,disable:p.value,onClick:I},f)}});const Oe=["up","right","down","left"],Fe=["left","center","right"];var Qe=T({name:"QFab",props:{...G,...Se,icon:String,activeIcon:String,hideIcon:Boolean,hideLabel:{default:null},direction:{type:String,default:"right",validator:e=>Oe.includes(e)},persistent:Boolean,verticalActionsAlign:{type:String,default:"center",validator:e=>Fe.includes(e)}},emits:ye,setup(e,{slots:s}){const i=c(null),t=c(e.modelValue===!0),o=Ce(),{proxy:{$q:m}}=P(),{formClass:a,labelProps:p}=H(e,t),I=h(()=>e.persistent!==!0),{hide:f,toggle:l}=Ie({showing:t,hideOnRouteChange:I}),u=h(()=>({opened:t.value})),C=h(()=>`q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${a.value}`+(t.value===!0?" q-fab--opened":" q-fab--closed")),V=h(()=>`q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${t.value===!0?"opened":"closed"}`),$=h(()=>{const v={id:o,role:"menu"};return t.value!==!0&&(v["aria-hidden"]="true"),v}),D=h(()=>`q-fab__icon-holder  q-fab__icon-holder--${t.value===!0?"opened":"closed"}`);function k(v,r){const w=s[v],_=`q-fab__${v} absolute-full`;return w===void 0?g(j,{class:_,name:e[r]||m.iconSet.fab[r]}):g("div",{class:_},w(u.value))}function O(){const v=[];return e.hideIcon!==!0&&v.push(g("div",{class:D.value},[k("icon","icon"),k("active-icon","activeIcon")])),(e.label!==""||s.label!==void 0)&&v[p.value.action](g("div",p.value.data,s.label!==void 0?s.label(u.value):[e.label])),A(s.tooltip,v)}return ae(K,{showing:t,onChildClick(v){f(v),i.value!==null&&i.value.$el.focus()}}),()=>g("div",{class:C.value},[g(x,{ref:i,class:a.value,...e,noWrap:!0,stack:e.stacked,align:void 0,icon:void 0,label:void 0,noCaps:!0,fab:!0,"aria-expanded":t.value===!0?"true":"false","aria-haspopup":"true","aria-controls":o,onClick:l},O),g("div",{class:V.value,...$.value},M(s.default))])}});const je=oe({name:"StepperComponent",props:{initialImgSrc:{type:String,required:!0},initialImgFit:{type:String},initialPageText:{type:String,required:!1,default:"This is the paragraph to be reconstructed."},initialPageObj:{type:Object,required:!1,default:c({imgIdx:0,imgs:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Douglas_DC-3%2C_SE-CFP.jpg/1024px-Douglas_DC-3%2C_SE-CFP.jpg",cap:"Doublas DC-3"}],pageText:"This is the paragraph to be reconstructed (default text)",imgFit:"cover",pctReplace:25})},assignmentObj:{type:Object,required:!1}},setup(e){const s=ke();return{props:e,reStore:s,group:c(""),visIcon:c("article"),imgs:c([]),imgIdx:c(0),imgSrc:c(""),imgCap:c(""),imgFit:c(""),pgIdx:c(0),pageText:c(""),pctReplace:c(15),assignment:c(null),step:c(1),words:c([]),options:c([]),answers:c([]),targetIdx:c(0),showWordChoices:c(!1),slideShowInterval:c(null)}},mounted(){le(this.reStore.courses,async(o,m)=>{console.log("Stepper watcher"),this.assignment.id!==o.aid&&(console.log("NEED TO LOAD ASSIGNMENT INTO STEPPER"),this.assignment=JSON.parse(JSON.stringify(this.reStore.courses[o.ck].assignments[o.aid]))),this.imgFit=this.reStore.page.imgFit,this.imgIdx=this.reStore.courses.imgIdx,this.pgIdx=this.reStore.courses.pgIdx,this.pageText=this.reStore.page.pageText;try{this.imgSrc=this.reStore.page.imgs[this.imgIdx].url,this.imgCap=this.reStore.page.imgs[this.imgIdx].cap}catch(a){console.log(a)}console.log("Stepper watcher",this.imgSrc)}),console.log("Stepper.mounted ",this.props);const e=this.reStore.courses.ck,s=this.reStore.courses.aid,i=this.reStore.courses.pgIdx,t=this.reStore.courses.imgIdx;console.log(e,s,i,t,this.props),this.props.assignmentObj?(console.log("Stepper using assignment from props"),this.assignment=this.props.assignmentObj,this.assignment.pages||(this.assignment.pages=[]),!this.assignment.pages.length>0,this.imgSrc=this.assignment.pages[i].imgs[t].url,this.imgCap=this.assignment.pages[i].imgs[t].cap):this.reStore.authenticated?(console.log("Stepper using fresh copy from master"),this.assignment=JSON.parse(JSON.stringify(this.reStore.courses[e].assignments[s])),console.log("Stepper assignment ",this.assignment),this.imgSrc=this.assignment.pages[i].imgs[t].url,this.imgCap=this.assignment.pages[i].imgs[t].cap):(console.log("Taking demo as guest: need to set ck,aid @courses!"),this.reStore.courses.ck="6799643933511432",this.reStore.courses.aid="4237753440201235",this.assignment=JSON.parse(JSON.stringify(this.reStore.courses["6799643933511432"].assignments["4237753440201235"])),this.reStore.loadCover(),console.log("Stepper made a copy of assignment and called loadCover")),this.reStore.setStatus("points",this.assignment.points),this.reStore.setStatus("goal",this.assignment.goal),this.reStore.setStatus("title",this.assignment.title),this.reStore.setStatus("pgIdx",this.assignment.pgIdx),this.reStore.setStatus("pgTot",this.assignment.pages.length),this.reStore.setStatus("ck",this.assignment.ck);try{this.reStore.setStatus("mapCoords",this.assignment.pages[0].mapCoords)}catch(o){console.log(o)}this.reStore.loadCover()},methods:{stringify(){const e=JSON.stringify(this.assignment);console.log(e)},prevImg(){this.imgIdx=this.imgIdx-1<0?this.imgs.length-1:this.imgIdx-1,this.imgSrc=this.imgs[this.imgIdx].url,this.imgCap=this.imgs[this.imgIdx].cap,console.log("stepper prevImg",this.imgIdx),this.reStore.setStatus("imgIdx",this.imgIdx)},nextImg(){this.imgIdx=this.imgIdx+1>this.imgs.length-1?0:this.imgIdx+1,this.imgSrc=this.imgs[this.imgIdx].url,this.imgCap=this.imgs[this.imgIdx].cap,console.log("stepper nextImg",this.imgIdx,this.imgs),this.reStore.setStatus("imgIdx",this.imgIdx)},cycleFit(){const e=["scale-down","cover"];let s=e.indexOf(this.imgFit);this.imgFit=s+1>=e.length?e[0]:e[s+1],this.reStore.setStatus("imgFit",this.imgFit)},loadPage(e){console.log("loadPage page ",e),this.imgs=e.imgs,this.imgIdx=e.imgIdx,this.imgSrc=e.imgs[this.imgIdx].url,this.imgCap=e.imgs[this.imgIdx].cap,this.imgFit=e.imgFit,this.pageText=e.pageText,this.pctReplace=e.pctReplace,this.mapCoords=e.mapCoords,n("#slideTextDiv").html(this.pageText),S(".assignment").classed("hidden",!1),S(".coverslide").classed("hidden",!0),this.reStore.setStatus("imgIdx",this.imgIdx),this.reStore.setStatus("imgTot",this.imgs.length),this.reStore.setStatus("guideWords",e.guideWords),this.reStore.setStatus("imgFit",this.imgFit),this.reStore.setStatus("pageid",e.pageid),this.reStore.setStatus("pctReplace",this.pctReplace),this.reStore.setStatus("pageTitle",e.pageTitle),this.reStore.setStatus("mapCoords",e.mapCoords)},step1(){for(;this.words.length>0;)this.words.pop();for(;this.answers.length>0;)this.answers.pop();for(;this.options.length>0;)this.options.pop();this.step=1,console.log("step",this.step),n("#slideTextDiv").classed("hidden",!1),n("#step3B").classed("hidden",!1),n("#step4B").classed("hidden",!0),S(".stepB").classed("readyBorder",!1),S(".stepB").classed("notreadyBorder",!1),n("#slideTextDiv").classed("border-red",!1),n("#slideTextDiv").classed("border-green",!1),n("#step1B").classed("readyBorder",!0);let e;if(this.assignment.pages[this.pgIdx].isCustom===!0)e=this.assignment.pages[this.pgIdx],console.log("step1a ",e),this.loadPage(e);else if(this.assignment.pages[this.pgIdx].pageid){if(this.assignment.pages[this.pgIdx].pageid){const s="",i=this.assignment.pages[this.pgIdx].pageid,t=this.assignment.pages[this.pgIdx].langVoiceKey;this.reStore.preferences.langVoiceKey=t,this.reStore.preferences.langVoice=this.reStore.langVoices[t];const o=this.reStore.getPage(s,i,t);console.log("received promise ",o),o.then(m=>{console.log("step1c ",this.reStore.page);try{this.reStore.page.imgIdx=this.assignment.pages[this.pgIdx].imgIdx}catch(a){console.log(a)}this.loadPage(this.reStore.page)})}}else{const s=this.assignment.pages[this.pgIdx].guideWords,i=this.assignment.pages[this.pgIdx].pageid,t=this.assignment.pages[this.pgIdx].langVoiceKey;console.log("guideWords",s,"pageid ",i);const o=this.reStore.getPage(s,i,t);console.log("received promise ",o),o.then(m=>{console.log("step1b ",this.reStore.page),this.loadPage(this.reStore.page)})}},step2(){if(n("#slideTextDiv").classed("hidden",!1),S(".stepB").classed("readyBorder",!1),S(".stepB").classed("notreadyBorder",!1),this.step===2)return;for(this.step=2,n("#step2B").classed("readyBorder",!0),console.log("step",this.step),n("#slideTextDiv").classed("border-red",!1),n("#slideTextDiv").classed("border-green",!1);this.words.length>0;)this.words.pop();for(;this.answers.length>0;)this.answers.pop();for(;this.options.length>0;)this.options.pop();const e=this.pageText.replaceAll("  "," ").split(" ");console.log("rtext: ",e);let s="";for(const t in e){let o;try{o=this.pctReplace}catch{o=10}if(Math.random()*100<=o){if(e[t]===" "){s+=e[t]+" ";continue}if(e[t]==="")continue;s+=' <b class="choose" id="pop_'+this.words.length+'">[choose]</b> ',this.words.push(e[t]),this.answers.push("")}else s+=e[t]+" "}console.log(s),n("#slideTextDiv").html(s);const i=5;for(const t in this.words){const o="#pop_"+t;n(o).on("click",m=>{for(;this.options.length>0;)this.options.pop();const a=[];this.targetIdx=t,console.log("onclick: targetIdx = ",this.targetIdx,this.targetIdx.value,t,this.words.length),this.options.push({label:this.words[t],value:this.words[t]}),a.push(this.words[t]);for(let p=0;p<Math.min(i,this.words.length);p++)a.indexOf(this.words[p])>-1||(this.options.push({label:this.words[p],value:this.words[p]}),a.push(this.words[p]));console.log(a),this.showWordChoices=!0})}},step3(){if(n("#slideTextDiv").classed("hidden",!1),S(".stepB").classed("readyBorder",!1),S(".stepB").classed("notreadyBorder",!1),this.step===3)return;this.step=3,console.log("step",this.step);let e=!0;for(const s in this.words)this.words[s]!==this.answers[s]&&(e=!1);if(e===!0){if(n("#slideTextDiv").classed("border-green",!0),n("#step3B").classed("hidden",!0),this.assignment.score+=this.words.length,this.reStore.assignmentStatus.points+=this.words.length,this.reStore.authenticated){const s=this.reStore.courses.ck,i=this.assignment.id;this.assignment.scores||(this.assignment.scores={},this.reStore.courses[s].assignments[i].scores={});const t=this.reStore.userSnapshot.profile.emailKey;this.assignment.scores[t]||(this.assignment.scores[t]=0),this.assignment.scores[t]+=this.words.length;const o=`courses/${s}/assignments/${i}/scores`;console.log(o);const m=this.assignment.scores;console.log(m),this.reStore.courses[s].assignments[i].scores[t]=this.assignment.scores[t],we(_e(qe,o),m)}this.step=4,n("#step4B").classed("hidden",!1),n("#step4B").classed("readyBorder",!0)}else n("#slideTextDiv").classed("border-red",!0),n("#step3B").classed("notreadyBorder",!0)},step4(){n("#slideTextDiv").classed("hidden",!1),S(".stepB").classed("readyBorder",!1),S(".stepB").classed("notreadyBorder",!1),console.log("step ",this.step),this.step===4&&(n("#step4B").classed("readyBorder",!0),this.pgIdx===this.assignment.pages.length-1&&this.assignment.pages[this.pgIdx].isCustom===!1?console.log("Pages array ended with random. pgIdx "):this.pgIdx=this.pgIdx+1<=this.assignment.pages.length-1?this.pgIdx+1:0,console.log("Proceeding to next page",this.pgIdx),this.reStore.setStatus("pgIdx",this.pgIdx),n("#step3B").classed("hidden",!1),n("#step4B").classed("hidden",!0),this.step1())},update(e){console.log("targetIdx: ",this.targetIdx,"val: ",e),this.answers[this.targetIdx]=e;const s="#pop_"+this.targetIdx;n(s).html(e),console.log(this.answers),this.showWordChoices=!1,this.group=""},toggleSlideShow(){this.slideShowInterval?(window.clearInterval(this.slideShowInterval),this.slideShowInterval=null):this.slideShowInterval=window.setInterval(()=>{console.log("tick"),this.nextImg()},5e3)},toggleText(){n("#slideTextDiv").classed("hidden")===!0?(n("#slideTextDiv").classed("hidden",!1),this.visIcon="article"):(n("#slideTextDiv").classed("hidden",!0),this.visIcon="visibility_off")},saveImage(){console.log("saveImage")},saveBookmark(){console.log("saveBookmark")}}}),Ae=y("div",{class:"text-h6"},"Choose correct word:",-1),Ne={class:"q-pa-lg"},Re={id:"slideCaptionDiv",class:"absolute-top text-subtitle1 text-center q-my-xl assignment"},ze={id:"slideTextDiv",class:"text-panel text-center absolute-center assignment",contentEditable:"false"},Le={key:0},Ee={id:"coverSlideDiv",class:"flex flex-center cover-panel absolute-center coverslide",contentEditable:"false"},Me={class:"q-ma-md"},Ke=y("br",null,null,-1),We=y("br",null,null,-1),Je={class:"q-ma-md"},Ue=y("div",{style:{height:"2px","background-color":"gray",width:"200px"}},null,-1);function Ge(e,s,i,t,o,m){return L(),E(ce,null,[d(ve,{modelValue:this.showWordChoices,"onUpdate:modelValue":s[1]||(s[1]=a=>this.showWordChoices=a)},{default:b(()=>[d(be,null,{default:b(()=>[d(N,null,{default:b(()=>[Ae]),_:1}),d(N,{class:"q-pt-none"},{default:b(()=>[y("div",Ne,[d(Ve,{modelValue:e.group,"onUpdate:modelValue":[s[0]||(s[0]=a=>e.group=a),this.update],options:this.options,color:"primary"},null,8,["modelValue","options","onUpdate:modelValue"])])]),_:1}),d(pe,{align:"right"},{default:b(()=>[re(d(x,{flat:"",label:"OK",color:"primary"},null,512),[[fe]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),d(xe,{class:"fixed-center",src:this.imgSrc,fit:this.imgFit,height:"100%"},{default:b(()=>[y("div",Re,q(this.imgCap),1)]),_:1},8,["src","fit"]),y("div",ze,q(this.pageText),1),this.assignment?(L(),E("span",Le,[y("div",Ee,[y("div",Me,[d(x,{style:{width:"200px",height:"200px","font-size":"12pt"},color:"primary"},{default:b(()=>[B(q(this.assignment.title)+" ",1),Ke,B(" "+q(this.assignment.pages.length)+" Pages ",1),We,B(" "+q(this.assignment.goal)+" Points ",1)]),_:1})]),y("div",Je,[d(x,{style:{width:"200px",height:"200px","font-size":"24pt"},stack:"",size:"xl","icon-right":"play_circle","text-color":"white",color:"primary",onClick:s[2]||(s[2]=a=>this.reStore.startAssignment())},{default:b(()=>[B("Start")]),_:1})])])])):de("",!0),d(F,{position:"top",offset:[0,60],class:"assignment"},{default:b(()=>[d(x,{color:"accent",onClick:s[3]||(s[3]=a=>this.prevImg()),icon:"start",class:"rotate-180 q-pa-sm q-mx-sm"}),d(Qe,{square:"",color:"accent",icon:"keyboard_arrow_down",direction:"down",padding:"sm",class:"q-pa-sm q-mx-sm"},{default:b(()=>[d(Q,{color:"accent",onClick:s[4]||(s[4]=a=>this.toggleSlideShow()),icon:"slideshow"}),d(Q,{color:"accent",onClick:s[5]||(s[5]=a=>this.toggleText()),icon:e.visIcon,class:"q-pa-sm q-mx-sm"},null,8,["icon"]),d(Q,{color:"accent",onClick:s[6]||(s[6]=a=>this.cycleFit()),icon:"fit_screen",class:"q-pa-sm q-mx-sm"})]),_:1}),d(x,{color:"accent",onClick:s[7]||(s[7]=a=>this.nextImg()),icon:"start",class:"q-pa-sm q-mx-sm"})]),_:1}),d(F,{position:"bottom",offset:[0,75],class:"assignment"},{default:b(()=>[Ue]),_:1}),d(F,{position:"bottom",offset:[0,40],class:"assignment"},{default:b(()=>[d(x,{id:"step1B",round:"",unelevated:"",color:"secondary",size:"15px",class:"clearBorder stepB q-mx-md readyBorder",onClick:s[8]||(s[8]=a=>this.step1()),icon:"local_library",stack:"","no-caps":"",label:"Step 1",padding:"sm md"}),d(x,{id:"step2B",round:"",unelevated:"",color:"secondary",size:"15px",class:"clearBorder stepB q-mx-md",onClick:s[9]||(s[9]=a=>this.step2()),icon:"handyman",stack:"","no-caps":"",label:"Step 2",padding:"sm md"}),d(x,{id:"step3B",round:"",unelevated:"",color:"secondary",size:"15px",class:"clearBorder stepB q-mx-md",onClick:s[10]||(s[10]=a=>this.step3()),icon:"spellcheck",stack:"","no-caps":"",label:"Step 3",padding:"sm md"}),d(x,{id:"step4B",round:"",unelevated:"",color:"secondary",size:"15px",class:"hidden clearBorder stepB q-mx-md",onClick:s[11]||(s[11]=a=>this.step4()),icon:"local_library",stack:"","no-caps":"",label:"Repeat",padding:"sm md"})]),_:1})],64)}var ds=ne(je,[["render",Ge]]);export{ds as S};
