function addLength(string) {
    let i;
    let j = 0;
    let count = 0;
    let newString = "";
    let newArray = [];

    for (i = 0; i < string.length; i++) {
        if (string[i] != " " && string.match(/[a-zA-Z]/g)) {
            newString += string[i];
            count++;
        }

        if (string[i] === " " || (i === string.length - 1)) {
            newArray[j] = newString + " " + count;
            j++;
            newString = "";
            count = 0;
        }
    }
    return newArray;
}