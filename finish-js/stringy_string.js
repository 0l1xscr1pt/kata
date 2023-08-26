function stringy(size) {
    let string = "";
    let i = 0;

    if (size > 0) {
        while (i < size) {
            ((i % 2) == 0) ? (string += "1") : (string += "0");    
            i++;
        }
    } else 
        return 1;
    return string;
}