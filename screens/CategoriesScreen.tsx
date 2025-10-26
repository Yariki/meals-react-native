import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import  { CATEGORIES } from '../data/dummy-data';
import  Category  from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile';

export interface CategoriesScreenProps extends React.ComponentProps<any> {
 
}



const CategoriesScreen: React.FC<CategoriesScreenProps> = (props: CategoriesScreenProps) => {

    function renderCategoryItem(itemData:any) {

        function pressHandler() {
            console.log('pressed');
            props.navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id
            });
        }
         
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}  onPress={pressHandler}/>;
    }

    return (<>
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id} 
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    </>);
}

export default CategoriesScreen;

