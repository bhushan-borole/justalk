(this["webpackJsonpreact-chat-app"]=this["webpackJsonpreact-chat-app"]||[]).push([[0],{42:function(t,e,n){},52:function(t,e,n){},53:function(t,e,n){"use strict";n.r(e);var a=n(4),c=n.n(a),r=n(32),s=n.n(r),i=(n(42),n(17)),o=n(20),l=n(29),u=n(8),b=n(12),j=n(24);j.a.initializeApp({apiKey:"AIzaSyCydzw3BRykkSMEI5Nh2MXjSF_VzIygRcA",authDomain:"justalk-43797.firebaseapp.com",projectId:"justalk-43797",storageBucket:"justalk-43797.appspot.com",messagingSenderId:"986737659328",appId:"1:986737659328:web:ca92b26f3916cf82d84c25",databaseURL:"https://justalk-43797-default-rtdb.firebaseio.com/"});var h=j.a.auth,p=j.a.database(),d=n(2);var m=function(){return Object(d.jsx)("header",{children:Object(d.jsxs)("nav",{className:"navbar navbar-expand-sm fixed-top navbar-light",style:{zIndex:"1"},children:[Object(d.jsx)(b.b,{className:"navbar-brand",to:"/",style:{color:"#fff"},children:"Justalk"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup",children:h().currentUser?Object(d.jsx)("div",{className:"navbar-nav",children:Object(d.jsx)("button",{className:"btn btn-primary mr-3",onClick:function(){return h().signOut()},children:"Logout"})}):Object(d.jsxs)("div",{className:"navbar-nav",children:[Object(d.jsx)(b.b,{className:"nav-item nav-link mr-3",to:"/login",style:{color:"#74808a"},children:"Sign In"}),Object(d.jsx)(b.b,{className:"nav-item nav-link mr-3",to:"/signup",style:{color:"#74808a"},children:"Sign Up"})]})})]})})};var f=function(){return Object(d.jsx)("div",{className:"home",children:Object(d.jsx)("section",{children:Object(d.jsx)("div",{className:"jumbotron jumbotron-fluid py-5",style:{background:"rgba(46, 45, 43, 1)"},children:Object(d.jsxs)("div",{className:"container text-center py-5",children:[Object(d.jsx)("h1",{className:"display-4",style:{color:"#fff"},children:"Welcome to Justalk"}),Object(d.jsx)("p",{className:"lead",style:{color:"#74808a"},children:"A great place to share your thoughts with friends"}),Object(d.jsxs)("div",{className:"mt-4",children:[Object(d.jsx)(b.b,{className:"btn btn-primary px-5 mr-3",to:"/signup",children:"Create New Account"}),Object(d.jsx)(b.b,{className:"btn btn-secondary px-5",to:"/login",children:"Login to Your Account"})]})]})})})})},x=n(10),O=n.n(x),v=n(16),g=n(34),y=n(35),N=n(22),k=n(37),w=n(36),S=function(t){Object(k.a)(n,t);var e=Object(w.a)(n);function n(t){var a;return Object(g.a)(this,n),(a=e.call(this,t)).state={user:h().currentUser,chats:[],content:"",readError:null,writeError:null,loadingChats:!1},a.handleChange=a.handleChange.bind(Object(N.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(N.a)(a)),a.myRef=c.a.createRef(),a}return Object(y.a)(n,[{key:"componentDidMount",value:function(){var t=Object(v.a)(O.a.mark((function t(){var e,n=this;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({readError:null,loadingChats:!0}),e=this.myRef.current;try{p.ref("chats").on("value",(function(t){var a=[];t.forEach((function(t){a.push(t.val())})),a.sort((function(t,e){return t.timestamp-e.timestamp})),n.setState({chats:a}),e.scrollBy(0,e.scrollHeight),n.setState({loadingChats:!1})}))}catch(a){this.setState({readError:a.message,loadingChats:!1})}case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"handleChange",value:function(t){this.setState({content:t.target.value})}},{key:"handleSubmit",value:function(){var t=Object(v.a)(O.a.mark((function t(e){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),this.setState({writeError:null}),n=this.myRef.current,t.prev=3,t.next=6,p.ref("chats").push({content:this.state.content,timestamp:Date.now(),uid:this.state.user.uid});case 6:this.setState({content:""}),n.scrollBy(0,n.scrollHeight),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),this.setState({writeError:t.t0.message});case 13:case"end":return t.stop()}}),t,this,[[3,10]])})));return function(e){return t.apply(this,arguments)}}()},{key:"formatTime",value:function(t){var e=new Date(t);return"".concat(e.getDate(),"/").concat(e.getMonth()+1,"/").concat(e.getFullYear()," ").concat(e.getHours(),":").concat(e.getMinutes())}},{key:"render",value:function(){var t=this;return Object(d.jsxs)("div",{children:[Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"chat-area",ref:this.myRef,children:[this.state.loadingChats?Object(d.jsx)("div",{className:"spinner-border text-success",role:"status",children:Object(d.jsx)("span",{className:"sr-only",children:"Loading..."})}):"",this.state.chats.map((function(e){return Object(d.jsxs)("p",{className:"chat-bubble "+(t.state.user.uid===e.uid?"current-user":""),children:[e.content,Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"chat-time float-right",children:t.formatTime(e.timestamp)})]},e.timestamp)}))]}),Object(d.jsxs)("form",{onSubmit:this.handleSubmit,className:"mx-3",style:{textAlign:"center"},children:[Object(d.jsx)("br",{}),Object(d.jsx)("textarea",{className:"form-control",name:"content",onChange:this.handleChange,value:this.state.content,style:{display:"block",marginLeft:"auto",marginRight:"auto"}}),this.state.error?Object(d.jsx)("p",{className:"text-danger",children:this.state.error}):null,Object(d.jsx)("button",{type:"submit",className:"btn btn-submit px-5 mt-4",children:"Send"})]}),Object(d.jsxs)("div",{className:"py-5 mx-3",style:{color:"rgb(116, 128, 138)",textAlign:"center"},children:["Logged in as: ",Object(d.jsx)("strong",{className:"text-info",children:this.state.user.email})]})]})}}]),n}(a.Component);function C(t,e){return h().createUserWithEmailAndPassword(t,e)}function A(t,e){return h().signInWithEmailAndPassword(t,e)}function E(){var t=new h.GoogleAuthProvider;return h().signInWithPopup(t)}function I(){var t=new h.GithubAuthProvider;return h().signInWithPopup(t)}var L=function(){var t=Object(a.useState)(),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(),s=Object(i.a)(r,2),o=s[0],l=s[1],u=Object(a.useState)(null),j=Object(i.a)(u,2),h=j[0],p=j[1],m=function(){var t=Object(v.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),p(""),t.prev=2,t.next=5,C(n,o);case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),p(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[2,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(v.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),p(t.t0.message);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(v.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),p(t.t0.message);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("form",{className:"mt-5 py-5 px-5",autoComplete:"off",onSubmit:m,children:[Object(d.jsxs)("h1",{style:{color:"#74808a"},children:["Sign Up to",Object(d.jsx)(b.b,{className:"title ml-2",to:"/",children:"Justalk"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{className:"form-control",placeholder:"Email",name:"email",type:"email",onChange:function(t){return c(t.target.value)},value:n})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{className:"form-control",placeholder:"Password",name:"password",onChange:function(t){return l(t.target.value)},value:o,type:"password"})}),Object(d.jsxs)("div",{className:"form-group",children:[h?Object(d.jsx)("p",{children:h}):null,Object(d.jsx)("button",{className:"btn btn-primary px-5",type:"submit",children:"Sign up"})]}),Object(d.jsx)("p",{style:{color:"rgb(116, 128, 138)"},children:"You can also sign up with any of these services"}),Object(d.jsx)("button",{className:"btn btn-danger mr-2",type:"button",onClick:x,children:"Sign up with Google"}),Object(d.jsx)("button",{className:"btn btn-secondary",type:"button",onClick:f,children:"Sign up with GitHub"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("p",{style:{color:"rgb(116, 128, 138)"},children:["Already have an account? ",Object(d.jsx)(b.b,{to:"/login",children:"Login"})]})]})})};var D=function(){var t=Object(a.useState)(),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(),s=Object(i.a)(r,2),o=s[0],l=s[1],u=Object(a.useState)(null),j=Object(i.a)(u,2),h=j[0],p=j[1],m=function(){var t=Object(v.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),p(""),t.prev=2,t.next=5,A(n,o);case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),p(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[2,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(v.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),p(t.t0.message);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(v.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),p(t.t0.message);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("form",{className:"mt-5 py-5 px-5",autoComplete:"off",onSubmit:m,children:[Object(d.jsxs)("h1",{style:{color:"#74808a"},children:["Login to",Object(d.jsx)(b.b,{className:"title ml-2",to:"/",children:"Justalk"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{className:"form-control",placeholder:"Email",name:"email",type:"email",onChange:function(t){return c(t.target.value)},value:n})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{className:"form-control",placeholder:"Password",name:"password",onChange:function(t){return l(t.target.value)},value:o,type:"password"})}),Object(d.jsxs)("div",{className:"form-group",children:[h?Object(d.jsx)("p",{className:"text-danger",children:h}):null,Object(d.jsx)("button",{className:"btn btn-primary px-5",type:"submit",children:"Login"})]}),Object(d.jsx)("p",{style:{color:"rgb(116, 128, 138)"},children:"You can also log in with any of these services"}),Object(d.jsx)("button",{className:"btn btn-danger mr-2",type:"button",onClick:x,children:"Sign in with Google"}),Object(d.jsx)("button",{className:"btn btn-secondary",type:"button",onClick:f,children:"Sign in with GitHub"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("p",{style:{color:"rgb(116, 128, 138)"},children:["Don't have an account? ",Object(d.jsx)(b.b,{to:"/signup",children:"Sign up"})]})]})})};n(52);function P(t){var e=t.component,n=t.authenticated,a=Object(l.a)(t,["component","authenticated"]);return Object(d.jsx)(u.b,Object(o.a)(Object(o.a)({},a),{},{render:function(t){return!0===n?Object(d.jsx)(e,Object(o.a)({},t)):Object(d.jsx)(u.a,{to:{pathname:"/login",state:{from:t.location}}})}}))}function M(t){var e=t.component,n=t.authenticated,a=Object(l.a)(t,["component","authenticated"]);return Object(d.jsx)(u.b,Object(o.a)(Object(o.a)({},a),{},{render:function(t){return!0===n?Object(d.jsx)(u.a,{to:"/chat"}):Object(d.jsx)(e,Object(o.a)({},t))}}))}var R=function(){var t=Object(a.useState)(!1),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(!0),s=Object(i.a)(r,2),o=s[0],l=s[1];return Object(a.useEffect)((function(){h().onAuthStateChanged((function(t){t?(c(!0),l(!1)):(c(!1),l(!1))}))})),!0===o?Object(d.jsx)("h2",{children:"Loading..."}):Object(d.jsxs)(b.a,{children:[Object(d.jsx)(m,{}),Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{exact:!0,path:"/",component:f}),Object(d.jsx)(P,{path:"/chat",authenticated:n,component:S}),Object(d.jsx)(M,{path:"/signup",authenticated:n,component:L}),Object(d.jsx)(M,{path:"/login",authenticated:n,component:D})]})]})},B=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(R,{})}),document.getElementById("root")),B()}},[[53,1,2]]]);
//# sourceMappingURL=main.48079fbc.chunk.js.map