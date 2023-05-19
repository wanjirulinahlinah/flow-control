function greet(){
    console.log('Welcome to our site');
};
greet();
let data = [{}];

let createUser = new promises((resolve,reject)=>{
    if(data){
        setTimeout(()=>{resolve('User successfuly created')},5000);
      
    }
    else{
        setTimeout(()=>{resolve('User already exist');},5000);
    }
});

async function createUserAccount(){
    let response = createUser;
    console.log({response});
}

createUserAccount();
