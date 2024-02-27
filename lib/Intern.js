// Intern class subclass of Employee. 
const Employee = require('./Employee');

// Intern class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email); 
    this.school = school; 
    }

    // Method
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }             

}

module.exports = Intern; 