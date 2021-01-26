'use strict'

class User {
  constructor(name, surName) {
    this.name = name;
    this.surName = surName;
  }
  getFullName() {
    return `${this.name} ${this.surName}`;
  }
}

class Student extends User {
  /**
   * 
   * @param {string} name 
   * @param {string} surName 
   * @param {Date} date 
   */
  constructor(name, surName, date) {
    super(name, surName);
    if(date.getFullYear() > new Date().getFullYear()){
      throw new RangeError('Not a student!');
    }
    this._date = date;
  }
  get date() {
    return this._date;
  }
  getCourse() {
    const currentDate = new Date();
    const validDate = (currentDate.getFullYear() <= this.date.getFullYear() + 5) &&  (currentDate.getFullYear() >= this.date.getFullYear());
    
    if (!validDate) {
      throw new RangeError('Not a student!');
    }
   
    if(currentDate.getFullYear() === this.date.getFullYear() + 5){
      return currentDate.getFullYear() - this.date.getFullYear();
    }
    return currentDate.getFullYear() - this.date.getFullYear() + 1;
  }
}


