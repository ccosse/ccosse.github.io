import{c as Pe,r as Q,at as Be,a as U,w as me,d as _,g as $e,v as je,ao as Ge,Z as Fe,a9 as ae,Y as ge,ae as le,aJ as De,a1 as pe,_ as Ne,j as Le,k as f,F as g,q as o,n as l,H as z,p as Re,aM as Me,Q as x,s as e,G as r,aa as v,ai as ee,ab as P,aN as ye,a8 as D,m as te}from"./index.c0c677b0.js";import{d as We,Q as Oe,c as Ye,C as be}from"./ClosePopup.a0f3986d.js";import{Q as C}from"./QCard.942b27f7.js";import{Q as He}from"./QCheckbox.a24b6f23.js";import{a as Je,Q as A,b as V}from"./QExpansionItem.4876d4bf.js";import{u as Ze,a as Xe}from"./use-dark.5300a2fa.js";import{Q as K}from"./QTooltip.0533cf34.js";import{b as B,Q as $}from"./QItemLabel.958574dc.js";import{Q as j}from"./QList.1ec65fdc.js";import{Q as se}from"./use-cache.a66d0a22.js";import{c as et,Q as oe,a as tt,b as st,d as ot}from"./copy-to-clipboard.9242ae33.js";import{Q as _e}from"./QMenu.8fa9e018.js";import{Q as at}from"./QMarkupTable.dcdeac00.js";import{Q as lt}from"./QPage.af1633ef.js";import{u as nt}from"./store.7051e981.js";import"./use-prevent-scroll.e7b7514b.js";import"./scroll.204067b4.js";import"./use-timeout.6afbe9a4.js";import"./use-tick.d693e545.js";import"./use-model-toggle.bae0c4f6.js";import"./use-checkbox.040275e9.js";import"./selection.df2ab4de.js";import"./touch.70a9dd44.js";import"./firebase.dc843dde.js";import"./axios.84ae42e4.js";const rt=["none","strict","leaf","leaf-filtered"];var it=Pe({name:"QTree",props:{...Ze,nodes:{type:Array,required:!0},nodeKey:{type:String,required:!0},labelKey:{type:String,default:"label"},childrenKey:{type:String,default:"children"},dense:Boolean,color:String,controlColor:String,textColor:String,selectedColor:String,icon:String,tickStrategy:{type:String,default:"none",validator:a=>rt.includes(a)},ticked:Array,expanded:Array,selected:{},noSelectionUnset:Boolean,defaultExpandAll:Boolean,accordion:Boolean,filter:String,filterMethod:Function,duration:Number,noConnectors:Boolean,noTransition:Boolean,noNodesLabel:String,noResultsLabel:String},emits:["update:expanded","update:ticked","update:selected","lazyLoad","afterShow","afterHide"],setup(a,{slots:u,emit:T}){const{proxy:L}=$e(),{$q:N}=L,R=Xe(a,N),I=Q({}),q=Q(a.ticked||[]),p=Q(a.expanded||[]);let E={};Be(()=>{E={}});const c=U(()=>`q-tree q-tree--${a.dense===!0?"dense":"standard"}`+(a.noConnectors===!0?" q-tree--no-connectors":"")+(R.value===!0?" q-tree--dark":"")+(a.color!==void 0?` text-${a.color}`:"")),w=U(()=>a.selected!==void 0),ke=U(()=>a.icon||N.iconSet.tree.icon),ne=U(()=>a.controlColor||a.color),M=U(()=>a.textColor!==void 0?` text-${a.textColor}`:""),ve=U(()=>{const s=a.selectedColor||a.color;return s?` text-${s}`:""}),we=U(()=>a.filterMethod!==void 0?a.filterMethod:(s,n)=>{const t=n.toLowerCase();return s[a.labelKey]&&s[a.labelKey].toLowerCase().indexOf(t)>-1}),S=U(()=>{const s={},n=(t,d)=>{const i=t.tickStrategy||(d?d.tickStrategy:a.tickStrategy),m=t[a.nodeKey],y=t[a.childrenKey]&&t[a.childrenKey].length>0,G=t.disabled!==!0&&w.value===!0&&t.selectable!==!1,k=t.disabled!==!0&&t.expandable!==!1,Ie=i!=="none",Y=i==="strict",he=i==="leaf-filtered",Z=i==="leaf"||i==="leaf-filtered";let X=t.disabled!==!0&&t.tickable!==!1;Z===!0&&X===!0&&d&&d.tickable!==!0&&(X=!1);let F=t.lazy;F===!0&&I.value[m]!==void 0&&Array.isArray(t[a.childrenKey])===!0&&(F=I.value[m]);const h={key:m,parent:d,isParent:y,lazy:F,disabled:t.disabled,link:t.disabled!==!0&&(G===!0||k===!0&&(y===!0||F===!0)),children:[],matchesFilter:a.filter?we.value(t,a.filter):!0,selected:m===a.selected&&G===!0,selectable:G,expanded:y===!0?p.value.includes(m):!1,expandable:k,noTick:t.noTick===!0||Y!==!0&&F&&F!=="loaded",tickable:X,tickStrategy:i,hasTicking:Ie,strictTicking:Y,leafFilteredTicking:he,leafTicking:Z,ticked:Y===!0?q.value.includes(m):y===!0?!1:q.value.includes(m)};if(s[m]=h,y===!0&&(h.children=t[a.childrenKey].map(b=>n(b,h)),a.filter&&(h.matchesFilter!==!0?h.matchesFilter=h.children.some(b=>b.matchesFilter):h.noTick!==!0&&h.disabled!==!0&&h.tickable===!0&&he===!0&&h.children.every(b=>b.matchesFilter!==!0||b.noTick===!0||b.tickable!==!0)===!0&&(h.tickable=!1)),h.matchesFilter===!0&&(h.noTick!==!0&&Y!==!0&&h.children.every(b=>b.noTick)===!0&&(h.noTick=!0),Z))){if(h.ticked=!1,h.indeterminate=h.children.some(b=>b.indeterminate===!0),h.tickable=h.tickable===!0&&h.children.some(b=>b.tickable),h.indeterminate!==!0){const b=h.children.reduce((fe,ze)=>ze.ticked===!0?fe+1:fe,0);b===h.children.length?h.ticked=!0:b>0&&(h.indeterminate=!0)}h.indeterminate===!0&&(h.indeterminateNextState=h.children.every(b=>b.tickable!==!0||b.ticked!==!0))}return h};return a.nodes.forEach(t=>n(t,null)),s});me(()=>a.ticked,s=>{q.value=s}),me(()=>a.expanded,s=>{p.value=s});function W(s){const n=[].reduce,t=(d,i)=>{if(d||!i)return d;if(Array.isArray(i)===!0)return n.call(Object(i),t,d);if(i[a.nodeKey]===s)return i;if(i[a.childrenKey])return t(null,i[a.childrenKey])};return t(null,a.nodes)}function xe(){return q.value.map(s=>W(s))}function Ce(){return p.value.map(s=>W(s))}function qe(s){return s&&S.value[s]?S.value[s].expanded:!1}function Se(){a.expanded!==void 0?T("update:expanded",[]):p.value=[]}function re(){const s=p.value,n=t=>{t[a.childrenKey]&&t[a.childrenKey].length>0&&t.expandable!==!1&&t.disabled!==!0&&(s.push(t[a.nodeKey]),t[a.childrenKey].forEach(n))};a.nodes.forEach(n),a.expanded!==void 0?T("update:expanded",s):p.value=s}function H(s,n,t=W(s),d=S.value[s]){if(d.lazy&&d.lazy!=="loaded"){if(d.lazy==="loading")return;I.value[s]="loading",Array.isArray(t[a.childrenKey])!==!0&&(t[a.childrenKey]=[]),T("lazyLoad",{node:t,key:s,done:i=>{I.value[s]="loaded",t[a.childrenKey]=Array.isArray(i)===!0?i:[],je(()=>{const m=S.value[s];m&&m.isParent===!0&&ie(s,!0)})},fail:()=>{delete I.value[s],t[a.childrenKey].length===0&&delete t[a.childrenKey]}})}else d.isParent===!0&&d.expandable===!0&&ie(s,n)}function ie(s,n){let t=p.value;const d=a.expanded!==void 0;if(d===!0&&(t=t.slice()),n){if(a.accordion&&S.value[s]){const i=[];S.value[s].parent?S.value[s].parent.children.forEach(m=>{m.key!==s&&m.expandable===!0&&i.push(m.key)}):a.nodes.forEach(m=>{const y=m[a.nodeKey];y!==s&&i.push(y)}),i.length>0&&(t=t.filter(m=>i.includes(m)===!1))}t=t.concat([s]).filter((i,m,y)=>y.indexOf(i)===m)}else t=t.filter(i=>i!==s);d===!0?T("update:expanded",t):p.value=t}function Te(s){return s&&S.value[s]?S.value[s].ticked:!1}function O(s,n){let t=q.value;const d=a.ticked!==void 0;d===!0&&(t=t.slice()),n?t=t.concat(s).filter((i,m,y)=>y.indexOf(i)===m):t=t.filter(i=>s.includes(i)===!1),d===!0&&T("update:ticked",t)}function Ae(s,n,t){const d={tree:L,node:s,key:t,color:a.color,dark:R.value};return pe(d,"expanded",()=>n.expanded,i=>{i!==n.expanded&&H(t,i)}),pe(d,"ticked",()=>n.ticked,i=>{i!==n.ticked&&O([t],i)}),d}function de(s){return(a.filter?s.filter(n=>S.value[n[a.nodeKey]].matchesFilter):s).map(n=>Ee(n))}function Ke(s){if(s.icon!==void 0)return _(ae,{class:"q-tree__icon q-mr-sm",name:s.icon,color:s.iconColor});const n=s.img||s.avatar;if(n)return _("img",{class:`q-tree__${s.img?"img":"avatar"} q-mr-sm`,src:n})}function Qe(){T("afterShow")}function Ve(){T("afterHide")}function Ee(s){const n=s[a.nodeKey],t=S.value[n],d=s.header&&u[`header-${s.header}`]||u["default-header"],i=t.isParent===!0?de(s[a.childrenKey]):[],m=i.length>0||t.lazy&&t.lazy!=="loaded";let y=s.body&&u[`body-${s.body}`]||u["default-body"];const G=d!==void 0||y!==void 0?Ae(s,t,n):null;return y!==void 0&&(y=_("div",{class:"q-tree__node-body relative-position"},[_("div",{class:M.value},[y(G)])])),_("div",{key:n,class:`q-tree__node relative-position q-tree__node--${m===!0?"parent":"child"}`},[_("div",{class:"q-tree__node-header relative-position row no-wrap items-center"+(t.link===!0?" q-tree__node--link q-hoverable q-focusable":"")+(t.selected===!0?" q-tree__node--selected":"")+(t.disabled===!0?" q-tree__node--disabled":""),tabindex:t.link===!0?0:-1,onClick:k=>{ce(s,t,k)},onKeypress(k){Ge(k)!==!0&&(k.keyCode===13?ce(s,t,k,!0):k.keyCode===32&&J(s,t,k,!0))}},[_("div",{class:"q-focus-helper",tabindex:-1,ref:k=>{E[t.key]=k}}),t.lazy==="loading"?_(Fe,{class:"q-tree__spinner",color:ne.value}):m===!0?_(ae,{class:"q-tree__arrow"+(t.expanded===!0?" q-tree__arrow--rotate":""),name:ke.value,onClick(k){J(s,t,k)}}):null,t.hasTicking===!0&&t.noTick!==!0?_(He,{class:"q-tree__tickbox",modelValue:t.indeterminate===!0?null:t.ticked,color:ne.value,dark:R.value,dense:!0,keepColor:!0,disable:t.tickable!==!0,onKeydown:ge,"onUpdate:modelValue":k=>{Ue(t,k)}}):null,_("div",{class:"q-tree__node-header-content col row no-wrap items-center"+(t.selected===!0?ve.value:M.value)},[d?d(G):[Ke(s),_("div",s[a.labelKey])]])]),m===!0?a.noTransition===!0?_("div",{class:"q-tree__node-collapsible"+M.value,key:`${n}__q`},[y,_("div",{class:"q-tree__children"+(t.disabled===!0?" q-tree__node--disabled":"")},t.expanded?i:null)]):_(Je,{duration:a.duration,onShow:Qe,onHide:Ve},()=>le(_("div",{class:"q-tree__node-collapsible"+M.value,key:`${n}__q`},[y,_("div",{class:"q-tree__children"+(t.disabled===!0?" q-tree__node--disabled":"")},i)]),[[De,t.expanded]])):y])}function ue(s){const n=E[s];n&&n.focus()}function ce(s,n,t,d){d!==!0&&n.selectable!==!1&&ue(n.key),w.value&&n.selectable?a.noSelectionUnset===!1?T("update:selected",n.key!==a.selected?n.key:null):n.key!==a.selected&&T("update:selected",n.key===void 0?null:n.key):J(s,n,t,d),typeof s.handler=="function"&&s.handler(s)}function J(s,n,t,d){t!==void 0&&ge(t),d!==!0&&n.selectable!==!1&&ue(n.key),H(n.key,!n.expanded,s,n)}function Ue(s,n){if(s.indeterminate===!0&&(n=s.indeterminateNextState),s.strictTicking)O([s.key],n);else if(s.leafTicking){const t=[],d=i=>{i.isParent?(n!==!0&&i.noTick!==!0&&i.tickable===!0&&t.push(i.key),i.leafTicking===!0&&i.children.forEach(d)):i.noTick!==!0&&i.tickable===!0&&(i.leafFilteredTicking!==!0||i.matchesFilter===!0)&&t.push(i.key)};d(s),O(t,n)}}return a.defaultExpandAll===!0&&re(),Object.assign(L,{getNodeByKey:W,getTickedNodes:xe,getExpandedNodes:Ce,isExpanded:qe,collapseAll:Se,expandAll:re,setExpanded:H,isTicked:Te,setTicked:O}),()=>{const s=de(a.nodes);return _("div",{class:c.value},s.length===0?a.filter?a.noResultsLabel||N.lang.tree.noResults:a.noNodesLabel||N.lang.tree.noNodes:s)}}});const dt=Le({name:"CoursesDashboard",setup(){return{store:nt(),carousel:Q(""),slide:Q(null),confirm:Q(!1),showGradebook:Q(!1),splitterModel:Q(20),tab:Q("introduction"),expanded:Q(["You Are Here","Courses","Assignments","Pages","Enrollment"]),simple:[{label:"You Are Here",icon:"ads_click",children:[{label:"My Courses",children:[{label:"Enrollment",children:[{label:"Students"}]},{label:"Gradebook"},{label:"Assignments",children:[{label:"Stepper"},{label:"Pages",children:[{label:"Meta Info"},{label:"Short Text"},{label:"Images"}]}]}]}]}]}},mounted(){console.log("CoursesDashboard mounted"),this.store.aid=null,this.store.carousel=this.carousel},methods:{toggleGradebook(){console.log("toggleGradebook"),this.showGradebook?this.showGradebook=!1:this.showGradebook=!0},deleteSelectedObject(){this.store.aid!==null&&this.store.aid>-1?this.store.deleteAssignment(this.store.ck,this.store.aid):this.store.ck!==null&&this.store.deleteCourse(this.store.ck)},editCB(){if(this.store.aid!==null)this.store.pgIdx=-1;else{const a=Object.keys(this.store.currentCourse.assignments);a.length>0?(this.store.aid=a[0],this.store.pgIdx=0):this.store.aid=-1}this.store.router.push("/courses/assignments")},slideChanged(a){console.log("CourseDashboard.slideChanged ck = ",a),this.store.ck=a},viewerCB(){if(console.log("CourseDash viewerCB setting pgIdx 0 before /viewer"),this.store.currentAssignment.pages.length===0){this.store.notify({msg:"The requested assignment has no pages!"});return}this.store.pgIdx=0,this.store.router.replace("/viewer")},copyCourseKeyCB(){et(this.store.ck).then(()=>{console.log("ck copied to clipboard",this.store.ck);const a=`The course-key ${this.store.ck} was copied to clipboard`;this.store.notify({msg:a})}).catch(a=>{console.log(a)})}}}),ut={key:0,class:"q-ml-sm"},ct={key:1,class:"q-ml-sm"},ht={key:0},ft=e("div",{class:"justify-center"},[e("div",{class:"text-panel q-mx-md q-mb-xs q-mt-md text-h6",style:{"text-align":"center"}}," Welcome to Reading Edge! ")],-1),mt={class:"row justify-center"},gt={class:"q-ma-md column col col-md-6 text-justify"},pt={class:"full-width flex flex-center"},yt=e("br",null,null,-1),bt=e("br",null,null,-1),_t=e("br",null,null,-1),kt=e("p",{class:"q-ma-md"},[r(" This will automatically change your role to "),e("i",null,"Student"),r(" and launch you into the Stepper (see Map) with a random Assignment from the Demo Course (right sidebar). Use the up-arrow (navbar, hidden for top-level) to ascend the hierarchy. Use the role-change button (navbar) to change to Teacher role. Student and Teacher share the same hierarchy but with different permissions. ")],-1),vt={class:""},wt=e("p",null,"May 1, 2023 Las Vegas, NV",-1),xt=e("p",null,[r(' Hello! Reading Edge leverages Wikipedia content to generate or build "paragraph reconstruction" assignments for your child or students. Each page of an assignment contains a short Wikipedia summary passage and images. The student reads the original passage and then reconstructs it by replacing a random handful of words in their correct places. The system awards one point per correct word placed. Use the '),e("i",null,"paragraph replacement"),r(" exercise to keep kids accountable and the "),e("i",null,"rewards system"),r(" to bring out their best efforts. ")],-1),Ct=e("p",null,[r(" The paragraph reconstruction exercise that is central to Reading Edge was not originally developed to "),e("i",{class:"yellow"},"improve"),r(" reading so much as to just "),e("i",{class:"yellow"},"prove"),r(" that something had been read at all. It turns out, however, that if anyone successfully reconstructs a paragraph with 15-20% of the words missing then you can consider that as "),e("i",{class:"yellow"},"proof"),r(" that they read carefully and must have thought about context, punctuation and grammar. By offering an incentive to complete such exercises it is possible to train kids to read carefully and think about grammar, punctuation and context. ")],-1),qt=e("p",null,[r(" Making this usable for others has been an elusive personal goal for years. The missing piece was "),e("i",null,"content generation"),r(" and that has been solved by accessing Wikipedia (WP). With Reading Edge a teacher can create an engaging, reliable assignment in 30 seconds that will occupy a student for 30 minutes. It's easy, too, because every account has both a student-side and a teacher-side. And since it accesses Wikipedia directly, Reading Edge only needs to store links to WP resources. ")],-1),St=e("p",null,[r(" As you know, Wikipedia is full of beautiful, high-resolution and intriguing pictures. And those can help generate curiosity and interest such that students are suddenly "),e("i",{class:"yellow"},"eager"),r(" to read in order to find out more. Reading Edge awards one raw point for each word correctly placed. It is intended that you, the parent or teacher, define the exchange rate. Last but certainly not least, thank you for supporting this "),e("b",null,"Independent Education Software"),r(" effort! ")],-1),Tt={class:"text-center"},At={class:"text-white q-mt-lg",href:"https://youtu.be/-ATGbQFpa4I",target:"_blank"},Kt=e("p",null,[r(" Logging into Reading Edge automatically creates an account for you and allocates some initial object space, as well. Every account has two roles: "),e("i",{class:"yellow"},"teacher"),r(" and "),e("i",{class:"yellow"},"student"),r(". As a "),e("i",null,"teacher"),r(" you create Courses and build Assignments. Each Course has a course-key which you simply give to anyone you would like to invite and they can use it to enroll themselves when they login. With this design you can also enroll yourself in your own Course, and most of the code can be shared by both roles. Referring to the tree below, notice that you come in at the "),e("i",{class:"yellow"},"top"),r(", yet all of the content is at the "),e("i",{class:"yellow"},"bottom"),r(", in the Pages. So, to work on things you can either drill-down when using the "),e("i",null,"Builder"),r(" or when the "),e("i",null,"Assignment Generator"),r(" it will leave you on the last page of the generated assignment when it completes. ")],-1),Qt=e("p",null," Generating an Assignment is really the lone convenience feature at the moment, as it is both simple and powerful. Basically you tell it how many pages you want, select a language and press the button. A popup then appears where you enter comma-separated guide-words. If you requested 20 pages, then expect to delete up to half of them. Much of your success with the Generator button comes down to your ability to choose the guide-words that get the kind of pages you're looking for. Ultimately your guide-words are the AI behind the Generator. ",-1),Vt=e("p",null,[r(" Another key concept throughout is that things loaded from the left sidebar need a "),e("i",null,"destination"),r(" to "),e("i",null,"load-into"),r(". You cannot load a page while looking at a Course, for example. Rather, you must be inside of an Assignment and then anything you select on the left will load into a new Page appended to the current Assignment. ")],-1),Et=e("p",null," When you use the Generate Assignment button from the Course-level, you can sit back and watch as the process first creates a new assignment, then switches into it and successively loads its search results into newly created Pages until finished. ",-1),Ut=e("p",null," At that point you can just skim through the generated pages using the thumbnails across the top of the Dashboard and delete pages that don't look relevant or lack appealing images. In this way you can spend as little as 30 seconds to create a large amount of quality reading summaries that will take 30 minutes, or more, to complete as an Assignment. This procedure is covered in the silent video, intoduction section. ",-1),It=e("p",null," For more control over your Assignment pages you can build manually. The tools at your disposal for this are your own saved images and bookmarks, the On This Day articles, and your search results. Each item you select on the left will load into a newly provisioned Page object. When you manipulate Pages and Assignments you are directly manipulating (changing) the data stored in your browser's memory, but not the database. Saving to the database requires you to manually push the save button. ",-1),zt=e("p",null,' If you accidentally delete something that you really want to save, then just logout and login again and the database copy will be back in your browser. Unless you "saved" after you "deleted", then its gone. ',-1),Pt=e("p",null," But assignments are cheap! Or they are supposed to be. Consider the gradebook for a moment. Each Assignment you create under a Course can be repeated multiple times to earn more and more points. While there will probably be a toggle for this repeatability later, at the moment you would just delete the Assignment if you don't want them to earn points by repeating it any more. ",-1),Bt=e("p",null,[r(' You can change the summary text that Wikipedia provides, or replace it with your own. The image that is currently selected when you save becomes the default image of that Page. As described above, since you are manipulating the in-memory data directly, you could make changes to a whole set of Pages first, and then save the whole lot with one save. In other words, the data is not "coming to you" when you change pages, and being lost when you change-away, but rather you are going '),e("i",null,"to"),r(" the data and changing it, then changing to another piece of data and working, and so-on. ")],-1),$t=e("iframe",{width:"100%",src:"https://www.youtube.com/embed/-ATGbQFpa4I",title:"Reading Edge is more than a Grammar and Context Trainer",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,-1),jt=e("p",null," This video has no sound but does illustrate the process of assignment generation and taking an assignment. More docu-video content should be coming soon. Thanks for your patience. ",-1),Gt=e("p",null,' The default quotas are intended to make Reading Edge free for home use. It is necessary to have some quotas just to prevent abuse. The quotas are arbitrary, of course, and can be incresed if people need that. A smaller, free account will always remain possible. Currently everything should be regarded as "For Entertainment Purposes Only". A more mobile-friendly version is in the works. Please consider supporting today. ',-1),Ft=e("p",null,[r(' Reading Edge is currently under active and continuous development, and will only improve with time. At this point it is deemed "usable" and the fledgling app needs to be kicked out of the nest! Your subscription directly supports '),e("i",{class:"yellow"},"this"),r(" independent software effort. If you have any questions or difficulties please don't hesitate to contact me directly. You will be helping to uncover an issue that caused a problem. Let's fix it. Thanks! ")],-1),Dt=e("p",null,"Contact: charlie@readingedge.org",-1),Nt=e("p",null," On mobile devices you can use FullScreen and LandScape. The FullScreen button is located in the Preferences section on left sidebar. This displays the top-level documentation page alright, but overall the app needs more space than available on mobile screens. Planning to make builder interface similar to YouTube Studio Caption editor, namely with + buttons in the corners of cards, and the more columnar layout. ",-1),Lt=e("p",null," Some guide-word ideas: world heritage sites in syria, tall wooden ships, thai cuisine, coral reefs of, cities, buildings, boeing jets, steamship, railroad, airport, tepui, amazonia, eruption, volcanic, cetaecean, jurrassic, saurus, archipelago, islands, canyon, cliffs, tropical fish, glacier, orca, culture, waterfall, falls, range, iguazu, launch, nasa mission ",-1),Rt=e("p",null,` Try this: search for the same thing in different languages and you'll get different sets of images and text, as well! Also, consider using search terms in whichever language is set. For example, instead of entering "waterfall" in a French search, use the French word, "chutes d'eau". When playing around with languages it is useful to keep Google Translate open in another tab. There are also available-page-translation links on the meta-info panel for each page. `,-1),Mt=e("p",null," When your role is 'Teacher' and you are testing an Assignment in the Stepper, the correct answer for each word-choice is the LAST answer (so you don't have to do the exercise yourself). You can also just click the Step-4 button as role = 'Teacher' and bypass the current Page. ",-1),Wt=e("p",null," The intended way to use Bookmarks and Images is as a temporary collection in preparation of putting-together an assignment. ",-1),Ot=e("p",null,null,-1),Yt={class:"flex flex-center",style:{}},Ht=e("a",{class:"text-white q-px-md",href:"https://paypal.me/asymptopia?country.x=US&locale.x=en_US",target:"_blank"},"V.I.P.",-1),Jt=e("a",{class:"text-white q-px-md",href:"https://github.com/sponsors/ccosse/",target:"_blank"},"G.I.P.",-1),Zt={key:1,class:"justify-center absolute-top"},Xt={class:"text-panel justify-center q-mx-md q-mb-xs q-mt-md text-h6"},es={key:0,class:"cursor-pointer"},ts={key:0,class:"q-px-md row content-center"},ss={key:0,class:"embed-panel col-12 col-md-6 assignment",style:{"z-index":"5","max-height":"30vh","font-size":"12pt"}},os={class:"row content-start"},as={key:0},ls=e("tr",null,[e("th",{colSpan:"100"},[e("div",{class:"text-center val"},"Assignments")])],-1),ns=e("th",{class:"val"},"Student",-1),rs={class:"hidden"},is={class:"key"},ds={class:"hidden"},us={key:0},cs={key:1},hs={class:"hidden"},fs={key:1},ms={width:"100%",class:"meta-table"},gs=e("tr",null,[e("th",{colSpan:"100"},[e("div",{class:"text-center val"},"Assignments")])],-1),ps=e("th",{class:"val"},"Student",-1),ys={class:"hidden"},bs={class:"key"},_s={key:0},ks={key:1,class:"embed-panel col-12 col-md-5 assignment",style:{"z-index":"5","max-height":"30vh",height:"30vh"}},vs={class:"q-px-lg row content-start"},ws={class:"meta-table"},xs=e("th",{class:"key"},"Title",-1),Cs={class:"val"},qs={class:"cursor-pointer"},Ss=e("td",{class:"key"},"Cover Url",-1),Ts={class:"cursor-pointer val"},As=e("td",{class:"key"},"Assignments",-1),Ks={class:"val"},Qs=e("td",{class:"key"},"Enrollment",-1),Vs={class:"val"},Es=e("td",{class:"key"},"Created",-1),Us={class:"val"},Is=e("td",{class:"key"},"Updated",-1),zs={class:"val"},Ps={key:0,style:{"text-align":"center"}},Bs=e("br",null,null,-1),$s=e("br",null,null,-1),js={class:"control-panel q-pa-sm row justify-center no-wrap flex flex-center",style:{overflow:"auto"}},Gs={key:0};function Fs(a,u,T,L,N,R){const I=Re("q-list-item");return f(),g(z,null,[o(We,{modelValue:a.confirm,"onUpdate:modelValue":u[1]||(u[1]=q=>a.confirm=q),persistent:"",class:"z-max confirm-delete-obj"},{default:l(()=>[o(C,null,{default:l(()=>[o(Oe,{class:"row items-center"},{default:l(()=>[o(Me,{icon:"delete",color:"negative","text-color":"white"}),this.store.aid!==null&&this.store.aid>-1?(f(),g("span",ut,"Confirm delete assignment?")):(f(),g("span",ct,"Confirm delete entire course?"))]),_:1}),o(Ye,{align:"right",class:"text-white"},{default:l(()=>[le(o(x,{flat:"",label:"Cancel"},null,512),[[be]]),le(o(x,{flat:"",label:"Delete",onClick:u[0]||(u[0]=q=>this.deleteSelectedObject())},null,512),[[be]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(lt,null,{default:l(()=>{var q;return[this.store.ck?(f(),g("div",Zt,[e("div",Xt,[r(" Course: "),this.store.currentCourse?(f(),g("span",es,[r(v((q=this.store.currentCourse)==null?void 0:q.title)+" ",1),o(oe,{modelValue:this.store.currentCourse.title,"onUpdate:modelValue":u[4]||(u[4]=p=>this.store.currentCourse.title=p),"auto-save":"",style:{maxWidth:"320px"}},{default:l(p=>[o(se,{modelValue:p.value,"onUpdate:modelValue":E=>p.value=E,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:ee(p.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["modelValue"])])):P("",!0)]),this.store.ck?(f(),g("div",ts,[o(tt,{class:"q-ma-md full-width",animated:"",modelValue:this.store.ck,"onUpdate:modelValue":[u[12]||(u[12]=p=>this.store.ck=p),this.slideChanged],infinite:"","control-type":"arrows",ref:"carousel",height:"82vh"},{control:l(()=>[o(st,{position:"bottom",offset:[0,0]},{default:l(()=>[e("div",js,[o(x,{push:"",round:"",class:"dash-button","text-color":"white",icon:"arrow_left",style:ye({height:"33.5px",width:"33.5px"}),onClick:u[8]||(u[8]=p=>a.$refs.carousel.previous())},{default:l(()=>[o(K,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[o(C,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[r(" Go to previous course ")]),_:1})]),_:1})]),_:1},8,["style"]),o(x,{"no-caps":"",class:"on-right dash-button",icon:"table_chart",onClick:u[9]||(u[9]=p=>this.toggleGradebook())},{default:l(()=>[o(K,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[o(C,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[r(" View course gradebook ")]),_:1})]),_:1})]),_:1}),this.store.role==="teacher"?(f(),g("span",Gs,[o(x,{"no-caps":"",icon:"add",class:"on-right dash-button",onClick:u[10]||(u[10]=p=>this.store.newCourse())},{default:l(()=>[o(K,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[o(C,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[r(" Create a new course ")]),_:1})]),_:1})]),_:1})])):P("",!0),o(x,{push:"",round:"",class:"on-right dash-button","text-color":"white",icon:"arrow_right",style:ye({height:"33.5px",width:"33.5px"}),onClick:u[11]||(u[11]=p=>a.$refs.carousel.next())},{default:l(()=>[o(K,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[o(C,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[r(" Go to next course ")]),_:1})]),_:1})]),_:1},8,["style"])])]),_:1})]),default:l(()=>[(f(!0),g(z,null,D(this.store.courses,(p,E)=>(f(),te(ot,{class:"text-panel row content-center justify-center",key:E,name:E,"img-src":p.coverUrl},{default:l(()=>[this.showGradebook?(f(),g("table",ss,[o(_e,null,{default:l(()=>[r("Course Gradebook")]),_:1}),e("tr",null,[e("td",os,[this.store.role==="teacher"?(f(),g("span",as,[o(at,{dense:"",class:"meta-table",style:{"font-size":"12pt"}},{default:l(()=>[ls,e("tr",null,[ns,(f(!0),g(z,null,D(this.store.courses[this.store.ck].assignments,(c,w)=>(f(),g("th",{style:{"text-align":"center"},key:c,class:"key"},[r(v(c.title)+" ",1),e("span",rs,v(w),1)]))),128))]),(f(!0),g(z,null,D(this.store.courses[this.store.ck].enrollment,c=>(f(),g("tr",{key:c.name},[e("td",is,[r(v(c.name)+" ",1),e("span",ds,v(a.sidx),1)]),(f(!0),g(z,null,D(this.store.courses[this.store.ck].assignments,w=>(f(),g("td",{style:{"text-align":"center"},class:"val",key:w},[w.scores&&w.scores[c.emailKey]?(f(),g("span",us,v(w.scores[c.emailKey]),1)):(f(),g("span",cs,"-")),r(),e("span",hs,v(a.aidx),1)]))),128))]))),128))]),_:2},1024)])):(f(),g("span",fs,[e("table",ms,[gs,e("tr",null,[ps,(f(!0),g(z,null,D(this.store.courses[this.store.ck].assignments,(c,w)=>(f(),g("th",{key:c,class:"key"},[r(v(c.title)+" ",1),e("span",ys,v(w),1)]))),128))]),e("tr",null,[e("td",bs,v(this.store.userSnapshot.profile.name),1),(f(!0),g(z,null,D(this.store.courses[this.store.ck].assignments,c=>(f(),g("td",{class:"val",key:c},[c.scores&&c.scores[this.store.emailKey]?(f(),g("span",_s,v(c.scores[this.store.emailKey]),1)):P("",!0)]))),128))])])]))])])])):(f(),g("table",ks,[o(_e,null,{default:l(()=>[r("Course")]),_:1}),e("tr",null,[e("td",vs,[e("table",ws,[e("tr",null,[xs,e("td",Cs,[e("div",qs,[r(v(this.store.currentCourse.title)+" ",1),o(oe,{modelValue:this.store.courses[this.store.ck].title,"onUpdate:modelValue":c=>this.store.courses[this.store.ck].title=c,"auto-save":""},{default:l(c=>[o(se,{modelValue:c.value,"onUpdate:modelValue":w=>c.value=w,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:ee(c.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])])]),e("tr",null,[Ss,e("td",null,[e("div",Ts,[r(" Change "),o(oe,{modelValue:this.store.courses[this.store.ck].coverUrl,"onUpdate:modelValue":c=>this.store.courses[this.store.ck].coverUrl=c,"auto-save":""},{default:l(c=>[o(se,{modelValue:c.value,"onUpdate:modelValue":w=>c.value=w,clearable:"",dense:"",autofocus:"",counter:"",onKeyup:ee(c.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])])]),e("tr",null,[As,e("td",Ks,v(Object.keys(this.store.currentCourse.assignments).length),1)]),e("tr",null,[Qs,e("td",Vs,v(Object.keys(this.store.currentCourse.enrollment).length),1)]),e("tr",null,[Es,e("td",Us,v(this.store.currentCourse.created),1)]),e("tr",null,[Is,e("td",zs,v(this.store.currentCourse.updated),1)])])])]),e("tr",null,[e("td",null,[this.store.role==="teacher"?(f(),g("div",Ps,[o(x,{"no-caps":"",icon:"delete",class:"on-right dash-button",onClick:u[5]||(u[5]=c=>a.confirm=!0)},{default:l(()=>[o(K,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[o(C,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[r(" Delete the selected course ")]),_:1})]),_:1})]),_:1}),this.store.ck!==null&&(this.store.aid===null||this.store.aid===-1)?(f(),te(x,{key:0,"no-caps":"",class:"dash-button on-right",onClick:u[6]||(u[6]=c=>this.copyCourseKeyCB()),icon:"key"},{default:l(()=>[o(K,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[o(C,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[r(" Copy the course-key to clipboard, then"),Bs,r(" share the course-key with whoever you"),$s,r(" want to enroll. ")]),_:1})]),_:1})]),_:1})):P("",!0),o(x,{"no-caps":"",icon:"save",class:"on-right dash-button",onClick:c=>this.store.commitCourse(this.store.ck)},{default:l(()=>[o(K,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[o(C,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[r(" Save current course to cloud ")]),_:1})]),_:1})]),_:2},1032,["onClick"]),this.store.ck!==null?(f(),te(x,{key:1,"no-caps":"",icon:"east",class:"dash-button",onClick:u[7]||(u[7]=c=>this.editCB())},{default:l(()=>[o(K,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[o(C,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[r(" Go to the assignments for selected course ")]),_:1})]),_:1})]),_:1})):P("",!0)])):P("",!0)])])]))]),_:2},1032,["name","img-src"]))),128))]),_:1},8,["modelValue","onUpdate:modelValue"])])):P("",!0)])):(f(),g("div",ht,[ft,e("div",mt,[e("div",gt,[o(A,{label:"Map","default-opened":""},{default:l(()=>[o(C,{flat:"",class:"q-mx-md q-px-md cursor-pointer flex flex-center transparent"},{default:l(()=>[o(it,{nodes:a.simple,"node-key":"label",expanded:a.expanded,"onUpdate:expanded":u[2]||(u[2]=p=>a.expanded=p),style:{backgroundColor:"#3330"}},null,8,["nodes","expanded"])]),_:1})]),_:1}),o(V),o(A,{label:"Quickstart",group:"somegroup"},{default:l(()=>[e("div",pt,[o(C,{flat:"",bordered:"",class:"q-ma-md q-pa-md cursor-pointer tile-component flex flex-center",onClick:u[3]||(u[3]=p=>this.store.randDemoCB()),style:{width:"200px",height:"200px"}},{default:l(()=>[o(ae,{name:"play_circle_outline",class:"text-h1"}),o(K,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[o(C,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[r(" Take Random Demo Assignment @Viewer"),yt,r("Changes Role to Student"),bt,r(" Use Navbar Up-Button to return Home"),_t,r(" Use Navbar Role-Button to change role back to Teacher ")]),_:1})]),_:1})]),_:1}),kt])]),_:1}),o(V),o(A,{label:"Introduction",group:"somegroup"},{default:l(()=>[o(B,null,{default:l(()=>[o($,null,{default:l(()=>[e("div",vt,[wt,xt,Ct,qt,St,e("div",Tt,[e("a",At,[o(x,{class:"bg-primary",icon:"ondemand_video",size:"lg"}),o(K,{style:{backgroundColor:"#222",fontSize:"12pt"}},{default:l(()=>[o(C,{bordered:"",flat:"",class:"q-ma-xs q-pa-sm"},{default:l(()=>[r(" A silent movie ")]),_:1})]),_:1})])])])]),_:1})]),_:1})]),_:1}),o(V),o(A,{label:"Concepts",group:"somegroup"},{default:l(()=>[o(j,null,{default:l(()=>[o(B,null,{default:l(()=>[o($,null,{default:l(()=>[Kt]),_:1})]),_:1})]),_:1})]),_:1}),o(V),o(A,{label:"Generator",group:"somegroup"},{default:l(()=>[o(j,null,{default:l(()=>[o(B,null,{default:l(()=>[o($,null,{default:l(()=>[Qt,Vt,Et,Ut]),_:1})]),_:1})]),_:1})]),_:1}),o(V),o(A,{label:"Builder",group:"somegroup"},{default:l(()=>[o(j,null,{default:l(()=>[o(B,null,{default:l(()=>[o($,null,{default:l(()=>[It,zt,Pt,Bt]),_:1})]),_:1})]),_:1})]),_:1}),o(V),o(A,{label:"Video",group:"somegroup"},{default:l(()=>[o(j,null,{default:l(()=>[o(I,null,{default:l(()=>[$t,jt]),_:1})]),_:1})]),_:1}),o(V),o(A,{label:"Accounts",group:"somegroup"},{default:l(()=>[o(j,null,{default:l(()=>[o(B,null,{default:l(()=>[o($,null,{default:l(()=>[Gt,Ft,Dt]),_:1})]),_:1})]),_:1})]),_:1}),o(V),o(A,{label:"Tips",group:"somegroup"},{default:l(()=>[o(j,null,{default:l(()=>[o(B,null,{default:l(()=>[o($,null,{default:l(()=>[Nt,Lt,Rt,Mt,Wt,Ot]),_:1})]),_:1})]),_:1})]),_:1}),o(V),o(A,{label:"V.I.P.",group:"somegroup"},{default:l(()=>[o(j,null,{default:l(()=>[o(B,null,{default:l(()=>[o($,null,{default:l(()=>[e("div",Yt,[e("table",null,[e("tr",null,[e("td",null,[o(x,{class:"bg-blue text-white",icon:"auto_awesome","icon-right":"auto_awesome"},{default:l(()=>[Ht]),_:1})])]),e("tr",null,[e("td",null,[o(x,{class:"q-mt-md bg-blue text-white",icon:"auto_awesome","icon-right":"auto_awesome"},{default:l(()=>[Jt]),_:1})])])])])]),_:1})]),_:1})]),_:1})]),_:1})])])]))]}),_:1})],64)}var mo=Ne(dt,[["render",Fs]]);export{mo as default};