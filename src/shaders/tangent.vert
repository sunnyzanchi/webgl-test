// I don't actually know how to write this shader, because
//  the getTangents I wrote in TypeScript returns 4 points,
//  but a vertex shader only sets the values for 1 vertex
#define PI 3.1415926535897932384626433832795

//Circles: [x, y, radius]
uniform mediump vec3 c1;
uniform mediump vec3 c2;

void main(){
  if(c1.x > c2.x){
    vec3 temp = c1;
    c1 = c2;
    c2 = temp;
  }

  const float x1 = c1.x;
  const float y1 = c1.y;
  const float r1 = c1.z;

  const float x2 = c2.x;
  const float y2 = c2.y;
  const float r2 = c2.z;

  // Angle from 0deg horizontal line to line between circle centers
  const float gamma = atan((y1 - y2) / (x2 - x1));

  // Angle between line from center of c1 to center of c2 and r2 - r1 at x2, y2
  const float beta = asin((r2 - r1) / sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));

  // Angle between 90deg vertical line and a right angle to the tangent line
  const float alpha = gamma - beta;

  // Angle between 90deg vertical line and a right angle to the other tangent line
  const float theta = gamma + beta;

  gl_Position = x1 + r1 * cos(PI/2 - alpha);
}
