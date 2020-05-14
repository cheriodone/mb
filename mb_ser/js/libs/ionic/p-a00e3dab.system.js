var __awaiter=this&&this.__awaiter||function(e,n,r,t){function i(e){return e instanceof r?e:new r((function(n){n(e)}))}return new(r||(r=Promise))((function(r,a){function o(e){try{u(t.next(e))}catch(n){a(n)}}function s(e){try{u(t["throw"](e))}catch(n){a(n)}}function u(e){e.done?r(e.value):i(e.value).then(o,s)}u((t=t.apply(e,n||[])).next())}))};var __generator=this&&this.__generator||function(e,n){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},t,i,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(n){return u([e,n])}}function u(o){if(t)throw new TypeError("Generator is already executing.");while(r)try{if(t=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;i=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(o[0]===6&&r.label<a[1]){r.label=a[1];a=o;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(o);break}if(a[2])r.ops.pop();r.trys.pop();continue}o=n.call(e,r)}catch(s){o=[6,s];i=0}finally{t=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-8b1a777b.system.js"],(function(e,n){"use strict";var r,t;return{setters:[function(e){r=e.w;t=e.B}],execute:function(){var i=this;var a=e("L","ionViewWillEnter");var o=e("a","ionViewDidEnter");var s=e("b","ionViewWillLeave");var u=e("c","ionViewDidLeave");var c=e("d","ionViewWillUnload");var l=function(){return n.import("./p-c9a30c90.system.js")};var f=function(){return n.import("./p-ecee64e3.system.js")};var v=e("t",(function(e){return new Promise((function(n,t){r((function(){d(e);h(e).then((function(r){if(r.animation){r.animation.destroy()}p(e);n(r)}),(function(n){p(e);t(n)}))}))}))}));var d=function(e){var n=e.enteringEl;var r=e.leavingEl;A(n,r,e.direction);if(e.showGoBack){n.classList.add("can-go-back")}else{n.classList.remove("can-go-back")}P(n,false);if(r){P(r,false)}};var h=function(e){return __awaiter(i,void 0,void 0,(function(){var n,r;return __generator(this,(function(i){switch(i.label){case 0:return[4,b(e)];case 1:n=i.sent();r=n&&t.isBrowser?g(n,e):w(e);return[2,r]}}))}))};var p=function(e){var n=e.enteringEl;var r=e.leavingEl;n.classList.remove("ion-page-invisible");if(r!==undefined){r.classList.remove("ion-page-invisible")}};var b=function(e){return __awaiter(i,void 0,void 0,(function(){var n,r;return __generator(this,(function(t){switch(t.label){case 0:if(!e.leavingEl||!e.animated||e.duration===0){return[2,undefined]}if(e.animationBuilder){return[2,e.animationBuilder]}if(!(e.mode==="ios"))return[3,2];return[4,l()];case 1:r=t.sent().iosTransitionAnimation;return[3,4];case 2:return[4,f()];case 3:r=t.sent().mdTransitionAnimation;t.label=4;case 4:n=r;return[2,n]}}))}))};var g=function(e,n){return __awaiter(i,void 0,void 0,(function(){var r,t;return __generator(this,(function(i){switch(i.label){case 0:return[4,m(n,true)];case 1:i.sent();r=e(n.baseEl,n);E(n.enteringEl,n.leavingEl);return[4,y(r,n)];case 2:t=i.sent();if(n.progressCallback){n.progressCallback(undefined)}if(t){k(n.enteringEl,n.leavingEl)}return[2,{hasCompleted:t,animation:r}]}}))}))};var w=function(e){return __awaiter(i,void 0,void 0,(function(){var n,r;return __generator(this,(function(t){switch(t.label){case 0:n=e.enteringEl;r=e.leavingEl;return[4,m(e,false)];case 1:t.sent();E(n,r);k(n,r);return[2,{hasCompleted:true}]}}))}))};var m=function(e,n){return __awaiter(i,void 0,void 0,(function(){var r,t;return __generator(this,(function(i){switch(i.label){case 0:r=e.deepWait!==undefined?e.deepWait:n;t=r?[C(e.enteringEl),C(e.leavingEl)]:[x(e.enteringEl),x(e.leavingEl)];return[4,Promise.all(t)];case 1:i.sent();return[4,_(e.viewIsReady,e.enteringEl)];case 2:i.sent();return[2]}}))}))};var _=function(e,n){return __awaiter(i,void 0,void 0,(function(){return __generator(this,(function(r){switch(r.label){case 0:if(!e)return[3,2];return[4,e(n)];case 1:r.sent();r.label=2;case 2:return[2]}}))}))};var y=function(e,n){var r=n.progressCallback;var t=new Promise((function(n){e.onFinish((function(e){return n(e===1)}))}));if(r){e.progressStart(true);r(e)}else{e.play()}return t};var E=function(e,n){L(n,s);L(e,a)};var k=function(e,n){L(e,o);L(n,u)};var L=e("l",(function(e,n){if(e){var r=new CustomEvent(n,{bubbles:false,cancelable:false});e.dispatchEvent(r)}}));var x=function(e){if(e&&e.componentOnReady){return e.componentOnReady()}return Promise.resolve()};var C=e("e",(function(e){return __awaiter(i,void 0,void 0,(function(){var n,r;return __generator(this,(function(t){switch(t.label){case 0:n=e;if(!n)return[3,4];if(!(n.componentOnReady!=null))return[3,2];return[4,n.componentOnReady()];case 1:r=t.sent();if(r!=null){return[2]}t.label=2;case 2:return[4,Promise.all(Array.from(n.children).map(C))];case 3:t.sent();t.label=4;case 4:return[2]}}))}))}));var P=e("s",(function(e,n){if(n){e.setAttribute("aria-hidden","true");e.classList.add("ion-page-hidden")}else{e.hidden=false;e.removeAttribute("aria-hidden");e.classList.remove("ion-page-hidden")}}));var A=function(e,n,r){if(e!==undefined){e.style.zIndex=r==="back"?"99":"101"}if(n!==undefined){n.style.zIndex="100"}};var B=e("g",(function(e){if(e.classList.contains("ion-page")){return e}var n=e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");if(n){return n}return e}))}}}));