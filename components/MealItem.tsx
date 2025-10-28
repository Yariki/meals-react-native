import React from "react";
import { View, Text, StyleSheet, Pressable, Image} from "react-native";

export interface MealItemProps extends React.ComponentProps<any> {
    title: string;
    imageUrl?: string;
    duration?: number;
    complexity?: string;
    affordability?: string;
    onPress?: () => void;
}


const MealItem: React.FC<MealItemProps> = (props: MealItemProps) => {


    return (<>
    <View style={styles.mealItem}>
        <Pressable android_ripple={{color: '#ccc'}}
            style={({pressed}) =>  pressed ? styles.buttonPressed : null}
            onPress={props.onPress}
        >
            <View>
                <Image source={{uri: props.imageUrl}} style={styles.image} />
                <Text style={styles.title}>{props.title}</Text>    
            </View>
            <View style={styles.details}>
                <Text style={styles.detailItem}>Duration: {props.duration}m</Text>
                <Text style={styles.detailItem}>Complexity: {props.complexity?.toUpperCase() ?? ''}</Text>
                <Text style={styles.detailItem}>Affordability: {props.affordability?.toUpperCase() ?? ''}</Text>
            </View>
        </Pressable>
    </View>
    </>);
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,

    },
    buttonPressed: {
        opacity: 0.5,
    }
});