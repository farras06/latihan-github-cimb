

// function value (param1, param2) {
//     return param1 + param2
// }

//-------------------------------------------------------------

// const Value = (param1, param2 ) => param1 + param2 

//-------------------------------------------------------------------------------- HItung nilai index alphabet

// const alphaValue = (str) => {
//     str = str.split('')
//     let alpArr = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     let result = 0

//     for (i = 0 ; i < str.lenght; i ++ ) {
//         result += (alpArr.indexOf(str[i]) + 1)
//     }
//     return result
  
// }

// console.log(alphaValue('abc'))

//--------------------------------------------------------------------------------- hitung nilai index alphabet ganjil


// const alphaValue = (str) => {
//     let alpArr = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     let result = 0
//     str = str.split('')

//     for (let i = 0; i < str.length; i++) {
//         if ( i % 2 !== 0 ){
//             continue
//          }

//         result += (alpArr.indexOf(str[i])+1)
//     }
//     return result
// }

// console.log(alphaValue('abcad'))

//------------------------------------------------------------------------------------ nampilin nilai alpahabet yang d masukin

// const alphaValue = (str) => {
//     let alpArr = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     let result = ''
//     str = str.split('')

//     for (let i = 0; i < str.length; i++) {
 
//         result += (alpArr.indexOf(str[i])+1)
//     }
//     return result
// }

// console.log(alphaValue('abnf'))

//-----------------------------------------------------------------------------------------object difraction

let a = {
    nama: 'doraemon',
    asal: 'jepang',
    kontak: {
        rumah: 'rumah',
        kota: 'BSD'
    }
}

let {nama, asal, kontak: {rumah, kota}} = a

console.log(rumah)
