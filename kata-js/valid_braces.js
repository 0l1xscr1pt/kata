function validBraces(braces){
    let i;
    let arrayCorrectValues = ["[", "]", "{", "}", "(", ")"];

    for (i = 0; i < braces.length; i++) {
        if (braces[i] === "[](){}") {
            console.log(braces[i]);
        }
        console.log(braces[i]);
    }
}

validBraces("(){}[]");

// "(){}[]"   =>  True
// "([{}])"   =>  True
// doTest("()))", false);
//     doTest("()", true);
//     doTest("[]", true);
//     doTest("{}", true);
//     doTest("(){}[]", true);
//     doTest("([{}])", true);
//     doTest("(}", false);
//     doTest("[(])", false);
//     doTest("({})[({})]", true);
//     doTest("(})", false);
//     doTest("(({{[[]]}}))", true);
//     doTest("{}({})[]", true);
//     doTest(")(}{][", false);
//     doTest("())({}}{()][][", false);
//     doTest("(((({{", false);
//     doTest("}}]]))}])", false);