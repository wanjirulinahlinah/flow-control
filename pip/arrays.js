let num = [3,6,8,25,7,5,7];

console.log(num.length);

let multiples = num.map(item=>item*2);
console.log({multiples});



let triples = [];
 num.forEach(item=>{
    triples.push(item*2)
   });
console.log({triples});

num.filter(item =>item <10)
console.log({less});

let getSeven = num.find(itm => item == 7);
console.log({getSeven});

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

