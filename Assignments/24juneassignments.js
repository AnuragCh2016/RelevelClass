function areOppositeSigns(n1,n2){
    if(n1*n2<0)
        return true;
    return false;
}

console.log(areOppositeSigns(-123,12));

function findSmallest(x,y,z){
    let ans=0
    while(x>0 && y>0 && z>0){
        x--; y--; z--;
        ans++;
    }
    return ans;
}

console.log(findSmallest(23,12,5));