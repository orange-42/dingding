(function(){"use strict";var e={4585:function(e,t,a){var l=a(9242),n=a(2483),o=(a(7658),a(3396)),u=a(7139),i=a(4870);const s=e=>((0,o.dD)("data-v-bc85b1f0"),e=e(),(0,o.Cn)(),e),r={class:"audit-box"},c={class:"tab"},d=s((()=>(0,o._)("p",{class:"welcome"},"欢迎来到审计督办整改管理系统",-1)));var m={__name:"home",setup(e){const t=(0,n.tv)();function a(){t.push("Calendar")}function l(){t.push({name:"InstitutionalDocuments"})}function s(){t.push({name:"ArchiveAccessProject"})}function m(){t.push({name:"FinancialAdvisory"})}const v=(0,i.iH)();function p(){}return(0,o.bv)((()=>{p()})),(e,t)=>{const n=(0,o.up)("van-grid-item"),i=(0,o.up)("van-grid");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",c,[d,(0,o.Uk)(" "+(0,u.zw)(v.value)+" ",1),(0,o.Wm)(i,{clickable:"","column-num":3,gutter:10},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{icon:"todo-list-o",text:"日程管理",to:"/",onClick:a}),(0,o.Wm)(n,{icon:"comment-o",text:"财务咨询",onClick:m}),(0,o.Wm)(n,{icon:"records",text:"审计底稿录入",onClick:s}),(0,o.Wm)(n,{icon:"orders-o",text:"法规查阅",onClick:l})])),_:1})])])}}},v=a(89);const p=(0,v.Z)(m,[["__scopeId","data-v-bc85b1f0"]]);var f=p;const h={class:"hello"},g=(0,o.uE)('<p data-v-04aa28b8> For a guide and recipes on how to configure / customize this project,<br data-v-04aa28b8> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-04aa28b8>vue-cli documentation</a>. </p><h3 data-v-04aa28b8>Installed CLI Plugins</h3><ul data-v-04aa28b8><li data-v-04aa28b8><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-04aa28b8>babel</a></li><li data-v-04aa28b8><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-04aa28b8>eslint</a></li></ul><h3 data-v-04aa28b8>Essential Links</h3><ul data-v-04aa28b8><li data-v-04aa28b8><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-04aa28b8>Core Docs</a></li><li data-v-04aa28b8><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-04aa28b8>Forum</a></li><li data-v-04aa28b8><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-04aa28b8>Community Chat</a></li><li data-v-04aa28b8><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-04aa28b8>Twitter</a></li><li data-v-04aa28b8><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-04aa28b8>News</a></li></ul><h3 data-v-04aa28b8>Ecosystem</h3><ul data-v-04aa28b8><li data-v-04aa28b8><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-04aa28b8>vue-router</a></li><li data-v-04aa28b8><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-04aa28b8>vuex</a></li><li data-v-04aa28b8><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-04aa28b8>vue-devtools</a></li><li data-v-04aa28b8><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-04aa28b8>vue-loader</a></li><li data-v-04aa28b8><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-04aa28b8>awesome-vue</a></li></ul>',7);function b(e,t,a,l,n,i){return(0,o.wg)(),(0,o.iD)("div",h,[(0,o._)("h1",null,(0,u.zw)(a.msg),1),g])}var w={name:"HelloWorld",props:{msg:String}};const _=(0,v.Z)(w,[["render",b],["__scopeId","data-v-04aa28b8"]]);var x=_,y={__name:"ViewTodo",props:{actions:{type:Array,default:()=>[]}},setup(e){(0,i.iH)(!1);const t=e=>{};return(a,l)=>{const n=(0,o.up)("van-action-sheet");return(0,o.wg)(),(0,o.j4)(n,(0,o.dG)({"cancel-text":"取消","close-on-click-action":"",description:"日程待办事项"},a.$attrs,{actions:e.actions,onSelect:t}),null,16,["actions"])}}};const k=y;var D=k,V=a(9733),W={__name:"DateWithTimeSelect",emits:["confirm"],setup(e,{emit:t}){const a=(0,i.iH)(!1),l=new Date(2e3,0,1),n=new Date(2025,5,1),u=(0,i.iH)(["2022","08","12"]),s=(0,i.iH)(["12","00"]);function r(){const e=u.value?u.value.join("-"):"",l=s.value?s.value.join(":"):"";let n="";e&&l&&(n=`${e} ${l}`),t("confirm",n),a.value=!1,console.log(u.value,s.value,"value")}return(e,t)=>{const c=(0,o.up)("van-field"),d=(0,o.up)("van-date-picker"),m=(0,o.up)("van-time-picker"),v=(0,o.up)("van-picker-group"),p=(0,o.up)("van-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c,(0,o.dG)(e.$attrs,{onClick:t[0]||(t[0]=e=>a.value=!0),"is-link":""}),null,16),(0,o.Wm)(p,{show:a.value,"onUpdate:show":t[3]||(t[3]=e=>a.value=e),round:"",position:"bottom"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{title:"预约日期",tabs:["选择日期","选择时间"],"next-step-text":"下一步",onConfirm:r},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=e=>u.value=e),"min-date":(0,i.SU)(l),"max-date":(0,i.SU)(n)},null,8,["modelValue","min-date","max-date"]),(0,o.Wm)(m,{modelValue:s.value,"onUpdate:modelValue":t[2]||(t[2]=e=>s.value=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["show"])],64)}}};const C=W;var j=C,H={__name:"SetTodo",emits:["submit","close"],setup(e,{emit:t}){const a=(0,i.qj)({todoTitle:"",isAllDay:!1,startAt:"",endAt:"",remindTime:[],remindWay:[],place:"",notes:""});function l(e){console.log(e,"finalDateTime"),a.startAt=e}function n(e){a.endAt=e}function u(){a.startAt="",a.endAt=""}function s(){console.log(a,"formform");const e=new Date(a.startAt).getTime(),t=new Date(a.endAt).getTime();return console.log(e,t),!(e>t)||((0,V.LJ)("开始时间不能大于结束时间~"),!1)}function r(){(a.isAllDay||s())&&(console.log(a,"提交"),t("submit"))}function c(){t("close")}return(e,t)=>{const i=(0,o.up)("van-nav-bar"),s=(0,o.up)("van-field"),d=(0,o.up)("van-switch"),m=(0,o.up)("van-cell-group"),v=(0,o.up)("van-divider"),p=(0,o.up)("van-checkbox"),f=(0,o.up)("van-checkbox-group"),h=(0,o.up)("van-form"),g=(0,o.up)("van-popup");return(0,o.wg)(),(0,o.j4)(g,(0,o.dG)(e.$attrs,{position:"bottom",style:{height:"78%"}}),{default:(0,o.w5)((()=>[(0,o.Wm)(i,{title:"新建日程","left-text":"取消","right-text":"确认",onClickLeft:c,onClickRight:r}),(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{inset:""},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{modelValue:a.todoTitle,"onUpdate:modelValue":t[0]||(t[0]=e=>a.todoTitle=e),name:"标题",label:"标题",placeholder:"标题",maxlength:"40"},null,8,["modelValue"]),(0,o.Wm)(s,{name:"全天",label:"全天",placeholder:"全天"},{input:(0,o.w5)((()=>[(0,o.Wm)(d,{modelValue:a.isAllDay,"onUpdate:modelValue":t[1]||(t[1]=e=>a.isAllDay=e),size:"20px",onChange:u},null,8,["modelValue"])])),_:1}),a.isAllDay?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(j,{key:0,modelValue:a.startAt,"onUpdate:modelValue":t[2]||(t[2]=e=>a.startAt=e),name:"开始时间",label:"开始时间",placeholder:"开始时间",onConfirm:l},null,8,["modelValue"])),a.isAllDay?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(j,{key:1,modelValue:a.endAt,"onUpdate:modelValue":t[3]||(t[3]=e=>a.endAt=e),name:"结束时间",label:"结束时间",placeholder:"结束时间",onConfirm:n},null,8,["modelValue"]))])),_:1}),(0,o.Wm)(v),(0,o.Wm)(m,{inset:""},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{name:"提醒",label:"提醒"},{input:(0,o.w5)((()=>[(0,o.Wm)(f,{shape:"square",modelValue:a.remindTime,"onUpdate:modelValue":t[4]||(t[4]=e=>a.remindTime=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{name:5},{default:(0,o.w5)((()=>[(0,o.Uk)("5分钟前")])),_:1}),(0,o.Wm)(p,{name:10},{default:(0,o.w5)((()=>[(0,o.Uk)("10分钟前")])),_:1}),(0,o.Wm)(p,{name:30},{default:(0,o.w5)((()=>[(0,o.Uk)("30分钟前")])),_:1}),(0,o.Wm)(p,{name:60},{default:(0,o.w5)((()=>[(0,o.Uk)("1小时前")])),_:1}),(0,o.Wm)(p,{name:120},{default:(0,o.w5)((()=>[(0,o.Uk)("2小时前")])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,o.Wm)(s,{name:"提醒方式",label:"提醒方式"},{input:(0,o.w5)((()=>[(0,o.Wm)(f,{shape:"square",modelValue:a.remindWay,"onUpdate:modelValue":t[5]||(t[5]=e=>a.remindWay=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{name:"textMessage"},{default:(0,o.w5)((()=>[(0,o.Uk)("短信提醒")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)(m,{inset:""},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{modelValue:a.place,"onUpdate:modelValue":t[6]||(t[6]=e=>a.place=e),rows:"2",autosize:"",label:"地点",type:"textarea",maxlength:"200",placeholder:"地点","show-word-limit":""},null,8,["modelValue"]),(0,o.Wm)(s,{modelValue:a.notes,"onUpdate:modelValue":t[7]||(t[7]=e=>a.notes=e),rows:"2",autosize:"",label:"备注",type:"textarea",maxlength:"200",placeholder:"请输入备注","show-word-limit":""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},16)}}};const U=H;var Y=U;const A={slot:"bottom-info","slot-scope":"day"},O={key:0},S={key:1,style:{"min-height":"14px"}};var I={__name:"Calendar",setup(e){(0,n.tv)(),(0,i.iH)("1"),(0,i.iH)(!0);return(e,t)=>{const a=(0,o.up)("van-calendar");return(0,o.wg)(),(0,o.j4)(a,{poppable:!1},{default:(0,o.w5)((()=>[(0,o._)("div",A,[(0,o._)("div",null,(0,u.zw)(e.day.bottomInfo),1),e.day.tip?((0,o.wg)(),(0,o.iD)("div",O,(0,u.zw)(e.day.tip),1)):((0,o.wg)(),(0,o.iD)("div",S))])])),_:1})}}};const M=I;var T=M,$=a(5743),q=a.n($);function z(e){const t=new Date(e),a=t.getFullYear(),l=("0"+(t.getMonth()+1)).slice(-2),n=("0"+t.getDate()).slice(-2),o=("0"+t.getHours()).slice(-2),u=("0"+t.getMinutes()).slice(-2),i=("0"+t.getSeconds()).slice(-2),s=`${a}-${l}-${n} ${o}:${u}:${i}`;return s}function P(e){return e?"0"===e.charAt(0)?Number(e[1]):Number(e):0}var N={__name:"calendar",setup(e){const t=(0,i.iH)(!1),a=(0,i.iH)(!1),l=window.innerHeight,n=(0,i.iH)({y:l-150}),u=q()().format("YYYY-MM-DD"),s=q()().add(1,"day").format("YYYY-MM-DD"),r=q()().add(2,"day").format("YYYY-MM-DD"),c=q()().add(3,"day").format("YYYY-MM-DD"),d=q()().add(4,"day").format("YYYY-MM-DD"),m=(0,i.iH)([{text:"审计会议",date:`${u.value} 22:00`},{text:"审计周会",date:`${s} 22:00`},{text:"出差",date:`${r}  22:00`},{text:"出差",date:`${c} 08:00`},{text:"出差",date:`${d} 22:00`},{text:"烟草管理登记",date:`${d} 22:00`},{text:"审计会议",date:`${d} 23:00`}]),v=(0,i.iH)("");function p(e){v.value=e;const t=new Date(e).getMonth()+1,a=new Date(e).getDate(),l=m.value.filter((e=>{if(e.date){const l=P(e.date.substring(5,7)),n=P(e.date.substring(8,11));if(t===l&&a===n)return e}}));f.value=l.map((e=>({name:e.text})))}const f=(0,i.iH)([]),h=(0,i.iH)("");function g(){h.value=z(v),t.value=!0}function b(){m.value.forEach((e=>{e.date.substring(0,10)===z(new Date).substring(0,10)&&f.value.push({name:e.text})})),console.log(f.value,"dsdsdsds")}function w(e){t.value=!1,(0,V.CF)("保存成功！")}function _(){t.value=!1}function x(e){const t=e.date.getMonth()+1,a=e.date.getDate();for(let l=0,n=m.value.length;l<n;l++)if(m.value[l].date){const n=P(m.value[l].date.substring(5,7)),o=P(m.value[l].date.substring(8,11));t===n&&a===o&&(e.bottomInfo=m.value[l].text)}return e}function y(){a.value=!0}return(0,o.bv)((()=>b())),(e,l)=>{const u=(0,o.up)("van-floating-bubble"),i=(0,o.up)("van-icon");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(u,{axis:"xy",icon:"plus",magnetic:"x",onClick:g}),(0,o.Wm)(u,{axis:"xy",magnetic:"x",offset:n.value,"onUpdate:offset":l[0]||(l[0]=e=>n.value=e),onClick:y},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{name:"orders-o",badge:f.value.length},null,8,["badge"])])),_:1},8,["offset"]),(0,o.Wm)(T,{formatter:x,"show-confirm":!1,onSelect:p,"show-title":!1}),t.value?((0,o.wg)(),(0,o.j4)(Y,{key:0,show:t.value,"onUpdate:show":l[1]||(l[1]=e=>t.value=e),onClose:_,onSubmit:w},null,8,["show"])):(0,o.kq)("",!0),a.value?((0,o.wg)(),(0,o.j4)(D,{key:1,show:a.value,"onUpdate:show":l[2]||(l[2]=e=>a.value=e),actions:f.value},null,8,["show","actions"])):(0,o.kq)("",!0)],64)}}};const J=N;var F=J;const R=e=>((0,o.dD)("data-v-2a750dc5"),e=e(),(0,o.Cn)(),e),Z=R((()=>(0,o._)("h3",{class:"title"},"审计底稿列表",-1))),L={class:"custom-title"};var E={__name:"archiveAccess",setup(e){const t=(0,i.iH)(""),a=(0,i.iH)([]);function l(){for(let e=0,t=100;e<t;e++)a.value.push({id:e+1,isCollect:!1,title:`底稿${e+1}`,content:"213123123213"})}(0,o.bv)((()=>{l()}));const s=(0,n.tv)();function r(e){s.push({name:"DraftInput",query:{data:JSON.stringify(e)}})}return(0,o.YP)((()=>t.value),(e=>{if(a.value=[],l(),!e)return;const n=JSON.parse(JSON.stringify(a.value));a.value=n.filter((e=>e.title.includes(t.value)))})),(e,l)=>{const n=(0,o.up)("van-search"),i=(0,o.up)("van-cell");return(0,o.wg)(),(0,o.iD)(o.HY,null,[Z,(0,o.Wm)(n,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),placeholder:"请输入搜索关键词"},null,8,["modelValue"]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.value,((e,t)=>((0,o.wg)(),(0,o.j4)(i,{"is-link":"",key:t,title:e.title,onClick:t=>r(e)},{title:(0,o.w5)((()=>[(0,o._)("span",L,(0,u.zw)(e.title),1)])),_:2},1032,["title","onClick"])))),128))],64)}}};const G=(0,v.Z)(E,[["__scopeId","data-v-2a750dc5"]]);var K=G;const B=e=>((0,o.dD)("data-v-40387c84"),e=e(),(0,o.Cn)(),e),Q=B((()=>(0,o._)("h3",{class:"title"},"审计项目列表",-1))),X={class:"custom-title"};var ee={__name:"archiveAccessProject",setup(e){const t=(0,i.iH)(""),a=(0,i.iH)([]);function l(){for(let e=0,t=100;e<t;e++)a.value.push({id:e+1,isCollect:!1,title:`项目${e+1}`,content:"213123123213"})}(0,o.bv)((()=>{l()}));const s=(0,n.tv)();function r(e){s.push({name:"ArchiveAccess",query:{data:JSON.stringify(e)}})}return(0,o.YP)((()=>t.value),(e=>{if(a.value=[],l(),!e)return;const n=JSON.parse(JSON.stringify(a.value));a.value=n.filter((e=>e.title.includes(t.value)))})),(e,l)=>{const n=(0,o.up)("van-search"),i=(0,o.up)("van-cell");return(0,o.wg)(),(0,o.iD)(o.HY,null,[Q,(0,o.Wm)(n,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),placeholder:"请输入搜索关键词"},null,8,["modelValue"]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.value,((e,t)=>((0,o.wg)(),(0,o.j4)(i,{"is-link":"",key:t,title:e.title,onClick:t=>r(e)},{title:(0,o.w5)((()=>[(0,o._)("span",X,(0,u.zw)(e.title),1)])),_:2},1032,["title","onClick"])))),128))],64)}}};const te=(0,v.Z)(ee,[["__scopeId","data-v-40387c84"]]);var ae=te;const le=e=>((0,o.dD)("data-v-5eb10fc2"),e=e(),(0,o.Cn)(),e),ne={class:"financial-module"},oe=le((()=>(0,o._)("h3",{class:"title"},"财务咨询",-1))),ue={class:"question-answer"},ie={class:"answer-content"},se={key:0,style:{display:"flex",margin:"30px"}},re={style:{border:"1px solid",width:"75%",height:"fit-content","margin-right":"20px","text-align":"justify","border-radius":"6px",padding:"10px"}},ce={key:1,style:{display:"flex",margin:"20px"}},de={style:{border:"1px solid",width:"75%","margin-left":"20px",height:"fit-content","border-radius":"6px","text-align":"justify",padding:"10px"}},me={class:"question-send"};var ve={__name:"financialAdvisory",setup(e){const t=(0,i.iH)(""),a=(0,i.iH)([{text:"请问财务相关的法规是什么?",link:"",type:"question"},{text:"根据国家《中华人民共和国企业所得税法》，企业应按照规定的税率和税法进行申报和缴纳企业所得税。企业所得税是针对企业的营业利润征收的一种税收，纳税义务人应按照规定的方式、时间和地点进行申报，并按规定缴纳相应的税款。企业应按照法定会计准则和税收法规要求，提供准确、完整的财务报表和相关税务信息。违反财务法规可能会面临罚款、滞纳金或其他法律责任。建议企业严格遵守财务法规，保持合规经营，避免产生不必要的风险和处罚。为确保准确性和最新性，请在实际操作中咨询相关财务专业人士或向当地税务机关核实最新的法律法规信息。",link:"",type:"answer"}]);function l(){a.value.push({text:t.value,link:"",type:"question"}),t.value="",a.value.push({text:"静态演示回答，待接口数据接入 查询",link:"",type:"answer"})}return(e,n)=>{const i=(0,o.up)("van-image"),s=(0,o.up)("van-button"),r=(0,o.up)("van-field");return(0,o.wg)(),(0,o.iD)("div",ne,[oe,(0,o._)("div",ue,[(0,o._)("div",ie,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.value,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t},["question"===e.type?((0,o.wg)(),(0,o.iD)("div",se,[(0,o._)("div",re,(0,u.zw)(e.text),1),(0,o._)("div",null,[(0,o.Wm)(i,{round:"",width:"60px",height:"60px",src:"https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"})])])):((0,o.wg)(),(0,o.iD)("div",ce,[(0,o._)("div",null,[(0,o.Wm)(i,{round:"",width:"60px",height:"60px",src:"https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"})]),(0,o._)("div",de,(0,u.zw)(e.text),1)]))])))),128))]),(0,o._)("div",me,[(0,o.Wm)(r,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),size:"large",placeholder:"请输入需要咨询的问题"},{button:(0,o.w5)((()=>[(0,o.Wm)(s,{disabled:!t.value.length,size:"small",type:"primary",onClick:l},{default:(0,o.w5)((()=>[(0,o.Uk)("发送")])),_:1},8,["disabled"])])),_:1},8,["modelValue"])])])])}}};const pe=(0,v.Z)(ve,[["__scopeId","data-v-5eb10fc2"]]);var fe=pe,he={__name:"Auditee",emits:["changeAuidt"],setup(e,{emit:t}){const a=(0,i.iH)(!1),l=[{text:"汕头市十二支商业连锁有限公司",value:"twelveBranchesCompany"},{text:"广东烟草汕头市有限公司",value:"tobaccoShantouCompany"}],n=(0,i.iH)();function u({selectedOptions:e}){console.log(e,"selectedOptionsselectedOptions"),n.value=e[0].text,t("changeAuidt",n.value,e[0].value),a.value=!1}return(e,t)=>{const n=(0,o.up)("van-field"),i=(0,o.up)("van-picker"),s=(0,o.up)("van-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(n,(0,o.dG)(e.$attrs,{disabled:!0}),null,16),(0,o.Wm)(s,{show:a.value,"onUpdate:show":t[1]||(t[1]=e=>a.value=e),position:"bottom"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{columns:l,onConfirm:u,onCancel:t[0]||(t[0]=e=>a.value=!1)})])),_:1},8,["show"])],64)}}};const ge=he;var be=ge;var we={__name:"SelectTemp",props:{columns:{type:Array,default:()=>[{text:"查阅 总部 记账凭证，登记 30元",value:"66"},{text:"查阅 分公司 记账凭证，登记 100元",value:"88"}]}},emits:["addTemp"],setup(e,{emit:t}){const a=(0,i.iH)(!1);function l({selectedOptions:e}){const a=e[0].text;console.log(a," selectedOptions[0].value"),t("addTemp",a)}return(t,n)=>{const u=(0,o.up)("van-picker"),i=(0,o.up)("van-popup");return(0,o.wg)(),(0,o.j4)(i,(0,o.dG)(t.$attrs,{position:"bottom"}),{default:(0,o.w5)((()=>[(0,o.Wm)(u,{title:"请选择预设模板",onConfirm:l,onCancel:n[0]||(n[0]=e=>a.value=!1),columns:e.columns},null,8,["columns"])])),_:1},16)}}};const _e=we;var xe=_e,ye={__name:"SelectDate",emits:["changeDate"],setup(e,{emit:t}){const a=(0,i.iH)(!1),l=(0,i.iH)(q()().format("YYYY-MM-DD").split("-")),n=(0,i.iH)(q()().format("YYYY-MM-DD").split("-")),s=()=>{console.log(l.value,n.value),a.value=!1;const e=l.value.join("-"),o=n.value.join("-"),u=[e,o];console.log(u,"dsds"),t("changeDate",u)},r=()=>{},c=new Date(2020,0,1),d=new Date(2025,5,1);return(e,t)=>{const m=(0,o.up)("van-field"),v=(0,o.up)("van-date-picker"),p=(0,o.up)("van-picker-group"),f=(0,o.up)("van-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(m,(0,u.vs)((0,o.F4)(e.$attrs)),null,16),(0,o.Wm)(f,{show:a.value,"onUpdate:show":t[2]||(t[2]=e=>a.value=e),round:"",position:"bottom"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{title:"预约日期",tabs:["开始日期","结束日期"],onConfirm:s,onCancel:r},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),"min-date":(0,i.SU)(c),"max-date":(0,i.SU)(d)},null,8,["modelValue","min-date","max-date"]),(0,o.Wm)(v,{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=e=>n.value=e),"min-date":(0,i.SU)(c),"max-date":(0,i.SU)(d)},null,8,["modelValue","min-date","max-date"])])),_:1})])),_:1},8,["show"])],64)}}};const ke=ye;var De=ke,Ve={__name:"draftInput",setup(e){const t=e=>{console.log("submit",e)},a=(0,i.iH)(!1);function l(){a.value=!0}function n(e){s.questionList.push({text:e}),a.value=!1}function u(e){s.questionList.splice(e,1)}(0,i.iH)([{text:"会计基础及核算",value:"1"},{text:"物资性采购",value:"2"},{text:"服务性采购",value:"3"},{text:"工程采购",value:"4"},{text:"重点费用",value:"5"},{text:"资金资产管理",value:"6"},{text:"商品购、销、调、存管理",value:"7"},{text:"合作点、直营店、加盟店管理",value:"8"}]),(0,i.iH)([{text:"会计基础及核算",value:"1"},{text:"物资性采购",value:"2"},{text:"服务性采购",value:"3"},{text:"工程采购",value:"4"},{text:"重点费用",value:"5"},{text:"资金资产管理",value:"6"},{text:"内部控制",value:"7"},{text:"其他",value:"8"}]);const s=(0,i.qj)({auditee:"",auditeeTxt:"",auditResponsibleBy:"",auditResponsibleUnity:"",auditProject:"",auditPeriod:[],auditMatter:"",auditMatterText:"",auditVerifyFacts:"",questionList:[],files:[]}),r=e=>{console.log(e,"dsdsds")};function c(e,t){s.auditeeText=e,s.auditee=t,s.auditMatterText="",s.auditMatter=""}function d(e){s.auditPeriod=e}return(0,o.YP)((()=>s),(e=>{console.log(e,JSON.stringify(e),"vals");const t=Object.values(e).some((e=>e.length));t&&(0,V.CF)("保存成功")}),{deep:!0}),(e,i)=>{const m=(0,o.up)("van-field"),v=(0,o.up)("van-button"),p=(0,o.up)("van-cell-group"),f=(0,o.up)("van-uploader"),h=(0,o.up)("van-form");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(h,{onSubmit:t},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{inset:""},{default:(0,o.w5)((()=>[(0,o.Wm)(be,{modelValue:s.auditeeText,"onUpdate:modelValue":i[0]||(i[0]=e=>s.auditeeText=e),name:"审计人员",label:"审计人员",placeholder:"审计人员",onChangeAuidt:c},null,8,["modelValue"]),(0,o.Wm)(m,{modelValue:s.auditProject,"onUpdate:modelValue":i[1]||(i[1]=e=>s.auditProject=e),name:"审计项目",disabled:!0,label:"审计项目",placeholder:"审计项目"},null,8,["modelValue"]),(0,o.Wm)(m,{modelValue:s.auditResponsibleBy,"onUpdate:modelValue":i[2]||(i[2]=e=>s.auditResponsibleBy=e),name:"责任人",disabled:!0,label:"责任人",placeholder:"责任人"},null,8,["modelValue"]),(0,o.Wm)(m,{modelValue:s.auditResponsibleUnity,"onUpdate:modelValue":i[3]||(i[3]=e=>s.auditResponsibleUnity=e),name:"责任单位",disabled:!0,label:"责任单位",placeholder:"责任单位"},null,8,["modelValue"]),(0,o.Wm)(De,{modelValue:s.auditPeriod,"onUpdate:modelValue":i[4]||(i[4]=e=>s.auditPeriod=e),name:"审计日期",disabled:!0,label:"审计日期",placeholder:"审计日期",onChangeDate:d},null,8,["modelValue"]),(0,o.Wm)(m,{modelValue:s.auditMatterText,"onUpdate:modelValue":i[5]||(i[5]=e=>s.auditMatterText=e),name:"审计事项类别",disabled:!0,label:"审计事项类别",placeholder:"审计事项类别"},null,8,["modelValue"]),(0,o.Wm)(m,{modelValue:s.auditVerifyFacts,"onUpdate:modelValue":i[6]||(i[6]=e=>s.auditVerifyFacts=e),name:"审计查证事实",label:"审计查证事实",placeholder:"审计查证事实",maxlength:"200","show-word-limit":"",rows:"2",autosize:""},null,8,["modelValue"]),(0,o.Wm)(p,{title:"审计意见（问题列表）"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.questionList,((e,t)=>((0,o.wg)(),(0,o.j4)(m,{key:t,"right-icon":"cross",placeholder:"查阅  记账凭证，报销   元，",type:"textarea",maxlength:"200","show-word-limit":"",autosize:"",modelValue:e.text,"onUpdate:modelValue":t=>e.text=t,rows:"2",onClickRightIcon:e=>u(t)},null,8,["modelValue","onUpdate:modelValue","onClickRightIcon"])))),128)),(0,o.Wm)(v,{type:"primary",block:"",plain:"",onClick:l},{default:(0,o.w5)((()=>[(0,o.Uk)("添加项")])),_:1})])),_:1}),(0,o.Wm)(m,{name:"uploader",label:"附件"},{input:(0,o.w5)((()=>[(0,o.Wm)(f,{modelValue:s.files,"onUpdate:modelValue":i[7]||(i[7]=e=>s.files=e),accept:"application/pdf","after-read":r,"max-files":1,"max-size":10485760},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{icon:"plus",type:"primary"},{default:(0,o.w5)((()=>[(0,o.Uk)("上传文件")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,o.Wm)(xe,{show:a.value,"onUpdate:show":i[8]||(i[8]=e=>a.value=e),onAddTemp:n},null,8,["show"])],64)}}};const We=Ve;var Ce=We;const je=e=>((0,o.dD)("data-v-466ffe08"),e=e(),(0,o.Cn)(),e),He={class:"header-module"},Ue=je((()=>(0,o._)("h3",{class:"title"},"制度文件查阅",-1))),Ye={class:"custom-title"};var Ae={__name:"institutionalDocuments",setup(e){const t=(0,i.iH)(""),a=(0,i.iH)([]);function s(){for(let e=0,t=100;e<t;e++)a.value.push({id:e+1,isCollect:!1,title:`制度文件${e+1}`,content:"213123123213"})}function r(e){e.isCollect=!e.isCollect}(0,o.bv)((()=>{s()}));const c=(0,n.tv)();function d(e){c.push({name:"InstitutionalDocDetail",query:{data:JSON.stringify(e)}})}function m(){c.push("CollectInstitutionalDocuments")}return(0,o.YP)((()=>t.value),(e=>{if(a.value=[],s(),!e)return;const l=JSON.parse(JSON.stringify(a.value));a.value=l.filter((e=>e.title.includes(t.value)))})),(e,n)=>{const i=(0,o.up)("van-icon"),s=(0,o.up)("van-search"),c=(0,o.up)("van-cell");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",He,[Ue,(0,o.Wm)(i,{name:"star",class:"to-collect",onClick:m})]),(0,o.Wm)(s,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),placeholder:"请输入搜索关键词"},null,8,["modelValue"]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.value,((e,t)=>((0,o.wg)(),(0,o.j4)(c,{"is-link":"",key:t,title:e.title,onClick:t=>d(e)},{title:(0,o.w5)((()=>[e.isCollect?((0,o.wg)(),(0,o.j4)(i,{key:0,name:"star",class:"collect-icon",onClick:(0,l.iM)((t=>r(e)),["stop"])},null,8,["onClick"])):((0,o.wg)(),(0,o.j4)(i,{key:1,name:"star-o",class:"collect-icon",onClick:(0,l.iM)((t=>r(e)),["stop"])},null,8,["onClick"])),(0,o._)("span",Ye,(0,u.zw)(e.title),1)])),_:2},1032,["title","onClick"])))),128))],64)}}};const Oe=(0,v.Z)(Ae,[["__scopeId","data-v-466ffe08"]]);var Se=Oe;const Ie={class:"title"},Me={class:"content"};var Te={__name:"institutionalDocDetail",setup(e){const t=(0,i.qj)({title:"",content:""});return(0,o.bv)((()=>{console.log(Ee.currentRoute.value.query,"rt");const e=Ee.currentRoute.value.query&&Ee.currentRoute.value.query.data,a=e&&JSON.parse(e);a&&(t.content=a.content,t.title=a.title)})),(e,a)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("h3",Ie,(0,u.zw)(t.title)+"-详情",1),(0,o._)("p",Me,(0,u.zw)(t.content),1)],64))}};const $e=(0,v.Z)(Te,[["__scopeId","data-v-610bba08"]]);var qe=$e;const ze=e=>((0,o.dD)("data-v-04a743e2"),e=e(),(0,o.Cn)(),e),Pe=ze((()=>(0,o._)("div",{class:"header-module"},[(0,o._)("h3",{class:"title"},"已收藏制度文件查阅")],-1))),Ne={class:"custom-title"};var Je={__name:"collectInstitutionalDocuments",setup(e){const t=(0,i.iH)(""),a=(0,i.iH)([]);function l(){for(let e=0,t=100;e<t;e++)a.value.push({id:e+1,isCollect:!1,title:`制度文件${e+1}`,content:"213123123213"})}(0,o.bv)((()=>{l()}));const s=(0,n.tv)();function r(e){s.push({name:"InstitutionalDocDetail",query:{data:JSON.stringify(e)}})}return(0,o.YP)((()=>t.value),(e=>{if(a.value=[],l(),!e)return;const n=JSON.parse(JSON.stringify(a.value));a.value=n.filter((e=>e.title.includes(t.value)))})),(e,l)=>{const n=(0,o.up)("van-search"),i=(0,o.up)("van-icon"),s=(0,o.up)("van-cell");return(0,o.wg)(),(0,o.iD)(o.HY,null,[Pe,(0,o.Wm)(n,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),placeholder:"请输入搜索关键词"},null,8,["modelValue"]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.value,((e,t)=>((0,o.wg)(),(0,o.j4)(s,{"is-link":"",key:t,title:e.title,onClick:t=>r(e)},{title:(0,o.w5)((()=>[(0,o.Wm)(i,{name:"star",class:"collect-icon"}),(0,o._)("span",Ne,(0,u.zw)(e.title),1)])),_:2},1032,["title","onClick"])))),128))],64)}}};const Fe=(0,v.Z)(Je,[["__scopeId","data-v-04a743e2"]]);var Re=Fe;const Ze=[{path:"/",name:"Home",component:f},{path:"/about",name:"About",component:x},{path:"/calendar",name:"Calendar",component:F},{path:"/financialAdvisory",name:"FinancialAdvisory",component:fe},{path:"/institutionalDocuments",name:"InstitutionalDocuments",component:Se},{path:"/institutionalDocDetail",name:"InstitutionalDocDetail",component:qe},{path:"/collectInstitutionalDocuments",name:"CollectInstitutionalDocuments",component:Re},{path:"/archiveAccess",name:"ArchiveAccess",component:K},{path:"/archiveAccessProject",name:"ArchiveAccessProject",component:ae},{path:"/draftInput",name:"DraftInput",component:Ce}],Le=(0,n.p7)({history:(0,n.r5)(),routes:Ze});var Ee=Le,Ge=a(738),Ke=a(2054),Be=a(9264),Qe=a(4250),Xe=a(5331),et=a(3),tt=a(147),at=a(1160),lt=a(3068),nt=a(3866),ot=a(6765),ut=a(2282),it=a(3813),st=a(3910),rt=a(6035),ct=a(2691),dt=a(6944),mt=a(3739),vt=a(6305),pt=a(9420),ft=a(9968),ht=a(3649),gt=a(9545),bt=a(2544),wt=a(1425),_t=a(5258),xt=a(4521),yt=a(5630),kt=a(857);a(7150);function Dt(e,t){const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(a)}const Vt={},Wt=(0,v.Z)(Vt,[["render",Dt]]);var Ct=Wt;const jt=(0,l.ri)(Ct);jt.use(Ee),jt.use(Ge.Y8),jt.use(Ke.Qm),jt.use(Be.cW),jt.use(Qe.bL),jt.use(Xe.TS),jt.use(et.Ee),jt.use(tt.ol),jt.use(at.Vb),jt.use(lt.Ct),jt.use(nt.nD),jt.use(ot.Mt),jt.use(ut.jI),jt.use(it.XZ),jt.use(st.cO),jt.use(rt.rs),jt.use(ct.iz),jt.use(dt.l0),jt.use(mt.gN),jt.use(vt.GI),jt.use(pt.l2),jt.use(ft.e$),jt.use(ht.JO),jt.use(gt.zx),jt.use(bt.Ee),jt.use(wt.f),jt.use(_t.Er),jt.use(xt.QP),jt.use(yt.rj),jt.use(kt.P4),jt.mount("#app")}},t={};function a(l){var n=t[l];if(void 0!==n)return n.exports;var o=t[l]={exports:{}};return e[l].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,l,n,o){if(!l){var u=1/0;for(c=0;c<e.length;c++){l=e[c][0],n=e[c][1],o=e[c][2];for(var i=!0,s=0;s<l.length;s++)(!1&o||u>=o)&&Object.keys(a.O).every((function(e){return a.O[e](l[s])}))?l.splice(s--,1):(i=!1,o<u&&(u=o));if(i){e.splice(c--,1);var r=n();void 0!==r&&(t=r)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[l,n,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,l){var n,o,u=l[0],i=l[1],s=l[2],r=0;if(u.some((function(t){return 0!==e[t]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(s)var c=s(a)}for(t&&t(l);r<u.length;r++)o=u[r],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},l=self["webpackChunktest11"]=self["webpackChunktest11"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=a.O(void 0,[998],(function(){return a(4585)}));l=a.O(l)})();
//# sourceMappingURL=app.69dd11a8.js.map