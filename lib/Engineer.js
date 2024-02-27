// Engineer class.
const Employee = require('./Employee');

// Engineer class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email); 
    this.github = github; 
  }

  // Method
  getGithub() {
    return this.github;
  }

  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;
