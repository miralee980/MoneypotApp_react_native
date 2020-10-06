import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableHighlight,
  Text,
} from 'react-native';
import RateOfReturnTextColor from '../../utils/RateOfReturnTextColor';
import ConstituentItem from './ConstituentItem';
import News from './News';
import ThemePot from './ThemePot';

import {LineChart} from 'react-native-svg-charts';

const Detail = ({navigation}) => {
  const [period, setPeriod] = useState('3개월');
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableHighlight
          onPress={() => navigation.goBack()}
          style={styles.backIcon}>
          <Image source={require('../../assets/common/icn_back.png')} />
        </TouchableHighlight>
        <Text style={styles.ProductListText}>웰니스가 요즘 대세</Text>
        <TouchableHighlight
        //onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../../assets/common/icn_follow_off.png')}
            style={styles.followIcon}
          />
        </TouchableHighlight>
      </View>
      <View style={{...styles.priceContainer, marginTop: 12}}>
        <Text style={[styles.price, styles.priceColor]}>1,123,000</Text>
        <Text style={[styles.won, styles.priceColor]}>원</Text>
      </View>
      <View style={{...styles.priceContainer, marginTop: 2, marginBottom: 24}}>
        <Text
          style={{
            fontSize: 11,
            paddingRight: 6,
            color: RateOfReturnTextColor('-0.2%'),
          }}>
          -0.2%
        </Text>
        <View style={styles.bar} />
        <Text style={{fontSize: 10, paddingLeft: 6, color: '#9a9a9a'}}>
          전일 기준
        </Text>
      </View>
      <LineChart
        style={{height: 140}}
        data={data}
        svg={{stroke: '#f02655'}}
        contentInset={{top: 8, bottom: 28}}
        showGrid={true}
      />
      <View style={styles.period}>
        <TouchableHighlight onPress={() => setPeriod('1개월')}>
          <Text
            style={[
              styles.periodText,
              period === '1개월' ? styles.periodBorder : null,
            ]}>
            1개월
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => setPeriod('3개월')}>
          <Text
            /*style={{
              ...styles.periodText,
              borderWidth: period === '3개월' ? 1 : 0,
              color: period === '3개월' ? '#4e7cff' : '#9a9a9a',
              borderRadius: period === '3개월' ? 20 : 0,
              borderColor: period === '3개월' ? '#4e7cff' : '',
            }}*/
            style={[
              styles.periodText,
              period === '3개월' ? styles.periodBorder : null,
            ]}>
            3개월
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => setPeriod('6개월')}>
          <Text
            style={[
              styles.periodText,
              period === '6개월' ? styles.periodBorder : null,
            ]}>
            6개월
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => setPeriod('누적')}>
          <Text
            style={[
              styles.periodText,
              period === '누적' ? styles.periodBorder : null,
            ]}>
            누적
          </Text>
        </TouchableHighlight>
      </View>
      <View style={styles.seperateBar} />
      <View
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: 24,
          paddingBottom: 30,
        }}>
        <Text
          style={{
            height: 68,
            textAlign: 'left',
            textAlignVertical: 'center',
            fontSize: 16,
            color: '#3d3f42',
          }}>
          구성 종목
        </Text>
        <ConstituentItem />
      </View>
      <View style={styles.seperateBar} />
      <View
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: 24,
          paddingBottom: 30,
        }}>
        <Text
          style={{
            height: 68,
            textAlign: 'left',
            textAlignVertical: 'center',
            fontSize: 16,
            color: '#3d3f42',
          }}>
          관련 기사
        </Text>
        <News />
      </View>
      <View style={styles.seperateBar} />
      <View
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: 24,
          paddingBottom: 30,
        }}>
        <Text
          style={{
            height: 68,
            textAlign: 'left',
            textAlignVertical: 'center',
            fontSize: 16,
            color: '#3d3f42',
          }}>
          회원님이 좋아할만한 테마포트
        </Text>
        <ThemePot />
      </View>
      <Text
        style={{
          height: 56,
          backgroundColor: '#6359fa',
          color: '#ffffff',
          fontSize: 16,
          textAlign: 'center',
          textAlignVertical: 'center',
        }}>
        투자하기
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
  },
  backIcon: {
    margin: 18,
    width: 20,
    height: 20,
  },
  followIcon: {
    width: 20,
    height: 20,
    margin: 18,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceColor: {
    color: '#3d3f42',
  },
  price: {
    fontSize: 22,
  },
  won: {
    fontSize: 16,
  },
  bar: {
    height: 8,
    width: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#979797',
    opacity: 0.4835146949404762,
  },
  period: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 24,
  },
  periodText: {
    width: 57,
    height: 26,
    fontSize: 11,
    color: '#9a9a9a',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  periodBorder: {
    borderWidth: 1,
    color: '#4e7cff',
    borderRadius: 20,
    borderColor: '#4e7cff',
  },
  seperateBar: {
    height: 8,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#f2f2f2',
  },
});

export default Detail;
