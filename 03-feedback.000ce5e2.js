!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,g=Math.max,m=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var o,r,u,a,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function O(e){return c=e,f=setTimeout(h,t),s?b(e):a}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function h(){var e=p();if(S(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?m(n,u-(e-c)):n}(e))}function w(e){return f=void 0,v&&o?b(e):(o=r=void 0,a)}function T(){var e=p(),n=S(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return O(l);if(d)return f=setTimeout(h,t),b(l)}return void 0===f&&(f=setTimeout(h,t)),a}return t=j(t)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?g(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},T.flush=function(){return void 0===f?a:w(p())},T}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=a.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:o,maxWait:t,trailing:r})};var O=document.querySelector(".feedback-form");O.addEventListener("input",e(t)((function(e){w[e.target.name]=e.target.value,localStorage.setItem(h,JSON.stringify(w))}),500)),O.addEventListener("submit",(function(e){console.log(JSON.parse(localStorage.getItem(h))),e.preventDefault(),O.reset(),localStorage.removeItem(h)}));var S,h="feedback-form-state",w={};(S=JSON.parse(localStorage.getItem(h)))&&(O.email.value=S.email,O.message.value=S.message,console.log(S))}();
//# sourceMappingURL=03-feedback.000ce5e2.js.map
