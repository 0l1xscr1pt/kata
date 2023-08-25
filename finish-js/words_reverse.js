function lengthTo(string) {
    let i;
    for (i = 0; string[i] !== undefined; i++);
    return i;
}


function decrement(string, startTo, stopTo) {
    let decrementString = "";
    while (startTo >= stopTo) {
        decrementString += string[startTo];
        startTo--;
    }
    return decrementString;
}


function reverseWords(string) {
    let i;
    let j = 0;
    let count = 0;
    let stringReverse = "";
    let length = lengthTo(string);

    for (i = 0; i < length; i++) {
        if (string[i] == " ") {
            j = i - 1;
            stringReverse += decrement(string, j, count);
            stringReverse += " ";
            count = i + 1;
        } else if (string[i + 1] == undefined) {
            stringReverse += decrement(string, i, count);
        }
    }

    console.log("-", stringReverse, "-\n");
    return stringReverse;
}