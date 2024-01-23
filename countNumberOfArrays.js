//INPUT: array, or k dimension array
//OUTPUT: return number of arrays inside of arrays
const countNumberOfArrays = function(arr) {
    let arrayCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            arrayCount++;
        }
    }

    return arrayCount;

}
