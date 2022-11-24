import {IBudget, IExpenseCategory, IIncomeCategory, ISavingsCategory, ICashflow, IYear, IMonth} from './datamodel';

export class Database{
    private years: IYear[] = [
        {
        year: 2022,
        totalExpenses: 1000,
        totalIncomes: 2000,
        totalSavings: 1000,
        accumulatedExpenses: 0,
        accumulatedIncomes: 0,
        accumulatedSavings: 0,
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
    },
    {
        year: 2021,
        totalExpenses: 0,
        totalIncomes: 0,
        totalSavings: 0,
        accumulatedExpenses: 0,
        accumulatedIncomes: 0,
        accumulatedSavings: 0,
        months: []
    }];

private emptyYear : IYear = {
    year: 0,
    totalExpenses: 0,
    totalIncomes: 0,
    totalSavings: 0,
    accumulatedExpenses: 0,
    accumulatedIncomes: 0,
    accumulatedSavings: 0,
    months: []
}

    public getEmptyYear(): IYear
    {
        return this.emptyYear;
    }

    public getAllYears(): IYear[]{
        return this.years;
    }

    public addYear(): IYear{
        var currentYear = this.getCurrentYear();
        var yearNb = currentYear.year;
        var newYear : IYear = {
            year: yearNb + 1,
            totalExpenses: 0,
            totalIncomes: 0,
            totalSavings: 0,
            accumulatedExpenses: currentYear.accumulatedExpenses + currentYear.totalExpenses,
            accumulatedIncomes: currentYear.accumulatedIncomes + currentYear.totalIncomes,
            accumulatedSavings: currentYear.accumulatedSavings + currentYear.totalSavings,
            months: [
                this.newMonthGenerator(1)
            ]
        }
        this.years = this.years.concat([newYear]);
        return newYear;
    }
    public addMonth(): IYear{
        if(this.years[0].months.length < 12 && this.years[0].months[this.years[0].months.length - 1].month < 12){
           this.years[0].months.concat(this.newMonthGenerator(this.years[0].months[this.years[0].months.length - 1].month +1))
        } else {
            return this.addYear();
        }
        return this.years[0];
    }
    private newMonthGenerator(monthNb : number) : IMonth {
        return {
            month: monthNb,
        totalExpenses: 0,
        totalIncomes: 0,
        totalSavings: 0,
        expenses: [],
        incomes: [],
        savings: [],
        budgets: []
        }
    }

    public updateYear(year: IYear): IYear{
        this.years.forEach(yr => {
            if(yr.year === year.year){
                yr = year;
            }
        })
        return year;
    }

    public getCurrentYear(): IYear{
        let yearNb : number = new Date().getFullYear();
        let currentYear = this.years[0];
        this.years.forEach(yr => {
            if(yr.year === yearNb){
                currentYear = yr;
            }
        })
        return currentYear;
    }

    public getYearByNumber(year: number){
        return this.years.find(element => element.year === year );
    }
}