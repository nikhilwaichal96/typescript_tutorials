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


//forEach with destructuring
listEmp.forEach(({ empName, empSalary }) => {
    console.log(`Employee Name: ${empName}, Salary: ${empSalary}`);
});

//destructuring
const [firstEmployee, secondEmployee] = listEmp;

console.log(firstEmployee); // Output: { empName: 'nikhil', empSalary: 1000 }
console.log(secondEmployee); // Output: { empName: 'Abc', empSalary: 2000 }

//filter by name
const filterByName = (name: string) => {
    const result = listEmp.filter(employee => employee.empName === name);
    if (result.length === 0) {
        throw new Error(`No employee found with name: ${name}`);
    }
    return result;
};

//Filter employees by names
const filterByNames = (names: string[]) => {
    const nameSet = new Set(names);
    const result = listEmp.filter(employee => nameSet.has(employee.empName));
    if (result.length === 0) {
        throw new Error(`No employees found with names: ${names.join(', ')}`);
    }
    return result;
};


//Find by name
const findByName = (name: string) => {
    const employee = listEmp.find(employee => employee.empName === name);
    if (!employee) {
        throw new Error(`No employee found with name: ${name}`);
    }
    return employee;
};


const findByNames = (names: string[]) => {
    const notFoundNames = names.filter(name => !listEmp.find(employee => employee.empName === name));
    if (notFoundNames.length > 0) {
        throw new Error(`No employees found with names: ${notFoundNames.join(', ')}`);
    }
    return listEmp.filter(employee => names.includes(employee.empName));
};


