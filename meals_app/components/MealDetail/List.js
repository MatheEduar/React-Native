import { Text, View, StyleSheet } from "react-native";

function List({data}){
    return (
    data.map(dataPoint => 
        <View style={styles.listItem} key={dataPoint}>
            <Text style={styles.listText} >{dataPoint}</Text>
        </View>
        )
    )
    
    ;
}

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 30,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#ddf',
        
    },
    listText: {
        color: '#005',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})