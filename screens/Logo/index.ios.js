/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {StyleSheet, View, Image, TouchableWithoutFeedback} from 'react-native';

const Logo = ({navigation}) => {
  useEffect(() => {
    var timer = setTimeout(() => {
      navigation.navigate('Intro');
    }, 2000);
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Intro')}>
        <View style={styles.container}>
          <Image source={require('../../assets/logo/moneypot_logo.png')} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Logo;
