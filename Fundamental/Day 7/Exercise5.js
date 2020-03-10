
let arrNumber = [3, 4, 5, 6, 7, 3, 6, 9]

let dif

for ( i = 0; i < arrNumber.length; i++ ) {
   dif = Math.max(...arrNumber) - Math.min(...arrNumber)
}

console.log(dif)