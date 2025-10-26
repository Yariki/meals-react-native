import { View , Text,  StyleSheet, FlatList} from "react-native";
import {MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';

export interface MealsOverViewScreenProps extends React.ComponentProps<any> {

}

const MealsOverViewScreen: React.FC<MealsOverViewScreenProps> = (props:  MealsOverViewScreenProps) => {

    const categoryId = props.route.params.categoryId;

    const displayedMeals  = MEALS.filter((item) => {
        return item.categoryIds.indexOf(categoryId) >= 0;
    });


    function renderMealItem(itemData: any) {
        return <MealItem title={itemData.item.title} 
        imageUrl={itemData.item.imageUrl}
         duration={itemData.item.duration} 
         complexity={itemData.item.complexity}
         affordability={itemData.item.affordability} />;
    }

    return (<>
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
        </View>
    </>);
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }

});
