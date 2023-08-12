function length(list) {
    let i = 0;

    while (list[i] != undefined) {
        i++;
    }
    return i;
}

//probleme regex not used for array

function filter_list(list) {
    let i;
    let j = 0;
    let newArray = [];
    let regex = list.match(/\d/g);

    for (i = 0; i < list.length; i++) {
        //if (list.match(/\d/)) {}
            newArray[j] = list[i];
            j++;
    }
    console.log("newArray->", regex, newArray, "list", list)
}

filter_list([1,2,'aasf','1','123',123]); //1, 2, 123