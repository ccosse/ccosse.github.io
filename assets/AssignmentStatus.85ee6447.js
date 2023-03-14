import{b as c}from"./DocumentationComponent.0f53a445.js";import{d as g,r as e,v as p,_ as m,o as u,c as _,w as h,a as l,e as t,aj as o,Q as x,a1 as d,af as n}from"./index.79af6c58.js";import{a as f,Q as C}from"./use-portal.3323630c.js";import{u as T,s as r}from"./re-store.7a033c6e.js";const y=g({name:"AssignmentStatus",props:{},setup(s){return{reStore:T(),aid:e("-"),ck:e("-"),assignmentTitle:e("-"),pageTitle:e("-"),pctComplete:e(0),points:e(0),goal:e(100),pgIdx:e(0),pgTot:e(0),imgIdx:e(0),imgTot:e(0),imgFit:e("-"),guideWords:e("-"),mapCoords:e("36.11,-115.17"),pageid:e("-"),pctReplace:e("-"),props:s}},mounted(){console.log(this.props),p(this.reStore.assignmentStatus,async(s,i)=>{console.log("watcher ",s,i),this.pctComplete=parseInt(parseFloat(s.points)/parseFloat(s.goal)*100),this.assignmentTitle=s.assignmentTitle,this.pageTitle=s.pageTitle,this.points=s.points,this.goal=s.goal,this.pgIdx=s.pgIdx,this.pgTot=s.pgTot,this.imgIdx=s.imgIdx,this.imgTot=s.imgTot,this.imgFit=s.imgFit,this.guideWords=s.guideWords,this.mapCoords=s.mapCoords,this.pageid=s.pageid,this.ck=s.ck,this.aid=s.aid,this.pctReplace=s.pctReplace})},methods:{speak(){console.log("AssignmentStatus.speak",this.reStore),this.reStore.speak()},mapCB(){const s="https://maps.google.com/?ll="+this.mapCoords.split(",")[0]+","+this.mapCoords.split(",")[1];window.open(s,"_blank")},cycleFitMode(){const s=["scale-down","cover"];let i=s.indexOf(this.imgFit);i+=1,i>s.length-1&&(i=0),this.imgFit=s[i],this.reStore.page.imgFit=this.imgFit,this.reStore.assignmentStatus.imgFit=this.imgFit,console.log("fit: ",this.imgFit)},nextImg(){this.imgIdx=this.imgIdx+1>this.imgTot-1?0:this.imgIdx+1,console.log("AssignmentStatus nextImg",this.imgIdx,this.imgTot),this.reStore.setStatus("imgIdx",this.imgIdx)},toggleText(){r("#slideTextDiv").classed("hidden")===!0?r("#slideTextDiv").classed("hidden",!1):r("#slideTextDiv").classed("hidden",!0)},loadURL(s){console.log("loadURL ",s),window.open(s,"_blank")}}}),k={class:"text-weight-bolder text-center q-pa-md"},I={style:{border:"1px solid gray","border-radius":"5px"}},S={width:"100%"},v={style:{width:"50%"}},F=t("tr",null,[t("td",null,"% Complete"),t("td",null,"Speak Text")],-1),R={style:{border:"1px solid gray","border-radius":"5px"},class:"q-my-md"},A={width:"100%"},B=t("td",null,"Page Title",-1),Q={style:{width:"50%"}},P=t("td",null,"Course-Key",-1),W={style:{width:"50%"}},$=t("td",null,"Assgnmt Id",-1),q={style:{width:"50%"}},w=t("td",null,"WP Page Id",-1),D={style:{width:"50%"}},M=t("td",null,"Current Page",-1),U=t("td",null,"Current Image",-1),V={class:"float-left"},L=t("td",null,"Image Fit",-1),N={class:"align-left"},z=t("td",null,"Guide Words",-1),E={style:{width:"50%"}},G=t("td",null,"Percent Replace",-1),K=t("td",null,"Map Coords",-1),H={class:"float-left"};function J(s,i,X,Y,Z,b){return u(),_(C,{flat:""},{default:h(()=>[l(f,null,{default:h(()=>[t("div",k,o(this.assignmentTitle)+": "+o(this.points)+"/"+o(this.goal),1),t("div",I,[t("table",S,[t("tr",null,[t("td",v,[l(c,{"show-value":"","instant-feedback":"",value:this.pctComplete,size:"55px",thickness:.4,color:"secondary","track-color":"grey-3","center-color":"grey-8",class:"q-ma-md"},null,8,["value","thickness"])]),t("td",null,[l(x,{round:"",class:"q-pa-md",icon:"volume_up",color:"secondary",onClick:i[0]||(i[0]=a=>this.speak())})])]),F])]),t("div",R,[t("table",A,[t("tr",null,[B,t("td",Q,o(this.pageTitle),1)]),t("tr",null,[P,t("td",W,o(this.ck),1)]),t("tr",null,[$,t("td",q,o(this.aid),1)]),t("tr",null,[w,t("td",D,[t("a",{class:"bold_ptr float-left",onClick:i[1]||(i[1]=a=>this.loadURL(this.canonicalUrl))},o(this.pageid),1),l(d,{name:"link",class:"float-right"})])]),t("tr",null,[M,t("td",{style:{width:"50%"},class:"ptr",onClick:i[2]||(i[2]=(...a)=>this.toggleText&&this.toggleText(...a))},[n(o(this.pgIdx+1)+" / "+o(this.pgTot)+" ",1),l(d,{name:"article",class:"float-right"})])]),t("tr",null,[U,t("td",{style:{width:"50%"},class:"ptr",onClick:i[3]||(i[3]=(...a)=>this.nextImg&&this.nextImg(...a))},[t("span",V,o(this.imgIdx+1)+" / "+o(this.imgTot),1),l(d,{name:"image",class:"float-right"})])]),t("tr",{class:"ptr",onClick:i[4]||(i[4]=(...a)=>this.cycleFitMode&&this.cycleFitMode(...a))},[L,t("td",null,[t("span",N,o(this.imgFit),1),l(d,{class:"float-right",name:"fit_screen"})])]),t("tr",null,[z,t("td",E,[n(o(this.guideWords.replaceAll(",",", "))+" ",1),l(d,{name:"tune",class:"float-right"})])]),t("tr",null,[G,t("td",null,[n(o(this.pctReplace)+" % ",1),l(d,{name:"tune",class:"float-right"})])]),t("tr",null,[K,t("td",{onClick:i[5]||(i[5]=(...a)=>this.mapCB&&this.mapCB(...a)),class:"ptr"},[t("span",H,o(this.mapCoords.slice(0,13)),1),l(d,{class:"float-right",name:"place"})])])])])]),_:1})]),_:1})}var it=m(y,[["render",J]]);export{it as A};
