// three way to write array
const myArr =[0,1,2,3,4,5] ;
// console.log(myArr)

const myHero =["ironman","suparman","batman"]
// console.log(myHero)

const myArrTwo = new Array(0,1,2,3,4,5);
// console.log(myArrTwo)

// some array methods 

 console.log(myArr.push());
 console.log(myArr.pop());
 console.log(myArr.unshift(1));
 console.log(myArr.shift());
 console.log(myArr.includes());
 console.log(myArr.slice(1,3));
 console.log("a",myArr);
 console.log("b",myArr)
 console.log(myArr.splice(1,2))
console.log("c",myArr)

// how to two array marg 

// using concet methods 

const myDchero = ["spydi","thor","aquaman"]
const all_heros = myHero.concat(myDchero);1
// console.log(all_heros)

// a another methods to marg two array 

//  this methods call spread methods 
const All_new_hero = [...myHero,...myDchero];
console.log(All_new_hero)

// how to use flat methods  
    //   flat methods used to when a array nesting many of array 
   //   need convert a singal array ouput

   const newArr =[0,1,2,3,4,5,[6,7,8],9,]
   console.log(newArr.flat(Infinity))

//    how to use isarray methods 

console.log(Array.isArray("rahul"))

// how to use from in array methods 

console.log(Array.from("rahul"))

// how to use of methods in array 

const score= 100
const score1= 100
const score2= 100
console.log(Array.of(score,score1,score2))