function pipeFix(numbers){

var i = 0 
var list = []

while (i < (numbers.length)) {

    if ( (numbers[i]) < (numbers[i+1]) ) {
        list[i] = numbers[i]

    }
    else {
        list[i] = numbers[i+1] + 1

    }

i = i + 1
    
}

console.log('Vueltas ' + i)
console.log(numbers)
console.log(numbers.length)
console.log(list)

console.log(numbers[0])

}

pipeFix ([1,2,3,4,5,6])