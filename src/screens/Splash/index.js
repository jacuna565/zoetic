import React from 'react';
import {Image} from 'react-native';
import {Grid} from 'react-native-easy-grid';
import styles from './styles';
import Loader from '../../components/Loader';

const Splash = ({loading}) => {
  return (
    <Grid>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../assets/zoetic-logo.png')}
      />
      <Loader show={loading} ownStyle={{marginTop: 50}} />
    </Grid>
  );
};

export default Splash;
