var Qt=t=>{throw TypeError(t)};var qe=(t,e,n)=>e.has(t)||Qt("Cannot "+n);var A=(t,e,n)=>(qe(t,e,"read from private field"),n?n.call(t):e.get(t)),x=(t,e,n)=>e.has(t)?Qt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);import{ag as Lt,a8 as Ge,ax as P,g as O,I as C,ay as Nt}from"./runtime.BIfulsMb.js";import{a as te}from"./index-client.xH2b0Xgx.js";new URL("sveltekit-internal://");function Me(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function He(t){return t.split("%25").map(decodeURI).join("%25")}function Ke(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function Tt({href:t}){return t.split("#")[0]}const We=["href","pathname","search","toString","toJSON"];function Ye(t,e,n){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(n(s),a[o](s));e();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of We)Object.defineProperty(r,a,{get(){return e(),t[a]},enumerable:!0,configurable:!0});return r}const ze="/__data.json",Je=".html__data.json";function Xe(t){return t.endsWith(".html")?t.replace(/\.html$/,Je):t.replace(/\/$/,"")+ze}function Ze(...t){let e=5381;for(const n of t)if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)e=e*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function Qe(t){const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n.buffer}const ge=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&z.delete(Vt(t)),ge(t,e));const z=new Map;function tn(t,e){const n=Vt(t,e),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&z.set(n,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Qe(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,e)}function en(t,e,n){if(z.size>0){const r=Vt(t,n),a=z.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);z.delete(r)}}return window.fetch(e,n)}function Vt(t,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const a=[];e.headers&&a.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&a.push(e.body),r+=`[data-hash="${Ze(...a)}"]`}return r}const nn=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function rn(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${on(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return e.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return xt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return xt(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const d=nn.exec(c),[,h,y,u,g]=d;return e.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return xt(c)}).join("")}).join("")}/?$`),params:e}}function an(t){return!/^\([^)]+\)$/.test(t)}function on(t){return t.slice(1).split("/").filter(an)}function sn(t,e,n){const r={},a=t.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<e.length;s+=1){const c=e[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const d=e[s+1],h=a[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function xt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function cn({nodes:t,server_loads:e,dictionary:n,matchers:r}){const a=new Set(e);return Object.entries(n).map(([s,[c,l,d]])=>{const{pattern:h,params:y}=rn(s),u={id:s,exec:g=>{const f=h.exec(g);if(f)return sn(f,y,r)},errors:[1,...d||[]].map(g=>t[g]),layouts:[0,...l||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[a.has(s),t[s]]}}function me(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function ee(t,e,n=JSON.stringify){const r=n(e);try{sessionStorage[t]=r}catch{}}const B=[];function Bt(t,e=Lt){let n=null;const r=new Set;function a(s){if(Ge(t,s)&&(t=s,n)){const c=!B.length;for(const l of r)l[1](),B.push(l,t);if(c){for(let l=0;l<B.length;l+=2)B[l][0](B[l+1]);B.length=0}}}function o(s){a(s(t))}function i(s,c=Lt){const l=[s,c];return r.add(l),r.size===1&&(n=e(a,o)||Lt),s(t),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:o,subscribe:i}}var fe;const T=((fe=globalThis.__sveltekit_juuam6)==null?void 0:fe.base)??"";var ue;const ln=((ue=globalThis.__sveltekit_juuam6)==null?void 0:ue.assets)??T,fn="1734373402759",ye="sveltekit:snapshot",_e="sveltekit:scroll",we="sveltekit:states",un="sveltekit:pageurl",M="sveltekit:history",X="sveltekit:navigation",pt={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},dt=location.origin;function ve(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function qt(){return{x:pageXOffset,y:pageYOffset}}function q(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const ne={...pt,"":pt.hover};function be(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function Ae(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=be(t)}}function jt(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,a=!n||!!r||vt(n,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(n==null?void 0:n.origin)===dt&&t.hasAttribute("download");return{url:n,external:a,target:r,download:o}}function gt(t){let e=null,n=null,r=null,a=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)r===null&&(r=q(s,"preload-code")),a===null&&(a=q(s,"preload-data")),e===null&&(e=q(s,"keepfocus")),n===null&&(n=q(s,"noscroll")),o===null&&(o=q(s,"reload")),i===null&&(i=q(s,"replacestate")),s=be(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:ne[r??"off"],preload_data:ne[a??"off"],keepfocus:c(e),noscroll:c(n),reload:c(o),replace_state:c(i)}}function re(t){const e=Bt(t);let n=!0;function r(){n=!0,e.update(i=>i)}function a(i){n=!1,e.set(i)}function o(i){let s;return e.subscribe(c=>{(s===void 0||n&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}const ke={v:()=>{}};function dn(){const{set:t,subscribe:e}=Bt(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${ln}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==fn;return i&&(t(!0),ke.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:r}}function vt(t,e){return t.origin!==dt||!t.pathname.startsWith(e)}function ae(t){const e=pn(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,e.charCodeAt(a));return n}const hn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function pn(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let a=0;a<t.length;a++)n<<=6,n|=hn.indexOf(t[a]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const gn=-1,mn=-2,yn=-3,_n=-4,wn=-5,vn=-6;function Fn(t,e){return Se(JSON.parse(t),e)}function Se(t,e){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function a(o,i=!1){if(o===gn)return;if(o===yn)return NaN;if(o===_n)return 1/0;if(o===wn)return-1/0;if(o===vn)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=n[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=e==null?void 0:e[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1;u<s.length;u+=1)d.add(a(s[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1;u<s.length;u+=2)h.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);r[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],f=ae(g),p=new u(f);r[o]=p;break}case"ArrayBuffer":{const u=s[1],g=ae(u);r[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const d=s[l];d!==mn&&(c[l]=a(d))}}else{const c={};r[o]=c;for(const l in s){const d=s[l];c[l]=a(d)}}return r[o]}return a(0)}const Ee=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ee];const bn=new Set([...Ee]);[...bn];function An(t){return t.filter(e=>e!=null)}class bt{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Re{constructor(e,n){this.status=e,this.location=n}}class Gt extends Error{constructor(e,n,r){super(r),this.status=e,this.text=n}}const kn="x-sveltekit-invalidated",Sn="x-sveltekit-trailing-slash";function mt(t){return t instanceof bt||t instanceof Gt?t.status:500}function En(t){return t instanceof Gt?t.text:"Internal Error"}let w,Z,Pt;const Rn=te.toString().includes("$$")||/function \w+\(\) \{\}/.test(te.toString());var nt,rt,at,ot,st,it,ct,lt,de,ft,he,ut,pe;Rn?(w={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},Z={current:null},Pt={current:!1}):(w=new(de=class{constructor(){x(this,nt,P({}));x(this,rt,P(null));x(this,at,P(null));x(this,ot,P({}));x(this,st,P({id:null}));x(this,it,P({}));x(this,ct,P(-1));x(this,lt,P(new URL("https://example.com")))}get data(){return O(A(this,nt))}set data(e){C(A(this,nt),e)}get form(){return O(A(this,rt))}set form(e){C(A(this,rt),e)}get error(){return O(A(this,at))}set error(e){C(A(this,at),e)}get params(){return O(A(this,ot))}set params(e){C(A(this,ot),e)}get route(){return O(A(this,st))}set route(e){C(A(this,st),e)}get state(){return O(A(this,it))}set state(e){C(A(this,it),e)}get status(){return O(A(this,ct))}set status(e){C(A(this,ct),e)}get url(){return O(A(this,lt))}set url(e){C(A(this,lt),e)}},nt=new WeakMap,rt=new WeakMap,at=new WeakMap,ot=new WeakMap,st=new WeakMap,it=new WeakMap,ct=new WeakMap,lt=new WeakMap,de),Z=new(he=class{constructor(){x(this,ft,P(null))}get current(){return O(A(this,ft))}set current(e){C(A(this,ft),e)}},ft=new WeakMap,he),Pt=new(pe=class{constructor(){x(this,ut,P(!1))}get current(){return O(A(this,ut))}set current(e){C(A(this,ut),e)}},ut=new WeakMap,pe),ke.v=()=>Pt.current=!0);function Mt(t){Object.assign(w,t)}const In=new Set(["icon","shortcut icon","apple-touch-icon"]),F=me(_e)??{},Q=me(ye)??{},j={url:re({}),page:re({}),navigating:Bt(null),updated:dn()};function Ht(t){F[t]=qt()}function Un(t,e){let n=t+1;for(;F[n];)delete F[n],n+=1;for(n=e+1;Q[n];)delete Q[n],n+=1}function K(t){return location.href=t.href,new Promise(()=>{})}async function Ie(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(T||"/");t&&await t.update()}}function oe(){}let At,$t,yt,N,Dt,V;const Kt=[],_t=[];let U=null;const Ue=[],Ln=[];let G=[],_={branch:[],error:null,url:null},Wt=!1,wt=!1,se=!0,tt=!1,Y=!1,Le=!1,kt=!1,D,I,L,W;const J=new Set;let Ot;async function Gn(t,e,n){var a,o,i,s;document.URL!==location.href&&(location.href=location.href),V=t,await((o=(a=t.hooks).init)==null?void 0:o.call(a)),At=cn(t),N=document.documentElement,Dt=e,$t=t.nodes[0],yt=t.nodes[1],$t(),yt(),I=(i=history.state)==null?void 0:i[M],L=(s=history.state)==null?void 0:s[X],I||(I=L=Date.now(),history.replaceState({...history.state,[M]:I,[X]:L},""));const r=F[I];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Nn(Dt,n):On(location.href,{replaceState:!0}),Cn()}async function Te(){if(await(Ot||(Ot=Promise.resolve())),!Ot)return;Ot=null;const t=Rt(_.url,!0);U=null;const e=W={},n=t&&await Jt(t);if(!(!n||e!==W)){if(n.type==="redirect")return St(new URL(n.location,_.url).href,{},1,e);n.props.page&&Object.assign(w,n.props.page),_=n.state,xe(),D.$set(n.props),Mt(n.props.page)}}function xe(){Kt.length=0,kt=!1}function Pe(t){_t.some(e=>e==null?void 0:e.snapshot)&&(Q[t]=_t.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function Oe(t){var e;(e=Q[t])==null||e.forEach((n,r)=>{var a,o;(o=(a=_t[r])==null?void 0:a.snapshot)==null||o.restore(n)})}function ie(){Ht(I),ee(_e,F),Pe(L),ee(ye,Q)}async function St(t,e,n,r){return ht({type:"goto",url:ve(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:r,accept:()=>{e.invalidateAll&&(kt=!0)}})}async function Tn(t){if(t.id!==(U==null?void 0:U.id)){const e={};J.add(e),U={id:t.id,token:e,promise:Jt({...t,preload:e}).then(n=>(J.delete(e),n.type==="loaded"&&n.state.error&&(U=null),n))}}return U.promise}async function Ct(t){const e=At.find(n=>n.exec(je(t)));e&&await Promise.all([...e.layouts,e.leaf].map(n=>n==null?void 0:n[1]()))}function Ce(t,e,n){var o;_=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(w,t.props.page),D=new V.root({target:e,props:{...t.props,stores:j,components:_t},hydrate:n,sync:!1}),Oe(L);const a={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};G.forEach(i=>i(a)),wt=!0}function et({url:t,params:e,branch:n,status:r,error:a,route:o,form:i}){let s="never";if(T&&(t.pathname===T||t.pathname===T+"/"))s="always";else for(const u of n)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);t.pathname=Me(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:a,route:o},props:{constructors:An(n).map(u=>u.node.component),page:w}};i!==void 0&&(c.props.form=i);let l={},d=!w,h=0;for(let u=0;u<Math.max(n.length,_.branch.length);u+=1){const g=n[u],f=_.branch[u];(g==null?void 0:g.data)!==(f==null?void 0:f.data)&&(d=!0),g&&(l={...l,...g.data},d&&(c.props[`data_${h}`]=l),h+=1)}return(!_.url||t.href!==_.url.href||_.error!==a||i!==void 0&&i!==w.form||d)&&(c.props.page={error:a,params:e,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:d?l:w.data}),c}async function Yt({loader:t,parent:e,url:n,params:r,route:a,server_data_node:o}){var d,h,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((d=l.universal)!=null&&d.load){let u=function(...f){for(const p of f){const{href:k}=new URL(p,n);c.dependencies.add(k)}};const g={route:new Proxy(a,{get:(f,p)=>(s&&(c.route=!0),f[p])}),params:new Proxy(r,{get:(f,p)=>(s&&c.params.add(p),f[p])}),data:(o==null?void 0:o.data)??null,url:Ye(n,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,p){let k;f instanceof Request?(k=f.url,p={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:[...f.headers].length?f.headers:void 0,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...p}):k=f;const E=new URL(k,n);return s&&u(E.href),E.origin===n.origin&&(k=E.href.slice(n.origin.length)),wt?en(k,E.href,p):tn(k,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),e()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,g)??null}return{node:l,loader:t,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=l.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function ce(t,e,n,r,a,o){if(kt)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==_.params[i])return!0;for(const i of a.dependencies)if(Kt.some(s=>s(new URL(i))))return!0;return!1}function zt(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function xn(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const r of n){const a=t.searchParams.getAll(r),o=e.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&n.delete(r)}return n}function le({error:t,url:e,route:n,params:r}){return{type:"loaded",state:{error:t,url:e,route:n,params:r,branch:[]},props:{page:w,constructors:[]}}}async function Jt({id:t,invalidating:e,url:n,params:r,route:a,preload:o}){if((U==null?void 0:U.id)===t)return J.delete(U.token),U.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),l.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let d=null;const h=_.url?t!==_.url.pathname+_.url.search:!1,y=_.route?a.id!==_.route.id:!1,u=xn(_.url,n);let g=!1;const f=l.map((m,b)=>{var $;const S=_.branch[b],R=!!(m!=null&&m[0])&&((S==null?void 0:S.loader)!==m[1]||ce(g,y,h,u,($=S.server)==null?void 0:$.uses,r));return R&&(g=!0),R});if(f.some(Boolean)){try{d=await Fe(n,f)}catch(m){const b=await H(m,{url:n,params:r,route:{id:t}});return J.has(o)?le({error:b,url:n,params:r,route:a}):Et({status:mt(m),error:b,url:n,route:a})}if(d.type==="redirect")return d}const p=d==null?void 0:d.nodes;let k=!1;const E=l.map(async(m,b)=>{var It;if(!m)return;const S=_.branch[b],R=p==null?void 0:p[b];if((!R||R.type==="skip")&&m[1]===(S==null?void 0:S.loader)&&!ce(k,y,h,u,(It=S.universal)==null?void 0:It.uses,r))return S;if(k=!0,(R==null?void 0:R.type)==="error")throw R;return Yt({loader:m[1],url:n,params:r,route:a,parent:async()=>{var Zt;const Xt={};for(let Ut=0;Ut<b;Ut+=1)Object.assign(Xt,(Zt=await E[Ut])==null?void 0:Zt.data);return Xt},server_data_node:zt(R===void 0&&m[0]?{type:"skip"}:R??null,m[0]?S==null?void 0:S.server:void 0)})});for(const m of E)m.catch(()=>{});const v=[];for(let m=0;m<l.length;m+=1)if(l[m])try{v.push(await E[m])}catch(b){if(b instanceof Re)return{type:"redirect",location:b.location};if(J.has(o))return le({error:await H(b,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let S=mt(b),R;if(p!=null&&p.includes(b))S=b.status??S,R=b.error;else if(b instanceof bt)R=b.body;else{if(await j.updated.check())return await Ie(),await K(n);R=await H(b,{params:r,url:n,route:{id:a.id}})}const $=await Ne(m,v,i);return $?et({url:n,params:r,branch:v.slice(0,$.idx).concat($.node),status:S,error:R,route:a}):await De(n,{id:a.id},R,S)}else v.push(void 0);return et({url:n,params:r,branch:v,status:200,error:null,route:a,form:e?void 0:null})}async function Ne(t,e,n){for(;t--;)if(n[t]){let r=t;for(;!e[r];)r-=1;try{return{idx:r+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function Et({status:t,error:e,url:n,route:r}){const a={};let o=null;if(V.server_loads[0]===0)try{const l=await Fe(n,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(n.origin!==dt||n.pathname!==location.pathname||Wt)&&await K(n)}const s=await Yt({loader:$t,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:zt(o)}),c={node:await yt(),loader:yt,universal:null,server:null,data:null};return et({url:n,params:a,branch:[s,c],status:t,error:e,route:null})}function Rt(t,e){if(!t||vt(t,T))return;let n;try{n=V.hooks.reroute({url:new URL(t)})??t.pathname}catch{return}const r=je(n);for(const a of At){const o=a.exec(r);if(o)return{id:t.pathname+t.search,invalidating:e,route:a,params:Ke(o),url:t}}}function je(t){return He(t.slice(T.length)||"/")}function $e({url:t,type:e,intent:n,delta:r}){let a=!1;const o=Be(_,n,t,e);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return tt||Ue.forEach(s=>s(i)),a?null:o}async function ht({type:t,url:e,popped:n,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=oe,block:d=oe}){const h=Rt(e,!1),y=$e({url:e,type:t,delta:n==null?void 0:n.delta,intent:h});if(!y){d();return}const u=I,g=L;l(),tt=!0,wt&&j.navigating.set(Z.current=y.navigation),W=c;let f=h&&await Jt(h);if(!f){if(vt(e,T))return await K(e);f=await De(e,{id:null},await H(new Gt(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(h==null?void 0:h.url)||e,W!==c)return y.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await Et({status:500,error:await H(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return St(new URL(f.location,e).href,{},s+1,c),!1;else f.props.page.status>=400&&await j.updated.check()&&(await Ie(),await K(e));if(xe(),Ht(u),Pe(g),f.props.page.url.pathname!==e.pathname&&(e.pathname=f.props.page.url.pathname),i=n?n.state:i,!n){const v=o?0:1,m={[M]:I+=v,[X]:L+=v,[we]:i};(o?history.replaceState:history.pushState).call(history,m,"",e),o||Un(I,L)}if(U=null,f.props.page.state=i,wt){_=f.state,f.props.page&&(f.props.page.url=e);const v=(await Promise.all(Ln.map(m=>m(y.navigation)))).filter(m=>typeof m=="function");if(v.length>0){let m=function(){G=G.filter(b=>!v.includes(b))};v.push(m),G.push(...v)}D.$set(f.props),Mt(f.props.page),Le=!0}else Ce(f,Dt,!1);const{activeElement:p}=document;await Nt();const k=n?n.scroll:a?qt():null;if(se){const v=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));k?scrollTo(k.x,k.y):v?v.scrollIntoView():scrollTo(0,0)}const E=document.activeElement!==p&&document.activeElement!==document.body;!r&&!E&&Ft(),se=!0,f.props.page&&Object.assign(w,f.props.page),tt=!1,t==="popstate"&&Oe(L),y.fulfil(void 0),G.forEach(v=>v(y.navigation)),j.navigating.set(Z.current=null)}async function De(t,e,n,r){return t.origin===dt&&t.pathname===location.pathname&&!Wt?await Et({status:r,error:n,url:t,route:e}):await K(t)}function Pn(){let t;N.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function e(o){o.defaultPrevented||r(o.composedPath()[0],1)}N.addEventListener("mousedown",e),N.addEventListener("touchstart",e,{passive:!0});const n=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(Ct(i.target.href),n.unobserve(i.target))},{threshold:0});function r(o,i){const s=Ae(o,N);if(!s)return;const{url:c,external:l,download:d}=jt(s,T);if(l||d)return;const h=gt(s),y=c&&_.url.pathname+_.url.search===c.pathname+c.search;if(!h.reload&&!y)if(i<=h.preload_data){const u=Rt(c,!1);u&&Tn(u)}else i<=h.preload_code&&Ct(c.pathname)}function a(){n.disconnect();for(const o of N.querySelectorAll("a")){const{url:i,external:s,download:c}=jt(o,T);if(s||c)continue;const l=gt(o);l.reload||(l.preload_code===pt.viewport&&n.observe(o),l.preload_code===pt.eager&&Ct(i.pathname))}}G.push(a),a()}function H(t,e){if(t instanceof bt)return t.body;const n=mt(t),r=En(t);return V.hooks.handleError({error:t,event:e,status:n,message:r})??{message:r}}function On(t,e={}){return t=ve(t),t.origin!==dt?Promise.reject(new Error("goto: invalid URL")):St(t,e,0)}function Mn(t){{const{href:e}=new URL(t,location.href);Kt.push(n=>n.href===e)}return Te()}function Hn(){return kt=!0,Te()}async function Kn(t){if(t.type==="error"){const e=new URL(location.href),{branch:n,route:r}=_;if(!r)return;const a=await Ne(_.branch.length,n,r.errors);if(a){const o=et({url:e,params:_.params,branch:n.slice(0,a.idx).concat(a.node),status:t.status??500,error:t.error,route:r});_=o.state,D.$set(o.props),Mt(o.props.page),Nt().then(Ft)}}else t.type==="redirect"?St(t.location,{invalidateAll:!0},0):(w.form=t.data,w.status=t.status,D.$set({form:null,page:w}),await Nt(),D.$set({form:t.data}),t.type==="success"&&Ft())}function Cn(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(ie(),!tt){const a=Be(_,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Ue.forEach(i=>i(o))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&ie()}),(e=navigator.connection)!=null&&e.saveData||Pn(),N.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=Ae(n.composedPath()[0],N);if(!r)return;const{url:a,external:o,target:i,download:s}=jt(r,T);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=gt(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;const[d,h]=a.href.split("#"),y=d===Tt(location);if(o||c.reload&&(!y||!h)){$e({url:a,type:"link"})?tt=!0:n.preventDefault();return}if(h!==void 0&&y){const[,u]=_.url.href.split("#");if(u===h){if(n.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=r.ownerDocument.getElementById(decodeURIComponent(h));g&&(g.scrollIntoView(),g.focus())}return}if(Y=!0,Ht(I),t(a),!c.replace_state)return;Y=!1}n.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),ht({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),N.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(vt(s,T))return;const c=n.target,l=gt(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const d=new FormData(c),h=a==null?void 0:a.getAttribute("name");h&&d.append(h,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),ht({type:"form",url:s,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??s.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[M]){const a=n.state[M];if(W={},a===I)return;const o=F[a],i=n.state[we]??{},s=new URL(n.state[un]??location.href),c=n.state[X],l=Tt(location)===Tt(_.url);if(c===L&&(Le||l)){t(s),F[I]=qt(),o&&scrollTo(o.x,o.y),i!==w.state&&(w.state=i,D.$set({page:w})),I=a;return}const h=a-I;await ht({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{I=a,L=c},block:()=>{history.go(-h)},nav_token:W})}else if(!Y){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{Y&&(Y=!1,history.replaceState({...history.state,[M]:++I,[X]:L},"",location.href))});for(const n of document.querySelectorAll("link"))In.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&j.navigating.set(Z.current=null)});function t(n){_.url=w.url=n,j.page.set({data:w.data,error:w.error,form:w.form,params:w.params,route:w.route,state:w.state,status:w.status,url:n}),j.page.notify()}}async function Nn(t,{status:e=200,error:n,node_ids:r,params:a,route:o,data:i,form:s}){Wt=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Rt(c,!1)||{});let l,d=!0;try{const h=r.map(async(g,f)=>{const p=i[f];return p!=null&&p.uses&&(p.uses=Ve(p.uses)),Yt({loader:V.nodes[g],url:c,params:a,route:o,parent:async()=>{const k={};for(let E=0;E<f;E+=1)Object.assign(k,(await h[E]).data);return k},server_data_node:zt(p)})}),y=await Promise.all(h),u=At.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let f=0;f<g.length;f++)g[f]||y.splice(f,0,void 0)}l=et({url:c,params:a,branch:y,status:e,error:n,form:s,route:u??null})}catch(h){if(h instanceof Re){await K(new URL(h.location,location.href));return}l=await Et({status:mt(h),error:await H(h,{url:c,params:a,route:o}),url:c,route:o}),t.textContent="",d=!1}l.props.page&&(l.props.page.state={}),Ce(l,t,d)}async function Fe(t,e){var a;const n=new URL(t);n.pathname=Xe(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(Sn,"1"),n.searchParams.append(kn,e.map(o=>o?"1":"0").join(""));const r=await ge(n.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new bt(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(y){return Se(y,{...V.decoders,Promise:u=>new Promise((g,f)=>{i.set(u,{fulfil:g,reject:f})})})}let d="";for(;;){const{done:y,value:u}=await s.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const f=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=Ve(p.uses),p.data=l(p.data))}),o(f);else if(f.type==="chunk"){const{id:p,data:k,error:E}=f,v=i.get(p);i.delete(p),E?v.reject(l(E)):v.fulfil(l(k))}}}})}function Ve(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function Ft(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function Be(t,e,n,r){var c,l;let a,o;const i=new Promise((d,h)=>{a=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((l=e==null?void 0:e.route)==null?void 0:l.id)??null},url:n},willUnload:!e,type:r,complete:i},fulfil:a,reject:o}}export{V as a,Kn as b,Mn as c,Gn as d,On as g,Hn as i,Fn as p,j as s};
