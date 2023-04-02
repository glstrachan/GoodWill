import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ItemComponent = ({ entries }) => {
    return (
      <View style={styles.rowContainer}>
        {entries.map((entry, index) => (
          <View style={styles.blueBox} key={index}>
            <Text style={styles.boxText}>{entry.item}</Text>
            <Text style={styles.worldText} numberOfLines={3}>
              {entry.bio.length > 80 ? entry.bio.substring(0, 80) + '...' : entry.bio}
            </Text>
          </View>
        ))}
      </View>
    );
  };
  

export default ItemComponent;

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    greenBox: {
      backgroundColor: '#D7E9E3',
      minHeight: 80,
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 20,
      padding: 12,
    },
    blueBox: {
      backgroundColor: '#CBD9E4',
      minHeight: 150,
      maxWidth: 200,
  
      marginTop: 20,
      marginLeft: 20,
      borderRadius: 20,
      padding: 12,
    },
    boxText: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 5,
    },
    worldText: {
      fontSize: 14,
      
    },
    whiteBarTop: {
      backgroundColor: 'white',
      height: 120,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 0,
      width: '400%',
    },
    whiteBarBottom: {
      backgroundColor: 'white',
      height: 100,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1,
      width: '400%',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#fff',
      shadowOpacity: 0.6,
      shadowRadius: 20,
      shadowOffset: { width: 0, height: -18 },
    },
    iconBar: {
      flexDirection: 'row', 
      justifyContent: 'center', 
      justifyContent: 'space-around',
      zIndex: 10, 
      position: 'absolute',
      bottom: 40,
      left: 0,
      width: '100%'
  },
  category: {
    marginTop: 20, 
    marginRight: 20, 
    marginLeft: 20, 
    fontWeight: 'bold', 
    fontSize: 18
  },
  rowContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  });