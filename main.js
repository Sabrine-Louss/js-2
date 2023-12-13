// Always declare variables

// 2. Always use const if the value should not be changed

// 3. Always use const if the type should not be changed (Arrays and Objects)

// 4. Only use let if you can't use const

// 5. Only use var if you MUST support old browsers.

/************Variables *************************/

var myPrice = 100;  //box of memory 


/************************outputs****************/

alert('this is an alert ');
var text= prompt("how are you?")
console.log(text)

/********Data types : string/number/boolean/ undifined / null ***** */
var x= "hi"
var x = 17
var z = true
console.log(typeof(z))
var text="text"
console.log(Math.min(text))
// console.log(a)
/************If statements  */

var price = 1800;
if (price< 1000){
    console.log("cheap")
}
else if (price == 1800) {
    console.log("good price")
}
else {
    console.log("expensive")
}
/**********loops for******/
for (var i=0; i<=10; i ++){
    console.log(i);
}
/*****while */
var j=0; 
while (j<10){
    console.log(j)
    j++
}

/******conditional operationel */

// (=) (==) (===)

var price = "1000"
if (price === "1000"){
    alert("good")
} else{
    alert("bad")
}
/*** && || ***/
var name="gmc",
age=4,
adress="sousse";
if(name === gmc && age === 4 && adress=== "sousse"){
    alert("good");
}
else{
    alert("bad")
}

// partie 2
/*******array ****/
var tab=[1,"hello",[1,2,3,4], true, 12]
console.log(tab)

console.log(tab[1]);
/***** push /shift/ unshift ******/
/*** push add element to the end of the array  */
tab.push("hi")

/***** unshift add element to the beginning of the array **/
tab.unshift('hi')

/** pop removes the last element from the array  ***/
tab.pop();
console.log(tab)

/**shift remove the first eleemtn from the array ** */
tab.shift();
console.log(tab)

console.log(tab.length)
/*****Object ****/
var gmc = {
    name: "gomycode",
    adress: "sousse",
    age: "4",
    greet: function() {
        return `Hi, my name is ${this.name}!`;
    },
};

console.log(gmc)
console.log(gmc.name)
console.log(gmc['name'])
console.log(gmc.greet())
/** changin value  */
gmc.name="hellocode"
console.log(gmc)


/**add another  */
gmc.color="red"
console.log(gmc)
/**** remove */
delete gmc.color;
console.log(gmc)

gmc.color= function(){
    return `gmc color is  ${this.color}`
}
console.log(gmc.color)
