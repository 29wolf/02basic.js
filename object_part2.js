//* how to weite singaltrun Object 

// const tinderUser = new Object(){

// }

// *how to write nonsingaltrun object 

// const tinderUser = {                }

// using non-singaltrun object 

const tinderUser = {
    id: "1234ads",
    name: "sam",
    isLoggedin: false,
}
// console.log (tinderUser.name)


//* how to create nesting object 
//   *how to access 
const regularUser = {
    email: "rahul@gmail.com",
    fullname: {
        userfullname: {
            fristname: "rahul",
            lastname : "halder",
            },
    },
}

// console.log(regularUser.fullname.userfullname.lastname)

// *how to marg two object using methods 
const Obj = {
    1:"a",
    2:"b",
}
const Obj1 = {
    3:"a",
    4:"b",
}
const Obj2 = {
    5:"a",
    6:"b",
}

// const Obj4 = {Obj,Obj1,Obj2}; 
// const Obj4 = Object.assign(Obj,Obj1,Obj2)
const Obj4 = {...Obj, ...Obj1, ...Obj2}
// console.log(Obj4)

// *hoe to use array Object

const User = [
    {
        id:125,
        email:"sam@gamil.com",
    },
    {
        id:125,
        email:"rahul@gamil.com",
    },
    {
        id:125,
        email:"cat@gamil.com",
    },
]

// console.log(User[0].email) 

// how to use object-key  object methods 

const flower = {
    numberOfflower : 2 ,
    name: "rose",
    isLookingGood : false,
}

// console.log(Object.keys(flower));
// console.log(Object.values(flower));
console.log(Object.entries(flower));


// *how to use  hasOwnproperty in object 
// output given by boolen 
console.log(flower.hasOwnProperty("isLookingGood"))
console.log(flower.hasOwnProperty("isLookingbad"))

