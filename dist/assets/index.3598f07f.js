import{_ as w}from"./index.61c82cf8.js";import{W as y,d as x,s as o,I as E,r as v,o as R,f as M,b as a,w as u,z as l,h as f,Z as I,P as m}from"./index.4e690031.js";import{_ as L}from"./AddOrUpdate.vuevuetypescriptsetuptruelang.d7d6b810.js";import{_ as T}from"./Authority.vuevuetypescriptsetuptruelang.71418b32.js";import"./plugin-vueexport-helper.2444895f.js";const $=()=>y.get("/mock/role"),h=s=>y.post("/mock/roleId",s),N={class:"app-container"},P=x({__name:"index",setup(s){const r=o(),c=o(),i=o(),p=o([]);E(()=>{r.value.getList(),k()});const F=e=>e.list,C=[{type:"index",width:50,label:"No."},{prop:"name",label:"\u540D\u79F0"},{prop:"role_name",label:"\u6807\u8BC6"},{prop:"creat_at",label:"\u521B\u5EFA\u65F6\u95F4"},{slot:"action",label:"\u64CD\u4F5C",width:260}],b=e=>{c.value.init(e)},g=async e=>{const n=await h({id:e.id}),t=d(n.data);i.value.init(t)},k=async()=>{const{data:e}=await h({id:1});p.value=e},d=(e,n=[])=>(e.forEach(t=>{t.children&&t.children.length?d(t.children,n):n.push(t.id)}),n),B=()=>{I.confirm("\u60A8\u786E\u8BA4\u8981\u5220\u9664\u5F53\u524D\u9879\u5417\uFF1F","\u63D0\u793A",{confirmButtonText:"\u786E\u8BA4",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{m({type:"success",message:"\u53EA\u662F\u4E2Ademo\uFF01"})}).catch(()=>{m({type:"info",message:"\u53D6\u6D88\u64CD\u4F5C"})})};return(e,n)=>{const t=v("el-button"),D=w;return R(),M("div",N,[a(D,{ref_key:"tableRef",ref:r,column:C,api:f($),callback:F,"is-pageable":!1},{action:u(_=>[a(t,{type:"primary",plain:"",onClick:A=>b(_.row)},{default:u(()=>[l("\u7F16\u8F91")]),_:2},1032,["onClick"]),a(t,{type:"primary",plain:"",onClick:A=>g(_.row)},{default:u(()=>[l("\u83DC\u5355\u6743\u9650")]),_:2},1032,["onClick"]),a(t,{type:"danger",plain:"",onClick:B},{default:u(()=>[l("\u5220\u9664")]),_:1})]),_:1},8,["api"]),a(L,{ref_key:"addOrUpdateRef",ref:c},null,512),a(T,{ref_key:"authorityRef",ref:i,"all-menu-list":f(p)},null,8,["all-menu-list"])])}}});export{P as default};
