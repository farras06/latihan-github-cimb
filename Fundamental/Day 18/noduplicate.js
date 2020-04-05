

const noduplicate = (arr1, arr2) => {
    
    let result = []

    for (i = 0; i < arr1.length; i++){

      if(!result.includes(arr1[i])) {
          result.push(arr1[i])
      }
    }

    for (j = 0; j < arr1.length; j++){

        if(!result.includes(arr2[j])) {
            result.push(arr2[j])
        }
      }
    return result
}

console.log(noduplicate([1,2,8,],[1,2,7]))