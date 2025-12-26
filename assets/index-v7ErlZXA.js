(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function oS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var a_={exports:{}},mc={},l_={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ml=Symbol.for("react.element"),aS=Symbol.for("react.portal"),lS=Symbol.for("react.fragment"),uS=Symbol.for("react.strict_mode"),cS=Symbol.for("react.profiler"),fS=Symbol.for("react.provider"),dS=Symbol.for("react.context"),hS=Symbol.for("react.forward_ref"),pS=Symbol.for("react.suspense"),mS=Symbol.for("react.memo"),gS=Symbol.for("react.lazy"),Nm=Symbol.iterator;function _S(n){return n===null||typeof n!="object"?null:(n=Nm&&n[Nm]||n["@@iterator"],typeof n=="function"?n:null)}var u_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},c_=Object.assign,f_={};function Ko(n,e,t){this.props=n,this.context=e,this.refs=f_,this.updater=t||u_}Ko.prototype.isReactComponent={};Ko.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ko.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function d_(){}d_.prototype=Ko.prototype;function Jh(n,e,t){this.props=n,this.context=e,this.refs=f_,this.updater=t||u_}var ep=Jh.prototype=new d_;ep.constructor=Jh;c_(ep,Ko.prototype);ep.isPureReactComponent=!0;var Um=Array.isArray,h_=Object.prototype.hasOwnProperty,tp={current:null},p_={key:!0,ref:!0,__self:!0,__source:!0};function m_(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)h_.call(e,i)&&!p_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ml,type:n,key:s,ref:o,props:r,_owner:tp.current}}function vS(n,e){return{$$typeof:ml,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function np(n){return typeof n=="object"&&n!==null&&n.$$typeof===ml}function xS(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Fm=/\/+/g;function zc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?xS(""+n.key):e.toString(36)}function pu(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case ml:case aS:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+zc(o,0):i,Um(r)?(t="",n!=null&&(t=n.replace(Fm,"$&/")+"/"),pu(r,e,t,"",function(u){return u})):r!=null&&(np(r)&&(r=vS(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Fm,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Um(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+zc(s,a);o+=pu(s,e,t,l,r)}else if(l=_S(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+zc(s,a++),o+=pu(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Cl(n,e,t){if(n==null)return n;var i=[],r=0;return pu(n,i,"","",function(s){return e.call(t,s,r++)}),i}function yS(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var _n={current:null},mu={transition:null},SS={ReactCurrentDispatcher:_n,ReactCurrentBatchConfig:mu,ReactCurrentOwner:tp};function g_(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:Cl,forEach:function(n,e,t){Cl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Cl(n,function(){e++}),e},toArray:function(n){return Cl(n,function(e){return e})||[]},only:function(n){if(!np(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};He.Component=Ko;He.Fragment=lS;He.Profiler=cS;He.PureComponent=Jh;He.StrictMode=uS;He.Suspense=pS;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SS;He.act=g_;He.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=c_({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=tp.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)h_.call(e,l)&&!p_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ml,type:n.type,key:r,ref:s,props:i,_owner:o}};He.createContext=function(n){return n={$$typeof:dS,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:fS,_context:n},n.Consumer=n};He.createElement=m_;He.createFactory=function(n){var e=m_.bind(null,n);return e.type=n,e};He.createRef=function(){return{current:null}};He.forwardRef=function(n){return{$$typeof:hS,render:n}};He.isValidElement=np;He.lazy=function(n){return{$$typeof:gS,_payload:{_status:-1,_result:n},_init:yS}};He.memo=function(n,e){return{$$typeof:mS,type:n,compare:e===void 0?null:e}};He.startTransition=function(n){var e=mu.transition;mu.transition={};try{n()}finally{mu.transition=e}};He.unstable_act=g_;He.useCallback=function(n,e){return _n.current.useCallback(n,e)};He.useContext=function(n){return _n.current.useContext(n)};He.useDebugValue=function(){};He.useDeferredValue=function(n){return _n.current.useDeferredValue(n)};He.useEffect=function(n,e){return _n.current.useEffect(n,e)};He.useId=function(){return _n.current.useId()};He.useImperativeHandle=function(n,e,t){return _n.current.useImperativeHandle(n,e,t)};He.useInsertionEffect=function(n,e){return _n.current.useInsertionEffect(n,e)};He.useLayoutEffect=function(n,e){return _n.current.useLayoutEffect(n,e)};He.useMemo=function(n,e){return _n.current.useMemo(n,e)};He.useReducer=function(n,e,t){return _n.current.useReducer(n,e,t)};He.useRef=function(n){return _n.current.useRef(n)};He.useState=function(n){return _n.current.useState(n)};He.useSyncExternalStore=function(n,e,t){return _n.current.useSyncExternalStore(n,e,t)};He.useTransition=function(){return _n.current.useTransition()};He.version="18.3.1";l_.exports=He;var Ve=l_.exports;const __=oS(Ve);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MS=Ve,ES=Symbol.for("react.element"),TS=Symbol.for("react.fragment"),wS=Object.prototype.hasOwnProperty,AS=MS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bS={key:!0,ref:!0,__self:!0,__source:!0};function v_(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)wS.call(e,i)&&!bS.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ES,type:n,key:s,ref:o,props:r,_owner:AS.current}}mc.Fragment=TS;mc.jsx=v_;mc.jsxs=v_;a_.exports=mc;var X=a_.exports,x_={exports:{}},$n={},y_={exports:{}},S_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,Q){var K=N.length;N.push(Q);e:for(;0<K;){var J=K-1>>>1,ve=N[J];if(0<r(ve,Q))N[J]=Q,N[K]=ve,K=J;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var Q=N[0],K=N.pop();if(K!==Q){N[0]=K;e:for(var J=0,ve=N.length,Pe=ve>>>1;J<Pe;){var Fe=2*(J+1)-1,ze=N[Fe],$=Fe+1,ee=N[$];if(0>r(ze,K))$<ve&&0>r(ee,ze)?(N[J]=ee,N[$]=K,J=$):(N[J]=ze,N[Fe]=K,J=Fe);else if($<ve&&0>r(ee,K))N[J]=ee,N[$]=K,J=$;else break e}}return Q}function r(N,Q){var K=N.sortIndex-Q.sortIndex;return K!==0?K:N.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,_=!1,m=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var Q=t(u);Q!==null;){if(Q.callback===null)i(u);else if(Q.startTime<=N)i(u),Q.sortIndex=Q.expirationTime,e(l,Q);else break;Q=t(u)}}function y(N){if(m=!1,x(N),!_)if(t(l)!==null)_=!0,G(E);else{var Q=t(u);Q!==null&&z(y,Q.startTime-N)}}function E(N,Q){_=!1,m&&(m=!1,d(C),C=-1),p=!0;var K=h;try{for(x(Q),f=t(l);f!==null&&(!(f.expirationTime>Q)||N&&!P());){var J=f.callback;if(typeof J=="function"){f.callback=null,h=f.priorityLevel;var ve=J(f.expirationTime<=Q);Q=n.unstable_now(),typeof ve=="function"?f.callback=ve:f===t(l)&&i(l),x(Q)}else i(l);f=t(l)}if(f!==null)var Pe=!0;else{var Fe=t(u);Fe!==null&&z(y,Fe.startTime-Q),Pe=!1}return Pe}finally{f=null,h=K,p=!1}}var w=!1,A=null,C=-1,S=5,T=-1;function P(){return!(n.unstable_now()-T<S)}function B(){if(A!==null){var N=n.unstable_now();T=N;var Q=!0;try{Q=A(!0,N)}finally{Q?U():(w=!1,A=null)}}else w=!1}var U;if(typeof v=="function")U=function(){v(B)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,Y=q.port2;q.port1.onmessage=B,U=function(){Y.postMessage(null)}}else U=function(){g(B,0)};function G(N){A=N,w||(w=!0,U())}function z(N,Q){C=g(function(){N(n.unstable_now())},Q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,G(E))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(h){case 1:case 2:case 3:var Q=3;break;default:Q=h}var K=h;h=Q;try{return N()}finally{h=K}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,Q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var K=h;h=N;try{return Q()}finally{h=K}},n.unstable_scheduleCallback=function(N,Q,K){var J=n.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?J+K:J):K=J,N){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=K+ve,N={id:c++,callback:Q,priorityLevel:N,startTime:K,expirationTime:ve,sortIndex:-1},K>J?(N.sortIndex=K,e(u,N),t(l)===null&&N===t(u)&&(m?(d(C),C=-1):m=!0,z(y,K-J))):(N.sortIndex=ve,e(l,N),_||p||(_=!0,G(E))),N},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(N){var Q=h;return function(){var K=h;h=Q;try{return N.apply(this,arguments)}finally{h=K}}}})(S_);y_.exports=S_;var CS=y_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RS=Ve,jn=CS;function se(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var M_=new Set,Va={};function Fs(n,e){Do(n,e),Do(n+"Capture",e)}function Do(n,e){for(Va[n]=e,n=0;n<e.length;n++)M_.add(e[n])}var lr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jf=Object.prototype.hasOwnProperty,PS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Om={},km={};function DS(n){return Jf.call(km,n)?!0:Jf.call(Om,n)?!1:PS.test(n)?km[n]=!0:(Om[n]=!0,!1)}function LS(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function IS(n,e,t,i){if(e===null||typeof e>"u"||LS(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var en={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){en[n]=new vn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];en[e]=new vn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){en[n]=new vn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){en[n]=new vn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){en[n]=new vn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){en[n]=new vn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){en[n]=new vn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){en[n]=new vn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){en[n]=new vn(n,5,!1,n.toLowerCase(),null,!1,!1)});var ip=/[\-:]([a-z])/g;function rp(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(ip,rp);en[e]=new vn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(ip,rp);en[e]=new vn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(ip,rp);en[e]=new vn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){en[n]=new vn(n,1,!1,n.toLowerCase(),null,!1,!1)});en.xlinkHref=new vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){en[n]=new vn(n,1,!1,n.toLowerCase(),null,!0,!0)});function sp(n,e,t,i){var r=en.hasOwnProperty(e)?en[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(IS(e,t,r,i)&&(t=null),i||r===null?DS(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var _r=RS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Rl=Symbol.for("react.element"),so=Symbol.for("react.portal"),oo=Symbol.for("react.fragment"),op=Symbol.for("react.strict_mode"),ed=Symbol.for("react.profiler"),E_=Symbol.for("react.provider"),T_=Symbol.for("react.context"),ap=Symbol.for("react.forward_ref"),td=Symbol.for("react.suspense"),nd=Symbol.for("react.suspense_list"),lp=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy"),w_=Symbol.for("react.offscreen"),Bm=Symbol.iterator;function na(n){return n===null||typeof n!="object"?null:(n=Bm&&n[Bm]||n["@@iterator"],typeof n=="function"?n:null)}var bt=Object.assign,Vc;function ya(n){if(Vc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Vc=e&&e[1]||""}return`
`+Vc+n}var Gc=!1;function Hc(n,e){if(!n||Gc)return"";Gc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Gc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?ya(n):""}function NS(n){switch(n.tag){case 5:return ya(n.type);case 16:return ya("Lazy");case 13:return ya("Suspense");case 19:return ya("SuspenseList");case 0:case 2:case 15:return n=Hc(n.type,!1),n;case 11:return n=Hc(n.type.render,!1),n;case 1:return n=Hc(n.type,!0),n;default:return""}}function id(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case oo:return"Fragment";case so:return"Portal";case ed:return"Profiler";case op:return"StrictMode";case td:return"Suspense";case nd:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case T_:return(n.displayName||"Context")+".Consumer";case E_:return(n._context.displayName||"Context")+".Provider";case ap:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case lp:return e=n.displayName||null,e!==null?e:id(n.type)||"Memo";case Ar:e=n._payload,n=n._init;try{return id(n(e))}catch{}}return null}function US(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return id(e);case 8:return e===op?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function A_(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function FS(n){var e=A_(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Pl(n){n._valueTracker||(n._valueTracker=FS(n))}function b_(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=A_(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Nu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function rd(n,e){var t=e.checked;return bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function zm(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Yr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function C_(n,e){e=e.checked,e!=null&&sp(n,"checked",e,!1)}function sd(n,e){C_(n,e);var t=Yr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?od(n,e.type,t):e.hasOwnProperty("defaultValue")&&od(n,e.type,Yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Vm(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function od(n,e,t){(e!=="number"||Nu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Sa=Array.isArray;function yo(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Yr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function ad(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return bt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Gm(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(se(92));if(Sa(t)){if(1<t.length)throw Error(se(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Yr(t)}}function R_(n,e){var t=Yr(e.value),i=Yr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Hm(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function P_(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ld(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?P_(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Dl,D_=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Dl=Dl||document.createElement("div"),Dl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Dl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ga(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},OS=["Webkit","ms","Moz","O"];Object.keys(Ca).forEach(function(n){OS.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ca[e]=Ca[n]})});function L_(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ca.hasOwnProperty(n)&&Ca[n]?(""+e).trim():e+"px"}function I_(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=L_(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var kS=bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ud(n,e){if(e){if(kS[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function cd(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fd=null;function up(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var dd=null,So=null,Mo=null;function Wm(n){if(n=vl(n)){if(typeof dd!="function")throw Error(se(280));var e=n.stateNode;e&&(e=yc(e),dd(n.stateNode,n.type,e))}}function N_(n){So?Mo?Mo.push(n):Mo=[n]:So=n}function U_(){if(So){var n=So,e=Mo;if(Mo=So=null,Wm(n),e)for(n=0;n<e.length;n++)Wm(e[n])}}function F_(n,e){return n(e)}function O_(){}var Wc=!1;function k_(n,e,t){if(Wc)return n(e,t);Wc=!0;try{return F_(n,e,t)}finally{Wc=!1,(So!==null||Mo!==null)&&(O_(),U_())}}function Ha(n,e){var t=n.stateNode;if(t===null)return null;var i=yc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(se(231,e,typeof t));return t}var hd=!1;if(lr)try{var ia={};Object.defineProperty(ia,"passive",{get:function(){hd=!0}}),window.addEventListener("test",ia,ia),window.removeEventListener("test",ia,ia)}catch{hd=!1}function BS(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Ra=!1,Uu=null,Fu=!1,pd=null,zS={onError:function(n){Ra=!0,Uu=n}};function VS(n,e,t,i,r,s,o,a,l){Ra=!1,Uu=null,BS.apply(zS,arguments)}function GS(n,e,t,i,r,s,o,a,l){if(VS.apply(this,arguments),Ra){if(Ra){var u=Uu;Ra=!1,Uu=null}else throw Error(se(198));Fu||(Fu=!0,pd=u)}}function Os(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function B_(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Xm(n){if(Os(n)!==n)throw Error(se(188))}function HS(n){var e=n.alternate;if(!e){if(e=Os(n),e===null)throw Error(se(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Xm(r),n;if(s===i)return Xm(r),e;s=s.sibling}throw Error(se(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(t.alternate!==i)throw Error(se(190))}if(t.tag!==3)throw Error(se(188));return t.stateNode.current===t?n:e}function z_(n){return n=HS(n),n!==null?V_(n):null}function V_(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=V_(n);if(e!==null)return e;n=n.sibling}return null}var G_=jn.unstable_scheduleCallback,jm=jn.unstable_cancelCallback,WS=jn.unstable_shouldYield,XS=jn.unstable_requestPaint,Ut=jn.unstable_now,jS=jn.unstable_getCurrentPriorityLevel,cp=jn.unstable_ImmediatePriority,H_=jn.unstable_UserBlockingPriority,Ou=jn.unstable_NormalPriority,YS=jn.unstable_LowPriority,W_=jn.unstable_IdlePriority,gc=null,Oi=null;function qS(n){if(Oi&&typeof Oi.onCommitFiberRoot=="function")try{Oi.onCommitFiberRoot(gc,n,void 0,(n.current.flags&128)===128)}catch{}}var Si=Math.clz32?Math.clz32:ZS,$S=Math.log,KS=Math.LN2;function ZS(n){return n>>>=0,n===0?32:31-($S(n)/KS|0)|0}var Ll=64,Il=4194304;function Ma(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ku(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ma(a):(s&=o,s!==0&&(i=Ma(s)))}else o=t&~r,o!==0?i=Ma(o):s!==0&&(i=Ma(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Si(e),r=1<<t,i|=n[t],e&=~r;return i}function QS(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function JS(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Si(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=QS(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function md(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function X_(){var n=Ll;return Ll<<=1,!(Ll&4194240)&&(Ll=64),n}function Xc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function gl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Si(e),n[e]=t}function eM(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Si(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function fp(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Si(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var at=0;function j_(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Y_,dp,q_,$_,K_,gd=!1,Nl=[],Or=null,kr=null,Br=null,Wa=new Map,Xa=new Map,Cr=[],tM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ym(n,e){switch(n){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":Br=null;break;case"pointerover":case"pointerout":Wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xa.delete(e.pointerId)}}function ra(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=vl(e),e!==null&&dp(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function nM(n,e,t,i,r){switch(e){case"focusin":return Or=ra(Or,n,e,t,i,r),!0;case"dragenter":return kr=ra(kr,n,e,t,i,r),!0;case"mouseover":return Br=ra(Br,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Wa.set(s,ra(Wa.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Xa.set(s,ra(Xa.get(s)||null,n,e,t,i,r)),!0}return!1}function Z_(n){var e=vs(n.target);if(e!==null){var t=Os(e);if(t!==null){if(e=t.tag,e===13){if(e=B_(t),e!==null){n.blockedOn=e,K_(n.priority,function(){q_(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function gu(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=_d(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);fd=i,t.target.dispatchEvent(i),fd=null}else return e=vl(t),e!==null&&dp(e),n.blockedOn=t,!1;e.shift()}return!0}function qm(n,e,t){gu(n)&&t.delete(e)}function iM(){gd=!1,Or!==null&&gu(Or)&&(Or=null),kr!==null&&gu(kr)&&(kr=null),Br!==null&&gu(Br)&&(Br=null),Wa.forEach(qm),Xa.forEach(qm)}function sa(n,e){n.blockedOn===e&&(n.blockedOn=null,gd||(gd=!0,jn.unstable_scheduleCallback(jn.unstable_NormalPriority,iM)))}function ja(n){function e(r){return sa(r,n)}if(0<Nl.length){sa(Nl[0],n);for(var t=1;t<Nl.length;t++){var i=Nl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Or!==null&&sa(Or,n),kr!==null&&sa(kr,n),Br!==null&&sa(Br,n),Wa.forEach(e),Xa.forEach(e),t=0;t<Cr.length;t++)i=Cr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Cr.length&&(t=Cr[0],t.blockedOn===null);)Z_(t),t.blockedOn===null&&Cr.shift()}var Eo=_r.ReactCurrentBatchConfig,Bu=!0;function rM(n,e,t,i){var r=at,s=Eo.transition;Eo.transition=null;try{at=1,hp(n,e,t,i)}finally{at=r,Eo.transition=s}}function sM(n,e,t,i){var r=at,s=Eo.transition;Eo.transition=null;try{at=4,hp(n,e,t,i)}finally{at=r,Eo.transition=s}}function hp(n,e,t,i){if(Bu){var r=_d(n,e,t,i);if(r===null)tf(n,e,i,zu,t),Ym(n,i);else if(nM(r,n,e,t,i))i.stopPropagation();else if(Ym(n,i),e&4&&-1<tM.indexOf(n)){for(;r!==null;){var s=vl(r);if(s!==null&&Y_(s),s=_d(n,e,t,i),s===null&&tf(n,e,i,zu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else tf(n,e,i,null,t)}}var zu=null;function _d(n,e,t,i){if(zu=null,n=up(i),n=vs(n),n!==null)if(e=Os(n),e===null)n=null;else if(t=e.tag,t===13){if(n=B_(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return zu=n,null}function Q_(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jS()){case cp:return 1;case H_:return 4;case Ou:case YS:return 16;case W_:return 536870912;default:return 16}default:return 16}}var Dr=null,pp=null,_u=null;function J_(){if(_u)return _u;var n,e=pp,t=e.length,i,r="value"in Dr?Dr.value:Dr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return _u=r.slice(n,1<i?1-i:void 0)}function vu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ul(){return!0}function $m(){return!1}function Kn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ul:$m,this.isPropagationStopped=$m,this}return bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),e}var Zo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mp=Kn(Zo),_l=bt({},Zo,{view:0,detail:0}),oM=Kn(_l),jc,Yc,oa,_c=bt({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gp,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==oa&&(oa&&n.type==="mousemove"?(jc=n.screenX-oa.screenX,Yc=n.screenY-oa.screenY):Yc=jc=0,oa=n),jc)},movementY:function(n){return"movementY"in n?n.movementY:Yc}}),Km=Kn(_c),aM=bt({},_c,{dataTransfer:0}),lM=Kn(aM),uM=bt({},_l,{relatedTarget:0}),qc=Kn(uM),cM=bt({},Zo,{animationName:0,elapsedTime:0,pseudoElement:0}),fM=Kn(cM),dM=bt({},Zo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),hM=Kn(dM),pM=bt({},Zo,{data:0}),Zm=Kn(pM),mM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_M={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vM(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=_M[n])?!!e[n]:!1}function gp(){return vM}var xM=bt({},_l,{key:function(n){if(n.key){var e=mM[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=vu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?gM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gp,charCode:function(n){return n.type==="keypress"?vu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?vu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),yM=Kn(xM),SM=bt({},_c,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qm=Kn(SM),MM=bt({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gp}),EM=Kn(MM),TM=bt({},Zo,{propertyName:0,elapsedTime:0,pseudoElement:0}),wM=Kn(TM),AM=bt({},_c,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),bM=Kn(AM),CM=[9,13,27,32],_p=lr&&"CompositionEvent"in window,Pa=null;lr&&"documentMode"in document&&(Pa=document.documentMode);var RM=lr&&"TextEvent"in window&&!Pa,ev=lr&&(!_p||Pa&&8<Pa&&11>=Pa),Jm=" ",eg=!1;function tv(n,e){switch(n){case"keyup":return CM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nv(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ao=!1;function PM(n,e){switch(n){case"compositionend":return nv(e);case"keypress":return e.which!==32?null:(eg=!0,Jm);case"textInput":return n=e.data,n===Jm&&eg?null:n;default:return null}}function DM(n,e){if(ao)return n==="compositionend"||!_p&&tv(n,e)?(n=J_(),_u=pp=Dr=null,ao=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ev&&e.locale!=="ko"?null:e.data;default:return null}}var LM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!LM[n.type]:e==="textarea"}function iv(n,e,t,i){N_(i),e=Vu(e,"onChange"),0<e.length&&(t=new mp("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Da=null,Ya=null;function IM(n){pv(n,0)}function vc(n){var e=co(n);if(b_(e))return n}function NM(n,e){if(n==="change")return e}var rv=!1;if(lr){var $c;if(lr){var Kc="oninput"in document;if(!Kc){var ng=document.createElement("div");ng.setAttribute("oninput","return;"),Kc=typeof ng.oninput=="function"}$c=Kc}else $c=!1;rv=$c&&(!document.documentMode||9<document.documentMode)}function ig(){Da&&(Da.detachEvent("onpropertychange",sv),Ya=Da=null)}function sv(n){if(n.propertyName==="value"&&vc(Ya)){var e=[];iv(e,Ya,n,up(n)),k_(IM,e)}}function UM(n,e,t){n==="focusin"?(ig(),Da=e,Ya=t,Da.attachEvent("onpropertychange",sv)):n==="focusout"&&ig()}function FM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return vc(Ya)}function OM(n,e){if(n==="click")return vc(e)}function kM(n,e){if(n==="input"||n==="change")return vc(e)}function BM(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Ti=typeof Object.is=="function"?Object.is:BM;function qa(n,e){if(Ti(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Jf.call(e,r)||!Ti(n[r],e[r]))return!1}return!0}function rg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function sg(n,e){var t=rg(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=rg(t)}}function ov(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?ov(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function av(){for(var n=window,e=Nu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Nu(n.document)}return e}function vp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function zM(n){var e=av(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&ov(t.ownerDocument.documentElement,t)){if(i!==null&&vp(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=sg(t,s);var o=sg(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var VM=lr&&"documentMode"in document&&11>=document.documentMode,lo=null,vd=null,La=null,xd=!1;function og(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;xd||lo==null||lo!==Nu(i)||(i=lo,"selectionStart"in i&&vp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),La&&qa(La,i)||(La=i,i=Vu(vd,"onSelect"),0<i.length&&(e=new mp("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=lo)))}function Fl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var uo={animationend:Fl("Animation","AnimationEnd"),animationiteration:Fl("Animation","AnimationIteration"),animationstart:Fl("Animation","AnimationStart"),transitionend:Fl("Transition","TransitionEnd")},Zc={},lv={};lr&&(lv=document.createElement("div").style,"AnimationEvent"in window||(delete uo.animationend.animation,delete uo.animationiteration.animation,delete uo.animationstart.animation),"TransitionEvent"in window||delete uo.transitionend.transition);function xc(n){if(Zc[n])return Zc[n];if(!uo[n])return n;var e=uo[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in lv)return Zc[n]=e[t];return n}var uv=xc("animationend"),cv=xc("animationiteration"),fv=xc("animationstart"),dv=xc("transitionend"),hv=new Map,ag="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(n,e){hv.set(n,e),Fs(e,[n])}for(var Qc=0;Qc<ag.length;Qc++){var Jc=ag[Qc],GM=Jc.toLowerCase(),HM=Jc[0].toUpperCase()+Jc.slice(1);Qr(GM,"on"+HM)}Qr(uv,"onAnimationEnd");Qr(cv,"onAnimationIteration");Qr(fv,"onAnimationStart");Qr("dblclick","onDoubleClick");Qr("focusin","onFocus");Qr("focusout","onBlur");Qr(dv,"onTransitionEnd");Do("onMouseEnter",["mouseout","mouseover"]);Do("onMouseLeave",["mouseout","mouseover"]);Do("onPointerEnter",["pointerout","pointerover"]);Do("onPointerLeave",["pointerout","pointerover"]);Fs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ea));function lg(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,GS(i,e,void 0,n),n.currentTarget=null}function pv(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;lg(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;lg(r,a,u),s=l}}}if(Fu)throw n=pd,Fu=!1,pd=null,n}function mt(n,e){var t=e[Td];t===void 0&&(t=e[Td]=new Set);var i=n+"__bubble";t.has(i)||(mv(e,n,2,!1),t.add(i))}function ef(n,e,t){var i=0;e&&(i|=4),mv(t,n,i,e)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function $a(n){if(!n[Ol]){n[Ol]=!0,M_.forEach(function(t){t!=="selectionchange"&&(WM.has(t)||ef(t,!1,n),ef(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ol]||(e[Ol]=!0,ef("selectionchange",!1,e))}}function mv(n,e,t,i){switch(Q_(e)){case 1:var r=rM;break;case 4:r=sM;break;default:r=hp}t=r.bind(null,e,t,n),r=void 0,!hd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function tf(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=vs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}k_(function(){var u=s,c=up(t),f=[];e:{var h=hv.get(n);if(h!==void 0){var p=mp,_=n;switch(n){case"keypress":if(vu(t)===0)break e;case"keydown":case"keyup":p=yM;break;case"focusin":_="focus",p=qc;break;case"focusout":_="blur",p=qc;break;case"beforeblur":case"afterblur":p=qc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=lM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=EM;break;case uv:case cv:case fv:p=fM;break;case dv:p=wM;break;case"scroll":p=oM;break;case"wheel":p=bM;break;case"copy":case"cut":case"paste":p=hM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Qm}var m=(e&4)!==0,g=!m&&n==="scroll",d=m?h!==null?h+"Capture":null:h;m=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,d!==null&&(y=Ha(v,d),y!=null&&m.push(Ka(v,y,x)))),g)break;v=v.return}0<m.length&&(h=new p(h,_,null,t,c),f.push({event:h,listeners:m}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==fd&&(_=t.relatedTarget||t.fromElement)&&(vs(_)||_[ur]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?vs(_):null,_!==null&&(g=Os(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(m=Km,y="onMouseLeave",d="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(m=Qm,y="onPointerLeave",d="onPointerEnter",v="pointer"),g=p==null?h:co(p),x=_==null?h:co(_),h=new m(y,v+"leave",p,t,c),h.target=g,h.relatedTarget=x,y=null,vs(c)===u&&(m=new m(d,v+"enter",_,t,c),m.target=x,m.relatedTarget=g,y=m),g=y,p&&_)t:{for(m=p,d=_,v=0,x=m;x;x=Vs(x))v++;for(x=0,y=d;y;y=Vs(y))x++;for(;0<v-x;)m=Vs(m),v--;for(;0<x-v;)d=Vs(d),x--;for(;v--;){if(m===d||d!==null&&m===d.alternate)break t;m=Vs(m),d=Vs(d)}m=null}else m=null;p!==null&&ug(f,h,p,m,!1),_!==null&&g!==null&&ug(f,g,_,m,!0)}}e:{if(h=u?co(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var E=NM;else if(tg(h))if(rv)E=kM;else{E=FM;var w=UM}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=OM);if(E&&(E=E(n,u))){iv(f,E,t,c);break e}w&&w(n,h,u),n==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&od(h,"number",h.value)}switch(w=u?co(u):window,n){case"focusin":(tg(w)||w.contentEditable==="true")&&(lo=w,vd=u,La=null);break;case"focusout":La=vd=lo=null;break;case"mousedown":xd=!0;break;case"contextmenu":case"mouseup":case"dragend":xd=!1,og(f,t,c);break;case"selectionchange":if(VM)break;case"keydown":case"keyup":og(f,t,c)}var A;if(_p)e:{switch(n){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else ao?tv(n,t)&&(C="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(ev&&t.locale!=="ko"&&(ao||C!=="onCompositionStart"?C==="onCompositionEnd"&&ao&&(A=J_()):(Dr=c,pp="value"in Dr?Dr.value:Dr.textContent,ao=!0)),w=Vu(u,C),0<w.length&&(C=new Zm(C,n,null,t,c),f.push({event:C,listeners:w}),A?C.data=A:(A=nv(t),A!==null&&(C.data=A)))),(A=RM?PM(n,t):DM(n,t))&&(u=Vu(u,"onBeforeInput"),0<u.length&&(c=new Zm("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=A))}pv(f,e)})}function Ka(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Vu(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ha(n,t),s!=null&&i.unshift(Ka(n,s,r)),s=Ha(n,e),s!=null&&i.push(Ka(n,s,r))),n=n.return}return i}function Vs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ug(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ha(t,s),l!=null&&o.unshift(Ka(t,l,a))):r||(l=Ha(t,s),l!=null&&o.push(Ka(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var XM=/\r\n?/g,jM=/\u0000|\uFFFD/g;function cg(n){return(typeof n=="string"?n:""+n).replace(XM,`
`).replace(jM,"")}function kl(n,e,t){if(e=cg(e),cg(n)!==e&&t)throw Error(se(425))}function Gu(){}var yd=null,Sd=null;function Md(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ed=typeof setTimeout=="function"?setTimeout:void 0,YM=typeof clearTimeout=="function"?clearTimeout:void 0,fg=typeof Promise=="function"?Promise:void 0,qM=typeof queueMicrotask=="function"?queueMicrotask:typeof fg<"u"?function(n){return fg.resolve(null).then(n).catch($M)}:Ed;function $M(n){setTimeout(function(){throw n})}function nf(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),ja(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);ja(e)}function zr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function dg(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Qo=Math.random().toString(36).slice(2),Di="__reactFiber$"+Qo,Za="__reactProps$"+Qo,ur="__reactContainer$"+Qo,Td="__reactEvents$"+Qo,KM="__reactListeners$"+Qo,ZM="__reactHandles$"+Qo;function vs(n){var e=n[Di];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ur]||t[Di]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=dg(n);n!==null;){if(t=n[Di])return t;n=dg(n)}return e}n=t,t=n.parentNode}return null}function vl(n){return n=n[Di]||n[ur],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function co(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(se(33))}function yc(n){return n[Za]||null}var wd=[],fo=-1;function Jr(n){return{current:n}}function gt(n){0>fo||(n.current=wd[fo],wd[fo]=null,fo--)}function pt(n,e){fo++,wd[fo]=n.current,n.current=e}var qr={},fn=Jr(qr),Tn=Jr(!1),Ps=qr;function Lo(n,e){var t=n.type.contextTypes;if(!t)return qr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function wn(n){return n=n.childContextTypes,n!=null}function Hu(){gt(Tn),gt(fn)}function hg(n,e,t){if(fn.current!==qr)throw Error(se(168));pt(fn,e),pt(Tn,t)}function gv(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,US(n)||"Unknown",r));return bt({},t,i)}function Wu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||qr,Ps=fn.current,pt(fn,n),pt(Tn,Tn.current),!0}function pg(n,e,t){var i=n.stateNode;if(!i)throw Error(se(169));t?(n=gv(n,e,Ps),i.__reactInternalMemoizedMergedChildContext=n,gt(Tn),gt(fn),pt(fn,n)):gt(Tn),pt(Tn,t)}var Ji=null,Sc=!1,rf=!1;function _v(n){Ji===null?Ji=[n]:Ji.push(n)}function QM(n){Sc=!0,_v(n)}function es(){if(!rf&&Ji!==null){rf=!0;var n=0,e=at;try{var t=Ji;for(at=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ji=null,Sc=!1}catch(r){throw Ji!==null&&(Ji=Ji.slice(n+1)),G_(cp,es),r}finally{at=e,rf=!1}}return null}var ho=[],po=0,Xu=null,ju=0,ni=[],ii=0,Ds=null,tr=1,nr="";function ds(n,e){ho[po++]=ju,ho[po++]=Xu,Xu=n,ju=e}function vv(n,e,t){ni[ii++]=tr,ni[ii++]=nr,ni[ii++]=Ds,Ds=n;var i=tr;n=nr;var r=32-Si(i)-1;i&=~(1<<r),t+=1;var s=32-Si(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,tr=1<<32-Si(e)+r|t<<r|i,nr=s+n}else tr=1<<s|t<<r|i,nr=n}function xp(n){n.return!==null&&(ds(n,1),vv(n,1,0))}function yp(n){for(;n===Xu;)Xu=ho[--po],ho[po]=null,ju=ho[--po],ho[po]=null;for(;n===Ds;)Ds=ni[--ii],ni[ii]=null,nr=ni[--ii],ni[ii]=null,tr=ni[--ii],ni[ii]=null}var Wn=null,Vn=null,vt=!1,_i=null;function xv(n,e){var t=si(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function mg(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Wn=n,Vn=zr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Wn=n,Vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ds!==null?{id:tr,overflow:nr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=si(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Wn=n,Vn=null,!0):!1;default:return!1}}function Ad(n){return(n.mode&1)!==0&&(n.flags&128)===0}function bd(n){if(vt){var e=Vn;if(e){var t=e;if(!mg(n,e)){if(Ad(n))throw Error(se(418));e=zr(t.nextSibling);var i=Wn;e&&mg(n,e)?xv(i,t):(n.flags=n.flags&-4097|2,vt=!1,Wn=n)}}else{if(Ad(n))throw Error(se(418));n.flags=n.flags&-4097|2,vt=!1,Wn=n}}}function gg(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Wn=n}function Bl(n){if(n!==Wn)return!1;if(!vt)return gg(n),vt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Md(n.type,n.memoizedProps)),e&&(e=Vn)){if(Ad(n))throw yv(),Error(se(418));for(;e;)xv(n,e),e=zr(e.nextSibling)}if(gg(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(se(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Vn=zr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Vn=null}}else Vn=Wn?zr(n.stateNode.nextSibling):null;return!0}function yv(){for(var n=Vn;n;)n=zr(n.nextSibling)}function Io(){Vn=Wn=null,vt=!1}function Sp(n){_i===null?_i=[n]:_i.push(n)}var JM=_r.ReactCurrentBatchConfig;function aa(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(se(309));var i=t.stateNode}if(!i)throw Error(se(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(se(284));if(!t._owner)throw Error(se(290,n))}return n}function zl(n,e){throw n=Object.prototype.toString.call(e),Error(se(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function _g(n){var e=n._init;return e(n._payload)}function Sv(n){function e(d,v){if(n){var x=d.deletions;x===null?(d.deletions=[v],d.flags|=16):x.push(v)}}function t(d,v){if(!n)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=Wr(d,v),d.index=0,d.sibling=null,d}function s(d,v,x){return d.index=x,n?(x=d.alternate,x!==null?(x=x.index,x<v?(d.flags|=2,v):x):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,v,x,y){return v===null||v.tag!==6?(v=ff(x,d.mode,y),v.return=d,v):(v=r(v,x),v.return=d,v)}function l(d,v,x,y){var E=x.type;return E===oo?c(d,v,x.props.children,y,x.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ar&&_g(E)===v.type)?(y=r(v,x.props),y.ref=aa(d,v,x),y.return=d,y):(y=wu(x.type,x.key,x.props,null,d.mode,y),y.ref=aa(d,v,x),y.return=d,y)}function u(d,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=df(x,d.mode,y),v.return=d,v):(v=r(v,x.children||[]),v.return=d,v)}function c(d,v,x,y,E){return v===null||v.tag!==7?(v=ws(x,d.mode,y,E),v.return=d,v):(v=r(v,x),v.return=d,v)}function f(d,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ff(""+v,d.mode,x),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Rl:return x=wu(v.type,v.key,v.props,null,d.mode,x),x.ref=aa(d,null,v),x.return=d,x;case so:return v=df(v,d.mode,x),v.return=d,v;case Ar:var y=v._init;return f(d,y(v._payload),x)}if(Sa(v)||na(v))return v=ws(v,d.mode,x,null),v.return=d,v;zl(d,v)}return null}function h(d,v,x,y){var E=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return E!==null?null:a(d,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Rl:return x.key===E?l(d,v,x,y):null;case so:return x.key===E?u(d,v,x,y):null;case Ar:return E=x._init,h(d,v,E(x._payload),y)}if(Sa(x)||na(x))return E!==null?null:c(d,v,x,y,null);zl(d,x)}return null}function p(d,v,x,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(x)||null,a(v,d,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Rl:return d=d.get(y.key===null?x:y.key)||null,l(v,d,y,E);case so:return d=d.get(y.key===null?x:y.key)||null,u(v,d,y,E);case Ar:var w=y._init;return p(d,v,x,w(y._payload),E)}if(Sa(y)||na(y))return d=d.get(x)||null,c(v,d,y,E,null);zl(v,y)}return null}function _(d,v,x,y){for(var E=null,w=null,A=v,C=v=0,S=null;A!==null&&C<x.length;C++){A.index>C?(S=A,A=null):S=A.sibling;var T=h(d,A,x[C],y);if(T===null){A===null&&(A=S);break}n&&A&&T.alternate===null&&e(d,A),v=s(T,v,C),w===null?E=T:w.sibling=T,w=T,A=S}if(C===x.length)return t(d,A),vt&&ds(d,C),E;if(A===null){for(;C<x.length;C++)A=f(d,x[C],y),A!==null&&(v=s(A,v,C),w===null?E=A:w.sibling=A,w=A);return vt&&ds(d,C),E}for(A=i(d,A);C<x.length;C++)S=p(A,d,C,x[C],y),S!==null&&(n&&S.alternate!==null&&A.delete(S.key===null?C:S.key),v=s(S,v,C),w===null?E=S:w.sibling=S,w=S);return n&&A.forEach(function(P){return e(d,P)}),vt&&ds(d,C),E}function m(d,v,x,y){var E=na(x);if(typeof E!="function")throw Error(se(150));if(x=E.call(x),x==null)throw Error(se(151));for(var w=E=null,A=v,C=v=0,S=null,T=x.next();A!==null&&!T.done;C++,T=x.next()){A.index>C?(S=A,A=null):S=A.sibling;var P=h(d,A,T.value,y);if(P===null){A===null&&(A=S);break}n&&A&&P.alternate===null&&e(d,A),v=s(P,v,C),w===null?E=P:w.sibling=P,w=P,A=S}if(T.done)return t(d,A),vt&&ds(d,C),E;if(A===null){for(;!T.done;C++,T=x.next())T=f(d,T.value,y),T!==null&&(v=s(T,v,C),w===null?E=T:w.sibling=T,w=T);return vt&&ds(d,C),E}for(A=i(d,A);!T.done;C++,T=x.next())T=p(A,d,C,T.value,y),T!==null&&(n&&T.alternate!==null&&A.delete(T.key===null?C:T.key),v=s(T,v,C),w===null?E=T:w.sibling=T,w=T);return n&&A.forEach(function(B){return e(d,B)}),vt&&ds(d,C),E}function g(d,v,x,y){if(typeof x=="object"&&x!==null&&x.type===oo&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Rl:e:{for(var E=x.key,w=v;w!==null;){if(w.key===E){if(E=x.type,E===oo){if(w.tag===7){t(d,w.sibling),v=r(w,x.props.children),v.return=d,d=v;break e}}else if(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ar&&_g(E)===w.type){t(d,w.sibling),v=r(w,x.props),v.ref=aa(d,w,x),v.return=d,d=v;break e}t(d,w);break}else e(d,w);w=w.sibling}x.type===oo?(v=ws(x.props.children,d.mode,y,x.key),v.return=d,d=v):(y=wu(x.type,x.key,x.props,null,d.mode,y),y.ref=aa(d,v,x),y.return=d,d=y)}return o(d);case so:e:{for(w=x.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(d,v.sibling),v=r(v,x.children||[]),v.return=d,d=v;break e}else{t(d,v);break}else e(d,v);v=v.sibling}v=df(x,d.mode,y),v.return=d,d=v}return o(d);case Ar:return w=x._init,g(d,v,w(x._payload),y)}if(Sa(x))return _(d,v,x,y);if(na(x))return m(d,v,x,y);zl(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(d,v.sibling),v=r(v,x),v.return=d,d=v):(t(d,v),v=ff(x,d.mode,y),v.return=d,d=v),o(d)):t(d,v)}return g}var No=Sv(!0),Mv=Sv(!1),Yu=Jr(null),qu=null,mo=null,Mp=null;function Ep(){Mp=mo=qu=null}function Tp(n){var e=Yu.current;gt(Yu),n._currentValue=e}function Cd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function To(n,e){qu=n,Mp=mo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(En=!0),n.firstContext=null)}function ui(n){var e=n._currentValue;if(Mp!==n)if(n={context:n,memoizedValue:e,next:null},mo===null){if(qu===null)throw Error(se(308));mo=n,qu.dependencies={lanes:0,firstContext:n}}else mo=mo.next=n;return e}var xs=null;function wp(n){xs===null?xs=[n]:xs.push(n)}function Ev(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,wp(e)):(t.next=r.next,r.next=t),e.interleaved=t,cr(n,i)}function cr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var br=!1;function Ap(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function rr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Vr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,cr(n,t)}return r=i.interleaved,r===null?(e.next=e,wp(i)):(e.next=r.next,r.next=e),i.interleaved=e,cr(n,t)}function xu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,fp(n,t)}}function vg(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function $u(n,e,t,i){var r=n.updateQueue;br=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,m=a;switch(h=e,p=t,m.tag){case 1:if(_=m.payload,typeof _=="function"){f=_.call(p,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=m.payload,h=typeof _=="function"?_.call(p,f,h):_,h==null)break e;f=bt({},f,h);break e;case 2:br=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Is|=o,n.lanes=o,n.memoizedState=f}}function xg(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var xl={},ki=Jr(xl),Qa=Jr(xl),Ja=Jr(xl);function ys(n){if(n===xl)throw Error(se(174));return n}function bp(n,e){switch(pt(Ja,e),pt(Qa,n),pt(ki,xl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ld(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=ld(e,n)}gt(ki),pt(ki,e)}function Uo(){gt(ki),gt(Qa),gt(Ja)}function wv(n){ys(Ja.current);var e=ys(ki.current),t=ld(e,n.type);e!==t&&(pt(Qa,n),pt(ki,t))}function Cp(n){Qa.current===n&&(gt(ki),gt(Qa))}var Et=Jr(0);function Ku(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var sf=[];function Rp(){for(var n=0;n<sf.length;n++)sf[n]._workInProgressVersionPrimary=null;sf.length=0}var yu=_r.ReactCurrentDispatcher,of=_r.ReactCurrentBatchConfig,Ls=0,At=null,zt=null,Xt=null,Zu=!1,Ia=!1,el=0,e1=0;function tn(){throw Error(se(321))}function Pp(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Ti(n[t],e[t]))return!1;return!0}function Dp(n,e,t,i,r,s){if(Ls=s,At=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yu.current=n===null||n.memoizedState===null?r1:s1,n=t(i,r),Ia){s=0;do{if(Ia=!1,el=0,25<=s)throw Error(se(301));s+=1,Xt=zt=null,e.updateQueue=null,yu.current=o1,n=t(i,r)}while(Ia)}if(yu.current=Qu,e=zt!==null&&zt.next!==null,Ls=0,Xt=zt=At=null,Zu=!1,e)throw Error(se(300));return n}function Lp(){var n=el!==0;return el=0,n}function Ci(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?At.memoizedState=Xt=n:Xt=Xt.next=n,Xt}function ci(){if(zt===null){var n=At.alternate;n=n!==null?n.memoizedState:null}else n=zt.next;var e=Xt===null?At.memoizedState:Xt.next;if(e!==null)Xt=e,zt=n;else{if(n===null)throw Error(se(310));zt=n,n={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},Xt===null?At.memoizedState=Xt=n:Xt=Xt.next=n}return Xt}function tl(n,e){return typeof e=="function"?e(n):e}function af(n){var e=ci(),t=e.queue;if(t===null)throw Error(se(311));t.lastRenderedReducer=n;var i=zt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ls&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,At.lanes|=c,Is|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Ti(i,e.memoizedState)||(En=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,At.lanes|=s,Is|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function lf(n){var e=ci(),t=e.queue;if(t===null)throw Error(se(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Ti(s,e.memoizedState)||(En=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Av(){}function bv(n,e){var t=At,i=ci(),r=e(),s=!Ti(i.memoizedState,r);if(s&&(i.memoizedState=r,En=!0),i=i.queue,Ip(Pv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Xt!==null&&Xt.memoizedState.tag&1){if(t.flags|=2048,nl(9,Rv.bind(null,t,i,r,e),void 0,null),jt===null)throw Error(se(349));Ls&30||Cv(t,e,r)}return r}function Cv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Rv(n,e,t,i){e.value=t,e.getSnapshot=i,Dv(e)&&Lv(n)}function Pv(n,e,t){return t(function(){Dv(e)&&Lv(n)})}function Dv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Ti(n,t)}catch{return!0}}function Lv(n){var e=cr(n,1);e!==null&&Mi(e,n,1,-1)}function yg(n){var e=Ci();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tl,lastRenderedState:n},e.queue=n,n=n.dispatch=i1.bind(null,At,n),[e.memoizedState,n]}function nl(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Iv(){return ci().memoizedState}function Su(n,e,t,i){var r=Ci();At.flags|=n,r.memoizedState=nl(1|e,t,void 0,i===void 0?null:i)}function Mc(n,e,t,i){var r=ci();i=i===void 0?null:i;var s=void 0;if(zt!==null){var o=zt.memoizedState;if(s=o.destroy,i!==null&&Pp(i,o.deps)){r.memoizedState=nl(e,t,s,i);return}}At.flags|=n,r.memoizedState=nl(1|e,t,s,i)}function Sg(n,e){return Su(8390656,8,n,e)}function Ip(n,e){return Mc(2048,8,n,e)}function Nv(n,e){return Mc(4,2,n,e)}function Uv(n,e){return Mc(4,4,n,e)}function Fv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Ov(n,e,t){return t=t!=null?t.concat([n]):null,Mc(4,4,Fv.bind(null,e,n),t)}function Np(){}function kv(n,e){var t=ci();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Pp(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Bv(n,e){var t=ci();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Pp(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function zv(n,e,t){return Ls&21?(Ti(t,e)||(t=X_(),At.lanes|=t,Is|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,En=!0),n.memoizedState=t)}function t1(n,e){var t=at;at=t!==0&&4>t?t:4,n(!0);var i=of.transition;of.transition={};try{n(!1),e()}finally{at=t,of.transition=i}}function Vv(){return ci().memoizedState}function n1(n,e,t){var i=Hr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Gv(n))Hv(e,t);else if(t=Ev(n,e,t,i),t!==null){var r=gn();Mi(t,n,i,r),Wv(t,e,i)}}function i1(n,e,t){var i=Hr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Gv(n))Hv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Ti(a,o)){var l=e.interleaved;l===null?(r.next=r,wp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Ev(n,e,r,i),t!==null&&(r=gn(),Mi(t,n,i,r),Wv(t,e,i))}}function Gv(n){var e=n.alternate;return n===At||e!==null&&e===At}function Hv(n,e){Ia=Zu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Wv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,fp(n,t)}}var Qu={readContext:ui,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useInsertionEffect:tn,useLayoutEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useMutableSource:tn,useSyncExternalStore:tn,useId:tn,unstable_isNewReconciler:!1},r1={readContext:ui,useCallback:function(n,e){return Ci().memoizedState=[n,e===void 0?null:e],n},useContext:ui,useEffect:Sg,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Su(4194308,4,Fv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Su(4194308,4,n,e)},useInsertionEffect:function(n,e){return Su(4,2,n,e)},useMemo:function(n,e){var t=Ci();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Ci();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=n1.bind(null,At,n),[i.memoizedState,n]},useRef:function(n){var e=Ci();return n={current:n},e.memoizedState=n},useState:yg,useDebugValue:Np,useDeferredValue:function(n){return Ci().memoizedState=n},useTransition:function(){var n=yg(!1),e=n[0];return n=t1.bind(null,n[1]),Ci().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=At,r=Ci();if(vt){if(t===void 0)throw Error(se(407));t=t()}else{if(t=e(),jt===null)throw Error(se(349));Ls&30||Cv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Sg(Pv.bind(null,i,s,n),[n]),i.flags|=2048,nl(9,Rv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Ci(),e=jt.identifierPrefix;if(vt){var t=nr,i=tr;t=(i&~(1<<32-Si(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=el++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=e1++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},s1={readContext:ui,useCallback:kv,useContext:ui,useEffect:Ip,useImperativeHandle:Ov,useInsertionEffect:Nv,useLayoutEffect:Uv,useMemo:Bv,useReducer:af,useRef:Iv,useState:function(){return af(tl)},useDebugValue:Np,useDeferredValue:function(n){var e=ci();return zv(e,zt.memoizedState,n)},useTransition:function(){var n=af(tl)[0],e=ci().memoizedState;return[n,e]},useMutableSource:Av,useSyncExternalStore:bv,useId:Vv,unstable_isNewReconciler:!1},o1={readContext:ui,useCallback:kv,useContext:ui,useEffect:Ip,useImperativeHandle:Ov,useInsertionEffect:Nv,useLayoutEffect:Uv,useMemo:Bv,useReducer:lf,useRef:Iv,useState:function(){return lf(tl)},useDebugValue:Np,useDeferredValue:function(n){var e=ci();return zt===null?e.memoizedState=n:zv(e,zt.memoizedState,n)},useTransition:function(){var n=lf(tl)[0],e=ci().memoizedState;return[n,e]},useMutableSource:Av,useSyncExternalStore:bv,useId:Vv,unstable_isNewReconciler:!1};function mi(n,e){if(n&&n.defaultProps){e=bt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Rd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:bt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Ec={isMounted:function(n){return(n=n._reactInternals)?Os(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=gn(),r=Hr(n),s=rr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Vr(n,s,r),e!==null&&(Mi(e,n,r,i),xu(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=gn(),r=Hr(n),s=rr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Vr(n,s,r),e!==null&&(Mi(e,n,r,i),xu(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=gn(),i=Hr(n),r=rr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Vr(n,r,i),e!==null&&(Mi(e,n,i,t),xu(e,n,i))}};function Mg(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!qa(t,i)||!qa(r,s):!0}function Xv(n,e,t){var i=!1,r=qr,s=e.contextType;return typeof s=="object"&&s!==null?s=ui(s):(r=wn(e)?Ps:fn.current,i=e.contextTypes,s=(i=i!=null)?Lo(n,r):qr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ec,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Eg(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Ec.enqueueReplaceState(e,e.state,null)}function Pd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Ap(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ui(s):(s=wn(e)?Ps:fn.current,r.context=Lo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ec.enqueueReplaceState(r,r.state,null),$u(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Fo(n,e){try{var t="",i=e;do t+=NS(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function uf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Dd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var a1=typeof WeakMap=="function"?WeakMap:Map;function jv(n,e,t){t=rr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){ec||(ec=!0,Vd=i),Dd(n,e)},t}function Yv(n,e,t){t=rr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Dd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Dd(n,e),typeof i!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Tg(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new a1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=S1.bind(null,n,e,t),e.then(n,n))}function wg(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Ag(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=rr(-1,1),e.tag=2,Vr(t,e,1))),t.lanes|=1),n)}var l1=_r.ReactCurrentOwner,En=!1;function pn(n,e,t,i){e.child=n===null?Mv(e,null,t,i):No(e,n.child,t,i)}function bg(n,e,t,i,r){t=t.render;var s=e.ref;return To(e,r),i=Dp(n,e,t,i,s,r),t=Lp(),n!==null&&!En?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,fr(n,e,r)):(vt&&t&&xp(e),e.flags|=1,pn(n,e,i,r),e.child)}function Cg(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Gp(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,qv(n,e,s,i,r)):(n=wu(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:qa,t(o,i)&&n.ref===e.ref)return fr(n,e,r)}return e.flags|=1,n=Wr(s,i),n.ref=e.ref,n.return=e,e.child=n}function qv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(qa(s,i)&&n.ref===e.ref)if(En=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(En=!0);else return e.lanes=n.lanes,fr(n,e,r)}return Ld(n,e,t,i,r)}function $v(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pt(_o,On),On|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,pt(_o,On),On|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,pt(_o,On),On|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,pt(_o,On),On|=i;return pn(n,e,r,t),e.child}function Kv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Ld(n,e,t,i,r){var s=wn(t)?Ps:fn.current;return s=Lo(e,s),To(e,r),t=Dp(n,e,t,i,s,r),i=Lp(),n!==null&&!En?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,fr(n,e,r)):(vt&&i&&xp(e),e.flags|=1,pn(n,e,t,r),e.child)}function Rg(n,e,t,i,r){if(wn(t)){var s=!0;Wu(e)}else s=!1;if(To(e,r),e.stateNode===null)Mu(n,e),Xv(e,t,i),Pd(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=ui(u):(u=wn(t)?Ps:fn.current,u=Lo(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Eg(e,o,i,u),br=!1;var h=e.memoizedState;o.state=h,$u(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Tn.current||br?(typeof c=="function"&&(Rd(e,t,c,i),l=e.memoizedState),(a=br||Mg(e,t,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Tv(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:mi(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=ui(l):(l=wn(t)?Ps:fn.current,l=Lo(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Eg(e,o,i,l),br=!1,h=e.memoizedState,o.state=h,$u(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||Tn.current||br?(typeof p=="function"&&(Rd(e,t,p,i),_=e.memoizedState),(u=br||Mg(e,t,u,i,h,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Id(n,e,t,i,s,r)}function Id(n,e,t,i,r,s){Kv(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&pg(e,t,!1),fr(n,e,s);i=e.stateNode,l1.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=No(e,n.child,null,s),e.child=No(e,null,a,s)):pn(n,e,a,s),e.memoizedState=i.state,r&&pg(e,t,!0),e.child}function Zv(n){var e=n.stateNode;e.pendingContext?hg(n,e.pendingContext,e.pendingContext!==e.context):e.context&&hg(n,e.context,!1),bp(n,e.containerInfo)}function Pg(n,e,t,i,r){return Io(),Sp(r),e.flags|=256,pn(n,e,t,i),e.child}var Nd={dehydrated:null,treeContext:null,retryLane:0};function Ud(n){return{baseLanes:n,cachePool:null,transitions:null}}function Qv(n,e,t){var i=e.pendingProps,r=Et.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),pt(Et,r&1),n===null)return bd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ac(o,i,0,null),n=ws(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Ud(t),e.memoizedState=Nd,n):Up(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return u1(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Wr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Wr(a,s):(s=ws(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Ud(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Nd,i}return s=n.child,n=s.sibling,i=Wr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Up(n,e){return e=Ac({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Vl(n,e,t,i){return i!==null&&Sp(i),No(e,n.child,null,t),n=Up(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function u1(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=uf(Error(se(422))),Vl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ac({mode:"visible",children:i.children},r,0,null),s=ws(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&No(e,n.child,null,o),e.child.memoizedState=Ud(o),e.memoizedState=Nd,s);if(!(e.mode&1))return Vl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=uf(s,i,void 0),Vl(n,e,o,i)}if(a=(o&n.childLanes)!==0,En||a){if(i=jt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,cr(n,r),Mi(i,n,r,-1))}return Vp(),i=uf(Error(se(421))),Vl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=M1.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Vn=zr(r.nextSibling),Wn=e,vt=!0,_i=null,n!==null&&(ni[ii++]=tr,ni[ii++]=nr,ni[ii++]=Ds,tr=n.id,nr=n.overflow,Ds=e),e=Up(e,i.children),e.flags|=4096,e)}function Dg(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Cd(n.return,e,t)}function cf(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Jv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(pn(n,e,i.children,t),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Dg(n,t,e);else if(n.tag===19)Dg(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(pt(Et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Ku(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),cf(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Ku(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}cf(e,!0,t,null,s);break;case"together":cf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Mu(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function fr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Is|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(se(153));if(e.child!==null){for(n=e.child,t=Wr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Wr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function c1(n,e,t){switch(e.tag){case 3:Zv(e),Io();break;case 5:wv(e);break;case 1:wn(e.type)&&Wu(e);break;case 4:bp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;pt(Yu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(pt(Et,Et.current&1),e.flags|=128,null):t&e.child.childLanes?Qv(n,e,t):(pt(Et,Et.current&1),n=fr(n,e,t),n!==null?n.sibling:null);pt(Et,Et.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Jv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pt(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,$v(n,e,t)}return fr(n,e,t)}var ex,Fd,tx,nx;ex=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Fd=function(){};tx=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ys(ki.current);var s=null;switch(t){case"input":r=rd(n,r),i=rd(n,i),s=[];break;case"select":r=bt({},r,{value:void 0}),i=bt({},i,{value:void 0}),s=[];break;case"textarea":r=ad(n,r),i=ad(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Gu)}ud(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Va.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Va.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&mt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};nx=function(n,e,t,i){t!==i&&(e.flags|=4)};function la(n,e){if(!vt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function nn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function f1(n,e,t){var i=e.pendingProps;switch(yp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(e),null;case 1:return wn(e.type)&&Hu(),nn(e),null;case 3:return i=e.stateNode,Uo(),gt(Tn),gt(fn),Rp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Bl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,_i!==null&&(Wd(_i),_i=null))),Fd(n,e),nn(e),null;case 5:Cp(e);var r=ys(Ja.current);if(t=e.type,n!==null&&e.stateNode!=null)tx(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return nn(e),null}if(n=ys(ki.current),Bl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Di]=e,i[Za]=s,n=(e.mode&1)!==0,t){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<Ea.length;r++)mt(Ea[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":zm(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":Gm(i,s),mt("invalid",i)}ud(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&kl(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&kl(i.textContent,a,n),r=["children",""+a]):Va.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&mt("scroll",i)}switch(t){case"input":Pl(i),Vm(i,s,!0);break;case"textarea":Pl(i),Hm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Gu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=P_(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Di]=e,n[Za]=i,ex(n,e,!1,!1),e.stateNode=n;e:{switch(o=cd(t,i),t){case"dialog":mt("cancel",n),mt("close",n),r=i;break;case"iframe":case"object":case"embed":mt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ea.length;r++)mt(Ea[r],n);r=i;break;case"source":mt("error",n),r=i;break;case"img":case"image":case"link":mt("error",n),mt("load",n),r=i;break;case"details":mt("toggle",n),r=i;break;case"input":zm(n,i),r=rd(n,i),mt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=bt({},i,{value:void 0}),mt("invalid",n);break;case"textarea":Gm(n,i),r=ad(n,i),mt("invalid",n);break;default:r=i}ud(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?I_(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&D_(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ga(n,l):typeof l=="number"&&Ga(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Va.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",n):l!=null&&sp(n,s,l,o))}switch(t){case"input":Pl(n),Vm(n,i,!1);break;case"textarea":Pl(n),Hm(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Yr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?yo(n,!!i.multiple,s,!1):i.defaultValue!=null&&yo(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Gu)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nn(e),null;case 6:if(n&&e.stateNode!=null)nx(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(t=ys(Ja.current),ys(ki.current),Bl(e)){if(i=e.stateNode,t=e.memoizedProps,i[Di]=e,(s=i.nodeValue!==t)&&(n=Wn,n!==null))switch(n.tag){case 3:kl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&kl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Di]=e,e.stateNode=i}return nn(e),null;case 13:if(gt(Et),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(vt&&Vn!==null&&e.mode&1&&!(e.flags&128))yv(),Io(),e.flags|=98560,s=!1;else if(s=Bl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[Di]=e}else Io(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nn(e),s=!1}else _i!==null&&(Wd(_i),_i=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Et.current&1?Vt===0&&(Vt=3):Vp())),e.updateQueue!==null&&(e.flags|=4),nn(e),null);case 4:return Uo(),Fd(n,e),n===null&&$a(e.stateNode.containerInfo),nn(e),null;case 10:return Tp(e.type._context),nn(e),null;case 17:return wn(e.type)&&Hu(),nn(e),null;case 19:if(gt(Et),s=e.memoizedState,s===null)return nn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)la(s,!1);else{if(Vt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Ku(n),o!==null){for(e.flags|=128,la(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return pt(Et,Et.current&1|2),e.child}n=n.sibling}s.tail!==null&&Ut()>Oo&&(e.flags|=128,i=!0,la(s,!1),e.lanes=4194304)}else{if(!i)if(n=Ku(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),la(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!vt)return nn(e),null}else 2*Ut()-s.renderingStartTime>Oo&&t!==1073741824&&(e.flags|=128,i=!0,la(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ut(),e.sibling=null,t=Et.current,pt(Et,i?t&1|2:t&1),e):(nn(e),null);case 22:case 23:return zp(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?On&1073741824&&(nn(e),e.subtreeFlags&6&&(e.flags|=8192)):nn(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function d1(n,e){switch(yp(e),e.tag){case 1:return wn(e.type)&&Hu(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Uo(),gt(Tn),gt(fn),Rp(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Cp(e),null;case 13:if(gt(Et),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Io()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return gt(Et),null;case 4:return Uo(),null;case 10:return Tp(e.type._context),null;case 22:case 23:return zp(),null;case 24:return null;default:return null}}var Gl=!1,on=!1,h1=typeof WeakSet=="function"?WeakSet:Set,Me=null;function go(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Dt(n,e,i)}else t.current=null}function Od(n,e,t){try{t()}catch(i){Dt(n,e,i)}}var Lg=!1;function p1(n,e){if(yd=Bu,n=av(),vp(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,h=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Sd={focusedElem:n,selectionRange:t},Bu=!1,Me=e;Me!==null;)if(e=Me,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Me=n;else for(;Me!==null;){e=Me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var m=_.memoizedProps,g=_.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?m:mi(e.type,m),g);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(y){Dt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}return _=Lg,Lg=!1,_}function Na(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Od(e,t,s)}r=r.next}while(r!==i)}}function Tc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function kd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function ix(n){var e=n.alternate;e!==null&&(n.alternate=null,ix(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Di],delete e[Za],delete e[Td],delete e[KM],delete e[ZM])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function rx(n){return n.tag===5||n.tag===3||n.tag===4}function Ig(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||rx(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Bd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Gu));else if(i!==4&&(n=n.child,n!==null))for(Bd(n,e,t),n=n.sibling;n!==null;)Bd(n,e,t),n=n.sibling}function zd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(zd(n,e,t),n=n.sibling;n!==null;)zd(n,e,t),n=n.sibling}var $t=null,gi=!1;function xr(n,e,t){for(t=t.child;t!==null;)sx(n,e,t),t=t.sibling}function sx(n,e,t){if(Oi&&typeof Oi.onCommitFiberUnmount=="function")try{Oi.onCommitFiberUnmount(gc,t)}catch{}switch(t.tag){case 5:on||go(t,e);case 6:var i=$t,r=gi;$t=null,xr(n,e,t),$t=i,gi=r,$t!==null&&(gi?(n=$t,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):$t.removeChild(t.stateNode));break;case 18:$t!==null&&(gi?(n=$t,t=t.stateNode,n.nodeType===8?nf(n.parentNode,t):n.nodeType===1&&nf(n,t),ja(n)):nf($t,t.stateNode));break;case 4:i=$t,r=gi,$t=t.stateNode.containerInfo,gi=!0,xr(n,e,t),$t=i,gi=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Od(t,e,o),r=r.next}while(r!==i)}xr(n,e,t);break;case 1:if(!on&&(go(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Dt(t,e,a)}xr(n,e,t);break;case 21:xr(n,e,t);break;case 22:t.mode&1?(on=(i=on)||t.memoizedState!==null,xr(n,e,t),on=i):xr(n,e,t);break;default:xr(n,e,t)}}function Ng(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new h1),e.forEach(function(i){var r=E1.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function fi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:$t=a.stateNode,gi=!1;break e;case 3:$t=a.stateNode.containerInfo,gi=!0;break e;case 4:$t=a.stateNode.containerInfo,gi=!0;break e}a=a.return}if($t===null)throw Error(se(160));sx(s,o,r),$t=null,gi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Dt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ox(e,n),e=e.sibling}function ox(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(fi(e,n),Ai(n),i&4){try{Na(3,n,n.return),Tc(3,n)}catch(m){Dt(n,n.return,m)}try{Na(5,n,n.return)}catch(m){Dt(n,n.return,m)}}break;case 1:fi(e,n),Ai(n),i&512&&t!==null&&go(t,t.return);break;case 5:if(fi(e,n),Ai(n),i&512&&t!==null&&go(t,t.return),n.flags&32){var r=n.stateNode;try{Ga(r,"")}catch(m){Dt(n,n.return,m)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&C_(r,s),cd(a,o);var u=cd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?I_(r,f):c==="dangerouslySetInnerHTML"?D_(r,f):c==="children"?Ga(r,f):sp(r,c,f,u)}switch(a){case"input":sd(r,s);break;case"textarea":R_(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?yo(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?yo(r,!!s.multiple,s.defaultValue,!0):yo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Za]=s}catch(m){Dt(n,n.return,m)}}break;case 6:if(fi(e,n),Ai(n),i&4){if(n.stateNode===null)throw Error(se(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(m){Dt(n,n.return,m)}}break;case 3:if(fi(e,n),Ai(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{ja(e.containerInfo)}catch(m){Dt(n,n.return,m)}break;case 4:fi(e,n),Ai(n);break;case 13:fi(e,n),Ai(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(kp=Ut())),i&4&&Ng(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(on=(u=on)||c,fi(e,n),on=u):fi(e,n),Ai(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Me=n,c=n.child;c!==null;){for(f=Me=c;Me!==null;){switch(h=Me,p=h.child,h.tag){case 0:case 11:case 14:case 15:Na(4,h,h.return);break;case 1:go(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(m){Dt(i,t,m)}}break;case 5:go(h,h.return);break;case 22:if(h.memoizedState!==null){Fg(f);continue}}p!==null?(p.return=h,Me=p):Fg(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=L_("display",o))}catch(m){Dt(n,n.return,m)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(m){Dt(n,n.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:fi(e,n),Ai(n),i&4&&Ng(n);break;case 21:break;default:fi(e,n),Ai(n)}}function Ai(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(rx(t)){var i=t;break e}t=t.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ga(r,""),i.flags&=-33);var s=Ig(n);zd(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Ig(n);Bd(n,a,o);break;default:throw Error(se(161))}}catch(l){Dt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function m1(n,e,t){Me=n,ax(n)}function ax(n,e,t){for(var i=(n.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Gl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||on;a=Gl;var u=on;if(Gl=o,(on=l)&&!u)for(Me=r;Me!==null;)o=Me,l=o.child,o.tag===22&&o.memoizedState!==null?Og(r):l!==null?(l.return=o,Me=l):Og(r);for(;s!==null;)Me=s,ax(s),s=s.sibling;Me=r,Gl=a,on=u}Ug(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Me=s):Ug(n)}}function Ug(n){for(;Me!==null;){var e=Me;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||Tc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:mi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}xg(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&ja(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}on||e.flags&512&&kd(e)}catch(h){Dt(e,e.return,h)}}if(e===n){Me=null;break}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}}function Fg(n){for(;Me!==null;){var e=Me;if(e===n){Me=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Me=t;break}Me=e.return}}function Og(n){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Tc(4,e)}catch(l){Dt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Dt(e,r,l)}}var s=e.return;try{kd(e)}catch(l){Dt(e,s,l)}break;case 5:var o=e.return;try{kd(e)}catch(l){Dt(e,o,l)}}}catch(l){Dt(e,e.return,l)}if(e===n){Me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Me=a;break}Me=e.return}}var g1=Math.ceil,Ju=_r.ReactCurrentDispatcher,Fp=_r.ReactCurrentOwner,li=_r.ReactCurrentBatchConfig,Ze=0,jt=null,Bt=null,Zt=0,On=0,_o=Jr(0),Vt=0,il=null,Is=0,wc=0,Op=0,Ua=null,Mn=null,kp=0,Oo=1/0,Zi=null,ec=!1,Vd=null,Gr=null,Hl=!1,Lr=null,tc=0,Fa=0,Gd=null,Eu=-1,Tu=0;function gn(){return Ze&6?Ut():Eu!==-1?Eu:Eu=Ut()}function Hr(n){return n.mode&1?Ze&2&&Zt!==0?Zt&-Zt:JM.transition!==null?(Tu===0&&(Tu=X_()),Tu):(n=at,n!==0||(n=window.event,n=n===void 0?16:Q_(n.type)),n):1}function Mi(n,e,t,i){if(50<Fa)throw Fa=0,Gd=null,Error(se(185));gl(n,t,i),(!(Ze&2)||n!==jt)&&(n===jt&&(!(Ze&2)&&(wc|=t),Vt===4&&Rr(n,Zt)),An(n,i),t===1&&Ze===0&&!(e.mode&1)&&(Oo=Ut()+500,Sc&&es()))}function An(n,e){var t=n.callbackNode;JS(n,e);var i=ku(n,n===jt?Zt:0);if(i===0)t!==null&&jm(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&jm(t),e===1)n.tag===0?QM(kg.bind(null,n)):_v(kg.bind(null,n)),qM(function(){!(Ze&6)&&es()}),t=null;else{switch(j_(i)){case 1:t=cp;break;case 4:t=H_;break;case 16:t=Ou;break;case 536870912:t=W_;break;default:t=Ou}t=mx(t,lx.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function lx(n,e){if(Eu=-1,Tu=0,Ze&6)throw Error(se(327));var t=n.callbackNode;if(wo()&&n.callbackNode!==t)return null;var i=ku(n,n===jt?Zt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=nc(n,i);else{e=i;var r=Ze;Ze|=2;var s=cx();(jt!==n||Zt!==e)&&(Zi=null,Oo=Ut()+500,Ts(n,e));do try{x1();break}catch(a){ux(n,a)}while(!0);Ep(),Ju.current=s,Ze=r,Bt!==null?e=0:(jt=null,Zt=0,e=Vt)}if(e!==0){if(e===2&&(r=md(n),r!==0&&(i=r,e=Hd(n,r))),e===1)throw t=il,Ts(n,0),Rr(n,i),An(n,Ut()),t;if(e===6)Rr(n,i);else{if(r=n.current.alternate,!(i&30)&&!_1(r)&&(e=nc(n,i),e===2&&(s=md(n),s!==0&&(i=s,e=Hd(n,s))),e===1))throw t=il,Ts(n,0),Rr(n,i),An(n,Ut()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:hs(n,Mn,Zi);break;case 3:if(Rr(n,i),(i&130023424)===i&&(e=kp+500-Ut(),10<e)){if(ku(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){gn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Ed(hs.bind(null,n,Mn,Zi),e);break}hs(n,Mn,Zi);break;case 4:if(Rr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Si(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ut()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*g1(i/1960))-i,10<i){n.timeoutHandle=Ed(hs.bind(null,n,Mn,Zi),i);break}hs(n,Mn,Zi);break;case 5:hs(n,Mn,Zi);break;default:throw Error(se(329))}}}return An(n,Ut()),n.callbackNode===t?lx.bind(null,n):null}function Hd(n,e){var t=Ua;return n.current.memoizedState.isDehydrated&&(Ts(n,e).flags|=256),n=nc(n,e),n!==2&&(e=Mn,Mn=t,e!==null&&Wd(e)),n}function Wd(n){Mn===null?Mn=n:Mn.push.apply(Mn,n)}function _1(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Ti(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rr(n,e){for(e&=~Op,e&=~wc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Si(e),i=1<<t;n[t]=-1,e&=~i}}function kg(n){if(Ze&6)throw Error(se(327));wo();var e=ku(n,0);if(!(e&1))return An(n,Ut()),null;var t=nc(n,e);if(n.tag!==0&&t===2){var i=md(n);i!==0&&(e=i,t=Hd(n,i))}if(t===1)throw t=il,Ts(n,0),Rr(n,e),An(n,Ut()),t;if(t===6)throw Error(se(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,hs(n,Mn,Zi),An(n,Ut()),null}function Bp(n,e){var t=Ze;Ze|=1;try{return n(e)}finally{Ze=t,Ze===0&&(Oo=Ut()+500,Sc&&es())}}function Ns(n){Lr!==null&&Lr.tag===0&&!(Ze&6)&&wo();var e=Ze;Ze|=1;var t=li.transition,i=at;try{if(li.transition=null,at=1,n)return n()}finally{at=i,li.transition=t,Ze=e,!(Ze&6)&&es()}}function zp(){On=_o.current,gt(_o)}function Ts(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,YM(t)),Bt!==null)for(t=Bt.return;t!==null;){var i=t;switch(yp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Hu();break;case 3:Uo(),gt(Tn),gt(fn),Rp();break;case 5:Cp(i);break;case 4:Uo();break;case 13:gt(Et);break;case 19:gt(Et);break;case 10:Tp(i.type._context);break;case 22:case 23:zp()}t=t.return}if(jt=n,Bt=n=Wr(n.current,null),Zt=On=e,Vt=0,il=null,Op=wc=Is=0,Mn=Ua=null,xs!==null){for(e=0;e<xs.length;e++)if(t=xs[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}xs=null}return n}function ux(n,e){do{var t=Bt;try{if(Ep(),yu.current=Qu,Zu){for(var i=At.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Zu=!1}if(Ls=0,Xt=zt=At=null,Ia=!1,el=0,Fp.current=null,t===null||t.return===null){Vt=1,il=e,Bt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=wg(o);if(p!==null){p.flags&=-257,Ag(p,o,a,s,e),p.mode&1&&Tg(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var m=new Set;m.add(l),e.updateQueue=m}else _.add(l);break e}else{if(!(e&1)){Tg(s,u,e),Vp();break e}l=Error(se(426))}}else if(vt&&a.mode&1){var g=wg(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Ag(g,o,a,s,e),Sp(Fo(l,a));break e}}s=l=Fo(l,a),Vt!==4&&(Vt=2),Ua===null?Ua=[s]:Ua.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=jv(s,l,e);vg(s,d);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Gr===null||!Gr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Yv(s,a,e);vg(s,y);break e}}s=s.return}while(s!==null)}dx(t)}catch(E){e=E,Bt===t&&t!==null&&(Bt=t=t.return);continue}break}while(!0)}function cx(){var n=Ju.current;return Ju.current=Qu,n===null?Qu:n}function Vp(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),jt===null||!(Is&268435455)&&!(wc&268435455)||Rr(jt,Zt)}function nc(n,e){var t=Ze;Ze|=2;var i=cx();(jt!==n||Zt!==e)&&(Zi=null,Ts(n,e));do try{v1();break}catch(r){ux(n,r)}while(!0);if(Ep(),Ze=t,Ju.current=i,Bt!==null)throw Error(se(261));return jt=null,Zt=0,Vt}function v1(){for(;Bt!==null;)fx(Bt)}function x1(){for(;Bt!==null&&!WS();)fx(Bt)}function fx(n){var e=px(n.alternate,n,On);n.memoizedProps=n.pendingProps,e===null?dx(n):Bt=e,Fp.current=null}function dx(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=d1(t,e),t!==null){t.flags&=32767,Bt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Vt=6,Bt=null;return}}else if(t=f1(t,e,On),t!==null){Bt=t;return}if(e=e.sibling,e!==null){Bt=e;return}Bt=e=n}while(e!==null);Vt===0&&(Vt=5)}function hs(n,e,t){var i=at,r=li.transition;try{li.transition=null,at=1,y1(n,e,t,i)}finally{li.transition=r,at=i}return null}function y1(n,e,t,i){do wo();while(Lr!==null);if(Ze&6)throw Error(se(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(se(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(eM(n,s),n===jt&&(Bt=jt=null,Zt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Hl||(Hl=!0,mx(Ou,function(){return wo(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=li.transition,li.transition=null;var o=at;at=1;var a=Ze;Ze|=4,Fp.current=null,p1(n,t),ox(t,n),zM(Sd),Bu=!!yd,Sd=yd=null,n.current=t,m1(t),XS(),Ze=a,at=o,li.transition=s}else n.current=t;if(Hl&&(Hl=!1,Lr=n,tc=r),s=n.pendingLanes,s===0&&(Gr=null),qS(t.stateNode),An(n,Ut()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(ec)throw ec=!1,n=Vd,Vd=null,n;return tc&1&&n.tag!==0&&wo(),s=n.pendingLanes,s&1?n===Gd?Fa++:(Fa=0,Gd=n):Fa=0,es(),null}function wo(){if(Lr!==null){var n=j_(tc),e=li.transition,t=at;try{if(li.transition=null,at=16>n?16:n,Lr===null)var i=!1;else{if(n=Lr,Lr=null,tc=0,Ze&6)throw Error(se(331));var r=Ze;for(Ze|=4,Me=n.current;Me!==null;){var s=Me,o=s.child;if(Me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Me=u;Me!==null;){var c=Me;switch(c.tag){case 0:case 11:case 15:Na(8,c,s)}var f=c.child;if(f!==null)f.return=c,Me=f;else for(;Me!==null;){c=Me;var h=c.sibling,p=c.return;if(ix(c),c===u){Me=null;break}if(h!==null){h.return=p,Me=h;break}Me=p}}}var _=s.alternate;if(_!==null){var m=_.child;if(m!==null){_.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(m!==null)}}Me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Me=o;else e:for(;Me!==null;){if(s=Me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Na(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Me=d;break e}Me=s.return}}var v=n.current;for(Me=v;Me!==null;){o=Me;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Me=x;else e:for(o=v;Me!==null;){if(a=Me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tc(9,a)}}catch(E){Dt(a,a.return,E)}if(a===o){Me=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Me=y;break e}Me=a.return}}if(Ze=r,es(),Oi&&typeof Oi.onPostCommitFiberRoot=="function")try{Oi.onPostCommitFiberRoot(gc,n)}catch{}i=!0}return i}finally{at=t,li.transition=e}}return!1}function Bg(n,e,t){e=Fo(t,e),e=jv(n,e,1),n=Vr(n,e,1),e=gn(),n!==null&&(gl(n,1,e),An(n,e))}function Dt(n,e,t){if(n.tag===3)Bg(n,n,t);else for(;e!==null;){if(e.tag===3){Bg(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Gr===null||!Gr.has(i))){n=Fo(t,n),n=Yv(e,n,1),e=Vr(e,n,1),n=gn(),e!==null&&(gl(e,1,n),An(e,n));break}}e=e.return}}function S1(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=gn(),n.pingedLanes|=n.suspendedLanes&t,jt===n&&(Zt&t)===t&&(Vt===4||Vt===3&&(Zt&130023424)===Zt&&500>Ut()-kp?Ts(n,0):Op|=t),An(n,e)}function hx(n,e){e===0&&(n.mode&1?(e=Il,Il<<=1,!(Il&130023424)&&(Il=4194304)):e=1);var t=gn();n=cr(n,e),n!==null&&(gl(n,e,t),An(n,t))}function M1(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),hx(n,t)}function E1(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),hx(n,t)}var px;px=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Tn.current)En=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return En=!1,c1(n,e,t);En=!!(n.flags&131072)}else En=!1,vt&&e.flags&1048576&&vv(e,ju,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Mu(n,e),n=e.pendingProps;var r=Lo(e,fn.current);To(e,t),r=Dp(null,e,i,n,r,t);var s=Lp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wn(i)?(s=!0,Wu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ap(e),r.updater=Ec,e.stateNode=r,r._reactInternals=e,Pd(e,i,n,t),e=Id(null,e,i,!0,s,t)):(e.tag=0,vt&&s&&xp(e),pn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Mu(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=w1(i),n=mi(i,n),r){case 0:e=Ld(null,e,i,n,t);break e;case 1:e=Rg(null,e,i,n,t);break e;case 11:e=bg(null,e,i,n,t);break e;case 14:e=Cg(null,e,i,mi(i.type,n),t);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),Ld(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),Rg(n,e,i,r,t);case 3:e:{if(Zv(e),n===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Tv(n,e),$u(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Fo(Error(se(423)),e),e=Pg(n,e,i,t,r);break e}else if(i!==r){r=Fo(Error(se(424)),e),e=Pg(n,e,i,t,r);break e}else for(Vn=zr(e.stateNode.containerInfo.firstChild),Wn=e,vt=!0,_i=null,t=Mv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Io(),i===r){e=fr(n,e,t);break e}pn(n,e,i,t)}e=e.child}return e;case 5:return wv(e),n===null&&bd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Md(i,r)?o=null:s!==null&&Md(i,s)&&(e.flags|=32),Kv(n,e),pn(n,e,o,t),e.child;case 6:return n===null&&bd(e),null;case 13:return Qv(n,e,t);case 4:return bp(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=No(e,null,i,t):pn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),bg(n,e,i,r,t);case 7:return pn(n,e,e.pendingProps,t),e.child;case 8:return pn(n,e,e.pendingProps.children,t),e.child;case 12:return pn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,pt(Yu,i._currentValue),i._currentValue=o,s!==null)if(Ti(s.value,o)){if(s.children===r.children&&!Tn.current){e=fr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=rr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Cd(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Cd(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,To(e,t),r=ui(r),i=i(r),e.flags|=1,pn(n,e,i,t),e.child;case 14:return i=e.type,r=mi(i,e.pendingProps),r=mi(i.type,r),Cg(n,e,i,r,t);case 15:return qv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),Mu(n,e),e.tag=1,wn(i)?(n=!0,Wu(e)):n=!1,To(e,t),Xv(e,i,r),Pd(e,i,r,t),Id(null,e,i,!0,n,t);case 19:return Jv(n,e,t);case 22:return $v(n,e,t)}throw Error(se(156,e.tag))};function mx(n,e){return G_(n,e)}function T1(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(n,e,t,i){return new T1(n,e,t,i)}function Gp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function w1(n){if(typeof n=="function")return Gp(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ap)return 11;if(n===lp)return 14}return 2}function Wr(n,e){var t=n.alternate;return t===null?(t=si(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function wu(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Gp(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case oo:return ws(t.children,r,s,e);case op:o=8,r|=8;break;case ed:return n=si(12,t,e,r|2),n.elementType=ed,n.lanes=s,n;case td:return n=si(13,t,e,r),n.elementType=td,n.lanes=s,n;case nd:return n=si(19,t,e,r),n.elementType=nd,n.lanes=s,n;case w_:return Ac(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case E_:o=10;break e;case T_:o=9;break e;case ap:o=11;break e;case lp:o=14;break e;case Ar:o=16,i=null;break e}throw Error(se(130,n==null?n:typeof n,""))}return e=si(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ws(n,e,t,i){return n=si(7,n,i,e),n.lanes=t,n}function Ac(n,e,t,i){return n=si(22,n,i,e),n.elementType=w_,n.lanes=t,n.stateNode={isHidden:!1},n}function ff(n,e,t){return n=si(6,n,null,e),n.lanes=t,n}function df(n,e,t){return e=si(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function A1(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xc(0),this.expirationTimes=Xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Hp(n,e,t,i,r,s,o,a,l){return n=new A1(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=si(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ap(s),n}function b1(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:so,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function gx(n){if(!n)return qr;n=n._reactInternals;e:{if(Os(n)!==n||n.tag!==1)throw Error(se(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(n.tag===1){var t=n.type;if(wn(t))return gv(n,t,e)}return e}function _x(n,e,t,i,r,s,o,a,l){return n=Hp(t,i,!0,n,r,s,o,a,l),n.context=gx(null),t=n.current,i=gn(),r=Hr(t),s=rr(i,r),s.callback=e??null,Vr(t,s,r),n.current.lanes=r,gl(n,r,i),An(n,i),n}function bc(n,e,t,i){var r=e.current,s=gn(),o=Hr(r);return t=gx(t),e.context===null?e.context=t:e.pendingContext=t,e=rr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Vr(r,e,o),n!==null&&(Mi(n,r,o,s),xu(n,r,o)),o}function ic(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function zg(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Wp(n,e){zg(n,e),(n=n.alternate)&&zg(n,e)}function C1(){return null}var vx=typeof reportError=="function"?reportError:function(n){console.error(n)};function Xp(n){this._internalRoot=n}Cc.prototype.render=Xp.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(se(409));bc(n,e,null,null)};Cc.prototype.unmount=Xp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ns(function(){bc(null,n,null,null)}),e[ur]=null}};function Cc(n){this._internalRoot=n}Cc.prototype.unstable_scheduleHydration=function(n){if(n){var e=$_();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Cr.length&&e!==0&&e<Cr[t].priority;t++);Cr.splice(t,0,n),t===0&&Z_(n)}};function jp(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Rc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Vg(){}function R1(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=ic(o);s.call(u)}}var o=_x(e,i,n,0,null,!1,!1,"",Vg);return n._reactRootContainer=o,n[ur]=o.current,$a(n.nodeType===8?n.parentNode:n),Ns(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=ic(l);a.call(u)}}var l=Hp(n,0,!1,null,null,!1,!1,"",Vg);return n._reactRootContainer=l,n[ur]=l.current,$a(n.nodeType===8?n.parentNode:n),Ns(function(){bc(e,l,t,i)}),l}function Pc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ic(o);a.call(l)}}bc(e,o,n,r)}else o=R1(t,e,n,r,i);return ic(o)}Y_=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ma(e.pendingLanes);t!==0&&(fp(e,t|1),An(e,Ut()),!(Ze&6)&&(Oo=Ut()+500,es()))}break;case 13:Ns(function(){var i=cr(n,1);if(i!==null){var r=gn();Mi(i,n,1,r)}}),Wp(n,1)}};dp=function(n){if(n.tag===13){var e=cr(n,134217728);if(e!==null){var t=gn();Mi(e,n,134217728,t)}Wp(n,134217728)}};q_=function(n){if(n.tag===13){var e=Hr(n),t=cr(n,e);if(t!==null){var i=gn();Mi(t,n,e,i)}Wp(n,e)}};$_=function(){return at};K_=function(n,e){var t=at;try{return at=n,e()}finally{at=t}};dd=function(n,e,t){switch(e){case"input":if(sd(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=yc(i);if(!r)throw Error(se(90));b_(i),sd(i,r)}}}break;case"textarea":R_(n,t);break;case"select":e=t.value,e!=null&&yo(n,!!t.multiple,e,!1)}};F_=Bp;O_=Ns;var P1={usingClientEntryPoint:!1,Events:[vl,co,yc,N_,U_,Bp]},ua={findFiberByHostInstance:vs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},D1={bundleType:ua.bundleType,version:ua.version,rendererPackageName:ua.rendererPackageName,rendererConfig:ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_r.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=z_(n),n===null?null:n.stateNode},findFiberByHostInstance:ua.findFiberByHostInstance||C1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{gc=Wl.inject(D1),Oi=Wl}catch{}}$n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P1;$n.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jp(e))throw Error(se(200));return b1(n,e,null,t)};$n.createRoot=function(n,e){if(!jp(n))throw Error(se(299));var t=!1,i="",r=vx;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Hp(n,1,!1,null,null,t,!1,i,r),n[ur]=e.current,$a(n.nodeType===8?n.parentNode:n),new Xp(e)};$n.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(se(188)):(n=Object.keys(n).join(","),Error(se(268,n)));return n=z_(e),n=n===null?null:n.stateNode,n};$n.flushSync=function(n){return Ns(n)};$n.hydrate=function(n,e,t){if(!Rc(e))throw Error(se(200));return Pc(null,n,e,!0,t)};$n.hydrateRoot=function(n,e,t){if(!jp(n))throw Error(se(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=vx;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=_x(e,null,n,1,t??null,r,!1,s,o),n[ur]=e.current,$a(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Cc(e)};$n.render=function(n,e,t){if(!Rc(e))throw Error(se(200));return Pc(null,n,e,!1,t)};$n.unmountComponentAtNode=function(n){if(!Rc(n))throw Error(se(40));return n._reactRootContainer?(Ns(function(){Pc(null,null,n,!1,function(){n._reactRootContainer=null,n[ur]=null})}),!0):!1};$n.unstable_batchedUpdates=Bp;$n.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Rc(t))throw Error(se(200));if(n==null||n._reactInternals===void 0)throw Error(se(38));return Pc(n,e,t,!1,i)};$n.version="18.3.1-next-f1338f8080-20240426";function xx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xx)}catch(n){console.error(n)}}xx(),x_.exports=$n;var L1=x_.exports,yx,Gg=L1;yx=Gg.createRoot,Gg.hydrateRoot;const I1="/gym_ANti/assets/feiyu_avatar-TF1d_Sr8.png",N1=({message:n})=>{const e=n.sender==="user";return X.jsxs("div",{style:{display:"flex",justifyContent:e?"flex-end":"flex-start",marginBottom:"20px",animation:"fadeIn 0.3s ease",alignItems:"flex-start"},children:[!e&&X.jsx("div",{style:{marginRight:"10px",display:"flex",flexDirection:"column",alignItems:"center"},children:X.jsx("div",{style:{width:"45px",height:"45px",borderRadius:"50%",overflow:"hidden",border:"2px solid white",boxShadow:"var(--glow-shadow)",backgroundColor:"#fff"},children:X.jsx("img",{src:I1,alt:"飞羽",style:{width:"100%",height:"100%",objectFit:"cover"},onError:t=>{t.target.onerror=null,t.target.src="https://placehold.co/45x45/png?text=Fish"}})})}),X.jsxs("div",{style:{display:"flex",flexDirection:"column",maxWidth:"80%",alignItems:e?"flex-end":"flex-start"},children:[!e&&X.jsx("span",{style:{fontSize:"12px",color:"var(--text-primary)",marginBottom:"4px",marginLeft:"4px",fontWeight:"bold"},children:"小鱼飞飞"}),X.jsx("div",{style:{padding:"14px 18px",borderRadius:"20px",borderTopRightRadius:e?"4px":"20px",borderTopLeftRadius:e?"20px":"4px",backgroundColor:e?"#039be5":"var(--card-bg)",border:"none",color:e?"#fff":"#01579b",boxShadow:"0 2px 8px rgba(0,0,0,0.05)",whiteSpace:"pre-wrap",fontSize:"15px",lineHeight:"1.6",backdropFilter:"blur(10px)"},children:n.text})]}),X.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `})]})},U1=({onSend:n})=>{const[e,t]=Ve.useState(""),i=r=>{r.preventDefault(),e.trim()&&(n(e),t(""))};return X.jsxs("form",{onSubmit:i,style:{display:"flex",gap:"10px",padding:"20px",backgroundColor:"rgba(0,0,0,0.8)",backdropFilter:"blur(10px)",borderTop:"1px solid var(--border-color)",width:"100%",boxSizing:"border-box"},children:[X.jsx("input",{type:"text",value:e,onChange:r=>t(r.target.value),placeholder:"输入训练记录或饮食...",style:{flex:1,padding:"12px 20px",borderRadius:"24px",border:"1px solid var(--border-color)",backgroundColor:"var(--card-bg)",color:"#fff",fontSize:"16px",outline:"none",transition:"all 0.2s"},onFocus:r=>r.target.style.borderColor="var(--accent-color)",onBlur:r=>r.target.style.borderColor="var(--border-color)"}),X.jsx("button",{type:"submit",style:{padding:"12px 24px",borderRadius:"24px",border:"none",backgroundColor:"var(--accent-color)",color:"#000",fontWeight:"bold",cursor:"pointer",transition:"transform 0.1s"},onMouseDown:r=>r.target.style.transform="scale(0.95)",onMouseUp:r=>r.target.style.transform="scale(1)",children:"发送"})]})},ko="https://gym-anti-backend.onrender.com",F1=({authToken:n,onClose:e,onUpdate:t})=>{const[i,r]=Ve.useState({age:"",gender:"",height:"",weight:"",goal:"gain"}),[s,o]=Ve.useState(0),[a,l]=Ve.useState(0),[u,c]=Ve.useState(""),[f,h]=Ve.useState(!1),[p,_]=Ve.useState(!0);Ve.useEffect(()=>{m()},[]);const m=async()=>{try{const y=await(await fetch(`${ko}/api/profile`,{headers:{Authorization:`Bearer ${n}`}})).json();if(y.profile){const E={增肌:"gain",减脂:"lose",维持:"maintain"};r({age:y.profile.age,gender:y.profile.gender,height:y.profile.height,weight:y.profile.weight,goal:E[y.profile.goal]||"gain"}),o(y.profile.daily_calories),l(y.profile.daily_protein)}}catch(x){console.error("Load profile error:",x)}finally{_(!1)}},g=()=>{const{age:x,gender:y,height:E,weight:w,goal:A}=i;if(!x||!y||!E||!w)return;const C=parseInt(x),S=parseInt(E),T=parseFloat(w);let P;y==="male"?P=10*T+6.25*S-5*C+5:P=10*T+6.25*S-5*C-161;let B,U;A==="gain"?(B=Math.round(P*1.6),U=Math.round(T*2)):A==="lose"?(B=Math.round(P*1.3),U=Math.round(T*1.8)):(B=Math.round(P*1.5),U=Math.round(T*1.5)),o(B),l(U)};Ve.useEffect(()=>{g()},[i.age,i.gender,i.height,i.weight,i.goal]);const d=async x=>{x.preventDefault(),c(""),h(!0);try{const y={age:parseInt(i.age),gender:i.gender,height:parseInt(i.height),weight:parseFloat(i.weight),goal:i.goal==="gain"?"增肌":i.goal==="lose"?"减脂":"维持",daily_calories:s,daily_protein:a},E=await fetch(`${ko}/api/profile`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify(y)}),w=await E.json();if(!E.ok)throw new Error(w.error||"保存失败");t(),e()}catch(y){c(y.message)}finally{h(!1)}};if(p)return X.jsx("div",{style:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",color:"#039be5",fontSize:"18px"},children:"加载中..."});const v={gain:"增肌💪",lose:"减脂🔥",maintain:"维持⚖️"};return X.jsx("div",{style:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",position:"relative",padding:"20px",boxSizing:"border-box"},children:X.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.3)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"1px solid rgba(255, 255, 255, 0.6)",boxShadow:"0 8px 32px 0 rgba(31, 38, 135, 0.1)",borderRadius:"20px",padding:"40px",width:"500px",maxWidth:"100%",maxHeight:"90vh",overflowY:"auto",position:"relative"},children:[X.jsx("button",{onClick:e,style:{position:"absolute",top:"15px",right:"15px",background:"rgba(244, 67, 54, 0.2)",border:"1px solid rgba(244, 67, 54, 0.5)",borderRadius:"50%",width:"35px",height:"35px",cursor:"pointer",fontSize:"20px",color:"#c62828",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},onMouseOver:x=>x.target.style.background="rgba(244, 67, 54, 0.3)",onMouseOut:x=>x.target.style.background="rgba(244, 67, 54, 0.2)",children:"×"}),X.jsx("h1",{style:{textAlign:"center",color:"#01579b",marginBottom:"10px",fontSize:"28px"},children:"🐟 个人设置"}),X.jsx("p",{style:{textAlign:"center",color:"#0277bd",marginBottom:"30px",fontSize:"14px"},children:"修改您的个人信息和训练目标"}),X.jsxs("form",{onSubmit:d,children:[X.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"15px",marginBottom:"20px"},children:[X.jsxs("div",{children:[X.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#01579b",fontWeight:"bold",fontSize:"14px"},children:"年龄"}),X.jsx("input",{type:"number",value:i.age,onChange:x=>r({...i,age:x.target.value}),required:!0,min:"1",max:"120",style:{width:"100%",padding:"12px",borderRadius:"10px",border:"1px solid rgba(2, 119, 189, 0.3)",background:"rgba(255, 255, 255, 0.5)",fontSize:"16px",outline:"none",boxSizing:"border-box"}})]}),X.jsxs("div",{children:[X.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#01579b",fontWeight:"bold",fontSize:"14px"},children:"性别"}),X.jsxs("select",{value:i.gender,onChange:x=>r({...i,gender:x.target.value}),required:!0,style:{width:"100%",padding:"12px",borderRadius:"10px",border:"1px solid rgba(2, 119, 189, 0.3)",background:"rgba(255, 255, 255, 0.5)",fontSize:"16px",outline:"none",boxSizing:"border-box"},children:[X.jsx("option",{value:"",children:"请选择"}),X.jsx("option",{value:"male",children:"男 👨"}),X.jsx("option",{value:"female",children:"女 👩"})]})]})]}),X.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"15px",marginBottom:"20px"},children:[X.jsxs("div",{children:[X.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#01579b",fontWeight:"bold",fontSize:"14px"},children:"身高 (cm)"}),X.jsx("input",{type:"number",value:i.height,onChange:x=>r({...i,height:x.target.value}),required:!0,min:"100",max:"250",style:{width:"100%",padding:"12px",borderRadius:"10px",border:"1px solid rgba(2, 119, 189, 0.3)",background:"rgba(255, 255, 255, 0.5)",fontSize:"16px",outline:"none",boxSizing:"border-box"}})]}),X.jsxs("div",{children:[X.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#01579b",fontWeight:"bold",fontSize:"14px"},children:"体重 (kg)"}),X.jsx("input",{type:"number",step:"0.1",value:i.weight,onChange:x=>r({...i,weight:x.target.value}),required:!0,min:"30",max:"200",style:{width:"100%",padding:"12px",borderRadius:"10px",border:"1px solid rgba(2, 119, 189, 0.3)",background:"rgba(255, 255, 255, 0.5)",fontSize:"16px",outline:"none",boxSizing:"border-box"}})]})]}),X.jsxs("div",{style:{marginBottom:"20px"},children:[X.jsx("label",{style:{display:"block",marginBottom:"12px",color:"#01579b",fontWeight:"bold",fontSize:"14px"},children:"训练目标"}),X.jsx("div",{style:{display:"flex",gap:"10px"},children:["gain","lose","maintain"].map(x=>X.jsx("button",{type:"button",onClick:()=>r({...i,goal:x}),style:{flex:1,padding:"12px",borderRadius:"10px",border:i.goal===x?"2px solid #039be5":"1px solid rgba(2, 119, 189, 0.3)",background:i.goal===x?"rgba(3, 155, 229, 0.2)":"rgba(255, 255, 255, 0.5)",fontSize:"14px",fontWeight:"bold",cursor:"pointer",transition:"all 0.2s",color:i.goal===x?"#01579b":"#0277bd"},children:v[x]},x))})]}),s>0&&X.jsxs("div",{style:{padding:"15px",borderRadius:"10px",background:"rgba(76, 175, 80, 0.15)",marginBottom:"20px",border:"1px solid rgba(76, 175, 80, 0.3)"},children:[X.jsx("p",{style:{margin:"0 0 8px 0",color:"#2e7d32",fontSize:"14px",fontWeight:"bold"},children:"📊 新的推荐目标："}),X.jsxs("p",{style:{margin:0,color:"#388e3c",fontSize:"16px"},children:["每日热量: ",X.jsxs("strong",{children:[s," kcal"]})," | 蛋白质: ",X.jsxs("strong",{children:[a," g"]})]})]}),u&&X.jsx("div",{style:{padding:"10px",borderRadius:"8px",backgroundColor:"rgba(244, 67, 54, 0.2)",color:"#c62828",marginBottom:"20px",fontSize:"14px",textAlign:"center"},children:u}),X.jsxs("div",{style:{display:"flex",gap:"10px"},children:[X.jsx("button",{type:"button",onClick:e,style:{flex:1,padding:"14px",borderRadius:"10px",border:"1px solid rgba(2, 119, 189, 0.5)",background:"rgba(255, 255, 255, 0.5)",color:"#0277bd",fontSize:"16px",fontWeight:"bold",cursor:"pointer",transition:"all 0.3s"},children:"取消"}),X.jsx("button",{type:"submit",disabled:f,style:{flex:2,padding:"14px",borderRadius:"10px",border:"none",background:f?"#90caf9":"#039be5",color:"white",fontSize:"16px",fontWeight:"bold",cursor:f?"not-allowed":"pointer",transition:"all 0.3s",boxShadow:"0 4px 12px rgba(3, 155, 229, 0.3)"},children:f?"保存中...":"保存修改 💾"})]})]})]})})},O1=({authToken:n,onLogout:e})=>{const[t,i]=Ve.useState([{id:1,sender:"ai",text:`您好！我是小鱼飞飞 🐟
正在从数据库读取您的历史记录...`}]),[r,s]=Ve.useState(!1),o=Ve.useRef(null),a=()=>{var u;(u=o.current)==null||u.scrollIntoView({behavior:"smooth"})};Ve.useEffect(a,[t]),Ve.useEffect(()=>{fetch(`${ko}/api/history`,{headers:{Authorization:`Bearer ${n}`}}).then(u=>u.json()).then(u=>{if(u.length>0){const c=u[u.length-1];i([{id:1,sender:"ai",text:`欢迎回来！
检测到上一次记录是：${c.Date} ${c.TimeOfDay} (${c.Type})
"${c.Content}"

今天想记录什么？`}])}else i([{id:1,sender:"ai",text:`欢迎！我是小鱼飞飞🐟  
正在从数据库读取您的历史记录...
目前还是空的，请告诉我您今天练了什么或吃了什么？`}])}).catch(u=>{console.error(u),i([{id:1,sender:"ai",text:`⚠️ 无法连接到后台服务。
请确认您运行了 npm start 在 server 目录下。`}])})},[]);const l=async u=>{i(c=>[...c,{id:Date.now(),sender:"user",text:u}]);try{const c=new AbortController,f=setTimeout(()=>c.abort(),6e4),h=await fetch(`${ko}/api/chat`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({message:u}),signal:c.signal});clearTimeout(f);const p=await h.json();i(_=>[..._,{id:Date.now()+1,sender:"ai",text:p.reply}])}catch{i(f=>[...f,{id:Date.now()+1,sender:"ai",text:"❌ 发送失败，后台服务未响应。"}])}};return X.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",width:"100%",maxWidth:"800px",margin:"0 auto",background:"transparent",position:"relative"},children:[X.jsxs("div",{style:{padding:"12px 20px",background:"linear-gradient(135deg, #039be5 0%, #0288d1 100%)",color:"white",display:"flex",justifyContent:"space-between",alignItems:"center",borderRadius:"15px 15px 0 0",boxShadow:"0 2px 8px rgba(0,0,0,0.1)"},children:[X.jsxs("div",{children:[X.jsx("h2",{style:{margin:0,fontSize:"16px",fontWeight:"bold"},children:"小鱼飞飞 🐟"}),X.jsx("p",{style:{margin:"2px 0 0 0",fontSize:"12px",opacity:.85},children:localStorage.getItem("username")||"用户"})]}),X.jsxs("div",{style:{display:"flex",gap:"10px"},children:[X.jsx("button",{onClick:()=>s(!0),style:{background:"rgba(255,255,255,0.25)",border:"1px solid rgba(255,255,255,0.4)",color:"white",padding:"8px 16px",borderRadius:"8px",cursor:"pointer",fontSize:"13px",fontWeight:"bold",transition:"all 0.2s"},onMouseOver:u=>u.target.style.background="rgba(255,255,255,0.35)",onMouseOut:u=>u.target.style.background="rgba(255,255,255,0.25)",children:"⚙️ 设置"}),X.jsx("button",{onClick:e,style:{background:"rgba(255,255,255,0.25)",border:"1px solid rgba(255,255,255,0.4)",color:"white",padding:"8px 16px",borderRadius:"8px",cursor:"pointer",fontSize:"13px",fontWeight:"bold",transition:"all 0.2s"},onMouseOver:u=>u.target.style.background="rgba(255,255,255,0.35)",onMouseOut:u=>u.target.style.background="rgba(255,255,255,0.25)",children:"切换账号"})]})]}),X.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"20px",paddingBottom:"80px"},children:[t.map(u=>X.jsx(N1,{message:u},u.id)),X.jsx("div",{ref:o})]}),X.jsx("div",{style:{position:"absolute",bottom:0,width:"100%"},children:X.jsx(U1,{onSend:l})}),r&&X.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:1e3,background:"rgba(0, 0, 0, 0.3)",backdropFilter:"blur(5px)"},children:X.jsx(F1,{authToken:n,onClose:()=>s(!1),onUpdate:()=>{console.log("Profile updated!")}})})]})},Xl=()=>{const n=Array.from({length:15}).map((e,t)=>({id:t,top:`${Math.random()*80}%`,left:`${Math.random()*100}%`,duration:`${20+Math.random()*40}s`,delay:`-${Math.random()*20}s`,scale:.5+Math.random()*1.5,opacity:.4+Math.random()*.4}));return X.jsxs("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0,background:"linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",overflow:"hidden"},children:[X.jsx("div",{style:{position:"absolute",top:"-10%",right:"-10%",width:"500px",height:"500px",background:"radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)",filter:"blur(20px)",opacity:.6}}),n.map(e=>X.jsxs("div",{className:"cloud-sprite",style:{position:"absolute",top:e.top,left:"-20%",width:"200px",height:"60px",background:"#fff",borderRadius:"100px",filter:"blur(8px)",boxShadow:"0 8px 32px rgba(255, 255, 255, 0.4)",opacity:e.opacity,transform:`scale(${e.scale})`,animation:`floatClouds ${e.duration} linear infinite`,animationDelay:e.delay},children:[X.jsx("div",{style:{position:"absolute",top:"-40%",left:"15%",width:"35%",height:"150%",background:"#fff",borderRadius:"50%"}}),X.jsx("div",{style:{position:"absolute",top:"-55%",left:"40%",width:"40%",height:"180%",background:"#fff",borderRadius:"50%"}})]},e.id)),X.jsx("style",{children:`
        @keyframes floatClouds {
          0% { transform: translateX(-10vw) scale(var(--scale, 1)); }
          100% { transform: translateX(110vw) scale(var(--scale, 1)); }
        }
        .cloud-sprite {
          /* 确保子元素也能正确渲染 */
        }
      `})]})},k1=({onLogin:n})=>{const[e,t]=Ve.useState(!1),[i,r]=Ve.useState(""),[s,o]=Ve.useState(""),[a,l]=Ve.useState(""),[u,c]=Ve.useState(!1),f=async h=>{h.preventDefault(),l(""),c(!0);const p=e?"/api/register":"/api/login";try{const _=await fetch(`${ko}${p}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:i,password:s})}),m=await _.json();if(!_.ok)throw new Error(m.error||"操作失败");e?(l("注册成功！请登录"),t(!1),o("")):(localStorage.setItem("auth_token",m.token),localStorage.setItem("username",m.username),n(m.token))}catch(_){l(_.message)}finally{c(!1)}};return X.jsx("div",{style:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:X.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.25)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"1px solid rgba(255, 255, 255, 0.6)",boxShadow:"0 8px 32px 0 rgba(31, 38, 135, 0.1)",borderRadius:"20px",padding:"40px",width:"400px",maxWidth:"90%"},children:[X.jsx("h1",{style:{textAlign:"center",color:"#01579b",marginBottom:"10px",fontSize:"28px"},children:"小鱼飞飞"}),X.jsx("p",{style:{textAlign:"center",color:"#0277bd",marginBottom:"30px",fontSize:"14px"},children:"您的专属健身管家"}),X.jsxs("form",{onSubmit:f,children:[X.jsxs("div",{style:{marginBottom:"20px"},children:[X.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#01579b",fontWeight:"bold"},children:"用户名"}),X.jsx("input",{type:"text",value:i,onChange:h=>r(h.target.value),required:!0,style:{width:"100%",padding:"12px",borderRadius:"10px",border:"1px solid rgba(2, 119, 189, 0.3)",background:"rgba(255, 255, 255, 0.5)",fontSize:"16px",outline:"none",boxSizing:"border-box"}})]}),X.jsxs("div",{style:{marginBottom:"20px"},children:[X.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#01579b",fontWeight:"bold"},children:"密码"}),X.jsx("input",{type:"password",value:s,onChange:h=>o(h.target.value),required:!0,style:{width:"100%",padding:"12px",borderRadius:"10px",border:"1px solid rgba(2, 119, 189, 0.3)",background:"rgba(255, 255, 255, 0.5)",fontSize:"16px",outline:"none",boxSizing:"border-box"}})]}),a&&X.jsx("div",{style:{padding:"10px",borderRadius:"8px",backgroundColor:a.includes("成功")?"rgba(76, 175, 80, 0.2)":"rgba(244, 67, 54, 0.2)",color:a.includes("成功")?"#2e7d32":"#c62828",marginBottom:"20px",fontSize:"14px",textAlign:"center"},children:a}),X.jsx("button",{type:"submit",disabled:u,style:{width:"100%",padding:"14px",borderRadius:"10px",border:"none",background:u?"#90caf9":"#039be5",color:"white",fontSize:"16px",fontWeight:"bold",cursor:u?"not-allowed":"pointer",transition:"all 0.3s",boxShadow:"0 4px 12px rgba(3, 155, 229, 0.3)"},children:u?"处理中...":e?"注册":"登录"})]}),X.jsx("div",{style:{textAlign:"center",marginTop:"20px"},children:X.jsx("button",{onClick:()=>{t(!e),l("")},style:{background:"none",border:"none",color:"#0288d1",cursor:"pointer",fontSize:"14px",textDecoration:"underline"},children:e?"已有账号？去登录":"没有账号？去注册"})})]})})},B1=({authToken:n,onComplete:e})=>{const[t,i]=Ve.useState({age:"",gender:"male",height:"",weight:"",goal:"muscle_gain"}),[r,s]=Ve.useState(0),[o,a]=Ve.useState(0),[l,u]=Ve.useState(""),[c,f]=Ve.useState(!1),h=()=>{const{age:m,gender:g,height:d,weight:v,goal:x}=t;if(!m||!g||!d||!v)return;const y=parseInt(m),E=parseInt(d),w=parseFloat(v);let A;g==="male"?A=10*w+6.25*E-5*y+5:A=10*w+6.25*E-5*y-161;let C,S;x==="gain"?(C=Math.round(A*1.6),S=Math.round(w*2)):x==="lose"?(C=Math.round(A*1.3),S=Math.round(w*1.8)):(C=Math.round(A*1.5),S=Math.round(w*1.5)),s(C),a(S)};__.useEffect(()=>{h()},[t.age,t.gender,t.height,t.weight,t.goal]);const p=async m=>{m.preventDefault(),u(""),f(!0);try{const g={age:parseInt(t.age),gender:t.gender,height:parseInt(t.height),weight:parseFloat(t.weight),goal:t.goal==="gain"?"增肌":t.goal==="lose"?"减脂":"维持",daily_calories:r,daily_protein:o},d=await fetch(`${ko}/api/profile`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify(g)}),v=await d.json();if(!d.ok)throw new Error(v.error||"保存失败");e()}catch(g){u(g.message)}finally{f(!1)}},_={gain:"增肌💪",lose:"减脂🔥",maintain:"维持⚖️"};return X.jsx("div",{style:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:X.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.3)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"1px solid rgba(255, 255, 255, 0.6)",boxShadow:"0 8px 32px 0 rgba(31, 38, 135, 0.1)",borderRadius:"20px",padding:"40px",width:"500px",maxWidth:"90%"},children:[X.jsx("h1",{style:{textAlign:"center",color:"#01579b",marginBottom:"10px",fontSize:"28px"},children:"🐟 完善个人信息"}),X.jsx("p",{style:{textAlign:"center",color:"#0277bd",marginBottom:"30px",fontSize:"14px"},children:"让小鱼飞飞为您定制专属健身计划！"}),X.jsxs("form",{onSubmit:p,children:[X.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"15px",marginBottom:"20px"},children:[X.jsxs("div",{children:[X.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#01579b",fontWeight:"bold",fontSize:"14px"},children:"年龄"}),X.jsx("input",{type:"number",value:t.age,onChange:m=>i({...t,age:m.target.value}),required:!0,min:"1",max:"120",style:{width:"100%",padding:"12px",borderRadius:"10px",border:"1px solid rgba(2, 119, 189, 0.3)",background:"rgba(255, 255, 255, 0.5)",fontSize:"16px",outline:"none",boxSizing:"border-box"}})]}),X.jsxs("div",{children:[X.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#01579b",fontWeight:"bold",fontSize:"14px"},children:"性别"}),X.jsxs("select",{value:t.gender,onChange:m=>i({...t,gender:m.target.value}),required:!0,style:{width:"100%",padding:"12px",borderRadius:"10px",border:"1px solid rgba(2, 119, 189, 0.3)",background:"rgba(255, 255, 255, 0.5)",fontSize:"16px",outline:"none",boxSizing:"border-box"},children:[X.jsx("option",{value:"",children:"请选择"}),X.jsx("option",{value:"male",children:"男 👨"}),X.jsx("option",{value:"female",children:"女 👩"})]})]})]}),X.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"15px",marginBottom:"20px"},children:[X.jsxs("div",{children:[X.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#01579b",fontWeight:"bold",fontSize:"14px"},children:"身高 (cm)"}),X.jsx("input",{type:"number",value:t.height,onChange:m=>i({...t,height:m.target.value}),required:!0,min:"100",max:"250",style:{width:"100%",padding:"12px",borderRadius:"10px",border:"1px solid rgba(2, 119, 189, 0.3)",background:"rgba(255, 255, 255, 0.5)",fontSize:"16px",outline:"none",boxSizing:"border-box"}})]}),X.jsxs("div",{children:[X.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#01579b",fontWeight:"bold",fontSize:"14px"},children:"体重 (kg)"}),X.jsx("input",{type:"number",step:"0.1",value:t.weight,onChange:m=>i({...t,weight:m.target.value}),required:!0,min:"30",max:"200",style:{width:"100%",padding:"12px",borderRadius:"10px",border:"1px solid rgba(2, 119, 189, 0.3)",background:"rgba(255, 255, 255, 0.5)",fontSize:"16px",outline:"none",boxSizing:"border-box"}})]})]}),X.jsxs("div",{style:{marginBottom:"20px"},children:[X.jsx("label",{style:{display:"block",marginBottom:"12px",color:"#01579b",fontWeight:"bold",fontSize:"14px"},children:"训练目标"}),X.jsx("div",{style:{display:"flex",gap:"10px"},children:["gain","lose","maintain"].map(m=>X.jsx("button",{type:"button",onClick:()=>i({...t,goal:m}),style:{flex:1,padding:"12px",borderRadius:"10px",border:t.goal===m?"2px solid #039be5":"1px solid rgba(2, 119, 189, 0.3)",background:t.goal===m?"rgba(3, 155, 229, 0.2)":"rgba(255, 255, 255, 0.5)",fontSize:"14px",fontWeight:"bold",cursor:"pointer",transition:"all 0.2s",color:t.goal===m?"#01579b":"#0277bd"},children:_[m]},m))})]}),r>0&&X.jsxs("div",{style:{padding:"15px",borderRadius:"10px",background:"rgba(76, 175, 80, 0.15)",marginBottom:"20px",border:"1px solid rgba(76, 175, 80, 0.3)"},children:[X.jsx("p",{style:{margin:"0 0 8px 0",color:"#2e7d32",fontSize:"14px",fontWeight:"bold"},children:"📊 根据您的数据，推荐："}),X.jsxs("p",{style:{margin:0,color:"#388e3c",fontSize:"16px"},children:["每日热量: ",X.jsxs("strong",{children:[r," kcal"]})," | 蛋白质: ",X.jsxs("strong",{children:[o," g"]})]})]}),l&&X.jsx("div",{style:{padding:"10px",borderRadius:"8px",backgroundColor:"rgba(244, 67, 54, 0.2)",color:"#c62828",marginBottom:"20px",fontSize:"14px",textAlign:"center"},children:l}),X.jsx("button",{type:"submit",disabled:c,style:{width:"100%",padding:"14px",borderRadius:"10px",border:"none",background:c?"#90caf9":"#039be5",color:"white",fontSize:"16px",fontWeight:"bold",cursor:c?"not-allowed":"pointer",transition:"all 0.3s",boxShadow:"0 4px 12px rgba(3, 155, 229, 0.3)"},children:c?"保存中...":"开始使用 🚀"})]})]})})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yp="182",z1=0,Hg=1,V1=2,Oa=1,G1=2,Ta=3,dr=0,bn=1,Li=2,sr=0,Ao=1,Wg=2,Xg=3,jg=4,H1=5,gs=100,W1=101,X1=102,j1=103,Y1=104,q1=200,$1=201,K1=202,Z1=203,Xd=204,jd=205,Q1=206,J1=207,eE=208,tE=209,nE=210,iE=211,rE=212,sE=213,oE=214,Yd=0,qd=1,$d=2,Bo=3,Kd=4,Zd=5,Qd=6,Jd=7,Sx=0,aE=1,lE=2,Bi=0,Mx=1,Ex=2,Tx=3,qp=4,wx=5,Ax=6,bx=7,Cx=300,Us=301,zo=302,eh=303,th=304,Dc=306,nh=1e3,ir=1001,ih=1002,Kt=1003,uE=1004,jl=1005,ln=1006,hf=1007,Ss=1008,Bn=1009,Rx=1010,Px=1011,rl=1012,$p=1013,Vi=1014,xi=1015,hr=1016,Kp=1017,Zp=1018,sl=1020,Dx=35902,Lx=35899,Ix=1021,Nx=1022,yi=1023,pr=1026,Ms=1027,Qp=1028,Jp=1029,Vo=1030,em=1031,tm=1033,Au=33776,bu=33777,Cu=33778,Ru=33779,rh=35840,sh=35841,oh=35842,ah=35843,lh=36196,uh=37492,ch=37496,fh=37488,dh=37489,hh=37490,ph=37491,mh=37808,gh=37809,_h=37810,vh=37811,xh=37812,yh=37813,Sh=37814,Mh=37815,Eh=37816,Th=37817,wh=37818,Ah=37819,bh=37820,Ch=37821,Rh=36492,Ph=36494,Dh=36495,Lh=36283,Ih=36284,Nh=36285,Uh=36286,cE=3200,Ux=0,fE=1,Pr="",ti="srgb",Go="srgb-linear",rc="linear",ot="srgb",Gs=7680,Yg=519,dE=512,hE=513,pE=514,nm=515,mE=516,gE=517,im=518,_E=519,qg=35044,$g="300 es",Ui=2e3,sc=2001;function Fx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function oc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function vE(){const n=oc("canvas");return n.style.display="block",n}const Kg={};function Zg(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ue(...n){const e="THREE."+n.shift();console.warn(e,...n)}function et(...n){const e="THREE."+n.shift();console.error(e,...n)}function ol(...n){const e=n.join(" ");e in Kg||(Kg[e]=!0,Ue(...n))}function xE(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class Jo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pf=Math.PI/180,Fh=180/Math.PI;function yl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function yE(n,e){return(n%e+e)%e}function mf(n,e,t){return(1-t)*n+t*e}function ca(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Sl{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3],h=s[o+0],p=s[o+1],_=s[o+2],m=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a>=1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=m;return}if(f!==m||l!==h||u!==p||c!==_){let g=l*h+u*p+c*_+f*m;g<0&&(h=-h,p=-p,_=-_,m=-m,g=-g);let d=1-a;if(g<.9995){const v=Math.acos(g),x=Math.sin(v);d=Math.sin(d*v)/x,a=Math.sin(a*v)/x,l=l*d+h*a,u=u*d+p*a,c=c*d+_*a,f=f*d+m*a}else{l=l*d+h*a,u=u*d+p*a,c=c*d+_*a,f=f*d+m*a;const v=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=v,u*=v,c*=v,f*=v}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+c*f+l*p-u*h,e[t+1]=l*_+c*h+u*f-a*p,e[t+2]=u*_+c*p+a*h-l*f,e[t+3]=c*_-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"YXZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"ZXY":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"ZYX":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"YZX":this._x=h*c*f+u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f-h*p*_;break;case"XZY":this._x=h*c*f-u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f+h*p*_;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const u=Math.acos(a),c=Math.sin(u);l=Math.sin(l*u)/c,t=Math.sin(t*u)/c,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gf.copy(this).projectOnVector(e),this.sub(gf)}reflect(e){return this.sub(gf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gf=new H,Qg=new Sl;class ke{constructor(e,t,i,r,s,o,a,l,u){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],_=i[8],m=r[0],g=r[3],d=r[6],v=r[1],x=r[4],y=r[7],E=r[2],w=r[5],A=r[8];return s[0]=o*m+a*v+l*E,s[3]=o*g+a*x+l*w,s[6]=o*d+a*y+l*A,s[1]=u*m+c*v+f*E,s[4]=u*g+c*x+f*w,s[7]=u*d+c*y+f*A,s[2]=h*m+p*v+_*E,s[5]=h*g+p*x+_*w,s[8]=h*d+p*y+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,p=u*s-o*l,_=t*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return e[0]=f*m,e[1]=(r*u-c*i)*m,e[2]=(a*i-r*o)*m,e[3]=h*m,e[4]=(c*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=p*m,e[7]=(i*l-u*t)*m,e[8]=(o*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_f.makeScale(e,t)),this}rotate(e){return this.premultiply(_f.makeRotation(-e)),this}translate(e,t){return this.premultiply(_f.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _f=new ke,Jg=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),e0=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function SE(){const n={enabled:!0,workingColorSpace:Go,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ot&&(r.r=or(r.r),r.g=or(r.g),r.b=or(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(r.r=bo(r.r),r.g=bo(r.g),r.b=bo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pr?rc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ol("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ol("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Go]:{primaries:e,whitePoint:i,transfer:rc,toXYZ:Jg,fromXYZ:e0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:Jg,fromXYZ:e0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),n}const Ke=SE();function or(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Hs;class ME{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hs===void 0&&(Hs=oc("canvas")),Hs.width=e.width,Hs.height=e.height;const r=Hs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Hs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=or(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(or(t[i]/255)*255):t[i]=or(t[i]);return{data:t,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let EE=0;class rm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=yl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(vf(r[o].image)):s.push(vf(r[o]))}else s=vf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function vf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ME.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}let TE=0;const xf=new H;class un extends Jo{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,i=ir,r=ir,s=ln,o=Ss,a=yi,l=Bn,u=un.DEFAULT_ANISOTROPY,c=Pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=yl(),this.name="",this.source=new rm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xf).x}get height(){return this.source.getSize(xf).y}get depth(){return this.source.getSize(xf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ue(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ue(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nh:e.x=e.x-Math.floor(e.x);break;case ir:e.x=e.x<0?0:1;break;case ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nh:e.y=e.y-Math.floor(e.y);break;case ir:e.y=e.y<0?0:1;break;case ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Cx;un.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],_=l[9],m=l[2],g=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-m)<.01&&Math.abs(_-g)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+m)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,E=(d+1)/2,w=(c+h)/4,A=(f+m)/4,C=(_+g)/4;return x>y&&x>E?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=A/i):y>E?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=C/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=A/s,r=C/s),this.set(i,r,s,t),this}let v=Math.sqrt((g-_)*(g-_)+(f-m)*(f-m)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(g-_)/v,this.y=(f-m)/v,this.z=(h-c)/v,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wE extends Jo{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new un(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new rm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends wE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ox extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class AE extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ks{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,di):di.fromBufferAttribute(s,o),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yl.copy(i.boundingBox)),Yl.applyMatrix4(e.matrixWorld),this.union(Yl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),ql.subVectors(this.max,fa),Ws.subVectors(e.a,fa),Xs.subVectors(e.b,fa),js.subVectors(e.c,fa),yr.subVectors(Xs,Ws),Sr.subVectors(js,Xs),rs.subVectors(Ws,js);let t=[0,-yr.z,yr.y,0,-Sr.z,Sr.y,0,-rs.z,rs.y,yr.z,0,-yr.x,Sr.z,0,-Sr.x,rs.z,0,-rs.x,-yr.y,yr.x,0,-Sr.y,Sr.x,0,-rs.y,rs.x,0];return!yf(t,Ws,Xs,js,ql)||(t=[1,0,0,0,1,0,0,0,1],!yf(t,Ws,Xs,js,ql))?!1:($l.crossVectors(yr,Sr),t=[$l.x,$l.y,$l.z],yf(t,Ws,Xs,js,ql))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ji=[new H,new H,new H,new H,new H,new H,new H,new H],di=new H,Yl=new ks,Ws=new H,Xs=new H,js=new H,yr=new H,Sr=new H,rs=new H,fa=new H,ql=new H,$l=new H,ss=new H;function yf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ss.fromArray(n,s);const a=r.x*Math.abs(ss.x)+r.y*Math.abs(ss.y)+r.z*Math.abs(ss.z),l=e.dot(ss),u=t.dot(ss),c=i.dot(ss);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const bE=new ks,da=new H,Sf=new H;class Ml{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);const t=da.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(da,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add(Sf)),this.expandByPoint(da.copy(e.center).sub(Sf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Yi=new H,Mf=new H,Kl=new H,Mr=new H,Ef=new H,Zl=new H,Tf=new H;class CE{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Mf.copy(e).add(t).multiplyScalar(.5),Kl.copy(t).sub(e).normalize(),Mr.copy(this.origin).sub(Mf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Kl),a=Mr.dot(this.direction),l=-Mr.dot(Kl),u=Mr.lengthSq(),c=Math.abs(1-o*o);let f,h,p,_;if(c>0)if(f=o*l-a,h=o*a-l,_=s*c,f>=0)if(h>=-_)if(h<=_){const m=1/c;f*=m,h*=m,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Mf).addScaledVector(Kl,h),p}intersectSphere(e,t){Yi.subVectors(e.center,this.origin);const i=Yi.dot(this.direction),r=Yi.dot(Yi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,i,r,s){Ef.subVectors(t,e),Zl.subVectors(i,e),Tf.crossVectors(Ef,Zl);let o=this.direction.dot(Tf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mr.subVectors(this.origin,e);const l=a*this.direction.dot(Zl.crossVectors(Mr,Zl));if(l<0)return null;const u=a*this.direction.dot(Ef.cross(Mr));if(u<0||l+u>o)return null;const c=-a*Mr.dot(Tf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,i,r,s,o,a,l,u,c,f,h,p,_,m,g){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,h,p,_,m,g)}set(e,t,i,r,s,o,a,l,u,c,f,h,p,_,m,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=m,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Ys.setFromMatrixColumn(e,0).length(),s=1/Ys.setFromMatrixColumn(e,1).length(),o=1/Ys.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*f,_=a*c,m=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+_*u,t[5]=h-m*u,t[9]=-a*l,t[2]=m-h*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,_=u*c,m=u*f;t[0]=h+m*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=m+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,_=u*c,m=u*f;t[0]=h-m*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=m-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,_=a*c,m=a*f;t[0]=l*c,t[4]=_*u-p,t[8]=h*u+m,t[1]=l*f,t[5]=m*u+h,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,_=a*l,m=a*u;t[0]=l*c,t[4]=m-h*f,t[8]=_*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+_,t[10]=h-m*f}else if(e.order==="XZY"){const h=o*l,p=o*u,_=a*l,m=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+m,t[5]=o*c,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*c,t[10]=m*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RE,e,PE)}lookAt(e,t,i){const r=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Er.crossVectors(i,Un),Er.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Er.crossVectors(i,Un)),Er.normalize(),Ql.crossVectors(Un,Er),r[0]=Er.x,r[4]=Ql.x,r[8]=Un.x,r[1]=Er.y,r[5]=Ql.y,r[9]=Un.y,r[2]=Er.z,r[6]=Ql.z,r[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],_=i[2],m=i[6],g=i[10],d=i[14],v=i[3],x=i[7],y=i[11],E=i[15],w=r[0],A=r[4],C=r[8],S=r[12],T=r[1],P=r[5],B=r[9],U=r[13],q=r[2],Y=r[6],G=r[10],z=r[14],N=r[3],Q=r[7],K=r[11],J=r[15];return s[0]=o*w+a*T+l*q+u*N,s[4]=o*A+a*P+l*Y+u*Q,s[8]=o*C+a*B+l*G+u*K,s[12]=o*S+a*U+l*z+u*J,s[1]=c*w+f*T+h*q+p*N,s[5]=c*A+f*P+h*Y+p*Q,s[9]=c*C+f*B+h*G+p*K,s[13]=c*S+f*U+h*z+p*J,s[2]=_*w+m*T+g*q+d*N,s[6]=_*A+m*P+g*Y+d*Q,s[10]=_*C+m*B+g*G+d*K,s[14]=_*S+m*U+g*z+d*J,s[3]=v*w+x*T+y*q+E*N,s[7]=v*A+x*P+y*Y+E*Q,s[11]=v*C+x*B+y*G+E*K,s[15]=v*S+x*U+y*z+E*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],_=e[3],m=e[7],g=e[11],d=e[15],v=l*p-u*h,x=a*p-u*f,y=a*h-l*f,E=o*p-u*c,w=o*h-l*c,A=o*f-a*c;return t*(m*v-g*x+d*y)-i*(_*v-g*E+d*w)+r*(_*x-m*E+d*A)-s*(_*y-m*w+g*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],_=e[12],m=e[13],g=e[14],d=e[15],v=f*g*u-m*h*u+m*l*p-a*g*p-f*l*d+a*h*d,x=_*h*u-c*g*u-_*l*p+o*g*p+c*l*d-o*h*d,y=c*m*u-_*f*u+_*a*p-o*m*p-c*a*d+o*f*d,E=_*f*l-c*m*l-_*a*h+o*m*h+c*a*g-o*f*g,w=t*v+i*x+r*y+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=v*A,e[1]=(m*h*s-f*g*s-m*r*p+i*g*p+f*r*d-i*h*d)*A,e[2]=(a*g*s-m*l*s+m*r*u-i*g*u-a*r*d+i*l*d)*A,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*A,e[4]=x*A,e[5]=(c*g*s-_*h*s+_*r*p-t*g*p-c*r*d+t*h*d)*A,e[6]=(_*l*s-o*g*s-_*r*u+t*g*u+o*r*d-t*l*d)*A,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*A,e[8]=y*A,e[9]=(_*f*s-c*m*s-_*i*p+t*m*p+c*i*d-t*f*d)*A,e[10]=(o*m*s-_*a*s+_*i*u-t*m*u-o*i*d+t*a*d)*A,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*p-t*a*p)*A,e[12]=E*A,e[13]=(c*m*r-_*f*r+_*i*h-t*m*h-c*i*g+t*f*g)*A,e[14]=(_*a*r-o*m*r-_*i*l+t*m*l+o*i*g-t*a*g)*A,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,p=s*c,_=s*f,m=o*c,g=o*f,d=a*f,v=l*u,x=l*c,y=l*f,E=i.x,w=i.y,A=i.z;return r[0]=(1-(m+d))*E,r[1]=(p+y)*E,r[2]=(_-x)*E,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(h+d))*w,r[6]=(g+v)*w,r[7]=0,r[8]=(_+x)*A,r[9]=(g-v)*A,r[10]=(1-(h+m))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=Ys.set(r[0],r[1],r[2]).length();const o=Ys.set(r[4],r[5],r[6]).length(),a=Ys.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),hi.copy(this);const u=1/s,c=1/o,f=1/a;return hi.elements[0]*=u,hi.elements[1]*=u,hi.elements[2]*=u,hi.elements[4]*=c,hi.elements[5]*=c,hi.elements[6]*=c,hi.elements[8]*=f,hi.elements[9]*=f,hi.elements[10]*=f,t.setFromRotationMatrix(hi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ui,l=!1){const u=this.elements,c=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r);let _,m;if(l)_=s/(o-s),m=o*s/(o-s);else if(a===Ui)_=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===sc)_=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=f,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=m,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ui,l=!1){const u=this.elements,c=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r);let _,m;if(l)_=1/(o-s),m=o/(o-s);else if(a===Ui)_=-2/(o-s),m=-(o+s)/(o-s);else if(a===sc)_=-1/(o-s),m=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=0,u[12]=h,u[1]=0,u[5]=f,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=_,u[14]=m,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ys=new H,hi=new _t,RE=new H(0,0,0),PE=new H(1,1,1),Er=new H,Ql=new H,Un=new H,t0=new _t,n0=new Sl;class Gi{constructor(e=0,t=0,i=0,r=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return t0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(t0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return n0.setFromEuler(this),this.setFromQuaternion(n0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class kx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DE=0;const i0=new H,qs=new Sl,qi=new _t,Jl=new H,ha=new H,LE=new H,IE=new Sl,r0=new H(1,0,0),s0=new H(0,1,0),o0=new H(0,0,1),a0={type:"added"},NE={type:"removed"},$s={type:"childadded",child:null},wf={type:"childremoved",child:null};class Qt extends Jo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=yl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new H,t=new Gi,i=new Sl,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new ke}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(r0,e)}rotateY(e){return this.rotateOnAxis(s0,e)}rotateZ(e){return this.rotateOnAxis(o0,e)}translateOnAxis(e,t){return i0.copy(e).applyQuaternion(this.quaternion),this.position.add(i0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(r0,e)}translateY(e){return this.translateOnAxis(s0,e)}translateZ(e){return this.translateOnAxis(o0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Jl.copy(e):Jl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(ha,Jl,this.up):qi.lookAt(Jl,ha,this.up),this.quaternion.setFromRotationMatrix(qi),r&&(qi.extractRotation(r.matrixWorld),qs.setFromRotationMatrix(qi),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(a0),$s.child=e,this.dispatchEvent($s),$s.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(NE),wf.child=e,this.dispatchEvent(wf),wf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(a0),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,LE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,IE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Qt.DEFAULT_UP=new H(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new H,$i=new H,Af=new H,Ki=new H,Ks=new H,Zs=new H,l0=new H,bf=new H,Cf=new H,Rf=new H,Pf=new Lt,Df=new Lt,Lf=new Lt;class vi{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),pi.subVectors(e,t),r.cross(pi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){pi.subVectors(r,t),$i.subVectors(i,t),Af.subVectors(e,t);const o=pi.dot(pi),a=pi.dot($i),l=pi.dot(Af),u=$i.dot($i),c=$i.dot(Af),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-a*c)*h,_=(o*c-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ki.x),l.addScaledVector(o,Ki.y),l.addScaledVector(a,Ki.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Pf.setScalar(0),Df.setScalar(0),Lf.setScalar(0),Pf.fromBufferAttribute(e,t),Df.fromBufferAttribute(e,i),Lf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Pf,s.x),o.addScaledVector(Df,s.y),o.addScaledVector(Lf,s.z),o}static isFrontFacing(e,t,i,r){return pi.subVectors(i,t),$i.subVectors(e,t),pi.cross($i).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),pi.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return vi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ks.subVectors(r,i),Zs.subVectors(s,i),bf.subVectors(e,i);const l=Ks.dot(bf),u=Zs.dot(bf);if(l<=0&&u<=0)return t.copy(i);Cf.subVectors(e,r);const c=Ks.dot(Cf),f=Zs.dot(Cf);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Ks,o);Rf.subVectors(e,s);const p=Ks.dot(Rf),_=Zs.dot(Rf);if(_>=0&&p<=_)return t.copy(s);const m=p*u-l*_;if(m<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(Zs,a);const g=c*_-p*f;if(g<=0&&f-c>=0&&p-_>=0)return l0.subVectors(s,r),a=(f-c)/(f-c+(p-_)),t.copy(r).addScaledVector(l0,a);const d=1/(g+m+h);return o=m*d,a=h*d,t.copy(i).addScaledVector(Ks,o).addScaledVector(Zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},eu={h:0,s:0,l:0};function If(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=yE(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=If(o,s,e+1/3),this.g=If(o,s,e),this.b=If(o,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,t=ti){function i(s){s!==void 0&&parseFloat(s)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ue("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const i=Bx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=bo(e.r),this.g=bo(e.g),this.b=bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Ke.workingToColorSpace(sn.copy(this),e),Math.round(Ye(sn.r*255,0,255))*65536+Math.round(Ye(sn.g*255,0,255))*256+Math.round(Ye(sn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(sn.copy(this),t);const i=sn.r,r=sn.g,s=sn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=ti){Ke.workingToColorSpace(sn.copy(this),e);const t=sn.r,i=sn.g,r=sn.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+t,Tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Tr),e.getHSL(eu);const i=mf(Tr.h,eu.h,t),r=mf(Tr.s,eu.s,t),s=mf(Tr.l,eu.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new We;We.NAMES=Bx;let UE=0;class El extends Jo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=yl(),this.name="",this.type="Material",this.blending=Ao,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xd,this.blendDst=jd,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ue(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ue(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ao&&(i.blending=this.blending),this.side!==dr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xd&&(i.blendSrc=this.blendSrc),this.blendDst!==jd&&(i.blendDst=this.blendDst),this.blendEquation!==gs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ac extends El{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=Sx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new H,tu=new tt;let FE=0;class Ei{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:FE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qg,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)tu.fromBufferAttribute(this,t),tu.applyMatrix3(e),this.setXY(t,tu.x,tu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ca(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ca(t,this.array)),t}setX(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ca(t,this.array)),t}setY(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ca(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ca(t,this.array)),t}setW(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array),r=Sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array),r=Sn(r,this.array),s=Sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qg&&(e.usage=this.usage),e}}class zx extends Ei{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Vx extends Ei{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ar extends Ei{constructor(e,t,i){super(new Float32Array(e),t,i)}}let OE=0;const Qn=new _t,Nf=new Qt,Qs=new H,Fn=new ks,pa=new ks,Wt=new H;class vr extends Jo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=yl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fx(e)?Vx:zx)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,i){return Qn.makeTranslation(e,t,i),this.applyMatrix4(Qn),this}scale(e,t,i){return Qn.makeScale(e,t,i),this.applyMatrix4(Qn),this}lookAt(e){return Nf.lookAt(e),Nf.updateMatrix(),this.applyMatrix4(Nf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ar(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ks);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ml);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];pa.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(Fn.min,pa.min),Fn.expandByPoint(Wt),Wt.addVectors(Fn.max,pa.max),Fn.expandByPoint(Wt)):(Fn.expandByPoint(pa.min),Fn.expandByPoint(pa.max))}Fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Wt.fromBufferAttribute(a,u),l&&(Qs.fromBufferAttribute(e,u),Wt.add(Qs)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new H,l[C]=new H;const u=new H,c=new H,f=new H,h=new tt,p=new tt,_=new tt,m=new H,g=new H;function d(C,S,T){u.fromBufferAttribute(i,C),c.fromBufferAttribute(i,S),f.fromBufferAttribute(i,T),h.fromBufferAttribute(s,C),p.fromBufferAttribute(s,S),_.fromBufferAttribute(s,T),c.sub(u),f.sub(u),p.sub(h),_.sub(h);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(m.copy(c).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(P),g.copy(f).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(P),a[C].add(m),a[S].add(m),a[T].add(m),l[C].add(g),l[S].add(g),l[T].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,S=v.length;C<S;++C){const T=v[C],P=T.start,B=T.count;for(let U=P,q=P+B;U<q;U+=3)d(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const x=new H,y=new H,E=new H,w=new H;function A(C){E.fromBufferAttribute(r,C),w.copy(E);const S=a[C];x.copy(S),x.sub(E.multiplyScalar(E.dot(S))).normalize(),y.crossVectors(w,S);const P=y.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,P)}for(let C=0,S=v.length;C<S;++C){const T=v[C],P=T.start,B=T.count;for(let U=P,q=P+B;U<q;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ei(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,u=new H,c=new H,f=new H;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),m=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,g),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,_=0;for(let m=0,g=l.length;m<g;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*c;for(let d=0;d<c;d++)h[_++]=u[p++]}return new Ei(h,c,f)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const u0=new _t,os=new CE,nu=new Ml,c0=new H,iu=new H,ru=new H,su=new H,Uf=new H,ou=new H,f0=new H,au=new H;class Pt extends Qt{constructor(e=new vr,t=new ac){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ou.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Uf.fromBufferAttribute(f,e),o?ou.addScaledVector(Uf,c):ou.addScaledVector(Uf.sub(t),c))}t.add(ou)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nu.copy(i.boundingSphere),nu.applyMatrix4(s),os.copy(e.ray).recast(e.near),!(nu.containsPoint(os.origin)===!1&&(os.intersectSphere(nu,c0)===null||os.origin.distanceToSquared(c0)>(e.far-e.near)**2))&&(u0.copy(s).invert(),os.copy(e.ray).applyMatrix4(u0),!(i.boundingBox!==null&&os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,m=h.length;_<m;_++){const g=h[_],d=o[g.materialIndex],v=Math.max(g.start,p.start),x=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,E=x;y<E;y+=3){const w=a.getX(y),A=a.getX(y+1),C=a.getX(y+2);r=lu(this,d,e,i,u,c,f,w,A,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),m=Math.min(a.count,p.start+p.count);for(let g=_,d=m;g<d;g+=3){const v=a.getX(g),x=a.getX(g+1),y=a.getX(g+2);r=lu(this,o,e,i,u,c,f,v,x,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,m=h.length;_<m;_++){const g=h[_],d=o[g.materialIndex],v=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,E=x;y<E;y+=3){const w=y,A=y+1,C=y+2;r=lu(this,d,e,i,u,c,f,w,A,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);for(let g=_,d=m;g<d;g+=3){const v=g,x=g+1,y=g+2;r=lu(this,o,e,i,u,c,f,v,x,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function kE(n,e,t,i,r,s,o,a){let l;if(e.side===bn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===dr,a),l===null)return null;au.copy(a),au.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(au);return u<t.near||u>t.far?null:{distance:u,point:au.clone(),object:n}}function lu(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,iu),n.getVertexPosition(l,ru),n.getVertexPosition(u,su);const c=kE(n,e,t,i,iu,ru,su,f0);if(c){const f=new H;vi.getBarycoord(f0,iu,ru,su,f),r&&(c.uv=vi.getInterpolatedAttribute(r,a,l,u,f,new tt)),s&&(c.uv1=vi.getInterpolatedAttribute(s,a,l,u,f,new tt)),o&&(c.normal=vi.getInterpolatedAttribute(o,a,l,u,f,new H),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new H,materialIndex:0};vi.getNormal(iu,ru,su,h.normal),c.face=h,c.barycoord=f}return c}class Ii extends vr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ar(u,3)),this.setAttribute("normal",new ar(c,3)),this.setAttribute("uv",new ar(f,2));function _(m,g,d,v,x,y,E,w,A,C,S){const T=y/A,P=E/C,B=y/2,U=E/2,q=w/2,Y=A+1,G=C+1;let z=0,N=0;const Q=new H;for(let K=0;K<G;K++){const J=K*P-U;for(let ve=0;ve<Y;ve++){const Pe=ve*T-B;Q[m]=Pe*v,Q[g]=J*x,Q[d]=q,u.push(Q.x,Q.y,Q.z),Q[m]=0,Q[g]=0,Q[d]=w>0?1:-1,c.push(Q.x,Q.y,Q.z),f.push(ve/A),f.push(1-K/C),z+=1}}for(let K=0;K<C;K++)for(let J=0;J<A;J++){const ve=h+J+Y*K,Pe=h+J+Y*(K+1),Fe=h+(J+1)+Y*(K+1),ze=h+(J+1)+Y*K;l.push(ve,Pe,ze),l.push(Pe,Fe,ze),N+=6}a.addGroup(p,N,S),p+=N,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ho(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function hn(n){const e={};for(let t=0;t<n.length;t++){const i=Ho(n[t]);for(const r in i)e[r]=i[r]}return e}function BE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Gx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const zE={clone:Ho,merge:hn};var VE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends El{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VE,this.fragmentShader=GE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ho(e.uniforms),this.uniformsGroups=BE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Hx extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wr=new H,d0=new tt,h0=new tt;class ri extends Hx{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fh*2*Math.atan(Math.tan(pf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wr.x,wr.y).multiplyScalar(-e/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wr.x,wr.y).multiplyScalar(-e/wr.z)}getViewSize(e,t){return this.getViewBounds(e,d0,h0),t.subVectors(h0,d0)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pf*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Js=-90,eo=1;class HE extends Qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ri(Js,eo,e,t);r.layers=this.layers,this.add(r);const s=new ri(Js,eo,e,t);s.layers=this.layers,this.add(s);const o=new ri(Js,eo,e,t);o.layers=this.layers,this.add(o);const a=new ri(Js,eo,e,t);a.layers=this.layers,this.add(a);const l=new ri(Js,eo,e,t);l.layers=this.layers,this.add(l);const u=new ri(Js,eo,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Wx extends un{constructor(e=[],t=Us,i,r,s,o,a,l,u,c){super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xx extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Wx(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ii(5,5,5),s=new Hi({name:"CubemapFromEquirect",uniforms:Ho(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:sr});s.uniforms.tEquirect.value=t;const o=new Pt(r,s),a=t.minFilter;return t.minFilter===Ss&&(t.minFilter=ln),new HE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class ei extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WE={type:"move"};class Ff{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,i),d=this._getHandJoint(u,m);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&h>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(WE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ei;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class sm{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new sm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class XE extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class jx extends un{constructor(e=null,t=1,i=1,r,s,o,a,l,u=Kt,c=Kt,f,h){super(null,o,a,l,u,c,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class p0 extends Ei{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const to=new _t,m0=new _t,uu=[],g0=new ks,jE=new _t,ma=new Pt,ga=new Ml;class YE extends Pt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new p0(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,jE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ks),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,to),g0.copy(e.boundingBox).applyMatrix4(to),this.boundingBox.union(g0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ml),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,to),ga.copy(e.boundingSphere).applyMatrix4(to),this.boundingSphere.union(ga)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(ma.geometry=this.geometry,ma.material=this.material,ma.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ga.copy(this.boundingSphere),ga.applyMatrix4(i),e.ray.intersectsSphere(ga)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,to),m0.multiplyMatrices(i,to),ma.matrixWorld=m0,ma.raycast(e,uu);for(let o=0,a=uu.length;o<a;o++){const l=uu[o];l.instanceId=s,l.object=this,t.push(l)}uu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new p0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new jx(new Float32Array(r*this.count),r,this.count,Qp,xi));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Of=new H,qE=new H,$E=new ke;class ps{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Of.subVectors(i,t).cross(qE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Of),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||$E.getNormalMatrix(e),r=this.coplanarPoint(Of).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new Ml,KE=new tt(.5,.5),cu=new H;class om{constructor(e=new ps,t=new ps,i=new ps,r=new ps,s=new ps,o=new ps){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ui,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],c=s[4],f=s[5],h=s[6],p=s[7],_=s[8],m=s[9],g=s[10],d=s[11],v=s[12],x=s[13],y=s[14],E=s[15];if(r[0].setComponents(u-o,p-c,d-_,E-v).normalize(),r[1].setComponents(u+o,p+c,d+_,E+v).normalize(),r[2].setComponents(u+a,p+f,d+m,E+x).normalize(),r[3].setComponents(u-a,p-f,d-m,E-x).normalize(),i)r[4].setComponents(l,h,g,y).normalize(),r[5].setComponents(u-l,p-h,d-g,E-y).normalize();else if(r[4].setComponents(u-l,p-h,d-g,E-y).normalize(),t===Ui)r[5].setComponents(u+l,p+h,d+g,E+y).normalize();else if(t===sc)r[5].setComponents(l,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);const t=KE.distanceTo(e.center);return as.radius=.7071067811865476+t,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(cu.x=r.normal.x>0?e.max.x:e.min.x,cu.y=r.normal.y>0?e.max.y:e.min.y,cu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ZE extends un{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class al extends un{constructor(e,t,i=Vi,r,s,o,a=Kt,l=Kt,u,c=pr,f=1){if(c!==pr&&c!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class QE extends al{constructor(e,t=Vi,i=Us,r,s,o=Kt,a=Kt,l,u=pr){const c={width:e,height:e,depth:1},f=[c,c,c,c,c,c];super(e,e,t,i,r,s,o,a,l,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Yx extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Tl extends vr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,p=[],_=[],m=[],g=[];for(let d=0;d<c;d++){const v=d*h-o;for(let x=0;x<u;x++){const y=x*f-s;_.push(y,-v,0),m.push(0,0,1),g.push(x/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const x=v+u*d,y=v+u*(d+1),E=v+1+u*(d+1),w=v+1+u*d;p.push(x,y,w),p.push(y,E,w)}this.setIndex(p),this.setAttribute("position",new ar(_,3)),this.setAttribute("normal",new ar(m,3)),this.setAttribute("uv",new ar(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.width,e.height,e.widthSegments,e.heightSegments)}}class JE extends Hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class no extends El{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ux,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class eT extends El{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tT extends El{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class qx extends Qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const kf=new _t,_0=new H,v0=new H;class nT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new om,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;_0.setFromMatrixPosition(e.matrixWorld),t.position.copy(_0),v0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(v0),t.updateMatrixWorld(),kf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kf,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class am extends Hx{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class iT extends nT{constructor(){super(new am(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rT extends qx{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new iT}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class sT extends qx{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class oT extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class aT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function x0(n,e,t,i){const r=lT(i);switch(t){case Ix:return n*e;case Qp:return n*e/r.components*r.byteLength;case Jp:return n*e/r.components*r.byteLength;case Vo:return n*e*2/r.components*r.byteLength;case em:return n*e*2/r.components*r.byteLength;case Nx:return n*e*3/r.components*r.byteLength;case yi:return n*e*4/r.components*r.byteLength;case tm:return n*e*4/r.components*r.byteLength;case Au:case bu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cu:case Ru:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sh:case ah:return Math.max(n,16)*Math.max(e,8)/4;case rh:case oh:return Math.max(n,8)*Math.max(e,8)/2;case lh:case uh:case fh:case dh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ch:case hh:case ph:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case _h:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case vh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case xh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case yh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Eh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Th:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case wh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ah:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case bh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Rh:case Ph:case Dh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Lh:case Ih:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Nh:case Uh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lT(n){switch(n){case Bn:case Rx:return{byteLength:1,components:1};case rl:case Px:case hr:return{byteLength:2,components:1};case Kp:case Zp:return{byteLength:2,components:4};case Vi:case $p:case xi:return{byteLength:4,components:1};case Dx:case Lx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yp}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $x(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function uT(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=n.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,a),f.length===0)n.bufferSubData(u,0,c);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],m=f[p];m.start<=_.start+_.count+1?_.count=Math.max(_.count,m.start+m.count-_.start):(++h,f[h]=m)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const m=f[p];n.bufferSubData(u,m.start*c.BYTES_PER_ELEMENT,c,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var cT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_T=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ST=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ET=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,TT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,AT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,PT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,LT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,IT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,NT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,UT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,FT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zT="gl_FragColor = linearToOutputTexel( gl_FragColor );",VT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,HT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,WT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,YT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$T=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,QT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ew=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ow=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_w=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ew=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ww=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Aw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Iw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ow=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ww=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,jw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$w=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_A=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,TA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,CA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,PA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,NA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,VA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:cT,alphahash_pars_fragment:fT,alphamap_fragment:dT,alphamap_pars_fragment:hT,alphatest_fragment:pT,alphatest_pars_fragment:mT,aomap_fragment:gT,aomap_pars_fragment:_T,batching_pars_vertex:vT,batching_vertex:xT,begin_vertex:yT,beginnormal_vertex:ST,bsdfs:MT,iridescence_fragment:ET,bumpmap_pars_fragment:TT,clipping_planes_fragment:wT,clipping_planes_pars_fragment:AT,clipping_planes_pars_vertex:bT,clipping_planes_vertex:CT,color_fragment:RT,color_pars_fragment:PT,color_pars_vertex:DT,color_vertex:LT,common:IT,cube_uv_reflection_fragment:NT,defaultnormal_vertex:UT,displacementmap_pars_vertex:FT,displacementmap_vertex:OT,emissivemap_fragment:kT,emissivemap_pars_fragment:BT,colorspace_fragment:zT,colorspace_pars_fragment:VT,envmap_fragment:GT,envmap_common_pars_fragment:HT,envmap_pars_fragment:WT,envmap_pars_vertex:XT,envmap_physical_pars_fragment:nw,envmap_vertex:jT,fog_vertex:YT,fog_pars_vertex:qT,fog_fragment:$T,fog_pars_fragment:KT,gradientmap_pars_fragment:ZT,lightmap_pars_fragment:QT,lights_lambert_fragment:JT,lights_lambert_pars_fragment:ew,lights_pars_begin:tw,lights_toon_fragment:iw,lights_toon_pars_fragment:rw,lights_phong_fragment:sw,lights_phong_pars_fragment:ow,lights_physical_fragment:aw,lights_physical_pars_fragment:lw,lights_fragment_begin:uw,lights_fragment_maps:cw,lights_fragment_end:fw,logdepthbuf_fragment:dw,logdepthbuf_pars_fragment:hw,logdepthbuf_pars_vertex:pw,logdepthbuf_vertex:mw,map_fragment:gw,map_pars_fragment:_w,map_particle_fragment:vw,map_particle_pars_fragment:xw,metalnessmap_fragment:yw,metalnessmap_pars_fragment:Sw,morphinstance_vertex:Mw,morphcolor_vertex:Ew,morphnormal_vertex:Tw,morphtarget_pars_vertex:ww,morphtarget_vertex:Aw,normal_fragment_begin:bw,normal_fragment_maps:Cw,normal_pars_fragment:Rw,normal_pars_vertex:Pw,normal_vertex:Dw,normalmap_pars_fragment:Lw,clearcoat_normal_fragment_begin:Iw,clearcoat_normal_fragment_maps:Nw,clearcoat_pars_fragment:Uw,iridescence_pars_fragment:Fw,opaque_fragment:Ow,packing:kw,premultiplied_alpha_fragment:Bw,project_vertex:zw,dithering_fragment:Vw,dithering_pars_fragment:Gw,roughnessmap_fragment:Hw,roughnessmap_pars_fragment:Ww,shadowmap_pars_fragment:Xw,shadowmap_pars_vertex:jw,shadowmap_vertex:Yw,shadowmask_pars_fragment:qw,skinbase_vertex:$w,skinning_pars_vertex:Kw,skinning_vertex:Zw,skinnormal_vertex:Qw,specularmap_fragment:Jw,specularmap_pars_fragment:eA,tonemapping_fragment:tA,tonemapping_pars_fragment:nA,transmission_fragment:iA,transmission_pars_fragment:rA,uv_pars_fragment:sA,uv_pars_vertex:oA,uv_vertex:aA,worldpos_vertex:lA,background_vert:uA,background_frag:cA,backgroundCube_vert:fA,backgroundCube_frag:dA,cube_vert:hA,cube_frag:pA,depth_vert:mA,depth_frag:gA,distance_vert:_A,distance_frag:vA,equirect_vert:xA,equirect_frag:yA,linedashed_vert:SA,linedashed_frag:MA,meshbasic_vert:EA,meshbasic_frag:TA,meshlambert_vert:wA,meshlambert_frag:AA,meshmatcap_vert:bA,meshmatcap_frag:CA,meshnormal_vert:RA,meshnormal_frag:PA,meshphong_vert:DA,meshphong_frag:LA,meshphysical_vert:IA,meshphysical_frag:NA,meshtoon_vert:UA,meshtoon_frag:FA,points_vert:OA,points_frag:kA,shadow_vert:BA,shadow_frag:zA,sprite_vert:VA,sprite_frag:GA},de={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Pi={basic:{uniforms:hn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:hn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new We(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:hn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:hn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:hn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new We(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:hn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:hn([de.points,de.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:hn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:hn([de.common,de.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:hn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:hn([de.sprite,de.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:hn([de.common,de.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:hn([de.lights,de.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Pi.physical={uniforms:hn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const fu={r:0,b:0,g:0},ls=new Gi,HA=new _t;function WA(n,e,t,i,r,s,o){const a=new We(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function _(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function m(x){let y=!1;const E=_(x);E===null?d(a,l):E&&E.isColor&&(d(E,1),y=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(x,y){const E=_(y);E&&(E.isCubeTexture||E.mapping===Dc)?(c===void 0&&(c=new Pt(new Ii(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:Ho(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),ls.copy(y.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(HA.makeRotationFromEuler(ls)),c.material.toneMapped=Ke.getTransfer(E.colorSpace)!==ot,(f!==E||h!==E.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,p=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new Pt(new Tl(2,2),new Hi({name:"BackgroundMaterial",uniforms:Ho(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(E.colorSpace)!==ot,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,p=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function d(x,y){x.getRGB(fu,Gx(n)),i.buffers.color.setClear(fu.r,fu.g,fu.b,y,o)}function v(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,d(a,l)},render:m,addToRenderList:g,dispose:v}}function XA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(T,P,B,U,q){let Y=!1;const G=f(U,B,P);s!==G&&(s=G,u(s.object)),Y=p(T,U,B,q),Y&&_(T,U,B,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,y(T,P,B,U),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return n.createVertexArray()}function u(T){return n.bindVertexArray(T)}function c(T){return n.deleteVertexArray(T)}function f(T,P,B){const U=B.wireframe===!0;let q=i[T.id];q===void 0&&(q={},i[T.id]=q);let Y=q[P.id];Y===void 0&&(Y={},q[P.id]=Y);let G=Y[U];return G===void 0&&(G=h(l()),Y[U]=G),G}function h(T){const P=[],B=[],U=[];for(let q=0;q<t;q++)P[q]=0,B[q]=0,U[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:U,object:T,attributes:{},index:null}}function p(T,P,B,U){const q=s.attributes,Y=P.attributes;let G=0;const z=B.getAttributes();for(const N in z)if(z[N].location>=0){const K=q[N];let J=Y[N];if(J===void 0&&(N==="instanceMatrix"&&T.instanceMatrix&&(J=T.instanceMatrix),N==="instanceColor"&&T.instanceColor&&(J=T.instanceColor)),K===void 0||K.attribute!==J||J&&K.data!==J.data)return!0;G++}return s.attributesNum!==G||s.index!==U}function _(T,P,B,U){const q={},Y=P.attributes;let G=0;const z=B.getAttributes();for(const N in z)if(z[N].location>=0){let K=Y[N];K===void 0&&(N==="instanceMatrix"&&T.instanceMatrix&&(K=T.instanceMatrix),N==="instanceColor"&&T.instanceColor&&(K=T.instanceColor));const J={};J.attribute=K,K&&K.data&&(J.data=K.data),q[N]=J,G++}s.attributes=q,s.attributesNum=G,s.index=U}function m(){const T=s.newAttributes;for(let P=0,B=T.length;P<B;P++)T[P]=0}function g(T){d(T,0)}function d(T,P){const B=s.newAttributes,U=s.enabledAttributes,q=s.attributeDivisors;B[T]=1,U[T]===0&&(n.enableVertexAttribArray(T),U[T]=1),q[T]!==P&&(n.vertexAttribDivisor(T,P),q[T]=P)}function v(){const T=s.newAttributes,P=s.enabledAttributes;for(let B=0,U=P.length;B<U;B++)P[B]!==T[B]&&(n.disableVertexAttribArray(B),P[B]=0)}function x(T,P,B,U,q,Y,G){G===!0?n.vertexAttribIPointer(T,P,B,q,Y):n.vertexAttribPointer(T,P,B,U,q,Y)}function y(T,P,B,U){m();const q=U.attributes,Y=B.getAttributes(),G=P.defaultAttributeValues;for(const z in Y){const N=Y[z];if(N.location>=0){let Q=q[z];if(Q===void 0&&(z==="instanceMatrix"&&T.instanceMatrix&&(Q=T.instanceMatrix),z==="instanceColor"&&T.instanceColor&&(Q=T.instanceColor)),Q!==void 0){const K=Q.normalized,J=Q.itemSize,ve=e.get(Q);if(ve===void 0)continue;const Pe=ve.buffer,Fe=ve.type,ze=ve.bytesPerElement,$=Fe===n.INT||Fe===n.UNSIGNED_INT||Q.gpuType===$p;if(Q.isInterleavedBufferAttribute){const ee=Q.data,ye=ee.stride,Oe=Q.offset;if(ee.isInstancedInterleavedBuffer){for(let we=0;we<N.locationSize;we++)d(N.location+we,ee.meshPerAttribute);T.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let we=0;we<N.locationSize;we++)g(N.location+we);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let we=0;we<N.locationSize;we++)x(N.location+we,J/N.locationSize,Fe,K,ye*ze,(Oe+J/N.locationSize*we)*ze,$)}else{if(Q.isInstancedBufferAttribute){for(let ee=0;ee<N.locationSize;ee++)d(N.location+ee,Q.meshPerAttribute);T.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ee=0;ee<N.locationSize;ee++)g(N.location+ee);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let ee=0;ee<N.locationSize;ee++)x(N.location+ee,J/N.locationSize,Fe,K,J*ze,J/N.locationSize*ee*ze,$)}}else if(G!==void 0){const K=G[z];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(N.location,K);break;case 3:n.vertexAttrib3fv(N.location,K);break;case 4:n.vertexAttrib4fv(N.location,K);break;default:n.vertexAttrib1fv(N.location,K)}}}}v()}function E(){C();for(const T in i){const P=i[T];for(const B in P){const U=P[B];for(const q in U)c(U[q].object),delete U[q];delete P[B]}delete i[T]}}function w(T){if(i[T.id]===void 0)return;const P=i[T.id];for(const B in P){const U=P[B];for(const q in U)c(U[q].object),delete U[q];delete P[B]}delete i[T.id]}function A(T){for(const P in i){const B=i[P];if(B[T.id]===void 0)continue;const U=B[T.id];for(const q in U)c(U[q].object),delete U[q];delete B[T.id]}}function C(){S(),o=!0,s!==r&&(s=r,u(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:m,enableAttribute:g,disableUnusedAttributes:v}}function jA(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let _=0;_<f;_++)p+=c[_];t.update(p,i,1)}function l(u,c,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],c[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let _=0;for(let m=0;m<f;m++)_+=c[m]*h[m];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function YA(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==yi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===hr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Bn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==xi&&!C)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(Ue("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,maxSamples:E,samples:w}}function qA(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ps,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,m=f.clipIntersection,g=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!g)s?c(null):u();else{const v=s?0:i,x=v*4;let y=d.clippingState||null;l.value=y,y=c(_,h,x,p);for(let E=0;E!==x;++E)y[E]=t[E];d.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,_){const m=f!==null?f.length:0;let g=null;if(m!==0){if(g=l.value,_!==!0||g===null){const d=p+m*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<d)&&(g=new Float32Array(d));for(let x=0,y=p;x!==m;++x,y+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function $A(n){let e=new WeakMap;function t(o,a){return a===eh?o.mapping=Us:a===th&&(o.mapping=zo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===eh||a===th)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Xx(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ir=4,y0=[.125,.215,.35,.446,.526,.582],_s=20,KA=256,_a=new am,S0=new We;let Bf=null,zf=0,Vf=0,Gf=!1;const ZA=new H;class M0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=ZA}=s;Bf=this._renderer.getRenderTarget(),zf=this._renderer.getActiveCubeFace(),Vf=this._renderer.getActiveMipmapLevel(),Gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=w0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=T0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bf,zf,Vf),this._renderer.xr.enabled=Gf,e.scissorTest=!1,io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===zo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bf=this._renderer.getRenderTarget(),zf=this._renderer.getActiveCubeFace(),Vf=this._renderer.getActiveMipmapLevel(),Gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:hr,format:yi,colorSpace:Go,depthBuffer:!1},r=E0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=E0(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=QA(s)),this._blurMaterial=eb(s,e,t),this._ggxMaterial=JA(s,e,t)}return r}_compileMaterial(e){const t=new Pt(new vr,e);this._renderer.compile(t,_a)}_sceneToCubeUV(e,t,i,r,s){const l=new ri(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(S0),f.toneMapping=Bi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new Ii,new ac({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const m=this._backgroundBox,g=m.material;let d=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,d=!0):(g.color.copy(S0),d=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[x],s.y,s.z)):y===1?(l.up.set(0,0,u[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[x],s.z)):(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[x]));const E=this._cubeSize;io(r,y*E,x>2?E:0,E,E),f.setRenderTarget(r),d&&f.render(m,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Us||e.mapping===zo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=w0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=T0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;io(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,_a)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,u=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),f=Math.sqrt(u*u-c*c),h=0+u*1.25,p=f*h,{_lodMax:_}=this,m=this._sizeLods[i],g=3*m*(i>_-Ir?i-_+Ir:0),d=4*(this._cubeSize-m);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,io(s,g,d,3*m,2*m),r.setRenderTarget(s),r.render(a,_a),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,io(e,g,d,3*m,2*m),r.setRenderTarget(e),r.render(a,_a)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");const c=3,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*_s-1),m=s/_,g=isFinite(s)?1+Math.floor(c*m):_s;g>_s&&Ue(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${_s}`);const d=[];let v=0;for(let A=0;A<_s;++A){const C=A/m,S=Math.exp(-C*C/2);d.push(S),A===0?v+=S:A<g&&(v+=2*S)}for(let A=0;A<d.length;A++)d[A]=d[A]/v;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-i;const y=this._sizeLods[r],E=3*y*(r>x-Ir?r-x+Ir:0),w=4*(this._cubeSize-y);io(t,E,w,3*y,2*y),l.setRenderTarget(t),l.render(f,_a)}}function QA(n){const e=[],t=[],i=[];let r=n;const s=n-Ir+1+y0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Ir?l=y0[o-n+Ir-1]:o===0&&(l=0),t.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,m=3,g=2,d=1,v=new Float32Array(m*_*p),x=new Float32Array(g*_*p),y=new Float32Array(d*_*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,C=w>2?0:-1,S=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];v.set(S,m*_*w),x.set(h,g*_*w);const T=[w,w,w,w,w,w];y.set(T,d*_*w)}const E=new vr;E.setAttribute("position",new Ei(v,m)),E.setAttribute("uv",new Ei(x,g)),E.setAttribute("faceIndex",new Ei(y,d)),i.push(new Pt(E,null)),r>Ir&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function E0(n,e,t){const i=new zi(n,e,t);return i.texture.mapping=Dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function io(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function JA(n,e,t){return new Hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:KA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function eb(n,e,t){const i=new Float32Array(_s),r=new H(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function T0(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function w0(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Lc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tb(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===eh||l===th,c=l===Us||l===zo;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new M0(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new M0(n)),f=u?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function nb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ol("WebGLRenderer: "+i+" extension not supported."),r}}}function ib(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function u(f){const h=[],p=f.index,_=f.attributes.position;let m=0;if(p!==null){const v=p.array;m=p.version;for(let x=0,y=v.length;x<y;x+=3){const E=v[x+0],w=v[x+1],A=v[x+2];h.push(E,w,w,A,A,E)}}else if(_!==void 0){const v=_.array;m=_.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const E=x+0,w=x+1,A=x+2;h.push(E,w,w,A,A,E)}}else return;const g=new(Fx(h)?Vx:zx)(h,1);g.version=m;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function rb(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function u(h,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,h*o,_),t.update(p,i,_))}function c(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let g=0;for(let d=0;d<_;d++)g+=p[d];t.update(g,i,1)}function f(h,p,_,m){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<h.length;d++)u(h[d]/o,p[d],m[d]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,m,0,_);let d=0;for(let v=0;v<_;v++)d+=p[v]*m[v];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function sb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:et("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ob(n,e,t){const i=new WeakMap,r=new Lt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let T=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var p=T;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),m===!0&&(y=2),g===!0&&(y=3);let E=a.attributes.position.count*y,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*w*4*f),C=new Ox(A,E,w,f);C.type=xi,C.needsUpdate=!0;const S=y*4;for(let P=0;P<f;P++){const B=d[P],U=v[P],q=x[P],Y=E*w*4*P;for(let G=0;G<B.count;G++){const z=G*S;_===!0&&(r.fromBufferAttribute(B,G),A[Y+z+0]=r.x,A[Y+z+1]=r.y,A[Y+z+2]=r.z,A[Y+z+3]=0),m===!0&&(r.fromBufferAttribute(U,G),A[Y+z+4]=r.x,A[Y+z+5]=r.y,A[Y+z+6]=r.z,A[Y+z+7]=0),g===!0&&(r.fromBufferAttribute(q,G),A[Y+z+8]=r.x,A[Y+z+9]=r.y,A[Y+z+10]=r.z,A[Y+z+11]=q.itemSize===4?r.w:1)}}h={count:f,texture:C,size:new tt(E,w)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const m=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function ab(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const lb={[Mx]:"LINEAR_TONE_MAPPING",[Ex]:"REINHARD_TONE_MAPPING",[Tx]:"CINEON_TONE_MAPPING",[qp]:"ACES_FILMIC_TONE_MAPPING",[Ax]:"AGX_TONE_MAPPING",[bx]:"NEUTRAL_TONE_MAPPING",[wx]:"CUSTOM_TONE_MAPPING"};function ub(n,e,t,i,r){const s=new zi(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),o=new zi(e,t,{type:hr,depthBuffer:!1,stencilBuffer:!1}),a=new vr;a.setAttribute("position",new ar([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ar([0,2,0,0,2,0],2));const l=new JE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Pt(a,l),c=new am(-1,1,1,-1,0,1);let f=null,h=null,p=!1,_,m=null,g=[],d=!1;this.setSize=function(v,x){s.setSize(v,x),o.setSize(v,x);for(let y=0;y<g.length;y++){const E=g[y];E.setSize&&E.setSize(v,x)}},this.setEffects=function(v){g=v,d=g.length>0&&g[0].isRenderPass===!0;const x=s.width,y=s.height;for(let E=0;E<g.length;E++){const w=g[E];w.setSize&&w.setSize(x,y)}},this.begin=function(v,x){if(p||v.toneMapping===Bi&&g.length===0)return!1;if(m=x,x!==null){const y=x.width,E=x.height;(s.width!==y||s.height!==E)&&this.setSize(y,E)}return d===!1&&v.setRenderTarget(s),_=v.toneMapping,v.toneMapping=Bi,!0},this.hasRenderPass=function(){return d},this.end=function(v,x){v.toneMapping=_,p=!0;let y=s,E=o;for(let w=0;w<g.length;w++){const A=g[w];if(A.enabled!==!1&&(A.render(v,E,y,x),A.needsSwap!==!1)){const C=y;y=E,E=C}}if(f!==v.outputColorSpace||h!==v.toneMapping){f=v.outputColorSpace,h=v.toneMapping,l.defines={},Ke.getTransfer(f)===ot&&(l.defines.SRGB_TRANSFER="");const w=lb[h];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(m),v.render(u,c),m=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Kx=new un,Oh=new al(1,1),Zx=new Ox,Qx=new AE,Jx=new Wx,A0=[],b0=[],C0=new Float32Array(16),R0=new Float32Array(9),P0=new Float32Array(4);function ea(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=A0[r];if(s===void 0&&(s=new Float32Array(r),A0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ic(n,e){let t=b0[e];t===void 0&&(t=new Int32Array(e),b0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function db(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function hb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function pb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,i))return;P0.set(i),n.uniformMatrix2fv(this.addr,!1,P0),Ht(t,i)}}function mb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,i))return;R0.set(i),n.uniformMatrix3fv(this.addr,!1,R0),Ht(t,i)}}function gb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,i))return;C0.set(i),n.uniformMatrix4fv(this.addr,!1,C0),Ht(t,i)}}function _b(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function vb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2iv(this.addr,e),Ht(t,e)}}function xb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3iv(this.addr,e),Ht(t,e)}}function yb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4iv(this.addr,e),Ht(t,e)}}function Sb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Mb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2uiv(this.addr,e),Ht(t,e)}}function Eb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3uiv(this.addr,e),Ht(t,e)}}function Tb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4uiv(this.addr,e),Ht(t,e)}}function wb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Oh.compareFunction=t.isReversedDepthBuffer()?im:nm,s=Oh):s=Kx,t.setTexture2D(e||s,r)}function Ab(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Qx,r)}function bb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Jx,r)}function Cb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Zx,r)}function Rb(n){switch(n){case 5126:return cb;case 35664:return fb;case 35665:return db;case 35666:return hb;case 35674:return pb;case 35675:return mb;case 35676:return gb;case 5124:case 35670:return _b;case 35667:case 35671:return vb;case 35668:case 35672:return xb;case 35669:case 35673:return yb;case 5125:return Sb;case 36294:return Mb;case 36295:return Eb;case 36296:return Tb;case 35678:case 36198:case 36298:case 36306:case 35682:return wb;case 35679:case 36299:case 36307:return Ab;case 35680:case 36300:case 36308:case 36293:return bb;case 36289:case 36303:case 36311:case 36292:return Cb}}function Pb(n,e){n.uniform1fv(this.addr,e)}function Db(n,e){const t=ea(e,this.size,2);n.uniform2fv(this.addr,t)}function Lb(n,e){const t=ea(e,this.size,3);n.uniform3fv(this.addr,t)}function Ib(n,e){const t=ea(e,this.size,4);n.uniform4fv(this.addr,t)}function Nb(n,e){const t=ea(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ub(n,e){const t=ea(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Fb(n,e){const t=ea(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ob(n,e){n.uniform1iv(this.addr,e)}function kb(n,e){n.uniform2iv(this.addr,e)}function Bb(n,e){n.uniform3iv(this.addr,e)}function zb(n,e){n.uniform4iv(this.addr,e)}function Vb(n,e){n.uniform1uiv(this.addr,e)}function Gb(n,e){n.uniform2uiv(this.addr,e)}function Hb(n,e){n.uniform3uiv(this.addr,e)}function Wb(n,e){n.uniform4uiv(this.addr,e)}function Xb(n,e,t){const i=this.cache,r=e.length,s=Ic(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Oh:o=Kx;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function jb(n,e,t){const i=this.cache,r=e.length,s=Ic(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Qx,s[o])}function Yb(n,e,t){const i=this.cache,r=e.length,s=Ic(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Jx,s[o])}function qb(n,e,t){const i=this.cache,r=e.length,s=Ic(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Zx,s[o])}function $b(n){switch(n){case 5126:return Pb;case 35664:return Db;case 35665:return Lb;case 35666:return Ib;case 35674:return Nb;case 35675:return Ub;case 35676:return Fb;case 5124:case 35670:return Ob;case 35667:case 35671:return kb;case 35668:case 35672:return Bb;case 35669:case 35673:return zb;case 5125:return Vb;case 36294:return Gb;case 36295:return Hb;case 36296:return Wb;case 35678:case 36198:case 36298:case 36306:case 35682:return Xb;case 35679:case 36299:case 36307:return jb;case 35680:case 36300:case 36308:case 36293:return Yb;case 36289:case 36303:case 36311:case 36292:return qb}}class Kb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Rb(t.type)}}class Zb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$b(t.type)}}class Qb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Hf=/(\w+)(\])?(\[|\.)?/g;function D0(n,e){n.seq.push(e),n.map[e.id]=e}function Jb(n,e,t){const i=n.name,r=i.length;for(Hf.lastIndex=0;;){const s=Hf.exec(i),o=Hf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){D0(t,u===void 0?new Kb(a,n,e):new Zb(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Qb(a),D0(t,f)),t=f}}}class Pu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Jb(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function L0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const eC=37297;let tC=0;function nC(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const I0=new ke;function iC(n){Ke._getMatrix(I0,Ke.workingColorSpace,n);const e=`mat3( ${I0.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case rc:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function N0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+nC(n.getShaderSource(e),a)}else return s}function rC(n,e){const t=iC(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const sC={[Mx]:"Linear",[Ex]:"Reinhard",[Tx]:"Cineon",[qp]:"ACESFilmic",[Ax]:"AgX",[bx]:"Neutral",[wx]:"Custom"};function oC(n,e){const t=sC[e];return t===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const du=new H;function aC(){Ke.getLuminanceCoefficients(du);const n=du.x.toFixed(4),e=du.y.toFixed(4),t=du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wa).join(`
`)}function uC(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cC(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function wa(n){return n!==""}function U0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function F0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fC=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(n){return n.replace(fC,hC)}const dC=new Map;function hC(n,e){let t=Be[e];if(t===void 0){const i=dC.get(e);if(i!==void 0)t=Be[i],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kh(t)}const pC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function O0(n){return n.replace(pC,mC)}function mC(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function k0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const gC={[Oa]:"SHADOWMAP_TYPE_PCF",[Ta]:"SHADOWMAP_TYPE_VSM"};function _C(n){return gC[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vC={[Us]:"ENVMAP_TYPE_CUBE",[zo]:"ENVMAP_TYPE_CUBE",[Dc]:"ENVMAP_TYPE_CUBE_UV"};function xC(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":vC[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const yC={[zo]:"ENVMAP_MODE_REFRACTION"};function SC(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":yC[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const MC={[Sx]:"ENVMAP_BLENDING_MULTIPLY",[aE]:"ENVMAP_BLENDING_MIX",[lE]:"ENVMAP_BLENDING_ADD"};function EC(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":MC[n.combine]||"ENVMAP_BLENDING_NONE"}function TC(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function wC(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=_C(t),u=xC(t),c=SC(t),f=EC(t),h=TC(t),p=lC(t),_=uC(s),m=r.createProgram();let g,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(wa).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(wa).join(`
`),d.length>0&&(d+=`
`)):(g=[k0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wa).join(`
`),d=[k0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?Be.tonemapping_pars_fragment:"",t.toneMapping!==Bi?oC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,rC("linearToOutputTexel",t.outputColorSpace),aC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wa).join(`
`)),o=kh(o),o=U0(o,t),o=F0(o,t),a=kh(a),a=U0(a,t),a=F0(a,t),o=O0(o),a=O0(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===$g?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$g?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=v+g+o,y=v+d+a,E=L0(r,r.VERTEX_SHADER,x),w=L0(r,r.FRAGMENT_SHADER,y);r.attachShader(m,E),r.attachShader(m,w),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function A(P){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(m)||"",U=r.getShaderInfoLog(E)||"",q=r.getShaderInfoLog(w)||"",Y=B.trim(),G=U.trim(),z=q.trim();let N=!0,Q=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,E,w);else{const K=N0(r,E,"vertex"),J=N0(r,w,"fragment");et("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Y+`
`+K+`
`+J)}else Y!==""?Ue("WebGLProgram: Program Info Log:",Y):(G===""||z==="")&&(Q=!1);Q&&(P.diagnostics={runnable:N,programLog:Y,vertexShader:{log:G,prefix:g},fragmentShader:{log:z,prefix:d}})}r.deleteShader(E),r.deleteShader(w),C=new Pu(r,m),S=cC(r,m)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(m,eC)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tC++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=w,this}let AC=0;class bC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new CC(e),t.set(e,i)),i}}class CC{constructor(e){this.id=AC++,this.code=e,this.usedTimes=0}}function RC(n,e,t,i,r,s,o){const a=new kx,l=new bC,u=new Set,c=[],f=new Map,h=r.logarithmicDepthBuffer;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return u.add(S),S===0?"uv":`uv${S}`}function g(S,T,P,B,U){const q=B.fog,Y=U.geometry,G=S.isMeshStandardMaterial?B.environment:null,z=(S.isMeshStandardMaterial?t:e).get(S.envMap||G),N=z&&z.mapping===Dc?z.image.height:null,Q=_[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&Ue("WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const K=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,J=K!==void 0?K.length:0;let ve=0;Y.morphAttributes.position!==void 0&&(ve=1),Y.morphAttributes.normal!==void 0&&(ve=2),Y.morphAttributes.color!==void 0&&(ve=3);let Pe,Fe,ze,$;if(Q){const rt=Pi[Q];Pe=rt.vertexShader,Fe=rt.fragmentShader}else Pe=S.vertexShader,Fe=S.fragmentShader,l.update(S),ze=l.getVertexShaderID(S),$=l.getFragmentShaderID(S);const ee=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),Oe=U.isInstancedMesh===!0,we=U.isBatchedMesh===!0,Xe=!!S.map,Ft=!!S.matcap,je=!!z,Qe=!!S.aoMap,nt=!!S.lightMap,De=!!S.bumpMap,yt=!!S.normalMap,D=!!S.displacementMap,St=!!S.emissiveMap,$e=!!S.metalnessMap,it=!!S.roughnessMap,Ae=S.anisotropy>0,R=S.clearcoat>0,M=S.dispersion>0,I=S.iridescence>0,Z=S.sheen>0,k=S.transmission>0,F=Ae&&!!S.anisotropyMap,me=R&&!!S.clearcoatMap,ie=R&&!!S.clearcoatNormalMap,ge=R&&!!S.clearcoatRoughnessMap,_e=I&&!!S.iridescenceMap,ne=I&&!!S.iridescenceThicknessMap,ae=Z&&!!S.sheenColorMap,xe=Z&&!!S.sheenRoughnessMap,Ee=!!S.specularMap,le=!!S.specularColorMap,Ie=!!S.specularIntensityMap,L=k&&!!S.transmissionMap,ce=k&&!!S.thicknessMap,oe=!!S.gradientMap,he=!!S.alphaMap,re=S.alphaTest>0,te=!!S.alphaHash,ue=!!S.extensions;let Ne=Bi;S.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ne=n.toneMapping);const dt={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:Pe,fragmentShader:Fe,defines:S.defines,customVertexShaderID:ze,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:we,batchingColor:we&&U._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&U.instanceColor!==null,instancingMorph:Oe&&U.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Go,alphaToCoverage:!!S.alphaToCoverage,map:Xe,matcap:Ft,envMap:je,envMapMode:je&&z.mapping,envMapCubeUVHeight:N,aoMap:Qe,lightMap:nt,bumpMap:De,normalMap:yt,displacementMap:D,emissiveMap:St,normalMapObjectSpace:yt&&S.normalMapType===fE,normalMapTangentSpace:yt&&S.normalMapType===Ux,metalnessMap:$e,roughnessMap:it,anisotropy:Ae,anisotropyMap:F,clearcoat:R,clearcoatMap:me,clearcoatNormalMap:ie,clearcoatRoughnessMap:ge,dispersion:M,iridescence:I,iridescenceMap:_e,iridescenceThicknessMap:ne,sheen:Z,sheenColorMap:ae,sheenRoughnessMap:xe,specularMap:Ee,specularColorMap:le,specularIntensityMap:Ie,transmission:k,transmissionMap:L,thicknessMap:ce,gradientMap:oe,opaque:S.transparent===!1&&S.blending===Ao&&S.alphaToCoverage===!1,alphaMap:he,alphaTest:re,alphaHash:te,combine:S.combine,mapUv:Xe&&m(S.map.channel),aoMapUv:Qe&&m(S.aoMap.channel),lightMapUv:nt&&m(S.lightMap.channel),bumpMapUv:De&&m(S.bumpMap.channel),normalMapUv:yt&&m(S.normalMap.channel),displacementMapUv:D&&m(S.displacementMap.channel),emissiveMapUv:St&&m(S.emissiveMap.channel),metalnessMapUv:$e&&m(S.metalnessMap.channel),roughnessMapUv:it&&m(S.roughnessMap.channel),anisotropyMapUv:F&&m(S.anisotropyMap.channel),clearcoatMapUv:me&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:xe&&m(S.sheenRoughnessMap.channel),specularMapUv:Ee&&m(S.specularMap.channel),specularColorMapUv:le&&m(S.specularColorMap.channel),specularIntensityMapUv:Ie&&m(S.specularIntensityMap.channel),transmissionMapUv:L&&m(S.transmissionMap.channel),thicknessMapUv:ce&&m(S.thicknessMap.channel),alphaMapUv:he&&m(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(yt||Ae),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!Y.attributes.uv&&(Xe||he),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ye,skinning:U.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ve,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Xe&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===ot,decodeVideoTextureEmissive:St&&S.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(S.emissiveMap.colorSpace)===ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Li,flipSided:S.side===bn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ue&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&S.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return dt.vertexUv1s=u.has(1),dt.vertexUv2s=u.has(2),dt.vertexUv3s=u.has(3),u.clear(),dt}function d(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)T.push(P),T.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(v(T,S),x(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function v(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function x(S,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const T=_[S.type];let P;if(T){const B=Pi[T];P=zE.clone(B.uniforms)}else P=S.uniforms;return P}function E(S,T){let P=f.get(T);return P!==void 0?++P.usedTimes:(P=new wC(n,T,S,s),c.push(P),f.set(T,P)),P}function w(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),f.delete(S.cacheKey),S.destroy()}}function A(S){l.remove(S)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:y,acquireProgram:E,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:C}}function PC(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function DC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function B0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function z0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,_,m,g){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=m,d.group=g),e++,d}function a(f,h,p,_,m,g){const d=o(f,h,p,_,m,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,_,m,g){const d=o(f,h,p,_,m,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||DC),i.length>1&&i.sort(h||B0),r.length>1&&r.sort(h||B0)}function c(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function LC(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new z0,n.set(i,[o])):r>=s.length?(o=new z0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function IC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new We};break;case"SpotLight":t={position:new H,direction:new H,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function NC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let UC=0;function FC(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function OC(n){const e=new IC,t=NC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new H);const r=new H,s=new _t,o=new _t;function a(u){let c=0,f=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,_=0,m=0,g=0,d=0,v=0,x=0,y=0,E=0,w=0,A=0;u.sort(FC);for(let S=0,T=u.length;S<T;S++){const P=u[S],B=P.color,U=P.intensity,q=P.distance;let Y=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Vo?Y=P.shadow.map.texture:Y=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)c+=B.r*U,f+=B.g*U,h+=B.b*U;else if(P.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(P.sh.coefficients[G],U);A++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,N=t.get(P);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=P.shadow.matrix,v++}i.directional[p]=G,p++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(B).multiplyScalar(U),G.distance=q,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,i.spot[m]=G;const z=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,z.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[m]=z.matrix,P.castShadow){const N=t.get(P);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,i.spotShadow[m]=N,i.spotShadowMap[m]=Y,y++}m++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(B).multiplyScalar(U),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=G,g++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const z=P.shadow,N=t.get(P);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,N.shadowCameraNear=z.camera.near,N.shadowCameraFar=z.camera.far,i.pointShadow[_]=N,i.pointShadowMap[_]=Y,i.pointShadowMatrix[_]=P.shadow.matrix,x++}i.point[_]=G,_++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(U),G.groundColor.copy(P.groundColor).multiplyScalar(U),i.hemi[d]=G,d++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const C=i.hash;(C.directionalLength!==p||C.pointLength!==_||C.spotLength!==m||C.rectAreaLength!==g||C.hemiLength!==d||C.numDirectionalShadows!==v||C.numPointShadows!==x||C.numSpotShadows!==y||C.numSpotMaps!==E||C.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=m,i.rectArea.length=g,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+E-w,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,C.directionalLength=p,C.pointLength=_,C.spotLength=m,C.rectAreaLength=g,C.hemiLength=d,C.numDirectionalShadows=v,C.numPointShadows=x,C.numSpotShadows=y,C.numSpotMaps=E,C.numLightProbes=A,i.version=UC++)}function l(u,c){let f=0,h=0,p=0,_=0,m=0;const g=c.matrixWorldInverse;for(let d=0,v=u.length;d<v;d++){const x=u[d];if(x.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(x.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),h++}else if(x.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function V0(n){const e=new OC(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function kC(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new V0(n),e.set(r,[a])):s>=o.length?(a=new V0(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const BC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,VC=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],GC=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],G0=new _t,va=new H,Wf=new H;function HC(n,e,t){let i=new om;const r=new tt,s=new tt,o=new Lt,a=new eT,l=new tT,u={},c=t.maxTextureSize,f={[dr]:bn,[bn]:dr,[Li]:Li},h=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:BC,fragmentShader:zC}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new vr;_.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Pt(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oa;let d=this.type;this.render=function(w,A,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;w.type===G1&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=Oa);const S=n.getRenderTarget(),T=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),B=n.state;B.setBlending(sr),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const U=d!==this.type;U&&A.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(Y=>Y.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,Y=w.length;q<Y;q++){const G=w[q],z=G.shadow;if(z===void 0){Ue("WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const N=z.getFrameExtents();if(r.multiply(N),s.copy(z.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/N.x),r.x=s.x*N.x,z.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/N.y),r.y=s.y*N.y,z.mapSize.y=s.y)),z.map===null||U===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Ta){if(G.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new zi(r.x,r.y,{format:Vo,type:hr,minFilter:ln,magFilter:ln,generateMipmaps:!1}),z.map.texture.name=G.name+".shadowMap",z.map.depthTexture=new al(r.x,r.y,xi),z.map.depthTexture.name=G.name+".shadowMapDepth",z.map.depthTexture.format=pr,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Kt,z.map.depthTexture.magFilter=Kt}else{G.isPointLight?(z.map=new Xx(r.x),z.map.depthTexture=new QE(r.x,Vi)):(z.map=new zi(r.x,r.y),z.map.depthTexture=new al(r.x,r.y,Vi)),z.map.depthTexture.name=G.name+".shadowMap",z.map.depthTexture.format=pr;const K=n.state.buffers.depth.getReversed();this.type===Oa?(z.map.depthTexture.compareFunction=K?im:nm,z.map.depthTexture.minFilter=ln,z.map.depthTexture.magFilter=ln):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Kt,z.map.depthTexture.magFilter=Kt)}z.camera.updateProjectionMatrix()}const Q=z.map.isWebGLCubeRenderTarget?6:1;for(let K=0;K<Q;K++){if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,K),n.clear();else{K===0&&(n.setRenderTarget(z.map),n.clear());const J=z.getViewport(K);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),B.viewport(o)}if(G.isPointLight){const J=z.camera,ve=z.matrix,Pe=G.distance||J.far;Pe!==J.far&&(J.far=Pe,J.updateProjectionMatrix()),va.setFromMatrixPosition(G.matrixWorld),J.position.copy(va),Wf.copy(J.position),Wf.add(VC[K]),J.up.copy(GC[K]),J.lookAt(Wf),J.updateMatrixWorld(),ve.makeTranslation(-va.x,-va.y,-va.z),G0.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),z._frustum.setFromProjectionMatrix(G0,J.coordinateSystem,J.reversedDepth)}else z.updateMatrices(G);i=z.getFrustum(),y(A,C,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===Ta&&v(z,C),z.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(S,T,P)};function v(w,A){const C=e.update(m);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new zi(r.x,r.y,{format:Vo,type:hr})),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,C,h,m,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,C,p,m,null)}function x(w,A,C,S){let T=null;const P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)T=P;else if(T=C.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const B=T.uuid,U=A.uuid;let q=u[B];q===void 0&&(q={},u[B]=q);let Y=q[U];Y===void 0&&(Y=T.clone(),q[U]=Y,A.addEventListener("dispose",E)),T=Y}if(T.visible=A.visible,T.wireframe=A.wireframe,S===Ta?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:f[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,C.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const B=n.properties.get(T);B.light=C}return T}function y(w,A,C,S,T){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===Ta)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const U=e.update(w),q=w.material;if(Array.isArray(q)){const Y=U.groups;for(let G=0,z=Y.length;G<z;G++){const N=Y[G],Q=q[N.materialIndex];if(Q&&Q.visible){const K=x(w,Q,S,T);w.onBeforeShadow(n,w,A,C,U,K,N),n.renderBufferDirect(C,null,U,K,w,N),w.onAfterShadow(n,w,A,C,U,K,N)}}}else if(q.visible){const Y=x(w,q,S,T);w.onBeforeShadow(n,w,A,C,U,Y,null),n.renderBufferDirect(C,null,U,Y,w,null),w.onAfterShadow(n,w,A,C,U,Y,null)}}const B=w.children;for(let U=0,q=B.length;U<q;U++)y(B[U],A,C,S,T)}function E(w){w.target.removeEventListener("dispose",E);for(const C in u){const S=u[C],T=w.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}const WC={[Yd]:qd,[$d]:Qd,[Kd]:Jd,[Bo]:Zd,[qd]:Yd,[Qd]:$d,[Jd]:Kd,[Zd]:Bo};function XC(n,e){function t(){let L=!1;const ce=new Lt;let oe=null;const he=new Lt(0,0,0,0);return{setMask:function(re){oe!==re&&!L&&(n.colorMask(re,re,re,re),oe=re)},setLocked:function(re){L=re},setClear:function(re,te,ue,Ne,dt){dt===!0&&(re*=Ne,te*=Ne,ue*=Ne),ce.set(re,te,ue,Ne),he.equals(ce)===!1&&(n.clearColor(re,te,ue,Ne),he.copy(ce))},reset:function(){L=!1,oe=null,he.set(-1,0,0,0)}}}function i(){let L=!1,ce=!1,oe=null,he=null,re=null;return{setReversed:function(te){if(ce!==te){const ue=e.get("EXT_clip_control");te?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT),ce=te;const Ne=re;re=null,this.setClear(Ne)}},getReversed:function(){return ce},setTest:function(te){te?ee(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(te){oe!==te&&!L&&(n.depthMask(te),oe=te)},setFunc:function(te){if(ce&&(te=WC[te]),he!==te){switch(te){case Yd:n.depthFunc(n.NEVER);break;case qd:n.depthFunc(n.ALWAYS);break;case $d:n.depthFunc(n.LESS);break;case Bo:n.depthFunc(n.LEQUAL);break;case Kd:n.depthFunc(n.EQUAL);break;case Zd:n.depthFunc(n.GEQUAL);break;case Qd:n.depthFunc(n.GREATER);break;case Jd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=te}},setLocked:function(te){L=te},setClear:function(te){re!==te&&(ce&&(te=1-te),n.clearDepth(te),re=te)},reset:function(){L=!1,oe=null,he=null,re=null,ce=!1}}}function r(){let L=!1,ce=null,oe=null,he=null,re=null,te=null,ue=null,Ne=null,dt=null;return{setTest:function(rt){L||(rt?ee(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(rt){ce!==rt&&!L&&(n.stencilMask(rt),ce=rt)},setFunc:function(rt,wi,Xi){(oe!==rt||he!==wi||re!==Xi)&&(n.stencilFunc(rt,wi,Xi),oe=rt,he=wi,re=Xi)},setOp:function(rt,wi,Xi){(te!==rt||ue!==wi||Ne!==Xi)&&(n.stencilOp(rt,wi,Xi),te=rt,ue=wi,Ne=Xi)},setLocked:function(rt){L=rt},setClear:function(rt){dt!==rt&&(n.clearStencil(rt),dt=rt)},reset:function(){L=!1,ce=null,oe=null,he=null,re=null,te=null,ue=null,Ne=null,dt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},h=new WeakMap,p=[],_=null,m=!1,g=null,d=null,v=null,x=null,y=null,E=null,w=null,A=new We(0,0,0),C=0,S=!1,T=null,P=null,B=null,U=null,q=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,z=0;const N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(N)[1]),G=z>=1):N.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),G=z>=2);let Q=null,K={};const J=n.getParameter(n.SCISSOR_BOX),ve=n.getParameter(n.VIEWPORT),Pe=new Lt().fromArray(J),Fe=new Lt().fromArray(ve);function ze(L,ce,oe,he){const re=new Uint8Array(4),te=n.createTexture();n.bindTexture(L,te),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ue=0;ue<oe;ue++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(ce+ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return te}const $={};$[n.TEXTURE_2D]=ze(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(n.DEPTH_TEST),o.setFunc(Bo),De(!1),yt(Hg),ee(n.CULL_FACE),Qe(sr);function ee(L){c[L]!==!0&&(n.enable(L),c[L]=!0)}function ye(L){c[L]!==!1&&(n.disable(L),c[L]=!1)}function Oe(L,ce){return f[L]!==ce?(n.bindFramebuffer(L,ce),f[L]=ce,L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ce),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function we(L,ce){let oe=p,he=!1;if(L){oe=h.get(ce),oe===void 0&&(oe=[],h.set(ce,oe));const re=L.textures;if(oe.length!==re.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let te=0,ue=re.length;te<ue;te++)oe[te]=n.COLOR_ATTACHMENT0+te;oe.length=re.length,he=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,he=!0);he&&n.drawBuffers(oe)}function Xe(L){return _!==L?(n.useProgram(L),_=L,!0):!1}const Ft={[gs]:n.FUNC_ADD,[W1]:n.FUNC_SUBTRACT,[X1]:n.FUNC_REVERSE_SUBTRACT};Ft[j1]=n.MIN,Ft[Y1]=n.MAX;const je={[q1]:n.ZERO,[$1]:n.ONE,[K1]:n.SRC_COLOR,[Xd]:n.SRC_ALPHA,[nE]:n.SRC_ALPHA_SATURATE,[eE]:n.DST_COLOR,[Q1]:n.DST_ALPHA,[Z1]:n.ONE_MINUS_SRC_COLOR,[jd]:n.ONE_MINUS_SRC_ALPHA,[tE]:n.ONE_MINUS_DST_COLOR,[J1]:n.ONE_MINUS_DST_ALPHA,[iE]:n.CONSTANT_COLOR,[rE]:n.ONE_MINUS_CONSTANT_COLOR,[sE]:n.CONSTANT_ALPHA,[oE]:n.ONE_MINUS_CONSTANT_ALPHA};function Qe(L,ce,oe,he,re,te,ue,Ne,dt,rt){if(L===sr){m===!0&&(ye(n.BLEND),m=!1);return}if(m===!1&&(ee(n.BLEND),m=!0),L!==H1){if(L!==g||rt!==S){if((d!==gs||y!==gs)&&(n.blendEquation(n.FUNC_ADD),d=gs,y=gs),rt)switch(L){case Ao:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wg:n.blendFunc(n.ONE,n.ONE);break;case Xg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jg:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:et("WebGLState: Invalid blending: ",L);break}else switch(L){case Ao:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wg:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Xg:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jg:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",L);break}v=null,x=null,E=null,w=null,A.set(0,0,0),C=0,g=L,S=rt}return}re=re||ce,te=te||oe,ue=ue||he,(ce!==d||re!==y)&&(n.blendEquationSeparate(Ft[ce],Ft[re]),d=ce,y=re),(oe!==v||he!==x||te!==E||ue!==w)&&(n.blendFuncSeparate(je[oe],je[he],je[te],je[ue]),v=oe,x=he,E=te,w=ue),(Ne.equals(A)===!1||dt!==C)&&(n.blendColor(Ne.r,Ne.g,Ne.b,dt),A.copy(Ne),C=dt),g=L,S=!1}function nt(L,ce){L.side===Li?ye(n.CULL_FACE):ee(n.CULL_FACE);let oe=L.side===bn;ce&&(oe=!oe),De(oe),L.blending===Ao&&L.transparent===!1?Qe(sr):Qe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const he=L.stencilWrite;a.setTest(he),he&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),St(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function De(L){T!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),T=L)}function yt(L){L!==z1?(ee(n.CULL_FACE),L!==P&&(L===Hg?n.cullFace(n.BACK):L===V1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),P=L}function D(L){L!==B&&(G&&n.lineWidth(L),B=L)}function St(L,ce,oe){L?(ee(n.POLYGON_OFFSET_FILL),(U!==ce||q!==oe)&&(n.polygonOffset(ce,oe),U=ce,q=oe)):ye(n.POLYGON_OFFSET_FILL)}function $e(L){L?ee(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function it(L){L===void 0&&(L=n.TEXTURE0+Y-1),Q!==L&&(n.activeTexture(L),Q=L)}function Ae(L,ce,oe){oe===void 0&&(Q===null?oe=n.TEXTURE0+Y-1:oe=Q);let he=K[oe];he===void 0&&(he={type:void 0,texture:void 0},K[oe]=he),(he.type!==L||he.texture!==ce)&&(Q!==oe&&(n.activeTexture(oe),Q=oe),n.bindTexture(L,ce||$[L]),he.type=L,he.texture=ce)}function R(){const L=K[Q];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function Z(){try{n.texSubImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function k(){try{n.texSubImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function F(){try{n.compressedTexSubImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function me(){try{n.compressedTexSubImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function ie(){try{n.texStorage2D(...arguments)}catch(L){et("WebGLState:",L)}}function ge(){try{n.texStorage3D(...arguments)}catch(L){et("WebGLState:",L)}}function _e(){try{n.texImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function ne(){try{n.texImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function ae(L){Pe.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Pe.copy(L))}function xe(L){Fe.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Fe.copy(L))}function Ee(L,ce){let oe=u.get(ce);oe===void 0&&(oe=new WeakMap,u.set(ce,oe));let he=oe.get(L);he===void 0&&(he=n.getUniformBlockIndex(ce,L.name),oe.set(L,he))}function le(L,ce){const he=u.get(ce).get(L);l.get(ce)!==he&&(n.uniformBlockBinding(ce,he,L.__bindingPointIndex),l.set(ce,he))}function Ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},Q=null,K={},f={},h=new WeakMap,p=[],_=null,m=!1,g=null,d=null,v=null,x=null,y=null,E=null,w=null,A=new We(0,0,0),C=0,S=!1,T=null,P=null,B=null,U=null,q=null,Pe.set(0,0,n.canvas.width,n.canvas.height),Fe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ee,disable:ye,bindFramebuffer:Oe,drawBuffers:we,useProgram:Xe,setBlending:Qe,setMaterial:nt,setFlipSided:De,setCullFace:yt,setLineWidth:D,setPolygonOffset:St,setScissorTest:$e,activeTexture:it,bindTexture:Ae,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:I,texImage2D:_e,texImage3D:ne,updateUBOMapping:Ee,uniformBlockBinding:le,texStorage2D:ie,texStorage3D:ge,texSubImage2D:Z,texSubImage3D:k,compressedTexSubImage2D:F,compressedTexSubImage3D:me,scissor:ae,viewport:xe,reset:Ie}}function jC(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new tt,c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return p?new OffscreenCanvas(R,M):oc("canvas")}function m(R,M,I){let Z=1;const k=Ae(R);if((k.width>I||k.height>I)&&(Z=I/Math.max(k.width,k.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const F=Math.floor(Z*k.width),me=Math.floor(Z*k.height);f===void 0&&(f=_(F,me));const ie=M?_(F,me):f;return ie.width=F,ie.height=me,ie.getContext("2d").drawImage(R,0,0,F,me),Ue("WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+F+"x"+me+")."),ie}else return"data"in R&&Ue("WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),R;return R}function g(R){return R.generateMipmaps}function d(R){n.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(R,M,I,Z,k=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let F=M;if(M===n.RED&&(I===n.FLOAT&&(F=n.R32F),I===n.HALF_FLOAT&&(F=n.R16F),I===n.UNSIGNED_BYTE&&(F=n.R8)),M===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(F=n.R8UI),I===n.UNSIGNED_SHORT&&(F=n.R16UI),I===n.UNSIGNED_INT&&(F=n.R32UI),I===n.BYTE&&(F=n.R8I),I===n.SHORT&&(F=n.R16I),I===n.INT&&(F=n.R32I)),M===n.RG&&(I===n.FLOAT&&(F=n.RG32F),I===n.HALF_FLOAT&&(F=n.RG16F),I===n.UNSIGNED_BYTE&&(F=n.RG8)),M===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(F=n.RG8UI),I===n.UNSIGNED_SHORT&&(F=n.RG16UI),I===n.UNSIGNED_INT&&(F=n.RG32UI),I===n.BYTE&&(F=n.RG8I),I===n.SHORT&&(F=n.RG16I),I===n.INT&&(F=n.RG32I)),M===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(F=n.RGB8UI),I===n.UNSIGNED_SHORT&&(F=n.RGB16UI),I===n.UNSIGNED_INT&&(F=n.RGB32UI),I===n.BYTE&&(F=n.RGB8I),I===n.SHORT&&(F=n.RGB16I),I===n.INT&&(F=n.RGB32I)),M===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(F=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(F=n.RGBA16UI),I===n.UNSIGNED_INT&&(F=n.RGBA32UI),I===n.BYTE&&(F=n.RGBA8I),I===n.SHORT&&(F=n.RGBA16I),I===n.INT&&(F=n.RGBA32I)),M===n.RGB&&(I===n.UNSIGNED_INT_5_9_9_9_REV&&(F=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&(F=n.R11F_G11F_B10F)),M===n.RGBA){const me=k?rc:Ke.getTransfer(Z);I===n.FLOAT&&(F=n.RGBA32F),I===n.HALF_FLOAT&&(F=n.RGBA16F),I===n.UNSIGNED_BYTE&&(F=me===ot?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(F=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(F=n.RGB5_A1)}return(F===n.R16F||F===n.R32F||F===n.RG16F||F===n.RG32F||F===n.RGBA16F||F===n.RGBA32F)&&e.get("EXT_color_buffer_float"),F}function y(R,M){let I;return R?M===null||M===Vi||M===sl?I=n.DEPTH24_STENCIL8:M===xi?I=n.DEPTH32F_STENCIL8:M===rl&&(I=n.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Vi||M===sl?I=n.DEPTH_COMPONENT24:M===xi?I=n.DEPTH_COMPONENT32F:M===rl&&(I=n.DEPTH_COMPONENT16),I}function E(R,M){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Kt&&R.minFilter!==ln?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function w(R){const M=R.target;M.removeEventListener("dispose",w),C(M),M.isVideoTexture&&c.delete(M)}function A(R){const M=R.target;M.removeEventListener("dispose",A),T(M)}function C(R){const M=i.get(R);if(M.__webglInit===void 0)return;const I=R.source,Z=h.get(I);if(Z){const k=Z[M.__cacheKey];k.usedTimes--,k.usedTimes===0&&S(R),Object.keys(Z).length===0&&h.delete(I)}i.remove(R)}function S(R){const M=i.get(R);n.deleteTexture(M.__webglTexture);const I=R.source,Z=h.get(I);delete Z[M.__cacheKey],o.memory.textures--}function T(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let k=0;k<M.__webglFramebuffer[Z].length;k++)n.deleteFramebuffer(M.__webglFramebuffer[Z][k]);else n.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)n.deleteFramebuffer(M.__webglFramebuffer[Z]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const I=R.textures;for(let Z=0,k=I.length;Z<k;Z++){const F=i.get(I[Z]);F.__webglTexture&&(n.deleteTexture(F.__webglTexture),o.memory.textures--),i.remove(I[Z])}i.remove(R)}let P=0;function B(){P=0}function U(){const R=P;return R>=r.maxTextures&&Ue("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),P+=1,R}function q(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function Y(R,M){const I=i.get(R);if(R.isVideoTexture&&$e(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&I.__version!==R.version){const Z=R.image;if(Z===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{$(I,R,M);return}}else R.isExternalTexture&&(I.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+M)}function G(R,M){const I=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){$(I,R,M);return}else R.isExternalTexture&&(I.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+M)}function z(R,M){const I=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){$(I,R,M);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+M)}function N(R,M){const I=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&I.__version!==R.version){ee(I,R,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+M)}const Q={[nh]:n.REPEAT,[ir]:n.CLAMP_TO_EDGE,[ih]:n.MIRRORED_REPEAT},K={[Kt]:n.NEAREST,[uE]:n.NEAREST_MIPMAP_NEAREST,[jl]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[hf]:n.LINEAR_MIPMAP_NEAREST,[Ss]:n.LINEAR_MIPMAP_LINEAR},J={[dE]:n.NEVER,[_E]:n.ALWAYS,[hE]:n.LESS,[nm]:n.LEQUAL,[pE]:n.EQUAL,[im]:n.GEQUAL,[mE]:n.GREATER,[gE]:n.NOTEQUAL};function ve(R,M){if(M.type===xi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ln||M.magFilter===hf||M.magFilter===jl||M.magFilter===Ss||M.minFilter===ln||M.minFilter===hf||M.minFilter===jl||M.minFilter===Ss)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Q[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Q[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Q[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,K[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,K[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Kt||M.minFilter!==jl&&M.minFilter!==Ss||M.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Pe(R,M){let I=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",w));const Z=M.source;let k=h.get(Z);k===void 0&&(k={},h.set(Z,k));const F=q(M);if(F!==R.__cacheKey){k[F]===void 0&&(k[F]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),k[F].usedTimes++;const me=k[R.__cacheKey];me!==void 0&&(k[R.__cacheKey].usedTimes--,me.usedTimes===0&&S(M)),R.__cacheKey=F,R.__webglTexture=k[F].texture}return I}function Fe(R,M,I){return Math.floor(Math.floor(R/I)/M)}function ze(R,M,I,Z){const F=R.updateRanges;if(F.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,I,Z,M.data);else{F.sort((ne,ae)=>ne.start-ae.start);let me=0;for(let ne=1;ne<F.length;ne++){const ae=F[me],xe=F[ne],Ee=ae.start+ae.count,le=Fe(xe.start,M.width,4),Ie=Fe(ae.start,M.width,4);xe.start<=Ee+1&&le===Ie&&Fe(xe.start+xe.count-1,M.width,4)===le?ae.count=Math.max(ae.count,xe.start+xe.count-ae.start):(++me,F[me]=xe)}F.length=me+1;const ie=n.getParameter(n.UNPACK_ROW_LENGTH),ge=n.getParameter(n.UNPACK_SKIP_PIXELS),_e=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let ne=0,ae=F.length;ne<ae;ne++){const xe=F[ne],Ee=Math.floor(xe.start/4),le=Math.ceil(xe.count/4),Ie=Ee%M.width,L=Math.floor(Ee/M.width),ce=le,oe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ie),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Ie,L,ce,oe,I,Z,M.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ie),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,_e)}}function $(R,M,I){let Z=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=n.TEXTURE_3D);const k=Pe(R,M),F=M.source;t.bindTexture(Z,R.__webglTexture,n.TEXTURE0+I);const me=i.get(F);if(F.version!==me.__version||k===!0){t.activeTexture(n.TEXTURE0+I);const ie=Ke.getPrimaries(Ke.workingColorSpace),ge=M.colorSpace===Pr?null:Ke.getPrimaries(M.colorSpace),_e=M.colorSpace===Pr||ie===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let ne=m(M.image,!1,r.maxTextureSize);ne=it(M,ne);const ae=s.convert(M.format,M.colorSpace),xe=s.convert(M.type);let Ee=x(M.internalFormat,ae,xe,M.colorSpace,M.isVideoTexture);ve(Z,M);let le;const Ie=M.mipmaps,L=M.isVideoTexture!==!0,ce=me.__version===void 0||k===!0,oe=F.dataReady,he=E(M,ne);if(M.isDepthTexture)Ee=y(M.format===Ms,M.type),ce&&(L?t.texStorage2D(n.TEXTURE_2D,1,Ee,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Ee,ne.width,ne.height,0,ae,xe,null));else if(M.isDataTexture)if(Ie.length>0){L&&ce&&t.texStorage2D(n.TEXTURE_2D,he,Ee,Ie[0].width,Ie[0].height);for(let re=0,te=Ie.length;re<te;re++)le=Ie[re],L?oe&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,le.width,le.height,ae,xe,le.data):t.texImage2D(n.TEXTURE_2D,re,Ee,le.width,le.height,0,ae,xe,le.data);M.generateMipmaps=!1}else L?(ce&&t.texStorage2D(n.TEXTURE_2D,he,Ee,ne.width,ne.height),oe&&ze(M,ne,ae,xe)):t.texImage2D(n.TEXTURE_2D,0,Ee,ne.width,ne.height,0,ae,xe,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){L&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ee,Ie[0].width,Ie[0].height,ne.depth);for(let re=0,te=Ie.length;re<te;re++)if(le=Ie[re],M.format!==yi)if(ae!==null)if(L){if(oe)if(M.layerUpdates.size>0){const ue=x0(le.width,le.height,M.format,M.type);for(const Ne of M.layerUpdates){const dt=le.data.subarray(Ne*ue/le.data.BYTES_PER_ELEMENT,(Ne+1)*ue/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,Ne,le.width,le.height,1,ae,dt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,le.width,le.height,ne.depth,ae,le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Ee,le.width,le.height,ne.depth,0,le.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,le.width,le.height,ne.depth,ae,xe,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Ee,le.width,le.height,ne.depth,0,ae,xe,le.data)}else{L&&ce&&t.texStorage2D(n.TEXTURE_2D,he,Ee,Ie[0].width,Ie[0].height);for(let re=0,te=Ie.length;re<te;re++)le=Ie[re],M.format!==yi?ae!==null?L?oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,le.width,le.height,ae,le.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Ee,le.width,le.height,0,le.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?oe&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,le.width,le.height,ae,xe,le.data):t.texImage2D(n.TEXTURE_2D,re,Ee,le.width,le.height,0,ae,xe,le.data)}else if(M.isDataArrayTexture)if(L){if(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ee,ne.width,ne.height,ne.depth),oe)if(M.layerUpdates.size>0){const re=x0(ne.width,ne.height,M.format,M.type);for(const te of M.layerUpdates){const ue=ne.data.subarray(te*re/ne.data.BYTES_PER_ELEMENT,(te+1)*re/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,ne.width,ne.height,1,ae,xe,ue)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ae,xe,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,ne.width,ne.height,ne.depth,0,ae,xe,ne.data);else if(M.isData3DTexture)L?(ce&&t.texStorage3D(n.TEXTURE_3D,he,Ee,ne.width,ne.height,ne.depth),oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ae,xe,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,ne.width,ne.height,ne.depth,0,ae,xe,ne.data);else if(M.isFramebufferTexture){if(ce)if(L)t.texStorage2D(n.TEXTURE_2D,he,Ee,ne.width,ne.height);else{let re=ne.width,te=ne.height;for(let ue=0;ue<he;ue++)t.texImage2D(n.TEXTURE_2D,ue,Ee,re,te,0,ae,xe,null),re>>=1,te>>=1}}else if(Ie.length>0){if(L&&ce){const re=Ae(Ie[0]);t.texStorage2D(n.TEXTURE_2D,he,Ee,re.width,re.height)}for(let re=0,te=Ie.length;re<te;re++)le=Ie[re],L?oe&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ae,xe,le):t.texImage2D(n.TEXTURE_2D,re,Ee,ae,xe,le);M.generateMipmaps=!1}else if(L){if(ce){const re=Ae(ne);t.texStorage2D(n.TEXTURE_2D,he,Ee,re.width,re.height)}oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae,xe,ne)}else t.texImage2D(n.TEXTURE_2D,0,Ee,ae,xe,ne);g(M)&&d(Z),me.__version=F.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ee(R,M,I){if(M.image.length!==6)return;const Z=Pe(R,M),k=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+I);const F=i.get(k);if(k.version!==F.__version||Z===!0){t.activeTexture(n.TEXTURE0+I);const me=Ke.getPrimaries(Ke.workingColorSpace),ie=M.colorSpace===Pr?null:Ke.getPrimaries(M.colorSpace),ge=M.colorSpace===Pr||me===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const _e=M.isCompressedTexture||M.image[0].isCompressedTexture,ne=M.image[0]&&M.image[0].isDataTexture,ae=[];for(let te=0;te<6;te++)!_e&&!ne?ae[te]=m(M.image[te],!0,r.maxCubemapSize):ae[te]=ne?M.image[te].image:M.image[te],ae[te]=it(M,ae[te]);const xe=ae[0],Ee=s.convert(M.format,M.colorSpace),le=s.convert(M.type),Ie=x(M.internalFormat,Ee,le,M.colorSpace),L=M.isVideoTexture!==!0,ce=F.__version===void 0||Z===!0,oe=k.dataReady;let he=E(M,xe);ve(n.TEXTURE_CUBE_MAP,M);let re;if(_e){L&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ie,xe.width,xe.height);for(let te=0;te<6;te++){re=ae[te].mipmaps;for(let ue=0;ue<re.length;ue++){const Ne=re[ue];M.format!==yi?Ee!==null?L?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,0,0,Ne.width,Ne.height,Ee,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,Ie,Ne.width,Ne.height,0,Ne.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,0,0,Ne.width,Ne.height,Ee,le,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,Ie,Ne.width,Ne.height,0,Ee,le,Ne.data)}}}else{if(re=M.mipmaps,L&&ce){re.length>0&&he++;const te=Ae(ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ie,te.width,te.height)}for(let te=0;te<6;te++)if(ne){L?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ae[te].width,ae[te].height,Ee,le,ae[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ie,ae[te].width,ae[te].height,0,Ee,le,ae[te].data);for(let ue=0;ue<re.length;ue++){const dt=re[ue].image[te].image;L?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,0,0,dt.width,dt.height,Ee,le,dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,Ie,dt.width,dt.height,0,Ee,le,dt.data)}}else{L?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ee,le,ae[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ie,Ee,le,ae[te]);for(let ue=0;ue<re.length;ue++){const Ne=re[ue];L?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,0,0,Ee,le,Ne.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,Ie,Ee,le,Ne.image[te])}}}g(M)&&d(n.TEXTURE_CUBE_MAP),F.__version=k.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ye(R,M,I,Z,k,F){const me=s.convert(I.format,I.colorSpace),ie=s.convert(I.type),ge=x(I.internalFormat,me,ie,I.colorSpace),_e=i.get(M),ne=i.get(I);if(ne.__renderTarget=M,!_e.__hasExternalTextures){const ae=Math.max(1,M.width>>F),xe=Math.max(1,M.height>>F);k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?t.texImage3D(k,F,ge,ae,xe,M.depth,0,me,ie,null):t.texImage2D(k,F,ge,ae,xe,0,me,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),St(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,k,ne.__webglTexture,0,D(M)):(k===n.TEXTURE_2D||k>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,k,ne.__webglTexture,F),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(R,M,I){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){const Z=M.depthTexture,k=Z&&Z.isDepthTexture?Z.type:null,F=y(M.stencilBuffer,k),me=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;St(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D(M),F,M.width,M.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,D(M),F,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,F,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,R)}else{const Z=M.textures;for(let k=0;k<Z.length;k++){const F=Z[k],me=s.convert(F.format,F.colorSpace),ie=s.convert(F.type),ge=x(F.internalFormat,me,ie,F.colorSpace);St(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D(M),ge,M.width,M.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,D(M),ge,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ge,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(R,M,I){const Z=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=i.get(M.depthTexture);if(k.__renderTarget=M,(!k.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z){if(k.__webglInit===void 0&&(k.__webglInit=!0,M.depthTexture.addEventListener("dispose",w)),k.__webglTexture===void 0){k.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),ve(n.TEXTURE_CUBE_MAP,M.depthTexture);const _e=s.convert(M.depthTexture.format),ne=s.convert(M.depthTexture.type);let ae;M.depthTexture.format===pr?ae=n.DEPTH_COMPONENT24:M.depthTexture.format===Ms&&(ae=n.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ae,M.width,M.height,0,_e,ne,null)}}else Y(M.depthTexture,0);const F=k.__webglTexture,me=D(M),ie=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+I:n.TEXTURE_2D,ge=M.depthTexture.format===Ms?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===pr)St(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,ie,F,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,ge,ie,F,0);else if(M.depthTexture.format===Ms)St(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,ie,F,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,ge,ie,F,0);else throw new Error("Unknown depthTexture format")}function Xe(R){const M=i.get(R),I=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const k=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",k)};Z.addEventListener("dispose",k),M.__depthDisposeCallback=k}M.__boundDepthTexture=Z}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(I)for(let Z=0;Z<6;Z++)we(M.__webglFramebuffer[Z],R,Z);else{const Z=R.texture.mipmaps;Z&&Z.length>0?we(M.__webglFramebuffer[0],R,0):we(M.__webglFramebuffer,R,0)}else if(I){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=n.createRenderbuffer(),Oe(M.__webglDepthbuffer[Z],R,!1);else{const k=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,F=M.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,F),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,F)}}else{const Z=R.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Oe(M.__webglDepthbuffer,R,!1);else{const k=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,F=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,F),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,F)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(R,M,I){const Z=i.get(R);M!==void 0&&ye(Z.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Xe(R)}function je(R){const M=R.texture,I=i.get(R),Z=i.get(M);R.addEventListener("dispose",A);const k=R.textures,F=R.isWebGLCubeRenderTarget===!0,me=k.length>1;if(me||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=M.version,o.memory.textures++),F){I.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(M.mipmaps&&M.mipmaps.length>0){I.__webglFramebuffer[ie]=[];for(let ge=0;ge<M.mipmaps.length;ge++)I.__webglFramebuffer[ie][ge]=n.createFramebuffer()}else I.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){I.__webglFramebuffer=[];for(let ie=0;ie<M.mipmaps.length;ie++)I.__webglFramebuffer[ie]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(me)for(let ie=0,ge=k.length;ie<ge;ie++){const _e=i.get(k[ie]);_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&St(R)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ie=0;ie<k.length;ie++){const ge=k[ie];I.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[ie]);const _e=s.convert(ge.format,ge.colorSpace),ne=s.convert(ge.type),ae=x(ge.internalFormat,_e,ne,ge.colorSpace,R.isXRRenderTarget===!0),xe=D(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,ae,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,I.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),Oe(I.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(F){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),ve(n.TEXTURE_CUBE_MAP,M);for(let ie=0;ie<6;ie++)if(M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)ye(I.__webglFramebuffer[ie][ge],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge);else ye(I.__webglFramebuffer[ie],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);g(M)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ie=0,ge=k.length;ie<ge;ie++){const _e=k[ie],ne=i.get(_e);let ae=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,ne.__webglTexture),ve(ae,_e),ye(I.__webglFramebuffer,R,_e,n.COLOR_ATTACHMENT0+ie,ae,0),g(_e)&&d(ae)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ie=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,Z.__webglTexture),ve(ie,M),M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)ye(I.__webglFramebuffer[ge],R,M,n.COLOR_ATTACHMENT0,ie,ge);else ye(I.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,ie,0);g(M)&&d(ie),t.unbindTexture()}R.depthBuffer&&Xe(R)}function Qe(R){const M=R.textures;for(let I=0,Z=M.length;I<Z;I++){const k=M[I];if(g(k)){const F=v(R),me=i.get(k).__webglTexture;t.bindTexture(F,me),d(F),t.unbindTexture()}}}const nt=[],De=[];function yt(R){if(R.samples>0){if(St(R)===!1){const M=R.textures,I=R.width,Z=R.height;let k=n.COLOR_BUFFER_BIT;const F=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(R),ie=M.length>1;if(ie)for(let _e=0;_e<M.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const ge=R.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(k|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(k|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);const ne=i.get(M[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,I,Z,0,0,I,Z,k,n.NEAREST),l===!0&&(nt.length=0,De.length=0,nt.push(n.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(nt.push(F),De.push(F),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,De)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let _e=0;_e<M.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);const ne=i.get(M[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function D(R){return Math.min(r.maxSamples,R.samples)}function St(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function $e(R){const M=o.render.frame;c.get(R)!==M&&(c.set(R,M),R.update())}function it(R,M){const I=R.colorSpace,Z=R.format,k=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||I!==Go&&I!==Pr&&(Ke.getTransfer(I)===ot?(Z!==yi||k!==Bn)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",I)),M}function Ae(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=U,this.resetTextureUnits=B,this.setTexture2D=Y,this.setTexture2DArray=G,this.setTexture3D=z,this.setTextureCube=N,this.rebindTextures=Ft,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function YC(n,e){function t(i,r=Pr){let s;const o=Ke.getTransfer(r);if(i===Bn)return n.UNSIGNED_BYTE;if(i===Kp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Dx)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Lx)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Rx)return n.BYTE;if(i===Px)return n.SHORT;if(i===rl)return n.UNSIGNED_SHORT;if(i===$p)return n.INT;if(i===Vi)return n.UNSIGNED_INT;if(i===xi)return n.FLOAT;if(i===hr)return n.HALF_FLOAT;if(i===Ix)return n.ALPHA;if(i===Nx)return n.RGB;if(i===yi)return n.RGBA;if(i===pr)return n.DEPTH_COMPONENT;if(i===Ms)return n.DEPTH_STENCIL;if(i===Qp)return n.RED;if(i===Jp)return n.RED_INTEGER;if(i===Vo)return n.RG;if(i===em)return n.RG_INTEGER;if(i===tm)return n.RGBA_INTEGER;if(i===Au||i===bu||i===Cu||i===Ru)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Au)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Cu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ru)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Au)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Cu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ru)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rh||i===sh||i===oh||i===ah)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===rh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ah)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lh||i===uh||i===ch||i===fh||i===dh||i===hh||i===ph)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===lh||i===uh)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ch)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===fh)return s.COMPRESSED_R11_EAC;if(i===dh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===hh)return s.COMPRESSED_RG11_EAC;if(i===ph)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===mh||i===gh||i===_h||i===vh||i===xh||i===yh||i===Sh||i===Mh||i===Eh||i===Th||i===wh||i===Ah||i===bh||i===Ch)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===mh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_h)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Eh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Th)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ah)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ch)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rh||i===Ph||i===Dh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Rh)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ph)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lh||i===Ih||i===Nh||i===Uh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Lh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ih)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const qC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$C=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class KC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Yx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Hi({vertexShader:qC,fragmentShader:$C,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new Tl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZC extends Jo{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,_=null;const m=typeof XRWebGLBinding<"u",g=new KC,d={},v=t.getContextAttributes();let x=null,y=null;const E=[],w=[],A=new tt;let C=null;const S=new ri;S.viewport=new Lt;const T=new ri;T.viewport=new Lt;const P=[S,T],B=new oT;let U=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ee=E[$];return ee===void 0&&(ee=new Ff,E[$]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function($){let ee=E[$];return ee===void 0&&(ee=new Ff,E[$]=ee),ee.getGripSpace()},this.getHand=function($){let ee=E[$];return ee===void 0&&(ee=new Ff,E[$]=ee),ee.getHandSpace()};function Y($){const ee=w.indexOf($.inputSource);if(ee===-1)return;const ye=E[ee];ye!==void 0&&(ye.update($.inputSource,$.frame,u||o),ye.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",z);for(let $=0;$<E.length;$++){const ee=w[$];ee!==null&&(w[$]=null,E[$].disconnect(ee))}U=null,q=null,g.reset();for(const $ in d)delete d[$];e.setRenderTarget(x),p=null,h=null,f=null,r=null,y=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&m&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",G),r.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Oe=null,we=null;v.depth&&(we=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=v.stencil?Ms:pr,Oe=v.stencil?sl:Vi);const Xe={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Xe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new zi(h.textureWidth,h.textureHeight,{format:yi,type:Bn,depthTexture:new al(h.textureWidth,h.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ye={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ye),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new zi(p.framebufferWidth,p.framebufferHeight,{format:yi,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z($){for(let ee=0;ee<$.removed.length;ee++){const ye=$.removed[ee],Oe=w.indexOf(ye);Oe>=0&&(w[Oe]=null,E[Oe].disconnect(ye))}for(let ee=0;ee<$.added.length;ee++){const ye=$.added[ee];let Oe=w.indexOf(ye);if(Oe===-1){for(let Xe=0;Xe<E.length;Xe++)if(Xe>=w.length){w.push(ye),Oe=Xe;break}else if(w[Xe]===null){w[Xe]=ye,Oe=Xe;break}if(Oe===-1)break}const we=E[Oe];we&&we.connect(ye)}}const N=new H,Q=new H;function K($,ee,ye){N.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(ye.matrixWorld);const Oe=N.distanceTo(Q),we=ee.projectionMatrix.elements,Xe=ye.projectionMatrix.elements,Ft=we[14]/(we[10]-1),je=we[14]/(we[10]+1),Qe=(we[9]+1)/we[5],nt=(we[9]-1)/we[5],De=(we[8]-1)/we[0],yt=(Xe[8]+1)/Xe[0],D=Ft*De,St=Ft*yt,$e=Oe/(-De+yt),it=$e*-De;if(ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(it),$.translateZ($e),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),we[10]===-1)$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Ae=Ft+$e,R=je+$e,M=D-it,I=St+(Oe-it),Z=Qe*je/R*Ae,k=nt*je/R*Ae;$.projectionMatrix.makePerspective(M,I,Z,k,Ae,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function J($,ee){ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ee=$.near,ye=$.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),B.near=T.near=S.near=ee,B.far=T.far=S.far=ye,(U!==B.near||q!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),U=B.near,q=B.far),B.layers.mask=$.layers.mask|6,S.layers.mask=B.layers.mask&3,T.layers.mask=B.layers.mask&5;const Oe=$.parent,we=B.cameras;J(B,Oe);for(let Xe=0;Xe<we.length;Xe++)J(we[Xe],Oe);we.length===2?K(B,S,T):B.projectionMatrix.copy(S.projectionMatrix),ve($,B,Oe)};function ve($,ee,ye){ye===null?$.matrix.copy(ee.matrixWorld):($.matrix.copy(ye.matrixWorld),$.matrix.invert(),$.matrix.multiply(ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Fh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function($){return d[$]};let Pe=null;function Fe($,ee){if(c=ee.getViewerPose(u||o),_=ee,c!==null){const ye=c.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Oe=!1;ye.length!==B.cameras.length&&(B.cameras.length=0,Oe=!0);for(let je=0;je<ye.length;je++){const Qe=ye[je];let nt=null;if(p!==null)nt=p.getViewport(Qe);else{const yt=f.getViewSubImage(h,Qe);nt=yt.viewport,je===0&&(e.setRenderTargetTextures(y,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(y))}let De=P[je];De===void 0&&(De=new ri,De.layers.enable(je),De.viewport=new Lt,P[je]=De),De.matrix.fromArray(Qe.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Qe.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(nt.x,nt.y,nt.width,nt.height),je===0&&(B.matrix.copy(De.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Oe===!0&&B.cameras.push(De)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&m){f=i.getBinding();const je=f.getDepthInformation(ye[0]);je&&je.isValid&&je.texture&&g.init(je,r.renderState)}if(we&&we.includes("camera-access")&&m){e.state.unbindTexture(),f=i.getBinding();for(let je=0;je<ye.length;je++){const Qe=ye[je].camera;if(Qe){let nt=d[Qe];nt||(nt=new Yx,d[Qe]=nt);const De=f.getCameraImage(Qe);nt.sourceTexture=De}}}}for(let ye=0;ye<E.length;ye++){const Oe=w[ye],we=E[ye];Oe!==null&&we!==void 0&&we.update(Oe,ee,u||o)}Pe&&Pe($,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),_=null}const ze=new $x;ze.setAnimationLoop(Fe),this.setAnimationLoop=function($){Pe=$},this.dispose=function(){}}}const us=new Gi,QC=new _t;function JC(n,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,Gx(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,v,x,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),c(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,y)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),m(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,v,x):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===bn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===bn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const v=e.get(d),x=v.envMap,y=v.envMapRotation;x&&(g.envMap.value=x,us.copy(y),us.x*=-1,us.y*=-1,us.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),g.envMapRotation.value.setFromMatrix4(QC.makeRotationFromEuler(us)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,v,x){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*v,g.scale.value=x*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,v){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===bn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function m(g,d){const v=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eR(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(_(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",g));const E=x.program;i.updateUBOMapping(v,E);const w=e.render.frame;s[v.id]!==w&&(h(v),s[v.id]=w)}function c(v){const x=f();v.__bindingPointIndex=x;const y=n.createBuffer(),E=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,E,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=r[v.id],y=v.uniforms,E=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,A=y.length;w<A;w++){const C=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,T=C.length;S<T;S++){const P=C[S];if(p(P,w,S,E)===!0){const B=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let Y=0;Y<U.length;Y++){const G=U[Y],z=m(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,B+q,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,q),q+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,y,E){const w=v.value,A=x+"_"+y;if(E[A]===void 0)return typeof w=="number"||typeof w=="boolean"?E[A]=w:E[A]=w.clone(),!0;{const C=E[A];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return E[A]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function _(v){const x=v.uniforms;let y=0;const E=16;for(let A=0,C=x.length;A<C;A++){const S=Array.isArray(x[A])?x[A]:[x[A]];for(let T=0,P=S.length;T<P;T++){const B=S[T],U=Array.isArray(B.value)?B.value:[B.value];for(let q=0,Y=U.length;q<Y;q++){const G=U[q],z=m(G),N=y%E,Q=N%z.boundary,K=N+Q;y+=Q,K!==0&&E-K<z.storage&&(y+=E-K),B.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=z.storage}}}const w=y%E;return w>0&&(y+=E-w),v.__size=y,v.__cache={},this}function m(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ue("WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}const tR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bi=null;function nR(){return bi===null&&(bi=new jx(tR,16,16,Vo,hr),bi.name="DFG_LUT",bi.minFilter=ln,bi.magFilter=ln,bi.wrapS=ir,bi.wrapT=ir,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}class iR{constructor(e={}){const{canvas:t=vE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Bn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const m=p,g=new Set([tm,em,Jp]),d=new Set([Bn,Vi,rl,sl,Kp,Zp]),v=new Uint32Array(4),x=new Int32Array(4);let y=null,E=null;const w=[],A=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let T=!1;this._outputColorSpace=ti;let P=0,B=0,U=null,q=-1,Y=null;const G=new Lt,z=new Lt;let N=null;const Q=new We(0);let K=0,J=t.width,ve=t.height,Pe=1,Fe=null,ze=null;const $=new Lt(0,0,J,ve),ee=new Lt(0,0,J,ve);let ye=!1;const Oe=new om;let we=!1,Xe=!1;const Ft=new _t,je=new H,Qe=new Lt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function yt(){return U===null?Pe:1}let D=i;function St(b,O){return t.getContext(b,O)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yp}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",rt,!1),D===null){const O="webgl2";if(D=St(O,b),D===null)throw St(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw et("WebGLRenderer: "+b.message),b}let $e,it,Ae,R,M,I,Z,k,F,me,ie,ge,_e,ne,ae,xe,Ee,le,Ie,L,ce,oe,he,re;function te(){$e=new nb(D),$e.init(),oe=new YC(D,$e),it=new YA(D,$e,e,oe),Ae=new XC(D,$e),it.reversedDepthBuffer&&h&&Ae.buffers.depth.setReversed(!0),R=new sb(D),M=new PC,I=new jC(D,$e,Ae,M,it,oe,R),Z=new $A(S),k=new tb(S),F=new uT(D),he=new XA(D,F),me=new ib(D,F,R,he),ie=new ab(D,me,F,R),Ie=new ob(D,it,I),xe=new qA(M),ge=new RC(S,Z,k,$e,it,he,xe),_e=new JC(S,M),ne=new LC,ae=new kC($e),le=new WA(S,Z,k,Ae,ie,_,l),Ee=new HC(S,ie,it),re=new eR(D,R,it,Ae),L=new jA(D,$e,R),ce=new rb(D,$e,R),R.programs=ge.programs,S.capabilities=it,S.extensions=$e,S.properties=M,S.renderLists=ne,S.shadowMap=Ee,S.state=Ae,S.info=R}te(),m!==Bn&&(C=new ub(m,t.width,t.height,r,s));const ue=new ZC(S,D);this.xr=ue,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=$e.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=$e.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(b){b!==void 0&&(Pe=b,this.setSize(J,ve,!1))},this.getSize=function(b){return b.set(J,ve)},this.setSize=function(b,O,j=!0){if(ue.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,ve=O,t.width=Math.floor(b*Pe),t.height=Math.floor(O*Pe),j===!0&&(t.style.width=b+"px",t.style.height=O+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(J*Pe,ve*Pe).floor()},this.setDrawingBufferSize=function(b,O,j){J=b,ve=O,Pe=j,t.width=Math.floor(b*j),t.height=Math.floor(O*j),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(m===Bn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(G)},this.getViewport=function(b){return b.copy($)},this.setViewport=function(b,O,j,W){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,O,j,W),Ae.viewport(G.copy($).multiplyScalar(Pe).round())},this.getScissor=function(b){return b.copy(ee)},this.setScissor=function(b,O,j,W){b.isVector4?ee.set(b.x,b.y,b.z,b.w):ee.set(b,O,j,W),Ae.scissor(z.copy(ee).multiplyScalar(Pe).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(b){Ae.setScissorTest(ye=b)},this.setOpaqueSort=function(b){Fe=b},this.setTransparentSort=function(b){ze=b},this.getClearColor=function(b){return b.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,j=!0){let W=0;if(b){let V=!1;if(U!==null){const fe=U.texture.format;V=g.has(fe)}if(V){const fe=U.texture.type,Se=d.has(fe),pe=le.getClearColor(),Te=le.getClearAlpha(),be=pe.r,Le=pe.g,Ce=pe.b;Se?(v[0]=be,v[1]=Le,v[2]=Ce,v[3]=Te,D.clearBufferuiv(D.COLOR,0,v)):(x[0]=be,x[1]=Le,x[2]=Ce,x[3]=Te,D.clearBufferiv(D.COLOR,0,x))}else W|=D.COLOR_BUFFER_BIT}O&&(W|=D.DEPTH_BUFFER_BIT),j&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",rt,!1),le.dispose(),ne.dispose(),ae.dispose(),M.dispose(),Z.dispose(),k.dispose(),ie.dispose(),he.dispose(),re.dispose(),ge.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",bm),ue.removeEventListener("sessionend",Cm),ns.stop()};function Ne(b){b.preventDefault(),Zg("WebGLRenderer: Context Lost."),T=!0}function dt(){Zg("WebGLRenderer: Context Restored."),T=!1;const b=R.autoReset,O=Ee.enabled,j=Ee.autoUpdate,W=Ee.needsUpdate,V=Ee.type;te(),R.autoReset=b,Ee.enabled=O,Ee.autoUpdate=j,Ee.needsUpdate=W,Ee.type=V}function rt(b){et("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function wi(b){const O=b.target;O.removeEventListener("dispose",wi),Xi(O)}function Xi(b){Qy(b),M.remove(b)}function Qy(b){const O=M.get(b).programs;O!==void 0&&(O.forEach(function(j){ge.releaseProgram(j)}),b.isShaderMaterial&&ge.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,j,W,V,fe){O===null&&(O=nt);const Se=V.isMesh&&V.matrixWorld.determinant()<0,pe=eS(b,O,j,W,V);Ae.setMaterial(W,Se);let Te=j.index,be=1;if(W.wireframe===!0){if(Te=me.getWireframeAttribute(j),Te===void 0)return;be=2}const Le=j.drawRange,Ce=j.attributes.position;let Ge=Le.start*be,lt=(Le.start+Le.count)*be;fe!==null&&(Ge=Math.max(Ge,fe.start*be),lt=Math.min(lt,(fe.start+fe.count)*be)),Te!==null?(Ge=Math.max(Ge,0),lt=Math.min(lt,Te.count)):Ce!=null&&(Ge=Math.max(Ge,0),lt=Math.min(lt,Ce.count));const Ct=lt-Ge;if(Ct<0||Ct===1/0)return;he.setup(V,W,pe,j,Te);let Rt,ut=L;if(Te!==null&&(Rt=F.get(Te),ut=ce,ut.setIndex(Rt)),V.isMesh)W.wireframe===!0?(Ae.setLineWidth(W.wireframeLinewidth*yt()),ut.setMode(D.LINES)):ut.setMode(D.TRIANGLES);else if(V.isLine){let Re=W.linewidth;Re===void 0&&(Re=1),Ae.setLineWidth(Re*yt()),V.isLineSegments?ut.setMode(D.LINES):V.isLineLoop?ut.setMode(D.LINE_LOOP):ut.setMode(D.LINE_STRIP)}else V.isPoints?ut.setMode(D.POINTS):V.isSprite&&ut.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ol("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))ut.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Re=V._multiDrawStarts,st=V._multiDrawCounts,Je=V._multiDrawCount,In=Te?F.get(Te).bytesPerElement:1,zs=M.get(W).currentProgram.getUniforms();for(let Nn=0;Nn<Je;Nn++)zs.setValue(D,"_gl_DrawID",Nn),ut.render(Re[Nn]/In,st[Nn])}else if(V.isInstancedMesh)ut.renderInstances(Ge,Ct,V.count);else if(j.isInstancedBufferGeometry){const Re=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,st=Math.min(j.instanceCount,Re);ut.renderInstances(Ge,Ct,st)}else ut.render(Ge,Ct)};function Am(b,O,j){b.transparent===!0&&b.side===Li&&b.forceSinglePass===!1?(b.side=bn,b.needsUpdate=!0,bl(b,O,j),b.side=dr,b.needsUpdate=!0,bl(b,O,j),b.side=Li):bl(b,O,j)}this.compile=function(b,O,j=null){j===null&&(j=b),E=ae.get(j),E.init(O),A.push(E),j.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),b!==j&&b.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights();const W=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const fe=V.material;if(fe)if(Array.isArray(fe))for(let Se=0;Se<fe.length;Se++){const pe=fe[Se];Am(pe,j,V),W.add(pe)}else Am(fe,j,V),W.add(fe)}),E=A.pop(),W},this.compileAsync=function(b,O,j=null){const W=this.compile(b,O,j);return new Promise(V=>{function fe(){if(W.forEach(function(Se){M.get(Se).currentProgram.isReady()&&W.delete(Se)}),W.size===0){V(b);return}setTimeout(fe,10)}$e.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Oc=null;function Jy(b){Oc&&Oc(b)}function bm(){ns.stop()}function Cm(){ns.start()}const ns=new $x;ns.setAnimationLoop(Jy),typeof self<"u"&&ns.setContext(self),this.setAnimationLoop=function(b){Oc=b,ue.setAnimationLoop(b),b===null?ns.stop():ns.start()},ue.addEventListener("sessionstart",bm),ue.addEventListener("sessionend",Cm),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const j=ue.enabled===!0&&ue.isPresenting===!0,W=C!==null&&(U===null||j)&&C.begin(S,U);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(O),O=ue.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,O,U),E=ae.get(b,A.length),E.init(O),A.push(E),Ft.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Oe.setFromProjectionMatrix(Ft,Ui,O.reversedDepth),Xe=this.localClippingEnabled,we=xe.init(this.clippingPlanes,Xe),y=ne.get(b,w.length),y.init(),w.push(y),ue.enabled===!0&&ue.isPresenting===!0){const Se=S.xr.getDepthSensingMesh();Se!==null&&kc(Se,O,-1/0,S.sortObjects)}kc(b,O,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(Fe,ze),De=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,De&&le.addToRenderList(y,b),this.info.render.frame++,we===!0&&xe.beginShadows();const V=E.state.shadowsArray;if(Ee.render(V,b,O),we===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&C.hasRenderPass())===!1){const Se=y.opaque,pe=y.transmissive;if(E.setupLights(),O.isArrayCamera){const Te=O.cameras;if(pe.length>0)for(let be=0,Le=Te.length;be<Le;be++){const Ce=Te[be];Pm(Se,pe,b,Ce)}De&&le.render(b);for(let be=0,Le=Te.length;be<Le;be++){const Ce=Te[be];Rm(y,b,Ce,Ce.viewport)}}else pe.length>0&&Pm(Se,pe,b,O),De&&le.render(b),Rm(y,b,O)}U!==null&&B===0&&(I.updateMultisampleRenderTarget(U),I.updateRenderTargetMipmap(U)),W&&C.end(S),b.isScene===!0&&b.onAfterRender(S,b,O),he.resetDefaultState(),q=-1,Y=null,A.pop(),A.length>0?(E=A[A.length-1],we===!0&&xe.setGlobalState(S.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?y=w[w.length-1]:y=null};function kc(b,O,j,W){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Oe.intersectsSprite(b)){W&&Qe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ft);const Se=ie.update(b),pe=b.material;pe.visible&&y.push(b,Se,pe,j,Qe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Oe.intersectsObject(b))){const Se=ie.update(b),pe=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Qe.copy(b.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Qe.copy(Se.boundingSphere.center)),Qe.applyMatrix4(b.matrixWorld).applyMatrix4(Ft)),Array.isArray(pe)){const Te=Se.groups;for(let be=0,Le=Te.length;be<Le;be++){const Ce=Te[be],Ge=pe[Ce.materialIndex];Ge&&Ge.visible&&y.push(b,Se,Ge,j,Qe.z,Ce)}}else pe.visible&&y.push(b,Se,pe,j,Qe.z,null)}}const fe=b.children;for(let Se=0,pe=fe.length;Se<pe;Se++)kc(fe[Se],O,j,W)}function Rm(b,O,j,W){const{opaque:V,transmissive:fe,transparent:Se}=b;E.setupLightsView(j),we===!0&&xe.setGlobalState(S.clippingPlanes,j),W&&Ae.viewport(G.copy(W)),V.length>0&&Al(V,O,j),fe.length>0&&Al(fe,O,j),Se.length>0&&Al(Se,O,j),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Pm(b,O,j,W){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){const Ge=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new zi(1,1,{generateMipmaps:!0,type:Ge?hr:Bn,minFilter:Ss,samples:it.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const fe=E.state.transmissionRenderTarget[W.id],Se=W.viewport||G;fe.setSize(Se.z*S.transmissionResolutionScale,Se.w*S.transmissionResolutionScale);const pe=S.getRenderTarget(),Te=S.getActiveCubeFace(),be=S.getActiveMipmapLevel();S.setRenderTarget(fe),S.getClearColor(Q),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),De&&le.render(j);const Le=S.toneMapping;S.toneMapping=Bi;const Ce=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),we===!0&&xe.setGlobalState(S.clippingPlanes,W),Al(b,j,W),I.updateMultisampleRenderTarget(fe),I.updateRenderTargetMipmap(fe),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let lt=0,Ct=O.length;lt<Ct;lt++){const Rt=O[lt],{object:ut,geometry:Re,material:st,group:Je}=Rt;if(st.side===Li&&ut.layers.test(W.layers)){const In=st.side;st.side=bn,st.needsUpdate=!0,Dm(ut,j,W,Re,st,Je),st.side=In,st.needsUpdate=!0,Ge=!0}}Ge===!0&&(I.updateMultisampleRenderTarget(fe),I.updateRenderTargetMipmap(fe))}S.setRenderTarget(pe,Te,be),S.setClearColor(Q,K),Ce!==void 0&&(W.viewport=Ce),S.toneMapping=Le}function Al(b,O,j){const W=O.isScene===!0?O.overrideMaterial:null;for(let V=0,fe=b.length;V<fe;V++){const Se=b[V],{object:pe,geometry:Te,group:be}=Se;let Le=Se.material;Le.allowOverride===!0&&W!==null&&(Le=W),pe.layers.test(j.layers)&&Dm(pe,O,j,Te,Le,be)}}function Dm(b,O,j,W,V,fe){b.onBeforeRender(S,O,j,W,V,fe),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(S,O,j,W,b,fe),V.transparent===!0&&V.side===Li&&V.forceSinglePass===!1?(V.side=bn,V.needsUpdate=!0,S.renderBufferDirect(j,O,W,V,b,fe),V.side=dr,V.needsUpdate=!0,S.renderBufferDirect(j,O,W,V,b,fe),V.side=Li):S.renderBufferDirect(j,O,W,V,b,fe),b.onAfterRender(S,O,j,W,V,fe)}function bl(b,O,j){O.isScene!==!0&&(O=nt);const W=M.get(b),V=E.state.lights,fe=E.state.shadowsArray,Se=V.state.version,pe=ge.getParameters(b,V.state,fe,O,j),Te=ge.getProgramCacheKey(pe);let be=W.programs;W.environment=b.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(b.isMeshStandardMaterial?k:Z).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,be===void 0&&(b.addEventListener("dispose",wi),be=new Map,W.programs=be);let Le=be.get(Te);if(Le!==void 0){if(W.currentProgram===Le&&W.lightsStateVersion===Se)return Im(b,pe),Le}else pe.uniforms=ge.getUniforms(b),b.onBeforeCompile(pe,S),Le=ge.acquireProgram(pe,Te),be.set(Te,Le),W.uniforms=pe.uniforms;const Ce=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ce.clippingPlanes=xe.uniform),Im(b,pe),W.needsLights=nS(b),W.lightsStateVersion=Se,W.needsLights&&(Ce.ambientLightColor.value=V.state.ambient,Ce.lightProbe.value=V.state.probe,Ce.directionalLights.value=V.state.directional,Ce.directionalLightShadows.value=V.state.directionalShadow,Ce.spotLights.value=V.state.spot,Ce.spotLightShadows.value=V.state.spotShadow,Ce.rectAreaLights.value=V.state.rectArea,Ce.ltc_1.value=V.state.rectAreaLTC1,Ce.ltc_2.value=V.state.rectAreaLTC2,Ce.pointLights.value=V.state.point,Ce.pointLightShadows.value=V.state.pointShadow,Ce.hemisphereLights.value=V.state.hemi,Ce.directionalShadowMap.value=V.state.directionalShadowMap,Ce.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ce.spotShadowMap.value=V.state.spotShadowMap,Ce.spotLightMatrix.value=V.state.spotLightMatrix,Ce.spotLightMap.value=V.state.spotLightMap,Ce.pointShadowMap.value=V.state.pointShadowMap,Ce.pointShadowMatrix.value=V.state.pointShadowMatrix),W.currentProgram=Le,W.uniformsList=null,Le}function Lm(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=Pu.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Im(b,O){const j=M.get(b);j.outputColorSpace=O.outputColorSpace,j.batching=O.batching,j.batchingColor=O.batchingColor,j.instancing=O.instancing,j.instancingColor=O.instancingColor,j.instancingMorph=O.instancingMorph,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function eS(b,O,j,W,V){O.isScene!==!0&&(O=nt),I.resetTextureUnits();const fe=O.fog,Se=W.isMeshStandardMaterial?O.environment:null,pe=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Go,Te=(W.isMeshStandardMaterial?k:Z).get(W.envMap||Se),be=W.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Le=!!j.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ce=!!j.morphAttributes.position,Ge=!!j.morphAttributes.normal,lt=!!j.morphAttributes.color;let Ct=Bi;W.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ct=S.toneMapping);const Rt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ut=Rt!==void 0?Rt.length:0,Re=M.get(W),st=E.state.lights;if(we===!0&&(Xe===!0||b!==Y)){const dn=b===Y&&W.id===q;xe.setState(W,b,dn)}let Je=!1;W.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==st.state.version||Re.outputColorSpace!==pe||V.isBatchedMesh&&Re.batching===!1||!V.isBatchedMesh&&Re.batching===!0||V.isBatchedMesh&&Re.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Re.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Re.instancing===!1||!V.isInstancedMesh&&Re.instancing===!0||V.isSkinnedMesh&&Re.skinning===!1||!V.isSkinnedMesh&&Re.skinning===!0||V.isInstancedMesh&&Re.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Re.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Re.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Re.instancingMorph===!1&&V.morphTexture!==null||Re.envMap!==Te||W.fog===!0&&Re.fog!==fe||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==xe.numPlanes||Re.numIntersection!==xe.numIntersection)||Re.vertexAlphas!==be||Re.vertexTangents!==Le||Re.morphTargets!==Ce||Re.morphNormals!==Ge||Re.morphColors!==lt||Re.toneMapping!==Ct||Re.morphTargetsCount!==ut)&&(Je=!0):(Je=!0,Re.__version=W.version);let In=Re.currentProgram;Je===!0&&(In=bl(W,O,V));let zs=!1,Nn=!1,ta=!1;const ht=In.getUniforms(),xn=Re.uniforms;if(Ae.useProgram(In.program)&&(zs=!0,Nn=!0,ta=!0),W.id!==q&&(q=W.id,Nn=!0),zs||Y!==b){Ae.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ht.setValue(D,"projectionMatrix",b.projectionMatrix),ht.setValue(D,"viewMatrix",b.matrixWorldInverse);const yn=ht.map.cameraPosition;yn!==void 0&&yn.setValue(D,je.setFromMatrixPosition(b.matrixWorld)),it.logarithmicDepthBuffer&&ht.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ht.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),Y!==b&&(Y=b,Nn=!0,ta=!0)}if(Re.needsLights&&(st.state.directionalShadowMap.length>0&&ht.setValue(D,"directionalShadowMap",st.state.directionalShadowMap,I),st.state.spotShadowMap.length>0&&ht.setValue(D,"spotShadowMap",st.state.spotShadowMap,I),st.state.pointShadowMap.length>0&&ht.setValue(D,"pointShadowMap",st.state.pointShadowMap,I)),V.isSkinnedMesh){ht.setOptional(D,V,"bindMatrix"),ht.setOptional(D,V,"bindMatrixInverse");const dn=V.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),ht.setValue(D,"boneTexture",dn.boneTexture,I))}V.isBatchedMesh&&(ht.setOptional(D,V,"batchingTexture"),ht.setValue(D,"batchingTexture",V._matricesTexture,I),ht.setOptional(D,V,"batchingIdTexture"),ht.setValue(D,"batchingIdTexture",V._indirectTexture,I),ht.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&ht.setValue(D,"batchingColorTexture",V._colorsTexture,I));const Zn=j.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&Ie.update(V,j,In),(Nn||Re.receiveShadow!==V.receiveShadow)&&(Re.receiveShadow=V.receiveShadow,ht.setValue(D,"receiveShadow",V.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(xn.envMap.value=Te,xn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(xn.envMapIntensity.value=O.environmentIntensity),xn.dfgLUT!==void 0&&(xn.dfgLUT.value=nR()),Nn&&(ht.setValue(D,"toneMappingExposure",S.toneMappingExposure),Re.needsLights&&tS(xn,ta),fe&&W.fog===!0&&_e.refreshFogUniforms(xn,fe),_e.refreshMaterialUniforms(xn,W,Pe,ve,E.state.transmissionRenderTarget[b.id]),Pu.upload(D,Lm(Re),xn,I)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Pu.upload(D,Lm(Re),xn,I),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ht.setValue(D,"center",V.center),ht.setValue(D,"modelViewMatrix",V.modelViewMatrix),ht.setValue(D,"normalMatrix",V.normalMatrix),ht.setValue(D,"modelMatrix",V.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const dn=W.uniformsGroups;for(let yn=0,Bc=dn.length;yn<Bc;yn++){const is=dn[yn];re.update(is,In),re.bind(is,In)}}return In}function tS(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function nS(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,O,j){const W=M.get(b);W.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),M.get(b.texture).__webglTexture=O,M.get(b.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:j,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){const j=M.get(b);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0};const iS=D.createFramebuffer();this.setRenderTarget=function(b,O=0,j=0){U=b,P=O,B=j;let W=null,V=!1,fe=!1;if(b){const pe=M.get(b);if(pe.__useDefaultFramebuffer!==void 0){Ae.bindFramebuffer(D.FRAMEBUFFER,pe.__webglFramebuffer),G.copy(b.viewport),z.copy(b.scissor),N=b.scissorTest,Ae.viewport(G),Ae.scissor(z),Ae.setScissorTest(N),q=-1;return}else if(pe.__webglFramebuffer===void 0)I.setupRenderTarget(b);else if(pe.__hasExternalTextures)I.rebindTextures(b,M.get(b.texture).__webglTexture,M.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Le=b.depthTexture;if(pe.__boundDepthTexture!==Le){if(Le!==null&&M.has(Le)&&(b.width!==Le.image.width||b.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(b)}}const Te=b.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(fe=!0);const be=M.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(be[O])?W=be[O][j]:W=be[O],V=!0):b.samples>0&&I.useMultisampledRTT(b)===!1?W=M.get(b).__webglMultisampledFramebuffer:Array.isArray(be)?W=be[j]:W=be,G.copy(b.viewport),z.copy(b.scissor),N=b.scissorTest}else G.copy($).multiplyScalar(Pe).floor(),z.copy(ee).multiplyScalar(Pe).floor(),N=ye;if(j!==0&&(W=iS),Ae.bindFramebuffer(D.FRAMEBUFFER,W)&&Ae.drawBuffers(b,W),Ae.viewport(G),Ae.scissor(z),Ae.setScissorTest(N),V){const pe=M.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,pe.__webglTexture,j)}else if(fe){const pe=O;for(let Te=0;Te<b.textures.length;Te++){const be=M.get(b.textures[Te]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Te,be.__webglTexture,j,pe)}}else if(b!==null&&j!==0){const pe=M.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pe.__webglTexture,j)}q=-1},this.readRenderTargetPixels=function(b,O,j,W,V,fe,Se,pe=0){if(!(b&&b.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=M.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te){Ae.bindFramebuffer(D.FRAMEBUFFER,Te);try{const be=b.textures[pe],Le=be.format,Ce=be.type;if(!it.textureFormatReadable(Le)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Ce)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-W&&j>=0&&j<=b.height-V&&(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe),D.readPixels(O,j,W,V,oe.convert(Le),oe.convert(Ce),fe))}finally{const be=U!==null?M.get(U).__webglFramebuffer:null;Ae.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(b,O,j,W,V,fe,Se,pe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=M.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te)if(O>=0&&O<=b.width-W&&j>=0&&j<=b.height-V){Ae.bindFramebuffer(D.FRAMEBUFFER,Te);const be=b.textures[pe],Le=be.format,Ce=be.type;if(!it.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ge),D.bufferData(D.PIXEL_PACK_BUFFER,fe.byteLength,D.STREAM_READ),b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe),D.readPixels(O,j,W,V,oe.convert(Le),oe.convert(Ce),0);const lt=U!==null?M.get(U).__webglFramebuffer:null;Ae.bindFramebuffer(D.FRAMEBUFFER,lt);const Ct=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await xE(D,Ct,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ge),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,fe),D.deleteBuffer(Ge),D.deleteSync(Ct),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,j=0){const W=Math.pow(2,-j),V=Math.floor(b.image.width*W),fe=Math.floor(b.image.height*W),Se=O!==null?O.x:0,pe=O!==null?O.y:0;I.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,j,0,0,Se,pe,V,fe),Ae.unbindTexture()};const rS=D.createFramebuffer(),sS=D.createFramebuffer();this.copyTextureToTexture=function(b,O,j=null,W=null,V=0,fe=null){fe===null&&(V!==0?(ol("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=V,V=0):fe=0);let Se,pe,Te,be,Le,Ce,Ge,lt,Ct;const Rt=b.isCompressedTexture?b.mipmaps[fe]:b.image;if(j!==null)Se=j.max.x-j.min.x,pe=j.max.y-j.min.y,Te=j.isBox3?j.max.z-j.min.z:1,be=j.min.x,Le=j.min.y,Ce=j.isBox3?j.min.z:0;else{const Zn=Math.pow(2,-V);Se=Math.floor(Rt.width*Zn),pe=Math.floor(Rt.height*Zn),b.isDataArrayTexture?Te=Rt.depth:b.isData3DTexture?Te=Math.floor(Rt.depth*Zn):Te=1,be=0,Le=0,Ce=0}W!==null?(Ge=W.x,lt=W.y,Ct=W.z):(Ge=0,lt=0,Ct=0);const ut=oe.convert(O.format),Re=oe.convert(O.type);let st;O.isData3DTexture?(I.setTexture3D(O,0),st=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(I.setTexture2DArray(O,0),st=D.TEXTURE_2D_ARRAY):(I.setTexture2D(O,0),st=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const Je=D.getParameter(D.UNPACK_ROW_LENGTH),In=D.getParameter(D.UNPACK_IMAGE_HEIGHT),zs=D.getParameter(D.UNPACK_SKIP_PIXELS),Nn=D.getParameter(D.UNPACK_SKIP_ROWS),ta=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Rt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Rt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,be),D.pixelStorei(D.UNPACK_SKIP_ROWS,Le),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ce);const ht=b.isDataArrayTexture||b.isData3DTexture,xn=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){const Zn=M.get(b),dn=M.get(O),yn=M.get(Zn.__renderTarget),Bc=M.get(dn.__renderTarget);Ae.bindFramebuffer(D.READ_FRAMEBUFFER,yn.__webglFramebuffer),Ae.bindFramebuffer(D.DRAW_FRAMEBUFFER,Bc.__webglFramebuffer);for(let is=0;is<Te;is++)ht&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,M.get(b).__webglTexture,V,Ce+is),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,M.get(O).__webglTexture,fe,Ct+is)),D.blitFramebuffer(be,Le,Se,pe,Ge,lt,Se,pe,D.DEPTH_BUFFER_BIT,D.NEAREST);Ae.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||M.has(b)){const Zn=M.get(b),dn=M.get(O);Ae.bindFramebuffer(D.READ_FRAMEBUFFER,rS),Ae.bindFramebuffer(D.DRAW_FRAMEBUFFER,sS);for(let yn=0;yn<Te;yn++)ht?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Zn.__webglTexture,V,Ce+yn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Zn.__webglTexture,V),xn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,dn.__webglTexture,fe,Ct+yn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,dn.__webglTexture,fe),V!==0?D.blitFramebuffer(be,Le,Se,pe,Ge,lt,Se,pe,D.COLOR_BUFFER_BIT,D.NEAREST):xn?D.copyTexSubImage3D(st,fe,Ge,lt,Ct+yn,be,Le,Se,pe):D.copyTexSubImage2D(st,fe,Ge,lt,be,Le,Se,pe);Ae.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else xn?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(st,fe,Ge,lt,Ct,Se,pe,Te,ut,Re,Rt.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(st,fe,Ge,lt,Ct,Se,pe,Te,ut,Rt.data):D.texSubImage3D(st,fe,Ge,lt,Ct,Se,pe,Te,ut,Re,Rt):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,fe,Ge,lt,Se,pe,ut,Re,Rt.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,fe,Ge,lt,Rt.width,Rt.height,ut,Rt.data):D.texSubImage2D(D.TEXTURE_2D,fe,Ge,lt,Se,pe,ut,Re,Rt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Je),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,In),D.pixelStorei(D.UNPACK_SKIP_PIXELS,zs),D.pixelStorei(D.UNPACK_SKIP_ROWS,Nn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ta),fe===0&&O.generateMipmaps&&D.generateMipmap(st),Ae.unbindTexture()},this.initRenderTarget=function(b){M.get(b).__webglFramebuffer===void 0&&I.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?I.setTextureCube(b,0):b.isData3DTexture?I.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?I.setTexture2DArray(b,0):I.setTexture2D(b,0),Ae.unbindTexture()},this.resetState=function(){P=0,B=0,U=null,Ae.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}function Qi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ey(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Xn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Wo={duration:.5,overwrite:!1,delay:0},lm,Jt,xt,oi=1e8,ft=1/oi,Bh=Math.PI*2,rR=Bh/4,sR=0,ty=Math.sqrt,oR=Math.cos,aR=Math.sin,Yt=function(e){return typeof e=="string"},It=function(e){return typeof e=="function"},mr=function(e){return typeof e=="number"},um=function(e){return typeof e>"u"},Wi=function(e){return typeof e=="object"},Cn=function(e){return e!==!1},cm=function(){return typeof window<"u"},hu=function(e){return It(e)||Yt(e)},ny=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},cn=Array.isArray,lR=/random\([^)]+\)/g,uR=/,\s*/g,H0=/(?:-?\.?\d|\.)+/gi,iy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,vo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ry=/[+-]=-?[.\d]+/,cR=/[^,'"\[\]\s]+/gi,fR=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Tt,Ri,zh,fm,Yn={},lc={},sy,oy=function(e){return(lc=Xo(e,Yn))&&Ln},dm=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ll=function(e,t){return!t&&console.warn(e)},ay=function(e,t){return e&&(Yn[e]=t)&&lc&&(lc[e]=t)||Yn},ul=function(){return 0},dR={suppressEvents:!0,isStart:!0,kill:!1},Du={suppressEvents:!0,kill:!1},hR={suppressEvents:!0},hm={},Xr=[],Vh={},ly,kn={},jf={},W0=30,Lu=[],pm="",mm=function(e){var t=e[0],i,r;if(Wi(t)||It(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Lu.length;r--&&!Lu[r].targetTest(t););i=Lu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Ly(e[r],i)))||e.splice(r,1);return e},As=function(e){return e._gsap||mm(ai(e))[0]._gsap},uy=function(e,t,i){return(i=e[t])&&It(i)?e[t]():um(i)&&e.getAttribute&&e.getAttribute(t)||i},Rn=function(e,t){return(e=e.split(",")).forEach(t)||e},Nt=function(e){return Math.round(e*1e5)/1e5||0},Mt=function(e){return Math.round(e*1e7)/1e7||0},Co=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},pR=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},uc=function(){var e=Xr.length,t=Xr.slice(0),i,r;for(Vh={},Xr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},gm=function(e){return!!(e._initted||e._startAt||e.add)},cy=function(e,t,i,r){Xr.length&&!Jt&&uc(),e.render(t,i,!!(Jt&&t<0&&gm(e))),Xr.length&&!Jt&&uc()},fy=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(cR).length<2?t:Yt(e)?e.trim():e},dy=function(e){return e},qn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},mR=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Xo=function(e,t){for(var i in t)e[i]=t[i];return e},X0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Wi(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},cc=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},ka=function(e){var t=e.parent||Tt,i=e.keyframes?mR(cn(e.keyframes)):qn;if(Cn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},gR=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},hy=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Nc=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},$r=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},bs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},_R=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Gh=function(e,t,i,r){return e._startAt&&(Jt?e._startAt.revert(Du):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},vR=function n(e){return!e||e._ts&&n(e.parent)},j0=function(e){return e._repeat?jo(e._tTime,e=e.duration()+e._rDelay)*e:0},jo=function(e,t){var i=Math.floor(e=Mt(e/t));return e&&i===e?i-1:i},fc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Uc=function(e){return e._end=Mt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ft)||0))},Fc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Mt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Uc(e),i._dirty||bs(i,e)),e},py=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=fc(e.rawTime(),t),(!t._dur||wl(0,t.totalDuration(),i)-t._tTime>ft)&&t.render(i,!0)),bs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ft}},Ni=function(e,t,i,r){return t.parent&&$r(t),t._start=Mt((mr(i)?i:i||e!==Tt?Jn(e,i,t):e._time)+t._delay),t._end=Mt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),hy(e,t,"_first","_last",e._sort?"_start":0),Hh(t)||(e._recent=t),r||py(e,t),e._ts<0&&Fc(e,e._tTime),e},my=function(e,t){return(Yn.ScrollTrigger||dm("scrollTrigger",t))&&Yn.ScrollTrigger.create(t,e)},gy=function(e,t,i,r,s){if(vm(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Jt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ly!==zn.frame)return Xr.push(e),e._lazy=[s,r],1},xR=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Hh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},yR=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&xR(e)&&!(!e._initted&&Hh(e))||(e._ts<0||e._dp._ts<0)&&!Hh(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=wl(0,e._tDur,t),c=jo(l,a),e._yoyo&&c&1&&(o=1-o),c!==jo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Jt||r||e._zTime===ft||!t&&e._zTime){if(!e._initted&&gy(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?ft:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Gh(e,t,i,!0),e._onUpdate&&!i&&Gn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Gn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&$r(e,1),!i&&!Jt&&(Gn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},SR=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Yo=function(e,t,i,r){var s=e._repeat,o=Mt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Mt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Fc(e,e._tTime=e._tDur*a),e.parent&&Uc(e),i||bs(e.parent,e),e},Y0=function(e){return e instanceof mn?bs(e):Yo(e,e._dur)},MR={_start:0,endTime:ul,totalDuration:ul},Jn=function n(e,t,i){var r=e.labels,s=e._recent||MR,o=e.duration()>=oi?s.endTime(!1):e._dur,a,l,u;return Yt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(cn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Ba=function(e,t,i){var r=mr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Cn(l.vars.inherit)&&l.parent;o.immediateRender=Cn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new kt(t[0],o,t[s+1])},ts=function(e,t){return e||e===0?t(e):t},wl=function(e,t,i){return i<e?e:i>t?t:i},an=function(e,t){return!Yt(e)||!(t=fR.exec(e))?"":t[1]},ER=function(e,t,i){return ts(i,function(r){return wl(e,t,r)})},Wh=[].slice,_y=function(e,t){return e&&Wi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Wi(e[0]))&&!e.nodeType&&e!==Ri},TR=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Yt(r)&&!t||_y(r,1)?(s=i).push.apply(s,ai(r)):i.push(r)})||i},ai=function(e,t,i){return xt&&!t&&xt.selector?xt.selector(e):Yt(e)&&!i&&(zh||!qo())?Wh.call((t||fm).querySelectorAll(e),0):cn(e)?TR(e,i):_y(e)?Wh.call(e,0):e?[e]:[]},Xh=function(e){return e=ai(e)[0]||ll("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ai(t,i.querySelectorAll?i:i===e?ll("Invalid scope")||fm.createElement("div"):e)}},vy=function(e){return e.sort(function(){return .5-Math.random()})},xy=function(e){if(It(e))return e;var t=Wi(e)?e:{each:e},i=Cs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,f=r;return Yt(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(h,p,_){var m=(_||t).length,g=o[m],d,v,x,y,E,w,A,C,S;if(!g){if(S=t.grid==="auto"?0:(t.grid||[1,oi])[1],!S){for(A=-oi;A<(A=_[S++].getBoundingClientRect().left)&&S<m;);S<m&&S--}for(g=o[m]=[],d=l?Math.min(S,m)*c-.5:r%S,v=S===oi?0:l?m*f/S-.5:r/S|0,A=0,C=oi,w=0;w<m;w++)x=w%S-d,y=v-(w/S|0),g[w]=E=u?Math.abs(u==="y"?y:x):ty(x*x+y*y),E>A&&(A=E),E<C&&(C=E);r==="random"&&vy(g),g.max=A-C,g.min=C,g.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(S>m?m-1:u?u==="y"?m/S:S:Math.max(S,m/S))||0)*(r==="edges"?-1:1),g.b=m<0?s-m:s,g.u=an(t.amount||t.each)||0,i=i&&m<0?Ry(i):i}return m=(g[h]-g.min)/g.max||0,Mt(g.b+(i?i(m):m)*g.v)+g.u}},jh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Mt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(mr(i)?0:an(i))}},yy=function(e,t){var i=cn(e),r,s;return!i&&Wi(e)&&(r=i=e.radius||oi,e.values?(e=ai(e.values),(s=!mr(e[0]))&&(r*=r)):e=jh(e.increment)),ts(t,i?It(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=oi,c=0,f=e.length,h,p;f--;)s?(h=e[f].x-a,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-a),h<u&&(u=h,c=f);return c=!r||u<=r?e[c]:o,s||c===o||mr(o)?c:c+an(o)}:jh(e))},Sy=function(e,t,i,r){return ts(cn(e)?!t:i===!0?!!(i=0):!r,function(){return cn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},wR=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},AR=function(e,t){return function(i){return e(parseFloat(i))+(t||an(i))}},bR=function(e,t,i){return Ey(e,t,0,1,i)},My=function(e,t,i){return ts(i,function(r){return e[~~t(r)]})},CR=function n(e,t,i){var r=t-e;return cn(e)?My(e,n(0,e.length),t):ts(i,function(s){return(r+(s-e)%r)%r+e})},RR=function n(e,t,i){var r=t-e,s=r*2;return cn(e)?My(e,n(0,e.length-1),t):ts(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},cl=function(e){return e.replace(lR,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(uR);return Sy(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},Ey=function(e,t,i,r,s){var o=t-e,a=r-i;return ts(s,function(l){return i+((l-e)/o*a||0)})},PR=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=Yt(e),a={},l,u,c,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(cn(e)&&!cn(t)){for(c=[],f=e.length,h=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(_){_*=f;var m=Math.min(h,~~_);return c[m](_-m)},i=t}else r||(e=Xo(cn(e)?[]:{},e));if(!c){for(l in t)_m.call(a,e,l,"get",t[l]);s=function(_){return Sm(_,a)||(o?e.p:e)}}}return ts(i,s)},q0=function(e,t,i){var r=e.labels,s=oi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Gn=function(e,t,i){var r=e.vars,s=r[t],o=xt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Xr.length&&uc(),a&&(xt=a),c=l?s.apply(u,l):s.call(u),xt=o,c},Aa=function(e){return $r(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Jt),e.progress()<1&&Gn(e,"onInterrupt"),e},xo,Ty=[],wy=function(e){if(e)if(e=!e.name&&e.default||e,cm()||e.headless){var t=e.name,i=It(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:ul,render:Sm,add:_m,kill:jR,modifier:XR,rawVars:0},o={targetTest:0,get:0,getSetter:ym,aliases:{},register:0};if(qo(),e!==r){if(kn[t])return;qn(r,qn(cc(e,s),o)),Xo(r.prototype,Xo(s,cc(e,o))),kn[r.prop=t]=r,e.targetTest&&(Lu.push(r),hm[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ay(t,r),e.register&&e.register(Ln,r,Pn)}else Ty.push(e)},ct=255,ba={aqua:[0,ct,ct],lime:[0,ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ct],navy:[0,0,128],white:[ct,ct,ct],olive:[128,128,0],yellow:[ct,ct,0],orange:[ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ct,0,0],pink:[ct,192,203],cyan:[0,ct,ct],transparent:[ct,ct,ct,0]},Yf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ct+.5|0},Ay=function(e,t,i){var r=e?mr(e)?[e>>16,e>>8&ct,e&ct]:0:ba.black,s,o,a,l,u,c,f,h,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ba[e])r=ba[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ct,r&ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ct,e&ct]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(H0),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Yf(l+1/3,s,o),r[1]=Yf(l,s,o),r[2]=Yf(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(iy),i&&r.length<4&&(r[3]=1),r}else r=e.match(H0)||ba.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/ct,o=r[1]/ct,a=r[2]/ct,f=Math.max(s,o,a),h=Math.min(s,o,a),c=(f+h)/2,f===h?l=u=0:(p=f-h,u=c>.5?p/(2-f-h):p/(f+h),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},by=function(e){var t=[],i=[],r=-1;return e.split(jr).forEach(function(s){var o=s.match(vo)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},$0=function(e,t,i){var r="",s=(e+r).match(jr),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(h){return(h=Ay(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=by(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(jr,"1").split(vo),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(jr),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},jr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ba)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),DR=/hsl[a]?\(/,Cy=function(e){var t=e.join(" "),i;if(jr.lastIndex=0,jr.test(t))return i=DR.test(t),e[1]=$0(e[1],i),e[0]=$0(e[0],i,by(e[1])),!0},fl,zn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,h,p,_=function m(g){var d=n()-r,v=g===!0,x,y,E,w;if((d>e||d<0)&&(i+=d-t),r+=d,E=r-i,x=E-o,(x>0||v)&&(w=++f.frame,h=E-f.time*1e3,f.time=E=E/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=u(m)),y)for(p=0;p<a.length;p++)a[p](E,h,w,g)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return h/(1e3/(g||60))},wake:function(){sy&&(!zh&&cm()&&(Ri=zh=window,fm=Ri.document||{},Yn.gsap=Ln,(Ri.gsapVersions||(Ri.gsapVersions=[])).push(Ln.version),oy(lc||Ri.GreenSockGlobals||!Ri.gsap&&Ri||{}),Ty.forEach(wy)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(g){return setTimeout(g,o-f.time*1e3+1|0)},fl=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),fl=0,u=ul},lagSmoothing:function(g,d){e=g||1/0,t=Math.min(d||33,e)},fps:function(g){s=1e3/(g||240),o=f.time*1e3+s},add:function(g,d,v){var x=d?function(y,E,w,A){g(y,E,w,A),f.remove(x)}:g;return f.remove(g),a[v?"unshift":"push"](x),qo(),x},remove:function(g,d){~(d=a.indexOf(g))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},f}(),qo=function(){return!fl&&zn.wake()},qe={},LR=/^[\d.\-M][\d.\-,\s]/,IR=/["']/g,NR=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(IR,"").trim():+u,r=l.substr(a+1).trim();return t},UR=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},FR=function(e){var t=(e+"").split("("),i=qe[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[NR(t[1])]:UR(e).split(",").map(fy)):qe._CE&&LR.test(e)?qe._CE("",e):i},Ry=function(e){return function(t){return 1-e(1-t)}},Py=function n(e,t){for(var i=e._first,r;i;)i instanceof mn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Cs=function(e,t){return e&&(It(e)?e:qe[e]||FR(e))||t},Bs=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return Rn(e,function(a){qe[a]=Yn[a]=s,qe[o=a.toLowerCase()]=i;for(var l in s)qe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=qe[a+"."+l]=s[l]}),s},Dy=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},qf=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Bh*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*aR((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:Dy(a);return s=Bh/s,l.config=function(u,c){return n(e,u,c)},l},$f=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Dy(i);return r.config=function(s){return n(e,s)},r};Rn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Bs(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});qe.Linear.easeNone=qe.none=qe.Linear.easeIn;Bs("Elastic",qf("in"),qf("out"),qf());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Bs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Bs("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Bs("Circ",function(n){return-(ty(1-n*n)-1)});Bs("Sine",function(n){return n===1?1:-oR(n*rR)+1});Bs("Back",$f("in"),$f("out"),$f());qe.SteppedEase=qe.steps=Yn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-ft;return function(a){return((r*wl(0,o,a)|0)+s)*i}}};Wo.ease=qe["quad.out"];Rn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return pm+=n+","+n+"Params,"});var Ly=function(e,t){this.id=sR++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:uy,this.set=t?t.getSetter:ym},dl=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Yo(this,+t.duration,1,1),this.data=t.data,xt&&(this._ctx=xt,xt.data.push(this)),fl||zn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Yo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(qo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Fc(this,i),!s._dp||s.parent||py(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ni(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ft||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),cy(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+j0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+j0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?jo(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-ft?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?fc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ft?0:this._rts,this.totalTime(wl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Uc(this),_R(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(qo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ft&&(this._tTime-=ft)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Mt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ni(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Cn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?fc(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=hR);var r=Jt;return Jt=i,gm(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Jt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Y0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Y0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Jn(this,i),Cn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Cn(r)),this._dur||(this._zTime=-ft),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ft:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ft,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-ft)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=It(i)?i:dy,l=function(){var c=r.then;r.then=null,s&&s(),It(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Aa(this)},n}();qn(dl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ft,_prom:0,_ps:!1,_rts:1});var mn=function(n){ey(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Cn(i.sortChildren),Tt&&Ni(i.parent||Tt,Qi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&my(Qi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Ba(0,arguments,this),this},t.from=function(r,s,o){return Ba(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Ba(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,ka(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new kt(r,s,Jn(this,o),1),this},t.call=function(r,s,o){return Ni(this,kt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new kt(r,o,Jn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,ka(o).immediateRender=Cn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,ka(a).immediateRender=Cn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Mt(r),f=this._zTime<0!=r<0&&(this._initted||!u),h,p,_,m,g,d,v,x,y,E,w,A;if(this!==Tt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,y=this._start,x=this._ts,d=!x,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,g=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,o);if(h=Mt(c%g),c===l?(m=this._repeat,h=u):(E=Mt(c/g),m=~~E,m&&m===E&&(h=u,m--),h>u&&(h=u)),E=jo(this._tTime,g),!a&&this._tTime&&E!==m&&this._tTime-E*g-this._dur<=0&&(E=m),w&&m&1&&(h=u-h,A=1),m!==E&&!this._lock){var C=w&&E&1,S=C===(w&&m&1);if(m<E&&(C=!C),a=C?0:c%u?u:c,this._lock=1,this.render(a||(A?0:Mt(m*g)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Gn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,E=m),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,S&&(this._lock=2,a=C?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;Py(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=SR(this,Mt(a),Mt(h)),v&&(c-=h-(h=v._start))),this._tTime=c,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!E&&(Gn(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||h>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!d){v=0,_&&(c+=this._zTime=-ft);break}}p=_}else{p=this._last;for(var T=r<0?r:h;p;){if(_=p._prev,(p._act||T<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(T-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(T-p._start)*p._ts,s,o||Jt&&gm(p)),h!==this._time||!this._ts&&!d){v=0,_&&(c+=this._zTime=T?-ft:ft);break}}p=_}}if(v&&!s&&(this.pause(),v.render(h>=a?0:-ft)._zTime=h>=a?1:-1,this._ts))return this._start=y,Uc(this),this.render(r,s,o);this._onUpdate&&!s&&Gn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&$r(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Gn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(mr(s)||(s=Jn(this,s,r)),!(r instanceof dl)){if(cn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Yt(r))return this.addLabel(r,s);if(It(r))r=kt.delayedCall(0,r);else return this}return this!==r?Ni(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-oi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof kt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Yt(r)?this.removeLabel(r):It(r)?this.killTweensOf(r):(r.parent===this&&Nc(this,r),r===this._recent&&(this._recent=this._last),bs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Mt(zn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Jn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=kt.delayedCall(0,s||ul,o);return a.data="isPause",this._hasPause=1,Ni(this,a,Jn(this,r))},t.removePause=function(r){var s=this._first;for(r=Jn(this,r);s;)s._start===r&&s.data==="isPause"&&$r(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Nr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ai(r),l=this._first,u=mr(s),c;l;)l instanceof kt?pR(l._targets,a)&&(u?(!Nr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Jn(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,h=l.immediateRender,p,_=kt.to(o,qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||ft,onStart:function(){if(o.pause(),!p){var g=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==g&&Yo(_,g,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,f||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,qn({startAt:{time:Jn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),q0(this,Jn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),q0(this,Jn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ft)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Mt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return bs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),bs(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=oi,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ni(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Mt(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Yo(o,o===Tt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Tt._ts&&(cy(Tt,fc(r,Tt)),ly=zn.frame),zn.frame>=W0){W0+=Xn.autoSleep||120;var s=Tt._first;if((!s||!s._ts)&&Xn.autoSleep&&zn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||zn.sleep()}}},e}(dl);qn(mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var OR=function(e,t,i,r,s,o,a){var l=new Pn(this._pt,e,t,0,1,ky,null,s),u=0,c=0,f,h,p,_,m,g,d,v;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=cl(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),h=i.match(Xf)||[];f=Xf.exec(r);)_=f[0],m=r.substring(u,f.index),p?p=(p+1)%5:m.substr(-5)==="rgba("&&(p=1),_!==h[c++]&&(g=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:m||c===1?m:",",s:g,c:_.charAt(1)==="="?Co(g,_)-g:parseFloat(_)-g,m:p&&p<4?Math.round:0},u=Xf.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(ry.test(r)||d)&&(l.e=0),this._pt=l,l},_m=function(e,t,i,r,s,o,a,l,u,c){It(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:It(f)?u?e[t.indexOf("set")||!It(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,p=It(f)?u?GR:Fy:xm,_;if(Yt(r)&&(~r.indexOf("random(")&&(r=cl(r)),r.charAt(1)==="="&&(_=Co(h,r)+(an(h)||0),(_||_===0)&&(r=_))),!c||h!==r||Yh)return!isNaN(h*r)&&r!==""?(_=new Pn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?WR:Oy,0,p),u&&(_.fp=u),a&&_.modifier(a,this,e),this._pt=_):(!f&&!(t in e)&&dm(t,r),OR.call(this,e,t,h,r,p,l||Xn.stringFilter,u))},kR=function(e,t,i,r,s){if(It(e)&&(e=za(e,s,t,i,r)),!Wi(e)||e.style&&e.nodeType||cn(e)||ny(e))return Yt(e)?za(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=za(e[a],s,t,i,r);return o},Iy=function(e,t,i,r,s,o){var a,l,u,c;if(kn[e]&&(a=new kn[e]).init(s,a.rawVars?t[e]:kR(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Pn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==xo))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Nr,Yh,vm=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,h=r.keyframes,p=r.autoRevert,_=e._dur,m=e._startAt,g=e._targets,d=e.parent,v=d&&d.data==="nested"?d.vars.targets:g,x=e._overwrite==="auto"&&!lm,y=e.timeline,E,w,A,C,S,T,P,B,U,q,Y,G,z;if(y&&(!h||!s)&&(s="none"),e._ease=Cs(s,Wo.ease),e._yEase=f?Ry(Cs(f===!0?s:f,Wo.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!y&&!!r.runBackwards,!y||h&&!r.stagger){if(B=g[0]?As(g[0]).harness:0,G=B&&r[B.prop],E=cc(r,hm),m&&(m._zTime<0&&m.progress(1),t<0&&c&&a&&!p?m.render(-1,!0):m.revert(c&&_?Du:dR),m._lazy=0),o){if($r(e._startAt=kt.set(g,qn({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!m&&Cn(l),startAt:null,delay:0,onUpdate:u&&function(){return Gn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Jt||!a&&!p)&&e._startAt.revert(Du),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!m){if(t&&(a=!1),A=qn({overwrite:!1,data:"isFromStart",lazy:a&&!m&&Cn(l),immediateRender:a,stagger:0,parent:d},E),G&&(A[B.prop]=G),$r(e._startAt=kt.set(g,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Jt?e._startAt.revert(Du):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,ft,ft);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Cn(l)||l&&!_,w=0;w<g.length;w++){if(S=g[w],P=S._gsap||mm(g)[w]._gsap,e._ptLookup[w]=q={},Vh[P.id]&&Xr.length&&uc(),Y=v===g?w:v.indexOf(S),B&&(U=new B).init(S,G||E,e,Y,v)!==!1&&(e._pt=C=new Pn(e._pt,S,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(N){q[N]=C}),U.priority&&(T=1)),!B||G)for(A in E)kn[A]&&(U=Iy(A,E,e,Y,S,v))?U.priority&&(T=1):q[A]=C=_m.call(e,S,A,"get",E[A],Y,v,0,r.stringFilter);e._op&&e._op[w]&&e.kill(S,e._op[w]),x&&e._pt&&(Nr=e,Tt.killTweensOf(S,q,e.globalTime(t)),z=!e.parent,Nr=0),e._pt&&l&&(Vh[P.id]=1)}T&&By(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!z,h&&t<=0&&y.render(oi,!0,!0)},BR=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,h,p;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(c=h[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Yh=1,e.vars[t]="+=0",vm(e,a),Yh=0,l?ll(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)f=u[p],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=Nt(i)+an(f.e)),f.b&&(f.b=c.s+an(f.b))},zR=function(e,t){var i=e[0]?As(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Xo({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},VR=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(cn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},za=function(e,t,i,r,s){return It(e)?e.call(t,i,r,s):Yt(e)&&~e.indexOf("random(")?cl(e):e},Ny=pm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Uy={};Rn(Ny+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Uy[n]=1});var kt=function(n){ey(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:ka(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,_=l.keyframes,m=l.defaults,g=l.scrollTrigger,d=l.yoyoEase,v=r.parent||Tt,x=(cn(i)||ny(i)?mr(i[0]):"length"in r)?[i]:ai(i),y,E,w,A,C,S,T,P;if(a._targets=x.length?mm(x):ll("GSAP target "+i+" not found. https://gsap.com",!Xn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||h||hu(u)||hu(c)){if(r=a.vars,y=a.timeline=new mn({data:"nested",defaults:m||{},targets:v&&v.data==="nested"?v.vars.targets:x}),y.kill(),y.parent=y._dp=Qi(a),y._start=0,h||hu(u)||hu(c)){if(A=x.length,T=h&&xy(h),Wi(h))for(C in h)~Ny.indexOf(C)&&(P||(P={}),P[C]=h[C]);for(E=0;E<A;E++)w=cc(r,Uy),w.stagger=0,d&&(w.yoyoEase=d),P&&Xo(w,P),S=x[E],w.duration=+za(u,Qi(a),E,S,x),w.delay=(+za(c,Qi(a),E,S,x)||0)-a._delay,!h&&A===1&&w.delay&&(a._delay=c=w.delay,a._start+=c,w.delay=0),y.to(S,w,T?T(E,S,x):0),y._ease=qe.none;y.duration()?u=c=0:a.timeline=0}else if(_){ka(qn(y.vars.defaults,{ease:"none"})),y._ease=Cs(_.ease||r.ease||"none");var B=0,U,q,Y;if(cn(_))_.forEach(function(G){return y.to(x,G,">")}),y.duration();else{w={};for(C in _)C==="ease"||C==="easeEach"||VR(C,_[C],w,_.easeEach);for(C in w)for(U=w[C].sort(function(G,z){return G.t-z.t}),B=0,E=0;E<U.length;E++)q=U[E],Y={ease:q.e,duration:(q.t-(E?U[E-1].t:0))/100*u},Y[C]=q.v,y.to(x,Y,B),B+=Y.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return p===!0&&!lm&&(Nr=Qi(a),Tt.killTweensOf(x),Nr=0),Ni(v,Qi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!_&&a._start===Mt(v._time)&&Cn(f)&&vR(Qi(a))&&v.data!=="nested")&&(a._tTime=-ft,a.render(Math.max(0,-c)||0)),g&&my(Qi(a),g),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-ft&&!c?l:r<ft?0:r,h,p,_,m,g,d,v,x,y;if(!u)yR(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=f,x=this.timeline,this._repeat){if(m=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(m*100+r,s,o);if(h=Mt(f%m),f===l?(_=this._repeat,h=u):(g=Mt(f/m),_=~~g,_&&_===g?(h=u,_--):h>u&&(h=u)),d=this._yoyo&&_&1,d&&(y=this._yEase,h=u-h),g=jo(this._tTime,m),h===a&&!o&&this._initted&&_===g)return this._tTime=f,this;_!==g&&(x&&this._yEase&&Py(x,d),this.vars.repeatRefresh&&!d&&!this._lock&&h!==m&&this._initted&&(this._lock=o=1,this.render(Mt(m*_),!0).invalidate()._lock=0))}if(!this._initted){if(gy(this,c?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==g))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(h/u),this._from&&(this.ratio=v=1-v),!a&&f&&!s&&!g&&(Gn(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Gh(this,r,s,o),Gn(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&Gn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&Gh(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&$r(this,1),!s&&!(c&&!a)&&(f||a||d)&&(Gn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){fl||zn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||vm(this,u),c=this._ease(u/this._dur),BR(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Fc(this,0),this.parent||hy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Aa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Jt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Nr&&Nr.vars.overwrite!==!0)._first||Aa(this),this.parent&&o!==this.timeline.totalDuration()&&Yo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ai(r):a,u=this._ptLookup,c=this._pt,f,h,p,_,m,g,d;if((!s||s==="all")&&gR(a,l))return s==="all"&&(this._pt=0),Aa(this);for(f=this._op=this._op||[],s!=="all"&&(Yt(s)&&(m={},Rn(s,function(v){return m[v]=1}),s=m),s=zR(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){h=u[d],s==="all"?(f[d]=s,_=h,p={}):(p=f[d]=f[d]||{},_=s);for(m in _)g=h&&h[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&Nc(this,g,"_pt"),delete h[m]),p!=="all"&&(p[m]=1)}return this._initted&&!this._pt&&c&&Aa(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ba(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Ba(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Tt.killTweensOf(r,s,o)},e}(dl);qn(kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Rn("staggerTo,staggerFrom,staggerFromTo",function(n){kt[n]=function(){var e=new mn,t=Wh.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var xm=function(e,t,i){return e[t]=i},Fy=function(e,t,i){return e[t](i)},GR=function(e,t,i,r){return e[t](r.fp,i)},HR=function(e,t,i){return e.setAttribute(t,i)},ym=function(e,t){return It(e[t])?Fy:um(e[t])&&e.setAttribute?HR:xm},Oy=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},WR=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ky=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Sm=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},XR=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},jR=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Nc(this,t,"_pt"):t.dep||(i=1),t=r;return!i},YR=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},By=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},Pn=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||Oy,this.d=l||this,this.set=u||xm,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=YR,this.m=i,this.mt=s,this.tween=r},n}();Rn(pm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return hm[n]=1});Yn.TweenMax=Yn.TweenLite=kt;Yn.TimelineLite=Yn.TimelineMax=mn;Tt=new mn({sortChildren:!1,defaults:Wo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Xn.stringFilter=Cy;var Rs=[],Iu={},qR=[],K0=0,$R=0,Kf=function(e){return(Iu[e]||qR).map(function(t){return t()})},qh=function(){var e=Date.now(),t=[];e-K0>2&&(Kf("matchMediaInit"),Rs.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=Ri.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Kf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),K0=e,Kf("matchMedia"))},zy=function(){function n(t,i){this.selector=i&&Xh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=$R++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){It(i)&&(s=r,r=i,i=It);var o=this,a=function(){var u=xt,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=Xh(s)),xt=o,f=r.apply(o,arguments),It(f)&&o._r.push(f),xt=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===It?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=xt;xt=null,i(this),xt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof kt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof mn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof kt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Rs.length;o--;)Rs[o].id===this.id&&Rs.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),KR=function(){function n(t){this.contexts=[],this.scope=t,xt&&xt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Wi(i)||(i={matches:i});var o=new zy(0,s||this.scope),a=o.conditions={},l,u,c;xt&&!o.selector&&(o.selector=xt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=Ri.matchMedia(i[u]),l&&(Rs.indexOf(o)<0&&Rs.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(qh):l.addEventListener("change",qh)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),dc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return wy(r)})},timeline:function(e){return new mn(e)},getTweensOf:function(e,t){return Tt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Yt(e)&&(e=ai(e)[0]);var s=As(e||{}).get,o=i?dy:fy;return i==="native"&&(i=""),e&&(t?o((kn[t]&&kn[t].get||s)(e,t,i,r)):function(a,l,u){return o((kn[a]&&kn[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=ai(e),e.length>1){var r=e.map(function(c){return Ln.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=kn[t],a=As(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;xo._pt=0,f.init(e,i?c+i:c,xo,0,[e]),f.render(1,f),xo._pt&&Sm(1,xo)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=Ln.to(e,qn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Tt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Cs(e.ease,Wo.ease)),X0(Wo,e||{})},config:function(e){return X0(Xn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!kn[a]&&!Yn[a]&&ll(t+" effect requires "+a+" plugin.")}),jf[t]=function(a,l,u){return i(ai(a),qn(l||{},s),u)},o&&(mn.prototype[t]=function(a,l,u){return this.add(jf[t](a,Wi(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){qe[e]=Cs(t)},parseEase:function(e,t){return arguments.length?Cs(e,t):qe},getById:function(e){return Tt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new mn(e),r,s;for(i.smoothChildTiming=Cn(e.smoothChildTiming),Tt.remove(i),i._dp=0,i._time=i._tTime=Tt._time,r=Tt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof kt&&r.vars.onComplete===r._targets[0]))&&Ni(i,r,r._start-r._delay),r=s;return Ni(Tt,i,0),i},context:function(e,t){return e?new zy(e,t):xt},matchMedia:function(e){return new KR(e)},matchMediaRefresh:function(){return Rs.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||qh()},addEventListener:function(e,t){var i=Iu[e]||(Iu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Iu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:CR,wrapYoyo:RR,distribute:xy,random:Sy,snap:yy,normalize:bR,getUnit:an,clamp:ER,splitColor:Ay,toArray:ai,selector:Xh,mapRange:Ey,pipe:wR,unitize:AR,interpolate:PR,shuffle:vy},install:oy,effects:jf,ticker:zn,updateRoot:mn.updateRoot,plugins:kn,globalTimeline:Tt,core:{PropTween:Pn,globals:ay,Tween:kt,Timeline:mn,Animation:dl,getCache:As,_removeLinkedListItem:Nc,reverting:function(){return Jt},context:function(e){return e&&xt&&(xt.data.push(e),e._ctx=xt),xt},suppressOverwrites:function(e){return lm=e}}};Rn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return dc[n]=kt[n]});zn.add(mn.updateRoot);xo=dc.to({},{duration:0});var ZR=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},QR=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=ZR(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Zf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Yt(s)&&(l={},Rn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}QR(a,s)}}}},Ln=dc.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Jt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Zf("roundProps",jh),Zf("modifiers"),Zf("snap",yy))||dc;kt.version=mn.version=Ln.version="3.14.2";sy=1;cm()&&qo();qe.Power0;qe.Power1;qe.Power2;qe.Power3;qe.Power4;qe.Linear;qe.Quad;qe.Cubic;qe.Quart;qe.Quint;qe.Strong;qe.Elastic;qe.Back;qe.SteppedEase;qe.Bounce;qe.Sine;qe.Expo;qe.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Z0,Ur,Ro,Mm,Es,Q0,Em,JR=function(){return typeof window<"u"},gr={},ms=180/Math.PI,Po=Math.PI/180,ro=Math.atan2,J0=1e8,Tm=/([A-Z])/g,e2=/(left|right|width|margin|padding|x)/i,t2=/[\s,\(]\S/,Fi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$h=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},n2=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},i2=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},r2=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},s2=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Vy=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Gy=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},o2=function(e,t,i){return e.style[t]=i},a2=function(e,t,i){return e.style.setProperty(t,i)},l2=function(e,t,i){return e._gsap[t]=i},u2=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},c2=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},f2=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},wt="transform",Dn=wt+"Origin",d2=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in gr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Fi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=er(r,a)}):this.tfm[e]=o.x?o[e]:er(r,e),e===Dn&&(this.tfm.zOrigin=o.zOrigin);else return Fi.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(wt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Dn,t,"")),e=wt}(s||t)&&this.props.push(e,t,s[e])},Hy=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},h2=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Tm,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Em(),(!s||!s.isStart)&&!i[wt]&&(Hy(i),r.zOrigin&&i[Dn]&&(i[Dn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Wy=function(e,t){var i={target:e,props:[],revert:h2,save:d2};return e._gsap||Ln.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Xy,Kh=function(e,t){var i=Ur.createElementNS?Ur.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ur.createElement(e);return i&&i.style?i:Ur.createElement(e)},Hn=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Tm,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,$o(t)||t,1)||""},e_="O,Moz,ms,Ms,Webkit".split(","),$o=function(e,t,i){var r=t||Es,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(e_[o]+e in s););return o<0?null:(o===3?"ms":o>=0?e_[o]:"")+e},Zh=function(){JR()&&window.document&&(Z0=window,Ur=Z0.document,Ro=Ur.documentElement,Es=Kh("div")||{style:{}},Kh("div"),wt=$o(wt),Dn=wt+"Origin",Es.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Xy=!!$o("perspective"),Em=Ln.core.reverting,Mm=1)},t_=function(e){var t=e.ownerSVGElement,i=Kh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Ro.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Ro.removeChild(i),s},n_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},jy=function(e){var t,i;try{t=e.getBBox()}catch{t=t_(e),i=1}return t&&(t.width||t.height)||i||(t=t_(e)),t&&!t.width&&!t.x&&!t.y?{x:+n_(e,["x","cx","x1"])||0,y:+n_(e,["y","cy","y1"])||0,width:0,height:0}:t},Yy=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&jy(e))},Kr=function(e,t){if(t){var i=e.style,r;t in gr&&t!==Dn&&(t=wt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Tm,"-$1").toLowerCase())):i.removeAttribute(t)}},Fr=function(e,t,i,r,s,o){var a=new Pn(e._pt,t,i,0,1,o?Gy:Vy);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},i_={deg:1,rad:1,turn:1},p2={grid:1,flex:1},Zr=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Es.style,l=e2.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",p=r==="%",_,m,g,d;if(r===o||!s||i_[r]||i_[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),d=e.getCTM&&Yy(e),(p||o==="%")&&(gr[t]||~t.indexOf("adius")))return _=d?e.getBBox()[l?"width":"height"]:e[c],Nt(p?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(h?o:r),m=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,d&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===Ur||!m.appendChild)&&(m=Ur.body),g=m._gsap,g&&p&&g.width&&l&&g.time===zn.time&&!g.uncache)return Nt(s/g.width*f);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+r,_=e[c],v?e.style[t]=v:Kr(e,t)}else(p||o==="%")&&!p2[Hn(m,"display")]&&(a.position=Hn(e,"position")),m===e&&(a.position="static"),m.appendChild(Es),_=Es[c],m.removeChild(Es),a.position="absolute";return l&&p&&(g=As(m),g.time=zn.time,g.width=m[c]),Nt(h?_*s/f:_&&s?f/_*s:0)},er=function(e,t,i,r){var s;return Mm||Zh(),t in Fi&&t!=="transform"&&(t=Fi[t],~t.indexOf(",")&&(t=t.split(",")[0])),gr[t]&&t!=="transform"?(s=pl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:pc(Hn(e,Dn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=hc[t]&&hc[t](e,t,i)||Hn(e,t)||uy(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Zr(e,t,s,i)+i:s},m2=function(e,t,i,r){if(!i||i==="none"){var s=$o(t,e,1),o=s&&Hn(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Hn(e,"borderTopColor"))}var a=new Pn(this._pt,e.style,t,0,1,ky),l=0,u=0,c,f,h,p,_,m,g,d,v,x,y,E;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Hn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(m=e.style[t],e.style[t]=r,r=Hn(e,t)||r,m?e.style[t]=m:Kr(e,t)),c=[i,r],Cy(c),i=c[0],r=c[1],h=i.match(vo)||[],E=r.match(vo)||[],E.length){for(;f=vo.exec(r);)g=f[0],v=r.substring(l,f.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),g!==(m=h[u++]||"")&&(p=parseFloat(m)||0,y=m.substr((p+"").length),g.charAt(1)==="="&&(g=Co(p,g)+y),d=parseFloat(g),x=g.substr((d+"").length),l=vo.lastIndex-x.length,x||(x=x||Xn.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(p=Zr(e,t,m,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:d-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Gy:Vy;return ry.test(r)&&(a.e=0),this._pt=a,a},r_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},g2=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=r_[i]||i,t[1]=r_[r]||r,t.join(" ")},_2=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],gr[a]&&(l=1,a=a==="transformOrigin"?Dn:wt),Kr(i,a);l&&(Kr(i,wt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",pl(i,1),o.uncache=1,Hy(r)))}},hc={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Pn(e._pt,t,i,0,0,_2);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},hl=[1,0,0,1,0,0],qy={},$y=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},s_=function(e){var t=Hn(e,wt);return $y(t)?hl:t.substr(7).match(iy).map(Nt)},wm=function(e,t){var i=e._gsap||As(e),r=e.style,s=s_(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?hl:s):(s===hl&&!e.offsetParent&&e!==Ro&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Ro.appendChild(e)),s=s_(e),l?r.display=l:Kr(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ro.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Qh=function(e,t,i,r,s,o){var a=e._gsap,l=s||wm(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,p=l[0],_=l[1],m=l[2],g=l[3],d=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,E=parseFloat(x[1])||0,w,A,C,S;i?l!==hl&&(A=p*g-_*m)&&(C=y*(g/A)+E*(-m/A)+(m*v-g*d)/A,S=y*(-_/A)+E*(p/A)-(p*v-_*d)/A,y=C,E=S):(w=jy(e),y=w.x+(~x[0].indexOf("%")?y/100*w.width:y),E=w.y+(~(x[1]||x[0]).indexOf("%")?E/100*w.height:E)),r||r!==!1&&a.smooth?(d=y-u,v=E-c,a.xOffset=f+(d*p+v*m)-d,a.yOffset=h+(d*_+v*g)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=E,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[Dn]="0px 0px",o&&(Fr(o,a,"xOrigin",u,y),Fr(o,a,"yOrigin",c,E),Fr(o,a,"xOffset",f,a.xOffset),Fr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+E)},pl=function(e,t){var i=e._gsap||new Ly(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Hn(e,Dn)||"0",c,f,h,p,_,m,g,d,v,x,y,E,w,A,C,S,T,P,B,U,q,Y,G,z,N,Q,K,J,ve,Pe,Fe,ze;return c=f=h=m=g=d=v=x=y=0,p=_=1,i.svg=!!(e.getCTM&&Yy(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[wt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[wt]!=="none"?l[wt]:"")),r.scale=r.rotate=r.translate="none"),A=wm(e,i.svg),i.svg&&(i.uncache?(N=e.getBBox(),u=i.xOrigin-N.x+"px "+(i.yOrigin-N.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),Qh(e,z||u,!!z||i.originIsAbsolute,i.smooth!==!1,A)),E=i.xOrigin||0,w=i.yOrigin||0,A!==hl&&(P=A[0],B=A[1],U=A[2],q=A[3],c=Y=A[4],f=G=A[5],A.length===6?(p=Math.sqrt(P*P+B*B),_=Math.sqrt(q*q+U*U),m=P||B?ro(B,P)*ms:0,v=U||q?ro(U,q)*ms+m:0,v&&(_*=Math.abs(Math.cos(v*Po))),i.svg&&(c-=E-(E*P+w*U),f-=w-(E*B+w*q))):(ze=A[6],Pe=A[7],K=A[8],J=A[9],ve=A[10],Fe=A[11],c=A[12],f=A[13],h=A[14],C=ro(ze,ve),g=C*ms,C&&(S=Math.cos(-C),T=Math.sin(-C),z=Y*S+K*T,N=G*S+J*T,Q=ze*S+ve*T,K=Y*-T+K*S,J=G*-T+J*S,ve=ze*-T+ve*S,Fe=Pe*-T+Fe*S,Y=z,G=N,ze=Q),C=ro(-U,ve),d=C*ms,C&&(S=Math.cos(-C),T=Math.sin(-C),z=P*S-K*T,N=B*S-J*T,Q=U*S-ve*T,Fe=q*T+Fe*S,P=z,B=N,U=Q),C=ro(B,P),m=C*ms,C&&(S=Math.cos(C),T=Math.sin(C),z=P*S+B*T,N=Y*S+G*T,B=B*S-P*T,G=G*S-Y*T,P=z,Y=N),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,d=180-d),p=Nt(Math.sqrt(P*P+B*B+U*U)),_=Nt(Math.sqrt(G*G+ze*ze)),C=ro(Y,G),v=Math.abs(C)>2e-4?C*ms:0,y=Fe?1/(Fe<0?-Fe:Fe):0),i.svg&&(z=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!$y(Hn(e,wt)),z&&e.setAttribute("transform",z))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Nt(p),i.scaleY=Nt(_),i.rotation=Nt(m)+a,i.rotationX=Nt(g)+a,i.rotationY=Nt(d)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Dn]=pc(u)),i.xOffset=i.yOffset=0,i.force3D=Xn.force3D,i.renderTransform=i.svg?x2:Xy?Ky:v2,i.uncache=0,i},pc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Qf=function(e,t,i){var r=an(t);return Nt(parseFloat(t)+parseFloat(Zr(e,"x",i+"px",r)))+r},v2=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ky(e,t)},cs="0deg",xa="0px",fs=") ",Ky=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,h=i.skewX,p=i.skewY,_=i.scaleX,m=i.scaleY,g=i.transformPerspective,d=i.force3D,v=i.target,x=i.zOrigin,y="",E=d==="auto"&&e&&e!==1||d===!0;if(x&&(f!==cs||c!==cs)){var w=parseFloat(c)*Po,A=Math.sin(w),C=Math.cos(w),S;w=parseFloat(f)*Po,S=Math.cos(w),o=Qf(v,o,A*S*-x),a=Qf(v,a,-Math.sin(w)*-x),l=Qf(v,l,C*S*-x+x)}g!==xa&&(y+="perspective("+g+fs),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(E||o!==xa||a!==xa||l!==xa)&&(y+=l!==xa||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+fs),u!==cs&&(y+="rotate("+u+fs),c!==cs&&(y+="rotateY("+c+fs),f!==cs&&(y+="rotateX("+f+fs),(h!==cs||p!==cs)&&(y+="skew("+h+", "+p+fs),(_!==1||m!==1)&&(y+="scale("+_+", "+m+fs),v.style[wt]=y||"translate(0, 0)"},x2=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,h=i.scaleY,p=i.target,_=i.xOrigin,m=i.yOrigin,g=i.xOffset,d=i.yOffset,v=i.forceCSS,x=parseFloat(o),y=parseFloat(a),E,w,A,C,S;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Po,u*=Po,E=Math.cos(l)*f,w=Math.sin(l)*f,A=Math.sin(l-u)*-h,C=Math.cos(l-u)*h,u&&(c*=Po,S=Math.tan(u-c),S=Math.sqrt(1+S*S),A*=S,C*=S,c&&(S=Math.tan(c),S=Math.sqrt(1+S*S),E*=S,w*=S)),E=Nt(E),w=Nt(w),A=Nt(A),C=Nt(C)):(E=f,C=h,w=A=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Zr(p,"x",o,"px"),y=Zr(p,"y",a,"px")),(_||m||g||d)&&(x=Nt(x+_-(_*E+m*A)+g),y=Nt(y+m-(_*w+m*C)+d)),(r||s)&&(S=p.getBBox(),x=Nt(x+r/100*S.width),y=Nt(y+s/100*S.height)),S="matrix("+E+","+w+","+A+","+C+","+x+","+y+")",p.setAttribute("transform",S),v&&(p.style[wt]=S)},y2=function(e,t,i,r,s){var o=360,a=Yt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ms:1),u=l-r,c=r+u+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*J0)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*J0)%o-~~(u/o)*o)),e._pt=h=new Pn(e._pt,t,i,r,u,n2),h.e=c,h.u="deg",e._props.push(i),h},o_=function(e,t){for(var i in t)e[i]=t[i];return e},S2=function(e,t,i){var r=o_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,h,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[wt]=t,a=pl(i,1),Kr(i,wt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[wt],o[wt]=t,a=pl(i,1),o[wt]=u);for(l in gr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=an(u),_=an(c),f=p!==_?Zr(i,l,u,_):parseFloat(u),h=parseFloat(c),e._pt=new Pn(e._pt,a,l,f,h-f,$h),e._pt.u=_||0,e._props.push(l));o_(a,r)};Rn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});hc[e>1?"border"+n:n]=function(a,l,u,c,f){var h,p;if(arguments.length<4)return h=o.map(function(_){return er(a,_,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(_,m){return p[_]=h[m]=h[m]||h[(m-1)/2|0]}),a.init(l,p,f)}});var Zy={name:"css",register:Zh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,h,p,_,m,g,d,v,x,y,E,w,A,C,S;Mm||Zh(),this.styles=this.styles||Wy(e),C=this.styles.props,this.tween=i;for(m in t)if(m!=="autoRound"&&(c=t[m],!(kn[m]&&Iy(m,t,i,r,e,s)))){if(p=typeof c,_=hc[m],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=cl(c)),_)_(this,e,m,c,i)&&(A=1);else if(m.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(m)+"").trim(),c+="",jr.lastIndex=0,jr.test(u)||(g=an(u),d=an(c),d?g!==d&&(u=Zr(e,m,u,d)+d):g&&(c+=g)),this.add(a,"setProperty",u,c,r,s,0,0,m),o.push(m),C.push(m,0,a[m]);else if(p!=="undefined"){if(l&&m in l?(u=typeof l[m]=="function"?l[m].call(i,r,e,s):l[m],Yt(u)&&~u.indexOf("random(")&&(u=cl(u)),an(u+"")||u==="auto"||(u+=Xn.units[m]||an(er(e,m))||""),(u+"").charAt(1)==="="&&(u=er(e,m))):u=er(e,m),h=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),f=parseFloat(c),m in Fi&&(m==="autoAlpha"&&(h===1&&er(e,"visibility")==="hidden"&&f&&(h=0),C.push("visibility",0,a.visibility),Fr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),m!=="scale"&&m!=="transform"&&(m=Fi[m],~m.indexOf(",")&&(m=m.split(",")[0]))),x=m in gr,x){if(this.styles.save(m),S=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=Hn(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var T=e.style.perspective;e.style.perspective=c,c=Hn(e,"perspective"),T?e.style.perspective=T:Kr(e,"perspective")}f=parseFloat(c)}if(y||(E=e._gsap,E.renderTransform&&!t.parseTransform||pl(e,t.parseTransform),w=t.smoothOrigin!==!1&&E.smooth,y=this._pt=new Pn(this._pt,a,wt,0,1,E.renderTransform,E,0,-1),y.dep=1),m==="scale")this._pt=new Pn(this._pt,E,"scaleY",E.scaleY,(v?Co(E.scaleY,v+f):f)-E.scaleY||0,$h),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){C.push(Dn,0,a[Dn]),c=g2(c),E.svg?Qh(e,c,0,w,0,this):(d=parseFloat(c.split(" ")[2])||0,d!==E.zOrigin&&Fr(this,E,"zOrigin",E.zOrigin,d),Fr(this,a,m,pc(u),pc(c)));continue}else if(m==="svgOrigin"){Qh(e,c,1,w,0,this);continue}else if(m in qy){y2(this,E,m,h,v?Co(h,v+c):c);continue}else if(m==="smoothOrigin"){Fr(this,E,"smooth",E.smooth,c);continue}else if(m==="force3D"){E[m]=c;continue}else if(m==="transform"){S2(this,c,e);continue}}else m in a||(m=$o(m)||m);if(x||(f||f===0)&&(h||h===0)&&!t2.test(c)&&m in a)g=(u+"").substr((h+"").length),f||(f=0),d=an(c)||(m in Xn.units?Xn.units[m]:g),g!==d&&(h=Zr(e,m,u,d)),this._pt=new Pn(this._pt,x?E:a,m,h,(v?Co(h,v+f):f)-h,!x&&(d==="px"||m==="zIndex")&&t.autoRound!==!1?s2:$h),this._pt.u=d||0,x&&S!==c?(this._pt.b=u,this._pt.e=S,this._pt.r=r2):g!==d&&d!=="%"&&(this._pt.b=u,this._pt.r=i2);else if(m in a)m2.call(this,e,m,u,v?v+c:c);else if(m in e)this.add(e,m,u||e[m],v?v+c:c,r,s);else if(m!=="parseTransform"){dm(m,c);continue}x||(m in a?C.push(m,0,a[m]):typeof e[m]=="function"?C.push(m,2,e[m]()):C.push(m,1,u||e[m])),o.push(m)}}A&&By(this)},render:function(e,t){if(t.tween._time||!Em())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:er,aliases:Fi,getSetter:function(e,t,i){var r=Fi[t];return r&&r.indexOf(",")<0&&(t=r),t in gr&&t!==Dn&&(e._gsap.x||er(e,"x"))?i&&Q0===i?t==="scale"?u2:l2:(Q0=i||{})&&(t==="scale"?c2:f2):e.style&&!um(e.style[t])?o2:~t.indexOf("-")?a2:ym(e,t)},core:{_removeProperty:Kr,_getMatrix:wm}};Ln.utils.checkPrefix=$o;Ln.core.getStyleSaver=Wy;(function(n,e,t,i){var r=Rn(n+","+e+","+t,function(s){gr[s]=1});Rn(e,function(s){Xn.units[s]="deg",qy[s]=1}),Fi[r[13]]=n+","+e,Rn(i,function(s){var o=s.split(":");Fi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Rn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Xn.units[n]="px"});Ln.registerPlugin(Zy);var qt=Ln.registerPlugin(Zy)||Ln;qt.core.Tween;function M2({onComplete:n}){const e=Ve.useRef(null),t=Ve.useRef(null),[i,r]=Ve.useState(!0),[s,o]=Ve.useState("点击拉近视角 (CLICK TO ZOOM)"),[a,l]=Ve.useState("");Ve.useEffect(()=>{const h=window.innerWidth,p=window.innerHeight,_=new XE,m=new We(8900331);_.background=m,_.fog=new sm(m,.0015);const g=new ri(60,h/p,1,6e3);g.position.set(0,450,950);const d=new iR({antialias:!0,powerPreference:"high-performance"});d.setSize(h,p),d.shadowMap.enabled=!0,d.shadowMap.type=Oa,d.toneMapping=qp,e.current&&e.current.appendChild(d.domElement);const v=new sT(16777215,.7);_.add(v);const x=new rT(16777215,1.5);x.position.set(300,800,400),x.castShadow=!0,x.shadow.mapSize.set(1024,1024),x.shadow.camera.top=2e3,x.shadow.camera.bottom=-2e3,_.add(x);const y=new Ii(1,1,1),E=80,w=35,A=E*E,C=new Ii(30,150,30),S=new no({color:30654,roughness:.8,flatShading:!0}),T=new YE(C,S,A);T.receiveShadow=!0,_.add(T);const P=new Qt,B=[];for(let k=0;k<E;k++)for(let F=0;F<E;F++)B.push({x:(k-E/2)*w,z:(F-E/2)*w,distToCenter:Math.sqrt(((k-E/2)*w)**2+((F-E/2)*w)**2)});const U=new ei;_.add(U);const q=new no({color:16777215,emissive:2236962,roughness:1,flatShading:!0}),Y=new Ii(10,10,10);function G(k,F,me){const ie=new ei;ie.position.set(k,F,me);const ge=Math.floor(Math.random()*5)+5;for(let ne=0;ne<ge;ne++){const ae=new Pt(Y,q);ae.position.set((Math.random()-.5)*18,(Math.random()-.5)*12,(Math.random()-.5)*18),ae.castShadow=!0,ae.receiveShadow=!0,ie.add(ae)}U.add(ie);const _e=1+Math.pow(Math.random(),2)*6;ie.scale.set(_e,_e,_e),qt.to(ie.position,{y:F+20+Math.random()*30,duration:6+Math.random()*8,yoyo:!0,repeat:-1,ease:"sine.inOut"}),qt.to(ie.rotation,{y:Math.random()*.5,duration:20+Math.random()*20,yoyo:!0,repeat:-1,ease:"sine.inOut"})}for(let k=0;k<40;k++)G((Math.random()-.5)*2e3,250+Math.random()*600,(Math.random()-.5)*1500-200);const z=new ei;_.add(z);const N=new no({color:16777215,transparent:!0,opacity:.9,side:Li,flatShading:!0}),Q=new no({color:1118481,flatShading:!0});function K(k,F,me,ie,ge){const _e=new ei;_e.position.set(k,F,me);const ne=new no({color:ge,roughness:.4,flatShading:!0}),ae=new Pt(y,ne);ae.scale.set(14,5,5),_e.add(ae);const xe=new Pt(y,ne);xe.scale.set(3,3,3),xe.position.set(-8.5,0,0),_e.add(xe);const Ee=new Pt(y,ne);Ee.scale.set(2,8,1),Ee.position.set(-10,1,0),Ee.rotation.z=.2,_e.add(Ee);const le=new Pt(y,Q);le.scale.set(1,1.5,5.2),le.position.set(4,1,0),_e.add(le);const Ie=new ei,L=new Pt(y,N);L.scale.set(5,1,6),L.position.set(1,0,3),Ie.add(L);const ce=new Pt(y,N);ce.scale.set(4,1,6),ce.position.set(-1,0,8),Ie.add(ce);const oe=new Pt(y,N);oe.scale.set(2,.8,5),oe.position.set(-3,0,12),Ie.add(oe);const he=Ie;he.position.set(0,2,2.5),he.rotation.set(0,-.2,-.1),_e.add(he);const re=Ie.clone();re.scale.z=-1,re.position.set(0,2,-2.5),re.rotation.set(0,.2,.1),_e.add(re),_e.scale.set(ie,ie,ie),z.add(_e),qt.to(_e.position,{y:F+30,duration:2+Math.random(),yoyo:!0,repeat:-1,ease:"sine.inOut"}),qt.to(_e.rotation,{z:Math.random()*.2-.1,y:Math.random()*.4-.2,duration:1.5+Math.random(),yoyo:!0,repeat:-1,ease:"sine.inOut"}),qt.to(he.rotation,{z:"+=0.3",duration:.2,yoyo:!0,repeat:-1}),qt.to(re.rotation,{z:"-=0.3",duration:.2,yoyo:!0,repeat:-1})}K(-220,380,150,3.5,16738740),K(220,420,-50,3,13808780);const J=new ei;_.add(J);const ve=new ei;ve.position.y=25,J.add(ve);const Pe=new We(3354),Fe=new We(18355),ze=new Ii(15,15,15);function $(k,F,me){let ie=(F+4)/8;ie=Math.max(0,Math.min(1,ie));const ge=new We().lerpColors(Pe,Fe,ie),_e=new no({color:ge,roughness:.2,metalness:.1}),ne=new Pt(ze,_e);ne.position.set(k*15,F*15,me*15),ne.castShadow=!0,ne.receiveShadow=!0,ve.add(ne)}const ee=32,ye=8;for(let k=-ee/2;k<=ee/2;k++)$(k,-ye/2,0),$(k,ye/2,0);for(let k=-ye/2;k<=ye/2;k++)$(-ee/2,k,0),$(ee/2,k,0);function Oe(){const k=document.createElement("canvas");k.width=2048,k.height=512;const F=k.getContext("2d");F.fillStyle="rgba(0,0,0,0)",F.fillRect(0,0,2048,512),F.textAlign="center",F.textBaseline="middle",F.fillStyle="#FFCC00",F.font='bold 220px "Microsoft YaHei", "SimHei", sans-serif',F.fillText("小鱼飞飞",1024,180),F.fillStyle="#FFAA00",F.font='bold 60px "Microsoft YaHei", sans-serif',F.fillText("您的专属健身与饮食助手",1024,360);const me=new ZE(k),ie=new ac({map:me,transparent:!0,side:dr}),ge=new Tl(440,110),_e=new Pt(ge,ie);_e.position.set(0,0,1),ve.add(_e),r(!1)}Oe();const we=150,Xe=new ei;_.add(Xe);const Ft=new Ii(3,8,3),je=new ac({color:14743551,transparent:!0,opacity:.9});let Qe=[];for(let k=0;k<we;k++){let F=new Pt(Ft,je);F.visible=!1,Xe.add(F),Qe.push({mesh:F,velocity:new H})}function nt(k){Qe.forEach(F=>{F.mesh.position.copy(k),F.mesh.position.y-=50,F.mesh.visible=!0,F.mesh.scale.set(1,1,1),F.mesh.material.opacity=.9,F.velocity.set((Math.random()-.5)*100,Math.random()*250+100,(Math.random()-.5)*100),qt.to(F.mesh.position,{duration:1+Math.random(),x:k.x+F.velocity.x*2,y:k.y+F.velocity.y,z:k.z+F.velocity.z*2,ease:"power2.out"}),qt.to(F.mesh.position,{delay:.5,duration:1,y:-300,ease:"power2.in"}),qt.to(F.mesh.scale,{duration:1.5,z:.1,y:2,x:.1}),qt.to(F.mesh.material,{duration:1.8,opacity:0})})}let De=0;const yt=new H;let D=0,St=!1;const $e=()=>{if(De===0)De=1,o(""),setTimeout(()=>l("再次点击：坠落冲击 (CLICK AGAIN: DIVE)"),1e3),qt.to(_.fog,{density:5e-4,duration:2.5,ease:"power2.inOut"}),qt.to(_.background,{r:.6,g:.85,b:1,duration:2.5,ease:"power2.inOut"}),qt.to(J.position,{duration:2,y:200,ease:"power2.inOut"}),qt.to(g.position,{duration:2.5,x:0,y:280,z:600,ease:"power2.inOut"});else if(De===1){De=2,l("");const k=qt.timeline();k.to(J.position,{duration:2.5,y:-150,z:100,ease:"power2.in"},"dive"),k.to(J.rotation,{duration:2.5,x:-Math.PI*4.5,ease:"power2.in"},"dive"),k.call(()=>{St=!0,D=M.getElapsedTime(),nt(J.position),qt.fromTo(g.position,{y:g.position.y-10},{y:g.position.y,duration:.2,ease:"elastic.out(1, 0.3)"}),n&&setTimeout(()=>{n()},2e3)}),k.to(J.position,{y:-400,duration:2,ease:"power2.out"}),k.to(J.scale,{x:0,y:0,z:0,duration:1.5,delay:-1.5})}};e.current&&e.current.addEventListener("click",$e);let it=0,Ae=0;const R=k=>{De===0&&(it=(k.clientX-h/2)*.1,Ae=(k.clientY-p/2)*.1)};window.addEventListener("mousemove",R);const M=new aT,I=()=>{const k=M.getElapsedTime();for(let F=0;F<A;F++){const me=B[F];let ie=Math.sin(me.x*.05+k*.6)*15+Math.cos(me.z*.05+k*.4)*15,ge=1+ie*.002;if(St){const _e=k-D,ne=_e*400,ae=Math.abs(me.distToCenter-ne);if(ae<150){const xe=Math.pow(1-ae/150,2)*Math.max(0,1-_e*.4);ie+=120*xe,ge+=1.5*xe}}P.position.set(me.x,-250+ie,me.z),P.scale.set(1,ge,1),P.updateMatrix(),T.setMatrixAt(F,P.matrix)}T.instanceMatrix.needsUpdate=!0,De===0?(g.position.x+=(it*.5-g.position.x)*.05,g.position.y+=(450+Ae*.5-g.position.y)*.05,g.lookAt(0,0,0),J.rotation.set(Math.cos(k*.3)*.05,Math.sin(k*.5)*.08,0),U.rotation.y=k*.02,z.rotation.y=-k*.03):De===1?(g.position.y+=Math.sin(k)*.2,g.lookAt(J.position),J.rotation.y=Math.sin(k*.8)*.1,U.rotation.y=k*.02,z.rotation.y=-k*.03):De===2&&(yt.copy(J.position).add(new H(0,200,400)),g.position.lerp(yt,.04),g.lookAt(J.position)),d.render(_,g),t.current=requestAnimationFrame(I)};t.current=requestAnimationFrame(I);const Z=()=>{const k=window.innerWidth,F=window.innerHeight;g.aspect=k/F,g.updateProjectionMatrix(),d.setSize(k,F)};return window.addEventListener("resize",Z),()=>{t.current&&cancelAnimationFrame(t.current),window.removeEventListener("resize",Z),window.removeEventListener("mousemove",R),e.current&&(e.current.removeEventListener("click",$e),e.current.contains(d.domElement)&&e.current.removeChild(d.domElement)),d.dispose(),_.traverse(k=>{k.geometry&&k.geometry.dispose(),k.material&&(Array.isArray(k.material)?k.material.forEach(F=>F.dispose()):k.material.dispose())})}},[n]);const u={fontFamily:"'Impact', sans-serif",textTransform:"uppercase",letterSpacing:"1px",color:"#01579b",textShadow:"0 1px 5px rgba(255,255,255,0.8)",fontSize:"1.2rem",marginTop:"30px",position:"absolute",top:"30px",width:"100%",textAlign:"center",transition:"opacity 0.5s"},c={...u,top:"60px",color:"#d84315",fontSize:"1rem"},f={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:"#87CEEB",padding:"20px",borderRadius:"10px",zIndex:20,textAlign:"center",color:"#01579b",fontWeight:"bold",transition:"opacity 0.5s",opacity:i?1:0,pointerEvents:"none"};return X.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden",cursor:"pointer"},children:[X.jsx("div",{ref:e,style:{width:"100%",height:"100%"}}),X.jsx("div",{style:f,children:"正在构建世界..."}),X.jsx("div",{style:{...u,opacity:s?1:0},children:s}),X.jsx("div",{style:{...c,opacity:a?1:0},children:a})]})}function E2(){const[n,e]=Ve.useState(!0),[t,i]=Ve.useState(!1),[r,s]=Ve.useState(null),[o,a]=Ve.useState(null);Ve.useEffect(()=>{const p=localStorage.getItem("auth_token");p&&(s(p),i(!0),l(p))},[]);const l=async p=>{try{const m=await(await fetch("http://localhost:3000/api/profile",{headers:{Authorization:`Bearer ${p}`}})).json();a(m.profile!==null)}catch(_){console.error("Profile check error:",_),a(!1)}},u=()=>{e(!1)},c=p=>{s(p),i(!0),l(p)},f=()=>{localStorage.removeItem("auth_token"),localStorage.removeItem("username"),s(null),i(!1),a(null)},h=()=>{a(!0)};return n?X.jsx(M2,{onComplete:u}):t?o===!1?X.jsxs("div",{className:"app-container",children:[X.jsx(Xl,{}),X.jsx(B1,{authToken:r,onComplete:h})]}):o===!0?X.jsxs("div",{className:"app-container",children:[X.jsx(Xl,{}),X.jsx("div",{style:{position:"relative",zIndex:1,width:"100%",height:"100%"},children:X.jsx(O1,{authToken:r,onLogout:f})})]}):X.jsxs("div",{className:"app-container",children:[X.jsx(Xl,{}),X.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#039be5",fontSize:"18px",fontWeight:"bold"},children:"加载中..."})]}):X.jsxs("div",{className:"app-container",children:[X.jsx(Xl,{}),X.jsx(k1,{onLogin:c})]})}class T2 extends __.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){return this.state.hasError?X.jsxs("div",{style:{color:"red",padding:"20px",background:"white"},children:[X.jsx("h1",{children:"Something went wrong."}),X.jsx("pre",{children:this.state.error.toString()})]}):this.props.children}}yx(document.getElementById("root")).render(X.jsx(Ve.StrictMode,{children:X.jsx(T2,{children:X.jsx(E2,{})})}));
