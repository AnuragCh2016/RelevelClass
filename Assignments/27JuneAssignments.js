function replaceElements(arr){
    let copy = []
    copy.length=arr.length
    for(let i=0;i<copy.length;i++){
        if(i==0) copy[i] = arr[i]*arr[i+1]
        else if(i==copy.length-1) copy[i] = arr[i]*arr[i-1]
        else copy[i]=arr[i-1]*arr[i+1]
    }
    return copy
}

let arr = [2,3,4,5,6]
console.log(replaceElements(arr));

function moveNegativeToEnd(arr){
    //from 0 to i-1 all +ve, from j+1 to end all -ve, we check from i to j
    let i=0,j=arr.length-1
    while(i<=j){
        if(arr[i]>0) i++
        else if(arr[i]<0){
            [arr[i],arr[j]] = [arr[j],arr[i]]
            j--
        }
    }
    console.log(JSON.stringify(arr));
}

arr = [-4,3,5,-3,9,7,-12,14]
moveNegativeToEnd(arr)