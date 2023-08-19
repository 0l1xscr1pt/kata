function length(list) {
    let i = 0;
    
    while (list[i] !== undefined) {
        i++;
    }
    console.log(i);
    return i;
}