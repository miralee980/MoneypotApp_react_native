import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const PotList = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../../assets/common/icn_back.png')}
          style={styles.backImage}
        />
        <Text>상품 리스트</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  backImage: {
    padding: 18,
  },
});

export default PotList;
