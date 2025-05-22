import { View, StyleSheet } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

function ExpensesOutput({expenses, expensesPeriod}) {
    const DUMMY_EXPENSES = [
        {
            id: 'e1',
            description: 'Umas camisas e uns calções',
            amount: 169.99,
            date: new Date('2025-05-22')        
        },
        {
            id: 'e2',
            description: 'Muitos salgados',
            amount: 10.00,
            date: new Date('2025-05-22')        
        },
        {
            id: 'e3',
            description: 'Academia',
            amount: 110.00,
            date: new Date('2025-05-31')        
        },
        {
            id: 'e4',
            description: 'Internet',
            amount: 70.00,
            date: new Date('2025-05-20')        
        },
        {
            id: 'e5',
            description: 'Fundos Imobiliários',
            amount: 200.00,
            date: new Date('2025-05-15')        
        },
    ]
    


    return(
    <View>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
        <ExpensesList />
    </View>
    );
}

export default ExpensesOutput;