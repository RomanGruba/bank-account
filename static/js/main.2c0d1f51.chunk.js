(window.webpackJsonphomework3=window.webpackJsonphomework3||[]).push([[0],{16:function(t,a,e){t.exports={balance:"Balance_balance__16211"}},2:function(t,a,e){t.exports={history:"Dashboard_history__3JJZa",column:"Dashboard_column__19_fj",row:"Dashboard_row__1pM3o"}},21:function(t,a,e){t.exports=e(39)},39:function(t,a,e){"use strict";e.r(a);var n=e(1),r=e.n(n),o=e(3),c=e.n(o),s=e(12),l=e(8),i=e(13),u=e(14),m=e(19),d=e(15),b=e(20),p=e(7),h=e.n(p),f=e(9),w={deposit:"Deposit",withdraw:"Withdraw"},y=e(4),g=e.n(y),E=function(t){var a=t.transaction,e=t.addTransaction,n=t.handleSubmitTransaction;return r.a.createElement("section",{className:g.a.controls},r.a.createElement("input",{className:g.a.input,type:"number",name:"transaction",value:a,onChange:e}),r.a.createElement("button",{className:g.a.controlBtn,type:"button",onClick:n,name:w.deposit},"Deposit"),r.a.createElement("button",{className:g.a.controlBtn,type:"button",onClick:n,name:w.withdraw},"Withdraw"))},O=e(16),_=e.n(O),v=function(t){var a=t.allDeposits,e=t.allWithdraws,n=t.balance;return r.a.createElement("section",{className:_.a.balance},r.a.createElement("span",null,"\u2b06\ufe0f",a," $"),r.a.createElement("span",null,"\u2b07\ufe0f",e," $"),r.a.createElement("span",null,"Balance: ",n," $"))},D=(e(34),e(2)),j=e.n(D);function S(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,n)}return e}var N=function(t){function a(){var t,e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=Object(m.a)(this,(t=Object(d.a)(a)).call.apply(t,[this].concat(r)))).state={transactions:[],transaction:"",balance:0,allDeposits:0,allWithdraws:0},e.addTransaction=function(t){e.setState({transaction:t.target.value})},e.addToLocalStorage=function(){return localStorage.setItem("history",JSON.stringify(e.state))},e.notify=function(t){return Object(f.b)(t)},e.handleSubmitTransaction=function(t){t.preventDefault();var a=new Date,n={year:"numeric",month:"long",timezone:"UTC",hour:"numeric",minute:"numeric",second:"numeric"};if("Deposit"===t.target.name&&e.state.transaction>0){var r={id:h.a.generate(),amount:e.state.transaction,type:t.target.name,date:a.toLocaleString("en",n)};e.setState(function(t){return{transactions:[].concat(Object(l.a)(t.transactions),[r]),balance:t.balance+Number(r.amount),allDeposits:t.allDeposits+Number(r.amount),transaction:""}},function(){return e.addToLocalStorage()})}else"0"===e.state.transaction&&e.notify("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!");if("Withdraw"===t.target.name&&e.state.balance>=e.state.transaction&&e.state.transaction>0){var o={id:h.a.generate(),amount:e.state.transaction,type:t.target.name,date:a.toLocaleString("en",n)};e.setState(function(t){return{transactions:[].concat(Object(l.a)(t.transactions),[o]),balance:t.balance-Number(o.amount),allWithdraws:t.allWithdraws+Number(o.amount),transaction:""}},function(){return e.addToLocalStorage()})}else"Withdraw"===t.target.name&&e.state.balance<=e.state.transaction&&e.notify("\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!")},e}return Object(b.a)(a,t),Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("history"),a=JSON.parse(t);t&&this.setState(function(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?S(e,!0).forEach(function(a){Object(s.a)(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):S(e).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}({},a))}},{key:"render",value:function(){var t=this.state,a=t.transaction,e=t.allDeposits,n=t.allWithdraws,o=t.balance;return r.a.createElement("div",{className:"dashboard"},r.a.createElement(E,{transaction:a,addTransaction:this.addTransaction,handleSubmitTransaction:this.handleSubmitTransaction}),r.a.createElement(v,{allDeposits:e,allWithdraws:n,balance:o}),r.a.createElement(f.a,null),r.a.createElement("table",{className:j.a.history},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:j.a.column},"Transaction"),r.a.createElement("th",{className:j.a.column},"Amount"),r.a.createElement("th",{className:j.a.column},"Date"))),r.a.createElement("tbody",null,this.state.transactions.map(function(t){return r.a.createElement("tr",{className:j.a.row,key:t.id},r.a.createElement("td",null,t.type),r.a.createElement("td",null,t.amount,"$"),r.a.createElement("td",null,t.date))}))))}}]),a}(n.Component);c.a.render(r.a.createElement(N,null),document.getElementById("root"))},4:function(t,a,e){t.exports={controls:"Controls_controls__1QKDH",controlBtn:"Controls_controlBtn__1AUaC",input:"Controls_input__1fwfG"}}},[[21,1,2]]]);
//# sourceMappingURL=main.2c0d1f51.chunk.js.map