export function initShaders(gl: WebGLRenderingContext){
  const frag = createShader(gl, require('shaders/box.frag'), gl.FRAGMENT_SHADER);
  const vert = createShader(gl, require('shaders/box.vert'), gl.VERTEX_SHADER);

  const program = gl.createProgram();
  gl.attachShader(program, vert);
  gl.attachShader(program, frag);
  gl.linkProgram(program);

  return program;
}

export function getAttributeLocations(gl: WebGLRenderingContext, program: WebGLProgram){
  const positions = gl.getAttribLocation(program, 'position');
  const colors = gl.getAttribLocation(program, 'color');

  return {positions, colors};
}

export function createShader (gl: WebGLRenderingContext, sourceCode: string, type: number) {
  // Compiles either a shader of type gl.VERTEX_SHADER or gl.FRAGMENT_SHADER
  var shader = gl.createShader( type );
  gl.shaderSource( shader, sourceCode );
  gl.compileShader( shader );

  if ( !gl.getShaderParameter(shader, gl.COMPILE_STATUS) ) {
    var info = gl.getShaderInfoLog( shader );
    throw 'Could not compile WebGL program. \n\n' + info;
  }
  return shader;
}
