(this["webpackJsonpportfolio-v2"]=this["webpackJsonpportfolio-v2"]||[]).push([[0],{10:function(e,t,n){e.exports={projectName:"ProjectPage_projectName__3pd8h",projectDescription:"ProjectPage_projectDescription__bv9xw",githubLink:"ProjectPage_githubLink__1nvae",video:"ProjectPage_video__3PiHu",showCaseListItem:"ProjectPage_showCaseListItem__DRX4A",showCaseListContainer:"ProjectPage_showCaseListContainer__311tW",showCaseContainer:"ProjectPage_showCaseContainer__aOOln",showCaseDisplay:"ProjectPage_showCaseDisplay__2fVyY",selected:"ProjectPage_selected__1l4Vx"}},12:function(e,t,n){e.exports={navBar:"NavBar_navBar__mQRbr",navBarLeft:"NavBar_navBarLeft__3X9ZJ",navBarRight:"NavBar_navBarRight__2vybr",navBarCenter:"NavBar_navBarCenter__22DVr",headerLink:"NavBar_headerLink__2yn24",dropdownContainer:"NavBar_dropdownContainer__vFDVk"}},15:function(e,t,n){e.exports={toggleButton:"DemoWindow_toggleButton__bQP21",closeButton:"DemoWindow_closeButton__VlY7r",container:"DemoWindow_container__3xHDF",demo:"DemoWindow_demo__1I2ls",demoLabel:"DemoWindow_demoLabel__fDvR8",demoItem:"DemoWindow_demoItem__jK7Hp","example-enter":"DemoWindow_example-enter__2APgw","example-enter-active":"DemoWindow_example-enter-active__Y0SKT","example-leave":"DemoWindow_example-leave__1XGYe","example-leave-active":"DemoWindow_example-leave-active__2mpp_"}},18:function(e,t,n){e.exports={description:"AboutPage_description__2AbbZ",githubLink:"AboutPage_githubLink__1DIw2",aboutPage:"AboutPage_aboutPage__1NMFU"}},20:function(e,t,n){e.exports={dropdown:"Dropdown_dropdown__1j4xu",dropdownButton:"Dropdown_dropdownButton__URM1U",dropdownItem:"Dropdown_dropdownItem__1IzAt","example-enter":"Dropdown_example-enter__3wPzs","example-enter-active":"Dropdown_example-enter-active__JpZph","example-leave":"Dropdown_example-leave__1zMm5","example-leave-active":"Dropdown_example-leave-active__X8y6N"}},21:function(e,t,n){e.exports={errorMsg:"RockPaperScissor_errorMsg__12tSa",progressMsg:"RockPaperScissor_progressMsg__1cbfy",instructions:"RockPaperScissor_instructions__106mw"}},22:function(e,t,n){e.exports={pageContainer:"App_pageContainer__1DjmS",pageComponentContainer:"App_pageComponentContainer__2XxVc",navBarContainer:"App_navBarContainer__7R9Lk"}},30:function(e,t,n){e.exports={linkContainer:"DropdownLinks_linkContainer__2I6tP"}},32:function(e,t,n){e.exports={selector:"Selector_selector__275HH"}},35:function(e,t,n){e.exports={offset:"DemoContainer_offset__ZofZ5"}},36:function(e,t,n){e.exports={centered:"HomePage_centered__1hV5q"}},47:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(29),i=n.n(s),r=(n(47),n(13)),c=n(2),l=n(41),d=n(11),h=n(70),p=n(20),u=n.n(p),g=n(1);var j=function(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),o=n[0],s=n[1],i=e.children,r=e.customButton,c=e.dropdownItem,l=e.dropdownBackgroundColor;return Object(g.jsxs)("div",{onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},className:u.a.dropdown,children:[Object(g.jsx)("button",{className:u.a.dropdownButton,type:"button",children:r}),Object(g.jsx)(h.a.div,{animate:o?"open":"closed",variants:{open:{opacity:1,x:0},closed:{opacity:0,y:"-100%"}},children:Object(g.jsxs)("div",{style:{backgroundColor:l},className:u.a.dropdownItem,children:[c,i]})})]})},A=n(30),m=n.n(A);var b=function(e){var t=e.linkObject;return Object(g.jsx)("div",{className:m.a.linkContainer,children:t.map((function(e){var t=e.route,n=e.textDisplay;return Object(g.jsx)("ul",{children:Object(g.jsx)(r.b,{to:t,children:n})})}))})},w=n(32),v=n.n(w);function C(e){var t=e.children,n=e.onChange,a=e.value;return Object(g.jsx)("select",{className:v.a.selector,onChange:function(e){return n(e)},value:a,children:t})}C.Option=function(e){var t=e.children,n=e.key,a=e.value;return Object(g.jsx)("option",{value:a,children:t},n||a)};var f=C,x=n(12),O=n.n(x),I=n(33),B=n(34),P=n(42),k=n(40),D=n(21),S=n.n(D),y=n.p+"static/media/rockPlaceholder.d6455193.png",R=n.p+"static/media/paperPlaceholder.b2f11770.png",Y=n.p+"static/media/scissorPlaceholder.76e1f71e.png",Q=function(e){Object(P.a)(n,e);var t=Object(k.a)(n);function n(e){var a;return Object(I.a)(this,n),(a=t.call(this,e)).RPSDict={99:"data:image/png;base64,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",1:y,2:R,3:Y},a.mainLoop=function(){a.state.currentPhase()},a.getRandomInt=function(e){return Math.floor(Math.random()*Math.floor(e)+1)},a.initialize=function(){a.setState({cpuLeft:99,cpuRight:99,playerLeft:99,playerRight:99,gameMsg:"Your Left Hand",progressMsg:"In Progress",currentPhase:a.getLeftHand})},a.getLeftHand=function(){var e=99,t="";a.state.keyPressed===n.RPSenum.keyS?e=n.RPSenum.ROCK:a.state.keyPressed===n.RPSenum.keyD?e=n.RPSenum.PAPER:a.state.keyPressed===n.RPSenum.keyF&&(e=n.RPSenum.SCISSOR);var o=a.getRightHand;if(99===e)return o=a.getLeftHand,t="Invalid Left Hand",void a.setState({errorMsg:t});a.setState({playerLeft:e,gameMsg:"Input Your Right Hand",errorMsg:t,currentPhase:o}),a.updateGameState()},a.getRightHand=function(){var e=99,t="";a.state.keyPressed===n.RPSenum.keyJ?e=n.RPSenum.ROCK:a.state.keyPressed===n.RPSenum.keyK?e=n.RPSenum.PAPER:a.state.keyPressed===n.RPSenum.keyL&&(e=n.RPSenum.SCISSOR);var o=a.retractAndCompare;if(99===e)return o=a.getRightHand,t="Invalid Right Hand, input again",void a.setState({errorMsg:t});var s=a.getRandomInt(3),i=a.getRandomInt(3);a.setState({cpuLeft:s,cpuRight:i,playerRight:e,gameMsg:"Choose Hand to Use",errorMsg:t,currentPhase:o}),a.updateGameState()},a.retractAndCompare=function(){var e=-1;if(a.state.keyPressed===n.RPSenum.keyS||a.state.keyPressed===n.RPSenum.keyD||a.state.keyPressed===n.RPSenum.keyF)e=a.state.playerLeft;else{if(a.state.keyPressed!==n.RPSenum.keyJ&&a.state.keyPressed!==n.RPSenum.keyK&&a.state.keyPressed!==n.RPSenum.keyL)return;e=a.state.playerRight}var t=a.getRandomInt(2),o=e-(1===t?a.state.cpuLeft:a.state.cpuRight),s=0;-1===o||2===o?s=-1:1!==o&&-2!==o||(s=1);var i="You Tied";1===s?i="You Won":-1===s&&(i="You Lost"),a.setState({gameMsg:"Opponent chose ".concat(1===t?"Left Hand":"Right Hand"),progressMsg:"".concat(i,", Press Any Key"),currentPhase:a.initialize})},a.handleKeyPress=function(e){a.setState({keyPressed:e.charCode}),a.mainLoop()},a.updateGameState=function(){a.setState((function(e){return{playerGameState:Object(g.jsxs)("span",{children:[Object(g.jsx)("img",{alt:"playerLeft",height:n.RPSenum.HEIGHT,width:n.RPSenum.WIDTH,src:a.RPSDict[e.playerLeft]})," ",Object(g.jsx)("img",{alt:"playerRight",height:n.RPSenum.HEIGHT,width:n.RPSenum.WIDTH,src:a.RPSDict[e.playerRight]})]}),cpuGameState:Object(g.jsxs)("span",{children:[Object(g.jsx)("img",{alt:"cpuLeft",height:n.RPSenum.HEIGHT,width:n.RPSenum.WIDTH,src:a.RPSDict[e.cpuLeft]})," ",Object(g.jsx)("img",{alt:"cpuRight",height:n.RPSenum.HEIGHT,width:n.RPSenum.WIDTH,src:a.RPSDict[e.cpuRight]})]})}}))},a.state={keyPressed:0,currentPhase:a.initialize,cpuGameState:null,playerGameState:null,gameMsg:"Press Any Key to Start",errorMsg:"",progressMsg:"Ready",cpuLeft:99,cpuRight:99,playerLeft:99,playerRight:99},a}return Object(B.a)(n,[{key:"componentWillMount",value:function(){document.addEventListener("keypress",this.handleKeyPress,!1),this.updateGameState()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keypress",this.handleKeyPress,!1)}},{key:"render",value:function(){var e=this.state,t=e.cpuGameState,n=e.playerGameState,a=e.gameMsg,o=e.progressMsg,s=e.errorMsg;return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:t}),Object(g.jsx)("h1",{children:n}),Object(g.jsx)("h2",{children:a}),Object(g.jsx)("h2",{className:S.a.progressMsg,children:o}),Object(g.jsx)("p",{className:S.a.errorMsg,children:s}),Object(g.jsxs)("div",{className:S.a.instructions,children:[Object(g.jsx)("div",{children:"Instructions"}),Object(g.jsx)("div",{children:"Simple game of Rock Paper Scissors"}),Object(g.jsx)("div",{children:"- Press Any Key to Start"}),Object(g.jsx)("div",{children:"- Select Rock, Paper, or Scissor for each of your hands"}),Object(g.jsx)("div",{children:"- Then select the one you will use against CPU, press any button to play again"}),Object(g.jsx)("div",{children:"- Results will show, then press any button to play again"}),Object(g.jsx)("div",{children:"Choosing Hands"}),Object(g.jsxs)("div",{children:[Object(g.jsx)("li",{children:"S = Rock"}),Object(g.jsx)("li",{children:"D = Paper"}),Object(g.jsx)("li",{children:"F = Scissor"}),Object(g.jsx)("li",{children:"J = Rock"}),Object(g.jsx)("li",{children:"K = Paper"}),Object(g.jsx)("li",{children:"L = Scissor"})]})]})]})}}]),n}(o.a.Component);Q.RPSenum={ROCK:1,PAPER:2,SCISSOR:3,WIDTH:150,HEIGHT:150,keyS:115,keyD:100,keyF:102,keyJ:106,keyK:107,keyL:108};var E=Q,H=n(35),L=n.n(H),M=n(15),G=n.n(M),N={open:{opacity:1,x:0},closed:{opacity:0,x:"-100%"}};var _=function(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),o=n[0],s=n[1],i=Object(a.useState)(!0),r=Object(d.a)(i,2),c=r[0],l=r[1],p=e.componentName,u=e.componentItem;return Object(g.jsx)(g.Fragment,{children:c&&Object(g.jsx)(h.a.div,{style:{position:"absolute",zIndex:100},drag:!0,dragMomentum:!1,children:Object(g.jsxs)("div",{className:G.a.demo,children:[Object(g.jsx)("div",{className:G.a.demoLabel,children:Object(g.jsxs)("span",{children:[p,Object(g.jsx)("button",{className:G.a.toggleButton,type:"button",onClick:function(){return s(!o)},children:"Show"}),Object(g.jsx)("button",{className:G.a.closeButton,type:"button",onClick:function(){return l(!1)},children:"Close"})]})}),Object(g.jsx)(h.a.div,{variants:N,animate:o?"open":"closed",children:o?Object(g.jsx)("div",{className:G.a.demoItem,children:u}):null})]})})})};var F=function(e){var t=e.componentRendered;return Object(g.jsx)(g.Fragment,{children:t.map((function(e,t){return Object(g.jsx)("div",{className:L.a.offset,style:{top:20+20*t,left:50+10*t},children:Object(g.jsx)(_,{componentName:e.name,componentItem:e.component})},"".concat(typeof e," ").concat(t))}))})},K=["dark","light"],W={dark:{"--active":"#035388","--background":"#52606D","--component-background":"#1F2933","--exit-background":"#780A0A","--exit-text":"#ffebee","--primary-text":"#CBD2D9","--primary":"#52606D","--link-text":"#1992D4","--secondary":"#035388","--warning-text":"#AB091E"},light:{"--active":"#2CB1BC","--background":"#BCCCDC","--component-background":"#D9E2EC","--exit-background":"#F29B9B","--exit-text":"#ffebee","--primary-text":"#102A43","--primary":"#62B0E8","--link-text":"#0F609B","--secondary":"#38BEC9","--warning-text":"red"}},U=function(){var e=Object(a.useState)(K[0]),t=Object(d.a)(e,2),n=t[0],o=t[1];return Object(g.jsx)(f,{onChange:function(e){var t=e.target.value;o(t),function(e){var t=W[e];for(var n in t)document.body.style.setProperty(n,t[n])}(t)},value:n,children:K.map((function(e){return Object(g.jsx)(f.Option,{value:e,children:e})}))})};var J=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],o=t[1];return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:O.a.navBar,children:[Object(g.jsx)("div",{className:O.a.navBarLeft,children:"Alvin Chang"}),Object(g.jsxs)("div",{className:O.a.navBarCenter,children:[Object(g.jsx)(r.b,{className:O.a.headerLink,to:"/",children:"Home"}),Object(g.jsx)(j,{customButton:Object(g.jsx)(r.b,{className:O.a.headerLink,to:"/about",children:"About"}),children:Object(g.jsx)(b,{linkObject:[{route:"/about",textDisplay:"about"},{route:"/project",textDisplay:"project"}]})}),Object(g.jsx)(j,{customButton:Object(g.jsx)(r.b,{className:O.a.headerLink,to:"/component",children:"Components"}),children:Object(g.jsx)("ul",{className:O.a.dropdownContainer,children:Object(g.jsx)("div",{onClick:function(){o([].concat(Object(l.a)(n),[{name:"Rock Paper Scissors",component:Object(g.jsx)(E,{})}]))},children:"RockPaperScissors"})})})]}),Object(g.jsx)("div",{className:O.a.navBarRight,children:Object(g.jsx)(U,{})})]}),Object(g.jsx)(F,{componentRendered:n})]})},V=n(22),T=n.n(V),Z=n(36),z=n.n(Z);function X(){return Object(g.jsxs)("article",{children:[Object(g.jsx)("title",{children:"Alvin Chang"}),Object(g.jsx)("meta",{name:"Alvin Chang's Portfolio",content:"Portfolio that contains various React Components"}),Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:z.a.centered,children:[Object(g.jsx)("h2",{children:"Hello! I'm Alvin Chang, a Software Engineer specializing in Full-Stack Development."}),Object(g.jsx)("p",{children:"Click around to find out about me. Or Click on components to see a component in action."})]})})]})}var q=n(18),$=n.n(q),ee=n.p+"static/media/resume.2dcc29aa.pdf";function te(){return Object(g.jsxs)("div",{className:$.a.aboutPage,children:[Object(g.jsx)("title",{children:"About Me Page"}),Object(g.jsx)("meta",{name:"About Me",content:"Short bio about Alvin"}),Object(g.jsx)("h1",{children:"Alvin Chang"}),Object(g.jsx)("div",{className:$.a.description,children:Object(g.jsx)("p",{children:"My passion as a Software Engineer is to learn new technology and seeing where new technology take us. I enjoy developing and engineering new software and web apps. I have experience in UI/UX design, but my focus is on the Software Engineering and the best way to develop new technology/components using the latest technology. My main experiences focuses in Full-Stack development."})}),Object(g.jsxs)("div",{className:$.a.description,children:["Links to more information about me",Object(g.jsxs)("div",{className:$.a.githubLink,children:[Object(g.jsx)("ul",{children:Object(g.jsx)("a",{href:"https://github.com/ahchang6",children:"School Github"})}),Object(g.jsx)("ul",{children:Object(g.jsx)("a",{href:"https://github.com/AlvinHChang",children:"Personal Github"})}),Object(g.jsx)("ul",{children:Object(g.jsx)("a",{href:ee,rel:"noreferrer",target:"_blank",children:"Resume"})})]})]})]})}function ne(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("title",{children:"React Components"}),Object(g.jsx)("meta",{name:"React Components",content:"List of React Components that I've made"}),Object(g.jsx)("h1",{children:"Components"}),"Here is an empty page! Hover over components, and click any item to create an instance of that demo!"]})}var ae,oe=n(16),se=n(37),ie=n(10),re=n.n(ie),ce=function(e){var t=e.children,n=e.selected,a=e.onClick;return Object(g.jsx)(h.a.div,{className:"".concat(re.a.showCaseListItem," ").concat(n?re.a.selected:""),onClick:a,whileHover:{scale:1.1},whileTap:{scale:.95},children:Object(g.jsx)("div",{className:re.a.showCaseListText,children:t})},t)},le=["Elven-Platform","portfolio-v2","chess","ISRCafe","Clearity"];function de(){var e=Object(a.useState)(le[0]),t=Object(d.a)(e,2),n=t[0],o=t[1],s=he[n],i=s.description,r=s.projectLink,c=s.youtube;return Object(g.jsxs)("div",{className:re.a.showCaseContainer,children:[Object(g.jsx)("div",{className:re.a.showCaseListContainer,children:le.map((function(e){return Object(g.jsx)(ce,{selected:n===e,onClick:function(){o(e)},children:e})}))}),Object(g.jsx)("div",{className:re.a.showCaseDisplay,children:!!s&&Object(g.jsxs)("ul",{children:[Object(g.jsx)("div",{className:re.a.projectName,children:n}),Object(g.jsx)("p",{className:re.a.projectDescription,children:i}),!!c&&Object(g.jsx)(se.a,{className:re.a.video,videoId:null===c||void 0===c?void 0:c.videoId}),Object(g.jsx)("div",{className:re.a.githubLink,children:Object(g.jsx)("a",{href:r,children:"Link"})})]})})]})}var he=(ae={},Object(oe.a)(ae,le[0],{projectLink:"https://github.com/AlvinHChang/elven-platform",description:"I'm designing a new type of platform where platform developers can create standalone apps which can take use of platform metadata. One technology I'm trying out is to create multiple iframes but only show one at a time. This will allow you to preload resources and display them when you need to."}),Object(oe.a)(ae,le[1],{projectLink:"https://github.com/AlvinHChang/Portfolio",description:"This is the link to the Github of my current website. The website is in ReactJS. There used to be an older version but I recently reworked it."}),Object(oe.a)(ae,le[2],{projectLink:"https://github.com/ahchang6/chess",description:" \n                Chess is one of my passions, so it is only natural that I created\n                a simple chess application. Inside the repo includes the\n                testPlan the various files reflecting the designs I have\n                for the game\n            "}),Object(oe.a)(ae,le[3],{projectLink:"https://github.com/AlvinHChang/ISRCafe",description:"\n                ISRCafe was named after one of the dormitories that I still visit\n                after I graduated.The idea was to integrate Google Form/ Sheet API\n                with a frontend. The end result allowed us to serve refreshments\n                to the community in the dormitory in real time. Them sending their\n                order, us fulfilling them and allowing them to see when to pick up\n                their drink.\n            "}),Object(oe.a)(ae,le[4],{projectLink:"https://clearity-702b7.firebaseapp.com",description:"\n              Clearity was a project I created with a group of people to help\n              streamline questions from students to professors and vice versa.\n              In this project, I handled all of backend and helped design the\n              front end. I also edited, directed and narrated the demo video.\n            ",youtube:{videoId:"k-dqfchI0us"}}),ae);n(66),n(67);var pe=function(){return Object(g.jsx)("div",{children:Object(g.jsxs)(r.a,{children:[Object(g.jsx)("div",{className:T.a.navBarContainer,children:Object(g.jsx)(J,{})}),Object(g.jsx)("div",{className:T.a.pageContainer,children:Object(g.jsx)("div",{className:T.a.pageComponentContainer,children:Object(g.jsxs)(c.c,{children:[Object(g.jsx)(c.a,{exact:!0,path:"/",component:X}),Object(g.jsx)(c.a,{path:"/component",component:ne}),Object(g.jsx)(c.a,{path:"/about",component:te}),Object(g.jsx)(c.a,{path:"/project",component:de})]})})})]})})},ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),s(e),i(e)}))};i.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(pe,{})}),document.getElementById("root")),ue()}},[[68,1,2]]]);
//# sourceMappingURL=main.f347db2a.chunk.js.map