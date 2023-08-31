function lengthTo(list) {
    let i = 0;
    list += "";

    while (list[i] !== undefined)
        i++;
    return i;
}


function multiplying(number) {
    let i = 1;
    number += "";
    let result = number[0];

    while (i < lengthTo(number)) {
        if (number[i] !== "0") {
            result *= number[i];
            i++;
        } else {
            result = 0;
            break;
        }
    }
    return result;
}


function persistence(number){
    let count = 1;
    let length = lengthTo(number);
    let result = multiplying(number);

    if (number < 10)
        return 0;

    if (result == 0)
        return count;

    while (length > 1) {
        result = multiplying(result) + "";
        length = lengthTo(result);
        count++;
    }
    return count;
}