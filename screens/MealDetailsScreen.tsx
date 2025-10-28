import {View, Text, Image, ScrollView} from "react-native";
import { StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";


export interface MealDetailsScreenProps extends React.ComponentProps<any> {

}

const MealDetailsScreen: React.FC<MealDetailsScreenProps> = (props: MealDetailsScreenProps) => {

    const mealId = props.route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler() {
        console.log("Header button pressed!");
    }

    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: selectedMeal?.title,
            headerRight: () => (
                <IconButton icon="star" color="white" onPress={headerButtonPressHandler} />
            ),
        });
    }, [mealId, selectedMeal]);

    return (<>
        <ScrollView style={styles.container}>
            <View>
                <Image source={{uri: selectedMeal?.imageUrl}} style={styles.image} />
                <Text style={styles.title}>{selectedMeal?.title}</Text>    
            </View>
            <View style={styles.details}>
                <Text style={styles.detailItem}>Duration: {selectedMeal?.duration}m</Text>
                <Text style={styles.detailItem}>Complexity: {selectedMeal?.complexity?.toUpperCase() ?? ''}</Text>
                <Text style={styles.detailItem}>Affordability: {selectedMeal?.affordability?.toUpperCase() ?? ''}</Text>
            </View>
            <View>
                <View style={styles.containerSubTitle}>
                    <Text style={styles.subTitle}>Ingredients</Text>
                </View>
                
                {
                    selectedMeal?.ingredients.map((ingredient: string) => (
                        <Text key={ingredient} style={styles.detailItem}>{ingredient}</Text>
                    ))
                }
            </View>
            <View>
                <View style={styles.containerSubTitle}>
                    <Text style={styles.subTitle}>Steps</Text>
                </View>
                {
                    selectedMeal?.steps.map((step:string, index:number) => (
                        <Text key={step} style={styles.detailItem}>{index + 1}. {step}</Text>
                    ))
                }
            </View>
        </ScrollView>
    </>);
}

export default MealDetailsScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 8,
        color: 'white',
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#a0a0a0be',
    },
    containerSubTitle: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        marginHorizontal: 24,
        marginVertical: 4,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        color: 'white',
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 14,
        color: 'white',
    },
});