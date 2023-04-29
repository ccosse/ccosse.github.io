import{e as ye,r as x,a as p,o as Ue,y as it,f as ut,ae as T,aG as V,d as P,aM as Ee,Y as Le,S as ct,ao as dt,a9 as he,h as Ke,g as me,aJ as ft,c as ie,w as ne,a0 as ht,ad as mt,u as re,v as vt,ar as Ge,D as bt,_ as gt,j as _t,k as r,G as _,q as l,n as t,H as Z,aN as yt,Q as K,t as s,s as i,m as q,aa as B,ai as ke,ab as se,aO as Me,a8 as oe}from"./index.6b8ae46f.js";import{d as kt,Q as pt,c as Ct,C as ze}from"./ClosePopup.0c1747b8.js";import{Q as F}from"./QCard.8e42cf2e.js";import{Q as N}from"./QTooltip.2ca1a77e.js";import{i as wt,r as qt,g as I,h as Q,Q as De}from"./rtl.c66573d3.js";import{Q as Tt}from"./QResizeObserver.c62d4104.js";import{a as pe}from"./use-tick.ee972b3c.js";import{b as je}from"./use-timeout.c7625151.js";import{Q as Ce}from"./QList.1687f3d4.js";import{u as xt,a as St,b as Vt,c as Pt,d as At,Q as we,e as It,f as Qt,g as $t}from"./copy-to-clipboard.b2ac4c8e.js";import{u as Oe,a as Fe}from"./use-dark.5b3ecb4b.js";import{T as Bt}from"./TouchPan.57b24102.js";import{Q as qe}from"./use-cache.4bf2b9db.js";import{Q as Rt}from"./QPage.137ad205.js";import{u as Lt}from"./store.0bd11cb3.js";import"./use-prevent-scroll.a20bd84a.js";import"./scroll.50b3cfba.js";import"./selection.86ec02b7.js";import"./firebase.8769ab52.js";import"./axios.84ae42e4.js";let Mt=0;const zt=["click","keydown"],Dt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Mt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function jt(e,n,S,y){const f=ut(Ee,ye);if(f===ye)return console.error("QTab/QRouteTab component needs to be child of QTabs"),ye;const{proxy:U}=me(),A=x(null),h=x(null),D=x(null),d=p(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),g=p(()=>f.currentModel.value===e.name),ee=p(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(g.value===!0?" q-tab--active"+(f.tabProps.value.activeClass?" "+f.tabProps.value.activeClass:"")+(f.tabProps.value.activeColor?` text-${f.tabProps.value.activeColor}`:"")+(f.tabProps.value.activeBgColor?` bg-${f.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&f.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||f.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(y!==void 0?y.linkClass.value:"")),G=p(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(f.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),R=p(()=>e.disable===!0||f.hasFocus.value===!0||g.value===!1&&f.hasActiveTab.value===!0?-1:e.tabindex||0);function z(c,$){if($!==!0&&A.value!==null&&A.value.focus(),e.disable===!0){y!==void 0&&y.hasRouterLink.value===!0&&Le(c);return}if(y===void 0){f.updateModel({name:e.name}),S("click",c);return}if(y.hasRouterLink.value===!0){const v=(k={})=>{let L;const O=k.to===void 0||ft(k.to,e.to)===!0?f.avoidRouteWatcher=wt():null;return y.navigateToRouterLink(c,{...k,returnRouterError:!0}).catch(J=>{L=J}).then(J=>{if(O===f.avoidRouteWatcher&&(f.avoidRouteWatcher=!1,L===void 0&&(J===void 0||J.message.startsWith("Avoided redundant navigation")===!0)&&f.updateModel({name:e.name})),k.returnRouterError===!0)return L!==void 0?Promise.reject(L):J})};S("click",c,v),c.defaultPrevented!==!0&&v();return}S("click",c)}function E(c){ct(c,[13,32])?z(c,!0):dt(c)!==!0&&c.keyCode>=35&&c.keyCode<=40&&c.altKey!==!0&&c.metaKey!==!0&&f.onKbdNavigate(c.keyCode,U.$el)===!0&&Le(c),S("keydown",c)}function H(){const c=f.tabProps.value.narrowIndicator,$=[],v=P("div",{ref:D,class:["q-tab__indicator",f.tabProps.value.indicatorClass]});e.icon!==void 0&&$.push(P(he,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&$.push(P("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&$.push(e.alertIcon!==void 0?P(he,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):P("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),c===!0&&$.push(v);const k=[P("div",{class:"q-focus-helper",tabindex:-1,ref:A}),P("div",{class:G.value},Ke(n.default,$))];return c===!1&&k.push(v),k}const j={name:p(()=>e.name),rootRef:h,tabIndicatorRef:D,routeData:y};Ue(()=>{f.unregisterTab(j)}),it(()=>{f.registerTab(j)});function te(c,$){const v={ref:h,class:ee.value,tabindex:R.value,role:"tab","aria-selected":g.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:z,onKeydown:E,...$};return T(P(c,v,H()),[[V,d.value]])}return{renderTab:te,$tabs:f}}var Te=ie({name:"QTab",props:Dt,emits:zt,setup(e,{slots:n,emit:S}){const{renderTab:y}=jt(e,n,S);return()=>y("div")}});function Ut(e,n,S){const y=S===!0?["left","right"]:["top","bottom"];return`absolute-${n===!0?y[0]:y[1]}${e?` text-${e}`:""}`}const Et=["left","center","right","justify"];var Kt=ie({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Et.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:n,emit:S}){const{proxy:y}=me(),{$q:f}=y,{registerTick:U}=pe(),{registerTick:A}=pe(),{registerTick:h}=pe(),{registerTimeout:D,removeTimeout:d}=je(),{registerTimeout:g,removeTimeout:ee}=je(),G=x(null),R=x(null),z=x(e.modelValue),E=x(!1),H=x(!0),j=x(!1),te=x(!1),c=[],$=x(0),v=x(!1);let k=null,L=null,O;const J=p(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Ut(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),We=p(()=>{const a=$.value,o=z.value;for(let u=0;u<a;u++)if(c[u].name.value===o)return!0;return!1}),Ne=p(()=>`q-tabs__content--align-${E.value===!0?"left":te.value===!0?"justify":e.align}`),He=p(()=>`q-tabs row no-wrap items-center q-tabs--${E.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Xe=p(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Ne.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),ue=p(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),ce=p(()=>e.vertical!==!0&&f.lang.rtl===!0),ve=p(()=>qt===!1&&ce.value===!0);ne(ce,le),ne(()=>e.modelValue,a=>{be({name:a,setCurrent:!0,skipEmit:!0})}),ne(()=>e.outsideArrows,de);function be({name:a,setCurrent:o,skipEmit:u}){z.value!==a&&(u!==!0&&e["onUpdate:modelValue"]!==void 0&&S("update:modelValue",a),(o===!0||e["onUpdate:modelValue"]===void 0)&&(Ye(z.value,a),z.value=a))}function de(){U(()=>{Se({width:G.value.offsetWidth,height:G.value.offsetHeight})})}function Se(a){if(ue.value===void 0||R.value===null)return;const o=a[ue.value.container],u=Math.min(R.value[ue.value.scroll],Array.prototype.reduce.call(R.value.children,(w,b)=>w+(b[ue.value.content]||0),0)),C=o>0&&u>o;E.value=C,C===!0&&A(le),te.value=o<parseInt(e.breakpoint,10)}function Ye(a,o){const u=a!=null&&a!==""?c.find(w=>w.name.value===a):null,C=o!=null&&o!==""?c.find(w=>w.name.value===o):null;if(u&&C){const w=u.tabIndicatorRef.value,b=C.tabIndicatorRef.value;k!==null&&(clearTimeout(k),k=null),w.style.transition="none",w.style.transform="none",b.style.transition="none",b.style.transform="none";const m=w.getBoundingClientRect(),M=b.getBoundingClientRect();b.style.transform=e.vertical===!0?`translate3d(0,${m.top-M.top}px,0) scale3d(1,${M.height?m.height/M.height:1},1)`:`translate3d(${m.left-M.left}px,0,0) scale3d(${M.width?m.width/M.width:1},1,1)`,h(()=>{k=setTimeout(()=>{k=null,b.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",b.style.transform="none"},70)})}C&&E.value===!0&&ae(C.rootRef.value)}function ae(a){const{left:o,width:u,top:C,height:w}=R.value.getBoundingClientRect(),b=a.getBoundingClientRect();let m=e.vertical===!0?b.top-C:b.left-o;if(m<0){R.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(m),le();return}m+=e.vertical===!0?b.height-w:b.width-u,m>0&&(R.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(m),le())}function le(){const a=R.value;if(a===null)return;const o=a.getBoundingClientRect(),u=e.vertical===!0?a.scrollTop:Math.abs(a.scrollLeft);ce.value===!0?(H.value=Math.ceil(u+o.width)<a.scrollWidth-1,j.value=u>0):(H.value=u>0,j.value=e.vertical===!0?Math.ceil(u+o.height)<a.scrollHeight:Math.ceil(u+o.width)<a.scrollWidth)}function Ve(a){L!==null&&clearInterval(L),L=setInterval(()=>{et(a)===!0&&X()},5)}function Pe(){Ve(ve.value===!0?Number.MAX_SAFE_INTEGER:0)}function Ae(){Ve(ve.value===!0?0:Number.MAX_SAFE_INTEGER)}function X(){L!==null&&(clearInterval(L),L=null)}function Je(a,o){const u=Array.prototype.filter.call(R.value.children,M=>M===o||M.matches&&M.matches(".q-tab.q-focusable")===!0),C=u.length;if(C===0)return;if(a===36)return ae(u[0]),u[0].focus(),!0;if(a===35)return ae(u[C-1]),u[C-1].focus(),!0;const w=a===(e.vertical===!0?38:37),b=a===(e.vertical===!0?40:39),m=w===!0?-1:b===!0?1:void 0;if(m!==void 0){const M=ce.value===!0?-1:1,W=u.indexOf(o)+m*M;return W>=0&&W<C&&(ae(u[W]),u[W].focus({preventScroll:!0})),!0}}const Ze=p(()=>ve.value===!0?{get:a=>Math.abs(a.scrollLeft),set:(a,o)=>{a.scrollLeft=-o}}:e.vertical===!0?{get:a=>a.scrollTop,set:(a,o)=>{a.scrollTop=o}}:{get:a=>a.scrollLeft,set:(a,o)=>{a.scrollLeft=o}});function et(a){const o=R.value,{get:u,set:C}=Ze.value;let w=!1,b=u(o);const m=a<b?-1:1;return b+=m*5,b<0?(w=!0,b=0):(m===-1&&b<=a||m===1&&b>=a)&&(w=!0,b=a),C(o,b),le(),w}function Ie(a,o){for(const u in a)if(a[u]!==o[u])return!1;return!0}function tt(){let a=null,o={matchedLen:0,queryDiff:9999,hrefLen:0};const u=c.filter(m=>m.routeData!==void 0&&m.routeData.hasRouterLink.value===!0),{hash:C,query:w}=y.$route,b=Object.keys(w).length;for(const m of u){const M=m.routeData.exact.value===!0;if(m.routeData[M===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:W,query:ge,matched:nt,href:rt}=m.routeData.resolvedLink.value,_e=Object.keys(ge).length;if(M===!0){if(W!==C||_e!==b||Ie(w,ge)===!1)continue;a=m.name.value;break}if(W!==""&&W!==C||_e!==0&&Ie(ge,w)===!1)continue;const Y={matchedLen:nt.length,queryDiff:b-_e,hrefLen:rt.length-W.length};if(Y.matchedLen>o.matchedLen){a=m.name.value,o=Y;continue}else if(Y.matchedLen!==o.matchedLen)continue;if(Y.queryDiff<o.queryDiff)a=m.name.value,o=Y;else if(Y.queryDiff!==o.queryDiff)continue;Y.hrefLen>o.hrefLen&&(a=m.name.value,o=Y)}a===null&&c.some(m=>m.routeData===void 0&&m.name.value===z.value)===!0||be({name:a,setCurrent:!0})}function at(a){if(d(),v.value!==!0&&G.value!==null&&a.target&&typeof a.target.closest=="function"){const o=a.target.closest(".q-tab");o&&G.value.contains(o)===!0&&(v.value=!0,E.value===!0&&ae(o))}}function lt(){D(()=>{v.value=!1},30)}function fe(){$e.avoidRouteWatcher===!1?g(tt):ee()}function Qe(){if(O===void 0){const a=ne(()=>y.$route.fullPath,fe);O=()=>{a(),O=void 0}}}function st(a){c.push(a),$.value++,de(),a.routeData===void 0||y.$route===void 0?g(()=>{if(E.value===!0){const o=z.value,u=o!=null&&o!==""?c.find(C=>C.name.value===o):null;u&&ae(u.rootRef.value)}}):(Qe(),a.routeData.hasRouterLink.value===!0&&fe())}function ot(a){c.splice(c.indexOf(a),1),$.value--,de(),O!==void 0&&a.routeData!==void 0&&(c.every(o=>o.routeData===void 0)===!0&&O(),fe())}const $e={currentModel:z,tabProps:J,hasFocus:v,hasActiveTab:We,registerTab:st,unregisterTab:ot,verifyRouteModel:fe,updateModel:be,onKbdNavigate:Je,avoidRouteWatcher:!1};vt(Ee,$e);function Be(){k!==null&&clearTimeout(k),X(),O!==void 0&&O()}let Re;return Ue(Be),ht(()=>{Re=O!==void 0,Be()}),mt(()=>{Re===!0&&Qe(),de()}),()=>P("div",{ref:G,class:He.value,role:"tablist",onFocusin:at,onFocusout:lt},[P(Tt,{onResize:Se}),P("div",{ref:R,class:Xe.value,onScroll:le},re(n.default)),P(he,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(H.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||f.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:Pe,onTouchstartPassive:Pe,onMouseupPassive:X,onMouseleavePassive:X,onTouchendPassive:X}),P(he,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(j.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||f.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Ae,onTouchstartPassive:Ae,onMouseupPassive:X,onMouseleavePassive:X,onTouchendPassive:X})])}}),xe=ie({name:"QTabPanel",props:xt,setup(e,{slots:n}){return()=>P("div",{class:"q-tab-panel",role:"tabpanel"},re(n.default))}}),Gt=ie({name:"QTabPanels",props:{...St,...Oe},emits:Vt,setup(e,{slots:n}){const S=me(),y=Fe(e,S.proxy.$q),{updatePanelsList:f,getPanelContent:U,panelDirectives:A}=Pt(),h=p(()=>"q-tab-panels q-panel-parent"+(y.value===!0?" q-tab-panels--dark q-dark":""));return()=>(f(n),Ge("div",{class:h.value},U(),"pan",e.swipeable,()=>A.value))}}),Ot=ie({name:"QSplitter",props:{...Oe,modelValue:{type:Number,required:!0},reverse:Boolean,unit:{type:String,default:"%",validator:e=>["%","px"].includes(e)},limits:{type:Array,validator:e=>e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"?!1:e[0]>=0&&e[0]<=e[1]},emitImmediately:Boolean,horizontal:Boolean,disable:Boolean,beforeClass:[Array,String,Object],afterClass:[Array,String,Object],separatorClass:[Array,String,Object],separatorStyle:[Array,String,Object]},emits:["update:modelValue"],setup(e,{slots:n,emit:S}){const{proxy:{$q:y}}=me(),f=Fe(e,y),U=x(null),A={before:x(null),after:x(null)},h=p(()=>`q-splitter no-wrap ${e.horizontal===!0?"q-splitter--horizontal column":"q-splitter--vertical row"} q-splitter--${e.disable===!0?"disabled":"workable"}`+(f.value===!0?" q-splitter--dark":"")),D=p(()=>e.horizontal===!0?"height":"width"),d=p(()=>e.reverse!==!0?"before":"after"),g=p(()=>e.limits!==void 0?e.limits:e.unit==="%"?[10,90]:[50,1/0]);function ee(v){return(e.unit==="%"?v:Math.round(v))+e.unit}const G=p(()=>({[d.value]:{[D.value]:ee(e.modelValue)}}));let R,z,E,H,j;function te(v){if(v.isFirst===!0){const L=U.value.getBoundingClientRect()[D.value];R=e.horizontal===!0?"up":"left",z=e.unit==="%"?100:L,E=Math.min(z,g.value[1],Math.max(g.value[0],e.modelValue)),H=(e.reverse!==!0?1:-1)*(e.horizontal===!0?1:y.lang.rtl===!0?-1:1)*(e.unit==="%"?L===0?0:100/L:1),U.value.classList.add("q-splitter--active");return}if(v.isFinal===!0){j!==e.modelValue&&S("update:modelValue",j),U.value.classList.remove("q-splitter--active");return}const k=E+H*(v.direction===R?-1:1)*v.distance[e.horizontal===!0?"y":"x"];j=Math.min(z,g.value[1],Math.max(g.value[0],k)),A[d.value].value.style[D.value]=ee(j),e.emitImmediately===!0&&e.modelValue!==j&&S("update:modelValue",j)}const c=p(()=>[[Bt,te,void 0,{[e.horizontal===!0?"vertical":"horizontal"]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function $(v,k){v<k[0]?S("update:modelValue",k[0]):v>k[1]&&S("update:modelValue",k[1])}return ne(()=>e.modelValue,v=>{$(v,g.value)}),ne(()=>e.limits,()=>{bt(()=>{$(e.modelValue,g.value)})}),()=>{const v=[P("div",{ref:A.before,class:["q-splitter__panel q-splitter__before"+(e.reverse===!0?" col":""),e.beforeClass],style:G.value.before},re(n.before)),P("div",{class:["q-splitter__separator",e.separatorClass],style:e.separatorStyle,"aria-disabled":e.disable===!0?"true":void 0},[Ge("div",{class:"q-splitter__separator-area absolute-full"},re(n.separator),"sep",e.disable!==!0,()=>c.value)]),P("div",{ref:A.after,class:["q-splitter__panel q-splitter__after"+(e.reverse===!0?"":" col"),e.afterClass],style:G.value.after},re(n.after))];return P("div",{class:h.value,ref:U},Ke(n.default,v))}}});const Ft=_t({name:"CoursesDashboard",setup(){return{store:Lt(),slide:x(null),confirm:x(!1),showGradebook:x(!1),splitterModel:x(20),tab:x("main")}},mounted(){console.log("CoursesDashboard mounted"),this.store.aid=null},methods:{toggleGradebook(){console.log("toggleGradebook"),this.showGradebook?this.showGradebook=!1:this.showGradebook=!0},deleteSelectedObject(){this.store.aid!==null&&this.store.aid>-1?this.store.deleteAssignment(this.store.ck,this.store.aid):this.store.ck!==null&&this.store.deleteCourse(this.store.ck)},editCB(){if(this.store.aid!==null)this.store.pgIdx=-1;else{const e=Object.keys(this.store.currentCourse.assignments);e.length>0&&(this.store.aid=e[0],this.store.pgIdx=0)}this.store.router.push("/courses/assignments")},slideChanged(e){console.log("CourseDashboard.slideChanged ck = ",e),this.store.ck=e},viewerCB(){if(console.log("CourseDash viewerCB setting pgIdx 0 before /viewer"),this.store.currentAssignment.pages.length===0){this.store.notify("The requested assignment has no pages!");return}this.store.pgIdx=0,this.store.router.replace("/viewer")},copyCourseKeyCB(){At(this.store.ck).then(()=>{console.log("ck copied to clipboard",this.store.ck);const e=`The course-key ${this.store.ck} was copied to clipboard`;this.store.notify(e)}).catch(e=>{console.log(e)})}}}),Wt={key:0,class:"q-ml-sm"},Nt={key:1,class:"q-ml-sm"},Ht={key:0,class:"full-width"},Xt=s("div",{class:"justify-center"},[s("div",{class:"text-panel q-mx-md q-mb-xs q-mt-md text-h6",style:{"text-align":"center"}}," Welcome to Reading Edge! ")],-1),Yt={class:"text-panel q-ma-md bg-dark",style:{height:"100vh"}},Jt={class:"text-center text-h6"},Zt=s("br",null,null,-1),ea=s("br",null,null,-1),ta={class:"text-white q-mt-lg",href:"https://www.youtube.com/embed/-ATGbQFpa4I",target:"_blank"},aa={key:1,class:"justify-center absolute-top"},la={class:"text-panel justify-center q-mx-md q-mb-xs q-mt-md text-h6"},sa={key:0,class:"cursor-pointer"},oa={key:0,class:"q-px-md row content-center"},na={key:0,class:"embed-panel col-12 col-md-11 assignment",style:{"z-index":"5","max-height":"30vh",height:"30vh"}},ra={class:"q-px-lg row content-start"},ia={key:0},ua={width:"100%",class:"meta-table"},ca=s("tr",null,[s("th",{colSpan:"100"},[s("div",{class:"text-center val"},"Assignments")])],-1),da=s("th",{class:"val"},"Student",-1),fa={class:"hidden"},ha={class:"key"},ma={class:"hidden"},va={key:0},ba={key:1},ga={class:"hidden"},_a={key:1},ya={width:"100%",class:"meta-table"},ka=s("tr",null,[s("th",{colSpan:"100"},[s("div",{class:"text-center val"},"Assignments")])],-1),pa=s("th",{class:"val"},"Student",-1),Ca={class:"hidden"},wa={class:"key"},qa={key:0},Ta={key:1,class:"embed-panel col-12 col-md-5 assignment",style:{"z-index":"5","max-height":"30vh",height:"30vh"}},xa={class:"q-px-lg row content-start"},Sa={class:"meta-table"},Va=s("th",{class:"key"},"Title",-1),Pa={class:"val"},Aa={class:"cursor-pointer"},Ia=s("td",{class:"key"},"Cover Url",-1),Qa={class:"cursor-pointer val"},$a=s("td",{class:"key"},"Assignments",-1),Ba={class:"val"},Ra=s("td",{class:"key"},"Enrollment",-1),La={class:"val"},Ma=s("td",{class:"key"},"Created",-1),za={class:"val"},Da=s("td",{class:"key"},"Updated",-1),ja={class:"val"},Ua={class:"control-panel q-pa-sm row justify-center no-wrap flex flex-center",style:{overflow:"auto"}},Ea={key:0},Ka=s("br",null,null,-1),Ga=s("br",null,null,-1);function Oa(e,n,S,y,f,U){return r(),_(Z,null,[l(kt,{modelValue:e.confirm,"onUpdate:modelValue":n[1]||(n[1]=A=>e.confirm=A),persistent:"",class:"z-max confirm-delete-obj"},{default:t(()=>[l(F,null,{default:t(()=>[l(pt,{class:"row items-center"},{default:t(()=>[l(yt,{icon:"delete",color:"primary","text-color":"white"}),this.store.aid!==null&&this.store.aid>-1?(r(),_("span",Wt,"Confirm delete assignment?")):(r(),_("span",Nt,"Confirm delete entire course?"))]),_:1}),l(Ct,{align:"right",class:"text-white"},{default:t(()=>[T(l(K,{flat:"",label:"Cancel"},null,512),[[ze]]),T(l(K,{flat:"",label:"Delete",onClick:n[0]||(n[0]=A=>this.deleteSelectedObject())},null,512),[[ze]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(Rt,{class:"flex col"},{default:t(()=>{var A;return[this.store.ck?(r(),_("div",aa,[s("div",la,[i(" Course: "),this.store.currentCourse?(r(),_("span",sa,[i(B((A=this.store.currentCourse)==null?void 0:A.title)+" ",1),l(we,{modelValue:this.store.currentCourse.title,"onUpdate:modelValue":n[5]||(n[5]=h=>this.store.currentCourse.title=h),"auto-save":"",style:{maxWidth:"320px"}},{default:t(h=>[l(qe,{modelValue:h.value,"onUpdate:modelValue":D=>h.value=D,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:ke(h.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["modelValue"])])):se("",!0)]),this.store.ck?(r(),_("div",oa,[l(It,{class:"q-ma-md full-width",animated:"",swipeable:"",thumbnails:"",autoplay:this.store.autoplay,"navigation-position":"top",modelValue:this.store.ck,"onUpdate:modelValue":[n[14]||(n[14]=h=>this.store.ck=h),this.slideChanged],infinite:"","control-type":"arrows",ref:"carousel",height:"82vh"},{control:t(()=>[l(Qt,{position:"bottom",offset:[0,0]},{default:t(()=>[s("div",Ua,[l(K,{push:"",round:"",class:"dash-button","text-color":"white",icon:"arrow_left",style:Me({height:"33.5px",width:"33.5px"}),onClick:n[6]||(n[6]=h=>e.$refs.carousel.previous())},{default:t(()=>[l(N,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[l(F,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[i(" Go to previous course ")]),_:1})]),_:1})]),_:1},8,["style"]),l(K,{"no-caps":"",class:"on-right dash-button",icon:"table_chart",onClick:n[7]||(n[7]=h=>this.toggleGradebook())},{default:t(()=>[l(N,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[l(F,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[i(" View course gradebook ")]),_:1})]),_:1})]),_:1}),this.store.role==="teacher"?(r(),_("span",Ea,[this.store.ck!==null&&(this.store.aid===null||this.store.aid===-1)?(r(),q(K,{key:0,"no-caps":"",class:"dash-button on-right",onClick:n[8]||(n[8]=h=>this.copyCourseKeyCB()),icon:"key"},{default:t(()=>[l(N,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[l(F,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[i(" Copy the course-key to clipboard, then"),Ka,i(" share the course-key with whoever you"),Ga,i(" want to enroll. ")]),_:1})]),_:1})]),_:1})):se("",!0),l(K,{"no-caps":"",icon:"add",class:"on-right dash-button",onClick:n[9]||(n[9]=h=>this.store.newCourse())},{default:t(()=>[l(N,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[l(F,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[i(" Create a new course ")]),_:1})]),_:1})]),_:1}),this.store.ck!==null?(r(),q(K,{key:1,"no-caps":"",icon:"edit",class:"on-right dash-button",onClick:n[10]||(n[10]=h=>this.editCB())},{default:t(()=>[l(N,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[l(F,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[i(" Go to the assignments for selected course ")]),_:1})]),_:1})]),_:1})):se("",!0),l(K,{"no-caps":"",icon:"save",class:"on-right dash-button",onClick:n[11]||(n[11]=h=>this.store.commitCourse(this.store.ck))},{default:t(()=>[l(N,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[l(F,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[i(" Save current course to cloud ")]),_:1})]),_:1})]),_:1}),l(K,{"no-caps":"",icon:"delete",class:"on-right dash-button",onClick:n[12]||(n[12]=h=>e.confirm=!0)},{default:t(()=>[l(N,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[l(F,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[i(" Delete the selected course ")]),_:1})]),_:1})]),_:1})])):se("",!0),l(K,{push:"",round:"",class:"on-right dash-button","text-color":"white",icon:"arrow_right",style:Me({height:"33.5px",width:"33.5px"}),onClick:n[13]||(n[13]=h=>e.$refs.carousel.next())},{default:t(()=>[l(N,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[l(F,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[i(" Go to next course ")]),_:1})]),_:1})]),_:1},8,["style"])])]),_:1})]),default:t(()=>[(r(!0),_(Z,null,oe(this.store.courses,(h,D)=>(r(),q($t,{class:"text-panel row content-center justify-center",key:D,name:D,"img-src":h.coverUrl},{default:t(()=>[this.showGradebook?(r(),_("table",na,[l(De,null,{default:t(()=>[i("Course Gradebook")]),_:1}),s("tr",null,[s("td",ra,[this.store.role==="teacher"?(r(),_("span",ia,[s("table",ua,[ca,s("tr",null,[da,(r(!0),_(Z,null,oe(this.store.courses[this.store.ck].assignments,(d,g)=>(r(),_("th",{key:d,class:"key"},[i(B(d.title)+" ",1),s("span",fa,B(g),1)]))),128))]),(r(!0),_(Z,null,oe(this.store.courses[this.store.ck].enrollment,d=>(r(),_("tr",{key:d.name},[s("td",ha,[i(B(d.name)+" ",1),s("span",ma,B(e.sidx),1)]),(r(!0),_(Z,null,oe(this.store.courses[this.store.ck].assignments,g=>(r(),_("td",{style:{"text-align":"center"},class:"val",key:g},[g.scores&&g.scores[d.emailKey]?(r(),_("span",va,B(g.scores[d.emailKey]),1)):(r(),_("span",ba,"-")),i(),s("span",ga,B(e.aidx),1)]))),128))]))),128))])])):(r(),_("span",_a,[s("table",ya,[ka,s("tr",null,[pa,(r(!0),_(Z,null,oe(this.store.courses[this.store.ck].assignments,(d,g)=>(r(),_("th",{key:d,class:"key"},[i(B(d.title)+" ",1),s("span",Ca,B(g),1)]))),128))]),s("tr",null,[s("td",wa,B(this.store.userSnapshot.profile.name),1),(r(!0),_(Z,null,oe(this.store.courses[this.store.ck].assignments,d=>(r(),_("td",{class:"val",key:d},[d.scores&&d.scores[this.store.emailKey]?(r(),_("span",qa,B(d.scores[this.store.emailKey]),1)):se("",!0)]))),128))])])]))])])])):(r(),_("table",Ta,[l(De,null,{default:t(()=>[i("Course")]),_:1}),s("tr",null,[s("td",xa,[s("table",Sa,[s("tr",null,[Va,s("td",Pa,[s("div",Aa,[i(B(this.store.currentCourse.title)+" ",1),l(we,{modelValue:this.store.courses[this.store.ck].title,"onUpdate:modelValue":d=>this.store.courses[this.store.ck].title=d,"auto-save":""},{default:t(d=>[l(qe,{modelValue:d.value,"onUpdate:modelValue":g=>d.value=g,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:ke(d.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])])]),s("tr",null,[Ia,s("td",null,[s("div",Qa,[i(" Change "),l(we,{modelValue:this.store.courses[this.store.ck].coverUrl,"onUpdate:modelValue":d=>this.store.courses[this.store.ck].coverUrl=d,"auto-save":""},{default:t(d=>[l(qe,{modelValue:d.value,"onUpdate:modelValue":g=>d.value=g,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:ke(d.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])])]),s("tr",null,[$a,s("td",Ba,B(Object.keys(this.store.currentCourse.assignments).length),1)]),s("tr",null,[Ra,s("td",La,B(Object.keys(this.store.currentCourse.enrollment).length),1)]),s("tr",null,[Ma,s("td",za,B(this.store.currentCourse.created),1)]),s("tr",null,[Da,s("td",ja,B(this.store.currentCourse.updated),1)])])])])]))]),_:2},1032,["name","img-src"]))),128))]),_:1},8,["autoplay","modelValue","onUpdate:modelValue"])])):se("",!0)])):(r(),_("div",Ht,[Xt,s("div",Yt,[s("div",Jt,[i(" Please select or create a course "),Zt,ea,s("a",ta,[l(K,{class:"bg-primary",icon:"ondemand_video",size:"lg"}),l(N,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:t(()=>[l(F,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:t(()=>[i(" Current video overview ")]),_:1})]),_:1})])]),s("div",null,[l(Ot,{modelValue:e.splitterModel,"onUpdate:modelValue":n[4]||(n[4]=h=>e.splitterModel=h)},{before:t(()=>[l(Kt,{modelValue:e.tab,"onUpdate:modelValue":n[2]||(n[2]=h=>e.tab=h),vertical:"",class:"q-mt-md",style:{color:"mediumspringgreen"}},{default:t(()=>[l(Te,{name:"main",label:"Main Concepts"}),l(Te,{name:"assignment",label:"Assignment Builder"}),l(Te,{name:"accounts",label:"Accounts"})]),_:1},8,["modelValue"])]),after:t(()=>[l(Gt,{modelValue:e.tab,"onUpdate:modelValue":n[3]||(n[3]=h=>e.tab=h),vertical:""},{default:t(()=>[l(xe,{name:"main"},{default:t(()=>[l(Ce,null,{default:t(()=>[T((r(),q(Q,{clickable:""},{default:t(()=>[l(I,null,{default:t(()=>[i(" Hierarchy is: Course, Assignment, Page, Image ")]),_:1})]),_:1})),[[V]]),T((r(),q(Q,{clickable:""},{default:t(()=>[l(I,null,{default:t(()=>[i(" Page = one paragraph, many images, config and meta info ")]),_:1})]),_:1})),[[V]]),T((r(),q(Q,{clickable:""},{default:t(()=>[l(I,null,{default:t(()=>[i(" Assignment = list of Pages and Scores ")]),_:1})]),_:1})),[[V]]),T((r(),q(Q,{clickable:""},{default:t(()=>[l(I,null,{default:t(()=>[i(" Course = many Assignments and an enrollment list ")]),_:1})]),_:1})),[[V]]),T((r(),q(Q,{clickable:""},{default:t(()=>[l(I,null,{default:t(()=>[i(" Every account has 2 roles -- Teacher and Student ")]),_:1})]),_:1})),[[V]]),T((r(),q(Q,{clickable:""},{default:t(()=>[l(I,null,{default:t(()=>[i(" Toggle between Teacher and Student located at top-right ")]),_:1})]),_:1})),[[V]]),T((r(),q(Q,{clickable:""},{default:t(()=>[l(I,null,{default:t(()=>[i(" Share course-key with anyone you want to enroll. Then they can enroll themselves. ")]),_:1})]),_:1})),[[V]]),T((r(),q(Q,{clickable:""},{default:t(()=>[l(I,null,{default:t(()=>[i(" You can enroll yourself just by toggling and enrolling with one of your own course-keys! ")]),_:1})]),_:1})),[[V]]),T((r(),q(Q,{clickable:""},{default:t(()=>[l(I,null,{default:t(()=>[i(" There is no goal, only points. It is intended that you provide further incentive based on points ")]),_:1})]),_:1})),[[V]]),T((r(),q(Q,{clickable:""},{default:t(()=>[l(I,null,{default:t(()=>[i(" Currently cannot drag-n-drop to reorder things, also can't edit gradebook yet ")]),_:1})]),_:1})),[[V]])]),_:1})]),_:1}),l(xe,{name:"assignment"},{default:t(()=>[l(Ce,null,{default:t(()=>[T((r(),q(Q,{clickable:""},{default:t(()=>[l(I,null,{default:t(()=>[i(" Design goal = 30 seconds to make, 30 minutes to take ")]),_:1})]),_:1})),[[V]]),T((r(),q(Q,{clickable:""},{default:t(()=>[l(I,null,{default:t(()=>[i(" Typically create Course, create Assignment, then add pages. Each item selected on left sidebar creates a new page at current location ")]),_:1})]),_:1})),[[V]]),T((r(),q(Q,{clickable:""},{default:t(()=>[l(I,null,{default:t(()=>[i(" When generating complete assignment from guidewords just delete any unwanted pages (see video) ")]),_:1})]),_:1})),[[V]]),T((r(),q(Q,{clickable:""},{default:t(()=>[l(I,null,{default:t(()=>[i(' As you work on pages you will be directly manipulating the page stored in memory. Saving your changes permanently to the database is a separate, manual action. As an example: you could edit 5 different pages, change text and default images, then save all changes at once with the "Save Assignment" button. ')]),_:1})]),_:1})),[[V]])]),_:1})]),_:1}),l(xe,{name:"accounts"},{default:t(()=>[l(Ce,null,{default:t(()=>[T((r(),q(Q,{clickable:""},{default:t(()=>[l(I,null,{default:t(()=>[i(" Subscriptions are enabled during current testing and your support is truly appreciated. Please understand that this is brand new and you are one of the first people to use, so thank you for being a tester. A support system is coming (forum or email). If you are not completely satisfied you can be refunded. Subscriber satisfaction is goal #1. ")]),_:1})]),_:1})),[[V]]),T((r(),q(Q,{clickable:""},{default:t(()=>[l(I,null,{default:t(()=>[i(" Eventually your account might need to be reset or deleted as we are still testing. ")]),_:1})]),_:1})),[[V]]),T((r(),q(Q,{clickable:""},{default:t(()=>[l(I,null,{default:t(()=>[i(" Thank you for your patience and feedback! ")]),_:1})]),_:1})),[[V]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])])]))]}),_:1})],64)}var fl=gt(Ft,[["render",Oa]]);export{fl as default};
