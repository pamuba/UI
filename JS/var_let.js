//1. Scoping rule
// function run(){
//     var foo = "Foo";
//     let bar = "Bar";

//     // console.log(foo, bar)

//     {
//         var moo = "Moo";
//         let baz = "Bazz"
//         // console.log(moo,baz)
//     }
//     console.log(moo)
//     // console.log(baz)
// }
// run()
// // dept - var dept
// console.log(moo)

//2.Hoisting
// function run(){

//     //let foo
//     //var moo

//     console.log(foo)
//     var foo = "Foo";
//     console.log(foo)
// }
// run()

//3.Redecleration
// var foo = "hello"
// let foo = "hii"

// console.log(foo)

// var funcs = [];
// //0 , 1, 2

// for(var i=0;i<3;i++){
//     funcs[i] = function(){
//         console.log("My Value:"+i)
//     }
// }

// for(var j=0;j<3;j++){
//     funcs[j]();
// }

const fn = "John"
fn = "new name"