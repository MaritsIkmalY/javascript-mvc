const {Income, Expense} = require('./IncomeExpense');
const fs = require('fs');

class Note{
    static data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))

    static listIncome(){
        let incomes = this.data.incomes;
        console.log('List Income');
        incomes.forEach(income => {
            const {name, total} = income;
            console.log(`${name}, Rp.${total}`);
        });
    }

    static listExpense(){
        let expenses = this.data.expenses;
        console.log('List Expense');
        expenses.forEach(expense => {
            const {name, total} = expense;
            console.log(`${name}, Rp.${total}`);
        });
    }

    static addIncome(name, total){
        let income = new Income(name, total, "income");
        this.data.incomes.push(income);
        this.save();
    }

    static addExpense(name, total){
        let expense = new Expense(name, total, "expense");
        this.data.expenses.push(expense);
        this.save();
    }

    static balance(){
        let totalIncomes = 0;
        let totalExpenses = 0;

        this.data.incomes.forEach(income => {
            totalIncomes += Number(income.total);
        });

        this.data.expenses.forEach(expense => {
            totalExpenses += Number(expense.total);
        });

        console.log(`Balance : Rp.${totalIncomes - totalExpenses}`);
    }

    static save(){
        fs.writeFileSync('./data.json', JSON.stringify(this.data, null, 3));
    }
}

module.exports = Note;