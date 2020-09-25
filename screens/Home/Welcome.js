import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import SearchUserHeader from '../../components/Header/SearchUserHeader';
const {width} = Dimensions.get('window');
const Separator = () => <View style={styles.separator} />;
const Welcome = () => {
  return (
    <View style={styles.welcomeContainer}>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>
          회원님 반갑습니다.
          {'\n'}
          오늘도 행복한 하루 되세요 :)
        </Text>
      </View>

      <View style={styles.assetBoxContainer}>
        <ImageBackground
          source={require('../../assets/main/main_btn_bg.png')}
          style={styles.assetBox}>
          <View style={styles.assetContainer}>
            <View style={styles.myasset}>
              <Image
                style={styles.assetIcon}
                source={require('../../assets/main/icn_my_asset.png')}
              />
              <Text style={styles.assetText}>나의 자산</Text>
            </View>
            <Separator />
            <View style={styles.myasset}>
              <Image
                style={styles.assetIcon}
                source={require('../../assets/main/icn_new_custom.png')}
              />
              <Text style={styles.assetText}>자산커스텀</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    width: width,
    height: 123,
    backgroundColor: '#6359fa', // 그라데이션 기능 추가
    zIndex: 2,
  },
  welcomeTextContainer: {
    height: 60,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
  },
  assetBoxContainer: {
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 11,
  },
  assetBox: {
    width: 330,
    height: 117,
  },
  assetContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    zIndex: 1,
  },
  myasset: {
    alignItems: 'center',
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
  },
  assetIcon: {
    marginTop: 14,
    width: 45,
    height: 45,
  },
  assetText: {
    fontSize: 18,
    paddingVertical: 12,
  },
  separator: {
    marginVertical: 20,
    borderRightColor: '#f4f4f4',
    borderRightWidth: 1,
  },
});

export default Welcome;
