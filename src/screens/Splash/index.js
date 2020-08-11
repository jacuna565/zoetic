
import React from 'react';
import { Image } from 'react-native';
import { Grid } from "react-native-easy-grid";
import styles from './styles';

const Splash = () => {
    return (
        <Grid>
            <Image 
                style={styles.image}
                resizeMode="contain"
                source={require('../../assets/zoetic-logo.png')}
            />    
        </Grid>
    );    
}

export default Splash;