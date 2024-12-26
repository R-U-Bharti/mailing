import{r as W,j as K,c as Le,S as rt,e as st,k as ot}from"./index-53ge1A5h.js";const it=W.forwardRef(({className:e,type:t,...n},r)=>K.jsx("input",{type:t,className:Le("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:r,...n}));it.displayName="Input";var at=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],ct=at.reduce((e,t)=>{const n=W.forwardRef((r,s)=>{const{asChild:o,...i}=r,c=o?rt:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),K.jsx(c,{...i,ref:s})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function vn(e,t){e&&st.flushSync(()=>e.dispatchEvent(t))}var lt="Label",_e=W.forwardRef((e,t)=>K.jsx(ct.label,{...e,ref:t,onMouseDown:n=>{var s;n.target.closest("button, input, select, textarea")||((s=e.onMouseDown)==null||s.call(e,n),!n.defaultPrevented&&n.detail>1&&n.preventDefault())}}));_e.displayName=lt;var Fe=_e;const ut=ot("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),ft=W.forwardRef(({className:e,...t},n)=>K.jsx(Fe,{ref:n,className:Le(ut(),e),...t}));ft.displayName=Fe.displayName;function Jn(){const e="https://exam-atlas-server.onrender.com";return{loginApi:`${e}/api/auth/login`,registerApi:`${e}/api/auth/register`,inboxApi:`${e}/api/mail/inbox`,inboxByIdApi:n=>`${e}/api/mail/inbox/${n}`}}function De(e,t){return function(){return e.apply(t,arguments)}}const{toString:dt}=Object.prototype,{getPrototypeOf:fe}=Object,X=(e=>t=>{const n=dt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),N=e=>(e=e.toLowerCase(),t=>X(t)===e),G=e=>t=>typeof t===e,{isArray:U}=Array,q=G("undefined");function pt(e){return e!==null&&!q(e)&&e.constructor!==null&&!q(e.constructor)&&x(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Be=N("ArrayBuffer");function ht(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Be(e.buffer),t}const mt=G("string"),x=G("function"),Ue=G("number"),Q=e=>e!==null&&typeof e=="object",yt=e=>e===!0||e===!1,z=e=>{if(X(e)!=="object")return!1;const t=fe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},bt=N("Date"),wt=N("File"),Et=N("Blob"),gt=N("FileList"),Rt=e=>Q(e)&&x(e.pipe),St=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||x(e.append)&&((t=X(e))==="formdata"||t==="object"&&x(e.toString)&&e.toString()==="[object FormData]"))},Ot=N("URLSearchParams"),[Tt,At,xt,Nt]=["ReadableStream","Request","Response","Headers"].map(N),Ct=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function I(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),U(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function ke(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const F=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,je=e=>!q(e)&&e!==F;function oe(){const{caseless:e}=je(this)&&this||{},t={},n=(r,s)=>{const o=e&&ke(t,s)||s;z(t[o])&&z(r)?t[o]=oe(t[o],r):z(r)?t[o]=oe({},r):U(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&I(arguments[r],n);return t}const Pt=(e,t,n,{allOwnKeys:r}={})=>(I(t,(s,o)=>{n&&x(s)?e[o]=De(s,n):e[o]=s},{allOwnKeys:r}),e),Lt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),_t=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Ft=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&fe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Dt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Bt=e=>{if(!e)return null;if(U(e))return e;let t=e.length;if(!Ue(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Ut=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&fe(Uint8Array)),kt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},jt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},qt=N("HTMLFormElement"),It=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ye=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ht=N("RegExp"),qe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};I(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Mt=e=>{qe(e,(t,n)=>{if(x(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(x(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},zt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return U(e)?r(e):r(String(e).split(t)),n},vt=()=>{},Jt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,te="abcdefghijklmnopqrstuvwxyz",be="0123456789",Ie={DIGIT:be,ALPHA:te,ALPHA_DIGIT:te+te.toUpperCase()+be},$t=(e=16,t=Ie.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Vt(e){return!!(e&&x(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Wt=e=>{const t=new Array(10),n=(r,s)=>{if(Q(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=U(r)?[]:{};return I(r,(i,c)=>{const f=n(i,s+1);!q(f)&&(o[c]=f)}),t[s]=void 0,o}}return r};return n(e,0)},Kt=N("AsyncFunction"),Xt=e=>e&&(Q(e)||x(e))&&x(e.then)&&x(e.catch),He=((e,t)=>e?setImmediate:t?((n,r)=>(F.addEventListener("message",({source:s,data:o})=>{s===F&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),F.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",x(F.postMessage)),Gt=typeof queueMicrotask<"u"?queueMicrotask.bind(F):typeof process<"u"&&process.nextTick||He,a={isArray:U,isArrayBuffer:Be,isBuffer:pt,isFormData:St,isArrayBufferView:ht,isString:mt,isNumber:Ue,isBoolean:yt,isObject:Q,isPlainObject:z,isReadableStream:Tt,isRequest:At,isResponse:xt,isHeaders:Nt,isUndefined:q,isDate:bt,isFile:wt,isBlob:Et,isRegExp:Ht,isFunction:x,isStream:Rt,isURLSearchParams:Ot,isTypedArray:Ut,isFileList:gt,forEach:I,merge:oe,extend:Pt,trim:Ct,stripBOM:Lt,inherits:_t,toFlatObject:Ft,kindOf:X,kindOfTest:N,endsWith:Dt,toArray:Bt,forEachEntry:kt,matchAll:jt,isHTMLForm:qt,hasOwnProperty:ye,hasOwnProp:ye,reduceDescriptors:qe,freezeMethods:Mt,toObjectSet:zt,toCamelCase:It,noop:vt,toFiniteNumber:Jt,findKey:ke,global:F,isContextDefined:je,ALPHABET:Ie,generateString:$t,isSpecCompliantForm:Vt,toJSONObject:Wt,isAsyncFn:Kt,isThenable:Xt,setImmediate:He,asap:Gt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});const Me=m.prototype,ze={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ze[e]={value:e}});Object.defineProperties(m,ze);Object.defineProperty(Me,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Me);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Qt=null;function ie(e){return a.isPlainObject(e)||a.isArray(e)}function ve(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function we(e,t,n){return e?e.concat(t).map(function(s,o){return s=ve(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Zt(e){return a.isArray(e)&&!e.some(ie)}const Yt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Z(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,h){return!a.isUndefined(h[y])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!f&&a.isBlob(p))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?f&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,y,h){let w=p;if(p&&!h&&typeof p=="object"){if(a.endsWith(y,"{}"))y=r?y:y.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&Zt(p)||(a.isFileList(p)||a.endsWith(y,"[]"))&&(w=a.toArray(p)))return y=ve(y),w.forEach(function(S,P){!(a.isUndefined(S)||S===null)&&t.append(i===!0?we([y],P,o):i===null?y:y+"[]",l(S))}),!1}return ie(p)?!0:(t.append(we(h,y,o),l(p)),!1)}const d=[],b=Object.assign(Yt,{defaultVisitor:u,convertValue:l,isVisitable:ie});function E(p,y){if(!a.isUndefined(p)){if(d.indexOf(p)!==-1)throw Error("Circular reference detected in "+y.join("."));d.push(p),a.forEach(p,function(w,g){(!(a.isUndefined(w)||w===null)&&s.call(t,w,a.isString(g)?g.trim():g,y,b))===!0&&E(w,y?y.concat(g):[g])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function Ee(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function de(e,t){this._pairs=[],e&&Z(e,this,t)}const Je=de.prototype;Je.append=function(t,n){this._pairs.push([t,n])};Je.toString=function(t){const n=t?function(r){return t.call(this,r,Ee)}:Ee;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function en(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function $e(e,t,n){if(!t)return e;const r=n&&n.encode||en;a.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new de(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class ge{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ve={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},tn=typeof URLSearchParams<"u"?URLSearchParams:de,nn=typeof FormData<"u"?FormData:null,rn=typeof Blob<"u"?Blob:null,sn={isBrowser:!0,classes:{URLSearchParams:tn,FormData:nn,Blob:rn},protocols:["http","https","file","blob","url","data"]},pe=typeof window<"u"&&typeof document<"u",ae=typeof navigator=="object"&&navigator||void 0,on=pe&&(!ae||["ReactNative","NativeScript","NS"].indexOf(ae.product)<0),an=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",cn=pe&&window.location.href||"http://localhost",ln=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:pe,hasStandardBrowserEnv:on,hasStandardBrowserWebWorkerEnv:an,navigator:ae,origin:cn},Symbol.toStringTag,{value:"Module"})),O={...ln,...sn};function un(e,t){return Z(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function fn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function dn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function We(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=dn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(fn(r),s,n,0)}),n}return null}function pn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const H={transitional:Ve,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(We(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return un(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return Z(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),pn(t)):t}],transformResponse:[function(t){const n=this.transitional||H.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{H.headers[e]={}});const hn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),mn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&hn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Re=Symbol("internals");function j(e){return e&&String(e).trim().toLowerCase()}function v(e){return e===!1||e==null?e:a.isArray(e)?e.map(v):String(e)}function yn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const bn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ne(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function wn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function En(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class A{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,f,l){const u=j(f);if(!u)throw new Error("header name must be a non-empty string");const d=a.findKey(s,u);(!d||s[d]===void 0||l===!0||l===void 0&&s[d]!==!1)&&(s[d||f]=v(c))}const i=(c,f)=>a.forEach(c,(l,u)=>o(l,u,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!bn(t))i(mn(t),n);else if(a.isHeaders(t))for(const[c,f]of t.entries())o(f,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=j(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return yn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=j(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ne(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=j(i),i){const c=a.findKey(r,i);c&&(!n||ne(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||ne(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=v(s),delete n[o];return}const c=t?wn(o):String(o).trim();c!==o&&delete n[o],n[c]=v(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Re]=this[Re]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=j(i);r[c]||(En(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}A.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(A.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(A);function re(e,t){const n=this||H,r=t||n,s=A.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ke(e){return!!(e&&e.__CANCEL__)}function k(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(k,m,{__CANCEL__:!0});function Xe(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function gn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Rn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const l=Date.now(),u=r[o];i||(i=l),n[s]=f,r[s]=l;let d=o,b=0;for(;d!==s;)b+=n[d++],d=d%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const E=u&&l-u;return E?Math.round(b*1e3/E):void 0}}function Sn(e,t){let n=0,r=1e3/t,s,o;const i=(l,u=Date.now())=>{n=u,s=null,o&&(clearTimeout(o),o=null),e.apply(null,l)};return[(...l)=>{const u=Date.now(),d=u-n;d>=r?i(l,u):(s=l,o||(o=setTimeout(()=>{o=null,i(s)},r-d)))},()=>s&&i(s)]}const $=(e,t,n=3)=>{let r=0;const s=Rn(50,250);return Sn(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,f=i-r,l=s(f),u=i<=c;r=i;const d={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:l||void 0,estimated:l&&c&&u?(c-i)/l:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(d)},n)},Se=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Oe=e=>(...t)=>a.asap(()=>e(...t)),On=O.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,O.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(O.origin),O.navigator&&/(msie|trident)/i.test(O.navigator.userAgent)):()=>!0,Tn=O.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function An(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function xn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ge(e,t){return e&&!An(t)?xn(e,t):t}const Te=e=>e instanceof A?{...e}:e;function B(e,t){t=t||{};const n={};function r(l,u,d,b){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:b},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,d,b){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,d,b)}else return r(l,u,d,b)}function o(l,u){if(!a.isUndefined(u))return r(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,d){if(d in t)return r(l,u);if(d in e)return r(void 0,l)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u,d)=>s(Te(l),Te(u),d,!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const d=f[u]||s,b=d(e[u],t[u],u);a.isUndefined(b)&&d!==c||(n[u]=b)}),n}const Qe=e=>{const t=B({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=A.from(i),t.url=$e(Ge(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(n)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[l,...u]=f?f.split(";").map(d=>d.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...u].join("; "))}}if(O.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&On(t.url))){const l=s&&o&&Tn.read(o);l&&i.set(s,l)}return t},Nn=typeof XMLHttpRequest<"u",Cn=Nn&&function(e){return new Promise(function(n,r){const s=Qe(e);let o=s.data;const i=A.from(s.headers).normalize();let{responseType:c,onUploadProgress:f,onDownloadProgress:l}=s,u,d,b,E,p;function y(){E&&E(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let h=new XMLHttpRequest;h.open(s.method.toUpperCase(),s.url,!0),h.timeout=s.timeout;function w(){if(!h)return;const S=A.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),T={data:!c||c==="text"||c==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:S,config:e,request:h};Xe(function(_){n(_),y()},function(_){r(_),y()},T),h=null}"onloadend"in h?h.onloadend=w:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(w)},h.onabort=function(){h&&(r(new m("Request aborted",m.ECONNABORTED,e,h)),h=null)},h.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let P=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const T=s.transitional||Ve;s.timeoutErrorMessage&&(P=s.timeoutErrorMessage),r(new m(P,T.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,h)),h=null},o===void 0&&i.setContentType(null),"setRequestHeader"in h&&a.forEach(i.toJSON(),function(P,T){h.setRequestHeader(T,P)}),a.isUndefined(s.withCredentials)||(h.withCredentials=!!s.withCredentials),c&&c!=="json"&&(h.responseType=s.responseType),l&&([b,p]=$(l,!0),h.addEventListener("progress",b)),f&&h.upload&&([d,E]=$(f),h.upload.addEventListener("progress",d),h.upload.addEventListener("loadend",E)),(s.cancelToken||s.signal)&&(u=S=>{h&&(r(!S||S.type?new k(null,e,h):S),h.abort(),h=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const g=gn(s.url);if(g&&O.protocols.indexOf(g)===-1){r(new m("Unsupported protocol "+g+":",m.ERR_BAD_REQUEST,e));return}h.send(o||null)})},Pn=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const o=function(l){if(!s){s=!0,c();const u=l instanceof Error?l:this.reason;r.abort(u instanceof m?u:new k(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{i=null,o(new m(`timeout ${t} of ms exceeded`,m.ETIMEDOUT))},t);const c=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(o):l.removeEventListener("abort",o)}),e=null)};e.forEach(l=>l.addEventListener("abort",o));const{signal:f}=r;return f.unsubscribe=()=>a.asap(c),f}},Ln=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},_n=async function*(e,t){for await(const n of Fn(e))yield*Ln(n,t)},Fn=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Ae=(e,t,n,r)=>{const s=_n(e,t);let o=0,i,c=f=>{i||(i=!0,r&&r(f))};return new ReadableStream({async pull(f){try{const{done:l,value:u}=await s.next();if(l){c(),f.close();return}let d=u.byteLength;if(n){let b=o+=d;n(b)}f.enqueue(new Uint8Array(u))}catch(l){throw c(l),l}},cancel(f){return c(f),s.return()}},{highWaterMark:2})},Y=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ze=Y&&typeof ReadableStream=="function",Dn=Y&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Ye=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Bn=Ze&&Ye(()=>{let e=!1;const t=new Request(O.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),xe=64*1024,ce=Ze&&Ye(()=>a.isReadableStream(new Response("").body)),V={stream:ce&&(e=>e.body)};Y&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!V[t]&&(V[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new m(`Response type '${t}' is not supported`,m.ERR_NOT_SUPPORT,r)})})})(new Response);const Un=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(O.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await Dn(e)).byteLength},kn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??Un(t)},jn=Y&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:l,headers:u,withCredentials:d="same-origin",fetchOptions:b}=Qe(e);l=l?(l+"").toLowerCase():"text";let E=Pn([s,o&&o.toAbortSignal()],i),p;const y=E&&E.unsubscribe&&(()=>{E.unsubscribe()});let h;try{if(f&&Bn&&n!=="get"&&n!=="head"&&(h=await kn(u,r))!==0){let T=new Request(t,{method:"POST",body:r,duplex:"half"}),L;if(a.isFormData(r)&&(L=T.headers.get("content-type"))&&u.setContentType(L),T.body){const[_,M]=Se(h,$(Oe(f)));r=Ae(T.body,xe,_,M)}}a.isString(d)||(d=d?"include":"omit");const w="credentials"in Request.prototype;p=new Request(t,{...b,signal:E,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:w?d:void 0});let g=await fetch(p);const S=ce&&(l==="stream"||l==="response");if(ce&&(c||S&&y)){const T={};["status","statusText","headers"].forEach(me=>{T[me]=g[me]});const L=a.toFiniteNumber(g.headers.get("content-length")),[_,M]=c&&Se(L,$(Oe(c),!0))||[];g=new Response(Ae(g.body,xe,_,()=>{M&&M(),y&&y()}),T)}l=l||"text";let P=await V[a.findKey(V,l)||"text"](g,e);return!S&&y&&y(),await new Promise((T,L)=>{Xe(T,L,{data:P,headers:A.from(g.headers),status:g.status,statusText:g.statusText,config:e,request:p})})}catch(w){throw y&&y(),w&&w.name==="TypeError"&&/fetch/i.test(w.message)?Object.assign(new m("Network Error",m.ERR_NETWORK,e,p),{cause:w.cause||w}):m.from(w,w&&w.code,e,p)}}),le={http:Qt,xhr:Cn,fetch:jn};a.forEach(le,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ne=e=>`- ${e}`,qn=e=>a.isFunction(e)||e===null||e===!1,et={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!qn(n)&&(r=le[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Ne).join(`
`):" "+Ne(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:le};function se(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new k(null,e)}function Ce(e){return se(e),e.headers=A.from(e.headers),e.data=re.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),et.getAdapter(e.adapter||H.adapter)(e).then(function(r){return se(e),r.data=re.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return Ke(r)||(se(e),r&&r.response&&(r.response.data=re.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const tt="1.7.9",ee={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ee[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Pe={};ee.transitional=function(t,n,r){function s(o,i){return"[Axios v"+tt+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Pe[i]&&(Pe[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};ee.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function In(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new m("option "+o+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const J={assertOptions:In,validators:ee},C=J.validators;class D{constructor(t){this.defaults=t,this.interceptors={request:new ge,response:new ge}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=B(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&J.assertOptions(r,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:J.assertOptions(s,{encode:C.function,serialize:C.function},!0)),J.assertOptions(n,{baseUrl:C.spelling("baseURL"),withXsrfToken:C.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=A.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(f=f&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const l=[];this.interceptors.response.forEach(function(y){l.push(y.fulfilled,y.rejected)});let u,d=0,b;if(!f){const p=[Ce.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,l),b=p.length,u=Promise.resolve(n);d<b;)u=u.then(p[d++],p[d++]);return u}b=c.length;let E=n;for(d=0;d<b;){const p=c[d++],y=c[d++];try{E=p(E)}catch(h){y.call(this,h);break}}try{u=Ce.call(this,E)}catch(p){return Promise.reject(p)}for(d=0,b=l.length;d<b;)u=u.then(l[d++],l[d++]);return u}getUri(t){t=B(this.defaults,t);const n=Ge(t.baseURL,t.url);return $e(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){D.prototype[t]=function(n,r){return this.request(B(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(B(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}D.prototype[t]=n(),D.prototype[t+"Form"]=n(!0)});class he{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new k(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new he(function(s){t=s}),cancel:t}}}function Hn(e){return function(n){return e.apply(null,n)}}function Mn(e){return a.isObject(e)&&e.isAxiosError===!0}const ue={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ue).forEach(([e,t])=>{ue[t]=e});function nt(e){const t=new D(e),n=De(D.prototype.request,t);return a.extend(n,D.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return nt(B(e,s))},n}const R=nt(H);R.Axios=D;R.CanceledError=k;R.CancelToken=he;R.isCancel=Ke;R.VERSION=tt;R.toFormData=Z;R.AxiosError=m;R.Cancel=R.CanceledError;R.all=function(t){return Promise.all(t)};R.spread=Hn;R.isAxiosError=Mn;R.mergeConfig=B;R.AxiosHeaders=A;R.formToJSON=e=>We(a.isHTMLForm(e)?new FormData(e):e);R.getAdapter=et.getAdapter;R.HttpStatusCode=ue;R.default=R;export{Jn as A,it as I,ft as L,ct as P,R as a,vn as d};