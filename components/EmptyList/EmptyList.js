import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const EmptyList = ({image, text1, text2, text3}) => {
  return (
    <View style={styles.container}>
      <Image source={image} />
      <Text style={styles.text1}>{text1}</Text>
      <Text style={styles.text2}>{text2}</Text>
      <Text style={styles.text2}>{text3}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 124,
  },
  text1: {
    fontSize: 16,
    color: '#797979',
    marginTop: 10,
  },
  text2: {
    fontSize: 13,
    color: '#9a9a9a',
    marginTop: 3,
  },
});

export default EmptyList;
