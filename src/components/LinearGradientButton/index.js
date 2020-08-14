import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../globals/styles';
import styles from './styles';

const LinearGradientButton = ({route, text}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(route)}>
      <LinearGradient
        colors={[colors.pinkColor, colors.primaryColor, colors.turquoiseColor]}
        style={styles.linearGradient}>
        <Text style={styles.textButton}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default LinearGradientButton;
