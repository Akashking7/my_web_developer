function getMilk(money) {
    console.log("leavehome");
    console.log("go to shop");
    var numberofBottles = Math.floor(money / 1.5); // one milk is 1.5

    console.log("buy " + numberofBottles + " bottles of milk");

    console.log("go to home");
    console.log("remaining change is");
    return money % 1.5; // remaining of the division

}

var change = getMilk(4); //4 is money we giving
console.log(change);