function countPositivesSumNegatives(input) {
    let i;
    let count = 0;
    let sum = 0;
    let newTable = [];

    for (i = 0; i < input.length; i++) {
        if (input === [] || input === null) {
            return [];
        }
        
        if (input[i] > 0) {
            count++;
        } else {
            sum += input[i];
        }
        newTable[0] = count;
        newTable[1] = sum;
    }
}
countPositivesSumNegatives([ -11, -12, -13, -14, -15]);
countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]); //[10, -65]
countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);


function test() {
    let number = null;
    let len = number.length;
    console.log(len);
}

test()

// Return an array, where the first element is the count of positives numbers 
// and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.