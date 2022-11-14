function sum(a,b=3){
   return a+b
}

let ar = (a, b=3) => a+b

console.log(ar(1,5))

//arrow fn dont have this keyword but can borrow from the parent
//arrow fn dont have argments
//Cant be called with new 
//arrow fn dont have super

let batch = {
    title: "UI batch",
    students: ["John", "Jack"],

    showList(){
        console.log(this.title)
        this.students.forEach((student)=>{
            console.log(this.title+":"+student)
        })
    }
}

batch.showList()