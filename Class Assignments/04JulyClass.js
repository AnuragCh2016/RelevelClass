//Problem 1: Print 2d array in spiral method
/*
1 2 3 4
5 6 7 8
9 10 11 12

print as 1 2 3 4 8 12 11 10 9 5 6 7
*/
function printSpiral(arr){
    let l=0,r=arr[0].length-1,u=0,d=arr.length-1
    //if step 0 -- right, 1 - down, 2 - left, 3 - up
    let step=0,s=''
    while(l<=r && u<=d){
        if(step==0){
            for(let i=l;i<=r;i++){
                s+=arr[u][i]+' ';
            }
            u++
            step = (step+1)%4
        }
        else if(step==1){
            for(let i=u;i<=d;i++){
                s+=arr[i][r]+' ';
            }
            r--
            step = (step+1)%4
        }
        else if(step==2){
            for(let i=r;i>=l;i--){
                s+=arr[d][i]+' ';
            }
            d--
            step = (step+1)%4
        }
        else{
            for(let i=d;i>=u;i--){
                s+=arr[i][l]+' ';
            }
            l++
            step = (step+1)%4
        }
    }
    console.log('Spiral traversal:',s);
}

let arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
console.log('1.',arr);
printSpiral(arr)
//-----------------------------------------------------------------------------------------------------
//Problem 2: In a matrix, bombs denoted by -1, rest denoted by 0. When a bomb explodes, all adjacent cells values increase by 1, except if that is a bomb too
function explodeBomb(arr){
    let neighbors = [];
    let n = arr.length;
    let m = arr[0].length;

    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(arr[i][j]==-1){  //if bomb
                //console.log('Found bomb at',i,',',j);
                if(i>0) neighbors.push([i-1,j]);
                if(j<m-1) neighbors.push([i,j+1]);
                if(i<n-1) neighbors.push([i+1,j]);
                if(j>0) neighbors.push([i,j-1]);
                if(i>0 && j>0) neighbors.push([i-1,j-1]);
                if(i>0 && j<m-1) neighbors.push([i-1,j+1]);
                if(i<n-1 && j>0) neighbors.push([i+1,j-1]);
                if(i<n-1 && j<m-1) neighbors.push([i+1,j+1]);
            }
        }
    }

    for(let coords of neighbors){
        //console.log(coords);
        let [x,y] = coords
        if(arr[x][y]!=-1) arr[x][y]+=1
    }
    console.log('After explosion:',arr);
}

let bombs = [[0,-1,0,0,0],[0,0,0,-1,-1],[0,-1,-1,0,0],[-1,0,0,0,0]]
console.log('\n\n2.Original grid:',bombs);
explodeBomb(bombs);
//-----------------------------------------------------------------------------------------------------
//Problem 3: Rotate a square matrix 90 degrees clockwise, no extra space
//roate cl 90 = transpose + rev each row
function rotateClockwise(arr){
    console.log('\n\n3.Original matrix:',arr);
    transpose(arr);
    for(let row of arr){
        row = row.reverse();
    }
    console.log('After rotating 90 degrees clockwise:',arr);
}

function transpose(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<i;j++){
            [arr[i][j],arr[j][i]] = [arr[j][i],arr[i][j]]
        }
    }
}

let arr2rotate = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
rotateClockwise(arr2rotate)
//-----------------------------------------------------------------------------------------------------
//Problem 5: Multiply matrices
function multiplyMatrices(mat1,mat2){
    let r1 = mat1.length
    let c1 = mat1[0].length
    let r2 = mat2.length
    let c2 = mat2[0].length
    if(c1!=r2){
        return 'Cant be multiplied'
    } else{
        let ans = [...Array(r1)].map(()=>new Array(c2).fill(0))
        for(let i=0;i<r1;i++){
            for(let j=0;j<c2;j++){
                ans[i][j]=0;
                for(let k=0;k<r2;k++){
                    //console.log('We will multiply',mat1[i][k],'and',mat2[k][j]);
                    ans[i][j]+=mat1[i][k]*mat2[k][j]
                }
            }
        }
        return ans;
    }
}
let mat1 = [[1,7,5,4],[3,9,2,1],[5,10,8,6]]
let mat2 = [[1,5],[2,3],[9,12],[7,1]]
console.log('\n\n5.Matrix 1:',mat1);
console.log('Matrix 2:',mat2);
console.log('Multiplied matrices:',multiplyMatrices(mat1,mat2));