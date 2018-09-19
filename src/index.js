// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    let result = {};
    let H = 50,
        Q = 25,
        D = 10,
        N = 5,
        P = 1;

    if (currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    else if(currency <= 0){
        return {};
    }
    else {
        if(currency / H >=1){
            result["H"] = Math.floor(currency / H);
            currency = currency - Math.floor(currency / H) * 50;
        }
        if(currency / Q >=1){
            result["Q"] = Math.floor(currency / Q);
            currency = currency - Math.floor(currency / Q) * 25;
        }
        if(currency / D >=1){
            result["D"] = Math.floor(currency / D);
            currency = currency - Math.floor(currency / D) * 10;
        }
        if(currency / N >=1){
            result["N"] = Math.floor(currency / N);
            currency = currency - Math.floor(currency / N) * 5;
        }
        if(currency / P >=1){
            result["P"] = currency;
        }
        return (result);
    }
}