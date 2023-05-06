import{j as u,_ as f,p,k as g,F as m,s as t,q as s,n,Q as o,G as i,H as x,m as v}from"./index.3876e0d9.js";import{Q as D}from"./QPage.ebb10bbb.js";import"./transform.9aa67f3e.js";import{s as r}from"./select.9628a1e9.js";import{u as $}from"./store.57ad48ec.js";import"./firebase.dc843dde.js";import"./axios.84ae42e4.js";var C="/assets/readingedge_nowords.25566d29.png";const E=u({name:"LogoComponent",mounted(){console.log("D3Page.mounted");const a=r("#logo_container").append("svg").attr("width",400).attr("height",400);a.append("path").attr("id","circ").attr("d","M 50,200 A 150,150 0 1,1 50,201z").style("fill","#0000"),a.append("text").append("textPath").attr("xlink:href","#circ").style("text-anchor","start").style("font-size","38pt").style("font-weight","bold").style("stroke","white").style("fill","seagreen").attr("startOffset","1%").text("Reading Proficiency"),a.append("path").attr("id","circ2").attr("d","M 380,200 A 180,180 0 1,0 380,201z").style("fill","#0000"),a.append("text").append("textPath").attr("xlink:href","#circ2").style("text-anchor","start").style("font-size","25pt").style("font-weight","bold").style("strokeWidth",".1").style("fill","seagreen").attr("startOffset","51.5%").text("Through Paragraph Reconstruction")}}),b=t("img",{class:"fixed-center",alt:"Reading Edge logo",src:C,style:{width:"360px",height:"275px",opacity:"0.8"}},null,-1),R=t("div",{class:"fixed-center",id:"logo_container"},null,-1),w={class:"fixed-center",style:{position:"fixed",top:"55vh"}};function z(a,e,c,h,_,y){const d=p("router-link");return g(),m(x,null,[b,R,t("div",w,[t("table",null,[t("tr",null,[t("td",null,[s(d,{to:"/demo",style:{textDecoration:"none",opacity:"1"}},{default:n(()=>[s(o,{size:"lg",outline:"",class:"bg-primary text-white"},{default:n(()=>[i("Try\xA0It")]),_:1})]),_:1})]),t("td",null,[s(d,{to:"/login",style:{textDecoration:"none",opacity:"1"}},{default:n(()=>[s(o,{size:"lg",outline:"",class:"bg-primary text-white"},{default:n(()=>[i("Log\xA0In")]),_:1})]),_:1})])])])])],64)}var S=f(E,[["render",z]]);const B={italiano:"Ciao! Reading Edge insegna ai bambini a leggere attentamente e pensare al contesto.",Kiswahili:"Habari! Reading Edge hufunza watoto kusoma kwa makini na kufikiria kuhusu muktadha.",\u0440\u0443\u0441\u0441\u043A\u0438\u0439:"\u041F\u0440\u0438\u0432\u0435\u0442! Reading Edge \u0443\u0447\u0438\u0442 \u0434\u0435\u0442\u0435\u0439 \u0432\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0438\u0442\u0430\u0442\u044C \u0438 \u0434\u0443\u043C\u0430\u0442\u044C \u043E \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0435.","espa\xF1ol-US":"\xA1Hola! Reading Edge entrena a los ni\xF1os para leer con atenci\xF3n y pensar en el contexto.","espa\xF1ol-ES":"\xA1Hola! Reading Edge entrena a los ni\xF1os para leer con atenci\xF3n y pensar en el contexto.",Deutsch:"Hallo! Reading Edge trainiert Kinder, sorgf\xE4ltig zu lesen und \xFCber den Kontext nachzudenken.",fran\u00E7ais:"Bonjour! Reading Edge forme les enfants \xE0 lire attentivement et \xE0 r\xE9fl\xE9chir au contexte.",\u65E5\u672C\u8A9E:"\u3053\u3093\u306B\u3061\u306F\uFF01 Reading Edge \u306F\u3001\u5B50\u4F9B\u305F\u3061\u304C\u6CE8\u610F\u6DF1\u304F\u8AAD\u307F\u3001\u6587\u8108\u306B\u3064\u3044\u3066\u8003\u3048\u308B\u3088\u3046\u306B\u8A13\u7DF4\u3057\u307E\u3059\u3002",\uD55C\uAD6D\uC758:"\uC548\uB155\uD558\uC138\uC694! Reading Edge\uB294 \uC544\uC774\uB4E4\uC774 \uC8FC\uC758 \uAE4A\uAC8C \uC77D\uACE0 \uB9E5\uB77D\uC5D0 \uB300\uD574 \uC0DD\uAC01\uD558\uB3C4\uB85D \uD6C8\uB828\uD569\uB2C8\uB2E4.","Eng-UK-Fem":"Hello! Reading Edge trains kids to read carefully and think about context.","Eng-UK-Male":"Hello! Reading Edge trains kids to read carefully and think about context.","Eng-US":"Hello! Reading Edge trains kids to read carefully and think about context.","Bahasa Indonesia":"Halo! Reading Edge melatih anak-anak untuk membaca dengan cermat dan memikirkan konteks.","portugu\xEAs do Brasil":"Ol\xE1! Reading Edge treina as crian\xE7as para ler com cuidado e pensar sobre o contexto.","\u4E2D\u6587 \uFF08\u4E2D\u56FD\u5927\u9646\uFF09":"\u4F60\u597D\uFF01 Reading Edge \u8BAD\u7EC3\u5B69\u5B50\u4EEC\u4ED4\u7EC6\u9605\u8BFB\u5E76\u601D\u8003\u4E0A\u4E0B\u6587\u3002","\u4E2D\u6587 \uFF08\u9999\u6E2F\uFF09":"\u4F60\u597D\uFF01 Reading Edge \u8BAD\u7EC3\u5B69\u5B50\u4EEC\u4ED4\u7EC6\u9605\u8BFB\u5E76\u601D\u8003\u4E0A\u4E0B\u6587\u3002","\u4E2D\u6587 \uFF08\u81FA\u7063\uFF09":"\u4F60\u597D\uFF01 Reading Edge \u8BAD\u7EC3\u5B69\u5B50\u4EEC\u4ED4\u7EC6\u9605\u8BFB\u5E76\u601D\u8003\u4E0A\u4E0B\u6587\u3002",polski:"Cze\u015B\u0107! Reading Edge uczy dzieci uwa\u017Cnego czytania i my\u015Blenia o kontek\u015Bcie.",Nederlands:"Hallo! Reading Edge leert kinderen aandachtig te lezen en na te denken over de context.","Google \u0939\u093F\u0928\u094D\u0926\u0940":"\u0928\u092E\u0938\u094D\u0924\u0947! \u0930\u0940\u0921\u093F\u0902\u0917 \u090F\u091C \u092C\u091A\u094D\u091A\u094B\u0902 \u0915\u094B \u0927\u094D\u092F\u093E\u0928 \u0938\u0947 \u092A\u0922\u093C\u0928\u0947 \u0914\u0930 \u0938\u0902\u0926\u0930\u094D\u092D \u0915\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902 \u0938\u094B\u091A\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u092A\u094D\u0930\u0936\u093F\u0915\u094D\u0937\u093F\u0924 \u0915\u0930\u0924\u093E \u0939\u0948\u0964"},H=u({name:"SplashPage",components:{LogoComponent:S},setup(){return{store:$()}},mounted(){console.log("SplashPage mounted"),this.store.initSpeech(),this.store.logIP()},methods:{async playDesc(a){const e=this.store.langVoices;await this.store.initSpeech(),console.log(a),console.log(e[a]),console.log(e[a].voice),this.store.speech.setVoice(e[a].voice),await this.store.speech.speak({text:B[a],queue:!1}).then(()=>{console.log("Success!")}).catch(c=>{console.error("Error in speech",c)})},toggleDescDiv(){r("#playDescDiv").classed("hidden")===!0?r("#playDescDiv").classed("hidden",!1):r("#playDescDiv").classed("hidden",!0)}}}),P={style:{position:"absolute",top:"75vh"}},K={class:"row flex-center"},U={target:"_blank",href:"https://github.com/ccosse/ccosse.github.io#readme"},M={class:"flex-center text-center hidden",id:"playDescDiv"},V=t("span",{class:"fi fi-gb"},null,-1),I=t("span",{class:"fi fi-gb"},null,-1),L=t("span",{class:"fi fi-jp"},null,-1),N=t("span",{class:"fi fi-fr"},null,-1),F=t("span",{class:"fi fi-nl"},null,-1),G=t("br",null,null,-1),Q=t("span",{class:"fi fi-pl"},null,-1),j=t("span",{class:"fi fi-mx"},null,-1),O=t("span",{class:"fi fi-es"},null,-1),T=t("span",{class:"fi fi-de"},null,-1),q=t("span",{class:"fi fi-kr"},null,-1),A=t("br",null,null,-1),W=t("span",{class:"fi fi-it"},null,-1),J=t("span",{class:"fi fi-id"},null,-1),X=t("span",{class:"fi fi-in"},null,-1),Y=t("span",{class:"fi fi-us"},null,-1),Z=t("span",{class:"fi fi-ke"},null,-1),ee=t("br",null,null,-1),te=t("span",{class:"fi fi-br"},null,-1),se=t("span",{class:"fi fi-tw"},null,-1),ne=t("span",{class:"fi fi-cn"},null,-1),oe=t("span",{class:"fi fi-hk"},null,-1),le=t("span",{class:"fi fi-ru"},null,-1);function ae(a,e,c,h,_,y){const d=p("LogoComponent"),k=p("router-link");return g(),v(D,{class:"flex flex-center"},{default:n(()=>[s(d),t("div",P,[t("div",K,[s(k,{to:"/gallery"},{default:n(()=>[s(o,{"no-caps":"",flat:"",class:"text-grey"},{default:n(()=>[i(" Gallery ")]),_:1})]),_:1}),i(" \xA0 "),t("a",U,[s(o,{"no-caps":"",flat:"",class:"text-grey"},{default:n(()=>[i(" ReadMe ")]),_:1})]),s(o,{"no-caps":"",flat:"",class:"text-grey",onClick:e[0]||(e[0]=l=>this.toggleDescDiv())},{default:n(()=>[i(" ClickMe ")]),_:1})]),t("div",M,[s(o,{onClick:e[1]||(e[1]=l=>this.playDesc("Eng-UK-Fem"))},{default:n(()=>[V]),_:1}),s(o,{onClick:e[2]||(e[2]=l=>this.playDesc("Eng-UK-Male"))},{default:n(()=>[I]),_:1}),s(o,{onClick:e[3]||(e[3]=l=>this.playDesc("\u65E5\u672C\u8A9E"))},{default:n(()=>[L]),_:1}),s(o,{onClick:e[4]||(e[4]=l=>this.playDesc("fran\xE7ais"))},{default:n(()=>[N]),_:1}),s(o,{onClick:e[5]||(e[5]=l=>this.playDesc("Nederlands"))},{default:n(()=>[F]),_:1}),G,s(o,{onClick:e[6]||(e[6]=l=>this.playDesc("polski"))},{default:n(()=>[Q]),_:1}),s(o,{onClick:e[7]||(e[7]=l=>this.playDesc("espa\xF1ol-US"))},{default:n(()=>[j]),_:1}),s(o,{onClick:e[8]||(e[8]=l=>this.playDesc("espa\xF1ol-ES"))},{default:n(()=>[O]),_:1}),s(o,{onClick:e[9]||(e[9]=l=>this.playDesc("Deutsch"))},{default:n(()=>[T]),_:1}),s(o,{onClick:e[10]||(e[10]=l=>this.playDesc("\uD55C\uAD6D\uC758"))},{default:n(()=>[q]),_:1}),A,s(o,{onClick:e[11]||(e[11]=l=>this.playDesc("italiano"))},{default:n(()=>[W]),_:1}),s(o,{onClick:e[12]||(e[12]=l=>this.playDesc("Bahasa Indonesia"))},{default:n(()=>[J]),_:1}),s(o,{onClick:e[13]||(e[13]=l=>this.playDesc("Google \u0939\u093F\u0928\u094D\u0926\u0940"))},{default:n(()=>[X]),_:1}),s(o,{onClick:e[14]||(e[14]=l=>this.playDesc("Eng-US"))},{default:n(()=>[Y]),_:1}),s(o,{onClick:e[15]||(e[15]=l=>this.playDesc("Kiswahili"))},{default:n(()=>[Z]),_:1}),ee,s(o,{onClick:e[16]||(e[16]=l=>this.playDesc("portugu\xEAs do Brasil"))},{default:n(()=>[te]),_:1}),s(o,{onClick:e[17]||(e[17]=l=>this.playDesc("\u4E2D\u6587 \uFF08\u81FA\u7063\uFF09"))},{default:n(()=>[se]),_:1}),s(o,{onClick:e[18]||(e[18]=l=>this.playDesc("\u4E2D\u6587 \uFF08\u4E2D\u56FD\u5927\u9646\uFF09"))},{default:n(()=>[ne]),_:1}),s(o,{onClick:e[19]||(e[19]=l=>this.playDesc("\u4E2D\u6587 \uFF08\u9999\u6E2F\uFF09"))},{default:n(()=>[oe]),_:1}),s(o,{onClick:e[20]||(e[20]=l=>this.playDesc("\u0440\u0443\u0441\u0441\u043A\u0438\u0439"))},{default:n(()=>[le]),_:1})])])]),_:1})}var ge=f(H,[["render",ae]]);export{ge as default};
