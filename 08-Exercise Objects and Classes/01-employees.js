function createListOfEmployees(employees) {
    let employeesList = {};

    for (const employee of employees) {
        employeesList[employee] = employee.length;
    }

    for (const employeeName in employeesList) {
        console.log(`Name: ${employeeName} -- Personal Number: ${employeesList[employeeName]}`);
    }
}
