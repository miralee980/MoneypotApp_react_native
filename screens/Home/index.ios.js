import React from 'react';
import {StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import Welcome from './Welcome';
import Recommand from './Recommand';
import InterestPotList from './InterestPotList';
import ProductList from './ProductList';
import Header from '../../components/Header/SearchUserHeader';

const DATA1 = [
  [
    {
      id: '1',
      num: '01',
      title: '지속 가능 발전',
      return: '+11.02%',
      value: '292,300,000원',
    },
    {
      id: '2',
      num: '02',
      title: '월급 소비주',
      return: '-1.02%',
      value: '292,300,000원',
    },
    {
      id: '3',
      num: '03',
      title: '강한 직구 열풍',
      return: '+8.87%',
      value: '292,300,000원',
    },
  ],
  [
    {
      id: '4',
      num: '01',
      title: '베스트 자문상품',
      return: '+11.02%',
      value: '292,300,000원',
    },
    {
      id: '5',
      num: '02',
      title: '(자문)홈루덴스',
      return: '-1.02%',
      value: '292,300,000원',
    },
    {
      id: '6',
      num: '03',
      title: 'MRNA&ABUS',
      return: '+8.87%',
      value: '292,300,000원',
    },
  ],
];
// const DATA2 = null;
const DATA2 = [
  {
    id: '1',
    title: '넥플릭스',
    weather: 'cloudy',
    return: '-10.2%',
    value: '292,300,000원',
  },
  {
    id: '2',
    title: '애플',
    weather: 'sunny',
    return: '+20.1%',
    value: '292,300,000원',
  },
  {
    id: '3',
    title: '테슬라',
    weather: 'foggy',
    return: '0%',
    value: '292,300,000원',
  },
];

// Within your render function
const Home = ({navigation}) => {
  const onPress = () => navigation.navigate('PotList');
  return (
    <SafeAreaView>
      <Header backgroundColor={'#6359fa'} iconColor={'white'} title={null} />
      <ScrollView contentContainerStyle={{...styles.container}}>
        <Welcome />
        <Recommand />
        <ProductList
          title={'상품 리스트'}
          data={DATA1}
          onPress={onPress}
          navigation={navigation}
        />
        <InterestPotList
          title={'내 관심포트의 오늘 날씨는?'}
          data={DATA2}
          onPress={onPress}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingBottom: 48 + 56,
    // marginTop: StatusBar.currentHeight || 0,
  },
});
export default Home;
