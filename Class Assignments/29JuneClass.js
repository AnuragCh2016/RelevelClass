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
//Problem 2: Buy and sell stock where you are allowed any number of transactions
let prices = [100,280,360,410,40,535,695]
console.log("\nPrices array:",JSON.stringify(prices));
let maxProfit = 0
i=0
let j=1
while(j<prices.length){
    if(prices[j]>=prices[i]){
        j++
        if(j==prices.length){
            maxProfit+=prices[j-1]-prices[i]
        }
    }
    else{
        maxProfit+=prices[j-1]-prices[i]
        i=j
        j=j+1
    }
}

console.log("Max profit:",maxProfit);
//-----------------------------------------------------------------------------------------------------
//Problem 3: Reverse array
let givenArr = [1,2,3,4,5]
console.log("\nOriginal array:",JSON.stringify(givenArr));
function revArray(arr,i,j){    
    while(i<j){
        [arr[i],arr[j]] = [arr[j],arr[i]]
        i++
        j--
    }
}
revArray(givenArr,0,givenArr.length-1)
console.log("Reversed array:",JSON.stringify(givenArr));
//-----------------------------------------------------------------------------------------------------
//Problem 4: Sort array of 0s and 1s
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
//-----------------------------------------------------------------------------------------------------
let canBeSorted = [1,3,4,10,9,8,12,17,19]
console.log("\nOriginal array:",JSON.stringify(canBeSorted));
function revSubToSort(arr){
    let n=arr.length
    if(n==1) return true
    let i=0
    while(i<n-1){
        if(arr[i]<=arr[i+1])i++
        else
            break
    }
    if(i==n-1) return true  //already sorted
    else{
        let j=i
        i=i-1   //last index of increasing, separating the decreasing sequence
        //console.log('Initial j value:',j);
        while(j<n-1){
            if(arr[j]>=arr[j+1]) j++
            else
                break
        }
    
        if(arr[j]<arr[i]) return false
        else{
            if(j==n-1) return true
            else{
                k=j+1
                while(k<n-1){
                    if(arr[k]<=arr[k+1]) k++
                    else
                        break
                }
                if(k==n-1){
                    console.log('Can sort by reversing from index:',i+1,'to index:',j);
                    revArray(arr,i+1,j)
                    console.log("Sorted array:",JSON.stringify(arr));
                    return true
                } else
                    return false
            }
        }
    }
}

console.log(revSubToSort(canBeSorted));