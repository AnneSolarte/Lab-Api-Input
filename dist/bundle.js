(()=>{"use strict";var e={623:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([e.id,"body{\n\tfont-family: 'Satoshi', sans-serif;\n\tbackground-color: rgb(136, 136, 136);\n\twidth: 100%;\n\theight: max-content;\n}\n\ninput {\n\tbackground-color: aliceblue;\n\toutline: 0;\n\tborder-radius: 2em;\n\n}\n\n",""]);const s=i},411:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([e.id,".card {\n    background-color:aqua\n}\n\nbody img{\n    width: 20%;\n}",""]);const s=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=n(d),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=o(h,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),u=0;u<a.length;u++){var l=n(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(72),t=n.n(e),r=n(825),o=n.n(r),a=n(659),i=n.n(a),s=n(56),c=n.n(s),u=n(540),l=n.n(u),d=n(113),p=n.n(d),h=n(623),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),t()(h.A,f),h.A&&h.A.locals&&h.A.locals;const m=e=>{return t=void 0,n=void 0,o=function*(){try{const t=yield fetch(e).then((e=>e.json()));return console.log(t.name),t.name}catch(e){return console.error("Error al obtener datos del episodio:",e),"Unknown"}},new((r=void 0)||(r=Promise))((function(e,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function s(e){try{c(o.throw(e))}catch(e){a(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,s)}c((o=o.apply(t,n||[])).next())}));var t,n,r,o};var v,y=n(411),b={};b.styleTagTransform=p(),b.setAttributes=c(),b.insert=i().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=l(),t()(y.A,b),y.A&&y.A.locals&&y.A.locals,function(e){e.image="image",e.name="name",e.status="status",e.species="species",e.type="type",e.origin="origin",e.firstepisodename="firstepisodename"}(v||(v={}));class g extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({image:null,name:null,status:null,species:null,type:null,origin:null,firstepisodename:null})}attributeChangedCallback(e,t,n){this[e]=n,this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n                <div class="card">\n                    <h1>${this.name}</h1>\n                    <img src='${this.image}'></img>\n                    <p> Status: ${this.status}</p>\n                    <p> Species: ${this.species}</p>\n                    <p> Type: ${this.type||"No type"}</p>\n                    <p> Origin: ${this.origin}</p>\n                    <p> First Episode: ${this.firstepisodename}</p>\n                </div>`)}}customElements.define("character-card",g);var w=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}c((r=r.apply(e,t||[])).next())}))};class A extends HTMLElement{constructor(){super(),this.characters=[],this.charactersContainer=null,this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){if(this.shadowRoot){this.shadowRoot.innerHTML="";const e=document.createElement("form");e.id="form",e.addEventListener("submit",(e=>w(this,void 0,void 0,(function*(){e.preventDefault(),console.log("En addEvent listener");const n=yield(s=Number(t.value),r=void 0,o=void 0,a=void 0,i=function*(){try{const e=[];for(let t=1;t<=s;t++){const n=yield fetch(`https://rickandmortyapi.com/api/character/${t}`).then((e=>e.json()));e.push(n)}return e}catch(e){return console.error(e),[]}},new(a||(a=Promise))((function(e,t){function n(e){try{c(i.next(e))}catch(e){t(e)}}function s(e){try{c(i.throw(e))}catch(e){t(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a((function(e){e(r)}))).then(n,s)}c((i=i.apply(r,o||[])).next())})));var r,o,a,i,s;console.log(n),this.renderCharacters(n)}))));const t=document.createElement("input");t.type="number",t.placeholder="Intriduce a number here",t.name="number",t.value="",t.className="number-input";const n=document.createElement("input");n.type="submit",n.value="Get",n.className="submit-input",e.appendChild(t),e.appendChild(n),this.shadowRoot.appendChild(e)}}renderCharacters(e){var t;null===(t=this.shadowRoot)||void 0===t||t.querySelectorAll("character-card").forEach((e=>e.remove())),Promise.all(e.map((e=>w(this,void 0,void 0,(function*(){const t=yield m(e.episode[0]),n=this.ownerDocument.createElement("character-card");return n.setAttribute(v.image,e.image),n.setAttribute(v.name,e.name),n.setAttribute(v.status,e.status),n.setAttribute(v.species,e.species),n.setAttribute(v.type,e.type),n.setAttribute(v.origin,e.origin.name),n.setAttribute(v.firstepisodename,t),n}))))).then((e=>{e.forEach((e=>{var t;null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)}))}))}}customElements.define("app-container",A)})()})();