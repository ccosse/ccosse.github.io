import{e as ne}from"./QMenu.8536cc0c.js";import{c as L,r as B,a as m,d,g as R,a1 as oe,v as Z,aG as ae,Q as F,an as le,W as M,u as ie,ax as re,U as j,ay as z,as as U,Y as W,V as K,w as I,X as ue,aO as se,y as H,aP as ce,$ as ve,aE as de,t as ee,o as te,av as X,au as fe,aQ as me,h as pe}from"./index.d78dc266.js";import{u as ge,a as he}from"./use-dark.04c1f649.js";import{g as Y,s as G}from"./touch.70a9dd44.js";import{c as ye}from"./selection.d9200401.js";import{u as be}from"./use-cache.b0833c75.js";import{f as xe,r as Ce}from"./ClosePopup.49edaa22.js";function N(e,n=new WeakMap){if(Object(e)!==e)return e;if(n.has(e))return n.get(e);const a=e instanceof Date?new Date(e):e instanceof RegExp?new RegExp(e.source,e.flags):e instanceof Set?new Set:e instanceof Map?new Map:typeof e.constructor!="function"?Object.create(null):e.prototype!==void 0&&typeof e.prototype.constructor=="function"?e:new e.constructor;if(typeof e.constructor=="function"&&typeof e.valueOf=="function"){const i=e.valueOf();if(Object(i)!==i){const r=new e.constructor(i);return n.set(e,r),r}}return n.set(e,a),e instanceof Set?e.forEach(i=>{a.add(N(i,n))}):e instanceof Map&&e.forEach((i,r)=>{a.set(r,N(i,n))}),Object.assign(a,...Object.keys(e).map(i=>({[i]:N(e[i],n)})))}var je=L({name:"QPopupEdit",props:{modelValue:{required:!0},title:String,buttons:Boolean,labelSet:String,labelCancel:String,color:{type:String,default:"primary"},validate:{type:Function,default:()=>!0},autoSave:Boolean,cover:{type:Boolean,default:!0},disable:Boolean},emits:["update:modelValue","save","cancel","beforeShow","show","beforeHide","hide"],setup(e,{slots:n,emit:a}){const{proxy:i}=R(),{$q:r}=i,t=B(null),l=B(""),u=B("");let p=!1;const y=m(()=>oe({initialValue:l.value,validate:e.validate,set:s,cancel:f,updatePosition:v},"value",()=>u.value,b=>{u.value=b}));function s(){e.validate(u.value)!==!1&&(g()===!0&&(a("save",u.value,l.value),a("update:modelValue",u.value)),x())}function f(){g()===!0&&a("cancel",u.value,l.value),x()}function v(){Z(()=>{t.value.updatePosition()})}function g(){return ae(u.value,l.value)===!1}function x(){p=!0,t.value.hide()}function w(){p=!1,l.value=N(e.modelValue),u.value=N(e.modelValue),a("beforeShow")}function P(){a("show")}function E(){p===!1&&g()===!0&&(e.autoSave===!0&&e.validate(u.value)===!0?(a("save",u.value,l.value),a("update:modelValue",u.value)):a("cancel",u.value,l.value)),a("beforeHide")}function q(){a("hide")}function S(){const b=n.default!==void 0?[].concat(n.default(y.value)):[];return e.title&&b.unshift(d("div",{class:"q-dialog__title q-mt-sm q-mb-sm"},e.title)),e.buttons===!0&&b.push(d("div",{class:"q-popup-edit__buttons row justify-center no-wrap"},[d(F,{flat:!0,color:e.color,label:e.labelCancel||r.lang.label.cancel,onClick:f}),d(F,{flat:!0,color:e.color,label:e.labelSet||r.lang.label.set,onClick:s})])),b}return Object.assign(i,{set:s,cancel:f,show(b){t.value!==null&&t.value.show(b)},hide(b){t.value!==null&&t.value.hide(b)},updatePosition:v}),()=>{if(e.disable!==!0)return d(ne,{ref:t,class:"q-popup-edit",cover:e.cover,onBeforeShow:w,onShow:P,onBeforeHide:E,onHide:q,onEscapeKey:f},S)}}});function Pe(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((a,i)=>{const r=parseFloat(a);r&&(n[i]=r)}),n}var Se=le({name:"touch-swipe",beforeMount(e,{value:n,arg:a,modifiers:i}){if(i.mouse!==!0&&M.has.touch!==!0)return;const r=i.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:Pe(a),direction:Y(i),noop:ie,mouseStart(l){G(l,t)&&re(l)&&(j(t,"temp",[[document,"mousemove","move",`notPassive${r}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(l,!0))},touchStart(l){if(G(l,t)){const u=l.target;j(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","notPassiveCapture"],[u,"touchend","end","notPassiveCapture"]]),t.start(l)}},start(l,u){M.is.firefox===!0&&z(e,!0);const p=U(l);t.event={x:p.left,y:p.top,time:Date.now(),mouse:u===!0,dir:!1}},move(l){if(t.event===void 0)return;if(t.event.dir!==!1){W(l);return}const u=Date.now()-t.event.time;if(u===0)return;const p=U(l),y=p.left-t.event.x,s=Math.abs(y),f=p.top-t.event.y,v=Math.abs(f);if(t.event.mouse!==!0){if(s<t.sensitivity[1]&&v<t.sensitivity[1]){t.end(l);return}}else if(s<t.sensitivity[2]&&v<t.sensitivity[2])return;const g=s/u,x=v/u;t.direction.vertical===!0&&s<v&&s<100&&x>t.sensitivity[0]&&(t.event.dir=f<0?"up":"down"),t.direction.horizontal===!0&&s>v&&v<100&&g>t.sensitivity[0]&&(t.event.dir=y<0?"left":"right"),t.direction.up===!0&&s<v&&f<0&&s<100&&x>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&s<v&&f>0&&s<100&&x>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&s>v&&y<0&&v<100&&g>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&s>v&&y>0&&v<100&&g>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(W(l),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ye(),t.styleCleanup=w=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const P=()=>{document.body.classList.remove("no-pointer-events--children")};w===!0?setTimeout(P,50):P()}),t.handler({evt:l,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:u,distance:{x:s,y:v}})):t.end(l)},end(l){t.event!==void 0&&(K(t,"temp"),M.is.firefox===!0&&z(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),l!==void 0&&t.event.dir!==!1&&W(l),t.event=void 0)}};if(e.__qtouchswipe=t,i.mouse===!0){const l=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";j(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}M.has.touch===!0&&j(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const a=e.__qtouchswipe;a!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&a.end(),a.handler=n.value),a.direction=Y(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(K(n,"main"),K(n,"temp"),M.is.firefox===!0&&z(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});const _e={name:{required:!0},disable:Boolean},J={setup(e,{slots:n}){return()=>d("div",{class:"q-panel scroll",role:"tabpanel"},H(n.default))}},we={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},qe=["update:modelValue","beforeTransition","transition"];function ke(){const{props:e,emit:n,proxy:a}=R(),{getCacheWithFn:i}=be();let r,t;const l=B(null),u=B(null);function p(o){const c=e.vertical===!0?"up":"left";_((a.$q.lang.rtl===!0?-1:1)*(o.direction===c?1:-1))}const y=m(()=>[[Se,p,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),s=m(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),f=m(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),v=m(()=>`--q-transition-duration: ${e.transitionDuration}ms`),g=m(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),x=m(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),w=m(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);I(()=>e.modelValue,(o,c)=>{const C=S(o)===!0?b(o):-1;t!==!0&&T(C===-1?0:C<b(c)?-1:1),l.value!==C&&(l.value=C,n("beforeTransition",o,c),Z(()=>{n("transition",o,c)}))});function P(){_(1)}function E(){_(-1)}function q(o){n("update:modelValue",o)}function S(o){return o!=null&&o!==""}function b(o){return r.findIndex(c=>c.props.name===o&&c.props.disable!==""&&c.props.disable!==!0)}function O(){return r.filter(o=>o.props.disable!==""&&o.props.disable!==!0)}function T(o){const c=o!==0&&e.animated===!0&&l.value!==-1?"q-transition--"+(o===-1?s.value:f.value):null;u.value!==c&&(u.value=c)}function _(o,c=l.value){let C=c+o;for(;C>-1&&C<r.length;){const $=r[C];if($!==void 0&&$.props.disable!==""&&$.props.disable!==!0){T(o),t=!0,n("update:modelValue",$.props.name),setTimeout(()=>{t=!1});return}C+=o}e.infinite===!0&&r.length>0&&c!==-1&&c!==r.length&&_(o,o===-1?r.length:-1)}function V(){const o=b(e.modelValue);return l.value!==o&&(l.value=o),!0}function Q(){const o=S(e.modelValue)===!0&&V()&&r[l.value];return e.keepAlive===!0?[d(ce,x.value,[d(w.value===!0?i(g.value,()=>({...J,name:g.value})):J,{key:g.value,style:v.value},()=>o)])]:[d("div",{class:"q-panel scroll",style:v.value,key:g.value,role:"tabpanel"},[o])]}function h(){if(r.length!==0)return e.animated===!0?[d(ue,{name:u.value},Q)]:Q()}function k(o){return r=se(H(o.default,[])).filter(c=>c.props!==null&&c.props.slot===void 0&&S(c.props.name)===!0),r.length}function A(){return r}return Object.assign(a,{next:P,previous:E,goTo:q}),{panelIndex:l,panelDirectives:y,updatePanelsList:k,updatePanelIndex:V,getPanelContent:h,getEnabledPanels:O,getPanels:A,isValidPanelName:S,keepAliveProps:x,needsUniqueKeepAliveWrapper:w,goToPanelByOffset:_,goToPanel:q,nextPanel:P,previousPanel:E}}var Le=L({name:"QCarouselSlide",props:{..._e,imgSrc:String},setup(e,{slots:n}){const a=m(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>d("div",{class:"q-carousel__slide",style:a.value},H(n.default))}}),Re=L({name:"QCarouselControl",props:{position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,default:()=>[18,18],validator:e=>e.length===2}},setup(e,{slots:n}){const a=m(()=>`q-carousel__control absolute absolute-${e.position}`),i=m(()=>({margin:`${e.offset[1]}px ${e.offset[0]}px`}));return()=>d("div",{class:a.value,style:i.value},H(n.default))}});let D=0;const $e={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Ee=["update:fullscreen","fullscreen"];function Te(){const e=R(),{props:n,emit:a,proxy:i}=e;let r,t,l;const u=B(!1);ve(e)===!0&&I(()=>i.$route.fullPath,()=>{n.noRouteFullscreenExit!==!0&&s()}),I(()=>n.fullscreen,f=>{u.value!==f&&p()}),I(u,f=>{a("update:fullscreen",f),a("fullscreen",f)});function p(){u.value===!0?s():y()}function y(){u.value!==!0&&(u.value=!0,l=i.$el.parentNode,l.replaceChild(t,i.$el),document.body.appendChild(i.$el),D++,D===1&&document.body.classList.add("q-body--fullscreen-mixin"),r={handler:s},X.add(r))}function s(){u.value===!0&&(r!==void 0&&(X.remove(r),r=void 0),l.replaceChild(i.$el,t),u.value=!1,D=Math.max(0,D-1),D===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),i.$el.scrollIntoView!==void 0&&setTimeout(()=>{i.$el.scrollIntoView()})))}return de(()=>{t=document.createElement("span")}),ee(()=>{n.fullscreen===!0&&y()}),te(s),Object.assign(i,{toggleFullscreen:p,setFullscreen:y,exitFullscreen:s}),{inFullscreen:u,toggleFullscreen:p}}const Be=["top","right","bottom","left"],Ie=["regular","flat","outline","push","unelevated"];var He=L({name:"QCarousel",props:{...ge,...we,...$e,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Ie.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Be.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Ee,...qe],setup(e,{slots:n}){const{proxy:{$q:a}}=R(),i=he(e,a);let r=null,t;const{updatePanelsList:l,getPanelContent:u,panelDirectives:p,goToPanel:y,previousPanel:s,nextPanel:f,getEnabledPanels:v,panelIndex:g}=ke(),{inFullscreen:x}=Te(),w=m(()=>x.value!==!0&&e.height!==void 0?{height:e.height}:{}),P=m(()=>e.vertical===!0?"vertical":"horizontal"),E=m(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(x.value===!0?" fullscreen":"")+(i.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${P.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${O.value}`:"")),q=m(()=>{const h=[e.prevIcon||a.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||a.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&a.lang.rtl===!0?h.reverse():h}),S=m(()=>e.navigationIcon||a.iconSet.carousel.navigationIcon),b=m(()=>e.navigationActiveIcon||S.value),O=m(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),T=m(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));I(()=>e.modelValue,()=>{e.autoplay&&_()}),I(()=>e.autoplay,h=>{h?_():r!==null&&(clearTimeout(r),r=null)});function _(){const h=me(e.autoplay)===!0?Math.abs(e.autoplay):5e3;r!==null&&clearTimeout(r),r=setTimeout(()=>{r=null,h>=0?f():s()},h)}ee(()=>{e.autoplay&&_()}),te(()=>{r!==null&&clearTimeout(r)});function V(h,k){return d("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${h} q-carousel__navigation--${O.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[d("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},v().map(k))])}function Q(){const h=[];if(e.navigation===!0){const k=n["navigation-icon"]!==void 0?n["navigation-icon"]:o=>d(F,{key:"nav"+o.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${o.active===!0?"":"in"}active`,...o.btnProps,onClick:o.onClick}),A=t-1;h.push(V("buttons",(o,c)=>{const C=o.props.name,$=g.value===c;return k({index:c,maxIndex:A,name:C,active:$,btnProps:{icon:$===!0?b.value:S.value,size:"sm",...T.value},onClick:()=>{y(C)}})}))}else if(e.thumbnails===!0){const k=e.controlColor!==void 0?` text-${e.controlColor}`:"";h.push(V("thumbnails",A=>{const o=A.props;return d("img",{key:"tmb#"+o.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${o.name===e.modelValue?"":"in"}active`+k,src:o.imgSrc||o["img-src"],onClick:()=>{y(o.name)}})}))}return e.arrows===!0&&g.value>=0&&((e.infinite===!0||g.value>0)&&h.push(d("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${P.value} absolute flex flex-center`},[d(F,{icon:q.value[0],...T.value,onClick:s})])),(e.infinite===!0||g.value<t-1)&&h.push(d("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${P.value} absolute flex flex-center`},[d(F,{icon:q.value[1],...T.value,onClick:f})]))),pe(n.control,h)}return()=>(t=l(n),d("div",{class:E.value,style:w.value},[fe("div",{class:"q-carousel__slides-container"},u(),"sl-cont",e.swipeable,()=>p.value)].concat(Q())))}});function Ve(e){const n=document.createElement("textarea");n.value=e,n.contentEditable="true",n.style.position="fixed";const a=()=>{};xe(a),document.body.appendChild(n),n.focus(),n.select();const i=document.execCommand("copy");return n.remove(),Ce(a),i}function ze(e){return navigator.clipboard!==void 0?navigator.clipboard.writeText(e):new Promise((n,a)=>{const i=Ve(e);i?n(!0):a(i)})}export{je as Q,He as a,Re as b,ze as c,Le as d};
