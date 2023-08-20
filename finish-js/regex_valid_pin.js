function lengthTo(string) {
    let i = 0;

    while (string[i] !== undefined)
        i++;
    return i;
}

function isItNumber(string) {
    let i = 0;
    let length = lengthTo(string);
    let numbers = /\d/;

    while (i < length) {
        if (string[i].match(numbers))
            i++;
        else
            return false;
    }
    return true;
}

function validatePIN(pin) {
    let length = lengthTo(pin);
    let isNumber = isItNumber(pin);

    if (isNumber === true && (length === 4 || length === 6))
        return true;
    return false;
}