// list is array of items to search
// item is the thing being searched for
const binarySearch = (list, item) => {
    // keeep track of positions (index) in the array
    let start = 0;
    let end = list.length - 1;

    // loop until item is found or there is only 1 item left
    while (start <= end) {
        let mid = Math.floor((start + end) / 2); // look at the middle index (round down)
        let guess = list[mid]; // value of mid index 

        // found the item
        if (guess === item) {
            return mid;
        }
        // guess is too high, so make the end 1 position to the left of mid
        else if (item < guess) {
            end = mid - 1;

            // guess is too high, so set start to be 1 position to the right of mid
        } else {
            start = mid + 1;
        }
    }
    return null;
}

const myList = [1, 3, 5, 7, 9]
console.log(binarySearch(myList, 3));