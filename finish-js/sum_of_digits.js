function lengthTo(string) {
    let i = 0;
    
    while (string[i] !== undefined)
        i++;
    return i;
}

function additionOfValue(number) {
    number += "";
    let i = lengthTo(number) - 1;
    let firstSum = 0;

    while (i >= 0) {
        firstSum += number[i] - "";
        i--;
    }
    return firstSum;
}

function digitalRoot(number) {
    sum = additionOfValue(number) + "";

    while (lengthTo(sum) > 1) {
        sum = additionOfValue(sum) + "";
        lengthTo(sum);
    }
    sum -= "";
    return sum;
}