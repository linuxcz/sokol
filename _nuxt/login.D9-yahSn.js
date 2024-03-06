import{l as H,al as Z,am as D,d as F,ab as P,ac as K,ao as T,ap as N,D as j,b4 as Q,as as C,b as l,c as b,e as U,n as m,F as I,ai as h,t as J,ah as S,aj as x,f as g,ae as W,o as X,a as ee,r as M,Q as _,aN as te,bc as ae,N as se,E as c,g as z,j as E,ag as L,w as y,av as re,bd as ne,an as oe,be as ie,bf as le,aR as ue,aK as ce}from"./entry.CpF6JYmA.js";import{_ as de}from"./Card.aLOCdfPo.js";const me={wrapper:{base:"flex items-center align-center text-center w-full",horizontal:"flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs"}},A=Z(D.ui.strategy,D.ui.divider,me),fe=F({components:{UIcon:P,UAvatar:K},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>A.default.size,validator(e){return Object.keys(A.border.size.horizontal).includes(e)||Object.keys(A.border.size.vertical).includes(e)}},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:"solid",validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:s,attrs:n}=T("divider",N(e,"ui"),A),i=j(()=>Q(C(s.value.wrapper.base,s.value.wrapper[e.orientation]),e.class)),d=j(()=>C(s.value.container.base,s.value.container[e.orientation])),t=j(()=>C(s.value.border.base,s.value.border[e.orientation],s.value.border.size[e.orientation][e.size],s.value.border.type[e.type]));return{ui:s,attrs:n,wrapperClass:i,containerClass:d,borderClass:t}}});function be(e,s,n,i,d,t){const f=P,p=K;return l(),b("div",x({class:e.wrapperClass},e.attrs),[U("div",{class:m(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(l(),b(I,{key:0},[U("div",{class:m(e.containerClass)},[h(e.$slots,"default",{},()=>[e.label?(l(),b("span",{key:0,class:m(e.ui.label)},J(e.label),3)):e.icon?(l(),S(f,{key:1,name:e.icon,class:m(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(l(),S(p,x({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):g("",!0)])],2),U("div",{class:m(e.borderClass)},null,2)],64)):g("",!0)],16)}const pe=H(fe,[["render",be]]);class B extends Error{constructor(s){super(s),this.message=s,Object.setPrototypeOf(this,B.prototype)}}const ve=F({props:{schema:{type:Object,default:void 0},state:{type:Object,required:!0},validate:{type:Function,default:()=>[]},validateOn:{type:Array,default:()=>["blur","input","change","submit"]}},emits:["submit","error"],setup(e,{expose:s,emit:n}){const i=W("$rdwNsAGMKE"),d=ae(`form-${i}`);X(()=>{d.on(async a=>{var u;a.type!=="submit"&&((u=e.validateOn)!=null&&u.includes(a.type))&&await r(a.path,{silent:!0})})}),ee(()=>{d.reset()});const t=M([]);_("form-errors",t),_("form-events",d);const f=M({});_("form-inputs",f);async function p(){let a=await e.validate(e.state);if(e.schema)if(we(e.schema))a=a.concat(await $e(e.state,e.schema));else if(ye(e.schema))a=a.concat(await ge(e.state,e.schema));else if(ke(e.schema))a=a.concat(await xe(e.state,e.schema));else if(Ee(e.schema))a=a.concat(await ze(e.state,e.schema));else throw new Error("Form validation failed: Unsupported form schema");return a}async function r(a,u={silent:!1}){let v=a;if(a&&!Array.isArray(a)&&(v=[a]),v){const $=t.value.filter(k=>!v.includes(k.path)),O=(await p()).filter(k=>v.includes(k.path));t.value=$.concat(O)}else t.value=await p();if(t.value.length>0){if(u.silent)return!1;throw new B(`Form validation failed: ${JSON.stringify(t.value,null,2)}`)}return e.state}async function w(a){var v;const u=a;try{(v=e.validateOn)!=null&&v.includes("submit")&&await r();const $={...u,data:e.state};n("submit",$)}catch($){if(!($ instanceof B))throw $;const O={...u,errors:t.value.map(k=>({...k,id:f.value[k.path]}))};n("error",O)}}return s({validate:r,errors:t,setErrors(a,u){t.value=a,u?t.value=t.value.filter(v=>v.path!==u).concat(a):t.value=a},async submit(){await w(new Event("submit"))},getErrors(a){return a?t.value.filter(u=>u.path===a):t.value},clear(a){a?t.value=t.value.filter(u=>u.path!==a):t.value=[]}}),{onSubmit:w}}});function ye(e){return e.validate&&e.__isYupSchema__}function he(e){return e.inner!==void 0}async function ge(e,s){try{return await s.validate(e,{abortEarly:!1}),[]}catch(n){if(he(n))return n.inner.map(i=>({path:i.path??"",message:i.message}));throw n}}function we(e){return e.parse!==void 0}async function $e(e,s){const n=await s.safeParseAsync(e);return n.success===!1?n.error.issues.map(i=>({path:i.path.join("."),message:i.message})):[]}function ke(e){return e.validateAsync!==void 0&&e.id!==void 0}function Se(e){return e.isJoi===!0}async function xe(e,s){try{return await s.validateAsync(e,{abortEarly:!1}),[]}catch(n){if(Se(n))return n.details.map(i=>({path:i.path.join("."),message:i.message}));throw n}}function Ee(e){return e._parse!==void 0}async function ze(e,s){const n=await s._parse(e);return n.issues?n.issues.map(i=>{var d;return{path:((d=i.path)==null?void 0:d.map(t=>t.key).join("."))||"",message:i.message}}):[]}function Oe(e,s,n,i,d,t){return l(),b("form",{onSubmit:s[0]||(s[0]=te((...f)=>e.onSubmit&&e.onSubmit(...f),["prevent"]))},[h(e.$slots,"default")],32)}const Ae=H(ve,[["render",Oe]]),je=F({inheritAttrs:!1,__name:"AuthForm",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},align:{type:String,default:"bottom"},loading:{type:Boolean,default:!1},fields:{type:Array,default:()=>[]},providers:{type:Array,default:()=>[]},submitButton:{type:Object,default:()=>({})},schema:{type:Object,default:void 0},validate:{type:[Function,Array],default:void 0},validateOn:{type:Array,default:()=>["submit"]},divider:{type:String,default:"or"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},emits:["submit"],setup(e,{expose:s}){const n=e,i=j(()=>({wrapper:"w-full max-w-sm space-y-6",base:"",container:C("gap-y-6 flex flex-col",n.align==="top"&&"flex-col-reverse"),title:"text-2xl text-gray-900 dark:text-white font-bold",description:"text-gray-500 dark:text-gray-400 mt-1",icon:{wrapper:"mb-2 pointer-events-none",base:"w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"},providers:"space-y-3",form:"space-y-6",footer:"text-sm text-gray-500 dark:text-gray-400 mt-2",default:{submitButton:{label:"Continue"}}})),d=M(),{ui:t,attrs:f}=T("auth.form",N(n,"ui"),i,N(n,"class"),!0),p=se(Object.values(n.fields).reduce((r,{name:w})=>(r[w]=void 0,r),{}));return s({formRef:d}),(r,w)=>{var R,G,Y,q;const a=P,u=oe,v=pe,$=ie,O=le,k=Ae;return l(),b("div",x({class:c(t).wrapper},c(f)),[e.icon||r.$slots.icon||e.title||r.$slots.title||e.description||r.$slots.description?(l(),b("div",{key:0,class:m(c(t).base)},[e.icon||r.$slots.icon?(l(),b("div",{key:0,class:m(c(t).icon.wrapper)},[h(r.$slots,"icon",{},()=>[z(a,{name:e.icon,class:m(c(t).icon.base)},null,8,["name","class"])])],2)):g("",!0),e.title||r.$slots.title?(l(),b("p",{key:1,class:m(c(t).title)},[h(r.$slots,"title",{},()=>[E(J(e.title),1)])],2)):g("",!0),e.description||r.$slots.description?(l(),b("p",{key:2,class:m(c(t).description)},[h(r.$slots,"description",{},()=>[E(J(e.description),1)])],2)):g("",!0)],2)):g("",!0),U("div",{class:m(c(t).container)},[(R=e.providers)!=null&&R.length?(l(),b("div",{key:0,class:m(c(t).providers)},[(l(!0),b(I,null,L(e.providers,(o,V)=>(l(),S(u,x({key:V},o,{block:"",onClick:o.click}),null,16,["onClick"]))),128))],2)):g("",!0),(G=e.providers)!=null&&G.length&&((Y=e.fields)!=null&&Y.length)?(l(),S(v,{key:1,label:e.divider},null,8,["label"])):g("",!0),(q=e.fields)!=null&&q.length?(l(),S(k,{key:2,ref_key:"formRef",ref:d,state:c(p),schema:e.schema,validate:e.validate,"validate-on":e.validateOn,class:m(c(t).form),onSubmit:w[0]||(w[0]=o=>r.$emit("submit",o.data))},{default:y(()=>[(l(!0),b(I,null,L(e.fields,o=>(l(),S(O,{key:o.name,label:o.label,description:o.description,help:o.help,hint:o.hint,name:o.name,size:o.size},re({default:y(()=>[z($,x({modelValue:c(p)[o.name],"onUpdate:modelValue":V=>c(p)[o.name]=V},c(ne)(o,["label","description","help","hint","size"])),null,16,["modelValue","onUpdate:modelValue"])]),_:2},[r.$slots[`${o.name}-label`]?{name:"label",fn:y(()=>[h(r.$slots,`${o.name}-label`)]),key:"0"}:void 0,r.$slots[`${o.name}-description`]?{name:"description",fn:y(()=>[h(r.$slots,`${o.name}-description`)]),key:"1"}:void 0,r.$slots[`${o.name}-hint`]?{name:"hint",fn:y(()=>[h(r.$slots,`${o.name}-hint`)]),key:"2"}:void 0,r.$slots[`${o.name}-help`]?{name:"help",fn:y(()=>[h(r.$slots,`${o.name}-help`)]),key:"3"}:void 0]),1032,["label","description","help","hint","name","size"]))),128)),z(u,x({type:"submit",block:"",loading:e.loading},{...c(t).default.submitButton,...e.submitButton}),null,16,["loading"])]),_:3},8,["state","schema","validate","validate-on","class"])):g("",!0)],2),r.$slots.footer?(l(),b("p",{key:1,class:m(c(t).footer)},[h(r.$slots,"footer")],2)):g("",!0)],16)}}}),Be=F({__name:"login",setup(e){ue({title:"Login"});const s=[{name:"email",type:"text",label:"Email",placeholder:"Enter your email"},{name:"password",label:"Password",type:"password",placeholder:"Enter your password"}],n=t=>{const f=[];return t.email||f.push({path:"email",message:"Email is required"}),t.password||f.push({path:"password",message:"Password is required"}),f},i=[{label:"Continue with GitHub",icon:"i-simple-icons-github",color:"white",click:()=>{console.log("Redirect to GitHub")}}];function d(t){console.log("Submitted",t)}return(t,f)=>{const p=ce,r=je,w=de;return l(),S(w,{class:"max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur"},{default:y(()=>[z(r,{fields:s,validate:n,providers:i,title:"Welcome back",align:"top",icon:"i-heroicons-lock-closed",ui:{base:"text-center",footer:"text-center"},"submit-button":{trailingIcon:"i-heroicons-arrow-right-20-solid"},onSubmit:d},{"password-hint":y(()=>[z(p,{to:"/",class:"text-primary font-medium"},{default:y(()=>[E("Forgot password?")]),_:1})]),footer:y(()=>[E(" By signing in, you agree to our "),z(p,{to:"/",class:"text-primary font-medium"},{default:y(()=>[E("Terms of Service")]),_:1}),E(". ")]),_:1})]),_:1})}}});export{Be as default};
