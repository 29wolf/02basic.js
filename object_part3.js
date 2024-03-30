//   how to use destructuring syntex in objecct 

const userDetails = {
    userName: "rahul",
    userCity : "kolkata",
    age : 24,
    study :"wed app",
};

const {userCity: city } = userDetails ;
console.log(city)
       

// api intro 
// api output look like object but no name 
// api output given by allows object and array mix type data 
// api data come from bankend . api json type data 
// api output key & value give by string ,boolen or numbar 

//    * a normal api look like this 
// this look like a object 

        {
            "name":"rahul halder",
            "city": "kolkata",
            "age" : 24,
            "sex" : "male",
            "last study": "12",
        };


        // a Array type api 

        [
            {}
            {}
            {}
        ]
                