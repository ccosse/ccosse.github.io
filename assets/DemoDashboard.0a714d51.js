import{Q as f}from"./QPage.c88382b5.js";import{Q as _}from"./QCard.cefc2337.js";import{u as g}from"./store.bae078f6.js";import{j as c,_ as u,k as o,m as p,n as l,t as e,aa as t,p as k,G as n,a8 as D,H as $,q as b}from"./index.5667ff15.js";import"./use-dark.130ca8ce.js";import"./firebase.8769ab52.js";import"./axios.84ae42e4.js";const x=c({name:"CourseComponent",components:{},props:["courseData"],setup(){return{store:g()}},methods:{editCourseCB(){console.log("editCourseCB"),this.store.ck=this.courseData.ck,this.store.router.replace("/teacher/course")}}});function B(i,r,m,d,h,C){return o(),p(_,{flat:"",bordered:"",class:"q-ma-md q-pa-md cursor-pointer mycard",onClick:r[0]||(r[0]=s=>this.editCourseCB())},{default:l(()=>[e("h3",null,"Course: "+t(this.courseData.title),1),e("h6",null,"Assignments: "+t(Object.keys(this.courseData.assignments).length),1),e("h6",null,"Enrollment: "+t(Object.keys(this.courseData.gradebook).length),1),e("h6",null,t(this.courseData.gradebook),1)]),_:1})}var y=u(x,[["render",B]]);const j=c({name:"TeacherDashboard",components:{CourseComponent:y},props:{courses:{type:Object,required:!0}},setup(){return{}},mounted(){console.log("TeacherDashboard mounted")}});function q(i,r,m,d,h,C){const s=k("CourseComponent");return o(),p(f,{class:"flex flex-center"},{default:l(()=>[(o(!0),n($,null,D(this.props,(v,a)=>(o(),n("span",{key:a},[b(s,{title:a},null,8,["title"])]))),128))]),_:1})}var w=u(j,[["render",q]]);export{w as default};
