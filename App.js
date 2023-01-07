import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import {NavigationContainer} from '@react-navigation/native';
import PokemonDetailsScreen from './src/navigation/PokemonScreens';

const queryClient = new QueryClient();

function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <PokemonDetailsScreen />
      </QueryClientProvider>
    </NavigationContainer>

  );
}

export default App;