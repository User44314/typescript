function addNumbers(x: number, y: number) {
  return x + y;
}
console.log(addNumbers(3, 6));

enum ContractStatus {
  Permanent,
  Temp,
  Apprentice,
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);

/* enum ContractStatus {
  Permanent = 1,
  Temp,
  Apprentice,
} */

console.log(ContractStatus[employeeStatus]);
