function sumMul(number, multiple){
    let i = 0;
    let list = 0;
    let result = 0;

    if (multiple <= 0)
        return "INVALID";

    while ((list + number) < multiple) {
        list += number;
        result += list;
        i += number;
    }
    return result;
}