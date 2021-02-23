/*! For license information please see app-e5c688e7.js.LICENSE.txt */
(()=>{var e={86502:(e,t,r)=>{"use strict";var n=r(27061);Object.defineProperty(t,"__esModule",{value:!0}),t.codeFrameColumns=l,t.default=function(e,t,r,i={}){if(!a){a=!0;const e="Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";if(n.emitWarning)n.emitWarning(e,"DeprecationWarning");else{new Error(e).name="DeprecationWarning",console.warn(new Error(e))}}r=Math.max(r,0);return l(e,{start:{column:r,line:t}},i)};var i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=n?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(15389));function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}let a=!1;const s=/\r\n|[\n\r\u2028\u2029]/;function l(e,t,r={}){const n=(r.highlightCode||r.forceColor)&&(0,i.shouldHighlight)(r),o=(0,i.getChalk)(r),a=function(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}(o),l=(e,t)=>n?e(t):t,u=e.split(s),{start:c,end:p,markerLines:f}=function(e,t,r){const n=Object.assign({column:0,line:-1},e.start),i=Object.assign({},n,e.end),{linesAbove:o=2,linesBelow:a=3}=r||{},s=n.line,l=n.column,u=i.line,c=i.column;let p=Math.max(s-(o+1),0),f=Math.min(t.length,u+a);-1===s&&(p=0),-1===u&&(f=t.length);const d=u-s,h={};if(d)for(let e=0;e<=d;e++){const r=e+s;if(l)if(0===e){const e=t[r-1].length;h[r]=[l,e-l+1]}else if(e===d)h[r]=[0,c];else{const n=t[r-e].length;h[r]=[0,n]}else h[r]=!0}else h[s]=l===c?!l||[l,0]:[l,c-l];return{start:p,end:f,markerLines:h}}(t,u,r),d=t.start&&"number"==typeof t.start.column,h=String(p).length;let m=(n?(0,i.default)(e,r):e).split(s).slice(c,p).map(((e,t)=>{const n=c+1+t,i=` ${` ${n}`.slice(-h)} |`,o=f[n],s=!f[n+1];if(o){let t="";if(Array.isArray(o)){const n=e.slice(0,Math.max(o[0]-1,0)).replace(/[^\t]/g," "),u=o[1]||1;t=["\n ",l(a.gutter,i.replace(/\d/g," "))," ",n,l(a.marker,"^").repeat(u)].join(""),s&&r.message&&(t+=" "+l(a.message,r.message))}return[l(a.marker,">"),l(a.gutter,i),e.length>0?` ${e}`:"",t].join("")}return` ${l(a.gutter,i)}${e.length>0?` ${e}`:""}`})).join("\n");return r.message&&!d&&(m=`${" ".repeat(h+1)}${r.message}\n${m}`),n?o.reset(m):m}},21258:(e,t,r)=>{"use strict";function n(){const e=(t=r(43291))&&t.__esModule?t:{default:t};var t;return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.makeWeakCache=l,t.makeWeakCacheSync=function(e){return a(l(e))},t.makeStrongCache=u,t.makeStrongCacheSync=function(e){return a(u(e))},t.assertSimpleType=h;var i=r(33245),o=r(28358);const a=e=>(0,n().default)(e).sync;function*s(e){return!0}function l(e){return c(WeakMap,e)}function u(e){return c(Map,e)}function c(e,t){const r=new e,n=new e,a=new e;return function*(e,s){const l=yield*(0,i.isAsync)(),u=l?n:r,c=yield*function*(e,t,r,n,o){const a=yield*p(t,n,o);if(a.valid)return a;if(e){const e=yield*p(r,n,o);if(e.valid){return{valid:!0,value:yield*(0,i.waitFor)(e.value.promise)}}}return{valid:!1,value:null}}(l,u,a,e,s);if(c.valid)return c.value;const h=new d(s),y=t(e,h);let g,b;if((0,o.isIterableIterator)(y)){const t=y;b=yield*(0,i.onFirstPause)(t,(()=>{g=function(e,t,r){const n=new m;return f(t,e,r,n),n}(h,a,e)}))}else b=y;return f(u,h,e,b),g&&(a.delete(e),g.release(b)),b}}function*p(e,t,r){const n=e.get(t);if(n)for(const{value:e,valid:t}of n)if(yield*t(r))return{valid:!0,value:e};return{valid:!1,value:null}}function f(e,t,r,n){t.configured()||t.forever();let i=e.get(r);switch(t.deactivate(),t.mode()){case"forever":i=[{value:n,valid:s}],e.set(r,i);break;case"invalidate":i=[{value:n,valid:t.validator()}],e.set(r,i);break;case"valid":i?i.push({value:n,valid:t.validator()}):(i=[{value:n,valid:t.validator()}],e.set(r,i))}}class d{constructor(e){this._active=!0,this._never=!1,this._forever=!1,this._invalidate=!1,this._configured=!1,this._pairs=[],this._data=void 0,this._data=e}simple(){return function(e){function t(t){if("boolean"!=typeof t)return e.using((()=>h(t())));t?e.forever():e.never()}return t.forever=()=>e.forever(),t.never=()=>e.never(),t.using=t=>e.using((()=>h(t()))),t.invalidate=t=>e.invalidate((()=>h(t()))),t}(this)}mode(){return this._never?"never":this._forever?"forever":this._invalidate?"invalidate":"valid"}forever(){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._never)throw new Error("Caching has already been configured with .never()");this._forever=!0,this._configured=!0}never(){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._forever)throw new Error("Caching has already been configured with .forever()");this._never=!0,this._configured=!0}using(e){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._never||this._forever)throw new Error("Caching has already been configured with .never or .forever()");this._configured=!0;const t=e(this._data),r=(0,i.maybeAsync)(e,"You appear to be using an async cache handler, but Babel has been called synchronously");return(0,i.isThenable)(t)?t.then((e=>(this._pairs.push([e,r]),e))):(this._pairs.push([t,r]),t)}invalidate(e){return this._invalidate=!0,this.using(e)}validator(){const e=this._pairs;return function*(t){for(const[r,n]of e)if(r!==(yield*n(t)))return!1;return!0}}deactivate(){this._active=!1}configured(){return this._configured}}function h(e){if((0,i.isThenable)(e))throw new Error("You appear to be using an async cache handler, which your current version of Babel does not support. We may add support for this in the future, but if you're on the most recent version of @babel/core and still seeing this error, then you'll need to synchronously handle your caching logic.");if(null!=e&&"string"!=typeof e&&"boolean"!=typeof e&&"number"!=typeof e)throw new Error("Cache keys must be either string, boolean, number, null, or undefined.");return e}class m{constructor(){this.released=!1,this.promise=void 0,this._resolve=void 0,this.promise=new Promise((e=>{this._resolve=e}))}release(e){this.released=!0,this._resolve(e)}}},68188:(e,t,r)=>{"use strict";function n(){const e=p(r(67425));return n=function(){return e},e}function i(){const e=p(r(25130));return i=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.buildPresetChain=function*(e,t){const r=yield*d(e,t);return r?{plugins:B(r.plugins),presets:B(r.presets),options:r.options.map((e=>L(e))),files:new Set}:null},t.buildRootChain=function*(e,t){let r,i;const o=new s.ConfigPrinter,u=yield*x({options:e,dirname:t.cwd},t,void 0,o);if(!u)return null;const c=o.output();let p;"string"==typeof e.configFile?p=yield*(0,l.loadConfig)(e.configFile,t.cwd,t.envName,t.caller):!1!==e.configFile&&(p=yield*(0,l.findRootConfig)(t.root,t.envName,t.caller));let{babelrc:f,babelrcRoots:d}=e,h=t.cwd;const m=M(),y=new s.ConfigPrinter;if(p){const e=b(p),n=yield*T(e,t,void 0,y);if(!n)return null;r=y.output(),void 0===f&&(f=e.options.babelrc),void 0===d&&(h=e.dirname,d=e.options.babelrcRoots),I(m,n)}const g="string"==typeof t.filename?yield*(0,l.findPackageData)(t.filename):null;let E,S,w=!1;const A=M();if((!0===f||void 0===f)&&g&&function(e,t,r,i){if("boolean"==typeof r)return r;const o=e.root;if(void 0===r)return-1!==t.directories.indexOf(o);let s=r;Array.isArray(s)||(s=[s]);if(s=s.map((e=>"string"==typeof e?n().default.resolve(i,e):e)),1===s.length&&s[0]===o)return-1!==t.directories.indexOf(o);return s.some((r=>("string"==typeof r&&(r=(0,a.default)(r,i)),t.directories.some((t=>z(r,i,t,e))))))}(t,g,d,h)){if(({ignore:E,config:S}=yield*(0,l.findRelativeConfig)(g,t.envName,t.caller)),E&&A.files.add(E.filepath),E&&W(t,E.ignore,null,E.dirname)&&(w=!0),S&&!w){const e=v(S),r=new s.ConfigPrinter,n=yield*T(e,t,void 0,r);n?(i=r.output(),I(A,n)):w=!0}S&&w&&A.files.add(S.filepath)}if(t.showConfig)return console.log(`Babel configs on "${t.filename}" (ascending priority):\n`+[r,i,c].filter((e=>!!e)).join("\n\n")),null;const P=I(I(I(M(),m),A),u);return{plugins:w?[]:B(P.plugins),presets:w?[]:B(P.presets),options:w?[]:P.options.map((e=>L(e))),fileHandling:w?"ignored":"transpile",ignore:E||void 0,babelrc:S||void 0,config:p||void 0,files:P.files}},t.buildPresetChainWalker=void 0;var o=r(26171),a=p(r(14885)),s=r(32093),l=r(23773),u=r(21258),c=r(5481);function p(e){return e&&e.__esModule?e:{default:e}}const f=(0,i().default)("babel:config:config-chain");const d=N({root:e=>h(e),env:(e,t)=>m(e)(t),overrides:(e,t)=>y(e)(t),overridesEnv:(e,t,r)=>g(e)(t)(r),createLogger:()=>()=>{}});t.buildPresetChainWalker=d;const h=(0,u.makeWeakCacheSync)((e=>D(e,e.alias,c.createUncachedDescriptors))),m=(0,u.makeWeakCacheSync)((e=>(0,u.makeStrongCacheSync)((t=>O(e,e.alias,c.createUncachedDescriptors,t))))),y=(0,u.makeWeakCacheSync)((e=>(0,u.makeStrongCacheSync)((t=>k(e,e.alias,c.createUncachedDescriptors,t))))),g=(0,u.makeWeakCacheSync)((e=>(0,u.makeStrongCacheSync)((t=>(0,u.makeStrongCacheSync)((r=>_(e,e.alias,c.createUncachedDescriptors,t,r)))))));const b=(0,u.makeWeakCacheSync)((e=>({filepath:e.filepath,dirname:e.dirname,options:(0,o.validate)("configfile",e.options)}))),v=(0,u.makeWeakCacheSync)((e=>({filepath:e.filepath,dirname:e.dirname,options:(0,o.validate)("babelrcfile",e.options)}))),E=(0,u.makeWeakCacheSync)((e=>({filepath:e.filepath,dirname:e.dirname,options:(0,o.validate)("extendsfile",e.options)}))),x=N({root:e=>D(e,"base",c.createCachedDescriptors),env:(e,t)=>O(e,"base",c.createCachedDescriptors,t),overrides:(e,t)=>k(e,"base",c.createCachedDescriptors,t),overridesEnv:(e,t,r)=>_(e,"base",c.createCachedDescriptors,t,r),createLogger:(e,t,r)=>function(e,t,r){var n;if(!r)return()=>{};return r.configure(t.showConfig,s.ChainFormatter.Programmatic,{callerName:null==(n=t.caller)?void 0:n.name})}(0,t,r)}),S=N({root:e=>w(e),env:(e,t)=>A(e)(t),overrides:(e,t)=>P(e)(t),overridesEnv:(e,t,r)=>C(e)(t)(r),createLogger:(e,t,r)=>function(e,t,r){if(!r)return()=>{};return r.configure(t.showConfig,s.ChainFormatter.Config,{filepath:e})}(e.filepath,t,r)});function*T(e,t,r,n){const i=yield*S(e,t,r,n);return i&&i.files.add(e.filepath),i}const w=(0,u.makeWeakCacheSync)((e=>D(e,e.filepath,c.createUncachedDescriptors))),A=(0,u.makeWeakCacheSync)((e=>(0,u.makeStrongCacheSync)((t=>O(e,e.filepath,c.createUncachedDescriptors,t))))),P=(0,u.makeWeakCacheSync)((e=>(0,u.makeStrongCacheSync)((t=>k(e,e.filepath,c.createUncachedDescriptors,t))))),C=(0,u.makeWeakCacheSync)((e=>(0,u.makeStrongCacheSync)((t=>(0,u.makeStrongCacheSync)((r=>_(e,e.filepath,c.createUncachedDescriptors,t,r)))))));function D({dirname:e,options:t},r,n){return n(e,t,r)}function O({dirname:e,options:t},r,n,i){const o=t.env&&t.env[i];return o?n(e,o,`${r}.env["${i}"]`):null}function k({dirname:e,options:t},r,n,i){const o=t.overrides&&t.overrides[i];if(!o)throw new Error("Assertion failure - missing override");return n(e,o,`${r}.overrides[${i}]`)}function _({dirname:e,options:t},r,n,i,o){const a=t.overrides&&t.overrides[i];if(!a)throw new Error("Assertion failure - missing override");const s=a.env&&a.env[o];return s?n(e,s,`${r}.overrides[${i}].env["${o}"]`):null}function N({root:e,env:t,overrides:r,overridesEnv:n,createLogger:i}){return function*(o,a,s=new Set,l){const{dirname:u}=o,c=[],p=e(o);if(R(p,u,a)){c.push({config:p,envName:void 0,index:void 0});const e=t(o,a.envName);e&&R(e,u,a)&&c.push({config:e,envName:a.envName,index:void 0}),(p.options.overrides||[]).forEach(((e,t)=>{const i=r(o,t);if(R(i,u,a)){c.push({config:i,index:t,envName:void 0});const e=n(o,t,a.envName);e&&R(e,u,a)&&c.push({config:e,index:t,envName:a.envName})}}))}if(c.some((({config:{options:{ignore:e,only:t}}})=>W(a,e,t,u))))return null;const f=M(),d=i(o,a,l);for(const{config:e,index:t,envName:r}of c){if(!(yield*F(f,e.options,u,a,s,l)))return null;d(e,t,r),j(f,e)}return f}}function*F(e,t,r,n,i,o){if(void 0===t.extends)return!0;const a=yield*(0,l.loadConfig)(t.extends,r,n.envName,n.caller);if(i.has(a))throw new Error(`Configuration cycle detected loading ${a.filepath}.\nFile already loaded following the config chain:\n`+Array.from(i,(e=>` - ${e.filepath}`)).join("\n"));i.add(a);const s=yield*T(E(a),n,i,o);return i.delete(a),!!s&&(I(e,s),!0)}function I(e,t){e.options.push(...t.options),e.plugins.push(...t.plugins),e.presets.push(...t.presets);for(const r of t.files)e.files.add(r);return e}function j(e,{options:t,plugins:r,presets:n}){return e.options.push(t),e.plugins.push(...r()),e.presets.push(...n()),e}function M(){return{options:[],presets:[],plugins:[],files:new Set}}function L(e){const t=Object.assign({},e);return delete t.extends,delete t.env,delete t.overrides,delete t.plugins,delete t.presets,delete t.passPerPreset,delete t.ignore,delete t.only,delete t.test,delete t.include,delete t.exclude,Object.prototype.hasOwnProperty.call(t,"sourceMap")&&(t.sourceMaps=t.sourceMap,delete t.sourceMap),t}function B(e){const t=new Map,r=[];for(const n of e)if("function"==typeof n.value){const e=n.value;let i=t.get(e);i||(i=new Map,t.set(e,i));let o=i.get(n.name);o?o.value=n:(o={value:n},r.push(o),n.ownPass||i.set(n.name,o))}else r.push({value:n});return r.reduce(((e,t)=>(e.push(t.value),e)),[])}function R({options:e},t,r){return(void 0===e.test||U(r,e.test,t))&&(void 0===e.include||U(r,e.include,t))&&(void 0===e.exclude||!U(r,e.exclude,t))}function U(e,t,r){return V(e,Array.isArray(t)?t:[t],r)}function W(e,t,r,n){if(t&&V(e,t,n)){var i;const r=`No config is applied to "${null!=(i=e.filename)?i:"(unknown)"}" because it matches one of \`ignore: ${JSON.stringify(t)}\` from "${n}"`;return f(r),e.showConfig&&console.log(r),!0}if(r&&!V(e,r,n)){var o;const t=`No config is applied to "${null!=(o=e.filename)?o:"(unknown)"}" because it fails to match one of \`only: ${JSON.stringify(r)}\` from "${n}"`;return f(t),e.showConfig&&console.log(t),!0}return!1}function V(e,t,r){return t.some((t=>z(t,r,e.filename,e)))}function z(e,t,r,n){if("function"==typeof e)return!!e(r,{dirname:t,envName:n.envName,caller:n.caller});if("string"!=typeof r)throw new Error("Configuration contains string/RegExp pattern, but no filename was passed to Babel");return"string"==typeof e&&(e=(0,a.default)(e,t)),e.test(r)}},5481:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createCachedDescriptors=function(e,t,r){const{plugins:n,presets:i,passPerPreset:o}=t;return{options:t,plugins:n?()=>u(n,e)(r):()=>[],presets:i?()=>s(i,e)(r)(!!o):()=>[]}},t.createUncachedDescriptors=function(e,t,r){let n,i;return{options:t,plugins:()=>(n||(n=d(t.plugins||[],e,r)),n),presets:()=>(i||(i=f(t.presets||[],e,r,!!t.passPerPreset)),i)}},t.createDescriptor=m;var n=r(23773),i=r(95610),o=r(21258);const a=new WeakMap,s=(0,o.makeWeakCacheSync)(((e,t)=>{const r=t.using((e=>e));return(0,o.makeStrongCacheSync)((t=>(0,o.makeStrongCacheSync)((n=>f(e,r,t,n).map((e=>p(a,e)))))))})),l=new WeakMap,u=(0,o.makeWeakCacheSync)(((e,t)=>{const r=t.using((e=>e));return(0,o.makeStrongCacheSync)((t=>d(e,r,t).map((e=>p(l,e)))))})),c={};function p(e,t){const{value:r,options:n=c}=t;if(!1===n)return t;let i=e.get(r);i||(i=new WeakMap,e.set(r,i));let o=i.get(n);if(o||(o=[],i.set(n,o)),-1===o.indexOf(t)){const e=o.filter((e=>{return n=t,(r=e).name===n.name&&r.value===n.value&&r.options===n.options&&r.dirname===n.dirname&&r.alias===n.alias&&r.ownPass===n.ownPass&&(r.file&&r.file.request)===(n.file&&n.file.request)&&(r.file&&r.file.resolved)===(n.file&&n.file.resolved);var r,n}));if(e.length>0)return e[0];o.push(t)}return t}function f(e,t,r,n){return h("preset",e,t,r,n)}function d(e,t,r){return h("plugin",e,t,r)}function h(e,t,r,n,i){const o=t.map(((t,o)=>m(t,r,{type:e,alias:`${n}$${o}`,ownPass:!!i})));return function(e){const t=new Map;for(const r of e){if("function"!=typeof r.value)continue;let n=t.get(r.value);if(n||(n=new Set,t.set(r.value,n)),n.has(r.name)){const t=e.filter((e=>e.value===r.value));throw new Error(["Duplicate plugin/preset detected.","If you'd like to use two separate instances of a plugin,","they need separate names, e.g.","","  plugins: [","    ['some-plugin', {}],","    ['some-plugin', {}, 'some unique name'],","  ]","","Duplicates detected are:",`${JSON.stringify(t,null,2)}`].join("\n"))}n.add(r.name)}}(o),o}function m(e,t,{type:r,alias:o,ownPass:a}){const s=(0,i.getItemDescriptor)(e);if(s)return s;let l,u,c,p=e;Array.isArray(p)&&(3===p.length?[p,u,l]=p:[p,u]=p);let f=null;if("string"==typeof p){if("string"!=typeof r)throw new Error("To resolve a string-based item, the type of item must be given");const e="plugin"===r?n.loadPlugin:n.loadPreset,i=p;({filepath:f,value:p}=e(p,t)),c={request:i,resolved:f}}if(!p)throw new Error(`Unexpected falsy value: ${String(p)}`);if("object"==typeof p&&p.__esModule){if(!p.default)throw new Error("Must export a default export when using ES6 modules.");p=p.default}if("object"!=typeof p&&"function"!=typeof p)throw new Error(`Unsupported format: ${typeof p}. Expected an object or a function.`);if(null!==f&&"object"==typeof p&&p)throw new Error(`Plugin/Preset files are not allowed to export objects, only functions. In ${f}`);return{name:l,alias:f||o,value:p,options:u,dirname:t,ownPass:a,file:c}}},23773:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.findConfigUpwards=function*(e){return null},t.findPackageData=function*(e){return{filepath:e,directories:[],pkg:null,isPackage:!1}},t.findRelativeConfig=function*(e,t,r){return{pkg:null,config:null,ignore:null}},t.findRootConfig=function*(e,t,r){return null},t.loadConfig=function*(e,t,r,n){throw new Error(`Cannot load ${e} relative to ${t} in a browser`)},t.resolveShowConfigPath=function*(e){return null},t.resolvePlugin=function(e,t){return null},t.resolvePreset=function(e,t){return null},t.loadPlugin=function(e,t){throw new Error(`Cannot load plugin ${e} relative to ${t} in a browser`)},t.loadPreset=function(e,t){throw new Error(`Cannot load preset ${e} relative to ${t} in a browser`)},t.ROOT_CONFIG_FILENAMES=void 0;t.ROOT_CONFIG_FILENAMES=[]},23140:(e,t,r)=>{"use strict";function n(){const e=g(r(43291));return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(33245),o=r(28358),a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=y();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(1091)),s=g(r(12591)),l=r(95610),u=r(68188);function c(){const e=g(r(1785));return c=function(){return e},e}var p=r(21258),f=r(26171),d=r(96031),h=g(r(56619)),m=g(r(13541));function y(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return y=function(){return e},e}function g(e){return e&&e.__esModule?e:{default:e}}var b=(0,n().default)((function*(e){const t=yield*(0,m.default)(e);if(!t)return null;const{options:r,context:n,fileHandling:i}=t;if("ignored"===i)return null;const a={},{plugins:s,presets:u}=r;if(!s||!u)throw new Error("Assertion failure - plugins and presets exist");const c=e=>{const t=(0,l.getItemDescriptor)(e);if(!t)throw new Error("Assertion failure - must be config item");return t},p=u.map(c),d=s.map(c),h=[[]],y=[];if(yield*v(n,(function*e(t,r){const i=[];for(let e=0;e<t.length;e++){const o=t[e];if(!1!==o.options)try{o.ownPass?i.push({preset:yield*w(o,n),pass:[]}):i.unshift({preset:yield*w(o,n),pass:r})}catch(r){throw"BABEL_UNKNOWN_OPTION"===r.code&&(0,f.checkNoUnwrappedItemOptionPairs)(t,e,"preset",r),r}}if(i.length>0){h.splice(1,0,...i.map((e=>e.pass)).filter((e=>e!==r)));for(const{preset:t,pass:r}of i){if(!t)return!0;r.push(...t.plugins);if(yield*e(t.presets,r))return!0;t.options.forEach((e=>{(0,o.mergeOptions)(a,e)}))}}}))(p,h[0]))return null;const g=a;return(0,o.mergeOptions)(g,r),yield*v(n,(function*(){h[0].unshift(...d);for(const e of h){const t=[];y.push(t);for(let r=0;r<e.length;r++){const i=e[r];if(!1!==i.options)try{t.push(yield*x(i,n))}catch(t){throw"BABEL_UNKNOWN_PLUGIN_PROPERTY"===t.code&&(0,f.checkNoUnwrappedItemOptionPairs)(e,r,"plugin",t),t}}}}))(),g.plugins=y[0],g.presets=y.slice(1).filter((e=>e.length>0)).map((e=>({plugins:e}))),g.passPerPreset=g.presets.length>0,{options:g,passes:y}}));function v(e,t){return function*(r,n){try{return yield*t(r,n)}catch(t){throw/^\[BABEL\]/.test(t.message)||(t.message=`[BABEL] ${e.filename||"unknown"}: ${t.message}`),t}}}t.default=b;const E=(0,p.makeWeakCache)((function*({value:e,options:t,dirname:r,alias:n},i){if(!1===t)throw new Error("Assertion failure");t=t||{};let o=e;if("function"==typeof e){const s=Object.assign({},a,(0,h.default)(i));try{o=e(s,t,r)}catch(e){throw n&&(e.message+=` (While processing: ${JSON.stringify(n)})`),e}}if(!o||"object"!=typeof o)throw new Error("Plugin/Preset did not return an object.");if("function"==typeof o.then)throw yield*[],new Error("You appear to be using an async plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");return{value:o,options:t,dirname:r,alias:n}}));function*x(e,t){if(e.value instanceof s.default){if(e.options)throw new Error("Passed options to an existing Plugin instance will not work.");return e.value}return yield*S(yield*E(e,t),t)}const S=(0,p.makeWeakCache)((function*({value:e,options:t,dirname:r,alias:n},o){const a=(0,d.validatePluginObject)(e),l=Object.assign({},a);if(l.visitor&&(l.visitor=c().default.explode(Object.assign({},l.visitor))),l.inherits){const e={name:void 0,alias:`${n}$inherits`,value:l.inherits,options:t,dirname:r},a=yield*(0,i.forwardAsync)(x,(t=>o.invalidate((r=>t(e,r)))));l.pre=P(a.pre,l.pre),l.post=P(a.post,l.post),l.manipulateOptions=P(a.manipulateOptions,l.manipulateOptions),l.visitor=c().default.visitors.merge([a.visitor||{},l.visitor||{}])}return new s.default(l,t,n)})),T=(e,t)=>{if(e.test||e.include||e.exclude){const e=t.name?`"${t.name}"`:"/* your preset */";throw new Error([`Preset ${e} requires a filename to be set when babel is called directly,`,"```",`babel.transform(code, { filename: 'file.ts', presets: [${e}] });`,"```","See https://babeljs.io/docs/en/options#filename for more information."].join("\n"))}};function*w(e,t){const r=A(yield*E(e,t));return((e,t,r)=>{if(!t.filename){const{options:t}=e;T(t,r),t.overrides&&t.overrides.forEach((e=>T(e,r)))}})(r,t,e),yield*(0,u.buildPresetChain)(r,t)}const A=(0,p.makeWeakCacheSync)((({value:e,dirname:t,alias:r})=>({options:(0,f.validate)("preset",e),alias:r,dirname:t})));function P(e,t){const r=[e,t].filter(Boolean);return r.length<=1?r[0]:function(...e){for(const t of r)t.apply(this,e)}}},56619:(e,t,r)=>{"use strict";function n(){const e=(t=r(4678))&&t.__esModule?t:{default:t};var t;return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return{version:i.version,cache:e.simple(),env:t=>e.using((e=>void 0===t?e.envName:"function"==typeof t?(0,o.assertSimpleType)(t(e.envName)):(Array.isArray(t)||(t=[t]),t.some((t=>{if("string"!=typeof t)throw new Error("Unexpected non-string value");return t===e.envName}))))),async:()=>!1,caller:t=>e.using((e=>(0,o.assertSimpleType)(t(e.caller)))),assertVersion:a}};var i=r(1091),o=r(21258);function a(e){if("number"==typeof e){if(!Number.isInteger(e))throw new Error("Expected string or integer value.");e=`^${e}.0.0-0`}if("string"!=typeof e)throw new Error("Expected string or integer value.");if(n().default.satisfies(i.version,e))return;const t=Error.stackTraceLimit;"number"==typeof t&&t<25&&(Error.stackTraceLimit=25);const r=new Error(`Requires Babel "${e}", but was loaded with "${i.version}". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel.`);throw"number"==typeof t&&(Error.stackTraceLimit=t),Object.assign(r,{code:"BABEL_VERSION_UNSUPPORTED",version:i.version,range:e})}},46652:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getEnv=function(e="development"){return"production"}},6591:(e,t,r)=>{"use strict";e.exports=r(89166)},91152:(e,t,r)=>{"use strict";function n(){const e=a(r(43291));return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}}),t.loadOptionsAsync=t.loadOptionsSync=t.loadOptions=t.loadPartialConfigAsync=t.loadPartialConfigSync=t.loadPartialConfig=void 0;var i=a(r(23140)),o=r(13541);function a(e){return e&&e.__esModule?e:{default:e}}const s=(0,n().default)((function*(e){var t;const r=yield*(0,i.default)(e);return null!=(t=null==r?void 0:r.options)?t:null})),l=e=>(t,r)=>(void 0===r&&"function"==typeof t&&(r=t,t=void 0),r?e.errback(t,r):e.sync(t)),u=l(o.loadPartialConfig);t.loadPartialConfig=u;const c=o.loadPartialConfig.sync;t.loadPartialConfigSync=c;const p=o.loadPartialConfig.async;t.loadPartialConfigAsync=p;const f=l(s);t.loadOptions=f;const d=s.sync;t.loadOptionsSync=d;const h=s.async;t.loadOptionsAsync=h},95610:(e,t,r)=>{"use strict";function n(){const e=(t=r(67425))&&t.__esModule?t:{default:t};var t;return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.createItemFromDescriptor=o,t.createConfigItem=function(e,{dirname:t=".",type:r}={}){return o((0,i.createDescriptor)(e,n().default.resolve(t),{type:r,alias:"programmatic item"}))},t.getItemDescriptor=function(e){if(null==e?void 0:e[a])return e._descriptor;return};var i=r(5481);function o(e){return new s(e)}const a=Symbol.for("@babel/core@7 - ConfigItem");class s{constructor(e){this._descriptor=void 0,this[a]=!0,this.value=void 0,this.options=void 0,this.dirname=void 0,this.name=void 0,this.file=void 0,this._descriptor=e,Object.defineProperty(this,"_descriptor",{enumerable:!1}),Object.defineProperty(this,a,{enumerable:!1}),this.value=this._descriptor.value,this.options=this._descriptor.options,this.dirname=this._descriptor.dirname,this.name=this._descriptor.name,this.file=this._descriptor.file?{request:this._descriptor.file.request,resolved:this._descriptor.file.resolved}:void 0,Object.freeze(this)}}Object.freeze(s.prototype)},13541:(e,t,r)=>{"use strict";function n(){const e=f(r(67425));return n=function(){return e},e}function i(){const e=f(r(43291));return i=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=d,t.loadPartialConfig=void 0;var o=f(r(12591)),a=r(28358),s=r(95610),l=r(68188),u=r(46652),c=r(26171),p=r(23773);function f(e){return e&&e.__esModule?e:{default:e}}function*d(e){if(null!=e&&("object"!=typeof e||Array.isArray(e)))throw new Error("Babel options must be an object, null, or undefined");const t=e?(0,c.validate)("arguments",e):{},{envName:r=(0,u.getEnv)(),cwd:i=".",root:o=".",rootMode:f="root",caller:d,cloneInputAst:h=!0}=t,m=n().default.resolve(i),y=yield*function*(e,t){switch(t){case"root":return e;case"upward-optional":{const t=yield*(0,p.findConfigUpwards)(e);return null===t?e:t}case"upward":{const t=yield*(0,p.findConfigUpwards)(e);if(null!==t)return t;throw Object.assign(new Error(`Babel was run with rootMode:"upward" but a root could not be found when searching upward from "${e}".\nOne of the following config files must be in the directory tree: "${p.ROOT_CONFIG_FILENAMES.join(", ")}".`),{code:"BABEL_ROOT_NOT_FOUND",dirname:e})}default:throw new Error("Assertion failure - unknown rootMode value.")}}(n().default.resolve(m,o),f),g="string"==typeof t.filename?n().default.resolve(i,t.filename):void 0,b={filename:g,cwd:m,root:y,envName:r,caller:d,showConfig:(yield*(0,p.resolveShowConfigPath)(m))===g},v=yield*(0,l.buildRootChain)(t,b);if(!v)return null;const E={};return v.options.forEach((e=>{(0,a.mergeOptions)(E,e)})),E.cloneInputAst=h,E.babelrc=!1,E.configFile=!1,E.passPerPreset=!1,E.envName=b.envName,E.cwd=b.cwd,E.root=b.root,E.filename="string"==typeof b.filename?b.filename:void 0,E.plugins=v.plugins.map((e=>(0,s.createItemFromDescriptor)(e))),E.presets=v.presets.map((e=>(0,s.createItemFromDescriptor)(e))),{options:E,context:b,fileHandling:v.fileHandling,ignore:v.ignore,babelrc:v.babelrc,config:v.config,files:v.files}}const h=(0,i().default)((function*(e){let t=!1;if("object"==typeof e&&null!==e&&!Array.isArray(e)){var r=e;({showIgnoredFiles:t}=r),e=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(r,["showIgnoredFiles"])}const n=yield*d(e);if(!n)return null;const{options:i,babelrc:a,ignore:s,config:l,fileHandling:u,files:c}=n;return"ignored"!==u||t?((i.plugins||[]).forEach((e=>{if(e.value instanceof o.default)throw new Error("Passing cached plugin instances is not supported in babel.loadPartialConfig()")})),new m(i,a?a.filepath:void 0,s?s.filepath:void 0,l?l.filepath:void 0,u,c)):null}));t.loadPartialConfig=h;class m{constructor(e,t,r,n,i,o){this.options=void 0,this.babelrc=void 0,this.babelignore=void 0,this.config=void 0,this.fileHandling=void 0,this.files=void 0,this.options=e,this.babelignore=r,this.babelrc=t,this.config=n,this.fileHandling=i,this.files=o,Object.freeze(this)}hasFilesystemConfig(){return void 0!==this.babelrc||void 0!==this.config}}Object.freeze(m.prototype)},14885:(e,t,r)=>{"use strict";function n(){const e=o(r(67425));return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const r=n().default.resolve(t,e).split(n().default.sep);return new RegExp(["^",...r.map(((e,t)=>{const n=t===r.length-1;return"**"===e?n?f:p:"*"===e?n?c:u:0===e.indexOf("*.")?l+(0,i.default)(e.slice(1))+(n?s:a):(0,i.default)(e)+(n?s:a)}))].join(""))};var i=o(r(6591));function o(e){return e&&e.__esModule?e:{default:e}}const a=`\\${n().default.sep}`,s=`(?:${a}|$)`,l=`[^${a}]+`,u=`(?:${l}${a})`,c=`(?:${l}${s})`,p=`${u}*?`,f=`${u}*?${c}?`},12591:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class{constructor(e,t,r){this.key=void 0,this.manipulateOptions=void 0,this.post=void 0,this.pre=void 0,this.visitor=void 0,this.parserOverride=void 0,this.generatorOverride=void 0,this.options=void 0,this.key=e.name||r,this.manipulateOptions=e.manipulateOptions,this.post=e.post,this.pre=e.pre,this.visitor=e.visitor||{},this.parserOverride=e.parserOverride,this.generatorOverride=e.generatorOverride,this.options=t}}},32093:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ConfigPrinter=t.ChainFormatter=void 0;const r={Programmatic:0,Config:1};t.ChainFormatter=r;const n={title(e,t,n){let i="";return e===r.Programmatic?(i="programmatic options",t&&(i+=" from "+t)):i="config "+n,i},loc(e,t){let r="";return null!=e&&(r+=`.overrides[${e}]`),null!=t&&(r+=`.env["${t}"]`),r},optionsAndDescriptors(e){const t=Object.assign({},e.options);delete t.overrides,delete t.env;const r=[...e.plugins()];r.length&&(t.plugins=r.map((e=>i(e))));const n=[...e.presets()];return n.length&&(t.presets=[...n].map((e=>i(e)))),JSON.stringify(t,void 0,2)}};function i(e){var t;let r=null==(t=e.file)?void 0:t.request;return null==r&&("object"==typeof e.value?r=e.value:"function"==typeof e.value&&(r=`[Function: ${e.value.toString().substr(0,50)} ... ]`)),null==r&&(r="[Unknown]"),void 0===e.options?r:null==e.name?[r,e.options]:[r,e.options,e.name]}class o{constructor(){this._stack=[]}configure(e,t,{callerName:r,filepath:n}){return e?(e,i,o)=>{this._stack.push({type:t,callerName:r,filepath:n,content:e,index:i,envName:o})}:()=>{}}static format(e){let t=n.title(e.type,e.callerName,e.filepath);const r=n.loc(e.index,e.envName);r&&(t+=` ${r}`);return`${t}\n${n.optionsAndDescriptors(e.content)}`}output(){return 0===this._stack.length?"":this._stack.map((e=>o.format(e))).join("\n\n")}}t.ConfigPrinter=o},28358:(e,t)=>{"use strict";function r(e,t){for(const r of Object.keys(t)){const n=t[r];void 0!==n&&(e[r]=n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.mergeOptions=function(e,t){for(const n of Object.keys(t))if("parserOpts"===n&&t.parserOpts){const n=t.parserOpts;r(e.parserOpts=e.parserOpts||{},n)}else if("generatorOpts"===n&&t.generatorOpts){const n=t.generatorOpts;r(e.generatorOpts=e.generatorOpts||{},n)}else{const r=t[n];void 0!==r&&(e[n]=r)}},t.isIterableIterator=function(e){return!!e&&"function"==typeof e.next&&"function"==typeof e[Symbol.iterator]}},48860:(e,t)=>{"use strict";function r(e){switch(e.type){case"root":return"";case"env":return`${r(e.parent)}.env["${e.name}"]`;case"overrides":return`${r(e.parent)}.overrides[${e.index}]`;case"option":return`${r(e.parent)}.${e.name}`;case"access":return`${r(e.parent)}[${JSON.stringify(e.name)}]`;default:throw new Error(`Assertion failure: Unknown type ${e.type}`)}}function n(e,t){return{type:"access",name:t,parent:e}}function i(e,t){if(void 0!==t&&("object"!=typeof t||Array.isArray(t)||!t))throw new Error(`${r(e)} must be an object, or undefined`);return t}function o(e,t){if(null!=t&&!Array.isArray(t))throw new Error(`${r(e)} must be an array, or undefined`);return t}function a(e){return"string"==typeof e||"function"==typeof e||e instanceof RegExp}function s(e,t){if(("object"!=typeof t||!t)&&"string"!=typeof t&&"function"!=typeof t)throw new Error(`${r(e)} must be a string, object, function`);return t}Object.defineProperty(t,"__esModule",{value:!0}),t.msg=r,t.access=n,t.assertRootMode=function(e,t){if(void 0!==t&&"root"!==t&&"upward"!==t&&"upward-optional"!==t)throw new Error(`${r(e)} must be a "root", "upward", "upward-optional" or undefined`);return t},t.assertSourceMaps=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&"inline"!==t&&"both"!==t)throw new Error(`${r(e)} must be a boolean, "inline", "both", or undefined`);return t},t.assertCompact=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&"auto"!==t)throw new Error(`${r(e)} must be a boolean, "auto", or undefined`);return t},t.assertSourceType=function(e,t){if(void 0!==t&&"module"!==t&&"script"!==t&&"unambiguous"!==t)throw new Error(`${r(e)} must be "module", "script", "unambiguous", or undefined`);return t},t.assertCallerMetadata=function(e,t){const o=i(e,t);if(o){if("string"!=typeof o.name)throw new Error(`${r(e)} set but does not contain "name" property string`);for(const t of Object.keys(o)){const i=n(e,t),a=o[t];if(null!=a&&"boolean"!=typeof a&&"string"!=typeof a&&"number"!=typeof a)throw new Error(`${r(i)} must be null, undefined, a boolean, a string, or a number.`)}}return t},t.assertInputSourceMap=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&("object"!=typeof t||!t))throw new Error(`${r(e)} must be a boolean, object, or undefined`);return t},t.assertString=function(e,t){if(void 0!==t&&"string"!=typeof t)throw new Error(`${r(e)} must be a string, or undefined`);return t},t.assertFunction=function(e,t){if(void 0!==t&&"function"!=typeof t)throw new Error(`${r(e)} must be a function, or undefined`);return t},t.assertBoolean=function(e,t){if(void 0!==t&&"boolean"!=typeof t)throw new Error(`${r(e)} must be a boolean, or undefined`);return t},t.assertObject=i,t.assertArray=o,t.assertIgnoreList=function(e,t){const i=o(e,t);i&&i.forEach(((t,i)=>function(e,t){if("string"!=typeof t&&"function"!=typeof t&&!(t instanceof RegExp))throw new Error(`${r(e)} must be an array of string/Function/RegExp values, or undefined`);return t}(n(e,i),t)));return i},t.assertConfigApplicableTest=function(e,t){if(void 0===t)return t;if(Array.isArray(t))t.forEach(((t,i)=>{if(!a(t))throw new Error(`${r(n(e,i))} must be a string/Function/RegExp.`)}));else if(!a(t))throw new Error(`${r(e)} must be a string/Function/RegExp, or an array of those`);return t},t.assertConfigFileSearch=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&"string"!=typeof t)throw new Error(`${r(e)} must be a undefined, a boolean, a string, got ${JSON.stringify(t)}`);return t},t.assertBabelrcSearch=function(e,t){if(void 0===t||"boolean"==typeof t)return t;if(Array.isArray(t))t.forEach(((t,i)=>{if(!a(t))throw new Error(`${r(n(e,i))} must be a string/Function/RegExp.`)}));else if(!a(t))throw new Error(`${r(e)} must be a undefined, a boolean, a string/Function/RegExp or an array of those, got ${JSON.stringify(t)}`);return t},t.assertPluginList=function(e,t){const i=o(e,t);i&&i.forEach(((t,i)=>function(e,t){if(Array.isArray(t)){if(0===t.length)throw new Error(`${r(e)} must include an object`);if(t.length>3)throw new Error(`${r(e)} may only be a two-tuple or three-tuple`);if(s(n(e,0),t[0]),t.length>1){const i=t[1];if(void 0!==i&&!1!==i&&("object"!=typeof i||Array.isArray(i)||null===i))throw new Error(`${r(n(e,1))} must be an object, false, or undefined`)}if(3===t.length){const i=t[2];if(void 0!==i&&"string"!=typeof i)throw new Error(`${r(n(e,2))} must be a string, or undefined`)}}else s(e,t);return t}(n(e,i),t)));return i}},26171:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validate=function(e,t){return p({type:"root",source:e},t)},t.checkNoUnwrappedItemOptionPairs=function(e,t,r,n){if(0===t)return;const i=e[t-1],o=e[t];i.file&&void 0===i.options&&"object"==typeof o.value&&(n.message+=`\n- Maybe you meant to use\n"${r}": [\n  ["${i.file.request}", ${JSON.stringify(o.value,void 0,2)}]\n]\nTo be a valid ${r}, its name and options should be wrapped in a pair of brackets`)};o(r(12591));var n=o(r(73932)),i=r(48860);function o(e){return e&&e.__esModule?e:{default:e}}const a={cwd:i.assertString,root:i.assertString,rootMode:i.assertRootMode,configFile:i.assertConfigFileSearch,caller:i.assertCallerMetadata,filename:i.assertString,filenameRelative:i.assertString,code:i.assertBoolean,ast:i.assertBoolean,cloneInputAst:i.assertBoolean,envName:i.assertString},s={babelrc:i.assertBoolean,babelrcRoots:i.assertBabelrcSearch},l={extends:i.assertString,ignore:i.assertIgnoreList,only:i.assertIgnoreList},u={inputSourceMap:i.assertInputSourceMap,presets:i.assertPluginList,plugins:i.assertPluginList,passPerPreset:i.assertBoolean,env:function(e,t){if("env"===e.parent.type)throw new Error(`${(0,i.msg)(e)} is not allowed inside of another .env block`);const r=e.parent,n=(0,i.assertObject)(e,t);if(n)for(const t of Object.keys(n)){const o=(0,i.assertObject)((0,i.access)(e,t),n[t]);if(!o)continue;p({type:"env",name:t,parent:r},o)}return n},overrides:function(e,t){if("env"===e.parent.type)throw new Error(`${(0,i.msg)(e)} is not allowed inside an .env block`);if("overrides"===e.parent.type)throw new Error(`${(0,i.msg)(e)} is not allowed inside an .overrides block`);const r=e.parent,n=(0,i.assertArray)(e,t);if(n)for(const[t,o]of n.entries()){const n=(0,i.access)(e,t),a=(0,i.assertObject)(n,o);if(!a)throw new Error(`${(0,i.msg)(n)} must be an object`);p({type:"overrides",index:t,parent:r},a)}return n},test:i.assertConfigApplicableTest,include:i.assertConfigApplicableTest,exclude:i.assertConfigApplicableTest,retainLines:i.assertBoolean,comments:i.assertBoolean,shouldPrintComment:i.assertFunction,compact:i.assertCompact,minified:i.assertBoolean,auxiliaryCommentBefore:i.assertString,auxiliaryCommentAfter:i.assertString,sourceType:i.assertSourceType,wrapPluginVisitorMethod:i.assertFunction,highlightCode:i.assertBoolean,sourceMaps:i.assertSourceMaps,sourceMap:i.assertSourceMaps,sourceFileName:i.assertString,sourceRoot:i.assertString,getModuleId:i.assertFunction,moduleRoot:i.assertString,moduleIds:i.assertBoolean,moduleId:i.assertString,parserOpts:i.assertObject,generatorOpts:i.assertObject};function c(e){return"root"===e.type?e.source:c(e.parent)}function p(e,t){const r=c(e);return function(e){if(d(e,"sourceMap")&&d(e,"sourceMaps"))throw new Error(".sourceMap is an alias for .sourceMaps, cannot use both")}(t),Object.keys(t).forEach((n=>{const o={type:"option",name:n,parent:e};if("preset"===r&&l[n])throw new Error(`${(0,i.msg)(o)} is not allowed in preset options`);if("arguments"!==r&&a[n])throw new Error(`${(0,i.msg)(o)} is only allowed in root programmatic options`);if("arguments"!==r&&"configfile"!==r&&s[n]){if("babelrcfile"===r||"extendsfile"===r)throw new Error(`${(0,i.msg)(o)} is not allowed in .babelrc or "extends"ed files, only in root programmatic options, or babel.config.js/config file options`);throw new Error(`${(0,i.msg)(o)} is only allowed in root programmatic options, or babel.config.js/config file options`)}(u[n]||l[n]||s[n]||a[n]||f)(o,t[n])})),t}function f(e){const t=e.name;if(n.default[t]){const{message:r,version:o=5}=n.default[t];throw new Error(`Using removed Babel ${o} option: ${(0,i.msg)(e)} - ${r}`)}{const t=new Error(`Unknown option: ${(0,i.msg)(e)}. Check out https://babeljs.io/docs/en/babel-core/#options for more information about options.`);throw t.code="BABEL_UNKNOWN_OPTION",t}}function d(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},96031:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validatePluginObject=function(e){const t={type:"root",source:"plugin"};return Object.keys(e).forEach((r=>{const n=i[r];if(!n){const e=new Error(`.${r} is not a valid Plugin property`);throw e.code="BABEL_UNKNOWN_PLUGIN_PROPERTY",e}n({type:"option",name:r,parent:t},e[r])})),e};var n=r(48860);const i={name:n.assertString,manipulateOptions:n.assertFunction,pre:n.assertFunction,post:n.assertFunction,inherits:n.assertFunction,visitor:function(e,t){const r=(0,n.assertObject)(e,t);if(r&&(Object.keys(r).forEach((e=>function(e,t){if(t&&"object"==typeof t)Object.keys(t).forEach((t=>{if("enter"!==t&&"exit"!==t)throw new Error(`.visitor["${e}"] may only have .enter and/or .exit handlers.`)}));else if("function"!=typeof t)throw new Error(`.visitor["${e}"] must be a function`);return t}(e,r[e]))),r.enter||r.exit))throw new Error(`${(0,n.msg)(e)} cannot contain catch-all "enter" or "exit" handlers. Please target individual nodes.`);return r},parserOverride:n.assertFunction,generatorOverride:n.assertFunction}},73932:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={auxiliaryComment:{message:"Use `auxiliaryCommentBefore` or `auxiliaryCommentAfter`"},blacklist:{message:"Put the specific transforms you want in the `plugins` option"},breakConfig:{message:"This is not a necessary option in Babel 6"},experimental:{message:"Put the specific transforms you want in the `plugins` option"},externalHelpers:{message:"Use the `external-helpers` plugin instead. Check out http://babeljs.io/docs/plugins/external-helpers/"},extra:{message:""},jsxPragma:{message:"use the `pragma` option in the `react-jsx` plugin. Check out http://babeljs.io/docs/plugins/transform-react-jsx/"},loose:{message:"Specify the `loose` option for the relevant plugin you are using or use a preset that sets the option."},metadataUsedHelpers:{message:"Not required anymore as this is enabled by default"},modules:{message:"Use the corresponding module transform plugin in the `plugins` option. Check out http://babeljs.io/docs/plugins/#modules"},nonStandard:{message:"Use the `react-jsx` and `flow-strip-types` plugins to support JSX and Flow. Also check out the react preset http://babeljs.io/docs/plugins/preset-react/"},optional:{message:"Put the specific transforms you want in the `plugins` option"},sourceMapName:{message:"The `sourceMapName` option has been removed because it makes more sense for the tooling that calls Babel to assign `map.file` themselves."},stage:{message:"Check out the corresponding stage-x presets http://babeljs.io/docs/plugins/#presets"},whitelist:{message:"Put the specific transforms you want in the `plugins` option"},resolveModuleSource:{version:6,message:"Use `babel-plugin-module-resolver@3`'s 'resolvePath' options"},metadata:{version:6,message:"Generated plugin metadata is always included in the output result"},sourceMapTarget:{version:6,message:"The `sourceMapTarget` option has been removed because it makes more sense for the tooling that calls Babel to assign `map.file` themselves."}}},33245:(e,t,r)=>{"use strict";function n(){const e=(t=r(43291))&&t.__esModule?t:{default:t};var t;return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.maybeAsync=function(e,t){return(0,n().default)({sync(...r){const n=e.apply(this,r);if(c(n))throw new Error(t);return n},async(...t){return Promise.resolve(e.apply(this,t))}})},t.forwardAsync=function(e,t){const r=(0,n().default)(e);return s((e=>{const n=r[e];return t(n)}))},t.isThenable=c,t.waitFor=t.onFirstPause=t.isAsync=void 0;const i=e=>e,o=(0,n().default)((function*(e){return yield*e})),a=(0,n().default)({sync:()=>!1,errback:e=>e(null,!0)});t.isAsync=a;const s=(0,n().default)({sync:e=>e("sync"),async:e=>e("async")});const l=(0,n().default)({name:"onFirstPause",arity:2,sync:function(e){return o.sync(e)},errback:function(e,t,r){let n=!1;o.errback(e,((e,t)=>{n=!0,r(e,t)})),n||t()}});t.onFirstPause=l;const u=(0,n().default)({sync:i,async:i});function c(e){return!(!e||"object"!=typeof e&&"function"!=typeof e||!e.then||"function"!=typeof e.then)}t.waitFor=u},1091:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Plugin=function(e){throw new Error(`The (${e}) Babel 5 plugin is being run with an unsupported Babel version.`)},Object.defineProperty(t,"File",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"buildExternalHelpers",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"resolvePlugin",{enumerable:!0,get:function(){return o.resolvePlugin}}),Object.defineProperty(t,"resolvePreset",{enumerable:!0,get:function(){return o.resolvePreset}}),Object.defineProperty(t,"getEnv",{enumerable:!0,get:function(){return a.getEnv}}),Object.defineProperty(t,"tokTypes",{enumerable:!0,get:function(){return l().tokTypes}}),Object.defineProperty(t,"traverse",{enumerable:!0,get:function(){return u().default}}),Object.defineProperty(t,"template",{enumerable:!0,get:function(){return c().default}}),Object.defineProperty(t,"createConfigItem",{enumerable:!0,get:function(){return p.createConfigItem}}),Object.defineProperty(t,"loadPartialConfig",{enumerable:!0,get:function(){return f.loadPartialConfig}}),Object.defineProperty(t,"loadPartialConfigSync",{enumerable:!0,get:function(){return f.loadPartialConfigSync}}),Object.defineProperty(t,"loadPartialConfigAsync",{enumerable:!0,get:function(){return f.loadPartialConfigAsync}}),Object.defineProperty(t,"loadOptions",{enumerable:!0,get:function(){return f.loadOptions}}),Object.defineProperty(t,"loadOptionsSync",{enumerable:!0,get:function(){return f.loadOptionsSync}}),Object.defineProperty(t,"loadOptionsAsync",{enumerable:!0,get:function(){return f.loadOptionsAsync}}),Object.defineProperty(t,"transform",{enumerable:!0,get:function(){return d.transform}}),Object.defineProperty(t,"transformSync",{enumerable:!0,get:function(){return d.transformSync}}),Object.defineProperty(t,"transformAsync",{enumerable:!0,get:function(){return d.transformAsync}}),Object.defineProperty(t,"transformFile",{enumerable:!0,get:function(){return h.transformFile}}),Object.defineProperty(t,"transformFileSync",{enumerable:!0,get:function(){return h.transformFileSync}}),Object.defineProperty(t,"transformFileAsync",{enumerable:!0,get:function(){return h.transformFileAsync}}),Object.defineProperty(t,"transformFromAst",{enumerable:!0,get:function(){return m.transformFromAst}}),Object.defineProperty(t,"transformFromAstSync",{enumerable:!0,get:function(){return m.transformFromAstSync}}),Object.defineProperty(t,"transformFromAstAsync",{enumerable:!0,get:function(){return m.transformFromAstAsync}}),Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return y.parse}}),Object.defineProperty(t,"parseSync",{enumerable:!0,get:function(){return y.parseSync}}),Object.defineProperty(t,"parseAsync",{enumerable:!0,get:function(){return y.parseAsync}}),t.types=t.OptionManager=t.DEFAULT_EXTENSIONS=t.version=void 0;var n=b(r(40371)),i=b(r(13426)),o=r(23773),a=r(46652);function s(){const e=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=g();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(80666));return s=function(){return e},e}function l(){const e=r(70893);return l=function(){return e},e}function u(){const e=b(r(1785));return u=function(){return e},e}function c(){const e=b(r(13198));return c=function(){return e},e}Object.defineProperty(t,"types",{enumerable:!0,get:function(){return s()}});var p=r(95610),f=r(91152),d=r(36105),h=r(67677),m=r(84091),y=r(17612);function g(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return g=function(){return e},e}function b(e){return e&&e.__esModule?e:{default:e}}t.version="7.12.13";const v=Object.freeze([".js",".jsx",".es6",".es",".mjs"]);t.DEFAULT_EXTENSIONS=v;t.OptionManager=class{init(e){return(0,f.loadOptions)(e)}}},17612:(e,t,r)=>{"use strict";function n(){const e=s(r(43291));return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.parseAsync=t.parseSync=t.parse=void 0;var i=s(r(91152)),o=s(r(33106)),a=s(r(45401));function s(e){return e&&e.__esModule?e:{default:e}}const l=(0,n().default)((function*(e,t){const r=yield*(0,i.default)(t);return null===r?null:yield*(0,o.default)(r.passes,(0,a.default)(r),e)}));t.parse=function(e,t,r){if("function"==typeof t&&(r=t,t=void 0),void 0===r)return l.sync(e,t);l.errback(e,t,r)};const u=l.sync;t.parseSync=u;const c=l.async;t.parseAsync=c},33106:(e,t,r)=>{"use strict";function n(){const e=r(70893);return n=function(){return e},e}function i(){const e=r(86502);return i=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function*(e,{parserOpts:t,highlightCode:r=!0,filename:o="unknown"},s){try{const r=[];for(const i of e)for(const e of i){const{parserOverride:i}=e;if(i){const e=i(s,t,n().parse);void 0!==e&&r.push(e)}}if(0===r.length)return(0,n().parse)(s,t);if(1===r.length){if(yield*[],"function"==typeof r[0].then)throw new Error("You appear to be using an async parser plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");return r[0]}throw new Error("More than one plugin attempted to override parsing.")}catch(e){"BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"===e.code&&(e.message+="\nConsider renaming the file to '.mjs', or setting sourceType:module or sourceType:unambiguous in your Babel config for this file.");const{loc:t,missingPlugin:n}=e;if(t){const l=(0,i().codeFrameColumns)(s,{start:{line:t.line,column:t.column+1}},{highlightCode:r});e.message=n?`${o}: `+(0,a.default)(n[0],t,l):`${o}: ${e.message}\n\n`+l,e.code="BABEL_PARSE_ERROR"}throw e}};var o,a=(o=r(71751))&&o.__esModule?o:{default:o}},71751:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,i){let o=`Support for the experimental syntax '${e}' isn't currently enabled (${t.line}:${t.column+1}):\n\n`+i;const a=r[e];if(a){const{syntax:e,transform:t}=a;if(e){const r=n(e);if(t){const e=n(t),i=t.name.startsWith("@babel/plugin")?"plugins":"presets";o+=`\n\nAdd ${e} to the '${i}' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add ${r} to the 'plugins' section to enable parsing.`}else o+=`\n\nAdd ${r} to the 'plugins' section of your Babel config to enable parsing.`}}return o};const r={classProperties:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://git.io/vb4yQ"},transform:{name:"@babel/plugin-proposal-class-properties",url:"https://git.io/vb4SL"}},classPrivateProperties:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://git.io/vb4yQ"},transform:{name:"@babel/plugin-proposal-class-properties",url:"https://git.io/vb4SL"}},classPrivateMethods:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://git.io/vb4yQ"},transform:{name:"@babel/plugin-proposal-private-methods",url:"https://git.io/JvpRG"}},classStaticBlock:{syntax:{name:"@babel/plugin-syntax-class-static-block",url:"https://git.io/JTLB6"},transform:{name:"@babel/plugin-proposal-class-static-block",url:"https://git.io/JTLBP"}},decimal:{syntax:{name:"@babel/plugin-syntax-decimal",url:"https://git.io/JfKOH"}},decorators:{syntax:{name:"@babel/plugin-syntax-decorators",url:"https://git.io/vb4y9"},transform:{name:"@babel/plugin-proposal-decorators",url:"https://git.io/vb4ST"}},doExpressions:{syntax:{name:"@babel/plugin-syntax-do-expressions",url:"https://git.io/vb4yh"},transform:{name:"@babel/plugin-proposal-do-expressions",url:"https://git.io/vb4S3"}},dynamicImport:{syntax:{name:"@babel/plugin-syntax-dynamic-import",url:"https://git.io/vb4Sv"}},exportDefaultFrom:{syntax:{name:"@babel/plugin-syntax-export-default-from",url:"https://git.io/vb4SO"},transform:{name:"@babel/plugin-proposal-export-default-from",url:"https://git.io/vb4yH"}},exportNamespaceFrom:{syntax:{name:"@babel/plugin-syntax-export-namespace-from",url:"https://git.io/vb4Sf"},transform:{name:"@babel/plugin-proposal-export-namespace-from",url:"https://git.io/vb4SG"}},flow:{syntax:{name:"@babel/plugin-syntax-flow",url:"https://git.io/vb4yb"},transform:{name:"@babel/preset-flow",url:"https://git.io/JfeDn"}},functionBind:{syntax:{name:"@babel/plugin-syntax-function-bind",url:"https://git.io/vb4y7"},transform:{name:"@babel/plugin-proposal-function-bind",url:"https://git.io/vb4St"}},functionSent:{syntax:{name:"@babel/plugin-syntax-function-sent",url:"https://git.io/vb4yN"},transform:{name:"@babel/plugin-proposal-function-sent",url:"https://git.io/vb4SZ"}},importMeta:{syntax:{name:"@babel/plugin-syntax-import-meta",url:"https://git.io/vbKK6"}},jsx:{syntax:{name:"@babel/plugin-syntax-jsx",url:"https://git.io/vb4yA"},transform:{name:"@babel/preset-react",url:"https://git.io/JfeDR"}},importAssertions:{syntax:{name:"@babel/plugin-syntax-import-assertions",url:"https://git.io/JUbkv"}},moduleStringNames:{syntax:{name:"@babel/plugin-syntax-module-string-names",url:"https://git.io/JTL8G"}},numericSeparator:{syntax:{name:"@babel/plugin-syntax-numeric-separator",url:"https://git.io/vb4Sq"},transform:{name:"@babel/plugin-proposal-numeric-separator",url:"https://git.io/vb4yS"}},optionalChaining:{syntax:{name:"@babel/plugin-syntax-optional-chaining",url:"https://git.io/vb4Sc"},transform:{name:"@babel/plugin-proposal-optional-chaining",url:"https://git.io/vb4Sk"}},pipelineOperator:{syntax:{name:"@babel/plugin-syntax-pipeline-operator",url:"https://git.io/vb4yj"},transform:{name:"@babel/plugin-proposal-pipeline-operator",url:"https://git.io/vb4SU"}},privateIn:{syntax:{name:"@babel/plugin-syntax-private-property-in-object",url:"https://git.io/JfK3q"},transform:{name:"@babel/plugin-proposal-private-property-in-object",url:"https://git.io/JfK3O"}},recordAndTuple:{syntax:{name:"@babel/plugin-syntax-record-and-tuple",url:"https://git.io/JvKp3"}},throwExpressions:{syntax:{name:"@babel/plugin-syntax-throw-expressions",url:"https://git.io/vb4SJ"},transform:{name:"@babel/plugin-proposal-throw-expressions",url:"https://git.io/vb4yF"}},typescript:{syntax:{name:"@babel/plugin-syntax-typescript",url:"https://git.io/vb4SC"},transform:{name:"@babel/preset-typescript",url:"https://git.io/JfeDz"}},asyncGenerators:{syntax:{name:"@babel/plugin-syntax-async-generators",url:"https://git.io/vb4SY"},transform:{name:"@babel/plugin-proposal-async-generator-functions",url:"https://git.io/vb4yp"}},logicalAssignment:{syntax:{name:"@babel/plugin-syntax-logical-assignment-operators",url:"https://git.io/vAlBp"},transform:{name:"@babel/plugin-proposal-logical-assignment-operators",url:"https://git.io/vAlRe"}},nullishCoalescingOperator:{syntax:{name:"@babel/plugin-syntax-nullish-coalescing-operator",url:"https://git.io/vb4yx"},transform:{name:"@babel/plugin-proposal-nullish-coalescing-operator",url:"https://git.io/vb4Se"}},objectRestSpread:{syntax:{name:"@babel/plugin-syntax-object-rest-spread",url:"https://git.io/vb4y5"},transform:{name:"@babel/plugin-proposal-object-rest-spread",url:"https://git.io/vb4Ss"}},optionalCatchBinding:{syntax:{name:"@babel/plugin-syntax-optional-catch-binding",url:"https://git.io/vb4Sn"},transform:{name:"@babel/plugin-proposal-optional-catch-binding",url:"https://git.io/vb4SI"}}};r.privateIn.syntax=r.privateIn.transform;const n=({name:e,url:t})=>`${e} (${t})`},13426:(e,t,r)=>{"use strict";function n(){const e=c(r(13667));return n=function(){return e},e}function i(){const e=l(r(7160));return i=function(){return e},e}function o(){const e=l(r(13198));return o=function(){return e},e}function a(){const e=c(r(80666));return a=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t="global"){let r;const n={global:p,module:f,umd:d,var:h}[t];if(!n)throw new Error(`Unsupported output type ${t}`);r=n(e);return(0,i().default)(r).code};var s=l(r(40371));function l(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function c(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}function p(e){const t=a().identifier("babelHelpers"),r=[],n=a().functionExpression(null,[a().identifier("global")],a().blockStatement(r)),i=a().program([a().expressionStatement(a().callExpression(n,[a().conditionalExpression(a().binaryExpression("===",a().unaryExpression("typeof",a().identifier("global")),a().stringLiteral("undefined")),a().identifier("self"),a().identifier("global"))]))]);return r.push(a().variableDeclaration("var",[a().variableDeclarator(t,a().assignmentExpression("=",a().memberExpression(a().identifier("global"),t),a().objectExpression([])))])),m(r,t,e),i}function f(e){const t=[],r=m(t,null,e);return t.unshift(a().exportNamedDeclaration(null,Object.keys(r).map((e=>a().exportSpecifier(a().cloneNode(r[e]),a().identifier(e)))))),a().program(t,[],"module")}function d(e){const t=a().identifier("babelHelpers"),r=[];return r.push(a().variableDeclaration("var",[a().variableDeclarator(t,a().identifier("global"))])),m(r,t,e),a().program([(n={FACTORY_PARAMETERS:a().identifier("global"),BROWSER_ARGUMENTS:a().assignmentExpression("=",a().memberExpression(a().identifier("root"),t),a().objectExpression([])),COMMON_ARGUMENTS:a().identifier("exports"),AMD_ARGUMENTS:a().arrayExpression([a().stringLiteral("exports")]),FACTORY_BODY:r,UMD_ROOT:a().identifier("this")},o().default`
    (function (root, factory) {
      if (typeof define === "function" && define.amd) {
        define(AMD_ARGUMENTS, factory);
      } else if (typeof exports === "object") {
        factory(COMMON_ARGUMENTS);
      } else {
        factory(BROWSER_ARGUMENTS);
      }
    })(UMD_ROOT, function (FACTORY_PARAMETERS) {
      FACTORY_BODY
    });
  `(n))]);var n}function h(e){const t=a().identifier("babelHelpers"),r=[];r.push(a().variableDeclaration("var",[a().variableDeclarator(t,a().objectExpression([]))]));const n=a().program(r);return m(r,t,e),r.push(a().expressionStatement(t)),n}function m(e,t,r){const i=e=>t?a().memberExpression(t,a().identifier(e)):a().identifier(`_${e}`),o={};return n().list.forEach((function(t){if(r&&r.indexOf(t)<0)return;const a=o[t]=i(t);n().ensure(t,s.default);const{nodes:l}=n().get(t,i,a);e.push(...l)})),o}},84091:(e,t,r)=>{"use strict";function n(){const e=a(r(43291));return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.transformFromAstAsync=t.transformFromAstSync=t.transformFromAst=void 0;var i=a(r(91152)),o=r(42502);function a(e){return e&&e.__esModule?e:{default:e}}const s=(0,n().default)((function*(e,t,r){const n=yield*(0,i.default)(r);if(null===n)return null;if(!e)throw new Error("No AST given");return yield*(0,o.run)(n,t,e)}));t.transformFromAst=function(e,t,r,n){if("function"==typeof r&&(n=r,r=void 0),void 0===n)return s.sync(e,t,r);s.errback(e,t,r,n)};const l=s.sync;t.transformFromAstSync=l;const u=s.async;t.transformFromAstAsync=u},67677:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.transformFileSync=function(){throw new Error("Transforming files is not supported in browsers")},t.transformFileAsync=function(){return Promise.reject(new Error("Transforming files is not supported in browsers"))},t.transformFile=void 0;t.transformFile=function(e,t,r){"function"==typeof t&&(r=t),r(new Error("Transforming files is not supported in browsers"),null)}},36105:(e,t,r)=>{"use strict";function n(){const e=a(r(43291));return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.transformAsync=t.transformSync=t.transform=void 0;var i=a(r(91152)),o=r(42502);function a(e){return e&&e.__esModule?e:{default:e}}const s=(0,n().default)((function*(e,t){const r=yield*(0,i.default)(t);return null===r?null:yield*(0,o.run)(r,e)}));t.transform=function(e,t,r){if("function"==typeof t&&(r=t,t=void 0),void 0===r)return s.sync(e,t);s.errback(e,t,r)};const l=s.sync;t.transformSync=l;const u=s.async;t.transformAsync=u},54274:(e,t,r)=>{"use strict";function n(){const e=o(r(829));return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if(!a){const e=i.default.sync({babelrc:!1,configFile:!1,plugins:[s]});if(a=e?e.passes[0][0]:void 0,!a)throw new Error("Assertion failure")}return a};var i=o(r(91152));function o(e){return e&&e.__esModule?e:{default:e}}let a;const s={name:"internal.blockHoist",visitor:{Block:{exit({node:e}){let t=!1;for(let r=0;r<e.body.length;r++){const n=e.body[r];if(null!=(null==n?void 0:n._blockHoist)){t=!0;break}}t&&(e.body=(0,n().default)(e.body,(function(e){let t=null==e?void 0:e._blockHoist;return null==t&&(t=1),!0===t&&(t=2),-1*t})))}}}}},40371:(e,t,r)=>{"use strict";function n(){const e=c(r(13667));return n=function(){return e},e}function i(){const e=c(r(1785));return i=function(){return e},e}function o(){const e=r(86502);return o=function(){return e},e}function a(){const e=c(r(80666));return a=function(){return e},e}function s(){const e=r(18);return s=function(){return e},e}function l(){const e=(t=r(4678))&&t.__esModule?t:{default:t};var t;return l=function(){return e},e}function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function c(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const p={enter(e,t){const r=e.node.loc;r&&(t.loc=r,e.stop())}};class f{constructor(e,{code:t,ast:r,inputMap:n}){this._map=new Map,this.opts=void 0,this.declarations={},this.path=null,this.ast={},this.scope=void 0,this.metadata={},this.code="",this.inputMap=null,this.hub={file:this,getCode:()=>this.code,getScope:()=>this.scope,addHelper:this.addHelper.bind(this),buildError:this.buildCodeFrameError.bind(this)},this.opts=e,this.code=t,this.ast=r,this.inputMap=n,this.path=i().NodePath.get({hub:this.hub,parentPath:null,parent:this.ast,container:this.ast,key:"program"}).setContext(),this.scope=this.path.scope}get shebang(){const{interpreter:e}=this.path.node;return e?e.value:""}set shebang(e){e?this.path.get("interpreter").replaceWith(a().interpreterDirective(e)):this.path.get("interpreter").remove()}set(e,t){if("helpersNamespace"===e)throw new Error("Babel 7.0.0-beta.56 has dropped support for the 'helpersNamespace' utility.If you are using @babel/plugin-external-helpers you will need to use a newer version than the one you currently have installed. If you have your own implementation, you'll want to explore using 'helperGenerator' alongside 'file.availableHelper()'.");this._map.set(e,t)}get(e){return this._map.get(e)}has(e){return this._map.has(e)}getModuleName(){return(0,s().getModuleName)(this.opts,this.opts)}addImport(){throw new Error("This API has been removed. If you're looking for this functionality in Babel 7, you should import the '@babel/helper-module-imports' module and use the functions exposed  from that module, such as 'addNamed' or 'addDefault'.")}availableHelper(e,t){let r;try{r=n().minVersion(e)}catch(e){if("BABEL_HELPER_UNKNOWN"!==e.code)throw e;return!1}return"string"!=typeof t||(l().default.valid(t)&&(t=`^${t}`),!l().default.intersects(`<${r}`,t)&&!l().default.intersects(">=8.0.0",t))}addHelper(e){const t=this.declarations[e];if(t)return a().cloneNode(t);const r=this.get("helperGenerator");if(r){const t=r(e);if(t)return t}n().ensure(e,f);const i=this.declarations[e]=this.scope.generateUidIdentifier(e),o={};for(const t of n().getDependencies(e))o[t]=this.addHelper(t);const{nodes:s,globals:l}=n().get(e,(e=>o[e]),i,Object.keys(this.scope.getAllBindings()));return l.forEach((e=>{this.path.scope.hasBinding(e,!0)&&this.path.scope.rename(e)})),s.forEach((e=>{e._compact=!0})),this.path.unshiftContainer("body",s),this.path.get("body").forEach((e=>{-1!==s.indexOf(e.node)&&e.isVariableDeclaration()&&this.scope.registerDeclaration(e)})),i}addTemplateObject(){throw new Error("This function has been moved into the template literal transform itself.")}buildCodeFrameError(e,t,r=SyntaxError){let n=e&&(e.loc||e._loc);if(!n&&e){const r={loc:null};(0,i().default)(e,p,this.scope,r),n=r.loc;let o="This is an error on an internal node. Probably an internal error.";n&&(o+=" Location has been estimated."),t+=` (${o})`}if(n){const{highlightCode:e=!0}=this.opts;t+="\n"+(0,o().codeFrameColumns)(this.code,{start:{line:n.start.line,column:n.start.column+1},end:n.end&&n.start.line===n.end.line?{line:n.end.line,column:n.end.column+1}:void 0},{highlightCode:e})}return new r(t)}}t.default=f},64467:(e,t,r)=>{"use strict";function n(){const e=a(r(97143));return n=function(){return e},e}function i(){const e=a(r(7160));return i=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{opts:r,ast:a,code:s,inputMap:l}=t,u=[];for(const t of e)for(const e of t){const{generatorOverride:t}=e;if(t){const e=t(a,r.generatorOpts,s,i().default);void 0!==e&&u.push(e)}}let c;if(0===u.length)c=(0,i().default)(a,r.generatorOpts,s);else{if(1!==u.length)throw new Error("More than one plugin attempted to override codegen.");if(c=u[0],"function"==typeof c.then)throw new Error("You appear to be using an async codegen plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}let{code:p,map:f}=c;f&&l&&(f=(0,o.default)(l.toObject(),f));"inline"!==r.sourceMaps&&"both"!==r.sourceMaps||(p+="\n"+n().default.fromObject(f).toComment());"inline"===r.sourceMaps&&(f=null);return{outputCode:p,outputMap:f}};var o=a(r(42175));function a(e){return e&&e.__esModule?e:{default:e}}},42175:(e,t,r)=>{"use strict";function n(){const e=(t=r(56466))&&t.__esModule?t:{default:t};var t;return n=function(){return e},e}function i(e){return`${e.line}/${e.columnStart}`}function o(e){const t=new(n().default.SourceMapConsumer)(Object.assign({},e,{sourceRoot:null})),r=new Map,i=new Map;let o=null;return t.computeColumnSpans(),t.eachMapping((e=>{if(null===e.originalLine)return;let n=r.get(e.source);n||(n={path:e.source,content:t.sourceContentFor(e.source,!0)},r.set(e.source,n));let a=i.get(n);a||(a={source:n,mappings:[]},i.set(n,a));const s={line:e.originalLine,columnStart:e.originalColumn,columnEnd:1/0,name:e.name};o&&o.source===n&&o.mapping.line===e.originalLine&&(o.mapping.columnEnd=e.originalColumn),o={source:n,mapping:s},a.mappings.push({original:s,generated:t.allGeneratedPositionsFor({source:e.source,line:e.originalLine,column:e.originalColumn}).map((e=>({line:e.line,columnStart:e.column,columnEnd:e.lastColumn+1})))})}),null,n().default.SourceMapConsumer.ORIGINAL_ORDER),{file:e.file,sourceRoot:e.sourceRoot,sources:Array.from(i.values())}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const r=o(e),a=o(t),s=new(n().default.SourceMapGenerator);for(const{source:e}of r.sources)"string"==typeof e.content&&s.setSourceContent(e.path,e.content);if(1===a.sources.length){const e=a.sources[0],t=new Map;!function(e,t){for(const{source:r,mappings:n}of e.sources)for(const{original:e,generated:i}of n)for(const n of i)t(n,e,r)}(r,((r,n,o)=>{!function(e,t,r){const n=function({mappings:e},{line:t,columnStart:r,columnEnd:n}){return function(e,t){const r=function(e,t){let r=0,n=e.length;for(;r<n;){const i=Math.floor((r+n)/2),o=t(e[i]);if(0===o){r=i;break}o>=0?n=i:r=i+1}let i=r;if(i<e.length){for(;i>=0&&t(e[i])>=0;)i--;return i+1}return i}(e,t),n=[];for(let i=r;i<e.length&&0===t(e[i]);i++)n.push(e[i]);return n}(e,(({original:e})=>t>e.line?-1:t<e.line?1:r>=e.columnEnd?-1:n<=e.columnStart?1:0))}(e,t);for(const{generated:e}of n)for(const t of e)r(t)}(e,r,(e=>{const r=i(e);t.has(r)||(t.set(r,e),s.addMapping({source:o.path,original:{line:n.line,column:n.columnStart},generated:{line:e.line,column:e.columnStart},name:n.name}))}))}));for(const e of t.values()){if(e.columnEnd===1/0)continue;const r={line:e.line,columnStart:e.columnEnd},n=i(r);t.has(n)||s.addMapping({generated:{line:r.line,column:r.columnStart}})}}const l=s.toJSON();"string"==typeof r.sourceRoot&&(l.sourceRoot=r.sourceRoot);return l}},42502:(e,t,r)=>{"use strict";function n(){const e=u(r(1785));return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.run=function*(e,t,r){const u=yield*(0,s.default)(e.passes,(0,a.default)(e),t,r),p=u.opts;try{yield*function*(e,t){for(const r of t){const t=[],a=[],s=[];for(const n of r.concat([(0,o.default)()])){const r=new i.default(e,n.key,n.options);t.push([n,r]),a.push(r),s.push(n.visitor)}for(const[r,n]of t){const t=r.pre;if(t){const r=t.call(n,e);if(yield*[],c(r))throw new Error("You appear to be using an plugin with an async .pre, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}}const l=n().default.visitors.merge(s,a,e.opts.wrapPluginVisitorMethod);(0,n().default)(e.ast,l,e.scope);for(const[r,n]of t){const t=r.post;if(t){const r=t.call(n,e);if(yield*[],c(r))throw new Error("You appear to be using an plugin with an async .post, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}}}}(u,e.passes)}catch(e){var f;throw e.message=`${null!=(f=p.filename)?f:"unknown"}: ${e.message}`,e.code||(e.code="BABEL_TRANSFORM_ERROR"),e}let d,h;try{!1!==p.code&&({outputCode:d,outputMap:h}=(0,l.default)(e.passes,u))}catch(e){var m;throw e.message=`${null!=(m=p.filename)?m:"unknown"}: ${e.message}`,e.code||(e.code="BABEL_GENERATE_ERROR"),e}return{metadata:u.metadata,options:p,ast:!0===p.ast?u.ast:null,code:void 0===d?null:d,map:void 0===h?null:h,sourceType:u.ast.program.sourceType}};var i=u(r(99562)),o=u(r(54274)),a=u(r(45401)),s=u(r(8384)),l=u(r(64467));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return!(!e||"object"!=typeof e&&"function"!=typeof e||!e.then||"function"!=typeof e.then)}},8384:(e,t,r)=>{"use strict";function n(){const e=f(r(12993));return n=function(){return e},e}function i(){const e=f(r(67425));return i=function(){return e},e}function o(){const e=f(r(25130));return o=function(){return e},e}function a(){const e=f(r(9850));return a=function(){return e},e}function s(){const e=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(80666));return s=function(){return e},e}function l(){const e=f(r(97143));return l=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function*(e,t,r,o){if(r=`${r||""}`,o){if("Program"===o.type)o=s().file(o,[],[]);else if("File"!==o.type)throw new Error("AST root must be a Program or File node");const{cloneInputAst:e}=t;e&&(o=(0,a().default)(o))}else o=yield*(0,c.default)(e,t,r);let p=null;if(!1!==t.inputSourceMap){if("object"==typeof t.inputSourceMap&&(p=l().default.fromObject(t.inputSourceMap)),!p){const e=g(h,o);if(e)try{p=l().default.fromComment(e)}catch(e){d("discarding unknown inline input sourcemap",e)}}if(!p){const e=g(m,o);if("string"==typeof t.filename&&e)try{const r=m.exec(e),o=n().default.readFileSync(i().default.resolve(i().default.dirname(t.filename),r[1]));o.length>1e6?d("skip merging input map > 1 MB"):p=l().default.fromJSON(o)}catch(e){d("discarding unknown file input sourcemap",e)}else e&&d("discarding un-loadable file input sourcemap")}}return new u.default(t,{code:r,ast:o,inputMap:p})};var u=f(r(40371)),c=f(r(33106));function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function f(e){return e&&e.__esModule?e:{default:e}}const d=(0,o().default)("babel:transform:file");const h=/^[@#]\s+sourceMappingURL=data:(?:application|text)\/json;(?:charset[:=]\S+?;)?base64,(?:.*)$/,m=/^[@#][ \t]+sourceMappingURL=([^\s'"`]+)[ \t]*$/;function y(e,t,r){return t&&(t=t.filter((({value:t})=>!e.test(t)||(r=t,!1)))),[t,r]}function g(e,t){let r=null;return s().traverseFast(t,(t=>{[t.leadingComments,r]=y(e,t.leadingComments,r),[t.innerComments,r]=y(e,t.innerComments,r),[t.trailingComments,r]=y(e,t.trailingComments,r)})),r}},45401:(e,t,r)=>{"use strict";function n(){const e=(t=r(67425))&&t.__esModule?t:{default:t};var t;return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const{filename:t,cwd:r,filenameRelative:i=("string"==typeof t?n().default.relative(r,t):"unknown"),sourceType:o="module",inputSourceMap:a,sourceMaps:s=!!a,moduleRoot:l,sourceRoot:u=l,sourceFileName:c=n().default.basename(i),comments:p=!0,compact:f="auto"}=e.options,d=e.options,h=Object.assign({},d,{parserOpts:Object.assign({sourceType:".mjs"===n().default.extname(i)?"module":o,sourceFileName:t,plugins:[]},d.parserOpts),generatorOpts:Object.assign({filename:t,auxiliaryCommentBefore:d.auxiliaryCommentBefore,auxiliaryCommentAfter:d.auxiliaryCommentAfter,retainLines:d.retainLines,comments:p,shouldPrintComment:d.shouldPrintComment,compact:f,minified:d.minified,sourceMaps:s,sourceRoot:u,sourceFileName:c},d.generatorOpts)});for(const t of e.passes)for(const e of t)e.manipulateOptions&&e.manipulateOptions(h,h.parserOpts);return h}},99562:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class{constructor(e,t,r){this._map=new Map,this.key=void 0,this.file=void 0,this.opts=void 0,this.cwd=void 0,this.filename=void 0,this.key=t,this.file=e,this.opts=r||{},this.cwd=e.opts.cwd,this.filename=e.opts.filename}set(e,t){this._map.set(e,t)}get(e){return this._map.get(e)}availableHelper(e,t){return this.file.availableHelper(e,t)}addHelper(e){return this.file.addHelper(e)}addImport(){return this.file.addImport()}getModuleName(){return this.file.getModuleName()}buildCodeFrameError(e,t,r){return this.file.buildCodeFrameError(e,t,r)}}},67586:(e,t,r)=>{var n=r(43626),i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Map;function a(){this._array=[],this._set=o?new Map:Object.create(null)}a.fromArray=function(e,t){for(var r=new a,n=0,i=e.length;n<i;n++)r.add(e[n],t);return r},a.prototype.size=function(){return o?this._set.size:Object.getOwnPropertyNames(this._set).length},a.prototype.add=function(e,t){var r=o?e:n.toSetString(e),a=o?this.has(e):i.call(this._set,r),s=this._array.length;a&&!t||this._array.push(e),a||(o?this._set.set(e,s):this._set[r]=s)},a.prototype.has=function(e){if(o)return this._set.has(e);var t=n.toSetString(e);return i.call(this._set,t)},a.prototype.indexOf=function(e){if(o){var t=this._set.get(e);if(t>=0)return t}else{var r=n.toSetString(e);if(i.call(this._set,r))return this._set[r]}throw new Error('"'+e+'" is not in the set.')},a.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)},a.prototype.toArray=function(){return this._array.slice()},t.I=a},78006:(e,t,r)=>{var n=r(56130);t.encode=function(e){var t,r="",i=function(e){return e<0?1+(-e<<1):0+(e<<1)}(e);do{t=31&i,(i>>>=5)>0&&(t|=32),r+=n.encode(t)}while(i>0);return r},t.decode=function(e,t,r){var i,o,a,s,l=e.length,u=0,c=0;do{if(t>=l)throw new Error("Expected more digits in base 64 VLQ value.");if(-1===(o=n.decode(e.charCodeAt(t++))))throw new Error("Invalid base64 digit: "+e.charAt(t-1));i=!!(32&o),u+=(o&=31)<<c,c+=5}while(i);r.value=(s=(a=u)>>1,1==(1&a)?-s:s),r.rest=t}},56130:(e,t)=>{var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");t.encode=function(e){if(0<=e&&e<r.length)return r[e];throw new TypeError("Must be between 0 and 63: "+e)},t.decode=function(e){return 65<=e&&e<=90?e-65:97<=e&&e<=122?e-97+26:48<=e&&e<=57?e-48+52:43==e?62:47==e?63:-1}},91346:(e,t)=>{function r(e,n,i,o,a,s){var l=Math.floor((n-e)/2)+e,u=a(i,o[l],!0);return 0===u?l:u>0?n-l>1?r(l,n,i,o,a,s):s==t.LEAST_UPPER_BOUND?n<o.length?n:-1:l:l-e>1?r(e,l,i,o,a,s):s==t.LEAST_UPPER_BOUND?l:e<0?-1:e}t.GREATEST_LOWER_BOUND=1,t.LEAST_UPPER_BOUND=2,t.search=function(e,n,i,o){if(0===n.length)return-1;var a=r(-1,n.length,e,n,i,o||t.GREATEST_LOWER_BOUND);if(a<0)return-1;for(;a-1>=0&&0===i(n[a],n[a-1],!0);)--a;return a}},3196:(e,t,r)=>{var n=r(43626);function i(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}i.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)},i.prototype.add=function(e){var t,r,i,o,a,s;t=this._last,r=e,i=t.generatedLine,o=r.generatedLine,a=t.generatedColumn,s=r.generatedColumn,o>i||o==i&&s>=a||n.compareByGeneratedPositionsInflated(t,r)<=0?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))},i.prototype.toArray=function(){return this._sorted||(this._array.sort(n.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},t.H=i},85670:(e,t)=>{function r(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function n(e,t,i,o){if(i<o){var a=i-1;r(e,(c=i,p=o,Math.round(c+Math.random()*(p-c))),o);for(var s=e[o],l=i;l<o;l++)t(e[l],s)<=0&&r(e,a+=1,l);r(e,a+1,l);var u=a+1;n(e,t,i,u-1),n(e,t,u+1,o)}var c,p}t.U=function(e,t){n(e,t,0,e.length-1)}},49593:(e,t,r)=>{var n=r(43626),i=r(91346),o=r(67586).I,a=r(78006),s=r(85670).U;function l(e){var t=e;return"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,""))),null!=t.sections?new p(t):new u(t)}function u(e){var t=e;"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var r=n.getArg(t,"version"),i=n.getArg(t,"sources"),a=n.getArg(t,"names",[]),s=n.getArg(t,"sourceRoot",null),l=n.getArg(t,"sourcesContent",null),u=n.getArg(t,"mappings"),c=n.getArg(t,"file",null);if(r!=this._version)throw new Error("Unsupported version: "+r);i=i.map(String).map(n.normalize).map((function(e){return s&&n.isAbsolute(s)&&n.isAbsolute(e)?n.relative(s,e):e})),this._names=o.fromArray(a.map(String),!0),this._sources=o.fromArray(i,!0),this.sourceRoot=s,this.sourcesContent=l,this._mappings=u,this.file=c}function c(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}function p(e){var t=e;"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var r=n.getArg(t,"version"),i=n.getArg(t,"sections");if(r!=this._version)throw new Error("Unsupported version: "+r);this._sources=new o,this._names=new o;var a={line:-1,column:0};this._sections=i.map((function(e){if(e.url)throw new Error("Support for url field in sections not implemented.");var t=n.getArg(e,"offset"),r=n.getArg(t,"line"),i=n.getArg(t,"column");if(r<a.line||r===a.line&&i<a.column)throw new Error("Section offsets must be ordered and non-overlapping.");return a=t,{generatedOffset:{generatedLine:r+1,generatedColumn:i+1},consumer:new l(n.getArg(e,"map"))}}))}l.fromSourceMap=function(e){return u.fromSourceMap(e)},l.prototype._version=3,l.prototype.__generatedMappings=null,Object.defineProperty(l.prototype,"_generatedMappings",{get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),l.prototype.__originalMappings=null,Object.defineProperty(l.prototype,"_originalMappings",{get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),l.prototype._charIsMappingSeparator=function(e,t){var r=e.charAt(t);return";"===r||","===r},l.prototype._parseMappings=function(e,t){throw new Error("Subclasses must implement _parseMappings")},l.GENERATED_ORDER=1,l.ORIGINAL_ORDER=2,l.GREATEST_LOWER_BOUND=1,l.LEAST_UPPER_BOUND=2,l.prototype.eachMapping=function(e,t,r){var i,o=t||null;switch(r||l.GENERATED_ORDER){case l.GENERATED_ORDER:i=this._generatedMappings;break;case l.ORIGINAL_ORDER:i=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var a=this.sourceRoot;i.map((function(e){var t=null===e.source?null:this._sources.at(e.source);return null!=t&&null!=a&&(t=n.join(a,t)),{source:t,generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:null===e.name?null:this._names.at(e.name)}}),this).forEach(e,o)},l.prototype.allGeneratedPositionsFor=function(e){var t=n.getArg(e,"line"),r={source:n.getArg(e,"source"),originalLine:t,originalColumn:n.getArg(e,"column",0)};if(null!=this.sourceRoot&&(r.source=n.relative(this.sourceRoot,r.source)),!this._sources.has(r.source))return[];r.source=this._sources.indexOf(r.source);var o=[],a=this._findMapping(r,this._originalMappings,"originalLine","originalColumn",n.compareByOriginalPositions,i.LEAST_UPPER_BOUND);if(a>=0){var s=this._originalMappings[a];if(void 0===e.column)for(var l=s.originalLine;s&&s.originalLine===l;)o.push({line:n.getArg(s,"generatedLine",null),column:n.getArg(s,"generatedColumn",null),lastColumn:n.getArg(s,"lastGeneratedColumn",null)}),s=this._originalMappings[++a];else for(var u=s.originalColumn;s&&s.originalLine===t&&s.originalColumn==u;)o.push({line:n.getArg(s,"generatedLine",null),column:n.getArg(s,"generatedColumn",null),lastColumn:n.getArg(s,"lastGeneratedColumn",null)}),s=this._originalMappings[++a]}return o},t.SourceMapConsumer=l,u.prototype=Object.create(l.prototype),u.prototype.consumer=l,u.fromSourceMap=function(e){var t=Object.create(u.prototype),r=t._names=o.fromArray(e._names.toArray(),!0),i=t._sources=o.fromArray(e._sources.toArray(),!0);t.sourceRoot=e._sourceRoot,t.sourcesContent=e._generateSourcesContent(t._sources.toArray(),t.sourceRoot),t.file=e._file;for(var a=e._mappings.toArray().slice(),l=t.__generatedMappings=[],p=t.__originalMappings=[],f=0,d=a.length;f<d;f++){var h=a[f],m=new c;m.generatedLine=h.generatedLine,m.generatedColumn=h.generatedColumn,h.source&&(m.source=i.indexOf(h.source),m.originalLine=h.originalLine,m.originalColumn=h.originalColumn,h.name&&(m.name=r.indexOf(h.name)),p.push(m)),l.push(m)}return s(t.__originalMappings,n.compareByOriginalPositions),t},u.prototype._version=3,Object.defineProperty(u.prototype,"sources",{get:function(){return this._sources.toArray().map((function(e){return null!=this.sourceRoot?n.join(this.sourceRoot,e):e}),this)}}),u.prototype._parseMappings=function(e,t){for(var r,i,o,l,u,p=1,f=0,d=0,h=0,m=0,y=0,g=e.length,b=0,v={},E={},x=[],S=[];b<g;)if(";"===e.charAt(b))p++,b++,f=0;else if(","===e.charAt(b))b++;else{for((r=new c).generatedLine=p,l=b;l<g&&!this._charIsMappingSeparator(e,l);l++);if(o=v[i=e.slice(b,l)])b+=i.length;else{for(o=[];b<l;)a.decode(e,b,E),u=E.value,b=E.rest,o.push(u);if(2===o.length)throw new Error("Found a source, but no line and column");if(3===o.length)throw new Error("Found a source and line, but no column");v[i]=o}r.generatedColumn=f+o[0],f=r.generatedColumn,o.length>1&&(r.source=m+o[1],m+=o[1],r.originalLine=d+o[2],d=r.originalLine,r.originalLine+=1,r.originalColumn=h+o[3],h=r.originalColumn,o.length>4&&(r.name=y+o[4],y+=o[4])),S.push(r),"number"==typeof r.originalLine&&x.push(r)}s(S,n.compareByGeneratedPositionsDeflated),this.__generatedMappings=S,s(x,n.compareByOriginalPositions),this.__originalMappings=x},u.prototype._findMapping=function(e,t,r,n,o,a){if(e[r]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[r]);if(e[n]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[n]);return i.search(e,t,o,a)},u.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var t=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var r=this._generatedMappings[e+1];if(t.generatedLine===r.generatedLine){t.lastGeneratedColumn=r.generatedColumn-1;continue}}t.lastGeneratedColumn=1/0}},u.prototype.originalPositionFor=function(e){var t={generatedLine:n.getArg(e,"line"),generatedColumn:n.getArg(e,"column")},r=this._findMapping(t,this._generatedMappings,"generatedLine","generatedColumn",n.compareByGeneratedPositionsDeflated,n.getArg(e,"bias",l.GREATEST_LOWER_BOUND));if(r>=0){var i=this._generatedMappings[r];if(i.generatedLine===t.generatedLine){var o=n.getArg(i,"source",null);null!==o&&(o=this._sources.at(o),null!=this.sourceRoot&&(o=n.join(this.sourceRoot,o)));var a=n.getArg(i,"name",null);return null!==a&&(a=this._names.at(a)),{source:o,line:n.getArg(i,"originalLine",null),column:n.getArg(i,"originalColumn",null),name:a}}}return{source:null,line:null,column:null,name:null}},u.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&(this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some((function(e){return null==e})))},u.prototype.sourceContentFor=function(e,t){if(!this.sourcesContent)return null;if(null!=this.sourceRoot&&(e=n.relative(this.sourceRoot,e)),this._sources.has(e))return this.sourcesContent[this._sources.indexOf(e)];var r;if(null!=this.sourceRoot&&(r=n.urlParse(this.sourceRoot))){var i=e.replace(/^file:\/\//,"");if("file"==r.scheme&&this._sources.has(i))return this.sourcesContent[this._sources.indexOf(i)];if((!r.path||"/"==r.path)&&this._sources.has("/"+e))return this.sourcesContent[this._sources.indexOf("/"+e)]}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},u.prototype.generatedPositionFor=function(e){var t=n.getArg(e,"source");if(null!=this.sourceRoot&&(t=n.relative(this.sourceRoot,t)),!this._sources.has(t))return{line:null,column:null,lastColumn:null};var r={source:t=this._sources.indexOf(t),originalLine:n.getArg(e,"line"),originalColumn:n.getArg(e,"column")},i=this._findMapping(r,this._originalMappings,"originalLine","originalColumn",n.compareByOriginalPositions,n.getArg(e,"bias",l.GREATEST_LOWER_BOUND));if(i>=0){var o=this._originalMappings[i];if(o.source===r.source)return{line:n.getArg(o,"generatedLine",null),column:n.getArg(o,"generatedColumn",null),lastColumn:n.getArg(o,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},p.prototype=Object.create(l.prototype),p.prototype.constructor=l,p.prototype._version=3,Object.defineProperty(p.prototype,"sources",{get:function(){for(var e=[],t=0;t<this._sections.length;t++)for(var r=0;r<this._sections[t].consumer.sources.length;r++)e.push(this._sections[t].consumer.sources[r]);return e}}),p.prototype.originalPositionFor=function(e){var t={generatedLine:n.getArg(e,"line"),generatedColumn:n.getArg(e,"column")},r=i.search(t,this._sections,(function(e,t){var r=e.generatedLine-t.generatedOffset.generatedLine;return r||e.generatedColumn-t.generatedOffset.generatedColumn})),o=this._sections[r];return o?o.consumer.originalPositionFor({line:t.generatedLine-(o.generatedOffset.generatedLine-1),column:t.generatedColumn-(o.generatedOffset.generatedLine===t.generatedLine?o.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}},p.prototype.hasContentsOfAllSources=function(){return this._sections.every((function(e){return e.consumer.hasContentsOfAllSources()}))},p.prototype.sourceContentFor=function(e,t){for(var r=0;r<this._sections.length;r++){var n=this._sections[r].consumer.sourceContentFor(e,!0);if(n)return n}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},p.prototype.generatedPositionFor=function(e){for(var t=0;t<this._sections.length;t++){var r=this._sections[t];if(-1!==r.consumer.sources.indexOf(n.getArg(e,"source"))){var i=r.consumer.generatedPositionFor(e);if(i)return{line:i.line+(r.generatedOffset.generatedLine-1),column:i.column+(r.generatedOffset.generatedLine===i.line?r.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},p.prototype._parseMappings=function(e,t){this.__generatedMappings=[],this.__originalMappings=[];for(var r=0;r<this._sections.length;r++)for(var i=this._sections[r],o=i.consumer._generatedMappings,a=0;a<o.length;a++){var l=o[a],u=i.consumer._sources.at(l.source);null!==i.consumer.sourceRoot&&(u=n.join(i.consumer.sourceRoot,u)),this._sources.add(u),u=this._sources.indexOf(u);var c=i.consumer._names.at(l.name);this._names.add(c),c=this._names.indexOf(c);var p={source:u,generatedLine:l.generatedLine+(i.generatedOffset.generatedLine-1),generatedColumn:l.generatedColumn+(i.generatedOffset.generatedLine===l.generatedLine?i.generatedOffset.generatedColumn-1:0),originalLine:l.originalLine,originalColumn:l.originalColumn,name:c};this.__generatedMappings.push(p),"number"==typeof p.originalLine&&this.__originalMappings.push(p)}s(this.__generatedMappings,n.compareByGeneratedPositionsDeflated),s(this.__originalMappings,n.compareByOriginalPositions)}},96376:(e,t,r)=>{var n=r(78006),i=r(43626),o=r(67586).I,a=r(3196).H;function s(e){e||(e={}),this._file=i.getArg(e,"file",null),this._sourceRoot=i.getArg(e,"sourceRoot",null),this._skipValidation=i.getArg(e,"skipValidation",!1),this._sources=new o,this._names=new o,this._mappings=new a,this._sourcesContents=null}s.prototype._version=3,s.fromSourceMap=function(e){var t=e.sourceRoot,r=new s({file:e.file,sourceRoot:t});return e.eachMapping((function(e){var n={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(n.source=e.source,null!=t&&(n.source=i.relative(t,n.source)),n.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(n.name=e.name)),r.addMapping(n)})),e.sources.forEach((function(t){var n=e.sourceContentFor(t);null!=n&&r.setSourceContent(t,n)})),r},s.prototype.addMapping=function(e){var t=i.getArg(e,"generated"),r=i.getArg(e,"original",null),n=i.getArg(e,"source",null),o=i.getArg(e,"name",null);this._skipValidation||this._validateMapping(t,r,n,o),null!=n&&(n=String(n),this._sources.has(n)||this._sources.add(n)),null!=o&&(o=String(o),this._names.has(o)||this._names.add(o)),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=r&&r.line,originalColumn:null!=r&&r.column,source:n,name:o})},s.prototype.setSourceContent=function(e,t){var r=e;null!=this._sourceRoot&&(r=i.relative(this._sourceRoot,r)),null!=t?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[i.toSetString(r)]=t):this._sourcesContents&&(delete this._sourcesContents[i.toSetString(r)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},s.prototype.applySourceMap=function(e,t,r){var n=t;if(null==t){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');n=e.file}var a=this._sourceRoot;null!=a&&(n=i.relative(a,n));var s=new o,l=new o;this._mappings.unsortedForEach((function(t){if(t.source===n&&null!=t.originalLine){var o=e.originalPositionFor({line:t.originalLine,column:t.originalColumn});null!=o.source&&(t.source=o.source,null!=r&&(t.source=i.join(r,t.source)),null!=a&&(t.source=i.relative(a,t.source)),t.originalLine=o.line,t.originalColumn=o.column,null!=o.name&&(t.name=o.name))}var u=t.source;null==u||s.has(u)||s.add(u);var c=t.name;null==c||l.has(c)||l.add(c)}),this),this._sources=s,this._names=l,e.sources.forEach((function(t){var n=e.sourceContentFor(t);null!=n&&(null!=r&&(t=i.join(r,t)),null!=a&&(t=i.relative(a,t)),this.setSourceContent(t,n))}),this)},s.prototype._validateMapping=function(e,t,r,n){if(t&&"number"!=typeof t.line&&"number"!=typeof t.column)throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||t||r||n)&&!(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&r))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:r,original:t,name:n}))},s.prototype._serializeMappings=function(){for(var e,t,r,o,a=0,s=1,l=0,u=0,c=0,p=0,f="",d=this._mappings.toArray(),h=0,m=d.length;h<m;h++){if(e="",(t=d[h]).generatedLine!==s)for(a=0;t.generatedLine!==s;)e+=";",s++;else if(h>0){if(!i.compareByGeneratedPositionsInflated(t,d[h-1]))continue;e+=","}e+=n.encode(t.generatedColumn-a),a=t.generatedColumn,null!=t.source&&(o=this._sources.indexOf(t.source),e+=n.encode(o-p),p=o,e+=n.encode(t.originalLine-1-u),u=t.originalLine-1,e+=n.encode(t.originalColumn-l),l=t.originalColumn,null!=t.name&&(r=this._names.indexOf(t.name),e+=n.encode(r-c),c=r)),f+=e}return f},s.prototype._generateSourcesContent=function(e,t){return e.map((function(e){if(!this._sourcesContents)return null;null!=t&&(e=i.relative(t,e));var r=i.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,r)?this._sourcesContents[r]:null}),this)},s.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},s.prototype.toString=function(){return JSON.stringify(this.toJSON())},t.SourceMapGenerator=s},35557:(e,t,r)=>{var n=r(96376).SourceMapGenerator,i=r(43626),o=/(\r?\n)/,a="$$$isSourceNode$$$";function s(e,t,r,n,i){this.children=[],this.sourceContents={},this.line=null==e?null:e,this.column=null==t?null:t,this.source=null==r?null:r,this.name=null==i?null:i,this[a]=!0,null!=n&&this.add(n)}s.fromStringWithSourceMap=function(e,t,r){var n=new s,a=e.split(o),l=0,u=function(){return e()+(e()||"");function e(){return l<a.length?a[l++]:void 0}},c=1,p=0,f=null;return t.eachMapping((function(e){if(null!==f){if(!(c<e.generatedLine)){var t=(r=a[l]).substr(0,e.generatedColumn-p);return a[l]=r.substr(e.generatedColumn-p),p=e.generatedColumn,d(f,t),void(f=e)}d(f,u()),c++,p=0}for(;c<e.generatedLine;)n.add(u()),c++;if(p<e.generatedColumn){var r=a[l];n.add(r.substr(0,e.generatedColumn)),a[l]=r.substr(e.generatedColumn),p=e.generatedColumn}f=e}),this),l<a.length&&(f&&d(f,u()),n.add(a.splice(l).join(""))),t.sources.forEach((function(e){var o=t.sourceContentFor(e);null!=o&&(null!=r&&(e=i.join(r,e)),n.setSourceContent(e,o))})),n;function d(e,t){if(null===e||void 0===e.source)n.add(t);else{var o=r?i.join(r,e.source):e.source;n.add(new s(e.originalLine,e.originalColumn,o,t,e.name))}}},s.prototype.add=function(e){if(Array.isArray(e))e.forEach((function(e){this.add(e)}),this);else{if(!e[a]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);e&&this.children.push(e)}return this},s.prototype.prepend=function(e){if(Array.isArray(e))for(var t=e.length-1;t>=0;t--)this.prepend(e[t]);else{if(!e[a]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);this.children.unshift(e)}return this},s.prototype.walk=function(e){for(var t,r=0,n=this.children.length;r<n;r++)(t=this.children[r])[a]?t.walk(e):""!==t&&e(t,{source:this.source,line:this.line,column:this.column,name:this.name})},s.prototype.join=function(e){var t,r,n=this.children.length;if(n>0){for(t=[],r=0;r<n-1;r++)t.push(this.children[r]),t.push(e);t.push(this.children[r]),this.children=t}return this},s.prototype.replaceRight=function(e,t){var r=this.children[this.children.length-1];return r[a]?r.replaceRight(e,t):"string"==typeof r?this.children[this.children.length-1]=r.replace(e,t):this.children.push("".replace(e,t)),this},s.prototype.setSourceContent=function(e,t){this.sourceContents[i.toSetString(e)]=t},s.prototype.walkSourceContents=function(e){for(var t=0,r=this.children.length;t<r;t++)this.children[t][a]&&this.children[t].walkSourceContents(e);var n=Object.keys(this.sourceContents);for(t=0,r=n.length;t<r;t++)e(i.fromSetString(n[t]),this.sourceContents[n[t]])},s.prototype.toString=function(){var e="";return this.walk((function(t){e+=t})),e},s.prototype.toStringWithSourceMap=function(e){var t={code:"",line:1,column:0},r=new n(e),i=!1,o=null,a=null,s=null,l=null;return this.walk((function(e,n){t.code+=e,null!==n.source&&null!==n.line&&null!==n.column?(o===n.source&&a===n.line&&s===n.column&&l===n.name||r.addMapping({source:n.source,original:{line:n.line,column:n.column},generated:{line:t.line,column:t.column},name:n.name}),o=n.source,a=n.line,s=n.column,l=n.name,i=!0):i&&(r.addMapping({generated:{line:t.line,column:t.column}}),o=null,i=!1);for(var u=0,c=e.length;u<c;u++)10===e.charCodeAt(u)?(t.line++,t.column=0,u+1===c?(o=null,i=!1):i&&r.addMapping({source:n.source,original:{line:n.line,column:n.column},generated:{line:t.line,column:t.column},name:n.name})):t.column++})),this.walkSourceContents((function(e,t){r.setSourceContent(e,t)})),{code:t.code,map:r}},t.SourceNode=s},43626:(e,t)=>{t.getArg=function(e,t,r){if(t in e)return e[t];if(3===arguments.length)return r;throw new Error('"'+t+'" is a required argument.')};var r=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,n=/^data:.+\,.+$/;function i(e){var t=e.match(r);return t?{scheme:t[1],auth:t[2],host:t[3],port:t[4],path:t[5]}:null}function o(e){var t="";return e.scheme&&(t+=e.scheme+":"),t+="//",e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}function a(e){var r=e,n=i(e);if(n){if(!n.path)return e;r=n.path}for(var a,s=t.isAbsolute(r),l=r.split(/\/+/),u=0,c=l.length-1;c>=0;c--)"."===(a=l[c])?l.splice(c,1):".."===a?u++:u>0&&(""===a?(l.splice(c+1,u),u=0):(l.splice(c,2),u--));return""===(r=l.join("/"))&&(r=s?"/":"."),n?(n.path=r,o(n)):r}t.urlParse=i,t.urlGenerate=o,t.normalize=a,t.join=function(e,t){""===e&&(e="."),""===t&&(t=".");var r=i(t),s=i(e);if(s&&(e=s.path||"/"),r&&!r.scheme)return s&&(r.scheme=s.scheme),o(r);if(r||t.match(n))return t;if(s&&!s.host&&!s.path)return s.host=t,o(s);var l="/"===t.charAt(0)?t:a(e.replace(/\/+$/,"")+"/"+t);return s?(s.path=l,o(s)):l},t.isAbsolute=function(e){return"/"===e.charAt(0)||!!e.match(r)},t.relative=function(e,t){""===e&&(e="."),e=e.replace(/\/$/,"");for(var r=0;0!==t.indexOf(e+"/");){var n=e.lastIndexOf("/");if(n<0)return t;if((e=e.slice(0,n)).match(/^([^\/]+:\/)?\/*$/))return t;++r}return Array(r+1).join("../")+t.substr(e.length+1)};var s=!("__proto__"in Object.create(null));function l(e){return e}function u(e){if(!e)return!1;var t=e.length;if(t<9)return!1;if(95!==e.charCodeAt(t-1)||95!==e.charCodeAt(t-2)||111!==e.charCodeAt(t-3)||116!==e.charCodeAt(t-4)||111!==e.charCodeAt(t-5)||114!==e.charCodeAt(t-6)||112!==e.charCodeAt(t-7)||95!==e.charCodeAt(t-8)||95!==e.charCodeAt(t-9))return!1;for(var r=t-10;r>=0;r--)if(36!==e.charCodeAt(r))return!1;return!0}function c(e,t){return e===t?0:e>t?1:-1}t.toSetString=s?l:function(e){return u(e)?"$"+e:e},t.fromSetString=s?l:function(e){return u(e)?e.slice(1):e},t.compareByOriginalPositions=function(e,t,r){var n=e.source-t.source;return 0!==n||0!==(n=e.originalLine-t.originalLine)||0!==(n=e.originalColumn-t.originalColumn)||r||0!==(n=e.generatedColumn-t.generatedColumn)||0!==(n=e.generatedLine-t.generatedLine)?n:e.name-t.name},t.compareByGeneratedPositionsDeflated=function(e,t,r){var n=e.generatedLine-t.generatedLine;return 0!==n||0!==(n=e.generatedColumn-t.generatedColumn)||r||0!==(n=e.source-t.source)||0!==(n=e.originalLine-t.originalLine)||0!==(n=e.originalColumn-t.originalColumn)?n:e.name-t.name},t.compareByGeneratedPositionsInflated=function(e,t){var r=e.generatedLine-t.generatedLine;return 0!==r||0!==(r=e.generatedColumn-t.generatedColumn)||0!==(r=c(e.source,t.source))||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)?r:c(e.name,t.name)}},56466:(e,t,r)=>{t.SourceMapGenerator=r(96376).SourceMapGenerator,t.SourceMapConsumer=r(49593).SourceMapConsumer,t.SourceNode=r(35557).SourceNode},74483:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const r=/^[ \t]+$/;t.default=class{constructor(e){this._map=null,this._buf=[],this._last="",this._queue=[],this._position={line:1,column:0},this._sourcePosition={identifierName:null,line:null,column:null,filename:null},this._disallowedPop=null,this._map=e}get(){this._flush();const e=this._map,t={code:this._buf.join("").trimRight(),map:null,rawMappings:null==e?void 0:e.getRawMappings()};return e&&Object.defineProperty(t,"map",{configurable:!0,enumerable:!0,get(){return this.map=e.get()},set(e){Object.defineProperty(this,"map",{value:e,writable:!0})}}),t}append(e){this._flush();const{line:t,column:r,filename:n,identifierName:i,force:o}=this._sourcePosition;this._append(e,t,r,i,n,o)}queue(e){if("\n"===e)for(;this._queue.length>0&&r.test(this._queue[0][0]);)this._queue.shift();const{line:t,column:n,filename:i,identifierName:o,force:a}=this._sourcePosition;this._queue.unshift([e,t,n,o,i,a])}_flush(){let e;for(;e=this._queue.pop();)this._append(...e)}_append(e,t,r,n,i,o){this._buf.push(e),this._last=e[e.length-1];let a=e.indexOf("\n"),s=0;for(0!==a&&this._mark(t,r,n,i,o);-1!==a;)this._position.line++,this._position.column=0,s=a+1,s<e.length&&this._mark(++t,0,n,i,o),a=e.indexOf("\n",s);this._position.column+=e.length-s}_mark(e,t,r,n,i){var o;null==(o=this._map)||o.mark(this._position.line,this._position.column,e,t,r,n,i)}removeTrailingNewline(){this._queue.length>0&&"\n"===this._queue[0][0]&&this._queue.shift()}removeLastSemicolon(){this._queue.length>0&&";"===this._queue[0][0]&&this._queue.shift()}endsWith(e){if(1===e.length){let t;if(this._queue.length>0){const e=this._queue[0][0];t=e[e.length-1]}else t=this._last;return t===e}const t=this._last+this._queue.reduce(((e,t)=>t[0]+e),"");return e.length<=t.length&&t.slice(-e.length)===e}hasContent(){return this._queue.length>0||!!this._last}exactSource(e,t){this.source("start",e,!0),t(),this.source("end",e),this._disallowPop("start",e)}source(e,t,r){e&&!t||this._normalizePosition(e,t,this._sourcePosition,r)}withSource(e,t,r){if(!this._map)return r();const n=this._sourcePosition.line,i=this._sourcePosition.column,o=this._sourcePosition.filename,a=this._sourcePosition.identifierName;this.source(e,t),r(),this._sourcePosition.force&&this._sourcePosition.line===n&&this._sourcePosition.column===i&&this._sourcePosition.filename===o||this._disallowedPop&&this._disallowedPop.line===n&&this._disallowedPop.column===i&&this._disallowedPop.filename===o||(this._sourcePosition.line=n,this._sourcePosition.column=i,this._sourcePosition.filename=o,this._sourcePosition.identifierName=a,this._sourcePosition.force=!1,this._disallowedPop=null)}_disallowPop(e,t){e&&!t||(this._disallowedPop=this._normalizePosition(e,t))}_normalizePosition(e,t,r,n){const i=t?t[e]:null;void 0===r&&(r={identifierName:null,line:null,column:null,filename:null,force:!1});const o=r.line,a=r.column,s=r.filename;return r.identifierName="start"===e&&(null==t?void 0:t.identifierName)||null,r.line=null==i?void 0:i.line,r.column=null==i?void 0:i.column,r.filename=null==t?void 0:t.filename,(n||r.line!==o||r.column!==a||r.filename!==s)&&(r.force=n),r}getCurrentColumn(){const e=this._queue.reduce(((e,t)=>t[0]+e),""),t=e.lastIndexOf("\n");return-1===t?this._position.column+e.length:e.length-1-t}getCurrentLine(){const e=this._queue.reduce(((e,t)=>t[0]+e),"");let t=0;for(let r=0;r<e.length;r++)"\n"===e[r]&&t++;return this._position.line+t}}},64020:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.File=function(e){e.program&&this.print(e.program.interpreter,e);this.print(e.program,e)},t.Program=function(e){this.printInnerComments(e,!1),this.printSequence(e.directives,e),e.directives&&e.directives.length&&this.newline();this.printSequence(e.body,e)},t.BlockStatement=function(e){var t;this.token("{"),this.printInnerComments(e);const r=null==(t=e.directives)?void 0:t.length;e.body.length||r?(this.newline(),this.printSequence(e.directives,e,{indent:!0}),r&&this.newline(),this.printSequence(e.body,e,{indent:!0}),this.removeTrailingNewline(),this.source("end",e.loc),this.endsWith("\n")||this.newline(),this.rightBrace()):(this.source("end",e.loc),this.token("}"))},t.Directive=function(e){this.print(e.value,e),this.semicolon()},t.DirectiveLiteral=function(e){const t=this.getPossibleRaw(e);if(null!=t)return void this.token(t);const{value:r}=e;if(o.test(r)){if(i.test(r))throw new Error("Malformed AST: it is not possible to print a directive containing both unescaped single and double quotes.");this.token(`'${r}'`)}else this.token(`"${r}"`)},t.InterpreterDirective=function(e){this.token(`#!${e.value}\n`)},t.Placeholder=function(e){this.token("%%"),this.print(e.name),this.token("%%"),"Statement"===e.expectedNode&&this.semicolon()};!function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r)}(r(80666));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}const i=/(?:^|[^\\])(?:\\\\)*'/,o=/(?:^|[^\\])(?:\\\\)*"/},70053:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClassExpression=t.ClassDeclaration=function(e,t){this.format.decoratorsBeforeExport&&(n.isExportDefaultDeclaration(t)||n.isExportNamedDeclaration(t))||this.printJoin(e.decorators,e);e.declare&&(this.word("declare"),this.space());e.abstract&&(this.word("abstract"),this.space());this.word("class"),e.id&&(this.space(),this.print(e.id,e));this.print(e.typeParameters,e),e.superClass&&(this.space(),this.word("extends"),this.space(),this.print(e.superClass,e),this.print(e.superTypeParameters,e));e.implements&&(this.space(),this.word("implements"),this.space(),this.printList(e.implements,e));this.space(),this.print(e.body,e)},t.ClassBody=function(e){this.token("{"),this.printInnerComments(e),0===e.body.length?this.token("}"):(this.newline(),this.indent(),this.printSequence(e.body,e),this.dedent(),this.endsWith("\n")||this.newline(),this.rightBrace())},t.ClassProperty=function(e){this.printJoin(e.decorators,e),this.source("end",e.key.loc),this.tsPrintClassMemberModifiers(e,!0),e.computed?(this.token("["),this.print(e.key,e),this.token("]")):(this._variance(e),this.print(e.key,e));e.optional&&this.token("?");e.definite&&this.token("!");this.print(e.typeAnnotation,e),e.value&&(this.space(),this.token("="),this.space(),this.print(e.value,e));this.semicolon()},t.ClassPrivateProperty=function(e){this.printJoin(e.decorators,e),e.static&&(this.word("static"),this.space());this.print(e.key,e),this.print(e.typeAnnotation,e),e.value&&(this.space(),this.token("="),this.space(),this.print(e.value,e));this.semicolon()},t.ClassMethod=function(e){this._classMethodHead(e),this.space(),this.print(e.body,e)},t.ClassPrivateMethod=function(e){this._classMethodHead(e),this.space(),this.print(e.body,e)},t._classMethodHead=function(e){this.printJoin(e.decorators,e),this.source("end",e.key.loc),this.tsPrintClassMemberModifiers(e,!1),this._methodHead(e)},t.StaticBlock=function(e){this.word("static"),this.space(),this.token("{"),0===e.body.length?this.token("}"):(this.newline(),this.printSequence(e.body,e,{indent:!0}),this.rightBrace())};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(80666));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}},29533:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UnaryExpression=function(e){"void"===e.operator||"delete"===e.operator||"typeof"===e.operator||"throw"===e.operator?(this.word(e.operator),this.space()):this.token(e.operator);this.print(e.argument,e)},t.DoExpression=function(e){this.word("do"),this.space(),this.print(e.body,e)},t.ParenthesizedExpression=function(e){this.token("("),this.print(e.expression,e),this.token(")")},t.UpdateExpression=function(e){e.prefix?(this.token(e.operator),this.print(e.argument,e)):(this.startTerminatorless(!0),this.print(e.argument,e),this.endTerminatorless(),this.token(e.operator))},t.ConditionalExpression=function(e){this.print(e.test,e),this.space(),this.token("?"),this.space(),this.print(e.consequent,e),this.space(),this.token(":"),this.space(),this.print(e.alternate,e)},t.NewExpression=function(e,t){if(this.word("new"),this.space(),this.print(e.callee,e),this.format.minified&&0===e.arguments.length&&!e.optional&&!n.isCallExpression(t,{callee:e})&&!n.isMemberExpression(t)&&!n.isNewExpression(t))return;this.print(e.typeArguments,e),this.print(e.typeParameters,e),e.optional&&this.token("?.");this.token("("),this.printList(e.arguments,e),this.token(")")},t.SequenceExpression=function(e){this.printList(e.expressions,e)},t.ThisExpression=function(){this.word("this")},t.Super=function(){this.word("super")},t.Decorator=function(e){this.token("@"),this.print(e.expression,e),this.newline()},t.OptionalMemberExpression=function(e){if(this.print(e.object,e),!e.computed&&n.isMemberExpression(e.property))throw new TypeError("Got a MemberExpression for MemberExpression property");let t=e.computed;n.isLiteral(e.property)&&"number"==typeof e.property.value&&(t=!0);e.optional&&this.token("?.");t?(this.token("["),this.print(e.property,e),this.token("]")):(e.optional||this.token("."),this.print(e.property,e))},t.OptionalCallExpression=function(e){this.print(e.callee,e),this.print(e.typeArguments,e),this.print(e.typeParameters,e),e.optional&&this.token("?.");this.token("("),this.printList(e.arguments,e),this.token(")")},t.CallExpression=function(e){this.print(e.callee,e),this.print(e.typeArguments,e),this.print(e.typeParameters,e),this.token("("),this.printList(e.arguments,e),this.token(")")},t.Import=function(){this.word("import")},t.EmptyStatement=function(){this.semicolon(!0)},t.ExpressionStatement=function(e){this.print(e.expression,e),this.semicolon()},t.AssignmentPattern=function(e){this.print(e.left,e),e.left.optional&&this.token("?");this.print(e.left.typeAnnotation,e),this.space(),this.token("="),this.space(),this.print(e.right,e)},t.LogicalExpression=t.BinaryExpression=t.AssignmentExpression=function(e,t){const r=this.inForStatementInitCounter&&"in"===e.operator&&!i.needsParens(e,t);r&&this.token("(");this.print(e.left,e),this.space(),"in"===e.operator||"instanceof"===e.operator?this.word(e.operator):this.token(e.operator);this.space(),this.print(e.right,e),r&&this.token(")")},t.BindExpression=function(e){this.print(e.object,e),this.token("::"),this.print(e.callee,e)},t.MemberExpression=function(e){if(this.print(e.object,e),!e.computed&&n.isMemberExpression(e.property))throw new TypeError("Got a MemberExpression for MemberExpression property");let t=e.computed;n.isLiteral(e.property)&&"number"==typeof e.property.value&&(t=!0);t?(this.token("["),this.print(e.property,e),this.token("]")):(this.token("."),this.print(e.property,e))},t.MetaProperty=function(e){this.print(e.meta,e),this.token("."),this.print(e.property,e)},t.PrivateName=function(e){this.token("#"),this.print(e.id,e)},t.V8IntrinsicIdentifier=function(e){this.token("%"),this.word(e.name)},t.ModuleExpression=function(e){this.word("module"),this.space(),this.token("{"),0===e.body.body.length?this.token("}"):(this.newline(),this.printSequence(e.body.body,e,{indent:!0}),this.rightBrace())},t.AwaitExpression=t.YieldExpression=void 0;var n=a(r(80666)),i=a(r(12756));function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=n?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}function s(e){return function(t){if(this.word(e),t.delegate&&this.token("*"),t.argument){this.space();const e=this.startTerminatorless();this.print(t.argument,t),this.endTerminatorless(e)}}}const l=s("yield");t.YieldExpression=l;const u=s("await");t.AwaitExpression=u},63446:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnyTypeAnnotation=function(){this.word("any")},t.ArrayTypeAnnotation=function(e){this.print(e.elementType,e),this.token("["),this.token("]")},t.BooleanTypeAnnotation=function(){this.word("boolean")},t.BooleanLiteralTypeAnnotation=function(e){this.word(e.value?"true":"false")},t.NullLiteralTypeAnnotation=function(){this.word("null")},t.DeclareClass=function(e,t){n.isDeclareExportDeclaration(t)||(this.word("declare"),this.space());this.word("class"),this.space(),this._interfaceish(e)},t.DeclareFunction=function(e,t){n.isDeclareExportDeclaration(t)||(this.word("declare"),this.space());this.word("function"),this.space(),this.print(e.id,e),this.print(e.id.typeAnnotation.typeAnnotation,e),e.predicate&&(this.space(),this.print(e.predicate,e));this.semicolon()},t.InferredPredicate=function(){this.token("%"),this.word("checks")},t.DeclaredPredicate=function(e){this.token("%"),this.word("checks"),this.token("("),this.print(e.value,e),this.token(")")},t.DeclareInterface=function(e){this.word("declare"),this.space(),this.InterfaceDeclaration(e)},t.DeclareModule=function(e){this.word("declare"),this.space(),this.word("module"),this.space(),this.print(e.id,e),this.space(),this.print(e.body,e)},t.DeclareModuleExports=function(e){this.word("declare"),this.space(),this.word("module"),this.token("."),this.word("exports"),this.print(e.typeAnnotation,e)},t.DeclareTypeAlias=function(e){this.word("declare"),this.space(),this.TypeAlias(e)},t.DeclareOpaqueType=function(e,t){n.isDeclareExportDeclaration(t)||(this.word("declare"),this.space());this.OpaqueType(e)},t.DeclareVariable=function(e,t){n.isDeclareExportDeclaration(t)||(this.word("declare"),this.space());this.word("var"),this.space(),this.print(e.id,e),this.print(e.id.typeAnnotation,e),this.semicolon()},t.DeclareExportDeclaration=function(e){this.word("declare"),this.space(),this.word("export"),this.space(),e.default&&(this.word("default"),this.space());c.apply(this,arguments)},t.DeclareExportAllDeclaration=function(){this.word("declare"),this.space(),i.ExportAllDeclaration.apply(this,arguments)},t.EnumDeclaration=function(e){const{id:t,body:r}=e;this.word("enum"),this.space(),this.print(t,e),this.print(r,e)},t.EnumBooleanBody=function(e){const{explicitType:t}=e;s(this,"boolean",t),l(this,e)},t.EnumNumberBody=function(e){const{explicitType:t}=e;s(this,"number",t),l(this,e)},t.EnumStringBody=function(e){const{explicitType:t}=e;s(this,"string",t),l(this,e)},t.EnumSymbolBody=function(e){s(this,"symbol",!0),l(this,e)},t.EnumDefaultedMember=function(e){const{id:t}=e;this.print(t,e),this.token(",")},t.EnumBooleanMember=function(e){u(this,e)},t.EnumNumberMember=function(e){u(this,e)},t.EnumStringMember=function(e){u(this,e)},t.ExistsTypeAnnotation=function(){this.token("*")},t.FunctionTypeAnnotation=function(e,t){this.print(e.typeParameters,e),this.token("("),e.this&&(this.word("this"),this.token(":"),this.space(),this.print(e.this.typeAnnotation,e),(e.params.length||e.rest)&&(this.token(","),this.space()));this.printList(e.params,e),e.rest&&(e.params.length&&(this.token(","),this.space()),this.token("..."),this.print(e.rest,e));this.token(")"),"ObjectTypeCallProperty"===t.type||"DeclareFunction"===t.type||"ObjectTypeProperty"===t.type&&t.method?this.token(":"):(this.space(),this.token("=>"));this.space(),this.print(e.returnType,e)},t.FunctionTypeParam=function(e){this.print(e.name,e),e.optional&&this.token("?");e.name&&(this.token(":"),this.space());this.print(e.typeAnnotation,e)},t.GenericTypeAnnotation=t.ClassImplements=t.InterfaceExtends=function(e){this.print(e.id,e),this.print(e.typeParameters,e)},t._interfaceish=function(e){this.print(e.id,e),this.print(e.typeParameters,e),e.extends.length&&(this.space(),this.word("extends"),this.space(),this.printList(e.extends,e));e.mixins&&e.mixins.length&&(this.space(),this.word("mixins"),this.space(),this.printList(e.mixins,e));e.implements&&e.implements.length&&(this.space(),this.word("implements"),this.space(),this.printList(e.implements,e));this.space(),this.print(e.body,e)},t._variance=function(e){e.variance&&("plus"===e.variance.kind?this.token("+"):"minus"===e.variance.kind&&this.token("-"))},t.InterfaceDeclaration=function(e){this.word("interface"),this.space(),this._interfaceish(e)},t.InterfaceTypeAnnotation=function(e){this.word("interface"),e.extends&&e.extends.length&&(this.space(),this.word("extends"),this.space(),this.printList(e.extends,e));this.space(),this.print(e.body,e)},t.IntersectionTypeAnnotation=function(e){this.printJoin(e.types,e,{separator:p})},t.MixedTypeAnnotation=function(){this.word("mixed")},t.EmptyTypeAnnotation=function(){this.word("empty")},t.NullableTypeAnnotation=function(e){this.token("?"),this.print(e.typeAnnotation,e)},t.NumberTypeAnnotation=function(){this.word("number")},t.StringTypeAnnotation=function(){this.word("string")},t.ThisTypeAnnotation=function(){this.word("this")},t.TupleTypeAnnotation=function(e){this.token("["),this.printList(e.types,e),this.token("]")},t.TypeofTypeAnnotation=function(e){this.word("typeof"),this.space(),this.print(e.argument,e)},t.TypeAlias=function(e){this.word("type"),this.space(),this.print(e.id,e),this.print(e.typeParameters,e),this.space(),this.token("="),this.space(),this.print(e.right,e),this.semicolon()},t.TypeAnnotation=function(e){this.token(":"),this.space(),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},t.TypeParameterDeclaration=t.TypeParameterInstantiation=function(e){this.token("<"),this.printList(e.params,e,{}),this.token(">")},t.TypeParameter=function(e){this._variance(e),this.word(e.name),e.bound&&this.print(e.bound,e);e.default&&(this.space(),this.token("="),this.space(),this.print(e.default,e))},t.OpaqueType=function(e){this.word("opaque"),this.space(),this.word("type"),this.space(),this.print(e.id,e),this.print(e.typeParameters,e),e.supertype&&(this.token(":"),this.space(),this.print(e.supertype,e));e.impltype&&(this.space(),this.token("="),this.space(),this.print(e.impltype,e));this.semicolon()},t.ObjectTypeAnnotation=function(e){e.exact?this.token("{|"):this.token("{");const t=[...e.properties,...e.callProperties||[],...e.indexers||[],...e.internalSlots||[]];t.length&&(this.space(),this.printJoin(t,e,{addNewlines(e){if(e&&!t[0])return 1},indent:!0,statement:!0,iterator:()=>{(1!==t.length||e.inexact)&&(this.token(","),this.space())}}),this.space());e.inexact&&(this.indent(),this.token("..."),t.length&&this.newline(),this.dedent());e.exact?this.token("|}"):this.token("}")},t.ObjectTypeInternalSlot=function(e){e.static&&(this.word("static"),this.space());this.token("["),this.token("["),this.print(e.id,e),this.token("]"),this.token("]"),e.optional&&this.token("?");e.method||(this.token(":"),this.space());this.print(e.value,e)},t.ObjectTypeCallProperty=function(e){e.static&&(this.word("static"),this.space());this.print(e.value,e)},t.ObjectTypeIndexer=function(e){e.static&&(this.word("static"),this.space());this._variance(e),this.token("["),e.id&&(this.print(e.id,e),this.token(":"),this.space());this.print(e.key,e),this.token("]"),this.token(":"),this.space(),this.print(e.value,e)},t.ObjectTypeProperty=function(e){e.proto&&(this.word("proto"),this.space());e.static&&(this.word("static"),this.space());"get"!==e.kind&&"set"!==e.kind||(this.word(e.kind),this.space());this._variance(e),this.print(e.key,e),e.optional&&this.token("?");e.method||(this.token(":"),this.space());this.print(e.value,e)},t.ObjectTypeSpreadProperty=function(e){this.token("..."),this.print(e.argument,e)},t.QualifiedTypeIdentifier=function(e){this.print(e.qualification,e),this.token("."),this.print(e.id,e)},t.SymbolTypeAnnotation=function(){this.word("symbol")},t.UnionTypeAnnotation=function(e){this.printJoin(e.types,e,{separator:f})},t.TypeCastExpression=function(e){this.token("("),this.print(e.expression,e),this.print(e.typeAnnotation,e),this.token(")")},t.Variance=function(e){"plus"===e.kind?this.token("+"):this.token("-")},t.VoidTypeAnnotation=function(){this.word("void")},Object.defineProperty(t,"NumberLiteralTypeAnnotation",{enumerable:!0,get:function(){return o.NumericLiteral}}),Object.defineProperty(t,"StringLiteralTypeAnnotation",{enumerable:!0,get:function(){return o.StringLiteral}});var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(80666)),i=r(32014),o=r(31338);function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function s(e,t,r){r&&(e.space(),e.word("of"),e.space(),e.word(t)),e.space()}function l(e,t){const{members:r}=t;e.token("{"),e.indent(),e.newline();for(const n of r)e.print(n,t),e.newline();t.hasUnknownMembers&&(e.token("..."),e.newline()),e.dedent(),e.token("}")}function u(e,t){const{id:r,init:n}=t;e.print(r,t),e.space(),e.token("="),e.space(),e.print(n,t),e.token(",")}function c(e){if(e.declaration){const t=e.declaration;this.print(t,e),n.isStatement(t)||this.semicolon()}else this.token("{"),e.specifiers.length&&(this.space(),this.printList(e.specifiers,e),this.space()),this.token("}"),e.source&&(this.space(),this.word("from"),this.space(),this.print(e.source,e)),this.semicolon()}function p(){this.space(),this.token("&"),this.space()}function f(){this.space(),this.token("|"),this.space()}},19030:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(72394);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===n[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}}))}));var i=r(29533);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}}))}));var o=r(53259);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))}));var a=r(70053);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===a[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}}))}));var s=r(15295);Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===s[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}}))}));var l=r(32014);Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===l[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}}))}));var u=r(31338);Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===u[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}}))}));var c=r(63446);Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===c[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}}))}));var p=r(64020);Object.keys(p).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===p[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return p[e]}}))}));var f=r(95433);Object.keys(f).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===f[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return f[e]}}))}));var d=r(24124);Object.keys(d).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===d[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return d[e]}}))}))},95433:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.JSXAttribute=function(e){this.print(e.name,e),e.value&&(this.token("="),this.print(e.value,e))},t.JSXIdentifier=function(e){this.word(e.name)},t.JSXNamespacedName=function(e){this.print(e.namespace,e),this.token(":"),this.print(e.name,e)},t.JSXMemberExpression=function(e){this.print(e.object,e),this.token("."),this.print(e.property,e)},t.JSXSpreadAttribute=function(e){this.token("{"),this.token("..."),this.print(e.argument,e),this.token("}")},t.JSXExpressionContainer=function(e){this.token("{"),this.print(e.expression,e),this.token("}")},t.JSXSpreadChild=function(e){this.token("{"),this.token("..."),this.print(e.expression,e),this.token("}")},t.JSXText=function(e){const t=this.getPossibleRaw(e);null!=t?this.token(t):this.token(e.value)},t.JSXElement=function(e){const t=e.openingElement;if(this.print(t,e),t.selfClosing)return;this.indent();for(const t of e.children)this.print(t,e);this.dedent(),this.print(e.closingElement,e)},t.JSXOpeningElement=function(e){this.token("<"),this.print(e.name,e),this.print(e.typeParameters,e),e.attributes.length>0&&(this.space(),this.printJoin(e.attributes,e,{separator:i}));e.selfClosing?(this.space(),this.token("/>")):this.token(">")},t.JSXClosingElement=function(e){this.token("</"),this.print(e.name,e),this.token(">")},t.JSXEmptyExpression=function(e){this.printInnerComments(e)},t.JSXFragment=function(e){this.print(e.openingFragment,e),this.indent();for(const t of e.children)this.print(t,e);this.dedent(),this.print(e.closingFragment,e)},t.JSXOpeningFragment=function(){this.token("<"),this.token(">")},t.JSXClosingFragment=function(){this.token("</"),this.token(">")};!function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r)}(r(80666));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function i(){this.space()}},15295:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._params=function(e){this.print(e.typeParameters,e),this.token("("),this._parameters(e.params,e),this.token(")"),this.print(e.returnType,e)},t._parameters=function(e,t){for(let r=0;r<e.length;r++)this._param(e[r],t),r<e.length-1&&(this.token(","),this.space())},t._param=function(e,t){this.printJoin(e.decorators,e),this.print(e,t),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},t._methodHead=function(e){const t=e.kind,r=e.key;"get"!==t&&"set"!==t||(this.word(t),this.space());e.async&&(this._catchUp("start",r.loc),this.word("async"),this.space());"method"!==t&&"init"!==t||e.generator&&this.token("*");e.computed?(this.token("["),this.print(r,e),this.token("]")):this.print(r,e);e.optional&&this.token("?");this._params(e)},t._predicate=function(e){e.predicate&&(e.returnType||this.token(":"),this.space(),this.print(e.predicate,e))},t._functionHead=function(e){e.async&&(this.word("async"),this.space());this.word("function"),e.generator&&this.token("*");this.space(),e.id&&this.print(e.id,e);this._params(e),this._predicate(e)},t.FunctionDeclaration=t.FunctionExpression=function(e){this._functionHead(e),this.space(),this.print(e.body,e)},t.ArrowFunctionExpression=function(e){e.async&&(this.word("async"),this.space());const t=e.params[0];1===e.params.length&&n.isIdentifier(t)&&!function(e,t){return e.typeParameters||e.returnType||t.typeAnnotation||t.optional||t.trailingComments}(e,t)?(this.format.retainLines||e.async)&&e.loc&&e.body.loc&&e.loc.start.line<e.body.loc.start.line?(this.token("("),t.loc&&t.loc.start.line>e.loc.start.line?(this.indent(),this.print(t,e),this.dedent(),this._catchUp("start",e.body.loc)):this.print(t,e),this.token(")")):this.print(t,e):this._params(e);this._predicate(e),this.space(),this.token("=>"),this.space(),this.print(e.body,e)};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(80666));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}},32014:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ImportSpecifier=function(e){"type"!==e.importKind&&"typeof"!==e.importKind||(this.word(e.importKind),this.space());this.print(e.imported,e),e.local&&e.local.name!==e.imported.name&&(this.space(),this.word("as"),this.space(),this.print(e.local,e))},t.ImportDefaultSpecifier=function(e){this.print(e.local,e)},t.ExportDefaultSpecifier=function(e){this.print(e.exported,e)},t.ExportSpecifier=function(e){this.print(e.local,e),e.exported&&e.local.name!==e.exported.name&&(this.space(),this.word("as"),this.space(),this.print(e.exported,e))},t.ExportNamespaceSpecifier=function(e){this.token("*"),this.space(),this.word("as"),this.space(),this.print(e.exported,e)},t.ExportAllDeclaration=function(e){this.word("export"),this.space(),"type"===e.exportKind&&(this.word("type"),this.space());this.token("*"),this.space(),this.word("from"),this.space(),this.print(e.source,e),this.printAssertions(e),this.semicolon()},t.ExportNamedDeclaration=function(e){this.format.decoratorsBeforeExport&&n.isClassDeclaration(e.declaration)&&this.printJoin(e.declaration.decorators,e);this.word("export"),this.space(),o.apply(this,arguments)},t.ExportDefaultDeclaration=function(e){this.format.decoratorsBeforeExport&&n.isClassDeclaration(e.declaration)&&this.printJoin(e.declaration.decorators,e);this.word("export"),this.space(),this.word("default"),this.space(),o.apply(this,arguments)},t.ImportDeclaration=function(e){var t;this.word("import"),this.space(),("type"===e.importKind||"typeof"===e.importKind)&&(this.word(e.importKind),this.space());const r=e.specifiers.slice(0);if(null==r?void 0:r.length){for(;;){const t=r[0];if(!n.isImportDefaultSpecifier(t)&&!n.isImportNamespaceSpecifier(t))break;this.print(r.shift(),e),r.length&&(this.token(","),this.space())}r.length&&(this.token("{"),this.space(),this.printList(r,e),this.space(),this.token("}")),this.space(),this.word("from"),this.space()}this.print(e.source,e),this.printAssertions(e),(null==(t=e.attributes)?void 0:t.length)&&(this.space(),this.word("with"),this.space(),this.printList(e.attributes,e));this.semicolon()},t.ImportAttribute=function(e){this.print(e.key),this.token(":"),this.space(),this.print(e.value)},t.ImportNamespaceSpecifier=function(e){this.token("*"),this.space(),this.word("as"),this.space(),this.print(e.local,e)};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(80666));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function o(e){if(e.declaration){const t=e.declaration;this.print(t,e),n.isStatement(t)||this.semicolon()}else{"type"===e.exportKind&&(this.word("type"),this.space());const t=e.specifiers.slice(0);let r=!1;for(;;){const i=t[0];if(!n.isExportDefaultSpecifier(i)&&!n.isExportNamespaceSpecifier(i))break;r=!0,this.print(t.shift(),e),t.length&&(this.token(","),this.space())}(t.length||!t.length&&!r)&&(this.token("{"),t.length&&(this.space(),this.printList(t,e),this.space()),this.token("}")),e.source&&(this.space(),this.word("from"),this.space(),this.print(e.source,e),this.printAssertions(e)),this.semicolon()}}},53259:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WithStatement=function(e){this.word("with"),this.space(),this.token("("),this.print(e.object,e),this.token(")"),this.printBlock(e)},t.IfStatement=function(e){this.word("if"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.space();const t=e.alternate&&n.isIfStatement(o(e.consequent));t&&(this.token("{"),this.newline(),this.indent());this.printAndIndentOnComments(e.consequent,e),t&&(this.dedent(),this.newline(),this.token("}"));e.alternate&&(this.endsWith("}")&&this.space(),this.word("else"),this.space(),this.printAndIndentOnComments(e.alternate,e))},t.ForStatement=function(e){this.word("for"),this.space(),this.token("("),this.inForStatementInitCounter++,this.print(e.init,e),this.inForStatementInitCounter--,this.token(";"),e.test&&(this.space(),this.print(e.test,e));this.token(";"),e.update&&(this.space(),this.print(e.update,e));this.token(")"),this.printBlock(e)},t.WhileStatement=function(e){this.word("while"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.printBlock(e)},t.DoWhileStatement=function(e){this.word("do"),this.space(),this.print(e.body,e),this.space(),this.word("while"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.semicolon()},t.LabeledStatement=function(e){this.print(e.label,e),this.token(":"),this.space(),this.print(e.body,e)},t.TryStatement=function(e){this.word("try"),this.space(),this.print(e.block,e),this.space(),e.handlers?this.print(e.handlers[0],e):this.print(e.handler,e);e.finalizer&&(this.space(),this.word("finally"),this.space(),this.print(e.finalizer,e))},t.CatchClause=function(e){this.word("catch"),this.space(),e.param&&(this.token("("),this.print(e.param,e),this.print(e.param.typeAnnotation,e),this.token(")"),this.space());this.print(e.body,e)},t.SwitchStatement=function(e){this.word("switch"),this.space(),this.token("("),this.print(e.discriminant,e),this.token(")"),this.space(),this.token("{"),this.printSequence(e.cases,e,{indent:!0,addNewlines(t,r){if(!t&&e.cases[e.cases.length-1]===r)return-1}}),this.token("}")},t.SwitchCase=function(e){e.test?(this.word("case"),this.space(),this.print(e.test,e),this.token(":")):(this.word("default"),this.token(":"));e.consequent.length&&(this.newline(),this.printSequence(e.consequent,e,{indent:!0}))},t.DebuggerStatement=function(){this.word("debugger"),this.semicolon()},t.VariableDeclaration=function(e,t){e.declare&&(this.word("declare"),this.space());this.word(e.kind),this.space();let r,i=!1;if(!n.isFor(t))for(const t of e.declarations)t.init&&(i=!0);i&&(r="const"===e.kind?m:h);if(this.printList(e.declarations,e,{separator:r}),n.isFor(t))if(n.isForStatement(t)){if(t.init===e)return}else if(t.left===e)return;this.semicolon()},t.VariableDeclarator=function(e){this.print(e.id,e),e.definite&&this.token("!");this.print(e.id.typeAnnotation,e),e.init&&(this.space(),this.token("="),this.space(),this.print(e.init,e))},t.ThrowStatement=t.BreakStatement=t.ReturnStatement=t.ContinueStatement=t.ForOfStatement=t.ForInStatement=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(80666));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function o(e){return n.isStatement(e.body)?o(e.body):e}const a=function(e){return function(t){this.word("for"),this.space(),"of"===e&&t.await&&(this.word("await"),this.space()),this.token("("),this.print(t.left,t),this.space(),this.word(e),this.space(),this.print(t.right,t),this.token(")"),this.printBlock(t)}},s=a("in");t.ForInStatement=s;const l=a("of");function u(e,t="label"){return function(r){this.word(e);const n=r[t];if(n){this.space();const e="label"==t,i=this.startTerminatorless(e);this.print(n,r),this.endTerminatorless(i)}this.semicolon()}}t.ForOfStatement=l;const c=u("continue");t.ContinueStatement=c;const p=u("return","argument");t.ReturnStatement=p;const f=u("break");t.BreakStatement=f;const d=u("throw","argument");function h(){if(this.token(","),this.newline(),this.endsWith("\n"))for(let e=0;e<4;e++)this.space(!0)}function m(){if(this.token(","),this.newline(),this.endsWith("\n"))for(let e=0;e<6;e++)this.space(!0)}t.ThrowStatement=d},72394:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TaggedTemplateExpression=function(e){this.print(e.tag,e),this.print(e.typeParameters,e),this.print(e.quasi,e)},t.TemplateElement=function(e,t){const r=t.quasis[0]===e,n=t.quasis[t.quasis.length-1]===e,i=(r?"`":"}")+e.value.raw+(n?"`":"${");this.token(i)},t.TemplateLiteral=function(e){const t=e.quasis;for(let r=0;r<t.length;r++)this.print(t[r],e),r+1<t.length&&this.print(e.expressions[r],e)};!function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r)}(r(80666));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}},31338:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Identifier=function(e){this.exactSource(e.loc,(()=>{this.word(e.name)}))},t.ArgumentPlaceholder=function(){this.token("?")},t.SpreadElement=t.RestElement=function(e){this.token("..."),this.print(e.argument,e)},t.ObjectPattern=t.ObjectExpression=function(e){const t=e.properties;this.token("{"),this.printInnerComments(e),t.length&&(this.space(),this.printList(t,e,{indent:!0,statement:!0}),this.space());this.token("}")},t.ObjectMethod=function(e){this.printJoin(e.decorators,e),this._methodHead(e),this.space(),this.print(e.body,e)},t.ObjectProperty=function(e){if(this.printJoin(e.decorators,e),e.computed)this.token("["),this.print(e.key,e),this.token("]");else{if(i.isAssignmentPattern(e.value)&&i.isIdentifier(e.key)&&e.key.name===e.value.left.name)return void this.print(e.value,e);if(this.print(e.key,e),e.shorthand&&i.isIdentifier(e.key)&&i.isIdentifier(e.value)&&e.key.name===e.value.name)return}this.token(":"),this.space(),this.print(e.value,e)},t.ArrayPattern=t.ArrayExpression=function(e){const t=e.elements,r=t.length;this.token("["),this.printInnerComments(e);for(let n=0;n<t.length;n++){const i=t[n];i?(n>0&&this.space(),this.print(i,e),n<r-1&&this.token(",")):this.token(",")}this.token("]")},t.RecordExpression=function(e){const t=e.properties;let r,n;if("bar"===this.format.recordAndTupleSyntaxType)r="{|",n="|}";else{if("hash"!==this.format.recordAndTupleSyntaxType)throw new Error(`The "recordAndTupleSyntaxType" generator option must be "bar" or "hash" (${JSON.stringify(this.format.recordAndTupleSyntaxType)} received).`);r="#{",n="}"}this.token(r),this.printInnerComments(e),t.length&&(this.space(),this.printList(t,e,{indent:!0,statement:!0}),this.space());this.token(n)},t.TupleExpression=function(e){const t=e.elements,r=t.length;let n,i;if("bar"===this.format.recordAndTupleSyntaxType)n="[|",i="|]";else{if("hash"!==this.format.recordAndTupleSyntaxType)throw new Error(`${this.format.recordAndTupleSyntaxType} is not a valid recordAndTuple syntax type`);n="#[",i="]"}this.token(n),this.printInnerComments(e);for(let n=0;n<t.length;n++){const i=t[n];i&&(n>0&&this.space(),this.print(i,e),n<r-1&&this.token(","))}this.token(i)},t.RegExpLiteral=function(e){this.word(`/${e.pattern}/${e.flags}`)},t.BooleanLiteral=function(e){this.word(e.value?"true":"false")},t.NullLiteral=function(){this.word("null")},t.NumericLiteral=function(e){const t=this.getPossibleRaw(e),r=this.format.jsescOption,n=e.value+"";r.numbers?this.number((0,o.default)(e.value,r)):null==t?this.number(n):this.format.minified?this.number(t.length<n.length?t:n):this.number(t)},t.StringLiteral=function(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&null!=t)return void this.token(t);const r=(0,o.default)(e.value,Object.assign(this.format.jsescOption,this.format.jsonCompatibleStrings&&{json:!0}));return this.token(r)},t.BigIntLiteral=function(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&null!=t)return void this.word(t);this.word(e.value+"n")},t.DecimalLiteral=function(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&null!=t)return void this.word(t);this.word(e.value+"m")},t.PipelineTopicExpression=function(e){this.print(e.expression,e)},t.PipelineBareFunction=function(e){this.print(e.callee,e)},t.PipelinePrimaryTopicReference=function(){this.token("#")};var n,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(80666)),o=(n=r(94669))&&n.__esModule?n:{default:n};function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}},24124:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TSTypeAnnotation=function(e){this.token(":"),this.space(),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},t.TSTypeParameterDeclaration=t.TSTypeParameterInstantiation=function(e){this.token("<"),this.printList(e.params,e,{}),this.token(">")},t.TSTypeParameter=function(e){this.word(e.name),e.constraint&&(this.space(),this.word("extends"),this.space(),this.print(e.constraint,e));e.default&&(this.space(),this.token("="),this.space(),this.print(e.default,e))},t.TSParameterProperty=function(e){e.accessibility&&(this.word(e.accessibility),this.space());e.readonly&&(this.word("readonly"),this.space());this._param(e.parameter)},t.TSDeclareFunction=function(e){e.declare&&(this.word("declare"),this.space());this._functionHead(e),this.token(";")},t.TSDeclareMethod=function(e){this._classMethodHead(e),this.token(";")},t.TSQualifiedName=function(e){this.print(e.left,e),this.token("."),this.print(e.right,e)},t.TSCallSignatureDeclaration=function(e){this.tsPrintSignatureDeclarationBase(e),this.token(";")},t.TSConstructSignatureDeclaration=function(e){this.word("new"),this.space(),this.tsPrintSignatureDeclarationBase(e),this.token(";")},t.TSPropertySignature=function(e){const{readonly:t,initializer:r}=e;t&&(this.word("readonly"),this.space());this.tsPrintPropertyOrMethodName(e),this.print(e.typeAnnotation,e),r&&(this.space(),this.token("="),this.space(),this.print(r,e));this.token(";")},t.tsPrintPropertyOrMethodName=function(e){e.computed&&this.token("[");this.print(e.key,e),e.computed&&this.token("]");e.optional&&this.token("?")},t.TSMethodSignature=function(e){this.tsPrintPropertyOrMethodName(e),this.tsPrintSignatureDeclarationBase(e),this.token(";")},t.TSIndexSignature=function(e){const{readonly:t}=e;t&&(this.word("readonly"),this.space());this.token("["),this._parameters(e.parameters,e),this.token("]"),this.print(e.typeAnnotation,e),this.token(";")},t.TSAnyKeyword=function(){this.word("any")},t.TSBigIntKeyword=function(){this.word("bigint")},t.TSUnknownKeyword=function(){this.word("unknown")},t.TSNumberKeyword=function(){this.word("number")},t.TSObjectKeyword=function(){this.word("object")},t.TSBooleanKeyword=function(){this.word("boolean")},t.TSStringKeyword=function(){this.word("string")},t.TSSymbolKeyword=function(){this.word("symbol")},t.TSVoidKeyword=function(){this.word("void")},t.TSUndefinedKeyword=function(){this.word("undefined")},t.TSNullKeyword=function(){this.word("null")},t.TSNeverKeyword=function(){this.word("never")},t.TSIntrinsicKeyword=function(){this.word("intrinsic")},t.TSThisType=function(){this.word("this")},t.TSFunctionType=function(e){this.tsPrintFunctionOrConstructorType(e)},t.TSConstructorType=function(e){e.abstract&&(this.word("abstract"),this.space());this.word("new"),this.space(),this.tsPrintFunctionOrConstructorType(e)},t.tsPrintFunctionOrConstructorType=function(e){const{typeParameters:t,parameters:r}=e;this.print(t,e),this.token("("),this._parameters(r,e),this.token(")"),this.space(),this.token("=>"),this.space(),this.print(e.typeAnnotation.typeAnnotation,e)},t.TSTypeReference=function(e){this.print(e.typeName,e),this.print(e.typeParameters,e)},t.TSTypePredicate=function(e){e.asserts&&(this.word("asserts"),this.space());this.print(e.parameterName),e.typeAnnotation&&(this.space(),this.word("is"),this.space(),this.print(e.typeAnnotation.typeAnnotation))},t.TSTypeQuery=function(e){this.word("typeof"),this.space(),this.print(e.exprName)},t.TSTypeLiteral=function(e){this.tsPrintTypeLiteralOrInterfaceBody(e.members,e)},t.tsPrintTypeLiteralOrInterfaceBody=function(e,t){this.tsPrintBraced(e,t)},t.tsPrintBraced=function(e,t){if(this.token("{"),e.length){this.indent(),this.newline();for(const r of e)this.print(r,t),this.newline();this.dedent(),this.rightBrace()}else this.token("}")},t.TSArrayType=function(e){this.print(e.elementType,e),this.token("[]")},t.TSTupleType=function(e){this.token("["),this.printList(e.elementTypes,e),this.token("]")},t.TSOptionalType=function(e){this.print(e.typeAnnotation,e),this.token("?")},t.TSRestType=function(e){this.token("..."),this.print(e.typeAnnotation,e)},t.TSNamedTupleMember=function(e){this.print(e.label,e),e.optional&&this.token("?");this.token(":"),this.space(),this.print(e.elementType,e)},t.TSUnionType=function(e){this.tsPrintUnionOrIntersectionType(e,"|")},t.TSIntersectionType=function(e){this.tsPrintUnionOrIntersectionType(e,"&")},t.tsPrintUnionOrIntersectionType=function(e,t){this.printJoin(e.types,e,{separator(){this.space(),this.token(t),this.space()}})},t.TSConditionalType=function(e){this.print(e.checkType),this.space(),this.word("extends"),this.space(),this.print(e.extendsType),this.space(),this.token("?"),this.space(),this.print(e.trueType),this.space(),this.token(":"),this.space(),this.print(e.falseType)},t.TSInferType=function(e){this.token("infer"),this.space(),this.print(e.typeParameter)},t.TSParenthesizedType=function(e){this.token("("),this.print(e.typeAnnotation,e),this.token(")")},t.TSTypeOperator=function(e){this.word(e.operator),this.space(),this.print(e.typeAnnotation,e)},t.TSIndexedAccessType=function(e){this.print(e.objectType,e),this.token("["),this.print(e.indexType,e),this.token("]")},t.TSMappedType=function(e){const{nameType:t,optional:r,readonly:n,typeParameter:o}=e;this.token("{"),this.space(),n&&(i(this,n),this.word("readonly"),this.space());this.token("["),this.word(o.name),this.space(),this.word("in"),this.space(),this.print(o.constraint,o),t&&(this.space(),this.word("as"),this.space(),this.print(t,e));this.token("]"),r&&(i(this,r),this.token("?"));this.token(":"),this.space(),this.print(e.typeAnnotation,e),this.space(),this.token("}")},t.TSLiteralType=function(e){this.print(e.literal,e)},t.TSExpressionWithTypeArguments=function(e){this.print(e.expression,e),this.print(e.typeParameters,e)},t.TSInterfaceDeclaration=function(e){const{declare:t,id:r,typeParameters:n,extends:i,body:o}=e;t&&(this.word("declare"),this.space());this.word("interface"),this.space(),this.print(r,e),this.print(n,e),i&&(this.space(),this.word("extends"),this.space(),this.printList(i,e));this.space(),this.print(o,e)},t.TSInterfaceBody=function(e){this.tsPrintTypeLiteralOrInterfaceBody(e.body,e)},t.TSTypeAliasDeclaration=function(e){const{declare:t,id:r,typeParameters:n,typeAnnotation:i}=e;t&&(this.word("declare"),this.space());this.word("type"),this.space(),this.print(r,e),this.print(n,e),this.space(),this.token("="),this.space(),this.print(i,e),this.token(";")},t.TSAsExpression=function(e){const{expression:t,typeAnnotation:r}=e;this.print(t,e),this.space(),this.word("as"),this.space(),this.print(r,e)},t.TSTypeAssertion=function(e){const{typeAnnotation:t,expression:r}=e;this.token("<"),this.print(t,e),this.token(">"),this.space(),this.print(r,e)},t.TSEnumDeclaration=function(e){const{declare:t,const:r,id:n,members:i}=e;t&&(this.word("declare"),this.space());r&&(this.word("const"),this.space());this.word("enum"),this.space(),this.print(n,e),this.space(),this.tsPrintBraced(i,e)},t.TSEnumMember=function(e){const{id:t,initializer:r}=e;this.print(t,e),r&&(this.space(),this.token("="),this.space(),this.print(r,e));this.token(",")},t.TSModuleDeclaration=function(e){const{declare:t,id:r}=e;t&&(this.word("declare"),this.space());e.global||(this.word("Identifier"===r.type?"namespace":"module"),this.space());if(this.print(r,e),!e.body)return void this.token(";");let n=e.body;for(;"TSModuleDeclaration"===n.type;)this.token("."),this.print(n.id,n),n=n.body;this.space(),this.print(n,e)},t.TSModuleBlock=function(e){this.tsPrintBraced(e.body,e)},t.TSImportType=function(e){const{argument:t,qualifier:r,typeParameters:n}=e;this.word("import"),this.token("("),this.print(t,e),this.token(")"),r&&(this.token("."),this.print(r,e));n&&this.print(n,e)},t.TSImportEqualsDeclaration=function(e){const{isExport:t,id:r,moduleReference:n}=e;t&&(this.word("export"),this.space());this.word("import"),this.space(),this.print(r,e),this.space(),this.token("="),this.space(),this.print(n,e),this.token(";")},t.TSExternalModuleReference=function(e){this.token("require("),this.print(e.expression,e),this.token(")")},t.TSNonNullExpression=function(e){this.print(e.expression,e),this.token("!")},t.TSExportAssignment=function(e){this.word("export"),this.space(),this.token("="),this.space(),this.print(e.expression,e),this.token(";")},t.TSNamespaceExportDeclaration=function(e){this.word("export"),this.space(),this.word("as"),this.space(),this.word("namespace"),this.space(),this.print(e.id,e)},t.tsPrintSignatureDeclarationBase=function(e){const{typeParameters:t,parameters:r}=e;this.print(t,e),this.token("("),this._parameters(r,e),this.token(")"),this.print(e.typeAnnotation,e)},t.tsPrintClassMemberModifiers=function(e,t){t&&e.declare&&(this.word("declare"),this.space());e.accessibility&&(this.word(e.accessibility),this.space());e.static&&(this.word("static"),this.space());e.abstract&&(this.word("abstract"),this.space());t&&e.readonly&&(this.word("readonly"),this.space())};!function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r)}(r(80666));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function i(e,t){!0!==t&&e.token(t)}},7160:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){return new a(e,t,r).generate()},t.CodeGenerator=void 0;var n=o(r(25768)),i=o(r(17354));function o(e){return e&&e.__esModule?e:{default:e}}class a extends i.default{constructor(e,t={},r){super(function(e,t){const r={auxiliaryCommentBefore:t.auxiliaryCommentBefore,auxiliaryCommentAfter:t.auxiliaryCommentAfter,shouldPrintComment:t.shouldPrintComment,retainLines:t.retainLines,retainFunctionParens:t.retainFunctionParens,comments:null==t.comments||t.comments,compact:t.compact,minified:t.minified,concise:t.concise,indent:{adjustMultilineComment:!0,style:"  ",base:0},decoratorsBeforeExport:!!t.decoratorsBeforeExport,jsescOption:Object.assign({quotes:"double",wrap:!0,minimal:!1},t.jsescOption),recordAndTupleSyntaxType:t.recordAndTupleSyntaxType};r.jsonCompatibleStrings=t.jsonCompatibleStrings,r.minified?(r.compact=!0,r.shouldPrintComment=r.shouldPrintComment||(()=>r.comments)):r.shouldPrintComment=r.shouldPrintComment||(e=>r.comments||e.indexOf("@license")>=0||e.indexOf("@preserve")>=0);"auto"===r.compact&&(r.compact=e.length>5e5,r.compact&&console.error(`[BABEL] Note: The code generator has deoptimised the styling of ${t.filename} as it exceeds the max of 500KB.`));r.compact&&(r.indent.adjustMultilineComment=!1);return r}(r,t),t.sourceMaps?new n.default(t,r):null),this.ast=void 0,this.ast=e}generate(){return super.generate(this.ast)}}t.CodeGenerator=class{constructor(e,t,r){this._generator=void 0,this._generator=new a(e,t,r)}generate(){return this._generator.generate()}}},12756:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.needsWhitespace=h,t.needsWhitespaceBefore=function(e,t){return h(e,t,"before")},t.needsWhitespaceAfter=function(e,t){return h(e,t,"after")},t.needsParens=function(e,t,r){if(!t)return!1;if(o.isNewExpression(t)&&t.callee===e&&d(e))return!0;return f(u,e,t,r)};var n=s(r(68797)),i=s(r(71031)),o=s(r(80666));function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function s(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}function l(e){const t={};function r(e,r){const n=t[e];t[e]=n?function(e,t,i){const o=n(e,t,i);return null==o?r(e,t,i):o}:r}for(const t of Object.keys(e)){const n=o.FLIPPED_ALIAS_KEYS[t];if(n)for(const i of n)r(i,e[t]);else r(t,e[t])}return t}const u=l(i),c=l(n.nodes),p=l(n.list);function f(e,t,r,n){const i=e[t.type];return i?i(t,r,n):null}function d(e){return!!o.isCallExpression(e)||o.isMemberExpression(e)&&d(e.object)}function h(e,t,r){if(!e)return 0;o.isExpressionStatement(e)&&(e=e.expression);let n=f(c,e,t);if(!n){const i=f(p,e,t);if(i)for(let t=0;t<i.length&&(n=h(i[t],e,r),!n);t++);}return"object"==typeof n&&null!==n&&n[r]||0}},71031:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NullableTypeAnnotation=function(e,t){return n.isArrayTypeAnnotation(t)},t.FunctionTypeAnnotation=function(e,t,r){return n.isUnionTypeAnnotation(t)||n.isIntersectionTypeAnnotation(t)||n.isArrayTypeAnnotation(t)||n.isTypeAnnotation(t)&&n.isArrowFunctionExpression(r[r.length-3])},t.UpdateExpression=function(e,t){return s(e,t)||a(e,t)},t.ObjectExpression=function(e,t,r){return c(r,{considerArrow:!0})},t.DoExpression=function(e,t,r){return c(r)},t.Binary=function(e,t){if("**"===e.operator&&n.isBinaryExpression(t,{operator:"**"}))return t.left===e;if(a(e,t))return!0;if(s(e,t)||n.isUnaryLike(t)||n.isAwaitExpression(t))return!0;if(n.isBinary(t)){const r=t.operator,i=o[r],a=e.operator,s=o[a];if(i===s&&t.right===e&&!n.isLogicalExpression(t)||i>s)return!0}},t.IntersectionTypeAnnotation=t.UnionTypeAnnotation=function(e,t){return n.isArrayTypeAnnotation(t)||n.isNullableTypeAnnotation(t)||n.isIntersectionTypeAnnotation(t)||n.isUnionTypeAnnotation(t)},t.TSAsExpression=function(){return!0},t.TSTypeAssertion=function(){return!0},t.TSIntersectionType=t.TSUnionType=function(e,t){return n.isTSArrayType(t)||n.isTSOptionalType(t)||n.isTSIntersectionType(t)||n.isTSUnionType(t)||n.isTSRestType(t)},t.TSInferType=function(e,t){return n.isTSArrayType(t)||n.isTSOptionalType(t)},t.BinaryExpression=function(e,t){return"in"===e.operator&&(n.isVariableDeclarator(t)||n.isFor(t))},t.SequenceExpression=function(e,t){if(n.isForStatement(t)||n.isThrowStatement(t)||n.isReturnStatement(t)||n.isIfStatement(t)&&t.test===e||n.isWhileStatement(t)&&t.test===e||n.isForInStatement(t)&&t.right===e||n.isSwitchStatement(t)&&t.discriminant===e||n.isExpressionStatement(t)&&t.expression===e)return!1;return!0},t.AwaitExpression=t.YieldExpression=function(e,t){return n.isBinary(t)||n.isUnaryLike(t)||s(e,t)||n.isAwaitExpression(t)&&n.isYieldExpression(e)||n.isConditionalExpression(t)&&e===t.test||a(e,t)},t.ClassExpression=function(e,t,r){return c(r,{considerDefaultExports:!0})},t.UnaryLike=l,t.FunctionExpression=function(e,t,r){return c(r,{considerDefaultExports:!0})},t.ArrowFunctionExpression=function(e,t){return n.isExportDeclaration(t)||u(e,t)},t.ConditionalExpression=u,t.OptionalCallExpression=t.OptionalMemberExpression=function(e,t){return n.isCallExpression(t,{callee:e})||n.isMemberExpression(t,{object:e})},t.AssignmentExpression=function(e,t){return!!n.isObjectPattern(e.left)||u(e,t)},t.LogicalExpression=function(e,t){switch(e.operator){case"||":return!!n.isLogicalExpression(t)&&("??"===t.operator||"&&"===t.operator);case"&&":return n.isLogicalExpression(t,{operator:"??"});case"??":return n.isLogicalExpression(t)&&"??"!==t.operator}};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(80666));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}const o={"||":0,"??":0,"&&":1,"|":2,"^":3,"&":4,"==":5,"===":5,"!=":5,"!==":5,"<":6,">":6,"<=":6,">=":6,in:6,instanceof:6,">>":7,"<<":7,">>>":7,"+":8,"-":8,"*":9,"/":9,"%":9,"**":10},a=(e,t)=>(n.isClassDeclaration(t)||n.isClassExpression(t))&&t.superClass===e,s=(e,t)=>(n.isMemberExpression(t)||n.isOptionalMemberExpression(t))&&t.object===e||(n.isCallExpression(t)||n.isOptionalCallExpression(t)||n.isNewExpression(t))&&t.callee===e||n.isTaggedTemplateExpression(t)&&t.tag===e||n.isTSNonNullExpression(t);function l(e,t){return s(e,t)||n.isBinaryExpression(t,{operator:"**",left:e})||a(e,t)}function u(e,t){return!!(n.isUnaryLike(t)||n.isBinary(t)||n.isConditionalExpression(t,{test:e})||n.isAwaitExpression(t)||n.isTSTypeAssertion(t)||n.isTSAsExpression(t))||l(e,t)}function c(e,{considerArrow:t=!1,considerDefaultExports:r=!1}={}){let i=e.length-1,o=e[i];i--;let a=e[i];for(;i>=0;){if(n.isExpressionStatement(a,{expression:o})||r&&n.isExportDefaultDeclaration(a,{declaration:o})||t&&n.isArrowFunctionExpression(a,{body:o}))return!0;if(!(s(o,a)&&!n.isNewExpression(a)||n.isSequenceExpression(a)&&a.expressions[0]===o||n.isConditional(a,{test:o})||n.isBinary(a,{left:o})||n.isAssignmentExpression(a,{left:o})))return!1;o=a,i--,a=e[i]}return!1}},68797:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.list=t.nodes=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(80666));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function o(e,t={}){return n.isMemberExpression(e)||n.isOptionalMemberExpression(e)?(o(e.object,t),e.computed&&o(e.property,t)):n.isBinary(e)||n.isAssignmentExpression(e)?(o(e.left,t),o(e.right,t)):n.isCallExpression(e)||n.isOptionalCallExpression(e)?(t.hasCall=!0,o(e.callee,t)):n.isFunction(e)?t.hasFunction=!0:n.isIdentifier(e)&&(t.hasHelper=t.hasHelper||a(e.callee)),t}function a(e){return n.isMemberExpression(e)?a(e.object)||a(e.property):n.isIdentifier(e)?"require"===e.name||"_"===e.name[0]:n.isCallExpression(e)?a(e.callee):!(!n.isBinary(e)&&!n.isAssignmentExpression(e))&&(n.isIdentifier(e.left)&&a(e.left)||a(e.right))}function s(e){return n.isLiteral(e)||n.isObjectExpression(e)||n.isArrayExpression(e)||n.isIdentifier(e)||n.isMemberExpression(e)}const l={AssignmentExpression(e){const t=o(e.right);if(t.hasCall&&t.hasHelper||t.hasFunction)return{before:t.hasFunction,after:!0}},SwitchCase:(e,t)=>({before:!!e.consequent.length||t.cases[0]===e,after:!e.consequent.length&&t.cases[t.cases.length-1]===e}),LogicalExpression(e){if(n.isFunction(e.left)||n.isFunction(e.right))return{after:!0}},Literal(e){if(n.isStringLiteral(e)&&"use strict"===e.value)return{after:!0}},CallExpression(e){if(n.isFunction(e.callee)||a(e))return{before:!0,after:!0}},OptionalCallExpression(e){if(n.isFunction(e.callee))return{before:!0,after:!0}},VariableDeclaration(e){for(let t=0;t<e.declarations.length;t++){const r=e.declarations[t];let n=a(r.id)&&!s(r.init);if(!n){const e=o(r.init);n=a(r.init)&&e.hasCall||e.hasFunction}if(n)return{before:!0,after:!0}}},IfStatement(e){if(n.isBlockStatement(e.consequent))return{before:!0,after:!0}}};t.nodes=l,l.ObjectProperty=l.ObjectTypeProperty=l.ObjectMethod=function(e,t){if(t.properties[0]===e)return{before:!0}},l.ObjectTypeCallProperty=function(e,t){var r;if(t.callProperties[0]===e&&!(null==(r=t.properties)?void 0:r.length))return{before:!0}},l.ObjectTypeIndexer=function(e,t){var r,n;if(t.indexers[0]===e&&!(null==(r=t.properties)?void 0:r.length)&&!(null==(n=t.callProperties)?void 0:n.length))return{before:!0}},l.ObjectTypeInternalSlot=function(e,t){var r,n,i;if(t.internalSlots[0]===e&&!(null==(r=t.properties)?void 0:r.length)&&!(null==(n=t.callProperties)?void 0:n.length)&&!(null==(i=t.indexers)?void 0:i.length))return{before:!0}};const u={VariableDeclaration:e=>e.declarations.map((e=>e.init)),ArrayExpression:e=>e.elements,ObjectExpression:e=>e.properties};t.list=u,[["Function",!0],["Class",!0],["Loop",!0],["LabeledStatement",!0],["SwitchStatement",!0],["TryStatement",!0]].forEach((function([e,t]){"boolean"==typeof t&&(t={after:t,before:t}),[e].concat(n.FLIPPED_ALIAS_KEYS[e]||[]).forEach((function(e){l[e]=function(){return t}}))}))},17354:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=(n=r(74483))&&n.__esModule?n:{default:n},o=u(r(12756)),a=u(r(80666)),s=u(r(19030));function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}const c=/e/i,p=/\.0+$/,f=/^0[box]/,d=/^\s*[@#]__PURE__\s*$/;class h{constructor(e,t){this.inForStatementInitCounter=0,this._printStack=[],this._indent=0,this._insideAux=!1,this._printedCommentStarts={},this._parenPushNewlineState=null,this._noLineTerminator=!1,this._printAuxAfterOnNextUserNode=!1,this._printedComments=new WeakSet,this._endsWithInteger=!1,this._endsWithWord=!1,this.format=e,this._buf=new i.default(t)}generate(e){return this.print(e),this._maybeAddAuxComment(),this._buf.get()}indent(){this.format.compact||this.format.concise||this._indent++}dedent(){this.format.compact||this.format.concise||this._indent--}semicolon(e=!1){this._maybeAddAuxComment(),this._append(";",!e)}rightBrace(){this.format.minified&&this._buf.removeLastSemicolon(),this.token("}")}space(e=!1){this.format.compact||(this._buf.hasContent()&&!this.endsWith(" ")&&!this.endsWith("\n")||e)&&this._space()}word(e){(this._endsWithWord||this.endsWith("/")&&0===e.indexOf("/"))&&this._space(),this._maybeAddAuxComment(),this._append(e),this._endsWithWord=!0}number(e){this.word(e),this._endsWithInteger=Number.isInteger(+e)&&!f.test(e)&&!c.test(e)&&!p.test(e)&&"."!==e[e.length-1]}token(e){("--"===e&&this.endsWith("!")||"+"===e[0]&&this.endsWith("+")||"-"===e[0]&&this.endsWith("-")||"."===e[0]&&this._endsWithInteger)&&this._space(),this._maybeAddAuxComment(),this._append(e)}newline(e){if(!this.format.retainLines&&!this.format.compact)if(this.format.concise)this.space();else if(!(this.endsWith("\n\n")||("number"!=typeof e&&(e=1),e=Math.min(2,e),(this.endsWith("{\n")||this.endsWith(":\n"))&&e--,e<=0)))for(let t=0;t<e;t++)this._newline()}endsWith(e){return this._buf.endsWith(e)}removeTrailingNewline(){this._buf.removeTrailingNewline()}exactSource(e,t){this._catchUp("start",e),this._buf.exactSource(e,t)}source(e,t){this._catchUp(e,t),this._buf.source(e,t)}withSource(e,t,r){this._catchUp(e,t),this._buf.withSource(e,t,r)}_space(){this._append(" ",!0)}_newline(){this._append("\n",!0)}_append(e,t=!1){this._maybeAddParen(e),this._maybeIndent(e),t?this._buf.queue(e):this._buf.append(e),this._endsWithWord=!1,this._endsWithInteger=!1}_maybeIndent(e){this._indent&&this.endsWith("\n")&&"\n"!==e[0]&&this._buf.queue(this._getIndent())}_maybeAddParen(e){const t=this._parenPushNewlineState;if(!t)return;let r;for(r=0;r<e.length&&" "===e[r];r++)continue;if(r===e.length)return;const n=e[r];if("\n"!==n){if("/"!==n||r+1===e.length)return void(this._parenPushNewlineState=null);const t=e[r+1];if("*"===t){if(d.test(e.slice(r+2,e.length-2)))return}else if("/"!==t)return void(this._parenPushNewlineState=null)}this.token("("),this.indent(),t.printed=!0}_catchUp(e,t){if(!this.format.retainLines)return;const r=t?t[e]:null;if(null!=(null==r?void 0:r.line)){const e=r.line-this._buf.getCurrentLine();for(let t=0;t<e;t++)this._newline()}}_getIndent(){return this.format.indent.style.repeat(this._indent)}startTerminatorless(e=!1){return e?(this._noLineTerminator=!0,null):this._parenPushNewlineState={printed:!1}}endTerminatorless(e){this._noLineTerminator=!1,(null==e?void 0:e.printed)&&(this.dedent(),this.newline(),this.token(")"))}print(e,t){if(!e)return;const r=this.format.concise;e._compact&&(this.format.concise=!0);const n=this[e.type];if(!n)throw new ReferenceError(`unknown node of type ${JSON.stringify(e.type)} with constructor ${JSON.stringify(null==e?void 0:e.constructor.name)}`);this._printStack.push(e);const i=this._insideAux;this._insideAux=!e.loc,this._maybeAddAuxComment(this._insideAux&&!i);let s=o.needsParens(e,t,this._printStack);this.format.retainFunctionParens&&"FunctionExpression"===e.type&&e.extra&&e.extra.parenthesized&&(s=!0),s&&this.token("("),this._printLeadingComments(e);const l=a.isProgram(e)||a.isFile(e)?null:e.loc;this.withSource("start",l,(()=>{n.call(this,e,t)})),this._printTrailingComments(e),s&&this.token(")"),this._printStack.pop(),this.format.concise=r,this._insideAux=i}_maybeAddAuxComment(e){e&&this._printAuxBeforeComment(),this._insideAux||this._printAuxAfterComment()}_printAuxBeforeComment(){if(this._printAuxAfterOnNextUserNode)return;this._printAuxAfterOnNextUserNode=!0;const e=this.format.auxiliaryCommentBefore;e&&this._printComment({type:"CommentBlock",value:e})}_printAuxAfterComment(){if(!this._printAuxAfterOnNextUserNode)return;this._printAuxAfterOnNextUserNode=!1;const e=this.format.auxiliaryCommentAfter;e&&this._printComment({type:"CommentBlock",value:e})}getPossibleRaw(e){const t=e.extra;if(t&&null!=t.raw&&null!=t.rawValue&&e.value===t.rawValue)return t.raw}printJoin(e,t,r={}){if(!(null==e?void 0:e.length))return;r.indent&&this.indent();const n={addNewlines:r.addNewlines};for(let i=0;i<e.length;i++){const o=e[i];o&&(r.statement&&this._printNewline(!0,o,t,n),this.print(o,t),r.iterator&&r.iterator(o,i),r.separator&&i<e.length-1&&r.separator.call(this),r.statement&&this._printNewline(!1,o,t,n))}r.indent&&this.dedent()}printAndIndentOnComments(e,t){const r=e.leadingComments&&e.leadingComments.length>0;r&&this.indent(),this.print(e,t),r&&this.dedent()}printBlock(e){const t=e.body;a.isEmptyStatement(t)||this.space(),this.print(t,e)}_printTrailingComments(e){this._printComments(this._getComments(!1,e))}_printLeadingComments(e){this._printComments(this._getComments(!0,e),!0)}printInnerComments(e,t=!0){var r;(null==(r=e.innerComments)?void 0:r.length)&&(t&&this.indent(),this._printComments(e.innerComments),t&&this.dedent())}printSequence(e,t,r={}){return r.statement=!0,this.printJoin(e,t,r)}printList(e,t,r={}){return null==r.separator&&(r.separator=y),this.printJoin(e,t,r)}_printNewline(e,t,r,n){if(this.format.retainLines||this.format.compact)return;if(this.format.concise)return void this.space();let i=0;if(this._buf.hasContent()){e||i++,n.addNewlines&&(i+=n.addNewlines(e,t)||0);(e?o.needsWhitespaceBefore:o.needsWhitespaceAfter)(t,r)&&i++}this.newline(i)}_getComments(e,t){return t&&(e?t.leadingComments:t.trailingComments)||[]}_printComment(e,t){if(!this.format.shouldPrintComment(e.value))return;if(e.ignore)return;if(this._printedComments.has(e))return;if(this._printedComments.add(e),null!=e.start){if(this._printedCommentStarts[e.start])return;this._printedCommentStarts[e.start]=!0}const r="CommentBlock"===e.type,n=r&&!t&&!this._noLineTerminator;n&&this._buf.hasContent()&&this.newline(1),this.endsWith("[")||this.endsWith("{")||this.space();let i=r||this._noLineTerminator?`/*${e.value}*/`:`//${e.value}\n`;if(r&&this.format.indent.adjustMultilineComment){var o;const t=null==(o=e.loc)?void 0:o.start.column;if(t){const e=new RegExp("\\n\\s{1,"+t+"}","g");i=i.replace(e,"\n")}const r=Math.max(this._getIndent().length,this.format.retainLines?0:this._buf.getCurrentColumn());i=i.replace(/\n(?!$)/g,`\n${" ".repeat(r)}`)}this.endsWith("/")&&this._space(),this.withSource("start",e.loc,(()=>{this._append(i)})),n&&this.newline(1)}_printComments(e,t){if(null==e?void 0:e.length)if(t&&1===e.length&&d.test(e[0].value))this._printComment(e[0],this._buf.hasContent()&&!this.endsWith("\n"));else for(const t of e)this._printComment(t)}printAssertions(e){var t;(null==(t=e.assertions)?void 0:t.length)&&(this.space(),this.word("assert"),this.space(),this.token("{"),this.space(),this.printList(e.assertions,e),this.space(),this.token("}"))}}Object.assign(h.prototype,s),h.prototype.Noop=function(){};var m=h;function y(){this.token(","),this.space()}t.default=m},25768:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=(n=r(34982))&&n.__esModule?n:{default:n};t.default=class{constructor(e,t){this._cachedMap=void 0,this._code=void 0,this._opts=void 0,this._rawMappings=void 0,this._lastGenLine=void 0,this._lastSourceLine=void 0,this._lastSourceColumn=void 0,this._cachedMap=null,this._code=t,this._opts=e,this._rawMappings=[]}get(){if(!this._cachedMap){const e=this._cachedMap=new i.default.SourceMapGenerator({sourceRoot:this._opts.sourceRoot}),t=this._code;"string"==typeof t?e.setSourceContent(this._opts.sourceFileName.replace(/\\/g,"/"),t):"object"==typeof t&&Object.keys(t).forEach((r=>{e.setSourceContent(r.replace(/\\/g,"/"),t[r])})),this._rawMappings.forEach((t=>e.addMapping(t)),e)}return this._cachedMap.toJSON()}getRawMappings(){return this._rawMappings.slice()}mark(e,t,r,n,i,o,a){this._lastGenLine!==e&&null===r||(a||this._lastGenLine!==e||this._lastSourceLine!==r||this._lastSourceColumn!==n)&&(this._cachedMap=null,this._lastGenLine=e,this._lastSourceLine=r,this._lastSourceColumn=n,this._rawMappings.push({name:i||void 0,generated:{line:e,column:t},source:null==r?void 0:(o||this._opts.sourceFileName).replace(/\\/g,"/"),original:null==r?void 0:{line:r,column:n}}))}}},54249:(e,t,r)=>{var n=r(81559),i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Map;function a(){this._array=[],this._set=o?new Map:Object.create(null)}a.fromArray=function(e,t){for(var r=new a,n=0,i=e.length;n<i;n++)r.add(e[n],t);return r},a.prototype.size=function(){return o?this._set.size:Object.getOwnPropertyNames(this._set).length},a.prototype.add=function(e,t){var r=o?e:n.toSetString(e),a=o?this.has(e):i.call(this._set,r),s=this._array.length;a&&!t||this._array.push(e),a||(o?this._set.set(e,s):this._set[r]=s)},a.prototype.has=function(e){if(o)return this._set.has(e);var t=n.toSetString(e);return i.call(this._set,t)},a.prototype.indexOf=function(e){if(o){var t=this._set.get(e);if(t>=0)return t}else{var r=n.toSetString(e);if(i.call(this._set,r))return this._set[r]}throw new Error('"'+e+'" is not in the set.')},a.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)},a.prototype.toArray=function(){return this._array.slice()},t.I=a},60975:(e,t,r)=>{var n=r(5676);t.encode=function(e){var t,r="",i=function(e){return e<0?1+(-e<<1):0+(e<<1)}(e);do{t=31&i,(i>>>=5)>0&&(t|=32),r+=n.encode(t)}while(i>0);return r},t.decode=function(e,t,r){var i,o,a,s,l=e.length,u=0,c=0;do{if(t>=l)throw new Error("Expected more digits in base 64 VLQ value.");if(-1===(o=n.decode(e.charCodeAt(t++))))throw new Error("Invalid base64 digit: "+e.charAt(t-1));i=!!(32&o),u+=(o&=31)<<c,c+=5}while(i);r.value=(s=(a=u)>>1,1==(1&a)?-s:s),r.rest=t}},5676:(e,t)=>{var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");t.encode=function(e){if(0<=e&&e<r.length)return r[e];throw new TypeError("Must be between 0 and 63: "+e)},t.decode=function(e){return 65<=e&&e<=90?e-65:97<=e&&e<=122?e-97+26:48<=e&&e<=57?e-48+52:43==e?62:47==e?63:-1}},4694:(e,t)=>{function r(e,n,i,o,a,s){var l=Math.floor((n-e)/2)+e,u=a(i,o[l],!0);return 0===u?l:u>0?n-l>1?r(l,n,i,o,a,s):s==t.LEAST_UPPER_BOUND?n<o.length?n:-1:l:l-e>1?r(e,l,i,o,a,s):s==t.LEAST_UPPER_BOUND?l:e<0?-1:e}t.GREATEST_LOWER_BOUND=1,t.LEAST_UPPER_BOUND=2,t.search=function(e,n,i,o){if(0===n.length)return-1;var a=r(-1,n.length,e,n,i,o||t.GREATEST_LOWER_BOUND);if(a<0)return-1;for(;a-1>=0&&0===i(n[a],n[a-1],!0);)--a;return a}},28247:(e,t,r)=>{var n=r(81559);function i(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}i.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)},i.prototype.add=function(e){var t,r,i,o,a,s;t=this._last,r=e,i=t.generatedLine,o=r.generatedLine,a=t.generatedColumn,s=r.generatedColumn,o>i||o==i&&s>=a||n.compareByGeneratedPositionsInflated(t,r)<=0?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))},i.prototype.toArray=function(){return this._sorted||(this._array.sort(n.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},t.H=i},88012:(e,t)=>{function r(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function n(e,t,i,o){if(i<o){var a=i-1;r(e,(c=i,p=o,Math.round(c+Math.random()*(p-c))),o);for(var s=e[o],l=i;l<o;l++)t(e[l],s)<=0&&r(e,a+=1,l);r(e,a+1,l);var u=a+1;n(e,t,i,u-1),n(e,t,u+1,o)}var c,p}t.U=function(e,t){n(e,t,0,e.length-1)}},11077:(e,t,r)=>{var n=r(81559),i=r(4694),o=r(54249).I,a=r(60975),s=r(88012).U;function l(e){var t=e;return"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,""))),null!=t.sections?new p(t):new u(t)}function u(e){var t=e;"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var r=n.getArg(t,"version"),i=n.getArg(t,"sources"),a=n.getArg(t,"names",[]),s=n.getArg(t,"sourceRoot",null),l=n.getArg(t,"sourcesContent",null),u=n.getArg(t,"mappings"),c=n.getArg(t,"file",null);if(r!=this._version)throw new Error("Unsupported version: "+r);i=i.map(String).map(n.normalize).map((function(e){return s&&n.isAbsolute(s)&&n.isAbsolute(e)?n.relative(s,e):e})),this._names=o.fromArray(a.map(String),!0),this._sources=o.fromArray(i,!0),this.sourceRoot=s,this.sourcesContent=l,this._mappings=u,this.file=c}function c(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}function p(e){var t=e;"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var r=n.getArg(t,"version"),i=n.getArg(t,"sections");if(r!=this._version)throw new Error("Unsupported version: "+r);this._sources=new o,this._names=new o;var a={line:-1,column:0};this._sections=i.map((function(e){if(e.url)throw new Error("Support for url field in sections not implemented.");var t=n.getArg(e,"offset"),r=n.getArg(t,"line"),i=n.getArg(t,"column");if(r<a.line||r===a.line&&i<a.column)throw new Error("Section offsets must be ordered and non-overlapping.");return a=t,{generatedOffset:{generatedLine:r+1,generatedColumn:i+1},consumer:new l(n.getArg(e,"map"))}}))}l.fromSourceMap=function(e){return u.fromSourceMap(e)},l.prototype._version=3,l.prototype.__generatedMappings=null,Object.defineProperty(l.prototype,"_generatedMappings",{get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),l.prototype.__originalMappings=null,Object.defineProperty(l.prototype,"_originalMappings",{get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),l.prototype._charIsMappingSeparator=function(e,t){var r=e.charAt(t);return";"===r||","===r},l.prototype._parseMappings=function(e,t){throw new Error("Subclasses must implement _parseMappings")},l.GENERATED_ORDER=1,l.ORIGINAL_ORDER=2,l.GREATEST_LOWER_BOUND=1,l.LEAST_UPPER_BOUND=2,l.prototype.eachMapping=function(e,t,r){var i,o=t||null;switch(r||l.GENERATED_ORDER){case l.GENERATED_ORDER:i=this._generatedMappings;break;case l.ORIGINAL_ORDER:i=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var a=this.sourceRoot;i.map((function(e){var t=null===e.source?null:this._sources.at(e.source);return null!=t&&null!=a&&(t=n.join(a,t)),{source:t,generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:null===e.name?null:this._names.at(e.name)}}),this).forEach(e,o)},l.prototype.allGeneratedPositionsFor=function(e){var t=n.getArg(e,"line"),r={source:n.getArg(e,"source"),originalLine:t,originalColumn:n.getArg(e,"column",0)};if(null!=this.sourceRoot&&(r.source=n.relative(this.sourceRoot,r.source)),!this._sources.has(r.source))return[];r.source=this._sources.indexOf(r.source);var o=[],a=this._findMapping(r,this._originalMappings,"originalLine","originalColumn",n.compareByOriginalPositions,i.LEAST_UPPER_BOUND);if(a>=0){var s=this._originalMappings[a];if(void 0===e.column)for(var l=s.originalLine;s&&s.originalLine===l;)o.push({line:n.getArg(s,"generatedLine",null),column:n.getArg(s,"generatedColumn",null),lastColumn:n.getArg(s,"lastGeneratedColumn",null)}),s=this._originalMappings[++a];else for(var u=s.originalColumn;s&&s.originalLine===t&&s.originalColumn==u;)o.push({line:n.getArg(s,"generatedLine",null),column:n.getArg(s,"generatedColumn",null),lastColumn:n.getArg(s,"lastGeneratedColumn",null)}),s=this._originalMappings[++a]}return o},t.SourceMapConsumer=l,u.prototype=Object.create(l.prototype),u.prototype.consumer=l,u.fromSourceMap=function(e){var t=Object.create(u.prototype),r=t._names=o.fromArray(e._names.toArray(),!0),i=t._sources=o.fromArray(e._sources.toArray(),!0);t.sourceRoot=e._sourceRoot,t.sourcesContent=e._generateSourcesContent(t._sources.toArray(),t.sourceRoot),t.file=e._file;for(var a=e._mappings.toArray().slice(),l=t.__generatedMappings=[],p=t.__originalMappings=[],f=0,d=a.length;f<d;f++){var h=a[f],m=new c;m.generatedLine=h.generatedLine,m.generatedColumn=h.generatedColumn,h.source&&(m.source=i.indexOf(h.source),m.originalLine=h.originalLine,m.originalColumn=h.originalColumn,h.name&&(m.name=r.indexOf(h.name)),p.push(m)),l.push(m)}return s(t.__originalMappings,n.compareByOriginalPositions),t},u.prototype._version=3,Object.defineProperty(u.prototype,"sources",{get:function(){return this._sources.toArray().map((function(e){return null!=this.sourceRoot?n.join(this.sourceRoot,e):e}),this)}}),u.prototype._parseMappings=function(e,t){for(var r,i,o,l,u,p=1,f=0,d=0,h=0,m=0,y=0,g=e.length,b=0,v={},E={},x=[],S=[];b<g;)if(";"===e.charAt(b))p++,b++,f=0;else if(","===e.charAt(b))b++;else{for((r=new c).generatedLine=p,l=b;l<g&&!this._charIsMappingSeparator(e,l);l++);if(o=v[i=e.slice(b,l)])b+=i.length;else{for(o=[];b<l;)a.decode(e,b,E),u=E.value,b=E.rest,o.push(u);if(2===o.length)throw new Error("Found a source, but no line and column");if(3===o.length)throw new Error("Found a source and line, but no column");v[i]=o}r.generatedColumn=f+o[0],f=r.generatedColumn,o.length>1&&(r.source=m+o[1],m+=o[1],r.originalLine=d+o[2],d=r.originalLine,r.originalLine+=1,r.originalColumn=h+o[3],h=r.originalColumn,o.length>4&&(r.name=y+o[4],y+=o[4])),S.push(r),"number"==typeof r.originalLine&&x.push(r)}s(S,n.compareByGeneratedPositionsDeflated),this.__generatedMappings=S,s(x,n.compareByOriginalPositions),this.__originalMappings=x},u.prototype._findMapping=function(e,t,r,n,o,a){if(e[r]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[r]);if(e[n]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[n]);return i.search(e,t,o,a)},u.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var t=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var r=this._generatedMappings[e+1];if(t.generatedLine===r.generatedLine){t.lastGeneratedColumn=r.generatedColumn-1;continue}}t.lastGeneratedColumn=1/0}},u.prototype.originalPositionFor=function(e){var t={generatedLine:n.getArg(e,"line"),generatedColumn:n.getArg(e,"column")},r=this._findMapping(t,this._generatedMappings,"generatedLine","generatedColumn",n.compareByGeneratedPositionsDeflated,n.getArg(e,"bias",l.GREATEST_LOWER_BOUND));if(r>=0){var i=this._generatedMappings[r];if(i.generatedLine===t.generatedLine){var o=n.getArg(i,"source",null);null!==o&&(o=this._sources.at(o),null!=this.sourceRoot&&(o=n.join(this.sourceRoot,o)));var a=n.getArg(i,"name",null);return null!==a&&(a=this._names.at(a)),{source:o,line:n.getArg(i,"originalLine",null),column:n.getArg(i,"originalColumn",null),name:a}}}return{source:null,line:null,column:null,name:null}},u.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&(this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some((function(e){return null==e})))},u.prototype.sourceContentFor=function(e,t){if(!this.sourcesContent)return null;if(null!=this.sourceRoot&&(e=n.relative(this.sourceRoot,e)),this._sources.has(e))return this.sourcesContent[this._sources.indexOf(e)];var r;if(null!=this.sourceRoot&&(r=n.urlParse(this.sourceRoot))){var i=e.replace(/^file:\/\//,"");if("file"==r.scheme&&this._sources.has(i))return this.sourcesContent[this._sources.indexOf(i)];if((!r.path||"/"==r.path)&&this._sources.has("/"+e))return this.sourcesContent[this._sources.indexOf("/"+e)]}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},u.prototype.generatedPositionFor=function(e){var t=n.getArg(e,"source");if(null!=this.sourceRoot&&(t=n.relative(this.sourceRoot,t)),!this._sources.has(t))return{line:null,column:null,lastColumn:null};var r={source:t=this._sources.indexOf(t),originalLine:n.getArg(e,"line"),originalColumn:n.getArg(e,"column")},i=this._findMapping(r,this._originalMappings,"originalLine","originalColumn",n.compareByOriginalPositions,n.getArg(e,"bias",l.GREATEST_LOWER_BOUND));if(i>=0){var o=this._originalMappings[i];if(o.source===r.source)return{line:n.getArg(o,"generatedLine",null),column:n.getArg(o,"generatedColumn",null),lastColumn:n.getArg(o,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},p.prototype=Object.create(l.prototype),p.prototype.constructor=l,p.prototype._version=3,Object.defineProperty(p.prototype,"sources",{get:function(){for(var e=[],t=0;t<this._sections.length;t++)for(var r=0;r<this._sections[t].consumer.sources.length;r++)e.push(this._sections[t].consumer.sources[r]);return e}}),p.prototype.originalPositionFor=function(e){var t={generatedLine:n.getArg(e,"line"),generatedColumn:n.getArg(e,"column")},r=i.search(t,this._sections,(function(e,t){var r=e.generatedLine-t.generatedOffset.generatedLine;return r||e.generatedColumn-t.generatedOffset.generatedColumn})),o=this._sections[r];return o?o.consumer.originalPositionFor({line:t.generatedLine-(o.generatedOffset.generatedLine-1),column:t.generatedColumn-(o.generatedOffset.generatedLine===t.generatedLine?o.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}},p.prototype.hasContentsOfAllSources=function(){return this._sections.every((function(e){return e.consumer.hasContentsOfAllSources()}))},p.prototype.sourceContentFor=function(e,t){for(var r=0;r<this._sections.length;r++){var n=this._sections[r].consumer.sourceContentFor(e,!0);if(n)return n}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},p.prototype.generatedPositionFor=function(e){for(var t=0;t<this._sections.length;t++){var r=this._sections[t];if(-1!==r.consumer.sources.indexOf(n.getArg(e,"source"))){var i=r.consumer.generatedPositionFor(e);if(i)return{line:i.line+(r.generatedOffset.generatedLine-1),column:i.column+(r.generatedOffset.generatedLine===i.line?r.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},p.prototype._parseMappings=function(e,t){this.__generatedMappings=[],this.__originalMappings=[];for(var r=0;r<this._sections.length;r++)for(var i=this._sections[r],o=i.consumer._generatedMappings,a=0;a<o.length;a++){var l=o[a],u=i.consumer._sources.at(l.source);null!==i.consumer.sourceRoot&&(u=n.join(i.consumer.sourceRoot,u)),this._sources.add(u),u=this._sources.indexOf(u);var c=i.consumer._names.at(l.name);this._names.add(c),c=this._names.indexOf(c);var p={source:u,generatedLine:l.generatedLine+(i.generatedOffset.generatedLine-1),generatedColumn:l.generatedColumn+(i.generatedOffset.generatedLine===l.generatedLine?i.generatedOffset.generatedColumn-1:0),originalLine:l.originalLine,originalColumn:l.originalColumn,name:c};this.__generatedMappings.push(p),"number"==typeof p.originalLine&&this.__originalMappings.push(p)}s(this.__generatedMappings,n.compareByGeneratedPositionsDeflated),s(this.__originalMappings,n.compareByOriginalPositions)}},78456:(e,t,r)=>{var n=r(60975),i=r(81559),o=r(54249).I,a=r(28247).H;function s(e){e||(e={}),this._file=i.getArg(e,"file",null),this._sourceRoot=i.getArg(e,"sourceRoot",null),this._skipValidation=i.getArg(e,"skipValidation",!1),this._sources=new o,this._names=new o,this._mappings=new a,this._sourcesContents=null}s.prototype._version=3,s.fromSourceMap=function(e){var t=e.sourceRoot,r=new s({file:e.file,sourceRoot:t});return e.eachMapping((function(e){var n={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(n.source=e.source,null!=t&&(n.source=i.relative(t,n.source)),n.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(n.name=e.name)),r.addMapping(n)})),e.sources.forEach((function(t){var n=e.sourceContentFor(t);null!=n&&r.setSourceContent(t,n)})),r},s.prototype.addMapping=function(e){var t=i.getArg(e,"generated"),r=i.getArg(e,"original",null),n=i.getArg(e,"source",null),o=i.getArg(e,"name",null);this._skipValidation||this._validateMapping(t,r,n,o),null!=n&&(n=String(n),this._sources.has(n)||this._sources.add(n)),null!=o&&(o=String(o),this._names.has(o)||this._names.add(o)),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=r&&r.line,originalColumn:null!=r&&r.column,source:n,name:o})},s.prototype.setSourceContent=function(e,t){var r=e;null!=this._sourceRoot&&(r=i.relative(this._sourceRoot,r)),null!=t?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[i.toSetString(r)]=t):this._sourcesContents&&(delete this._sourcesContents[i.toSetString(r)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},s.prototype.applySourceMap=function(e,t,r){var n=t;if(null==t){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');n=e.file}var a=this._sourceRoot;null!=a&&(n=i.relative(a,n));var s=new o,l=new o;this._mappings.unsortedForEach((function(t){if(t.source===n&&null!=t.originalLine){var o=e.originalPositionFor({line:t.originalLine,column:t.originalColumn});null!=o.source&&(t.source=o.source,null!=r&&(t.source=i.join(r,t.source)),null!=a&&(t.source=i.relative(a,t.source)),t.originalLine=o.line,t.originalColumn=o.column,null!=o.name&&(t.name=o.name))}var u=t.source;null==u||s.has(u)||s.add(u);var c=t.name;null==c||l.has(c)||l.add(c)}),this),this._sources=s,this._names=l,e.sources.forEach((function(t){var n=e.sourceContentFor(t);null!=n&&(null!=r&&(t=i.join(r,t)),null!=a&&(t=i.relative(a,t)),this.setSourceContent(t,n))}),this)},s.prototype._validateMapping=function(e,t,r,n){if(t&&"number"!=typeof t.line&&"number"!=typeof t.column)throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||t||r||n)&&!(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&r))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:r,original:t,name:n}))},s.prototype._serializeMappings=function(){for(var e,t,r,o,a=0,s=1,l=0,u=0,c=0,p=0,f="",d=this._mappings.toArray(),h=0,m=d.length;h<m;h++){if(e="",(t=d[h]).generatedLine!==s)for(a=0;t.generatedLine!==s;)e+=";",s++;else if(h>0){if(!i.compareByGeneratedPositionsInflated(t,d[h-1]))continue;e+=","}e+=n.encode(t.generatedColumn-a),a=t.generatedColumn,null!=t.source&&(o=this._sources.indexOf(t.source),e+=n.encode(o-p),p=o,e+=n.encode(t.originalLine-1-u),u=t.originalLine-1,e+=n.encode(t.originalColumn-l),l=t.originalColumn,null!=t.name&&(r=this._names.indexOf(t.name),e+=n.encode(r-c),c=r)),f+=e}return f},s.prototype._generateSourcesContent=function(e,t){return e.map((function(e){if(!this._sourcesContents)return null;null!=t&&(e=i.relative(t,e));var r=i.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,r)?this._sourcesContents[r]:null}),this)},s.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},s.prototype.toString=function(){return JSON.stringify(this.toJSON())},t.SourceMapGenerator=s},21871:(e,t,r)=>{var n=r(78456).SourceMapGenerator,i=r(81559),o=/(\r?\n)/,a="$$$isSourceNode$$$";function s(e,t,r,n,i){this.children=[],this.sourceContents={},this.line=null==e?null:e,this.column=null==t?null:t,this.source=null==r?null:r,this.name=null==i?null:i,this[a]=!0,null!=n&&this.add(n)}s.fromStringWithSourceMap=function(e,t,r){var n=new s,a=e.split(o),l=0,u=function(){return e()+(e()||"");function e(){return l<a.length?a[l++]:void 0}},c=1,p=0,f=null;return t.eachMapping((function(e){if(null!==f){if(!(c<e.generatedLine)){var t=(r=a[l]).substr(0,e.generatedColumn-p);return a[l]=r.substr(e.generatedColumn-p),p=e.generatedColumn,d(f,t),void(f=e)}d(f,u()),c++,p=0}for(;c<e.generatedLine;)n.add(u()),c++;if(p<e.generatedColumn){var r=a[l];n.add(r.substr(0,e.generatedColumn)),a[l]=r.substr(e.generatedColumn),p=e.generatedColumn}f=e}),this),l<a.length&&(f&&d(f,u()),n.add(a.splice(l).join(""))),t.sources.forEach((function(e){var o=t.sourceContentFor(e);null!=o&&(null!=r&&(e=i.join(r,e)),n.setSourceContent(e,o))})),n;function d(e,t){if(null===e||void 0===e.source)n.add(t);else{var o=r?i.join(r,e.source):e.source;n.add(new s(e.originalLine,e.originalColumn,o,t,e.name))}}},s.prototype.add=function(e){if(Array.isArray(e))e.forEach((function(e){this.add(e)}),this);else{if(!e[a]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);e&&this.children.push(e)}return this},s.prototype.prepend=function(e){if(Array.isArray(e))for(var t=e.length-1;t>=0;t--)this.prepend(e[t]);else{if(!e[a]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);this.children.unshift(e)}return this},s.prototype.walk=function(e){for(var t,r=0,n=this.children.length;r<n;r++)(t=this.children[r])[a]?t.walk(e):""!==t&&e(t,{source:this.source,line:this.line,column:this.column,name:this.name})},s.prototype.join=function(e){var t,r,n=this.children.length;if(n>0){for(t=[],r=0;r<n-1;r++)t.push(this.children[r]),t.push(e);t.push(this.children[r]),this.children=t}return this},s.prototype.replaceRight=function(e,t){var r=this.children[this.children.length-1];return r[a]?r.replaceRight(e,t):"string"==typeof r?this.children[this.children.length-1]=r.replace(e,t):this.children.push("".replace(e,t)),this},s.prototype.setSourceContent=function(e,t){this.sourceContents[i.toSetString(e)]=t},s.prototype.walkSourceContents=function(e){for(var t=0,r=this.children.length;t<r;t++)this.children[t][a]&&this.children[t].walkSourceContents(e);var n=Object.keys(this.sourceContents);for(t=0,r=n.length;t<r;t++)e(i.fromSetString(n[t]),this.sourceContents[n[t]])},s.prototype.toString=function(){var e="";return this.walk((function(t){e+=t})),e},s.prototype.toStringWithSourceMap=function(e){var t={code:"",line:1,column:0},r=new n(e),i=!1,o=null,a=null,s=null,l=null;return this.walk((function(e,n){t.code+=e,null!==n.source&&null!==n.line&&null!==n.column?(o===n.source&&a===n.line&&s===n.column&&l===n.name||r.addMapping({source:n.source,original:{line:n.line,column:n.column},generated:{line:t.line,column:t.column},name:n.name}),o=n.source,a=n.line,s=n.column,l=n.name,i=!0):i&&(r.addMapping({generated:{line:t.line,column:t.column}}),o=null,i=!1);for(var u=0,c=e.length;u<c;u++)10===e.charCodeAt(u)?(t.line++,t.column=0,u+1===c?(o=null,i=!1):i&&r.addMapping({source:n.source,original:{line:n.line,column:n.column},generated:{line:t.line,column:t.column},name:n.name})):t.column++})),this.walkSourceContents((function(e,t){r.setSourceContent(e,t)})),{code:t.code,map:r}},t.SourceNode=s},81559:(e,t)=>{t.getArg=function(e,t,r){if(t in e)return e[t];if(3===arguments.length)return r;throw new Error('"'+t+'" is a required argument.')};var r=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,n=/^data:.+\,.+$/;function i(e){var t=e.match(r);return t?{scheme:t[1],auth:t[2],host:t[3],port:t[4],path:t[5]}:null}function o(e){var t="";return e.scheme&&(t+=e.scheme+":"),t+="//",e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}function a(e){var r=e,n=i(e);if(n){if(!n.path)return e;r=n.path}for(var a,s=t.isAbsolute(r),l=r.split(/\/+/),u=0,c=l.length-1;c>=0;c--)"."===(a=l[c])?l.splice(c,1):".."===a?u++:u>0&&(""===a?(l.splice(c+1,u),u=0):(l.splice(c,2),u--));return""===(r=l.join("/"))&&(r=s?"/":"."),n?(n.path=r,o(n)):r}t.urlParse=i,t.urlGenerate=o,t.normalize=a,t.join=function(e,t){""===e&&(e="."),""===t&&(t=".");var r=i(t),s=i(e);if(s&&(e=s.path||"/"),r&&!r.scheme)return s&&(r.scheme=s.scheme),o(r);if(r||t.match(n))return t;if(s&&!s.host&&!s.path)return s.host=t,o(s);var l="/"===t.charAt(0)?t:a(e.replace(/\/+$/,"")+"/"+t);return s?(s.path=l,o(s)):l},t.isAbsolute=function(e){return"/"===e.charAt(0)||!!e.match(r)},t.relative=function(e,t){""===e&&(e="."),e=e.replace(/\/$/,"");for(var r=0;0!==t.indexOf(e+"/");){var n=e.lastIndexOf("/");if(n<0)return t;if((e=e.slice(0,n)).match(/^([^\/]+:\/)?\/*$/))return t;++r}return Array(r+1).join("../")+t.substr(e.length+1)};var s=!("__proto__"in Object.create(null));function l(e){return e}function u(e){if(!e)return!1;var t=e.length;if(t<9)return!1;if(95!==e.charCodeAt(t-1)||95!==e.charCodeAt(t-2)||111!==e.charCodeAt(t-3)||116!==e.charCodeAt(t-4)||111!==e.charCodeAt(t-5)||114!==e.charCodeAt(t-6)||112!==e.charCodeAt(t-7)||95!==e.charCodeAt(t-8)||95!==e.charCodeAt(t-9))return!1;for(var r=t-10;r>=0;r--)if(36!==e.charCodeAt(r))return!1;return!0}function c(e,t){return e===t?0:e>t?1:-1}t.toSetString=s?l:function(e){return u(e)?"$"+e:e},t.fromSetString=s?l:function(e){return u(e)?e.slice(1):e},t.compareByOriginalPositions=function(e,t,r){var n=e.source-t.source;return 0!==n||0!==(n=e.originalLine-t.originalLine)||0!==(n=e.originalColumn-t.originalColumn)||r||0!==(n=e.generatedColumn-t.generatedColumn)||0!==(n=e.generatedLine-t.generatedLine)?n:e.name-t.name},t.compareByGeneratedPositionsDeflated=function(e,t,r){var n=e.generatedLine-t.generatedLine;return 0!==n||0!==(n=e.generatedColumn-t.generatedColumn)||r||0!==(n=e.source-t.source)||0!==(n=e.originalLine-t.originalLine)||0!==(n=e.originalColumn-t.originalColumn)?n:e.name-t.name},t.compareByGeneratedPositionsInflated=function(e,t){var r=e.generatedLine-t.generatedLine;return 0!==r||0!==(r=e.generatedColumn-t.generatedColumn)||0!==(r=c(e.source,t.source))||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)?r:c(e.name,t.name)}},34982:(e,t,r)=>{t.SourceMapGenerator=r(78456).SourceMapGenerator,t.SourceMapConsumer=r(11077).SourceMapConsumer,t.SourceNode=r(21871).SourceNode},30149:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({node:e,parent:t,scope:r,id:i},a=!1){if(e.id)return;if(!o.isObjectProperty(t)&&!o.isObjectMethod(t,{kind:"method"})||t.computed&&!o.isLiteral(t.key)){if(o.isVariableDeclarator(t)){if(i=t.id,o.isIdentifier(i)&&!a){const t=r.parent.getBinding(i.name);if(t&&t.constant&&r.getBinding(i.name)===t)return e.id=o.cloneNode(i),void(e.id[o.NOT_LOCAL_BINDING]=!0)}}else if(o.isAssignmentExpression(t,{operator:"="}))i=t.left;else if(!i)return}else i=t.key;let s;i&&o.isLiteral(i)?s=function(e){if(o.isNullLiteral(e))return"null";if(o.isRegExpLiteral(e))return`_${e.pattern}_${e.flags}`;if(o.isTemplateLiteral(e))return e.quasis.map((e=>e.value.raw)).join("");if(void 0!==e.value)return e.value+"";return""}(i):i&&o.isIdentifier(i)&&(s=i.name);if(void 0===s)return;s=o.toBindingIdentifierName(s),(i=o.identifier(s))[o.NOT_LOCAL_BINDING]=!0;return function(e,t,r,i){if(e.selfReference){if(!i.hasBinding(r.name)||i.hasGlobal(r.name)){if(!o.isFunction(t))return;let e=l;t.generator&&(e=u);const a=e({FUNCTION:t,FUNCTION_ID:r,FUNCTION_KEY:i.generateUidIdentifier(r.name)}).expression,s=a.callee.body.body[0].params;for(let e=0,r=(0,n.default)(t);e<r;e++)s.push(i.generateUidIdentifier("x"));return a}i.rename(r.name)}t.id=r,i.getProgramParent().references[r.name]=!0}(function(e,t,r){const n={selfAssignment:!1,selfReference:!1,outerDeclar:r.getBindingIdentifier(t),references:[],name:t},i=r.getOwnBinding(t);i?"param"===i.kind&&(n.selfReference=!0):(n.outerDeclar||r.hasGlobal(t))&&r.traverse(e,c,n);return n}(e,s,r),e,i,r)||e};var n=s(r(85555)),i=s(r(13198)),o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(80666));function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function s(e){return e&&e.__esModule?e:{default:e}}const l=(0,i.default)("\n  (function (FUNCTION_KEY) {\n    function FUNCTION_ID() {\n      return FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    }\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n"),u=(0,i.default)("\n  (function (FUNCTION_KEY) {\n    function* FUNCTION_ID() {\n      return yield* FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    };\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n"),c={"ReferencedIdentifier|BindingIdentifier"(e,t){if(e.node.name!==t.name)return;e.scope.getBindingIdentifier(t.name)===t.outerDeclar&&(t.selfReference=!0,e.stop())}}},85555:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=e.params;for(let e=0;e<t.length;e++){const r=t[e];if(n.isAssignmentPattern(r)||n.isRestElement(r))return e}return t.length};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(80666));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}},32349:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(80666);function i(e){const t=e,{node:r,parentPath:n}=t;if(n.isLogicalExpression()){const{operator:e,right:t}=n.node;if("&&"===e||"||"===e||"??"===e&&r===t)return i(n)}if(n.isSequenceExpression()){const{expressions:e}=n.node;return e[e.length-1]!==r||i(n)}return n.isConditional({test:r})||n.isUnaryExpression({operator:"!"})||n.isLoop({test:r})}class o{constructor(){this._map=new WeakMap}has(e){return this._map.has(e)}get(e){if(!this.has(e))return;const t=this._map.get(e),{value:r}=t;return t.count--,0===t.count?n.assignmentExpression("=",r,e):r}set(e,t,r){return this._map.set(e,{count:r,value:t})}}function a(e,t){const{node:r}=e;if(e.isOptionalMemberExpression())return n.memberExpression(t,r.property,r.computed);if(e.isOptionalCallExpression()){const i=e.get("callee");if(e.node.optional&&i.isOptionalMemberExpression()){const{object:o}=i.node,a=e.scope.maybeGenerateMemoised(o)||o;return i.get("object").replaceWith(n.assignmentExpression("=",a,o)),n.callExpression(n.memberExpression(t,n.identifier("call")),[a,...r.arguments])}return n.callExpression(t,r.arguments)}return e.node}const s={memoise(){},handle(e,t){const{node:r,parent:o,parentPath:s,scope:l}=e;if(e.isOptionalMemberExpression()){if(function(e){for(;e&&!e.isProgram();){const{parentPath:t,container:r,listKey:n}=e,i=t.node;if(n){if(r!==i[n])return!0}else if(r!==i)return!0;e=t}return!1}(e))return;const u=e.find((({node:t,parent:r,parentPath:n})=>n.isOptionalMemberExpression()?r.optional||r.object!==t:!n.isOptionalCallExpression()||(t!==e.node&&r.optional||r.callee!==t)));if(l.path.isPattern())return void u.replaceWith(n.callExpression(n.arrowFunctionExpression([],u.node),[]));const c=i(u),p=u.parentPath;if(p.isUpdateExpression({argument:r})||p.isAssignmentExpression({left:r}))throw e.buildCodeFrameError("can't handle assignment");const f=p.isUnaryExpression({operator:"delete"});if(f&&u.isOptionalMemberExpression()&&u.get("property").isPrivateName())throw e.buildCodeFrameError("can't delete a private class element");let d=e;for(;;)if(d.isOptionalMemberExpression()){if(d.node.optional)break;d=d.get("object")}else{if(!d.isOptionalCallExpression())throw new Error(`Internal error: unexpected ${d.node.type}`);if(d.node.optional)break;d=d.get("callee")}const h=d.isOptionalMemberExpression()?"object":"callee",m=d.node[h],y=l.maybeGenerateMemoised(m),g=null!=y?y:m,b=s.isOptionalCallExpression({callee:r}),v=s.isCallExpression({callee:r});d.replaceWith(a(d,g)),b?o.optional?s.replaceWith(this.optionalCall(e,o.arguments)):s.replaceWith(this.call(e,o.arguments)):v?e.replaceWith(this.boundGet(e)):e.replaceWith(this.get(e));let E,x=e.node;for(let t=e;t!==u;){const{parentPath:e}=t;if(e===u&&b&&o.optional){x=e.node;break}x=a(e,x),t=e}const S=u.parentPath;if(n.isMemberExpression(x)&&S.isOptionalCallExpression({callee:u.node,optional:!0})){const{object:t}=x;E=e.scope.maybeGenerateMemoised(t),E&&(x.object=n.assignmentExpression("=",E,t))}let T=u;f&&(T=S,x=S.node);const w=y?n.assignmentExpression("=",n.cloneNode(g),n.cloneNode(m)):n.cloneNode(g);if(c){let e;e=t?n.binaryExpression("!=",w,n.nullLiteral()):n.logicalExpression("&&",n.binaryExpression("!==",w,n.nullLiteral()),n.binaryExpression("!==",n.cloneNode(g),l.buildUndefinedNode())),T.replaceWith(n.logicalExpression("&&",e,x))}else{let e;e=t?n.binaryExpression("==",w,n.nullLiteral()):n.logicalExpression("||",n.binaryExpression("===",w,n.nullLiteral()),n.binaryExpression("===",n.cloneNode(g),l.buildUndefinedNode())),T.replaceWith(n.conditionalExpression(e,f?n.booleanLiteral(!0):l.buildUndefinedNode(),x))}if(E){const e=S.node;S.replaceWith(n.optionalCallExpression(n.optionalMemberExpression(e.callee,n.identifier("call"),!1,!0),[n.cloneNode(E),...e.arguments],!1))}}else if(s.isUpdateExpression({argument:r})){if(this.simpleSet)return void e.replaceWith(this.simpleSet(e));const{operator:t,prefix:i}=o;this.memoise(e,2);const a=n.binaryExpression(t[0],n.unaryExpression("+",this.get(e)),n.numericLiteral(1));if(i)s.replaceWith(this.set(e,a));else{const{scope:t}=e,i=t.generateUidIdentifierBasedOnNode(r);t.push({id:i}),a.left=n.assignmentExpression("=",n.cloneNode(i),a.left),s.replaceWith(n.sequenceExpression([this.set(e,a),n.cloneNode(i)]))}}else if(s.isAssignmentExpression({left:r})){if(this.simpleSet)return void e.replaceWith(this.simpleSet(e));const{operator:t,right:r}=o;if("="===t)s.replaceWith(this.set(e,r));else{const i=t.slice(0,-1);n.LOGICAL_OPERATORS.includes(i)?(this.memoise(e,1),s.replaceWith(n.logicalExpression(i,this.get(e),this.set(e,r)))):(this.memoise(e,2),s.replaceWith(this.set(e,n.binaryExpression(i,this.get(e),r))))}}else{if(!s.isCallExpression({callee:r}))return s.isOptionalCallExpression({callee:r})?l.path.isPattern()?void s.replaceWith(n.callExpression(n.arrowFunctionExpression([],s.node),[])):void s.replaceWith(this.optionalCall(e,o.arguments)):void(s.isForXStatement({left:r})||s.isObjectProperty({value:r})&&s.parentPath.isObjectPattern()||s.isAssignmentPattern({left:r})&&s.parentPath.isObjectProperty({value:o})&&s.parentPath.parentPath.isObjectPattern()||s.isArrayPattern()||s.isAssignmentPattern({left:r})&&s.parentPath.isArrayPattern()||s.isRestElement()?e.replaceWith(this.destructureSet(e)):e.replaceWith(this.get(e)));s.replaceWith(this.call(e,o.arguments))}}};t.default=function(e,t,r){e.traverse(t,Object.assign({},s,r,{memoiser:new o}))}},54495:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=(n=r(39619))&&n.__esModule?n:{default:n},o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(80666));function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}t.default=class{constructor(e,t,r){this._statements=[],this._resultName=null,this._scope=null,this._hub=null,this._scope=t,this._hub=r,this._importedSource=e}done(){return{statements:this._statements,resultName:this._resultName}}import(){return this._statements.push(o.importDeclaration([],o.stringLiteral(this._importedSource))),this}require(){return this._statements.push(o.expressionStatement(o.callExpression(o.identifier("require"),[o.stringLiteral(this._importedSource)]))),this}namespace(e="namespace"){e=this._scope.generateUidIdentifier(e);const t=this._statements[this._statements.length-1];return(0,i.default)("ImportDeclaration"===t.type),(0,i.default)(0===t.specifiers.length),t.specifiers=[o.importNamespaceSpecifier(e)],this._resultName=o.cloneNode(e),this}default(e){e=this._scope.generateUidIdentifier(e);const t=this._statements[this._statements.length-1];return(0,i.default)("ImportDeclaration"===t.type),(0,i.default)(0===t.specifiers.length),t.specifiers=[o.importDefaultSpecifier(e)],this._resultName=o.cloneNode(e),this}named(e,t){if("default"===t)return this.default(e);e=this._scope.generateUidIdentifier(e);const r=this._statements[this._statements.length-1];return(0,i.default)("ImportDeclaration"===r.type),(0,i.default)(0===r.specifiers.length),r.specifiers=[o.importSpecifier(e,o.identifier(t))],this._resultName=o.cloneNode(e),this}var(e){e=this._scope.generateUidIdentifier(e);let t=this._statements[this._statements.length-1];return"ExpressionStatement"!==t.type&&((0,i.default)(this._resultName),t=o.expressionStatement(this._resultName),this._statements.push(t)),this._statements[this._statements.length-1]=o.variableDeclaration("var",[o.variableDeclarator(e,t.expression)]),this._resultName=o.cloneNode(e),this}defaultInterop(){return this._interop(this._hub.addHelper("interopRequireDefault"))}wildcardInterop(){return this._interop(this._hub.addHelper("interopRequireWildcard"))}_interop(e){const t=this._statements[this._statements.length-1];return"ExpressionStatement"===t.type?t.expression=o.callExpression(e,[t.expression]):"VariableDeclaration"===t.type?((0,i.default)(1===t.declarations.length),t.declarations[0].init=o.callExpression(e,[t.declarations[0].init])):i.default.fail("Unexpected type."),this}prop(e){const t=this._statements[this._statements.length-1];return"ExpressionStatement"===t.type?t.expression=o.memberExpression(t.expression,o.identifier(e)):"VariableDeclaration"===t.type?((0,i.default)(1===t.declarations.length),t.declarations[0].init=o.memberExpression(t.declarations[0].init,o.identifier(e))):i.default.fail("Unexpected type:"+t.type),this}read(e){this._resultName=o.memberExpression(this._resultName,o.identifier(e))}}},41310:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(39619)),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(80666)),o=l(r(54495)),a=l(r(79171));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(e){return e&&e.__esModule?e:{default:e}}t.default=class{constructor(e,t,r){this._defaultOpts={importedSource:null,importedType:"commonjs",importedInterop:"babel",importingInterop:"babel",ensureLiveReference:!1,ensureNoContext:!1,importPosition:"before"};const n=e.find((e=>e.isProgram()));this._programPath=n,this._programScope=n.scope,this._hub=n.hub,this._defaultOpts=this._applyDefaults(t,r,!0)}addDefault(e,t){return this.addNamed("default",e,t)}addNamed(e,t,r){return(0,n.default)("string"==typeof e),this._generateImport(this._applyDefaults(t,r),e)}addNamespace(e,t){return this._generateImport(this._applyDefaults(e,t),null)}addSideEffect(e,t){return this._generateImport(this._applyDefaults(e,t),!1)}_applyDefaults(e,t,r=!1){const i=[];"string"==typeof e?(i.push({importedSource:e}),i.push(t)):((0,n.default)(!t,"Unexpected secondary arguments."),i.push(e));const o=Object.assign({},this._defaultOpts);for(const e of i)e&&(Object.keys(o).forEach((t=>{void 0!==e[t]&&(o[t]=e[t])})),r||(void 0!==e.nameHint&&(o.nameHint=e.nameHint),void 0!==e.blockHoist&&(o.blockHoist=e.blockHoist)));return o}_generateImport(e,t){const r="default"===t,n=!!t&&!r,s=null===t,{importedSource:l,importedType:u,importedInterop:c,importingInterop:p,ensureLiveReference:f,ensureNoContext:d,nameHint:h,importPosition:m,blockHoist:y}=e;let g=h||t;const b=(0,a.default)(this._programPath),v=b&&"node"===p,E=b&&"babel"===p;if("after"===m&&!b)throw new Error('"importPosition": "after" is only supported in modules');const x=new o.default(l,this._programScope,this._hub);if("es6"===u){if(!v&&!E)throw new Error("Cannot import an ES6 module from CommonJS");x.import(),s?x.namespace(h||l):(r||n)&&x.named(g,t)}else{if("commonjs"!==u)throw new Error(`Unexpected interopType "${u}"`);if("babel"===c)if(v){g="default"!==g?g:l;const e=`${l}$es6Default`;x.import(),s?x.default(e).var(g||l).wildcardInterop():r?f?x.default(e).var(g||l).defaultInterop().read("default"):x.default(e).var(g).defaultInterop().prop(t):n&&x.default(e).read(t)}else E?(x.import(),s?x.namespace(g||l):(r||n)&&x.named(g,t)):(x.require(),s?x.var(g||l).wildcardInterop():(r||n)&&f?r?(g="default"!==g?g:l,x.var(g).read(t),x.defaultInterop()):x.var(l).read(t):r?x.var(g).defaultInterop().prop(t):n&&x.var(g).prop(t));else if("compiled"===c)v?(x.import(),s?x.default(g||l):(r||n)&&x.default(l).read(g)):E?(x.import(),s?x.namespace(g||l):(r||n)&&x.named(g,t)):(x.require(),s?x.var(g||l):(r||n)&&(f?x.var(l).read(g):x.prop(t).var(g)));else{if("uncompiled"!==c)throw new Error(`Unknown importedInterop "${c}".`);if(r&&f)throw new Error("No live reference for commonjs default");v?(x.import(),s?x.default(g||l):r?x.default(g):n&&x.default(l).read(g)):E?(x.import(),s?x.default(g||l):r?x.default(g):n&&x.named(g,t)):(x.require(),s?x.var(g||l):r?x.var(g):n&&(f?x.var(l).read(g):x.var(g).prop(t)))}}const{statements:S,resultName:T}=x.done();return this._insertStatements(S,m,y),(r||n)&&d&&"Identifier"!==T.type?i.sequenceExpression([i.numericLiteral(0),T]):T}_insertStatements(e,t="before",r=3){const n=this._programPath.get("body");if("after"===t){for(let t=n.length-1;t>=0;t--)if(n[t].isImportDeclaration())return void n[t].insertAfter(e)}else{e.forEach((e=>{e._blockHoist=r}));const t=n.find((e=>{const t=e.node._blockHoist;return Number.isFinite(t)&&t<4}));if(t)return void t.insertBefore(e)}this._programPath.unshiftContainer("body",e)}}},6065:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addDefault=function(e,t,r){return new n.default(e).addDefault(t,r)},t.addNamed=function(e,t,r,i){return new n.default(e).addNamed(t,r,i)},t.addNamespace=function(e,t,r){return new n.default(e).addNamespace(t,r)},t.addSideEffect=function(e,t,r){return new n.default(e).addSideEffect(t,r)},Object.defineProperty(t,"ImportInjector",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"isModule",{enumerable:!0,get:function(){return i.default}});var n=o(r(41310)),i=o(r(79171));function o(e){return e&&e.__esModule?e:{default:e}}},79171:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const{sourceType:t}=e.node;if("module"!==t&&"script"!==t)throw e.buildCodeFrameError(`Unknown sourceType "${t}", cannot transform.`);return"module"===e.node.sourceType}},31078:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r,n,i;const{filename:o,filenameRelative:a=o,sourceRoot:s=(null!=(r=t.moduleRoot)?r:e.moduleRoot)}=e,{moduleId:l=e.moduleId,moduleIds:u=(null!=(n=e.moduleIds)?n:!!l),getModuleId:c=e.getModuleId,moduleRoot:p=(null!=(i=e.moduleRoot)?i:s)}=t;if(!u)return null;if(null!=l&&!c)return l;let f=null!=p?p+"/":"";if(a){const e=null!=s?new RegExp("^"+s+"/?"):"";f+=a.replace(e,"").replace(/\.(\w*?)$/,"")}return f=f.replace(/\\/g,"/"),c&&c(f)||f}},18:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rewriteModuleStatementsAndPrepareHeader=function(e,{loose:t,exportName:r,strict:p,allowTopLevelThis:f,strictMode:d,noInterop:h,lazy:m,esNamespaceOnly:g,constantReexports:v=t,enumerableModuleMeta:E=t}){(0,n.default)((0,s.isModule)(e),"Cannot process module statements in a script"),e.node.sourceType="script";const x=(0,c.default)(e,r,{noInterop:h,initializeReexports:v,lazy:m,esNamespaceOnly:g});f||(0,l.default)(e);if((0,u.default)(e,x),!1!==d){e.node.directives.some((e=>"use strict"===e.value.value))||e.unshiftContainer("directives",i.directive(i.directiveLiteral("use strict")))}const S=[];(0,c.hasExports)(x)&&!p&&S.push(function(e,t=!1){return(t?o.default.statement`
        EXPORTS.__esModule = true;
      `:o.default.statement`
        Object.defineProperty(EXPORTS, "__esModule", {
          value: true,
        });
      `)({EXPORTS:e.exportName})}(x,E));const T=function(e,t){const r=Object.create(null);for(const e of t.local.values())for(const t of e.names)r[t]=!0;let n=!1;for(const e of t.source.values()){for(const t of e.reexports.keys())r[t]=!0;for(const t of e.reexportNamespace)r[t]=!0;n=n||e.reexportAll}if(!n||0===Object.keys(r).length)return null;const o=e.scope.generateUidIdentifier("exportNames");return delete r.default,{name:o.name,statement:i.variableDeclaration("var",[i.variableDeclarator(o,i.valueToNode(r))])}}(e,x);T&&(x.exportNameListName=T.name,S.push(T.statement));return S.push(...function(e,t,r=!1){const n=[],o=[];for(const[e,r]of t.local)"import"===r.kind||("hoisted"===r.kind?n.push(b(t,r.names,i.identifier(e))):o.push(...r.names));for(const e of t.source.values()){r||n.push(...y(t,e,!1));for(const t of e.reexportNamespace)o.push(t)}return n.push(...(0,a.default)(o,100).map((r=>b(t,r,e.scope.buildUndefinedNode())))),n}(e,x,v)),{meta:x,headers:S}},t.ensureStatementsHoisted=function(e){e.forEach((e=>{e._blockHoist=3}))},t.wrapInterop=function(e,t,r){if("none"===r)return null;let n;if("default"===r)n="interopRequireDefault";else{if("namespace"!==r)throw new Error(`Unknown interop: ${r}`);n="interopRequireWildcard"}return i.callExpression(e.hub.addHelper(n),[t])},t.buildNamespaceInitStatements=function(e,t,r=!1){const n=[];let a=i.identifier(t.name);t.lazy&&(a=i.callExpression(a,[]));for(const e of t.importsNamespace)e!==t.name&&n.push(o.default.statement`var NAME = SOURCE;`({NAME:e,SOURCE:i.cloneNode(a)}));r&&n.push(...y(e,t,!0));for(const r of t.reexportNamespace)n.push((t.lazy?o.default.statement`
            Object.defineProperty(EXPORTS, "NAME", {
              enumerable: true,
              get: function() {
                return NAMESPACE;
              }
            });
          `:o.default.statement`EXPORTS.NAME = NAMESPACE;`)({EXPORTS:e.exportName,NAME:r,NAMESPACE:i.cloneNode(a)}));if(t.reexportAll){const s=function(e,t,r){return(r?o.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          EXPORTS[key] = NAMESPACE[key];
        });
      `:o.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          Object.defineProperty(EXPORTS, key, {
            enumerable: true,
            get: function() {
              return NAMESPACE[key];
            },
          });
        });
    `)({NAMESPACE:t,EXPORTS:e.exportName,VERIFY_NAME_LIST:e.exportNameListName?o.default`
            if (Object.prototype.hasOwnProperty.call(EXPORTS_LIST, key)) return;
          `({EXPORTS_LIST:e.exportNameListName}):null})}(e,i.cloneNode(a),r);s.loc=t.reexportAll.loc,n.push(s)}return n},Object.defineProperty(t,"isModule",{enumerable:!0,get:function(){return s.isModule}}),Object.defineProperty(t,"rewriteThis",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"hasExports",{enumerable:!0,get:function(){return c.hasExports}}),Object.defineProperty(t,"isSideEffectImport",{enumerable:!0,get:function(){return c.isSideEffectImport}}),Object.defineProperty(t,"getModuleName",{enumerable:!0,get:function(){return p.default}});var n=h(r(39619)),i=d(r(80666)),o=h(r(13198)),a=h(r(93586)),s=r(6065),l=h(r(84275)),u=h(r(68215)),c=d(r(21209)),p=h(r(31078));function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}function h(e){return e&&e.__esModule?e:{default:e}}const m={constant:o.default.statement`EXPORTS.EXPORT_NAME = NAMESPACE_IMPORT;`,constantComputed:o.default.statement`EXPORTS["EXPORT_NAME"] = NAMESPACE_IMPORT;`,spec:o.default`
    Object.defineProperty(EXPORTS, "EXPORT_NAME", {
      enumerable: true,
      get: function() {
        return NAMESPACE_IMPORT;
      },
    });
    `},y=(e,t,r)=>{const n=t.lazy?i.callExpression(i.identifier(t.name),[]):i.identifier(t.name),{stringSpecifiers:o}=e;return Array.from(t.reexports,(([t,a])=>{let s;s=o.has(a)?i.memberExpression(i.cloneNode(n),i.stringLiteral(a),!0):s=i.memberExpression(i.cloneNode(n),i.identifier(a));const l={EXPORTS:e.exportName,EXPORT_NAME:t,NAMESPACE_IMPORT:s};return r?o.has(t)?m.constantComputed(l):m.constant(l):m.spec(l)}))};const g={computed:o.default.expression`EXPORTS["NAME"] = VALUE`,default:o.default.expression`EXPORTS.NAME = VALUE`};function b(e,t,r){const{stringSpecifiers:n,exportName:o}=e;return i.expressionStatement(t.reduce(((e,t)=>{const r={EXPORTS:o,NAME:t,VALUE:e};return n.has(t)?g.computed(r):g.default(r)}),r))}},21209:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hasExports=function(e){return e.hasExports},t.isSideEffectImport=s,t.default=function(e,t,{noInterop:r=!1,initializeReexports:n=!1,lazy:o=!1,esNamespaceOnly:u=!1}={}){t||(t=e.scope.generateUidIdentifier("exports").name);const c=new Set;!function(e){e.get("body").forEach((e=>{e.isExportDefaultDeclaration()&&(0,a.default)(e)}))}(e);const{local:p,source:f,hasExports:d}=function(e,{lazy:t,initializeReexports:r},n){const o=function(e,t,r){const n=new Map;e.get("body").forEach((e=>{let r;if(e.isImportDeclaration())r="import";else{if(e.isExportDefaultDeclaration()&&(e=e.get("declaration")),e.isExportNamedDeclaration())if(e.node.declaration)e=e.get("declaration");else if(t&&e.node.source&&e.get("source").isStringLiteral())return void e.node.specifiers.forEach((e=>{n.set(e.local.name,"block")}));if(e.isFunctionDeclaration())r="hoisted";else if(e.isClassDeclaration())r="block";else if(e.isVariableDeclaration({kind:"var"}))r="var";else{if(!e.isVariableDeclaration())return;r="block"}}Object.keys(e.getOuterBindingIdentifiers()).forEach((e=>{n.set(e,r)}))}));const i=new Map,o=e=>{const t=e.node.name;let r=i.get(t);if(!r){const o=n.get(t);if(void 0===o)throw e.buildCodeFrameError(`Exporting local "${t}", which is not declared.`);r={names:[],kind:o},i.set(t,r)}return r};return e.get("body").forEach((e=>{if(!e.isExportNamedDeclaration()||!t&&e.node.source){if(e.isExportDefaultDeclaration()){const t=e.get("declaration");if(!t.isFunctionDeclaration()&&!t.isClassDeclaration())throw t.buildCodeFrameError("Unexpected default expression export.");o(t.get("id")).names.push("default")}}else if(e.node.declaration){const t=e.get("declaration"),r=t.getOuterBindingIdentifierPaths();Object.keys(r).forEach((e=>{if("__esModule"===e)throw t.buildCodeFrameError('Illegal export "__esModule".');o(r[e]).names.push(e)}))}else e.get("specifiers").forEach((e=>{const t=e.get("local"),n=e.get("exported"),i=o(t),a=l(n,r);if("__esModule"===a)throw n.buildCodeFrameError('Illegal export "__esModule".');i.names.push(a)}))})),i}(e,r,n),a=new Map,u=t=>{const r=t.value;let n=a.get(r);return n||(n={name:e.scope.generateUidIdentifier((0,i.basename)(r,(0,i.extname)(r))).name,interop:"none",loc:null,imports:new Map,importsNamespace:new Set,reexports:new Map,reexportNamespace:new Set,reexportAll:null,lazy:!1},a.set(r,n)),n};let c=!1;e.get("body").forEach((e=>{if(e.isImportDeclaration()){const t=u(e.node.source);t.loc||(t.loc=e.node.loc),e.get("specifiers").forEach((e=>{if(e.isImportDefaultSpecifier()){const r=e.get("local").node.name;t.imports.set(r,"default");const n=o.get(r);n&&(o.delete(r),n.names.forEach((e=>{t.reexports.set(e,"default")})))}else if(e.isImportNamespaceSpecifier()){const r=e.get("local").node.name;t.importsNamespace.add(r);const n=o.get(r);n&&(o.delete(r),n.names.forEach((e=>{t.reexportNamespace.add(e)})))}else if(e.isImportSpecifier()){const r=l(e.get("imported"),n),i=e.get("local").node.name;t.imports.set(i,r);const a=o.get(i);a&&(o.delete(i),a.names.forEach((e=>{t.reexports.set(e,r)})))}}))}else if(e.isExportAllDeclaration()){c=!0;const t=u(e.node.source);t.loc||(t.loc=e.node.loc),t.reexportAll={loc:e.node.loc}}else if(e.isExportNamedDeclaration()&&e.node.source){c=!0;const t=u(e.node.source);t.loc||(t.loc=e.node.loc),e.get("specifiers").forEach((e=>{if(!e.isExportSpecifier())throw e.buildCodeFrameError("Unexpected export specifier type");const r=l(e.get("local"),n),i=l(e.get("exported"),n);if(t.reexports.set(i,r),"__esModule"===i)throw i.buildCodeFrameError('Illegal export "__esModule".')}))}else(e.isExportNamedDeclaration()||e.isExportDefaultDeclaration())&&(c=!0)}));for(const e of a.values()){let t=!1,r=!1;e.importsNamespace.size>0&&(t=!0,r=!0),e.reexportAll&&(r=!0);for(const n of e.imports.values())"default"===n?t=!0:r=!0;for(const n of e.reexports.values())"default"===n?t=!0:r=!0;t&&r?e.interop="namespace":t&&(e.interop="default")}for(const[e,r]of a)if(!1!==t&&!s(r)&&!r.reexportAll)if(!0===t)r.lazy=!/\./.test(e);else if(Array.isArray(t))r.lazy=-1!==t.indexOf(e);else{if("function"!=typeof t)throw new Error(".lazy must be a boolean, string array, or function");r.lazy=t(e)}return{hasExports:c,local:o,source:a}}(e,{initializeReexports:n,lazy:o},c);!function(e){e.get("body").forEach((e=>{if(e.isImportDeclaration())e.remove();else if(e.isExportNamedDeclaration())e.node.declaration?(e.node.declaration._blockHoist=e.node._blockHoist,e.replaceWith(e.node.declaration)):e.remove();else if(e.isExportDefaultDeclaration()){const t=e.get("declaration");if(!t.isFunctionDeclaration()&&!t.isClassDeclaration())throw t.buildCodeFrameError("Unexpected default expression export.");t._blockHoist=e.node._blockHoist,e.replaceWith(t)}else e.isExportAllDeclaration()&&e.remove()}))}(e);for(const[,e]of f)e.importsNamespace.size>0&&(e.name=e.importsNamespace.values().next().value),r?e.interop="none":u&&"namespace"===e.interop&&(e.interop="default");return{exportName:t,exportNameListName:null,hasExports:d,local:p,source:f,stringSpecifiers:c}};var n,i=r(67425),o=r(69762),a=(n=r(50582))&&n.__esModule?n:{default:n};function s(e){return 0===e.imports.size&&0===e.importsNamespace.size&&0===e.reexports.size&&0===e.reexportNamespace.size&&!e.reexportAll}function l(e,t){if(e.isIdentifier())return e.node.name;if(e.isStringLiteral()){const r=e.node.value;return(0,o.isIdentifierName)(r)||t.add(r),r}throw new Error(`Expected export specifier to be either Identifier or StringLiteral, got ${e.node.type}`)}},68215:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const r=new Map,n=new Map,o=t=>{e.requeue(t)};for(const[e,n]of t.source){for(const[t,i]of n.imports)r.set(t,[e,i,null]);for(const t of n.importsNamespace)r.set(t,[e,null,t])}for(const[e,r]of t.local){let t=n.get(e);t||(t=[],n.set(e,t)),t.push(...r.names)}e.traverse(u,{metadata:t,requeueInParent:o,scope:e.scope,exported:n}),(0,a.default)(e,new Set([...Array.from(r.keys()),...Array.from(n.keys())])),e.traverse(f,{seen:new WeakSet,metadata:t,requeueInParent:o,scope:e.scope,imported:r,exported:n,buildImportReference:([e,r,n],o)=>{const a=t.source.get(e);if(n)return a.lazy&&(o=i.callExpression(o,[])),o;let s=i.identifier(a.name);a.lazy&&(s=i.callExpression(s,[]));const l=t.stringSpecifiers.has(r);return i.memberExpression(s,l?i.stringLiteral(r):i.identifier(r),l)}})};var n=l(r(39619)),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(80666)),o=l(r(13198)),a=l(r(71234));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(e){return e&&e.__esModule?e:{default:e}}const u={Scope(e){e.skip()},ClassDeclaration(e){const{requeueInParent:t,exported:r,metadata:n}=this,{id:o}=e.node;if(!o)throw new Error("Expected class to have a name");const a=o.name,s=r.get(a)||[];if(s.length>0){const r=i.expressionStatement(c(n,s,i.identifier(a)));r._blockHoist=e.node._blockHoist,t(e.insertAfter(r)[0])}},VariableDeclaration(e){const{requeueInParent:t,exported:r,metadata:n}=this;Object.keys(e.getOuterBindingIdentifiers()).forEach((o=>{const a=r.get(o)||[];if(a.length>0){const r=i.expressionStatement(c(n,a,i.identifier(o)));r._blockHoist=e.node._blockHoist,t(e.insertAfter(r)[0])}}))}},c=(e,t,r)=>(t||[]).reduce(((t,r)=>{const{stringSpecifiers:n}=e,o=n.has(r);return i.assignmentExpression("=",i.memberExpression(i.identifier(e.exportName),o?i.stringLiteral(r):i.identifier(r),o),t)}),r),p=e=>o.default.expression.ast`
    (function() {
      throw new Error('"' + '${e}' + '" is read-only.');
    })()
  `,f={ReferencedIdentifier(e){const{seen:t,buildImportReference:r,scope:n,imported:o,requeueInParent:a}=this;if(t.has(e.node))return;t.add(e.node);const s=e.node.name,l=o.get(s);if(l){const t=e.scope.getBinding(s);if(n.getBinding(s)!==t)return;const o=r(l,e.node);if(o.loc=e.node.loc,(e.parentPath.isCallExpression({callee:e.node})||e.parentPath.isOptionalCallExpression({callee:e.node})||e.parentPath.isTaggedTemplateExpression({tag:e.node}))&&i.isMemberExpression(o))e.replaceWith(i.sequenceExpression([i.numericLiteral(0),o]));else if(e.isJSXIdentifier()&&i.isMemberExpression(o)){const{object:t,property:r}=o;e.replaceWith(i.JSXMemberExpression(i.JSXIdentifier(t.name),i.JSXIdentifier(r.name)))}else e.replaceWith(o);a(e),e.skip()}},AssignmentExpression:{exit(e){const{scope:t,seen:r,imported:o,exported:a,requeueInParent:s,buildImportReference:l}=this;if(r.has(e.node))return;r.add(e.node);const u=e.get("left");if(!u.isMemberExpression())if(u.isIdentifier()){const r=u.node.name;if(t.getBinding(r)!==e.scope.getBinding(r))return;const f=a.get(r),d=o.get(r);if((null==f?void 0:f.length)>0||d){(0,n.default)("="===e.node.operator,"Path was not simplified");const t=e.node;d&&(t.left=l(d,t.left),t.right=i.sequenceExpression([t.right,p(r)])),e.replaceWith(c(this.metadata,f,t)),s(e)}}else{const r=u.getOuterBindingIdentifiers(),n=Object.keys(r).filter((r=>t.getBinding(r)===e.scope.getBinding(r))),l=n.find((e=>o.has(e)));l&&(e.node.right=i.sequenceExpression([e.node.right,p(l)]));const f=[];if(n.forEach((e=>{const t=a.get(e)||[];t.length>0&&f.push(c(this.metadata,t,i.identifier(e)))})),f.length>0){let t=i.sequenceExpression(f);e.parentPath.isExpressionStatement()&&(t=i.expressionStatement(t),t._blockHoist=e.parentPath.node._blockHoist);s(e.insertAfter(t)[0])}}}},"ForOfStatement|ForInStatement"(e){const{scope:t,node:r}=e,{left:n}=r,{exported:o,scope:a}=this;if(!i.isVariableDeclaration(n)){let r=!1;const s=e.get("body"),l=s.scope;for(const e of Object.keys(i.getOuterBindingIdentifiers(n)))o.get(e)&&a.getBinding(e)===t.getBinding(e)&&(r=!0,l.hasOwnBinding(e)&&l.rename(e));if(!r)return;const u=t.generateUidIdentifierBasedOnNode(n);s.unshiftContainer("body",i.expressionStatement(i.assignmentExpression("=",n,u))),e.get("left").replaceWith(i.variableDeclaration("let",[i.variableDeclarator(i.cloneNode(u))])),t.registerDeclaration(e.get("left"))}}}},84275:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,o.default)(e.node,Object.assign({},l,{noScope:!0}))};var n,i=r(4734),o=(n=r(1785))&&n.__esModule?n:{default:n},a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(80666));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}const l=o.default.visitors.merge([i.environmentVisitor,{ThisExpression(e){e.replaceWith(a.unaryExpression("void",a.numericLiteral(0),!0))}}])},10152:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,i){return 1===r.length&&n.isSpreadElement(r[0])&&n.isIdentifier(r[0].argument,{name:"arguments"})?i?n.optionalCallExpression(n.optionalMemberExpression(e,n.identifier("apply"),!1,!0),[t,r[0].argument],!1):n.callExpression(n.memberExpression(e,n.identifier("apply")),[t,r[0].argument]):i?n.optionalCallExpression(n.optionalMemberExpression(e,n.identifier("call"),!1,!0),[t,...r],!1):n.callExpression(n.memberExpression(e,n.identifier("call")),[t,...r])};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(80666));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}},4734:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.skipAllButComputedKey=c,t.default=t.environmentVisitor=void 0;var n=l(r(1785)),i=l(r(32349)),o=l(r(10152)),a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(80666));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r,n){e=a.cloneNode(e);const i=t||n?e:a.memberExpression(e,a.identifier("prototype"));return a.callExpression(r.addHelper("getPrototypeOf"),[i])}function c(e){if(!e.node.computed)return void e.skip();const t=a.VISITOR_KEYS[e.type];for(const r of t)"key"!==r&&e.skipKey(r)}const p={[(a.staticBlock?"StaticBlock|":"")+"ClassPrivateProperty|TypeAnnotation"](e){e.skip()},Function(e){e.isMethod()||e.isArrowFunctionExpression()||e.skip()},"Method|ClassProperty"(e){c(e)}};t.environmentVisitor=p;const f=n.default.visitors.merge([p,{Super(e,t){const{node:r,parentPath:n}=e;n.isMemberExpression({object:r})&&t.handle(n)}}]),d=n.default.visitors.merge([p,{Scopable(e,{refName:t}){const r=e.scope.getOwnBinding(t);r&&r.identifier.name===t&&e.scope.rename(t)}}]),h={memoise(e,t){const{scope:r,node:n}=e,{computed:i,property:o}=n;if(!i)return;const a=r.maybeGenerateMemoised(o);a&&this.memoiser.set(o,a,t)},prop(e){const{computed:t,property:r}=e.node;return this.memoiser.has(r)?a.cloneNode(this.memoiser.get(r)):t?a.cloneNode(r):a.stringLiteral(r.name)},get(e){return this._get(e,this._getThisRefs())},_get(e,t){const r=u(this.getObjectRef(),this.isStatic,this.file,this.isPrivateMethod);return a.callExpression(this.file.addHelper("get"),[t.memo?a.sequenceExpression([t.memo,r]):r,this.prop(e),t.this])},_getThisRefs(){if(!this.isDerivedConstructor)return{this:a.thisExpression()};const e=this.scope.generateDeclaredUidIdentifier("thisSuper");return{memo:a.assignmentExpression("=",e,a.thisExpression()),this:a.cloneNode(e)}},set(e,t){const r=this._getThisRefs(),n=u(this.getObjectRef(),this.isStatic,this.file,this.isPrivateMethod);return a.callExpression(this.file.addHelper("set"),[r.memo?a.sequenceExpression([r.memo,n]):n,this.prop(e),t,r.this,a.booleanLiteral(e.isInStrictMode())])},destructureSet(e){throw e.buildCodeFrameError("Destructuring to a super field is not supported yet.")},call(e,t){const r=this._getThisRefs();return(0,o.default)(this._get(e,r),a.cloneNode(r.this),t,!1)},optionalCall(e,t){const r=this._getThisRefs();return(0,o.default)(this._get(e,r),a.cloneNode(r.this),t,!0)}},m=Object.assign({},h,{prop(e){const{property:t}=e.node;return this.memoiser.has(t)?a.cloneNode(this.memoiser.get(t)):a.cloneNode(t)},get(e){const{isStatic:t,superRef:r}=this,{computed:n}=e.node,i=this.prop(e);let o;return o=t?r?a.cloneNode(r):a.memberExpression(a.identifier("Function"),a.identifier("prototype")):r?a.memberExpression(a.cloneNode(r),a.identifier("prototype")):a.memberExpression(a.identifier("Object"),a.identifier("prototype")),a.memberExpression(o,i,n)},set(e,t){const{computed:r}=e.node,n=this.prop(e);return a.assignmentExpression("=",a.memberExpression(a.thisExpression(),n,r),t)},destructureSet(e){const{computed:t}=e.node,r=this.prop(e);return a.memberExpression(a.thisExpression(),r,t)},call(e,t){return(0,o.default)(this.get(e),a.thisExpression(),t,!1)},optionalCall(e,t){return(0,o.default)(this.get(e),a.thisExpression(),t,!0)}});t.default=class{constructor(e){var t;const r=e.methodPath;this.methodPath=r,this.isDerivedConstructor=r.isClassMethod({kind:"constructor"})&&!!e.superRef,this.isStatic=r.isObjectMethod()||r.node.static,this.isPrivateMethod=r.isPrivate()&&r.isMethod(),this.file=e.file,this.superRef=e.superRef,this.constantSuper=null!=(t=e.constantSuper)?t:e.isLoose,this.opts=e}getObjectRef(){return a.cloneNode(this.opts.objectRef||this.opts.getObjectRef())}replace(){this.opts.refToPreserve&&this.methodPath.traverse(d,{refName:this.opts.refToPreserve.name});const e=this.constantSuper?m:h;(0,i.default)(this.methodPath,f,Object.assign({file:this.file,scope:this.methodPath.scope,isDerivedConstructor:this.isDerivedConstructor,isStatic:this.isStatic,isPrivateMethod:this.isPrivateMethod,getObjectRef:this.getObjectRef.bind(this),superRef:this.superRef},e))}}},71234:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){e.traverse(o,{scope:e.scope,bindingNames:t,seen:new WeakSet})};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(80666));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}const o={UpdateExpression:{exit(e){const{scope:t,bindingNames:r}=this,i=e.get("argument");if(!i.isIdentifier())return;const o=i.node.name;if(r.has(o)&&t.getBinding(o)===e.scope.getBinding(o))if(e.parentPath.isExpressionStatement()&&!e.isCompletionRecord()){const t="++"==e.node.operator?"+=":"-=";e.replaceWith(n.assignmentExpression(t,i.node,n.numericLiteral(1)))}else if(e.node.prefix)e.replaceWith(n.assignmentExpression("=",n.identifier(o),n.binaryExpression(e.node.operator[0],n.unaryExpression("+",i.node),n.numericLiteral(1))));else{const t=e.scope.generateUidIdentifierBasedOnNode(i.node,"old"),r=t.name;e.scope.push({id:t});const o=n.binaryExpression(e.node.operator[0],n.identifier(r),n.numericLiteral(1));e.replaceWith(n.sequenceExpression([n.assignmentExpression("=",n.identifier(r),n.unaryExpression("+",i.node)),n.assignmentExpression("=",n.cloneNode(i.node),o),n.identifier(r)]))}}},AssignmentExpression:{exit(e){const{scope:t,seen:r,bindingNames:i}=this;if("="===e.node.operator)return;if(r.has(e.node))return;r.add(e.node);const o=e.get("left");if(!o.isIdentifier())return;const a=o.node.name;i.has(a)&&t.getBinding(a)===e.scope.getBinding(a)&&(e.node.right=n.binaryExpression(e.node.operator.slice(0,-1),n.cloneNode(e.node.left),e.node.right),e.node.operator="=")}}}},50582:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e.isExportDeclaration())throw new Error("Only export declarations can be split.");const t=e.isExportDefaultDeclaration(),r=e.get("declaration"),i=r.isClassDeclaration();if(t){const t=r.isFunctionDeclaration()||i,o=r.isScope()?r.scope.parent:r.scope;let a=r.node.id,s=!1;a||(s=!0,a=o.generateUidIdentifier("default"),(t||r.isFunctionExpression()||r.isClassExpression())&&(r.node.id=n.cloneNode(a)));const l=t?r:n.variableDeclaration("var",[n.variableDeclarator(n.cloneNode(a),r.node)]),u=n.exportNamedDeclaration(null,[n.exportSpecifier(n.cloneNode(a),n.identifier("default"))]);return e.insertAfter(u),e.replaceWith(l),s&&o.registerDeclaration(e),e}if(e.get("specifiers").length>0)throw new Error("It doesn't make sense to split exported specifiers.");const o=r.getOuterBindingIdentifiers(),a=Object.keys(o).map((e=>n.exportSpecifier(n.identifier(e),n.identifier(e)))),s=n.exportNamedDeclaration(null,a);return e.insertAfter(s),e.replaceWith(r.node),e};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(80666));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}},41950:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isIdentifierStart=u,t.isIdentifierChar=c,t.isIdentifierName=function(e){let t=!0;for(let r=0,n=Array.from(e);r<n.length;r++){const e=n[r].codePointAt(0);if(t){if(!u(e))return!1;t=!1}else if(!c(e))return!1}return!t};let r="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",n="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿";const i=new RegExp("["+r+"]"),o=new RegExp("["+r+n+"]");r=n=null;const a=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,107,20,28,22,13,52,76,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,230,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8952,286,50,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,2357,44,11,6,17,0,370,43,1301,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42717,35,4148,12,221,3,5761,15,7472,3104,541,1507,4938],s=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,419,13,1495,6,110,6,6,9,4759,9,787719,239];function l(e,t){let r=65536;for(let n=0,i=t.length;n<i;n+=2){if(r+=t[n],r>e)return!1;if(r+=t[n+1],r>=e)return!0}return!1}function u(e){return e<65?36===e:e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&i.test(String.fromCharCode(e)):l(e,a)))}function c(e){return e<48?36===e:e<58||!(e<65)&&(e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&o.test(String.fromCharCode(e)):l(e,a)||l(e,s))))}},69762:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isIdentifierName",{enumerable:!0,get:function(){return n.isIdentifierName}}),Object.defineProperty(t,"isIdentifierChar",{enumerable:!0,get:function(){return n.isIdentifierChar}}),Object.defineProperty(t,"isIdentifierStart",{enumerable:!0,get:function(){return n.isIdentifierStart}}),Object.defineProperty(t,"isReservedWord",{enumerable:!0,get:function(){return i.isReservedWord}}),Object.defineProperty(t,"isStrictBindOnlyReservedWord",{enumerable:!0,get:function(){return i.isStrictBindOnlyReservedWord}}),Object.defineProperty(t,"isStrictBindReservedWord",{enumerable:!0,get:function(){return i.isStrictBindReservedWord}}),Object.defineProperty(t,"isStrictReservedWord",{enumerable:!0,get:function(){return i.isStrictReservedWord}}),Object.defineProperty(t,"isKeyword",{enumerable:!0,get:function(){return i.isKeyword}});var n=r(41950),i=r(70750)},70750:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isReservedWord=s,t.isStrictReservedWord=l,t.isStrictBindOnlyReservedWord=u,t.isStrictBindReservedWord=function(e,t){return l(e,t)||u(e)},t.isKeyword=function(e){return i.has(e)};const r=["implements","interface","let","package","private","protected","public","static","yield"],n=["eval","arguments"],i=new Set(["break","case","catch","continue","debugger","default","do","else","finally","for","function","if","return","switch","throw","try","var","const","while","with","new","this","super","class","extends","export","import","null","true","false","in","instanceof","typeof","void","delete"]),o=new Set(r),a=new Set(n);function s(e,t){return t&&"await"===e||"enum"===e}function l(e,t){return s(e,t)||o.has(e)}function u(e){return a.has(e)}},52944:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=(n=r(13198))&&n.__esModule?n:{default:n};const o=Object.create(null);var a=o;t.default=a;const s=e=>t=>({minVersion:e,ast:()=>i.default.program.ast(t)});o.typeof=s("7.0.0-beta.0")`
  export default function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) { return typeof obj; };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
          ? "symbol"
          : typeof obj;
      };
    }

    return _typeof(obj);
  }
`,o.jsx=s("7.0.0-beta.0")`
  var REACT_ELEMENT_TYPE;

  export default function _createRawReactElement(type, props, key, children) {
    if (!REACT_ELEMENT_TYPE) {
      REACT_ELEMENT_TYPE = (
        typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element")
      ) || 0xeac7;
    }

    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;

    if (!props && childrenLength !== 0) {
      // If we're going to assign props.children, we create a new object now
      // to avoid mutating defaultProps.
      props = {
        children: void 0,
      };
    }

    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = new Array(childrenLength);
      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 3];
      }
      props.children = childArray;
    }

    if (props && defaultProps) {
      for (var propName in defaultProps) {
        if (props[propName] === void 0) {
          props[propName] = defaultProps[propName];
        }
      }
    } else if (!props) {
      props = defaultProps || {};
    }

    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key === undefined ? null : '' + key,
      ref: null,
      props: props,
      _owner: null,
    };
  }
`,o.asyncIterator=s("7.0.0-beta.0")`
  export default function _asyncIterator(iterable) {
    var method
    if (typeof Symbol !== "undefined") {
      if (Symbol.asyncIterator) {
        method = iterable[Symbol.asyncIterator]
        if (method != null) return method.call(iterable);
      }
      if (Symbol.iterator) {
        method = iterable[Symbol.iterator]
        if (method != null) return method.call(iterable);
      }
    }
    throw new TypeError("Object is not async iterable");
  }
`,o.AwaitValue=s("7.0.0-beta.0")`
  export default function _AwaitValue(value) {
    this.wrapped = value;
  }
`,o.AsyncGenerator=s("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null,
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg)
        var value = result.value;
        var wrappedAwait = value instanceof AwaitValue;

        Promise.resolve(wrappedAwait ? value.wrapped : value).then(
          function (arg) {
            if (wrappedAwait) {
              resume(key === "return" ? "return" : "next", arg);
              return
            }

            settle(result.done ? "return" : "normal", arg);
          },
          function (err) { resume("throw", err); });
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({ value: value, done: true });
          break;
        case "throw":
          front.reject(value);
          break;
        default:
          front.resolve({ value: value, done: false });
          break;
      }

      front = front.next;
      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    // Hide "return" method if generator return is not supported
    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; };
  }

  AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };
  AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };
  AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };
`,o.wrapAsyncGenerator=s("7.0.0-beta.0")`
  import AsyncGenerator from "AsyncGenerator";

  export default function _wrapAsyncGenerator(fn) {
    return function () {
      return new AsyncGenerator(fn.apply(this, arguments));
    };
  }
`,o.awaitAsyncGenerator=s("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function _awaitAsyncGenerator(value) {
    return new AwaitValue(value);
  }
`,o.asyncGeneratorDelegate=s("7.0.0-beta.0")`
  export default function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {}, waiting = false;

    function pump(key, value) {
      waiting = true;
      value = new Promise(function (resolve) { resolve(inner[key](value)); });
      return { done: false, value: awaitWrap(value) };
    };

    if (typeof Symbol === "function" && Symbol.iterator) {
      iter[Symbol.iterator] = function () { return this; };
    }

    iter.next = function (value) {
      if (waiting) {
        waiting = false;
        return value;
      }
      return pump("next", value);
    };

    if (typeof inner.throw === "function") {
      iter.throw = function (value) {
        if (waiting) {
          waiting = false;
          throw value;
        }
        return pump("throw", value);
      };
    }

    if (typeof inner.return === "function") {
      iter.return = function (value) {
        if (waiting) {
          waiting = false;
          return value;
        }
        return pump("return", value);
      };
    }

    return iter;
  }
`,o.asyncToGenerator=s("7.0.0-beta.0")`
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  export default function _asyncToGenerator(fn) {
    return function () {
      var self = this, args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }
`,o.classCallCheck=s("7.0.0-beta.0")`
  export default function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
`,o.createClass=s("7.0.0-beta.0")`
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i ++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  export default function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
`,o.defineEnumerableProperties=s("7.0.0-beta.0")`
  export default function _defineEnumerableProperties(obj, descs) {
    for (var key in descs) {
      var desc = descs[key];
      desc.configurable = desc.enumerable = true;
      if ("value" in desc) desc.writable = true;
      Object.defineProperty(obj, key, desc);
    }

    // Symbols are not enumerated over by for-in loops. If native
    // Symbols are available, fetch all of the descs object's own
    // symbol properties and define them on our target object too.
    if (Object.getOwnPropertySymbols) {
      var objectSymbols = Object.getOwnPropertySymbols(descs);
      for (var i = 0; i < objectSymbols.length; i++) {
        var sym = objectSymbols[i];
        var desc = descs[sym];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, sym, desc);
      }
    }
    return obj;
  }
`,o.defaults=s("7.0.0-beta.0")`
  export default function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = Object.getOwnPropertyDescriptor(defaults, key);
      if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }
    return obj;
  }
`,o.defineProperty=s("7.0.0-beta.0")`
  export default function _defineProperty(obj, key, value) {
    // Shortcircuit the slow defineProperty path when possible.
    // We are trying to avoid issues where setters defined on the
    // prototype cause side effects under the fast path of simple
    // assignment. By checking for existence of the property with
    // the in operator, we can optimize most of this overhead away.
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
`,o.extends=s("7.0.0-beta.0")`
  export default function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };

    return _extends.apply(this, arguments);
  }
`,o.objectSpread=s("7.0.0-beta.0")`
  import defineProperty from "defineProperty";

  export default function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = (arguments[i] != null) ? Object(arguments[i]) : {};
      var ownKeys = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      ownKeys.forEach(function(key) {
        defineProperty(target, key, source[key]);
      });
    }
    return target;
  }
`,o.objectSpread2=s("7.5.0")`
  import defineProperty from "defineProperty";

  // This function is different to "Reflect.ownKeys". The enumerableOnly
  // filters on symbol properties only. Returned string properties are always
  // enumerable. It is good to use in objectSpread.

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }

  export default function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = (arguments[i] != null) ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }
    return target;
  }
`,o.inherits=s("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  export default function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }
`,o.inheritsLoose=s("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  export default function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    setPrototypeOf(subClass, superClass);
  }
`,o.getPrototypeOf=s("7.0.0-beta.0")`
  export default function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
  }
`,o.setPrototypeOf=s("7.0.0-beta.0")`
  export default function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
`,o.isNativeReflectConstruct=s("7.9.0")`
  export default function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;

    // core-js@3
    if (Reflect.construct.sham) return false;

    // Proxy can't be polyfilled. Every browser implemented
    // proxies before or at the same time as Reflect.construct,
    // so if they support Proxy they also support Reflect.construct.
    if (typeof Proxy === "function") return true;

    // Since Reflect.construct can't be properly polyfilled, some
    // implementations (e.g. core-js@2) don't set the correct internal slots.
    // Those polyfills don't allow us to subclass built-ins, so we need to
    // use our fallback implementation.
    try {
      // If the internal slots aren't set, this throws an error similar to
      //   TypeError: this is not a Date object.
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
      return true;
    } catch (e) {
      return false;
    }
  }
`,o.construct=s("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";

  export default function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      // NOTE: If Parent !== Class, the correct __proto__ is set *after*
      //       calling the constructor.
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    // Avoid issues with Class being present but undefined when it wasn't
    // present in the original call.
    return _construct.apply(null, arguments);
  }
`,o.isNativeFunction=s("7.0.0-beta.0")`
  export default function _isNativeFunction(fn) {
    // Note: This function returns "true" for core-js functions.
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
`,o.wrapNativeSuper=s("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";
  import setPrototypeOf from "setPrototypeOf";
  import isNativeFunction from "isNativeFunction";
  import construct from "construct";

  export default function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor)
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true,
        }
      });

      return setPrototypeOf(Wrapper, Class);
    }

    return _wrapNativeSuper(Class)
  }
`,o.instanceof=s("7.0.0-beta.0")`
  export default function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return !!right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  }
`,o.interopRequireDefault=s("7.0.0-beta.0")`
  export default function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
`,o.interopRequireWildcard=s("7.0.0-beta.0")`
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;

    var cache = new WeakMap();
    _getRequireWildcardCache = function () { return cache; };
    return cache;
  }

  export default function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
      return { default: obj }
    }

    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor
          ? Object.getOwnPropertyDescriptor(obj, key)
          : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
`,o.newArrowCheck=s("7.0.0-beta.0")`
  export default function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  }
`,o.objectDestructuringEmpty=s("7.0.0-beta.0")`
  export default function _objectDestructuringEmpty(obj) {
    if (obj == null) throw new TypeError("Cannot destructure undefined");
  }
`,o.objectWithoutPropertiesLoose=s("7.0.0-beta.0")`
  export default function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};

    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }
`,o.objectWithoutProperties=s("7.0.0-beta.0")`
  import objectWithoutPropertiesLoose from "objectWithoutPropertiesLoose";

  export default function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }
`,o.assertThisInitialized=s("7.0.0-beta.0")`
  export default function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
`,o.possibleConstructorReturn=s("7.0.0-beta.0")`
  import assertThisInitialized from "assertThisInitialized";

  export default function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return assertThisInitialized(self);
  }
`,o.createSuper=s("7.9.0")`
  import getPrototypeOf from "getPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";
  import possibleConstructorReturn from "possibleConstructorReturn";

  export default function _createSuper(Derived) {
    var hasNativeReflectConstruct = isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        // NOTE: This doesn't work if this.__proto__.constructor has been modified.
        var NewTarget = getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return possibleConstructorReturn(this, result);
    }
  }
 `,o.superPropBase=s("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";

  export default function _superPropBase(object, property) {
    // Yes, this throws if object is null to being with, that's on purpose.
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
`,o.get=s("7.0.0-beta.0")`
  import superPropBase from "superPropBase";

  export default function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = superPropBase(target, property);

        if (!base) return;

        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }
    return _get(target, property, receiver || target);
  }
`,o.set=s("7.0.0-beta.0")`
  import superPropBase from "superPropBase";
  import defineProperty from "defineProperty";

  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = superPropBase(target, property);
        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);
          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            // Both getter and non-writable fall into this.
            return false;
          }
        }

        // Without a super that defines the property, spec boils down to
        // "define on receiver" for some reason.
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
          if (!desc.writable) {
            // Setter, getter, and non-writable fall into this.
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          // Avoid setters that may be defined on Sub's prototype, but not on
          // the instance.
          defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  export default function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }
`,o.taggedTemplateLiteral=s("7.0.0-beta.0")`
  export default function _taggedTemplateLiteral(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    return Object.freeze(Object.defineProperties(strings, {
        raw: { value: Object.freeze(raw) }
    }));
  }
`,o.taggedTemplateLiteralLoose=s("7.0.0-beta.0")`
  export default function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    strings.raw = raw;
    return strings;
  }
`,o.readOnlyError=s("7.0.0-beta.0")`
  export default function _readOnlyError(name) {
    throw new TypeError("\\"" + name + "\\" is read-only");
  }
`,o.writeOnlyError=s("7.12.13")`
  export default function _writeOnlyError(name) {
    throw new TypeError("\\"" + name + "\\" is write-only");
  }
`,o.classNameTDZError=s("7.0.0-beta.0")`
  export default function _classNameTDZError(name) {
    throw new Error("Class \\"" + name + "\\" cannot be referenced in computed property keys.");
  }
`,o.temporalUndefined=s("7.0.0-beta.0")`
  // This function isn't mean to be called, but to be used as a reference.
  // We can't use a normal object because it isn't hoisted.
  export default function _temporalUndefined() {}
`,o.tdz=s("7.5.5")`
  export default function _tdzError(name) {
    throw new ReferenceError(name + " is not defined - temporal dead zone");
  }
`,o.temporalRef=s("7.0.0-beta.0")`
  import undef from "temporalUndefined";
  import err from "tdz";

  export default function _temporalRef(val, name) {
    return val === undef ? err(name) : val;
  }
`,o.slicedToArray=s("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimit from "iterableToArrayLimit";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArray(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimit(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`,o.slicedToArrayLoose=s("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimitLoose from "iterableToArrayLimitLoose";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArrayLoose(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimitLoose(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`,o.toArray=s("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _toArray(arr) {
    return (
      arrayWithHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableRest()
    );
  }
`,o.toConsumableArray=s("7.0.0-beta.0")`
  import arrayWithoutHoles from "arrayWithoutHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableSpread from "nonIterableSpread";

  export default function _toConsumableArray(arr) {
    return (
      arrayWithoutHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableSpread()
    );
  }
`,o.arrayWithoutHoles=s("7.0.0-beta.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray(arr);
  }
`,o.arrayWithHoles=s("7.0.0-beta.0")`
  export default function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
`,o.maybeArrayLike=s("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _maybeArrayLike(next, arr, i) {
    if (arr && !Array.isArray(arr) && typeof arr.length === "number") {
      var len = arr.length;
      return arrayLikeToArray(arr, i !== void 0 && i < len ? i : len);
    }
    return next(arr, i);
  }
`,o.iterableToArray=s("7.0.0-beta.0")`
  export default function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }
`,o.iterableToArrayLimit=s("7.0.0-beta.0")`
  export default function _iterableToArrayLimit(arr, i) {
    // this is an expanded form of \`for...of\` that properly supports abrupt completions of
    // iterators etc. variable names have been minimised to reduce the size of this massive
    // helper. sometimes spec compliance is annoying :(
    //
    // _n = _iteratorNormalCompletion
    // _d = _didIteratorError
    // _e = _iteratorError
    // _i = _iterator
    // _s = _step

    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
`,o.iterableToArrayLimitLoose=s("7.0.0-beta.0")`
  export default function _iterableToArrayLimitLoose(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;

    var _arr = [];
    for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      _arr.push(_step.value);
      if (i && _arr.length === i) break;
    }
    return _arr;
  }
`,o.unsupportedIterableToArray=s("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return arrayLikeToArray(o, minLen);
  }
`,o.arrayLikeToArray=s("7.9.0")`
  export default function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
`,o.nonIterableSpread=s("7.0.0-beta.0")`
  export default function _nonIterableSpread() {
    throw new TypeError(
      "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`,o.nonIterableRest=s("7.0.0-beta.0")`
  export default function _nonIterableRest() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`,o.createForOfIteratorHelper=s("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  // s: start (create the iterator)
  // n: next
  // e: error (called whenever something throws)
  // f: finish (always called at the end)

  export default function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      // Fallback for engines without symbol support
      if (
        Array.isArray(o) ||
        (it = unsupportedIterableToArray(o)) ||
        (allowArrayLike && o && typeof o.length === "number")
      ) {
        if (it) o = it;
        var i = 0;
        var F = function(){};
        return {
          s: F,
          n: function() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          },
          e: function(e) { throw e; },
          f: F,
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true, didErr = false, err;

    return {
      s: function() {
        it = o[Symbol.iterator]();
      },
      n: function() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function(e) {
        didErr = true;
        err = e;
      },
      f: function() {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
`,o.createForOfIteratorHelperLoose=s("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  export default function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      // Fallback for engines without symbol support
      if (
        Array.isArray(o) ||
        (it = unsupportedIterableToArray(o)) ||
        (allowArrayLike && o && typeof o.length === "number")
      ) {
        if (it) o = it;
        var i = 0;
        return function() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        }
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    it = o[Symbol.iterator]();
    return it.next.bind(it);
  }
`,o.skipFirstGeneratorNext=s("7.0.0-beta.0")`
  export default function _skipFirstGeneratorNext(fn) {
    return function () {
      var it = fn.apply(this, arguments);
      it.next();
      return it;
    }
  }
`,o.toPrimitive=s("7.1.5")`
  export default function _toPrimitive(
    input,
    hint /*: "default" | "string" | "number" | void */
  ) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
`,o.toPropertyKey=s("7.1.5")`
  import toPrimitive from "toPrimitive";

  export default function _toPropertyKey(arg) {
    var key = toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
`,o.initializerWarningHelper=s("7.0.0-beta.0")`
    export default function _initializerWarningHelper(descriptor, context){
        throw new Error(
          'Decorating class property failed. Please ensure that ' +
          'proposal-class-properties is enabled and runs after the decorators transform.'
        );
    }
`,o.initializerDefineProperty=s("7.0.0-beta.0")`
    export default function _initializerDefineProperty(target, property, descriptor, context){
        if (!descriptor) return;

        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0,
        });
    }
`,o.applyDecoratedDescriptor=s("7.0.0-beta.0")`
    export default function _applyDecoratedDescriptor(target, property, decorators, descriptor, context){
        var desc = {};
        Object.keys(descriptor).forEach(function(key){
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer){
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator){
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0){
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0){
            Object.defineProperty(target, property, desc);
            desc = null;
        }

        return desc;
    }
`,o.classPrivateFieldLooseKey=s("7.0.0-beta.0")`
  var id = 0;
  export default function _classPrivateFieldKey(name) {
    return "__private_" + (id++) + "_" + name;
  }
`,o.classPrivateFieldLooseBase=s("7.0.0-beta.0")`
  export default function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
      throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
  }
`,o.classPrivateFieldGet=s("7.0.0-beta.0")`
  export default function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = privateMap.get(receiver);
    if (!descriptor) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
`,o.classPrivateFieldSet=s("7.0.0-beta.0")`
  export default function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = privateMap.get(receiver);
    if (!descriptor) {
      throw new TypeError("attempted to set private field on non-instance");
    }
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }

      descriptor.value = value;
    }

    return value;
  }
`,o.classPrivateFieldDestructureSet=s("7.4.4")`
  export default function _classPrivateFieldDestructureSet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to set private field on non-instance");
    }
    var descriptor = privateMap.get(receiver);
    if (descriptor.set) {
      if (!("__destrObj" in descriptor)) {
        descriptor.__destrObj = {
          set value(v) {
            descriptor.set.call(receiver, v)
          },
        };
      }
      return descriptor.__destrObj;
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }

      return descriptor;
    }
  }
`,o.classStaticPrivateFieldSpecGet=s("7.0.2")`
  export default function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
`,o.classStaticPrivateFieldSpecSet=s("7.0.2")`
  export default function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }
      descriptor.value = value;
    }

    return value;
  }
`,o.classStaticPrivateMethodGet=s("7.3.2")`
  export default function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
    return method;
  }
`,o.classStaticPrivateMethodSet=s("7.3.2")`
  export default function _classStaticPrivateMethodSet() {
    throw new TypeError("attempted to set read only static private field");
  }
`,o.decorate=s("7.1.5")`
  import toArray from "toArray";
  import toPropertyKey from "toPropertyKey";

  // These comments are stripped by @babel/template
  /*::
  type PropertyDescriptor =
    | {
        value: any,
        writable: boolean,
        configurable: boolean,
        enumerable: boolean,
      }
    | {
        get?: () => any,
        set?: (v: any) => void,
        configurable: boolean,
        enumerable: boolean,
      };

  type FieldDescriptor ={
    writable: boolean,
    configurable: boolean,
    enumerable: boolean,
  };

  type Placement = "static" | "prototype" | "own";
  type Key = string | symbol; // PrivateName is not supported yet.

  type ElementDescriptor =
    | {
        kind: "method",
        key: Key,
        placement: Placement,
        descriptor: PropertyDescriptor
      }
    | {
        kind: "field",
        key: Key,
        placement: Placement,
        descriptor: FieldDescriptor,
        initializer?: () => any,
      };

  // This is exposed to the user code
  type ElementObjectInput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
  };

  // This is exposed to the user code
  type ElementObjectOutput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
    extras?: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  // This is exposed to the user code
  type ClassObject = {
    [@@toStringTag]?: "Descriptor",
    kind: "class",
    elements: ElementDescriptor[],
  };

  type ElementDecorator = (descriptor: ElementObjectInput) => ?ElementObjectOutput;
  type ClassDecorator = (descriptor: ClassObject) => ?ClassObject;
  type ClassFinisher = <A, B>(cl: Class<A>) => Class<B>;

  // Only used by Babel in the transform output, not part of the spec.
  type ElementDefinition =
    | {
        kind: "method",
        value: any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
      }
    | {
        kind: "field",
        value: () => any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
    };

  declare function ClassFactory<C>(initialize: (instance: C) => void): {
    F: Class<C>,
    d: ElementDefinition[]
  }

  */

  /*::
  // Various combinations with/without extras and with one or many finishers

  type ElementFinisherExtras = {
    element: ElementDescriptor,
    finisher?: ClassFinisher,
    extras?: ElementDescriptor[],
  };

  type ElementFinishersExtras = {
    element: ElementDescriptor,
    finishers: ClassFinisher[],
    extras: ElementDescriptor[],
  };

  type ElementsFinisher = {
    elements: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  type ElementsFinishers = {
    elements: ElementDescriptor[],
    finishers: ClassFinisher[],
  };

  */

  /*::

  type Placements = {
    static: Key[],
    prototype: Key[],
    own: Key[],
  };

  */

  // ClassDefinitionEvaluation (Steps 26-*)
  export default function _decorate(
    decorators /*: ClassDecorator[] */,
    factory /*: ClassFactory */,
    superClass /*: ?Class<*> */,
    mixins /*: ?Array<Function> */,
  ) /*: Class<*> */ {
    var api = _getDecoratorsApi();
    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        api = mixins[i](api);
      }
    }

    var r = factory(function initialize(O) {
      api.initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = api.decorateClass(
      _coalesceClassElements(r.d.map(_createElementDescriptor)),
      decorators,
    );

    api.initializeClassElements(r.F, decorated.elements);

    return api.runClassFinishers(r.F, decorated.finishers);
  }

  function _getDecoratorsApi() {
    _getDecoratorsApi = function() {
      return api;
    };

    var api = {
      elementsDefinitionOrder: [["method"], ["field"]],

      // InitializeInstanceElements
      initializeInstanceElements: function(
        /*::<C>*/ O /*: C */,
        elements /*: ElementDescriptor[] */,
      ) {
        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            if (element.kind === kind && element.placement === "own") {
              this.defineClassElement(O, element);
            }
          }, this);
        }, this);
      },

      // InitializeClassElements
      initializeClassElements: function(
        /*::<C>*/ F /*: Class<C> */,
        elements /*: ElementDescriptor[] */,
      ) {
        var proto = F.prototype;

        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            var placement = element.placement;
            if (
              element.kind === kind &&
              (placement === "static" || placement === "prototype")
            ) {
              var receiver = placement === "static" ? F : proto;
              this.defineClassElement(receiver, element);
            }
          }, this);
        }, this);
      },

      // DefineClassElement
      defineClassElement: function(
        /*::<C>*/ receiver /*: C | Class<C> */,
        element /*: ElementDescriptor */,
      ) {
        var descriptor /*: PropertyDescriptor */ = element.descriptor;
        if (element.kind === "field") {
          var initializer = element.initializer;
          descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver),
          };
        }
        Object.defineProperty(receiver, element.key, descriptor);
      },

      // DecorateClass
      decorateClass: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var newElements /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];
        var placements /*: Placements */ = {
          static: [],
          prototype: [],
          own: [],
        };

        elements.forEach(function(element /*: ElementDescriptor */) {
          this.addElementPlacement(element, placements);
        }, this);

        elements.forEach(function(element /*: ElementDescriptor */) {
          if (!_hasDecorators(element)) return newElements.push(element);

          var elementFinishersExtras /*: ElementFinishersExtras */ = this.decorateElement(
            element,
            placements,
          );
          newElements.push(elementFinishersExtras.element);
          newElements.push.apply(newElements, elementFinishersExtras.extras);
          finishers.push.apply(finishers, elementFinishersExtras.finishers);
        }, this);

        if (!decorators) {
          return { elements: newElements, finishers: finishers };
        }

        var result /*: ElementsFinishers */ = this.decorateConstructor(
          newElements,
          decorators,
        );
        finishers.push.apply(finishers, result.finishers);
        result.finishers = finishers;

        return result;
      },

      // AddElementPlacement
      addElementPlacement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
        silent /*: boolean */,
      ) {
        var keys = placements[element.placement];
        if (!silent && keys.indexOf(element.key) !== -1) {
          throw new TypeError("Duplicated element (" + element.key + ")");
        }
        keys.push(element.key);
      },

      // DecorateElement
      decorateElement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
      ) /*: ElementFinishersExtras */ {
        var extras /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];

        for (
          var decorators = element.decorators, i = decorators.length - 1;
          i >= 0;
          i--
        ) {
          // (inlined) RemoveElementPlacement
          var keys = placements[element.placement];
          keys.splice(keys.indexOf(element.key), 1);

          var elementObject /*: ElementObjectInput */ = this.fromElementDescriptor(
            element,
          );
          var elementFinisherExtras /*: ElementFinisherExtras */ = this.toElementFinisherExtras(
            (0, decorators[i])(elementObject) /*: ElementObjectOutput */ ||
              elementObject,
          );

          element = elementFinisherExtras.element;
          this.addElementPlacement(element, placements);

          if (elementFinisherExtras.finisher) {
            finishers.push(elementFinisherExtras.finisher);
          }

          var newExtras /*: ElementDescriptor[] | void */ =
            elementFinisherExtras.extras;
          if (newExtras) {
            for (var j = 0; j < newExtras.length; j++) {
              this.addElementPlacement(newExtras[j], placements);
            }
            extras.push.apply(extras, newExtras);
          }
        }

        return { element: element, finishers: finishers, extras: extras };
      },

      // DecorateConstructor
      decorateConstructor: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var finishers /*: ClassFinisher[] */ = [];

        for (var i = decorators.length - 1; i >= 0; i--) {
          var obj /*: ClassObject */ = this.fromClassDescriptor(elements);
          var elementsAndFinisher /*: ElementsFinisher */ = this.toClassDescriptor(
            (0, decorators[i])(obj) /*: ClassObject */ || obj,
          );

          if (elementsAndFinisher.finisher !== undefined) {
            finishers.push(elementsAndFinisher.finisher);
          }

          if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;

            for (var j = 0; j < elements.length - 1; j++) {
              for (var k = j + 1; k < elements.length; k++) {
                if (
                  elements[j].key === elements[k].key &&
                  elements[j].placement === elements[k].placement
                ) {
                  throw new TypeError(
                    "Duplicated element (" + elements[j].key + ")",
                  );
                }
              }
            }
          }
        }

        return { elements: elements, finishers: finishers };
      },

      // FromElementDescriptor
      fromElementDescriptor: function(
        element /*: ElementDescriptor */,
      ) /*: ElementObject */ {
        var obj /*: ElementObject */ = {
          kind: element.kind,
          key: element.key,
          placement: element.placement,
          descriptor: element.descriptor,
        };

        var desc = {
          value: "Descriptor",
          configurable: true,
        };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        if (element.kind === "field") obj.initializer = element.initializer;

        return obj;
      },

      // ToElementDescriptors
      toElementDescriptors: function(
        elementObjects /*: ElementObject[] */,
      ) /*: ElementDescriptor[] */ {
        if (elementObjects === undefined) return;
        return toArray(elementObjects).map(function(elementObject) {
          var element = this.toElementDescriptor(elementObject);
          this.disallowProperty(elementObject, "finisher", "An element descriptor");
          this.disallowProperty(elementObject, "extras", "An element descriptor");
          return element;
        }, this);
      },

      // ToElementDescriptor
      toElementDescriptor: function(
        elementObject /*: ElementObject */,
      ) /*: ElementDescriptor */ {
        var kind = String(elementObject.kind);
        if (kind !== "method" && kind !== "field") {
          throw new TypeError(
            'An element descriptor\\'s .kind property must be either "method" or' +
              ' "field", but a decorator created an element descriptor with' +
              ' .kind "' +
              kind +
              '"',
          );
        }

        var key = toPropertyKey(elementObject.key);

        var placement = String(elementObject.placement);
        if (
          placement !== "static" &&
          placement !== "prototype" &&
          placement !== "own"
        ) {
          throw new TypeError(
            'An element descriptor\\'s .placement property must be one of "static",' +
              ' "prototype" or "own", but a decorator created an element descriptor' +
              ' with .placement "' +
              placement +
              '"',
          );
        }

        var descriptor /*: PropertyDescriptor */ = elementObject.descriptor;

        this.disallowProperty(elementObject, "elements", "An element descriptor");

        var element /*: ElementDescriptor */ = {
          kind: kind,
          key: key,
          placement: placement,
          descriptor: Object.assign({}, descriptor),
        };

        if (kind !== "field") {
          this.disallowProperty(elementObject, "initializer", "A method descriptor");
        } else {
          this.disallowProperty(
            descriptor,
            "get",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "set",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "value",
            "The property descriptor of a field descriptor",
          );

          element.initializer = elementObject.initializer;
        }

        return element;
      },

      toElementFinisherExtras: function(
        elementObject /*: ElementObject */,
      ) /*: ElementFinisherExtras */ {
        var element /*: ElementDescriptor */ = this.toElementDescriptor(
          elementObject,
        );
        var finisher /*: ClassFinisher */ = _optionalCallableProperty(
          elementObject,
          "finisher",
        );
        var extras /*: ElementDescriptors[] */ = this.toElementDescriptors(
          elementObject.extras,
        );

        return { element: element, finisher: finisher, extras: extras };
      },

      // FromClassDescriptor
      fromClassDescriptor: function(
        elements /*: ElementDescriptor[] */,
      ) /*: ClassObject */ {
        var obj = {
          kind: "class",
          elements: elements.map(this.fromElementDescriptor, this),
        };

        var desc = { value: "Descriptor", configurable: true };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        return obj;
      },

      // ToClassDescriptor
      toClassDescriptor: function(
        obj /*: ClassObject */,
      ) /*: ElementsFinisher */ {
        var kind = String(obj.kind);
        if (kind !== "class") {
          throw new TypeError(
            'A class descriptor\\'s .kind property must be "class", but a decorator' +
              ' created a class descriptor with .kind "' +
              kind +
              '"',
          );
        }

        this.disallowProperty(obj, "key", "A class descriptor");
        this.disallowProperty(obj, "placement", "A class descriptor");
        this.disallowProperty(obj, "descriptor", "A class descriptor");
        this.disallowProperty(obj, "initializer", "A class descriptor");
        this.disallowProperty(obj, "extras", "A class descriptor");

        var finisher = _optionalCallableProperty(obj, "finisher");
        var elements = this.toElementDescriptors(obj.elements);

        return { elements: elements, finisher: finisher };
      },

      // RunClassFinishers
      runClassFinishers: function(
        constructor /*: Class<*> */,
        finishers /*: ClassFinisher[] */,
      ) /*: Class<*> */ {
        for (var i = 0; i < finishers.length; i++) {
          var newConstructor /*: ?Class<*> */ = (0, finishers[i])(constructor);
          if (newConstructor !== undefined) {
            // NOTE: This should check if IsConstructor(newConstructor) is false.
            if (typeof newConstructor !== "function") {
              throw new TypeError("Finishers must return a constructor.");
            }
            constructor = newConstructor;
          }
        }
        return constructor;
      },

      disallowProperty: function(obj, name, objectType) {
        if (obj[name] !== undefined) {
          throw new TypeError(objectType + " can't have a ." + name + " property.");
        }
      }
    };

    return api;
  }

  // ClassElementEvaluation
  function _createElementDescriptor(
    def /*: ElementDefinition */,
  ) /*: ElementDescriptor */ {
    var key = toPropertyKey(def.key);

    var descriptor /*: PropertyDescriptor */;
    if (def.kind === "method") {
      descriptor = {
        value: def.value,
        writable: true,
        configurable: true,
        enumerable: false,
      };
    } else if (def.kind === "get") {
      descriptor = { get: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "set") {
      descriptor = { set: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "field") {
      descriptor = { configurable: true, writable: true, enumerable: true };
    }

    var element /*: ElementDescriptor */ = {
      kind: def.kind === "field" ? "field" : "method",
      key: key,
      placement: def.static
        ? "static"
        : def.kind === "field"
        ? "own"
        : "prototype",
      descriptor: descriptor,
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;

    return element;
  }

  // CoalesceGetterSetter
  function _coalesceGetterSetter(
    element /*: ElementDescriptor */,
    other /*: ElementDescriptor */,
  ) {
    if (element.descriptor.get !== undefined) {
      other.descriptor.get = element.descriptor.get;
    } else {
      other.descriptor.set = element.descriptor.set;
    }
  }

  // CoalesceClassElements
  function _coalesceClassElements(
    elements /*: ElementDescriptor[] */,
  ) /*: ElementDescriptor[] */ {
    var newElements /*: ElementDescriptor[] */ = [];

    var isSameElement = function(
      other /*: ElementDescriptor */,
    ) /*: boolean */ {
      return (
        other.kind === "method" &&
        other.key === element.key &&
        other.placement === element.placement
      );
    };

    for (var i = 0; i < elements.length; i++) {
      var element /*: ElementDescriptor */ = elements[i];
      var other /*: ElementDescriptor */;

      if (
        element.kind === "method" &&
        (other = newElements.find(isSameElement))
      ) {
        if (
          _isDataDescriptor(element.descriptor) ||
          _isDataDescriptor(other.descriptor)
        ) {
          if (_hasDecorators(element) || _hasDecorators(other)) {
            throw new ReferenceError(
              "Duplicated methods (" + element.key + ") can't be decorated.",
            );
          }
          other.descriptor = element.descriptor;
        } else {
          if (_hasDecorators(element)) {
            if (_hasDecorators(other)) {
              throw new ReferenceError(
                "Decorators can't be placed on different accessors with for " +
                  "the same property (" +
                  element.key +
                  ").",
              );
            }
            other.decorators = element.decorators;
          }
          _coalesceGetterSetter(element, other);
        }
      } else {
        newElements.push(element);
      }
    }

    return newElements;
  }

  function _hasDecorators(element /*: ElementDescriptor */) /*: boolean */ {
    return element.decorators && element.decorators.length;
  }

  function _isDataDescriptor(desc /*: PropertyDescriptor */) /*: boolean */ {
    return (
      desc !== undefined &&
      !(desc.value === undefined && desc.writable === undefined)
    );
  }

  function _optionalCallableProperty /*::<T>*/(
    obj /*: T */,
    name /*: $Keys<T> */,
  ) /*: ?Function */ {
    var value = obj[name];
    if (value !== undefined && typeof value !== "function") {
      throw new TypeError("Expected '" + name + "' to be a function");
    }
    return value;
  }

`,o.classPrivateMethodGet=s("7.1.6")`
  export default function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
  }
`,o.classPrivateMethodSet=s("7.1.6")`
  export default function _classPrivateMethodSet() {
    throw new TypeError("attempted to reassign private method");
  }
`,o.wrapRegExp=s("7.2.6")`
  import wrapNativeSuper from "wrapNativeSuper";
  import getPrototypeOf from "getPrototypeOf";
  import possibleConstructorReturn from "possibleConstructorReturn";
  import inherits from "inherits";

  export default function _wrapRegExp(re, groups) {
    _wrapRegExp = function(re, groups) {
      return new BabelRegExp(re, undefined, groups);
    };

    var _RegExp = wrapNativeSuper(RegExp);
    var _super = RegExp.prototype;
    var _groups = new WeakMap();

    function BabelRegExp(re, flags, groups) {
      var _this = _RegExp.call(this, re, flags);
      // if the regex is recreated with 'g' flag
      _groups.set(_this, groups || _groups.get(re));
      return _this;
    }
    inherits(BabelRegExp, _RegExp);

    BabelRegExp.prototype.exec = function(str) {
      var result = _super.exec.call(this, str);
      if (result) result.groups = buildGroups(result, this);
      return result;
    };
    BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
      if (typeof substitution === "string") {
        var groups = _groups.get(this);
        return _super[Symbol.replace].call(
          this,
          str,
          substitution.replace(/\\$<([^>]+)>/g, function(_, name) {
            return "$" + groups[name];
          })
        );
      } else if (typeof substitution === "function") {
        var _this = this;
        return _super[Symbol.replace].call(
          this,
          str,
          function() {
            var args = [];
            args.push.apply(args, arguments);
            if (typeof args[args.length - 1] !== "object") {
              // Modern engines already pass result.groups as the last arg.
              args.push(buildGroups(args, _this));
            }
            return substitution.apply(this, args);
          }
        );
      } else {
        return _super[Symbol.replace].call(this, str, substitution);
      }
    }

    function buildGroups(result, re) {
      // NOTE: This function should return undefined if there are no groups,
      // but in that case Babel doesn't add the wrapper anyway.

      var g = _groups.get(re);
      return Object.keys(g).reduce(function(groups, name) {
        groups[name] = result[g[name]];
        return groups;
      }, Object.create(null));
    }

    return _wrapRegExp.apply(this, arguments);
  }