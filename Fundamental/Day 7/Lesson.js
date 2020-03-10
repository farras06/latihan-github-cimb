

// function cetakanOrang(nama, tahunLahir, asal){
//     return{
//         nama,
//         tahunLahir,
//         asal
//     }
// }

// let a = cetakanOrang('andi','1990','jauh' )

//-------------------------------------------------

class Person {
  constructor(paramNama, paramTahunLahir, paramAsal) {
  this.nama = paramNama
  this.tahunLahir = paramTahunLahir
  this.asal = paramAsal
  }
}

class developer extends Person {
    constructor (nama, tahunLahir, asal, speciality, pengalaman) {
    super (nama, tahunLahir, asal )
    this.speciality = speciality
    this.pengalaman = pengalaman
    }
}

let a = new Person('Andi', '1990' , 'Sunda Empire')
let b = new Person('Andi', '1990' , 'Sunda Empire')

console.log(developer)