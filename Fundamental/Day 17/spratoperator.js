
let a = {
    nama: 'farras',
    pekerjaan: 'WFH',
    tahun: 2020
}

let b = {
    ...a, umur:21
}

console.log(b)

console.log(a)

//========================================================================================

let arr1 = ['Budi', 'Corona']
let arr2 = ['sakit', 'mampus']

let arr3 = [...arr1, ...arr2]

console.log(arr3)

//===========================================================================================

let defaultVal = {
    userName = '',
    email = '',
    pass = ''
}

const onChangeText = (key, value) => {
    defaultVal = {
        ...defaultVal,
        [key]: value
    }
}

onChangeText('userName', 'farras')

console.log(defaultVal)