import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import EmptyList from '../../components/EmptyList/EmptyList';
import Separator from '../../components/Separator/Separator';
import RateOfReturnTextColor from '../../utils/RateOfReturnTextColor';

const Tab = createMaterialTopTabNavigator();
const ThemePot = () => {
  const DATA = [
    {
      id: '1',
      num: '01',
      name: '지속가능발전',
      return: '0%',
      follow: true,
    },
    {
      id: '2',
      num: '02',
      name: '월급소비주',
      return: '+69.40%',
      follow: false,
    },
    {
      id: '3',
      num: '03',
      name: '강한 직구 열풍',
      return: '-64.85%',
      follow: true,
    },
    {
      id: '4',
      num: '04',
      name: 'IT 대세기업',
      return: '+54.41%',
      follow: false,
    },
    {
      id: '5',
      num: '05',
      name: '웰니스라이프',
      return: '+52.31%',
      follow: false,
    },
    {
      id: '6',
      num: '06',
      name: '반려견을 위해',
      return: '+42.29%',
      follow: true,
    },
    {
      id: '7',
      num: '07',
      name: '반려견을 위해',
      return: '+42.29%',
      follow: false,
    },
    {
      id: '8',
      num: '08',
      name: '반려견을 위해',
      return: '+42.29%',
      follow: false,
    },
  ];
  const renderItem = ({item}) => {
    const icon = item.follow
      ? require('../../assets/common/icn_follow_on.png')
      : require('../../assets/common/icn_follow_off.png');
    return (
      <>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
            height: 70,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                marginLeft: 24,
                fontSize: 14,
                color: '#b5b5b5',
              }}>
              {item.num}
            </Text>
            <Text
              style={{
                marginLeft: 6,
                fontSize: 13,
                color: '#3d3f42',
              }}>
              {item.name}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 14,
                marginRight: 16,
                color: RateOfReturnTextColor(item.return),
              }}>
              {item.return}
            </Text>
            <Image
              source={icon}
              style={{
                marginRight: 22,
                width: 20,
                height: 20,
              }}
            />
          </View>
        </View>
        <Separator />
      </>
    );
  };
  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const AdvicePot = () => {
  const DATA = [
    {
      id: '1',
      num: '01',
      name: '베스트 자문상품',
      return: '+11.02%',
    },
    {
      id: '2',
      num: '02',
      name: '(자문) 홈루덴스',
      return: '-1.02%',
    },
    {
      id: '3',
      num: '03',
      name: '(자문) YOLO족 욜로와',
      return: '+64.85%',
    },
    {
      id: '4',
      num: '04',
      name: 'MRNA&ABUS',
      return: '+54.41%',
    },
    {
      id: '5',
      num: '05',
      name: 'NIO&INTC',
      return: '+52.31%',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
            height: 70,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                marginLeft: 24,
                fontSize: 14,
                color: '#b5b5b5',
              }}>
              {item.num}
            </Text>
            <Text
              style={{
                marginLeft: 6,
                fontSize: 13,
                color: '#3d3f42',
              }}>
              {item.name}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 14,
                marginRight: 16,
                color: RateOfReturnTextColor(item.return),
              }}>
              {item.return}
            </Text>
          </View>
        </View>
        <Separator />
      </>
    );
  };
  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const MyPot = () => {
  // const DATA = [
  //   {
  //     id: '1',
  //     num: '01',
  //     name: '베스트 자문상품',
  //     return: '+11.02%',
  //   },
  //   {
  //     id: '2',
  //     num: '02',
  //     name: '(자문) 홈루덴스',
  //     return: '-1.02%',
  //   },
  //   {
  //     id: '3',
  //     num: '03',
  //     name: '(자문) YOLO족 욜로와',
  //     return: '+64.85%',
  //   },
  // ];
  const DATA = null;
  const emptyIcon = require('../../assets/common/icn_nocustom.png');

  const renderItem = ({item}) => {
    return (
      <>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
            height: 70,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                marginLeft: 24,
                fontSize: 14,
                color: '#b5b5b5',
              }}>
              {item.num}
            </Text>
            <Text
              style={{
                marginLeft: 6,
                fontSize: 13,
                color: '#3d3f42',
              }}>
              {item.name}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 14,
                marginRight: 16,
                color: RateOfReturnTextColor(item.return),
              }}>
              {item.return}
            </Text>
          </View>
        </View>
        <Separator />
      </>
    );
  };
  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      {DATA ? (
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <EmptyList
          image={emptyIcon}
          text1="나만의 포트가 없습니다."
          text2="자산커스텀을 통해 나만의 포트를 만들어보세요."
          text3={null}
        />
      )}
    </View>
  );
};
const PotTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="테마 포트" component={ThemePot} />
      <Tab.Screen name="자문 포트" component={AdvicePot} />
      <Tab.Screen name="마이 포트" component={MyPot} />
    </Tab.Navigator>
  );
};

const PotList = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => navigation.goBack()}
          style={styles.backIcon}>
          <Image source={require('../../assets/common/icn_back.png')} />
        </TouchableHighlight>
        <Text style={styles.ProductListText}>상품 리스트</Text>
      </View>
      <PotTab />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 56,
  },
  potContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: '100%',
  },
  backIcon: {
    position: 'absolute',
    left: 0,
    top: 0,
    margin: 18,
    width: 20,
    height: 20,
  },
  ProductListText: {
    color: '#3d3f42',
    textAlignVertical: 'center',
    textAlign: 'center',
    height: 56,
    fontSize: 16,
  },
});

export default PotList;
