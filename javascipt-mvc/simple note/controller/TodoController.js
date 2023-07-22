const Todo = require('../model/Todo');
const TodoView = require('../view/TodoView');

class TodoController{
    static show(){
        let todos = Todo.show();
        TodoView.show(todos);
    }

    static add(todo){
        Todo.add(todo);
    }

    static delete(todo){
        Todo.delete(todo);
    }

    static update(todo){
        Todo.update(todo);
    }

    static done(todo){
        Todo.done(todo);
    }

    static message(message){
        TodoView.alert(message);
    }
}
module.exports = TodoController;