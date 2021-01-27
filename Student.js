'use strict'

// TASK 2
/*
2.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
2.2 Создать объект, который содержит свойства, о факультете и кафедре.
2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
2.4 Реализовать функцию выводит на экран всю информацию о студенте 
*/

/*
const campus = {
  dataFaculty : 'some date about faculty...',
  dataChair : 'some date about chair',
}

const student = {
  name : 'Test',
  surName : 'Testovich',
  isMale : true,
  contacts : [ '0894547812', 'mail@mail.com'],
  campus : campus,
}

console.log(student);
*/

class Campus {
  constructor(dataFaculty, dataChair) {
    this.dataFaculty = dataFaculty;
    this.dataChair = dataChair;
  }
}

class Student {
  constructor(name, surName, isMale, contacts, dataFaculty, dataChair) {
    this.name = name;
    this.surName = surName;
    this.isMale = isMale;
    this.contacts = contacts;
    this.campus = new Campus(dataFaculty, dataChair);
  }

  showInfo() {
    return `   Name: ${this.name},
    SurName: ${this.surName},
    Male: ${this.isMale ? 'Man' : 'Woman'},
    Contacts: ${this.contacts},
    Faculty: ${this.campus.dataFaculty},
    Chair: ${this.campus.dataChair}`;
  }
};

const stud = new Student('Test', 'Testovich', true, ['0894547812', 'mail@mail.com'], 'Information technology', 'SD');




