import{e as Ce,r as S,a as w,o as Ue,x as it,f as ut,ae as C,aG as x,d as A,aM as Ee,Y as Le,S as ct,ao as dt,a9 as be,h as Ke,g as ge,aJ as ft,c as de,w as ne,a0 as ht,ad as mt,t as ce,u as vt,ar as We,C as bt,_ as gt,j as yt,k as n,F as y,q as a,n as t,H as Z,aN as _t,Q as K,s as o,m as k,G as i,aa as R,ai as we,ab as oe,aO as Me,a8 as se}from"./index.d2731026.js";import{d as pt,Q as kt,c as Ct,C as ze}from"./ClosePopup.79dc04ef.js";import{Q as W}from"./QCard.921ab38b.js";import{i as wt,r as qt,g as V,h as I,Q as De}from"./rtl.4b23a731.js";import{Q as Tt}from"./QResizeObserver.cba25009.js";import{a as qe}from"./use-tick.20c2331b.js";import{b as je}from"./use-timeout.52eeb047.js";import{Q as N}from"./QTooltip.3e9a1840.js";import{Q as re}from"./QList.f545172c.js";import{u as xt,a as St,b as Vt,c as It,d as Pt,Q as Te,e as At,f as Qt,g as Bt}from"./copy-to-clipboard.078df736.js";import{u as Ge,a as Oe}from"./use-dark.fe814f56.js";import{T as Rt}from"./TouchPan.c97d7654.js";import{Q as xe}from"./use-cache.196f092f.js";import{Q as $t}from"./QPage.4f75b716.js";import{u as Lt}from"./store.3e2b5f7a.js";import"./use-prevent-scroll.67794084.js";import"./scroll.e1c85c9c.js";import"./selection.3a93c196.js";import"./firebase.dc843dde.js";import"./axios.84ae42e4.js";let Mt=0;const zt=["click","keydown"],Dt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Mt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function jt(e,r,P,_){const f=ut(Ee,Ce);if(f===Ce)return console.error("QTab/QRouteTab component needs to be child of QTabs"),Ce;const{proxy:U}=ge(),Q=S(null),h=S(null),D=S(null),d=w(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),g=w(()=>f.currentModel.value===e.name),ee=w(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(g.value===!0?" q-tab--active"+(f.tabProps.value.activeClass?" "+f.tabProps.value.activeClass:"")+(f.tabProps.value.activeColor?` text-${f.tabProps.value.activeColor}`:"")+(f.tabProps.value.activeBgColor?` bg-${f.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&f.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||f.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(_!==void 0?_.linkClass.value:"")),G=w(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(f.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),$=w(()=>e.disable===!0||f.hasFocus.value===!0||g.value===!1&&f.hasActiveTab.value===!0?-1:e.tabindex||0);function z(c,B){if(B!==!0&&Q.value!==null&&Q.value.focus(),e.disable===!0){_!==void 0&&_.hasRouterLink.value===!0&&Le(c);return}if(_===void 0){f.updateModel({name:e.name}),P("click",c);return}if(_.hasRouterLink.value===!0){const v=(p={})=>{let L;const O=p.to===void 0||ft(p.to,e.to)===!0?f.avoidRouteWatcher=wt():null;return _.navigateToRouterLink(c,{...p,returnRouterError:!0}).catch(J=>{L=J}).then(J=>{if(O===f.avoidRouteWatcher&&(f.avoidRouteWatcher=!1,L===void 0&&(J===void 0||J.message.startsWith("Avoided redundant navigation")===!0)&&f.updateModel({name:e.name})),p.returnRouterError===!0)return L!==void 0?Promise.reject(L):J})};P("click",c,v),c.defaultPrevented!==!0&&v();return}P("click",c)}function E(c){ct(c,[13,32])?z(c,!0):dt(c)!==!0&&c.keyCode>=35&&c.keyCode<=40&&c.altKey!==!0&&c.metaKey!==!0&&f.onKbdNavigate(c.keyCode,U.$el)===!0&&Le(c),P("keydown",c)}function H(){const c=f.tabProps.value.narrowIndicator,B=[],v=A("div",{ref:D,class:["q-tab__indicator",f.tabProps.value.indicatorClass]});e.icon!==void 0&&B.push(A(be,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&B.push(A("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&B.push(e.alertIcon!==void 0?A(be,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):A("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),c===!0&&B.push(v);const p=[A("div",{class:"q-focus-helper",tabindex:-1,ref:Q}),A("div",{class:G.value},Ke(r.default,B))];return c===!1&&p.push(v),p}const j={name:w(()=>e.name),rootRef:h,tabIndicatorRef:D,routeData:_};Ue(()=>{f.unregisterTab(j)}),it(()=>{f.registerTab(j)});function te(c,B){const v={ref:h,class:ee.value,tabindex:$.value,role:"tab","aria-selected":g.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:z,onKeydown:E,...B};return C(A(c,v,H()),[[x,d.value]])}return{renderTab:te,$tabs:f}}var ie=de({name:"QTab",props:Dt,emits:zt,setup(e,{slots:r,emit:P}){const{renderTab:_}=jt(e,r,P);return()=>_("div")}});function Ut(e,r,P){const _=P===!0?["left","right"]:["top","bottom"];return`absolute-${r===!0?_[0]:_[1]}${e?` text-${e}`:""}`}const Et=["left","center","right","justify"];var Kt=de({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Et.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:r,emit:P}){const{proxy:_}=ge(),{$q:f}=_,{registerTick:U}=qe(),{registerTick:Q}=qe(),{registerTick:h}=qe(),{registerTimeout:D,removeTimeout:d}=je(),{registerTimeout:g,removeTimeout:ee}=je(),G=S(null),$=S(null),z=S(e.modelValue),E=S(!1),H=S(!0),j=S(!1),te=S(!1),c=[],B=S(0),v=S(!1);let p=null,L=null,O;const J=w(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Ut(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Fe=w(()=>{const l=B.value,s=z.value;for(let u=0;u<l;u++)if(c[u].name.value===s)return!0;return!1}),Ne=w(()=>`q-tabs__content--align-${E.value===!0?"left":te.value===!0?"justify":e.align}`),He=w(()=>`q-tabs row no-wrap items-center q-tabs--${E.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Xe=w(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Ne.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),fe=w(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),he=w(()=>e.vertical!==!0&&f.lang.rtl===!0),ye=w(()=>qt===!1&&he.value===!0);ne(he,le),ne(()=>e.modelValue,l=>{_e({name:l,setCurrent:!0,skipEmit:!0})}),ne(()=>e.outsideArrows,me);function _e({name:l,setCurrent:s,skipEmit:u}){z.value!==l&&(u!==!0&&e["onUpdate:modelValue"]!==void 0&&P("update:modelValue",l),(s===!0||e["onUpdate:modelValue"]===void 0)&&(Ye(z.value,l),z.value=l))}function me(){U(()=>{Se({width:G.value.offsetWidth,height:G.value.offsetHeight})})}function Se(l){if(fe.value===void 0||$.value===null)return;const s=l[fe.value.container],u=Math.min($.value[fe.value.scroll],Array.prototype.reduce.call($.value.children,(T,b)=>T+(b[fe.value.content]||0),0)),q=s>0&&u>s;E.value=q,q===!0&&Q(le),te.value=s<parseInt(e.breakpoint,10)}function Ye(l,s){const u=l!=null&&l!==""?c.find(T=>T.name.value===l):null,q=s!=null&&s!==""?c.find(T=>T.name.value===s):null;if(u&&q){const T=u.tabIndicatorRef.value,b=q.tabIndicatorRef.value;p!==null&&(clearTimeout(p),p=null),T.style.transition="none",T.style.transform="none",b.style.transition="none",b.style.transform="none";const m=T.getBoundingClientRect(),M=b.getBoundingClientRect();b.style.transform=e.vertical===!0?`translate3d(0,${m.top-M.top}px,0) scale3d(1,${M.height?m.height/M.height:1},1)`:`translate3d(${m.left-M.left}px,0,0) scale3d(${M.width?m.width/M.width:1},1,1)`,h(()=>{p=setTimeout(()=>{p=null,b.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",b.style.transform="none"},70)})}q&&E.value===!0&&ae(q.rootRef.value)}function ae(l){const{left:s,width:u,top:q,height:T}=$.value.getBoundingClientRect(),b=l.getBoundingClientRect();let m=e.vertical===!0?b.top-q:b.left-s;if(m<0){$.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(m),le();return}m+=e.vertical===!0?b.height-T:b.width-u,m>0&&($.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(m),le())}function le(){const l=$.value;if(l===null)return;const s=l.getBoundingClientRect(),u=e.vertical===!0?l.scrollTop:Math.abs(l.scrollLeft);he.value===!0?(H.value=Math.ceil(u+s.width)<l.scrollWidth-1,j.value=u>0):(H.value=u>0,j.value=e.vertical===!0?Math.ceil(u+s.height)<l.scrollHeight:Math.ceil(u+s.width)<l.scrollWidth)}function Ve(l){L!==null&&clearInterval(L),L=setInterval(()=>{et(l)===!0&&X()},5)}function Ie(){Ve(ye.value===!0?Number.MAX_SAFE_INTEGER:0)}function Pe(){Ve(ye.value===!0?0:Number.MAX_SAFE_INTEGER)}function X(){L!==null&&(clearInterval(L),L=null)}function Je(l,s){const u=Array.prototype.filter.call($.value.children,M=>M===s||M.matches&&M.matches(".q-tab.q-focusable")===!0),q=u.length;if(q===0)return;if(l===36)return ae(u[0]),u[0].focus(),!0;if(l===35)return ae(u[q-1]),u[q-1].focus(),!0;const T=l===(e.vertical===!0?38:37),b=l===(e.vertical===!0?40:39),m=T===!0?-1:b===!0?1:void 0;if(m!==void 0){const M=he.value===!0?-1:1,F=u.indexOf(s)+m*M;return F>=0&&F<q&&(ae(u[F]),u[F].focus({preventScroll:!0})),!0}}const Ze=w(()=>ye.value===!0?{get:l=>Math.abs(l.scrollLeft),set:(l,s)=>{l.scrollLeft=-s}}:e.vertical===!0?{get:l=>l.scrollTop,set:(l,s)=>{l.scrollTop=s}}:{get:l=>l.scrollLeft,set:(l,s)=>{l.scrollLeft=s}});function et(l){const s=$.value,{get:u,set:q}=Ze.value;let T=!1,b=u(s);const m=l<b?-1:1;return b+=m*5,b<0?(T=!0,b=0):(m===-1&&b<=l||m===1&&b>=l)&&(T=!0,b=l),q(s,b),le(),T}function Ae(l,s){for(const u in l)if(l[u]!==s[u])return!1;return!0}function tt(){let l=null,s={matchedLen:0,queryDiff:9999,hrefLen:0};const u=c.filter(m=>m.routeData!==void 0&&m.routeData.hasRouterLink.value===!0),{hash:q,query:T}=_.$route,b=Object.keys(T).length;for(const m of u){const M=m.routeData.exact.value===!0;if(m.routeData[M===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:F,query:pe,matched:nt,href:rt}=m.routeData.resolvedLink.value,ke=Object.keys(pe).length;if(M===!0){if(F!==q||ke!==b||Ae(T,pe)===!1)continue;l=m.name.value;break}if(F!==""&&F!==q||ke!==0&&Ae(pe,T)===!1)continue;const Y={matchedLen:nt.length,queryDiff:b-ke,hrefLen:rt.length-F.length};if(Y.matchedLen>s.matchedLen){l=m.name.value,s=Y;continue}else if(Y.matchedLen!==s.matchedLen)continue;if(Y.queryDiff<s.queryDiff)l=m.name.value,s=Y;else if(Y.queryDiff!==s.queryDiff)continue;Y.hrefLen>s.hrefLen&&(l=m.name.value,s=Y)}l===null&&c.some(m=>m.routeData===void 0&&m.name.value===z.value)===!0||_e({name:l,setCurrent:!0})}function at(l){if(d(),v.value!==!0&&G.value!==null&&l.target&&typeof l.target.closest=="function"){const s=l.target.closest(".q-tab");s&&G.value.contains(s)===!0&&(v.value=!0,E.value===!0&&ae(s))}}function lt(){D(()=>{v.value=!1},30)}function ve(){Be.avoidRouteWatcher===!1?g(tt):ee()}function Qe(){if(O===void 0){const l=ne(()=>_.$route.fullPath,ve);O=()=>{l(),O=void 0}}}function ot(l){c.push(l),B.value++,me(),l.routeData===void 0||_.$route===void 0?g(()=>{if(E.value===!0){const s=z.value,u=s!=null&&s!==""?c.find(q=>q.name.value===s):null;u&&ae(u.rootRef.value)}}):(Qe(),l.routeData.hasRouterLink.value===!0&&ve())}function st(l){c.splice(c.indexOf(l),1),B.value--,me(),O!==void 0&&l.routeData!==void 0&&(c.every(s=>s.routeData===void 0)===!0&&O(),ve())}const Be={currentModel:z,tabProps:J,hasFocus:v,hasActiveTab:Fe,registerTab:ot,unregisterTab:st,verifyRouteModel:ve,updateModel:_e,onKbdNavigate:Je,avoidRouteWatcher:!1};vt(Ee,Be);function Re(){p!==null&&clearTimeout(p),X(),O!==void 0&&O()}let $e;return Ue(Re),ht(()=>{$e=O!==void 0,Re()}),mt(()=>{$e===!0&&Qe(),me()}),()=>A("div",{ref:G,class:He.value,role:"tablist",onFocusin:at,onFocusout:lt},[A(Tt,{onResize:Se}),A("div",{ref:$,class:Xe.value,onScroll:le},ce(r.default)),A(be,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(H.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||f.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:Ie,onTouchstartPassive:Ie,onMouseupPassive:X,onMouseleavePassive:X,onTouchendPassive:X}),A(be,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(j.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||f.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Pe,onTouchstartPassive:Pe,onMouseupPassive:X,onMouseleavePassive:X,onTouchendPassive:X})])}}),ue=de({name:"QTabPanel",props:xt,setup(e,{slots:r}){return()=>A("div",{class:"q-tab-panel",role:"tabpanel"},ce(r.default))}}),Wt=de({name:"QTabPanels",props:{...St,...Ge},emits:Vt,setup(e,{slots:r}){const P=ge(),_=Oe(e,P.proxy.$q),{updatePanelsList:f,getPanelContent:U,panelDirectives:Q}=It(),h=w(()=>"q-tab-panels q-panel-parent"+(_.value===!0?" q-tab-panels--dark q-dark":""));return()=>(f(r),We("div",{class:h.value},U(),"pan",e.swipeable,()=>Q.value))}}),Gt=de({name:"QSplitter",props:{...Ge,modelValue:{type:Number,required:!0},reverse:Boolean,unit:{type:String,default:"%",validator:e=>["%","px"].includes(e)},limits:{type:Array,validator:e=>e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"?!1:e[0]>=0&&e[0]<=e[1]},emitImmediately:Boolean,horizontal:Boolean,disable:Boolean,beforeClass:[Array,String,Object],afterClass:[Array,String,Object],separatorClass:[Array,String,Object],separatorStyle:[Array,String,Object]},emits:["update:modelValue"],setup(e,{slots:r,emit:P}){const{proxy:{$q:_}}=ge(),f=Oe(e,_),U=S(null),Q={before:S(null),after:S(null)},h=w(()=>`q-splitter no-wrap ${e.horizontal===!0?"q-splitter--horizontal column":"q-splitter--vertical row"} q-splitter--${e.disable===!0?"disabled":"workable"}`+(f.value===!0?" q-splitter--dark":"")),D=w(()=>e.horizontal===!0?"height":"width"),d=w(()=>e.reverse!==!0?"before":"after"),g=w(()=>e.limits!==void 0?e.limits:e.unit==="%"?[10,90]:[50,1/0]);function ee(v){return(e.unit==="%"?v:Math.round(v))+e.unit}const G=w(()=>({[d.value]:{[D.value]:ee(e.modelValue)}}));let $,z,E,H,j;function te(v){if(v.isFirst===!0){const L=U.value.getBoundingClientRect()[D.value];$=e.horizontal===!0?"up":"left",z=e.unit==="%"?100:L,E=Math.min(z,g.value[1],Math.max(g.value[0],e.modelValue)),H=(e.reverse!==!0?1:-1)*(e.horizontal===!0?1:_.lang.rtl===!0?-1:1)*(e.unit==="%"?L===0?0:100/L:1),U.value.classList.add("q-splitter--active");return}if(v.isFinal===!0){j!==e.modelValue&&P("update:modelValue",j),U.value.classList.remove("q-splitter--active");return}const p=E+H*(v.direction===$?-1:1)*v.distance[e.horizontal===!0?"y":"x"];j=Math.min(z,g.value[1],Math.max(g.value[0],p)),Q[d.value].value.style[D.value]=ee(j),e.emitImmediately===!0&&e.modelValue!==j&&P("update:modelValue",j)}const c=w(()=>[[Rt,te,void 0,{[e.horizontal===!0?"vertical":"horizontal"]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function B(v,p){v<p[0]?P("update:modelValue",p[0]):v>p[1]&&P("update:modelValue",p[1])}return ne(()=>e.modelValue,v=>{B(v,g.value)}),ne(()=>e.limits,()=>{bt(()=>{B(e.modelValue,g.value)})}),()=>{const v=[A("div",{ref:Q.before,class:["q-splitter__panel q-splitter__before"+(e.reverse===!0?" col":""),e.beforeClass],style:G.value.before},ce(r.before)),A("div",{class:["q-splitter__separator",e.separatorClass],style:e.separatorStyle,"aria-disabled":e.disable===!0?"true":void 0},[We("div",{class:"q-splitter__separator-area absolute-full"},ce(r.separator),"sep",e.disable!==!0,()=>c.value)]),A("div",{ref:Q.after,class:["q-splitter__panel q-splitter__after"+(e.reverse===!0?"":" col"),e.afterClass],style:G.value.after},ce(r.after))];return A("div",{class:h.value,ref:U},Ke(r.default,v))}}});const Ot=yt({name:"CoursesDashboard",setup(){return{store:Lt(),slide:S(null),confirm:S(!1),showGradebook:S(!1),splitterModel:S(20),tab:S("introduction")}},mounted(){console.log("CoursesDashboard mounted"),this.store.aid=null},methods:{toggleGradebook(){console.log("toggleGradebook"),this.showGradebook?this.showGradebook=!1:this.showGradebook=!0},deleteSelectedObject(){this.store.aid!==null&&this.store.aid>-1?this.store.deleteAssignment(this.store.ck,this.store.aid):this.store.ck!==null&&this.store.deleteCourse(this.store.ck)},editCB(){if(this.store.aid!==null)this.store.pgIdx=-1;else{const e=Object.keys(this.store.currentCourse.assignments);e.length>0&&(this.store.aid=e[0],this.store.pgIdx=0)}this.store.router.push("/courses/assignments")},slideChanged(e){console.log("CourseDashboard.slideChanged ck = ",e),this.store.ck=e},viewerCB(){if(console.log("CourseDash viewerCB setting pgIdx 0 before /viewer"),this.store.currentAssignment.pages.length===0){this.store.notify("The requested assignment has no pages!");return}this.store.pgIdx=0,this.store.router.replace("/viewer")},copyCourseKeyCB(){Pt(this.store.ck).then(()=>{console.log("ck copied to clipboard",this.store.ck);const e=`The course-key ${this.store.ck} was copied to clipboard`;this.store.notify(e)}).catch(e=>{console.log(e)})}}}),Ft={key:0,class:"q-ml-sm"},Nt={key:1,class:"q-ml-sm"},Ht={key:0,class:"full-width"},Xt=o("div",{class:"justify-center"},[o("div",{class:"text-panel q-mx-md q-mb-xs q-mt-md text-h6",style:{"text-align":"center"}}," Welcome to Reading Edge! ")],-1),Yt={class:"text-panel q-ma-md bg-dark",style:{height:"100vh"}},Jt={class:""},Zt=o("p",null,"May 1, 2023 Las Vegas, NV",-1),ea=o("p",null,[i(" Hello and thank you for visiting. My name is Charlie and I'm going to write to you in the first person since I'm a one-man-band here. The paragraph reconstruction exercise that is central to Reading Edge was not originally developed to "),o("i",{style:{color:"yellow"}},"improve"),i(" reading so much as to just "),o("i",{style:{color:"yellow"}},"prove"),i(" that something had been read at all. If a student, or anyone, successfully reconstructs a paragraph with 15-20% of the words missing then you can consider that "),o("i",{style:{color:"yellow"}},"proof"),i(" that they read carefully and thought about context, punctuation and grammar. ")],-1),ta=o("p",null," By offering an incentive to complete these exercises I was able to get my children to thoroughly read anything I would assign to them. There was another massive benefit, which was that this system would become the object of scorn instead of me. And, earning their internet access, as it were, they had a sense of shared ownership, financial responsibility and time management, as well. ",-1),aa=o("p",null,' Since the exercise works for any subject, it becomes a pretty good bang-for-the-buck, ie you can use it to explore anything through reading and pictures. The long-standing obstacle, however, was "Where to get the content?" Indeed, I used to cut-and-paste Wikipedia articles, among others, but only recently did I see a way to largely automate the process of assignment construction using Wikipedia content so as to make it usable by others. ',-1),la=o("p",null,[i(" Wikipedia is full of beautiful, high-resolution and intriguing pictures which can help generate curiosity and interest such that students are suddenly "),o("i",{style:{color:"yellow"}},"eager"),i(" to read in order to find out more. Reading Edge provides the raw points for each word correctly reconstructed. It is intended that you, the parent or teacher, define the exchange rate. Last but certainly not least, thank you for supporting "),o("b",null,"Independent Education Software!")],-1),oa={class:"text-white q-mt-lg",href:"https://www.youtube.com/embed/-ATGbQFpa4I",target:"_blank"},sa=o("ol",null,[o("li",null,"Click the Demo Course in the sidebar"),o("li",null,"Choose an Assignment in the sidebar"),o("li",null,'Click the "Play" button at the bottom')],-1),na={key:1,class:"justify-center absolute-top"},ra={class:"text-panel justify-center q-mx-md q-mb-xs q-mt-md text-h6"},ia={key:0,class:"cursor-pointer"},ua={key:0,class:"q-px-md row content-center"},ca={key:0,class:"embed-panel col-12 col-md-11 assignment",style:{"z-index":"5","max-height":"30vh",height:"30vh"}},da={class:"q-px-lg row content-start"},fa={key:0},ha={width:"100%",class:"meta-table"},ma=o("tr",null,[o("th",{colSpan:"100"},[o("div",{class:"text-center val"},"Assignments")])],-1),va=o("th",{class:"val"},"Student",-1),ba={class:"hidden"},ga={class:"key"},ya={class:"hidden"},_a={key:0},pa={key:1},ka={class:"hidden"},Ca={key:1},wa={width:"100%",class:"meta-table"},qa=o("tr",null,[o("th",{colSpan:"100"},[o("div",{class:"text-center val"},"Assignments")])],-1),Ta=o("th",{class:"val"},"Student",-1),xa={class:"hidden"},Sa={class:"key"},Va={key:0},Ia={key:1,class:"embed-panel col-12 col-md-5 assignment",style:{"z-index":"5","max-height":"30vh",height:"30vh"}},Pa={class:"q-px-lg row content-start"},Aa={class:"meta-table"},Qa=o("th",{class:"key"},"Title",-1),Ba={class:"val"},Ra={class:"cursor-pointer"},$a=o("td",{class:"key"},"Cover Url",-1),La={class:"cursor-pointer val"},Ma=o("td",{class:"key"},"Assignments",-1),za={class:"val"},Da=o("td",{class:"key"},"Enrollment",-1),ja={class:"val"},Ua=o("td",{class:"key"},"Created",-1),Ea={class:"val"},Ka=o("td",{class:"key"},"Updated",-1),Wa={class:"val"},Ga={class:"control-panel q-pa-sm row justify-center no-wrap flex flex-center",style:{overflow:"auto"}},Oa={key:0},Fa=o("br",null,null,-1),Na=o("br",null,null,-1);function Ha(e,r,P,_,f,U){return n(),y(Z,null,[a(pt,{modelValue:e.confirm,"onUpdate:modelValue":r[1]||(r[1]=Q=>e.confirm=Q),persistent:"",class:"z-max confirm-delete-obj"},{default:t(()=>[a(W,null,{default:t(()=>[a(kt,{class:"row items-center"},{default:t(()=>[a(_t,{icon:"delete",color:"primary","text-color":"white"}),this.store.aid!==null&&this.store.aid>-1?(n(),y("span",Ft,"Confirm delete assignment?")):(n(),y("span",Nt,"Confirm delete entire course?"))]),_:1}),a(Ct,{align:"right",class:"text-white"},{default:t(()=>[C(a(K,{flat:"",label:"Cancel"},null,512),[[ze]]),C(a(K,{flat:"",label:"Delete",onClick:r[0]||(r[0]=Q=>this.deleteSelectedObject())},null,512),[[ze]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),a($t,{class:"flex col"},{default:t(()=>{var Q;return[this.store.ck?(n(),y("div",na,[o("div",ra,[i(" Course: "),this.store.currentCourse?(n(),y("span",ia,[i(R((Q=this.store.currentCourse)==null?void 0:Q.title)+" ",1),a(Te,{modelValue:this.store.currentCourse.title,"onUpdate:modelValue":r[5]||(r[5]=h=>this.store.currentCourse.title=h),"auto-save":"",style:{maxWidth:"320px"}},{default:t(h=>[a(xe,{modelValue:h.value,"onUpdate:modelValue":D=>h.value=D,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:we(h.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["modelValue"])])):oe("",!0)]),this.store.ck?(n(),y("div",ua,[a(At,{class:"q-ma-md full-width",animated:"",thumbnails:"",autoplay:this.store.autoplay,"navigation-position":"top",modelValue:this.store.ck,"onUpdate:modelValue":[r[14]||(r[14]=h=>this.store.ck=h),this.slideChanged],infinite:"","control-type":"arrows",ref:"carousel",height:"82vh"},{control:t(()=>[a(Qt,{position:"bottom",offset:[0,0]},{default:t(()=>[o("div",Ga,[a(K,{push:"",round:"",class:"dash-button","text-color":"white",icon:"arrow_left",style:Me({height:"33.5px",width:"33.5px"}),onClick:r[6]||(r[6]=h=>e.$refs.carousel.previous())},{default:t(()=>[a(N,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[a(W,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[i(" Go to previous course ")]),_:1})]),_:1})]),_:1},8,["style"]),a(K,{"no-caps":"",class:"on-right dash-button",icon:"table_chart",onClick:r[7]||(r[7]=h=>this.toggleGradebook())},{default:t(()=>[a(N,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[a(W,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[i(" View course gradebook ")]),_:1})]),_:1})]),_:1}),this.store.role==="teacher"?(n(),y("span",Oa,[this.store.ck!==null&&(this.store.aid===null||this.store.aid===-1)?(n(),k(K,{key:0,"no-caps":"",class:"dash-button on-right",onClick:r[8]||(r[8]=h=>this.copyCourseKeyCB()),icon:"key"},{default:t(()=>[a(N,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[a(W,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[i(" Copy the course-key to clipboard, then"),Fa,i(" share the course-key with whoever you"),Na,i(" want to enroll. ")]),_:1})]),_:1})]),_:1})):oe("",!0),a(K,{"no-caps":"",icon:"add",class:"on-right dash-button",onClick:r[9]||(r[9]=h=>this.store.newCourse())},{default:t(()=>[a(N,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[a(W,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[i(" Create a new course ")]),_:1})]),_:1})]),_:1}),this.store.ck!==null?(n(),k(K,{key:1,"no-caps":"",icon:"edit",class:"on-right dash-button",onClick:r[10]||(r[10]=h=>this.editCB())},{default:t(()=>[a(N,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[a(W,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[i(" Go to the assignments for selected course ")]),_:1})]),_:1})]),_:1})):oe("",!0),a(K,{"no-caps":"",icon:"save",class:"on-right dash-button",onClick:r[11]||(r[11]=h=>this.store.commitCourse(this.store.ck))},{default:t(()=>[a(N,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[a(W,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[i(" Save current course to cloud ")]),_:1})]),_:1})]),_:1}),a(K,{"no-caps":"",icon:"delete",class:"on-right dash-button",onClick:r[12]||(r[12]=h=>e.confirm=!0)},{default:t(()=>[a(N,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[a(W,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[i(" Delete the selected course ")]),_:1})]),_:1})]),_:1})])):oe("",!0),a(K,{push:"",round:"",class:"on-right dash-button","text-color":"white",icon:"arrow_right",style:Me({height:"33.5px",width:"33.5px"}),onClick:r[13]||(r[13]=h=>e.$refs.carousel.next())},{default:t(()=>[a(N,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[a(W,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[i(" Go to next course ")]),_:1})]),_:1})]),_:1},8,["style"])])]),_:1})]),default:t(()=>[(n(!0),y(Z,null,se(this.store.courses,(h,D)=>(n(),k(Bt,{class:"text-panel row content-center justify-center",key:D,name:D,"img-src":h.coverUrl},{default:t(()=>[this.showGradebook?(n(),y("table",ca,[a(De,null,{default:t(()=>[i("Course Gradebook")]),_:1}),o("tr",null,[o("td",da,[this.store.role==="teacher"?(n(),y("span",fa,[o("table",ha,[ma,o("tr",null,[va,(n(!0),y(Z,null,se(this.store.courses[this.store.ck].assignments,(d,g)=>(n(),y("th",{key:d,class:"key"},[i(R(d.title)+" ",1),o("span",ba,R(g),1)]))),128))]),(n(!0),y(Z,null,se(this.store.courses[this.store.ck].enrollment,d=>(n(),y("tr",{key:d.name},[o("td",ga,[i(R(d.name)+" ",1),o("span",ya,R(e.sidx),1)]),(n(!0),y(Z,null,se(this.store.courses[this.store.ck].assignments,g=>(n(),y("td",{style:{"text-align":"center"},class:"val",key:g},[g.scores&&g.scores[d.emailKey]?(n(),y("span",_a,R(g.scores[d.emailKey]),1)):(n(),y("span",pa,"-")),i(),o("span",ka,R(e.aidx),1)]))),128))]))),128))])])):(n(),y("span",Ca,[o("table",wa,[qa,o("tr",null,[Ta,(n(!0),y(Z,null,se(this.store.courses[this.store.ck].assignments,(d,g)=>(n(),y("th",{key:d,class:"key"},[i(R(d.title)+" ",1),o("span",xa,R(g),1)]))),128))]),o("tr",null,[o("td",Sa,R(this.store.userSnapshot.profile.name),1),(n(!0),y(Z,null,se(this.store.courses[this.store.ck].assignments,d=>(n(),y("td",{class:"val",key:d},[d.scores&&d.scores[this.store.emailKey]?(n(),y("span",Va,R(d.scores[this.store.emailKey]),1)):oe("",!0)]))),128))])])]))])])])):(n(),y("table",Ia,[a(De,null,{default:t(()=>[i("Course")]),_:1}),o("tr",null,[o("td",Pa,[o("table",Aa,[o("tr",null,[Qa,o("td",Ba,[o("div",Ra,[i(R(this.store.currentCourse.title)+" ",1),a(Te,{modelValue:this.store.courses[this.store.ck].title,"onUpdate:modelValue":d=>this.store.courses[this.store.ck].title=d,"auto-save":""},{default:t(d=>[a(xe,{modelValue:d.value,"onUpdate:modelValue":g=>d.value=g,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:we(d.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])])]),o("tr",null,[$a,o("td",null,[o("div",La,[i(" Change "),a(Te,{modelValue:this.store.courses[this.store.ck].coverUrl,"onUpdate:modelValue":d=>this.store.courses[this.store.ck].coverUrl=d,"auto-save":""},{default:t(d=>[a(xe,{modelValue:d.value,"onUpdate:modelValue":g=>d.value=g,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:we(d.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])])]),o("tr",null,[Ma,o("td",za,R(Object.keys(this.store.currentCourse.assignments).length),1)]),o("tr",null,[Da,o("td",ja,R(Object.keys(this.store.currentCourse.enrollment).length),1)]),o("tr",null,[Ua,o("td",Ea,R(this.store.currentCourse.created),1)]),o("tr",null,[Ka,o("td",Wa,R(this.store.currentCourse.updated),1)])])])])]))]),_:2},1032,["name","img-src"]))),128))]),_:1},8,["autoplay","modelValue","onUpdate:modelValue"])])):oe("",!0)])):(n(),y("div",Ht,[Xt,o("div",Yt,[o("div",null,[a(Gt,{modelValue:e.splitterModel,"onUpdate:modelValue":r[4]||(r[4]=h=>e.splitterModel=h)},{before:t(()=>[a(Kt,{modelValue:e.tab,"onUpdate:modelValue":r[2]||(r[2]=h=>e.tab=h),vertical:"",class:"q-mt-md"},{default:t(()=>[a(ie,{name:"introduction",label:"Introduction"}),a(ie,{name:"quickstart",label:"Quick Start"}),a(ie,{name:"main",label:"Concepts"}),a(ie,{name:"assignment",label:"Builder"}),a(ie,{name:"accounts",label:"Accounts"})]),_:1},8,["modelValue"])]),after:t(()=>[a(Wt,{modelValue:e.tab,"onUpdate:modelValue":r[3]||(r[3]=h=>e.tab=h),vertical:""},{default:t(()=>[a(ue,{name:"introduction"},{default:t(()=>[a(re,null,{default:t(()=>[C((n(),k(I,{clickable:""},{default:t(()=>[a(V,null,{default:t(()=>[o("div",Jt,[Zt,ea,ta,aa,la,o("a",oa,[a(K,{class:"bg-primary",icon:"ondemand_video",size:"lg"}),a(N,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[a(W,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[i(" A silent movie ")]),_:1})]),_:1})])])]),_:1})]),_:1})),[[x]])]),_:1})]),_:1}),a(ue,{name:"quickstart"},{default:t(()=>[a(re,null,{default:t(()=>[C((n(),k(I,{clickable:""},{default:t(()=>[a(V,null,{default:t(()=>[a(W,{bordered:"",flat:""},{default:t(()=>[sa]),_:1})]),_:1})]),_:1})),[[x]])]),_:1})]),_:1}),a(ue,{name:"main"},{default:t(()=>[a(re,null,{default:t(()=>[C((n(),k(I,{clickable:""},{default:t(()=>[a(V,null,{default:t(()=>[i(" Hierarchy is: Course, Assignment, Page, Image ")]),_:1})]),_:1})),[[x]]),C((n(),k(I,{clickable:""},{default:t(()=>[a(V,null,{default:t(()=>[i(" Page = one paragraph, many images, config and meta info ")]),_:1})]),_:1})),[[x]]),C((n(),k(I,{clickable:""},{default:t(()=>[a(V,null,{default:t(()=>[i(" Assignment = list of Pages and Scores ")]),_:1})]),_:1})),[[x]]),C((n(),k(I,{clickable:""},{default:t(()=>[a(V,null,{default:t(()=>[i(" Course = many Assignments and an enrollment list ")]),_:1})]),_:1})),[[x]]),C((n(),k(I,{clickable:""},{default:t(()=>[a(V,null,{default:t(()=>[i(" Every account has 2 roles -- Teacher and Student ")]),_:1})]),_:1})),[[x]]),C((n(),k(I,{clickable:""},{default:t(()=>[a(V,null,{default:t(()=>[i(" Toggle between Teacher and Student located at top-right ")]),_:1})]),_:1})),[[x]]),C((n(),k(I,{clickable:""},{default:t(()=>[a(V,null,{default:t(()=>[i(" Share course-key with anyone you want to enroll. Then they can enroll themselves. ")]),_:1})]),_:1})),[[x]]),C((n(),k(I,{clickable:""},{default:t(()=>[a(V,null,{default:t(()=>[i(" You can enroll yourself just by toggling and enrolling with one of your own course-keys! ")]),_:1})]),_:1})),[[x]]),C((n(),k(I,{clickable:""},{default:t(()=>[a(V,null,{default:t(()=>[i(" There is no goal, only points. It is intended that you provide further incentive based on points ")]),_:1})]),_:1})),[[x]]),C((n(),k(I,{clickable:""},{default:t(()=>[a(V,null,{default:t(()=>[i(" Currently cannot drag-n-drop to reorder things, also can't edit gradebook yet ")]),_:1})]),_:1})),[[x]])]),_:1})]),_:1}),a(ue,{name:"assignment"},{default:t(()=>[a(re,null,{default:t(()=>[C((n(),k(I,{clickable:""},{default:t(()=>[a(V,null,{default:t(()=>[i(" Design goal = 30 seconds to make, 30 minutes to take ")]),_:1})]),_:1})),[[x]]),C((n(),k(I,{clickable:""},{default:t(()=>[a(V,null,{default:t(()=>[i(" Typically create Course, create Assignment, then add pages. Each item selected on left sidebar creates a new page at current location ")]),_:1})]),_:1})),[[x]]),C((n(),k(I,{clickable:""},{default:t(()=>[a(V,null,{default:t(()=>[i(" When generating complete assignment from guidewords just delete any unwanted pages (see video) ")]),_:1})]),_:1})),[[x]]),C((n(),k(I,{clickable:""},{default:t(()=>[a(V,null,{default:t(()=>[i(' As you work on pages you will be directly manipulating the page stored in memory. Saving your changes permanently to the database is a separate, manual action. As an example: you could edit 5 different pages, change text and default images, then save all changes at once with the "Save Assignment" button. ')]),_:1})]),_:1})),[[x]])]),_:1})]),_:1}),a(ue,{name:"accounts"},{default:t(()=>[a(re,null,{default:t(()=>[C((n(),k(I,{clickable:""},{default:t(()=>[a(V,null,{default:t(()=>[i(" Subscriptions are enabled during current testing and your support is truly appreciated. Please understand that this is brand new and you are one of the first people to use, so thank you for being a tester. A support system is coming (forum or email). If you are not completely satisfied you can be refunded. Subscriber satisfaction is goal #1. ")]),_:1})]),_:1})),[[x]]),C((n(),k(I,{clickable:""},{default:t(()=>[a(V,null,{default:t(()=>[i(" Eventually your account might need to be reset or deleted as we are still testing. ")]),_:1})]),_:1})),[[x]]),C((n(),k(I,{clickable:""},{default:t(()=>[a(V,null,{default:t(()=>[i(" Thank you for your patience and feedback! ")]),_:1})]),_:1})),[[x]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])])]))]}),_:1})],64)}var bl=gt(Ot,[["render",Ha]]);export{bl as default};
