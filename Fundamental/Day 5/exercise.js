// nama umur kerjaan
// jumlah orgnya ada 5

let display
let empName = ['adi' ,'budi', 'cecep','dedi' ,'erwin']
let empAge = [24, 23, 25, 26, 32 ]
let empJob = [ 'chef', 'juri', 'doctor', 'ngamen', 'maling']
let phoneNumber = ['0821', '0651', ['0567' , '00897'], '0967', ['08374' ,'07653']]

display = ''
for (i = 0; i < empName.length; i ++)
    

 display = display  + (`${empName[i]} ${empAge[i]} ${empJob[i]}  ${phoneNumber[i]}\n`)

 console.log(display)




