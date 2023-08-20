function opposite(number) {
    if (number > 0)
        number -= number * 2;
    else if (number < 0)
        number *= -1;
    return number;
}