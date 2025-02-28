import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

// ✨ Função feita para renderizar um componente na tela.
function renderCategoryItem(itemData){
    return (
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>
    );
}

function CategoriesScreen(){
    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
            ></FlatList>
    )
}


export default CategoriesScreen;