function multiple(number){
    let i = 0;
    let sum = 0;
    let list = [];
    let multipleOf3 = 0;
    let multipleOf5 = 0;

    while ((multipleOf5 + 5) < number) {
        multipleOf5 += 5;
        list[i] = multipleOf5;
        sum += multipleOf5;
        i++;
    }

    while ((multipleOf3 + 3) < number) {
        multipleOf3 += 3;
        for(i = 0; i < list.length ; i++) {
            if (list[i] === multipleOf3)
                sum -= multipleOf3;
        }
        sum += multipleOf3;
    }
    console.log(sum);
    return sum;
}