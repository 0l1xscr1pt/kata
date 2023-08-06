function removeEveryOther(arr){
    let i = 0;
    let j = 0;
    let newArray = [];

    while (i < arr.length) {
        newArray[j] = arr[i];
        i += 2;
        j++;
    }
    return newArray;
}