import getRadialPositions from './getRadialPositions';

export default function initBuffer(gl: WebGLRenderingContext, positionsLocation: number, colorsLocation: number){

  //Vertex positions
  const positionsBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionsBuffer);

  const vertices = getRadialPositions(6, 0, 0);
  vertices.push(vertices[0], vertices[1]);

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  gl.enableVertexAttribArray(positionsLocation);
  gl.vertexAttribPointer(positionsLocation, 2, gl.FLOAT, false, 0, 0);

  // colors
  const colorsBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorsBuffer);

  const colors = [
    255, 111, 0,  1,
    255, 213, 79, 1,
    255, 111, 0,  1,
    255, 213, 79, 1,
    255, 111, 0,  1,
    255, 213, 79, 1,
    255, 111, 0,  1,
  ].map(c => c/255);

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

  gl.enableVertexAttribArray(colorsLocation);
  gl.vertexAttribPointer(colorsLocation, 4, gl.FLOAT, false, 0, 0);
}
