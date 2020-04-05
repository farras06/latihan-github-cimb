
arr = [1,2,3,4,5]

const forEachRep = (array, cb) => {
    
    for (i = 0 ; i < array.length; i ++) {
        cb(array[i], i, array)
    }
}


forEachRep(arr, (param1, param2 , param3 ) => {
    console.log(param1, param2, param3)
})

// //=================================================================================================

// for (let item of arr) {
        
//     item = arr[i]
//     console.log(item)
// }

//===============================================================================

let saya = {
    nama: 'farras',
    pekerjaan: 'pelajar',
    status: 'sehat'
}

for (let key in saya) {
    console.log(key, saya[key])
}

//========================================================

setTimeout(() => {
    console.log('hello world')
}, 3000)

//=======================================================

setInterval(() => {
    console.log('mantap')
},1000)