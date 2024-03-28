// object declare allows two way 
        //   1 literal 
        //   2 construtor 

    // now i m useing leteral way    

    // objcet output declera allows two way 
        //  1 console.log(jsuser.email)
        //  2 console.log (jsuser["eamil"])

    const Jsuser = {
        name : "rahul",
        age  : 24 ,
        location : "naradrapur",
        email : "rahulhalder@gmail.com",
        isLoggedin : "fales" ,
        lastLoginDay : ["monday", "saturday"],
    }

    console.log(Jsuser.email);
    console.log (Jsuser["age"]);
   
    
    // how to change object key value 

    Jsuser.email = "rocksolt@gamil.com";
    console.log (Jsuser);
    
    // how to freeze any object 
    
    // Object.freeze(Jsuser)
    // Jsuser.age = 30 ;
    // console.log (Jsuser);

    // how to use a object in  function
    Jsuser.greeting = function (){
        console.log("hello node user")
    }

    console.log(Jsuser.greeting());

    Jsuser.greetingTwo = function (){
        console.log(`hello node user, ${this.name}`)
    }

    console.log(Jsuser.greetingTwo());

    // how to access symbol in object 

    const mySym = Symbol("key1");
    const myObj ={
        [mySym]:"mykey1",

    }

    console.log( myObj[mySym])
    console.log( myObj)