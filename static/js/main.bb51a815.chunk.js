(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{107:function(e,t,n){e.exports=n.p+"static/media/user.768a78a3.jpg"},11:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return i}));var r=n(132),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"b0269b00-72dc-472c-9638-326f8b7562d3"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile/",e)}},u={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},i={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},128:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n(43),a=n(4),o={dialogsData:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Victor"},{id:6,name:"Valera"}],messagesData:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},c=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:6,message:n}])});default:return e}}},134:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__1huj9"}},135:function(e,t,n){e.exports=n.p+"static/media/preloader.5b61a2d2.svg"},138:function(e,t,n){e.exports={formSummaryError:"Login_formSummaryError__l3gIW"}},15:function(e,t,n){e.exports={nav:"Navbar_nav__ond3o",item:"Navbar_item__12qET",activeLink:"Navbar_activeLink__1oDYO"}},165:function(e,t,n){e.exports=n(291)},170:function(e,t,n){},171:function(e,t,n){},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return p}));var r=n(53),a=n(0),o=n.n(a),c=n(87),u=n(92),i=n.n(u),s=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return o.a.createElement("div",{className:i.a.formControl+" "+(c?i.a.error:"")},o.a.createElement("div",null,a),c&&o.a.createElement("span",null,r))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},p=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(c.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a))," ",u)}},291:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),o=n(62),c=n.n(o),u=(n(170),n(35)),i=n(36),s=n(38),l=n(37),f=(n(171),n(15)),p=n.n(f),d=n(14),m=function(){return a.a.createElement("nav",{className:p.a.nav},a.a.createElement("div",{className:p.a.item},a.a.createElement(d.b,{to:"/profile",activeClassName:p.a.activeLink},"Profile")),a.a.createElement("div",{className:"".concat(p.a.item," ").concat(p.a.active)},a.a.createElement(d.b,{to:"/dialogs",activeClassName:p.a.activeLink},"Messages")),a.a.createElement("div",{className:p.a.item},a.a.createElement(d.b,{to:"/news",activeClassName:p.a.activeLink},"News")),a.a.createElement("div",{className:p.a.item},a.a.createElement(d.b,{to:"/music",activeClassName:p.a.activeLink},"Music")),a.a.createElement("div",{className:p.a.item},a.a.createElement(d.b,{to:"/settings",activeClassName:p.a.activeLink},"Settings")),a.a.createElement("div",{className:p.a.item},a.a.createElement(d.b,{to:"/users",activeClassName:p.a.activeLink},"Users")))},g=n(10),h=function(){return a.a.createElement("div",null,"News")},E=function(){return a.a.createElement("div",null,"Music")},v=function(){return a.a.createElement("div",null,"Settings")},b=n(16),O=n(7),w=n.n(O),S=n(13),_=n(43),j=n(4),P=n(11),C=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(j.a)(Object(j.a)({},e),r):e}))},y={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},k=function(e){return{type:"FOLLOW",userId:e}},U=function(e){return{type:"UNFOLLOW",userId:e}},T=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},N=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},I=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},L=function(){var e=Object(S.a)(w.a.mark((function e(t,n,r,a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(I(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(I(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(j.a)(Object(j.a)({},e),{},{users:C(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(j.a)(Object(j.a)({},e),{},{users:C(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(j.a)(Object(j.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(j.a)(Object(j.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(j.a)(Object(j.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(_.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},A=n(53),F=n(63),D=n(96),R=n(68),z=n.n(R),G=n(133),M=n.n(G),H=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,c=e.onPageChanged,u=e.portionSize,i=void 0===u?10:u,s=Math.ceil(t/n),l=[],f=1;f<=s;f++)l.push(f);var p=Math.ceil(s/i),d=Object(r.useState)(1),m=Object(D.a)(d,2),g=m[0],h=m[1],E=(g-1)*i+1,v=g*i;return a.a.createElement("div",{className:z.a.paginator},g>1&&a.a.createElement("button",{onClick:function(){h(g-1)}},"PREV"),l.filter((function(e){return e>=E&&e<=v})).map((function(e){return a.a.createElement("span",{className:M()(Object(F.a)({},z.a.selectedPage,o===e),z.a.pageNumber),key:e,onClick:function(t){c(e)}},e)})),p>g&&a.a.createElement("button",{onClick:function(){h(g+1)}},"NEXT"))},W=n(134),B=n.n(W),q=n(107),V=n.n(q),Y=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,o=e.follow;return a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("div",null,a.a.createElement(d.b,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:V.a,className:B.a.userPhoto}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Follow"))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status)),a.a.createElement("span",null,a.a.createElement("div",null,"user.location.country"),a.a.createElement("div",null,"user.location.city"))))},X=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,o=e.pageSize,c=e.users,u=Object(A.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize","users"]);return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(H,{currentPage:t,onPageChanged:n,totalItemsCount:r,pageSize:o})),a.a.createElement("div",null,c.map((function(e){return a.a.createElement(Y,{user:e,key:e.id,followingInProgress:u.followingInProgress,unfollow:u.unfollow,follow:u.follow})}))))},Z=n(72),J=n(9),K=n(136),$=Object(K.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Q=function(e){return e.usersPage.pageSize},ee=function(e){return e.usersPage.totalUsersCount},te=function(e){return e.usersPage.currentPage},ne=function(e){return e.usersPage.isFetching},re=function(e){return e.usersPage.followingInProgress},ae=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(Z.a,null):null,a.a.createElement(X,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(a.a.Component),oe=Object(J.compose)(Object(b.b)((function(e){return{users:$(e),pageSize:Q(e),totalUsersCount:ee(e),currentPage:te(e),isFetching:ne(e),followingInProgress:re(e)}}),{follow:function(e){return function(){var t=Object(S.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:L(n,e,P.d.follow.bind(P.d),k);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(S.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:L(n,e,P.d.unfollow.bind(P.d),U);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:T,toggleFollowingProgress:I,requestUsers:function(e,t){return function(){var n=Object(S.a)(w.a.mark((function n(r){var a;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(N(!0)),r(T(e)),n.next=4,P.d.getUsers(e,t);case 4:a=n.sent,r(N(!1)),r({type:"SET_USERS",users:a.items}),r({type:"SET_TOTAL_USERS_COUNT",count:a.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ae),ce=n(91),ue=n.n(ce),ie=function(e){return a.a.createElement("header",{className:ue.a.header},a.a.createElement("img",{src:"https://www.freelogodesign.org/Content/img/logo-samples/celtica.png"}),a.a.createElement("div",{className:ue.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login," - ",a.a.createElement("button",{onClick:e.logout},"Log out")):a.a.createElement(d.b,{to:"/login"},"Login")))},se=n(30),le="samurai_network/auth/SET_USER_DATA",fe={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},pe=function(e,t,n,r){return{type:le,payload:{userId:e,email:t,login:n,isAuth:r}}},de=function(e){return{type:"samurai_network/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},me=function(){return function(){var e=Object(S.a)(w.a.mark((function e(t){var n,r,a,o,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,o=r.email,c=r.login,t(pe(a,o,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ge=function(){return function(){var e=Object(S.a)(w.a.mark((function e(t){var n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(de(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le:case"samurai_network/auth/GET_CAPTCHA_URL_SUCCESS":return Object(j.a)(Object(j.a)({},e),t.payload);default:return e}},Ee=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(ie,this.props)}}]),n}(a.a.Component),ve=Object(b.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(S.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.logout();case 2:0===e.sent.data.resultCode&&t(pe(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ee),be=n(129),Oe=n(25),we=n(64),Se=n(138),_e=n.n(Se),je=Object(be.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return a.a.createElement("form",{onSubmit:t},Object(Oe.c)("Email","email",[we.b],Oe.a),Object(Oe.c)("Password","password",[we.b],Oe.a,{type:"password"}),Object(Oe.c)(null,"rememberMe",[],Oe.a,{type:"checkbox"},"remember me"),r&&a.a.createElement("img",{src:r}),r&&Object(Oe.c)("Symbols from image","captcha",[we.b],Oe.a,{}),n&&a.a.createElement("div",{className:_e.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))})),Pe=Object(b.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var a=Object(S.a)(w.a.mark((function a(o){var c,u;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,P.a.login(e,t,n,r);case 2:0===(c=a.sent).data.resultCode?o(me()):(10===c.data.resultCode&&o(ge()),u=c.data.messages.length>0?c.data.messages[0]:"Some error",o(Object(se.a)("login",{_error:u})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(g.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(je,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))})),Ce={initialized:!1},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{initialized:!0});default:return e}},ke=n(95),Ue=n(128),Te={},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te;return e},Ie=n(139),Le=n(130),xe=n(9),Ae=xe.createStore,Fe=xe.combineReducers,De=xe.applyMiddleware,Re=xe.compose,ze=Ae(Fe({profilePage:ke.b,dialogsPage:Ue.a,sidebar:Ne,usersPage:x,auth:he,form:Le.a,app:ye}),(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Re)(De(Ie.a)));window.__store__=ze;var Ge=ze,Me=function(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(e,t))}},He=a.a.lazy((function(){return n.e(4).then(n.bind(null,297))})),We=a.a.lazy((function(){return n.e(3).then(n.bind(null,296))})),Be=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e){alert("Some error occured"),console.error(e)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(ve,null),a.a.createElement(m,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(g.d,null,a.a.createElement(g.b,{exact:!0,path:"/",render:function(){return a.a.createElement(g.a,{to:"/profile"})}}),a.a.createElement(g.b,{path:"/dialogs",render:Me(He)}),a.a.createElement(g.b,{path:"/profile/:userId?",render:Me(We)}),a.a.createElement(g.b,{path:"/news",component:h}),a.a.createElement(g.b,{path:"/music",component:E}),a.a.createElement(g.b,{path:"/settings",component:v}),a.a.createElement(g.b,{path:"/users",render:function(){return a.a.createElement(oe,null)}}),a.a.createElement(g.b,{path:"/login",render:function(){return a.a.createElement(Pe,null)}}),a.a.createElement(g.b,{path:"*",render:function(){return a.a.createElement("div",null,"404 NOT FOUND")}}))))}}]),n}(r.Component),qe=Object(J.compose)(Object(g.g)(Object(b.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(me()).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}})(Be))),Ve=function(e){return a.a.createElement(d.a,null,a.a.createElement(b.a,{store:Ge},a.a.createElement(qe,null)))};c.a.render(a.a.createElement(Ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},68:function(e,t,n){e.exports={paginator:"Paginator_paginator__1HFKq",pageNumber:"Paginator_pageNumber__rA1oZ",selectedPage:"Paginator_selectedPage__3SzDk"}},72:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(135),c=n.n(o);t.a=function(e){return a.a.createElement("div",null,a.a.createElement("img",{src:c.a}))}},91:function(e,t,n){e.exports={header:"Header_header__3udyE",loginBlock:"Header_loginBlock__2Lh5Y"}},92:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1D47o",error:"FormsControls_error__NkXo5"}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return E}));var r=n(7),a=n.n(r),o=n(13),c=n(43),u=n(4),i=n(30),s=n(11),l={posts:[{id:1,message:"It's my first post",likesCount:12},{id:2,message:"Hi, how are you?",likesCount:11}],profile:null,status:""},f=function(e){return{type:"ADD_POST",newPostText:e}},p=function(e){return{type:"SET_STATUS",status:e}},d=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.d.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:r.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n,r){var o,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r().auth.userId,t.next=3,s.b.saveProfile(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=8;break}n(d(o)),t.next=10;break;case 8:return n(Object(i.a)("edit-profile",{_error:c.data.messages[0]})),t.abrupt("return",Promise.reject(c.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case"SET_USER_PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case"DELETE_POST":return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case"SAVE_PHOTO_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[165,1,2]]]);
//# sourceMappingURL=main.bb51a815.chunk.js.map