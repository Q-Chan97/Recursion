// Divide and conquer

let testArray = [1, 4, 5, 3, 2]

function mergeSort(array) {
    if (array.length <= 1) { // Recursive base, stops when array gets down to one
        return array;
    }

    let middle = Math.floor(array.length / 2); // Find the middle point in array
    let left = mergeSort(array.slice(0, middle)); // Left half of array
    let right = mergeSort(array.slice(middle, array.length)); // Right half of array
    console.log(left);
    console.log(right);
    console.log(middle);
}

console.log(mergeSort(testArray));