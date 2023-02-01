import{c as H,u as qt,a as Tt,Q as me,h as xt,b as ge,R as St,d as Ge,e as pt,f as _t,g as kt,i as Lt,j as at,k as nt}from"./QBtn.cc342797.js";import{c as f,h as x,e as I,r as B,o as le,a as ce,i as ye,w as mt,t as bt,s as Ke,b as $t,d as Bt,g as X,f as Rt,j as k,k as Je,n as Ze,l as Le,m as Ue,p as Pt,q as zt,u as et,v as we,x as he,y as Mt,z as Se,A as Ae,B as ot,C as Ve,D as Xe,E as Ie,F as Et,G as pe,H as Ot,_ as Dt,I as At,J as Vt,K as j,L as E,M as It,N as tt,O as Ft}from"./index.8661e3d9.js";import{u as Fe,a as Ye,g as lt,s as rt,c as Qt,b as Ht,d as Wt,e as Nt,f as jt,h as Kt,i as Ut,j as Xt,k as Yt,l as Gt,m as Jt,n as Qe}from"./selection.d7d794de.js";var it=H({name:"QAvatar",props:{...qt,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:r}){const l=Tt(e),o=f(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),t=f(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const n=e.icon!==void 0?[x(me,{name:e.icon})]:void 0;return x("div",{class:o.value,style:l.value},[x("div",{class:"q-avatar__content row flex-center overflow-hidden",style:t.value},xt(r.default,n))])}}}),ut=H({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:r}){const l=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>x("div",{class:l.value},ge(r.default))}}),st=H({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:r}){const l=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>x("div",{class:l.value,role:"toolbar"},ge(r.default))}});let He,_e=0;const O=new Array(256);for(let e=0;e<256;e++)O[e]=(e+256).toString(16).substring(1);const Zt=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return r=>{const l=new Uint8Array(r);return e.getRandomValues(l),l}}return r=>{const l=[];for(let o=r;o>0;o--)l.push(Math.floor(Math.random()*256));return l}})(),ct=4096;function ea(){(He===void 0||_e+16>ct)&&(_e=0,He=Zt(ct));const e=Array.prototype.slice.call(He,_e,_e+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,O[e[0]]+O[e[1]]+O[e[2]]+O[e[3]]+"-"+O[e[4]]+O[e[5]]+"-"+O[e[6]]+O[e[7]]+"-"+O[e[8]]+O[e[9]]+"-"+O[e[10]]+O[e[11]]+O[e[12]]+O[e[13]]+O[e[14]]+O[e[15]]}let ta=0;const aa=["click","keydown"],na={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${ta++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function oa(e,r,l,o){const t=ye(bt,I);if(t===I)return console.error("QTab/QRouteTab component needs to be child of QTabs"),I;const{proxy:n}=X(),s=B(null),q=B(null),h=B(null),c=f(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),i=f(()=>t.currentModel.value===e.name),P=f(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(i.value===!0?" q-tab--active"+(t.tabProps.value.activeClass?" "+t.tabProps.value.activeClass:"")+(t.tabProps.value.activeColor?` text-${t.tabProps.value.activeColor}`:"")+(t.tabProps.value.activeBgColor?` bg-${t.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&t.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||t.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(o!==void 0?o.linkClass.value:"")),_=f(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(t.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),b=f(()=>e.disable===!0||t.hasFocus.value===!0||i.value===!1&&t.hasActiveTab.value===!0?-1:e.tabindex||0);function w(g,y){if(y!==!0&&s.value!==null&&s.value.focus(),e.disable===!0){o!==void 0&&o.hasRouterLink.value===!0&&Ke(g);return}if(o===void 0){t.updateModel({name:e.name}),l("click",g);return}if(o.hasRouterLink.value===!0){const d=(T={})=>{let M;const D=T.to===void 0||Rt(T.to,e.to)===!0?t.avoidRouteWatcher=ea():null;return o.navigateToRouterLink(g,{...T,returnRouterError:!0}).catch(A=>{M=A}).then(A=>{if(D===t.avoidRouteWatcher&&(t.avoidRouteWatcher=!1,M===void 0&&(A===void 0||A.message.startsWith("Avoided redundant navigation")===!0)&&t.updateModel({name:e.name})),T.returnRouterError===!0)return M!==void 0?Promise.reject(M):A})};l("click",g,d),g.defaultPrevented!==!0&&d();return}l("click",g)}function R(g){$t(g,[13,32])?w(g,!0):Bt(g)!==!0&&g.keyCode>=35&&g.keyCode<=40&&g.altKey!==!0&&g.metaKey!==!0&&t.onKbdNavigate(g.keyCode,n.$el)===!0&&Ke(g),l("keydown",g)}function z(){const g=t.tabProps.value.narrowIndicator,y=[],d=x("div",{ref:h,class:["q-tab__indicator",t.tabProps.value.indicatorClass]});e.icon!==void 0&&y.push(x(me,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&y.push(x("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&y.push(e.alertIcon!==void 0?x(me,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):x("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),g===!0&&y.push(d);const T=[x("div",{class:"q-focus-helper",tabindex:-1,ref:s}),x("div",{class:_.value},Ge(r.default,y))];return g===!1&&T.push(d),T}const S={name:f(()=>e.name),rootRef:q,tabIndicatorRef:h,routeData:o};le(()=>{t.unregisterTab(S)}),ce(()=>{t.registerTab(S)});function C(g,y){const d={ref:q,class:P.value,tabindex:b.value,role:"tab","aria-selected":i.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:w,onKeydown:R,...y};return mt(x(g,d,z()),[[St,c.value]])}return{renderTab:C,$tabs:t}}var We=H({name:"QRouteTab",props:{...pt,...na},emits:aa,setup(e,{slots:r,emit:l}){const o=_t({useDisableForRouterLinkProps:!1}),{renderTab:t,$tabs:n}=oa(e,r,l,{exact:f(()=>e.exact),...o});return k(()=>`${e.name} | ${e.exact} | ${(o.resolvedLink.value||{}).href}`,()=>{n.verifyRouteModel()}),()=>t(o.linkTag.value,o.linkAttrs.value)}});function la(){const e=B(!Je.value);return e.value===!1&&ce(()=>{e.value=!0}),e}const gt=typeof ResizeObserver!="undefined",dt=gt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var be=H({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:r}){let l=null,o,t={width:-1,height:-1};function n(h){h===!0||e.debounce===0||e.debounce==="0"?s():l===null&&(l=setTimeout(s,e.debounce))}function s(){if(l!==null&&(clearTimeout(l),l=null),o){const{offsetWidth:h,offsetHeight:c}=o;(h!==t.width||c!==t.height)&&(t={width:h,height:c},r("resize",t))}}const{proxy:q}=X();if(gt===!0){let h;const c=i=>{o=q.$el.parentNode,o?(h=new ResizeObserver(n),h.observe(o),s()):i!==!0&&Le(()=>{c(!0)})};return ce(()=>{c()}),le(()=>{l!==null&&clearTimeout(l),h!==void 0&&(h.disconnect!==void 0?h.disconnect():o&&h.unobserve(o))}),Ze}else{let i=function(){l!==null&&(clearTimeout(l),l=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",n,Ue.passive),c=void 0)},P=function(){i(),o&&o.contentDocument&&(c=o.contentDocument.defaultView,c.addEventListener("resize",n,Ue.passive),s())};const h=la();let c;return ce(()=>{Le(()=>{o=q.$el,o&&P()})}),le(i),q.trigger=n,()=>{if(h.value===!0)return x("object",{style:dt.style,tabindex:-1,type:"text/html",data:dt.url,"aria-hidden":"true",onLoad:P})}}}});let yt=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const r=document.createElement("div");Object.assign(r.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(r),e.scrollLeft=-1e3,yt=e.scrollLeft>=0,e.remove()}function ra(e,r,l){const o=l===!0?["left","right"]:["top","bottom"];return`absolute-${r===!0?o[0]:o[1]}${e?` text-${e}`:""}`}const ia=["left","center","right","justify"];var ua=H({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>ia.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:r,emit:l}){const{proxy:o}=X(),{$q:t}=o,{registerTick:n}=Fe(),{registerTick:s}=Fe(),{registerTick:q}=Fe(),{registerTimeout:h,removeTimeout:c}=Ye(),{registerTimeout:i,removeTimeout:P}=Ye(),_=B(null),b=B(null),w=B(e.modelValue),R=B(!1),z=B(!0),S=B(!1),C=B(!1),g=[],y=B(0),d=B(!1);let T=null,M=null,D;const A=f(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:ra(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),W=f(()=>{const u=y.value,v=w.value;for(let a=0;a<u;a++)if(g[a].name.value===v)return!0;return!1}),Y=f(()=>`q-tabs__content--align-${R.value===!0?"left":C.value===!0?"justify":e.align}`),Ce=f(()=>`q-tabs row no-wrap items-center q-tabs--${R.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),G=f(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Y.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),J=f(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),re=f(()=>e.vertical!==!0&&t.lang.rtl===!0),Z=f(()=>yt===!1&&re.value===!0);k(re,ne),k(()=>e.modelValue,u=>{ie({name:u,setCurrent:!0,skipEmit:!0})}),k(()=>e.outsideArrows,ee);function ie({name:u,setCurrent:v,skipEmit:a}){w.value!==u&&(a!==!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",u),(v===!0||e["onUpdate:modelValue"]===void 0)&&($e(w.value,u),w.value=u))}function ee(){n(()=>{te({width:_.value.offsetWidth,height:_.value.offsetHeight})})}function te(u){if(J.value===void 0||b.value===null)return;const v=u[J.value.container],a=Math.min(b.value[J.value.scroll],Array.prototype.reduce.call(b.value.children,(p,L)=>p+(L[J.value.content]||0),0)),m=v>0&&a>v;R.value=m,m===!0&&s(ne),C.value=v<parseInt(e.breakpoint,10)}function $e(u,v){const a=u!=null&&u!==""?g.find(p=>p.name.value===u):null,m=v!=null&&v!==""?g.find(p=>p.name.value===v):null;if(a&&m){const p=a.tabIndicatorRef.value,L=m.tabIndicatorRef.value;T!==null&&(clearTimeout(T),T=null),p.style.transition="none",p.style.transform="none",L.style.transition="none",L.style.transform="none";const $=p.getBoundingClientRect(),V=L.getBoundingClientRect();L.style.transform=e.vertical===!0?`translate3d(0,${$.top-V.top}px,0) scale3d(1,${V.height?$.height/V.height:1},1)`:`translate3d(${$.left-V.left}px,0,0) scale3d(${V.width?$.width/V.width:1},1,1)`,q(()=>{T=setTimeout(()=>{T=null,L.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",L.style.transform="none"},70)})}m&&R.value===!0&&ae(m.rootRef.value)}function ae(u){const{left:v,width:a,top:m,height:p}=b.value.getBoundingClientRect(),L=u.getBoundingClientRect();let $=e.vertical===!0?L.top-m:L.left-v;if($<0){b.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor($),ne();return}$+=e.vertical===!0?L.height-p:L.width-a,$>0&&(b.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil($),ne())}function ne(){const u=b.value;if(u===null)return;const v=u.getBoundingClientRect(),a=e.vertical===!0?u.scrollTop:Math.abs(u.scrollLeft);re.value===!0?(z.value=Math.ceil(a+v.width)<u.scrollWidth-1,S.value=a>0):(z.value=a>0,S.value=e.vertical===!0?Math.ceil(a+v.height)<u.scrollHeight:Math.ceil(a+v.width)<u.scrollWidth)}function de(u){M!==null&&clearInterval(M),M=setInterval(()=>{Pe(u)===!0&&K()},5)}function qe(){de(Z.value===!0?Number.MAX_SAFE_INTEGER:0)}function Te(){de(Z.value===!0?0:Number.MAX_SAFE_INTEGER)}function K(){M!==null&&(clearInterval(M),M=null)}function Be(u,v){const a=Array.prototype.filter.call(b.value.children,V=>V===v||V.matches&&V.matches(".q-tab.q-focusable")===!0),m=a.length;if(m===0)return;if(u===36)return ae(a[0]),a[0].focus(),!0;if(u===35)return ae(a[m-1]),a[m-1].focus(),!0;const p=u===(e.vertical===!0?38:37),L=u===(e.vertical===!0?40:39),$=p===!0?-1:L===!0?1:void 0;if($!==void 0){const V=re.value===!0?-1:1,U=a.indexOf(v)+$*V;return U>=0&&U<m&&(ae(a[U]),a[U].focus({preventScroll:!0})),!0}}const Re=f(()=>Z.value===!0?{get:u=>Math.abs(u.scrollLeft),set:(u,v)=>{u.scrollLeft=-v}}:e.vertical===!0?{get:u=>u.scrollTop,set:(u,v)=>{u.scrollTop=v}}:{get:u=>u.scrollLeft,set:(u,v)=>{u.scrollLeft=v}});function Pe(u){const v=b.value,{get:a,set:m}=Re.value;let p=!1,L=a(v);const $=u<L?-1:1;return L+=$*5,L<0?(p=!0,L=0):($===-1&&L<=u||$===1&&L>=u)&&(p=!0,L=u),m(v,L),ne(),p}function xe(u,v){for(const a in u)if(u[a]!==v[a])return!1;return!0}function ze(){let u=null,v={matchedLen:0,queryDiff:9999,hrefLen:0};const a=g.filter($=>$.routeData!==void 0&&$.routeData.hasRouterLink.value===!0),{hash:m,query:p}=o.$route,L=Object.keys(p).length;for(const $ of a){const V=$.routeData.exact.value===!0;if($.routeData[V===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:U,query:Oe,matched:wt,href:Ct}=$.routeData.resolvedLink.value,De=Object.keys(Oe).length;if(V===!0){if(U!==m||De!==L||xe(p,Oe)===!1)continue;u=$.name.value;break}if(U!==""&&U!==m||De!==0&&xe(Oe,p)===!1)continue;const oe={matchedLen:wt.length,queryDiff:L-De,hrefLen:Ct.length-U.length};if(oe.matchedLen>v.matchedLen){u=$.name.value,v=oe;continue}else if(oe.matchedLen!==v.matchedLen)continue;if(oe.queryDiff<v.queryDiff)u=$.name.value,v=oe;else if(oe.queryDiff!==v.queryDiff)continue;oe.hrefLen>v.hrefLen&&(u=$.name.value,v=oe)}u===null&&g.some($=>$.routeData===void 0&&$.name.value===w.value)===!0||ie({name:u,setCurrent:!0})}function fe(u){if(c(),d.value!==!0&&_.value!==null&&u.target&&typeof u.target.closest=="function"){const v=u.target.closest(".q-tab");v&&_.value.contains(v)===!0&&(d.value=!0,R.value===!0&&ae(v))}}function F(){h(()=>{d.value=!1},30)}function Q(){ve.avoidRouteWatcher===!1?i(ze):P()}function ue(){if(D===void 0){const u=k(()=>o.$route.fullPath,Q);D=()=>{u(),D=void 0}}}function Me(u){g.push(u),y.value++,ee(),u.routeData===void 0||o.$route===void 0?i(()=>{if(R.value===!0){const v=w.value,a=v!=null&&v!==""?g.find(m=>m.name.value===v):null;a&&ae(a.rootRef.value)}}):(ue(),u.routeData.hasRouterLink.value===!0&&Q())}function Ee(u){g.splice(g.indexOf(u),1),y.value--,ee(),D!==void 0&&u.routeData!==void 0&&(g.every(v=>v.routeData===void 0)===!0&&D(),Q())}const ve={currentModel:w,tabProps:A,hasFocus:d,hasActiveTab:W,registerTab:Me,unregisterTab:Ee,verifyRouteModel:Q,updateModel:ie,onKbdNavigate:Be,avoidRouteWatcher:!1};et(bt,ve);function se(){T!==null&&clearTimeout(T),K(),D!==void 0&&D()}let N;return le(se),Pt(()=>{N=D!==void 0,se()}),zt(()=>{N===!0&&ue(),ee()}),()=>x("div",{ref:_,class:Ce.value,role:"tablist",onFocusin:fe,onFocusout:F},[x(be,{onResize:te}),x("div",{ref:b,class:G.value,onScroll:ne},ge(r.default)),x(me,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(z.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||t.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:qe,onTouchstartPassive:qe,onMouseupPassive:K,onMouseleavePassive:K,onTouchendPassive:K}),x(me,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(S.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||t.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Te,onTouchstartPassive:Te,onMouseupPassive:K,onMouseleavePassive:K,onTouchendPassive:K})])}}),sa=H({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:r,emit:l}){const{proxy:{$q:o}}=X(),t=ye(we,I);if(t===I)return console.error("QHeader needs to be child of QLayout"),I;const n=B(parseInt(e.heightHint,10)),s=B(!0),q=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||o.platform.is.ios&&t.isContainer.value===!0),h=f(()=>{if(e.modelValue!==!0)return 0;if(q.value===!0)return s.value===!0?n.value:0;const C=n.value-t.scroll.value.position;return C>0?C:0}),c=f(()=>e.modelValue!==!0||q.value===!0&&s.value!==!0),i=f(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),P=f(()=>"q-header q-layout__section--marginal "+(q.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),_=f(()=>{const C=t.rows.value.top,g={};return C[0]==="l"&&t.left.space===!0&&(g[o.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),C[2]==="r"&&t.right.space===!0&&(g[o.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),g});function b(C,g){t.update("header",C,g)}function w(C,g){C.value!==g&&(C.value=g)}function R({height:C}){w(n,C),b("size",C)}function z(C){i.value===!0&&w(s,!0),l("focusin",C)}k(()=>e.modelValue,C=>{b("space",C),w(s,!0),t.animate()}),k(h,C=>{b("offset",C)}),k(()=>e.reveal,C=>{C===!1&&w(s,e.modelValue)}),k(s,C=>{t.animate(),l("reveal",C)}),k(t.scroll,C=>{e.reveal===!0&&w(s,C.direction==="up"||C.position<=e.revealOffset||C.position-C.inflectionPoint<100)});const S={};return t.instances.header=S,e.modelValue===!0&&b("size",n.value),b("space",e.modelValue),b("offset",h.value),le(()=>{t.instances.header===S&&(t.instances.header=void 0,b("size",0),b("offset",0),b("space",!1))}),()=>{const C=kt(r.default,[]);return e.elevated===!0&&C.push(x("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),C.push(x(be,{debounce:0,onResize:R})),x("header",{class:P.value,style:_.value,onFocusin:z},C)}}});function Ne(e,r,l){const o=Xe(e);let t,n=o.left-r.event.x,s=o.top-r.event.y,q=Math.abs(n),h=Math.abs(s);const c=r.direction;c.horizontal===!0&&c.vertical!==!0?t=n<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?t=s<0?"up":"down":c.up===!0&&s<0?(t="up",q>h&&(c.left===!0&&n<0?t="left":c.right===!0&&n>0&&(t="right"))):c.down===!0&&s>0?(t="down",q>h&&(c.left===!0&&n<0?t="left":c.right===!0&&n>0&&(t="right"))):c.left===!0&&n<0?(t="left",q<h&&(c.up===!0&&s<0?t="up":c.down===!0&&s>0&&(t="down"))):c.right===!0&&n>0&&(t="right",q<h&&(c.up===!0&&s<0?t="up":c.down===!0&&s>0&&(t="down")));let i=!1;if(t===void 0&&l===!1){if(r.event.isFirst===!0||r.event.lastDir===void 0)return{};t=r.event.lastDir,i=!0,t==="left"||t==="right"?(o.left-=n,q=0,n=0):(o.top-=s,h=0,s=0)}return{synthetic:i,payload:{evt:e,touch:r.event.mouse!==!0,mouse:r.event.mouse===!0,position:o,direction:t,isFirst:r.event.isFirst,isFinal:l===!0,duration:Date.now()-r.event.time,distance:{x:q,y:h},offset:{x:n,y:s},delta:{x:o.left-r.event.lastX,y:o.top-r.event.lastY}}}}let ca=0;var je=Lt({name:"touch-pan",beforeMount(e,{value:r,modifiers:l}){if(l.mouse!==!0&&he.has.touch!==!0)return;function o(n,s){l.mouse===!0&&s===!0?Ke(n):(l.stop===!0&&Ve(n),l.prevent===!0&&ot(n))}const t={uid:"qvtp_"+ca++,handler:r,modifiers:l,direction:lt(l),noop:Ze,mouseStart(n){rt(n,t)&&Mt(n)&&(Se(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(rt(n,t)){const s=n.target;Se(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,s){if(he.is.firefox===!0&&Ae(e,!0),t.lastEvt=n,s===!0||l.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const c=n.type.indexOf("mouse")>-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&ot(c),n.cancelBubble===!0&&Ve(c),Object.assign(c,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:c}}Ve(n)}const{left:q,top:h}=Xe(n);t.event={x:q,y:h,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:q,lastY:h}},move(n){if(t.event===void 0)return;const s=Xe(n),q=s.left-t.event.x,h=s.top-t.event.y;if(q===0&&h===0)return;t.lastEvt=n;const c=t.event.mouse===!0,i=()=>{o(n,c);let b;l.preserveCursor!==!0&&l.preservecursor!==!0&&(b=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Qt(),t.styleCleanup=w=>{if(t.styleCleanup=void 0,b!==void 0&&(document.documentElement.style.cursor=b),document.body.classList.remove("non-selectable"),c===!0){const R=()=>{document.body.classList.remove("no-pointer-events--children")};w!==void 0?setTimeout(()=>{R(),w()},50):R()}else w!==void 0&&w()}};if(t.event.detected===!0){t.event.isFirst!==!0&&o(n,t.event.mouse);const{payload:b,synthetic:w}=Ne(n,t,!1);b!==void 0&&(t.handler(b)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&i(),t.event.lastX=b.position.left,t.event.lastY=b.position.top,t.event.lastDir=w===!0?void 0:b.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||c===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){i(),t.event.detected=!0,t.move(n);return}const P=Math.abs(q),_=Math.abs(h);P!==_&&(t.direction.horizontal===!0&&P>_||t.direction.vertical===!0&&P<_||t.direction.up===!0&&P<_&&h<0||t.direction.down===!0&&P<_&&h>0||t.direction.left===!0&&P>_&&q<0||t.direction.right===!0&&P>_&&q>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,s){if(t.event!==void 0){if(Ie(t,"temp"),he.is.firefox===!0&&Ae(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Ne(n===void 0?t.lastEvt:n,t).payload);const{payload:q}=Ne(n===void 0?t.lastEvt:n,t,!0),h=()=>{t.handler(q)};t.styleCleanup!==void 0?t.styleCleanup(h):h()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,l.mouse===!0){const n=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";Se(t,"main",[[e,"mousedown","mouseStart",`passive${n}`]])}he.has.touch===!0&&Se(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,r){const l=e.__qtouchpan;l!==void 0&&(r.oldValue!==r.value&&(typeof value!="function"&&l.end(),l.handler=r.value),l.direction=lt(r.modifiers))},beforeUnmount(e){const r=e.__qtouchpan;r!==void 0&&(r.event!==void 0&&r.end(),Ie(r,"main"),Ie(r,"temp"),he.is.firefox===!0&&Ae(e,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete e.__qtouchpan)}});function ke(e,r,l){return l<=r?r:Math.min(l,Math.max(r,e))}const ft=150;var vt=H({name:"QDrawer",inheritAttrs:!1,props:{...Ht,...Wt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Nt,"onLayout","miniState"],setup(e,{slots:r,emit:l,attrs:o}){const t=X(),{proxy:{$q:n}}=t,s=jt(e,n),{preventBodyScroll:q}=Xt(),{registerTimeout:h,removeTimeout:c}=Ye(),i=ye(we,I);if(i===I)return console.error("QDrawer needs to be child of QLayout"),I;let P,_=null,b;const w=B(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),R=f(()=>e.mini===!0&&w.value!==!0),z=f(()=>R.value===!0?e.miniWidth:e.width),S=B(e.showIfAbove===!0&&w.value===!1?!0:e.modelValue===!0),C=f(()=>e.persistent!==!0&&(w.value===!0||$e.value===!0));function g(a,m){if(M(),a!==!1&&i.animate(),F(0),w.value===!0){const p=i.instances[Z.value];p!==void 0&&p.belowBreakpoint===!0&&p.hide(!1),Q(1),i.isContainer.value!==!0&&q(!0)}else Q(0),a!==!1&&ue(!1);h(()=>{a!==!1&&ue(!0),m!==!0&&l("show",a)},ft)}function y(a,m){D(),a!==!1&&i.animate(),Q(0),F(Y.value*z.value),se(),m!==!0?h(()=>{l("hide",a)},ft):c()}const{show:d,hide:T}=Kt({showing:S,hideOnRouteChange:C,handleShow:g,handleHide:y}),{addToHistory:M,removeFromHistory:D}=Ut(S,T,C),A={belowBreakpoint:w,hide:T},W=f(()=>e.side==="right"),Y=f(()=>(n.lang.rtl===!0?-1:1)*(W.value===!0?1:-1)),Ce=B(0),G=B(!1),J=B(!1),re=B(z.value*Y.value),Z=f(()=>W.value===!0?"left":"right"),ie=f(()=>S.value===!0&&w.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:z.value:0),ee=f(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(W.value?"R":"L")>-1||n.platform.is.ios===!0&&i.isContainer.value===!0),te=f(()=>e.overlay===!1&&S.value===!0&&w.value===!1),$e=f(()=>e.overlay===!0&&S.value===!0&&w.value===!1),ae=f(()=>"fullscreen q-drawer__backdrop"+(S.value===!1&&G.value===!1?" hidden":"")),ne=f(()=>({backgroundColor:`rgba(0,0,0,${Ce.value*.4})`})),de=f(()=>W.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),qe=f(()=>W.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),Te=f(()=>{const a={};return i.header.space===!0&&de.value===!1&&(ee.value===!0?a.top=`${i.header.offset}px`:i.header.space===!0&&(a.top=`${i.header.size}px`)),i.footer.space===!0&&qe.value===!1&&(ee.value===!0?a.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(a.bottom=`${i.footer.size}px`)),a}),K=f(()=>{const a={width:`${z.value}px`,transform:`translateX(${re.value}px)`};return w.value===!0?a:Object.assign(a,Te.value)}),Be=f(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),Re=f(()=>`q-drawer q-drawer--${e.side}`+(J.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(G.value===!0?" no-transition":S.value===!0?"":" q-layout--prevent-focus")+(w.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${R.value===!0?"mini":"standard"}`+(ee.value===!0||te.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(de.value===!0?" q-drawer--top-padding":""))),Pe=f(()=>{const a=n.lang.rtl===!0?e.side:Z.value;return[[je,Ee,void 0,{[a]:!0,mouse:!0}]]}),xe=f(()=>{const a=n.lang.rtl===!0?Z.value:e.side;return[[je,ve,void 0,{[a]:!0,mouse:!0}]]}),ze=f(()=>{const a=n.lang.rtl===!0?Z.value:e.side;return[[je,ve,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function fe(){u(w,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}k(w,a=>{a===!0?(P=S.value,S.value===!0&&T(!1)):e.overlay===!1&&e.behavior!=="mobile"&&P!==!1&&(S.value===!0?(F(0),Q(0),se()):d(!1))}),k(()=>e.side,(a,m)=>{i.instances[m]===A&&(i.instances[m]=void 0,i[m].space=!1,i[m].offset=0),i.instances[a]=A,i[a].size=z.value,i[a].space=te.value,i[a].offset=ie.value}),k(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&fe()}),k(()=>e.behavior+e.breakpoint,fe),k(i.isContainer,a=>{S.value===!0&&q(a!==!0),a===!0&&fe()}),k(i.scrollbarWidth,()=>{F(S.value===!0?0:void 0)}),k(ie,a=>{N("offset",a)}),k(te,a=>{l("onLayout",a),N("space",a)}),k(W,()=>{F()}),k(z,a=>{F(),v(e.miniToOverlay,a)}),k(()=>e.miniToOverlay,a=>{v(a,z.value)}),k(()=>n.lang.rtl,()=>{F()}),k(()=>e.mini,()=>{e.modelValue===!0&&(Me(),i.animate())}),k(R,a=>{l("miniState",a)});function F(a){a===void 0?Le(()=>{a=S.value===!0?0:z.value,F(Y.value*a)}):(i.isContainer.value===!0&&W.value===!0&&(w.value===!0||Math.abs(a)===z.value)&&(a+=Y.value*i.scrollbarWidth.value),re.value=a)}function Q(a){Ce.value=a}function ue(a){const m=a===!0?"remove":i.isContainer.value!==!0?"add":"";m!==""&&document.body.classList[m]("q-body--drawer-toggle")}function Me(){_!==null&&clearTimeout(_),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),J.value=!0,_=setTimeout(()=>{_=null,J.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ee(a){if(S.value!==!1)return;const m=z.value,p=ke(a.distance.x,0,m);if(a.isFinal===!0){p>=Math.min(75,m)===!0?d():(i.animate(),Q(0),F(Y.value*m)),G.value=!1;return}F((n.lang.rtl===!0?W.value!==!0:W.value)?Math.max(m-p,0):Math.min(0,p-m)),Q(ke(p/m,0,1)),a.isFirst===!0&&(G.value=!0)}function ve(a){if(S.value!==!0)return;const m=z.value,p=a.direction===e.side,L=(n.lang.rtl===!0?p!==!0:p)?ke(a.distance.x,0,m):0;if(a.isFinal===!0){Math.abs(L)<Math.min(75,m)===!0?(i.animate(),Q(1),F(0)):T(),G.value=!1;return}F(Y.value*L),Q(ke(1-L/m,0,1)),a.isFirst===!0&&(G.value=!0)}function se(){q(!1),ue(!0)}function N(a,m){i.update(e.side,a,m)}function u(a,m){a.value!==m&&(a.value=m)}function v(a,m){N("size",a===!0?e.miniWidth:m)}return i.instances[e.side]=A,v(e.miniToOverlay,z.value),N("space",te.value),N("offset",ie.value),e.showIfAbove===!0&&e.modelValue!==!0&&S.value===!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!0),ce(()=>{l("onLayout",te.value),l("miniState",R.value),P=e.showIfAbove===!0;const a=()=>{(S.value===!0?g:y)(!1,!0)};if(i.totalWidth.value!==0){Le(a);return}b=k(i.totalWidth,()=>{b(),b=void 0,S.value===!1&&e.showIfAbove===!0&&w.value===!1?d(!1):a()})}),le(()=>{b!==void 0&&b(),_!==null&&(clearTimeout(_),_=null),S.value===!0&&se(),i.instances[e.side]===A&&(i.instances[e.side]=void 0,N("size",0),N("offset",0),N("space",!1))}),()=>{const a=[];w.value===!0&&(e.noSwipeOpen===!1&&a.push(mt(x("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Pe.value)),a.push(at("div",{ref:"backdrop",class:ae.value,style:ne.value,"aria-hidden":"true",onClick:T},void 0,"backdrop",e.noSwipeBackdrop!==!0&&S.value===!0,()=>ze.value)));const m=R.value===!0&&r.mini!==void 0,p=[x("div",{...o,key:""+m,class:[Be.value,o.class]},m===!0?r.mini():ge(r.default))];return e.elevated===!0&&S.value===!0&&p.push(x("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(at("aside",{ref:"content",class:Re.value,style:K.value},p,"contentclose",e.noSwipeClose!==!0&&w.value===!0,()=>xe.value)),x("div",{class:"q-drawer-container"},a)}}}),da=H({name:"QPageContainer",setup(e,{slots:r}){const{proxy:{$q:l}}=X(),o=ye(we,I);if(o===I)return console.error("QPageContainer needs to be child of QLayout"),I;et(Et,!0);const t=f(()=>{const n={};return o.header.space===!0&&(n.paddingTop=`${o.header.size}px`),o.right.space===!0&&(n[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(n.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(n[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),n});return()=>x("div",{class:"q-page-container",style:t.value},ge(r.default))}}),fa=H({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:r,emit:l}){const{proxy:{$q:o}}=X(),t=ye(we,I);if(t===I)return console.error("QFooter needs to be child of QLayout"),I;const n=B(parseInt(e.heightHint,10)),s=B(!0),q=B(Je.value===!0||t.isContainer.value===!0?0:window.innerHeight),h=f(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||o.platform.is.ios&&t.isContainer.value===!0),c=f(()=>t.isContainer.value===!0?t.containerHeight.value:q.value),i=f(()=>{if(e.modelValue!==!0)return 0;if(h.value===!0)return s.value===!0?n.value:0;const d=t.scroll.value.position+c.value+n.value-t.height.value;return d>0?d:0}),P=f(()=>e.modelValue!==!0||h.value===!0&&s.value!==!0),_=f(()=>e.modelValue===!0&&P.value===!0&&e.reveal===!0),b=f(()=>"q-footer q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(P.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(h.value!==!0?" hidden":""):"")),w=f(()=>{const d=t.rows.value.bottom,T={};return d[0]==="l"&&t.left.space===!0&&(T[o.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),d[2]==="r"&&t.right.space===!0&&(T[o.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),T});function R(d,T){t.update("footer",d,T)}function z(d,T){d.value!==T&&(d.value=T)}function S({height:d}){z(n,d),R("size",d)}function C(){if(e.reveal!==!0)return;const{direction:d,position:T,inflectionPoint:M}=t.scroll.value;z(s,d==="up"||T-M<100||t.height.value-c.value-T-n.value<300)}function g(d){_.value===!0&&z(s,!0),l("focusin",d)}k(()=>e.modelValue,d=>{R("space",d),z(s,!0),t.animate()}),k(i,d=>{R("offset",d)}),k(()=>e.reveal,d=>{d===!1&&z(s,e.modelValue)}),k(s,d=>{t.animate(),l("reveal",d)}),k([n,t.scroll,t.height],C),k(()=>o.screen.height,d=>{t.isContainer.value!==!0&&z(q,d)});const y={};return t.instances.footer=y,e.modelValue===!0&&R("size",n.value),R("space",e.modelValue),R("offset",i.value),le(()=>{t.instances.footer===y&&(t.instances.footer=void 0,R("size",0),R("offset",0),R("space",!1))}),()=>{const d=Ge(r.default,[x(be,{debounce:0,onResize:S})]);return e.elevated===!0&&d.push(x("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),x("footer",{class:b.value,style:w.value,onFocusin:g},d)}}});const{passive:ht}=Ue,va=["both","horizontal","vertical"];var ha=H({name:"QScrollObserver",props:{axis:{type:String,validator:e=>va.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:r}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,t,n;k(()=>e.scrollTarget,()=>{h(),q()});function s(){o!==null&&o();const P=Math.max(0,Gt(t)),_=Jt(t),b={top:P-l.position.top,left:_-l.position.left};if(e.axis==="vertical"&&b.top===0||e.axis==="horizontal"&&b.left===0)return;const w=Math.abs(b.top)>=Math.abs(b.left)?b.top<0?"up":"down":b.left<0?"left":"right";l.position={top:P,left:_},l.directionChanged=l.direction!==w,l.delta=b,l.directionChanged===!0&&(l.direction=w,l.inflectionPoint=l.position),r("scroll",{...l})}function q(){t=Yt(n,e.scrollTarget),t.addEventListener("scroll",c,ht),c(!0)}function h(){t!==void 0&&(t.removeEventListener("scroll",c,ht),t=void 0)}function c(P){if(P===!0||e.debounce===0||e.debounce==="0")s();else if(o===null){const[_,b]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];o=()=>{b(_),o=null}}}const{proxy:i}=X();return k(()=>i.$q.lang.rtl,s),ce(()=>{n=i.$el.parentNode,q()}),le(()=>{o!==null&&o(),h()}),Object.assign(i,{trigger:c,getPosition:()=>l}),Ze}}),ma=H({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:r,emit:l}){const{proxy:{$q:o}}=X(),t=B(null),n=B(o.screen.height),s=B(e.container===!0?0:o.screen.width),q=B({position:0,direction:"down",inflectionPoint:0}),h=B(0),c=B(Je.value===!0?0:Qe()),i=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),P=f(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),_=f(()=>c.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),b=f(()=>c.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function w(y){if(e.container===!0||document.qScrollPrevented!==!0){const d={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};q.value=d,e.onScroll!==void 0&&l("scroll",d)}}function R(y){const{height:d,width:T}=y;let M=!1;n.value!==d&&(M=!0,n.value=d,e.onScrollHeight!==void 0&&l("scrollHeight",d),S()),s.value!==T&&(M=!0,s.value=T),M===!0&&e.onResize!==void 0&&l("resize",y)}function z({height:y}){h.value!==y&&(h.value=y,S())}function S(){if(e.container===!0){const y=n.value>h.value?Qe():0;c.value!==y&&(c.value=y)}}let C=null;const g={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:n,containerHeight:h,scrollbarWidth:c,totalWidth:f(()=>s.value+c.value),rows:f(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:pe({size:0,offset:0,space:!1}),right:pe({size:300,offset:0,space:!1}),footer:pe({size:0,offset:0,space:!1}),left:pe({size:300,offset:0,space:!1}),scroll:q,animate(){C!==null?clearTimeout(C):document.body.classList.add("q-body--layout-animate"),C=setTimeout(()=>{C=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,d,T){g[y][d]=T}};if(et(we,g),Qe()>0){let T=function(){y=null,d.classList.remove("hide-scrollbar")},M=function(){if(y===null){if(d.scrollHeight>o.screen.height)return;d.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(T,300)},D=function(A){y!==null&&A==="remove"&&(clearTimeout(y),T()),window[`${A}EventListener`]("resize",M)},y=null;const d=document.body;k(()=>e.container!==!0?"add":"remove",D),e.container!==!0&&D("add"),Ot(()=>{D("remove")})}return()=>{const y=Ge(r.default,[x(ha,{onScroll:w}),x(be,{onResize:R})]),d=x("div",{class:i.value,style:P.value,ref:e.container===!0?void 0:t,tabindex:-1},y);return e.container===!0?x("div",{class:"q-layout-container overflow-hidden",ref:t},[x(be,{onResize:z}),x("div",{class:"absolute-full",style:_.value},[x("div",{class:"scroll",style:b.value},[d])])]):d}}});const ba={setup(){const e=B(!1),r=B(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value},rightDrawerOpen:r,toggleRightDrawer(){r.value=!r.value}}}},ga=tt("img",{src:"https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"},null,-1),ya=tt("img",{src:"https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"},null,-1),wa=tt("div",null,"Title",-1);function Ca(e,r,l,o,t,n){const s=Ft("router-view");return At(),Vt(ma,{view:"hHh LpR fFf"},{default:j(()=>[E(sa,{elevated:"",class:"bg-primary text-white","height-hint":"98"},{default:j(()=>[E(st,null,{default:j(()=>[E(nt,{dense:"",flat:"",round:"",icon:"menu",onClick:o.toggleLeftDrawer},null,8,["onClick"]),E(ut,null,{default:j(()=>[E(it,null,{default:j(()=>[ga]),_:1}),It(" Title ")]),_:1}),E(nt,{dense:"",flat:"",round:"",icon:"menu",onClick:o.toggleRightDrawer},null,8,["onClick"])]),_:1}),E(ua,{align:"left"},{default:j(()=>[E(We,{to:"/page1",label:"Page One"}),E(We,{to:"/page2",label:"Page Two"}),E(We,{to:"/page3",label:"Page Three"})]),_:1})]),_:1}),E(vt,{"show-if-above":"",modelValue:o.leftDrawerOpen,"onUpdate:modelValue":r[0]||(r[0]=q=>o.leftDrawerOpen=q),side:"left",bordered:""},null,8,["modelValue"]),E(vt,{"show-if-above":"",modelValue:o.rightDrawerOpen,"onUpdate:modelValue":r[1]||(r[1]=q=>o.rightDrawerOpen=q),side:"right",bordered:""},null,8,["modelValue"]),E(da,null,{default:j(()=>[E(s)]),_:1}),E(fa,{elevated:"",class:"bg-grey-8 text-white"},{default:j(()=>[E(st,null,{default:j(()=>[E(ut,null,{default:j(()=>[E(it,null,{default:j(()=>[ya]),_:1}),wa]),_:1})]),_:1})]),_:1})]),_:1})}var Sa=Dt(ba,[["render",Ca]]);export{Sa as default};