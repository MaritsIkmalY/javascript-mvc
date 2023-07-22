const Note = require('./Note');

let note = new Note();

note.addIncome("gaji bulan", 5000);
note.addExpense("bayar listrik", 1000);
note.listIncome();
note.listExpense();
note.balance();