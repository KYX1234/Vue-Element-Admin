import{d as w,s as V,O as C,r as n,o as U,c as x,w as t,e as D,b as e,z as b,h as a,G as E}from"./index.4e690031.js";const k={class:"dialog-footer"},R=w({__name:"AddOrUpdate",setup(g,{expose:B}){const d=V(!1),m=V(),o=C({id:0,email:"",phone:"",name:"",password:"",status:1,role:""}),F=i=>{d.value=!0,i&&Object.assign(o,i)},c=()=>{!m.value||m.value.resetFields()};return B({init:F}),(i,l)=>{const p=n("el-input"),s=n("el-form-item"),r=n("el-option"),f=n("el-select"),v=n("el-form"),_=n("el-button"),A=n("el-dialog");return U(),x(A,{modelValue:a(d),"onUpdate:modelValue":l[8]||(l[8]=u=>E(d)?d.value=u:null),title:a(o).id?"\u7F16\u8F91":"\u6DFB\u52A0",width:"650px",onClosed:c,"append-to-body":""},{footer:t(()=>[D("span",k,[e(_,{onClick:l[6]||(l[6]=u=>d.value=!1)},{default:t(()=>[b("\u53D6\u6D88")]),_:1}),e(_,{type:"primary",onClick:l[7]||(l[7]=u=>d.value=!1)},{default:t(()=>[b("\u786E\u8BA4")]),_:1})])]),default:t(()=>[e(v,{model:a(o),inline:"","label-width":"55px",ref_key:"formRef",ref:m},{default:t(()=>[e(s,{label:"\u7528\u6237\u540D",prop:"name"},{default:t(()=>[e(p,{modelValue:a(o).name,"onUpdate:modelValue":l[0]||(l[0]=u=>a(o).name=u),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",clearable:""},null,8,["modelValue"])]),_:1}),e(s,{label:"\u90AE\u7BB1",prop:"email"},{default:t(()=>[e(p,{modelValue:a(o).email,"onUpdate:modelValue":l[1]||(l[1]=u=>a(o).email=u),placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1",clearable:""},null,8,["modelValue"])]),_:1}),e(s,{label:"\u624B\u673A\u53F7",prop:"phone"},{default:t(()=>[e(p,{modelValue:a(o).phone,"onUpdate:modelValue":l[2]||(l[2]=u=>a(o).phone=u),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",clearable:""},null,8,["modelValue"])]),_:1}),e(s,{label:"\u72B6\u6001",prop:"status"},{default:t(()=>[e(f,{modelValue:a(o).status,"onUpdate:modelValue":l[3]||(l[3]=u=>a(o).status=u),clearable:"",placeholder:"\u8BF7\u9009\u62E9"},{default:t(()=>[e(r,{label:"\u542F\u7528",value:1}),e(r,{label:"\u7981\u7528",value:0})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"\u89D2\u8272",prop:"role"},{default:t(()=>[e(f,{modelValue:a(o).role,"onUpdate:modelValue":l[4]||(l[4]=u=>a(o).role=u),clearable:"",placeholder:"\u8BF7\u9009\u62E9"},{default:t(()=>[e(r,{label:"\u8D85\u7EA7\u7BA1\u7406\u5458",value:1}),e(r,{label:"\u666E\u901A\u7528\u6237",value:0})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"\u5BC6\u7801",prop:"password"},{default:t(()=>[e(p,{modelValue:a(o).password,"onUpdate:modelValue":l[5]||(l[5]=u=>a(o).password=u),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",clearable:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])}}});export{R as _};
