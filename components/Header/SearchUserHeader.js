/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const SearchUserHeader = ({backgroundColor, iconColor, title}) => {
  var searchIcon =
    iconColor === 'white'
      ? require(`../../assets/main/icn_search_wh.png`)
      : require(`../../assets/main/icn_search_gray.png`);
  var userIcon =
    iconColor === 'white'
      ? require(`../../assets/main/icn_user_wh.png`)
      : require(`../../assets/main/icn_user_gray.png`);
  var betaIcon = require(`../../assets/common/img_custom_beta.png`);
  return (
    <View
      style={{
        ...styles.iconSearchUserContainer,
        backgroundColor: `${backgroundColor}`,
      }}>
      <View style={styles.icon}>
        <Image source={searchIcon} />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text>{title}</Text>
        {title === '커스텀리그' ? <Image source={betaIcon} /> : null}
      </View>

      <View style={styles.icon}>
        <Image source={userIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconSearchUserContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#3d3f42',
  },
});

export default SearchUserHeader;
