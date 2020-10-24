
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix == null) {
    return []
  }
  return matrix.reduce((x, y, i) => x.concat(i % 2 === 0 ? y : y.reverse()), []);
}
