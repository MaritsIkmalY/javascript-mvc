const {Income, Expense} = require('./IncomeExpense');
const fs = require('fs');

class Note{
    constructor(list) {
        this.list = list || [];
    }

    addIncome(name, total){
        let income = new Income(name, total, "income");
        this.list.push(income);
    }

    addExpense(name, total){
        let expense = new Expense(name, total, "expense");
        this.list.push(expense);
    }

    listIncome(){
        console.log("List Income");
        this.list.forEach(inc => {
            if(inc.category === 'income'){
                console.log(`${inc.name}, Rp.${inc.total}`);
            }
        });
    }

    listExpense(){
        console.log("List Expense");
        this.list.forEach(inc => {
            if(inc.category === 'expense'){
                console.log(`${inc.name}, Rp.${inc.total}`);
            }
        });
    }

    balance(){
        let totalIncome = 0;
        let totalExpense = 0;
        this.list.forEach(el => {
            if(el.category === "income"){
                totalIncome += el.total;
            }else{
                totalExpense += el.total;
            }
        });
        console.log("Balance");
        console.log(`Rp. ${totalIncome - totalExpense}`)
    }
}

module.exports = Note;