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

const Recommand = () => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.ProductContainer}>
        <View style={styles.ProductTitle}>
          <View>
            <Text style={styles.ProductNameText}>{item.title}</Text>
            <View style={styles.ProductNamePoint} />
          </View>
          <Image source={item.illustration} style={styles.ProductImage} />
        </View>
        <Text style={styles.ProductComment}>{item.subtitle}</Text>
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
      <Text style={styles.recommandText}>이런 상품을 추천해요!</Text>
      <View style={styles.recommandProductContainer}>
        <Carousel
          ref={carouselRef}
          sliderWidth={screenWidth}
          sliderHeight={184}
          itemWidth={232 + 10}
          data={entries}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recommandText: {
    marginTop: 107,
    marginLeft: 24,
    fontSize: 20,
    color: '#4e7cff',
    fontWeight: 'bold',
  },
  recommandProductContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  ProductContainer: {
    display: 'flex',
    width: 232,
    height: 184,
    borderRadius: 10,
    borderColor: '#f2f2f2',
    borderWidth: 2,
    paddingLeft: 20,
  },
  ProductTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  ProductNameText: {
    fontSize: 20,
    color: '#3d3f42',
  },
  ProductNamePoint: {
    borderColor: '#4e7dff',
    borderBottomWidth: 1,
    width: 15,
  },
  ProductImage: {
    width: 90,
    height: 90,
  },
  ProductComment: {
    paddingTop: 9,
    fontSize: 12,
    color: '#9a9a9a',
  },
  StockReturnText: {
    paddingTop: 8,
    fontSize: 22,
  },
});
export default Recommand;
