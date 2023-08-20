function lengthTo(string) {
    let i = 0;

    while (string[i] !== undefined) {
        i++;
    }
    return i;
}

function shortLongShort(value1, value2) {
    let result = "";
    let length1 = lengthTo(value1);
    let length2 = lengthTo(value2);

    if (length1 < length2)
        result += value1 + value2 + value1;
    else
        result += value2 + value1 + value2;
    return result;
}

// $string1 = "10" and $string2 = "223" return 1022310
// $string1 = "223" and $string2 = "10" return 1022310