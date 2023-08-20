function lengthTo(list) {
    let i = 0;

    while (list[i] !== undefined)
        i++;
    return i;
}

function toNumberArray(stringArray) {
    let number = 0;
    let i = 0;
    let numberArray = [];

    while (i < lengthTo(stringArray)) {
        numberArray[i] = stringArray[i] - "";
        i++;
    }
    console.log(numberArray);
    return numberArray;
}

toNumberArray(["1.1","2.2","3.3"]);