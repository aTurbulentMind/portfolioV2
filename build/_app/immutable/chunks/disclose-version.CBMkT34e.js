import{ak as f,at as p,au as h,k as u,w as s,ag as c,s as g,T as v,l as E}from"./runtime.N3Dx3tGb.js";function m(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function a(r,t){var e=v;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function y(r,t){var e=(t&p)!==0,_=(t&h)!==0,n,d=!r.startsWith("<!>");return()=>{if(u)return a(s,null),s;n===void 0&&(n=m(d?r:"<!>"+r),e||(n=f(n)));var o=_?document.importNode(n,!0):n.cloneNode(!0);if(e){var l=f(o),i=o.lastChild;a(l,i)}else a(o,o);return o}}function N(r,t,e="svg"){var _=!r.startsWith("<!>"),n=`<${e}>${_?r:"<!>"+r}</${e}>`,d;return()=>{if(u)return a(s,null),s;if(!d){var o=m(n),l=f(o);d=f(l)}var i=d.cloneNode(!0);return a(i,i),i}}function M(r=""){if(!u){var t=c(r+"");return a(t,t),t}var e=s;return e.nodeType!==3&&(e.before(e=c()),g(e)),a(e,e),e}function x(){if(u)return a(s,null),s;var r=document.createDocumentFragment(),t=document.createComment(""),e=c();return r.append(t,e),a(t,e),r}function L(r,t){if(u){v.nodes_end=s,E();return}r!==null&&r.before(t)}const T="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(T);export{L as a,M as b,a as c,x as d,N as n,y as t};
