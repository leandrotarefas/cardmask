# cardmask
Mask for credit card number in JSON (PCI Rules)


# Examples

## Card Number

let cardNumber = '1234 5678 9012 3456';

let json= {card:cardNumber,nome:"leandro mmelo"};

### output:

{ card: '1234 5678 9012 3456', nome: 'leandro mmelo' }

{ card: '1234 **** **** 3456', nome: 'leandro mmelo' } 

##Card Number with diferent pattern on internal Json

cardNumber = '1234 3456';

json= {nome:"leandro mmelo", secret:{ card:"123456789" , id:1}};

### output:

{ nome: 'leandro mmelo', secret: { card: '123456789', id: 1 } }

{ nome: 'leandro mmelo', secret: { card: '12*****789', id: 1 } }

## Multiple card Numbers in Json

let cardNumber = '1234 3456 5678';

let json= {nome:"leandro mmelo", 
          secret: [ { card:"123456123" , id:1},{card:"123456123" , id:2 } ] };     

### output:

{ nome: 'leandro mmelo',
  secret: [ { card: '123456123', id: 1 }, { card: '123456123', id: 2 } ] }

{ nome: 'leandro mmelo',
  secret: [ { card: '12 **** 123', id: 1 }, { card: '12 **** 123', id: 2 } ] }

## Any number that needs to be masking

let cardNumber = '12345678';

let json= {card:cardNumber,nome:"leandro mmelo"};

### output:

{ card: '12345678', nome: 'leandro mmelo' }

{ card: '12****78', nome: 'leandro mmelo' }
