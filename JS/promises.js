let promise = new Promise(function(resolve, reject) {
    setTimeout(() => reject("Error"), 1000);
  });


// promise
// .then(function(result){
//     console.log("Result "+result)
// }).catch(function(error){
//     console.log("Error "+ error)
// })



promise
.then(function(result){
    console.log("Result "+result)
},function(error){
    console.log("Error "+ error)
})


  


  //resolve - contains the data we promised
  //rejected - in case we dont get the data