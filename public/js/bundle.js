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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const getRadialPositions_1 = __webpack_require__(4);
function initBuffer(gl, positionsLocation, colorsLocation) {
    const positionsBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionsBuffer);
    const vertices = getRadialPositions_1.default(6, 0, 0);
    vertices.push(vertices[0], vertices[1]);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(positionsLocation);
    gl.vertexAttribPointer(positionsLocation, 2, gl.FLOAT, false, 0, 0);
    const colorsBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorsBuffer);
    const colors = [
        255, 111, 0, 1,
        255, 213, 79, 1,
        255, 111, 0, 1,
        255, 213, 79, 1,
        255, 111, 0, 1,
        255, 213, 79, 1,
        255, 111, 0, 1,
    ].map(c => c / 255);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(colorsLocation);
    gl.vertexAttribPointer(colorsLocation, 4, gl.FLOAT, false, 0, 0);
}
exports.default = initBuffer;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function initShaders(gl) {
    const frag = createShader(gl, __webpack_require__(2), gl.FRAGMENT_SHADER);
    const vert = createShader(gl, __webpack_require__(3), gl.VERTEX_SHADER);
    const program = gl.createProgram();
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);
    return program;
}
exports.initShaders = initShaders;
function getAttributeLocations(gl, program) {
    const positions = gl.getAttribLocation(program, 'position');
    const colors = gl.getAttribLocation(program, 'color');
    return { positions, colors };
}
exports.getAttributeLocations = getAttributeLocations;
function createShader(gl, sourceCode, type) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, sourceCode);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        var info = gl.getShaderInfoLog(shader);
        throw 'Could not compile WebGL program. \n\n' + info;
    }
    return shader;
}
exports.createShader = createShader;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "varying mediump vec4 outColor;\r\n\r\nvoid main(void) {\r\n  gl_FragColor = outColor;\r\n}\r\n"

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "attribute mediump vec4 position;\r\nattribute mediump vec4 color;\r\n\r\nvarying mediump vec4 outColor;\r\n\r\nvoid main(void) {\r\n  outColor = color;\r\n  gl_Position = position;\r\n}\r\n"

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getRadialPositions(sections, x, y) {
    const { PI, cos, sin } = Math;
    const result = [];
    for (let i = 0; i < sections; i++) {
        result.push(cos(2 * PI * i / sections) + x, sin(2 * PI * i / sections) + y);
    }
    return result;
}
exports.default = getRadialPositions;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const initShaders_1 = __webpack_require__(1);
const initBuffer_1 = __webpack_require__(0);
const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');
const program = initShaders_1.initShaders(gl);
gl.useProgram(program);
const { positions, colors } = initShaders_1.getAttributeLocations(gl, program);
initBuffer_1.default(gl, positions, colors);
gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
gl.clearColor(0, 0, 0, 0);
gl.clear(gl.COLOR_BUFFER_BIT);
gl.drawArrays(gl.TRIANGLE_STRIP, 0, 7);


/***/ })
/******/ ]);