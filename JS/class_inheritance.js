// class Animal {
//     constructor(name) {
//       this.speed = 0;
//       this.name = name;
//     }
//     run(speed) {
//       this.speed = speed;
//       console.log(`${this.name} runs with speed ${this.speed}.`);
//     }
//     stop() {
//       this.speed = 0;
//       console.log(`${this.name} stands still.`);
//     }
//     hide(){
//         console.log("hide function from parent class")
//     }
//   }
  
// //   let animal = new Animal("My animal");
// //   animal.run(100)
// //   animal.stop()


//   class Rabbit extends Animal {
//     hide() {
//       console.log(`${this.name} hides!`);
//       super.hide()
//     //   console.log(super.name)
//     }
//   }
  
//   let rabbit = new Rabbit("White Rabbit");
  
//   rabbit.run(5); // White Rabbit runs with speed 5.
//   rabbit.hide(); // White Rabbit hides!
  


class A{
    //a
    constructor(x){
        this.a = x
    }
}
class B extends A{
    //a,b
    constructor(x,y){
        super(x);
        this.b = y
    }
}
class C extends B{
    //a,b,c
    constructor(x,y,z){
        super(x,y); //without a fn name, its a call to the ctr
        this.c = z
    }
}

obj = new C(11,22,33)
console.log(obj.a + " "+ obj.b + " "+obj.c)