(this["webpackJsonpreactjs-todolist-website-design-with-done-issue"]=this["webpackJsonpreactjs-todolist-website-design-with-done-issue"]||[]).push([[0],{31:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(15),a=(n(27),n(2)),o=n(16),r=n(6),s=n(34),d=n(1);function l(e){var t=e.todoData,n=e.setTodoData,i=e.setTodo,c=e.setTodoId;return Object(d.jsx)(d.Fragment,{children:null===t||void 0===t?void 0:t.map((function(e,o){return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{style:e.complete?{textDecorationLine:"line-through"}:{textDecorationLine:""},children:e.title}),Object(d.jsx)(s.a,{variant:"success",className:"h-25 mx-2 mb-1",onClick:function(){return function(e,i){var c=t.map((function(t,n){return t.id===e?Object(a.a)(Object(a.a)({},t),{},{complete:!i}):t}));n(c)}(e.id,e.complete)},children:e.complete?"Undone":"Done"}),Object(d.jsx)(s.a,{variant:"info",className:"h-25 mx-2 mb-1",onClick:function(){return function(e){var n=t.find((function(t,n){return t.id===e}));i(n.title),c(n.id)}(e.id)},children:"Update"}),Object(d.jsx)(s.a,{variant:"warning",className:"h-25 mb-1",onClick:function(){return function(e){var i=t.filter((function(t,n){return t.id!==e}));n(i)}(e.id)},children:"Delete"})]},o)}))})}var u=n(33),j=n(32);function b(){var e=Object(i.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],b=Object(i.useState)([]),m=Object(r.a)(b,2),h=m[0],f=m[1],O=Object(i.useState)(""),x=Object(r.a)(O,2),p=x[0],v=x[1],g=Math.floor(100*Math.random(100));return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(u.a,{className:"text-center bg-light",style:{width:"28rem"},children:Object(d.jsxs)(u.a.Body,{children:[Object(d.jsx)(u.a.Title,{children:"Todolist App"}),Object(d.jsxs)(j.a,{onSubmit:function(e){if(e.preventDefault(),""===n)alert("Please add todo");else if(""===p)f((function(e){return[].concat(Object(o.a)(e),[{id:g,title:n,complete:!1}])})),c(""),v("");else{var t=null===h||void 0===h?void 0:h.find((function(e,t){return e.id===p})),i=null===h||void 0===h?void 0:h.map((function(e,i){return e.id===t.id?e={id:t.id,title:n,complete:!1}:Object(a.a)({},e)}));f(i),c(""),v("")}},className:"d-flex justify-content-center gap-1",children:[Object(d.jsx)(j.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:Object(d.jsx)(j.a.Control,{type:"text",value:n,placeholder:"something text",onChange:function(e){return c(e.target.value)}})}),Object(d.jsx)(s.a,{variant:"primary",type:"submit",className:"h-25",children:p?"Update":"Add"})]}),Object(d.jsx)(l,{todoData:h,setTodoData:f,setTodo:c,setTodoId:v})]})})})}function m(){return Object(d.jsx)("div",{className:" px-5 py-3 d-flex justify-content-center",children:Object(d.jsx)(b,{})})}var h=document.getElementById("root");Object(c.createRoot)(h).render(Object(d.jsx)(i.StrictMode,{children:Object(d.jsx)(m,{})}))}},[[31,1,2]]]);
//# sourceMappingURL=main.d1ad1a4b.chunk.js.map