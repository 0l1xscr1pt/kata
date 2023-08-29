function lengthTo(list) {
    let i = 0;
    
    while (list[i] != undefined)
        i++;
    return i;
}

function minValue(array, toReturn) {
    let i = 0;
    let j = 1;
    let count = 0;
    let stock = 0;
    let valueOfIndex = 0;

    if (lengthTo(array) < 2)
        return 1;

    while (count < lengthTo(array)) {
        while (array[i] > array[j]) {
            i++;
            j++;
            valueOfIndex = i - 1;
            valueOfIndex++;
        }

        stock = array[i];

        while (stock < array[j]) {
            i++;
            j++;
            count++;
        }
        count++;
    }

    if (toReturn == 'index')
        return valueOfIndex;
    return stock;
}