import React from "react";
import { Pressable, View, Text, StyleSheet} from "react-native";

export interface CategoryGridTileProps {
    title: string;
    color: string;
}

const CategoryGridTile  : React.FC<CategoryGridTileProps> = ({title, color}: CategoryGridTileProps) => {

    return <>
        <View style={[styles.gridItem, {backgroundColor: color}]}>
            <Pressable style={styles.buttonStyle} android_ripple={{color: '#ccc'}}> 
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View> 
    </>;
}

export default CategoryGridTile;


const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        overflow: 'hidden',
    },
    buttonStyle: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18,
    }
});