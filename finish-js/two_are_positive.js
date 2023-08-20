function twoArePositive(a, b, c) {
    if (a > 0 && b > 0 && c <= 0 || a > 0  && c > 0  && b <= 0 || b > 0  && c > 0 && a <= 0)
        return true;
    return false;
}

//two parameters are positives and the third <= 0