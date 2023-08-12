function test(string) {
    let regex;
    let i;

    // const reg = /\d/g;
    // let result;
    // while ((result = reg.exec(targetText)) !== null) {
    //     doSomethingWith(result);
    // }

    for (i = 0; i < string.length; i++) {
        regex = string[i].match(/\d/g);
    }
    console.log(regex);
}

test("Bon jour 3")