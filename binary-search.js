// list is array of items to search
// item is the thing being searched for
// returns index of the item
const binarySearch = (list, item) => {
    // keeep track of positions (index) in the array
    let startIndex = 0; // starting index
    let endIndex = list.length - 1; // ending index

    // loop until item is found or there is only 1 item left
    while (startIndex <= endIndex) {
        let midIndex = Math.floor((startIndex + endIndex) / 2); // look at the middle index (round down)
        let guess = list[midIndex]; // value of mid index 

        // found the item
        if (guess === item) {
            return midIndex;
        }
        // guess is too high, so make the end index be 1 position to the left of mid
        else if (item < guess) {
            endIndex = midIndex - 1; // new end index

            // guess is too high, so set start index to be 1 position to the right of mid
        } else {
            startIndex = midIndex + 1; // new start index
        }
    }
    return null; // item is not in the list
}

