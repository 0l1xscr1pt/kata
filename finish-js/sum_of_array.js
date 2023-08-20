function lengthTo(list) {
    i = 0;
    while (list[i] !== undefined)
        i++;
    return i;
}

function sum(array) {
    let i = 0;
    let result = 0;
    let length = lengthTo(array);

    if (length === 0) {
        return 0;
    }
    while (i < length) {
        result += array[i];
        i++;
    }
    return result;
}