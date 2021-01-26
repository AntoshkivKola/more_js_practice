'use strict';

// TASK 4
/*
4 Создать классы:
- Книга (автор, название, год издания, издательство)
- Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)
 */

 class Book{
   constructor(author, title, yearOfPublication, publisher){
     this.author = author;
     this.title = title;
     this.yearOfPublication = yearOfPublication;
     this.publisher = publisher;
   }
 }

 class EBook extends Book{
  constructor(author, title, yearOfPublication, publisher, format, eNumber){
    super(author, title, yearOfPublication, publisher);
    this.format = format;
    this.eNumber = eNumber;
  }
 };

 const book = new Book('Джон Р. Р. Толкин', 'Властелин колец', '1954','George Allen & Unwin');
 const eBook = new EBook('Адамс, Дуглас', 'Автостопом по Галактике', '1979','Pan Books', 'pdf', 154865);