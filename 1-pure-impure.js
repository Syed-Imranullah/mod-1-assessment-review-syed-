const nums = [1, 2, 3]

// output = [2, 4, 6]

const doublePure = (arr) => {
    // made a new array
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[i] * 2

    }
    return newArr

};

console.log(doublePure(nums));


const doubleImpure = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2
    }
    return arr
};

console.log(doubleImpure(nums))