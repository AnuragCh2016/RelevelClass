//Assignment 1: For a number n, print hourglass
function printPyramid(n){
    //for inverted part
    for(let i=1;i<=n;i++){
        let s=''
        //for spaces
        for(let sp=1;sp<=i;sp++)
            s+=' '
        //for numbers
            for(let j=i;j<=n;j++){
            s+=j+' '
        }
        console.log(s);
    }
    //for non-inverted part
    for(let i=n-1;i>=1;i--){
        let s=''
        //for spaces
        for(let sp=1;sp<=i;sp++){
            s+=' '
        }
        //for numbers
        for(let j=i;j<=n;j++){
            s+=j+' '
        }
        console.log(s);
    }
}

printPyramid(7)
//-----------------------------------------------------------------------------------------------
//Assignment 2: Find 2nd smallest number
function findSecondSmallest(arr){
    let min=arr[0],max=0
    for(let i=1;i<arr.length;i++){
        if(arr[i]<min) min=arr[i]
        if(arr[i]>arr[max]) max=i
    }
    let ans=arr[max]
    for(let i=0;i<arr.length;i++){
        if(arr[i]<ans && arr[i]!=min){
            ans=arr[i]
        }
    }
    return ans;
}

let arr = [11,34,54,22,13,78]
console.log(findSecondSmallest(arr));