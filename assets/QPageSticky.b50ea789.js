import{u as c,h as r,q as m,y as $,z as b,j as k,i as v,g as S}from"./index.3f6579f0.js";const P={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function Q(){const{props:e,proxy:{$q:i}}=m(),o=$(b,c);if(o===c)return console.error("QPageSticky needs to be child of QLayout"),c;const d=r(()=>{const t=e.position;return{top:t.indexOf("top")>-1,right:t.indexOf("right")>-1,bottom:t.indexOf("bottom")>-1,left:t.indexOf("left")>-1,vertical:t==="top"||t==="bottom",horizontal:t==="left"||t==="right"}}),l=r(()=>o.header.offset),f=r(()=>o.right.offset),u=r(()=>o.footer.offset),p=r(()=>o.left.offset),h=r(()=>{let t=0,a=0;const n=d.value,g=i.lang.rtl===!0?-1:1;n.top===!0&&l.value!==0?a=`${l.value}px`:n.bottom===!0&&u.value!==0&&(a=`${-u.value}px`),n.left===!0&&p.value!==0?t=`${g*p.value}px`:n.right===!0&&f.value!==0&&(t=`${-g*f.value}px`);const s={transform:`translate(${t}, ${a})`};return e.offset&&(s.margin=`${e.offset[1]}px ${e.offset[0]}px`),n.vertical===!0?(p.value!==0&&(s[i.lang.rtl===!0?"right":"left"]=`${p.value}px`),f.value!==0&&(s[i.lang.rtl===!0?"left":"right"]=`${f.value}px`)):n.horizontal===!0&&(l.value!==0&&(s.top=`${l.value}px`),u.value!==0&&(s.bottom=`${u.value}px`)),s}),x=r(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function y(t){const a=k(t.default);return v("div",{class:x.value,style:h.value},e.expand===!0?a:[v("div",a)])}return{$layout:o,getStickyContent:y}}var C=S({name:"QPageSticky",props:P,setup(e,{slots:i}){const{getStickyContent:o}=Q();return()=>o(i)}});export{C as Q};
