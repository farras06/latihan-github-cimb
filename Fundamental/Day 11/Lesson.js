
//--------------------------------------------------------------call back function

// const validator  = (arr, cb) => {
//     let arrResult = []
//     for (let i = 0 ; i<arr.length; i ++){
//         arrResult[i] = cb(arr[i])
//     }
    
//     return arrResult
// }


// console.log (validator(arrParam, val => {
    
    //      return val * 3 
    
    // }))
    
let arrParam = [1,2,3,4]

console.log(arrParam.map(val => {
    val * 3
}))