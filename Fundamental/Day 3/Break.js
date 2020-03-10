
let len = 50
let fizzbuzzcounter = 0

for(let i = 1; i <= len; i++){

    if((i % 3 == 0 ) && (i % 5 == 0)){
        console.log("FizzBuzz")
        fizzbuzzcounter += 1

        if(fizzbuzzcounter == 2){
            break
        }
    } else if (i % 3 == 0 ){
        console.log("fizz")
    } else if (i % 5 == 0){
        console.log("buzz")
  
    } else {
        console.log(i)
    }
}
    