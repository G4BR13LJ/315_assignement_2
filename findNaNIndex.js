// INPUT: array of ints
// OUTPUT: indices of 'NaN' values in an array of ints
const findNaNIndex = function(arr) {
    let nanIndices = [];

    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            console.log(i);
            nanIndices.push(i);
        }
      }

    return nanIndices;
}
