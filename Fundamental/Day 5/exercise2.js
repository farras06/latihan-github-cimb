


let display
let ArrBiodata = [['Andi', 25, 'Maling' ], ['Budi', 23, 'Ngamen'],  ['Cecep', 43, 'Ojol' ]]

for (let i = 0 ; i < ArrBiodata.length; i++){
    display = ''

    for (let j = 0 ; j < ArrBiodata[i].length; j++  ){
         display += ArrBiodata[i][j] + ' '
    }
}

console.log(display)