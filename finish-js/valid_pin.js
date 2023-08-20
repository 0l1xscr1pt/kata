function lengthTo(string) {
    let i = 0;

    while (string[i] !== undefined)
        i++;
    return i;
}

function isItNumber(string) {
    let i = 0;
    let j = 0;
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    while (i < lengthTo(string)) {
        j = 0;
        while (j < lengthTo(numbers)) {
            if (string[i] === numbers[j])
                j = lengthTo(numbers) - 1;
            else if (string[i] !== numbers[j] && ((j + 1) === lengthTo(numbers)))
                return false;
            j++;
        }
        i++;
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