import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokemonDetails from '../components/PokemonDetails';
import { PokemonList } from '../components/PokemonList';

const Stack = createNativeStackNavigator();

function PokemonScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokemoList"
        component={PokemonList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PokemonDetails"
        component={PokemonDetails}
        options={{ title: 'Pokemon Details' }}
      />
    </Stack.Navigator>
  );
}

export default PokemonScreen;