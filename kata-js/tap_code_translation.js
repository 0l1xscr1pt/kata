function tapCodeTranslation(text) {
    let row = 1;
    let column = 1;
    let result = 1;

    while (row <= 5) {
        while (column <= 5) {
            
            if (column === 5) {
                column = 1;
            }
            console.log("row -> ", row, "column -> ", column);
            column++;
        }
        row++;
    }
    return result;
}

tapCodeTranslation("test"); // ".... .... . ..... .... ... .... ....", `Text: "test"`);
//tapCodeTranslation("total"); // ".... .... ... .... .... .... . . ... .", `Text: "total"



    // let arrayRow1 = ["a", "b", "c/k", "d", "e"];
    // let arrayRow2 = ["f", "g", "h", "i", "j"];
    // let arrayColumn1 = ["a", "f", "l", "q", "v"];
    // let arrayColumn2 = ["b", "g", "m", "r", "w"];