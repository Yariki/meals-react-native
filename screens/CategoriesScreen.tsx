import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import  { CATEGORIES } from '../data/dummy-data';
import  Category  from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile';

export interface CategoriesScreenProps {
 
}

function renderCategoryItem(itemData:any) {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />;
}

const CategoriesScreen: React.FC<CategoriesScreenProps> = (props: CategoriesScreenProps) => {


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

