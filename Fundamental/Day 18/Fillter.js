
let arr = [1,6,8,3,4,5]

const repfillter = (arr, cb) => {
    let result = []

    for (i = 0 ; i < arr.length; i ++) {

        if(cb(arr[i], i, arr)){
            result.push(arr[i])
        }
        

    }
    return result
}

console.log(repfillter(arr,(val, idx, array) => {
    return val >= array.length
}))