const minimumAmountChange = (numbers = [5, 7, 1, 1, 2, 3, 22]) =>{
    let minimun = 0;

    for(let i= 0; i< numbers.length ; i++){
        for(let j= i+1; j < numbers.length; j++){
            console.log("j", numbers[1], "i",numbers[j], "minimum", minimun)
            if(numbers[i]+numbers[j] > minimun){
                minimun = numbers[i]+numbers[j]
            }
        }
    }
    console.log("minimun outside for",minimun)
    // return []
}

console.log(minimumAmountChange())