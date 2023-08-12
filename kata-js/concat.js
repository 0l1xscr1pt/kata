function smash (words) {
    let sentence = "";
    let i = 0;
    let length = words.length;

    while (i < length) {
        sentence += words[i];
        i++;
        if (i < length) {
            sentence += " ";
        }
    }
    console.log(sentence);
    return sentence;
};