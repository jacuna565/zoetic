import React from 'react';
import {View, ActivityIndicator} from 'react-native';

export const server = 'https://basic-nodejs-api-rest.herokuapp.com';

export const api = () => {
    return '/api'
}

export const renderLoader = () =>{
    return (<View style={{marginTop: 50}}>
        <ActivityIndicator color="#FFF"/>
    </View>
    )
}