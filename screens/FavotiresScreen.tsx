import { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { FavoriteContext } from "../store/context/favotire-context";
import { MealsList } from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

export interface FavotiresScreenProps  extends React.ComponentProps<any> {
    
}

export const FavotiresScreen: React.FC<FavotiresScreenProps> = (props: FavotiresScreenProps) => {

    //const favoriteMealsContext = useContext(FavoriteContext)

    const favoriteMealsIds = useSelector((state: any) => state.favorites.ids);

    const favoriteMeals = MEALS.filter((meal) => favoriteMealsIds.includes(meal.id));

    return <MealsList meals={favoriteMeals} navigation={props.navigation} />;
}