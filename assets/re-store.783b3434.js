import{Z as n,r}from"./index.16332cc5.js";function i(t,e,s){this.k=t,this.x=e,this.y=s}i.prototype={constructor:i,scale:function(t){return t===1?this:new i(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new i(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};new i(1,0,0);i.prototype;const o=n("reStore",{state:()=>({imgIdx:r(0),imgs:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Douglas_DC-3%2C_SE-CFP.jpg/1024px-Douglas_DC-3%2C_SE-CFP.jpg",cap:"Doublas DC-3"},{url:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Cataratas.jpg",cap:"Iguazu Falls, Brazil"}],imgFit:r("cover"),mytext:r("      Iguaz\xFA Falls or Igua\xE7u Falls are waterfalls of the Iguazu River on the      border of the Argentine province of Misiones and the Brazilian state of      Paran\xE1. Together, they make up the largest waterfall system in the      world. The falls divide the river into the upper and lower Iguazu. The      Iguazu River rises near the heart of the city of Curitiba. For most of      its course, the river flows through Brazil; however, most of the falls      are on the Argentine side. Below its confluence with the San Antonio      River, the Iguazu River forms the border between Argentina and Brazil.    "),treeData:r([{id:"course1",label:"course1",xxx:[{id:"a1",label:"a1",xxx:[{id:"a1-content",label:"a1-content",xxx:[{id:"123",label:"yeah sure"}]}]},{label:"a2"},{label:"a3"}]},{}])}),actions:{cycleFit(){const t=["scale-down","cover"];let e=t.indexOf(this.imgFit);this.imgFit=e+1>=t.length?t[0]:t[e+1]},currentImgCap(){return"yesiree i am the caption"},nextImg(){this.imgIdx=this.imgIdx>=this.imgs.length-1?0:this.imgIdx+1},getSomething(){return this.mytext}}});export{o as u};