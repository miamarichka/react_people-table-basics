(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(11),a=n(5),s=(n(21),n(22),n(23),n(2)),r=n(6),j=n.n(r),i=n(0),l=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.c,{className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(i.jsx)(a.c,{className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},to:"people",children:"People"})]})})})},b=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},o=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},h=n(8),d=n(12),u=n(4),x=n(1),O=(n(25),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})}),m="https://mate-academy.github.io/react_people-table/api/people.json";function p(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch(m)})).then((function(e){return e.json()}));var e}var f=function(e){var t=e.name,n=e.slug,c=e.sex;return Object(i.jsx)(a.b,{to:"../".concat(n),className:j()({"has-text-danger":"f"===c}),children:t})},g=function(e){var t=e.person,n=e.slug,c=t.name,a=t.sex,s=t.born,r=t.died,l=t.fatherName,b=t.motherName,o=t.mother,h=t.father,d=t.slug,u=b||"-",x=l||"-";return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":d===n}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(f,{name:c,slug:d,sex:a})}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:o?Object(i.jsx)(f,{name:o.name,sex:o.sex,slug:o.slug}):u}),Object(i.jsx)("td",{children:h?Object(i.jsx)(f,{name:h.name,sex:h.sex,slug:h.slug}):x})]})},v=function(e){var t=e.people,n=e.slug;return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)(g,{person:e,slug:n},e.slug)}))})]})},N=n(9),y=function(e){return e.map((function(t){var n=e.find((function(e){return e.name===t.motherName})),c=e.find((function(e){return e.name===t.fatherName}));return Object(N.a)(Object(N.a)({},t),{},{mother:n,father:c})}))},w=function(){var e=Object(x.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(x.useState)(!1),r=Object(u.a)(a,2),j=r[0],l=r[1],b=Object(x.useState)(!1),o=Object(u.a)(b,2),m=o[0],f=o[1],g=Object(s.h)().slug,N=void 0===g?"":g,w=function(){var e=Object(d.a)(Object(h.a)().mark((function e(){var t;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f(!1),l(!0),e.next=5,p();case 5:(t=e.sent)&&c(y(t)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),f(!0);case 12:return e.prev=12,l(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return Object(x.useEffect)((function(){w()}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[n.length>0&&Object(i.jsx)(v,{people:n,slug:N}),j&&Object(i.jsx)(O,{}),m&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!n.length&&!m&&!j&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})]})})]})},k=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(l,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(s.d,{children:[Object(i.jsx)(s.b,{path:"/",element:Object(i.jsx)(b,{})}),Object(i.jsx)(s.b,{path:"home",element:Object(i.jsx)(s.a,{to:"/",replace:!0})}),Object(i.jsxs)(s.b,{path:"/people",children:[Object(i.jsx)(s.b,{index:!0,element:Object(i.jsx)(w,{})}),Object(i.jsx)(s.b,{path:":slug",element:Object(i.jsx)(w,{})})]}),Object(i.jsx)(s.b,{path:"*",element:Object(i.jsx)(o,{})})]})})})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(i.jsx)(a.a,{children:Object(i.jsx)(k,{})}))}},[[26,1,2]]]);
//# sourceMappingURL=main.31d46f7b.chunk.js.map