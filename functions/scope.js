let a = 20;//Grobal variable

function add (b){
    console.log(a + b);
    let c = 30;
    console.log(a +b+ c);
    a=60;

}
add(20);
console.log("a2",a);




function mutiply(c){
    console.log(a*c);
    d=7;
}
mutiply(3)
console.log(d);

function greet (){
    let hello = "Hi"
    function talk(){
        let greeting = "hey there";
        console.log(`${hello} ${greeting}`);
    }
    talk()
}
greet()
