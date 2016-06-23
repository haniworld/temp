/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);
// Underscore.js 1.3.3
// (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){function r(a,c,d){if(a===c)return 0!==a||1/a==1/c;if(null==a||null==c)return a===c;a._chain&&(a=a._wrapped);c._chain&&(c=c._wrapped);if(a.isEqual&&b.isFunction(a.isEqual))return a.isEqual(c);if(c.isEqual&&b.isFunction(c.isEqual))return c.isEqual(a);var e=l.call(a);if(e!=l.call(c))return!1;switch(e){case "[object String]":return a==""+c;case "[object Number]":return a!=+a?c!=+c:0==a?1/a==1/c:a==+c;case "[object Date]":case "[object Boolean]":return+a==+c;case "[object RegExp]":return a.source==
c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if("object"!=typeof a||"object"!=typeof c)return!1;for(var f=d.length;f--;)if(d[f]==a)return!0;d.push(a);var f=0,g=!0;if("[object Array]"==e){if(f=a.length,g=f==c.length)for(;f--&&(g=f in a==f in c&&r(a[f],c[f],d)););}else{if("constructor"in a!="constructor"in c||a.constructor!=c.constructor)return!1;for(var h in a)if(b.has(a,h)&&(f++,!(g=b.has(c,h)&&r(a[h],c[h],d))))break;if(g){for(h in c)if(b.has(c,h)&&!f--)break;
g=!f}}d.pop();return g}var s=this,I=s._,o={},k=Array.prototype,p=Object.prototype,i=k.slice,J=k.unshift,l=p.toString,K=p.hasOwnProperty,y=k.forEach,z=k.map,A=k.reduce,B=k.reduceRight,C=k.filter,D=k.every,E=k.some,q=k.indexOf,F=k.lastIndexOf,p=Array.isArray,L=Object.keys,t=Function.prototype.bind,b=function(a){return new m(a)};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=b),exports._=b):s._=b;b.VERSION="1.3.3";var j=b.each=b.forEach=function(a,
c,d){if(a!=null)if(y&&a.forEach===y)a.forEach(c,d);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(e in a&&c.call(d,a[e],e,a)===o)break}else for(e in a)if(b.has(a,e)&&c.call(d,a[e],e,a)===o)break};b.map=b.collect=function(a,c,b){var e=[];if(a==null)return e;if(z&&a.map===z)return a.map(c,b);j(a,function(a,g,h){e[e.length]=c.call(b,a,g,h)});if(a.length===+a.length)e.length=a.length;return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(A&&
a.reduce===A){e&&(c=b.bind(c,e));return f?a.reduce(c,d):a.reduce(c)}j(a,function(a,b,i){if(f)d=c.call(e,d,a,b,i);else{d=a;f=true}});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(B&&a.reduceRight===B){e&&(c=b.bind(c,e));return f?a.reduceRight(c,d):a.reduceRight(c)}var g=b.toArray(a).reverse();e&&!f&&(c=b.bind(c,e));return f?b.reduce(g,c,d,e):b.reduce(g,c)};b.find=b.detect=function(a,
c,b){var e;G(a,function(a,g,h){if(c.call(b,a,g,h)){e=a;return true}});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(C&&a.filter===C)return a.filter(c,b);j(a,function(a,g,h){c.call(b,a,g,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,g,h){c.call(b,a,g,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(D&&a.every===D)return a.every(c,b);j(a,function(a,g,h){if(!(e=e&&c.call(b,
a,g,h)))return o});return!!e};var G=b.some=b.any=function(a,c,d){c||(c=b.identity);var e=false;if(a==null)return e;if(E&&a.some===E)return a.some(c,d);j(a,function(a,b,h){if(e||(e=c.call(d,a,b,h)))return o});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;if(q&&a.indexOf===q)return a.indexOf(c)!=-1;return b=G(a,function(a){return a===c})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,function(a){return(b.isFunction(c)?c||a:a[c]).apply(a,d)})};b.pluck=
function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0])return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0])return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&
(e={value:a,computed:b})});return e.value};b.shuffle=function(a){var b=[],d;j(a,function(a,f){d=Math.floor(Math.random()*(f+1));b[f]=b[d];b[d]=a});return b};b.sortBy=function(a,c,d){var e=b.isFunction(c)?c:function(a){return a[c]};return b.pluck(b.map(a,function(a,b,c){return{value:a,criteria:e.call(d,a,b,c)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c===void 0?1:d===void 0?-1:c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,c){var d={},e=b.isFunction(c)?c:function(a){return a[c]};
j(a,function(a,b){var c=e(a,b);(d[c]||(d[c]=[])).push(a)});return d};b.sortedIndex=function(a,c,d){d||(d=b.identity);for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=function(a){return!a?[]:b.isArray(a)||b.isArguments(a)?i.call(a):a.toArray&&b.isFunction(a.toArray)?a.toArray():b.values(a)};b.size=function(a){return b.isArray(a)?a.length:b.keys(a).length};b.first=b.head=b.take=function(a,b,d){return b!=null&&!d?i.call(a,0,b):a[0]};b.initial=function(a,b,d){return i.call(a,
0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=null&&!d?i.call(a,Math.max(a.length-b,0)):a[a.length-1]};b.rest=b.tail=function(a,b,d){return i.call(a,b==null||d?1:b)};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a,c){return b.reduce(a,function(a,e){if(b.isArray(e))return a.concat(c?e:b.flatten(e));a[a.length]=e;return a},[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,
e=[];a.length<3&&(c=true);b.reduce(d,function(d,g,h){if(c?b.last(d)!==g||!d.length:!b.include(d,g)){d.push(g);e.push(a[h])}return d},[]);return e};b.union=function(){return b.uniq(b.flatten(arguments,true))};b.intersection=b.intersect=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a){var c=b.flatten(i.call(arguments,1),true);return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=
i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d){d=b.sortedIndex(a,c);return a[d]===c?d:-1}if(q&&a.indexOf===q)return a.indexOf(c);d=0;for(e=a.length;d<e;d++)if(d in a&&a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(F&&a.lastIndexOf===F)return a.lastIndexOf(b);for(var d=a.length;d--;)if(d in a&&a[d]===b)return d;return-1};b.range=function(a,b,d){if(arguments.length<=
1){b=a||0;a=0}for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;){g[f++]=a;a=a+d}return g};var H=function(){};b.bind=function(a,c){var d,e;if(a.bind===t&&t)return t.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,e.concat(i.call(arguments)));H.prototype=a.prototype;var b=new H,g=a.apply(b,e.concat(i.call(arguments)));return Object(g)===g?g:b}};b.bindAll=function(a){var c=
i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var e=c.apply(this,arguments);return b.has(d,e)?d[e]:d[e]=a.apply(this,arguments)}};b.delay=function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(null,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,f,g,h,i,j=b.debounce(function(){h=
g=false},c);return function(){d=this;e=arguments;f||(f=setTimeout(function(){f=null;h&&a.apply(d,e);j()},c));g?h=true:i=a.apply(d,e);j();g=true;return i}};b.debounce=function(a,b,d){var e;return function(){var f=this,g=arguments;d&&!e&&a.apply(f,g);clearTimeout(e);e=setTimeout(function(){e=null;d||a.apply(f,g)},b)}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments,0));
return b.apply(this,d)}};b.compose=function(){var a=arguments;return function(){for(var b=arguments,d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,arguments)}};b.keys=L||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[],d;for(d in a)b.has(a,d)&&(c[c.length]=d);return c};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&
c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]=b[d]});return a};b.pick=function(a){var c={};j(b.flatten(i.call(arguments,1)),function(b){b in a&&(c[b]=a[b])});return c};b.defaults=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return r(a,b,[])};b.isEmpty=
function(a){if(a==null)return true;if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(b.has(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=p||function(a){return l.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};b.isArguments=function(a){return l.call(a)=="[object Arguments]"};b.isArguments(arguments)||(b.isArguments=function(a){return!(!a||!b.has(a,"callee"))});b.isFunction=function(a){return l.call(a)=="[object Function]"};
b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isFinite=function(a){return b.isNumber(a)&&isFinite(a)};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};b.isDate=function(a){return l.call(a)=="[object Date]"};b.isRegExp=function(a){return l.call(a)=="[object RegExp]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.has=function(a,
b){return K.call(a,b)};b.noConflict=function(){s._=I;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};b.result=function(a,c){if(a==null)return null;var d=a[c];return b.isFunction(d)?d.call(a):d};b.mixin=function(a){j(b.functions(a),function(c){M(c,b[c]=a[c])})};var N=0;b.uniqueId=
function(a){var b=N++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var u=/.^/,n={"\\":"\\","'":"'",r:"\r",n:"\n",t:"\t",u2028:"\u2028",u2029:"\u2029"},v;for(v in n)n[n[v]]=v;var O=/\\|'|\r|\n|\t|\u2028|\u2029/g,P=/\\(\\|'|r|n|t|u2028|u2029)/g,w=function(a){return a.replace(P,function(a,b){return n[b]})};b.template=function(a,c,d){d=b.defaults(d||{},b.templateSettings);a="__p+='"+a.replace(O,function(a){return"\\"+n[a]}).replace(d.escape||
u,function(a,b){return"'+\n_.escape("+w(b)+")+\n'"}).replace(d.interpolate||u,function(a,b){return"'+\n("+w(b)+")+\n'"}).replace(d.evaluate||u,function(a,b){return"';\n"+w(b)+"\n;__p+='"})+"';\n";d.variable||(a="with(obj||{}){\n"+a+"}\n");var a="var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n"+a+"return __p;\n",e=new Function(d.variable||"obj","_",a);if(c)return e(c,b);c=function(a){return e.call(this,a,b)};c.source="function("+(d.variable||"obj")+"){\n"+a+"}";return c};
b.chain=function(a){return b(a).chain()};var m=function(a){this._wrapped=a};b.prototype=m.prototype;var x=function(a,c){return c?b(a).chain():a},M=function(a,c){m.prototype[a]=function(){var a=i.call(arguments);J.call(a,this._wrapped);return x(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];m.prototype[a]=function(){var d=this._wrapped;b.apply(d,arguments);var e=d.length;(a=="shift"||a=="splice")&&e===0&&delete d[0];return x(d,
this._chain)}});j(["concat","join","slice"],function(a){var b=k[a];m.prototype[a]=function(){return x(b.apply(this._wrapped,arguments),this._chain)}});m.prototype.chain=function(){this._chain=true;return this};m.prototype.value=function(){return this._wrapped}}).call(this);

define("underscore", (function (global) {
    return function () {
        var ret, fn;
        return ret || global._;
    };
}(this)));

//     Backbone.js 1.1.2

//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(root, factory) {

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define('backbone',['underscore', 'jquery', 'exports'], function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    factory(root, exports, _);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(this, function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create local references to array methods we'll want to use later.
  var array = [];
  var push = array.push;
  var slice = array.slice;
  var splice = array.splice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.1.2';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {

    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    on: function(name, callback, context) {
      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
      this._events || (this._events = {});
      var events = this._events[name] || (this._events[name] = []);
      events.push({callback: callback, context: context, ctx: context || this});
      return this;
    },

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    once: function(name, callback, context) {
      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
      var self = this;
      var once = _.once(function() {
        self.off(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
      return this.on(name, once, context);
    },

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    off: function(name, callback, context) {
      var retain, ev, events, names, i, l, j, k;
      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
      if (!name && !callback && !context) {
        this._events = void 0;
        return this;
      }
      names = name ? [name] : _.keys(this._events);
      for (i = 0, l = names.length; i < l; i++) {
        name = names[i];
        if (events = this._events[name]) {
          this._events[name] = retain = [];
          if (callback || context) {
            for (j = 0, k = events.length; j < k; j++) {
              ev = events[j];
              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                  (context && context !== ev.context)) {
                retain.push(ev);
              }
            }
          }
          if (!retain.length) delete this._events[name];
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(name) {
      if (!this._events) return this;
      var args = slice.call(arguments, 1);
      if (!eventsApi(this, 'trigger', name, args)) return this;
      var events = this._events[name];
      var allEvents = this._events.all;
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, arguments);
      return this;
    },

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    stopListening: function(obj, name, callback) {
      var listeningTo = this._listeningTo;
      if (!listeningTo) return this;
      var remove = !name && !callback;
      if (!callback && typeof name === 'object') callback = this;
      if (obj) (listeningTo = {})[obj._listenId] = obj;
      for (var id in listeningTo) {
        obj = listeningTo[id];
        obj.off(name, callback, this);
        if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
      }
      return this;
    }

  };

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Implement fancy features of the Events API such as multiple event
  // names `"change blur"` and jQuery-style event maps `{change: action}`
  // in terms of the existing API.
  var eventsApi = function(obj, action, name, rest) {
    if (!name) return true;

    // Handle event maps.
    if (typeof name === 'object') {
      for (var key in name) {
        obj[action].apply(obj, [key, name[key]].concat(rest));
      }
      return false;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, l = names.length; i < l; i++) {
        obj[action].apply(obj, [names[i]].concat(rest));
      }
      return false;
    }

    return true;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
  // listen to an event in another object ... keeping track of what it's
  // listening to.
  _.each(listenMethods, function(implementation, method) {
    Events[method] = function(obj, name, callback) {
      var listeningTo = this._listeningTo || (this._listeningTo = {});
      var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
      listeningTo[id] = obj;
      if (!callback && typeof name === 'object') callback = this;
      obj[implementation](name, callback, this);
      return this;
    };
  });

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId('c');
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      var attr, attrs, unset, changes, silent, changing, prev, current;
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      unset           = options.unset;
      silent          = options.silent;
      changes         = [];
      changing        = this._changing;
      this._changing  = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }
      current = this.attributes, prev = this._previousAttributes;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      // For each `set` attribute, update or delete the current value.
      for (attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          this.changed[attr] = val;
        } else {
          delete this.changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0, l = changes.length; i < l; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var val, changed = false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      for (var attr in diff) {
        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server. If the server's representation of the
    // model differs from its current attributes, they will be overridden,
    // triggering a `"change"` event.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        if (!model.set(model.parse(resp, options), options)) return false;
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      var attrs, method, xhr, attributes = this.attributes;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true}, options);

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !options.wait) {
        if (!this.set(attrs, options)) return false;
      } else {
        if (!this._validate(attrs, options)) return false;
      }

      // Set temporary attributes if `{wait: true}`.
      if (attrs && options.wait) {
        this.attributes = _.extend({}, attributes, attrs);
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = model.parse(resp, options);
        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
          return false;
        }
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch') options.attrs = attrs;
      xhr = this.sync(method, this, options);

      // Restore attributes.
      if (attrs && options.wait) this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;

      var destroy = function() {
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (options.wait || model.isNew()) destroy();
        if (success) success(model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      if (this.isNew()) {
        options.success();
        return false;
      }
      wrapError(this, options);

      var xhr = this.sync('delete', this, options);
      if (!options.wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.extend(options || {}, { validate: true }));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model.
  var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  _.each(modelMethods, function(method) {
    Model.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.attributes);
      return _[method].apply(_, args);
    };
  });

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analagous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model){ return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      var singular = !_.isArray(models);
      models = singular ? [models] : _.clone(models);
      options || (options = {});
      var i, l, index, model;
      for (i = 0, l = models.length; i < l; i++) {
        model = models[i] = this.get(models[i]);
        if (!model) continue;
        delete this._byId[model.id];
        delete this._byId[model.cid];
        index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;
        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }
        this._removeReference(model, options);
      }
      return singular ? models[0] : models;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      options = _.defaults({}, options, setOptions);
      if (options.parse) models = this.parse(models, options);
      var singular = !_.isArray(models);
      models = singular ? (models ? [models] : []) : _.clone(models);
      var i, l, id, model, attrs, existing, sort;
      var at = options.at;
      var targetModel = this.model;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
      var toAdd = [], toRemove = [], modelMap = {};
      var add = options.add, merge = options.merge, remove = options.remove;
      var order = !sortable && add && remove ? [] : false;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      for (i = 0, l = models.length; i < l; i++) {
        attrs = models[i] || {};
        if (attrs instanceof Model) {
          id = model = attrs;
        } else {
          id = attrs[targetModel.prototype.idAttribute || 'id'];
        }

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        if (existing = this.get(id)) {
          if (remove) modelMap[existing.cid] = true;
          if (merge) {
            attrs = attrs === model ? model.attributes : attrs;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(attrs, options);
          if (!model) continue;
          toAdd.push(model);
          this._addReference(model, options);
        }

        // Do not add multiple models with the same `id`.
        model = existing || model;
        if (order && (model.isNew() || !modelMap[model.id])) order.push(model);
        modelMap[model.id] = true;
      }

      // Remove nonexistent models if appropriate.
      if (remove) {
        for (i = 0, l = this.length; i < l; ++i) {
          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
        }
        if (toRemove.length) this.remove(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      if (toAdd.length || (order && order.length)) {
        if (sortable) sort = true;
        this.length += toAdd.length;
        if (at != null) {
          for (i = 0, l = toAdd.length; i < l; i++) {
            this.models.splice(at + i, 0, toAdd[i]);
          }
        } else {
          if (order) this.models.length = 0;
          var orderedModels = order || toAdd;
          for (i = 0, l = orderedModels.length; i < l; i++) {
            this.models.push(orderedModels[i]);
          }
        }
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort events.
      if (!options.silent) {
        for (i = 0, l = toAdd.length; i < l; i++) {
          (model = toAdd[i]).trigger('add', model, this, options);
        }
        if (sort || (order && order.length)) this.trigger('sort', this, options);
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options || (options = {});
      for (var i = 0, l = this.models.length; i < l; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      this.remove(model, options);
      return model;
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      this.remove(model, options);
      return model;
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid];
    },

    // Get the model at the given index.
    at: function(index) {
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      if (_.isEmpty(attrs)) return first ? void 0 : [];
      return this[first ? 'find' : 'filter'](function(model) {
        for (var key in attrs) {
          if (attrs[key] !== model.get(key)) return false;
        }
        return true;
      });
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      // Run sort based on type of `comparator`.
      if (_.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(_.bind(this.comparator, this));
      }

      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success(collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      if (!(model = this._prepareModel(model, options))) return false;
      if (!options.wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(model, resp) {
        if (options.wait) collection.add(model, options);
        if (success) success(model, resp, options);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models);
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (attrs instanceof Model) return attrs;
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      if (model.id != null) this._byId[model.id] = model;
      if (!model.collection) model.collection = this;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (model && event === 'change:' + model.idAttribute) {
        delete this._byId[model.previous(model.idAttribute)];
        if (model.id != null) this._byId[model.id] = model;
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
    'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
    'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
    'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
    'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
    'lastIndexOf', 'isEmpty', 'chain', 'sample'];

  // Mix in each Underscore method as a proxy to `Collection#models`.
  _.each(methods, function(method) {
    Collection.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.models);
      return _[method].apply(_, args);
    };
  });

  // Underscore methods that take a property name as an argument.
  var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];

  // Use attributes instead of properties.
  _.each(attributeMethods, function(method) {
    Collection.prototype[method] = function(value, context) {
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _[method](this.models, iterator, context);
    };
  });

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    options || (options = {});
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this.$el.remove();
      this.stopListening();
      return this;
    },

    // Change the view's element (`this.el` property), including event
    // re-delegation.
    setElement: function(element, delegate) {
      if (this.$el) this.undelegateEvents();
      this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
      this.el = this.$el[0];
      if (delegate !== false) this.delegateEvents();
      return this;
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    // This only works for delegate-able events: not `focus`, `blur`, and
    // not `change`, `submit`, and `reset` in Internet Explorer.
    delegateEvents: function(events) {
      if (!(events || (events = _.result(this, 'events')))) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) continue;

        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.cid;
        if (selector === '') {
          this.$el.on(eventName, method);
        } else {
          this.$el.on(eventName, selector, method);
        }
      }
      return this;
    },

    // Clears all callbacks previously bound to the view with `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
        this.setElement($el, false);
      } else {
        this.setElement(_.result(this, 'el'), false);
      }
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // If we're sending a `PATCH` request, and we're in an old Internet Explorer
    // that still has ActiveX enabled by default, override jQuery to use that
    // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
    if (params.type === 'PATCH' && noXhrPatch) {
      params.xhr = function() {
        return new ActiveXObject("Microsoft.XMLHTTP");
      };
    }

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  var noXhrPatch =
    typeof window !== 'undefined' && !!window.ActiveXObject &&
      !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        router.execute(callback, args);
        router.trigger.apply(router, ['route:' + name].concat(args));
        router.trigger('route', name, args);
        Backbone.history.trigger('route', router, name, args);
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional) {
                     return optional ? match : '([^/?]+)';
                   })
                   .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Cached regex for removing a trailing slash.
  var trailingSlash = /\/$/;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root;
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = decodeURI(this.location.pathname + this.location.search);
          var root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error("Backbone.history has already been started");
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      if (oldIE && this._wantsHashChange) {
        var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
        this.iframe = frame.hide().appendTo('body')[0].contentWindow;
        this.navigate(fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        Backbone.$(window).on('popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        Backbone.$(window).on('hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      var loc = this.location;

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          this.fragment = this.getFragment(null, true);
          this.location.replace(this.root + '#' + this.fragment);
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot() && loc.hash) {
          this.fragment = this.getHash().replace(routeStripper, '');
          this.history.replaceState({}, document.title, this.root + this.fragment);
        }

      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();
      if (current === this.fragment && this.iframe) {
        current = this.getFragment(this.getHash(this.iframe));
      }
      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      fragment = this.fragment = this.getFragment(fragment);
      return _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      var url = this.root + (fragment = this.getFragment(fragment || ''));

      // Strip the hash for matching.
      fragment = fragment.replace(pathStripper, '');

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // Don't include a trailing slash on the root.
      if (fragment === '' && url !== '/') url = url.slice(0, -1);

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error(model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;

}));

require(['jquery'], function($) {

	Utils = {};

	Utils.MediaQuery = {
		SCREEN_WIDTH_SMALL: 568,
		SCREEN_WIDTH_MEDIUM: 720,
		SCREEN_WIDTH_LARGE: 1010,
		SCREEN_WIDTH_XLARGE: 1400  // in px
	};

	$(function(){
		Utils.$window = $(window);
		Utils.$html = $('html');
		Utils.$body = Utils.$html.find('body');

		Utils.MediaQuery.getViewportWidth = function() {
			return Math.max(document.documentElement.clientWidth,
				window.innerWidth || 0);
		};

		Utils.MediaQuery.isMobile = function() {
			return (Utils.MediaQuery.getViewportWidth() < Utils.MediaQuery.SCREEN_WIDTH_MEDIUM);
		};

		Utils.MediaQuery.isDesktop = function() {
			return (Utils.MediaQuery.getViewportWidth() >= Utils.MediaQuery.SCREEN_WIDTH_LARGE);
		};

		Utils.MediaQuery.isTouchScreen = function() {
			return Utils.$html.hasClass('touch');
		};

		Utils.MediaQuery.isIE8 = function() {
			return Utils.$html.hasClass('ie8');
		};

		Utils.MediaQuery.isIE9 = function() {
			return Utils.$html.hasClass('ie9');
		};

		// detect IEs less than version 10
		Utils.MediaQuery.isOldIEs = function() {
			return (Utils.MediaQuery.isIE9() || Utils.MediaQuery.isIE8());
		};

		Utils.MediaQuery.isIE = function(){
			return Utils.$html.hasClass('ie');
		};

		Utils.MediaQuery.isIOS8Up = function(){
			var deviceAgent = navigator.userAgent.toLowerCase();
			return /(iphone|ipod|ipad).* os (8|9|10|11)_/.test(deviceAgent);
		};

		Utils.MediaQuery.isFirefox = function() {
			return Utils.$html.hasClass('firefox');
		};

		Utils.MediaQuery.isApp = function(){
			return Utils.$html.hasClass('app');
		};

		Utils.isAdminView = function() {
			return Utils.$body.hasClass('admin');
		};

		Utils.hasPageClass = function(pageClass) {
			return Utils.$body.hasClass(pageClass);
		};

		Utils.isUserLoggedin = function() {
			return Utils.$body.hasClass('logged-in');
		};

		Utils.trackerBlocked = function(){
			return !(window.ga && ga.create);
		};

		Utils.windowScrollBottom = function(){
			return Utils.$window.scrollTop() + Utils.$window.height();
		};

		Utils.reloadWindow = function(){
			window.location.reload(true);
		};

		Utils.scrollBodyTo = function(posTop, duration, complete) {
			var headerFixed = Utils.$body.find('#header').css('position') === "fixed";

			duration = duration ? duration : 600;
			if(headerFixed){
				posTop = posTop - Utils.$body.find('#header .site-header').height() - 50;
			}
			$('body, html').animate({
				'scrollTop': posTop - 50
			}, duration, complete);
		};

		Utils.getReferrerPathname = function(){
			var a=document.createElement('a');
			a.href=document.referrer;
			var pathname = '';
			if(typeof(document.referrer) && 'undefined' && document.referrer != null && document.referrer != '') {
				pathname = a.pathname;
			}
			a='';
			return pathname;
		};
	});

});
define("_utils", function(){});

require([
  'jquery',
  'underscore',
  'backbone'
], function($) {
	// create a global event dispatcher
	MP = {};
	MP.Components = {};
	MP.dispatcher = _.clone(Backbone.Events);

	// helper function for array
	Array.prototype.removeAll = function(values){
		_.each(values, function(v){
			var index = _.indexOf(this, v);
			this.splice(index, 1);
		}, this);
	};

	// helper function for String
	String.prototype.capitalize = function() {
		return this.charAt(0).toUpperCase() + this.slice(1);
	};

	String.prototype.startsWith = function(value) {
		return this.indexOf(value) == 0;
	};

	String.prototype.isFullWidthKatakana = function(){
		return this.match(/^[\u30A0-\u30FF]+$/);
	};
});

define("_global", function(){});

/*! Picturefill - v2.3.1 - 2015-04-09
* http://scottjehl.github.io/picturefill
* Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */

window.matchMedia || (window.matchMedia = function() {
	

	// For browsers that support matchMedium api such as IE 9 and webkit
	var styleMedia = (window.styleMedia || window.media);

	// For those that don't support matchMedium
	if (!styleMedia) {
		var style       = document.createElement('style'),
			script      = document.getElementsByTagName('script')[0],
			info        = null;

		style.type  = 'text/css';
		style.id    = 'matchmediajs-test';

		script.parentNode.insertBefore(style, script);

		// 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
		info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;

		styleMedia = {
			matchMedium: function(media) {
				var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

				// 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
				if (style.styleSheet) {
					style.styleSheet.cssText = text;
				} else {
					style.textContent = text;
				}

				// Test if media query is true or false
				return info.width === '1px';
			}
		};
	}

	return function(media) {
		return {
			matches: styleMedia.matchMedium(media || 'all'),
			media: media || 'all'
		};
	};
}());
/*! Picturefill - Responsive Images that work today.
*  Author: Scott Jehl, Filament Group, 2012 ( new proposal implemented by Shawn Jansepar )
*  License: MIT/GPLv2
*  Spec: http://picture.responsiveimages.org/
*/
(function( w, doc, image ) {
	// Enable strict mode
	

	function expose(picturefill) {
		/* expose picturefill */
		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// CommonJS, just export
			module.exports = picturefill;
		} else if ( typeof define === "function" && define.amd ) {
			// AMD support
			define( "picturefill", [],function() { return picturefill; } );
		}
		if ( typeof w === "object" ) {
			// If no AMD and we are in the browser, attach to window
			w.picturefill = picturefill;
		}
	}

	// If picture is supported, well, that's awesome. Let's get outta here...
	if ( w.HTMLPictureElement ) {
		expose(function() { });
		return;
	}

	// HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)
	doc.createElement( "picture" );

	// local object for method references and testing exposure
	var pf = w.picturefill || {};

	var regWDesc = /\s+\+?\d+(e\d+)?w/;

	// namespace
	pf.ns = "picturefill";

	// srcset support test
	(function() {
		pf.srcsetSupported = "srcset" in image;
		pf.sizesSupported = "sizes" in image;
		pf.curSrcSupported = "currentSrc" in image;
	})();

	// just a string trim workaround
	pf.trim = function( str ) {
		return str.trim ? str.trim() : str.replace( /^\s+|\s+$/g, "" );
	};

	/**
	 * Gets a string and returns the absolute URL
	 * @param src
	 * @returns {String} absolute URL
	 */
	pf.makeUrl = (function() {
		var anchor = doc.createElement( "a" );
		return function(src) {
			anchor.href = src;
			return anchor.href;
		};
	})();

	/**
	 * Shortcut method for https://w3c.github.io/webappsec/specs/mixedcontent/#restricts-mixed-content ( for easy overriding in tests )
	 */
	pf.restrictsMixedContent = function() {
		return w.location.protocol === "https:";
	};
	/**
	 * Shortcut method for matchMedia ( for easy overriding in tests )
	 */

	pf.matchesMedia = function( media ) {
		return w.matchMedia && w.matchMedia( media ).matches;
	};

	// Shortcut method for `devicePixelRatio` ( for easy overriding in tests )
	pf.getDpr = function() {
		return ( w.devicePixelRatio || 1 );
	};

	/**
	 * Get width in css pixel value from a "length" value
	 * http://dev.w3.org/csswg/css-values-3/#length-value
	 */
	pf.getWidthFromLength = function( length ) {
		var cssValue;
		// If a length is specified and doesn’t contain a percentage, and it is greater than 0 or using `calc`, use it. Else, abort.
        if ( !(length && length.indexOf( "%" ) > -1 === false && ( parseFloat( length ) > 0 || length.indexOf( "calc(" ) > -1 )) ) {
            return false;
        }

		/**
		 * If length is specified in  `vw` units, use `%` instead since the div we’re measuring
		 * is injected at the top of the document.
		 *
		 * TODO: maybe we should put this behind a feature test for `vw`? The risk of doing this is possible browser inconsistancies with vw vs %
		 */
		length = length.replace( "vw", "%" );

		// Create a cached element for getting length value widths
		if ( !pf.lengthEl ) {
			pf.lengthEl = doc.createElement( "div" );

			// Positioning styles help prevent padding/margin/width on `html` or `body` from throwing calculations off.
			pf.lengthEl.style.cssText = "border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden";

			// Add a class, so that everyone knows where this element comes from
			pf.lengthEl.className = "helper-from-picturefill-js";
		}

		pf.lengthEl.style.width = "0px";

        try {
		    pf.lengthEl.style.width = length;
        } catch ( e ) {}

		doc.body.appendChild(pf.lengthEl);

		cssValue = pf.lengthEl.offsetWidth;

		if ( cssValue <= 0 ) {
			cssValue = false;
		}

		doc.body.removeChild( pf.lengthEl );

		return cssValue;
	};

    pf.detectTypeSupport = function( type, typeUri ) {
        // based on Modernizr's lossless img-webp test
        // note: asynchronous
        var image = new w.Image();
        image.onerror = function() {
            pf.types[ type ] = false;
            picturefill();
        };
        image.onload = function() {
            pf.types[ type ] = image.width === 1;
            picturefill();
        };
        image.src = typeUri;

        return "pending";
    };
	// container of supported mime types that one might need to qualify before using
	pf.types = pf.types || {};

	pf.initTypeDetects = function() {
        // Add support for standard mime types
        pf.types[ "image/jpeg" ] = true;
        pf.types[ "image/gif" ] = true;
        pf.types[ "image/png" ] = true;
        pf.types[ "image/svg+xml" ] = doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
        pf.types[ "image/webp" ] = pf.detectTypeSupport("image/webp", "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=");
    };

	pf.verifyTypeSupport = function( source ) {
		var type = source.getAttribute( "type" );
		// if type attribute exists, return test result, otherwise return true
		if ( type === null || type === "" ) {
			return true;
		} else {
				var pfType = pf.types[ type ];
			// if the type test is a function, run it and return "pending" status. The function will rerun picturefill on pending elements once finished.
			if ( typeof pfType === "string" && pfType !== "pending") {
				pf.types[ type ] = pf.detectTypeSupport( type, pfType );
				return "pending";
			} else if ( typeof pfType === "function" ) {
				pfType();
				return "pending";
			} else {
				return pfType;
			}
		}
	};

	// Parses an individual `size` and returns the length, and optional media query
	pf.parseSize = function( sourceSizeStr ) {
		var match = /(\([^)]+\))?\s*(.+)/g.exec( sourceSizeStr );
		return {
			media: match && match[1],
			length: match && match[2]
		};
	};

	// Takes a string of sizes and returns the width in pixels as a number
	pf.findWidthFromSourceSize = function( sourceSizeListStr ) {
		// Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%
		//                            or (min-width:30em) calc(30% - 15px)
		var sourceSizeList = pf.trim( sourceSizeListStr ).split( /\s*,\s*/ ),
			winningLength;

		for ( var i = 0, len = sourceSizeList.length; i < len; i++ ) {
			// Match <media-condition>? length, ie ( min-width: 50em ) 100%
			var sourceSize = sourceSizeList[ i ],
				// Split "( min-width: 50em ) 100%" into separate strings
				parsedSize = pf.parseSize( sourceSize ),
				length = parsedSize.length,
				media = parsedSize.media;

			if ( !length ) {
				continue;
			}
			// if there is no media query or it matches, choose this as our winning length
			if ( (!media || pf.matchesMedia( media )) &&
				// pass the length to a method that can properly determine length
				// in pixels based on these formats: http://dev.w3.org/csswg/css-values-3/#length-value
				(winningLength = pf.getWidthFromLength( length )) ) {
				break;
			}
		}

		//if we have no winningLength fallback to 100vw
		return winningLength || Math.max(w.innerWidth || 0, doc.documentElement.clientWidth);
	};

	pf.parseSrcset = function( srcset ) {
		/**
		 * A lot of this was pulled from Boris Smus’ parser for the now-defunct WHATWG `srcset`
		 * https://github.com/borismus/srcset-polyfill/blob/master/js/srcset-info.js
		 *
		 * 1. Let input (`srcset`) be the value passed to this algorithm.
		 * 2. Let position be a pointer into input, initially pointing at the start of the string.
		 * 3. Let raw candidates be an initially empty ordered list of URLs with associated
		 *    unparsed descriptors. The order of entries in the list is the order in which entries
		 *    are added to the list.
		 */
		var candidates = [];

		while ( srcset !== "" ) {
			srcset = srcset.replace( /^\s+/g, "" );

			// 5. Collect a sequence of characters that are not space characters, and let that be url.
			var pos = srcset.search(/\s/g),
				url, descriptor = null;

			if ( pos !== -1 ) {
				url = srcset.slice( 0, pos );

				var last = url.slice(-1);

				// 6. If url ends with a U+002C COMMA character (,), remove that character from url
				// and let descriptors be the empty string. Otherwise, follow these substeps
				// 6.1. If url is empty, then jump to the step labeled descriptor parser.

				if ( last === "," || url === "" ) {
					url = url.replace( /,+$/, "" );
					descriptor = "";
				}
				srcset = srcset.slice( pos + 1 );

				// 6.2. Collect a sequence of characters that are not U+002C COMMA characters (,), and
				// let that be descriptors.
				if ( descriptor === null ) {
					var descpos = srcset.indexOf( "," );
					if ( descpos !== -1 ) {
						descriptor = srcset.slice( 0, descpos );
						srcset = srcset.slice( descpos + 1 );
					} else {
						descriptor = srcset;
						srcset = "";
					}
				}
			} else {
				url = srcset;
				srcset = "";
			}

			// 7. Add url to raw candidates, associated with descriptors.
			if ( url || descriptor ) {
				candidates.push({
					url: url,
					descriptor: descriptor
				});
			}
		}
		return candidates;
	};

	pf.parseDescriptor = function( descriptor, sizesattr ) {
		// 11. Descriptor parser: Let candidates be an initially empty source set. The order of entries in the list
		// is the order in which entries are added to the list.
		var sizes = sizesattr || "100vw",
			sizeDescriptor = descriptor && descriptor.replace( /(^\s+|\s+$)/g, "" ),
			widthInCssPixels = pf.findWidthFromSourceSize( sizes ),
			resCandidate;

			if ( sizeDescriptor ) {
				var splitDescriptor = sizeDescriptor.split(" ");

				for (var i = splitDescriptor.length - 1; i >= 0; i--) {
					var curr = splitDescriptor[ i ],
						lastchar = curr && curr.slice( curr.length - 1 );

					if ( ( lastchar === "h" || lastchar === "w" ) && !pf.sizesSupported ) {
						resCandidate = parseFloat( ( parseInt( curr, 10 ) / widthInCssPixels ) );
					} else if ( lastchar === "x" ) {
						var res = curr && parseFloat( curr, 10 );
						resCandidate = res && !isNaN( res ) ? res : 1;
					}
				}
			}
		return resCandidate || 1;
	};

	/**
	 * Takes a srcset in the form of url/
	 * ex. "images/pic-medium.png 1x, images/pic-medium-2x.png 2x" or
	 *     "images/pic-medium.png 400w, images/pic-medium-2x.png 800w" or
	 *     "images/pic-small.png"
	 * Get an array of image candidates in the form of
	 *      {url: "/foo/bar.png", resolution: 1}
	 * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value
	 * If sizes is specified, resolution is calculated
	 */
	pf.getCandidatesFromSourceSet = function( srcset, sizes ) {
		var candidates = pf.parseSrcset( srcset ),
			formattedCandidates = [];

		for ( var i = 0, len = candidates.length; i < len; i++ ) {
			var candidate = candidates[ i ];

			formattedCandidates.push({
				url: candidate.url,
				resolution: pf.parseDescriptor( candidate.descriptor, sizes )
			});
		}
		return formattedCandidates;
	};

	/**
	 * if it's an img element and it has a srcset property,
	 * we need to remove the attribute so we can manipulate src
	 * (the property's existence infers native srcset support, and a srcset-supporting browser will prioritize srcset's value over our winning picture candidate)
	 * this moves srcset's value to memory for later use and removes the attr
	 */
	pf.dodgeSrcset = function( img ) {
		if ( img.srcset ) {
			img[ pf.ns ].srcset = img.srcset;
			img.srcset = "";
			img.setAttribute( "data-pfsrcset", img[ pf.ns ].srcset );
		}
	};

	// Accept a source or img element and process its srcset and sizes attrs
	pf.processSourceSet = function( el ) {
		var srcset = el.getAttribute( "srcset" ),
			sizes = el.getAttribute( "sizes" ),
			candidates = [];

		// if it's an img element, use the cached srcset property (defined or not)
		if ( el.nodeName.toUpperCase() === "IMG" && el[ pf.ns ] && el[ pf.ns ].srcset ) {
			srcset = el[ pf.ns ].srcset;
		}

		if ( srcset ) {
			candidates = pf.getCandidatesFromSourceSet( srcset, sizes );
		}
		return candidates;
	};

	pf.backfaceVisibilityFix = function( picImg ) {
		// See: https://github.com/scottjehl/picturefill/issues/332
		var style = picImg.style || {},
			WebkitBackfaceVisibility = "webkitBackfaceVisibility" in style,
			currentZoom = style.zoom;

		if (WebkitBackfaceVisibility) {
			style.zoom = ".999";

			WebkitBackfaceVisibility = picImg.offsetWidth;

			style.zoom = currentZoom;
		}
	};

	pf.setIntrinsicSize = (function() {
		var urlCache = {};
		var setSize = function( picImg, width, res ) {
            if ( width ) {
			    picImg.setAttribute( "width", parseInt(width / res, 10) );
            }
		};
		return function( picImg, bestCandidate ) {
			var img;
			if ( !picImg[ pf.ns ] || w.pfStopIntrinsicSize ) {
				return;
			}
			if ( picImg[ pf.ns ].dims === undefined ) {
				picImg[ pf.ns].dims = picImg.getAttribute("width") || picImg.getAttribute("height");
			}
			if ( picImg[ pf.ns].dims ) { return; }

			if ( bestCandidate.url in urlCache ) {
				setSize( picImg, urlCache[bestCandidate.url], bestCandidate.resolution );
			} else {
				img = doc.createElement( "img" );
				img.onload = function() {
					urlCache[bestCandidate.url] = img.width;

                    //IE 10/11 don't calculate width for svg outside document
                    if ( !urlCache[bestCandidate.url] ) {
                        try {
                            doc.body.appendChild( img );
                            urlCache[bestCandidate.url] = img.width || img.offsetWidth;
                            doc.body.removeChild( img );
                        } catch(e){}
                    }

					if ( picImg.src === bestCandidate.url ) {
						setSize( picImg, urlCache[bestCandidate.url], bestCandidate.resolution );
					}
					picImg = null;
					img.onload = null;
					img = null;
				};
				img.src = bestCandidate.url;
			}
		};
	})();

	pf.applyBestCandidate = function( candidates, picImg ) {
		var candidate,
			length,
			bestCandidate;

		candidates.sort( pf.ascendingSort );

		length = candidates.length;
		bestCandidate = candidates[ length - 1 ];

		for ( var i = 0; i < length; i++ ) {
			candidate = candidates[ i ];
			if ( candidate.resolution >= pf.getDpr() ) {
				bestCandidate = candidate;
				break;
			}
		}

		if ( bestCandidate ) {

			bestCandidate.url = pf.makeUrl( bestCandidate.url );

			if ( picImg.src !== bestCandidate.url ) {
				if ( pf.restrictsMixedContent() && bestCandidate.url.substr(0, "http:".length).toLowerCase() === "http:" ) {
					if ( window.console !== undefined ) {
						console.warn( "Blocked mixed content image " + bestCandidate.url );
					}
				} else {
					picImg.src = bestCandidate.url;
					// currentSrc attribute and property to match
					// http://picture.responsiveimages.org/#the-img-element
					if ( !pf.curSrcSupported ) {
						picImg.currentSrc = picImg.src;
					}

					pf.backfaceVisibilityFix( picImg );
				}
			}

			pf.setIntrinsicSize(picImg, bestCandidate);
		}
	};

	pf.ascendingSort = function( a, b ) {
		return a.resolution - b.resolution;
	};

	/**
	 * In IE9, <source> elements get removed if they aren't children of
	 * video elements. Thus, we conditionally wrap source elements
	 * using <!--[if IE 9]><video style="display: none;"><![endif]-->
	 * and must account for that here by moving those source elements
	 * back into the picture element.
	 */
	pf.removeVideoShim = function( picture ) {
		var videos = picture.getElementsByTagName( "video" );
		if ( videos.length ) {
			var video = videos[ 0 ],
				vsources = video.getElementsByTagName( "source" );
			while ( vsources.length ) {
				picture.insertBefore( vsources[ 0 ], video );
			}
			// Remove the video element once we're finished removing its children
			video.parentNode.removeChild( video );
		}
	};

	/**
	 * Find all `img` elements, and add them to the candidate list if they have
	 * a `picture` parent, a `sizes` attribute in basic `srcset` supporting browsers,
	 * a `srcset` attribute at all, and they haven’t been evaluated already.
	 */
	pf.getAllElements = function() {
		var elems = [],
			imgs = doc.getElementsByTagName( "img" );

		for ( var h = 0, len = imgs.length; h < len; h++ ) {
			var currImg = imgs[ h ];

			if ( currImg.parentNode.nodeName.toUpperCase() === "PICTURE" ||
			( currImg.getAttribute( "srcset" ) !== null ) || currImg[ pf.ns ] && currImg[ pf.ns ].srcset !== null ) {
				elems.push( currImg );
			}
		}
		return elems;
	};

	pf.getMatch = function( img, picture ) {
		var sources = picture.childNodes,
			match;

		// Go through each child, and if they have media queries, evaluate them
		for ( var j = 0, slen = sources.length; j < slen; j++ ) {
			var source = sources[ j ];

			// ignore non-element nodes
			if ( source.nodeType !== 1 ) {
				continue;
			}

			// Hitting the `img` element that started everything stops the search for `sources`.
			// If no previous `source` matches, the `img` itself is evaluated later.
			if ( source === img ) {
				return match;
			}

			// ignore non-`source` nodes
			if ( source.nodeName.toUpperCase() !== "SOURCE" ) {
				continue;
			}
			// if it's a source element that has the `src` property set, throw a warning in the console
			if ( source.getAttribute( "src" ) !== null && typeof console !== undefined ) {
				console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");
			}

			var media = source.getAttribute( "media" );

			// if source does not have a srcset attribute, skip
			if ( !source.getAttribute( "srcset" ) ) {
				continue;
			}

			// if there's no media specified, OR w.matchMedia is supported
			if ( ( !media || pf.matchesMedia( media ) ) ) {
				var typeSupported = pf.verifyTypeSupport( source );

				if ( typeSupported === true ) {
					match = source;
					break;
				} else if ( typeSupported === "pending" ) {
					return false;
				}
			}
		}

		return match;
	};

	function picturefill( opt ) {
		var elements,
			element,
			parent,
			firstMatch,
			candidates,
			options = opt || {};

		elements = options.elements || pf.getAllElements();

		// Loop through all elements
		for ( var i = 0, plen = elements.length; i < plen; i++ ) {
			element = elements[ i ];
			parent = element.parentNode;
			firstMatch = undefined;
			candidates = undefined;

			// immediately skip non-`img` nodes
			if ( element.nodeName.toUpperCase() !== "IMG" ) {
				continue;
			}

			// expando for caching data on the img
			if ( !element[ pf.ns ] ) {
				element[ pf.ns ] = {};
			}

			// if the element has already been evaluated, skip it unless
			// `options.reevaluate` is set to true ( this, for example,
			// is set to true when running `picturefill` on `resize` ).
			if ( !options.reevaluate && element[ pf.ns ].evaluated ) {
				continue;
			}

			// if `img` is in a `picture` element
			if ( parent && parent.nodeName.toUpperCase() === "PICTURE" ) {

				// IE9 video workaround
				pf.removeVideoShim( parent );

				// return the first match which might undefined
				// returns false if there is a pending source
				// TODO the return type here is brutal, cleanup
				firstMatch = pf.getMatch( element, parent );

				// if any sources are pending in this picture due to async type test(s)
				// remove the evaluated attr and skip for now ( the pending test will
				// rerun picturefill on this element when complete)
				if ( firstMatch === false ) {
					continue;
				}
			} else {
				firstMatch = undefined;
			}

			// Cache and remove `srcset` if present and we’re going to be doing `picture`/`srcset`/`sizes` polyfilling to it.
			if ( ( parent && parent.nodeName.toUpperCase() === "PICTURE" ) ||
			( !pf.sizesSupported && ( element.srcset && regWDesc.test( element.srcset ) ) ) ) {
				pf.dodgeSrcset( element );
			}

			if ( firstMatch ) {
				candidates = pf.processSourceSet( firstMatch );
				pf.applyBestCandidate( candidates, element );
			} else {
				// No sources matched, so we’re down to processing the inner `img` as a source.
				candidates = pf.processSourceSet( element );

				if ( element.srcset === undefined || element[ pf.ns ].srcset ) {
					// Either `srcset` is completely unsupported, or we need to polyfill `sizes` functionality.
					pf.applyBestCandidate( candidates, element );
				} // Else, resolution-only `srcset` is supported natively.
			}

			// set evaluated to true to avoid unnecessary reparsing
			element[ pf.ns ].evaluated = true;
		}
	}

	/**
	 * Sets up picture polyfill by polling the document and running
	 * the polyfill every 250ms until the document is ready.
	 * Also attaches picturefill on resize
	 */
	function runPicturefill() {
		pf.initTypeDetects();
		picturefill();
		var intervalId = setInterval( function() {
			// When the document has finished loading, stop checking for new images
			// https://github.com/ded/domready/blob/master/ready.js#L15
			picturefill();

			if ( /^loaded|^i|^c/.test( doc.readyState ) ) {
				clearInterval( intervalId );
				return;
			}
		}, 250 );

		var resizeTimer;
		var handleResize = function() {
	        picturefill({ reevaluate: true });
	    };
		function checkResize() {
		    clearTimeout(resizeTimer);
		    resizeTimer = setTimeout( handleResize, 60 );
		}

		if ( w.addEventListener ) {
			w.addEventListener( "resize", checkResize, false );
		} else if ( w.attachEvent ) {
			w.attachEvent( "onresize", checkResize );
		}
	}

	runPicturefill();

	/* expose methods for testing */
	picturefill._ = pf;

	expose( picturefill );

} )( window, window.document, new window.Image() );

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.4.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

/* global window, document, define, jQuery, setInterval, clearInterval */

(function(factory) {
    
    if (typeof define === 'function' && define.amd) {
        define('slick',['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this,
                dataSettings, responsiveSettings, breakpoint;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return '<button type="button" data-role="none">' + (i + 1) + '</button>';
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rtl: false,
                slide: '',
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                variableWidth: false,
                vertical: false,
                waitForAnimate: true
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.hidden = "hidden";
            _.paused = false;
            _.positionProp = null;
            _.respondTo = null;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = "visibilitychange";
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, dataSettings, settings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;
            responsiveSettings = _.options.responsive || null;

            if (responsiveSettings && responsiveSettings.length > -1) {
                _.respondTo = _.options.respondTo || "window";
                for (breakpoint in responsiveSettings) {
                    if (responsiveSettings.hasOwnProperty(breakpoint)) {
                        _.breakpoints.push(responsiveSettings[
                            breakpoint].breakpoint);
                        _.breakpointSettings[responsiveSettings[
                            breakpoint].breakpoint] =
                            responsiveSettings[breakpoint].settings;
                    }
                }
                _.breakpoints.sort(function(a, b) {
                    if(_.options.mobileFirst === true) {
                        return a - b;
                    } else {
                        return b - a;
                    }
                });
            }

            if (typeof document.mozHidden !== "undefined") {
                _.hidden = "mozHidden";
                _.visibilityChange = "mozvisibilitychange";
            } else if (typeof document.msHidden !== "undefined") {
                _.hidden = "msHidden";
                _.visibilityChange = "msvisibilitychange";
            } else if (typeof document.webkitHidden !== "undefined") {
                _.hidden = "webkitHidden";
                _.visibilityChange = "webkitvisibilitychange";
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

            _.init();

            _.checkResponsive(true);

        }

        return Slick;

    }());

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr("data-slick-index",index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function(){
        var _ = this;
        if(_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({height: targetHeight},_.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {}, _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.asNavFor = function(index) {
        var _ = this, asNavFor = _.options.asNavFor !== null ? $(_.options.asNavFor).slick('getSlick') : null;
        if(asNavFor !== null) asNavFor.slideHandler(index, true);
    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

        if (_.slideCount > _.options.slidesToShow && _.paused !== true) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator,
                _.options.autoplaySpeed);
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;
        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this;

        if (_.options.infinite === false) {

            if (_.direction === 1) {

                if ((_.currentSlide + 1) === _.slideCount -
                    1) {
                    _.direction = 0;
                }

                _.slideHandler(_.currentSlide + _.options.slidesToScroll);

            } else {

                if ((_.currentSlide - 1 === 0)) {

                    _.direction = 1;

                }

                _.slideHandler(_.currentSlide - _.options.slidesToScroll);

            }

        } else {

            _.slideHandler(_.currentSlide + _.options.slidesToScroll);

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow = $(_.options.prevArrow);
            _.$nextArrow = $(_.options.nextArrow);

            if (_.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.appendTo(_.options.appendArrows);
            }

            if (_.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.appendTo(_.options.appendArrows);
            }

            if (_.options.infinite !== true) {
                _.$prevArrow.addClass('slick-disabled');
            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dotString;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            dotString = '<ul class="' + _.options.dotsClass + '">';

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dotString += '<li>' + _.options.customPaging.call(this, _, i) + '</li>';
            }

            dotString += '</ul>';

            _.$dots = $(dotString).appendTo(
                _.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr("aria-hidden","false");

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides = _.$slider.children(_.options.slide +
            ':not(.slick-cloned)').addClass(
            'slick-slide');
        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element).attr("data-slick-index",index);
        });

        _.$slidesCache = _.$slides;

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();

        if (_.options.accessibility === true) {
            _.$list.prop('tabIndex', 0);
        }

        _.setSlideClasses(typeof this.currentSlide === 'number' ? this.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.checkResponsive = function(initial) {
        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();
        if (_.respondTo === "window") {
          respondToWidth = windowWidth;
        } else if (_.respondTo === "slider") {
          respondToWidth = sliderWidth;
        } else if (_.respondTo === "min") {
          respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if (_.originalSettings.responsive && _.originalSettings
            .responsive.length > -1 && _.originalSettings.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if(_.breakpointSettings[targetBreakpoint] === "unslick") {
                            _.unslick();
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if(initial === true)
                                _.currentSlide = _.options.initialSlide;
                            _.refresh();
                        }
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if(_.breakpointSettings[targetBreakpoint] === "unslick") {
                        _.unslick();
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if(initial === true)
                            _.currentSlide = _.options.initialSlide;
                        _.refresh();
                    }
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if(initial === true)
                        _.currentSlide = _.options.initialSlide;
                    _.refresh();
                }
            }

        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {
        var _ = this,
            $target = $(event.target),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        $target.is('a') && event.preventDefault();

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide  - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $(event.target).parent().index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                break;

            default:
                return;
        }
        _.$slider.trigger("slideChanged", [ _.currentSlide]);

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this, navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if(index > navigables[navigables.length -1]){
            index = navigables[navigables.length -1];
        } else {
            for(var n in navigables) {
                if(index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if(_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function() {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        $('.slick-cloned', _.$slider).remove();
        if (_.$dots) {
            _.$dots.remove();
        }
        if (_.$prevArrow && (typeof _.options.prevArrow !== 'object')) {
            _.$prevArrow.remove();
        }
        if (_.$nextArrow && (typeof _.options.nextArrow !== 'object')) {
            _.$nextArrow.remove();
        }

        (_.$slides || _.$slider.find('.slick-slide')).removeClass('slick-slide slick-active slick-center slick-visible')
            .attr("aria-hidden","true")
            .removeAttr('data-slick-index')
            .css({
                position: '',
                left: '',
                top: '',
                zIndex: '',
                opacity: '',
                width: ''
            });

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');

        (_.$list || _.$slider.find('.slick-list')).off('.slick');
        $(window).off('.slick-' + _.instanceUid);
        $(document).off('.slick-' + _.instanceUid);

        _.$slider.html(_.$slides);

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = "";

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: 1000
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: 1000
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if(_.options.infinite === true) {
            pagerQty = Math.ceil(_.slideCount / _.options.slidesToScroll);
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else {
            while (breakPoint < _.slideCount){
                ++pagerQty;
                breakPoint = counter + _.options.slidesToShow;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll  : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight();

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if(slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if(slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow){
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;

            if (_.options.centerMode === true) {
                if(_.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this, breakPoint = 0, counter = 0, indexes = [], max;

        if(_.options.infinite === false) {
            max = _.slideCount - _.options.slidesToShow + 1;
            if (_.options.centerMode === true) max = _.slideCount;
        } else {
            breakPoint = _.slideCount * -1;
            counter = _.slideCount * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max){
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll  : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this, slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if(_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide){
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function() {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
        }

        _.$slider.trigger("init", [ _ ]);

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.on('click.slick', {
                message: 'previous'
            }, _.changeSlide);
            _.$nextArrow.on('click.slick', {
                message: 'next'
            }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.options.autoplay === true) {
            $('li', _.$dots)
                .on('mouseenter.slick', function(){
                    _.paused = true;
                    _.autoPlayClear();
                })
                .on('mouseleave.slick', function(){
                    _.paused = false;
                    _.autoPlay();
                });
        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        if (_.options.autoplay === true) {

            $(document).on(_.visibilityChange, function(){
                _.visibility();
            });

            if( _.options.pauseOnHover === true ) {

                _.$list.on('mouseenter.slick', function(){
                    _.paused = true;
                    _.autoPlayClear();
                });
                _.$list.on('mouseleave.slick', function(){
                    _.paused = false;
                    _.autoPlay();
                });

            }

        }

        if(_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if(_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, function() {
            _.checkResponsive();
            _.setPosition();
        });

        $(window).on('resize.slick.slick-' + _.instanceUid, function() {
            if ($(window).width() !== _.windowWidth) {
                clearTimeout(_.windowDelay);
                _.windowDelay = window.setTimeout(function() {
                    _.windowWidth = $(window).width();
                    _.checkResponsive();
                    _.setPosition();
                }, 50);
            }
        });

        $('*[draggable!=true]', _.$slideTrack).on('dragstart', function(e){ e.preventDefault(); });

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

        if (_.options.autoplay === true) {

            _.autoPlay();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;

        if (event.keyCode === 37 && _.options.accessibility === true) {
            _.changeSlide({
                data: {
                    message: 'previous'
                }
            });
        } else if (event.keyCode === 39 && _.options.accessibility === true) {
            _.changeSlide({
                data: {
                    message: 'next'
                }
            });
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {
            $('img[data-lazy]', imagesScope).each(function() {
                var $image = $(this);
                var $parent = $image.parent(), isPicture = $parent.is('picture');

                // load the proper source for picture tag
                if(isPicture){
                    // parse the data-srcset and set the correct srcset
                    var $sources = $parent.find('source');
                    $sources.each(function(index, source){
                        $source = $(source);
                        dataSrcset = $source.attr('data-srcset');
                        if(dataSrcset){
                            $source.attr('srcset', dataSrcset);
                        }
                    });
                    picturefill({
                      reevaluate: true,
                      elements: [ this ]
                    });
                    if(typeof(this.srcset) === 'undefined'){
                        $image.attr('srcset', $image.attr('data-srcset'));
                    }
                }
                // if picture tag is not supported natively, but srcset for image tag is supported.  Don't load src attribute
                // image element should be loaded as usual
                // This also includes dirty patch for firefox and android. 10/26/2015
                if(isPicture && (!window.HTMLPictureElement || (Utils && Utils.MediaQuery.isFirefox() ))
                        && !($image.attr('src').startsWith('data:image/gif;base64')) ) {
                    var imageSource = $(this).attr('data-lazy');
                    $image
                      .load(function() { $image.animate({ opacity: 1 }, 200); })
                      .removeAttr('data-lazy')
                      .removeClass('slick-loading');
                }
                else{
                    var imageSource = $(this).attr('data-lazy');
                    $image
                      .load(function() { $image.animate({ opacity: 1 }, 200); })
                      .attr('src', imageSource)
                      .removeAttr('data-lazy')
                      .removeClass('slick-loading');
                }

                $image.trigger('imageLoaded');
            });
        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow/2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow/2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow/2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = rangeStart + _.options.slidesToShow;
            if (_.options.fade === true ) {
                if(rangeStart > 0) rangeStart--;
                if(rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

          if (_.slideCount <= _.options.slidesToShow){
              cloneRange = _.$slider.find('.slick-slide');
              loadImages(cloneRange);
          }else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.paused = false;
        _.autoPlay();

    };

    Slick.prototype.postSlide = function(index) {
        var _ = this;

        _.$slider.trigger("afterChange", [ _, index]);

        _.animating = false;

        _.setPosition();

        _.swipeLeft = null;

        if (_.options.autoplay === true && _.paused === false) {
            _.autoPlay();
        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.progressiveLazyLoad = function() {

        var _ = this,
            imgCount, targetImage;

        imgCount = $('img[data-lazy]', _.$slider).length;

        if (imgCount > 0) {
            targetImage = $('img[data-lazy]', _.$slider).first();
            targetImage.attr('src', targetImage.attr('data-lazy')).removeClass('slick-loading').load(function() {
                targetImage.removeAttr('data-lazy');
                _.progressiveLazyLoad();

                if( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }
            })
         .error(function () {
          targetImage.removeAttr('data-lazy');
          _.progressiveLazyLoad();
         });
        }

    };

    Slick.prototype.refresh = function() {

        var _ = this,
            currentSlide = _.currentSlide;

        _.destroy();

        $.extend(_, _.initials);

        _.init();

        _.changeSlide({
            data: {
                message: 'index',
                index: currentSlide
            }
        }, true);

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides = _.$slideTrack.children(_.options.slide).addClass(
            'slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.setProps();

        _.setupInfinite();

        _.buildArrows();

        _.updateArrows();

        _.initArrowEvents();

        _.buildDots();

        _.updateDots();

        _.initDotEvents();

        if(_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(0);

        _.setPosition();

        _.$slider.trigger("reInit", [ _ ]);

    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if(removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {}, x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if(_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            var trackWidth = 0;
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.children('.slick-slide').each(function(){
                trackWidth += _.listWidth;
            });
            _.$slideTrack.width(Math.ceil(trackWidth) + 1);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: 900,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if(_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption = Slick.prototype.slickSetOption = function(option, value, refresh) {

        var _ = this;
        _.options[option] = value;

        if (refresh === true) {
            _.unload();
            _.reinit();
        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger("setPosition", [ _ ]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if(_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = "-o-transform";
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = "-moz-transform";
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = "-webkit-transform";
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = "-ms-transform";
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = "transform";
            _.transitionType = 'transition';
        }
        _.transformsEnabled = (_.animType !== null && _.animType !== false);

    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        _.$slider.find('.slick-slide').removeClass('slick-active').attr("aria-hidden","true").removeClass('slick-center');
        allSlides = _.$slider.find('.slick-slide');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if(_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides.slice(index - centerOffset, index + centerOffset + 1).addClass('slick-active').attr("aria-hidden","false");
                } else {
                    indexOffset = _.options.slidesToShow + index;
                    allSlides.slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2).addClass('slick-active').attr("aria-hidden","false");
                }

                if (index === 0) {
                    allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
                } else if (index === _.slideCount - 1) {
                    allSlides.eq(_.options.slidesToShow).addClass('slick-center');
                }

            }

            _.$slides.eq(index).addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {
                _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr("aria-hidden","false");
            } else if ( allSlides.length <= _.options.slidesToShow ) {
                allSlides.addClass('slick-active').attr("aria-hidden","false");
            } else {
                remainder = _.slideCount%_.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
                if(_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {
                    allSlides.slice(indexOffset-(_.options.slidesToShow-remainder), indexOffset + remainder).addClass('slick-active').attr("aria-hidden","false");
                } else {
                    allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr("aria-hidden","false");
                }
            }

        }
        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                    infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex-_.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex+_.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;
        var index = parseInt($(event.target).parents('.slick-slide').attr("data-slick-index"));
        if(!index) index = 0;

        if(_.slideCount <= _.options.slidesToShow){
            _.$slider.find('.slick-slide').removeClass('slick-active').attr("aria-hidden","true");
            _.$slides.eq(index).addClass('slick-active').attr("aria-hidden","false");
            if(_.options.centerMode === true) {
                _.$slider.find('.slick-slide').removeClass('slick-center');
                _.$slides.eq(index).addClass('slick-center');
            }
            _.asNavFor(index);
            return;
        }
        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index,sync,dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if(_.options.fade === false) {
                targetSlide = _.currentSlide;
                if(dontAnimate!==true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if(_.options.fade === false) {
                targetSlide = _.currentSlide;
                if(dontAnimate!==true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if (_.options.autoplay === true) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger("beforeChange", [ _ , _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if(dontAnimate!==true) {
                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });
            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if(dontAnimate!==true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }

        //return 'vertical';
        if ((swipeAngle > 45) && (swipeAngle < 135)) {
            return 'up';
        }
        if ((swipeAngle > 225) && (swipeAngle < 315)) {
            return 'down';
        }

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this, slideCount;

        _.dragging = false;

        _.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;

        if (_.touchObject.curX === undefined) {
            return false;
        }

        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger("edge", [  _, _.swipeDirection()]);
        }

        if (_.touchObject.swipeLength >= _.touchObject.minHorizontalSwipe ) {

            switch (_.swipeDirection()) {
                case 'left':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
                    _.slideHandler(slideCount);
                    _.currentDirection = 0;
                    _.touchObject = {};
                    _.$slider.trigger("swipe", [ _, "left"]);
                    break;

                case 'right':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
                    _.slideHandler(slideCount);
                    _.currentDirection = 1;
                    _.touchObject = {};
                    _.$slider.trigger("swipe", [ _, "right"]);
                    break;
            }
        }
        if (_.touchObject.swipeLength >= _.touchObject.minVerticalSwipe){

            switch(_.swipeDirection()) {
                case 'up':
                    _.touchObject = {};
                    _.$slider.trigger("swipe", [ _, "up"]);
                    break;

                case 'down':
                    _.touchObject = {};
                    _.$slider.trigger("swipe", [ _, "down"]);
                    break;
            }

        } else {
            if(_.touchObject.startX !== _.touchObject.curX) {
                _.slideHandler(_.currentSlide);
                _.touchObject = {};
            }
        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
           return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
           return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minHorizontalSwipe = _.listWidth / _.options.touchThreshold;
        _.touchObject.minVerticalSwipe = _.listHeight / _.options.touchThreshold;

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'up' || swipeDirection === 'down') {  //'vertical'
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);

        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === "right") || (_.currentSlide >= _.getDotCount() && swipeDirection === "left")) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();
        if (_.$dots) {
            _.$dots.remove();
        }
        if (_.$prevArrow && (typeof _.options.prevArrow !== 'object')) {
            _.$prevArrow.remove();
        }
        if (_.$nextArrow && (typeof _.options.nextArrow !== 'object')) {
            _.$nextArrow.remove();
        }
        _.$slides.removeClass('slick-slide slick-active slick-visible').attr("aria-hidden","true").css('width', '');

    };

    Slick.prototype.unslick = function() {

        var _ = this;
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this, centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if (_.options.arrows === true && _.options.infinite !==
            true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.removeClass('slick-disabled');
            _.$nextArrow.removeClass('slick-disabled');
            if (_.currentSlide === 0) {
                _.$prevArrow.addClass('slick-disabled');
                _.$nextArrow.removeClass('slick-disabled');
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
                _.$nextArrow.addClass('slick-disabled');
                _.$prevArrow.removeClass('slick-disabled');
            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
                _.$nextArrow.addClass('slick-disabled');
                _.$prevArrow.removeClass('slick-disabled');
            }
        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots.find('li').removeClass('slick-active').attr("aria-hidden","true");
            _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active').attr("aria-hidden","false");

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if( document[ _.hidden ] ) {
            _.paused = true;
            _.autoPlayClear();
        } else {
            _.paused = false;
            _.autoPlay();
        }

    };

    $.fn.slick = function() {
        var _ = this, opt = arguments[0], args = Array.prototype.slice.call(arguments,1), l = _.length, i = 0, ret;
        for(i; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick =  new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
                if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

    $(function(){
        $('[data-slick]').slick();
    });

}));

require(['jquery', '_global', 'slick', '_utils'], function($, Slick) {

    // Add the additional behavior for editorial slider
    MP.Components.addCustomerEditorialSliderBehavior = function($slider) {
      $slider.on('beforeChange', function(){
        Utils.$window.trigger('scroll');
      });
      // Enable this behavior only on center mode
      if($slider.slick('slickGetOption', 'centerMode')) {

        // add clicking behavior
        $slider.find('.editorial-slide a').on('click', function(ev){
          if($(this).parent().hasClass('slick-center')) {
            // if it's center banner, allow the redirection
            return true;
          }
          else {
            // if it't not center banner, just slide to the others
            ev.preventDefault();
          }
        });
      }

      // On swipe and click events, stop the movement
      // These fire every time which is not very efficient
      $slider.on('swipe', function(event, slick, direction) {
        $(this).slick('slickPause');
      });

      $slider.find(".slick-prev").on('click', function(event) {
        $(this).parent('.editorial-slider').slick('slickPause');
      });

      $slider.find(".slick-next").on('click', function(event) {
        $(this).parent('.editorial-slider').slick('slickPause');
      });

    };

 });
define("components/editorial-slider", function(){});

require(['jquery', 'underscore', 'backbone', 'components/editorial-slider'], function($, _, Backbone) {
	MP.SaleListPageView = Backbone.View.extend({

		events: {
			"click a[data-sale-code]" : "saleBannerClicked"
		},

		initialize: function() {
			MP.dispatcher.on('loginSuccess', this.gotoSaleLink, this);
			MP.dispatcher.on('signupSuccess', this.gotoSaleLink, this);

			// we do this way to call so that sale impression tracking can be decoupled
			// by just not extending the tracker object
			this.listenTo(this, 'saleBannerClicked', this.trackSaleBannerClick);
		},

		render: function() {
			 // For the Sale Page
			var $editorialSalelistSlider = this.$('.editorial-slider');
			if($editorialSalelistSlider.length > 0) {
				var slideCount = $editorialSalelistSlider.find('.editorial-slide').length;
				if(slideCount <= 1) {
				  $editorialSalelistSlider.addClass('is-single-slide');
				  // don't slick if single page slide
				}
				else {
					$editorialSalelistSlider.slick({
					  arrows: true,
					  autoplay: true,
					  centerMode: (slideCount > 1),
					  centerPadding: '10px',
					  focusOnSelect: true,
					  slidesToShow: (slideCount > 3) ? 3 : 1,
					  variableWidth: true,
					  responsive: [
					  {
					    breakpoint: 600,
					    settings: {
					      autoplay: true,
					      autoplaySpeed: 4000,
					      centerMode: false,
					      centerPadding: '0px',
					      focusOnSelect: false,
					      slidesToShow: 1,
					      variableWidth: false
					    }
					  }]
					});

					MP.Components.addCustomerEditorialSliderBehavior($editorialSalelistSlider);
				}
			}

			// show the modal login as an in-page form
			if(!Utils.$body.hasClass('logged-in')) {
				var $quickLogin = this.$('#quicklogin')
				$quickLogin.removeClass('modal');
				$quickLogin.find('[name=formTrigger]').val('SaleListInPage');
				// When the form is hidden, the modal form becmoes the inpage form again, so reset the form trigger
				$quickLogin.one('hidden', function(){
					$quickLogin.find('[name=formTrigger]').val('SaleListInPage');
				});
			}
			return this;
		},

		showQuickLogin: function(ev) {
			ev.preventDefault();
			this.clickedSaleLink = this.$(ev.target).closest('a').attr('href');
			MP.dispatcher.trigger('quickLoginOpen', 'signup', 'ClosedSale - SaleList');
		},

		gotoSaleLink: function(opts) {
			if(typeof(this.clickedSaleLink) == 'undefined' ){
				this.clickedSaleLink = $(location).attr('href');
			}
			window.location = this.clickedSaleLink + "?token=" + opts.token;
		}
	});
});

define("pages/sale-list", function(){});

/*!

 handlebars v3.0.3

 Copyright (C) 2011-2014 by Yehuda Katz

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 @license
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if(typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if(typeof define === 'function' && define.amd)
    define('handlebars.runtime',factory);
  else if(typeof exports === 'object')
    exports["Handlebars"] = factory();
  else
    root["Handlebars"] = factory();
})(this, function() {
  return /******/ (function(modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {};

    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {

      /******/ 		// Check if module is in cache
      /******/ 		if(installedModules[moduleId])
      /******/ 			return installedModules[moduleId].exports;

      /******/ 		// Create a new module (and put it into the cache)
      /******/ 		var module = installedModules[moduleId] = {
        /******/ 			exports: {},
        /******/ 			id: moduleId,
        /******/ 			loaded: false
        /******/ 		};

      /******/ 		// Execute the module function
      /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

      /******/ 		// Flag the module as loaded
      /******/ 		module.loaded = true;

      /******/ 		// Return the exports of the module
      /******/ 		return module.exports;
      /******/ 	}


    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;

    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;

    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = "";

    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(0);
    /******/ })
    /************************************************************************/
    /******/ ([
    /* 0 */
    /***/ function(module, exports, __webpack_require__) {

      

      var _interopRequireWildcard = __webpack_require__(7)['default'];

      var _interopRequireDefault = __webpack_require__(8)['default'];

      exports.__esModule = true;

      var _import = __webpack_require__(1);

      var base = _interopRequireWildcard(_import);

      // Each of these augment the Handlebars object. No need to setup here.
      // (This is done to easily share code between commonjs and browse envs)

      var _SafeString = __webpack_require__(2);

      var _SafeString2 = _interopRequireDefault(_SafeString);

      var _Exception = __webpack_require__(3);

      var _Exception2 = _interopRequireDefault(_Exception);

      var _import2 = __webpack_require__(4);

      var Utils = _interopRequireWildcard(_import2);

      var _import3 = __webpack_require__(5);

      var runtime = _interopRequireWildcard(_import3);

      var _noConflict = __webpack_require__(6);

      var _noConflict2 = _interopRequireDefault(_noConflict);

      // For compatibility and usage outside of module systems, make the Handlebars object a namespace
      function create() {
        var hb = new base.HandlebarsEnvironment();

        Utils.extend(hb, base);
        hb.SafeString = _SafeString2['default'];
        hb.Exception = _Exception2['default'];
        hb.Utils = Utils;
        hb.escapeExpression = Utils.escapeExpression;

        hb.VM = runtime;
        hb.template = function (spec) {
          return runtime.template(spec, hb);
        };

        return hb;
      }

      var inst = create();
      inst.create = create;

      _noConflict2['default'](inst);

      inst['default'] = inst;

      exports['default'] = inst;
      module.exports = exports['default'];

      /***/ },
    /* 1 */
    /***/ function(module, exports, __webpack_require__) {

      

      var _interopRequireWildcard = __webpack_require__(7)['default'];

      var _interopRequireDefault = __webpack_require__(8)['default'];

      exports.__esModule = true;
      exports.HandlebarsEnvironment = HandlebarsEnvironment;
      exports.createFrame = createFrame;

      var _import = __webpack_require__(4);

      var Utils = _interopRequireWildcard(_import);

      var _Exception = __webpack_require__(3);

      var _Exception2 = _interopRequireDefault(_Exception);

      var VERSION = '3.0.1';
      exports.VERSION = VERSION;
      var COMPILER_REVISION = 6;

      exports.COMPILER_REVISION = COMPILER_REVISION;
      var REVISION_CHANGES = {
        1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
        2: '== 1.0.0-rc.3',
        3: '== 1.0.0-rc.4',
        4: '== 1.x.x',
        5: '== 2.0.0-alpha.x',
        6: '>= 2.0.0-beta.1'
      };

      exports.REVISION_CHANGES = REVISION_CHANGES;
      var isArray = Utils.isArray,
          isFunction = Utils.isFunction,
          toString = Utils.toString,
          objectType = '[object Object]';

      function HandlebarsEnvironment(helpers, partials) {
        this.helpers = helpers || {};
        this.partials = partials || {};

        registerDefaultHelpers(this);
      }

      HandlebarsEnvironment.prototype = {
        constructor: HandlebarsEnvironment,

        logger: logger,
        log: log,

        registerHelper: function registerHelper(name, fn) {
          if (toString.call(name) === objectType) {
            if (fn) {
              throw new _Exception2['default']('Arg not supported with multiple helpers');
            }
            Utils.extend(this.helpers, name);
          } else {
            this.helpers[name] = fn;
          }
        },
        unregisterHelper: function unregisterHelper(name) {
          delete this.helpers[name];
        },

        registerPartial: function registerPartial(name, partial) {
          if (toString.call(name) === objectType) {
            Utils.extend(this.partials, name);
          } else {
            if (typeof partial === 'undefined') {
              throw new _Exception2['default']('Attempting to register a partial as undefined');
            }
            this.partials[name] = partial;
          }
        },
        unregisterPartial: function unregisterPartial(name) {
          delete this.partials[name];
        }
      };

      function registerDefaultHelpers(instance) {
        instance.registerHelper('helperMissing', function () {
          if (arguments.length === 1) {
            // A missing field in a {{foo}} constuct.
            return undefined;
          } else {
            // Someone is actually trying to call something, blow up.
            throw new _Exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
          }
        });

        instance.registerHelper('blockHelperMissing', function (context, options) {
          var inverse = options.inverse,
              fn = options.fn;

          if (context === true) {
            return fn(this);
          } else if (context === false || context == null) {
            return inverse(this);
          } else if (isArray(context)) {
            if (context.length > 0) {
              if (options.ids) {
                options.ids = [options.name];
              }

              return instance.helpers.each(context, options);
            } else {
              return inverse(this);
            }
          } else {
            if (options.data && options.ids) {
              var data = createFrame(options.data);
              data.contextPath = Utils.appendContextPath(options.data.contextPath, options.name);
              options = { data: data };
            }

            return fn(context, options);
          }
        });

        instance.registerHelper('each', function (context, options) {
          if (!options) {
            throw new _Exception2['default']('Must pass iterator to #each');
          }

          var fn = options.fn,
              inverse = options.inverse,
              i = 0,
              ret = '',
              data = undefined,
              contextPath = undefined;

          if (options.data && options.ids) {
            contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
          }

          if (isFunction(context)) {
            context = context.call(this);
          }

          if (options.data) {
            data = createFrame(options.data);
          }

          function execIteration(field, index, last) {
            if (data) {
              data.key = field;
              data.index = index;
              data.first = index === 0;
              data.last = !!last;

              if (contextPath) {
                data.contextPath = contextPath + field;
              }
            }

            ret = ret + fn(context[field], {
                  data: data,
                  blockParams: Utils.blockParams([context[field], field], [contextPath + field, null])
                });
          }

          if (context && typeof context === 'object') {
            if (isArray(context)) {
              for (var j = context.length; i < j; i++) {
                execIteration(i, i, i === context.length - 1);
              }
            } else {
              var priorKey = undefined;

              for (var key in context) {
                if (context.hasOwnProperty(key)) {
                  // We're running the iterations one step out of sync so we can detect
                  // the last iteration without have to scan the object twice and create
                  // an itermediate keys array.
                  if (priorKey) {
                    execIteration(priorKey, i - 1);
                  }
                  priorKey = key;
                  i++;
                }
              }
              if (priorKey) {
                execIteration(priorKey, i - 1, true);
              }
            }
          }

          if (i === 0) {
            ret = inverse(this);
          }

          return ret;
        });

        instance.registerHelper('if', function (conditional, options) {
          if (isFunction(conditional)) {
            conditional = conditional.call(this);
          }

          // Default behavior is to render the positive path if the value is truthy and not empty.
          // The `includeZero` option may be set to treat the condtional as purely not empty based on the
          // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
          if (!options.hash.includeZero && !conditional || Utils.isEmpty(conditional)) {
            return options.inverse(this);
          } else {
            return options.fn(this);
          }
        });

        instance.registerHelper('unless', function (conditional, options) {
          return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
        });

        instance.registerHelper('with', function (context, options) {
          if (isFunction(context)) {
            context = context.call(this);
          }

          var fn = options.fn;

          if (!Utils.isEmpty(context)) {
            if (options.data && options.ids) {
              var data = createFrame(options.data);
              data.contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]);
              options = { data: data };
            }

            return fn(context, options);
          } else {
            return options.inverse(this);
          }
        });

        instance.registerHelper('log', function (message, options) {
          var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
          instance.log(level, message);
        });

        instance.registerHelper('lookup', function (obj, field) {
          return obj && obj[field];
        });
      }

      var logger = {
        methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

        // State enum
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        level: 1,

        // Can be overridden in the host environment
        log: function log(level, message) {
          if (typeof console !== 'undefined' && logger.level <= level) {
            var method = logger.methodMap[level];
            (console[method] || console.log).call(console, message); // eslint-disable-line no-console
          }
        }
      };

      exports.logger = logger;
      var log = logger.log;

      exports.log = log;

      function createFrame(object) {
        var frame = Utils.extend({}, object);
        frame._parent = object;
        return frame;
      }

      /* [args, ]options */

      /***/ },
    /* 2 */
    /***/ function(module, exports, __webpack_require__) {

      

      exports.__esModule = true;
      // Build out our basic SafeString type
      function SafeString(string) {
        this.string = string;
      }

      SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
        return '' + this.string;
      };

      exports['default'] = SafeString;
      module.exports = exports['default'];

      /***/ },
    /* 3 */
    /***/ function(module, exports, __webpack_require__) {

      

      exports.__esModule = true;

      var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

      function Exception(message, node) {
        var loc = node && node.loc,
            line = undefined,
            column = undefined;
        if (loc) {
          line = loc.start.line;
          column = loc.start.column;

          message += ' - ' + line + ':' + column;
        }

        var tmp = Error.prototype.constructor.call(this, message);

        // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
        for (var idx = 0; idx < errorProps.length; idx++) {
          this[errorProps[idx]] = tmp[errorProps[idx]];
        }

        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, Exception);
        }

        if (loc) {
          this.lineNumber = line;
          this.column = column;
        }
      }

      Exception.prototype = new Error();

      exports['default'] = Exception;
      module.exports = exports['default'];

      /***/ },
    /* 4 */
    /***/ function(module, exports, __webpack_require__) {

      

      exports.__esModule = true;
      exports.extend = extend;

      // Older IE versions do not directly support indexOf so we must implement our own, sadly.
      exports.indexOf = indexOf;
      exports.escapeExpression = escapeExpression;
      exports.isEmpty = isEmpty;
      exports.blockParams = blockParams;
      exports.appendContextPath = appendContextPath;
      var escape = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&#x27;',
        '`': '&#x60;'
      };

      var badChars = /[&<>"'`]/g,
          possible = /[&<>"'`]/;

      function escapeChar(chr) {
        return escape[chr];
      }

      function extend(obj /* , ...source */) {
        for (var i = 1; i < arguments.length; i++) {
          for (var key in arguments[i]) {
            if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
              obj[key] = arguments[i][key];
            }
          }
        }

        return obj;
      }

      var toString = Object.prototype.toString;

      exports.toString = toString;
      // Sourced from lodash
      // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
      /*eslint-disable func-style, no-var */
      var isFunction = function isFunction(value) {
        return typeof value === 'function';
      };
      // fallback for older versions of Chrome and Safari
      /* istanbul ignore next */
      if (isFunction(/x/)) {
        exports.isFunction = isFunction = function (value) {
          return typeof value === 'function' && toString.call(value) === '[object Function]';
        };
      }
      var isFunction;
      exports.isFunction = isFunction;
      /*eslint-enable func-style, no-var */

      /* istanbul ignore next */
      var isArray = Array.isArray || function (value) {
            return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
          };exports.isArray = isArray;

      function indexOf(array, value) {
        for (var i = 0, len = array.length; i < len; i++) {
          if (array[i] === value) {
            return i;
          }
        }
        return -1;
      }

      function escapeExpression(string) {
        if (typeof string !== 'string') {
          // don't escape SafeStrings, since they're already safe
          if (string && string.toHTML) {
            return string.toHTML();
          } else if (string == null) {
            return '';
          } else if (!string) {
            return string + '';
          }

          // Force a string conversion as this will be done by the append regardless and
          // the regex test will do this transparently behind the scenes, causing issues if
          // an object's to string has escaped characters in it.
          string = '' + string;
        }

        if (!possible.test(string)) {
          return string;
        }
        return string.replace(badChars, escapeChar);
      }

      function isEmpty(value) {
        if (!value && value !== 0) {
          return true;
        } else if (isArray(value) && value.length === 0) {
          return true;
        } else {
          return false;
        }
      }

      function blockParams(params, ids) {
        params.path = ids;
        return params;
      }

      function appendContextPath(contextPath, id) {
        return (contextPath ? contextPath + '.' : '') + id;
      }

      /***/ },
    /* 5 */
    /***/ function(module, exports, __webpack_require__) {

      

      var _interopRequireWildcard = __webpack_require__(7)['default'];

      var _interopRequireDefault = __webpack_require__(8)['default'];

      exports.__esModule = true;
      exports.checkRevision = checkRevision;

      // TODO: Remove this line and break up compilePartial

      exports.template = template;
      exports.wrapProgram = wrapProgram;
      exports.resolvePartial = resolvePartial;
      exports.invokePartial = invokePartial;
      exports.noop = noop;

      var _import = __webpack_require__(4);

      var Utils = _interopRequireWildcard(_import);

      var _Exception = __webpack_require__(3);

      var _Exception2 = _interopRequireDefault(_Exception);

      var _COMPILER_REVISION$REVISION_CHANGES$createFrame = __webpack_require__(1);

      function checkRevision(compilerInfo) {
        var compilerRevision = compilerInfo && compilerInfo[0] || 1,
            currentRevision = _COMPILER_REVISION$REVISION_CHANGES$createFrame.COMPILER_REVISION;

        if (compilerRevision !== currentRevision) {
          if (compilerRevision < currentRevision) {
            var runtimeVersions = _COMPILER_REVISION$REVISION_CHANGES$createFrame.REVISION_CHANGES[currentRevision],
                compilerVersions = _COMPILER_REVISION$REVISION_CHANGES$createFrame.REVISION_CHANGES[compilerRevision];
            throw new _Exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
          } else {
            // Use the embedded version info since the runtime doesn't know about this revision yet
            throw new _Exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
          }
        }
      }

      function template(templateSpec, env) {
        /* istanbul ignore next */
        if (!env) {
          throw new _Exception2['default']('No environment passed to template');
        }
        if (!templateSpec || !templateSpec.main) {
          throw new _Exception2['default']('Unknown template object: ' + typeof templateSpec);
        }

        // Note: Using env.VM references rather than local var references throughout this section to allow
        // for external users to override these as psuedo-supported APIs.
        env.VM.checkRevision(templateSpec.compiler);

        function invokePartialWrapper(partial, context, options) {
          if (options.hash) {
            context = Utils.extend({}, context, options.hash);
          }

          partial = env.VM.resolvePartial.call(this, partial, context, options);
          var result = env.VM.invokePartial.call(this, partial, context, options);

          if (result == null && env.compile) {
            options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
            result = options.partials[options.name](context, options);
          }
          if (result != null) {
            if (options.indent) {
              var lines = result.split('\n');
              for (var i = 0, l = lines.length; i < l; i++) {
                if (!lines[i] && i + 1 === l) {
                  break;
                }

                lines[i] = options.indent + lines[i];
              }
              result = lines.join('\n');
            }
            return result;
          } else {
            throw new _Exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
          }
        }

        // Just add water
        var container = {
          strict: function strict(obj, name) {
            if (!(name in obj)) {
              throw new _Exception2['default']('"' + name + '" not defined in ' + obj);
            }
            return obj[name];
          },
          lookup: function lookup(depths, name) {
            var len = depths.length;
            for (var i = 0; i < len; i++) {
              if (depths[i] && depths[i][name] != null) {
                return depths[i][name];
              }
            }
          },
          lambda: function lambda(current, context) {
            return typeof current === 'function' ? current.call(context) : current;
          },

          escapeExpression: Utils.escapeExpression,
          invokePartial: invokePartialWrapper,

          fn: function fn(i) {
            return templateSpec[i];
          },

          programs: [],
          program: function program(i, data, declaredBlockParams, blockParams, depths) {
            var programWrapper = this.programs[i],
                fn = this.fn(i);
            if (data || depths || blockParams || declaredBlockParams) {
              programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
            } else if (!programWrapper) {
              programWrapper = this.programs[i] = wrapProgram(this, i, fn);
            }
            return programWrapper;
          },

          data: function data(value, depth) {
            while (value && depth--) {
              value = value._parent;
            }
            return value;
          },
          merge: function merge(param, common) {
            var obj = param || common;

            if (param && common && param !== common) {
              obj = Utils.extend({}, common, param);
            }

            return obj;
          },

          noop: env.VM.noop,
          compilerInfo: templateSpec.compiler
        };

        function ret(context) {
          var options = arguments[1] === undefined ? {} : arguments[1];

          var data = options.data;

          ret._setup(options);
          if (!options.partial && templateSpec.useData) {
            data = initData(context, data);
          }
          var depths = undefined,
              blockParams = templateSpec.useBlockParams ? [] : undefined;
          if (templateSpec.useDepths) {
            depths = options.depths ? [context].concat(options.depths) : [context];
          }

          return templateSpec.main.call(container, context, container.helpers, container.partials, data, blockParams, depths);
        }
        ret.isTop = true;

        ret._setup = function (options) {
          if (!options.partial) {
            container.helpers = container.merge(options.helpers, env.helpers);

            if (templateSpec.usePartial) {
              container.partials = container.merge(options.partials, env.partials);
            }
          } else {
            container.helpers = options.helpers;
            container.partials = options.partials;
          }
        };

        ret._child = function (i, data, blockParams, depths) {
          if (templateSpec.useBlockParams && !blockParams) {
            throw new _Exception2['default']('must pass block params');
          }
          if (templateSpec.useDepths && !depths) {
            throw new _Exception2['default']('must pass parent depths');
          }

          return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
        };
        return ret;
      }

      function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
        function prog(context) {
          var options = arguments[1] === undefined ? {} : arguments[1];

          return fn.call(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), depths && [context].concat(depths));
        }
        prog.program = i;
        prog.depth = depths ? depths.length : 0;
        prog.blockParams = declaredBlockParams || 0;
        return prog;
      }

      function resolvePartial(partial, context, options) {
        if (!partial) {
          partial = options.partials[options.name];
        } else if (!partial.call && !options.name) {
          // This is a dynamic partial that returned a string
          options.name = partial;
          partial = options.partials[partial];
        }
        return partial;
      }

      function invokePartial(partial, context, options) {
        options.partial = true;

        if (partial === undefined) {
          throw new _Exception2['default']('The partial ' + options.name + ' could not be found');
        } else if (partial instanceof Function) {
          return partial(context, options);
        }
      }

      function noop() {
        return '';
      }

      function initData(context, data) {
        if (!data || !('root' in data)) {
          data = data ? _COMPILER_REVISION$REVISION_CHANGES$createFrame.createFrame(data) : {};
          data.root = context;
        }
        return data;
      }

      /***/ },
    /* 6 */
    /***/ function(module, exports, __webpack_require__) {

      /* WEBPACK VAR INJECTION */(function(global) {

        exports.__esModule = true;
        /*global window */

        exports['default'] = function (Handlebars) {
          /* istanbul ignore next */
          var root = typeof global !== 'undefined' ? global : window,
              $Handlebars = root.Handlebars;
          /* istanbul ignore next */
          Handlebars.noConflict = function () {
            if (root.Handlebars === Handlebars) {
              root.Handlebars = $Handlebars;
            }
          };
        };

        module.exports = exports['default'];
        /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

      /***/ },
    /* 7 */
    /***/ function(module, exports, __webpack_require__) {

      

      exports["default"] = function (obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};

          if (typeof obj === "object" && obj !== null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }

          newObj["default"] = obj;
          return newObj;
        }
      };

      exports.__esModule = true;

      /***/ },
    /* 8 */
    /***/ function(module, exports, __webpack_require__) {

      

      exports["default"] = function (obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      };

      exports.__esModule = true;

      /***/ }
    /******/ ])
});
;

define('templates',["handlebars.runtime"],function(a){a=a["default"];var n=a.template,e=a.templates=a.templates||{};return e["category-submenu-slider.hbs"]=n({1:function(a,n,e,l){var s;return'	<div class="category-submenu-slide">\n		<ul class="wide-wrap pure-g align-left">\n'+(null!=(s=n.each.call(a,a,{name:"each",hash:{},fn:this.program(2,l,0),inverse:this.noop,data:l}))?s:"")+"		</ul>\n	</div>\n"},2:function(a,n,e,l){var s,t=n.helperMissing,i="function",r=this.escapeExpression;return'			<li class="sale-item pure-u-1-3 pure-u-sm-1-3 pure-u-md-1-4 pure-u-lg-1-6 mar-b--medium pad--xsmall '+r((s=null!=(s=n.current||(null!=a?a.current:a))?s:t,typeof s===i?s.call(a,{name:"current",hash:{},data:l}):s))+'">\n				<a href="'+r((s=null!=(s=n.link||(null!=a?a.link:a))?s:t,typeof s===i?s.call(a,{name:"link",hash:{},data:l}):s))+'" class="sale-item-link" data-sale-code="'+r((s=null!=(s=n.code||(null!=a?a.code:a))?s:t,typeof s===i?s.call(a,{name:"code",hash:{},data:l}):s))+'" data-sale-name="'+r((s=null!=(s=n.name||(null!=a?a.name:a))?s:t,typeof s===i?s.call(a,{name:"name",hash:{},data:l}):s))+'">\n					<img data-lazy="'+r((s=null!=(s=n.image||(null!=a?a.image:a))?s:t,typeof s===i?s.call(a,{name:"image",hash:{},data:l}):s))+'" class="sale-banner sale-img mar-b--small" />\n					<h4 class="brand-name pad-l--xsmall pad-r--xsmall align-center">'+r((s=null!=(s=n.name||(null!=a?a.name:a))?s:t,typeof s===i?s.call(a,{name:"name",hash:{},data:l}):s))+"</h4>\n				</a>\n			</li>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,n,e,l){var s;return(null!=(s=n.each.call(a,null!=a?a.salesSlides:a,{name:"each",hash:{},fn:this.program(1,l,0),inverse:this.noop,data:l}))?s:"")+'<nav class="submenu-nav-container wide-wrap">\n	<div class="submenu-nav"></div>\n</nav>'},useData:!0}),e["pagination.hbs"]=n({1:function(a,n,e,l){var s;return'		<li><a id="paging-prev" href="#'+this.escapeExpression((s=null!=(s=n.resetScrollPointId||(null!=a?a.resetScrollPointId:a))?s:n.helperMissing,"function"==typeof s?s.call(a,{name:"resetScrollPointId",hash:{},data:l}):s))+'"><span class="glyphicon glyphicon-chevron-left"></span></a></li>\n'},3:function(a,n,e,l,s,t){var i,r,u=n.helperMissing,c="function",d=this.escapeExpression;return'		<li class="'+(null!=(i=n["if"].call(a,null!=a?a.isCurrent:a,{name:"if",hash:{},fn:this.program(4,l,0,s,t),inverse:this.noop,data:l}))?i:"")+'"><a class="paging '+(null!=(i=n["if"].call(a,null!=a?a.isCurrent:a,{name:"if",hash:{},fn:this.program(6,l,0,s,t),inverse:this.noop,data:l}))?i:"")+'" data-page="'+d((r=null!=(r=n.num||(null!=a?a.num:a))?r:u,typeof r===c?r.call(a,{name:"num",hash:{},data:l}):r))+'" href="#'+d(this.lambda(null!=t[1]?t[1].resetScrollPointId:t[1],a))+'">'+d((r=null!=(r=n.num||(null!=a?a.num:a))?r:u,typeof r===c?r.call(a,{name:"num",hash:{},data:l}):r))+"</a></li>\n"},4:function(){return"active"},6:function(){return"current"},8:function(a,n,e,l){var s;return'		<li><a id="paging-next" href="#'+this.escapeExpression((s=null!=(s=n.resetScrollPointId||(null!=a?a.resetScrollPointId:a))?s:n.helperMissing,"function"==typeof s?s.call(a,{name:"resetScrollPointId",hash:{},data:l}):s))+'"><span class="glyphicon glyphicon-chevron-right"></span></a></li>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(a,n,e,l,s,t){var i;return'<ul class="pagination">\n'+(null!=(i=n["if"].call(a,null!=a?a.prevEnabled:a,{name:"if",hash:{},fn:this.program(1,l,0,s,t),inverse:this.noop,data:l}))?i:"")+(null!=(i=n.each.call(a,null!=a?a.pages:a,{name:"each",hash:{},fn:this.program(3,l,0,s,t),inverse:this.noop,data:l}))?i:"")+(null!=(i=n["if"].call(a,null!=a?a.nextEnabled:a,{name:"if",hash:{},fn:this.program(8,l,0,s,t),inverse:this.noop,data:l}))?i:"")+"</ul>"},useData:!0,useDepths:!0}),e["products-menu.hbs"]=n({compiler:[6,">= 2.0.0-beta.1"],main:function(a,n,e,l){var s,t=n.helperMissing,i="function",r=this.escapeExpression;return'<li class="'+r((s=null!=(s=n.current||(null!=a?a.current:a))?s:t,typeof s===i?s.call(a,{name:"current",hash:{},data:l}):s))+'" data-prod-id="'+r((s=null!=(s=n.id||(null!=a?a.id:a))?s:t,typeof s===i?s.call(a,{name:"id",hash:{},data:l}):s))+'">\n	<a href="'+r((s=null!=(s=n.link||(null!=a?a.link:a))?s:t,typeof s===i?s.call(a,{name:"link",hash:{},data:l}):s))+'#products-nav" class="prod-nav-item" data-prod-name="'+r((s=null!=(s=n.name||(null!=a?a.name:a))?s:t,typeof s===i?s.call(a,{name:"name",hash:{},data:l}):s))+'" data-prod-id="'+r((s=null!=(s=n.id||(null!=a?a.id:a))?s:t,typeof s===i?s.call(a,{name:"id",hash:{},data:l}):s))+'" data-pos="'+r((s=null!=(s=n.pos||(null!=a?a.pos:a))?s:t,typeof s===i?s.call(a,{name:"pos",hash:{},data:l}):s))+'">\n		<img class="prod-img" data-lazy="'+r((s=null!=(s=n.image||(null!=a?a.image:a))?s:t,typeof s===i?s.call(a,{name:"image",hash:{},data:l}):s))+'" />\n	</a>\n</li>'},useData:!0}),e["return-no-item.hbs"]=n({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<section class="status-message-box no-returnable-items">\n	<div>\n		<picture>\n			<source media="(min-width: 378px)" sizes="(min-width: 378px)"\n				srcset="/static/images/returns/no-item.png, /static/images/returns/no-item@2x.png 2x" />\n			<img alt="Loading" class="responsive-img"\n				src="/static/images/returns/no-item.png"\n				srcset="/static/images/returns/no-item.png, /static/images/returns/no-item@2x.png 2x"/>\n		</picture>\n	</div>\n	<h4 class="h4 pad-b--small">現在、返品可能な商品はございません。</h4>\n	<p>商品発送から8日以内の商品が返品の対象になります。<br/>お問い合わせは<a href="mailto:support@milleporte.com">メンバー・サービス・デスク</a>にご連絡下さい。</p>\n</section>'},useData:!0}),e["return-no-request.hbs"]=n({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<section class="status-message-box no-returnable-items">\n	<div>\n		<picture>\n			<source media="(min-width: 378px)" sizes="(min-width: 378px)"\n				srcset="/static/images/returns/no-item.png, /static/images/returns/no-item@2x.png 2x" />\n			<img alt="Loading" class="responsive-img"\n				src="/static/images/returns/no-item.png"\n				srcset="/static/images/returns/no-item.png, /static/images/returns/no-item@2x.png 2x"/>\n		</picture>\n	</div>\n	<h4 class="h4 pad-b--small">現在、返品処理中の商品はございません。</h4>\n	<p>オンラインから受け付けた返品申請のみを表示しています。<br/>新規のオンライン返品をご希望の場合は<a href="/account/returns">こちらから</a>申請して<span class="nobreak">ください。</span></p>\n</section>\n\n<header class="no-return-items status-message-box mar-t--xlarge hidden"></header>\n'},useData:!0}),e["return-request-item.hbs"]=n({1:function(){return'		<form class="form-cancel-request align-right" method="DELETE" action="/json/return">\n			<input type="button" class="pure-u-1 action action-cancel" value="リクエストのキャンセル"/>\n		</form>\n'},3:function(){return'style="display:none;"'},5:function(a,n,e,l){var s;return'			<a href="'+this.escapeExpression((s=null!=(s=n["shipping-slip"]||(null!=a?a["shipping-slip"]:a))?s:n.helperMissing,"function"==typeof s?s.call(a,{name:"shipping-slip",hash:{},data:l}):s))+'" class="pure-u-1 action action--outline action--outline-tier-2 shipping-label">返品明細書を印刷する</a>\n'},7:function(a,n,e,l,s,t){var i,r,u=n.helperMissing,c="function",d=this.escapeExpression;return'	<div class="pure-u-1">\n		<div class="pure-g return-request-product pad--small">\n			<div class="return-item-face pure-u-1-3 pure-u-sm-1-4 align-center">\n				<img class="return-item-img" src="'+d((r=null!=(r=n.img||(null!=a?a.img:a))?r:u,typeof r===c?r.call(a,{name:"img",hash:{},data:l}):r))+'" />\n			</div>\n			<div class="pure-u-2-3 pure-u-sm-3-8 return-request-prod-info">\n				<div>\n					<div><b>'+d((r=null!=(r=n["sale-name"]||(null!=a?a["sale-name"]:a))?r:u,typeof r===c?r.call(a,{name:"sale-name",hash:{},data:l}):r))+'</b></div>\n					<div class="return-item-name pad-r--small">'+d((r=null!=(r=n["prod-name"]||(null!=a?a["prod-name"]:a))?r:u,typeof r===c?r.call(a,{name:"prod-name",hash:{},data:l}):r))+"</div>\n					<div>"+d((r=null!=(r=n.variant||(null!=a?a.variant:a))?r:u,typeof r===c?r.call(a,{name:"variant",hash:{},data:l}):r))+" – JAN:"+d((r=null!=(r=n["product-code"]||(null!=a?a["product-code"]:a))?r:u,typeof r===c?r.call(a,{name:"product-code",hash:{},data:l}):r))+'</div>\n				</div>\n			</div>\n			<div class="pure-u-1-3 pure-u-sm-0"></div>\n			<div class="pure-u-1-2 pure-u-sm-1-3 mar-t--small mar-sm-t--none return-request-secondary-info">\n				<div>\n					<div>アイテム数：'+d((r=null!=(r=n.qty||(null!=a?a.qty:a))?r:u,typeof r===c?r.call(a,{name:"qty",hash:{},data:l}):r))+"</div>\n					<div>ご注文金額："+d((r=null!=(r=n.price||(null!=a?a.price:a))?r:u,typeof r===c?r.call(a,{name:"price",hash:{},data:l}):r))+"</div>\n					<div>返品理由："+d((r=null!=(r=n["reason-name"]||(null!=a?a["reason-name"]:a))?r:u,typeof r===c?r.call(a,{name:"reason-name",hash:{},data:l}):r))+(null!=(i=n["if"].call(a,null!=t[1]?t[1].isReasonOther:t[1],{name:"if",hash:{},fn:this.program(8,l,0,s,t),inverse:this.noop,data:l}))?i:"")+"</div>\n"+(null!=(i=n.unless.call(a,null!=t[1]?t[1].isClosed:t[1],{name:"unless",hash:{},fn:this.program(10,l,0,s,t),inverse:this.noop,data:l}))?i:"")+"				</div>\n			</div>\n		</div>\n	</div>\n"},8:function(a,n,e,l){var s;return" - "+this.escapeExpression((s=null!=(s=n["reason-description"]||(null!=a?a["reason-description"]:a))?s:n.helperMissing,"function"==typeof s?s.call(a,{name:"reason-description",hash:{},data:l}):s))},10:function(a,n,e,l){var s;return'					<div class="return-request-refund-method">返金方法: '+this.escapeExpression((s=null!=(s=n["pay-type"]||(null!=a?a["pay-type"]:a))?s:n.helperMissing,"function"==typeof s?s.call(a,{name:"pay-type",hash:{},data:l}):s))+"</div>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,n,e,l,s,t){var i,r,u=n.helperMissing,c="function",d=this.escapeExpression;return'<div class="header-request pure-g status-'+d((r=null!=(r=n.activeStatusClass||(null!=a?a.activeStatusClass:a))?r:u,typeof r===c?r.call(a,{name:"activeStatusClass",hash:{},data:l}):r))+'">\n	<div class="pure-u-1 pure-u-sm-2-3 align-left header-request-title">\n		<div class="state-request"><span class="status-icon status-'+d((r=null!=(r=n.status||(null!=a?a.status:a))?r:u,typeof r===c?r.call(a,{name:"status",hash:{},data:l}):r))+'"></span></div>\n		<div>\n			<div>リクエスト番号：'+d((r=null!=(r=n["request-external-id"]||(null!=a?a["request-external-id"]:a))?r:u,typeof r===c?r.call(a,{name:"request-external-id",hash:{},data:l}):r))+"</div>\n			<div>返品ステータス："+d((r=null!=(r=n["status-name"]||(null!=a?a["status-name"]:a))?r:u,typeof r===c?r.call(a,{name:"status-name",hash:{},data:l}):r))+'</div>\n		</div>\n	</div>\n	<div class="pure-u-1 pure-u-sm-1-3 align-right pad-t--xsmall pad-t-sm--none">\n'+(null!=(i=n["if"].call(a,null!=a?a.cancelable:a,{name:"if",hash:{},fn:this.program(1,l,0,s,t),inverse:this.noop,data:l}))?i:"")+'	</div>\n</div>\n<div class="request-item-detail" '+(null!=(i=n["if"].call(a,null!=a?a.isClosed:a,{name:"if",hash:{},fn:this.program(3,l,0,s,t),inverse:this.noop,data:l}))?i:"")+'>\n	<div class="pure-g pad-t--small pad-b--medium">\n		<div class="pure-u-2-3 align-left">\n			<div>返品申請日時：<span class="nobreak">'+d((r=null!=(r=n["requested-date"]||(null!=a?a["requested-date"]:a))?r:u,typeof r===c?r.call(a,{name:"requested-date",hash:{},data:l}):r))+"</span></div>\n			<div>合計金額："+d((r=null!=(r=n.amount||(null!=a?a.amount:a))?r:u,typeof r===c?r.call(a,{name:"amount",hash:{},data:l}):r))+'</div>\n		</div>\n		<div class="pure-u-1-3 align-right">\n'+(null!=(i=n.unless.call(a,null!=a?a.isClosed:a,{name:"unless",hash:{},fn:this.program(5,l,0,s,t),inverse:this.noop,data:l}))?i:"")+"		</div>\n	</div>\n"+(null!=(i=n.each.call(a,null!=a?a.items:a,{name:"each",hash:{},fn:this.program(7,l,0,s,t),inverse:this.noop,data:l}))?i:"")+"</div>\n"},useData:!0,useDepths:!0}),e["return-server-error.hbs"]=n({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<section class="status-message-box no-returnable-items">\n	<div>\n		<picture>\n			<source media="(min-width: 378px)" sizes="(min-width: 378px)"\n				srcset="/static/images/returns/no-item.png, /static/images/returns/no-item@2x.png 2x" />\n			<img alt="Loading" class="responsive-img"\n				src="/static/images/returns/no-item.png"\n				srcset="/static/images/returns/no-item.png, /static/images/returns/no-item@2x.png 2x"/>\n		</picture>\n	</div>\n	<h4 class="h4 pad-b--small">サーバーエラーが起こりました。</h4>\n	<p>しばらくたっても問題が解決されない場合は、<a href="mailto:support@milleporte.com">カスタマーサービス</a>までご連絡<span class="nobreak">ください。</span></p>\n</section>\n\n<header class="no-return-items status-message-box mar-t--xlarge hidden"></header>\n'},useData:!0}),e["returnable-item.hbs"]=n({1:function(){return"checked"},3:function(a,n,e,l,s,t){var i,r,u=n.helperMissing,c="function",d=this.escapeExpression,o=this.lambda;return'			<div class="pure-g return-detail-quantity mar-b--small">\n				<h4 class="pure-u-1 asterisk">返品するアイテム数</h4>\n				<div class="pure-u-1">\n					<div class="form-dropdown">\n						<select class="return-item-quantity" data-required="true" data-validation-message="今回返品したい数量を選択してください。">\n							<option value="">返品数を選択</option>\n'+(null!=(i=n.each.call(a,null!=a?a.qtyOpts:a,{name:"each",hash:{},fn:this.program(4,l,0,s,t),inverse:this.noop,data:l}))?i:"")+'						</select>\n					</div>\n				</div>\n			</div>\n			<div class="pure-g return-detail-reasons mar-b--medium">\n				<h4 class="pure-u-1 asterisk return-reason-label-'+d((r=null!=(r=n.id||(null!=a?a.id:a))?r:u,typeof r===c?r.call(a,{name:"id",hash:{},data:l}):r))+'">返品理由</h4>\n				<ul class="pure-u-1 return-reason-group return-detail-inputs-list validation-group" data-validation-message="ご返品理由をご選択してください。" data-message-attach=".return-reason-label-'+d((r=null!=(r=n.id||(null!=a?a.id:a))?r:u,typeof r===c?r.call(a,{name:"id",hash:{},data:l}):r))+'" data-message-placement="right" >\n'+(null!=(i=n.each.call(a,null!=a?a.reasons:a,{name:"each",hash:{},fn:this.program(6,l,0,s,t),inverse:this.noop,data:l}))?i:"")+'					<li>\n						<label class="radio-button">\n							<input name="return-reason-'+d(o(null!=t[1]?t[1].id:t[1],a))+'" type="radio" value="other" class="return-reason" /> その他の理由<span class="radio-head"></span>\n						</label>\n						<div class="pure-g return-cs-form mar-t--xsmall hidden">\n							<h4 class="pure-u-1 unreturnable-item-message mar-b--small">その他の理由の場合、こちらのフォームよりメンバー・サービス・デスクにご連絡ください。\n							</h4>\n							<form id="form-returns-cs-'+d((r=null!=(r=n.id||(null!=a?a.id:a))?r:u,typeof r===c?r.call(a,{name:"id",hash:{},data:l}):r))+'" method="post" action="/json/return">\n								<div class="pure-u-1 mar-t--medium">\n									<label class="asterisk">返品を希望する理由をご記入下さい。</label>\n									<textarea name="unreturnalbe-item-description" data-required="true"></textarea>\n									<input type="hidden" name="unreturnable-cs-query" value="true" />\n								</div>\n								<div class="pure-u-1 mar-b--xsmall">\n									<input value="送信する" class="unreturnable-item-submit action" type="button" />\n									<input value="キャンセル" class="unreturnable-item-cancel action action--outline action--outline-tier-2 action--gray" type="button" />\n								</div>\n								<input type="hidden" class="return-item-quantity" id="return-item-quantity-'+d(o(null!=t[1]?t[1].id:t[1],a))+'" />\n							</form>\n						</div>\n					</li>\n				</ul>\n			</div>\n			<div class="pure-g return-detail-pledges mar-b--medium">\n				<h4 class="pure-u-1 asterisk" title="下記すべての事項にチェックを入れて下さい。">下記に同意してください</h4>\n				<ul class="pure-u-1 return-pledge-group return-detail-inputs-list">\n'+(null!=(i=n.each.call(a,null!=a?a.pledges:a,{name:"each",hash:{},fn:this.program(8,l,0,s,t),inverse:this.noop,data:l}))?i:"")+'				</ul>\n			</div>\n			<div class="mar-b--xsmall return-detail-actions">\n				<input value="この商品を選択" class="return-details-ok action" type="button" />\n				<input value="キャンセル" class="return-details-cancel action action--outline action--outline-tier-2 action--gray" type="button" />\n			</div>\n'},4:function(a){var n=this.lambda,e=this.escapeExpression;return'								<option value="'+e(n(a,a))+'">'+e(n(a,a))+"</option>\n"},6:function(a,n,e,l,s,t){var i,r=this.escapeExpression,u=n.helperMissing,c="function";return'					<li>\n						<label class="radio-button">\n							<input name="return-reason-'+r(this.lambda(null!=t[1]?t[1].id:t[1],a))+'" type="radio" value="'+r((i=null!=(i=n.value||(null!=a?a.value:a))?i:u,typeof i===c?i.call(a,{name:"value",hash:{},data:l}):i))+'" data-required="true" class="return-reason" '+r((i=null!=(i=n.checked||(null!=a?a.checked:a))?i:u,typeof i===c?i.call(a,{name:"checked",hash:{},data:l}):i))+" />\n							<span></span>"+r((i=null!=(i=n.label||(null!=a?a.label:a))?i:u,typeof i===c?i.call(a,{name:"label",hash:{},data:l}):i))+"\n						</label>\n					</li>\n"},8:function(a,n,e,l,s,t){var i,r=this.escapeExpression,u=n.helperMissing,c="function";return'					<li>\n						<label class="checkbox">\n							<input id="'+r(this.lambda(null!=t[1]?t[1].id:t[1],a))+"-pledge-"+r((i=null!=(i=n.value||(null!=a?a.value:a))?i:u,typeof i===c?i.call(a,{name:"value",hash:{},data:l}):i))+'" type="checkbox" value="'+r((i=null!=(i=n.value||(null!=a?a.value:a))?i:u,typeof i===c?i.call(a,{name:"value",hash:{},data:l}):i))+'" data-required="true" '+r((i=null!=(i=n.checked||(null!=a?a.checked:a))?i:u,typeof i===c?i.call(a,{name:"checked",hash:{},data:l}):i))+' />\n							<span></span> <span class="checkbox-label">'+r((i=null!=(i=n.label||(null!=a?a.label:a))?i:u,typeof i===c?i.call(a,{name:"label",hash:{},data:l}):i))+"</span>\n						</label>\n					</li>\n"},10:function(a,n,e,l){var s,t;return'			<div class="pure-g unreturnable-item-form pad--small">\n				<h4 class="pure-u-1 unreturnable-item-message pad-b--small">この商品は通常返品の対象外です。商品の欠損などの場合は、こちらのフォームからメンバー・サービス・デスクにご連絡ください。</h4>\n				<form id="form-returns-cs-'+this.escapeExpression((t=null!=(t=n.id||(null!=a?a.id:a))?t:n.helperMissing,"function"==typeof t?t.call(a,{name:"id",hash:{},data:l}):t))+'" method="post" action="/json/return">\n					<div class="pure-g return-detail-quantity">\n						<h4 class="pure-u-1 asterisk">数量</h4>\n						<div class="form-dropdown pure-u-1">\n							<select class="return-item-quantity" data-required="true" data-validation-message="今回返品したい数量を選択してください。">\n								<option value="">返品数を選択</option>\n'+(null!=(s=n.each.call(a,null!=a?a.qtyOpts:a,{name:"each",hash:{},fn:this.program(11,l,0),inverse:this.noop,data:l}))?s:"")+'							</select>\n						</div>\n					</div>\n					<div class="pure-u-1 mar-t--medium">\n						<h4 class="asterisk">返品を希望する理由をご記入下さい。</h4>\n						<textarea name="unreturnalbe-item-description" data-required="true" data-validation-message="ご返品理由をご記入ください。"></textarea>\n						<input type="hidden" name="unreturnable-cs-query" value="true" />\n					</div>\n					<div class="pure-u-1 mar-b--xsmall mar-t--xsmall">\n						<input value="送信する" class="unreturnable-item-submit action" type="button" />\n						<input value="キャンセル" class="unreturnable-item-cancel action action--outline action--outline-tier-2 action--gray" type="button" />\n					</div>\n				</form>\n			</div>\n'},11:function(a){var n=this.lambda,e=this.escapeExpression;return'									<option value="'+e(n(a,a))+'">'+e(n(a,a))+"</option>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,n,e,l,s,t){var i,r,u=n.helperMissing,c="function",d=this.escapeExpression;return'<div class="pure-g return-item-container">\n	<div class="return-item-selection pure-u-1-6 pure-u-sm-1-12">\n		<label class="checkbox checkbox--large">\n			<input type="checkbox" class="select-item" '+(null!=(i=n["if"].call(a,null!=a?a.isSelected:a,{name:"if",hash:{},fn:this.program(1,l,0,s,t),inverse:this.noop,data:l}))?i:"")+'>\n			<span><!-- this is checkbox --></span>\n		</label>\n	</div>\n	<div class="pure-u-5-6 pure-u-sm-11-12">\n		<div class="return-item-summary pure-u-1">\n			<div class="pure-g">\n				<div class="return-item-face pure-u-1-3 pure-u-sm-1-6">\n					<div class="return-item-img">\n						<img src="'+d((r=null!=(r=n.img||(null!=a?a.img:a))?r:u,typeof r===c?r.call(a,{name:"img",hash:{},data:l}):r))+'" />\n					</div>\n				</div>\n				<div class="pure-u-2-3 pure-u-sm-5-6 return-item-desc">\n					<div class="pure-g">\n						<div class="pure-u-1 pure-u-sm-1-2 return-item-prod-info">\n							<div class="brand-name"><b>'+d((r=null!=(r=n["sale-name"]||(null!=a?a["sale-name"]:a))?r:u,typeof r===c?r.call(a,{name:"sale-name",hash:{},data:l}):r))+'</b></div>\n							<div class="return-item-name">'+d((r=null!=(r=n["product-name"]||(null!=a?a["product-name"]:a))?r:u,typeof r===c?r.call(a,{name:"product-name",hash:{},data:l}):r))+'</div>\n							<div>\n								<span class="nobreak">'+d((r=null!=(r=n.variant||(null!=a?a.variant:a))?r:u,typeof r===c?r.call(a,{name:"variant",hash:{},data:l}):r))+"</span>  "+d((r=null!=(r=n["product-code"]||(null!=a?a["product-code"]:a))?r:u,typeof r===c?r.call(a,{name:"product-code",hash:{},data:l}):r))+'\n								<span class="order-detail-link nobreak">\n									(<a href="'+d((r=null!=(r=n.link||(null!=a?a.link:a))?r:u,typeof r===c?r.call(a,{name:"link",hash:{},data:l}):r))+'" target="_blank" class="">注文詳細</a>)\n								</span>\n							</div>\n						</div>\n						<div class="pure-u-1 pure-u-sm-1-2 return-item-secondary-info pad-sm-r--small pad-sm-l--small">\n							<div class="display-available">\n								<div>発送日: <span class="nobreak">'+d((r=null!=(r=n["ship-date"]||(null!=a?a["ship-date"]:a))?r:u,typeof r===c?r.call(a,{name:"ship-date",hash:{},data:l}):r))+"</span></div>\n								<div>アイテム数: "+d((r=null!=(r=n.qty||(null!=a?a.qty:a))?r:u,typeof r===c?r.call(a,{name:"qty",hash:{},data:l}):r))+"</div>\n								<div>ご注文金額: "+d((r=null!=(r=n.price||(null!=a?a.price:a))?r:u,typeof r===c?r.call(a,{name:"price",hash:{},data:l}):r))+"</div>\n								<div>お支払い方法: "+d((r=null!=(r=n["payment-type-name"]||(null!=a?a["payment-type-name"]:a))?r:u,typeof r===c?r.call(a,{name:"payment-type-name",hash:{},data:l}):r))+'</div>\n							</div>\n							<div class="display-selected">\n								<div>返品理由: '+d((r=null!=(r=n.returnReasonText||(null!=a?a.returnReasonText:a))?r:u,typeof r===c?r.call(a,{name:"returnReasonText",hash:{},data:l}):r))+"</div>\n								<div>返品数: "+d((r=null!=(r=n.selectedQty||(null!=a?a.selectedQty:a))?r:u,typeof r===c?r.call(a,{name:"selectedQty",hash:{},data:l}):r))+"</div>\n								<div>ご注文金額: "+d((r=null!=(r=n.price||(null!=a?a.price:a))?r:u,typeof r===c?r.call(a,{name:"price",hash:{},data:l}):r))+"</div>\n								<div>お支払い方法: "+d((r=null!=(r=n["payment-type-name"]||(null!=a?a["payment-type-name"]:a))?r:u,typeof r===c?r.call(a,{name:"payment-type-name",hash:{},data:l}):r))+'</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n<fieldset class="pure-g return-item-detail-wrapper hidden">\n	<div class="return-item-detail pad--small pure-g">\n		<div class="pure-u-sm-1-12"></div>\n		<div class="pure-u-sm-11-12">\n'+(null!=(i=n["if"].call(a,null!=a?a.returnable:a,{name:"if",hash:{},fn:this.program(3,l,0,s,t),inverse:this.program(10,l,0,s,t),data:l}))?i:"")+"		</div>\n	</div>\n</fieldset>\n\n\n"},useData:!0,useDepths:!0}),e["sales-menu-lite.hbs"]=n({compiler:[6,">= 2.0.0-beta.1"],main:function(a,n,e,l){var s,t=n.helperMissing,i="function",r=this.escapeExpression;return'<li class="'+r((s=null!=(s=n.current||(null!=a?a.current:a))?s:t,typeof s===i?s.call(a,{name:"current",hash:{},data:l}):s))+'" data-sale-code="'+r((s=null!=(s=n.code||(null!=a?a.code:a))?s:t,typeof s===i?s.call(a,{name:"code",hash:{},data:l}):s))+'">\n	<a href="'+r((s=null!=(s=n.link||(null!=a?a.link:a))?s:t,typeof s===i?s.call(a,{name:"link",hash:{},data:l}):s))+'" data-sale-code="'+r((s=null!=(s=n.code||(null!=a?a.code:a))?s:t,typeof s===i?s.call(a,{name:"code",hash:{},data:l}):s))+'">'+r((s=null!=(s=n.name||(null!=a?a.name:a))?s:t,typeof s===i?s.call(a,{name:"name",hash:{},data:l}):s))+"</a>\n</li>"},useData:!0}),e});
require(['jquery', 'underscore', 'backbone', 'templates', 'slick'], function($, _, Backbone, Templates) {

		MP.SalesMenuLiteView = Backbone.View.extend({

		initialize: function(opts) {
			this.currentCategory  = (opts && opts.category) ? opts.category : null;
			this.currentSaleId = (opts && opts.saleId) ? opts.saleId : null;
		},

		render: function() {
			var sales = this.collection.map(function(sale){
				if(sale.get('code') == this.currentSaleId) {
					sale.set('current', 'current');
				}
				else {
					sale.set('current', '');
				}
				return Templates['sales-menu-lite.hbs'](sale.attributes);
			}, this);

			this.$el.html(sales);
			this.initSlider();
			return this;
		},

		initSlider: function() {
			// make it slidable
			this.$el.slick({
				arrows: false,
				centerMode: true,
				centerPadding: '100px',
				infinite: false,
				slidesToShow: 3,
				variableWidth: true,
				swipeToSlide: true
			});

			// Center the current sale slide
			var currentIndex = 0;

			// get the index of the current slae slide
			var $currentSlide = this.$el.find('li[data-sale-code=' + this.currentSaleId + ']');

			if($currentSlide.length > 0) {
				currentIndex = $currentSlide.first().attr('data-slick-index');
			}
				this.$el.slick('slickGoTo', currentIndex, false);

				// enable slide up/down behavior
				this.$el.on('swipe', function(evt, slick, direction){

				if (direction == 'up') {
				  // show category nav and hide the sales nav

				} else if(direction == 'down'){
				}
			// ignore if it's swipe left or right
			});
		}
	});
});
define("menus/sales-menu-lite", function(){});

require(['jquery', 'underscore', 'backbone','menus/sales-menu-lite'], function($, _, Backbone) {
	MP.SaleDetailPageView = Backbone.View.extend({

		initialize: function(){
			// if( $('body.page-saledetail .product-filters').length > 0 ) {
			// 	new MP.SaleDetailTracking();
			// }
			new MP.ShopDirectory();
			Backbone.history.start();
			this.currentCategory = this.$('#category').val();

			// Sales data finished loading for the specific category
			MP.dispatcher.on('salesResponseReady', this.renderSaleMenu, this);
		},

		render: function(){
			var $saleCode = this.$('#sale-code');
			this.saleId = ($saleCode.length > 0) ? $saleCode.val() : null;

			// prepare the back level button with hash scroll point
			var $backLink = this.$('.show-sales-link a');
			var referrerPath = Utils.getReferrerPathname();
			var backLink = "";
			// either the referrerPath is empty or not sale list page
			if( _.isEmpty(referrerPath) || !(/\/sale\/((all)|(women)|(men)|(lifestyle)|(gourmet))/.test(referrerPath))){
				backLink = $backLink.attr('href')
			}
			else{
				backLink = referrerPath.startsWith('/') ? referrerPath : ("/" + referrerPath);
			}
			$backLink.attr('href', backLink + "#sale-" + this.saleId);
			return this;
		},

		initSaleMenu: function(category){
			var $salesMenu = this.$('#sales-nav');
			if(Utils.MediaQuery.isMobile()){
			new MP.SalesMenuLiteView({el: $salesMenu, collection: MP.CurrentSales[category], saleId: this.saleId}).render();
				MP.dispatcher.trigger('salesMenuRendered', category);
			}
		},

		renderSaleMenu: function(category) {
			// but you need to compare it to the currently enabled category sales
			if(category == this.currentCategory) {
				this.initSaleMenu(category);
			}
		}
	});
});

define("pages/sale-detail", function(){});

require(['jquery', 'underscore', 'backbone', '_utils'], function($, _, Backbone) {
	MP.BrandPageView = Backbone.View.extend({

		events: {
			'click .product-list--hasSeeMore .more-products': 'showAllImages',
			'click .genre-menu li a': 'switchGenreMenu'
		},

		initialize: function() {
			new MP.ShopDirectory();
			Backbone.history.start();
			MP.dispatcher.on('loginSuccess', this.gotoSaleLink, this);
			MP.dispatcher.on('signupSuccess', this.gotoSaleLink, this);
		},

		render: function() {
			// show the modal login as an in-page form
			if(!Utils.$body.hasClass('logged-in')) {
				var $quickLogin = this.$('#quicklogin')
				$quickLogin.removeClass('modal');
				$quickLogin.find('[name=formTrigger]').val('BrandInPage');
				// When the form is hidden, the modal form becmoes the inpage form again, so reset the form trigger
				$quickLogin.one('hidden', function(){
					$quickLogin.find('[name=formTrigger]').val('BrandInPage');
				});
			}
			// Don't show the "More" link if there's no more product images to show
			if (this.$('#product-list .lazy-loading').length <= 0) {
				this.$('.more-products').hide();
			}
			// init genre menu at the bottom
			new MP.BottomGenreMenu({el: '#current-sales'}).render();
			return this;
		},

		showAllImages: function(){
			// Handle lazy loading here of the Brand product list
			this.$('#product-list .lazy-loading').css('display', 'inline-block');
			this.$('.product-list--hasSeeMore .more-products').hide();
		},

		gotoSaleLink: function(opts) {
			if(typeof(this.clickedSaleLink) == 'undefined' ){
				this.clickedSaleLink = $(location).attr('href');
			}
			window.location = this.clickedSaleLink + "?token=" + opts.token;
		}
	});

});

define("pages/brand", function(){});

require(['jquery', 'underscore', 'backbone', '_utils'], function($, _, Backbone) {
	MP.CheckoutPaymentPageView = Backbone.View.extend({

		events: {
			'change #agreement-acceptance': 'toggleAgreement'
		},

		render: function() {
			if(this.$('input[name=paidy-selected]').val() === 'true'){
				this.loadPaidy();
			}
			// Check user acceptance agreement by default
			this.$('#agreement-acceptance').attr('checked', this.$('input[name=termsAccepted]').val() === 'true');
		},

		toggleAgreement: function(ev){
			this.$('input[name=termsAccepted]').val($(ev.target).attr('checked') === 'checked');
		},

		loadPaidy: function() {
			var script = document.createElement('script');
			var firstScriptTag = document.head || document.getElementsByTagName('head')[0];
			script.onload = function(){
				var isForm = false;
				var paidy = Paidy.configure({
					key: paidyApiAccessToken,
					logo_url: paidyCheckoutDialogLogoUrl,
					callback: function(data){
						$('#paidy-checkout-button').html('注文を確定中です').prop('disabled', 'disabled');
						$('#processing-dialog').fadeIn('600');
						$('#general-overlay').fadeIn('300');
						$('[name = paymentMethodMetadata]').val(data.payment_id);
						$('#checkoutSubmit').trigger('click');
						Utils.$window.on("beforeunload", function(ev) {
							if (!isForm) return '注文を確定中です。ブラウザを閉じないでください。';
							isForm = false;
						});
					}
				});
				$('#paidy-checkout-button').on('click', function(ev) {
					ev.preventDefault();
					var data = paidyAuthorizeRequestJson;
					paidy.launch(data);
				});
				$('form').on('submit', function() { isForm = true; });
				$('a').on('click', function() { isForm = false; });
			};
			script.src = "https://apps.paidy.com";
			script.async = true;
			firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
		}
	});
});

define("pages/checkout-payment-method", function(){});

require(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {

	MP.FieldValidation = {

		passwordValidator: new RegExp("^[\\x20-\\x7E]{6,20}$", "i"),
		emailValidator: new RegExp("[\\.a-z\\d\\!\\#\\$\\%\\*\\/\\?\\|\\^\\{\\}\\`\\~\\&\\'\\+\\-\\=\\_]+\\@[\\da-z]+([\\.-][\\da-z]+)*\\.[a-z]{2,6}$", "i"),
		dobYearValidator: new RegExp("^(19|20)[0-9][0-9]$"),
		dobMonthValidator: new RegExp("(^0?[1-9]$)|(^1[0-2]$)"),
		dobDayValidator: new RegExp("(^0?[1-9]$)|(^[1-2][0-9]$)|(^3[0-1]$)"),

		validateRequired: function(){
			var valid = true;
			var $requiredFields = this.$('[data-required]:not(.error):visible');
			var multipleChoices = [];
			$requiredFields.each(_.bind(function(index, req){
				var $req = $(req);
				if( ($req.prop('tagName') === "INPUT" && ($req.attr('type') === 'text' || $req.attr('type') === 'email') ) || $req.prop('tagName') === "TEXTAREA"){
					if(_.isEmpty($req.val()) )  {
						this.showValidation($req, $req.data('validation-message'));
						valid = false;
					}
				}
				if( $req.prop('tagName') === 'SELECT' ){
					if(_.isEmpty($req.val()) || _.isEmpty($req.children(':selected').text()) )  {
						this.showValidation($req.closest('.form-dropdown'), $req.data('validation-message'));
						valid = false;
					}
				}
				var name = $req.attr('name');
				if($req.prop('tagName') === "INPUT" && $req.attr('type') === 'radio' && !_.contains(multipleChoices, name) ){
					// so that it won't check the more than one of the same input multiple times
					// e.g. radio box has multiple inputs but only one selectable input
					multipleChoices.push(name);
					if(!(this.$('[name=' + name + ']:checked').val()) ){
						var $container = $req.closest('.validation-group');
						this.showValidation($container, $container.data('validation-message'));
						valid = false;
					}
				}
				if($req.prop('tagName') === 'INPUT' && $req.attr('type') === 'checkbox') {
					if($req.attr('checked') !== 'checked'){
						this.showValidation($req.closest('.checkbox'), $req.data('validation-message'));
						valid = false;
					}
				}
			}, this));
			return valid;
		},

		validateFormat: function(){
			var valid = true;
			var $fields = this.$('input[data-validation-format]:not(.error):visible');
			$fields.each(_.bind(function(index, field){
				var $field = $(field);
				switch($field.data('validation-format')){
					case 'katakana':
						if(!_.isEmpty($field.val()) && !$field.val().isFullWidthKatakana()){
							this.showValidation($field, $field.data('validation-message'));
							valid = false;
						}
						break;
					case 'creditcard':
						// match 16 digits
						if(!_.isEmpty($field.val()) && !($field.val().match(/^[0-9]{12,19}$/)) ){
							this.showValidation($field, $field.data('validation-message'));
							valid = false;
						}
						break;
					case 'email':
						if(!_.isEmpty($field.val()) && this.emailValidator.exec($field.val()) == null  ){
							this.showValidation($field, $field.data('validation-message'));
							valid = false;
						}
						break;
				}
			}, this));
			return valid;
		},

		validateLength: function(ev){
			var $target = ev ? this.$(ev.target) : this.$('[data-validation-maxlength]:not(.error):visible');
			if($target.length > 0){
				$target.removeClass('error');
				var maxLength = parseInt($target.data('validation-maxlength'));
				var minLength = parseInt($target.data('validation-minlength'));
				if( $target.val().length < minLength || $target.val().length > maxLength ){
					this.showValidLength($target, minLength, maxLength);
					return false;
				}
				return true;
			}
			return true;
		},

		validatePasswordConfirmation: function(){
			var $pwdConfirm = this.$('[data-validation-password-confirmation]');
			if($pwdConfirm.length > 0){
				var $pwdField = this.$($pwdConfirm.data('validation-password-confirmation'));
				if($pwdField.val() != $pwdConfirm.val()){
					this.showValidation($pwdConfirm, $pwdConfirm.attr('data-original-title'));
					return false;
				}
			}
			return true;
		},

		showValidLength: function($target, minLength, maxLength){
			var msg = "";
			if(minLength > 0){
				msg +=  minLength + "文字以上";
			}
			if(maxLength > 0){
				msg += maxLength + "文字以内";
			}
			msg += "で入力して下さい。";
			this.showValidation($target, msg);
		},

		validateYear: function(){
			this.hideValidation(this.$year);
			if(this.$year.val().length <= 0 || this.dobYearValidator.exec(this.$year.val()) == null){
				this.showValidation(this.$year);
				return false;
			}
			return true;
		},

		validateMonth: function(){
			this.hideValidation(this.$month);
			if(this.$month.val().length <= 0 || this.dobMonthValidator.exec(this.$month.val()) == null){
				this.showValidation(this.$month);
				return false;
			}
			return true;
		},

		validateDay: function(ev){
			this.hideValidation(this.$day);
			if(this.$day.val().length <= 0 || this.dobDayValidator.exec(this.$day.val()) == null){
				this.showValidation(this.$day);
				return false;
			}
			return true;
		},

		showValidation: function($elem, message){
			$elem.addClass('error');
			if(message){
				// look for which element and direction the message should be attached to
				var $attach = $elem, options = {};
				if($elem.data('message-attach')){
					$attach = $elem.prev($elem.data('message-attach'));
				}
				if($elem.data('message-placement')){
					options['placement'] = function(){ return $elem.data('message-placement')};
				}
				$attach.attr('title', message);
				$attach.tooltip(options);
				$attach.tooltip('show');
			}
		},

		hideValidation: function($elem){
			$elem.removeClass('error');
			$elem.tooltip('destroy');
		},

		validateForm: function(){
			this.hideValidation(this.$('.error'));
			var validRequired, validFormat, validLength = true;
			validRequired = this.validateRequired();
			validFormat = this.validateFormat();
			validLength = this.validateLength();
			return (validRequired && validFormat && validLength);
		}
	};
});
define("field-validation", function(){});

// Generated by CoffeeScript 1.7.1
(function($) {
  $.fn.autofilladdress = function(options) {
    var callback, currentValue, elements, fill, getAddress, getZip, handle, update;
    if (typeof options === 'function') {
      callback = options;
    } else {
      options = $.extend(true, {}, $.autofilladdress.defaults, options);
      callback = options.callback;
    }
    elements = this;
    currentValue = '';
    getZip = function() {
      var zip = '';
      elements.each(function(index, element) {
        zip += $(this).val();
        return true;
      });
      return zip;
    };
    handle = function() {
      var newValue;
      newValue = getZip();
      if (newValue === currentValue || newValue.length < 7) {
        return;
      }
      currentValue = newValue;
      return update();
    };
    update = function() {
      var zip;
      zip = getZip();
      callback = function(prefectureId, prefecture, municipality, subarea) {
        if (options.focusOnSuccess) {
          $(options.focusOnSuccess).focus();
        }
        return fill(prefectureId, prefecture, municipality, subarea);
      };
      return getAddress(zip, callback);
    };
    getAddress = function(zipcode, callback) {
      var url, zipcodePrefix;
      if (typeof zipcode === 'number') {
        zipcode = String(zipcode);
      }
      zipcode = $.trim(zipcode.replace('-', ''));
      zipcodePrefix = zipcode.substr(0, 3);
      url = options.path.replace('###', zipcodePrefix);
      return $.ajax(url, {
        dataType: 'json',
        success: function(data, textStatus, jqXHR) {
          var locationData, municipality, prefecture, prefectureId, subarea;
          locationData = data[zipcode];
          if (!locationData) {
            return;
          }
          prefectureId = locationData[0];
          prefecture = options.prefectures[prefectureId];
          municipality = locationData[1];
          subarea = locationData[2];
          if (callback) {
            return callback.call(null, prefectureId, prefecture, municipality, subarea);
          }
        }
      });
    };
    fill = function(prefectureId, prefecture, municipality, subarea) {
      if (!options.fill) {
        return;
      }
      if (options.fill.prefecture && $(options.fill.prefecture).length > 0) {
        if ($(options.fill.prefecture).find('option[value=' + prefectureId + ']').length > 0) {
          $(options.fill.prefecture).val(prefectureId);
        } else {
          $(options.fill.prefecture).val(prefecture);
        }
      }
      if (options.fill.municipality && $(options.fill.municipality).length > 0) {
        $(options.fill.municipality).val(municipality);
      }
      if (options.fill.subarea && (options.fill.subarea !== options.fill.municipality) && $(options.fill.subarea).length > 0) {
        return $(options.fill.subarea).val(subarea);
      } else if (options.fill.municipality === options.fill.subarea) {
        return $(options.fill.municipality).val(municipality + subarea);
      }
    };
    currentValue = getZip();
    this.on('keyup blur', handle);
    if (options.auto) {
      return update();
    }
  };
  $.autofilladdress = {
    defaults: {
      path: '###.json',
      prefectures: {
        1: '北海道',
        2: '青森県',
        3: '岩手県',
        4: '宮城県',
        5: '秋田県',
        6: '山形県',
        7: '福島県',
        8: '茨城県',
        9: '栃木県',
        10: '群馬県',
        11: '埼玉県',
        12: '千葉県',
        13: '東京都',
        14: '神奈川県',
        15: '新潟県',
        16: '富山県',
        17: '石川県',
        18: '福井県',
        19: '山梨県',
        20: '長野県',
        21: '岐阜県',
        22: '静岡県',
        23: '愛知県',
        24: '三重県',
        25: '滋賀県',
        26: '京都府',
        27: '大阪府',
        28: '兵庫県',
        29: '奈良県',
        30: '和歌山県',
        31: '鳥取県',
        32: '島根県',
        33: '岡山県',
        34: '広島県',
        35: '山口県',
        36: '徳島県',
        37: '香川県',
        38: '愛媛県',
        39: '高知県',
        40: '福岡県',
        41: '佐賀県',
        42: '長崎県',
        43: '熊本県',
        44: '大分県',
        45: '宮崎県',
        46: '鹿児島県',
        47: '沖縄県'
      }
    }
  };
  if (typeof define === 'function') {
    return define('jquery.autofilladdress', ['jquery'], function() {
      return $;
    });
  }
}).call(this, jQuery);

require(['jquery', 'underscore', 'backbone', 'field-validation', '_utils', 'jquery.autofilladdress'], function($, _, Backbone) {
	MP.AccountMailView = Backbone.View.extend({

		render: function() {
			// If the secondary email is empty, check the mail options by default
			if( _.isEmpty(this.$('#email2').val()) ){
				this.$('#cbEmail2Newsletter').attr('checked', true);
				this.$('#cbEmail2Transactions').attr('checked', true);
			}
			return this;
		}
	});

	MP.AccountInviteFriends = Backbone.View.extend({

		render: function(){
			// friends invitation tracking
			var $friendsInvited = this.$('#tellMoreFriends [name=invitationSuccess]');
			if( $friendsInvited.length > 0){
				if($friendsInvited.val() == 'true'){
					var emailLink = this.$('[name=anonymNewInvitationLink]').val();
					// _gaq.push(['_trackEvent', 'FriendsInvitation', 'EmailSent', emailLink]);
					// ga('send', 'event', 'FriendsInvitation', 'EmailSent', emailLink);
					MP.dispatcher.trigger('friendsInvited');
				}
			}

			this.$('.anonym-link').on('focus', function(){
				var emailLink = $(this).val();
				// _gaq.push(['_trackEvent', 'FriendsInvitation', 'LinkFocused', emailLink]);
				// ga('send', 'event', 'FriendsInvitation', 'LinkFocused', emailLink);
			});

			this.$('a.invitation-link').on('click', function(){
				// _gaq.push(['_trackEvent', 'Clicked elements', 'FriendsInvitationLink Clicked']);
				// ga('send', 'event', 'Clicked elements', 'FriendsInvitationLink Clicked');
			});

			if (Utils.MediaQuery.isTouchScreen()) {
				this.$('.autoselect').removeAttr("readonly");
			}
			else {
				this.$('.autoselect').on('click', function() {
					$(this).select();
				});
			}

			this.$('.invite-recipient').on({
				'focus': function(event) {
					var el;
					el = event.currentTarget;
					if (!$(el).data('placeholder')) {
						$(el).data('placeholder', el.value);
					}
					if (el.value.indexOf('. ') >= 0) {
						return el.value = '';
					}
				},
				'blur': function(event) {
					var el, placeholder, str;
					el = event.currentTarget;
					str = $.trim(el.value);
					if (!str.length || str.indexOf('. ') >= 0) {
						placeholder = $(el).data('placeholder');
						return el.value = placeholder || el.value;
					}
				}
			});
		}
	});

	MP.AccountChangePasswordView = Backbone.View.extend({
		events: {
			'click #submit-form': 'validateForm'
		},

		render: function(){
			this.$('input[type=password]').tooltip({ trigger: 'focus'});
		}
	});

	_.extend(MP.AccountChangePasswordView.prototype, MP.FieldValidation);

	MP.AccountPersonalDataView = Backbone.View.extend({
		events: {
			'click input#submit-form': 'validateForm'
		},

		render: function(){
			return this;
		}
	});

	_.extend(MP.AccountPersonalDataView.prototype, MP.FieldValidation);

	MP.PaymentFormView =  Backbone.View.extend({
		events: {
			'click input[name=checkoutSubmit]': 'validateForm'
		}
	});

	_.extend(MP.PaymentFormView.prototype, MP.FieldValidation);

	MP.AddressFormView = Backbone.View.extend({
		events: {
			'click input.submit-address': 'validateForm'
		},

		initialize: function(){
			$.autofilladdress.defaults.path = baseUrl + "/zipcodes/zip-###.json";
			var auto = $('#zip3').val() !== '' && $('#zip4').val() !== '' && $('#prefecture').val() === '' && $('#address1').val() === '';
			$('#zip3, #zip4').autofilladdress({
				auto: auto,
				fill: {
				prefecture: '#prefecture',
				municipality: '#address1',
				subarea: '#address1'
				},
				focusOnSuccess: '#address1'
			});
		}
	});

	_.extend(MP.AddressFormView.prototype, MP.FieldValidation);
});

define("pages/account", function(){});

require([
	'underscore',
	'jquery',
	'backbone'
	], function(_, $, Backbone) {

	// mixin object should have the following defined
	// this.$form
	// this.$error
	// The submit button should have '.action' in markup
	MP.ReturnPostRequest = {
		// this ajax request requies the API to return data.success
		submit: function(jsonData, cbSuccess, cbError){
			this.toggleLoading(true);
			$.ajax({
				type: this.$form.attr('method'),
				url: this.$form.attr('action'),
				data: JSON.stringify(jsonData),
				dataType: 'json',
				contentType: "application/json;charset=utf-8",
				processData: false,
				context: this,
				success: function (data) {
					if(data.success == true || data.success == 'true') {
						cbSuccess.call(this, data);
					}
					else {
						if(typeof(cbError) === 'function') { cbError.call(this, data); };
					}
					this.toggleLoading(false);
				},
				error: function(data) {
					this.toggleLoading(false);
					if(typeof(cbError) === 'function') {
						data.errors = "サーバーエラーが起こりました。しばらくたっても問題が解決されない場合は、カスタマーサポートにご連絡ください。詳細：" + data;
						cbError.call(this, data);
					};
					console.error('Server error occured in server during processing: ' + data);
				}
			});
		},

		// if show = true, disable any action buttons in the form
		toggleLoading: function(show){
			this.$overlay = this.$overlay || $('.return-overlay');
			var $buttons = this.$form.find('.action');
			$buttons.prop('disabled', show);
			this.$overlay.toggleClass('loading', show);
			Utils.scrollBodyTo(0, 1);
		}
	};

});
define("pages/returns/return-post-request", function(){});

require([
	'underscore',
	'jquery',
	'backbone',
	'templates',
	'pages/returns/return-post-request'
	], function(_, $, Backbone, Templates) {

	MP.ReturnItemView = Backbone.View.extend({
		REASON_OTHER_VALUE: 'other',
		events: {
			'change input.select-item': 'checkboxChanged',
			'click .return-details-ok': 'finalizeSelection',
			'click .return-details-cancel': 'undoSelection',
			'click .return-reason': 'toggleCSForm',
			'click .unreturnable-item-submit': 'submitCSForm',
			'click .unreturnable-item-cancel': 'undoSelection'
		},

		tagName: 'li',
		className: function(){
			return 'return-item ' + (this.model.get('returnable') ? "" : "unreturnable");
		},

		initialize: function(){
			this.selected = false;
			this.itemId = this.model.get('order-item-id');
			this.paymentType = this.model.get('pay-type').toLowerCase();

			// build the new array of obj for pledges
			this.pledges = _.map(MP.ReturnPledges, function(pledge){
				return _.extend(pledge, {'checked': ''});
			});
			this.reasons = _.map(MP.ReturnReasons, function(reason){
				return _.extend(reason, {'checked': ''});
			});

			this.listenTo(this.model, 'remove', this.transitionOut);
			this.listenTo(this.model, 'change:qty', this.render);
			this.listenTo(this, 'dataChanged', this.render, this);
		},

		render: function(){
			var qtyOpts = [];
			for(var i = 1; i < this.model.get('qty') + 1; i++){
				qtyOpts.push(i);
			}
			this.$el.html(Templates['returnable-item.hbs'](_.extend(this.model.attributes, {
				qtyOpts: qtyOpts,
				id: this.itemId,
				reasons: this.reasons,
				pledges: this.pledges
			})));

			this.$itemDetail = this.$('.return-item-detail-wrapper');
			this.$returnQty = this.$('select.return-item-quantity');
			this.$btnOK = this.$('.return-details-ok');

			return this;
		},

		checkboxChanged: function(){
			if(this.$('input.select-item:checked').length > 0){
				this.selectItem();
			}
			else {
				this.undoSelection();
			}
		},

		selectItem: function(){
			// don't respond if this item is selected in finalized mode
			if(!this.selected){
				// Select the product li
				if(!this.$itemDetail.hasClass("open")){
					this.toggleItemDetail(true);
				}
			}
		},

		finalizeSelection: function(){
			// remove the previous validation errors if any
			this.$el.removeClass('validation-errors');
			this.$('.error').removeClass('error');
			this.$('[title]').tooltip('destroy');
			var $label;
			if(!this.validateForm()){
				if(this.$('.return-detail-quantity .form-dropdown').hasClass('error')){
					$label = this.$('.return-detail-quantity h4');
					$label.addClass('error');
				}
				if(this.$('.return-reason-group').hasClass('error')){
					$label = this.$('.return-detail-reasons h4');
					$label.addClass('error');
				}
				if(this.$('.return-pledge-group').find('.error').length > 0){
					$label = this.$('.return-detail-pledges h4');
					$label.addClass('error');
					$label.tooltip({placement: 'right'});
					$label.tooltip('show');
				}
				// Adjust the screen position to show the errors
				Utils.scrollBodyTo(this.$el.offset().top);
			}
			else {
				// Select this item for return
				this.toggleSelected(true);

				this.toggleItemDetail(false, _.bind(function(){
					this.trigger('dataChanged');
					MP.dispatcher.trigger('returnItemSelected'); // after the item detail pane is closed refresh
					// Adjust the screen position
					// Only scroll repositioning on mobile device
					Utils.scrollBodyTo(this.$el.offset().top);
				}, this));
			}
		},

		toggleItemDetail: function(open, callback){
			MP.dispatcher.trigger('returnOverlay', open);
			open ? this.$itemDetail.slideDown(400, callback) : this.$itemDetail.slideUp(400, callback);
			this.$el.toggleClass("open", open);
		},

		undoSelection: function(noScroll){
			this.cleanOptions();
			this.toggleCSForm();
			this.toggleSelected(false);

			this.toggleItemDetail(false, _.bind(function(){
				this.trigger('dataChanged');
				MP.dispatcher.trigger('returnItemDeselected');
			}, this));
			//Adjust the screen position
			// Only scroll repositioning on mobile device
			if(typeof(noScroll) === 'undefined' || noScroll === false){
				Utils.scrollBodyTo(this.$el.offset().top);
			}
		},

		cleanOptions: function(){
			this.$('input:radio').attr('checked', false);
			this.$('input:checkbox').removeAttr('checked');
			this.$('textarea').val('');
			// remove all error messages if any
			this.$el.removeClass('validation-errors');
			this.$('.error').removeClass('error');
		},

		// set all the necessary properties
		toggleSelected: function(selected){
			this.selected = selected;
			// set pledges
			this.$('[id^="' + this.itemId + '-pledge-"]').each(_.bind(function(index, checkbox){
				var $checkbox = this.$(checkbox);
				this.pledges[index]['checked'] =  $checkbox.attr('checked');
			}, this));
			_.each(this.reasons, function(reason){
				reason.checked = this.$('input.return-reason[value=' + reason.value + ']').attr('checked');
			}, this);
			this.model.set('isSelected', selected);
			// set model values - don't do this before you can update the pledges and reasons because this triggers render method
			this.model.set('returnReasonText', this.getReturnReasonText());
			this.model.set('selectedReturnReason', this.getReturnReason());
			this.model.set('selectedQty', this.$returnQty.val());

			this.$el.toggleClass("return-selected", selected);
		},

		// show the CS form and hide pledges and actions if the 'other' option is checked
		toggleCSForm: function(){
			var otherChecked =  (this.getReturnReason() === this.REASON_OTHER_VALUE);
			this.$('.return-cs-form').toggle(otherChecked);
			this.$('.return-detail-pledges').toggle(!otherChecked);
			this.$('.return-detail-actions').toggle(!otherChecked);
		},

		submitCSForm: function(){
			this.$form = this.$('#form-returns-cs-' + this.itemId);
			this.$error = this.$form.find('.error-messages');
			if(this.validateForm()){
				// copy the item quantity to the form
				var qty = this.$returnQty.val();
				this.model.set('selectedQty', qty);
				this.$form.find('#return-item-quantity-' + this.itemId).val(qty);

				// return reason is always 'other' for CS request for now
				this.model.set('selectedReturnReason', this.REASON_OTHER_VALUE);
				this.model.set('returnReasonDesc', this.$('[name=unreturnalbe-item-description]').val());
				var returnItems  = this.getItemsToReturn();
				this.submit(
					{"items": returnItems},
					_.bind(function(data){
						this.undoSelection(true); // close the detail pane and clean up the div

						var remainingQty =  (this.model.get('qty') - returnItems.length);
						// if the return quantity is less than the original item quantity, just cancel and update the model qty
						var removeDiv = (remainingQty <= 0);
						if(!removeDiv){
							// update the remaining items
							this.model.set('qty',remainingQty);
							this.removeItemsReturned(returnItems);
						}

						// Determine if this model needs to be removed from the collection and show the
						MP.dispatcher.trigger('csRequestSubmissionSuccess', data['request-id'], removeDiv, this.model);
					}, this),
					_.bind(function(data){
						this.undoSelection();
						MP.dispatcher.trigger('returnsSubmissionsError', data.errors.join("\n"));
					}, this)
				);
			}
		},

		transitionOut: function(){
			this.remove();
		},

		getReturnReason: function(){
			return this.$("[name=return-reason-" + this.itemId + "]:checked").val();
		},

		getReturnReasonText: function(){
			var reason = _.find(this.reasons, function(reason){ return reason.checked == 'checked' });
			return reason ? reason.label : "";
		},

		isSelected: function(){
			return this.selected;
		},

		getPaymentType: function(){
			return this.paymentType;
		},

		// return an array of item hash
		getItemsToReturn: function(){
			var items = [];
			var qty = parseInt(this.model.get('selectedQty')) || 0;
			for(var i = 0; i < qty; i++){
				var item = {};
				item['orderItemPieceId'] = this.model.get('ids')[i];
				var reason = this.model.get('selectedReturnReason');
				item['reason'] = reason;
				item['reasonDescription'] = this.model.get('returnReasonDesc');
				items.push(item);
			}
			return items;
		},

		// itemsReturned is the return value of getItemsToReturn() methood
		removeItemsReturned: function(itemsReturned){
			var idsReturned = _.pluck(itemsReturned, 'orderItemPieceId');
			this.model.set('ids', _.difference(this.model.get('ids'), idsReturned));
		}
	});

	_.extend(MP.ReturnItemView.prototype, MP.FieldValidation, MP.ReturnPostRequest);
});




define("pages/returns/returnable-item", function(){});

require([
	'underscore',
	'jquery',
	'backbone',
	'templates',
	'_utils',
	'pages/returns/returnable-item',
	'pages/returns/return-post-request',
	], function(_, $, Backbone, Templates) {

	MP.ReturnsViewBase = Backbone.View.extend({
		initialize: function(opts){
			this.name = opts.name;
			this.updateMode('not-started');
			this.$contentMain = this.$('.section-content-main');
		},

		updateMode: function(mode){
			_.each(['not-started', 'editing', 'finalized'],_.bind(function(m){
				this.$el.toggleClass(m, (m == mode));
			}, this));
			this.mode = mode;
		},

		render: function(){
			return this;
		},

		// need to unset the max-height for the inner slider / message to work without overlapping
		show: function(){
			this.$contentMain.slideDown();
		},

		hide: function(){
			this.$contentMain.slideUp();
		},

		// send the options to send to next step
		// and the reference to edit button
		goToNextStep: function(opts, callback){
			// validation
			if(this.isValid()) {
				this.$el.removeClass('validation-errors');
				this.updateMode('finalized');
				MP.dispatcher.trigger('returnsStepNext', this.name, opts);
				this.runPostSuccess();
				if(typeof(callback) === 'function'){
					callback.call(this);
				}
			}
			else {
				this.$el.addClass('validation-errors');
				Utils.scrollBodyTo(this.$el.offset().top);
			}
		},

		editStep: function(){
			MP.dispatcher.trigger('returnsEditStep', this.name);
			this.updateMode('editing');
			this.show();
		},

		getMode: function(){
			return this.mode;
		}
	});


	MP.ReturnsItemSelectionView = MP.ReturnsViewBase.extend({

		events: {
			'click .action-next': 'proceed',
			'click #edit-return-products': 'editStep'
		},

		initialize: function(opts){
			MP.ReturnsViewBase.prototype.initialize.call(this, opts);

			MP.dispatcher.on('returnItemSelected', this.prodSelectionChanged, this);
			MP.dispatcher.on('returnItemDeselected', this.prodSelectionChanged, this);

			this.returnItemViews = [];
			this.itemSelected = false;
		},

		render: function(){
			if(this.collection.length > 0){
				this.$('.section-content-main ul').html(this.collection.map(function(item){
					var itemView = new MP.ReturnItemView({model: item}).render();
					this.returnItemViews.push(itemView);
					return itemView.el;
				}, this));
			}
			else {
				this.$('.section-content-main ul').html(Templates['return-no-item.hbs']());
			}
			this.updateMode('editing');
			this.$actionFooter = this.$('footer');
			this.$actionContainer = this.$actionFooter.find('.action-container');
			this.prodSelectionChanged();
			return this;
		},

		prodSelectionChanged: function(){
			// if at least one product is selected, show next button
			this.itemSelected = _.some(this.returnItemViews, function(item){
				return item.isSelected();
			});
			this.$btnNext = this.$btnNext || this.$('.action-next');
			this.$btnNext.toggleClass('hidden', !this.itemSelected)

			if(this.itemSelected && this.mode === 'editing'){
				// if the button locates below the viewport bottom, change to float
				Utils.$window.off('scroll.item-selected').on('scroll.item-selected', _.debounce(_.bind(function(){
					this.$actionContainer.css('left', this.$contentMain.offset().left);
					this.$actionContainer.css('width', this.$contentMain.outerWidth(true));
					this.$actionContainer.toggleClass('floating-footer', this.$actionFooter.offset().top > Utils.windowScrollBottom());
				}, this), 250));
			}
		},

		proceed: function(){
			var paymentTypes = _.uniq(_.compact(
				_.map(this.returnItemViews, function(item){
					if(item.isSelected()){
						return item.getPaymentType();
					}
				})
			));
			this.goToNextStep(paymentTypes);
			Utils.$window.off('scroll.item-selected'); // remove any window scroll event
		},

		isValid: function(){
			return this.itemSelected;
		},

		runPostSuccess: function(){
			this.buildItemsToReturn();
		},

		// Create a json data for submitting the form
		buildItemsToReturn: function(){
			var items = [];
			_.each(this.returnItemViews, function(riv){
				if(riv.isSelected()){
					items = _.union(items, riv.getItemsToReturn());
				}
			});
			// TODO this part goes into the result data as "items":
			MP.dispatcher.trigger('returnItemsReady', items);
		}
	});


	MP.ReturnsPaymentInfoView = MP.ReturnsViewBase.extend({
		events: {
			'click .action-next': 'proceed',
			'click #edit-return-bankinfo': 'editStep'
		},

		initialize: function(opts){
			MP.ReturnsViewBase.prototype.initialize.call(this, opts);
			MP.dispatcher.on('returnsEditStep', this.editClicked, this);
			this.$bankForm = this.$('.form-bankinfo');
		},

		show: function(paymentTypes){
			this.paymentTypes =  paymentTypes || this.paymentTypes;
			// hide/show the payment methods based on the user's item selection
			_.each(["cc", "cod", "paidy","paypal"], _.bind(function(type){
				this.$('.payment-type-' + type).toggleClass('payment-type-selected', _.contains(this.paymentTypes, type));
			}, this));

			this.updateMode('editing');
			MP.ReturnsViewBase.prototype.show.call(this);
		},

		proceed: function(){
			MP.ReturnsViewBase.prototype.goToNextStep.call(this, this.paymentTypes, this.displayBankInfo);
			this.$('.action-edit').toggleClass('hidden', !_.contains(this.paymentTypes, 'cod'));
		},

		// Display the bank information in the read-only format
		displayBankInfo: function(){
			if(_.contains(this.paymentTypes, 'cod')){
				var $display = this.$('.display-bankinfo');
				$display.find('.name').text(this.$bankForm.find('[name=name]').val());
				$display.find('.branch').text(this.$bankForm.find('[name=branch]').val());
				$display.find('.account_type').text(this.$bankForm.find('[name=account_type]:checked').parent().text());
				$display.find('.account_no').text(this.$bankForm.find('[name=account_no]').val());
				$display.find('.account_owner').text(this.$bankForm.find('[name=account_owner]').val());
			}
		},

		isValid: function(){
			// Validate check the bank info only if the cod is selected
			if(_.contains(this.paymentTypes, 'cod')){
				return this.validateForm();
			}
			return true;
		},

		saveBankInfo: function(){
			var bankInfo = {};
			bankInfo['bank'] = this.$bankForm.find('[name=name]').val();
			bankInfo['bankBranch'] = this.$bankForm.find('[name=branch]').val();
			bankInfo['bankAccountType'] = this.$bankForm.find('[name=account_type]:checked').val();
			bankInfo['bankAccountNumber'] = this.$bankForm.find('[name=account_no]').val();
			bankInfo['bankAccountName'] = this.$bankForm.find('[name=account_owner]').val();

			MP.dispatcher.trigger('returnRepaymentInfoReady', bankInfo);
		},

		editClicked: function(stepName){
			if(stepName != this.name){
				this.hide();
			}
		},

		runPostSuccess: function(){
			if(_.contains(this.paymentTypes, "cod")){
				this.saveBankInfo();
			}
		}
	});

	_.extend(MP.ReturnsPaymentInfoView.prototype, MP.FieldValidation);


	MP.ReturnsConfirmationView = MP.ReturnsViewBase.extend({
		events: {
			'click #return-submit': 'submitReturn'
		},

		initialize: function(opts){
			MP.ReturnsViewBase.prototype.initialize.call(this, opts);
			MP.dispatcher.on('returnsEditStep', this.hide, this);
			MP.dispatcher.on('returnItemsReady', this.setReturnItems, this);
			MP.dispatcher.on('returnRepaymentInfoReady', this.setRepaymentInfo, this);
			this.finalData = {};
		},

		show: function(paymentTypes){
			this.updateMode('editing');
			MP.ReturnsViewBase.prototype.show.call(this);
		},

		setReturnItems: function(dataItems){
			this.finalData['items'] = dataItems;
		},

		setRepaymentInfo: function(dataBankInfo){
			this.finalData = _.extend(this.finalData, dataBankInfo);
		},

		submitReturn: function(evt){
			evt.preventDefault();
			this.$form = this.$('#form-submit-return');
			MP.dispatcher.trigger('returnsBeforeSubmission');
			this.submit(
				this.finalData,
				_.bind(function(data){
					var shippingLabel = "/account/returnLabel/" + data['request-id'];
					MP.dispatcher.trigger('returnsSubmissionSuccess', data['request-external-id'], shippingLabel);
				}, this),
				_.bind(function(data){
					MP.dispatcher.trigger('returnsSubmissionsError', data.errors.join("\n"));
				}, this)
			);
		}
	});

	_.extend(MP.ReturnsConfirmationView.prototype, MP.ReturnPostRequest);

});
define("pages/returns/return-steps", function(){});

// return-label.js

require([
	'underscore',
	'jquery',
	'backbone',
	], function(_, $, Backbone) {

	MP.ReturnLabel = {
		openReturnLabelWindow: function(url){
			var top = Utils.$window.height() / 2;
			var left = Utils.$window.width() / 2;
			window.open(
				url,
				'_blank',
				'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes' +
				',top=' + top + ',left=' + left
			);
		}
	};
});
define("pages/returns/return-label", function(){});

require([
	'underscore',
	'jquery',
	'backbone',
	'templates',
	'pages/returns/return-steps',
	'pages/returns/return-label'
	], function(_, $, Backbone, Templates) {

	MP.AccountReturnView = Backbone.View.extend({

		events: {
			'click #return-slip': 'openReturnLabel'
		},

		initialize: function(){
			Utils.scrollBodyTo(0, 0); // always scroll to top when refreshed
			MP.dispatcher.on('returnOverlay', this.toggleOverlay, this);
			MP.dispatcher.on('returnsStepNext', this.showNextStep, this);
			MP.dispatcher.on('returnsEditStep', this.editClicked, this);
			MP.dispatcher.on('returnsBeforeSubmission', this.hideErrors, this);
			MP.dispatcher.on('returnsSubmissionSuccess', this.postSubmission, this);
			MP.dispatcher.on('returnsSubmissionsError', this.showErrors, this);
			MP.dispatcher.on('csRequestSubmissionSuccess', this.postCsSubmission, this);
			this.lastStepVisited = false;
		},

		render: function(){
			// Hide/ show the return diagram section based on the screen size
			if(Utils.MediaQuery.isMobile()){
				this.$('.return-header-accordion .border-header').hide();
				this.$('.return-header-accordion').accordion();
			}
			else{
				this.$('.return-header-accordion .accordion-header').hide();
				this.$('.return-header-accordion .accordion-body').removeClass('height-transition-hidden');
			}

			if(this.$('#return-before-submission:visible').length > 0){
				// fetch the return items
				new MP.ReturnItems().fetch({
					success: _.bind(function(collection){
						this.collection = collection;
						this.itemSelectionView = new MP.ReturnsItemSelectionView({el: '#return-products', name: 'itemSelection', collection: this.collection}).render();
						this.PaymentInfoView = new MP.ReturnsPaymentInfoView({el: '#return-paymentinfo', name: 'paymentInfo'}).render();
						this.confirmationView = new MP.ReturnsConfirmationView({el: '#return-confirmation', name: 'confirmation'}).render();
						this.$overlay = this.$('.return-overlay');
						this.$csModal = this.$('.modal-cs-request');
					}, this),
					error: _.find(function(data){
						console.log('Server Error occurred:');
					}, this)
				}).always(_.bind(function(){
					this.$('.item-loading').addClass('hidden');
					this.$('.item-loaded').removeClass('hidden');
				}, this));
			}
		},

		toggleOverlay: function(modalOn){
			this.$overlay.toggleClass('modal-on', modalOn);
		},

		showNextStep: function(stepName, opts){
			if(stepName === 'itemSelection'){
				this.paymentTypes = opts;
				this.PaymentInfoView.show(opts);
				this.$el.removeClass('finished'); // if this step is changed, it gets reset.
				this.toggleEditMode(true);
			}
			if(stepName === 'paymentInfo'){
				$.when(this.PaymentInfoView.updateMode('finalized')).done(_.bind(function(){
					this.confirmationView.show(this.paymentTypes);
					// '.finished' keeps track of if the user has already been to confirmation step
					this.lastStepVisited = true;
					this.$el.addClass('finished');
					this.toggleEditMode(false);
				}, this));
			}
		},

		editClicked: function(){
			this.toggleEditMode(true);
		},

		// if any of the step is being edited, keep on
		toggleEditMode: function(on){
			this.$el.toggleClass('in-edit', on);
		},

		showErrors: function(strErrors){
			this.toggleErrors(strErrors, true);
		},

		hideErrors: function(){
			this.toggleErrors(null, false);
		},

		toggleErrors: function(strErrors, show){
			this.$errorMessages = this.$errorMessages || this.$('.error-messages');
			if(show){
				this.$errorMessages.html(strErrors);
				this.$errorMessages.removeClass('hidden');
			}
			else {
				this.$errorMessages.addClass('hidden');
			}
		},

		postSubmission: function(requestId, shippingSlipUrl){
			this.$('#return-before-submission').hide();
			// show the request no.
			var $postView = this.$('#return-after-submission');
			$postView.find('#return-request-id').html(requestId);
			$postView.find('#return-slip').attr('href', shippingSlipUrl);
			// hide/show the payment methods based on the user's item selection
			_.each(["cc", "cod", "paidy","paypal"], _.bind(function(type){
				$postView.find('.payment-type-' + type).toggleClass('payment-type-selected', _.contains(this.paymentTypes, type));
			}, this));

			$postView.show();
		},

		postCsSubmission: function(requestId, remove, model){
			// in the case of CS submission, the overlay is still covering the page for selecting the item product
			// so we need to remove this first
			this.toggleOverlay(false);

			// render the newly submitted request ID
			this.$csModal.find('[name=return-request-id]').html(requestId);

			// Hook the event handler when the CSModal dialog is closed
			if(remove){
				this.$csModal.one('hidden', _.bind(function(){
					this.collection.remove(model);
					if(this.collection.length <= 0){
						Utils.reloadWindow();
					}
				}, this));
			}

			this.$csModal.modal('show');
		},

		openReturnLabel: function(ev){
			ev.preventDefault();
			this.openReturnLabelWindow(this.$(ev.target).attr('href'));
		}
	});

	_.extend(MP.AccountReturnView.prototype, MP.ReturnLabel);

});




define("pages/account-returns", function(){});

require([
	'underscore',
	'jquery',
	'backbone',
	'templates',
	'pages/returns/return-post-request'
	], function(_, $, Backbone, Templates) {

	MP.ReturnRequestItemView = Backbone.View.extend({
		tagName: 'li',
		className: 'return-request-item',

		events: {
			"click .shipping-label": "openShippingLabel",
			"click .action-cancel": "cancelReturn",
			"click .header-request:not(.status-active)": 'toggleDetail'
		},

		initialize: function(){
			this.listenTo(this.model, 'change', this.render);
			this.requestId = this.model.get('request-id');
		},

		render: function(){
			// TODO: Classify all the possible request status
			var statusClass, isClosed, isReasonOther, status = this.model.get('status');
			if(_.contains(['requested', 'received', 'inspected', 'reimburse_failed', 'reimburse_pending'], status)){
				statusClass = 'active';
				isClosed = false;
			}
			else {
				statusClass = 'closed';
				isClosed = true;
			}
			// assuming only one item can be filed at a time with the reason 'other'
			isReasonOther = this.model.get('items')[0].reason === 'other';
			this.$el.html(Templates['return-request-item.hbs'](
					_.extend(this.model.attributes, {activeStatusClass: statusClass, isClosed: isClosed, isReasonOther: isReasonOther})
				)
			);
			this.$itemDetail = this.$('.request-item-detail');
			return this;
		},

		toggleDetail: function(){
			if(this.$itemDetail.is(':visible')){
				this.$itemDetail.slideUp();
			}
			else{
				this.$itemDetail.slideDown();
			}
		},

		openShippingLabel: function(evt){
			evt.preventDefault();
			MP.dispatcher.trigger('shippingLabelOpen', this.$(evt.target).attr('href'));
		},

		cancelReturn: function(){
			MP.dispatcher.once('returnCancelConfirmed', function(answer){
				if(answer){
					this.$form = this.$('.form-cancel-request');
					this.$submitButton = this.$('.action-cancel');
					this.$error = this.$('error'); // TODO how do you want to display the error??
					this.submit(
						{ "orderReturnRequestId" : this.requestId },
						_.bind(function(data){
							// on success:
							var data = {}; data.status = 'cancelled';
							data['status-name'] = 'キャンセル';
							data.cancelable = false;

							this.model.set('status-name',data['status-name']);
							this.model.set('cancelable', data.cancelable);
							this.model.set('status',data.status);
						}, this),
						_.bind(function(data){
							MP.dispatcher.trigger('showGrowlMessage', data.errors.join("\n"));
						})
					);
				}
			}, this);
			MP.dispatcher.trigger('returnCancelDialogOpen');
		}
	});

	_.extend(MP.ReturnRequestItemView.prototype, MP.ReturnPostRequest);

});




define("pages/returns/return-request-item", function(){});

//return-cancel-dialog.js

require([
	'underscore',
	'jquery',
	'backbone',
	'templates'
	], function(_, $, Backbone, Templates) {

	MP.ReturnCancelDialog = Backbone.View.extend({
		events: {
			'click .cancel-ok': 'confirmYes',
			'click .cancel-cancel': 'confirmNo'
		},

		initialize: function(){
			this.initialized = false;
			MP.dispatcher.on('returnCancelDialogOpen', this.show, this);
		},

		render: function(){
			return this;
		},

		show: function(){
			if(this.initialized == false){
				this.$el.modal({
					backdrop: 'static',
					keyboard: false
				});
				this.initialized = true;
			}
			else {
				this.$el.modal('show');
			}

		},

		hide: function(){
			this.$el.modal('hide');
		},

		confirmYes: function(){
			MP.dispatcher.trigger("returnCancelConfirmed", true);
			this.hide();
		},

		confirmNo: function(){
			MP.dispatcher.trigger("returnCancelConfirmed", false);
			this.hide();
		}
	});
});




define("pages/returns/return-cancel-dialog", function(){});

//return-request.js

require(['jquery', 'underscore', 'backbone'
], function($, _, Backbone){

	MP.ReturnRequest = Backbone.Model.extend({});

	MP.ReturnRequests = Backbone.Collection.extend({

		model: MP.ReturnRequest,

		url: function() {
			return '/json/returnrequests';
		},

		parse: function(response){
			return response.requests;
		}
	});

});
define("models/return-request", function(){});

// pagination.js

require(['jquery', 'underscore', 'backbone', 'templates', '_global'], function($, _, Backbone, Templates) {
	// Accepts items as collection
	MP.Components.PaginationView = Backbone.View.extend({
		events: {
			'click #paging-prev:not(:disabled)': "prevClicked",
			'click #paging-next:not(:disabled)': "nextClicked",
			'click .paging': "pageClicked"
		},

		initialize: function(opts){
			this.numPerPage = opts.num;
			this.resetScrollPointId = opts.resetScrollPointId;
			this.prevEnabled = false;
			this.nextEnabled = true;
		},

		// accepts count and page in opts
		render: function(opts){
			this.totalItemCount = opts.count;
			this.numOfPages = Math.floor(this.totalItemCount / this.numPerPage) + 1;
			if(this.numOfPages > 1){
				this.currentPage = opts.page;
				this.pages = [];
				for(var n = 1; n <= this.numOfPages; n++){
					this.pages.push({
						num: n,
						isCurrent: (n == this.currentPage)
					});
				};
				this.$el.html(Templates['pagination.hbs']({
					pages: this.pages,
					resetScrollPointId: this.resetScrollPointId,
					prevEnabled: this.currentPage != 1,
					nextEnabled: this.currentPage != this.numOfPages
				}));
			}
			return this;
		},

		pageClicked: function(evt){
			var page = this.$(evt.target).data('page');
			MP.dispatcher.trigger('goToPage', {page: page});
		},

		prevClicked: function(){
			var page = this.currentPage -1;
			MP.dispatcher.trigger('goToPage', {page: page});
		},

		nextClicked: function(){
			var page = this.currentPage + 1;
			MP.dispatcher.trigger('goToPage', {page: page});
		}

	});
});

define("components/pagination", function(){});

//return-request-history.js

require([
	'underscore',
	'jquery',
	'backbone',
	'templates',
	'pages/returns/return-request-item',
	'pages/returns/return-cancel-dialog',
	'models/return-request',
	'components/pagination'
	], function(_, $, Backbone, Templates) {

	MP.AccountReturnHistoryView = Backbone.View.extend({
		MAX_ITEMS: 10,

		initialize: function(){
			MP.dispatcher.on('shippingLabelOpen', this.openReturnLabelWindow, this);
			MP.dispatcher.on('goToPage', this.render, this);
			this.returnCancelDiaglogView = new MP.ReturnCancelDialog({el: '.modal-cancel-request'});
			this.paginationView = new MP.Components.PaginationView({
				el: '.page-navigation',
				num: this.MAX_ITEMS,
				resetScrollPointId: 'return-request-list'
			});
			this.views = [];
		},

		render: function(opts){
			// clean all the views at once
			if(this.views.length > 0){
				_.each(this.views, function(view){
					view.remove();
				});
			}
			this.collection = this.collection || new MP.ReturnRequests();
			this.collection.fetch({
				data: {
					page: opts.page,
					num: this.MAX_ITEMS
				},
				success: _.bind(function(items, response){
					var total = response.total;
					if(items.length > 0){
						// get the cancel dialog ready
						this.returnCancelDiaglogView.render();

						// render request items
						this.$('#return-requests ul').html(items.map(function(item){
							var itemView = new MP.ReturnRequestItemView({model: item}).render();
							this.views.push(itemView);
							return itemView.el;
						}, this));

						// render pagination
						this.paginationView.render({count: total, page: opts.page});
					}
					else {
						this.$('#return-requests ul').html(Templates['return-no-request.hbs']());
					}
				}, this),
				error: function(){
					this.$('#return-requests ul').html(Templates['return-server-error.hbs']());
				}
			}).always(_.bind(function(){
				this.$('.item-loading').addClass('hidden');
				this.$('.item-loaded').removeClass('hidden');
			}, this));
			return this;
		}
	});

	_.extend(MP.AccountReturnHistoryView.prototype, MP.ReturnLabel);

});

define("pages/account-returnhistory", function(){});

require(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	MP.CampaignPageView = Backbone.View.extend({

		events: {
			"click a[data-sale-code]" : "saleBannerClicked"
		},

		initialize: function() {
			MP.dispatcher.on('loginSuccess', this.gotoSaleLink, this);
			MP.dispatcher.on('signupSuccess', this.gotoSaleLink, this);

			// we do this way to call so that sale impression tracking can be decoupled
			// by just not extending the tracker object
			this.listenTo(this, 'saleBannerClicked', this.trackSaleBannerClick);
		},

		render: function() {

			return this;
		},

		showQuickLogin: function(ev) {
			ev.preventDefault();
			this.clickedSaleLink = this.$(ev.target).closest('a').attr('href');
			MP.dispatcher.trigger('quickLoginOpen', 'signup', 'ClosedSale - Campaign Page');
		},

		gotoSaleLink: function(opts) {
			if(typeof(this.clickedSaleLink) == 'undefined' ){
				this.clickedSaleLink = $(location).attr('href');
			}
			window.location = this.clickedSaleLink + "?token=" + opts.token;
		}
	});
});

define("pages/campaign", function(){});

// Generated by CoffeeScript 1.7.1
(function($) {
  var Dropdown, closeAll, openedDropdowns;
  openedDropdowns = [];

  Dropdown = function(element, options){
    var obj = {};
    obj.options =  {
      animate: false,
      closeOnScroll: true
    };
    obj.$elem = $(element);

    $.extend(obj, {
      _create: function() {
        var target;
        target = this.$elem.data('target') || this.$elem.attr('href');
        this.paneEl = $(target);
        this.$elem.on('click.dropdown touchstart.dropdown', $.proxy(this.toggle, this));
        this.paneEl.on('click.dropdown touchstart.dropdown', function(event) {
          return event.stopPropagation();
        });

        // if (this.options.closeOnScroll) {
        //   $(window).on('scroll.dropdown', $.proxy(this.close, this));
        // }
      },
      toggle: function(event) {
        if (event) {
          event.stopPropagation();
          event.preventDefault();
        }
        if (this.$elem.hasClass('open')) {
          this.close();
        } else {
          this.open();
        }
      },
      open: function() {
        if (this.isOpen) {
          return;
        }
        //closeAll();
        openedDropdowns.push(this);
        this.isOpen = true;
        this.$elem.addClass('open');
        this.paneEl.addClass('open');
        this.paneEl.animate({
          height: 'show'
        });
        // if (!this.options.animate) {
        //   this.paneEl.show();
        // } else {
        //   this.paneEl.stop().show().css({
        //     top: 0,
        //     opacity: 0
        //   }).animate({
        //     top: '100%',
        //     opacity: 1
        //   }, 100);
        // }
      },
      close: function() {
        if (!this.isOpen) {
          return;
        }
        this.isOpen = false;
        this.$elem.removeClass('open');
        this.paneEl.removeClass('open');
        this.paneEl.animate({
          height: 'hide'
        });
      },
      destroy: function() {
        $('html').off('.dropdown');
        this.$elem.off('.dropdown');
        this.paneEl.off('.dropdown');
        $(window).off('.dropdown');
      }
    });

    var api = null;
    api = obj.$elem.data("dropdown");
    if (api) {
      return api[options]();
    }
    else {
      obj._create();
    }

    obj.$elem.data("dropdown", obj);
  };

  closeAll = function(event) {
    var dropdown, _i, _len;
    for (_i = 0, _len = openedDropdowns.length; _i < _len; _i++) {
      dropdown = openedDropdowns[_i];
      dropdown.close();
    }
  };
  //$('html').on('click.dropdown touchstart.dropdown', closeAll);
  //$.widget('nckh.dropdown', Dropdown);
  $.fn.dropdown = function(options) {
    return this.each(function(index, element) {
      return Dropdown(element, options);
    });
  };
  if (typeof define === 'function') {
    return define('jquery.dropdown', ['jquery'], function() {
      return $;
    });
  }
}).call(this, jQuery);

/*jshint eqnull:true */
/*!
 * jQuery Cookie Plugin v1.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function($, document) {

	var pluses = /\+/g;
	function raw(s) {
		return s;
	}
	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	$.cookie = function(key, value, options) {
		// key and at least value given, set cookie...
		if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value == null)) {
			options = $.extend({}, $.cookie.defaults, options);

			if (value == null) {
				options.expires = -1;
			}

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = String(value);

			return (document.cookie = [
				encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// key and possibly options given, get cookie...
		options = value || $.cookie.defaults || {};
		var decode = options.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		for (var i = 0, parts; (parts = cookies[i] && cookies[i].split('=')); i++) {
			if (decode(parts.shift()) === key) {
				return decode(parts.join('='));
			}
		}
		return null;
	};

	$.cookie.defaults = {};

})(jQuery, document);

define("jquery.cookie", function(){});

(function($){

    $.session = {

        _id: null,

        _cookieCache: undefined,

        _init: function()
        {
            if (!window.name) {
                window.name = Math.random();
            }
            this._id = window.name;
            this._initCache();

            // See if we've changed protcols

            var matches = (new RegExp(this._generatePrefix() + "=([^;]+);")).exec(document.cookie);
            if (matches && document.location.protocol !== matches[1]) {
               this._clearSession();
               for (var key in this._cookieCache) {
                   try {
                   window.sessionStorage.setItem(key, this._cookieCache[key]);
                   } catch (e) {};
               }
            }

            document.cookie = this._generatePrefix() + "=" + document.location.protocol + ';path=/;expires=' + (new Date((new Date).getTime() + 120000)).toUTCString();

        },

        _generatePrefix: function()
        {
            return '__session:' + this._id + ':';
        },

        _initCache: function()
        {
            var cookies = document.cookie.split(';');
            this._cookieCache = {};
            for (var i in cookies) {
                if(typeof(cookies[i]) !== 'function'){
                    var kv = cookies[i].split('=');
                    if ((new RegExp(this._generatePrefix() + '.+')).test(kv[0]) && kv[1]) {
                        this._cookieCache[kv[0].split(':', 3)[2]] = kv[1];
                    }
                }
            }
        },

        _setFallback: function(key, value, onceOnly)
        {
            var cookie = this._generatePrefix() + key + "=" + value + "; path=/";
            if (onceOnly) {
                if( $('html').hasClass('ie8') ){
                    cookie += "; expires=" + new Date();
                }
                else{
                    cookie += "; expires=" + (new Date(Date.now() + 120000)).toUTCString();
                }
            }
            document.cookie = cookie;
            this._cookieCache[key] = value;
            return this;
        },

        _getFallback: function(key)
        {
            if (!this._cookieCache) {
                this._initCache();
            }
            return this._cookieCache[key];
        },

        _clearFallback: function()
        {
            for (var i in this._cookieCache) {
                document.cookie = this._generatePrefix() + i + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            }
            this._cookieCache = {};
        },

        _deleteFallback: function(key)
        {
            document.cookie = this._generatePrefix() + key + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            delete this._cookieCache[key];
        },

        _purgeFallback: function(key){
            document.cookie = key + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            delete this._cookieCache[key];
        },

        get: function(key)
        {
            return window.sessionStorage.getItem(key) || this._getFallback(key);
        },

        set: function(key, value, onceOnly)
        {
            try {
                window.sessionStorage.setItem(key, value);
            } catch (e) {}
            this._setFallback(key, value, onceOnly || false);
            return this;
        },

        'delete': function(key){
            return this.remove(key);
        },

        remove: function(key)
        {
            try {
            window.sessionStorage.removeItem(key);
            } catch (e) {};
            this._deleteFallback(key);
            return this;
        },

        _clearSession: function()
        {
          try {
                window.sessionStorage.clear();
            } catch (e) {
                for (var i in window.sessionStorage) {
                    window.sessionStorage.removeItem(i);
                }
            }
        },

        clear: function()
        {
            this._clearSession();
            this._clearFallback();
            return this;
        },

        purge: function(key){
            try {
            window.sessionStorage.removeItem(key);
            } catch (e) {};
            this._purgeFallback(key);
            return this;
        },

        // delete all cookies that the key matches the expression
        purgeAll: function(match, exclude)
        {
            var cookies = document.cookie.split(';');
            for (var i in cookies) {
                if(typeof(cookies[i]) !== 'function'){
                    var kv = cookies[i].split('=');
                    if ( new RegExp(match).test(kv[0]) && !(new RegExp(exclude).test(kv[0])) ) {
                        this.purge(kv[0]);
                    }
                }
            }
        }

    };

    $.session._init();

})(jQuery);
define("jquery.session", function(){});

// Generated by CoffeeScript 1.6.3
/*
jQuery Growl
Copyright 2013 Kevin Sylvestre
1.2.4
*/


(function() {
  
  var $, Animation, Growl,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  $ = jQuery;

  Animation = (function() {
    function Animation() {}

    Animation.transitions = {
      "webkitTransition": "webkitTransitionEnd",
      "mozTransition": "mozTransitionEnd",
      "oTransition": "oTransitionEnd",
      "transition": "transitionend"
    };

    Animation.transition = function($el) {
      var el, result, type, _ref;
      el = $el[0];
      _ref = this.transitions;
      for (type in _ref) {
        result = _ref[type];
        if (el.style[type] != null) {
          return result;
        }
      }
    };

    return Animation;

  })();

  Growl = (function() {
    Growl.settings = {
      namespace: 'growl',
      duration: 3200,
      close: "&#215;",
      location: "default",
      style: "default",
      size: "medium"
    };

    Growl.growl = function(settings) {
      if (settings == null) {
        settings = {};
      }
      this.initialize(settings['container']);
      return new Growl(settings);
    };

    Growl.initialize = function(container) {
      var parent;
      if(container){
        parent = $(container + ":not(:has(#growls))")
      }
      else{
        parent = $("body:not(:has(#growls))")
      }
      return parent.append('<div id="growls" />');
    };

    function Growl(settings) {
      if (settings == null) {
        settings = {};
      }
      this.html = __bind(this.html, this);
      this.$growl = __bind(this.$growl, this);
      this.$growls = __bind(this.$growls, this);
      this.container = __bind(this.container ,this);
      this.animate = __bind(this.animate, this);
      this.remove = __bind(this.remove, this);
      this.dismiss = __bind(this.dismiss, this);
      this.present = __bind(this.present, this);
      this.cycle = __bind(this.cycle, this);
      this.close = __bind(this.close, this);
      this.unbind = __bind(this.unbind, this);
      this.bind = __bind(this.bind, this);
      this.render = __bind(this.render, this);
      this.settings = $.extend({}, Growl.settings, settings);
      this.$growls().attr('class', this.settings.location);
      this.render();
    }

    Growl.prototype.render = function() {
      var $growl;
      $growl = this.$growl();
      this.$growls().append($growl);
      if (this.settings["static"] != null) {
        this.present();
      } else {
        this.cycle();
      }
    };

    Growl.prototype.bind = function($growl) {
      if ($growl == null) {
        $growl = this.$growl();
      }
      return $growl.on("contextmenu", this.close).find("." + this.settings.namespace + "-close").on("click", this.close);
    };

    Growl.prototype.unbind = function($growl) {
      if ($growl == null) {
        $growl = this.$growl();
      }
      return $growl.off("contextmenu", this.close).find("." + this.settings.namespace + "-close").off("click", this.close);
    };

    Growl.prototype.close = function(event) {
      var $growl;
      event.preventDefault();
      event.stopPropagation();
      $growl = this.$growl();
      return $growl.stop().queue(this.dismiss).queue(this.remove);
    };

    Growl.prototype.cycle = function() {
      var $growl;
      $growl = this.$growl();
      return $growl.queue(this.present).delay(this.settings.duration).queue(this.dismiss).queue(this.remove);
    };

    Growl.prototype.present = function(callback) {
      var $growl;
      $growl = this.$growl();
      this.bind($growl);
      return this.animate($growl, "" + this.settings.namespace + "-incoming", 'out', callback);
    };

    Growl.prototype.dismiss = function(callback) {
      var $growl;
      $growl = this.$growl();
      this.unbind($growl);
      return this.animate($growl, "" + this.settings.namespace + "-outgoing", 'in', callback);
    };

    Growl.prototype.remove = function(callback) {
      this.$growl().remove();
      $('body').trigger('growl-hidden');
      return callback();
    };

    Growl.prototype.animate = function($element, name, direction, callback) {
      var transition;
      if (direction == null) {
        direction = 'in';
      }
      transition = Animation.transition($element);
      $element[direction === 'in' ? 'removeClass' : 'addClass'](name);
      $element.offset().position;
      $element[direction === 'in' ? 'addClass' : 'removeClass'](name);
      if (callback == null) {
        return;
      }
      if (transition != null) {
        $element.one(transition, callback);
      } else {
        callback();
      }
    };

    Growl.prototype.$growls = function() {
      return this.$_growls != null ? this.$_growls : this.$_growls = $('#growls');
    };

    Growl.prototype.$growl = function() {
      return this.$_growl != null ? this.$_growl : this.$_growl = $(this.html());
    };

    Growl.prototype.html = function() {
      return "<div class='" + this.settings.namespace + " " + this.settings.namespace + "-" + this.settings.style + " " + this.settings.namespace + "-" + this.settings.size + "'>\
        <div class='" + this.settings.namespace + "-close'><span class='glyphicon glyphicon-remove'></span></div>\
        <div class='" + this.settings.namespace + "-title'>" + this.settings.title + "</div>\
        <div class='" + this.settings.namespace + "-message'>" + this.settings.message + "</div>\
      </div>";
    };

    return Growl;

  })();

  $.growl = function(options) {
    if (options == null) {
      options = {};
    }
    return Growl.growl(options);
  };
  // Probably won't be used....
  // $.growl.error = function(options) {
  //   var settings;
  //   if (options == null) {
  //     options = {};
  //   }
  //   settings = {
  //     title: "Error!",
  //     style: "error"
  //   };
  //   return $.growl($.extend(settings, options));
  // };

}).call(this);

define("jquery.growl", function(){});

// Generated by CoffeeScript 1.7.1
define('jquery.countdown',['jquery', 'underscore'], function($, _) {
  var DAY_IN_SECONDS = 60 * 60 * 24;
  var HOUR_IN_SECONDS = 60 * 60;
  var EXPIRATION_IN_SECONDS = 60 * 5;
  var Countdown, instances, interval, padZeros, renderInstances, start, startTimer, stopTimer, templateText;
  templateText = function(opts) {
    var text = opts.prefix;
    if(opts.lessThan1Hr){
      text += opts.minutes + ":" + opts.seconds;
    }
    else if(opts.lessThan1Day){
      text += opts.hours + ":" + opts.minutes + ":" + opts.seconds;
    }
    else {
      text += opts.days + "日";
    }
    return text + opts.postfix;
  };
  start = false;
  instances = [];
  interval = null;
  startTimer = function() {
    if (start) {
      return;
    }
    start = true;
    return interval = setInterval(renderInstances, 1000);
  };
  stopTimer = function() {
    return clearInterval(interval);
  };
  renderInstances = function() {
    var countdown, i, _i, _ref;
    for (i = _i = _ref = instances.length - 1; _i >= 0; i = _i += -1) {
      countdown = instances[i];
      countdown.update();
    }
  };
  padZeros = function(val) {
    if (val >= 10) {
      return val;
    } else {
      return '0' + val;
    }
  };
  Countdown = (function() {
    function Countdown(el) {
      var hours, minutes, parts, seconds, showHours, startTime, dateUntil;
      instances.push(this);
      this.el = $(el);

      // set options
      this.countdownAfter = this.el.data('countdown-after') ? parseInt(this.el.data('countdown-after')) * HOUR_IN_SECONDS : null; // in hours
      this.prefix = this.el.data('countdown-prefix') ? this.el.data('countdown-prefix') : "";
      this.postfix = this.el.data('countdown-postfix') ? this.el.data('countdown-postfix') : "";

      startTime = this.el.data('countdown');
      parts = startTime.split(':');

      showHours = parts.length > 2;
      if (showHours) {
        hours = Number(parts[0]);
        minutes = Number(parts[1]);
        seconds = Number(parts[2]);
      } else {
        hours = 0;
        minutes = Number(parts[0]);
        seconds = Number(parts[1]);
      }
      this.expiring = false; // expiring within 5 minutes
      this.rendered = false; // once it is rendered, mark it as rendered
      this.seconds = hours * 3600 + minutes * 60 + seconds;
      this.startCountdown();
    }

    Countdown.prototype.tick = function() {
      this.seconds -= 1;
      if (this.seconds < 0) {
        return this.seconds = 0;
      }
    };

    Countdown.prototype.update = function() {
      this.tick();

      // don't show count down if more than countdownAfter
      if(this.countdownAfter == null || (this.countdownAfter &&  this.seconds < this.countdownAfter)){
        if(!this.rendered || this.seconds < DAY_IN_SECONDS || (this.seconds % DAY_IN_SECONDS == 0) ) {

          if (this.seconds === 0) {
            this.el.trigger('countdownStopped', this.el);
            this.render();
            return this.stopCountdown();
          }

          if (!this.expiring && this.seconds < EXPIRATION_IN_SECONDS) {
            this.expiring = true;
            this.el.addClass('item-expiring');
            this.el.trigger('itemExpiringStarted', this.el);
          }

          this.render();
        }
      }
    };

    Countdown.prototype.render = function() {
      var data, o, secs;
      o = this.getTimeComponents(this.seconds);
      data = {
        days: o.days,
        hours: o.hours,
        minutes: o.hours ? padZeros(o.minutes) : o.minutes,
        seconds: padZeros(o.seconds),
        lessThan1Day: o.days < 1,
        lessThan1Hr: this.seconds < 60 * 60,
        prefix: this.prefix,
        postfix: this.postfix
      };
      this.el.text(templateText(data));
      this.rendered = true;
    };

    Countdown.prototype.getTimeComponents = function(seconds) {
      var hours, o;
      hours = Math.floor(seconds / 3600);
      o = {
        days: Math.floor(hours / 24),
        hours: hours % 24,
        minutes: Math.floor((seconds % 3600) / 60),
        seconds: Math.floor((seconds % 3600) % 60)
      };
      return o;
    };

    Countdown.prototype.startCountdown = function() {
      return startTimer();
    };

    Countdown.prototype.stopCountdown = function() {
      var ind;
      ind = _.indexOf(instances, this);
      instances.splice(ind, 1);
      if (!instances.length) {
        return stopTimer();
      }
    };

    return Countdown;

  })();
  $.fn.countdown = function() {
    return this.each(function(index, element) {
      return new Countdown(element);
    });
  };
});

(function ($) {
    /*
        jquery.slide-transition plug-in

        Requirements:
        -------------
        You'll need to define these two styles to make this work:

        .height-transition {
            -webkit-transition: max-height 0.5s ease-in-out;
            -moz-transition: max-height 0.5s ease-in-out;
            -o-transition: max-height 0.5s ease-in-out;
            transition: max-height 0.5s ease-in-out;
            overflow-y: hidden;
        }
        .height-transition-hidden {
            max-height: 0;
        }

        You need to wrap your actual content that you
        plan to slide up and down into a container. This
        container has to have a class of height-transition
        and optionally height-transition-hidden to initially
        hide the container (collapsed).

        <div id="slider-container"
                class="height-transition height-transition-hidden">
            <div id="Actual">
                Your actual content to slide up or down goes here
            </div>
        </div>

        To call it:
        -----------
        var $sw = $("#slide-container");

        if (!$sw.hasClass("height-transition-hidden"))
            $sw.slideUpTransition();
        else
            $sw.slideDownTransition();
    */
    var isTransitionsSupported = function() {
        var thisBody = document.body || document.documentElement,
            thisStyle = thisBody.style,
            support = thisStyle.transition !== undefined ||
                      thisStyle.WebkitTransition !== undefined ||
                      thisStyle.MozTransition !== undefined ||
                      thisStyle.MsTransition !== undefined ||
                      thisStyle.OTransition !== undefined;
        return support;
    };
    var transEndEventNames = 'webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd transitionend';
    $.fn.slideUpTransition = function(minHeight, callback) {
        minHeight = minHeight ? minHeight : '0';
        return this.each(function() {
            var $el = $(this);
            $el.css({
                    "max-height": $el.outerHeight()
                });
            setTimeout(function() {
                if(typeof(callback) === 'function' && isTransitionsSupported()){
                    $el.one(transEndEventNames, callback);
                }
                $el.css("max-height", minHeight);
                if(typeof(callback) === 'function' && !isTransitionsSupported()){
                    callback.call();
                }
            }, 20);
            $el.addClass("height-transition-hidden");
        });
    };

    $.fn.slideDownTransition = function(minHeight, maxHeight, callback) {
        minHeight = minHeight ? minHeight : '0';
        return this.each(function() {
            var $el = $(this);
            $el.removeClass("height-transition-hidden");

            // temporarily make visible to get the size
            $el.css("max-height", "none");
            var height = maxHeight || $el.outerHeight();

            // reset to 0 then animate with small delay
            $el.css("max-height", minHeight);

            setTimeout(function() {
                $el.css({
                    "max-height": height
                });
                if(typeof(callback) === 'function'){
                    callback.call();
                }
            }, 1);
        });
    };
}).call(this, jQuery);
define("jquery.slidetransition", function(){});

/*!
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2015 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.7
 *
 */

(function($, window, document, undefined) {
    var $window = $(window);

    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold       : 0,
            failure_limit   : 0,
            event           : "scroll",
            effect          : "show",
            container       : window,
            data_attribute  : "src",
            skip_invisible  : false,
            appear          : null,
            load            : null,
            placeholder     : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };

        function update() {
            var counter = 0;

            elements.each(function() {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
                if ($.abovethetop(this, settings) ||
                    $.leftofbegin(this, settings)) {
                        /* Nothing. */
                } else if (!$.belowthefold(this, settings) &&
                    !$.rightoffold(this, settings)) {
                        $this.trigger("appear");
                        /* if we found an image we'll load, reset the counter */
                        counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });

        }

        if(options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
                      settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
            $container.bind(settings.event, function() {
                return update();
            });
        }

        this.each(function() {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* If no src attribute given use data:uri. */
            if ($self.attr("src") === undefined || $self.attr("src") === false) {
                if ($self.is("img")) {
                    $self.attr("src", settings.placeholder);
                }
            }

            /* When appear is triggered load original image. */
            $self.one("appear", function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />")
                        .bind("load", function() {

                            var original = $self.attr("data-" + settings.data_attribute);
                            $self.hide();
                            if ($self.is("img")) {
                                $self.attr("src", original);
                            }
                            else if($self.parent().is('picture')){
                                picturefill({
                                  reevaluate: true,
                                  elements: [ self ]
                                });
                            } else {
                                $self.css("background-image", "url('" + original + "')");
                            }
                            $self[settings.effect](settings.effect_speed);

                            self.loaded = true;

                            // image loaded
                            $self.trigger('imageLoaded', $self);

                            /* Remove image from array so it is not looped next time. */
                            var temp = $.grep(elements, function(element) {
                                return !element.loaded;
                            });
                            elements = $(temp);

                            if (settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings);
                            }
                        })
                        .attr("src", $self.attr("data-" + settings.data_attribute));
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.bind(settings.event, function() {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }
        });

        /* Check if something appears when window is resized. */
        $window.bind("resize", function() {
            update();
        });

        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) {
            $window.bind("pageshow", function(event) {
                if (event.originalEvent && event.originalEvent.persisted) {
                    elements.each(function() {
                        $(this).trigger("appear");
                    });
                }
            });
        }

        /* Force initial check if images should appear. */
        $(document).ready(function() {
            update();
        });

        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };

    $.rightoffold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
    };

    $.leftofbegin = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function(element, settings) {
         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
     };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[":"], {
        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
        /* Maintain BC for couple of versions. */
        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
    });

})(jQuery, window, document);

define("jquery.lazyload", function(){});

(function($){
	$.fn.accordion = function(){
		return this.each(function(){
			var $this = $(this),
				$header = $this.find('.accordion-header'),
				$container = $header.next('.accordion-body');

			$header.on('click', function(){
				if ($container.hasClass("height-transition-hidden")){
					$header.find('a').addClass('open');
					$container.slideDownTransition();
				}
				else {
					$header.find('a').removeClass('open');
					$container.slideUpTransition();
				}
			});
		});
	};
}(jQuery));
define("jquery.accordions", function(){});

/* ===========================================================
 * bootstrap-tooltip.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

   // jshint ;_;


 /* TOOLTIP PUBLIC CLASS DEFINITION
  * =============================== */

  var Tooltip = function (element, options) {
    this.init('tooltip', element, options)
  }

  Tooltip.prototype = {

    constructor: Tooltip

  , init: function (type, element, options) {
      var eventIn
        , eventOut

      this.type = type
      this.$element = $(element)
      this.options = this.getOptions(options)
      this.enabled = true

      if (this.options.trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (this.options.trigger != 'manual') {
        eventIn = this.options.trigger == 'hover' ? 'mouseenter' : 'focus'
        eventOut = this.options.trigger == 'hover' ? 'mouseleave' : 'blur'
        this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }

      this.options.selector ?
        (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
        this.fixTitle()
    }

  , getOptions: function (options) {
      options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data())

      if (options.delay && typeof options.delay == 'number') {
        options.delay = {
          show: options.delay
        , hide: options.delay
        }
      }

      return options
    }

  , enter: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (!self.options.delay || !self.options.delay.show) return self.show()

      clearTimeout(this.timeout)
      self.hoverState = 'in'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'in') self.show()
      }, self.options.delay.show)
    }

  , leave: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (this.timeout) clearTimeout(this.timeout)
      if (!self.options.delay || !self.options.delay.hide) return self.hide()

      self.hoverState = 'out'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'out') self.hide()
      }, self.options.delay.hide)
    }

  , show: function () {
      var $tip
        , inside
        , pos
        , actualWidth
        , actualHeight
        , placement
        , tp

      if (this.hasContent() && this.enabled) {
        $tip = this.tip()
        this.setContent()

        if (this.options.animation) {
          $tip.addClass('fade')
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement

        inside = /in/.test(placement)

        $tip
          .detach()
          .css({ top: 0, left: 0, display: 'block' })
          .insertAfter(this.$element)

        pos = this.getPosition(inside)

        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        switch (inside ? placement.split(' ')[1] : placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
            break
        }

        $tip
          .offset(tp)
          .addClass(placement)
          .addClass('in')
      }
    }

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()

      $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
      $tip.removeClass('fade in top bottom left right')
    }

  , hide: function () {
      var that = this
        , $tip = this.tip()

      $tip.removeClass('in')

      function removeWithAnimation() {
        var timeout = setTimeout(function () {
          $tip.off($.support.transition.end).detach()
        }, 500)

        $tip.one($.support.transition.end, function () {
          clearTimeout(timeout)
          $tip.detach()
        })
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        removeWithAnimation() :
        $tip.detach()

      return this
    }

  , fixTitle: function () {
      var $e = this.$element
      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
        $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
      }
    }

  , hasContent: function () {
      return this.getTitle()
    }

  , getPosition: function (inside) {
      return $.extend({}, (inside ? {top: 0, left: 0} : this.$element.offset()), {
        width: this.$element[0].offsetWidth
      , height: this.$element[0].offsetHeight
      })
    }

  , getTitle: function () {
      var title
        , $e = this.$element
        , o = this.options

      title = $e.attr('data-original-title')
        || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

      return title
    }

  , tip: function () {
      return this.$tip = this.$tip || $(this.options.template)
    }

  , validate: function () {
      if (!this.$element[0].parentNode) {
        this.hide()
        this.$element = null
        this.options = null
      }
    }

  , enable: function () {
      this.enabled = true
    }

  , disable: function () {
      this.enabled = false
    }

  , toggleEnabled: function () {
      this.enabled = !this.enabled
    }

  , toggle: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)
      self[self.tip().hasClass('in') ? 'hide' : 'show']()
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  }


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  var old = $.fn.tooltip

  $.fn.tooltip = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tooltip')
        , options = typeof option == 'object' && option
      if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip

  $.fn.tooltip.defaults = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover'
  , title: ''
  , delay: 0
  , html: false
  }


 /* TOOLTIP NO CONFLICT
  * =================== */

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(window.jQuery);
define("bootstrap-tooltip", ["jquery"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.jQuery;
    };
}(this)));

/* =========================================================
 * bootstrap-modal.js v2.1.1
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * =========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


!function ($) {

   // jshint ;_;


 /* MODAL CLASS DEFINITION
  * ====================== */

  var Modal = function (element, options) {
    this.options = options
    this.$element = $(element)
      .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
    this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
  }

  Modal.prototype = {

      constructor: Modal

    , toggle: function () {
        return this[!this.isShown ? 'show' : 'hide']()
      }

    , show: function () {
        var that = this
          , e = $.Event('show')

        this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented()) return

        $('body').addClass('modal-open')

        this.isShown = true

        this.escape()

        this.backdrop(function () {
          var transition = $.support.transition && that.$element.hasClass('fade')

          if (!that.$element.parent().length) {
            that.$element.appendTo(document.body) //don't move modals dom position
          }

          that.$element
            .show()

          if (transition) {
            that.$element[0].offsetWidth // force reflow
          }

          that.$element
            .addClass('in')
            .attr('aria-hidden', false)
            .focus()

          that.enforceFocus()

          transition ?
            that.$element.one($.support.transition.end, function () { that.$element.trigger('shown') }) :
            that.$element.trigger('shown')

        })
      }

    , hide: function (e) {
        e && e.preventDefault()

        var that = this

        e = $.Event('hide')

        this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        $('body').removeClass('modal-open')

        this.escape()

        $(document).off('focusin.modal')

        this.$element
          .removeClass('in')
          .attr('aria-hidden', true)

        $.support.transition && this.$element.hasClass('fade') ?
          this.hideWithTransition() :
          this.hideModal()
      }

    , enforceFocus: function () {
        var that = this
        $(document).on('focusin.modal', function (e) {
          if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
            that.$element.focus()
          }
        })
      }

    , escape: function () {
        var that = this
        if (this.isShown && this.options.keyboard) {
          this.$element.on('keyup.dismiss.modal', function ( e ) {
            e.which == 27 && that.hide()
          })
        } else if (!this.isShown) {
          this.$element.off('keyup.dismiss.modal')
        }
      }

    , hideWithTransition: function () {
        var that = this
          , timeout = setTimeout(function () {
              that.$element.off($.support.transition.end)
              that.hideModal()
            }, 500)

        this.$element.one($.support.transition.end, function () {
          clearTimeout(timeout)
          that.hideModal()
        })
      }

    , hideModal: function (that) {
        this.$element
          .hide()
          .trigger('hidden')

        this.backdrop()
      }

    , removeBackdrop: function () {
        this.$backdrop.remove()
        this.$backdrop = null
      }

    , backdrop: function (callback) {
        var that = this
          , animate = this.$element.hasClass('fade') ? 'fade' : ''

        if (this.isShown && this.options.backdrop) {
          var doAnimate = $.support.transition && animate

          this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
            .appendTo(document.body)

          if (this.options.backdrop != 'static') {
            this.$backdrop.click($.proxy(this.hide, this))
          }

          if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

          this.$backdrop.addClass('in')

          doAnimate ?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass('in')

          $.support.transition && this.$element.hasClass('fade')?
            this.$backdrop.one($.support.transition.end, $.proxy(this.removeBackdrop, this)) :
            this.removeBackdrop()

        } else if (callback) {
          callback()
        }
      }
  }


 /* MODAL PLUGIN DEFINITION
  * ======================= */

  $.fn.modal = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('modal')
        , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option]()
      else if (options.show) data.show()
    })
  }

  $.fn.modal.defaults = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  $.fn.modal.Constructor = Modal


 /* MODAL DATA-API
  * ============== */

  $(function () {
    $('body').on('click.modal.data-api', '[data-toggle="modal"]', function ( e ) {
      var $this = $(this)
        , href = $this.attr('href')
        , $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
        , option = $target.data('modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

      e.preventDefault()

      $target
        .modal(option)
        .one('hide', function () {
          $this.focus()
        })
    })
  })

}(window.jQuery);
define("bootstrap-modal", ["jquery"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.jQuery;
    };
}(this)));

require([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){

	// Sale Model used for Sale Banner
	MP.Sale = Backbone.Model.extend({});

	MP.Sales = Backbone.Collection.extend({

		TIMELINE: ['current', 'upcoming', 'all'],
		CATEGORIES: ['women', 'men', 'kids', 'lifestyle', 'gourmet'],

		defaults: {
			timeline: 'current',
			category: 'women'
		},

		model: MP.Sale,

		initialize: function(opts) {
			this.timeline =  (opts && opts.timeline && _.indexOf(this.TIMELINE, opts.timeline) > 0) ? opts.timeline : this.defaults.timeline;
			this.category =  (opts && opts.category && _.indexOf(this.CATEGORIES, opts.category) > 0) ? opts.category : this.defaults.category;
		},

		url: function() {
			// /json/sales/(current|upcoming|all)/(women|men|kids|lifestyle|gourmet
			return '/json/sales/' + this.timeline + '/' + this.category;
		}
	});

	MP.CurrentSales = {};
	MP.CurrentSales['women']= new MP.Sales();
	MP.CurrentSales['men']= new MP.Sales({category: 'men'});
	MP.CurrentSales['kids']= new MP.Sales({category: 'kids'});
	MP.CurrentSales['lifestyle']= new MP.Sales({category: 'lifestyle'});
	MP.CurrentSales['gourmet']= new MP.Sales({category: 'gourmet'});
});
define("models/sales", function(){});

require([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){

	// Product Model used for a product in a sale
	MP.Product = Backbone.Model.extend({});

	MP.Products = Backbone.Collection.extend({

		model: MP.Product,

		initialize: function(opts) {
			this.saleCode = opts.saleCode; // this uniquely identifies a sale
		},

		url: function() {
			return '/json/products/' + this.saleCode;
		}
	});

});
define("models/products", function(){});

require(['jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){

	MP.ReturnItem = Backbone.Model.extend({});

	MP.ReturnItems = Backbone.Collection.extend({

		model: MP.ReturnItem,

		url: function() {
			return '/json/returns';
		},

		parse: function(response){
			MP.ReturnPledges = response.pledges;
			MP.ReturnReasons = response.reasons;
			// separate each product by ship-date
			var items = [];
			_.each(response['items'], function(item){
				_.each(item.pieces, function(piece){
					items.push(_.extend(item, piece));
				});
			});
			return items;
		}
	});

});
define("models/return-item", function(){});

require([
    'underscore',
    'jquery',
    'backbone',
    '_global',
    '_utils'
  ], function(_, $, Backbone) {
    MP.GATracking = Backbone.View.extend({

      initialize: function(opts){
        _.each(opts, function(funcName, evtName){
          MP.dispatcher.on(evtName, this[funcName], this);
        }, this);

      },

      trackEvent: function(eventName, category, action, label){
        dataLayer.push({
          'event': eventName,
          'category': category,
          'action': action,
          'label': label
        });
        //ga('send', 'event', category, action, label );
      },

      trackEcommerce: function(eventName, ecommerce, callback){
        var opts = {};
        opts['event'] = eventName;
        opts['ecommerce'] = ecommerce;
        if(typeof(callback) === 'function'){
          opts['eventCallback'] = callback;
        }
        dataLayer.push(opts);
      },

      // MP App
      sendAppEvent: function(url){
        if(Utils.MediaQuery.isApp()){
          location.href = url;
        }
      }
    });

});

define("google-analytics/ga-tracking", function(){});

require(['underscore', 'jquery', 'backbone'], function(_, $, Backbone) {

	MP.SaleBannerTracking = {

		addSaleImpressions: function($elems){
			$elems.each(_.bind(function(index, elem){
				var $a = $(elem).closest('a');
				MP.dispatcher.trigger('saleImpression', this.getGASalePromotion($a));
			}, this));
		},

		saleBannerClicked: function(ev){
			var $a = $(ev.target);
			$a = ($a.tagName === "A" ? $a : $a.closest('a'));
			if($a.hasClass('login-required')){
				this.trackSaleBannerClick($a, false, ev);
				this.showQuickLogin(ev);
			}
			else {
				this.trackSaleBannerClick($a, true, ev);
			}
		},

		trackSaleBannerClick: function($a, shouldRedirect, ev){
			// Only send the event trigger when the link has sale banner in it
			// and the google analytics are not blocked
			if($a.find('img.sale-img').length > 0 && !Utils.trackerBlocked()){
				ev.preventDefault();
				this.url = $a.attr('href');
				var funcRedirect = null;
				if(shouldRedirect){
					funcRedirect = _.bind(function() {
							document.location = this.url;
						}, this);
				}

				MP.dispatcher.trigger(
					'saleClick',
					this.getGASalePromotion($a),
					funcRedirect
				);
			}
		},

		// create a promotion hash for use of GA
		getGASalePromotion: function($aElem){
			var saleCode = $aElem.data('sale-code');
			var saleName = $aElem.data('sale-name');
			var container = $aElem.closest('[data-sale-container]').data('sale-container').toLowerCase();
			return {
				'id': saleCode,
				'name': saleName,
				'position': container,
				'creative': 'standard sale banner'
			};
		}
	};
});

define("google-analytics/sale-banner-tracking", function(){});

require([
		'underscore',
		'jquery',
		'backbone',
		'google-analytics/ga-tracking',
		'google-analytics/sale-banner-tracking'
	], function(_, $, Backbone) {

		MP.CtrTrackingManager = MP.GATracking.extend({

			MAX_PROD_IMPS: 30,
			MAX_PROMO_IMPS: 60,

			initialize: function(){
				MP.GATracking.prototype.initialize.call(this, {
					'productImpression': 'addProductImpression',
					'productClick': 'sendProductClick',
					'saleImpression': 'addPromoImpression',
					'saleClick': 'sendPromoClick',
					'pageUnload': 'sendImpressions'
				});
				var obj = this;

				this.gaProducts = [];
				this.gaPromos = [];
			},

			render: function(){
				var obj = this;
				// Tacking the same banner impressions as image loaded events need to be registered before the page is rendered
				this.$('img.sale-img').one('imageLoaded', function(){
					obj.addSaleImpressions($(this));
				});
			},

			sendImpressions: function(){
				this.sendProductImpressions();
				this.sendPromoImpressions();
			},

			addProductImpression: function(gaProduct){
				if(this.gaProducts.length > this.MAX_PROD_IMPS){
					this.sendProductImpressions();
				}
				this.gaProducts.push(gaProduct);
			},

			sendProductImpressions: function(){
				if(this.gaProducts.length > 0){
					this.trackEcommerce(
						'productImpression',
						 {
							'currencyCode': 'JPY',
							'impressions': this.gaProducts
						}
					);
					this.gaProducts = [];
				}
			},

			sendProductClick: function(listName, gaProduct, eventCallback){
				// product click
				var dataObj = {
					'click': {
						'actionField': {'list': listName},
						'products': [gaProduct]
					}
				};
				// you can send product impressions along with an action
				if(this.gaProducts.length > 0){
					dataObj['impressions'] = this.gaProducts;
					this.gaProducts = [];
				}

				this.trackEcommerce('productClick', dataObj, eventCallback);
			},

			addPromoImpression: function(gaPromo){
				if(this.gaPromos.length > this.MAX_PROMO_IMPS){
					this.sendPromoImpressions();
				}
				this.gaPromos.push(gaPromo);
			},

			sendPromoImpressions: function(){
				if(this.gaPromos.length > 0){
					this.trackEcommerce(
						'promoImpressions',
						{
							'promoView': {
								'promotions': this.gaPromos
							}
						}
					);
				}
				this.gaPromos = []; // reset just in case
			},

			sendPromoClick: function(gaPromo, eventCallback){
				// if(typeof(_gaq) !== 'undefined'){
				//	_gaq.push(['_trackEvent','Campaign Inbound Links', saleCode, container ]);
				// }
				this.trackEcommerce(
					'promoClick',
					{
						'promoClick': {
							'promotions': [gaPromo]
						}
					},
					eventCallback
				);
			}

		});

		_.extend(MP.CtrTrackingManager.prototype, MP.SaleBannerTracking);
});
define("google-analytics/ctr-tracking-manager", function(){});

require([
	'underscore',
	'jquery',
	'backbone',
	'_utils',
	'_global'
], function(_, $, Backbone) {
	MP.AppTracking = MP.GATracking.extend({

		initialize: function(){
			MP.GATracking.prototype.initialize.call(this, {
				'itemAdded': 'trackAddToCart',
				'checkoutSuccess': 'trackPurchase',
				'friendsInvited' : 'trackFriendsInvitation',
				'signupSuccess': 'trackSignupSuccess',
				'signupSuccessPage': 'trackSignupSuccess'
			});
		},

		trackAddToCart: function(){
			this.sendAppEvent("milleporte://shopping/cart/add");
		},

		trackPurchase: function(){
			this.sendAppEvent('milleporte://shopping/checkout/success');
		},

		trackFriendsInvitation: function(){
			this.sendAppEvent('milleporte://account/invitefriend');
		},

		trackSignupSuccess: function(){
			this.sendAppEvent('milleporte://account/signup/success');
		}
	});
});

define("google-analytics/app-tracking", function(){});

require([
    'underscore',
    'jquery',
    'backbone',
    'google-analytics/ga-tracking'
  ], function(_, $, Backbone) {

    MP.CheckoutTracking = MP.GATracking.extend({

      initialize: function(){
        var obj = this;
        _.each(Utils.$body.attr('class').split(' '), function(className){
          if(className.startsWith('page-shopcheckout')){
            obj.checkoutStep(className.match(/page-shop(.*)/)[1]);
            return false;
          }
        });
      },

      checkoutStep: function(stepName){
        var stepNum = 1, opt;
        switch(stepName){
          case 'checkoutaddress':
            stepNum = 2;
            break;
          case 'checkoutpaymentmethod':
            stepNum = 3;
            break;
          case 'checkoutpaymentmethodfinal':
            stepNum = 4;
            opt = this.$('.payment-method li').data('payment-type')
            break;
          case 'checkoutconfirmation':
            stepNum = 5;
            break;
        }
        this.trackEcommerce('checkout',{'checkout': {'actionField': {'step': stepNum, 'option': opt}} });
      }
    });
});
define("google-analytics/checkout-tracking", function(){});

require(['jquery', 'underscore', 'backbone', 'slick'], function($, _, Backbone) {

	MP.CategoryMenu = Backbone.View.extend({

		render: function() {
			this.initSlider();
			return this;
		},

		initSlider: function() {
			this.$el.slick({
				arrows: false,
				centerMode: true,
				centerPadding: '100px',
				variableWidth: true,
				swipeToSlide: true
			});

			// Center the current sale slide
			var currentIndex = 0;

			// get the index of the current slae slide
			var $currentSlide = this.$el.find('li.current');
			if($currentSlide.length > 0) {
				currentIndex = $currentSlide.first().attr('data-slick-index');
			}
			this.$el.slick('slickGoTo', currentIndex, false);
		}
	});
});
define("menus/category-menu", function(){});

require(['jquery', 'underscore', 'backbone', 'templates', 'slick', 'google-analytics/sale-banner-tracking'],
	function($, _, Backbone, Templates) {

	MP.SalesMenuView = Backbone.View.extend({
		SALES_PER_SLIDE: 12,

		initialize: function(opts) {
			this.currentCategory  = (opts && opts.category) ? opts.category : null;
			this.currentSaleId = (opts && opts.saleId) ? opts.saleId : null;

			// we do this way to call so that sale impression tracking can be decoupled
			// by just not extending the tracker object
			this.listenTo(this, 'saleBannerVisible', this.addSaleImpressions);
		},

		render: function() {
			var sales = this.collection.map(function(sale){
				sale.set('current', (sale.get('code') == this.currentSaleId) ? 'current' : '');
				// User the smaller image 160 instead of 320
				sale.set('image', sale.get('image').replace('_320', '_160'));
				return sale.attributes;
			}, this);
			// Divide the sales slides to set of 12
			// (SalesSlides contains multiple saleSlide and the each saleSlide contains 12 sales)
			var salesSlides = _.groupBy(sales, _.bind(function(sale, index){
				return Math.floor(index / this.SALES_PER_SLIDE);
			}, this));
			salesSlides = _.toArray(salesSlides);

			this.$el.html(Templates['category-submenu-slider.hbs']({salesSlides: salesSlides}));

			this.initSlider();
			return this;
		},

		initSlider: function() {
			this.$el.slick({
				dots: true,
				appendArrows: this.$el.find('.submenu-nav-container .submenu-nav'),
				slide: '.category-submenu-slide',
				lazyload: 'ondemand'
			});

			// track menu sale images impression
			this.$el.on('afterChange', _.bind(function(){
				this.trigger('saleBannerVisible', this.$el.find('.slick-active img.sale-banner'));
			}, this));
		}

	});

});
define("menus/category-submenu", function(){});

require([
	'jquery',
	'underscore',
	'backbone',
	'slick',
	'menus/category-menu',
	'menus/category-submenu',
	'google-analytics/sale-banner-tracking'
], function($, _, Backbone) {

	MP.CategoryNavigation = Backbone.View.extend({

		events: {
			"click a[data-sale-code]": 'saleBannerClicked'
		},

		initialize: function(saleId){
			this.saleId = saleId;
			this.categories = this.$('.category-nav li:not(.ga-none)').map(_.bind(function(index, listTag){
				return this.$(listTag).data('category');
			}, this));

			// we do this way to call the addSaleImpressions indirectly so that the sale impression tracking can be decoupled
			// by just not extending the tracking object
			this.listenTo(this, 'saleBannerVisible', this.addSaleImpressions);
		},

		render: function() {
			// render all sub category menu
			var numOfCategories = this.categories.length;
			_.each(this.categories, _.bind(function(category, index) {
				MP.CurrentSales[category].fetch({
					success: _.bind(function(sales, response, options){
						if ( !Utils.MediaQuery.isMobile() ) {

							new MP.SalesMenuView({el: $('.category-submenu-' + category), collection: sales, saleId: this.saleId}).render();
							this.initCategoryNavigation(category);
						}
						else {
							this.initCategoryNavigation();
						}
					}, this)
				}).done(function(){
					MP.dispatcher.trigger('salesResponseReady', category);
				});
			}, this));

			this.resizeId = null;
			Utils.$window.on('resize', _.bind(function(){
				clearTimeout(this.resizeId);
				this.resizeId = setTimeout(_.bind(this.initCategoryNavigation, this), 500);
			}, this));
		},

		initCategoryNavigation: function(category) {
			var $categoryMenu = this.$('.category-nav');
			var $categorySubMenu = category ? this.$('.category-submenu-' + category) : this.$('.category-submenu');

			if(Utils.MediaQuery.isMobile()){
			// Don't show the category sub menu, just make the category nav scrollable
				$categorySubMenu.hide();
				new MP.CategoryMenu({el: $categoryMenu}).render();
				this.categorySlicked = true;
			}
			// for Desktop size
			else { // render the category submenu
				if(this.categorySlicked === true){
					$categoryMenu.slick('unslick');
				}

				var $shopMenuCategories = this.$('.category-nav .sale-category');
				// add click event listener for the tablet touch screen like iPad
				if(Utils.MediaQuery.isTouchScreen()) {
					var $overlay = $('.overlay'),
						$header = $('header#header');
					this.$('.category-nav .sale-category a.category-name').on('click', function(ev){
						$categoryItem = $(this).parent();

						if($categoryItem.hasClass('open')) {
							// if you click the opened category menu again, the sale list page will open
							return true;
						}
						else {
							ev.stopPropagation();
							ev.preventDefault();
							$shopMenuCategories.removeClass('open');
							$(this).parent().addClass('open'); // add the class to the <li> tag

							// over ride the z-index so that the header and the nav menu would show above the overlay
							$header.css('z-index', '2526');
							$overlay.show();
						}
					});
					// Wheb the open menu is clicked once again, redirect to the sale list page
					$overlay.on('click', function(){
						$shopMenuCategories.removeClass('open');
						$overlay.hide();
						$header.css('z-index', 'auto');
					});
				}
				// For non-touch desktop site
				else {
					var menuHoverTimeoutId = undefined;
					var $categoryLinks = $('#shop-menu .category-nav .sale-category a.category-name');
					var obj = this;
					$categoryLinks.on('mouseenter', function(){
						$categoryItem = $(this).parent();

						$categoryItem.one('mouseleave', function(){
							clearTimeout(menuHoverTimeoutId);
							$categoryItem.removeClass('open');
						});

						menuHoverTimeoutId = setTimeout(function(){
							// if the link hovered is NOT already open, show the category menu
							if(!$categoryItem.hasClass('open')) {
								$categoryItem.addClass('open');
								obj.trigger('saleBannerVisible', $categoryItem.find('.slick-active img.sale-banner'));
							}
						}, 700);
					});
				}
			}
		}
	});
});
define("menus/category-navigation", function(){});

require(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {

	MP.ProductTracking = {
		prodImageLoaded: function(ev){
			var $target = this.$(ev.target).closest('a');
			var containerName = $target.closest('[data-prod-container]').data('prod-container');
			MP.dispatcher.trigger('productImpression', this.getGAProduct($target, containerName));
		},

		prodClicked: function(ev){
			// ignore if the google analytics are disabled
			if(!Utils.trackerBlocked()){
				ev.preventDefault();
				var $target = $(ev.target).closest('a');
				var containerName = $target.closest('[data-prod-container]').data('prod-container');
				this.url = $target.attr('href');
				MP.dispatcher.trigger(
					'productClick',
					containerName,
					this.getGAProduct($target, containerName),
					_.bind(function() {
						document.location = this.url;
					}, this)
				);
			}
		},

		// create a product hash for use of GA
		getGAProduct: function($prodElement, containerName){
			return {
				'name': $prodElement.data('prod-name'),
				'id': $prodElement.data('prod-id'),
				'price': '',
				'brand': this.saleCode,
				'category': this.productGenres,
				'list': containerName,
				'position': $prodElement.data('pos')
			};
		}
	};
});
define("google-analytics/product-tracking", function(){});

require(['jquery', 'underscore', 'backbone', 'templates', 'google-analytics/product-tracking'], function($, _, Backbone, Templates) {

	MP.ProductsMenuView = Backbone.View.extend({

		events: {
			'imageLoaded img.prod-img': "prodImageLoaded",
			'click a.prod-nav-item' : 'prodClicked'
		},

		initialize: function(opts) {
			this.currentSaleId = (opts && opts.saleId) ? opts.saleId : null;
			this.currentProductId = (opts && opts.productId) ? opts.productId : null;
			this.saleCode = opts.saleCode;
			this.productGenres = opts.productGenres;
		},

		render: function() {
			this.availableProducts = this.collection.filter(function(prod){
				return prod.get('status') != 'soldout';
			});
			var products = _.map(this.availableProducts, function(prod, index){
				prod.set('current', (prod.get('id') == this.currentProductId ? 'current' : ''));
				prod.set('pos', index + 1);
				return Templates['products-menu.hbs'](prod.attributes);
			}, this);

			this.$el.html(products);

			// enable sliding
			this.$el.slick({
				centerMode: true,
				centerPadding: '0',
				arrows: false,
				slidesToShow: (this.availableProducts.length < 5) ? 3 : 5,
				swipeToSlide: true,
				infinite: false,
				lazyLoad: 'ondemand'
			});

			// Center the current sale slide
			var currentIndex = 0;

			// get the index of the current sale slide
			var $currentSlide = this.$el.find('li[data-prod-id=' + this.currentProductId + ']');
			if($currentSlide.length > 0) {
				currentIndex = $currentSlide.first().attr('data-slick-index');
			}
			this.$el.slick('slickGoTo', currentIndex, false);

			MP.dispatcher.trigger('productsNavRendered');
			return this;
		}
	});

});
define("menus/products-menu", function(){});

require(['jquery', 'underscore', 'backbone', '_utils'], function($, _, Backbone) {
	MP.BottomGenreMenu = Backbone.View.extend({

		events: {
			'click a.login-required': 'showQuickLogin',
			'click .genre-menu li a': 'switchGenreMenu',
			"click a[data-sale-code]" : "saleBannerClicked"
		},

		render: function() {
			// Show the default genre "WOMEN" at the bottom of the page
			this.showMenuList('women');
			return this;
		},

		// swtich genre menu based on the category selected
		switchGenreMenu: function(event){
			var $li, currentGenre;
			$li = $(event.target).closest('li');
			currentGenre = $li.data('genre');
			this.showMenuList(currentGenre);

			// make sure lazy loaded sale banner images are loaded
			Utils.$window.trigger('resize');
		},

		showMenuList: function(genre, menuClassName) {
			var $all, $selectedCampains;

			// Hide all sales banners once
			$all = this.$(".campaign-list li");
			$all.hide();

			// Show the selected sales banners
			$selectedCampains = this.$(".campaign-list li[data-sale-genres*='genre-" + genre + "']");
			$selectedCampains.css('display', 'inline-block');

			// Select the genre menu
			this.$(".genre-menu li a").removeClass('active');
			this.$(".genre-menu li[data-genre=" + genre + "] a").addClass('active');
		},

		showQuickLogin: function(ev) {
			ev.preventDefault();
			this.clickedSaleLink = this.$(ev.target).closest('a').attr('href');
			MP.dispatcher.trigger('quickLoginOpen', 'signup', 'ClosedSale - BrandPage'); // Note:  Assuming the genre menu login popup happens in brand page where users are logged out
		}
	});

});

define("menus/bottom-genre-menu", function(){});

// Helpers for google tag manager

require(['jquery', 'underscore', 'backbone', '_global'], function($, _, Backbone) {
	MP.GTMHelper = Backbone.View.extend({

		initialize: function(){
			MP.dispatcher.on('quickLoginOpen', this.quickLoginOpen);
			MP.dispatcher.on('registrationSuccess', this.registrationSuccessTrigger);
			MP.dispatcher.on('loginSuccess', this.loginSuccessTrigger);
			MP.dispatcher.on('userEnter', this.UserEnterTrigger);
			MP.dispatcher.on('shopJsRendered', this.shopJsRendered);
		},

		render: function(){
			/* ---------------------------------------------
			/* CRITEO tags - page based
			/* FACEBOOK Retargetting (for order confirmation only)
			/* ---------------------------------------------*/
			// Home page - commenting out this bit, because there's no home page anymore.  You may need to uncomment if criteo complains
			// if( Utils.hasPageClass('page-home') ){
			// 	dataLayer.push({
			// 		'customerId': accountId
			// 	});
			// }
			// Sale list page
			if( Utils.hasPageClass('page-saledetail') ){
				var products = _.toArray($('#product-list .product-block:lt(3)').map(function(){
						return String($(this).data('product'));
					}));
				dataLayer.push({
					'customerId': accountId,
					'productIds': products,
					'isSaleCurrent': isSaleCurrent
				});
			}
			// Product detail page
			if( Utils.hasPageClass('page-saleproductdetail') ){
				var productId = $('#product-id').val(),
					productName = $('.product-name-info .product-title').text(),
					productPrice = $('.priceshop').data('price'),
					brandName = $('.product-name-info .brand-name').text();

				dataLayer.push({
					'customerId': accountId,
					'productId': productId,
					'brandName': brandName,
					'productName': productName,
					'productPrice': productPrice,
				});
				if($('#item-added-bag') !== 'true'){
					// for GA ecommerce.  so that the page detail won't get the hit twice for adding to cart
					dataLayer.push({
						'event': 'productDetailView',
						'ecommerce': {
							'detail': {
								'actionField': {'list': 'Sale Detail Page'},
								'products': [{
									'name': productName,
									'id': productId,
									'price': productPrice,
									'brand': $('#sale-code').val(),
									'category': $('[data-sale-genres]').data('sale-genres')
								}]
							}
						}
					});
				}
			}

			// Basket page tag
			if( Utils.hasPageClass('page-shopbasket') ){
				var $shoppingBasket = $('#shoppingbasket');
				// if the bag is empty don't fire the tag
				if( $shoppingBasket.find('td.empty').length <= 0 ){
					var items = []; // for criteo tag
					var productIds = []; // for criteo tag
					var gaProducts = []; // for GA tag

					$shoppingBasket.find('tbody tr').each(function(index, elem){
						var $elem = $(elem);
						var id = $elem.data('product-id'),
							price = parseInt($elem.find('.unit-price').data('unit-price')),
							quantity = parseInt($elem.find('.quantity select').val());

						items.push({
							id: id,
							price: price,
							quantity: quantity
						});
						productIds.push(id);

						// for GA Ecommerce
						gaProducts.push({
							'name': $elem.find('.product-name .name').data('product-name'),
							'id': id,
							'price': price,
							'brand': $elem.data('sale-code'),
							'category': $elem.data('prod-category'),
							'variant': $elem.find('.size').text(),
							'quantity': quantity
						});
					});

					dataLayer.push({
						'customerId': accountId,
						'cartItems': items,
						'productIds': productIds,
						'totalAmount': $('.total').data('total'),
					});

					// GA Internal - Enhanced Ecommerce tracking
					// track checkout pages step1 - basket page reached
					dataLayer.push({
						'event': 'checkout',
						'ecommerce': {
							'checkout': {
								'actionField': {'step': 1},
								'products': gaProducts
							}
						}
					});
				}
			}

			// Order confirmation page
			if( Utils.hasPageClass('page-shopcheckoutconfirmation')){
				MP.dispatcher.trigger('checkoutSuccess');
				dataLayer.push({
					'customerId': accountId,
					'transactionId': criteoTrackerOrderId,
					'newCustomer': criteoTrackerNewCustomer,
					'cartItems': criteoTrackerItems,
					'productIds': productIds,
					'amountTotal': $('#productAmountAsString').val()
				});
			}

			if( Utils.hasPageClass('page-signupsuccess')){
				MP.dispatcher.trigger('signupSuccessPage');
			}
		},
		// for making sure all tags are fired after shop.js is loaded
		shopJsRendered: function(){
			dataLayer.push({
				'event': 'shopJsRendered'
			});
		},

		quickLoginOpen: function(mode, action) {
			dataLayer.push({
				'event': 'modalOpen',
				'modalMode': mode,
				'formTrigger': action
			});
		},

		registrationSuccessTrigger: function(opts) {
			// remove the token from the url
			var trackUrl = location.href.replace(/([?]|&)token=.*$/g, '');
			dataLayer.push({
				'event': 'signupSuccessful',
				'formTrigger': opts.formTrigger,
				'trackUrl': trackUrl
			});
		},

		loginSuccessTrigger: function(opts) {
			dataLayer.push({
				'event': 'loginSuccessful',
				'formTrigger': opts.formTrigger
			});
		},

		/* -------------------------------
		/* Dentsu Login Exclusion
		/* ------------------------------*/
		UserEnterTrigger: function(){
			dataLayer.push({'event': 'userEnter' });
		}
	});
});

define("google-tag-manager", function(){});

require(['jquery', 'underscore', 'backbone', '_utils', 'google-tag-manager'], function($, _, Backbone) {
	MP.MessageManager = Backbone.View.extend({
		el: 'body',
		MaxMessageDisplayCount: 3,

		FreeShippingExpiringMessage: "送料無料時間が間もなく終了！",
		FreeShippingExpiredMessage: "送料無料時間が終了しました。",

		initialize: function(){
			this.$accountMenuSwitch = this.$('#account-menu');
			this.$loginLink = this.$('.login-menu .login-link');
			MP.dispatcher.on('basketExpiring', this.showBasketExpiringGrowl, this);
			MP.dispatcher.on('basketExpired', this.showBasketExpiredGrowl, this);
			MP.dispatcher.on('freeshippingCountdown', this.showFreeShippingGrowl, this);
			MP.dispatcher.on('signupSuccess', this.setNewMember, this);
			MP.dispatcher.on('showGrowlMessage', this.showGrowlMessage, this);
		},

		render: function() {
			this.showWelcomeNewMember();

			// hack for the server error problem.  Clean out all the old session keys
			if(!Utils.MediaQuery.isIE8()){
				$.session.purgeAll('welcome', $.session._id.toString());
				$.session.purgeAll('encourage-login', $.session._id.toString());
			}

			this.showPresaleMessage();

			if(this.$loginLink.length > 0 && Utils.hasPageClass('page-saledetail')){
				this.initMemberOnlySaleTooltip();
			}

			this.initCampaignHeader();

			return this;
		},

		setNewMember: function(opts) {
			this.setCookie('mp-modal-signup', opts.formTrigger);
		},

		showWelcomeNewMember: function(){
			var $quickLogin = this.$('#quicklogin');
			var newSignupMode = $.cookie('mp-modal-signup') || $.cookie('mp-oauth-signup');
			if($quickLogin.length > 0 && newSignupMode){
				$quickLogin.modal();
				// remove the cookie
				this.deleteCookie('mp-modal-signup');
				this.deleteCookie('mp-oauth-signup');
				// send tracker
				MP.dispatcher.trigger('registrationSuccess', {formTrigger: newSignupMode});
			}
		},

		showBasketExpiringGrowl: function(){
			this.showGrowlMessage("お取り置き時間が間もなく終了！<br/>バッグが空になります。");
		},

		showBasketExpiredGrowl: function(){
			this.showGrowlMessage("お取り置き時間が終了しました。");
		},

		showFreeShippingGrowl: function(phase){
			var msg = (phase == 'expiring' ? this.FreeShippingExpiringMessage : this.FreeShippingExpiredMessage);
			this.showGrowlMessage(msg);
		},

		showGrowlMessage: function(msg, container){
			$.growl({ container: (container || '#main'), title: "", message: msg });
		},

		initMemberOnlySaleTooltip: function(){
			if(this.$('.members-only').length > 0 && $.cookie('membersonly', { path: '/' }) != 'true' ){
				var $membersonlyTooltip = this.$('.members-only').first();
				$membersonlyTooltip.tooltip({
					placement: 'bottom',
					trigger: 'manual',
					title: "正規ブランドとオフィシャルなパートナーシップを結び、直接取引によって、\
							プライスダウンを実現しています。<br/>\
							<br/>\
							会員さまだけに特別価格でご紹介することを条件に各ブランドと\
							価格交渉をしているため、特別価格の公開は、会員さまだけに限定しております。\
							（また、メーカー希望小売価格と、ミレポルテだけの特別価格を公正に表示しております。）<br/>\
							<br/>\
							ミレポルテだけの特別価格のセールをチェックするには、\
							<a href='#' class='go-to-signup'>会員登録</a>の上、<a href='#' class='go-to-login'>ログイン</a>を！",
					html: true,
					template: '<div class="tooltip tooltip-message tooltip-memberonly">\
							<div class="tooltip-arrow"></div>\
							<div class="tooltip-close"><span class="glyphicon glyphicon-remove"></span></div>\
							<div class="tooltip-title">価格を表示しない理由</div>\
							<div class="tooltip-inner"></div>\
							</div>'
				});

				$membersonlyTooltip.tooltip('show');
				// we need to adjust the position based on the screensize, so removing the javascript positioning by bootstrap tooltip
				var $tooltip = $('.tooltip-memberonly');
				$tooltip.attr('style', '');
				$tooltip.find('.tooltip-close').on('click', _.bind(function(){
					$membersonlyTooltip.tooltip('hide');
					$.cookie('membersonly', 'true', {path: '/' });
				}, this));
			}
		},

		initCampaignHeader: function(){
			var $campaignHeader = $('.closeable-campaign-header ');
			if($campaignHeader.length > 0){
				if(this.getMessageCount('campaign') >= 3){
					$campaignHeader.hide();
				}
				else {
					$campaignHeader.show();
					$('.freeshipping-link').one('click', _.bind(function(){
						this.incrementMessageCount('campaign', this.MaxMessageDisplayCount);
					}, this));
					$campaignHeader.find('.btn-close').one('click', _.bind(function(){
						$campaignHeader.hide();
						this.incrementMessageCount('campaign', this.MaxMessageDisplayCount);
					}, this));
				}
			}
		},

		showPresaleMessage: function(){
			if(!this.initDinersPresaleTooltip()){
				this.initPresaleTooltip();
			}
		},

		// Assumption:
		// No diners presales are on at the same time
		// The next diners presale starts at least after 3 days
		initDinersPresaleTooltip: function() {
			var $diners = this.$('#account-menu-pane .specials a.diners');
			if($diners.length > 0){
				var showMessage = false;
				var presaleIds = [];

				// Check if the tooltip is already displayed and closed by the user
				if(this.getPresaleCookie('diners') !== 'true'){
					this.$accountMenuSwitch.tooltip({
						placement: 'bottom',
						trigger: 'manual',
						title: "Diners メンバーのお客様だけに先行セールのお知らせです。時間限定のセールなので、早めにアクセスを！\
							<br/>メニューを開き、「SPECIALS」内の「Diners 先行セール」をセレクト。",
						html: true,
						template: '<div class="tooltip tooltip-message tooltip-presales-message">\
							<div class="tooltip-arrow"></div>\
							<div class="tooltip-close"><span class="glyphicon glyphicon-remove"></span></div>\
							<div class="tooltip-title">スペシャルセールの<span class="nobreak">お知らせ！</span></div>\
							<div class="tooltip-inner"></div>\
							</div>'
					});

					this.$accountMenuSwitch.tooltip('show');
					// we need to adjust the position based on the screensize, so removing the javascript positioning by bootstrap tooltip
					var $presaleTooltip = $('.tooltip-presales-message');
					$presaleTooltip.attr('style', '');
					$presaleTooltip.find('.tooltip-close').one('click', _.bind(function(){
						this.$accountMenuSwitch.tooltip('hide');
						this.markPresales(['diners']);
					}, this));
					this.$accountMenuSwitch.one('click', _.bind(function(){
						this.$accountMenuSwitch.tooltip('hide');
						this.markPresales(['diners']);
					}, this));
				} // end showMessage
				return true;
			}
			return false;
		},

		// Presale tooltip are displayed up to "MaxMessageDisplayCount" times if the user continues browsing the site without
		// closing the tooltip.  If the user either click on the menu or close the tooltip by clicking on the close button,
		// the display count is automatically max out, so the tooltip won't be displayed again.
		initPresaleTooltip: function() {
			var $presales = this.$('#account-menu-pane .specials a.presale');

			// show only when presale is available AND on the pages where the shopping bag appears in header
			if($presales.length > 0 && $('#header .shopping-bag').length > 0) {
				var showMessage = false;
				var presaleIds = [];
				// check for new presales
				$presales.each(_.bind(function(index, ps){
					var saleId = $(ps).data('id');
					// check if the new presale has started
					if(this.getPresaleCookie(saleId) !== 'true'){
						presaleIds.push(saleId);
						showMessage = true;
					}
				}, this));

				// Don't show this tooltip more than 3 times
				if(showMessage && this.getMessageCount('presale') <= this.MaxMessageDisplayCount){
					this.$accountMenuSwitch.tooltip({
						placement: 'bottom',
						trigger: 'manual',
						title: "あなただけに先行セール情報をお届けします。時間限定セールなので、早めにアクセスを！\
							<br/>メニューを開き、「SPECIALS」内の「先行セール」をセレクト。",
						html: true,
						template: '<div class="tooltip tooltip-message tooltip-presales-message">\
							<div class="tooltip-arrow"></div>\
							<div class="tooltip-close"><span class="glyphicon glyphicon-remove"></span></div>\
							<div class="tooltip-title">スペシャルセールの<span class="nobreak">お知らせ！</span></div>\
							<div class="tooltip-inner"></div>\
							</div>'
					});

					this.$accountMenuSwitch.tooltip('show');

					this.incrementMessageCount('presale'); // count how many times the tooltip is shown
					MP.dispatcher.trigger('PresaleTooltipShown', this.getMessageCount('presale'));

					// we need to adjust the position based on the screensize, so removing the javascript positioning by bootstrap tooltip
					var $presaleTooltip = $('.tooltip-presales-message');
					$presaleTooltip.attr('style', '');
					$presaleTooltip.find('.tooltip-close').one('click', _.bind(function(){
						this.$accountMenuSwitch.tooltip('hide');
						MP.dispatcher.trigger('PresaleTooltipHidden', 'menuClicked', this.getMessageCount('presale'));
						this.incrementMessageCount('presale', this.MaxMessageDisplayCount);
						this.markPresales(presaleIds);
					}, this));
					this.$accountMenuSwitch.one('click', _.bind(function(){
						this.$accountMenuSwitch.tooltip('hide');
						MP.dispatcher.trigger('PresaleTooltipHidden', 'closeClicked', this.getMessageCount('presale'));
						this.incrementMessageCount('presale', this.MaxMessageDisplayCount);
						this.markPresales(presaleIds);
					}, this));
				} // end showMessage
			}
		},

		deleteCookie: function(name){
			$.cookie(name, null, { path: '/', expires: 'Thu, 01-Jan-70 00:00:01 GMT;' });
		},

		setCookie: function(name, value){
			$.cookie(name, value, { path: '/'});
		},

		markPresales: function(saleIds) {
			saleIds.each(function(saleId){
				$.cookie('presale-' + saleId, 'true', { expires: 1, path: '/' });
			});
		},

		getPresaleCookie: function(saleId) {
			return $.cookie('presale-' + saleId, { path: '/' });
		},

		incrementMessageCount: function(name, count) {
			var messageName = 'message-' + name;
			var count = count ? count : this.getMessageCount(name);

			$.cookie('message-' + name, ++count, { expires: 1, path: '/' });
		},

		getMessageCount: function(name){
			var messageName = 'message-' + name;
			return $.cookie(messageName) == null ? 0 : parseInt($.cookie(messageName));
		}
	});
});

define("message-manager", function(){});

require([
	'jquery',
	'underscore',
	'backbone',
	//'react',
	//'backbone-react',
	'_global',
	'_utils'], function($, _, Backbone) {
	MP.ProductFilterView =  Backbone.View.extend({
		initialize: function(opts) {
			this.selectedCategories = opts.selectedCategories;
			this.selectedSizes = opts.selectedSizes;

			this.listenTo(this.selectedCategories, 'change', this.render);
			this.listenTo(this.selectedSizes, 'change', this.render);
			MP.dispatcher.on('filterClosed', this.closeSelector, this);
		},

		toggleSelector: function(ev) {
			this.$labelSelector.toggleClass('open');
			this.$selector.toggleClass("active");
			if(this.$labelSelector.hasClass('open')) {
				// Clicking anywhere other than the filter will close the dropdown list
				$('body, .brand-title, .product-filters').on('click', _.bind(function(ev){
					if($(ev.target).closest('.product-filter label').length <= 0 && $(ev.target).closest('.product-filter ul').length <= 0){
						this.closeSelector();
						$( this ).off(ev);
					}
				}, this));
			}
			ev.stopPropagation();
		},

		closeSelector: function(){
			this.$labelSelector.removeClass('open');
			this.$selector.removeClass("active");
		},

		getSelectedValues: function(newValues, existingValues){
			// convert a single value to an array of one element, array to array
			//var values = [].concat(newValues);
			var values = newValues;
			if(_.contains(values, 'all')){
				return ['all'];
			}
			else {
				// If the value is already in the exisintValues list, unselect it
				// Always conpare the first value of the array. Only time the values are more than 1 elements, they are parent category
				if(_.contains(existingValues, (values[0]))){
					existingValues.removeAll(values);

					// If all specific values are deselected, revert to all
					if(existingValues.length == 0){
						return ['all'];
					}
					return existingValues;
				}
				// if not add to the existing values (if the previous value was 'all' replace it)
				else {
					if( _.contains(existingValues, 'all')){
						return values;
					}
					else{
						return _.union(existingValues, values);
					}
				}
			}
		}
	});
});


define("filter", function(){});

require(['underscore', 'filter', '_global', '_utils'], function(_) {
  MP.CategoryFilter = MP.ProductFilterView.extend({
    events: {
      'click .category-filter-select': 'toggleSelector',
      'click #category-selector.active li a:not(.disabled)': 'filterSelected'
    },

    initialize: function(opts) {
      MP.ProductFilterView.prototype.initialize.call(this, opts);

      this.categories = opts.categories; // collection
      this.$labelCaegoryFilter = this.$labelSelector = this.$('label.category-filter-select');
      this.$selector = this.$('#category-selector');

      this.render();

      MP.dispatcher.on('filterChanged', this.updateAvailableCategories, this);
    },

    render: function() {

      this.$('a:not([data-value=all])').toggleClass('disabled', true);
      _.each(this.categories.filter(function(s){return s.get('available') == true}, this), function(s){
        this.$('a[data-value*=' + s.get('id') + ']').toggleClass('disabled', false);
      }, this);

      var categoryIds = this.selectedCategories.get('value');
      this.$('a').toggleClass('selected', false);
      if(_.contains(categoryIds, 'all')){
        this.$('a[data-value=all]').toggleClass('selected', true);
        this.$labelCaegoryFilter.text('カテゴリー');
        if(!Utils.MediaQuery.isTouchScreen()){
          this.$labelCaegoryFilter.tooltip('destroy');
          this.$labelCaegoryFilter.tooltip({
            trigger: 'hover',
            title: 'すべて'
          });
        }
      }
      else {
        var lblText = [];
        _.each(categoryIds, function(id){
          var $opt = this.$('a[data-value*=' + id + ']');
          $opt.toggleClass('selected', true);

          // if a child of sub category, also print parent menu
          if($opt.closest('ul').hasClass('flat')){
            var $parent = $opt.closest('li.sub').find('a:first');
            // if the parent cateogry is already displayed, don't include in the label
            if ( !_.contains(categoryIds, String($parent.data('value')) ) ) {
              lblText.push($parent.text() + "ー" + $opt.text());
            }
          }
          else {
            // select all children if it's a sub category
            if($opt.closest('li').hasClass('sub')){
              $opt.closest('li').find('a').toggleClass('selected', true);
              lblText.push($opt.text() + 'ーすべて');
            }
            else{
              lblText.push($opt.text());
            }
          }
        }, this);
        lblText = lblText.join(', ');
        this.$labelCaegoryFilter.text(lblText);
        if(!Utils.MediaQuery.isTouchScreen()){
          this.$labelCaegoryFilter.tooltip('destroy');
          this.$labelCaegoryFilter.tooltip({
            trigger: 'hover',
            title: lblText
          });
        }
      }
    },

    filterSelected: function(ev) {
      var $categoryElem = this.$(ev.target);
      var categories = String($categoryElem.data('value')).split('_');
      var currentCategories = this.selectedCategories.get('value');

      // If the selected filter is a subcategory add all the child categories to the list
      if($categoryElem.closest("li").hasClass('sub')){
        categories =
          _.toArray($categoryElem.closest("li").find('a').map(_.bind(function(index, elem){
              return String(this.$(elem).data('value'));
          }, this)));
      }

      this.selectedCategories.set('value', this.getSelectedValues(categories, currentCategories) );

      MP.dispatcher.trigger('filterCategoryChanged', this.selectedCategories.get('value'));
      MP.dispatcher.trigger('filterChanged', this.selectedCategories.get('value'), this.selectedSizes.get('value'));
      this.render(); // update the filter view
      Utils.$window.trigger('resize'); // trigger window resize to make lazyloaded images appear
    },

    updateAvailableCategories: function(){
      var selectedSizes  = this.selectedSizes.get('value');
      var available;
      this.categories.each(function(cat){
          available = _.some(cat.get('sizes'), function(size){
            return _.contains(selectedSizes, 'all') || _.contains(selectedSizes, size);
          }, this);
          cat.set('available', available);
      }, this);

      this.render();
    }
  });
});

define("category-filter", function(){});

// Generated by CoffeeScript 1.7.1
require(['underscore', 'filter'], function(_) {
   MP.SizeFilter = MP.ProductFilterView.extend({
    //el: '#category-filter',
    events: {
      'click .size-filter-select' : 'toggleSelector',
      'click #size-selector.active li a:not(.disabled)' : 'filterSelected'
    },

    initialize: function(opts) {
      MP.ProductFilterView.prototype.initialize.call(this, opts);

      this.sizes = opts.sizes;
      this.render();

      MP.dispatcher.on('filterChanged', this.updateAvailableSizes, this)
    },

    render: function() {
     // this.$('select').val(sizeId);

      if (this.$('#size-selector').length <= 0) {
        this.$el.append('<ul id="size-selector"></ul>');

        this.$('#productSizeSelect option').each(_.bind(function(i, element) {
          var indexValue, sizeValue;
          sizeValue = this.$(element).text();
          indexValue = this.$(element).attr('value');
          if (indexValue) {
            this.$('#size-selector').append('<li><a data-value="' + indexValue + '">' + sizeValue + '</a></li>');
            if(indexValue == 'all'){
              // add free size
              if(this.sizes.find(function(model){ return model.get('id') == 'F'})){
                this.$('#size-selector').append('<li><a data-value="F">フリーサイズ</a></li>');
              }
            }
          } else {
            return this.$('#size-selector').append('<li><a class="allSize" data-value="">' + sizeValue + '</a></li>');
          }
        }, this));
        this.$lblSizeFilter = this.$labelSelector = this.$('label.size-filter-select');
        this.$selector = this.$('#size-selector');
      }

      this.$('a:not([data-value=all])').toggleClass('disabled', true);
      var availableSizes = this.sizes.filter(function(s){return s.get('available') == true}, this);
      _.each(availableSizes, function(s){
        this.$('a[data-value="' + s.get('id') + '"]').toggleClass('disabled', false);
      }, this);

      var sizeIds = this.selectedSizes.get('value');

      this.$('a').toggleClass('selected', false);
      if(_.contains(sizeIds, 'all')){
        this.$('a[data-value=all]').toggleClass('selected', true);
        this.$lblSizeFilter.text('サイズ');
        if(!Utils.MediaQuery.isTouchScreen()){
          this.$lblSizeFilter.tooltip('destroy');
          this.$lblSizeFilter.tooltip({
            trigger: 'hover',
            title: "すべて"
          });
        }
      }
      else {
        _.each(sizeIds, function(id){
          this.$('a[data-value="' + id + '"]').toggleClass('selected', true);
        }, this);
        // replace the label and add tooltip
        sizeIds = sizeIds.join(', ');
        this.$lblSizeFilter.text(sizeIds);
        if(!Utils.MediaQuery.isTouchScreen()){
          this.$lblSizeFilter.tooltip('destroy');
          this.$lblSizeFilter.tooltip({
            trigger: 'hover',
            title: sizeIds
          });
        }
      }

    },

    filterSelected: function(ev) {
      var size = this.$(ev.target).data('value');
      var selectedSizes = this.selectedSizes.get('value');

      this.selectedSizes.set('value', this.getSelectedValues((!_.isArray(size) ? [String(size)]: size), selectedSizes) );

      MP.dispatcher.trigger('filterSizeChanged', this.selectedSizes.get('value'));
      // Update the product list
      MP.dispatcher.trigger('filterChanged', this.selectedCategories.get('value'), this.selectedSizes.get('value'));
      this.render(); // update the filter view
      Utils.$window.trigger('resize'); // trigger window resize to make lazyloaded images appear
    },

    updateAvailableSizes: function(){
      var selectedCategories  = this.selectedCategories.get('value');
      var available;
      this.sizes.each(function(size){
          available = _.some(size.get('categories'), function(cat){
            return _.contains(selectedCategories, 'all') || _.contains(selectedCategories, cat);
          }, this);
          size.set('available', available);
      }, this);

      this.render();
    }

  });
});

define("size-filter", function(){});

require(['jquery', 'underscore', 'backbone', '_global'], function($, _, Backbone) {
  MP.ProductSelectionView =  Backbone.View.extend({

    events: {
      'click .go-to-login': "showQuicklogin",
      'click .go-to-signup': "showQuickSignup",
      'imageLoaded img.prod-img': "prodImageLoaded",
      'click a' : 'prodClicked'
    },

    initialize: function() {
      this.model.set('name', this.$('.product-preview').data('prod-name'));
      this.model.set('price', this.$('.priceshop').data('price'));
      this.url = this.$('a').attr('href');
      MP.dispatcher.on('filterChanged', this.filterChanged, this);
    },

    filterChanged: function(categories, sizes) {
      if( this.categoryMatches(categories) && this.sizeMatches(sizes) ){
        this.$el.show();
      }
      else {
        this.$el.hide();
      }
    },

    categoryMatches: function(categories) {
      return _.contains(categories, 'all')
        || _.find(this.model.get('categories'), function(cat){
          return _.contains(categories, cat);
        });
    },

    sizeMatches: function(sizes){
      return _.contains(sizes, 'all')
        || _.find(this.model.get('sizes'), function(size){
          return _.contains(sizes, size);
        });
    },

    showQuicklogin: function(ev){
      ev.preventDefault();
      MP.dispatcher.trigger('quickLoginOpen', 'login', 'HiddenPrice');
    },

    showQuickSignup: function(ev){
      ev.preventDefault();
      MP.dispatcher.trigger('quickLoginOpen', 'signup', 'HiddenPrice');
    },

    // create a product hash for use of GA
    getGAProduct: function($target, containerName){
      if(!this.product){
        var saleCode = $target.closest('[data-product]').data('sale-code');
        this.product =
          {
           'name': this.model.get('name'),
           'id': this.model.get('id'),
           'price': this.model.get('price'),
           'brand': saleCode,
           'category': this.model.get('genre'),
           //'variant': '',
           'list': containerName,
           'position': this.model.get('position')
         };
      }
      return this.product;
    }
  });
});

define("product-selection", function(){});

require(['jquery', 'underscore', 'backbone', 'bootstrap-tooltip', 'jquery.countdown','field-validation', '_utils'], function($, _, Backbone) {

  MP.LoginView = Backbone.View.extend({

    events: {
      'click .switch-to-signup': "toggleToSignup",
      'click .switch-to-login': "toggleToLogin",
      'submit .form-login': "submitLogin",
      'submit .form-signup': "submitSignup",
      'blur [name=dob-year]': "validateYear",
      'blur [name=dob-month]': "validateMonth",
      'blur [name=dob-day]': "validateDay",
      'keyup [name=dob-year].error': "validateYear",
      'keyup [name=dob-month].error': "validateMonth",
      'keyup [name=dob-day].error': "validateDay"
    },

    initialize: function(opts) {
      this.isModal = opts.modal;
      this.mode = opts.initialMode;
      MP.dispatcher.on('quickLoginOpen', this.showQuickLogin, this);
      MP.dispatcher.on('nagbarSignupOpen', this.showNagbarLogin, this);
      MP.dispatcher.on('ToggleModalMode', this.toggleLoginSignup, this);
    },

    render: function() {
      // remember me is checked by default
      if(typeof(rememberMe) !== 'undefined') {
        this.$('#rememberme').prop('checked', rememberMe);
      }

      this.initTooltip();

      // Copy the retained values to the visible input fields if this is callback
      this.$('#email').val(this.$('[name=email]').val());

      this.$birthdate = this.$("input[name=birthdate]");
      if(this.$birthdate.length > 0){
        this.$year = this.$('input[name=dob-year]');
        this.$month = this.$('input[name=dob-month]');
        this.$day = this.$('input[name=dob-day]');

        var birthdate = this.$birthdate.val().split('-');
        if(birthdate.length == 3){
          this.$year.val(birthdate[0]);
          this.$month.val(birthdate[1]);
          this.$day.val(birthdate[2]);
        }
      }
    },

    initTooltip: function() {
      // show info tooltips
      this.$('.info-dob, .info-gender, .info-name, .required-symbol').tooltip({
        trigger: Utils.MediaQuery.isTouchScreen() ? 'click' : undefined
      });

      this.$('input.email, input.password, input.fullname, input[name=dob-year], input[name=dob-month], input[name=dob-day]').tooltip({
        trigger: 'focus'
      });

      if (document.documentElement.offsetWidth < 720) {
        return;
      }
      $.fn.tooltip.defaults.trigger = Modernizr.touch ? 'manual' : 'hover';
      $('.remember').tooltip({
        placement: 'right',
        html: 'true',
        title: "<p>自動ログインを有効にすると、次回以降メールアドレスとパスワードの入力を省略できます。</p>\n<p>お使いのブラウザのクッキーを削除することも可能ですが、その場合MILLEPORTEに入場するたびに、ユーザ名とパスワードを再入力する必要があります。</p>\n<p>お使いのコンピュータが公共のもの、あるいは何人もの人がアクセスする共有のものである場合、セキュリティの観点からこの機能をオフにすることをお勧めします。</p>"
      });
      if (Modernizr.touch) {
        $('.remember input').click(function(event) {
          var checked;
          event.stopPropagation();
          checked = $(event.currentTarget).attr('checked');
          $('.remember').tooltip(checked ? 'show' : 'hide');
        });
        $('body').on('touchstart', function(event) {
          $('.remember').tooltip('hide');
        });
      }
    },

    showNagbarLogin: function(email){
      if($('#quicklogin').length > 0) {
        this.showQuickLogin('signup', 'Nagbar');
        this.loginModal.find('.login-message-content').hide();
        if(email){
          this.loginModal.find('.email').val(email);
        }
      }
      else {
      }
    },

    showQuickLogin: function(mode, formTrigger, opts) {
      if(typeof(mode) == 'undefined'){
        mode = this.mode;
      }

      // The quicklogin div is outside of this element
      if($('#quicklogin').length > 0) {
        this.loginModal = $('#quicklogin');
        this.loginModal.find('[name=formTrigger]').val(formTrigger);
        if(this.mode != mode){
          this.toggleLoginSignup(undefined, mode);
        }

        if(typeof(opts) !== 'undefined' && opts.message){
          this.loginModal.find('.login-message-content').text(opts.message);
        }

        // To reuse the modal login for in-page form, add/remove the modal class
        this.loginModal.one('shown', _.bind(function(){
          this.loginModal.addClass('modal');
          MP.dispatcher.trigger('ModalRegistrationShown', mode, formTrigger);
        }, this));
        this.loginModal.one('hidden', _.bind(function(){
          this.loginModal.attr('style', ''); // remove element level display attribute
          this.loginModal.removeClass('modal');
          this.toggleToSignup();
        }, this));

        if(Utils.MediaQuery.isTouchScreen() ) {
          this.loginModal.one('shown', _.bind(function(){
            this.loginModal.css('top', Utils.$window.scrollTop() + 10);
          }, this));
        }
        else {
          this.loginModal.one('shown', _.bind(function(){
            this.loginModal.css({
              'position': 'absolute',
              'top': Utils.$window.scrollTop() + 10,
              'margin-top': '1em'
            });
          }, this));
        }
        this.loginModal.modal('show');
      }
    },

    toggleToLogin: function(ev){
      this.toggleLoginSignup(ev, 'login');
    },

    toggleToSignup: function(ev){
      this.toggleLoginSignup(ev, 'signup');
    },

    toggleLoginSignup: function(ev, mode) {
        if(this.isModal){
          if(typeof(ev) != 'undefined'){
            ev.preventDefault();
            ev.stopPropagation();
          }
          if(mode != this.mode){
            this.$('.form-login').toggle();
            this.$('.form-signup').toggle();
            this.mode = (this.$('.form-login').css('display') == 'none') ? 'signup' : 'login';
          }
        }
        else{
          var loc = $(ev.target).data('href');
          if(loc) {
            window.location = loc;
          }
        }
    },

    submitLogin: function(ev) {
      var $form = this.$(ev.target);
      this.submitForm(ev, $form, 'login');
    },

    submitSignup: function(ev) {
      var $form = this.$(ev.target);
      this.submitForm(ev, $form, 'signup');
    },

    validateSignupForm: function(){
      var formValid = true;
      formValid = this.validateForm();

      this.$('[name=email]').val(this.$('#email').val());
      formValid = formValid && this.validatePasswordConfirmation();

      if(this.$birthdate.length > 0){
        this.$("input[name=birthdate]").val("");
        // check the birthday inputs
        var yearValid = this.validateYear();
        var monthValid = this.validateMonth();
        var dayValid = this.validateDay();

        if(yearValid && monthValid && dayValid){
          this.$("input[name=birthdate]").val(this.$year.val() + "-" + this.$month.val() + "-" + this.$day.val());
        }
        else{
          return false;
        }
      }
      return formValid;

    },

    toggleLoading: function($form, show){
      var $button = $form.find('#submitLoginButton');
      $button.prop('disabled', show);
      // IE8 and 9 is too much work on the styling to show spinner. Disabling.
      if(!Utils.MediaQuery.isOldIEs()){
        $button.closest('.btn-submit').toggleClass('loading', show);
      }
    },

    submitForm: function(ev, $form, mode) {
      if(this.isModal == true) {
        ev.preventDefault();
        if( mode == 'signup' && !this.validateSignupForm() ){
          return false;
        }

        var formTrigger = $form.find('[name=formTrigger]').val();
        var $error = $form.find('.error-messages');
        $error.hide();

        // handle ajax login request
        var contentType = "application/json";
        if(Utils.MediaQuery.isIE8() || Utils.MediaQuery.isIE9() ){
          contentType = "text/html";
        }
        this.toggleLoading($form, true);
        var url = $form.attr('action');
        if(mode == 'signup'){
          url = ($form.hasClass('https') ? 'https:': 'http:') + '//' + $(location).attr('host') + '/json/signup';
        }
        $.ajax({
            type: $form.attr('method'),
            url: url,
            data: $form.serialize(),
            context: this,
            success: function (data) {
                if(Utils.MediaQuery.isOldIEs() ){
                  data = JSON.parse(data);
                }
                if(data.success == true || data.success == 'true') {
                  // Fire either 'loginSuccess' or 'signupSuccess'
                  MP.dispatcher.trigger( mode + 'Success', {token: data.token, formTrigger: formTrigger});
                }
                else {
                  if(data.error) {
                    $error.html(_.map(data.error, function(error){ return error + "<br/>"}));
                  }
                  $error.show();
                }
                this.toggleLoading($form, false);
            },
            error: function(data) {
              this.toggleLoading($form, false);
              $error.html("サーバーエラーが起こりました。しばらくたっても問題が解決されない場合は、カスタマーサポートにご連絡ください。");
              $error.show();
              if(Utils.MediaQuery.isOldIEs()){
                  data = JSON.parse(data);
              }
              console.error('Server error occured in server during ' + mode, data);
            }
        });

        ev.preventDefault();
      }
      else { // not modal (stndard form)
        if(mode == 'signup'){
          if(this.validateSignupForm()){
            return true;
          }
          else{
            ev.preventDefault();
            return false;
          }
        }
        else{
          return true;
        }
      }
    }
  });

  _.extend(MP.LoginView.prototype, MP.FieldValidation);

});

define("login", function(){});

require([
    'underscore',
    'jquery',
    'backbone',
    'category-filter',
    'size-filter',
    'product-selection',
    'login'
  ], function(_, $, Backbone) {
  MP.ShopDirectory = Backbone.Router.extend({

    routes: {
      'filter?:params': 'update'  // /filter?category=c1,c2,c3&size=s1,s2
    },

    initialize: function() {
      this.$productList = $('#product-list');

      if(this.$productList.length > 0){
        this.populate();

        this.selectedCategories = new Backbone.Model({value: ['all']});
        this.selectedSizes = new Backbone.Model({value: ['all']});

        this.categoryFilter = new MP.CategoryFilter({
          el: '.category-filter',
          categories: this.categories,
          selectedCategories: this.selectedCategories,
          selectedSizes: this.selectedSizes
        });

        this.sizeFilter = new MP.SizeFilter({
          el: '.size-filter',
          sizes: this.sizes,
          selectedCategories: this.selectedCategories,
          selectedSizes: this.selectedSizes
        });

        this.productSelections = new Backbone.Collection;

        _.each(this.products, function(product, index){
          var productModel = new Backbone.Model({
              id: product.id,
              categories: product.categories,
              sizes: product.sizes,
              saleCode: this.saleCode,
              position: index + 1,
              genre: this.genre
          });

          new MP.ProductSelectionView({
            el: product.element,
            model: productModel
          });

          this.productSelections.add(productModel);
        }, this);


        MP.dispatcher.on('filterChanged', function(cats, sizes){
          this.update('category='+ cats.join(',') + '&size=' + sizes.join(','), true);
        }, this);

        $('.loading-products').hide();
      }

      // Show the login modal if this page is presale and the user is logged out
      if(!Utils.isUserLoggedin() && typeof(fromPresale) !== "undefined" && fromPresale == 'true') {
        MP.dispatcher.trigger('quickLoginOpen', 'login', 'Presale - Auto Popup', {message: 'この先行セールを見るにはログインをしてください。'});
      }

      MP.dispatcher.on('loginSuccess', this.reloadPage, this);
      MP.dispatcher.on('signupSuccess', this.reloadPage, this);
    },

    // populate the list of products and available categories / sizes
    populate: function() {
      this.products = [];
      this.categories = new Backbone.Collection;
      this.sizes = new Backbone.Collection;
      this.saleCode = $('#sale-code').val();
      this.genre = $('#category').val();

      var allCategories = [], allSizes = [];
      var $productBlocks = $('#product-list .product-block');

      $productBlocks.each(_.bind(function(index, element) {
        var $elem = $(element),
            categories = String($elem.data('category')).split('-'), // the subcategory that has the children is concatenated with '-' (dash)
            dataSizes = $elem.data('sizes'),
            sizes = [];

        allCategories = _.union(allCategories, categories);

        // Format the escape characters
        if(dataSizes.length > 0){
          sizes = (dataSizes.replace('[', '').replace(']','').replace(/"/g, '').replace(/\\/g, '')).split(',')
        }
        else {
          sizes = ['F'];
        }
        allSizes = _.union(allSizes, sizes);

        this.products.push({
            id: $elem.data('product'),
            element: element,
            categories: categories,
            sizes: sizes
        });

        _.each(categories, function(cat){
          var catModel = this.categories.find(function(model){
            return model.get('id') == cat;
          });

          if(catModel){
            catModel.set('sizes', _.union(catModel.get('sizes'), sizes));
          }
          else {
            this.categories.add(
              new Backbone.Model({
                id: cat,
                sizes: sizes,
                available: true
              })
            );
          }
        }, this);

        _.each(sizes, function(size){
          var sizeModel = this.sizes.find(function(model){
            return model.get('id') == size;
          });

          if(sizeModel){
            sizeModel.set('categories', _.union(sizeModel.get('categories'), categories));
          }
          else {
            this.sizes.add(
              new Backbone.Model({
                id: size,
                categories: categories,
                available: true
              })
            );
          }
        }, this);

      }, this));
    },

    update: function(params, updateRoute) {
      if(updateRoute){
        // update the route
        var paramCategories = '', paramSizes = '';
        if (!_.contains(this.selectedCategories.get('value'), 'all'))  {
          paramCategories = 'category=' + this.selectedCategories.get('value').join(',');
        }
        if (!_.contains(this.selectedSizes.get('value'), 'all')) {
          paramSizes = 'size=' + this.selectedSizes.get('value').join(',');
        }

        if(paramCategories.length > 0 && paramSizes.length > 0){
          this.navigate('filter?'+ paramCategories + '&' + paramSizes);
        }
        else if(paramCategories.length == 0 && paramSizes.length == 0){
          this.navigate('filter');
        }
        else if(paramCategories.length > 0){
          this.navigate('filter?' + paramCategories);
        }
        else {
          this.navigate('filter?' + paramSizes)
        }

      }
      else {
        var p = params.split('&');
        var cats = ( p[0] && p[0].indexOf('category') >= 0 ) ? p[0].split('=')[1].split(',') : [];
        var sizes = ( p[1] = (p[1] || (p[0].indexOf('size') >= 0 ? p[0] : null) )) ? p[1].split('=')[1].split(',') : [];
        this.selectedCategories.set('value', (cats.length > 0) ? cats : ['all'] );
        this.selectedSizes.set('value', (sizes.length > 0) ? sizes : ['all'] );
        MP.dispatcher.trigger('filterChanged', this.selectedCategories.get('value'), this.selectedSizes.get('value'));
      }
    },

    reloadPage: function(opts){
      window.location = $(location).attr('href') + "?token=" + opts.token;
    }
  });
});

define("shopdirectory", function(){});

// Generated by CoffeeScript 1.7.1
require(['jquery', 'underscore', 'backbone', '_utils', 'jquery.dropdown'], function($, _, Backbone) {

  MP.BagView = Backbone.View.extend({

    initialize: function() {
      MP.dispatcher.on('itemAdded', function(){
        this.highlightBag();
        // show the bag contents only when in desktop mode
        if(!Utils.MediaQuery.isMobile()) {
          this.showBagContents();
        }
      }, this);

      this.$bagCountdown = this.$('#bag-contents [data-countdown]');
      this.$bagCountdown.one('itemExpiringStarted', function(){
        MP.dispatcher.trigger('basketExpiring');
      });

      this.$bagCountdown.one('countdownStopped', _.bind(function(){
        MP.dispatcher.trigger('basketExpired');
        this.resetBasket();
      }, this));

      this.$.freeshippingCountdown = this.$('.freeshipping [data-countdown]').first();
      this.$.freeshippingCountdown.one('itemExpiringStarted', function(){
        MP.dispatcher.trigger('freeshippingCountdown', 'expiring');
      });
      this.$.freeshippingCountdown.one('countdownStopped', function(){
        MP.dispatcher.trigger('freeshippingCountdown', 'expired');
      });
    },

    render: function() {
      this.$toggleBagEl = $('.bag-complete .bag-infos');
      this.$toggleBagEl.dropdown({
        animate: true
      });

      // Register another event listener for mobile devices
      if(Utils.MediaQuery.isMobile()) {
        this.$toggleBagEl.on('click touchstart', function() {
          var $linkCheckout = $('a.checkout');
          if(!$linkCheckout.is(':visible')){
            var url = $('a.checkout').attr('href');  // go to checkuot page
            window.location.href = url;
          }
        });
      }

      $('.bag .bag-close').on('click', _.bind(function(){
        event.preventDefault();
        this.$toggleBagEl.dropdown('close');
      }, this));
    },

    highlightBag: function() {
      setTimeout(_.bind(function(){
        this.$toggleBagEl.dropdown('open');
      }, this), 1500);
    },

    showBagContents: function() {
      this.$toggleBagEl.trigger('click');

      setTimeout(_.bind(function() {
        this.$toggleBagEl.dropdown('close');
      }, this), 5000);
    },

    resetBasket: function() {
      this.$toggleBagEl.find('.item-count span').text("0");
      this.$toggleBagEl.find('.countdown-amount').remove();
    }
  });

});

define("bag", function(){});

// Generated by CoffeeScript 1.7.1
require(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {

  MP.NagBarView = Backbone.View.extend({
    events: {
      'click .nagbar-registration': "showNagbarLogin",
      'click .nagbar-close': 'closeNagbar',
      'focus [name=nag-email]': 'openNagbar',
      'click .nagbar-title': 'openNagbar'
    },

    render: function() {
      // hack for the IOS8 bug
      if(Utils.MediaQuery.isIOS8Up()){
        this.openNagbar();
        this.$('.email').closest('.control-group').remove();
      }
      return this;
    },

    showNagbarLogin: function(ev){
    	ev.preventDefault();
      if(Utils.MediaQuery.isIOS8Up()){
        MP.dispatcher.trigger('nagbarSignupOpen');
      }
      else{
    	 MP.dispatcher.trigger('nagbarSignupOpen', this.$('[name=nag-email]').val());
      }
    },

    closeNagbar: function(ev) {
      ev.preventDefault();
      this.$el.removeClass('nagbar-open');
    },

    openNagbar: function(){
    	this.$el.addClass('nagbar-open');
    }
  });
});

define("nagbar", function(){});

!function ($) {

  

  var SlidingPane = function (element, options) {
    this.options = options;
    this.$element = $(element).clone(true, true).show();
    this.$slidingPane =  $('#sliding-pane');

    // render the content inside the sliding pane
    var $contentPane = this.$slidingPane.find('.sliding-content');
    $contentPane.children().remove();
    $contentPane.html(this.$element);

    // register close button
    this.$slidingPane.find('.sliding-pane-close').on('click', $.proxy(this.hide, this));
  }

  SlidingPane.prototype = {

  	constructor: SlidingPane,

  	show: function () {
  		var that = this;
  		$('body').addClass('sliding-pane-open');
  	},

  	hide: function (e) {
  		$('body').removeClass('sliding-pane-open');
      }
  }


 /* SLIDING PANE JQUERY PLUGIN DEFINITION
  * ======================= */

  $.fn.slidingpane = function (option) {
    return this.each(function () {
      var options = {};
      var data  = new SlidingPane(this, options);
      if (typeof option == 'string') data[option]();
      else if (options.show) data.show();
    });
  };

  $.fn.slidingpane.defaults = {
      backdrop: true
    , keyboard: true
    , show: true
  };

  $.fn.slidingpane.Constructor = SlidingPane;


}(window.jQuery);
define("slidingpane", function(){});

/*!
 * jQzoom Evolution Library v2.3  - Javascript Image magnifier
 * http://www.mind-projects.it
 *
 * Copyright 2011, Engineer Marco Renzi
 * Licensed under the BSD license.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the organization nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * Date: 03 May 2011 22:16:00
 */
require(['jquery'], function ($) {
    //GLOBAL VARIABLES
    var body = $(document.body);
    var window = $(window);
    var jqzoompluging_disabled = false; //disabilita globalmente il plugin
    $.fn.jqzoom = function (options) {
        return this.each(function () {
            var node = this.nodeName.toLowerCase();
            if (node == 'a') {
                new jqzoom(this, options);
            }
        });
    };
    jqzoom = function (el, options) {
        var api = null;
        api = $(el).data("jqzoom");
        if (api) return api;
        var obj = this;
        var settings = $.extend({}, $.jqzoom.defaults, options || {});
        obj.el = el;
        $(el).addClass('jqzoom');

        //ANCHOR ELEMENT
        el.zoom_active = false;
        el.zoom_disabled = false; //to disable single zoom instance
        el.largeimageloading = false; //tell us if large image is loading
        el.largeimageloaded = false; //tell us if large image is loaded
        el.scale = {};
        el.timer = null;
        el.mousepos = {};
        el.mouseDown = false;

        //BASE IMAGE
        var img = $("img:eq(0)", el);
        img.addClass('zoom-small-image');
        el.title = $(el).attr('title');
        el.imagetitle = img.attr('title');
        var zoomtitle = ($.trim(el.title).length > 0) ? el.title : el.imagetitle;
        var smallimage = new Smallimage(img);

        //creating zoomWindow
        el.$zoomContainer = (settings.zoomContainer || $(el));

        var stage = new Stage();

        var lens, largeimage;
        if(settings.touch){
            lens = new TouchLens();
            largeimage = new TouchLargeImage();
        }
        else {
           lens = new Lens();
           largeimage  = new Largeimage();
        }

        var loader = new Loader();

        //preventing default click,allowing the onclick event [exmple: lightbox]
        $(el).bind('click', function (e) {
            e.preventDefault();
            return false;
        });

        //setting the default zoomType if not in settings
        var zoomtypes = ['standard', 'innerzoom'];
        if ($.inArray($.trim(settings.zoomType), zoomtypes) < 0) {
            settings.zoomType = 'standard';
        }
        var lastTouchStart = false;
        $.extend(obj, {
            create: function () { //create the main objects
                //create ZoomPad
                if ($(".zoomPad", el).length == 0) {
                    el.zoomPad = $('<div/>').addClass('zoomPad');
                    img.wrap(el.zoomPad);
                }
                if(settings.zoomType == 'innerzoom'){
                    settings.zoomWidth  = smallimage.w;
                    settings.zoomHeight  =   smallimage.h;
                }
                //creating ZoomPup
                if ($(".zoomPup", el).length == 0) {
                    lens.append();
                }

                if ($(".zoomWindow", el.$zoomContainer).length == 0) {
                    stage.append();
                }
                //creating Preload
                if ($(".zoomPreload", el).length == 0) {
                    loader.append();
                }
                //preloading images
                if (settings.preloadImages) {
                    obj.load();
                }

                obj.setZoomWidth();

                obj.init();
            },

            destroy: function(){
                img.unwrap(); // remove zoompad
                lens.remove(); // remove zoompup
                stage.remove(); // remove zoomwindow
                loader.remove(); // remove zoompreload
            },

            init: function () {
                if (settings.zoomType == 'innerzoom') {
                    $(".zoomWrapper", el).css({
                        cursor: 'crosshair'
                    });
                }

                el.$zoomPad = $(".zoomPad", el);
                if(!settings.touch){

                    if(settings.zoomTrigger) {

                        el.$zoomTrigger = $(settings.zoomTrigger);
                        el.$zoomTrigger.on('click', function(e){
                            e.preventDefault();
                            if(el.zoom_active){
                                obj.deactivate($(this));
                            }
                            else {
                                obj.zoomStart(e);
                            }
                        });

                        el.$zoomPad.on('mouseenter mouseover', function (e) {
                            if(el.zoom_active){
                                obj.zoomStart(e);
                            }
                        });

                        el.$zoomPad.on('mousemove', function (e) {
                            if(el.zoom_active){
                                obj.zoomMove(e);
                            }
                        });
                    }
                    else {

                        el.$zoomPad.on('mouseenter mouseover', function (e) {
                            obj.zoomStart(e);
                        });

                        el.$zoomPad.on('mouseleave', function (e) {
                            obj.deactivate();
                            largeimage.setInactive();
                        });

                        el.$zoomPad.on('mousemove', function (e) {
                            obj.zoomMove(e);
                        });
                    }
                }

                if(settings.touch){
                    if(settings.touchToActivate) {
                        /* handle touch events */
                        el.$zoomPad.on("touchend", function(e){
                            // if the last touch is 'touchstart' event, it is not swipe
                            if(el.zoom_active && lastTouchStart) {
                                obj.deactivate($(this));
                                lastTouchStart = false;
                            }
                            else {
                                if(lastTouchStart){
                                    obj.zoomStart(e);
                                }
                            }
                        });
                        el.$zoomPad.on("touchstart", function(e){
                            lastTouchStart = true;
                        });
                        el.$zoomPad.on("touchmove", function(e){
                            lastTouchStart = false;
                        });
                    }

                    if(settings.zoomTrigger) {
                        el.$zoomTrigger = $(el).parent().find(settings.zoomTrigger);
                        el.$zoomTrigger.on('touchstart', function(e){
                            e.preventDefault();
                            if(el.zoom_active){
                                obj.deactivate($(this));
                            }
                            else {
                                obj.zoomStart(e);
                            }
                        });
                    }
                    else {
                        throw 'You need to set the zoomTrigger in order to activate zoom.';
                    }
                }
                obj.deactivate();
            },

            setZoomWidth: function() {
                var zoomWidth = settings.zoomContainer ? el.$zoomContainer.width() : (Math.round(settings.zoomWidth));
                var zoomHeight = settings.zoomContainer ? el.$zoomContainer.height() : (Math.round(settings.zoomHeight));
                settings.zoomWindowWidth = zoomWidth;
                settings.zoomWindowHeight = zoomHeight;

                // Remove the styling so that the div doesn't cover the normal page
                el.$zoomContainer.attr('style', '');
            },

            load: function () {
                if (el.largeimageloaded == false && el.largeimageloading == false) {
                    var url = $(el).attr('href');
                    el.largeimageloading = true;
                    largeimage.loadimage(url);
                }
            },
            zoomStart: function (e) {
                img.attr('title', '');
                $(el).attr('title', '');
                el.zoom_active = true;
                el.$zoomContainer.addClass('active');

                $(el).trigger('zoomActivated', el);
                //if loaded then activate else load large image
                smallimage.fetchdata();
                // set the xoffset if the zoom container is specified
                // if(settings.zoomContainer != null) {
                //     settings.Xoffset = -(smallimage.pos.l) - smallimage.bleft;
                // }
                if (el.largeimageloaded) {
                    obj.activate($(e.target));

                } else {
                    obj.load();
                }
            },
            zoomMove: function(e) {
                //prevent fast mouse mevements not to fire the mouseout event
                var pageX, pageY;
                if(e.type == 'touchmove' || e.type == 'touchstart' || e.type == 'touchend') {
                    var touch = e.originalEvent.touches[0];
                    pageX = touch.pageX;
                    pageY = touch.pageY;
                }
                else {
                    pageX = e.pageX;
                    pageY = e.pageY;
                }

                if(!settings.touch){
                    if (pageX > smallimage.pos.r || pageX < smallimage.pos.l || pageY < smallimage.pos.t || pageY > smallimage.pos.b) {
                        lens.setcenter();
                        return false;
                    }
                }
                el.zoom_active = true;
                el.$zoomContainer.addClass('active');

                if (el.largeimageloaded && !$('.zoomWindow', el.$zoomContainer).is(':visible') && !settings.touch) {
                    obj.activate(e);
                }
                if (el.largeimageloaded) {
                    lens.setposition(pageX, pageY);
                }
            },
            activate: function ($elem) {
                clearTimeout(el.timer);
                //show lens and zoomWindow
                lens.show();
                stage.show();
            },
            deactivate: function ($elem) {
                img.attr('title', el.imagetitle);
                $(el).attr('title', el.title);

                if(settings.zoomTrigger) {
                    largeimage.setcenter();
                }
                stage.hide();
                lens.hide();

                el.zoom_active = false;
                el.$zoomContainer.removeClass('active');

                $(el).trigger('zoomDeactivated', el);
            }
        });
        //sometimes image is already loaded and onload will not fire
        if (img[0].complete) {
            //fetching data from sallimage if was previously loaded
            smallimage.fetchdata();
            if ($(".zoomPad", el).length == 0) {
                obj.create();
            }
            else{
                obj.setZoomWidth();
                obj.init();
            }
        }
/*========================================================,
|   Smallimage
|---------------------------------------------------------:
|   Base image into the anchor element
`========================================================*/

        function Smallimage(image) {
            var $obj = this;
            this.node = image[0];
            this.findborder = function () {
                var bordertop = 0;
                bordertop = image.css('border-top-width');
                btop = '';
                var borderleft = 0;
                borderleft = image.css('border-left-width');
                bleft = '';
                if (bordertop) {
                    for (i = 0; i < 3; i++) {
                        var x = [];
                        x = bordertop.substr(i, 1);
                        if (isNaN(x) == false) {
                            btop = btop + '' + bordertop.substr(i, 1);
                        } else {
                            break;
                        }
                    }
                }
                if (borderleft) {
                    for (i = 0; i < 3; i++) {
                        if (!isNaN(borderleft.substr(i, 1))) {
                            bleft = bleft + borderleft.substr(i, 1)
                        } else {
                            break;
                        }
                    }
                }
                $obj.btop = (btop.length > 0) ? eval(btop) : 0;
                $obj.bleft = (bleft.length > 0) ? eval(bleft) : 0;
            };
            this.fetchdata = function () {
                $obj.findborder();
                $obj.w = image.width();
                $obj.h = image.height();
                $obj.ow = image.outerWidth(true);
                $obj.oh = image.outerHeight(true);
                $obj.pos = image.offset();
                $obj.pos.l = image.offset().left + $obj.bleft;
                $obj.pos.t = image.offset().top + $obj.btop;
                $obj.pos.r = $obj.ow + $obj.pos.l;
                $obj.pos.b = $obj.h + $obj.pos.t;
                if(typeof(image.css('margin-left')) == 'undefined') {
                    $obj.marginLeft = parseInt(image.css('margin-left'));
                    $obj.marginTop = parseInt(image.css('margin-top'));
                }
                else {
                    $obj.marginLeft = (image.offset().left - image.parent().offset().left);
                    $obj.marginTop = (image.parent().offset().top - image.offset().top);
                }

                $obj.pos.innerLeft = $obj.pos.l - $obj.marginLeft; // image offset of left excluding the margin
                $obj.rightlimit = image.offset().left + $obj.ow;
                $obj.bottomlimit = image.offset().top + $obj.oh;
            };
            this.node.onerror = function () {
                throw 'Problems while loading image.';
            };
            this.node.onload = function () {
                $obj.fetchdata();
                if ($(".zoomPad", el).length == 0) obj.create();
            };
            return $obj;
        };
/*========================================================,
|  Loader
|---------------------------------------------------------:
|  Show that the large image is loading
`========================================================*/

        function Loader() {
            var $obj = this;
            this.node = $('<div/>').addClass('zoomPreload');

            this.append = function () {
                this.node.html(settings.preloadText);
                if(settings.zoomContainer){
                    el.$zoomContainer.append(this.node);
                }
                else {
                    $('.zoomPad', el.$zoomContainer).append(this.node);
                }
            };

            this.remove = function(){
                $('.zoomPreload', el).remove();
            };

            this.show = function () {
                this.node.addClass('active');
                //setting position
                this.node.css({
                    top: this.node.top,
                    left: this.node.left
                });
            };
            this.hide = function () {
                this.node.removeClass('active');
            };
            return this;
        };
/*========================================================,
|   Lens
|---------------------------------------------------------:
|   Lens over the image
`========================================================*/

        function Lens() {
            var $obj = this;
            this.node = $('<div/>').addClass('zoomPup');
            //this.nodeimgwrapper = $("<div/>").addClass('zoomPupImgWrapper');
            this.append = function () {
                $('.zoomPad', el).append($(this.node));
            };
            this.remove = function(){
                this.node.remove();
            };
            this.setdimensions = function () {
                this.node.w = (parseInt((settings.zoomWidth) / el.scale.x) > smallimage.w ) ? smallimage.w : (parseInt(settings.zoomWidth / el.scale.x));
                this.node.h = (parseInt((settings.zoomHeight) / el.scale.y) > smallimage.h ) ? smallimage.h : (parseInt(settings.zoomHeight / el.scale.y));
                this.node.top = (smallimage.oh - this.node.h - 2) / 2;
                this.node.left = (smallimage.ow - this.node.w - 2) / 2;
                //centering lens
                this.node.css({
                    top: 0,
                    left: 0,
                    width: this.node.w + 'px',
                    height: this.node.h + 'px'
                });
            };

            this.setcenter = function () {
                //calculating center position
                this.node.top = (smallimage.oh - this.node.h - 2) / 2;
                this.node.left = (smallimage.ow - this.node.w - 2) / 2;
                //centering lens
                this.node.css({
                    top: this.node.top,
                    left: this.node.left
                });
                //centering large image
                largeimage.setposition();
            };

            this.setposition = function (pageX, pageY) {
                el.mousepos.x = pageX;
                el.mousepos.y = pageY;
                var lensleft = 0;
                var lenstop = 0;

                function overleft(lens) {
                    return el.mousepos.x - (lens.w) / 2 < smallimage.pos.l;
                }

                function overright(lens) {
                    return el.mousepos.x + (lens.w) / 2 > smallimage.pos.r;

                }

                function overtop(lens) {
                    return el.mousepos.y - (lens.h) / 2 < smallimage.pos.t;
                }

                function overbottom(lens) {
                    return el.mousepos.y + (lens.h) / 2 > smallimage.pos.b;
                }

                lensleft = el.mousepos.x + smallimage.bleft - smallimage.pos.l - (this.node.w + 2) / 2;
                lenstop = el.mousepos.y + smallimage.btop - smallimage.pos.t - (this.node.h + 2) / 2;
                if (overleft(this.node)) {
                    lensleft = smallimage.bleft - 1;
                } else if (overright(this.node)) {
                    lensleft = smallimage.w + smallimage.bleft - this.node.w - 1;
                }
                if (overtop(this.node)) {
                    lenstop = smallimage.btop - 1;
                } else if (overbottom(this.node)) {
                    lenstop = smallimage.h + smallimage.btop - this.node.h - 1;
                }

                this.node.left = lensleft;
                this.node.top = lenstop;
                this.node.css({
                    'left': (lensleft + smallimage.marginLeft) + 'px',
                    'top': lenstop + 'px'
                });

                largeimage.setposition();
            };
            this.hide = function () {
                this.node.removeClass('active');
            };
            this.show = function () {
                if (settings.zoomType != 'innerzoom' && settings.lens) {
                    this.node.addClass('active');
                }
            };
            this.getoffset = function () {
                var o = {};
                o.left = $obj.node.left;
                o.top = $obj.node.top;
                return o;
            };
            return this;
        };

        function TouchLens() {
            var base = new Lens();
            base.setposition = function(pageX, pageY){
                if(this.active){
                    this.active = false;
                    // calculate the distance
                    largeimage.moveimage(pageX - this.startX, pageY - this.startY);
                }
                else {
                    this.active = true;
                    this.startX = pageX;
                    this.startY = pageY;
                }

            };
            return base;
        };
/*========================================================,
|   Stage
|---------------------------------------------------------:
|   Window area that contains the large image
`========================================================*/

        function Stage() {
            var $obj = this;
            this.node = $("<div class='zoomWindow'><div class='zoomWrapper'><div class='zoomWrapperTitle'></div><div class='zoomWrapperImage'></div></div></div>");

            this.setposition = function () {
                this.node.leftpos = 0;
                this.node.toppos = 0;

                //positioning
                if(settings.zoomContainer == null && settings.zoomType != 'innerzoom' ) {
                    switch (settings.position) {
                    case "left":
                        this.node.leftpos = (smallimage.pos.l - smallimage.bleft - Math.abs(settings.xOffset) - settings.zoomWindowWidth > 0) ? (0 - settings.zoomWidth - Math.abs(settings.xOffset)) : (smallimage.ow + Math.abs(settings.xOffset));
                        this.node.toppos = Math.abs(settings.yOffset);
                        break;
                    case "top":
                        this.node.leftpos = Math.abs(settings.xOffset);
                        this.node.toppos = (smallimage.pos.t - smallimage.btop - Math.abs(settings.yOffset) - settings.zoomWindowHeight > 0) ? (0 - settings.zoomWindowHeight - Math.abs(settings.yOffset)) : (smallimage.oh + Math.abs(settings.yOffset));
                        break;
                    case "bottom":
                        this.node.leftpos = Math.abs(settings.xOffset);
                        this.node.toppos = (smallimage.pos.t - smallimage.btop + smallimage.oh + Math.abs(settings.yOffset) + settings.zoomWindowHeight < screen.height) ? (smallimage.oh + Math.abs(settings.yOffset)) : (0 - settings.zoomWindowHeight - Math.abs(settings.yOffset));
                        break;
                    default:
                        this.node.leftpos = (smallimage.rightlimit + Math.abs(settings.xOffset) + settings.zoomWindowWidth < screen.width) ? (smallimage.ow + Math.abs(settings.xOffset)) : (0 - settings.zoomWidth - Math.abs(settings.xOffset));
                        this.node.toppos = Math.abs(settings.yOffset);
                        break;
                    }
                }
                else {
                    this.node.leftpos = 0;
                    this.node.toppos = 0;
                }

                this.node.css({
                    'left': this.node.leftpos + 'px',
                    'top': this.node.toppos + 'px'
                });
                return this;
            };
            this.append = function () {
                if (settings.zoomType == 'innerzoom') {
                    $('.zoomPad', el.$zoomContainer).append(this.node);
                }
                else {
                    el.$zoomContainer.append(this.node);
                }

                el.$zoomWrapper = $('.zoomWrapper', this.node);

                if (settings.zoomType == 'innerzoom') {
                    this.node.addClass('inner-zoom');
                }
                $('.zoomWrapperTitle', this.node).html(zoomtitle);

                $obj.setposition();
            };
            this.remove = function() {
                $('.zoomWindow').remove();
            };
            this.hide = function () {
                el.$zoomContainer.find('.zoomWindow').removeClass('active');
                this.node.removeClass('active');
            };
            this.show = function () {
                el.$zoomContainer.find('.zoomWindow').addClass('active');
                this.node.addClass('active');
            };
        };
/*========================================================,
|   LargeImage
|---------------------------------------------------------:
|   The large detailed image
`========================================================*/

        function Largeimage() {
            var $obj = this;
            this.node = new Image();
            $(this.node).addClass('zoom-large-image');
            this.loadimage = function (url) {
                //showing preload
                loader.show();
                this.url = url;
                this.node.style.left = '-5000px';
                this.node.style.top = '0px';

                document.body.appendChild(this.node);
                this.node.src = url; // fires off async
            };

            this.fetchdata = function () {
                var image = $(this.node);
                var scale = {};
                this.node.style.display = 'block';
                $obj.w = image.width();
                $obj.h = image.height();
                $obj.pos = image.offset();
                $obj.pos.l = image.offset().left;
                $obj.pos.t = image.offset().top;
                $obj.pos.r = $obj.w + $obj.pos.l;
                $obj.pos.b = $obj.h + $obj.pos.t;
                scale.x = ($obj.w / smallimage.w);
                scale.y = ($obj.h / smallimage.h);
                el.scale = scale;
                //document.body.removeChild(this.node);
                $('.zoomWrapperImage', el.$zoomContainer).children().hide();
                $('.zoomWrapperImage', el.$zoomContainer).append(this.node);
                //setting lens dimensions;
                lens.setdimensions();
            };
            this.node.onerror = function () {
                throw 'Problems while loading the big image.';
            };
            this.node.onload = function () {
                //fetching data
                $obj.fetchdata();
                loader.hide();
                el.largeimageloading = false;
                el.largeimageloaded = true;
                lens.show();
                stage.show();

                // If innerzoom with zoom trigger, show the zoom image it at activation
                if(settings.zoomTrigger){
                    largeimage.setcenter();
                }
            };
            this.setposition = function () {
                if(!$obj.active) {
                    $('.zoomWrapperImage', el.$zoomContainer).children().hide();
                    this.node.style.display = 'block';
                    $obj.active = true;
                }
                var left = -el.scale.x * (lens.getoffset().left - smallimage.bleft + 1);
                var top = -el.scale.y * (lens.getoffset().top - smallimage.btop + 1);
                $(this.node).css({
                    'left': left + 'px',
                    'top': top + 'px'
                });
            };
            this.setcenter = function() {
                this.node.style.display = 'block';
                $(this.node).css({
                    'left': (smallimage.w - $obj.w) / 2,
                    'top': (smallimage.h - $obj.h) / 2
                });
            };
            this.setActive = function() {
                $obj.active = true;
            };
            this.setInactive = function() {
                $obj.active = false;
            };
            return this;
        };

        function TouchLargeImage() {
            var left = 0, top = 0;
            var lastLeft= 0, lastTop = 0
            var obj = new Largeimage();

            obj.loadimage = function (url) {
                //showing preload
                loader.show();
                this.url = url;
                //this.node.style.display = 'none';
                document.body.appendChild(this.node);
                this.node.src = url; // fires off async
            };

            obj.setcenter = function () {
                this.node.style.display = 'block';
                // scroll the position of the image so that the center of the image shows up in the window
                $(this.node).parent().scrollTop(obj.h / 2);
                $(this.node).parent().scrollLeft(obj.w / 2);
            };
            return obj;
        };

        $(el).data("jqzoom", obj);
    };
    //es. $.jqzoom.disable('#jqzoom1');
    $.jqzoom = {
        defaults: {
            zoomType: 'standard',
            //innerzoom/standard
            zoomWidth: 300,
            //zoomWindow  default width
            zoomHeight: 300,
            //zoomWindow  default height
            xOffset: 10,
            //zoomWindow x offset, can be negative(more on the left) or positive(more on the right)
            yOffset: 0,
            //zoomWindow y offset, can be negative(more on the left) or positive(more on the right)
            position: "right",
            //zoomWindow default position
            preloadImages: true,
            //image preload
            preloadText: '',
            title: true,
            lens: true,
            // the jquery element of the container that the zoomWindow is placed in
            // if not specified, this will be inside this element.
            zoomContainer: null,
            // touchstart activates the zoom
            touchToActivate: true,
            // if touchToActivate is false, you should define the jquery element to be clicked (touchstart)
            zoomTrigger: null,
            touch: false
        },
        disable: function (el) {
            var api = $(el).data('jqzoom');
            api.disable();
            $(el).removeClass('jqzoom');
            return false;
        },
        enable: function (el) {
            var api = $(el).data('jqzoom');
            api.enable();
            return false;
        },
        disableAll: function (el) {
            jqzoompluging_disabled = true;
        },
        enableAll: function (el) {
            jqzoompluging_disabled = false;
        },
        deactivateAll: function($els){
            var api;
            $els.each(function(index, elm){
                api = $(elm).data('jqzoom');
                if(api.el.zoom_active) {
                    api.deactivate();
                }
            });
            return false;
        }
    };
});
define("jquery.jqzoom", function(){});

require([
	'jquery',
	'underscore',
	'backbone',
	'slidingpane',
	'slick',
	'jquery.jqzoom',
	'_utils',
	'google-analytics/product-tracking'
], function($, _, Backbone) {
	MP.ProductViewBase = Backbone.View.extend({

		defaults: {
			itemDescriptionMinHeight: '5.2em'
		},

		initialize: function(opts) {

			this.isMobile = opts.isMobile;
			this.sizes = opts.sizes;

			this.templateThumbnail = _.template(
				'<li data-index="<%= index %>">\
					<img src="<%= imgSrc %>" />\
				</li>'
			);

			this.templateMaginifiedImageContainer = _.template('<div class="magnified-image-container"></div>');

			this.templateSizeItem = _.template(
				'<div class="size">\
					<a href="javascript:void(0)" class="<%= disabled %>" data-value="<%= value %>">\
							<%= label %>\
					</a>\
				</div>'
			);

			MP.dispatcher.on('loginSuccess', this.addToCart, this);
			MP.dispatcher.on('signupSuccess', this.addToCart, this);
		},

		render: function() {
			// Set the default value for size
			this.$variant = this.$('#variantSelect');
			this.$variant.val('');

			this.$quantity = this.$('#amountSelect');
			this.$quantity.val(1);

			this.$thumbnails = this.$('.product-thumbnails');

			this.$itemDescription = this.$('.item-description');

			this.productId = this.$('#product-id').val(),
			// get the sale genre for this product
			this.productGenres = this.$('[data-sale-genres]').data('sale-genres');
			this.saleCode = this.$('#sale-code').val(); // get the sale code of this product

			if(!Utils.isAdminView()){
				this.$('.size-guide a').trigger('click');
				// open the closed pane by default dependin on the genre
				if(this.productGenres == "GOURMET" || this.productGenres == "LIFESTYLE"){
				this.$('.product-description-others a.product-detail-title').trigger('click');
				}
				else {
					this.$('.brand-info a.product-detail-title').trigger('click');
				}
			}

			// modify the href for back navigation button (to sale detail page)
			var urlToSaleDetailPage = this.$('.show-sale-detail-link a').attr('href');
			this.$('.show-sale-detail-link a').attr('href', urlToSaleDetailPage + "#prod-" + this.productId);

			// render product pictures
			this.renderGallery();

			// show errors/warnings
			var $alcoholWarning = this.$('#alcohol-warning-dialog');
			if ($alcoholWarning.length > 0) {
				$alcoholWarning.modal('show');
			}
			var $alcoholError = this.$('#alcohol-error-dialog');
			if($alcoholError.length > 0) {
				$alcoholError.modal('show');
			}

			var $waitinglistDialog = this.$('#waitinglist-dialog');
			if($waitinglistDialog.length > 0) {
				$('.waiting-list').click(function(event){
					event.preventDefault()
					$waitinglistDialog.modal('show')
				});
			}

			// if the user is underage, don't do any of the actions.
			if(this.$variant.length <=0){
				return this;
			}

			// hide the additional message if the adding to cart fails on signup
			if( this.$('#item-added-bag').val() == 'false' && this.$('#quicklogin.thankyou-signup').length > 0) {
				this.$('#quicklogin.thankyou-signup .additional-message').hide();
			}


			// render size if there are more than one size and sizeGuide is available
			if(this.sizes.length > 0) {
				var sizeItemTemplates = _.map(this.sizes, _.bind(function(size) {
					return this.templateSizeItem(size);
				}, this));
				this.$('.size-selector').html(sizeItemTemplates);
				// if only one size is available, select that size by default
				if(this.$('.size').length == 1) {
					this.$('.size a').trigger('click');
				}
			}
			else {
				if(this.$variant.length > 0){
					// if not size guide is available, select the default size
					// and remove the size selector display all together
					this.$variant[0].selectedIndex = 1;
					// Remove the size section all together if no sizes or sizeguide is present
					if(this.$('.size-guide-display-content p').text().length <= 0){
						this.$('.variant').remove();
					}
				}
			}

			// show tooltips for disalbed size
			this.$('.size-selector a.disabled').tooltip({
				placement: 'top',
				title: "販売終了"
			});

			this.itemDescriptionHeight = this.$('.item-description-content').outerHeight();
			this.$('.item-description-content').addClass('height-transition-hidden');

			this.initProductsMenu();	// display product menu on top for mobile devices

		},

		initProductsMenu: function() {
			if(Utils.MediaQuery.isMobile()) {
				var obj = this;

				new MP.Products({saleCode: this.saleCode}).fetch({
					success: function(products) {
						new MP.ProductsMenuView({
							el: obj.$('#products-nav'),
							collection: products,
							productId: obj.productId,
							productGenres: obj.productGenres,
							saleCode: obj.saleCode
						}).render();
					}
				});
			}
		},

		renderGallery: function(){
			this.$productGallery = this.$('.product-gallery .slides');

			this.$productGallery.slick({
				dots: false,
				lazyLoad: 'ondemand',
				responsive: [
						{
							breakpoint: Utils.MediaQuery.SCREEN_WIDTH_LARGE,
							settings: {
								dots: true,
								lazyLoad: 'ondemand'
							}
						}]
			});

			var initImageZoom = _.bind(function(){

				this.$galleryImages = this.$productGallery.find('.gallery-image');

				// As soon as the zoom starts, disable the slick sliding behavior
					this.$galleryImages.on('zoomActivated', _.bind(function(e, zoomElem){
						this.$productGallery.slick('slickSetOption', 'swipe', false);
						this.$productGallery.addClass('hasZoomActivated');
						$(zoomElem).closest('.product-gallery-image').addClass('zoom-active');
					}, this));

					this.$galleryImages.on('zoomDeactivated', _.bind(function(e, zoomElem){
						this.$productGallery.slick('slickSetOption', 'swipe', true);
						this.$productGallery.removeClass('hasZoomActivated');
						$(zoomElem).closest('.product-gallery-image').removeClass('zoom-active');
					}, this));

					this.$galleryImages.jqzoom({
						zoomType: 'innerzoom',
						preloadImages: false,
						preloadText: "",
						alwaysOn: false,
						touch: Utils.MediaQuery.isTouchScreen(),
						touchToActivate: Utils.MediaQuery.isTouchScreen(),
						zoomTrigger: Utils.MediaQuery.isTouchScreen() ? '.zoom-activate' : null
					});
			}, this);

			initImageZoom();
			this.$productGallery.on('init', initImageZoom);

			// Register thumbnail select event on slide
			this.$productGallery.on('afterChange', _.bind(function(ev, slider) {
				this.selectThumbnail(this.$thumbnails.find('li[data-index=' + slider.currentSlide + ']'));
				// deactivate any active zoom whenever the slide change
				$.jqzoom.deactivateAll(this.$galleryImages);
			}, this));

			// Read the rendered product gallery images, render thumbnail pictures on the side
			if (!Utils.MediaQuery.isMobile()) {
				var thumbnails = this.$('.product-gallery li[data-thumb]').map(_.bind(function(index, thumbnail){
					return $(this.templateThumbnail(
						{
								imgSrc: $(thumbnail).data('thumb'),
								index: index -1
						}))[0];
				}, this));
				// remove the first and last thumbnail (becuase it is redundant)
				thumbnails.splice(0, 1);
				thumbnails.splice(thumbnails.length -1, 1);
				this.$thumbnails.append(thumbnails);

				this.thumbnailSlicked = false;

				// If the thumbnail is more than 4, make it a vertical slider
				if(thumbnails.length > 4) {
					this.$thumbnails.slick({
						vertical: true,
						verticalSwiping: true,
						infinite: false,
						slidesToShow: 4,
						slidesToScroll: 1,
						arrows: true,
						dots: false,
						slide: 'li',
						appendArrows: ".thumbnails-nav"
					});
					this.thumbnailSlicked = true;
				}

				// Select the first thumbnail
				this.selectThumbnail(this.$thumbnails.find('li:first'));
			}
		},

		thumbnailClicked: function(ev) {
			var $thumbnailElem = $(ev.target).closest('li');

			this.selectThumbnail($thumbnailElem);

			// move to the selected picture
			var index = $thumbnailElem.data("index");
			this.$productGallery.slick('slickGoTo', index);

			MP.dispatcher.trigger('productDetailElementClicked', ev, 'Thumbnail');
		},

		selectThumbnail: function($thumbnail) {
			// highlight the selected thumbnail
			this.$thumbnails.find('li').removeClass('selected');
			$thumbnail.addClass('selected');

			// make sure the thumbnail to be visible is if it's slicked
			if(this.thumbnailSlicked){
				this.$thumbnails.slick('slickGoTo', $thumbnail.data('slick-index'));
			}
		},

		toggleTruncateItemDescription: function(ev){
			ev.preventDefault();
			var $target = this.$(ev.target);
			var $itemDesc = this.$('.item-description .item-description-content');

			if ($itemDesc.hasClass("height-transition-hidden")){
				$itemDesc.slideDownTransition(this.defaults.itemDescriptionMinHeight, this.itemDescriptionHeight );
				this.$('.item-description').toggleClass('open');
				MP.dispatcher.trigger('productDetailElementClicked', ev, 'ReadMore');
			}
			else{
					$itemDesc.slideUpTransition(this.defaults.itemDescriptionMinHeight);
					setTimeout(_.bind(function(){
						this.$('.item-description').toggleClass('open');
					}, this), 500);
			}
		},

		sizeChanged: function(ev) {
			ev.preventDefault();
			var $size = this.$(ev.target);
			// toggle selected class
			this.$('.size-selector .size').removeClass('selected');
			$size.closest('.size').addClass('selected')

			this.$variant.val($size.data('value'));
		},

		showSlideModal: function($content) {
			$('body').scrollTop(0); // make sure the body is top
			$content.slidingpane('show');
		},

		toggleSizeGuide: function(ev) {
			ev.preventDefault();
			var $target = this.$(ev.target);
			var $sizeGuide = this.$('.size-guide-display');
			 if ($sizeGuide.hasClass("height-transition-hidden")) {
						$sizeGuide.slideDownTransition();
						MP.dispatcher.trigger('productDetailElementClicked', ev, 'SizeGuide');
				}
				else {
						$sizeGuide.slideUpTransition();
				}
			$target.toggleClass('isActive');
		},

		toggleProductDetail: function(ev) {
			ev.preventDefault();
			var $target = this.$(ev.target);
			var $prodDetail = $target.next();
			if ($prodDetail.hasClass("height-transition-hidden")) {
					$prodDetail.slideDownTransition();
					MP.dispatcher.trigger('productDetailElementClicked', ev, 'ProductDetail$' + $target.closest('.product-detail').attr('class'));
			}
			else {
					$prodDetail.slideUpTransition();
			}
			$target.toggleClass('open');
		},

		showQuickSignup: function(ev) {
			ev.preventDefault();
			var $target = this.$(ev.target);
			var trigger;
			if($target.closest('.prices').length > 0){
				trigger = "HiddenPrice";
			}
			else {
			trigger = $target.data('trigger');
			}
			MP.dispatcher.trigger('quickLoginOpen', 'signup', trigger);
		},

		showQuickLogin: function(ev) {
			ev.preventDefault();
			var trigger = this.$(ev.target).closest('.prices').length > 0 ? "HiddenPrice" : "AddCart";
			MP.dispatcher.trigger('quickLoginOpen', 'login', trigger);
		},

		addToCart: function(ev) {
			try {
				ev.preventDefault();
			}
			catch(er){}
			if(ev.token){
				// if the token is passed.	Add url parameter to shopping form
				this.$('#shoppingform').append('<input name="token" type="hidden" value="' + ev.token + '"/>');
			}
			this.$('#submitShoppingForm').trigger('click');
		}
	});

	MP.ProductView = MP.ProductViewBase.extend({
		events: {
			'click .product-thumbnails li': 'thumbnailClicked',
			'click .read-more': 'toggleTruncateItemDescription',
			'click .size-selector a:not(.disabled)': 'sizeChanged',
			'click .size-guide a': 'toggleSizeGuide',
			'click .go-to-signup': "showQuickSignup",
			'click .go-to-login': "showQuickLogin",
			'click .add-to-cart': "addToCart",
			'click a.product-detail-title': 'toggleProductDetail',
			'imageLoaded .related-products img.prod-img': "prodImageLoaded",
			'click a.related-product' : 'prodClicked'
		},

		initialize: function(opts){
			MP.ProductViewBase.prototype.initialize.call(this, opts);
		}
	});

});
define("product", function(){});

// BackToTop component

require(['jquery', 'underscore', 'backbone', '_utils'], function($, _, Backbone) {
	MP.BackToTop = Backbone.View.extend({
		events: {
			'click': 'handleClick'
		},

		initialize: function(){
			this.isHidden = true;
			this.$el.hide();
			$(window).on('scroll', _.debounce(_.bind(this.callback, this), 100));
			this.callback();
		},

		handleClick: function(evt){
			evt.preventDefault();
			Utils.$body.animate({
				'scrollTop': 0
			}, 600);
		},

		callback: function() {
			if (Utils.$body.scrollTop() > 300) {
				if (this.isHidden) {
					this.isHidden = false;
					this.$el.stop(true, true).show().css({
						opacity: 0
					}).animate({
						opacity: 1
					}, 100);
				}
			} else if (!this.isHidden) {
				this.isHidden = true;
				this.$el.stop(true, true).fadeOut(300);
			}
		}
	});
});



define("backtotop", function(){});

// require config.js
var jQueryPluginShim;
jQueryPluginShim = {
  deps: ['jquery'],
  exports: 'jQuery'
};
requirejs.config({
  baseUrl: '/static/js/',
  waitSeconds: 0,
  paths: {
    jquery: 'libs/jquery/jquery-1.8.2.min',
    'picturefill': 'libs/picturefill',
    'jquery.countdown': 'libs/jquery/jquery.countdown',
    'jquery.dropdown': 'libs/jquery/jquery.dropdown',
    'jquery.cookie': 'libs/jquery/jquery.cookie',
    'jquery.lazyload': 'libs/jquery/jquery.lazyload.min',
    'jquery.accordions': 'libs/jquery/jquery.accordions',
    'bootstrap-tooltip': 'libs/jquery/bootstrap-tooltip',
    'bootstrap-modal': 'libs/jquery/bootstrap-modal',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone',
    hbs: 'libs/require-handlebars-plugin/hbs'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'jquery.cookie': jQueryPluginShim,
    'jquery.lazyload': jQueryPluginShim,
    'jquery.dropdown': jQueryPluginShim,
    'jquery.accordions': jQueryPluginShim,
    'bootstrap-tooltip': jQueryPluginShim,
    'bootstrap-modal': jQueryPluginShim
  }
});
//jQuery.noConflict();

// app main function starts here
require([
  'jquery',
  'underscore',
  'backbone',
  '_utils',
  '_global',
  'picturefill',
  'pages/sale-list',
  'pages/sale-detail',
  'pages/brand',
  'pages/checkout-payment-method',
  'pages/account',
  'pages/account-returns',
  'pages/account-returnhistory',
  'pages/campaign',
  'jquery.dropdown',
  'jquery.cookie',
  'jquery.session',
  'jquery.growl',
  'jquery.countdown',
  'jquery.slidetransition',
  'jquery.lazyload',
  'jquery.accordions',
  'bootstrap-tooltip',
  'bootstrap-modal',
  'models/sales',
  'models/products',
  'models/return-item',
  'google-analytics/ctr-tracking-manager',
  'google-analytics/app-tracking',
  'google-analytics/checkout-tracking',
  'menus/category-menu',
  'menus/category-submenu',
  'menus/category-navigation',
  'menus/products-menu',
  'menus/bottom-genre-menu',
  'message-manager',
  'shopdirectory',
  'bag',
  'slick',
  'login',
  'nagbar',
  'product',
  'google-tag-manager',
  'backtotop'
  ], function($, _, Backbone) {

  $(function(){
    var start = function() {
      // hack for tapestry here
      Tapestry.pageLoaded = true;

      if(!Utils.isAdminView()){
        // define all extension
        _.extend(MP.ProductView.prototype, MP.ProductTracking);
        _.defaults(MP.ProductSelectionView.prototype, MP.ProductTracking); // using defaults so that second argument won't override the first
        _.extend(MP.ProductsMenuView.prototype, MP.ProductTracking);
        _.extend(MP.SaleListPageView.prototype, MP.SaleBannerTracking);
        _.extend(MP.CampaignPageView.prototype, MP.SaleBannerTracking);
        _.extend(MP.BottomGenreMenu.prototype, MP.SaleBannerTracking);
        _.extend(MP.CategoryNavigation.prototype, MP.SaleBannerTracking);
        _.extend(MP.SalesMenuView.prototype, MP.SaleBannerTracking);
        new MP.AppTracking(); // should be instanciated before GRM Helper
        new MP.CtrTrackingManager({el: 'body'}).render();
        new MP.GTMHelper().render();
        if( Utils.hasPageClass('page-checkout')){
          new MP.CheckoutTracking({el: Utils.$body.find('#main')});
        }
      }

      Utils.$window.on("beforeunload", function(ev) {
        MP.dispatcher.trigger('pageUnload', ev);
      });

      $('[data-countdown]').countdown();
      $('img.lazyload').lazyload({threshold: 100});

      var $saleCode = $('#sale-code');
      var saleId = ($saleCode.length > 0) ? $saleCode.val() : null;
      new MP.CategoryNavigation({el: '#shop-menu', saleId: saleId}).render();

      $('.modal.dialog').modal('show');

      // this login window should be instantiated before any page renders
      if($('.login-signup').length > 0) {
        // if the login is in product page, the modal dialog opens
        new MP.LoginView({
          el: '.login-signup',
          modal: !(Utils.hasPageClass('page-login') || Utils.hasPageClass('page-signup')),
          initialMode: ((window.location.hash.indexOf('login') > 0) ? 'login' : 'signup')
        }).render();
      }

      if(Utils.hasPageClass('page-saleproductdetail')) {
        // Get the available sizes
        var sizes = []
        $('#variantSelect option').each(function(i, opt){
          var $opt = $(opt);
          var label = $opt.text().split('(')[0]; // to remove (販売終了) after the size
          var value = $opt.attr('value');
          // Exclude empty or "F"ree size product
          if(value.length > 0 && label != "F") {
            sizes.push({
              label: label,
              value: value,
              disabled: $opt.attr('disabled')
            });
          }
        });
          // Instanciate the product view
        new MP.ProductView({el: 'body', sizes: sizes}).render();
        MP.dispatcher.trigger('productDetailPageRendered');
      }

      if( Utils.hasPageClass('page-salelist') ) {
          new MP.SaleListPageView({el: 'body'}).render();
      }

      if(Utils.hasPageClass('page-saledetail')){
        new MP.SaleDetailPageView({el: 'body'}).render();
      }

      // campaign pages----------------------------------------
      if( Utils.hasPageClass('page-campaign')){
        new MP.CampaignPageView({el: 'body'}).render();
      }
      // ------------------------------------------------------

      // for all pages
      new MP.BagView({el: $('.site-header .shopping-bag')}).render();
      new MP.BackToTop({el: $('#backtotop')});


      if(!Utils.isAdminView()){
        new MP.MessageManager().render();
      }

      $('.account > a').dropdown({
        animate: true
      });

      if( Utils.hasPageClass('page-shopcheckoutpaymentmethodfinal') ) {
        new MP.CheckoutPaymentPageView({el: 'body'}).render();
      }

      if( Utils.hasPageClass('page-shopbasket')) {
        $('#couponNoFieldRadio').keydown(function() {
          $('#radio_2').prop('checked', true);
        });
      }

      if( Utils.hasPageClass('page-shopcheckoutconfirmation')){
        // init genre menu at the bottom
        new MP.BottomGenreMenu({el: '#current-sales'}).render();
      }


      if(Utils.hasPageClass('page-accountreturns')) {
        new MP.AccountReturnView({el: '.account-main'}).render();
      }

      if(Utils.hasPageClass('page-accountreturnhistory')){
        new MP.AccountReturnHistoryView({el: '.account-main'}).render({page: 1});
      }

      // account pages
      if(Utils.hasPageClass('page-accountmail') ) {
        new MP.AccountMailView({el: 'body'}).render();
      }

      if(Utils.hasPageClass('page-accountchangepassword') ) {
        new MP.AccountChangePasswordView({el: '.account-main'}).render();
      }

      if(Utils.hasPageClass('page-accountpersonaldata') ) {
        new MP.AccountPersonalDataView({el: '.account-main'}).render();
      }

      if( Utils.hasPageClass('page-accountinvitefriends')) {
        new MP.AccountInviteFriends({el: 'body'}).render();
      }

      if(Utils.hasPageClass('page-shopcheckoutpaymentmethod') ||  Utils.hasPageClass('page-shopcheckoutorderdetails') ) {
        new MP.PaymentFormView({el: '.payment-form'});
      }

      if(Utils.$body.find('.form-address').length > 0){
        new MP.AddressFormView({el: '.form-address'});
      }

      if( Utils.hasPageClass('page-branddetail') ) {
        new MP.BrandPageView({el: 'body'}).render();
      }

      if($('.nagbar').length > 0) {
        new MP.NagBarView({
          el: '.nagbar'
        }).render();
      }


      // if item added to bag is flagged in the page, open the bag contents and highlight it
      // This needs to be triggered after the shopping cart tracking is initialized
      if ($('#item-added-bag').val() == 'true') {
        MP.dispatcher.trigger('itemAdded');
      }

      // initialize all accordions
      $('.accordions').accordion();

      initDatePicker(); // date pickers for upcoming sales
      initAccountMenu();
      initFreeShippingCampaign();
    };

    var initDatePicker = function(){
      // enable slide behavior on mobile
      if(Utils.MediaQuery.isMobile()){
        $('.sales-date-picker').slick({
          arrows: false,
          swipeToSlide: true,
          slidesToShow: 5,
          infinite: false
        });
      }

      $('.sales-date-picker .start-date').on('click', function() {
        $('.future-campaigns .sale-list-upcoming li').hide();
        $('.sales-date-picker .start-date').removeClass('selected');
        $(this).addClass('selected');
        var startDate = $(this).data('date');
        $('.future-campaigns .sale-list-upcoming .start-' + startDate).show();
        // make sure lazy loaded sale banner images are loaded
        Utils.$window.trigger('resize');
      });
    };

    var windowScrollTop = Utils.$window.scrollTop();
    var initAccountMenu = function() {
      $('#account-menu').on('click', function(){
        if(Utils.$body.hasClass('menu-open')){
          Utils.$window.scrollTop(windowScrollTop);
        }
        else {
          windowScrollTop = Utils.$window.scrollTop();
        }
        $('body').toggleClass('menu-open');
      });
      // if the overlay is clicked the account menu should close
      $('.overlay').on('click', function(){
        $('body').removeClass('menu-open');
        Utils.$window.scrollTop(windowScrollTop);
      });

      // Register sliding collapse behavior for sub menu
      $('#account-menu-pane .menu-group-header').on('click', function(ev){
          var $container = $(ev.target).next('.slider-container');

          if (!$container.hasClass("height-transition-hidden")){
            setTimeout(function () {
              $container.slideUpTransition();
            },20);
          }
          else {
             // have to delay for element to register in place
            setTimeout(function () {
                $container.slideDownTransition();
            },20);
          }
      });
    };

    var initFreeShippingCampaign = function(){
      MP.dispatcher.on('freeshippingCountdown', function(phase){
        if(phase == 'expired'){
          $('.freeshipping').remove();
        }
      });
    };

    start();
    MP.dispatcher.trigger('shopJsRendered');
  });
  if(domLoaded){
    $(document).ready();
  }
});

define("shop", function(){});

