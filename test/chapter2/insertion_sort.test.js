'use strict'

import { insertionSort } from '../../chapter2/insert_sort'
const assert = require('power-assert')

describe('insertion_sort', () => {
  it('[1, 3, 2, 5, 4]', () => {
    const arr = [1, 3, 2, 5, 4]
    const sortArr = insertionSort(arr)
    assert.deepEqual([1, 2, 3, 4, 5], sortArr)
  })
  it('[5, 4, 3, 2, 1]', () => {
    const arr = [5, 4, 3, 2, 1]
    const sortArr = insertionSort(arr)
    assert.deepEqual([1, 2, 3, 4, 5], sortArr)
  })
  it('[1, 2, 3, 4, 5]', () => {
    const arr = [1, 2, 3, 4, 5]
    const sortArr = insertionSort(arr)
    assert.deepEqual([1, 2, 3, 4, 5], sortArr)
  })
})
