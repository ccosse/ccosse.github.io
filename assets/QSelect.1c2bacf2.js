import{az as St,c as Fe,aA as gt,a as r,d as h,aB as ht,af as Re,g as Ie,r as T,w as ve,ar as yt,Y as oe,au as Kt,aC as Le,a9 as He,aD as Qt,y as jt,ac as Ut,aE as Wt,a5 as pt,ad as Xt,o as bt,C as ie,at as Yt,aF as Gt,T as je,aG as Ae,S as Jt,ap as Ve,ao as Zt,h as el}from"./index.c36dfe81.js";import{T as tl}from"./TouchPan.b000e846.js";import{u as wt,a as ll,e as ul,d as nl}from"./ClosePopup.8c385198.js";import{u as Xe,a as Ct,c as Vt,b as kt,r as We,f as dt,e as al,d as il}from"./rtl.2e1a005f.js";import{u as ol,a as rl}from"./use-dark.decb69bf.js";import{Q as cl,a as sl}from"./QItemSection.2613baf6.js";import{Q as dl}from"./QItemLabel.b0f87d2d.js";const Ye={...St,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},pe=50,xt=2*pe,qt=xt*Math.PI,fl=Math.round(qt*1e3)/1e3;var vl=Fe({name:"QCircularProgress",props:{...Ye,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:s}){const{proxy:{$q:o}}=Ie(),C=gt(e),I=r(()=>{const k=(o.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(o.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-k}deg)`:`rotate3d(0, 0, 1, ${k-90}deg)`}}),n=r(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),x=r(()=>xt/(1-e.thickness/2)),S=r(()=>`${x.value/2} ${x.value/2} ${x.value} ${x.value}`),f=r(()=>Re(e.value,e.min,e.max)),A=r(()=>qt*(1-(f.value-e.min)/(e.max-e.min))),c=r(()=>e.thickness/2*x.value);function g({thickness:k,offset:v,color:_,cls:E,rounded:b}){return h("circle",{class:"q-circular-progress__"+E+(_!==void 0?` text-${_}`:""),style:n.value,fill:"transparent",stroke:"currentColor","stroke-width":k,"stroke-dasharray":fl,"stroke-dashoffset":v,"stroke-linecap":b,cx:x.value,cy:x.value,r:pe})}return()=>{const k=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&k.push(h("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:pe-c.value/2,cx:x.value,cy:x.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&k.push(g({cls:"track",thickness:c.value,offset:0,color:e.trackColor})),k.push(g({cls:"circle",thickness:c.value,offset:A.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const v=[h("svg",{class:"q-circular-progress__svg",style:I.value,viewBox:S.value,"aria-hidden":"true"},k)];return e.showValue===!0&&v.push(h("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},s.default!==void 0?s.default():[h("div",f.value)])),h("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:C.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:f.value},ht(s.internal,v))}}});const ft=[34,37,40,33,39,38],ml=Object.keys(Ye);var Bl=Fe({name:"QKnob",props:{...wt,...Ye,modelValue:{type:Number,required:!0},innerMin:Number,innerMax:Number,step:{type:Number,default:1,validator:e=>e>=0},tabindex:{type:[Number,String],default:0},disable:Boolean,readonly:Boolean},emits:["update:modelValue","change","dragValue"],setup(e,{slots:s,emit:o}){const{proxy:C}=Ie(),{$q:I}=C,n=T(e.modelValue),x=T(!1),S=r(()=>isNaN(e.innerMin)===!0||e.innerMin<e.min?e.min:e.innerMin),f=r(()=>isNaN(e.innerMax)===!0||e.innerMax>e.max?e.max:e.innerMax);let A;function c(){n.value=e.modelValue===null?S.value:Re(e.modelValue,S.value,f.value),Q(!0)}ve(()=>`${e.modelValue}|${S.value}|${f.value}`,c),c();const g=r(()=>e.disable===!1&&e.readonly===!1),k=r(()=>"q-knob non-selectable"+(g.value===!0?" q-knob--editable":e.disable===!0?" disabled":"")),v=r(()=>(String(e.step).trim().split(".")[1]||"").length),_=r(()=>e.step===0?1:e.step),E=r(()=>e.instantFeedback===!0||x.value===!0),b=I.platform.is.mobile===!0?r(()=>g.value===!0?{onClick:ue}:{}):r(()=>g.value===!0?{onMousedown:G,onClick:ue,onKeydown:ne,onKeyup:te}:{}),U=r(()=>g.value===!0?{tabindex:e.tabindex}:{[`aria-${e.disable===!0?"disabled":"readonly"}`]:"true"}),D=r(()=>{const q={};return ml.forEach(H=>{q[H]=e[H]}),q});function Y(q){q.isFinal?(J(q.evt,!0),x.value=!1):(q.isFirst&&(B(),x.value=!0),J(q.evt))}const P=r(()=>[[tl,Y,void 0,{prevent:!0,stop:!0,mouse:!0}]]);function B(){const{top:q,left:H,width:$,height:le}=C.$el.getBoundingClientRect();A={top:q+le/2,left:H+$/2}}function G(q){B(),J(q)}function ue(q){B(),J(q,!0)}function ne(q){if(!ft.includes(q.keyCode))return;oe(q);const H=([34,33].includes(q.keyCode)?10:1)*_.value,$=[34,37,40].includes(q.keyCode)?-H:H;n.value=Re(parseFloat((n.value+$).toFixed(v.value)),S.value,f.value),Q()}function J(q,H){const $=Kt(q),le=Math.abs($.top-A.top),ce=Math.sqrt(le**2+Math.abs($.left-A.left)**2);let L=Math.asin(le/ce)*(180/Math.PI);$.top<A.top?L=A.left<$.left?90-L:270+L:L=A.left<$.left?L+90:270-L,I.lang.rtl===!0?L=Le(-L-e.angle,0,360):e.angle&&(L=Le(L-e.angle,0,360)),e.reverse===!0&&(L=360-L);let l=e.min+L/360*(e.max-e.min);if(_.value!==0){const a=l%_.value;l=l-a+(Math.abs(a)>=_.value/2?(a<0?-1:1)*_.value:0),l=parseFloat(l.toFixed(v.value))}l=Re(l,S.value,f.value),o("dragValue",l),n.value!==l&&(n.value=l),Q(H)}function te(q){ft.includes(q.keyCode)&&Q(!0)}function Q(q){e.modelValue!==n.value&&o("update:modelValue",n.value),q===!0&&o("change",n.value)}const ae=ll(e);function re(){return h("input",ae.value)}return()=>{const q={class:k.value,role:"slider","aria-valuemin":S.value,"aria-valuemax":f.value,"aria-valuenow":e.modelValue,...U.value,...D.value,value:n.value,instantFeedback:E.value,...b.value},H={default:s.default};return g.value===!0&&e.name!==void 0&&(H.internal=re),yt(vl,q,H,"knob",g.value,()=>P.value)}}}),Sl=Fe({name:"QField",inheritAttrs:!1,props:Xe,emits:Ct,setup(){return Vt(kt())}});const gl={xs:8,sm:10,md:14,lg:20,xl:24};var hl=Fe({name:"QChip",props:{...ol,...St,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:s,emit:o}){const{proxy:{$q:C}}=Ie(),I=rl(e,C),n=gt(e,gl),x=r(()=>e.selected===!0||e.icon!==void 0),S=r(()=>e.selected===!0?e.iconSelected||C.iconSet.chip.selected:e.icon),f=r(()=>e.iconRemove||C.iconSet.chip.remove),A=r(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),c=r(()=>{const b=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(b?` text-${b} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(A.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(I.value===!0?" q-chip--dark q-dark":"")}),g=r(()=>{const b=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},U={...b,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||C.lang.label.remove};return{chip:b,remove:U}});function k(b){b.keyCode===13&&v(b)}function v(b){e.disable||(o("update:selected",!e.selected),o("click",b))}function _(b){(b.keyCode===void 0||b.keyCode===13)&&(oe(b),e.disable===!1&&(o("update:modelValue",!1),o("remove")))}function E(){const b=[];A.value===!0&&b.push(h("div",{class:"q-focus-helper"})),x.value===!0&&b.push(h(He,{class:"q-chip__icon q-chip__icon--left",name:S.value}));const U=e.label!==void 0?[h("div",{class:"ellipsis"},[e.label])]:void 0;return b.push(h("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},ht(s.default,U))),e.iconRight&&b.push(h(He,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&b.push(h(He,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:f.value,...g.value.remove,onClick:_,onKeyup:_})),b}return()=>{if(e.modelValue===!1)return;const b={class:c.value,style:n.value};return A.value===!0&&Object.assign(b,g.value.chip,{onClick:v,onKeyup:k}),yt("div",b,E(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Qt,e.ripple]])}}});const Z=1e3,yl=["start","center","end","start-force","center-force","end-force"],Mt=Array.prototype.filter,bl=window.getComputedStyle(document.body).overflowAnchor===void 0?jt:function(e,s){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const o=e.children||[];Mt.call(o,I=>I.dataset&&I.dataset.qVsAnchor!==void 0).forEach(I=>{delete I.dataset.qVsAnchor});const C=o[s];C&&C.dataset&&(C.dataset.qVsAnchor="")}))};function ke(e,s){return e+s}function Ue(e,s,o,C,I,n,x,S){const f=e===window?document.scrollingElement||document.documentElement:e,A=I===!0?"offsetWidth":"offsetHeight",c={scrollStart:0,scrollViewSize:-x-S,scrollMaxSize:0,offsetStart:-x,offsetEnd:-S};if(I===!0?(e===window?(c.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c.scrollViewSize+=document.documentElement.clientWidth):(c.scrollStart=f.scrollLeft,c.scrollViewSize+=f.clientWidth),c.scrollMaxSize=f.scrollWidth,n===!0&&(c.scrollStart=(We===!0?c.scrollMaxSize-c.scrollViewSize:0)-c.scrollStart)):(e===window?(c.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,c.scrollViewSize+=document.documentElement.clientHeight):(c.scrollStart=f.scrollTop,c.scrollViewSize+=f.clientHeight),c.scrollMaxSize=f.scrollHeight),o!==null)for(let g=o.previousElementSibling;g!==null;g=g.previousElementSibling)g.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetStart+=g[A]);if(C!==null)for(let g=C.nextElementSibling;g!==null;g=g.nextElementSibling)g.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetEnd+=g[A]);if(s!==e){const g=f.getBoundingClientRect(),k=s.getBoundingClientRect();I===!0?(c.offsetStart+=k.left-g.left,c.offsetEnd-=k.width):(c.offsetStart+=k.top-g.top,c.offsetEnd-=k.height),e!==window&&(c.offsetStart+=c.scrollStart),c.offsetEnd+=c.scrollMaxSize-c.offsetStart}return c}function vt(e,s,o,C){s==="end"&&(s=(e===window?document.body:e)[o===!0?"scrollWidth":"scrollHeight"]),e===window?o===!0?(C===!0&&(s=(We===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-s),window.scrollTo(s,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s):o===!0?(C===!0&&(s=(We===!0?e.scrollWidth-e.offsetWidth:0)-s),e.scrollLeft=s):e.scrollTop=s}function ze(e,s,o,C){if(o>=C)return 0;const I=s.length,n=Math.floor(o/Z),x=Math.floor((C-1)/Z)+1;let S=e.slice(n,x).reduce(ke,0);return o%Z!==0&&(S-=s.slice(n*Z,o).reduce(ke,0)),C%Z!==0&&C!==I&&(S-=s.slice(C,x*Z).reduce(ke,0)),S}const wl={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},Cl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...wl};function Vl({virtualScrollLength:e,getVirtualScrollTarget:s,getVirtualScrollEl:o,virtualScrollItemSizeComputed:C}){const I=Ie(),{props:n,emit:x,proxy:S}=I,{$q:f}=S;let A,c,g,k=[],v;const _=T(0),E=T(0),b=T({}),U=T(null),D=T(null),Y=T(null),P=T({from:0,to:0}),B=r(()=>n.tableColspan!==void 0?n.tableColspan:100);C===void 0&&(C=r(()=>n.virtualScrollItemSize));const G=r(()=>C.value+";"+n.virtualScrollHorizontal),ue=r(()=>G.value+";"+n.virtualScrollSliceRatioBefore+";"+n.virtualScrollSliceRatioAfter);ve(ue,()=>{$()}),ve(G,ne);function ne(){H(c,!0)}function J(a){H(a===void 0?c:a)}function te(a,d){const y=s();if(y==null||y.nodeType===8)return;const O=Ue(y,o(),U.value,D.value,n.virtualScrollHorizontal,f.lang.rtl,n.virtualScrollStickySizeStart,n.virtualScrollStickySizeEnd);g!==O.scrollViewSize&&$(O.scrollViewSize),ae(y,O,Math.min(e.value-1,Math.max(0,parseInt(a,10)||0)),0,yl.indexOf(d)>-1?d:c>-1&&a>c?"end":"start")}function Q(){const a=s();if(a==null||a.nodeType===8)return;const d=Ue(a,o(),U.value,D.value,n.virtualScrollHorizontal,f.lang.rtl,n.virtualScrollStickySizeStart,n.virtualScrollStickySizeEnd),y=e.value-1,O=d.scrollMaxSize-d.offsetStart-d.offsetEnd-E.value;if(A===d.scrollStart)return;if(d.scrollMaxSize<=0){ae(a,d,0,0);return}g!==d.scrollViewSize&&$(d.scrollViewSize),re(P.value.from);const N=Math.floor(d.scrollMaxSize-Math.max(d.scrollViewSize,d.offsetEnd)-Math.min(v[y],d.scrollViewSize/2));if(N>0&&Math.ceil(d.scrollStart)>=N){ae(a,d,y,d.scrollMaxSize-d.offsetEnd-k.reduce(ke,0));return}let M=0,w=d.scrollStart-d.offsetStart,K=w;if(w<=O&&w+d.scrollViewSize>=_.value)w-=_.value,M=P.value.from,K=w;else for(let V=0;w>=k[V]&&M<y;V++)w-=k[V],M+=Z;for(;w>0&&M<y;)w-=v[M],w>-d.scrollViewSize?(M++,K=w):K=v[M]+w;ae(a,d,M,K)}function ae(a,d,y,O,N){const M=typeof N=="string"&&N.indexOf("-force")>-1,w=M===!0?N.replace("-force",""):N,K=w!==void 0?w:"start";let V=Math.max(0,y-b.value[K]),W=V+b.value.total;W>e.value&&(W=e.value,V=Math.max(0,W-b.value.total)),A=d.scrollStart;const me=V!==P.value.from||W!==P.value.to;if(me===!1&&w===void 0){ce(y);return}const{activeElement:xe}=document,ee=Y.value;me===!0&&ee!==null&&ee!==xe&&ee.contains(xe)===!0&&(ee.addEventListener("focusout",q),setTimeout(()=>{ee!==null&&ee.removeEventListener("focusout",q)})),bl(ee,y-V);const _e=w!==void 0?v.slice(V,y).reduce(ke,0):0;if(me===!0){const se=W>=P.value.from&&V<=P.value.to?P.value.to:W;P.value={from:V,to:se},_.value=ze(k,v,0,V),E.value=ze(k,v,W,e.value),requestAnimationFrame(()=>{P.value.to!==W&&A===d.scrollStart&&(P.value={from:P.value.from,to:W},E.value=ze(k,v,W,e.value))})}requestAnimationFrame(()=>{if(A!==d.scrollStart)return;me===!0&&re(V);const se=v.slice(V,y).reduce(ke,0),Se=se+d.offsetStart+_.value,Be=Se+v[y];let qe=Se+O;if(w!==void 0){const Te=se-_e,p=d.scrollStart+Te;qe=M!==!0&&p<Se&&Be<p+d.scrollViewSize?p:w==="end"?Be-d.scrollViewSize:Se-(w==="start"?0:Math.round((d.scrollViewSize-v[y])/2))}A=qe,vt(a,qe,n.virtualScrollHorizontal,f.lang.rtl),ce(y)})}function re(a){const d=Y.value;if(d){const y=Mt.call(d.children,V=>V.classList&&V.classList.contains("q-virtual-scroll--skip")===!1),O=y.length,N=n.virtualScrollHorizontal===!0?V=>V.getBoundingClientRect().width:V=>V.offsetHeight;let M=a,w,K;for(let V=0;V<O;){for(w=N(y[V]),V++;V<O&&y[V].classList.contains("q-virtual-scroll--with-prev")===!0;)w+=N(y[V]),V++;K=w-v[M],K!==0&&(v[M]+=K,k[Math.floor(M/Z)]+=K),M++}}}function q(){Y.value!==null&&Y.value!==void 0&&Y.value.focus()}function H(a,d){const y=1*C.value;(d===!0||Array.isArray(v)===!1)&&(v=[]);const O=v.length;v.length=e.value;for(let M=e.value-1;M>=O;M--)v[M]=y;const N=Math.floor((e.value-1)/Z);k=[];for(let M=0;M<=N;M++){let w=0;const K=Math.min((M+1)*Z,e.value);for(let V=M*Z;V<K;V++)w+=v[V];k.push(w)}c=-1,A=void 0,_.value=ze(k,v,0,P.value.from),E.value=ze(k,v,P.value.to,e.value),a>=0?(re(P.value.from),ie(()=>{te(a)})):L()}function $(a){if(a===void 0&&typeof window!="undefined"){const w=s();w!=null&&w.nodeType!==8&&(a=Ue(w,o(),U.value,D.value,n.virtualScrollHorizontal,f.lang.rtl,n.virtualScrollStickySizeStart,n.virtualScrollStickySizeEnd).scrollViewSize)}g=a;const d=parseFloat(n.virtualScrollSliceRatioBefore)||0,y=parseFloat(n.virtualScrollSliceRatioAfter)||0,O=1+d+y,N=a===void 0||a<=0?1:Math.ceil(a/C.value),M=Math.max(1,N,Math.ceil((n.virtualScrollSliceSize>0?n.virtualScrollSliceSize:10)/O));b.value={total:Math.ceil(M*O),start:Math.ceil(M*d),center:Math.ceil(M*(.5+d)),end:Math.ceil(M*(1+d)),view:N}}function le(a,d){const y=n.virtualScrollHorizontal===!0?"width":"height",O={["--q-virtual-scroll-item-"+y]:C.value+"px"};return[a==="tbody"?h(a,{class:"q-virtual-scroll__padding",key:"before",ref:U},[h("tr",[h("td",{style:{[y]:`${_.value}px`,...O},colspan:B.value})])]):h(a,{class:"q-virtual-scroll__padding",key:"before",ref:U,style:{[y]:`${_.value}px`,...O}}),h(a,{class:"q-virtual-scroll__content",key:"content",ref:Y,tabindex:-1},d.flat()),a==="tbody"?h(a,{class:"q-virtual-scroll__padding",key:"after",ref:D},[h("tr",[h("td",{style:{[y]:`${E.value}px`,...O},colspan:B.value})])]):h(a,{class:"q-virtual-scroll__padding",key:"after",ref:D,style:{[y]:`${E.value}px`,...O}})]}function ce(a){c!==a&&(n.onVirtualScroll!==void 0&&x("virtualScroll",{index:a,from:P.value.from,to:P.value.to-1,direction:a<c?"decrease":"increase",ref:S}),c=a)}$();const L=Ut(Q,f.platform.is.ios===!0?120:35);Wt(()=>{$()});let l=!1;return pt(()=>{l=!0}),Xt(()=>{if(l!==!0)return;const a=s();A!==void 0&&a!==void 0&&a!==null&&a.nodeType!==8?vt(a,A,n.virtualScrollHorizontal,f.lang.rtl):te(c)}),bt(()=>{L.cancel()}),Object.assign(S,{scrollTo:te,reset:ne,refresh:J}),{virtualScrollSliceRange:P,virtualScrollSliceSizeComputed:b,setVirtualScrollSize:$,onVirtualScrollEvt:L,localResetVirtualScroll:H,padVirtualScroll:le,scrollTo:te,reset:ne,refresh:J}}const mt=e=>["add","add-unique","toggle"].includes(e),kl=".*+?^${}()|[]\\",xl=Object.keys(Xe);var Ol=Fe({name:"QSelect",inheritAttrs:!1,props:{...Cl,...wt,...Xe,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:mt},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...Ct,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:s,emit:o}){const{proxy:C}=Ie(),{$q:I}=C,n=T(!1),x=T(!1),S=T(-1),f=T(""),A=T(!1),c=T(!1);let g=null,k,v,_,E=null,b,U,D,Y;const P=T(null),B=T(null),G=T(null),ue=T(null),ne=T(null),J=ul(e),te=il(it),Q=r(()=>Array.isArray(e.options)?e.options.length:0),ae=r(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:re,virtualScrollSliceSizeComputed:q,localResetVirtualScroll:H,padVirtualScroll:$,onVirtualScrollEvt:le,scrollTo:ce,setVirtualScrollSize:L}=Vl({virtualScrollLength:Q,getVirtualScrollTarget:It,getVirtualScrollEl:nt,virtualScrollItemSizeComputed:ae}),l=kt(),a=r(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,i=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const u=e.mapOptions===!0&&k!==void 0?k:[],m=i.map(F=>Ft(F,u));return e.modelValue===null&&t===!0?m.filter(F=>F!==null):m}return i}),d=r(()=>{const t={};return xl.forEach(i=>{const u=e[i];u!==void 0&&(t[i]=u)}),t}),y=r(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),O=r(()=>dt(a.value)),N=r(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||a.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),M=r(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),w=r(()=>Q.value===0),K=r(()=>a.value.map(t=>X.value(t)).join(", ")),V=r(()=>e.displayValue!==void 0?e.displayValue:K.value),W=r(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),me=r(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||a.value.some(W.value))),xe=r(()=>l.focused.value===!0?e.tabindex:-1),ee=r(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":n.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return S.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${S.value}`),t}),_e=r(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),se=r(()=>a.value.map((t,i)=>({index:i,opt:t,html:W.value(t),selected:!0,removeAtIndex:zt,toggleOption:de,tabindex:xe.value}))),Se=r(()=>{if(Q.value===0)return[];const{from:t,to:i}=re.value;return e.options.slice(t,i).map((u,m)=>{const F=ge.value(u)===!0,z=t+m,R={clickable:!0,active:!1,activeClass:Te.value,manualFocus:!0,focused:!1,disable:F,tabindex:-1,dense:e.optionsDense,dark:y.value,role:"option",id:`${l.targetUid.value}_${z}`,onClick:()=>{de(u)}};return F!==!0&&(De(u)===!0&&(R.active=!0),S.value===z&&(R.focused=!0),R["aria-selected"]=R.active===!0?"true":"false",I.platform.is.desktop===!0&&(R.onMousemove=()=>{n.value===!0&&he(z)})),{index:z,opt:u,html:W.value(u),label:X.value(u),selected:R.active,focused:R.focused,toggleOption:de,setOptionIndex:he,itemProps:R}})}),Be=r(()=>e.dropdownIcon!==void 0?e.dropdownIcon:I.iconSet.arrow.dropdown),qe=r(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Te=r(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),p=r(()=>Ne(e.optionValue,"value")),X=r(()=>Ne(e.optionLabel,"label")),ge=r(()=>Ne(e.optionDisable,"disable")),Oe=r(()=>a.value.map(t=>p.value(t))),At=r(()=>{const t={onInput:it,onChange:te,onKeydown:ut,onKeyup:tt,onKeypress:lt,onFocus:Ze,onClick(i){v===!0&&Ve(i)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=te,t});ve(a,t=>{k=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(x.value!==!0&&n.value!==!0||O.value!==!0)&&(_!==!0&&Ce(),(x.value===!0||n.value===!0)&&ye(""))},{immediate:!0}),ve(()=>e.fillInput,Ce),ve(n,Ke),ve(Q,Dt);function Ge(t){return e.emitValue===!0?p.value(t):t}function $e(t){if(t>-1&&t<a.value.length)if(e.multiple===!0){const i=e.modelValue.slice();o("remove",{index:t,value:i.splice(t,1)[0]}),o("update:modelValue",i)}else o("update:modelValue",null)}function zt(t){$e(t),l.focus()}function Je(t,i){const u=Ge(t);if(e.multiple!==!0){e.fillInput===!0&&Me(X.value(t),!0,!0),o("update:modelValue",u);return}if(a.value.length===0){o("add",{index:0,value:u}),o("update:modelValue",e.multiple===!0?[u]:u);return}if(i===!0&&De(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const m=e.modelValue.slice();o("add",{index:m.length,value:u}),m.push(u),o("update:modelValue",m)}function de(t,i){if(l.editable.value!==!0||t===void 0||ge.value(t)===!0)return;const u=p.value(t);if(e.multiple!==!0){i!==!0&&(Me(e.fillInput===!0?X.value(t):"",!0,!0),fe()),B.value!==null&&B.value.focus(),(a.value.length===0||Ae(p.value(a.value[0]),u)!==!0)&&o("update:modelValue",e.emitValue===!0?u:t);return}if((v!==!0||A.value===!0)&&l.focus(),Ze(),a.value.length===0){const z=e.emitValue===!0?u:t;o("add",{index:0,value:z}),o("update:modelValue",e.multiple===!0?[z]:z);return}const m=e.modelValue.slice(),F=Oe.value.findIndex(z=>Ae(z,u));if(F>-1)o("remove",{index:F,value:m.splice(F,1)[0]});else{if(e.maxValues!==void 0&&m.length>=e.maxValues)return;const z=e.emitValue===!0?u:t;o("add",{index:m.length,value:z}),m.push(z)}o("update:modelValue",m)}function he(t){if(I.platform.is.desktop!==!0)return;const i=t>-1&&t<Q.value?t:-1;S.value!==i&&(S.value=i)}function Ee(t=1,i){if(n.value===!0){let u=S.value;do u=Le(u+t,-1,Q.value-1);while(u!==-1&&u!==S.value&&ge.value(e.options[u])===!0);S.value!==u&&(he(u),ce(u),i!==!0&&e.useInput===!0&&e.fillInput===!0&&Pe(u>=0?X.value(e.options[u]):b))}}function Ft(t,i){const u=m=>Ae(p.value(m),t);return e.options.find(u)||i.find(u)||t}function Ne(t,i){const u=t!==void 0?t:i;return typeof u=="function"?u:m=>m!==null&&typeof m=="object"&&u in m?m[u]:m}function De(t){const i=p.value(t);return Oe.value.find(u=>Ae(u,i))!==void 0}function Ze(t){e.useInput===!0&&B.value!==null&&(t===void 0||B.value===t.target&&t.target.value===K.value)&&B.value.select()}function et(t){Jt(t,27)===!0&&n.value===!0&&(Ve(t),fe(),Ce()),o("keyup",t)}function tt(t){const{value:i}=t.target;if(t.keyCode!==void 0){et(t);return}if(t.target.value="",g!==null&&(clearTimeout(g),g=null),Ce(),typeof i=="string"&&i.length>0){const u=i.toLocaleLowerCase(),m=z=>{const R=e.options.find(j=>z.value(j).toLocaleLowerCase()===u);return R===void 0?!1:(a.value.indexOf(R)===-1?de(R):fe(),!0)},F=z=>{m(p)!==!0&&(m(X)===!0||z===!0||ye(i,!0,()=>F(!0)))};F()}else l.clearValue(t)}function lt(t){o("keypress",t)}function ut(t){if(o("keydown",t),Zt(t)===!0)return;const i=f.value.length>0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),u=t.shiftKey!==!0&&e.multiple!==!0&&(S.value>-1||i===!0);if(t.keyCode===27){je(t);return}if(t.keyCode===9&&u===!1){be();return}if(t.target===void 0||t.target.id!==l.targetUid.value)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&n.value===!1){oe(t),we();return}if(t.keyCode===8&&e.hideSelected!==!0&&f.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?$e(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&o("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof f.value!="string"||f.value.length===0)&&(oe(t),S.value=-1,Ee(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&q.value!==void 0&&(oe(t),S.value=Math.max(-1,Math.min(Q.value,S.value+(t.keyCode===33?-1:1)*q.value.view)),Ee(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(oe(t),Ee(t.keyCode===38?-1:1,e.multiple));const m=Q.value;if((D===void 0||Y<Date.now())&&(D=""),m>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||D.length>0)){n.value!==!0&&we(t);const F=t.key.toLocaleLowerCase(),z=D.length===1&&D[0]===F;Y=Date.now()+1500,z===!1&&(oe(t),D+=F);const R=new RegExp("^"+D.split("").map(Qe=>kl.indexOf(Qe)>-1?"\\"+Qe:Qe).join(".*"),"i");let j=S.value;if(z===!0||j<0||R.test(X.value(e.options[j]))!==!0)do j=Le(j+1,-1,m-1);while(j!==S.value&&(ge.value(e.options[j])===!0||R.test(X.value(e.options[j]))!==!0));S.value!==j&&ie(()=>{he(j),ce(j),j>=0&&e.useInput===!0&&e.fillInput===!0&&Pe(X.value(e.options[j]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||D!=="")&&(t.keyCode!==9||u===!1))){if(t.keyCode!==9&&oe(t),S.value>-1&&S.value<m){de(e.options[S.value]);return}if(i===!0){const F=(z,R)=>{if(R){if(mt(R)!==!0)return}else R=e.newValueMode;if(z==null)return;Me("",e.multiple!==!0,!0),(R==="toggle"?de:Je)(z,R==="add-unique"),e.multiple!==!0&&(B.value!==null&&B.value.focus(),fe())};if(e.onNewValue!==void 0?o("newValue",f.value,F):F(f.value),e.multiple!==!0)return}n.value===!0?be():l.innerLoading.value!==!0&&we()}}function nt(){return v===!0?ne.value:G.value!==null&&G.value.contentEl!==null?G.value.contentEl:void 0}function It(){return nt()}function _t(){return e.hideSelected===!0?[]:s["selected-item"]!==void 0?se.value.map(t=>s["selected-item"](t)).slice():s.selected!==void 0?[].concat(s.selected()):e.useChips===!0?se.value.map((t,i)=>h(hl,{key:"option-"+i,removable:l.editable.value===!0&&ge.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:xe.value,onRemove(){t.removeAtIndex(i)}},()=>h("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:X.value(t.opt)}))):[h("span",{[me.value===!0?"innerHTML":"textContent"]:V.value})]}function at(){if(w.value===!0)return s["no-option"]!==void 0?s["no-option"]({inputValue:f.value}):void 0;const t=s.option!==void 0?s.option:u=>h(sl,{key:u.index,...u.itemProps},()=>h(cl,()=>h(dl,()=>h("span",{[u.html===!0?"innerHTML":"textContent"]:u.label}))));let i=$("div",Se.value.map(t));return s["before-options"]!==void 0&&(i=s["before-options"]().concat(i)),el(s["after-options"],i)}function Bt(t,i){const u=i===!0?{...ee.value,...l.splitAttrs.attributes.value}:void 0,m={ref:i===!0?B:void 0,key:"i_t",class:N.value,style:e.inputStyle,value:f.value!==void 0?f.value:"",type:"search",...u,id:i===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...At.value};return t!==!0&&v===!0&&(Array.isArray(m.class)===!0?m.class=[...m.class,"no-pointer-events"]:m.class+=" no-pointer-events"),h("input",m)}function it(t){g!==null&&(clearTimeout(g),g=null),!(t&&t.target&&t.target.qComposing===!0)&&(Pe(t.target.value||""),_=!0,b=f.value,l.focused.value!==!0&&(v!==!0||A.value===!0)&&l.focus(),e.onFilter!==void 0&&(g=setTimeout(()=>{g=null,ye(f.value)},e.inputDebounce)))}function Pe(t){f.value!==t&&(f.value=t,o("inputValue",t))}function Me(t,i,u){_=u!==!0,e.useInput===!0&&(Pe(t),(i===!0||u!==!0)&&(b=t),i!==!0&&ye(t))}function ye(t,i,u){if(e.onFilter===void 0||i!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?o("filterAbort"):(l.innerLoading.value=!0,c.value=!0),t!==""&&e.multiple!==!0&&a.value.length>0&&_!==!0&&t===X.value(a.value[0])&&(t="");const m=setTimeout(()=>{n.value===!0&&(n.value=!1)},10);E!==null&&clearTimeout(E),E=m,o("filter",t,(F,z)=>{(i===!0||l.focused.value===!0)&&E===m&&(clearTimeout(E),typeof F=="function"&&F(),c.value=!1,ie(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(i===!0?n.value===!0&&fe():n.value===!0?Ke(!0):n.value=!0),typeof z=="function"&&ie(()=>{z(C)}),typeof u=="function"&&ie(()=>{u(C)})}))},()=>{l.focused.value===!0&&E===m&&(clearTimeout(E),l.innerLoading.value=!1,c.value=!1),n.value===!0&&(n.value=!1)})}function Ot(){return h(al,{ref:G,class:M.value,style:e.popupContentStyle,modelValue:n.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&w.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:y.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:qe.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,..._e.value,onScrollPassive:le,onBeforeShow:rt,onBeforeHide:Et,onShow:Pt},at)}function Et(t){ct(t),be()}function Pt(){L()}function Rt(t){Ve(t),B.value!==null&&B.value.focus(),A.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Ht(t){Ve(t),ie(()=>{A.value=!1})}function Lt(){const t=[h(Sl,{class:`col-auto ${l.fieldClass.value}`,...d.value,for:l.targetUid.value,dark:y.value,square:!0,loading:c.value,itemAligned:!1,filled:!0,stackLabel:f.value.length>0,...l.splitAttrs.listeners.value,onFocus:Rt,onBlur:Ht},{...s,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return n.value===!0&&t.push(h("div",{ref:ne,class:M.value+" scroll",style:e.popupContentStyle,..._e.value,onClick:je,onScrollPassive:le},at())),h(nl,{ref:ue,modelValue:x.value,position:e.useInput===!0?"top":void 0,transitionShow:U,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:rt,onBeforeHide:Tt,onHide:$t,onShow:Nt},()=>h("div",{class:"q-select__dialog"+(y.value===!0?" q-select__dialog--dark q-dark":"")+(A.value===!0?" q-select__dialog--focused":"")},t))}function Tt(t){ct(t),ue.value!==null&&ue.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function $t(t){fe(),l.focused.value===!1&&o("blur",t),Ce()}function Nt(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&B.value!==null&&B.value!==t&&B.value.focus(),L()}function be(){x.value!==!0&&(S.value=-1,n.value===!0&&(n.value=!1),l.focused.value===!1&&(E!==null&&(clearTimeout(E),E=null),l.innerLoading.value===!0&&(o("filterAbort"),l.innerLoading.value=!1,c.value=!1)))}function we(t){l.editable.value===!0&&(v===!0?(l.onControlFocusin(t),x.value=!0,ie(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?ye(f.value):(w.value!==!0||s["no-option"]!==void 0)&&(n.value=!0))}function fe(){x.value=!1,be()}function Ce(){e.useInput===!0&&Me(e.multiple!==!0&&e.fillInput===!0&&a.value.length>0&&X.value(a.value[0])||"",!0,!0)}function Ke(t){let i=-1;if(t===!0){if(a.value.length>0){const u=p.value(a.value[0]);i=e.options.findIndex(m=>Ae(p.value(m),u))}H(i)}he(i)}function Dt(t,i){n.value===!0&&l.innerLoading.value===!1&&(H(-1,!0),ie(()=>{n.value===!0&&l.innerLoading.value===!1&&(t>i?H():Ke(!0))}))}function ot(){x.value===!1&&G.value!==null&&G.value.updatePosition()}function rt(t){t!==void 0&&Ve(t),o("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function ct(t){t!==void 0&&Ve(t),o("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function st(){v=I.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?s["no-option"]!==void 0||e.onFilter!==void 0||w.value===!1:!0),U=I.platform.is.ios===!0&&v===!0&&e.useInput===!0?"fade":e.transitionShow}return Yt(st),Gt(ot),st(),bt(()=>{g!==null&&clearTimeout(g)}),Object.assign(C,{showPopup:we,hidePopup:fe,removeAtIndex:$e,add:Je,toggleOption:de,getOptionIndex:()=>S.value,setOptionIndex:he,moveOptionSelection:Ee,filter:ye,updateMenuPosition:ot,updateInputValue:Me,isOptionSelected:De,getEmittingOptionValue:Ge,isOptionDisabled:(...t)=>ge.value.apply(null,t)===!0,getOptionValue:(...t)=>p.value.apply(null,t),getOptionLabel:(...t)=>X.value.apply(null,t)}),Object.assign(l,{innerValue:a,fieldClass:r(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:P,targetRef:B,hasValue:O,showPopup:we,floatingLabel:r(()=>e.hideSelected!==!0&&O.value===!0||typeof f.value=="number"||f.value.length>0||dt(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(x.value===!0||w.value!==!0||s["no-option"]!==void 0))return v===!0?Lt():Ot();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{Ce(),be()})},onClick(t){if(je(t),v!==!0&&n.value===!0){be(),B.value!==null&&B.value.focus();return}we(t)}},getControl:t=>{const i=_t(),u=t===!0||x.value!==!0||v!==!0;if(e.useInput===!0)i.push(Bt(t,u));else if(l.editable.value===!0){const F=u===!0?ee.value:void 0;i.push(h("input",{ref:u===!0?B:void 0,key:"d_t",class:"q-select__focus-target",id:u===!0?l.targetUid.value:void 0,value:V.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...F,onKeydown:ut,onKeyup:et,onKeypress:lt})),u===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length>0&&i.push(h("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:tt}))}if(J.value!==void 0&&e.disable!==!0&&Oe.value.length>0){const F=Oe.value.map(z=>h("option",{value:z,selected:!0}));i.push(h("select",{class:"hidden",name:J.value,multiple:e.multiple},F))}const m=e.useInput===!0||u!==!0?void 0:l.splitAttrs.attributes.value;return h("div",{class:"q-field__native row items-center",...m,...l.splitAttrs.listeners.value},i)},getInnerAppend:()=>e.loading!==!0&&c.value!==!0&&e.hideDropdownIcon!==!0?[h(He,{class:"q-select__dropdown-icon"+(n.value===!0?" rotate-180":""),name:Be.value})]:null}),Vt(l)}});export{Bl as Q,Ol as a,vl as b};
