import{s as q,n as H,o as O,e as U}from"../chunks/scheduler.MQulC-dI.js";import{S as A,i as R,e as _,t as I,s as w,c as b,a as y,b as T,d as c,f as k,m as B,n as D,g as p,h,j as Y,k as L,l as S,o as P,q as V,r as C,u as E}from"../chunks/index.KfVzBilI.js";import{P as z}from"../chunks/pHeader2.CjZ332va.js";import{P as F}from"../chunks/psidebar.CxLWZF2W.js";function G(v){let t,l=v[0].toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})+"",u,n,i,r=v[1].toLocaleDateString([],{month:"long",day:"numeric",year:"numeric"})+"",o,g,m,x=v[2].toLocaleDateString([],{weekday:"long"})+"",f,a,s,$='<div class="h-[200px] w-[300px] bg-slate-100 rounded-lg shadow-lg"><h1 class="text-[#101010c4] font-semibold text-[100px]">34</h1> <h2 class="text-black font-bold text-[20px] ">Total User</h2></div> <div class="h-[200px] w-[300px] bg-slate-100 rounded-lg shadow-lg"><h1 class="text-[#101010c4] font-semibold text-[100px]">6</h1> <h2 class="text-black font-bold text-[20px] ">Documents</h2></div> <div class="h-[200px] w-[300px] bg-slate-100 rounded-lg shadow-lg"><h1 class="text-[#101010c4] font-semibold text-[100px]">4</h1> <h2 class="text-black font-bold text-[20px] ">Total Registrar</h2></div>';return{c(){t=_("div"),u=I(l),n=w(),i=_("div"),o=I(r),g=w(),m=_("div"),f=I(x),a=w(),s=_("div"),s.innerHTML=$,this.h()},l(e){t=b(e,"DIV",{class:!0});var d=y(t);u=T(d,l),d.forEach(c),n=k(e),i=b(e,"DIV",{class:!0});var M=y(i);o=T(M,r),M.forEach(c),g=k(e),m=b(e,"DIV",{class:!0});var j=y(m);f=T(j,x),j.forEach(c),a=k(e),s=b(e,"DIV",{class:!0,"data-svelte-h":!0}),B(s)!=="svelte-3oflbg"&&(s.innerHTML=$),this.h()},h(){D(t,"class","text-[90px] text-black font-bold text-center"),D(i,"class","text-[30px] text-black font-semibold text-center"),D(m,"class","text-[30px] text-black font-semibold text-center"),D(s,"class","flex gap-10 text-center mx-auto p-5 justify-center pt-10")},m(e,d){p(e,t,d),h(t,u),p(e,n,d),p(e,i,d),h(i,o),p(e,g,d),p(e,m,d),h(m,f),p(e,a,d),p(e,s,d)},p(e,[d]){d&1&&l!==(l=e[0].toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})+"")&&Y(u,l)},i:H,o:H,d(e){e&&(c(t),c(n),c(i),c(g),c(m),c(a),c(s))}}}function J(v,t,l){let u=new Date,n=new Date,i=new Date;const r=()=>{l(0,n=new Date)},o=setInterval(r,1e3);return O(()=>{r()}),U(()=>{clearInterval(o)}),[n,u,i]}class K extends A{constructor(t){super(),R(this,t,J,G,q,{})}}function N(v){let t,l,u,n,i,r,o,g="DASHBOARD",m,x,f;return l=new z({}),n=new F({}),x=new K({}),{c(){t=_("div"),L(l.$$.fragment),u=w(),L(n.$$.fragment),i=w(),r=_("div"),o=_("h1"),o.textContent=g,m=w(),L(x.$$.fragment),this.h()},l(a){t=b(a,"DIV",{class:!0});var s=y(t);S(l.$$.fragment,s),u=k(s),S(n.$$.fragment,s),i=k(s),r=b(s,"DIV",{class:!0});var $=y(r);o=b($,"H1",{class:!0,"data-svelte-h":!0}),B(o)!=="svelte-14xkksl"&&(o.textContent=g),m=k($),S(x.$$.fragment,$),$.forEach(c),s.forEach(c),this.h()},h(){D(o,"class","pl-0 text-[30px] text-black font-bold"),D(r,"class","ml-[300px] p-5 h-[70vh] "),D(t,"class","h-[105vh] w-full bg-slate-300 ")},m(a,s){p(a,t,s),P(l,t,null),h(t,u),P(n,t,null),h(t,i),h(t,r),h(r,o),h(r,m),P(x,r,null),f=!0},p:H,i(a){f||(V(l.$$.fragment,a),V(n.$$.fragment,a),V(x.$$.fragment,a),f=!0)},o(a){C(l.$$.fragment,a),C(n.$$.fragment,a),C(x.$$.fragment,a),f=!1},d(a){a&&c(t),E(l),E(n),E(x)}}}class tt extends A{constructor(t){super(),R(this,t,null,N,q,{})}}export{tt as component};