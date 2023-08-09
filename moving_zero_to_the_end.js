function moveZeros(array) {
    let i;
    let j = 0;
    let k = 0;
    let count1 = 0;
    let count2 = 0;
    
    let arrayOfZero = [];
    let arrayOfNumber = [];
    let newArray = [];

    for (i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            arrayOfZero[j] = array[i];
            j++;
        } else {
            arrayOfNumber[k] = array[i];
            k++;
        }
    }

    for (i = 0; i < array.length; i++) {
        newArray[i] = arrayOfNumber[count2];
        if (count2 >= k) {
            newArray[i] = arrayOfZero[count1];
            count1++;
        }
        count2++;
    }
    return newArray;
}