function myPhoneNumder(){
    console.log("7")
    console.log("4")
    console.log("4")
    console.log("9")
    console.log("3")
    console.log("9")
    console.log("4")
    console.log("9")
    console.log("4")
    console.log("0")
}
// myPhoneNumder()  


// function mathProblem (number1,number2){
//     console.log(number1 + number2)
// }

// mathProblem(5,4)

//* a anothere sentex to store value in variable 

// const result = mathProblem(1,6)
// console.log("result: ",result)

// * using retrun syntex in function 

// function mathProblem (number1,number2){
//    let result = number1 + number2
//     return result

// }; 

// const result = mathProblem(5,6);
// console.log( "result: ",result)

//* an a anothere way write code / thre aar no need to declare a variabal 

function anotherMath(number1,number2){
    return number1+number2
    // retrun value pass korla  pora code guli ka igrone kora di
}
 const result = anotherMath(2,3)
//  console.log ( "result", result)

//  a another way to write funticon  to show user note 

function  loginUserMassage (usernam){
    return`${usernam} just logged in`
};

// console.log(loginUserMassage("rahul"));
// console.log(loginUserMassage())


// if any function has no argument passout how to deal it 

function  loginUserMassage (usernam){
    if(usernam===undefined){
        console.log ('plaece enter you usernam')
        return
    }
    return`${usernam} just logged in`
};

// console.log(loginUserMassage())


// in case function paramiter has alraedy some value how to work 

function  loginUserMassage (usernam = "rahul"){
    if(usernam===undefined){
        console.log ('plaece enter you usernam')
        return
    }
    return`${usernam} just logged in`
};

// console.log(loginUserMassage())


// in case function paramiter has some value already psss how overide
//  you can do pass some argument 


function  loginUserMassage (usernam = "rahul"){
    if(usernam===undefined){
        console.log ('plaece enter you usernam')
        return
    }
    return`${usernam} just logged in`
};

console.log(loginUserMassage('shuvandu'))
