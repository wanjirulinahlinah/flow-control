//Given an array num of numbers with a length of n find the target of the array
// Return the taget if the target is found elsenull.
function binary(num,target){
    let left =0
    let right=num.length-1
    while(left<=right){
        let middle=Math.floor((left+right)/2);
        if(num[middle]===target){
            return middle
        }
        else if (num[middle]>target){
            right=middle-1;
        }
        else{
            left=middle+1;
        }
    }
    return null
    }
    let num=[2,5,7,9,11,13,15,17,21,25]
    let target =13
    console.log(binary(num,target))






