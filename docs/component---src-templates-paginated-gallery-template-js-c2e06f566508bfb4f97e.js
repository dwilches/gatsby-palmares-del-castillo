(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{144:function(e,t,a){"use strict";a.r(t);var n=a(5),i=a.n(n),r=a(0),o=a.n(r),s=a(153),l=a(55),c=a(146),p=a.n(c),m=a(4),d=a.n(m),u=a(147),f=a(152),g=a(149),h=a.n(g),x=function(e){var t=e.paginationData,a=t.currentPage,n=t.countPages,i=1===a||!a,r=a===n,s="/"+(a-1>1?a-1:""),l="/"+(a+1),c={paddingTop:"0.25em"},m=function(e,t){var a=[];if(t<=10)for(var n=1;n<=t;n++)a.push(n);else{if(e<=5)for(var i=1;i<e;i++)a.push(i);else a.push(1),a.push("dots-left-half"),a.push(e-2),a.push(e-1);if(a.push(e),e>=t-4)for(var r=e+1;r<t;r++)a.push(r);else a.push(e+1),a.push(e+2),a.push("dots-right-half");e!==t&&a.push(t)}return a}(a,n);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:p.a.dynamic([["330617350",[h.a.color.brand.primaryLight,h.a.space.l,h.a.space.l,h.a.space.l,h.a.space.stack.l,h.a.color.special.attention,h.a.space.m,h.a.space.m,h.a.space.inline.s]]])+" pagination"},!i&&o.a.createElement(u.a,{to:s,rel:"prev",style:c},o.a.createElement("span",{className:p.a.dynamic([["330617350",[h.a.color.brand.primaryLight,h.a.space.l,h.a.space.l,h.a.space.l,h.a.space.stack.l,h.a.color.special.attention,h.a.space.m,h.a.space.m,h.a.space.inline.s]]])+" prev-arrow"},o.a.createElement(f.a,null))),n>1&&o.a.createElement(o.a.Fragment,null,m.map(function(e){return isNaN(e)?o.a.createElement("span",{key:"dots-"+e,className:p.a.dynamic([["330617350",[h.a.color.brand.primaryLight,h.a.space.l,h.a.space.l,h.a.space.l,h.a.space.stack.l,h.a.color.special.attention,h.a.space.m,h.a.space.m,h.a.space.inline.s]]])},"....."):o.a.createElement("span",{key:"page-"+e,className:p.a.dynamic([["330617350",[h.a.color.brand.primaryLight,h.a.space.l,h.a.space.l,h.a.space.l,h.a.space.stack.l,h.a.color.special.attention,h.a.space.m,h.a.space.m,h.a.space.inline.s]]])+" pagination-numbers"},o.a.createElement(u.a,{to:"/"+(1===e?"":e),style:{padding:"3px 8px",borderRadius:"5px",textDecoration:"none",color:e===a?"#ffffff":"#666",background:e===a?h.a.color.brand.primary:"",lineHeight:"30px",verticalAlign:"middle"},className:"pagination-numbers"},e))})),!r&&o.a.createElement(u.a,{to:l,rel:"next",style:c},o.a.createElement("span",{className:p.a.dynamic([["330617350",[h.a.color.brand.primaryLight,h.a.space.l,h.a.space.l,h.a.space.l,h.a.space.stack.l,h.a.color.special.attention,h.a.space.m,h.a.space.m,h.a.space.inline.s]]])+" next-arrow"},o.a.createElement(f.b,null)))),o.a.createElement(p.a,{id:"330617350",dynamic:[h.a.color.brand.primaryLight,h.a.space.l,h.a.space.l,h.a.space.l,h.a.space.stack.l,h.a.color.special.attention,h.a.space.m,h.a.space.m,h.a.space.inline.s]},["@from-width desktop @media (hover:hover) .pagination :global(a:hover svg){-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);}",".next-arrow.__jsx-style-dynamic-selector svg{margin-left:10px !important;}",".pagination-numbers.__jsx-style-dynamic-selector:hover{background:"+h.a.color.brand.primaryLight+";border-radius:5px;}",".pagination.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;maxWidth:700px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:"+h.a.space.l+" "+h.a.space.l+" "+h.a.space.l+";margin:"+h.a.space.stack.l+";margin-bottom:0;}",".pagination.__jsx-style-dynamic-selector a:nth-child(2){margin:0;}",".pagination.__jsx-style-dynamic-selector svg{fill:"+h.a.color.special.attention+";width:"+h.a.space.m+";height:"+h.a.space.m+";-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-transition:all 0.5s;transition:all 0.5s;margin:"+h.a.space.inline.s+";}"]))};x.propTypes={paginationData:d.a.object.isRequired};var y=x,b=a(9),v=a.n(b),w=a(167),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).scrollHandler=function(){},a.resizeHandler=function(){},a.checkWindowScroll=function(){a.props.hasMore&&a.sentinel&&a.sentinel.getBoundingClientRect().top-window.innerHeight<a.props.threshold&&a.props.onLoadMore()},a.scrollHandler=a.scrollHandler.bind(v()(a)),a.resizeHandler=a.resizeHandler.bind(v()(a)),a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.scrollHandler=w(this.checkWindowScroll,this.props.throttle),this.resizeHandler=w(this.checkWindowScroll,this.props.throttle),window.addEventListener("scroll",this.scrollHandler),window.addEventListener("resize",this.resizeHandler)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollHandler),window.removeEventListener("resize",this.resizeHandler)},a.componentDidUpdate=function(){this.scrollHandler()},a.render=function(){var e=this,t=o.a.createElement("div",{ref:function(t){return e.sentinel=t}});if(this.props.render)return this.props.render({sentinel:t,children:this.props.children});if(this.props.component){var a=this.props.component;return o.a.createElement(a,{sentinel:t},this.props.children)}return o.a.createElement("div",null,this.props.children,t)},t}(o.a.Component),k=(a(77),function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var a=t.prototype;return a.handleNavigation=function(e){return Object(u.b)("/images/fromGallery?id="+this.props.item.id,{state:{pageContext:this.props.item.pageContext}}),e.preventDefault(),!1},a.render=function(){var e=this,t=this.props,a=t.item&&t.highlight===t.item.id;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{key:t.index,className:p.a.dynamic([["2377027042",[a?"3s":"0s"]]])+" img-container"},t.item&&o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{id:"id"+t.item.id,style:{top:"0px",position:"absolute",display:"hidden"},className:p.a.dynamic([["2377027042",[a?"3s":"0s"]]])},"."),o.a.createElement("a",{href:"/images/"+t.item.id,onClick:function(t){return e.handleNavigation(t)},className:p.a.dynamic([["2377027042",[a?"3s":"0s"]]])},o.a.createElement("img",{src:t.item.thumb.src,alt:"",title:"",className:p.a.dynamic([["2377027042",[a?"3s":"0s"]]])})))),o.a.createElement(p.a,{id:"2377027042",dynamic:[a?"3s":"0s"]},["@-webkit-keyframes animate-opacity-__jsx-style-dynamic-selector{0%{opacity:0;}100%{opacity:1;}}","@keyframes animate-opacity-__jsx-style-dynamic-selector{0%{opacity:0;}100%{opacity:1;}}",".img-container.__jsx-style-dynamic-selector{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;position:relative;width:100%;height:100%;background:#EEE;border-radius:5px;border:1px solid ghostwhite;overflow:hidden;z-index:1;-webkit-animation:"+(a?"3s":"0s")+" ease-in-out 0s 1 animate-opacity-__jsx-style-dynamic-selector;animation:"+(a?"3s":"0s")+" ease-in-out 0s 1 animate-opacity-__jsx-style-dynamic-selector;}",".img-container.__jsx-style-dynamic-selector::before{content:'';display:block;margin-top:67%;z-index:1;}",".img-container.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{top:0;display:block;position:absolute;width:100%;height:auto;margin:0 !important;border-radius:5px;border:1px solid gray;-webkit-transition:0.2s ease-in-out;transition:0.2s ease-in-out;z-index:2;opacity:1;}",".img-container.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector:hover{opacity:0.4;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}"]))},t}(o.a.Component)),j=function(e){var t=e.globalState,a=e.pageContext.currentPage,n=[],i=0,r=0,s=0,l=!t.isInitializing();if(t.useInfiniteScroll&&t["page"+a])for(var c=a;;c++){var m="page"+c;if(!t[m]){for(var d=Math.min(t.cursor,e.pageContext.countPages);c<=d;c++){var f=s;for(r=0;r<f;r++)n.push(o.a.createElement(k,{g:t,key:"gi"+i++}))}break}for(s=t[m].length,r=0;r<s;r++)n.push(o.a.createElement(k,{g:t,js:l,item:t[m][r],key:"gi"+i++,highlight:e.highlight}))}else e.pageContext.pageImages.forEach(function(e){return n.push(o.a.createElement(k,{g:t,item:e,key:"gi"+i++}))});return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{to:"/images/"}),o.a.createElement("div",{className:"jsx-4247537048 grid"},n),o.a.createElement(p.a,{id:"4247537048"},[".grid.jsx-4247537048{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-template-rows:repeat(5,auto);grid-gap:1px;}","@media (max-width:950px){.grid.jsx-4247537048{grid-template-columns:1fr 1fr 1fr;}}","@media (max-width:300px){.grid.jsx-4247537048{grid-template-columns:1fr;}}"]))},_=function(e){function t(t){var a;if(a=e.call(this,t)||this,t.globalState.isInitializing()||!t.globalState.useInfiniteScroll){var n,i="page"+t.pageContext.currentPage;t.globalState.updateState(((n={})[i]=t.pageContext.pageImages,n.cursor=t.pageContext.currentPage+1,n))}return a}return i()(t,e),t.prototype.render=function(){var e=this.props.globalState,t=this.props.pageContext,a={currentPage:t.currentPage,countPages:t.countPages,useInfiniteScroll:e.useInfiniteScroll};return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{throttle:150,threshold:1800,hasMore:e.hasMore(t),onLoadMore:e.loadMore},o.a.createElement(j,{globalState:e,pageContext:t,highlight:this.props.highlight})),(1===e.cursor||e.hasMore(t))&&o.a.createElement("div",{className:p.a.dynamic([["1190636491",[e.useInfiniteScroll?"block":"none",h.a.color.brand.primaryLight]]])+" spinner"},o.a.createElement(f.c,null)),e.useInfiniteScroll&&o.a.createElement("noscript",{className:p.a.dynamic([["1190636491",[e.useInfiniteScroll?"block":"none",h.a.color.brand.primaryLight]]])},o.a.createElement("style",null,".spinner { display: none !important; }"),o.a.createElement(y,{paginationData:a})),!e.useInfiniteScroll&&o.a.createElement(y,{paginationData:a}),o.a.createElement(p.a,{id:"1190636491",dynamic:[e.useInfiniteScroll?"block":"none",h.a.color.brand.primaryLight]},["@-webkit-keyframes spinner-__jsx-style-dynamic-selector{to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}","@keyframes spinner-__jsx-style-dynamic-selector{to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}",".spinner.__jsx-style-dynamic-selector{margin-top:40px;font-size:60px;text-align:center;display:"+(e.useInfiniteScroll?"block":"none")+";}",".spinner.__jsx-style-dynamic-selector svg{fill:"+h.a.color.brand.primaryLight+";-webkit-animation:spinner-__jsx-style-dynamic-selector 3s linear infinite;animation:spinner-__jsx-style-dynamic-selector 3s linear infinite;}"]))},t}(o.a.Component),S=(a(168),a(169),a(151)),C=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleTextChange=a.handleTextChange.bind(v()(a)),a.state={showMoreText:!1},a}i()(t,e);var a=t.prototype;return a.handleTextChange=function(e){this.setState(function(t,a){return t.showMoreText===e?{showMoreText:!1}:{showMoreText:e}})},a.componentDidUpdate=function(e,t){!t.showMoreText&&this.state.showMoreText&&window.scrollTo(0,1e5)},a.render=function(){return o.a.createElement("footer",null,o.a.createElement("br",null),o.a.createElement("center",null,o.a.createElement("div",null,"Palmares del Castillo | Via Cali - Jamundi | Informes en el telefono: 318 362 1720")),o.a.createElement("br",null))},t}(o.a.Component),z=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){Object(S.b)()},a.render=function(){var e=this,t=this.props.location&&this.props.location.state?this.props.location.state.highlight:-1;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.Helmet,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,"Palmares del Castillo")),o.a.createElement(l.b.Consumer,null,function(a){return o.a.createElement(o.a.Fragment,null,o.a.createElement(C,null),o.a.createElement(_,{globalState:a,pageContext:e.props.pageContext,highlight:t}),o.a.createElement(C,null))}))},t}(o.a.Component);t.default=z},147:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(4),o=a.n(r),s=a(33),l=a.n(s);a.d(t,"a",function(){return l.a}),a.d(t,"b",function(){return s.navigate});a(148),i.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},148:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},149:function(e,t){e.exports={space:{default:"20px",xxs:"2px",xs:"5px",s:"10px",m:"20px",l:"40px",xl:"80px",inset:{default:"20px",xs:"5px",s:"10px",m:"20px",l:"40px"},stack:{default:"0 0 20px 0",xxs:"0 0 2px 0",xs:"0 0 5px 0",s:"0 0 10px 0",m:"0 0 20px 0",l:"0 0 40px 0"},inline:{default:"0 20px 0 0",xxs:"0 2px 0 0",xs:"0 5px 0 0",s:"0 10px 0 0",m:"0 20px 0 0",l:"0 40px 0 0"}},size:{radius:{default:"10px",small:"5px"}},color:{menu:{border:"ghostwhite;"},neutral:{white:"#ffffff",gray:{a:"#fafaf9",b:"#f3f2f2",c:"#ecebea",d:"#dddbda",e:"#c9c7c5",f:"#b0adab",g:"#969492",h:"#706e6b",i:"#514f4d",j:"#666",k:"#2b2826"},black:"#000000"},brand:{primary:"#e8ca6f",primaryLight:"#f9ebd2",primaryDark:"#B67A0E",background:"#fcf7e9",primaryActive:"#709425",light:"#709425",lightActive:"#709425",dark:"#709425",darkActive:"#709425"},special:{attention:"#E37222"}},font:{family:{initial:"Arial, sans-serif",target:"Open Sans"},weight:{standard:400,bold:600},size:{xxs:".8em",xs:".95em",s:"1.1em",m:"1.35em",l:"1.7em",xl:"2em",xxl:"2.2em",xxxl:"2.8em"},lineHeight:{xs:1.1,s:1.2,m:1.3,l:1.4,xl:1.5,xxl:1.6,reset:1}},time:{duration:{default:"0.5s",long:"1s"}},background:{color:{primary:"#ffffff",alt:"#fafaf9",brand:"#e8ca6f"}},text:{family:"Open Sans",color:{primary:"#666",primaryInverse:"#ffffff",brand:"#e8ca6f",attention:"#E37222"},lineHeight:{default:1.6},maxWidth:{tablet:"650px",desktop:"700px"}},heading:{family:"Open Sans",size:{h1:"2.2em",h2:"1.7em",h3:"1.35em"},lineHeight:{h1:1.1,h2:1.1,h3:1.1},weight:600},line:{color:"#ecebea"},icon:{color:"#e8ca6f"}}},150:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),s=a(56),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},151:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return o});var n=a(155),i=a.n(n);function r(){"undefined"!=typeof document&&i.a.enabled&&i.a.request()}function o(){"undefined"!=typeof document&&i.a.enabled&&i.a.isFullscreen&&i.a.exit()}},167:function(e,t,a){(function(t){var a="Expected a function",n=NaN,i="[object Symbol]",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,p="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,d=p||m||Function("return this")(),u=Object.prototype.toString,f=Math.max,g=Math.min,h=function(){return d.Date.now()};function x(e,t,n){var i,r,o,s,l,c,p=0,m=!1,d=!1,u=!0;if("function"!=typeof e)throw new TypeError(a);function x(t){var a=i,n=r;return i=r=void 0,p=t,s=e.apply(n,a)}function v(e){var a=e-c;return void 0===c||a>=t||a<0||d&&e-p>=o}function w(){var e=h();if(v(e))return E(e);l=setTimeout(w,function(e){var a=t-(e-c);return d?g(a,o-(e-p)):a}(e))}function E(e){return l=void 0,u&&i?x(e):(i=r=void 0,s)}function k(){var e=h(),a=v(e);if(i=arguments,r=this,c=e,a){if(void 0===l)return function(e){return p=e,l=setTimeout(w,t),m?x(e):s}(c);if(d)return l=setTimeout(w,t),x(c)}return void 0===l&&(l=setTimeout(w,t)),s}return t=b(t)||0,y(n)&&(m=!!n.leading,o=(d="maxWait"in n)?f(b(n.maxWait)||0,t):o,u="trailing"in n?!!n.trailing:u),k.cancel=function(){void 0!==l&&clearTimeout(l),p=0,i=c=r=l=void 0},k.flush=function(){return void 0===l?s:E(h())},k}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&u.call(e)==i}(e))return n;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var a=s.test(e);return a||l.test(e)?c(e.slice(2),a?2:8):o.test(e)?n:+e}e.exports=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(a);return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),x(e,t,{leading:i,maxWait:t,trailing:r})}}).call(this,a(74))}}]);
//# sourceMappingURL=component---src-templates-paginated-gallery-template-js-c2e06f566508bfb4f97e.js.map