import React from 'react';
import {Text} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'native-base';
import Home from '../../../screens/Home';
import {colors} from '../../../globals/styles';

const Stack = createStackNavigator();

function HomeStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Text>Home</Text>,
          headerLeft: () => (
            <Icon
              type="MaterialIcons"
              style={{margin: 15, color: colors.white}}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              name="menu"
              size={32}
              color="#fff"
            />
          ),
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
