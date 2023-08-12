
function length(list) {
    let i = 0;
    
    while (list[i] != undefined) {
        i++;
    }
    return i;
}
length("deux");
length([1, 2]);

function min(array, toReturn) {
    let i;
    let a = 0;
    let b = 1;

    for (i = 0; b < length(array); i++) {
        console.log("b = ", b, "length(array) = ", length(array));
        if (a < b) {
            b++;
        }
        console.log(array[a], array[b]);
        console.log("b = ", b, "array[b] = ", array[b]);
    }
    // if (toReturn === "value") {
    //     console.log("value of array");

    // }
    // console.log("Index of array");
    // a = index of array
    // return a;
}

min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0
