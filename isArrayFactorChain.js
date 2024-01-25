//INPUT: array of ints
//OUTPUT: true or false if array is a factor chain
const isArrayFactorChain = function(arr) {

    // iterate over array
    for (let i = 0; i < arr.length; i++) {

        // if array is of length 1 or 0, return false
        if (arr.length == 1 || arr.length == 0 ) {
            return false;
        }

        // if at the end of the array -1, stop, and check second to last index item if its a power of thr next index item
        if (i == (arr.length-2)) {
            if ( arr[i+1] % arr[i] == 0) {
                // only returns true when every index item is a factor of its neighbour to the right
                return true;
            }
            else return false;
        }

        //check elem index item if its a power of the next index item
        if ( arr[i+1] % arr[i] != 0) {
            return false;
        }
      }
}
