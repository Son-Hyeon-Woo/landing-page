/*! For license information please see 09d7b5e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{1723:function(e,t,n){},2426:function(e,t,n){"use strict";n(1723)},2926:function(e,t,n){"use strict";n.r(t);var r=n(11),i=n(16),o=n(2),a=n(3),c=n(12),s=n(8),u=n(4),l=n(9),p=(n(41),n(17),n(40),n(75),n(29),n(140),n(109),n(33),n(50),n(37),n(15),n(49),n(83),n(28),n(84),n(30),n(368),n(19),n(22),n(34)),f=n(13),d=n(816),h=n(85);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _callSuper(e,t,n){return t=Object(s.a)(t),Object(c.a)(e,_isNativeReflectConstruct()?Reflect.construct(t,n||[],Object(s.a)(e).constructor):t.apply(e,n))}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!e})()}var y,__decorate=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},__metadata=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(e){function NextViewAppPageComponent(){var e;return Object(o.a)(this,NextViewAppPageComponent),(e=_callSuper(this,NextViewAppPageComponent,arguments)).appEditStore=Object(h.default)(e.$pinia),e.deviceWidth=0,e.deviceHeight=0,e}return Object(u.a)(NextViewAppPageComponent,e),Object(a.a)(NextViewAppPageComponent,[{key:"classes",get:function get(){var e,t=[];return(null===(e=this.data.metadata)||void 0===e?void 0:e.animationClasses)&&(t=Object(i.a)(Object.keys(this.data.metadata.animationClasses))),t}},{key:"scale",get:function get(){this.deviceWidth=window.innerWidth,this.deviceHeight=window.innerHeight;var e=Number(this.data.styles.width.replace("px",""));if(this.deviceWidth<e||this.$device.isMobile||window.self!==window.top&&Object.keys(this.$route.query).includes("isMobile")){var t=this.deviceWidth/e;return this.appEditStore.setViewerScale(t),t}}},{key:"isMobile",get:function get(){return this.$device.isMobile||"true"===this.$route.query.isMobile}},{key:"newStyle",get:function get(){var e,t=JSON.parse(JSON.stringify(this.data.styles));return delete t["background-image"],delete t["background-color"],delete t["background-size"],delete t["background-position"],"100%"==t.height&&(delete t.height,t["min-height"]="100%"),this.scale&&t.height&&(t.height=Number(t.height.replace("px",""))*this.scale+"px"),(null===(e=this.data.metadata)||void 0===e?void 0:e.animationStyles)&&(t=_objectSpread(_objectSpread({},t),this.data.metadata.animationStyles)),_objectSpread(_objectSpread({},t),{},{width:this.isMobile?t.width:"100%",height:"inherit",position:"relative"})}},{key:"appHeight",get:function get(){return Number(this.data.styles.height.replace("px",""))}},{key:"appBlockHeight",get:function get(){return this.appEditStore.appBlocks.reduce((function(e,t){var n;return e+(null!==(n=t.metadata.dynamicH)&&void 0!==n?n:t.h)}),0)}},{key:"wrapperStyle",get:function get(){var e={"transform-origin":"0 0"};if(this.scale){var t=Number(this.data.styles.width.replace("px","")),n=Math.max(this.appHeight,this.appBlockHeight);return e.width=t+"px",e.height="".concat(n*this.scale,"px"),e.transform="scale(".concat(this.scale,")"),t<this.deviceWidth&&(e["transform-origin"]="top center !important"),e}}},{key:"isClickPreventer",get:function get(){return!!Object(f.i)(this.data,"AppSubtitle")}},{key:"appBlockElements",get:function get(){return this.data.childs.slice().sort((function(e,t){return e.grid.y>t.grid.y?1:e.grid.y<t.grid.y?-1:e.grid.x>t.grid.x?1:e.grid.x<t.grid.x?-1:0}))}},{key:"fixedElements",get:function get(){if(this.data){var e=[];return function rec(t,n){if(null!=t)for(var r in t.childs)t.childs[r].positionFixed.isActivated?e.push({element:t.childs[r],parents:[t].concat(Object(i.a)(n))}):rec(t.childs[r],[t].concat(Object(i.a)(n)))}(this.data,[]),e}}},{key:"onClick",value:function onClick(e){var t=this;this.appEditStore.page&&this.appEditStore.setMeta((function(){t.appEditStore.page.datas.page.metadata.clickedCount++})),this.click(this.data)}},{key:"wrapperProps",get:function get(){return{class:"d-flex justify-content-center",style:{position:"absolute","background-color":this.data.styles["background-color"],"min-width":this.data.styles.width,"min-height":"100%",width:"100%",overflow:"hidden"}}}},{key:"wrapperListeners",get:function get(){return{click:this.onClick}}}])}(Object(p.mixins)(p.Vue,d.a));__decorate([Object(p.Prop)(),__metadata("design:type","function"==typeof(y="undefined"!=typeof AppPage&&AppPage)?y:Object)],g.prototype,"data",void 0);var v=g=__decorate([Object(p.Component)({components:{LazyNextViewAppBlock:function LazyNextViewAppBlock(){return n.e(501).then(n.bind(null,3002))},LazyEditFixedElementRenderer:function LazyEditFixedElementRenderer(){return n.e(65).then(n.bind(null,3001))}}})],g),b=(n(2426),n(64)),m=Object(b.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._b({on:{click:e.onClick}},"div",e.wrapperProps,!1),[e.isClickPreventer?n("div",{staticClass:"ClickPreventer w-100 h-100 position-absolute"}):e._e(),e._v(" "),n("div",{style:{position:"absolute",top:0,left:0,width:"100%","min-height":"100%",opacity:e.data.styles["background-opacity"]}},[e.data.styles["background-image"]?n("div",{staticClass:"background",class:e.classes,style:{position:"absolute",top:0,bottom:0,width:"100%",height:"100%","background-image":e.data.styles["background-image"],"background-size":"cover","background-position":"center","background-repeat":"no-repeat","-webkit-touch-callout":"none"}}):e._e()]),e._v(" "),n("div",{ref:"AppPage",staticClass:"AppPage",class:e.classes,style:e.newStyle},[n("div",{staticClass:"position-relative",style:e.wrapperStyle},e._l(e.appBlockElements,(function(e){return n("LazyNextViewAppBlock",{key:e.id,attrs:{data:e}})})),1),e._v(" "),n("div",{staticClass:"Fixed"},[e._l(e.fixedElements,(function(e){var t=e.element;return[n("LazyEditFixedElementRenderer",{key:t.id,attrs:{element:t,editable:!1}})]}))],2)])])}),[],!1,null,"df2f7b2a",null);t.default=m.exports},816:function(e,t,n){"use strict";var r=n(6),i=n(2),o=n(3),a=n(12),c=n(8),s=n(4),u=n(9),l=(n(33),n(17),n(27),n(47),n(32),n(44),n(29),n(20),n(45),n(46),n(43),n(42),n(15),n(30),n(28),n(19),n(22),n(34)),p=n(122),f=n(10),d=n(85);function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function define(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{define({},"")}catch(e){define=function define(e,t,n){return e[t]=n}}function wrap(e,t,n,r){var o=t&&t.prototype instanceof Generator?t:Generator,a=Object.create(o.prototype),c=new Context(r||[]);return i(a,"_invoke",{value:makeInvokeMethod(e,n,c)}),a}function tryCatch(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=wrap;var l="suspendedStart",p="executing",f="completed",d={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var h={};define(h,a,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(values([])));g&&g!==n&&r.call(g,a)&&(h=g);var v=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(h);function defineIteratorMethods(e){["next","throw","return"].forEach((function(t){define(e,t,(function(e){return this._invoke(t,e)}))}))}function AsyncIterator(e,t){function invoke(n,i,o,a){var c=tryCatch(e[n],e,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==Object(u.a)(l)&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){invoke("next",e,o,a)}),(function(e){invoke("throw",e,o,a)})):t.resolve(l).then((function(e){s.value=e,o(s)}),(function(e){return invoke("throw",e,o,a)}))}a(c.arg)}var n;i(this,"_invoke",{value:function value(e,r){function callInvokeWithMethodAndArg(){return new t((function(t,n){invoke(e,r,t,n)}))}return n=n?n.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(t,n,r){var i=l;return function(o,a){if(i===p)throw Error("Generator is already running");if(i===f){if("throw"===o)throw a;return{value:e,done:!0}}for(r.method=o,r.arg=a;;){var c=r.delegate;if(c){var s=maybeInvokeDelegate(c,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===l)throw i=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=p;var u=tryCatch(t,n,r);if("normal"===u.type){if(i=r.done?f:"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(i=f,r.method="throw",r.arg=u.arg)}}}function maybeInvokeDelegate(t,n){var r=n.method,i=t.iterator[r];if(i===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,maybeInvokeDelegate(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=tryCatch(i,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function pushTryEntry(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function resetTryEntry(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function Context(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(pushTryEntry,this),this.reset(!0)}function values(t){if(t||""===t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function next(){for(;++i<t.length;)if(r.call(t,i))return next.value=t[i],next.done=!1,next;return next.value=e,next.done=!0,next};return o.next=o}}throw new TypeError(Object(u.a)(t)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,i(v,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),i(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===GeneratorFunction||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,define(e,s,"GeneratorFunction")),e.prototype=Object.create(v),e},t.awrap=function(e){return{__await:e}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),t.AsyncIterator=AsyncIterator,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new AsyncIterator(wrap(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},defineIteratorMethods(v),define(v,s,"Generator"),define(v,a,(function(){return this})),define(v,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function next(){for(;n.length;){var e=n.pop();if(e in t)return next.value=e,next.done=!1,next}return next.done=!0,next}},t.values=values,Context.prototype={constructor:Context,reset:function reset(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(resetTryEntry),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function stop(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function dispatchException(t){if(this.done)throw t;var n=this;function handle(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return handle("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0);if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}}}},abrupt:function abrupt(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function complete(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function finish(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),resetTryEntry(n),d}},catch:function _catch(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;resetTryEntry(n)}return i}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(t,n,r){return this.delegate={iterator:values(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}function _callSuper(e,t,n){return t=Object(c.a)(t),Object(a.a)(e,_isNativeReflectConstruct()?Reflect.construct(t,n||[],Object(c.a)(e).constructor):t.apply(e,n))}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!e})()}var __decorate=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":Object(u.a)(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},h=function(e){function MixinLogics(){var e;return Object(i.a)(this,MixinLogics),(e=_callSuper(this,MixinLogics,arguments)).appEditStore=Object(d.default)(e.$pinia),e}return Object(s.a)(MixinLogics,e),Object(o.a)(MixinLogics,[{key:"click",value:(n=Object(r.a)(_regeneratorRuntime().mark((function _callee(e){var t,n,r;return _regeneratorRuntime().wrap((function _callee$(i){for(;;)switch(i.prev=i.next){case 0:t=Object(p.c)(this.$route);try{e.type!==f.a.AppButton&&e.type!==f.a.AppImage&&e.type!==f.a.AppForm||t||this.$stats({type:"click",appId:this.appEditStore.page.app,pageId:this.appEditStore.page.page,elementId:e.id})}catch(e){console.log(e)}n=0;case 3:if(!(n<=e.metadata.clickHandlers.length)){i.next=11;break}if(!(r=e.metadata.clickHandlers[n])||"function"!=typeof r){i.next=8;break}return i.next=8,r();case 8:n++,i.next=3;break;case 11:case"end":return i.stop()}}),_callee,this)}))),function click(e){return n.apply(this,arguments)})},{key:"messageReceived",value:(t=Object(r.a)(_regeneratorRuntime().mark((function _callee2(e,t){var n,r,i;return _regeneratorRuntime().wrap((function _callee2$(o){for(;;)switch(o.prev=o.next){case 0:if(!e.metadata.messageHandlers[t]){o.next=11;break}n=e.metadata.messageHandlers[t],r=0;case 3:if(!(r<=n.length)){o.next=11;break}if(!(i=n[r])||"function"!=typeof i){o.next=8;break}return o.next=8,i();case 8:r++,o.next=3;break;case 11:case"end":return o.stop()}}),_callee2)}))),function messageReceived(e,n){return t.apply(this,arguments)})},{key:"findLogic",value:function findLogic(e,t,n){return this.findLogics(e,t,n)[0]}},{key:"findLogics",value:function findLogics(e,t,n){var r=[];for(var i in e)for(var o in e[i].conditions)if(null==t)for(var a in e[i].results)(null==n||e[i].results[a].type===n)&&r.push({condition:e[i].conditions[o],result:e[i].results[a]});else if(e[i].conditions[o].type===t)for(var c in e[i].results)(null==n||e[i].results[c].type===n)&&r.push({condition:e[i].conditions[o],result:e[i].results[c]});return r}}]);var t,n}(l.Vue);h=__decorate([l.Component],h),t.a=h}}]);