import React, {useRef, Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Separator from '../../components/Separator/Separator';
import RateOfReturnTextColor from '../../utils/RateOfReturnTextColor';

const {width: screenWidth} = Dimensions.get('window');

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

const Item = ({item, navigation}) => (
  <View style={styles.itemContainer}>
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Detail')}>
      <View style={styles.itemNameContainer}>
        <Text style={styles.itemNumber}>{item.num}</Text>
        <Text style={styles.itemName}>{item.title}</Text>
      </View>
    </TouchableWithoutFeedback>
    <View style={styles.itemReturnValueContainer}>
      <Text
        style={{
          fontSize: 16,
          color: RateOfReturnTextColor(item.return),
        }}>
        {item.return}
      </Text>
      <Text style={styles.itemValue}>{item.value}</Text>
    </View>
  </View>
);

class ProductList extends Component {
  //const {title, data, onPress, navigation} = this.props;
  //console.log(this.props.navigation);
  //const carouselRef = useRef(null);

  renderItem = ({item, index}) => {
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
        <View style={{paddingHorizontal: 26}}>
          <Item item={item[0]} navigation={this.props.navigation} />
          <Separator />
          <Item item={item[1]} navigation={this.props.navigation} />
          <Separator />
          <Item item={item[2]} navigation={this.props.navigation} />
        </View>
        <View style={styles.bullets}>{bullets}</View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.productListContainer}>
        <View style={styles.productListTitleContainer}>
          <Image
            source={require('../../assets/main/icn_go.png')}
            style={styles.goIcon}
          />
          <Text style={styles.productListTitle} onPress={this.props.onPress}>
            {this.props.title}
          </Text>
        </View>

        <Carousel
          /*ref={carouselRef}*/
          sliderWidth={screenWidth}
          sliderHeight={236}
          itemWidth={312 + 24}
          data={this.props.data}
          renderItem={this.renderItem.bind(this)}
        />
      </View>
    );
  }
}

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
    // paddingHorizontal: 26,
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
