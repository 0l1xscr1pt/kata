function lengthTo(list) {
    let i = 0;

    if (list !== null) {
        while(list[i] !== undefined)
            i++;
    }
    return i;
}

function countPositivesSumNegatives(array) {
    let count = 0;
    let sum = 0;
    let result = [];
    let i = 0;

    if (lengthTo(array) == 0 || lengthTo(array) == null)
        return result;

    while (i < lengthTo(array)) {
        if (array[i] > 0)
            count++;
        else
            sum += array[i];
        i++;
    }
    result[0] = count;
    result[1] = sum;
    return result;
}