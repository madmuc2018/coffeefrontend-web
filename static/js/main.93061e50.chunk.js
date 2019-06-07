(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){e.exports=a(180)},115:function(e,t,a){},180:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),s=(a(115),a(11)),i=a(12),l=a(14),u=a(13),m=a(15),h=a(76),d=a(50),p=a(100),f=a(84),g=a(99),v=a(6),E=a.n(v),b=a(9),k=a(30),O=a.n(k),y={getToken:function(){return localStorage.getItem("token")},setToken:function(e){localStorage.setItem("token","string"===typeof e?e:JSON.stringify(e))},loggedIn:function(){var e=localStorage.getItem("token");return e&&e.trim()},logout:function(){localStorage.removeItem("token")}},C="https://secure-earth-88043.herokuapp.com/v1";function j(){return{headers:{Authorization:"Bearer ".concat(y.getToken())}}}var x={register:function(){var e=Object(b.a)(E.a.mark(function e(t,a,n){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("".concat(C,"/user/register"),{username:t,password:a,role:n});case 2:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),login:function(){var e=Object(b.a)(E.a.mark(function e(t,a){var n,r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("".concat(C,"/user/login"),{username:t,password:a});case 2:if(n=e.sent,r=n.data.token){e.next=6;break}throw new Error("Invalid login response from server");case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),getOrders:function(){var e=Object(b.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(C,"/fs"),j());case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),updateOrder:function(){var e=Object(b.a)(E.a.mark(function e(t,a){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.put("".concat(C,"/fs/").concat(t),a,j());case 2:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),addOrder:function(){var e=Object(b.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("".concat(C,"/fs"),t,j());case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),grantAccess:function(){var e=Object(b.a)(E.a.mark(function e(t,a){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.put("".concat(C,"/fs/").concat(t,"/grant"),{grantedUsers:a},j());case 2:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),revokeAccess:function(){var e=Object(b.a)(E.a.mark(function e(t,a){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.put("".concat(C,"/fs/").concat(t,"/revoke"),{userToBeRevoked:a},j());case 2:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),getHistory:function(){var e=Object(b.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(C,"/fs/").concat(t,"/trace"),j());case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),getLatestOrder:function(){var e=Object(b.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(C,"/fs/").concat(t,"/latest"),j());case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),getAccessInfo:function(){var e=Object(b.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(C,"/fs/").concat(t,"/access"),j());case 2:return e.abrupt("return",e.sent.data.grantedUsers);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},w=a(185),S=a(186),I=a(193),U=a(197),N=a(195),L=a(51),q=a.n(L),R=a(192),B=a(194),G=a(58),A=a(25),T=function(){return r.a.createElement("div",null,r.a.createElement(R.a,{bg:"light",variant:"dark"},r.a.createElement(R.a.Brand,null,r.a.createElement("img",{src:q.a,alt:"logo",width:"40",height:"40",className:"d-inline-block align-top"})),r.a.createElement(B.a,{className:"mr-auto"},r.a.createElement(A.LinkContainer,{to:"/"},r.a.createElement(G.a,{variant:"link"},"Home")),r.a.createElement(A.LinkContainer,{to:"/orders/include"},r.a.createElement(G.a,{variant:"link"},"Include")),r.a.createElement(A.LinkContainer,{to:"/orders/scan"},r.a.createElement(G.a,{variant:"link"},"ScanQRCode")),r.a.createElement(A.LinkContainer,{to:"/logout"},r.a.createElement(G.a,{variant:"link"},"Logout")))),r.a.createElement("br",null))},W=a(62),D=a(196),z=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(W.a,null,r.a.createElement(D.a,{variant:"primary",title:"".concat(this.props.coffeeId)},r.a.createElement(W.a.Item,null,r.a.createElement(A.LinkContainer,{to:"/orders/".concat(this.props.coffeeGuid,"/update"),replace:!0},r.a.createElement(G.a,{variant:"success",size:"sm",block:!0},"Update"))),r.a.createElement(W.a.Item,null,r.a.createElement(A.LinkContainer,{to:"/orders/".concat(this.props.coffeeGuid,"/history"),replace:!0},r.a.createElement(G.a,{variant:"info",size:"sm",block:!0},"History"))),r.a.createElement(W.a.Item,null,r.a.createElement(A.LinkContainer,{to:"/orders/".concat(this.props.coffeeGuid,"/qr"),replace:!0},r.a.createElement(G.a,{variant:"info",size:"sm",block:!0},"QRCode"))),r.a.createElement(W.a.Item,null,r.a.createElement(A.LinkContainer,{to:"/orders/".concat(this.props.coffeeGuid,"/access"),replace:!0},r.a.createElement(G.a,{variant:"info",size:"sm",block:!0},"Access Control")))))}}]),t}(n.Component),H=a(191),Q=a(184),M=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=void 0!==this.props.loading&&null!==this.props.loading,t="Loading";return"string"===typeof this.props.loading&&this.props.loading.trim().length>0&&(t=this.props.loading),r.a.createElement("div",null,e?r.a.createElement(H.a,{show:e,centered:!0},r.a.createElement(H.a.Body,null,r.a.createElement("div",{className:"text-center"},r.a.createElement(Q.a,{animation:"border",variant:"primary"}),"\xa0 ",t))):r.a.createElement("div",null,this.props.children))}}]),t}(n.Component),P=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={orders:[],filterer:""},e.handleFilter=function(t){var a=t.target.value;e.setState({filterer:a.trim().toLowerCase()})},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({loading:!0}),e.next=4,x.getOrders();case 4:t=e.sent,this.setState({orders:t}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:return e.prev=11,this.componentUnmounted||this.setState({loading:void 0}),e.finish(11);case 14:case"end":return e.stop()}},e,this,[[0,8,11,14]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.componentUnmounted=!0}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(w.a,null,r.a.createElement("h1",{className:"text-center"},"Inventory"),r.a.createElement(M,{loading:this.state.loading},r.a.createElement(S.a,null,r.a.createElement(I.a,{placeholder:"Search by ID",name:"filterer",onChange:this.handleFilter})),r.a.createElement("br",null),this.state.orders.filter(function(t){var a=e.state.filterer;return 0===a.length||t.data.id.trim().toLowerCase().includes(a)}).map(function(e){return r.a.createElement(U.a,{key:e.guid},r.a.createElement(U.a.Header,{className:"text-center"},r.a.createElement(z,{coffeeGuid:e.guid,coffeeId:e.data.id})),r.a.createElement(U.a.Body,null,r.a.createElement(N.a,{variant:"flush"},r.a.createElement(N.a.Item,null," Producer: ",e.data.producer," "),r.a.createElement(N.a.Item,null," Variety: ",e.data.variety," "),r.a.createElement(N.a.Item,null," Quantity: ",e.data.quantity," "),r.a.createElement(N.a.Item,null," Status: ",e.data.status," "))))}))))}}]),t}(n.Component),F=a(27),J=function(e){return e.split("").map(function(e,t){return 0===t?e.toUpperCase():e}).join("")},V=a(187),$=a(188),K=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(V.a,null,r.a.createElement($.a,{xs:"3"},J(this.props.name)),r.a.createElement($.a,null,r.a.createElement(I.a,{placeholder:this.props.placeholder?this.props.placeholder:"",type:this.props.type?this.props.type:"text",name:this.props.name,onChange:this.props.onChange}))),r.a.createElement("br",null))}}]),t}(n.Component),X=function(){return r.a.createElement(R.a,{bg:"light",variant:"dark"},r.a.createElement(R.a.Brand,null,r.a.createElement("img",{src:q.a,alt:"logo",width:"30",height:"30",className:"d-inline-block align-top"})),r.a.createElement(B.a,{className:"mr-auto"},r.a.createElement(A.LinkContainer,{to:"/login"},r.a.createElement(G.a,{variant:"link"},"Login")),r.a.createElement(A.LinkContainer,{to:"/register"},r.a.createElement(G.a,{variant:"link"},"Register"))))},Y=function(e){function t(e){var a;return Object(s.a)(this,t),a=Object(l.a)(this,Object(u.a)(t).call(this,e)),y.loggedIn()&&a.props.history.replace("/"),a.state={email:"test1@test.com",password:"123",role:""},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(F.a)({},n,r))},a.handleRegister=function(){var e=Object(b.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.setState({loading:"Registering"}),e.next=4,x.register(a.state.email,a.state.password,a.state.role);case 4:a.props.history.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:return e.prev=10,a.componentUnmounted||a.setState({loading:void 0}),e.finish(10);case 13:case"end":return e.stop()}},e,null,[[0,7,10,13]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillUnmount",value:function(){this.componentUnmounted=!0}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(X,null),r.a.createElement(w.a,null,r.a.createElement("h1",null,"Register"),r.a.createElement(M,{loading:this.state.loading},r.a.createElement(K,{name:"email",onChange:this.handleChange}),r.a.createElement(K,{name:"password",type:"password",onChange:this.handleChange}),r.a.createElement(K,{name:"role",onChange:this.handleChange}),r.a.createElement(G.a,{onClick:this.handleRegister},"Register"))))}}]),t}(r.a.Component),Z=function(e){function t(e){var a;return Object(s.a)(this,t),a=Object(l.a)(this,Object(u.a)(t).call(this,e)),y.loggedIn()&&a.props.history.replace("/"),a.state={email:"test1@test.com",password:"123"},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(F.a)({},n,r))},a.handleLogin=function(){var e=Object(b.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.setState({loading:"Logging in"}),e.t0=y,e.next=5,x.login(a.state.email,a.state.password);case 5:e.t1=e.sent,e.t0.setToken.call(e.t0,e.t1),a.props.history.replace("/"),e.next=13;break;case 10:e.prev=10,e.t2=e.catch(0),alert(e.t2);case 13:return e.prev=13,a.componentUnmounted||a.setState({loading:void 0}),e.finish(13);case 16:case"end":return e.stop()}},e,null,[[0,10,13,16]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillUnmount",value:function(){this.componentUnmounted=!0}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(X,null),r.a.createElement(w.a,null,r.a.createElement("h1",null,"Login"),r.a.createElement(M,{loading:this.state.loading},r.a.createElement(K,{name:"email",onChange:this.handleChange}),r.a.createElement(K,{name:"password",type:"password",onChange:this.handleChange}),r.a.createElement(G.a,{onClick:this.handleLogin},"Log in"))))}}]),t}(r.a.Component),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={guid:"",id:"",producer:"",farm:"",elevation:"",variety:"",process:"",quantity:"",qc:"",tastingNotes:"",price:"",status:""},a.setStateOrder=function(e,t){a.setState({guid:e,id:t.id,producer:t.producer,farm:t.farm,elevation:t.elevation,variety:t.variety,process:t.process,quantity:t.quantity,qc:t.qc,tastingNotes:t.tastingNotes,price:t.price,status:t.status})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(F.a)({},n,r))},a.handleUpateOrder=function(){var e=Object(b.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.setState({loading:"Updating order"}),e.next=4,x.updateOrder(a.state.guid,a.state);case 4:a.props.history.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:return e.prev=10,a.componentUnmounted||a.setState({loading:void 0}),e.finish(10);case 13:case"end":return e.stop()}},e,null,[[0,7,10,13]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(E.a.mark(function e(){var t,a,n=this;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({loading:!0}),e.next=4,x.getOrders();case 4:t=e.sent,a=t.filter(function(e){return e.guid===n.props.match.params.id})[0],this.setStateOrder(a.guid,a.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0);case 12:return e.prev=12,this.componentUnmounted||this.setState({loading:void 0}),e.finish(12);case 15:case"end":return e.stop()}},e,this,[[0,9,12,15]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.componentUnmounted=!0}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(w.a,null,r.a.createElement("h1",{className:"text-center"},"Update Coffee"),r.a.createElement(M,{loading:this.state.loading},r.a.createElement("div",{className:"text-center"},r.a.createElement(z,{coffeeGuid:this.state.guid,coffeeId:this.state.id}),r.a.createElement("br",null)),r.a.createElement(K,{name:"id",placeholder:this.state.id,onChange:this.handleChange}),r.a.createElement(K,{name:"producer",placeholder:this.state.producer,onChange:this.handleChange}),r.a.createElement(K,{name:"farm",placeholder:this.state.farm,onChange:this.handleChange}),r.a.createElement(K,{name:"elevation",placeholder:this.state.elevation,onChange:this.handleChange}),r.a.createElement(K,{name:"variety",placeholder:this.state.variety,onChange:this.handleChange}),r.a.createElement(K,{name:"process",placeholder:this.state.process,onChange:this.handleChange}),r.a.createElement(K,{name:"quantity",placeholder:this.state.quantity,onChange:this.handleChange}),r.a.createElement(K,{name:"qc",placeholder:this.state.qc,onChange:this.handleChange}),r.a.createElement(K,{name:"tastingNotes",placeholder:this.state.tastingNotes,onChange:this.handleChange}),r.a.createElement(K,{name:"price",placeholder:this.state.price,onChange:this.handleChange}),r.a.createElement(K,{name:"status",placeholder:this.state.status,onChange:this.handleChange}),r.a.createElement("div",{className:"text-center"},r.a.createElement(G.a,{onClick:this.handleUpateOrder},"Update")))))}}]),t}(r.a.Component),ee=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={id:"",producer:"",farm:"",elevation:"",variety:"",process:"",quantity:"",qc:"",tastingNotes:"",price:""},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(F.a)({},n,r))},a.handleIncludeOrder=function(){var e=Object(b.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.setState({loading:"Including order"}),e.next=4,x.addOrder(a.state);case 4:a.props.history.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:return e.prev=10,a.componentUnmounted||a.setState({loading:void 0}),e.finish(10);case 13:case"end":return e.stop()}},e,null,[[0,7,10,13]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillUnmount",value:function(){this.componentUnmounted=!0}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(w.a,null,r.a.createElement("h1",{className:"text-center"},"Include Coffee"),r.a.createElement(M,{loading:this.state.loading},r.a.createElement(K,{name:"id",onChange:this.handleChange}),r.a.createElement(K,{name:"producer",onChange:this.handleChange}),r.a.createElement(K,{name:"farm",onChange:this.handleChange}),r.a.createElement(K,{name:"elevation",onChange:this.handleChange}),r.a.createElement(K,{name:"variety",onChange:this.handleChange}),r.a.createElement(K,{name:"process",onChange:this.handleChange}),r.a.createElement(K,{name:"quantity",onChange:this.handleChange}),r.a.createElement(K,{name:"qc",onChange:this.handleChange}),r.a.createElement(K,{name:"tastingNotes",onChange:this.handleChange}),r.a.createElement(K,{name:"price",onChange:this.handleChange}),r.a.createElement("div",{className:"text-center"},r.a.createElement(G.a,{onClick:this.handleIncludeOrder},"Include")))))}}]),t}(n.Component),te=a(189),ae=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={guid:"",id:"",versions:[]},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(E.a.mark(function e(){var t,a,n,r=this;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({loading:!0}),e.next=4,x.getHistory(this.props.match.params.id);case 4:return t=e.sent,e.next=7,x.getOrders();case 7:a=e.sent,n=a.filter(function(e){return e.guid===r.props.match.params.id})[0],this.setState({guid:n.guid,id:n.data.id,versions:t}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert(e.t0);case 15:return e.prev=15,this.componentUnmounted||this.setState({loading:void 0}),e.finish(15);case 18:case"end":return e.stop()}},e,this,[[0,12,15,18]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.componentUnmounted=!0}},{key:"render",value:function(){return this.state.versions[0]&&console.log(new Date(parseInt(this.state.versions[0].lastChangedAt)).toUTCString()),r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(w.a,null,r.a.createElement("h1",{className:"text-center"},"History"),r.a.createElement(M,{loading:this.state.loading},r.a.createElement("div",{className:"text-center"},r.a.createElement(z,{coffeeGuid:this.state.guid,coffeeId:this.state.id}),r.a.createElement("br",null)),this.state.versions.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(U.a,null,r.a.createElement(U.a.Body,null,r.a.createElement(U.a.Title,null," ",r.a.createElement(te.a,{variant:"info"}," ID: ",e.id," ")),r.a.createElement(N.a,{variant:"flush"},r.a.createElement(N.a.Item,null," Producer: ",e.producer," "),r.a.createElement(N.a.Item,null," Farm: ",e.farm," "),r.a.createElement(N.a.Item,null," Elevation: ",e.elevation," "),r.a.createElement(N.a.Item,null," Variety: ",e.variety," "),r.a.createElement(N.a.Item,null," Process: ",e.process," "),r.a.createElement(N.a.Item,null," Quantity: ",e.quantity," "),r.a.createElement(N.a.Item,null," QC: ",e.qc," "),r.a.createElement(N.a.Item,null," Tasting Notes: ",e.tastingNotes," "),r.a.createElement(N.a.Item,null," Price: ",e.price," "),r.a.createElement(N.a.Item,null," Status: ",e.status," "),r.a.createElement(N.a.Item,null," Last changed at: ",new Date(parseInt(e.lastChangedAt)).toUTCString()," "),r.a.createElement(N.a.Item,null," Last changed by: ",e.lastChangedBy," ")))),r.a.createElement("br",null))}))))}}]),t}(n.Component),ne=a(107),re=a.n(ne),ce=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={guid:"",id:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(E.a.mark(function e(){var t,a,n=this;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({loading:"Generating QR code"}),e.next=4,x.getOrders();case 4:t=e.sent,a=t.filter(function(e){return e.guid===n.props.match.params.id})[0],this.setState({guid:a.guid,id:a.data.id}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0);case 12:return e.prev=12,this.componentUnmounted||this.setState({loading:void 0}),e.finish(12);case 15:case"end":return e.stop()}},e,this,[[0,9,12,15]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.componentUnmounted=!0}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(w.a,null,r.a.createElement("h1",{className:"text-center"},"QR code"),r.a.createElement(M,{loading:this.state.loading},r.a.createElement("div",{className:"text-center"},r.a.createElement(z,{coffeeGuid:this.state.guid,coffeeId:this.state.id}),r.a.createElement("br",null)),r.a.createElement("div",{className:"text-center"},r.a.createElement(re.a,{size:"100",value:this.state.guid})))))}}]),t}(r.a.Component),oe=a(108),se=a.n(oe),ie=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a.redirect=function(){var e=Object(b.a)(E.a.mark(function e(t){var n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.setState({loading:"Checking order"}),e.next=4,x.getOrders();case 4:e.t0=function(e){return e.guid===t},1===(n=e.sent.filter(e.t0)).length&&a.props.history.push("/orders/".concat(n[0].guid,"/update")),e.next=12;break;case 9:e.prev=9,e.t1=e.catch(0),alert(e.t1);case 12:return e.prev=12,a.componentUnmounted||a.setState({loading:void 0}),e.finish(12);case 15:case"end":return e.stop()}},e,null,[[0,9,12,15]])}));return function(t){return e.apply(this,arguments)}}(),a.handleScan=function(e){e&&!a.state.loading&&(console.log("Scanned: "+e),a.redirect(e))},a.handleError=function(e){console.error(e)},a.componentWillUnmount=function(){a.componentUnmounted=!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(w.a,null,r.a.createElement("h1",{className:"text-center"},"Scan QR Code"),r.a.createElement(M,{loading:this.state.loading},r.a.createElement(se.a,{delay:500,onError:this.handleError,onScan:this.handleScan,style:{width:"100%"}}))))}}]),t}(n.Component),le=a(190),ue=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={guid:"",id:"",grantedUsers:[],userToBeGranted:"",userToBeRevoked:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(F.a)({},n,r))},e.handleGrant=function(){var t=Object(b.a)(E.a.mark(function t(a){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.setState({loading:"Granting access"}),t.next=4,x.grantAccess(e.props.match.params.id,[e.state.userToBeGranted]);case 4:return t.next=6,x.getAccessInfo(e.props.match.params.id);case 6:n=t.sent,e.setState({grantedUsers:n}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),alert(t.t0);case 13:return t.prev=13,e.componentUnmounted||e.setState({loading:void 0}),t.finish(13);case 16:case"end":return t.stop()}},t,null,[[0,10,13,16]])}));return function(e){return t.apply(this,arguments)}}(),e.handleRevoke=function(){var t=Object(b.a)(E.a.mark(function t(a){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.setState({loading:"Revoking access"}),t.next=4,x.revokeAccess(e.props.match.params.id,e.state.userToBeRevoked);case 4:return t.next=6,x.getAccessInfo(e.props.match.params.id);case 6:n=t.sent,e.setState({grantedUsers:n}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),alert(t.t0);case 13:return t.prev=13,e.componentUnmounted||e.setState({loading:void 0}),t.finish(13);case 16:case"end":return t.stop()}},t,null,[[0,10,13,16]])}));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(E.a.mark(function e(){var t,a,n=this;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({loading:!0}),e.next=4,x.getAccessInfo(this.props.match.params.id);case 4:return t=e.sent,e.next=7,x.getOrders();case 7:e.t0=function(e){return e.guid===n.props.match.params.id},a=e.sent.filter(e.t0)[0],this.setState({guid:a.guid,id:a.data.id,grantedUsers:t}),e.next=15;break;case 12:e.prev=12,e.t1=e.catch(0),alert(e.t1);case 15:return e.prev=15,this.componentUnmounted||this.setState({loading:void 0}),e.finish(15);case 18:case"end":return e.stop()}},e,this,[[0,12,15,18]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.componentUnmounted=!0}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(w.a,null,r.a.createElement("h1",{className:"text-center"},"Access control"),r.a.createElement(M,{loading:this.state.loading},r.a.createElement("div",{className:"text-center"},r.a.createElement(z,{coffeeGuid:this.state.guid,coffeeId:this.state.id}),r.a.createElement("br",null)),r.a.createElement(U.a,null,r.a.createElement(U.a.Header,null,"Authorized Users"),r.a.createElement(U.a.Body,null,this.state.grantedUsers.map(function(e){return r.a.createElement("p",null,e)}))),r.a.createElement("br",null),r.a.createElement(le.a,null,r.a.createElement(me,{bg:"success",task:"Grant",name:"userToBeGranted",onChange:this.handleChange,onClick:this.handleGrant}),r.a.createElement(me,{bg:"danger",task:"Revoke",name:"userToBeRevoked",onChange:this.handleChange,onClick:this.handleRevoke})))))}}]),t}(n.Component),me=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(U.a,{bg:this.props.bg},r.a.createElement(U.a.Header,null,this.props.task," Access"),r.a.createElement(U.a.Body,null,r.a.createElement(I.a,{placeholder:"Email",name:this.props.name,onChange:this.props.onChange}),r.a.createElement(G.a,{onClick:this.props.onClick,size:"sm"},this.props.task)))}}]),t}(n.Component),he=ue;function de(e){var t=e.component,a=Object(h.a)(e,["component"]);return r.a.createElement(d.a,Object.assign({},a,{render:function(e){return y.loggedIn()?r.a.createElement(t,e):r.a.createElement(p.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}function pe(e){e.component;var t=Object(h.a)(e,["component"]);return r.a.createElement(d.a,Object.assign({},t,{render:function(e){return y.logout(),r.a.createElement(p.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}var fe=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(g.a,null,r.a.createElement(d.a,{exact:!0,path:"/login",component:Z}),r.a.createElement(d.a,{exact:!0,path:"/register",component:Y}),r.a.createElement(pe,{exact:!0,path:"/logout"}),r.a.createElement(de,{exact:!0,path:"/",component:P}),r.a.createElement(de,{exact:!0,path:"/orders/include",component:ee}),r.a.createElement(de,{exact:!0,path:"/orders/scan",component:ie}),r.a.createElement(de,{exact:!0,path:"/orders/:id/update",component:_}),r.a.createElement(de,{exact:!0,path:"/orders/:id/history",component:ae}),r.a.createElement(de,{exact:!0,path:"/orders/:id/access",component:he}),r.a.createElement(de,{exact:!0,path:"/orders/:id/qr",component:ce})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},51:function(e,t,a){e.exports=a.p+"static/media/logo.1710af2a.png"}},[[110,1,2]]]);
//# sourceMappingURL=main.93061e50.chunk.js.map