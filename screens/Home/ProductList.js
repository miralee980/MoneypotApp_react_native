import React, {useRef} from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const {width: screenWidth} = Dimensions.get('window');
const Separator = () => <View style={styles.separator} />;

const renderItem = ({item, index}) => {
  let bullets = [];
  for (let i = 1; i <= 2; i++) {
    bullets.push(
      <Text
        key={i}
        style={{
          ...styles.bullet,
          color: index + 1 === i ? '#4e7dff' : '#eaeaea',
        }}>
        &bull;
      </Text>,
    );
  }
  return (
    <View
      style={{
        ...styles.productList,
        height: 236,
      }}>
      <ProductLlistHeader
        headerContents={
          index === 0
            ? {
                title: '테마포트 차트',
                comment: '2년간 누적 수익률',
              }
            : {
                title: '자문포트 차트',
                comment: '2년간 누적 수익률',
              }
        }
      />
      <Item item={item[0]} />
      <Separator />
      <Item item={item[1]} />
      <Separator />
      <Item item={item[2]} />
      <View style={styles.bullets}>{bullets}</View>
    </View>
  );
};

const ProductLlistHeader = ({headerContents}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerIconTitle}>
        <Image
          source={require('../../assets/main/icn_group.png')}
          style={styles.headerIcon}
        />
        <Text style={styles.headerTitle}>{headerContents.title}</Text>
      </View>
      <Text style={styles.headerComment}>{headerContents.comment}</Text>
    </View>
  );
};

const Item = ({item}) => (
  <View style={styles.itemContainer}>
    <View style={styles.itemNameContainer}>
      <Text style={styles.itemNumber}>{item.num}</Text>
      <Text style={styles.itemName}>{item.title}</Text>
    </View>
    <View style={styles.itemReturnValueContainer}>
      <Text
        style={{
          fontSize: 16,
          color:
            item.return.indexOf('+') >= 0
              ? '#f02654'
              : item.return.indexOf('-') >= 0
              ? '#262ff0'
              : '#b5b5b5',
        }}>
        {item.return}
      </Text>
      <Text style={styles.itemValue}>{item.value}</Text>
    </View>
  </View>
);

const ProductList = ({title, data, onPress}) => {
  const carouselRef = useRef(null);
  return (
    <View style={styles.productListContainer}>
      <View style={styles.productListTitleContainer}>
        <Image
          source={require('../../assets/main/icn_go.png')}
          style={styles.goIcon}
        />
        <Text style={styles.productListTitle} onPress={onPress}>
          {title}
        </Text>
      </View>

      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={236}
        itemWidth={312 + 24}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productListContainer: {
    marginTop: 48,
  },
  productListTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 10,
  },
  productList: {
    borderColor: '#f4f4f4',
    borderWidth: 2,
    borderRadius: 10,
  },
  goIcon: {
    width: 20,
    height: 20,
  },
  productListTitle: {
    fontSize: 20,
    color: '#4e7cff',
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  headerContainer: {
    backgroundColor: '#f2f2f2',
    height: 49,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIconTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  headerIcon: {
    width: 24,
    height: 24,
    marginLeft: 24,
  },
  headerTitle: {
    paddingLeft: 6,
    fontSize: 18,
    color: '#3d3f42',
  },
  headerComment: {
    paddingRight: 26,
    fontSize: 12,
    color: '#9a9a9a',
    textAlign: 'right',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 26,
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  itemNameContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'flex-start',
  },
  itemNumber: {
    fontSize: 16,
    color: '#b5b5b5',
  },
  itemName: {
    paddingLeft: 6,
    fontSize: 16,
    color: '#3d3f42',
  },
  itemReturnValueContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  itemValue: {
    fontSize: 10,
    color: '#9a9a9a',
  },
  separator: {
    marginHorizontal: 16,
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
  },
  bullets: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 24,
  },
  bullet: {
    paddingHorizontal: 3,
    fontSize: 25,
  },
});

export default ProductList;