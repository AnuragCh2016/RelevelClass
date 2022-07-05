//Problem 1: Efficient searching algo for a sorted 2d matrix, sorted row wise. row[i][0] > row[i-1][n-1]
function search(arr,el){
    let n = arr.length;
    let i=0,j=arr[0].length-1;
    while(i<n && j>=0){
        if(arr[i][j]>el){
            j--;
        } else if(arr[i][j]<el){
            i++;
        } else{
            return [i,j];
        }
    }
    return -1;
}

let arr = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
console.log('Given array:',arr);
let target = 13;
console.log('Element to search:',target);
let ans = search(arr,target)
if(ans==-1) console.log('Element not in matrix');
else{
    console.log('Element found at',ans[0],',',ans[1]);
}
//----------------------------------------------------------------------------------------
//Problem 2: Find the row index which has maximum no. of unique elements in a matrix efficiently.
function mostUniqueElements(arr){
    let ans=0,size=0
    for(let i=0;i<arr.length;i++){
        let checkSet = new Set(arr[i]);
        if(checkSet.size>size){
            ans=i;
            size=checkSet.size;
        }
    }
    return ans;
}

let checkArr = [[1,1,2,3],[4,5,6,7],[9,9,9,10],[0,0,0,0]]
console.log('Given matrix:',checkArr);
console.log('Most unique elements in row:',mostUniqueElements(checkArr));