(this.webpackJsonpmenuapp=this.webpackJsonpmenuapp||[]).push([[0],{104:function(e,a,t){e.exports=t(172)},109:function(e,a,t){},110:function(e,a,t){},172:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),s=t.n(l),o=(t(109),t(17)),c=t(18),m=t(20),i=t(19),u=(t(110),t(173)),d=t(174),E=t(175),h=t(176),f=t(177),p=t(178),g=t(8),b=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary ml-auto"}),r.a.createElement("p",null,"Loading . . ."))},N="http://localhost:3001/";function v(e){var a=e.dish;return r.a.createElement(g.b,{to:"/menu/".concat(a.id)},r.a.createElement(u.a,null,r.a.createElement(d.a,{width:"100%",src:N+a.image,alt:a.name}),r.a.createElement(E.a,null,r.a.createElement(h.a,null,a.name))))}var y=function(e){var a=e.dishes.dishes.map((function(a){return r.a.createElement("div",{key:a.id,className:"col-12 col-md-5 m-1"},r.a.createElement(v,{dish:a,onClick:e.onClick}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):e.dishes.errMess?(console.log("Failed bruh"),console.log(e.errMess),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(p.a,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},a))},w=t(7),O=t(179),M=t(202),k=t(180),L=t(181),S=t(182),D=t(183),C=t(184),j=t(185),F=t(186),x=t(10),A=t(26),I=function(e){return e&&e.length},T=function(e){return function(a){return!a||a.length<=e}},R=function(e){return function(a){return a&&a.length>=e}},_=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={isOpen:!1,isModalOpen:!1},n.toggleOpen=n.toggleOpen.bind(Object(w.a)(n)),n.toggleModal=n.toggleModal.bind(Object(w.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(w.a)(n)),n}return Object(c.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"toggleOpen",value:function(){this.setState({isOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){console.log("Current state"+JSON.stringify(e)),this.toggleModal(),this.props.postComment(this.props.dishID,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(O.a,{className:"fa fa-pencil bg-primary",ariaHidden:"true",onClick:this.toggleModal}," Submit Comment"),r.a.createElement(M.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,closeButton:"true"},r.a.createElement(k.a,null,"Make A Comment"),r.a.createElement(L.a,null,r.a.createElement(x.LocalForm,{onSubmit:function(a){e.handleSubmit(a)}},r.a.createElement(S.a,{className:"form-group"},r.a.createElement(D.a,{forHtml:"rating",md:3},"Rating :"),r.a.createElement(C.a,{md:12},r.a.createElement(x.Control.select,{model:".rating",name:"rating",className:"form-control",validators:{required:I}},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")),r.a.createElement(x.Errors,{className:"text-danger",model:".rating",show:"touched",messages:{required:" Please select a rating between 1 - 5 "}}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(D.a,{forHtml:"author",md:3},"Your Name : "),r.a.createElement(C.a,{md:12},r.a.createElement(x.Control.text,{model:".author",name:"author",className:"form-control",validators:{required:I,maxlength:T(15),minlength:R(3)}}),r.a.createElement(x.Errors,{model:".author",show:"touched",className:"text-danger",messages:{required:"Please enter your name",maxlength:"Name must not be lesser than 15 characters",minlength:"Name must be longer than 3 characters"}}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(D.a,{forHtml:"comment",md:3},"Comment : "),r.a.createElement(C.a,{md:12},r.a.createElement(x.Control.textarea,{model:".comment",rows:"10",name:"comment",className:"form-control",validators:{required:I,maxlength:T(200),minlength:R(3)}}),r.a.createElement(x.Errors,{className:"text-danger",model:".comment",show:"touched",messages:{required:"Type your comment here",maxlength:"Comment must not be lesser than 200 characters",minlength:"Comment must be longer than 3 characters"}}))),r.a.createElement("br",null),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(C.a,null,r.a.createElement(O.a,{type:"submit",className:"bg-primary"}," Submit Comment ")))))))}}]),t}(n.Component);function P(e){var a=e.dish;return r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(A.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{top:!0,src:N+a.image}),r.a.createElement(j.a,null,r.a.createElement(F.a,null,a.description)))))}function q(e){var a=e.comments,t=e.postComment,n=e.dishID;return null!=a?r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement("h4",null,"Comments"),a.map((function(e){return r.a.createElement("ul",{key:e.id,className:"list-unstyled"},r.a.createElement(A.Stagger,{in:!0},r.a.createElement("li",{className:"mb-2"},e.comment),r.a.createElement(A.Fade,{in:!0},r.a.createElement("li",null,"-- ",e.author," ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))))))})),r.a.createElement(_,{postComment:t,dishID:n})):r.a.createElement("div",null)}var H=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/menu"},"Menu")),r.a.createElement(p.a,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement(P,{dish:e.dish}),r.a.createElement(q,{comments:e.comments,postComment:e.postComment,dishID:e.dish.id}))):r.a.createElement("div",null,r.a.createElement("p",null,"Failing"))},G=t(187),B=t(188),U=t(189),W=t(190),Y=t(191),K=t(192),J=t(193),z=t(194),Z=t(195),$=t(196),V=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={isOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(w.a)(n)),n.toggleModal=n.toggleModal.bind(Object(w.a)(n)),n.handleLogin=n.handleLogin.bind(Object(w.a)(n)),n}return Object(c.a)(t,[{key:"toggleNav",value:function(){this.setState({isOpen:!this.state.isModalOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert(" Username: ".concat(this.username.value," Password: ").concat(this.password.value," Remember: ").concat(this.remember.checked," ")),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{dark:!0,expand:"md"},r.a.createElement(B.a,{className:"ml-5"},r.a.createElement(U.a,{onClick:this.toggleNav}),r.a.createElement(W.a,{className:"mr-auto",href:"/",alt:"BaIG Restaurant"},r.a.createElement("img",{src:"assets/images/logo.png",width:"70",height:"50"}))),r.a.createElement(B.a,{navbar:!0},r.a.createElement(Y.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(K.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"}),"Home")),r.a.createElement(K.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"}),"About Us")),r.a.createElement(K.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"}),"Menu")),r.a.createElement(K.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"}),"Contact Us")))),r.a.createElement(B.a,{className:"ml-auto navbar"},r.a.createElement(K.a,null,r.a.createElement(O.a,{className:"btn btn-primary",onClick:this.toggleModal}," ",r.a.createElement("span",{className:"fa fa-sign-in fa-lg"}),"Login")))),r.a.createElement(J.a,{className:"rang"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"BaIG RESTAURANT"),r.a.createElement("p",null,"We make lip-smacking Hyderabadi food that will leave you licking your fingers"))))),r.a.createElement(M.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(k.a,{toggle:this.toggleModal},"Login"),r.a.createElement(L.a,null,r.a.createElement(z.a,{onSubmit:this.handleLogin},r.a.createElement(Z.a,null,r.a.createElement(D.a,{htmlFor:"username"},"Username"),r.a.createElement($.a,{type:"text",id:"username",name:"username",placeholder:"username",innerRef:function(a){return e.username=a}})),r.a.createElement(Z.a,null,r.a.createElement(D.a,{htmlFor:"password"},"Password"),r.a.createElement($.a,{type:"password",id:"password",name:"password",placeholder:"password",innerRef:function(a){return e.password=a}})),r.a.createElement(Z.a,{check:!0},r.a.createElement(D.a,null,r.a.createElement($.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember Me?")),r.a.createElement(O.a,{type:"submit",value:"submit",className:"bg-primary"},"Login")))))}}]),t}(n.Component);var Q=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/aboutus"},"About")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +91 9618070339 ",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +91 9618070339 ",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},X=t(197);var ee=function(e){function a(e){var a=e.item,t=e.isLoading,n=e.errMess;return t?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):n?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("p",null,n))):r.a.createElement(A.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{src:N+a.image,alt:a.name}),r.a.createElement(j.a,null,r.a.createElement(h.a,null,a.name),a.designation?r.a.createElement(X.a,null,a.designation):null,r.a.createElement(F.a,null,a.description))))}return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(a,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(a,{item:e.promotion,isLoading:e.promosLoading,errMess:e.promosErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(a,{item:e.leader,isLoading:e.leadersLoading,errMess:e.leadersErrMess}))))},ae=t(198),te=t(199);var ne=function(e){var a=function(e){e.key;var a=e.leader;return console.log("rendering leader called"),console.log(a.name),r.a.createElement(ae.a,{className:"mt-5"},r.a.createElement(ae.a,{left:!0,className:"mr-5"},r.a.createElement(ae.a,{object:!0,src:N+a.image,alt:a.name})),r.a.createElement(ae.a,{body:!0},r.a.createElement(ae.a,{heading:!0},a.name),r.a.createElement("p",null,a.designation),a.description))},t=function(t){var n=t.isLoading,l=t.errMess,s=t.leaders;return console.log("leaders in render content"),console.log(s),n?r.a.createElement(b,null):l?r.a.createElement("h4",null,l):r.a.createElement(A.Stagger,{in:!0},e.leaders.leaders.map((function(e){return r.a.createElement(A.Fade,{in:!0,key:e.id},r.a.createElement(a,{key:e.id,leader:e}))})))};return null!=e.leaders?(console.log("props"),console.log(e.leaders),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(p.a,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(u.a,null,r.a.createElement(te.a,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(j.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.a,null,r.a.createElement(j.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(ae.a,{list:!0,style:{marginTop:30}},r.a.createElement(t,{isLoading:e.leaders.isLoading,errMess:e.leaders.errMess,leaders:e.leaders.leaders})))))):r.a.createElement("div",null)},re=t(200),le=t(102),se=t(201),oe=function(e){return e&&e.length},ce=function(e){return function(a){return!a||a.length<=e}},me=function(e){return function(a){return a&&a.length>=e}},ie=function(e){return!isNaN(Number(e))},ue=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,4}$/i.test(e)},de=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(w.a)(n)),n}return Object(c.a)(t,[{key:"handleSubmit",value:function(e){console.log("Current state"+JSON.stringify(e)),alert("Current state"+JSON.stringify(e)),this.props.resetFeedbackForm(),this.props.postFeedback(e.firstname,e.lastname,e.telnum,e.email,e.contactType,e.agree,e.message)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(re.a,null,r.a.createElement(le.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(le.a,null,"Contact Us"))),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null)),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send Us Your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(x.Form,{model:"feedback",onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(S.a,{className:"form-group"},r.a.createElement(D.a,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(se.a,{md:10},r.a.createElement(x.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:oe,minlength:me(3),maxlength:ce(10)}}),r.a.createElement(x.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required    ",minlength:"Must be atleast 3 characters    ",maxlength:"Must be lesser than 10 characters    "}}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(D.a,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(se.a,{md:10},r.a.createElement(x.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:oe,minlength:me(3),maxlength:ce(10)}}),r.a.createElement(x.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required    ",minlength:"Must be atleast 3 characters    ",maxlength:"Must be lesser than 10 characters    "}}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(D.a,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(se.a,{md:10},r.a.createElement(x.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:oe,minlength:me(10),maxlength:ce(12),isNumber:ie}}),r.a.createElement(x.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required    ",minlength:"Must be 10 digits    ",maxlength:"Must be 10 digits    ",isNumber:"Must be a telephone number    "}}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(D.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(se.a,{md:10},r.a.createElement(x.Control.text,{model:".email",id:"email",name:"email",validators:{required:oe,validEmail:ue},placeholder:"Email",className:"form-control"}),r.a.createElement(x.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required    ",validEmail:"Must be a valid email id    "}}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(se.a,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(D.a,{check:!0},r.a.createElement(x.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(se.a,{md:{size:3,offset:1}},r.a.createElement(x.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(D.a,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(se.a,{md:10},r.a.createElement(x.Control.textarea,{model:".message",id:"message",name:"message",placeholder:"Your Feedback here",rows:"12",className:"form-control"}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(se.a,{md:{size:10,offset:2}},r.a.createElement(O.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),t}(n.Component),Ee=t(24),he=function(){return{type:"DISHES_LOADING"}},fe=function(e){return{type:"DISHES_FAILED",payload:e}},pe=function(e){return{type:"ADD_DISHES",payload:e}},ge=function(){return{type:"PROMOS_LOADING"}},be=function(e){return{type:"PROMOS_FAILED",payload:e}},Ne=function(e){return{type:"ADD_PROMOS",payload:e}},ve=function(){return{type:"LEADERS_LOADING"}},ye=function(e){return{type:"LEADERS_FAILED",payload:e}},we=function(e){return{type:"ADD_LEADERS",payload:e}},Oe=t(56),Me=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){return Object(o.a)(this,t),a.call(this,e)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"renderComments",value:function(e){if(null!=e){var a=e.comments.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"-- ",e.author," , ",e.date))}));return r.a.createElement("div",{className:"col-xs-12 col-md-5 m-1"},r.a.createElement("h4",null,"Comments"),r.a.createElement("ul",{className:"list-unstyled"},a))}return r.a.createElement("div",null)}},{key:"renderDish",value:function(e){var a=this;return null!=e?r.a.createElement("div",{className:"col-xs-12 col-md-5 m-1"},r.a.createElement(H,{dish:this.props.dishes.dishes.filter((function(e){return e.id===a.props.selectedDish}))[0]})):r.a.createElement("div",null)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(V,null),r.a.createElement(Oe.TransitionGroup,null,r.a.createElement(Oe.CSSTransition,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(g.f,null,r.a.createElement(g.e,{path:"/home",component:function(){return r.a.createElement("div",null,r.a.createElement(ee,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promosLoading:e.props.promotions.isLoading,promosErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess}))}}),r.a.createElement(g.e,{exact:!0,path:"/menu",component:function(){return r.a.createElement(y,{dishes:e.props.dishes})}}),r.a.createElement(g.e,{path:"/menu/:dishID",component:function(a){var t=a.match;return r.a.createElement(H,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishID,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishID,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(g.e,{path:"/aboutus",component:function(){return r.a.createElement(ne,{leaders:e.props.leaders})}}),r.a.createElement(g.e,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(de,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),r.a.createElement(g.d,{to:"/home"})))),r.a.createElement(Q,null))}}]),t}(n.Component),ke=Object(g.g)(Object(Ee.connect)((function(e){return{dishes:e.dishes,leaders:e.leaders,comments:e.comments,promotions:e.promotions}}),(function(e){return{postFeedback:function(a,t,n,r,l,s,o){return e(function(e,a,t,n,r,l,s){return function(o){var c={firstname:e,lastname:a,telnum:t,email:n,agree:r,contactType:l,messagedate:s};return c.date=(new Date).toISOString(),fetch(N+"feedback",{method:"POST",body:JSON.stringify(c),headers:{"Content-type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){o({type:"ADD_FEEDBACK",payload:e})})).catch((function(e){console.log("Post Feedback",e.message),alert("Feedback could not be posted")}))}}(a,t,n,r,l,s,o))},postComment:function(a,t,n,r){return e(function(e,a,t,n){return function(r){var l={dishId:e,rating:a,author:t,comment:n};return l.date=(new Date).toISOString(),fetch(N+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("Post comments",e.message),alert("Viewer comment could not be posted")}))}}(a,t,n,r))},fetchDishes:function(){e((function(e){return e(he(!0)),fetch(N+"dishes").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(pe(a))})).catch((function(a){e(fe(a.message))}))}))},resetFeedbackForm:function(){e(x.actions.reset("feedback"))},fetchComments:function(){e((function(e){return fetch(N+"comments").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(function(e){return{type:"ADD_COMMENTS",payload:e}}(a))})).catch((function(a){return e({type:"COMMENTS_FAILED",payload:a.message})}))}))},fetchPromos:function(){e((function(e){return e(ge()),fetch(N+"promotions").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(Ne(a))})).catch((function(a){return e(be(a.message))}))}))},fetchLeaders:function(){e((function(e){return e(ve()),fetch(N+"leaders").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(we(a))})).catch((function(a){return e(ye(a.message))}))}))}}}))(Me)),Le=t(12),Se=t(25),De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DISHES":return Object(Le.a)({},e,{isLoading:!1,errMess:null,dishes:a.payload});case"DISHES_LOADING":return Object(Le.a)({},e,{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(Le.a)({},e,{isLoading:!1,errMess:a.payload,dishes:[]});default:return e}},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:"",comments:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENTS":return Object(Le.a)({},e,{isLoading:!1,errMess:null,comments:a.payload});case"COMMENTS_FAILED":return Object(Le.a)({},e,{isLoading:!1,errMess:a.payload,comments:[]});case"ADD_COMMENT":var t=a.payload;return Object(Le.a)({},e,{comments:e.comments.concat(t)});default:return e}},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_LEADERS":return Object(Le.a)({},e,{isLoading:!1,errMess:null,leaders:a.payload});case"LEADERS_LOADING":return Object(Le.a)({},e,{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return Object(Le.a)({},e,{isLoading:!1,errMess:a.payload,leaders:[]});default:return e}},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROMOS":return Object(Le.a)({},e,{isLoading:!1,errMess:null,promotions:a.payload});case"PROMOS_LOADING":return Object(Le.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(Le.a)({},e,{isLoading:!1,errMess:a.payload,promotions:[]});default:return e}},xe=t(100),Ae=t.n(xe),Ie=t(101),Te=t.n(Ie),Re={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},_e=Object(Se.createStore)(Object(Se.combineReducers)(Object(Le.a)({dishes:De,comments:Ce,promotions:Fe,leaders:je},Object(x.createForms)({feedback:Re}))),Object(Se.applyMiddleware)(Ae.a,Te.a)),Pe=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(Ee.Provider,{store:_e},r.a.createElement(g.a,null,r.a.createElement("div",null,r.a.createElement(ke,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(169),t(170),t(171);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[104,1,2]]]);
//# sourceMappingURL=main.44665df2.chunk.js.map