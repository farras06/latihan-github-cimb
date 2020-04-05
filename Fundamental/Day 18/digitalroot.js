

const digitalroot = (int) => {
    while (int > 9 ){
        let splitInt = int.toString().split('')
        splitInt = splitInt.map(Number)
        
        let result = 0
        for (let i ; i < splitInt.length; i ++ ){
            result += splitInt[i]

        }
        
        int = result
    }
    
    return int

}

console.log(digitalroot(677878))