(this.webpackJsonpintroduction=this.webpackJsonpintroduction||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(4),r=n.n(a),s=n(6),l=n(2);var u=n(0),i=c.a.createContext();function d(e){var t=function(e,t){var n=c.a.useState(!1),o=Object(l.a)(n,2),a=o[0],r=o[1],s=c.a.useState(!0),u=Object(l.a)(s,2),i=u[0],d=u[1],j=c.a.useState(t),O=Object(l.a)(j,2),b=O[0],m=O[1];return c.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),m(n),d(!1)}catch(a){r(a)}}),1e3)})),{item:b,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),m(t)}catch(a){r(a)}},loading:i,error:a}}("TODOS_V1",[]),n=t.item,o=t.saveItem,a=t.loading,r=t.error,d=c.a.useState(""),j=Object(l.a)(d,2),O=j[0],b=j[1],m=c.a.useState(!1),x=Object(l.a)(m,2),p=x[0],f=x[1],h=n.filter((function(e){return!!e.completed})).length,T=n.length,v=[];v=!O.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=O.toLowerCase();return t.includes(n)}));return Object(u.jsx)(i.Provider,{value:{loading:a,error:r,totalTodos:T,completedTodos:h,searchValue:O,setSearchValue:b,searchedTodos:v,addTodo:function(e){var t=Object(s.a)(n);t.push({completed:!1,text:e}),o(t)},completeTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c[t].completed=!0,o(c)},deleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c.splice(t,1),o(c)},openModal:p,setOpenModal:f},children:e.children})}n(13);function j(){var e=c.a.useContext(i),t=e.totalTodos,n=e.completedTodos;return Object(u.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",n," de ",t," TODOs"]})}n(14);function O(){var e=c.a.useContext(i),t=e.searchValue,n=e.setSearchValue;return Object(u.jsx)("input",{className:"TodoSearch",placeholder:"Cebolla",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)}})}function b(e){return Object(u.jsx)("section",{children:Object(u.jsx)("ul",{children:e.children})})}n(15);function m(e){var t=e.onComplete,n=e.onDelete;return Object(u.jsxs)("li",{className:"TodoItem",children:[Object(u.jsx)("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:t,children:"\u221a"}),Object(u.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(u.jsx)("span",{className:"Icon Icon-delete",onClick:n,children:"X"})]})}n(16);function x(){var e=c.a.useState(""),t=Object(l.a)(e,2),n=t[0],o=t[1],a=c.a.useContext(i),r=a.addTodo,s=a.setOpenModal;return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(n),s(!1)},children:[Object(u.jsx)("label",{children:"Escribe tu nuevo TODO"}),Object(u.jsx)("textarea",{value:n,onChange:function(e){o(e.target.value)},placeholder:"Cortar la cebolla oara el almuerzo"}),Object(u.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(u.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button--cancel",onClick:function(){s(!1)},children:"Cancelar"}),Object(u.jsx)("button",{type:"submit",className:"TodoForm-button TodoForm-button--add",children:"A\xf1adir"})]})]})}n(17);function p(){var e=Object(o.useContext)(i),t=e.openModal,n=e.setOpenModal;return Object(u.jsx)("button",{className:"CreateTodoButton",type:"submit",onClick:function(){return n(!t)},children:"+"})}function f(e){e.error;return Object(u.jsx)("p",{children:" Desesp\xe9rate, hubo un error..."})}n(18);function h(){return Object(u.jsxs)("div",{className:"LoadingTodo-container",children:[Object(u.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(u.jsx)("p",{className:"LoadingTodo-text",children:"Cargando TODOs..."}),Object(u.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})}function T(){return Object(u.jsx)("p",{children:"\xa1Crea tu primer TODO!"})}n(19);function v(e){var t=e.children;return r.a.createPortal(Object(u.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}function g(){var e=c.a.useContext(i),t=e.error,n=e.loading,o=e.searchedTodos,a=e.completeTodo,r=e.deleteTodo,s=e.openModal,l=e.setOpenModal;return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(j,{}),Object(u.jsx)(O,{}),Object(u.jsxs)(b,{children:[t&&Object(u.jsx)(f,{error:t}),n&&new Array(JSON.parse(localStorage.getItem("TODOS_V1")).length).fill(1).map((function(e){return Object(u.jsx)(h,{},e)})),!n&&!o.length&&Object(u.jsx)(T,{}),o.map((function(e){return Object(u.jsx)(m,{text:e.text,completed:e.completed,onComplete:function(){return a(e.text)},onDelete:function(){return r(e.text)}},e.text)}))]}),!!s&&Object(u.jsx)(v,{children:Object(u.jsx)(x,{})}),Object(u.jsx)(p,{setOpenModal:l})]})}var C=function(){return Object(u.jsx)(d,{children:Object(u.jsx)(g,{})})};n(20);r.a.render(Object(u.jsx)(C,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.7a3e02aa.chunk.js.map