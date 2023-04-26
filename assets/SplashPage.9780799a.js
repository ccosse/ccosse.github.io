import{j as u,_ as f,p,k as g,F as k,G as t,q as s,n,Q as a,s as l,H as x,m as v}from"./index.d4354dc5.js";import{Q as D}from"./QPage.096b04f6.js";import"./transform.9aa67f3e.js";import{s as d}from"./select.9628a1e9.js";import{u as $}from"./store.a5432aff.js";import"./firebase.8769ab52.js";import"./axios.84ae42e4.js";var C="/assets/readingedge_nowords.25566d29.png";const b=u({name:"LogoComponent",mounted(){console.log("D3Page.mounted");const i=d("#logo_container").append("svg").attr("width",400).attr("height",400);i.append("path").attr("id","circ").attr("d","M 50,200 A 150,150 0 1,1 50,201z").style("fill","#0000"),i.append("text").append("textPath").attr("xlink:href","#circ").style("text-anchor","start").style("font-size","38pt").style("font-weight","bold").style("stroke","white").style("fill","seagreen").attr("startOffset","1%").text("Reading Proficiency"),i.append("path").attr("id","circ2").attr("d","M 380,200 A 180,180 0 1,0 380,201z").style("fill","#0000"),i.append("text").append("textPath").attr("xlink:href","#circ2").style("text-anchor","start").style("font-size","25pt").style("font-weight","bold").style("fill","seagreen").attr("startOffset","51.5%").text("Through Paragraph Reconstruction")}}),E=t("img",{class:"fixed-center",alt:"Reading Edge logo",src:C,style:{width:"360px",height:"275px",opacity:"0.8"}},null,-1),R=t("div",{class:"fixed-center",id:"logo_container"},null,-1),w={class:"fixed-center",style:{position:"fixed",top:"55vh"}};function B(i,e,c,h,_,m){const r=p("router-link");return g(),k(x,null,[E,R,t("div",w,[t("table",null,[t("tr",null,[t("td",null,[s(r,{to:"/demo",style:{textDecoration:"none",opacity:"1"}},{default:n(()=>[s(a,{size:"lg",outline:"",class:"bg-primary text-white"},{default:n(()=>[l("Try\xA0It")]),_:1})]),_:1})]),t("td",null,[s(r,{to:"/login",style:{textDecoration:"none",opacity:"1"}},{default:n(()=>[s(a,{size:"lg",outline:"",class:"bg-primary text-white"},{default:n(()=>[l("Log\xA0In")]),_:1})]),_:1})])])])])],64)}var z=f(b,[["render",B]]);const P={italiano:"Ciao! Reading Edge insegna ai bambini a leggere attentamente e pensare al contesto.",Kiswahili:"Habari! Reading Edge hufunza watoto kusoma kwa makini na kufikiria kuhusu muktadha.",\u0440\u0443\u0441\u0441\u043A\u0438\u0439:"\u041F\u0440\u0438\u0432\u0435\u0442! Reading Edge \u0443\u0447\u0438\u0442 \u0434\u0435\u0442\u0435\u0439 \u0432\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0438\u0442\u0430\u0442\u044C \u0438 \u0434\u0443\u043C\u0430\u0442\u044C \u043E \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0435.",espa\u00F1ol:"\xA1Hola! Reading Edge entrena a los ni\xF1os para leer con atenci\xF3n y pensar en el contexto.",Deutsch:"Hallo! Reading Edge trainiert Kinder, sorgf\xE4ltig zu lesen und \xFCber den Kontext nachzudenken.",fran\u00E7ais:"Bonjour! Reading Edge forme les enfants \xE0 lire attentivement et \xE0 r\xE9fl\xE9chir au contexte.",\u65E5\u672C\u8A9E:"\u3053\u3093\u306B\u3061\u306F\uFF01 Reading Edge \u306F\u3001\u5B50\u4F9B\u305F\u3061\u304C\u6CE8\u610F\u6DF1\u304F\u8AAD\u307F\u3001\u6587\u8108\u306B\u3064\u3044\u3066\u8003\u3048\u308B\u3088\u3046\u306B\u8A13\u7DF4\u3057\u307E\u3059\u3002",\uD55C\uAD6D\uC758:"\uC548\uB155\uD558\uC138\uC694! Reading Edge\uB294 \uC544\uC774\uB4E4\uC774 \uC8FC\uC758 \uAE4A\uAC8C \uC77D\uACE0 \uB9E5\uB77D\uC5D0 \uB300\uD574 \uC0DD\uAC01\uD558\uB3C4\uB85D \uD6C8\uB828\uD569\uB2C8\uB2E4.","Eng-UK-Fem":"Hello! Reading Edge trains kids to read carefully and think about context.","Bahasa Indonesia":"Halo! Reading Edge melatih anak-anak untuk membaca dengan cermat dan memikirkan konteks.","portugu\xEAs do Brasil":"Ol\xE1! Reading Edge treina as crian\xE7as para ler com cuidado e pensar sobre o contexto.","\u4E2D\u6587 \uFF08\u4E2D\u56FD\u5927\u9646\uFF09":"\u4F60\u597D\uFF01 Reading Edge \u8BAD\u7EC3\u5B69\u5B50\u4EEC\u4ED4\u7EC6\u9605\u8BFB\u5E76\u601D\u8003\u4E0A\u4E0B\u6587\u3002","\u4E2D\u6587 \uFF08\u9999\u6E2F\uFF09":"\u4F60\u597D\uFF01 Reading Edge \u8BAD\u7EC3\u5B69\u5B50\u4EEC\u4ED4\u7EC6\u9605\u8BFB\u5E76\u601D\u8003\u4E0A\u4E0B\u6587\u3002","\u4E2D\u6587 \uFF08\u81FA\u7063\uFF09":"\u4F60\u597D\uFF01 Reading Edge \u8BAD\u7EC3\u5B69\u5B50\u4EEC\u4ED4\u7EC6\u9605\u8BFB\u5E76\u601D\u8003\u4E0A\u4E0B\u6587\u3002"},H=u({name:"SplashPage",components:{LogoComponent:z},setup(){return{store:$()}},mounted(){console.log("SplashPage mounted"),this.store.initSpeech()},methods:{async playDesc(i){const e=this.store.langVoices;this.store.speech.setVoice(e[i].voice),await this.store.speech.speak({text:P[i],queue:!1}).then(()=>{console.log("Success!")}).catch(c=>{console.error("Error in speech",c)})},toggleDescDiv(){d("#playDescDiv").classed("hidden")===!0?d("#playDescDiv").classed("hidden",!1):d("#playDescDiv").classed("hidden",!0)}}}),K={style:{position:"absolute",top:"70vh"}},S={class:"row flex-center"},V={target:"_blank",href:"https://github.com/ccosse/ccosse.github.io#readme"},L={class:"flex-center text-center hidden",id:"playDescDiv"},F=t("span",{class:"fi fi-gb"},null,-1),I=t("span",{class:"fi fi-fr"},null,-1),M=t("span",{class:"fi fi-mx"},null,-1),Q=t("span",{class:"fi fi-de"},null,-1),j=t("span",{class:"fi fi-id"},null,-1),N=t("span",{class:"fi fi-kr"},null,-1),O=t("br",null,null,-1),T=t("span",{class:"fi fi-jp"},null,-1),q=t("span",{class:"fi fi-it"},null,-1),A=t("span",{class:"fi fi-ke"},null,-1),G=t("span",{class:"fi fi-br"},null,-1),U=t("span",{class:"fi fi-tw"},null,-1),J=t("span",{class:"fi fi-ru"},null,-1);function W(i,e,c,h,_,m){const r=p("LogoComponent"),y=p("router-link");return g(),v(D,{class:"flex flex-center"},{default:n(()=>[s(r),t("div",K,[t("div",S,[s(y,{to:"/gallery"},{default:n(()=>[s(a,{"no-caps":"",class:"text-grey"},{default:n(()=>[l(" Gallery ")]),_:1})]),_:1}),l(" \xA0 "),t("a",V,[s(a,{"no-caps":"",class:"text-grey"},{default:n(()=>[l(" ReadMe ")]),_:1})]),s(a,{"no-caps":"",class:"text-grey",onClick:e[0]||(e[0]=o=>this.toggleDescDiv())},{default:n(()=>[l(" ClickMe ")]),_:1})]),t("div",L,[s(a,{onClick:e[1]||(e[1]=o=>this.playDesc("Eng-UK-Fem"))},{default:n(()=>[F]),_:1}),s(a,{onClick:e[2]||(e[2]=o=>this.playDesc("fran\xE7ais"))},{default:n(()=>[I]),_:1}),s(a,{onClick:e[3]||(e[3]=o=>this.playDesc("espa\xF1ol"))},{default:n(()=>[M]),_:1}),s(a,{onClick:e[4]||(e[4]=o=>this.playDesc("Deutsch"))},{default:n(()=>[Q]),_:1}),s(a,{onClick:e[5]||(e[5]=o=>this.playDesc("Bahasa Indonesia"))},{default:n(()=>[j]),_:1}),s(a,{onClick:e[6]||(e[6]=o=>this.playDesc("\uD55C\uAD6D\uC758"))},{default:n(()=>[N]),_:1}),O,s(a,{onClick:e[7]||(e[7]=o=>this.playDesc("\u65E5\u672C\u8A9E"))},{default:n(()=>[T]),_:1}),s(a,{onClick:e[8]||(e[8]=o=>this.playDesc("italiano"))},{default:n(()=>[q]),_:1}),s(a,{onClick:e[9]||(e[9]=o=>this.playDesc("Kiswahili"))},{default:n(()=>[A]),_:1}),s(a,{onClick:e[10]||(e[10]=o=>this.playDesc("portugu\xEAs do Brasil"))},{default:n(()=>[G]),_:1}),s(a,{onClick:e[11]||(e[11]=o=>this.playDesc("\u4E2D\u6587 \uFF08\u81FA\u7063\uFF09"))},{default:n(()=>[U]),_:1}),s(a,{onClick:e[12]||(e[12]=o=>this.playDesc("\u0440\u0443\u0441\u0441\u043A\u0438\u0439"))},{default:n(()=>[J]),_:1})])])]),_:1})}var ae=f(H,[["render",W]]);export{ae as default};
