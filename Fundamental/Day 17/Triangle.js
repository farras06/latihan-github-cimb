

triangleArray = (int) => {
    
    let arr = []

    for (let i = 0 ; i < int; i ++) {
        arr[i] = []

        for ( j= 0 ;j <= i; j ++ ) {
            arr[i].push(j + 1)
        }

    }

    return arr    
}

console.log(triangleArray(5))
console.log('============================================================')

//=======================================================================================================

const triangleOdd = int => {

    let arrHasil = []
    let counter = 1

    for (let i = 0; i < int; i++) {
      let arr = []

      for (let j = 0; j < i + 1; j++) {
          
        arr[j] = counter
        counter += 2
      }
      arrHasil.push(arr)
    }
    return arrHasil
  }
  console.log(triangleOdd(5))
  console.log('============================================================')

  //=======================================================================================================

  const triangleFibonacci = int => {

    let arrHasil = []

    for (let i = 0; i < int; i++) {
      let arr = []

      if (i == 0) {
        arr = [0]

      } else if (i == 1) {
        arr = [i, i]

      } else{
          arr = [...arrHasil[i-1]]

          for (let j = 0; j < i + 1; j++) {

              if (j == 0) {
                  arr[j] = arr[j] + arr[j + 1]

              } else if (j==1) {
                  arr[j] = arr[j] + arr[j - 1]

              } else {
                  arr[j] = arr[j - 2] + arr[j - 1]

              }
              
          }
      }
      arrHasil.push(arr);
    }
    return arrHasil;
  }

  console.log(triangleFibonacci(5))
  console.log('=====================================================================')

  //===================================================================================================

  const trianglePascal = int => {

    let arrHasil = []

    for (let i = 0; i < int; i++) {

      let arr = []

      if (i == 0) {
        arr = [1]

      } else if (i == 1) {
        arr = [1, 1]

      } else {
        let temp = [...arrHasil[i - 1]]

        for (let j = 0; j < i + 1; j++) {

          if (j == 0 || j == i) {
            arr[j] = 1

          } else {
            arr[j] = temp[j] + temp[j - 1]
          }
        }
      }
      arrHasil.push(arr);
    }
    return arrHasil
  }

  console.log(trianglePascal(5))

    