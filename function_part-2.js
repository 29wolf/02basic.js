// in any case function ageument has many value how to calculate .
// this case we  use rest oparator (...)
// this case  value behave like  array

function calculatecartprice (...num1){
    return num1
}

// console.log (calculatecartprice(200,100,400,500))


// in case function-parameter have many value but return has one value pass 
// than that to do 

function calculatecartprice( val1, val2, ...num1){
     return num1
}

console.log(calculatecartprice(  200, 400, 600, 500))

// this val1,val2 have taken by 200,400 
// and other value taken by num1 


// how to write and read object in function 
// there ar two way write and run object in function 
                        // one way 
const  itam = {
    itamname : "baloon",
    price : 120 ,

}

function handelitam (anyobject) {
    return anyobject
}

console.log(handelitam(`useritam is ${itam.itamname} and price is ${itam.price}`))

                //    two way 

function listofitam (anyobject){
    console.log(`itamname is ${anyobject.itamname} and price ${anyobject.price}`)

}

listofitam({
    itamname: "icecreme",
    price : 100

})


// how to write array in funtion 
// there is two way to write array in function 
       //   1st way 
const myArr = [ 200, 400, 600, 800]

function listofarray (anyarray){
    return anyarray[2]
}

console.log (listofarray(myArr))

        //   2nd way 

        const sceondArr = [700,600,300,150]

function listoforder(aarray){
    console.log(aarray[0])
}

listoforder(
sceondArr
)

