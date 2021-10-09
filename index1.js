const { studentDetails, carDetails } = require("./sample.js");
const newStudentDetails = new studentDetails("Ram", 15);

console.log(newStudentDetails);
console.log(newStudentDetails.name);

const newCarDetails = new carDetails("Alto", "60kmph");
console.log(newCarDetails);
