import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { pokemonStyles } from '../styles/styles'; 

function PokemonCard(props) {
    const {pokemon, id} = props;
    const navigation = useNavigation();

    function handlePress() {
      navigation.navigate('PokemonDetails', { id: id });
    }
  
    return (
      <TouchableOpacity
        style={[pokemonStyles.card, pokemonStyles.shadowProp]}
        onPress={handlePress}>
        <Image 
          source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}}
          style={pokemonStyles.image} />
        <Text style={pokemonStyles.heading}>{pokemon.name}</Text> 
      </TouchableOpacity> 
    );
  }
  
  export default PokemonCard;
  