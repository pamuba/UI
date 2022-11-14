// function Student() {
//     this.name = 'John';
//     this.gender = 'Male';
// }
// //creating an object
// var studObj1 = new Student();

// //attaching a property to the prototype
// studObj1.age = 15;

// console.log(studObj1.age); // 15

// var studObj2 = new Student();
// console.log(studObj2.age); // undefined

/////////////////////////////////////////////////////////////

// function Student() {
//     this.name = 'John';
//     this.gender = 'M';
// }

// Student.prototype.age = 15;

// var studObj1 = new Student();
// console.log(studObj1.age); // 15

// var studObj2 = new Student();
// console.log(studObj2.age); // 15


////////////////////////////////////////////////////////////////////

let dragon = {
    name:"Tanya",
    fire:true,
    fight(){
        return 9;
    },
    sing(val1,val2){
        if(this.fire) return `I am ${this.name}, the breather of fire ${val1+val2}`
    }
};

let lizard = {
    name : "kiki",
    fire:true,
    fight(){
        return 1;
    }
}

// we can borrow the sing method for lizard using bind
// const singLizard = dragon.sing.bind(lizard)
// //2 days
// console.log(singLizard(23,33))

//CALL
// console.log(dragon.sing.call(lizard, 11,22))


//APPLY
console.log(dragon.sing.apply(lizard, [11,22]))

//I want to tell the lizard should inherit all the properties
//and methods of the above class
// lizard.__proto__ = dragon
// console.log(lizard.sing())
// console.log(lizard.fire)
// console.log(lizard.fight())