import{u as Z,r as T,h as f,m as ve,l as xe,y as Ae,Y as de,K as Be,Z as $e,i as h,J as se,$ as Me,a0 as Ee,a1 as N,R as De,q as fe,a2 as je,g as We,v as V,N as Fe,O as Oe,j as Qe,S as Ke}from"./index.5d510624.js";import{d as Ve}from"./use-dark.0597b58a.js";import{g as Ne}from"./QLayout.abf5449a.js";import{i as p,b as ce}from"./scroll.cf55cad8.js";let ze=0;const Ze=["click","keydown"],pe={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${ze++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function et(e,_,R,c){const r=Ae(de,Z);if(r===Z)return console.error("QTab/QRouteTab component needs to be child of QTabs"),Z;const{proxy:z}=fe(),M=T(null),D=T(null),j=T(null),H=f(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),x=f(()=>r.currentModel.value===e.name),U=f(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(x.value===!0?" q-tab--active"+(r.tabProps.value.activeClass?" "+r.tabProps.value.activeClass:"")+(r.tabProps.value.activeColor?` text-${r.tabProps.value.activeColor}`:"")+(r.tabProps.value.activeBgColor?` bg-${r.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&r.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||r.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(c!==void 0?c.linkClass.value:"")),P=f(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(r.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),g=f(()=>e.disable===!0||r.hasFocus.value===!0||x.value===!1&&r.hasActiveTab.value===!0?-1:e.tabindex||0);function y(l,b){if(b!==!0&&M.value!==null&&M.value.focus(),e.disable===!0){c!==void 0&&c.hasRouterLink.value===!0&&se(l);return}if(c===void 0){r.updateModel({name:e.name}),R("click",l);return}if(c.hasRouterLink.value===!0){const m=(v={})=>{let w;const C=v.to===void 0||je(v.to,e.to)===!0?r.avoidRouteWatcher=Ve():null;return c.navigateToRouterLink(l,{...v,returnRouterError:!0}).catch(I=>{w=I}).then(I=>{if(C===r.avoidRouteWatcher&&(r.avoidRouteWatcher=!1,w===void 0&&(I===void 0||I.message.startsWith("Avoided redundant navigation")===!0)&&r.updateModel({name:e.name})),v.returnRouterError===!0)return w!==void 0?Promise.reject(w):I})};R("click",l,m),l.defaultPrevented!==!0&&m();return}R("click",l)}function S(l){Me(l,[13,32])?y(l,!0):Ee(l)!==!0&&l.keyCode>=35&&l.keyCode<=40&&l.altKey!==!0&&l.metaKey!==!0&&r.onKbdNavigate(l.keyCode,z.$el)===!0&&se(l),R("keydown",l)}function E(){const l=r.tabProps.value.narrowIndicator,b=[],m=h("div",{ref:j,class:["q-tab__indicator",r.tabProps.value.indicatorClass]});e.icon!==void 0&&b.push(h(N,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&b.push(h("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&b.push(e.alertIcon!==void 0?h(N,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):h("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),l===!0&&b.push(m);const v=[h("div",{class:"q-focus-helper",tabindex:-1,ref:M}),h("div",{class:P.value},De(_.default,b))];return l===!1&&v.push(m),v}const A={name:f(()=>e.name),rootRef:D,tabIndicatorRef:j,routeData:c};ve(()=>{r.unregisterTab(A)}),xe(()=>{r.registerTab(A)});function W(l,b){const m={ref:D,class:U.value,tabindex:g.value,role:"tab","aria-selected":x.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:y,onKeydown:S,...b};return Be(h(l,m,E()),[[$e,H.value]])}return{renderTab:W,$tabs:r}}let be=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const _=document.createElement("div");Object.assign(_.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(_),e.scrollLeft=-1e3,be=e.scrollLeft>=0,e.remove()}function He(e,_,R){const c=R===!0?["left","right"]:["top","bottom"];return`absolute-${_===!0?c[0]:c[1]}${e?` text-${e}`:""}`}const Ue=["left","center","right","justify"];var tt=We({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Ue.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:_,emit:R}){const{proxy:c}=fe(),{$q:r}=c,{registerTick:z}=p(),{registerTick:M}=p(),{registerTick:D}=p(),{registerTimeout:j,removeTimeout:H}=ce(),{registerTimeout:x,removeTimeout:U}=ce(),P=T(null),g=T(null),y=T(e.modelValue),S=T(!1),E=T(!0),A=T(!1),W=T(!1),l=[],b=T(0),m=T(!1);let v=null,w=null,C;const I=f(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:He(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),he=f(()=>{const t=b.value,a=y.value;for(let n=0;n<t;n++)if(l[n].name.value===a)return!0;return!1}),ge=f(()=>`q-tabs__content--align-${S.value===!0?"left":W.value===!0?"justify":e.align}`),me=f(()=>`q-tabs row no-wrap items-center q-tabs--${S.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Te=f(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+ge.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),F=f(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),O=f(()=>e.vertical!==!0&&r.lang.rtl===!0),G=f(()=>be===!1&&O.value===!0);V(O,$),V(()=>e.modelValue,t=>{X({name:t,setCurrent:!0,skipEmit:!0})}),V(()=>e.outsideArrows,Q);function X({name:t,setCurrent:a,skipEmit:n}){y.value!==t&&(n!==!0&&e["onUpdate:modelValue"]!==void 0&&R("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(we(y.value,t),y.value=t))}function Q(){z(()=>{ee({width:P.value.offsetWidth,height:P.value.offsetHeight})})}function ee(t){if(F.value===void 0||g.value===null)return;const a=t[F.value.container],n=Math.min(g.value[F.value.scroll],Array.prototype.reduce.call(g.value.children,(s,i)=>s+(i[F.value.content]||0),0)),u=a>0&&n>a;S.value=u,u===!0&&M($),W.value=a<parseInt(e.breakpoint,10)}function we(t,a){const n=t!=null&&t!==""?l.find(s=>s.name.value===t):null,u=a!=null&&a!==""?l.find(s=>s.name.value===a):null;if(n&&u){const s=n.tabIndicatorRef.value,i=u.tabIndicatorRef.value;v!==null&&(clearTimeout(v),v=null),s.style.transition="none",s.style.transform="none",i.style.transition="none",i.style.transform="none";const o=s.getBoundingClientRect(),d=i.getBoundingClientRect();i.style.transform=e.vertical===!0?`translate3d(0,${o.top-d.top}px,0) scale3d(1,${d.height?o.height/d.height:1},1)`:`translate3d(${o.left-d.left}px,0,0) scale3d(${d.width?o.width/d.width:1},1,1)`,D(()=>{v=setTimeout(()=>{v=null,i.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",i.style.transform="none"},70)})}u&&S.value===!0&&B(u.rootRef.value)}function B(t){const{left:a,width:n,top:u,height:s}=g.value.getBoundingClientRect(),i=t.getBoundingClientRect();let o=e.vertical===!0?i.top-u:i.left-a;if(o<0){g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(o),$();return}o+=e.vertical===!0?i.height-s:i.width-n,o>0&&(g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(o),$())}function $(){const t=g.value;if(t===null)return;const a=t.getBoundingClientRect(),n=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);O.value===!0?(E.value=Math.ceil(n+a.width)<t.scrollWidth-1,A.value=n>0):(E.value=n>0,A.value=e.vertical===!0?Math.ceil(n+a.height)<t.scrollHeight:Math.ceil(n+a.width)<t.scrollWidth)}function te(t){w!==null&&clearInterval(w),w=setInterval(()=>{qe(t)===!0&&L()},5)}function ae(){te(G.value===!0?Number.MAX_SAFE_INTEGER:0)}function ne(){te(G.value===!0?0:Number.MAX_SAFE_INTEGER)}function L(){w!==null&&(clearInterval(w),w=null)}function ye(t,a){const n=Array.prototype.filter.call(g.value.children,d=>d===a||d.matches&&d.matches(".q-tab.q-focusable")===!0),u=n.length;if(u===0)return;if(t===36)return B(n[0]),n[0].focus(),!0;if(t===35)return B(n[u-1]),n[u-1].focus(),!0;const s=t===(e.vertical===!0?38:37),i=t===(e.vertical===!0?40:39),o=s===!0?-1:i===!0?1:void 0;if(o!==void 0){const d=O.value===!0?-1:1,q=n.indexOf(a)+o*d;return q>=0&&q<u&&(B(n[q]),n[q].focus({preventScroll:!0})),!0}}const Ce=f(()=>G.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function qe(t){const a=g.value,{get:n,set:u}=Ce.value;let s=!1,i=n(a);const o=t<i?-1:1;return i+=o*5,i<0?(s=!0,i=0):(o===-1&&i<=t||o===1&&i>=t)&&(s=!0,i=t),u(a,i),$(),s}function le(t,a){for(const n in t)if(t[n]!==a[n])return!1;return!0}function _e(){let t=null,a={matchedLen:0,queryDiff:9999,hrefLen:0};const n=l.filter(o=>o.routeData!==void 0&&o.routeData.hasRouterLink.value===!0),{hash:u,query:s}=c.$route,i=Object.keys(s).length;for(const o of n){const d=o.routeData.exact.value===!0;if(o.routeData[d===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:q,query:J,matched:Pe,href:Ie}=o.routeData.resolvedLink.value,Y=Object.keys(J).length;if(d===!0){if(q!==u||Y!==i||le(s,J)===!1)continue;t=o.name.value;break}if(q!==""&&q!==u||Y!==0&&le(J,s)===!1)continue;const k={matchedLen:Pe.length,queryDiff:i-Y,hrefLen:Ie.length-q.length};if(k.matchedLen>a.matchedLen){t=o.name.value,a=k;continue}else if(k.matchedLen!==a.matchedLen)continue;if(k.queryDiff<a.queryDiff)t=o.name.value,a=k;else if(k.queryDiff!==a.queryDiff)continue;k.hrefLen>a.hrefLen&&(t=o.name.value,a=k)}t===null&&l.some(o=>o.routeData===void 0&&o.name.value===y.value)===!0||X({name:t,setCurrent:!0})}function Re(t){if(H(),m.value!==!0&&P.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&P.value.contains(a)===!0&&(m.value=!0,S.value===!0&&B(a))}}function Se(){j(()=>{m.value=!1},30)}function K(){re.avoidRouteWatcher===!1?x(_e):U()}function oe(){if(C===void 0){const t=V(()=>c.$route.fullPath,K);C=()=>{t(),C=void 0}}}function Le(t){l.push(t),b.value++,Q(),t.routeData===void 0||c.$route===void 0?x(()=>{if(S.value===!0){const a=y.value,n=a!=null&&a!==""?l.find(u=>u.name.value===a):null;n&&B(n.rootRef.value)}}):(oe(),t.routeData.hasRouterLink.value===!0&&K())}function ke(t){l.splice(l.indexOf(t),1),b.value--,Q(),C!==void 0&&t.routeData!==void 0&&(l.every(a=>a.routeData===void 0)===!0&&C(),K())}const re={currentModel:y,tabProps:I,hasFocus:m,hasActiveTab:he,registerTab:Le,unregisterTab:ke,verifyRouteModel:K,updateModel:X,onKbdNavigate:ye,avoidRouteWatcher:!1};Ke(de,re);function ie(){v!==null&&clearTimeout(v),L(),C!==void 0&&C()}let ue;return ve(ie),Fe(()=>{ue=C!==void 0,ie()}),Oe(()=>{ue===!0&&oe(),Q()}),()=>h("div",{ref:P,class:me.value,role:"tablist",onFocusin:Re,onFocusout:Se},[h(Ne,{onResize:ee}),h("div",{ref:g,class:Te.value,onScroll:$},Qe(_.default)),h(N,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(E.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||r.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ae,onTouchstartPassive:ae,onMouseupPassive:L,onMouseleavePassive:L,onTouchendPassive:L}),h(N,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(A.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||r.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:ne,onTouchstartPassive:ne,onMouseupPassive:L,onMouseleavePassive:L,onTouchendPassive:L})])}});export{tt as Q,Ze as a,et as b,be as r,pe as u};
