webpackJsonp([0x67ef26645b2a,60335399758886],{90:function(e,t){e.exports={data:{site:{siteMetadata:{name:"Bryan Grill",title:"WAB & React",date:"March 8, 2018",org:"EBA Engineering"}},allSitePage:{edges:[{node:{path:"/dev-404-page/",component:null,pluginCreator:null}},{node:{path:"/offline-plugin-app-shell-fallback",component:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018/node_modules/gatsby-plugin-offline/app-shell.js",pluginCreator:{name:"default-site-plugin",pluginFilepath:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018"}}},{node:{path:"/",component:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018/src/pages/index.js",pluginCreator:{name:"component-page-creator",pluginFilepath:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018/node_modules/gatsby/dist/internal-plugins/component-page-creator"}}},{node:{path:"/404.html",component:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018/src/pages/404.js",pluginCreator:{name:"prod-404",pluginFilepath:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018/node_modules/gatsby/dist/internal-plugins/prod-404"}}},{node:{path:"/1",component:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018/src/pages/1.js",pluginCreator:{name:"default-site-plugin",pluginFilepath:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018"}}},{node:{path:"/10",component:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018/src/pages/10.js",pluginCreator:{name:"default-site-plugin",pluginFilepath:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018"}}},{node:{path:"/2",component:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018/src/pages/2.js",pluginCreator:{name:"default-site-plugin",pluginFilepath:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018"}}},{node:{path:"/3",component:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018/src/pages/3.js",pluginCreator:{name:"default-site-plugin",pluginFilepath:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018"}}},{node:{path:"/4",component:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018/src/pages/4.js",pluginCreator:{name:"default-site-plugin",pluginFilepath:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018"}}},{node:{path:"/404",component:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018/src/pages/404.js",pluginCreator:{name:"default-site-plugin",pluginFilepath:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018"}}},{node:{path:"/5",component:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018/src/pages/5.js",pluginCreator:{name:"default-site-plugin",pluginFilepath:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018"}}},{node:{path:"/6",component:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018/src/pages/6.js",pluginCreator:{name:"default-site-plugin",pluginFilepath:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018"}}},{node:{path:"/7",component:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018/src/pages/7.js",pluginCreator:{name:"default-site-plugin",pluginFilepath:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018"}}},{node:{path:"/8",component:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018/src/pages/8.js",pluginCreator:{name:"default-site-plugin",pluginFilepath:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018"}}},{node:{path:"/9",component:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018/src/pages/9.js",pluginCreator:{name:"default-site-plugin",pluginFilepath:"C:/Users/bgrill/Documents/github/oss/esri-dev-summit-presentation-2018"}}}]}},layoutContext:{}}},185:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),a=r(i),u=n(189),s=r(u),l=n(90),c=r(l);t.default=function(e){return a.default.createElement(s.default,o({},e,c.default))},e.exports=t.default},273:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,c;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(s(e))return!!s(t)&&(e=a.call(e),t=a.call(t),l(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var p=u(e),f=u(t)}catch(e){return!1}if(p.length!=f.length)return!1;for(p.sort(),f.sort(),i=p.length-1;i>=0;i--)if(p[i]!=f[i])return!1;for(i=p.length-1;i>=0;i--)if(c=p[i],!l(e[c],t[c],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,u=n(275),s=n(274),l=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},274:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},275:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},285:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return i}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},420:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),p=r(c),f=n(6),d=r(f),T=n(438),E=r(T),m=n(273),h=r(m),g=n(421),A=n(170),b=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),a(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,h.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case A.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return s({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[s({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case A.TAG_NAMES.TITLE:return s({},o,(t={},t[r.type]=a,t.titleAttributes=s({},i),t));case A.TAG_NAMES.BODY:return s({},o,{bodyAttributes:s({},i)});case A.TAG_NAMES.HTML:return s({},o,{htmlAttributes:s({},i)})}return s({},o,(n={},n[r.type]=s({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=s({},t);return Object.keys(e).forEach(function(t){var r;n=s({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,u=o(i,["children"]),s=(0,g.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,a),e.type){case A.TAG_NAMES.LINK:case A.TAG_NAMES.META:case A.TAG_NAMES.NOSCRIPT:case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:s,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),i=s({},r);return n&&(i=this.mapChildrenToProps(n,i)),p.default.createElement(e,i)},l(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(p.default.Component),t.propTypes={base:d.default.object,bodyAttributes:d.default.object,children:d.default.oneOfType([d.default.arrayOf(d.default.node),d.default.node]),defaultTitle:d.default.string,defer:d.default.bool,encodeSpecialCharacters:d.default.bool,htmlAttributes:d.default.object,link:d.default.arrayOf(d.default.object),meta:d.default.arrayOf(d.default.object),noscript:d.default.arrayOf(d.default.object),onChangeClientState:d.default.func,script:d.default.arrayOf(d.default.object),style:d.default.arrayOf(d.default.object),title:d.default.string,titleAttributes:d.default.object,titleTemplate:d.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,g.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},y=function(){return null},S=(0,E.default)(g.reducePropsToState,g.handleClientStateChange,g.mapStateOnServer)(y),_=b(S);_.renderStatic=_.rewind,t.Helmet=_,t.default=_},170:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},421:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),u=r(a),s=n(7),l=r(s),c=n(170),p=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=h(e,c.TAG_NAMES.TITLE),n=h(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=h(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},d=function(e){return h(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},E=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[c.TAG_NAMES.BASE]}).map(function(e){return e[c.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},m=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&_("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],s=u.toLowerCase();t.indexOf(s)===-1||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===c.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),t.indexOf(u)===-1||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],s=(0,l.default)({},r[u],o[u]);r[u]=s}return e},[]).reverse()},h=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},g=function(e){return{baseTag:E([c.TAG_PROPERTIES.HREF],e),bodyAttributes:T(c.ATTRIBUTE_NAMES.BODY,e),defer:h(e,c.HELMET_PROPS.DEFER),encode:h(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(c.ATTRIBUTE_NAMES.HTML,e),linkTags:m(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:m(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:m(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:T(c.ATTRIBUTE_NAMES.TITLE,e)}},A=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){A(t)},0)}}(),b=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:e.cancelAnimationFrame||b,_=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,C=function(e){v&&S(v),e.defer?v=y(function(){O(e,function(){v=null})}):(O(e),v=null)},O=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,p=e.styleTags,f=e.title,d=e.titleAttributes;R(c.TAG_NAMES.BODY,r),R(c.TAG_NAMES.HTML,o),M(f,d);var T={baseTag:w(c.TAG_NAMES.BASE,n),linkTags:w(c.TAG_NAMES.LINK,i),metaTags:w(c.TAG_NAMES.META,a),noscriptTags:w(c.TAG_NAMES.NOSCRIPT,u),scriptTags:w(c.TAG_NAMES.SCRIPT,l),styleTags:w(c.TAG_NAMES.STYLE,p)},E={},m={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(m[e]=T[e].oldTags)}),t&&t(),s(e,E,m)},P=function(e){return Array.isArray(e)?e.join(""):e},M=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=P(e)),R(c.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var s=a[u],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),o.indexOf(s)===-1&&o.push(s);var p=i.indexOf(s);p!==-1&&i.splice(p,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,a.join(","))}},w=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},I=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},N=function(e,t,n,r){var o=I(n),i=P(t);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+p(i,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+p(i,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+p(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=c.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t},t)},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t},t)},U=function(e,t,n){var r,o=(r={key:t},r[c.HELMET_ATTRIBUTE]=!0,r),i=j(n,o);return[u.default.createElement(c.TAG_NAMES.TITLE,i,t)]},H=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},D=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return U(e,t.title,t.titleAttributes,n)},toString:function(){return N(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return j(t)},toString:function(){return I(t)}};default:return{toComponent:function(){return H(e,t)},toString:function(){return L(e,t,n)}}}},k=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,s=e.scriptTags,l=e.styleTags,p=e.title,f=void 0===p?"":p,d=e.titleAttributes;return{base:D(c.TAG_NAMES.BASE,t,r),bodyAttributes:D(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:D(c.ATTRIBUTE_NAMES.HTML,o,r),link:D(c.TAG_NAMES.LINK,i,r),meta:D(c.TAG_NAMES.META,a,r),noscript:D(c.TAG_NAMES.NOSCRIPT,u,r),script:D(c.TAG_NAMES.SCRIPT,s,r),style:D(c.TAG_NAMES.STYLE,l,r),title:D(c.TAG_NAMES.TITLE,{title:f,titleAttributes:d},r)}};t.convertReactPropstoHtmlAttributes=G,t.handleClientStateChange=C,t.mapStateOnServer=k,t.reducePropsToState=g,t.requestAnimationFrame=y,t.warn=_}).call(t,function(){return this}())},438:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(1),s=r(u),l=n(285),c=r(l),p=n(459),f=r(p);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(l){function p(){T=e(d.map(function(e){return e.props})),E.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof l)throw new Error("Expected WrappedComponent to be a React component.");var d=[],T=void 0,E=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,d=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,f.default)(e,this.props)},t.prototype.componentWillMount=function(){d.push(this),p()},t.prototype.componentDidUpdate=function(){p()},t.prototype.componentWillUnmount=function(){var e=d.indexOf(this);d.splice(e,1),p()},t.prototype.render=function(){return s.default.createElement(l,this.props)},t}(u.Component);return E.displayName="SideEffect("+r(l)+")",E.canUseDOM=c.default.canUseDOM,E}}},459:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var l=i[s];if(!u(l))return!1;var c=e[l],p=t[l];if(o=n?n.call(r,c,p,l):void 0,o===!1||void 0===o&&c!==p)return!1}return!0}},299:function(e,t,n){e.exports=n.p+"static/favicon.c92b85a5.ico"},286:function(e,t){},189:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=n(1),s=r(u),l=n(6),c=r(l),p=n(13),f=r(p),d=n(420),T=r(d);n(286);var E=n(299),m=r(E),h=function(e){var t=e.name,n=e.org,r=e.title,o=e.date;return s.default.createElement("header",null,s.default.createElement(f.default,{to:(0,p.withPrefix)("/1")},s.default.createElement("span",null,t+" | "+n)," — ",r),s.default.createElement("time",null,o))},g=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.componentDidMount=function(){var e=this;document.addEventListener("keydown",function(t){var n=t.keyCode,r=parseInt(location.pathname.substr(1)),o=39,i=37,a=e.props.data.allSitePage.edges.filter(function(e){var t=parseInt(e.node.path.substr(1));if(t&&404!==t)return!0});if(r){if(n===i&&1===r)return!1;if(n===o&&r===a.length)return!1;n===o?(0,p.navigateTo)((0,p.withPrefix)("/"+(r+1))):n===i&&(0,p.navigateTo)((0,p.withPrefix)("/"+(r-1)))}})},t.prototype.render=function(){var e=this.props,t=e.children,n=e.data;return s.default.createElement("div",null,s.default.createElement(T.default,null,s.default.createElement("title",null,n.site.siteMetadata.title+" | "+n.site.siteMetadata.name),s.default.createElement("link",{rel:"shortcut icon",href:m.default})),s.default.createElement(h,{name:n.site.siteMetadata.name,org:n.site.siteMetadata.org,title:n.site.siteMetadata.title,date:n.site.siteMetadata.date}),s.default.createElement("div",{id:"slide"},t()))},t}(u.Component);g.propTypes={children:c.default.func,data:c.default.object},t.default=g;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-layouts-index-js-58013a36da57807c863f.js.map