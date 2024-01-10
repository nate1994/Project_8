// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]




// Add your functions below:
const validateCred = (array) => {

    /*The lastDigit is saved to a variable and stored */
    let lastDigit = array[array.length -1]

    /*The array is sliced without altering the original to get rid of the last item */ 
    let slicedArray = array.slice(0, -1)
   



    /* this section reverses the array */ 
    let reversedArray = []; 
    for (let i = slicedArray.length -1 ; i>= 0 ; i-- ){
        reversedArray.push(array[i])
    }


    /*this section returns the even indexes doubled (so every odd number) */ 
    let doubledArray = []
    for(let j = 0 ; j <=reversedArray.length-1 ; j++) {
        if(j % 2 === 0) {
            doubledArray.push(reversedArray[j] * 2)
        }
        else if ( j % 2 != 0 ){
            doubledArray.push(reversedArray[j])
        }
    }
   
    /*This section checks if the number doubled is higher than 9 */ 
    let finalArray = [] 
    for (let k = 0 ; k <= doubledArray.length -1 ; k++) {
        if(doubledArray[k] > 9){
            doubledArray[k] -= 9
        }
        finalArray.push(doubledArray[k])
    }

    /*This section sums the array */  
    let sum = 0 
    finalArray.forEach((item) => sum += item)
    
    /*This section checked if it is a valid number by taking the sumed array and adding the popped digit back */ 
    if((sum + lastDigit) % 10 === 0){
        return true
    }
    else {
        return false
    }

}




/*This function takes a nested array of cards to test and returns a nested array of invalid card numbers */

const findInvalidCard = (nestedArray) => {
    let invalidCards = []; 
    for(let i=0; i <=nestedArray.length -1 ; i++){
        if(validateCred(nestedArray[i]) === false){
            invalidCards.push(nestedArray[i])
        }
    }
    return invalidCards
}
console.log(findInvalidCard(batch))

/* This function takes a nested invalid array and returns a array of companies */ 

const idInvalidCardCompanies = (invalidCards) => {
    /*iterate through the nested array to get rid of invlaid companies(not starting with 3, 4, 5, 6, )*/

    let companyArray = []; 

    for(let i = 0 ; i <= invalidCards.length-1 ; i++){
        if(invalidCards[i][0] === 3){
            companyArray.push('Amex')
        }
        else if(invalidCards[i][0] === 4){
            companyArray.push('Visa')}
        else if(invalidCards[i][0] === 5){
            companyArray.push('Mastercard')
        }
        else if(invalidCards[i][0] === 6){
            companyArray.push('discover')
        }
    } 
    const duplicates = (companyArray)=>  {
        return companyArray.filter((value, index) => companyArray.indexOf(value) !== index)
    }
    return duplicates(companyArray)
}

console.log(idInvalidCardCompanies(findInvalidCard(batch)))
