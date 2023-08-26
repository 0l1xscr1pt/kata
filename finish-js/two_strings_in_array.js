function lengthTo(list) {
    let i = 0;
    
    while (list[i] !== undefined)
        i++;
    return i;
}

function transposeTwoStrings (array) {
	let newArray = "";
    let i = 0;
    let j = 0;

    while (i < lengthTo(array[0]) || j < lengthTo(array[1])) {

        if (array[0][i] == undefined) {
            if (array[1][j + 1] == undefined)
                newArray += " " + " " + array[1][j];
            else
                newArray += " " + " " + array[1][j] + '\n';
        } 

        else if (array[1][j] == undefined) {
            if (array[0][i + 1] == undefined)
                newArray += array[0][j] + " " + " ";
            else
                newArray += array[0][i] + " " + " " + '\n';
        } 

        else {
            if (array[0][i + 1] == undefined && array[1][j + 1] == undefined)
                newArray += array[0][i] + " " + array[1][j];
            else
                newArray += array[0][i] + " " + array[1][j] + '\n';
        }
        j++;
        i++;
    }
    console.log( newArray, "-");
    return newArray;
}

//put 2 strings in a array and return one string