//INPUT: array, or k dimension array
//OUTPUT: return number of arrays inside of arrays
const countNumberOfArrays = function(arr) {
    //initilize number of arrays found to 0
    let arrayCount = 0;

    // iterate over the array elemts by index
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            arrayCount++;
        }
    }

    //return number of arrays found
    return arrayCount;

}
