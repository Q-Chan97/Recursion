function fibs(num) {
    let array = [];
    if (num === 0) return [];
    if (num === 1) return [0]; // These two are here just in case num is passed as 0 or 1

    for (let i = 0; i < num; i ++) { // num is how many numbers of fibonacci we want
        array = [0, 1]; // Always gonna be the base of the array, outside of the first two cases
        array.push(array[i - 1] + array[i - 2]); // Takes the two numbers before i while looping, and adds them to the array
    }
    return array; // Returns whole array
}

console.log(fibs(5));
console.log(fibs(8));