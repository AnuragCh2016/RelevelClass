let arr = [1,2,3,4,5,6,7]
console.log(JSON.stringify(arr));
function findElementAt(arr,index){
    if(index>=0) return arr[index]
    else
        return arr[arr.length+index]
}
console.log('Class problem, to make our own findElementAt function')
console.log('findElementAt(arr,3):',findElementAt(arr,3));
console.log('findElementAt(arr,-3):',findElementAt(arr,-3));

console.log('\nClass problem: to make our own push and pop')
console.log('Before push and pop:',JSON.stringify(arr))

function myPush(arr,element){
    arr.length = arr.length+1
    arr[arr.length-1]=element
}

function myPop(arr){
    let lastElement = arr[arr.length-1]
    arr[arr.length-1] = undefined
    arr.length = arr.length-1
    return lastElement
}

myPush(arr,8)
console.log('Pushing 8: ',JSON.stringify(arr));

let popped = myPop(arr)
console.log('Popping: ',JSON.stringify(arr));
console.log('Popped element:',popped);

//Problem 1: Remove duplicate element in array
console.log('\nDeck practice problem 1: Remove duplicate element from array');
arr = ['a','b','c','a','c','d','a']
console.log('Original:',JSON.stringify(arr));
let obj={}
for(let l of arr){
    //console.log(l);
    if(obj[l]==undefined){
        obj[l]=1
    } else{
        obj[l] = obj[l]+1
    }
}
/* 
for(const key of Object.keys(obj)){
    output.push(key)
}
console.log(output);
*/

let output = Object.keys(obj)
console.log(output);

//---------------------------------------------------------------------------------------------------

//Problem 2
console.log('\nDeck practice problem 2: Iterate over arr of objects and frame meaningful sentence');
const cars = [
    {   color: 'black',
        speed: 120,
        brand: 'Audi',
        start: function(){
            console.log('Car is starting');
        },
        stop: function(){
            console.log('Car is stopping');
        }
    },
    {   color: 'red',
        speed: 120,
        brand: 'BMW',
        start: function(){
            console.log('Car is starting');
        },
        stop: function(){
            console.log('Car is stopping');
        }
    }
]

for([index,obj] of cars.entries()){
    console.log(`My car is ${obj.brand} and the color is ${obj.color}`);
}

//---------------------------------------------------------------------------------------------------

//Problem 3: Count occurrence of each character in string
console.log('\nDeck practice problem 3: Count freq of each char in string');
let str = "OCCURRENCE"
console.log('String is:',str);
let strArr = Array.from(str)
let charMap={}
for(let char of strArr){
    if(charMap[char]==undefined)
        charMap[char]=1
    else
        charMap[char]+=1
}

for([character,freq] of Object.entries(charMap)){
    console.log(character,'occuring',freq,'times');
}