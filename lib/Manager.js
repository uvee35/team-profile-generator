//manager class that extends employee class
const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email); 
    this.officeNumber = officeNumber; 
  }

  // Method
  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;
