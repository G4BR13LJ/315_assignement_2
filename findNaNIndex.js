// INPUT: array of ints
// OUTPUT: indices of 'NaN' values in an array of ints
const findNaNIndex = function(arr) {
    // initialize the array to store values of all indices of NaN
    let nanIndices = [];

    // iterate over array by element, if element is NaN, add its index to nanIndices array
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            console.log(i);
            nanIndices.push(i);
        }
      }
    
    // return array
    return nanIndices;
}
