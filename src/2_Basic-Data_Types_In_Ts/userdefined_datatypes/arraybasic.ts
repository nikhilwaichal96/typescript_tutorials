console.log("Array Example")

let numbers=[1,2,3,4]
let numbersExp:number[]=[1,2,3,4]


numbers.push(5);

console.log(numbers)


//Filter
const filteredNumbers=numbers.filter((n)=>n>2);
console.log('Filtered array',filteredNumbers)

//Map
const squaredNumbers = numbers.map((n)=>n*n);
console.log('Squared number using map',squaredNumbers);

//ForEach
numbers.forEach((n)=>{
    console.log(n);
})

//Array object
let listEmp =[
    {
        empName:"nikhil",
        empSalary:1000
    },
    {
        empName:"Abc",
        empSalary:2000
    }

]
//Get list of employee name
const listEmpName = listEmp.map((emp)=>emp.empName)
console.log('List of employee names',listEmp)

//Filter object based on condition
const filteredEmployee = listEmp.filter((emp)=>emp.empSalary>1500)
console.log("filtered employee having salary greater than 1500",filteredEmployee)

//Find employee with name nikhil
const searchEmployeeDetails = listEmp.find((emp)=>emp.empName==="nikhil")
console.log("found employee",searchEmployeeDetails)