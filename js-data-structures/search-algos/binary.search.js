// returns index of search value

function binarySearch(arr, val) {
 let left = 0;
 let right = arr.length - 1;
 let mid = Math.floor(arr.length / 2);

 while (left <= right) {
  if (arr[mid] === val) {
   return mid;
  }

  if (val < arr[mid]) {
   right = mid - 1;
   mid = (left + right) / 2;
  } else if (val > arr[mid]) {
   left = mid + 1;
   mid = (left + right) / 2;
  }
 }
 return -1;
}
