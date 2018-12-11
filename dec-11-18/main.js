// Scope
// Determines what can see a variab;e
// +++++++++++GLOBAL+++++++++++
// Has no parent
// anyone can see it anywhere, and change it anywhere
// if it belongs to the window or is defined outside
// of all functions (just outside the script tag), it is global
// awesome for small programs or when necessary, but..
// dangerous for large or high traffic progams. 

// In python, globals are variables that are all the way to the left 

// +++++++++++LOCAL+++++++++++
// Local variables live INSIDE functions and are visible and changeable 
// only to that function and its child functions.


var iAmAGlobal = 1
console.log(iAmAGlobal)
console.log(window.iAmAGlobal)

function checkScope(){
    // this is not a global variable==
    var iAmAGlobal = 2
    iAmAGlobal++
    console.log(iAmAGlobal)
}
checkScope()
console.log(iAmAGlobal)
var a=1
var b
function child(){
    b=2
    console.log(a)
    console.log(b)
    for (var i=0;i<10;i++){
        a++
    }
    function grandChild(){
        console.log(`I am a grandchild. I can see and change 
        my stuff, my parents' stuff, and their parents' stuff!`)
        a++
        b++
    }
    grandChild()
}
child ()
console.log(a)
console.log(b)

// ++++++++++Hoisting++++++++++
// anytime you have the word var, js wil take the var and put it at the 
// top of the function whether you like it or not

var q = 1
function p(){
    console.log (q)
    var q = 3
    console.log(q)
// what java reads is:
// var q;
// console.log(q)
// q=3
// console.log(q)
// so, while intuitively, the first answer would be one and the second would be three,
// the true one is undefined as  q has no value and then 3. 
}
p()
// In addition to var, JS got a facelift that added let and const
// let + const = no more var
// they added it for people from other programming languages that didn't like hoisting.
// let is a block level variable, and lives only as long as the brackets surrounding it live.
for (var i = 0; i<10;i++){} 
console.log (i)
// rather than printing off undefined, it found the "var i" and placed it at the top of the code
// and replaced "var i = 0" with i=0
for (let j=0;j<10;j++){}
// console.log(j) (commented out to keep from breaking code)
// this would be an uncaught reference error.
// for (const k =0;k<10;k++){}(commented out to keep from breaking code)
// console.log(k) (commented out to keep from breaking code)
// this will give a type error
const playerName = prompt("What is your name?")
console.log (playerName)