

class Produk {
    constructor(name, harga) {
        this.name = name
        this.harga = harga
    }
}

let arrItem = [
    new Produk ('apel', 5000),
    new Produk ('anggur', 6000),
    new Produk ('pel' ,20000)
]

const searchProduk = (keyword) => { // search produk by keyword-------------------------------------------------------

   let hasil = arrItem.filter ((value) => value.name.toLowerCase().includes(keyword.toLowerCase()))
   return hasil
}   

console.log(searchProduk('apel'))

const rangeHarga = (min, max) => { // search produk by keyword----------------------------------------------------

    return arrItem.filter ((value) => value.harga >= min && value.harga <= max)
}

console.log(rangeHarga(3000, 700000))
