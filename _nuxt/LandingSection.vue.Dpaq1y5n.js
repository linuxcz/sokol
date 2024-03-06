import{d as D,D as E,as as $,ao as F,ap as A,b as s,ah as j,w as I,e as U,n as l,E as t,c as i,ai as d,j as x,t as g,f as c,F as h,ag as b,aj as v,an as T,y as z,g as S,b4 as J,ab as M,aU as P}from"./entry.CpF6JYmA.js";import{_ as R}from"./Card.aLOCdfPo.js";const q={key:1},X=D({inheritAttrs:!1,__name:"LandingCTA",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},card:{type:Boolean,default:!0},links:{type:Array,default:()=>[]},align:{type:String,default:"center"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const u=e,m=E(()=>{const o={};u.card?o.rounded="rounded-xl":(o.ring="",o.rounded="",o.background="",o.shadow="",o.divide="");const a=$("",u.align==="center"&&"text-center",u.align==="right"&&"lg:order-last"),p=$("flex flex-col",u.align!=="center"&&"lg:grid lg:grid-cols-2 lg:items-center","gap-16 sm:gap-y-24"),f=u.card?"py-24 sm:py-32 sm:px-16":"py-24 sm:py-32 px-6 lg:px-8",k=$("mt-10 flex items-center gap-x-6",u.align==="center"&&"justify-center");return{...o,wrapper:"relative",container:a,body:{base:p,padding:f},title:"text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl",description:"mt-6 text-lg/8 text-gray-600 dark:text-gray-300",links:k}}),{ui:y,attrs:n}=F("landing.cta",A(u,"ui"),m,A(u,"class"),!0);return(o,a)=>{const p=T,f=R;return s(),j(f,v({class:t(y).wrapper},t(n),{ui:t(y)}),{default:I(()=>{var k;return[U("div",{class:l(t(y).container)},[e.title||o.$slots.title?(s(),i("h2",{key:0,class:l(t(y).title)},[d(o.$slots,"title",{},()=>[x(g(e.title),1)])],2)):c("",!0),e.description||o.$slots.description?(s(),i("p",{key:1,class:l(t(y).description)},[d(o.$slots,"description",{},()=>[x(g(e.description),1)])],2)):c("",!0),(k=e.links)!=null&&k.length||o.$slots.links?(s(),i("div",{key:2,class:l(t(y).links)},[d(o.$slots,"links",{},()=>[(s(!0),i(h,null,b(e.links,(w,C)=>(s(),j(p,v({key:C},w,{onClick:w.click}),null,16,["onClick"]))),128))])],2)):c("",!0)],2),o.$slots.default?d(o.$slots,"default",{key:0}):e.align==="right"?(s(),i("div",q)):c("",!0)]}),_:3},16,["class","ui"])}}}),G={key:0},H={key:2},K={key:0},Y=D({inheritAttrs:!1,__name:"LandingSection",props:{icon:{type:String,default:void 0},headline:{type:String,default:void 0},title:{type:String,default:void 0},description:{type:String,default:void 0},features:{type:Array,default:()=>[]},links:{type:Array,default:()=>[]},slot:{type:String,default:void 0},align:{type:String,default:"center"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const u=z(),m=e,y=E(()=>{const a=$("gap-16 sm:gap-y-24",m.align==="center"?"flex flex-col":"grid lg:grid-cols-2 lg:items-center"),p=$("",m.align==="center"&&"text-center flex flex-col items-center",m.align==="right"&&"lg:order-last");return{wrapper:"py-24 sm:py-32",container:a,base:p,icon:{wrapper:"flex mb-6",base:"w-10 h-10 flex-shrink-0 text-primary"},headline:"mb-2 text-base/7 font-semibold text-primary",title:"text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",description:"mt-6 text-lg/8 text-gray-600 dark:text-gray-300",links:"mt-8 flex flex-wrap gap-x-3 gap-y-1.5",features:{wrapper:{base:"mt-6 leading-7",list:"space-y-4",grid:"grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"},base:"relative pl-8",name:"font-semibold text-gray-900 dark:text-white",description:"text-gray-500 dark:text-gray-400 leading-6",icon:{base:"absolute left-0 top-1 h-5 w-5 text-primary",name:u.ui.icons.check}}}}),{ui:n,attrs:o}=F("landing.section",A(m,"ui"),y,A(m,"class"),!0);return(a,p)=>{const f=M,k=T,w=P;return s(),i("div",v({class:t(n).wrapper},t(o)),[d(a.$slots,"top"),S(w,{class:l(t(n).container)},{default:I(()=>{var C,N,O,V,L;return[e.icon||a.$slots.icon||e.headline||a.$slots.headline||e.title||a.$slots.title||e.description||a.$slots.description||(C=e.links)!=null&&C.length||a.$slots.links?(s(),i("div",{key:0,class:l(t(n).base)},[e.icon||a.$slots.icon?(s(),i("div",{key:0,class:l(t(n).icon.wrapper)},[d(a.$slots,"icon",{},()=>[S(f,{name:e.icon,class:l(t(n).icon.base)},null,8,["name","class"])])],2)):e.headline||a.$slots.headline?(s(),i("div",{key:1,class:l(t(n).headline)},[d(a.$slots,"headline",{},()=>[x(g(e.headline),1)])],2)):c("",!0),e.title||a.$slots.title?(s(),i("h2",{key:2,class:l(t(n).title)},[d(a.$slots,"title",{},()=>[x(g(e.title),1)])],2)):c("",!0),e.description||a.$slots.description?(s(),i("p",{key:3,class:l(t(n).description)},[d(a.$slots,"description",{},()=>[x(g(e.description),1)])],2)):c("",!0),e.align!=="center"&&((N=e.features)!=null&&N.length)?(s(),i("dl",{key:4,class:l([t(n).features.wrapper.base,t(n).features.wrapper.list])},[(s(!0),i(h,null,b(e.features,r=>(s(),i("div",{key:r.name,class:l(t(n).features.base)},[U("dt",{class:l(t(n).features.name)},[S(f,{name:r.icon||t(n).features.icon.name,class:l(t(n).features.icon.base),"aria-hidden":"true"},null,8,["name","class"]),r.name?(s(),i("span",G,g(r.name),1)):c("",!0)],2),r.description?(s(),i("dd",{key:0,class:l(t(n).features.description)},g(r.description),3)):c("",!0)],2))),128))],2)):c("",!0),e.align!=="center"&&((O=e.links)!=null&&O.length||a.$slots.links)?(s(),i("div",{key:5,class:l(t(n).links)},[d(a.$slots,"links",{},()=>[(s(!0),i(h,null,b(e.links,(r,B)=>(s(),j(k,v({key:B},r,{onClick:r.click}),null,16,["onClick"]))),128))])],2)):c("",!0)],2)):c("",!0),a.$slots[e.slot||"default"]?d(a.$slots,e.slot||"default",{key:1}):e.align==="right"?(s(),i("div",H)):c("",!0),e.align==="center"&&((V=e.features)!=null&&V.length)?(s(),i("dl",{key:3,class:l([t(n).features.wrapper.base,t(n).features.wrapper.grid])},[(s(!0),i(h,null,b(e.features,r=>(s(),i("div",{key:r.name,class:l(t(n).features.base)},[U("dt",{class:l(t(n).features.name)},[S(f,{name:r.icon||t(n).features.icon.name,class:l(t(n).features.icon.base),"aria-hidden":"true"},null,8,["name","class"]),r.name?(s(),i("span",K,g(r.name),1)):c("",!0)],2),r.description?(s(),i("dd",{key:0,class:l(t(n).features.description)},g(r.description),3)):c("",!0)],2))),128))],2)):c("",!0),e.align==="center"&&((L=e.links)!=null&&L.length||a.$slots.links)?(s(),i("div",{key:4,class:l(t(J)(t(n).links,"mt-0 justify-center"))},[d(a.$slots,"links",{},()=>[(s(!0),i(h,null,b(e.links,(r,B)=>(s(),j(k,v({key:B},r,{onClick:r.click}),null,16,["onClick"]))),128))])],2)):c("",!0)]}),_:3},8,["class"]),d(a.$slots,"bottom")],16)}}});export{Y as _,X as a};
