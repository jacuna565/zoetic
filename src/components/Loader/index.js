import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '../../globals/styles';
import styles from './styles';

const Loader = ({show}) => ( (show) && <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={colors.primaryColor} />
    </View>
)

export default Loader;