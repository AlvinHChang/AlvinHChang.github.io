(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0b8eb3e35929778b339a":function(e,t,n){"use strict";n.r(t);var r=n("8af190b70a6bc55c6f1b"),o=n.n(r),a=n("8a2d1b95e05b6a321e74"),c=n.n(a),i=n("0d7f0986bcd2f33d8a2a"),u=n("ab039aecd4a1d4fedc0e"),s=n("d7dd51e1bf6bfc2c9c3d"),f=n("ab4cb61bcb2dc161defb"),l=n("a28fc3c963a1d4d1a2e5"),p=n("5ef9de3df8d92ea0e41c"),d=n.n(p),b=n("5fa3f8487e09c6182715"),y=n.n(b),m=n("f3b0ff1628e56352bcbf"),g=n.n(m),h=n("a1cf5d6fa4ed65a6ddd5"),v=n.n(h),j=n("6a4f9c383785f9168266"),w=n.n(j),O=n("d3a850c4000d77bccc89"),S=n.n(O),P=n("f2873ecf7390fe7d7c89"),k=n.n(P);function _(e){var t={dispatch:g.a,subscribe:g.a,getState:g.a,replaceReducer:g.a,runSaga:g.a,injectedReducers:S.a,injectedSagas:S.a};w()(k()(e,t),"(app/utils...) injectors: Expected a valid redux store")}var x=n("491cc2e27aa2b4221847");function R(e){return _(e),{injectReducer:function(e,t){return function(n,r){t||_(e),w()(y()(n)&&!v()(n)&&g()(r),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,n)&&e.injectedReducers[n]===r||(e.injectedReducers[n]=r,e.replaceReducer(Object(x.a)(e.injectedReducers)))}}(e,!0)}}function E(e){return(E="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N="@@saga-injector/restart-on-remount",D="@@saga-injector/daemon",U="@@saga-injector/once-till-unmount";function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){I(e,t,n[t])})}return e}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=[N,D,U],J=function(e){return w()(y()(e)&&!v()(e),"(app/utils...) injectSaga: Expected `key` to be a non empty string")},q=function(e){var t={saga:g.a,mode:function(e){return y()(e)&&F.includes(e)}};w()(k()(e,t),"(app/utils...) injectSaga: Expected a valid saga descriptor")};function G(e){return _(e),{injectSaga:function(e,t){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0;t||_(e);var a=W({},r,{mode:r.mode||N}),c=a.saga,i=a.mode;J(n),q(a);var u=Reflect.has(e.injectedSagas,n);(!u||u&&i!==D&&i!==U)&&(e.injectedSagas[n]=W({},a,{task:e.runSaga(c,o)}))}}(e,!0),ejectSaga:function(e,t){return function(n){if(t||_(e),J(n),Reflect.has(e.injectedSagas,n)){var r=e.injectedSagas[n];r.mode&&r.mode!==D&&(r.task.cancel(),e.injectedSagas[n]="done")}}}(e,!0)}}function $(e){return($="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function K(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q=function(e){return e.get("global")},V=n("b74a65a6fc6394d57886"),Y=n("0b3cb19af78752326f59"),Z=Y.c.section.withConfig({displayName:"Section",componentId:"sc-1eulrsm-0"})(["bottom:0;"]),ee=Object(Y.c)(Z).withConfig({displayName:"CenteredSection",componentId:"sc-6zy0wx-0"})(["text-align:center;"]),te="boilerplate.containers.HomePage",ne=Object(u.defineMessages)({startProjectHeader:{id:"".concat(te,".start_project.header"),defaultMessage:"Welcome to Alvin Chang's Portfolio"},startProjectMessage:{id:"".concat(te,".start_project.message"),defaultMessage:"Test"},trymeHeader:{id:"".concat(te,".tryme.header"),defaultMessage:"Try m!"},trymeMessage:{id:"".concat(te,".tryme.message"),defaultMessage:"Show Github repositories by"},trymeAtPrefix:{id:"".concat(te,".tryme.atPrefix"),defaultMessage:"@"}}),re=n("fcb99a06256635f70435");function oe(e,t){return{type:re.c,repos:e,username:t}}var ae="boilerplate/Home/CHANGE_USERNAME";var ce=n("54f683fcda7806277002"),ie=Object(ce.fromJS)({username:""});var ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae:return e.set("username",t.name.replace(/@/gi,""));default:return e}},se=function(e){return e.get("home",ie)},fe=function(){return Object(l.a)(se,function(e){return e.get("username")})},le=n("6c68d13fe9e3e77d8fc4");function pe(e){return 204===e.status||205===e.status?null:e.json()}function de(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}function be(e,t){return fetch(e,t).then(de).then(pe)}var ye,me=regeneratorRuntime.mark(he),ge=regeneratorRuntime.mark(ve);function he(){var e,t,n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(le.c)(fe());case 2:return e=r.sent,t="https://api.github.com/users/".concat(e,"/repos?type=all&sort=updated"),r.prev=4,r.next=7,Object(le.a)(be,t);case 7:return n=r.sent,r.next=10,Object(le.b)(oe(n,e));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(4),r.next=16,Object(le.b)((o=r.t0,{type:re.b,error:o}));case 16:case"end":return r.stop()}var o},me,this,[[4,12]])}function ve(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(le.d)(re.a,he);case 2:case"end":return e.stop()}},ge,this)}function je(e){return(je="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function we(e,t,n,r){ye||(ye="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var c in o)void 0===t[c]&&(t[c]=o[c]);else t||(t=o||{});if(1===a)t.children=r;else if(a>1){for(var i=new Array(a),u=0;u<a;u++)i[u]=arguments[u+3];t.children=i}return{$$typeof:ye,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function Oe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Se(e,t){return!t||"object"!==je(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Pe(e){return(Pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ke(e,t){return(ke=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"HomePage",function(){return Ee}),n.d(t,"mapDispatchToProps",function(){return Ce});var _e=we(i.Helmet,{},void 0,we("title",{},void 0,"Alvin Chang"),we("meta",{name:"Alvin Chang's Portfolio",content:"Portfolio that contains various React Components"})),xe=we("p",{},void 0,"Using React Boilerplate listed below, any extra features/components is created solely by me to demonstrate and practice my abilities in using React/Programming. This website will be periodically to reflect my current work, experience, and inspiration!"),Re=we("p",{},void 0,"I understand the design is not the most aesthetically pleasing and using a bootstrap or pre-made theme might make look better, but this website is to primarily demonstrate my ability as a Software Engineer and not UI/UX designer. That being said, all feedback/suggestions are welcome!"),Ee=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Se(this,Pe(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ke(e,t)}(t,o.a.PureComponent),n=t,(r=[{key:"componentDidMount",value:function(){this.props.username&&this.props.username.trim().length>0&&this.props.onSubmitForm()}},{key:"render",value:function(){var e=this.props;e.loading,e.error,e.repos;return we("article",{},void 0,_e,we("div",{},void 0,we(ee,{},void 0,we(V.a,{},void 0,o.a.createElement(u.FormattedMessage,ne.startProjectHeader)),we("p",{},void 0,o.a.createElement(u.FormattedMessage,ne.startProjectMessage)),xe,Re)))}}])&&Oe(n.prototype,r),a&&Oe(n,a),t}();function Ce(e){return{onChangeUsername:function(t){return e((n=t.target.value,{type:ae,name:n}));var n},onSubmitForm:function(t){void 0!==t&&t.preventDefault&&t.preventDefault(),e({type:re.a})}}}var Me,Te,Ae,He=Object(l.b)({repos:Object(l.a)(Q,function(e){return e.getIn(["userData","repositories"])}),username:fe(),loading:Object(l.a)(Q,function(e){return e.get("loading")}),error:Object(l.a)(Q,function(e){return e.get("error")})}),Ne=Object(s.connect)(He,Ce),De=(Te=(Me={key:"home",reducer:ue}).key,Ae=Me.reducer,function(e){var t=function(t){function n(){var e,t,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return r=this,t=!(o=(e=M(n)).call.apply(e,[this].concat(c)))||"object"!==E(o)&&"function"!==typeof o?A(r):o,H(A(A(t)),"injectors",R(t.context.store)),t}var r,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(n,o.a.Component),r=n,(a=[{key:"componentWillMount",value:function(){(0,this.injectors.injectReducer)(Te,Ae)}},{key:"render",value:function(){return o.a.createElement(e,this.props)}}])&&C(r.prototype,a),c&&C(r,c),n}();return H(t,"WrappedComponent",e),H(t,"contextTypes",{store:c.a.object.isRequired}),H(t,"displayName","withReducer(".concat(e.displayName||e.name||"Component",")")),d()(t,e)}),Ue=function(e){var t=e.key,n=e.saga,r=e.mode;return function(e){var a=function(a){function c(){var e,t,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=this,t=!(r=(e=B(c)).call.apply(e,[this].concat(a)))||"object"!==$(r)&&"function"!==typeof r?K(n):r,L(K(K(t)),"injectors",G(t.context.store)),t}var i,u,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(c,o.a.Component),i=c,(u=[{key:"componentWillMount",value:function(){(0,this.injectors.injectSaga)(t,{saga:n,mode:r},this.props)}},{key:"componentWillUnmount",value:function(){(0,this.injectors.ejectSaga)(t)}},{key:"render",value:function(){return o.a.createElement(e,this.props)}}])&&z(i.prototype,u),s&&z(i,s),c}();return L(a,"WrappedComponent",e),L(a,"contextTypes",{store:c.a.object.isRequired}),L(a,"displayName","withSaga(".concat(e.displayName||e.name||"Component",")")),d()(a,e)}}({key:"home",saga:ve});t.default=Object(f.compose)(De,Ue,Ne)(Ee)}}]);