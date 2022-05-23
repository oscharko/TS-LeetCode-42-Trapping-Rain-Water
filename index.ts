let heights = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

const getTrappingRainWater = function (array: number[]): number {
  let totalWater: number = 0;
  for (let p: number = 0; p < array.length; p++) {
    let leftP: number = p,
      rightP: number = p,
      maxLeft: number = 0,
      maxRight: number = 0;
    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, array[leftP]);
      leftP--;
    }
    while (rightP < array.length) {
      maxRight = Math.max(maxRight, array[rightP]);
      rightP++;
    }
    const currentWater: number = Math.min(maxLeft, maxRight) - array[p];
    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }
  return totalWater;
};

console.log(getTrappingRainWater(heights));