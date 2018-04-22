(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["OfficeUIFabricVue"] = factory();
	else
		root["OfficeUIFabricVue"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  for (var _len = arguments.length, types = Array(_len), _key = 0; _key < _len; _key++) {
    types[_key] = arguments[_key];
  }

  types.push('');

  return {
    props: {
      type: {
        type: String,
        default: '',
        validator: function validator(value) {
          return types.includes(value);
        }
      }
    }
  };
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(152)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      eventHub: new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]()
    };
  },
  provide: function provide() {
    return {
      eventHub: this.eventHub
    };
  }
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueSvgIcon=e():t.VueSvgIcon=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="dist/",e(e.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){var i=n(2)(n(3),n(4),null,null,null);t.exports=i.exports},function(t,e){t.exports=function(t,e,n,i,o){var r,s=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(r=t,s=t.default);var l="function"==typeof s?s.options:s;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),i&&(l._scopeId=i);var c;if(o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):n&&(c=n),c){var u=l.functional,h=u?l.render:l.beforeCreate;u?l.render=function(t,e){return c.call(e),h(t,e)}:l.beforeCreate=h?[].concat(h,c):[c]}return{esModule:r,exports:s,options:l}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={},o=[],r="",s="",a="svg";e.default={data:function(){return{loaded:!1}},props:{icon:String,name:String,width:{type:String,default:""},height:{type:String,default:""},scale:String,dir:String,fill:{type:Boolean,default:!0},color:String,original:{type:Boolean,default:!1}},computed:{clazz:function(){var t=a+"-icon";return this.fill&&(t+=" "+a+"-fill"),this.dir&&(t+=" "+a+"-"+this.dir),t},iconName:function(){return this.name||this.icon},iconData:function(){return this.iconName&&this.loaded?i[this.iconName]:null},colors:function(){return this.color?this.color.split(" "):[]},path:function(){var t="";return this.iconData?(t=this.iconData.data,this.original&&(t=this.addOriginalColor(t)),this.colors.length>0&&(t=this.addColor(t))):o.push({name:this.iconName,component:this}),this.getValidPathData(t)},box:function(){var t=this.width||16,e=this.width||16;return this.iconData?this.iconData.viewBox?this.iconData.viewBox:"0 0 "+this.iconData.width+" "+this.iconData.height:"0 0 "+parseFloat(t)+" "+parseFloat(e)},style:function(){var t=/^\d+$/,e=Number(this.scale),n=void 0,i=void 0;return!isNaN(e)&&this.iconData?(n=Number(this.iconData.width)*e+"px",i=Number(this.iconData.height)*e+"px"):(n=t.test(this.width)?this.width+"px":this.width,i=t.test(this.height)?this.height+"px":this.height),{width:n||r,height:i||s}}},created:function(){i[this.iconName]&&(this.loaded=!0)},methods:{addColor:function(t){var e=this,n=/<(path|rect|circle|polygon|line|polyline|ellipse)\s/gi,i=0;return t.replace(n,function(t){var n=e.colors[i++]||e.colors[e.colors.length-1],o=e.fill;return n&&"_"===n?t:(n&&0===n.indexOf("r-")&&(o=!o,n=n.split("r-")[1]),t+(o?"fill":"stroke")+'="'+n+'" '+(o?"stroke":"fill")+'="none" ')})},addOriginalColor:function(t){var e=/_fill="|_stroke="/gi;return t.replace(e,function(t){return t&&t.slice(1)})},getValidPathData:function(t){if(this.original&&this.colors.length>0){var e=/<(path|rect|circle|polygon|line|polyline|ellipse)(\sfill|\sstroke)([="\w\s\.\-\+#\$\&>]+)(fill|stroke)/gi;t=t.replace(e,function(t,e,n,i,o){return"<"+e+n+i+"_"+o})}return t}},install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.tagName||"svgicon";e.classPrefix&&(a=e.classPrefix),e.defaultWidth&&(r=e.defaultWidth),e.defaultHeight&&(s=e.defaultHeight),t.component(n,this)},register:function(t){for(var e in t)!function(e){i[e]||(i[e]=t[e]),o=o.filter(function(t,n){return t.name===e&&t.component.$set(t.component,"loaded",!0),t.name!==e})}(e)},icons:i}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("svg",{class:t.clazz,style:t.style,attrs:{version:"1.1",viewBox:t.box},domProps:{innerHTML:t._s(t.path)}})},staticRenderFns:[]}}])});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    icon: String,
    type: String
  },

  computed: {
    iconClass: function iconClass() {
      return _defineProperty({}, "ms-Icon--" + this.icon, !!this.icon);
    }
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  for (var _len = arguments.length, size = Array(_len), _key = 0; _key < _len; _key++) {
    size[_key] = arguments[_key];
  }

  size.push('');

  return {
    props: {
      size: {
        type: String,
        default: '',
        validator: function validator(value) {
          return size.includes(value);
        }
      }
    }
  };
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.3.3
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
/*  */

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}
/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return typeof value === 'string' || typeof value === 'number'
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

var _toString = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 */
function noop () {}

/**
 * Always return false.
 */
var no = function () { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */


/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      return JSON.stringify(a) === JSON.stringify(b)
    } catch (e) {
      // possible circular reference
      return a === b
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "production" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

var warn = noop;
var tip = noop;
var formatComponentName = (null); // work around flow check

if (false) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.error("[Vue warn]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var name = typeof vm === 'string'
      ? vm
      : typeof vm === 'function' && vm.options
        ? vm.options.name
        : vm._isVue
          ? vm.$options.name || vm.$options._componentTag
          : vm.name;

    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  var generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

function handleError (err, vm, info) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info);
  } else {
    if (false) {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    } )); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve, reject) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */


var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid$1++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var arguments$1 = arguments;

    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments$1[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true,
  isSettingProps: false
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (false) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && typeof key === 'number') {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val
  }
  var ob = (target ).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && typeof key === 'number') {
    target.splice(key, 1);
    return
  }
  var ob = (target ).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (false) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (typeof childVal !== 'function') {
      "production" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        childVal.call(this),
        parentVal.call(this)
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.computed = function (parentVal, childVal) {
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret
};

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (false) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (false) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (false) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (false) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (false) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    valid = typeof value === expectedType.toLowerCase();
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (false) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

var mark;
var measure;

if (false) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function () {
  var node = new VNode();
  node.text = '';
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      for (var i = 0; i < fns.length; i++) {
        fns[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "production" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (false) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        (last).text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "production" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 false
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && isDef(c.componentOptions)) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        this$1.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (false) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        cbs[i].apply(vm, args);
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
      child.data && child.data.slot != null
    ) {
      var name = child.data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots
}

function isWhitespace (node) {
  return node.isComment || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // remove reference to DOM nodes (prevents leak)
    vm.$options._parentElm = vm.$options._refElm = null;
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (false) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (false) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure((name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure((name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render
  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    if (false) {
      observerState.isSettingProps = true;
    }
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    if (false) {
      observerState.isSettingProps = false;
    }
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (false) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (false) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdateHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdateHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  false
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "production" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  if (this.user) {
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    }
  } else {
    value = this.getter.call(vm, vm);
  }
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  popTarget();
  this.cleanupDeps();
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch) { initWatch(vm, opts.watch); }
}

var isReservedProp = {
  key: 1,
  ref: 1,
  slot: 1
};

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (false) {
      if (isReservedProp[key] || config.isReservedAttr(key)) {
        warn(
          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (vm.$parent && !observerState.isSettingProps) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "production" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var i = keys.length;
  while (i--) {
    if (props && hasOwn(props, keys[i])) {
      "production" !== 'production' && warn(
        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(keys[i])) {
      proxy(vm, "_data", keys[i]);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  var watchers = vm._computedWatchers = Object.create(null);

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (false) {
      if (getter === undefined) {
        warn(
          ("No getter function has been defined for computed property \"" + key + "\"."),
          vm
        );
        getter = noop;
      }
    }
    // create internal watcher for the computed property.
    watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions);

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (false) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    if (false) {
      if (methods[key] == null) {
        warn(
          "method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
    }
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (vm, key, handler) {
  var options;
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  vm.$watch(key, handler, options);
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (false) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (false) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    // isArray here
    var isArray = Array.isArray(inject);
    var result = Object.create(null);
    var keys = isArray
      ? inject
      : hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = isArray ? key : inject[key];
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
    }
    return result
  }
}

/*  */

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || {});
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
  var vnode = Ctor.options.render.call(null, h, {
    data: data,
    props: props,
    children: children,
    parent: context,
    listeners: data.on || {},
    injections: resolveInject(Ctor.options.inject, context),
    slots: function () { return resolveSlots(children, context); }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    vnode.functionalOptions = Ctor.options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (false) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  if (isUndef(Ctor.cid)) {
    Ctor = resolveAsyncComponent(Ctor, baseCtor, context);
    if (Ctor === undefined) {
      // return nothing if this is indeed an async component
      // wait for the callback to trigger parent update.
      return
    }
  }

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  data = data || {};

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners
    data = {};
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
  );
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "production" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && isUndef(child.ns)) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      extend(props, bindObject);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && "production" !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1
  } else {
    return keyCodes !== eventKeyCode
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp
) {
  if (value) {
    if (!isObject(value)) {
      "production" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      for (var key in value) {
        if (key === 'class' || key === 'style') {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];
        }
      }
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var tree = this._staticTrees[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = this._staticTrees[index] =
    this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$vnode = vm.$options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (false) {
        vnode = vm.$options.renderError
          ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
          : vm._vnode;
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (false) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // internal render helpers.
  // these are exposed on the instance prototype to reduce generated render
  // code size.
  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
}

/*  */

var uid = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (false) {
      startTag = "vue-perf-init:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (false) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (false) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(((vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if (false
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return this
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (false) {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (false) {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp];

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (cache, current, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        if (cachedNode !== current) {
          pruneCacheEntry(cachedNode);
        }
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry (vnode) {
  if (vnode) {
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created () {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this.cache, this._vnode, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this.cache, this._vnode, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (false) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode.ssrContext
  }
});

Vue$3.version = '2.3.3';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return genClassFromData(data)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function genClassFromData (data) {
  var dynamicClass = data.class;
  var staticClass = data.staticClass;
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (isUndef(value)) {
    return ''
  }
  if (typeof value === 'string') {
    return value
  }
  var res = '';
  if (Array.isArray(value)) {
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(value[i])) {
        if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
          res += stringified + ' ';
        }
      }
    }
    return res.slice(0, -1)
  }
  if (isObject(value)) {
    for (var key in value) {
      if (value[key]) { res += key + ' '; }
    }
    return res.slice(0, -1)
  }
  /* istanbul ignore next */
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);



var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "production" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
        refs[key].push(ref);
      } else {
        refs[key] = [ref];
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key &&
    a.tag === b.tag &&
    a.isComment === b.isComment &&
    isDef(a.data) === isDef(b.data) &&
    sameInputType(a, b)
  )
}

// Some browsers do not support dynamically changing type for <input>
// so they need to be treated as different nodes
function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (false) {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (false) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref) {
    if (isDef(parent)) {
      if (isDef(ref)) {
        if (ref.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if (false) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }
    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.elm = oldVnode.elm;
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }
    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }
    var elm = vnode.elm = oldVnode.elm;
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (false) {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if (false
            ) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (isDef(vnode.tag)) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (false) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;



function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

/*  */

/**
 * Cross-platform code generation for component v-model
 */


/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */


/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

var str;
var index$1;

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  var event;
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    // Chrome fires microtasks in between click/change, leads to #4521
    event = isChrome ? 'click' : 'change';
    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  if (once$$1) {
    var oldHandler = handler;
    var _target = target$1; // save current target element in closure
    handler = function (ev) {
      var res = arguments.length === 1
        ? oldHandler(ev)
        : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, handler, capture, _target);
      }
    };
  }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, vnode, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (
  elm,
  vnode,
  checkVal
) {
  return (!elm.composing && (
    vnode.tag === 'option' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is not equal to the updated value
  return document.activeElement !== elm && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if ((isDef(modifiers) && modifiers.number) || elm.type === 'number') {
    return toNumber(value) !== toNumber(newVal)
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var prefixes = ['Webkit', 'Moz', 'ms'];

var testEl;
var normalize = cached(function (prop) {
  testEl = testEl || document.createElement('div');
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in testEl.style)) {
    return prop
  }
  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + upper;
    if (prefixed in testEl.style) {
      return prefixed
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likley wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    el.setAttribute('class', cur.trim());
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser && window.requestAnimationFrame
  ? window.requestAnimationFrame.bind(window)
  : setTimeout;

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
  addClass(el, cls);
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (false) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (false) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted (el, binding, vnode) {
    if (vnode.tag === 'select') {
      var cb = function () {
        setSelected(el, binding, vnode.context);
      };
      cb();
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
    } else if (vnode.tag === 'textarea' || el.type === 'text' || el.type === 'password') {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var needReset = el.multiple
        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
      if (needReset) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "production" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  for (var i = 0, l = options.length; i < l; i++) {
    if (looseEqual(getValue(options[i]), value)) {
      return false
    }
  }
  return true
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition && !isIE9) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    if (transition && !isIE9) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag; });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (false) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (false
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (false) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var body = document.body;
    var f = body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      if (this._hasMove != null) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if (false) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if (false
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

/* harmony default export */ __webpack_exports__["a"] = (Vue$3);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(153)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["OfficeUIFabricVue"] = factory();
	else
		root["OfficeUIFabricVue"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	function log(error) {
		(typeof console !== "undefined")
		&& (console.error || console.log)("[Script Loader]", error);
	}

	// Check for IE =< 8
	function isIE() {
		return typeof attachEvent !== "undefined" && typeof addEventListener === "undefined";
	}

	try {
		if (typeof execScript !== "undefined" && isIE()) {
			execScript(src);
		} else if (typeof eval !== "undefined") {
			eval.call(null, src);
		} else {
			log("EvalError: No eval function available");
		}
	} catch (error) {
		log(error);
	}
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)(__webpack_require__(5))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)(__webpack_require__(6))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)(__webpack_require__(7))

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_office_ui_fabric_js_dist_js_fabric__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_office_ui_fabric_js_dist_js_fabric___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_office_ui_fabric_js_dist_js_fabric__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_office_ui_fabric_js_dist_lib_jquery__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_office_ui_fabric_js_dist_lib_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_office_ui_fabric_js_dist_lib_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_office_ui_fabric_js_dist_lib_PickaDate__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_office_ui_fabric_js_dist_lib_PickaDate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_office_ui_fabric_js_dist_lib_PickaDate__);


// jquery and PickaDate are used for the DatePicker component.



/* harmony default export */ __webpack_exports__["default"] = (fabric);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "/**\n * Office UI Fabric JS 1.5.0\n * The JavaScript front-end framework for building experiences for Office 365.\n **/\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n// \"use strict\";\nvar fabric;\n(function (fabric) {\n    var SCROLL_FRAME_RATE = 33;\n    var Animate = (function () {\n        function Animate() {\n        }\n        /**\n        * @param {HTMLElement} element\n        * @param {object} props Transition properties\n        * @param {number} props.duration The duration of the transition in seconds\n        * @param {number} props.delay A delay in seconds that occurs before the transition starts\n        * @param {string} props.ease An easing equation applied to the transition\n        * @param {function} props.onEnd A function that is called when the transition ends\n        * @param {array} props.onEndArgs An array of parameters applied to the onEnd function\n        * @param {number} props.x props.y props.left, props.opacity etc... CSS values to transition to\n         */\n        Animate.transition = function (element, props) {\n            var obj = { element: element, props: props, transformations: {} };\n            Animate._animationObjects.push(obj);\n            Animate._parseProperties(obj);\n            Animate._createTransition(obj);\n            setTimeout(Animate._setProperties, 0, obj);\n            Animate._setCallback(obj);\n        };\n        /**\n         * @param {HTMLElement} element\n         * @param {string} keyframes A name of a keyframe animation\n         * @param {object} props Animation properties\n         * @param {number} props.duration The duration of the animation in seconds\n         * @param {number} props.delay A delay in seconds that occurs before the animation starts\n         * @param {string} props.ease An easing equation applied to the animation\n         * @param {function} props.onEnd A function that is called when the animation ends\n         * @param {array} props.onEndArgs An array of parameters applied to the onEnd function\n        */\n        Animate.animation = function (element, keyframes, props) {\n            var obj = { element: element, keyframes: keyframes, props: props };\n            Animate._animationObjects.push(obj);\n            Animate._parseProperties(obj);\n            Animate._createAnimation(obj);\n            Animate._setCallback(obj);\n        };\n        /**\n         * @param {HTMLElement} element\n         * @param {object} props Scroll animation properties\n         * @param {number} props.duration The duration of the transition in seconds\n         * @param {number} props.top The end scroll position of the element\n         * @param {number} props.delay A delay in seconds that occurs before the scroll starts\n         * @param {function} props.onEnd A function that is called when the scrolling animation ends\n         * @param {array} props.onEndArgs An array of parameters applied to the onEnd function\n        */\n        Animate.scrollTo = function (element, props) {\n            var obj = { element: element, props: props, step: 0 };\n            Animate._setScrollProperties(obj);\n            if (obj.props.delay) {\n                setTimeout(Animate._animationObjects, obj.props.delay * 1000, obj);\n            }\n            else {\n                Animate._animateScroll(obj);\n            }\n            Animate._animationObjects.push(obj);\n        };\n        Animate._setScrollProperties = function (obj) {\n            obj.beginTop = obj.element.scrollTop;\n            obj.change = obj.props.top - obj.beginTop;\n            obj.props.duration = obj.props.duration * 1000;\n        };\n        Animate._parseProperties = function (obj) {\n            var nonTweenProps = Animate._timeProps.concat(Animate._callbackProps);\n            obj.tweenObj = {};\n            for (var key in obj.props) {\n                if (Animate._contains(nonTweenProps, key)) {\n                    obj[key] = obj.props[key];\n                }\n                else {\n                    obj.tweenObj[key] = obj.props[key];\n                }\n            }\n        };\n        Animate._animateScroll = function (obj) {\n            var totalSteps = obj.props.duration / SCROLL_FRAME_RATE;\n            var top = Animate._easeOutExpo(obj.step++, obj.beginTop, obj.change, totalSteps);\n            obj.element.scrollTop = top;\n            if (obj.step >= totalSteps) {\n                obj.element.scrollTop = obj.props.top;\n                Animate._executeCallback(obj.props);\n                Animate._removeAnimationObject(obj);\n            }\n            else {\n                setTimeout(function () {\n                    requestAnimationFrame(function () {\n                        Animate._animateScroll(obj);\n                    });\n                }, SCROLL_FRAME_RATE);\n            }\n        };\n        Animate._createTransition = function (obj) {\n            var duration = obj.duration || 0;\n            var delay = obj.delay || 0;\n            obj.element.style.transitionProperty = Animate._getTransitionProperties(obj.tweenObj);\n            obj.element.style.transitionDuration = duration.toString() + \"s\";\n            obj.element.style.transitionTimingFunction = obj.ease || \"linear\";\n            obj.element.style.transitionDelay = delay.toString() + \"s\";\n        };\n        Animate._createAnimation = function (obj) {\n            var duration = obj.duration || 0;\n            var delay = obj.delay || 0;\n            obj.element.style.animationName = obj.keyframes;\n            obj.element.style.animationDuration = duration.toString() + \"s\";\n            obj.element.style.animationTimingFunction = obj.ease || \"linear\";\n            obj.element.style.animationDelay = delay.toString() + \"s\";\n            obj.element.style.animationFillMode = \"both\";\n        };\n        Animate._getTransitionProperties = function (obj) {\n            var hasTransform = false;\n            var hasFilter = false;\n            var properties = [];\n            for (var key in obj) {\n                if (Animate._contains(Animate._transformProps, key)) {\n                    hasTransform = true;\n                }\n                else if (Animate._contains(Animate._filters, key)) {\n                    hasFilter = true;\n                }\n                else {\n                    properties.push(Animate._camelCaseToDash(key));\n                }\n            }\n            if (hasTransform) {\n                properties.push(\"transform\");\n            }\n            if (hasFilter) {\n                properties.push(\"-webkit-filter\");\n                properties.push(\"filter\");\n            }\n            return properties.join(\", \");\n        };\n        Animate._setProperties = function (obj) {\n            for (var key in obj.tweenObj) {\n                if (Animate._contains(Animate._transformProps, key)) {\n                    Animate._setTransformValues(obj, key);\n                }\n                else if (Animate._contains(Animate._filters, key)) {\n                    Animate._setFilterValues(obj, key);\n                }\n                else {\n                    Animate._setRegularValues(obj, key);\n                }\n            }\n            if (obj.transformations) {\n                Animate._setTransformations(obj);\n            }\n        };\n        Animate._setRegularValues = function (obj, key) {\n            var value = obj.tweenObj[key];\n            if (value.toString().indexOf(\"%\") === -1) {\n                value += (key !== \"opacity\") && (key !== \"backgroundColor\") && (key !== \"boxShadow\") ? \"px\" : \"\";\n            }\n            obj.element.style[key] = value;\n        };\n        Animate._setFilterValues = function (obj, key) {\n            var value = obj.tweenObj[key];\n            if (key === \"hueRotate\") {\n                value = \"(\" + value + \"deg)\";\n            }\n            else {\n                value = key === \"blur\" ? \"(\" + value + \"px)\" : \"(\" + value + \"%)\";\n            }\n            key = Animate._camelCaseToDash(key);\n            obj.element.style.webkitFilter = key + value;\n            obj.element.style.filter = key + value;\n        };\n        Animate._setTransformValues = function (obj, key) {\n            if (/x|y|z|scaleX|scaleY|scaleZ|rotate|rotateX|rotateY|rotateZ|skewX|skewY/.test(key)) {\n                obj.transformations[key] = obj.tweenObj[key];\n            }\n        };\n        Animate._setTransformations = function (obj) {\n            var rotate = \"\", scale = \"\", skew = \"\", translate = \"\";\n            var trans = obj.transformations;\n            translate += trans.x !== undefined && trans.x ? \"translateX(\" + trans.x + \"px) \" : \"\";\n            translate += trans.y !== undefined && trans.y ? \"translateY(\" + trans.y + \"px) \" : \"\";\n            translate += trans.z !== undefined && trans.z ? \"translateZ(\" + trans.z + \"px) \" : \"\";\n            rotate += trans.rotate !== undefined && trans.rotate ? \"rotate(\" + trans.rotate + \"deg) \" : \"\";\n            rotate += trans.rotateX !== undefined && trans.rotateX ? \"rotateX(\" + trans.rotateX + \"deg) \" : \"\";\n            rotate += trans.rotateY !== undefined && trans.rotateY ? \"rotate(\" + trans.rotateY + \"deg) \" : \"\";\n            rotate += trans.rotateZ !== undefined && trans.rotateZ ? \"rotate(\" + trans.rotateZ + \"deg) \" : \"\";\n            scale += trans.scaleX !== undefined && trans.scaleX ? \"scaleX(\" + trans.scaleX + \") \" : \"\";\n            scale += trans.scaleY !== undefined && trans.scaleY ? \"scaleY(\" + trans.scaleY + \") \" : \"\";\n            scale += trans.scaleZ !== undefined && trans.scaleZ ? \"scaleZ(\" + trans.scaleZ + \") \" : \"\";\n            skew += trans.skewX !== undefined && trans.skewX ? \"skewX(\" + trans.skewX + \"deg) \" : \"\";\n            skew += trans.skewY !== undefined && trans.skewY ? \"skewY(\" + trans.skewY + \"deg) \" : \"\";\n            obj.element.style.transform = translate + rotate + scale + skew;\n        };\n        Animate._setCallback = function (obj) {\n            obj.element.addEventListener(\"webkitTransitionEnd\", Animate._complete, false);\n            obj.element.addEventListener(\"transitionend\", Animate._complete, false);\n            obj.element.addEventListener(\"webkitAnimationEnd\", Animate._complete, false);\n            obj.element.addEventListener(\"animationend\", Animate._complete, false);\n        };\n        Animate._complete = function (event) {\n            event.target.removeEventListener(\"webkitTransitionEnd\", Animate._complete);\n            event.target.removeEventListener(\"transitionend\", Animate._complete);\n            event.target.removeEventListener(\"webkitAnimationEnd\", Animate._complete);\n            event.target.removeEventListener(\"animationend\", Animate._complete);\n            var obj = Animate._getAnimationObjByElement(event.target);\n            Animate._executeCallback(obj);\n            Animate._removeAnimationObject(obj);\n        };\n        Animate._getAnimationObjByElement = function (element) {\n            var i = Animate._animationObjects.length;\n            while (i--) {\n                if (Animate._animationObjects[i].element === element) {\n                    return Animate._animationObjects[i];\n                }\n            }\n            return null;\n        };\n        Animate._removeAnimationObject = function (obj) {\n            var i = Animate._animationObjects.length;\n            while (i--) {\n                if (Animate._animationObjects[i] === obj) {\n                    Animate._animationObjects.splice(i, 1);\n                }\n            }\n        };\n        Animate._executeCallback = function (obj) {\n            if (obj.onEnd) {\n                var endArgs = obj.onEndArgs || [];\n                obj.onEnd.apply(null, endArgs);\n            }\n        };\n        Animate._contains = function (array, value) {\n            var i = array.length;\n            while (i--) {\n                if (value === array[i]) {\n                    return true;\n                }\n            }\n            return false;\n        };\n        Animate._camelCaseToDash = function (value) {\n            return value.replace(/\\W+/g, \"-\").replace(/([a-z\\d])([A-Z])/g, \"$1-$2\").toLowerCase();\n        };\n        Animate._easeOutExpo = function (time, begin, change, duration) {\n            return (time === duration) ? begin + change : change * (-Math.pow(2, -10 * time / duration) + 1) + begin;\n        };\n        Animate._transformProps = [\n            \"x\",\n            \"y\",\n            \"z\",\n            \"scaleX\",\n            \"scaleY\",\n            \"scaleZ\",\n            \"rotate\",\n            \"rotateX\",\n            \"rotateY\",\n            \"rotateZ\",\n            \"skewX\",\n            \"skewY\"\n        ];\n        Animate._filters = [\n            \"blur\",\n            \"brightness\",\n            \"contrast\",\n            \"dropShadow\",\n            \"grayscale\",\n            \"hueRotate\",\n            \"invert\",\n            \"saturate\",\n            \"sepia\"\n        ];\n        Animate._timeProps = [\"duration\", \"ease\", \"delay\"];\n        Animate._callbackProps = [\"onEnd\", \"onEndArgs\"];\n        Animate._animationObjects = [];\n        return Animate;\n    }());\n    fabric.Animate = Animate;\n})(fabric || (fabric = {}));\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n// \"use strict\";\nvar fabric;\n(function (fabric) {\n    var Ease = (function () {\n        function Ease() {\n        }\n        Ease.QUAD_EASE_IN = Ease.CB + \"(0.550, 0.085, 0.680, 0.530)\";\n        Ease.CUBIC_EASE_IN = Ease.CB + \"(0.550, 0.055, 0.675, 0.190)\";\n        Ease.QUART_EASE_IN = Ease.CB + \"(0.895, 0.030, 0.685, 0.220)\";\n        Ease.QUINT_EASE_IN = Ease.CB + \"(0.755, 0.050, 0.855, 0.060)\";\n        Ease.SINE_EASE_IN = Ease.CB + \"(0.470, 0, 0.745, 0.715)\";\n        Ease.EXPO_EASE_IN = Ease.CB + \"(0.950, 0.050, 0.795, 0.035)\";\n        Ease.CIRC_EASE_IN = Ease.CB + \"(0.600, 0.040, 0.980, 0.335)\";\n        Ease.BACK_EASE_IN = Ease.CB + \"(0.600, 0.040, 0.980, 0.335)\";\n        Ease.QUAD_EASE_OUT = Ease.CB + \"(0.250, 0.460, 0.450, 0.940)\";\n        Ease.CUBIC_EASE_OUT = Ease.CB + \"(0.215, 0.610, 0.355, 1)\";\n        Ease.QUART_EASE_OUT = Ease.CB + \"(0.165, 0.840, 0.440, 1)\";\n        Ease.QUINT_EASE_OUT = Ease.CB + \"(0.230, 1, 0.320, 1)\";\n        Ease.SINE_EASE_OUT = Ease.CB + \"(0.390, 0.575, 0.565, 1)\";\n        Ease.EXPO_EASE_OUT = Ease.CB + \"(0.190, 1, 0.220, 1)\";\n        Ease.CIRC_EASE_OUT = Ease.CB + \"(0.075, 0.820, 0.165, 1)\";\n        Ease.BACK_EASE_OUT = Ease.CB + \"(0.175, 0.885, 0.320, 1.275)\";\n        Ease.QUAD_EASE_IN_OUT = Ease.CB + \"(0.455, 0.030, 0.515, 0.955)\";\n        Ease.CUBIC_EASE_IN_OUT = Ease.CB + \"(0.645, 0.045, 0.355, 1)\";\n        Ease.QUART_EASE_IN_OUT = Ease.CB + \"(0.770, 0, 0.175, 1)\";\n        Ease.QUINT_EASE_IN_OUT = Ease.CB + \"(0.860, 0, 0.070, 1)\";\n        Ease.SINE_EASE_IN_OUT = Ease.CB + \"(0.445, 0.050, 0.550, 0.950)\";\n        Ease.EXPO_EASE_IN_OUT = Ease.CB + \"(1, 0, 0, 1)\";\n        Ease.CIRC_EASE_IN_OUT = Ease.CB + \"(0.785, 0.135, 0.150, 0.860)\";\n        Ease.BACK_EASE_IN_OUT = Ease.CB + \"(0.680, -0.550, 0.265, 1.550)\";\n        Ease.CB = \"cubic-bezier\";\n        return Ease;\n    }());\n    fabric.Ease = Ease;\n})(fabric || (fabric = {}));\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n// \"use strict\";\n// CustomEvent Polyfill to support IE\n(function () {\n    function CustomEvent(event, params) {\n        params = params || { bubbles: false, cancelable: false, detail: undefined };\n        var evt = document.createEvent(\"CustomEvent\");\n        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);\n        return evt;\n    }\n    ;\n    CustomEvent.prototype = Event.prototype;\n    window.CustomEvent = CustomEvent;\n})();\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n/**\n * @namespace fabric\n */\nvar fabric;\n(function (fabric) {\n    \"use strict\";\n    /**\n     * Breadcrumb component\n     *\n     * Shows the user\"s current location in a hierarchy and provides a means of navigating upward.\n     *\n     */\n    var Breadcrumb = (function () {\n        /**\n         *\n         * @param {HTMLElement} container - the target container for an instance of Breadcrumb\n         * @constructor\n         *\n         * If dynamically populating a list run the constructor after the list has been populated\n         * in the DOM.\n        */\n        function Breadcrumb(container) {\n            this._currentMaxItems = 0;\n            this._itemCollection = [];\n            this._tabIndex = 2;\n            this.container = container;\n            this._onResize = this._onResize.bind(this);\n            this._openOverflow = this._openOverflow.bind(this);\n            this._overflowKeyPress = this._overflowKeyPress.bind(this);\n            this._closeOverflow = this._closeOverflow.bind(this);\n            this.removeOutlinesOnClick = this.removeOutlinesOnClick.bind(this);\n            this.init();\n        }\n        /**\n         *  removes focus outlines so they don\"t linger after click\n        */\n        Breadcrumb.prototype.removeOutlinesOnClick = function () {\n            this._breadcrumbList.blur();\n        };\n        /**\n         * Adds a breadcrumb item to a breadcrumb\n         * @param itemLabel {String} the item's text label\n         * @param itemLink {String} the item's href link\n        */\n        Breadcrumb.prototype.addItem = function (itemLabel, itemLink) {\n            this._itemCollection.push({ text: itemLabel, link: itemLink });\n            this._updateBreadcrumbs();\n        };\n        /**\n         * Removes a breadcrumb item by item label in the breadcrumbs list\n         * @param itemLabel {String} the item's text label\n        */\n        Breadcrumb.prototype.removeItemByLabel = function (itemLabel) {\n            var i = this._itemCollection.length;\n            while (i--) {\n                if (this._itemCollection[i].text === itemLabel) {\n                    this._itemCollection.splice(i, 1);\n                }\n            }\n            this._updateBreadcrumbs();\n        };\n        ;\n        /**\n         * removes a breadcrumb item by position in the breadcrumb's list\n         * index starts at 0\n         * @param value {number} the item's index\n        */\n        Breadcrumb.prototype.removeItemByPosition = function (value) {\n            this._itemCollection.splice(value, 1);\n            this._updateBreadcrumbs();\n        };\n        /**\n         * initializes component\n        */\n        Breadcrumb.prototype.init = function () {\n            this._cacheDOM();\n            this._setListeners();\n            this._createItemCollection();\n            this._onResize();\n        };\n        /**\n         * create internal model of list items from DOM\n        */\n        Breadcrumb.prototype._createItemCollection = function () {\n            var length = this._listItems.length;\n            var i = 0;\n            var item;\n            var text;\n            var link;\n            var tabIndex;\n            for (i; i < length; i++) {\n                item = this._listItems[i].querySelector(\".ms-Breadcrumb-itemLink\");\n                text = item.textContent;\n                link = item.getAttribute(\"href\");\n                tabIndex = parseInt(item.getAttribute(\"tabindex\"), 10);\n                this._itemCollection.push({ link: link, tabIndex: tabIndex, text: text });\n            }\n        };\n        /**\n         * Re-render lists on resize\n         *\n        */\n        Breadcrumb.prototype._onResize = function () {\n            this._closeOverflow(null);\n            this._renderList();\n        };\n        /**\n         * render breadcrumbs and overflow menus\n        */\n        Breadcrumb.prototype._renderList = function () {\n            var maxItems = window.innerWidth > Breadcrumb.MEDIUM ? 4 : 2;\n            if (maxItems !== this._currentMaxItems) {\n                this._updateBreadcrumbs();\n            }\n            this._currentMaxItems = maxItems;\n        };\n        /**\n         * updates the breadcrumbs and overflow menu\n        */\n        Breadcrumb.prototype._updateBreadcrumbs = function () {\n            this._tabIndex = 2;\n            var maxItems = window.innerWidth > Breadcrumb.MEDIUM ? 4 : 2;\n            if (this._itemCollection.length > maxItems) {\n                this._breadcrumb.classList.add(\"is-overflow\");\n            }\n            else {\n                this._breadcrumb.classList.remove(\"is-overflow\");\n            }\n            this._addItemsToOverflow(maxItems);\n            this._addBreadcrumbItems(maxItems);\n        };\n        ;\n        /**\n         * creates the overflow menu\n        */\n        Breadcrumb.prototype._addItemsToOverflow = function (maxItems) {\n            var _this = this;\n            this._resetList(this._contextMenu);\n            var end = this._itemCollection.length - maxItems;\n            var overflowItems = this._itemCollection.slice(0, end);\n            overflowItems.forEach(function (item) {\n                var li = document.createElement(\"li\");\n                li.className = \"ms-ContextualMenu-item\";\n                var a = document.createElement(\"a\");\n                a.className = \"ms-ContextualMenu-link\";\n                if (item.link !== null) {\n                    a.setAttribute(\"href\", item.link);\n                }\n                a.setAttribute(\"tabindex\", (_this._tabIndex++).toString());\n                a.textContent = item.text;\n                li.appendChild(a);\n                _this._contextMenu.appendChild(li);\n            });\n        };\n        /**\n         * creates the breadcrumbs\n        */\n        Breadcrumb.prototype._addBreadcrumbItems = function (maxItems) {\n            this._resetList(this._breadcrumbList);\n            var i = this._itemCollection.length - maxItems;\n            i = i < 0 ? 0 : i;\n            if (i >= 0) {\n                for (i; i < this._itemCollection.length; i++) {\n                    var listItem = document.createElement(\"li\");\n                    var item = this._itemCollection[i];\n                    var a = document.createElement(\"a\");\n                    var chevron = document.createElement(\"i\");\n                    listItem.className = \"ms-Breadcrumb-listItem\";\n                    a.className = \"ms-Breadcrumb-itemLink\";\n                    if (item.link !== null) {\n                        a.setAttribute(\"href\", item.link);\n                    }\n                    a.setAttribute(\"tabindex\", (this._tabIndex++).toString());\n                    a.textContent = item.text;\n                    chevron.className = \"ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight\";\n                    listItem.appendChild(a);\n                    listItem.appendChild(chevron);\n                    this._breadcrumbList.appendChild(listItem);\n                }\n            }\n        };\n        /**\n         * resets a list by removing its children\n        */\n        Breadcrumb.prototype._resetList = function (list) {\n            while (list.firstChild) {\n                list.removeChild(list.firstChild);\n            }\n        };\n        /**\n         * opens the overflow menu\n        */\n        Breadcrumb.prototype._openOverflow = function (event) {\n            if (this._overflowMenu.className.indexOf(\" is-open\") === -1) {\n                this._overflowMenu.classList.add(\"is-open\");\n                this.removeOutlinesOnClick();\n                // force focus rect onto overflow button\n                this._overflowButton.focus();\n            }\n        };\n        Breadcrumb.prototype._overflowKeyPress = function (event) {\n            if (event.keyCode === 13) {\n                this._openOverflow(event);\n            }\n        };\n        /**\n         * closes the overflow menu\n        */\n        Breadcrumb.prototype._closeOverflow = function (event) {\n            if (!event || event.target !== this._overflowButton) {\n                this._overflowMenu.classList.remove(\"is-open\");\n            }\n        };\n        /**\n         * caches elements and values of the component\n        */\n        Breadcrumb.prototype._cacheDOM = function () {\n            this._breadcrumb = this.container;\n            this._breadcrumbList = this._breadcrumb.querySelector(\".ms-Breadcrumb-list\");\n            this._listItems = this._breadcrumb.querySelectorAll(\".ms-Breadcrumb-listItem\");\n            this._contextMenu = this._breadcrumb.querySelector(\".ms-ContextualMenu\");\n            this._overflowButton = this._breadcrumb.querySelector(\".ms-Breadcrumb-overflowButton\");\n            this._overflowMenu = this._breadcrumb.querySelector(\".ms-Breadcrumb-overflowMenu\");\n        };\n        /**\n        * sets handlers for resize and button click events\n        */\n        Breadcrumb.prototype._setListeners = function () {\n            window.addEventListener(\"resize\", this._onResize, false);\n            this._overflowButton.addEventListener(\"click\", this._openOverflow, false);\n            this._overflowButton.addEventListener(\"keypress\", this._overflowKeyPress, false);\n            document.addEventListener(\"click\", this._closeOverflow, false);\n            this._breadcrumbList.addEventListener(\"click\", this.removeOutlinesOnClick, false);\n        };\n        // medium breakpoint\n        Breadcrumb.MEDIUM = 639;\n        return Breadcrumb;\n    }());\n    fabric.Breadcrumb = Breadcrumb;\n})(fabric || (fabric = {})); // end fabric namespace\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n/**\n * Button\n *\n * Mostly just a click handler\n *\n */\nvar fabric;\n(function (fabric) {\n    \"use strict\";\n    var Button = (function () {\n        function Button(container, clickHandler) {\n            this._container = container;\n            if (clickHandler) {\n                this._clickHandler = clickHandler;\n                this._setClick();\n            }\n        }\n        Button.prototype.disposeEvents = function () {\n            this._container.removeEventListener(\"click\", this._clickHandler, false);\n        };\n        Button.prototype._setClick = function () {\n            this._container.addEventListener(\"click\", this._clickHandler, false);\n        };\n        return Button;\n    }());\n    fabric.Button = Button;\n})(fabric || (fabric = {}));\n\n\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n/**\n * ContextualHost\n *\n * Hosts contextual menus and callouts\n * NOTE: Position bottom only works if html is set to max-height 100%, overflow hidden\n * and body is set to overflow scroll, body is set to height 100%\n *\n */\n/**\n * @namespace fabric\n */\nvar fabric;\n(function (fabric) {\n    /**\n     *\n     * @constructor\n     */\n    var CONTEXT_STATE_CLASS = \"is-open\";\n    var MODAL_STATE_POSITIONED = \"is-positioned\";\n    var CONTEXT_HOST_MAIN_CLASS = \"ms-ContextualHost-main\";\n    var CONTEXT_HOST_BEAK_CLASS = \"ms-ContextualHost-beak\";\n    var ARROW_LEFT_CLASS = \"ms-ContextualHost--arrowLeft\";\n    var ARROW_TOP_CLASS = \"ms-ContextualHost--arrowTop\";\n    var ARROW_BOTTOM_CLASS = \"ms-ContextualHost--arrowBottom\";\n    var ARROW_RIGHT_CLASS = \"ms-ContextualHost--arrowRight\";\n    var MODIFIER_BASE = \"ms-ContextualHost--\";\n    var ARROW_SIZE = 28;\n    var ARROW_OFFSET = 8;\n    var ContextualHost = (function () {\n        function ContextualHost(content, direction, targetElement, hasArrow, modifiers, matchTargetWidth, disposalCallback) {\n            if (hasArrow === void 0) { hasArrow = true; }\n            this._resizeAction = this._resizeAction.bind(this);\n            this._dismissAction = this._dismissAction.bind(this);\n            this._handleKeyUpDismiss = this._handleKeyUpDismiss.bind(this);\n            this._matchTargetWidth = matchTargetWidth || false;\n            this._direction = direction;\n            this._container = this.createContainer();\n            this._contextualHost = this._container;\n            this._contextualHostMain = this._contextualHost.getElementsByClassName(CONTEXT_HOST_MAIN_CLASS)[0];\n            this._contextualHostMain.appendChild(content);\n            this._hasArrow = hasArrow;\n            this._arrow = this._container.getElementsByClassName(CONTEXT_HOST_BEAK_CLASS)[0];\n            this._targetElement = targetElement;\n            this._openModal();\n            this._setResizeDisposal();\n            if (disposalCallback) {\n                this._disposalCallback = disposalCallback;\n            }\n            if (modifiers) {\n                for (var i = 0; i < modifiers.length; i++) {\n                    this._container.classList.add(MODIFIER_BASE + modifiers[i]);\n                }\n            }\n            if (!ContextualHost.hosts) {\n                ContextualHost.hosts = [];\n            }\n            ContextualHost.hosts.push(this);\n        }\n        ContextualHost.prototype.disposeModal = function () {\n            if (ContextualHost.hosts.length > 0) {\n                window.removeEventListener(\"resize\", this._resizeAction, false);\n                document.removeEventListener(\"click\", this._dismissAction, true);\n                document.removeEventListener(\"keyup\", this._handleKeyUpDismiss, true);\n                this._container.parentNode.removeChild(this._container);\n                if (this._disposalCallback) {\n                    this._disposalCallback();\n                }\n                // Dispose of all ContextualHosts\n                var index = ContextualHost.hosts.indexOf(this);\n                ContextualHost.hosts.splice(index, 1);\n                var i = ContextualHost.hosts.length;\n                while (i--) {\n                    ContextualHost.hosts[i].disposeModal();\n                    ContextualHost.hosts.splice(i, 1);\n                }\n            }\n        };\n        ContextualHost.prototype.setChildren = function (value) {\n            if (!this._children) {\n                this._children = [];\n            }\n            this._children.push(value);\n        };\n        ContextualHost.prototype.contains = function (value) {\n            return this._container.contains(value);\n        };\n        ContextualHost.prototype.createContainer = function () {\n            var ContextualHost0 = document.createElement(\"div\");\n            ContextualHost0.setAttribute(\"class\", \"ms-ContextualHost\");\n            ContextualHost0.innerHTML += \" \";\n            var ContextualHost0c1 = document.createElement(\"div\");\n            ContextualHost0c1.setAttribute(\"class\", CONTEXT_HOST_MAIN_CLASS);\n            ContextualHost0c1.innerHTML += \" \";\n            ContextualHost0.appendChild(ContextualHost0c1);\n            ContextualHost0.innerHTML += \" \";\n            var ContextualHost0c3 = document.createElement(\"div\");\n            ContextualHost0c3.setAttribute(\"class\", CONTEXT_HOST_BEAK_CLASS);\n            ContextualHost0.appendChild(ContextualHost0c3);\n            ContextualHost0.innerHTML += \"\";\n            return ContextualHost0;\n        };\n        ContextualHost.prototype._openModal = function () {\n            var _this = this;\n            this._copyModalToBody();\n            this._saveModalSize();\n            this._findAvailablePosition();\n            this._showModal();\n            // Delay the click setting\n            setTimeout(function () { _this._setDismissClick(); }, 100);\n        };\n        ContextualHost.prototype._findAvailablePosition = function () {\n            var _posOk;\n            switch (this._direction) {\n                case \"left\":\n                    // Try the right side\n                    _posOk = this._positionOk(this._tryPosModalLeft.bind(this), this._tryPosModalRight.bind(this), this._tryPosModalBottom.bind(this), this._tryPosModalTop.bind(this));\n                    this._setPosition(_posOk);\n                    break;\n                case \"right\":\n                    _posOk = this._positionOk(this._tryPosModalRight.bind(this), this._tryPosModalLeft.bind(this), this._tryPosModalBottom.bind(this), this._tryPosModalTop.bind(this));\n                    this._setPosition(_posOk);\n                    break;\n                case \"top\":\n                    _posOk = this._positionOk(this._tryPosModalTop.bind(this), this._tryPosModalBottom.bind(this));\n                    this._setPosition(_posOk);\n                    break;\n                case \"bottom\":\n                    _posOk = this._positionOk(this._tryPosModalBottom.bind(this), this._tryPosModalTop.bind(this));\n                    this._setPosition(_posOk);\n                    break;\n                default:\n                    this._setPosition();\n            }\n        };\n        ContextualHost.prototype._showModal = function () {\n            this._container.classList.add(CONTEXT_STATE_CLASS);\n        };\n        ContextualHost.prototype._positionOk = function (pos1, pos2, pos3, pos4) {\n            var _posOk;\n            _posOk = pos1();\n            if (!_posOk) {\n                _posOk = pos2();\n                if (!_posOk && pos3) {\n                    _posOk = pos3();\n                    if (!_posOk && pos4) {\n                        _posOk = pos4();\n                    }\n                }\n            }\n            return _posOk;\n        };\n        ContextualHost.prototype._calcLeft = function (mWidth, teWidth, teLeft) {\n            var mHalfWidth = mWidth / 2;\n            var teHalf = teWidth / 2;\n            var mHLeft = (teLeft + teHalf) - mHalfWidth;\n            mHLeft = (mHLeft < mHalfWidth) ? teLeft : mHLeft;\n            return mHLeft;\n        };\n        ContextualHost.prototype._calcTop = function (mHeight, teHeight, teTop) {\n            var mHalfWidth = mHeight / 2;\n            var teHalf = teHeight / 2;\n            var mHLeft = (teTop + teHalf) - mHalfWidth;\n            mHLeft = (mHLeft < mHalfWidth) ? teTop : mHLeft;\n            return mHLeft;\n        };\n        ContextualHost.prototype._setPosition = function (curDirection) {\n            var teBR = this._targetElement.getBoundingClientRect();\n            var teLeft = teBR.left;\n            var teRight = teBR.right;\n            var teTop = teBR.top;\n            var teWidth = teBR.width;\n            var teHeight = teBR.height;\n            var mHLeft;\n            var mHTop;\n            var mWidth = \"\";\n            var arrowTop;\n            var arrowLeft;\n            var windowX = window.scrollX ? window.scrollX : 0;\n            var windowY = window.scrollY ? window.scrollY : 0;\n            var arrowSpace = (this._hasArrow) ? ARROW_SIZE : 0;\n            if (this._matchTargetWidth) {\n                mWidth = \"width: \" + this._modalWidth + \"px;\";\n            }\n            switch (curDirection) {\n                case \"left\":\n                    mHLeft = teLeft - this._modalWidth - arrowSpace;\n                    mHTop = this._calcTop(this._modalHeight, teHeight, teTop);\n                    mHTop += window.scrollY ? window.scrollY : 0;\n                    this._container.setAttribute(\"style\", \"top: \" + mHTop + \"px; left: \" + mHLeft + \"px;\" + mWidth);\n                    this._container.classList.add(MODAL_STATE_POSITIONED);\n                    if (this._hasArrow) {\n                        this._container.classList.add(ARROW_RIGHT_CLASS);\n                        arrowTop = ((teTop + windowY) - mHTop) + ARROW_OFFSET;\n                        this._arrow.setAttribute(\"style\", \"top: \" + arrowTop + \"px;\");\n                    }\n                    break;\n                case \"right\":\n                    mHTop = this._calcTop(this._modalHeight, teHeight, teTop);\n                    mHTop += windowY;\n                    mHLeft = teRight + arrowSpace;\n                    this._container.setAttribute(\"style\", \"top: \" + mHTop + \"px; left: \" + mHLeft + \"px;\" + mWidth);\n                    this._container.classList.add(MODAL_STATE_POSITIONED);\n                    if (this._hasArrow) {\n                        arrowTop = ((windowY + teTop) - mHTop) + ARROW_OFFSET;\n                        this._arrow.setAttribute(\"style\", \"top: \" + arrowTop + \"px;\");\n                        this._container.classList.add(ARROW_LEFT_CLASS);\n                    }\n                    break;\n                case \"top\":\n                    mHLeft = this._calcLeft(this._modalWidth, this._teWidth, teLeft);\n                    mHTop = teTop - this._modalHeight - arrowSpace;\n                    mHTop += windowY;\n                    this._container.setAttribute(\"style\", \"top: \" + mHTop + \"px; left: \" + mHLeft + \"px;\" + mWidth);\n                    this._container.classList.add(MODAL_STATE_POSITIONED);\n                    if (this._hasArrow) {\n                        arrowTop = this._modalHeight - (arrowSpace / 2);\n                        arrowLeft = Math.max(windowX + teLeft - mHLeft + ((teWidth - arrowSpace) / 2), ARROW_OFFSET);\n                        this._arrow.setAttribute(\"style\", \"top: \" + arrowTop + \"px; left: \" + arrowLeft + \"px;\");\n                        this._container.classList.add(ARROW_BOTTOM_CLASS);\n                    }\n                    break;\n                case \"bottom\":\n                    mHLeft = mHLeft = this._calcLeft(this._modalWidth, this._teWidth, teLeft);\n                    mHTop = teTop + teHeight + arrowSpace;\n                    mHTop += window.scrollY ? window.scrollY : 0;\n                    this._container.setAttribute(\"style\", \"top: \" + mHTop + \"px; left: \" + mHLeft + \"px;\" + mWidth);\n                    this._container.classList.add(MODAL_STATE_POSITIONED);\n                    if (this._hasArrow) {\n                        arrowLeft = Math.max(windowX + teLeft - mHLeft + ((teWidth - arrowSpace) / 2), ARROW_OFFSET);\n                        this._arrow.setAttribute(\"style\", \"left: \" + arrowLeft + \"px;\");\n                        this._container.classList.add(ARROW_TOP_CLASS);\n                    }\n                    break;\n                default:\n                    this._container.setAttribute(\"style\", \"top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%);\");\n            }\n        };\n        ContextualHost.prototype._tryPosModalLeft = function () {\n            var teLeft = this._targetElement.getBoundingClientRect().left;\n            if (teLeft < this._modalWidth) {\n                return false;\n            }\n            else {\n                return \"left\";\n            }\n        };\n        ContextualHost.prototype._tryPosModalRight = function () {\n            var teRight = this._targetElement.getBoundingClientRect().right;\n            var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);\n            if ((w - teRight) < this._modalWidth) {\n                return false;\n            }\n            else {\n                return \"right\";\n            }\n        };\n        ContextualHost.prototype._tryPosModalBottom = function () {\n            var teBottom = window.innerHeight - this._targetElement.getBoundingClientRect().bottom;\n            if (teBottom < this._modalHeight) {\n                return false;\n            }\n            else {\n                return \"bottom\";\n            }\n        };\n        ContextualHost.prototype._tryPosModalTop = function () {\n            var teTop = this._targetElement.getBoundingClientRect().top;\n            if (teTop < this._modalHeight) {\n                return false;\n            }\n            else {\n                return \"top\";\n            }\n        };\n        ContextualHost.prototype._copyModalToBody = function () {\n            document.body.appendChild(this._container);\n        };\n        ContextualHost.prototype._saveModalSize = function () {\n            var _modalStyles = window.getComputedStyle(this._container);\n            this._container.setAttribute(\"style\", \"opacity: 0; z-index: -1\");\n            this._container.classList.add(MODAL_STATE_POSITIONED);\n            this._container.classList.add(CONTEXT_STATE_CLASS);\n            if (this._matchTargetWidth) {\n                var teStyles = window.getComputedStyle(this._targetElement);\n                this._modalWidth = this._targetElement.getBoundingClientRect().width\n                    + (parseInt(teStyles.marginLeft, 10)\n                        + parseInt(teStyles.marginLeft, 10));\n            }\n            else {\n                this._modalWidth = this._container.getBoundingClientRect().width\n                    + (parseInt(_modalStyles.marginLeft, 10)\n                        + parseInt(_modalStyles.marginRight, 10));\n                this._container.setAttribute(\"style\", \"\");\n            }\n            this._modalHeight = this._container.getBoundingClientRect().height\n                + (parseInt(_modalStyles.marginTop, 10)\n                    + parseInt(_modalStyles.marginBottom, 10));\n            this._container.classList.remove(MODAL_STATE_POSITIONED);\n            this._container.classList.remove(CONTEXT_STATE_CLASS);\n            this._teWidth = this._targetElement.getBoundingClientRect().width;\n            this._teHeight = this._targetElement.getBoundingClientRect().height;\n        };\n        ContextualHost.prototype._dismissAction = function (e) {\n            // If the element clicked is not INSIDE of contextualHost then close contextualHost\n            if (!this._container.contains(e.target) && e.target !== this._container) {\n                if (this._children !== undefined) {\n                    var isChild_1 = false;\n                    this._children.map(function (child) {\n                        if (child !== undefined) {\n                            isChild_1 = child.contains(e.target);\n                        }\n                    });\n                    if (!isChild_1) {\n                        this.disposeModal();\n                    }\n                }\n                else {\n                    this.disposeModal();\n                }\n            }\n        };\n        ContextualHost.prototype._setDismissClick = function () {\n            document.addEventListener(\"click\", this._dismissAction, true);\n            document.addEventListener(\"keyup\", this._handleKeyUpDismiss, true);\n        };\n        ContextualHost.prototype._handleKeyUpDismiss = function (e) {\n            if (e.keyCode === 32 || e.keyCode === 27) {\n                this._dismissAction(e);\n            }\n        };\n        ContextualHost.prototype._resizeAction = function () {\n            this.disposeModal();\n        };\n        ContextualHost.prototype._setResizeDisposal = function () {\n            window.addEventListener(\"resize\", this._resizeAction, false);\n        };\n        return ContextualHost;\n    }());\n    fabric.ContextualHost = ContextualHost;\n})(fabric || (fabric = {}));\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n/// <reference path=\"../Button/Button.ts\"/>\n/// <reference path=\"../Button/IButton.ts\"/>\n/**\n * Callout\n *\n * Add callouts to things and stuff\n *\n */\n/// <reference path=\"../ContextualHost/ContextualHost.ts\"/>\nvar STATE_HIDDEN = \"is-hidden\";\nvar CLOSE_BUTTON_CLASS = \".ms-Callout-close\";\nvar MODIFIER_OOBE_CLASS = \"ms-Callout--OOBE\";\nvar fabric;\n(function (fabric) {\n    \"use strict\";\n    var Callout = (function () {\n        function Callout(container, addTarget, position) {\n            this._container = container;\n            this._addTarget = addTarget;\n            this._position = position;\n            this._closeButton = document.querySelector(CLOSE_BUTTON_CLASS);\n            this._setOpener();\n        }\n        Callout.prototype._setOpener = function () {\n            this._addTarget.addEventListener(\"click\", this._clickHandler.bind(this), true);\n            this._addTarget.addEventListener(\"keyup\", this._keyupHandler.bind(this), true);\n        };\n        Callout.prototype._openContextMenu = function () {\n            var modifiers = [];\n            if (this._hasModifier(MODIFIER_OOBE_CLASS)) {\n                modifiers.push(\"primaryArrow\");\n            }\n            this._container.classList.remove(STATE_HIDDEN);\n            this._contextualHost = new fabric.ContextualHost(this._container, this._position, this._addTarget, true, modifiers);\n            if (this._closeButton) {\n                this._closeButton.addEventListener(\"click\", this._closeHandler.bind(this), false);\n            }\n        };\n        Callout.prototype._hasModifier = function (modifierClass) {\n            return this._container.classList.contains(modifierClass);\n        };\n        Callout.prototype._closeHandler = function (e) {\n            if (this._contextualHost != null) {\n                this._contextualHost.disposeModal();\n            }\n            this._closeButton.removeEventListener(\"click\", this._closeHandler.bind(this), false);\n            this._addTarget.removeEventListener(\"click\", this._clickHandler.bind(this), true);\n            this._addTarget.removeEventListener(\"keyup\", this._keyupHandler.bind(this), true);\n        };\n        Callout.prototype._clickHandler = function (e) {\n            this._openContextMenu();\n        };\n        Callout.prototype._keyupHandler = function (event) {\n            if (event.keyCode === 32) {\n                event.stopPropagation();\n                event.preventDefault();\n                this._openContextMenu();\n            }\n            else {\n                this._closeHandler(event);\n            }\n        };\n        return Callout;\n    }());\n    fabric.Callout = Callout;\n})(fabric || (fabric = {}));\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n\"use strict\";\nvar fabric;\n(function (fabric) {\n    /**\n     * CheckBox Plugin\n     *\n     * Adds basic demonstration functionality to .ms-CheckBox components.\n     *\n     */\n    var CheckBox = (function () {\n        /**\n         *\n         * @param {HTMLElement} container - the target container for an instance of CheckBox\n         * @constructor\n         */\n        function CheckBox(container) {\n            this._container = container;\n            this._choiceField = this._container.querySelector(\".ms-CheckBox-field\");\n            this._choiceInput = this._container.querySelector(\".ms-CheckBox-input\");\n            if (this._choiceInput.checked) {\n                this._choiceField.setAttribute(\"aria-checked\", \"true\");\n            }\n            if (this._choiceField.getAttribute(\"aria-checked\") === \"true\") {\n                this._choiceField.classList.add(\"is-checked\");\n            }\n            this._addListeners();\n        }\n        CheckBox.prototype.getValue = function () {\n            return this._choiceField.getAttribute(\"aria-checked\") === \"true\" ? true : false;\n        };\n        CheckBox.prototype.toggle = function () {\n            if (this.getValue()) {\n                this.unCheck();\n            }\n            else {\n                this.check();\n            }\n            this._choiceInput.click();\n        };\n        CheckBox.prototype.check = function () {\n            this._choiceField.setAttribute(\"aria-checked\", \"true\");\n            this._choiceField.classList.add(\"is-checked\");\n        };\n        CheckBox.prototype.unCheck = function () {\n            this._choiceField.setAttribute(\"aria-checked\", \"false\");\n            this._choiceField.classList.remove(\"is-checked\");\n        };\n        CheckBox.prototype.removeListeners = function () {\n            this._choiceField.removeEventListener(\"focus\", this._FocusHandler.bind(this));\n            this._choiceField.removeEventListener(\"blur\", this._BlurHandler.bind(this));\n            this._choiceField.removeEventListener(\"click\", this._ClickHandler.bind(this));\n            this._choiceField.removeEventListener(\"keydown\", this._KeydownHandler.bind(this));\n        };\n        CheckBox.prototype._addListeners = function (events) {\n            var ignore = events && events.ignore;\n            if (!ignore || !(ignore.indexOf(\"focus\") > -1)) {\n                this._choiceField.addEventListener(\"focus\", this._FocusHandler.bind(this), false);\n            }\n            if (!ignore || !(ignore.indexOf(\"blur\") > -1)) {\n                this._choiceField.addEventListener(\"blur\", this._BlurHandler.bind(this), false);\n            }\n            if (!ignore || !(ignore.indexOf(\"click\") > -1)) {\n                this._choiceField.addEventListener(\"click\", this._ClickHandler.bind(this), false);\n            }\n            if (!ignore || !(ignore.indexOf(\"keydown\") > -1)) {\n                this._choiceField.addEventListener(\"keydown\", this._KeydownHandler.bind(this), false);\n            }\n        };\n        CheckBox.prototype._FocusHandler = function () {\n            this._choiceField.classList.add(\"in-focus\");\n        };\n        CheckBox.prototype._BlurHandler = function () {\n            this._choiceField.classList.remove(\"in-focus\");\n        };\n        CheckBox.prototype._ClickHandler = function (event) {\n            event.stopPropagation();\n            event.preventDefault();\n            if (!this._choiceField.classList.contains(\"is-disabled\")) {\n                this.toggle();\n            }\n        };\n        CheckBox.prototype._KeydownHandler = function (event) {\n            if (event.keyCode === 32) {\n                event.stopPropagation();\n                event.preventDefault();\n                if (!this._choiceField.classList.contains(\"is-disabled\")) {\n                    this.toggle();\n                }\n            }\n        };\n        return CheckBox;\n    }());\n    fabric.CheckBox = CheckBox;\n})(fabric || (fabric = {}));\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n/// <reference path=\"../CheckBox/CheckBox.ts\"/>\n\"use strict\";\nvar fabric;\n(function (fabric) {\n    /**\n     * RadioButton Plugin\n     *\n     * Adds basic demonstration functionality to .ms-RadioButton components.\n     *\n     */\n    var RadioButton = (function () {\n        /**\n         *\n         * @param {HTMLElement} container - the target container for an instance of RadioButton\n         * @constructor\n         */\n        function RadioButton(container) {\n            this._container = container;\n            this._choiceField = this._container.querySelector(\".ms-RadioButton-field\");\n            this._choiceInput = this._container.querySelector(\".ms-RadioButton-input\");\n            if (this._choiceField.getAttribute(\"aria-checked\") === \"true\") {\n                this._choiceField.classList.add(\"is-checked\");\n            }\n            this._addListeners();\n        }\n        RadioButton.prototype.getValue = function () {\n            return this._choiceField.getAttribute(\"aria-checked\") === \"true\" ? true : false;\n        };\n        RadioButton.prototype.toggle = function () {\n            if (this.getValue()) {\n                this.unCheck();\n            }\n            else {\n                this.check();\n            }\n        };\n        RadioButton.prototype.check = function () {\n            this._choiceField.setAttribute(\"aria-checked\", \"true\");\n            this._choiceField.classList.add(\"is-checked\");\n            this._choiceInput.checked = true;\n        };\n        RadioButton.prototype.unCheck = function () {\n            this._choiceField.setAttribute(\"aria-checked\", \"false\");\n            this._choiceField.classList.remove(\"is-checked\");\n            this._choiceInput.checked = false;\n        };\n        RadioButton.prototype.removeListeners = function () {\n            this._choiceField.removeEventListener(\"focus\", this._FocusHandler.bind(this));\n            this._choiceField.removeEventListener(\"blur\", this._BlurHandler.bind(this));\n            this._choiceField.removeEventListener(\"click\", this._RadioClickHandler.bind(this));\n            this._choiceField.addEventListener(\"keydown\", this._RadioKeydownHandler.bind(this));\n        };\n        RadioButton.prototype._addListeners = function () {\n            this._choiceField.addEventListener(\"focus\", this._FocusHandler.bind(this), false);\n            this._choiceField.addEventListener(\"blur\", this._BlurHandler.bind(this), false);\n            this._choiceField.addEventListener(\"click\", this._RadioClickHandler.bind(this), false);\n            this._choiceField.addEventListener(\"keydown\", this._RadioKeydownHandler.bind(this), false);\n        };\n        RadioButton.prototype._RadioClickHandler = function (event) {\n            event.stopPropagation();\n            event.preventDefault();\n            if (!this._choiceField.classList.contains(\"is-disabled\")) {\n                this._dispatchSelectEvent();\n            }\n        };\n        RadioButton.prototype._dispatchSelectEvent = function () {\n            var objDict = {\n                bubbles: true,\n                cancelable: true,\n                detail: {\n                    name: this._choiceField.getAttribute(\"name\"),\n                    item: this\n                }\n            };\n            this._choiceField.dispatchEvent(new CustomEvent(\"msChoicefield\", objDict));\n        };\n        RadioButton.prototype._RadioKeydownHandler = function (event) {\n            if (event.keyCode === 32) {\n                event.stopPropagation();\n                event.preventDefault();\n                if (!this._choiceField.classList.contains(\"is-disabled\")) {\n                    this._dispatchSelectEvent();\n                }\n            }\n        };\n        RadioButton.prototype._FocusHandler = function () {\n            this._choiceField.classList.add(\"in-focus\");\n        };\n        RadioButton.prototype._BlurHandler = function () {\n            this._choiceField.classList.remove(\"in-focus\");\n        };\n        return RadioButton;\n    }());\n    fabric.RadioButton = RadioButton;\n})(fabric || (fabric = {}));\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n/// <reference path=\"../RadioButton/RadioButton.ts\"/>\n\"use strict\";\nvar fabric;\n(function (fabric) {\n    /**\n     * ChoiceFieldGroup Plugin\n     *\n     * Adds basic demonstration functionality to .ms-ChoiceFieldGroup components.\n     *\n    */\n    var ChoiceFieldGroup = (function () {\n        /**\n         *\n         * @param {HTMLElement} container - the target container for an instance of ChoiceFieldGroup\n         * @constructor\n         */\n        function ChoiceFieldGroup(container) {\n            this._choiceFieldGroup = container;\n            this._choiceFieldComponents = [];\n            this._initalSetup();\n            this._addListeners();\n        }\n        ChoiceFieldGroup.prototype.removeListeners = function () {\n            this._choiceFieldGroup.removeEventListener(\"msChoicefield\", this._ChoiceFieldHandler.bind(this));\n        };\n        ChoiceFieldGroup.prototype._initalSetup = function () {\n            var choiceFieldElements = this._choiceFieldGroup.querySelectorAll(\".ms-RadioButton\");\n            for (var i = 0; i < choiceFieldElements.length; i++) {\n                this._choiceFieldComponents[i] = new fabric.RadioButton(choiceFieldElements[i]);\n            }\n        };\n        ChoiceFieldGroup.prototype._addListeners = function () {\n            document.addEventListener(\"msChoicefield\", this._ChoiceFieldHandler.bind(this), false);\n        };\n        ChoiceFieldGroup.prototype._ChoiceFieldHandler = function (event) {\n            var name = event.detail.name;\n            var selectedChoice = event.detail.item;\n            if (this._choiceFieldGroup.id === name) {\n                for (var i = 0; i < this._choiceFieldComponents.length; i++) {\n                    this._choiceFieldComponents[i].unCheck();\n                }\n                selectedChoice.check();\n            }\n        };\n        return ChoiceFieldGroup;\n    }());\n    fabric.ChoiceFieldGroup = ChoiceFieldGroup;\n})(fabric || (fabric = {}));\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n/**\n * SearchBox component\n *\n * Allows you to search the world.\n *\n */\n/**\n * @namespace fabric\n */\nvar fabric;\n(function (fabric) {\n    /**\n     *\n     * @param {HTMLElement} container - the target container for an instance of SearchBox\n     * @constructor\n     *\n     */\n    var SB_FIELD = \".ms-SearchBox-field\";\n    var SB_CLEAR_BUTTON = \".ms-SearchBox-clear\";\n    var SB_EXIT_BUTTON = \".ms-SearchBox-exit\";\n    var SB_HAS_TEXT = \"has-text\";\n    var SB_IS_ACTIVE = \"is-active\";\n    var SB_IS_ANIMATED = \"is-animated\";\n    var SearchBox = (function () {\n        function SearchBox(container) {\n            var _this = this;\n            this._container = container;\n            this._saveDOMRefs(this._container);\n            this._boundExpandSearchHandler = this._expandSearchHandler.bind(this);\n            this._boundEnableClose = this._enableClose.bind(this);\n            this._boundCollapseSearchBox = this._collapseSearchBox.bind(this);\n            this._boundClearSearchBox = this._clearSearchBox.bind(this);\n            this._boundHandleBlur = this._handleBlur.bind(this);\n            this._boundExitSearchBox = this._exitSearchBox.bind(this);\n            this._setHasText();\n            this._setFocusAction(this._container);\n            this._setClearButtonAction();\n            this._setBlurAction();\n            this._clearOnly = false;\n            setTimeout(function () {\n                _this._checkState();\n                _this._addAnimation();\n            }, 10);\n        }\n        SearchBox.prototype.setCollapsedListeners = function () {\n            this._disposeListeners();\n            this._searchBox.addEventListener(\"click\", this._boundExpandSearchHandler, false);\n            this._searchBoxField.addEventListener(\"focus\", this._boundExpandSearchHandler, true);\n        };\n        SearchBox.prototype.getInputField = function () {\n            return this._searchBoxField;\n        };\n        SearchBox.prototype._saveDOMRefs = function (context) {\n            this._searchBox = context;\n            this._searchBoxField = this._searchBox.querySelector(SB_FIELD);\n            this._searchBoxClearButton = this._searchBox.querySelector(SB_CLEAR_BUTTON);\n            this._searchBoxExitButton = this._searchBox.querySelector(SB_EXIT_BUTTON);\n        };\n        SearchBox.prototype._disposeListeners = function () {\n            this._searchBox.removeEventListener(\"click\", this._boundExpandSearchHandler);\n            this._searchBoxField.removeEventListener(\"focus\", this._boundExpandSearchHandler);\n        };\n        SearchBox.prototype._exitSearchBox = function (event) {\n            event.stopPropagation();\n            event.target.blur();\n            this._clearSearchBox();\n            this._collapseSearchBox();\n            this._searchBox.removeEventListener(\"keyup\", this._boundEnableClose);\n            this.setCollapsedListeners();\n        };\n        SearchBox.prototype._collapseSearchBox = function () {\n            this._searchBox.classList.remove(\"is-active\");\n            var event = document.createEvent(\"Event\");\n            event.initEvent(\"searchCollapse\", true, true);\n            this._searchBoxField.dispatchEvent(event);\n        };\n        SearchBox.prototype._expandSearchHandler = function () {\n            this._disposeListeners();\n            this._searchBox.classList.add(\"is-active\");\n            this._searchBoxField.focus();\n        };\n        SearchBox.prototype._enableClose = function () {\n            this._setHasText();\n        };\n        SearchBox.prototype._setHasText = function () {\n            if (this._searchBoxField.value.length > 0) {\n                this._searchBox.classList.add(SB_HAS_TEXT);\n            }\n            else {\n                this._searchBox.classList.remove(SB_HAS_TEXT);\n            }\n        };\n        SearchBox.prototype._setFocusAction = function (context) {\n            var _this = this;\n            this._searchBoxField.addEventListener(\"focus\", function () {\n                _this._setHasText();\n                _this._searchBox.addEventListener(\"keyup\", _this._boundEnableClose, false);\n                _this._searchBox.classList.add(SB_IS_ACTIVE);\n                _this._searchBox.classList.add(SB_IS_ACTIVE);\n            }, true);\n        };\n        SearchBox.prototype._clearSearchBox = function (event) {\n            var _this = this;\n            this._clearOnly = true;\n            this._searchBoxField.value = \"\";\n            this._setHasText();\n            setTimeout(function () {\n                _this._clearOnly = false;\n            }, 10);\n        };\n        SearchBox.prototype._setClearButtonAction = function () {\n            var _this = this;\n            if (this._searchBoxExitButton) {\n                this._searchBoxExitButton.addEventListener(\"click\", this._boundExitSearchBox, false);\n            }\n            this._searchBoxClearButton.addEventListener(\"mousedown\", this._boundClearSearchBox, false);\n            this._searchBoxClearButton.addEventListener(\"keydown\", function (e) {\n                var keyCode = e.keyCode;\n                if (keyCode === 13) {\n                    _this._clearSearchBox(e);\n                }\n            }, false);\n        };\n        SearchBox.prototype._handleBlur = function (event) {\n            var _this = this;\n            if (!this._clearOnly) {\n                this._searchBox.removeEventListener(\"keyup\", this._boundEnableClose);\n                setTimeout(function () {\n                    if (!_this._searchBox.contains(document.activeElement)) {\n                        _this._clearSearchBox();\n                        _this._collapseSearchBox();\n                        _this.setCollapsedListeners();\n                    }\n                }, 10);\n            }\n            else {\n                this._searchBoxField.focus();\n            }\n            this._clearOnly = false;\n        };\n        SearchBox.prototype._setBlurAction = function () {\n            this._searchBoxField.addEventListener(\"blur\", this._boundHandleBlur, true);\n            this._searchBoxClearButton.addEventListener(\"blur\", this._boundHandleBlur, true);\n        };\n        SearchBox.prototype._checkState = function () {\n            if (this._searchBox.classList.contains(\"is-collapsed\")) {\n                this.setCollapsedListeners();\n            }\n        };\n        SearchBox.prototype._addAnimation = function () {\n            this._container.classList.add(SB_IS_ANIMATED);\n        };\n        return SearchBox;\n    }());\n    fabric.SearchBox = SearchBox;\n})(fabric || (fabric = {}));\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n/// <reference path=\"../ContextualHost/ContextualHost.ts\"/>\n/**\n * CommandButton\n *\n * Buttons used primarily in the command bar\n *\n */\n/**\n * @namespace fabric\n */\nvar fabric;\n(function (fabric) {\n    /**\n     *\n     * @constructor\n     */\n    var CONTEXT_CLASS = \".ms-ContextualMenu\";\n    var CB_SPLIT_CLASS = \".ms-CommandButton-splitIcon\";\n    var CB_BUTTON_CLASS = \".ms-CommandButton-button\";\n    var MODAL_POSITION = \"bottom\";\n    var CommandButton = (function () {\n        function CommandButton(container, contextMenu) {\n            this._container = container;\n            this._command = this._container;\n            this._commandButton = this._command.querySelector(CB_BUTTON_CLASS);\n            this._splitButton = this._command.querySelector(CB_SPLIT_CLASS);\n            if (contextMenu) {\n                this._contextualMenu = contextMenu;\n            }\n            else {\n                this._contextualMenu = this._container.querySelector(CONTEXT_CLASS);\n            }\n            this._checkForMenu();\n        }\n        CommandButton.prototype._createModalHostView = function () {\n            this._modalHostView = new fabric.ContextualHost(this._contextualMenu, MODAL_POSITION, this._command, false);\n        };\n        CommandButton.prototype._setClick = function () {\n            if (this._splitButton) {\n                this._splitButton.addEventListener(\"click\", this._createModalHostView.bind(this), false);\n            }\n            else {\n                this._commandButton.addEventListener(\"click\", this._createModalHostView.bind(this), false);\n            }\n        };\n        CommandButton.prototype._checkForMenu = function () {\n            if (this._contextualMenu) {\n                this._setClick();\n            }\n        };\n        return CommandButton;\n    }());\n    fabric.CommandButton = CommandButton;\n})(fabric || (fabric = {}));\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n/// <reference path=\"../SearchBox/SearchBox.ts\"/>\n/// <reference path=\"../CommandButton/CommandButton.ts\"/>\n/// <reference path=\"../ContextualHost/ContextualHost.ts\"/>\n/**\n * CommandBar\n *\n * Commanding and navigational surface\n *\n */\nvar fabric;\n(function (fabric) {\n    \"use strict\";\n    var CONTEXTUAL_MENU = \".ms-ContextualMenu\";\n    var CONTEXTUAL_MENU_ITEM = \".ms-ContextualMenu-item\";\n    var CONTEXTUAL_MENU_LINK = \".ms-ContextualMenu-link\";\n    var CB_SEARCH_BOX = \".ms-SearchBox\";\n    var CB_MAIN_AREA = \".ms-CommandBar-mainArea\";\n    var CB_SIDE_COMMAND_AREA = \".ms-CommandBar-sideCommands\";\n    var CB_ITEM_OVERFLOW = \".ms-CommandBar-overflowButton\";\n    var CB_NO_LABEL_CLASS = \"ms-CommandButton--noLabel\";\n    var SEARCH_BOX_CLOSE = \".ms-SearchBox-closeField\";\n    var COMMAND_BUTTON = \".ms-CommandButton\";\n    var COMMAND_BUTTON_LABEL = \".ms-CommandButton-label\";\n    var ICON = \".ms-Icon\";\n    var OVERFLOW_WIDTH = 40;\n    var OVERFLOW_LEFT_RIGHT_PADDING = 30;\n    var CommandBar = (function () {\n        function CommandBar(container) {\n            this.responsiveSizes = {\n                \"sm-min\": 320,\n                \"md-min\": 480,\n                \"lg-min\": 640,\n                \"xl-min\": 1024,\n                \"xxl-min\": 1366,\n                \"xxxl-min\": 1920\n            };\n            this.visibleCommands = [];\n            this.commandWidths = [];\n            this.overflowCommands = [];\n            this.itemCollection = [];\n            this._sideAreaCollection = [];\n            this.breakpoint = \"sm\";\n            this._container = container;\n            this.responsiveSizes[\"sm-max\"] = this.responsiveSizes[\"md-min\"] - 1;\n            this.responsiveSizes[\"md-max\"] = this.responsiveSizes[\"lg-min\"] - 1;\n            this.responsiveSizes[\"lg-max\"] = this.responsiveSizes[\"xl-min\"] - 1;\n            this.responsiveSizes[\"xl-max\"] = this.responsiveSizes[\"xxl-min\"] - 1;\n            this.responsiveSizes[\"xxl-max\"] = this.responsiveSizes[\"xxxl-min\"] - 1;\n            this._setElements();\n            this._setBreakpoint();\n            // If the overflow exists then run the overflow resizing\n            if (this._elements.overflowCommand) {\n                this._initOverflow();\n            }\n            this._setUIState();\n        }\n        CommandBar.prototype._runsSearchBox = function (state) {\n            if (state === void 0) { state = \"add\"; }\n            this._changeSearchState(\"is-collapsed\", state);\n        };\n        CommandBar.prototype._runOverflow = function () {\n            if (this._elements.overflowCommand) {\n                this._saveCommandWidths();\n                this._redrawMenu();\n                this._updateCommands();\n                this._drawCommands();\n                this._checkOverflow();\n            }\n        };\n        CommandBar.prototype._initOverflow = function () {\n            this._createContextualRef();\n            this._createItemCollection(this.itemCollection, CB_MAIN_AREA);\n            this._createItemCollection(this._sideAreaCollection, CB_SIDE_COMMAND_AREA);\n            this._saveCommandWidths();\n            this._updateCommands();\n            this._drawCommands();\n            this._setWindowEvent();\n            this._checkOverflow();\n        };\n        CommandBar.prototype._hasClass = function (element, cls) {\n            return (\" \" + element.className + \" \").indexOf(\" \" + cls + \" \") > -1;\n        };\n        CommandBar.prototype._onSearchExpand = function () {\n            if (this.breakpoint === \"lg\") {\n                this._container.classList.add(\"search-expanded\");\n                this._doResize();\n            }\n        };\n        CommandBar.prototype._onSearchCollapse = function () {\n            if (this.breakpoint === \"lg\") {\n                this._container.classList.remove(\"search-expanded\");\n                this._doResize();\n            }\n        };\n        CommandBar.prototype._getScreenSize = function () {\n            // First we need to set what the screen is doing, check screen size\n            var w = window;\n            var wSize = {\n                x: 0,\n                y: 0\n            };\n            var d = document, e = d.documentElement, g = d.getElementsByTagName(\"body\")[0];\n            wSize.x = w.innerWidth || e.clientWidth || g.clientWidth;\n            wSize.y = w.innerHeight || e.clientHeight || g.clientHeight;\n            return wSize;\n        };\n        CommandBar.prototype._setBreakpoint = function () {\n            var screenSize = this._getScreenSize().x;\n            switch (true) {\n                case (screenSize <= this.responsiveSizes[\"sm-max\"]):\n                    this.breakpoint = \"sm\";\n                    break;\n                case (screenSize >= this.responsiveSizes[\"md-min\"] && screenSize <= this.responsiveSizes[\"md-max\"]):\n                    this.breakpoint = \"md\";\n                    break;\n                case (screenSize >= this.responsiveSizes[\"lg-min\"] && screenSize <= this.responsiveSizes[\"lg-max\"]):\n                    this.breakpoint = \"lg\";\n                    break;\n                case (screenSize >= this.responsiveSizes[\"xl-min\"] && screenSize <= this.responsiveSizes[\"xl-max\"]):\n                    this.breakpoint = \"xl\";\n                    break;\n                case (screenSize >= this.responsiveSizes[\"xxl-min\"] && screenSize <= this.responsiveSizes[\"xxl-max\"]):\n                    this.breakpoint = \"xxl\";\n                    break;\n                case (screenSize >= this.responsiveSizes[\"xxxl-min\"]):\n                    this.breakpoint = \"xxxl\";\n                    break;\n            }\n        };\n        CommandBar.prototype._createSearchInstance = function () {\n            if (this._elements.searchBox) {\n                return new fabric.SearchBox(this._elements.searchBox);\n            }\n            else {\n                return false;\n            }\n        };\n        CommandBar.prototype._changeSearchState = function (state, action) {\n            if (this._elements.searchBox) {\n                switch (action) {\n                    case \"remove\":\n                        this._elements.searchBox.classList.remove(state);\n                        break;\n                    case \"add\":\n                        this._elements.searchBox.classList.add(state);\n                        break;\n                    default:\n                        break;\n                }\n            }\n        };\n        CommandBar.prototype._setElements = function () {\n            var _this = this;\n            this._elements = {\n                mainArea: this._container.querySelector(CB_MAIN_AREA)\n            };\n            if (this._container.querySelector(CB_SIDE_COMMAND_AREA)) {\n                this._elements.sideCommandArea = this._container.querySelector(CB_SIDE_COMMAND_AREA);\n            }\n            if (this._container.querySelector(CB_ITEM_OVERFLOW)) {\n                this._elements.overflowCommand = this._container.querySelector(CB_ITEM_OVERFLOW);\n                this._elements.contextMenu = this._container.querySelector(CB_ITEM_OVERFLOW).querySelector(CONTEXTUAL_MENU);\n            }\n            if (this._container.querySelector(CB_MAIN_AREA + \" \" + CB_SEARCH_BOX)) {\n                this._elements.searchBox = this._container.querySelector(CB_MAIN_AREA + \" \" + CB_SEARCH_BOX);\n                this._elements.searchBoxClose = this._container.querySelector(SEARCH_BOX_CLOSE);\n                this.searchBoxInstance = this._createSearchInstance();\n                this.searchBoxInstance.getInputField().addEventListener(\"focus\", function () { _this._onSearchExpand(); }, false);\n                this.searchBoxInstance.getInputField().addEventListener(\"searchCollapse\", function () { _this._onSearchCollapse(); }, false);\n            }\n        };\n        CommandBar.prototype._createItemCollection = function (iCollection, areaClass) {\n            var item, label, iconClasses, splitClasses, items = this._container.querySelectorAll(areaClass + \" > \" + COMMAND_BUTTON + \":not(\" + CB_ITEM_OVERFLOW + \")\");\n            // Initiate the overflow command\n            this._commandButtonInstance = new fabric.CommandButton(this._elements.overflowCommand);\n            for (var i = 0; i < items.length; i++) {\n                item = items[i];\n                label = item.querySelector(COMMAND_BUTTON_LABEL).textContent;\n                var icon = item.querySelector(ICON);\n                if (icon) {\n                    iconClasses = icon.className;\n                    splitClasses = iconClasses.split(\" \");\n                    for (var o = 0; o < splitClasses.length; o++) {\n                        if (splitClasses[o].indexOf(ICON.replace(\".\", \"\") + \"--\") > -1) {\n                            icon = splitClasses[o];\n                            break;\n                        }\n                    }\n                }\n                iCollection.push({\n                    item: item,\n                    label: label,\n                    icon: icon,\n                    isCollapsed: (item.classList.contains(CB_NO_LABEL_CLASS)) ? true : false,\n                    commandButtonRef: new fabric.CommandButton(item)\n                });\n            }\n            return;\n        };\n        CommandBar.prototype._createContextualRef = function () {\n            this.contextualItemContainerRef = this._elements.contextMenu.querySelector(CONTEXTUAL_MENU_ITEM).cloneNode(true);\n            this.contextualItemLink = this._elements.contextMenu.querySelector(CONTEXTUAL_MENU_LINK).cloneNode(false);\n            this.contextualItemIcon = this._elements.contextMenu.querySelector(\".ms-Icon\").cloneNode(false);\n            this._elements.contextMenu.innerHTML = \"\";\n        };\n        CommandBar.prototype._getElementWidth = function (element) {\n            var width, styles;\n            if (element.offsetParent === null) {\n                element.setAttribute(\"style\", \"position: absolute; opacity: 0; display: block;\");\n            }\n            width = element.getBoundingClientRect().width;\n            styles = window.getComputedStyle(element);\n            width += parseInt(styles.marginLeft, 10) + parseInt(styles.marginRight, 10);\n            element.setAttribute(\"style\", \"\");\n            return width;\n        };\n        CommandBar.prototype._saveCommandWidths = function () {\n            for (var i = 0; i < this.itemCollection.length; i++) {\n                var item = this.itemCollection[i].item;\n                var width = this._getElementWidth(item);\n                this.commandWidths[i] = width;\n            }\n        };\n        CommandBar.prototype._updateCommands = function () {\n            var searchCommandWidth = 0;\n            var mainAreaWidth = this._elements.mainArea.getBoundingClientRect().width;\n            if (this._elements.searchBox) {\n                searchCommandWidth = this._getElementWidth(this._elements.searchBox);\n            }\n            var offset = searchCommandWidth + OVERFLOW_WIDTH + OVERFLOW_LEFT_RIGHT_PADDING;\n            var totalAreaWidth = mainAreaWidth - offset; // Start with searchbox width\n            // Reset overflow and visible\n            this.visibleCommands = [];\n            this.overflowCommands = [];\n            var totalWidths = 0;\n            for (var i = 0; i < this.itemCollection.length; i++) {\n                totalWidths += this.commandWidths[i];\n                if (totalWidths < totalAreaWidth) {\n                    this.visibleCommands.push(this.itemCollection[i]);\n                }\n                else {\n                    this.overflowCommands.push(this.itemCollection[i]);\n                }\n            }\n        };\n        CommandBar.prototype._drawCommands = function () {\n            // Remove existing commands\n            this._elements.contextMenu.innerHTML = \"\";\n            for (var i = 0; i < this.overflowCommands.length; i++) {\n                this.overflowCommands[i].item.classList.add(\"is-hidden\");\n                // Add all items to contextual menu.\n                var newCItem = this.contextualItemContainerRef.cloneNode(false);\n                var newClink = this.contextualItemLink.cloneNode(false);\n                var iconClass = this.overflowCommands[i].icon;\n                newClink.innerText = this.overflowCommands[i].label;\n                newCItem.appendChild(newClink);\n                if (iconClass) {\n                    var newIcon = this.contextualItemIcon.cloneNode(false);\n                    newIcon.className = ICON.replace(\".\", \"\") + \" \" + iconClass;\n                    newCItem.appendChild(newIcon);\n                }\n                this._elements.contextMenu.appendChild(newCItem);\n            }\n            // Show visible commands\n            for (var x = 0; x < this.visibleCommands.length; x++) {\n                this.visibleCommands[x].item.classList.remove(\"is-hidden\");\n            }\n        };\n        CommandBar.prototype._setWindowEvent = function () {\n            var _this = this;\n            window.addEventListener(\"resize\", function () {\n                _this._doResize();\n            }, false);\n        };\n        CommandBar.prototype._processCollapsedClasses = function (type) {\n            for (var i = 0; i < this.itemCollection.length; i++) {\n                var thisItem = this.itemCollection[i];\n                if (!thisItem.isCollapsed) {\n                    if (type === \"add\") {\n                        thisItem.item.classList.add(CB_NO_LABEL_CLASS);\n                    }\n                    else {\n                        thisItem.item.classList.remove(CB_NO_LABEL_CLASS);\n                    }\n                }\n            }\n            for (var i = 0; i < this._sideAreaCollection.length; i++) {\n                var thisItem = this._sideAreaCollection[i];\n                if (!thisItem.isCollapsed) {\n                    if (type === \"add\") {\n                        thisItem.item.classList.add(CB_NO_LABEL_CLASS);\n                    }\n                    else {\n                        thisItem.item.classList.remove(CB_NO_LABEL_CLASS);\n                    }\n                }\n            }\n        };\n        CommandBar.prototype._setUIState = function () {\n            switch (this.breakpoint) {\n                case \"sm\":\n                    this._runsSearchBox();\n                    this._processCollapsedClasses(\"add\");\n                    this._runOverflow();\n                    break;\n                case \"md\":\n                    this._runsSearchBox();\n                    // Add collapsed classes to commands\n                    this._processCollapsedClasses(\"add\");\n                    this._runOverflow();\n                    break;\n                case \"lg\":\n                    this._runsSearchBox();\n                    this._processCollapsedClasses(\"remove\");\n                    this._runOverflow();\n                    break;\n                case \"xl\":\n                    this._runsSearchBox(\"remove\");\n                    this._processCollapsedClasses(\"remove\");\n                    this._runOverflow();\n                    break;\n                default:\n                    this._runsSearchBox(\"remove\");\n                    this._processCollapsedClasses(\"remove\");\n                    this._runOverflow();\n                    break;\n            }\n        };\n        CommandBar.prototype._checkOverflow = function () {\n            if (this.overflowCommands.length > 0) {\n                this._elements.overflowCommand.classList.remove(\"is-hidden\");\n            }\n            else {\n                this._elements.overflowCommand.classList.add(\"is-hidden\");\n                if (this.activeCommand === this._elements.overflowCommand) {\n                    this._elements.contextMenu.classList.remove(\"is-open\");\n                }\n            }\n        };\n        CommandBar.prototype._redrawMenu = function () {\n            var left;\n            if (this._hasClass(this._elements.contextMenu, \"is-open\")) {\n                left = this.activeCommand.getBoundingClientRect().left;\n                this._drawOverflowMenu(left);\n            }\n        };\n        CommandBar.prototype._drawOverflowMenu = function (left) {\n            this._elements.contextMenu.setAttribute(\"style\", \"left: \" + left + \"px; transform: translateX(-50%)\");\n        };\n        CommandBar.prototype._doResize = function () {\n            this._setBreakpoint();\n            this._setUIState();\n        };\n        return CommandBar;\n    }());\n    fabric.CommandBar = CommandBar;\n})(fabric || (fabric = {}));\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n/// <reference path=\"../ContextualHost/ContextualHost.ts\"/>\n/// <reference path=\"../Button/Button.ts\"/>\nvar fabric;\n(function (fabric) {\n    var MODAL_POSITION = \"bottom\";\n    var SUBMENU_POSITION = \"right\";\n    var ContextualMenu = (function () {\n        function ContextualMenu(container, hostTarget, position) {\n            this._container = container;\n            this._hostTarget = hostTarget;\n            this._position = position ? position : MODAL_POSITION;\n            this._isOpen = false;\n            this._setOpener(hostTarget);\n            this._init();\n        }\n        ContextualMenu.prototype.getHost = function () {\n            return this._host;\n        };\n        ContextualMenu.prototype._init = function () {\n            this._container.addEventListener(\"click\", this._onContextualMenuClick.bind(this), true);\n            document.addEventListener(\"click\", this._onDocumentClick.bind(this), false);\n        };\n        ContextualMenu.prototype._onDocumentClick = function (event) {\n            if (event.target instanceof HTMLElement) {\n                var target = event.target;\n                var classList = target.classList;\n                if (!this._hostTarget.contains(target) && !classList.contains(\"ms-ContextualMenu-link\")) {\n                    this._isOpen = false;\n                }\n            }\n        };\n        ContextualMenu.prototype._onContextualMenuClick = function (event) {\n            var target = event.target;\n            var classList = target.classList;\n            if (classList.contains(\"ms-ContextualMenu-link\") && !classList.contains(\"is-disabled\")) {\n                if (this._container.classList.contains(\"ms-ContextualMenu--multiselect\")) {\n                    this._multiSelect(target);\n                }\n                else {\n                    this._singleSelect(target);\n                    if (!target.parentElement.classList.contains(\"ms-ContextualMenu-item--hasMenu\")) {\n                        this._host.disposeModal();\n                        this._isOpen = false;\n                    }\n                }\n            }\n        };\n        ContextualMenu.prototype._multiSelect = function (target) {\n            if (target.classList.contains(\"is-selected\")) {\n                target.classList.remove(\"is-selected\");\n            }\n            else {\n                target.classList.add(\"is-selected\");\n            }\n        };\n        ContextualMenu.prototype._singleSelect = function (target) {\n            var selecteds = this._container.querySelectorAll(\".is-selected\");\n            var i = selecteds.length;\n            while (i--) {\n                selecteds[i].classList.remove(\"is-selected\");\n            }\n            target.classList.add(\"is-selected\");\n        };\n        ContextualMenu.prototype._toggleMenu = function (event) {\n            (!this._isOpen) ? this._openContextMenu(event) : this._host.disposeModal();\n            this._isOpen = !this._isOpen;\n        };\n        ContextualMenu.prototype._setOpener = function (hostTarget) {\n            var _this = this;\n            hostTarget.addEventListener(\"click\", function (event) {\n                event.preventDefault();\n                _this._toggleMenu(event);\n            });\n        };\n        ContextualMenu.prototype._openContextMenu = function (event) {\n            this._createModalHostView(this._container, this._position, this._hostTarget);\n            this._checkForSubmenus(this._container);\n        };\n        ContextualMenu.prototype._checkForSubmenus = function (container) {\n            var _this = this;\n            var submenus = container.querySelectorAll(\".ms-ContextualMenu-item.ms-ContextualMenu-item--hasMenu\");\n            var i = submenus.length;\n            if (submenus.length) {\n                var _loop_1 = function() {\n                    var button = submenus[i].querySelector(\".ms-ContextualMenu-link\");\n                    var menu = submenus[i].querySelector(\".ms-ContextualMenu\");\n                    if (menu) {\n                        var contextualMenu_1 = new fabric.ContextualMenu(menu, button, SUBMENU_POSITION);\n                        menu.addEventListener(\"hostAdded\", function () {\n                            _this._host.setChildren(contextualMenu_1.getHost());\n                        });\n                    }\n                };\n                while (i--) {\n                    _loop_1();\n                }\n            }\n        };\n        ContextualMenu.prototype._createModalHostView = function (container, position, hostTarget) {\n            container.classList.remove(\"is-hidden\");\n            this._host = new fabric.ContextualHost(container, position, hostTarget, false);\n            var event = document.createEvent(\"Event\");\n            event.initEvent(\"hostAdded\", true, true);\n            container.dispatchEvent(event);\n        };\n        return ContextualMenu;\n    }());\n    fabric.ContextualMenu = ContextualMenu;\n})(fabric || (fabric = {}));\n\n\"use strict\";\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n// @TODO - we can add this once jquery is removed\n// \"use strict\";\n/// <reference path=\"../../../typings/jquery.d.ts\"/>\n/// <reference path=\"../../../typings/pickadate.d.ts\"/>\nvar fabric;\n(function (fabric) {\n    /**\n     * DatePicker Plugin\n     */\n    var DatePicker = (function () {\n        function DatePicker(container, options) {\n            var _this = this;\n            /** Set up letiables and run the Pickadate plugin. */\n            var $datePicker = $(container);\n            var $dateField = $datePicker.find(\".ms-TextField-field\").pickadate($.extend({\n                // Strings and translations.\n                weekdaysShort: [\"S\", \"M\", \"T\", \"W\", \"T\", \"F\", \"S\"],\n                // Don't render the buttons\n                clear: \"\",\n                close: \"\",\n                today: \"\",\n                // Events\n                onStart: function () {\n                    _this.initCustomView($datePicker);\n                },\n                // Classes\n                klass: {\n                    // The element states\n                    input: \"ms-DatePicker-input\",\n                    active: \"ms-DatePicker-input--active\",\n                    // The root picker and states\n                    picker: \"ms-DatePicker-picker\",\n                    opened: \"ms-DatePicker-picker--opened\",\n                    focused: \"ms-DatePicker-picker--focused\",\n                    // The picker holder\n                    holder: \"ms-DatePicker-holder\",\n                    // The picker frame, wrapper, and box\n                    frame: \"ms-DatePicker-frame\",\n                    wrap: \"ms-DatePicker-wrap\",\n                    box: \"ms-DatePicker-dayPicker\",\n                    // The picker header\n                    header: \"ms-DatePicker-header\",\n                    // Month & year labels\n                    month: \"ms-DatePicker-month\",\n                    year: \"ms-DatePicker-year\",\n                    // Table of dates\n                    table: \"ms-DatePicker-table\",\n                    // Weekday labels\n                    weekdays: \"ms-DatePicker-weekday\",\n                    // Day states\n                    day: \"ms-DatePicker-day\",\n                    disabled: \"ms-DatePicker-day--disabled\",\n                    selected: \"ms-DatePicker-day--selected\",\n                    highlighted: \"ms-DatePicker-day--highlighted\",\n                    now: \"ms-DatePicker-day--today\",\n                    infocus: \"ms-DatePicker-day--infocus\",\n                    outfocus: \"ms-DatePicker-day--outfocus\"\n                }\n            }, options || {}));\n            var $picker = $dateField.pickadate(\"picker\");\n            this.picker = $picker;\n            /** Respond to built-in picker events. */\n            $picker.on({\n                render: function () {\n                    _this.updateCustomView($datePicker);\n                }\n            });\n        }\n        /**\n         * After the Pickadate plugin starts, this function\n         * adds additional controls to the picker view.\n         */\n        DatePicker.prototype.initCustomView = function ($datePicker) {\n            var _this = this;\n            /** Get some letiables ready. */\n            var $monthControls = $datePicker.find(\".ms-DatePicker-monthComponents\");\n            var $goToday = $datePicker.find(\".ms-DatePicker-goToday\");\n            var $monthPicker = $datePicker.find(\".ms-DatePicker-monthPicker\");\n            var $yearPicker = $datePicker.find(\".ms-DatePicker-yearPicker\");\n            var $pickerWrapper = $datePicker.find(\".ms-DatePicker-wrap\");\n            var $picker = $datePicker.find(\".ms-TextField-field\").pickadate(\"picker\");\n            /** Move the month picker into position. */\n            $monthControls.appendTo($pickerWrapper);\n            $goToday.appendTo($pickerWrapper);\n            $monthPicker.appendTo($pickerWrapper);\n            $yearPicker.appendTo($pickerWrapper);\n            /** Update the custom view. */\n            this.updateCustomView($datePicker);\n            /** dispatch click on document so anything listening can be notified */\n            $picker.on(\"open\", function (e) {\n                var evt = document.createEvent(\"MouseEvents\");\n                evt.initEvent(\"click\", true, true);\n                document.dispatchEvent(evt);\n            });\n            /** Move back one month. */\n            $monthControls.on(\"click\", \".js-prevMonth\", function (event) {\n                event.preventDefault();\n                var newMonth = $picker.get(\"highlight\").month - 1;\n                _this.changeHighlightedDate([null, newMonth, null]);\n            });\n            /** Move ahead one month. */\n            $monthControls.on(\"click\", \".js-nextMonth\", function (event) {\n                event.preventDefault();\n                var newMonth = $picker.get(\"highlight\").month + 1;\n                _this.changeHighlightedDate([null, newMonth, null]);\n            });\n            /** Move back one year. */\n            $monthPicker.on(\"click\", \".js-prevYear\", function (event) {\n                event.preventDefault();\n                var newYear = $picker.get(\"highlight\").year - 1;\n                _this.changeHighlightedDate([newYear, null, null]);\n            });\n            /** Move ahead one year. */\n            $monthPicker.on(\"click\", \".js-nextYear\", function (event) {\n                event.preventDefault();\n                var newYear = $picker.get(\"highlight\").year + 1;\n                _this.changeHighlightedDate([newYear, null, null]);\n            });\n            /** Move back one decade. */\n            $yearPicker.on(\"click\", \".js-prevDecade\", function (event) {\n                event.preventDefault();\n                var newYear = $picker.get(\"highlight\").year - 10;\n                _this.changeHighlightedDate([newYear, null, null]);\n            });\n            /** Move ahead one decade. */\n            $yearPicker.on(\"click\", \".js-nextDecade\", function (event) {\n                event.preventDefault();\n                var newYear = $picker.get(\"highlight\").year + 10;\n                _this.changeHighlightedDate([newYear, null, null]);\n            });\n            /** Go to the current date, shown in the day picking view. */\n            $goToday.click(function (event) {\n                event.preventDefault();\n                /** Select the current date, while keeping the picker open. */\n                var now = new Date();\n                $picker.set(\"select\", [now.getFullYear(), now.getMonth(), now.getDate()]);\n                /** Switch to the default (calendar) view. */\n                $datePicker.removeClass(\"is-pickingMonths\").removeClass(\"is-pickingYears\");\n            });\n            /** Change the highlighted month. */\n            $monthPicker.on(\"click\", \".js-changeDate\", function (event) {\n                event.preventDefault();\n                var $changeDate = $(event.target);\n                /** Get the requested date from the data attributes. */\n                var newYear = $changeDate.attr(\"data-year\");\n                var newMonth = $changeDate.attr(\"data-month\");\n                var newDay = $changeDate.attr(\"data-day\");\n                /** Update the date. */\n                _this.changeHighlightedDate([newYear, newMonth, newDay]);\n                /** If we\"ve been in the \"picking months\" state on mobile, remove that state so we show the calendar again. */\n                if ($datePicker.hasClass(\"is-pickingMonths\")) {\n                    $datePicker.removeClass(\"is-pickingMonths\");\n                }\n            });\n            /** Change the highlighted year. */\n            $yearPicker.on(\"click\", \".js-changeDate\", function (event) {\n                event.preventDefault();\n                var $changeDate = $(event.target);\n                /** Get the requested date from the data attributes. */\n                var newYear = $changeDate.attr(\"data-year\");\n                var newMonth = $changeDate.attr(\"data-month\");\n                var newDay = $changeDate.attr(\"data-day\");\n                /** Update the date. */\n                _this.changeHighlightedDate([newYear, newMonth, newDay]);\n                /** If we\"ve been in the \"picking years\" state on mobile, remove that state so we show the calendar again. */\n                if ($datePicker.hasClass(\"is-pickingYears\")) {\n                    $datePicker.removeClass(\"is-pickingYears\");\n                }\n            });\n            /** Switch to the default state. */\n            $monthPicker.on(\"click\", \".js-showDayPicker\", function () {\n                $datePicker.removeClass(\"is-pickingMonths\");\n                $datePicker.removeClass(\"is-pickingYears\");\n            });\n            /** Switch to the is-pickingMonths state. */\n            $monthControls.on(\"click\", \".js-showMonthPicker\", function () {\n                $datePicker.toggleClass(\"is-pickingMonths\");\n            });\n            /** Switch to the is-pickingYears state. */\n            $monthPicker.on(\"click\", \".js-showYearPicker\", function () {\n                $datePicker.toggleClass(\"is-pickingYears\");\n            });\n        };\n        /** Change the highlighted date. */\n        DatePicker.prototype.changeHighlightedDate = function (dateArr) {\n            var newDateArr = this.setDateAttributes(dateArr);\n            /** Update it. */\n            this.picker.set(\"highlight\", newDateArr);\n        };\n        /** Whenever the picker renders, do our own rendering on the custom controls. */\n        DatePicker.prototype.updateCustomView = function ($datePicker) {\n            /** Get some letiables ready. */\n            var $monthPicker = $datePicker.find(\".ms-DatePicker-monthPicker\");\n            var $yearPicker = $datePicker.find(\".ms-DatePicker-yearPicker\");\n            var $picker = $datePicker.find(\".ms-TextField-field\").pickadate(\"picker\");\n            /** Set the correct year. */\n            $monthPicker.find(\".ms-DatePicker-currentYear\").text($picker.get(\"view\").year);\n            /** Highlight the current month. */\n            $monthPicker.find(\".ms-DatePicker-monthOption\").removeClass(\"is-highlighted\");\n            $monthPicker.find(\".ms-DatePicker-monthOption[data-month='\" + $picker.get(\"highlight\").month + \"']\").addClass(\"is-highlighted\");\n            /** Generate the grid of years for the year picker view. */\n            // Start by removing any existing generated output. */\n            $yearPicker.find(\".ms-DatePicker-currentDecade\").remove();\n            $yearPicker.find(\".ms-DatePicker-optionGrid\").remove();\n            // Generate the output by going through the years.\n            var startingYear = $picker.get(\"highlight\").year - 11;\n            var decadeText = startingYear + \" - \" + (startingYear + 11);\n            var output = \"<div class='ms-DatePicker-currentDecade'>\" + decadeText + \"</div>\";\n            output += \"<div class='ms-DatePicker-optionGrid'>\";\n            for (var year = startingYear; year < (startingYear + 12); year++) {\n                output += \"<span class='ms-DatePicker-yearOption js-changeDate' data-year='\" + year + \"'>\" + year + \"</span>\";\n            }\n            output += \"</div>\";\n            // Output the title and grid of years generated above.\n            $yearPicker.append(output);\n            /** Highlight the current year. */\n            $yearPicker.find(\".ms-DatePicker-yearOption\").removeClass(\"is-highlighted\");\n            $yearPicker.find(\".ms-DatePicker-yearOption[data-year='\" + $picker.get(\"highlight\").year + \"']\").addClass(\"is-highlighted\");\n        };\n        DatePicker.prototype.setDateAttributes = function (dateArr) {\n            var newYear = dateArr[0], newMonth = dateArr[1], newDay = dateArr[2];\n            /** All letiables are optional. If not provided, default to the current value. */\n            if (typeof newYear === \"undefined\" || newYear === null) {\n                newYear = this.picker.get(\"highlight\").year;\n            }\n            if (typeof newMonth === \"undefined\" || newMonth === null) {\n                newMonth = this.picker.get(\"highlight\").month;\n            }\n            if (typeof newDay === \"undefined\" || newDay === null) {\n                newDay = this.picker.get(\"highlight\").date;\n            }\n            return [newYear, newMonth, newDay];\n        };\n        return DatePicker;\n    }());\n    fabric.DatePicker = DatePicker;\n})(fabric || (fabric = {}));\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\nvar fabric;\n(function (fabric) {\n    var Overlay = (function () {\n        function Overlay(overlayElement) {\n            if (overlayElement) {\n                this.overlayElement = overlayElement;\n            }\n            else {\n                var overlayContainer = document.createElement(\"div\");\n                overlayContainer.setAttribute(\"class\", \"ms-Overlay\");\n                this.overlayElement = overlayContainer;\n            }\n            this.overlayElement.addEventListener(\"click\", this.hide.bind(this), false);\n        }\n        Overlay.prototype.remove = function () {\n            this.overlayElement.parentElement.removeChild(this.overlayElement);\n        };\n        Overlay.prototype.show = function () {\n            this.overlayElement.classList.add(\"is-visible\");\n            document.body.classList.add(\"ms-u-overflowHidden\");\n        };\n        Overlay.prototype.hide = function () {\n            this.overlayElement.classList.remove(\"is-visible\");\n            document.body.classList.remove(\"ms-u-overflowHidden\");\n        };\n        return Overlay;\n    }());\n    fabric.Overlay = Overlay;\n})(fabric || (fabric = {}));\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n// @TODO - we can add this once jquery is removed\n/// <reference path=\"../Overlay/Overlay.ts\"/>\nvar fabric;\n(function (fabric) {\n    var Dialog = (function () {\n        function Dialog(dialog) {\n            this._dialog = dialog;\n            this._closeButtonElement = this._dialog.querySelector(\".ms-Dialog-buttonClose\");\n            this._actionButtonElements = this._dialog.querySelectorAll(\".ms-Dialog-action\");\n            if (this._closeButtonElement) {\n                this._closeButtonElement.addEventListener(\"click\", this.close.bind(this), false);\n            }\n            for (var i = 0; i < this._actionButtonElements.length; i++) {\n                this._actionButtonElements[i].addEventListener(\"click\", this.close.bind(this), false);\n            }\n        }\n        Dialog.prototype.close = function () {\n            this._overlay.remove();\n            this._dialog.classList.remove(\"is-open\");\n            document.body.classList.remove(\"ms-u-overflowHidden\");\n            this._overlay.overlayElement.removeEventListener(\"click\", this.close.bind(this));\n        };\n        Dialog.prototype.open = function () {\n            this._dialog.classList.add(\"is-open\");\n            this._overlay = new fabric.Overlay();\n            if (!this._dialog.classList.contains(\"ms-Dialog--blocking\")) {\n                this._overlay.overlayElement.addEventListener(\"click\", this.close.bind(this), false);\n                this._overlay.show();\n                document.body.classList.add(\"ms-u-overflowHidden\");\n            }\n            this._dialog.parentElement.appendChild(this._overlay.overlayElement);\n        };\n        return Dialog;\n    }());\n    fabric.Dialog = Dialog;\n})(fabric || (fabric = {}));\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n// \"use strict\";\nvar fabric;\n(function (fabric) {\n    /**\n     * DialogHost class\n     */\n    var DialogHost = (function () {\n        function DialogHost() {\n        }\n        return DialogHost;\n    }());\n    fabric.DialogHost = DialogHost;\n})(fabric || (fabric = {}));\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n/// <reference path=\"../Overlay/Overlay.ts\"/>\nvar fabric;\n(function (fabric) {\n    /**\n     * Panel Host\n     *\n     * A host for the panel control\n     *\n     */\n    var PANEL_HOST_CLASS = \"ms-PanelHost\";\n    var PanelHost = (function () {\n        /**\n         *\n         * @param {HTMLElement} container - the target container for an instance of Panel\n         * @constructor\n         */\n        function PanelHost(layer, callBack) {\n            this._layer = layer;\n            this._callBack = callBack;\n            this._createElements();\n            this._renderElements();\n        }\n        PanelHost.prototype.dismiss = function () {\n            this.overlay.hide();\n            document.body.removeChild(this.panelHost);\n        };\n        PanelHost.prototype.update = function (layer, callBack) {\n            this.panelHost.replaceChild(layer, this._layer);\n            if (callBack) {\n                callBack();\n            }\n        };\n        PanelHost.prototype._renderElements = function () {\n            document.body.appendChild(this.panelHost);\n            if (this._callBack) {\n                this._callBack(this._layer);\n            }\n        };\n        PanelHost.prototype._createElements = function () {\n            this.panelHost = document.createElement(\"div\");\n            this.panelHost.classList.add(PANEL_HOST_CLASS);\n            this.panelHost.appendChild(this._layer);\n            this.overlay = new fabric.Overlay(this._overlayContainer);\n            this.overlay.show();\n            // Append Elements\n            this.panelHost.appendChild(this.overlay.overlayElement);\n        };\n        return PanelHost;\n    }());\n    fabric.PanelHost = PanelHost;\n})(fabric || (fabric = {}));\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n/// <reference path=\"../PanelHost/PanelHost.ts\"/>\nvar fabric;\n(function (fabric) {\n    /**\n     * Panel Host\n     *\n     * A host for the panel control\n     *\n     */\n    var ANIMATE_IN_STATE = \"animate-in\";\n    var ANIMATE_OUT_STATE = \"animate-out\";\n    var ANIMATION_END = 400;\n    var Panel = (function () {\n        /**\n         *\n         * @param {HTMLElement} container - the target container for an instance of Panel\n         * @constructor\n         */\n        function Panel(panel, direction, animateOverlay) {\n            this._panel = panel;\n            this._direction = direction || \"right\";\n            this._animateOverlay = animateOverlay || true;\n            this.panelHost = new fabric.PanelHost(this._panel, this._animateInPanel);\n            this._closeButton = this._panel.querySelector(\".ms-PanelAction-close\");\n            this._clickHandler = this.dismiss.bind(this, null);\n            this._setEvents();\n            // Set body height to 100% and overflow hidden while panel is open\n            document.body.setAttribute(\"style\", \"height: 100%; overflow: hidden;\");\n        }\n        Panel.prototype.dismiss = function (callBack) {\n            var _this = this;\n            this._panel.classList.add(ANIMATE_OUT_STATE);\n            setTimeout(function () {\n                _this._panel.classList.remove(ANIMATE_OUT_STATE);\n                _this._panel.classList.remove(\"is-open\");\n                _this.panelHost.dismiss();\n                if (callBack) {\n                    callBack();\n                }\n                // Remove temporary body styles\n                document.body.setAttribute(\"style\", \"\");\n            }, ANIMATION_END);\n            if (this._closeButton !== null) {\n                this._closeButton.removeEventListener(\"click\", this._clickHandler);\n            }\n        };\n        Panel.prototype._setEvents = function () {\n            this.panelHost.overlay.overlayElement.addEventListener(\"click\", this._clickHandler);\n            if (this._closeButton !== null) {\n                this._closeButton.addEventListener(\"click\", this._clickHandler);\n            }\n        };\n        Panel.prototype._animateInPanel = function (layer) {\n            layer.classList.add(ANIMATE_IN_STATE);\n            layer.classList.add(\"is-open\");\n            setTimeout(function () {\n                layer.classList.remove(ANIMATE_IN_STATE);\n            }, ANIMATION_END);\n        };\n        return Panel;\n    }());\n    fabric.Panel = Panel;\n})(fabric || (fabric = {}));\n\n/// <reference path=\"../Panel/Panel.ts\"/>\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n\"use strict\";\nvar fabric;\n(function (fabric) {\n    var DROPDOWN_CLASS = \"ms-Dropdown\";\n    var DROPDOWN_TITLE_CLASS = \"ms-Dropdown-title\";\n    var DROPDOWN_LABEL_HELPER = \"ms-Dropdown-truncator\";\n    var DROPDOWN_ITEMS_CLASS = \"ms-Dropdown-items\";\n    var DROPDOWN_ITEM_CLASS = \"ms-Dropdown-item\";\n    var DROPDOWN_SELECT_CLASS_SELECTOR = \".ms-Dropdown-select\";\n    var PANEL_CLASS = \"ms-Panel\";\n    var IS_OPEN_CLASS = \"is-open\";\n    var IS_DISABLED_CLASS = \"is-disabled\";\n    var IS_SELECTED_CLASS = \"is-selected\";\n    var ANIMATE_IN_CLASS = \"animate-in\";\n    var SMALL_MAX_WIDTH = 479;\n    /**\n     * Dropdown Plugin\n     *\n     * Given .ms-Dropdown containers with generic <select> elements inside, this plugin hides the original\n     * dropdown and creates a new \"fake\" dropdown that can more easily be styled across browsers.\n     *\n     */\n    var Dropdown = (function () {\n        /**\n         *\n         * @param {HTMLElement} container - the target container for an instance of Dropdown\n         * @constructor\n         */\n        function Dropdown(container) {\n            this._container = container;\n            this._dropdownLabelHelper = document.createElement(\"span\");\n            this._dropdownLabelHelper.classList.add(DROPDOWN_LABEL_HELPER);\n            this._dropdownLabelHelper.classList.add(DROPDOWN_TITLE_CLASS);\n            this._newDropdownLabel = document.createElement(\"span\");\n            this._newDropdownLabel.classList.add(DROPDOWN_TITLE_CLASS);\n            this._newDropdown = document.createElement(\"ul\");\n            this._newDropdown.classList.add(DROPDOWN_ITEMS_CLASS);\n            this._dropdownItems = [];\n            this._originalDropdown = container.querySelector(DROPDOWN_SELECT_CLASS_SELECTOR);\n            var _originalOptions = this._originalDropdown.querySelectorAll(\"option\");\n            /** Bind the callbacks to retain their context */\n            this._onCloseDropdown = this._onCloseDropdown.bind(this);\n            this._onItemSelection = this._onItemSelection.bind(this);\n            this._onOpenDropdown = this._onOpenDropdown.bind(this);\n            /** Create a new option as a list item, and add it to the replacement dropdown */\n            for (var i = 0; i < _originalOptions.length; ++i) {\n                var option = _originalOptions[i];\n                if (option.selected) {\n                    this._newDropdownLabel.innerHTML = option.text;\n                }\n                var newItem = document.createElement(\"li\");\n                newItem.classList.add(DROPDOWN_ITEM_CLASS);\n                if (option.disabled) {\n                    newItem.classList.add(IS_DISABLED_CLASS);\n                }\n                if (option.selected) {\n                    newItem.classList.add(IS_SELECTED_CLASS);\n                }\n                newItem.innerHTML = option.text;\n                newItem.addEventListener(\"click\", this._onItemSelection);\n                this._newDropdown.appendChild(newItem);\n                this._dropdownItems.push({\n                    oldOption: option,\n                    newItem: newItem\n                });\n            }\n            /** Add the new replacement dropdown */\n            container.appendChild(this._newDropdownLabel);\n            container.appendChild(this._newDropdown);\n            /** Add dropdown label helper for truncation */\n            container.appendChild(this._dropdownLabelHelper);\n            /** Toggle open/closed state of the dropdown when clicking its title. */\n            this._newDropdownLabel.addEventListener(\"click\", this._onOpenDropdown);\n            this._checkTruncation();\n            this._setWindowEvent();\n        }\n        Dropdown.prototype._setWindowEvent = function () {\n            var _this = this;\n            window.addEventListener(\"resize\", function () {\n                _this._doResize();\n                _this._checkTruncation();\n            }, false);\n        };\n        Dropdown.prototype._checkTruncation = function () {\n            var selected = this._newDropdown.querySelector(\".\" + IS_SELECTED_CLASS);\n            var origText = (selected ?\n                selected.textContent :\n                this._newDropdown.querySelectorAll(\".\" + DROPDOWN_ITEM_CLASS)[0].textContent);\n            this._dropdownLabelHelper.textContent = origText;\n            if (this._dropdownLabelHelper.offsetHeight > this._newDropdownLabel.offsetHeight) {\n                var i = 0;\n                var ellipsis = \"...\";\n                var newText = void 0;\n                do {\n                    i--;\n                    newText = origText.slice(0, i);\n                    this._dropdownLabelHelper.textContent = newText + ellipsis;\n                } while (this._dropdownLabelHelper.offsetHeight > this._newDropdownLabel.offsetHeight);\n            }\n            this._newDropdownLabel.textContent = this._dropdownLabelHelper.textContent;\n        };\n        Dropdown.prototype._getScreenSize = function () {\n            var w = window;\n            var wSize = {\n                x: 0,\n                y: 0\n            };\n            var d = document, e = d.documentElement, g = d.getElementsByTagName(\"body\")[0];\n            wSize.x = w.innerWidth || e.clientWidth || g.clientWidth;\n            wSize.y = w.innerHeight || e.clientHeight || g.clientHeight;\n            return wSize;\n        };\n        Dropdown.prototype._doResize = function () {\n            var isOpen = this._container.classList.contains(IS_OPEN_CLASS);\n            if (!isOpen) {\n                return;\n            }\n            var screenSize = this._getScreenSize().x;\n            if (screenSize <= SMALL_MAX_WIDTH) {\n                this._openDropdownAsPanel();\n            }\n            else {\n                this._removeDropdownAsPanel();\n            }\n        };\n        Dropdown.prototype._openDropdownAsPanel = function () {\n            if (this._panel === undefined) {\n                this._panelContainer = document.createElement(\"div\");\n                this._panelContainer.classList.add(PANEL_CLASS);\n                this._panelContainer.classList.add(DROPDOWN_CLASS);\n                this._panelContainer.classList.add(IS_OPEN_CLASS);\n                this._panelContainer.classList.add(ANIMATE_IN_CLASS);\n                this._panelContainer.appendChild(this._newDropdown);\n                /** Assign the script to the new panel, which creates a panel host, overlay, and attaches it to the DOM */\n                this._panel = new fabric.Panel(this._panelContainer);\n            }\n        };\n        Dropdown.prototype._removeDropdownAsPanel = function (evt) {\n            var _this = this;\n            if (this._panel !== undefined) {\n                /** destroy panel and move dropdown back to outside the panel */\n                /* if event target is overlay element, only append dropdown to prevent */\n                /* double dismiss bug, otherwise, dismiss and append */\n                if (evt && evt.target === this._panel.panelHost.overlay.overlayElement) {\n                    this._container.appendChild(this._newDropdown);\n                }\n                else {\n                    this._panel.dismiss(function () {\n                        _this._container.appendChild(_this._newDropdown);\n                    });\n                }\n                this._panel = undefined;\n            }\n        };\n        Dropdown.prototype._onOpenDropdown = function (evt) {\n            var isDisabled = this._container.classList.contains(IS_DISABLED_CLASS);\n            var isOpen = this._container.classList.contains(IS_OPEN_CLASS);\n            if (!isDisabled && !isOpen) {\n                /** Stop the click event from propagating, which would just close the dropdown immediately. */\n                evt.stopPropagation();\n                this._closeOtherDropdowns();\n                /** Go ahead and open that dropdown. */\n                this._container.classList.add(IS_OPEN_CLASS);\n                /** Temporarily bind an event to the document that will close this dropdown when clicking anywhere. */\n                document.addEventListener(\"click\", this._onCloseDropdown);\n                var screenSize = this._getScreenSize().x;\n                if (screenSize <= SMALL_MAX_WIDTH) {\n                    this._openDropdownAsPanel();\n                }\n            }\n        };\n        Dropdown.prototype._closeOtherDropdowns = function () {\n            var dropdowns = document.querySelectorAll(\".\" + DROPDOWN_CLASS + \".\" + IS_OPEN_CLASS);\n            for (var i = 0; i < dropdowns.length; i++) {\n                dropdowns[i].classList.remove(IS_OPEN_CLASS);\n            }\n        };\n        Dropdown.prototype._onCloseDropdown = function (evt) {\n            this._removeDropdownAsPanel(evt);\n            this._container.classList.remove(IS_OPEN_CLASS);\n            document.removeEventListener(\"click\", this._onCloseDropdown);\n        };\n        Dropdown.prototype._onItemSelection = function (evt) {\n            var item = evt.target;\n            var isDropdownDisabled = this._container.classList.contains(IS_DISABLED_CLASS);\n            var isOptionDisabled = item.classList.contains(IS_DISABLED_CLASS);\n            if (!isDropdownDisabled && !isOptionDisabled) {\n                /** Deselect all items and select this one. */\n                /** Update the original dropdown. */\n                for (var i = 0; i < this._dropdownItems.length; ++i) {\n                    if (this._dropdownItems[i].newItem === item) {\n                        this._dropdownItems[i].newItem.classList.add(IS_SELECTED_CLASS);\n                        this._dropdownItems[i].oldOption.selected = true;\n                    }\n                    else {\n                        this._dropdownItems[i].newItem.classList.remove(IS_SELECTED_CLASS);\n                        this._dropdownItems[i].oldOption.selected = false;\n                    }\n                }\n                /** Update the replacement dropdown's title. */\n                this._newDropdownLabel.innerHTML = item.textContent;\n                this._checkTruncation();\n                /** Trigger any change event tied to the original dropdown. */\n                var changeEvent = document.createEvent(\"HTMLEvents\");\n                changeEvent.initEvent(\"change\", false, true);\n                this._originalDropdown.dispatchEvent(changeEvent);\n            }\n        };\n        return Dropdown;\n    }());\n    fabric.Dropdown = Dropdown;\n})(fabric || (fabric = {}));\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n// \"use strict\";\n/// <reference path=\"../../utilities/Animate.ts\"/>\n/// <reference path=\"../../utilities/Ease.ts\"/>\nvar fabric;\n(function (fabric) {\n    /**\n     *\n     * Adds basic demonstration functionality to .ms-PersonaCard components.\n     *\n     */\n    var PersonaCard = (function () {\n        /**\n         *\n         * @param {Element} container - the target container for an instance of PersonaCard\n         * @constructor\n         */\n        function PersonaCard(container) {\n            this._container = container;\n            var activeElement = this._container.querySelector(\".ms-PersonaCard-action.is-active\");\n            var activeId = activeElement.getAttribute(\"data-action-id\");\n            this._actions = this._container.querySelector(\".ms-PersonaCard-actions\");\n            this._expander = this._container.querySelector(\".ms-PersonaCard-detailExpander\");\n            this._actionDetailBox = this._container.querySelector(\".ms-PersonaCard-actionDetailBox\");\n            this._setDetail(activeId);\n            this._boundOnActionClick = this._onActionClick.bind(this);\n            this._boundOnExpanderClick = this._onExpanderClick.bind(this);\n            this._boundOnTab = this._onTab.bind(this);\n            this._addListeners();\n        }\n        PersonaCard.prototype.removeListeners = function () {\n            this._actions.removeEventListener(\"click\", this._boundOnActionClick);\n            this._expander.removeEventListener(\"click\", this._boundOnExpanderClick);\n            this._container.removeEventListener(\"keydown\", this._boundOnTab);\n        };\n        PersonaCard.prototype._addListeners = function () {\n            this._actions.addEventListener(\"click\", this._boundOnActionClick, false);\n            this._expander.addEventListener(\"click\", this._boundOnExpanderClick, false);\n            this._container.addEventListener(\"keydown\", this._boundOnTab, false);\n        };\n        PersonaCard.prototype._onTab = function (event) {\n            var target = event.target;\n            if (event.keyCode === 9 && target.classList.contains(\"ms-PersonaCard-action\")) {\n                this._onActionClick(event);\n            }\n        };\n        PersonaCard.prototype._onExpanderClick = function (event) {\n            var parent = event.target.parentElement;\n            if (parent.classList.contains(\"is-collapsed\")) {\n                parent.classList.remove(\"is-collapsed\");\n            }\n            else {\n                parent.classList.add(\"is-collapsed\");\n            }\n            var parentHeight = parent.clientHeight;\n            this._animateDetail(parentHeight);\n        };\n        PersonaCard.prototype._onActionClick = function (event) {\n            var target = event.target;\n            var actionId = target.getAttribute(\"data-action-id\");\n            if (actionId && target.className.indexOf(\"is-active\") === -1) {\n                this._setAction(target);\n                this._setDetail(actionId);\n            }\n        };\n        PersonaCard.prototype._setAction = function (target) {\n            var activeElement = this._container.querySelector(\".ms-PersonaCard-action.is-active\");\n            activeElement.classList.remove(\"is-active\");\n            target.classList.add(\"is-active\");\n        };\n        PersonaCard.prototype._setDetail = function (activeId) {\n            var selector = \".ms-PersonaCard-details[data-detail-id='\" + activeId + \"']\";\n            var lastDetail = this._container.querySelector(\".ms-PersonaCard-details.is-active\");\n            var activeDetail = this._container.querySelector(selector);\n            if (lastDetail) {\n                lastDetail.classList.remove(\"is-active\");\n            }\n            activeDetail.classList.add(\"is-active\");\n            var detailHeight = activeDetail.clientHeight;\n            this._animateDetail(detailHeight);\n        };\n        PersonaCard.prototype._animateDetail = function (height) {\n            var _this = this;\n            this._actionDetailBox.style.overflowY = \"hidden\";\n            fabric.Animate.transition(this._actionDetailBox, {\n                height: height,\n                duration: 0.25,\n                ease: fabric.Ease.SINE_EASE_OUT,\n                onEnd: function () {\n                    _this._actionDetailBox.style.overflowY = \"auto\";\n                }\n            });\n        };\n        return PersonaCard;\n    }());\n    fabric.PersonaCard = PersonaCard;\n})(fabric || (fabric = {}));\n\n/// <reference path=\"../ContextualHost/ContextualHost.ts\"/>\n/// <reference path=\"../PersonaCard/PersonaCard.ts\"/>\n/**\n * FacePile\n *\n * A host for FacePile\n *\n */\nvar fabric;\n(function (fabric) {\n    // const CONTEXTUAL_HOST_CLASS = \".ms-ContextualHost\";\n    var MODAL_POSITION = \"top\";\n    var Persona = (function () {\n        /**\n         *\n         * @param {HTMLElement} container - the target container for an instance of FacePile\n         * @constructor\n         */\n        function Persona(container) {\n            this._persona = container;\n            // If Persona Card and Contextual host exist continue\n            // this._contextualHost = this._persona.querySelector(CONTEXTUAL_HOST_CLASS);\n            this._personaCard = this._persona.querySelector(\".ms-PersonaCard\");\n            if (this._personaCard) {\n                this._assignEvents();\n                this._personaCard.setAttribute(\"style\", \"display: none;\");\n                this._createPersonaCard();\n            }\n        }\n        Persona.prototype._createPersonaCard = function () {\n            this._personaCardInstance = new fabric.PersonaCard(this._personaCard);\n        };\n        Persona.prototype._createContextualHostInstance = function () {\n            this._personaCard.setAttribute(\"style\", \"display: block;\");\n            this._contextualHostInstance = new fabric.ContextualHost(this._personaCard, MODAL_POSITION, this._persona);\n        };\n        Persona.prototype._personaEventHandler = function () {\n            this._createContextualHostInstance();\n        };\n        Persona.prototype._assignEvents = function () {\n            var _this = this;\n            this._persona.addEventListener(\"click\", this._personaEventHandler.bind(this), false);\n            this._persona.addEventListener(\"keyup\", function (e) { return (e.keyCode === 32) ? _this._personaEventHandler() : null; }, false);\n        };\n        return Persona;\n    }());\n    fabric.Persona = Persona;\n})(fabric || (fabric = {}));\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n/// <reference path=\"../Persona/Persona.ts\"/>\nvar fabric;\n(function (fabric) {\n    /**\n     * FacePile\n     *\n     * A host for FacePile\n     *\n     */\n    var PERSONA_CLASS = \".ms-Persona--facePile\";\n    var PERSONA_INITIALS = \".ms-Persona-initials\";\n    var PERSONA_IMAGE = \".ms-Persona-image\";\n    var PERSONA_PRIMARY_CLASS = \".ms-Persona-primaryText\";\n    var PERSONA_SECONDARY_CLASS = \".ms-Persona-secondaryText\";\n    var FacePile = (function () {\n        /**\n         *\n         * @param {HTMLElement} container - the target container for an instance of FacePile\n         * @constructor\n         */\n        function FacePile(container) {\n            this._personaCollection = [];\n            this._facePile = container;\n            this._createPersonaCollection();\n        }\n        FacePile.prototype._createPersonaCollection = function () {\n            var _personas = document.querySelectorAll(PERSONA_CLASS);\n            for (var i = 0; i < _personas.length; i++) {\n                var _thisPersona = _personas[i];\n                this._personaCollection.push({\n                    item: _thisPersona,\n                    initials: _thisPersona.querySelector(PERSONA_INITIALS).textContent,\n                    image: _thisPersona.querySelector(PERSONA_IMAGE) ?\n                        _thisPersona.querySelector(PERSONA_IMAGE).getAttribute(\"src\") : null,\n                    primaryText: _thisPersona.querySelector(PERSONA_PRIMARY_CLASS) ?\n                        _thisPersona.querySelector(PERSONA_PRIMARY_CLASS).textContent : \"\",\n                    secondaryText: _thisPersona.querySelector(PERSONA_SECONDARY_CLASS) ?\n                        _thisPersona.querySelector(PERSONA_SECONDARY_CLASS).textContent : \"\",\n                    personaInstance: new fabric.Persona(_thisPersona)\n                });\n            }\n        };\n        return FacePile;\n    }());\n    fabric.FacePile = FacePile;\n})(fabric || (fabric = {}));\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n\"use strict\";\nvar fabric;\n(function (fabric) {\n    /**\n     * List Item Plugin\n     *\n     * Adds basic demonstration functionality to .ms-ListItem components.\n     *\n     */\n    var ListItem = (function () {\n        /**\n         *\n         * @param {HTMLElement} container - the target container for an instance of ListItem\n         * @constructor\n         */\n        function ListItem(container) {\n            this._container = container;\n            this._toggleElement = this._container.querySelector(\".ms-ListItem-selectionTarget\");\n            this._addListeners();\n        }\n        ListItem.prototype.removeListeners = function () {\n            this._toggleElement.removeEventListener(\"click\", this._toggleHandler.bind(this));\n        };\n        ListItem.prototype._addListeners = function () {\n            this._toggleElement.addEventListener(\"click\", this._toggleHandler.bind(this), false);\n        };\n        ListItem.prototype._toggleHandler = function () {\n            this._container.classList.toggle(\"is-selected\");\n        };\n        return ListItem;\n    }());\n    fabric.ListItem = ListItem;\n})(fabric || (fabric = {}));\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n/// <reference path=\"../ListItem/ListItem.ts\"/>\n\"use strict\";\nvar fabric;\n(function (fabric) {\n    /**\n     * List Item Plugin\n     *\n     * Adds basic demonstration functionality to .ms-List components.\n     *\n     */\n    var List = (function () {\n        /**\n         *\n         * @param {HTMLElement} container - the target container for an instance of List\n         * @constructor\n         */\n        function List(container) {\n            this._container = container;\n            this._listItemComponents = [];\n            var choiceFieldElements = this._container.querySelectorAll(\".ms-ListItem\");\n            for (var i = 0; i < choiceFieldElements.length; i++) {\n                this._listItemComponents[i] = new fabric.ListItem(choiceFieldElements[i]);\n            }\n        }\n        return List;\n    }());\n    fabric.List = List;\n})(fabric || (fabric = {}));\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n/**\n * @namespace fabric\n */\nvar fabric;\n(function (fabric) {\n    \"use strict\";\n    /**\n     * MessageBanner component\n     *\n     * A component to display error messages\n     *\n     */\n    var MessageBanner = (function () {\n        /**\n         *\n         * @param {HTMLElement} container - the target container for an instance of MessageBanner\n         * @constructor\n         */\n        function MessageBanner(container) {\n            this._textContainerMaxWidth = 700;\n            this._bufferElementsWidth = 88;\n            this._bufferElementsWidthSmall = 35;\n            this.SMALL_BREAK_POINT = 480;\n            this.container = container;\n            this.init();\n        }\n        /**\n         * initializes component\n         */\n        MessageBanner.prototype.init = function () {\n            this._cacheDOM();\n            this._setListeners();\n            this._clientWidth = this._errorBanner.offsetWidth;\n            this._initTextWidth = this._clipper.offsetWidth;\n            this._onResize();\n        };\n        /**\n         * shows banner if the banner is hidden\n         */\n        MessageBanner.prototype.show = function () {\n            this._errorBanner.className = \"ms-MessageBanner\";\n        };\n        /**\n       * shows banner if the banner is hidden (deprecated)\n       */\n        MessageBanner.prototype.showBanner = function () {\n            this.show();\n        };\n        /**\n         * hides banner when close button is clicked\n         */\n        MessageBanner.prototype.hide = function () {\n            if (this._errorBanner.className.indexOf(\"hide\") === -1) {\n                this._errorBanner.className += \" hide\";\n                setTimeout(this._hideMessageBanner.bind(this), 500);\n            }\n        };\n        MessageBanner.prototype._hideMessageBanner = function () {\n            this._errorBanner.className = \"ms-MessageBanner is-hidden\";\n        };\n        /**\n         * sets styles on resize\n         */\n        MessageBanner.prototype._onResize = function () {\n            this._clientWidth = this._errorBanner.offsetWidth;\n            if (window.innerWidth >= this.SMALL_BREAK_POINT) {\n                this._resizeRegular();\n            }\n            else {\n                this._resizeSmall();\n            }\n        };\n        /**\n         * resize above 480 pixel breakpoint\n         */\n        MessageBanner.prototype._resizeRegular = function () {\n            if ((this._clientWidth - this._bufferSize) > this._initTextWidth && this._initTextWidth < this._textContainerMaxWidth) {\n                this._textWidth = \"auto\";\n                this._chevronButton.className = \"ms-MessageBanner-expand\";\n                this._collapse();\n            }\n            else {\n                this._textWidth = Math.min((this._clientWidth - this._bufferSize), this._textContainerMaxWidth) + \"px\";\n                if (this._chevronButton.className.indexOf(\"is-visible\") === -1) {\n                    this._chevronButton.className += \" is-visible\";\n                }\n            }\n            this._clipper.style.width = this._textWidth;\n        };\n        /**\n         * resize below 480 pixel breakpoint\n         */\n        MessageBanner.prototype._resizeSmall = function () {\n            if (this._clientWidth - (this._bufferElementsWidthSmall + this._closeButton.offsetWidth) > this._initTextWidth) {\n                this._textWidth = \"auto\";\n                this._collapse();\n            }\n            else {\n                this._textWidth = (this._clientWidth - (this._bufferElementsWidthSmall + this._closeButton.offsetWidth)) + \"px\";\n            }\n            this._clipper.style.width = this._textWidth;\n        };\n        /**\n         * caches elements and values of the component\n         */\n        MessageBanner.prototype._cacheDOM = function () {\n            this._errorBanner = this.container;\n            this._clipper = this.container.querySelector(\".ms-MessageBanner-clipper\");\n            this._chevronButton = this.container.querySelector(\".ms-MessageBanner-expand\");\n            this._actionButton = this.container.querySelector(\".ms-MessageBanner-action\");\n            this._bufferSize = this._actionButton.offsetWidth + this._bufferElementsWidth;\n            this._closeButton = this.container.querySelector(\".ms-MessageBanner-close\");\n        };\n        /**\n         * expands component to show full error message\n         */\n        MessageBanner.prototype._expand = function () {\n            var icon = this._chevronButton.querySelector(\".ms-Icon\");\n            this._errorBanner.className += \" is-expanded\";\n            icon.className = \"ms-Icon ms-Icon--DoubleChevronUp\";\n        };\n        /**\n         * collapses component to only show truncated message\n         */\n        MessageBanner.prototype._collapse = function () {\n            var icon = this._chevronButton.querySelector(\".ms-Icon\");\n            this._errorBanner.className = \"ms-MessageBanner\";\n            icon.className = \"ms-Icon ms-Icon--DoubleChevronDown\";\n        };\n        MessageBanner.prototype._toggleExpansion = function () {\n            if (this._errorBanner.className.indexOf(\"is-expanded\") > -1) {\n                this._collapse();\n            }\n            else {\n                this._expand();\n            }\n        };\n        /**\n         * sets handlers for resize and button click events\n         */\n        MessageBanner.prototype._setListeners = function () {\n            window.addEventListener(\"resize\", this._onResize.bind(this), false);\n            this._chevronButton.addEventListener(\"click\", this._toggleExpansion.bind(this), false);\n            this._closeButton.addEventListener(\"click\", this.hide.bind(this), false);\n        };\n        return MessageBanner;\n    }());\n    fabric.MessageBanner = MessageBanner;\n})(fabric || (fabric = {})); // end fabric namespace\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n/// <reference path=\"../Overlay/Overlay.ts\"/>\n/// <reference path=\"../ContextualHost/ContextualHost.ts\"/>\nvar fabric;\n(function (fabric) {\n    /**\n     * People Picker\n     *\n     * People picker control\n     *\n     */\n    var MODAL_POSITION = \"bottom\";\n    var TOKEN_CLASS = \"ms-Persona--token\";\n    var PeoplePicker = (function () {\n        /**\n         *\n         * @param {HTMLElement} container - the target container for an instance of People Picker\n         * @constructor\n         */\n        function PeoplePicker(container) {\n            this._container = container;\n            this._peoplePickerMenu = this._container.querySelector(\".ms-PeoplePicker-results\");\n            this._peoplePickerSearch = this._container.querySelector(\".ms-TextField-field\");\n            this._peoplePickerSearchBox = this._container.querySelector(\".ms-PeoplePicker-searchBox\");\n            this._selectedPeople = this._container.querySelector(\".ms-PeoplePicker-selectedPeople\");\n            this._assignClicks();\n            if (this._selectedPeople) {\n                this._assignRemoveHandler();\n                this._selectedCount = this._container.querySelector(\".ms-PeoplePicker-selectedCount\");\n                this._selectedPlural = this._container.querySelector(\".ms-PeoplePicker-selectedCountPlural\");\n            }\n            if (this._peoplePickerMenu) {\n                this._peoplePickerMenu.setAttribute(\"style\", \"display: none;\");\n            }\n        }\n        PeoplePicker.prototype._createModalHost = function (e) {\n            e.stopPropagation();\n            this._peoplePickerMenu.setAttribute(\"style\", \"display: block;\");\n            this._contextualHostView = new fabric.ContextualHost(this._peoplePickerMenu, MODAL_POSITION, this._peoplePickerSearchBox, false, [\"\"], true, this._contextHostCallBack.bind(this));\n            this._peoplePickerSearchBox.classList.add(\"is-active\");\n            this._isContextualMenuOpen = true;\n        };\n        PeoplePicker.prototype._clickHandler = function (e) {\n            this._createModalHost(e);\n            // Select all results and remove event listeners by cloning\n            var peoplePickerResults = this._peoplePickerMenu.querySelector(\".ms-PeoplePicker-result\");\n            var resultsParent = peoplePickerResults.parentNode;\n            var resultsClone = resultsParent.cloneNode(true);\n            resultsParent.parentNode.replaceChild(resultsClone, resultsParent);\n            // Get all results\n            this._peoplePickerResults = this._peoplePickerMenu.querySelectorAll(\".ms-PeoplePicker-result\");\n            // Add _selectResult listeners to each result\n            for (var i = 0; i < this._peoplePickerResults.length; i++) {\n                var personaResult = this._peoplePickerResults[i].querySelector(\".ms-Persona\");\n                var removeButton = this._peoplePickerResults[i].querySelector(\".ms-PeoplePicker-resultAction\");\n                personaResult.addEventListener(\"click\", this._selectResult.bind(this), true);\n                removeButton.addEventListener(\"click\", this._removeItem.bind(this), true);\n            }\n        };\n        PeoplePicker.prototype._selectResult = function (e) {\n            e.stopPropagation();\n            var currentResult = this._findElement(e.target, \"ms-Persona\");\n            var clonedResult = currentResult.cloneNode(true);\n            // if facePile - add to members list / else tokenize\n            if (this._container.classList.contains(\"ms-PeoplePicker--facePile\")) {\n                this._addResultToMembers(clonedResult);\n            }\n            else {\n                this._tokenizeResult(clonedResult);\n            }\n            this._updateCount();\n            // Close the open contextual host\n            this._contextualHostView.disposeModal();\n        };\n        PeoplePicker.prototype._findElement = function (childObj, className) {\n            var currentElement = childObj.parentNode;\n            while (!currentElement.classList.contains(className)) {\n                currentElement = currentElement.parentNode;\n            }\n            return currentElement;\n        };\n        PeoplePicker.prototype._addRemoveBtn = function (persona, token) {\n            var actionBtn;\n            var actionIcon = document.createElement(\"i\");\n            if (token) {\n                actionBtn = document.createElement(\"div\");\n                actionBtn.classList.add(\"ms-Persona-actionIcon\");\n                actionBtn.addEventListener(\"click\", this._removeToken.bind(this), true);\n            }\n            else {\n                actionBtn = document.createElement(\"button\");\n                actionBtn.classList.add(\"ms-PeoplePicker-resultAction\");\n                actionBtn.addEventListener(\"click\", this._removeResult.bind(this), true);\n            }\n            actionIcon.classList.add(\"ms-Icon\", \"ms-Icon--Cancel\");\n            actionBtn.appendChild(actionIcon);\n            persona.appendChild(actionBtn);\n        };\n        PeoplePicker.prototype._removeToken = function (e) {\n            var currentToken = this._findElement(e.target, \"ms-Persona\");\n            currentToken.remove();\n        };\n        PeoplePicker.prototype._removeResult = function (e) {\n            var currentResult = this._findElement(e.target, \"ms-PeoplePicker-selectedPerson\");\n            currentResult.remove();\n            this._updateCount();\n        };\n        PeoplePicker.prototype._removeItem = function (e) {\n            var currentItem = this._findElement(e.target, \"ms-PeoplePicker-result\");\n            currentItem.remove();\n        };\n        PeoplePicker.prototype._updateCount = function () {\n            if (this._selectedPeople) {\n                var count = this._selectedPeople.querySelectorAll(\".ms-PeoplePicker-selectedPerson\").length;\n                this._selectedCount.textContent = count.toString();\n                this._selectedPlural.style.display = (count === 1) ? \"none\" : \"inline\";\n            }\n        };\n        PeoplePicker.prototype._tokenizeResult = function (tokenResult) {\n            var searchBox = this._container.querySelector(\".ms-PeoplePicker-searchBox\");\n            var textField = searchBox.querySelector(\".ms-TextField\");\n            // Add token classes to persona\n            tokenResult.classList.add(TOKEN_CLASS, \"ms-PeoplePicker-persona\");\n            // Add the remove button to the token\n            this._addRemoveBtn(tokenResult, true);\n            // Use persona xs variant for token\n            if (tokenResult.classList.contains(\"ms-Persona--sm\")) {\n                tokenResult.classList.remove(\"ms-Persona--sm\");\n                tokenResult.classList.add(\"ms-Persona--xs\");\n            }\n            // Prepend the token before the search field\n            searchBox.insertBefore(tokenResult, textField);\n        };\n        PeoplePicker.prototype._addResultToMembers = function (persona) {\n            var membersList = this._container.querySelector(\".ms-PeoplePicker-selectedPeople\");\n            var firstMember = membersList.querySelector(\".ms-PeoplePicker-selectedPerson\");\n            var selectedItem = document.createElement(\"li\");\n            // Create the selectedPerson list item\n            selectedItem.classList.add(\"ms-PeoplePicker-selectedPerson\");\n            selectedItem.tabIndex = 1;\n            // Append the result persona to list item\n            selectedItem.appendChild(persona);\n            // Add the remove button to the persona\n            this._addRemoveBtn(selectedItem, false);\n            // Add removeResult event to resultAction\n            selectedItem.querySelector(\".ms-PeoplePicker-resultAction\").addEventListener(\"click\", this._removeResult.bind(this), true);\n            membersList.insertBefore(selectedItem, firstMember);\n        };\n        PeoplePicker.prototype._assignClicks = function () {\n            var _this = this;\n            this._peoplePickerSearch.addEventListener(\"click\", this._clickHandler.bind(this), true);\n            this._peoplePickerSearch.addEventListener(\"keyup\", function (e) {\n                if (e.keyCode !== 27 && !_this._isContextualMenuOpen) {\n                    _this._clickHandler(e);\n                }\n            }, true);\n        };\n        PeoplePicker.prototype._assignRemoveHandler = function () {\n            var selectedPeople = this._selectedPeople.querySelectorAll(\".ms-PeoplePicker-selectedPerson\");\n            for (var i = 0; i < selectedPeople.length; i++) {\n                selectedPeople[i].querySelector(\".ms-PeoplePicker-resultAction\").addEventListener(\"click\", this._removeResult.bind(this), true);\n            }\n        };\n        PeoplePicker.prototype._contextHostCallBack = function () {\n            this._peoplePickerSearchBox.classList.remove(\"is-active\");\n            this._isContextualMenuOpen = false;\n        };\n        return PeoplePicker;\n    }());\n    fabric.PeoplePicker = PeoplePicker;\n})(fabric || (fabric = {}));\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n\"use strict\";\nvar fabric;\n(function (fabric) {\n    /**\n     * Pivot Plugin\n     *\n     * Adds basic demonstration functionality to .ms-Pivot components.\n     *\n     */\n    var Pivot = (function () {\n        /**\n         *\n         * @param {HTMLElement} container - the target container for an instance of Pivot\n         * @constructor\n         */\n        function Pivot(container) {\n            this._container = container;\n            this._addListeners();\n            // Show the first pivot's content\n            var firstContent = this._container.querySelector(\".ms-Pivot-content\");\n            firstContent.style.display = \"block\";\n        }\n        Pivot.prototype.removeListeners = function () {\n            this._container.removeEventListener(\"click\", this._selectTab.bind(this));\n        };\n        Pivot.prototype._addListeners = function () {\n            var _this = this;\n            this._container.querySelector(\".ms-Pivot-links\").addEventListener(\"click\", this._selectTabMouse.bind(this), false);\n            this._container.addEventListener(\"keyup\", function (event) {\n                if (event.keyCode === 13) {\n                    _this._selectTabKeyboard(event);\n                }\n            }, true);\n        };\n        Pivot.prototype._selectTab = function (selectedTab) {\n            // Only if its a pivot link and if it doesn't have ellipsis\n            if (selectedTab.classList.contains(\"ms-Pivot-link\") && !selectedTab.querySelector(\".ms-Pivot-ellipsis\")) {\n                // Iterate over siblings and un-select them\n                var sibling = selectedTab.parentElement.firstElementChild;\n                while (sibling) {\n                    sibling.classList.remove(\"is-selected\");\n                    sibling = sibling.nextElementSibling;\n                }\n                // Select the clicked tab\n                selectedTab.classList.add(\"is-selected\");\n                // Hide all of the content\n                var containers = this._container.querySelectorAll(\".ms-Pivot-content\");\n                Array.prototype.forEach.call(containers, function (el, i) {\n                    el.style.display = \"none\";\n                });\n                // Show the content that corresponds to the selected tab\n                var selectedContentName = selectedTab.getAttribute(\"data-content\");\n                var selectedContent = this._container.querySelector(\".ms-Pivot-content[data-content='\" + selectedContentName + \"']\");\n                selectedContent.style.display = \"block\";\n            }\n        };\n        Pivot.prototype._selectTabMouse = function (event) {\n            event.preventDefault();\n            var selectedTab = event.target;\n            this._selectTab(selectedTab);\n        };\n        Pivot.prototype._selectTabKeyboard = function (event) {\n            event.preventDefault();\n            var selectedTab = event.target;\n            this._selectTab(selectedTab);\n        };\n        return Pivot;\n    }());\n    fabric.Pivot = Pivot;\n})(fabric || (fabric = {}));\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n/**\n * @namespace fabric\n */\nvar fabric;\n(function (fabric) {\n    \"use strict\";\n    /**\n     * ProgressIndicator component\n     *\n     * A component for outputting determinate progress\n     *\n     */\n    var ProgressIndicator = (function () {\n        /**\n         *\n         * @param {HTMLDivElement} container - the target container for an instance of ProgressIndicator\n         * @constructor\n         */\n        function ProgressIndicator(container) {\n            this.container = container;\n            this.cacheDOM();\n        }\n        /**\n         * Sets the progress percentage for a determinate\n         * operation. Either use this or setProgress\n         * and setTotal as setProgressPercent assumes\n         * you've done a percentage calculation before\n         * injecting it into the function\n         * @param {number} percent - a floating point number from 0 to 1\n         */\n        ProgressIndicator.prototype.setProgressPercent = function (percent) {\n            this._progressBar.style.width = Math.round(this._width * percent) + \"px\";\n        };\n        /**\n         * Sets the progress for a determinate operation.\n         * Use this in combination with setTotal.\n         * @param {number} progress\n         */\n        ProgressIndicator.prototype.setProgress = function (progress) {\n            this._progress = progress;\n            var percentage = this._progress / this._total;\n            this.setProgressPercent(percentage);\n        };\n        /**\n         * Sets the total file size, etc. for a\n         * determinate operation. Use this in\n         * combination with setProgress\n         * @param {number} total\n         */\n        ProgressIndicator.prototype.setTotal = function (total) {\n            this._total = total;\n        };\n        /**\n         * Sets the text for the title or label\n         * of an instance\n         * @param {string} name\n         */\n        ProgressIndicator.prototype.setName = function (name) {\n            this._itemName.innerHTML = name;\n        };\n        /**\n         * Sets the text for a description\n         * of an instance\n         * @param {string} name\n         */\n        ProgressIndicator.prototype.setDescription = function (description) {\n            this._itemDescription.innerHTML = description;\n        };\n        /**\n         * caches elements and values of the component\n         *\n         */\n        ProgressIndicator.prototype.cacheDOM = function () {\n            // an itemName element is optional\n            this._itemName = this.container.querySelector(\".ms-ProgressIndicator-itemName\") || null;\n            // an itemDescription element is optional\n            this._itemDescription = this.container.querySelector(\".ms-ProgressIndicator-itemDescription\") || null;\n            this._progressBar = this.container.querySelector(\".ms-ProgressIndicator-progressBar\");\n            var itemProgress = this.container.querySelector(\".ms-ProgressIndicator-itemProgress\");\n            this._width = itemProgress.offsetWidth;\n        };\n        return ProgressIndicator;\n    }());\n    fabric.ProgressIndicator = ProgressIndicator;\n})(fabric || (fabric = {})); // end fabric namespace\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n/**\n * @namespace fabric\n */\nvar fabric;\n(function (fabric) {\n    var CircleObject = (function () {\n        function CircleObject(element, j) {\n            this.element = element;\n            this.j = j;\n        }\n        return CircleObject;\n    }());\n    /**\n     * Spinner Component\n     *\n     * An animating activity indicator.\n     *\n     */\n    var Spinner = (function () {\n        /**\n         * @param {HTMLDOMElement} target - The element the Spinner will attach itself to.\n         */\n        function Spinner(container) {\n            this.eightSize = 0.2;\n            this.animationSpeed = 90;\n            this.parentSize = 20;\n            this.fadeIncrement = 0;\n            this.circleObjects = [];\n            this._target = container;\n            this._init();\n        }\n        /**\n         * @function start - starts or restarts the animation sequence\n         * @memberOf fabric.Spinner\n         */\n        Spinner.prototype.start = function () {\n            var _this = this;\n            this.stop();\n            this.interval = setInterval(function () {\n                var i = _this.circleObjects.length;\n                while (i--) {\n                    _this._fade(_this.circleObjects[i]);\n                }\n            }, this.animationSpeed);\n        };\n        /**\n         * @function stop - stops the animation sequence\n         * @memberOf fabric.Spinner\n         */\n        Spinner.prototype.stop = function () {\n            clearInterval(this.interval);\n        };\n        // private methods\n        Spinner.prototype._init = function () {\n            this._setTargetElement();\n            this._setPropertiesForSize();\n            this._createCirclesAndArrange();\n            this._initializeOpacities();\n            this.start();\n        };\n        Spinner.prototype._setPropertiesForSize = function () {\n            if (this.spinner.className.indexOf(\"large\") > -1) {\n                this.parentSize = 28;\n                this.eightSize = 0.179;\n            }\n            this.offsetSize = this.eightSize;\n            this.numCircles = 8;\n        };\n        Spinner.prototype._setTargetElement = function () {\n            // for backwards compatibility\n            if (this._target.className.indexOf(\"ms-Spinner\") === -1) {\n                this.spinner = document.createElement(\"div\");\n                this.spinner.className = \"ms-Spinner\";\n                this._target.appendChild(this.spinner);\n            }\n            else {\n                this.spinner = this._target;\n            }\n        };\n        Spinner.prototype._initializeOpacities = function () {\n            var i = 0;\n            var j = 1;\n            var opacity;\n            this.fadeIncrement = 1 / this.numCircles;\n            for (i; i < this.numCircles; i++) {\n                var circleObject = this.circleObjects[i];\n                opacity = (this.fadeIncrement * j++);\n                this._setOpacity(circleObject.element, opacity);\n            }\n        };\n        Spinner.prototype._fade = function (circleObject) {\n            var opacity = this._getOpacity(circleObject.element) - this.fadeIncrement;\n            if (opacity <= 0) {\n                opacity = 1;\n            }\n            this._setOpacity(circleObject.element, opacity);\n        };\n        Spinner.prototype._getOpacity = function (element) {\n            return parseFloat(window.getComputedStyle(element).getPropertyValue(\"opacity\"));\n        };\n        Spinner.prototype._setOpacity = function (element, opacity) {\n            element.style.opacity = opacity.toString();\n        };\n        Spinner.prototype._createCircle = function () {\n            var circle = document.createElement(\"div\");\n            circle.className = \"ms-Spinner-circle\";\n            circle.style.width = circle.style.height = this.parentSize * this.offsetSize + \"px\";\n            return circle;\n        };\n        Spinner.prototype._createCirclesAndArrange = function () {\n            var angle = 0;\n            var offset = this.parentSize * this.offsetSize;\n            var step = (2 * Math.PI) / this.numCircles;\n            var i = this.numCircles;\n            var circleObject;\n            var radius = (this.parentSize - offset) * 0.5;\n            while (i--) {\n                var circle = this._createCircle();\n                var x = Math.round(this.parentSize * 0.5 + radius * Math.cos(angle) - circle.clientWidth * 0.5) - offset * 0.5;\n                var y = Math.round(this.parentSize * 0.5 + radius * Math.sin(angle) - circle.clientHeight * 0.5) - offset * 0.5;\n                this.spinner.appendChild(circle);\n                circle.style.left = x + \"px\";\n                circle.style.top = y + \"px\";\n                angle += step;\n                circleObject = new CircleObject(circle, i);\n                this.circleObjects.push(circleObject);\n            }\n        };\n        return Spinner;\n    }());\n    fabric.Spinner = Spinner;\n})(fabric || (fabric = {}));\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n/**\n * @namespace fabric\n */\nvar fabric;\n(function (fabric) {\n    \"use strict\";\n    var Table = (function () {\n        function Table(container) {\n            this.container = container;\n            // Is the table selectable?\n            if (this.container.className.indexOf(\"ms-Table--selectable\") !== -1) {\n                this._addListeners();\n            }\n        }\n        /**\n         * Add event listeners\n         */\n        Table.prototype._addListeners = function () {\n            this.container.addEventListener(\"click\", this._toggleRowSelection.bind(this), false);\n        };\n        /**\n         * Select or deselect a row\n         */\n        Table.prototype._toggleRowSelection = function (event) {\n            var selectedRow = event.target.parentElement;\n            if (selectedRow.tagName === \"TR\") {\n                var selectedStateClass = \"is-selected\";\n                // Toggle the selected state class\n                if (selectedRow.className === selectedStateClass) {\n                    selectedRow.className = \"\";\n                }\n                else {\n                    selectedRow.className = selectedStateClass;\n                }\n            }\n        };\n        return Table;\n    }());\n    fabric.Table = Table;\n})(fabric || (fabric = {}));\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n\"use strict\";\nvar fabric;\n(function (fabric) {\n    var TextFieldConsts;\n    (function (TextFieldConsts) {\n        (function (Type) {\n            Type[Type[\"Placeholder\"] = 0] = \"Placeholder\";\n            Type[Type[\"Underlined\"] = 1] = \"Underlined\";\n        })(TextFieldConsts.Type || (TextFieldConsts.Type = {}));\n        var Type = TextFieldConsts.Type;\n    })(TextFieldConsts || (TextFieldConsts = {}));\n    /**\n     * Text Field Plugin\n     *\n     * Adds basic demonstration functionality to .ms-TextField components.\n     */\n    var TextField = (function () {\n        /**\n         *\n         * @param {HTMLDivElement} container - the target container for an instance of TextField\n         * @constructor\n         */\n        function TextField(container) {\n            this._container = container;\n            this._type = [];\n            this._textField = this._container.querySelector(\".ms-TextField-field\");\n            this._textFieldLabel = this._container.querySelector(\".ms-Label\");\n            this._setTextFieldType();\n            this._addListeners();\n        }\n        /** Populate _type with various kinds of text fields */\n        TextField.prototype._setTextFieldType = function () {\n            if (this._container.classList.contains(\"ms-TextField--placeholder\")) {\n                this._type.push(TextFieldConsts.Type.Placeholder);\n            }\n            if (this._container.classList.contains(\"ms-TextField--underlined\")) {\n                this._type.push(TextFieldConsts.Type.Underlined);\n            }\n        };\n        /** Add event listeners according to the type(s) of text field */\n        TextField.prototype._addListeners = function () {\n            var _this = this;\n            // Ensure that the text box gets focus when the label is clicked.\n            this._textFieldLabel.addEventListener(\"click\", function (event) {\n                _this._textField.focus();\n            });\n            /** Placeholder - hide/unhide the placeholder  */\n            if (this._type.indexOf(TextFieldConsts.Type.Placeholder) >= 0) {\n                this._textField.addEventListener(\"focus\", function (event) {\n                    _this._textFieldLabel.style.display = \"none\";\n                });\n                this._textField.addEventListener(\"blur\", function (event) {\n                    // Show only if no value in the text field\n                    if (_this._textField.value.length === 0) {\n                        _this._textFieldLabel.style.display = \"block\";\n                    }\n                });\n            }\n            /** Underlined - adding/removing a focus class  */\n            if (this._type.indexOf(TextFieldConsts.Type.Underlined) >= 0) {\n                this._textField.addEventListener(\"focus\", function (event) {\n                    _this._container.classList.add(\"is-active\");\n                });\n                this._textField.addEventListener(\"blur\", function (event) {\n                    _this._container.classList.remove(\"is-active\");\n                });\n            }\n        };\n        return TextField;\n    }());\n    fabric.TextField = TextField;\n})(fabric || (fabric = {}));\n\n// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.\n\"use strict\";\nvar fabric;\n(function (fabric) {\n    /**\n     * Toggle Plugin\n     *\n     * Adds basic demonstration functionality to .ms-Toggle components.\n     *\n     */\n    var Toggle = (function () {\n        /**\n         *\n         * @param {HTMLElement} container - the target container for an instance of Toggle\n         * @constructor\n         */\n        function Toggle(container) {\n            this._container = container;\n            this._toggleField = this._container.querySelector(\".ms-Toggle-field\");\n            this._addListeners();\n        }\n        Toggle.prototype.removeListeners = function () {\n            this._toggleField.removeEventListener(\"click\", this._toggleHandler.bind(this));\n        };\n        Toggle.prototype._addListeners = function () {\n            var _this = this;\n            this._toggleField.addEventListener(\"click\", this._toggleHandler.bind(this), false);\n            this._toggleField.addEventListener(\"keyup\", function (e) { return (e.keyCode === 32) ? _this._toggleHandler() : null; }, false);\n        };\n        Toggle.prototype._toggleHandler = function () {\n            this._toggleField.classList.toggle(\"is-selected\");\n        };\n        return Toggle;\n    }());\n    fabric.Toggle = Toggle;\n})(fabric || (fabric = {}));\n"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "!function(a){\"function\"==typeof define&&define.amd?define(\"picker\",[\"jquery\"],a):\"object\"==typeof exports?module.exports=a(require(\"jquery\")):this.Picker=a(jQuery)}(function(a){function b(f,g,h,k){function l(){return b._.node(\"div\",b._.node(\"div\",b._.node(\"div\",b._.node(\"div\",w.component.nodes(r.open),t.box),t.wrap),t.frame),t.holder)}function m(){u.data(g,w).addClass(t.input).val(u.data(\"value\")?w.get(\"select\",s.format):f.value).on(\"focus.\"+r.id+\" click.\"+r.id,p),s.editable||u.on(\"keydown.\"+r.id,function(a){var b=a.keyCode,c=/^(8|46)$/.test(b);return 27==b?(w.close(),!1):void((32==b||c||!r.open&&w.component.key[b])&&(a.preventDefault(),a.stopPropagation(),c?w.clear().close():w.open()))}),e(f,{haspopup:!0,expanded:!1,readonly:!1,owns:f.id+\"_root\"+(w._hidden?\" \"+w._hidden.id:\"\")})}function n(){w.$root.on({focusin:function(a){w.$root.removeClass(t.focused),a.stopPropagation()},\"mousedown click\":function(b){var c=b.target;c!=w.$root.children()[0]&&(b.stopPropagation(),\"mousedown\"!=b.type||a(c).is(\":input\")||\"OPTION\"==c.nodeName||(b.preventDefault(),f.focus()))}}).on(\"click\",\"[data-pick], [data-nav], [data-clear], [data-close]\",function(){var b=a(this),c=b.data(),d=b.hasClass(t.navDisabled)||b.hasClass(t.disabled),e=document.activeElement;e=e&&(e.type||e.href)&&e,(d||e&&!a.contains(w.$root[0],e))&&f.focus(),!d&&c.nav?w.set(\"highlight\",w.component.item.highlight,{nav:c.nav}):!d&&\"pick\"in c?w.set(\"select\",c.pick).close(!0):c.clear?w.clear().close(!0):c.close&&w.close(!0)}),e(w.$root[0],\"hidden\",!0)}function o(){var b;s.hiddenName===!0?(b=f.name,f.name=\"\"):(b=[\"string\"==typeof s.hiddenPrefix?s.hiddenPrefix:\"\",\"string\"==typeof s.hiddenSuffix?s.hiddenSuffix:\"_submit\"],b=b[0]+f.name+b[1]),w._hidden=a('<input type=hidden name=\"'+b+'\"'+(u.data(\"value\")||f.value?' value=\"'+w.get(\"select\",s.formatSubmit)+'\"':\"\")+\">\")[0],u.on(\"change.\"+r.id,function(){w._hidden.value=f.value?w.get(\"select\",s.formatSubmit):\"\"}).after(w._hidden)}function p(a){a.stopPropagation(),\"focus\"==a.type&&w.$root.addClass(t.focused),w.open()}if(!f)return b;var q=!1,r={id:f.id||\"P\"+Math.abs(~~(Math.random()*new Date))},s=h?a.extend(!0,{},h.defaults,k):k||{},t=a.extend({},b.klasses(),s.klass),u=a(f),v=function(){return this.start()},w=v.prototype={constructor:v,$node:u,start:function(){return r&&r.start?w:(r.methods={},r.start=!0,r.open=!1,r.type=f.type,f.autofocus=f==document.activeElement,f.readOnly=!s.editable,f.id=f.id||r.id,\"text\"!=f.type&&(f.type=\"text\"),w.component=new h(w,s),w.$root=a(b._.node(\"div\",l(),t.picker,'id=\"'+f.id+'_root\"')),n(),s.formatSubmit&&o(),m(),s.container?a(s.container).append(w.$root):u.after(w.$root),w.on({start:w.component.onStart,render:w.component.onRender,stop:w.component.onStop,open:w.component.onOpen,close:w.component.onClose,set:w.component.onSet}).on({start:s.onStart,render:s.onRender,stop:s.onStop,open:s.onOpen,close:s.onClose,set:s.onSet}),q=c(w.$root.children()[0]),f.autofocus&&w.open(),w.trigger(\"start\").trigger(\"render\"))},render:function(a){return a?w.$root.html(l()):w.$root.find(\".\"+t.box).html(w.component.nodes(r.open)),w.trigger(\"render\")},stop:function(){return r.start?(w.close(),w._hidden&&w._hidden.parentNode.removeChild(w._hidden),w.$root.remove(),u.removeClass(t.input).removeData(g),setTimeout(function(){u.off(\".\"+r.id)},0),f.type=r.type,f.readOnly=!1,w.trigger(\"stop\"),r.methods={},r.start=!1,w):w},open:function(c){return r.open?w:(u.addClass(t.active),e(f,\"expanded\",!0),setTimeout(function(){w.$root.addClass(t.opened),e(w.$root[0],\"hidden\",!1)},0),c!==!1&&(r.open=!0,q&&j.css(\"overflow\",\"hidden\").css(\"padding-right\",\"+=\"+d()),u.trigger(\"focus\"),i.on(\"click.\"+r.id+\" focusin.\"+r.id,function(a){var b=a.target;b!=f&&b!=document&&3!=a.which&&w.close(b===w.$root.children()[0])}).on(\"keydown.\"+r.id,function(c){var d=c.keyCode,e=w.component.key[d],g=c.target;27==d?w.close(!0):g!=f||!e&&13!=d?a.contains(w.$root[0],g)&&13==d&&(c.preventDefault(),g.click()):(c.preventDefault(),e?b._.trigger(w.component.key.go,w,[b._.trigger(e)]):w.$root.find(\".\"+t.highlighted).hasClass(t.disabled)||w.set(\"select\",w.component.item.highlight).close())})),w.trigger(\"open\"))},close:function(a){return a&&(u.off(\"focus.\"+r.id).trigger(\"focus\"),setTimeout(function(){u.on(\"focus.\"+r.id,p)},0)),u.removeClass(t.active),e(f,\"expanded\",!1),setTimeout(function(){w.$root.removeClass(t.opened+\" \"+t.focused),e(w.$root[0],\"hidden\",!0)},0),r.open?(r.open=!1,q&&j.css(\"overflow\",\"\").css(\"padding-right\",\"-=\"+d()),i.off(\".\"+r.id),w.trigger(\"close\")):w},clear:function(a){return w.set(\"clear\",null,a)},set:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(d=g&&a.isPlainObject(c)?c:d||{},b){g||(h[b]=c);for(e in h)f=h[e],e in w.component.item&&(void 0===f&&(f=null),w.component.set(e,f,d)),(\"select\"==e||\"clear\"==e)&&u.val(\"clear\"==e?\"\":w.get(e,s.format)).trigger(\"change\");w.render()}return d.muted?w:w.trigger(\"set\",h)},get:function(a,c){if(a=a||\"value\",null!=r[a])return r[a];if(\"value\"==a)return f.value;if(a in w.component.item){if(\"string\"==typeof c){var d=w.component.get(a);return d?b._.trigger(w.component.formats.toString,w.component,[c,d]):\"\"}return w.component.get(a)}},on:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(b){g||(h[b]=c);for(e in h)f=h[e],d&&(e=\"_\"+e),r.methods[e]=r.methods[e]||[],r.methods[e].push(f)}return w},off:function(){var a,b,c=arguments;for(a=0,namesCount=c.length;namesCount>a;a+=1)b=c[a],b in r.methods&&delete r.methods[b];return w},trigger:function(a,c){var d=function(a){var d=r.methods[a];d&&d.map(function(a){b._.trigger(a,w,[c])})};return d(\"_\"+a),d(a),w}};return new v}function c(a){var b,c=\"position\";return a.currentStyle?b=a.currentStyle[c]:window.getComputedStyle&&(b=getComputedStyle(a)[c]),\"fixed\"==b}function d(){if(j.height()<=h.height())return 0;var b=a('<div style=\"visibility:hidden;width:100px\" />').appendTo(\"body\"),c=b[0].offsetWidth;b.css(\"overflow\",\"scroll\");var d=a('<div style=\"width:100%\" />').appendTo(b),e=d[0].offsetWidth;return b.remove(),c-e}function e(b,c,d){if(a.isPlainObject(c))for(var e in c)f(b,e,c[e]);else f(b,c,d)}function f(a,b,c){a.setAttribute((\"role\"==b?\"\":\"aria-\")+b,c)}function g(b,c){a.isPlainObject(b)||(b={attribute:c}),c=\"\";for(var d in b){var e=(\"role\"==d?\"\":\"aria-\")+d,f=b[d];c+=null==f?\"\":e+'=\"'+b[d]+'\"'}return c}var h=a(window),i=a(document),j=a(document.documentElement);return b.klasses=function(a){return a=a||\"picker\",{picker:a,opened:a+\"--opened\",focused:a+\"--focused\",input:a+\"__input\",active:a+\"__input--active\",holder:a+\"__holder\",frame:a+\"__frame\",wrap:a+\"__wrap\",box:a+\"__box\"}},b._={group:function(a){for(var c,d=\"\",e=b._.trigger(a.min,a);e<=b._.trigger(a.max,a,[e]);e+=a.i)c=b._.trigger(a.item,a,[e]),d+=b._.node(a.node,c[0],c[1],c[2]);return d},node:function(b,c,d,e){return c?(c=a.isArray(c)?c.join(\"\"):c,d=d?' class=\"'+d+'\"':\"\",e=e?\" \"+e:\"\",\"<\"+b+d+e+\">\"+c+\"</\"+b+\">\"):\"\"},lead:function(a){return(10>a?\"0\":\"\")+a},trigger:function(a,b,c){return\"function\"==typeof a?a.apply(b,c||[]):a},digits:function(a){return/\\d/.test(a[1])?2:1},isDate:function(a){return{}.toString.call(a).indexOf(\"Date\")>-1&&this.isInteger(a.getUTCDate())},isInteger:function(a){return{}.toString.call(a).indexOf(\"Number\")>-1&&a%1===0},ariaAttr:g},b.extend=function(c,d){a.fn[c]=function(e,f){var g=this.data(c);return\"picker\"==e?g:g&&\"string\"==typeof e?b._.trigger(g[e],g,[f]):this.each(function(){var f=a(this);f.data(c)||new b(this,c,d,e)})},a.fn[c].defaults=d.defaults},b}),function(a){\"function\"==typeof define&&define.amd?define([\"picker\",\"jquery\"],a):\"object\"==typeof exports?module.exports=a(require(\"./picker.js\"),require(\"jquery\")):a(Picker,jQuery)}(function(a,b){function c(a,b){var c=this,d=a.$node[0],e=d.value,f=a.$node.data(\"value\"),g=f||e,h=f?b.formatSubmit:b.format,i=function(){return d.currentStyle?\"rtl\"==d.currentStyle.direction:\"rtl\"==getComputedStyle(a.$root[0]).direction};c.settings=b,c.$node=a.$node,c.queue={min:\"measure create\",max:\"measure create\",now:\"now create\",select:\"parse create validate\",highlight:\"parse navigate create validate\",view:\"parse create validate viewset\",disable:\"deactivate\",enable:\"activate\"},c.item={},c.item.clear=null,c.item.disable=(b.disable||[]).slice(0),c.item.enable=-function(a){return a[0]===!0?a.shift():-1}(c.item.disable),c.set(\"min\",b.min).set(\"max\",b.max).set(\"now\"),g?c.set(\"select\",g,{format:h}):c.set(\"select\",null).set(\"highlight\",c.item.now),c.key={40:7,38:-7,39:function(){return i()?-1:1},37:function(){return i()?1:-1},go:function(a){var b=c.item.highlight,d=new Date(Date.UTC(b.year,b.month,b.date+a));c.set(\"highlight\",d,{interval:a}),this.render()}},a.on(\"render\",function(){a.$root.find(\".\"+b.klass.selectMonth).on(\"change\",function(){var c=this.value;c&&(a.set(\"highlight\",[a.get(\"view\").year,c,a.get(\"highlight\").date]),a.$root.find(\".\"+b.klass.selectMonth).trigger(\"focus\"))}),a.$root.find(\".\"+b.klass.selectYear).on(\"change\",function(){var c=this.value;c&&(a.set(\"highlight\",[c,a.get(\"view\").month,a.get(\"highlight\").date]),a.$root.find(\".\"+b.klass.selectYear).trigger(\"focus\"))})},1).on(\"open\",function(){var d=\"\";c.disabled(c.get(\"now\"))&&(d=\":not(.\"+b.klass.buttonToday+\")\"),a.$root.find(\"button\"+d+\", select\").attr(\"disabled\",!1)},1).on(\"close\",function(){a.$root.find(\"button, select\").attr(\"disabled\",!0)},1)}var d=7,e=6,f=a._;c.prototype.set=function(a,b,c){var d=this,e=d.item;return null===b?(\"clear\"==a&&(a=\"select\"),e[a]=b,d):(e[\"enable\"==a?\"disable\":\"flip\"==a?\"enable\":a]=d.queue[a].split(\" \").map(function(e){return b=d[e](a,b,c)}).pop(),\"select\"==a?d.set(\"highlight\",e.select,c):\"highlight\"==a?d.set(\"view\",e.highlight,c):a.match(/^(flip|min|max|disable|enable)$/)&&(e.select&&d.disabled(e.select)&&d.set(\"select\",e.select,c),e.highlight&&d.disabled(e.highlight)&&d.set(\"highlight\",e.highlight,c)),d)},c.prototype.get=function(a){return this.item[a]},c.prototype.create=function(a,c,d){var e,g=this;return c=void 0===c?a:c,c==-1/0||1/0==c?e=c:b.isPlainObject(c)&&f.isInteger(c.pick)?c=c.obj:b.isArray(c)?(c=new Date(Date.UTC(c[0],c[1],c[2])),c=f.isDate(c)?c:g.create().obj):c=f.isInteger(c)?g.normalize(new Date(c),d):f.isDate(c)?g.normalize(c,d):g.now(a,c,d),{year:e||c.getUTCFullYear(),month:e||c.getUTCMonth(),date:e||c.getUTCDate(),day:e||c.getUTCDay(),obj:e||c,pick:e||c.getTime()}},c.prototype.createRange=function(a,c){var d=this,e=function(a){return a===!0||b.isArray(a)||f.isDate(a)?d.create(a):a};return f.isInteger(a)||(a=e(a)),f.isInteger(c)||(c=e(c)),f.isInteger(a)&&b.isPlainObject(c)?a=[c.year,c.month,c.date+a]:f.isInteger(c)&&b.isPlainObject(a)&&(c=[a.year,a.month,a.date+c]),{from:e(a),to:e(c)}},c.prototype.withinRange=function(a,b){return a=this.createRange(a.from,a.to),b.pick>=a.from.pick&&b.pick<=a.to.pick},c.prototype.overlapRanges=function(a,b){var c=this;return a=c.createRange(a.from,a.to),b=c.createRange(b.from,b.to),c.withinRange(a,b.from)||c.withinRange(a,b.to)||c.withinRange(b,a.from)||c.withinRange(b,a.to)},c.prototype.now=function(a,b,c){return b=new Date,c&&c.rel&&b.setUTCDate(b.getUTCDate()+c.rel),this.normalize(b,c)},c.prototype.navigate=function(a,c,d){var e,f,g,h,i=b.isArray(c),j=b.isPlainObject(c),k=this.item.view;if(i||j){for(j?(f=c.year,g=c.month,h=c.date):(f=+c[0],g=+c[1],h=+c[2]),d&&d.nav&&k&&k.month!==g&&(f=k.year,g=k.month),e=new Date(Date.UTC(f,g+(d&&d.nav?d.nav:0),1)),f=e.getUTCFullYear(),g=e.getUTCMonth();new Date(Date.UTC(f,g,h)).getUTCMonth()!==g;)h-=1;c=[f,g,h]}return c},c.prototype.normalize=function(a){return a.setUTCHours(0,0,0,0),a},c.prototype.measure=function(a,b){var c=this;return b?\"string\"==typeof b?b=c.parse(a,b):f.isInteger(b)&&(b=c.now(a,b,{rel:b})):b=\"min\"==a?-1/0:1/0,b},c.prototype.viewset=function(a,b){return this.create([b.year,b.month,1])},c.prototype.validate=function(a,c,d){var e,g,h,i,j=this,k=c,l=d&&d.interval?d.interval:1,m=-1===j.item.enable,n=j.item.min,o=j.item.max,p=m&&j.item.disable.filter(function(a){if(b.isArray(a)){var d=j.create(a).pick;d<c.pick?e=!0:d>c.pick&&(g=!0)}return f.isInteger(a)}).length;if((!d||!d.nav)&&(!m&&j.disabled(c)||m&&j.disabled(c)&&(p||e||g)||!m&&(c.pick<=n.pick||c.pick>=o.pick)))for(m&&!p&&(!g&&l>0||!e&&0>l)&&(l*=-1);j.disabled(c)&&(Math.abs(l)>1&&(c.month<k.month||c.month>k.month)&&(c=k,l=l>0?1:-1),c.pick<=n.pick?(h=!0,l=1,c=j.create([n.year,n.month,n.date+(c.pick===n.pick?0:-1)])):c.pick>=o.pick&&(i=!0,l=-1,c=j.create([o.year,o.month,o.date+(c.pick===o.pick?0:1)])),!h||!i);)c=j.create([c.year,c.month,c.date+l]);return c},c.prototype.disabled=function(a){var c=this,d=c.item.disable.filter(function(d){return f.isInteger(d)?a.day===(c.settings.firstDay?d:d-1)%7:b.isArray(d)||f.isDate(d)?a.pick===c.create(d).pick:b.isPlainObject(d)?c.withinRange(d,a):void 0});return d=d.length&&!d.filter(function(a){return b.isArray(a)&&\"inverted\"==a[3]||b.isPlainObject(a)&&a.inverted}).length,-1===c.item.enable?!d:d||a.pick<c.item.min.pick||a.pick>c.item.max.pick},c.prototype.parse=function(a,b,c){var d=this,e={};return b&&\"string\"==typeof b?(c&&c.format||(c=c||{},c.format=d.settings.format),d.formats.toArray(c.format).map(function(a){var c=d.formats[a],g=c?f.trigger(c,d,[b,e]):a.replace(/^!/,\"\").length;c&&(e[a]=b.substr(0,g)),b=b.substr(g)}),[e.yyyy||e.yy,+(e.mm||e.m)-1,e.dd||e.d]):b},c.prototype.formats=function(){function a(a,b,c){var d=a.match(/\\w+/)[0];return c.mm||c.m||(c.m=b.indexOf(d)+1),d.length}function b(a){return a.match(/\\w+/)[0].length}return{d:function(a,b){return a?f.digits(a):b.date},dd:function(a,b){return a?2:f.lead(b.date)},ddd:function(a,c){return a?b(a):this.settings.weekdaysShort[c.day]},dddd:function(a,c){return a?b(a):this.settings.weekdaysFull[c.day]},m:function(a,b){return a?f.digits(a):b.month+1},mm:function(a,b){return a?2:f.lead(b.month+1)},mmm:function(b,c){var d=this.settings.monthsShort;return b?a(b,d,c):d[c.month]},mmmm:function(b,c){var d=this.settings.monthsFull;return b?a(b,d,c):d[c.month]},yy:function(a,b){return a?2:(\"\"+b.year).slice(2)},yyyy:function(a,b){return a?4:b.year},toArray:function(a){return a.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(a,b){var c=this;return c.formats.toArray(a).map(function(a){return f.trigger(c.formats[a],c,[0,b])||a.replace(/^!/,\"\")}).join(\"\")}}}(),c.prototype.isDateExact=function(a,c){var d=this;return f.isInteger(a)&&f.isInteger(c)||\"boolean\"==typeof a&&\"boolean\"==typeof c?a===c:(f.isDate(a)||b.isArray(a))&&(f.isDate(c)||b.isArray(c))?d.create(a).pick===d.create(c).pick:b.isPlainObject(a)&&b.isPlainObject(c)?d.isDateExact(a.from,c.from)&&d.isDateExact(a.to,c.to):!1},c.prototype.isDateOverlap=function(a,c){var d=this,e=d.settings.firstDay?1:0;return f.isInteger(a)&&(f.isDate(c)||b.isArray(c))?(a=a%7+e,a===d.create(c).day+1):f.isInteger(c)&&(f.isDate(a)||b.isArray(a))?(c=c%7+e,c===d.create(a).day+1):b.isPlainObject(a)&&b.isPlainObject(c)?d.overlapRanges(a,c):!1},c.prototype.flipEnable=function(a){var b=this.item;b.enable=a||(-1==b.enable?1:-1)},c.prototype.deactivate=function(a,c){var d=this,e=d.item.disable.slice(0);return\"flip\"==c?d.flipEnable():c===!1?(d.flipEnable(1),e=[]):c===!0?(d.flipEnable(-1),e=[]):c.map(function(a){for(var c,g=0;g<e.length;g+=1)if(d.isDateExact(a,e[g])){c=!0;break}c||(f.isInteger(a)||f.isDate(a)||b.isArray(a)||b.isPlainObject(a)&&a.from&&a.to)&&e.push(a)}),e},c.prototype.activate=function(a,c){var d=this,e=d.item.disable,g=e.length;return\"flip\"==c?d.flipEnable():c===!0?(d.flipEnable(1),e=[]):c===!1?(d.flipEnable(-1),e=[]):c.map(function(a){var c,h,i,j;for(i=0;g>i;i+=1){if(h=e[i],d.isDateExact(h,a)){c=e[i]=null,j=!0;break}if(d.isDateOverlap(h,a)){b.isPlainObject(a)?(a.inverted=!0,c=a):b.isArray(a)?(c=a,c[3]||c.push(\"inverted\")):f.isDate(a)&&(c=[a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),\"inverted\"]);break}}if(c)for(i=0;g>i;i+=1)if(d.isDateExact(e[i],a)){e[i]=null;break}if(j)for(i=0;g>i;i+=1)if(d.isDateOverlap(e[i],a)){e[i]=null;break}c&&e.push(c)}),e.filter(function(a){return null!=a})},c.prototype.nodes=function(a){var b=this,c=b.settings,g=b.item,h=g.now,i=g.select,j=g.highlight,k=g.view,l=g.disable,m=g.min,n=g.max,o=function(a,b){return c.firstDay&&(a.push(a.shift()),b.push(b.shift())),f.node(\"thead\",f.node(\"tr\",f.group({min:0,max:d-1,i:1,node:\"th\",item:function(d){return[a[d],c.klass.weekdays,'scope=col title=\"'+b[d]+'\"']}})))}((c.showWeekdaysFull?c.weekdaysFull:c.weekdaysShort).slice(0),c.weekdaysFull.slice(0)),p=function(a){return f.node(\"div\",\" \",c.klass[\"nav\"+(a?\"Next\":\"Prev\")]+(a&&k.year>=n.year&&k.month>=n.month||!a&&k.year<=m.year&&k.month<=m.month?\" \"+c.klass.navDisabled:\"\"),\"data-nav=\"+(a||-1)+\" \"+f.ariaAttr({role:\"button\",components:b.$node[0].id+\"_table\"})+' title=\"'+(a?c.labelMonthNext:c.labelMonthPrev)+'\"')},q=function(){var d=c.showMonthsShort?c.monthsShort:c.monthsFull;return c.selectMonths?f.node(\"select\",f.group({min:0,max:11,i:1,node:\"option\",item:function(a){return[d[a],0,\"value=\"+a+(k.month==a?\" selected\":\"\")+(k.year==m.year&&a<m.month||k.year==n.year&&a>n.month?\" disabled\":\"\")]}}),c.klass.selectMonth,(a?\"\":\"disabled\")+\" \"+f.ariaAttr({components:b.$node[0].id+\"_table\"})+' title=\"'+c.labelMonthSelect+'\"'):f.node(\"div\",d[k.month],c.klass.month)},r=function(){var d=k.year,e=c.selectYears===!0?5:~~(c.selectYears/2);if(e){var g=m.year,h=n.year,i=d-e,j=d+e;if(g>i&&(j+=g-i,i=g),j>h){var l=i-g,o=j-h;i-=l>o?o:l,j=h}return f.node(\"select\",f.group({min:i,max:j,i:1,node:\"option\",item:function(a){return[a,0,\"value=\"+a+(d==a?\" selected\":\"\")]}}),c.klass.selectYear,(a?\"\":\"disabled\")+\" \"+f.ariaAttr({components:b.$node[0].id+\"_table\"})+' title=\"'+c.labelYearSelect+'\"')}return f.node(\"div\",d,c.klass.year)};return f.node(\"div\",(c.selectYears?r()+q():q()+r())+p()+p(1),c.klass.header)+f.node(\"table\",o+f.node(\"tbody\",f.group({min:0,max:e-1,i:1,node:\"tr\",item:function(a){var e=c.firstDay&&0===b.create([k.year,k.month,1]).day?-7:0;return[f.group({min:d*a-k.day+e+1,max:function(){return this.min+d-1},i:1,node:\"td\",item:function(a){a=b.create([k.year,k.month,a+(c.firstDay?1:0)]);var d=i&&i.pick==a.pick,e=j&&j.pick==a.pick,g=l&&b.disabled(a)||a.pick<m.pick||a.pick>n.pick;return[f.node(\"div\",a.date,function(b){return b.push(k.month==a.month?c.klass.infocus:c.klass.outfocus),h.pick==a.pick&&b.push(c.klass.now),d&&b.push(c.klass.selected),e&&b.push(c.klass.highlighted),g&&b.push(c.klass.disabled),b.join(\" \")}([c.klass.day]),\"data-pick=\"+a.pick+\" \"+f.ariaAttr({role:\"gridcell\",selected:d&&b.$node.val()===f.trigger(b.formats.toString,b,[c.format,a])?!0:null,activedescendant:e?!0:null,disabled:g?!0:null})),\"\",f.ariaAttr({role:\"presentation\"})]}})]}})),c.klass.table,'id=\"'+b.$node[0].id+'_table\" '+f.ariaAttr({role:\"grid\",components:b.$node[0].id,readonly:!0}))+f.node(\"div\",f.node(\"button\",c.today,c.klass.buttonToday,\"type=button data-pick=\"+h.pick+(a&&!b.disabled(h)?\"\":\" disabled\")+\" \"+f.ariaAttr({components:b.$node[0].id}))+f.node(\"button\",c.clear,c.klass.buttonClear,\"type=button data-clear=1\"+(a?\"\":\" disabled\")+\" \"+f.ariaAttr({components:b.$node[0].id}))+f.node(\"button\",c.close,c.klass.buttonClose,\"type=button data-close=true \"+(a?\"\":\" disabled\")+\" \"+f.ariaAttr({components:b.$node[0].id})),c.klass.footer)},c.defaults=function(a){return{labelMonthNext:\"Next month\",labelMonthPrev:\"Previous month\",labelMonthSelect:\"Select a month\",labelYearSelect:\"Select a year\",monthsFull:[\"January\",\"February\",\"March\",\"April\",\"May\",\"June\",\"July\",\"August\",\"September\",\"October\",\"November\",\"December\"],monthsShort:[\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\",\"Jul\",\"Aug\",\"Sep\",\"Oct\",\"Nov\",\"Dec\"],weekdaysFull:[\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"],weekdaysShort:[\"Sun\",\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\"],today:\"Today\",clear:\"Clear\",close:\"Close\",format:\"d mmmm, yyyy\",klass:{table:a+\"table\",header:a+\"header\",navPrev:a+\"nav--prev\",navNext:a+\"nav--next\",navDisabled:a+\"nav--disabled\",month:a+\"month\",year:a+\"year\",selectMonth:a+\"select--month\",selectYear:a+\"select--year\",weekdays:a+\"weekday\",day:a+\"day\",disabled:a+\"day--disabled\",selected:a+\"day--selected\",highlighted:a+\"day--highlighted\",now:a+\"day--today\",infocus:a+\"day--infocus\",outfocus:a+\"day--outfocus\",footer:a+\"footer\",buttonClear:a+\"button--clear\",buttonToday:a+\"button--today\",buttonClose:a+\"button--close\"}}}(a.klasses().picker+\"__\"),a.extend(\"pickadate\",c)});\r\n"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */\r\n!function(a,b){\"object\"==typeof module&&\"object\"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error(\"jQuery requires a window with a document\");return b(a)}:b(a)}(\"undefined\"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m=\"2.2.4\",n=function(a,b){return new n.fn.init(a,b)},o=/^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g,p=/^-ms-/,q=/-([\\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:\"\",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for(\"boolean\"==typeof g&&(j=g,g=arguments[h]||{},h++),\"object\"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:\"jQuery\"+(m+Math.random()).replace(/\\D/g,\"\"),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return\"function\"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if(\"object\"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,\"constructor\")&&!k.call(a.constructor.prototype||{},\"isPrototypeOf\"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+\"\":\"object\"==typeof a||\"function\"==typeof a?i[j.call(a)]||\"object\":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf(\"use strict\")?(b=d.createElement(\"script\"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,\"ms-\").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?\"\":(a+\"\").replace(o,\"\")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,\"string\"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return\"string\"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),\"function\"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each(\"Boolean Number String Function Array Date RegExp Object Error Symbol\".split(\" \"),function(a,b){i[\"[object \"+b+\"]\"]=b.toLowerCase()});function s(a){var b=!!a&&\"length\"in a&&a.length,c=n.type(a);return\"function\"===c||n.isWindow(a)?!1:\"array\"===c||0===b||\"number\"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u=\"sizzle\"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K=\"checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped\",L=\"[\\\\x20\\\\t\\\\r\\\\n\\\\f]\",M=\"(?:\\\\\\\\.|[\\\\w-]|[^\\\\x00-\\\\xa0])+\",N=\"\\\\[\"+L+\"*(\"+M+\")(?:\"+L+\"*([*^$|!~]?=)\"+L+\"*(?:'((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\\"((?:\\\\\\\\.|[^\\\\\\\\\\\"])*)\\\"|(\"+M+\"))|)\"+L+\"*\\\\]\",O=\":(\"+M+\")(?:\\\\((('((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\\"((?:\\\\\\\\.|[^\\\\\\\\\\\"])*)\\\")|((?:\\\\\\\\.|[^\\\\\\\\()[\\\\]]|\"+N+\")*)|.*)\\\\)|)\",P=new RegExp(L+\"+\",\"g\"),Q=new RegExp(\"^\"+L+\"+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)\"+L+\"+$\",\"g\"),R=new RegExp(\"^\"+L+\"*,\"+L+\"*\"),S=new RegExp(\"^\"+L+\"*([>+~]|\"+L+\")\"+L+\"*\"),T=new RegExp(\"=\"+L+\"*([^\\\\]'\\\"]*?)\"+L+\"*\\\\]\",\"g\"),U=new RegExp(O),V=new RegExp(\"^\"+M+\"$\"),W={ID:new RegExp(\"^#(\"+M+\")\"),CLASS:new RegExp(\"^\\\\.(\"+M+\")\"),TAG:new RegExp(\"^(\"+M+\"|[*])\"),ATTR:new RegExp(\"^\"+N),PSEUDO:new RegExp(\"^\"+O),CHILD:new RegExp(\"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\\\(\"+L+\"*(even|odd|(([+-]|)(\\\\d*)n|)\"+L+\"*(?:([+-]|)\"+L+\"*(\\\\d+)|))\"+L+\"*\\\\)|)\",\"i\"),bool:new RegExp(\"^(?:\"+K+\")$\",\"i\"),needsContext:new RegExp(\"^\"+L+\"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\\\(\"+L+\"*((?:-\\\\d)?\\\\d*)\"+L+\"*\\\\)|)(?=[^-]|$)\",\"i\")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\\d$/i,Z=/^[^{]+\\{\\s*\\[native \\w/,$=/^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$/,_=/[+~]/,aa=/'|\\\\/g,ba=new RegExp(\"\\\\\\\\([\\\\da-f]{1,6}\"+L+\"?|(\"+L+\")|.)\",\"ig\"),ca=function(a,b,c){var d=\"0x\"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],\"string\"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+\" \"]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if(\"object\"!==b.nodeName.toLowerCase()){(k=b.getAttribute(\"id\"))?k=k.replace(aa,\"\\\\$&\"):b.setAttribute(\"id\",k=u),r=g(a),h=r.length,l=V.test(k)?\"#\"+k:\"[id='\"+k+\"']\";while(h--)r[h]=l+\" \"+qa(r[h]);s=r.join(\",\"),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute(\"id\")}}}return i(a.replace(Q,\"$1\"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+\" \")>d.cacheLength&&delete b[a.shift()],b[c+\" \"]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement(\"div\");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split(\"|\"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return\"input\"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return(\"input\"===c||\"button\"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&\"undefined\"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?\"HTML\"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener(\"unload\",da,!1):e.attachEvent&&e.attachEvent(\"onunload\",da)),c.attributes=ia(function(a){return a.className=\"i\",!a.getAttribute(\"className\")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment(\"\")),!a.getElementsByTagName(\"*\").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(\"undefined\"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute(\"id\")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c=\"undefined\"!=typeof a.getAttributeNode&&a.getAttributeNode(\"id\");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return\"undefined\"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if(\"*\"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return\"undefined\"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML=\"<a id='\"+u+\"'></a><select id='\"+u+\"-\\r\\\\' msallowcapture=''><option selected=''></option></select>\",a.querySelectorAll(\"[msallowcapture^='']\").length&&q.push(\"[*^$]=\"+L+\"*(?:''|\\\"\\\")\"),a.querySelectorAll(\"[selected]\").length||q.push(\"\\\\[\"+L+\"*(?:value|\"+K+\")\"),a.querySelectorAll(\"[id~=\"+u+\"-]\").length||q.push(\"~=\"),a.querySelectorAll(\":checked\").length||q.push(\":checked\"),a.querySelectorAll(\"a#\"+u+\"+*\").length||q.push(\".#.+[+~]\")}),ia(function(a){var b=n.createElement(\"input\");b.setAttribute(\"type\",\"hidden\"),a.appendChild(b).setAttribute(\"name\",\"D\"),a.querySelectorAll(\"[name=d]\").length&&q.push(\"name\"+L+\"*[*^$|!~]?=\"),a.querySelectorAll(\":enabled\").length||q.push(\":enabled\",\":disabled\"),a.querySelectorAll(\"*,:x\"),q.push(\",.*:\")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,\"div\"),s.call(a,\"[s!='']:x\"),r.push(\"!=\",O)}),q=q.length&&new RegExp(q.join(\"|\")),r=r.length&&new RegExp(r.join(\"|\")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,\"='$1']\"),c.matchesSelector&&p&&!A[b+\" \"]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error(\"Syntax error, unrecognized expression: \"+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c=\"\",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if(\"string\"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{\">\":{dir:\"parentNode\",first:!0},\" \":{dir:\"parentNode\"},\"+\":{dir:\"previousSibling\",first:!0},\"~\":{dir:\"previousSibling\"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||\"\").replace(ba,ca),\"~=\"===a[2]&&(a[3]=\" \"+a[3]+\" \"),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),\"nth\"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*(\"even\"===a[3]||\"odd\"===a[3])),a[5]=+(a[7]+a[8]||\"odd\"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||\"\":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(\")\",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return\"*\"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+\" \"];return b||(b=new RegExp(\"(^|\"+L+\")\"+a+\"(\"+L+\"|$)\"))&&y(a,function(a){return b.test(\"string\"==typeof a.className&&a.className||\"undefined\"!=typeof a.getAttribute&&a.getAttribute(\"class\")||\"\")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?\"!=\"===b:b?(e+=\"\",\"=\"===b?e===c:\"!=\"===b?e!==c:\"^=\"===b?c&&0===e.indexOf(c):\"*=\"===b?c&&e.indexOf(c)>-1:\"$=\"===b?c&&e.slice(-c.length)===c:\"~=\"===b?(\" \"+e.replace(P,\" \")+\" \").indexOf(c)>-1:\"|=\"===b?e===c||e.slice(0,c.length+1)===c+\"-\":!1):!0}},CHILD:function(a,b,c,d,e){var f=\"nth\"!==a.slice(0,3),g=\"last\"!==a.slice(-4),h=\"of-type\"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?\"nextSibling\":\"previousSibling\",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p=\"only\"===a&&!o&&\"nextSibling\"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error(\"unsupported pseudo: \"+a);return e[u]?e(b):e.length>1?(c=[a,a,\"\",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,\"$1\"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||\"\")||fa.error(\"unsupported lang: \"+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute(\"xml:lang\")||b.getAttribute(\"lang\"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+\"-\");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return\"input\"===b&&!!a.checked||\"option\"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return\"input\"===b&&\"button\"===a.type||\"button\"===b},text:function(a){var b;return\"input\"===a.nodeName.toLowerCase()&&\"text\"===a.type&&(null==(b=a.getAttribute(\"type\"))||\"text\"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+\" \"];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q,\" \")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d=\"\";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&\"parentNode\"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||\"*\",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[\" \"],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:\" \"===a[i-2].type?\"*\":\"\"})).replace(Q,\"$1\"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s=\"0\",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG(\"*\",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+\" \"];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n=\"function\"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&\"ID\"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split(\"\").sort(B).join(\"\")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement(\"div\"))}),ia(function(a){return a.innerHTML=\"<a href='#'></a>\",\"#\"===a.firstChild.getAttribute(\"href\")})||ja(\"type|href|height|width\",function(a,b,c){return c?void 0:a.getAttribute(b,\"type\"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML=\"<input/>\",a.firstChild.setAttribute(\"value\",\"\"),\"\"===a.firstChild.getAttribute(\"value\")})||ja(\"value\",function(a,b,c){return c||\"input\"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute(\"disabled\")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[\":\"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\\w-]+)\\s*\\/?>(?:<\\/\\1>|)$/,y=/^.[^:#\\[\\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if(\"string\"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=\":not(\"+a+\")\"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if(\"string\"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+\" \"+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,\"string\"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\\s*(<[\\w\\W]+>)[^>]*|#([\\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,\"string\"==typeof a){if(e=\"<\"===a[0]&&\">\"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||\"string\"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?\"string\"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,\"parentNode\")},parentsUntil:function(a,b,c){return u(a,\"parentNode\",c)},next:function(a){return F(a,\"nextSibling\")},prev:function(a){return F(a,\"previousSibling\")},nextAll:function(a){return u(a,\"nextSibling\")},prevAll:function(a){return u(a,\"previousSibling\")},nextUntil:function(a,b,c){return u(a,\"nextSibling\",c)},prevUntil:function(a,b,c){return u(a,\"previousSibling\",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return\"Until\"!==a.slice(-5)&&(d=c),d&&\"string\"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a=\"string\"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:\"\")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&\"string\"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c=\"\",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=\"\"),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[[\"resolve\",\"done\",n.Callbacks(\"once memory\"),\"resolved\"],[\"reject\",\"fail\",n.Callbacks(\"once memory\"),\"rejected\"],[\"notify\",\"progress\",n.Callbacks(\"memory\")]],c=\"pending\",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+\"With\"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+\"With\"](this===e?d:this,arguments),this},e[f[0]+\"With\"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler(\"ready\"),n(d).off(\"ready\"))))}});function J(){d.removeEventListener(\"DOMContentLoaded\",J),a.removeEventListener(\"load\",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),\"complete\"===d.readyState||\"loading\"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener(\"DOMContentLoaded\",J),a.addEventListener(\"load\",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if(\"object\"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if(\"string\"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&\"string\"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\\{[\\w\\W]*\\}|\\[[\\w\\W]*\\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d=\"data-\"+b.replace(Q,\"-$&\").toLowerCase(),c=a.getAttribute(d),\"string\"==typeof c){try{c=\"true\"===c?!0:\"false\"===c?!1:\"null\"===c?null:+c+\"\"===c?+c:P.test(c)?n.parseJSON(c):c;\r\n}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,\"hasDataAttrs\"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf(\"data-\")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,\"hasDataAttrs\",!0)}return e}return\"object\"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,\"-$&\").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf(\"-\")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||\"fx\")+\"queue\",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||\"fx\";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};\"inprogress\"===e&&(e=c.shift(),d--),e&&(\"fx\"===b&&c.unshift(\"inprogress\"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+\"queueHooks\";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks(\"once memory\").add(function(){N.remove(a,[b+\"queue\",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return\"string\"!=typeof a&&(b=a,a=\"fx\",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),\"fx\"===a&&\"inprogress\"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||\"fx\",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};\"string\"!=typeof a&&(b=a,a=void 0),a=a||\"fx\";while(g--)c=N.get(f[g],a+\"queueHooks\"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)/.source,T=new RegExp(\"^(?:([+-])=|)(\"+S+\")([a-z%]*)$\",\"i\"),U=[\"Top\",\"Right\",\"Bottom\",\"Left\"],V=function(a,b){return a=b||a,\"none\"===n.css(a,\"display\")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,\"\")},i=h(),j=c&&c[3]||(n.cssNumber[b]?\"\":\"px\"),k=(n.cssNumber[b]||\"px\"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||\".5\",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\\w:-]+)/,Z=/^$|\\/(?:java|ecma)script/i,$={option:[1,\"<select multiple='multiple'>\",\"</select>\"],thead:[1,\"<table>\",\"</table>\"],col:[2,\"<table><colgroup>\",\"</colgroup></table>\"],tr:[2,\"<table><tbody>\",\"</tbody></table>\"],td:[3,\"<table><tbody><tr>\",\"</tr></tbody></table>\"],_default:[0,\"\",\"\"]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c=\"undefined\"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||\"*\"):\"undefined\"!=typeof a.querySelectorAll?a.querySelectorAll(b||\"*\"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],\"globalEval\",!b||N.get(b[c],\"globalEval\"))}var ba=/<|&#?\\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if(\"object\"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement(\"div\")),h=(Y.exec(f)||[\"\",\"\"])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=\"\"}else m.push(b.createTextNode(f));l.textContent=\"\",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),\"script\"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||\"\")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement(\"div\")),c=d.createElement(\"input\");c.setAttribute(\"type\",\"radio\"),c.setAttribute(\"checked\",\"checked\"),c.setAttribute(\"name\",\"t\"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML=\"<textarea>x</textarea>\",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if(\"object\"==typeof b){\"string\"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&(\"string\"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return\"undefined\"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||\"\").match(G)||[\"\"],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||\"\").split(\".\").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(\".\")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||\"\").match(G)||[\"\"],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||\"\").split(\".\").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp(\"(^|\\\\.)\"+p.join(\"\\\\.(?:.*\\\\.|)\")+\"(\\\\.|$)\"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&(\"**\"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,\"handle events\")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,\"events\")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(\"click\"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||\"click\"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+\" \",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:\"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which\".split(\" \"),fixHooks:{},keyHooks:{props:\"char charCode key keyCode\".split(\" \"),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:\"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement\".split(\" \"),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:\"focusin\"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:\"focusout\"},click:{trigger:function(){return\"checkbox\"===this.type&&this.click&&n.nodeName(this,\"input\")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,\"a\")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:\"mouseover\",mouseleave:\"mouseout\",pointerenter:\"pointerover\",pointerleave:\"pointerout\"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+\".\"+d.namespace:d.origType,d.selector,d.handler),this;if(\"object\"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&\"function\"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:-]+)[^>]*)\\/>/gi,la=/<script|<style|<link/i,ma=/checked\\s*(?:[^=]|=\\s*.checked.)/i,na=/^true\\/(.*)/,oa=/^\\s*<!(?:\\[CDATA\\[|--)|(?:\\]\\]|--)>\\s*$/g;function pa(a,b){return n.nodeName(a,\"table\")&&n.nodeName(11!==b.nodeType?b:b.firstChild,\"tr\")?a.getElementsByTagName(\"tbody\")[0]||a.appendChild(a.ownerDocument.createElement(\"tbody\")):a}function qa(a){return a.type=(null!==a.getAttribute(\"type\"))+\"/\"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute(\"type\"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();\"input\"===c&&X.test(a.type)?b.checked=a.checked:\"input\"!==c&&\"textarea\"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&\"string\"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,\"script\"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,\"script\"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||\"\")&&!N.access(j,\"globalEval\")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,\"\")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,\"script\")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,\"<$1></$2>\")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,\"script\"),g.length>0&&aa(g,!i&&_(a,\"script\")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent=\"\");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if(\"string\"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||[\"\",\"\"])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:\"append\",prependTo:\"prepend\",insertBefore:\"before\",insertAfter:\"after\",replaceAll:\"replaceWith\"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:\"block\",BODY:\"block\"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],\"display\");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),\"none\"!==c&&c||(wa=(wa||n(\"<iframe frameborder='0' width='0' height='0'/>\")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp(\"^(\"+S+\")(?!px)[a-z%]+$\",\"i\"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement(\"div\"),h=d.createElement(\"div\");if(h.style){h.style.backgroundClip=\"content-box\",h.cloneNode(!0).style.backgroundClip=\"\",l.clearCloneStyle=\"content-box\"===h.style.backgroundClip,g.style.cssText=\"border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute\",g.appendChild(h);function i(){h.style.cssText=\"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%\",h.innerHTML=\"\",Ea.appendChild(g);var d=a.getComputedStyle(h);b=\"1%\"!==d.top,f=\"2px\"===d.marginLeft,c=\"4px\"===d.width,h.style.marginRight=\"50%\",e=\"4px\"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement(\"div\"));return c.style.cssText=h.style.cssText=\"-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0\",c.style.marginRight=c.style.width=\"0\",h.style.width=\"1px\",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,\"\"!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+\"\":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:\"absolute\",visibility:\"hidden\",display:\"block\"},Ja={letterSpacing:\"0\",fontWeight:\"400\"},Ka=[\"Webkit\",\"O\",\"Moz\",\"ms\"],La=d.createElement(\"div\").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||\"px\"):b}function Oa(a,b,c,d,e){for(var f=c===(d?\"border\":\"content\")?4:\"width\"===b?1:0,g=0;4>f;f+=2)\"margin\"===c&&(g+=n.css(a,c+U[f],!0,e)),d?(\"content\"===c&&(g-=n.css(a,\"padding\"+U[f],!0,e)),\"margin\"!==c&&(g-=n.css(a,\"border\"+U[f]+\"Width\",!0,e))):(g+=n.css(a,\"padding\"+U[f],!0,e),\"padding\"!==c&&(g+=n.css(a,\"border\"+U[f]+\"Width\",!0,e)));return g}function Pa(a,b,c){var d=!0,e=\"width\"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g=\"border-box\"===n.css(a,\"boxSizing\",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?\"border\":\"content\"),d,f)+\"px\"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,\"olddisplay\"),c=d.style.display,b?(f[g]||\"none\"!==c||(d.style.display=\"\"),\"\"===d.style.display&&V(d)&&(f[g]=N.access(d,\"olddisplay\",za(d.nodeName)))):(e=V(d),\"none\"===c&&e||N.set(d,\"olddisplay\",e?c:n.css(d,\"display\"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&\"none\"!==d.style.display&&\"\"!==d.style.display||(d.style.display=b?f[g]||\"\":\"none\"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,\"opacity\");return\"\"===c?\"1\":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{\"float\":\"cssFloat\"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&\"get\"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,\"string\"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f=\"number\"),null!=c&&c===c&&(\"number\"===f&&(c+=e&&e[3]||(n.cssNumber[h]?\"\":\"px\")),l.clearCloneStyle||\"\"!==c||0!==b.indexOf(\"background\")||(i[b]=\"inherit\"),g&&\"set\"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&\"get\"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),\"normal\"===e&&b in Ja&&(e=Ja[b]),\"\"===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each([\"height\",\"width\"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,\"display\"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,\"border-box\"===n.css(a,\"boxSizing\",!1,f),f);return g&&(e=T.exec(c))&&\"px\"!==(e[3]||\"px\")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,\"marginLeft\"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+\"px\":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:\"inline-block\"},Fa,[a,\"marginRight\"]):void 0}),n.each({margin:\"\",padding:\"\",border:\"Width\"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f=\"string\"==typeof c?c.split(\" \"):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return\"boolean\"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?\"\":\"px\")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,\"\"),b&&\"auto\"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:\"swing\"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e[\"margin\"+c]=e[\"padding\"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners[\"*\"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,\"fxshow\");c.queue||(h=n._queueHooks(a,\"fx\"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,\"fx\").length||h.empty.fire()})})),1===a.nodeType&&(\"height\"in b||\"width\"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,\"display\"),k=\"none\"===j?N.get(a,\"olddisplay\")||za(a.nodeName):j,\"inline\"===k&&\"none\"===n.css(a,\"float\")&&(o.display=\"inline-block\")),c.overflow&&(o.overflow=\"hidden\",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||\"toggle\"===e,e===(p?\"hide\":\"show\")){if(\"show\"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))\"inline\"===(\"none\"===j?za(a.nodeName):j)&&(o.display=j);else{q?\"hidden\"in q&&(p=q.hidden):q=N.access(a,\"fxshow\",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,\"fxshow\");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start=\"width\"===d||\"height\"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&\"expand\"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{\"*\":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=[\"*\"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&\"object\"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:\"number\"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue=\"fx\"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css(\"opacity\",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,\"finish\"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return\"string\"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||\"fx\",[]),this.each(function(){var b=!0,e=null!=a&&a+\"queueHooks\",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||\"fx\"),this.each(function(){var b,c=N.get(this),d=c[a+\"queue\"],e=c[a+\"queueHooks\"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each([\"toggle\",\"show\",\"hide\"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||\"boolean\"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa(\"show\"),slideUp:Xa(\"hide\"),slideToggle:Xa(\"toggle\"),fadeIn:{opacity:\"show\"},fadeOut:{opacity:\"hide\"},fadeToggle:{opacity:\"toggle\"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||\"fx\",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement(\"input\"),b=d.createElement(\"select\"),c=b.appendChild(d.createElement(\"option\"));a.type=\"checkbox\",l.checkOn=\"\"!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement(\"input\"),a.value=\"t\",a.type=\"radio\",l.radioValue=\"t\"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return\"undefined\"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&\"set\"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+\"\"),c):e&&\"get\"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&\"radio\"===b&&n.nodeName(a,\"input\")){var c=a.value;return a.setAttribute(\"type\",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),\r\nvoid 0!==c?e&&\"set\"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&\"get\"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,\"tabindex\");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{\"for\":\"htmlFor\",\"class\":\"className\"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each([\"tabIndex\",\"readOnly\",\"maxLength\",\"cellSpacing\",\"cellPadding\",\"rowSpan\",\"colSpan\",\"useMap\",\"frameBorder\",\"contentEditable\"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\\t\\r\\n\\f]/g;function fb(a){return a.getAttribute&&a.getAttribute(\"class\")||\"\"}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if(\"string\"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(\" \"+e+\" \").replace(eb,\" \")){g=0;while(f=b[g++])d.indexOf(\" \"+f+\" \")<0&&(d+=f+\" \");h=n.trim(d),e!==h&&c.setAttribute(\"class\",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr(\"class\",\"\");if(\"string\"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(\" \"+e+\" \").replace(eb,\" \")){g=0;while(f=b[g++])while(d.indexOf(\" \"+f+\" \")>-1)d=d.replace(\" \"+f+\" \",\" \");h=n.trim(d),e!==h&&c.setAttribute(\"class\",h)}}return this},toggleClass:function(a,b){var c=typeof a;return\"boolean\"==typeof b&&\"string\"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if(\"string\"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&\"boolean\"!==c||(b=fb(this),b&&N.set(this,\"__className__\",b),this.setAttribute&&this.setAttribute(\"class\",b||a===!1?\"\":N.get(this,\"__className__\")||\"\"))})},hasClass:function(a){var b,c,d=0;b=\" \"+a+\" \";while(c=this[d++])if(1===c.nodeType&&(\" \"+fb(c)+\" \").replace(eb,\" \").indexOf(b)>-1)return!0;return!1}});var gb=/\\r/g,hb=/[\\x20\\t\\r\\n\\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e=\"\":\"number\"==typeof e?e+=\"\":n.isArray(e)&&(e=n.map(e,function(a){return null==a?\"\":a+\"\"})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&\"set\"in b&&void 0!==b.set(this,e,\"value\")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&\"get\"in b&&void 0!==(c=b.get(e,\"value\"))?c:(c=e.value,\"string\"==typeof c?c.replace(gb,\"\"):null==c?\"\":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,\"value\");return null!=b?b:n.trim(n.text(a)).replace(hb,\" \")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f=\"select-one\"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute(\"disabled\"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,\"optgroup\"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each([\"radio\",\"checkbox\"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute(\"value\")?\"on\":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,\"type\")?b.type:b,r=k.call(b,\"namespace\")?b.namespace.split(\".\"):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(\".\")>-1&&(r=q.split(\".\"),q=r.shift(),r.sort()),l=q.indexOf(\":\")<0&&\"on\"+q,b=b[n.expando]?b:new n.Event(q,\"object\"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join(\".\"),b.rnamespace=b.namespace?new RegExp(\"(^|\\\\.)\"+r.join(\"\\\\.(?:.*\\\\.|)\")+\"(\\\\.|$)\"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,\"events\")||{})[b.type]&&N.get(h,\"handle\"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each(\"blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu\".split(\" \"),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin=\"onfocusin\"in a,l.focusin||n.each({focus:\"focusin\",blur:\"focusout\"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\\?/;n.parseJSON=function(a){return JSON.parse(a+\"\")},n.parseXML=function(b){var c;if(!b||\"string\"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,\"text/xml\")}catch(d){c=void 0}return c&&!c.getElementsByTagName(\"parsererror\").length||n.error(\"Invalid XML: \"+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \\t]*([^\\r\\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\\/\\//,sb={},tb={},ub=\"*/\".concat(\"*\"),vb=d.createElement(\"a\");vb.href=jb.href;function wb(a){return function(b,c){\"string\"!=typeof b&&(c=b,b=\"*\");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])\"+\"===d[0]?(d=d.slice(1)||\"*\",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return\"string\"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e[\"*\"]&&g(\"*\")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while(\"*\"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader(\"Content-Type\"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+\" \"+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if(\"*\"===f)f=i;else if(\"*\"!==i&&i!==f){if(g=j[i+\" \"+f]||j[\"* \"+f],!g)for(e in j)if(h=e.split(\" \"),h[1]===f&&(g=j[i+\" \"+h[0]]||j[\"* \"+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a[\"throws\"])b=g(b);else try{b=g(b)}catch(l){return{state:\"parsererror\",error:g?l:\"No conversion from \"+i+\" to \"+f}}}return{state:\"success\",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:\"GET\",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:\"application/x-www-form-urlencoded; charset=UTF-8\",accepts:{\"*\":ub,text:\"text/plain\",html:\"text/html\",xml:\"application/xml, text/xml\",json:\"application/json, text/javascript\"},contents:{xml:/\\bxml\\b/,html:/\\bhtml/,json:/\\bjson\\b/},responseFields:{xml:\"responseXML\",text:\"responseText\",json:\"responseJSON\"},converters:{\"* text\":String,\"text html\":!0,\"text json\":n.parseJSON,\"text xml\":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){\"object\"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks(\"once memory\"),s=m.statusCode||{},t={},u={},v=0,w=\"canceled\",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+\"\").replace(mb,\"\").replace(rb,jb.protocol+\"//\"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||\"*\").toLowerCase().match(G)||[\"\"],null==m.crossDomain){j=d.createElement(\"a\");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+\"//\"+vb.host!=j.protocol+\"//\"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&\"string\"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger(\"ajaxStart\"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?\"&\":\"?\")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,\"$1_=\"+kb++):f+(lb.test(f)?\"&\":\"?\")+\"_=\"+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader(\"If-Modified-Since\",n.lastModified[f]),n.etag[f]&&x.setRequestHeader(\"If-None-Match\",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader(\"Content-Type\",m.contentType),x.setRequestHeader(\"Accept\",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+(\"*\"!==m.dataTypes[0]?\", \"+ub+\"; q=0.01\":\"\"):m.accepts[\"*\"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w=\"abort\";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger(\"ajaxSend\",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort(\"timeout\")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,\"No Transport\");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||\"\",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader(\"Last-Modified\"),w&&(n.lastModified[f]=w),w=x.getResponseHeader(\"etag\"),w&&(n.etag[f]=w)),204===b||\"HEAD\"===m.type?y=\"nocontent\":304===b?y=\"notmodified\":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y=\"error\",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+\"\",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?\"ajaxSuccess\":\"ajaxError\",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger(\"ajaxComplete\",[x,m]),--n.active||n.event.trigger(\"ajaxStop\")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,\"json\")},getScript:function(a,b){return n.get(a,void 0,b,\"script\")}}),n.each([\"get\",\"post\"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:\"GET\",dataType:\"script\",async:!1,global:!1,\"throws\":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,\"body\")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\\[\\]$/,Db=/\\r?\\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+\"[\"+(\"object\"==typeof e&&null!=e?b:\"\")+\"]\",e,c,d)});else if(c||\"object\"!==n.type(b))d(a,b);else for(e in b)Gb(a+\"[\"+e+\"]\",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?\"\":b,d[d.length]=encodeURIComponent(a)+\"=\"+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join(\"&\").replace(Bb,\"+\")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,\"elements\");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(\":disabled\")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,\"\\r\\n\")}}):{name:b.name,value:c.replace(Db,\"\\r\\n\")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&\"withCredentials\"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e[\"X-Requested-With\"]||(e[\"X-Requested-With\"]=\"XMLHttpRequest\");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,\"abort\"===a?h.abort():\"error\"===a?\"number\"!=typeof h.status?f(0,\"error\"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,\"text\"!==(h.responseType||\"text\")||\"string\"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c(\"error\"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c(\"abort\");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:\"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript\"},contents:{script:/\\b(?:java|ecma)script\\b/},converters:{\"text script\":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter(\"script\",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type=\"GET\")}),n.ajaxTransport(\"script\",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n(\"<script>\").prop({charset:a.scriptCharset,src:a.url}).on(\"load error\",c=function(a){b.remove(),c=null,a&&f(\"error\"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\\?(?=&|$)|\\?\\?/;n.ajaxSetup({jsonp:\"callback\",jsonpCallback:function(){var a=Jb.pop()||n.expando+\"_\"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter(\"json jsonp\",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?\"url\":\"string\"==typeof b.data&&0===(b.contentType||\"\").indexOf(\"application/x-www-form-urlencoded\")&&Kb.test(b.data)&&\"data\");return h||\"jsonp\"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,\"$1\"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?\"&\":\"?\")+b.jsonp+\"=\"+e),b.converters[\"script json\"]=function(){return g||n.error(e+\" was not called\"),g[0]},b.dataTypes[0]=\"json\",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),\"script\"):void 0}),n.parseHTML=function(a,b,c){if(!a||\"string\"!=typeof a)return null;\"boolean\"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if(\"string\"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(\" \");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&\"object\"==typeof b&&(e=\"POST\"),g.length>0&&n.ajax({url:a,type:e||\"GET\",dataType:\"html\",data:b}).done(function(a){f=arguments,g.html(d?n(\"<div>\").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each([\"ajaxStart\",\"ajaxStop\",\"ajaxComplete\",\"ajaxError\",\"ajaxSuccess\",\"ajaxSend\"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,\"position\"),l=n(a),m={};\"static\"===k&&(a.style.position=\"relative\"),h=l.offset(),f=n.css(a,\"top\"),i=n.css(a,\"left\"),j=(\"absolute\"===k||\"fixed\"===k)&&(f+i).indexOf(\"auto\")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),\"using\"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return\"fixed\"===n.css(c,\"position\")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],\"html\")||(d=a.offset()),d.top+=n.css(a[0],\"borderTopWidth\",!0),d.left+=n.css(a[0],\"borderLeftWidth\",!0)),{top:b.top-d.top-n.css(c,\"marginTop\",!0),left:b.left-d.left-n.css(c,\"marginLeft\",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&\"static\"===n.css(a,\"position\"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:\"pageXOffset\",scrollTop:\"pageYOffset\"},function(a,b){var c=\"pageYOffset\"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each([\"top\",\"left\"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+\"px\":c):void 0})}),n.each({Height:\"height\",Width:\"width\"},function(a,b){n.each({padding:\"inner\"+a,content:b,\"\":\"outer\"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||\"boolean\"!=typeof d),g=c||(d===!0||e===!0?\"margin\":\"border\");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement[\"client\"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body[\"scroll\"+a],e[\"scroll\"+a],b.body[\"offset\"+a],e[\"offset\"+a],e[\"client\"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,\"**\"):this.off(b,a||\"**\",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,\"function\"==typeof define&&define.amd&&define(\"jquery\",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});"

/***/ })
/******/ ]);
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_office_ui_fabric__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_office_ui_fabric___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lib_office_ui_fabric__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__install__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_svgicon__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_svgicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_svgicon__);




var OfficeUIFabricVue = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    Vue.prototype.$fabric = __WEBPACK_IMPORTED_MODULE_0__lib_office_ui_fabric___default.a;

    var svgs = options.svgs || null;

    /* eslint-disable */
    if (svgs !== null) {
      svgs.keys().forEach(function (key) {
        if (key === './index.js') return;
        __WEBPACK_IMPORTED_MODULE_2_vue_svgicon___default.a.register(svgs(key).default);
      });
    }
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__install__["a" /* default */])(Vue);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (OfficeUIFabricVue);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_breadcrumb__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_button__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_callout__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_checkbox__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_choice_field_group__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_command_bar__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_command_button__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_contextual_menu__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_date_picker__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dialog__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dropdown__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_icon__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_label__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_link__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_message_banner__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_message_bar__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_org_chart__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_overlay__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_panel__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_persona__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_pivot__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_progress_indicator__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_search_box__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_spinner__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_table__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_text_field__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_toggle__ = __webpack_require__(41);




























/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__components_breadcrumb__["a" /* default */])(Vue);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__components_button__["a" /* default */])(Vue);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__components_callout__["a" /* default */])(Vue);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__components_checkbox__["a" /* default */])(Vue);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__components_choice_field_group__["a" /* default */])(Vue);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__components_command_bar__["a" /* default */])(Vue);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__components_command_button__["a" /* default */])(Vue);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__components_contextual_menu__["a" /* default */])(Vue);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__components_date_picker__["a" /* default */])(Vue);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__components_dialog__["a" /* default */])(Vue);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__components_dropdown__["a" /* default */])(Vue);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__components_icon__["a" /* default */])(Vue);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__components_label__["a" /* default */])(Vue);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__components_link__["a" /* default */])(Vue);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__components_message_banner__["a" /* default */])(Vue);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__components_message_bar__["a" /* default */])(Vue);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__components_org_chart__["a" /* default */])(Vue);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_17__components_overlay__["a" /* default */])(Vue);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__components_panel__["a" /* default */])(Vue);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__components_persona__["a" /* default */])(Vue);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__components_pivot__["a" /* default */])(Vue);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_21__components_progress_indicator__["a" /* default */])(Vue);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__components_search_box__["a" /* default */])(Vue);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_23__components_spinner__["a" /* default */])(Vue);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_24__components_table__["a" /* default */])(Vue);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_25__components_text_field__["a" /* default */])(Vue);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_26__components_toggle__["a" /* default */])(Vue);
});

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/

module.exports = function mergeJSXProps (objs) {
  return objs.reduce(function (a, b) {
    var aa, bb, key, nestedKey, temp
    for (key in b) {
      aa = a[key]
      bb = b[key]
      if (aa && nestRE.test(key)) {
        // normalize class
        if (key === 'class') {
          if (typeof aa === 'string') {
            temp = aa
            a[key] = aa = {}
            aa[temp] = true
          }
          if (typeof bb === 'string') {
            temp = bb
            b[key] = bb = {}
            bb[temp] = true
          }
        }
        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
          // merge functions
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey])
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb)
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb)
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey]
          }
        }
      } else {
        a[key] = b[key]
      }
    }
    return a
  }, {})
}

function mergeFn (a, b) {
  return function () {
    a && a.apply(this, arguments)
    b && b.apply(this, arguments)
  }
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Breadcrumb_vue__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Breadcrumb_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Breadcrumb_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BreadcrumbItem_vue__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BreadcrumbItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__BreadcrumbItem_vue__);



/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__Breadcrumb_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__Breadcrumb_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_1__BreadcrumbItem_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_1__BreadcrumbItem_vue___default.a);
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button_vue__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Button_vue__);


/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__Button_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__Button_vue___default.a);
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Callout_vue__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Callout_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Callout_vue__);


/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__Callout_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__Callout_vue___default.a);
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Checkbox_vue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Checkbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Checkbox_vue__);


/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__Checkbox_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__Checkbox_vue___default.a);
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ChoiceFieldGroup_vue__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ChoiceFieldGroup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ChoiceFieldGroup_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ChoiceField_vue__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ChoiceField_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ChoiceField_vue__);



/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__ChoiceFieldGroup_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__ChoiceFieldGroup_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_1__ChoiceField_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_1__ChoiceField_vue___default.a);
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CommandBar_vue__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CommandBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__CommandBar_vue__);


/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__CommandBar_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__CommandBar_vue___default.a);
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CommandButton_vue__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CommandButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__CommandButton_vue__);


/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__CommandButton_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__CommandButton_vue___default.a);
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ContextualMenu_vue__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ContextualMenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ContextualMenu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ContextualMenuItem_vue__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ContextualMenuItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ContextualMenuItem_vue__);



/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__ContextualMenu_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__ContextualMenu_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_1__ContextualMenuItem_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_1__ContextualMenuItem_vue___default.a);
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DatePicker_vue__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DatePicker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__DatePicker_vue__);


/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__DatePicker_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__DatePicker_vue___default.a);
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dialog_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dialog_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Dialog_vue__);


/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__Dialog_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__Dialog_vue___default.a);
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dropdown_vue__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dropdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Dropdown_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DropdownItem_vue__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DropdownItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__DropdownItem_vue__);



/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__Dropdown_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__Dropdown_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_1__DropdownItem_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_1__DropdownItem_vue___default.a);
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Icon_vue__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Icon_vue__);


/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__Icon_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__Icon_vue___default.a);
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Label_vue__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Label_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Label_vue__);


/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__Label_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__Label_vue___default.a);
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Link_vue__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Link_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Link_vue__);


/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__Link_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__Link_vue___default.a);
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MessageBanner_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MessageBanner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__MessageBanner_vue__);


/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__MessageBanner_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__MessageBanner_vue___default.a);
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MessageBar_vue__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MessageBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__MessageBar_vue__);


/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__MessageBar_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__MessageBar_vue___default.a);
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OrgChart_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OrgChart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__OrgChart_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__OrgChartGroup_vue__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__OrgChartGroup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__OrgChartGroup_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OrgChartGroupItem_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OrgChartGroupItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__OrgChartGroupItem_vue__);




/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__OrgChart_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__OrgChart_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_1__OrgChartGroup_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_1__OrgChartGroup_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_2__OrgChartGroupItem_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_2__OrgChartGroupItem_vue___default.a);
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Overlay_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Overlay_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Overlay_vue__);


/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__Overlay_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__Overlay_vue___default.a);
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Panel_vue__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Panel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Panel_vue__);


/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__Panel_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__Panel_vue___default.a);
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Persona_vue__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Persona_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Persona_vue__);


/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__Persona_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__Persona_vue___default.a);
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Pivot_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Pivot_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Pivot_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PivotItem_vue__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PivotItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__PivotItem_vue__);



/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__Pivot_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__Pivot_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_1__PivotItem_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_1__PivotItem_vue___default.a);
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProgressIndicator_vue__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProgressIndicator_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ProgressIndicator_vue__);


/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__ProgressIndicator_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__ProgressIndicator_vue___default.a);
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SearchBox_vue__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SearchBox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__SearchBox_vue__);


/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__SearchBox_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__SearchBox_vue___default.a);
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Spinner_vue__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Spinner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Spinner_vue__);


/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__Spinner_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__Spinner_vue___default.a);
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Table_vue__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Table_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TableColumn_vue__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TableColumn_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__TableColumn_vue__);



/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__Table_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__Table_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_1__TableColumn_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_1__TableColumn_vue___default.a);
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TextField_vue__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TextField_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__TextField_vue__);


/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__TextField_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__TextField_vue___default.a);
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Toggle_vue__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Toggle_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Toggle_vue__);


/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__Toggle_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__Toggle_vue___default.a);
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-breadcrumb',

  mounted: function mounted() {
    new this.$fabric.Breadcrumb(this.$refs.breadcrumb);
  }
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-breadcrumb-item',

  props: {
    href: String
  }
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_props_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_props_disabled__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_props_icon__ = __webpack_require__(7);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-button',

  mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mixins_props_type__["a" /* default */])('primary', 'hero', 'compound', 'small'), __WEBPACK_IMPORTED_MODULE_1__mixins_props_disabled__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_props_icon__["a" /* default */]],

  props: {
    description: String
  },

  computed: {
    buttonClass: function buttonClass() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, 'ms-Button--' + this.type, !!this.type), _defineProperty(_ref, 'is-disabled', this.disabled), _ref;
    }
  },

  methods: {
    clickEvent: function clickEvent() {
      if (!this.disabled) {
        this.$emit('click');
      }
    }
  }
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_props_type__ = __webpack_require__(1);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-callout',

  mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mixins_props_type__["a" /* default */])('actionText', 'OOBE', 'peek')],

  props: {
    position: {
      type: String,
      default: 'right',
      validator: function validator(value) {
        return ['right', 'left', 'top', 'bottom'].includes(value);
      }
    },

    showClose: {
      type: Boolean,
      default: false
    },

    title: String,
    content: String
  },

  computed: {
    calloutClass: function calloutClass() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, 'ms-Callout--' + this.type, !!this.type), _defineProperty(_ref, 'ms-Callout--close', this.showClose), _ref;
    }
  },

  mounted: function mounted() {
    new this.$fabric.Callout(this.$refs.callout, this.$refs.calloutTrigger, this.position);
  }
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_props_disabled__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-checkbox',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_props_disabled__["a" /* default */]],

  props: {
    value: Boolean
  },

  data: function data() {
    return {
      checkboxInstance: null
    };
  },


  watch: {
    value: function value() {
      this.setCheck();
    }
  },

  mounted: function mounted() {
    this.checkboxInstance = new this.$fabric.CheckBox(this.$refs.checkbox);
    this.setCheck();
  },


  methods: {
    toggle: function toggle() {
      this.$emit('input', this.checkboxInstance.getValue());
    },
    setCheck: function setCheck() {
      this.value && !this.disabled ? this.checkboxInstance.check() : this.checkboxInstance.unCheck();
    }
  }
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_props_disabled__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-choice-field',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_props_disabled__["a" /* default */]],

  inject: ['eventHub'],

  props: {
    value: [String, Number]
  },

  created: function created() {
    this.eventHub.$on('setChoiceField', this.setChoiceField);
  },
  beforeDestroy: function beforeDestroy() {
    this.eventHub.$off('setChoiceField', this.setChoiceField);
  },


  methods: {
    updateParentValue: function updateParentValue() {
      if (!this.disabled) {
        this.eventHub.$emit('updateValue', this.value);
      }
    },
    setChoiceField: function setChoiceField(value) {
      if (this.disabled) {
        return;
      }

      if (this.value == value) {
        this.$refs.radioLabel.classList.add('is-checked');
      } else {
        this.$refs.radioLabel.classList.remove('is-checked');
      }
    }
  }
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_eventHub__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-choice-field-group',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_eventHub__["a" /* default */]],

  props: {
    value: [String, Number]
  },

  watch: {
    value: function value() {
      this.setChoiceFields();
    }
  },

  created: function created() {
    this.eventHub.$on('updateValue', this.updateValue);
  },
  beforeDestroy: function beforeDestroy() {
    this.eventHub.$off('updateValue', this.updateValue);
  },
  mounted: function mounted() {
    this.setChoiceFields();
    new this.$fabric.ChoiceFieldGroup(this.$refs.choiceFieldGroup);
  },


  methods: {
    updateValue: function updateValue(value) {
      this.$emit('input', value);
    },
    setChoiceFields: function setChoiceFields() {
      if (typeof this.value != 'undefined') {
        this.eventHub.$emit('setChoiceField', this.value);
      }
    }
  }
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-command-bar',
  props: {
    svgSize: {
      type: Number,
      default: 20
    }
  },
  mounted: function mounted() {
    new this.$fabric.CommandBar(this.$refs.commandBar);
  }
});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_props_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_props_disabled__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_props_icon__ = __webpack_require__(7);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-command-button',

  mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mixins_props_type__["a" /* default */])('noLabel', 'inline', 'dropdown', 'dropdownNoLabel'), __WEBPACK_IMPORTED_MODULE_1__mixins_props_disabled__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_props_icon__["a" /* default */]],

  props: {
    iconType: String,
    active: Boolean,
    pivot: Boolean
  },

  computed: {
    hasDropdown: function hasDropdown() {
      return this.type === 'dropdown' || this.type === 'dropdownNoLabel';
    },
    commandButtonClass: function commandButtonClass() {
      var _ref;

      return _ref = {
        'ms-CommandButton--noLabel': this.type === 'noLabel',
        'ms-CommandButton--inline': this.type === 'inline',
        'ms-CommandButton--dropdown': this.type === 'dropdown'
      }, _defineProperty(_ref, 'ms-CommandButton--dropdown', this.type === 'dropdownNoLabel'), _defineProperty(_ref, 'ms-CommandButton--noLabel', this.type === 'dropdownNoLabel'), _defineProperty(_ref, 'ms-CommandButton--pivot', this.pivot), _defineProperty(_ref, 'is-disabled', this.disabled), _defineProperty(_ref, 'is-active', this.active && this.pivot), _ref;
    }
  },

  methods: {
    clickEvent: function clickEvent() {
      if (!this.disabled) {
        this.$emit('click');
      }
    }
  }
});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_props_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_eventHub__ = __webpack_require__(5);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-contextual-menu',

  mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mixins_props_type__["a" /* default */])('multiselect'), __WEBPACK_IMPORTED_MODULE_1__mixins_eventHub__["a" /* default */]],

  props: {
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    hasIcons: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    contextualMenuClass: function contextualMenuClass() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, 'ms-ContextualMenu--' + this.type, !!this.type), _defineProperty(_ref, 'ms-ContextualMenu--hasIcons', this.hasIcons), _ref;
    }
  },

  watch: {
    value: function value() {
      this.setChildrenValue();
    }
  },

  created: function created() {
    this.eventHub.$on('updateValue', this.updateValue);
  },
  mounted: function mounted() {
    this.setChildrenValue();

    new this.$fabric.ContextualMenu(this.$refs.contextualMenu, this.$refs.contextualMenuTrigger);
  },
  beforeDestroy: function beforeDestroy() {
    this.eventHub.$off('updateValue', this.updateValue);
  },


  methods: {
    setChildrenValue: function setChildrenValue() {
      if (this.type == 'multiselect') {
        this.eventHub.$emit('setSelected', this.value);
      }
    },
    updateValue: function updateValue(value) {
      if (this.type != 'multiselect') {
        return;
      }

      var newValue = void 0;

      if (this.value.includes(value)) {
        newValue = this.value.filter(function (item) {
          return item !== value;
        });
      } else {
        newValue = this.value.concat(value);
      }

      this.$emit('input', newValue);
    }
  }
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_props_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_props_disabled__ = __webpack_require__(2);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-contextual-menu-item',

  mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mixins_props_type__["a" /* default */])('divider', 'header', 'hasMenu'), __WEBPACK_IMPORTED_MODULE_1__mixins_props_disabled__["a" /* default */]],

  inject: ['eventHub'],

  data: function data() {
    return {
      selected: false
    };
  },


  props: {
    name: String,
    value: [String, Number],
    icon: String,
    iconType: {
      type: String,
      default: 'ms'
    }
  },

  computed: {
    hasLink: function hasLink() {
      return this.type == 'hasMenu' || this.type == '';
    },
    hasMenu: function hasMenu() {
      return this.type == 'hasMenu';
    },
    contextualMenuItemClass: function contextualMenuItemClass() {
      return _defineProperty({}, 'ms-ContextualMenu-item--' + this.type, !!this.type);
    },
    contextualMenuLinkClass: function contextualMenuLinkClass() {
      return {
        'is-disabled': this.disabled,
        'is-selected': this.selected
      };
    }
  },

  created: function created() {
    this.eventHub.$on('setSelected', this.setSelected);
  },
  beforeDestroy: function beforeDestroy() {
    this.eventHub.$off('setSelected', this.setSelected);
  },


  methods: {
    clickEvent: function clickEvent() {
      if (this.value) {
        this.eventHub.$emit('updateValue', this.value);
      } else if (!this.type && !this.disabled) {
        this.$emit('click');
      }
    },
    setSelected: function setSelected(values) {
      if (values.includes(this.value)) {
        this.selected = true;
      } else {
        this.selected = false;
      }
    }
  }
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-date-picker',

  props: {
    value: String,
    label: String,
    placeholder: String,

    format: {
      type: String,
      default: 'yyyy-mm-dd'
    }
  },

  data: function data() {
    return {
      datePickerInstance: null
    };
  },


  watch: {
    value: function value(_value) {
      this.setPickerValue(_value);
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.datePickerInstance = new this.$fabric.DatePicker(this.$refs.datePicker).picker;

    if (this.value) {
      this.setPickerValue(this.value);
    }

    this.datePickerInstance.on('set', function () {
      _this.updateValue(_this.datePickerInstance.get('select', _this.format));
    });
  },


  methods: {
    updateValue: function updateValue(value) {
      this.$emit('input', value);
    },
    setPickerValue: function setPickerValue(value) {
      this.datePickerInstance.set('select', value, { format: this.format });
    }
  }
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_props_type__ = __webpack_require__(1);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-dialog',

  mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mixins_props_type__["a" /* default */])('multiline', 'lgHeader', 'blocking', 'close')],

  props: {
    title: String,
    subText: String,

    value: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      dialogInstance: null
    };
  },


  computed: {
    dialogClass: function dialogClass() {
      return _defineProperty({}, 'ms-Dialog--' + this.type, !!this.type);
    }
  },

  watch: {
    value: function value(_value) {
      this.setDialogVisibility(_value);
    }
  },

  mounted: function mounted() {
    this.dialogInstance = new this.$fabric.Dialog(this.$refs.dialog);
    this.setDialogVisibility(this.value);
  },


  methods: {
    setDialogVisibility: function setDialogVisibility(value) {
      if (value) {
        this.dialogInstance.open();

        // Because the office ui fabric js don't support on_close or on_open event in dialog
        // component, So I have to write some hacking code to change the visible status when
        // click the overlay. Otherwise the visible status can't change, when click the overlay
        // to close the dialog.
        this.bindOverlayCloseEvent();
      } else if (this.isOpen()) {
        // Avoid to destroy overlay element twice, and get errors, so determine if the dialog
        // was opened before close it.
        this.dialogInstance.close();
      }
    },
    bindOverlayCloseEvent: function bindOverlayCloseEvent() {
      var _this = this;

      if (this.dialogInstance._overlay) {
        var overlayElement = this.dialogInstance._overlay.overlayElement;

        var closeOverlay = function closeOverlay() {
          overlayElement.removeEventListener('click', closeOverlay);
          _this.$emit('input', false);
        };

        overlayElement.addEventListener('click', closeOverlay);
      }
    },
    isOpen: function isOpen() {
      // When the dialog is shown, the dialog element add a class name of 'is-open',
      // So use this to determine the dialog if was opened.
      return this.$refs.dialog.classList.contains('is-open');
    },
    closeDialog: function closeDialog(event) {
      this.$emit('input', false);

      // Because the original close button element have the click event to close the dialog,
      // when I fire the click event, the original click event function will fire behind it,
      // So stop the original click event, when I fire the click event.
      event.stopImmediatePropagation();
    }
  }
});

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_props_disabled__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_eventHub__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-dropdown',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_props_disabled__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_eventHub__["a" /* default */]],

  props: {
    label: String,
    value: [String, Number],

    placeholder: {
      type: String,
      default: 'Please select'
    }
  },

  watch: {
    value: function value() {
      this.setSelectedItem();
    }
  },

  created: function created() {
    this.eventHub.$on('setSelectedStatus', this.setSelectedStatus);
  },
  beforeDestroy: function beforeDestroy() {
    this.eventHub.$off('setSelectedStatus', this.setSelectedStatus);
  },
  mounted: function mounted() {
    new this.$fabric.Dropdown(this.$refs.dropdown);

    this.setDropdownTitle(this.placeholder);
    this.setSelectedItem();
  },


  methods: {
    setDropdownTitle: function setDropdownTitle(title) {
      this.$refs.dropdown.querySelector('.ms-Dropdown-title').textContent = title;
    },


    // Because the office ui js dropdown component don't have selected class to set
    // selected dropdown item, So write some hack code to set dropdown item selected.
    // Maybe next version of office ui js will fix this problem, So this code sould be
    // rewrite.
    setSelectedItem: function setSelectedItem() {
      this.eventHub.$emit('setSelectedItem', this.value);
    },
    setSelectedStatus: function setSelectedStatus(content) {
      var _this = this;

      this.$refs.dropdown.querySelectorAll('.ms-Dropdown-item').forEach(function (item) {
        if (item.textContent == content) {
          item.classList.add('is-selected');
          _this.setDropdownTitle(content);
        } else {
          item.classList.remove('is-selected');
        }
      });
    },
    getCurrentSelected: function getCurrentSelected() {
      var dropdownSelect = this.$refs.dropdownSelect;
      this.$emit('input', dropdownSelect.options[dropdownSelect.selectedIndex].value);
    }
  }
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-dropdown-item',

  inject: ['eventHub'],

  props: {
    value: [String, Number]
  },

  created: function created() {
    this.eventHub.$on('setSelectedItem', this.setSelectedItem);
  },
  beforeDestroy: function beforeDestroy() {
    this.eventHub.$off('setSelectedItem', this.setSelectedItem);
  },


  methods: {
    setSelectedItem: function setSelectedItem(value) {
      if (value === this.value) {
        this.eventHub.$emit('setSelectedStatus', this.$slots.default[0].text);
      }
    }
  }
});

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_svgicon__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_svgicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_svgicon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_props_type__ = __webpack_require__(1);





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    svgicon: __WEBPACK_IMPORTED_MODULE_1_vue_svgicon___default.a
  },
  functional: true,
  mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__mixins_props_type__["a" /* default */])('ms', 'svg')],
  name: 'ou-icon',
  props: {
    name: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    svgClass: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'currentColor'
    },
    size: {
      type: Number,
      default: 20
    }
  },
  render: function render(h, ctx) {
    var data = ctx.data;
    var classes = {
      class: ['ms-Icon--' + ctx.props.icon, { 'ms-Icon--disabled': ctx.props.disabled }]
    };
    if (ctx.props.type === 'ms') {
      return h('i', __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{ 'class': 'ms-Icon' }, classes, data, {
        attrs: {
          'aria-hidden': 'true' }
      }]));
    } else {
      var size = ctx.props.size + 'px';
      var color = ctx.props.disabled ? '#a6a6a6' : ctx.props.color;
      return h(
        'i',
        { 'class': 'ms-Icon' },
        [h('svgicon', {
          attrs: {
            icon: ctx.props.icon,
            width: size,
            height: size,
            color: color
          },
          'class': ctx.props.svgClass
        })]
      );
    }
  }
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_props_disabled__ = __webpack_require__(2);
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-label',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_props_disabled__["a" /* default */]],

  props: {
    required: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    labelClass: function labelClass() {
      return {
        'is-disabled': this.disabled,
        'is-required': this.required
      };
    }
  }
});

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-link',

  props: {
    href: String,
    title: String
  },

  methods: {
    clickEvent: function clickEvent() {
      this.$emit('click');
    }
  }
});

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-message-banner',

  mounted: function mounted() {
    new this.$fabric.MessageBanner(this.$refs.messageBanner);
  }
});

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_props_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_props_icon__ = __webpack_require__(7);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-message-bar',

  mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mixins_props_type__["a" /* default */])('success', 'error', 'blocked', 'warning', 'severeWarning'), __WEBPACK_IMPORTED_MODULE_1__mixins_props_icon__["a" /* default */]],

  computed: {
    messageBarClass: function messageBarClass() {
      return _defineProperty({}, 'ms-MessageBar--' + this.type, !!this.type);
    }
  }
});

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-org-chart'
});

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-org-chart-group',
  props: {
    title: String
  }
});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-org-chart-group-item',

  methods: {
    clickEvent: function clickEvent() {
      this.$emit('click');
    }
  }
});

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_props_type__ = __webpack_require__(1);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-overlay',

  mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mixins_props_type__["a" /* default */])('dark')],

  props: {
    value: Boolean
  },

  data: function data() {
    return {
      overlayInstance: null
    };
  },


  watch: {
    value: function value() {
      this.setOverlayVisibility();
    }
  },

  computed: {
    overlayClass: function overlayClass() {
      return _defineProperty({}, 'ms-Overlay--' + this.type, !!this.type);
    }
  },

  mounted: function mounted() {
    this.overlayInstance = new this.$fabric.Overlay(this.$refs.overlay);

    this.setOverlayVisibility();
    this.bindOverlayCloseEvent();
  },


  methods: {
    setOverlayVisibility: function setOverlayVisibility() {
      this.value ? this.overlayInstance.show() : this.overlayInstance.hide();
    },
    bindOverlayCloseEvent: function bindOverlayCloseEvent() {
      var _this = this;

      // Because the overlay component don't have callback when overlay closed,
      // So add a click event when click the overlay to set the value to false
      var overlayElement = this.$refs.overlay;
      var closeOverlay = function closeOverlay() {
        _this.$emit('input', false);
      };

      overlayElement.addEventListener('click', closeOverlay);
    }
  }
});

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_props_size__ = __webpack_require__(8);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-panel',

  mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mixins_props_size__["a" /* default */])('md', 'lg', 'xl', 'xxl')],

  props: {
    value: Boolean,
    title: String,

    fixed: {
      type: Boolean,
      default: false
    },

    left: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      panelInstance: null
    };
  },


  watch: {
    value: function value() {
      this.setPanelVisibility();
    }
  },

  computed: {
    panelClass: function panelClass() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, 'ms-Panel--' + this.size, !!this.size), _defineProperty(_ref, 'ms-Panel--fixed', this.fixed), _defineProperty(_ref, 'ms-Panel--left', this.left), _ref;
    }
  },

  mounted: function mounted() {
    this.setPanelVisibility();
  },


  methods: {
    setPanelVisibility: function setPanelVisibility() {
      if (this.value) {
        this.panelInstance = new this.$fabric.Panel(this.$refs.panel);
        this.bindOverlayCloseEvent();
      } else if (this.panelInstance) {
        this.panelInstance.dismiss();
      }
    },


    // Because the office ui fabric js don't support on_close or on_open event in panel
    // component, So I have to write some hacking code to change the visible status when
    // click the overlay. Otherwise the visible status can't change, when click the overlay
    // to close the panel.
    bindOverlayCloseEvent: function bindOverlayCloseEvent() {
      var overlayElement = this.panelInstance.panelHost.overlay.overlayElement;
      overlayElement.addEventListener('click', this.closePanel);
    },
    closePanel: function closePanel() {
      this.$emit('input', false);

      // Because the panel overlay have event to fire dismiss method when click it to
      // close panel. To prevent fire the panel dismiss method again and raise some error,
      // so set the panelInstance to null
      this.panelInstance = null;
    }
  }
});

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_props_size__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_props_type__ = __webpack_require__(1);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Note: The FacePile Persona haven't create



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-persona',

  mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mixins_props_size__["a" /* default */])('tiny', 'xs', 'sm', 'lg', 'xl'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__mixins_props_type__["a" /* default */])('available', 'away', 'blocked', 'busy', 'dnd', 'offline')],

  data: function data() {
    if (this.initials) {
      var validateColor = ['blue', 'blueLight', 'blueDark', 'teal', 'greenLight', 'green', 'greenDark', 'magentaLight', 'magenta', 'purpleLight', 'purple', 'black', 'orange', 'red', 'redDark'];

      var initialsLetter = this.initials[0].toUpperCase();
      var initialsIndex = initialsLetter.charCodeAt() - 65;

      // get radom color from validateColor
      return {
        initialsColor: validateColor[Math.round(validateColor.length / 26 * initialsIndex)]
      };
    }

    return { initialsColor: '' };
  },


  props: {
    src: String,
    initials: String,
    primaryText: String,
    secondaryText: String,
    tertiaryText: String,
    optionalText: String
  },

  computed: {
    personaClass: function personaClass() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, 'ms-Persona--' + this.size, !!this.size), _defineProperty(_ref, 'ms-Persona--' + this.type, !!this.type), _ref;
    },
    initialsPersonaClass: function initialsPersonaClass() {
      return _defineProperty({}, 'ms-Persona-initials--' + this.initialsColor, !!this.initialsColor);
    },
    personaIconClass: function personaIconClass() {
      var icon = '';

      switch (this.type) {
        case 'available':
          icon = 'SkypeCheck';
          break;
        case 'away':
          icon = 'SkypeClock';
          break;
        case 'dnd':
          icon = 'SkypeMinus';
          break;
      }

      if (icon) {
        return 'ms-Icon--' + icon;
      }
    }
  }
});

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_props_size__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_props_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_eventHub__ = __webpack_require__(5);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-pivot',

  mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mixins_props_size__["a" /* default */])('large'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__mixins_props_type__["a" /* default */])('tabs'), __WEBPACK_IMPORTED_MODULE_2__mixins_eventHub__["a" /* default */]],

  data: function data() {
    return {
      pivotItems: []
    };
  },


  computed: {
    pivotClass: function pivotClass() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, 'ms-Pivot--' + this.size, !!this.size), _defineProperty(_ref, 'ms-Pivot--' + this.type, !!this.type), _ref;
    }
  },

  created: function created() {
    this.eventHub.$on('addPivotItem', this.addPivotItem);
  },
  beforeDestroy: function beforeDestroy() {
    this.eventHub.$off('addPivotItem', this.addPivotItem);
  },
  mounted: function mounted() {
    new this.$fabric.Pivot(this.$refs.pivot);
  },


  methods: {
    addPivotItem: function addPivotItem(label) {
      this.pivotItems.push(label);
    }
  }
});

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-pivot-item',

  inject: ['eventHub'],

  props: {
    label: {
      type: String,
      required: true
    }
  },

  beforeMount: function beforeMount() {
    this.eventHub.$emit('addPivotItem', this.label);
  }
});

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-progress-indicator',

  props: {
    name: String,
    description: String,

    percent: {
      type: Number,
      validator: function validator(value) {
        return value >= 0 && value <= 1;
      }
    }
  },

  data: function data() {
    return {
      progressIndicatorInstance: null
    };
  },


  watch: {
    percent: function percent() {
      this.setProgressIndicator();
    }
  },

  mounted: function mounted() {
    var progressIndicatorElement = this.$refs.progressIndicator;

    this.progressIndicatorInstance = new this.$fabric.ProgressIndicator(progressIndicatorElement);
    this.setProgressIndicator();
  },


  methods: {
    setProgressIndicator: function setProgressIndicator() {
      this.progressIndicatorInstance.setProgressPercent(this.percent);
    }
  }
});

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_props_type__ = __webpack_require__(1);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-search-box',

  mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mixins_props_type__["a" /* default */])('commandBar')],

  props: {
    value: String,
    placeholder: String,

    collapsed: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      hasValue: !!this.value
    };
  },


  computed: {
    searchBoxClass: function searchBoxClass() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, 'ms-SearchBox--' + this.type, !!this.type), _defineProperty(_ref, 'is-collapsed', this.collapsed), _ref;
    }
  },

  mounted: function mounted() {
    new this.$fabric.SearchBox(this.$refs.searchBox);
  },


  methods: {
    updateValue: function updateValue(event) {
      this.$emit('input', event.target.value);
    },
    clearValue: function clearValue() {
      this.$emit('input', '');
    }
  }
});

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_props_type__ = __webpack_require__(1);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-spinner',

  mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mixins_props_type__["a" /* default */])('large')],

  props: {
    label: String
  },

  computed: {
    spinnerClass: function spinnerClass() {
      return _defineProperty({}, 'ms-Spinner--' + this.type, !!this.type);
    }
  },

  mounted: function mounted() {
    new this.$fabric.Spinner(this.$refs.spinner);
  }
});

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_props_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_eventHub__ = __webpack_require__(5);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Note: The Selectable Table haven't create



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-table',

  mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mixins_props_type__["a" /* default */])('fixed'), __WEBPACK_IMPORTED_MODULE_1__mixins_eventHub__["a" /* default */]],

  props: {
    data: {
      type: Array,
      required: true
    },

    defaultValue: {
      type: [String, Number],
      default: ''
    }
  },

  data: function data() {
    return {
      tableColumnItems: []
    };
  },


  computed: {
    tableClass: function tableClass() {
      return _defineProperty({}, 'ms-Table--' + this.type, !!this.type);
    }
  },

  created: function created() {
    this.eventHub.$on('addTableColumnItems', this.addTableColumnItems);
  },
  beforeDestroy: function beforeDestroy() {
    this.eventHub.$off('addTableColumnItems', this.tableColumnItems);
  },


  methods: {
    addTableColumnItems: function addTableColumnItems(value) {
      this.tableColumnItems.push(value);
    }
  }
});

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-table-column',

  inject: ['eventHub'],

  props: {
    prop: {
      type: String,
      required: true
    }
  },

  beforeMount: function beforeMount() {
    this.eventHub.$emit('addTableColumnItems', this.prop);
  }
});

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_props_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_props_disabled__ = __webpack_require__(2);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-text-field',

  mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mixins_props_type__["a" /* default */])('multiline', 'underlined'), __WEBPACK_IMPORTED_MODULE_1__mixins_props_disabled__["a" /* default */]],

  props: {
    value: String,
    label: String,
    placeholder: String,
    inputType: {
      type: String,
      default: 'text',
      validator: function validator(value) {
        return ['text', 'password', 'file'].includes(value);
      }
    }
  },

  computed: {
    textFieldClass: function textFieldClass() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, 'ms-TextField--' + this.type, !!this.type), _defineProperty(_ref, 'is-disabled', this.disabled), _ref;
    }
  },

  mounted: function mounted() {
    new this.$fabric.TextField(this.$refs.textField);
  },


  methods: {
    updateValue: function updateValue(event) {
      this.$emit('input', event.target.value);
    }
  }
});

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_props_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_props_disabled__ = __webpack_require__(2);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ou-toggle',

  mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mixins_props_type__["a" /* default */])('textLeft'), __WEBPACK_IMPORTED_MODULE_1__mixins_props_disabled__["a" /* default */]],

  props: {
    value: Boolean,
    onLabel: String,
    offLabel: String,
    description: String
  },

  computed: {
    toggleClass: function toggleClass() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, 'ms-Toggle--' + this.type, !!this.type), _defineProperty(_ref, 'is-disabled', this.disabled), _ref;
    }
  },

  mounted: function mounted() {
    new this.$fabric.Toggle(this.$refs.toggle);
  },


  methods: {
    toggle: function toggle() {
      if (!this.disabled) {
        this.$emit('input', !this.value);
      }
    }
  }
});

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "\n.ms-Icon--disabled {\n  color: #a6a6a6;\n}\n", ""]);

// exports


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "\n.inline-block[data-v-f9a5f146] {\n  display: inline-block;\n}\n", ""]);

// exports


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(126),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/breadcrumb/Breadcrumb.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Breadcrumb.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-33cfbad4", Component.options)
  } else {
    hotAPI.reload("data-v-33cfbad4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(132),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/breadcrumb/BreadcrumbItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BreadcrumbItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6d3b5a87", Component.options)
  } else {
    hotAPI.reload("data-v-6d3b5a87", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(142),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/button/Button.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Button.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8998ca18", Component.options)
  } else {
    hotAPI.reload("data-v-8998ca18", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(122),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/callout/Callout.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Callout.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f3e5f16", Component.options)
  } else {
    hotAPI.reload("data-v-1f3e5f16", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(125),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/checkbox/Checkbox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Checkbox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-33580758", Component.options)
  } else {
    hotAPI.reload("data-v-33580758", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(47),
  /* template */
  __webpack_require__(116),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/choice_field_group/ChoiceField.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ChoiceField.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0f6d509e", Component.options)
  } else {
    hotAPI.reload("data-v-0f6d509e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(124),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/choice_field_group/ChoiceFieldGroup.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ChoiceFieldGroup.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-305213fe", Component.options)
  } else {
    hotAPI.reload("data-v-305213fe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(49),
  /* template */
  __webpack_require__(139),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/command_bar/CommandBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CommandBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c9e1bfa", Component.options)
  } else {
    hotAPI.reload("data-v-7c9e1bfa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(50),
  /* template */
  __webpack_require__(133),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/command_button/CommandButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CommandButton.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e6ea87f", Component.options)
  } else {
    hotAPI.reload("data-v-6e6ea87f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(151)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(51),
  /* template */
  __webpack_require__(147),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-f9a5f146",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/contextual_menu/ContextualMenu.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ContextualMenu.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f9a5f146", Component.options)
  } else {
    hotAPI.reload("data-v-f9a5f146", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(149)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(52),
  /* template */
  __webpack_require__(115),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/contextual_menu/ContextualMenuItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ContextualMenuItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-06c58ae0", Component.options)
  } else {
    hotAPI.reload("data-v-06c58ae0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(53),
  /* template */
  __webpack_require__(134),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/date_picker/DatePicker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DatePicker.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f2a27f7", Component.options)
  } else {
    hotAPI.reload("data-v-6f2a27f7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(54),
  /* template */
  __webpack_require__(136),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/dialog/Dialog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Dialog.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-71b11634", Component.options)
  } else {
    hotAPI.reload("data-v-71b11634", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(117),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/dropdown/Dropdown.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Dropdown.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0fdf9414", Component.options)
  } else {
    hotAPI.reload("data-v-0fdf9414", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(56),
  /* template */
  __webpack_require__(144),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/dropdown/DropdownItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DropdownItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c186d872", Component.options)
  } else {
    hotAPI.reload("data-v-c186d872", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(150)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(57),
  /* template */
  null,
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/icon/Icon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8bf95dd8", Component.options)
  } else {
    hotAPI.reload("data-v-8bf95dd8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(58),
  /* template */
  __webpack_require__(141),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/label/Label.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Label.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-894d1f44", Component.options)
  } else {
    hotAPI.reload("data-v-894d1f44", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(59),
  /* template */
  __webpack_require__(143),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/link/Link.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Link.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-95c1ec98", Component.options)
  } else {
    hotAPI.reload("data-v-95c1ec98", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(60),
  /* template */
  __webpack_require__(118),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/message_banner/MessageBanner.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MessageBanner.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-10f8d173", Component.options)
  } else {
    hotAPI.reload("data-v-10f8d173", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(61),
  /* template */
  __webpack_require__(131),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/message_bar/MessageBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MessageBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6605138b", Component.options)
  } else {
    hotAPI.reload("data-v-6605138b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(62),
  /* template */
  __webpack_require__(130),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/org_chart/OrgChart.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] OrgChart.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-607d9c1e", Component.options)
  } else {
    hotAPI.reload("data-v-607d9c1e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(63),
  /* template */
  __webpack_require__(127),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/org_chart/OrgChartGroup.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] OrgChartGroup.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e2ebc84", Component.options)
  } else {
    hotAPI.reload("data-v-4e2ebc84", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(64),
  /* template */
  __webpack_require__(138),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/org_chart/OrgChartGroupItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] OrgChartGroupItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c52bc71", Component.options)
  } else {
    hotAPI.reload("data-v-7c52bc71", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(65),
  /* template */
  __webpack_require__(145),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/overlay/Overlay.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Overlay.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d9897154", Component.options)
  } else {
    hotAPI.reload("data-v-d9897154", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(66),
  /* template */
  __webpack_require__(121),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/panel/Panel.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Panel.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1cc7ea7e", Component.options)
  } else {
    hotAPI.reload("data-v-1cc7ea7e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(67),
  /* template */
  __webpack_require__(137),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/persona/Persona.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Persona.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75e3260e", Component.options)
  } else {
    hotAPI.reload("data-v-75e3260e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(68),
  /* template */
  __webpack_require__(146),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/pivot/Pivot.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Pivot.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e8be2b0c", Component.options)
  } else {
    hotAPI.reload("data-v-e8be2b0c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(69),
  /* template */
  __webpack_require__(119),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/pivot/PivotItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PivotItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1400472d", Component.options)
  } else {
    hotAPI.reload("data-v-1400472d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(70),
  /* template */
  __webpack_require__(120),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/progress_indicator/ProgressIndicator.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ProgressIndicator.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-185b2fca", Component.options)
  } else {
    hotAPI.reload("data-v-185b2fca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(71),
  /* template */
  __webpack_require__(148),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/search_box/SearchBox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SearchBox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ff6c1f9a", Component.options)
  } else {
    hotAPI.reload("data-v-ff6c1f9a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(72),
  /* template */
  __webpack_require__(129),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/spinner/Spinner.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Spinner.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c16b0e8", Component.options)
  } else {
    hotAPI.reload("data-v-5c16b0e8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(73),
  /* template */
  __webpack_require__(128),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/table/Table.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Table.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b822492", Component.options)
  } else {
    hotAPI.reload("data-v-5b822492", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(74),
  /* template */
  __webpack_require__(123),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/table/TableColumn.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TableColumn.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-216a5588", Component.options)
  } else {
    hotAPI.reload("data-v-216a5588", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(75),
  /* template */
  __webpack_require__(135),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/text_field/TextField.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TextField.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-707fe5b1", Component.options)
  } else {
    hotAPI.reload("data-v-707fe5b1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(76),
  /* template */
  __webpack_require__(140),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/eSSD/Projects/Temp/js-office-ui-fabric-vue/src/components/toggle/Toggle.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Toggle.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-87479e98", Component.options)
  } else {
    hotAPI.reload("data-v-87479e98", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('li', {
    staticClass: "ms-ContextualMenu-item",
    class: _vm.contextualMenuItemClass
  }, [(_vm.type == 'header') ? _vm._c('span', [_vm._v(_vm._s(_vm.name))]) : _vm._e(), _vm._v(" "), (_vm.hasLink) ? _vm._c('a', {
    staticClass: "ms-ContextualMenu-link",
    class: _vm.contextualMenuLinkClass,
    on: {
      "click": _vm.clickEvent
    }
  }, [_vm._v("\n    " + _vm._s(_vm.name) + "\n  ")]) : _vm._e(), _vm._v(" "), (_vm.icon) ? _vm._c('ou-icon', {
    attrs: {
      "disabled": _vm.disabled,
      "icon": _vm.icon,
      "type": _vm.iconType
    }
  }) : _vm._e(), _vm._v(" "), (_vm.hasMenu) ? _vm._c('i', {
    staticClass: "ms-ContextualMenu-subMenuIcon ms-Icon ms-Icon--ChevronRight"
  }) : _vm._e(), _vm._v(" "), (_vm.hasMenu) ? _vm._c('ul', {
    staticClass: "ms-ContextualMenu is-hidden",
    class: {
      'ms-ContextualMenu--hasIcons': _vm.$parent.hasIcons
    }
  }, [_vm._t("default")], 2) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-06c58ae0", module.exports)
  }
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('li', {
    staticClass: "ms-RadioButton"
  }, [_vm._c('input', {
    staticClass: "ms-RadioButton-input",
    attrs: {
      "tabindex": "-1",
      "type": "radio"
    }
  }), _vm._v(" "), _vm._c('label', {
    ref: "radioLabel",
    staticClass: "ms-RadioButton-field",
    class: {
      'is-disabled': _vm.disabled
    },
    attrs: {
      "role": "radio",
      "tabindex": "0",
      "aria-checked": "false",
      "name": "choicefieldgroup"
    },
    on: {
      "click": _vm.updateParentValue
    }
  }, [_vm._c('span', {
    staticClass: "ms-Label"
  }, [_vm._t("default")], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0f6d509e", module.exports)
  }
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    ref: "dropdown",
    staticClass: "ms-Dropdown",
    class: {
      'is-disabled': _vm.disabled
    }
  }, [(_vm.label) ? _vm._c('label', {
    staticClass: "ms-Label"
  }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm._v(" "), _vm._c('i', {
    staticClass: "ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown"
  }), _vm._v(" "), _vm._c('select', {
    ref: "dropdownSelect",
    staticClass: "ms-Dropdown-select",
    on: {
      "change": _vm.getCurrentSelected
    }
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0fdf9414", module.exports)
  }
}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    ref: "messageBanner",
    staticClass: "ms-MessageBanner"
  }, [_vm._c('div', {
    staticClass: "ms-MessageBanner-content"
  }, [_vm._c('div', {
    staticClass: "ms-MessageBanner-text"
  }, [_vm._c('div', {
    staticClass: "ms-MessageBanner-clipper"
  }, [_vm._t("default")], 2)]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._c('div', {
    staticClass: "ms-MessageBanner-action"
  }, [_vm._t("actions")], 2)]), _vm._v(" "), _vm._m(1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('button', {
    staticClass: "ms-MessageBanner-expand"
  }, [_vm._c('i', {
    staticClass: "ms-Icon ms-Icon--ChevronDown"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('button', {
    staticClass: "ms-MessageBanner-close"
  }, [_vm._c('i', {
    staticClass: "ms-Icon ms-Icon--Clear"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-10f8d173", module.exports)
  }
}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ms-Pivot-content",
    attrs: {
      "data-content": _vm.label
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1400472d", module.exports)
  }
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    ref: "progressIndicator",
    staticClass: "ms-ProgressIndicator"
  }, [(_vm.name) ? _vm._c('div', {
    staticClass: "ms-ProgressIndicator-itemName"
  }, [_vm._v(_vm._s(_vm.name))]) : _vm._e(), _vm._v(" "), _vm._m(0), _vm._v(" "), (_vm.description) ? _vm._c('div', {
    staticClass: "ms-ProgressIndicator-itemDescription"
  }, [_vm._v(_vm._s(_vm.description))]) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ms-ProgressIndicator-itemProgress"
  }, [_vm._c('div', {
    staticClass: "ms-ProgressIndicator-progressTrack"
  }), _vm._v(" "), _vm._c('div', {
    staticClass: "ms-ProgressIndicator-progressBar"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-185b2fca", module.exports)
  }
}

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    ref: "panel",
    staticClass: "ms-Panel",
    class: _vm.panelClass
  }, [_vm._c('button', {
    staticClass: "ms-Panel-closeButton ms-PanelAction-close",
    on: {
      "click": _vm.closePanel
    }
  }, [_vm._c('i', {
    staticClass: "ms-Panel-closeIcon ms-Icon ms-Icon--Cancel"
  })]), _vm._v(" "), _vm._c('div', {
    staticClass: "ms-Panel-contentInner"
  }, [_vm._c('p', {
    staticClass: "ms-Panel-headerText"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _vm._c('div', {
    staticClass: "ms-Panel-content"
  }, [_vm._t("default")], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1cc7ea7e", module.exports)
  }
}

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', [_vm._c('div', {
    ref: "callout",
    staticClass: "ms-Callout is-hidden",
    class: _vm.calloutClass
  }, [_vm._c('div', {
    staticClass: "ms-Callout-main"
  }, [(_vm.showClose) ? _vm._c('button', {
    staticClass: "ms-Callout-close"
  }, [_vm._c('i', {
    staticClass: "ms-Icon ms-Icon--Clear"
  })]) : _vm._e(), _vm._v(" "), _vm._c('div', {
    staticClass: "ms-Callout-header"
  }, [_vm._c('p', {
    staticClass: "ms-Callout-title"
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _vm._c('div', {
    staticClass: "ms-Callout-inner"
  }, [_vm._c('div', {
    staticClass: "ms-Callout-content"
  }, [(_vm.content) ? _vm._c('p', {
    staticClass: "ms-Callout-subText"
  }, [_vm._v(_vm._s(_vm.content))]) : _vm._t("content")], 2), _vm._v(" "), _vm._c('div', {
    staticClass: "ms-Callout-actions"
  }, [_vm._t("actions")], 2)])])]), _vm._v(" "), _vm._c('span', {
    ref: "calloutTrigger"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1f3e5f16", module.exports)
  }
}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('th', [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-216a5588", module.exports)
  }
}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    ref: "choiceFieldGroup",
    staticClass: "ms-ChoiceFieldGroup",
    attrs: {
      "id": "choicefieldgroup",
      "role": "radiogroup"
    }
  }, [_vm._c('div', {
    staticClass: "ms-ChoiceFieldGroup-title"
  }, [_vm._t("title")], 2), _vm._v(" "), _vm._c('ul', {
    staticClass: "ms-ChoiceFieldGroup-list"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-305213fe", module.exports)
  }
}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    ref: "checkbox",
    staticClass: "ms-CheckBox"
  }, [_vm._c('input', {
    staticClass: "ms-CheckBox-input",
    attrs: {
      "tabindex": "-1",
      "type": "checkbox"
    },
    on: {
      "click": _vm.toggle
    }
  }), _vm._v(" "), _vm._c('label', {
    staticClass: "ms-CheckBox-field",
    class: {
      'is-disabled': _vm.disabled
    },
    attrs: {
      "role": "checkbox",
      "tabindex": "0",
      "aria-checked": "false",
      "name": "checkbox"
    }
  }, [_vm._c('span', {
    staticClass: "ms-Label"
  }, [_vm._t("default")], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-33580758", module.exports)
  }
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    ref: "breadcrumb",
    staticClass: "ms-Breadcrumb"
  }, [_vm._m(0), _vm._v(" "), _vm._c('ul', {
    staticClass: "ms-Breadcrumb-list"
  }, [_vm._t("default")], 2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ms-Breadcrumb-overflow"
  }, [_vm._c('div', {
    staticClass: "ms-Breadcrumb-overflowButton ms-Icon ms-Icon--More"
  }), _vm._v(" "), _vm._c('div', {
    staticClass: "ms-Breadcrumb-overflowMenu"
  }, [_vm._c('ul', {
    staticClass: "ms-ContextualMenu"
  })])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-33cfbad4", module.exports)
  }
}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ms-OrgChart-group"
  }, [_vm._c('div', {
    staticClass: "ms-OrgChart-groupTitle"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _vm._c('ul', {
    staticClass: "ms-OrgChart-list"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4e2ebc84", module.exports)
  }
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('table', {
    staticClass: "ms-Table",
    class: _vm.tableClass
  }, [_vm._c('thead', [_vm._c('tr', [_vm._t("default")], 2)]), _vm._v(" "), _vm._c('tbody', _vm._l((_vm.data), function(dataItem) {
    return _vm._c('tr', _vm._l((_vm.tableColumnItems), function(columnItem) {
      return _vm._c('td', [_vm._v("\n        " + _vm._s(dataItem[columnItem] || _vm.defaultValue) + "\n      ")])
    }))
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5b822492", module.exports)
  }
}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    ref: "spinner",
    staticClass: "ms-Spinner",
    class: _vm.spinnerClass
  }, [(_vm.label) ? _vm._c('div', {
    staticClass: "ms-Spinner-label"
  }, [_vm._v(_vm._s(_vm.label))]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5c16b0e8", module.exports)
  }
}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ms-OrgChart"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-607d9c1e", module.exports)
  }
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ms-MessageBar",
    class: _vm.messageBarClass
  }, [_vm._c('div', {
    staticClass: "ms-MessageBar-content"
  }, [(_vm.icon) ? _vm._c('div', {
    staticClass: "ms-MessageBar-icon"
  }, [_vm._c('i', {
    staticClass: "ms-Icon",
    class: _vm.iconClass
  })]) : _vm._e(), _vm._v(" "), _vm._c('div', {
    staticClass: "ms-MessageBar-text"
  }, [_vm._t("default")], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6605138b", module.exports)
  }
}

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('li', {
    staticClass: "ms-Breadcrumb-listItem"
  }, [_vm._c('a', {
    staticClass: "ms-Breadcrumb-itemLink",
    attrs: {
      "href": _vm.href
    }
  }, [_vm._t("default")], 2), _vm._v(" "), _vm._c('i', {
    staticClass: "ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight"
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6d3b5a87", module.exports)
  }
}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ms-CommandButton",
    class: _vm.commandButtonClass,
    on: {
      "click": _vm.clickEvent
    }
  }, [_vm._c('button', {
    staticClass: "ms-CommandButton-button"
  }, [(_vm.icon) ? _vm._c('span', {
    staticClass: "ms-CommandButton-icon ms-fontColor-themePrimary"
  }, [_vm._c('ou-icon', {
    attrs: {
      "size": _vm.$parent.svgSize,
      "icon": _vm.icon,
      "type": _vm.iconType
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm._c('span', {
    staticClass: "ms-CommandButton-label"
  }, [_vm._t("default")], 2), _vm._v(" "), (_vm.hasDropdown) ? _vm._c('span', {
    staticClass: "ms-CommandButton-dropdownIcon"
  }, [_vm._c('i', {
    staticClass: "ms-Icon ms-Icon--ChevronDown"
  })]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6e6ea87f", module.exports)
  }
}

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    ref: "datePicker",
    staticClass: "ms-DatePicker"
  }, [_vm._c('div', {
    staticClass: "ms-TextField"
  }, [(_vm.label) ? _vm._c('label', {
    staticClass: "ms-Label"
  }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm._v(" "), _vm._c('i', {
    staticClass: "ms-DatePicker-event ms-Icon ms-Icon--Event"
  }), _vm._v(" "), _vm._c('input', {
    staticClass: "ms-TextField-field",
    attrs: {
      "type": "text",
      "placeholder": _vm.placeholder
    }
  })]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._c('span', {
    staticClass: "ms-DatePicker-goToday js-goToday"
  }, [_vm._v("Go to today")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ms-DatePicker-monthComponents"
  }, [_vm._c('span', {
    staticClass: "ms-DatePicker-nextMonth js-nextMonth"
  }, [_vm._c('i', {
    staticClass: "ms-Icon ms-Icon--ChevronRight"
  })]), _vm._v(" "), _vm._c('span', {
    staticClass: "ms-DatePicker-prevMonth js-prevMonth"
  }, [_vm._c('i', {
    staticClass: "ms-Icon ms-Icon--ChevronLeft"
  })]), _vm._v(" "), _vm._c('div', {
    staticClass: "ms-DatePicker-headerToggleView js-showMonthPicker"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ms-DatePicker-monthPicker"
  }, [_vm._c('div', {
    staticClass: "ms-DatePicker-header"
  }, [_vm._c('div', {
    staticClass: "ms-DatePicker-yearComponents"
  }, [_vm._c('span', {
    staticClass: "ms-DatePicker-nextYear js-nextYear"
  }, [_vm._c('i', {
    staticClass: "ms-Icon ms-Icon--ChevronRight"
  })]), _vm._v(" "), _vm._c('span', {
    staticClass: "ms-DatePicker-prevYear js-prevYear"
  }, [_vm._c('i', {
    staticClass: "ms-Icon ms-Icon--ChevronLeft"
  })])]), _vm._v(" "), _vm._c('div', {
    staticClass: "ms-DatePicker-currentYear js-showYearPicker"
  })]), _vm._v(" "), _vm._c('div', {
    staticClass: "ms-DatePicker-optionGrid"
  }, [_vm._c('span', {
    staticClass: "ms-DatePicker-monthOption js-changeDate",
    attrs: {
      "data-month": "0"
    }
  }, [_vm._v("Jan")]), _vm._v(" "), _vm._c('span', {
    staticClass: "ms-DatePicker-monthOption js-changeDate",
    attrs: {
      "data-month": "1"
    }
  }, [_vm._v("Feb")]), _vm._v(" "), _vm._c('span', {
    staticClass: "ms-DatePicker-monthOption js-changeDate",
    attrs: {
      "data-month": "2"
    }
  }, [_vm._v("Mar")]), _vm._v(" "), _vm._c('span', {
    staticClass: "ms-DatePicker-monthOption js-changeDate",
    attrs: {
      "data-month": "3"
    }
  }, [_vm._v("Apr")]), _vm._v(" "), _vm._c('span', {
    staticClass: "ms-DatePicker-monthOption js-changeDate",
    attrs: {
      "data-month": "4"
    }
  }, [_vm._v("May")]), _vm._v(" "), _vm._c('span', {
    staticClass: "ms-DatePicker-monthOption js-changeDate",
    attrs: {
      "data-month": "5"
    }
  }, [_vm._v("Jun")]), _vm._v(" "), _vm._c('span', {
    staticClass: "ms-DatePicker-monthOption js-changeDate",
    attrs: {
      "data-month": "6"
    }
  }, [_vm._v("Jul")]), _vm._v(" "), _vm._c('span', {
    staticClass: "ms-DatePicker-monthOption js-changeDate",
    attrs: {
      "data-month": "7"
    }
  }, [_vm._v("Aug")]), _vm._v(" "), _vm._c('span', {
    staticClass: "ms-DatePicker-monthOption js-changeDate",
    attrs: {
      "data-month": "8"
    }
  }, [_vm._v("Sep")]), _vm._v(" "), _vm._c('span', {
    staticClass: "ms-DatePicker-monthOption js-changeDate",
    attrs: {
      "data-month": "9"
    }
  }, [_vm._v("Oct")]), _vm._v(" "), _vm._c('span', {
    staticClass: "ms-DatePicker-monthOption js-changeDate",
    attrs: {
      "data-month": "10"
    }
  }, [_vm._v("Nov")]), _vm._v(" "), _vm._c('span', {
    staticClass: "ms-DatePicker-monthOption js-changeDate",
    attrs: {
      "data-month": "11"
    }
  }, [_vm._v("Dec")])])])
},function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ms-DatePicker-yearPicker"
  }, [_vm._c('div', {
    staticClass: "ms-DatePicker-decadeComponents"
  }, [_vm._c('span', {
    staticClass: "ms-DatePicker-nextDecade js-nextDecade"
  }, [_vm._c('i', {
    staticClass: "ms-Icon ms-Icon--ChevronRight"
  })]), _vm._v(" "), _vm._c('span', {
    staticClass: "ms-DatePicker-prevDecade js-prevDecade"
  }, [_vm._c('i', {
    staticClass: "ms-Icon ms-Icon--ChevronLeft"
  })])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6f2a27f7", module.exports)
  }
}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    ref: "textField",
    staticClass: "ms-TextField",
    class: _vm.textFieldClass
  }, [_vm._c('label', {
    staticClass: "ms-Label"
  }, [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), (_vm.type == 'multiline') ? _vm._c('textarea', {
    staticClass: "ms-TextField-field",
    attrs: {
      "placeholder": _vm.placeholder,
      "type": "text",
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": _vm.updateValue
    }
  }) : _vm._c('input', {
    staticClass: "ms-TextField-field",
    attrs: {
      "placeholder": _vm.placeholder,
      "type": _vm.inputType,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": _vm.updateValue
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-707fe5b1", module.exports)
  }
}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    ref: "dialog",
    staticClass: "ms-Dialog",
    class: _vm.dialogClass
  }, [(_vm.type == 'close') ? _vm._c('button', {
    staticClass: "ms-Dialog-button ms-Dialog-buttonClose",
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._c('i', {
    staticClass: "ms-Icon ms-Icon--Cancel"
  })]) : _vm._e(), _vm._v(" "), _vm._c('div', {
    staticClass: "ms-Dialog-title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _vm._c('div', {
    staticClass: "ms-Dialog-content"
  }, [_vm._c('p', {
    staticClass: "ms-Dialog-subText"
  }, [_vm._v(_vm._s(_vm.subText))]), _vm._v(" "), _vm._t("default")], 2), _vm._v(" "), _vm._c('div', {
    staticClass: "ms-Dialog-actions"
  }, [_vm._t("actions")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-71b11634", module.exports)
  }
}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ms-Persona",
    class: _vm.personaClass
  }, [_vm._c('div', {
    staticClass: "ms-Persona-imageArea"
  }, [(!_vm.initials) ? _vm._c('img', {
    staticClass: "ms-Persona-image",
    attrs: {
      "src": _vm.src
    }
  }) : _vm._c('div', {
    staticClass: "ms-Persona-initials",
    class: _vm.initialsPersonaClass
  }, [_vm._v(_vm._s(_vm.initials.toUpperCase()))])]), _vm._v(" "), (_vm.type) ? _vm._c('div', {
    staticClass: "ms-Persona-presence"
  }, [_vm._c('i', {
    staticClass: "ms-Persona-presenceIcon ms-Icon",
    class: _vm.personaIconClass
  })]) : _vm._e(), _vm._v(" "), _vm._c('div', {
    staticClass: "ms-Persona-details"
  }, [_vm._c('div', {
    staticClass: "ms-Persona-primaryText"
  }, [_vm._v(_vm._s(_vm.primaryText))]), _vm._v(" "), _vm._c('div', {
    staticClass: "ms-Persona-secondaryText"
  }, [_vm._v(_vm._s(_vm.secondaryText))]), _vm._v(" "), _vm._c('div', {
    staticClass: "ms-Persona-tertiaryText"
  }, [_vm._v(_vm._s(_vm.tertiaryText))]), _vm._v(" "), _vm._c('div', {
    staticClass: "ms-Persona-optionalText"
  }, [_vm._v(_vm._s(_vm.optionalText))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-75e3260e", module.exports)
  }
}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('li', {
    staticClass: "ms-OrgChart-listItem"
  }, [_vm._c('button', {
    staticClass: "ms-OrgChart-listItemBtn",
    on: {
      "click": _vm.clickEvent
    }
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7c52bc71", module.exports)
  }
}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    ref: "commandBar",
    staticClass: "ms-CommandBar"
  }, [_vm._c('div', {
    staticClass: "ms-CommandBar-sideCommands"
  }, [_vm._t("side")], 2), _vm._v(" "), _vm._c('div', {
    staticClass: "ms-CommandBar-mainArea"
  }, [_vm._t("main"), _vm._v(" "), _vm._m(0)], 2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ms-CommandButton ms-CommandBar-overflowButton ms-CommandButton--noLabel"
  }, [_vm._c('button', {
    staticClass: "ms-CommandButton-button"
  }, [_vm._c('span', {
    staticClass: "ms-CommandButton-icon"
  }, [_vm._c('i', {
    staticClass: "ms-Icon ms-Icon--More"
  })]), _vm._v(" "), _vm._c('span', {
    staticClass: "ms-CommandButton-label"
  })]), _vm._v(" "), _vm._c('ul', {
    staticClass: "ms-ContextualMenu is-opened ms-ContextualMenu--hasIcons"
  }, [_vm._c('li', {
    staticClass: "ms-ContextualMenu-item"
  }, [_vm._c('a', {
    staticClass: "ms-ContextualMenu-link"
  }), _vm._v(" "), _vm._c('i', {
    staticClass: "ms-Icon ms-Icon--folder"
  })])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7c9e1bfa", module.exports)
  }
}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    ref: "toggle",
    staticClass: "ms-Toggle",
    class: _vm.toggleClass
  }, [(_vm.description) ? _vm._c('span', {
    staticClass: "ms-Toggle-description"
  }, [_vm._v("\n    " + _vm._s(_vm.description) + "\n  ")]) : _vm._e(), _vm._v(" "), _vm._c('input', {
    staticClass: "ms-Toggle-input",
    attrs: {
      "type": "checkbox"
    }
  }), _vm._v(" "), _vm._c('span', {
    staticClass: "ms-Toggle-trigger",
    on: {
      "click": _vm.toggle
    }
  }, [_vm._c('label', {
    ref: "toggleLabel",
    staticClass: "ms-Toggle-field",
    class: {
      'is-selected': _vm.value
    },
    attrs: {
      "tabindex": "0"
    }
  }, [_vm._c('span', {
    staticClass: "ms-Label ms-Label--off"
  }, [_vm._v(_vm._s(_vm.offLabel))]), _vm._v(" "), _vm._c('span', {
    staticClass: "ms-Label ms-Label--on"
  }, [_vm._v(_vm._s(_vm.onLabel))])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-87479e98", module.exports)
  }
}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('label', {
    staticClass: "ms-Label",
    class: _vm.labelClass
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-894d1f44", module.exports)
  }
}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('button', {
    staticClass: "ms-Button",
    class: _vm.buttonClass,
    on: {
      "click": _vm.clickEvent
    }
  }, [(_vm.icon && _vm.type == 'hero') ? _vm._c('span', {
    staticClass: "ms-Button-icon"
  }, [_vm._c('i', {
    staticClass: "ms-Icon",
    class: _vm.iconClass
  })]) : _vm._e(), _vm._v(" "), _vm._c('span', {
    staticClass: "ms-Button-label"
  }, [_vm._t("default")], 2), _vm._v(" "), (_vm.description && _vm.type == 'compound') ? _vm._c('span', {
    staticClass: "ms-Button-description"
  }, [_vm._v("\n    " + _vm._s(_vm.description) + "\n  ")]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8998ca18", module.exports)
  }
}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('a', {
    staticClass: "ms-Link",
    attrs: {
      "href": _vm.href,
      "title": _vm.title
    },
    on: {
      "click": _vm.clickEvent
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-95c1ec98", module.exports)
  }
}

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('option', {
    domProps: {
      "value": _vm.value
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c186d872", module.exports)
  }
}

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    ref: "overlay",
    staticClass: "ms-Overlay",
    class: _vm.overlayClass
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d9897154", module.exports)
  }
}

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    ref: "pivot",
    staticClass: "ms-Pivot",
    class: _vm.pivotClass
  }, [_vm._c('ul', {
    staticClass: "ms-Pivot-links"
  }, _vm._l((_vm.pivotItems), function(item, index) {
    return _vm._c('li', {
      staticClass: "ms-Pivot-link",
      class: {
        'is-selected': index == 0
      },
      attrs: {
        "tabindex": "1",
        "data-content": item,
        "title": item
      }
    }, [_vm._v("\n      " + _vm._s(item) + "\n    ")])
  })), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e8be2b0c", module.exports)
  }
}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "inline-block"
  }, [_vm._c('span', {
    ref: "contextualMenuTrigger",
    staticClass: "inline-block"
  }, [_vm._t("default")], 2), _vm._v(" "), _vm._c('ul', {
    ref: "contextualMenu",
    staticClass: "ms-ContextualMenu is-hidden",
    class: _vm.contextualMenuClass
  }, [_vm._t("list")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f9a5f146", module.exports)
  }
}

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    ref: "searchBox",
    staticClass: "ms-SearchBox",
    class: _vm.searchBoxClass
  }, [_vm._c('input', {
    ref: "searchBoxInput",
    staticClass: "ms-SearchBox-field",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": _vm.updateValue,
      "blur": _vm.clearValue
    }
  }), _vm._v(" "), _vm._c('label', {
    staticClass: "ms-SearchBox-label"
  }, [_vm._c('i', {
    staticClass: "ms-SearchBox-icon ms-Icon ms-Icon--Search"
  }), _vm._v(" "), (!_vm.hasValue) ? _vm._c('span', {
    staticClass: "ms-SearchBox-text"
  }, [_vm._v(_vm._s(_vm.placeholder))]) : _vm._e()]), _vm._v(" "), _vm._c('div', {
    staticClass: "ms-CommandButton ms-SearchBox-clear ms-CommandButton--noLabel",
    on: {
      "mousedown": _vm.clearValue
    }
  }, [_vm._m(0)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('button', {
    staticClass: "ms-CommandButton-button"
  }, [_vm._c('span', {
    staticClass: "ms-CommandButton-icon"
  }, [_vm._c('i', {
    staticClass: "ms-Icon ms-Icon--Clear"
  })]), _vm._v(" "), _vm._c('span', {
    staticClass: "ms-CommandButton-label"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ff6c1f9a", module.exports)
  }
}

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("115241bb", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-06c58ae0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ContextualMenuItem.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-06c58ae0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ContextualMenuItem.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("56dc4dab", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8bf95dd8\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Icon.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8bf95dd8\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Icon.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("36e3cb62", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f9a5f146\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ContextualMenu.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f9a5f146\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ContextualMenu.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 152 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 153 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
});