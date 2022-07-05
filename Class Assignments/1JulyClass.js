//Problem 1: max and min element of array
let arr = [2,3,15,6]
console.log("Array:",JSON.stringify(arr));
let min=arr[0],max=arr[0]

for(let i=1;i<arr.length;i++){
    min = Math.min(min,arr[i])
    max = Math.max(max,arr[i])
}

console.log("Max:",max,"Min:",min);

//-----------------------------------------------------------------------------------------------------
//Problem 2: Print prime numbers till n
function isPrime(num){
    for(i=2;i<=Math.sqrt(num);i++){
        if(num%i==0) return false
    }
    return true
}

function primesTillN(n){
    let s='Primes till '+n+' are: '
    for(let i=2;i<=n;i++){
        if(isPrime(i)){
            s+=i+' '
        }
    }
    console.log(s);
}

primesTillN(20)
//-----------------------------------------------------------------------------------------------------
//Problem 3: Sum digits of number till we get single digit sum
function singleDigitSum(n){
    if(n<10){
        //console.log('Sum of digits for',n,'is:',n);
        return n
    }
    else{
        let sum=0,copy=n
        while(n>0){
            sum+=n%10
            n=Math.floor(n/10)
        }
        //console.log('Sum of digits for',copy,'is:',sum);
        return singleDigitSum(sum)
    }
}
let num = 1234543
console.log('Sum of digits of',num,'is:',singleDigitSum(num));
//-----------------------------------------------------------------------------------------------------
