

let stars = ''
for (let i = 0 ;i < 6 ;i ++){
    for (let j = 0 ;j < i; j ++){

    stars = stars + "*"
    }
    
    stars = stars + "\n"
}

console.log(stars)   