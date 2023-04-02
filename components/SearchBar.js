// SearchBar.js
import React from "react";
import { Image, StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

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

const SearchBar = ({ boxes, setBoxes, entries, setEntries, clicked, searchPhrase, setSearchPhrase, setClicked }) => {
  const handleTextChange = (text) => {
    setSearchPhrase(text);

    // Filter boxes
    const filteredBoxes = boxesData.filter((box) =>
      box.boxText.toLowerCase().includes(text.toLowerCase()) ||
      box.worldText.toLowerCase().includes(text.toLowerCase())
    );
    setBoxes(filteredBoxes);

    // Filter entries
    const filteredEntries = entriesData.filter((entry) =>
      entry.item.toLowerCase().includes(text.toLowerCase()) ||
      entry.name.toLowerCase().includes(text.toLowerCase()) ||
      entry.bio.toLowerCase().includes(text.toLowerCase())
    );
    setEntries(filteredEntries);
    console.log(entries);
  };

  return (
    <View style={styles.container}>
      <View style={clicked ? styles.searchBar__clicked : styles.searchBar__unclicked}>
        {/* search Icon */}
        <Image source={require('../assets/images/magnifyingglass.png')} style={{ width: 35, height: 35, zIndex: 10, opacity: 0.5 }} />

        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search events, skills, items"
          value={searchPhrase}
          onChangeText={handleTextChange}
          onFocus={() => { }}
        />

        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
            setSearchPhrase("");
            setBoxes(boxes);
            setEntries(entries);
          }} />
        )}
      </View>

      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          />
        </View>
      )}
    </View>
  );
};

export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    justifyContent: "flex-start",
    alignItems: "center",
    width: "95%",

  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 20,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 20,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});