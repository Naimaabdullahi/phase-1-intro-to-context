// Your code here
function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(arr) {
    return arr.map(createEmployeeRecord);
}

function createTimeInEvent(employee, dateStamp) {
    let [date, hour] = dateStamp.split(' ');
    employee.timeInEvents.push({ type: "TimeIn", date, hour: parseInt(hour) });
    return employee;
}

function createTimeOutEvent(employee, dateStamp) {
    let [date, hour] = dateStamp.split(' ');
    employee.timeOutEvents.push({ type: "TimeOut", date, hour: parseInt(hour) });
    return employee;
}

function hoursWorkedOnDate(employee, date) {
    let timeIn = employee.timeInEvents.find(e => e.date === date).hour;
    let timeOut = employee.timeOutEvents.find(e => e.date === date).hour;
    return (timeOut - timeIn) / 100;
}

function wagesEarnedOnDate(employee, date) {
    return hoursWorkedOnDate(employee, date) * employee.payPerHour;
}

function allWagesFor(employee) {
    return employee.timeInEvents.reduce((total, e) => total + wagesEarnedOnDate(employee, e.date), 0);
}

function calculatePayroll(employees) {
    return employees.reduce((total, employee) => total + allWagesFor(employee), 0);
}
