function grow(x){
    let i = 0;
    let calcul = x[i];
    while (i < x.length) {
        calcul *= x[i];
            console.log(calcul);
        i++;
    }
}

// grow([2, 2, 2, 2, 2, 2]);

//not good