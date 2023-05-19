let success= true;

let promises = new Promise((resolve,reject)=>{
    if(success){
        resolve('I have a job')
    }
    else{
        reject('I do not have a job')
    }
});

console.log({promises});

promises.then(()=>{

    console.log('I wil pay all debts');
})

promises.catch(()=>{

    console.log('I will apply again after three months');
})

promises.finally(()=>{

    console.log('I will make my family happy');
})

