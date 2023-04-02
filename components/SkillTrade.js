import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const SkillTrade = ({ boxes }) => {
  const [expanded, setExpanded] = useState(Array(boxes.length).fill(false));

  const toggleExpanded = (index) => {
    setExpanded((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <View>
      {boxes.map((box, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.greenBox, expanded[index] && styles.expandedBox]}
          onPress={() => toggleExpanded(index)}
        >
          <Text style={styles.boxText}>{box.boxText}</Text>
          <View style={styles.row}>
            <Image source={box.imageSource} style={{ width: 50, height: 50, marginRight: 10 }} />
            <View style={{ flex: 1 }}>
              <Text style={styles.worldText} numberOfLines={expanded[index] ? 0 : 3}>
                {box.worldText}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SkillTrade;
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
  expandedBox: {
    height: 'auto', // Set your desired expanded height
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  worldText: {
    fontSize: 14,
  },
});
