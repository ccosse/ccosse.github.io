import{u as G,c as H,Q as X,a as j}from"./use-portal.d6649e5a.js";import{i as g,g as q,ar as Y,as as Z,r as d,h,aJ as A,a1 as O,R as Q,j as z,q as _,J as R,Q as x,y as ee,n as te,aK as M,S as se,d as ie,v as ae,_ as oe,o as le,ag as ne,a as c,w as b,e as B,K as re,aj as L,ah as de}from"./index.0a1c6404.js";import{a as W,c as K,u as ce,b as ge,m as he,e as ue}from"./use-dark.b240003d.js";import{o as pe,u as me,Q as fe}from"./QCheckbox.5b38e897.js";import{Q as ve}from"./QToggle.d843c80f.js";import{d as be,C as xe,Q as Se}from"./ClosePopup.faf0db1e.js";import{Q as ye}from"./QImg.6560692d.js";import{Q as P}from"./QPageSticky.7c77b588.js";import{u as Ie,s as l,a as y}from"./re-store.1e839653.js";const Ce=g("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[g("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),g("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]);var ke=q({name:"QRadio",props:{...W,...Y,...G,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:t,emit:o}){const{proxy:s}=_(),n=K(e,s.$q),m=Z(e,pe),i=d(null),{refocusTargetEl:p,refocusTarget:S}=me(e,i),f=h(()=>A(e.modelValue)===A(e.val)),a=h(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(n.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),u=h(()=>{const r=e.color!==void 0&&(e.keepColor===!0||f.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${f.value===!0?"truthy":"falsy"}${r}`}),I=h(()=>(f.value===!0?e.checkedIcon:e.uncheckedIcon)||null),T=h(()=>e.disable===!0?-1:e.tabindex||0),V=h(()=>{const r={type:"radio"};return e.name!==void 0&&Object.assign(r,{".checked":f.value===!0,"^checked":f.value===!0?"checked":void 0,name:e.name,value:e.val}),r}),D=H(V);function C(r){r!==void 0&&(R(r),S(r)),e.disable!==!0&&f.value!==!0&&o("update:modelValue",e.val,r)}function $(r){(r.keyCode===13||r.keyCode===32)&&R(r)}function v(r){(r.keyCode===13||r.keyCode===32)&&C(r)}return Object.assign(s,{set:C}),()=>{const r=I.value!==null?[g("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[g(O,{class:"q-radio__icon",name:I.value})])]:[Ce];e.disable!==!0&&D(r,"unshift"," q-radio__native q-ma-none q-pa-none");const k=[g("div",{class:u.value,style:m.value,"aria-hidden":"true"},r)];p.value!==null&&k.push(p.value);const w=e.label!==void 0?Q(t.default,[e.label]):z(t.default);return w!==void 0&&k.push(g("div",{class:"q-radio__label q-anchor--skip"},w)),g("div",{ref:i,class:a.value,tabindex:T.value,role:"radio","aria-label":e.label,"aria-checked":f.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:C,onKeydown:$,onKeyup:v},k)}}});const N={radio:ke,checkbox:fe,toggle:ve},we=Object.keys(N);var Be=q({name:"QOptionGroup",props:{...W,modelValue:{required:!0},options:{type:Array,validator:e=>e.every(t=>"value"in t&&"label"in t)},name:String,type:{default:"radio",validator:e=>we.includes(e)},color:String,keepColor:Boolean,dense:Boolean,size:String,leftLabel:Boolean,inline:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{emit:t,slots:o}){const{proxy:{$q:s}}=_(),n=Array.isArray(e.modelValue);e.type==="radio"?n===!0&&console.error("q-option-group: model should not be array"):n===!1&&console.error("q-option-group: model should be array in your case");const m=K(e,s),i=h(()=>N[e.type]),p=h(()=>"q-option-group q-gutter-x-sm"+(e.inline===!0?" q-option-group--inline":"")),S=h(()=>{const a={role:"group"};return e.type==="radio"&&(a.role="radiogroup",e.disable===!0&&(a["aria-disabled"]="true")),a});function f(a){t("update:modelValue",a)}return()=>g("div",{class:p.value,...S.value},e.options.map((a,u)=>{const I=o["label-"+u]!==void 0?()=>o["label-"+u](a):o.label!==void 0?()=>o.label(a):void 0;return g("div",[g(i.value,{modelValue:e.modelValue,val:a.value,name:a.name===void 0?e.name:a.name,disable:e.disable||a.disable,label:I===void 0?a.label:null,leftLabel:a.leftLabel===void 0?e.leftLabel:a.leftLabel,color:a.color===void 0?e.color:a.color,checkedIcon:a.checkedIcon,uncheckedIcon:a.uncheckedIcon,dark:a.dark||m.value,size:a.size===void 0?e.size:a.size,dense:e.dense,keepColor:a.keepColor===void 0?e.keepColor:a.keepColor,"onUpdate:modelValue":f},I)])}))}});const qe=["top","right","bottom","left"],E={type:{type:String,default:"a"},outline:Boolean,push:Boolean,flat:Boolean,unelevated:Boolean,color:String,textColor:String,glossy:Boolean,square:Boolean,padding:String,label:{type:[String,Number],default:""},labelPosition:{type:String,default:"right",validator:e=>qe.includes(e)},externalLabel:Boolean,hideLabel:{type:Boolean},labelClass:[Array,String,Object],labelStyle:[Array,String,Object],disable:Boolean,tabindex:[Number,String]};function J(e,t){return{formClass:h(()=>`q-fab--form-${e.square===!0?"square":"rounded"}`),stacked:h(()=>e.externalLabel===!1&&["top","bottom"].includes(e.labelPosition)),labelProps:h(()=>{if(e.externalLabel===!0){const o=e.hideLabel===null?t.value===!1:e.hideLabel;return{action:"push",data:{class:[e.labelClass,`q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}`+(o===!0?" q-fab__label--external-hidden":"")],style:e.labelStyle}}}return{action:["left","top"].includes(e.labelPosition)?"unshift":"push",data:{class:[e.labelClass,`q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}`+(e.hideLabel===!0?" q-fab__label--internal-hidden":"")],style:e.labelStyle}}})}}const U={start:"self-end",center:"self-center",end:"self-start"},_e=Object.keys(U);var F=q({name:"QFabAction",props:{...E,icon:{type:String,default:""},anchor:{type:String,validator:e=>_e.includes(e)},to:[String,Object],replace:Boolean},emits:["click"],setup(e,{slots:t,emit:o}){const s=ee(M,()=>({showing:{value:!0},onChildClick:te})),{formClass:n,labelProps:m}=J(e,s.showing),i=h(()=>{const u=U[e.anchor];return n.value+(u!==void 0?` ${u}`:"")}),p=h(()=>e.disable===!0||s.showing.value!==!0);function S(u){s.onChildClick(u),o("click",u)}function f(){const u=[];return t.icon!==void 0?u.push(t.icon()):e.icon!==""&&u.push(g(O,{name:e.icon})),(e.label!==""||t.label!==void 0)&&u[m.value.action](g("div",m.value.data,t.label!==void 0?t.label():[e.label])),Q(t.default,u)}const a=_();return Object.assign(a.proxy,{click:S}),()=>g(x,{class:i.value,...e,noWrap:!0,stack:e.stacked,icon:void 0,label:void 0,noCaps:!0,fabMini:!0,disable:p.value,onClick:S},f)}});const Te=["up","right","down","left"],Ve=["left","center","right"];var De=q({name:"QFab",props:{...E,...ce,icon:String,activeIcon:String,hideIcon:Boolean,hideLabel:{default:null},direction:{type:String,default:"right",validator:e=>Te.includes(e)},persistent:Boolean,verticalActionsAlign:{type:String,default:"center",validator:e=>Ve.includes(e)}},emits:ge,setup(e,{slots:t}){const o=d(null),s=d(e.modelValue===!0),n=he(),{proxy:{$q:m}}=_(),{formClass:i,labelProps:p}=J(e,s),S=h(()=>e.persistent!==!0),{hide:f,toggle:a}=ue({showing:s,hideOnRouteChange:S}),u=h(()=>({opened:s.value})),I=h(()=>`q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${i.value}`+(s.value===!0?" q-fab--opened":" q-fab--closed")),T=h(()=>`q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${s.value===!0?"opened":"closed"}`),V=h(()=>{const v={id:n,role:"menu"};return s.value!==!0&&(v["aria-hidden"]="true"),v}),D=h(()=>`q-fab__icon-holder  q-fab__icon-holder--${s.value===!0?"opened":"closed"}`);function C(v,r){const k=t[v],w=`q-fab__${v} absolute-full`;return k===void 0?g(O,{class:w,name:e[r]||m.iconSet.fab[r]}):g("div",{class:w},k(u.value))}function $(){const v=[];return e.hideIcon!==!0&&v.push(g("div",{class:D.value},[C("icon","icon"),C("active-icon","activeIcon")])),(e.label!==""||t.label!==void 0)&&v[p.value.action](g("div",p.value.data,t.label!==void 0?t.label(u.value):[e.label])),Q(t.tooltip,v)}return se(M,{showing:s,onChildClick(v){f(v),o.value!==null&&o.value.$el.focus()}}),()=>g("div",{class:I.value},[g(x,{ref:o,class:i.value,...e,noWrap:!0,stack:e.stacked,align:void 0,icon:void 0,label:void 0,noCaps:!0,fab:!0,"aria-expanded":s.value===!0?"true":"false","aria-haspopup":"true","aria-controls":n,onClick:a},$),g("div",{class:T.value,...V.value},z(t.default))])}});const $e=ie({name:"StepperComponent",props:{initialImgSrc:{type:String,required:!0},initialImgFit:{type:String},initialPageText:{type:String,required:!1,default:"This is the paragraph to be reconstructed."},initialPageObj:{type:Object,required:!1,default:d({imgIdx:0,imgs:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Douglas_DC-3%2C_SE-CFP.jpg/1024px-Douglas_DC-3%2C_SE-CFP.jpg",cap:"Doublas DC-3"}],pageText:"This is the paragraph to be reconstructed (default text)",imgFit:"cover",pctReplace:25})},assignmentObj:{type:Object,required:!1}},setup(e){const t=Ie();return{props:e,reStore:t,group:d(""),visIcon:d("article"),imgs:d([]),imgIdx:d(0),imgSrc:d(""),imgCap:d(""),imgFit:d(""),pgIdx:d(0),pageText:d(""),pctReplace:d(15),assignment:d(null),step:d(1),words:d([]),options:d([]),answers:d([]),targetIdx:d(0),showWordChoices:d(!1),slideShowInterval:d(null)}},mounted(){ae(this.reStore.courses,async(n,m)=>{console.log("Stepper watcher"),this.imgFit=this.reStore.page.imgFit,this.imgIdx=this.reStore.courses.imgIdx,this.pgIdx=this.reStore.courses.pgIdx,this.pageText=this.reStore.page.pageText;try{this.imgSrc=this.reStore.page.imgs[this.imgIdx].url,this.imgCap=this.reStore.page.imgs[this.imgIdx].cap}catch(i){console.log(i)}console.log("Stepper watcher",this.imgSrc)}),console.log("Stepper.mounted ",this.props);const e=this.reStore.courses.ck,t=this.reStore.courses.aid,o=this.reStore.courses.pgIdx,s=this.reStore.courses.imgIdx;console.log(e,t,o,s,this.props),this.props.assignmentObj?(console.log("Stepper using assignment from props"),this.assignment=this.props.assignmentObj,this.assignment.pages||(this.assignment.pages=[]),!this.assignment.pages.length>0,this.imgSrc=this.assignment.pages[o].imgs[s].url,this.imgCap=this.assignment.pages[o].imgs[s].cap):this.reStore.authenticated?(console.log("Stepper using fresh copy from master"),this.assignment=JSON.parse(JSON.stringify(this.reStore.courses[e].assignments[t])),console.log("Stepper assignment ",this.assignment),this.imgSrc=this.assignment.pages[o].imgs[s].url,this.imgCap=this.assignment.pages[o].imgs[s].cap):(console.log("Taking demo as guest: need to set ck,aid @courses!"),this.reStore.courses.ck="6799643933511432",this.reStore.courses.aid="4237753440201235",this.assignment=JSON.parse(JSON.stringify(this.reStore.courses["6799643933511432"].assignments["4237753440201235"])),this.reStore.loadCover()),this.reStore.setStatus("points",this.assignment.points),this.reStore.setStatus("goal",this.assignment.goal),this.reStore.setStatus("title",this.assignment.title),this.reStore.setStatus("pgIdx",this.assignment.pgIdx),this.reStore.setStatus("pgTot",this.assignment.pages.length),this.reStore.setStatus("ck",this.assignment.ck);try{this.reStore.setStatus("mapCoords",this.assignment.pages[0].mapCoords)}catch(n){console.log(n)}this.reStore.loadCover()},methods:{stringify(){const e=JSON.stringify(this.assignment);console.log(e)},prevImg(){this.imgIdx=this.imgIdx-1<0?this.imgs.length-1:this.imgIdx-1,this.imgSrc=this.imgs[this.imgIdx].url,this.imgCap=this.imgs[this.imgIdx].cap,console.log("stepper prevImg",this.imgIdx),this.reStore.setStatus("imgIdx",this.imgIdx)},nextImg(){this.imgIdx=this.imgIdx+1>this.imgs.length-1?0:this.imgIdx+1,this.imgSrc=this.imgs[this.imgIdx].url,this.imgCap=this.imgs[this.imgIdx].cap,console.log("stepper nextImg",this.imgIdx,this.imgs),this.reStore.setStatus("imgIdx",this.imgIdx)},cycleFit(){const e=["scale-down","cover"];let t=e.indexOf(this.imgFit);this.imgFit=t+1>=e.length?e[0]:e[t+1],this.reStore.setStatus("imgFit",this.imgFit)},loadPage(e){console.log("loadPage page ",e),this.imgs=e.imgs,this.imgIdx=e.imgIdx,this.imgSrc=e.imgs[this.imgIdx].url,this.imgCap=e.imgs[this.imgIdx].cap,this.imgFit=e.imgFit,this.pageText=e.pageText,this.pctReplace=e.pctReplace,this.mapCoords=e.mapCoords,l("#slideTextDiv").html(this.pageText),this.reStore.setStatus("imgIdx",this.imgIdx),this.reStore.setStatus("imgTot",this.imgs.length),this.reStore.setStatus("guideWords",e.guideWords),this.reStore.setStatus("imgFit",this.imgFit),this.reStore.setStatus("pageid",e.pageid),this.reStore.setStatus("pctReplace",this.pctReplace),this.reStore.setStatus("pageTitle",e.pageTitle),this.reStore.setStatus("mapCoords",e.mapCoords)},step1(){for(;this.words.length>0;)this.words.pop();for(;this.answers.length>0;)this.answers.pop();for(;this.options.length>0;)this.options.pop();this.step=1,console.log("step",this.step),l("#slideTextDiv").classed("hidden",!1),l("#step3B").classed("hidden",!1),l("#step4B").classed("hidden",!0),y(".stepB").classed("readyBorder",!1),y(".stepB").classed("notreadyBorder",!1),l("#slideTextDiv").classed("border-red",!1),l("#slideTextDiv").classed("border-green",!1),l("#step1B").classed("readyBorder",!0);let e;if(this.assignment.pages[this.pgIdx].isCustom===!0)e=this.assignment.pages[this.pgIdx],console.log("step1a ",e),this.loadPage(e);else if(this.assignment.pages[this.pgIdx].pageid){if(this.assignment.pages[this.pgIdx].pageid){const t="",o=this.assignment.pages[this.pgIdx].pageid,s=this.assignment.pages[this.pgIdx].langVoiceKey;this.reStore.preferences.langVoiceKey=s,this.reStore.preferences.langVoice=this.reStore.langVoices[s];const n=this.reStore.getPage(t,o,s);console.log("received promise ",n),n.then(m=>{console.log("step1c ",this.reStore.page);try{this.reStore.page.imgIdx=this.assignment.pages[this.pgIdx].imgIdx}catch(i){console.log(i)}this.loadPage(this.reStore.page)})}}else{const t=this.assignment.pages[this.pgIdx].guideWords,o=this.assignment.pages[this.pgIdx].pageid,s=this.assignment.pages[this.pgIdx].langVoiceKey;console.log("guideWords",t,"pageid ",o);const n=this.reStore.getPage(t,o,s);console.log("received promise ",n),n.then(m=>{console.log("step1b ",this.reStore.page),this.loadPage(this.reStore.page)})}},step2(){if(l("#slideTextDiv").classed("hidden",!1),y(".stepB").classed("readyBorder",!1),y(".stepB").classed("notreadyBorder",!1),this.step===2)return;for(this.step=2,l("#step2B").classed("readyBorder",!0),console.log("step",this.step),l("#slideTextDiv").classed("border-red",!1),l("#slideTextDiv").classed("border-green",!1);this.words.length>0;)this.words.pop();for(;this.answers.length>0;)this.answers.pop();for(;this.options.length>0;)this.options.pop();const e=this.pageText.replaceAll("  "," ").split(" ");console.log("rtext: ",e);let t="";for(const s in e){let n;try{n=this.pctReplace}catch{n=10}if(Math.random()*100<=n){if(e[s]===" "){t+=e[s]+" ";continue}if(e[s]==="")continue;t+=' <b class="choose" id="pop_'+this.words.length+'">[choose]</b> ',this.words.push(e[s]),this.answers.push("")}else t+=e[s]+" "}console.log(t),l("#slideTextDiv").html(t);const o=5;for(const s in this.words){const n="#pop_"+s;l(n).on("click",m=>{for(;this.options.length>0;)this.options.pop();const i=[];this.targetIdx=s,console.log("onclick: targetIdx = ",this.targetIdx,this.targetIdx.value,s,this.words.length),this.options.push({label:this.words[s],value:this.words[s]}),i.push(this.words[s]);for(let p=0;p<Math.min(o,this.words.length);p++)i.indexOf(this.words[p])>-1||(this.options.push({label:this.words[p],value:this.words[p]}),i.push(this.words[p]));console.log(i),this.showWordChoices=!0})}},step3(){if(l("#slideTextDiv").classed("hidden",!1),y(".stepB").classed("readyBorder",!1),y(".stepB").classed("notreadyBorder",!1),this.step===3)return;this.step=3,console.log("step",this.step);let e=!0;for(const t in this.words)this.words[t]!==this.answers[t]&&(e=!1);e===!0?(l("#slideTextDiv").classed("border-green",!0),l("#step3B").classed("hidden",!0),this.assignment.score+=this.words.length,this.reStore.assignmentStatus.points+=this.words.length,this.step=4,l("#step4B").classed("hidden",!1),l("#step4B").classed("readyBorder",!0)):(l("#slideTextDiv").classed("border-red",!0),l("#step3B").classed("notreadyBorder",!0))},step4(){l("#slideTextDiv").classed("hidden",!1),y(".stepB").classed("readyBorder",!1),y(".stepB").classed("notreadyBorder",!1),console.log("step ",this.step),this.step===4&&(l("#step4B").classed("readyBorder",!0),this.pgIdx===this.assignment.pages.length-1&&this.assignment.pages[this.pgIdx].isCustom===!1?console.log("Pages array ended with random. pgIdx "):this.pgIdx=this.pgIdx+1<=this.assignment.pages.length-1?this.pgIdx+1:0,console.log("Proceeding to next page",this.pgIdx),this.reStore.setStatus("pgIdx",this.pgIdx),l("#step3B").classed("hidden",!1),l("#step4B").classed("hidden",!0),this.step1())},update(e){console.log("targetIdx: ",this.targetIdx,"val: ",e),this.answers[this.targetIdx]=e;const t="#pop_"+this.targetIdx;l(t).html(e),console.log(this.answers),this.showWordChoices=!1,this.group=""},toggleSlideShow(){this.slideShowInterval?(window.clearInterval(this.slideShowInterval),this.slideShowInterval=null):this.slideShowInterval=window.setInterval(()=>{console.log("tick"),this.nextImg()},5e3)},toggleText(){l("#slideTextDiv").classed("hidden")===!0?(l("#slideTextDiv").classed("hidden",!1),this.visIcon="article"):(l("#slideTextDiv").classed("hidden",!0),this.visIcon="visibility_off")},saveImage(){console.log("saveImage")},saveBookmark(){console.log("saveBookmark")}}}),Pe=B("div",{class:"text-h6"},"Choose correct word:",-1),Fe={class:"q-pa-lg"},Oe={id:"slideCaptionDiv",class:"absolute-top text-subtitle1 text-center q-my-xl"},Qe={id:"slideTextDiv",class:"text-panel text-center absolute-center",contentEditable:"false"},je=B("div",{style:{height:"2px","background-color":"gray",width:"200px"}},null,-1);function Ae(e,t,o,s,n,m){return le(),ne(de,null,[c(Se,{modelValue:this.showWordChoices,"onUpdate:modelValue":t[1]||(t[1]=i=>this.showWordChoices=i)},{default:b(()=>[c(X,null,{default:b(()=>[c(j,null,{default:b(()=>[Pe]),_:1}),c(j,{class:"q-pt-none"},{default:b(()=>[B("div",Fe,[c(Be,{modelValue:e.group,"onUpdate:modelValue":[t[0]||(t[0]=i=>e.group=i),this.update],options:this.options,color:"primary"},null,8,["modelValue","options","onUpdate:modelValue"])])]),_:1}),c(be,{align:"right"},{default:b(()=>[re(c(x,{flat:"",label:"OK",color:"primary"},null,512),[[xe]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),c(ye,{class:"fixed-center",src:this.imgSrc,fit:this.imgFit,height:"100%"},{default:b(()=>[B("div",Oe,L(this.imgCap),1)]),_:1},8,["src","fit"]),B("div",Qe,L(this.pageText),1),c(P,{position:"top",offset:[0,60]},{default:b(()=>[c(x,{color:"accent",onClick:t[2]||(t[2]=i=>this.prevImg()),icon:"start",class:"rotate-180 q-pa-sm q-mx-sm"}),c(De,{square:"",color:"accent",icon:"keyboard_arrow_down",direction:"down",padding:"sm",class:"q-pa-sm q-mx-sm"},{default:b(()=>[c(F,{color:"accent",onClick:t[3]||(t[3]=i=>this.toggleSlideShow()),icon:"slideshow"}),c(F,{color:"accent",onClick:t[4]||(t[4]=i=>this.toggleText()),icon:e.visIcon,class:"q-pa-sm q-mx-sm"},null,8,["icon"]),c(F,{color:"accent",onClick:t[5]||(t[5]=i=>this.cycleFit()),icon:"fit_screen",class:"q-pa-sm q-mx-sm"})]),_:1}),c(x,{color:"accent",onClick:t[6]||(t[6]=i=>this.nextImg()),icon:"start",class:"q-pa-sm q-mx-sm"})]),_:1}),c(P,{position:"bottom",offset:[0,75]},{default:b(()=>[je]),_:1}),c(P,{position:"bottom",offset:[0,40]},{default:b(()=>[c(x,{id:"step1B",round:"",unelevated:"",color:"secondary",size:"15px",class:"clearBorder stepB q-mx-md readyBorder",onClick:t[7]||(t[7]=i=>this.step1()),icon:"local_library",stack:"","no-caps":"",label:"Step 1",padding:"sm md"}),c(x,{id:"step2B",round:"",unelevated:"",color:"secondary",size:"15px",class:"clearBorder stepB q-mx-md",onClick:t[8]||(t[8]=i=>this.step2()),icon:"handyman",stack:"","no-caps":"",label:"Step 2",padding:"sm md"}),c(x,{id:"step3B",round:"",unelevated:"",color:"secondary",size:"15px",class:"clearBorder stepB q-mx-md",onClick:t[9]||(t[9]=i=>this.step3()),icon:"spellcheck",stack:"","no-caps":"",label:"Step 3",padding:"sm md"}),c(x,{id:"step4B",round:"",unelevated:"",color:"secondary",size:"15px",class:"hidden clearBorder stepB q-mx-md",onClick:t[10]||(t[10]=i=>this.step4()),icon:"local_library",stack:"","no-caps":"",label:"Repeat",padding:"sm md"})]),_:1})],64)}var Ue=oe($e,[["render",Ae]]);export{Ue as S};
