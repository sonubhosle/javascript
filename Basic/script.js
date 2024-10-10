// Data Types


// var,let,const
var abc = 4
var abc = 5

console.log("with Var", abc)


let cbd = 12;
cbd = 34  // Consider as global variable

console.log("with let", cbd)

const a = 56;
//  a = 50     already assign 

console.log("with const", a)


// console.log,error,prompt,alert

console.log("First Programe")
prompt("Enter your name")
console.error("Someting went wrong")
alert("Thanks For Visit")

// function keyword ,function name 


function demo(a = 40) {
    var b = 40
    var c = a + b
    console.log("Output", c)
}

demo()





function demo3() {
    var a = 40
    var b = 90
    if (a > b) {
        console.log("a is greater than b", a)
    } else {
        console.log("b is greater than a", b)
    }
}

demo3()

function demo4() {

    try {
        console.log(o)

    } catch (error) {
        console.log(error)

    }
}

demo4()



// simple brackets,function calling
// prompt('Enter Your Name');
// console.log(prompt)

