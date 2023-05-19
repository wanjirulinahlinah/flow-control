let num = [10,30,3,8,7,16,45];
let i = 0;
let sum = 0;
let multiply = 1
while(i<num.length){
    console.log(num[i]);
    console.log(sum+=num[i]);
    console.log(multiply*=num[i]);
 i++
}
console.log({sum});
console.log({multiply});

function stopAtFourthIndex(arr){
    let i = 0;
    while(i<arr.length){
        if(i==4){
            break;
        }
        console.log(arr[1]);
        i++;
    }
}
let arr = [1,2,3,4,5,6,7,8,9]
console.log(stopAtFourthIndex[arr]);