(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{41005:function(e,t,n){"use strict";n.d(t,{zx:function(){return p}});var r=n(70079),a=n(42342),l=n(24789),i=n(20680),o=n(92548),s=n(34614),c=(...e)=>e.filter(Boolean).join(" "),u=e=>e?"":void 0,[d,f]=(0,o.k)({strict:!1,name:"ButtonGroupContext"});function h(e){let{children:t,className:n,...a}=e,i=(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,o=c("chakra-button__icon",n);return r.createElement(l.m$.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...a,className:o},i)}function m(e){let{label:t,placement:n,spacing:a="0.5rem",children:i=r.createElement(s.$,{color:"currentColor",width:"1em",height:"1em"}),className:o,__css:u,...d}=e,f=c("chakra-button__spinner",o),h="start"===n?"marginEnd":"marginStart",m=(0,r.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[h]:t?a:0,fontSize:"1em",lineHeight:"normal",...u}),[u,t,h,a]);return r.createElement(l.m$.div,{className:f,...d,__css:m},i)}h.displayName="ButtonIcon",m.displayName="ButtonSpinner";var p=(0,l.Gp)((e,t)=>{let n=f(),o=(0,l.mq)("Button",{...n,...e}),{isDisabled:s=null==n?void 0:n.isDisabled,isLoading:d,isActive:h,children:p,leftIcon:g,rightIcon:j,loadingText:b,iconSpacing:_="0.5rem",type:y,spinner:E,spinnerPlacement:v="start",className:k,as:N,...S}=(0,i.Lr)(e),w=(0,r.useMemo)(()=>{let e={...null==o?void 0:o._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...o,...!!n&&{_focus:e}}},[o,n]),{ref:C,type:z}=function(e){let[t,n]=(0,r.useState)(!e),a=(0,r.useCallback)(e=>{e&&n("BUTTON"===e.tagName)},[]);return{ref:a,type:t?"button":void 0}}(N),B={rightIcon:j,leftIcon:g,iconSpacing:_,children:p};return r.createElement(l.m$.button,{disabled:s||d,ref:(0,a.qq)(t,C),as:N,type:y??z,"data-active":u(h),"data-loading":u(d),__css:w,className:c("chakra-button",k),...S},d&&"start"===v&&r.createElement(m,{className:"chakra-button__spinner--start",label:b,placement:"start",spacing:_},E),d?b||r.createElement(l.m$.span,{opacity:0},r.createElement(x,{...B})):r.createElement(x,{...B}),d&&"end"===v&&r.createElement(m,{className:"chakra-button__spinner--end",label:b,placement:"end",spacing:_},E))});function x(e){let{leftIcon:t,rightIcon:n,children:a,iconSpacing:l}=e;return r.createElement(r.Fragment,null,t&&r.createElement(h,{marginEnd:l},t),a,n&&r.createElement(h,{marginStart:l},n))}p.displayName="Button",(0,l.Gp)(function(e,t){let{size:n,colorScheme:a,variant:i,className:o,spacing:s="0.5rem",isAttached:u,isDisabled:f,...h}=e,m=c("chakra-button__group",o),p=(0,r.useMemo)(()=>({size:n,colorScheme:a,variant:i,isDisabled:f}),[n,a,i,f]),x={display:"inline-flex"};return x=u?{...x,"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{...x,"& > *:not(style) ~ *:not(style)":{marginStart:s}},r.createElement(d,{value:p},r.createElement(l.m$.div,{ref:t,role:"group",__css:x,className:m,"data-attached":u?"":void 0,...h}))}).displayName="ButtonGroup",(0,l.Gp)((e,t)=>{let{icon:n,children:a,isRound:l,"aria-label":i,...o}=e,s=n||a,c=(0,r.isValidElement)(s)?(0,r.cloneElement)(s,{"aria-hidden":!0,focusable:!1}):null;return r.createElement(p,{padding:"0",borderRadius:l?"full":void 0,ref:t,"aria-label":i,...o},c)}).displayName="IconButton"},42342:function(e,t,n){"use strict";n.d(t,{lq:function(){return a},qq:function(){return l}});var r=n(70079);function a(...e){return t=>{e.forEach(e=>{!function(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(n){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}}(e,t)})}}function l(...e){return(0,r.useMemo)(()=>a(...e),e)}},33520:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9051)}])},1372:function(e,t,n){"use strict";n.d(t,{A:function(){return u}});var r=n(35250),a=n(98533);n(70079);var l=n(92340),i=n.n(l),o=n(93153);function s(e){var t=e.href,n=e.title,l=(0,o.useRouter)().asPath,s="/"===t?"/"===l:l.startsWith(t);return(0,r.jsx)(a.HC,{borderBottom:s?"1px solid":"0px solid",borderColor:"cat.peach",py:"2",children:(0,r.jsx)(i(),{href:t,passHref:!0,children:(0,r.jsx)(a.rU,{transition:"color ease-in 200ms",_hover:{textDecor:"none",color:"cat.peach"},children:n})})})}function c(){return(0,r.jsxs)(a.Ug,{py:"4",px:"8",bg:"cat.crust",w:"full",justifyContent:"space-between",children:[(0,r.jsx)(a.Ug,{alignItems:"center",children:(0,r.jsx)(i(),{href:"/",passHref:!0,children:(0,r.jsx)("a",{children:(0,r.jsx)(a.xv,{as:"h2",fontWeight:"bold",fontSize:"xl",children:"StarkNet React"})})})}),(0,r.jsx)(a.Ug,{children:(0,r.jsxs)(a.aV,{display:"flex",flexDir:"row",gap:"4",children:[(0,r.jsx)(s,{href:"/",title:"Home"}),(0,r.jsx)(s,{href:"/get-started",title:"Get Started"}),(0,r.jsx)(s,{href:"/hooks",title:"Hooks"})]})})]})}function u(e){var t=e.children;return(0,r.jsxs)(a.xu,{h:"100vh",display:"flex",flexDir:"column",children:[(0,r.jsx)(c,{}),(0,r.jsx)(a.xu,{flexGrow:"1",bg:"cat.base",children:t})]})}},9051:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(35250),a=n(98533),l=n(41005);n(70079);var i=n(92340),o=n.n(i),s=n(1372),c=n(51206),u=n.n(c);function d(){return(0,r.jsxs)(s.A,{children:[(0,r.jsx)(u(),{children:(0,r.jsx)("title",{children:"StarkNet React - a collection of React hooks for StarkNet"})}),(0,r.jsx)(a.M5,{h:"full",children:(0,r.jsxs)(a.gC,{children:[(0,r.jsxs)(a.xu,{textAlign:"center",children:[(0,r.jsx)(a.X6,{as:"h1",fontSize:"7xl",children:"StarkNet React"}),(0,r.jsx)(a.X6,{as:"h2",fontSize:"4xl",color:"cat.peach",mt:"4",children:"A collection of React hooks for StarkNet."})]}),(0,r.jsxs)(a.Ug,{pt:"8",gap:"20",children:[(0,r.jsx)(o(),{href:"/get-started",passHref:!0,children:(0,r.jsx)(l.zx,{size:"lg",as:"a",variant:"outline",colorScheme:"whiteAlpha",children:"Get Started"})}),(0,r.jsx)(o(),{href:"/hooks",passHref:!0,children:(0,r.jsx)(l.zx,{size:"lg",as:"a",variant:"outline",colorScheme:"whiteAlpha",children:"View Hooks"})})]})]})})]})}}},function(e){e.O(0,[200,774,888,179],function(){return e(e.s=33520)}),_N_E=e.O()}]);