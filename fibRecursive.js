function fibsRec(num) {
    console.log("This was printed recursively");
    if (num === 0) return [];
    if (num === 1) return [0];
    if (num === 2) return [0, 1]; // 3 step recursive base, builds out array when called

    let array = fibsRec(num - 1); // Recursive step, makes progress toward base cases and creates array
    array.push(array[num - 2] + array[num - 3]); // Pushes previous two numbers into array each step
    return array; // Returns whole array
}

console.log(fibsRec(5));
console.log(fibsRec(8));
