import{u as H,c as J,a as X,Q as j,i as Y,C as Z,h as ee}from"./ClosePopup.52134ef3.js";import{i as r,g as B,ah as te,ai as se,r as c,h as u,aG as A,x as _,y as O,j as z,z as T,q as L,Q as x,n as ie,F as ae,aH as M,K as oe,d as le,D as ne,_ as re,o as de,au as ce,a as g,w as b,e as q,p as ue,ag as R,av as ge}from"./index.07e7904c.js";import{d as W,f as E,c as he,e as me,u as pe,g as fe}from"./use-dark.c5aacc92.js";import{o as ve,u as be,a as xe,b as Se,c as Ie,Q as ye}from"./QCheckbox.0d67dd88.js";import{Q as Ce}from"./QImg.0fd406b2.js";import{Q as P}from"./QPageSticky.be330899.js";import{u as ke,s as a,a as I}from"./re-store.1f9a3a57.js";const we=r("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[r("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),r("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]);var qe=B({name:"QRadio",props:{...W,...te,...H,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:t,emit:l}){const{proxy:s}=T(),n=E(e,s.$q),m=se(e,ve),o=c(null),{refocusTargetEl:p,refocusTarget:S}=be(e,o),f=u(()=>A(e.modelValue)===A(e.val)),i=u(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(n.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),h=u(()=>{const d=e.color!==void 0&&(e.keepColor===!0||f.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${f.value===!0?"truthy":"falsy"}${d}`}),y=u(()=>(f.value===!0?e.checkedIcon:e.uncheckedIcon)||null),D=u(()=>e.disable===!0?-1:e.tabindex||0),V=u(()=>{const d={type:"radio"};return e.name!==void 0&&Object.assign(d,{".checked":f.value===!0,"^checked":f.value===!0?"checked":void 0,name:e.name,value:e.val}),d}),$=J(V);function C(d){d!==void 0&&(L(d),S(d)),e.disable!==!0&&f.value!==!0&&l("update:modelValue",e.val,d)}function F(d){(d.keyCode===13||d.keyCode===32)&&L(d)}function v(d){(d.keyCode===13||d.keyCode===32)&&C(d)}return Object.assign(s,{set:C}),()=>{const d=y.value!==null?[r("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[r(_,{class:"q-radio__icon",name:y.value})])]:[we];e.disable!==!0&&$(d,"unshift"," q-radio__native q-ma-none q-pa-none");const k=[r("div",{class:h.value,style:m.value,"aria-hidden":"true"},d)];p.value!==null&&k.push(p.value);const w=e.label!==void 0?O(t.default,[e.label]):z(t.default);return w!==void 0&&k.push(r("div",{class:"q-radio__label q-anchor--skip"},w)),r("div",{ref:o,class:i.value,tabindex:D.value,role:"radio","aria-label":e.label,"aria-checked":f.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:C,onKeydown:F,onKeyup:v},k)}}}),Be=B({name:"QToggle",props:{...xe,icon:String,iconColor:String},emits:Se,setup(e){function t(l,s){const n=u(()=>(l.value===!0?e.checkedIcon:s.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),m=u(()=>l.value===!0?e.iconColor:null);return()=>[r("div",{class:"q-toggle__track"}),r("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},n.value!==void 0?[r(_,{name:n.value,color:m.value})]:void 0)]}return Ie("toggle",t)}});const N={radio:qe,checkbox:ye,toggle:Be},_e=Object.keys(N);var Te=B({name:"QOptionGroup",props:{...W,modelValue:{required:!0},options:{type:Array,validator:e=>e.every(t=>"value"in t&&"label"in t)},name:String,type:{default:"radio",validator:e=>_e.includes(e)},color:String,keepColor:Boolean,dense:Boolean,size:String,leftLabel:Boolean,inline:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{emit:t,slots:l}){const{proxy:{$q:s}}=T(),n=Array.isArray(e.modelValue);e.type==="radio"?n===!0&&console.error("q-option-group: model should not be array"):n===!1&&console.error("q-option-group: model should be array in your case");const m=E(e,s),o=u(()=>N[e.type]),p=u(()=>"q-option-group q-gutter-x-sm"+(e.inline===!0?" q-option-group--inline":"")),S=u(()=>{const i={role:"group"};return e.type==="radio"&&(i.role="radiogroup",e.disable===!0&&(i["aria-disabled"]="true")),i});function f(i){t("update:modelValue",i)}return()=>r("div",{class:p.value,...S.value},e.options.map((i,h)=>{const y=l["label-"+h]!==void 0?()=>l["label-"+h](i):l.label!==void 0?()=>l.label(i):void 0;return r("div",[r(o.value,{modelValue:e.modelValue,val:i.value,name:i.name===void 0?e.name:i.name,disable:e.disable||i.disable,label:y===void 0?i.label:null,leftLabel:i.leftLabel===void 0?e.leftLabel:i.leftLabel,color:i.color===void 0?e.color:i.color,checkedIcon:i.checkedIcon,uncheckedIcon:i.uncheckedIcon,dark:i.dark||m.value,size:i.size===void 0?e.size:i.size,dense:e.dense,keepColor:i.keepColor===void 0?e.keepColor:i.keepColor,"onUpdate:modelValue":f},y)])}))}});const De=["top","right","bottom","left"],U={type:{type:String,default:"a"},outline:Boolean,push:Boolean,flat:Boolean,unelevated:Boolean,color:String,textColor:String,glossy:Boolean,square:Boolean,padding:String,label:{type:[String,Number],default:""},labelPosition:{type:String,default:"right",validator:e=>De.includes(e)},externalLabel:Boolean,hideLabel:{type:Boolean},labelClass:[Array,String,Object],labelStyle:[Array,String,Object],disable:Boolean,tabindex:[Number,String]};function K(e,t){return{formClass:u(()=>`q-fab--form-${e.square===!0?"square":"rounded"}`),stacked:u(()=>e.externalLabel===!1&&["top","bottom"].includes(e.labelPosition)),labelProps:u(()=>{if(e.externalLabel===!0){const l=e.hideLabel===null?t.value===!1:e.hideLabel;return{action:"push",data:{class:[e.labelClass,`q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}`+(l===!0?" q-fab__label--external-hidden":"")],style:e.labelStyle}}}return{action:["left","top"].includes(e.labelPosition)?"unshift":"push",data:{class:[e.labelClass,`q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}`+(e.hideLabel===!0?" q-fab__label--internal-hidden":"")],style:e.labelStyle}}})}}const G={start:"self-end",center:"self-center",end:"self-start"},Ve=Object.keys(G);var Q=B({name:"QFabAction",props:{...U,icon:{type:String,default:""},anchor:{type:String,validator:e=>Ve.includes(e)},to:[String,Object],replace:Boolean},emits:["click"],setup(e,{slots:t,emit:l}){const s=ie(M,()=>({showing:{value:!0},onChildClick:ae})),{formClass:n,labelProps:m}=K(e,s.showing),o=u(()=>{const h=G[e.anchor];return n.value+(h!==void 0?` ${h}`:"")}),p=u(()=>e.disable===!0||s.showing.value!==!0);function S(h){s.onChildClick(h),l("click",h)}function f(){const h=[];return t.icon!==void 0?h.push(t.icon()):e.icon!==""&&h.push(r(_,{name:e.icon})),(e.label!==""||t.label!==void 0)&&h[m.value.action](r("div",m.value.data,t.label!==void 0?t.label():[e.label])),O(t.default,h)}const i=T();return Object.assign(i.proxy,{click:S}),()=>r(x,{class:o.value,...e,noWrap:!0,stack:e.stacked,icon:void 0,label:void 0,noCaps:!0,fabMini:!0,disable:p.value,onClick:S},f)}});const $e=["up","right","down","left"],Fe=["left","center","right"];var Pe=B({name:"QFab",props:{...U,...he,icon:String,activeIcon:String,hideIcon:Boolean,hideLabel:{default:null},direction:{type:String,default:"right",validator:e=>$e.includes(e)},persistent:Boolean,verticalActionsAlign:{type:String,default:"center",validator:e=>Fe.includes(e)}},emits:me,setup(e,{slots:t}){const l=c(null),s=c(e.modelValue===!0),n=pe(),{proxy:{$q:m}}=T(),{formClass:o,labelProps:p}=K(e,s),S=u(()=>e.persistent!==!0),{hide:f,toggle:i}=fe({showing:s,hideOnRouteChange:S}),h=u(()=>({opened:s.value})),y=u(()=>`q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${o.value}`+(s.value===!0?" q-fab--opened":" q-fab--closed")),D=u(()=>`q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${s.value===!0?"opened":"closed"}`),V=u(()=>{const v={id:n,role:"menu"};return s.value!==!0&&(v["aria-hidden"]="true"),v}),$=u(()=>`q-fab__icon-holder  q-fab__icon-holder--${s.value===!0?"opened":"closed"}`);function C(v,d){const k=t[v],w=`q-fab__${v} absolute-full`;return k===void 0?r(_,{class:w,name:e[d]||m.iconSet.fab[d]}):r("div",{class:w},k(h.value))}function F(){const v=[];return e.hideIcon!==!0&&v.push(r("div",{class:$.value},[C("icon","icon"),C("active-icon","activeIcon")])),(e.label!==""||t.label!==void 0)&&v[p.value.action](r("div",p.value.data,t.label!==void 0?t.label(h.value):[e.label])),O(t.tooltip,v)}return oe(M,{showing:s,onChildClick(v){f(v),l.value!==null&&l.value.$el.focus()}}),()=>r("div",{class:y.value},[r(x,{ref:l,class:o.value,...e,noWrap:!0,stack:e.stacked,align:void 0,icon:void 0,label:void 0,noCaps:!0,fab:!0,"aria-expanded":s.value===!0?"true":"false","aria-haspopup":"true","aria-controls":n,onClick:i},F),r("div",{class:D.value,...V.value},z(t.default))])}});const Qe=le({name:"StepperComponent",props:{initialImgSrc:{type:String,required:!0},initialImgFit:{type:String},initialPageText:{type:String,required:!1,default:"This is the paragraph to be reconstructed."},initialPageObj:{type:Object,required:!1,default:c({imgIdx:0,imgs:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Douglas_DC-3%2C_SE-CFP.jpg/1024px-Douglas_DC-3%2C_SE-CFP.jpg",cap:"Doublas DC-3"}],pageText:"This is the paragraph to be reconstructed (default text)",imgFit:"cover",pctReplace:25})},assignmentObj:{type:Object,required:!0}},setup(e){const t=ke();return{props:e,reStore:t,group:c(""),visIcon:c("article"),imgs:c([]),imgIdx:c(0),imgSrc:c(""),imgCap:c(""),imgFit:c(""),pgIdx:c(0),pageText:c(""),pctReplace:c(15),assignment:c(e.assignmentObj),step:c(1),words:c([]),options:c([]),answers:c([]),targetIdx:c(0),showWordChoices:c(!1),slideShowInterval:c(null)}},mounted(){ne(this.reStore.assignmentStatus,async(e,t)=>{this.imgFit=e.imgFit,this.imgIdx=e.imgIdx,this.imgSrc=this.imgs[this.imgIdx].url,this.imgCap=this.imgs[this.imgIdx].cap}),console.log("Stepper.mounted ",this.props),this.reStore.setStatus("points",this.assignment.points),this.reStore.setStatus("goal",this.assignment.goal),this.reStore.setStatus("title",this.assignment.title),this.reStore.setStatus("pgIdx",this.assignment.pgIdx),this.reStore.setStatus("pgTot",this.assignment.pages.length),this.reStore.setStatus("ck",this.assignment.ck),this.reStore.setStatus("mapCoords",this.assignment.pages[this.assignment.pgIdx].mapCoords),this.step1()},methods:{stringify(){const e=JSON.stringify(this.assignment);console.log(e)},prevImg(){this.imgIdx=this.imgIdx-1<0?this.imgs.length-1:0,this.imgSrc=this.imgs[this.imgIdx].url,this.imgCap=this.imgs[this.imgIdx].cap,console.log("stepper nextImg",this.imgIdx),this.reStore.setStatus("imgIdx",this.imgIdx)},nextImg(){this.imgIdx=this.imgIdx+1>this.imgs.length-1?0:this.imgIdx+1,this.imgSrc=this.imgs[this.imgIdx].url,this.imgCap=this.imgs[this.imgIdx].cap,console.log("stepper nextImg",this.imgIdx,this.imgs),this.reStore.setStatus("imgIdx",this.imgIdx)},cycleFit(){const e=["scale-down","cover"];let t=e.indexOf(this.imgFit);this.imgFit=t+1>=e.length?e[0]:e[t+1],this.reStore.setStatus("imgFit",this.imgFit)},loadPage(e){this.imgs=e.imgs,this.imgIdx=e.imgIdx,this.imgSrc=e.imgs.length?e.imgs[0].url:null,this.imgCap=e.imgs.length?e.imgs[0].cap:null,this.imgFit=e.imgFit,this.pageText=e.pageText,this.pctReplace=e.pctReplace,this.mapCoords=e.mapCoords,a("#slideTextDiv").html(this.pageText),this.reStore.setStatus("imgIdx",this.imgIdx),this.reStore.setStatus("imgTot",this.imgs.length),this.reStore.setStatus("guideWords",this.assignment.pages[this.pgIdx].guideWords),this.reStore.setStatus("imgFit",this.imgFit),this.reStore.setStatus("pageid",e.pageid),this.reStore.setStatus("pctReplace",this.pctReplace),this.reStore.setStatus("pageTitle",e.pageTitle),this.reStore.setStatus("mapCoords",e.mapCoords)},step1(){this.step=1,console.log("step",this.step),a("#slideTextDiv").classed("hidden",!1),a("#step3B").classed("hidden",!1),a("#step4B").classed("hidden",!0),I(".stepB").classed("readyBorder",!1),I(".stepB").classed("notreadyBorder",!1),a("#slideTextDiv").classed("border-red",!1),a("#slideTextDiv").classed("border-green",!1),a("#step1B").classed("readyBorder",!0);let e;if(this.assignment.pages[this.pgIdx].isCustom===!0)e=this.assignment.pages[this.pgIdx],this.loadPage(e);else if(this.assignment.pages[this.pgIdx].pageid){if(this.assignment.pages[this.pgIdx].pageid){const t="",l=this.assignment.pages[this.pgIdx].pageid,s=this.reStore.langVoices[this.assignment.pages[this.pgIdx].langVoice],n=this.reStore.getPage(t,l,s);console.log("received promise ",n),n.then(m=>{this.loadPage(m)})}}else{const t=this.assignment.pages[this.pgIdx].guideWords,l=this.assignment.pages[this.pgIdx].pageid,s=this.reStore.langVoices[this.assignment.pages[this.pgIdx].langVoice];console.log("guideWords",t,"pageid ",l);const n=this.reStore.getPage(t,l,s);console.log("received promise ",n),n.then(m=>{this.loadPage(m)})}},step2(){if(a("#slideTextDiv").classed("hidden",!1),I(".stepB").classed("readyBorder",!1),I(".stepB").classed("notreadyBorder",!1),this.step===2)return;for(this.step=2,a("#step2B").classed("readyBorder",!0),console.log("step",this.step),a("#slideTextDiv").classed("border-red",!1),a("#slideTextDiv").classed("border-green",!1);this.words.length>0;)this.words.pop();for(;this.answers.length>0;)this.answers.pop();for(;this.options.length>0;)this.options.pop();const e=this.pageText.replaceAll("  "," ").split(" ");console.log("rtext: ",e);let t="";for(const s in e){let n;try{n=this.pctReplace}catch{n=10}if(Math.random()*100<=n){if(e[s]===" "){t+=e[s]+" ";continue}if(e[s]==="")continue;t+=' <b class="choose" id="pop_'+this.words.length+'">[choose]</b> ',this.words.push(e[s]),this.answers.push("")}else t+=e[s]+" "}console.log(t),a("#slideTextDiv").html(t);const l=5;for(const s in this.words){const n="#pop_"+s;a(n).on("click",m=>{for(;this.options.length>0;)this.options.pop();const o=[];this.targetIdx=s,console.log("onclick: targetIdx = ",this.targetIdx,this.targetIdx.value,s,this.words.length),this.options.push({label:this.words[s],value:this.words[s]}),o.push(this.words[s]);for(let p=0;p<Math.min(l,this.words.length);p++)o.indexOf(this.words[p])>-1||(this.options.push({label:this.words[p],value:this.words[p]}),o.push(this.words[p]));console.log(o),this.showWordChoices=!0})}},step3(){if(a("#slideTextDiv").classed("hidden",!1),I(".stepB").classed("readyBorder",!1),I(".stepB").classed("notreadyBorder",!1),this.step===3)return;this.step=3,console.log("step",this.step);let e=!0;for(const t in this.words)this.words[t]!==this.answers[t]&&(e=!1);e===!0?(a("#slideTextDiv").classed("border-green",!0),a("#step3B").classed("hidden",!0),this.assignment.score+=this.words.length,this.reStore.assignmentStatus.points+=this.words.length,this.step=4,a("#step4B").classed("hidden",!1),a("#step4B").classed("readyBorder",!0)):(a("#slideTextDiv").classed("border-red",!0),a("#step3B").classed("notreadyBorder",!0))},step4(){a("#slideTextDiv").classed("hidden",!1),I(".stepB").classed("readyBorder",!1),I(".stepB").classed("notreadyBorder",!1),console.log("step ",this.step),this.step===4&&(a("#step4B").classed("readyBorder",!0),this.pgIdx===this.assignment.pages.length-1&&this.assignment.pages[this.pgIdx].isCustom===!1?console.log("Pages array ended with random. pgIdx "):this.pgIdx=this.pgIdx+1<=this.assignment.pages.length-1?this.pgIdx+1:0,console.log("Proceeding to next page",this.pgIdx),this.reStore.setStatus("pgIdx",this.pgIdx),a("#step3B").classed("hidden",!1),a("#step4B").classed("hidden",!0),this.step1())},update(e){console.log("targetIdx: ",this.targetIdx,"val: ",e),this.answers[this.targetIdx]=e;const t="#pop_"+this.targetIdx;a(t).html(e),console.log(this.answers),this.showWordChoices=!1,this.group=""},toggleSlideShow(){this.slideShowInterval?(window.clearInterval(this.slideShowInterval),this.slideShowInterval=null):this.slideShowInterval=window.setInterval(()=>{console.log("tick"),this.nextImg()},5e3)},toggleText(){a("#slideTextDiv").classed("hidden")===!0?(a("#slideTextDiv").classed("hidden",!1),this.visIcon="article"):(a("#slideTextDiv").classed("hidden",!0),this.visIcon="visibility_off")},saveImage(){console.log("saveImage")},saveBookmark(){console.log("saveBookmark")}}}),Oe=q("div",{class:"text-h6"},"Choose correct word:",-1),je={class:"q-pa-lg"},Ae={id:"slideCaptionDiv",class:"absolute-top text-subtitle1 text-center q-my-xl"},Le={id:"slideTextDiv",class:"text-panel text-center absolute-center",contentEditable:"false"},Re=q("div",{style:{height:"2px","background-color":"gray",width:"200px"}},null,-1);function ze(e,t,l,s,n,m){return de(),ce(ge,null,[g(ee,{modelValue:this.showWordChoices,"onUpdate:modelValue":t[1]||(t[1]=o=>this.showWordChoices=o)},{default:b(()=>[g(X,null,{default:b(()=>[g(j,null,{default:b(()=>[Oe]),_:1}),g(j,{class:"q-pt-none"},{default:b(()=>[q("div",je,[g(Te,{modelValue:e.group,"onUpdate:modelValue":[t[0]||(t[0]=o=>e.group=o),this.update],options:this.options,color:"primary"},null,8,["modelValue","options","onUpdate:modelValue"])])]),_:1}),g(Y,{align:"right"},{default:b(()=>[ue(g(x,{flat:"",label:"OK",color:"primary"},null,512),[[Z]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),g(Ce,{class:"fixed-center",src:this.imgSrc,fit:this.imgFit,height:"100%"},{default:b(()=>[q("div",Ae,R(this.imgCap),1)]),_:1},8,["src","fit"]),q("div",Le,R(this.pageText),1),g(P,{position:"top",offset:[0,60]},{default:b(()=>[g(x,{color:"accent",onClick:t[2]||(t[2]=o=>this.prevImg()),icon:"start",class:"rotate-180 q-pa-sm q-mx-sm"}),g(Pe,{square:"",color:"accent",icon:"keyboard_arrow_down",direction:"down",padding:"sm",class:"q-pa-sm q-mx-sm"},{default:b(()=>[g(Q,{color:"accent",onClick:t[3]||(t[3]=o=>this.toggleSlideShow()),icon:"slideshow"}),g(Q,{color:"accent",onClick:t[4]||(t[4]=o=>this.toggleText()),icon:e.visIcon,class:"q-pa-sm q-mx-sm"},null,8,["icon"]),g(Q,{color:"accent",onClick:t[5]||(t[5]=o=>this.cycleFit()),icon:"fit_screen",class:"q-pa-sm q-mx-sm"})]),_:1}),g(x,{color:"accent",onClick:t[6]||(t[6]=o=>this.nextImg()),icon:"start",class:"q-pa-sm q-mx-sm"})]),_:1}),g(P,{position:"bottom",offset:[0,75]},{default:b(()=>[Re]),_:1}),g(P,{position:"bottom",offset:[0,40]},{default:b(()=>[g(x,{id:"step1B",round:"",unelevated:"",color:"secondary",size:"15px",class:"clearBorder stepB q-mx-md readyBorder",onClick:t[7]||(t[7]=o=>this.step1()),icon:"local_library",stack:"","no-caps":"",label:"Step 1",padding:"sm md"}),g(x,{id:"step2B",round:"",unelevated:"",color:"secondary",size:"15px",class:"clearBorder stepB q-mx-md",onClick:t[8]||(t[8]=o=>this.step2()),icon:"handyman",stack:"","no-caps":"",label:"Step 2",padding:"sm md"}),g(x,{id:"step3B",round:"",unelevated:"",color:"secondary",size:"15px",class:"clearBorder stepB q-mx-md",onClick:t[9]||(t[9]=o=>this.step3()),icon:"spellcheck",stack:"","no-caps":"",label:"Step 3",padding:"sm md"}),g(x,{id:"step4B",round:"",unelevated:"",color:"secondary",size:"15px",class:"hidden clearBorder stepB q-mx-md",onClick:t[10]||(t[10]=o=>this.step4()),icon:"local_library",stack:"","no-caps":"",label:"Repeat",padding:"sm md"})]),_:1})],64)}var He=re(Qe,[["render",ze]]);export{He as S};
