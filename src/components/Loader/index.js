import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {colors} from '../../globals/styles';
import styles from './styles';

const Loader = ({show, ownStyle}) =>
  show && (
    <View style={[styles.loaderContainer, ownStyle]}>
      <ActivityIndicator size="large" color={colors.primaryColor} />
    </View>
  );

export default Loader;
