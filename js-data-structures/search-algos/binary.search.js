// returns index of search value in a sorted list

function binarySearch (arr, val) {
  let left = 0
  let right = arr.length - 1
  let mid = Math.floor(arr.length / 2)

  // check if mid is the search value
  while (left <= right) {
    if (arr[mid] === val) {
      return mid
    }
    // check if search value is lower or higher than the middle
    if (val < arr[mid]) {
      right = mid - 1 // discard right half of array
    } else if (val > arr[mid]) {
      left = mid + 1 // discard left half of array
    }
    mid = (left + right) / 2
  }
  return -1
}

console.log(binarySearch([2, 5, 9, 13, 15, 23, 28], 23))
