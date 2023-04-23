import{a as Ke,b as dt,c as ft,d as vt,f as it,e as _t,g as Ft}from"./QMenu.0eae9f81.js";import{e as je,aA as Bt,az as Et,g as m,ap as Lt,h as b,V as Be,aC as Rt,aG as Ht,k as Qe,ah as ue,t as Tt,v as E,n as ge,W as Dt,aH as Pt,X as Nt,Y as $t,s as mt,y as G,ag as Kt,aI as jt,ai as Ne,aJ as Ae,aD as rt,ab as Qt,ak as Se,aj as Ut,B as Wt}from"./index.fb8c9c73.js";import{u as Xt,a as Yt}from"./use-dark.644ac635.js";import{a as Gt,b as Jt,c as Zt}from"./QItemLabel.ed646ca6.js";import{u as el,d as tl,Q as ll}from"./ClosePopup.3e8b7d30.js";var ul=je({name:"QField",inheritAttrs:!1,props:Ke,emits:dt,setup(){return ft(vt())}});const nl={xs:8,sm:10,md:14,lg:20,xl:24};var al=je({name:"QChip",props:{...Xt,...Bt,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:r,emit:i}){const{proxy:{$q:C}}=Qe(),M=Yt(e,C),o=Et(e,nl),_=m(()=>e.selected===!0||e.icon!==void 0),w=m(()=>e.selected===!0?e.iconSelected||C.iconSet.chip.selected:e.icon),h=m(()=>e.iconRemove||C.iconSet.chip.remove),z=m(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),s=m(()=>{const y=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(y?` text-${y} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(z.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(M.value===!0?" q-chip--dark q-dark":"")}),k=m(()=>{const y=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},K={...y,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||C.lang.label.remove};return{chip:y,remove:K}});function q(y){y.keyCode===13&&g(y)}function g(y){e.disable||(i("update:selected",!e.selected),i("click",y))}function H(y){(y.keyCode===void 0||y.keyCode===13)&&(ue(y),e.disable===!1&&(i("update:modelValue",!1),i("remove")))}function F(){const y=[];z.value===!0&&y.push(b("div",{class:"q-focus-helper"})),_.value===!0&&y.push(b(Be,{class:"q-chip__icon q-chip__icon--left",name:w.value}));const K=e.label!==void 0?[b("div",{class:"ellipsis"},[e.label])]:void 0;return y.push(b("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Rt(r.default,K))),e.iconRight&&y.push(b(Be,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&y.push(b(Be,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:h.value,...k.value.remove,onClick:H,onKeyup:H})),y}return()=>{if(e.modelValue===!1)return;const y={class:s.value,style:o.value};return z.value===!0&&Object.assign(y,k.value.chip,{onClick:g,onKeyup:q}),Lt("div",y,F(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Ht,e.ripple]])}}});let Ee=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const r=document.createElement("div");Object.assign(r.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(r),e.scrollLeft=-1e3,Ee=e.scrollLeft>=0,e.remove()}const j=1e3,ol=["start","center","end","start-force","center-force","end-force"],St=Array.prototype.filter,il=window.getComputedStyle(document.body).overflowAnchor===void 0?Tt:function(e,r){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const i=e.children||[];St.call(i,M=>M.dataset&&M.dataset.qVsAnchor!==void 0).forEach(M=>{delete M.dataset.qVsAnchor});const C=i[r];C&&C.dataset&&(C.dataset.qVsAnchor="")}))};function he(e,r){return e+r}function $e(e,r,i,C,M,o,_,w){const h=e===window?document.scrollingElement||document.documentElement:e,z=M===!0?"offsetWidth":"offsetHeight",s={scrollStart:0,scrollViewSize:-_-w,scrollMaxSize:0,offsetStart:-_,offsetEnd:-w};if(M===!0?(e===window?(s.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s.scrollViewSize+=document.documentElement.clientWidth):(s.scrollStart=h.scrollLeft,s.scrollViewSize+=h.clientWidth),s.scrollMaxSize=h.scrollWidth,o===!0&&(s.scrollStart=(Ee===!0?s.scrollMaxSize-s.scrollViewSize:0)-s.scrollStart)):(e===window?(s.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,s.scrollViewSize+=document.documentElement.clientHeight):(s.scrollStart=h.scrollTop,s.scrollViewSize+=h.clientHeight),s.scrollMaxSize=h.scrollHeight),i!==null)for(let k=i.previousElementSibling;k!==null;k=k.previousElementSibling)k.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetStart+=k[z]);if(C!==null)for(let k=C.nextElementSibling;k!==null;k=k.nextElementSibling)k.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetEnd+=k[z]);if(r!==e){const k=h.getBoundingClientRect(),q=r.getBoundingClientRect();M===!0?(s.offsetStart+=q.left-k.left,s.offsetEnd-=q.width):(s.offsetStart+=q.top-k.top,s.offsetEnd-=q.height),e!==window&&(s.offsetStart+=s.scrollStart),s.offsetEnd+=s.scrollMaxSize-s.offsetStart}return s}function ct(e,r,i,C){r==="end"&&(r=(e===window?document.body:e)[i===!0?"scrollWidth":"scrollHeight"]),e===window?i===!0?(C===!0&&(r=(Ee===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-r),window.scrollTo(r,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r):i===!0?(C===!0&&(r=(Ee===!0?e.scrollWidth-e.offsetWidth:0)-r),e.scrollLeft=r):e.scrollTop=r}function qe(e,r,i,C){if(i>=C)return 0;const M=r.length,o=Math.floor(i/j),_=Math.floor((C-1)/j)+1;let w=e.slice(o,_).reduce(he,0);return i%j!==0&&(w-=r.slice(o*j,i).reduce(he,0)),C%j!==0&&C!==M&&(w-=r.slice(C,_*j).reduce(he,0)),w}const rl={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},cl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...rl};function sl({virtualScrollLength:e,getVirtualScrollTarget:r,getVirtualScrollEl:i,virtualScrollItemSizeComputed:C}){const M=Qe(),{props:o,emit:_,proxy:w}=M,{$q:h}=w;let z,s,k,q=[],g;const H=E(0),F=E(0),y=E({}),K=E(null),D=E(null),W=E(null),B=E({from:0,to:0}),O=m(()=>o.tableColspan!==void 0?o.tableColspan:100);C===void 0&&(C=m(()=>o.virtualScrollItemSize));const X=m(()=>C.value+";"+o.virtualScrollHorizontal),ye=m(()=>X.value+";"+o.virtualScrollSliceRatioBefore+";"+o.virtualScrollSliceRatioAfter);ge(ye,()=>{Y()}),ge(X,ne);function ne(){Z(s,!0)}function be(n){Z(n===void 0?s:n)}function J(n,c){const f=r();if(f==null||f.nodeType===8)return;const A=$e(f,i(),K.value,D.value,o.virtualScrollHorizontal,h.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd);k!==A.scrollViewSize&&Y(A.scrollViewSize),ae(f,A,Math.min(e.value-1,Math.max(0,parseInt(n,10)||0)),0,ol.indexOf(c)>-1?c:s>-1&&n>s?"end":"start")}function Q(){const n=r();if(n==null||n.nodeType===8)return;const c=$e(n,i(),K.value,D.value,o.virtualScrollHorizontal,h.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd),f=e.value-1,A=c.scrollMaxSize-c.offsetStart-c.offsetEnd-F.value;if(z===c.scrollStart)return;if(c.scrollMaxSize<=0){ae(n,c,0,0);return}k!==c.scrollViewSize&&Y(c.scrollViewSize),we(B.value.from);const L=Math.floor(c.scrollMaxSize-Math.max(c.scrollViewSize,c.offsetEnd)-Math.min(g[f],c.scrollViewSize/2));if(L>0&&Math.ceil(c.scrollStart)>=L){ae(n,c,f,c.scrollMaxSize-c.offsetEnd-q.reduce(he,0));return}let V=0,v=c.scrollStart-c.offsetStart,R=v;if(v<=A&&v+c.scrollViewSize>=H.value)v-=H.value,V=B.value.from,R=v;else for(let S=0;v>=q[S]&&V<f;S++)v-=q[S],V+=j;for(;v>0&&V<f;)v-=g[V],v>-c.scrollViewSize?(V++,R=v):R=g[V]+v;ae(n,c,V,R)}function ae(n,c,f,A,L){const V=typeof L=="string"&&L.indexOf("-force")>-1,v=V===!0?L.replace("-force",""):L,R=v!==void 0?v:"start";let S=Math.max(0,f-y.value[R]),P=S+y.value.total;P>e.value&&(P=e.value,S=Math.max(0,P-y.value.total)),z=c.scrollStart;const ie=S!==B.value.from||P!==B.value.to;if(ie===!1&&v===void 0){Ce(f);return}const{activeElement:ke}=document,U=W.value;ie===!0&&U!==null&&U!==ke&&U.contains(ke)===!0&&(U.addEventListener("focusout",Ve),setTimeout(()=>{U!==null&&U.removeEventListener("focusout",Ve)})),il(U,f-S);const Ie=v!==void 0?g.slice(S,f).reduce(he,0):0;if(ie===!0){const ee=P>=B.value.from&&S<=B.value.to?B.value.to:P;B.value={from:S,to:ee},H.value=qe(q,g,0,S),F.value=qe(q,g,P,e.value),requestAnimationFrame(()=>{B.value.to!==P&&z===c.scrollStart&&(B.value={from:B.value.from,to:P},F.value=qe(q,g,P,e.value))})}requestAnimationFrame(()=>{if(z!==c.scrollStart)return;ie===!0&&we(S);const ee=g.slice(S,f).reduce(he,0),re=ee+c.offsetStart+H.value,Me=re+g[f];let xe=re+A;if(v!==void 0){const Le=ee-Ie,N=c.scrollStart+Le;xe=V!==!0&&N<re&&Me<N+c.scrollViewSize?N:v==="end"?Me-c.scrollViewSize:re-(v==="start"?0:Math.round((c.scrollViewSize-g[f])/2))}z=xe,ct(n,xe,o.virtualScrollHorizontal,h.lang.rtl),Ce(f)})}function we(n){const c=W.value;if(c){const f=St.call(c.children,S=>S.classList&&S.classList.contains("q-virtual-scroll--skip")===!1),A=f.length,L=o.virtualScrollHorizontal===!0?S=>S.getBoundingClientRect().width:S=>S.offsetHeight;let V=n,v,R;for(let S=0;S<A;){for(v=L(f[S]),S++;S<A&&f[S].classList.contains("q-virtual-scroll--with-prev")===!0;)v+=L(f[S]),S++;R=v-g[V],R!==0&&(g[V]+=R,q[Math.floor(V/j)]+=R),V++}}}function Ve(){W.value!==null&&W.value!==void 0&&W.value.focus()}function Z(n,c){const f=1*C.value;(c===!0||Array.isArray(g)===!1)&&(g=[]);const A=g.length;g.length=e.value;for(let V=e.value-1;V>=A;V--)g[V]=f;const L=Math.floor((e.value-1)/j);q=[];for(let V=0;V<=L;V++){let v=0;const R=Math.min((V+1)*j,e.value);for(let S=V*j;S<R;S++)v+=g[S];q.push(v)}s=-1,z=void 0,H.value=qe(q,g,0,B.value.from),F.value=qe(q,g,B.value.to,e.value),n>=0?(we(B.value.from),G(()=>{J(n)})):oe()}function Y(n){if(n===void 0&&typeof window!="undefined"){const v=r();v!=null&&v.nodeType!==8&&(n=$e(v,i(),K.value,D.value,o.virtualScrollHorizontal,h.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd).scrollViewSize)}k=n;const c=parseFloat(o.virtualScrollSliceRatioBefore)||0,f=parseFloat(o.virtualScrollSliceRatioAfter)||0,A=1+c+f,L=n===void 0||n<=0?1:Math.ceil(n/C.value),V=Math.max(1,L,Math.ceil((o.virtualScrollSliceSize>0?o.virtualScrollSliceSize:10)/A));y.value={total:Math.ceil(V*A),start:Math.ceil(V*c),center:Math.ceil(V*(.5+c)),end:Math.ceil(V*(1+c)),view:L}}function ze(n,c){const f=o.virtualScrollHorizontal===!0?"width":"height",A={["--q-virtual-scroll-item-"+f]:C.value+"px"};return[n==="tbody"?b(n,{class:"q-virtual-scroll__padding",key:"before",ref:K},[b("tr",[b("td",{style:{[f]:`${H.value}px`,...A},colspan:O.value})])]):b(n,{class:"q-virtual-scroll__padding",key:"before",ref:K,style:{[f]:`${H.value}px`,...A}}),b(n,{class:"q-virtual-scroll__content",key:"content",ref:W,tabindex:-1},c.flat()),n==="tbody"?b(n,{class:"q-virtual-scroll__padding",key:"after",ref:D},[b("tr",[b("td",{style:{[f]:`${F.value}px`,...A},colspan:O.value})])]):b(n,{class:"q-virtual-scroll__padding",key:"after",ref:D,style:{[f]:`${F.value}px`,...A}})]}function Ce(n){s!==n&&(o.onVirtualScroll!==void 0&&_("virtualScroll",{index:n,from:B.value.from,to:B.value.to-1,direction:n<s?"decrease":"increase",ref:w}),s=n)}Y();const oe=Dt(Q,h.platform.is.ios===!0?120:35);Pt(()=>{Y()});let a=!1;return Nt(()=>{a=!0}),$t(()=>{if(a!==!0)return;const n=r();z!==void 0&&n!==void 0&&n!==null&&n.nodeType!==8?ct(n,z,o.virtualScrollHorizontal,h.lang.rtl):J(s)}),mt(()=>{oe.cancel()}),Object.assign(w,{scrollTo:J,reset:ne,refresh:be}),{virtualScrollSliceRange:B,virtualScrollSliceSizeComputed:y,setVirtualScrollSize:Y,onVirtualScrollEvt:oe,localResetVirtualScroll:Z,padVirtualScroll:ze,scrollTo:J,reset:ne,refresh:be}}const st=e=>["add","add-unique","toggle"].includes(e),dl=".*+?^${}()|[]\\",fl=Object.keys(Ke);var yl=je({name:"QSelect",inheritAttrs:!1,props:{...cl,...el,...Ke,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:st},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...dt,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:r,emit:i}){const{proxy:C}=Qe(),{$q:M}=C,o=E(!1),_=E(!1),w=E(-1),h=E(""),z=E(!1),s=E(!1);let k=null,q,g,H,F=null,y,K,D,W;const B=E(null),O=E(null),X=E(null),ye=E(null),ne=E(null),be=tl(e),J=Ft(lt),Q=m(()=>Array.isArray(e.options)?e.options.length:0),ae=m(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:we,virtualScrollSliceSizeComputed:Ve,localResetVirtualScroll:Z,padVirtualScroll:Y,onVirtualScrollEvt:ze,scrollTo:Ce,setVirtualScrollSize:oe}=sl({virtualScrollLength:Q,getVirtualScrollTarget:bt,getVirtualScrollEl:et,virtualScrollItemSizeComputed:ae}),a=vt(),n=m(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,u=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const l=e.mapOptions===!0&&q!==void 0?q:[],d=u.map(p=>yt(p,l));return e.modelValue===null&&t===!0?d.filter(p=>p!==null):d}return u}),c=m(()=>{const t={};return fl.forEach(u=>{const l=e[u];l!==void 0&&(t[u]=l)}),t}),f=m(()=>e.optionsDark===null?a.isDark.value:e.optionsDark),A=m(()=>it(n.value)),L=m(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||n.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),V=m(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),v=m(()=>Q.value===0),R=m(()=>n.value.map(t=>$.value(t)).join(", ")),S=m(()=>e.displayValue!==void 0?e.displayValue:R.value),P=m(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),ie=m(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||n.value.some(P.value))),ke=m(()=>a.focused.value===!0?e.tabindex:-1),U=m(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":o.value===!0?"true":"false","aria-controls":`${a.targetUid.value}_lb`};return w.value>=0&&(t["aria-activedescendant"]=`${a.targetUid.value}_${w.value}`),t}),Ie=m(()=>({id:`${a.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),ee=m(()=>n.value.map((t,u)=>({index:u,opt:t,html:P.value(t),selected:!0,removeAtIndex:ht,toggleOption:te,tabindex:ke.value}))),re=m(()=>{if(Q.value===0)return[];const{from:t,to:u}=we.value;return e.options.slice(t,u).map((l,d)=>{const p=ce.value(l)===!0,x=t+d,I={clickable:!0,active:!1,activeClass:Le.value,manualFocus:!0,focused:!1,disable:p,tabindex:-1,dense:e.optionsDense,dark:f.value,role:"option",id:`${a.targetUid.value}_${x}`,onClick:()=>{te(l)}};return p!==!0&&(Te(l)===!0&&(I.active=!0),w.value===x&&(I.focused=!0),I["aria-selected"]=I.active===!0?"true":"false",M.platform.is.desktop===!0&&(I.onMousemove=()=>{o.value===!0&&se(x)})),{index:x,opt:l,html:P.value(l),label:$.value(l),selected:I.active,focused:I.focused,toggleOption:te,setOptionIndex:se,itemProps:I}})}),Me=m(()=>e.dropdownIcon!==void 0?e.dropdownIcon:M.iconSet.arrow.dropdown),xe=m(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Le=m(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),N=m(()=>He(e.optionValue,"value")),$=m(()=>He(e.optionLabel,"label")),ce=m(()=>He(e.optionDisable,"disable")),Oe=m(()=>n.value.map(t=>N.value(t))),gt=m(()=>{const t={onInput:lt,onChange:J,onKeydown:Ze,onKeyup:Ge,onKeypress:Je,onFocus:Xe,onClick(u){g===!0&&Se(u)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=J,t});ge(n,t=>{q=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&a.innerLoading.value!==!0&&(_.value!==!0&&o.value!==!0||A.value!==!0)&&(H!==!0&&me(),(_.value===!0||o.value===!0)&&de(""))},{immediate:!0}),ge(()=>e.fillInput,me),ge(o,De),ge(Q,Ot);function Ue(t){return e.emitValue===!0?N.value(t):t}function Re(t){if(t>-1&&t<n.value.length)if(e.multiple===!0){const u=e.modelValue.slice();i("remove",{index:t,value:u.splice(t,1)[0]}),i("update:modelValue",u)}else i("update:modelValue",null)}function ht(t){Re(t),a.focus()}function We(t,u){const l=Ue(t);if(e.multiple!==!0){e.fillInput===!0&&pe($.value(t),!0,!0),i("update:modelValue",l);return}if(n.value.length===0){i("add",{index:0,value:l}),i("update:modelValue",e.multiple===!0?[l]:l);return}if(u===!0&&Te(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const d=e.modelValue.slice();i("add",{index:d.length,value:l}),d.push(l),i("update:modelValue",d)}function te(t,u){if(a.editable.value!==!0||t===void 0||ce.value(t)===!0)return;const l=N.value(t);if(e.multiple!==!0){u!==!0&&(pe(e.fillInput===!0?$.value(t):"",!0,!0),le()),O.value!==null&&O.value.focus(),(n.value.length===0||Ae(N.value(n.value[0]),l)!==!0)&&i("update:modelValue",e.emitValue===!0?l:t);return}if((g!==!0||z.value===!0)&&a.focus(),Xe(),n.value.length===0){const x=e.emitValue===!0?l:t;i("add",{index:0,value:x}),i("update:modelValue",e.multiple===!0?[x]:x);return}const d=e.modelValue.slice(),p=Oe.value.findIndex(x=>Ae(x,l));if(p>-1)i("remove",{index:p,value:d.splice(p,1)[0]});else{if(e.maxValues!==void 0&&d.length>=e.maxValues)return;const x=e.emitValue===!0?l:t;i("add",{index:d.length,value:x}),d.push(x)}i("update:modelValue",d)}function se(t){if(M.platform.is.desktop!==!0)return;const u=t>-1&&t<Q.value?t:-1;w.value!==u&&(w.value=u)}function _e(t=1,u){if(o.value===!0){let l=w.value;do l=rt(l+t,-1,Q.value-1);while(l!==-1&&l!==w.value&&ce.value(e.options[l])===!0);w.value!==l&&(se(l),Ce(l),u!==!0&&e.useInput===!0&&e.fillInput===!0&&Fe(l>=0?$.value(e.options[l]):y))}}function yt(t,u){const l=d=>Ae(N.value(d),t);return e.options.find(l)||u.find(l)||t}function He(t,u){const l=t!==void 0?t:u;return typeof l=="function"?l:d=>d!==null&&typeof d=="object"&&l in d?d[l]:d}function Te(t){const u=N.value(t);return Oe.value.find(l=>Ae(l,u))!==void 0}function Xe(t){e.useInput===!0&&O.value!==null&&(t===void 0||O.value===t.target&&t.target.value===R.value)&&O.value.select()}function Ye(t){Qt(t,27)===!0&&o.value===!0&&(Se(t),le(),me()),i("keyup",t)}function Ge(t){const{value:u}=t.target;if(t.keyCode!==void 0){Ye(t);return}if(t.target.value="",k!==null&&(clearTimeout(k),k=null),me(),typeof u=="string"&&u.length>0){const l=u.toLocaleLowerCase(),d=x=>{const I=e.options.find(T=>x.value(T).toLocaleLowerCase()===l);return I===void 0?!1:(n.value.indexOf(I)===-1?te(I):le(),!0)},p=x=>{d(N)!==!0&&(d($)===!0||x===!0||de(u,!0,()=>p(!0)))};p()}else a.clearValue(t)}function Je(t){i("keypress",t)}function Ze(t){if(i("keydown",t),Ut(t)===!0)return;const u=h.value.length>0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),l=t.shiftKey!==!0&&e.multiple!==!0&&(w.value>-1||u===!0);if(t.keyCode===27){Ne(t);return}if(t.keyCode===9&&l===!1){fe();return}if(t.target===void 0||t.target.id!==a.targetUid.value)return;if(t.keyCode===40&&a.innerLoading.value!==!0&&o.value===!1){ue(t),ve();return}if(t.keyCode===8&&e.hideSelected!==!0&&h.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Re(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&i("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof h.value!="string"||h.value.length===0)&&(ue(t),w.value=-1,_e(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&Ve.value!==void 0&&(ue(t),w.value=Math.max(-1,Math.min(Q.value,w.value+(t.keyCode===33?-1:1)*Ve.value.view)),_e(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ue(t),_e(t.keyCode===38?-1:1,e.multiple));const d=Q.value;if((D===void 0||W<Date.now())&&(D=""),d>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||D.length>0)){o.value!==!0&&ve(t);const p=t.key.toLocaleLowerCase(),x=D.length===1&&D[0]===p;W=Date.now()+1500,x===!1&&(ue(t),D+=p);const I=new RegExp("^"+D.split("").map(Pe=>dl.indexOf(Pe)>-1?"\\"+Pe:Pe).join(".*"),"i");let T=w.value;if(x===!0||T<0||I.test($.value(e.options[T]))!==!0)do T=rt(T+1,-1,d-1);while(T!==w.value&&(ce.value(e.options[T])===!0||I.test($.value(e.options[T]))!==!0));w.value!==T&&G(()=>{se(T),Ce(T),T>=0&&e.useInput===!0&&e.fillInput===!0&&Fe($.value(e.options[T]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||D!=="")&&(t.keyCode!==9||l===!1))){if(t.keyCode!==9&&ue(t),w.value>-1&&w.value<d){te(e.options[w.value]);return}if(u===!0){const p=(x,I)=>{if(I){if(st(I)!==!0)return}else I=e.newValueMode;if(x==null)return;pe("",e.multiple!==!0,!0),(I==="toggle"?te:We)(x,I==="add-unique"),e.multiple!==!0&&(O.value!==null&&O.value.focus(),le())};if(e.onNewValue!==void 0?i("newValue",h.value,p):p(h.value),e.multiple!==!0)return}o.value===!0?fe():a.innerLoading.value!==!0&&ve()}}function et(){return g===!0?ne.value:X.value!==null&&X.value.contentEl!==null?X.value.contentEl:void 0}function bt(){return et()}function wt(){return e.hideSelected===!0?[]:r["selected-item"]!==void 0?ee.value.map(t=>r["selected-item"](t)).slice():r.selected!==void 0?[].concat(r.selected()):e.useChips===!0?ee.value.map((t,u)=>b(al,{key:"option-"+u,removable:a.editable.value===!0&&ce.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:ke.value,onRemove(){t.removeAtIndex(u)}},()=>b("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:$.value(t.opt)}))):[b("span",{[ie.value===!0?"innerHTML":"textContent"]:S.value})]}function tt(){if(v.value===!0)return r["no-option"]!==void 0?r["no-option"]({inputValue:h.value}):void 0;const t=r.option!==void 0?r.option:l=>b(Zt,{key:l.index,...l.itemProps},()=>b(Gt,()=>b(Jt,()=>b("span",{[l.html===!0?"innerHTML":"textContent"]:l.label}))));let u=Y("div",re.value.map(t));return r["before-options"]!==void 0&&(u=r["before-options"]().concat(u)),Wt(r["after-options"],u)}function Vt(t,u){const l=u===!0?{...U.value,...a.splitAttrs.attributes.value}:void 0,d={ref:u===!0?O:void 0,key:"i_t",class:L.value,style:e.inputStyle,value:h.value!==void 0?h.value:"",type:"search",...l,id:u===!0?a.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...gt.value};return t!==!0&&g===!0&&(Array.isArray(d.class)===!0?d.class=[...d.class,"no-pointer-events"]:d.class+=" no-pointer-events"),b("input",d)}function lt(t){k!==null&&(clearTimeout(k),k=null),!(t&&t.target&&t.target.qComposing===!0)&&(Fe(t.target.value||""),H=!0,y=h.value,a.focused.value!==!0&&(g!==!0||z.value===!0)&&a.focus(),e.onFilter!==void 0&&(k=setTimeout(()=>{k=null,de(h.value)},e.inputDebounce)))}function Fe(t){h.value!==t&&(h.value=t,i("inputValue",t))}function pe(t,u,l){H=l!==!0,e.useInput===!0&&(Fe(t),(u===!0||l!==!0)&&(y=t),u!==!0&&de(t))}function de(t,u,l){if(e.onFilter===void 0||u!==!0&&a.focused.value!==!0)return;a.innerLoading.value===!0?i("filterAbort"):(a.innerLoading.value=!0,s.value=!0),t!==""&&e.multiple!==!0&&n.value.length>0&&H!==!0&&t===$.value(n.value[0])&&(t="");const d=setTimeout(()=>{o.value===!0&&(o.value=!1)},10);F!==null&&clearTimeout(F),F=d,i("filter",t,(p,x)=>{(u===!0||a.focused.value===!0)&&F===d&&(clearTimeout(F),typeof p=="function"&&p(),s.value=!1,G(()=>{a.innerLoading.value=!1,a.editable.value===!0&&(u===!0?o.value===!0&&le():o.value===!0?De(!0):o.value=!0),typeof x=="function"&&G(()=>{x(C)}),typeof l=="function"&&G(()=>{l(C)})}))},()=>{a.focused.value===!0&&F===d&&(clearTimeout(F),a.innerLoading.value=!1,s.value=!1),o.value===!0&&(o.value=!1)})}function Ct(){return b(_t,{ref:X,class:V.value,style:e.popupContentStyle,modelValue:o.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&v.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:f.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:xe.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...Ie.value,onScrollPassive:ze,onBeforeShow:nt,onBeforeHide:kt,onShow:xt},tt)}function kt(t){at(t),fe()}function xt(){oe()}function pt(t){Se(t),O.value!==null&&O.value.focus(),z.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function At(t){Se(t),G(()=>{z.value=!1})}function qt(){const t=[b(ul,{class:`col-auto ${a.fieldClass.value}`,...c.value,for:a.targetUid.value,dark:f.value,square:!0,loading:s.value,itemAligned:!1,filled:!0,stackLabel:h.value.length>0,...a.splitAttrs.listeners.value,onFocus:pt,onBlur:At},{...r,rawControl:()=>a.getControl(!0),before:void 0,after:void 0})];return o.value===!0&&t.push(b("div",{ref:ne,class:V.value+" scroll",style:e.popupContentStyle,...Ie.value,onClick:Ne,onScrollPassive:ze},tt())),b(ll,{ref:ye,modelValue:_.value,position:e.useInput===!0?"top":void 0,transitionShow:K,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:nt,onBeforeHide:zt,onHide:It,onShow:Mt},()=>b("div",{class:"q-select__dialog"+(f.value===!0?" q-select__dialog--dark q-dark":"")+(z.value===!0?" q-select__dialog--focused":"")},t))}function zt(t){at(t),ye.value!==null&&ye.value.__updateRefocusTarget(a.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),a.focused.value=!1}function It(t){le(),a.focused.value===!1&&i("blur",t),me()}function Mt(){const t=document.activeElement;(t===null||t.id!==a.targetUid.value)&&O.value!==null&&O.value!==t&&O.value.focus(),oe()}function fe(){_.value!==!0&&(w.value=-1,o.value===!0&&(o.value=!1),a.focused.value===!1&&(F!==null&&(clearTimeout(F),F=null),a.innerLoading.value===!0&&(i("filterAbort"),a.innerLoading.value=!1,s.value=!1)))}function ve(t){a.editable.value===!0&&(g===!0?(a.onControlFocusin(t),_.value=!0,G(()=>{a.focus()})):a.focus(),e.onFilter!==void 0?de(h.value):(v.value!==!0||r["no-option"]!==void 0)&&(o.value=!0))}function le(){_.value=!1,fe()}function me(){e.useInput===!0&&pe(e.multiple!==!0&&e.fillInput===!0&&n.value.length>0&&$.value(n.value[0])||"",!0,!0)}function De(t){let u=-1;if(t===!0){if(n.value.length>0){const l=N.value(n.value[0]);u=e.options.findIndex(d=>Ae(N.value(d),l))}Z(u)}se(u)}function Ot(t,u){o.value===!0&&a.innerLoading.value===!1&&(Z(-1,!0),G(()=>{o.value===!0&&a.innerLoading.value===!1&&(t>u?Z():De(!0))}))}function ut(){_.value===!1&&X.value!==null&&X.value.updatePosition()}function nt(t){t!==void 0&&Se(t),i("popupShow",t),a.hasPopupOpen=!0,a.onControlFocusin(t)}function at(t){t!==void 0&&Se(t),i("popupHide",t),a.hasPopupOpen=!1,a.onControlFocusout(t)}function ot(){g=M.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?r["no-option"]!==void 0||e.onFilter!==void 0||v.value===!1:!0),K=M.platform.is.ios===!0&&g===!0&&e.useInput===!0?"fade":e.transitionShow}return Kt(ot),jt(ut),ot(),mt(()=>{k!==null&&clearTimeout(k)}),Object.assign(C,{showPopup:ve,hidePopup:le,removeAtIndex:Re,add:We,toggleOption:te,getOptionIndex:()=>w.value,setOptionIndex:se,moveOptionSelection:_e,filter:de,updateMenuPosition:ut,updateInputValue:pe,isOptionSelected:Te,getEmittingOptionValue:Ue,isOptionDisabled:(...t)=>ce.value.apply(null,t)===!0,getOptionValue:(...t)=>N.value.apply(null,t),getOptionLabel:(...t)=>$.value.apply(null,t)}),Object.assign(a,{innerValue:n,fieldClass:m(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:B,targetRef:O,hasValue:A,showPopup:ve,floatingLabel:m(()=>e.hideSelected!==!0&&A.value===!0||typeof h.value=="number"||h.value.length>0||it(e.displayValue)),getControlChild:()=>{if(a.editable.value!==!1&&(_.value===!0||v.value!==!0||r["no-option"]!==void 0))return g===!0?qt():Ct();a.hasPopupOpen===!0&&(a.hasPopupOpen=!1)},controlEvents:{onFocusin(t){a.onControlFocusin(t)},onFocusout(t){a.onControlFocusout(t,()=>{me(),fe()})},onClick(t){if(Ne(t),g!==!0&&o.value===!0){fe(),O.value!==null&&O.value.focus();return}ve(t)}},getControl:t=>{const u=wt(),l=t===!0||_.value!==!0||g!==!0;if(e.useInput===!0)u.push(Vt(t,l));else if(a.editable.value===!0){const p=l===!0?U.value:void 0;u.push(b("input",{ref:l===!0?O:void 0,key:"d_t",class:"q-select__focus-target",id:l===!0?a.targetUid.value:void 0,value:S.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...p,onKeydown:Ze,onKeyup:Ye,onKeypress:Je})),l===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length>0&&u.push(b("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Ge}))}if(be.value!==void 0&&e.disable!==!0&&Oe.value.length>0){const p=Oe.value.map(x=>b("option",{value:x,selected:!0}));u.push(b("select",{class:"hidden",name:be.value,multiple:e.multiple},p))}const d=e.useInput===!0||l!==!0?void 0:a.splitAttrs.attributes.value;return b("div",{class:"q-field__native row items-center",...d,...a.splitAttrs.listeners.value},u)},getInnerAppend:()=>e.loading!==!0&&s.value!==!0&&e.hideDropdownIcon!==!0?[b(Be,{class:"q-select__dropdown-icon"+(o.value===!0?" rotate-180":""),name:Me.value})]:null}),ft(a)}});export{yl as Q};
