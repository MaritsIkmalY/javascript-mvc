// Proses Argv : bisa mengambil input dari terminal

//argv dengan indeks ke 2 artinya mengambil command yang ada di terminal
const command = process.argv[2];

// artinya slice(3) yaitu kita mengambil seluruh command yang ada pada terminal dari indeks ke-3 hingga ke atas
const params = process.argv.slice(3);

// Membuat command : show, add, delete, update

// Import TodoController
const TodoController = require('./controller/TodoController');

if(command === 'show')
{
    TodoController.show();
}
else if(command === 'add')
{
    TodoController.add(params);
}
else if(command === 'delete')
{
    TodoController.delete(params);
}
else if(command === 'update')
{
    TodoController.update(params);
}
else if(command === 'done')
{
    TodoController.done(params);
}
else
{
    TodoController.message("Masukkan inputan yang benar");
}
