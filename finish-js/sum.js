function positiveSum(arr) {
    let i = 0;
    let result = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result += arr[i];
        }
    }
    return result;
}