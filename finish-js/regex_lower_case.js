function lengthTo(string) {
    let i = 0;

    while (string[i] !== undefined) {
        i++;
    }
    return i;
}

function lowercaseCount(string){
    let result = string.match(/[a-z]/g);
    let length;
    if (result === null)
        return 0;
    length = lengthTo(result);
    return length;
}