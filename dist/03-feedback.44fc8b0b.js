!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire1853;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire1853=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){return u.default(e)||a.default(e,t)||l.default(e,t)||f.default()};var u=c(o("8slrw")),a=c(o("7AJDX")),f=c(o("ifqQW")),l=c(o("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}var s={},d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var p="Expected a function",v=NaN,y="[object Symbol]",m=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,O=/^0o[0-7]+$/i,_=parseInt,j="object"==typeof t&&t&&t.Object===Object&&t,x="object"==typeof self&&self&&self.Object===Object&&self,h=j||x||Function("return this")(),w=Object.prototype.toString,S=Math.max,M=Math.min,T=function(){return h.Date.now()};function A(e,t,r){var n,o,i,u,a,f,l=0,c=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError(p);function v(t){var r=n,i=o;return n=o=void 0,l=t,u=e.apply(i,r)}function y(e){var r=e-f;return void 0===f||r>=t||r<0||s&&e-l>=i}function m(){var e=T();if(y(e))return b(e);a=setTimeout(m,function(e){var r=t-(e-f);return s?M(r,i-(e-l)):r}(e))}function b(e){return a=void 0,d&&n?v(e):(n=o=void 0,u)}function g(){var e=T(),r=y(e);if(n=arguments,o=this,f=e,r){if(void 0===a)return function(e){return l=e,a=setTimeout(m,t),c?v(e):u}(f);if(s)return a=setTimeout(m,t),v(f)}return void 0===a&&(a=setTimeout(m,t)),u}return t=E(t)||0,I(r)&&(c=!!r.leading,i=(s="maxWait"in r)?S(E(r.maxWait)||0,t):i,d="trailing"in r?!!r.trailing:d),g.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=f=o=a=void 0},g.flush=function(){return void 0===a?u:b(T())},g}function I(t){var r=void 0===t?"undefined":e(d)(t);return!!t&&("object"==r||"function"==r)}function E(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(d)(t))||function(e){return!!e&&"object"==typeof e}(t)&&w.call(t)==y}(t))return v;if(I(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=I(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(m,"");var n=g.test(t);return n||O.test(t)?_(t.slice(2),n?2:8):b.test(t)?v:+t}s=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(p);return I(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),A(e,t,{leading:n,maxWait:t,trailing:o})};var P,N="feedback-form-state",k=document.querySelector(".feedback-form"),D={};k.addEventListener("input",s((function(e){D[e.target.name]=e.target.value,localStorage.setItem(N,JSON.stringify(D))}),500)),k.addEventListener("submit",(function(e){if(e.preventDefault(),!k.elements.email.value||!k.elements.message.value)return void alert("All fields must be filled!");console.log(D),localStorage.removeItem(N),k.reset()})),P=k,localStorage.getItem(N)&&(D=JSON.parse(localStorage.getItem(N)),Object.entries(D).forEach((function(t){var r=e(i)(t,2),n=r[0],o=r[1];P.elements[n].value=o})))}();
//# sourceMappingURL=03-feedback.44fc8b0b.js.map
