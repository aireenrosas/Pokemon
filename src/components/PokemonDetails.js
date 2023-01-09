import React, { useState } from 'react';
import { 
    ActivityIndicator, 
    Alert, 
    Button, 
    Image, 
    View, 
    Text,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useQuery } from 'react-query';
import { pokemonStyles } from '../styles/styles'; 
import { PokeAPI_URL } from '../constants/constants'

function PokemonDetails(props) {
    const {id} = props.route.params;
    const [details, setDetails] = useState(true);
    const [status, setStatus] = useState(false);
    const [moves, setMoves] = useState(false);
    
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

      const ability = data.abilities.map((value, index) => ({
        key: index,
        name: value.ability.name
      }));    
      
    const type = data.types.map((value, index) => ({
        key: index,
        name: value.type.name
      }));

    const move = data.moves.map((value, index) => ({
        key: index,
        name: value.move.name
    }));

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
                        title="Details"
                        color="#15cad4"
                        onPress={()=>{
                            setDetails(true), 
                            setStatus(false),
                            setMoves(false)
                        }}
                    />
                </View>   
                <View style={pokemonStyles.button}>
                    <Button
                        title="Estado"
                        color="#15d4a4"
                        onPress={() => {
                            setStatus(true), 
                            setDetails(false),
                            setMoves(false)
                        }}
                    />
                </View>   
                <View style={pokemonStyles.button}>
                    <Button
                        title="Movimiento"
                        color="#1591d4"
                        onPress={() => {
                            setMoves(true),
                            setDetails(false),
                            setStatus(false)
                        }}
                    />
                </View>            
            </View>   
            {details? (
                <View style={{flexDirection: "row" }}>
                    <View style={pokemonStyles.center}>
                        <Text style={pokemonStyles.title1}>Abilities</Text>
                        {ability.map(e => (
                            <Text key={e.key}>{e.name}</Text>
                        ))}
                    </View>
                    <View style={pokemonStyles.center}>
                        <Text style={pokemonStyles.title1}>Types</Text>
                        {type.map(e => (
                            <Text key={e.key}>{e.name}</Text>
                        ))}
                    </View>  
                </View> 
            ):<></>}
            {status? (
                <View style={{flexDirection: "row" }}>
                    <View style={pokemonStyles.center}>
                        <Text style={pokemonStyles.title1}>Base Experience</Text>
                        <Text>{data?.base_experience}</Text>
                    </View>
                    <View style={pokemonStyles.center}>
                        <Text style={pokemonStyles.title1}>Height</Text>
                        <Text>{data?.height} m</Text>
                    </View>  
                    <View style={pokemonStyles.center}>
                        <Text style={pokemonStyles.title1}>Weight</Text>
                        <Text>{data?.weight} kg</Text>
                    </View> 
                </View> 
            ):<></>}
            {moves? (
                <ScrollView style={{marginHorizontal: 20,}}>
                    {move.map(e => (
                        <Text key={e.key}>{e.name}</Text>
                    ))} 
                </ScrollView>                
            ):<></>}                    
        </SafeAreaView>        
      );
}

export default PokemonDetails;