function lengthTo(list) {
    let i = 0;
    
    while (list[i] !== undefined)
        i++;
    return i;
}


function splitToNumber(string) {
    let newArray = [];
    let count = 0;
    let j = 0;
    let k = 0;
    let i;

    for (i = 0; i < lengthTo(string); i++) {
        if (string[j] == " ")
            j++;
        count = 0;
        while (string[j] !== " " && j < lengthTo(string)) {
            j++;
            count++;
            newArray[k] = count;
        }
        k++;
    }
    return newArray;
}


function minValue(list) {
    let i = 0;
    let result;
    let j;

    for(j = 1; j < lengthTo(list); j++) {
        if (list[j] < list[i])
            i = j;
    }
    result = list[i];
    return result;
}


function findShort(string){
    let newArray = [""];
    let min;

    if (lengthTo(string) == 0)
        return 1;

    newArray = splitToNumber(string);
    min = minValue(newArray);

    return min;
}