import React from 'react';
import MealItem from './MealItem';
import { FlatList, View } from 'react-native';
import { StyleSheet } from 'react-native';
import Meal from '../../models/meal';


export interface MealsListProps extends React.ComponentProps<any> {
    meals: Meal[];
}


export const MealsList: React.FC<MealsListProps> = (props: MealsListProps) => {
    
    
    function renderMealItem(itemData: any) {

        function pressHandler() {
            props.navigation.navigate('MealDetails', {
                mealId: itemData.item.id
            });
        }

        return <MealItem title={itemData.item.title} 
        imageUrl={itemData.item.imageUrl}
         duration={itemData.item.duration} 
         complexity={itemData.item.complexity}
         affordability={itemData.item.affordability} 
         onPress={pressHandler} />;
    }

    return (<>
        <View style={styles.container}>
            <FlatList data={props.meals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
        </View>
    </>);
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }

});
