import{x as _,h as a,y as n}from"./runtime.lymXtDcb.js";function d(s,r,t,o){var i=s.__attributes??(s.__attributes={});if(a){i[r]=s.getAttribute(r);return}i[r]!==(i[r]=t)&&(t==null?s.removeAttribute(r):typeof t!="string"&&g(s).includes(r)?s[r]=t:s.setAttribute(r,t))}var f=new Map;function g(s){var r=f.get(s.nodeName);if(r)return r;f.set(s.nodeName,r=[]);for(var t,o=s,i=Element.prototype;i!==o;){t=n(o);for(var p in t)t[p].set&&r.push(p);o=_(o)}return r}export{d as s};
