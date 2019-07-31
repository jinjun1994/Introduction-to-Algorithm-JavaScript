function insertionSort (array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    let i = index - 1
    while (i > -1 && array[i] > element) {
      array[i + 1] = array[i]
      i = i - 1
    }
    array[i + 1] = element
  }
  return array
}

export {
  insertionSort
}
