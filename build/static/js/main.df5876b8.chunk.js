(this["webpackJsonpreact-portfolio-template-v2"]=this["webpackJsonpreact-portfolio-template-v2"]||[]).push([[0],{20:function(e,t,a){e.exports=a(35)},25:function(e,t,a){},26:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),c=a.n(r),i=(a(25),a(26),a(8)),o=a(1),m=function(e){var t=e.name;return l.a.createElement("div",null,l.a.createElement("div",{className:"header_container"},l.a.createElement(i.b,{to:"/"},l.a.createElement("h1",null,t,".")),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"/#projects"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#end"},"Contact"))))))},s={name:"Portfolio",contactEmail:"lipikas1277@gmail.com",landingPageName:"Lipika",landingPagePara:"A CS student at Rugters University.",landingPageImage:"assets/1.jpg",projects:[{id:1,title:"Shopping xExperience",short:"eCommerce Store ",tech:"HTML, CSS, JS, MySQL",imageSrc:"assets/33.png",git:"https://github.com/lipikas/Shoppin-xExperience"},{id:2,title:"RU Donate",short:"RedCross Campaign ",tech:"HTML, CSS, Bootstrap, JS, Firebase",git:"https://github.com/lipikas/Red-Cross-RUDonate",imageSrc:"assets/111.png"},{id:3,title:"Pizzeria",short:"An online pizza store ",git:"https://github.com/lipikas/Pizza-App",tech:"Java, mySQL, Css, Bootstrap",imageSrc:"assets/pizza.png"}],social:[{name:"LinkedIn",url:"https://www.linkedin.com/in/lipikasutrave/"},{name:"Github",url:"https://github.com/lipikas"}]},u=function(){return l.a.createElement("div",null,l.a.createElement(m,{name:s.name,contactEmail:s.contactEmail}),l.a.createElement("div",{className:"about_container"},l.a.createElement("object",{width:"100%",height:"1100",type:"application/pdf",data:"assets/MatthewPan_Resume.pdf"},l.a.createElement("p",null,"PDF cannot be displayed.")),l.a.createElement("div",{className:"spaceAbout"})))},p=function(e){var t=e.name,a=e.paragraph,n=e.authorImage;return l.a.createElement("div",null,l.a.createElement("div",{className:"home_container"},l.a.createElement("div",{className:"home_head_wrapper"},l.a.createElement("h1",null,"Hello, I'm ",l.a.createElement("br",null),l.a.createElement("span",null,t,".."),l.a.createElement("br",null),l.a.createElement("span",null,"Sutrave...")),l.a.createElement("p",{id:"head"},a),l.a.createElement("p",{id:"head2"},"I enjoy learning different technologies and helping improve the efficiency of organizations whenever possible.")),l.a.createElement("div",{className:"image_container"},l.a.createElement("img",{src:n,alt:"Author"}),l.a.createElement("div",{className:"bg"}))))},E=function(e){var t=e.projects;return l.a.createElement("div",{className:"work_container"},l.a.createElement("h1",{id:"projects"},"Projects."),l.a.createElement("div",{className:"projects_container"},t.map((function(e){return l.a.createElement("div",{key:e.id,className:"project"},l.a.createElement("div",{className:"image"},l.a.createElement("a",{href:e.url},l.a.createElement("img",{src:e.imageSrc,alt:e.title}))),l.a.createElement("div",{className:"title"},l.a.createElement("strong",null,e.title),l.a.createElement("br",null),e.short,l.a.createElement("a",{className:"git-color",href:e.git},"(Git)")))}))))},h=a(9),d=function(e){var t=e.contactEmail,a=e.socialLinks;return l.a.createElement("div",{className:"contact_container"},l.a.createElement("h1",null,"Feel free to contact me :)"),l.a.createElement("div",{className:"social_links"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{id:"end",href:"mailto:".concat(t)},l.a.createElement(h.a,null))),l.a.createElement("li",null,l.a.createElement("a",{href:a[0].url},l.a.createElement(h.c,null))),l.a.createElement("li",null,l.a.createElement("a",{href:a[1].url},l.a.createElement(h.b,null))))))},g=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"fullpage"},l.a.createElement(m,{name:s.name,contactEmail:s.contactEmail}),l.a.createElement(p,{name:s.landingPageName,paragraph:s.landingPagePara,authorImage:s.landingPageImage})),l.a.createElement(E,{projects:s.projects}),l.a.createElement(d,{contactEmail:s.contactEmail,contactPara:s.contactPara,socialLinks:s.social}))},v=a(16),f=a(17),k=a(19),b=a(18),S=function(e){Object(k.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).state={date:new Date},n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"componentDidUpdate",value:function(e,t){this.state===t&&console.log("did update!")}},{key:"shouldComponentUpdate",value:function(e,t){if(this.prop!==e&&this.state!==t)return!0}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{style:{fontSize:"40px"}},"It is ",this.state.date.toLocaleTimeString()))}}]),a}(l.a.Component);var N=function(){return l.a.createElement(i.a,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/resume"},l.a.createElement(u,null)),l.a.createElement(o.a,{path:"/",exact:!0},l.a.createElement(g,null)),l.a.createElement(o.a,{path:"/test"},l.a.createElement(S,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.df5876b8.chunk.js.map