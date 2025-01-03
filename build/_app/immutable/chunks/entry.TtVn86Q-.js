var te=t=>{throw TypeError(t)};var Ge=(t,e,n)=>e.has(t)||te("Cannot "+n);var A=(t,e,n)=>(Ge(t,e,"read from private field"),n?n.call(t):e.get(t)),P=(t,e,n)=>e.has(t)?te("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);import{d as Tt,Z as Me,T as O,N,L as C,aA as jt}from"./runtime.lymXtDcb.js";import{o as ee}from"./index-client.f2z3FGAM.js";new URL("sveltekit-internal://");function ze(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function He(t){return t.split("%25").map(decodeURI).join("%25")}function Ke(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function xt({href:t}){return t.split("#")[0]}function We(t,e,n,r=!1){const a=new URL(t);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,s){if(s==="get"||s==="getAll"||s==="has")return l=>(n(l),i[s](l));e();const c=Reflect.get(i,s);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const o=["href","pathname","search","toString","toJSON"];r&&o.push("hash");for(const i of o)Object.defineProperty(a,i,{get(){return e(),t[i]},enumerable:!0,configurable:!0});return a}const Ye="/__data.json",Je=".html__data.json";function Xe(t){return t.endsWith(".html")?t.replace(/\.html$/,Je):t.replace(/\/$/,"")+Ye}function Ze(...t){let e=5381;for(const n of t)if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)e=e*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function Qe(t){const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n.buffer}const me=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&J.delete(Bt(t)),me(t,e));const J=new Map;function tn(t,e){const n=Bt(t,e),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&J.set(n,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Qe(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,e)}function en(t,e,n){if(J.size>0){const r=Bt(t,n),a=J.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);J.delete(r)}}return window.fetch(e,n)}function Bt(t,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const a=[];e.headers&&a.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&a.push(e.body),r+=`[data-hash="${Ze(...a)}"]`}return r}const nn=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function rn(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${on(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return e.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Pt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Pt(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const h=nn.exec(c),[,d,y,u,g]=h;return e.push({name:u,matcher:g,optional:!!d,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"(.*?)":d?"([^/]*)?":"([^/]+?)"}return Pt(c)}).join("")}).join("")}/?$`),params:e}}function an(t){return!/^\([^)]+\)$/.test(t)}function on(t){return t.slice(1).split("/").filter(an)}function sn(t,e,n){const r={},a=t.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<e.length;s+=1){const c=e[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(h=>h).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const h=e[s+1],d=a[s+1];h&&!h.rest&&h.optional&&d&&c.chained&&(i=0),!h&&!d&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function Pt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function cn({nodes:t,server_loads:e,dictionary:n,matchers:r}){const a=new Set(e);return Object.entries(n).map(([s,[c,l,h]])=>{const{pattern:d,params:y}=rn(s),u={id:s,exec:g=>{const f=d.exec(g);if(f)return sn(f,y,r)},errors:[1,...h||[]].map(g=>t[g]),layouts:[0,...l||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[a.has(s),t[s]]}}function ye(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function ne(t,e,n=JSON.stringify){const r=n(e);try{sessionStorage[t]=r}catch{}}const B=[];function qt(t,e=Tt){let n=null;const r=new Set;function a(s){if(Me(t,s)&&(t=s,n)){const c=!B.length;for(const l of r)l[1](),B.push(l,t);if(c){for(let l=0;l<B.length;l+=2)B[l][0](B[l+1]);B.length=0}}}function o(s){a(s(t))}function i(s,c=Tt){const l=[s,c];return r.add(l),r.size===1&&(n=e(a,o)||Tt),s(t),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:o,subscribe:i}}var ue;const x=((ue=globalThis.__sveltekit_hswnzx)==null?void 0:ue.base)??"";var he;const ln=((he=globalThis.__sveltekit_hswnzx)==null?void 0:he.assets)??x,fn="1735944455041",_e="sveltekit:snapshot",we="sveltekit:scroll",ve="sveltekit:states",un="sveltekit:pageurl",M="sveltekit:history",Z="sveltekit:navigation",pt={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},dt=location.origin;function be(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function Gt(){return{x:pageXOffset,y:pageYOffset}}function q(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const re={...pt,"":pt.hover};function Ae(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function ke(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=Ae(t)}}function $t(t,e,n){let r;try{r=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const a=t instanceof SVGAElement?t.target.baseVal:t.target,o=!r||!!a||bt(r,e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===dt&&t.hasAttribute("download");return{url:r,external:o,target:a,download:i}}function gt(t){let e=null,n=null,r=null,a=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)r===null&&(r=q(s,"preload-code")),a===null&&(a=q(s,"preload-data")),e===null&&(e=q(s,"keepfocus")),n===null&&(n=q(s,"noscroll")),o===null&&(o=q(s,"reload")),i===null&&(i=q(s,"replacestate")),s=Ae(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:re[r??"off"],preload_data:re[a??"off"],keepfocus:c(e),noscroll:c(n),reload:c(o),replace_state:c(i)}}function ae(t){const e=qt(t);let n=!0;function r(){n=!0,e.update(i=>i)}function a(i){n=!1,e.set(i)}function o(i){let s;return e.subscribe(c=>{(s===void 0||n&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}const Se={v:()=>{}};function hn(){const{set:t,subscribe:e}=qt(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${ln}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==fn;return i&&(t(!0),Se.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:r}}function bt(t,e,n){return t.origin!==dt||!t.pathname.startsWith(e)?!0:n?!(t.pathname===e+"/"||t.protocol==="file:"&&t.pathname.replace(/\/[^/]+\.html?$/,"")===e):!1}function oe(t){const e=pn(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,e.charCodeAt(a));return n}const dn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function pn(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let a=0;a<t.length;a++)n<<=6,n|=dn.indexOf(t[a]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const gn=-1,mn=-2,yn=-3,_n=-4,wn=-5,vn=-6;function Fn(t,e){return Ee(JSON.parse(t),e)}function Ee(t,e){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function a(o,i=!1){if(o===gn)return;if(o===yn)return NaN;if(o===_n)return 1/0;if(o===wn)return-1/0;if(o===vn)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=n[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=e==null?void 0:e[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const h=new Set;r[o]=h;for(let u=1;u<s.length;u+=1)h.add(a(s[u]));break;case"Map":const d=new Map;r[o]=d;for(let u=1;u<s.length;u+=2)d.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);r[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],f=oe(g),p=new u(f);r[o]=p;break}case"ArrayBuffer":{const u=s[1],g=oe(u);r[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const h=s[l];h!==mn&&(c[l]=a(h))}}else{const c={};r[o]=c;for(const l in s){const h=s[l];c[l]=a(h)}}return r[o]}return a(0)}const Re=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Re];const bn=new Set([...Re]);[...bn];function An(t){return t.filter(e=>e!=null)}class At{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ie{constructor(e,n){this.status=e,this.location=n}}class Mt extends Error{constructor(e,n,r){super(r),this.status=e,this.text=n}}const kn="x-sveltekit-invalidated",Sn="x-sveltekit-trailing-slash";function mt(t){return t instanceof At||t instanceof Mt?t.status:500}function En(t){return t instanceof Mt?t.text:"Internal Error"}let w,Q,Ot;const Rn=ee.toString().includes("$$")||/function \w+\(\) \{\}/.test(ee.toString());var rt,at,ot,st,it,ct,lt,ft,de,ut,pe,ht,ge;Rn?(w={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},Q={current:null},Ot={current:!1}):(w=new(de=class{constructor(){P(this,rt,O({}));P(this,at,O(null));P(this,ot,O(null));P(this,st,O({}));P(this,it,O({id:null}));P(this,ct,O({}));P(this,lt,O(-1));P(this,ft,O(new URL("https://example.com")))}get data(){return N(A(this,rt))}set data(e){C(A(this,rt),e)}get form(){return N(A(this,at))}set form(e){C(A(this,at),e)}get error(){return N(A(this,ot))}set error(e){C(A(this,ot),e)}get params(){return N(A(this,st))}set params(e){C(A(this,st),e)}get route(){return N(A(this,it))}set route(e){C(A(this,it),e)}get state(){return N(A(this,ct))}set state(e){C(A(this,ct),e)}get status(){return N(A(this,lt))}set status(e){C(A(this,lt),e)}get url(){return N(A(this,ft))}set url(e){C(A(this,ft),e)}},rt=new WeakMap,at=new WeakMap,ot=new WeakMap,st=new WeakMap,it=new WeakMap,ct=new WeakMap,lt=new WeakMap,ft=new WeakMap,de),Q=new(pe=class{constructor(){P(this,ut,O(null))}get current(){return N(A(this,ut))}set current(e){C(A(this,ut),e)}},ut=new WeakMap,pe),Ot=new(ge=class{constructor(){P(this,ht,O(!1))}get current(){return N(A(this,ht))}set current(e){C(A(this,ht),e)}},ht=new WeakMap,ge),Se.v=()=>Ot.current=!0);function zt(t){Object.assign(w,t)}const In=new Set(["icon","shortcut icon","apple-touch-icon"]),V=ye(we)??{},tt=ye(_e)??{},$={url:ae({}),page:ae({}),navigating:qt(null),updated:hn()};function Ht(t){V[t]=Gt()}function Un(t,e){let n=t+1;for(;V[n];)delete V[n],n+=1;for(n=e+1;tt[n];)delete tt[n],n+=1}function H(t){return location.href=t.href,new Promise(()=>{})}async function Ue(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(x||"/");t&&await t.update()}}function se(){}let kt,Dt,yt,j,Ft,S;const Kt=[],_t=[];let L=null;const Le=[],Ln=[];let G=[],_={branch:[],error:null,url:null},Wt=!1,wt=!1,ie=!0,et=!1,W=!1,Te=!1,St=!1,F,U,T,K;const X=new Set;let Nt;async function Gn(t,e,n){var a,o,i,s;document.URL!==location.href&&(location.href=location.href),S=t,await((o=(a=t.hooks).init)==null?void 0:o.call(a)),kt=cn(t),j=document.documentElement,Ft=e,Dt=t.nodes[0],yt=t.nodes[1],Dt(),yt(),U=(i=history.state)==null?void 0:i[M],T=(s=history.state)==null?void 0:s[Z],U||(U=T=Date.now(),history.replaceState({...history.state,[M]:U,[Z]:T},""));const r=V[U];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Cn(Ft,n):On(location.href,{replaceState:!0}),Nn()}async function xe(){if(await(Nt||(Nt=Promise.resolve())),!Nt)return;Nt=null;const t=It(_.url,!0);L=null;const e=K={},n=t&&await Xt(t);if(!(!n||e!==K)){if(n.type==="redirect")return Et(new URL(n.location,_.url).href,{},1,e);n.props.page&&Object.assign(w,n.props.page),_=n.state,Pe(),F.$set(n.props),zt(n.props.page)}}function Pe(){Kt.length=0,St=!1}function Oe(t){_t.some(e=>e==null?void 0:e.snapshot)&&(tt[t]=_t.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function Ne(t){var e;(e=tt[t])==null||e.forEach((n,r)=>{var a,o;(o=(a=_t[r])==null?void 0:a.snapshot)==null||o.restore(n)})}function ce(){Ht(U),ne(we,V),Oe(T),ne(_e,tt)}async function Et(t,e,n,r){return Y({type:"goto",url:be(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:r,accept:()=>{e.invalidateAll&&(St=!0)}})}async function Tn(t){if(t.id!==(L==null?void 0:L.id)){const e={};X.add(e),L={id:t.id,token:e,promise:Xt({...t,preload:e}).then(n=>(X.delete(e),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function Ct(t){const e=kt.find(n=>n.exec($e(t)));e&&await Promise.all([...e.layouts,e.leaf].map(n=>n==null?void 0:n[1]()))}function Ce(t,e,n){var o;_=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(w,t.props.page),F=new S.root({target:e,props:{...t.props,stores:$,components:_t},hydrate:n,sync:!1}),Ne(T);const a={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};G.forEach(i=>i(a)),wt=!0}function nt({url:t,params:e,branch:n,status:r,error:a,route:o,form:i}){let s="never";if(x&&(t.pathname===x||t.pathname===x+"/"))s="always";else for(const u of n)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);t.pathname=ze(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:a,route:o},props:{constructors:An(n).map(u=>u.node.component),page:w}};i!==void 0&&(c.props.form=i);let l={},h=!w,d=0;for(let u=0;u<Math.max(n.length,_.branch.length);u+=1){const g=n[u],f=_.branch[u];(g==null?void 0:g.data)!==(f==null?void 0:f.data)&&(h=!0),g&&(l={...l,...g.data},h&&(c.props[`data_${d}`]=l),d+=1)}return(!_.url||t.href!==_.url.href||_.error!==a||i!==void 0&&i!==w.form||h)&&(c.props.page={error:a,params:e,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:h?l:w.data}),c}async function Yt({loader:t,parent:e,url:n,params:r,route:a,server_data_node:o}){var h,d,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((h=l.universal)!=null&&h.load){let u=function(...f){for(const p of f){const{href:k}=new URL(p,n);c.dependencies.add(k)}};const g={route:new Proxy(a,{get:(f,p)=>(s&&(c.route=!0),f[p])}),params:new Proxy(r,{get:(f,p)=>(s&&c.params.add(p),f[p])}),data:(o==null?void 0:o.data)??null,url:We(n,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)},S.hash),async fetch(f,p){let k;f instanceof Request?(k=f.url,p={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:[...f.headers].length?f.headers:void 0,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...p}):k=f;const R=new URL(k,n);return s&&u(R.href),R.origin===n.origin&&(k=R.href.slice(n.origin.length)),wt?en(k,R.href,p):tn(k,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),e()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,g)??null}return{node:l,loader:t,server:o,universal:(d=l.universal)!=null&&d.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=l.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function le(t,e,n,r,a,o){if(St)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==_.params[i])return!0;for(const i of a.dependencies)if(Kt.some(s=>s(new URL(i))))return!0;return!1}function Jt(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function xn(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const r of n){const a=t.searchParams.getAll(r),o=e.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&n.delete(r)}return n}function fe({error:t,url:e,route:n,params:r}){return{type:"loaded",state:{error:t,url:e,route:n,params:r,branch:[]},props:{page:w,constructors:[]}}}async function Xt({id:t,invalidating:e,url:n,params:r,route:a,preload:o}){if((L==null?void 0:L.id)===t)return X.delete(L.token),L.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),l.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let h=null;const d=_.url?t!==vt(_.url):!1,y=_.route?a.id!==_.route.id:!1,u=xn(_.url,n);let g=!1;const f=l.map((m,b)=>{var D;const E=_.branch[b],I=!!(m!=null&&m[0])&&((E==null?void 0:E.loader)!==m[1]||le(g,y,d,u,(D=E.server)==null?void 0:D.uses,r));return I&&(g=!0),I});if(f.some(Boolean)){try{h=await Ve(n,f)}catch(m){const b=await z(m,{url:n,params:r,route:{id:t}});return X.has(o)?fe({error:b,url:n,params:r,route:a}):Rt({status:mt(m),error:b,url:n,route:a})}if(h.type==="redirect")return h}const p=h==null?void 0:h.nodes;let k=!1;const R=l.map(async(m,b)=>{var Ut;if(!m)return;const E=_.branch[b],I=p==null?void 0:p[b];if((!I||I.type==="skip")&&m[1]===(E==null?void 0:E.loader)&&!le(k,y,d,u,(Ut=E.universal)==null?void 0:Ut.uses,r))return E;if(k=!0,(I==null?void 0:I.type)==="error")throw I;return Yt({loader:m[1],url:n,params:r,route:a,parent:async()=>{var Qt;const Zt={};for(let Lt=0;Lt<b;Lt+=1)Object.assign(Zt,(Qt=await R[Lt])==null?void 0:Qt.data);return Zt},server_data_node:Jt(I===void 0&&m[0]?{type:"skip"}:I??null,m[0]?E==null?void 0:E.server:void 0)})});for(const m of R)m.catch(()=>{});const v=[];for(let m=0;m<l.length;m+=1)if(l[m])try{v.push(await R[m])}catch(b){if(b instanceof Ie)return{type:"redirect",location:b.location};if(X.has(o))return fe({error:await z(b,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let E=mt(b),I;if(p!=null&&p.includes(b))E=b.status??E,I=b.error;else if(b instanceof At)I=b.body;else{if(await $.updated.check())return await Ue(),await H(n);I=await z(b,{params:r,url:n,route:{id:a.id}})}const D=await je(m,v,i);return D?nt({url:n,params:r,branch:v.slice(0,D.idx).concat(D.node),status:E,error:I,route:a}):await Fe(n,{id:a.id},I,E)}else v.push(void 0);return nt({url:n,params:r,branch:v,status:200,error:null,route:a,form:e?void 0:null})}async function je(t,e,n){for(;t--;)if(n[t]){let r=t;for(;!e[r];)r-=1;try{return{idx:r+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function Rt({status:t,error:e,url:n,route:r}){const a={};let o=null;if(S.server_loads[0]===0)try{const l=await Ve(n,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(n.origin!==dt||n.pathname!==location.pathname||Wt)&&await H(n)}const s=await Yt({loader:Dt,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Jt(o)}),c={node:await yt(),loader:yt,universal:null,server:null,data:null};return nt({url:n,params:a,branch:[s,c],status:t,error:e,route:null})}function It(t,e){if(!t||bt(t,x,S.hash))return;let n;try{if(n=S.hooks.reroute({url:new URL(t)})??t,typeof n=="string"){const a=new URL(t);S.hash?a.hash=n:a.pathname=n,n=a}}catch{return}const r=$e(n);for(const a of kt){const o=a.exec(r);if(o)return{id:vt(t),invalidating:e,route:a,params:Ke(o),url:t}}}function $e(t){return He(S.hash?t.hash.replace(/^#/,"").replace(/[?#].+/,""):t.pathname.slice(x.length))||"/"}function vt(t){return(S.hash?t.hash.replace(/^#/,""):t.pathname)+t.search}function De({url:t,type:e,intent:n,delta:r}){let a=!1;const o=qe(_,n,t,e);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return et||Le.forEach(s=>s(i)),a?null:o}async function Y({type:t,url:e,popped:n,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=se,block:h=se}){const d=It(e,!1),y=De({url:e,type:t,delta:n==null?void 0:n.delta,intent:d});if(!y){h();return}const u=U,g=T;l(),et=!0,wt&&$.navigating.set(Q.current=y.navigation),K=c;let f=d&&await Xt(d);if(!f){if(bt(e,x,S.hash))return await H(e);f=await Fe(e,{id:null},await z(new Mt(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(d==null?void 0:d.url)||e,K!==c)return y.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await Rt({status:500,error:await z(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return Et(new URL(f.location,e).href,{},s+1,c),!1;else f.props.page.status>=400&&await $.updated.check()&&(await Ue(),await H(e));if(Pe(),Ht(u),Oe(g),f.props.page.url.pathname!==e.pathname&&(e.pathname=f.props.page.url.pathname),i=n?n.state:i,!n){const v=o?0:1,m={[M]:U+=v,[Z]:T+=v,[ve]:i};(o?history.replaceState:history.pushState).call(history,m,"",e),o||Un(U,T)}if(L=null,f.props.page.state=i,wt){_=f.state,f.props.page&&(f.props.page.url=e);const v=(await Promise.all(Ln.map(m=>m(y.navigation)))).filter(m=>typeof m=="function");if(v.length>0){let m=function(){G=G.filter(b=>!v.includes(b))};v.push(m),G.push(...v)}F.$set(f.props),zt(f.props.page),Te=!0}else Ce(f,Ft,!1);const{activeElement:p}=document;await jt();const k=n?n.scroll:a?Gt():null;if(ie){const v=e.hash&&document.getElementById(decodeURIComponent(S.hash?e.hash.split("#")[2]??"":e.hash.slice(1)));k?scrollTo(k.x,k.y):v?v.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==p&&document.activeElement!==document.body;!r&&!R&&Vt(),ie=!0,f.props.page&&Object.assign(w,f.props.page),et=!1,t==="popstate"&&Ne(T),y.fulfil(void 0),G.forEach(v=>v(y.navigation)),$.navigating.set(Q.current=null)}async function Fe(t,e,n,r){return t.origin===dt&&t.pathname===location.pathname&&!Wt?await Rt({status:r,error:n,url:t,route:e}):await H(t)}function Pn(){let t;j.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function e(o){o.defaultPrevented||r(o.composedPath()[0],1)}j.addEventListener("mousedown",e),j.addEventListener("touchstart",e,{passive:!0});const n=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(Ct(new URL(i.target.href)),n.unobserve(i.target))},{threshold:0});function r(o,i){const s=ke(o,j);if(!s)return;const{url:c,external:l,download:h}=$t(s,x,S.hash);if(l||h)return;const d=gt(s),y=c&&vt(_.url)===vt(c);if(!d.reload&&!y)if(i<=d.preload_data){const u=It(c,!1);u&&Tn(u)}else i<=d.preload_code&&Ct(c)}function a(){n.disconnect();for(const o of j.querySelectorAll("a")){const{url:i,external:s,download:c}=$t(o,x,S.hash);if(s||c)continue;const l=gt(o);l.reload||(l.preload_code===pt.viewport&&n.observe(o),l.preload_code===pt.eager&&Ct(i))}}G.push(a),a()}function z(t,e){if(t instanceof At)return t.body;const n=mt(t),r=En(t);return S.hooks.handleError({error:t,event:e,status:n,message:r})??{message:r}}function On(t,e={}){return t=new URL(be(t)),t.origin!==dt?Promise.reject(new Error("goto: invalid URL")):Et(t,e,0)}function Mn(t){{const{href:e}=new URL(t,location.href);Kt.push(n=>n.href===e)}return xe()}function zn(){return St=!0,xe()}async function Hn(t){if(t.type==="error"){const e=new URL(location.href),{branch:n,route:r}=_;if(!r)return;const a=await je(_.branch.length,n,r.errors);if(a){const o=nt({url:e,params:_.params,branch:n.slice(0,a.idx).concat(a.node),status:t.status??500,error:t.error,route:r});_=o.state,F.$set(o.props),zt(o.props.page),jt().then(Vt)}}else t.type==="redirect"?Et(t.location,{invalidateAll:!0},0):(w.form=t.data,w.status=t.status,F.$set({form:null,page:w}),await jt(),F.$set({form:t.data}),t.type==="success"&&Vt())}function Nn(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(ce(),!et){const a=qe(_,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Le.forEach(i=>i(o))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&ce()}),(e=navigator.connection)!=null&&e.saveData||Pn(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=ke(n.composedPath()[0],j);if(!r)return;const{url:a,external:o,target:i,download:s}=$t(r,x,S.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=gt(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;const[h,d]=(S.hash?a.hash.replace(/^#/,""):a.href).split("#"),y=h===xt(location);if(o||c.reload&&(!y||!d)){De({url:a,type:"link"})?et=!0:n.preventDefault();return}if(d!==void 0&&y){const[,u]=_.url.href.split("#");if(u===d){if(n.preventDefault(),d===""||d==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=r.ownerDocument.getElementById(decodeURIComponent(d));g&&(g.scrollIntoView(),g.focus())}return}if(W=!0,Ht(U),t(a),!c.replace_state)return;W=!1}n.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),Y({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(bt(s,x,!1))return;const c=n.target,l=gt(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const h=new FormData(c),d=a==null?void 0:a.getAttribute("name");d&&h.append(d,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(h).toString(),Y({type:"form",url:s,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??s.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[M]){const a=n.state[M];if(K={},a===U)return;const o=V[a],i=n.state[ve]??{},s=new URL(n.state[un]??location.href),c=n.state[Z],l=xt(location)===xt(_.url);if(c===T&&(Te||l)){t(s),V[U]=Gt(),o&&scrollTo(o.x,o.y),i!==w.state&&(w.state=i,F.$set({page:w})),U=a;return}const d=a-U;await Y({type:"popstate",url:s,popped:{state:i,scroll:o,delta:d},accept:()=>{U=a,T=c},block:()=>{history.go(-d)},nav_token:K})}else if(!W){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{W?(W=!1,history.replaceState({...history.state,[M]:++U,[Z]:T},"",location.href)):S.hash&&_.url.hash===location.hash&&Y({type:"goto",url:_.url})});for(const n of document.querySelectorAll("link"))In.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(Q.current=null)});function t(n){_.url=w.url=n,$.page.set({data:w.data,error:w.error,form:w.form,params:w.params,route:w.route,state:w.state,status:w.status,url:n}),$.page.notify()}}async function Cn(t,{status:e=200,error:n,node_ids:r,params:a,route:o,data:i,form:s}){Wt=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=It(c,!1)||{});let l,h=!0;try{const d=r.map(async(g,f)=>{const p=i[f];return p!=null&&p.uses&&(p.uses=Be(p.uses)),Yt({loader:S.nodes[g],url:c,params:a,route:o,parent:async()=>{const k={};for(let R=0;R<f;R+=1)Object.assign(k,(await d[R]).data);return k},server_data_node:Jt(p)})}),y=await Promise.all(d),u=kt.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let f=0;f<g.length;f++)g[f]||y.splice(f,0,void 0)}l=nt({url:c,params:a,branch:y,status:e,error:n,form:s,route:u??null})}catch(d){if(d instanceof Ie){await H(new URL(d.location,location.href));return}l=await Rt({status:mt(d),error:await z(d,{url:c,params:a,route:o}),url:c,route:o}),t.textContent="",h=!1}l.props.page&&(l.props.page.state={}),Ce(l,t,h)}async function Ve(t,e){var a;const n=new URL(t);n.pathname=Xe(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(Sn,"1"),n.searchParams.append(kn,e.map(o=>o?"1":"0").join(""));const r=await me(n.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new At(r.status,o)}return new Promise(async o=>{var d;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(y){return Ee(y,{...S.decoders,Promise:u=>new Promise((g,f)=>{i.set(u,{fulfil:g,reject:f})})})}let h="";for(;;){const{done:y,value:u}=await s.read();if(y&&!h)break;for(h+=!u&&h?`
`:c.decode(u,{stream:!0});;){const g=h.indexOf(`
`);if(g===-1)break;const f=JSON.parse(h.slice(0,g));if(h=h.slice(g+1),f.type==="redirect")return o(f);if(f.type==="data")(d=f.nodes)==null||d.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=Be(p.uses),p.data=l(p.data))}),o(f);else if(f.type==="chunk"){const{id:p,data:k,error:R}=f,v=i.get(p);i.delete(p),R?v.reject(l(R)):v.fulfil(l(k))}}}})}function Be(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function Vt(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function qe(t,e,n,r){var c,l;let a,o;const i=new Promise((h,d)=>{a=h,o=d});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((l=e==null?void 0:e.route)==null?void 0:l.id)??null},url:n},willUnload:!e,type:r,complete:i},fulfil:a,reject:o}}export{S as a,Hn as b,Mn as c,On as g,zn as i,Fn as p,Gn as s};