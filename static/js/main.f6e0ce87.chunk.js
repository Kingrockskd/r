(this["webpackJsonpreact-reciepe"]=this["webpackJsonpreact-reciepe"]||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(5),s=c.n(r),i=(c(11),c(4)),o=c.n(i),l=c(6),j=c(2),u=(c(13),c(14),c(0));var d=function(e){var t="card "+e.className;return Object(u.jsx)("div",{className:t,children:e.children})};var b=function(e){var t=e.recipe,c=t.ingredientLines,a=Object(n.useState)(!1),r=Object(j.a)(a,2),s=r[0],i=r[1];return Object(u.jsxs)(d,{children:[Object(u.jsx)("div",{children:Object(u.jsx)("h1",{className:"title",children:t.label})}),Object(u.jsx)("div",{className:"image",children:Object(u.jsx)("img",{src:t.image})}),Object(u.jsx)("button",{onClick:function(){i(!s)},children:s?"Hide":"ingredients"}),s?Object(u.jsx)("div",{children:Object(u.jsx)("ul",{children:c.map((function(e){return Object(u.jsxs)("li",{children:["-)  ",e]},Math.random())}))})}):console.log("ok")]},t.calories)};var h=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)("chocolate"),s=Object(j.a)(r,2),i=s[0],d=s[1],h=Object(n.useState)([]),O=Object(j.a)(h,2),f=O[0],p=O[1];return Object(n.useEffect)(Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.edamam.com/search?q=".concat(i,"&app_id=").concat("3485af7b","&app_key=").concat("4181f78703f7a7f6fb13340282221dd4"));case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,p(c.hits),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),[i]),console.log(f),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"head",children:[Object(u.jsx)("h2",{children:"HEllo KD"}),Object(u.jsxs)("div",{className:"nav",children:[Object(u.jsx)("input",{type:"text",placeholder:"Type your faourite dish...",onChange:function(e){return a(e.target.value)},value:c}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),d(c),a("")},children:"search now!"})]})]}),Object(u.jsx)("div",{className:"bodyl",children:f.map((function(e){return Object(u.jsx)(b,{recipe:e.recipe})}))})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.f6e0ce87.chunk.js.map