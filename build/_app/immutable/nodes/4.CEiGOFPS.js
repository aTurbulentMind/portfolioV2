import{h as oe,g as De,o as ka,e as Aa,H as Sa,r as ea,i as Re,j as Ee,u as Na,E as Ne,C as Ve,D as Oe,x as Ca,F as da,G as Ta,I as Ma,k as s,a as T,s as e,l,t as U,f as aa}from"../chunks/disclose-version.BcNZmKmL.js";import{v as Ia,o as Ua,w as ua,x as ca,y as $a,V as Fa,q as La,G as ta,c as k,m as M,Q as ra,W as Da,X as Ra,Y as Ha,M as Oa,N as Va,S as Ba,r as fa,z as _a,Z as pa,l as ga,_ as ma,A as I,b as t,B as ha,$ as Ya,a0 as Z,d as la}from"../chunks/runtime.DIXZcq7d.js";import{s as R}from"../chunks/render.Cq8HF8lA.js";import{i as B}from"../chunks/if.BB4Ok1M5.js";import{a as sa,e as na}from"../chunks/forms.DRC5-0Ca.js";import{b as za,s as ke,r as V,a as ie}from"../chunks/attributes.CuqHSJQM.js";import{e as Se}from"../chunks/events.MlvPg7ul.js";import{b as Ga}from"../chunks/this.mxauN-f7.js";import{i as ba}from"../chunks/lifecycle.q-3CEU7i.js";import{p as ge}from"../chunks/props.Cf0e27pd.js";import{c as qa}from"../chunks/index-client.CmHEKYhW.js";let He=null;function oa(o,a){return a}function Pa(o,a,r,i){for(var _=[],h=a.length,u=0;u<h;u++)Da(a[u].e,_,!0);var b=h>0&&_.length===0&&r!==null;if(b){var S=r.parentNode;Ca(S),S.append(r),i.clear(),ae(o,a[0].prev,a[h-1].next)}Ra(_,()=>{for(var N=0;N<h;N++){var w=a[N];b||(i.delete(w.k),ae(o,w.prev,w.next)),Ha(w.e,!b)}})}function ia(o,a,r,i,_,h=null){var u=o,b={flags:a,items:new Map,first:null},S=(a&da)!==0;if(S){var N=o;u=oe?De(N.firstChild):N.appendChild(ka())}oe&&Aa();var w=null;Ia(()=>{var f=r(),A=Ua(f)?f:f==null?[]:Array.from(f),p=A.length,g=b.flags;g&Oe&&!Oa(A)&&!(Va in A)&&!(Ba in A)&&(g^=Oe,g&Ma&&!(g&Ne)&&(g^=Ne));let v=!1;if(oe){var m=u.data===Sa;m!==(p===0)&&(u=ea(),De(u),Re(!1),v=!0)}if(oe){for(var d=null,y,n=0;n<p;n++){if(Ee.nodeType===8&&Ee.data===Na){u=Ee,v=!0,Re(!1);break}var c=A[n],Y=i(c,n);y=wa(Ee,b,d,null,c,Y,n,_,g),b.items.set(Y,y),d=y}p>0&&De(ea())}oe||Qa(A,b,u,_,g,i),h!==null&&(p===0?w?ua(w):w=ca(()=>h(u)):w!==null&&$a(w,()=>{w=null})),v&&Re(!0)}),oe&&(u=Ee)}function Qa(o,a,r,i,_,h){var ue,me,he,ce;var u=(_&Ta)!==0,b=(_&(Ne|Ve))!==0,S=o.length,N=a.items,w=a.first,f=w,A=new Set,p=null,g=new Set,v=[],m=[],d,y,n,c;if(u)for(c=0;c<S;c+=1)d=o[c],y=h(d,c),n=N.get(y),n!==void 0&&((ue=n.a)==null||ue.measure(),g.add(n));for(c=0;c<S;c+=1){if(d=o[c],y=h(d,c),n=N.get(y),n===void 0){var Y=f?f.e.nodes.start:r;p=wa(Y,a,p,p===null?a.first:p.next,d,y,c,i,_),N.set(y,p),v=[],m=[],f=p.next;continue}if(b&&Xa(n,d,c,_),n.e.f&Fa&&(ua(n.e),u&&((me=n.a)==null||me.unfix(),g.delete(n))),n!==f){if(A.has(n)){if(v.length<m.length){var ve=m[0],z;p=ve.prev;var Ce=v[0],de=v[v.length-1];for(z=0;z<v.length;z+=1)va(v[z],ve,r);for(z=0;z<m.length;z+=1)A.delete(m[z]);ae(a,Ce.prev,de.next),ae(a,p,Ce),ae(a,de,ve),f=ve,p=de,c-=1,v=[],m=[]}else A.delete(n),va(n,f,r),ae(a,n.prev,n.next),ae(a,n,p===null?a.first:p.next),ae(a,p,n),p=n;continue}for(v=[],m=[];f!==null&&f.k!==y;)A.add(f),m.push(f),f=f.next;if(f===null)continue;n=f}v.push(n),p=n,f=n.next}const P=Array.from(A);for(;f!==null;)P.push(f),f=f.next;var te=P.length;if(te>0){var Te=_&da&&S===0?r:null;if(u){for(c=0;c<te;c+=1)(he=P[c].a)==null||he.measure();for(c=0;c<te;c+=1)(ce=P[c].a)==null||ce.fix()}Pa(a,P,Te,N)}u&&La(()=>{var be;for(n of g)(be=n.a)==null||be.apply()}),ta.first=a.first&&a.first.e,ta.last=p&&p.e}function Xa(o,a,r,i){i&Ne&&k(o.v,a),i&Ve?k(o.i,r):o.i=r}function wa(o,a,r,i,_,h,u,b,S){var N=He;try{var w=(S&Ne)!==0,f=(S&Oe)===0,A=w?f?M(_):ra(_):_,p=S&Ve?ra(u):u,g={i:p,v:A,k:h,a:null,e:null,prev:r,next:i};return He=g,g.e=ca(()=>b(o,A,p),oe),g.e.prev=r&&r.e,g.e.next=i&&i.e,r===null?a.first=g:(r.next=g,r.e.next=g.e),i!==null&&(i.prev=g,i.e.prev=g.e),g}finally{He=N}}function va(o,a,r){for(var i=o.next?o.next.e.nodes.start:r,_=a?a.e.nodes.start:r,h=o.e.nodes.start;h!==i;){var u=h.nextSibling;_.before(h),h=u}}function ae(o,a,r){a===null?o.first=r:(a.next=r,a.e.next=r&&r.e),r!==null&&(r.prev=a,r.e.prev=a&&a.e)}function ya(o,a,r,i=r){o.addEventListener(a,r);const _=o.__on_r;_?o.__on_r=()=>{_(),i()}:o.__on_r=i,za()}function Ae(o,a,r){ya(o,"change",()=>{var i=o.checked;r(i)}),a()==null&&r(!1),fa(()=>{var i=a();o.checked=!!i})}function Za(o,a,r){ya(o,"change",()=>{r(o.files)}),fa(()=>{o.files=a()})}var Ka=U('<img class="avatar image">'),Wa=U('<div class="avatar no-image"></div>'),Ja=U('<div class="uppPoto svelte-u2ve22"><label class="button primary block" for="single"> </label> <input style="visibility: hidden; position:absolute;" type="file" id="single" accept="image/*"></div>'),ja=U('<div><!> <input type="hidden" name="avatarUrl"> <!></div>');function et(o,a){_a(a,!1);let r=ge(a,"size",0,10),i=ge(a,"url",4),_=ge(a,"supabase"),h=M(null),u=M(!1),b=M();const S=qa(),N=async m=>{try{const{data:d,error:y}=await _().storage.from("avatars").download(m);if(y)throw y;const n=URL.createObjectURL(d);k(h,n)}catch(d){d instanceof Error&&console.log("Error downloading image: ",d.message)}},w=async()=>{try{if(k(u,!0),!t(b)||t(b).length===0)throw new Error("You must select an image to upload.");const m=t(b)[0],d=m.name.split(".").pop(),y=`${Math.random()}.${d}`,{error:n}=await _().storage.from("avatars").upload(y,m);if(n)throw n;i(y),setTimeout(()=>{S("upload")},100)}catch(m){m instanceof Error&&alert(m.message)}finally{k(u,!1)}};let f=ge(a,"showUploadButton",0,!0);pa(()=>ga(i()),()=>{i()&&N(i())}),ma(),ba();var A=ja(),p=s(A);B(p,()=>t(h),m=>{var d=Ka();I(()=>{ke(d,"src",t(h)),ke(d,"alt",t(h)?"Avatar":"No image"),ke(d,"style",`height: ${r()??""}em; width: ${r()??""}em;`)}),T(m,d)},m=>{var d=Wa();I(()=>ke(d,"style",`height: ${r()??""}em; width: ${r()??""}em;`)),T(m,d)});var g=e(e(p,!0));V(g);var v=e(e(g,!0));B(v,f,m=>{var d=Ja(),y=s(d),n=s(y);l(y);var c=e(e(y,!0));l(d),I(()=>{ke(d,"style",`width: ${r()??""}em;`),R(n,t(u)?"Uploading ...":"Upload"),c.disabled=t(u)}),Za(c,()=>t(b),Y=>k(b,Y)),Se("change",c,w,!1),T(m,d)}),l(A),I(()=>ie(g,i())),T(o,A),ha()}var at=U('<form class="classicForm svelte-1l6g39a" method="post" action="?/update"><!> <label for="email">Email <input id="email" type="text" disabled></label> <label for="fullName">Full Name <input id="fullName" name="fullName" type="text"></label> <label for="username">Username <input id="username" name="username" type="text"></label> <label for="contact">Contact <input id="contact" name="contact" type="text"></label> <div class="window-content"><button class="button-Ghost" type="submit">Update</button></div></form>'),tt=U('<tr class="svelte-1l6g39a"><td class="svelte-1l6g39a"> </td><td class="svelte-1l6g39a"> </td><td class="svelte-1l6g39a"> </td><td class="svelte-1l6g39a"> </td><td class="svelte-1l6g39a"><button class="ripple-btn">View</button></td></tr>'),rt=U('<div class="mobile-cards svelte-1l6g39a"><div class="card"><div><strong>Full Name:</strong> </div> <div><strong>Email:</strong> </div> <div><strong>Submitted At:</strong> <br> </div> <button class="ripple-btn">View</button></div></div>'),lt=U('<div class="svelte-1l6g39a"><strong class="svelte-1l6g39a">Full Name:</strong> </div>'),st=U('<div class="svelte-1l6g39a"><strong class="svelte-1l6g39a">Contact:</strong> </div>'),nt=U('<div class="svelte-1l6g39a"><strong class="svelte-1l6g39a">Message:</strong> </div>'),ot=U('<div class="svelte-1l6g39a"><strong class="svelte-1l6g39a">Viewed:</strong> </div>'),it=U('<div class="svelte-1l6g39a"><strong class="svelte-1l6g39a">Submitted At:</strong> </div>'),vt=U('<div class="detail-grid svelte-1l6g39a"><!> <!> <!> <!> <!> <div class="svelte-1l6g39a"><form action="?/updateMessageViewed" method="post" class="svelte-1l6g39a"><label class="svelte-1l6g39a">Has been viewed: <input type="checkbox" name="viewed" class="svelte-1l6g39a"></label> <input type="hidden" name="messageId" class="svelte-1l6g39a"> <button class="button-Ghost svelte-1l6g39a" type="submit">Update</button></form></div> <button class="ripple-btn svelte-1l6g39a">Close Message</button></div>'),dt=U('<div class="filter-options svelte-1l6g39a"><label>Show Viewed Messages <input type="checkbox"></label></div> <div class="summary svelte-1l6g39a"><table class="desktop-table svelte-1l6g39a"><thead><tr class="svelte-1l6g39a"><th class="svelte-1l6g39a">Full Name</th><th class="svelte-1l6g39a">Contact</th><th class="svelte-1l6g39a">Submit on</th><th class="svelte-1l6g39a">Viewed</th><th class="svelte-1l6g39a">Look</th></tr></thead><tbody></tbody></table> <!></div> <!>',1),ut=U(`<section class="dinner-hunt svelte-1l6g39a"><p class="svelte-1l6g39a">Let's find out what we are eating today!</p> <button class="ripple-btn svelte-1l6g39a">🦖</button></section>`),ct=U('<header class="head_Line"><h1>Account</h1></header> <div class="whatsUp svelte-1l6g39a"><ul><li><label for="accoutCheckbox">Account <input type="checkbox" id="viewedCheckbox"></label></li> <li><label for="messageBox">Message Box <input type="checkbox"></label></li> <li><label for="foodFinder">Food link <input type="checkbox"></label></li></ul></div> <!> <!> <!> <form method="post" action="?/signout"><div><button class="button-Skew svelte-1l6g39a">Sign Out</button></div></form>',1);function kt(o,a){var Ze,Ke,We,Je;_a(a,!1);let r=ge(a,"data"),i=ge(a,"form"),_=r(),h=M(_.session),u=M(_.supabase),b=M(_.profile),S=M(_.newMessage),N=M(),w=M(!1),f=((Ze=t(b))==null?void 0:Ze.full_name)??"",A=((Ke=t(b))==null?void 0:Ke.username)??"",p=((We=t(b))==null?void 0:We.contact)??"",g=M(((Je=t(b))==null?void 0:Je.avatar_url)??""),v=M(null),m=M(!1),d=M(!1),y=M(!1),n=M(!1);const c=x=>{k(v,x)};function Y(x){const C=new Date(x);return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit"}).format(C)}const ve=()=>(k(w,!0),async()=>{k(w,!1)}),z=()=>(k(w,!0),async({update:x})=>{k(w,!1),x()}),Ce=()=>{window.location.href="https://table-tango.netlify.app/"};pa(()=>(t(h),t(u),t(b),t(S),ga(r())),()=>{(()=>{const x=r();return k(h,x.session),k(u,x.supabase),k(b,x.profile),k(S,x.newMessage),x})()}),ma(),ba();var de=ct(),P=aa(de);s(P),l(P);var te=e(e(P,!0)),Te=s(te),ue=s(Te),me=s(ue),he=e(s(me));V(he),l(me),l(ue);var ce=e(e(ue,!0)),be=s(ce),Be=e(s(be));V(Be),l(be),l(ce);var Ye=e(e(ce,!0)),ze=s(Ye),Ge=e(s(ze));V(Ge),l(ze),l(Ye),l(Te),l(te);var qe=e(e(te,!0));B(qe,()=>t(y),x=>{var C=at();Ga(C,H=>k(N,H),()=>t(N));var K=s(C);et(K,{get supabase(){return t(u)},get url(){return t(g)},set url(H){k(g,H)},size:10,$$events:{upload:()=>{t(N).requestSubmit()}},$$legacy:!0});var W=e(e(K,!0)),we=e(s(W));V(we),l(W);var re=e(e(W,!0)),fe=e(s(re));V(fe),l(re);var le=e(e(re,!0)),ye=e(s(le));V(ye),l(le);var xe=e(e(le,!0)),Me=e(s(xe));V(Me),l(xe);var Ie=e(e(xe,!0)),Ue=s(Ie);l(Ie),l(C),I(()=>{var H,_e,$e;ie(we,t(h).user.email),ie(fe,((H=i())==null?void 0:H.fullName)??f),ie(ye,((_e=i())==null?void 0:_e.username)??A),ie(Me,(($e=i())==null?void 0:$e.contact)??p),ie(Ue,t(w)?"Loading...":"Update"),Ue.disabled=t(w)}),sa(C,(H,_e)=>na(H,_e),()=>ve),T(x,C)});var Pe=e(e(qe,!0));B(Pe,()=>t(m),x=>{var C=dt(),K=aa(C),W=s(K),we=e(s(W));V(we),l(W),l(K);var re=e(e(K,!0)),fe=s(re),le=s(fe),ye=s(le),xe=s(ye),Me=e(xe),Ie=e(Me),Ue=e(Ie);e(Ue),l(ye),l(le);var H=e(le);ia(H,9,()=>t(S).filter(O=>O.viewed===t(d)),oa,(O,F,Fe)=>{var G=tt(),Q=s(G),J=s(Q);l(Q);var j=e(Q),se=s(j);l(j);var q=e(j),ne=s(q);I(()=>R(ne,Y(Z(F).submitted_at))),l(q);var ee=e(q),X=s(ee);l(ee);var pe=e(ee),$=s(pe),E=la(()=>()=>c(Z(F)));l(pe),l(G),I(()=>{R(J,Z(F).full_name),R(se,Z(F).contact_point),R(X,Z(F).viewed?"Yes":"No")}),Se("click",$,function(...D){var L;return(L=t(E))==null?void 0:L.apply(this,D)},!1),T(O,G)}),l(H),l(fe);var _e=e(e(fe,!0));ia(_e,1,()=>t(S).filter(O=>O.viewed===t(d)),oa,(O,F,Fe)=>{var G=rt(),Q=s(G),J=s(Q),j=s(J),se=e(j,!0);l(J);var q=e(e(J,!0)),ne=s(q),ee=e(ne,!0);l(q);var X=e(e(q,!0)),pe=s(X),$=e(e(pe,!0)),E=e($,!0);I(()=>R(E,` ${Y(Z(F).submitted_at)??""}`)),l(X);var D=e(e(X,!0)),L=la(()=>()=>c(Z(F)));l(Q),l(G),I(()=>{R(se,` ${Z(F).full_name??""}`),R(ee,` ${Z(F).email??""}`)}),Se("click",D,function(...Ea){var je;return(je=t(L))==null?void 0:je.apply(this,Ea)},!1),T(O,G)}),l(re);var $e=e(e(re,!0));B($e,()=>t(v),O=>{var F=vt(),Fe=s(F);B(Fe,()=>t(v).full_name,$=>{var E=lt(),D=s(E),L=e(D,!0);l(E),I(()=>R(L,` ${t(v).full_name??""}`)),T($,E)});var G=e(e(Fe,!0));B(G,()=>t(v).contact_point,$=>{var E=st(),D=s(E),L=e(D,!0);l(E),I(()=>R(L,` ${t(v).contact_point??""}`)),T($,E)});var Q=e(e(G,!0));B(Q,()=>t(v).message,$=>{var E=nt(),D=s(E),L=e(D,!0);l(E),I(()=>R(L,` ${t(v).message??""}`)),T($,E)});var J=e(e(Q,!0));B(J,()=>t(v).viewed,$=>{var E=ot(),D=s(E),L=e(D,!0);l(E),I(()=>R(L,` ${(t(v).viewed?"Yes":"No")??""}`)),T($,E)});var j=e(e(J,!0));B(j,()=>t(v).submitted_at,$=>{var E=it(),D=s(E),L=e(D,!0);I(()=>R(L,` ${Y(t(v).submitted_at)??""}`)),l(E),T($,E)});var se=e(e(j,!0)),q=s(se),ne=s(q),ee=e(s(ne));V(ee),l(ne);var X=e(e(ne,!0));V(X),e(e(X,!0)),l(q),l(se);var pe=e(e(se,!0));l(F),I(()=>ie(X,t(v).id)),Ae(ee,()=>t(v).viewed,$=>Ya(v,t(v).viewed=$)),Se("click",pe,()=>k(v,null),!1),T(O,F)}),Ae(we,()=>t(d),O=>k(d,O)),T(x,C)});var Qe=e(e(Pe,!0));B(Qe,()=>t(n),x=>{var C=ut(),K=s(C),W=e(e(K,!0));l(C),Se("click",W,Ce,!1),T(x,C)});var Le=e(e(Qe,!0)),Xe=s(Le),xa=s(Xe);l(Xe),l(Le),I(()=>xa.disabled=t(w)),Ae(he,()=>t(y),x=>k(y,x)),Ae(Be,()=>t(m),x=>k(m,x)),Ae(Ge,()=>t(n),x=>k(n,x)),sa(Le,(x,C)=>na(x,C),()=>z),T(o,de),ha()}export{kt as component};
