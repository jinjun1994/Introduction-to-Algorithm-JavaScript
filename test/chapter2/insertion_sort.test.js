'use strict'

import { insertionSort } from '../../chapter2/insert'
const assert = require('power-assert')

describe('insertion_sort', () => {
  it('insertion_sort', () => {
    const arr = [1, 3, 2, 5, 4]
    const sortArr = insertionSort(arr)
    console.log(arr)
    console.log((sortArr))
    assert.deepEqual([1, 2, 3, 4, 5], sortArr)
  })
})
