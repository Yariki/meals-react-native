import { useEffect, useLayoutEffect } from "react";
import {MEALS, CATEGORIES} from '../data/dummy-data';
import { MealsList } from "../components/MealsList/MealsList";

export interface MealsOverViewScreenProps extends React.ComponentProps<any> {

}

const MealsOverViewScreen: React.FC<MealsOverViewScreenProps> = (props:  MealsOverViewScreenProps) => {

    const categoryId = props.route.params.categoryId;

    const displayedMeals  = MEALS.filter((item) => {
        return item.categoryIds.indexOf(categoryId) >= 0;
    });

    useLayoutEffect(() => {
        const category = CATEGORIES.find((category) => category.id === categoryId);

        props.navigation.setOptions({
            title: category?.title
        });
    }, [categoryId]);
    
    return (
        <MealsList meals={displayedMeals} navigation={props.navigation} />
    )
}

export default MealsOverViewScreen;

