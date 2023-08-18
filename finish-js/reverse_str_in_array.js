function length(list) {
    i = 0;

    while (list[i])
        i++;
    return i;
}

function reverseStrInArray(string){
    count = length(string);
    array = [];
    i = 0;

    while (count > 0) {
        count--;
        array[i] = string[count];
        i++;

    }
    return array;
}