function sayHello(){
    console.log("hello there");
}

function init(){
    sayHello();
    console.log("Hello world");
}
// this is something new

window.onload = sayHello;