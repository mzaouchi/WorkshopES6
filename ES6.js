// Scope  

// function Hello(){
//     // {
//     //   const a = 5
//     //   console.log(a)
//     // }
//     // console.log(a)
//     // {
//     //   let b = 6
//     //   console.log(b)
//     // }
//     // console.log(b)
//     {
//       var c = 4
//       console.log(c)
//     }
//     console.log(c)
//     return("Hello Achref")
//   }
  
//   console.log(Hello())


// Constant 

// // const a = 2

// // a = 3

// // const t = [1,2,3]

// // t.push(4)

// // console.log(t)

// // t = [3,4,4]

// const obj = {name :'Brahim',age : 1}

// console.log(obj.name)
// const br = {name : "Achref",age:2,city:{street : 2,cp:1145}}
// console.log(br.city.street)

// obj.name = "Mahmoud"

// console.log(obj)


// Arrow Function

// // function Somme(a,b){
// //   return a+b
// // }


// const Somme =(a,b)=>{
//     a=a+2
//     return a+b
// }


// var Som=(a,b)=> a+b

// const Affiche=n=> "Hello "+n

// const Aff=()=> "Hello Brahim"

// console.log(Som(3,8))
// console.log(Somme(3,4))
// console.log(Affiche("Moez"))
// console.log(Aff())

// Template

// const name = "Brahim"
// const age = 1

// console.log("Hello "+name+" My age is "+age)
// console.log(`Hello
// ${name}. My age is ${age}`)

// Ternary

// var age = 40

// // if(age<=18){
// //   console.log("Enfant")
// // }else if(age<=60){
// //   console.log("Adulte")
// // }else{
// //   console.log("Vieux")
// // }

// age<=18 ? console.log('Enfant') : age<=60 ? console.log('Adulte') : console.log('Vieux')

// var moyenne = 11

// moyenne >= 10 ? console.log("Winner") : console.log('Failed')

// age <=18 && console.log('Enfant') 

// Destru

// var obj = { name: "Achref", age: 2, city: { street: 1233, cp: 1145 } }

// // console.log(obj.name)
// // console.log(obj.age)

// var {name,age,city} = obj
// var {street} = city
// console.log(name)
// console.log(age)
// console.log(street)
// console.log(obj.city.street)


// Spread

// var tab = [1,2,3,4]
// var cab = [6,4,3]
// // var d = []

// // for(let i = 0;i<tab.length;i++){
// //   d.push(tab[i])
// // }

// // console.log(d)

// // for(let i = 0;i<cab.length;i++){
// //   d.push(cab[i])
// // }

// // console.log(d)

// // console.log(tab+cab)

// var tab = [1,2,3,4]
// var cab = [6,4,3]
// var d = [...cab, ...tab]

// console.log([...tab,...cab])
// console.log(d)

// const obj = {name : "Moez"}

// console.log({...obj,city : 'Lac'})
// console.log({...obj,name : "Rami"})


console.log([0, 1, 2, 3, 4].reduce(function (accumulateur, valeurCourante, index, array) {
    return accumulateur + valeurCourante;
  }))
  
  const tab = [1,2,3]
  
  console.log(tab.reduce((a,v,i,arr)=>a+v))


  const tab = [1,2,3]

console.log(tab.map((el,i,t)=> el + 5))

console.log(tab)

console.log(tab.forEach((el, i, t) => el + 5))

const tab = [1,2,3]

console.log(tab.filter((el,i,t)=> el > 1))
console.log(tab.filter((el, i, t) => i%2 == 0))


