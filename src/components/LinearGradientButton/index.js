import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from "../../globals/styles";
import styles from './styles';

const LinearGradientButton = () => {
    const navigation = useNavigation();
    return (<TouchableOpacity 
                style={styles.container}
                onPress={() => navigation.navigate("Measure")}> 
                <LinearGradient
                    colors={[colors.pinkColor, colors.primaryColor, colors.turquoiseColor ]}
                    style={styles.linearGradient}>
                    <Text style={styles.textButton}>Measure now</Text>
                </LinearGradient>
            </TouchableOpacity>
            )
}



export default LinearGradientButton;