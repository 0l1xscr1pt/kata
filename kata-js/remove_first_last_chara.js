function removeChar(str){
    let i;
    let result = "";
    let length = str.length - 1;

    if (str.length > 2) {
        for (i = 1; i < length ; i++)
            result += str[i];
    }
    return result;
}