// PLEASE DON'T change function name
function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency > 10000) {
        return {
            error: "You are rich, my friend! We don't have so much coins for exchange"
        }
    }

    const Obj = {
        "H": 50,
        "Q": 25,
        "D": 10,
        "N": 5,
        "P": 1
    };
    //H, Q, D, N and P
    let result = {
    }
    let amount;
    while (currency > 0) {
        for (x in Obj) {
            amount = Math.floor(currency / Obj[x]);
            if (amount >= 1) {
                result[x] = amount;
                currency -= amount * Obj[x];
            }
        }
    }
    return result;
}
//console.log("9999999",makeExchange(9999999));
console.log("9999", makeExchange(9999));
console.log("1000", makeExchange(1000));
console.log("967", makeExchange(967));
console.log("8043", makeExchange(8043));

module.exports = makeExchange;
