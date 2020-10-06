import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Header from '../../components/Header/SearchUserHeader';
import EmptyList from '../../components/EmptyList/EmptyList';

const emptyIcon = require('../../assets/common/img_custom_replace.png');

const CustomLeague = () => {
  return (
    <View style={styles.container}>
      <Header
        backgroundColor={'#fff'}
        iconColor={'gray'}
        title={'커스텀리그'}
      />
      <View style={styles.bannerContainer}>
        <Image
          source={require('../../assets/common/img_custom_banner_cont.png')}
        />
      </View>
      <EmptyList
        image={emptyIcon}
        text1="커스텀 리그는 준비중이에요!"
        text2="준비하는 데에 시간이 걸려요."
        text3="조금만 기다려 주세요!"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
  },
  bannerContainer: {
    backgroundColor: '#6359fa',
    height: 60,
    alignItems: 'center',
  },
});

export default CustomLeague;
