let heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const getTrappingRainWater = function(a) {
  let v = [0, a.length - 1, 0, 0, 0];
  while (v[0] < v[1]) {
    if (a[v[0]] <= a[v[1]]) {
      if (a[v[0]] >= v[2]) {
        v[2] = a[v[0]];
      } else {
        v[4] += v[2] - a[v[0]];
      }
      v[0]++;
    } else {
      if (a[v[1]] >= v[3]) {
        v[3] = a[v[1]];
      } else {
        v[4] += v[3] - a[v[1]];
      }
      v[1]--;
    }
  }
  return v[4];
};
console.log(getTrappingRainWater(heights));
//# sourceMappingURL=index.js.map
