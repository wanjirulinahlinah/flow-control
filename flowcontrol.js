//Write a function that accepts an array of strings and console.logs each element using a for loop.
let arr = (["Hello","world","This","Is","My","String"]);
for(let element of arr){
    console.log(element.toString())
}
let myFunction = (element)=> element.charAt(0);

myFunction(arr)

var str = new String("This is string");
console.log( arr.toString().charAt(0));
console.log( arr.toString().charAt(1));
console.log( arr.toString().charAt(2));
console.log( arr.toString().charAt(3));
console.log( arr.toString().charAt(4));
console.log( arr.toString().charAt(5));


//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
var array = [23,67,120,170,200,212,350];
array.forEach(function(x,i){
    array[i]= (x * .2);
    console.log(array);
});
//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
let mutiplyArray = [1,11,7,3,8,2,3,2,10,3,6,2,5];
function multiplyNumbers(){
    let numbers;
    mutiplyArray.forEach(function(element)){
        (element  * 8);
        console.log(element)
    }
}
let addedArray =[1,11,7,3,8,2,3,2,10,3,6,2,5];
function addedArray(){
    let numbers;
    addedArray.forEach(function(element)){
        (element + 5);
        console.log(element)
    }
}


//Write a function that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index
//let arrNum = [1,2,3,4,5,6,7,8,9];
let arrNum = [1,2,3,4,5,6,7,8,9];
while (let i=0; i<num.length; i++){
    console.log(i);
    console.log(arrNum[i]);
}

while(let i=0;i<num.length;i++){
    if(i ===4){
        break;
    }
    console.log({"arrNum":arrNum[i]});
}

while(let i =0;i<num.length;i++){
    if(i ===4){
        continue;
    }
    console.log({"continue":num[i]});
}


//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index
//let fruits= ['apple','plum','banana','strawberries','kiwi']

let fruits = ['apple','plum','banana','strawberries','kiwi']
for(let i=0; i<num.length; i++){
    console.log(i);
    console.log(fruits[i]);
}
for (let i=0;i<num.length;i++){
    if(i ===2){
        break;
    }
    console.log({"fruits":num[i]});
}
for (let i=0;i<num.length;i++){
    if(i ===2){
        continue
    }
    console.log({"continue":fruits[1]});
}