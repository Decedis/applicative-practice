/*
a minBy function should
• Take an array of things
• return a the element where the callback function on that element yields the lowest value

a maxBy function should
• Take an array of things
• return a the element where the callback function on that element yields the highest value
*/

export function minBy(array, cb) {
    if(array.length > 0){
        let min = cb(array[0]);
        for (let i = array.length; i > 0; i--){
            if(min > cb(array[i - 1])){
                min = cb(array[i - 1]);
            }
        }
        let returnVal = array.filter(person => {return person.age === min});
        return returnVal[0];
    }
    else {
        return undefined;
    }
}

export function maxBy(array, cb) {
    if(array.length > 0){
        let max = cb(array[0]);
        for (let i = array.length; i > 0; i--){
            if(max < cb(array[i - 1])){
                max = cb(array[i - 1]);
            }
        }
        let returnVal = array.filter(person => {return person.age === max});
        return returnVal[0];
    }
    else {
        return undefined;
    }
}
