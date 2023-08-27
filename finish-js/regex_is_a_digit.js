function lengthTo(list) {
    let i = 0;
    while (list[i] !== undefined)
      i++;
    return i;
}
  
function regexIsDigit() {
    return (lengthTo(this) == 1) && (this.match(/[0-9]/)) ? true : false;
};