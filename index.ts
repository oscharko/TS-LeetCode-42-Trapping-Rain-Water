let heights = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

// const getTrappingRainWater = function (array: number[]): number {
//   let totalWater: number = 0;
//   for (let p: number = 0; p < array.length; p++) {
//     let leftP: number = p,
//       rightP: number = p,
//       maxLeft: number = 0,
//       maxRight: number = 0;
//     while (leftP >= 0) {
//       maxLeft = Math.max(maxLeft, array[leftP]);
//       leftP--;
//     }
//     while (rightP < array.length) {
//       maxRight = Math.max(maxRight, array[rightP]);
//       rightP++;
//     }
//     const currentWater: number = Math.min(maxLeft, maxRight) - array[p];
//     if (currentWater >= 0) {
//       totalWater += currentWater;
//     }
//   }
//   return totalWater;
// };

const getTrappingRainWater = function (a: number[]): number {
  let tW: number = 0;
  for (let p: number = 0; p < a.length; p++) {
    let v: number[] = [p, p, 0, 0]
    while (v[0] >= 0) {
      v[2] = Math.max(v[2], a[v[0]]);
      v[0]--;
    }
    while (v[1] < a.length) {
      v[3] = Math.max(v[3], a[v[1]]);
      v[1]++;
    }
    const cW: number = Math.min(v[2], v[3]) - a[p];
    if (cW >= 0) {
      tW += cW;
    }
  }
  return tW;
};

console.log(getTrappingRainWater(heights));