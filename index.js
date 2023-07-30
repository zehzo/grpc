const Schema = require("./employees_pb");
const fs = require("fs");

const jose = new Schema.Employee();
jose.setId(1001);
jose.setName("Jose");
jose.setSalary(100000);

const joao = new Schema.Employee();
joao.setId(1002);
joao.setName("joao");
joao.setSalary(300000);

const employees = new Schema.Employees();
employees.addEmployees(jose);
employees.addEmployees(joao);

const bytes = employees.serializeBinary();
console.log("binary" + bytes);
fs.writeFileSync("binarydata", bytes);

const employees2 = Schema.Employees.deserializeBinary(bytes);
console.log(employees2.toString());
