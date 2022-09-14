// Write your solution in this file!
const employee ={
    name : "Sam",
    streetAddress : "11 Broadway Street",
};

function updateEmployeeWithKeyAndValue(employee, streetAddress , value){
    const newEmployee = {...employee};
    newEmployee[streetAddress] = "11 Broadway"

    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value) {
    employee[streetAddress] = "12 Broadway";

    return employee;
};

function deleteFromEmployeeByKey(employee, name, value) {
    const newEmployee = {...employee};
     delete newEmployee.name;

    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, name, value) {
    delete employee.name;

    return employee;
};