/******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _banner = __webpack_require__(1);

	var _banner2 = _interopRequireDefault(_banner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.log("Stuff");
	(0, _banner2.default)();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var falling = true;
	  var confetti = [document.querySelector('#squiggle'), document.querySelector('#half-circle'), document.querySelector('#circle')];
	  var colors = ["#c9caca", "#feef5c", "#ff9b69", "#fb3e34", "#05b051"];
	  // TweenLite.set("#anim-container",{perspective:600})
	  // TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"})

	  var total = 60;
	  var container = document.querySelector("#anim-container");
	  var width = container.innerWidth;
	  var height = window.innerHeight;

	  for (var i = 0; i < total; i++) {
	    var dot = confetti[Math.round(random(0, 2))].cloneNode(true);
	    dot.querySelector('path, circle').style.fill = colors[Math.round(random(0, 4))];
	    dot.id = "";
	    container.appendChild(dot);
	    TweenLite.set(dot, {
	      attr: { class: 'dot' },
	      x: random(0, width),
	      y: -450
	    });
	    animate(dot);
	  }
	  function random(min, max) {
	    return min + Math.random() * (max - min);
	  };
	  function animate(el) {
	    TweenMax.to(el, random(6, 15), {
	      y: height + 100,
	      ease: Linear.easeNone,
	      repeat: -1,
	      delay: -15
	    });
	    TweenMax.to(el, random(2, 8), {
	      rotation: random(0, 360),
	      //  rotationY:random(0,360),
	      repeat: -1,
	      yoyo: true,
	      ease: Sine.easeInOut,
	      delay: -5
	    });
	  };
	};

/***/ })
/******/ ]);