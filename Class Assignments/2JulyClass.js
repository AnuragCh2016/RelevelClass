//Problem 1: To check whether array is sparse
console.log('Program to check whether given array is sparse');
function isArraySparse(arr){
    let m=arr.length,n=arr[0].length
    let count=0
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(arr[i][j]==0) count++
        }
    }
    return (count>(m*n/2))
}

let arr = [[1,0,15,0],[7,0,0,22],[0,0,0,0],[10,0,0,28]]
for(let row of arr){
    console.log(...row);
}
console.log(isArraySparse(arr));
//--------------------------------------------------------------------------------------------------
//Problem 2: Cyclically rotate array by 1
console.log('\nProgram to cyclically rotate array to the right by 1');
function cyclicallyRotate(arr) {
    //let el = arr.pop()
    arr.unshift(arr.pop())
}

let arrToRotate = [3,88,21,5,6]
console.log(...arrToRotate);
cyclicallyRotate(arrToRotate)
console.log(...arrToRotate);
//-------------------------------------------------------------------------------------------------
//Problem 3: Length of longest increasing sequence
console.log('\nProgram to find length of longest consecutive subsequence in array');
function longestConsecutive(arr){
    let s = new Set()
    for(let el of arr){
        s.add(el)
    }
    let ans=1
    for(let el of arr){
        if(!s.has(el-1)){
            let l=1,cur=el
            while(s.has(cur+1)){
                l++
                cur++
            }
            ans = Math.max(ans,l)
        }
    }
    return ans
}

let checkLongestConsecutive = [35,3,4,88,9,10,21,5,6]
checkLongestConsecutive = checkLongestConsecutive.reverse()
console.log(...checkLongestConsecutive);
console.log(longestConsecutive(checkLongestConsecutive));
