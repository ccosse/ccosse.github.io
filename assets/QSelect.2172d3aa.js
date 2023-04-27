import{aC as St,c as xe,aB as gt,a as r,d as h,aE as ht,af as Pe,g as Fe,r as N,w as ve,ar as bt,Y as oe,aw as Kt,aF as He,a9 as Re,aG as pt,z as jt,v as Qt,ac as Ut,aH as Wt,a0 as Xt,ad as Yt,o as yt,x as ie,at as Gt,aI as Jt,T as Qe,aJ as ze,S as Zt,ap as Ve,ao as el,h as tl}from"./index.43db228c.js";import{T as ll}from"./TouchPan.82b99c0e.js";import{u as wt,a as nl,e as ul,d as al}from"./ClosePopup.a59ea547.js";import{u as Xe,a as Ct,c as Vt,b as kt,f as dt,e as il,d as ol,g as rl,h as cl}from"./QMenu.0e188e71.js";import{u as sl,a as dl}from"./use-dark.c0e985de.js";const Ye={...St,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},We=50,xt=2*We,qt=xt*Math.PI,fl=Math.round(qt*1e3)/1e3;var vl=xe({name:"QCircularProgress",props:{...Ye,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:c}){const{proxy:{$q:o}}=Fe(),b=gt(e),_=r(()=>{const k=(o.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(o.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-k}deg)`:`rotate3d(0, 0, 1, ${k-90}deg)`}}),u=r(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),x=r(()=>xt/(1-e.thickness/2)),S=r(()=>`${x.value/2} ${x.value/2} ${x.value} ${x.value}`),f=r(()=>Pe(e.value,e.min,e.max)),A=r(()=>qt*(1-(f.value-e.min)/(e.max-e.min))),s=r(()=>e.thickness/2*x.value);function g({thickness:k,offset:v,color:I,cls:E,rounded:w}){return h("circle",{class:"q-circular-progress__"+E+(I!==void 0?` text-${I}`:""),style:u.value,fill:"transparent",stroke:"currentColor","stroke-width":k,"stroke-dasharray":fl,"stroke-dashoffset":v,"stroke-linecap":w,cx:x.value,cy:x.value,r:We})}return()=>{const k=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&k.push(h("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:We-s.value/2,cx:x.value,cy:x.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&k.push(g({cls:"track",thickness:s.value,offset:0,color:e.trackColor})),k.push(g({cls:"circle",thickness:s.value,offset:A.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const v=[h("svg",{class:"q-circular-progress__svg",style:_.value,viewBox:S.value,"aria-hidden":"true"},k)];return e.showValue===!0&&v.push(h("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},c.default!==void 0?c.default():[h("div",f.value)])),h("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:b.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:f.value},ht(c.internal,v))}}});const ft=[34,37,40,33,39,38],ml=Object.keys(Ye);var Il=xe({name:"QKnob",props:{...wt,...Ye,modelValue:{type:Number,required:!0},innerMin:Number,innerMax:Number,step:{type:Number,default:1,validator:e=>e>=0},tabindex:{type:[Number,String],default:0},disable:Boolean,readonly:Boolean},emits:["update:modelValue","change","dragValue"],setup(e,{slots:c,emit:o}){const{proxy:b}=Fe(),{$q:_}=b,u=N(e.modelValue),x=N(!1),S=r(()=>isNaN(e.innerMin)===!0||e.innerMin<e.min?e.min:e.innerMin),f=r(()=>isNaN(e.innerMax)===!0||e.innerMax>e.max?e.max:e.innerMax);let A;function s(){u.value=e.modelValue===null?S.value:Pe(e.modelValue,S.value,f.value),p(!0)}ve(()=>`${e.modelValue}|${S.value}|${f.value}`,s),s();const g=r(()=>e.disable===!1&&e.readonly===!1),k=r(()=>"q-knob non-selectable"+(g.value===!0?" q-knob--editable":e.disable===!0?" disabled":"")),v=r(()=>(String(e.step).trim().split(".")[1]||"").length),I=r(()=>e.step===0?1:e.step),E=r(()=>e.instantFeedback===!0||x.value===!0),w=_.platform.is.mobile===!0?r(()=>g.value===!0?{onClick:ne}:{}):r(()=>g.value===!0?{onMousedown:G,onClick:ne,onKeydown:ue,onKeyup:te}:{}),Q=r(()=>g.value===!0?{tabindex:e.tabindex}:{[`aria-${e.disable===!0?"disabled":"readonly"}`]:"true"}),D=r(()=>{const q={};return ml.forEach(R=>{q[R]=e[R]}),q});function Y(q){q.isFinal?(J(q.evt,!0),x.value=!1):(q.isFirst&&(B(),x.value=!0),J(q.evt))}const L=r(()=>[[ll,Y,void 0,{prevent:!0,stop:!0,mouse:!0}]]);function B(){const{top:q,left:R,width:T,height:le}=b.$el.getBoundingClientRect();A={top:q+le/2,left:R+T/2}}function G(q){B(),J(q)}function ne(q){B(),J(q,!0)}function ue(q){if(!ft.includes(q.keyCode))return;oe(q);const R=([34,33].includes(q.keyCode)?10:1)*I.value,T=[34,37,40].includes(q.keyCode)?-R:R;u.value=Pe(parseFloat((u.value+T).toFixed(v.value)),S.value,f.value),p()}function J(q,R){const T=Kt(q),le=Math.abs(T.top-A.top),ce=Math.sqrt(le**2+Math.abs(T.left-A.left)**2);let H=Math.asin(le/ce)*(180/Math.PI);T.top<A.top?H=A.left<T.left?90-H:270+H:H=A.left<T.left?H+90:270-H,_.lang.rtl===!0?H=He(-H-e.angle,0,360):e.angle&&(H=He(H-e.angle,0,360)),e.reverse===!0&&(H=360-H);let l=e.min+H/360*(e.max-e.min);if(I.value!==0){const a=l%I.value;l=l-a+(Math.abs(a)>=I.value/2?(a<0?-1:1)*I.value:0),l=parseFloat(l.toFixed(v.value))}l=Pe(l,S.value,f.value),o("dragValue",l),u.value!==l&&(u.value=l),p(R)}function te(q){ft.includes(q.keyCode)&&p(!0)}function p(q){e.modelValue!==u.value&&o("update:modelValue",u.value),q===!0&&o("change",u.value)}const ae=nl(e);function re(){return h("input",ae.value)}return()=>{const q={class:k.value,role:"slider","aria-valuemin":S.value,"aria-valuemax":f.value,"aria-valuenow":e.modelValue,...Q.value,...D.value,value:u.value,instantFeedback:E.value,...w.value},R={default:c.default};return g.value===!0&&e.name!==void 0&&(R.internal=re),bt(vl,q,R,"knob",g.value,()=>L.value)}}}),Sl=xe({name:"QField",inheritAttrs:!1,props:Xe,emits:Ct,setup(){return Vt(kt())}});const gl={xs:8,sm:10,md:14,lg:20,xl:24};var hl=xe({name:"QChip",props:{...sl,...St,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:c,emit:o}){const{proxy:{$q:b}}=Fe(),_=dl(e,b),u=gt(e,gl),x=r(()=>e.selected===!0||e.icon!==void 0),S=r(()=>e.selected===!0?e.iconSelected||b.iconSet.chip.selected:e.icon),f=r(()=>e.iconRemove||b.iconSet.chip.remove),A=r(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),s=r(()=>{const w=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(w?` text-${w} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(A.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(_.value===!0?" q-chip--dark q-dark":"")}),g=r(()=>{const w=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},Q={...w,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||b.lang.label.remove};return{chip:w,remove:Q}});function k(w){w.keyCode===13&&v(w)}function v(w){e.disable||(o("update:selected",!e.selected),o("click",w))}function I(w){(w.keyCode===void 0||w.keyCode===13)&&(oe(w),e.disable===!1&&(o("update:modelValue",!1),o("remove")))}function E(){const w=[];A.value===!0&&w.push(h("div",{class:"q-focus-helper"})),x.value===!0&&w.push(h(Re,{class:"q-chip__icon q-chip__icon--left",name:S.value}));const Q=e.label!==void 0?[h("div",{class:"ellipsis"},[e.label])]:void 0;return w.push(h("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},ht(c.default,Q))),e.iconRight&&w.push(h(Re,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&w.push(h(Re,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:f.value,...g.value.remove,onClick:I,onKeyup:I})),w}return()=>{if(e.modelValue===!1)return;const w={class:s.value,style:u.value};return A.value===!0&&Object.assign(w,g.value.chip,{onClick:v,onKeyup:k}),bt("div",w,E(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[pt,e.ripple]])}}}),bl=xe({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:c}){const o=r(()=>parseInt(e.lines,10)),b=r(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),_=r(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>h("div",{style:_.value,class:b.value},jt(c.default))}});let Ne=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const c=document.createElement("div");Object.assign(c.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(c),e.scrollLeft=-1e3,Ne=e.scrollLeft>=0,e.remove()}const Z=1e3,yl=["start","center","end","start-force","center-force","end-force"],Mt=Array.prototype.filter,wl=window.getComputedStyle(document.body).overflowAnchor===void 0?Qt:function(e,c){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const o=e.children||[];Mt.call(o,_=>_.dataset&&_.dataset.qVsAnchor!==void 0).forEach(_=>{delete _.dataset.qVsAnchor});const b=o[c];b&&b.dataset&&(b.dataset.qVsAnchor="")}))};function ke(e,c){return e+c}function Ue(e,c,o,b,_,u,x,S){const f=e===window?document.scrollingElement||document.documentElement:e,A=_===!0?"offsetWidth":"offsetHeight",s={scrollStart:0,scrollViewSize:-x-S,scrollMaxSize:0,offsetStart:-x,offsetEnd:-S};if(_===!0?(e===window?(s.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s.scrollViewSize+=document.documentElement.clientWidth):(s.scrollStart=f.scrollLeft,s.scrollViewSize+=f.clientWidth),s.scrollMaxSize=f.scrollWidth,u===!0&&(s.scrollStart=(Ne===!0?s.scrollMaxSize-s.scrollViewSize:0)-s.scrollStart)):(e===window?(s.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,s.scrollViewSize+=document.documentElement.clientHeight):(s.scrollStart=f.scrollTop,s.scrollViewSize+=f.clientHeight),s.scrollMaxSize=f.scrollHeight),o!==null)for(let g=o.previousElementSibling;g!==null;g=g.previousElementSibling)g.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetStart+=g[A]);if(b!==null)for(let g=b.nextElementSibling;g!==null;g=g.nextElementSibling)g.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetEnd+=g[A]);if(c!==e){const g=f.getBoundingClientRect(),k=c.getBoundingClientRect();_===!0?(s.offsetStart+=k.left-g.left,s.offsetEnd-=k.width):(s.offsetStart+=k.top-g.top,s.offsetEnd-=k.height),e!==window&&(s.offsetStart+=s.scrollStart),s.offsetEnd+=s.scrollMaxSize-s.offsetStart}return s}function vt(e,c,o,b){c==="end"&&(c=(e===window?document.body:e)[o===!0?"scrollWidth":"scrollHeight"]),e===window?o===!0?(b===!0&&(c=(Ne===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-c),window.scrollTo(c,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c):o===!0?(b===!0&&(c=(Ne===!0?e.scrollWidth-e.offsetWidth:0)-c),e.scrollLeft=c):e.scrollTop=c}function _e(e,c,o,b){if(o>=b)return 0;const _=c.length,u=Math.floor(o/Z),x=Math.floor((b-1)/Z)+1;let S=e.slice(u,x).reduce(ke,0);return o%Z!==0&&(S-=c.slice(u*Z,o).reduce(ke,0)),b%Z!==0&&b!==_&&(S-=c.slice(b,x*Z).reduce(ke,0)),S}const Cl={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},Vl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...Cl};function kl({virtualScrollLength:e,getVirtualScrollTarget:c,getVirtualScrollEl:o,virtualScrollItemSizeComputed:b}){const _=Fe(),{props:u,emit:x,proxy:S}=_,{$q:f}=S;let A,s,g,k=[],v;const I=N(0),E=N(0),w=N({}),Q=N(null),D=N(null),Y=N(null),L=N({from:0,to:0}),B=r(()=>u.tableColspan!==void 0?u.tableColspan:100);b===void 0&&(b=r(()=>u.virtualScrollItemSize));const G=r(()=>b.value+";"+u.virtualScrollHorizontal),ne=r(()=>G.value+";"+u.virtualScrollSliceRatioBefore+";"+u.virtualScrollSliceRatioAfter);ve(ne,()=>{T()}),ve(G,ue);function ue(){R(s,!0)}function J(a){R(a===void 0?s:a)}function te(a,d){const y=c();if(y==null||y.nodeType===8)return;const O=Ue(y,o(),Q.value,D.value,u.virtualScrollHorizontal,f.lang.rtl,u.virtualScrollStickySizeStart,u.virtualScrollStickySizeEnd);g!==O.scrollViewSize&&T(O.scrollViewSize),ae(y,O,Math.min(e.value-1,Math.max(0,parseInt(a,10)||0)),0,yl.indexOf(d)>-1?d:s>-1&&a>s?"end":"start")}function p(){const a=c();if(a==null||a.nodeType===8)return;const d=Ue(a,o(),Q.value,D.value,u.virtualScrollHorizontal,f.lang.rtl,u.virtualScrollStickySizeStart,u.virtualScrollStickySizeEnd),y=e.value-1,O=d.scrollMaxSize-d.offsetStart-d.offsetEnd-E.value;if(A===d.scrollStart)return;if(d.scrollMaxSize<=0){ae(a,d,0,0);return}g!==d.scrollViewSize&&T(d.scrollViewSize),re(L.value.from);const $=Math.floor(d.scrollMaxSize-Math.max(d.scrollViewSize,d.offsetEnd)-Math.min(v[y],d.scrollViewSize/2));if($>0&&Math.ceil(d.scrollStart)>=$){ae(a,d,y,d.scrollMaxSize-d.offsetEnd-k.reduce(ke,0));return}let M=0,C=d.scrollStart-d.offsetStart,K=C;if(C<=O&&C+d.scrollViewSize>=I.value)C-=I.value,M=L.value.from,K=C;else for(let V=0;C>=k[V]&&M<y;V++)C-=k[V],M+=Z;for(;C>0&&M<y;)C-=v[M],C>-d.scrollViewSize?(M++,K=C):K=v[M]+C;ae(a,d,M,K)}function ae(a,d,y,O,$){const M=typeof $=="string"&&$.indexOf("-force")>-1,C=M===!0?$.replace("-force",""):$,K=C!==void 0?C:"start";let V=Math.max(0,y-w.value[K]),U=V+w.value.total;U>e.value&&(U=e.value,V=Math.max(0,U-w.value.total)),A=d.scrollStart;const me=V!==L.value.from||U!==L.value.to;if(me===!1&&C===void 0){ce(y);return}const{activeElement:qe}=document,ee=Y.value;me===!0&&ee!==null&&ee!==qe&&ee.contains(qe)===!0&&(ee.addEventListener("focusout",q),setTimeout(()=>{ee!==null&&ee.removeEventListener("focusout",q)})),wl(ee,y-V);const Ie=C!==void 0?v.slice(V,y).reduce(ke,0):0;if(me===!0){const se=U>=L.value.from&&V<=L.value.to?L.value.to:U;L.value={from:V,to:se},I.value=_e(k,v,0,V),E.value=_e(k,v,U,e.value),requestAnimationFrame(()=>{L.value.to!==U&&A===d.scrollStart&&(L.value={from:L.value.from,to:U},E.value=_e(k,v,U,e.value))})}requestAnimationFrame(()=>{if(A!==d.scrollStart)return;me===!0&&re(V);const se=v.slice(V,y).reduce(ke,0),Se=se+d.offsetStart+I.value,Be=Se+v[y];let Me=Se+O;if(C!==void 0){const Te=se-Ie,W=d.scrollStart+Te;Me=M!==!0&&W<Se&&Be<W+d.scrollViewSize?W:C==="end"?Be-d.scrollViewSize:Se-(C==="start"?0:Math.round((d.scrollViewSize-v[y])/2))}A=Me,vt(a,Me,u.virtualScrollHorizontal,f.lang.rtl),ce(y)})}function re(a){const d=Y.value;if(d){const y=Mt.call(d.children,V=>V.classList&&V.classList.contains("q-virtual-scroll--skip")===!1),O=y.length,$=u.virtualScrollHorizontal===!0?V=>V.getBoundingClientRect().width:V=>V.offsetHeight;let M=a,C,K;for(let V=0;V<O;){for(C=$(y[V]),V++;V<O&&y[V].classList.contains("q-virtual-scroll--with-prev")===!0;)C+=$(y[V]),V++;K=C-v[M],K!==0&&(v[M]+=K,k[Math.floor(M/Z)]+=K),M++}}}function q(){Y.value!==null&&Y.value!==void 0&&Y.value.focus()}function R(a,d){const y=1*b.value;(d===!0||Array.isArray(v)===!1)&&(v=[]);const O=v.length;v.length=e.value;for(let M=e.value-1;M>=O;M--)v[M]=y;const $=Math.floor((e.value-1)/Z);k=[];for(let M=0;M<=$;M++){let C=0;const K=Math.min((M+1)*Z,e.value);for(let V=M*Z;V<K;V++)C+=v[V];k.push(C)}s=-1,A=void 0,I.value=_e(k,v,0,L.value.from),E.value=_e(k,v,L.value.to,e.value),a>=0?(re(L.value.from),ie(()=>{te(a)})):H()}function T(a){if(a===void 0&&typeof window!="undefined"){const C=c();C!=null&&C.nodeType!==8&&(a=Ue(C,o(),Q.value,D.value,u.virtualScrollHorizontal,f.lang.rtl,u.virtualScrollStickySizeStart,u.virtualScrollStickySizeEnd).scrollViewSize)}g=a;const d=parseFloat(u.virtualScrollSliceRatioBefore)||0,y=parseFloat(u.virtualScrollSliceRatioAfter)||0,O=1+d+y,$=a===void 0||a<=0?1:Math.ceil(a/b.value),M=Math.max(1,$,Math.ceil((u.virtualScrollSliceSize>0?u.virtualScrollSliceSize:10)/O));w.value={total:Math.ceil(M*O),start:Math.ceil(M*d),center:Math.ceil(M*(.5+d)),end:Math.ceil(M*(1+d)),view:$}}function le(a,d){const y=u.virtualScrollHorizontal===!0?"width":"height",O={["--q-virtual-scroll-item-"+y]:b.value+"px"};return[a==="tbody"?h(a,{class:"q-virtual-scroll__padding",key:"before",ref:Q},[h("tr",[h("td",{style:{[y]:`${I.value}px`,...O},colspan:B.value})])]):h(a,{class:"q-virtual-scroll__padding",key:"before",ref:Q,style:{[y]:`${I.value}px`,...O}}),h(a,{class:"q-virtual-scroll__content",key:"content",ref:Y,tabindex:-1},d.flat()),a==="tbody"?h(a,{class:"q-virtual-scroll__padding",key:"after",ref:D},[h("tr",[h("td",{style:{[y]:`${E.value}px`,...O},colspan:B.value})])]):h(a,{class:"q-virtual-scroll__padding",key:"after",ref:D,style:{[y]:`${E.value}px`,...O}})]}function ce(a){s!==a&&(u.onVirtualScroll!==void 0&&x("virtualScroll",{index:a,from:L.value.from,to:L.value.to-1,direction:a<s?"decrease":"increase",ref:S}),s=a)}T();const H=Ut(p,f.platform.is.ios===!0?120:35);Wt(()=>{T()});let l=!1;return Xt(()=>{l=!0}),Yt(()=>{if(l!==!0)return;const a=c();A!==void 0&&a!==void 0&&a!==null&&a.nodeType!==8?vt(a,A,u.virtualScrollHorizontal,f.lang.rtl):te(s)}),yt(()=>{H.cancel()}),Object.assign(S,{scrollTo:te,reset:ue,refresh:J}),{virtualScrollSliceRange:L,virtualScrollSliceSizeComputed:w,setVirtualScrollSize:T,onVirtualScrollEvt:H,localResetVirtualScroll:R,padVirtualScroll:le,scrollTo:te,reset:ue,refresh:J}}const mt=e=>["add","add-unique","toggle"].includes(e),xl=".*+?^${}()|[]\\",ql=Object.keys(Xe);var Bl=xe({name:"QSelect",inheritAttrs:!1,props:{...Vl,...wt,...Xe,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:mt},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...Ct,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:c,emit:o}){const{proxy:b}=Fe(),{$q:_}=b,u=N(!1),x=N(!1),S=N(-1),f=N(""),A=N(!1),s=N(!1);let g=null,k,v,I,E=null,w,Q,D,Y;const L=N(null),B=N(null),G=N(null),ne=N(null),ue=N(null),J=ul(e),te=ol(it),p=r(()=>Array.isArray(e.options)?e.options.length:0),ae=r(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:re,virtualScrollSliceSizeComputed:q,localResetVirtualScroll:R,padVirtualScroll:T,onVirtualScrollEvt:le,scrollTo:ce,setVirtualScrollSize:H}=kl({virtualScrollLength:p,getVirtualScrollTarget:Ft,getVirtualScrollEl:ut,virtualScrollItemSizeComputed:ae}),l=kt(),a=r(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,i=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const n=e.mapOptions===!0&&k!==void 0?k:[],m=i.map(F=>_t(F,n));return e.modelValue===null&&t===!0?m.filter(F=>F!==null):m}return i}),d=r(()=>{const t={};return ql.forEach(i=>{const n=e[i];n!==void 0&&(t[i]=n)}),t}),y=r(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),O=r(()=>dt(a.value)),$=r(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||a.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),M=r(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),C=r(()=>p.value===0),K=r(()=>a.value.map(t=>X.value(t)).join(", ")),V=r(()=>e.displayValue!==void 0?e.displayValue:K.value),U=r(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),me=r(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||a.value.some(U.value))),qe=r(()=>l.focused.value===!0?e.tabindex:-1),ee=r(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":u.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return S.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${S.value}`),t}),Ie=r(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),se=r(()=>a.value.map((t,i)=>({index:i,opt:t,html:U.value(t),selected:!0,removeAtIndex:zt,toggleOption:de,tabindex:qe.value}))),Se=r(()=>{if(p.value===0)return[];const{from:t,to:i}=re.value;return e.options.slice(t,i).map((n,m)=>{const F=ge.value(n)===!0,z=t+m,P={clickable:!0,active:!1,activeClass:Te.value,manualFocus:!0,focused:!1,disable:F,tabindex:-1,dense:e.optionsDense,dark:y.value,role:"option",id:`${l.targetUid.value}_${z}`,onClick:()=>{de(n)}};return F!==!0&&(Ke(n)===!0&&(P.active=!0),S.value===z&&(P.focused=!0),P["aria-selected"]=P.active===!0?"true":"false",_.platform.is.desktop===!0&&(P.onMousemove=()=>{u.value===!0&&he(z)})),{index:z,opt:n,html:U.value(n),label:X.value(n),selected:P.active,focused:P.focused,toggleOption:de,setOptionIndex:he,itemProps:P}})}),Be=r(()=>e.dropdownIcon!==void 0?e.dropdownIcon:_.iconSet.arrow.dropdown),Me=r(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Te=r(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),W=r(()=>De(e.optionValue,"value")),X=r(()=>De(e.optionLabel,"label")),ge=r(()=>De(e.optionDisable,"disable")),Oe=r(()=>a.value.map(t=>W.value(t))),At=r(()=>{const t={onInput:it,onChange:te,onKeydown:nt,onKeyup:tt,onKeypress:lt,onFocus:Ze,onClick(i){v===!0&&Ve(i)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=te,t});ve(a,t=>{k=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(x.value!==!0&&u.value!==!0||O.value!==!0)&&(I!==!0&&Ce(),(x.value===!0||u.value===!0)&&be(""))},{immediate:!0}),ve(()=>e.fillInput,Ce),ve(u,pe),ve(p,Dt);function Ge(t){return e.emitValue===!0?W.value(t):t}function $e(t){if(t>-1&&t<a.value.length)if(e.multiple===!0){const i=e.modelValue.slice();o("remove",{index:t,value:i.splice(t,1)[0]}),o("update:modelValue",i)}else o("update:modelValue",null)}function zt(t){$e(t),l.focus()}function Je(t,i){const n=Ge(t);if(e.multiple!==!0){e.fillInput===!0&&Ae(X.value(t),!0,!0),o("update:modelValue",n);return}if(a.value.length===0){o("add",{index:0,value:n}),o("update:modelValue",e.multiple===!0?[n]:n);return}if(i===!0&&Ke(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const m=e.modelValue.slice();o("add",{index:m.length,value:n}),m.push(n),o("update:modelValue",m)}function de(t,i){if(l.editable.value!==!0||t===void 0||ge.value(t)===!0)return;const n=W.value(t);if(e.multiple!==!0){i!==!0&&(Ae(e.fillInput===!0?X.value(t):"",!0,!0),fe()),B.value!==null&&B.value.focus(),(a.value.length===0||ze(W.value(a.value[0]),n)!==!0)&&o("update:modelValue",e.emitValue===!0?n:t);return}if((v!==!0||A.value===!0)&&l.focus(),Ze(),a.value.length===0){const z=e.emitValue===!0?n:t;o("add",{index:0,value:z}),o("update:modelValue",e.multiple===!0?[z]:z);return}const m=e.modelValue.slice(),F=Oe.value.findIndex(z=>ze(z,n));if(F>-1)o("remove",{index:F,value:m.splice(F,1)[0]});else{if(e.maxValues!==void 0&&m.length>=e.maxValues)return;const z=e.emitValue===!0?n:t;o("add",{index:m.length,value:z}),m.push(z)}o("update:modelValue",m)}function he(t){if(_.platform.is.desktop!==!0)return;const i=t>-1&&t<p.value?t:-1;S.value!==i&&(S.value=i)}function Ee(t=1,i){if(u.value===!0){let n=S.value;do n=He(n+t,-1,p.value-1);while(n!==-1&&n!==S.value&&ge.value(e.options[n])===!0);S.value!==n&&(he(n),ce(n),i!==!0&&e.useInput===!0&&e.fillInput===!0&&Le(n>=0?X.value(e.options[n]):w))}}function _t(t,i){const n=m=>ze(W.value(m),t);return e.options.find(n)||i.find(n)||t}function De(t,i){const n=t!==void 0?t:i;return typeof n=="function"?n:m=>m!==null&&typeof m=="object"&&n in m?m[n]:m}function Ke(t){const i=W.value(t);return Oe.value.find(n=>ze(n,i))!==void 0}function Ze(t){e.useInput===!0&&B.value!==null&&(t===void 0||B.value===t.target&&t.target.value===K.value)&&B.value.select()}function et(t){Zt(t,27)===!0&&u.value===!0&&(Ve(t),fe(),Ce()),o("keyup",t)}function tt(t){const{value:i}=t.target;if(t.keyCode!==void 0){et(t);return}if(t.target.value="",g!==null&&(clearTimeout(g),g=null),Ce(),typeof i=="string"&&i.length>0){const n=i.toLocaleLowerCase(),m=z=>{const P=e.options.find(j=>z.value(j).toLocaleLowerCase()===n);return P===void 0?!1:(a.value.indexOf(P)===-1?de(P):fe(),!0)},F=z=>{m(W)!==!0&&(m(X)===!0||z===!0||be(i,!0,()=>F(!0)))};F()}else l.clearValue(t)}function lt(t){o("keypress",t)}function nt(t){if(o("keydown",t),el(t)===!0)return;const i=f.value.length>0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),n=t.shiftKey!==!0&&e.multiple!==!0&&(S.value>-1||i===!0);if(t.keyCode===27){Qe(t);return}if(t.keyCode===9&&n===!1){ye();return}if(t.target===void 0||t.target.id!==l.targetUid.value)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&u.value===!1){oe(t),we();return}if(t.keyCode===8&&e.hideSelected!==!0&&f.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?$e(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&o("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof f.value!="string"||f.value.length===0)&&(oe(t),S.value=-1,Ee(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&q.value!==void 0&&(oe(t),S.value=Math.max(-1,Math.min(p.value,S.value+(t.keyCode===33?-1:1)*q.value.view)),Ee(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(oe(t),Ee(t.keyCode===38?-1:1,e.multiple));const m=p.value;if((D===void 0||Y<Date.now())&&(D=""),m>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||D.length>0)){u.value!==!0&&we(t);const F=t.key.toLocaleLowerCase(),z=D.length===1&&D[0]===F;Y=Date.now()+1500,z===!1&&(oe(t),D+=F);const P=new RegExp("^"+D.split("").map(je=>xl.indexOf(je)>-1?"\\"+je:je).join(".*"),"i");let j=S.value;if(z===!0||j<0||P.test(X.value(e.options[j]))!==!0)do j=He(j+1,-1,m-1);while(j!==S.value&&(ge.value(e.options[j])===!0||P.test(X.value(e.options[j]))!==!0));S.value!==j&&ie(()=>{he(j),ce(j),j>=0&&e.useInput===!0&&e.fillInput===!0&&Le(X.value(e.options[j]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||D!=="")&&(t.keyCode!==9||n===!1))){if(t.keyCode!==9&&oe(t),S.value>-1&&S.value<m){de(e.options[S.value]);return}if(i===!0){const F=(z,P)=>{if(P){if(mt(P)!==!0)return}else P=e.newValueMode;if(z==null)return;Ae("",e.multiple!==!0,!0),(P==="toggle"?de:Je)(z,P==="add-unique"),e.multiple!==!0&&(B.value!==null&&B.value.focus(),fe())};if(e.onNewValue!==void 0?o("newValue",f.value,F):F(f.value),e.multiple!==!0)return}u.value===!0?ye():l.innerLoading.value!==!0&&we()}}function ut(){return v===!0?ue.value:G.value!==null&&G.value.contentEl!==null?G.value.contentEl:void 0}function Ft(){return ut()}function It(){return e.hideSelected===!0?[]:c["selected-item"]!==void 0?se.value.map(t=>c["selected-item"](t)).slice():c.selected!==void 0?[].concat(c.selected()):e.useChips===!0?se.value.map((t,i)=>h(hl,{key:"option-"+i,removable:l.editable.value===!0&&ge.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:qe.value,onRemove(){t.removeAtIndex(i)}},()=>h("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:X.value(t.opt)}))):[h("span",{[me.value===!0?"innerHTML":"textContent"]:V.value})]}function at(){if(C.value===!0)return c["no-option"]!==void 0?c["no-option"]({inputValue:f.value}):void 0;const t=c.option!==void 0?c.option:n=>h(cl,{key:n.index,...n.itemProps},()=>h(rl,()=>h(bl,()=>h("span",{[n.html===!0?"innerHTML":"textContent"]:n.label}))));let i=T("div",Se.value.map(t));return c["before-options"]!==void 0&&(i=c["before-options"]().concat(i)),tl(c["after-options"],i)}function Bt(t,i){const n=i===!0?{...ee.value,...l.splitAttrs.attributes.value}:void 0,m={ref:i===!0?B:void 0,key:"i_t",class:$.value,style:e.inputStyle,value:f.value!==void 0?f.value:"",type:"search",...n,id:i===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...At.value};return t!==!0&&v===!0&&(Array.isArray(m.class)===!0?m.class=[...m.class,"no-pointer-events"]:m.class+=" no-pointer-events"),h("input",m)}function it(t){g!==null&&(clearTimeout(g),g=null),!(t&&t.target&&t.target.qComposing===!0)&&(Le(t.target.value||""),I=!0,w=f.value,l.focused.value!==!0&&(v!==!0||A.value===!0)&&l.focus(),e.onFilter!==void 0&&(g=setTimeout(()=>{g=null,be(f.value)},e.inputDebounce)))}function Le(t){f.value!==t&&(f.value=t,o("inputValue",t))}function Ae(t,i,n){I=n!==!0,e.useInput===!0&&(Le(t),(i===!0||n!==!0)&&(w=t),i!==!0&&be(t))}function be(t,i,n){if(e.onFilter===void 0||i!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?o("filterAbort"):(l.innerLoading.value=!0,s.value=!0),t!==""&&e.multiple!==!0&&a.value.length>0&&I!==!0&&t===X.value(a.value[0])&&(t="");const m=setTimeout(()=>{u.value===!0&&(u.value=!1)},10);E!==null&&clearTimeout(E),E=m,o("filter",t,(F,z)=>{(i===!0||l.focused.value===!0)&&E===m&&(clearTimeout(E),typeof F=="function"&&F(),s.value=!1,ie(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(i===!0?u.value===!0&&fe():u.value===!0?pe(!0):u.value=!0),typeof z=="function"&&ie(()=>{z(b)}),typeof n=="function"&&ie(()=>{n(b)})}))},()=>{l.focused.value===!0&&E===m&&(clearTimeout(E),l.innerLoading.value=!1,s.value=!1),u.value===!0&&(u.value=!1)})}function Ot(){return h(il,{ref:G,class:M.value,style:e.popupContentStyle,modelValue:u.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&C.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:y.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:Me.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...Ie.value,onScrollPassive:le,onBeforeShow:rt,onBeforeHide:Et,onShow:Lt},at)}function Et(t){ct(t),ye()}function Lt(){H()}function Pt(t){Ve(t),B.value!==null&&B.value.focus(),A.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Rt(t){Ve(t),ie(()=>{A.value=!1})}function Ht(){const t=[h(Sl,{class:`col-auto ${l.fieldClass.value}`,...d.value,for:l.targetUid.value,dark:y.value,square:!0,loading:s.value,itemAligned:!1,filled:!0,stackLabel:f.value.length>0,...l.splitAttrs.listeners.value,onFocus:Pt,onBlur:Rt},{...c,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return u.value===!0&&t.push(h("div",{ref:ue,class:M.value+" scroll",style:e.popupContentStyle,...Ie.value,onClick:Qe,onScrollPassive:le},at())),h(al,{ref:ne,modelValue:x.value,position:e.useInput===!0?"top":void 0,transitionShow:Q,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:rt,onBeforeHide:Nt,onHide:Tt,onShow:$t},()=>h("div",{class:"q-select__dialog"+(y.value===!0?" q-select__dialog--dark q-dark":"")+(A.value===!0?" q-select__dialog--focused":"")},t))}function Nt(t){ct(t),ne.value!==null&&ne.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function Tt(t){fe(),l.focused.value===!1&&o("blur",t),Ce()}function $t(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&B.value!==null&&B.value!==t&&B.value.focus(),H()}function ye(){x.value!==!0&&(S.value=-1,u.value===!0&&(u.value=!1),l.focused.value===!1&&(E!==null&&(clearTimeout(E),E=null),l.innerLoading.value===!0&&(o("filterAbort"),l.innerLoading.value=!1,s.value=!1)))}function we(t){l.editable.value===!0&&(v===!0?(l.onControlFocusin(t),x.value=!0,ie(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?be(f.value):(C.value!==!0||c["no-option"]!==void 0)&&(u.value=!0))}function fe(){x.value=!1,ye()}function Ce(){e.useInput===!0&&Ae(e.multiple!==!0&&e.fillInput===!0&&a.value.length>0&&X.value(a.value[0])||"",!0,!0)}function pe(t){let i=-1;if(t===!0){if(a.value.length>0){const n=W.value(a.value[0]);i=e.options.findIndex(m=>ze(W.value(m),n))}R(i)}he(i)}function Dt(t,i){u.value===!0&&l.innerLoading.value===!1&&(R(-1,!0),ie(()=>{u.value===!0&&l.innerLoading.value===!1&&(t>i?R():pe(!0))}))}function ot(){x.value===!1&&G.value!==null&&G.value.updatePosition()}function rt(t){t!==void 0&&Ve(t),o("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function ct(t){t!==void 0&&Ve(t),o("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function st(){v=_.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?c["no-option"]!==void 0||e.onFilter!==void 0||C.value===!1:!0),Q=_.platform.is.ios===!0&&v===!0&&e.useInput===!0?"fade":e.transitionShow}return Gt(st),Jt(ot),st(),yt(()=>{g!==null&&clearTimeout(g)}),Object.assign(b,{showPopup:we,hidePopup:fe,removeAtIndex:$e,add:Je,toggleOption:de,getOptionIndex:()=>S.value,setOptionIndex:he,moveOptionSelection:Ee,filter:be,updateMenuPosition:ot,updateInputValue:Ae,isOptionSelected:Ke,getEmittingOptionValue:Ge,isOptionDisabled:(...t)=>ge.value.apply(null,t)===!0,getOptionValue:(...t)=>W.value.apply(null,t),getOptionLabel:(...t)=>X.value.apply(null,t)}),Object.assign(l,{innerValue:a,fieldClass:r(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:L,targetRef:B,hasValue:O,showPopup:we,floatingLabel:r(()=>e.hideSelected!==!0&&O.value===!0||typeof f.value=="number"||f.value.length>0||dt(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(x.value===!0||C.value!==!0||c["no-option"]!==void 0))return v===!0?Ht():Ot();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{Ce(),ye()})},onClick(t){if(Qe(t),v!==!0&&u.value===!0){ye(),B.value!==null&&B.value.focus();return}we(t)}},getControl:t=>{const i=It(),n=t===!0||x.value!==!0||v!==!0;if(e.useInput===!0)i.push(Bt(t,n));else if(l.editable.value===!0){const F=n===!0?ee.value:void 0;i.push(h("input",{ref:n===!0?B:void 0,key:"d_t",class:"q-select__focus-target",id:n===!0?l.targetUid.value:void 0,value:V.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...F,onKeydown:nt,onKeyup:et,onKeypress:lt})),n===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length>0&&i.push(h("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:tt}))}if(J.value!==void 0&&e.disable!==!0&&Oe.value.length>0){const F=Oe.value.map(z=>h("option",{value:z,selected:!0}));i.push(h("select",{class:"hidden",name:J.value,multiple:e.multiple},F))}const m=e.useInput===!0||n!==!0?void 0:l.splitAttrs.attributes.value;return h("div",{class:"q-field__native row items-center",...m,...l.splitAttrs.listeners.value},i)},getInnerAppend:()=>e.loading!==!0&&s.value!==!0&&e.hideDropdownIcon!==!0?[h(Re,{class:"q-select__dropdown-icon"+(u.value===!0?" rotate-180":""),name:Be.value})]:null}),Vt(l)}});export{Il as Q,Bl as a,bl as b,vl as c};
