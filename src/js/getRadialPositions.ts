export default function getRadialPositions(sections: number, x: number, y: number): number[]{
  const {PI, cos, sin} = Math;
  const result = [];

  for(let i = 0; i < sections; i++){
    result.push(
      cos(2*PI * i/sections) + x,
      sin(2*PI * i/sections) + y
    );
  }

  return result;
}
