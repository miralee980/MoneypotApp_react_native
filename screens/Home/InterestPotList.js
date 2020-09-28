import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Separator from '../../components/Separator/Separator';
import RateOfReturnTextColor from '../../utils/RateOfReturnTextColor';

const EmptyInterestList = () => {
  return (
    <View>
      <View style={styles.interestListContainer}>
        <View style={styles.weatherIconArea}>
          <Image source={require('../../assets/main/icn_sunny_gray.png')} />
          <Text style={styles.weaderReturn}>+84.36%</Text>
        </View>
        <View style={styles.weatherIconArea}>
          <Image source={require('../../assets/main/icn_cloudy_gray.png')} />
          <Text style={styles.weaderReturn}>-1.02%</Text>
        </View>
        <View style={styles.weatherIconArea}>
          <Image source={require('../../assets/main/icn_sunny_gray.png')} />
          <Text style={styles.weaderReturn}>+10.24%</Text>
        </View>
      </View>
      <Text style={styles.noFollowPotText}>팔로우한 포트가 없습니다.</Text>
      <Text style={styles.followInterestPot}>
        관심포트를 팔로우하고 수익률 날씨 정보를 받아보세요
      </Text>
      <View style={styles.followButton}>
        <Image source={require('../../assets/main/icn_more.png')} />
        <Text style={styles.followText}>팔로우하러 가기</Text>
      </View>
    </View>
  );
};

const Item = ({item}) => (
  <View style={styles.itemContainer}>
    <View style={styles.itemNameContainer}>
      {item.weather === 'cloudy' ? (
        <Image
          style={styles.itemWeatherIcon}
          source={require('../../assets/main/icn_cloudy.png')}
        />
      ) : item.weather === 'sunny' ? (
        <Image
          style={styles.itemWeatherIcon}
          source={require('../../assets/main/icn_sunny.png')}
        />
      ) : (
        <Image
          style={styles.itemWeatherIcon}
          source={require('../../assets/main/icn_foggy.png')}
        />
      )}
      <Text style={styles.itemName}>{item.title}</Text>
    </View>
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

const InterestPotList = ({title, data, onPress}) => {
  return (
    <View style={styles.productListContainer}>
      <View style={styles.productListTitleContainer}>
        <Image
          source={require('../../assets/main/icn_go.png')}
          style={styles.goIcon}
        />
        <Text style={styles.productListTitle}>{title}</Text>
        <Text style={styles.productListCount}>+{data.length}</Text>
      </View>

      <View
        style={{
          ...styles.productList,
          height: data === null ? 188 : 160,
        }}>
        {data === null ? (
          <EmptyInterestList />
        ) : (
          <>
            <Item item={data[0]} />
            <Separator />
            <Item item={data[1]} />
            <Separator />
            <Item item={data[2]} />
          </>
        )}
      </View>
      {data ? (
        <>
          <Text style={styles.explainWeatherText}>
            내가 찜한 포트의 수익률 상승과 하락에 따라 날씨가 변해요!
          </Text>
          <View style={styles.followContainer}>
            <Image source={require('../../assets/main/icn_more.png')} />
            <Text style={styles.followText} onPress={onPress}>
              팔로우하러 가기
            </Text>
          </View>
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  productListContainer: {
    marginTop: 42,
    marginHorizontal: 24,
  },
  interestListContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 26,
  },
  weatherIconArea: {
    alignItems: 'center',
    paddingRight: 12,
  },
  weaderReturn: {fontSize: 12, color: '#dedede'},
  noFollowPotText: {
    fontSize: 16,
    color: '#797979',
    textAlign: 'center',
    marginTop: 6,
    fontWeight: 'bold',
  },
  followInterestPot: {
    fontSize: 11,
    color: '#9a9a9a',
    textAlign: 'center',
  },
  followButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 18,
    borderWidth: 2,
    borderColor: '#f4f4f4',
    width: 129,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
  followText: {fontSize: 13, color: '#cccccc'},
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
  itemWeatherIcon: {
    width: 16,
    height: 16,
  },
  itemName: {
    paddingLeft: 9,
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
  productListTitleContainer: {
    width: 312,
    height: 41,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
  productListCount: {
    fontSize: 14,
    color: '#3d3f42',
    paddingLeft: 2,
  },
  explainWeatherText: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 11,
    color: '#9a9a9a',
  },
  followContainer: {
    width: 129,
    height: 30,
    borderWidth: 1,
    borderColor: '#eaeaea',
    borderRadius: 20,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    shadowOffset: {
      height: 4,
    },
  },
  followText: {
    paddingVertical: 4,
    fontSize: 13,
    color: '#cccccc',
  },
});

export default InterestPotList;
