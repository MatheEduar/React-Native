import { View, StyleSheet } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

function ExpensesOutput({expenses, expensivesPeriod}) {
    return(
    <View>
        <ExpensesSummary expenses={expenses} periodName={expensivesPeriod}/>
        <ExpensesList />
    </View>
    );
}

export default ExpensesOutput;