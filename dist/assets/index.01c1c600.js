var O=Object.defineProperty,Q=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var q=(s,t,n)=>t in s?O(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,C=(s,t)=>{for(var n in t||(t={}))Z.call(t,n)&&q(s,n,t[n]);if(R)for(var n of R(t))Y.call(t,n)&&q(s,n,t[n]);return s},w=(s,t)=>Q(s,X(t));import{d as r,u as j,a as B,r as d,o as c,c as $,w as l,b as e,e as _,t as D,f as v,g as A,F as M,h as a,i as I,n as S,p as W,j as J,k as P,l as U,m as ee,q as T,s as N,v as te,x as H,y as ne,z as E,A as oe,B as ae,C as se,D as le,E as _e,G,H as K,I as ce,J as ue,T as de,K as re,L as ie}from"./index.664a9d74.js";import{_ as L}from"./index.d11ff49a.js";import{_ as k}from"./_plugin-vue_export-helper.cdc0426e.js";import{_ as pe}from"./user.2a63ca55.js";const me={class:"menu-title"},ve={class:"menu-title"},he=r({name:"MenuItem"}),fe=r(w(C({},he),{props:{data:{type:Object,required:!0}},setup(s){const t=j(),n=B(),u=p=>{var o;if((o=p.meta)!=null&&o.isLink)return window.open(p.meta.isLink,"_blank");t.push(p.path)};return(p,o)=>{const i=L,m=d("el-icon"),b=d("menu-item",!0),h=d("el-sub-menu"),y=d("el-menu-item");return s.data.children&&s.data.children.length>0?(c(),$(h,{key:0,index:s.data.path,"popper-class":a(n).menuMode},{title:l(()=>{var f;return[e(m,null,{default:l(()=>{var x;return[e(i,{"class-name":(x=s.data.meta)==null?void 0:x.icon},null,8,["class-name"])]}),_:1}),_("span",me,D((f=s.data.meta)==null?void 0:f.title),1)]}),default:l(()=>[(c(!0),v(M,null,A(s.data.children,f=>(c(),$(b,{key:f.path,data:f},null,8,["data"]))),128))]),_:1},8,["index","popper-class"])):(c(),$(y,{key:1,index:s.data.path,onClick:o[0]||(o[0]=f=>u(s.data))},{title:l(()=>{var f;return[_("span",ve,D((f=s.data.meta)==null?void 0:f.title),1)]}),default:l(()=>{var f;return[(f=s.data.meta)!=null&&f.icon?(c(),$(m,{key:0},{default:l(()=>[e(i,{"class-name":s.data.meta.icon},null,8,["class-name"])]),_:1})):I("",!0)]}),_:1},8,["index"]))}}})),ge=""+new URL("../favicon.ico",import.meta.url).href,be=s=>(W("data-v-dd04576d"),s=s(),J(),s),$e=be(()=>_("img",{src:ge,alt:"logo",class:"sidebar-logo"},null,-1)),Ce={key:0,class:"sidebar-title"},we=r({name:"Logo"}),ye=r(w(C({},we),{props:{collapse:{type:Boolean,required:!0}},setup(s){return(t,n)=>{const u=d("router-link");return c(),v("div",{class:S(["sidebar-logo-container",s.collapse&&"collapse"])},[e(u,{key:"collapse",class:"sidebar-logo-link",to:"/"},{default:l(()=>[$e,s.collapse?I("",!0):(c(),v("span",Ce,"ElementAdmin"))]),_:1})],2)}}}));const xe=k(ye,[["__scopeId","data-v-dd04576d"]]),ke=r({name:"Asider"}),Ee=r(w(C({},ke),{setup(s){const t=B(),n=P(),u=U(),p=ee(n.routes),o=T(()=>t.isCollapse),i=T(()=>t.isMenuUnique),m=T(()=>u.path),b=N(0),h=()=>{b.value=document.body.clientWidth,!o.value&&b.value<1200&&t.setCollapse(),o.value&&b.value>1200&&t.setCollapse()};return window.addEventListener("resize",h),te(()=>{window.removeEventListener("resize",h)}),(y,f)=>{const x=d("el-menu"),V=d("el-scrollbar"),g=d("el-aside");return c(),$(g,{class:S(["sidebar-container",a(t).menuMode]),width:"max-width"},{default:l(()=>[e(xe,{collapse:a(o)},null,8,["collapse"]),e(V,null,{default:l(()=>[e(x,{"default-active":a(m),class:"el-menu-vertical-demo",collapse:a(o),"unique-opened":a(i),"active-text-color":"var(--el-color-primary)"},{default:l(()=>[(c(!0),v(M,null,A(a(p),F=>(c(),$(fe,{key:F.path,data:F},null,8,["data"]))),128))]),_:1},8,["default-active","collapse","unique-opened"])]),_:1})]),_:1},8,["class"])}}}));const Be=k(Ee,[["__scopeId","data-v-9445a10a"]]),Me=r({__name:"MenuCollapse",setup(s){const t=B();return(n,u)=>{const p=L;return c(),v("div",{class:"header-action-item",onClick:u[0]||(u[0]=(...o)=>a(t).setCollapse&&a(t).setCollapse(...o))},[e(p,{"class-name":a(t).isCollapse?"fold":"unfold",size:"20"},null,8,["class-name"])])}}});const Fe=k(Me,[["__scopeId","data-v-e723075b"]]),De={class:"breadcrumb-title"},Ae=r({name:"Breadcrumb"}),Le=r(w(C({},Ae),{setup(s){const t=U(),n=B(),u=T(()=>t.matched.filter(o=>o.meta&&o.meta.title)),p=o=>{o.redirect?H.push(o.redirect):H.push(o.path)};return(o,i)=>{const m=d("el-breadcrumb-item"),b=d("el-breadcrumb");return a(n).breadCrumb?(c(),$(b,{key:0,separator:"/"},{default:l(()=>[(c(!0),v(M,null,A(a(u),(h,y)=>(c(),$(m,{key:y,onClick:f=>p(h)},{default:l(()=>[_("span",De,D(h.meta.title),1)]),_:2},1032,["onClick"]))),128))]),_:1})):I("",!0)}}}));const Se=k(Le,[["__scopeId","data-v-b018462d"]]),Ie={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},ze=_("path",{fill:"currentColor",d:"M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"},null,-1),Ve=_("path",{fill:"currentColor",d:"M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z"},null,-1),Te=[ze,Ve];function Ue(s,t){return c(),v("svg",Ie,Te)}const Ne={name:"ep-switch-button",render:Ue},Re={class:"header-action-item"},qe={class:"info"},He=["src"],je=r({name:"InfoDialog"}),We=r(w(C({},je),{setup(s){const t=ne();return console.log(t.userInfo),(n,u)=>{const p=pe,o=d("el-icon"),i=d("el-dropdown-item"),m=Ne,b=d("el-dropdown-menu"),h=d("el-dropdown");return c(),v("div",Re,[e(h,{trigger:"click"},{dropdown:l(()=>[e(b,null,{default:l(()=>[e(i,null,{default:l(()=>[e(o,null,{default:l(()=>[e(p)]),_:1}),E("\u4E2A\u4EBA\u4E2D\u5FC3")]),_:1}),e(i,{divided:"",onClick:a(t).logout},{default:l(()=>[e(o,null,{default:l(()=>[e(m)]),_:1}),E("\u9000\u51FA\u7CFB\u7EDF")]),_:1},8,["onClick"])]),_:1})]),default:l(()=>{var y,f;return[_("div",qe,[_("img",{src:(y=a(t).userInfo)==null?void 0:y.avatar},null,8,He),_("span",null,D((f=a(t).userInfo)==null?void 0:f.username),1)])]}),_:1})])}}}));const Je=k(We,[["__scopeId","data-v-c8728dae"]]),Pe={class:"header-action-item"},Ge=["src"],Ke={class:"list-item-r"},Oe={class:"name"},Qe={class:"time"},Xe={class:"ellipsis-1"},Ze=r({name:"Notice"}),Ye=r(w(C({},Ze),{setup(s){const t=[{name:"\u9752\u9E1F",datetime:"1\u5C0F\u65F6\u4E4B\u524D",content:"\u81EA\u884C\u5B9E\u73B0\u8DF3\u8F6C\u5230\u6D88\u606F\u9875\u9762",avatar:"https://imglf5.lf127.net/img/3e59470c10c6fafd/Umxrb1RIL3dhNjNtdzNrazd1dEQ0eXJucmw3Lzh5ZWdoUnBJU2p2dkFVaz0.gif?imageView&thumbnail=1000x0&tostatic=0"},{name:"\u54C8\u54C8\u54C8",datetime:"2\u5C0F\u65F6\u4E4B\u524D",content:"\u5173\u6CE8\u4E86\u4F60",avatar:"https://i04piccdn.sogoucdn.com/4517583f6e9b01e4"},{name:"\u6211\u53EF\u8389\u5BB3\u4E86",datetime:"2\u4E2A\u534A\u5C0F\u65F6\u4E4B\u524D",content:"\u6536\u85CF\u4E86\u4F60\u7684\u6587\u7AE0",avatar:"https://i03piccdn.sogoucdn.com/7c49fa00d66c3d29"}];return(n,u)=>{const p=L,o=d("el-badge"),i=d("el-tab-pane"),m=d("el-tabs"),b=d("el-popover");return c(),$(b,{ref:"popover",placement:"bottom-end",width:"250",trigger:"click"},{reference:l(()=>[_("div",Pe,[e(o,{value:3,max:99},{default:l(()=>[e(p,{"class-name":"notice",size:"18"})]),_:1})])]),default:l(()=>[e(m,{class:"demo-tabs","model-value":"1"},{default:l(()=>[e(i,{label:"\u901A\u77E5(1)",name:"1"}),e(i,{label:"\u5173\u6CE8(1)",name:"2"}),e(i,{label:"\u4EE3\u529E(1)",name:"3"})]),_:1}),_("section",null,[(c(),v(M,null,A(t,(h,y)=>_("div",{key:y,class:"list-item"},[_("img",{src:h.avatar,alt:"",loading:"lazy"},null,8,Ge),_("div",Ke,[_("div",null,[_("span",Oe,D(h.name),1),_("span",Qe,D(h.datetime),1)]),_("div",Xe,D(h.content),1)])])),64))])]),_:1},512)}}}));const et=k(Ye,[["__scopeId","data-v-1e46ca21"]]);const tt={},nt={class:"header-action-item"};function ot(s,t){const n=L;return c(),v("div",nt,[e(n,{"class-name":"search",size:"20"})])}const at=k(tt,[["render",ot],["__scopeId","data-v-7b1bded2"]]),st=r({name:"Fullscreen"}),lt=r(w(C({},st),{setup(s){const{isFullscreen:t,toggle:n}=oe();return(u,p)=>{const o=L;return c(),v("div",{class:"header-action-item",onClick:p[0]||(p[0]=(...i)=>a(n)&&a(n)(...i))},[e(o,{"class-name":a(t)?"fullscreen":"screen",size:"18"},null,8,["class-name"])])}}}));const _t=k(lt,[["__scopeId","data-v-39a76311"]]),ct={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},ut=_("path",{fill:"currentColor",d:"M406.656 706.944L195.84 496.256a32 32 0 1 0-45.248 45.248l256 256l512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"},null,-1),dt=[ut];function rt(s,t){return c(),v("svg",ct,dt)}const it={name:"ep-check",render:rt},pt=["#2d8cf0","#2e59a7","#d9a62e","#0084f4","#59b9c6","#009688","#536dfe","#ff5c93","#d77f66","#ee4f12","#0096c7","#9c27b0","#ff9800","#165DFF","#775039","#c3d825","#a46244"],mt=[{label:"\u9ED8\u8BA4",value:"zoom-fade"},{label:"\u6ED1\u52A8",value:"fade-slide"},{label:"\u6E10\u53D8",value:"fade"},{label:"\u5E95\u90E8\u6ED1\u51FA",value:"fade-bottom"},{label:"\u7F29\u653E\u6D88\u9000",value:"fade-scale"}],z=s=>(W("data-v-580e09d6"),s=s(),J(),s),vt={class:"setting-item"},ht=["onClick"],ft={class:"menu-item"},gt={class:"show-setting"},bt=z(()=>_("div",null,"\u663E\u793A\u9762\u5305\u5C51",-1)),$t=z(()=>_("div",null,"\u663E\u793A\u6807\u7B7E\u9875",-1)),Ct=z(()=>_("div",null,"\u83DC\u5355\u624B\u98CE\u7434\u6A21\u5F0F",-1)),wt=z(()=>_("div",null,"\u7070\u8272\u6A21\u5F0F",-1)),yt={class:"show-setting"},xt=z(()=>_("div",null,"\u663E\u793A\u52A8\u753B",-1)),kt=z(()=>_("div",null,"\u52A8\u753B\u7C7B\u578B",-1)),Et=r({name:"Drawer"}),Bt=r(w(C({},Et),{props:{drawer:{type:Boolean,default:!1}},emits:["update:drawer"],setup(s,{emit:t}){const n=B();ae(()=>{n.setThemeColor(n.themeColor),n.isDark&&document.documentElement.classList.add("dark"),n.grayMode&&document.documentElement.classList.add("html-grey")});const u=()=>{t("update:drawer",!1),n.setStorage()};return(p,o)=>{const i=d("el-divider"),m=d("el-switch"),b=d("el-row"),h=it,y=d("el-icon"),f=d("el-option"),x=d("el-select"),V=d("el-drawer");return c(),$(V,{"model-value":s.drawer,size:350,onClose:u,title:"\u9879\u76EE\u914D\u7F6E"},{default:l(()=>[e(i,null,{default:l(()=>[E("\u4E3B\u9898")]),_:1}),e(b,{class:"row-bg",justify:"center"},{default:l(()=>[e(m,{"model-value":a(n).themeMode,"inline-prompt":"","active-value":"dark","inactive-value":"light","active-icon":a(se),"inactive-icon":a(le),onChange:a(n).setThemeMode},null,8,["model-value","active-icon","inactive-icon","onChange"])]),_:1}),e(i,null,{default:l(()=>[E("\u7CFB\u7EDF\u4E3B\u9898")]),_:1}),_("ul",vt,[(c(!0),v(M,null,A(a(pt),(g,F)=>(c(),v("li",{key:F,style:_e({"background-color":g}),onClick:kn=>a(n).setThemeColor(g)},[g===a(n).themeColor?(c(),$(y,{key:0},{default:l(()=>[e(h)]),_:1})):I("",!0)],12,ht))),128))]),e(i,null,{default:l(()=>[E("\u83DC\u5355\u98CE\u683C")]),_:1}),_("ul",ft,[_("li",{class:S([a(n).menuMode==="light"&&"is-select"]),onClick:o[0]||(o[0]=g=>a(n).setMenuMode("light"))},null,2),_("li",{class:S([a(n).menuMode==="dark"&&"is-select"]),onClick:o[1]||(o[1]=g=>a(n).setMenuMode("dark"))},null,2)]),e(i,null,{default:l(()=>[E("\u754C\u9762\u663E\u793A")]),_:1}),_("ul",gt,[_("li",null,[bt,e(m,{modelValue:a(n).breadCrumb,"onUpdate:modelValue":o[2]||(o[2]=g=>a(n).breadCrumb=g)},null,8,["modelValue"])]),_("li",null,[$t,e(m,{modelValue:a(n).navTabs,"onUpdate:modelValue":o[3]||(o[3]=g=>a(n).navTabs=g)},null,8,["modelValue"])]),_("li",null,[Ct,e(m,{modelValue:a(n).isMenuUnique,"onUpdate:modelValue":o[4]||(o[4]=g=>a(n).isMenuUnique=g)},null,8,["modelValue"])]),_("li",null,[wt,e(m,{"model-value":a(n).grayMode,onChange:a(n).setGrayMode},null,8,["model-value","onChange"])])]),e(i,null,{default:l(()=>[E("\u52A8\u753B")]),_:1}),_("ul",yt,[_("li",null,[xt,e(m,{modelValue:a(n).animate,"onUpdate:modelValue":o[5]||(o[5]=g=>a(n).animate=g)},null,8,["modelValue"])]),_("li",null,[kt,e(x,{modelValue:a(n).animateMode,"onUpdate:modelValue":o[6]||(o[6]=g=>a(n).animateMode=g)},{default:l(()=>[(c(!0),v(M,null,A(a(mt),g=>(c(),$(f,{key:g.value,label:g.label,value:g.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])])]),_:1},8,["model-value"])}}}));const Mt=k(Bt,[["__scopeId","data-v-580e09d6"]]),Ft=r({name:"Setting"}),Dt=r(w(C({},Ft),{setup(s){const t=N(!1);return(n,u)=>{const p=L;return c(),v(M,null,[_("div",{class:"header-action-item",onClick:u[0]||(u[0]=o=>t.value=!0)},[e(p,{"class-name":"setting",size:"18"})]),e(Mt,{drawer:a(t),"onUpdate:drawer":u[1]||(u[1]=o=>G(t)?t.value=o:null)},null,8,["drawer"])],64)}}}));const At=k(Dt,[["__scopeId","data-v-d0664347"]]),Lt=r({name:"Reload"}),St=r(w(C({},Lt),{setup(s){const t=N(!1),n=B(),u=()=>{t.value||(t.value=!0,n.reloadPage(),setTimeout(()=>{t.value=!1},1200))};return(p,o)=>{const i=L;return c(),v("div",{class:"header-action-item",onClick:u},[e(i,{"class-name":"refresh",class:S(a(t)&&"tun-refresh"),size:"18"},null,8,["class"])])}}}));const It=k(St,[["__scopeId","data-v-e959b384"]]),zt={class:"header-container-left"},Vt={class:"header-container-right"},Tt=r({name:"Header"}),Ut=r(w(C({},Tt),{setup(s){const t=B();return(n,u)=>{const p=d("el-header");return c(),$(p,{class:S(["header-container",a(t).menuMode])},{default:l(()=>[_("div",zt,[e(Fe),e(Se)]),_("div",Vt,[e(at),e(It),e(et),e(_t),e(Je),e(At)])]),_:1},8,["class"])}}}));const Nt=k(Ut,[["__scopeId","data-v-95b8ad58"]]),Rt={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},qt=_("path",{fill:"currentColor",d:"M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"},null,-1),Ht=[qt];function jt(s,t){return c(),v("svg",Rt,Ht)}const Wt={name:"ep-minus",render:jt},Jt={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Pt=_("path",{fill:"currentColor",d:"M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32z"},null,-1),Gt=[Pt];function Kt(s,t){return c(),v("svg",Jt,Gt)}const Ot={name:"ep-switch",render:Kt},Qt={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Xt=_("path",{fill:"currentColor",d:"M764.288 214.592L512 466.88L259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512L214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"},null,-1),Zt=[Xt];function Yt(s,t){return c(),v("svg",Qt,Zt)}const en={name:"ep-close",render:Yt},tn={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},nn=_("path",{fill:"currentColor",d:"M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384a384 384 0 0 1-384-384a384 384 0 0 1 643.712-282.88z"},null,-1),on=[nn];function an(s,t){return c(),v("svg",tn,on)}const sn={name:"ep-refresh-right",render:an},ln={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},_n=_("path",{fill:"currentColor",d:"M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z"},null,-1),cn=[_n];function un(s,t){return c(),v("svg",ln,cn)}const dn={name:"ep-arrow-down",render:un},rn={class:"more-down"},pn=r({name:"MoreDown"}),mn=r(w(C({},pn),{setup(s){const t=U(),n=B(),u=K();return(p,o)=>{const i=dn,m=d("el-icon"),b=sn,h=d("el-dropdown-item"),y=en,f=Ot,x=Wt,V=d("el-dropdown-menu"),g=d("el-dropdown");return c(),$(g,{trigger:"click"},{dropdown:l(()=>[e(V,null,{default:l(()=>[e(h,{onClick:o[0]||(o[0]=F=>a(n).reloadPage())},{default:l(()=>[e(m,null,{default:l(()=>[e(b)]),_:1}),E(" \u91CD\u65B0\u52A0\u8F7D ")]),_:1}),e(h,{onClick:o[1]||(o[1]=F=>a(u).removeTabsItem(a(t).path))},{default:l(()=>[e(m,null,{default:l(()=>[e(y)]),_:1}),E(" \u5173\u95ED\u5F53\u524D ")]),_:1}),e(h,{onClick:o[2]||(o[2]=F=>a(u).colseTabsOther(a(t).path))},{default:l(()=>[e(m,null,{default:l(()=>[e(f)]),_:1}),E(" \u5173\u95ED\u5176\u5B83 ")]),_:1}),e(h,{onClick:a(u).clearTabsAll},{default:l(()=>[e(m,null,{default:l(()=>[e(x)]),_:1}),E(" \u5173\u95ED\u5168\u90E8 ")]),_:1},8,["onClick"])]),_:1})]),default:l(()=>[_("div",rn,[e(m,null,{default:l(()=>[e(i)]),_:1})])]),_:1})}}}));const vn=k(mn,[["__scopeId","data-v-fb4848ce"]]),hn={key:0,class:"navtabs-container"},fn=r({name:"NavTabs"}),gn=r(w(C({},fn),{setup(s){const t=B(),n=K(),u=U(),p=j(),o=N(u.path);ce(()=>{i()}),ue(()=>u.path,()=>{i()});const i=()=>{o.value=u.path,n.addTabsItem({title:u.meta.title||"\u672A\u547D\u540D",name:u.name,path:u.path})},m=b=>{p.push(b.props.name)};return(b,h)=>{const y=d("el-tab-pane"),f=d("el-tabs");return a(t).navTabs?(c(),v("div",hn,[e(f,{modelValue:a(o),"onUpdate:modelValue":h[0]||(h[0]=x=>G(o)?o.value=x:null),type:"card",onTabClick:m,onTabRemove:a(n).removeTabsItem},{default:l(()=>[(c(!0),v(M,null,A(a(n).tabsList,x=>(c(),$(y,{label:x.title,key:x.path,name:x.path,closable:x.path!=="/dashboard"},null,8,["label","name","closable"]))),128))]),_:1},8,["modelValue","onTabRemove"]),e(vn)])):I("",!0)}}}));const bn=k(gn,[["__scopeId","data-v-5fd919c5"]]),$n={class:"main-container"},Cn=r({name:"Main"}),wn=r(w(C({},Cn),{setup(s){const t=B(),n=P();return(u,p)=>{const o=d("router-view");return c(),v("div",$n,[e(o,null,{default:l(({Component:i,route:m})=>[e(de,{name:a(t).transitionName,mode:"out-in",appear:""},{default:l(()=>[a(t).reloadFlag?(c(),$(ie,{key:0,include:a(n).keepAlive},[(c(),$(re(i),{key:m.path}))],1032,["include"])):I("",!0)]),_:2},1032,["name"])]),_:1})])}}}));const yn=k(wn,[["__scopeId","data-v-aba4d373"]]),xn=r({name:"Layout"}),An=r(w(C({},xn),{setup(s){return(t,n)=>{const u=d("el-container");return c(),$(u,{class:"layout"},{default:l(()=>[e(Be),e(u,{direction:"vertical"},{default:l(()=>[e(Nt),e(bn),e(yn)]),_:1})]),_:1})}}}));export{An as default};
