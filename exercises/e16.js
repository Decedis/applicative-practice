// see e16.md
/* 
[
    { v: false, id: 1 },
    { v: false, id: 2 },
    { v: false, id: 3 },
]
*/
export function find(array, callback) {
    let resultVal;
    for(let search in array){
        if(callback(array[search])){
            resultVal = array[search];
            break;
        }
    }
    return resultVal;
}
