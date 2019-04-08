var cardMask = require("./app");

const cardNumber = '1234 3456 7890 1234';
const json= {nome:"leandro melo", secret:{ card:"123456789" , id:1}};
let jsonMasked = cardMask.replaceCreditCardValueInJson(json, 'card');
console.log(jsonMasked)
