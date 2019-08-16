
const nestedToObject = (arr) => {
    // default state for each prediction percent
    let obj = {
        "java": "0.00%",
        "python": "0.00%",
        "javascript": "0.00%",
        "c++": "0.00%",
        "c#": "0.00%",
    }
    for(let item of arr){
        obj[item[0]] = toPercent(item[1])
    }

    return obj
}

const toPercent = (n) => {
    return n ? (n * 100.).toFixed(2) + "%" : 0;
}

export default nestedToObject