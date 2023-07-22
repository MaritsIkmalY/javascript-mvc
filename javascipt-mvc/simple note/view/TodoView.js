class TodoView{
    static alert(message){
        console.log(message);
    }

    static show(todos){
        todos.forEach(todo => {
            const {id, task, status} = todo;
            if(status)
                console.log(`${id}. [X] ${task}`);
            else
                console.log(`${id}. [ ] ${task}`);
        });
    }
}

module.exports = TodoView;