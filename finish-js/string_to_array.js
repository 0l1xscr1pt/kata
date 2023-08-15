function stringToArray(string){
    let i = 0;
    let j = 0;
    let array = [""];

    while (i < string.length) {
        if (string[i] !== " ") {
            array[j] += string[i];
            i++;
        } else {
            i++;
            j++;
            array[j] = "";
        }
    }
    return array;
}