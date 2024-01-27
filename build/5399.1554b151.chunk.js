"use strict";(self.webpackChunkcms=self.webpackChunkcms||[]).push([[5399],{45399:(Te,S,s)=>{s.r(S),s.d(S,{ProvidersPage:()=>Q,default:()=>fe});var e=s(74081),L=s(27279),G=s(2548),w=s(12881),ee=s(5938),se=s(6918),te=s(15244),ie=s(10701),ae=s(23298),re=s(74577),ne=s(35250),z=s(48102),de=s(27997),le=s(73354),oe=s(27875),ue=s(74758),_e=s(70774),ce=s(38101),F=s(93153),P=s(50086),O=s(32370),ge=s(10989),me=s(86967),pe=s(4987),r=s(87006),Ee=s(26784),he=s(51943),R=s(61020),T=s(40464),Pe=s(89486),Me=s(82298),ve=s(71563),t=s(70627),n=s(89202),Ce=s(10124),i=s(47853);const C=({description:l,disabled:M,intlLabel:p,error:c,name:_,onChange:v,placeholder:d,providerToEditName:E,type:m,value:u})=>{const{formatMessage:o}=(0,R.Z)(),h=_==="noName"?`${window.strapi.backendURL}/api/connect/${E}/callback`:u,f=o({id:p.id,defaultMessage:p.defaultMessage},{provider:E,...p.values}),g=l?o({id:l.id,defaultMessage:l.defaultMessage},{provider:E,...l.values}):"";if(m==="bool")return(0,e.jsx)(G.s,{"aria-label":_,checked:u,disabled:M,hint:g,label:f,name:_,offLabel:o({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:o({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:D=>{v({target:{name:_,value:D.target.checked}})}});const W=d?o({id:d.id,defaultMessage:d.defaultMessage},{...d.values}):"",B=c?o({id:c,defaultMessage:c}):"";return(0,e.jsx)(w.o,{"aria-label":_,disabled:M,error:B,label:f,name:_,onChange:v,placeholder:W,type:m,value:h})};C.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},C.propTypes={description:t.shape({id:t.string.isRequired,defaultMessage:t.string.isRequired,values:t.object}),disabled:t.bool,error:t.string,intlLabel:t.shape({id:t.string.isRequired,defaultMessage:t.string.isRequired,values:t.object}).isRequired,name:t.string.isRequired,onChange:t.func.isRequired,placeholder:t.shape({id:t.string.isRequired,defaultMessage:t.string.isRequired,values:t.object}),providerToEditName:t.string.isRequired,type:t.string.isRequired,value:t.oneOfType([t.bool,t.string])};const U=({headerBreadcrumbs:l,initialData:M,isSubmiting:p,layout:c,isOpen:_,onSubmit:v,onToggle:d,providerToEditName:E})=>{const{formatMessage:m}=(0,R.Z)();return _?(0,e.jsxs)(ee.P,{onClose:d,labelledBy:"title",children:[(0,e.jsx)(se.x,{children:(0,e.jsx)(Pe.O,{label:l.join(", "),children:l.map((u,o,h)=>(0,e.jsx)(Me.$,{isCurrent:o===h.length-1,children:u},u))})}),(0,e.jsx)(ve.J9,{onSubmit:u=>v(u),initialValues:M,validationSchema:c.schema,validateOnChange:!1,children:({errors:u,handleChange:o,values:h})=>(0,e.jsxs)(r.l0,{children:[(0,e.jsx)(te.f,{children:(0,e.jsx)(ie.k,{direction:"column",alignItems:"stretch",gap:1,children:(0,e.jsx)(ae.r,{gap:5,children:c.form.map(f=>f.map(g=>(0,e.jsx)(re.P,{col:g.size,xs:12,children:(0,e.jsx)(C,{...g,error:u[g.name],onChange:o,value:h[g.name],providerToEditName:E})},g.name)))})})}),(0,e.jsx)(ne.m,{startActions:(0,e.jsx)(z.z,{variant:"tertiary",onClick:d,type:"button",children:m({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,e.jsx)(z.z,{type:"submit",loading:p,children:m({id:"global.save",defaultMessage:"Save"})})})]})})]}):null};U.defaultProps={initialData:null,providerToEditName:null},U.propTypes={headerBreadcrumbs:t.arrayOf(t.string).isRequired,initialData:t.object,layout:t.shape({form:t.arrayOf(t.array),schema:t.object}).isRequired,isOpen:t.bool.isRequired,isSubmiting:t.bool.isRequired,onSubmit:t.func.isRequired,onToggle:t.func.isRequired,providerToEditName:t.string};const q={id:(0,n.g)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},N={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},j={id:(0,n.g)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},I={id:(0,n.g)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},X={id:(0,n.g)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},$={id:(0,n.g)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},b={id:(0,n.g)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},H={id:(0,n.g)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},A={email:{form:[[{intlLabel:I,name:"enabled",type:"bool",description:j,size:6}]],schema:i.Ry().shape({enabled:i.Xg().required(r.I0.required)})},providers:{form:[[{intlLabel:I,name:"enabled",type:"bool",description:j,size:6,validations:{required:!0}}],[{intlLabel:X,name:"key",type:"text",placeholder:b,size:12,validations:{required:!0}}],[{intlLabel:H,name:"secret",type:"text",placeholder:b,size:12,validations:{required:!0}}],[{intlLabel:q,placeholder:N,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:$,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:i.Ry().shape({enabled:i.Xg().required(r.I0.required),key:i.Z_().when("enabled",{is:!0,then:i.Z_().required(r.I0.required),otherwise:i.Z_()}),secret:i.Z_().when("enabled",{is:!0,then:i.Z_().required(r.I0.required),otherwise:i.Z_()}),callback:i.Z_().when("enabled",{is:!0,then:i.Z_().required(r.I0.required),otherwise:i.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:I,name:"enabled",type:"bool",description:j,size:6,validations:{required:!0}}],[{intlLabel:X,name:"key",type:"text",placeholder:b,size:12,validations:{required:!0}}],[{intlLabel:H,name:"secret",type:"text",placeholder:b,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,n.g)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:b,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,n.g)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,n.g)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:q,placeholder:N,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:$,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:i.Ry().shape({enabled:i.Xg().required(r.I0.required),key:i.Z_().when("enabled",{is:!0,then:i.Z_().required(r.I0.required),otherwise:i.Z_()}),secret:i.Z_().when("enabled",{is:!0,then:i.Z_().required(r.I0.required),otherwise:i.Z_()}),subdomain:i.Z_().when("enabled",{is:!0,then:i.Z_().required(r.I0.required),otherwise:i.Z_()}),callback:i.Z_().when("enabled",{is:!0,then:i.Z_().required(r.I0.required),otherwise:i.Z_()})})}},Q=()=>{const{formatMessage:l,locale:M}=(0,R.Z)(),p=(0,T.useQueryClient)(),{trackUsage:c}=(0,r.rS)(),[_,v]=L.useState(!1),[d,E]=L.useState(null),m=(0,r.lm)(),{lockApp:u,unlockApp:o}=(0,r.o1)(),{get:h,put:f}=(0,r.kY)(),{formatAPIError:g}=(0,r.So)(),W=(0,r.Xe)(M,{sensitivity:"base"});(0,r.go)();const{isLoading:B,allowedActions:{canUpdate:D}}=(0,r.ss)({update:n.P.updateProviders}),{isLoading:Oe,data:K}=(0,T.useQuery)(["users-permissions","get-providers"],async()=>{const{data:a}=await h("/users-permissions/providers");return a},{initialData:{}}),J=(0,T.useMutation)(a=>f("/users-permissions/providers",a),{async onSuccess(){await p.invalidateQueries(["users-permissions","providers"]),m({type:"success",message:{id:(0,n.g)("notification.success.submit")}}),c("didEditAuthenticationProvider"),Z(),o()},onError(a){m({type:"warning",message:g(a)}),o()},refetchActive:!1}),x=Object.entries(K).reduce((a,[y,Le])=>{const{icon:k,enabled:xe,subdomain:Re}=Le;return a.push({name:y,icon:k==="envelope"?["fas","envelope"]:["fab",k],enabled:xe,subdomain:Re}),a},[]).sort((a,y)=>W.compare(a.name,y.name)),be=Oe||B,V=L.useMemo(()=>d?!!x.find(y=>y.name===d)?.subdomain:!1,[x,d]),De=L.useMemo(()=>d==="email"?A.email:V?A.providersWithSubdomain:A.providers,[d,V]),Z=()=>{v(a=>!a)},Y=a=>{D&&(E(a.name),Z())},ye=async a=>{u(),c("willEditAuthenticationProvider"),J.mutate({providers:{...K,[d]:a}})};return(0,e.jsxs)(de.A,{children:[(0,e.jsx)(r.SL,{name:l({id:(0,n.g)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),(0,e.jsxs)(le.o,{children:[(0,e.jsx)(oe.T,{title:l({id:(0,n.g)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),be?(0,e.jsx)(r.dO,{}):(0,e.jsx)(ue.D,{children:(0,e.jsxs)(_e.i,{colCount:3,rowCount:x.length+1,children:[(0,e.jsx)(ce.h,{children:(0,e.jsxs)(F.Tr,{children:[(0,e.jsx)(P.Th,{children:(0,e.jsx)(O.Z,{variant:"sigma",textColor:"neutral600",children:l({id:"global.name",defaultMessage:"Name"})})}),(0,e.jsx)(P.Th,{children:(0,e.jsx)(O.Z,{variant:"sigma",textColor:"neutral600",children:l({id:(0,n.g)("Providers.status"),defaultMessage:"Status"})})}),(0,e.jsx)(P.Th,{children:(0,e.jsx)(O.Z,{variant:"sigma",children:(0,e.jsx)(ge.T,{children:l({id:"global.settings",defaultMessage:"Settings"})})})})]})}),(0,e.jsx)(me.p,{children:x.map(a=>(0,e.jsxs)(F.Tr,{...(0,r.X7)({fn:()=>Y(a),condition:D}),children:[(0,e.jsx)(P.Td,{width:"45%",children:(0,e.jsx)(O.Z,{fontWeight:"semiBold",textColor:"neutral800",children:a.name})}),(0,e.jsx)(P.Td,{width:"65%",children:(0,e.jsx)(O.Z,{textColor:a.enabled?"success600":"danger600","data-testid":`enable-${a.name}`,children:a.enabled?l({id:"global.enabled",defaultMessage:"Enabled"}):l({id:"global.disabled",defaultMessage:"Disabled"})})}),(0,e.jsx)(P.Td,{...r.UW,children:D&&(0,e.jsx)(pe.h,{onClick:()=>Y(a),noBorder:!0,icon:(0,e.jsx)(Ee.Z,{}),label:"Edit"})})]},a.name))})]})})]}),(0,e.jsx)(U,{initialData:K[d],isOpen:_,isSubmiting:J.isLoading,layout:De,headerBreadcrumbs:[l({id:(0,n.g)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),he(d)],onToggle:Z,onSubmit:ye,providerToEditName:d})]})},fe=()=>(0,e.jsx)(r.O4,{permissions:n.P.readProviders,children:(0,e.jsx)(Q,{})})}}]);
