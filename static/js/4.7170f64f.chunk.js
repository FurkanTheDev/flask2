(this.webpackJsonpinstagram=this.webpackJsonpinstagram||[]).push([[4],{49:function(t,e,n){t.exports=n(53)},50:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a){try{var s=t[i](a),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function s(t){r(a,o,i,s,u,"next",t)}function u(t){r(a,o,i,s,u,"throw",t)}s(void 0)}))}}n.d(e,"a",(function(){return o}))},53:function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(E){u=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new k(r||[]);return i._invoke=function(t,e,n){var r=l;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return L()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=S(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=h(t,e,n);if("normal"===u.type){if(r=n.done?p:f,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(E){return{type:"throw",arg:E}}}t.wrap=c;var l="suspendedStart",f="suspendedYield",d="executing",p="completed",g={};function y(){}function v(){}function m(){}var b={};u(b,i,(function(){return this}));var w=Object.getPrototypeOf,O=w&&w(w(C([])));O&&O!==n&&r.call(O,i)&&(b=O);var x=m.prototype=y.prototype=Object.create(b);function M(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function n(o,i,a,s){var u=h(t[o],t,i);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"===typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(l).then((function(t){c.value=t,a(c)}),(function(t){return n("throw",t,a,s)}))}s(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=h(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function C(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:L}}function L(){return{value:e,done:!0}}return v.prototype=m,u(x,"constructor",m),u(m,"constructor",v),v.displayName=u(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},M(P.prototype),u(P.prototype,a,(function(){return this})),t.AsyncIterator=P,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new P(c(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},M(x),u(x,s,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=C,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return s.type="throw",s.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:C(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=r}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},57:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},58:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},59:function(t,e,n){t.exports=function(t,e){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=n(t),o=n(e);function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)),r}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){if(null==t)return{};var n,r=function(t,e){if(null==t)return{};for(var n,r={},o=Object.keys(t),i=0;i<o.length;i++)n=o[i],0<=e.indexOf(n)||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols)for(var o=Object.getOwnPropertySymbols(t),i=0;i<o.length;i++)n=o[i],0<=e.indexOf(n)||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n]);return r}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var t,r,o=h(e);return!(r=n?(t=h(this).constructor,Reflect.construct(o,arguments,t)):o.apply(this,arguments))||"object"!=typeof r&&"function"!=typeof r?d(this):r}}function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}}(t,e)||y(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function m(t,e){return new Promise((function(n,r){var o,i=new Image;i.onload=function(){return n(i)},i.onerror=r,0==(null!==(o=t)&&!!o.match(/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i))&&e&&(i.crossOrigin=e),i.src=t}))}var b,w=!("undefined"==typeof window||"undefined"==typeof navigator||!("ontouchstart"in window||0<navigator.msMaxTouchPoints)),O="undefined"!=typeof File,x={touch:{react:{down:"onTouchStart",mouseDown:"onMouseDown",drag:"onTouchMove",move:"onTouchMove",mouseMove:"onMouseMove",up:"onTouchEnd",mouseUp:"onMouseUp"},native:{down:"touchstart",mouseDown:"mousedown",drag:"touchmove",move:"touchmove",mouseMove:"mousemove",up:"touchend",mouseUp:"mouseup"}},desktop:{react:{down:"onMouseDown",drag:"onDragOver",move:"onMouseMove",up:"onMouseUp"},native:{down:"mousedown",drag:"dragStart",move:"mousemove",up:"mouseup"}}},M=w?x.touch:x.desktop,P="undefined"!=typeof window&&window.devicePixelRatio?window.devicePixelRatio:1,S={x:.5,y:.5},I=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(u,o.default.Component);var t,e,n,r=p(u);function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),a(d(e=r.call(this,t)),"state",{drag:!1,my:null,mx:null,image:S}),a(d(e),"handleImageReady",(function(t){var n=e.getInitialSize(t.width,t.height);n.resource=t,n.x=.5,n.y=.5,n.backgroundColor=e.props.backgroundColor,e.setState({drag:!1,image:n},e.props.onImageReady),e.props.onLoadSuccess(n)})),a(d(e),"clearImage",(function(){e.canvas.getContext("2d").clearRect(0,0,e.canvas.width,e.canvas.height),e.setState({image:S})})),a(d(e),"handleMouseDown",(function(t){(t=t||window.event).preventDefault(),e.setState({drag:!0,mx:null,my:null})})),a(d(e),"handleMouseUp",(function(){e.state.drag&&(e.setState({drag:!1}),e.props.onMouseUp())})),a(d(e),"handleMouseMove",(function(t){var n,r,o,i,a,s,u,h,l,f,d,p,g,y,v,m;t=t||window.event,!1!==e.state.drag&&(t.preventDefault(),o={mx:n=t.targetTouches?t.targetTouches[0].pageX:t.clientX,my:r=t.targetTouches?t.targetTouches[0].pageY:t.clientY},m=e.props.rotate,m=(m%=360)<0?m+360:m,e.state.mx&&e.state.my&&(i=e.state.mx-n,a=e.state.my-r,s=e.state.image.width*e.props.scale,u=e.state.image.height*e.props.scale,l=(h=e.getCroppingRect()).x,f=h.y,l*=s,f*=u,d=function(t){return t*(Math.PI/180)},p=Math.cos(d(m)),y=f+-i*(g=Math.sin(d(m)))+a*p,v={x:(l+i*p+a*g)/s+1/e.props.scale*e.getXScale()/2,y:y/u+1/e.props.scale*e.getYScale()/2},e.props.onPositionChange(v),o.image=c(c({},e.state.image),v)),e.setState(o),e.props.onMouseMove(t))})),a(d(e),"setCanvas",(function(t){e.canvas=t})),e.canvas=null,e}return t=u,(e=[{key:"componentDidMount",value:function(){this.props.disableHiDPIScaling&&(P=1);var t,e,n=this.canvas.getContext("2d");this.props.image&&this.loadImage(this.props.image),this.paint(n),document&&(t=!!function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){t=!1}return t}()&&{passive:!1},e=M.native,document.addEventListener(e.move,this.handleMouseMove,t),document.addEventListener(e.up,this.handleMouseUp,t),w&&(document.addEventListener(e.mouseMove,this.handleMouseMove,t),document.addEventListener(e.mouseUp,this.handleMouseUp,t)))}},{key:"componentDidUpdate",value:function(t,e){this.props.image&&this.props.image!==t.image||this.props.width!==t.width||this.props.height!==t.height||this.props.backgroundColor!==t.backgroundColor?this.loadImage(this.props.image):this.props.image||e.image===S||this.clearImage();var n=this.canvas.getContext("2d");n.clearRect(0,0,this.canvas.width,this.canvas.height),this.paint(n),this.paintImage(n,this.state.image,this.props.border),t.image===this.props.image&&t.width===this.props.width&&t.height===this.props.height&&t.position===this.props.position&&t.scale===this.props.scale&&t.rotate===this.props.rotate&&e.my===this.state.my&&e.mx===this.state.mx&&e.image.x===this.state.image.x&&e.image.y===this.state.image.y&&e.backgroundColor===this.state.backgroundColor||this.props.onImageChange()}},{key:"componentWillUnmount",value:function(){var t;document&&(t=M.native,document.removeEventListener(t.move,this.handleMouseMove,!1),document.removeEventListener(t.up,this.handleMouseUp,!1),w&&(document.removeEventListener(t.mouseMove,this.handleMouseMove,!1),document.removeEventListener(t.mouseUp,this.handleMouseUp,!1)))}},{key:"isVertical",value:function(){return!this.props.disableCanvasRotation&&this.props.rotate%180!=0}},{key:"getBorders",value:function(t){var e=0<arguments.length&&void 0!==t?t:this.props.border;return Array.isArray(e)?e:[e,e]}},{key:"getDimensions",value:function(){var t=this.props,e=t.width,n=t.height,r=t.rotate,o=t.border,i={},a=g(this.getBorders(o),2),s=a[0],u=a[1],c=e,h=n;return this.isVertical()?(i.width=h,i.height=c):(i.width=c,i.height=h),i.width+=2*s,i.height+=2*u,{canvas:i,rotate:r,width:e,height:n,border:o}}},{key:"getImage",value:function(){var t=this.getCroppingRect(),e=this.state.image;t.x*=e.resource.width,t.y*=e.resource.height,t.width*=e.resource.width,t.height*=e.resource.height;var n=document.createElement("canvas");this.isVertical()?(n.width=t.height,n.height=t.width):(n.width=t.width,n.height=t.height);var r=n.getContext("2d");return r.translate(n.width/2,n.height/2),r.rotate(this.props.rotate*Math.PI/180),r.translate(-n.width/2,-n.height/2),this.isVertical()&&r.translate((n.width-n.height)/2,(n.height-n.width)/2),e.backgroundColor&&(r.fillStyle=e.backgroundColor,r.fillRect(-t.x,-t.y,e.resource.width,e.resource.height)),r.drawImage(e.resource,-t.x,-t.y),n}},{key:"getImageScaledToCanvas",value:function(){var t=this.getDimensions(),e=t.width,n=t.height,r=document.createElement("canvas");return this.isVertical()?(r.width=n,r.height=e):(r.width=e,r.height=n),this.paintImage(r.getContext("2d"),this.state.image,0,1),r}},{key:"getXScale",value:function(){var t=this.props.width/this.props.height,e=this.state.image.width/this.state.image.height;return Math.min(1,t/e)}},{key:"getYScale",value:function(){var t=this.props.height/this.props.width,e=this.state.image.height/this.state.image.width;return Math.min(1,t/e)}},{key:"getCroppingRect",value:function(){var t=this.props.position||{x:this.state.image.x,y:this.state.image.y},e=1/this.props.scale*this.getXScale(),n=1/this.props.scale*this.getYScale(),r={x:t.x-e/2,y:t.y-n/2,width:e,height:n},o=0,i=1-r.width,a=0,s=1-r.height;return(this.props.disableBoundaryChecks||1<e||1<n)&&(o=-r.width,a=-r.height,s=i=1),c(c({},r),{},{x:Math.max(o,Math.min(r.x,i)),y:Math.max(a,Math.min(r.y,s))})}},{key:"loadImage",value:function(t){var e;O&&t instanceof File?this.loadingImage=(e=t,new Promise((function(t,n){var r=new FileReader;r.onload=function(e){try{var r=m(e.target.result);t(r)}catch(e){n(e)}},r.readAsDataURL(e)})).then(this.handleImageReady).catch(this.props.onLoadFailure)):"string"==typeof t&&(this.loadingImage=m(t,this.props.crossOrigin).then(this.handleImageReady).catch(this.props.onLoadFailure))}},{key:"getInitialSize",value:function(t,e){var n,r,o=this.getDimensions();return e/t<o.height/o.width?r=t*((n=this.getDimensions().height)/e):n=e*((r=this.getDimensions().width)/t),{height:n,width:r}}},{key:"paintImage",value:function(t,e,n,r){var o,i=3<arguments.length&&void 0!==r?r:P;e.resource&&(o=this.calculatePosition(e,n),t.save(),t.translate(t.canvas.width/2,t.canvas.height/2),t.rotate(this.props.rotate*Math.PI/180),t.translate(-t.canvas.width/2,-t.canvas.height/2),this.isVertical()&&t.translate((t.canvas.width-t.canvas.height)/2,(t.canvas.height-t.canvas.width)/2),t.scale(i,i),t.globalCompositeOperation="destination-over",t.drawImage(e.resource,o.x,o.y,o.width,o.height),e.backgroundColor&&(t.fillStyle=e.backgroundColor,t.fillRect(o.x,o.y,o.width,o.height)),t.restore())}},{key:"calculatePosition",value:function(t,e){t=t||this.state.image;var n=g(this.getBorders(e),2),r=n[0],o=n[1],i=this.getCroppingRect(),a=t.width*this.props.scale,s=t.height*this.props.scale,u=-i.x*a,c=-i.y*s;return this.isVertical()?(u+=o,c+=r):(u+=r,c+=o),{x:u,y:c,height:s,width:a}}},{key:"paint",value:function(t){t.save(),t.scale(P,P),t.translate(0,0),t.fillStyle="rgba("+this.props.color.slice(0,4).join(",")+")";var e,n,r,o,i,a,s,u,c=this.props.borderRadius,h=this.getDimensions(),l=g(this.getBorders(h.border),2),f=l[0],d=l[1],p=h.canvas.height,y=h.canvas.width;c=Math.max(c,0),c=Math.min(c,y/2-f,p/2-d),t.beginPath(),e=t,o=y-2*(n=f),i=p-2*(r=d),0===(a=c)?e.rect(n,r,o,i):(s=o-a,u=i-a,e.translate(n,r),e.arc(a,a,a,Math.PI,1.5*Math.PI),e.lineTo(s,0),e.arc(s,a,a,1.5*Math.PI,2*Math.PI),e.lineTo(o,u),e.arc(s,u,a,2*Math.PI,.5*Math.PI),e.lineTo(a,i),e.arc(a,u,a,.5*Math.PI,Math.PI),e.translate(-n,-r)),t.rect(y,0,-y,p),t.fill("evenodd"),t.restore()}},{key:"render",value:function(){var t=this.props,e=(t.scale,t.rotate,t.image,t.border,t.borderRadius,t.width,t.height,t.position,t.color,t.backgroundColor,t.style),n=(t.crossOrigin,t.onLoadFailure,t.onLoadSuccess,t.onImageReady,t.onImageChange,t.onMouseUp,t.onMouseMove,t.onPositionChange,t.disableBoundaryChecks,t.disableHiDPIScaling,t.disableCanvasRotation,f(t,["scale","rotate","image","border","borderRadius","width","height","position","color","backgroundColor","style","crossOrigin","onLoadFailure","onLoadSuccess","onImageReady","onImageChange","onMouseUp","onMouseMove","onPositionChange","disableBoundaryChecks","disableHiDPIScaling","disableCanvasRotation"])),r=this.getDimensions(),i={width:r.canvas.width,height:r.canvas.height,cursor:this.state.drag?"grabbing":"grab",touchAction:"none"},a={width:r.canvas.width*P,height:r.canvas.height*P,style:c(c({},i),e)};return a[M.react.down]=this.handleMouseDown,w&&(a[M.react.mouseDown]=this.handleMouseDown),o.default.createElement("canvas",s({ref:this.setCanvas},a,n))}}])&&i(t.prototype,e),n&&i(t,n),u}();return a(I,"propTypes",{scale:r.default.number,rotate:r.default.number,image:r.default.oneOfType([r.default.string].concat(function(t){if(Array.isArray(t))return v(t)}(b=O?[r.default.instanceOf(File)]:[])||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(b)||y(b)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),border:r.default.oneOfType([r.default.number,r.default.arrayOf(r.default.number)]),borderRadius:r.default.number,width:r.default.number,height:r.default.number,position:r.default.shape({x:r.default.number,y:r.default.number}),color:r.default.arrayOf(r.default.number),backgroundColor:r.default.string,crossOrigin:r.default.oneOf(["","anonymous","use-credentials"]),onLoadFailure:r.default.func,onLoadSuccess:r.default.func,onImageReady:r.default.func,onImageChange:r.default.func,onMouseUp:r.default.func,onMouseMove:r.default.func,onPositionChange:r.default.func,disableBoundaryChecks:r.default.bool,disableHiDPIScaling:r.default.bool,disableCanvasRotation:r.default.bool}),a(I,"defaultProps",{scale:1,rotate:0,border:25,borderRadius:0,width:200,height:200,color:[0,0,0,.5],onLoadFailure:function(){},onLoadSuccess:function(){},onImageReady:function(){},onImageChange:function(){},onMouseUp:function(){},onMouseMove:function(){},onPositionChange:function(){},disableBoundaryChecks:!1,disableHiDPIScaling:!1,disableCanvasRotation:!0}),I}(n(17),n(1))},61:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=r(t);if(e){var a=r(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return i(this,n)}}n.d(e,"a",(function(){return a}))},62:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))}}]);
//# sourceMappingURL=4.7170f64f.chunk.js.map