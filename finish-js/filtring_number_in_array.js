function filter_nbr(array) {
    let i = 0;
    let j = 0;
    let k = 0;
    let acceptValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let newArray = [];

    while(i < array.length) {
        k = 0;
        while(k < acceptValue.length) {
            if (array[i] === acceptValue[k]) {
                newArray[j] = array[i];
                j++;
                i++;
            }
            k++;
        }
        i++;
    }
    return newArray;
}
//for acceptValue only



function filter_list(array) {
    let i = 0;
    let j = 0;
    let newArray = [];

    while(i < array.length) {
        if (array[i] === 0) {
            newArray[j] = array[i];
            j++;
        } else if (Number.isInteger(array[i])) {
            newArray[j] = array[i];
            j++;
        }
        i++;
    }
    return newArray;
}
//for all integer