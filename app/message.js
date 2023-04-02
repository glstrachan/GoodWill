import React from 'react';
import { TouchableOpacity, StyleSheet, ActivityIndicator, View, Text, ScrollView, SafeAreaView, Image } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

import SearchBar from '../components/SearchBar';
import ItemCard from '../components/ItemCard';

const Profile = () => {
    const navigation = useNavigation();

    const handleHomePress = () => {
      navigation.navigate('index');
    };

    const handleSearchPress = () => {
      navigation.navigate('search');
    };

    const handleMessagesPress = () => {
      navigation.navigate('message');
    };

    const handleProfilePress = () => {
      navigation.navigate('profile');
    };

    const boxes = [
      {
        boxText: "Amy Johnson",
        worldText: "Hey girl! Just wanted to check in and see how you're doing. How's work been lately?",
        imageSource: require('../assets/images/pfp5.png')
      },
      {
        boxText: "Jake Smith",
        worldText: "Yo dude! Long time no talk. Remember that time we went camping and got lost in the woods? I still laugh thinking about it.",
        imageSource: require('../assets/images/pfp3.png')
      },
      {
        boxText: "Sarah Kim",
        worldText: "Hey there! I heard you got a new puppy, how's that going? I'm thinking of getting one myself but I'm not sure if I'm ready for the responsibility!",
        imageSource: require('../assets/images/pfp4.png')
      },
      {
        boxText: "Mike Nguyen",
        worldText: "Hey man, just wanted to catch up and see what you've been up to. I'm thinking of taking a road trip next month, any suggestions for destinations?",
        imageSource: require('../assets/images/pfp2.png')
      },
      {
        boxText: "Maria Gonzalez",
        worldText: "Hi! I miss seeing you around. Have you tried any new recipes lately? I'm always looking for new things to cook.",
        imageSource: require('../assets/images/pfp1.png')
      },
    ];
    

  const router = useRouter();
    
  return (
    <SafeAreaView style={{ backgroundColor: '#F7F4F8', flex: 1 }}>
      <ScrollView style={{ marginTop: 73 }} showsVerticalScrollIndicator={false}>

      <Text style={styles.category}>Recent Messages</Text>
      {boxes.map(box => (
        <View style={styles.greenBox}>
          <Text style={styles.boxText}>{box.boxText}</Text>
          <View style={styles.row}>
            <Image source={box.imageSource} style={{ width: 50, height: 50, marginRight: 10 }} />
            <View style={{ flex: 1 }}>
            <Text style={styles.worldText} numberOfLines={3}>
              {box.worldText.length > 100 ? box.worldText.substring(0, 80) + '...' : box.worldText}
            </Text>
            </View>
          </View>
        </View>
      ))}

      </ScrollView>
      <View style={styles.whiteBarTop}></View>
      <SearchBar />
      <View style={styles.whiteBarBottom}>
      </View>
      <View style={{height: 60}}>
      </View>

      <View style={styles.iconBar}>
        <TouchableOpacity onPress={handleHomePress}>
          <Image source={require('../assets/images/house.png')} style={{ width: 50, height: 50, zIndex: 10,opacity:0.5}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSearchPress}>
          <Image source={require('../assets/images/magnifyingglass.png')} style={{ width: 50, height: 50, zIndex: 10,opacity:0.5}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMessagesPress}>
          <Image source={require('../assets/images/bubble.png')} style={{ width: 50, height: 50, zIndex: 10}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleProfilePress}>
          <Image source={require('../assets/images/person.png')} style={{ width: 50, height: 50, zIndex: 10,opacity:0.5}} />
        </TouchableOpacity>
    </View>
      

      
    </SafeAreaView>
  );
};
  
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greenBox: {
    backgroundColor: '#CBD9E4',
    minHeight: 80,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    padding: 12,
  },
  blueBox: {
    backgroundColor: '#D7E9E3',
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
});

export default Profile;
