"use strict";(self.webpackChunkcms=self.webpackChunkcms||[]).push([[3785],{83785:(p,P,s)=>{s.r(P),s.d(P,{InformationBoxEE:()=>Q});var t=s(74081),a=s(87006),l=s(88220),W=s(1821),e=s(10701),I=s(8295),A=s(61121),d=s(63738),L=s(32370),z=s(77970),G=s(67588),Y=s(55911),w=s(61020),y=s(46413),o=s(48396),Z=s(27279),V=s(88108),m=s(41186),T=s(47289),N=s(8217),$=s(15816),k=s(97442),b=s(13576),q=s(87830),ss=s(47184),ts=s(364),as=s(59461),os=s(71563),ns=s(49204),es=s(47853),_s=s(74919),ls=s(29206),is=s(40464),Es=s(98934),rs=s(43433),ds=s(75719),Ms=s(8175),gs=s(6078),Ds=s(51943),Os=s(55783),Ps=s(92249),ms=s(41942),hs=s(22919),vs=s(53915),Cs=s(75041),As=s(30200),cs=s(91379),Ws=s(33299),Is=s(33409),Ls=s(63645),Ts=s(7988),Rs=s(7055),Bs=s(26757),fs=s(58311),Us=s(24840),Ks=s(29510),us=s(16946),ys=s(10124),js=s(69530),xs=s(86961),Ss=s(51527),ps=s(19764),ws=s(42982),Ns=s(26126);const J=()=>{const{initialData:_,layout:i,isSingleType:h,onChange:j}=(0,a.Wq)(),E=(0,l.j)(n=>n.admin_app.permissions),{formatMessage:r}=(0,w.Z)(),{_unstableFormatAPIError:x}=(0,a.So)(),S=(0,a.lm)(),{allowedActions:{canRead:R},isLoading:c}=(0,a.ss)(E.settings?.users),{data:v,isLoading:B,isError:f}=(0,l.k)({},{skip:c||!R}),M=v?.users||[],g=_?.[o.A]??null,[D,{error:U,isLoading:K}]=(0,y.u)(),u=async n=>{const O=await D({slug:h?"single-types":"collection-types",model:i.uid,id:_.id,data:{id:n?parseInt(n,10):null}});"data"in O&&(j?.({target:{type:"",name:o.A,value:O.data[o.A]}},!0),S({type:"success",message:{id:"content-manager.reviewWorkflows.assignee.notification.saved",defaultMessage:"Assignee updated"}}))};return(0,t.jsx)(W.g,{name:o.A,id:o.A,children:(0,t.jsx)(e.k,{direction:"column",gap:2,alignItems:"stretch",children:(0,t.jsx)(I.hQ,{clearLabel:r({id:"content-manager.reviewWorkflows.assignee.clear",defaultMessage:"Clear assignee"}),error:(f&&R&&r({id:"content-manager.reviewWorkflows.assignee.error",defaultMessage:"An error occurred while fetching users"})||U&&x(U))??void 0,disabled:!c&&!B&&M.length===0,name:o.A,id:o.A,value:g?g.id.toString():null,onChange:u,onClear:()=>u(null),placeholder:r({id:"content-manager.reviewWorkflows.assignee.placeholder",defaultMessage:"Select \u2026"}),label:r({id:"content-manager.reviewWorkflows.assignee.label",defaultMessage:"Assignee"}),loading:B||c||K,children:M.map(n=>(0,t.jsx)(A.O,{value:n.id.toString(),textValue:(0,l.l)(n,r),children:(0,l.l)(n,r)},n.id))})})})},H=()=>{const{initialData:_,layout:i,isSingleType:h,onChange:j}=(0,a.Wq)(),{formatMessage:E}=(0,w.Z)(),{_unstableFormatAPIError:r}=(0,a.So)(),x=(0,a.lm)(),{data:S,isLoading:R}=(0,y.a)({slug:h?"single-types":"collection-types",model:i.uid,id:_.id},{skip:!_?.id||!i?.uid}),{meta:c,stages:v=[]}=S??{},{getFeature:B}=(0,V.u)(),[f,M]=Z.useState(null),g=B("review-workflows")??{},D=_?.[o.S]??null,[U,{error:K}]=(0,y.b)(),u=async O=>{try{if(g?.[T.C]&&parseInt(g[T.C],10)<(c?.workflowCount??0))M("workflow");else if(g?.[T.a]&&parseInt(g[T.a],10)<v.length)M("stage");else if(_.id&&i){const C=await U({model:i.uid,id:_.id,slug:h?"single-types":"collection-types",data:{id:O}});"data"in C&&(j?.({target:{name:o.S,value:C.data[o.S],type:""}},!0),x({type:"success",message:{id:"content-manager.reviewWorkflows.stage.notification.saved",defaultMessage:"Review stage updated"}}))}}catch{}},{themeColorName:n}=(0,N.g)(D?.color)??{};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(W.g,{hint:v.length===0&&E({id:"content-manager.reviewWorkflows.stages.no-transition",defaultMessage:"You don\u2019t have the permission to update this stage."}),name:o.S,id:o.S,children:(0,t.jsxs)(e.k,{direction:"column",gap:2,alignItems:"stretch",children:[(0,t.jsx)(d.q4,{disabled:v.length===0,error:K&&r(K)||void 0,name:o.S,id:o.S,value:D?.id,onChange:u,label:E({id:"content-manager.reviewWorkflows.stage.label",defaultMessage:"Review stage"}),startIcon:D&&(0,t.jsx)(e.k,{as:"span",height:2,background:D?.color,borderColor:n==="neutral0"?"neutral150":void 0,hasRadius:!0,shrink:0,width:2,marginRight:"-3px"}),customizeContent:()=>(0,t.jsxs)(e.k,{as:"span",justifyContent:"space-between",alignItems:"center",width:"100%",children:[(0,t.jsx)(L.Z,{textColor:"neutral800",ellipsis:!0,children:D?.name??""}),R?(0,t.jsx)(z.a,{small:!0,style:{display:"flex"},"data-testid":"loader"}):null]}),children:v.map(({id:O,color:C,name:F})=>{const{themeColorName:X}=(0,N.g)(C)??{};return(0,t.jsx)(d.ag,{startIcon:(0,t.jsx)(e.k,{height:2,background:C,borderColor:X==="neutral0"?"neutral150":void 0,hasRadius:!0,shrink:0,width:2}),value:O,textValue:F,children:F},O)})}),(0,t.jsx)(G.J,{}),(0,t.jsx)(Y.c,{})]})}),(0,t.jsxs)(m.L.Root,{isOpen:f==="workflow",onClose:()=>M(null),children:[(0,t.jsx)(m.L.Title,{children:E({id:"content-manager.reviewWorkflows.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(m.L.Body,{children:E({id:"content-manager.reviewWorkflows.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]}),(0,t.jsxs)(m.L.Root,{isOpen:f==="stage",onClose:()=>M(null),children:[(0,t.jsx)(m.L.Title,{children:E({id:"content-manager.reviewWorkflows.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})}),(0,t.jsx)(m.L.Body,{children:E({id:"content-manager.reviewWorkflows.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."})})]})]})},Q=()=>{const{isCreatingEntry:_,layout:i}=(0,a.Wq)(),h=i?.options?.reviewWorkflows??!1;return(0,t.jsxs)(l.I.Root,{children:[(0,t.jsx)(l.I.Title,{}),h&&!_&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(H,{}),(0,t.jsx)(J,{})]}),(0,t.jsx)(l.I.Body,{})]})}},8217:(p,P,s)=>{s.d(P,{a:()=>W,g:()=>l});var t=s(97003),a=s(47289);function l(e){if(!e)return null;const A=Object.entries(t.W.colors).filter(([,d])=>d.toUpperCase()===e.toUpperCase()).reduce((d,[L])=>(a.S?.[L]&&(d=L),d),null);return A?{themeColorName:A,name:a.S[A]}:null}function W(){return Object.entries(a.S).map(([e,I])=>({hex:t.W.colors[e].toUpperCase(),name:I}))}},48396:(p,P,s)=>{s.d(P,{A:()=>a,S:()=>t});const t="strapi_stage",a="strapi_assignee"}}]);
