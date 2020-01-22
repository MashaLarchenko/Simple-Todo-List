(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{15:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext();t.a=r},42:function(e,t,n){e.exports=n(88)},47:function(e,t,n){},48:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),l=(n(47),n(4)),s=n(33),c=n(34),d=n(40),u=n(35),m=n(41),g=(n(48),r.a.Component,function(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",margin:".5rem"}}," ",r.a.createElement("div",{className:"lds-dual-ring"}))}),p=n(15),f={li:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:".5rem 1rem",border:"1px solid #ccc",borderRadius:"4px",marginBottom:".5rem"},input:{marginRight:"1rem"}};var v=function(e){var t=e.todo,n=e.index,o=e.onChange,i=e.draggingEv,l=Object(a.useContext)(p.a).removeToDo,s=["listItem"],c=["todoItem",i];return t.completed&&s.push("done"),r.a.createElement("li",{className:c.join(" ")},r.a.createElement("span",{className:s.join(" "),style:f.input,onChange:function(){return o(t.id)}},r.a.createElement("strong",null,n),"\xa0",t.title),r.a.createElement("button",{className:"rm",onClick:l.bind(null,t.id,t.column)},"\xd7"))},h=n(3),E={ul:{listStyle:"none",margin:0,padding:0}};var b=function(e){return r.a.createElement("ul",{style:E.ul},r.a.createElement("h2",null,e.title),e.todos.map((function(t,n){return r.a.createElement(h.b,{draggableId:t.id.toString(),key:t.id,index:n},(function(a,o){var i="";return o.isDragging&&(i="onDrag"),r.a.createElement("div",Object.assign({ref:a.innerRef},a.draggableProps,a.dragHandleProps,{isDragging:o.isDragging}),r.a.createElement(v,{todo:t,index:n+1,key:t.id,onChange:e.onToggle,style:E.dragItem,draggingEv:i}),a.placeholder)}))})))};function I(e){var t=e.columns,n=e.todos,o=e.onToggle,i=e.loading,s=Object(a.useState)(t),c=Object(l.a)(s,2),d=c[0],u=c[1],m=Object(a.useState)(n),g=Object(l.a)(m,2),p=g[0],f=g[1];return r.a.createElement(h.a,{onDragStart:function(e){document.querySelector(".listItem").style.color="orange"},onDragEnd:function(e){var t=e.destination,n=e.source,a=e.draggableId;if(t&&(t.droppableId!==n.droppableId||t.index!==n.index)){var r=d.filter((function(e){return e.id===n.droppableId})),o=r,i=d.filter((function(e){return e.id===t.droppableId}));if(o[0].id===i[0].id){var l=r[0].tasksIds;l.splice(n.index,1),l.splice(t.index,0,+a),r[0].tasksIds=l;var s=[];d.forEach((function(e){e.id===r[0].id?s.push(r[0]):s.push(e),u(s)}))}else{var c=o[0].tasksIds;c.splice(n.index,1),o[0].tasksIds=c;var m=[];d.forEach((function(e){e.id===o[0].id?m.push(o[0]):m.push(e),u(m)}));var g=i[0].tasksIds;g.splice(t.index,0,+a),i[0].tasksIds=g;var v=[];d.forEach((function(e){e.id===i[0].id?v.push(i[0]):v.push(e),u(v),f(p.map((function(e){return e.id===+a&&(e.column=t.droppableId),e})))}))}document.querySelector(".listItem").style.color="black"}}},r.a.createElement("div",{className:"columnContainer"},d.map((function(e){var t=[],a=["columnItem"];return a.push(e.id),e.tasksIds.map((function(e){return n.forEach((function(n){return n.id===e?t.push(n):null}))})),r.a.createElement(r.a.Fragment,{key:e.id},t.length?r.a.createElement(h.c,{droppableId:e.id},(function(n,i){var l=["listContainer"];return i.isDraggingOver&&l.push("onDragOver"),r.a.createElement("div",Object.assign({ref:n.innerRef},n.droppableProps,{isDraggingOver:i.isDraggingOver,className:l.join(" ")}),r.a.createElement(b,{todos:t,onToggle:o,title:e.title,tasks:e.tasks,className:a.join(" "),draggingEvOver:l}),n.placeholder)})):i?null:r.a.createElement(h.c,{droppableId:e.id},(function(t,n){var a=["listContainer"];return n.isDraggingOver&&a.push("onDragOver"),r.a.createElement("div",Object.assign({ref:t.innerRef},t.droppableProps,{isDraggingOver:n.isDraggingOver,className:a.join(" ")}),r.a.createElement("h2",null,e.title),r.a.createElement("p",null,"No todos"),t.placeholder)})))}))))}var k=r.a.lazy((function(){return n.e(3).then(n.bind(null,89))}));var D=function(){var e=r.a.useState([{id:1,completed:!1,title:"Buy milk",column:"toDo"},{id:2,completed:!1,title:"Buy coffee",column:"toDo"}]),t=Object(l.a)(e,2),n=t[0],a=t[1],o=r.a.useState(!1),i=Object(l.a)(o,2),s=i[0],c=(i[1],r.a.useState([{id:"toDo",title:"To Do",tasksIds:[1,2],columnOrder:1},{id:"inProgress",title:"In Progress",tasksIds:[],columnOrder:2},{id:"doneTodo",title:"Done",tasksIds:[],columnOrder:3}])),d=Object(l.a)(c,2),u=d[0],m=d[1];return r.a.createElement(p.a.Provider,{value:{removeToDo:function(e,t){a(n.filter((function(t){return t.id!==e}))),u.map((function(n){var a=n.tasksIds.indexOf(e);return n.id===t&&n.tasksIds.splice(a,1),n})),m(u)}}},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"To Do List")),s&&r.a.createElement(g,null),r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("p",null,"Loading...")},r.a.createElement(k,{onCreate:function(e){a(n.concat([{title:e,id:n.length+1,completed:!1,column:"toDo"}])),u.forEach((function(e){"toDo"===e.id&&e.tasksIds.push(n.length+1)})),function(){if(n.length&&!n.includes(n[n.length-1].id)){var e=n[n.length-1].column,t=n[n.length-1].id;u.forEach((function(n){n.id!==e||n.tasksIds.includes(t)||n.tasksIds.push(t)}))}m(u)}()}})),r.a.createElement(I,{columns:u,onToggle:function(e){a(n.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))},loading:s,todos:n,setTodos:a,setColumns:m})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.8ade4192.chunk.js.map