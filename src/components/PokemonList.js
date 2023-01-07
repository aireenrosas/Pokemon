import React from 'react';
import { ActivityIndicator, Alert, View, Text, FlatList, SafeAreaView } from 'react-native';
import { useQuery } from 'react-query';
import PokemonCard from './PokemonCard';
import { pokemonStyles } from '../styles/styles';
import { PokeAPI_URL } from '../constants/constants'

const fetchData = () => {
  return fetch(`${PokeAPI_URL}/pokemon?limit=20&offset=0`).then(res => res.json());
};

export function PokemonList() {
    const { data, error, isLoading } = useQuery('myData', fetchData);

    if (isLoading) return <ActivityIndicator  />;
    if (error) return Alert.alert(error);

    const getId =(url) => {
        const result = url.split('/');
        return result[6];
    }

  return (
    <SafeAreaView style={pokemonStyles.container}>
        <Text style={pokemonStyles.title}>Pokedex</Text> 
        <FlatList
            data={data.results}
            numColumns={2}
            renderItem={({ item }) => 
                <PokemonCard 
                    pokemon={item} 
                    id={getId(item.url)}
                />}
            keyExtractor={item => getId(item.url)}
        />
    </SafeAreaView>
  );
}