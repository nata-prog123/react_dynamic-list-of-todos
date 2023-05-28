(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var s=c(9),a=c.n(s),n=c(5),l=c(2),r=c(10),i=c(3),o=c.n(i),d=c(1),j=(c(16),c(17),c(8)),u=c.n(j),b=c(0),h=function(e){var t=e.todos,c=e.showTodo,s=e.selectedTodo,a=function(e){return(null===s||void 0===s?void 0:s.id)===e};return Object(b.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsxs)("tr",{"data-cy":"todo",className:u()({"has-background-info-light":a(e.id)}),children:[Object(b.jsx)("td",{className:"is-vcentered",children:e.id}),Object(b.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(b.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("td",{className:"is-vcentered is-expanded",children:Object(b.jsx)("p",{className:u()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:a(e.id)?Object(b.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"far fa-eye-slash"})})}):Object(b.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})},O=function(e){var t=e.query,c=e.setQuery,s=e.filterBy,a=e.setFilterBy;return Object(b.jsxs)("form",{className:"field has-addons",children:[Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("span",{className:"select",children:Object(b.jsxs)("select",{"data-cy":"statusSelect",value:s,onChange:function(e){a(e.target.value)},children:[Object(b.jsx)("option",{value:"all",children:"All"}),Object(b.jsx)("option",{value:"active",children:"Active"}),Object(b.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(b.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){c(e.target.value)}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(b.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(b.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},m=(c(19),function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})});function x(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var f,v=function(e){var t=e.selectedTodo,c=e.closeTodo,s=Object(d.useState)(null),a=Object(l.a)(s,2),r=a[0],i=a[1],j=Object(d.useState)(!1),u=Object(l.a)(j,2),h=u[0],O=u[1],f=function(){var e=Object(n.a)(o.a.mark((function e(){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s=(null===t||void 0===t?void 0:t.userId)||0,x("/users/".concat(s));case 3:c=e.sent,i(c),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),O(!0);case 10:case"end":return e.stop()}var s}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){f()}),[]),Object(b.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(b.jsx)("div",{className:"modal-background"}),r?Object(b.jsxs)("div",{className:"modal-card",children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(b.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(b.jsxs)("div",{className:"modal-card-body",children:[Object(b.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),h&&Object(b.jsx)("h2",{style:{color:"red"},children:"An error occured while user loading"}),Object(b.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(b.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(b.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(b.jsx)("a",{href:"mailto:".concat(r.email),children:r.name})]})]})]}):Object(b.jsx)(m,{})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(f||(f={}));var p=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(d.useState)(null),i=Object(l.a)(a,2),j=i[0],u=i[1],p=Object(d.useState)(""),N=Object(l.a)(p,2),y=N[0],g=N[1],k=Object(d.useState)(f.ALL),w=Object(l.a)(k,2),T=w[0],C=w[1],L=Object(d.useState)(!0),E=Object(l.a)(L,2),S=E[0],A=E[1],B=Object(d.useState)(!1),I=Object(l.a)(B,2),_=I[0],P=I[1],D=function(){var e=Object(n.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("/todos");case 3:t=e.sent,s(t),A(!1),P(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),P(!0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();Object(d.useEffect)((function(){D()}),[]);var F=function(e,t,c){var s=Object(r.a)(e);if(t){var a=t.toLowerCase().trim();s=s.filter((function(e){return e.title.toLowerCase().includes(a)}))}switch(c){case f.ACTIVE:s=s.filter((function(e){return!e.completed}));break;case f.COMPLETED:s=s.filter((function(e){return e.completed}));case f.ALL:}return s}(c,y,T),q=Object(d.useCallback)((function(){u(null)}),[]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h1",{className:"title",children:"Todos:"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(O,{query:y,setQuery:g,filterBy:T,setFilterBy:C})}),Object(b.jsxs)("div",{className:"block",children:[S&&Object(b.jsx)(m,{}),_?Object(b.jsx)("p",{children:"Error, server is unavailable"}):Object(b.jsx)(h,{todos:F,showTodo:u,selectedTodo:j})]})]})})}),j&&Object(b.jsx)(v,{closeTodo:q,selectedTodo:j})]})};a.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.1284f90d.chunk.js.map