import{x as t,k as c,y as e,z as v,L as u}from"./runtime.BIfulsMb.js";import{a as h}from"./misc.B9QI8j-U.js";function y(r){if(c){var s=!1,a=()=>{if(!s){if(s=!0,r.hasAttribute("value")){var o=r.value;i(r,"value",null),r.value=o}if(r.hasAttribute("checked")){var _=r.checked;i(r,"checked",null),r.checked=_}}};r.__on_r=a,v(a),h()}}function A(r,s){var a=r.__attributes??(r.__attributes={});a.value===(a.value=s??void 0)||r.value===s&&(s!==0||r.nodeName!=="PROGRESS")||(r.value=s)}function i(r,s,a,o){var _=r.__attributes??(r.__attributes={});c&&(_[s]=r.getAttribute(s),s==="src"||s==="srcset"||s==="href"&&r.nodeName==="LINK")||_[s]!==(_[s]=a)&&(s==="style"&&"__styles"in r&&(r.__styles={}),s==="loading"&&(r[u]=a),a==null?r.removeAttribute(s):typeof a!="string"&&g(r).includes(s)?r[s]=a:r.setAttribute(s,a))}var d=new Map;function g(r){var s=d.get(r.nodeName);if(s)return s;d.set(r.nodeName,s=[]);for(var a,o=r,_=Element.prototype;_!==o;){a=e(o);for(var f in a)a[f].set&&s.push(f);o=t(o)}return s}export{A as a,y as r,i as s};
