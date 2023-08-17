function split_two_by_two(string) {
    let i = 0;
    let j = 0;
    let array = [];
    let length = (string.length) / 2;

    if (string[j] === "") {
        return array;
    }
    while (i < length) {
        array[i] = " ";
        array[i] = string[j];
        j++;

        if (string[j] === undefined ) {
            array[i] += "_";
        } else {
        array[i] += string[j];
        }
        i++;
        j++;
    }
    return array;
}