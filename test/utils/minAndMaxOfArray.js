import {
  minOfArray,
  maxOfArray,
  maxOfAarrayWithFor,
  minOfAarrayWithFor,
  minOfAarrayWithMath,
  maxOfAarrayWithMath,
  minOfAarrayWithSpread,
  maxOfAarrayWithSpread
} from '../../utils/minAndMaxOfArray.js'

const assert = require('power-assert')

describe('insertion_sort', () => {
  it('[1, 3, 2, 5, 4]', () => {
    const arr = [1, 3, 2, 5, 4]
    const min = minOfArray(arr)
    assert.equal(1, min)
  })
  it('[5, 4, 3, 2, 1]', () => {
    const arr = [5, 4, 3, 2, 1]
    const max = maxOfArray(arr)
    assert.deepEqual(5, max)
  })
  it('[1, 2, 3, 4, 5]', () => {
    const arr = [1, 2, 3, 4, 5]
    const max = maxOfAarrayWithFor(arr)
    assert.deepEqual(5, max)
  })
  it('[1, 2, 3, 4, 5]', () => {
    const arr = [1, 2, 3, 4, 5]
    const min = minOfAarrayWithFor(arr)
    assert.deepEqual(1, min)
  })
  it('minOfAarrayWithMath', () => {
    const arr = [1, 3, 2, 5, 4]
    const min = minOfAarrayWithMath(arr)
    assert.equal(1, min)
  })
  it('maxOfAarrayWithMath', () => {
    const arr = [5, 4, 3, 2, 1]
    const max = maxOfAarrayWithMath(arr)
    assert.deepEqual(5, max)
  })
  it('minOfAarrayWithSpread', () => {
    const arr = [1, 2, 3, 4, 5]
    const max = minOfAarrayWithSpread(arr)
    assert.deepEqual(5, max)
  })
  it('maxOfAarrayWithSpread', () => {
    const arr = [1, 2, 3, 4, 5]
    const min = maxOfAarrayWithSpread(arr)
    assert.deepEqual(1, min)
  })
})
