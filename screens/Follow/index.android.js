import React, {createRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import Header from '../../components/Header/SearchUserHeader';
import EmptyList from '../../components/EmptyList/EmptyList';
import Separator from '../../components/Separator/Separator';
import RateOfReturnTextColor from '../../utils/RateOfReturnTextColor';

const actionSheetRef = createRef();
const emptyIcon = require('../../assets/common/icn_nofollow.png');
const DATA = [
  {id: 1, name: '지속가능발전', follow: true, return: '+2.24%'},
  {id: 2, name: '월급소비주', follow: true, return: '-2.24%'},
  {id: 3, name: '웰니스라이프', follow: true, return: '+52.31%'},
];

const FilterHeader = () => {
  return (
    <View>
      <Text>팔로우 필터</Text>
      <Image source={require('../../assets/common/icn_close.png')} />
    </View>
  );
};
const Follow = () => {
  let actionSheet;
  var [selectedFilter, setSelecteFiler] = useState('최근 담은 순');
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
            paddingHorizontal: 24,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: '#3d3f42',
              }}>
              {item.name}
            </Text>
            <Image
              source={icon}
              style={{
                marginLeft: 8,
                width: 16,
                height: 16,
              }}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 18,
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
  const onFilerSelecHandler = (filter) => {
    setSelecteFiler(filter);
    //actionSheetRef.current?.setModalVisible(false);/
  };
  return (
    <View style={styles.container}>
      <Header backgroundColor={'#fff'} iconColor={'gray'} title={'팔로우'} />
      {DATA ? (
        <>
          <TouchableOpacity
            style={styles.filterSelect}
            onPress={() => {
              actionSheetRef.current?.setModalVisible();
            }}>
            <Image
              style={styles.arrowDownIcon}
              source={require('../../assets/common/icn_arrow_down_12_dp.png')}
            />
            <Text style={{fontSize: 13, color: '#3d3f42'}}>
              {selectedFilter}
            </Text>
          </TouchableOpacity>
          <View style={styles.titleBorderBar} />
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <ActionSheet ref={actionSheetRef}>
            <View style={styles.filterActionContainer}>
              <View style={styles.filterActionHeader}>
                <Text style={styles.filterActionHeaderText}>팔로우 필터</Text>
                <Image
                  source={require('../../assets/common/icn_close.png')}
                  style={styles.filterActionCloseIcon}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  setSelecteFiler('최근 담은 순');
                  actionSheetRef.current?.setModalVisible(false);
                }}>
                <Text
                  style={{
                    ...styles.filteringText,
                    color:
                      selectedFilter === '최근 담은 순' ? '#3d3f42' : '#9a9a9a',
                  }}>
                  최근 담은 순
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelecteFiler('오래된 순');
                  actionSheetRef.current?.setModalVisible(false);
                }}>
                <Text
                  style={{
                    ...styles.filteringText,
                    color:
                      selectedFilter === '오래된 순' ? '#3d3f42' : '#9a9a9a',
                  }}>
                  오래된 순
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onFilerSelecHandler()}>
                <Text
                  style={{
                    ...styles.filteringText,
                    color:
                      selectedFilter === '수익률 높은 순'
                        ? '#3d3f42'
                        : '#9a9a9a',
                  }}>
                  수익률 높은 순
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelecteFiler('수익률 낮은 순');
                  actionSheetRef.current?.setModalVisible(false);
                }}>
                <Text
                  style={{
                    ...styles.filteringText,
                    color:
                      selectedFilter === '수익률 낮은 순'
                        ? '#3d3f42'
                        : '#9a9a9a',
                    marginBottom: 16,
                  }}>
                  수익률 낮은 순
                </Text>
              </TouchableOpacity>
            </View>
          </ActionSheet>
        </>
      ) : (
        <EmptyList
          image={emptyIcon}
          text1="팔로우한 포트가 없습니다."
          text2="[홈]-[상품리스트]-[테마포트]에서"
          text3="관심 있는 포트를 팔로우하세요."
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
  },
  filterSelect: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 43,
    borderWidth: 1,
    borderColor: '#f1f1f1',
  },
  arrowDownIcon: {
    width: 12,
    height: 12,
    marginRight: 10,
  },
  titleBorderBar: {
    borderWidth: 1,
    borderColor: '#f2f2f2',
    height: 8,
    backgroundColor: '#fafafa',
  },
  filterActionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterActionHeader: {
    height: 56,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  filterActionHeaderText: {
    position: 'absolute',
    top: 0,
    left: 0,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: '100%',
    height: 56,
    fontSize: 14,
    color: '#3d3f42',
  },
  filterActionCloseIcon: {
    position: 'absolute',
    width: 20,
    height: 20,
    margin: 18,
    right: 0,
    bottom: 0,
  },
  filteringText: {
    height: 54,
    textAlignVertical: 'center',
    fontSize: 13,
  },
});

export default Follow;
