//INPUT: array of ints
//OUTPUT: true or false if array is a factor chain
const isArrayFactorChain = function(arr) {

    for (let i = 0; i < arr.length; i++) {

        if (arr.length == 1 || arr.length == 0 ) {
            return false;
        }

        if (i == (arr.length-2)) {
            if ( arr[i+1] % arr[i] == 0) {
                return true;
            }
            else return false;
        }

        if ( arr[i+1] % arr[i] != 0) {
            return false;
        }
      }
}
