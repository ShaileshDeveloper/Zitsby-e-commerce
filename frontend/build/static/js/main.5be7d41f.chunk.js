(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{105:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),a=c(19),s=c.n(a),o=(c(75),c(76),c(111)),i=c(68),l=c(117),j=c(12),d=c(1);var u=function(e){var t=e.product;return Object(d.jsx)("div",{children:Object(d.jsxs)(l.a,{className:"my-3 p-2 rounded",children:[Object(d.jsx)(j.Link,{to:"/products/".concat(t._id),children:Object(d.jsx)(l.a.Img,{src:t.image,variant:"top"})}),Object(d.jsx)(l.a.Body,{children:Object(d.jsxs)("a",{href:"/products/".concat(t._id),children:[Object(d.jsx)(l.a.Title,{as:"div",children:Object(d.jsx)("strong",{children:t.name})}),Object(d.jsxs)(l.a.Text,{as:"div",children:["Rs ",t.price]})]})})]})})},b=c(115),O=c(110),h=c(118),p=c(114),x=c(37),m=c(7),f=c(16),g=c.n(f),I=c(24),S=c(25),y=c.n(S);var v=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.userLogin})).userInfo,c=Object(m.c)((function(e){return e.cart})).cartItems;return Object(d.jsx)("div",{children:Object(d.jsx)(b.a,{bg:"dark",variant:"dark",expand:"lg",children:Object(d.jsxs)(O.a,{children:[Object(d.jsx)(x.LinkContainer,{to:"/",children:Object(d.jsx)(b.a.Brand,{children:"ZITSBY E COMMERCE"})}),Object(d.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(b.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(h.a,{className:"ml-auto",children:[Object(d.jsx)(x.LinkContainer,{to:"/cart",children:Object(d.jsxs)(h.a.Link,{children:["Cart",Object(d.jsx)("small",{className:"quantity",children:Object(d.jsx)("strong",{children:c.reduce((function(e,t){return e+t.qty}),0)})})]})}),t?Object(d.jsxs)(p.a,{title:t.name,id:"username",children:[Object(d.jsx)(x.LinkContainer,{to:"/profile",children:Object(d.jsx)(p.a.Item,{children:"Profile"})}),Object(d.jsx)(p.a.Item,{onClick:function(){e((function(e){localStorage.removeItem("userInfo"),e({type:"USER_LOGOUT"})}))},children:"Logout"})]}):Object(d.jsx)(x.LinkContainer,{to:"/login",children:Object(d.jsx)(h.a.Link,{href:"/signin",children:"Sign in"})})]})})]})})})};var E=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("footer",{children:Object(d.jsx)(O.a,{children:Object(d.jsx)(o.a,{children:Object(d.jsx)(i.a,{className:"text-center py-3",children:" @copyright \xa9 Shailesh"})})})})})};var _=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.productList}));return Object(d.jsx)("div",{children:Object(d.jsxs)("fieldset",{children:[Object(d.jsx)("legend",{children:"Sort By"}),Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",name:"sort",onChange:function(){return e({type:"SORT",payload:"PRICE_HIGH_TO_LOW"})},checked:t.sortBy&&"PRICE_HIGH_TO_LOW"===t.sortBy})," ","Price - High to Low"]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",name:"sort",onChange:function(){return e({type:"SORT",payload:"PRICE_LOW_TO_HIGH"})},checked:t.sortBy&&"PRICE_LOW_TO_HIGH"===t.sortBy})," ","Price - Low to High"]})]})})},C=c(112),R=function(){return Object(d.jsx)(C.a,{animation:"border",role:"status",style:{width:"100px",height:"100px",margin:"auto",display:"block"},children:Object(d.jsx)("span",{class:"sr-only",children:"Loading"})})};var T=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.productList})),c=t.loading,n=t.error,a=t.products,s=t.sortBy;return Object(r.useEffect)((function(){e(function(){var e=Object(I.a)(g.a.mark((function e(t){var c,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"PRODUCT_LIST_REQUEST"}),e.next=4,y.a.get("https://zitsby-e-commerce-backend-2.shaileshweb.repl.co/products");case 4:c=e.sent,r=c.data,t({type:"PRODUCT_LIST_SUCCESS",payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:"PRODUCT_LIST_FAIL",payload:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),function(e,t){t&&"PRICE_HIGH_TO_LOW"===t?e.sort((function(e,t){return t.price-e.price})):t&&"PRICE_LOW_TO_HIGH"===t&&e.sort((function(e,t){return e.price-t.price}))}(a,s),Object(d.jsxs)("div",{children:[Object(d.jsx)(v,{}),Object(d.jsx)(O.a,{children:Object(d.jsx)(_,{})}),Object(d.jsx)(O.a,{children:c?Object(d.jsx)(R,{}):n?Object(d.jsx)("h3",{children:n}):Object(d.jsx)(o.a,{children:a.map((function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(i.a,{sm:12,md:6,lg:4,xl:3,children:Object(d.jsx)(u,{product:e})},e._id)})}))})}),Object(d.jsx)(E,{})]})},L=c(31),k=c(17),U=c(113),w=c(119),P=c(116),N=c(67),D=c(8);var G=function(e){var t=e.match,c=Object(r.useState)(1),n=Object(k.a)(c,2),a=n[0],s=n[1],l=Object(D.k)(),u=Object(m.b)(),b=Object(m.c)((function(e){return e.productDetails})),h=b.loading,p=b.products,x=b.error;return Object(r.useEffect)((function(){var e;u((e=t.params.id,function(){var t=Object(I.a)(g.a.mark((function t(c){var r,n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:"PRODUCT_DETAILS_REQUEST"}),t.next=4,y.a.get("https://zitsby-e-commerce-backend-2.shaileshweb.repl.co/products/".concat(e));case 4:r=t.sent,n=r.data,c({type:"PRODUCT_DETAILS_SUCCESS",payload:n}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),c({type:"PRODUCT_DETAILS_FAIL",payload:t.t0});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[u]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j.Link,{className:"btn btn-light my-3",to:"/",children:"Go Back"}),h?Object(d.jsx)(R,{}):x?Object(d.jsx)("h4",{children:x}):Object(d.jsx)(O.a,{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(i.a,{md:6,children:Object(d.jsx)(O.a,{children:Object(d.jsx)(U.a,{src:p.image,alt:p.name,fluid:!0})})}),Object(d.jsx)(i.a,{md:3,children:Object(d.jsxs)(w.a,{variant:"flush",children:[Object(d.jsx)(w.a.Item,{children:Object(d.jsx)("h3",{children:p.name})}),Object(d.jsx)(w.a.Item,{children:p.description})]})}),Object(d.jsx)(i.a,{md:3,children:Object(d.jsxs)(w.a,{variant:"flush",children:[Object(d.jsx)(w.a.Item,{children:Object(d.jsxs)("h3",{children:["Rs ",p.price]})}),Object(d.jsx)(w.a.Item,{children:p.countInStock>0?"In Stock":"Out of stock"}),p.countInStock>0&&Object(d.jsx)(w.a.Item,{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(i.a,{children:"Qty"}),Object(d.jsx)(i.a,{children:Object(d.jsx)(P.a.Control,{as:"select",value:a,onChange:function(e){return s(e.target.value)},children:Object(L.a)(Array(p.countInStock).keys()).map((function(e){return Object(d.jsx)("option",{value:e+1,children:e+1},e+1)}))})})]})}),Object(d.jsx)(w.a.Item,{children:Object(d.jsx)(N.a,{onClick:function(){l.push("/cart/".concat(t.params.id,"?qty=").concat(a))},className:"btn-block",type:"button",disabled:0===p.countInStock,children:"Add to cart"})})]})})]})})]})},A=function(e,t){return function(){var c=Object(I.a)(g.a.mark((function c(r,n){var a,s;return g.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,y.a.get("https://zitsby-e-commerce-backend-2.shaileshweb.repl.co/products/".concat(e));case 2:a=c.sent,s=a.data,console.log(s,"shailesh"),r({type:"CART_ADD_ITEM",payload:{product:s._id,name:s.name,image:s.image,price:s.price,countInStock:s.countInStock,qty:t}}),localStorage.setItem("cartItems",JSON.stringify(n().cart.cartItems));case 7:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()};var F=function(e){var t=e.match,c=(e.history,t.params.id),n=Object(D.l)(),a=n.search?Number(n.search.split("=")[1]):1,s=Object(m.c)((function(e){return e.userLogin})).userInfo,u=Object(m.b)(),b=Object(m.c)((function(e){return e.cart})).cartItems;function O(e){u(function(e){return function(t,c){t({type:"CART_REMOVE_ITEM",payload:e}),localStorage.setItem("cartItems",JSON.stringify(c().cart.cartItems))}}(e))}return console.log(b),Object(r.useEffect)((function(){c&&u(A(c,a))}),[u,c,a]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(o.a,{children:[Object(d.jsxs)(i.a,{md:8,children:[Object(d.jsx)(w.a,{variant:"flush",children:Object(d.jsx)(w.a.Item,{children:Object(d.jsx)("h1",{children:"shopping cart"})})}),0===b.length?Object(d.jsx)("h1",{children:"cart empty"}):Object(d.jsx)(w.a,{children:b.map((function(e){return Object(d.jsx)(w.a.Item,{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(i.a,{md:2,children:Object(d.jsx)(U.a,{src:e.image,alt:e.name,fluid:!0,rounded:!0})}),Object(d.jsx)(i.a,{md:3,children:Object(d.jsx)(j.Link,{to:"/products/".concat(e.product),children:e.name})}),Object(d.jsx)(i.a,{md:2,children:e.price}),Object(d.jsx)(i.a,{md:2,children:Object(d.jsx)(P.a.Control,{as:"select",value:e.qty,onChange:function(t){return u(A(e.product,Number(t.target.value)))},children:Object(L.a)(Array(e.countInStock).keys()).map((function(e){return Object(d.jsx)("option",{value:e+1,children:e+1},e+1)}))})}),Object(d.jsx)(i.a,{md:2,children:Object(d.jsx)(N.a,{type:"button",variant:"light",onClick:function(){return O(e.product)},children:"remove"})})]})},e.product)}))})]}),Object(d.jsx)(i.a,{md:4,className:"subtotal_cart",children:Object(d.jsx)(l.a,{children:Object(d.jsxs)(w.a,{children:[Object(d.jsx)(w.a.Item,{children:Object(d.jsxs)("h2",{children:["SubTotal (",b.reduce((function(e,t){return e+t.qty}),0),")"]})}),Object(d.jsxs)(w.a.Item,{children:["TotalPrice: (",b.reduce((function(e,t){return e+t.qty*t.price}),0),")"]}),s?Object(d.jsx)(N.a,{children:"PROCEED TO CHECKOUT"}):Object(d.jsx)(j.NavLink,{to:"/login",children:Object(d.jsx)(N.a,{className:"btn-block",children:"PROCEED TO CHECKOUT"})})]})})})]})})};var H=function(e){var t=e.children;return Object(d.jsx)(O.a,{children:Object(d.jsx)(o.a,{children:Object(d.jsx)(i.a,{xs:12,md:6,children:t})})})};var B=function(e){e.location;var t=e.history,c=Object(r.useState)(""),n=Object(k.a)(c,2),a=n[0],s=n[1],l=Object(r.useState)(""),u=Object(k.a)(l,2),b=u[0],h=u[1],p=Object(m.b)(),x=Object(m.c)((function(e){return e.userLogin})),f=x.loading,S=x.error,v=x.userInfo;return Object(r.useEffect)((function(){v&&t.push("/")}),[t,v]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(O.a,{className:"register_screen",children:Object(d.jsxs)(H,{children:[Object(d.jsx)("h1",{children:"Signin"}),S&&Object(d.jsx)("h1",{children:"Error hai"}),f&&Object(d.jsx)("h1",{children:"loading"}),Object(d.jsxs)(P.a,{onSubmit:function(e){e.preventDefault(),p(function(e,t){return function(){var c=Object(I.a)(g.a.mark((function c(r){var n,a;return g.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,r({type:"USER_LOGIN_REQUEST"}),c.next=4,y.a.post("https://zitsby-e-commerce-backend-2.shaileshweb.repl.co/users/login",{email:e,password:t});case 4:n=c.sent,a=n.data,r({type:"USER_LOGIN_SUCCESS",payload:a}),localStorage.setItem("userInfo",JSON.stringify(a)),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(0),r({type:"USER_LOGIN_FAIL",payload:c.t0});case 13:case"end":return c.stop()}}),c,null,[[0,10]])})));return function(e){return c.apply(this,arguments)}}()}(a,b))},children:[Object(d.jsxs)(P.a.Group,{controlId:"email",children:[Object(d.jsx)(P.a.Label,{children:"Email Address"}),Object(d.jsx)(P.a.Control,{type:"email",placeholder:"Enter email",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(d.jsxs)(P.a.Group,{controlId:"password",children:[Object(d.jsx)(P.a.Label,{children:"Password"}),Object(d.jsx)(P.a.Control,{type:"password",placeholder:"Enter password",value:b,onChange:function(e){return h(e.target.value)}})]}),Object(d.jsx)(N.a,{type:"submit",variant:"primary",children:"Sign in"})]}),Object(d.jsx)(o.a,{className:"py-3",children:Object(d.jsxs)(i.a,{children:["New Customer?"," ",Object(d.jsx)(j.Link,{to:"/register",children:"Register"})]})})]})})})};var M=function(e){e.location;var t=e.history,c=Object(r.useState)(""),n=Object(k.a)(c,2),a=n[0],s=n[1],l=Object(r.useState)(""),u=Object(k.a)(l,2),b=u[0],h=u[1],p=Object(r.useState)(""),x=Object(k.a)(p,2),f=x[0],S=x[1],v=Object(r.useState)(""),E=Object(k.a)(v,2),_=E[0],C=E[1],R=Object(r.useState)(null),T=Object(k.a)(R,2),L=T[0],U=T[1],w=Object(m.b)(),D=Object(m.c)((function(e){return e.userRegister})),G=D.loading,A=D.error,F=D.userInfo;return Object(r.useEffect)((function(){F&&t.push("/")}),[t,F]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(O.a,{className:"register_screen",children:Object(d.jsxs)(H,{children:[Object(d.jsx)("h1",{children:"Sign UP"}),L&&Object(d.jsx)("h6",{children:"Password dont match"}),A&&Object(d.jsx)("h4",{children:A.message}),G&&Object(d.jsx)("h3",{children:"Creating your account..."}),Object(d.jsxs)(P.a,{onSubmit:function(e){e.preventDefault(),f!==_?U("password doesntmatch"):w(function(e,t,c){return function(){var r=Object(I.a)(g.a.mark((function r(n){var a,s;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n({type:"USER_REGISTER_REQUEST"}),r.next=4,y.a.post("https://zitsby-e-commerce-backend-2.shaileshweb.repl.co/users/register",{name:e,email:t,password:c});case 4:a=r.sent,s=a.data,n({type:"USER_REGISTER_SUCCESS",payload:s}),n({type:"USER_LOGIN_SUCCESS",payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),n({type:"USER_REGISTER_FAIL",payload:r.t0});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e){return r.apply(this,arguments)}}()}(b,a,f))},children:[Object(d.jsxs)(P.a.Group,{controlId:"name",children:[Object(d.jsx)(P.a.Label,{children:"Name"}),Object(d.jsx)(P.a.Control,{type:"name",placeholder:"Enter name",value:b,onChange:function(e){return h(e.target.value)}})]}),Object(d.jsxs)(P.a.Group,{controlId:"email",children:[Object(d.jsx)(P.a.Label,{children:"Email Address"}),Object(d.jsx)(P.a.Control,{type:"email",placeholder:"Enter email",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(d.jsxs)(P.a.Group,{controlId:"password",children:[Object(d.jsx)(P.a.Label,{children:"Password"}),Object(d.jsx)(P.a.Control,{type:"password",placeholder:"Enter password",value:f,onChange:function(e){return S(e.target.value)}})]}),Object(d.jsxs)(P.a.Group,{controlId:"confirmPassword",children:[Object(d.jsx)(P.a.Label,{children:"Confirm Password"}),Object(d.jsx)(P.a.Control,{type:"password",placeholder:"Enter password",value:_,onChange:function(e){return C(e.target.value)}})]}),Object(d.jsx)(N.a,{type:"submit",variant:"primary",children:"Register"})]}),Object(d.jsx)(o.a,{className:"py-3",children:Object(d.jsxs)(i.a,{children:["HAve an account?"," ",Object(d.jsx)(j.Link,{to:"/login",children:"Login"})]})})]})})})};c(64);var Q=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(D.d,{path:"/",component:T,exact:!0}),Object(d.jsx)(D.d,{path:"/products/:id",component:G}),Object(d.jsx)(D.d,{path:"/login",component:B}),Object(d.jsx)(D.d,{path:"/register",component:M}),Object(d.jsx)(D.d,{path:"/cart/:id?",component:F})]})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,120)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),a(e),s(e)}))},q=c(36),W=c(69),z=c(70),K=c(22),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCT_LIST_REQUEST":return{loading:!0,products:[]};case"PRODUCT_LIST_SUCCESS":return{loading:!1,products:t.payload,sortBy:null};case"PRODUCT_LIST_FAIL":return{loading:!1,error:t.payload};case"SORT":return Object(K.a)(Object(K.a)({},e),{},{sortBy:t.payload});default:return e}},Y=Object(q.combineReducers)({productList:V,productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCT_DETAILS_REQUEST":return{loading:!0,products:[]};case"PRODUCT_DETAILS_SUCCESS":return{loading:!1,products:t.payload};case"PRODUCT_DETAILS_FAIL":return{loading:!1,error:t.payload};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CART_ADD_ITEM":var c=t.payload,r=e.cartItems.find((function(e){return e.product===c.product}));return r?Object(K.a)(Object(K.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===r.product?c:e}))}):Object(K.a)(Object(K.a)({},e),{},{cartItems:[].concat(Object(L.a)(e.cartItems),[c])});case"CART_REMOVE_ITEM":return Object(K.a)(Object(K.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN_REQUEST":return{loading:!0};case"USER_LOGIN_SUCCESS":return{loading:!1,userInfo:t.payload};case"USER_LOGIN_FAIL":return{loading:!1,error:t.payload};case"USER_LOGOUT":return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_REGISTER_REQUEST":return{loading:!0};case"USER_REGISTER_SUCCESS":return{loading:!1,userInfo:t.payload};case"USER_REGISTER_FAIL":return{loading:!1,error:t.payload};default:return e}}}),Z={cart:{cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]},userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},X=[W.a],$=Object(q.createStore)(Y,Z,Object(z.composeWithDevTools)(q.applyMiddleware.apply(void 0,X)));s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(m.a,{store:$,children:Object(d.jsx)(j.BrowserRouter,{children:Object(d.jsx)(Q,{})})})}),document.getElementById("root")),J()},64:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){}},[[105,1,2]]]);
//# sourceMappingURL=main.5be7d41f.chunk.js.map