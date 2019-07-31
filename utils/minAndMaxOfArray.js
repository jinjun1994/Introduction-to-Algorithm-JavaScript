function minOfArray (array) {
  array.sort((a, b) => a - b)
  return array[0]
}
function maxOfArray (array) {
  array.sort((a, b) => b - a)
  return array[0]
}
function maxOfAarrayWithFor (array) {
  let max = array[0]
  for (let index = 0; index < array.length; index++) {
    const cur = array[index]
    if (cur > max) max = cur
  }
  return max
}
function minOfAarrayWithFor (array) {
  let min = array[0]
  for (let index = 0; index < array.length; index++) {
    const cur = array[index]
    if (cur < min) min = cur
  }
  return min
}
function minOfAarrayWithMath (array) {
  return Math.min.apply(null, array)
}
function maxOfAarrayWithMath (array) {
  return Math.max.apply(null, array)
}
function minOfAarrayWithSpread (array) {
  return Math.max(...array)
}
function maxOfAarrayWithSpread (array) {
  return Math.min(...array)
}
export {
  minOfArray,
  maxOfArray,
  maxOfAarrayWithFor,
  minOfAarrayWithFor,
  minOfAarrayWithMath,
  maxOfAarrayWithMath,
  minOfAarrayWithSpread,
  maxOfAarrayWithSpread
}
