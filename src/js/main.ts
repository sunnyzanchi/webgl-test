import {initShaders, getAttributeLocations} from './initShaders';
import initBuffer from './initBuffer';

const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');

// Actual webgl stuff
const program = initShaders(gl);
gl.useProgram(program);
const {positions, colors} = getAttributeLocations(gl, program);

initBuffer(gl, positions, colors);

gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
gl.clearColor(0, 0, 0, 0);
gl.clear(gl.COLOR_BUFFER_BIT);

gl.drawArrays(gl.TRIANGLE_STRIP, 0, 8);
