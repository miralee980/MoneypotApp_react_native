/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Image, TouchableWithoutFeedback} from 'react-native';

const SearchUserHeader = () => {
  return (
    <View style={styles.iconSearchUserContainer}>
      <View style={styles.icon}>
        <Image source={require('../../assets/main/icn_search_wh.png')} />
      </View>
      <View style={styles.icon}>
        <Image source={require('../../assets/main/icn_user_wh.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconSearchUserContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchUserHeader;
