export default function getPolygonPoints(sections: number): number[]{
  const {PI, cos, sin} = Math;
  const result = [];

  for(let i = 0; i < sections; i++){
    result.push(
      cos(2*PI * i/sections),
      sin(2*PI * i/sections)
    );
  }

  return result;
}
