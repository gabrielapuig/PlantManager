import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {} from 'react-native';

import { Confirmation } from '../pages/Confirmation';
import { PlantSave } from '../pages/PlantSave';
import { UserIdentification } from '../pages/UserIdentification';
import { Welcome } from '../pages/welcome';

import colors from '../styles/colors';
import AuthRoutes from '../routes/tab.routes';


const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle:{
                backgroundColor: colors.white
            },
        }}
    >
        
        <stackRoutes.Screen
            name="Welcome"
            component={Welcome}
        />

        <stackRoutes.Screen
            name="UserIdentification"
            component={UserIdentification}
        />

        <stackRoutes.Screen
            name="Confirmation"
            component={Confirmation}
        />

        <stackRoutes.Screen
            name="PlantSelect"
            component={AuthRoutes}
        /> 

        <stackRoutes.Screen
            name="PlantSave"
            component={PlantSave}
        /> 

        <stackRoutes.Screen
            name="MyPlants"
            component={AuthRoutes}
        />  
        
        </stackRoutes.Navigator>
)

export default AppRoutes;