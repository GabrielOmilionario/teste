(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4601],{42480:function(){},70597:function(e,t,o){Promise.resolve().then(o.bind(o,47808))},47808:function(e,t,o){"use strict";o.r(t);var n=o(57437),s=o(2265),r=o(58110),l=o.n(r),a=o(73172),i=o(16463),c=o(31174);o(18416);let u=async()=>{try{let e=await fetch("https://api.ipify.org?format=json");return(await e.json()).ip}catch(e){return"Unknown IP"}},d=()=>{let e=navigator.userAgent,t=navigator.platform,o=navigator.appVersion,n="Unknown Device";for(let[t,o]of Object.entries({iPhone:/iPhone/,iPad:/iPad/,Android:/Android/,Windows:/Windows/,Mac:/Macintosh/,Linux:/Linux/}))if(o.test(e)){n=t;break}return{userAgent:e,platform:t,appVersion:o,deviceType:n}};t.default=e=>{var t;let{params:o}=e,[r,m]=(0,s.useState)(null),[p,g]=(0,s.useState)(0),[f,h]=(0,s.useState)(null),[v,b]=(0,s.useState)(null),[y,w]=(0,s.useState)(null),[S,x]=(0,s.useState)([]),[C,N]=(0,s.useState)([]),[j,k]=(0,s.useState)(!0),E=(0,i.useSearchParams)(),_=E.get("utm_source"),Z=E.get("utm_medium"),I=E.get("utm_campaign"),A={utm_source:_,utm_content:E.get("utm_content"),utm_term:E.get("utm_term"),utm_medium:Z,utm_campaign:I};(0,s.useEffect)(()=>{let e={utm_source:E.get("utm_source"),utm_medium:E.get("utm_medium"),utm_campaign:E.get("utm_campaign"),utm_content:E.get("utm_content"),utm_term:E.get("utm_term")};sessionStorage.setItem("utm_data",JSON.stringify(e))},[E]),(0,s.useEffect)(()=>{(async()=>{if(o.funnel)try{let e=await fetch("/api/slug/".concat(o.funnel,"?flow=0")),t=await e.json();if(e.ok){let e=l().AES.decrypt(t.data,'Er7"GWzS@}:Ahx4LV5s8Q'),o=JSON.parse(e.toString(l().enc.Utf8));m(o),h(o.funnelId),N(o.edges)}else console.error("Falha ao buscar dados do funil")}catch(e){console.error("Erro ao buscar dados do funil:",e)}})()},[o.funnel,v]),(0,s.useEffect)(()=>{if(!(null==r?void 0:r.head))return;let e=document.head,t=new DOMParser().parseFromString(r.head,"text/html"),o=[],n=()=>{t.querySelectorAll("script").forEach(t=>{let n=document.createElement("script");Array.from(t.attributes).forEach(e=>{n.setAttribute(e.name,e.value)}),n.innerHTML=t.innerHTML,n.src&&(n.async=t.hasAttribute("async"),n.defer=t.hasAttribute("defer")),e.querySelector('script[src="'.concat(n.src,'"]'))||(e.appendChild(n),o.push(n))})};return setTimeout(()=>{n()},100),()=>{o.forEach(e=>{e.parentNode&&e.parentNode.removeChild(e)})}},[null==r?void 0:r.head]),(0,s.useEffect)(()=>{document.title=(null==r?void 0:r.seoTitle)||"BK Funnels";let e=document.querySelector('meta[name="description"]');if(e)e.setAttribute("content",(null==r?void 0:r.seoDescription)||"Funis interativos");else{let e=document.createElement("meta");e.setAttribute("name","description"),e.setAttribute("content",(null==r?void 0:r.seoDescription)||"Funis interativos"),document.head.appendChild(e)}let t=document.querySelector('link[rel="icon"]');if(t)t.setAttribute("href",(null==r?void 0:r.favicon)||"");else{let e=document.createElement("link");e.setAttribute("rel","icon"),e.setAttribute("href",(null==r?void 0:r.favicon)||""),document.head.appendChild(e)}(null==r?void 0:r.background)&&(document.body.style.backgroundColor=r.background);let o=()=>{let e=document.querySelectorAll("h1, h2");e&&(null==r?void 0:r.color)&&e.forEach(e=>{e.style.color=r.color})};o();let n=new MutationObserver(()=>{o()});return n.observe(document.body,{childList:!0,subtree:!0}),()=>{n.disconnect()}},[r]),(0,s.useEffect)(()=>{let e=()=>{let e=sessionStorage.getItem("funnel-".concat(f));if(e){let t=JSON.parse(e);t[p]&&(k(!1),x(t[p]))}};return e(),window.addEventListener("storage",e),()=>{window.removeEventListener("storage",e)}},[f,p]),(0,s.useEffect)(()=>{window.scrollTo(0,0)},[p]);let O=(0,s.useRef)(!1);if((0,s.useEffect)(()=>{let e=async()=>{if(!f||O.current)return;O.current=!0;let e=localStorage.getItem("bksession"),t=e?JSON.parse(e):null;if(t&&t.funnelId===f&&t.code){w(t.code);return}let o=await u(),n=d();try{let e=await fetch("/api/slug/".concat(f,"/journey"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:y,stepId:null==r?void 0:r.steps[p].id,timestamp:new Date().toISOString(),ip:o,device:n.deviceType,system:n.platform,utm:A})});if(e.ok){let{code:t}=await e.json();w(t),localStorage.setItem("bksession",JSON.stringify({funnelId:f,code:t})),localStorage.setItem("bksession-expiry",(Date.now()+5184e6).toString())}else console.error("Failed to register initial visit")}catch(e){console.error("Error registering initial visit:",e)}};r&&e()},[r,p]),(0,s.useEffect)(()=>{let e=localStorage.getItem("bksession"),t=localStorage.getItem("bksession-expiry");if(e&&t&&Number(t)>Date.now()){let{funnelId:t,code:o}=JSON.parse(e);w(o),b(Number(v))}},[o.funnel]),!r)return null;let L=e=>{console.log(e,"recebi a braba");let t=String(null==r?void 0:r.steps[p].id),o=C.find(e=>e.source===t),n=null;e&&(n=C.find(o=>o.sourceHandle.substring(o.sourceHandle.lastIndexOf("-")+1)===e[0]&&o.source===t));let s=n?r.steps.findIndex(e=>String(e.id)===String(n.target)):r.steps.findIndex(e=>String(e.id)===String(null==o?void 0:o.target));console.log(o,"Edge selecionada para navega\xe7\xe3o"),console.log(n,"Edge mapeada com Handle limpo"),console.log(s,"\xcdndice da pr\xf3xima etapa"),-1!==s?g(s):(console.error("Target n\xe3o encontrado entre os passos."),p<r.steps.length-1?g(p+1):console.log("Voc\xea est\xe1 na \xfaltima etapa."))},T=async(e,t)=>{if(r)try{(await fetch("https://api.bkfunnels.com/api/".concat(f,"/answers"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:y,stepId:r.steps[e].id,...t})})).ok?console.log("Respostas da etapa atual enviadas com sucesso."):console.error("Falha ao enviar as respostas da etapa atual.")}catch(e){console.error("Erro ao enviar as respostas da etapa atual:",e)}},q=null==r?void 0:r.steps[p],P=async()=>{let e=(null==q?void 0:q.modules)||[];if(0===e.length){console.error("No modules found");return}let t=sessionStorage.getItem("funnel-".concat(f)),o={};t&&(o=JSON.parse(t));let n=o[p]||{form:{},answers:[]},s={},r=!1;for(let t of e){var l,a,i,c;switch(t.type){case"question":let o=null==q?void 0:q.modules.find(e=>"question"===e.type),u=null==o?void 0:o.settings.multiresponse,d=Array.isArray(null==n?void 0:n.answers)?n.answers:[],m=d.map(e=>e.split("-").slice(1).join("-"));if(u)d.length<1?(console.warn("M\xednimo de uma resposta n\xe3o selecionado."),r=!0):s.answers=d;else{if(1===m.length){let e=d.map(e=>e.split("-")[0]);if(e){console.log("entrou no numbers"),s.answers=m,L(e),await T(p,s);return}s.answers=m,console.log("dataToSubmit.answers"),L(),await T(p,s);return}console.warn("Nenhuma op\xe7\xe3o selecionada."),r=!0}break;case"leadCapture":let g=((null===(a=t.settings)||void 0===a?void 0:null===(l=a.options)||void 0===l?void 0:l.filter(e=>e.required))||[]).filter(e=>{let t=n.form||{};return!t[e.id]||""===t[e.id].trim()});if(g.length>0)return g.forEach(e=>{console.log('Campo obrigat\xf3rio "'.concat(e.placeholder,'" n\xe3o preenchido.'))}),r=!0,!0;s.form=n.form,console.log("dataToSubmit.form");break;case"progress":null==q||q.modules.find(e=>"progress"===e.type);break;case"button":console.log("chamando o bot\xe3o"),console.log(e);let f=e.some(e=>"question"===e.type),h=e.some(e=>"leadCapture"===e.type);console.log(t.id,"chegou no modulo button"),h?console.log("None = question || form"):f?console.log("None = question || form"):((null==t?void 0:null===(i=t.settings)||void 0===i?void 0:i.destination)==="url"?s.answers=["button external"]:s.answers=["button clicked"],console.log("Button clicked:",s));break;case"plan":console.log(t),(null==t?void 0:null===(c=t.settings)||void 0===c?void 0:c.options)&&console.log("\xe9 plano n\xe9")}}r||(L(),await T(p,s))},M=r.steps.length,H=(p+1)/r.steps.length*100,J=null===(t=r.steps[p])||void 0===t?void 0:t.modules.map(e=>e.type),D={};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("main",{className:"w-full",translate:"no",children:[(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:r.body}}),(0,n.jsxs)("div",{className:"flex p-3  justify-between items-center",children:[(0,n.jsxs)("div",{children:[!0===r.activeArrow&&(0,n.jsx)("button",{className:"text-gray-400",onClick:()=>{g(e=>Math.max(e-1,0))},disabled:0===p,children:(0,n.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.5301 5.47007C10.6705 5.6107 10.7494 5.80132 10.7494 6.00007C10.7494 6.19882 10.6705 6.38945 10.5301 6.53007L5.81007 11.2501H20.0001C20.199 11.2501 20.3898 11.3291 20.5304 11.4697C20.6711 11.6104 20.7501 11.8012 20.7501 12.0001C20.7501 12.199 20.6711 12.3897 20.5304 12.5304C20.3898 12.6711 20.199 12.7501 20.0001 12.7501H5.81007L10.5301 17.4701C10.6038 17.5387 10.6629 17.6215 10.7039 17.7135C10.7448 17.8055 10.7669 17.9048 10.7687 18.0056C10.7704 18.1063 10.7519 18.2063 10.7142 18.2997C10.6765 18.3931 10.6203 18.4779 10.5491 18.5491C10.4779 18.6203 10.3931 18.6765 10.2997 18.7142C10.2063 18.7519 10.1063 18.7704 10.0056 18.7687C9.90485 18.7669 9.80553 18.7448 9.71353 18.7039C9.62153 18.6629 9.53873 18.6038 9.47007 18.5301L3.47007 12.5301C3.32962 12.3894 3.25073 12.1988 3.25073 12.0001C3.25073 11.8013 3.32962 11.6107 3.47007 11.4701L9.47007 5.47007C9.6107 5.32962 9.80132 5.25073 10.0001 5.25073C10.1988 5.25073 10.3894 5.32962 10.5301 5.47007Z",fill:"currentcolor"})})})," "]}),(0,n.jsx)("div",{className:" font-extrabold",children:!0===r.activeLogo&&(0,n.jsx)("img",{src:r.logo||"",className:"h-10"})}),(0,n.jsxs)("div",{children:[(null==r?void 0:r.progressCount)===!0&&(0,n.jsxs)("p",{style:{color:r.ProgressBarColor},children:[p+1,"/",(0,n.jsx)("span",{className:"",children:M})]})," "]})]}),(null==r?void 0:r.activeProgressBar)===!0&&(0,n.jsx)("div",{className:"px-4",children:(0,n.jsx)(a.Z,{settings:{progress:H,color:r.ProgressBarColor,rounded:10}})}),(0,n.jsx)("div",{className:"flex p-5 w-full mx-auto text-gray-600",children:(0,n.jsx)("div",{className:"max-w-md w-full mx-auto",children:null==q?void 0:q.modules.sort((e,t)=>e.position-t.position).map(e=>{let t=c.u[e.type];return t?(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsx)(t,{id:e.id,settings:e.settings,funnelId:f,stepIndex:p,steps:null==r?void 0:r.steps,code:y,onComplete:"progress"===e.type?()=>{!0==e.settings.nextstep&&(L(),console.log("next progress"))}:void 0,onSubmit:"leadCapture"===e.type?T:void 0,onSelect:"question"===e.type?t=>{let o=e.settings,n=null==o?void 0:o.multiresponse;n||1!==t.length?n&&t.length:(console.log(t,"selectedOptions"),P())}:void 0,handleNextStep:P,index:D,currentStepModules:J,isDisabled:j},e.id)},e.id):null})})}),(0,n.jsx)("footer",{dangerouslySetInnerHTML:{__html:r.footer}})]})})}},31174:function(e,t,o){"use strict";o.d(t,{u:function(){return j}});var n=o(94604),s=o(63465),r=o(73172),l=o(57166),a=o(25425),i=o(39838),c=o(67549),u=o(28511),d=o(8788),m=o(28549),p=o(96032),g=o(28491),f=o(23193),h=o(83579),v=o(61190),b=o(87911),y=o(73087),w=o(4705),S=o(43059),x=o(31998),C=o(4940);o(18416);var N=o(92182);let j={text:n.Z,video:s.Z,progressBar:r.Z,checkbox:l.Z,procrastinationChart:a.Z,progress:i.Z,leadCapture:c.Z,feedback:u.Z,flowSelector:d.Z,question:m.Z,button:w.Z,plan:p.Z,timer:g.Z,image:f.Z,circular:h.Z,privacy:v.Z,accordion:b.Z,spacer:y.Z,carousel:S.Z,list:x.Z,instagram:C.Z,audio:N.Z}}},function(e){e.O(0,[1275,9141,734,890,7674,6648,9103,9184,8110,1667,2971,7023,1744],function(){return e(e.s=70597)}),_N_E=e.O()}]);