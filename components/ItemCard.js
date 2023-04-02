import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MapComponent from '../components/MapComponent';
const ItemCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity onPress={toggleExpansion} activeOpacity={0.8}>
      <View style={[styles.container, expanded && styles.expandedContainer]}>
        <View style={[styles.card, expanded && styles.expandedCard]}>
          <View style={styles.details}>
            <Text style={styles.name}>{item.name}</Text>
            
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <ImageBackground source={{ uri: item.image }} style={styles.image}>
              <LinearGradient
                  colors={['#00000000', '#FFFFFFD6']} 
                  style={{position: 'absolute',top: 0,right: 0,bottom: 0,left: 0,display: 'flex',flexDirection: 'column',justifyContent: 'flex-end',borderRadius: 20,}}
              />
          </ImageBackground>

          {expanded? <Text style={{marginVertical: 15}}>{item.moreinfo}</Text>:<Text style={{height:0}}/>}
          {expanded? <View style={{ flex: 2, height: 400, width: '100%', marginLeft: 0, marginRight: 20, borderRadius: 20, overflow: 'hidden', height: 220}}>
            <MapComponent />
          </View>: <Text style={{height:0}}/>}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    overflow: 'hidden',
  },
  expandedContainer: {
    height: 'auto',
  },
  card: {
    backgroundColor: '#D7E9E3',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    padding: 12,
  },
  expandedCard: {
    minHeight: 200,
  },
  image: {
    minHeight: 200,
    borderRadius: 20,
    overflow: 'hidden',
  },
  details: {

  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#999',
    marginBottom: 10,
  },
});

export default ItemCard;