
function getInitialArray(k){
    const array = [];
    for(let arrayIndex = 0; arrayIndex < k; arrayIndex++){
        array.push(undefined);
    }
    array[0] = 0;
    return array;
}

function uploadArray(array){
    while(array.includes(undefined)){
        let index = array.indexOf(undefined);
        array[index] = array[index - 1] + 1;
    }
    return array;
}

function fillArray(array){
    return array.map(element => input[element]);
}

function nextCombination(array){
    let index = array.indexOf(undefined);
    if(index > 0){
        index = index - 1;
    } else {
        index = k - 1;
    }
    const correction = k - 1 - index;
    if(array[index] < (input.length - 1 - correction)){
        array[index]++;
    } else {
        array[index] = undefined;
        if(!array.every(element => element === undefined)){
            return nextCombination(array);
        }
    }
    return array;
}

const input = [100, 200, 300, 400, 500];
const k = 3;
const combinations = [];

let array = getInitialArray(k);

while(!array.every(element => element === undefined)){
    array = uploadArray(array);
    let combination = fillArray(array);
    combinations.push(combination);
    array = nextCombination(array)
}

console.log(combinations);


