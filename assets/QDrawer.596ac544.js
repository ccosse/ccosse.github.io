import{u as ge,a as ke}from"./use-prevent-scroll.377f3fc9.js";import{u as qe,a as xe,b as Be}from"./use-model-toggle.e9bd0c4e.js";import{u as Te}from"./use-timeout.35b8ad47.js";import{u as Ce,a as Se}from"./use-dark.0c7e385d.js";import{T as H}from"./TouchPan.ecb8c132.js";import{c as $e,e as N,r as k,a as o,w as i,t as Oe,v as Y,o as De,aa as Me,d as O,au as Z,y as We,f as Le,ab as D,l as Pe,g as Ae}from"./index.dd4cb1dd.js";const ee=150;var Ne=$e({name:"QDrawer",inheritAttrs:!1,props:{...qe,...Ce,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...xe,"onLayout","miniState"],setup(t,{slots:M,emit:y,attrs:R}){const f=Ae(),{proxy:{$q:d}}=f,te=Se(t,d),{preventBodyScroll:W}=ke(),{registerTimeout:j,removeTimeout:ae}=Te(),a=Le(Pe,N);if(a===N)return console.error("QDrawer needs to be child of QLayout"),N;let L,b=null,q;const r=k(t.behavior==="mobile"||t.behavior!=="desktop"&&a.totalWidth.value<=t.breakpoint),x=o(()=>t.mini===!0&&r.value!==!0),s=o(()=>x.value===!0?t.miniWidth:t.width),l=k(t.showIfAbove===!0&&r.value===!1?!0:t.modelValue===!0),U=o(()=>t.persistent!==!0&&(r.value===!0||oe.value===!0));function E(e,u){if(ue(),e!==!1&&a.animate(),v(0),r.value===!0){const n=a.instances[S.value];n!==void 0&&n.belowBreakpoint===!0&&n.hide(!1),m(1),a.isContainer.value!==!0&&W(!0)}else m(0),e!==!1&&F(!1);j(()=>{e!==!1&&F(!0),u!==!0&&y("show",e)},ee)}function K(e,u){le(),e!==!1&&a.animate(),m(0),v(w.value*s.value),Q(),u!==!0?j(()=>{y("hide",e)},ee):ae()}const{show:P,hide:B}=Be({showing:l,hideOnRouteChange:U,handleShow:E,handleHide:K}),{addToHistory:ue,removeFromHistory:le}=ge(l,B,U),C={belowBreakpoint:r,hide:B},c=o(()=>t.side==="right"),w=o(()=>(d.lang.rtl===!0?-1:1)*(c.value===!0?1:-1)),X=k(0),g=k(!1),A=k(!1),p=k(s.value*w.value),S=o(()=>c.value===!0?"left":"right"),_=o(()=>l.value===!0&&r.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:s.value:0),z=o(()=>t.overlay===!0||t.miniToOverlay===!0||a.view.value.indexOf(c.value?"R":"L")>-1||d.platform.is.ios===!0&&a.isContainer.value===!0),T=o(()=>t.overlay===!1&&l.value===!0&&r.value===!1),oe=o(()=>t.overlay===!0&&l.value===!0&&r.value===!1),re=o(()=>"fullscreen q-drawer__backdrop"+(l.value===!1&&g.value===!1?" hidden":"")),ie=o(()=>({backgroundColor:`rgba(0,0,0,${X.value*.4})`})),G=o(()=>c.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),ne=o(()=>c.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),se=o(()=>{const e={};return a.header.space===!0&&G.value===!1&&(z.value===!0?e.top=`${a.header.offset}px`:a.header.space===!0&&(e.top=`${a.header.size}px`)),a.footer.space===!0&&ne.value===!1&&(z.value===!0?e.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(e.bottom=`${a.footer.size}px`)),e}),ve=o(()=>{const e={width:`${s.value}px`,transform:`translateX(${p.value}px)`};return r.value===!0?e:Object.assign(e,se.value)}),de=o(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),ce=o(()=>`q-drawer q-drawer--${t.side}`+(A.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(te.value===!0?" q-drawer--dark q-dark":"")+(g.value===!0?" no-transition":l.value===!0?"":" q-layout--prevent-focus")+(r.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${x.value===!0?"mini":"standard"}`+(z.value===!0||T.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(G.value===!0?" q-drawer--top-padding":""))),fe=o(()=>{const e=d.lang.rtl===!0?t.side:S.value;return[[H,be,void 0,{[e]:!0,mouse:!0}]]}),me=o(()=>{const e=d.lang.rtl===!0?S.value:t.side;return[[H,J,void 0,{[e]:!0,mouse:!0}]]}),he=o(()=>{const e=d.lang.rtl===!0?S.value:t.side;return[[H,J,void 0,{[e]:!0,mouse:!0,mouseAllDir:!0}]]});function I(){we(r,t.behavior==="mobile"||t.behavior!=="desktop"&&a.totalWidth.value<=t.breakpoint)}i(r,e=>{e===!0?(L=l.value,l.value===!0&&B(!1)):t.overlay===!1&&t.behavior!=="mobile"&&L!==!1&&(l.value===!0?(v(0),m(0),Q()):P(!1))}),i(()=>t.side,(e,u)=>{a.instances[u]===C&&(a.instances[u]=void 0,a[u].space=!1,a[u].offset=0),a.instances[e]=C,a[e].size=s.value,a[e].space=T.value,a[e].offset=_.value}),i(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&I()}),i(()=>t.behavior+t.breakpoint,I),i(a.isContainer,e=>{l.value===!0&&W(e!==!0),e===!0&&I()}),i(a.scrollbarWidth,()=>{v(l.value===!0?0:void 0)}),i(_,e=>{h("offset",e)}),i(T,e=>{y("onLayout",e),h("space",e)}),i(c,()=>{v()}),i(s,e=>{v(),V(t.miniToOverlay,e)}),i(()=>t.miniToOverlay,e=>{V(e,s.value)}),i(()=>d.lang.rtl,()=>{v()}),i(()=>t.mini,()=>{t.modelValue===!0&&(ye(),a.animate())}),i(x,e=>{y("miniState",e)});function v(e){e===void 0?Y(()=>{e=l.value===!0?0:s.value,v(w.value*e)}):(a.isContainer.value===!0&&c.value===!0&&(r.value===!0||Math.abs(e)===s.value)&&(e+=w.value*a.scrollbarWidth.value),p.value=e)}function m(e){X.value=e}function F(e){const u=e===!0?"remove":a.isContainer.value!==!0?"add":"";u!==""&&document.body.classList[u]("q-body--drawer-toggle")}function ye(){b!==null&&clearTimeout(b),f.proxy&&f.proxy.$el&&f.proxy.$el.classList.add("q-drawer--mini-animate"),A.value=!0,b=setTimeout(()=>{b=null,A.value=!1,f&&f.proxy&&f.proxy.$el&&f.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function be(e){if(l.value!==!1)return;const u=s.value,n=D(e.distance.x,0,u);if(e.isFinal===!0){n>=Math.min(75,u)===!0?P():(a.animate(),m(0),v(w.value*u)),g.value=!1;return}v((d.lang.rtl===!0?c.value!==!0:c.value)?Math.max(u-n,0):Math.min(0,n-u)),m(D(n/u,0,1)),e.isFirst===!0&&(g.value=!0)}function J(e){if(l.value!==!0)return;const u=s.value,n=e.direction===t.side,$=(d.lang.rtl===!0?n!==!0:n)?D(e.distance.x,0,u):0;if(e.isFinal===!0){Math.abs($)<Math.min(75,u)===!0?(a.animate(),m(1),v(0)):B(),g.value=!1;return}v(w.value*$),m(D(1-$/u,0,1)),e.isFirst===!0&&(g.value=!0)}function Q(){W(!1),F(!0)}function h(e,u){a.update(t.side,e,u)}function we(e,u){e.value!==u&&(e.value=u)}function V(e,u){h("size",e===!0?t.miniWidth:u)}return a.instances[t.side]=C,V(t.miniToOverlay,s.value),h("space",T.value),h("offset",_.value),t.showIfAbove===!0&&t.modelValue!==!0&&l.value===!0&&t["onUpdate:modelValue"]!==void 0&&y("update:modelValue",!0),Oe(()=>{y("onLayout",T.value),y("miniState",x.value),L=t.showIfAbove===!0;const e=()=>{(l.value===!0?E:K)(!1,!0)};if(a.totalWidth.value!==0){Y(e);return}q=i(a.totalWidth,()=>{q(),q=void 0,l.value===!1&&t.showIfAbove===!0&&r.value===!1?P(!1):e()})}),De(()=>{q!==void 0&&q(),b!==null&&(clearTimeout(b),b=null),l.value===!0&&Q(),a.instances[t.side]===C&&(a.instances[t.side]=void 0,h("size",0),h("offset",0),h("space",!1))}),()=>{const e=[];r.value===!0&&(t.noSwipeOpen===!1&&e.push(Me(O("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),fe.value)),e.push(Z("div",{ref:"backdrop",class:re.value,style:ie.value,"aria-hidden":"true",onClick:B},void 0,"backdrop",t.noSwipeBackdrop!==!0&&l.value===!0,()=>he.value)));const u=x.value===!0&&M.mini!==void 0,n=[O("div",{...R,key:""+u,class:[de.value,R.class]},u===!0?M.mini():We(M.default))];return t.elevated===!0&&l.value===!0&&n.push(O("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(Z("aside",{ref:"content",class:ce.value,style:ve.value},n,"contentclose",t.noSwipeClose!==!0&&r.value===!0,()=>me.value)),O("div",{class:"q-drawer-container"},e)}}});export{Ne as Q};
