let people = [
   {name : 'Ann',age:20, height:'3Ft'}
   {name : 'Henry',age:30, height:'7Ft'}
   {name : 'Susan',age:40, height:'6Ft'}
];


let ages = people.map(item=>item.age)
console.log({ages});

let weights = people.map(item=>{
    return{
        ...item,
        weights:50,

    }
})
console.log({weights});

let changeWeight = weights.map(item=>{
    if(item.name === 'Ann'){
        item.Weight = 60;;
       }
       return item
  });
  console.log({changeWeight});