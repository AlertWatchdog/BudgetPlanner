import {IBudget, IExpenseCategory, IIncomeCategory, ISavingsCategory, ISaving, IIncome, IExpense, IYear, IMonth} from './datamodel';
export class Database{
    public getCurrentYear(): IYear{
        var thisYear: IYear = {
            year: 2022,
            totalExpenses: 1000,
            totalIncomes: 2000,
            totalSavings: 1000,
            months: [{
                month: 1,
                totalExpenses: 500,
                totalIncomes: 1000,
                totalSavings: 500,
                expenses: [{
                    name: "Ernährung",
                    totalExpenses: 300,
                    expenses: [{
                        name: "Einkauf",
                        amount: 100,
                        date: new Date("01.01.2022"),
                        monthly: false
                    },
                    {
                        name: "Einkauf",
                        amount: 100,
                        date: new Date("21.01.2022"),
                        monthly: false
                    },
                    {
                        name: "Einkauf",
                        amount: 100,
                        date: new Date("11.01.2022"),
                        monthly: false
                    }
                    ]
                }, {
                    name: "Miete",
                    totalExpenses: 200,
                    expenses: [
                        {
                            name: "Miete",
                            amount: 200,
                            date: new Date("01.01.2022"),
                            monthly:true
                        }
                    ]
                }],
                incomes: [{ name: "Gehalt", totalIncome: 1000, incomes: [{name: "Gehalt", amount: 1000, date: new Date("27.01.2022"), monthly: true }]}],
                savings: [{name : "Aktien", totalSavings: 300, savings: [{name: "GME", amount: 300, date: new Date("27.01.2022"), monthly: false }]},
                          {name : "Krypto", totalSavings: 200, savings: [{name: "BTC", amount: 200, date: new Date("27.01.2022"), monthly: false }]}],
                budgets: []
            },
            {
                month: 2,
                totalExpenses: 500,
                totalIncomes: 1000,
                totalSavings: 500,
                expenses: [{
                    name: "Ernährung",
                    totalExpenses: 300,
                    expenses: [{
                        name: "Einkauf",
                        amount: 100,
                        date: new Date("01.01.2022"),
                        monthly: false
                    },
                    {
                        name: "Einkauf",
                        amount: 100,
                        date: new Date("21.01.2022"),
                        monthly: false
                    },
                    {
                        name: "Einkauf",
                        amount: 100,
                        date: new Date("11.01.2022"),
                        monthly: false
                    }
                    ]
                }, {
                    name: "Miete",
                    totalExpenses: 200,
                    expenses: [
                        {
                            name: "Miete",
                            amount: 200,
                            date: new Date("01.01.2022"),
                            monthly:true
                        }
                    ]
                }],
                incomes: [{ name: "Gehalt", totalIncome: 1000, incomes: [{name: "Gehalt", amount: 1000, date: new Date("27.01.2022"), monthly: true }]}],
                savings: [{name : "Aktien", totalSavings: 300, savings: [{name: "GME", amount: 300, date: new Date("27.01.2022"), monthly: false }]},
                          {name : "Krypto", totalSavings: 200, savings: [{name: "BTC", amount: 200, date: new Date("27.01.2022"), monthly: false }]}],
                budgets: []
            }]
        }
        return thisYear;
    }
}