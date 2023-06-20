function pipeFix(numbers){

var i = 0 
var list = []

while (i !== (numbers.length)) {

    if ((numbers[i]) < (numbers[i + 1]) && ((numbers[i + 1])=(numbers[i] + 1)))   {
        list[i] = numbers[i]
    }
    else {
        list[i] = numbers[i] + 1
    }

i = i + 1
    
}

//Test number 1 code modified

console.log('Vueltas ' + i)
console.log('Los numeros son: '+ numbers)
console.log(numbers.length)
console.log(list)

}

pipeFix ([2,3,5,6])