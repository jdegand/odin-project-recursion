const merge = (left, right) => {
    const output = []
    let leftIndex = 0
    let rightIndex = 0
  
    while(leftIndex < left.length && rightIndex < right.length){
      if(left[leftIndex] < right[rightIndex]){
        output.push(left[leftIndex])
        leftIndex++
      } else {
        output.push(right[rightIndex]) // not a fan of syntax like output.push(right[rightIndex++])
        rightIndex++
      }
    }
    return [...output, ...left.slice(leftIndex), ...right.slice(rightIndex)] // works because arrays have already been sorted 
  }
  
const mergeSort = array => {
    if(array.length <= 1){
      return array
    }
    const middleIndex = Math.floor(array.length / 2)
    const leftArr = array.slice(0, middleIndex)
    const rightArr = array.slice(middleIndex)
  
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}