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
    // Array slicing keeps going recursively until each integer is in its own array

    function merge(leftArray, rightArray) { // Arrays have been deconstructed and passed into merge
        let result = []; // For final merge
        let i = 0; // These two are for the two different arrays to move forward
        let j = 0;

        while (i < leftArray.length && j < rightArray.length) { // While there are items in an array
            if (leftArray[i] < rightArray[j]) { // If the integer in the left array is smaller than the right
                result.push(leftArray[i]); // Add the integer into the result array
                i++; // Advance left array
            } else {
                result.push(rightArray[j]); // Otherwise, add the integer from the right array
                j++; // Advance right array
            }
        }// While loop stops when one array is empty. This adds the leftover integer into result array.
        return result.concat(leftArray.slice(i).concat(rightArray.slice(j)));
    }
    merge(left, right);
}

console.log(mergeSort(testArray));