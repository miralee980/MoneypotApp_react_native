import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
const {width: screenWidth} = Dimensions.get('window');

const ENTRIES1 = [
  {
    title: '나이키',
    subtitle: `세계적인 운동화 브랜드,${'\n'}JUST DO IT!`,
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
    stockReturn: '+23.48%',
  },
  {
    title: '나이키',
    subtitle: `세계적인 운동화 브랜드,${'\n'}JUST DO IT!`,
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    stockReturn: '-23.48%',
  },
  {
    title: '나이키',
    subtitle: `세계적인 운동화 브랜드,${'\n'}JUST DO IT!`,
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    stockReturn: '+23.48%',
  },
  {
    title: '나이키',
    subtitle: `세계적인 운동화 브랜드,${'\n'}JUST DO IT!`,
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    stockReturn: '+23.48%',
  },
  {
    title: '나이키',
    subtitle: `세계적인 운동화 브랜드,${'\n'}JUST DO IT!`,
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
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
          <Image
            source={require('../../assets/main/img_stock_nke.png')}
            style={styles.ProductImage}
          />
        </View>
        <Text style={styles.ProductComment}>{item.subtitle}</Text>
        <Text
          style={{
            ...styles.StockReturnText,
            color: item.stockReturn.indexOf('+') ? '#f02654' : '#262ff0',
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
