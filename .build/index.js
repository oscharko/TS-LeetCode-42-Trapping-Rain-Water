let heights = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
const getTrappingRainWater = function(a) {
  let tW = 0;
  for (let p = 0; p < a.length; p++) {
    let v = [p, p, 0, 0];
    while (v[0] >= 0) {
      v[2] = Math.max(v[2], a[v[0]]);
      v[0]--;
    }
    while (v[1] < a.length) {
      v[3] = Math.max(v[3], a[v[1]]);
      v[1]++;
    }
    const cW = Math.min(v[2], v[3]) - a[p];
    if (cW >= 0) {
      tW += cW;
    }
  }
  return tW;
};
console.log(getTrappingRainWater(heights));
//# sourceMappingURL=index.js.map
