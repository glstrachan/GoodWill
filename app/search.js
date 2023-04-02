import React from 'react';
import { TouchableOpacity, StyleSheet, ActivityIndicator, View, Text, ScrollView, SafeAreaView, Image } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import SkillTrade from '../components/SkillTrade';
import ItemComponent from '../components/ItemComponent';
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

    const item = {
    name: 'Farmers Market',
    description: 'April 19th - UBC Botanical Garden',
    image: 'https://www.novascotia.com/sites/default/files/2021-06/Family_at_Seaport_farmers-Market-1920x1080.jpg',
    };

    const boxesData = [
      {
        boxText: "Katrina Shelly",
        worldText: "Hey, I'm a retired ballerina and ballroom dancer and would love to take on students!",
        imageSource: require('../assets/images/pfp1.png')
      },
      {
        boxText: "Megan Ludovic",
        worldText: "Hi, I'm a certified yoga instructor and would love to help people in the community find inner peace and mindfulness through yoga!",
        imageSource: require('../assets/images/pfp2.png')
      },
      {
        boxText: "John Wright",
        worldText: "Hello, I'm a handyman and would love to offer my services to help fix things around the community, from leaky faucets to broken fences!",
        imageSource: require('../assets/images/pfp3.png')
      }
    ];

    const entriesData = [
      {
        item: 'Rake',
        name: 'Susan Patel',
        bio: "I have a gently used rake bought last year. If anybody needs a to collect all their leaves it theirs!"
      },
      {
        item: 'Camping Gear',
        name: 'David Jones',
        bio: "I'm selling my old camping gear, including a tent, sleeping bags, and a portable stove. All in good condition!"
      },
      {
        item: 'Rake',
        name: 'Emily Kim',
        bio: "I have a collection of children's books that my kids have outgrown. They're in great shape and looking for a new home!"
      },
      {
        item: 'Dog Walking',
        name: 'Alexandra Rodriguez',
        bio: "I'm offering dog walking services in my neighborhood. I'm experienced and love spending time with dogs!"
      },
      {
        item: 'Lawnmower',
        name: 'Max Chen',
        bio: "I have a spare lawnmower that's in great condition. If anyone needs it, feel free to reach out to me!"
      },
      {
        item: 'Kitchen Appliance',
        name: 'Sarah Lee',
        bio: "I'm giving away a set of kitchen appliances that are in excellent condition, including a toaster, blender, and coffee maker."
      }
    ];
    const [boxes, setBoxes] = useState(boxesData);
    const [entries, setEntries] = useState(entriesData);
    const [searchPhrase , setSearchPhrase] = useState("");

  const router = useRouter();
    
  return (
    <SafeAreaView style={{ backgroundColor: '#F7F4F8', flex: 1 }}>
      <ScrollView style={{ marginTop: 73 }} showsVerticalScrollIndicator={false}>

      {( boxes.length >= 1)? <Text style={styles.category}>Skills to Share </Text>:<Text style={styles.category}></Text>} 
      <SkillTrade boxes={boxes} />
      
      {(entries.length >= 1)? <Text style={styles.category}>Community Item</Text>:<Text style={styles.category}></Text>}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ItemComponent entries={entries} />
        </ScrollView>
      </ScrollView>
      <View style={styles.whiteBarTop}></View>
      <SearchBar boxes = {boxes} setBoxes={setBoxes}  entries={entries}  setEntries={setEntries} searchPhrase ={searchPhrase} setSearchPhrase={setSearchPhrase}/>
      <View style={styles.whiteBarBottom}>
      </View>
      <View style={{height: 60}}>
      </View>

      <View style={styles.iconBar}>
        <TouchableOpacity onPress={handleHomePress}>
          <Image source={require('../assets/images/house.png')} style={{ width: 50, height: 50, zIndex: 10,opacity:0.5}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSearchPress}>
          <Image source={require('../assets/images/magnifyingglass.png')} style={{ width: 50, height: 50, zIndex: 10}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMessagesPress}>
          <Image source={require('../assets/images/bubble.png')} style={{ width: 50, height: 50, zIndex: 10,opacity:0.5}} />
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
});

export default Profile;
