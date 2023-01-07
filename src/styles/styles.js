import React from 'react';
import { StyleSheet } from 'react-native';

const pokemonStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#2596be',
    },
    title: {
        paddingTop: 20,
        fontSize: 44,
        fontWeight: '600',
    },
    heading: {  
        fontSize: 18,  
        fontWeight: '600',   
      },  
    card: {  
        backgroundColor: 'white',  
        borderRadius: 8,  
        paddingVertical: 40,  
        paddingHorizontal: 18,  
        width: '45%',  
        marginVertical: 10,  
        marginHorizontal: 5,
    },  
    shadowProp: {  
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  
    },  
    image: {
        width: 100, 
        height: 100, 
        resizeMode: 'contain',
    },
    mycard: {  
        backgroundColor: '#80DBF1', 
        borderRadius: 8, 
        marginBottom: 50 
    }, 
    imagen1: {
        width: '100%', 
        height: '100%', 
        resizeMode: 'contain',
    },
    title1: {
        fontSize: 24,
        fontWeight: '600',
    },
    button: {
        paddingLeft:10, 
        paddingRight:10,
        paddingBottom: 20
    }
})

export {pokemonStyles};
