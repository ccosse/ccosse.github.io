import{c as Be,r as K,ap as je,a as E,w as pe,d as _,g as Ge,v as Fe,aq as De,Z as Ne,ad as ne,Y as ye,aa as re,aJ as Le,a1 as be,_ as Re,j as Me,k as h,F as g,q as t,n as l,H as U,p as We,aM as Oe,Q as k,s as e,G as n,ae as x,ai as te,af as z,aN as _e,ac as D,m as se}from"./index.d78dc266.js";import{d as Ye,Q as L,c as oe,C as ke}from"./ClosePopup.49edaa22.js";import{Q as v}from"./QCard.cc4cc1a5.js";import{Q as q}from"./QTooltip.8e86ec30.js";import{Q as He}from"./QCheckbox.6d803bc2.js";import{a as Je,Q as P,b as V}from"./QExpansionItem.9287f57d.js";import{u as Ze,a as Xe}from"./use-dark.04c1f649.js";import{b as $,Q as B}from"./QItemLabel.c6df29b5.js";import{Q as j}from"./QList.c1b55b31.js";import{Q as ae,a as ve}from"./QMenu.8536cc0c.js";import{c as et,Q as le,a as tt,b as st,d as ot}from"./copy-to-clipboard.77d29cb7.js";import{Q as at}from"./QMarkupTable.200e3139.js";import{Q as lt}from"./QPage.899e6d84.js";import{u as nt}from"./store.7c1513e4.js";import"./use-prevent-scroll.70d19141.js";import"./scroll.70181734.js";import"./use-timeout.e6243955.js";import"./use-tick.a628aa18.js";import"./use-model-toggle.df781ea4.js";import"./selection.d9200401.js";import"./use-checkbox.e4b7b604.js";import"./touch.70a9dd44.js";import"./use-cache.b0833c75.js";import"./firebase.dc843dde.js";import"./axios.84ae42e4.js";const rt=["none","strict","leaf","leaf-filtered"];var it=Be({name:"QTree",props:{...Ze,nodes:{type:Array,required:!0},nodeKey:{type:String,required:!0},labelKey:{type:String,default:"label"},childrenKey:{type:String,default:"children"},dense:Boolean,color:String,controlColor:String,textColor:String,selectedColor:String,icon:String,tickStrategy:{type:String,default:"none",validator:a=>rt.includes(a)},ticked:Array,expanded:Array,selected:{},noSelectionUnset:Boolean,defaultExpandAll:Boolean,accordion:Boolean,filter:String,filterMethod:Function,duration:Number,noConnectors:Boolean,noTransition:Boolean,noNodesLabel:String,noResultsLabel:String},emits:["update:expanded","update:ticked","update:selected","lazyLoad","afterShow","afterHide"],setup(a,{slots:d,emit:A}){const{proxy:R}=Ge(),{$q:N}=R,M=Xe(a,N),I=K({}),S=K(a.ticked||[]),m=K(a.expanded||[]);let Q={};je(()=>{Q={}});const c=E(()=>`q-tree q-tree--${a.dense===!0?"dense":"standard"}`+(a.noConnectors===!0?" q-tree--no-connectors":"")+(M.value===!0?" q-tree--dark":"")+(a.color!==void 0?` text-${a.color}`:"")),C=E(()=>a.selected!==void 0),we=E(()=>a.icon||N.iconSet.tree.icon),ie=E(()=>a.controlColor||a.color),W=E(()=>a.textColor!==void 0?` text-${a.textColor}`:""),xe=E(()=>{const o=a.selectedColor||a.color;return o?` text-${o}`:""}),Ce=E(()=>a.filterMethod!==void 0?a.filterMethod:(o,r)=>{const s=r.toLowerCase();return o[a.labelKey]&&o[a.labelKey].toLowerCase().indexOf(s)>-1}),T=E(()=>{const o={},r=(s,u)=>{const i=s.tickStrategy||(u?u.tickStrategy:a.tickStrategy),p=s[a.nodeKey],y=s[a.childrenKey]&&s[a.childrenKey].length>0,G=s.disabled!==!0&&C.value===!0&&s.selectable!==!1,w=s.disabled!==!0&&s.expandable!==!1,ze=i!=="none",H=i==="strict",ge=i==="leaf-filtered",X=i==="leaf"||i==="leaf-filtered";let ee=s.disabled!==!0&&s.tickable!==!1;X===!0&&ee===!0&&u&&u.tickable!==!0&&(ee=!1);let F=s.lazy;F===!0&&I.value[p]!==void 0&&Array.isArray(s[a.childrenKey])===!0&&(F=I.value[p]);const f={key:p,parent:u,isParent:y,lazy:F,disabled:s.disabled,link:s.disabled!==!0&&(G===!0||w===!0&&(y===!0||F===!0)),children:[],matchesFilter:a.filter?Ce.value(s,a.filter):!0,selected:p===a.selected&&G===!0,selectable:G,expanded:y===!0?m.value.includes(p):!1,expandable:w,noTick:s.noTick===!0||H!==!0&&F&&F!=="loaded",tickable:ee,tickStrategy:i,hasTicking:ze,strictTicking:H,leafFilteredTicking:ge,leafTicking:X,ticked:H===!0?S.value.includes(p):y===!0?!1:S.value.includes(p)};if(o[p]=f,y===!0&&(f.children=s[a.childrenKey].map(b=>r(b,f)),a.filter&&(f.matchesFilter!==!0?f.matchesFilter=f.children.some(b=>b.matchesFilter):f.noTick!==!0&&f.disabled!==!0&&f.tickable===!0&&ge===!0&&f.children.every(b=>b.matchesFilter!==!0||b.noTick===!0||b.tickable!==!0)===!0&&(f.tickable=!1)),f.matchesFilter===!0&&(f.noTick!==!0&&H!==!0&&f.children.every(b=>b.noTick)===!0&&(f.noTick=!0),X))){if(f.ticked=!1,f.indeterminate=f.children.some(b=>b.indeterminate===!0),f.tickable=f.tickable===!0&&f.children.some(b=>b.tickable),f.indeterminate!==!0){const b=f.children.reduce((me,$e)=>$e.ticked===!0?me+1:me,0);b===f.children.length?f.ticked=!0:b>0&&(f.indeterminate=!0)}f.indeterminate===!0&&(f.indeterminateNextState=f.children.every(b=>b.tickable!==!0||b.ticked!==!0))}return f};return a.nodes.forEach(s=>r(s,null)),o});pe(()=>a.ticked,o=>{S.value=o}),pe(()=>a.expanded,o=>{m.value=o});function O(o){const r=[].reduce,s=(u,i)=>{if(u||!i)return u;if(Array.isArray(i)===!0)return r.call(Object(i),s,u);if(i[a.nodeKey]===o)return i;if(i[a.childrenKey])return s(null,i[a.childrenKey])};return s(null,a.nodes)}function qe(){return S.value.map(o=>O(o))}function Se(){return m.value.map(o=>O(o))}function Te(o){return o&&T.value[o]?T.value[o].expanded:!1}function Ae(){a.expanded!==void 0?A("update:expanded",[]):m.value=[]}function de(){const o=m.value,r=s=>{s[a.childrenKey]&&s[a.childrenKey].length>0&&s.expandable!==!1&&s.disabled!==!0&&(o.push(s[a.nodeKey]),s[a.childrenKey].forEach(r))};a.nodes.forEach(r),a.expanded!==void 0?A("update:expanded",o):m.value=o}function J(o,r,s=O(o),u=T.value[o]){if(u.lazy&&u.lazy!=="loaded"){if(u.lazy==="loading")return;I.value[o]="loading",Array.isArray(s[a.childrenKey])!==!0&&(s[a.childrenKey]=[]),A("lazyLoad",{node:s,key:o,done:i=>{I.value[o]="loaded",s[a.childrenKey]=Array.isArray(i)===!0?i:[],Fe(()=>{const p=T.value[o];p&&p.isParent===!0&&ue(o,!0)})},fail:()=>{delete I.value[o],s[a.childrenKey].length===0&&delete s[a.childrenKey]}})}else u.isParent===!0&&u.expandable===!0&&ue(o,r)}function ue(o,r){let s=m.value;const u=a.expanded!==void 0;if(u===!0&&(s=s.slice()),r){if(a.accordion&&T.value[o]){const i=[];T.value[o].parent?T.value[o].parent.children.forEach(p=>{p.key!==o&&p.expandable===!0&&i.push(p.key)}):a.nodes.forEach(p=>{const y=p[a.nodeKey];y!==o&&i.push(y)}),i.length>0&&(s=s.filter(p=>i.includes(p)===!1))}s=s.concat([o]).filter((i,p,y)=>y.indexOf(i)===p)}else s=s.filter(i=>i!==o);u===!0?A("update:expanded",s):m.value=s}function Pe(o){return o&&T.value[o]?T.value[o].ticked:!1}function Y(o,r){let s=S.value;const u=a.ticked!==void 0;u===!0&&(s=s.slice()),r?s=s.concat(o).filter((i,p,y)=>y.indexOf(i)===p):s=s.filter(i=>o.includes(i)===!1),u===!0&&A("update:ticked",s)}function Ke(o,r,s){const u={tree:R,node:o,key:s,color:a.color,dark:M.value};return be(u,"expanded",()=>r.expanded,i=>{i!==r.expanded&&J(s,i)}),be(u,"ticked",()=>r.ticked,i=>{i!==r.ticked&&Y([s],i)}),u}function ce(o){return(a.filter?o.filter(r=>T.value[r[a.nodeKey]].matchesFilter):o).map(r=>Ie(r))}function Ve(o){if(o.icon!==void 0)return _(ne,{class:"q-tree__icon q-mr-sm",name:o.icon,color:o.iconColor});const r=o.img||o.avatar;if(r)return _("img",{class:`q-tree__${o.img?"img":"avatar"} q-mr-sm`,src:r})}function Qe(){A("afterShow")}function Ee(){A("afterHide")}function Ie(o){const r=o[a.nodeKey],s=T.value[r],u=o.header&&d[`header-${o.header}`]||d["default-header"],i=s.isParent===!0?ce(o[a.childrenKey]):[],p=i.length>0||s.lazy&&s.lazy!=="loaded";let y=o.body&&d[`body-${o.body}`]||d["default-body"];const G=u!==void 0||y!==void 0?Ke(o,s,r):null;return y!==void 0&&(y=_("div",{class:"q-tree__node-body relative-position"},[_("div",{class:W.value},[y(G)])])),_("div",{key:r,class:`q-tree__node relative-position q-tree__node--${p===!0?"parent":"child"}`},[_("div",{class:"q-tree__node-header relative-position row no-wrap items-center"+(s.link===!0?" q-tree__node--link q-hoverable q-focusable":"")+(s.selected===!0?" q-tree__node--selected":"")+(s.disabled===!0?" q-tree__node--disabled":""),tabindex:s.link===!0?0:-1,onClick:w=>{fe(o,s,w)},onKeypress(w){De(w)!==!0&&(w.keyCode===13?fe(o,s,w,!0):w.keyCode===32&&Z(o,s,w,!0))}},[_("div",{class:"q-focus-helper",tabindex:-1,ref:w=>{Q[s.key]=w}}),s.lazy==="loading"?_(Ne,{class:"q-tree__spinner",color:ie.value}):p===!0?_(ne,{class:"q-tree__arrow"+(s.expanded===!0?" q-tree__arrow--rotate":""),name:we.value,onClick(w){Z(o,s,w)}}):null,s.hasTicking===!0&&s.noTick!==!0?_(He,{class:"q-tree__tickbox",modelValue:s.indeterminate===!0?null:s.ticked,color:ie.value,dark:M.value,dense:!0,keepColor:!0,disable:s.tickable!==!0,onKeydown:ye,"onUpdate:modelValue":w=>{Ue(s,w)}}):null,_("div",{class:"q-tree__node-header-content col row no-wrap items-center"+(s.selected===!0?xe.value:W.value)},[u?u(G):[Ve(o),_("div",o[a.labelKey])]])]),p===!0?a.noTransition===!0?_("div",{class:"q-tree__node-collapsible"+W.value,key:`${r}__q`},[y,_("div",{class:"q-tree__children"+(s.disabled===!0?" q-tree__node--disabled":"")},s.expanded?i:null)]):_(Je,{duration:a.duration,onShow:Qe,onHide:Ee},()=>re(_("div",{class:"q-tree__node-collapsible"+W.value,key:`${r}__q`},[y,_("div",{class:"q-tree__children"+(s.disabled===!0?" q-tree__node--disabled":"")},i)]),[[Le,s.expanded]])):y])}function he(o){const r=Q[o];r&&r.focus()}function fe(o,r,s,u){u!==!0&&r.selectable!==!1&&he(r.key),C.value&&r.selectable?a.noSelectionUnset===!1?A("update:selected",r.key!==a.selected?r.key:null):r.key!==a.selected&&A("update:selected",r.key===void 0?null:r.key):Z(o,r,s,u),typeof o.handler=="function"&&o.handler(o)}function Z(o,r,s,u){s!==void 0&&ye(s),u!==!0&&r.selectable!==!1&&he(r.key),J(r.key,!r.expanded,o,r)}function Ue(o,r){if(o.indeterminate===!0&&(r=o.indeterminateNextState),o.strictTicking)Y([o.key],r);else if(o.leafTicking){const s=[],u=i=>{i.isParent?(r!==!0&&i.noTick!==!0&&i.tickable===!0&&s.push(i.key),i.leafTicking===!0&&i.children.forEach(u)):i.noTick!==!0&&i.tickable===!0&&(i.leafFilteredTicking!==!0||i.matchesFilter===!0)&&s.push(i.key)};u(o),Y(s,r)}}return a.defaultExpandAll===!0&&de(),Object.assign(R,{getNodeByKey:O,getTickedNodes:qe,getExpandedNodes:Se,isExpanded:Te,collapseAll:Ae,expandAll:de,setExpanded:J,isTicked:Pe,setTicked:Y}),()=>{const o=ce(a.nodes);return _("div",{class:c.value},o.length===0?a.filter?a.noResultsLabel||N.lang.tree.noResults:a.noNodesLabel||N.lang.tree.noNodes:o)}}});const dt=Me({name:"CoursesDashboard",setup(){return{store:nt(),carousel:K(""),slide:K(null),confirm:K(!1),showGradebook:K(!1),splitterModel:K(20),tab:K("introduction"),expanded:K(["You Are Here","Courses","Assignments","Pages","Enrollment"]),simple:[{label:"You Are Here",icon:"ads_click",children:[{label:"My Courses",children:[{label:"Enrollment",children:[{label:"Students"}]},{label:"Gradebook"},{label:"Assignments",children:[{label:"Stepper"},{label:"Pages",children:[{label:"Meta Info"},{label:"Short Text"},{label:"Images"}]}]}]}]}]}},mounted(){console.log("CoursesDashboard mounted"),this.store.aid=null,this.store.carousel=this.carousel},methods:{keepPage(){this.store.showPreview=!1},toggleGradebook(){console.log("toggleGradebook"),this.showGradebook?this.showGradebook=!1:this.showGradebook=!0},deleteSelectedObject(){this.store.aid!==null&&this.store.aid>-1?this.store.deleteAssignment(this.store.ck,this.store.aid):this.store.ck!==null&&this.store.deleteCourse(this.store.ck)},editCB(){if(this.store.aid!==null)this.store.pgIdx=-1;else{const a=Object.keys(this.store.currentCourse.assignments);a.length>0?(this.store.aid=a[0],this.store.pgIdx=0):this.store.aid=-1}this.store.router.push("/courses/assignments")},slideChanged(a){console.log("CourseDashboard.slideChanged ck = ",a),this.store.ck=a},viewerCB(){if(console.log("CourseDash viewerCB setting pgIdx 0 before /viewer"),this.store.currentAssignment.pages.length===0){this.store.notify({msg:"The requested assignment has no pages!"});return}this.store.pgIdx=0,this.store.router.replace("/viewer")},copyCourseKeyCB(){et(this.store.ck).then(()=>{console.log("ck copied to clipboard",this.store.ck);const a=`The course-key ${this.store.ck} was copied to clipboard`;this.store.notify({msg:a})}).catch(a=>{console.log(a)})}}}),ut={key:0,class:"q-ml-sm"},ct={key:1,class:"q-ml-sm"},ht={key:0},ft=e("div",{class:"justify-center"},[e("div",{class:"text-panel q-mx-md q-mb-xs q-mt-md text-h6",style:{"text-align":"center"}}," Welcome to Reading Edge! ")],-1),gt={class:"row justify-center"},mt={key:0,id:"wpIframeDiv",class:"flex flex-center col-12 col-md-8"},pt={class:"text-h6"},yt=e("br",null,null,-1),bt={key:1,class:"q-ma-md column col col-md-6 text-justify"},_t={class:"full-width flex flex-center"},kt=e("br",null,null,-1),vt=e("br",null,null,-1),wt=e("br",null,null,-1),xt=e("p",{class:"q-ma-md"},[n(" This will automatically change your role to "),e("i",null,"Student"),n(" and launch you into the Stepper (see Map) with a random Assignment from the Demo Course (right sidebar). Use the up-arrow (navbar, hidden for top-level) to ascend the hierarchy. Use the role-change button (navbar) to change to Teacher role. Student and Teacher share the same hierarchy but with different permissions. ")],-1),Ct={class:""},qt=e("p",null,"May 1, 2023 Las Vegas, NV",-1),St=e("p",null,[n(' Hello! Reading Edge leverages Wikipedia content to generate or build "paragraph reconstruction" assignments for your child or students. Each page of an assignment contains a short Wikipedia summary passage and images. The student reads the original passage and then reconstructs it by replacing a random handful of words in their correct places. The system awards one point per correct word placed. Use the '),e("i",null,"paragraph replacement"),n(" exercise to keep kids accountable and the "),e("i",null,"rewards system"),n(" to bring out their best efforts. ")],-1),Tt=e("p",null,[n(" The paragraph reconstruction exercise that is central to Reading Edge was not originally developed to "),e("i",{class:"yellow"},"improve"),n(" reading so much as to just "),e("i",{class:"yellow"},"prove"),n(" that something had been read at all. It turns out, however, that if anyone successfully reconstructs a paragraph with 15-20% of the words missing then you can consider that as "),e("i",{class:"yellow"},"proof"),n(" that they read carefully and must have thought about context, punctuation and grammar. By offering an incentive to complete such exercises it is possible to train kids to read carefully and think about grammar, punctuation and context. ")],-1),At=e("p",null,[n(" Making this usable for others has been an elusive personal goal for years. The missing piece was "),e("i",null,"content generation"),n(" and that has been solved by accessing Wikipedia (WP). With Reading Edge a teacher can create an engaging, reliable assignment in 30 seconds that will occupy a student for 30 minutes. It's easy, too, because every account has both a student-side and a teacher-side. And since it accesses Wikipedia directly, Reading Edge only needs to store links to WP resources. ")],-1),Pt=e("p",null,[n(" As you know, Wikipedia is full of beautiful, high-resolution and intriguing pictures. And those can help generate curiosity and interest such that students are suddenly "),e("i",{class:"yellow"},"eager"),n(" to read in order to find out more. Reading Edge awards one raw point for each word correctly placed. It is intended that you, the parent or teacher, define the exchange rate. Last but certainly not least, thank you for supporting this "),e("b",null,"Independent Education Software"),n(" effort! ")],-1),Kt={class:"text-center"},Vt={class:"text-white q-mt-lg",href:"https://youtu.be/-ATGbQFpa4I",target:"_blank"},Qt=e("p",null,[n(" Logging into Reading Edge automatically creates an account for you and allocates some initial object space, as well. Every account has two roles: "),e("i",{class:"yellow"},"teacher"),n(" and "),e("i",{class:"yellow"},"student"),n(". As a "),e("i",null,"teacher"),n(" you create Courses and build Assignments. Each Course has a course-key which you simply give to anyone you would like to invite and they can use it to enroll themselves when they login. With this design you can also enroll yourself in your own Course, and most of the code can be shared by both roles. Referring to the tree below, notice that you come in at the "),e("i",{class:"yellow"},"top"),n(", yet all of the content is at the "),e("i",{class:"yellow"},"bottom"),n(", in the Pages. So, to work on things you can either drill-down when using the "),e("i",null,"Builder"),n(" or when the "),e("i",null,"Assignment Generator"),n(" it will leave you on the last page of the generated assignment when it completes. ")],-1),Et=e("p",null," Generating an Assignment is really the lone convenience feature at the moment, as it is both simple and powerful. Basically you tell it how many pages you want, select a language and press the button. A popup then appears where you enter comma-separated guide-words. If you requested 20 pages, then expect to delete up to half of them. Much of your success with the Generator button comes down to your ability to choose the guide-words that get the kind of pages you're looking for. Ultimately your guide-words are the AI behind the Generator. ",-1),It=e("p",null,[n(" Another key concept throughout is that things loaded from the left sidebar need a "),e("i",null,"destination"),n(" to "),e("i",null,"load-into"),n(". You cannot load a page while looking at a Course, for example. Rather, you must be inside of an Assignment and then anything you select on the left will load into a new Page appended to the current Assignment. ")],-1),Ut=e("p",null," When you use the Generate Assignment button from the Course-level, you can sit back and watch as the process first creates a new assignment, then switches into it and successively loads its search results into newly created Pages until finished. ",-1),zt=e("p",null," At that point you can just skim through the generated pages using the thumbnails across the top of the Dashboard and delete pages that don't look relevant or lack appealing images. In this way you can spend as little as 30 seconds to create a large amount of quality reading summaries that will take 30 minutes, or more, to complete as an Assignment. This procedure is covered in the silent video, intoduction section. ",-1),$t=e("p",null," For more control over your Assignment pages you can build manually. The tools at your disposal for this are your own saved images and bookmarks, the On This Day articles, and your search results. Each item you select on the left will load into a newly provisioned Page object. When you manipulate Pages and Assignments you are directly manipulating (changing) the data stored in your browser's memory, but not the database. Saving to the database requires you to manually push the save button. ",-1),Bt=e("p",null,' If you accidentally delete something that you really want to save, then just logout and login again and the database copy will be back in your browser. Unless you "saved" after you "deleted", then its gone. ',-1),jt=e("p",null," But assignments are cheap! Or they are supposed to be. Consider the gradebook for a moment. Each Assignment you create under a Course can be repeated multiple times to earn more and more points. While there will probably be a toggle for this repeatability later, at the moment you would just delete the Assignment if you don't want them to earn points by repeating it any more. ",-1),Gt=e("p",null,[n(' You can change the summary text that Wikipedia provides, or replace it with your own. The image that is currently selected when you save becomes the default image of that Page. As described above, since you are manipulating the in-memory data directly, you could make changes to a whole set of Pages first, and then save the whole lot with one save. In other words, the data is not "coming to you" when you change pages, and being lost when you change-away, but rather you are going '),e("i",null,"to"),n(" the data and changing it, then changing to another piece of data and working, and so-on. ")],-1),Ft=e("iframe",{width:"100%",src:"https://www.youtube.com/embed/-ATGbQFpa4I",title:"Reading Edge is more than a Grammar and Context Trainer",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,-1),Dt=e("p",null," This video has no sound but does illustrate the process of assignment generation and taking an assignment. More docu-video content should be coming soon. Thanks for your patience. ",-1),Nt=e("p",null,' The default quotas are intended to make Reading Edge free for home use. It is necessary to have some quotas just to prevent abuse. The quotas are arbitrary, of course, and can be incresed if people need that. A smaller, free account will always remain possible. Currently everything should be regarded as "For Entertainment Purposes Only". A more mobile-friendly version is in the works. Please consider supporting today. ',-1),Lt=e("p",null,[n(' Reading Edge is currently under active and continuous development, and will only improve with time. At this point it is deemed "usable" and the fledgling app needs to be kicked out of the nest! Your subscription directly supports '),e("i",{class:"yellow"},"this"),n(" independent software effort. If you have any questions or difficulties please don't hesitate to contact me directly. You will be helping to uncover an issue that caused a problem. Let's fix it. Thanks! ")],-1),Rt=e("p",null,"Contact: charlie@readingedge.org",-1),Mt=e("p",null," On mobile devices you can use FullScreen and LandScape. The FullScreen button is located in the Preferences section on left sidebar. This displays the top-level documentation page alright, but overall the app needs more space than available on mobile screens. Planning to make builder interface similar to YouTube Studio Caption editor, namely with + buttons in the corners of cards, and the more columnar layout. ",-1),Wt=e("p",null," Some guide-word ideas: world heritage sites in syria, tall wooden ships, thai cuisine, coral reefs of, cities, buildings, boeing jets, steamship, railroad, airport, tepui, amazonia, eruption, volcanic, cetaecean, jurrassic, saurus, archipelago, islands, canyon, cliffs, tropical fish, glacier, orca, culture, waterfall, falls, range, iguazu, launch, nasa mission ",-1),Ot=e("p",null,` Try this: search for the same thing in different languages and you'll get different sets of images and text, as well! Also, consider using search terms in whichever language is set. For example, instead of entering "waterfall" in a French search, use the French word, "chutes d'eau". When playing around with languages it is useful to keep Google Translate open in another tab. There are also available-page-translation links on the meta-info panel for each page. `,-1),Yt=e("p",null," When your role is 'Teacher' and you are testing an Assignment in the Stepper, the correct answer for each word-choice is the LAST answer (so you don't have to do the exercise yourself). You can also just click the Step-4 button as role = 'Teacher' and bypass the current Page. ",-1),Ht=e("p",null," The intended way to use Bookmarks and Images is as a temporary collection in preparation of putting-together an assignment. ",-1),Jt=e("p",null,null,-1),Zt={class:"flex flex-center",style:{}},Xt=e("a",{class:"text-white q-px-md",href:"https://paypal.me/asymptopia?country.x=US&locale.x=en_US",target:"_blank"},"V.I.P.",-1),es=e("a",{class:"text-white q-px-md",href:"https://github.com/sponsors/ccosse/",target:"_blank"},"G.I.P.",-1),ts={key:1,class:"justify-center absolute-top"},ss={class:"text-panel justify-center q-mx-md q-mb-xs q-mt-md text-h6"},os={key:0,class:"cursor-pointer"},as={key:0,class:"q-px-md row content-center"},ls={key:0,id:"wpIframeDiv",class:"flex flex-center col-12 col-md-8"},ns=e("div",{class:"text-h6"},"Page Preview",-1),rs=e("br",null,null,-1),is={key:1,class:"embed-panel col-12 col-md-6 assignment",style:{"z-index":"5","max-height":"30vh","font-size":"12pt"}},ds={class:"row content-start"},us={key:0},cs=e("tr",null,[e("th",{colSpan:"100"},[e("div",{class:"text-center val"},"Assignments")])],-1),hs=e("th",{class:"val"},"Student",-1),fs={class:"hidden"},gs={class:"key"},ms={class:"hidden"},ps={key:0},ys={key:1},bs={class:"hidden"},_s={key:1},ks={width:"100%",class:"meta-table"},vs=e("tr",null,[e("th",{colSpan:"100"},[e("div",{class:"text-center val"},"Assignments")])],-1),ws=e("th",{class:"val"},"Student",-1),xs={class:"hidden"},Cs={class:"key"},qs={key:0},Ss={key:2,class:"embed-panel col-12 col-md-5 assignment",style:{"z-index":"5","max-height":"30vh",height:"30vh"}},Ts={class:"q-px-lg row content-start"},As={class:"meta-table"},Ps=e("th",{class:"key"},"Title",-1),Ks={class:"val"},Vs={class:"cursor-pointer"},Qs=e("td",{class:"key"},"Cover Url",-1),Es={class:"cursor-pointer val"},Is=e("td",{class:"key"},"Assignments",-1),Us={class:"val"},zs=e("td",{class:"key"},"Enrollment",-1),$s={class:"val"},Bs=e("td",{class:"key"},"Created",-1),js={class:"val"},Gs=e("td",{class:"key"},"Updated",-1),Fs={class:"val"},Ds={key:0,style:{"text-align":"center"}},Ns=e("br",null,null,-1),Ls=e("br",null,null,-1),Rs={class:"control-panel q-pa-sm row justify-center no-wrap flex flex-center",style:{overflow:"auto"}},Ms={key:0};function Ws(a,d,A,R,N,M){const I=We("q-list-item");return h(),g(U,null,[t(Ye,{modelValue:a.confirm,"onUpdate:modelValue":d[1]||(d[1]=S=>a.confirm=S),persistent:"",class:"z-max confirm-delete-obj"},{default:l(()=>[t(v,null,{default:l(()=>[t(L,{class:"row items-center"},{default:l(()=>[t(Oe,{icon:"delete",color:"negative","text-color":"white"}),this.store.aid!==null&&this.store.aid>-1?(h(),g("span",ut,"Confirm delete assignment?")):(h(),g("span",ct,"Confirm delete entire course?"))]),_:1}),t(oe,{align:"right",class:"text-white"},{default:l(()=>[re(t(k,{flat:"",label:"Cancel"},null,512),[[ke]]),re(t(k,{flat:"",label:"Delete",onClick:d[0]||(d[0]=S=>this.deleteSelectedObject())},null,512),[[ke]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(lt,{style:{height:"44vh"}},{default:l(()=>{var S;return[this.store.ck?(h(),g("div",ts,[e("div",ss,[n(" Course: "),this.store.currentCourse?(h(),g("span",os,[n(x((S=this.store.currentCourse)==null?void 0:S.title)+" ",1),t(le,{modelValue:this.store.currentCourse.title,"onUpdate:modelValue":d[7]||(d[7]=m=>this.store.currentCourse.title=m),"auto-save":"",style:{maxWidth:"320px"}},{default:l(m=>[t(ae,{modelValue:m.value,"onUpdate:modelValue":Q=>m.value=Q,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:te(m.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["modelValue"])])):z("",!0)]),this.store.ck?(h(),g("div",as,[t(tt,{class:"q-ma-md full-width",animated:"",modelValue:this.store.ck,"onUpdate:modelValue":[d[17]||(d[17]=m=>this.store.ck=m),this.slideChanged],infinite:"","control-type":"arrows",ref:"carousel",height:"80vh"},{control:l(()=>[t(st,{position:"bottom",offset:[0,0]},{default:l(()=>[e("div",Rs,[t(k,{push:"",round:"",class:"dash-button","text-color":"white",icon:"arrow_left",style:_e({height:"33.5px",width:"33.5px"}),onClick:d[13]||(d[13]=m=>a.$refs.carousel.previous())},{default:l(()=>[t(q,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[t(v,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[n(" Go to previous course ")]),_:1})]),_:1})]),_:1},8,["style"]),t(k,{"no-caps":"",class:"on-right dash-button",icon:"table_chart",onClick:d[14]||(d[14]=m=>this.toggleGradebook())},{default:l(()=>[t(q,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[t(v,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[n(" View course gradebook ")]),_:1})]),_:1})]),_:1}),this.store.role==="teacher"?(h(),g("span",Ms,[t(k,{"no-caps":"",icon:"add",class:"on-right dash-button",onClick:d[15]||(d[15]=m=>this.store.newCourse())},{default:l(()=>[t(q,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[t(v,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[n(" Create a new course ")]),_:1})]),_:1})]),_:1})])):z("",!0),t(k,{push:"",round:"",class:"on-right dash-button","text-color":"white",icon:"arrow_right",style:_e({height:"33.5px",width:"33.5px"}),onClick:d[16]||(d[16]=m=>a.$refs.carousel.next())},{default:l(()=>[t(q,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[t(v,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[n(" Go to next course ")]),_:1})]),_:1})]),_:1},8,["style"])])]),_:1})]),default:l(()=>[(h(!0),g(U,null,D(this.store.courses,(m,Q)=>(h(),se(ot,{class:"text-panel row content-center justify-center",key:Q,name:Q,"img-src":m.coverUrl},{default:l(()=>[this.store.showPreview?(h(),g("div",ls,[t(v,{"no-padding":"",class:"full-width",style:{height:"63vh"}},{default:l(()=>[t(L,null,{default:l(()=>[ns]),_:1}),t(L,{class:"full-width",id:"wpIframeContainer",style:{padding:"0px 0px"}}),t(oe,{align:"right"},{default:l(()=>[t(k,{outline:"",label:"Cancel",onClick:d[8]||(d[8]=c=>this.store.showPreview=!1)}),t(k,{id:"keepB",outline:"",label:"New Assignment + Append Page",onClick:d[9]||(d[9]=c=>this.keepPage())},{default:l(()=>[t(q,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[t(v,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[n(" A new Assignment will be created when "),rs,n(" loading results from the Course level ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])):this.showGradebook?(h(),g("table",is,[t(ve,null,{default:l(()=>[n("Course Gradebook")]),_:1}),e("tr",null,[e("td",ds,[this.store.role==="teacher"?(h(),g("span",us,[t(at,{dense:"",class:"meta-table",style:{"font-size":"12pt"}},{default:l(()=>[cs,e("tr",null,[hs,(h(!0),g(U,null,D(this.store.courses[this.store.ck].assignments,(c,C)=>(h(),g("th",{style:{"text-align":"center"},key:c,class:"key"},[n(x(c.title)+" ",1),e("span",fs,x(C),1)]))),128))]),(h(!0),g(U,null,D(this.store.courses[this.store.ck].enrollment,c=>(h(),g("tr",{key:c.name},[e("td",gs,[n(x(c.name)+" ",1),e("span",ms,x(a.sidx),1)]),(h(!0),g(U,null,D(this.store.courses[this.store.ck].assignments,C=>(h(),g("td",{style:{"text-align":"center"},class:"val",key:C},[C.scores&&C.scores[c.emailKey]?(h(),g("span",ps,x(C.scores[c.emailKey]),1)):(h(),g("span",ys,"-")),n(),e("span",bs,x(a.aidx),1)]))),128))]))),128))]),_:2},1024)])):(h(),g("span",_s,[e("table",ks,[vs,e("tr",null,[ws,(h(!0),g(U,null,D(this.store.courses[this.store.ck].assignments,(c,C)=>(h(),g("th",{key:c,class:"key"},[n(x(c.title)+" ",1),e("span",xs,x(C),1)]))),128))]),e("tr",null,[e("td",Cs,x(this.store.userSnapshot.profile.name),1),(h(!0),g(U,null,D(this.store.courses[this.store.ck].assignments,c=>(h(),g("td",{class:"val",key:c},[c.scores&&c.scores[this.store.emailKey]?(h(),g("span",qs,x(c.scores[this.store.emailKey]),1)):z("",!0)]))),128))])])]))])])])):(h(),g("table",Ss,[t(ve,null,{default:l(()=>[n("Course")]),_:1}),e("tr",null,[e("td",Ts,[e("table",As,[e("tr",null,[Ps,e("td",Ks,[e("div",Vs,[n(x(this.store.currentCourse.title)+" ",1),t(le,{modelValue:this.store.courses[this.store.ck].title,"onUpdate:modelValue":c=>this.store.courses[this.store.ck].title=c,"auto-save":""},{default:l(c=>[t(ae,{modelValue:c.value,"onUpdate:modelValue":C=>c.value=C,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:te(c.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])])]),e("tr",null,[Qs,e("td",null,[e("div",Es,[n(" Change "),t(le,{modelValue:this.store.courses[this.store.ck].coverUrl,"onUpdate:modelValue":c=>this.store.courses[this.store.ck].coverUrl=c,"auto-save":""},{default:l(c=>[t(ae,{modelValue:c.value,"onUpdate:modelValue":C=>c.value=C,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:te(c.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])])]),e("tr",null,[Is,e("td",Us,x(Object.keys(this.store.currentCourse.assignments).length),1)]),e("tr",null,[zs,e("td",$s,x(Object.keys(this.store.currentCourse.enrollment).length),1)]),e("tr",null,[Bs,e("td",js,x(this.store.currentCourse.created),1)]),e("tr",null,[Gs,e("td",Fs,x(this.store.currentCourse.updated),1)])])])]),e("tr",null,[e("td",null,[this.store.role==="teacher"?(h(),g("div",Ds,[t(k,{"no-caps":"",icon:"delete",class:"on-right dash-button",onClick:d[10]||(d[10]=c=>a.confirm=!0)},{default:l(()=>[t(q,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[t(v,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[n(" Delete the selected course ")]),_:1})]),_:1})]),_:1}),this.store.ck!==null&&(this.store.aid===null||this.store.aid===-1)?(h(),se(k,{key:0,"no-caps":"",class:"dash-button on-right",onClick:d[11]||(d[11]=c=>this.copyCourseKeyCB()),icon:"key"},{default:l(()=>[t(q,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[t(v,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[n(" Copy the course-key to clipboard, then"),Ns,n(" share the course-key with whoever you"),Ls,n(" want to enroll. ")]),_:1})]),_:1})]),_:1})):z("",!0),t(k,{"no-caps":"",icon:"save",class:"on-right dash-button",onClick:c=>this.store.commitCourse(this.store.ck)},{default:l(()=>[t(q,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[t(v,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[n(" Save current course to cloud ")]),_:1})]),_:1})]),_:2},1032,["onClick"]),this.store.ck!==null?(h(),se(k,{key:1,"no-caps":"",icon:"east",class:"dash-button",onClick:d[12]||(d[12]=c=>this.editCB())},{default:l(()=>[t(q,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[t(v,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[n(" Go to the assignments for selected course ")]),_:1})]),_:1})]),_:1})):z("",!0)])):z("",!0)])])]))]),_:2},1032,["name","img-src"]))),128))]),_:1},8,["modelValue","onUpdate:modelValue"])])):z("",!0)])):(h(),g("div",ht,[ft,e("div",gt,[this.store.showPreview?(h(),g("div",mt,[t(v,{"no-padding":"",class:"full-width",style:{height:"63vh"}},{default:l(()=>[t(L,null,{default:l(()=>[e("div",pt,[n("Page Preview "),t(k,{round:"",class:"float-right",icon:"close",onClick:d[2]||(d[2]=m=>this.store.showPreview=!1)})])]),_:1}),t(L,{class:"full-width",id:"wpIframeContainer",style:{padding:"0px 0px"}}),t(oe,{align:"right"},{default:l(()=>[t(k,{outline:"",label:"Cancel",onClick:d[3]||(d[3]=m=>this.store.showPreview=!1)}),t(k,{id:"keepB",outline:"",label:"New Course, Assignment and Page",onClick:d[4]||(d[4]=m=>this.keepPage())},{default:l(()=>[t(q,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[t(v,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[n(" A new Course and new Assignment will be created "),yt,n(" when loading results from top level ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])):(h(),g("div",bt,[t(P,{label:"Map","default-opened":""},{default:l(()=>[t(v,{flat:"",class:"q-mx-md q-px-md cursor-pointer flex flex-center transparent"},{default:l(()=>[t(it,{nodes:a.simple,"node-key":"label",expanded:a.expanded,"onUpdate:expanded":d[5]||(d[5]=m=>a.expanded=m),style:{backgroundColor:"#3330"}},null,8,["nodes","expanded"])]),_:1})]),_:1}),t(V),t(P,{label:"Quickstart",group:"somegroup"},{default:l(()=>[e("div",_t,[t(v,{flat:"",bordered:"",class:"q-ma-md q-pa-md cursor-pointer tile-component flex flex-center",onClick:d[6]||(d[6]=m=>this.store.randDemoCB()),style:{width:"200px",height:"200px"}},{default:l(()=>[t(ne,{name:"play_circle_outline",class:"text-h1"}),t(q,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[t(v,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[n(" Take Random Demo Assignment @Viewer"),kt,n("Changes Role to Student"),vt,n(" Use Navbar Up-Button to return Home"),wt,n(" Use Navbar Role-Button to change role back to Teacher ")]),_:1})]),_:1})]),_:1}),xt])]),_:1}),t(V),t(P,{label:"Introduction",group:"somegroup"},{default:l(()=>[t($,null,{default:l(()=>[t(B,null,{default:l(()=>[e("div",Ct,[qt,St,Tt,At,Pt,e("div",Kt,[e("a",Vt,[t(k,{class:"bg-primary",icon:"ondemand_video",size:"lg"}),t(q,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[t(v,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[n(" A silent movie ")]),_:1})]),_:1})])])])]),_:1})]),_:1})]),_:1}),t(V),t(P,{label:"Concepts",group:"somegroup"},{default:l(()=>[t(j,null,{default:l(()=>[t($,null,{default:l(()=>[t(B,null,{default:l(()=>[Qt]),_:1})]),_:1})]),_:1})]),_:1}),t(V),t(P,{label:"Generator",group:"somegroup"},{default:l(()=>[t(j,null,{default:l(()=>[t($,null,{default:l(()=>[t(B,null,{default:l(()=>[Et,It,Ut,zt]),_:1})]),_:1})]),_:1})]),_:1}),t(V),t(P,{label:"Builder",group:"somegroup"},{default:l(()=>[t(j,null,{default:l(()=>[t($,null,{default:l(()=>[t(B,null,{default:l(()=>[$t,Bt,jt,Gt]),_:1})]),_:1})]),_:1})]),_:1}),t(V),t(P,{label:"Video",group:"somegroup"},{default:l(()=>[t(j,null,{default:l(()=>[t(I,null,{default:l(()=>[Ft,Dt]),_:1})]),_:1})]),_:1}),t(V),t(P,{label:"Accounts",group:"somegroup"},{default:l(()=>[t(j,null,{default:l(()=>[t($,null,{default:l(()=>[t(B,null,{default:l(()=>[Nt,Lt,Rt]),_:1})]),_:1})]),_:1})]),_:1}),t(V),t(P,{label:"Suggestions",group:"somegroup"},{default:l(()=>[t(j,null,{default:l(()=>[t($,null,{default:l(()=>[t(B,null,{default:l(()=>[Mt,Wt,Ot,Yt,Ht,Jt]),_:1})]),_:1})]),_:1})]),_:1}),t(V),t(P,{label:"V.I.P.",group:"somegroup"},{default:l(()=>[t(j,null,{default:l(()=>[t($,null,{default:l(()=>[t(B,null,{default:l(()=>[e("div",Zt,[e("table",null,[e("tr",null,[e("td",null,[t(k,{class:"bg-blue text-white",icon:"auto_awesome","icon-right":"auto_awesome"},{default:l(()=>[Xt]),_:1})])]),e("tr",null,[e("td",null,[t(k,{class:"q-mt-md bg-blue text-white",icon:"auto_awesome","icon-right":"auto_awesome"},{default:l(()=>[es]),_:1})])])])])]),_:1})]),_:1})]),_:1})]),_:1})]))])]))]}),_:1})],64)}var ko=Re(dt,[["render",Ws]]);export{ko as default};
