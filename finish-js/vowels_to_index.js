function lengthTo(list) {
    let i = 0;
    while (list[i] !== undefined)
        i++;
    return i;
}

function vowel2index(string) {
    let indexInString = "";
    let vowels = ["a","e","i","o","u", "A","E","I","O","U"];
    let i = 0;
    let j;

    while (i < lengthTo(string)) {
        j = 0;
        while (j < lengthTo(vowels)) {
            if (string[i] == vowels[j]) {
                indexInString += i + 1;
                break;
            }
            else if (((j + 1) == lengthTo(vowels)) && (string[i] !== vowels[j])) {
                indexInString += string[i];
                break;
            }
            j++;
        }
        i++;
    }
    return indexInString;
}