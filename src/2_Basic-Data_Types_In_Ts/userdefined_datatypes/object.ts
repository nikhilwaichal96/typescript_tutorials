//Object

let Employee: {
  readonly name: string;
  age?: number;
  designation: string;
  companyName: string;
  address:object,
  displayName():void
};
/**Ts Error: Variable 'Employee' is used before being assigned. */
//console.log(Employee.name);
Employee = {
  name: "Nikhil",
  age: 28,
  designation: "QA Engineer",
  companyName: "ABC",
  address:{
    city:"Pune",
    area:"Hadapasar"
  },
  displayName:function(){
    console.log(`Hello ${this.name}`)
  }
};
console.log(Employee.name);
//Employee = "nik" /**Type 'string' is not assignable to type '{ name: string; age: number; designation: string; companyName: string; }' */

// Employee = {
//   name: "Nikhil",
//   designation: "QA Engineer",
//   companyName: "ABC",
// };

/**Property 'age' is missing in type '{ name: string; designation: string; companyName: string; }' but required in type '{ name: string; age: number; designation: string; companyName: string; }' */

/** TS-Error Cannot assign to 'name' because it is a read-only property.*/
//Employee.name="abc"

//Optional example
Employee = {
  name: "AVC",
  designation: "QA Engineer",
  companyName: "ABC",
  address:{

  },
  displayName: function(){
    console.log(`Hello ${this.name}`)
  }
};