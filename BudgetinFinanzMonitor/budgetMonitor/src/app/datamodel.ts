export interface IBudget {
    name: string,
    size: number,
    spent: number,
    addedCategories: IExpenseCategory[],
}

export interface IExpenseCategory {
    name: string,
    totalExpenses: number,
    expenses: ICashflow[]
}

export interface IIncomeCategory {
    name: string,
    totalIncome: number,
    incomes: ICashflow[]
}

export interface ISavingsCategory {
    name: string,
    totalSavings: number,
    savings: ICashflow[]
}

export interface ICashflow {
    name: string,
    amount: number,
    date: Date,
    monthly: boolean,
}

export interface IYear {
    year: number,
    totalExpenses: number,
    totalIncomes: number,
    totalSavings: number,
    months: IMonth[]
}

export interface IMonth {
    month: number,
    totalExpenses: number,
    totalIncomes: number,
    totalSavings: number,
    expenses: IExpenseCategory[],
    incomes: IIncomeCategory[],
    savings: ISavingsCategory[],
    budgets: IBudget[]
}

export interface ITotalOverview{
    years: IYear[],
    totalExpenses: number,
    totalIncomes: number,
    totalSavings: number
}