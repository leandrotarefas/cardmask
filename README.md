# maskkcard
Mask for credit card number in JSON (PCI Rules)


# Examples

var mask = require("./app");

const cardNumber = '1234 3456 7890 1234';
const nome = "leandro m melo"
const json= {nome: nome, secret:{ card:cardNumber , id:1}};

let maskedCard = mask.replaceCreditCardValueInJson(json, 'card');
console.log(maskedCard.secret)

const maskedName = mask.replaceFieldValueForMask(json, 'nome' );
console.log(maskedName)

## Output

Object {card: "123434******1234", id: 1}

Object {nome: "******* * ****", secret: Object}


