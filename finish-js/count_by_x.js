function countBy(x, n) {
    let i = 1;
    let count;
    let array = [];

    if (x > 0) {
        for (count = 0; count < n; count++) {
            array[count] = x*i;
            i++;
        }
    }
    return array;
}