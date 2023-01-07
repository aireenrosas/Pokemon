import React from 'react';
import { 
    ActivityIndicator, 
    Alert, 
    Button, 
    Image, 
    View, 
    Text,
    SafeAreaView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useQuery } from 'react-query';
import { pokemonStyles } from '../styles/styles'; 
import { PokeAPI_URL } from '../constants/constants'

function PokemonDetails(props) {
    const {id} = props.route.params;
    
    const fetchDetails = () => {
        return fetch(`${PokeAPI_URL}/pokemon/${id}`).then(res => res.json());
      };
  
    const { data, error, isLoading } = useQuery('myDetails', fetchDetails);

    if (isLoading) return <ActivityIndicator  />;
    if (error) return Alert.alert(error);

    if (!data || !data.sprites) return;

    const images = data || data.sprites ? 
    Object.entries(data?.sprites)
      .filter(([key, value]) => value !== null && key !== 'other' && key !== 'versions')
      .map(([key, value]) => ({ title: key, url: value })): [];

    return (
        <SafeAreaView style={pokemonStyles.container}>
            <Carousel
                layout={'default'}
                data={images}
                renderItem={({ item }) => (
                    <View style={pokemonStyles.mycard}>
                        <Image 
                            source={{uri: item.url}}
                            style={{width: '100%', 
                                height: '100%', resizeMode: 'contain'}} 
                        />
                    </View>
                )}
                containerCustomStyle={{marginBottom:-30}}
                sliderWidth={300}
                itemWidth={200}
                useScrollView={true}
                inactiveSlideShift={0}
                paginationdswew
                paginationStyle={{ bottom: 10 }}
                dotStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', width: 8, height: 8 }}
                inactiveDotStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: 8, height: 8 }}
            />
            <View style={{flexDirection: "row" }}>
                <View style={pokemonStyles.button}>
                    <Button
                        title="Detalles"
                        color="#15cad4"
                        onPress={() => Alert.alert('Simple Button pressed')}
                    />
                </View>   
                <View style={pokemonStyles.button}>
                    <Button
                        title="Estado"
                        color="#15d4a4"
                        onPress={() => Alert.alert('Simple Button pressed')}
                    />
                </View>   
                <View style={pokemonStyles.button}>
                    <Button
                        title="Movimiento"
                        color="#1591d4"
                        onPress={() => Alert.alert('Simple Button pressed')}
                    />
                </View>            
            </View>   
            <View>
                <Text>Hola</Text>
            </View>         
        </SafeAreaView>        
      );
}

export default PokemonDetails;