//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    for(let i = 0; i < dog_names.length; i++){
        let dog_name = dog_names[i];
        if (dog_string.toLowerCase().includes(dog_name.toLowerCase())) {
            new_dog = console.log(`Matched ${dog_name}`)
        }
        else console.log(`No matches`)
    
    }
    return new_dog
}

findWords()

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

Given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]


function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            arr.splice(i,1,"even index")
        }
        
    }
    console.log(arr)
}
replaceEvens(Given_arr)

// ===== Codewars problem 1 =======//
// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

// multiply(3)==15 # 3 * 5¹
// multiply(10)==250 # 10 * 5²
// multiply(200)==25000 # 200 * 5³
// multiply(0)==0 # 0 * 5¹
// multiply(-3)==-15 # -3 * 5¹

function multiply(n){
    let num_len = Math.abs(n).toString().length
    console.log(Math.abs(n) * 5 ** num_len) 
}
multiply(-3)

// ==== Codewars problem 2 ==== //

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function number_func(x){
    if (Math.abs(x) % 2 == 0){
        console.log("Even");
    }
    else{
        console.log("Odd")
    }
}
number_func(-100)

// ==== Codewars problem 3 ==== //
// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(i){
    if (i > 1){
        console.log(i * -1);
    }
    else if (i == 0 || i == -0) console.log(0);
    else {
        console.log(-i)
    };

        
};
opposite(-1)

// ==== Codewars problem 4 ==== //
// We need a function that can transform a number (integer) into a string.

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

function intToString(number){
    let num = number.toString()
    console.log(num)
    console.log(typeof num) // Just to check type
}

intToString(-100)



