(function(){var a=Function.prototype.call,i=Object.prototype,j=Array.prototype.slice,l,m;if(!Function.prototype.bind)Function.prototype.bind=function(a){var g=this;if("function"!=typeof g)throw new TypeError;var e=j.call(arguments,1),c=function(){if(this instanceof c){var b=function(){};b.prototype=g.prototype;var b=new b,d=g.apply(b,e.concat(j.call(arguments)));return null!==d&&Object(d)===d?d:b}return g.apply(a,e.concat(j.call(arguments)))};return c};m=a.bind(i.toString);l=a.bind(i.hasOwnProperty);
if(!Array.isArray)Array.isArray=function(a){return"[object Array]"==m(a)};if(!Array.prototype.forEach)Array.prototype.forEach=function(a,g){var e=s(this),c=0,b=e.length>>>0;if("[object Function]"!=m(a))throw new TypeError;for(;c<b;)c in e&&a.call(g,e[c],c,e),c++};if(!Array.prototype.map)Array.prototype.map=function(a,g){var e=s(this),c=e.length>>>0,b=Array(c);if("[object Function]"!=m(a))throw new TypeError;for(var d=0;d<c;d++)d in e&&(b[d]=a.call(g,e[d],d,e));return b};if(!Array.prototype.filter)Array.prototype.filter=
function(a,g){var e=s(this),c=e.length>>>0,b=[];if("[object Function]"!=m(a))throw new TypeError;for(var d=0;d<c;d++)d in e&&a.call(g,e[d],d,e)&&b.push(e[d]);return b};if(!Array.prototype.every)Array.prototype.every=function(a,g){var e=s(this),c=e.length>>>0;if("[object Function]"!=m(a))throw new TypeError;for(var b=0;b<c;b++)if(b in e&&!a.call(g,e[b],b,e))return!1;return!0};if(!Array.prototype.some)Array.prototype.some=function(a,g){var e=s(this),c=e.length>>>0;if("[object Function]"!=m(a))throw new TypeError;
for(var b=0;b<c;b++)if(b in e&&a.call(g,e[b],b,e))return!0;return!1};if(!Array.prototype.reduce)Array.prototype.reduce=function(a){var g=s(this),e=g.length>>>0;if("[object Function]"!=m(a))throw new TypeError;if(!e&&1==arguments.length)throw new TypeError;var c=0,b;if(2<=arguments.length)b=arguments[1];else{do{if(c in g){b=g[c++];break}if(++c>=e)throw new TypeError;}while(1)}for(;c<e;c++)c in g&&(b=a.call(void 0,b,g[c],c,g));return b};if(!Array.prototype.reduceRight)Array.prototype.reduceRight=function(a){var g=
s(this),e=g.length>>>0;if("[object Function]"!=m(a))throw new TypeError;if(!e&&1==arguments.length)throw new TypeError;var c,e=e-1;if(2<=arguments.length)c=arguments[1];else{do{if(e in g){c=g[e--];break}if(0>--e)throw new TypeError;}while(1)}do e in this&&(c=a.call(void 0,c,g[e],e,g));while(e--);return c};if(!Array.prototype.indexOf)Array.prototype.indexOf=function(a){var g=s(this),e=g.length>>>0;if(!e)return-1;var c=0;1<arguments.length&&(c=p(arguments[1]));for(c=0<=c?c:e-Math.abs(c);c<e;c++)if(c in
g&&g[c]===a)return c;return-1};if(!Array.prototype.lastIndexOf)Array.prototype.lastIndexOf=function(a){var g=s(this),e=g.length>>>0;if(!e)return-1;var c=e-1;1<arguments.length&&(c=p(arguments[1]));for(c=0<=c?c:e-Math.abs(c);0<=c;c--)if(c in g&&a===g[c])return c;return-1};if(2!=[1,2].splice(0).length){var r=Array.prototype.splice;Array.prototype.splice=function(a,g){return!arguments.length?[]:r.apply(this,[void 0===a?0:a,void 0===g?this.length-a:g].concat(j.call(arguments,2)))}}if(!Object.keys){var h=
!0,q="toString,toLocaleString,valueOf,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,constructor".split(","),k=q.length,n;for(n in{toString:null})h=!1;Object.keys=function(a){if("object"!=typeof a&&"function"!=typeof a||null===a)throw new TypeError("Object.keys called on a non-object");var g=[],e;for(e in a)l(a,e)&&g.push(e);if(h)for(e=0;e<k;e++){var c=q[e];l(a,c)&&g.push(c)}return g}}if(!Date.prototype.toISOString)Date.prototype.toISOString=function(){var a,g,e;if(!isFinite(this))throw new RangeError;
a=[this.getUTCFullYear(),this.getUTCMonth()+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];for(g=a.length;g--;)e=a[g],10>e&&(a[g]="0"+e);return a.slice(0,3).join("-")+"T"+a.slice(3).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"};if(!Date.now)Date.now=function(){return(new Date).getTime()};if(!Date.prototype.toJSON)Date.prototype.toJSON=function(){if("function"!=typeof this.toISOString)throw new TypeError;return this.toISOString()};a="\t\n\u000b\u000c\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";
if(!String.prototype.trim||a.trim()){var a="["+a+"]",x=RegExp("^"+a+a+"*"),t=RegExp(a+a+"*$");String.prototype.trim=function(){return(""+this).replace(x,"").replace(t,"")}}if("0".split(void 0,0).length){var v=String.prototype.split;String.prototype.split=function(a,g){return void 0===a&&0===g?[]:v.apply(this,arguments)}}if("".substr&&"b"!=="0b".substr(-1)){var y=String.prototype.substr;String.prototype.substr=function(a,g){return y.call(this,0>a?0>(a=this.length+a)?0:a:a,g)}}var p=function(a){a=+a;
a!==a?a=-1:0!==a&&a!==1/0&&a!==-(1/0)&&(a=(0<a||-1)*Math.floor(Math.abs(a)));return a},u="a"!="a"[0],s=function(a){if(null==a)throw new TypeError;return u&&"string"==typeof a&&a?a.split(""):Object(a)}})();
(function(a,i){var j=!(!Object.create||!Object.defineProperties||!Object.getOwnPropertyDescriptor);j&&!a.browser.msie&&Object.defineProperty&&Object.prototype.__defineGetter__&&function(){try{var a=document.createElement("foo");Object.defineProperty(a,"bar",{get:function(){return!0}});j=!!a.bar}catch(i){j=!1}a=null}();Modernizr.objectAccessor=!(!(j||Object.prototype.__defineGetter__&&Object.prototype.__lookupSetter__)||a.browser.opera&&!(11<=i.browserVersion));Modernizr.advancedObjectProperties=j;
if(!j||!Object.create||!Object.defineProperties||!Object.getOwnPropertyDescriptor||!Object.defineProperty){var l=Function.prototype.call.bind(Object.prototype.hasOwnProperty);i.objectCreate=function(a,r,h,j){var k;k=function(){};k.prototype=a;k=new k;if(!j&&!("__proto__"in k)&&!Modernizr.objectAccessor)k.__proto__=a;r&&i.defineProperties(k,r);if(h)k.options=jQuery.extend(!0,{},k.options||{},h),h=k.options;k._create&&jQuery.isFunction(k._create)&&k._create(h);return k};i.defineProperties=function(a,
r){for(var h in r)l(r,h)&&i.defineProperty(a,h,r[h]);return a};i.defineProperty=function(a,i,h){if("object"!=typeof h||null===h)return a;if(l(h,"value"))return a[i]=h.value,a;a.__defineGetter__&&("function"==typeof h.get&&a.__defineGetter__(i,h.get),"function"==typeof h.set&&a.__defineSetter__(i,h.set));return a};i.getPrototypeOf=function(a){return Object.getPrototypeOf&&Object.getPrototypeOf(a)||a.__proto__||a.constructor&&a.constructor.prototype};i.getOwnPropertyDescriptor=function(a,i){if("object"!==
typeof a&&"function"!==typeof a||null===a)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object");var h;if(Object.defineProperty&&Object.getOwnPropertyDescriptor)try{return h=Object.getOwnPropertyDescriptor(a,i)}catch(j){}h={configurable:!0,enumerable:!0,writable:!0,value:void 0};var k=a.__lookupGetter__&&a.__lookupGetter__(i),n=a.__lookupSetter__&&a.__lookupSetter__(i);if(!k&&!n){if(!l(a,i))return;h.value=a[i];return h}delete h.writable;delete h.value;h.get=h.set=void 0;if(k)h.get=
k;if(n)h.set=n;return h}}})(jQuery,jQuery.webshims);
jQuery.webshims.register("dom-extend",function(a,i,j,l,m){var r=i.modules,h=/\s*,\s*/,q={},k={},n={},x={},t={},v=a.fn.val,y=function(c,b,d,f,o){return o?v.call(a(c)):v.call(a(c),d)};a.fn.val=function(c){var b=this[0];arguments.length&&null==c&&(c="");if(!arguments.length)return!b||1!==b.nodeType?v.call(this):a.prop(b,"value",c,"val",!0);if(a.isArray(c))return v.apply(this,arguments);var d=a.isFunction(c);return this.each(function(f){b=this;1===b.nodeType&&(d?(f=c.call(b,f,a.prop(b,"value",m,"val",
!0)),null==f&&(f=""),a.prop(b,"value",f,"val")):a.prop(b,"value",c,"val"))})};var p="_webshimsLib"+Math.round(1E3*Math.random()),u=function(c,b,d){c=c.jquery?c[0]:c;if(!c)return d||{};var f=a.data(c,p);d!==m&&(f||(f=a.data(c,p,{})),b&&(f[b]=d));return b?f&&f[b]:f};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(c){a.fn[c.name]=function(){return this.map(function(){var a=u(this,
"shadowData");return a&&a[c.prop]||this})}});["removeAttr","prop","attr"].forEach(function(c){q[c]=a[c];a[c]=function(b,d,f,o,e){var g="val"==o,i=!g?q[c]:y;if(!b||!k[d]||1!==b.nodeType||!g&&o&&"attr"==c&&a.attrFn[d])return i(b,d,f,o,e);var z=(b.nodeName||"").toLowerCase(),h=n[z],w="attr"==c&&(!1===f||null===f)?"removeAttr":c,j,l,r;h||(h=n["*"]);h&&(h=h[d]);h&&(j=h[w]);if(j){if("value"==d)l=j.isVal,j.isVal=g;if("removeAttr"===w)return j.value.call(b);if(f===m)return j.get?j.get.call(b):j.value;j.set&&
("attr"==c&&!0===f&&(f=d),r=j.set.call(b,f));if("value"==d)j.isVal=l}else r=i(b,d,f,o,e);if((f!==m||"removeAttr"===w)&&t[z]&&t[z][d]){var p;p="removeAttr"==w?!1:"prop"==w?!!f:!0;t[z][d].forEach(function(a){if(!a.only||(a.only="prop"==c)||"attr"==a.only&&"prop"!=c)a.call(b,f,p,g?"val":w,c)})}return r};x[c]=function(b,d,f){n[b]||(n[b]={});n[b][d]||(n[b][d]={});var o=n[b][d][c],e=function(a,b,o){return b&&b[a]?b[a]:o&&o[a]?o[a]:"prop"==c&&"value"==d?function(a){return f.isVal?y(this,d,a,!1,0===arguments.length):
q[c](this,d,a)}:"prop"==c&&"value"==a&&f.value.apply?function(a){var b=q[c](this,d);b&&b.apply&&(b=b.apply(this,arguments));return b}:function(a){return q[c](this,d,a)}};n[b][d][c]=f;if(f.value===m){if(!f.set)f.set=f.writeable?e("set",f,o):i.cfg.useStrict&&"prop"==d?function(){throw d+" is readonly on "+b;}:a.noop;if(!f.get)f.get=e("get",f,o)}["value","get","set"].forEach(function(a){f[a]&&(f["_sup"+a]=e(a,o))})}});var s=!a.browser.msie||8<parseInt(a.browser.version,10),A=function(){var a=i.getPrototypeOf(l.createElement("foobar")),
b=Object.prototype.hasOwnProperty;return function(d,f,o){var e=l.createElement(d),h=i.getPrototypeOf(e);if(s&&h&&a!==h&&(!e[f]||!b.call(e,f))){var j=e[f];o._supvalue=function(){return j&&j.apply?j.apply(this,arguments):j};h[f]=o.value}else o._supvalue=function(){var a=u(this,"propValue");return a&&a[f]&&a[f].apply?a[f].apply(this,arguments):a&&a[f]},g.extendValue(d,f,o.value);o.value._supvalue=o._supvalue}}(),g=function(){var c={};i.addReady(function(b,d){var f={},e=function(c){f[c]||(f[c]=a(b.getElementsByTagName(c)),
d[0]&&a.nodeName(d[0],c)&&(f[c]=f[c].add(d)))};a.each(c,function(a,c){e(a);!c||!c.forEach?i.warn("Error: with "+a+"-property. methods: "+c):c.forEach(function(c){f[a].each(c)})});f=null});var b,d=a([]),f=function(d,f){c[d]?c[d].push(f):c[d]=[f];a.isDOMReady&&(b||a(l.getElementsByTagName(d))).each(f)};return{createTmpCache:function(c){a.isDOMReady&&(b=b||a(l.getElementsByTagName(c)));return b||d},flushTmpCache:function(){b=null},content:function(c,b){f(c,function(){var c=a.attr(this,b);null!=c&&a.attr(this,
b,c)})},createElement:function(a,c){f(a,c)},extendValue:function(c,b,d){f(c,function(){a(this).each(function(){u(this,"propValue",{})[b]=this[b];this[b]=d})})}}}(),e=function(a,b){if(a.defaultValue===m)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[b||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}};if(!a.attr)a.attr={}};a.extend(i,{getID:function(){var c=(new Date).getTime();return function(b){var b=a(b),d=b.attr("id");d||(c++,d="ID-"+c,b.attr("id",d));
return d}}(),extendUNDEFProp:function(c,b){a.each(b,function(a,b){a in c||(c[a]=b)})},createPropDefault:e,data:u,moveToFirstEvent:function(){var c=a._data?"_data":"data";return function(b,d,f){if((b=(a[c](b,"events")||{})[d])&&1<b.length)d=b.pop(),f||(f="bind"),"bind"==f&&b.delegateCount?b.splice(b.delegateCount,0,d):b.unshift(d)}}(),addShadowDom:function(){var c,b,d,f={init:!1,runs:0,test:function(){var a=f.getHeight(),c=f.getWidth();a!=f.height||c!=f.width?(f.height=a,f.width=c,f.handler({type:"docresize"}),
f.runs++,30>f.runs&&setTimeout(f.test,30)):f.runs=0},handler:function(e){clearTimeout(c);c=setTimeout(function(){if("resize"==e.type){var c=a(j).width(),g=a(j).width();if(g==b&&c==d)return;b=g;d=c;f.height=f.getHeight();f.width=f.getWidth()}a.event.trigger("updateshadowdom")},"resize"==e.type?50:9)},_create:function(){a.each({Height:"getHeight",Width:"getWidth"},function(a,c){var b=l.body,d=l.documentElement;f[c]=function(){return Math.max(b["scroll"+a],d["scroll"+a],b["offset"+a],d["offset"+a],d["client"+
a])}})},start:function(){if(!this.init&&l.body)this.init=!0,this._create(),this.height=f.getHeight(),this.width=f.getWidth(),setInterval(this.test,400),a(this.test),a(j).bind("load",this.test),a(j).bind("resize",this.handler),function(){var c=a.fn.animate,b;a.fn.animate=function(){clearTimeout(b);b=setTimeout(function(){f.test();f.handler({type:"animationstart"})},19);return c.apply(this,arguments)}}()}};a.event.customEvent.updateshadowdom=!0;i.docObserve=function(){i.ready("DOM",function(){f.start()})};
return function(c,b,d){d=d||{};c.jquery&&(c=c[0]);b.jquery&&(b=b[0]);var f=a.data(c,p)||a.data(c,p,{}),e=a.data(b,p)||a.data(b,p,{}),g={};if(d.shadowFocusElement){if(d.shadowFocusElement){if(d.shadowFocusElement.jquery)d.shadowFocusElement=d.shadowFocusElement[0];g=a.data(d.shadowFocusElement,p)||a.data(d.shadowFocusElement,p,g)}}else d.shadowFocusElement=b;f.hasShadow=b;g.nativeElement=e.nativeElement=c;g.shadowData=e.shadowData=f.shadowData={nativeElement:c,shadowElement:b,shadowFocusElement:d.shadowFocusElement};
d.shadowChilds&&d.shadowChilds.each(function(){u(this,"shadowData",e.shadowData)});if(d.data)g.shadowData.data=e.shadowData.data=f.shadowData.data=d.data;d=null;i.docObserve()}}(),propTypes:{standard:function(a){e(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,""+b)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){e(a);if(!a.prop)a.prop={set:function(b){b?a.attr.set.call(this,""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}},
src:function(){var c=l.createElement("a");c.style.display="none";return function(b,d){e(b);if(!b.prop)b.prop={set:function(a){b.attr.set.call(this,a)},get:function(){var b=this.getAttribute(d),e;if(null==b)return"";c.setAttribute("href",b+"");if(!a.support.hrefNormalized){try{a(c).insertAfter(this),e=c.getAttribute("href",4)}catch(g){e=c.getAttribute("href",4)}a(c).detach()}return e||c.href}}}}(),enumarated:function(a){e(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,b)},get:function(){var b=
(a.attr.get.call(this)||"").toLowerCase();if(!b||-1==a.limitedTo.indexOf(b))b=a.defaultValue;return b}}}},reflectProperties:function(c,b){"string"==typeof b&&(b=b.split(h));b.forEach(function(b){i.defineNodeNamesProperty(c,b,{prop:{set:function(c){a.attr(this,b,c)},get:function(){return a.attr(this,b)||""}}})})},defineNodeNameProperty:function(c,b,d){k[b]=!0;if(d.reflect)i.propTypes[d.propType||"standard"](d,b);["prop","attr","removeAttr"].forEach(function(f){var e=d[f];e&&(e="prop"===f?a.extend({writeable:!0},
e):a.extend({},e,{writeable:!0}),x[f](c,b,e),"*"!=c&&i.cfg.extendNative&&"prop"==f&&e.value&&a.isFunction(e.value)&&A(c,b,e),d[f]=e)});d.initAttr&&g.content(c,b);return d},defineNodeNameProperties:function(a,b,d,f){for(var e in b)!f&&b[e].initAttr&&g.createTmpCache(a),d&&!b[e][d]&&(b[e][d]={},["value","set","get"].forEach(function(a){a in b[e]&&(b[e][d][a]=b[e][a],delete b[e][a])})),b[e]=i.defineNodeNameProperty(a,e,b[e]);f||g.flushTmpCache();return b},createElement:function(c,b,d){var f;a.isFunction(b)&&
(b={after:b});g.createTmpCache(c);b.before&&g.createElement(c,b.before);d&&(f=i.defineNodeNameProperties(c,d,!1,!0));b.after&&g.createElement(c,b.after);g.flushTmpCache();return f},onNodeNamesPropertyModify:function(c,b,d,f){"string"==typeof c&&(c=c.split(h));a.isFunction(d)&&(d={set:d});c.forEach(function(a){t[a]||(t[a]={});"string"==typeof b&&(b=b.split(h));d.initAttr&&g.createTmpCache(a);b.forEach(function(b){t[a][b]||(t[a][b]=[],k[b]=!0);if(d.set){if(f)d.set.only=f;t[a][b].push(d.set)}d.initAttr&&
g.content(a,b)});g.flushTmpCache()})},defineNodeNamesBooleanProperty:function(c,b,d){d||(d={});if(a.isFunction(d))d.set=d;i.defineNodeNamesProperty(c,b,{attr:{set:function(a){this.setAttribute(b,a);d.set&&d.set.call(this,!0)},get:function(){return null==this.getAttribute(b)?m:b}},removeAttr:{value:function(){this.removeAttribute(b);d.set&&d.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:d.initAttr||!1})},contentAttr:function(a,b,d){if(a.nodeName){if(d===m)return a=a.attributes[b]||{},
d=a.specified?a.value:null,null==d?m:d;"boolean"==typeof d?d?a.setAttribute(b,b):a.removeAttribute(b):a.setAttribute(b,d)}},activeLang:function(){var c=[],b={},d,f,e=/:\/\/|^\.*\//,g=function(b,c,d){return c&&d&&-1!==a.inArray(c,d.availabeLangs||[])?(b.loading=!0,d=d.langSrc,e.test(d)||(d=i.cfg.basePath+d),i.loader.loadScript(d+c+".js",function(){b.langObj[c]?(b.loading=!1,j(b,!0)):a(function(){b.langObj[c]&&j(b,!0);b.loading=!1})}),!0):!1},h=function(a){b[a]&&b[a].forEach(function(a){a.callback()})},
j=function(a,b){if(a.activeLang!=d&&a.activeLang!==f){var c=r[a.module].options;if(a.langObj[d]||f&&a.langObj[f])a.activeLang=d,a.callback(a.langObj[d]||a.langObj[f],d),h(a.module);else if(!b&&!g(a,d,c)&&!g(a,f,c)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],d),h(a.module)}};return function(e){if("string"==typeof e&&e!==d)d=e,f=d.split("-")[0],d==f&&(f=!1),a.each(c,function(a,b){j(b)});else if("object"==typeof e)if(e.register)b[e.register]||(b[e.register]=[]),b[e.register].push(e),
e.callback();else{if(!e.activeLang)e.activeLang="";c.push(e);j(e)}return d}}()});a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,b){i[a]=function(a,c,e,g){"string"==typeof a&&(a=a.split(h));var j={};a.forEach(function(a){j[a]=i[b](a,c,e,g)});return j}});i.isReady("webshimLocalization",!0)});
(function(a,i){var j=a.webshims.browserVersion;if(!(a.browser.mozilla&&5<j)&&(!a.browser.msie||12>j&&7<j)){var l={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},m=function(a,h){a.getAttribute("role")||a.setAttribute("role",h)};a.webshims.addReady(function(j,h){a.each(l,function(i,k){for(var l=a(i,j).add(h.filter(i)),n=0,p=l.length;n<p;n++)m(l[n],k)});if(j===i){var q=i.getElementsByTagName("header")[0],k=i.getElementsByTagName("footer"),n=k.length;
q&&!a(q).closest("section, article")[0]&&m(q,"banner");n&&(q=k[n-1],a(q).closest("section, article")[0]||m(q,"contentinfo"))}})}})(jQuery,document);