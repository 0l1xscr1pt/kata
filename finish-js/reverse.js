function strLength(list) {
    i = 0;

    while (list[i] !== undefined)
        i++;
    return i;
}


function solution(string){
    i = (strLength(string) - 1);
    reverseStr = "";
    j = 0;
    
    while (i >= 0) {
        reverseStr += string[i];
        j++;
        i--;
    }
    return reverseStr;
}