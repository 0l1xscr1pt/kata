function rentalCarCost(days) {
    let totalCost = 0;

    if (days > 0) {
        totalCost = (days * 40) ;
        if (days >= 3 && days < 7) {
            totalCost -= 20;
        }
        if (days >= 7) {
            totalCost-= 50;
        }
    }
    return totalCost;
}

//cost of car location
//1 day = 40$
//3 days or more = -20$
//7 days or more = -50$