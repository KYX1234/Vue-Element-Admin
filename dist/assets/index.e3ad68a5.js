import{_ as A}from"./index.f74f4ca0.js";import{W as B,d as w,s,O as C,I as k,r as E,o as x,f as v,b as t,w as u,h as n,Y as R,z as o,Z as T,P as _,_ as f,$ as y}from"./index.20770995.js";import{_ as O}from"./AddOrUpdate.vuevuetypescriptsetuptruelang.9e346bde.js";import"./plugin-vueexport-helper.2444895f.js";const V=p=>B.get("/mock/admin",{params:p}),$=()=>B.get("/mock/admin/status"),M={class:"app-container"},z=w({__name:"index",setup(p){const l=s(),r=s(),D=C({type:1});k(()=>{b(),l.value.getList()});const b=async()=>{const{data:e}=await $();c.value[2].options=e},F=()=>{T.confirm("\u60A8\u786E\u8BA4\u8981\u5220\u9664\u5F53\u524D\u9879\u5417\uFF1F","\u63D0\u793A",{confirmButtonText:"\u786E\u8BA4",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{_({type:"success",message:"\u53EA\u662F\u4E2Ademo\uFF01"})}).catch(()=>{_({type:"info",message:"\u53D6\u6D88\u64CD\u4F5C"})})},i=e=>{r.value.init(e)},c=s([{type:"el-input",prop:"name",label:"\u540D\u79F0"},{type:"el-input",prop:"phone",label:"\u624B\u673A\u53F7"},{type:"el-select",prop:"status",label:"\u72B6\u6001",defaultValue:"",options:[],clearable:!0},{type:"el-input",prop:"test1",label:"\u6D4B\u8BD51"},{type:"el-input",prop:"test2",label:"\u6D4B\u8BD52"},{type:"el-input",prop:"test3",label:"\u6D4B\u8BD53"},{type:"el-input",prop:"test4",label:"\u6D4B\u8BD54"},{type:"el-date-picker",prop:"dateRangeValue",label:"\u65F6\u95F4",span:2,config:{type:"datetimerange",align:"right"}}]),g=[{type:"selection",width:50},{type:"index",width:50,label:"No."},{prop:"name",label:"\u540D\u79F0"},{label:"\u624B\u673A\u53F7",prop:"phone"},{label:"\u89D2\u8272",render:e=>f(y,{type:"success"},()=>e.row.role?"\u8D85\u7EA7\u7BA1\u7406\u5458":"\u666E\u901A\u7528\u6237")},{label:"\u72B6\u6001",render:e=>f(y,{type:e.row.status?"success":"info"},()=>e.row.status?"\u542F\u7528":"\u7981\u7528")},{label:"\u521B\u5EFA\u65F6\u95F4",prop:"creat_at",width:180},{label:"\u64CD\u4F5C",slot:"action",width:260,fixed:"right"}];return(e,d)=>{const a=E("el-button"),h=A;return x(),v("div",M,[t(h,{ref_key:"tableRef",ref:l,api:n(V),column:g,search:n(c),params:n(D)},{header:u(()=>[t(a,{icon:n(R),type:"primary",onClick:d[0]||(d[0]=m=>i())},{default:u(()=>[o("\u6DFB\u52A0")]),_:1},8,["icon"])]),action:u(m=>[t(a,{type:"primary",plain:"",onClick:N=>i(m.row)},{default:u(()=>[o("\u7F16\u8F91")]),_:2},1032,["onClick"]),t(a,{type:"primary",plain:""},{default:u(()=>[o("\u83DC\u5355\u6743\u9650")]),_:1}),t(a,{type:"danger",plain:"",onClick:F},{default:u(()=>[o("\u5220\u9664")]),_:1})]),_:1},8,["api","search","params"]),t(O,{ref_key:"addOrUpdateRef",ref:r},null,512)])}}});export{z as default};
