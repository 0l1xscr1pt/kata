function lengthTo (list) {
    let i = 0;

    while (list[i] !== undefined)
        i++;
    return i;
}

function createPhoneNumber(array) {
    let i = 0;
    let j = 0;
    let model = "(xxx) xxx-xxxx";
    let phoneNumber = "";

    if (lengthTo(array) !== 10)
        return 1;

    while (i < lengthTo(model)) {
        if (model[i] !== "x") {
            phoneNumber += model[i];
        } else {
            phoneNumber += array[j];
            if (j < lengthTo(array))
                j++;
        }
        i++;
    }
    return phoneNumber;
}

createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

//(123) 456-7890', createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
//(111) 111-1111', createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));