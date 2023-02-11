import{Q as n}from"./QPage.ee8f256f.js";import{u as s}from"./re-store.744aca32.js";import{S as r}from"./StepperComponent.53892ad2.js";import{_ as p,r as e,d as g,o as m,c,w as d,a as l,f as u}from"./index.2230bdf1.js";import"./firebase.0eb8f378.js";import"./index.2cf0d985.js";import"./ClosePopup.f70b57f5.js";import"./use-dark.508914ec.js";import"./use-portal.2db3f8de.js";import"./QCheckbox.c33f4f96.js";import"./QToggle.600adfad.js";import"./QImg.73988ab8.js";import"./QPageSticky.54edffa6.js";const o={isCustom:!0,pageTitle:"Page 1",lang:"English",langVoiceKey:"Eng-UK-Fem",pageid:521267,canonicalUrl:"https://upload.wikimedia.org/wikipedia/commons/e/ef/Mount_Hood_reflected_in_Mirror_Lake%2C_Oregon.jpg",mapCoords:"45.297,-121.793",guideWords:"",imgIdx:0,imgs:[{url:"https://upload.wikimedia.org/wikipedia/commons/e/ef/Mount_Hood_reflected_in_Mirror_Lake%2C_Oregon.jpg",cap:"Mirror Lake and Mt Hood, Oregon."},{url:"https://upload.wikimedia.org/wikipedia/commons/c/c5/Moraine_Lake_17092005.jpg",cap:"Moraine Lake, Rock Mountains"},{url:"https://upload.wikimedia.org/wikipedia/commons/9/91/Peyto_Lake-Banff_NP-Canada.jpg",cap:"Peyto Lake, Banff NP, Canada"}],imgFit:"cover",pctReplace:5,pageText:"Welcome to Reading Edge! This application was designed to help train kids to read carefully. The activity consists of reading and reconstructing paragraphs, such as this paragraph, in exchange for points earned. Step 1 is to read the original paragraph.  Step 2 is to reconstruct the paragraph by choosing the words from a list. Step 3 is to check that every word is correct.  Then collect points and go to the next paragraph to earn some more! Otherwise repeat Step 2 until correct.  "},h={isCustom:!0,pageTitle:"Page 2",lang:"English",langVoiceKey:"Eng-UK-Fem",pageid:48139,canonicalUrl:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Cataratas.jpg",mapCoords:"-3.5,-62.4",guideWords:"",imgIdx:0,imgs:[{url:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Cataratas.jpg",cap:"Iguazu Falls, Brazil"},{url:"https://upload.wikimedia.org/wikipedia/commons/f/f9/Amazon_CIAT_%283%29.jpg",cap:"Somewhere in the Amazon jungle"}],imgFit:"cover",pctReplace:15,pageText:"Reading Edge enables parents and teachers to easily create reading assignments from Wikipedia content. The page you are currently reading has Wikipedia images and custom text.Pages can be random Wikipedia summaries chosen from search results based on guide-words, or you can use your own combination of text and images to create custom assignments.  "},k={isCustom:!0,pageTitle:"Page 3",lang:"English",langVoiceKey:"Eng-UK-Fem",pageid:"16421",canonicalUrl:"https://upload.wikimedia.org/wikipedia/commons/0/0e/2008-06-14ThaiRestaurant03.jpg",guideWords:"Thai cuisine, Thai food",imgIdx:0,imgs:[{url:"https://upload.wikimedia.org/wikipedia/commons/0/0e/2008-06-14ThaiRestaurant03.jpg",cap:"Thai cuisine"},{url:"https://upload.wikimedia.org/wikipedia/commons/3/34/2013_Tam_Lao.jpg",cap:"Tam Lao"},{url:"https://upload.wikimedia.org/wikipedia/commons/a/ae/Ban_Huahat07.jpg",cap:"Ban Huahat"}],imgFit:"cover",pctReplace:15,mapCoords:e("36.11,-115.17"),pageText:"Each page typically contains multiple images. You can see the number   on the Assignment Status panel (right sidebar).  Either click the icon or use the   image navigation buttons at the top of the page. These images are from the Wikipedia   page about Thai Cuisine, but we have replaced the text with our own.  "},w={isCustom:!0,pageTitle:"Page 4",lang:"English",langVoiceKey:"Eng-UK-Fem",mapCoords:e("36.11,-115.17"),pageid:null,canonicalUrl:"https://upload.wikimedia.org/wikipedia/commons/f/f3/Dinosaur_Input_Device_Velociraptor.jpg",guideWords:"",imgIdx:0,imgs:[{url:"https://upload.wikimedia.org/wikipedia/commons/f/f3/Dinosaur_Input_Device_Velociraptor.jpg",cap:"Robot from Jurrasic Park"},{url:"https://upload.wikimedia.org/wikipedia/commons/7/77/AMNH_5027_Trex.jpg",cap:"T-Rex"},{url:"https://upload.wikimedia.org/wikipedia/commons/1/1b/Allosaurus_Jardin_des_Plantes.png",cap:"Dinosaur skeleton"}],imgFit:"scale-down",pctReplace:15,pageText:"In the following pages we will switch language to French and pull random pages (in French) about motorcycles and aeroplanes ... "},f={isCustom:!1,pageTitle:"Page 5",lang:"fran\xE7ais",langVoiceKey:"fran\xE7ais",pageid:null,canonicalUrl:"",guideWords:"avion,motocyclette",imgIdx:0,imgs:[],imgFit:"scale-down",pctReplace:15,pageText:"",mapCoords:e("36.11,-115.17")},_={ck:"-",id:"Demo 001",title:"Demo Assignment",lang:"English",goal:100,points:0,pgIdx:0,pages:[o,h,k,w,f]},T=g({name:"GuestPage",components:{StepperComponent:r},setup(a){const i=s();return{props:a,reStore:i,demoPage:e(o),demoAssignment:e(_)}}});function C(a,i,P,x,b,y){const t=u("StepperComponent");return m(),c(n,{id:"QPage",class:"row justify-center"},{default:d(()=>[l(t,{"initial-img-src":this.imgSrc,"initial-img-fit":this.imgFit,"initial-page-obj":this.demoPage,"assignment-obj":this.demoAssignment},null,8,["initial-img-src","initial-img-fit","initial-page-obj","assignment-obj"])]),_:1})}var V=p(T,[["render",C]]);export{V as default};
