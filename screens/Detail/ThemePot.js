import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import RateOfReturnTextColor from '../../utils/RateOfReturnTextColor';
const {width: screenWidth} = Dimensions.get('window');

const ENTRIES1 = [
  {
    title: '미국 배당주 I',
    subtitle: `점점 진화하는 '건강'에 대한 정의,
    그 중심에 있는 기업들`,
    illustration: require('../../assets/potIcon/fp_0001.png'),
    stockReturn: '-23.48%',
  },
  {
    title: '미국 배당주 II',
    subtitle: `You Only Live Once, 인생에서
    빼놓을 수 없는 ‘여행’의 필수적인 기업`,
    illustration: require('../../assets/potIcon/fp_0002.png'),
    stockReturn: '+23.48%',
  },
  {
    title: '코로나 의료',
    subtitle: `코로나 19를 이겨낼 
    의료 시스템 기업들`,
    illustration: require('../../assets/potIcon/fp_0003.png'),
    stockReturn: '+23.48%',
  },
  {
    title: '13F 보고서',
    subtitle: `현금부자 워렌버핏은
    어떤 기업을 샀을까?`,
    illustration: require('../../assets/potIcon/fp_0004.png'),
    stockReturn: '+23.48%',
  },
  {
    title: 'IT 대세기업',
    subtitle: `세계적인 운동화 브랜드,
    JUST DO IT !`,
    illustration: require('../../assets/potIcon/fp_0005.png'),
    stockReturn: '+23.48%',
  },
  {
    title: '클라우드',
    subtitle: `세계적인 운동화 브랜드,
    JUST DO IT !`,
    illustration: require('../../assets/potIcon/fp_0006.png'),
    stockReturn: '+23.48%',
  },
];

const ThemePot = () => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.ProductContainer} key={index}>
        <View style={styles.ProductTitle}>
          <View>
            <Text style={styles.ProductNameText}>{item.title}</Text>
          </View>
        </View>
        <Text
          style={{
            ...styles.StockReturnText,
            color: RateOfReturnTextColor(item.stockReturn),
          }}>
          {item.stockReturn}
        </Text>
      </View>
    );
  };
  return (
    <View>
      <View style={styles.recommandProductContainer}>
        <Carousel
          ref={carouselRef}
          sliderWidth={144}
          sliderHeight={137}
          itemWidth={144}
          data={entries}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recommandProductContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  ProductContainer: {
    display: 'flex',
    width: 144,
    height: 137,
    borderRadius: 10,
    borderColor: '#f2f2f2',
    borderWidth: 2,
  },
  ProductTitle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProductNameText: {
    fontSize: 16,
    color: '#3d3f42',
    alignItems: 'center',
    paddingTop: 72,
  },

  StockReturnText: {
    paddingTop: 1,
    fontSize: 18,
    alignSelf: 'center',
  },
});
export default ThemePot;
