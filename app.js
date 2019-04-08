'use strict';

const replaceValueInJson = function(json, key){

var objects = [];
    const getValue = function(json, key){
        
        for (var i in json) {
            if (!json.hasOwnProperty(i)) continue;
            if (typeof json[i] == 'object') {
                objects.concat(getValue(json[i], key));
            } else if (i == key) {
                json[i] = maskCard(json[i]);               
            }
        }
        return json;
    }

    return getValue(json, key);
}

const maskCard = function(cardNumber){

    const removeBlank = function(str){
        var find = ' ';
        var re = new RegExp(find, 'g');
        let noBlankCardNumber = cardNumber.replace(re, '');
        return noBlankCardNumber;
    }

    if(cardNumber)
        cardNumber = cardNumber.trim();
    else
        return cardNumber    

    //separe the card in blocks before masking    
    let noBlankCardNumber = removeBlank(cardNumber);
    let noBlankCardNumberSize = noBlankCardNumber.length;

    //card number size with and without blank
    const cardMaskSize = noBlankCardNumberSize / 4;
    let cardNumberSize = cardNumber.length;

    //start and final numbers of card 
    const cardInitial= cardNumber.substring(0,cardMaskSize);
    const cardFinal= cardNumber.substring(cardNumberSize-cardMaskSize,cardNumberSize);

    //masking the middle of card with ******
    let mask = ""
    for (let index = cardMaskSize; index < cardNumberSize-cardMaskSize; index++) {
        const element = cardNumber.charAt(index);    
        if(element.trim().length>0){
            mask+="*"
        }else{
            mask+=" "
        }    
    }    

    return cardInitial + mask + cardFinal
};

module.exports = {

    replaceCreditCardValueInJson: function(json, key){
        if(json && key){
            return replaceValueInJson(json, key);
        }else{
            console.log("The key is empty!");
            return key;
        }
            
    }

}


