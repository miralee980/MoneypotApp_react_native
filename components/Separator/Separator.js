import React from 'react';
import {View, StyleSheet} from 'react-native';
const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    // marginHorizontal: 24,
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
  },
});

export default Separator;
