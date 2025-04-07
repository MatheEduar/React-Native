import { View, Pressable, Text, Image, StyleSheet } from "react-native"


function MealItem({title, imageUrl, duration, complexity, affordability}){
    return (
        <View style={styles.mealItem}>
            <Pressable 
                android_ripple={{color: '#ccf'}}
                style={({pressed}) => pressed ? styles.buttonPressed : null}
            >
                <View>
                    <Image source={{uri: imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailItem}>{duration}m</Text>
                    <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                </View>


            </Pressable>
        </View>
    );
}



export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#337',
        elevation: 4,
    },
    buttonPressed: {
        opacity: 0.9
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#fff",
        fontSize: 18,
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,

    },
    detailItem: {
        marginHorizontal: 6,
        fontSize: 14,
        color: "#ddf",
    }

});