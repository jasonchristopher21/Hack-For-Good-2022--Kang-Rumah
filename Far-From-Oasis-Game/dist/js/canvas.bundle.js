/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background5.png":
/*!*********************************!*\
  !*** ./src/img/background5.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6e9cf5ca83aea0a4040eb60fab231477.png");

/***/ }),

/***/ "./src/img/frame1.png":
/*!****************************!*\
  !*** ./src/img/frame1.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2f74a854bbe8845be7c1e9ebfcafb348.png");

/***/ }),

/***/ "./src/img/frame2.png":
/*!****************************!*\
  !*** ./src/img/frame2.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "21ff3b419d63b1a2ec043b87a146913b.png");

/***/ }),

/***/ "./src/img/grass2.png":
/*!****************************!*\
  !*** ./src/img/grass2.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0770202ad10d7ece24d194b173becb81.png");

/***/ }),

/***/ "./src/img/ground.png":
/*!****************************!*\
  !*** ./src/img/ground.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1a7d5e03508861bab5af90b8a33f7911.png");

/***/ }),

/***/ "./src/img/hut.png":
/*!*************************!*\
  !*** ./src/img/hut.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "dc23a6502254bea3bb92b1fe8e96fab7.png");

/***/ }),

/***/ "./src/img/images.png":
/*!****************************!*\
  !*** ./src/img/images.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "dab0b112e85cf0d9c467a79a29c39270.png");

/***/ }),

/***/ "./src/img/objective1.png":
/*!********************************!*\
  !*** ./src/img/objective1.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4929f28c9801c25307728f045d78070f.png");

/***/ }),

/***/ "./src/img/objective2.png":
/*!********************************!*\
  !*** ./src/img/objective2.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f4277fc8c7db995b2481dde0456af397.png");

/***/ }),

/***/ "./src/img/well.png":
/*!**************************!*\
  !*** ./src/img/well.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3b360307930aa1045057289477c86876.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_images_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/images.png */ "./src/img/images.png");
/* harmony import */ var _img_ground_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/ground.png */ "./src/img/ground.png");
/* harmony import */ var _img_background5_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/background5.png */ "./src/img/background5.png");
/* harmony import */ var _img_grass2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/grass2.png */ "./src/img/grass2.png");
/* harmony import */ var _img_hut_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/hut.png */ "./src/img/hut.png");
/* harmony import */ var _img_well_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/well.png */ "./src/img/well.png");
/* harmony import */ var _img_frame1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/frame1.png */ "./src/img/frame1.png");
/* harmony import */ var _img_frame2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/frame2.png */ "./src/img/frame2.png");
/* harmony import */ var _img_objective1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/objective1.png */ "./src/img/objective1.png");
/* harmony import */ var _img_objective2_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/objective2.png */ "./src/img/objective2.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }











var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
var gravity = 0.5;
var isWaterCollected = false;

var StaticObject = /*#__PURE__*/function () {
  function StaticObject(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, StaticObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
  }

  _createClass(StaticObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return StaticObject;
}();

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 200,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.image = createImage(_img_frame1_png__WEBPACK_IMPORTED_MODULE_6__["default"]);
    this.width = 30;
    this.height = 30;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }, {
    key: "update",
    value: function update() {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.draw();
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = 20;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref3) {
    var x = _ref3.x,
        y = _ref3.y,
        image = _ref3.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = 20;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

var Obstacle = /*#__PURE__*/function () {
  function Obstacle(_ref4) {
    var x = _ref4.x,
        y = _ref4.y,
        image = _ref4.image;

    _classCallCheck(this, Obstacle);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Obstacle, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Obstacle;
}();

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

function init() {
  groundwidth = 990;
  player = new Player();
  platforms = [new Platform({
    x: 0,
    y: 550,
    image: createImage(_img_ground_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new Platform({
    x: groundwidth,
    y: 550,
    image: createImage(_img_ground_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new Platform({
    x: 2 * groundwidth,
    y: 550,
    image: createImage(_img_ground_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new Platform({
    x: 3 * groundwidth,
    y: 550,
    image: createImage(_img_ground_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new Platform({
    x: -1 * groundwidth,
    y: 550,
    image: createImage(_img_ground_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new Platform({
    x: 2 * groundwidth,
    y: 500,
    image: createImage(_img_grass2_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: -100,
    y: 550,
    image: createImage(_img_hut_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  })];
  genericObjects = [new GenericObject({
    x: -800,
    y: -1,
    image: createImage(_img_background5_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  })];
  obstacles = [new Obstacle({
    x: 3 * groundwidth,
    y: 500,
    image: createImage(_img_grass2_png__WEBPACK_IMPORTED_MODULE_3__["default"]),
    width: 100,
    height: 100
  })];
  keys = {
    right: {
      pressed: false
    },
    left: {
      pressed: false
    },
    up: {
      pressed: false
    }
  };
  scrollOffset = 0;
  haveStopped = true;
}

var groundwidth = 990;
var player = new Player();
var platforms = [new Platform({
  x: 0,
  y: 550,
  image: createImage(_img_ground_png__WEBPACK_IMPORTED_MODULE_1__["default"])
}), new Platform({
  x: groundwidth,
  y: 550,
  image: createImage(_img_ground_png__WEBPACK_IMPORTED_MODULE_1__["default"])
}), new Platform({
  x: 2 * groundwidth,
  y: 550,
  image: createImage(_img_ground_png__WEBPACK_IMPORTED_MODULE_1__["default"])
}), new Platform({
  x: 3 * groundwidth,
  y: 550,
  image: createImage(_img_ground_png__WEBPACK_IMPORTED_MODULE_1__["default"])
}), new Platform({
  x: 4 * groundwidth,
  y: 550,
  image: createImage(_img_ground_png__WEBPACK_IMPORTED_MODULE_1__["default"])
}), new Platform({
  x: 5 * groundwidth,
  y: 550,
  image: createImage(_img_ground_png__WEBPACK_IMPORTED_MODULE_1__["default"])
}), new Platform({
  x: -1 * groundwidth,
  y: 550,
  image: createImage(_img_ground_png__WEBPACK_IMPORTED_MODULE_1__["default"])
}), new Platform({
  x: 2 * groundwidth,
  y: 470,
  image: createImage(_img_grass2_png__WEBPACK_IMPORTED_MODULE_3__["default"])
}), new Platform({
  x: 4.5 * groundwidth,
  y: 200,
  image: createImage(_img_well_png__WEBPACK_IMPORTED_MODULE_5__["default"])
})];
var genericObjects = [new GenericObject({
  x: -800,
  y: -1,
  image: createImage(_img_background5_png__WEBPACK_IMPORTED_MODULE_2__["default"])
}), new GenericObject({
  x: -100,
  y: 210,
  image: createImage(_img_hut_png__WEBPACK_IMPORTED_MODULE_4__["default"])
})];
var obstacles = [new Obstacle({
  x: 3 * groundwidth,
  y: 470,
  image: createImage(_img_grass2_png__WEBPACK_IMPORTED_MODULE_3__["default"])
})];
var staticObjects = [new StaticObject({
  x: 20,
  y: 15,
  image: createImage(_img_objective1_png__WEBPACK_IMPORTED_MODULE_8__["default"])
})];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  up: {
    pressed: false
  }
};
var scrollOffset = 0;
var haveStopped = true;

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.clearRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  obstacles.forEach(function (obstacle) {
    obstacle.draw();
  });
  staticObjects.forEach(function (staticObject) {
    staticObject.draw();
  });
  player.update();

  if (player.position.y > 380) {
    player.velocity.y = 0;
  }

  if (keys.right.pressed && player.position.x < 500) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 400) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += 5;
      platforms.forEach(function (platform) {
        platform.position.x -= 5;
      });
      obstacles.forEach(function (obstacle) {
        obstacle.position.x -= 5;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x -= 3;
      });
    } else if (keys.left.pressed) {
      scrollOffset -= 5;
      platforms.forEach(function (platform) {
        platform.position.x += 5;
      });
      obstacles.forEach(function (obstacle) {
        obstacle.position.x += 5;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x += 3;
      });
    }
  }

  if (keys.up.pressed && haveStopped == true) {
    haveStopped = false;
    player.velocity.y -= 18;
  }

  if (player.velocity.y >= 0) {
    haveStopped = true;
  }

  if (scrollOffset > 4.1 * groundwidth) {
    isWaterCollected = true;
    staticObjects[0].image = createImage(_img_objective2_png__WEBPACK_IMPORTED_MODULE_9__["default"]);
  }

  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x + player.width <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  });
  obstacles.forEach(function (obstacle) {
    if (player.position.y + player.height <= obstacle.position.y && player.position.y + player.height + player.velocity.y >= obstacle.position.y && player.position.x + player.width >= obstacle.position.x && player.position.x + player.width <= obstacle.position.x + obstacle.width) {
      init();
    }
  });

  if (isWaterCollected) {
    player.image = createImage(_img_frame2_png__WEBPACK_IMPORTED_MODULE_7__["default"]);
  } // win condition


  if (scrollOffset < -500 && isWaterCollected) {
    alert("Congratulations, you won!");
  } // lose condition


  if (player.position.y > canvas.height) {
    init();
  }
}

animate();
addEventListener("keydown", function (_ref5) {
  var keyCode = _ref5.keyCode;

  switch (keyCode) {
    case 37:
      console.log('left');
      keys.left.pressed = true;
      break;

    case 40:
      console.log('down');
      break;

    case 39:
      console.log('right');
      keys.right.pressed = true;
      break;

    case 38:
      console.log('up');
      keys.up.pressed = true;
      break;
  }
});
addEventListener("keyup", function (_ref6) {
  var keyCode = _ref6.keyCode;

  switch (keyCode) {
    case 37:
      console.log('left');
      keys.left.pressed = false;
      break;

    case 40:
      console.log('down');
      break;

    case 39:
      console.log('right');
      keys.right.pressed = false;
      break;

    case 38:
      console.log('up');
      keys.up.pressed = false;
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map