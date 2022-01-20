const sortedArray = (numbers = [1, 2, 3, 5, 6, 8, 9]) => numbers.sort((a,b)  => a-b).map((number)=> Math.pow(number, 2))

console.log(sortedArray())