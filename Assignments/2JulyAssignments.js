//Problem 1: Given an array having 0,1 as input, We need to write a function that sorts the array in ascending order without using inbuilt sort function
let zeroesAndOnes = [1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0]
//idea: 0 to i-1 0's, j+1 to end 1's. i check from i to j
console.log("\nOriginal array:",JSON.stringify(zeroesAndOnes));
i=0,j=zeroesAndOnes.length-1
while(i<=j){
    if(zeroesAndOnes[i]==0){
        i++;
    } else{
        [zeroesAndOnes[i],zeroesAndOnes[j]] = [zeroesAndOnes[j],zeroesAndOnes[i]]
        j--
    }
}
console.log("Sorted array:",JSON.stringify(zeroesAndOnes));
//---------------------------------------------------------------------------------------------------
//Problem 2: Given 2D Array, you need to check whether that array is a magic square or not
function isMagicSquare(arr){
    let r = arr.length, c = arr[0].length
    let checkSum = sumRow(arr,0);
    for(let i=1;i<r;i++){
        if(sumRow(arr,i)!=checkSum) return false;
    }
    for(let j=0;j<c;j++){
        if(sumCol(arr,j)!=checkSum) return false;
    }
    let sumDiag1=0,sumDiag2=0
    let i=0,j1=0,j2=c-1;
    while(i<r){
        sumDiag1+=arr[i][j1++]
        sumDiag2+=arr[i][j2--]
        i++;
    }
    if(sumDiag1!=checkSum||sumDiag2!=checkSum) return false;

    return true;
}

//helper fn.s
function sumRow(arr,i){
    let sum=0
    for(let j=0;j<arr[0].length;j++){
        sum+=arr[i][j];
    }
    return sum;
}

function sumCol(arr,j){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i][j];
    }
    return sum;
}

let magicSquareCheck = [[2,7,6],[9,5,1],[4,3,8]]
console.log('Matrix to check if magic sq or not:',magicSquareCheck);
console.log(isMagicSquare(magicSquareCheck));