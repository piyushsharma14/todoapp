(this.webpackJsonptodoist=this.webpackJsonptodoist||[]).push([[0],{153:function(e,t,n){},182:function(e,t){},184:function(e,t){},195:function(e,t){},197:function(e,t){},224:function(e,t){},226:function(e,t){},227:function(e,t){},232:function(e,t){},234:function(e,t){},253:function(e,t){},265:function(e,t){},268:function(e,t){},294:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),s=n(51),i=n.n(s),r=(n(153),n(34)),l=n(13),o=n(6),j=(n(54),n(2)),u=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("label",{htmlFor:"input",className:"itemlabel",children:["Enter Item"," "]}),Object(j.jsx)("input",{className:"item",value:e.input1,id:"input",onChange:e.input2,autoFocus:!0}),Object(j.jsx)("div",{children:function(e){if(e)return Object(j.jsx)("h3",{style:{color:"rgb(12, 74, 85)",fontFamily:"Segoe UI"},children:"Loading..."})}(e.input3)})]})},d=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{className:"heading",children:"TO DO LIST"}),Object(j.jsx)(u,{input1:e.data,input2:e.value,input3:e.loading})]})},b=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"btn Addbutton",onClick:e.data,children:"ADD"})})},O=n(25),h=n(43),p=n(63);n(159);p.a.initializeApp({apiKey:"AIzaSyDKmTSmppmh4BQXkHGULE1AO9-KVM8N1KE",authDomain:"todo-list-64f41.firebaseapp.com",databaseURL:"https://todo-list-64f41-default-rtdb.firebaseio.com",projectId:"todo-list-64f41",storageBucket:"todo-list-64f41.appspot.com",messagingSenderId:"818887880165",appId:"1:818887880165:web:fb724d62cd10731632530c"});var m=p.a,x=p.a.storage(),f=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!0),i=Object(o.a)(s,2),r=i[0],j=i[1],u=Object(l.g)();return Object(a.useEffect)((function(){if(!window.localStorage.getItem("Info"))return u.push("/");j(!0),m.database().ref("TODO").on("value",(function(e){var t=e.val(),n=[];for(var a in t)t[a].Infoid===JSON.parse(Object(window.localStorage.getItem("Info"))).id&&n.push(Object(h.a)({id:a},t[a]));c(n),j(!1)}))}),[u]),[JSON.parse(JSON.stringify(n)),r]},g=n(146),v=n.n(g),S=n(41),N=function(){var e=JSON.parse(Object(window.localStorage.getItem("Info"))).id,t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),r=Object(o.a)(i,2),u=r[0],d=r[1],b=Object(a.useState)(""),h=Object(o.a)(b,2),p=h[0],f=h[1],g=Object(a.useState)(""),v=Object(o.a)(g,2),N=v[0],y=v[1],w=Object(a.useState)(""),C=Object(o.a)(w,2),I=C[0],L=C[1],E=Object(a.useState)(""),U=Object(o.a)(E,2),D=U[0],R=U[1],k=Object(a.useState)(!1),T=Object(o.a)(k,2),P=T[0],q=T[1],F=Object(a.useState)(null),_=Object(o.a)(F,2),A=_[0],J=_[1],M=Object(a.useState)(!1),X=Object(o.a)(M,2),B=X[0],K=X[1],V=Object(S.c)((function(e){return e.Fetch}));window.localStorage.getItem("Info")||l.a;return Object(j.jsx)(j.Fragment,{children:V?Object(j.jsxs)("div",{className:"Detailsdiv",children:[Object(j.jsxs)("div",{className:"Deatilsimage",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:V[0].Imageurl,alt:"UserImage",width:"170",height:"170"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{title:"Upload",htmlFor:"image",children:Object(j.jsx)("span",{children:Object(j.jsx)(O.e,{})})}),Object(j.jsx)("input",{id:"image",type:"file",accept:"image/*",onChange:function(e){!function(e){var t=new FileReader,n=e.target.files[0];n?(t.onload=function(){2===t.readyState&&J(n)},t.readAsDataURL(e.target.files[0]),K(!0)):J(null)}(e)}}),B?Object(j.jsx)("button",{className:"Uploadbutton",onClick:function(){if(A){var t=x.ref().child(A.name);t.put(A),t.getDownloadURL().then((function(t){alert("Image uploaded successfully to Firebase."),m.database().ref("User").child(e).update({Imageurl:t}),K(!1)}))}else alert("Please upload an image first."),K(!1)},children:"Upload"}):null,B?null:Object(j.jsx)("button",{className:"Uploadbutton",title:"Remove",onClick:function(){m.database().ref("User").child(e).update({Imageurl:"https://www.computerhope.com/jargon/g/guest-user.jpg"})},children:Object(j.jsx)(O.a,{})})]})]}),Object(j.jsxs)("div",{className:"Ratingheading",children:[Object(j.jsx)("h5",{children:"YOUR RATING"}),Object(j.jsx)("h5",{children:"ACTIVITY"})]}),Object(j.jsxs)("div",{className:"Ratingvalue",children:[Object(j.jsx)("h5",{children:" 54%"}),Object(j.jsx)("h5",{children:"93%"})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"Detailsname",children:[P?Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:"Nameinput",type:"text",value:u,onChange:function(e){return d(e.target.value)},required:!0})}):Object(j.jsxs)("h3",{style:{marginLeft:"20px"},children:[" ",V[0].Name]}),P?Object(j.jsxs)("button",{onClick:function(){m.database().ref("User").child(e).update({Country:I,email:c,City:p,Name:u,State:N,Phone:D}),q(!1)},children:[Object(j.jsx)("span",{children:Object(j.jsx)(O.c,{})}),"Save"]}):Object(j.jsxs)("button",{onClick:function(){q(!0),s(V[0].email),d(V[0].Name),f(V[0].City),L(V[0].Country),y(V[0].State),R(V[0].Phone)},children:[Object(j.jsx)("span",{children:Object(j.jsx)(O.c,{})}),"EDIT"]})]}),Object(j.jsxs)("h5",{className:"Namedetails",children:[V[0].City,", ",V[0].State]}),Object(j.jsxs)("div",{className:"Details",children:[Object(j.jsxs)("div",{style:{marginTop:"13px"},children:[Object(j.jsx)("h4",{children:"Email"}),P?Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:"Emailinput",style:{marginLeft:"35px"},type:"email",value:c,onChange:function(e){return f(e.target.value)},required:!0})}):Object(j.jsxs)("h5",{style:{marginLeft:"35px"},children:[" ",V[0].email]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"City"}),P?Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:"Cityinput",style:{marginLeft:"45px"},type:"text",value:p,onChange:function(e){return f(e.target.value)},required:!0})}):Object(j.jsxs)("h5",{style:{marginLeft:"45px"},children:[" ",V[0].City]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"State"}),P?Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:"Stateinput",style:{marginLeft:"37px"},type:"text",value:N,onChange:function(e){return y(e.target.value)},required:!0})}):Object(j.jsxs)("h5",{style:{marginLeft:"37px"},children:[" ",V[0].State]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Country"}),P?Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:"Countryinput",style:{marginLeft:"18px"},type:"text",value:I,onChange:function(e){return L(e.target.value)},required:!0})}):Object(j.jsxs)("h5",{style:{marginLeft:"18px"},children:[" ",V[0].Country]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Phone"}),P?Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:"Phoneinput",style:{marginLeft:"28px"},type:"text",value:D,onChange:function(e){return R(e.target.value)},required:!0})}):Object(j.jsxs)("h5",{style:{marginLeft:"28px"},children:[" ",V[0].Phone]})]})]})]})]}):Object(j.jsx)("h2",{children:"Loading..."})})},y="Fetching_User_Data",w=function(e){return{type:y,Userdata:e}},C=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(S.b)();return Object(a.useEffect)((function(){m.database().ref("User").on("value",(function(e){var t=e.val(),n=[];if(window.localStorage.getItem("Info")){for(var a in t)a===JSON.parse(Object(window.localStorage.getItem("Info"))).id&&n.push({id:a,email:String(t[a].email),password:String(t[a].password),Name:String(t[a].Name),City:String(t[a].City),State:String(t[a].State),Country:String(t[a].Country),Phone:String(t[a].Phone),Imageurl:String(t[a].Imageurl)});c(n),s(w(n))}}))}),[s]),n},I=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!0),i=Object(o.a)(s,2),r=i[0],u=i[1],h=Object(a.useState)(""),p=Object(o.a)(h,2),x=p[0],g=p[1],S=Object(a.useState)(!1),y=Object(o.a)(S,2),w=y[0],I=y[1],L=(C(),Object(a.useState)(!1)),E=Object(o.a)(L,2),U=E[0],D=E[1],R=Object(l.g)(),k=f(),T=Object(o.a)(k,2),P=T[0],q=T[1];var F=function(){if(n)if(n&&!r){m.database().ref("TODO").child(x).update({name:n}),u(!0),c(""),g("")}else{var e=m.database().ref("TODO"),t=window.localStorage.getItem("Info"),a={Infoid:JSON.parse(Object(t)).id,name:n,done:!1};e.push(a),c("")}else alert("Please Fill The Data")};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(v.a,{isOpen:w,className:"Modelview",children:Object(j.jsxs)("div",{className:"Modeldiv",children:[Object(j.jsx)("button",{className:"Modelbutton",onClick:function(){I(!1)},children:"x"}),Object(j.jsx)(N,{})]})}),Object(j.jsx)("div",{className:"profilediv",children:Object(j.jsx)("button",{className:"profilebutton",onClick:function(){I(!0)},children:"User"})}),Object(j.jsx)("div",{className:"Logoutdiv",children:Object(j.jsx)("button",{className:"Logoutbutton",onClick:function(){R.push("/todoapp/"),window.localStorage.removeItem("Info")},children:"Logout"})}),Object(j.jsxs)("div",{className:"Divbody",children:[Object(j.jsx)(d,{data:n,value:function(e){c(e.target.value)},loading:q}),Object(j.jsx)("div",{children:P.map((function(e,t){return Object(j.jsx)("div",{className:"".concat(U?"animate":"Itemscard"),onAnimationEnd:function(){return D(!1)},children:Object(j.jsxs)("div",{className:"Showmain",children:[Object(j.jsx)("div",{className:"Show1",children:Object(j.jsx)("input",{type:"checkbox",onClick:function(){return t=e,void m.database().ref("TODO").child(t.id).update({done:!t.done});var t}})}),Object(j.jsx)("div",{className:"Show2",children:Object(j.jsx)("h3",{style:{textDecoration:e.done?"line-through":"none"},children:e.name})}),Object(j.jsx)("div",{className:"Show3",children:Object(j.jsx)("span",{title:"Delete Item",onClick:function(){D(!0),setTimeout((function(){return function(e){m.database().ref("TODO").child(e.id).remove()}(e)}),1e3)},children:Object(j.jsx)(O.b,{})})}),Object(j.jsx)("div",{className:"Show4",children:Object(j.jsx)("span",{title:"Edit Item",onClick:function(){return function(e){var t=P.find((function(t){return t.id===e}));u(!1),c(t.name),g(e)}(e.id)},children:Object(j.jsx)(O.c,{})})})]},t)})}))}),r?Object(j.jsx)(b,{data:F}):Object(j.jsx)("button",{className:"btn",onClick:F,children:"Edit"})]})]})},L=n(42),E=n.n(L),U=n(61),D=n(53),R=!1,k=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),i=Object(o.a)(s,2),r=i[0],u=i[1],d=Object(a.useState)(null),b=Object(o.a)(d,2),h=b[0],p=b[1],m=Object(a.useState)([]),x=Object(o.a)(m,2),f=x[0],g=x[1],v=Object(l.g)();return Object(a.useEffect)((function(){R=!1,function(){var e=Object(U.a)(E.a.mark((function e(){var t,n,a,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://todo-list-64f41-default-rtdb.firebaseio.com/User.json");case 2:return t=e.sent,e.next=5,t.json();case 5:for(c in n=e.sent,a=[],n)a.push({id:c,email:String(n[c].email),password:String(n[c].password)});g(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(j.jsx)("div",{className:"Loginmain",children:Object(j.jsx)("div",{className:"overlay",children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f.map((function(e){var t=D.AES.decrypt(e.password,"Secret Passphrase");return e.email===n&&t.toString(D.enc.Utf8)===r&&(R=!0,v.push("/todoapp/status/"),window.localStorage.setItem("Info",JSON.stringify(e))),null})),R||p("Wrong User Id and Password")},children:[Object(j.jsx)("div",{className:"con",children:Object(j.jsxs)("header",{className:"head-form",children:[Object(j.jsx)("h2",{children:"Log In"}),Object(j.jsx)("p",{children:"login here using your Email Id and password"})]})}),Object(j.jsxs)("div",{className:"field-set",children:[Object(j.jsx)("span",{className:"input-item",children:Object(j.jsx)("i",{style:{marginLeft:"15px"},children:Object(j.jsx)(O.f,{})})}),Object(j.jsx)("input",{className:"form-input",id:"txt-input",type:"email",placeholder:"@Useremail",value:n,onChange:function(e){c(e.target.value),p(null)},required:!0}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:"input-item",children:Object(j.jsx)("i",{style:{marginLeft:"15px"},children:Object(j.jsx)(O.d,{})})}),Object(j.jsx)("input",{className:"form-input",type:"password",placeholder:"Password",id:"pwd",name:"password",value:r,onChange:function(e){u(e.target.value),p(null)},required:!0}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"log-in",type:"submit",children:"Login"})]}),Object(j.jsx)("div",{className:"other",children:Object(j.jsx)("button",{className:"btn submits sign-up log-in",onClick:function(){v.push("/todoapp/register/")},children:"Register"})}),R?Object(j.jsx)("div",{}):Object(j.jsx)("div",{className:"Errorkdiv",children:Object(j.jsx)("h2",{className:"Errorheading",children:h})})]})})})},T=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(U.a)(E.a.mark((function e(){var t,n,a,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://todo-list-64f41-default-rtdb.firebaseio.com/User.json");case 2:return t=e.sent,e.next=5,t.json();case 5:for(s in n=e.sent,a=[],n)a.push({id:s,email:String(n[s].email),password:String(n[s].password)});c(a),console.log("RegisterUserList",a);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),JSON.parse(JSON.stringify(n))},P=Object(l.h)((function(){var e=T(),t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),r=Object(o.a)(i,2),u=r[0],d=r[1],b=Object(a.useState)(""),O=Object(o.a)(b,2),h=O[0],p=O[1],x=Object(a.useState)(""),f=Object(o.a)(x,2),g=f[0],v=f[1],S=Object(a.useState)(""),N=Object(o.a)(S,2),y=N[0],w=N[1],C=Object(a.useState)(""),I=Object(o.a)(C,2),L=I[0],E=I[1],U=Object(a.useState)(""),R=Object(o.a)(U,2),k=R[0],P=R[1],q=Object(a.useState)(""),F=Object(o.a)(q,2),_=F[0],A=F[1],J=Object(a.useState)(!1),M=Object(o.a)(J,2),X=M[0],B=M[1],K=Object(a.useState)(""),V=Object(o.a)(K,2),z=V[0],G=V[1],Y=Object(l.g)();return Object(j.jsx)("div",{className:"Registermain",children:Object(j.jsx)("div",{className:"Registeroverlay",children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=!0;if(e.map((function(e){return String(e.email)===c?(n=!1,G("User already exist!")):0})),!0===n)if(u!==h)G("Password dose not match");else{var a=m.database().ref("User"),i=D.AES.encrypt(u,"Secret Passphrase"),r={Name:g,email:c,password:i.toString(),City:y,State:L,Country:k,Phone:_,Imageurl:"https://www.computerhope.com/jargon/g/guest-user.jpg"};a.push(r),B(!0),s(""),d(""),p(""),w(""),P(""),v(""),A(""),E(""),G("User created! Click on Login")}},children:[Object(j.jsx)("div",{className:"Registerheading",children:Object(j.jsx)("h2",{children:"Registration"})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:"Registerinput1",type:"text",name:"Name",placeholder:" Name",value:g,onChange:function(e){v(e.target.value),G(null)},required:!0})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:"Registerinput2",type:"email",name:"email",placeholder:"User E-mail",value:c,onChange:function(e){s(e.target.value),G(null)},required:!0})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:"Registerinput3",type:"password",name:"password",placeholder:" Password",value:u,onChange:function(e){d(e.target.value),G(null)},required:!0})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:"Registerinput4",type:"password",name:"cpassword",placeholder:" Confirm Password",value:h,onChange:function(e){p(e.target.value),G(null)},required:!0})}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:"Registerinput5",type:"text",name:"city",value:y,placeholder:" City",onChange:function(e){w(e.target.value),G(null)},required:!0})}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:"Registerinput6",type:"text",name:"state",placeholder:" State",value:L,onChange:function(e){E(e.target.value),G(null)},required:!0})}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:"Registerinput7",type:"text",name:"country",value:k,placeholder:" Country",onChange:function(e){P(e.target.value),G(null)},required:!0})}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:"Registerinput8",type:"number",name:"phone",value:_,placeholder:" Phone Number",onChange:function(e){A(e.target.value),G(null)},required:!0})}),Object(j.jsxs)("div",{className:"Registerbuttondiv",children:[X?function(){Y.push("/todoapp")}:Object(j.jsx)("button",{className:"Registerbutton",type:"submit",children:"Signup"}),Object(j.jsx)("button",{type:"button",className:"Registerloginbutton",onClick:function(){Y.push("/todoapp")},children:"Login"})]}),X?Object(j.jsx)("div",{className:"Errorkdiv1",children:Object(j.jsx)("h3",{className:"Errorheading1",children:z})}):Object(j.jsx)("div",{className:"Errorkdiv",children:Object(j.jsx)("h3",{className:"Errorheading",children:z})})]})})})})),q=n(148),F=["component"],_=function(e){var t=e.component,n=Object(q.a)(e,F),a=localStorage.getItem("Info");return Object(j.jsx)(l.b,Object(h.a)(Object(h.a)({},n),{},{render:function(e){return a?Object(j.jsx)("div",{children:Object(j.jsx)(t,Object(h.a)({},e))}):Object(j.jsx)(l.a,{to:{pathname:"/todoapp/",state:{from:e.location}}})}}))};var A=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(r.a,{children:Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{exact:!0,path:"/todoapp/",component:k}),Object(j.jsx)(l.b,{exact:!0,path:"/todoapp/register/",component:P}),Object(j.jsx)(_,{exact:!0,path:"/todoapp/status/",component:I})]})})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,295)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))},M=n(62),X=[],B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return t.Userdata;default:return e}},K=Object(M.a)({Fetch:B}),V=Object(M.b)(K,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());V.subscribe((function(){return V.getState()})),i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(S.a,{store:V,children:Object(j.jsx)(A,{})})}),document.getElementById("root")),J()},54:function(e,t,n){}},[[294,1,2]]]);
//# sourceMappingURL=main.d413d448.chunk.js.map