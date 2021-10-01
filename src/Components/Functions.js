function generateRandom(n = 10){
    let arr = []
    for(let i=0; i<n; i++){
        arr.push({
            value: getRandom(),
            color: 'blue'
        });
    }
    return arr;
}

function getRandom(min = 50, max = 300){
    return Math.floor((Math.random()*(max-min))+min);
}

export default generateRandom;