'use strict';

const findAndReplaceValueInJson = function(json, key, callback){

var objects = [];
    const getValue = function(json, key){
        
        for (var i in json) {
            if (!json.hasOwnProperty(i)) continue;
            if (typeof json[i] == 'object') {
                objects.concat(getValue(json[i], key));
            } else if (i == key) {
                json[i] = callback(json[i]);               
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
    const cardMaskSize = 6;

    //start and final numbers of card 
    const cardInitial= noBlankCardNumber.substring(0,cardMaskSize);
    const cardFinal= noBlankCardNumber.substring(noBlankCardNumberSize - 4 ,noBlankCardNumberSize);

    //masking the middle of card with ******
    let mask = ""
    for (let index = cardMaskSize; index < (noBlankCardNumberSize- 4 ); index++) {        
        mask+="*"           
    }    

    return cardInitial + mask + cardFinal
};

const replaceCardValueInJson = function(json, key){
    return findAndReplaceValueInJson(json, key, maskCard);
}


const replaceValue = function(valor){
    let mask = ""

    if(!valor){
        return valor;
    }else{
        for (let index = 0; index <= valor.length-1; index++) {  
            if(valor[index] != " "){
                mask+="*" 
            }else{
                mask+=" " 
            } 
            if(index == (valor.length-1)){
                return mask 
            }        
        }
    }      
}

const replaceFieldValueForMaskInJson = function(json, key){
    return findAndReplaceValueInJson(json, key, replaceValue);
}



module.exports = {

    replaceCreditCardValueInJson: function(json, key){
        if(json && key){
            return replaceCardValueInJson(json, key);
        }else{
            console.log("The key is empty!");
            return key;
        }
            
    },

    replaceFieldValueForMask: function(json, key){
        if(json && key){
            return replaceFieldValueForMaskInJson(json, key);
        }else{
            console.log("The key is empty!");
            return key;
        }
            
    }


}


