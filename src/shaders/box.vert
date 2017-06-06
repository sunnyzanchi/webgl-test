attribute mediump vec4 position;
attribute mediump vec4 color;

varying mediump vec4 outColor;

void main(void) {
  outColor = color;
  gl_Position = position;
}
