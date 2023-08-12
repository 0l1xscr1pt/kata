function likes(names) {
    let i;
    let sentence;

    for (i = 0; i < names.length; i++) {
        i++;
    }

    switch (names.length) {
        case 0:
            sentence = "no one likes this";
            console.log(sentence);
            break;
        case 1:
            sentence = names[0] + " likes this";
            console.log(sentence);
            break;
        case 2:
            sentence = names[0] + " and " + names[1] + " like this";
            console.log(sentence);
            break;
        case 3:
            sentence = names[0] + ", " + names[1] + " and " + names[2] + " like this";
            console.log(sentence);
            break;
        default :
            sentence = names[0] + ", " + names[1] + " and " + (i - 2) +" others like this";
            console.log(sentence);
            break;
    }
    return sentence;
}