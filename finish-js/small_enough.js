function smallEnough(a, limit){
    let i = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i] > limit)
            return false;
    }
    return true;
}