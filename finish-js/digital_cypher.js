function lengthTo(list) {
    let i = 0;

    while (list[i] !== undefined)
        i++;
    return i;
}

function inArray(number) {
    let i = 0;
    let array = [];
    number += "";

    while(i < lengthTo(number)) {
        array[i] = number[i];
        array[i] -= "";
        i++;
    }
    return array;
}

function convertWithNumber (arrayCypher, number) {
    let i = 0;
    let j = 0;
    let k = 0;
    let newCypher = [];
    let result = 0;

    number = inArray(number);

    while (i < lengthTo(arrayCypher)) {
        if (j >= lengthTo(number)) {
            number[j] = number[k];
            k++;
        }
        result = arrayCypher[i] + number[j];
        newCypher[i] = result;
        j++;
        i++;
    }
    return newCypher;
}

function encode(string, number) {
    let arrayOfLetters = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", 
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let i = 0;
    let j = 1;
    let k = 0;
    let cypher = [];
    let cypherWithNumber = [];

    while (i < lengthTo(string)) {
        j = 1;
        while (j < lengthTo(arrayOfLetters)) {
            if (string[i] == arrayOfLetters[j]) {
                cypher[k] = j;
                k++;
            }
            j++;
        }
        i++;
    }
    cypherWithNumber = convertWithNumber(cypher, number);
    return cypherWithNumber;
}

// encode("scout", 1939); scout -> [19, 3, 15, 21, 20] with 19391 -> [ 20, 12, 18, 30, 21 ]