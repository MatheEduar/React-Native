import { Button, Text, View } from 'react-native';


function UserScreen({navigation}) {
    function userPressHandler({}){
        navigation.toggleDrawer();
    }
    return (
        <View>
            <Text>User Screen!</Text>
            <Button title="Open Drawer" onPress={userPressHandler}/>
        </View>
    
    );
}

export default UserScreen;